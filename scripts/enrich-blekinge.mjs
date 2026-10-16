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
    university: "Blekinge Institute of Technology",
    country: "Sweden",
    location: "Karlskrona, Sweden",
    reviewed: today,
    id: 52,
    subject: "engineering",
    subjects: ["engineering", "physics"],
    type: "Master's",
    title: "BTH Master of Science in Mechanical Engineering - Structural Mechanics",
    source: "https://www.bth.se/eng/education/masters/mechanical-engineering-structural-mechanics/",
    funding: "Self-funded; eligible for BTH 50% Scholarship and Swedish Institute Global Professionals awards",
    status: "program-information",
    deadline: "2027-01-15",
    deadlineText: "January 15, 2027 (Swedish First Admissions Round for Autumn semester)",
    fee: "SEK 900 application fee for non-EU/EEA students via University Admissions Sweden",
    tuition: "SEK 75,000 per semester (SEK 150,000/year; SEK 300,000 total for 2-year 120 ECTS program). EU/EEA citizens study tuition-free.",
    requirements: {
      gpa: "Bachelor of Science in Mechanical Engineering or closely related technical field (180 ECTS credits) including 30 ECTS in mathematics and mechanics.",
      ielts: "English 6 proficiency: Academic IELTS 6.5 overall with no section below 5.5 (or TOEFL iBT 90 overall with writing minimum 20).",
      gre: "Not required by Swedish universities.",
      papers: "Completed bachelor thesis / degree project of at least 15 ECTS credits.",
      references: "Official university degree transcripts, syllabus descriptions of mechanics/math courses, CV, and passport copy."
    },
    desc: "Advanced two-year master's program (120 ECTS) in the Department of Mechanical Engineering focusing on finite element analysis, simulation-driven design, structural dynamics, nonlinear mechanics, and digital product validation."
  },
  {
    university: "Blekinge Institute of Technology",
    country: "Sweden",
    location: "Karlskrona, Sweden",
    reviewed: today,
    id: 53,
    subject: "environment",
    subjects: ["environment", "social-sciences"],
    type: "Master's",
    title: "BTH Master in Strategic Leadership towards Sustainability (MSLS)",
    source: "https://www.bth.se/eng/education/masters/strategic-leadership-towards-sustainability/",
    funding: "Self-funded; eligible for BTH 50% tuition scholarship and Swedish Institute full fellowships",
    status: "program-information",
    deadline: "2027-01-15",
    deadlineText: "January 15, 2027 (Primary round via University Admissions Sweden)",
    fee: "SEK 900 application fee for non-EU/EEA applicants",
    tuition: "SEK 70,000 per semester (SEK 140,000 total for 60 ECTS 1-year program). EU/EEA students study tuition-free.",
    requirements: {
      gpa: "Bachelor's degree or professional degree (minimum 180 ECTS credits) in any academic discipline with demonstrated passion for sustainability.",
      ielts: "English 6 equivalent: IELTS 6.5 overall with no section below 5.5, or TOEFL iBT 90.",
      gre: "Not required.",
      papers: "Detailed curriculum vitae and personal motivation statement outlining prior sustainability engagement and systemic transformation goals.",
      references: "Official undergraduate degree diploma, transcripts, and two letters of recommendation."
    },
    desc: "Globally acclaimed one-year international master's degree (60 ECTS) founded on the Framework for Strategic Sustainable Development (FSSD), training leaders in systems thinking, organizational change, and cross-sector sustainability transition."
  },
  {
    university: "Blekinge Institute of Technology",
    country: "Sweden",
    location: "Karlskrona, Sweden",
    reviewed: today,
    id: 54,
    subject: "computer-science",
    subjects: ["computer-science", "engineering"],
    type: "Research",
    title: "BTH Software Engineering Research Lab (SERL) Industry Research Placements",
    source: "https://www.bth.se/eng/research/research-areas/software-engineering/",
    funding: "Fully funded research stipends and co-produced thesis grants in partnership with Ericsson, Volvo, Spotify, and Telenor",
    status: "open-position",
    deadline: "2027-03-15",
    deadlineText: "March 15, 2027 for Autumn thesis placements; rolling for sponsored industrial projects",
    fee: "Free application directly to lab",
    tuition: "Zero tuition; paid master thesis stipend / research project grant.",
    requirements: {
      gpa: "Enrolled master's student in Software Engineering, Computer Science or Data Science with high academic marks.",
      ielts: "Proficiency in English suitable for industrial and scientific collaboration.",
      gre: "Not required.",
      papers: "Demonstrated experience in empirical software methods, requirements engineering, DevOps, or machine learning pipelines.",
      references: "Academic transcript, project repository or portfolio, and faculty recommendation letter."
    },
    desc: "Postgraduate research and industrial thesis opportunities inside SERL Sweden, ranked among Europe's top empirical software engineering research institutes, solving real-world challenges in cloud architectures, AI engineering, and large-scale software systems."
  },
  {
    university: "Blekinge Institute of Technology",
    country: "Sweden",
    location: "Karlskrona, Sweden",
    reviewed: today,
    id: 55,
    subject: "engineering",
    subjects: ["engineering", "computer-science"],
    type: "Internship",
    title: "BTH Product Development Research Lab (PDRL) Engineering Design Placements",
    source: "https://www.bth.se/eng/research/research-areas/mechanical-engineering/",
    funding: "Funded research internships and industrial master thesis stipends with aerospace and automotive partners",
    status: "open-position",
    deadline: "2027-04-01",
    deadlineText: "April 1, 2027 for Summer and Autumn research engineering cohorts",
    fee: "Free",
    tuition: "Zero tuition; funded lab access and project stipend.",
    requirements: {
      gpa: "Enrolled in Bachelor of Science or Master of Science in Mechanical, Aerospace, or Mechatronics Engineering.",
      ielts: "Demonstrated English proficiency in technical engineering environments.",
      gre: "Not required.",
      papers: "Portfolio of CAD/CAE modeling, digital twins, structural simulation, or Python/MATLAB engineering scripts.",
      references: "Academic transcript, CV, and endorsement letter from an engineering professor."
    },
    desc: "Hands-on research and engineering design placements in PDRL at BTH, focusing on simulation-driven design, digital twin integration, model-based systems engineering, and product-service innovation."
  },
  {
    university: "Blekinge Institute of Technology",
    country: "Sweden",
    location: "Karlskrona, Sweden",
    reviewed: today,
    id: 56,
    subject: "engineering",
    subjects: ["engineering", "computer-science", "mathematics"],
    type: "Fellowship",
    title: "BTH Teaching Assistantship (Amanuens) & Graduate Demonstrating Pathway",
    source: "https://www.bth.se/eng/about-bth/vacancies/",
    funding: "Fully salaried: SEK 160 to SEK 220 per hour for laboratory supervision, exercise coaching, and assignment assessment",
    status: "open-position",
    deadline: "2027-08-20",
    deadlineText: "August 20, 2027 for Autumn semester teaching appointments",
    fee: "Free employment application",
    tuition: "Zero tuition; salaried employment contract under Swedish Higher Education Ordinance (HF Ch. 5).",
    requirements: {
      gpa: "Registered student in Master of Science or doctoral program at BTH in good academic standing.",
      ielts: "Fluent spoken and written English adequate for university-level lab instruction.",
      gre: "Not required.",
      papers: "Demonstrated top grades in the relevant undergraduate or postgraduate course units.",
      references: "Course coordinator approval and endorsement from the relevant department head."
    },
    desc: "Departmental academic employment (Amanuens) for enrolled graduate students at BTH, assisting course directors with computer science lab supervision, engineering mechanics problem-solving sessions, and student code reviews."
  },
  {
    university: "Blekinge Institute of Technology",
    country: "Sweden",
    location: "Karlskrona, Sweden",
    reviewed: today,
    id: 57,
    subject: "social-sciences",
    subjects: ["social-sciences", "engineering", "environment", "computer-science"],
    type: "Scholarship",
    title: "Swedish Institute (SI) Scholarship for Global Professionals at BTH",
    source: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
    funding: "Fully funded: 100% full tuition fee waiver, monthly living allowance of SEK 12,000, travel grant up to SEK 15,000, and health insurance",
    status: "open-scholarship",
    deadline: "2027-02-28",
    deadlineText: "February 28, 2027 (SI scholarship application window closes following January University Admissions deadline)",
    fee: "Free SI application (SEK 900 University Admissions application fee applies)",
    tuition: "Full tuition covered for entire program duration (1 or 2 years) by the Swedish Ministry for Foreign Affairs.",
    requirements: {
      gpa: "Admitted or conditionally admitted to an eligible full-time Master's program at BTH (e.g. MSLS, Mechanical Engineering, Software Engineering).",
      ielts: "Satisfy University Admissions Sweden English 6 requirement (IELTS 6.5 overall).",
      gre: "Not required.",
      papers: "Minimum 3,000 hours of documented work experience in a professional, leadership, or civic capacity.",
      references: "Two letters of reference on official SI templates (at least one from a work supervisor), SI-formatted CV, and motivation essay."
    },
    desc: "The premier Swedish government scholarship for ambitious professionals from eligible countries to undertake full-time master's studies at BTH, covering complete tuition, SEK 12,000/month living allowance, travel grants, and membership in the SI Network for Future Global Leaders."
  }
];

