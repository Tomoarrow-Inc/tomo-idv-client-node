
# KycFieldProvenanceView


## Properties

Name | Type
------------ | -------------
`derived_fields` | [Array&lt;KycStandardField&gt;](KycStandardField.md)
`missing_fields` | [Array&lt;KycStandardField&gt;](KycStandardField.md)
`not_collected_fields` | [Array&lt;KycStandardField&gt;](KycStandardField.md)

## Example

```typescript
import type { KycFieldProvenanceView } from ''

// TODO: Update the object below with actual values
const example = {
  "derived_fields": null,
  "missing_fields": null,
  "not_collected_fields": null,
} satisfies KycFieldProvenanceView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KycFieldProvenanceView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


