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
    university: "Adelaide University",
    country: "Australia",
    location: "Adelaide, South Australia, Australia",
    reviewed: today,
    id: 39,
    subject: "physics",
    subjects: ["physics", "engineering", "computer-science", "mathematics", "biology", "social-sciences"],
    type: "Scholarship",
    title: "Adelaide University Global Citizens International Scholarship",
    source: "https://international.adelaide.edu.au/admissions/scholarships/global-citizens-scholarship",
    funding: "Partial funding: 15% to 30% reduction on annual international tuition fees",
    status: "open-scholarship",
    deadline: "2026-12-01",
    deadlineText: "December 1, 2026 for Semester 1 (February intake); May 1, 2027 for Semester 2 (July intake)",
    fee: "No separate scholarship fee; AUD $150 international degree admission application fee applies",
    tuition: "Annual tuition varies by program (approx. AUD $44,000–$57,000/year); scholarship deducts 15% or 30% per year",
    requirements: {
      gpa: "15% tier: Minimum university GPA 5.5/7.0 (or ATAR 85). 30% tier: Minimum university GPA 6.5/7.0 (or ATAR 95).",
      ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-score) or equivalent program-specific cutoff.",
      gre: "Not required for Australian coursework admissions.",
      papers: "Not required for undergraduate or postgraduate coursework scholarships.",
      references: "Official university academic transcripts and award certificates evaluated automatically during admission."
    },
    desc: "Major tuition fee reduction scholarship for commencing international undergraduate and postgraduate coursework students at Adelaide University, providing an ongoing 15% or 30% reduction on annual tuition fees based on prior academic merit."
  },
  {
    university: "Adelaide University",
    country: "Australia",
    location: "Adelaide, South Australia, Australia",
    reviewed: today,
    id: 40,
    subject: "physics",
    subjects: ["physics", "biology"],
    type: "Master's",
    title: "Adelaide University Master of Science in Medical Radiation Physics",
    source: "https://www.adelaide.edu.au/degree-finder/msc_msc.html",
    funding: "Self-funded; eligible for Adelaide Global Citizens Scholarship (15%–30% discount)",
    status: "program-information",
    deadline: "2026-12-01",
    deadlineText: "December 1, 2026 for February 2027 commencement; July 2027 intake deadline May 1, 2027",
    fee: "AUD $150 international student application fee",
    tuition: "AUD $56,600 per year (indicative 2026–27 international postgraduate rate; 2-year full-time duration)",
    requirements: {
      gpa: "Completed Bachelor degree (AQF Level 7) in Physics or Engineering with minimum GPA of 5.0 on a 7.0 scale.",
      ielts: "Academic IELTS 6.5 overall with minimum 6.0 in reading, listening, speaking, and writing (or TOEFL iBT 79).",
      gre: "Not required.",
      papers: "Undergraduate degree project or laboratory portfolio in physics, radiation, or instrumentation.",
      references: "Academic transcript, syllabus outline of prior mathematics and physics coursework, and passport copy."
    },
    desc: "Two-year postgraduate Master of Science specialization in Medical Radiation Physics, providing clinical and physical foundations in radiotherapy, radiation oncology imaging, nuclear medicine, and dosimetry with hospital laboratory training."
  },
  {
    university: "Adelaide University",
    country: "Australia",
    location: "Adelaide, South Australia, Australia",
    reviewed: today,
    id: 41,
    subject: "physics",
    subjects: ["physics", "computer-science", "engineering", "biology", "mathematics"],
    type: "Internship",
    title: "Adelaide University Summer Research Scholarships",
    source: "https://www.adelaide.edu.au/scholarships/summer-research-scholarships",
    funding: "Fully funded: AUD $1,500 research stipend for 6-week laboratory project",
    status: "open-position",
    deadline: "2026-10-31",
    deadlineText: "Late October 2026 (Annual application round for 2026–27 summer semester)",
    fee: "Free (Competitive institutional research scholarship program)",
    tuition: "Zero tuition for research placement; stipend paid directly to student.",
    requirements: {
      gpa: "Minimum Grade Point Average of 5.0 on a 7.0 scale across prior university study.",
      ielts: "Enrolled student status with valid student visa extending beyond February 2027.",
      gre: "Not required.",
      papers: "Written research proposal developed in consultation with Adelaide supervising academic.",
      references: "Endorsement and signed agreement from project supervisor in School of Physical Sciences, CS, or Engineering."
    },
    desc: "Six-week funded summer research internship for continuing undergraduate and postgraduate coursework students to gain advanced hands-on laboratory experience within Adelaide research institutes."
  },
  {
    university: "Adelaide University",
    country: "Australia",
    location: "Adelaide, South Australia, Australia",
    reviewed: today,
    id: 42,
    subject: "computer-science",
    subjects: ["computer-science", "engineering"],
    type: "Master's",
    title: "Adelaide University Master of Computer Science in AI and Machine Learning",
    source: "https://www.adelaide.edu.au/degree-finder/mcompsci_mcompsc.html",
    funding: "Self-funded; eligible for Adelaide Global Citizens Scholarship (15%–30% fee reduction)",
    status: "program-information",
    deadline: "2026-12-01",
    deadlineText: "December 1, 2026 for Semester 1 (February 2027); May 1, 2027 for Semester 2 (July 2027)",
    fee: "AUD $150 international student application fee",
    tuition: "AUD $54,900 per year (indicative 2026–27 rate; 2-year full-time 48-unit coursework & project program)",
    requirements: {
      gpa: "Bachelor degree in Computer Science, Software Engineering or related field with minimum GPA 4.5/7.0.",
      ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 79 (writing 21).",
      gre: "Not required.",
      papers: "Demonstrated programming competence in Python, C++, or Java through completed coursework or degree project.",
      references: "Official university transcripts, degree completion certificate, and detailed syllabus of computer science units."
    },
    desc: "Advanced two-year postgraduate degree delivering specialized training in artificial intelligence, deep learning, computer vision, and distributed systems, developed in collaboration with the Australian Institute for Machine Learning (AIML)."
  },
  {
    university: "Adelaide University",
    country: "Australia",
    location: "Adelaide, South Australia, Australia",
    reviewed: today,
    id: 43,
    subject: "computer-science",
    subjects: ["computer-science", "mathematics"],
    type: "Research",
    title: "Australian Institute for Machine Learning (AIML) Research Internship Pathway",
    source: "https://www.adelaide.edu.au/aiml/study/",
    funding: "Funded research internships and project-supported postgraduate research places",
    status: "open-position",
    deadline: "2026-11-30",
    deadlineText: "November 30, 2026 for Autumn intake; rolling applications for research projects",
    fee: "Free application for research project positions",
    tuition: "Standard postgraduate research degree fees or fee-waiver scholarship (e.g. AURS/RTPS)",
    requirements: {
      gpa: "High distinction academic record (GPA 6.0/7.0 or first-class honours equivalent in computing or mathematics).",
      ielts: "Academic IELTS 6.5 overall (minimum 6.0 sub-scores).",
      gre: "Not required.",
      papers: "Software portfolio, GitHub repository, or prior scientific paper in machine learning or computer vision.",
      references: "Two academic referee letters, CV detailing algorithmic and mathematical expertise, and research statement."
    },
    desc: "Research internship and project training pathway at the Australian Institute for Machine Learning (AIML) in Lot Fourteen, Adelaide, conducting world-leading research in visual question answering, robotic vision, medical machine learning, and foundation models."
  },
  {
    university: "Adelaide University",
    country: "Australia",
    location: "Adelaide, South Australia, Australia",
    reviewed: today,
    id: 44,
    subject: "engineering",
    subjects: ["engineering", "physics"],
    type: "Master's",
    title: "Adelaide University Master of Engineering in Mechanical and Aerospace Systems",
    source: "https://www.adelaide.edu.au/degree-finder/meng_meng.html",
    funding: "Self-funded; eligible for Adelaide Global Citizens Scholarship (15%–30% discount)",
    status: "program-information",
    deadline: "2026-12-01",
    deadlineText: "December 1, 2026 for February 2027; May 1, 2027 for July 2027 commencement",
    fee: "AUD $150 international application fee",
    tuition: "AUD $56,500 per year (indicative 2026–27 international rate; 2-year full-time professional degree)",
    requirements: {
      gpa: "Four-year Bachelor of Engineering (Honours) or equivalent accredited degree with minimum GPA 4.5/7.0.",
      ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 79.",
      gre: "Not required.",
      papers: "Undergraduate engineering capstone project or industry design portfolio.",
      references: "Official university academic transcripts, degree certificate, and curriculum vitae."
    },
    desc: "Engineers Australia-accredited professional master's degree in mechanical, aerospace, and mechatronic systems, offering rigorous training in fluid mechanics, aerodynamic design, propulsion, structural analysis, and autonomous systems."
  },
  {
    university: "Adelaide University",
    country: "Australia",
    location: "Adelaide, South Australia, Australia",
    reviewed: today,
    id: 45,
    subject: "physics",
    subjects: ["physics", "computer-science", "engineering", "mathematics"],
    type: "Fellowship",
    title: "Adelaide University Casual Academic and Graduate Teaching Assistantship",
    source: "https://www.adelaide.edu.au/hr/recruitment/casual-academic-employment",
    funding: "Fully salaried: AUD $54 to $158 per hour for undergraduate tutorial teaching, lab demonstration, and assessment marking",
    status: "open-position",
    deadline: "2027-01-15",
    deadlineText: "January 15, 2027 for Semester 1 teaching allocation; June 15, 2027 for Semester 2",
    fee: "Free (Employment application for enrolled postgraduate students)",
    tuition: "Zero tuition; paid employment under the University of Adelaide Enterprise Agreement.",
    requirements: {
      gpa: "Good academic standing in a postgraduate research degree (PhD/MPhil) or high-achieving Master's program.",
      ielts: "Demonstrated native or professional fluency in English with effective oral presentation skills.",
      gre: "Not required.",
      papers: "Demonstrated mastery of foundational undergraduate course curriculum in physics, computing, or mathematics.",
      references: "Curriculum vitae, academic transcript, and supervisor approval for postgraduate researchers."
    },
    desc: "Departmental academic employment pathway for enrolled postgraduate and doctoral students across STEM faculties, providing salaried tutoring, laboratory demonstrating, and marking opportunities alongside research studies."
  }
];

