
# KycCertificateCheckView


## Properties

Name | Type
------------ | -------------
`outcome` | [KycCheckOutcome](KycCheckOutcome.md)
`valid_from` | string
`valid_to` | string
`verified_at` | string

## Example

```typescript
import type { KycCertificateCheckView } from ''

// TODO: Update the object below with actual values
const example = {
  "outcome": null,
  "valid_from": null,
  "valid_to": null,
  "verified_at": null,
} satisfies KycCertificateCheckView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycCertificateCheckView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


