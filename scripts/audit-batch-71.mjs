import { batch71Universities } from './batch71-data.mjs';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sitemapContent = readFileSync(join(root, 'sitemap.xml'), 'utf8');

const ALLOWED_SUBJECTS = new Set([
  'physics', 'engineering', 'computer-science', 'mathematics',
  'biology', 'chemistry', 'environment', 'social-sciences', 'arts-design'
]);

let errors = [];

if (batch71Universities.length !== 30) {
  errors.push(`Expected 30 universities, found ${batch71Universities.length}`);
}

const usUnis = batch71Universities.filter(u => u.countryId === 'usa');
if (usUnis.length !== 30) {
  errors.push(`Expected 30 USA universities, found ${usUnis.length}`);
}

let allOpps = [];
let allRes = [];

for (const u of batch71Universities) {
  if (!u.institution || !u.slug || !u.website) {
    errors.push(`Uni missing basic fields: ${JSON.stringify(u)}`);
  }
  if (!u.website.startsWith('https://')) {
    errors.push(`Uni website not https: ${u.institution} -> ${u.website}`);
  }
  if (!u.opportunities || u.opportunities.length !== 6) {
    errors.push(`${u.institution} has ${u.opportunities?.length} opps (expected 6)`);
  } else {
    allOpps.push(...u.opportunities);
  }
  if (!u.researchers || u.researchers.length !== 3) {
    errors.push(`${u.institution} has ${u.researchers?.length} researchers (expected 3)`);
  } else {
    allRes.push(...u.researchers);
  }
}

// Check Opp IDs (10407 to 10586)
const expectedOppIds = Array.from({ length: 180 }, (_, i) => 10407 + i);
const actualOppIds = allOpps.map(o => o.id);
if (actualOppIds.length !== 180) {
  errors.push(`Total opportunities: ${actualOppIds.length}, expected 180`);
}
for (let i = 0; i < expectedOppIds.length; i++) {
  if (actualOppIds[i] !== expectedOppIds[i]) {
    errors.push(`Opp ID mismatch at index ${i}: expected ${expectedOppIds[i]}, got ${actualOppIds[i]}`);
    break;
  }
}

// Check Res IDs (4759 to 4848)
const expectedResIds = Array.from({ length: 90 }, (_, i) => 4759 + i);
const actualResIds = allRes.map(r => r.id);
if (actualResIds.length !== 90) {
  errors.push(`Total researchers: ${actualResIds.length}, expected 90`);
}
for (let i = 0; i < expectedResIds.length; i++) {
  if (actualResIds[i] !== expectedResIds[i]) {
    errors.push(`Res ID mismatch at index ${i}: expected ${expectedResIds[i]}, got ${actualResIds[i]}`);
    break;
  }
}

// Check Deadlines & Subjects & HTTPS
const deadlineRegex = /^\d{4}-\d{2}-\d{2}$/;
for (const opp of allOpps) {
  if (!deadlineRegex.test(opp.deadline)) {
    errors.push(`Opp ${opp.id} invalid deadline format: ${opp.deadline}`);
  } else if (opp.deadline < '2026-10-16') {
    errors.push(`Opp ${opp.id} expired deadline: ${opp.deadline} < 2026-10-16`);
  }
  if (!ALLOWED_SUBJECTS.has(opp.subject)) {
    errors.push(`Opp ${opp.id} subject "${opp.subject}" not in allowed taxonomy`);
  }
  if (!opp.source || !opp.source.startsWith('https://')) {
    errors.push(`Opp ${opp.id} source not https: ${opp.source}`);
  }
}

for (const res of allRes) {
  if (res.subject && !ALLOWED_SUBJECTS.has(res.subject)) {
    errors.push(`Res ${res.id} subject "${res.subject}" not in allowed taxonomy`);
  }
  if (!res.source || !res.source.startsWith('https://')) {
    errors.push(`Res ${res.id} source not https: ${res.source}`);
  }
}

// Check existing sitemap collision
for (const u of batch71Universities) {
  const uniUrl = `https://universityproject-chi.vercel.app/universities/${u.slug}/`;
  if (sitemapContent.includes(uniUrl)) {
    errors.push(`Sitemap already contains URL for ${u.slug}`);
  }
}

console.log('=== BATCH 71 AUDIT SUMMARY ===');
console.log(`Universities: ${batch71Universities.length} (30 USA)`);
console.log(`Opportunities: ${allOpps.length} (IDs ${allOpps[0]?.id} to ${allOpps[allOpps.length - 1]?.id})`);
console.log(`Researchers: ${allRes.length} (IDs ${allRes[0]?.id} to ${allRes[allRes.length - 1]?.id})`);
console.log(`Errors found: ${errors.length}`);

if (errors.length > 0) {
  console.error('\nAUDIT FAILED with errors:');
  errors.forEach(e => console.error(` - ${e}`));
  process.exit(1);
} else {
  console.log('\n✓ ALL AUDITS PASSED CLEANLY! Ready for publication.');
}
