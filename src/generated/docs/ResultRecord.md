
# ResultRecord


## Properties

Name | Type
------------ | -------------
`auth_id` | string
`country` | string
`policy_key` | string
`result` | [GetKycRes](GetKycRes.md)

## Example

```typescript
import type { ResultRecord } from ''

// TODO: Update the object below with actual values
const example = {
  "auth_id": null,
  "country": null,
  "policy_key": null,
  "result": null,
} satisfies ResultRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResultRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


