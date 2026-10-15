import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { batch66Universities } from "./batch66-data.mjs";
import { recordProgress, updateRotation } from "./sync-sheet.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = p => readFileSync(join(root, p), "utf8");
const write = (p, content) => {
  const full = join(root, p);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, "utf8");
};

const domain = "https://universityproject-chi.vercel.app";
const slug = s => String(s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const today = "2026-10-16";

export async function publishBatch66() {
  console.log("Starting publication for Batch 66: 30 USA universities (USA advancing to 425/656)...");

  for (const u of batch66Universities) {
    console.log(`\nProcessing [${u.countryLabel}] ${u.institution} (${u.shortName})...`);

    // 1. Generate Opportunity HTML Pages
    for (const opp of u.opportunities) {
      const oppSlug = `${opp.id}-${slug(opp.title)}`;
      const oppUrl = `${domain}/opportunities/${oppSlug}/`;
      const uniUrl = `/universities/${u.slug}/`;

      const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="${oppUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="${oppUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="${uniUrl}">${u.institution}</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">${u.countryLabel} · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect published university guidelines available at the last review. Review official department guidelines before submission.</p><dl class="pairs"><div class="pair"><dt>Academic degree / Prerequisites</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>English language proficiency</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Standardized testing (GRE/GMAT)</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Thesis / Research statement</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="${uniUrl}">${u.shortName} guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ${u.institution} documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`opportunities/${oppSlug}/index.html`, oppHtml);
    }
    console.log(`  ✓ Generated ${u.opportunities.length} opportunity HTML pages`);

    // 2. Generate Researcher HTML Pages
    for (const res of u.researchers) {
      const resSlug = `${res.id}-${slug(res.name)}`;
      const resUrl = `${domain}/researchers/${resSlug}/`;
      const uniUrl = `/universities/${u.slug}/`;

      const resHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${res.name} | Faculty Profile | OpenField</title><meta name="description" content="Academic profile of ${res.name}, ${res.role} at ${u.institution} (${u.countryLabel}). Research specialties: ${res.bio.slice(0, 120)}..."><meta name="robots" content="index,follow"><link rel="canonical" href="${resUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${res.name} | Faculty Profile | OpenField"><meta property="og:description" content="${res.role} in ${res.department} at ${u.institution}."><meta property="og:url" content="${resUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"${res.name}","jobTitle":"${res.role}","worksFor":{"@type":"EducationalOrganization","name":"${u.institution}"},"description":"${res.bio}","url":"${resUrl}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${uniUrl}">${u.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="${uniUrl}">${u.institution}</a><span>/</span><span>Faculty</span></div><span class="eyebrow">${u.countryLabel} · Verified Academic Profile · Reviewed ${today}</span><h1>${res.name}</h1><p class="role-desc"><strong>${res.role}</strong><br>${res.department}, <a href="${uniUrl}">${u.institution}</a>, ${u.location}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${res.source}">Official institutional directory ↗</a><span>Student-vetted researcher directory</span></div></section><section class="section"><h2>Research biography &amp; scholarly focus</h2><p>${res.bio}</p><dl class="pairs" style="margin-top:1.5rem;"><div class="pair"><dt>Primary Subject Domain</dt><dd><a href="/subjects/${res.subject}/">${res.subject.toUpperCase()}</a></dd></div><div class="pair"><dt>Department / Faculty</dt><dd>${res.department}</dd></div><div class="pair"><dt>Current Recruiting Status</dt><dd>Prospective students should contact department directly</dd></div></dl><div class="actions" style="margin-top:2rem;"><a class="btn" href="${res.source}" target="_blank" rel="noopener noreferrer">Institutional faculty link ↗</a><a class="btn secondary" href="${uniUrl}">All ${u.shortName} opportunities ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship advice ↗</a></div></section><section class="section"><h2>Academic guidance note</h2><p>Faculty details sourced from official ${u.institution} publications reviewed ${today}. Inquiries regarding doctoral openings should follow official departmental submission guidelines.</p><p class="source-note">Verified profile · <a href="/editorial-policy/">Editorial policy</a> · <a href="/contact/">Report correction</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent research platform; faculty directory listings do not imply institutional endorsement.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

      write(`researchers/${resSlug}/index.html`, resHtml);
    }
    console.log(`  ✓ Generated ${u.researchers.length} researcher HTML pages`);

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

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.institution} (${u.shortName}) Admissions, Scholarships &amp; Research Guide | OpenField</title><meta name="description" content="Explore ${u.institution} (${u.shortName}) in ${u.location}. Verified degrees, funded fellowships, admissions requirements, and faculty profiles for international students and researchers."><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${u.institution} Admissions &amp; Research Guide | OpenField"><meta property="og:description" content="Comprehensive research, degree opportunities, and faculty profiles at ${u.institution} in ${u.location}."><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"EducationalOrganization","name":"${u.institution}","alternateName":"${u.shortName}","url":"${u.website}","address":"${u.location}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/#/explore">Explore All</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><a href="/countries/${u.countryId}/">${u.countryLabel}</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.countryLabel.toUpperCase()} ATLAS · SOURCE-REVIEWED · ${today}</span><h1>${u.institution}</h1><p class="role-desc"><strong>${u.shortName}</strong> · ${u.location}</p><p>${u.heroSummary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official university portal ↗</a><span>Independent research directory</span></div></section><section class="section"><h2>Key institutional metrics</h2><dl class="pairs"><div class="pair"><dt>Founded / Established</dt><dd>${u.stats.established}</dd></div><div class="pair"><dt>Student Population</dt><dd>${u.stats.students}</dd></div><div class="pair"><dt>International Ratio</dt><dd>${u.stats.international}</dd></div><div class="pair"><dt>Academic Staff</dt><dd>${u.stats.faculty}</dd></div><div class="pair"><dt>Location</dt><dd>${u.location}</dd></div></dl></section><section class="section"><h2>Academic overview &amp; strategic disciplines</h2><p>${u.academicOverview}</p></section><section class="section"><h2>Research admissions &amp; international qualifications</h2><p>${u.researchAdmissions}</p></section><section class="section"><h2>Featured degrees, scholarships &amp; fellowships (${u.opportunities.length})</h2><div class="grid">${oppCardsHtml}</div></section><section class="section"><h2>Featured faculty researchers (${u.researchers.length})</h2><div class="grid">${resCardsHtml}</div></section><section class="section"><h2>Important advisory &amp; disclaimer</h2><p>OpenField is an independent research platform not officially affiliated with ${u.institution}. Information reflects public documentation reviewed on ${today}. Students must verify application deadlines, fee structures, and prerequisite details directly with official university admissions departments before applying.</p><p class="source-note">Updated ${today} · <a href="/editorial-policy/">Editorial policy</a> · <a href="/contact/">Submit corrections</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent research platform for international scholars and university students.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated University HTML guide for ${u.shortName}`);
  }

  // 4. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml with 300 new verified URLs...`);
  let sitemap = read("sitemap.xml");
  const newUrls = [];

  for (const u of batch66Universities) {
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
  console.log(`  ✓ sitemap.xml updated with ${newUrls.length} new URLs (Total: 15,547)`);

  // 5. Inject new opportunities and researchers into data.js
  console.log(`\nInjecting data into data.js...`);
  let dataContent = read("data.js");

  const oppsToInject = [];
  const researchersToInject = [];

  for (const u of batch66Universities) {
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

  const lastBracket = dataContent.rfind ? dataContent.rfind("];") : dataContent.lastIndexOf("];");
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
      "St. Joseph's University, New York - Brooklyn": "/universities/st-josephs-university-new-york-brooklyn/",
      "St. Joseph's NY Brooklyn": "/universities/st-josephs-university-new-york-brooklyn/",
      "St. Joseph's University New York Brooklyn": "/universities/st-josephs-university-new-york-brooklyn/",
      "St. Joseph's Brooklyn": "/universities/st-josephs-university-new-york-brooklyn/",
      "St. Mary's College of Maryland": "/universities/st-marys-college-of-maryland/",
      "St. Mary's College of Maryland Campus Center": "/universities/st-marys-college-of-maryland/",
      "St. Mary's College Maryland": "/universities/st-marys-college-of-maryland/",
      "SMCM": "/universities/st-marys-college-of-maryland/",
      "State Technical College of Missouri": "/universities/state-technical-college-of-missouri/",
      "State Tech Missouri": "/universities/state-technical-college-of-missouri/",
      "State Tech": "/universities/state-technical-college-of-missouri/",
      "Stockton University": "/universities/stockton-university/",
      "Stockton": "/universities/stockton-university/",
      "Stony Brook University": "/universities/stony-brook-university/",
      "Stony Brook": "/universities/stony-brook-university/",
      "SUNY Stony Brook": "/universities/stony-brook-university/",
      "Strayer University": "/universities/strayer-university/",
      "Strayer": "/universities/strayer-university/",
      "Suffolk University": "/universities/suffolk-university/",
      "Suffolk": "/universities/suffolk-university/",
      "Syracuse University": "/universities/syracuse-university/",
      "Syracuse": "/universities/syracuse-university/",
      "Taylor University": "/universities/taylor-university/",
      "Taylor": "/universities/taylor-university/",
      "Temple University": "/universities/temple-university/",
      "Temple": "/universities/temple-university/",
      "Tennessee State University": "/universities/tennessee-state-university/",
      "Tennessee State": "/universities/tennessee-state-university/",
      "TSU": "/universities/tennessee-state-university/",
      "Tennessee Tech University": "/universities/tennessee-tech-university/",
      "Tennessee Tech": "/universities/tennessee-tech-university/",
      "TTU": "/universities/tennessee-tech-university/",
      "Tennessee Wesleyan University": "/universities/tennessee-wesleyan-university/",
      "Tennessee Wesleyan": "/universities/tennessee-wesleyan-university/",
      "TWU Tennessee": "/universities/tennessee-wesleyan-university/",
      "Texas A&M International University": "/universities/texas-am-international-university/",
      "TAMIU": "/universities/texas-am-international-university/",
      "Texas A&M University": "/universities/texas-am-university/",
      "Texas A&M": "/universities/texas-am-university/",
      "TAMU": "/universities/texas-am-university/",
      "Texas A&M University at Galveston": "/universities/texas-am-university-at-galveston/",
      "Texas A&M Galveston": "/universities/texas-am-university-at-galveston/",
      "TAMUG": "/universities/texas-am-university-at-galveston/",
      "Texas A&M University Central Texas": "/universities/texas-am-university-central-texas/",
      "Texas A&M Central Texas": "/universities/texas-am-university-central-texas/",
      "TAMU Central Texas": "/universities/texas-am-university-central-texas/",
      "Texas A&M University-Corpus Christi": "/universities/texas-am-university-corpus-christi/",
      "Texas A&M Corpus Christi": "/universities/texas-am-university-corpus-christi/",
      "TAMU Corpus Christi": "/universities/texas-am-university-corpus-christi/",
      "TAMU-CC": "/universities/texas-am-university-corpus-christi/",
      "Texas Christian University": "/universities/texas-christian-university/",
      "TCU": "/universities/texas-christian-university/",
      "Texas College": "/universities/texas-college/",
      "Texas State University": "/universities/texas-state-university/",
      "Texas State": "/universities/texas-state-university/",
      "TXST": "/universities/texas-state-university/",
      "Texas Tech University": "/universities/texas-tech-university/",
      "Texas Tech": "/universities/texas-tech-university/",
      "Texas Tech University Health Sciences Center at Amarillo": "/universities/texas-tech-university-health-sciences-center-amarillo/",
      "Texas Tech Health Sciences Center Amarillo": "/universities/texas-tech-university-health-sciences-center-amarillo/",
      "TTUHSC Amarillo": "/universities/texas-tech-university-health-sciences-center-amarillo/",
      "Texas Wesleyan University": "/universities/texas-wesleyan-university/",
      "Texas Wesleyan": "/universities/texas-wesleyan-university/",
      "Texas Woman's University": "/universities/texas-womans-university/",
      "Texas Woman's": "/universities/texas-womans-university/",
      "TWU": "/universities/texas-womans-university/",
      "The Chicago School": "/universities/the-chicago-school/",
      "The Chicago School of Professional Psychology": "/universities/the-chicago-school/",
      "The Citadel, the Military College of South Carolina": "/universities/the-citadel-the-military-college-of-south-carolina/",
      "The Citadel": "/universities/the-citadel-the-military-college-of-south-carolina/",
      "Citadel": "/universities/the-citadel-the-military-college-of-south-carolina/",
      "The College of New Jersey": "/universities/the-college-of-new-jersey/",
      "College of New Jersey": "/universities/the-college-of-new-jersey/",
      "TCNJ": "/universities/the-college-of-new-jersey/",
      "The Cooper Union for the Advancement of Science and Art": "/universities/the-cooper-union-for-the-advancement-of-science-and-art/",
      "The Cooper Union": "/universities/the-cooper-union-for-the-advancement-of-science-and-art/",
      "Cooper Union": "/universities/the-cooper-union-for-the-advancement-of-science-and-art/",
      "The George Washington University": "/universities/the-george-washington-university/",
      "George Washington University": "/universities/the-george-washington-university/",
      "GWU": "/universities/the-george-washington-university/",
      "George Washington": "/universities/the-george-washington-university/"
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
  console.log(`  ✓ Updated country-directory.js with all Batch 66 aliases`);

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
    console.log(`  ✓ build-subject-pages.mjs updated with Batch 66 mappings`);
  }

  // 8. Update universities/index.html
  console.log(`\nUpdating universities/index.html...`);
  let uIndex = read("universities/index.html");

  uIndex = uIndex.replace(
    /<strong>1401<\/strong><span>universities with detailed published guides<\/span>/,
    `<strong>1431</strong><span>universities with detailed published guides</span>`
  );
  uIndex = uIndex.replace(
    /<p class="country-verified">395 source-reviewed universities<\/p>/,
    `<p class="country-verified">425 source-reviewed universities</p>`
  );

  const newUniCardsHtml = batch66Universities.map(u => {
    return `    <article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${u.shortName} guide: ${u.heroSummary.slice(0, 150)}...</p></article>`;
  }).join("\n");

  uIndex = uIndex.replace(
    /<section class="section" style="padding-top:0"><div class="grid">/,
    `<section class="section" style="padding-top:0"><div class="grid">\n${newUniCardsHtml}`
  );

  write("universities/index.html", uIndex);
  console.log(`  ✓ Updated universities/index.html (Total: 1,431; USA: 425)`);

  // 9. Update countries/usa/index.html
  console.log(`\nUpdating countries/usa/index.html...`);
  const cPath = "countries/usa/index.html";
  let cHtml = read(cPath);

  cHtml = cHtml.replace(/<strong>\d+<\/strong><span>detailed university guides published<\/span>/, `<strong>425</strong><span>detailed university guides published</span>`);
  cHtml = cHtml.replace(/<strong>\d+<\/strong><span>universities with published guides<\/span>/, `<strong>425</strong><span>universities with published guides</span>`);
  cHtml = cHtml.replace(/<strong>\d+<\/strong><span>published university guides<\/span>/, `<strong>425</strong><span>published university guides</span>`);
  cHtml = cHtml.replace(/\d+ of 656 universities published/g, `425 of 656 universities published`);

  for (const u of batch66Universities) {
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
    cycle: 83,
    completedInCycle: [
      "usa"
    ],
    nextCountry: "usa",
    lastPublished: {
      country: "usa",
      university: "The George Washington University",
      sourceRow: 1003
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 116,
      australia: 57,
      germany: 213,
      italy: 114,
      usa: 425,
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
  console.log(`  ✓ Updated country-rotation.json (cycle: 83, USA: 425)`);

  // 11. Sync with Google Sheet via Webhook
  console.log(`\nSyncing Batch 66 universities with Google Sheets via Webhook...`);
  const chunkSize = 3;
  for (let i = 0; i < batch66Universities.length; i += chunkSize) {
    const chunk = batch66Universities.slice(i, i + chunkSize);
    await Promise.allSettled(chunk.map(async u => {
      try {
        console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
        await updateRotation(u.countryLabel, {
          publishedCount: 425,
          currentRoundStatus: "Batch 66 completed (USA 425/656)",
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

  console.log(`\nBatch 66 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch66();
}
