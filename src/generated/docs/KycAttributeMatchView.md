
# KycAttributeMatchView


## Properties

Name | Type
------------ | -------------
`address` | [KycMatchOutcome](KycMatchOutcome.md)
`date_of_birth` | [KycMatchOutcome](KycMatchOutcome.md)
`id_number` | [KycMatchOutcome](KycMatchOutcome.md)
`name` | [KycMatchOutcome](KycMatchOutcome.md)
`phone` | [KycMatchOutcome](KycMatchOutcome.md)

## Example

```typescript
import type { KycAttributeMatchView } from ''

// TODO: Update the object below with actual values
const example = {
  "address": null,
  "date_of_birth": null,
  "id_number": null,
  "name": null,
  "phone": null,
} satisfies KycAttributeMatchView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycAttributeMatchView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


