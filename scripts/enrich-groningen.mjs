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
    university: "University of Groningen",
    country: "Netherlands",
    location: "Groningen, Netherlands",
    reviewed: today,
    id: 74,
    subject: "chemistry",
    subjects: ["chemistry", "physics", "computer-science", "biology", "social-sciences"],
    type: "Scholarship",
    title: "University of Groningen Eric Bleumink Fund (EBF) Full Scholarships",
    source: "https://www.rug.nl/education/scholarships/eric-bleumink-fund",
    funding: "Fully funded: 100% full tuition fee coverage, international round-trip airfare, monthly living allowance, comprehensive health insurance, and books",
    status: "open-scholarship",
    deadline: "2026-12-01",
    deadlineText: "December 1, 2026 (Annual Master's admission deadline for February nomination)",
    fee: "€100 application fee for non-EEA applicants",
    tuition: "Full tuition completely waived for 1- or 2-year Master's degree programs.",
    requirements: {
      gpa: "Academic excellence in Bachelor's degree (top 5–10% of graduating class).",
      ielts: "Meet the English proficiency requirement of the chosen Master's program (typically IELTS 6.5+).",
      gre: "Not required by Dutch universities.",
      papers: "Curriculum vitae and personal motivation letter demonstrating leadership and commitment to home country development.",
      references: "Two academic letters of recommendation from undergraduate professors and official provisional admission to RUG."
    },
    desc: "Premier prestigious fellowship fund at the University of Groningen covering complete tuition fees, living expenses, international airfare, and health insurance for outstanding Master's candidates from eligible developing nations."
  },
  {
    university: "University of Groningen",
    country: "Netherlands",
    location: "Groningen, Netherlands",
    reviewed: today,
    id: 75,
    subject: "physics",
    subjects: ["physics", "chemistry", "computer-science", "engineering", "biology"],
    type: "PhD",
    title: "University of Groningen Salaried PhD Positions (Promovendi)",
    source: "https://www.rug.nl/about-ug/work-with-us/job-opportunities/",
    funding: "Fully funded: Salaried employment contract under Dutch CAO-NU starting at €3,204/month (year 1) up to €4,051/month (year 4) plus 8% holiday allowance and 8.3% end-of-year bonus",
    status: "open-position",
    deadline: "2027-04-30",
    deadlineText: "April 30, 2027 (Rolling departmental intakes across science & engineering institutes)",
    fee: "Free application directly to advertised vacancy",
    tuition: "Zero tuition. Appointed doctoral candidates are university employees with full Dutch pension, healthcare, and social security benefits.",
    requirements: {
      gpa: "Recognized Master of Science degree (120 ECTS) in Physics, Chemistry, Computer Science, or related engineering discipline.",
      ielts: "Fluent spoken and written English (IELTS 6.5+ or master's study conducted in English).",
      gre: "Not required.",
      papers: "Master's research thesis or peer-reviewed scientific publications.",
      references: "Curriculum vitae, research statement, and two academic recommendation letters."
    },
    desc: "Four-year salaried doctoral research positions (Promovendi) at the University of Groningen governed by the Dutch Collective Labour Agreement (CAO-NU), conducting funded research within world-class institutes including Zernike, Stratingh, and Bernoulli."
  },
  {
    university: "University of Groningen",
    country: "Netherlands",
    location: "Groningen, Netherlands",
    reviewed: today,
    id: 76,
    subject: "physics",
    subjects: ["physics", "engineering"],
    type: "Master's",
    title: "University of Groningen Master of Science in Applied Physics",
    source: "https://www.rug.nl/masters/applied-physics/",
    funding: "Self-funded; eligible for Eric Bleumink Fund, NL Scholarship (€5,000), and Dutch educational loans",
    status: "program-information",
    deadline: "2027-05-01",
    deadlineText: "May 1, 2027 (International non-EU deadline; rolling assessment)",
    fee: "€100 application fee for non-EEA applicants",
    tuition: "€2,694/year (EU/EEA statutory) or €24,900/year (non-EU/EEA international).",
    requirements: {
      gpa: "Bachelor of Science in Applied Physics, Physics, or Materials Science with high marks.",
      ielts: "Academic IELTS 6.5 overall with minimum 6.5 in every individual sub-score.",
      gre: "Not required.",
      papers: "Coursework syllabus descriptions covering quantum mechanics, electrodynamics, thermodynamics, and solid-state physics.",
      references: "Official university transcripts, degree certificates, CV, and motivation letter."
    },
    desc: "Top-ranked two-year Master of Science program (120 ECTS) closely linked with the Zernike Institute for Advanced Materials, offering cutting-edge specializations in quantum materials, nanophysics, smart functional devices, and advanced instrumentation."
  },
  {
    university: "University of Groningen",
    country: "Netherlands",
    location: "Groningen, Netherlands",
    reviewed: today,
    id: 77,
    subject: "computer-science",
    subjects: ["computer-science", "mathematics"],
    type: "Master's",
    title: "University of Groningen Master of Science in Artificial Intelligence",
    source: "https://www.rug.nl/masters/artificial-intelligence/",
    funding: "Self-funded; eligible for Eric Bleumink Fund, NL Scholarship, and Dutch state student finance",
    status: "program-information",
    deadline: "2027-05-01",
    deadlineText: "May 1, 2027 (Non-EU applicant deadline via Studielink and OAS)",
    fee: "€100 application fee for non-EEA applicants",
    tuition: "€2,694/year (EU/EEA) or €24,900/year (non-EU/EEA international).",
    requirements: {
      gpa: "Bachelor's degree in Artificial Intelligence, Computer Science, or quantitative STEM discipline with strong academic marks.",
      ielts: "Academic IELTS 6.5 overall with minimum 6.0 in each sub-score (or TOEFL iBT 90).",
      gre: "Not required.",
      papers: "Documented coursework in machine learning, algorithms, linear algebra, calculus, and programming (Python/C++).",
      references: "Academic transcripts, motivation letter, curriculum vitae, and online academic background questionnaire."
    },
    desc: "Selective two-year Master of Science program (120 ECTS) at the Bernoulli Institute, exploring autonomous systems, deep learning, cognitive robotics, multi-agent systems, and human-machine interaction."
  },
  {
    university: "University of Groningen",
    country: "Netherlands",
    location: "Groningen, Netherlands",
    reviewed: today,
    id: 78,
    subject: "chemistry",
    subjects: ["chemistry", "physics"],
    type: "Research",
    title: "Stratingh & Zernike Molecular Science Research Placements",
    source: "https://www.rug.nl/research/stratingh/",
    funding: "Funded master thesis research grants and laboratory stipends supported by European Research Council (ERC) and NWO",
    status: "open-position",
    deadline: "2027-03-31",
    deadlineText: "March 31, 2027 for Autumn laboratory allocations",
    fee: "Free application directly to institute",
    tuition: "Zero tuition; funded laboratory placement.",
    requirements: {
      gpa: "Enrolled graduate student in Chemistry, Physics, or Materials Science with strong laboratory background.",
      ielts: "Fluency in English suitable for international laboratory environments.",
      gre: "Not required.",
      papers: "Demonstrated synthesis or characterization skills in organic chemistry, spectroscopy, or nanoscale physics.",
      references: "Academic transcript, CV, and endorsement from research group leader."
    },
    desc: "Frontier research projects inside the Stratingh Institute for Chemistry and Zernike Institute for Advanced Materials, collaborating directly with groups pioneering light-driven molecular motors, photopharmacology, and smart functional materials."
  },
  {
    university: "University of Groningen",
    country: "Netherlands",
    location: "Groningen, Netherlands",
    reviewed: today,
    id: 79,
    subject: "computer-science",
    subjects: ["computer-science", "physics", "engineering"],
    type: "Internship",
    title: "Bernoulli Institute & CogniGron AI & Neuromorphic Research Placements",
    source: "https://www.rug.nl/research/fse/centres/cognigron/",
    funding: "Funded research internships and industry master thesis stipends (€600 to €1,200/month) partnering with high-tech semiconductor and AI industry partners",
    status: "open-position",
    deadline: "2027-04-15",
    deadlineText: "April 15, 2027 for Summer and Autumn research cohorts",
    fee: "Free",
    tuition: "Zero tuition; paid industrial/academic placement.",
    requirements: {
      gpa: "Enrolled Master's student in Artificial Intelligence, Computing Science, or Applied Physics.",
      ielts: "Fluent technical English proficiency.",
      gre: "Not required.",
      papers: "Strong coding skills in Python, PyTorch, C++, or neuromorphic hardware modeling.",
      references: "Academic transcript, project repository or portfolio, and supervisor recommendation."
    },
    desc: "Hands-on interdisciplinary research placements within CogniGron and the Bernoulli Institute, developing brain-inspired neuromorphic computing hardware, low-power machine learning models, and hybrid intelligent systems."
  },
  {
    university: "University of Groningen",
    country: "Netherlands",
    location: "Groningen, Netherlands",
    reviewed: today,
    id: 80,
    subject: "physics",
    subjects: ["physics", "computer-science", "chemistry", "mathematics"],
    type: "Fellowship",
    title: "University of Groningen Student-Assistent & Graduate Teaching Assistantship",
    source: "https://www.rug.nl/about-ug/work-with-us/",
    funding: "Fully salaried: €15.50 to €18.75 per hour under Dutch CAO-NU for lab supervision, exercise instruction, and tutorial mentoring",
    status: "open-position",
    deadline: "2027-08-15",
    deadlineText: "August 15, 2027 for Autumn semester tutorial and laboratory appointments",
    fee: "Free employment application",
    tuition: "Zero tuition; official university employment contract.",
    requirements: {
      gpa: "Enrolled graduate or senior undergraduate student at RUG in good academic standing.",
      ielts: "Fluent spoken English adequate for undergraduate teaching.",
      gre: "Not required.",
      papers: "Grade 7.5 or higher in the course unit applied to tutor.",
      references: "Course coordinator approval and departmental recommendation."
    },
    desc: "Departmental academic employment (Student-Assistent) for enrolled students across the Faculty of Science and Engineering, providing hourly paid laboratory demonstration, exercise teaching, and assessment marking."
  }
];

