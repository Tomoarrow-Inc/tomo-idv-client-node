
# KycPersonView


## Properties

Name | Type
------------ | -------------
`date_of_birth` | string
`family_name` | string
`full_name` | string
`given_name` | string
`government_id` | [KycGovernmentIdView](KycGovernmentIdView.md)
`name_variants` | [Array&lt;KycNameVariantView&gt;](KycNameVariantView.md)
`nationality` | string
`sex` | string

## Example

```typescript
import type { KycPersonView } from ''

// TODO: Update the object below with actual values
const example = {
  "date_of_birth": null,
  "family_name": null,
  "full_name": null,
  "given_name": null,
  "government_id": null,
  "name_variants": null,
  "nationality": null,
  "sex": null,
} satisfies KycPersonView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycPersonView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


