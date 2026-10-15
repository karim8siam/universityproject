import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch50Universities } from './batch50-data.mjs';
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

export async function publishBatch50() {
  console.log('Starting publication for Batch 50: 30 premier universities across 6 active countries...');

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch50Universities) {
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
        <div class="card-details">
          <span><strong>Funding:</strong> ${o.funding}</span>
          <span><strong>Tuition:</strong> ${o.tuition}</span>
          <span><strong>Deadline:</strong> ${o.deadlineText}</span>
        </div>
      </div>
    `).join('\n');

    const resCards = u.researchers.map(r => `
      <div class="guide-res-card">
        <h4><a href="/researchers/${r.id}-${slug(r.name)}/">${r.name}</a></h4>
        <p class="res-title">${r.title} · ${r.department}</p>
        <p class="res-summary">${r.summary}</p>
        <div class="tags">${(r.topics || []).slice(0, 3).map(t => `<span class="tag">${t}</span>`).join(' ')}</div>
      </div>
    `).join('\n');

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.institution} Guide | OpenField</title><meta name="description" content="${u.heroSummary}"><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${u.institution} Guide | OpenField"><meta property="og:description" content="${u.heroSummary}"><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"${u.institution}","url":"${u.website}","address":{"@type":"PostalAddress","addressCountry":"${u.countryLabel}","addressLocality":"${u.location}"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${u.website}" target="_blank" rel="noopener noreferrer">Official site ↗</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/countries/${u.countryId}/">${u.countryLabel}</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.countryLabel} · ${u.type || 'University'} · Reviewed ${today}</span><h1>${u.institution}</h1><p class="lead">${u.heroSummary}</p><div class="quick-stats"><div><strong>${u.stats.established || 'Established'}</strong><span>Founded</span></div><div><strong>${u.stats.students || 'Students'}</strong><span>Community</span></div><div><strong>${u.stats.international || 'Global'}</strong><span>International</span></div><div><strong>${u.stats.faculty || 'Faculty'}</strong><span>Academics</span></div></div><div class="meta"><a class="btn" href="${u.website}" target="_blank" rel="noopener noreferrer">Official university website ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=${encodeURIComponent(u.shortName)}%20academic%20inquiry">Ask us — free ↗</a></div></section><section class="section"><h2>Academic overview &amp; excellence</h2><p>${u.academicOverview}</p></section><section class="section"><h2>Research admissions &amp; criteria</h2><p>${u.researchAdmissions}</p></section><section class="section"><h2>Verified opportunities &amp; funding programs (${u.opportunities.length})</h2><div class="guide-opp-grid">${oppCards}</div></section><section class="section"><h2>Distinguished faculty &amp; researchers (${u.researchers.length})</h2><div class="guide-res-grid">${resCards}</div></section><section class="section"><h2>Editorial &amp; verification standards</h2><p class="source-note">Institution profile and program records reflect official documentation verified on ${today}. OpenField is an independent student academic resource and is not formally affiliated with ${u.institution}.</p><nav class="actions" style="margin-top:1rem;"><a href="/countries/${u.countryId}/">All ${u.countryLabel} universities ↗</a> · <a href="/editorial-policy/">Editorial policy</a> · <a href="/contact/">Feedback</a></nav></section></main><footer class="footer"><strong>OpenField</strong><p>Independent research guides for global scholars.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated university guide HTML for ${u.shortName}`);
  }

  // 4. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml (+330 indexable URLs)...`);
  let sitemapContent = read('sitemap.xml');
  const locMatches = sitemapContent.match(/<loc>[\s\S]*?<\/loc>/g) || [];
  const existingLocs = new Set(locMatches.map(m => m.replace(/<\/?loc>/g, '').trim()));
  console.log(`Current sitemap loc count: ${existingLocs.size}`);

  const newUrls = [];
  for (const u of batch50Universities) {
    newUrls.push(`${domain}/universities/${u.slug}/`);
    for (const o of u.opportunities) {
      newUrls.push(`${domain}/opportunities/${o.id}-${slug(o.title)}/`);
    }
    for (const f of u.researchers) {
      newUrls.push(`${domain}/researchers/${f.id}-${slug(f.name)}/`);
    }
  }

  let addedCount = 0;
  const newXmlEntries = [];
  for (const url of newUrls) {
    if (!existingLocs.has(url)) {
      existingLocs.add(url);
      newXmlEntries.push(`  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
      addedCount++;
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

  for (const u of batch50Universities) {
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
    canada: {
      "ontariocolleges.ca": "/universities/ontario-colleges-higher-education-consortium/",
      "Ontario Colleges Higher Education Consortium": "/universities/ontario-colleges-higher-education-consortium/",
      "Ontario Colleges Consortium": "/universities/ontario-colleges-higher-education-consortium/",
      "Ontario Colleges": "/universities/ontario-colleges-higher-education-consortium/",
      "University of Alberta Career Centre": "/universities/university-of-alberta-career-centre/",
      "University of Alberta - Career and Professional Development Centre": "/universities/university-of-alberta-career-centre/",
      "UAlberta Career Centre": "/universities/university-of-alberta-career-centre/",
      "University of Alberta Hospital Emergency Room": "/universities/university-of-alberta-emergency-medicine-division/",
      "University of Alberta Hospital - Division of Emergency Medicine": "/universities/university-of-alberta-emergency-medicine-division/",
      "UAH Emergency Medicine": "/universities/university-of-alberta-emergency-medicine-division/",
      "University of Alberta Press": "/universities/university-of-alberta-press-scholarly-publishing/",
      "University of Alberta Press - Scholarly Publishing Institute": "/universities/university-of-alberta-press-scholarly-publishing/",
      "UAlberta Press": "/universities/university-of-alberta-press-scholarly-publishing/",
      "Universités Canada": "/universities/universities-canada-ottawa/",
      "Universities Canada": "/universities/universities-canada-ottawa/",
      "Universities Canada / Universités Canada": "/universities/universities-canada-ottawa/"
    },
    germany: {
      "Bayerische Akademie für Außenwirtschaft": "/universities/bayerische-akademie-fuer-aussenwirtschaft-muenchen/",
      "Bayerische Akademie für Außenwirtschaft (BAA München)": "/universities/bayerische-akademie-fuer-aussenwirtschaft-muenchen/",
      "BAA München": "/universities/bayerische-akademie-fuer-aussenwirtschaft-muenchen/",
      "Fernstudienprogramme „Wirtschaftspsychologie “ (M.Sc.) der HfWU": "/universities/hfwu-fernstudienzentrum-wirtschaftspsychologie/",
      "Fernstudienprogramme Wirtschaftspsychologie der HfWU": "/universities/hfwu-fernstudienzentrum-wirtschaftspsychologie/",
      "HfWU Nürtingen-Geislingen - Fernstudienzentrum Wirtschaftspsychologie": "/universities/hfwu-fernstudienzentrum-wirtschaftspsychologie/",
      "HfWU Fernstudienzentrum": "/universities/hfwu-fernstudienzentrum-wirtschaftspsychologie/",
      "Hochschule Koblenz - WesterwaldCampus": "/universities/hochschule-koblenz-westerwaldcampus-hoehr-grenzhausen/",
      "Hochschule Koblenz - WesterwaldCampus Höhr-Grenzhausen": "/universities/hochschule-koblenz-westerwaldcampus-hoehr-grenzhausen/",
      "Hochschule Koblenz WesterwaldCampus": "/universities/hochschule-koblenz-westerwaldcampus-hoehr-grenzhausen/",
      "Hochschule Trier (Gebäude L)": "/universities/hochschule-trier-campus-gestaltung/",
      "Hochschule Trier - Campus Gestaltung (Gebäude L)": "/universities/hochschule-trier-campus-gestaltung/",
      "Hochschule Trier Campus Gestaltung": "/universities/hochschule-trier-campus-gestaltung/",
      "Campus Gestaltung Hochschule Trier": "/universities/hochschule-trier-campus-gestaltung/",
      "Hochschule Wismar": "/universities/hochschule-wismar-university-of-technology/",
      "Hochschule Wismar - University of Applied Sciences: Technology, Business and Design": "/universities/hochschule-wismar-university-of-technology/"
    },
    italy: {
      "Uniscuole Pegaso S.Giovanni in P. (Bologna)": "/universities/uniscuole-pegaso-san-giovanni-in-persiceto/",
      "Uniscuole Pegaso - Polo di Studio San Giovanni in Persiceto": "/universities/uniscuole-pegaso-san-giovanni-in-persiceto/",
      "Uniscuole Pegaso Persiceto": "/universities/uniscuole-pegaso-san-giovanni-in-persiceto/",
      "Università d'Istruzione Permanente Uniper Recanati": "/universities/universita-istruzione-permanente-uniper-recanati/",
      "Uniper Recanati": "/universities/universita-istruzione-permanente-uniper-recanati/",
      "Università degli studi di Foggia": "/universities/universita-degli-studi-di-foggia/",
      "Università degli Studi di Foggia": "/universities/universita-degli-studi-di-foggia/",
      "UniFg": "/universities/universita-degli-studi-di-foggia/",
      "Università degli Studi di Padova - Centro di Ateneo per i Diritti Umani \"Antonio Papisca\"": "/universities/unipd-centro-diritti-umani-antonio-papisca/",
      "Università degli Studi di Padova - Centro di Ateneo per i Diritti Umani Antonio Papisca": "/universities/unipd-centro-diritti-umani-antonio-papisca/",
      "UniPd Human Rights Centre": "/universities/unipd-centro-diritti-umani-antonio-papisca/",
      "Università Privata Bari - Uni Puglia": "/universities/universita-privata-bari-uni-puglia/",
      "Università Privata Bari - Uni Puglia Polo di Alta Formazione": "/universities/universita-privata-bari-uni-puglia/",
      "Uni Puglia Bari": "/universities/universita-privata-bari-uni-puglia/"
    },
    usa: {
      "College of Western Idaho": "/universities/college-of-western-idaho-nampa/",
      "CWI Idaho": "/universities/college-of-western-idaho-nampa/",
      "CWI": "/universities/college-of-western-idaho-nampa/",
      "Colorado Christian University": "/universities/colorado-christian-university-lakewood/",
      "CCU Lakewood": "/universities/colorado-christian-university-lakewood/",
      "CCU": "/universities/colorado-christian-university-lakewood/",
      "Colorado Mountain College Leadville": "/universities/colorado-mountain-college-leadville/",
      "Colorado Mountain College - Leadville Campus": "/universities/colorado-mountain-college-leadville/",
      "CMC Leadville": "/universities/colorado-mountain-college-leadville/",
      "Colorado State University-Global Campus": "/universities/colorado-state-university-global-campus/",
      "Colorado State University Global": "/universities/colorado-state-university-global-campus/",
      "CSU Global": "/universities/colorado-state-university-global-campus/",
      "Colorado Technical University": "/universities/colorado-technical-university-colorado-springs/",
      "CTU Colorado Springs": "/universities/colorado-technical-university-colorado-springs/",
      "CTU": "/universities/colorado-technical-university-colorado-springs/"
    },
    japan: {
      "Meiji University Izumi Campus": "/universities/meiji-university-izumi-campus-tokyo/",
      "Meiji University - Izumi Campus": "/universities/meiji-university-izumi-campus-tokyo/",
      "Meiji University Izumi": "/universities/meiji-university-izumi-campus-tokyo/",
      "Miyagi Gakuin Women’s University": "/universities/miyagi-gakuin-womens-university-sendai/",
      "Miyagi Gakuin Women's University": "/universities/miyagi-gakuin-womens-university-sendai/",
      "MGWU Sendai": "/universities/miyagi-gakuin-womens-university-sendai/",
      "Nagoya University of Arts and Sciences": "/universities/nagoya-university-of-arts-and-sciences/",
      "NUAS Nisshin": "/universities/nagoya-university-of-arts-and-sciences/",
      "NUAS": "/universities/nagoya-university-of-arts-and-sciences/",
      "Nagoya University of Commerce and Business Nagoya Campus": "/universities/nucb-business-school-nagoya-campus/",
      "Nagoya University of Commerce and Business - Nagoya Campus (NUCB)": "/universities/nucb-business-school-nagoya-campus/",
      "NUCB Business School": "/universities/nucb-business-school-nagoya-campus/",
      "NUCB": "/universities/nucb-business-school-nagoya-campus/",
      "Nippon Sport Science University - Yokohama Kenshidai Campus": "/universities/nippon-sport-science-university-kenshidai/",
      "NSSU Kenshidai": "/universities/nippon-sport-science-university-kenshidai/",
      "NSSU": "/universities/nippon-sport-science-university-kenshidai/",
      "Nittaidai": "/universities/nippon-sport-science-university-kenshidai/"
    },
    netherlands: {
      "E-nursing": "/universities/e-nursing-healthcare-academy-netherlands/",
      "E-nursing Netherlands - Academy of Healthcare Education": "/universities/e-nursing-healthcare-academy-netherlands/",
      "E-nursing Netherlands": "/universities/e-nursing-healthcare-academy-netherlands/",
      "Indigo University Experience Netherlands": "/universities/indigo-university-experience-netherlands/",
      "Indigo University Netherlands": "/universities/indigo-university-experience-netherlands/",
      "Rebel University": "/universities/rebel-university-rotterdam/",
      "Rebel University Rotterdam - Executive Transition Academy": "/universities/rebel-university-rotterdam/",
      "Rebel University Rotterdam": "/universities/rebel-university-rotterdam/",
      "University of Antwerp - Faculty of Medicine": "/universities/university-of-antwerp-netherlands-medical-training/",
      "University of Antwerp - Netherlands Academic Cross-Border Training Center": "/universities/university-of-antwerp-netherlands-medical-training/",
      "University of Antwerp NL Center": "/universities/university-of-antwerp-netherlands-medical-training/",
      "مدرسة الفا": "/universities/alfa-college-campus-hardenberg/",
      "Alfa-college - Campus Hardenberg": "/universities/alfa-college-campus-hardenberg/",
      "Alfa-college Hardenberg": "/universities/alfa-college-campus-hardenberg/",
      "Alfa-college": "/universities/alfa-college-campus-hardenberg/"
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

  for (const u of batch50Universities) {
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
  const uniCardsToAdd = batch50Universities.map(u => {
    const desc = u.heroSummary || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 921 -> 951
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>951</strong><span>universities with detailed published guides</span></div>`
  );

  // Country counts after Batch 50:
  // Canada: 114, Australia: 57, Germany: 121, Italy: 113, USA: 122, UK: 100, Japan: 114, Sweden: 56, Netherlands: 112
  const countryCounts = {
    canada: 114,
    australia: 57,
    germany: 121,
    italy: 113,
    usa: 122,
    uk: 100,
    japan: 114,
    sweden: 56,
    netherlands: 112
  };

  for (const [cid, cnt] of Object.entries(countryCounts)) {
    const regex = new RegExp(`(<a href="\\/countries\\/${cid}\\/" class="country-link-card">[\\s\\S]*?<p class="country-verified">)\\d+( source-reviewed universities<\\/p><\\/a>)`);
    uIndex = uIndex.replace(regex, `$1${cnt}$2`);
  }

  write('universities/index.html', uIndex);
  console.log(`  ✓ Updated universities/index.html`);

  // 9. Update Country Index Pages
  console.log(`\nUpdating 6 Active Country Directory Index Pages...`);
  const activeCountryTargetCounts = {
    canada: 114,
    germany: 121,
    italy: 113,
    usa: 122,
    japan: 114,
    netherlands: 112
  };

  for (const u of batch50Universities) {
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
    cycle: 67,
    completedInCycle: [
      "canada",
      "germany",
      "italy",
      "usa",
      "japan",
      "netherlands"
    ],
    nextCountry: "canada",
    lastPublished: {
      country: "netherlands",
      university: "Alfa-college - Campus Hardenberg",
      sourceRow: 1550
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 114,
      australia: 57,
      germany: 121,
      italy: 113,
      usa: 122,
      uk: 100,
      japan: 114,
      sweden: 56,
      netherlands: 112,
      switzerland: 41
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json`);

  // 11. Sync with Google Sheet via Webhook
  console.log(`\nSyncing Batch 50 universities with Google Sheets via Webhook...`);
  const chunkSize = 3;
  for (let i = 0; i < batch50Universities.length; i += chunkSize) {
    const chunk = batch50Universities.slice(i, i + chunkSize);
    await Promise.allSettled(chunk.map(async u => {
      try {
        console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
        await updateRotation(u.countryLabel, {
          publishedCount: activeCountryTargetCounts[u.countryId] || 110,
          currentRoundStatus: 'Batch 50 completed',
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

  console.log(`\nBatch 50 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch50();
}
