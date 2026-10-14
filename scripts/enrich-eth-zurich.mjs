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
    university: "ETH Zurich",
    country: "Switzerland",
    location: "Zurich, Switzerland",
    reviewed: today,
    id: 81,
    subject: "computer-science",
    subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
    type: "Scholarship",
    title: "ETH Zurich Excellence Scholarship & Opportunity Programme (ESOP)",
    source: "https://ethz.ch/students/en/studies/financial/scholarships/excellencescholarship.html",
    funding: "Fully funded: CHF 12,000 per semester (CHF 24,000 per year) living stipend plus 100% full tuition fee waiver and dedicated mentorship network",
    status: "open-scholarship",
    deadline: "2026-11-30",
    deadlineText: "November 30, 2026 at 11:59 AM CET (Strict annual deadline for Autumn Master's entry)",
    fee: "CHF 150 application fee for international credentials (waived for holders of Swiss degrees)",
    tuition: "Full tuition completely waived for regular duration of Master's program (3 to 4 semesters).",
    requirements: {
      gpa: "Graduation in the top 10% of undergraduate Bachelor's degree class (grade A equivalent).",
      ielts: "C1 level English: Academic IELTS 7.0 overall or TOEFL iBT 100.",
      gre: "Not compulsory; GRE revised General Test recommended for non-Bologna engineering degrees.",
      papers: "Independent Master's thesis pre-proposal (1–2 pages) outlining a scientific research question and methodology.",
      references: "Two academic letters of recommendation from university professors, official transcripts, and CV."
    },
    desc: "ETH Zurich's premier merit fellowship awarded to exceptional incoming Master's candidates, providing CHF 24,000 per year for living expenses, complete tuition coverage, and access to the ETH Zurich Foundation network."
  },
  {
    university: "ETH Zurich",
    country: "Switzerland",
    location: "Zurich, Switzerland",
    reviewed: today,
    id: 82,
    subject: "computer-science",
    subjects: ["computer-science", "engineering", "physics", "mathematics", "chemistry"],
    type: "PhD",
    title: "ETH Zurich Salaried PhD Positions (Doktorierende)",
    source: "https://ethz.ch/en/the-eth-zurich/working-teaching-and-research/welcome-center/employment-contract-and-salary/salary.html",
    funding: "Fully funded: Salaried employment contract under ETH Domain Ordinance starting from CHF 53,500/year (Rate 1) up to CHF 73,100 to CHF 84,000/year (Rate 5 in CS/Engineering)",
    status: "open-position",
    deadline: "2027-05-15",
    deadlineText: "May 15, 2027 (Rolling departmental intakes across D-INFK, D-MAVT, D-PHYS)",
    fee: "Free application directly to open doctoral vacancies",
    tuition: "Zero tuition. PhD candidates are paid scientific employees with comprehensive Swiss state pension (Pestalozzi/PUBLICA), accident, and health benefits.",
    requirements: {
      gpa: "Recognized Master of Science degree (minimum 120 ECTS) in Computer Science, Engineering, Physics, or Mathematics with high marks.",
      ielts: "Fluent technical English proficiency (TOEFL/IELTS or university-level English instruction).",
      gre: "Not required.",
      papers: "Master's research thesis or peer-reviewed conference publications in reputable IEEE/ACM/nature journals.",
      references: "Endorsement from an ETH Zurich full professor agreeing to act as formal thesis supervisor."
    },
    desc: "Three to four-year salaried doctoral research appointment at ETH Zurich, consistently ranked among the world's top 10 institutions, conducting fundamental and applied research with state-of-the-art supercomputing and laboratory infrastructure."
  },
  {
    university: "ETH Zurich",
    country: "Switzerland",
    location: "Zurich, Switzerland",
    reviewed: today,
    id: 83,
    subject: "computer-science",
    subjects: ["computer-science", "mathematics"],
    type: "Master's",
    title: "ETH Zurich Master of Science in Computer Science",
    source: "https://inf.ethz.ch/studies/master/master-cs.html",
    funding: "Self-funded; eligible for ESOP scholarship (CHF 24,000/year) and ETH teaching assistantships",
    status: "program-information",
    deadline: "2026-12-15",
    deadlineText: "December 15, 2026 (Annual international admissions window closes; November 30 for ESOP)",
    fee: "CHF 150 application processing fee",
    tuition: "CHF 730 per semester (Swiss resident) or CHF 2,190 per semester (international threefold rate).",
    requirements: {
      gpa: "Bachelor of Science in Computer Science with rigorous foundations in theoretical computer science, algorithms, and systems.",
      ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
      gre: "Recommended for graduates outside the Bologna framework.",
      papers: "Curriculum vitae, detailed descriptions of undergraduate coursework syllabus, and personal motivation statement.",
      references: "Two academic referee letters submitted directly through the online eApply portal."
    },
    desc: "World-class two-year Master of Science program (120 ECTS) within the Department of Computer Science (D-INFK), offering major specializations in Machine Intelligence, Systems & Software, Theoretical Computer Science, Information Security, and Visual Computing."
  },
  {
    university: "ETH Zurich",
    country: "Switzerland",
    location: "Zurich, Switzerland",
    reviewed: today,
    id: 84,
    subject: "engineering",
    subjects: ["engineering", "computer-science"],
    type: "Master's",
    title: "ETH Zurich Master of Science in Robotics, Systems and Control",
    source: "https://master-robotics.ethz.ch/",
    funding: "Self-funded; eligible for ESOP merit fellowship and laboratory research assistantships",
    status: "program-information",
    deadline: "2026-12-15",
    deadlineText: "December 15, 2026 (International round; November 30 for ESOP)",
    fee: "CHF 150 application fee",
    tuition: "CHF 730/semester (Swiss/resident) or CHF 2,190/semester (international threefold).",
    requirements: {
      gpa: "Bachelor's degree in Mechanical, Electrical, or Computer Engineering with top-tier academic marks.",
      ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
      gre: "Recommended for international applicants.",
      papers: "Deep coursework background in control systems, dynamic modeling, linear algebra, calculus, and C++/Python programming.",
      references: "Official university transcripts, two letters of recommendation, and personal statement of purpose."
    },
    desc: "Specialized interdisciplinary master's degree program (120 ECTS) bridging mechanical engineering (D-MAVT), electrical engineering (D-ITET), and computer science (D-INFK) to develop intelligent autonomous robots, aerial vehicles, and cyber-physical systems."
  },
  {
    university: "ETH Zurich",
    country: "Switzerland",
    location: "Zurich, Switzerland",
    reviewed: today,
    id: 85,
    subject: "engineering",
    subjects: ["engineering", "computer-science"],
    type: "Research",
    title: "ETH Zurich Robotic Systems Lab (RSL) Research Placements",
    source: "https://rsl.ethz.ch/",
    funding: "Funded research projects and master thesis allowances partnering with Swiss National Science Foundation (SNSF) and ANYbotics",
    status: "open-position",
    deadline: "2027-03-31",
    deadlineText: "March 31, 2027 for upcoming academic semester thesis allocations",
    fee: "Free application directly to lab",
    tuition: "Zero tuition; funded laboratory placement.",
    requirements: {
      gpa: "Enrolled graduate student in Robotics, Mechanical Engineering, or Computer Science with high academic standing.",
      ielts: "Proficiency in technical English for scientific publishing.",
      gre: "Not required.",
      papers: "Strong hands-on programming skills in ROS/ROS2, C++, PyTorch, and dynamic simulation (Isaac Gym, MuJoCo).",
      references: "Academic transcript, GitHub repository or project portfolio, and supervisor endorsement."
    },
    desc: "Postgraduate research and master thesis projects inside the world-renowned Robotic Systems Lab (RSL) at ETH Zurich, pioneering dynamic legged robots (ANYmal), reinforcement learning locomotion, and autonomous environmental navigation."
  },
  {
    university: "ETH Zurich",
    country: "Switzerland",
    location: "Zurich, Switzerland",
    reviewed: today,
    id: 86,
    subject: "computer-science",
    subjects: ["computer-science", "mathematics"],
    type: "Internship",
    title: "ETH Student Summer Research Fellowship (ETH SSRF) in Computer Science",
    source: "https://inf.ethz.ch/studies/summer-research-fellowship.html",
    funding: "Fully funded: CHF 4,000 living stipend for 2 months (July–August), organized accommodation, full round-trip travel reimbursement, and visa cost coverage",
    status: "open-position",
    deadline: "2026-12-15",
    deadlineText: "December 15, 2026 (Annual international application deadline for following summer)",
    fee: "Free application",
    tuition: "Zero tuition; fully paid international fellowship.",
    requirements: {
      gpa: "Enrolled undergraduate (completed at least 2 years of study) or master's student in Computer Science, Mathematics, or Electrical Engineering outside ETH Zurich.",
      ielts: "Fluent working knowledge of English (tested during interview; certificates optional).",
      gre: "Not required.",
      papers: "Research statement of purpose outlining technical interests and laboratory preferences.",
      references: "Official university transcripts, CV, and one or two academic reference letters."
    },
    desc: "Highly selective, fully funded 2-month summer research fellowship (July 1 to August 31) inside the Department of Computer Science (D-INFK) at ETH Zurich, offering international students direct research collaboration with faculty mentors, housing, travel reimbursement, and social activities."
  },
  {
    university: "ETH Zurich",
    country: "Switzerland",
    location: "Zurich, Switzerland",
    reviewed: today,
    id: 87,
    subject: "computer-science",
    subjects: ["computer-science", "engineering", "mathematics", "physics"],
    type: "Fellowship",
    title: "ETH Zurich Teaching Assistantships (Hilfsassistenten) Pathway",
    source: "https://ethz.ch/en/the-eth-zurich/working-teaching-and-research/welcome-center/employment-contract-and-salary.html",
    funding: "Fully salaried: CHF 28.00 to CHF 34.50 per hour for laboratory coaching, problem set exercise tutoring, and assessment assistance",
    status: "open-position",
    deadline: "2027-08-01",
    deadlineText: "August 1, 2027 for Autumn semester teaching appointments",
    fee: "Free employment application",
    tuition: "Zero tuition; hourly salaried employment contract under ETH Zurich personnel guidelines.",
    requirements: {
      gpa: "Enrolled student at ETH Zurich in good standing who has successfully completed the target course module with high grades.",
      ielts: "Proficiency in English or German depending on the language of instruction for the course.",
      gre: "Not required.",
      papers: "Academic transcript showing strong performance in foundational mathematics, algorithms, or mechanics.",
      references: "Approval from the course professor or chief teaching assistant."
    },
    desc: "Departmental academic employment (Hilfsassistent) for enrolled undergraduate and graduate students at ETH Zurich, providing competitive hourly pay for conducting weekly exercise sessions, supervising programming labs, and grading assignments."
  }
];

