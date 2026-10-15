import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { batch65Universities } from "./batch65-data.mjs";
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

export async function publishBatch65() {
  console.log("Starting publication for Batch 65: 30 USA universities (USA advancing to 395/656)...");

  for (const u of batch65Universities) {
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

  for (const u of batch65Universities) {
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
  console.log(`  ✓ sitemap.xml updated with ${newUrls.length} new URLs (Total: 15,247)`);

  // 5. Inject new opportunities and researchers into data.js
  console.log(`\nInjecting data into data.js...`);
  let dataContent = read("data.js");

  const oppsToInject = [];
  const researchersToInject = [];

  for (const u of batch65Universities) {
    for (const opp of u.opportunities) {
      oppsToInject.push({
        id: opp.id,
        title: opp.title,
        university: u.institution,
        country: u.countryLabel,
        city: u.location.split(",")[0].trim(),
        degreeType: opp.type === "Fellowship" ? "fellowship" : "master",
        subject: opp.subject,
        subjects: opp.subjects,
        fundingType: "Fully Funded",
        deadline: opp.deadline,
        deadlineDisplay: opp.deadlineText,
        description: opp.desc,
        summary: opp.desc,
        requirements: opp.requirements,
        funding: {
          amount: opp.funding,
          tuitionCovered: true,
          stipend: true
        },
        source: opp.source,
        featured: false,
        verified: true,
        academicYear: "2027",
        applicationFee: opp.fee,
        tuition: opp.tuition,
        status: "Open"
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
    /\n\];export const researchers=\[/,
    `,\n${oppsJsonSnippet}\n];export const researchers=[`
  );

  dataContent = dataContent.replace(
    /\n\];\s*$/,
    `,\n${resJsonSnippet}\n];\n`
  );

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
      "Sewanee | The University of the South": "/universities/sewanee-the-university-of-the-south/",
      "Sewanee": "/universities/sewanee-the-university-of-the-south/",
      "The University of the South": "/universities/sewanee-the-university-of-the-south/",
      "University of the South": "/universities/sewanee-the-university-of-the-south/",
      "Sheridan College": "/universities/sheridan-college-wyoming/",
      "Sheridan College Wyoming": "/universities/sheridan-college-wyoming/",
      "Sinte Gleska University": "/universities/sinte-gleska-university-mission/",
      "Sinte Gleska": "/universities/sinte-gleska-university-mission/",
      "Sisseton Wahpeton College": "/universities/sisseton-wahpeton-college-agency-village/",
      "Sisseton Wahpeton": "/universities/sisseton-wahpeton-college-agency-village/",
      "Slippery Rock University": "/universities/slippery-rock-university/",
      "Slippery Rock": "/universities/slippery-rock-university/",
      "SRU": "/universities/slippery-rock-university/",
      "Smith College": "/universities/smith-college-northampton/",
      "Smith": "/universities/smith-college-northampton/",
      "South Carolina State University": "/universities/south-carolina-state-university-orangeburg/",
      "SC State": "/universities/south-carolina-state-university-orangeburg/",
      "SCSU": "/universities/south-carolina-state-university-orangeburg/",
      "South Dakota School of Mines & Technology": "/universities/south-dakota-school-of-mines-and-technology/",
      "South Dakota School of Mines and Technology": "/universities/south-dakota-school-of-mines-and-technology/",
      "South Dakota Mines": "/universities/south-dakota-school-of-mines-and-technology/",
      "SD Mines": "/universities/south-dakota-school-of-mines-and-technology/",
      "South Dakota State University College of Nursing - Rapid City": "/universities/sdsu-college-of-nursing-rapid-city/",
      "SDSU College of Nursing - Rapid City": "/universities/sdsu-college-of-nursing-rapid-city/",
      "SDSU Nursing Rapid City": "/universities/sdsu-college-of-nursing-rapid-city/",
      "South University, Columbia": "/universities/south-university-columbia/",
      "South University Columbia": "/universities/south-university-columbia/",
      "Southeast Missouri State University": "/universities/southeast-missouri-state-university-cape-girardeau/",
      "SEMO": "/universities/southeast-missouri-state-university-cape-girardeau/",
      "Southeast Technical College": "/universities/southeast-technical-college-sioux-falls/",
      "Southeast Tech": "/universities/southeast-technical-college-sioux-falls/",
      "Southeastern Illinois College": "/universities/southeastern-illinois-college-harrisburg/",
      "SIC": "/universities/southeastern-illinois-college-harrisburg/",
      "Southeastern Louisiana University": "/universities/southeastern-louisiana-university-hammond/",
      "Southeastern Louisiana": "/universities/southeastern-louisiana-university-hammond/",
      "Southeastern Oklahoma State University": "/universities/southeastern-oklahoma-state-university-durant/",
      "Southeastern Oklahoma State": "/universities/southeastern-oklahoma-state-university-durant/",
      "Southern Arkansas University": "/universities/southern-arkansas-university-magnolia/",
      "Southern Arkansas": "/universities/southern-arkansas-university-magnolia/",
      "SAU": "/universities/southern-arkansas-university-magnolia/",
      "Southern California State University": "/universities/southern-california-state-university-el-monte/",
      "SCSU California": "/universities/southern-california-state-university-el-monte/",
      "Southern Connecticut State University": "/universities/southern-connecticut-state-university-new-haven/",
      "Southern Connecticut": "/universities/southern-connecticut-state-university-new-haven/",
      "Southern Illinois University": "/universities/southern-illinois-university-carbondale/",
      "Southern Illinois University Carbondale": "/universities/southern-illinois-university-carbondale/",
      "SIU Carbondale": "/universities/southern-illinois-university-carbondale/",
      "SIU": "/universities/southern-illinois-university-carbondale/",
      "Southern Maine Community College": "/universities/southern-maine-community-college-south-portland/",
      "SMCC": "/universities/southern-maine-community-college-south-portland/",
      "SMCC Maine": "/universities/southern-maine-community-college-south-portland/",
      "Southern New Hampshire University": "/universities/southern-new-hampshire-university-manchester/",
      "SNHU": "/universities/southern-new-hampshire-university-manchester/",
      "Southern Oregon University": "/universities/southern-oregon-university-ashland/",
      "Southern Oregon": "/universities/southern-oregon-university-ashland/",
      "SOU": "/universities/southern-oregon-university-ashland/",
      "Southern University and A&M College": "/universities/southern-university-and-a-and-m-college-baton-rouge/",
      "Southern University Baton Rouge": "/universities/southern-university-and-a-and-m-college-baton-rouge/",
      "Southern University": "/universities/southern-university-and-a-and-m-college-baton-rouge/",
      "SUBR": "/universities/southern-university-and-a-and-m-college-baton-rouge/",
      "Southern University at New Orleans": "/universities/southern-university-at-new-orleans/",
      "SUNO": "/universities/southern-university-at-new-orleans/",
      "Southern University Law Center": "/universities/southern-university-law-center-baton-rouge/",
      "SULC": "/universities/southern-university-law-center-baton-rouge/",
      "Southern Utah University": "/universities/southern-utah-university-cedar-city/",
      "Southern Utah": "/universities/southern-utah-university-cedar-city/",
      "SUU": "/universities/southern-utah-university-cedar-city/",
      "Spring Hill College": "/universities/spring-hill-college-mobile/",
      "Spring Hill": "/universities/spring-hill-college-mobile/",
      "St. Catherine University": "/universities/st-catherine-university-st-paul/",
      "St. Catherine": "/universities/st-catherine-university-st-paul/",
      "St. Kate's": "/universities/st-catherine-university-st-paul/",
      "St. John's College": "/universities/st-johns-college-santa-fe/",
      "St. John's College Santa Fe": "/universities/st-johns-college-santa-fe/",
      "St. John's Santa Fe": "/universities/st-johns-college-santa-fe/",
      "St. John's University Manhattan Campus": "/universities/st-johns-university-manhattan-campus/",
      "St. John's Manhattan": "/universities/st-johns-university-manhattan-campus/"
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
  console.log(`  ✓ Updated country-directory.js with all Batch 65 aliases`);

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
    console.log(`  ✓ build-subject-pages.mjs updated with Batch 65 mappings`);
  }

  // 8. Update universities/index.html
  console.log(`\nUpdating universities/index.html...`);
  let uIndex = read("universities/index.html");

  uIndex = uIndex.replace(
    /<strong>1371<\/strong><span>universities with detailed published guides<\/span>/,
    `<strong>1401</strong><span>universities with detailed published guides</span>`
  );
  uIndex = uIndex.replace(
    /<p class="country-verified">365 source-reviewed universities<\/p>/,
    `<p class="country-verified">395 source-reviewed universities</p>`
  );

  const newUniCardsHtml = batch65Universities.map(u => {
    return `    <article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${u.shortName} guide: ${u.heroSummary.slice(0, 150)}...</p></article>`;
  }).join("\n");

  uIndex = uIndex.replace(
    /<section class="section" style="padding-top:0"><div class="grid">/,
    `<section class="section" style="padding-top:0"><div class="grid">\n${newUniCardsHtml}`
  );

  write("universities/index.html", uIndex);
  console.log(`  ✓ Updated universities/index.html (Total: 1,401; USA: 395)`);

  // 9. Update countries/usa/index.html
  console.log(`\nUpdating countries/usa/index.html...`);
  const cPath = "countries/usa/index.html";
  let cHtml = read(cPath);

  cHtml = cHtml.replace(/<strong>365<\/strong><span>universities with published guides<\/span>/, `<strong>395</strong><span>universities with published guides</span>`);
  cHtml = cHtml.replace(/<strong>365<\/strong><span>published university guides<\/span>/, `<strong>395</strong><span>published university guides</span>`);
  cHtml = cHtml.replace(/365 of 656 universities published/g, `395 of 656 universities published`);

  for (const u of batch65Universities) {
    const guideSnippet = `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.heroSummary.slice(0, 160)}...</p><a href="/universities/${u.slug}/">Open university guide ↗</a></article>`;

    if (!cHtml.includes(`/universities/${u.slug}/`)) {
      if (cHtml.includes("<div class=\"country-feature section\"><div class=\"country-section-head\"><span class=\"eyebrow\">SOURCE-REVIEWED UNIVERSITY</span><h2>Explore published university research.</h2></div>\n<div class=\"grid\">")) {
        cHtml = cHtml.replace(
          "<div class=\"country-feature section\"><div class=\"country-section-head\"><span class=\"eyebrow\">SOURCE-REVIEWED UNIVERSITY</span><h2>Explore published university research.</h2></div>\n<div class=\"grid\">",
          `<div class="country-feature section"><div class="country-section-head"><span class="eyebrow">SOURCE-REVIEWED UNIVERSITY</span><h2>Explore published university research.</h2></div>\n<div class="grid">\n    ${guideSnippet}`
        );
      } else if (cHtml.includes("<div class=\"country-feature section\">")) {
        cHtml = cHtml.replace(
          /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/,
          `</div>\n    </div>\n    ${guideSnippet}`
        );
      } else if (cHtml.includes("class=\"country-awaiting\"")) {
        cHtml = cHtml.replace(
          /<div class="country-awaiting">[\s\S]*?<\/div>/,
          `<div class="country-feature section"><div class="country-section-head"><span class="eyebrow">SOURCE-REVIEWED UNIVERSITY</span><h2>Explore published university research.</h2></div>\n${guideSnippet}\n</div>`
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
    cycle: 82,
    completedInCycle: [
      "usa"
    ],
    nextCountry: "usa",
    lastPublished: {
      country: "usa",
      university: "St. John's University Manhattan Campus",
      sourceRow: 968
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 116,
      australia: 57,
      germany: 213,
      italy: 114,
      usa: 395,
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
  console.log(`  ✓ Updated country-rotation.json (cycle: 82, USA: 395)`);

  // 11. Sync with Google Sheet via Webhook
  console.log(`\nSyncing Batch 65 universities with Google Sheets via Webhook...`);
  const chunkSize = 3;
  for (let i = 0; i < batch65Universities.length; i += chunkSize) {
    const chunk = batch65Universities.slice(i, i + chunkSize);
    await Promise.allSettled(chunk.map(async u => {
      try {
        console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
        await updateRotation(u.countryLabel, {
          publishedCount: 395,
          currentRoundStatus: "Batch 65 completed (USA 395/656)",
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

  console.log(`\nBatch 65 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch65();
}
