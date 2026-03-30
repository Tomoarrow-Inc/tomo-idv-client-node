# tomo-idv-client-node

Tomo IDV Node.js SDK — OAuth2 Client Assertion + IDV API Client.

Tomo IDV 서비스는 User의 신분증 인증을 수행하기 위한 절차(IDV Service)를 제공합니다. 이 SDK는 OAuth2 인증과 IDV API 호출을 위한 TypeScript 클라이언트를 제공합니다.

## Requirements

- **Node.js** >= 18.0.0
- **TLS 1.3** (TLS 1.1, 1.2는 지원하지 않습니다)

## Installation

```shell
npm install tomo-idv-client-node
```

## Quick Start

```typescript
import {
  createClientAssertion,
  buildTokenRequest,
  DefaultApi,
  Configuration,
} from 'tomo-idv-client-node';

const BASE_URL = 'https://api.tomopayment.com';

// 1. Client Assertion JWT 생성
const assertion = createClientAssertion({
  client_id: 'your-client-id',
  secret_key: 'your-base64url-jwk',
  base_url: BASE_URL,
});

// 2. Access Token 발급
const { headers, body } = buildTokenRequest(assertion);
const tokenRes = await fetch(`${BASE_URL}/v1/oauth2/token`, {
  method: 'POST',
  headers,
  body,
});
const { access_token } = await tokenRes.json();

// 3. API 클라이언트 생성
const api = new DefaultApi(new Configuration({
  basePath: BASE_URL,
  accessToken: access_token,
}));

// 4. IDV 시작
const { start_idv_uri } = await api.v1IdvUsStartPost({
  startIdvReq: {
    user_id: 'user-123',
    email: 'user@example.com',
    callback_url: 'https://your-app.com/callback',
  },
});

// 5. KYC 결과 조회
const kyc = await api.v1IdvUsKycGetPost({
  plaidGetKycReq: { user_id: 'user-123' },
});
console.log(kyc); // { full_name, date_of_birth, full_address, ... }
```

> **Base URL**
> - Test: `https://test.tomopayment.com`
> - Production: `https://api.tomopayment.com`

## API Reference

### OAuth2 — Client Assertion

#### `createClientAssertion(options): string`

OAuth2 인증을 위한 Client Assertion JWT를 생성합니다 (ES256 서명).

| Parameter | Type | Description |
|---|---|---|
| `options.client_id` | `string` | OAuth2 Client ID |
| `options.secret_key` | `string` | Base64URL-encoded JWK (P-256 Private Key) |
| `options.base_url` | `string` | API Base URL |

**Returns:** JWT string (유효기간 5분)

#### `buildTokenRequest(assertion, options?): { headers, body }`

Access Token 발급을 위한 요청 headers와 body를 생성합니다.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `assertion` | `string` | — | `createClientAssertion()`의 반환값 |
| `options.grant_type` | `string` | `'client_credentials'` | OAuth2 Grant Type |
| `options.scope` | `string` | `'idv.read'` | OAuth2 Scope |
| `options.resource` | `string` | `'https://api.tomopayment.com/v1/idv'` | OAuth2 Resource |
| `options.client_assertion_type` | `string` | `'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'` | Assertion Type |

### DefaultApi

`DefaultApi` 클래스는 IDV 서버의 모든 엔드포인트를 제공합니다.

```typescript
const api = new DefaultApi(new Configuration({
  basePath: 'https://api.tomopayment.com',
  accessToken: '<access_token>',
}));
```

#### IDV Start — 인증 시작

사용자를 IDV 인증 플로우로 연결하기 위한 URI를 발급합니다.