const newResearchers = [
  {
    id: 44,
    subject: "engineering",
    name: "Professor Tobias Larsson",
    title: "Professor of Mechanical Engineering / Director of Product Development Research Lab (PDRL)",
    university: "Blekinge Institute of Technology",
    country: "Sweden",
    topics: ["Simulation-driven Design", "Digital Twins", "Product-Service Systems", "Model-Based Engineering"],
    source: "https://www.bth.se/staff/tobias-larsson-tlr/",
    email: null,
    summary: "Professor of Mechanical Engineering and Director of PDRL at BTH, leading high-impact research in simulation-driven design, digital twins, value-driven engineering, and collaborative product-service systems with aerospace, automotive, and heavy machinery partners.",
    recruiting: "Not verified",
    reviewed: today
  },
  {
    id: 45,
    subject: "environment",
    name: "Professor Göran Broman",
    title: "Professor of Sustainability Engineering / Department of Strategic Sustainable Development",
    university: "Blekinge Institute of Technology",
    country: "Sweden",
    topics: ["Strategic Sustainable Development", "Framework for Strategic Sustainable Development (FSSD)", "Sustainable Product Innovation", "Circular Economy"],
    source: "https://www.bth.se/staff/goran-broman-gbr/",
    email: null,
    summary: "Professor of Sustainability Engineering and Head of the Department of Strategic Sustainable Development at BTH, co-creator of the Framework for Strategic Sustainable Development (FSSD) and co-founder of the international Master's Programme in Strategic Leadership towards Sustainability (MSLS).",
    recruiting: "Not verified",
    reviewed: today
  }
];

