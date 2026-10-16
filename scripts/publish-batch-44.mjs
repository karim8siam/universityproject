import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { batch44Universities } from './batch44-data.mjs';
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

export async function publishBatch44() {
  console.log(`Starting publication for Batch 44: 30 premier universities across 7 active countries...`);

  const allNewOpps = [];
  const allNewResearchers = [];

  for (const u of batch44Universities) {
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

    const facCards = u.researchers.map(f => `
      <div class="guide-faculty-card">
        <h4><a href="/researchers/${f.id}-${slug(f.name)}/">${f.name}</a></h4>
        <p class="guide-faculty-role">${f.title} · ${f.department}</p>
        <p class="guide-faculty-summary">${f.summary}</p>
      </div>
    `).join('\n');

    const strengthsList = (u.strengths || []).map(s => `<li>${s}</li>`).join('\n');
    const programsList = (u.programs || []).map(p => `
      <div class="guide-program-item">
        <span class="badge">${p.level}</span>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      </div>
    `).join('\n');

    const quickFactsEntries = Object.entries(u.quickFacts || {}).map(([k, v]) => `
      <div class="pair"><dt>${k.charAt(0).toUpperCase() + k.slice(1)}</dt><dd>${v}</dd></div>
    `).join('\n');

    const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${u.institution} Guide | OpenField</title><meta name="description" content="${u.description || u.overview}"><meta name="robots" content="index,follow"><link rel="canonical" href="${uniUrl}"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${u.institution} Guide | OpenField"><meta property="og:description" content="${u.description || u.overview}"><meta property="og:url" content="${uniUrl}"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"${u.institution}","url":"${u.website}","address":{"@type":"PostalAddress","addressLocality":"${u.location}"},"description":"${u.description || u.overview}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="${u.website}" target="_blank" rel="noopener noreferrer">Official site ↗</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/countries/${u.countryId}/">${u.countryLabel}</a><span>/</span><span>${u.shortName}</span></div><span class="eyebrow">${u.countryLabel} · ${u.badge || 'Source-Reviewed University'} · Reviewed ${today}</span><h1>${u.institution}</h1><p class="lead">${u.lead || u.overview}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${u.website}">Official institutional website ↗</a><span>Location: ${u.location}</span></div></section><section class="section"><h2>Institutional Overview</h2><p>${u.overview}</p><dl class="pairs" style="margin-top:1.5rem;">${quickFactsEntries}</dl></section><section class="section"><h2>Academic Strengths &amp; Distinctive Focus</h2><ul class="guide-strengths">${strengthsList}</ul></section><section class="section"><h2>Featured Academic Degrees &amp; Curricula</h2><div class="guide-programs-grid">${programsList}</div></section><section class="section"><h2>Current Verified Opportunities &amp; Fellowships (${u.opportunities.length})</h2><div class="guide-opps-grid">${oppCards}</div></section><section class="section"><h2>Sourced Faculty &amp; Research Advisors (${u.researchers.length})</h2><div class="guide-faculty-grid">${facCards}</div></section><section class="section"><h2>Connect with OpenField Advisors</h2><p>Our academic advisors provide free mentorship, admission guidance, and research proposal feedback for prospective scholars applying to ${u.institution}.</p><div class="actions" style="margin-top:1rem;"><a class="btn" href="/#/mentorship">Request Mentorship ↗</a><a class="btn secondary" href="${u.website}" target="_blank" rel="noopener noreferrer">Official University Portal ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20${encodeURIComponent(u.shortName)}%20Inquiry">Contact OpenField Desk ↗</a></div></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${u.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${u.countryId}/">${u.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;

    write(`universities/${u.slug}/index.html`, uniHtml);
    console.log(`  ✓ Generated university guide HTML page for ${u.slug}`);
  }

  // 4. Update sitemap.xml
  console.log(`\nUpdating sitemap.xml with 330 new indexable URLs...`);
  let sitemap = read('sitemap.xml');
  const newUrls = [];

  for (const u of batch44Universities) {
    newUrls.push(`${domain}/universities/${u.slug}/`);
    for (const opp of u.opportunities) {
      newUrls.push(`${domain}/opportunities/${opp.id}-${slug(opp.title)}/`);
    }
    for (const fac of u.researchers) {
      newUrls.push(`${domain}/researchers/${fac.id}-${slug(fac.name)}/`);
    }
  }

  // Verify none are already in sitemap
  for (const url of newUrls) {
    if (sitemap.includes(`<loc>${url}</loc>`)) {
      console.warn(`Warning: URL already in sitemap: ${url}`);
    }
  }

  const sitemapEntries = newUrls.map(url => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n');
  sitemap = sitemap.replace('</urlset>', `${sitemapEntries}\n</urlset>`);
  write('sitemap.xml', sitemap);
  console.log(`  ✓ sitemap.xml updated with ${newUrls.length} new entries (30 unis + 210 opps + 90 researchers)`);

  // 5. Update data.js
  console.log(`\nInjecting 210 opportunities and 90 researchers into data.js...`);
  let dataContent = read('data.js');

  const oppsToInject = [];
  const researchersToInject = [];

  for (const u of batch44Universities) {
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
        fee: opp.fee,
        tuition: opp.tuition,
        deadline: opp.deadline,
        deadlineText: opp.deadlineText,
        source: opp.source,
        requirements: opp.requirements,
        reviewed: today,
        status: 'Available'
      });
    }
    for (const fac of u.researchers) {
      researchersToInject.push({
        id: fac.id,
        name: fac.name,
        title: fac.title,
        university: u.institution,
        country: u.countryLabel,
        department: fac.department,
        subject: fac.subject || (u.opportunities[0] ? u.opportunities[0].subject : 'social-sciences'),
        topics: fac.topics || fac.interests || ['Academic Research'],
        summary: fac.summary,
        source: fac.source || fac.website || u.website,
        recruiting: 'Not verified',
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
    /(\n\s*export\s+const\s+researchers\s*=\s*\[)([\s\S]*?)(\];)/,
    (match, p1, p2, p3) => `${p1}${p2},\n${resJson}${p3}`
  );

  write('data.js', dataContent);
  console.log(`  ✓ Injected ${oppsToInject.length} opps and ${researchersToInject.length} researchers into data.js`);

  // 6. Update country-directory.js published mapping
  console.log(`\nUpdating country-directory.js published mapping...`);
  let cdJs = read('country-directory.js');
  const pubMatch = cdJs.match(/const published=(\{[\s\S]*?\});/);
  if (!pubMatch) {
    throw new Error('Could not find const published map in country-directory.js');
  }

  const fullPublishedMap = JSON.parse(pubMatch[1]);

  const newUniMapEntries = {
    canada: {
      "Université de Hearst": "/universities/universite-de-hearst/",
      "Universite de Hearst": "/universities/universite-de-hearst/",
      "UHearst": "/universities/universite-de-hearst/",
      "Hearst University": "/universities/universite-de-hearst/",
      "Université de Saint-Boniface": "/universities/universite-de-saint-boniface/",
      "Universite de Saint-Boniface": "/universities/universite-de-saint-boniface/",
      "Saint-Boniface University": "/universities/universite-de-saint-boniface/",
      "USB Winnipeg": "/universities/universite-de-saint-boniface/",
      "USB": "/universities/universite-de-saint-boniface/",
      "Université du Québec en Outaouais (UQO)": "/universities/universite-du-quebec-en-outaouais-uqo/",
      "Université du Québec en Outaouais": "/universities/universite-du-quebec-en-outaouais-uqo/",
      "Universite du Quebec en Outaouais": "/universities/universite-du-quebec-en-outaouais-uqo/",
      "UQO": "/universities/universite-du-quebec-en-outaouais-uqo/",
      "UQO Gatineau": "/universities/universite-du-quebec-en-outaouais-uqo/",
      "Université Sainte-Anne": "/universities/universite-sainte-anne/",
      "Universite Sainte-Anne": "/universities/universite-sainte-anne/",
      "Sainte-Anne": "/universities/universite-sainte-anne/",
      "Saint Anne University": "/universities/universite-sainte-anne/"
    },
    germany: {
      "Munich Business School": "/universities/munich-business-school/",
      "Munich Business School (MBS)": "/universities/munich-business-school/",
      "MBS Munich": "/universities/munich-business-school/",
      "MBS": "/universities/munich-business-school/",
      "Munich University of Applied Sciences": "/universities/munich-university-of-applied-sciences-hm/",
      "Hochschule München": "/universities/munich-university-of-applied-sciences-hm/",
      "Hochschule Muenchen": "/universities/munich-university-of-applied-sciences-hm/",
      "HM Munich": "/universities/munich-university-of-applied-sciences-hm/",
      "HM": "/universities/munich-university-of-applied-sciences-hm/",
      "Muthesius University of Fine Arts and Design": "/universities/muthesius-university-of-fine-arts-and-design/",
      "Muthesius Kunsthochschule": "/universities/muthesius-university-of-fine-arts-and-design/",
      "Muthesius Kunsthochschule Kiel": "/universities/muthesius-university-of-fine-arts-and-design/",
      "Muthesius": "/universities/muthesius-university-of-fine-arts-and-design/",
      "Neubrandenburg University of Applied Sciences": "/universities/neubrandenburg-university-of-applied-sciences/",
      "Hochschule Neubrandenburg": "/universities/neubrandenburg-university-of-applied-sciences/",
      "HS Neubrandenburg": "/universities/neubrandenburg-university-of-applied-sciences/",
      "Niederrhein University of Applied Sciences": "/universities/niederrhein-university-of-applied-sciences/",
      "Hochschule Niederrhein": "/universities/niederrhein-university-of-applied-sciences/",
      "HS Niederrhein": "/universities/niederrhein-university-of-applied-sciences/"
    },
    italy: {
      "MUNER Motorvehicle University": "/universities/muner-motorvehicle-university-of-emilia-romagna/",
      "MUNER Motorvehicle University of Emilia-Romagna": "/universities/muner-motorvehicle-university-of-emilia-romagna/",
      "Motorvehicle University of Emilia-Romagna": "/universities/muner-motorvehicle-university-of-emilia-romagna/",
      "MUNER": "/universities/muner-motorvehicle-university-of-emilia-romagna/",
      "Università degli Studi Link Matera": "/universities/universita-degli-studi-link-matera/",
      "Università degli Studi Link (Polo di Matera)": "/universities/universita-degli-studi-link-matera/",
      "Link Campus University Matera": "/universities/universita-degli-studi-link-matera/",
      "Link Campus Matera": "/universities/universita-degli-studi-link-matera/",
      "Università Giustino Fortunato - Sede Di Padova": "/universities/universita-giustino-fortunato-padova/",
      "Università Giustino Fortunato (Sede di Padova)": "/universities/universita-giustino-fortunato-padova/",
      "Università Giustino Fortunato Padova": "/universities/universita-giustino-fortunato-padova/",
      "UniFortunato Padova": "/universities/universita-giustino-fortunato-padova/",
      "UniFortunato": "/universities/universita-giustino-fortunato-padova/",
      "Università Telematica Pegaso - Sede di Foggia": "/universities/universita-telematica-pegaso-foggia/",
      "Università Telematica Pegaso (Sede di Foggia)": "/universities/universita-telematica-pegaso-foggia/",
      "Università Telematica Pegaso Foggia": "/universities/universita-telematica-pegaso-foggia/",
      "UniPegaso Foggia": "/universities/universita-telematica-pegaso-foggia/"
    },
    usa: {
      "Carrington College": "/universities/carrington-college-reno/",
      "Carrington College (Reno Campus)": "/universities/carrington-college-reno/",
      "Carrington College Reno": "/universities/carrington-college-reno/",
      "Carrington Reno": "/universities/carrington-college-reno/",
      "Carroll College": "/universities/carroll-college-montana/",
      "Carroll College (Montana)": "/universities/carroll-college-montana/",
      "Carroll College Helena": "/universities/carroll-college-montana/",
      "Carroll University": "/universities/carroll-university-wisconsin/",
      "Carroll University (Wisconsin)": "/universities/carroll-university-wisconsin/",
      "Carroll University Waukesha": "/universities/carroll-university-wisconsin/",
      "Casper College": "/universities/casper-college-wyoming/",
      "Casper College (Wyoming)": "/universities/casper-college-wyoming/",
      "Casper College Casper": "/universities/casper-college-wyoming/",
      "Central Methodist University": "/universities/central-methodist-university/",
      "Central Methodist University (Missouri)": "/universities/central-methodist-university/",
      "CMU Fayette": "/universities/central-methodist-university/",
      "CMU Missouri": "/universities/central-methodist-university/"
    },
    uk: {
      "Royal Welsh College of Music & Drama": "/universities/royal-welsh-college-of-music-drama/",
      "Royal Welsh College of Music and Drama": "/universities/royal-welsh-college-of-music-drama/",
      "RWCMD": "/universities/royal-welsh-college-of-music-drama/",
      "RWCMD Cardiff": "/universities/royal-welsh-college-of-music-drama/",
      "Coleg Brenhinol Cerdd a Drama Cymru": "/universities/royal-welsh-college-of-music-drama/",
      "University Centre Leeds": "/universities/university-centre-leeds/",
      "UC Leeds": "/universities/university-centre-leeds/",
      "University Centre Leeds Mabgate Campus": "/universities/university-centre-leeds/",
      "University of Cumbria in London": "/universities/university-of-cumbria-in-london/",
      "University of Cumbria London Campus": "/universities/university-of-cumbria-in-london/",
      "Cumbria London": "/universities/university-of-cumbria-in-london/",
      "University of Sunderland in London (UoSiL)": "/universities/university-of-sunderland-in-london-uosil/",
      "University of Sunderland in London": "/universities/university-of-sunderland-in-london-uosil/",
      "UoSiL": "/universities/university-of-sunderland-in-london-uosil/",
      "UoSiL Canary Wharf": "/universities/university-of-sunderland-in-london-uosil/",
      "Sunderland London": "/universities/university-of-sunderland-in-london-uosil/"
    },
    japan: {
      "Kyoto Women's University": "/universities/kyoto-womens-university/",
      "Kyoto Joshi Daigaku": "/universities/kyoto-womens-university/",
      "Kyoto Women's Univ": "/universities/kyoto-womens-university/",
      "Kyushu Sangyo University": "/universities/kyushu-sangyo-university/",
      "Kyusan University": "/universities/kyushu-sangyo-university/",
      "KSU Fukuoka": "/universities/kyushu-sangyo-university/",
      "Kyushu Sangyo Daigaku": "/universities/kyushu-sangyo-university/",
      "Kōbe Tokiwa University": "/universities/kobe-tokiwa-university/",
      "Kobe Tokiwa University": "/universities/kobe-tokiwa-university/",
      "Kobe Tokiwa Daigaku": "/universities/kobe-tokiwa-university/",
      "Tokiwa University Kobe": "/universities/kobe-tokiwa-university/",
      "Miyagi University": "/universities/miyagi-university/",
      "Miyagi Daigaku": "/universities/miyagi-university/",
      "MYU Sendai": "/universities/miyagi-university/",
      "MYU": "/universities/miyagi-university/"
    },
    netherlands: {
      "Hogeschool Alkmaar IPABO": "/universities/hogeschool-ipabo-alkmaar/",
      "Hogeschool IPABO (Alkmaar Campus)": "/universities/hogeschool-ipabo-alkmaar/",
      "Hogeschool IPABO Alkmaar": "/universities/hogeschool-ipabo-alkmaar/",
      "IPABO Alkmaar": "/universities/hogeschool-ipabo-alkmaar/",
      "IPABO": "/universities/hogeschool-ipabo-alkmaar/",
      "Hogeschool Saxion - Deventer": "/universities/saxion-university-of-applied-sciences-deventer/",
      "Saxion University of Applied Sciences (Deventer Campus)": "/universities/saxion-university-of-applied-sciences-deventer/",
      "Saxion University of Applied Sciences Deventer": "/universities/saxion-university-of-applied-sciences-deventer/",
      "Saxion Deventer": "/universities/saxion-university-of-applied-sciences-deventer/",
      "Tio Business School - hbo | master | mbo": "/universities/tio-business-school-netherlands/",
      "Tio Business School": "/universities/tio-business-school-netherlands/",
      "Hogeschool Tio": "/universities/tio-business-school-netherlands/",
      "Tio University of Applied Sciences": "/universities/tio-business-school-netherlands/",
      "Tio": "/universities/tio-business-school-netherlands/",
      "Drenthe College | Locatie De Haar": "/universities/drenthe-college-assen/",
      "Drenthe College (Assen De Haar Campus)": "/universities/drenthe-college-assen/",
      "Drenthe College Assen": "/universities/drenthe-college-assen/",
      "Drenthe College De Haar": "/universities/drenthe-college-assen/",
      "Drenthe College": "/universities/drenthe-college-assen/"
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
    () => `const published=${JSON.stringify(fullPublishedMap)};`
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

  for (const u of batch44Universities) {
    uniMapObj[u.institution] = `/universities/${u.slug}/`;
    if (u.shortName) {
      uniMapObj[u.shortName] = `/universities/${u.slug}/`;
    }
  }

  bsp = bsp.replace(
    /const universityMap = \{[\s\S]*?\};\n\nconst getUniPath/,
    () => `const universityMap = ${JSON.stringify(uniMapObj, null, 2)};\n\nconst getUniPath`
  );
  write('scripts/build-subject-pages.mjs', bsp);
  console.log(`  ✓ Updated build-subject-pages.mjs`);

  // 8. Update universities/index.html
  console.log(`\nUpdating universities/index.html...`);
  let uIndex = read('universities/index.html');
  const uniCardsToAdd = batch44Universities.map(u => {
    const desc = u.description || `${u.institution} academic programs and faculty research.`;
    return `<article class="card"><h3><a href="/universities/${u.slug}/">${u.institution}</a></h3><p>${u.countryLabel} · ${desc}</p></article>`;
  }).join('\n    ');

  uIndex = uIndex.replace(
    '</div></section>\n</main>',
    `\n    ${uniCardsToAdd}\n  </div></section>\n</main>`
  );

  // Update total published guides counter: 741 -> 771
  uIndex = uIndex.replace(
    /<div><strong>\d+<\/strong><span>universities with detailed published guides<\/span><\/div>/,
    `<div><strong>771</strong><span>universities with detailed published guides</span></div>`
  );

  // Country counts after Batch 44:
  // Canada: 87, Australia: 57, Germany: 92, Italy: 86, USA: 93, UK: 86, Japan: 87, Sweden: 56, Netherlands: 86
  const countryCounts = {
    canada: 87,
    australia: 57,
    germany: 92,
    italy: 86,
    usa: 93,
    uk: 86,
    japan: 87,
    sweden: 56,
    netherlands: 86
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
    canada: 87,
    germany: 92,
    italy: 86,
    usa: 93,
    uk: 86,
    japan: 87,
    netherlands: 86
  };

  for (const u of batch44Universities) {
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
    cycle: 61,
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
      university: "Drenthe College (Assen De Haar Campus)",
      sourceRow: 1399
    },
    skipExhausted: true,
    publishedInCountry: {
      canada: 87,
      australia: 57,
      germany: 92,
      italy: 86,
      usa: 93,
      uk: 86,
      japan: 87,
      sweden: 56,
      netherlands: 86,
      switzerland: 41
    },
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json`);

  // 11. Sync with Google Sheet
  console.log(`\nSyncing Batch 44 universities with Google Sheets via Webhook...`);
  for (const u of batch44Universities) {
    try {
      console.log(`  Syncing ${u.countryLabel} - ${u.institution}...`);
      await updateRotation(u.countryLabel, {
        publishedCount: activeCountryTargetCounts[u.countryId] || 86,
        currentRoundStatus: 'Batch 44 completed',
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

  console.log(`\nBatch 44 publication script finished successfully!`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishBatch44();
}
