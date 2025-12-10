
# 1. Overview

Tomo IDV 서비스는 User의 신분증 인증을 수행하기 위한 절차(IDV Service)를 제공합니다. IDV Service는 IDV Server, IDV App으로 구성돼있으며, Client는 IDV Server를 통해 인증을 수행 한 후, User를 IDV App으로 연결시켜 신분증 인증을 수행할 수 있습니다.

### Requirement
- TLS 1.3 (TLS 1.1, TLS 1.2는 지원하지 않습니다)
- Node.js >= 18.0.0


## Installation

```shell
npm install --save tomo-idv-client-node
```


## Usage

```typescript
import { createClientAssertion, buildTokenRequest } from 'tomo-idv-client-node';

// Create client assertion JWT
const clientAssertion = createClientAssertion({
  client_id: 'your-client-id',
  secret_key: 'your-secret-key',
  base_url: 'base-url'
});

// Build token request
const { headers, body } = buildTokenRequest(clientAssertion, {
  grant_type: 'client_credentials',
  scope: 'idv.read',
  resource: 'base-url/v1/idv'
});

// Use the token request
const response = await fetch('https://api.tomopayment.com/v1/oauth2/token', {
  method: 'POST',
  headers: headers,
  body: body
});
```

> base-url
> Test 환경: https://test.tomopayment.com
> Production 환경: https://api.tomopayment.com


## API
### `createClientAssertion(options: ClientAssertionOptions): string`

OAuth2 인증을 위한 client assertion JWT를 생성합니다.

**Parameters:**
- `options.client_id`: Your client ID
- `options.secret_key`: Base64URL-encoded JWK (JSON Web Key)
- `options.base_url`: Base URL for the API

**Returns:** JWT string

### `buildTokenRequest(client_assertion: string, options?: BodyOptions)`

Access token을 발급받기 위한 요청 Headers, Body를 만듭니다.

**Parameters:**
- `client_assertion`: JWT assertion string from `createClientAssertion`
- `options`: Optional token request parameters
  - `grant_type`: Defaults to `'client_credentials'`
  - `scope`: Defaults to `'idv.read'`
  - `resource`: Defaults to `'https://api.tomopayment.com/v1/idv'`
  - `client_assertion_type`: Defaults to `'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'`

**Returns:** `{ headers: Record<string, string>, body: string }`
