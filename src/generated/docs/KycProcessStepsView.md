
# KycProcessStepsView


## Properties

Name | Type
------------ | -------------
`biometric_check` | string
`data_source_check` | string
`document_check` | string
`phone_verification` | string
`risk_check` | string
`terms_acceptance` | string
`watchlist_screening` | string

## Example

```typescript
import type { KycProcessStepsView } from ''

// TODO: Update the object below with actual values
const example = {
  "biometric_check": null,
  "data_source_check": null,
  "document_check": null,
  "phone_verification": null,
  "risk_check": null,
  "terms_acceptance": null,
  "watchlist_screening": null,
} satisfies KycProcessStepsView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycProcessStepsView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


