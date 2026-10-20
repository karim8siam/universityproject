// Structural regression test for the staged source migration.
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
const read = p=>readFileSync(join(root,p),'utf8');
assert(existsSync(join(root,'src/server.mjs')), 'Missing modular server implementation');
assert.match(read('server.mjs'), /import\s+['"]\.\/src\/server\.mjs['"]/, 'Root server entry must delegate to src/server.mjs');
assert.match(read('src/server.mjs'), /createServer/, 'Server module must create HTTP server');
assert.match(read('index.html'), /src=["']app\.js\?/, 'Public homepage JS URL unexpectedly moved');
for (const p of ['robots.txt','sitemap.xml','data.js','app.js','subjects/physics/index.html','universities/index.html']) {
  assert(existsSync(join(root,p)), 'Required public resource moved: '+p);
}
console.log('PASS: server implementation separated; existing public routes and assets remain at root');
