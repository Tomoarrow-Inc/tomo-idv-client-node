# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1IdvCaHealthGet**](DefaultApi.md#v1idvcahealthget) | **GET** /v1/idv/ca/health |  |
| [**v1IdvCaKycGetPost**](DefaultApi.md#v1idvcakycgetpost) | **POST** /v1/idv/ca/kyc/get |  |
| [**v1IdvCaStartPost**](DefaultApi.md#v1idvcastartpost) | **POST** /v1/idv/ca/start |  |
| [**v1IdvCnHealthGet**](DefaultApi.md#v1idvcnhealthget) | **GET** /v1/idv/cn/health |  |
| [**v1IdvCnKycGetPost**](DefaultApi.md#v1idvcnkycgetpost) | **POST** /v1/idv/cn/kyc/get |  |
| [**v1IdvCnStartPost**](DefaultApi.md#v1idvcnstartpost) | **POST** /v1/idv/cn/start |  |
| [**v1IdvCnTokenPost**](DefaultApi.md#v1idvcntokenpost) | **POST** /v1/idv/cn/token |  |
| [**v1IdvHealthGet**](DefaultApi.md#v1idvhealthget) | **GET** /v1/idv/health |  |
| [**v1IdvJpHealthGet**](DefaultApi.md#v1idvjphealthget) | **GET** /v1/idv/jp/health |  |
| [**v1IdvJpKycGetPost**](DefaultApi.md#v1idvjpkycgetpost) | **POST** /v1/idv/jp/kyc/get |  |
| [**v1IdvJpStartPost**](DefaultApi.md#v1idvjpstartpost) | **POST** /v1/idv/jp/start |  |
| [**v1IdvKycGetPost**](DefaultApi.md#v1idvkycgetpost) | **POST** /v1/idv/kyc/get |  |
| [**v1IdvResetPost**](DefaultApi.md#v1idvresetpost) | **POST** /v1/idv/reset |  |
| [**v1IdvResultBulkDeletePost**](DefaultApi.md#v1idvresultbulkdeletepost) | **POST** /v1/idv/result/bulk-delete |  |
| [**v1IdvResultDeletePost**](DefaultApi.md#v1idvresultdeletepost) | **POST** /v1/idv/result/delete |  |
| [**v1IdvResultPost**](DefaultApi.md#v1idvresultpost) | **POST** /v1/idv/result |  |
| [**v1IdvSessionsStartPost**](DefaultApi.md#v1idvsessionsstartpost) | **POST** /v1/idv/sessions/start |  |
| [**v1IdvStartPost**](DefaultApi.md#v1idvstartpost) | **POST** /v1/idv/start |  |
| [**v1IdvUkHealthGet**](DefaultApi.md#v1idvukhealthget) | **GET** /v1/idv/uk/health |  |
| [**v1IdvUkKycGetPost**](DefaultApi.md#v1idvukkycgetpost) | **POST** /v1/idv/uk/kyc/get |  |
| [**v1IdvUkStartPost**](DefaultApi.md#v1idvukstartpost) | **POST** /v1/idv/uk/start |  |
| [**v1IdvUsHealthGet**](DefaultApi.md#v1idvushealthget) | **GET** /v1/idv/us/health |  |
| [**v1IdvUsKycGetPost**](DefaultApi.md#v1idvuskycgetpost) | **POST** /v1/idv/us/kyc/get |  |
| [**v1IdvUsStartPost**](DefaultApi.md#v1idvusstartpost) | **POST** /v1/idv/us/start |  |
| [**v1Oauth2TokenPost**](DefaultApi.md#v1oauth2tokenpost) | **POST** /v1/oauth2/token |  |



## v1IdvCaHealthGet

> string v1IdvCaHealthGet(Tomo_API_Version)



[DEPRECATED] Use /v1/idv/health.

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

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
  } satisfies V1IdvCaHealthGetRequest;

  try {
    const data = await api.v1IdvCaHealthGet(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |

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
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCaKycGetPost

> UsGetUnionResultRes v1IdvCaKycGetPost(Tomo_API_Version, UsGetKycReq)



[DEPRECATED] Use /v1/idv/result with country&#x3D;ca.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCaKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // UsGetKycReq (optional)
    UsGetKycReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **UsGetKycReq** | [UsGetKycReq](UsGetKycReq.md) |  | [Optional] |

### Return type

[**UsGetUnionResultRes**](UsGetUnionResultRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCaStartPost

> StartIdvRes v1IdvCaStartPost(Tomo_API_Version, CaStartIdvReq)



[DEPRECATED] Use /v1/idv/start with country&#x3D;ca.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCaStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // CaStartIdvReq (optional)
    CaStartIdvReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **CaStartIdvReq** | [CaStartIdvReq](CaStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnHealthGet

> string v1IdvCnHealthGet(Tomo_API_Version)



[DEPRECATED] Use /v1/idv/health.

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

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
  } satisfies V1IdvCnHealthGetRequest;

  try {
    const data = await api.v1IdvCnHealthGet(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |

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
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnKycGetPost

> CnGetUnionResultRes v1IdvCnKycGetPost(Tomo_API_Version, CnGetKycReq)



[DEPRECATED] Use /v1/idv/result with country&#x3D;cn.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCnKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // CnGetKycReq (optional)
    CnGetKycReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **CnGetKycReq** | [CnGetKycReq](CnGetKycReq.md) |  | [Optional] |

### Return type

[**CnGetUnionResultRes**](CnGetUnionResultRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnStartPost

> StartIdvRes v1IdvCnStartPost(Tomo_API_Version, CnStartIdvReq)



[DEPRECATED] Use /v1/idv/start with country&#x3D;cn.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCnStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // CnStartIdvReq (optional)
    CnStartIdvReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **CnStartIdvReq** | [CnStartIdvReq](CnStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvCnTokenPost

> TomoIdvIssueTokenRes v1IdvCnTokenPost(Tomo_API_Version, TomoIdvIssueTokenReq)



[DEPRECATED] Use the OAuth2 token endpoint.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvCnTokenPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **TomoIdvIssueTokenReq** | [TomoIdvIssueTokenReq](TomoIdvIssueTokenReq.md) |  | [Optional] |

### Return type

[**TomoIdvIssueTokenRes**](TomoIdvIssueTokenRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvHealthGet

> string v1IdvHealthGet(Tomo_API_Version)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
  } satisfies V1IdvHealthGetRequest;

  try {
    const data = await api.v1IdvHealthGet(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |

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
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvJpHealthGet

> string v1IdvJpHealthGet(Tomo_API_Version)



[DEPRECATED] Use /v1/idv/health.

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

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
  } satisfies V1IdvJpHealthGetRequest;

  try {
    const data = await api.v1IdvJpHealthGet(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |

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
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvJpKycGetPost

> JpGetUnionResultRes v1IdvJpKycGetPost(Tomo_API_Version, JpGetKycReq)



[DEPRECATED] Use /v1/idv/result with country&#x3D;jp.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvJpKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // JpGetKycReq (optional)
    JpGetKycReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **JpGetKycReq** | [JpGetKycReq](JpGetKycReq.md) |  | [Optional] |

### Return type

[**JpGetUnionResultRes**](JpGetUnionResultRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvJpStartPost

> StartIdvRes v1IdvJpStartPost(Tomo_API_Version, JpStartIdvReq)



[DEPRECATED] Use /v1/idv/start with country&#x3D;jp.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvJpStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // JpStartIdvReq (optional)
    JpStartIdvReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **JpStartIdvReq** | [JpStartIdvReq](JpStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvKycGetPost

> GetKycRes v1IdvKycGetPost(Tomo_API_Version, GetKycReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **GetKycReq** | [GetKycReq](GetKycReq.md) |  | [Optional] |

### Return type

[**GetKycRes**](GetKycRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvResetPost

> ResetRes v1IdvResetPost(Tomo_API_Version, ResetReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvResetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // ResetReq (optional)
    ResetReq: ...,
  } satisfies V1IdvResetPostRequest;

  try {
    const data = await api.v1IdvResetPost(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **ResetReq** | [ResetReq](ResetReq.md) |  | [Optional] |

### Return type

[**ResetRes**](ResetRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvResultBulkDeletePost

> ResultBulkDeleteRes v1IdvResultBulkDeletePost(Tomo_API_Version, ResultBulkDeleteReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvResultBulkDeletePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // ResultBulkDeleteReq (optional)
    ResultBulkDeleteReq: ...,
  } satisfies V1IdvResultBulkDeletePostRequest;

  try {
    const data = await api.v1IdvResultBulkDeletePost(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **ResultBulkDeleteReq** | [ResultBulkDeleteReq](ResultBulkDeleteReq.md) |  | [Optional] |

### Return type

[**ResultBulkDeleteRes**](ResultBulkDeleteRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvResultDeletePost

> ResultDeleteRes v1IdvResultDeletePost(Tomo_API_Version, ResultDeleteReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvResultDeletePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // ResultDeleteReq (optional)
    ResultDeleteReq: ...,
  } satisfies V1IdvResultDeletePostRequest;

  try {
    const data = await api.v1IdvResultDeletePost(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **ResultDeleteReq** | [ResultDeleteReq](ResultDeleteReq.md) |  | [Optional] |

### Return type

[**ResultDeleteRes**](ResultDeleteRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvResultPost

> ResultRes v1IdvResultPost(Tomo_API_Version, ResultReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvResultPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // ResultReq (optional)
    ResultReq: ...,
  } satisfies V1IdvResultPostRequest;

  try {
    const data = await api.v1IdvResultPost(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **ResultReq** | [ResultReq](ResultReq.md) |  | [Optional] |

### Return type

[**ResultRes**](ResultRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvSessionsStartPost

> SessionStartRes v1IdvSessionsStartPost(Tomo_API_Version, SessionStartReq)



[DEPRECATED] Use /v1/idv/start.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvSessionsStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // SessionStartReq (optional)
    SessionStartReq: ...,
  } satisfies V1IdvSessionsStartPostRequest;

  try {
    const data = await api.v1IdvSessionsStartPost(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **SessionStartReq** | [SessionStartReq](SessionStartReq.md) |  | [Optional] |

### Return type

[**SessionStartRes**](SessionStartRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvStartPost

> StartIdvRes v1IdvStartPost(Tomo_API_Version, StartIdvReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **StartIdvReq** | [StartIdvReq](StartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUkHealthGet

> string v1IdvUkHealthGet(Tomo_API_Version)



[DEPRECATED] Use /v1/idv/health.

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

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
  } satisfies V1IdvUkHealthGetRequest;

  try {
    const data = await api.v1IdvUkHealthGet(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |

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
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUkKycGetPost

> UsGetUnionResultRes v1IdvUkKycGetPost(Tomo_API_Version, UsGetKycReq)



[DEPRECATED] Use /v1/idv/result with country&#x3D;uk.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUkKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // UsGetKycReq (optional)
    UsGetKycReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **UsGetKycReq** | [UsGetKycReq](UsGetKycReq.md) |  | [Optional] |

### Return type

[**UsGetUnionResultRes**](UsGetUnionResultRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUkStartPost

> StartIdvRes v1IdvUkStartPost(Tomo_API_Version, UkStartIdvReq)



[DEPRECATED] Use /v1/idv/start with country&#x3D;uk.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUkStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // UkStartIdvReq (optional)
    UkStartIdvReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **UkStartIdvReq** | [UkStartIdvReq](UkStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUsHealthGet

> string v1IdvUsHealthGet(Tomo_API_Version)



[DEPRECATED] Use /v1/idv/health.

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

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
  } satisfies V1IdvUsHealthGetRequest;

  try {
    const data = await api.v1IdvUsHealthGet(body);
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |

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
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUsKycGetPost

> UsGetUnionResultRes v1IdvUsKycGetPost(Tomo_API_Version, UsGetKycReq)



[DEPRECATED] Use /v1/idv/result with country&#x3D;us.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUsKycGetPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // UsGetKycReq (optional)
    UsGetKycReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **UsGetKycReq** | [UsGetKycReq](UsGetKycReq.md) |  | [Optional] |

### Return type

[**UsGetUnionResultRes**](UsGetUnionResultRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1IdvUsStartPost

> StartIdvRes v1IdvUsStartPost(Tomo_API_Version, UsStartIdvReq)



[DEPRECATED] Use /v1/idv/start with country&#x3D;us.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvUsStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
    // UsStartIdvReq (optional)
    UsStartIdvReq: ...,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **UsStartIdvReq** | [UsStartIdvReq](UsStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json;charset=utf-8`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; or &#x60;Authorization&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1Oauth2TokenPost

> TokenRes v1Oauth2TokenPost(Tomo_API_Version, client_assertion, client_assertion_type, grant_type, resource, scope)



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
    // '1.4'
    Tomo_API_Version: Tomo_API_Version_example,
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
| **Tomo_API_Version** | `1.4` |  | [Defaults to `undefined`] [Enum: 1.4] |
| **client_assertion** | `string` |  | [Defaults to `undefined`] |
| **client_assertion_type** | `string` |  | [Defaults to `undefined`] |
| **grant_type** | `string` |  | [Defaults to `undefined`] |
| **resource** | `string` |  | [Optional] [Defaults to `undefined`] |
| **scope** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TokenRes**](TokenRes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json;charset=utf-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |
| **400** | Invalid &#x60;body&#x60; Version negotiation failures return SdkVersionNegotiationError (error&#x3D;unsupported_api_version). Existing endpoint validation and OAuth error bodies are preserved. No contract is selected when negotiation fails; its response omits Tomo-API-Version. |  * Tomo-API-Version - Selected contract version. Absent when version negotiation fails. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

