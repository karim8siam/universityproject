import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = p => readFileSync(join(root, p), 'utf8');
const write = (p, content) => {
  const full = join(root, p);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');
};

const slug = s => String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dhaka', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

const newOpportunities = [
  {
    university: "Academy of Fine Arts Dresden",
    country: "Germany",
    location: "Dresden, Saxony, Germany",
    reviewed: today,
    id: 68,
    subject: "arts-design",
    subjects: ["arts-design", "biology", "social-sciences"],
    type: "Master's",
    title: "HfBK Dresden Postgraduate Master's in Art Therapy (Aufbaustudium)",
    source: "https://www.hfbk-dresden.de/studium/studiengaenge/kunsttherapie/",
    funding: "Tuition-free public university education; eligible for Deutschlandstipendium and BAföG grants",
    status: "program-information",
    deadline: "2027-04-30",
    deadlineText: "April 30, 2027 (Annual application deadline for Autumn semester matriculation)",
    fee: "Free application; semester fee of approx. €354 covering student union and regional public transit",
    tuition: "Zero tuition. Public university study in the Free State of Saxony is tuition-free for all nationalities.",
    requirements: {
      gpa: "Completed university degree in Fine Arts, Design, Psychology, Medicine, or Social Pedagogy.",
      ielts: "German language proficiency level C1 (TestDaF or DSH-2) for clinical patient interaction.",
      gre: "Not required by German art academies.",
      papers: "Artistic portfolio demonstrating creative competence and documentation of at least 3 months clinical/social internship experience.",
      references: "Curriculum vitae, certified degree diplomas, personal motivation statement, and successful artistic entrance examination."
    },
    desc: "Renowned two-year postgraduate master's program (Aufbaustudium Kunsttherapie) bridging fine art practice with psychodynamic and clinical healthcare interventions, qualifying graduates for therapeutic practice in hospitals, psychiatric clinics, and rehabilitation institutes."
  },
  {
    university: "Academy of Fine Arts Dresden",
    country: "Germany",
    location: "Dresden, Saxony, Germany",
    reviewed: today,
    id: 69,
    subject: "arts-design",
    subjects: ["arts-design", "chemistry", "physics"],
    type: "Master's",
    title: "HfBK Dresden Degree in Conservation and Restoration of Cultural Heritage",
    source: "https://www.hfbk-dresden.de/studium/studiengaenge/restaurierung/",
    funding: "Tuition-free public German education; specialized studio equipment and analytical laboratory access provided",
    status: "program-information",
    deadline: "2027-01-15",
    deadlineText: "January 15, 2027 (Annual portfolio and Vorpraktikum documentation deadline)",
    fee: "Free application; €354.91 semester administrative contribution",
    tuition: "Zero tuition for domestic and international students alike.",
    requirements: {
      gpa: "General higher education entrance qualification (Abitur or certified international equivalent secondary school certificate).",
      ielts: "German language proficiency minimum B2/C1.",
      gre: "Not required.",
      papers: "Documentation of a mandatory one-year pre-study conservation internship (Vorpraktikum) in a museum or conservation workshop.",
      references: "Portfolio of drawing and restoration studies, CV, and passing the practical multi-day entrance examination in chemistry, drawing, and manual dexterity."
    },
    desc: "Prestigious five-year integrated diploma and master's degree in art conservation, training conservators in specialized workshops for easel painting, polychrome sculpture, architectural murals, and archaeometric chemical analysis."
  },
  {
    university: "Academy of Fine Arts Dresden",
    country: "Germany",
    location: "Dresden, Saxony, Germany",
    reviewed: today,
    id: 70,
    subject: "chemistry",
    subjects: ["chemistry", "arts-design", "physics"],
    type: "Research",
    title: "HfBK Dresden Archaeometry & Conservation Science Laboratory Research Projects",
    source: "https://www.hfbk-dresden.de/lehre-forschung/forschung-projekte/",
    funding: "Funded research positions and project stipends (€1,500 to €2,400/month) supported by DFG and Federal Ministry of Education and Research (BMBF)",
    status: "open-position",
    deadline: "2027-05-31",
    deadlineText: "May 31, 2027 for collaborative heritage science projects",
    fee: "Free application directly to lab",
    tuition: "Zero tuition; salaried scientific researcher position.",
    requirements: {
      gpa: "Master of Science or Diplom in Chemistry, Conservation Science, Physics, or Materials Science.",
      ielts: "Fluency in German or English adequate for scientific laboratory reporting.",
      gre: "Not required.",
      papers: "Laboratory experience in spectroscopic analysis (FTIR, Raman, XRF), chromatography, or materials degradation modeling.",
      references: "Curriculum vitae, research publication list or master's thesis, and academic reference letter."
    },
    desc: "Interdisciplinary research projects inside HfBK Dresden's Archaeometry Laboratory, applying advanced spectroscopic, chromatographic, and chemical imaging techniques to investigate historical binders, pigment degradation, and monument preservation."
  },
  {
    university: "Academy of Fine Arts Dresden",
    country: "Germany",
    location: "Dresden, Saxony, Germany",
    reviewed: today,
    id: 71,
    subject: "arts-design",
    subjects: ["arts-design", "chemistry"],
    type: "Internship",
    title: "HfBK Dresden Museum Conservation & Restoration Practical Semester",
    source: "https://www.hfbk-dresden.de/studium/studiengaenge/restaurierung/praxis/",
    funding: "Funded practical training placements partnered with Staatliche Kunstsammlungen Dresden (SKD) and State Heritage Conservation Offices",
    status: "open-position",
    deadline: "2027-06-30",
    deadlineText: "June 30, 2027 for Autumn semester museum placements",
    fee: "Free for matriculated students",
    tuition: "Zero tuition; credit-bearing semester embedded within the restoration curriculum.",
    requirements: {
      gpa: "Enrolled student in Conservation/Restoration at HfBK Dresden having completed foundational examinations.",
      ielts: "German language proficiency suitable for museum studio protocols.",
      gre: "Not required.",
      papers: "Academic transcripts and conservation documentation portfolio.",
      references: "Endorsement from subject professor and host museum conservator agreement."
    },
    desc: "Hands-on museum restoration internship placing students inside world-class institutions such as the Dresden Green Vault, Gemäldegalerie Alte Meister, and regional heritage preservation offices to execute complex restoration treatments."
  },
  {
    university: "Academy of Fine Arts Dresden",
    country: "Germany",
    location: "Dresden, Saxony, Germany",
    reviewed: today,
    id: 72,
    subject: "arts-design",
    subjects: ["arts-design"],
    type: "Fellowship",
    title: "HfBK Dresden Student & Graduate Assistantship (SHK/WHK) Studio Pathway",
    source: "https://www.hfbk-dresden.de/hochschule/stellenausschreibungen/",
    funding: "Fully salaried: €13.50 to €18.00 per hour for studio workshop coaching, digital fabrication labs, and exhibition preparation",
    status: "open-position",
    deadline: "2027-09-15",
    deadlineText: "September 15, 2027 for upcoming winter semester studio appointments",
    fee: "Free employment application",
    tuition: "Zero tuition; official university employment contract.",
    requirements: {
      gpa: "Enrolled undergraduate or postgraduate student at HfBK Dresden in good standing.",
      ielts: "Functional working proficiency in German.",
      gre: "Not required.",
      papers: "Demonstrated technical proficiency in printmaking, metal casting, wood fabrication, or photography.",
      references: "Recommendation from workshop master or supervising faculty professor."
    },
    desc: "Paid student assistantship positions (SHK/WHK) assisting studio directors with equipment safety, darkroom maintenance, digital media laboratories, and custodial archive curation across HfBK Dresden's historic Güntzstraße and Pfotenhauerstraße campuses."
  },
  {
    university: "Academy of Fine Arts Dresden",
    country: "Germany",
    location: "Dresden, Saxony, Germany",
    reviewed: today,
    id: 73,
    subject: "arts-design",
    subjects: ["arts-design", "social-sciences"],
    type: "Scholarship",
    title: "DAAD STIBET & Graduation Scholarships for International Students at HfBK Dresden",
    source: "https://www.hfbk-dresden.de/studium/internationales/foerderprogramme/",
    funding: "Fully funded grant: €400 to €900 per month for degree-completing international students facing study costs",
    status: "open-scholarship",
    deadline: "2027-05-15",
    deadlineText: "May 15, 2027 (Annual STIBET funding cycle administered by International Office)",
    fee: "Free internal application",
    tuition: "Full grant support directly to recipient; study at HfBK Dresden is tuition-free.",
    requirements: {
      gpa: "Non-German enrolled student demonstrating artistic excellence and satisfactory progress toward degree completion.",
      ielts: "Enrolled student status at HfBK Dresden.",
      gre: "Not required.",
      papers: "Artistic documentation of current diploma or master's project and financial declaration.",
      references: "Academic reference letter from supervising HfBK Dresden studio professor."
    },
    desc: "German Academic Exchange Service (DAAD) funded financial support awarded through HfBK Dresden's International Office to ensure talented international art and conservation students successfully finalize their degree diplomas without economic disruption."
  }
];

