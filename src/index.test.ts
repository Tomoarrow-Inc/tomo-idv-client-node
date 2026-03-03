/**
 * Tests for tomo-idv-client-node SDK
 *
 * Unit Tests — verify each function with known inputs/outputs.
 * Property Tests — verify invariants that must hold for ALL inputs.
 *
 * Run: npx vitest run src/index.test.ts
 *   or: npx jest src/index.test.ts
 */
import { describe, it, expect } from 'vitest';
import { createClientAssertion, buildTokenRequest } from './index';
import { createPrivateKey, createPublicKey, createVerify, generateKeyPairSync } from 'node:crypto';

// ── Test Helpers ──────────────────────────────────────────────

/** Generate a fresh ES256 key pair and return base64url-encoded JWK of private key. */
function generateTestKeyPair() {
  const { privateKey } = generateKeyPairSync('ec', { namedCurve: 'P-256' });
  const jwk = privateKey.export({ format: 'jwk' });
  const jwkJson = JSON.stringify(jwk);
  const encoded = Buffer.from(jwkJson, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/u, '');
  return { privateKey, jwk, encoded };
}

/** Decode a compact JWT into { header, payload, signature } without verification. */
function decodeJwt(token: string) {
  const [headerB64, payloadB64, signatureB64] = token.split('.');
  const header = JSON.parse(Buffer.from(headerB64, 'base64url').toString('utf8'));
  const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));
  return { header, payload, signatureB64 };
}

// ============================================================
// Unit Tests
// ============================================================

describe('[SDK] createClientAssertion', () => {
  const testKey = generateTestKeyPair();
  const options = {
    client_id: 'test-client-id',
    secret_key: testKey.encoded,
    base_url: 'https://api.example.com',
  };

  it('[SDK-001] returns a valid 3-part JWT string (header.payload.signature)', () => {
    const jwt = createClientAssertion(options);
    const parts = jwt.split('.');
    expect(parts).toHaveLength(3);
    parts.forEach((part) => expect(part.length).toBeGreaterThan(0));
  });

  it('[SDK-002] JWT header has alg=ES256 and typ=JWT', () => {
    const jwt = createClientAssertion(options);
    const { header } = decodeJwt(jwt);
    expect(header.alg).toBe('ES256');
    expect(header.typ).toBe('JWT');
  });

  it('[SDK-003] JWT payload has correct iss, sub, aud fields', () => {
    const jwt = createClientAssertion(options);
    const { payload } = decodeJwt(jwt);
    expect(payload.iss).toBe('test-client-id');
    expect(payload.sub).toBe('test-client-id');
    expect(payload.aud).toBe('https://api.example.com/v1/oauth2/token');
  });

  it('[SDK-004] iss and sub are always equal (client_id)', () => {
    const jwt = createClientAssertion(options);
    const { payload } = decodeJwt(jwt);
    expect(payload.iss).toBe(payload.sub);
  });

  it('[SDK-005] exp is exactly 300 seconds after iat (5 min TTL)', () => {
    const jwt = createClientAssertion(options);
    const { payload } = decodeJwt(jwt);
    expect(payload.exp - payload.iat).toBe(300);
  });

  it('[SDK-006] jti is a valid UUID v4 string', () => {
    const jwt = createClientAssertion(options);
    const { payload } = decodeJwt(jwt);
    expect(payload.jti).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });

  it('[SDK-007] each call produces a different jti (no replay)', () => {
    const jwt1 = createClientAssertion(options);
    const jwt2 = createClientAssertion(options);
    const { payload: p1 } = decodeJwt(jwt1);
    const { payload: p2 } = decodeJwt(jwt2);
    expect(p1.jti).not.toBe(p2.jti);
  });

  it('[SDK-008] JWT signature is verifiable with the matching public key', () => {
    const jwt = createClientAssertion(options);
    const [headerB64, payloadB64, sigB64] = jwt.split('.');
    const signingInput = `${headerB64}.${payloadB64}`;

    // Reconstruct public key from private JWK
    const privateJwk = JSON.parse(Buffer.from(testKey.encoded, 'base64url').toString('utf8'));
    const { d, ...publicJwk } = privateJwk; // remove private component
    const publicKey = createPublicKey({ key: publicJwk, format: 'jwk' });

    // Decode base64url signature
    const sigBuf = Buffer.from(sigB64, 'base64url');

    const verifier = createVerify('sha256');
    verifier.update(signingInput);
    verifier.end();
    const valid = verifier.verify({ key: publicKey, dsaEncoding: 'ieee-p1363' }, sigBuf);
    expect(valid).toBe(true);
  });

  it('[SDK-009] throws on invalid (non-base64url) secret_key', () => {
    expect(() =>
      createClientAssertion({ ...options, secret_key: '!!!invalid!!!' })
    ).toThrow();
  });
});

