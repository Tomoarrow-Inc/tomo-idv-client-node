
# KycBiometricCheckView


## Properties

Name | Type
------------ | -------------
`attempts` | number
`document_comparison` | [KycCheckOutcome](KycCheckOutcome.md)
`face_match` | [KycCheckOutcome](KycCheckOutcome.md)
`liveness` | [KycCheckOutcome](KycCheckOutcome.md)
`outcome` | [KycCheckOutcome](KycCheckOutcome.md)
`similarity_score` | number

## Example

```typescript
import type { KycBiometricCheckView } from ''

// TODO: Update the object below with actual values
const example = {
  "attempts": null,
  "document_comparison": null,
  "face_match": null,
  "liveness": null,
  "outcome": null,
  "similarity_score": null,
} satisfies KycBiometricCheckView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycBiometricCheckView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


