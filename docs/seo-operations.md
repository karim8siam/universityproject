# Production SEO checks

OpenSTEMField keeps **source content, generated HTML, SEO configuration, and live deployment** separate. GitHub organization is not itself a Google ranking signal.

## Tests

- Run `node scripts/verify-site.mjs` for repository-level data and generated-page checks.
- Run `node scripts/check-live-seo.mjs` after production deployment to test live HTTP responses, metadata, canonical URLs, robots.txt, and sitemap format.
- Run `SITE_ORIGIN=https://preview.example.org node scripts/check-live-seo.mjs` against another domain only when its pages use that same canonical origin.
- A live smoke test is not a complete crawl and **cannot** confirm Google's indexing decision or ranking. Review real URL Inspection and Page indexing data in Search Console.

## Change safety

1. Keep existing public URLs stable during refactors.
2. Verify each record against an official source and keep its review date visible.
3. Do not index empty or unverified program pages.
4. Run repository checks before merging; run the live smoke test after deploying.
5. Review redirects, canonical hostname, rendered content, internal links and page performance.
6. Avoid unnecessary mass generation of near-identical country/subject/filter landing pages.

## Search Console

Use the domain property for openstemfield.org where possible. Submit `https://openstemfield.org/sitemap.xml`, inspect sample pages (homepage, subject, country, university, opportunity), and group indexing failures by cause. A valid sitemap helps discovery but does not guarantee indexation.
