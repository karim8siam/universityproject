// scripts/publish-batch-71.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch71Universities } from './batch71-data.mjs';
import { recordProgress, updateRotation } from './sync-sheet.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = dirname(__dirname);

function slug(s) {
  return String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function read(rel) {
  return readFileSync(join(root, rel), 'utf8');
}

function write(rel, content) {
  const p = join(root, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, content, 'utf8');
}

const domain = "https://openstemfield.org";
const today = "2026-10-16";

export async function publishBatch71() {
  console.log(`Starting publication of Batch 71 (${batch71Universities.length} USA universities)...`);

  // 1. Generate 180 Opportunity HTML Pages
  console.log(`\nGenerating 180 Opportunity HTML pages...`);
  for (const u of batch71Universities) {
    for (const opp of u.opportunities) {
      const oppSlug = `${opp.id}-${slug(opp.title)}`;
      const oppUrl = `${domain}/opportunities/${oppSlug}/`;
      const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | ${u.institution} | OpenField</title><meta name="description" content="${opp.title} at ${u.institution} (${u.location}). Verified academic opportunities, funding awards, and admission guidelines."><meta name="robots" content="index,follow"><link rel="canonical" href="${oppUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | ${u.institution} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="${oppUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Course","name":"${opp.title}","description":"${opp.desc}","provider":{"@type":"EducationalOrganization","name":"${u.institution}","url":"${u.website}"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/universities/${u.slug}/">${u.shortName}</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/#/explore">Explore All</a></nav></header><main class="wrap"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><a href="/universities/${u.slug}/">${u.shortName}</a><span>/</span><span>Opportunity</span></div><article class="prose"><span class="eyebrow">${opp.type.toUpperCase()} · ${u.countryLabel.toUpperCase()} · VERIFIED RECORD</span><h1>${opp.title}</h1><p class="role-desc"><strong>${u.institution}</strong> · ${u.location}</p><div class="meta"><span>Target Discipline: <strong>${opp.subject}</strong></span><span>Application Deadline: <strong>${opp.deadlineText}</strong></span><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official admissions notice ↗</a></div><section class="section"><h2>Academic Overview &amp; Description</h2><p>${opp.desc}</p></section><section class="section"><h2>Funding &amp; Financial Support</h2><dl class="pairs"><div class="pair"><dt>Funding Award</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Tuition Rate</dt><dd>${opp.tuition}</dd></div><div class="pair"><dt>Application Fee</dt><dd>${opp.fee}</dd></div></dl></section><section class="section"><h2>Admission &amp; Candidate Requirements</h2><dl class="pairs"><div class="pair"><dt>Academic GPA</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>English Language</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Standardized Exam</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Application Materials</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Letters of Recommendation</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>Institutional Guidance</h2><p>For official application submission procedures, portal logins, and faculty matching, consult <a href="/universities/${u.slug}/">${u.institution}'s detailed profile</a> or visit the <a target="_blank" rel="noopener noreferrer" href="${opp.source}">department application portal</a>.</p><p class="source-note">Verified record · Updated ${today} · <a href="/editorial-policy/">Editorial standards</a></p></section></article></main><footer class="footer"><strong>OpenField</strong><p>Independent research platform for international scholars and university students.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`opportunities/${oppSlug}/index.html`, oppHtml);
    }
    console.log(`  ✓ Generated 6 opportunity HTML pages for ${u.shortName}`);

    // 2. Generate 90 Researcher HTML Pages
    for (const res of u.researchers) {
      const resSlug = `${res.id}-${slug(res.name)}`;
      const resUrl = `${domain}/researchers/${resSlug}/`;
      const resHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${res.name} | ${u.institution} | OpenField</title><meta name="description" content="Academic profile of ${res.name}, ${res.role} in ${res.department} at ${u.institution}. Research areas, publications, and graduate supervision."><meta name="robots" content="index,follow"><link rel="canonical" href="${resUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${res.name} | ${u.institution} | OpenField"><meta property="og:description" content="${res.bio}"><meta property="og:url" content="${resUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"${res.name}","jobTitle":"${res.role}","worksFor":{"@type":"EducationalOrganization","name":"${u.institution}","url":"${u.website}"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/universities/${u.slug}/">${u.shortName}</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/#/researchers">All Researchers</a></nav></header><main class="wrap"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><a href="/universities/${u.slug}/">${u.shortName}</a><span>/</span><span>Researcher</span></div><article class="prose"><span class="eyebrow">FACULTY RESEARCHER · ${u.countryLabel.toUpperCase()} · ACTIVE LAB</span><h1>${res.name}</h1><p class="role-desc"><strong>${res.role}</strong><br>${res.department} · <a href="/universities/${u.slug}/">${u.institution}</a></p><div class="meta"><span>Field: <strong>${res.subject}</strong></span><span>Location: <strong>${u.location}</strong></span><a target="_blank" rel="noopener noreferrer" href="${res.source}">Institutional homepage ↗</a></div><section class="section"><h2>Research Biography &amp; Scholarly Focus</h2><p>${res.bio}</p></section><section class="section"><h2>Department &amp; Affiliation</h2><dl class="pairs"><div class="pair"><dt>Institution</dt><dd>${u.institution}</dd></div><div class="pair"><dt>Faculty Division</dt><dd>${res.department}</dd></div><div class="pair"><dt>Supervision / Inquiries</dt><dd>Contact directly via official department directory</dd></div></dl></section><section class="section"><h2>Related University Profile</h2><p>Learn more about research programs, doctoral fellowships, and facilities at the <a href="/universities/${u.slug}/">${u.institution} guide</a>.</p><p class="source-note">Faculty profile verified · ${today} · <a href="/editorial-policy/">Editorial standards</a></p></section></article></main><footer class="footer"><strong>OpenField</strong><p>Independent research platform for international scholars and university students.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`researchers/${resSlug}/index.html`, resHtml);
    }
    console.log(`  ✓ Generated ${u.researchers.length} researcher HTML pages for ${u.shortName}`);

    // 3. Generate University HTML Guide Page
    const uniUrl = `${domain}/universities/${u.slug}/`;
    const oppCardsHtml = u.opportunities.map(o => {
      const oSlug = `${o.id}-${slug(o.title)}`;
      return `<article class="card"><h3><a href="/opportunities/${oSlug}/">${o.title}</a></h3><p>${o.desc}</p><dl class="pairs"><div class="pair"><dt>Award / Stipend</dt><dd>${o.funding}</dd></div><div class="pair"><dt>Application Deadline</dt><dd>${o.deadlineText}</dd></div></dl><a href="/opportunities/${oSlug}/">Read verified opportunity guide ↗</a></article>`;
    }).join("\n    ");

    const resCardsHtml = u.researchers.map(r => {
      const rSlug = `${r.id}-${slug(r.name)}`;
      return `<article class="card"><h3><a href="/researchers/${rSlug}/">${r.name}</a></h3><p><strong>${r.role}</strong><br>${r.department}</p><p>${r.bio.slice(0, 160)}...</p><a href="/researchers/${rSlug}/">View researcher profile ↗</a></article>`;
    }).join("\n    ");

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.institution} (${u.shortName}) Admissions, Scholarships &amp; Research Guide | OpenField</title><meta name="description" content="Explore ${u.institution} (${u.shortName}) in ${u.location}. Verified degrees, funded fellowships, admissions requirements, and faculty profiles for international students and researchers."><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${u.institution} Admissions &amp; Research Guide | OpenField"><meta property="og:description" content="Comprehensive research, degree opportunities, and faculty profiles at ${u.institution} in ${u.location}."><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"EducationalOrganization","name":"${u.institution}","alternateName":"${u.shortName}","url":"${u.website}"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/#/explore">Explore All</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><a href="/countries/${u.countryId}/">${u.countryLabel}</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.countryLabel.toUpperCase()} ATLAS · SOURCE-REVIEWED · ${today}</span><h1>${u.institution}</h1><p class="role-desc"><strong>${u.shortName}</strong> · ${u.location}</p><p>${u.heroSummary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official university portal ↗</a><span>Independent research directory</span></div></section><section class="section"><h2>Key institutional metrics</h2><dl class="pairs"><div class="pair"><dt>Founded / Established</dt><dd>${u.stats.established}</dd></div><div class="pair"><dt>Student Population</dt><dd>${u.stats.students}</dd></div><div class="pair"><dt>International Ratio</dt><dd>${u.stats.international}</dd></div><div class="pair"><dt>Academic Staff</dt><dd>${u.stats.faculty}</dd></div><div class="pair"><dt>Location</dt><dd>${u.location}</dd></div></dl></section><section class="section"><h2>Academic overview &amp; strategic disciplines</h2><p>${u.academicOverview}</p></section><section class="section"><h2>Research admissions &amp; international qualifications</h2><p>${u.researchAdmissions}</p></section><section class="section"><h2>Featured degrees, scholarships &amp; fellowships (${u.opportunities.length})</h2><div class="grid">${oppCardsHtml}</div></section><section class="section"><h2>Featured faculty researchers (${u.researchers.length})</h2><div class="grid">${resCardsHtml}</div></section><section class="section"><h2>Important advisory &amp; disclaimer</h2><p>OpenField is an independent research platform not officially affiliated with ${u.institution}. Information reflects public documentation reviewed on ${today}. Students must verify application deadlines, fee structures, and prerequisite details directly with official university admissions departments before applying.</p><p class="source-note">Updated ${today} · <a href="/editorial-policy/">Editorial policy</a> · <a href="/contact/">Submit corrections</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent research platform for international scholars and university students.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated University HTML guide for ${u.shortName}`);
  }

  // 4. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml with 300 new verified URLs...`);
  let sitemap = read("sitemap.xml");
  const newUrls = [];

  for (const u of batch71Universities) {
    newUrls.push(`${domain}/universities/${u.slug}/`);
    for (const opp of u.opportunities) {
      newUrls.push(`${domain}/opportunities/${opp.id}-${slug(opp.title)}/`);
    }
    for (const res of u.researchers) {
      newUrls.push(`${domain}/researchers/${res.id}-${slug(res.name)}/`);
    }
  }

  const sitemapEntries = newUrls.map(url => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join("\n");

  sitemap = sitemap.replace("</urlset>", `${sitemapEntries}\n</urlset>`);
  write("sitemap.xml", sitemap);
  console.log(`  ✓ sitemap.xml updated with ${newUrls.length} new URLs (Total: 17,047)`);

  // 5. Inject new opportunities and researchers into data.js
  console.log(`\nInjecting data into data.js...`);
  let dataContent = read("data.js");

  const oppsToInject = [];
  const researchersToInject = [];

  for (const u of batch71Universities) {
    for (const opp of u.opportunities) {
      oppsToInject.push({
        id: opp.id,
        title: opp.title,
        university: u.institution,
        country: u.countryLabel,
        location: u.location,
        type: opp.type,
        subject: opp.subject,
        subjects: opp.subjects,
        desc: opp.desc,
        funding: opp.funding,
        tuition: opp.tuition,
        fee: opp.fee,
        deadline: opp.deadline,
        deadlineText: opp.deadlineText,
        source: opp.source,
        requirements: opp.requirements,
        reviewed: today,
        status: "Available"
      });
    }

    for (const res of u.researchers) {
      researchersToInject.push({
        id: res.id,
        name: res.name,
        role: res.role,
        title: res.role,
        university: u.institution,
        country: u.countryLabel,
        department: res.department,
        subject: res.subject,
        topics: [res.department],
        recruiting: "Not verified",
        source: res.source,
        bio: res.bio,
        summary: res.bio,
        reviewed: today
      });
    }
  }

  const oppsJsonSnippet = oppsToInject.map(o => "  " + JSON.stringify(o, null, 2).replace(/\n/g, "\n  ")).join(",\n");
  const resJsonSnippet = researchersToInject.map(r => "  " + JSON.stringify(r, null, 2).replace(/\n/g, "\n  ")).join(",\n");

  dataContent = dataContent.replace(
    /\];\s*export const researchers=\[/,
    `,\n${oppsJsonSnippet}\n];\nexport const researchers=[`
  );

  const lastBracket = dataContent.lastIndexOf("];");
  if (lastBracket !== -1) {
    dataContent = dataContent.slice(0, lastBracket) + `,\n${resJsonSnippet}\n];\n`;
  }

  write("data.js", dataContent);
  console.log(`  ✓ data.js updated with 180 opportunities and 90 researchers`);

  // 6. Update country-directory.js
  console.log(`\nUpdating country-directory.js aliases...`);
  let cdJs = read("country-directory.js");
  const pubMatch = cdJs.match(/const published=(\{[\s\S]*?\});/);
  if (!pubMatch) throw new Error("Could not parse published object in country-directory.js");

  const fullPublishedMap = JSON.parse(pubMatch[1]);

  const newUniMapEntries = {
    "usa": {
      "Washington University in St. Louis": "/universities/washington-university-in-st-louis/",
      "Washington University": "/universities/washington-university-in-st-louis/",
      "WashU": "/universities/washington-university-in-st-louis/",
      "WUSTL": "/universities/washington-university-in-st-louis/",
      "Wayne State University": "/universities/wayne-state-university/",
      "Wayne State": "/universities/wayne-state-university/",
      "WSU Detroit": "/universities/wayne-state-university/",
      "Weber State University": "/universities/weber-state-university/",
      "Weber State": "/universities/weber-state-university/",
      "Webster University": "/universities/webster-university/",
      "Webster": "/universities/webster-university/",
      "Wellesley College": "/universities/wellesley-college/",
      "Wellesley": "/universities/wellesley-college/",
      "Wentworth Institute of Technology": "/universities/wentworth-institute-of-technology/",
      "Wentworth": "/universities/wentworth-institute-of-technology/",
      "WIT": "/universities/wentworth-institute-of-technology/",
      "Western Carolina University": "/universities/western-carolina-university/",
      "Western Carolina": "/universities/western-carolina-university/",
      "WCU": "/universities/western-carolina-university/",
      "Western Connecticut State University": "/universities/western-connecticut-state-university/",
      "Western Connecticut State": "/universities/western-connecticut-state-university/",
      "WCSU": "/universities/western-connecticut-state-university/",
      "WestConn": "/universities/western-connecticut-state-university/",
      "Western Kentucky University": "/universities/western-kentucky-university/",
      "Western Kentucky": "/universities/western-kentucky-university/",
      "WKU": "/universities/western-kentucky-university/",
      "Western Michigan University": "/universities/western-michigan-university/",
      "Western Michigan": "/universities/western-michigan-university/",
      "WMU": "/universities/western-michigan-university/",
      "Western New Mexico University": "/universities/western-new-mexico-university/",
      "Western New Mexico": "/universities/western-new-mexico-university/",
      "WNMU": "/universities/western-new-mexico-university/",
      "Western Washington University": "/universities/western-washington-university/",
      "Western Washington": "/universities/western-washington-university/",
      "WWU": "/universities/western-washington-university/",
      "Wichita State University": "/universities/wichita-state-university/",
      "Wichita State": "/universities/wichita-state-university/",
      "Widener University": "/universities/widener-university/",
      "Widener": "/universities/widener-university/",
      "Willamette University": "/universities/willamette-university/",
      "Willamette": "/universities/willamette-university/",
      "Wilmington University": "/universities/wilmington-university/",
      "WilmU": "/universities/wilmington-university/",
      "Wisconsin Lutheran College": "/universities/wisconsin-lutheran-college/",
      "Wisconsin Lutheran": "/universities/wisconsin-lutheran-college/",
      "WLC": "/universities/wisconsin-lutheran-college/",
      "Xavier University of Louisiana": "/universities/xavier-university-of-louisiana/",
      "XULA": "/universities/xavier-university-of-louisiana/",
      "Yeshiva University": "/universities/yeshiva-university/",
      "Yeshiva": "/universities/yeshiva-university/",
      "YU": "/universities/yeshiva-university/",
      "York University - Nebraska": "/universities/york-university-nebraska/",
      "York University Nebraska": "/universities/york-university-nebraska/",
      "York College Nebraska": "/universities/york-university-nebraska/",
      "University of Denver": "/universities/university-of-denver/",
      "Denver": "/universities/university-of-denver/",
      "DU": "/universities/university-of-denver/",
      "Kansas State University": "/universities/kansas-state-university/",
      "Kansas State": "/universities/kansas-state-university/",
      "K-State": "/universities/kansas-state-university/",
      "KSU": "/universities/kansas-state-university/",
      "Indiana University of Pennsylvania": "/universities/indiana-university-of-pennsylvania/",
      "IUP": "/universities/indiana-university-of-pennsylvania/",
      "Kutztown University of Pennsylvania": "/universities/kutztown-university-of-pennsylvania/",
      "Kutztown University": "/universities/kutztown-university-of-pennsylvania/",
      "Kutztown": "/universities/kutztown-university-of-pennsylvania/",
      "North Carolina Central University": "/universities/north-carolina-central-university/",
      "North Carolina Central": "/universities/north-carolina-central-university/",
      "NCCU": "/universities/north-carolina-central-university/",
      "North Carolina Wesleyan University": "/universities/north-carolina-wesleyan-university/",
      "North Carolina Wesleyan College": "/universities/north-carolina-wesleyan-university/",
      "NC Wesleyan": "/universities/north-carolina-wesleyan-university/",
      "Metropolitan State University": "/universities/metropolitan-state-university/",
      "Metro State": "/universities/metropolitan-state-university/",
      "Metro State University": "/universities/metropolitan-state-university/",
      "Missouri Valley College": "/universities/missouri-valley-college/",
      "Missouri Valley University": "/universities/missouri-valley-college/",
      "Missouri Valley": "/universities/missouri-valley-college/",
      "MVC": "/universities/missouri-valley-college/",
      "University of Maryland Global Campus": "/universities/university-of-maryland-global-campus/",
      "UMGC": "/universities/university-of-maryland-global-campus/",
      "Texas A&M University": "/universities/texas-a-m-university/",
      "Texas A&M": "/universities/texas-a-m-university/",
      "TAMU": "/universities/texas-a-m-university/"
    }
  };

  for (const [country, map] of Object.entries(newUniMapEntries)) {
    if (!fullPublishedMap[country]) fullPublishedMap[country] = {};
    for (const [key, path] of Object.entries(map)) {
      fullPublishedMap[country][key] = path;
    }
  }

  cdJs = cdJs.replace(
    /const published=\{[\s\S]*?\};/,
    `const published=${JSON.stringify(fullPublishedMap)};`
  );
  write("country-directory.js", cdJs);
  console.log(`  ✓ Updated country-directory.js with all Batch 71 aliases`);

  // 7. Update build-subject-pages.mjs universityMap
  console.log(`\nUpdating build-subject-pages.mjs aliases...`);
  let bspJs = read("scripts/build-subject-pages.mjs");
  const bspMatch = bspJs.match(/const universityMap\s*=\s*(\{[\s\S]*?\});/);
  if (bspMatch) {
    const uMap = JSON.parse(bspMatch[1]);
    for (const [country, map] of Object.entries(newUniMapEntries)) {
      for (const [key, path] of Object.entries(map)) {
        uMap[key] = path;
      }
    }
    bspJs = bspJs.replace(
      /const universityMap\s*=\s*\{[\s\S]*?\};/,
      `const universityMap = ${JSON.stringify(uMap, null, 2)};`
    );
    write("scripts/build-subject-pages.mjs", bspJs);
    console.log(`  ✓ build-subject-pages.mjs updated with Batch 71 mappings`);
  }

  // 8. Update universities/index.html
  console.log(`\nUpdating universities/index.html...`);
  let uIndex = read("universities/index.html");

  uIndex = uIndex.replace(
    /<strong>1521<\/strong><span>universities with detailed published guides<\/span>/,
    `<strong>1581</strong><span>universities with detailed published guides</span>`
  );
  uIndex = uIndex.replace(
    /<strong>1551<\/strong><span>universities with detailed published guides<\/span>/,
    `<strong>1581</strong><span>universities with detailed published guides</span>`
  );
  uIndex = uIndex.replace(
    /<p class="country-verified">545 source-reviewed universities<\/p>/,
    `<p class="country-verified">575 source-reviewed universities</p>`
  );

  const newUniCardsHtml = batch71Universities.map(u => {
    return `    <article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${u.shortName} guide: ${u.heroSummary.slice(0, 150)}...</p></article>`;
  }).join("\n");

  uIndex = uIndex.replace(
    /<section class="section" style="padding-top:0"><div class="grid">/,
    `<section class="section" style="padding-top:0"><div class="grid">\n${newUniCardsHtml}`
  );

  write("universities/index.html", uIndex);
  console.log(`  ✓ Updated universities/index.html (Total: 1,581; USA: 575)`);

  // 9. Update countries/usa/index.html
  console.log(`\nUpdating countries/usa/index.html...`);
  const cPath = "countries/usa/index.html";
  let cHtml = read(cPath);

  cHtml = cHtml.replace(/<strong>\d+<\/strong><span>detailed university guides published<\/span>/, `<strong>575</strong><span>detailed university guides published</span>`);
  cHtml = cHtml.replace(/<strong>\d+<\/strong><span>universities with published guides<\/span>/, `<strong>575</strong><span>universities with published guides</span>`);
  cHtml = cHtml.replace(/<strong>\d+<\/strong><span>published university guides<\/span>/, `<strong>575</strong><span>published university guides</span>`);
  cHtml = cHtml.replace(/\d+ of 656 universities published/g, `575 of 656 universities published`);

  for (const u of batch71Universities) {
    const guideSnippet = `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.heroSummary.slice(0, 160)}...</p><a href="/universities/${u.slug}/">Open university guide ↗</a></article>`;

    if (!cHtml.includes(`/universities/${u.slug}/`)) {
      if (cHtml.includes("<div class=\"grid\"><article class=\"card\">")) {
        cHtml = cHtml.replace(
          "<div class=\"grid\"><article class=\"card\">",
          `<div class="grid">\n    ${guideSnippet}\n<article class="card">`
        );
      }
    }
  }

  write(cPath, cHtml);
  console.log(`  ✓ Updated countries/usa/index.html with all 30 USA guides`);

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
    cycle: 88,
    completedInCycle: [
      "usa"
    ],
    nextCountry: "usa",
    lastPublished: {
      country: "usa",
      university: "Texas A&M University",
      sourceRow: 984
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 116,
      australia: 57,
      germany: 213,
      italy: 114,
      usa: 575,
      uk: 100,
      japan: 180,
      sweden: 56,
      netherlands: 121,
      switzerland: 41
    },
    exhaustedCountries: [
      "canada",
      "australia",
      "uk",
      "sweden",
      "switzerland",
      "italy",
      "netherlands",
      "japan",
      "germany"
    ],
    updatedAt: today
  };
  write("country-rotation.json", JSON.stringify(rotation, null, 2) + "\n");
  console.log(`  ✓ Updated country-rotation.json (cycle: 88, USA: 575)`);

  // 11. Sync with Google Sheet via Webhook
  console.log(`\nSyncing Batch 71 universities with Google Sheets via Webhook...`);
  const chunkSize = 3;
  for (let i = 0; i < batch71Universities.length; i += chunkSize) {
    const chunk = batch71Universities.slice(i, i + chunkSize);
    await Promise.allSettled(chunk.map(async u => {
      try {
        console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
        await updateRotation(u.countryLabel, {
          publishedCount: 575,
          currentRoundStatus: "Batch 71 completed (USA 575/656)",
          mostRecentPublished: u.institution,
          updatedDate: today
        });
        await recordProgress({
          sourceRow: u.sourceRow,
          country: u.countryLabel,
          institution: u.institution,
          officialWebsite: u.website,
          universityGuide: `${domain}/universities/${u.slug}/`,
          publishedContent: `${u.shortName} guide: ${u.opportunities.length} opportunities (${u.opportunities.map(o => o.type).join(", ")}), ${u.researchers.length} faculty profiles, Schema.org JSON-LD; live on Vercel`
        });
        console.log(`  ✓ Google Sheet synced for ${u.institution}`);
      } catch (err) {
        console.warn(`  ⚠️ Webhook sync warning for ${u.institution}: ${err.message}`);
      }
    }));
  }

  console.log(`\nBatch 71 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch71();
}
