import { writeFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { opportunities, researchers, subjects } from '../data.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const countriesList = [
  { id: 'united-states', slug: 'usa', name: 'United States', code: 'USA', flag: '🇺🇸', desc: 'Over 800 accredited universities with extensive doctoral research assistantships, STEM OPT extensions, and department-funded fellowships.' },
  { id: 'united-kingdom', slug: 'uk', name: 'United Kingdom', code: 'UK', flag: '🇬🇧', desc: 'Historic Russell Group institutions, EPSRC PhD studentships, Chevening and Commonwealth scholarship frameworks.' },
  { id: 'canada', slug: 'canada', name: 'Canada', code: 'CAN', flag: '🇨🇦', desc: 'U15 research universities offering funded graduate assistantships, entrance scholarships, and post-graduation work opportunities.' },
  { id: 'germany', slug: 'germany', name: 'DEU', flag: '🇩🇪', desc: 'Tuition-free public universities, TU9 engineering consortium, DAAD scholarships, and Max Planck/Fraunhofer research institutes.' },
  { id: 'switzerland', slug: 'switzerland', name: 'CHE', flag: '🇨🇭', desc: 'World-renowned institutions like ETH Zurich and EPFL offering fully funded PhD assistantships and research excellence fellowships.' },
  { id: 'australia', slug: 'australia', name: 'AUS', flag: '🇦🇺', desc: 'Group of Eight (Go8) research powerhouses offering RTP scholarships, university talent schemes, and post-study work rights.' },
  { id: 'netherlands', slug: 'netherlands', name: 'NLD', flag: '🇳🇱', desc: 'High-ranking technical universities with paid doctoral candidate employee status and English-taught Master’s degrees.' },
  { id: 'sweden', slug: 'sweden', name: 'SWE', flag: '🇸🇪', desc: 'Pioneering Nordic research universities, Swedish Institute scholarships, and salaried PhD positions with social security.' },
  { id: 'italy', slug: 'italy', name: 'ITA', flag: '🇮🇹', desc: 'Centuries-old academic universities with regional DSU funding, university fee waivers, and EU Horizon research projects.' },
  { id: 'japan', slug: 'japan', name: 'JPN', flag: '🇯🇵', desc: 'National Seven Universities, MEXT government scholarships, and high-technology laboratory research environments.' }
];

const today = new Date().toISOString().split('T')[0] + 'T00:00:00Z';

function headerHtml(current) {
  return `<header class="header">
  <a class="brand" href="/">
    <img src="/openfield-logo-mark.svg" width="44" height="39" alt="OpenStemField logo" />
    <span>OpenStemField</span>
  </a>
  <nav>
    <a href="/universities/">Universities</a>
    <a href="/opportunities/" ${current === 'opportunities' ? 'style="color:var(--leaf);font-weight:750;"' : ''}>Opportunities</a>
    <a href="/researchers/" ${current === 'researchers' ? 'style="color:var(--leaf);font-weight:750;"' : ''}>Researchers</a>
    <a href="/subjects/" ${current === 'subjects' ? 'style="color:var(--leaf);font-weight:750;"' : ''}>Subjects</a>
    <a href="/countries/" ${current === 'countries' ? 'style="color:var(--leaf);font-weight:750;"' : ''}>Countries</a>
    <a href="/about/">About</a>
    <a href="/#/mentorship">Mentorship ✦</a>
  </nav>
</header>`;
}

function footerHtml() {
  return `<footer class="footer">
  <div>
    <strong>OpenStemField</strong>
    <p>Independently curated academic &amp; STEM directory indexing 1,662 universities, 11,072 funded opportunities, and 5,091 faculty researchers across 10 countries.</p>
  </div>
  <nav>
    <a href="/universities/">Universities</a>
    <a href="/opportunities/">Opportunities</a>
    <a href="/researchers/">Researchers</a>
    <a href="/subjects/">Subjects</a>
    <a href="/countries/">Countries</a>
    <a href="/scholarships/">Scholarships</a>
    <a href="/about/">About</a>
    <a href="/editorial-policy/">Editorial Policy</a>
    <a href="/privacy/">Privacy</a>
    <a href="/contact/">Contact</a>
    <a href="/sitemap.xml">Sitemap</a>
  </nav>
</footer>`;
}

