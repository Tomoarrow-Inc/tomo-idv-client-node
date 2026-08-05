
# StandardKycResultView


## Properties

Name | Type
------------ | -------------
`address` | [KycAddressView](KycAddressView.md)
`checks` | [KycChecksView](KycChecksView.md)
`completed_at` | string
`contact` | [KycContactView](KycContactView.md)
`document` | [KycDocumentView](KycDocumentView.md)
`field_provenance` | [KycFieldProvenanceView](KycFieldProvenanceView.md)
`media` | [Array&lt;KycMediaView&gt;](KycMediaView.md)
`person` | [KycPersonView](KycPersonView.md)
`process` | [KycProcessView](KycProcessView.md)
`schema_version` | [KycResultSchemaVersion](KycResultSchemaVersion.md)
`status` | [KycResultStatus](KycResultStatus.md)

## Example

```typescript
import type { StandardKycResultView } from ''

// TODO: Update the object below with actual values
const example = {
  "address": null,
  "checks": null,
  "completed_at": 2016-07-22T00:00:00Z,
  "contact": null,
  "document": null,
  "field_provenance": null,
  "media": null,
  "person": null,
  "process": null,
  "schema_version": null,
  "status": null,
} satisfies StandardKycResultView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StandardKycResultView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


