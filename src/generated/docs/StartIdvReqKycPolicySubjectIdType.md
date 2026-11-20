
# StartIdvReqKycPolicySubjectIdType

Document selection arrays support id_card, driver_license, passport, and residency_permit_card. Array entries are trimmed, lowercased, and deduplicated before server validation; unknown values are rejected.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { StartIdvReqKycPolicySubjectIdType } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies StartIdvReqKycPolicySubjectIdType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StartIdvReqKycPolicySubjectIdType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