// 1. BUILD /countries/index.html
function buildCountriesHub() {
  const cardsHtml = countriesList.map(c => `
    <article class="card">
      <div style="font-size:26px;margin-bottom:6px;">${c.flag}</div>
      <span class="tag">Study Destination · ${c.name}</span>
      <h3 style="margin:6px 0 10px;"><a href="/countries/${c.slug}/">${c.name} Higher Education Guide</a></h3>
      <p>${c.desc}</p>
      <div class="actions">
        <a class="btn" href="/countries/${c.slug}/">Explore ${c.name} Guide ↗</a>
      </div>
    </article>
  `).join('');

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#f7f5ee">
  <title>International Higher Education &amp; Country Guides | OpenStemField</title>
  <meta name="description" content="Explore higher education systems, university requirements, funding, and scholarships across 10 top study destinations worldwide.">
  <link rel="canonical" href="https://openstemfield.org/countries/">
  <link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/seo.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "International Higher Education Country Guides",
    "headline": "Higher Education & University Funding Across 10 Countries",
    "url": "https://openstemfield.org/countries/",
    "dateModified": "${today}",
    "publisher": {
      "@type": "Organization",
      "name": "OpenStemField",
      "url": "https://openstemfield.org/"
    }
  }
  </script>
</head>
<body>
  ${headerHtml('countries')}
  <main class="wrap">
    <div style="padding-top:28px;">
      <div class="crumb"><a href="/">Home</a><span>/</span><span>Countries</span></div>
    </div>
    <section class="hero">
      <span class="eyebrow">GLOBAL ACADEMIC ATLAS · 10 COUNTRIES</span>
      <h1>International Country &amp; Higher Education Guides</h1>
      <p>Discover university structures, admissions benchmarks, research assistantships, tuition frameworks, and post-study opportunities across 10 global destinations.</p>
      <div class="meta">
        <span>1,662 Verified Universities</span>
        <span>11,072 Degree Pathways</span>
        <span>Independent Academic Directory</span>
      </div>
    </section>
    <section class="section">
      <div class="grid">
        ${cardsHtml}
      </div>
    </section>
  </main>
  ${footerHtml()}
</body>
</html>`;

  writeFileSync(join(root, 'countries', 'index.html'), html, 'utf8');
  console.log('Created countries/index.html');
}

// 2. BUILD /subjects/index.html
function buildSubjectsHub() {
  const cardsHtml = subjects.map(s => `
    <article class="card">
      <div class="subject-icon-pill" style="margin-bottom:8px;">${s.icon}</div>
      <span class="tag">Academic Discipline · STEM</span>
      <h3 style="margin:6px 0 8px;"><a href="/subjects/${s.id}/">${s.name}</a></h3>
      <p>${s.tagline}. Key focus areas: ${s.topics.join(', ')}.</p>
      <div class="actions">
        <a class="btn" href="/subjects/${s.id}/">Explore ${s.name} Guide ↗</a>
      </div>
    </article>
  `).join('');

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#f7f5ee">
  <title>STEM Academic Disciplines &amp; Subject Guides | OpenStemField</title>
  <meta name="description" content="Explore verified scholarships, graduate programs, doctoral funding, and faculty researchers organized across 9 STEM disciplines.">
  <link rel="canonical" href="https://openstemfield.org/subjects/">
  <link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/seo.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "STEM Subject Guides",
    "headline": "Academic Programs and Research by STEM Subject",
    "url": "https://openstemfield.org/subjects/",
    "dateModified": "${today}",
    "publisher": {
      "@type": "Organization",
      "name": "OpenStemField",
      "url": "https://openstemfield.org/"
    }
  }
  </script>
</head>
<body>
  ${headerHtml('subjects')}
  <main class="wrap">
    <div style="padding-top:28px;">
      <div class="crumb"><a href="/">Home</a><span>/</span><span>Subjects</span></div>
    </div>
    <section class="hero">
      <span class="eyebrow">ACADEMIC DISCIPLINES · 9 STEM PILLARS</span>
      <h1>Subject &amp; Field Guides</h1>
      <p>Browse official scholarships, degree programs, and active researcher profiles organized by subject area.</p>
      <div class="meta">
        <span>9 Core Disciplines</span>
        <span>11,072 Opportunities</span>
        <span>5,091 Faculty Researchers</span>
      </div>
    </section>
    <section class="section">
      <div class="grid">
        ${cardsHtml}
      </div>
    </section>
  </main>
  ${footerHtml()}
</body>
</html>`;

  writeFileSync(join(root, 'subjects', 'index.html'), html, 'utf8');
  console.log('Created subjects/index.html');
}

