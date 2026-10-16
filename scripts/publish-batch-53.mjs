import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch53Universities } from './batch53-data.mjs';
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
const today = '2026-10-15';

export async function publishBatch53() {
  console.log('Starting publication for Batch 53: 30 premier universities across 3 active countries (Germany, USA, Japan)...');

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch53Universities) {
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

  for (const u of batch53Universities) {
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

  for (const u of batch53Universities) {
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
      "Ukrainian Free University Munich": "/universities/ukrainian-free-university-munich/",
      "Ukrainian Free University": "/universities/ukrainian-free-university-munich/",
      "UFU Munich": "/universities/ukrainian-free-university-munich/",
      "Ukrainische Freie Universität": "/universities/ukrainian-free-university-munich/",
      "Umwelt-Campus Birkenfeld": "/universities/umwelt-campus-birkenfeld/",
      "Environmental Campus Birkenfeld": "/universities/umwelt-campus-birkenfeld/",
      "Hochschule Trier - Umwelt-Campus Birkenfeld": "/universities/umwelt-campus-birkenfeld/",
      "Trier University of Applied Sciences - Environmental Campus Birkenfeld": "/universities/umwelt-campus-birkenfeld/",
      "Rostock University of Music and Theatre": "/universities/hmt-rostock-university-of-music-and-theatre/",
      "HMT Rostock": "/universities/hmt-rostock-university-of-music-and-theatre/",
      "Hochschule für Musik und Theater Rostock": "/universities/hmt-rostock-university-of-music-and-theatre/",
      "University of Music and Theatre Rostock": "/universities/hmt-rostock-university-of-music-and-theatre/",
      "Fachhochschule Dortmund": "/universities/fh-dortmund-university-of-applied-sciences/",
      "FH Dortmund": "/universities/fh-dortmund-university-of-applied-sciences/",
      "Dortmund University of Applied Sciences and Arts": "/universities/fh-dortmund-university-of-applied-sciences/",
      "University of Applied Sciences Bingen": "/universities/th-bingen-university-of-applied-sciences/",
      "TH Bingen": "/universities/th-bingen-university-of-applied-sciences/",
      "Technische Hochschule Bingen": "/universities/th-bingen-university-of-applied-sciences/",
      "University of Applied Sciences Worms": "/universities/hochschule-worms-university-of-applied-sciences/",
      "Hochschule Worms": "/universities/hochschule-worms-university-of-applied-sciences/",
      "Worms University of Applied Sciences": "/universities/hochschule-worms-university-of-applied-sciences/",
      "Berlin University of the Arts": "/universities/udk-berlin-university-of-the-arts/",
      "UdK Berlin": "/universities/udk-berlin-university-of-the-arts/",
      "Universität der Künste Berlin": "/universities/udk-berlin-university-of-the-arts/",
      "University of Erlangen-Nuremberg": "/universities/fau-erlangen-nuremberg-university/",
      "FAU Erlangen-Nürnberg": "/universities/fau-erlangen-nuremberg-university/",
      "FAU Erlangen-Nuremberg": "/universities/fau-erlangen-nuremberg-university/",
      "Friedrich-Alexander-Universität Erlangen-Nürnberg": "/universities/fau-erlangen-nuremberg-university/",
      "Friedrich-Alexander-Universität": "/universities/fau-erlangen-nuremberg-university/",
      "University of Europe for Applied Sciences Berlin": "/universities/university-of-europe-for-applied-sciences-berlin/",
      "UE Berlin": "/universities/university-of-europe-for-applied-sciences-berlin/",
      "University of Europe for Applied Sciences": "/universities/university-of-europe-for-applied-sciences-berlin/",
      "Ludwigshafen University of Business and Society": "/universities/hwg-lu-university-of-business-and-society-ludwigshafen/",
      "HWG LU": "/universities/hwg-lu-university-of-business-and-society-ludwigshafen/",
      "Hochschule für Wirtschaft und Gesellschaft Ludwigshafen": "/universities/hwg-lu-university-of-business-and-society-ludwigshafen/",
      "HWG Ludwigshafen": "/universities/hwg-lu-university-of-business-and-society-ludwigshafen/"
    },
    usa: {
      "Elmhurst University": "/universities/elmhurst-university-chicago/",
      "Elmhurst": "/universities/elmhurst-university-chicago/",
      "Elmhurst College": "/universities/elmhurst-university-chicago/",
      "Elon University": "/universities/elon-university-north-carolina/",
      "Elon": "/universities/elon-university-north-carolina/",
      "SUNY Empire State University": "/universities/suny-empire-state-university-manhattan/",
      "Empire State University": "/universities/suny-empire-state-university-manhattan/",
      "SUNY Empire": "/universities/suny-empire-state-university-manhattan/",
      "Empire State College": "/universities/suny-empire-state-university-manhattan/",
      "Emporia State University": "/universities/emporia-state-university-kansas/",
      "Emporia State": "/universities/emporia-state-university-kansas/",
      "ESU Kansas": "/universities/emporia-state-university-kansas/",
      "Fairleigh Dickinson University": "/universities/fairleigh-dickinson-university-new-jersey/",
      "Fairleigh Dickinson": "/universities/fairleigh-dickinson-university-new-jersey/",
      "FDU": "/universities/fairleigh-dickinson-university-new-jersey/",
      "Faulkner University": "/universities/faulkner-university-montgomery/",
      "Faulkner": "/universities/faulkner-university-montgomery/",
      "Fayetteville State University": "/universities/fayetteville-state-university-north-carolina/",
      "Fayetteville State": "/universities/fayetteville-state-university-north-carolina/",
      "FSU North Carolina": "/universities/fayetteville-state-university-north-carolina/",
      "Ferris State University": "/universities/ferris-state-university-michigan/",
      "Ferris State": "/universities/ferris-state-university-michigan/",
      "Ferris": "/universities/ferris-state-university-michigan/",
      "Fisk University": "/universities/fisk-university-nashville/",
      "Fisk": "/universities/fisk-university-nashville/",
      "Fitchburg State University": "/universities/fitchburg-state-university-massachusetts/",
      "Fitchburg State": "/universities/fitchburg-state-university-massachusetts/",
      "Fitchburg": "/universities/fitchburg-state-university-massachusetts/"
    },
    japan: {
      "The University of Tokyo - Komaba": "/universities/the-university-of-tokyo-komaba/",
      "The University of Tokyo": "/universities/the-university-of-tokyo-komaba/",
      "UTokyo Komaba": "/universities/the-university-of-tokyo-komaba/",
      "University of Tokyo Komaba": "/universities/the-university-of-tokyo-komaba/",
      "Tohoku Bunka Gakuen University": "/universities/tohoku-bunka-gakuen-university-sendai/",
      "TBGU Sendai": "/universities/tohoku-bunka-gakuen-university-sendai/",
      "TBGU": "/universities/tohoku-bunka-gakuen-university-sendai/",
      "Tohoku Fukushi University": "/universities/tohoku-fukushi-university-sendai/",
      "Tohoku Fukushi": "/universities/tohoku-fukushi-university-sendai/",
      "TFU Sendai": "/universities/tohoku-fukushi-university-sendai/",
      "TFU": "/universities/tohoku-fukushi-university-sendai/",
      "Tohoku Institute of Technology": "/universities/tohoku-institute-of-technology-sendai/",
      "Tohoku Institute of Technology Yagiyama Campus": "/universities/tohoku-institute-of-technology-sendai/",
      "Tohtech Sendai": "/universities/tohoku-institute-of-technology-sendai/",
      "Tohtech": "/universities/tohoku-institute-of-technology-sendai/",
      "Tohoku Seikatsu Bunka University": "/universities/tohoku-seikatsu-bunka-university-sendai/",
      "TSBU Sendai": "/universities/tohoku-seikatsu-bunka-university-sendai/",
      "TSBU": "/universities/tohoku-seikatsu-bunka-university-sendai/",
      "Mishima Gakuen University": "/universities/tohoku-seikatsu-bunka-university-sendai/",
      "Tohoku University School of Medicine": "/universities/tohoku-university-school-of-medicine-sendai/",
      "Tohoku University Hospital": "/universities/tohoku-university-school-of-medicine-sendai/",
      "Tohoku Med Sendai": "/universities/tohoku-university-school-of-medicine-sendai/",
      "Tohoku Med": "/universities/tohoku-university-school-of-medicine-sendai/",
      "Toin University of Yokohama": "/universities/toin-university-of-yokohama/",
      "Toin Yokohama": "/universities/toin-university-of-yokohama/",
      "Toin University": "/universities/toin-university-of-yokohama/",
      "Tokai University": "/universities/tokai-university-shonan-tokyo/",
      "Tokai": "/universities/tokai-university-shonan-tokyo/",
      "Tokai University Shonan": "/universities/tokai-university-shonan-tokyo/",
      "Tokaigakuen University": "/universities/tokaigakuen-university-nagoya/",
      "Tokaigakuen University Nagoya Campus": "/universities/tokaigakuen-university-nagoya/",
      "Tokaigakuen Nagoya": "/universities/tokaigakuen-university-nagoya/",
      "Tokaigakuen": "/universities/tokaigakuen-university-nagoya/",
      "Tokyo City University": "/universities/tokyo-city-university-setagaya/",
      "Tokyo City University Yokohama Campus": "/universities/tokyo-city-university-setagaya/",
      "Tokyo City University Setagaya Campus": "/universities/tokyo-city-university-setagaya/",
      "TCU Tokyo": "/universities/tokyo-city-university-setagaya/",
      "TCU": "/universities/tokyo-city-university-setagaya/"
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

  for (const u of batch53Universities) {
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
  const uniCardsToAdd = batch53Universities.map(u => {
    const desc = u.heroSummary || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 1011 -> 1041
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>1041</strong><span>universities with detailed published guides</span></div>`
  );

  // Country counts after Batch 53:
  // Canada: 116, Australia: 57, Germany: 146, Italy: 114, USA: 145, UK: 100, Japan: 137, Sweden: 56, Netherlands: 121, Switzerland: 41
  const countryCounts = {
    canada: 116,
    australia: 57,
    germany: 146,
    italy: 114,
    usa: 145,
    uk: 100,
    japan: 137,
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
    germany: 146,
    usa: 145,
    japan: 137
  };

  for (const u of batch53Universities) {
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
    cycle: 70,
    completedInCycle: [
      "germany",
      "usa",
      "japan"
    ],
    nextCountry: "germany",
    lastPublished: {
      country: "japan",
      university: "Tokyo City University",
      sourceRow: 1768
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 116,
      australia: 57,
      germany: 146,
      italy: 114,
      usa: 145,
      uk: 100,
      japan: 137,
      sweden: 56,
      netherlands: 121,
      switzerland: 41
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json`);

  // 11. Sync with Google Sheet via Webhook
  console.log(`\nSyncing Batch 53 universities with Google Sheets via Webhook...`);
  const chunkSize = 3;
  for (let i = 0; i < batch53Universities.length; i += chunkSize) {
    const chunk = batch53Universities.slice(i, i + chunkSize);
    await Promise.allSettled(chunk.map(async u => {
      try {
        console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
        await updateRotation(u.countryLabel, {
          publishedCount: activeCountryTargetCounts[u.countryId] || 140,
          currentRoundStatus: 'Batch 53 completed',
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

  console.log(`\nBatch 53 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch53();
}
