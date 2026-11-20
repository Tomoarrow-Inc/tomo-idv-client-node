
# KycDocumentExtractView


## Properties

Name | Type
------------ | -------------
`category` | string
`date_of_birth` | string
`expiration_date` | string
`family_name` | string
`given_name` | string
`id_number` | string
`issuing_country` | string
`issuing_region` | string

## Example

```typescript
import type { KycDocumentExtractView } from ''

// TODO: Update the object below with actual values
const example = {
  "category": null,
  "date_of_birth": null,
  "expiration_date": null,
  "family_name": null,
  "given_name": null,
  "id_number": null,
  "issuing_country": null,
  "issuing_region": null,
} satisfies KycDocumentExtractView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycDocumentExtractView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


