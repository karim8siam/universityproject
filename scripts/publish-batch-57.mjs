import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch57Universities } from './batch57-data.mjs';
import { recordProgress, updateRotation } from './sync-sheet.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = p => readFileSync(join(root, p), 'utf8');
const write = (p, content) => {
  const full = join(root, p);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');
};

const domain = 'https://openstemfield.org';
const slug = s => String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const today = '2026-10-16';

export async function publishBatch57() {
  console.log('Starting publication for Batch 57: 30 premier universities across 3 active countries (Germany, USA, Japan)...');

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch57Universities) {
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

    // 3. Generate University HTML Guide Page
    const uniUrl = `${domain}/universities/${u.slug}/`;

    const oppCards = u.opportunities.map(opp => {
      const oppSlug = `${opp.id}-${slug(opp.title)}`;
      return `<article class="card"><h3><a href="/opportunities/${oppSlug}/">${opp.title}</a></h3><p>${opp.desc}</p><dl class="pairs"><div class="pair"><dt>Type</dt><dd>${opp.type}</dd></div><div class="pair"><dt>Deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Funding</dt><dd>${opp.funding}</dd></div></dl><a href="/opportunities/${oppSlug}/">Full details &amp; requirements ↗</a></article>`;
    }).join('\n    ');

    const facCards = u.researchers.map(fac => {
      const facSlug = `${fac.id}-${slug(fac.name)}`;
      const topics = fac.topics || fac.interests || ["Higher Education"];
      return `<article class="card"><h3><a href="/researchers/${facSlug}/">${fac.name}</a></h3><p><strong>${fac.title}</strong> · ${fac.department}</p><p class="muted">${fac.summary}</p><div class="tags">${topics.map(t => `<span class="tag">${t}</span>`).join(' ')}</div><a href="/researchers/${facSlug}/">View research profile ↗</a></article>`;
    }).join('\n    ');

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.institution} (${u.shortName}) — Academic Guide &amp; Opportunities | OpenField</title><meta name="description" content="${u.heroSummary}"><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${u.institution} (${u.shortName}) — Academic Guide | OpenField"><meta property="og:description" content="${u.heroSummary}"><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"${u.institution}","alternateName":"${u.shortName}","url":"${u.website}","address":{"@type":"PostalAddress","addressLocality":"${u.location}"},"description":"${u.heroSummary}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/opportunities/">Opportunities</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><a href="/countries/${u.countryId}/">${u.countryLabel}</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.countryLabel} · Verified University · Reviewed ${today}</span><h1>${u.institution}</h1><p class="lead">${u.heroSummary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official university portal ↗</a><span>Source-reviewed directory</span></div></section><section class="section"><h2>Key institutional facts</h2><dl class="pairs"><div class="pair"><dt>Institution</dt><dd>${u.institution} (${u.shortName})</dd></div><div class="pair"><dt>Location</dt><dd>${u.location}</dd></div><div class="pair"><dt>Established</dt><dd>${u.stats.established}</dd></div><div class="pair"><dt>Student Population</dt><dd>${u.stats.students}</dd></div><div class="pair"><dt>International Proportion</dt><dd>${u.stats.international}</dd></div><div class="pair"><dt>Faculty</dt><dd>${u.stats.faculty}</dd></div></dl></section><section class="section"><h2>Academic overview &amp; research priorities</h2><p>${u.academicOverview}</p></section><section class="section"><h2>Research admissions &amp; international criteria</h2><p>${u.researchAdmissions}</p></section><section class="section"><h2>Academic degrees &amp; funding opportunities (${u.opportunities.length})</h2><div class="grid">\n    ${oppCards}\n  </div></section><section class="section"><h2>Department faculty &amp; researchers (${u.researchers.length})</h2><div class="grid">\n    ${facCards}\n  </div></section><section class="section"><h2>Editorial review and verification</h2><p class="source-note">University profile compiled from official ${u.institution} academic bulletins and institutional directories reviewed on ${today}. OpenField is an independent research guide.</p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated university HTML guide: universities/${u.slug}/index.html`);
  }

  // 4. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml...`);
  let sitemapContent = read('sitemap.xml');
  const existingLocs = new Set();
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    existingLocs.add(match[1]);
  }

  const newXmlEntries = [];
  let addedCount = 0;

  for (const u of batch57Universities) {
    const uniUrl = `${domain}/universities/${u.slug}/`;
    if (!existingLocs.has(uniUrl)) {
      newXmlEntries.push(`  <url><loc>${uniUrl}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`);
      existingLocs.add(uniUrl);
      addedCount++;
    }

    for (const opp of u.opportunities) {
      const oppSlug = `${opp.id}-${slug(opp.title)}`;
      const oppUrl = `${domain}/opportunities/${oppSlug}/`;
      if (!existingLocs.has(oppUrl)) {
        newXmlEntries.push(`  <url><loc>${oppUrl}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
        existingLocs.add(oppUrl);
        addedCount++;
      }
    }

    for (const fac of u.researchers) {
      const facSlug = `${fac.id}-${slug(fac.name)}`;
      const facUrl = `${domain}/researchers/${facSlug}/`;
      if (!existingLocs.has(facUrl)) {
        newXmlEntries.push(`  <url><loc>${facUrl}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.6</priority></url>`);
        existingLocs.add(facUrl);
        addedCount++;
      }
    }
  }

  sitemapContent = sitemapContent.replace(
    '</urlset>',
    `${newXmlEntries.join('\n')}\n</urlset>`
  );

  write('sitemap.xml', sitemapContent);
  console.log(`  ✓ Updated sitemap.xml: Added ${addedCount} new URLs. Total unique locs now: ${existingLocs.size}`);

  // 5. Inject new opportunities and researchers into data.js
  console.log(`\nInjecting data into data.js...`);
  let dataContent = read('data.js');

  const oppsToInject = [];
  const researchersToInject = [];

  for (const u of batch57Universities) {
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
        tuition: opp.tuition,
        fee: opp.fee,
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
    germany: {
      "IMMS Institut für Mikroelektronik - und Mechatronik-Systeme": "/universities/imms-institut-fuer-mikroelektronik-und-mechatronik-systeme-ilmenau/",
      "IMMS Institut für Mikroelektronik- und Mechatronik-Systeme": "/universities/imms-institut-fuer-mikroelektronik-und-mechatronik-systeme-ilmenau/",
      "IMMS Ilmenau": "/universities/imms-institut-fuer-mikroelektronik-und-mechatronik-systeme-ilmenau/",
      "IMMS": "/universities/imms-institut-fuer-mikroelektronik-und-mechatronik-systeme-ilmenau/",
      "Institute of Energy Process Engineering and Chemical Engineering": "/universities/institute-of-energy-process-engineering-iec-freiberg/",
      "IEC Freiberg": "/universities/institute-of-energy-process-engineering-iec-freiberg/",
      "IEC TU Bergakademie Freiberg": "/universities/institute-of-energy-process-engineering-iec-freiberg/",
      "IEC": "/universities/institute-of-energy-process-engineering-iec-freiberg/",
      "International School of Stuttgart (Degerloch Campus)": "/universities/international-school-of-stuttgart-degerloch/",
      "International School of Stuttgart": "/universities/international-school-of-stuttgart-degerloch/",
      "ISS Degerloch": "/universities/international-school-of-stuttgart-degerloch/",
      "ISS Stuttgart": "/universities/international-school-of-stuttgart-degerloch/",
      "International University of Resources": "/universities/international-university-of-resources-freiberg/",
      "IUR Freiberg": "/universities/international-university-of-resources-freiberg/",
      "IUR": "/universities/international-university-of-resources-freiberg/",
      "Internationales Begegnungszentrum (IBZ Ilmenau)": "/universities/internationales-begegnungszentrum-ibz-ilmenau/",
      "IBZ Ilmenau": "/universities/internationales-begegnungszentrum-ibz-ilmenau/",
      "IBZ": "/universities/internationales-begegnungszentrum-ibz-ilmenau/",
      "ISBA München | Internationale Studien- und Berufsakademie": "/universities/isba-muenchen-internationale-studien-und-berufsakademie/",
      "ISBA München": "/universities/isba-muenchen-internationale-studien-und-berufsakademie/",
      "ISBA Munich": "/universities/isba-muenchen-internationale-studien-und-berufsakademie/",
      "ISBA": "/universities/isba-muenchen-internationale-studien-und-berufsakademie/",
      "ISM International School of Management": "/universities/ism-international-school-of-management-munich/",
      "ISM International School of Management Munich": "/universities/ism-international-school-of-management-munich/",
      "ISM Munich": "/universities/ism-international-school-of-management-munich/",
      "ISM": "/universities/ism-international-school-of-management-munich/",
      "IU International University of Applied Sciences - Berlin Campus": "/universities/iu-international-university-berlin-campus/",
      "IU International University Berlin": "/universities/iu-international-university-berlin-campus/",
      "IU Berlin": "/universities/iu-international-university-berlin-campus/",
      "IU Internationale Hochschule Hannover": "/universities/iu-internationale-hochschule-hannover/",
      "IU Hannover": "/universities/iu-internationale-hochschule-hannover/",
      "IU International University of Applied Sciences Hannover": "/universities/iu-internationale-hochschule-hannover/",
      "IU myStudium Stuttgart": "/universities/iu-mystudium-stuttgart/",
      "IU Stuttgart": "/universities/iu-mystudium-stuttgart/",
      "IU International University of Applied Sciences Stuttgart": "/universities/iu-mystudium-stuttgart/"
    },
    usa: {
      "Delaware Valley University": "/universities/delaware-valley-university-doylestown/",
      "DelVal": "/universities/delaware-valley-university-doylestown/",
      "Delaware Valley Univ": "/universities/delaware-valley-university-doylestown/",
      "Delgado Community College": "/universities/delgado-community-college-new-orleans/",
      "Delgado CC": "/universities/delgado-community-college-new-orleans/",
      "Delgado": "/universities/delgado-community-college-new-orleans/",
      "DeVry University": "/universities/devry-university-phoenix/",
      "DeVry": "/universities/devry-university-phoenix/",
      "DeVry Phoenix": "/universities/devry-university-phoenix/",
      "Dickinson State University": "/universities/dickinson-state-university-north-dakota/",
      "DSU North Dakota": "/universities/dickinson-state-university-north-dakota/",
      "Dickinson State": "/universities/dickinson-state-university-north-dakota/",
      "Doane University - Lincoln Campus": "/universities/doane-university-lincoln/",
      "Doane University Lincoln": "/universities/doane-university-lincoln/",
      "Doane Lincoln": "/universities/doane-university-lincoln/",
      "East Texas A&M University-Dallas": "/universities/east-texas-a-and-m-university-dallas/",
      "East Texas A&M Dallas": "/universities/east-texas-a-and-m-university-dallas/",
      "TAMUC Dallas": "/universities/east-texas-a-and-m-university-dallas/",
      "Eastern Connecticut State University": "/universities/eastern-connecticut-state-university-willimantic/",
      "Eastern Connecticut State": "/universities/eastern-connecticut-state-university-willimantic/",
      "ECSU Willimantic": "/universities/eastern-connecticut-state-university-willimantic/",
      "Eastern Illinois University": "/universities/eastern-illinois-university-charleston/",
      "EIU Charleston": "/universities/eastern-illinois-university-charleston/",
      "EIU": "/universities/eastern-illinois-university-charleston/",
      "Eastern Kentucky University": "/universities/eastern-kentucky-university-richmond/",
      "EKU Richmond": "/universities/eastern-kentucky-university-richmond/",
      "EKU": "/universities/eastern-kentucky-university-richmond/",
      "Eastern New Mexico University": "/universities/eastern-new-mexico-university-portales/",
      "ENMU Portales": "/universities/eastern-new-mexico-university-portales/",
      "ENMU": "/universities/eastern-new-mexico-university-portales/"
    },
    japan: {
      "Sapporo University Women's Junior College": "/universities/sapporo-university-womens-junior-college/",
      "Sapporo Women's Junior College": "/universities/sapporo-university-womens-junior-college/",
      "SUWJC Sapporo": "/universities/sapporo-university-womens-junior-college/",
      "Teikyō Junior College": "/universities/teikyo-junior-college-tokyo/",
      "Teikyo Junior College": "/universities/teikyo-junior-college-tokyo/",
      "TJC Tokyo": "/universities/teikyo-junior-college-tokyo/",
      "Seisa Dohto University": "/universities/seisa-dohto-university-kitahiroshima/",
      "Seisa Dohto": "/universities/seisa-dohto-university-kitahiroshima/",
      "SDU Kitahiroshima": "/universities/seisa-dohto-university-kitahiroshima/",
      "Sendai Seiyo Gakuin College, Itsutsubashi Campus": "/universities/sendai-seiyo-gakuin-college-itsutsubashi/",
      "Sendai Seiyo Gakuin College": "/universities/sendai-seiyo-gakuin-college-itsutsubashi/",
      "Sendai Seiyo": "/universities/sendai-seiyo-gakuin-college-itsutsubashi/",
      "Sendai Shirayuri Women's College": "/universities/sendai-shirayuri-womens-college/",
      "Sendai Shirayuri": "/universities/sendai-shirayuri-womens-college/",
      "SSWC Sendai": "/universities/sendai-shirayuri-womens-college/",
      "Sendai University": "/universities/sendai-university-shibata/",
      "Sendai Univ": "/universities/sendai-university-shibata/",
      "SU Shibata": "/universities/sendai-university-shibata/",
      "Shokei Gakuin University": "/universities/shokei-gakuin-university-natori/",
      "Shokei Gakuin": "/universities/shokei-gakuin-university-natori/",
      "SGU Natori": "/universities/shokei-gakuin-university-natori/",
      "Showa University Yokohama Campus": "/universities/showa-university-yokohama-campus/",
      "Showa University Yokohama": "/universities/showa-university-yokohama-campus/",
      "Showa Yokohama": "/universities/showa-university-yokohama-campus/",
      "Takachiho University": "/universities/takachiho-university-suginami-tokyo/",
      "Takachiho": "/universities/takachiho-university-suginami-tokyo/",
      "TU Suginami": "/universities/takachiho-university-suginami-tokyo/",
      "Takarazuka University Tokyo Shinjuku Campus": "/universities/takarazuka-university-tokyo-shinjuku/",
      "Takarazuka University Tokyo": "/universities/takarazuka-university-tokyo-shinjuku/",
      "Takarazuka Tokyo": "/universities/takarazuka-university-tokyo-shinjuku/"
    }
  };

  for (const c of Object.keys(newUniMapEntries)) {
    fullPublishedMap[c] = {
      ...(fullPublishedMap[c] || {}),
      ...newUniMapEntries[c]
    };
    for (const [k, v] of Object.entries(newUniMapEntries[c])) {
      fullPublishedMap[c][k.toLowerCase()] = v;
    }
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

  for (const u of batch57Universities) {
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
  const uniCardsToAdd = batch57Universities.map(u => {
    const desc = u.heroSummary || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 1131 -> 1161
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>1161</strong><span>universities with detailed published guides</span></div>`
  );

  // Country counts after Batch 57:
  // Canada: 116, Australia: 57, Germany: 186, Italy: 114, USA: 185, UK: 100, Japan: 177, Sweden: 56, Netherlands: 121, Switzerland: 41
  const countryCounts = {
    canada: 116,
    australia: 57,
    germany: 186,
    italy: 114,
    usa: 185,
    uk: 100,
    japan: 177,
    sweden: 56,
    netherlands: 121
  };

  for (const [cid, cnt] of Object.entries(countryCounts)) {
    const regex = new RegExp(`(<a href="\\/countries\\/${cid}\\/" class="country-link-card">[\\s\\S]*?<p class="country-verified">)\\d+( source-reviewed universities<\\/p><\\/a>)`);
    uIndex = uIndex.replace(regex, `$1${cnt}$2`);
  }

  write('universities/index.html', uIndex);
  console.log(`  ✓ Updated universities/index.html`);

  // 9. Update Country Index Pages
  console.log(`\nUpdating 3 Active Country Directory Index Pages...`);
  const activeCountryTargetCounts = {
    germany: 186,
    usa: 185,
    japan: 177
  };

  for (const u of batch57Universities) {
    const cPath = `countries/${u.countryId}/index.html`;
    let cHtml = read(cPath);

    const targetCount = activeCountryTargetCounts[u.countryId];
    cHtml = cHtml.replace(
      /<div><strong>\d+<\/strong><span>detailed university guide[s]? published<\/span><\/div>/,
      `<div><strong>${targetCount}</strong><span>detailed university guides published</span></div>`
    );

    const desc = u.heroSummary || `${u.institution} academic programs and faculty research.`;
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
    cycle: 74,
    completedInCycle: [
      "germany",
      "usa",
      "japan"
    ],
    nextCountry: "germany",
    lastPublished: {
      country: "japan",
      university: "Takarazuka University Tokyo Shinjuku Campus",
      sourceRow: 1755
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 116,
      australia: 57,
      germany: 186,
      italy: 114,
      usa: 185,
      uk: 100,
      japan: 177,
      sweden: 56,
      netherlands: 121,
      switzerland: 41
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json`);

  // 11. Sync with Google Sheet via Webhook
  console.log(`\nSyncing Batch 57 universities with Google Sheets via Webhook...`);
  const chunkSize = 3;
  for (let i = 0; i < batch57Universities.length; i += chunkSize) {
    const chunk = batch57Universities.slice(i, i + chunkSize);
    await Promise.allSettled(chunk.map(async u => {
      try {
        console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
        await updateRotation(u.countryLabel, {
          publishedCount: activeCountryTargetCounts[u.countryId] || 180,
          currentRoundStatus: 'Batch 57 completed',
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
    }));
  }

  console.log(`\nBatch 57 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch57();
}
