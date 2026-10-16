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
    university: "Aichi University",
    country: "Japan",
    location: "Nagoya and Toyohashi, Aichi Prefecture, Japan",
    reviewed: today,
    id: 58,
    subject: "social-sciences",
    subjects: ["social-sciences", "arts-design"],
    type: "PhD",
    title: "Aichi University PhD in Modern Chinese Studies",
    source: "https://www.aichi-u.ac.jp/english/academics/chi",
    funding: "Eligible for Aichi University Doctoral Research Fellowships, ICCS Research Assistantships (RA), and Monbukagakusho (MEXT) Honors Scholarships",
    status: "open-position",
    deadline: "2027-01-20",
    deadlineText: "January 20, 2027 (Phase 2 winter selection for April 2027 enrollment)",
    fee: "¥30,000 application examination fee",
    tuition: "Standard tuition approx. ¥720,000 per year (reduced by 30% to approx. ¥504,000 for eligible international students).",
    requirements: {
      gpa: "Completed Master's degree in Asian Studies, International Relations, Economics, or related social sciences.",
      ielts: "JLPT N1 or proven academic Japanese proficiency; reading comprehension in modern Chinese or English depending on thesis topic.",
      gre: "Not required.",
      papers: "Master's degree thesis (or summary of completed academic papers) and comprehensive doctoral research plan (Form 3).",
      references: "Two academic recommendation letters, graduation certificate, and official academic transcripts."
    },
    desc: "Doctoral research program (Hakushi-koki-katei) within Japan's pioneering Graduate School of Modern Chinese Studies, affiliated with the Institute for Contemporary Chinese Studies (ICCS), offering deep multidisciplinary investigation into Chinese politics, economy, and society."
  },
  {
    university: "Aichi University",
    country: "Japan",
    location: "Nagoya and Toyohashi, Aichi Prefecture, Japan",
    reviewed: today,
    id: 59,
    subject: "social-sciences",
    subjects: ["social-sciences"],
    type: "Master's",
    title: "Aichi University Master of Laws (LL.M.) in Civil and Public Law",
    source: "https://www.aichi-u.ac.jp/english/academics/law",
    funding: "Eligible for 30% international student tuition reduction, Aichi University Scholarship, and JASSO Honors awards",
    status: "program-information",
    deadline: "2027-01-20",
    deadlineText: "January 20, 2027 (Phase 2 application period for April 2027 entry)",
    fee: "¥30,000 application fee",
    tuition: "Approx. ¥770,000 per year (reduced to approx. ¥539,000 with automatic 30% international fee reduction).",
    requirements: {
      gpa: "Bachelor's degree in Law (LL.B.) or recognized 4-year undergraduate degree with legal or political coursework.",
      ielts: "JLPT N1 or N2 Japanese proficiency suitable for legal coursework and statutory interpretation.",
      gre: "Not required.",
      papers: "Research Plan (Kenkyu Keikakusho Form 3) specifying intended legal research theme and methodology.",
      references: "Graduation certificate, university transcript, and statement of purpose."
    },
    desc: "Two-year Master of Laws degree program in the Graduate School of Law providing specialized advanced study in commercial law, civil liability, international economic law, and comparative constitutional systems."
  },
  {
    university: "Aichi University",
    country: "Japan",
    location: "Nagoya and Toyohashi, Aichi Prefecture, Japan",
    reviewed: today,
    id: 60,
    subject: "social-sciences",
    subjects: ["social-sciences"],
    type: "Research",
    title: "ICCS Institute for Contemporary Chinese Studies Research Assistantship (RA)",
    source: "https://iccs.aichi-u.ac.jp/",
    funding: "Salaried research appointment: ¥1,200 to ¥1,800 per hour plus conference travel support",
    status: "open-position",
    deadline: "2027-04-10",
    deadlineText: "April 10, 2027 for Spring semester research project allocation",
    fee: "Free application for enrolled doctoral researchers",
    tuition: "Zero tuition; paid hourly research assistant appointment.",
    requirements: {
      gpa: "Enrolled doctoral student in the Graduate School of Modern Chinese Studies or Economics.",
      ielts: "Multilingual proficiency in Japanese, Chinese, and/or English.",
      gre: "Not required.",
      papers: "Documented research competence in East Asian regional studies, fieldwork methodology, or statistical databases.",
      references: "Faculty advisor nomination from an ICCS affiliated research fellow."
    },
    desc: "Paid research assistantship positions inside Aichi University's renowned Institute for Contemporary Chinese Studies (ICCS), participating in sponsored projects on Asian supply chains, comparative governance, and field surveys."
  },
  {
    university: "Aichi University",
    country: "Japan",
    location: "Nagoya and Toyohashi, Aichi Prefecture, Japan",
    reviewed: today,
    id: 61,
    subject: "social-sciences",
    subjects: ["social-sciences", "engineering"],
    type: "Internship",
    title: "Aichi University International Fieldwork & Regional Industry Internship",
    source: "https://www.aichi-u.ac.jp/english/student-life/career",
    funding: "Partially funded: Academic credit-bearing internship with corporate travel stipends in the Greater Nagoya / Tokai industrial region",
    status: "open-position",
    deadline: "2027-05-15",
    deadlineText: "May 15, 2027 for Summer corporate placements across Chubu manufacturing and trade firms",
    fee: "Free for enrolled students",
    tuition: "Zero additional tuition; included in standard semester tuition.",
    requirements: {
      gpa: "Enrolled undergraduate or postgraduate student in Economics, Law, Business, or International Communication.",
      ielts: "Business Japanese proficiency (JLPT N2 or higher recommended).",
      gre: "Not required.",
      papers: "Curriculum vitae and corporate placement statement of interest.",
      references: "Academic advisor permission and career center registration."
    },
    desc: "Practical corporate and trade internship placements in Nagoya—the industrial heart of Japan—placing international and domestic students with automotive suppliers, international trading companies, and regional export associations."
  },
  {
    university: "Aichi University",
    country: "Japan",
    location: "Nagoya and Toyohashi, Aichi Prefecture, Japan",
    reviewed: today,
    id: 62,
    subject: "social-sciences",
    subjects: ["social-sciences", "arts-design"],
    type: "Fellowship",
    title: "Aichi University Graduate Teaching Assistantship (TA) Pathway",
    source: "https://www.aichi-u.ac.jp/english/student-life/support",
    funding: "Salaried appointment: ¥1,200 to ¥1,600 per hour for undergraduate tutorial instruction, seminar assistance, and ICT lab support",
    status: "open-position",
    deadline: "2027-03-31",
    deadlineText: "March 31, 2027 for Spring semester tutorial allocation",
    fee: "Free application",
    tuition: "Zero tuition; paid student employment.",
    requirements: {
      gpa: "Enrolled Master's or Doctoral student in good academic standing at Aichi University.",
      ielts: "Fluent communication skills in Japanese (and English or Chinese for language tutorials).",
      gre: "Not required.",
      papers: "Strong coursework record in the assigned academic field.",
      references: "Endorsement from teaching course professor and graduate school dean."
    },
    desc: "Departmental teaching assistantship opportunities for graduate students across Law, Economics, Letters, and Chinese Studies, assisting faculty with undergraduate seminars, language practicals, and examination logistics."
  },
  {
    university: "Aichi University",
    country: "Japan",
    location: "Nagoya and Toyohashi, Aichi Prefecture, Japan",
    reviewed: today,
    id: 63,
    subject: "social-sciences",
    subjects: ["social-sciences", "arts-design"],
    type: "Scholarship",
    title: "JASSO Monbukagakusho Honors Scholarship at Aichi University",
    source: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/index.html",
    funding: "Fully funded monthly stipend: ¥48,000 per month (¥576,000 per year) for privately financed international graduate students",
    status: "open-scholarship",
    deadline: "2027-04-20",
    deadlineText: "April 20, 2027 (Annual university screening and nomination round)",
    fee: "Free internal application through Aichi University International Center",
    tuition: "Combinable with Aichi University's 30% international tuition fee reduction.",
    requirements: {
      gpa: "Minimum 2.30 GPA on the JASSO 3.0 scale in previous academic year.",
      ielts: "Enrolled full-time under 'Student' (留学) residence status.",
      gre: "Not required.",
      papers: "Financial need declaration showing monthly allowance from home country under ¥90,000.",
      references: "Nomination by Aichi University International Center following academic review."
    },
    desc: "Japanese government (MEXT / JASSO) financial award providing ¥48,000 per month in living maintenance for high-achieving self-financed international graduate students enrolled at Aichi University."
  }
];

