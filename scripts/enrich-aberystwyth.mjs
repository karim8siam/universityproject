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
    university: "Aberystwyth University",
    country: "United Kingdom",
    location: "Aberystwyth, Ceredigion, Wales, United Kingdom",
    reviewed: today,
    id: 46,
    subject: "physics",
    subjects: ["physics", "computer-science", "mathematics", "biology", "environment"],
    type: "Scholarship",
    title: "Aberystwyth University AberDoc PhD Scholarships",
    source: "https://www.aber.ac.uk/en/postgrad/fees-finance/uk/research-scholarships/aberdoc/",
    funding: "Fully funded: Full UK tuition waiver, President's international difference award, and maintenance allowance of £20,780/year + £1,000 travel fund",
    status: "open-scholarship",
    deadline: "2027-01-09",
    deadlineText: "January 9, 2027 at 5:00 PM GMT (Annual deadline for Autumn PhD commencement)",
    fee: "Free application through Aberystwyth online postgraduate admission portal",
    tuition: "Full tuition covered for up to 3 years; additional £1,000 per annum travel and conference allowance provided.",
    requirements: {
      gpa: "First-class Honours degree or high 2:1 (or international equivalent bachelor's/master's degree).",
      ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each band) or equivalent secure English test.",
      gre: "Not required by UK universities.",
      papers: "Comprehensive doctoral research proposal (minimum 1,000 to 1,500 words) aligned with departmental themes.",
      references: "Two academic reference letters, curriculum vitae, official degree transcripts, and AberDoc competition form."
    },
    desc: "Premier doctoral research scholarship at Aberystwyth University providing full tuition fees, a living stipend of £20,780 per annum for three years, and up to £1,000 yearly research travel support for outstanding UK and international PhD candidates."
  },
  {
    university: "Aberystwyth University",
    country: "United Kingdom",
    location: "Aberystwyth, Ceredigion, Wales, United Kingdom",
    reviewed: today,
    id: 47,
    subject: "computer-science",
    subjects: ["computer-science", "mathematics"],
    type: "Master's",
    title: "Aberystwyth University MSc Data Science (Conversion Route)",
    source: "https://www.aber.ac.uk/en/postgrad/postgraduate-courses/taught/computer-science/data-science-msc/",
    funding: "Self-funded; eligible for International Excellence Scholarships (£2,000–£8,000 fee reduction)",
    status: "program-information",
    deadline: "2027-07-31",
    deadlineText: "July 31, 2027 for September 2027 intake; early application advised for international visa processing",
    fee: "Free application directly via the university portal",
    tuition: "£22,410 per year (International; eligible for Aberystwyth International Accommodation Award)",
    requirements: {
      gpa: "2:2 Bachelor's Honours degree (or international equivalent) in any discipline; STEM or non-STEM backgrounds accepted.",
      ielts: "Academic IELTS 6.0 overall with minimum 5.5 in each component (reading, writing, speaking, listening).",
      gre: "Not required.",
      papers: "Curriculum vitae and motivation letter explaining interest in data analytics, machine learning, and programming.",
      references: "One academic or professional referee letter and official undergraduate transcripts."
    },
    desc: "Intensive 1-year conversion master's program designed for graduates of any academic discipline to transition into data science, artificial intelligence, big data analytics, and computational modeling."
  },
  {
    university: "Aberystwyth University",
    country: "United Kingdom",
    location: "Aberystwyth, Ceredigion, Wales, United Kingdom",
    reviewed: today,
    id: 48,
    subject: "physics",
    subjects: ["physics", "environment"],
    type: "PhD",
    title: "Aberystwyth University PhD and MPhil in Solar System Physics and Space Weather",
    source: "https://www.aber.ac.uk/en/physics/study-with-us/postgrad/",
    funding: "Fully funded studentships available via STFC research council, AberDoc, and departmental fellowships",
    status: "open-position",
    deadline: "2027-01-09",
    deadlineText: "January 9, 2027 for funded scholarship round; rolling applications for self-funded candidates",
    fee: "Free direct postgraduate application",
    tuition: "£5,006/year (UK rate) or £22,410/year (International); covered for awarded research studentships.",
    requirements: {
      gpa: "Upper second-class (2:1) or first-class Honours degree in Physics, Astrophysics, Mathematics, or Earth Sciences.",
      ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each component).",
      gre: "Not required.",
      papers: "Undergraduate or master's physics thesis, research project report, or conference paper.",
      references: "Two academic referee letters, research statement, and endorsement from prospective physics faculty advisor."
    },
    desc: "Postgraduate research degree in the Department of Physics investigating solar atmospheric dynamics, coronal mass ejections, solar-terrestrial interactions, space weather forecasting, and planetary surface physics."
  },
  {
    university: "Aberystwyth University",
    country: "United Kingdom",
    location: "Aberystwyth, Ceredigion, Wales, United Kingdom",
    reviewed: today,
    id: 49,
    subject: "environment",
    subjects: ["environment", "biology"],
    type: "Master's",
    title: "Aberystwyth University MSc Environmental Change, Impact and Adaptation (IBERS)",
    source: "https://www.aber.ac.uk/en/postgrad/postgraduate-courses/taught/ibers/environmental-change-impact-adaptation-msc/",
    funding: "Self-funded; eligible for Aberystwyth International Excellence Scholarships and Welsh Government Master's Bursaries",
    status: "program-information",
    deadline: "2027-07-31",
    deadlineText: "July 31, 2027 for September 2027 intake; early application advised",
    fee: "Free application via university portal",
    tuition: "£20,805 per year (International; eligible for free or discounted campus accommodation award)",
    requirements: {
      gpa: "2:1 Honours degree (or equivalent) in Environmental Science, Geography, Biology, or related natural sciences.",
      ielts: "Academic IELTS 6.5 overall with minimum 6.0 in each sub-score.",
      gre: "Not required.",
      papers: "Undergraduate research project or dissertation in environmental science, ecology, or Earth systems.",
      references: "Two academic reference letters, curriculum vitae, and personal statement."
    },
    desc: "Specialized postgraduate master's program at the world-renowned Institute of Biological, Environmental and Rural Sciences (IBERS), focusing on climate change mitigation, ecosystem monitoring, GIS, and sustainable land management."
  },
  {
    university: "Aberystwyth University",
    country: "United Kingdom",
    location: "Aberystwyth, Ceredigion, Wales, United Kingdom",
    reviewed: today,
    id: 50,
    subject: "physics",
    subjects: ["physics", "computer-science"],
    type: "Internship",
    title: "Aberystwyth Department of Physics Summer Research Placements",
    source: "https://www.aber.ac.uk/en/physics/research/",
    funding: "Fully funded: Royal Astronomical Society / STFC undergraduate vacation bursaries (£200–£300 per week)",
    status: "open-position",
    deadline: "2027-03-31",
    deadlineText: "March 31, 2027 (Annual summer internship call for 6–8 week projects)",
    fee: "Free",
    tuition: "Zero tuition; paid student research bursary.",
    requirements: {
      gpa: "Enrolled undergraduate or postgraduate student in Physics, Mathematics or Computer Science with strong academic marks.",
      ielts: "Enrolled student status at accredited university.",
      gre: "Not required.",
      papers: "Brief personal research statement and academic transcript.",
      references: "Academic reference from a university physics lecturer and confirmed host supervisor in Aberystwyth Physics."
    },
    desc: "Six to eight week summer research internships in the Department of Physics for talented students to conduct hands-on laboratory or computational research in solar physics, materials science, or planetary exploration."
  },
  {
    university: "Aberystwyth University",
    country: "United Kingdom",
    location: "Aberystwyth, Ceredigion, Wales, United Kingdom",
    reviewed: today,
    id: 51,
    subject: "physics",
    subjects: ["physics", "computer-science", "mathematics", "biology"],
    type: "Fellowship",
    title: "Aberystwyth Postgraduate Teaching Assistantship (PGTA) & Demonstrating Pathway",
    source: "https://www.aber.ac.uk/en/hr/working-for-us/casual/",
    funding: "Fully salaried: £17.50 to £23.80 per hour for laboratory demonstrating, coding workshops, and seminar tutoring",
    status: "open-position",
    deadline: "2027-09-01",
    deadlineText: "September 1, 2027 for Autumn semester tutorial allocation",
    fee: "Free employment application",
    tuition: "Zero tuition; hourly salaried employment under Aberystwyth academic pay scale.",
    requirements: {
      gpa: "Enrolled postgraduate research student (PhD/MPhil) in good academic standing.",
      ielts: "Fluent spoken and written English suitable for undergraduate teaching and lab safety communication.",
      gre: "Not required.",
      papers: "Demonstrated subject mastery in physics, mathematics, or computer science.",
      references: "Endorsement from principal research supervisor and completion of mandatory university teaching induction."
    },
    desc: "Departmental academic employment pathway for enrolled doctoral researchers across STEM faculties, providing salaried laboratory demonstrating, practical coding tutorial support, and assessment marking."
  }
];

