
# KycAddressView


## Properties

Name | Type
------------ | -------------
`city` | string
`country` | string
`full` | string
`postal_code` | string
`region` | string
`street` | string
`street2` | string

## Example

```typescript
import type { KycAddressView } from ''

// TODO: Update the object below with actual values
const example = {
  "city": null,
  "country": null,
  "full": null,
  "postal_code": null,
  "region": null,
  "street": null,
  "street2": null,
} satisfies KycAddressView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycAddressView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


