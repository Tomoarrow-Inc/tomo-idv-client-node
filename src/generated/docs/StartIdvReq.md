
# StartIdvReq


## Properties

Name | Type
------------ | -------------
`callback_url` | string
`country` | [Country](Country.md)
`email` | string
`kyc_policy` | [KycPolicy](KycPolicy.md)
`redirect_url_fail` | string
`redirect_url_success` | string
`user_id` | string
`webhook_url` | string

## Example

```typescript
import type { StartIdvReq } from ''

// TODO: Update the object below with actual values
const example = {
  "callback_url": null,
  "country": null,
  "email": null,
  "kyc_policy": null,
  "redirect_url_fail": null,
  "redirect_url_success": null,
  "user_id": null,
  "webhook_url": null,
} satisfies StartIdvReq

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StartIdvReq
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


