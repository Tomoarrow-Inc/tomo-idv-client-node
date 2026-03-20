/**
 * Post-generation fixups for tomo-idv-client-node.
 * Runs after openapi-generator writes directly to src/generated/.
 *
 * Fixups:
 *   1. Adds .js extensions to relative imports for nodenext compatibility.
 *   2. Writes global.d.ts with Node.js type shims (RequestCredentials, etc.)
 *
 * Run after openapi-generator: node scripts/post-gen.mjs
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dest = join(__dirname, '..', 'src', 'generated');

// ── Fixup 1: .js extension for nodenext ──────────────────────
const RELATIVE_IMPORT_RE = /(from\s+['"])(\.\.?\/[^'"]+)(?<!\.js)(['"])/g;

function fixImports(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      fixImports(fullPath);
      continue;
    }
    if (!fullPath.endsWith('.ts') || fullPath.endsWith('.d.ts')) continue;

    const original = readFileSync(fullPath, 'utf8');
    const fixed = original.replace(RELATIVE_IMPORT_RE, '$1$2.js$3');
    if (fixed !== original) {
      writeFileSync(fullPath, fixed, 'utf8');
      console.log(`  Fixed imports: ${fullPath}`);
    }
  }
}

fixImports(dest);
console.log('Import fixup complete.');

// ── Fixup 2: global.d.ts for Node.js builds ─────────────────
const GLOBAL_DTS_CONTENT = `\
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
`;

const globalDtsPath = join(dest, 'global.d.ts');
writeFileSync(globalDtsPath, GLOBAL_DTS_CONTENT, 'utf8');
console.log(`Wrote Node.js type shims: ${globalDtsPath}`);