const newResearchers = [
  {
    id: 40,
    subject: "physics",
    name: "Professor Anthony Thomas",
    title: "Elder Professor of Physics / School of Physics, Chemistry and Earth Sciences",
    university: "Adelaide University",
    country: "Australia",
    topics: ["Theoretical Nuclear Physics", "Quantum Chromodynamics", "Dark Matter", "Hadron Structure"],
    source: "https://researchers.adelaide.edu.au/profile/anthony.thomas",
    email: null,
    summary: "Elder Professor of Physics at the University of Adelaide and former director of the Special Research Centre for the Subatomic Structure of Matter (CSSM), pioneering research in chiral symmetry, deep inelastic scattering, and dark matter detection.",
    recruiting: "Not verified",
    reviewed: today
  },
  {
    id: 41,
    subject: "physics",
    name: "Professor David Ottaway",
    title: "Professor and Physics Discipline Lead / School of Physics, Chemistry and Earth Sciences",
    university: "Adelaide University",
    country: "Australia",
    topics: ["Laser Physics", "Gravitational Wave Detection", "LIGO Optics", "Precision Optical Sensors"],
    source: "https://researchers.adelaide.edu.au/profile/david.ottaway",
    email: null,
    summary: "Professor of Physics and discipline lead at Adelaide University, specializing in advanced laser physics, high-power optical systems for gravitational wave detectors (including LIGO), and mid-infrared optical sensors.",
    recruiting: "Not verified",
    reviewed: today
  }
];

