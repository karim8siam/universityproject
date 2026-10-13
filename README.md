# OpenField — Real Academic Opportunities
OpenField is a source-backed, subject-led academic discovery project, not a university or admissions agency.

## Published content
- Acadia University, Nova Scotia, Canada is the first university with a deeper verified source review.
- 22 actual degree, scholarship, summer research and co-op reference entries, each linked to official university information. An undated listing is **not** a confirmed open funded vacancy.
- 15 research faculty listings from Acadia's Physics and Mathematics university pages. Faculty recruitment and funding availability are marked unknown where unverified.
- Individual opportunity and researcher pages with descriptive titles, unique canonical URLs, original eligibility/cost summaries and source links. Source pages and programs may change after their review date.
- Eight subject pages (Physics, Engineering, Computer Science, Mathematics, Biology & Medicine, Chemistry, Earth & Environment, Social Sciences), official-source university pages, About, Privacy and Contact.

## Development
Node.js 20+, `npm start`, then open http://localhost:4173. No NPM installation is needed.

## Publishing rules
- Only publish real academic records backed by a public official source and visible review date; never invent funding, admissions, staffing or dates.
- Keep the precise difference between scholarship consideration, fully funded admission, an unadvertised degree and a verified active research job.
- Each dated opportunity leaves active listings after the deadline; `scripts/expire-listings.mjs` archives expired individual pages and updates `sitemap.xml` via scheduled GitHub Actions. GitHub Actions schedules can be delayed or disabled, so a failed scheduled run must be investigated.
- `node scripts/verify-site.mjs` checks the source data and all indexable pages. CI checks syntax and structured SEO output; browser HTTP checks still matter separately.
- Student contact: shahriyarkarimsiam@gmail.com. Optional mentorship is not live for payments.

## SEO
Submit `https://universityproject-chi.vercel.app/sitemap.xml` to Search Console once the site's ownership is verified. Sitemaps and metadata **do not guarantee indexing, rankings or AdSense approval**. Improve original quality, accurate funding information and editorial review before scaling.

## Country directory and round-robin review
- Browse `/universities/` and ten `/countries/{id}/` pages; source-reviewed Canada institutions have detailed profiles. The screening list of 1,646 candidate names is preliminary, not a source of funding claims.
- Publishing order: **Canada → Australia → Germany → Italy → USA → UK → Japan → Sweden → Netherlands → Switzerland**. Once one eligible university in a country is completed, move to the next country; start the cycle again after Switzerland. A country with no remaining candidates drops out of subsequent rounds.
- Canada has two independently published guides already (Acadia and Alberta University of the Arts); preserve both and continue with **Australia** next.
- Checkpoints: working Google Sheet `Publishing Progress` and `Country Rotation`, plus `country-rotation.json`. Do not duplicate published university records, and retain honest statuses for unresolved live-page QA.
- Country pages with no published source-reviewed university use `noindex,follow`. Never submit all preliminary institution names as scholarship pages to Search Console.
