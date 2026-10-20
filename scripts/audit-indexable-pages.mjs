// Static SEO and publishing report; read-only, zero third-party dependencies.
// Run: node scripts/audit-indexable-pages.mjs
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const site = 'https://openstemfield.org';
const read = p => readFileSync(join(root,p),'utf8');
const sitemap = read('sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m => m[1].replaceAll('&amp;','&'));
const problems = [], warnings = [], titles = new Map(), canonicals = new Map();
let reviewed = 0;
for (const url of urls) {
  if (!url.startsWith(site + '/')) { problems.push('Noncanonical sitemap host: '+url); continue; }
  let path;
  try { path = new URL(url).pathname; } catch { problems.push('Invalid URL: '+url); continue; }
  if (!path.endsWith('/')) { warnings.push('Non-trailing-slash URL: '+url); continue; }
  const relative = path === '/' ? 'index.html' : path.slice(1)+'index.html';
  if (!existsSync(join(root,relative))) { problems.push('Sitemap URL lacks HTML file: '+url); continue; }
  const html = read(relative); reviewed++;
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g,' ').trim();
  const canonical = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)/i)?.[1];
  const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)/i)?.[1];
  const isNoindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
  if (!title) problems.push('Missing title: '+relative);
  if (!description) warnings.push('Missing description: '+relative);
  if (canonical !== url) problems.push('Wrong canonical: '+relative+' -> '+(canonical || '(none)'));
  if (isNoindex) problems.push('Noindex URL in sitemap: '+relative);
  if (!/<h1(?:\s|>)/i.test(html)) warnings.push('No H1 in source HTML: '+relative);
  if (!/<main(?:\s|>)/i.test(html)) warnings.push('No main landmark in source HTML: '+relative);
  if (/<div\s+id=["']app["']\s*><\/div>/i.test(html)) warnings.push('Empty JS mount in source HTML: '+relative);
  if (title) titles.set(title,[...(titles.get(title)||[]),relative]);
  if (canonical) canonicals.set(canonical,[...(canonicals.get(canonical)||[]),relative]);
}
for (const [title,paths] of titles) if (paths.length>1) warnings.push('Repeated title across '+paths.length+' pages: '+title+' ['+paths.slice(0,4).join(', ')+']');
for (const [url,paths] of canonicals) if (paths.length>1) problems.push('Repeated canonical across '+paths.length+' sitemap pages: '+url);
if (new Set(urls).size !== urls.length) problems.push('Duplicate sitemap loc entries');
if (urls.length>50000) problems.push('Sitemap exceeds 50,000 URLs; split using sitemap index');
if (Buffer.byteLength(sitemap)>50*1024*1024) problems.push('Sitemap exceeds 50 MiB');
const result = {generatedAt:new Date().toISOString(),site,sitemapEntries:urls.length,reviewed,problems,warnings};
if (process.env.REPORT_FILE) writeFileSync(process.env.REPORT_FILE,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({site,sitemapEntries:urls.length,reviewed,problemCount:problems.length,warningCount:warnings.length},null,2));
for (const x of problems.slice(0,30)) console.error('ERROR',x);
for (const x of warnings.slice(0,30)) console.warn('WARN',x);
if (problems.length>30 || warnings.length>30) console.log('Output truncated; set REPORT_FILE to save all findings');
if (process.env.STRICT_SEO_AUDIT==='1' && problems.length) process.exitCode=1;
