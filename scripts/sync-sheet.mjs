import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=dirname(dirname(fileURLToPath(import.meta.url)));
const SHEET_ID='1C3C93DR1KmzhIa-AUG-dL0RqsxA4ZzsmVMh5G3HB4Do';

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

export async function postToSheetWebhook(webhookUrl, payload) {
  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return await res.json();
}

// Quick CLI status check
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log('Connecting to Google Sheet:', SHEET_ID);
  const rotation = await getLiveRotation();
  console.log('\n--- LIVE COUNTRY ROTATION ---');
  for (const r of rotation.slice(0, 5)) {
    console.log(`${r['Round order']}. ${r['Country']} [Status: ${r['Current round status']}] -> Next: Row ${r['Next source row']} (${r['Initial name to evaluate']})`);
  }
}
