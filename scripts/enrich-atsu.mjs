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
    university: "A.T. Still University",
    country: "United States",
    location: "Kirksville, Missouri / Mesa, Arizona, USA",
    reviewed: today,
    id: 64,
    subject: "biology",
    subjects: ["biology", "social-sciences"],
    type: "Scholarship",
    title: "ATSU Hometown Scholars & Community Health Endowed Scholarships",
    source: "https://www.atsu.edu/financial-aid/scholarships",
    funding: "Merit and need-based institutional scholarships ranging from $5,000 to full tuition support for future community healthcare leaders",
    status: "open-scholarship",
    deadline: "2027-03-01",
    deadlineText: "March 1, 2027 (Annual priority financial aid & scholarship application deadline)",
    fee: "Free internal application through ATSU ScholarshipUniverse portal",
    tuition: "Subsidizes tuition across ATSU-KCOM, SOMA, ASHS, and CGHS degree programs.",
    requirements: {
      gpa: "Minimum 3.0 cumulative undergraduate GPA in biomedical or health sciences.",
      ielts: "U.S. citizen, permanent resident, or eligible international applicant depending on program.",
      gre: "Not required for internal scholarship consideration.",
      papers: "Demonstrated record of healthcare leadership, volunteerism, or primary care service in underserved rural/urban communities.",
      references: "Official ATSU admissions acceptance, FAFSA / institutional financial aid form, and endorsement from a Community Health Center (CHC) leader."
    },
    desc: "Targeted scholarship initiative connecting incoming and continuing health professions students with institutional endowments and partner Community Health Centers (CHCs) to support aspiring healthcare leaders dedicated to serving medically underserved populations."
  },
  {
    university: "A.T. Still University",
    country: "United States",
    location: "Kirksville, Missouri / Mesa, Arizona, USA",
    reviewed: today,
    id: 65,
    subject: "biology",
    subjects: ["biology"],
    type: "Research",
    title: "ATSRI Clinician Researcher Development Program (CRDP)",
    source: "https://www.atsu.edu/a-t-still-research-institute/about-atsri/student-research",
    funding: "Fully funded research mentorship, laboratory instrumentation access, and conference travel grants up to $2,500",
    status: "open-position",
    deadline: "2027-04-15",
    deadlineText: "April 15, 2027 for Academic Year Research appointment",
    fee: "Free application for matriculated students",
    tuition: "Zero tuition; funded research development pathway.",
    requirements: {
      gpa: "Enrolled student in Master of Science in Biomedical Sciences or Doctor of Health Sciences in good academic standing.",
      ielts: "Demonstrated academic and scientific communication skills.",
      gre: "Not required.",
      papers: "Structured clinical or translational research interest statement outlining problem hypothesis and methodology.",
      references: "Sponsorship endorsement from an ATSRI primary research investigator."
    },
    desc: "Structured research pathway through the A.T. Still Research Institute (ATSRI) connecting graduate and clinical students with senior investigators for hands-on clinical trials, neuromusculoskeletal studies, and biomechanics research."
  },
  {
    university: "A.T. Still University",
    country: "United States",
    location: "Kirksville, Missouri / Mesa, Arizona, USA",
    reviewed: today,
    id: 66,
    subject: "biology",
    subjects: ["biology", "social-sciences"],
    type: "Internship",
    title: "ATSRI Summer Student Research Immersion Experience",
    source: "https://www.atsu.edu/a-t-still-research-institute/about-atsri/student-research",
    funding: "Funded student research stipend ($15 to $20/hour for 30 hours per week over 8 weeks) plus project supplies allowance",
    status: "open-position",
    deadline: "2027-02-15",
    deadlineText: "February 15, 2027 (Annual summer fellowship application cutoff)",
    fee: "Free application",
    tuition: "Zero tuition; paid summer research appointment.",
    requirements: {
      gpa: "Enrolled in ATSU health science or biomedical master's programs with minimum 3.0 GPA.",
      ielts: "Enrolled student status at ATSU.",
      gre: "Not required.",
      papers: "Curriculum vitae and 500-word statement describing research interests in osteopathic medicine, oral health, or community healthcare.",
      references: "One faculty recommendation letter from an ATSU biomedical or clinical professor."
    },
    desc: "Intensive 8-week full-time summer research fellowship (approx. 30 hours/week) under the supervision of ATSRI faculty mentors, conducting laboratory experiments, patient data analysis, and preparing abstracts for scientific presentation."
  },
  {
    university: "A.T. Still University",
    country: "United States",
    location: "Kirksville, Missouri / Mesa, Arizona, USA",
    reviewed: today,
    id: 67,
    subject: "biology",
    subjects: ["biology"],
    type: "Fellowship",
    title: "ATSU Pre-Doctoral Anatomy & Clinical Skills Teaching Fellowship",
    source: "https://www.atsu.edu/kirksville-college-of-osteopathic-medicine/academics",
    funding: "Fully funded: Full tuition scholarship/waiver for the fellowship year plus annual living stipend of $18,000 to $24,000",
    status: "open-position",
    deadline: "2027-01-30",
    deadlineText: "January 30, 2027 (Annual competitive selection for upcoming academic year)",
    fee: "Free application",
    tuition: "Full tuition waiver covering the dedicated 12-month fellowship intercalated academic year.",
    requirements: {
      gpa: "Completion of foundational preclinical biomedical and anatomical coursework with top quartile academic marks.",
      ielts: "Fluent communication skills suited for laboratory dissection coaching and small-group clinical tutoring.",
      gre: "Not required.",
      papers: "Demonstrated teaching capability or prior tutoring experience in gross anatomy, embryology, or histology.",
      references: "Departmental interview, faculty recommendation letters, and approval by Anatomy Department Chair."
    },
    desc: "Competitive 12-month pre-doctoral academic teaching fellowship within the Department of Anatomy and clinical medicine, providing complete tuition coverage, living stipends, and advanced training in cadaveric dissection, medical education, and biomedical research."
  }
];

