
# ResultReq


## Properties

Name | Type
------------ | -------------
`country` | [Country](Country.md)
`policy` | [KycPolicy](KycPolicy.md)
`user_id` | string

## Example

```typescript
import type { ResultReq } from ''

// TODO: Update the object below with actual values
const example = {
  "country": null,
  "policy": null,
  "user_id": null,
} satisfies ResultReq

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResultReq
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