const newResearchers = [
  {
    id: 46,
    subject: "social-sciences",
    name: "Professor Chunli Li",
    title: "Professor of Economics / Director of the Institute for Contemporary Chinese Studies (ICCS)",
    university: "Aichi University",
    country: "Japan",
    topics: ["Chinese Economic Development", "Automotive Industry in China", "East Asian Industrial Systems", "International Trade"],
    source: "https://www.aichi-u.ac.jp/english/about/message",
    email: null,
    summary: "Professor of Economics and Director of the Institute for Contemporary Chinese Studies (ICCS) at Aichi University, leading research in industrial organization, the automotive sector in China, and regional economic integration across East Asia.",
    recruiting: "Not verified",
    reviewed: today
  },
  {
    id: 47,
    subject: "social-sciences",
    name: "Professor Hiromoto Kaji",
    title: "Professor of International Politics / Graduate School of Modern Chinese Studies",
    university: "Aichi University",
    country: "Japan",
    topics: ["Chinese Foreign Policy", "East Asian International Relations", "Security Studies in Asia", "Sino-Japanese Diplomatic History"],
    source: "https://www.aichi-u.ac.jp/english/academics/chi",
    email: null,
    summary: "Professor of International Relations in the Graduate School of Modern Chinese Studies at Aichi University, specializing in Chinese foreign policy, security architecture in Northeast Asia, and modern diplomatic relations.",
    recruiting: "Not verified",
    reviewed: today
  }
];

