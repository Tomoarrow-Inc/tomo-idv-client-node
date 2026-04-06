
# GetKycRes


## Properties

Name | Type
------------ | -------------
`city` | string
`country` | string
`date_of_birth` | string
`email_address` | string
`family_name` | string
`full_address` | string
`full_name` | string
`given_name` | string
`phone_number` | string
`postal_code` | string
`region` | string
`sex` | string
`street` | string

## Example

```typescript
import type { GetKycRes } from ''

// TODO: Update the object below with actual values
const example = {
  "city": null,
  "country": null,
  "date_of_birth": null,
  "email_address": null,
  "family_name": null,
  "full_address": null,
  "full_name": null,
  "given_name": null,
  "phone_number": null,
  "postal_code": null,
  "region": null,
  "sex": null,
  "street": null,
} satisfies GetKycRes

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetKycRes
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


