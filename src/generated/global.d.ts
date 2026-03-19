/* tslint:disable */
/* eslint-disable */
/**
 * Type shims for OpenAPI generated code.
 * The generator references DOM types not available in Node.js type definitions.
 * We provide minimal declarations here so the generated code compiles under
 * Node.js-only lib (ES2023 without DOM).
 */

// Used in runtime.ts: FetchAPI type
// Narrower than globalThis.fetch to match the generated code's internal usage
interface WindowOrWorkerGlobalScope {
  fetch: (url: string, init: RequestInit) => Promise<Response>;
}

// Used in runtime.ts: ConfigurationParameters, BaseAPI
type RequestCredentials = 'include' | 'omit' | 'same-origin';
