import type { StartIdvReq } from '../../dist/esm/index.js';

// These are existing start inputs as well as the approved string-array input.
const scalar: StartIdvReq = { kyc_policy: { subject: { kind: 'document', id_type: 'passport' } } };
const array: StartIdvReq = { kyc_policy: { subject: { kind: 'document', id_type: ['passport', 'id_card'] } } };
const normalizedArray: StartIdvReq = { kyc_policy: { subject: { kind: 'document', id_type: [' PASSPORT ', 'Id_Card'] } } };
const omitted: StartIdvReq = { kyc_policy: { subject: { kind: 'document' } } };
const documentNull: StartIdvReq = { kyc_policy: { subject: { kind: 'document', id_type: null } } };
const smsNull: StartIdvReq = { kyc_policy: { subject: { kind: 'personal_info', id_type: null } } };
const smsOmitted: StartIdvReq = { kyc_policy: { subject: { kind: 'personal_info' } } };
const certificate: StartIdvReq = { kyc_policy: { subject: { kind: 'eid', id_type: 'certificate' } } };

const invalidArray: StartIdvReq = {
  kyc_policy: {
    subject: {
      kind: 'document',
      // @ts-expect-error Null is accepted for the field, not an array element.
      id_type: ['passport', null],
    },
  },
};
const removedField: StartIdvReq = {
  // @ts-expect-error Restrictions are expressed only through subject.id_type.
  allowed_document_id_types: ['passport'],
};

void [scalar, array, normalizedArray, omitted, documentNull, smsNull, smsOmitted, certificate, invalidArray, removedField];
