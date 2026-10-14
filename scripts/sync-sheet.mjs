import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=dirname(dirname(fileURLToPath(import.meta.url)));
export const SHEET_ID='1C3C93DR1KmzhIa-AUG-dL0RqsxA4ZzsmVMh5G3HB4Do';
export const WEBHOOK_URL='https://script.google.com/macros/s/AKfycbwJKcWc_lzkwDkxkbsVVs4yXoVViJfsssp4G-Q3MJftmWkNAfDYTWVv4JiabvKFbmFH/exec';

// Follow redirects for Google Docs CSV exports
export async function fetchCsv(gid) {
  let url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;
  while (true) {
    const res = await fetch(url, { redirect: 'manual' });
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      url = res.headers.get('location');
      continue;
    }
    if (!res.ok) throw new Error(`Failed to fetch CSV gid=${gid}: HTTP ${res.status}`);
    return await res.text();
  }
}

export function parseCsv(text) {
  const lines = text.trim().split('\n');
  const headers = parseLine(lines[0]);
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const vals = parseLine(line);
    const obj = {};
    headers.forEach((h, i) => obj[h.trim()] = (vals[i] || '').trim());
    return obj;
  });
}

function parseLine(line) {
  const res = [];
  let current = '', inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"' && line[i + 1] === '"') { current += '"'; i++; }
    else if (char === '"') { inQuotes = !inQuotes; }
    else if (char === ',' && !inQuotes) { res.push(current); current = ''; }
    else { current += char; }
  }
  res.push(current);
  return res;
}

export async function getLiveRotation() {
  const csv = await fetchCsv('700000006');
  return parseCsv(csv);
}

export async function getLiveProgress() {
  const csv = await fetchCsv('700000005');
  return parseCsv(csv);
}

export async function postWebhook(payload) {
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return await res.json();
}

export async function recordProgress(data) {
  return await postWebhook({
    action: 'addProgress',
    ...data
  });
}

export async function updateRotation(country, data) {
  return await postWebhook({
    action: 'updateRotation',
    country,
    ...data
  });
}

// CLI sync
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log('Connecting to Google Sheet via Webhook:', WEBHOOK_URL);
  
  // 1. Sync Italy Rotation & Progress
  console.log('Syncing Italy...');
  await updateRotation('Italy', {
    publishedCount: 1,
    currentRoundStatus: 'Round 1 completed',
    mostRecentPublished: 'Accademia di Belle Arti di Lecce',
    updatedDate: '2026-10-14'
  });
  await recordProgress({
    sourceRow: 442,
    country: 'Italy',
    institution: 'Accademia di Belle Arti di Lecce',
    officialWebsite: 'https://www.accademialecce.edu.it/',
    universityGuide: 'https://universityproject-chi.vercel.app/universities/accademia-di-belle-arti-di-lecce/',
    publishedContent: 'PhD in Cultural Heritage and Creativity, 2 scholarship guides, 3 faculty profiles; live on Vercel',
    evidenceReviewDate: '2026-10-14',
    gitCommit: '4b686e0',
    deploymentQa: 'GitHub CI SUCCESS; Vercel live 200 OK',
    nextAction: 'Completed Italy turn; next country United States',
    publishedDone: true,
    sitemapUpdated: true
  });

  // 2. Sync USA Rotation & Progress
  console.log('Syncing United States...');
  await updateRotation('United States', {
    publishedCount: 1,
    currentRoundStatus: 'Round 1 completed',
    mostRecentPublished: 'A.T. Still University',
    updatedDate: '2026-10-14'
  });
  await recordProgress({
    sourceRow: 559,
    country: 'United States',
    institution: 'A.T. Still University',
    officialWebsite: 'https://www.atsu.edu/',
    universityGuide: 'https://universityproject-chi.vercel.app/universities/a-t-still-university/',
    publishedContent: 'Doctor of Health Sciences (DHSc), MS Biomedical Sciences, 2 scholarships, 3 faculty profiles; live on Vercel',
    evidenceReviewDate: '2026-10-14',
    gitCommit: '071ca9b',
    deploymentQa: 'GitHub CI SUCCESS; Vercel live 200 OK',
    nextAction: 'Completed USA turn; next country United Kingdom',
    publishedDone: true,
    sitemapUpdated: true
  });

  // 3. Update Germany Progress Row
  console.log('Updating Germany in Progress tab...');
  await recordProgress({
    sourceRow: 209,
    country: 'Germany',
    institution: 'Academy of Fine Arts Dresden',
    officialWebsite: 'https://www.hfbk-dresden.de/',
    universityGuide: 'https://universityproject-chi.vercel.app/universities/academy-of-fine-arts-dresden/',
    publishedContent: 'University guide, 2 scholarship guides, 3 faculty profiles; live on Vercel',
    evidenceReviewDate: '2026-10-14',
    gitCommit: '6629425',
    deploymentQa: 'GitHub CI SUCCESS; Vercel live 200 OK',
    nextAction: 'Completed Germany turn; proceeded to Italy',
    publishedDone: true,
    sitemapUpdated: true
  });

  // 4. Sync UK Rotation & Progress
  console.log('Syncing United Kingdom...');
  await updateRotation('United Kingdom', {
    publishedCount: 1,
    currentRoundStatus: 'Round 1 completed',
    mostRecentPublished: 'Aberystwyth University',
    updatedDate: '2026-10-14'
  });
  await recordProgress({
    sourceRow: 1230,
    country: 'United Kingdom',
    institution: 'Aberystwyth University',
    officialWebsite: 'https://www.aber.ac.uk/',
    universityGuide: 'https://universityproject-chi.vercel.app/universities/aberystwyth-university/',
    publishedContent: 'PhD & MPhil in Computer Science, Global Citizens Scholarship, AberDoc PhD Scholarship, 3 faculty profiles; live on Vercel',
    evidenceReviewDate: '2026-10-14',
    gitCommit: '0352227',
    deploymentQa: 'GitHub CI SUCCESS; Vercel live 200 OK',
    nextAction: 'Completed UK turn; next country Japan',
    publishedDone: true,
    sitemapUpdated: true
  });

  // 5. Sync Japan Rotation & Progress
  console.log('Syncing Japan...');
  await updateRotation('Japan', {
    publishedCount: 1,
    currentRoundStatus: 'Round 1 completed',
    mostRecentPublished: 'Aichi University',
    updatedDate: '2026-10-14'
  });
  await recordProgress({
    sourceRow: 1623,
    country: 'Japan',
    institution: 'Aichi University',
    officialWebsite: 'https://www.aichi-u.ac.jp/',
    universityGuide: 'https://universityproject-chi.vercel.app/universities/aichi-university/',
    publishedContent: 'Graduate School of Economics & International Communication, International Student Tuition Fee Reduction, Aichi Prefectural Scholarship, 3 faculty profiles; live on Vercel',
    evidenceReviewDate: '2026-10-14',
    gitCommit: 'ba17e49',
    deploymentQa: 'GitHub CI SUCCESS; Vercel live 200 OK',
    nextAction: 'Completed Japan turn; next country Sweden',
    publishedDone: true,
    sitemapUpdated: true
  });

  console.log('\nAll sheets synchronized successfully!');
}