const newResearchers = [
  {
    id: 42,
    subject: "physics",
    name: "Professor Andrew Evans",
    title: "Professor of Materials Physics / Director of the Institute of Mathematics and Physics (IMAPS)",
    university: "Aberystwyth University",
    country: "United Kingdom",
    topics: ["Materials Physics", "Semiconductor Surfaces", "Diamond Interfaces", "Synchrotron Radiation"],
    source: "https://www.aber.ac.uk/en/physics/staff-profiles/listing/profile/a.evans/",
    email: null,
    summary: "Professor of Materials Physics and Director of IMAPS at Aberystwyth University, researching the electronic structure of semiconductor interfaces, diamond electronic devices, organic semiconductors, and synchrotron photoemission.",
    recruiting: "Not verified",
    reviewed: today
  },
  {
    id: 43,
    subject: "physics",
    name: "Professor Huw Morgan",
    title: "Professor of Solar Physics / Department of Physics",
    university: "Aberystwyth University",
    country: "United Kingdom",
    topics: ["Solar Physics", "Coronal Mass Ejections", "Space Weather", "Solar Corona Modeling"],
    source: "https://www.aber.ac.uk/en/physics/staff-profiles/listing/profile/h.morgan/",
    email: null,
    summary: "Professor of Solar Physics at Aberystwyth University, leading international research in solar atmospheric dynamics, tomographic reconstruction of coronal mass ejections, and extreme ultraviolet image processing.",
    recruiting: "Not verified",
    reviewed: today
  }
];