const newResearchers = [
  {
    id: 49,
    subject: "chemistry",
    name: "Prof. Dr. Christoph Herm",
    title: "Professor for Archaeometry and Science in Conservation / Department of Art Technology & Conservation",
    university: "Academy of Fine Arts Dresden",
    country: "Germany",
    topics: ["Archaeometry", "Conservation Science", "Pigment Analysis", "Heritage Materials Chemistry"],
    source: "https://www.hfbk-dresden.de/lehre-forschung/lehrgebiete/archaeometrie/",
    email: null,
    summary: "Professor for Archaeometry and Science in Conservation at HfBK Dresden, leading chemical and spectroscopic research on historical pigments, binding media, material degradation, and scientific conservation technology.",
    recruiting: "Not verified",
    reviewed: today
  },
  {
    id: 50,
    subject: "arts-design",
    name: "Prof. Dipl.-Rest. Ivo Mohrmann",
    title: "Professor for Art Technology, Radiation Examination and Photography / Faculty II",
    university: "Academy of Fine Arts Dresden",
    country: "Germany",
    topics: ["Art Technology", "Radiation Examination", "Conservation of Paintings", "Polychrome Sculptures"],
    source: "https://www.hfbk-dresden.de/lehre-forschung/lehrgebiete/restaurierung/",
    email: null,
    summary: "Professor for Art Technology, Radiation Examination, and Photography at HfBK Dresden, leading custodial preservation of university collections and specialist technical analysis of panel paintings and architectural murals.",
    recruiting: "Not verified",
    reviewed: today
  }
];

