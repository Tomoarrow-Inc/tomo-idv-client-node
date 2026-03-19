/**
 * Copy OpenAPI-generated TypeScript client from ci into tomo-idv-client-node/.
 * Only syncs src/generated/ — existing source files (src/index.ts, etc.) are preserved.
 *
 * Post-copy fixup: adds .js extensions to relative imports for nodenext compatibility.
 *
 * Run from tomo-idv-client-node root: node scripts/copy-generated.mjs
 * Or from ci after gen: node ../tomo-idv-client-node/scripts/copy-generated.mjs
 */
import { cpSync, rmSync, existsSync, readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = join(__dirname, '..', '..', 'ci', 'contracts', 'openapi-generator', 'generated', 'idv-node-client');
const dest = join(__dirname, '..', 'src', 'generated');

if (!existsSync(source)) {
  console.error(`Source not found: ${source}`);
  process.exit(1);
}

// Clean destination and copy fresh
rmSync(dest, { recursive: true, force: true });
cpSync(source, dest, { recursive: true });
console.log(`Copied generated TypeScript client to ${dest}`);

// Post-copy fixup: add .js extensions to relative imports for nodenext module resolution
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
