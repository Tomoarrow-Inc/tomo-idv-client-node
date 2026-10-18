import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import * as esm from '../dist/esm/index.js';

const require = createRequire(import.meta.url);
const cjs = require('../dist/cjs/index.js');
const packageRoot = fileURLToPath(new URL('..', import.meta.url));

test('strict consumers accept string, array and existing null start inputs', () => {
  const result = spawnSync(process.execPath, [
    require.resolve('typescript/bin/tsc'),
    '--strict', '--noEmit', '--module', 'nodenext', '--moduleResolution', 'nodenext',
    '--target', 'ES2023', '--skipLibCheck', 'tests/types/start-id-type.ts',
  ], { cwd: packageRoot, encoding: 'utf8' });
  assert.ifError(result.error);
  assert.equal(result.status, 0, `${result.stdout}${result.stderr}`);
});

const documentPolicy = (subject) => ({
  subject: { kind: 'document', ...subject },
  method: 'document_ocr_check',
  owner_assurance: { kind: 'no_owner_assurance', type: null },
});
const cases = [
  ['scalar document', documentPolicy({ id_type: 'passport' })],
  ['canonical document array', documentPolicy({ id_type: ['passport', 'id_card', 'driver_license', 'residency_permit_card'] })],
  ['singleton document array', documentPolicy({ id_type: ['passport'] })],
  ['array normalized by the server', documentPolicy({ id_type: [' PASSPORT ', 'Id_Card', 'passport'] })],
  ['omitted document id_type', documentPolicy({})],
  ['null document id_type', documentPolicy({ id_type: null })],
  ['empty document id_type', documentPolicy({ id_type: '' })],
  ['whitespace document id_type', documentPolicy({ id_type: '  ' })],
  ['null SMS id_type', { subject: { kind: 'personal_info', id_type: null }, method: 'personal_info_verf', owner_assurance: { kind: 'owner_verf', type: 'sms_otp' } }],
  ['omitted SMS id_type', { subject: { kind: 'personal_info' }, method: 'personal_info_verf', owner_assurance: { kind: 'owner_verf', type: 'sms_otp' } }],
  ['certificate scalar', { subject: { kind: 'eid', id_type: 'certificate' }, method: 'government_ci_verf', owner_assurance: { kind: 'owner_verf', type: null } }, 'kr'],
  ['policy preset', { preset: 'database_verification_with_document_check' }],
];

for (const [format, sdk] of [['ESM', esm], ['CommonJS', cjs]]) {
  for (const [name, policy, country] of cases) {
    test(`${format} start preserves ${name} through the API transport`, async () => {
      const request = {
        email: 'sdk-regression@example.invalid',
        redirect_url_success: 'http://localhost:4300/success',
        redirect_url_fail: 'http://localhost:4300/fail',
        kyc_policy: policy,
        ...(country === undefined ? {} : { country }),
      };
      const calls = [];
      const api = new sdk.DefaultApi(new sdk.Configuration({
        basePath: 'http://sdk.invalid',
        accessToken: 'synthetic-test-token',
        // Capture the generated runtime's final body without accessing a server.
        fetchApi: async (url, init) => {
          calls.push({ url, ...init, body: JSON.parse(init.body) });
          return new Response(JSON.stringify({ start_idv_uri: 'http://localhost:4000/synthetic-start' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        },
      }));

      const response = await api.v1IdvStartPost({ Tomo_API_Version: '1.4', StartIdvReq: request });
      assert.deepEqual(response, { start_idv_uri: 'http://localhost:4000/synthetic-start' });
      assert.equal(calls.length, 1);
      assert.equal(calls[0].url, 'http://sdk.invalid/v1/idv/start');
      assert.equal(calls[0].method, 'POST');
      assert.equal(calls[0].headers['Authorization'], 'Bearer synthetic-test-token');
      assert.equal(calls[0].headers['Tomo-API-Version'], '1.4');
      assert.deepEqual(calls[0].body, request);
      assert.deepEqual(JSON.parse(JSON.stringify(sdk.StartIdvReqToJSON(request))), request);
    });
  }
}
