// Production SEO smoke test. Run: node scripts/check-live-seo.mjs
// Read-only: no Search Console credentials, third-party packages, or site mutations.
const origin = (process.env.SITE_ORIGIN || 'https://openstemfield.org').replace(/\/$/, '');
const timeoutMs = 15000;
const errors = [];
const warnings = [];
async function get(path) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(origin + path, { signal: controller.signal, redirect: 'follow', headers: { 'User-Agent': 'OpenSTEMField-SEO-QA/1.0' } });
    return { response, body: await response.text() };
  } finally { clearTimeout(timer); }
}
function check(condition, message) { if (!condition) errors.push(message); }
async function audit(path, { html = true, canonical = true } = {}) {
  try {
    const { response, body } = await get(path);
    console.log(response.status, path, '->', response.url);
    check(response.status === 200, path + ': expected HTTP 200; got ' + response.status);
    check(new URL(response.url).origin === origin, path + ': redirected to unexpected origin ' + response.url);
    if (html && response.ok) {
      check(/text\/html/i.test(response.headers.get('content-type') || ''), path + ': response is not HTML');
      check(/<title>[^<]+<\/title>/i.test(body), path + ': missing HTML title');
      check(/<meta\s+name=["']description["']/i.test(body), path + ': missing description');
      if (canonical) {
        const match = body.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)/i);
        check(match?.[1] === origin + path, path + ': canonical mismatch: ' + (match?.[1] || 'missing'));
      }
      if (/<meta[^>]*name=["']robots["'][^>]*noindex/i.test(body)) warnings.push(path + ': noindex detected');
    }
    return { response, body };
  } catch (error) {
    errors.push(path + ': fetch failed: ' + error.message);
    return null;
  }
}
const home = await audit('/');
const robots = await audit('/robots.txt', { html: false });
if (robots?.response.ok) {
  check(/user-agent:\s*\*/i.test(robots.body), 'robots.txt lacks wildcard user agent');
  check(robots.body.includes('Sitemap: ' + origin + '/sitemap.xml'), 'robots.txt sitemap reference incorrect');
}
const sitemap = await audit('/sitemap.xml', { html: false });
if (sitemap?.response.ok) {
  check(/xml/i.test(sitemap.response.headers.get('content-type') || ''), 'sitemap.xml not served with XML content type');
  check(/<urlset\b|<sitemapindex\b/.test(sitemap.body), 'sitemap.xml does not look like a sitemap');
  const urls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1].replace(/&amp;/g,'&'));
  check(urls.length > 0, 'No URLs found in sitemap');
  check(new Set(urls).size === urls.length, 'Duplicate URLs in sitemap');
  check(urls.every(url => url.startsWith(origin + '/')), 'Sitemap has noncanonical-host URLs');
  check(Buffer.byteLength(sitemap.body, 'utf8') <= 50*1024*1024, 'Uncompressed sitemap exceeds 50 MiB');
  check(urls.length <= 50000 || /<sitemapindex\b/.test(sitemap.body), 'Single sitemap exceeds 50,000 URLs');
  console.log('Sitemap entries:', urls.length);
  // Representative pages only; not a full crawl.
  const samples = ['/', '/universities/', '/subjects/physics/'].filter(path => urls.includes(origin + path));
  for (const path of samples.filter(path => path !== '/')) await audit(path);
  if (!urls.includes(origin + '/')) warnings.push('Homepage absent from sitemap');
}
if (home && !home.body.includes('<div id="app"></div>')) console.log('Homepage HTML contains more than the known empty SPA mount.');
else if (home) warnings.push('Homepage uses an empty SPA mount; verify meaningful content in rendered HTML with URL Inspection.');
for (const warning of warnings) console.warn('WARN:', warning);
for (const error of errors) console.error('FAIL:', error);
console.log('Live SEO smoke test:', errors.length ? 'FAILED' : 'PASSED', '(' + errors.length + ' failures, ' + warnings.length + ' warnings)');
if (errors.length) process.exitCode = 1;
