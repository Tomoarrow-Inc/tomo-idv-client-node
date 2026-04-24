# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1IdvCaHealthGet**](DefaultApi.md#v1idvcahealthget) | **GET** /v1/idv/ca/health |  |
| [**v1IdvCaKycGetPost**](DefaultApi.md#v1idvcakycgetpost) | **POST** /v1/idv/ca/kyc/get |  |
| [**v1IdvCaStartPost**](DefaultApi.md#v1idvcastartpost) | **POST** /v1/idv/ca/start |  |
| [**v1IdvCnCookieStartPost**](DefaultApi.md#v1idvcncookiestartpost) | **POST** /v1/idv/cn/cookie/start |  |
| [**v1IdvCnHealthGet**](DefaultApi.md#v1idvcnhealthget) | **GET** /v1/idv/cn/health |  |
| [**v1IdvCnKycGetPost**](DefaultApi.md#v1idvcnkycgetpost) | **POST** /v1/idv/cn/kyc/get |  |
| [**v1IdvCnResultWebPost**](DefaultApi.md#v1idvcnresultwebpost) | **POST** /v1/idv/cn/result/web |  |
| [**v1IdvCnStartPost**](DefaultApi.md#v1idvcnstartpost) | **POST** /v1/idv/cn/start |  |
| [**v1IdvCnTokenPost**](DefaultApi.md#v1idvcntokenpost) | **POST** /v1/idv/cn/token |  |
| [**v1IdvJpHealthGet**](DefaultApi.md#v1idvjphealthget) | **GET** /v1/idv/jp/health |  |
| [**v1IdvJpKycGetPost**](DefaultApi.md#v1idvjpkycgetpost) | **POST** /v1/idv/jp/kyc/get |  |
| [**v1IdvJpStartPost**](DefaultApi.md#v1idvjpstartpost) | **POST** /v1/idv/jp/start |  |
| [**v1IdvKycGetPost**](DefaultApi.md#v1idvkycgetpost) | **POST** /v1/idv/kyc/get |  |
| [**v1IdvSocialGoogleStartPost**](DefaultApi.md#v1idvsocialgooglestartpost) | **POST** /v1/idv/social/google/start |  |
| [**v1IdvSocialResultPost**](DefaultApi.md#v1idvsocialresultpost) | **POST** /v1/idv/social/result |  |
| [**v1IdvSocialWechatStartPost**](DefaultApi.md#v1idvsocialwechatstartpost) | **POST** /v1/idv/social/wechat/start |  |
| [**v1IdvStartPost**](DefaultApi.md#v1idvstartpost) | **POST** /v1/idv/start |  |
| [**v1IdvUkHealthGet**](DefaultApi.md#v1idvukhealthget) | **GET** /v1/idv/uk/health |  |
| [**v1IdvUkKycGetPost**](DefaultApi.md#v1idvukkycgetpost) | **POST** /v1/idv/uk/kyc/get |  |
| [**v1IdvUkStartPost**](DefaultApi.md#v1idvukstartpost) | **POST** /v1/idv/uk/start |  |
| [**v1IdvUsHealthGet**](DefaultApi.md#v1idvushealthget) | **GET** /v1/idv/us/health |  |
| [**v1IdvUsKycGetPost**](DefaultApi.md#v1idvuskycgetpost) | **POST** /v1/idv/us/kyc/get |  |
| [**v1IdvUsStartPost**](DefaultApi.md#v1idvusstartpost) | **POST** /v1/idv/us/start |  |
| [**v1Oauth2TokenPost**](DefaultApi.md#v1oauth2tokenpost) | **POST** /v1/oauth2/token |  |



## v1IdvCaHealthGet

> string v1IdvCaHealthGet()



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCaHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.v1IdvCaHealthGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCaKycGetPost

> { [key: string]: string; } v1IdvCaKycGetPost(Authorization, PlaidGetKycReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCaKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // PlaidGetKycReq (optional)
    PlaidGetKycReq: ...,
  } satisfies V1IdvCaKycGetPostRequest;

  try {
    const data = await api.v1IdvCaKycGetPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **PlaidGetKycReq** | [PlaidGetKycReq](PlaidGetKycReq.md) |  | [Optional] |

### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCaStartPost

> PlaidStartIdvResp v1IdvCaStartPost(Authorization, PlaidStartIdvRequest)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCaStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // PlaidStartIdvRequest (optional)
    PlaidStartIdvRequest: ...,
  } satisfies V1IdvCaStartPostRequest;

  try {
    const data = await api.v1IdvCaStartPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **PlaidStartIdvRequest** | [PlaidStartIdvRequest](PlaidStartIdvRequest.md) |  | [Optional] |

### Return type

[**PlaidStartIdvResp**](PlaidStartIdvResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnCookieStartPost

> TencentStartIdvRes v1IdvCnCookieStartPost(TencentStartReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCnCookieStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // TencentStartReq (optional)
    TencentStartReq: ...,
  } satisfies V1IdvCnCookieStartPostRequest;

  try {
    const data = await api.v1IdvCnCookieStartPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TencentStartReq** | [TencentStartReq](TencentStartReq.md) |  | [Optional] |

### Return type

[**TencentStartIdvRes**](TencentStartIdvRes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Set-Cookie -  <br>  |
| **400** | Invalid &#x60;body&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnHealthGet

> string v1IdvCnHealthGet()



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCnHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.v1IdvCnHealthGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnKycGetPost

> TencentGetUnionResultResp v1IdvCnKycGetPost(Authorization, TencentGetKycReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCnKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // TencentGetKycReq (optional)
    TencentGetKycReq: ...,
  } satisfies V1IdvCnKycGetPostRequest;

  try {
    const data = await api.v1IdvCnKycGetPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **TencentGetKycReq** | [TencentGetKycReq](TencentGetKycReq.md) |  | [Optional] |

### Return type

[**TencentGetUnionResultResp**](TencentGetUnionResultResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnResultWebPost

> any v1IdvCnResultWebPost()



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCnResultWebPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.v1IdvCnResultWebPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnStartPost

> TomoIdvStartRes v1IdvCnStartPost(Authorization, TomoIdvStartReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCnStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // TomoIdvStartReq (optional)
    TomoIdvStartReq: ...,
  } satisfies V1IdvCnStartPostRequest;

  try {
    const data = await api.v1IdvCnStartPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **TomoIdvStartReq** | [TomoIdvStartReq](TomoIdvStartReq.md) |  | [Optional] |

### Return type

[**TomoIdvStartRes**](TomoIdvStartRes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnTokenPost

> TomoIdvIssueTokenRes v1IdvCnTokenPost(Authorization, TomoIdvIssueTokenReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCnTokenPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // TomoIdvIssueTokenReq (optional)
    TomoIdvIssueTokenReq: ...,
  } satisfies V1IdvCnTokenPostRequest;

  try {
    const data = await api.v1IdvCnTokenPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **TomoIdvIssueTokenReq** | [TomoIdvIssueTokenReq](TomoIdvIssueTokenReq.md) |  | [Optional] |

### Return type

[**TomoIdvIssueTokenRes**](TomoIdvIssueTokenRes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvJpHealthGet

> string v1IdvJpHealthGet()



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvJpHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.v1IdvJpHealthGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvJpKycGetPost

> LiquidGetUnionResultResp v1IdvJpKycGetPost(Authorization, LiquidGetKycReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvJpKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // LiquidGetKycReq (optional)
    LiquidGetKycReq: ...,
  } satisfies V1IdvJpKycGetPostRequest;

  try {
    const data = await api.v1IdvJpKycGetPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **LiquidGetKycReq** | [LiquidGetKycReq](LiquidGetKycReq.md) |  | [Optional] |

### Return type

[**LiquidGetUnionResultResp**](LiquidGetUnionResultResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvJpStartPost

> LiquidIntegratedAppResponse v1IdvJpStartPost(Authorization, LiquidStartIdvRequest)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvJpStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // LiquidStartIdvRequest (optional)
    LiquidStartIdvRequest: ...,
  } satisfies V1IdvJpStartPostRequest;

  try {
    const data = await api.v1IdvJpStartPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **LiquidStartIdvRequest** | [LiquidStartIdvRequest](LiquidStartIdvRequest.md) |  | [Optional] |

### Return type

[**LiquidIntegratedAppResponse**](LiquidIntegratedAppResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvKycGetPost

> GetKycResp v1IdvKycGetPost(Authorization, GetKycReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // GetKycReq (optional)
    GetKycReq: ...,
  } satisfies V1IdvKycGetPostRequest;

  try {
    const data = await api.v1IdvKycGetPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **GetKycReq** | [GetKycReq](GetKycReq.md) |  | [Optional] |

### Return type

[**GetKycResp**](GetKycResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvSocialGoogleStartPost

> GoogleStartResp v1IdvSocialGoogleStartPost(Authorization, GoogleStartReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvSocialGoogleStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // GoogleStartReq (optional)
    GoogleStartReq: ...,
  } satisfies V1IdvSocialGoogleStartPostRequest;

  try {
    const data = await api.v1IdvSocialGoogleStartPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **GoogleStartReq** | [GoogleStartReq](GoogleStartReq.md) |  | [Optional] |

### Return type

[**GoogleStartResp**](GoogleStartResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvSocialResultPost

> GetKycResp v1IdvSocialResultPost(Authorization, SocialResultReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvSocialResultPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // SocialResultReq (optional)
    SocialResultReq: ...,
  } satisfies V1IdvSocialResultPostRequest;

  try {
    const data = await api.v1IdvSocialResultPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **SocialResultReq** | [SocialResultReq](SocialResultReq.md) |  | [Optional] |

### Return type

[**GetKycResp**](GetKycResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvSocialWechatStartPost

> WeChatStartResp v1IdvSocialWechatStartPost(Authorization, WeChatStartReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvSocialWechatStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // WeChatStartReq (optional)
    WeChatStartReq: ...,
  } satisfies V1IdvSocialWechatStartPostRequest;

  try {
    const data = await api.v1IdvSocialWechatStartPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **WeChatStartReq** | [WeChatStartReq](WeChatStartReq.md) |  | [Optional] |

### Return type

[**WeChatStartResp**](WeChatStartResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvStartPost

> StartIdvResp v1IdvStartPost(Authorization, StartIdvReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // StartIdvReq (optional)
    StartIdvReq: ...,
  } satisfies V1IdvStartPostRequest;

  try {
    const data = await api.v1IdvStartPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **StartIdvReq** | [StartIdvReq](StartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvResp**](StartIdvResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUkHealthGet

> string v1IdvUkHealthGet()



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUkHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.v1IdvUkHealthGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUkKycGetPost

> { [key: string]: string; } v1IdvUkKycGetPost(Authorization, PlaidGetKycReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUkKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // PlaidGetKycReq (optional)
    PlaidGetKycReq: ...,
  } satisfies V1IdvUkKycGetPostRequest;

  try {
    const data = await api.v1IdvUkKycGetPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **PlaidGetKycReq** | [PlaidGetKycReq](PlaidGetKycReq.md) |  | [Optional] |

### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUkStartPost

> PlaidStartIdvResp v1IdvUkStartPost(Authorization, PlaidStartIdvRequest)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUkStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // PlaidStartIdvRequest (optional)
    PlaidStartIdvRequest: ...,
  } satisfies V1IdvUkStartPostRequest;

  try {
    const data = await api.v1IdvUkStartPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **PlaidStartIdvRequest** | [PlaidStartIdvRequest](PlaidStartIdvRequest.md) |  | [Optional] |

### Return type

[**PlaidStartIdvResp**](PlaidStartIdvResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUsHealthGet

> string v1IdvUsHealthGet()



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUsHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.v1IdvUsHealthGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUsKycGetPost

> { [key: string]: string; } v1IdvUsKycGetPost(Authorization, PlaidGetKycReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUsKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // PlaidGetKycReq (optional)
    PlaidGetKycReq: ...,
  } satisfies V1IdvUsKycGetPostRequest;

  try {
    const data = await api.v1IdvUsKycGetPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **PlaidGetKycReq** | [PlaidGetKycReq](PlaidGetKycReq.md) |  | [Optional] |

### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUsStartPost

> PlaidStartIdvResp v1IdvUsStartPost(Authorization, PlaidStartIdvRequest)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUsStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // PlaidStartIdvRequest (optional)
    PlaidStartIdvRequest: ...,
  } satisfies V1IdvUsStartPostRequest;

  try {
    const data = await api.v1IdvUsStartPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **PlaidStartIdvRequest** | [PlaidStartIdvRequest](PlaidStartIdvRequest.md) |  | [Optional] |

### Return type

[**PlaidStartIdvResp**](PlaidStartIdvResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1Oauth2TokenPost

> TokenResponse v1Oauth2TokenPost(client_assertion, client_assertion_type, grant_type, resource, scope)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1Oauth2TokenPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    client_assertion: client_assertion_example,
    // string
    client_assertion_type: client_assertion_type_example,
    // string
    grant_type: grant_type_example,
    // string (optional)
    resource: resource_example,
    // string (optional)
    scope: scope_example,
  } satisfies V1Oauth2TokenPostRequest;

  try {
    const data = await api.v1Oauth2TokenPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **client_assertion** | `string` |  | [Defaults to `undefined`] |
| **client_assertion_type** | `string` |  | [Defaults to `undefined`] |
| **grant_type** | `string` |  | [Defaults to `undefined`] |
| **resource** | `string` |  | [Optional] [Defaults to `undefined`] |
| **scope** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Invalid &#x60;body&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