describe('[SDK] buildTokenRequest', () => {
  it('[SDK-020] returns Content-Type application/x-www-form-urlencoded', () => {
    const { headers } = buildTokenRequest('some-jwt');
    expect(headers['Content-Type']).toBe('application/x-www-form-urlencoded');
  });

  it('[SDK-021] body contains all required OAuth2 fields with defaults', () => {
    const { body } = buildTokenRequest('test-assertion');
    const params = new URLSearchParams(body);
    expect(params.get('grant_type')).toBe('client_credentials');
    expect(params.get('scope')).toBe('idv.read');
    expect(params.get('resource')).toBe('https://api.tomopayment.com/v1/idv');
    expect(params.get('client_assertion_type')).toBe(
      'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
    );
    expect(params.get('client_assertion')).toBe('test-assertion');
  });

  it('[SDK-022] custom options override defaults', () => {
    const { body } = buildTokenRequest('jwt', {
      grant_type: 'authorization_code',
      scope: 'openid',
      resource: 'https://custom.example.com',
      client_assertion_type: 'custom-type',
    });
    const params = new URLSearchParams(body);
    expect(params.get('grant_type')).toBe('authorization_code');
    expect(params.get('scope')).toBe('openid');
    expect(params.get('resource')).toBe('https://custom.example.com');
    expect(params.get('client_assertion_type')).toBe('custom-type');
  });

  it('[SDK-023] empty options object uses all defaults', () => {
    const { body } = buildTokenRequest('jwt', {});
    const params = new URLSearchParams(body);
    expect(params.get('grant_type')).toBe('client_credentials');
  });

  it('[SDK-024] client_assertion value is passed through unmodified', () => {
    const longAssertion = 'eyJhbGciOiJFUzI1NiJ9.payload.signature';
    const { body } = buildTokenRequest(longAssertion);
    const params = new URLSearchParams(body);
    expect(params.get('client_assertion')).toBe(longAssertion);
  });
});

// ============================================================
// Property Tests
// ============================================================

describe('[SDK] Property Tests', () => {
  const testKey = generateTestKeyPair();

  it('[SDK-P001] createClientAssertion always produces a 3-part JWT for any client_id', () => {
    const clientIds = ['a', 'test', 'long-client-id-with-special-chars_123', '한국어'];
    for (const cid of clientIds) {
      const jwt = createClientAssertion({
        client_id: cid,
        secret_key: testKey.encoded,
        base_url: 'https://example.com',
      });
      expect(jwt.split('.')).toHaveLength(3);
    }
  });

  it('[SDK-P002] buildTokenRequest always includes all 5 params regardless of input', () => {
    const assertions = ['', 'short', 'a'.repeat(1000), 'special chars: +/='];
    const requiredKeys = ['grant_type', 'scope', 'resource', 'client_assertion_type', 'client_assertion'];
    for (const assertion of assertions) {
      const { body } = buildTokenRequest(assertion);
      const params = new URLSearchParams(body);
      for (const key of requiredKeys) {
        expect(params.has(key)).toBe(true);
      }
    }
  });

  it('[SDK-P003] exp - iat is always 300 seconds for any base_url', () => {
    const urls = ['https://a.com', 'https://very-long-domain.example.com/path', 'http://localhost:3000'];
    for (const url of urls) {
      const jwt = createClientAssertion({
        client_id: 'test',
        secret_key: testKey.encoded,
        base_url: url,
      });
      const { payload } = decodeJwt(jwt);
      expect(payload.exp - payload.iat).toBe(300);
    }
  });

  it('[SDK-P004] iss === sub for any client_id (invariant of client_credentials flow)', () => {
    for (let i = 0; i < 10; i++) {
      const jwt = createClientAssertion({
        client_id: `client-${i}`,
        secret_key: testKey.encoded,
        base_url: 'https://example.com',
      });
      const { payload } = decodeJwt(jwt);
      expect(payload.iss).toBe(payload.sub);
    }
  });
});
