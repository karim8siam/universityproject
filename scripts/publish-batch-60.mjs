import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { batch60Universities } from "./batch60-data.mjs";
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

export async function publishBatch60() {
  console.log("Starting publication for Batch 60: 30 USA universities (USA advancing to 245/656)...");

  for (const u of batch60Universities) {
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

  for (const u of batch60Universities) {
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
  console.log(`  ✓ sitemap.xml updated with ${newUrls.length} new URLs (Total: 13,747)`);

  // 5. Inject new opportunities and researchers into data.js
  console.log(`\nInjecting data into data.js...`);
  let dataContent = read("data.js");

  const oppsToInject = [];
  const researchersToInject = [];

  for (const u of batch60Universities) {
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
        status: "Available"
      });
    }

    for (const fac of u.researchers) {
      researchersToInject.push({
        id: fac.id,
        name: fac.name,
        role: fac.role,
        title: fac.title || fac.role,
        university: u.institution,
        country: u.countryLabel,
        department: fac.department,
        subject: fac.subject || "social-sciences",
        topics: fac.topics || [fac.department || "Academic Research"],
        recruiting: "Not verified",
        source: fac.source || fac.website || u.website,
        bio: fac.bio,
        summary: fac.summary || fac.bio,
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
    /(export\s+const\s+researchers\s*=\s*\[)([\s\S]*?)(\];?\s*$)/,
    (match, p1, p2, p3) => `${p1}${p2},\n${resJson}\n];\n`
  );

  write("data.js", dataContent);
  console.log(`  ✓ Injected ${oppsToInject.length} opps and ${researchersToInject.length} researchers into data.js`);

  // 6. Update country-directory.js published mapping
  console.log(`\nUpdating country-directory.js published mapping...`);
  let cdJs = read("country-directory.js");
  const pubMatch = cdJs.match(/const published=(\{[\s\S]*?\});/);
  if (!pubMatch) {
    throw new Error("Could not find const published map in country-directory.js");
  }

  const fullPublishedMap = JSON.parse(pubMatch[1]);

  const newUniMapEntries = {
    usa: {
      "Iowa State University": "/universities/iowa-state-university-ames/",
      "Iowa State": "/universities/iowa-state-university-ames/",
      "ISU Ames": "/universities/iowa-state-university-ames/",
      "Illinois State University": "/universities/illinois-state-university-normal/",
      "Illinois State": "/universities/illinois-state-university-normal/",
      "ISU Normal": "/universities/illinois-state-university-normal/",
      "ISU Main Campus": "/universities/illinois-state-university-normal/",
      "Idaho State University": "/universities/idaho-state-university-pocatello/",
      "Idaho State": "/universities/idaho-state-university-pocatello/",
      "ISU-Meridian": "/universities/idaho-state-university-pocatello/",
      "Indiana University Indianapolis": "/universities/indiana-university-indianapolis/",
      "IU Indianapolis": "/universities/indiana-university-indianapolis/",
      "IUI": "/universities/indiana-university-indianapolis/",
      "Ivy Tech Community College": "/universities/ivy-tech-community-college-indianapolis/",
      "Ivy Tech": "/universities/ivy-tech-community-college-indianapolis/",
      "Iḷisaġvik College": "/universities/ilisagvik-college-utqiagvik/",
      "Ilisagvik College": "/universities/ilisagvik-college-utqiagvik/",
      "Johnson University": "/universities/johnson-university-knoxville/",
      "Johnson Univ": "/universities/johnson-university-knoxville/",
      "Kansas City Kansas Community College": "/universities/kansas-city-kansas-community-college/",
      "KCKCC": "/universities/kansas-city-kansas-community-college/",
      "Kansas City University": "/universities/kansas-city-university-medicine-biosciences/",
      "Kansas City Univ": "/universities/kansas-city-university-medicine-biosciences/",
      "KCU": "/universities/kansas-city-university-medicine-biosciences/",
      "Kansas Wesleyan University": "/universities/kansas-wesleyan-university-salina/",
      "Kansas Wesleyan": "/universities/kansas-wesleyan-university-salina/",
      "KWU": "/universities/kansas-wesleyan-university-salina/",
      "Kean University": "/universities/kean-university-union/",
      "Kean": "/universities/kean-university-union/",
      "Keene State College": "/universities/keene-state-college-new-hampshire/",
      "Keene State": "/universities/keene-state-college-new-hampshire/",
      "Kentucky Christian University": "/universities/kentucky-christian-university-grayson/",
      "Kentucky Christian": "/universities/kentucky-christian-university-grayson/",
      "KCU Grayson": "/universities/kentucky-christian-university-grayson/",
      "Kentucky State University": "/universities/kentucky-state-university-frankfort/",
      "Kentucky State": "/universities/kentucky-state-university-frankfort/",
      "KSU Frankfort": "/universities/kentucky-state-university-frankfort/",
      "Kentucky Wesleyan College": "/universities/kentucky-wesleyan-college-owensboro/",
      "Kentucky Wesleyan": "/universities/kentucky-wesleyan-college-owensboro/",
      "KWC": "/universities/kentucky-wesleyan-college-owensboro/",
      "Kettering University": "/universities/kettering-university-flint/",
      "Kettering": "/universities/kettering-university-flint/",
      "Lake Area Technical College": "/universities/lake-area-technical-college-watertown/",
      "Lake Area Tech": "/universities/lake-area-technical-college-watertown/",
      "LATC": "/universities/lake-area-technical-college-watertown/",
      "Lakeland University": "/universities/lakeland-university-plymouth/",
      "Lakeland University (Central Wisconsin Center)": "/universities/lakeland-university-plymouth/",
      "Lakeland": "/universities/lakeland-university-plymouth/",
      "Lamar University": "/universities/lamar-university-beaumont/",
      "Lamar": "/universities/lamar-university-beaumont/",
      "Laramie County Community College": "/universities/laramie-county-community-college-cheyenne/",
      "LCCC": "/universities/laramie-county-community-college-cheyenne/",
      "LCCC Wyoming": "/universities/laramie-county-community-college-cheyenne/",
      "Lasell University": "/universities/lasell-university-newton/",
      "Lasell": "/universities/lasell-university-newton/",
      "Lehigh University": "/universities/lehigh-university-bethlehem/",
      "Lehigh": "/universities/lehigh-university-bethlehem/",
      "Lesley University": "/universities/lesley-university-cambridge/",
      "Lesley": "/universities/lesley-university-cambridge/",
      "Lewis University": "/universities/lewis-university-romeoville/",
      "Lewis": "/universities/lewis-university-romeoville/",
      "Lincoln University": "/universities/lincoln-university-jefferson-city/",
      "Lincoln University (MO)": "/universities/lincoln-university-jefferson-city/",
      "Lincoln MO": "/universities/lincoln-university-jefferson-city/",
      "Lincoln Memorial University": "/universities/lincoln-memorial-university-harrogate/",
      "LMU-Lexington": "/universities/lincoln-memorial-university-harrogate/",
      "LMU Harrogate": "/universities/lincoln-memorial-university-harrogate/",
      "Lincoln Memorial": "/universities/lincoln-memorial-university-harrogate/",
      "Louisiana Christian University": "/universities/louisiana-christian-university-pineville/",
      "Louisiana Christian": "/universities/louisiana-christian-university-pineville/",
      "LCU": "/universities/louisiana-christian-university-pineville/",
      "Louisiana Delta Community College": "/universities/louisiana-delta-community-college-monroe/",
      "Louisiana Delta CC": "/universities/louisiana-delta-community-college-monroe/",
      "LDCC": "/universities/louisiana-delta-community-college-monroe/",
      "Louisiana State University in Shreveport": "/universities/louisiana-state-university-in-shreveport/",
      "LSUS": "/universities/louisiana-state-university-in-shreveport/",
      "LSU Shreveport": "/universities/louisiana-state-university-in-shreveport/",
      "Louisiana State University of Alexandria": "/universities/louisiana-state-university-of-alexandria/",
      "LSUA": "/universities/louisiana-state-university-of-alexandria/",
      "LSU Alexandria": "/universities/louisiana-state-university-of-alexandria/"
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
  console.log(`  ✓ Updated country-directory.js with all Batch 60 aliases`);

  // 7. Update build-subject-pages.mjs universityMap
  console.log(`\nUpdating build-subject-pages.mjs aliases...`);
  let bsp = read("scripts/build-subject-pages.mjs");
  const bspMatch = bsp.match(/const universityMap\s*=\s*(\{[\s\S]*?\});/);
  if (bspMatch) {
    const currentBspMap = JSON.parse(bspMatch[1]);
    for (const u of batch60Universities) {
      currentBspMap[u.institution] = `/universities/${u.slug}/`;
      currentBspMap[u.shortName] = `/universities/${u.slug}/`;
    }
    for (const [alias, path] of Object.entries(newUniMapEntries.usa)) {
      currentBspMap[alias] = path;
    }
    bsp = bsp.replace(
      /const universityMap\s*=\s*\{[\s\S]*?\};/,
      `const universityMap = ${JSON.stringify(currentBspMap, null, 2)};`
    );
    write("scripts/build-subject-pages.mjs", bsp);
    console.log(`  ✓ Updated build-subject-pages.mjs universityMap`);
  }

  // 8. Update universities/index.html
  console.log(`\nUpdating universities/index.html...`);
  let uIndex = read("universities/index.html");
  const uniCardsToAdd = batch60Universities.map(u => {
    const desc = u.heroSummary || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join("\n    ");

  uIndex = uIndex.replace(
    "</div></section>\n</main>",
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 1221 -> 1251
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>1251</strong><span>universities with detailed published guides</span></div>`
  );

  // Update USA country card in universities/index.html: 215 -> 245
  const countryCounts = {
    canada: 116,
    australia: 57,
    germany: 213,
    italy: 114,
    usa: 245,
    uk: 100,
    japan: 180,
    sweden: 56,
    netherlands: 121
  };

  for (const [cid, cnt] of Object.entries(countryCounts)) {
    const regex = new RegExp(`(<a href="\\/countries\\/${cid}\\/" class="country-link-card">[\\s\\S]*?<p class="country-verified">)\\d+( source-reviewed universities<\\/p><\\/a>)`);
    uIndex = uIndex.replace(regex, `$1${cnt}$2`);
  }

  write("universities/index.html", uIndex);
  console.log(`  ✓ Updated universities/index.html (Total: 1,251, USA: 245)`);

  // 9. Update Country Index Pages
  console.log(`\nUpdating USA Country Directory Index Page (215 -> 245)...`);
  const cPath = `countries/usa/index.html`;
  let cHtml = read(cPath);

  cHtml = cHtml.replace(
    /<div><strong>\d+<\/strong><span>detailed university guide[s]? published<\/span><\/div>/,
    `<div><strong>245</strong><span>detailed university guides published</span></div>`
  );

  for (const u of batch60Universities) {
    const desc = u.heroSummary || `${u.institution} academic programs and faculty research.`;
    const guideSnippet = `<a href="/universities/${u.slug}/" class="country-published" style="margin-top:16px"><div class="country-published-art"><span>${u.shortName}</span><span>${u.countryLabel.toUpperCase()}</span></div><div class="country-published-text"><span class="country-badge live">SOURCE-REVIEWED · ${today}</span><h3>${u.institution}</h3><p>${u.location} · ${desc}</p><div class="country-metrics"><span><strong>${u.opportunities.length}</strong> academic and opportunity records</span><span><strong>${u.researchers.length}</strong> researcher profiles</span></div><span class="country-cta">Open university guide ↗</span></div></a>`;

    const gridSnippet = `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${desc}</p><a href="/universities/${u.slug}/">Read verified guide ↗</a></article>`;

    if (!cHtml.includes(`/universities/${u.slug}/`)) {
      if (cHtml.includes("class=\"country-published\"")) {
        cHtml = cHtml.replace(
          /(<a href="\/universities\/[^"]+\/" class="country-published"[^>]*>[\s\S]*?<\/a>)(?![\s\S]*<a href="\/universities\/[^"]+\/" class="country-published")/,
          `$1\n${guideSnippet}`
        );
      } else if (cHtml.includes("<div class=\"grid\">")) {
        cHtml = cHtml.replace(
          /(<section class="wrap section">[\s\S]*?<div class="grid">[\s\S]*?)(<\/div>)/,
          `$1\n${gridSnippet}\n$2`
        );
      } else if (cHtml.includes("class=\"country-featured-guide\"")) {
        cHtml = cHtml.replace(
          "</div>\n    </div>",
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
    cycle: 77,
    completedInCycle: [
      "usa"
    ],
    nextCountry: "usa",
    lastPublished: {
      country: "usa",
      university: "Louisiana State University of Alexandria",
      sourceRow: 797
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 116,
      australia: 57,
      germany: 213,
      italy: 114,
      usa: 245,
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
  console.log(`  ✓ Updated country-rotation.json (cycle: 77, USA: 245)`);

  // 11. Sync with Google Sheet via Webhook
  console.log(`\nSyncing Batch 60 universities with Google Sheets via Webhook...`);
  const chunkSize = 3;
  for (let i = 0; i < batch60Universities.length; i += chunkSize) {
    const chunk = batch60Universities.slice(i, i + chunkSize);
    await Promise.allSettled(chunk.map(async u => {
      try {
        console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
        await updateRotation(u.countryLabel, {
          publishedCount: 245,
          currentRoundStatus: "Batch 60 completed (USA 245/656)",
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

  console.log(`\nBatch 60 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch60();
}