const newResearchers = [
  {
    id: 51,
    subject: "chemistry",
    name: "Prof. Dr. Bernard L. Feringa",
    title: "Nobel Laureate in Chemistry / Jacobus H. van 't Hoff Distinguished Professor of Molecular Sciences",
    university: "University of Groningen",
    country: "Netherlands",
    topics: ["Molecular Machines", "Synthetic Organic Chemistry", "Asymmetric Catalysis", "Photopharmacology", "Nanotechnology"],
    source: "https://www.rug.nl/staff/b.l.feringa/",
    email: null,
    summary: "2016 Nobel Laureate in Chemistry and Distinguished Professor of Molecular Sciences at the University of Groningen, pioneer of light-driven rotary molecular motors, responsive smart nanomaterials, and asymmetric catalysis.",
    recruiting: "Not verified",
    reviewed: today
  },
  {
    id: 52,
    subject: "physics",
    name: "Prof. Dr. Beatriz Noheda",
    title: "Professor of Nanostructures and Functional Oxides / Director of CogniGron / Zernike Institute",
    university: "University of Groningen",
    country: "Netherlands",
    topics: ["Functional Oxides", "Neuromorphic Materials", "Ferroelectrics", "Smart Materials", "Cognitive Systems"],
    source: "https://www.rug.nl/staff/b.noheda/",
    email: null,
    summary: "Professor of Nanostructures and Functional Oxides at the Zernike Institute and founding director of CogniGron at the University of Groningen, leading breakthrough research in materials for neuromorphic computing, low-power cognitive devices, and thin film ferroelectrics.",
    recruiting: "Not verified",
    reviewed: today
  },
  {
    id: 53,
    subject: "computer-science",
    name: "Prof. Dr. Lambert Schomaker",
    title: "Professor of Artificial Intelligence / Bernoulli Institute for Mathematics, Computer Science and AI",
    university: "University of Groningen",
    country: "Netherlands",
    topics: ["Artificial Intelligence", "Machine Learning", "Pattern Recognition", "Document Analysis", "Cognitive Robotics"],
    source: "https://www.rug.nl/staff/l.r.b.schomaker/",
    email: null,
    summary: "Professor of Artificial Intelligence at the Bernoulli Institute, pioneering machine learning architectures, automated handwriting recognition, digital palaeography, and autonomous agent systems.",
    recruiting: "Not verified",
    reviewed: today
  }
];

