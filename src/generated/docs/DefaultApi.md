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
| [**v1IdvJpHealthGet**](DefaultApi.md#v1idvjphealthget) | **GET** /v1/idv/jp/health |  |
| [**v1IdvJpKycGetPost**](DefaultApi.md#v1idvjpkycgetpost) | **POST** /v1/idv/jp/kyc/get |  |
| [**v1IdvJpStartPost**](DefaultApi.md#v1idvjpstartpost) | **POST** /v1/idv/jp/start |  |
| [**v1IdvKycGetPost**](DefaultApi.md#v1idvkycgetpost) | **POST** /v1/idv/kyc/get |  |
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

> PlaidStartIdvRes v1IdvCaStartPost(Authorization, PlaidStartIdvReq)



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
    // PlaidStartIdvReq (optional)
    PlaidStartIdvReq: ...,
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
| **PlaidStartIdvReq** | [PlaidStartIdvReq](PlaidStartIdvReq.md) |  | [Optional] |

### Return type

[**PlaidStartIdvRes**](PlaidStartIdvRes.md)

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

> TencentGetUnionResultRes v1IdvCnKycGetPost(Authorization, TencentGetKycReq)



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

[**TencentGetUnionResultRes**](TencentGetUnionResultRes.md)

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


## v1IdvCnStartPost

> TomoIdvStartRes v1IdvCnStartPost(Authorization, TencentStartReq)



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
    // TencentStartReq (optional)
    TencentStartReq: ...,
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
| **TencentStartReq** | [TencentStartReq](TencentStartReq.md) |  | [Optional] |

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

> LiquidGetUnionResultRes v1IdvJpKycGetPost(Authorization, LiquidGetKycReq)



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

[**LiquidGetUnionResultRes**](LiquidGetUnionResultRes.md)

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

> LiquidIntegratedAppRes v1IdvJpStartPost(Authorization, LiquidStartIdvReq)



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
    // LiquidStartIdvReq (optional)
    LiquidStartIdvReq: ...,
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
| **LiquidStartIdvReq** | [LiquidStartIdvReq](LiquidStartIdvReq.md) |  | [Optional] |

### Return type

[**LiquidIntegratedAppRes**](LiquidIntegratedAppRes.md)

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

> PlaidStartIdvRes v1IdvUkStartPost(Authorization, PlaidStartIdvReq)



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
    // PlaidStartIdvReq (optional)
    PlaidStartIdvReq: ...,
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
| **PlaidStartIdvReq** | [PlaidStartIdvReq](PlaidStartIdvReq.md) |  | [Optional] |

### Return type

[**PlaidStartIdvRes**](PlaidStartIdvRes.md)

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

> PlaidStartIdvRes v1IdvUsStartPost(Authorization, PlaidStartIdvReq)



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
    // PlaidStartIdvReq (optional)
    PlaidStartIdvReq: ...,
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
| **PlaidStartIdvReq** | [PlaidStartIdvReq](PlaidStartIdvReq.md) |  | [Optional] |

### Return type

[**PlaidStartIdvRes**](PlaidStartIdvRes.md)

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

