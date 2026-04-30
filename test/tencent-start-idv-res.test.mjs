import assert from 'node:assert/strict';

import {
  TencentStartIdvResFromJSON,
  TencentStartIdvResToJSON,
  instanceOfTencentStartIdvRes,
} from '../dist/esm/generated/models/TencentStartIdvRes.js';

// Regression test for the Tencent CN start contract.
// idv-server returns start_idv_uri on the wire; the SDK must not look for the
// old schema-derived tencent_start_idv_uri key or generated clients return {}.
const wireResponse = {
  start_idv_uri: 'https://idv.example.test/start?token=session-token',
};

const parsed = TencentStartIdvResFromJSON(wireResponse);
assert.deepEqual(parsed, wireResponse);
assert.equal(instanceOfTencentStartIdvRes(wireResponse), true);
assert.deepEqual(TencentStartIdvResToJSON(parsed), wireResponse);

const legacyShape = {
  tencent_start_idv_uri: 'https://idv.example.test/legacy',
};
assert.equal(instanceOfTencentStartIdvRes(legacyShape), false);
assert.equal(TencentStartIdvResFromJSON(legacyShape).start_idv_uri, undefined);

console.log('TencentStartIdvRes contract test passed');
