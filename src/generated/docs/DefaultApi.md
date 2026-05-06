# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1IdvCaHealthGet**](DefaultApi.md#v1idvcahealthget) | **GET** /v1/idv/ca/health |  |
| [**v1IdvCaStartPost**](DefaultApi.md#v1idvcastartpost) | **POST** /v1/idv/ca/start |  |
| [**v1IdvCnHealthGet**](DefaultApi.md#v1idvcnhealthget) | **GET** /v1/idv/cn/health |  |
| [**v1IdvCnStartPost**](DefaultApi.md#v1idvcnstartpost) | **POST** /v1/idv/cn/start |  |
| [**v1IdvHealthGet**](DefaultApi.md#v1idvhealthget) | **GET** /v1/idv/health |  |
| [**v1IdvJpHealthGet**](DefaultApi.md#v1idvjphealthget) | **GET** /v1/idv/jp/health |  |
| [**v1IdvJpStartPost**](DefaultApi.md#v1idvjpstartpost) | **POST** /v1/idv/jp/start |  |
| [**v1IdvKycGetPost**](DefaultApi.md#v1idvkycgetpost) | **POST** /v1/idv/kyc/get |  |
| [**v1IdvResultPost**](DefaultApi.md#v1idvresultpost) | **POST** /v1/idv/result |  |
| [**v1IdvStartPost**](DefaultApi.md#v1idvstartpost) | **POST** /v1/idv/start |  |
| [**v1IdvUkHealthGet**](DefaultApi.md#v1idvukhealthget) | **GET** /v1/idv/uk/health |  |
| [**v1IdvUkStartPost**](DefaultApi.md#v1idvukstartpost) | **POST** /v1/idv/uk/start |  |
| [**v1IdvUsHealthGet**](DefaultApi.md#v1idvushealthget) | **GET** /v1/idv/us/health |  |
| [**v1IdvUsStartPost**](DefaultApi.md#v1idvusstartpost) | **POST** /v1/idv/us/start |  |
| [**v1Oauth2TokenPost**](DefaultApi.md#v1oauth2tokenpost) | **POST** /v1/oauth2/token |  |



## v1IdvCaHealthGet

> string v1IdvCaHealthGet()



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


## v1IdvCaStartPost

> StartIdvRes v1IdvCaStartPost(Authorization, CaStartIdvReq)



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
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
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
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **CaStartIdvReq** | [CaStartIdvReq](CaStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

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


## v1IdvCnHealthGet

> string v1IdvCnHealthGet()



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


## v1IdvCnStartPost

> StartIdvRes v1IdvCnStartPost(Authorization, CnStartIdvReq)



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
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
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
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **CnStartIdvReq** | [CnStartIdvReq](CnStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

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


## v1IdvHealthGet

> string v1IdvHealthGet()



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

  try {
    const data = await api.v1IdvHealthGet();
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


## v1IdvJpHealthGet

> string v1IdvJpHealthGet()



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


## v1IdvJpStartPost

> StartIdvRes v1IdvJpStartPost(Authorization, JpStartIdvReq)



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
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
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
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **JpStartIdvReq** | [JpStartIdvReq](JpStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

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

> GetKycRes v1IdvKycGetPost(Authorization, GetKycReq)



[DEPRECATED] Use /v1/idv/result.

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

[**GetKycRes**](GetKycRes.md)

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


## v1IdvResultPost

> GetKycRes v1IdvResultPost(Authorization, GetKycReq)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { V1IdvResultPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
    // GetKycReq (optional)
    GetKycReq: ...,
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
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **GetKycReq** | [GetKycReq](GetKycReq.md) |  | [Optional] |

### Return type

[**GetKycRes**](GetKycRes.md)

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

> StartIdvRes v1IdvStartPost(Authorization, StartIdvReq)



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

[**StartIdvRes**](StartIdvRes.md)

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


## v1IdvUkStartPost

> StartIdvRes v1IdvUkStartPost(Authorization, UkStartIdvReq)



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
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
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
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **UkStartIdvReq** | [UkStartIdvReq](UkStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

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


## v1IdvUsStartPost

> StartIdvRes v1IdvUsStartPost(Authorization, UsStartIdvReq)



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
  const api = new DefaultApi();

  const body = {
    // string (optional)
    Authorization: Authorization_example,
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
| **Authorization** | `string` |  | [Optional] [Defaults to `undefined`] |
| **UsStartIdvReq** | [UsStartIdvReq](UsStartIdvReq.md) |  | [Optional] |

### Return type

[**StartIdvRes**](StartIdvRes.md)

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

> TokenRes v1Oauth2TokenPost(client_assertion, client_assertion_type, grant_type, resource, scope)



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

[**TokenRes**](TokenRes.md)

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

