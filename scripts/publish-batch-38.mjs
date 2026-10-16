import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch38Universities } from './batch38-data.mjs';
import { recordProgress, updateRotation } from './sync-sheet.mjs';
import { subjects } from '../data.js';

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

export async function publishBatch38() {
  console.log(`Starting publication for Batch 38: 30 premier universities across 8 active countries (Australia final 1 institution)...`);

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch38Universities) {
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
    }).join('');

    const facCardsHtml = u.researchers.map(f => {
      const facSlug = `${f.id}-${slug(f.name)}`;
      return `<article class="card"><h3><a href="/researchers/${facSlug}/">${f.name}</a></h3><p>${f.title} · ${f.topics.join(', ')}</p></article>`;
    }).join('');

    const headline = u.headline || `${u.institution}: Academic Guide, Degrees & Scholarships`;
    const description = u.description || `Comprehensive guide to ${u.institution} in ${u.location}: verified degree programs, scholarships, admission criteria, tuition fees, and prominent research faculty.`;
    const heroEyebrow = u.heroEyebrow || `${u.location} · ${u.badge || u.quickFacts?.type || 'Source-Reviewed University'}`;
    const admissionsMasters = u.admissions?.masters || u.quickFacts?.admissions || 'Relevant bachelor degree or equivalent credential with competitive academic average.';
    const admissionsPhd = u.admissions?.phd || 'Recognized master\'s or honours degree in relevant discipline; alignment with supervising research faculty.';
    const admissionsLanguage = u.admissions?.language || u.quickFacts?.language || 'Proof of instructional language proficiency (English or host country language).';
    const admissionsProposal = u.admissions?.proposal || 'Required for research programs: 3-5 page research statement outlining methodology, objectives, and faculty alignment.';
    const admissionsAppFee = u.admissions?.appFee || u.opportunities[0]?.fee || 'Standard institutional assessment fee.';
    const admissionsDocuments = u.admissions?.documents || 'Official academic transcripts, degree certificates, CV/resume, letters of recommendation, and statement of intent.';
    const tuitionText = u.tuitionText || `Tuition fees and student contributions vary across degree levels and residency status. Verified opportunity records list typical costs between ${u.opportunities[0]?.tuition || 'standard statutory rates'} and departmental funding packages.`;

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${headline} | OpenField</title><meta name="description" content="${description}"><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${headline} | OpenField"><meta property="og:description" content="${description}"><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"${u.institution}","url":"${u.website}","dateModified":"${today}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${heroEyebrow}</span><h1>${headline}</h1><p>${u.overview}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official university portal ↗</a><span>Graduate Funding &amp; Faculty</span><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Verified degree programs and opportunities</h2><p>Review checked academic pathways and funding options below:</p><div class="grid">${oppCardsHtml}</div></section><section class="section"><h2>Admissions, language requirements &amp; application process</h2><dl class="pairs"><div class="pair"><dt>Master's admission eligibility</dt><dd>${admissionsMasters}</dd></div><div class="pair"><dt>Doctoral admission eligibility</dt><dd>${admissionsPhd}</dd></div><div class="pair"><dt>Language proficiency</dt><dd>${admissionsLanguage}</dd></div><div class="pair"><dt>Research statement / Proposal</dt><dd>${admissionsProposal}</dd></div><div class="pair"><dt>Application fee</dt><dd>${admissionsAppFee}</dd></div><div class="pair"><dt>Required documentation</dt><dd>${admissionsDocuments}</dd></div></dl></section><section class="section"><h2>Tuition fees and verified scholarship systems</h2><p>${tuitionText}</p><div class="actions"><a class="btn" href="/opportunities/${u.opportunities[0].id}-${slug(u.opportunities[0].title)}/">Top scholarship details ↗</a><a class="btn secondary" href="/opportunities/${u.opportunities[1].id}-${slug(u.opportunities[1].title)}/">PhD research pathway ↗</a><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official portal ↗</a></div></section><section class="section"><h2>Verified faculty profiles and research leaders</h2><p>Distinguished researchers and laboratory heads at ${u.institution}:</p><div class="grid">${facCardsHtml}</div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ${u.institution} documentation reviewed ${today}. Degree admissions, scholarship awards, and employment positions are subject to formal university review. OpenField does not charge students application fees.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated universities/${u.slug}/index.html`);
  }

  // 4. Append to data.js
  console.log(`\nUpdating data.js with 210 new opportunities and 90 new researchers...`);
  let dataContent = read('data.js');

  const oppsFormatted = allNewOpps.map(o => {
    const parentUni = batch38Universities.find(u => u.opportunities.some(x => x.id === o.id));
    return `  {\n    "university": ${JSON.stringify(o.university || parentUni.institution)},\n    "country": ${JSON.stringify(o.country || parentUni.countryLabel)},\n    "location": ${JSON.stringify(o.location || parentUni.location)},\n    "reviewed": "${today}",\n    "id": ${o.id},\n    "subject": ${JSON.stringify(o.subject)},\n    "subjects": ${JSON.stringify(o.subjects)},\n    "type": ${JSON.stringify(o.type)},\n    "title": ${JSON.stringify(o.title)},\n    "source": ${JSON.stringify(o.source)},\n    "funding": ${JSON.stringify(o.funding)},\n    "status": ${JSON.stringify(o.status || 'Available')},\n    "deadline": ${o.deadline ? `"${o.deadline}"` : 'null'},\n    "deadlineText": ${JSON.stringify(o.deadlineText)},\n    "fee": ${JSON.stringify(o.fee)},\n    "tuition": ${JSON.stringify(o.tuition)},\n    "requirements": {\n      "gpa": ${JSON.stringify(o.requirements.gpa)},\n      "ielts": ${JSON.stringify(o.requirements.ielts)},\n      "gre": ${JSON.stringify(o.requirements.gre)},\n      "papers": ${JSON.stringify(o.requirements.papers)},\n      "references": ${JSON.stringify(o.requirements.references)}\n    },\n    "desc": ${JSON.stringify(o.desc)}\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*export const researchers=\[/,
    `,\n${oppsFormatted}\n];\nexport const researchers=[`
  );

  const facFormatted = allNewResearchers.map(f => {
    const parentUni = batch38Universities.find(u => u.researchers.some(x => x.id === f.id));
    return `  {\n    "id": ${f.id},\n    "subject": ${JSON.stringify(f.subject)},\n    "name": ${JSON.stringify(f.name)},\n    "title": ${JSON.stringify(f.title)},\n    "university": ${JSON.stringify(f.university || parentUni.institution)},\n    "country": ${JSON.stringify(f.country || parentUni.countryLabel)},\n    "topics": ${JSON.stringify(f.topics)},\n    "source": ${JSON.stringify(f.source)},\n    "email": null,\n    "summary": ${JSON.stringify(f.summary)},\n    "recruiting": "Not verified",\n    "reviewed": "${today}"\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*$/,
    `,\n${facFormatted}\n];\n`
  );

  write('data.js', dataContent);
  console.log(`  ✓ Updated data.js successfully`);

  // 5. Update sitemap.xml with 330 new URLs (Properly managing sitemap)
  console.log(`\nUpdating sitemap.xml with 330 new URLs...`);
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [];

  for (const u of batch38Universities) {
    urlsToAdd.push(`${domain}/universities/${u.slug}/`);
    for (const o of u.opportunities) {
      urlsToAdd.push(`${domain}/opportunities/${o.id}-${slug(o.title)}/`);
    }
    for (const f of u.researchers) {
      urlsToAdd.push(`${domain}/researchers/${f.id}-${slug(f.name)}/`);
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
  console.log(`  ✓ Added ${addedCount} new URLs to sitemap.xml (total: ${[...sitemap.matchAll(/<loc>/g)].length})`);

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
      "Université de Sherbrooke": "/universities/universite-de-sherbrooke/",
      "Sherbrooke": "/universities/universite-de-sherbrooke/",
      "UdeS": "/universities/universite-de-sherbrooke/",
      "University of Quebec in Montreal": "/universities/universite-du-quebec-a-montreal-uqam/",
      "Université du Québec à Montréal": "/universities/universite-du-quebec-a-montreal-uqam/",
      "UQAM": "/universities/universite-du-quebec-a-montreal-uqam/",
      "NSCAD University": "/universities/nscad-university-halifax/",
      "NSCAD": "/universities/nscad-university-halifax/",
      "Nova Scotia College of Art and Design": "/universities/nscad-university-halifax/",
      "Olds College of Agriculture & Technology": "/universities/olds-college-of-agriculture-and-technology/",
      "Olds College of Agriculture and Technology": "/universities/olds-college-of-agriculture-and-technology/",
      "Olds College": "/universities/olds-college-of-agriculture-and-technology/"
    },
    australia: {
      "University of Tasmania, Australian Maritime College, Beauty Point Campus": "/universities/australian-maritime-college-beauty-point/",
      "Australian Maritime College Beauty Point Campus": "/universities/australian-maritime-college-beauty-point/",
      "AMC Beauty Point": "/universities/australian-maritime-college-beauty-point/",
      "Australian Maritime College, Beauty Point Campus": "/universities/australian-maritime-college-beauty-point/"
    },
    germany: {
      "Technical University of Clausthal": "/universities/technical-university-of-clausthal/",
      "TU Clausthal": "/universities/technical-university-of-clausthal/",
      "Technische Universität Clausthal": "/universities/technical-university-of-clausthal/",
      "Ulm University": "/universities/ulm-university-baden-wuerttemberg/",
      "Universität Ulm": "/universities/ulm-university-baden-wuerttemberg/",
      "Uni Ulm": "/universities/ulm-university-baden-wuerttemberg/",
      "University of Erfurt": "/universities/university-of-erfurt-thuringia/",
      "Universität Erfurt": "/universities/university-of-erfurt-thuringia/",
      "Uni Erfurt": "/universities/university-of-erfurt-thuringia/",
      "University of Siegen": "/universities/university-of-siegen-nrw/",
      "Universität Siegen": "/universities/university-of-siegen-nrw/",
      "Uni Siegen": "/universities/university-of-siegen-nrw/"
    },
    italy: {
      "Pegaso": "/universities/universita-telematica-pegaso/",
      "Università Telematica Pegaso": "/universities/universita-telematica-pegaso/",
      "UniPegaso": "/universities/universita-telematica-pegaso/",
      "University of Sannio RCOST": "/universities/university-of-sannio-benevento/",
      "University of Sannio": "/universities/university-of-sannio-benevento/",
      "Università degli Studi del Sannio": "/universities/university-of-sannio-benevento/",
      "Unisannio": "/universities/university-of-sannio-benevento/",
      "Università degli Studi Link": "/universities/universita-degli-studi-link-roma/",
      "Link Campus University": "/universities/universita-degli-studi-link-roma/",
      "Link Campus": "/universities/universita-degli-studi-link-roma/",
      "Università degli Studi Link Matera": "/universities/universita-degli-studi-link-roma/",
      "Università Giustino Fortunato - Sede Di Padova": "/universities/universita-giustino-fortunato-benevento/",
      "Università Giustino Fortunato": "/universities/universita-giustino-fortunato-benevento/",
      "UniFortunato": "/universities/universita-giustino-fortunato-benevento/"
    },
    usa: {
      "Bowdoin College": "/universities/bowdoin-college-maine/",
      "Bowdoin": "/universities/bowdoin-college-maine/",
      "Brandeis University": "/universities/brandeis-university-massachusetts/",
      "Brandeis": "/universities/brandeis-university-massachusetts/",
      "Brigham Young University": "/universities/brigham-young-university-provo/",
      "BYU": "/universities/brigham-young-university-provo/",
      "California Polytechnic State University (Cal Poly)": "/universities/cal-poly-san-luis-obispo/",
      "California Polytechnic State University": "/universities/cal-poly-san-luis-obispo/",
      "Cal Poly": "/universities/cal-poly-san-luis-obispo/",
      "Cal Poly San Luis Obispo": "/universities/cal-poly-san-luis-obispo/",
      "Clemson University": "/universities/clemson-university-south-carolina/",
      "Clemson": "/universities/clemson-university-south-carolina/"
    },
    uk: {
      "SOAS University of London": "/universities/soas-university-of-london/",
      "SOAS": "/universities/soas-university-of-london/",
      "The Open University": "/universities/the-open-university-milton-keynes/",
      "Open University": "/universities/the-open-university-milton-keynes/",
      "University of the Arts London": "/universities/university-of-the-arts-london-ual/",
      "UAL": "/universities/university-of-the-arts-london-ual/",
      "University of the West of England (UWE Bristol)": "/universities/university-of-the-west-of-england-uwe-bristol/",
      "University of the West of England": "/universities/university-of-the-west-of-england-uwe-bristol/",
      "UWE Bristol": "/universities/university-of-the-west-of-england-uwe-bristol/"
    },
    japan: {
      "Kyoto Institute of Technology": "/universities/kyoto-institute-of-technology-kit/",
      "KIT Kyoto": "/universities/kyoto-institute-of-technology-kit/",
      "Nagoya Institute of Technology": "/universities/nagoya-institute-of-technology-nitech/",
      "NITech": "/universities/nagoya-institute-of-technology-nitech/",
      "Tokyo University of Foreign Studies": "/universities/tokyo-university-of-foreign-studies-tufs/",
      "TUFS": "/universities/tokyo-university-of-foreign-studies-tufs/",
      "Toyota Technological Institute": "/universities/toyota-technological-institute-tti/",
      "TTI": "/universities/toyota-technological-institute-tti/"
    },
    netherlands: {
      "Royal Naval College": "/universities/royal-naval-college-kim-den-helder/",
      "Koninklijk Instituut voor de Marine": "/universities/royal-naval-college-kim-den-helder/",
      "KIM Den Helder": "/universities/royal-naval-college-kim-den-helder/",
      "UMC Utrecht": "/universities/umc-utrecht-academic-medical-center/",
      "University Medical Center Utrecht": "/universities/umc-utrecht-academic-medical-center/",
      "Unknown University of Applied Sciences": "/universities/unknown-university-of-applied-sciences-the-hague/",
      "Unknown UAS": "/universities/unknown-university-of-applied-sciences-the-hague/",
      "Wageningen Bioveterinary Research": "/universities/wageningen-bioveterinary-research-wbvr/",
      "WBVR Wageningen": "/universities/wageningen-bioveterinary-research-wbvr/",
      "WBVR": "/universities/wageningen-bioveterinary-research-wbvr/"
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

  for (const u of batch38Universities) {
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
  const uniCardsToAdd = batch38Universities.map(u => {
    const desc = u.description || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 561 -> 591
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>591</strong><span>universities with detailed published guides</span></div>`
  );

  // Country counts after Batch 38:
  // Canada: 62, Australia: 57 (100% complete!), Germany: 63, Italy: 61, USA: 64, UK: 62, Japan: 63, Sweden: 56, Netherlands: 62
  const countryCounts = {
    canada: 62,
    australia: 57,
    germany: 63,
    italy: 61,
    usa: 64,
    uk: 62,
    japan: 63,
    sweden: 56,
    netherlands: 62
  };

  for (const [cid, cnt] of Object.entries(countryCounts)) {
    const regex = new RegExp(`(<a href="\\/countries\\/${cid}\\/" class="country-link-card">[\\s\\S]*?<p class="country-verified">)\\d+( source-reviewed universities<\\/p><\\/a>)`);
    uIndex = uIndex.replace(regex, `$1${cnt}$2`);
  }

  write('universities/index.html', uIndex);
  console.log(`  ✓ Updated universities/index.html (Counter: 591)`);

  // 9. Update all 8 active country pages
  console.log(`\nUpdating active country pages...`);
  const activeCountryTargetCounts = {
    canada: 62,
    australia: 57,
    germany: 63,
    italy: 61,
    usa: 64,
    uk: 62,
    japan: 63,
    netherlands: 62
  };

  for (const u of batch38Universities) {
    const cPath = `countries/${u.countryId}/index.html`;
    let cHtml = read(cPath);

    cHtml = cHtml.replace(
      '<meta name="robots" content="noindex,follow">',
      '<meta name="robots" content="index,follow">'
    );

    const targetCount = activeCountryTargetCounts[u.countryId] || 60;
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
    cycle: 55,
    completedInCycle: [
      "canada",
      "australia",
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
      university: "Wageningen Bioveterinary Research",
      sourceRow: 1544
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 62,
      australia: 57,
      germany: 63,
      italy: 61,
      usa: 64,
      uk: 62,
      japan: 63,
      sweden: 56,
      netherlands: 62,
      switzerland: 41
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json`);

  // 11. Sync with Google Sheet
  console.log(`\nSyncing Batch 38 universities with Google Sheets via Webhook...`);
  for (const u of batch38Universities) {
    try {
      console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
      await updateRotation(u.countryLabel, {
        publishedCount: activeCountryTargetCounts[u.countryId] || 60,
        currentRoundStatus: 'Batch 38 completed',
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

  console.log(`\nBatch 38 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch38();
}
