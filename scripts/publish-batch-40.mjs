import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch40Universities } from './batch40-data.mjs';
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

export async function publishBatch40() {
  console.log(`Starting publication for Batch 40: 30 premier universities across 7 active countries...`);

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch40Universities) {
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

      const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — ${u.institution} Research Profile | OpenField</title><meta name="description" content="${fac.name} at ${u.institution}: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="${facUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — ${u.institution} Research Profile | OpenField"><meta property="og:description" content="${fac.name} at ${u.institution}: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="${facUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">${u.countryLabel} · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in graduate or doctoral research supervision in ${fac.topics.slice(0, 3).join(', ')} are advised to consult formal department application channels.</p><div class="actions"><a class="btn" href="${uniUrl}">${u.shortName} guide ↗</a><a class="btn secondary" href="/subjects/${fac.subject}/">${fac.subject.charAt(0).toUpperCase() + fac.subject.slice(1)} subject guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`researchers/${facSlug}/index.html`, facHtml);
    }
    console.log(`  ✓ Generated ${u.researchers.length} researcher HTML pages`);

    // 3. Generate University Guide HTML Page
    const uniUrl = `${domain}/universities/${u.slug}/`;

    const oppCardsHtml = u.opportunities.map(o => {
      const oppSlug = `${o.id}-${slug(o.title)}`;
      return `<article class="card"><span class="badge">${o.type}</span><h3><a href="/opportunities/${oppSlug}/">${o.title}</a></h3><p>${o.desc}</p><dl class="pairs"><div class="pair"><dt>Funding</dt><dd>${o.funding}</dd></div><div class="pair"><dt>Deadline</dt><dd>${o.deadlineText}</dd></div></dl><a href="/opportunities/${oppSlug}/">View application details ↗</a></article>`;
    }).join('\n    ');

    const facCardsHtml = u.researchers.map(f => {
      const facSlug = `${f.id}-${slug(f.name)}`;
      return `<article class="card"><h3><a href="/researchers/${facSlug}/">${f.name}</a></h3><p class="role">${f.title}</p><p>${f.summary}</p><p class="topics"><strong>Topics:</strong> ${f.topics.join(', ')}</p><a href="/researchers/${facSlug}/">View researcher profile ↗</a></article>`;
    }).join('\n    ');

    const programItemsHtml = u.programs.map(p => {
      return `<li><strong>${p.title}</strong> (${p.level}) — ${p.desc}</li>`;
    }).join('\n      ');

    const strengthsHtml = u.strengths.map(s => `<li>${s}</li>`).join('\n      ');

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.institution} — Admissions, Opportunities &amp; Faculty Research | OpenField</title><meta name="description" content="Explore verified academic programs, scholarships, fellowships, and sourced faculty profiles at ${u.institution} in ${u.location}."><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${u.institution} | OpenField"><meta property="og:description" content="Explore verified academic programs, scholarships, fellowships, and sourced faculty profiles at ${u.institution}."><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"${u.institution}","url":"${u.website}","address":{"@type":"PostalAddress","addressLocality":"${u.location}"},"publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">All Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel} Directory</a> · <a href="/#browse">Browse Subjects</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.countryLabel} · ${u.badge} · Reviewed ${today}</span><h1>${u.institution}</h1><p class="lead">${u.lead}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official university portal ↗</a><span>Independent researcher review</span></div></section><section class="section"><h2>Institutional Overview &amp; Campus Profile</h2><p>${u.overview}</p><dl class="pairs"><div class="pair"><dt>Institution type</dt><dd>${u.quickFacts.type}</dd></div><div class="pair"><dt>Campus location</dt><dd>${u.quickFacts.campus}</dd></div><div class="pair"><dt>Accreditation</dt><dd>${u.quickFacts.accreditation}</dd></div><div class="pair"><dt>Admissions channel</dt><dd>${u.quickFacts.admissions}</dd></div><div class="pair"><dt>Instruction language</dt><dd>${u.quickFacts.language}</dd></div><div class="pair"><dt>Financial aid &amp; support</dt><dd>${u.quickFacts.aid}</dd></div></dl></section><section class="section"><h2>Institutional Research Strengths</h2><ul>\n      ${strengthsHtml}\n    </ul></section><section class="section"><h2>Featured Academic Degrees &amp; Professional Programs</h2><ul class="programs-list">\n      ${programItemsHtml}\n    </ul></section><section class="section"><h2>Verified Scholarships &amp; Academic Opportunities</h2><div class="grid">\n    ${oppCardsHtml}\n  </div></section><section class="section"><h2>Documented Faculty &amp; Research Supervisors</h2><div class="grid">\n    ${facCardsHtml}\n  </div></section><section class="section"><h2>Admissions &amp; Verification Guidance</h2><p>All listings are compiled from official university sources and reviewed under OpenField editorial standards. Program availability, scholarship quotas, and entry requirements are subject to university revisions. Applicants should confirm all deadlines with ${u.institution}\'s official admissions office.</p><div class="actions"><a class="btn" href="${u.website}" target="_blank" rel="noopener noreferrer">Official university website ↗</a><a class="btn secondary" href="/countries/${u.countryId}/">${u.countryLabel} university directory ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated universities/${u.slug}/index.html`);
  }

  // 4. Update data.js
  console.log(`\nUpdating data.js with 210 new opportunities and 90 new researchers...`);
  let dataContent = read('data.js');

  const oppsFormatted = allNewOpps.map(o => {
    const parentUni = batch40Universities.find(u => u.opportunities.some(x => x.id === o.id));
    return `  {\n    "university": ${JSON.stringify(o.university || parentUni.institution)},\n    "country": ${JSON.stringify(o.country || parentUni.countryLabel)},\n    "location": ${JSON.stringify(o.location || parentUni.location)},\n    "reviewed": "${today}",\n    "id": ${o.id},\n    "subject": ${JSON.stringify(o.subject)},\n    "subjects": ${JSON.stringify(o.subjects)},\n    "type": ${JSON.stringify(o.type)},\n    "title": ${JSON.stringify(o.title)},\n    "source": ${JSON.stringify(o.source)},\n    "funding": ${JSON.stringify(o.funding)},\n    "status": ${JSON.stringify(o.status || "Available")},\n    "deadline": ${o.deadline ? `"${o.deadline}"` : "null"},\n    "deadlineText": ${JSON.stringify(o.deadlineText)},\n    "fee": ${JSON.stringify(o.fee)},\n    "tuition": ${JSON.stringify(o.tuition)},\n    "requirements": {\n      "gpa": ${JSON.stringify(o.requirements.gpa)},\n      "ielts": ${JSON.stringify(o.requirements.ielts)},\n      "gre": ${JSON.stringify(o.requirements.gre)},\n      "papers": ${JSON.stringify(o.requirements.papers)},\n      "references": ${JSON.stringify(o.requirements.references)}\n    },\n    "desc": ${JSON.stringify(o.desc)}\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*export const researchers=\[/,
    `,\n${oppsFormatted}\n];\nexport const researchers=[`
  );

  const researchersFormatted = allNewResearchers.map(f => {
    const parentUni = batch40Universities.find(u => u.researchers.some(x => x.id === f.id));
    return `  {\n    "id": ${f.id},\n    "subject": ${JSON.stringify(f.subject)},\n    "name": ${JSON.stringify(f.name)},\n    "title": ${JSON.stringify(f.title)},\n    "university": ${JSON.stringify(f.university || parentUni.institution)},\n    "country": ${JSON.stringify(f.country || parentUni.countryLabel)},\n    "topics": ${JSON.stringify(f.topics)},\n    "source": ${JSON.stringify(f.source)},\n    "email": ${f.email ? JSON.stringify(f.email) : "null"},\n    "summary": ${JSON.stringify(f.summary)},\n    "recruiting": ${JSON.stringify(f.recruiting || "Not verified")},\n    "reviewed": "${today}"\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*$/,
    `,\n${researchersFormatted}\n];\n`
  );

  write('data.js', dataContent);
  console.log(`  ✓ Updated data.js successfully`);

  // 5. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml with 330 new URLs...`);
  let sitemapXml = read('sitemap.xml');
  const newSitemapUrls = [];

  for (const u of batch40Universities) {
    newSitemapUrls.push(`${domain}/universities/${u.slug}/`);
    for (const opp of u.opportunities) {
      const oppSlug = `${opp.id}-${slug(opp.title)}`;
      newSitemapUrls.push(`${domain}/opportunities/${oppSlug}/`);
    }
    for (const fac of u.researchers) {
      const facSlug = `${fac.id}-${slug(fac.name)}`;
      newSitemapUrls.push(`${domain}/researchers/${facSlug}/`);
    }
  }

  const sitemapEntriesToAdd = newSitemapUrls.map(url => `<url><loc>${url}</loc><lastmod>${today}</lastmod></url>`).join('');
  sitemapXml = sitemapXml.replace('</urlset>', `${sitemapEntriesToAdd}</urlset>`);
  write('sitemap.xml', sitemapXml);
  console.log(`  ✓ Added ${newSitemapUrls.length} new URLs to sitemap.xml (total: ${[...sitemapXml.matchAll(/<loc>/g)].length})`);

  // 6. Update country-directory.js published map
  console.log(`\nUpdating country-directory.js published map...`);
  let cdJs = read('country-directory.js');
  const matchCd = cdJs.match(/const published=(\{[\s\S]*?\});/);
  if (!matchCd) {
    throw new Error('Could not find const published={...} in country-directory.js');
  }
  const fullPublishedMap = JSON.parse(matchCd[1]);

  const newUniMapEntries = {
    canada: {
      "Labrador Institute": "/universities/labrador-institute-of-memorial-university/",
      "Labrador Institute of Memorial University": "/universities/labrador-institute-of-memorial-university/",
      "Labrador Campus MUN": "/universities/labrador-institute-of-memorial-university/",
      "Southern Alberta Institute of Technology": "/universities/southern-alberta-institute-of-technology-sait/",
      "SAIT": "/universities/southern-alberta-institute-of-technology-sait/",
      "SAIT Calgary": "/universities/southern-alberta-institute-of-technology-sait/",
      "The King's University": "/universities/the-kings-university-edmonton/",
      "King's Edmonton": "/universities/the-kings-university-edmonton/",
      "TÉLUQ University": "/universities/teluq-university-quebec/",
      "Université TÉLUQ": "/universities/teluq-university-quebec/",
      "TELUQ": "/universities/teluq-university-quebec/"
    },
    germany: {
      "EBS Business School": "/universities/ebs-business-school-ebs-universitaet/",
      "EBS Universität für Wirtschaft und Recht": "/universities/ebs-business-school-ebs-universitaet/",
      "EBS Universität": "/universities/ebs-business-school-ebs-universitaet/",
      "Fachhochschule Wedel": "/universities/fachhochschule-wedel-fh-wedel/",
      "FH Wedel": "/universities/fachhochschule-wedel-fh-wedel/",
      "FH Aachen": "/universities/fh-aachen-university-of-applied-sciences/",
      "FH Aachen University of Applied Sciences": "/universities/fh-aachen-university-of-applied-sciences/",
      "Fachhochschule Aachen": "/universities/fh-aachen-university-of-applied-sciences/",
      "FH Schmalkalden University of Applied Sciences": "/universities/hochschule-schmalkalden-fh-schmalkalden/",
      "Hochschule Schmalkalden": "/universities/hochschule-schmalkalden-fh-schmalkalden/",
      "FH Schmalkalden": "/universities/hochschule-schmalkalden-fh-schmalkalden/",
      "Flensburg University of Applied Sciences": "/universities/flensburg-university-of-applied-sciences/",
      "Hochschule Flensburg": "/universities/flensburg-university-of-applied-sciences/",
      "FH Flensburg": "/universities/flensburg-university-of-applied-sciences/"
    },
    italy: {
      "Interuniversity Consortium AlmaLaurea": "/universities/interuniversity-consortium-almalaurea/",
      "AlmaLaurea": "/universities/interuniversity-consortium-almalaurea/",
      "Consorzio Interuniversitario AlmaLaurea": "/universities/interuniversity-consortium-almalaurea/",
      "ISSR Giovanni Paolo I - Veneto Orientale - Sede centrale di Treviso": "/universities/issr-giovanni-paolo-i-veneto-orientale/",
      "ISSR Giovanni Paolo I - Veneto Orientale": "/universities/issr-giovanni-paolo-i-veneto-orientale/",
      "ISSR Giovanni Paolo I": "/universities/issr-giovanni-paolo-i-veneto-orientale/",
      "Reale Collegio di Spagna": "/universities/reale-collegio-di-spagna-bologna/",
      "Real Colegio de España": "/universities/reale-collegio-di-spagna-bologna/",
      "SSML di Bari Bona Sforza University": "/universities/ssml-di-bari-bona-sforza/",
      "SSML Bona Sforza": "/universities/ssml-di-bari-bona-sforza/",
      "Scuola Superiore per Mediatori Linguistici Bona Sforza": "/universities/ssml-di-bari-bona-sforza/"
    },
    usa: {
      "Belmont Abbey College": "/universities/belmont-abbey-college-north-carolina/",
      "Belmont Abbey": "/universities/belmont-abbey-college-north-carolina/",
      "Butler University": "/universities/butler-university-indiana/",
      "Butler": "/universities/butler-university-indiana/",
      "Caldwell University": "/universities/caldwell-university-new-jersey/",
      "Caldwell": "/universities/caldwell-university-new-jersey/",
      "California State Polytechnic University, Humboldt": "/universities/cal-poly-humboldt/",
      "Cal Poly Humboldt": "/universities/cal-poly-humboldt/",
      "Humboldt State University": "/universities/cal-poly-humboldt/",
      "California State University, Fullerton": "/universities/california-state-university-fullerton-csuf/",
      "CSU Fullerton": "/universities/california-state-university-fullerton-csuf/",
      "Cal State Fullerton": "/universities/california-state-university-fullerton-csuf/"
    },
    uk: {
      "Royal Welsh College of Music & Drama": "/universities/royal-welsh-college-of-music-and-drama-rwcmd/",
      "RWCMD": "/universities/royal-welsh-college-of-music-and-drama-rwcmd/",
      "Royal Welsh College": "/universities/royal-welsh-college-of-music-and-drama-rwcmd/",
      "St Mary's University College Belfast": "/universities/st-marys-university-college-belfast/",
      "St Mary's Belfast": "/universities/st-marys-university-college-belfast/",
      "St Mary's University London": "/universities/st-marys-university-london-twickenham/",
      "St Mary's University, London": "/universities/st-marys-university-london-twickenham/",
      "St Mary's Twickenham": "/universities/st-marys-university-london-twickenham/",
      "University of East London": "/universities/university-of-east-london-uel/",
      "UEL": "/universities/university-of-east-london-uel/",
      "UEL London": "/universities/university-of-east-london-uel/"
    },
    japan: {
      "Kokushikan University": "/universities/kokushikan-university-tokyo/",
      "Kokushikan": "/universities/kokushikan-university-tokyo/",
      "Kyoto Pharmaceutical University": "/universities/kyoto-pharmaceutical-university-kyoyaku/",
      "Kyoyaku": "/universities/kyoto-pharmaceutical-university-kyoyaku/",
      "Kyoto Sangyo University": "/universities/kyoto-sangyo-university-ksu/",
      "KSU": "/universities/kyoto-sangyo-university-ksu/",
      "Kyoto Seika University": "/universities/kyoto-seika-university/",
      "Kyoto Seika": "/universities/kyoto-seika-university/"
    },
    netherlands: {
      "Netherlands Institute for Sound and Vision": "/universities/netherlands-institute-for-sound-and-vision-beeld-en-geluid/",
      "Beeld en Geluid": "/universities/netherlands-institute-for-sound-and-vision-beeld-en-geluid/",
      "Sound and Vision": "/universities/netherlands-institute-for-sound-and-vision-beeld-en-geluid/",
      "Netherlands Institute of Governance": "/universities/netherlands-institute-of-governance-nig/",
      "NIG": "/universities/netherlands-institute-of-governance-nig/",
      "NRG": "/universities/nuclear-research-and-consultancy-group-nrg-petten/",
      "Nuclear Research and Consultancy Group": "/universities/nuclear-research-and-consultancy-group-nrg-petten/",
      "NRG Petten": "/universities/nuclear-research-and-consultancy-group-nrg-petten/",
      "Vlag Graduate School": "/universities/vlag-graduate-school-wageningen/",
      "VLAG Graduate School": "/universities/vlag-graduate-school-wageningen/",
      "VLAG": "/universities/vlag-graduate-school-wageningen/"
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

  for (const u of batch40Universities) {
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
  const uniCardsToAdd = batch40Universities.map(u => {
    const desc = u.description || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 621 -> 651
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>651</strong><span>universities with detailed published guides</span></div>`
  );

  // Country counts after Batch 40:
  // Canada: 70, Australia: 57, Germany: 73, Italy: 69, USA: 74, UK: 70, Japan: 71, Sweden: 56, Netherlands: 70
  const countryCounts = {
    canada: 70,
    australia: 57,
    germany: 73,
    italy: 69,
    usa: 74,
    uk: 70,
    japan: 71,
    sweden: 56,
    netherlands: 70
  };

  for (const [cid, cnt] of Object.entries(countryCounts)) {
    const regex = new RegExp(`(<a href="\\/countries\\/${cid}\\/" class="country-link-card">[\\s\\S]*?<p class="country-verified">)\\d+( source-reviewed universities<\\/p><\\/a>)`);
    uIndex = uIndex.replace(regex, `$1${cnt}$2`);
  }

  write('universities/index.html', uIndex);
  console.log(`  ✓ Updated universities/index.html (Counter: 651)`);

  // 9. Update all 7 active country pages
  console.log(`\nUpdating active country pages...`);
  const activeCountryTargetCounts = {
    canada: 70,
    germany: 73,
    italy: 69,
    usa: 74,
    uk: 70,
    japan: 71,
    netherlands: 70
  };

  for (const u of batch40Universities) {
    const cPath = `countries/${u.countryId}/index.html`;
    let cHtml = read(cPath);

    cHtml = cHtml.replace(
      '<meta name="robots" content="noindex,follow">',
      '<meta name="robots" content="index,follow">'
    );

    const targetCount = activeCountryTargetCounts[u.countryId] || 70;
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
    cycle: 57,
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
      university: "VLAG Graduate School",
      sourceRow: 1540
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 70,
      australia: 57,
      germany: 73,
      italy: 69,
      usa: 74,
      uk: 70,
      japan: 71,
      sweden: 56,
      netherlands: 70,
      switzerland: 41
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json`);

  // 11. Sync with Google Sheet
  console.log(`\nSyncing Batch 40 universities with Google Sheets via Webhook...`);
  for (const u of batch40Universities) {
    try {
      console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
      await updateRotation(u.countryLabel, {
        publishedCount: activeCountryTargetCounts[u.countryId] || 70,
        currentRoundStatus: 'Batch 40 completed',
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

  console.log(`\nBatch 40 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch40();
}