| Method | HTTP | Region | Request | Response |
|---|---|---|---|---|
| `v1IdvStartPost` | `POST /v1/idv/start` | Auto | `StartIdvReq` | `StartIdvResp` |
| `v1IdvUsStartPost` | `POST /v1/idv/us/start` | US | `PlaidStartIdvRequest` | `PlaidStartIdvResp` |
| `v1IdvUkStartPost` | `POST /v1/idv/uk/start` | UK | `PlaidStartIdvRequest` | `PlaidStartIdvResp` |
| `v1IdvCaStartPost` | `POST /v1/idv/ca/start` | CA | `PlaidStartIdvRequest` | `PlaidStartIdvResp` |
| `v1IdvJpStartPost` | `POST /v1/idv/jp/start` | JP | `LiquidStartIdvRequest` | `LiquidIntegratedAppResponse` |
| `v1IdvCnStartPost` | `POST /v1/idv/cn/start` | CN | `TomoIdvStartReq` | `TomoIdvStartRes` |

**StartIdvReq** (Generic):

```typescript
{
  user_id: string;        // 사용자 고유 ID (필수)
  email: string;          // 사용자 이메일 (필수)
  callback_url: string;   // 콜백 URL (필수)
  country?: Country;      // 국가 코드 (선택)
}
```

**PlaidStartIdvRequest** (US, UK, CA):

```typescript
{
  user_id: string;        // 사용자 고유 ID (필수)
  callback_url: string;   // 콜백 URL (필수)
  email?: string;         // 사용자 이메일 (선택)
}
```

#### KYC Get — 인증 결과 조회

IDV 인증이 완료된 사용자의 KYC 정보를 조회합니다.

| Method | HTTP | Region | Request | Response |
|---|---|---|---|---|
| `v1IdvKycGetPost` | `POST /v1/idv/kyc/get` | Auto | `GetKycReq` | `GetKycResp` |
| `v1IdvUsKycGetPost` | `POST /v1/idv/us/kyc/get` | US | `PlaidGetKycReq` | `{ [key: string]: string }` |
| `v1IdvUkKycGetPost` | `POST /v1/idv/uk/kyc/get` | UK | `PlaidGetKycReq` | `{ [key: string]: string }` |
| `v1IdvCaKycGetPost` | `POST /v1/idv/ca/kyc/get` | CA | `PlaidGetKycReq` | `{ [key: string]: string }` |
| `v1IdvJpKycGetPost` | `POST /v1/idv/jp/kyc/get` | JP | `LiquidGetKycReq` | `LiquidGetUnionResultResp` |
| `v1IdvCnKycGetPost` | `POST /v1/idv/cn/kyc/get` | CN | `TencentGetKycReq` | `TencentGetUnionResultResp` |

**GetKycResp**:

```typescript
{
  full_name: string;        // 전체 이름
  date_of_birth: string;    // 생년월일
  full_address: string;     // 전체 주소
  country: string;          // 국가
  given_name?: string;      // 이름
  family_name?: string;     // 성
  email_address?: string;   // 이메일
  phone_number?: string;    // 전화번호
  street?: string;          // 도로명
  city?: string;            // 도시
  region?: string;          // 주/도
  postal_code?: string;     // 우편번호
  sex?: string;             // 성별
}
```

#### Social — 소셜 로그인 연동

| Method | HTTP | Request | Response |
|---|---|---|---|
| `v1IdvSocialGoogleStartPost` | `POST /v1/idv/social/google/start` | `GoogleStartReq` | `GoogleStartResp` |
| `v1IdvSocialWechatStartPost` | `POST /v1/idv/social/wechat/start` | `WeChatStartReq` | `WeChatStartResp` |
| `v1IdvSocialResultPost` | `POST /v1/idv/social/result` | `SocialResultReq` | `GetKycResp` |

#### OAuth2 Token

| Method | HTTP | Request | Response |
|---|---|---|---|
| `v1Oauth2TokenPost` | `POST /v1/oauth2/token` | `V1Oauth2TokenPostRequest` | `TokenResponse` |

**TokenResponse**:

```typescript
{
  access_token: string;   // JWT Access Token
  token_type: string;     // "Bearer"
  expires_in: number;     // 만료 시간 (초)
  scope?: string;         // 부여된 Scope
}
```

#### Health Check