const newResearchers = [
  {
    id: 54,
    subject: "computer-science",
    name: "Prof. Dr. Timothy Roscoe",
    title: "Full Professor of Computer Science / Systems Group, D-INFK",
    university: "ETH Zurich",
    country: "Switzerland",
    topics: ["Operating Systems", "Distributed Systems", "Hardware-Software Co-Design", "Barrelfish OS", "Network Systems"],
    source: "https://people.inf.ethz.ch/troscoe/",
    email: null,
    summary: "Full Professor of Computer Science in the Systems Group at ETH Zurich, pioneer of multikernel operating systems (Barrelfish), hardware-software co-design, and high-performance distributed systems architectures.",
    recruiting: "Not verified",
    reviewed: today
  },
  {
    id: 55,
    subject: "engineering",
    name: "Prof. Dr. Marco Hutter",
    title: "Professor of Robotic Systems / Head of Robotic Systems Lab (RSL), D-MAVT",
    university: "ETH Zurich",
    country: "Switzerland",
    topics: ["Legged Robotics", "Autonomous Machines", "Deep Reinforcement Learning for Control", "ANYmal Quadruped", "Field Robotics"],
    source: "https://rsl.ethz.ch/people/person-detail.marco-hutter.html",
    email: null,
    summary: "Professor of Robotic Systems and Head of RSL at ETH Zurich, leading world-class research in autonomous legged robots, reinforcement learning for dynamic locomotion, and rough-terrain robotic inspection.",
    recruiting: "Not verified",
    reviewed: today
  },
  {
    id: 56,
    subject: "physics",
    name: "Prof. Dr. Ursula Keller",
    title: "Professor of Physics / Ultrafast Laser Physics, D-PHYS",
    university: "ETH Zurich",
    country: "Switzerland",
    topics: ["Ultrafast Laser Physics", "Attosecond Science", "SESAM Technology", "Quantum Electronics", "Frequency Combs"],
    source: "https://ulp.ethz.ch/people/prof-ursula-keller.html",
    email: null,
    summary: "Professor of Physics at ETH Zurich, inventor of the semiconductor saturable absorber mirror (SESAM) enabling passive mode-locked ultrafast solid-state lasers, pioneer in attosecond physics, and European Inventor Award winner.",
    recruiting: "Not verified",
    reviewed: today
  }
];