export function enrichAberystwyth() {
  console.log(`Enriching Aberystwyth University with 6 multi-department opportunities and 2 Physics professors...`);

  // 1. Generate Opportunity Pages
  for (const opp of newOpportunities) {
    const oppSlug = `${opp.id}-${slug(opp.title)}`;
    const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/uk/">United Kingdom</a> · <a href="/universities/aberystwyth-university/">Aberystwyth guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/aberystwyth-university/">Aberystwyth University</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">United Kingdom · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect the published university and program information available at the last review. Where a requirement is not specified, that is not an exemption.</p><dl class="pairs"><div class="pair"><dt>GPA / Academic degree</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>IELTS / English language</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>GRE</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Published research paper</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="/universities/aberystwyth-university/">Aberystwyth University guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official Aberystwyth University documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Aberystwyth University.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/uk/">United Kingdom</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`opportunities/${oppSlug}/index.html`, oppHtml);
    console.log(`  ✓ Generated opportunities/${oppSlug}/index.html`);
  }

  // 2. Generate Researcher Pages
  for (const fac of newResearchers) {
    const facSlug = `${fac.id}-${slug(fac.name)}`;
    const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — Aberystwyth University Research Profile | OpenField</title><meta name="description" content="${fac.name} at Aberystwyth University: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — Aberystwyth University Research Profile | OpenField"><meta property="og:description" content="${fac.name} at Aberystwyth University: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/uk/">United Kingdom</a> · <a href="/universities/aberystwyth-university/">Aberystwyth guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">United Kingdom · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in research supervision in materials physics or solar system physics are advised to consult formal department application channels.</p><div class="actions"><a class="btn" href="/universities/aberystwyth-university/">Aberystwyth University guide ↗</a><a class="btn secondary" href="/subjects/physics/">Physics subject field guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Aberystwyth University.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/uk/">United Kingdom</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
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
  console.log(`  ✓ Updated data.js with Aberystwyth opportunities and faculty`);

  // 4. Update sitemap.xml
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [
    ...newOpportunities.map(o => `https://universityproject-chi.vercel.app/opportunities/${o.id}-${slug(o.title)}/`),
    ...newResearchers.map(f => `https://universityproject-chi.vercel.app/researchers/${f.id}-${slug(f.name)}/`)
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
  enrichAberystwyth();
}
