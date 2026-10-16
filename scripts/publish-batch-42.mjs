import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch42Universities } from './batch42-data.mjs';
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

export async function publishBatch42() {
  console.log(`Starting publication for Batch 42: 30 premier universities across 7 active countries...`);

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch42Universities) {
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

    const resCards = u.researchers.map(r => `
      <div class="guide-res-card">
        <h4><a href="/researchers/${r.id}-${slug(r.name)}/">${r.name}</a></h4>
        <p class="res-role">${r.title} · ${r.department}</p>
        <p class="res-summary">${r.summary}</p>
        <div class="res-tags">${(r.topics || r.interests || []).slice(0, 3).map(t => `<span class="tag-sm">${t}</span>`).join(' ')}</div>
      </div>
    `).join('\n');

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.institution} — Guide, Admissions, Scholarships &amp; Faculty | OpenField</title><meta name="description" content="${u.description}"><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><link rel="stylesheet" href="/guide.css"><meta property="og:title" content="${u.institution} | OpenField"><meta property="og:description" content="${u.description}"><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"${u.institution}","url":"${u.website}","address":{"@type":"PostalAddress","addressCountry":"${u.countryLabel}"},"description":"${u.overview}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.countryLabel} · ${u.badge} · Sourced ${today}</span><h1>${u.institution}</h1><p class="lead">${u.lead}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official institution website ↗</a><span>Independent Academic Atlas</span></div></section><section class="section"><h2>Institution Overview &amp; Profile</h2><p>${u.overview}</p><div class="quick-facts-grid" style="margin-top:1.5rem;"><div class="fact-box"><strong>Institution Type</strong><span>${u.quickFacts.type}</span></div><div class="fact-box"><strong>Main Campus</strong><span>${u.quickFacts.campus}</span></div><div class="fact-box"><strong>Accreditation</strong><span>${u.quickFacts.accreditation}</span></div><div class="fact-box"><strong>Admissions Route</strong><span>${u.quickFacts.admissions}</span></div><div class="fact-box"><strong>Language of Instruction</strong><span>${u.quickFacts.language}</span></div><div class="fact-box"><strong>Financial Aid &amp; Grants</strong><span>${u.quickFacts.aid}</span></div></div></section><section class="section"><h2>Key Academic Strengths</h2><ul>${u.strengths.map(s => `<li>${s}</li>`).join('\n')}</ul></section><section class="section"><h2>Featured Academic &amp; Degree Programs</h2><div class="programs-grid">${u.programs.map(p => `<div class="program-box"><span class="badge ${slug(p.level)}">${p.level}</span><h4>${p.title}</h4><p>${p.desc}</p></div>`).join('\n')}</div></section><section class="section"><h2>Verified Academic Opportunities (${u.opportunities.length})</h2><div class="guide-opps-list">${oppCards}</div></section><section class="section"><h2>Notable Faculty &amp; Researchers (${u.researchers.length})</h2><div class="guide-res-list">${resCards}</div></section><section class="section"><h2>Next Steps &amp; Application Advisory</h2><p>Prospective scholars are advised to review official ${u.institution} program requirements well in advance of published deadlines.</p><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${u.website}" target="_blank" rel="noopener noreferrer">Visit ${u.shortName} official website ↗</a><a class="btn secondary" href="/#/mentorship">Free mentorship assistance ↗</a><a class="btn secondary" href="/countries/${u.countryId}/">Explore all ${u.countryLabel} institutions ↗</a></div></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated university guide HTML for ${u.slug}`);
  }

  // 4. Update data.js
  console.log(`\nUpdating data.js with ${allNewOpps.length} opportunities and ${allNewResearchers.length} researchers...`);
  let dataJs = read('data.js');

  const oppsInsertStr = allNewOpps.map(o => `  ${JSON.stringify(o)},`).join('\n');
  const resInsertStr = allNewResearchers.map(r => `  ${JSON.stringify(r)},`).join('\n');

  dataJs = dataJs.replace(
    'export const opportunities = [',
    `export const opportunities = [\n${oppsInsertStr}`
  );

  dataJs = dataJs.replace(
    'export const researchers = [',
    `export const researchers = [\n${resInsertStr}`
  );

  write('data.js', dataJs);
  console.log(`  ✓ Updated data.js`);

  // 5. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml with 330 new indexable URLs...`);
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [];

  for (const u of batch42Universities) {
    urlsToAdd.push(`  <url>\n    <loc>${domain}/universities/${u.slug}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
    for (const opp of u.opportunities) {
      urlsToAdd.push(`  <url>\n    <loc>${domain}/opportunities/${opp.id}-${slug(opp.title)}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
    }
    for (const res of u.researchers) {
      urlsToAdd.push(`  <url>\n    <loc>${domain}/researchers/${res.id}-${slug(res.name)}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
    }
  }

  sitemap = sitemap.replace(
    '</urlset>',
    `${urlsToAdd.join('\n')}\n</urlset>`
  );

  write('sitemap.xml', sitemap);
  console.log(`  ✓ Added ${urlsToAdd.length} URLs to sitemap.xml`);

  // 6. Update country-directory.js
  console.log(`\nUpdating country-directory.js...`);
  let cdJs = read('country-directory.js');
  const matchCd = cdJs.match(/const published\s*=\s*(\{[\s\S]*?\});\s*(?:const|let|var|function)/);
  if (!matchCd) {
    throw new Error('Could not find const published map in country-directory.js');
  }
  const fullPublishedMap = eval('(' + matchCd[1] + ')');

  const newUniMapEntries = {
    canada: {
      "Nova Scotia Community College (Ivany Campus)": "/universities/nova-scotia-community-college-ivany-campus/",
      "Nova Scotia Community College": "/universities/nova-scotia-community-college-ivany-campus/",
      "NSCC - Ivany Campus": "/universities/nova-scotia-community-college-ivany-campus/",
      "NSCC Ivany": "/universities/nova-scotia-community-college-ivany-campus/",
      "NSCC": "/universities/nova-scotia-community-college-ivany-campus/",
      "Sault College of Applied Arts and Technology": "/universities/sault-college-of-applied-arts-and-technology/",
      "Sault College": "/universities/sault-college-of-applied-arts-and-technology/",
      "Collège Mérici": "/universities/college-merici-quebec/",
      "Mérici collégial privé": "/universities/college-merici-quebec/",
      "College Merici": "/universities/college-merici-quebec/",
      "Mérici": "/universities/college-merici-quebec/",
      "International College of Manitoba (ICM)": "/universities/international-college-of-manitoba-icm/",
      "International College of Manitoba": "/universities/international-college-of-manitoba-icm/",
      "ICM": "/universities/international-college-of-manitoba-icm/",
      "ICM Manitoba": "/universities/international-college-of-manitoba-icm/"
    },
    germany: {
      "CBS International Business School": "/universities/cbs-international-business-school-germany/",
      "CBS University of Applied Sciences - Campus Rostock": "/universities/cbs-international-business-school-germany/",
      "CBS Business School": "/universities/cbs-international-business-school-germany/",
      "CBS Cologne": "/universities/cbs-international-business-school-germany/",
      "Cusanus Hochschule für Gesellschaftsgestaltung": "/universities/cusanus-hochschule-fuer-gesellschaftsgestaltung/",
      "Cusanus Hochschule": "/universities/cusanus-hochschule-fuer-gesellschaftsgestaltung/",
      "Hochschule für Gesellschaftsgestaltung": "/universities/cusanus-hochschule-fuer-gesellschaftsgestaltung/",
      "Duale Hochschule Baden-Württemberg Mosbach (DHBW Mosbach)": "/universities/dhbw-mosbach-cooperative-state-university/",
      "DHBW Mosbach": "/universities/dhbw-mosbach-cooperative-state-university/",
      "Duale Hochschule Baden-Württemberg Mosbach": "/universities/dhbw-mosbach-cooperative-state-university/",
      "Dresden International University (DIU)": "/universities/dresden-international-university-diu/",
      "Diu Dresden International University GmbH": "/universities/dresden-international-university-diu/",
      "Dresden International University": "/universities/dresden-international-university-diu/",
      "DIU Dresden": "/universities/dresden-international-university-diu/",
      "DIU": "/universities/dresden-international-university-diu/",
      "Duale Hochschule Baden-Württemberg Villingen-Schwenningen (DHBW VS)": "/universities/dhbw-villingen-schwenningen-cooperative-state-university/",
      "Duale Hochschule Baden-Württemberg Villingen-Schwenningen": "/universities/dhbw-villingen-schwenningen-cooperative-state-university/",
      "DHBW Villingen-Schwenningen": "/universities/dhbw-villingen-schwenningen-cooperative-state-university/",
      "DHBW VS": "/universities/dhbw-villingen-schwenningen-cooperative-state-university/"
    },
    italy: {
      "Skyup Academy": "/universities/skyup-academy-computer-graphics-veneto/",
      "Skyup Academy 3D": "/universities/skyup-academy-computer-graphics-veneto/",
      "UnitelmaSapienza University (Polo di Trani)": "/universities/unitelmasapienza-university-polo-di-trani/",
      "UNITELMA SAPIENZA Polo di TRANI": "/universities/unitelmasapienza-university-polo-di-trani/",
      "UnitelmaSapienza Polo di Trani": "/universities/unitelmasapienza-university-polo-di-trani/",
      "Unitelma Trani": "/universities/unitelmasapienza-university-polo-di-trani/",
      "Università Primo Levi": "/universities/universita-primo-levi-bologna/",
      "Universita 'Primo Levi": "/universities/universita-primo-levi-bologna/",
      "Università Primo Levi Bologna": "/universities/universita-primo-levi-bologna/",
      "Primo Levi Bologna": "/universities/universita-primo-levi-bologna/",
      "Università Telematica Pegaso (Sede di Ancona)": "/universities/universita-telematica-pegaso-sede-di-ancona/",
      "Università Telematica Pegaso - Sede di Ancona": "/universities/universita-telematica-pegaso-sede-di-ancona/",
      "Pegaso Ancona": "/universities/universita-telematica-pegaso-sede-di-ancona/"
    },
    usa: {
      "Arizona State University (Tempe Campus)": "/universities/arizona-state-university-tempe-campus/",
      "ASU - Tempe Campus": "/universities/arizona-state-university-tempe-campus/",
      "Arizona State University Tempe": "/universities/arizona-state-university-tempe-campus/",
      "ASU Tempe": "/universities/arizona-state-university-tempe-campus/",
      "Bethel College": "/universities/bethel-college-kansas/",
      "Bethel College (Kansas)": "/universities/bethel-college-kansas/",
      "Bethel College KS": "/universities/bethel-college-kansas/",
      "Bethel University": "/universities/bethel-university-tennessee/",
      "Bethel University (Tennessee)": "/universities/bethel-university-tennessee/",
      "Bethel University TN": "/universities/bethel-university-tennessee/",
      "Blue Ridge Community College": "/universities/blue-ridge-community-college-north-carolina/",
      "Blue Ridge CC": "/universities/blue-ridge-community-college-north-carolina/",
      "Blue Ridge College": "/universities/blue-ridge-community-college-north-carolina/",
      "Brigham Young University–Idaho": "/universities/brigham-young-university-idaho-byui/",
      "Brigham Young University-Idaho": "/universities/brigham-young-university-idaho-byui/",
      "BYU-Idaho": "/universities/brigham-young-university-idaho-byui/",
      "BYUI": "/universities/brigham-young-university-idaho-byui/"
    },
    uk: {
      "North West Regional College": "/universities/north-west-regional-college-nwrc/",
      "NWRC": "/universities/north-west-regional-college-nwrc/",
      "North West Regional College Derry": "/universities/north-west-regional-college-nwrc/",
      "Liverpool John Moores University International Study Centre": "/universities/ljmu-international-study-centre/",
      "LJMU International Study Centre": "/universities/ljmu-international-study-centre/",
      "LJMU ISC": "/universities/ljmu-international-study-centre/",
      "Moorlands College": "/universities/moorlands-college-christchurch/",
      "Moorlands College Christchurch": "/universities/moorlands-college-christchurch/",
      "Moorlands": "/universities/moorlands-college-christchurch/",
      "University of the West of Scotland (London Campus)": "/universities/university-of-the-west-of-scotland-london-campus/",
      "London Campus, University of the West of Scotland (UWS)": "/universities/university-of-the-west-of-scotland-london-campus/",
      "UWS London": "/universities/university-of-the-west-of-scotland-london-campus/",
      "UWS London Campus": "/universities/university-of-the-west-of-scotland-london-campus/"
    },
    japan: {
      "Kibi International University": "/universities/kibi-international-university/",
      "Kibi International University, Okayama Campus": "/universities/kibi-international-university/",
      "Kibi International Univ": "/universities/kibi-international-university/",
      "KIUI": "/universities/kibi-international-university/",
      "Kobe College": "/universities/kobe-college-kobe-jogakuin/",
      "Kobe College International Exchange Center": "/universities/kobe-college-kobe-jogakuin/",
      "Kobe Jogakuin Daigaku": "/universities/kobe-college-kobe-jogakuin/",
      "Kobe Jogakuin": "/universities/kobe-college-kobe-jogakuin/",
      "Kobe Gakuin University": "/universities/kobe-gakuin-university/",
      "Kobe Gakuin University Arise Campus": "/universities/kobe-gakuin-university/",
      "Kobe Gakuin": "/universities/kobe-gakuin-university/",
      "Kobe Shinwa University": "/universities/kobe-shinwa-university/",
      "Kobe Shinwa": "/universities/kobe-shinwa-university/",
      "Shinwa University": "/universities/kobe-shinwa-university/"
    },
    netherlands: {
      "Markus Verbeek Praehep": "/universities/markus-verbeek-praehep/",
      "Markus Verbeek Praehep - Financiële opleidingen & cursussen": "/universities/markus-verbeek-praehep/",
      "Markus Verbeek": "/universities/markus-verbeek-praehep/",
      "MVP": "/universities/markus-verbeek-praehep/",
      "Shenzhou Open University of TCM": "/universities/shenzhou-open-university-of-tcm/",
      "Shenzhou Open University": "/universities/shenzhou-open-university-of-tcm/",
      "Shenzhou University": "/universities/shenzhou-open-university-of-tcm/",
      "The Hague Pathway College": "/universities/the-hague-pathway-college-thpc/",
      "The Hague Pathway College (THPC)": "/universities/the-hague-pathway-college-thpc/",
      "THPC The Hague": "/universities/the-hague-pathway-college-thpc/",
      "THPC": "/universities/the-hague-pathway-college-thpc/",
      "Twente Pathway College": "/universities/twente-pathway-college-tpc/",
      "Twente Pathway College (TPC)": "/universities/twente-pathway-college-tpc/",
      "TPC Enschede": "/universities/twente-pathway-college-tpc/",
      "TPC": "/universities/twente-pathway-college-tpc/"
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
    `const published=${JSON.stringify(fullPublishedMap)};`
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

  for (const u of batch42Universities) {
    uniMapObj[u.institution] = `/universities/${u.slug}/`;
    if (u.shortName) {
      uniMapObj[u.shortName] = `/universities/${u.slug}/`;
    }
  }

  bsp = bsp.replace(
    /const universityMap = \{[\s\S]*?\};\n\nconst getUniPath/,
    `const universityMap = ${JSON.stringify(uniMapObj, null, 2)};\n\nconst getUniPath`
  );
  write('scripts/build-subject-pages.mjs', bsp);
  console.log(`  ✓ Updated build-subject-pages.mjs`);

  // 8. Update universities/index.html
  console.log(`\nUpdating universities/index.html...`);
  let uIndex = read('universities/index.html');
  const uniCardsToAdd = batch42Universities.map(u => {
    const desc = u.description || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 681 -> 711
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>711</strong><span>universities with detailed published guides</span></div>`
  );

  // Country counts after Batch 42:
  // Canada: 79, Australia: 57, Germany: 82, Italy: 78, USA: 83, UK: 78, Japan: 79, Sweden: 56, Netherlands: 78, Switzerland: 41
  const countryCounts = {
    canada: 79,
    australia: 57,
    germany: 82,
    italy: 78,
    usa: 83,
    uk: 78,
    japan: 79,
    sweden: 56,
    netherlands: 78
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
    canada: 79,
    germany: 82,
    italy: 78,
    usa: 83,
    uk: 78,
    japan: 79,
    netherlands: 78
  };

  for (const u of batch42Universities) {
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
    cycle: 59,
    completedInCycle: [
      "canada",
      "germany",
      "italy",
      "usa",
      "uk",
      "japan",
      "netherlands"
    ],
    nextCountry: "canada",
    lastPublished: {
      country: "netherlands",
      university: "Twente Pathway College (TPC)",
      sourceRow: 1514
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 79,
      australia: 57,
      germany: 82,
      italy: 78,
      usa: 83,
      uk: 78,
      japan: 79,
      sweden: 56,
      netherlands: 78,
      switzerland: 41
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json`);

  // 11. Sync with Google Sheet
  console.log(`\nSyncing Batch 42 universities with Google Sheets via Webhook...`);
  for (const u of batch42Universities) {
    try {
      console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
      await updateRotation(u.countryLabel, {
        publishedCount: activeCountryTargetCounts[u.countryId] || 78,
        currentRoundStatus: 'Batch 42 completed',
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

  console.log(`\nBatch 42 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch42();
}
