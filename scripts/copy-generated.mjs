/**
 * Copy OpenAPI-generated TypeScript client from ci into tomo-idv-client-node/.
 * Only syncs src/generated/ — existing source files (src/index.ts, etc.) are preserved.
 *
 * Post-copy fixups:
 *   1. Adds .js extensions to relative imports for nodenext compatibility.
 *   2. Writes global.d.ts with Node.js type shims (RequestCredentials, etc.)
 *      that the generated runtime.ts references but are absent in Node-only builds.
 *
 * Run from tomo-idv-client-node root: node scripts/copy-generated.mjs
 * Or from ci after gen: node ../tomo-idv-client-node/scripts/copy-generated.mjs
 */
import { cpSync, rmSync, existsSync, readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = join(__dirname, '..', '..', 'ci', 'contracts', 'openapi-generator', 'generated', 'tomo-idv-client-node');
const dest = join(__dirname, '..', 'src', 'generated');

if (!existsSync(source)) {
  console.error(`Source not found: ${source}`);
  process.exit(1);
}

// Clean destination and copy fresh
rmSync(dest, { recursive: true, force: true });
cpSync(source, dest, { recursive: true });
console.log(`Copied generated TypeScript client to ${dest}`);

// ── Post-copy fixup 1: .js extension for nodenext ──────────────────────
// The OpenAPI generator emits imports like `from '../runtime'` and `from './Country'`
// but nodenext requires `from '../runtime.js'` and `from './Country.js'`
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

// ── Post-copy fixup 2: global.d.ts for Node.js builds ─────────────────
// runtime.ts references browser-only types (RequestCredentials, WindowOrWorkerGlobalScope).
// In a Node.js-only tsconfig (lib: ["ES2023"], no DOM), these are missing.
// We emit minimal ambient declarations so the generated code compiles.
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
