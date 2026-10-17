import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { researchers } from '../data.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const researchersDir = join(root, 'researchers');

const dirs = readdirSync(researchersDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const dirMap = new Map();
for (const d of dirs) {
  const id = parseInt(d.split('-')[0], 10);
  if (!isNaN(id)) {
    dirMap.set(id, d);
  }
}

let updated = 0;
let alreadyValid = 0;
let errors = 0;

for (const r of researchers) {
  const dirName = dirMap.get(r.id);
  if (!dirName) {
    console.error(`Directory not found for researcher ID ${r.id}: ${r.name}`);
    errors++;
    continue;
  }

  const filePath = join(researchersDir, dirName, 'index.html');
  if (!existsSync(filePath)) {
    console.error(`index.html not found for researcher ID ${r.id}: ${filePath}`);
    errors++;
    continue;
  }

  const content = readFileSync(filePath, 'utf8');
  const reviewDate = r.reviewed || '2026-10-15';
  const isoDate = `${reviewDate}T00:00:00Z`;
  const canonicalUrl = `https://openstemfield.org/researchers/${dirName}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    'dateModified': isoDate,
    'mainEntity': {
      '@type': 'Person',
      'name': r.name,
      'jobTitle': r.title || 'Academic Faculty & Researcher',
      'affiliation': {
        '@type': 'CollegeOrUniversity',
        'name': r.university
      },
      'knowsAbout': r.topics || [],
      'description': r.summary || '',
      'url': canonicalUrl,
      'sameAs': r.source
    }
  };

  const newScriptTag = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;

  let newContent = content;
  const scriptRegex = /<script type="application\/ld\+json">.*?<\/script>/s;

  if (scriptRegex.test(content)) {
    newContent = content.replace(scriptRegex, newScriptTag);
  } else if (content.includes('</head>')) {
    newContent = content.replace('</head>', `${newScriptTag}</head>`);
  } else {
    console.warn(`No </head> found in ${filePath}`);
    continue;
  }

  if (newContent !== content) {
    writeFileSync(filePath, newContent, 'utf8');
    updated++;
  } else {
    alreadyValid++;
  }
}

console.log(`Finished processing researcher schemas:`);
console.log(`- Updated: ${updated}`);
console.log(`- Already matching: ${alreadyValid}`);
console.log(`- Errors: ${errors}`);
