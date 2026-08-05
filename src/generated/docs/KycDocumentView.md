
# KycDocumentView


## Properties

Name | Type
------------ | -------------
`category` | [KycDocumentCategory](KycDocumentCategory.md)
`expiration_date` | string
`extracted` | [KycDocumentExtractView](KycDocumentExtractView.md)
`issuing_country` | string
`issuing_region` | string
`number` | string
`residence_permit` | [KycResidencePermitView](KycResidencePermitView.md)

## Example

```typescript
import type { KycDocumentView } from ''

// TODO: Update the object below with actual values
const example = {
  "category": null,
  "expiration_date": null,
  "extracted": null,
  "issuing_country": null,
  "issuing_region": null,
  "number": null,
  "residence_permit": null,
} satisfies KycDocumentView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycDocumentView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


