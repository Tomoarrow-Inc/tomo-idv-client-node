
# KycRiskSignalsView


## Properties

Name | Type
------------ | -------------
`abuse_signals` | string
`bot_detected` | string
`email_breach_count` | number
`email_domain_is_disposable` | string
`email_is_deliverable` | string
`fraud_ring_detected` | string
`ip_proxy_type` | string
`ip_spam_list_count` | number
`ip_timezone_offset` | string
`user_interactions` | string

## Example

```typescript
import type { KycRiskSignalsView } from ''

// TODO: Update the object below with actual values
const example = {
  "abuse_signals": null,
  "bot_detected": null,
  "email_breach_count": null,
  "email_domain_is_disposable": null,
  "email_is_deliverable": null,
  "fraud_ring_detected": null,
  "ip_proxy_type": null,
  "ip_spam_list_count": null,
  "ip_timezone_offset": null,
  "user_interactions": null,
} satisfies KycRiskSignalsView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycRiskSignalsView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


