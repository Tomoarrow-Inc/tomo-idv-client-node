
# KycDocumentCheckView


## Properties

Name | Type
------------ | -------------
`attempts` | number
`authenticity` | string
`data_comparison` | [KycDataComparisonView](KycDataComparisonView.md)
`image_quality` | string
`outcome` | [KycCheckOutcome](KycCheckOutcome.md)

## Example

```typescript
import type { KycDocumentCheckView } from ''

// TODO: Update the object below with actual values
const example = {
  "attempts": null,
  "authenticity": null,
  "data_comparison": null,
  "image_quality": null,
  "outcome": null,
} satisfies KycDocumentCheckView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycDocumentCheckView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