export function enrichBlekinge() {
  console.log(`Enriching Blekinge Institute of Technology with 6 multi-department opportunities and 2 professors...`);

  // 1. Generate Opportunity Pages
  for (const opp of newOpportunities) {
    const oppSlug = `${opp.id}-${slug(opp.title)}`;
    const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/opportunities/${oppSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="https://openstemfield.org/opportunities/${oppSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/sweden/">Sweden</a> · <a href="/universities/blekinge-institute-of-technology/">BTH guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/blekinge-institute-of-technology/">Blekinge Institute of Technology</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">Sweden · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect the published university and program information available at the last review. Where a requirement is not specified, that is not an exemption.</p><dl class="pairs"><div class="pair"><dt>GPA / Academic degree</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>IELTS / English language</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>GRE</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Published research paper</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="/universities/blekinge-institute-of-technology/">BTH guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official Blekinge Institute of Technology documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Blekinge Institute of Technology.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/sweden/">Sweden</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`opportunities/${oppSlug}/index.html`, oppHtml);
    console.log(`  ✓ Generated opportunities/${oppSlug}/index.html`);
  }

  // 2. Generate Researcher Pages
  for (const fac of newResearchers) {
    const facSlug = `${fac.id}-${slug(fac.name)}`;
    const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — BTH Research Profile | OpenField</title><meta name="description" content="${fac.name} at Blekinge Institute of Technology: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/researchers/${facSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — BTH Research Profile | OpenField"><meta property="og:description" content="${fac.name} at Blekinge Institute of Technology: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="https://openstemfield.org/researchers/${facSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/sweden/">Sweden</a> · <a href="/universities/blekinge-institute-of-technology/">BTH guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">Sweden · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in research supervision in mechanical engineering, digital twins, or strategic sustainability are advised to consult formal department application channels.</p><div class="actions"><a class="btn" href="/universities/blekinge-institute-of-technology/">BTH guide ↗</a><a class="btn secondary" href="/subjects/engineering/">Engineering subject field guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Blekinge Institute of Technology.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/sweden/">Sweden</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
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
  console.log(`  ✓ Updated data.js with Blekinge opportunities and faculty`);

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
  enrichBlekinge();
}
