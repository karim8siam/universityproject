import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

let updatedCount = 0;

function scanDir(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.name.endsWith('.html')) {
      const content = readFileSync(fullPath, 'utf8');
      // Match "dateModified":"YYYY-MM-DD" and replace with "dateModified":"YYYY-MM-DDT00:00:00Z"
      const dateRegex = /"dateModified":\s*"(\d{4}-\d{2}-\d{2})"/g;
      if (dateRegex.test(content)) {
        const newContent = content.replace(dateRegex, '"dateModified":"$1T00:00:00Z"');
        writeFileSync(fullPath, newContent, 'utf8');
        updatedCount++;
      }
    }
  }
}

scanDir(root);
console.log(`Updated dateModified in ${updatedCount} files across the site to ISO 8601 format.`);