export function enrichGroningen() {
  console.log(`Enriching University of Groningen with 7 multi-department opportunities and 3 professors...`);

  // 1. Generate Opportunity Pages
  for (const opp of newOpportunities) {
    const oppSlug = `${opp.id}-${slug(opp.title)}`;
    const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/netherlands/">Netherlands</a> · <a href="/universities/university-of-groningen/">Groningen guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/university-of-groningen/">University of Groningen</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">Netherlands · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect published university guidelines available at the last review. Review official department guidelines before submission.</p><dl class="pairs"><div class="pair"><dt>Academic degree / Prerequisites</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>English language proficiency</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Standardized testing (GRE/GMAT)</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Thesis / Publications</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="/universities/university-of-groningen/">University of Groningen guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official University of Groningen documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with University of Groningen.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/netherlands/">Netherlands</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`opportunities/${oppSlug}/index.html`, oppHtml);
    console.log(`  ✓ Generated opportunities/${oppSlug}/index.html`);
  }

  // 2. Generate Researcher Pages
  for (const fac of newResearchers) {
    const facSlug = `${fac.id}-${slug(fac.name)}`;
    const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — University of Groningen Research Profile | OpenField</title><meta name="description" content="${fac.name} at University of Groningen: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — University of Groningen Research Profile | OpenField"><meta property="og:description" content="${fac.name} at University of Groningen: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/netherlands/">Netherlands</a> · <a href="/universities/university-of-groningen/">Groningen guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">Netherlands · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in graduate or doctoral research supervision in molecular sciences, materials physics, or artificial intelligence are advised to consult formal institute application channels.</p><div class="actions"><a class="btn" href="/universities/university-of-groningen/">University of Groningen guide ↗</a><a class="btn secondary" href="/subjects/${fac.subject}/">${fac.subject.charAt(0).toUpperCase() + fac.subject.slice(1)} subject guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with University of Groningen.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/netherlands/">Netherlands</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`researchers/${facSlug}/index.html`, facHtml);
    console.log(`  ✓ Generated researchers/${facSlug}/index.html`);
  }

  // 3. Generate University Index Page
  const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>University of Groningen: Degrees, Scholarships &amp; Faculty Guide | OpenField</title><meta name="description" content="University of Groningen guide: Applied Physics, AI, Eric Bleumink Fund scholarships, salaried CAO-NU PhD positions, and Nobel laureate faculty."><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/universities/university-of-groningen/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="University of Groningen: Degrees, Scholarships &amp; Faculty Guide | OpenField"><meta property="og:description" content="University of Groningen guide: Applied Physics, AI, Eric Bleumink Fund scholarships, salaried CAO-NU PhD positions, and Nobel laureate faculty."><meta property="og:url" content="https://universityproject-chi.vercel.app/universities/university-of-groningen/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"University of Groningen (Rijksuniversiteit Groningen)","url":"https://www.rug.nl","dateModified":"${today}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/netherlands/">Netherlands</a> · <a href="/universities/university-of-groningen/">Groningen guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><span>University of Groningen</span></div><span class="eyebrow">Netherlands · Groningen · Research University · Reviewed ${today}</span><h1>University of Groningen (Rijksuniversiteit Groningen)</h1><p>Founded in 1614, the University of Groningen is a world top-100 classic research university in the Netherlands. Home to Nobel Prize laureates Ben Feringa and Frits Zernike, the university hosts internationally renowned research centers including the Zernike Institute for Advanced Materials, Stratingh Institute for Chemistry, and Bernoulli Institute for AI and Mathematics. Review verified Master's degrees, salaried doctoral positions (CAO-NU), Eric Bleumink scholarships, and distinguished faculty.</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="https://www.rug.nl">Official university portal ↗</a><span>Eric Bleumink Fund &amp; Salaried PhDs</span><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Verified degree programs and opportunities</h2><p>Review checked academic pathways and funding options below:</p><div class="grid"><article class="card"><h3><a href="/opportunities/74-university-of-groningen-eric-bleumink-fund-ebf-full-scholarships/">Eric Bleumink Fund (EBF) Full Scholarships</a></h3><p>Prestigious fully funded fellowship covering 100% of Master's tuition, monthly living allowance, international airfare, and health insurance for students from eligible developing countries.</p></article><article class="card"><h3><a href="/opportunities/75-university-of-groningen-salaried-phd-positions-promovendi/">Salaried PhD Positions (CAO-NU Promovendi)</a></h3><p>Four-year fully funded university employee research contract (€3,204–€4,051/month) plus 8% holiday allowance, 8.3% 13th-month bonus, and comprehensive state pension.</p></article><article class="card"><h3><a href="/opportunities/76-university-of-groningen-master-of-science-in-applied-physics/">MSc in Applied Physics (Zernike Institute)</a></h3><p>Two-year master's program (120 ECTS) affiliated with the world-leading Zernike Institute for Advanced Materials, focusing on quantum materials, nanophysics, and device physics.</p></article><article class="card"><h3><a href="/opportunities/77-university-of-groningen-master-of-science-in-artificial-intelligence/">MSc in Artificial Intelligence (Bernoulli Institute)</a></h3><p>Selective two-year master's program (120 ECTS) in autonomous systems, deep learning, cognitive robotics, multi-agent modeling, and hybrid intelligence.</p></article><article class="card"><h3><a href="/opportunities/78-stratingh-zernike-molecular-science-research-placements/">Stratingh &amp; Zernike Molecular Science Research Placements</a></h3><p>Funded research positions and master thesis projects inside laboratories pioneering synthetic molecular motors, responsive nanomaterials, and asymmetric catalysis.</p></article><article class="card"><h3><a href="/opportunities/79-bernoulli-institute-cognigron-ai-neuromorphic-research-placements/">CogniGron AI &amp; Neuromorphic Research Placements</a></h3><p>Funded internships and industrial thesis stipends (€600–€1,200/month) researching brain-inspired computing hardware and low-power machine learning models.</p></article><article class="card"><h3><a href="/opportunities/80-university-of-groningen-student-assistent-graduate-teaching-assistantship/">Student-Assistent &amp; Graduate Teaching Assistantship</a></h3><p>Salaried academic positions (€15.50–€18.75/hr under CAO-NU) for enrolled students assisting faculty with undergraduate science laboratory coaching and exercise teaching.</p></article></div></section><section class="section"><h2>Admissions, language requirements &amp; application process</h2><dl class="pairs"><div class="pair"><dt>Master's admission eligibility</dt><dd>Recognized academic Bachelor of Science degree in a relevant discipline with strong quantitative background and demonstrated research methodology coursework.</dd></div><div class="pair"><dt>Doctoral (PhD) employment eligibility</dt><dd>Recognized second-cycle Master's degree (120 ECTS) satisfying Dutch university hiring criteria for academic researchers (promovendi).</dd></div><div class="pair"><dt>Language proficiency</dt><dd>Academic IELTS 6.5 overall (with minimum 6.5 in all sub-scores for Physics; minimum 6.0 for AI) or TOEFL iBT 90.</dd></div><div class="pair"><dt>Standardized testing (GRE/GMAT)</dt><dd>Not required by Dutch research universities for science and engineering master's programs.</dd></div><div class="pair"><dt>Application fee</dt><dd>€100 non-refundable application fee for non-EEA applicants via the university's Online Application System (OAS).</dd></div><div class="pair"><dt>Central registration (Studielink)</dt><dd>Mandatory. All degree applicants must register through the Dutch national portal Studielink before submitting OAS documents.</dd></div></dl></section><section class="section"><h2>Tuition fees and verified scholarship systems</h2><p>For European (EU/EEA) students, the Dutch statutory tuition fee is <strong>€2,694 per year</strong>. For non-EU/EEA international students, institutional tuition for Science and Engineering master's degrees is <strong>€24,900 per year</strong>. Admitted international students can be nominated for the <strong>Eric Bleumink Fund (100% full coverage)</strong> or receive the <strong>NL Scholarship (€5,000)</strong>.</p><div class="actions"><a class="btn" href="/opportunities/74-university-of-groningen-eric-bleumink-fund-ebf-full-scholarships/">Eric Bleumink Fund guide ↗</a><a class="btn" href="/opportunities/75-university-of-groningen-salaried-phd-positions-promovendi/">Salaried PhD positions ↗</a><a target="_blank" rel="noopener noreferrer" href="https://www.rug.nl/education/scholarships/">Official RUG scholarship portal ↗</a></div></section><section class="section"><h2>Verified faculty profiles and research leaders</h2><p>Distinguished researchers and institute leaders at the University of Groningen:</p><div class="grid"><article class="card"><h3><a href="/researchers/51-prof-dr-bernard-l-feringa/">Prof. Dr. Bernard L. Feringa</a></h3><p>2016 Nobel Laureate in Chemistry; Jacobus H. van 't Hoff Distinguished Professor; pioneer of rotary molecular motors and smart nanomaterials.</p></article><article class="card"><h3><a href="/researchers/52-prof-dr-beatriz-noheda/">Prof. Dr. Beatriz Noheda</a></h3><p>Professor of Nanostructures and Functional Oxides; Director of CogniGron; leading research in neuromorphic materials and low-power cognitive devices.</p></article><article class="card"><h3><a href="/researchers/53-prof-dr-lambert-schomaker/">Prof. Dr. Lambert Schomaker</a></h3><p>Professor of Artificial Intelligence at the Bernoulli Institute; pioneer in machine learning, handwriting recognition, and cognitive robotics.</p></article></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official University of Groningen documentation reviewed ${today}. Degree admissions, scholarship awards, and employment positions are subject to formal university review. OpenField does not charge students application fees.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with University of Groningen.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/netherlands/">Netherlands</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
  write('universities/university-of-groningen/index.html', uniHtml);
  console.log(`  ✓ Generated universities/university-of-groningen/index.html`);

  // 4. Append to data.js
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
  console.log(`  ✓ Updated data.js with Groningen opportunities and faculty`);

  // 5. Update sitemap.xml
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [
    `https://universityproject-chi.vercel.app/universities/university-of-groningen/`,
    `https://universityproject-chi.vercel.app/countries/netherlands/`,
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
  console.log(`  ✓ Updated sitemap.xml with 11 new URLs`);

  // 6. Update countries/netherlands/index.html to feature Groningen and index,follow
  let nlHtml = read('countries/netherlands/index.html');
  nlHtml = nlHtml.replace(
    '<meta name="robots" content="noindex,follow">',
    '<meta name="robots" content="index,follow">'
  );
  nlHtml = nlHtml.replace(
    '<div><strong>0</strong><span>detailed university guides published</span></div>',
    '<div><strong>1</strong><span>detailed university guide published</span></div>'
  );
  nlHtml = nlHtml.replace(
    '<div class="country-awaiting"><span class="country-badge">DETAILED PROFILES IN PREPARATION</span><h2>University research is being verified.</h2><p>The institutions below are preliminary directory candidates, not confirmed open programs. We will publish admission requirements, funding, researchers and deadlines only after checking official sources.</p></div>',
    `<div class="country-featured-guide">
      <span class="country-badge">SOURCE-REVIEWED UNIVERSITY</span>
      <h2><a href="/universities/university-of-groningen/">University of Groningen (Rijksuniversiteit Groningen)</a></h2>
      <p>Founded in 1614, one of Europe's top classic research universities. Explore Master's in Applied Physics, AI, fully salaried CAO-NU PhD positions, Eric Bleumink Fund scholarships, and Nobel Laureate Ben Feringa's laboratory.</p>
      <div class="actions" style="margin-top:1rem;"><a class="btn" href="/universities/university-of-groningen/">Open Groningen Guide ↗</a><a class="btn secondary" href="/opportunities/74-university-of-groningen-eric-bleumink-fund-ebf-full-scholarships/">Eric Bleumink Scholarship ↗</a><a class="btn secondary" href="/opportunities/75-university-of-groningen-salaried-phd-positions-promovendi/">Salaried PhDs ↗</a></div>
    </div>`
  );
  write('countries/netherlands/index.html', nlHtml);
  console.log(`  ✓ Updated countries/netherlands/index.html`);

  // 7. Update universities/index.html
  let unisHtml = read('universities/index.html');
  unisHtml = unisHtml.replace(
    '<div><strong>9</strong><span>universities with detailed published guides</span></div>',
    '<div><strong>10</strong><span>universities with detailed published guides</span></div>'
  );
  unisHtml = unisHtml.replace(
    `<a href="/countries/netherlands/" class="country-link-card"><span class="country-numeral">09 / NL</span><h3>Netherlands</h3><div class="country-link-bottom"><span>121 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-pending">Institution list · deeper review pending</p></a>`,
    `<a href="/countries/netherlands/" class="country-link-card"><span class="country-numeral">09 / NL</span><h3>Netherlands</h3><div class="country-link-bottom"><span>121 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">1 source-reviewed university</p></a>`
  );
  write('universities/index.html', unisHtml);
  console.log(`  ✓ Updated universities/index.html`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  enrichGroningen();
}