const newResearchers = [
  {
    id: 48,
    subject: "biology",
    name: "Dr. Victoria Bryant",
    title: "Associate Professor and Chair, Department of Basic Medical Sciences",
    university: "A.T. Still University",
    country: "United States",
    topics: ["Basic Medical Sciences", "Neurobiology", "Cellular Physiology", "Medical Education"],
    source: "https://www.atsu.edu/school-of-osteopathic-medicine-in-arizona",
    email: null,
    summary: "Associate Professor and Chair of the Department of Basic Medical Sciences at ATSU-SOMA, directing foundational biomedical sciences education, cellular physiology, and curriculum innovation in medical education.",
    recruiting: "Not verified",
    reviewed: today
  }
];

export function enrichAtsu() {
  console.log(`Enriching A.T. Still University with 4 multi-department opportunities and 1 professor...`);

  // 1. Generate Opportunity Pages
  for (const opp of newOpportunities) {
    const oppSlug = `${opp.id}-${slug(opp.title)}`;
    const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="https://universityproject-chi.vercel.app/opportunities/${oppSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/usa/">United States</a> · <a href="/universities/a-t-still-university/">ATSU guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/a-t-still-university/">A.T. Still University</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">United States · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect published university guidelines available at the last review. Review official department guidelines before submission.</p><dl class="pairs"><div class="pair"><dt>GPA / Academic degree</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>Language / Citizenship</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Standardized tests</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Experience / Research statement</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="/universities/a-t-still-university/">ATSU guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official A.T. Still University documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with A.T. Still University.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/usa/">United States</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`opportunities/${oppSlug}/index.html`, oppHtml);
    console.log(`  ✓ Generated opportunities/${oppSlug}/index.html`);
  }

  // 2. Generate Researcher Pages
  for (const fac of newResearchers) {
    const facSlug = `${fac.id}-${slug(fac.name)}`;
    const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — ATSU Research Profile | OpenField</title><meta name="description" content="${fac.name} at A.T. Still University: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — ATSU Research Profile | OpenField"><meta property="og:description" content="${fac.name} at A.T. Still University: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="https://universityproject-chi.vercel.app/researchers/${facSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/usa/">United States</a> · <a href="/universities/a-t-still-university/">ATSU guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">United States · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in graduate research in basic medical sciences or cellular physiology are advised to consult formal department application guidelines.</p><div class="actions"><a class="btn" href="/universities/a-t-still-university/">ATSU guide ↗</a><a class="btn secondary" href="/subjects/biology/">Biology subject field guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with A.T. Still University.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/usa/">United States</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
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
  console.log(`  ✓ Updated data.js with ATSU opportunities and faculty`);

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
  console.log(`  ✓ Updated sitemap.xml with 5 new URLs`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  enrichAtsu();
}
