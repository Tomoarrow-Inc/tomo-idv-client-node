/**
 * Pre-generation cleanup for tomo-idv-client-node.
 * Removes existing generated code so openapi-generator writes a clean output.
 * Run before openapi-generator: node scripts/pre-gen.mjs
 */
import { rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dest = join(__dirname, '..', 'src', 'generated');
rmSync(dest, { recursive: true, force: true });
console.log(`Cleaned ${dest}`);
