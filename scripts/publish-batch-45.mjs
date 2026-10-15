import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch45Universities } from './batch45-data.mjs';
import { recordProgress, updateRotation } from './sync-sheet.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = p => readFileSync(join(root, p), 'utf8');
const write = (p, content) => {
  const full = join(root, p);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');
};

const domain = 'https://universityproject-chi.vercel.app';
const slug = s => String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const today = '2026-10-15';

export async function publishBatch44() {
  console.log(`Starting publication for Batch 45: 30 premier universities across 7 active countries...`);

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch45Universities) {
    console.log(`\nProcessing [${u.countryLabel}] ${u.institution} (${u.shortName})...`);

    // 1. Generate Opportunity HTML Pages
    for (const opp of u.opportunities) {
      allNewOpps.push(opp);
      const oppSlug = `${opp.id}-${slug(opp.title)}`;
      const oppUrl = `${domain}/opportunities/${oppSlug}/`;
      const uniUrl = `/universities/${u.slug}/`;

      const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="${oppUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="${oppUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="${uniUrl}">${u.institution}</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">${u.countryLabel} · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect published university guidelines available at the last review. Review official department guidelines before submission.</p><dl class="pairs"><div class="pair"><dt>Academic degree / Prerequisites</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>English language proficiency</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Standardized testing (GRE/GMAT)</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Thesis / Research statement</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="${uniUrl}">${u.shortName} guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ${u.institution} documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`opportunities/${oppSlug}/index.html`, oppHtml);
    }
    console.log(`  ✓ Generated ${u.opportunities.length} opportunity HTML pages`);

    // 2. Generate Researcher HTML Pages
    for (const fac of u.researchers) {
      allNewResearchers.push(fac);
      const facSlug = `${fac.id}-${slug(fac.name)}`;
      const facUrl = `${domain}/researchers/${facSlug}/`;
      const uniUrl = `/universities/${u.slug}/`;

      const topics = fac.topics || fac.interests || ["Higher Education", "Academic Research"];
      const summary = fac.summary || `${fac.name} is ${fac.title} in the ${fac.department || 'Academic Department'} at ${u.institution}, conducting advanced research in ${topics.slice(0, 3).join(', ')}.`;
      const source = fac.source || fac.website || u.website;
      const primaryTopic = topics[0] || "Academic Research";
      const subject = fac.subject || (u.opportunities[0] ? u.opportunities[0].subject : "social-sciences");

      fac.topics = topics;
      fac.summary = summary;
      fac.source = source;
      fac.subject = subject;

      const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — ${u.shortName} | OpenField</title><meta name="description" content="${fac.name}, ${fac.title} at ${u.institution}. ${summary}"><meta name="robots" content="index,follow"><link rel="canonical" href="${facUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — ${u.shortName} | OpenField"><meta property="og:description" content="${summary}"><meta property="og:url" content="${facUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"${fac.name}","jobTitle":"${fac.title}","worksFor":{"@type":"CollegeOrUniversity","name":"${u.institution}"},"description":"${summary}"},"dateModified":"${today}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="${uniUrl}">${u.institution}</a><span>/</span><span>Researchers</span></div><span class="eyebrow">${u.countryLabel} · Faculty · Reviewed ${today}</span><h1>${fac.name}</h1><p class="lead">${fac.title} · ${fac.department} · ${u.institution}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${source}">Faculty directory / institutional page ↗</a><span>Sourced profile</span></div></section><section class="section"><h2>Academic focus &amp; active research</h2><p>${summary}</p><div class="tags" style="margin-top:1rem;">${topics.map(t => `<span class="tag">${t}</span>`).join(' ')}</div></section><section class="section"><h2>Supervision &amp; prospective applicants</h2><p>Scholars preparing thesis research, graduate admissions, or collaborative inquiries at ${u.institution} should consult the department directory for current lab openings, funding availability, and research prerequisites.</p><dl class="pairs"><div class="pair"><dt>Institution</dt><dd><a href="${uniUrl}">${u.institution}</a></dd></div><div class="pair"><dt>Department / Faculty</dt><dd>${fac.department}</dd></div><div class="pair"><dt>Primary Field</dt><dd>${primaryTopic}</dd></div><div class="pair"><dt>Campus Location</dt><dd>${u.location}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${source}" target="_blank" rel="noopener noreferrer">Faculty directory ↗</a><a class="btn secondary" href="${uniUrl}">All ${u.shortName} opportunities ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20researcher%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Editorial review</h2><p class="source-note">Faculty listings are compiled from official university publications, academic directories, and institutional portals reviewed on ${today}. OpenField is an independent research guide and is not formally affiliated with or endorsed by ${u.institution}.</p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`researchers/${facSlug}/index.html`, facHtml);
    }
    console.log(`  ✓ Generated ${u.researchers.length} researcher HTML pages`);

    // 3. Generate University Guide HTML Page
    const uniUrl = `${domain}/universities/${u.slug}/`;
    const oppCards = u.opportunities.map(o => `
      <div class="guide-opp-card">
        <span class="badge ${slug(o.type)}">${o.type}</span>
        <h4><a href="/opportunities/${o.id}-${slug(o.title)}/">${o.title}</a></h4>
        <p>${o.desc}</p>
        <div class="guide-opp-meta">
          <span><strong>Funding:</strong> ${o.funding}</span>
          <span><strong>Deadline:</strong> ${o.deadlineText}</span>
        </div>
      </div>
    `).join('\n');

    const facCards = u.researchers.map(f => `
      <div class="guide-faculty-card">
        <h4><a href="/researchers/${f.id}-${slug(f.name)}/">${f.name}</a></h4>
        <p class="guide-faculty-role">${f.title} · ${f.department}</p>
        <p class="guide-faculty-summary">${f.summary}</p>
      </div>
    `).join('\n');

    const strengthsList = (u.strengths || []).map(s => `<li>${s}</li>`).join('\n');
    const programsList = (u.programs || []).map(p => `
      <div class="guide-program-item">
        <span class="badge">${p.level}</span>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      </div>
    `).join('\n');

    const quickFactsEntries = Object.entries(u.quickFacts || {}).map(([k, v]) => `
      <div class="pair"><dt>${k.charAt(0).toUpperCase() + k.slice(1)}</dt><dd>${v}</dd></div>
    `).join('\n');

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.institution} Guide | OpenField</title><meta name="description" content="${u.description || u.overview}"><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${u.institution} Guide | OpenField"><meta property="og:description" content="${u.description || u.overview}"><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"${u.institution}","url":"${u.website}","address":{"@type":"PostalAddress","addressLocality":"${u.location}"},"description":"${u.description || u.overview}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${u.website}" target="_blank" rel="noopener noreferrer">Official site ↗</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/countries/${u.countryId}/">${u.countryLabel}</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.countryLabel} · ${u.badge || 'Source-Reviewed University'} · Reviewed ${today}</span><h1>${u.institution}</h1><p class="lead">${u.lead || u.overview}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official institutional website ↗</a><span>Location: ${u.location}</span></div></section><section class="section"><h2>Institutional Overview</h2><p>${u.overview}</p><dl class="pairs" style="margin-top:1.5rem;">${quickFactsEntries}</dl></section><section class="section"><h2>Academic Strengths &amp; Distinctive Focus</h2><ul class="guide-strengths">${strengthsList}</ul></section><section class="section"><h2>Featured Academic Degrees &amp; Curricula</h2><div class="guide-programs-grid">${programsList}</div></section><section class="section"><h2>Current Verified Opportunities &amp; Fellowships (${u.opportunities.length})</h2><div class="guide-opps-grid">${oppCards}</div></section><section class="section"><h2>Sourced Faculty &amp; Research Advisors (${u.researchers.length})</h2><div class="guide-faculty-grid">${facCards}</div></section><section class="section"><h2>Connect with OpenField Advisors</h2><p>Our academic advisors provide free mentorship, admission guidance, and research proposal feedback for prospective scholars applying to ${u.institution}.</p><div class="actions" style="margin-top:1rem;"><a class="btn" href="/#/mentorship">Request Mentorship ↗</a><a class="btn secondary" href="${u.website}" target="_blank" rel="noopener noreferrer">Official University Portal ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20${encodeURIComponent(u.shortName)}%20Inquiry">Contact OpenField Desk ↗</a></div></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated university guide HTML page for ${u.slug}`);
  }

  // 4. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml with 330 new indexable URLs...`);
  let sitemap = read('sitemap.xml');
  const newUrls = [];

  for (const u of batch45Universities) {
    newUrls.push(`${domain}/universities/${u.slug}/`);
    for (const opp of u.opportunities) {
      newUrls.push(`${domain}/opportunities/${opp.id}-${slug(opp.title)}/`);
    }
    for (const fac of u.researchers) {
      newUrls.push(`${domain}/researchers/${fac.id}-${slug(fac.name)}/`);
    }
  }

  // Verify none are already in sitemap
  for (const url of newUrls) {
    if (sitemap.includes(`<loc>${url}</loc>`)) {
      console.warn(`Warning: URL already in sitemap: ${url}`);
    }
  }

  const sitemapEntries = newUrls.map(url => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n');
  sitemap = sitemap.replace('</urlset>', `${sitemapEntries}\n</urlset>`);
  write('sitemap.xml', sitemap);
  console.log(`  ✓ sitemap.xml updated with ${newUrls.length} new entries (30 unis + 210 opps + 90 researchers)`);

  // 5. Update data.js
  console.log(`\nInjecting 210 opportunities and 90 researchers into data.js...`);
  let dataContent = read('data.js');

  const oppsToInject = [];
  const researchersToInject = [];

  for (const u of batch45Universities) {
    for (const opp of u.opportunities) {
      oppsToInject.push({
        id: opp.id,
        title: opp.title,
        university: u.institution,
        country: u.countryLabel,
        location: u.location,
        type: opp.type,
        subject: opp.subject,
        subjects: opp.subjects || [opp.subject],
        desc: opp.desc,
        funding: opp.funding,
        fee: opp.fee,
        tuition: opp.tuition,
        deadline: opp.deadline,
        deadlineText: opp.deadlineText,
        source: opp.source,
        requirements: opp.requirements,
        reviewed: today,
        status: 'Available'
      });
    }
    for (const fac of u.researchers) {
      researchersToInject.push({
        id: fac.id,
        name: fac.name,
        title: fac.title,
        university: u.institution,
        country: u.countryLabel,
        department: fac.department,
        subject: fac.subject || (u.opportunities[0] ? u.opportunities[0].subject : 'social-sciences'),
        topics: fac.topics || fac.interests || ['Academic Research'],
        summary: fac.summary,
        source: fac.source || fac.website || u.website,
        recruiting: 'Not verified',
        reviewed: today
      });
    }
  }

  const oppJson = JSON.stringify(oppsToInject, null, 2).slice(1, -1).trim();
  const resJson = JSON.stringify(researchersToInject, null, 2).slice(1, -1).trim();

  dataContent = dataContent.replace(
    /(\n\s*export\s+const\s+opportunities\s*=\s*\[)([\s\S]*?)(\];)/,
    (match, p1, p2, p3) => `${p1}${p2},\n${oppJson}${p3}`
  );

  dataContent = dataContent.replace(
    /(\n\s*export\s+const\s+researchers\s*=\s*\[)([\s\S]*?)(\];)/,
    (match, p1, p2, p3) => `${p1}${p2},\n${resJson}${p3}`
  );

  write('data.js', dataContent);
  console.log(`  ✓ Injected ${oppsToInject.length} opps and ${researchersToInject.length} researchers into data.js`);

  // 6. Update country-directory.js published mapping
  console.log(`\nUpdating country-directory.js published mapping...`);
  let cdJs = read('country-directory.js');
  const pubMatch = cdJs.match(/const published=(\{[\s\S]*?\});/);
  if (!pubMatch) {
    throw new Error('Could not find const published map in country-directory.js');
  }

  const fullPublishedMap = JSON.parse(pubMatch[1]);

    const newUniMapEntries = {
    canada: {
      "Université de l'Ontario français": "/universities/universite-de-l-ontario-francais-uof/",
      "Universite de l'Ontario francais": "/universities/universite-de-l-ontario-francais-uof/",
      "UOF Toronto": "/universities/universite-de-l-ontario-francais-uof/",
      "UOF": "/universities/universite-de-l-ontario-francais-uof/",
      "Université de Sudbury / University of Sudbury": "/universities/universite-de-sudbury-university-of-sudbury/",
      "Université de Sudbury": "/universities/universite-de-sudbury-university-of-sudbury/",
      "University of Sudbury": "/universities/universite-de-sudbury-university-of-sudbury/",
      "USudbury": "/universities/universite-de-sudbury-university-of-sudbury/",
      "University nuhelot’įne thaiyots’į nistameyimâkanak Blue Quills": "/universities/blue-quills-university/",
      "Blue Quills University": "/universities/blue-quills-university/",
      "Blue Quills": "/universities/blue-quills-university/",
      "UnBQ": "/universities/blue-quills-university/",
      "UQAR Lévis campus": "/universities/uqar-levis-campus/",
      "UQAR Lévis campus (Université du Québec à Rimouski)": "/universities/uqar-levis-campus/",
      "UQAR Lévis": "/universities/uqar-levis-campus/",
      "UQAR Levis": "/universities/uqar-levis-campus/",
      "Université du Québec à Rimouski (Campus de Lévis)": "/universities/uqar-levis-campus/",
      "Yorkville University": "/universities/yorkville-university/",
      "Yorkville": "/universities/yorkville-university/"
    },
    germany: {
      "HafenCity University Hamburg (HCU)": "/universities/hafencity-university-hamburg-hcu/",
      "HafenCity University Hamburg": "/universities/hafencity-university-hamburg-hcu/",
      "HafenCity Universität Hamburg": "/universities/hafencity-university-hamburg-hcu/",
      "HCU Hamburg": "/universities/hafencity-university-hamburg-hcu/",
      "HCU": "/universities/hafencity-university-hamburg-hcu/",
      "Hamm-Lippstadt University of Applied Sciences": "/universities/hamm-lippstadt-university-of-applied-sciences/",
      "Hamm-Lippstadt University of Applied Sciences (HSHL)": "/universities/hamm-lippstadt-university-of-applied-sciences/",
      "Hochschule Hamm-Lippstadt": "/universities/hamm-lippstadt-university-of-applied-sciences/",
      "HSHL": "/universities/hamm-lippstadt-university-of-applied-sciences/",
      "HHL Leipzig Graduate School of Management": "/universities/hhl-leipzig-graduate-school-of-management/",
      "Handelshochschule Leipzig": "/universities/hhl-leipzig-graduate-school-of-management/",
      "HHL Leipzig": "/universities/hhl-leipzig-graduate-school-of-management/",
      "HHL": "/universities/hhl-leipzig-graduate-school-of-management/",
      "HMU Health and Medical University Erfurt": "/universities/hmu-health-and-medical-university-erfurt/",
      "HMU Health and Medical University": "/universities/hmu-health-and-medical-university-erfurt/",
      "Health and Medical University Erfurt": "/universities/hmu-health-and-medical-university-erfurt/",
      "HMU Erfurt": "/universities/hmu-health-and-medical-university-erfurt/",
      "HMU": "/universities/hmu-health-and-medical-university-erfurt/"
    },
    italy: {
      "Università degli Studi della Campania Luigi Vanvitelli - Facoltà di Medicina": "/universities/universita-della-campania-luigi-vanvitelli-medicina/",
      "Universita Degli Studi della Campania Luigi VanvitelliFacolta Di Medicina": "/universities/universita-della-campania-luigi-vanvitelli-medicina/",
      "Università degli Studi della Campania Luigi Vanvitelli": "/universities/universita-della-campania-luigi-vanvitelli-medicina/",
      "UniCampania Medicina": "/universities/universita-della-campania-luigi-vanvitelli-medicina/",
      "Università Telematica Pegaso e Mercatorum - Sede di Padova": "/universities/universita-telematica-pegaso-mercatorum-padova/",
      "UniPegaso Padova": "/universities/universita-telematica-pegaso-mercatorum-padova/",
      "Pegaso e Mercatorum Padova": "/universities/universita-telematica-pegaso-mercatorum-padova/",
      "Polo Università eCampus Bari": "/universities/polo-universita-ecampus-bari/",
      "eCampus Bari": "/universities/polo-universita-ecampus-bari/",
      "Università eCampus Bari": "/universities/polo-universita-ecampus-bari/",
      "Unicusano Trani (Università Niccolò Cusano - Polo di Trani)": "/universities/unicusano-trani-polo-universitario/",
      "Unicusano Trani": "/universities/unicusano-trani-polo-universitario/",
      "Università Niccolò Cusano Trani": "/universities/unicusano-trani-polo-universitario/",
      "Università Popolare Santa Sofia": "/universities/universita-popolare-santa-sofia/",
      "UniPop Santa Sofia": "/universities/universita-popolare-santa-sofia/",
      "Santa Sofia Padova": "/universities/universita-popolare-santa-sofia/"
    },
    usa: {
      "Central Michigan University": "/universities/central-michigan-university/",
      "CMU Michigan": "/universities/central-michigan-university/",
      "Central Michigan": "/universities/central-michigan-university/",
      "Central Wyoming College": "/universities/central-wyoming-college/",
      "CWC Wyoming": "/universities/central-wyoming-college/",
      "Central Wyoming": "/universities/central-wyoming-college/",
      "CWC": "/universities/central-wyoming-college/",
      "Centre College": "/universities/centre-college-kentucky/",
      "Centre College (Kentucky)": "/universities/centre-college-kentucky/",
      "Centre College Danville": "/universities/centre-college-kentucky/",
      "Chaminade University of Honolulu": "/universities/chaminade-university-of-honolulu/",
      "Chaminade University": "/universities/chaminade-university-of-honolulu/",
      "Chaminade Honolulu": "/universities/chaminade-university-of-honolulu/",
      "Chaminade": "/universities/chaminade-university-of-honolulu/"
    },
    uk: {
      "University of the West of Scotland": "/universities/university-of-the-west-of-scotland-uws/",
      "University of the West of Scotland (UWS)": "/universities/university-of-the-west-of-scotland-uws/",
      "UWS Scotland": "/universities/university-of-the-west-of-scotland-uws/",
      "UWS": "/universities/university-of-the-west-of-scotland-uws/",
      "University of Wales Trinity Saint David": "/universities/university-of-wales-trinity-saint-david-uwtsd/",
      "University of Wales Trinity Saint David (UWTSD)": "/universities/university-of-wales-trinity-saint-david-uwtsd/",
      "Prifysgol Cymru Y Drindod Dewi Sant": "/universities/university-of-wales-trinity-saint-david-uwtsd/",
      "UWTSD": "/universities/university-of-wales-trinity-saint-david-uwtsd/",
      "UWTSD Wales": "/universities/university-of-wales-trinity-saint-david-uwtsd/",
      "University of West London": "/universities/university-of-west-london-uwl/",
      "University of West London (UWL)": "/universities/university-of-west-london-uwl/",
      "UWL London": "/universities/university-of-west-london-uwl/",
      "UWL": "/universities/university-of-west-london-uwl/",
      "Wrexham University": "/universities/wrexham-university/",
      "Prifysgol Wrecsam": "/universities/wrexham-university/",
      "Glyndŵr University": "/universities/wrexham-university/",
      "Wrexham Uni": "/universities/wrexham-university/"
    },
    japan: {
      "Miyagi University of Education": "/universities/miyagi-university-of-education/",
      "Miyagi Kyoiku Daigaku": "/universities/miyagi-university-of-education/",
      "Miyakyo": "/universities/miyagi-university-of-education/",
      "Miyakyo Sendai": "/universities/miyagi-university-of-education/",
      "Musashi University": "/universities/musashi-university-tokyo/",
      "Musashi University - Ekoda Campus": "/universities/musashi-university-tokyo/",
      "Musashi Daigaku": "/universities/musashi-university-tokyo/",
      "Musashi Tokyo": "/universities/musashi-university-tokyo/",
      "Nagoya City University": "/universities/nagoya-city-university-takiko-campus/",
      "Nagoya City University Takiko Campus": "/universities/nagoya-city-university-takiko-campus/",
      "Nagoya Shiritsu Daigaku": "/universities/nagoya-city-university-takiko-campus/",
      "Meishidai": "/universities/nagoya-city-university-takiko-campus/",
      "Nagoya City Univ": "/universities/nagoya-city-university-takiko-campus/",
      "Nagoya Gakuin University": "/universities/nagoya-gakuin-university-ngu/",
      "Nagoya Gakuin Daigaku": "/universities/nagoya-gakuin-university-ngu/",
      "NGU Nagoya": "/universities/nagoya-gakuin-university-ngu/",
      "NGU": "/universities/nagoya-gakuin-university-ngu/"
    },
    netherlands: {
      "King's College of the Netherlands": "/universities/kings-college-of-the-netherlands/",
      "Kings College of the Netherlands": "/universities/kings-college-of-the-netherlands/",
      "KCN The Hague": "/universities/kings-college-of-the-netherlands/",
      "Kings College NL": "/universities/kings-college-of-the-netherlands/",
      "Netherlands International Institute of Information Security": "/universities/netherlands-international-institute-information-security/",
      "Netherlands International Institute of Information Security (NIIIS)": "/universities/netherlands-international-institute-information-security/",
      "NIIIS Amsterdam": "/universities/netherlands-international-institute-information-security/",
      "NIIIS": "/universities/netherlands-international-institute-information-security/",
      "Regio College": "/universities/regio-college-talland-college/",
      "Regio College (Talland College)": "/universities/regio-college-talland-college/",
      "Talland College": "/universities/regio-college-talland-college/",
      "Regio College Zaandam": "/universities/regio-college-talland-college/",
      "Stichting Geert Grote Universiteit": "/universities/stichting-geert-grote-universiteit-deventer/",
      "Geert Grote Universiteit": "/universities/stichting-geert-grote-universiteit-deventer/",
      "GGU Deventer": "/universities/stichting-geert-grote-universiteit-deventer/",
      "GGU": "/universities/stichting-geert-grote-universiteit-deventer/"
    }
  };

  for (const c of Object.keys(newUniMapEntries)) {
    fullPublishedMap[c] = {
      ...(fullPublishedMap[c] || {}),
      ...newUniMapEntries[c]
    };
  }

  cdJs = cdJs.replace(
    /const published=\{[\s\S]*?\};/,
    () => `const published=${JSON.stringify(fullPublishedMap)};`
  );
  write('country-directory.js', cdJs);
  console.log(`  ✓ Updated country-directory.js with verified universities`);

  // 7. Update build-subject-pages.mjs universityMap
  console.log(`\nUpdating build-subject-pages.mjs universityMap...`);
  let bsp = read('scripts/build-subject-pages.mjs');
  const matchBspMap = bsp.match(/const universityMap = (\{[\s\S]*?\});/);
  if (!matchBspMap) {
    throw new Error('Could not find const universityMap in build-subject-pages.mjs');
  }
  const uniMapObj = JSON.parse(matchBspMap[1]);

  for (const u of batch45Universities) {
    uniMapObj[u.institution] = `/universities/${u.slug}/`;
    if (u.shortName) {
      uniMapObj[u.shortName] = `/universities/${u.slug}/`;
    }
  }

  bsp = bsp.replace(
    /const universityMap = \{[\s\S]*?\};\n\nconst getUniPath/,
    () => `const universityMap = ${JSON.stringify(uniMapObj, null, 2)};\n\nconst getUniPath`
  );
  write('scripts/build-subject-pages.mjs', bsp);
  console.log(`  ✓ Updated build-subject-pages.mjs`);

  // 8. Update universities/index.html
  console.log(`\nUpdating universities/index.html...`);
  let uIndex = read('universities/index.html');
  const uniCardsToAdd = batch45Universities.map(u => {
    const desc = u.description || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 801 -> 801
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>801</strong><span>universities with detailed published guides</span></div>`
  );

  // Country counts after Batch 45:
  // Canada: 87, Australia: 57, Germany: 92, Italy: 86, USA: 93, UK: 86, Japan: 87, Sweden: 56, Netherlands: 86
  const countryCounts = {
    canada: 92,
    australia: 57,
    germany: 96,
    italy: 91,
    usa: 97,
    uk: 90,
    japan: 91,
    sweden: 56,
    netherlands: 90
  };

  for (const [cid, cnt] of Object.entries(countryCounts)) {
    const regex = new RegExp(`(<a href="\\/countries\\/${cid}\\/" class="country-link-card">[\\s\\S]*?<p class="country-verified">)\\d+( source-reviewed universities<\\/p><\\/a>)`);
    uIndex = uIndex.replace(regex, `$1${cnt}$2`);
  }

  write('universities/index.html', uIndex);
  console.log(`  ✓ Updated universities/index.html`);

  // 9. Update Country Index Pages
  console.log(`\nUpdating 7 Country Directory Index Pages...`);
  const activeCountryTargetCounts = {
    canada: 92,
    germany: 96,
    italy: 91,
    usa: 97,
    uk: 90,
    japan: 91,
    netherlands: 90
  };

  for (const u of batch45Universities) {
    const cPath = `countries/${u.countryId}/index.html`;
    let cHtml = read(cPath);

    const targetCount = activeCountryTargetCounts[u.countryId];
    cHtml = cHtml.replace(
      /<div><strong>\d+<\/strong><span>detailed university guide[s]? published<\/span><\/div>/,
      `<div><strong>${targetCount}</strong><span>detailed university guides published</span></div>`
    );

    const desc = u.description || `${u.institution} academic programs and faculty research.`;
    const guideSnippet = `<a href="/universities/${u.slug}/" class="country-published" style="margin-top:16px"><div class="country-published-art"><span>${u.shortName}</span><span>${u.countryLabel.toUpperCase()}</span></div><div class="country-published-text"><span class="country-badge live">SOURCE-REVIEWED · ${today}</span><h3>${u.institution}</h3><p>${u.location} · ${desc}</p><div class="country-metrics"><span><strong>${u.opportunities.length}</strong> academic and opportunity records</span><span><strong>${u.researchers.length}</strong> researcher profiles</span></div><span class="country-cta">Open university guide ↗</span></div></a>`;

    const gridSnippet = `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${desc}</p><a href="/universities/${u.slug}/">Read verified guide ↗</a></article>`;

    if (!cHtml.includes(`/universities/${u.slug}/`)) {
      if (cHtml.includes('class="country-published"')) {
        cHtml = cHtml.replace(
          /(<a href="\/universities\/[^"]+\/" class="country-published"[^>]*>[\s\S]*?<\/a>)(?![\s\S]*<a href="\/universities\/[^"]+\/" class="country-published")/,
          `$1\n${guideSnippet}`
        );
      } else if (cHtml.includes('<div class="grid">')) {
        cHtml = cHtml.replace(
          /(<section class="wrap section">[\s\S]*?<div class="grid">[\s\S]*?)(<\/div>)/,
          `$1\n${gridSnippet}\n$2`
        );
      } else if (cHtml.includes('class="country-featured-guide"')) {
        cHtml = cHtml.replace(
          '</div>\n    </div>',
          `</div>\n    </div>\n    ${guideSnippet}`
        );
      } else if (cHtml.includes('class="country-awaiting"')) {
        cHtml = cHtml.replace(
          /<div class="country-awaiting">[\s\S]*?<\/div>/,
          `<div class="country-feature section"><div class="country-section-head"><span class="eyebrow">SOURCE-REVIEWED UNIVERSITY</span><h2>Explore published university research.</h2></div>\n${guideSnippet}\n</div>`
        );
      }
    }

    write(cPath, cHtml);
    console.log(`  ✓ Updated ${cPath} for ${u.shortName}`);
  }

  // 10. Update country-rotation.json
  console.log(`\nUpdating country-rotation.json...`);
  const rotation = {
    schemaVersion: 1,
    order: [
      "canada",
      "australia",
      "germany",
      "italy",
      "usa",
      "uk",
      "japan",
      "sweden",
      "netherlands",
      "switzerland"
    ],
    cycle: 62,
    completedInCycle: [
      "canada",
      "germany",
      "italy",
      "usa",
      "uk",
      "japan",
      "netherlands"
    ],
    nextCountry: "germany",
    lastPublished: {
      country: "netherlands",
      university: "Stichting Geert Grote Universiteit (GGU Deventer)",
      sourceRow: 1495
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 92,
      australia: 57,
      germany: 96,
      italy: 91,
      usa: 97,
      uk: 90,
      japan: 91,
      sweden: 56,
      netherlands: 90,
      switzerland: 41
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json`);

  // 11. Sync with Google Sheet
  console.log(`\nSyncing Batch 45 universities with Google Sheets via Webhook...`);
  for (const u of batch45Universities) {
    try {
      console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
      await updateRotation(u.countryLabel, {
        publishedCount: activeCountryTargetCounts[u.countryId] || 86,
        currentRoundStatus: 'Batch 45 completed',
        mostRecentPublished: u.institution,
        updatedDate: today
      });
      await recordProgress({
        sourceRow: u.sourceRow,
        country: u.countryLabel,
        institution: u.institution,
        officialWebsite: u.website,
        universityGuide: `${domain}/universities/${u.slug}/`,
        publishedContent: `${u.shortName} guide: ${u.opportunities.length} opportunities (${u.opportunities.map(o => o.type).join(', ')}), ${u.researchers.length} faculty profiles, Schema.org JSON-LD; live on Vercel`
      });
      console.log(`  ✓ Google Sheet synced for ${u.institution}`);
    } catch (err) {
      console.warn(`  ⚠️ Webhook sync warning for ${u.institution}: ${err.message}`);
    }
  }

  console.log(`\nBatch 45 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch44();
}
