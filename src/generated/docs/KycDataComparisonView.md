
# KycDataComparisonView


## Properties

Name | Type
------------ | -------------
`date_of_birth` | [KycMatchOutcome](KycMatchOutcome.md)
`expiration_date` | [KycMatchOutcome](KycMatchOutcome.md)
`issuing_country` | [KycMatchOutcome](KycMatchOutcome.md)
`name` | [KycMatchOutcome](KycMatchOutcome.md)

## Example

```typescript
import type { KycDataComparisonView } from ''

// TODO: Update the object below with actual values
const example = {
  "date_of_birth": null,
  "expiration_date": null,
  "issuing_country": null,
  "name": null,
} satisfies KycDataComparisonView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycDataComparisonView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


