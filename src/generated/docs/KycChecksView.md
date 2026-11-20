
# KycChecksView


## Properties

Name | Type
------------ | -------------
`biometric` | [KycBiometricCheckView](KycBiometricCheckView.md)
`certificate` | [KycCertificateCheckView](KycCertificateCheckView.md)
`data_source` | [KycDataSourceCheckView](KycDataSourceCheckView.md)
`document` | [KycDocumentCheckView](KycDocumentCheckView.md)
`phone_verification` | [KycPhoneVerificationCheckView](KycPhoneVerificationCheckView.md)
`risk` | [KycRiskCheckView](KycRiskCheckView.md)
`watchlist` | [KycWatchlistCheckView](KycWatchlistCheckView.md)

## Example

```typescript
import type { KycChecksView } from ''

// TODO: Update the object below with actual values
const example = {
  "biometric": null,
  "certificate": null,
  "data_source": null,
  "document": null,
  "phone_verification": null,
  "risk": null,
  "watchlist": null,
} satisfies KycChecksView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycChecksView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


