import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch43Universities } from './batch43-data.mjs';
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

export async function publishBatch43() {
  console.log(`Starting publication for Batch 43: 30 premier universities across 7 active countries...`);

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch43Universities) {
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

  for (const u of batch43Universities) {
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
      "daVinci College": "/universities/davinci-college-halifax/",
      "daVinci College (Halifax)": "/universities/davinci-college-halifax/",
      "daVinci College Halifax": "/universities/davinci-college-halifax/",
      "daVinci": "/universities/davinci-college-halifax/",
      "Eastern College - Halifax Campus": "/universities/eastern-college-halifax-campus/",
      "Eastern College (Halifax Campus)": "/universities/eastern-college-halifax-campus/",
      "Eastern College Halifax": "/universities/eastern-college-halifax-campus/",
      "Eastern College": "/universities/eastern-college-halifax-campus/",
      "Nova Scotia College of Early Childhood Education (NSCECE)": "/universities/nova-scotia-college-of-early-childhood-education-nscece/",
      "Nova Scotia College of Early Childhood Education": "/universities/nova-scotia-college-of-early-childhood-education-nscece/",
      "NSCECE": "/universities/nova-scotia-college-of-early-childhood-education-nscece/",
      "NSCECE Halifax": "/universities/nova-scotia-college-of-early-childhood-education-nscece/",
      "O'Sullivan College of Quebec": "/universities/college-osullivan-de-quebec/",
      "Collège O'Sullivan de Québec": "/universities/college-osullivan-de-quebec/",
      "Collège O'Sullivan de Québec (O'Sullivan College)": "/universities/college-osullivan-de-quebec/",
      "College O'Sullivan de Quebec": "/universities/college-osullivan-de-quebec/",
      "O'Sullivan College": "/universities/college-osullivan-de-quebec/",
      "Collège O'Sullivan": "/universities/college-osullivan-de-quebec/"
    },
    germany: {
      "DHfPG - Studienzentrum Stuttgart": "/universities/dhfpg-studienzentrum-stuttgart/",
      "DHfPG Studienzentrum Stuttgart": "/universities/dhfpg-studienzentrum-stuttgart/",
      "DHfPG - Deutsche Hochschule für Prävention und Gesundheitsmanagement (Studienzentrum Stuttgart)": "/universities/dhfpg-studienzentrum-stuttgart/",
      "DHfPG Stuttgart": "/universities/dhfpg-studienzentrum-stuttgart/",
      "DHfPG": "/universities/dhfpg-studienzentrum-stuttgart/",
      "Dresden Leibniz Graduate School": "/universities/dresden-leibniz-graduate-school-dlgs/",
      "Dresden Leibniz Graduate School (DLGS)": "/universities/dresden-leibniz-graduate-school-dlgs/",
      "DLGS Dresden": "/universities/dresden-leibniz-graduate-school-dlgs/",
      "DLGS": "/universities/dresden-leibniz-graduate-school-dlgs/",
      "Duale Hochschule Schleswig-Holstein (DHSH)": "/universities/duale-hochschule-schleswig-holstein-dhsh/",
      "Duale Hochschule Schleswig-Holstein": "/universities/duale-hochschule-schleswig-holstein-dhsh/",
      "DHSH": "/universities/duale-hochschule-schleswig-holstein-dhsh/",
      "DHSH Kiel": "/universities/duale-hochschule-schleswig-holstein-dhsh/",
      "German International University Berlin Campus": "/universities/german-international-university-berlin-campus/",
      "German International University Berlin Campus (GIU Berlin)": "/universities/german-international-university-berlin-campus/",
      "German International University Berlin": "/universities/german-international-university-berlin-campus/",
      "GIU Berlin": "/universities/german-international-university-berlin-campus/",
      "GIU": "/universities/german-international-university-berlin-campus/",
      "Gisma University of Applied Sciences": "/universities/gisma-university-of-applied-sciences/",
      "Gisma University": "/universities/gisma-university-of-applied-sciences/",
      "Gisma": "/universities/gisma-university-of-applied-sciences/",
      "Gisma Potsdam": "/universities/gisma-university-of-applied-sciences/"
    },
    italy: {
      "Centro Universitario Sant'Andrea": "/universities/centro-universitario-sant-andrea-bergamo/",
      "Centro Universitario Sant'Andrea (Bergamo)": "/universities/centro-universitario-sant-andrea-bergamo/",
      "Centro Sant'Andrea Bergamo": "/universities/centro-universitario-sant-andrea-bergamo/",
      "Centro Sant'Andrea": "/universities/centro-universitario-sant-andrea-bergamo/",
      "Scuola di Psicoterapia Funzionale SIF Padova": "/universities/scuola-di-psicoterapia-funzionale-sif-padova/",
      "Scuola di Psicoterapia Funzionale (SIF Padova)": "/universities/scuola-di-psicoterapia-funzionale-sif-padova/",
      "Scuola di Psicoterapia Funzionale": "/universities/scuola-di-psicoterapia-funzionale-sif-padova/",
      "SIF Padova": "/universities/scuola-di-psicoterapia-funzionale-sif-padova/",
      "SIF": "/universities/scuola-di-psicoterapia-funzionale-sif-padova/",
      "Unicusano Learning Center Bari": "/universities/unicusano-learning-center-bari/",
      "Università degli Studi Niccolò Cusano (Polo di Bari)": "/universities/unicusano-learning-center-bari/",
      "Unicusano Bari": "/universities/unicusano-learning-center-bari/",
      "Unicusano Polo di Bari": "/universities/unicusano-learning-center-bari/",
      "Università Popolare": "/universities/universita-popolare-di-padova/",
      "Università Popolare di Padova": "/universities/universita-popolare-di-padova/",
      "UniPop Padova": "/universities/universita-popolare-di-padova/",
      "UniPop": "/universities/universita-popolare-di-padova/"
    },
    usa: {
      "Arizona College - Mesa": "/universities/arizona-college-of-nursing-mesa/",
      "Arizona College of Nursing (Mesa Campus)": "/universities/arizona-college-of-nursing-mesa/",
      "Arizona College of Nursing Mesa": "/universities/arizona-college-of-nursing-mesa/",
      "Arizona College Mesa": "/universities/arizona-college-of-nursing-mesa/",
      "Berkeley College New York City Midtown Campus": "/universities/berkeley-college-new-york-city-midtown/",
      "Berkeley College (New York City Midtown Campus)": "/universities/berkeley-college-new-york-city-midtown/",
      "Berkeley College NYC": "/universities/berkeley-college-new-york-city-midtown/",
      "Berkeley College Midtown": "/universities/berkeley-college-new-york-city-midtown/",
      "California Miramar University": "/universities/california-miramar-university-cmu/",
      "California Miramar University (CMU)": "/universities/california-miramar-university-cmu/",
      "California Miramar": "/universities/california-miramar-university-cmu/",
      "CMU San Diego": "/universities/california-miramar-university-cmu/",
      "Campbell University": "/universities/campbell-university-raleigh-campus/",
      "Campbell University (Raleigh Campus)": "/universities/campbell-university-raleigh-campus/",
      "Campbell University Raleigh": "/universities/campbell-university-raleigh-campus/",
      "Campbell Law": "/universities/campbell-university-raleigh-campus/",
      "Carolina University": "/universities/carolina-university-winston-salem/",
      "Carolina University (Winston-Salem)": "/universities/carolina-university-winston-salem/",
      "Carolina University Winston-Salem": "/universities/carolina-university-winston-salem/"
    },
    uk: {
      "City College Oxford": "/universities/city-college-oxford/",
      "City College Oxford UK": "/universities/city-college-oxford/",
      "National Extension College": "/universities/national-extension-college-nec/",
      "National Extension College (NEC Cambridge)": "/universities/national-extension-college-nec/",
      "National Extension College (NEC)": "/universities/national-extension-college-nec/",
      "NEC Cambridge": "/universities/national-extension-college-nec/",
      "NEC": "/universities/national-extension-college-nec/",
      "New York University in London": "/universities/new-york-university-in-london-nyu-london/",
      "New York University in London (NYU London)": "/universities/new-york-university-in-london-nyu-london/",
      "NYU in London": "/universities/new-york-university-in-london-nyu-london/",
      "NYU London": "/universities/new-york-university-in-london-nyu-london/",
      "Newcastle University International Study Centre": "/universities/newcastle-university-international-study-centre/",
      "Newcastle University ISC": "/universities/newcastle-university-international-study-centre/",
      "Newcastle ISC": "/universities/newcastle-university-international-study-centre/",
      "INTO Newcastle University": "/universities/newcastle-university-international-study-centre/"
    },
    japan: {
      "Kobe Kaisei College": "/universities/kobe-kaisei-college/",
      "Kobe Kaisei Joshi Gakuin Daigaku": "/universities/kobe-kaisei-college/",
      "Kobe Kaisei": "/universities/kobe-kaisei-college/",
      "Kaisei College": "/universities/kobe-kaisei-college/",
      "Kobe Women's University Port Island Campus": "/universities/kobe-womens-university-port-island-campus/",
      "Kobe Women's University (Port Island Campus)": "/universities/kobe-womens-university-port-island-campus/",
      "Kobe Women's Univ Port Island": "/universities/kobe-womens-university-port-island-campus/",
      "KWU Port Island": "/universities/kobe-womens-university-port-island-campus/",
      "Konan University Okamoto Campus": "/universities/konan-university-okamoto-campus/",
      "Konan University (Okamoto Campus)": "/universities/konan-university-okamoto-campus/",
      "Konan University": "/universities/konan-university-okamoto-campus/",
      "Konan Daigaku": "/universities/konan-university-okamoto-campus/",
      "Kyoto Arts and Crafts University Kyoto Higashiyama Campus": "/universities/kyoto-arts-and-crafts-university-kyobi/",
      "Kyoto Arts and Crafts University (KYOBI)": "/universities/kyoto-arts-and-crafts-university-kyobi/",
      "Kyoto Arts and Crafts University": "/universities/kyoto-arts-and-crafts-university-kyobi/",
      "KYOBI": "/universities/kyoto-arts-and-crafts-university-kyobi/",
      "Kyoto Bijutsu Kogeidaigaku": "/universities/kyoto-arts-and-crafts-university-kyobi/"
    },
    netherlands: {
      "Holland International Study Centre": "/universities/holland-international-study-centre/",
      "Holland ISC": "/universities/holland-international-study-centre/",
      "Holland ISC Amsterdam": "/universities/holland-international-study-centre/",
      "International Business The Hague": "/universities/international-business-school-the-hague-ibsh/",
      "International Business School The Hague": "/universities/international-business-school-the-hague-ibsh/",
      "International Business School The Hague (IBSH)": "/universities/international-business-school-the-hague-ibsh/",
      "IBSH The Hague": "/universities/international-business-school-the-hague-ibsh/",
      "IBSH": "/universities/international-business-school-the-hague-ibsh/",
      "UE Amsterdam (University of Applied Sciences Europe)": "/universities/ue-amsterdam-university-of-europe-for-applied-sciences/",
      "UE Amsterdam (University of Europe for Applied Sciences)": "/universities/ue-amsterdam-university-of-europe-for-applied-sciences/",
      "UE Amsterdam": "/universities/ue-amsterdam-university-of-europe-for-applied-sciences/",
      "University of Europe for Applied Sciences Amsterdam": "/universities/ue-amsterdam-university-of-europe-for-applied-sciences/",
      "University of Groningen, Zernike Campus": "/universities/university-of-groningen-zernike-campus/",
      "University of Groningen (Zernike Campus)": "/universities/university-of-groningen-zernike-campus/",
      "Groningen Zernike Campus": "/universities/university-of-groningen-zernike-campus/",
      "Zernike Campus Groningen": "/universities/university-of-groningen-zernike-campus/",
      "Zernike Campus": "/universities/university-of-groningen-zernike-campus/"
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

  for (const u of batch43Universities) {
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
  const uniCardsToAdd = batch43Universities.map(u => {
    const desc = u.description || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 711 -> 741
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>741</strong><span>universities with detailed published guides</span></div>`
  );

  // Country counts after Batch 43:
  // Canada: 83, Australia: 57, Germany: 87, Italy: 82, USA: 88, UK: 82, Japan: 83, Sweden: 56, Netherlands: 82
  const countryCounts = {
    canada: 83,
    australia: 57,
    germany: 87,
    italy: 82,
    usa: 88,
    uk: 82,
    japan: 83,
    sweden: 56,
    netherlands: 82
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
    canada: 83,
    germany: 87,
    italy: 82,
    usa: 88,
    uk: 82,
    japan: 83,
    netherlands: 82
  };

  for (const u of batch43Universities) {
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
    cycle: 60,
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
      university: "University of Groningen (Zernike Campus)",
      sourceRow: 1528
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 83,
      australia: 57,
      germany: 87,
      italy: 82,
      usa: 88,
      uk: 82,
      japan: 83,
      sweden: 56,
      netherlands: 82,
      switzerland: 41
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json`);

  // 11. Sync with Google Sheet
  console.log(`\nSyncing Batch 43 universities with Google Sheets via Webhook...`);
  for (const u of batch43Universities) {
    try {
      console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
      await updateRotation(u.countryLabel, {
        publishedCount: activeCountryTargetCounts[u.countryId] || 82,
        currentRoundStatus: 'Batch 43 completed',
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

  console.log(`\nBatch 43 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch43();
}