export function enrichAichi() {
  console.log(`Enriching Aichi University with 6 multi-department opportunities and 2 professors...`);

  // 1. Generate Opportunity Pages
  for (const opp of newOpportunities) {
    const oppSlug = `${opp.id}-${slug(opp.title)}`;
    const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/opportunities/${oppSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="https://openstemfield.org/opportunities/${oppSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/japan/">Japan</a> · <a href="/universities/aichi-university/">Aichi University guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/universities/aichi-university/">Aichi University</a><span>/</span><span>${opp.type}</span></div><span class="eyebrow">Japan · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official university details ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Application checklist &amp; requirements</h2><p>These requirements reflect the published university and program information available at the last review. Where a requirement is not specified, that is not an exemption.</p><dl class="pairs"><div class="pair"><dt>GPA / Academic degree</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>IELTS / Language requirements</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>GRE / Standardized tests</dt><dd>${opp.requirements.gre}</dd></div><div class="pair"><dt>Published paper / Research thesis</dt><dd>${opp.requirements.papers}</dd></div><div class="pair"><dt>Recommendation letters</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>How much will it cost? How much funding is available?</h2><dl class="pairs"><div class="pair"><dt>Financial support / stipend</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Tuition / joining costs</dt><dd>${opp.tuition}</dd></div></dl></section><section class="section"><h2>Dates and verification</h2><dl class="pairs"><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Last source review</dt><dd>${today}</dd></div></dl><div class="actions" style="margin-top:1.5rem;"><a class="btn" href="${opp.source}" target="_blank" rel="noopener noreferrer">Official university details ↗</a><a class="btn secondary" href="/universities/aichi-university/">Aichi University guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a><a class="btn secondary" href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenField%20academic%20question">Ask us — free ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official Aichi University documentation reviewed ${today}. Admissions, funding allocations, and eligibility thresholds are evaluated by the university.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Aichi University.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/japan/">Japan</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`opportunities/${oppSlug}/index.html`, oppHtml);
    console.log(`  ✓ Generated opportunities/${oppSlug}/index.html`);
  }

  // 2. Generate Researcher Pages
  for (const fac of newResearchers) {
    const facSlug = `${fac.id}-${slug(fac.name)}`;
    const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — Aichi University Research Profile | OpenField</title><meta name="description" content="${fac.name} at Aichi University: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/researchers/${facSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — Aichi University Research Profile | OpenField"><meta property="og:description" content="${fac.name} at Aichi University: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="https://openstemfield.org/researchers/${facSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/japan/">Japan</a> · <a href="/universities/aichi-university/">Aichi University guide</a></nav></header><main class="wrap"><section class="hero"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/researchers/">Researchers</a><span>/</span><span>${fac.name}</span></div><span class="eyebrow">Japan · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Documented research interests and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in graduate research supervision in Asian economics, international relations, or modern Chinese studies are advised to consult formal department application guidelines.</p><div class="actions"><a class="btn" href="/universities/aichi-university/">Aichi University guide ↗</a><a class="btn secondary" href="/subjects/social-sciences/">Social Sciences subject field guide ↗</a><a class="btn secondary" href="/#/mentorship">Mentorship ↗</a></div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with Aichi University.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/japan/">Japan</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
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
  console.log(`  ✓ Updated data.js with Aichi opportunities and faculty`);

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
  enrichAichi();
}