// 3. BUILD /scholarships/index.html
function buildScholarshipsHub() {
  const schDirs = readdirSync(join(root, 'scholarships'), { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  const sampleScholarships = schDirs.slice(0, 30).map(s => {
    const title = s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `
      <article class="card">
        <span class="tag">Scholarship Guide</span>
        <h3 style="font-size:21px;margin:6px 0 8px;"><a href="/scholarships/${s}/">${title}</a></h3>
        <p>Comprehensive overview of eligibility criteria, award value, official deadlines, and university application portal links.</p>
        <div class="actions">
          <a class="btn" href="/scholarships/${s}/">Read Scholarship Details ↗</a>
        </div>
      </article>
    `;
  }).join('');

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#f7f5ee">
  <title>University Scholarships &amp; Financial Aid Guides | OpenStemField</title>
  <meta name="description" content="Explore verified university entrance scholarships, graduate research awards, and tuition reduction programs across top international institutions.">
  <link rel="canonical" href="https://openstemfield.org/scholarships/">
  <link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/seo.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "University Scholarships Directory",
    "headline": "Institutional Scholarships and Financial Aid Programs",
    "url": "https://openstemfield.org/scholarships/",
    "dateModified": "${today}",
    "publisher": {
      "@type": "Organization",
      "name": "OpenStemField",
      "url": "https://openstemfield.org/"
    }
  }
  </script>
</head>
<body>
  ${headerHtml('scholarships')}
  <main class="wrap">
    <div style="padding-top:28px;">
      <div class="crumb"><a href="/">Home</a><span>/</span><span>Scholarships</span></div>
    </div>
    <section class="hero">
      <span class="eyebrow">FUNDING &amp; SCHOLARSHIPS</span>
      <h1>University Entrance &amp; Merit Scholarships</h1>
      <p>Browse verified institutional scholarships, graduate tuition remissions, and merit-based international awards with direct links to official university portals.</p>
    </section>
    <section class="section">
      <div class="grid">
        ${sampleScholarships}
      </div>
    </section>
  </main>
  ${footerHtml()}
</body>
</html>`;

  writeFileSync(join(root, 'scholarships', 'index.html'), html, 'utf8');
  console.log('Created scholarships/index.html');
}

// 4. BUILD /opportunities/index.html
function buildOpportunitiesHub() {
  const oppTypes = [
    { type: 'Scholarship', count: opportunities.filter(o => o.type === 'Scholarship').length, desc: 'Entrance scholarships, merit awards, and departmental tuition waivers.' },
    { type: "Master's", count: opportunities.filter(o => o.type === "Master's").length, desc: 'Research-based and professional STEM Master of Science degree programs.' },
    { type: 'PhD', count: opportunities.filter(o => o.type === 'PhD').length, desc: 'Doctoral positions with Graduate Research Assistantships (RA) and teaching stipends.' },
    { type: 'Fellowship', count: opportunities.filter(o => o.type === 'Fellowship').length, desc: 'Competitive research fellowships and international scholar schemes.' },
    { type: 'Internship', count: opportunities.filter(o => o.type === 'Internship').length, desc: 'Summer laboratory research experiences and industrial training placements.' },
    { type: 'Research', count: opportunities.filter(o => o.type === 'Research').length, desc: 'Funded faculty research assistant opportunities across leading laboratories.' }
  ];

  const typesHtml = oppTypes.map(t => `
    <article class="card">
      <span class="tag">${t.type} · ${t.count} Records</span>
      <h3 style="font-size:22px;margin:6px 0 8px;">${t.type} Programs</h3>
      <p>${t.desc}</p>
      <div class="actions">
        <a class="btn" href="/#/explore">Search ${t.type} Listings ↗</a>
      </div>
    </article>
  `).join('');

  const sampleOpps = opportunities.slice(0, 18).map(o => {
    const slug = o.title.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `
      <article class="card">
        <span class="tag">${o.type} · ${o.country}</span>
        <h3 style="font-size:20px;margin:6px 0 8px;"><a href="/opportunities/${o.id}-${slug}/">${o.title}</a></h3>
        <p><strong>${o.university}</strong>. Funding: ${o.funding || 'Institutional review'}. Deadline: ${o.deadlineText || 'Check portal'}.</p>
        <div class="actions">
          <a class="btn secondary" href="/opportunities/${o.id}-${slug}/">Requirements &amp; Details ↗</a>
        </div>
      </article>
    `;
  }).join('');

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#f7f5ee">
  <title>11,000+ STEM Opportunities, Scholarships &amp; Graduate Programs | OpenStemField</title>
  <meta name="description" content="Explore over 11,000 verified STEM scholarships, Master's degrees, PhD funding, and research positions across international universities.">
  <link rel="canonical" href="https://openstemfield.org/opportunities/">
  <link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/seo.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "STEM Academic Opportunities and Degree Programs",
    "headline": "11,000+ STEM Scholarships, Master's and PhD Programs",
    "url": "https://openstemfield.org/opportunities/",
    "dateModified": "${today}",
    "publisher": {
      "@type": "Organization",
      "name": "OpenStemField",
      "url": "https://openstemfield.org/"
    }
  }
  </script>
</head>
<body>
  ${headerHtml('opportunities')}
  <main class="wrap">
    <div style="padding-top:28px;">
      <div class="crumb"><a href="/">Home</a><span>/</span><span>Opportunities</span></div>
    </div>
    <section class="hero">
      <span class="eyebrow">ACADEMIC ATLAS · 11,072 VERIFIED LISTINGS</span>
      <h1>University Programs, Funding &amp; Scholarships</h1>
      <p>Browse over 11,000 source-checked academic opportunities categorized by degree level, academic subject, and host country. Check GPA, language requirements, and application fees directly from official sources.</p>
      <div class="meta">
        <span>11,072 Opportunities</span>
        <span>10 Countries</span>
        <span>1,662 Universities</span>
        <span>9 Disciplines</span>
      </div>
    </section>
    <section class="section">
      <h2>Browse by Opportunity Type</h2>
      <div class="grid">
        ${typesHtml}
      </div>
    </section>
    <section class="section">
      <h2>Featured Academic Opportunities</h2>
      <div class="grid">
        ${sampleOpps}
      </div>
      <div style="text-align:center;margin:30px 0 50px;">
        <a class="stat-link" href="/#/explore">Open Interactive Search &amp; Filter Tool (11,000+ Listings) ↗</a>
      </div>
    </section>
  </main>
  ${footerHtml()}
</body>
</html>`;

  writeFileSync(join(root, 'opportunities', 'index.html'), html, 'utf8');
  console.log('Created opportunities/index.html');
}

// 5. BUILD /researchers/index.html
function buildResearchersHub() {
  const sampleFaculty = researchers.slice(0, 24).map(r => {
    const slug = `${r.id}-${r.name.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
    return `
      <article class="card">
        <span class="tag">${r.country} · ${r.topics[0] || 'Research'}</span>
        <h3 style="font-size:20px;margin:6px 0 8px;"><a href="/researchers/${slug}/">${r.name}</a></h3>
        <p><strong>${r.university}</strong> — ${r.title}</p>
        <p style="font-size:12px;color:#5a6e60;">Research areas: ${(r.topics || []).slice(0, 3).join(', ')}.</p>
        <div class="actions">
          <a class="btn secondary" href="/researchers/${slug}/">Faculty Profile ↗</a>
        </div>
      </article>
    `;
  }).join('');

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#f7f5ee">
  <title>5,091 Academic Faculty &amp; Researcher Profiles | OpenStemField</title>
  <meta name="description" content="Discover 5,091 verified faculty researchers, lab leaders, and academic supervisors across international universities on OpenStemField.">
  <link rel="canonical" href="https://openstemfield.org/researchers/">
  <link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/seo.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Academic Faculty and Researchers Directory",
    "headline": "5,091 Academic Faculty and Research Leaders",
    "url": "https://openstemfield.org/researchers/",
    "dateModified": "${today}",
    "publisher": {
      "@type": "Organization",
      "name": "OpenStemField",
      "url": "https://openstemfield.org/"
    }
  }
  </script>
</head>
<body>
  ${headerHtml('researchers')}
  <main class="wrap">
    <div style="padding-top:28px;">
      <div class="crumb"><a href="/">Home</a><span>/</span><span>Researchers</span></div>
    </div>
    <section class="hero">
      <span class="eyebrow">FACULTY &amp; RESEARCH LEADERS · 5,091 PROFILES</span>
      <h1>Academic Faculty &amp; Supervisors Directory</h1>
      <p>Discover 5,091 verified faculty researchers and department leaders across 10 countries and 9 STEM disciplines. Find potential supervisors and research mentors for your Master’s, PhD, and postdoctoral applications.</p>
      <div class="meta">
        <span>5,091 Verified Profiles</span>
        <span>1,662 Universities</span>
        <span>9 STEM Subjects</span>
      </div>
    </section>
    <section class="section">
      <h2>Browse Faculty Researchers</h2>
      <div class="grid">
        ${sampleFaculty}
      </div>
      <div style="text-align:center;margin:30px 0 50px;">
        <a class="stat-link" href="/#/researchers">Interactive Faculty Directory &amp; Filter (5,091 Profiles) ↗</a>
      </div>
    </section>
  </main>
  ${footerHtml()}
</body>
</html>`;

  writeFileSync(join(root, 'researchers', 'index.html'), html, 'utf8');
  console.log('Created researchers/index.html');
}

// 6. BUILD 404.html
function build404Page() {
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#f7f5ee">
  <title>Page Not Found (404) | OpenStemField</title>
  <meta name="description" content="The requested page could not be found. Explore verified university programs, scholarships, and researchers on OpenStemField.">
  <meta name="robots" content="noindex, follow">
  <link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/seo.css">
</head>
<body>
  ${headerHtml('')}
  <main class="wrap" style="text-align:center;padding:80px 0 100px;">
    <div style="max-width:600px;margin:0 auto;">
      <span class="eyebrow" style="color:#b25f24;">ERROR 404 · PAGE NOT FOUND</span>
      <h1 style="font-size:clamp(2.5rem,5vw,4.2rem);margin:16px 0 12px;">This Page Doesn't Exist</h1>
      <p style="font-size:16px;line-height:1.7;color:#5a6e60;margin-bottom:30px;">The link you followed may be expired or typed incorrectly. You can explore our verified academic directories below:</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:40px;">
        <a class="btn" href="/">Return to Homepage ↗</a>
        <a class="btn secondary" href="/universities/">Universities Directory ↗</a>
        <a class="btn secondary" href="/opportunities/">Opportunities Hub ↗</a>
        <a class="btn secondary" href="/researchers/">Faculty Researchers ↗</a>
      </div>
      <div class="band" style="text-align:left;">
        <b>Need help finding an academic program or scholarship?</b>
        <p>Reach out directly to Lead Advisor Siam at <a href="mailto:shahriyarkarimsiam@gmail.com?subject=OpenStemField%20Help%20Finding%20Program">shahriyarkarimsiam@gmail.com</a> or join our <a href="https://discord.com/invite/tBBKtvFJzW" target="_blank" rel="noopener noreferrer">Discord community</a>.</p>
      </div>
    </div>
  </main>
  ${footerHtml()}
</body>
</html>`;

  writeFileSync(join(root, '404.html'), html, 'utf8');
  console.log('Created 404.html');
}

buildCountriesHub();
buildSubjectsHub();
buildScholarshipsHub();
buildOpportunitiesHub();
buildResearchersHub();
build404Page();
console.log('All directory hubs and 404 page generated successfully!');
