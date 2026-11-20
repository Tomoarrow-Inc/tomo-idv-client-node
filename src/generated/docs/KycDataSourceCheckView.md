
# KycDataSourceCheckView


## Properties

Name | Type
------------ | -------------
`address_type` | string
`attribute_match` | [KycAttributeMatchView](KycAttributeMatchView.md)
`outcome` | [KycCheckOutcome](KycCheckOutcome.md)

## Example

```typescript
import type { KycDataSourceCheckView } from ''

// TODO: Update the object below with actual values
const example = {
  "address_type": null,
  "attribute_match": null,
  "outcome": null,
} satisfies KycDataSourceCheckView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycDataSourceCheckView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