| Method | HTTP |
|---|---|
| `v1IdvUsHealthGet` | `GET /v1/idv/us/health` |
| `v1IdvUkHealthGet` | `GET /v1/idv/uk/health` |
| `v1IdvCaHealthGet` | `GET /v1/idv/ca/health` |
| `v1IdvJpHealthGet` | `GET /v1/idv/jp/health` |
| `v1IdvCnHealthGet` | `GET /v1/idv/cn/health` |

### Configuration

```typescript
new Configuration({
  basePath: string;           // API Base URL
  accessToken: string;        // Bearer Access Token
  headers?: HTTPHeaders;      // 추가 HTTP 헤더
  fetchApi?: FetchAPI;        // Custom fetch 구현체
  middleware?: Middleware[];   // 요청/응답 미들웨어
})
```

### Error Handling

```typescript
import { ResponseError, FetchError } from 'tomo-idv-client-node';

try {
  const result = await api.v1IdvUsKycGetPost({
    plaidGetKycReq: { user_id: 'user-123' },
  });
} catch (e) {
  if (e instanceof ResponseError) {
    console.error(`HTTP ${e.response.status}:`, await e.response.text());
  } else if (e instanceof FetchError) {
    console.error('Network error:', e.cause);
  }
}
```

### Models

SDK에서 export되는 전체 모델 목록:

| Model | Description |
|---|---|
| `Country` | 지원 국가 (`'us'`, `'uk'`, `'ca'`, `'jp'`, `'cn'`) |
| `StartIdvReq` / `StartIdvResp` | Generic IDV 시작 요청/응답 |
| `GetKycReq` / `GetKycResp` | Generic KYC 조회 요청/응답 |
| `PlaidStartIdvRequest` / `PlaidStartIdvResp` | Plaid IDV 시작 (US, UK, CA) |
| `PlaidGetKycReq` / `PlaidIdvField` | Plaid KYC 조회 (US, UK, CA) |
| `LiquidStartIdvRequest` / `LiquidIntegratedAppResponse` | Liquid IDV 시작 (JP) |
| `LiquidGetKycReq` / `LiquidGetUnionResultResp` / `LiquidGetResultResp` | Liquid KYC 조회 (JP) |
| `LiquidIdvField` / `LiquidSessionTokenRequest` / `LiquidPutKycReq` | Liquid 관련 모델 (JP) |
| `TomoIdvStartReq` / `TomoIdvStartRes` | Tencent IDV 시작 (CN) |
| `TencentGetKycReq` / `TencentGetKycResp` / `TencentGetUnionResultResp` | Tencent KYC 조회 (CN) |
| `TencentIdvField` | Tencent IDV 필드 (CN) |
| `GoogleStartReq` / `GoogleStartResp` | Google 소셜 로그인 |
| `WeChatStartReq` / `WeChatStartResp` | WeChat 소셜 로그인 |
| `SocialResultReq` | 소셜 인증 결과 조회 |
| `TokenResponse` | OAuth2 토큰 응답 |
| `SessionToken` | 세션 토큰 |
| `LoginTicketRequest` / `LoginTicketResponse` | 로그인 티켓 |
| `EitherStringValue` | Union 타입 (string 또는 value) |

## Supported Regions

| Region | Provider | IDV Start | KYC Get | Health |
|---|---|---|---|---|
| US | Plaid | `v1IdvUsStartPost` | `v1IdvUsKycGetPost` | `v1IdvUsHealthGet` |
| UK | Plaid | `v1IdvUkStartPost` | `v1IdvUkKycGetPost` | `v1IdvUkHealthGet` |
| CA | Plaid | `v1IdvCaStartPost` | `v1IdvCaKycGetPost` | `v1IdvCaHealthGet` |
| JP | Liquid | `v1IdvJpStartPost` | `v1IdvJpKycGetPost` | `v1IdvJpHealthGet` |
| CN | Tencent | `v1IdvCnStartPost` | `v1IdvCnKycGetPost` | `v1IdvCnHealthGet` |

## License

ISC
