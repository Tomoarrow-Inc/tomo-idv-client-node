
# TencentGetUnionResultRes


## Properties

Name | Type
------------ | -------------
`address` | string
`date_of_birth` | string
`document_type` | string
`face_compare_passed` | boolean
`family_name` | string
`full_name` | string
`given_name` | string
`id_number` | string
`issuing_country` | string
`liveness_passed` | boolean
`nationality` | string
`ocr_passed` | boolean
`sex` | string
`similarity` | number
`status` | string

## Example

```typescript
import type { TencentGetUnionResultRes } from ''

// TODO: Update the object below with actual values
const example = {
  "address": null,
  "date_of_birth": null,
  "document_type": null,
  "face_compare_passed": null,
  "family_name": null,
  "full_name": null,
  "given_name": null,
  "id_number": null,
  "issuing_country": null,
  "liveness_passed": null,
  "nationality": null,
  "ocr_passed": null,
  "sex": null,
  "similarity": null,
  "status": null,
} satisfies TencentGetUnionResultRes

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TencentGetUnionResultRes
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


