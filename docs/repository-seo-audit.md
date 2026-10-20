# OpenSTEMField SEO and repository audit

## Confirmed architecture (October 2026)
- Node-based static deployment with standalone pages for universities, subjects, scholarships, research profiles, and country categories.
- `scripts/verify-site.mjs` already checks sitemap membership, basic metadata and source data.
- Homepage uses a JavaScript-mounted application; the university directory has crawlable source HTML.
- Both canonical URLs and internal links should use `https://openstemfield.org/` rather than hash fragments for important indexable destinations.

## Run and interpret
```sh
node scripts/verify-site.mjs
REPORT_FILE=seo-audit.json node scripts/audit-indexable-pages.mjs
node scripts/check-live-seo.mjs
```
The inventory is read-only and reports potential problems/warnings. Set `STRICT_SEO_AUDIT=1` for a nonzero exit code on confirmed static inconsistencies. The production test requires a networked machine and checks actual HTTP responses; neither proves Search Console indexation.

## Prioritized editorial QA
1. Verify the source of the directory's displayed `1,662 universities with detailed published guides` count; it appears alongside `1,646 preliminary institution candidates`. These metrics may use distinct populations, but should be explicitly explained and dynamically derived rather than hardcoded.
2. Check pages Google sees as `Crawled — currently not indexed` for thin/repeated information and source verifiability before requesting indexing.
3. Update, archive, or noindex confirmed expired opportunities; maintain accurate funding and deadlines.
4. Prefer real HTML links for discovery and ensure main academic information is available without requiring hash-navigation.

## Large repository structure: incremental migration
Maintain stable generated public URLs. Put canonical editable records in `content/` (country/university/opportunity grouping), generation and validation utilities in `scripts/`, runtime code in `src/`, design assets in `public/`, operational guidance in `docs/` and tests in `tests/`. Do **not** move published pages or assets en masse without route-preserving tests and a Vercel preview.

## Account-side checks
- Search Console: provide Page indexing and Performance exports or grant an applicable connector; API access has not been verified.
- Vercel: reconnect or authorize the `karim-siam-s-projects` team. The connected API returned HTTP 403 even though project metadata was discoverable.
- Verify the primary domain redirects (including www and vercel.app alias) and deployment state using Vercel team access.