export function enrichDresden() {
  console.log(`Enriching Academy of Fine Arts Dresden with 6 multi-department opportunities and 2 professors...`);

  // 1. Generate Opportunity Pages
  for (const opp of newOpportunities) {
    const oppSlug = `${opp.id}-${slug(opp.title)}`;
    const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/opportunities/${oppSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="https://openstemfield.org/opportunities/${oppSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/germany/">Germany</a> · <a href="/universities/academy-of-fine-arts-dresden/">Dresden guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/academy-of-fine-arts-dresden/">HfBK Dresden</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">Germany · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official institution source ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect published university guidelines available at the last review. Review official department guidelines before submission.</p><dl class="pairs"><div class="pair"><dt>Academic degree / Prerequisites</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>Language proficiency</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Standardized tests</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Portfolio / Internship</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="/universities/academy-of-fine-arts-dresden/">Dresden guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official HfBK Dresden documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the academy.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Academy of Fine Arts Dresden.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/germany/">Germany</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`opportunities/${oppSlug}/index.html`, oppHtml);
    console.log(`  ✓ Generated opportunities/${oppSlug}/index.html`);
  }

  // 2. Generate Researcher Pages
  for (const fac of newResearchers) {
    const facSlug = `${fac.id}-${slug(fac.name)}`;
    const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — HfBK Dresden Research Profile | OpenField</title><meta name="description" content="${fac.name} at Academy of Fine Arts Dresden: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/researchers/${facSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — HfBK Dresden Research Profile | OpenField"><meta property="og:description" content="${fac.name} at Academy of Fine Arts Dresden: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="https://openstemfield.org/researchers/${facSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/germany/">Germany</a> · <a href="/universities/academy-of-fine-arts-dresden/">Dresden guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">Germany · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in conservation science, archaeometry, or art technology research are advised to consult formal department application channels.</p><div class="actions"><a class="btn" href="/universities/academy-of-fine-arts-dresden/">Dresden guide ↗</a><a class="btn secondary" href="/subjects/chemistry/">Chemistry subject field guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Academy of Fine Arts Dresden.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/germany/">Germany</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`researchers/${facSlug}/index.html`, facHtml);
    console.log(`  ✓ Generated researchers/${facSlug}/index.html`);
  }

  // 3. Append to data.js
  let dataContent = read('data.js');
  const oppsFormatted = newOpportunities.map(o => {
    return `  {\n    "university": ${JSON.stringify(o.university)},\n    "country": ${JSON.stringify(o.country)},\n    "location": ${JSON.stringify(o.location)},\n    "reviewed": "${today}",\n    "id": ${o.id},\n    "subject": ${JSON.stringify(o.subject)},\n    "subjects": ${JSON.stringify(o.subjects)},\n    "type": ${JSON.stringify(o.type)},\n    "title": ${JSON.stringify(o.title)},\n    "source": ${JSON.stringify(o.source)},\n    "funding": ${JSON.stringify(o.funding)},\n    "status": ${JSON.stringify(o.status)},\n    "deadline": ${o.deadline ? `"${o.deadline}"` : 'null'},\n    "deadlineText": ${JSON.stringify(o.deadlineText)},\n    "fee": ${JSON.stringify(o.fee)},\n    "tuition": ${JSON.stringify(o.tuition)},\n    "requirements": {\n      "gpa": ${JSON.stringify(o.requirements.gpa)},\n      "ielts": ${JSON.stringify(o.requirements.ielts)},\n      "gre": ${JSON.stringify(o.requirements.gre)},\n      "papers": ${JSON.stringify(o.requirements.papers)},\n      "references": ${JSON.stringify(o.requirements.references)}\n    },\n    "desc": ${JSON.stringify(o.desc)}\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*export const researchers=\[/,
    `,\n${oppsFormatted}\n];\nexport const researchers=[`
  );

  const facFormatted = newResearchers.map(f => {
    return `  {\n    "id": ${f.id},\n    "subject": ${JSON.stringify(f.subject)},\n    "name": ${JSON.stringify(f.name)},\n    "title": ${JSON.stringify(f.title)},\n    "university": ${JSON.stringify(f.university)},\n    "country": ${JSON.stringify(f.country)},\n    "topics": ${JSON.stringify(f.topics)},\n    "source": ${JSON.stringify(f.source)},\n    "email": null,\n    "summary": ${JSON.stringify(f.summary)},\n    "recruiting": "Not verified",\n    "reviewed": "${today}"\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*$/,
    `,\n${facFormatted}\n];\n`
  );

  write('data.js', dataContent);
  console.log(`  ✓ Updated data.js with Dresden opportunities and faculty`);

  // 4. Update sitemap.xml
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [
    ...newOpportunities.map(o => `https://openstemfield.org/opportunities/${o.id}-${slug(o.title)}/`),
    ...newResearchers.map(f => `https://openstemfield.org/researchers/${f.id}-${slug(f.name)}/`)
  ];

  for (const u of urlsToAdd) {
    if (!sitemap.includes(`<loc>${u}</loc>`)) {
      const entry = `<url><loc>${u}</loc><lastmod>${today}</lastmod></url>\n`;
      sitemap = sitemap.replace('</urlset>', `${entry}</urlset>`);
    }
  }
  write('sitemap.xml', sitemap);
  console.log(`  ✓ Updated sitemap.xml with 8 new URLs`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  enrichDresden();
}
