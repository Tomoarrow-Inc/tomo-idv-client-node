
# AggregateClientCounts


## Properties

Name | Type
------------ | -------------
`client_id` | string
`failed_count` | number
`pending_count` | number
`started_count` | number
`total_count` | number
`unknown_status_count` | number
`verified_count` | number

## Example

```typescript
import type { AggregateClientCounts } from ''

// TODO: Update the object below with actual values
const example = {
  "client_id": null,
  "failed_count": null,
  "pending_count": null,
  "started_count": null,
  "total_count": null,
  "unknown_status_count": null,
  "verified_count": null,
} satisfies AggregateClientCounts

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AggregateClientCounts
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


