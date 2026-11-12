
# AggregateReport


## Properties

Name | Type
------------ | -------------
`client_id` | string
`clients` | [Array&lt;AggregateClientCounts&gt;](AggregateClientCounts.md)
`data_basis` | string
`evaluated_at` | string
`filter_client_ids` | Array&lt;string&gt;
`next_cursor` | string
`period` | [AggregatePeriod](AggregatePeriod.md)
`scope` | string
`status_basis` | string
`time_basis` | string
`totals` | [AggregateCounts](AggregateCounts.md)

## Example

```typescript
import type { AggregateReport } from ''

// TODO: Update the object below with actual values
const example = {
  "client_id": null,
  "clients": null,
  "data_basis": null,
  "evaluated_at": 2016-07-22T00:00:00Z,
  "filter_client_ids": null,
  "next_cursor": null,
  "period": null,
  "scope": null,
  "status_basis": null,
  "time_basis": null,
  "totals": null,
} satisfies AggregateReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AggregateReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


