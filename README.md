# OpenField — Academic Opportunity Platform (Interactive Design Prototype)

This is a **standalone, dependency-free, responsive website prototype** for a free subject-first scholarship, funding, research and mentorship discovery platform.

## Run locally

1. Install Node.js 18 or later (if not already installed).
2. Open Terminal and go to the `academic-atlas` folder.
3. Run:

```bash
npm start
```

4. Visit **http://localhost:4173** in your browser.

No `npm install` is required. To use a different port: `PORT=3000 npm start`.

## What works

- Subject-first home page and eight academic disciplines
- Scholarships, master's, PhD, internship, research program and fellowship filters
- Search, funding filters and sort by deadline
- Opportunity detail pages and university requirement layouts
- Researcher listings, researcher detail pages and contact-gated design
- Bookmarking with `localStorage`, no login needed
- Mentorship concept page ($299/year)
- Automatically excludes expired opportunities in subject results, recent-deadlines desk and saved list
- Refreshes daily if the page remains open across midnight
- Responsive desktop/mobile layout

## Important: prototype vs production

- **All opportunities, researcher profiles and institution names in this sample are fictional.** They illustrate a complete site experience, NOT verified current scholarship offers.
- Deadline dates are generated relative to your current device date so you can test the filtering. One deliberately expired record is included and should never show in active results.
- The user requested that application links and researcher emails be gated; the prototype reflects that experience, but public official-source links are strongly recommended in a real scholarship website for transparency and trust. Do not scrape/monetize personal addresses or send bulk unsolicited emails.
- This is a front-end prototype. A production system needs databases, audit logs, administrative review tools, real source links, legal/privacy controls, hosting, a server-side expiry process, and responsible enrichment of academic data.

## Files

- `index.html`: page shell and fonts
- `styles.css`: responsive visual system
- `data.js`: clearly labeled fictional demonstration data
- `app.js`: interactive interface and browser-based routing
- `server.mjs`: local HTTP server using built-in Node libraries

Built as a concept, not yet integrated into a live domain or third-party services.
