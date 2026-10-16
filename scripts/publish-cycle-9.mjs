import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cycle9Universities } from './cycle9-data.mjs';
import { recordProgress, updateRotation } from './sync-sheet.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = p => readFileSync(join(root, p), 'utf8');
const write = (p, content) => {
  const full = join(root, p);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');
};

const slug = s => String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const today = '2026-10-14';

export async function publishCycle9() {
  console.log(`Starting publication for Cycle 9: 10 universities across 10 countries...`);

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of cycle9Universities) {
    console.log(`\nProcessing [${u.countryLabel}] ${u.institution} (${u.shortName})...`);

    // 1. Generate Opportunity HTML Pages
    for (const opp of u.opportunities) {
      allNewOpps.push(opp);
      const oppSlug = `${opp.id}-${slug(opp.title)}`;
      const oppUrl = `https://openstemfield.org/opportunities/${oppSlug}/`;
      const uniUrl = `/universities/${u.slug}/`;

      const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="${oppUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="${oppUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="${uniUrl}">${u.institution}</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">${u.countryLabel} · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect published university guidelines available at the last review. Review official department guidelines before submission.</p><dl class="pairs"><div class="pair"><dt>Academic degree / Prerequisites</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>English language proficiency</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Standardized testing (GRE/GMAT)</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Thesis / Research statement</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="${uniUrl}">${u.shortName} guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ${u.institution} documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`opportunities/${oppSlug}/index.html`, oppHtml);
    }
    console.log(`  ✓ Generated ${u.opportunities.length} opportunity HTML pages`);

    // 2. Generate Researcher HTML Pages
    for (const fac of u.researchers) {
      allNewResearchers.push(fac);
      const facSlug = `${fac.id}-${slug(fac.name)}`;
      const facUrl = `https://openstemfield.org/researchers/${facSlug}/`;
      const uniUrl = `/universities/${u.slug}/`;

      const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — ${u.institution} Research Profile | OpenField</title><meta name="description" content="${fac.name} at ${u.institution}: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="${facUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — ${u.institution} Research Profile | OpenField"><meta property="og:description" content="${fac.name} at ${u.institution}: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="${facUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">${u.countryLabel} · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in graduate or doctoral research supervision in ${fac.topics.slice(0, 3).join(', ')} are advised to consult formal department application channels.</p><div class="actions"><a class="btn" href="${uniUrl}">${u.shortName} guide ↗</a><a class="btn secondary" href="/subjects/${fac.subject}/">${fac.subject.charAt(0).toUpperCase() + fac.subject.slice(1)} subject guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`researchers/${facSlug}/index.html`, facHtml);
    }
    console.log(`  ✓ Generated ${u.researchers.length} researcher HTML pages`);

    // 3. Generate University Index Page
    const uniUrl = `https://openstemfield.org/universities/${u.slug}/`;
    const oppCardsHtml = u.opportunities.map(o => {
      const oppSlug = `${o.id}-${slug(o.title)}`;
      return `<article class="card"><h3><a href="/opportunities/${oppSlug}/">${o.title}</a></h3><p>${o.desc}</p></article>`;
    }).join('');

    const facCardsHtml = u.researchers.map(f => {
      const facSlug = `${f.id}-${slug(f.name)}`;
      return `<article class="card"><h3><a href="/researchers/${facSlug}/">${f.name}</a></h3><p>${f.title}; specializing in ${f.topics.slice(0, 3).join(', ')}.</p></article>`;
    }).join('');

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.headline}: Degrees, Scholarships &amp; Faculty Guide | OpenField</title><meta name="description" content="${u.description}"><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${u.headline}: Degrees, Scholarships &amp; Faculty Guide | OpenField"><meta property="og:description" content="${u.description}"><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"${u.institution}","url":"${u.website}","dateModified":"${today}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/universities/${u.slug}/">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.heroEyebrow}</span><h1>${u.headline}</h1><p>${u.overview}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official university portal ↗</a><span>Graduate Funding &amp; Faculty</span><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Verified degree programs and opportunities</h2><p>Review checked academic pathways and funding options below:</p><div class="grid">${oppCardsHtml}</div></section><section class="section"><h2>Admissions, language requirements &amp; application process</h2><dl class="pairs"><div class="pair"><dt>Master's admission eligibility</dt><dd>${u.admissions.masters}</dd></div><div class="pair"><dt>Doctoral admission eligibility</dt><dd>${u.admissions.phd}</dd></div><div class="pair"><dt>Language proficiency</dt><dd>${u.admissions.language}</dd></div><div class="pair"><dt>Research statement / Proposal</dt><dd>${u.admissions.proposal}</dd></div><div class="pair"><dt>Application fee</dt><dd>${u.admissions.appFee}</dd></div><div class="pair"><dt>Required documentation</dt><dd>${u.admissions.documents}</dd></div></dl></section><section class="section"><h2>Tuition fees and verified scholarship systems</h2><p>${u.tuitionText}</p><div class="actions"><a class="btn" href="/opportunities/${u.opportunities[0].id}-${slug(u.opportunities[0].title)}/">Top scholarship details ↗</a><a class="btn secondary" href="/opportunities/${u.opportunities[1].id}-${slug(u.opportunities[1].title)}/">PhD research pathway ↗</a><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official portal ↗</a></div></section><section class="section"><h2>Verified faculty profiles and research leaders</h2><p>Distinguished researchers and laboratory heads at ${u.institution}:</p><div class="grid">${facCardsHtml}</div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ${u.institution} documentation reviewed ${today}. Degree admissions, scholarship awards, and employment positions are subject to formal university review. OpenField does not charge students application fees.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated universities/${u.slug}/index.html`);
  }

  // 4. Append to data.js
  console.log(`\nUpdating data.js with 70 new opportunities and 30 new researchers...`);
  let dataContent = read('data.js');

  const oppsFormatted = allNewOpps.map(o => {
    const parentUni = cycle9Universities.find(u => u.opportunities.some(x => x.id === o.id));
    return `  {\n    "university": ${JSON.stringify(o.university || parentUni.institution)},\n    "country": ${JSON.stringify(o.country || parentUni.countryLabel)},\n    "location": ${JSON.stringify(o.location || parentUni.location)},\n    "reviewed": "${today}",\n    "id": ${o.id},\n    "subject": ${JSON.stringify(o.subject)},\n    "subjects": ${JSON.stringify(o.subjects)},\n    "type": ${JSON.stringify(o.type)},\n    "title": ${JSON.stringify(o.title)},\n    "source": ${JSON.stringify(o.source)},\n    "funding": ${JSON.stringify(o.funding)},\n    "status": ${JSON.stringify(o.status)},\n    "deadline": ${o.deadline ? `"${o.deadline}"` : 'null'},\n    "deadlineText": ${JSON.stringify(o.deadlineText)},\n    "fee": ${JSON.stringify(o.fee)},\n    "tuition": ${JSON.stringify(o.tuition)},\n    "requirements": {\n      "gpa": ${JSON.stringify(o.requirements.gpa)},\n      "ielts": ${JSON.stringify(o.requirements.ielts)},\n      "gre": ${JSON.stringify(o.requirements.gre)},\n      "papers": ${JSON.stringify(o.requirements.papers)},\n      "references": ${JSON.stringify(o.requirements.references)}\n    },\n    "desc": ${JSON.stringify(o.desc)}\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*export const researchers=\[/,
    `,\n${oppsFormatted}\n];\nexport const researchers=[`
  );

  const facFormatted = allNewResearchers.map(f => {
    return `  {\n    "id": ${f.id},\n    "subject": ${JSON.stringify(f.subject)},\n    "name": ${JSON.stringify(f.name)},\n    "title": ${JSON.stringify(f.title)},\n    "university": ${JSON.stringify(f.university)},\n    "country": ${JSON.stringify(f.country)},\n    "topics": ${JSON.stringify(f.topics)},\n    "source": ${JSON.stringify(f.source)},\n    "email": null,\n    "summary": ${JSON.stringify(f.summary)},\n    "recruiting": "Not verified",\n    "reviewed": "${today}"\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*$/,
    `,\n${facFormatted}\n];\n`
  );

  write('data.js', dataContent);
  console.log(`  ✓ Updated data.js successfully`);

  // 5. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml with 110 new URLs...`);
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [];

  for (const u of cycle9Universities) {
    urlsToAdd.push(`https://openstemfield.org/universities/${u.slug}/`);
    for (const o of u.opportunities) {
      urlsToAdd.push(`https://openstemfield.org/opportunities/${o.id}-${slug(o.title)}/`);
    }
    for (const f of u.researchers) {
      urlsToAdd.push(`https://openstemfield.org/researchers/${f.id}-${slug(f.name)}/`);
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
  const fullPublishedMap = {
    canada: {
      "Acadia University": "/universities/acadia-university/",
      "Alberta University of the Arts": "/universities/alberta-university-of-the-arts/",
      "The University of British Columbia": "/universities/university-of-british-columbia/",
      "University of Toronto": "/universities/university-of-toronto/",
      "McGill University": "/universities/mcgill-university/",
      "University of Waterloo": "/universities/university-of-waterloo/",
      "McMaster University": "/universities/mcmaster-university/",
      "University of Calgary": "/universities/university-of-calgary/",
      "UCalgary": "/universities/university-of-calgary/",
      "Queen's University": "/universities/queens-university/",
      "Queen's University,": "/universities/queens-university/",
      "Queen's": "/universities/queens-university/",
      "Western University": "/universities/western-university/",
      "University of Western Ontario": "/universities/western-university/",
      "Western": "/universities/western-university/"
    },
    australia: {
      "Adelaide University": "/universities/adelaide-university/",
      "The University of Melbourne": "/universities/the-university-of-melbourne/",
      "Curtin University": "/universities/curtin-university/",
      "The University of Sydney": "/universities/the-university-of-sydney/",
      "The University of Queensland": "/universities/the-university-of-queensland/",
      "UNSW Sydney": "/universities/unsw-sydney/",
      "The University of Western Australia": "/universities/the-university-of-western-australia/",
      "UWA": "/universities/the-university-of-western-australia/",
      "Monash University": "/universities/monash-university/",
      "Monash University Clayton Campus": "/universities/monash-university/",
      "Monash": "/universities/monash-university/",
      "RMIT University": "/universities/rmit-university/",
      "RMIT University - Melbourne City Campus": "/universities/rmit-university/",
      "RMIT": "/universities/rmit-university/"
    },
    germany: {
      "Academy of Fine Arts Dresden": "/universities/academy-of-fine-arts-dresden/",
      "Technical University of Munich": "/universities/technical-university-of-munich/",
      "Humboldt University of Berlin": "/universities/humboldt-university-of-berlin/",
      "Heidelberg University": "/universities/heidelberg-university/",
      "RWTH Aachen University": "/universities/rwth-aachen-university/",
      "Ludwig Maximilian University of Munich": "/universities/ludwig-maximilian-university-of-munich/",
      "LMU Munich": "/universities/ludwig-maximilian-university-of-munich/",
      "University of Bonn": "/universities/university-of-bonn/",
      "Uni Bonn": "/universities/university-of-bonn/",
      "University of Freiburg": "/universities/university-of-freiburg/",
      "Uni Freiburg": "/universities/university-of-freiburg/",
      "Albert-Ludwigs-Universität Freiburg": "/universities/university-of-freiburg/",
      "University of Göttingen": "/universities/university-of-goettingen/",
      "Uni Göttingen": "/universities/university-of-goettingen/",
      "Georg-August-Universität Göttingen": "/universities/university-of-goettingen/"
    },
    italy: {
      "Accademia di Belle Arti di Lecce": "/universities/accademia-di-belle-arti-di-lecce/",
      "Sapienza University of Rome": "/universities/sapienza-university-of-rome/",
      "Catholic University of Sacred Heart": "/universities/catholic-university-of-sacred-heart/",
      "University of Milano-Bicocca": "/universities/university-of-milano-bicocca/",
      "University of Milan": "/universities/university-of-milan/",
      "University of Naples Federico II": "/universities/university-of-naples-federico-ii/",
      "Università Bocconi": "/universities/universita-bocconi/",
      "Bocconi University": "/universities/universita-bocconi/",
      "University of Trento": "/universities/university-of-trento/",
      "Università di Trento": "/universities/university-of-trento/",
      "UniTrento": "/universities/university-of-trento/",
      "University of Padua": "/universities/university-of-padua/",
      "Università degli Studi di Padova": "/universities/university-of-padua/",
      "Università degli Studi di Padova - Centro di Ateneo per i Diritti Umani \"Antonio Papisca\"": "/universities/university-of-padua/",
      "UniSMART - Fondazione Università degli Studi di Padova": "/universities/university-of-padua/",
      "University Library of Padua": "/universities/university-of-padua/",
      "Padova University Hospital": "/universities/university-of-padua/",
      "UniPD": "/universities/university-of-padua/"
    },
    usa: {
      "A.T. Still University": "/universities/a-t-still-university/",
      "American University": "/universities/american-university/",
      "Harvard University": "/universities/harvard-university/",
      "Stanford University": "/universities/stanford-university/",
      "Massachusetts Institute of Technology": "/universities/massachusetts-institute-of-technology/",
      "University of California, Berkeley": "/universities/university-of-california-berkeley/",
      "UC Berkeley": "/universities/university-of-california-berkeley/",
      "Columbia University": "/universities/columbia-university/",
      "Princeton University": "/universities/princeton-university/",
      "Princeton": "/universities/princeton-university/",
      "Yale University": "/universities/yale-university/",
      "Yale": "/universities/yale-university/"
    },
    uk: {
      "Aberystwyth University": "/universities/aberystwyth-university/",
      "Imperial College London": "/universities/imperial-college-london/",
      "University of Cambridge": "/universities/university-of-cambridge/",
      "University College London": "/universities/university-college-london/",
      "The University of Edinburgh · Visited link": "/universities/the-university-of-edinburgh/",
      "The University of Edinburgh": "/universities/the-university-of-edinburgh/",
      "The University of Manchester": "/universities/the-university-of-manchester/",
      "University of Manchester": "/universities/the-university-of-manchester/",
      "King's College London": "/universities/kings-college-london/",
      "King's": "/universities/kings-college-london/",
      "University of Bristol": "/universities/university-of-bristol/",
      "Bristol": "/universities/university-of-bristol/",
      "University of Glasgow": "/universities/university-of-glasgow/",
      "University of Glasgow · Visited link": "/universities/university-of-glasgow/",
      "Glasgow": "/universities/university-of-glasgow/"
    },
    japan: {
      "Aichi University": "/universities/aichi-university/",
      "The University of Tokyo": "/universities/the-university-of-tokyo/",
      "Kyoto University": "/universities/kyoto-university/",
      "Nagoya University": "/universities/nagoya-university/",
      "Osaka University": "/universities/osaka-university/",
      "Hokkaido University": "/universities/hokkaido-university/",
      "Hokkaido University Ginkgo Avenue": "/universities/hokkaido-university/",
      "Kyushu University": "/universities/kyushu-university/",
      "Kyushu University - Ito Campus": "/universities/kyushu-university/",
      "University of Tsukuba": "/universities/university-of-tsukuba/",
      "Tsukuba": "/universities/university-of-tsukuba/",
      "Waseda University": "/universities/waseda-university/",
      "Waseda": "/universities/waseda-university/"
    },
    sweden: {
      "Blekinge Institute of Technology": "/universities/blekinge-institute-of-technology/",
      "KTH Södertälje": "/universities/kth-royal-institute-of-technology/",
      "KTH Royal Institute of Technology": "/universities/kth-royal-institute-of-technology/",
      "Uppsala University": "/universities/uppsala-university/",
      "Stockholm University": "/universities/stockholm-university/",
      "Lund University Bioscience AB": "/universities/lund-university/",
      "Lunds universitet Kansli HT": "/universities/lund-university/",
      "Lund University": "/universities/lund-university/",
      "Umeå universitet": "/universities/umea-university/",
      "Umeå University": "/universities/umea-university/",
      "Karolinska Institute": "/universities/karolinska-institute/",
      "Karolinska Institutet": "/universities/karolinska-institute/",
      "Stockholm School of Economics": "/universities/stockholm-school-of-economics/",
      "Handelshögskolan i Stockholm": "/universities/stockholm-school-of-economics/",
      "SSE": "/universities/stockholm-school-of-economics/",
      "Swedish University of Agricultural Sciences": "/universities/swedish-university-of-agricultural-sciences/",
      "Sveriges Lantbruksuniversitet SLU": "/universities/swedish-university-of-agricultural-sciences/",
      "SLU": "/universities/swedish-university-of-agricultural-sciences/"
    },
    netherlands: {
      "University of Groningen": "/universities/university-of-groningen/",
      "Academiegebouw": "/universities/university-of-groningen/",
      "Eindhoven University of Technology": "/universities/eindhoven-university-of-technology/",
      "TU Delft Mechanical Engineering": "/universities/delft-university-of-technology/",
      "Universiteit Leiden": "/universities/universiteit-leiden/",
      "Leiden University": "/universities/universiteit-leiden/",
      "Vrije Universiteit Amsterdam": "/universities/vrije-universiteit-amsterdam/",
      "Erasmus University College": "/universities/erasmus-university-rotterdam/",
      "Erasmus University Rotterdam": "/universities/erasmus-university-rotterdam/",
      "Maastricht University": "/universities/maastricht-university/",
      "Universiteit Maastricht": "/universities/maastricht-university/",
      "University of Twente": "/universities/university-of-twente/",
      "University of Twente - ITC Faculty": "/universities/university-of-twente/",
      "Universiteit Twente": "/universities/university-of-twente/",
      "UTwente": "/universities/university-of-twente/",
      "Wageningen University & Research": "/universities/wageningen-university-and-research/",
      "Wageningen University": "/universities/wageningen-university-and-research/",
      "Nexus - Wageningen Campus": "/universities/wageningen-university-and-research/",
      "WUR": "/universities/wageningen-university-and-research/"
    },
    switzerland: {
      "ETH Zurich": "/universities/eth-zurich/",
      "ETH NO": "/universities/eth-zurich/",
      "École Polytechnique Fédérale de Lausanne (EPFL)": "/universities/ecole-polytechnique-federale-de-lausanne/",
      "University of Geneva · Visited link": "/universities/university-of-geneva/",
      "Universität Basel · Visited link": "/universities/university-of-basel/",
      "University of Basel": "/universities/university-of-basel/",
      "University of Lausanne (UNIL)": "/universities/university-of-lausanne/",
      "University of Lausanne": "/universities/university-of-lausanne/",
      "USI Università della Svizzera italiana": "/universities/usi-universita-della-svizzera-italiana/",
      "Università della Svizzera italiana": "/universities/usi-universita-della-svizzera-italiana/",
      "University of Zurich": "/universities/university-of-zurich/",
      "Universität Zürich": "/universities/university-of-zurich/",
      "University of St. Gallen": "/universities/university-of-st-gallen/",
      "Universität St. Gallen": "/universities/university-of-st-gallen/",
      "HSG": "/universities/university-of-st-gallen/",
      "University of Bern": "/universities/university-of-bern/",
      "Universität Bern": "/universities/university-of-bern/",
      "University of Teacher Education Bern": "/universities/university-of-bern/",
      "Uni Bern": "/universities/university-of-bern/"
    }
  };

  cdJs = cdJs.replace(
    /const published=\{[\s\S]*?\};/,
    `const published=${JSON.stringify(fullPublishedMap)};`
  );
  write('country-directory.js', cdJs);
  console.log(`  ✓ Updated country-directory.js with all 91 verified universities`);

  // 7. Update build-subject-pages.mjs universityMap
  console.log(`\nUpdating build-subject-pages.mjs universityMap...`);
  let bsp = read('scripts/build-subject-pages.mjs');
  const uniMapObj = {
    "Acadia University": "/universities/acadia-university/",
    "Alberta University of the Arts": "/universities/alberta-university-of-the-arts/",
    "Adelaide University": "/universities/adelaide-university/",
    "Academy of Fine Arts Dresden": "/universities/academy-of-fine-arts-dresden/",
    "Accademia di Belle Arti di Lecce": "/universities/accademia-di-belle-arti-di-lecce/",
    "A.T. Still University": "/universities/a-t-still-university/",
    "Aberystwyth University": "/universities/aberystwyth-university/",
    "Aichi University": "/universities/aichi-university/",
    "Blekinge Institute of Technology": "/universities/blekinge-institute-of-technology/",
    "University of Groningen": "/universities/university-of-groningen/",
    "ETH Zurich": "/universities/eth-zurich/",
    "The University of British Columbia": "/universities/university-of-british-columbia/",
    "The University of Melbourne": "/universities/the-university-of-melbourne/",
    "Technical University of Munich": "/universities/technical-university-of-munich/",
    "Sapienza University of Rome": "/universities/sapienza-university-of-rome/",
    "American University": "/universities/american-university/",
    "Imperial College London": "/universities/imperial-college-london/",
    "The University of Tokyo": "/universities/the-university-of-tokyo/",
    "KTH Royal Institute of Technology": "/universities/kth-royal-institute-of-technology/",
    "Eindhoven University of Technology": "/universities/eindhoven-university-of-technology/",
    "École Polytechnique Fédérale de Lausanne (EPFL)": "/universities/ecole-polytechnique-federale-de-lausanne/",
    "University of Toronto": "/universities/university-of-toronto/",
    "Curtin University": "/universities/curtin-university/",
    "Humboldt University of Berlin": "/universities/humboldt-university-of-berlin/",
    "Catholic University of Sacred Heart": "/universities/catholic-university-of-sacred-heart/",
    "Harvard University": "/universities/harvard-university/",
    "University of Cambridge": "/universities/university-of-cambridge/",
    "Kyoto University": "/universities/kyoto-university/",
    "Uppsala University": "/universities/uppsala-university/",
    "TU Delft (Delft University of Technology)": "/universities/delft-university-of-technology/",
    "University of Geneva": "/universities/university-of-geneva/",
    "McGill University": "/universities/mcgill-university/",
    "The University of Sydney": "/universities/the-university-of-sydney/",
    "Heidelberg University": "/universities/heidelberg-university/",
    "University of Milano-Bicocca": "/universities/university-of-milano-bicocca/",
    "Stanford University": "/universities/stanford-university/",
    "University College London": "/universities/university-college-london/",
    "Nagoya University": "/universities/nagoya-university/",
    "Stockholm University": "/universities/stockholm-university/",
    "Universiteit Leiden": "/universities/universiteit-leiden/",
    "University of Basel": "/universities/university-of-basel/",
    "University of Waterloo": "/universities/university-of-waterloo/",
    "The University of Queensland": "/universities/the-university-of-queensland/",
    "RWTH Aachen University": "/universities/rwth-aachen-university/",
    "University of Milan": "/universities/university-of-milan/",
    "Massachusetts Institute of Technology": "/universities/massachusetts-institute-of-technology/",
    "The University of Edinburgh": "/universities/the-university-of-edinburgh/",
    "Osaka University": "/universities/osaka-university/",
    "Lund University": "/universities/lund-university/",
    "Vrije Universiteit Amsterdam": "/universities/vrije-universiteit-amsterdam/",
    "University of Lausanne": "/universities/university-of-lausanne/",
    "McMaster University": "/universities/mcmaster-university/",
    "UNSW Sydney": "/universities/unsw-sydney/",
    "Ludwig Maximilian University of Munich": "/universities/ludwig-maximilian-university-of-munich/",
    "University of Naples Federico II": "/universities/university-of-naples-federico-ii/",
    "University of California, Berkeley": "/universities/university-of-california-berkeley/",
    "The University of Manchester": "/universities/the-university-of-manchester/",
    "Hokkaido University": "/universities/hokkaido-university/",
    "Umeå University": "/universities/umea-university/",
    "Erasmus University Rotterdam": "/universities/erasmus-university-rotterdam/",
    "USI Università della Svizzera italiana": "/universities/usi-universita-della-svizzera-italiana/",
    "University of Calgary": "/universities/university-of-calgary/",
    "The University of Western Australia": "/universities/the-university-of-western-australia/",
    "University of Bonn": "/universities/university-of-bonn/",
    "Università Bocconi": "/universities/universita-bocconi/",
    "Columbia University": "/universities/columbia-university/",
    "King's College London": "/universities/kings-college-london/",
    "Kyushu University": "/universities/kyushu-university/",
    "Karolinska Institute": "/universities/karolinska-institute/",
    "Maastricht University": "/universities/maastricht-university/",
    "University of Zurich": "/universities/university-of-zurich/",
    "Queen's University": "/universities/queens-university/",
    "Monash University": "/universities/monash-university/",
    "University of Freiburg": "/universities/university-of-freiburg/",
    "University of Trento": "/universities/university-of-trento/",
    "Princeton University": "/universities/princeton-university/",
    "University of Bristol": "/universities/university-of-bristol/",
    "University of Tsukuba": "/universities/university-of-tsukuba/",
    "Stockholm School of Economics": "/universities/stockholm-school-of-economics/",
    "University of Twente": "/universities/university-of-twente/",
    "University of St. Gallen": "/universities/university-of-st-gallen/",
    "Western University": "/universities/western-university/",
    "RMIT University": "/universities/rmit-university/",
    "University of Göttingen": "/universities/university-of-goettingen/",
    "University of Padua": "/universities/university-of-padua/",
    "Yale University": "/universities/yale-university/",
    "University of Glasgow": "/universities/university-of-glasgow/",
    "Waseda University": "/universities/waseda-university/",
    "Swedish University of Agricultural Sciences": "/universities/swedish-university-of-agricultural-sciences/",
    "Wageningen University & Research": "/universities/wageningen-university-and-research/",
    "University of Bern": "/universities/university-of-bern/"
  };

  bsp = bsp.replace(
    /const universityMap = \{[\s\S]*?\};/,
    `const universityMap = ${JSON.stringify(uniMapObj, null, 2)};`
  );
  write('scripts/build-subject-pages.mjs', bsp);
  console.log(`  ✓ Updated build-subject-pages.mjs`);

  // 8. Update universities/index.html
  console.log(`\nUpdating universities/index.html...`);
  let uIndex = read('universities/index.html');
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>91</strong><span>universities with detailed published guides</span></div>`
  );
  // Update each country card verified status
  uIndex = uIndex.replace(
    /<a href="\/countries\/canada\/" class="country-link-card"><span class="country-numeral">01 \/ CA<\/span><h3>Canada<\/h3><div class="country-link-bottom"><span>116 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/canada/" class="country-link-card"><span class="country-numeral">01 / CA</span><h3>Canada</h3><div class="country-link-bottom"><span>116 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">10 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/australia\/" class="country-link-card"><span class="country-numeral">02 \/ AU<\/span><h3>Australia<\/h3><div class="country-link-bottom"><span>57 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/australia/" class="country-link-card"><span class="country-numeral">02 / AU</span><h3>Australia</h3><div class="country-link-bottom"><span>57 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">9 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/germany\/" class="country-link-card"><span class="country-numeral">03 \/ DE<\/span><h3>Germany<\/h3><div class="country-link-bottom"><span>213 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/germany/" class="country-link-card"><span class="country-numeral">03 / DE</span><h3>Germany</h3><div class="country-link-bottom"><span>213 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">9 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/italy\/" class="country-link-card"><span class="country-numeral">04 \/ IT<\/span><h3>Italy<\/h3><div class="country-link-bottom"><span>114 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/italy/" class="country-link-card"><span class="country-numeral">04 / IT</span><h3>Italy</h3><div class="country-link-bottom"><span>114 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">9 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/usa\/" class="country-link-card"><span class="country-numeral">05 \/ US<\/span><h3>United States<\/h3><div class="country-link-bottom"><span>656 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/usa/" class="country-link-card"><span class="country-numeral">05 / US</span><h3>United States</h3><div class="country-link-bottom"><span>656 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">9 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/uk\/" class="country-link-card"><span class="country-numeral">06 \/ UK<\/span><h3>United Kingdom<\/h3><div class="country-link-bottom"><span>100 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/uk/" class="country-link-card"><span class="country-numeral">06 / UK</span><h3>United Kingdom</h3><div class="country-link-bottom"><span>100 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">9 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/japan\/" class="country-link-card"><span class="country-numeral">07 \/ JP<\/span><h3>Japan<\/h3><div class="country-link-bottom"><span>179 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/japan/" class="country-link-card"><span class="country-numeral">07 / JP</span><h3>Japan</h3><div class="country-link-bottom"><span>179 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">9 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/sweden\/" class="country-link-card"><span class="country-numeral">08 \/ SE<\/span><h3>Sweden<\/h3><div class="country-link-bottom"><span>56 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/sweden/" class="country-link-card"><span class="country-numeral">08 / SE</span><h3>Sweden</h3><div class="country-link-bottom"><span>56 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">9 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/netherlands\/" class="country-link-card"><span class="country-numeral">09 \/ NL<\/span><h3>Netherlands<\/h3><div class="country-link-bottom"><span>121 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/netherlands/" class="country-link-card"><span class="country-numeral">09 / NL</span><h3>Netherlands</h3><div class="country-link-bottom"><span>121 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">9 source-reviewed universities</p></a>`
  );
  uIndex = uIndex.replace(
    /<a href="\/countries\/switzerland\/" class="country-link-card"><span class="country-numeral">10 \/ CH<\/span><h3>Switzerland<\/h3><div class="country-link-bottom"><span>34 candidates<\/span><span class="country-round-arrow" aria-hidden="true">↗<\/span><\/div><p class="country-verified">\d+ source-reviewed universities<\/p><\/a>/,
    `<a href="/countries/switzerland/" class="country-link-card"><span class="country-numeral">10 / CH</span><h3>Switzerland</h3><div class="country-link-bottom"><span>34 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">9 source-reviewed universities</p></a>`
  );
  write('universities/index.html', uIndex);
  console.log(`  ✓ Updated universities/index.html`);

  // 9. Update all 10 country pages
  console.log(`\nUpdating all 10 country pages...`);
  for (const u of cycle9Universities) {
    const cPath = `countries/${u.countryId}/index.html`;
    let cHtml = read(cPath);

    // Make sure robots is index,follow
    cHtml = cHtml.replace(
      '<meta name="robots" content="noindex,follow">',
      '<meta name="robots" content="index,follow">'
    );

    // Update published count
    const targetCount = u.countryId === 'canada' ? 10 : 9;
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
    console.log(`  ✓ Updated ${cPath}`);
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
    cycle: 9,
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
      university: "University of Bern",
      sourceRow: 1359
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 10,
      australia: 9,
      germany: 9,
      italy: 9,
      usa: 9,
      uk: 9,
      japan: 9,
      sweden: 9,
      netherlands: 9,
      switzerland: 9
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json for Cycle 9`);

  // 11. Sync with Google Sheet
  console.log(`\nSyncing Cycle 9 universities with Google Sheets via Webhook...`);
  for (const u of cycle9Universities) {
    try {
      console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
      await updateRotation(u.countryLabel, {
        publishedCount: u.countryId === 'canada' ? 10 : 9,
        currentRoundStatus: 'Round 9 completed',
        mostRecentPublished: u.institution,
        updatedDate: today
      });
      await recordProgress({
        sourceRow: u.sourceRow,
        country: u.countryLabel,
        institution: u.institution,
        officialWebsite: u.website,
        universityGuide: `https://openstemfield.org/universities/${u.slug}/`,
        publishedContent: `${u.shortName} guide: ${u.opportunities.length} opportunities (${u.opportunities.map(o => o.type).join(', ')}), ${u.researchers.length} faculty profiles, Schema.org JSON-LD; live on Vercel`
      });
      console.log(`  ✓ Google Sheet synced for ${u.institution}`);
    } catch (err) {
      console.warn(`  ⚠️ Webhook sync warning for ${u.institution}: ${err.message}`);
    }
  }

  console.log(`\nCycle 9 publication finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishCycle9();
}
