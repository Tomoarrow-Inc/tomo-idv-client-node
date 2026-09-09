
# ResultContractResponse


## Properties

Name | Type
------------ | -------------
`results` | [Array&lt;ResultRecord&gt;](ResultRecord.md)
`result` | [ResultRecord](ResultRecord.md)
`user_id` | string

## Example

```typescript
import type { ResultContractResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "results": null,
  "result": null,
  "user_id": null,
} satisfies ResultContractResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResultContractResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