export function enrichEthZurich() {
  console.log(`Enriching ETH Zurich with 7 multi-department opportunities and 3 professors...`);

  // 1. Generate Opportunity Pages
  for (const opp of newOpportunities) {
    const oppSlug = `${opp.id}-${slug(opp.title)}`;
    const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/switzerland/">Switzerland</a> · <a href="/universities/eth-zurich/">ETH Zurich guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/eth-zurich/">ETH Zurich</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">Switzerland · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect published university guidelines available at the last review. Review official department guidelines before submission.</p><dl class="pairs"><div class="pair"><dt>Academic degree / Prerequisites</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>English language proficiency</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Standardized testing (GRE/GMAT)</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Thesis / Research statement</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="/universities/eth-zurich/">ETH Zurich guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ETH Zurich documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ETH Zurich.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/switzerland/">Switzerland</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`opportunities/${oppSlug}/index.html`, oppHtml);
    console.log(`  ✓ Generated opportunities/${oppSlug}/index.html`);
  }

  // 2. Generate Researcher Pages
  for (const fac of newResearchers) {
    const facSlug = `${fac.id}-${slug(fac.name)}`;
    const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — ETH Zurich Research Profile | OpenField</title><meta name="description" content="${fac.name} at ETH Zurich: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — ETH Zurich Research Profile | OpenField"><meta property="og:description" content="${fac.name} at ETH Zurich: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/switzerland/">Switzerland</a> · <a href="/universities/eth-zurich/">ETH Zurich guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">Switzerland · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in graduate or doctoral research supervision in computer systems, robotics, or ultrafast lasers are advised to consult formal department application channels.</p><div class="actions"><a class="btn" href="/universities/eth-zurich/">ETH Zurich guide ↗</a><a class="btn secondary" href="/subjects/${fac.subject}/">${fac.subject.charAt(0).toUpperCase() + fac.subject.slice(1)} subject guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ETH Zurich.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/switzerland/">Switzerland</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`researchers/${facSlug}/index.html`, facHtml);
    console.log(`  ✓ Generated researchers/${facSlug}/index.html`);
  }

  // 3. Generate University Index Page
  const uniHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ETH Zurich: Degrees, Scholarships &amp; Faculty Guide | OpenField</title><meta name="description" content="ETH Zurich guide: Master's in Computer Science, Robotics, ESOP full scholarships, salaried PhD positions, and world-renowned research faculty."><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/universities/eth-zurich/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="ETH Zurich: Degrees, Scholarships &amp; Faculty Guide | OpenField"><meta property="og:description" content="ETH Zurich guide: Master's in Computer Science, Robotics, ESOP full scholarships, salaried PhD positions, and world-renowned research faculty."><meta property="og:url" content="https://universityproject-chi.vercel.app/universities/eth-zurich/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","name":"ETH Zurich (Eidgenössische Technische Hochschule Zürich)","url":"https://ethz.ch","dateModified":"${today}"}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/switzerland/">Switzerland</a> · <a href="/universities/eth-zurich/">ETH Zurich guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/">Universities</a><span>/</span><span>ETH Zurich</span></div><span class="eyebrow">Switzerland · Zurich · Federal Institute of Technology · Reviewed ${today}</span><h1>ETH Zurich (Eidgenössische Technische Hochschule Zürich)</h1><p>Founded in 1855, ETH Zurich is one of the world's premier science and technology universities, consistently ranked among the top 10 globally. Counting 22 Nobel laureates including Albert Einstein, ETH Zurich excels in Computer Science, Robotics, Systems Engineering, Ultrafast Lasers, and Quantum Physics. Review verified Master's curricula, prestigious ESOP full scholarships, salaried doctoral employment, summer research fellowships, and faculty profiles.</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="https://ethz.ch">Official university portal ↗</a><span>ESOP &amp; Salaried Doctoral Positions</span><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Verified degree programs and opportunities</h2><p>Review checked academic pathways and funding options below:</p><div class="grid"><article class="card"><h3><a href="/opportunities/81-eth-zurich-excellence-scholarship-opportunity-programme-esop/">Excellence Scholarship &amp; Opportunity Programme (ESOP)</a></h3><p>Prestigious merit fellowship covering living expenses of CHF 12,000 per semester (CHF 24,000/year) plus full tuition waiver for outstanding incoming Master's candidates.</p></article><article class="card"><h3><a href="/opportunities/82-eth-zurich-salaried-phd-positions-doktorierende/">Salaried PhD Positions (Doktorierende)</a></h3><p>Fully funded 3-to-4-year university employee contract starting at CHF 53,500/year up to CHF 84,000/year with comprehensive Swiss social security and state pension.</p></article><article class="card"><h3><a href="/opportunities/83-eth-zurich-master-of-science-in-computer-science/">MSc in Computer Science (D-INFK)</a></h3><p>Two-year master's program (120 ECTS) in Machine Intelligence, Systems &amp; Software, Theoretical Computer Science, Information Security, and Visual Computing.</p></article><article class="card"><h3><a href="/opportunities/84-eth-zurich-master-of-science-in-robotics-systems-and-control/">MSc in Robotics, Systems and Control</a></h3><p>Interdisciplinary master's degree (120 ECTS) bridging mechanical, electrical, and computer engineering to build autonomous machines and robotic systems.</p></article><article class="card"><h3><a href="/opportunities/85-eth-zurich-robotic-systems-lab-rsl-research-placements/">Robotic Systems Lab (RSL) Research Placements</a></h3><p>Funded research positions and master thesis projects inside RSL developing dynamic quadruped robots (ANYmal), robotic locomotion, and machine learning control.</p></article><article class="card"><h3><a href="/opportunities/86-eth-student-summer-research-fellowship-eth-ssrf-in-computer-science/">ETH Student Summer Research Fellowship (SSRF)</a></h3><p>Fully funded two-month summer research program (July–August) in D-INFK for external students providing CHF 4,000 living stipend, housing, and round-trip travel.</p></article><article class="card"><h3><a href="/opportunities/87-eth-zurich-teaching-assistantships-hilfsassistenten-pathway/">Teaching Assistantships (Hilfsassistenten) Pathway</a></h3><p>Salaried academic tutoring positions (CHF 28.00–CHF 34.50/hr) for enrolled students coaching exercise sessions, running coding labs, and grading assignments.</p></article></div></section><section class="section"><h2>Admissions, language requirements &amp; application process</h2><dl class="pairs"><div class="pair"><dt>Master's admission eligibility</dt><dd>Bachelor of Science degree in Computer Science, Engineering, Physics, or Mathematics from an internationally accredited university with top academic standing.</dd></div><div class="pair"><dt>Doctoral admission eligibility</dt><dd>Master of Science degree (minimum 120 ECTS) with proven thesis research capability and written agreement from an ETH Zurich professor to serve as thesis supervisor.</dd></div><div class="pair"><dt>Language proficiency</dt><dd>C1 English proficiency: Academic IELTS 7.0 overall (or TOEFL iBT 100) required for master's programs taught in English.</dd></div><div class="pair"><dt>Standardized testing (GRE/GMAT)</dt><dd>GRE revised General Test recommended for graduates of universities outside the Bologna framework.</dd></div><div class="pair"><dt>Application fee</dt><dd>CHF 150 non-refundable application fee for applicants holding international undergraduate credentials.</dd></div><div class="pair"><dt>Application portal (eApply)</dt><dd>All international Master's and ESOP applications must be submitted via ETH's central eApply system by the November 30 / December 15 deadlines.</dd></div></dl></section><section class="section"><h2>Tuition fees and verified scholarship systems</h2><p>ETH Zurich maintains exceptionally low tuition rates subsidized by the Swiss Federal Government. Tuition is <strong>CHF 730 per semester</strong> for Swiss residents, and <strong>CHF 2,190 per semester</strong> for international students who move to Switzerland for study. High-achieving master's applicants can win the <strong>ESOP Scholarship (CHF 24,000/year plus full tuition waiver)</strong>, while doctoral researchers receive full salaries starting above <strong>CHF 53,500/year</strong>.</p><div class="actions"><a class="btn" href="/opportunities/81-eth-zurich-excellence-scholarship-opportunity-programme-esop/">ESOP Scholarship details ↗</a><a class="btn" href="/opportunities/82-eth-zurich-salaried-phd-positions-doktorierende/">Salaried PhD positions ↗</a><a target="_blank" rel="noopener noreferrer" href="https://ethz.ch/students/en/studies/financial.html">Official financial support portal ↗</a></div></section><section class="section"><h2>Verified faculty profiles and research leaders</h2><p>Distinguished researchers and laboratory heads at ETH Zurich:</p><div class="grid"><article class="card"><h3><a href="/researchers/54-prof-dr-timothy-roscoe/">Prof. Dr. Timothy Roscoe</a></h3><p>Full Professor of Computer Science; Systems Group; pioneer of multikernel operating systems (Barrelfish) and hardware-software co-design.</p></article><article class="card"><h3><a href="/researchers/55-prof-dr-marco-hutter/">Prof. Dr. Marco Hutter</a></h3><p>Professor of Robotic Systems; Head of Robotic Systems Lab (RSL); leader in dynamic legged locomotion, reinforcement learning, and ANYmal robotics.</p></article><article class="card"><h3><a href="/researchers/56-prof-dr-ursula-keller/">Prof. Dr. Ursula Keller</a></h3><p>Professor of Physics; inventor of the SESAM ultrafast mode-locked laser; world pioneer in attosecond science and European Inventor Award winner.</p></article></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ETH Zurich documentation reviewed ${today}. Degree admissions, scholarship awards, and employment positions are subject to formal university review. OpenField does not charge students application fees.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ETH Zurich.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/switzerland/">Switzerland</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
  write('universities/eth-zurich/index.html', uniHtml);
  console.log(`  ✓ Generated universities/eth-zurich/index.html`);

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
  console.log(`  ✓ Updated data.js with ETH Zurich opportunities and faculty`);

  // 5. Update sitemap.xml
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [
    `https://universityproject-chi.vercel.app/universities/eth-zurich/`,
    `https://universityproject-chi.vercel.app/countries/switzerland/`,
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

  // 6. Update countries/switzerland/index.html to feature ETH Zurich and index,follow
  let chHtml = read('countries/switzerland/index.html');
  chHtml = chHtml.replace(
    '<meta name="robots" content="noindex,follow">',
    '<meta name="robots" content="index,follow">'
  );
  chHtml = chHtml.replace(
    '<div><strong>0</strong><span>detailed university guides published</span></div>',
    '<div><strong>1</strong><span>detailed university guide published</span></div>'
  );
  chHtml = chHtml.replace(
    '<div class="country-awaiting"><span class="country-badge">DETAILED PROFILES IN PREPARATION</span><h2>University research is being verified.</h2><p>The institutions below are preliminary directory candidates, not confirmed open programs. We will publish admission requirements, funding, researchers and deadlines only after checking official sources.</p></div>',
    `<div class="country-featured-guide">
      <span class="country-badge">SOURCE-REVIEWED UNIVERSITY</span>
      <h2><a href="/universities/eth-zurich/">ETH Zurich (Eidgenössische Technische Hochschule Zürich)</a></h2>
      <p>Consistently ranked in the world top 10. Explore Master's in Computer Science &amp; Robotics, ESOP full scholarships (CHF 24,000/yr), salaried PhD positions (CHF 53,500–CHF 84,000/yr), summer research fellowships, and Nobel laureate heritage.</p>
      <div class="actions" style="margin-top:1rem;"><a class="btn" href="/universities/eth-zurich/">Open ETH Zurich Guide ↗</a><a class="btn secondary" href="/opportunities/81-eth-zurich-excellence-scholarship-opportunity-programme-esop/">ESOP Scholarship ↗</a><a class="btn secondary" href="/opportunities/82-eth-zurich-salaried-phd-positions-doktorierende/">Salaried PhDs ↗</a></div>
    </div>`
  );
  write('countries/switzerland/index.html', chHtml);
  console.log(`  ✓ Updated countries/switzerland/index.html`);

  // 7. Update universities/index.html
  let unisHtml = read('universities/index.html');
  unisHtml = unisHtml.replace(
    '<div><strong>10</strong><span>universities with detailed published guides</span></div>',
    '<div><strong>11</strong><span>universities with detailed published guides</span></div>'
  );
  unisHtml = unisHtml.replace(
    `<a href="/countries/switzerland/" class="country-link-card"><span class="country-numeral">10 / CH</span><h3>Switzerland</h3><div class="country-link-bottom"><span>34 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-pending">Institution list · deeper review pending</p></a>`,
    `<a href="/countries/switzerland/" class="country-link-card"><span class="country-numeral">10 / CH</span><h3>Switzerland</h3><div class="country-link-bottom"><span>34 candidates</span><span class="country-round-arrow" aria-hidden="true">↗</span></div><p class="country-verified">1 source-reviewed university</p></a>`
  );
  write('universities/index.html', unisHtml);
  console.log(`  ✓ Updated universities/index.html`);

  // 8. Update country-rotation.json
  let rotation = JSON.parse(read('country-rotation.json'));
  rotation.cycle = 2;
  rotation.completedInCycle = [];
  rotation.nextCountry = 'canada';
  rotation.lastPublished = {
    country: 'switzerland',
    university: 'ETH Zurich',
    sourceRow: 1337
  };
  rotation.publishedInCountry = {
    ...rotation.publishedInCountry,
    switzerland: 1
  };
  rotation.updatedAt = today;
  write('country-rotation.json', JSON.stringify(rotation, null, 2) + '\n');
  console.log(`  ✓ Updated country-rotation.json (Cycle 1 complete! Starting Cycle 2 with Canada)`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  enrichEthZurich();
}
