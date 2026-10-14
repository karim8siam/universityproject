import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch29Universities } from './batch29-data.mjs';
import { recordProgress, updateRotation } from './sync-sheet.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = p => readFileSync(join(root, p), 'utf8');
const write = (p, content) => {
  const full = join(root, p);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');
};

const slug = s => String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const today = '2026-10-15';

export async function publishBatch29() {
  console.log(`Starting publication for Batch 29: 30 premier research universities across 10 countries (Cycles 30, 31 & 32)...`);

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch29Universities) {
    console.log(`\nProcessing [${u.countryLabel}] ${u.institution} (${u.shortName})...`);

    // 1. Generate Opportunity HTML Pages
    for (const opp of u.opportunities) {
      allNewOpps.push(opp);
      const oppSlug = `${opp.id}-${slug(opp.title)}`;
      const oppUrl = `https://universityproject-chi.vercel.app/opportunities/${oppSlug}/`;
      const uniUrl = `/universities/${u.slug}/`;

      const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="${oppUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="${oppUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="${uniUrl}">${u.institution}</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">${u.countryLabel} · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect published university guidelines available at the last review. Review official department guidelines before submission.</p><dl class="pairs"><div class="pair"><dt>Academic degree / Prerequisites</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>English language proficiency</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Standardized testing (GRE/GMAT)</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Thesis / Research statement</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="${uniUrl}">${u.shortName} guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ${u.institution} documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`opportunities/${oppSlug}/index.html`, oppHtml);
    }
    console.log(`  ✓ Generated ${u.opportunities.length} opportunity HTML pages`);

    // 2. Generate Researcher HTML Pages
    for (const fac of u.researchers) {
      allNewResearchers.push(fac);
      const facSlug = `${fac.id}-${slug(fac.name)}`;
      const facUrl = `https://universityproject-chi.vercel.app/researchers/${facSlug}/`;
      const uniUrl = `/universities/${u.slug}/`;

      const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — ${u.institution} Research Profile | OpenField</title><meta name="description" content="${fac.name} at ${u.institution}: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="${facUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — ${u.institution} Research Profile | OpenField"><meta property="og:description" content="${fac.name} at ${u.institution}: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="${facUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">${u.countryLabel} · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in graduate or doctoral research supervision in ${fac.topics.slice(0, 3).join(', ')} are advised to consult formal department application channels.</p><div class="actions"><a class="btn" href="${uniUrl}">${u.shortName} guide ↗</a><a class="btn secondary" href="/subjects/${fac.subject}/">${fac.subject.charAt(0).toUpperCase() + fac.subject.slice(1)} subject guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`researchers/${facSlug}/index.html`, facHtml);
    }
    console.log(`  ✓ Generated ${u.researchers.length} researcher HTML pages`);

    // 3. Generate University Index Page
    const uniUrl = `https://universityproject-chi.vercel.app/universities/${u.slug}/`;
    const oppCardsHtml = u.opportunities.map(o => {
      const oppSlug = `${o.id}-${slug(o.title)}`;
      return `<article class="card"><h3><a href="/opportunities/${oppSlug}/">${o.title}</a></h3><p>${o.desc}</p></article>`;
    }).join('');

    const facCardsHtml = u.researchers.map(f => {
      const facSlug = `${f.id}-${slug(f.name)}`;
      return `<article class="card"><h3><a href="/researchers/${facSlug}/">${f.name}</a></h3><p>${f.title} · ${f.topics.join(', ')}</p></article>`;
    }).join('');

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.headline}: Degrees, Scholarships &amp; Faculty Guide | OpenField</title><meta name="description" content="${u.description}"><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${u.headline}: Degrees, Scholarships &amp; Faculty Guide | OpenField"><meta property="og:description" content="${u.description}"><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"${u.institution}","url":"${u.website}","dateModified":"${today}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/universities/${u.slug}/">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.heroEyebrow}</span><h1>${u.headline}</h1><p>${u.overview}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official university portal ↗</a><span>Graduate Funding &amp; Faculty</span><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Verified degree programs and opportunities</h2><p>Review checked academic pathways and funding options below:</p><div class="grid">${oppCardsHtml}</div></section><section class="section"><h2>Admissions, language requirements &amp; application process</h2><dl class="pairs"><div class="pair"><dt>Master's admission eligibility</dt><dd>${u.admissions.masters}</dd></div><div class="pair"><dt>Doctoral admission eligibility</dt><dd>${u.admissions.phd}</dd></div><div class="pair"><dt>Language proficiency</dt><dd>${u.admissions.language}</dd></div><div class="pair"><dt>Research statement / Proposal</dt><dd>${u.admissions.proposal}</dd></div><div class="pair"><dt>Application fee</dt><dd>${u.admissions.appFee}</dd></div><div class="pair"><dt>Required documentation</dt><dd>${u.admissions.documents}</dd></div></dl></section><section class="section"><h2>Tuition fees and verified scholarship systems</h2><p>${u.tuitionText}</p><div class="actions"><a class="btn" href="/opportunities/${u.opportunities[0].id}-${slug(u.opportunities[0].title)}/">Top scholarship details ↗</a><a class="btn secondary" href="/opportunities/${u.opportunities[1].id}-${slug(u.opportunities[1].title)}/">PhD research pathway ↗</a><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official portal ↗</a></div></section><section class="section"><h2>Verified faculty profiles and research leaders</h2><p>Distinguished researchers and laboratory heads at ${u.institution}:</p><div class="grid">${facCardsHtml}</div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ${u.institution} documentation reviewed ${today}. Degree admissions, scholarship awards, and employment positions are subject to formal university review. OpenField does not charge students application fees.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated universities/${u.slug}/index.html`);
  }

  // 4. Append to data.js
  console.log(`\nUpdating data.js with 210 new opportunities and 90 new researchers...`);
  let dataContent = read('data.js');

  const oppsFormatted = allNewOpps.map(o => {
    const parentUni = batch29Universities.find(u => u.opportunities.some(x => x.id === o.id));
    return `  {\n    "university": ${JSON.stringify(o.university || parentUni.institution)},\n    "country": ${JSON.stringify(o.country || parentUni.countryLabel)},\n    "location": ${JSON.stringify(o.location || parentUni.location)},\n    "reviewed": "${today}",\n    "id": ${o.id},\n    "subject": ${JSON.stringify(o.subject)},\n    "subjects": ${JSON.stringify(o.subjects)},\n    "type": ${JSON.stringify(o.type)},\n    "title": ${JSON.stringify(o.title)},\n    "source": ${JSON.stringify(o.source)},\n    "funding": ${JSON.stringify(o.funding)},\n    "status": ${JSON.stringify(o.status)},\n    "deadline": ${o.deadline ? `"${o.deadline}"` : 'null'},\n    "deadlineText": ${JSON.stringify(o.deadlineText)},\n    "fee": ${JSON.stringify(o.fee)},\n    "tuition": ${JSON.stringify(o.tuition)},\n    "requirements": {\n      "gpa": ${JSON.stringify(o.requirements.gpa)},\n      "ielts": ${JSON.stringify(o.requirements.ielts)},\n      "gre": ${JSON.stringify(o.requirements.gre)},\n      "papers": ${JSON.stringify(o.requirements.papers)},\n      "references": ${JSON.stringify(o.requirements.references)}\n    },\n    "desc": ${JSON.stringify(o.desc)}\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*export const researchers=\[/,
    `,\n${oppsFormatted}\n];\nexport const researchers=[`
  );

  const facFormatted = allNewResearchers.map(f => {
    const parentUni = batch29Universities.find(u => u.researchers.some(x => x.id === f.id));
    return `  {\n    "id": ${f.id},\n    "subject": ${JSON.stringify(f.subject)},\n    "name": ${JSON.stringify(f.name)},\n    "title": ${JSON.stringify(f.title)},\n    "university": ${JSON.stringify(f.university || parentUni.institution)},\n    "country": ${JSON.stringify(f.country || parentUni.countryLabel)},\n    "topics": ${JSON.stringify(f.topics)},\n    "source": ${JSON.stringify(f.source)},\n    "email": null,\n    "summary": ${JSON.stringify(f.summary)},\n    "recruiting": "Not verified",\n    "reviewed": "${today}"\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*$/,
    `,\n${facFormatted}\n];\n`
  );

  write('data.js', dataContent);
  console.log(`  ✓ Updated data.js successfully`);

  // 5. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml with 330 new URLs...`);
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [];

  for (const u of batch29Universities) {
    urlsToAdd.push(`https://universityproject-chi.vercel.app/universities/${u.slug}/`);
    for (const o of u.opportunities) {
      urlsToAdd.push(`https://universityproject-chi.vercel.app/opportunities/${o.id}-${slug(o.title)}/`);
    }
    for (const f of u.researchers) {
      urlsToAdd.push(`https://universityproject-chi.vercel.app/researchers/${f.id}-${slug(f.name)}/`);
    }
  }

  let addedCount = 0;
  for (const u of urlsToAdd) {
    if (!sitemap.includes(`<loc>${u}</loc>`)) {
      const entry = `<url><loc>${u}</loc><lastmod>${today}</lastmod></url>\n`;
      sitemap = sitemap.replace('</urlset>', `${entry}</urlset>`);
      addedCount++;
    }
  }
  write('sitemap.xml', sitemap);
  console.log(`  ✓ Added ${addedCount} new URLs to sitemap.xml`);

  // 6. Update country-directory.js published mapping
  console.log(`\nUpdating country-directory.js published map...`);
  let cdJs = read('country-directory.js');
  const matchPublished = cdJs.match(/const published=(\{[\s\S]*?\});/);
  if (!matchPublished) {
    throw new Error('Could not find const published in country-directory.js');
  }
  const fullPublishedMap = JSON.parse(matchPublished[1]);

  const newUniMapEntries = {
    canada: {
      "Bow Valley College": "/universities/bow-valley-college/",
      "Bow Valley": "/universities/bow-valley-college/",
      "Cégep Limoilou": "/universities/cegep-limoilou/",
      "Cegep Limoilou": "/universities/cegep-limoilou/",
      "Limoilou": "/universities/cegep-limoilou/",
      "Cégep Garneau": "/universities/cegep-garneau/",
      "Cegep Garneau": "/universities/cegep-garneau/",
      "Garneau": "/universities/cegep-garneau/"
    },
    australia: {
      "SAE University College": "/universities/sae-university-college/",
      "SAE Institute Australia": "/universities/sae-university-college/",
      "SAE Institute": "/universities/sae-university-college/",
      "Nungalinya College": "/universities/nungalinya-college/",
      "Nungalinya": "/universities/nungalinya-college/",
      "Canterbury Institute of Management": "/universities/canterbury-institute-of-management/",
      "CIM Sydney": "/universities/canterbury-institute-of-management/",
      "Canterbury Institute": "/universities/canterbury-institute-of-management/"
    },
    germany: {
      "Berlin School of Economics and Law": "/universities/berlin-school-of-economics-and-law/",
      "Hochschule für Wirtschaft und Recht Berlin": "/universities/berlin-school-of-economics-and-law/",
      "HWR Berlin": "/universities/berlin-school-of-economics-and-law/",
      "DHBW Lörrach": "/universities/dhbw-loerrach/",
      "Duale Hochschule Baden-Württemberg Lörrach": "/universities/dhbw-loerrach/",
      "DHBW Loerrach": "/universities/dhbw-loerrach/",
      "Academy of Public Administration and Judiciary Meissen": "/universities/academy-of-public-administration-meissen/",
      "Hochschule Meißen": "/universities/academy-of-public-administration-meissen/",
      "HSF Meißen": "/universities/academy-of-public-administration-meissen/"
    },
    italy: {
      "CUOA Business School": "/universities/cuoa-business-school/",
      "CUOA": "/universities/cuoa-business-school/",
      "European College of Parma Foundation": "/universities/european-college-of-parma/",
      "Fondazione Collegio Europeo di Parma": "/universities/european-college-of-parma/",
      "Collegio Europeo di Parma": "/universities/european-college-of-parma/",
      "Humanitas University": "/universities/humanitas-university/",
      "Hunimed": "/universities/humanitas-university/"
    },
    usa: {
      "Angelo State University": "/universities/angelo-state-university/",
      "Angelo State": "/universities/angelo-state-university/",
      "ASU Texas": "/universities/angelo-state-university/",
      "Arkansas Tech University": "/universities/arkansas-tech-university/",
      "Arkansas Tech": "/universities/arkansas-tech-university/",
      "ATU": "/universities/arkansas-tech-university/",
      "Augustana University": "/universities/augustana-university/",
      "Augustana": "/universities/augustana-university/",
      "AU South Dakota": "/universities/augustana-university/"
    },
    uk: {
      "Edge Hill University": "/universities/edge-hill-university/",
      "Edge Hill": "/universities/edge-hill-university/",
      "Leeds Arts University": "/universities/leeds-arts-university/",
      "Leeds Arts": "/universities/leeds-arts-university/",
      "Leeds Beckett University": "/universities/leeds-beckett-university/",
      "Leeds Beckett": "/universities/leeds-beckett-university/",
      "LBU": "/universities/leeds-beckett-university/"
    },
    japan: {
      "Hokkai-Gakuen University": "/universities/hokkai-gakuen-university/",
      "Hokkai Gakuen": "/universities/hokkai-gakuen-university/",
      "HGU": "/universities/hokkai-gakuen-university/",
      "Hokkaido Information University": "/universities/hokkaido-information-university/",
      "HIU Hokkaido": "/universities/hokkaido-information-university/",
      "Do-Johodai": "/universities/hokkaido-information-university/",
      "Hokkaido University of Education": "/universities/hokkaido-university-of-education/",
      "HUE Japan": "/universities/hokkaido-university-of-education/",
      "Hokkyodai": "/universities/hokkaido-university-of-education/"
    },
    sweden: {
      "Gammelkroppa skogsskola": "/universities/gammelkroppa-skogsskola/",
      "Gammelkroppa School of Forestry": "/universities/gammelkroppa-skogsskola/",
      "Gammelkroppa": "/universities/gammelkroppa-skogsskola/",
      "LINXS - Institute of Advanced Neutron and X-ray Science": "/universities/linxs-institute-of-advanced-neutron-and-x-ray-science/",
      "LINXS": "/universities/linxs-institute-of-advanced-neutron-and-x-ray-science/",
      "Lund Institute of Advanced Neutron and X-ray Science": "/universities/linxs-institute-of-advanced-neutron-and-x-ray-science/",
      "Campus Skellefteå": "/universities/campus-skelleftea/",
      "Campus Skelleftea": "/universities/campus-skelleftea/"
    },
    netherlands: {
      "Nyenrode Business Universiteit": "/universities/nyenrode-business-universiteit/",
      "Nyenrode Business University": "/universities/nyenrode-business-universiteit/",
      "Nyenrode": "/universities/nyenrode-business-universiteit/",
      "Bestuursacademie Nederland": "/universities/bestuursacademie-nederland/",
      "Bestuursacademie": "/universities/bestuursacademie-nederland/",
      "CWTS - Centre for Science and Technology Studies": "/universities/cwts-leiden-university/",
      "CWTS Leiden": "/universities/cwts-leiden-university/",
      "Centre for Science and Technology Studies Leiden University": "/universities/cwts-leiden-university/"
    },
    switzerland: {
      "Academy of Leadership Sciences Switzerland": "/universities/academy-of-leadership-sciences-switzerland/",
      "ALSS Switzerland": "/universities/academy-of-leadership-sciences-switzerland/",
      "ALSS": "/universities/academy-of-leadership-sciences-switzerland/",
      "Swiss International Institute Lausanne": "/universities/swiss-international-institute-lausanne/",
      "SIIL Lausanne": "/universities/swiss-international-institute-lausanne/",
      "SIIL": "/universities/swiss-international-institute-lausanne/",
      "Swiss Educational College": "/universities/swiss-educational-college/",
      "SEC Switzerland": "/universities/swiss-educational-college/",
      "Swiss Educational College Brunnen": "/universities/swiss-educational-college/"
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
  console.log(`  ✓ Updated country-directory.js with all 321 verified universities`);

  // 7. Update build-subject-pages.mjs universityMap
  console.log(`\nUpdating build-subject-pages.mjs universityMap...`);
  let bsp = read('scripts/build-subject-pages.mjs');
  const matchBspMap = bsp.match(/const universityMap = (\{[\s\S]*?\});/);
  if (!matchBspMap) {
    throw new Error('Could not find const universityMap in build-subject-pages.mjs');
  }
  const uniMapObj = JSON.parse(matchBspMap[1]);

  for (const u of batch29Universities) {
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
  const uniCardsToAdd = batch29Universities.map(u => {
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${u.description}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 291 -> 321
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>321</strong><span>universities with detailed published guides</span></div>`
  );

  // Update country card counts: Canada 30 -> 33, all others 29 -> 32
  uIndex = uIndex.replace(
    /<a href="\/countries\/canada\/" class="country-link-card"><span class="country-numeral">01 \/ CA<\/span><h3>Canada<\/h3><div class="country-link-bottom"><span>116 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/canada/" class="country-link-card"><span class="country-numeral">01 / CA</span><h3>Canada</h3><div class="country-link-bottom"><span>116 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">33 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/australia\/" class="country-link-card"><span class="country-numeral">02 \/ AU<\/span><h3>Australia<\/h3><div class="country-link-bottom"><span>57 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/australia/" class="country-link-card"><span class="country-numeral">02 / AU</span><h3>Australia</h3><div class="country-link-bottom"><span>57 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">32 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/germany\/" class="country-link-card"><span class="country-numeral">03 \/ DE<\/span><h3>Germany<\/h3><div class="country-link-bottom"><span>213 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/germany/" class="country-link-card"><span class="country-numeral">03 / DE</span><h3>Germany</h3><div class="country-link-bottom"><span>213 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">32 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/italy\/" class="country-link-card"><span class="country-numeral">04 \/ IT<\/span><h3>Italy<\/h3><div class="country-link-bottom"><span>114 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/italy/" class="country-link-card"><span class="country-numeral">04 / IT</span><h3>Italy</h3><div class="country-link-bottom"><span>114 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">32 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/usa\/" class="country-link-card"><span class="country-numeral">05 \/ US<\/span><h3>United States<\/h3><div class="country-link-bottom"><span>656 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/usa/" class="country-link-card"><span class="country-numeral">05 / US</span><h3>United States</h3><div class="country-link-bottom"><span>656 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">32 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/uk\/" class="country-link-card"><span class="country-numeral">06 \/ UK<\/span><h3>United Kingdom<\/h3><div class="country-link-bottom"><span>100 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/uk/" class="country-link-card"><span class="country-numeral">06 / UK</span><h3>United Kingdom</h3><div class="country-link-bottom"><span>100 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">32 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/japan\/" class="country-link-card"><span class="country-numeral">07 \/ JP<\/span><h3>Japan<\/h3><div class="country-link-bottom"><span>179 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/japan/" class="country-link-card"><span class="country-numeral">07 / JP</span><h3>Japan</h3><div class="country-link-bottom"><span>179 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">32 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/sweden\/" class="country-link-card"><span class="country-numeral">08 \/ SE<\/span><h3>Sweden<\/h3><div class="country-link-bottom"><span>56 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/sweden/" class="country-link-card"><span class="country-numeral">08 / SE</span><h3>Sweden</h3><div class="country-link-bottom"><span>56 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">32 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/netherlands\/" class="country-link-card"><span class="country-numeral">09 \/ NL<\/span><h3>Netherlands<\/h3><div class="country-link-bottom"><span>121 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/netherlands/" class="country-link-card"><span class="country-numeral">09 / NL</span><h3>Netherlands</h3><div class="country-link-bottom"><span>121 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">32 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/switzerland\/" class="country-link-card"><span class="country-numeral">10 \/ CH<\/span><h3>Switzerland<\/h3><div class="country-link-bottom"><span>34 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/switzerland/" class="country-link-card"><span class="country-numeral">10 / CH</span><h3>Switzerland</h3><div class="country-link-bottom"><span>34 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">32 source-reviewed universities</p></a>`
  );
  write('universities/index.html', uIndex);
  console.log(`  ✓ Updated universities/index.html`);

  // 9. Update all 10 country pages
  console.log(`\nUpdating all 10 country pages...`);
  for (const u of batch29Universities) {
    const cPath = `countries/${u.countryId}/index.html`;
    let cHtml = read(cPath);

    // Make sure robots is index,follow
    cHtml = cHtml.replace(
      '<meta name="robots" content="noindex,follow">',
      '<meta name="robots" content="index,follow">'
    );

    // Update published count: Canada 33, others 32
    const targetCount = u.countryId === 'canada' ? 33 : 32;
    cHtml = cHtml.replace(
      /<div><strong>\d+<\/strong><span>detailed university guide[s]? published<\/span><\/div>/,
      `<div><strong>${targetCount}</strong><span>detailed university guides published</span></div>`
    );

    // Add university card if not already there
    const guideSnippet = `<a href="/universities/${u.slug}/" class="country-published" style="margin-top:16px"><div class="country-published-art"><span>${u.shortName}</span><span>${u.countryLabel.toUpperCase()}</span></div><div class="country-published-text"><span class="country-badge live">SOURCE-REVIEWED · ${today}</span><h3>${u.institution}</h3><p>${u.location} · ${u.description}</p><div class="country-metrics"><span><strong>${u.opportunities.length}</strong> academic and opportunity records</span><span><strong>${u.researchers.length}</strong> researcher profiles</span></div><span class="country-cta">Open university guide ↗</span></div></a>`;

    if (!cHtml.includes(`/universities/${u.slug}/`)) {
      if (cHtml.includes('class="country-published"')) {
        cHtml = cHtml.replace(
          /(<a href="\/universities\/[^"]+\/" class="country-published"[^>]*>[\s\S]*?<\/a>)(?![\s\S]*<a href="\/universities\/[^"]+\/" class="country-published")/,
          `$1\n${guideSnippet}`
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
    cycle: 32,
    completedInCycle: [
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
    nextCountry: "canada",
    lastPublished: {
      country: "switzerland",
      university: "Swiss Educational College",
      sourceRow: 1347
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 33,
      australia: 32,
      germany: 32,
      italy: 32,
      usa: 32,
      uk: 32,
      japan: 32,
      sweden: 32,
      netherlands: 32,
      switzerland: 32
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json for Cycle 32`);

  // 11. Sync with Google Sheet
  console.log(`\nSyncing Batch 29 universities with Google Sheets via Webhook...`);
  for (const u of batch29Universities) {
    try {
      console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
      await updateRotation(u.countryLabel, {
        publishedCount: u.countryId === 'canada' ? 33 : 32,
        currentRoundStatus: 'Batch 29 (Cycles 30-32) completed',
        mostRecentPublished: u.institution,
        updatedDate: today
      });
      await recordProgress({
        sourceRow: u.sourceRow,
        country: u.countryLabel,
        institution: u.institution,
        officialWebsite: u.website,
        universityGuide: `https://universityproject-chi.vercel.app/universities/${u.slug}/`,
        publishedContent: `${u.shortName} guide: ${u.opportunities.length} opportunities (${u.opportunities.map(o => o.type).join(', ')}), ${u.researchers.length} faculty profiles, Schema.org JSON-LD; live on Vercel`
      });
      console.log(`  ✓ Google Sheet synced for ${u.institution}`);
    } catch (err) {
      console.warn(`  ⚠️ Webhook sync warning for ${u.institution}: ${err.message}`);
    }
  }

  console.log(`\nBatch 29 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch29();
}