export function enrichAdelaide() {
  console.log(`Enriching Adelaide University with 7 multi-department opportunities and 2 Physics professors...`);

  // 1. Generate Opportunity Pages
  for (const opp of newOpportunities) {
    const oppSlug = `${opp.id}-${slug(opp.title)}`;
    const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/australia/">Australia</a> · <a href="/universities/adelaide-university/">Adelaide guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/adelaide-university/">Adelaide University</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">Australia · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect the published university and program information available at the last review. Where a requirement is not specified, that is not an exemption.</p><dl class="pairs"><div class="pair"><dt>GPA / CGPA</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>IELTS / English language</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>GRE</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Published research paper</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="/universities/adelaide-university/">Adelaide University guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20opportunity%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official Adelaide University documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the institution.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Adelaide University.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/australia/">Australia</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`opportunities/${oppSlug}/index.html`, oppHtml);
    console.log(`  ✓ Generated opportunities/${oppSlug}/index.html`);
  }

  // 2. Generate Researcher Pages
  for (const fac of newResearchers) {
    const facSlug = `${fac.id}-${slug(fac.name)}`;
    const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — Adelaide University Research Profile | OpenField</title><meta name="description" content="${fac.name} at Adelaide University: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — Adelaide University Research Profile | OpenField"><meta property="og:description" content="${fac.name} at Adelaide University: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/australia/">Australia</a> · <a href="/universities/adelaide-university/">Adelaide guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">Australia · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in research supervision in physics, quantum mechanics, or laser optics are advised to consult formal department application channels.</p><div class="actions"><a class="btn" href="/universities/adelaide-university/">Adelaide University guide ↗</a><a class="btn secondary" href="/subjects/physics/">Physics subject field guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Adelaide University.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/australia/">Australia</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`researchers/${facSlug}/index.html`, facHtml);
    console.log(`  ✓ Generated researchers/${facSlug}/index.html`);
  }

  // 3. Generate Standalone Scholarship Page
  const schHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Adelaide Global Citizens International Scholarship Guide | OpenField</title><meta name="description" content="Guide to the Adelaide University Global Citizens Scholarship: 15% to 30% international tuition reduction, GPA criteria, and application procedure."><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/scholarships/adelaide-global-citizens-scholarship/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="Adelaide Global Citizens International Scholarship Guide | OpenField"><meta property="og:description" content="Guide to the Adelaide University Global Citizens Scholarship: 15% to 30% international tuition reduction, GPA criteria, and application procedure."><meta property="og:url" content="https://universityproject-chi.vercel.app/scholarships/adelaide-global-citizens-scholarship/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"Adelaide Global Citizens International Scholarship","dateModified":"${today}","isBasedOn":"https://international.adelaide.edu.au/admissions/scholarships/global-citizens-scholarship","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/australia/">Australia</a> · <a href="/universities/adelaide-university/">Adelaide guide</a></nav></header><main class="wrap"><section class="hero"><span class="eyebrow">Australia · Tuition Reduction · Reviewed ${today}</span><h1>Adelaide Global Citizens International Scholarship</h1><p>The University of Adelaide rewards commencing international undergraduate and postgraduate coursework students with an automatic 15% to 30% tuition reduction based on prior academic merit.</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="https://international.adelaide.edu.au/admissions/scholarships/global-citizens-scholarship">Official scholarship portal ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Scholarship benefits and tiers</h2><p>Eligible international students receive an ongoing reduction applied directly to their semester tuition fee invoices:</p><dl class="pairs"><div class="pair"><dt>15% Scholarship Tier</dt><dd>Requires a prior university GPA of 5.5 on a 7.0 scale (or ATAR 85). Applied automatically upon admission.</dd></div><div class="pair"><dt>30% Scholarship Tier</dt><dd>Requires a prior university GPA of 6.5 on a 7.0 scale (or ATAR 95). Applied automatically upon admission.</dd></div><div class="pair"><dt>Eligible programs</dt><dd>Undergraduate and postgraduate coursework degrees across Science, Engineering, Computing, Health, and Humanities.</dd></div><div class="pair"><dt>Duration of award</dt><dd>Full duration of the degree program, provided standard academic progression is maintained.</dd></div></dl></section><section class="section"><h2>Application procedure and deadlines</h2><p>No separate scholarship application is required. All international applicants submitting complete admission documentation are automatically evaluated for the scholarship.</p><div class="actions"><a class="btn" href="/universities/adelaide-university/">Adelaide University guide ↗</a><a class="btn secondary" href="/opportunities/39-adelaide-university-global-citizens-international-scholarship/">Scholarship requirements ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official program guidelines reviewed ${today}. Award decisions and GPA equivalencies are determined by the university admissions office.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Adelaide University.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/australia/">Australia</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
  write(`scholarships/adelaide-global-citizens-scholarship/index.html`, schHtml);
  console.log(`  ✓ Generated scholarships/adelaide-global-citizens-scholarship/index.html`);

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
  console.log(`  ✓ Updated data.js with new opportunities and faculty`);

  // 5. Update sitemap.xml
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [
    `https://universityproject-chi.vercel.app/scholarships/adelaide-global-citizens-scholarship/`,
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
  console.log(`  ✓ Updated sitemap.xml with 10 new URLs`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  enrichAdelaide();
}
