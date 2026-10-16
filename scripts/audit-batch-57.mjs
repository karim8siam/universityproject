import { batch57Universities } from './batch57-data.mjs';
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

if (batch57Universities.length !== 30) {
  errors.push(`Expected 30 universities, found ${batch57Universities.length}`);
}

const deUnis = batch57Universities.filter(u => u.countryId === 'germany');
const usUnis = batch57Universities.filter(u => u.countryId === 'usa');
const jpUnis = batch57Universities.filter(u => u.countryId === 'japan');

if (deUnis.length !== 10) errors.push(`Expected 10 German universities, found ${deUnis.length}`);
if (usUnis.length !== 10) errors.push(`Expected 10 USA universities, found ${usUnis.length}`);
if (jpUnis.length !== 10) errors.push(`Expected 10 Japan universities, found ${jpUnis.length}`);

let allOpps = [];
let allRes = [];

for (const u of batch57Universities) {
  if (!u.institution || !u.slug || !u.website) {
    errors.push(`Uni missing basic fields: ${JSON.stringify(u)}`);
  }
  if (!u.website.startsWith('https://')) {
    errors.push(`Uni website not HTTPS: ${u.institution} -> ${u.website}`);
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

// Check Opp IDs
const expectedOppIds = Array.from({ length: 180 }, (_, i) => 7887 + i);
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

// Check Res IDs
const expectedResIds = Array.from({ length: 90 }, (_, i) => 3499 + i);
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

// Check Deadlines & Subjects & URLs
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
    errors.push(`Opp ${opp.id} source not HTTPS: ${opp.source}`);
  }
}

for (const res of allRes) {
  if (res.subject && !ALLOWED_SUBJECTS.has(res.subject)) {
    errors.push(`Res ${res.id} subject "${res.subject}" not in allowed taxonomy`);
  }
  const source = res.source || res.website;
  if (source && !source.startsWith('https://')) {
    errors.push(`Res ${res.id} source not HTTPS: ${source}`);
  }
}

// Check existing sitemap collision
for (const u of batch57Universities) {
  const uniUrl = `https://openstemfield.org/universities/${u.slug}/`;
  if (sitemapContent.includes(uniUrl)) {
    errors.push(`Uni slug collision in sitemap: ${uniUrl}`);
  }
}

if (errors.length > 0) {
  console.error(`❌ Audit failed with ${errors.length} errors:`);
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('✅ Batch 57 Audit Passed Perfectly!');
  console.log(`- 30 Universities (DE: 10, US: 10, JP: 10)`);
  console.log(`- 180 Opportunities (IDs 7887 to 8066, strictly contiguous)`);
  console.log(`- 90 Faculty Profiles (IDs 3499 to 3588, strictly contiguous)`);
  console.log(`- All deadlines >= 2026-10-16, all subjects in 9 taxonomy categories, all URLs HTTPS`);
}
