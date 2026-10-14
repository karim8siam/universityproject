import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { subjects, opportunities, researchers } from '../data.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const slug = s => String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dhaka', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

const universityMap = {
  "Acadia University": "/universities/acadia-university/",
  "Alberta University of the Arts": "/universities/alberta-university-of-the-arts/",
  "Adelaide University": "/universities/adelaide-university/",
  "Academy of Fine Arts Dresden": "/universities/academy-of-fine-arts-dresden/",
  "Accademia di Belle Arti di Lecce": "/universities/accademia-di-belle-arti-di-lecce/",
  "A.T. Still University": "/universities/a-t-still-university/",
  "Aberystwyth University": "/universities/aberystwyth-university/",
  "Aichi University": "/universities/aichi-university/",
  "Blekinge Institute of Technology": "/universities/blekinge-institute-of-technology/",
  "University of Groningen": "/universities/university-of-groningen/",
  "ETH Zurich": "/universities/eth-zurich/",
  "The University of British Columbia": "/universities/university-of-british-columbia/",
  "The University of Melbourne": "/universities/the-university-of-melbourne/",
  "Technical University of Munich": "/universities/technical-university-of-munich/",
  "Sapienza University of Rome": "/universities/sapienza-university-of-rome/",
  "American University": "/universities/american-university/",
  "Imperial College London": "/universities/imperial-college-london/",
  "The University of Tokyo": "/universities/the-university-of-tokyo/",
  "KTH Royal Institute of Technology": "/universities/kth-royal-institute-of-technology/",
  "Eindhoven University of Technology": "/universities/eindhoven-university-of-technology/",
  "École Polytechnique Fédérale de Lausanne (EPFL)": "/universities/ecole-polytechnique-federale-de-lausanne/",
  "University of Toronto": "/universities/university-of-toronto/",
  "Curtin University": "/universities/curtin-university/",
  "Humboldt University of Berlin": "/universities/humboldt-university-of-berlin/",
  "Catholic University of Sacred Heart": "/universities/catholic-university-of-sacred-heart/",
  "Harvard University": "/universities/harvard-university/",
  "University of Cambridge": "/universities/university-of-cambridge/",
  "Kyoto University": "/universities/kyoto-university/",
  "Uppsala University": "/universities/uppsala-university/",
  "TU Delft (Delft University of Technology)": "/universities/delft-university-of-technology/",
  "University of Geneva": "/universities/university-of-geneva/",
  "McGill University": "/universities/mcgill-university/",
  "The University of Sydney": "/universities/the-university-of-sydney/",
  "Heidelberg University": "/universities/heidelberg-university/",
  "University of Milano-Bicocca": "/universities/university-of-milano-bicocca/",
  "Stanford University": "/universities/stanford-university/",
  "University College London": "/universities/university-college-london/",
  "Nagoya University": "/universities/nagoya-university/",
  "Stockholm University": "/universities/stockholm-university/",
  "Universiteit Leiden": "/universities/universiteit-leiden/",
  "University of Basel": "/universities/university-of-basel/"
};

const getUniPath = u => universityMap[u] || `/universities/${slug(u)}/`;

export function generateAllSubjectPages() {
  console.log(`Generating all 9 static subject pages from live data.js...`);

  for (const s of subjects) {
    const opps = opportunities.filter(o => (o.subjects || [o.subject]).includes(s.id));
    const fac = researchers.filter(r => r.subject === s.id);
    const uniNames = [...new Set([...opps.map(o => o.university), ...fac.map(f => f.university)])];

    const typeOrder = ["Scholarship", "Master's", "PhD", "Internship", "Research", "Fellowship"];
    const activeTypes = typeOrder.filter(t => opps.some(o => o.type === t));

    // Jump nav buttons
    const jumpLinks = activeTypes.map(t => {
      const count = opps.filter(o => o.type === t).length;
      const typeSlug = slug(t);
      return `<a href="#${typeSlug}">${t} (${count})</a>`;
    }).join('');

    // Opportunities grouped by type
    const oppSections = activeTypes.map(t => {
      const items = opps.filter(o => o.type === t);
      const typeSlug = slug(t);
      const cardsHtml = items.map(o => {
        const oppUrl = `/opportunities/${o.id}-${slug(o.title)}/`;
        const uniUrl = getUniPath(o.university);
        return `        <article class="card"${o.deadline ? ` data-deadline="${o.deadline}"` : ''}>
          <span class="tag">${o.type} · ${o.country} · ${o.deadline ? `Deadline: ${o.deadline}` : 'Reference intake'}</span>
          <h3><a href="${oppUrl}">${o.title}</a></h3>
          <p>${o.desc}</p>
          <p class="institution"><strong><a href="${uniUrl}">${o.university}</a></strong> · ${o.location}</p>
          <div class="mini"><span class="tag">Funding</span><br><b>${o.funding}</b></div>
          <div class="mini"><span class="tag">Application cost</span><br><b>${o.fee}</b></div>
          <div class="mini"><span class="tag">Deadline</span><br><b>${o.deadlineText || o.deadline || 'Verify current intake'}</b></div>
          <div class="actions">
            <a class="btn" href="${oppUrl}">Requirements &amp; Costs ↗</a>
            <a href="${o.source}" target="_blank" rel="noopener noreferrer">Official source ↗</a>
            <a class="btn secondary" href="${uniUrl}">University guide ↗</a>
          </div>
        </article>`;
      }).join('\n');

      return `      <section class="section itemgroup" id="${typeSlug}">
        <h2>${t}</h2>
        <p>Discover verified listings, degree pathways, and funding specifications across source-reviewed institutions; confirm all details with official university sources before applying.</p>
        <div class="grid">
${cardsHtml}
        </div>
      </section>`;
    }).join('\n');

    // Faculty cards
    const facultyCards = fac.map(f => {
      const facUrl = `/researchers/${f.id}-${slug(f.name)}/`;
      const uniUrl = getUniPath(f.university);
      return `        <article class="card">
          <span class="tag">${f.title}</span>
          <h3><a href="${facUrl}">${f.name}</a></h3>
          <p class="institution"><strong><a href="${uniUrl}">${f.university}</a></strong> (${f.country})</p>
          <p>${f.summary}</p>
          <p><strong>Fields:</strong> ${f.topics.join(', ')}</p>
          <div class="mini"><span class="tag">Recruitment status</span><br><b>Not verified — do not assume a vacancy</b></div>
          <div class="actions">
            <a class="btn" href="${facUrl}">Research profile ↗</a>
            <a href="${f.source}" target="_blank" rel="noopener noreferrer">Official faculty page ↗</a>
          </div>
        </article>`;
    }).join('\n');

    const facultySection = fac.length > 0 ? `      <section class="section">
        <h2>Researchers and faculty</h2>
        <p>These profiles list documented academic interests and public faculty information. Recruitment or research supervisor funding availability is not confirmed.</p>
        <div class="grid">
${facultyCards}
        </div>
      </section>` : `      <section class="section">
        <h2>Researchers and faculty</h2>
        <p>Faculty profiles for ${s.name} across newly added international institutions are currently in source verification. Additional faculty listings will appear following source review.</p>
      </section>`;

    // Universities participating
    const uniCardsHtml = uniNames.map(u => {
      const uPath = getUniPath(u);
      return `<a class="btn secondary" style="margin-right:0.5rem;margin-bottom:0.5rem;" href="${uPath}">${u} ↗</a>`;
    }).join('');

    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f7f5ee"><title>${s.name} Scholarships, Research &amp; Degree Programs | OpenField</title><meta name="description" content="Explore verified ${s.name} scholarships, master's degrees, PhD funding and faculty researchers across international universities on OpenField."><link rel="canonical" href="https://universityproject-chi.vercel.app/subjects/${s.id}/"><link rel="icon" href="/openfield-logo-mark.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet"><link rel="stylesheet" href="/seo.css"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollectionPage","name":"${s.name} Academic Opportunities","headline":"${s.name} Scholarships and Research Programs","dateModified":"${today}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a href="/" class="brand"><img src="/openfield-logo-mark.svg" alt="" width="45">OpenField</a><nav aria-label="Primary"><a href="/">Home</a><a href="/#/explore">Opportunities</a><a href="/#/researchers">Researchers</a><a href="/universities/">Universities</a><a href="/#/mentorship">Mentorship</a></nav></header><main><section class="hero wrap"><div class="crumb"><a href="/">Home</a><span>/</span><a href="/#/">Subjects</a><span>/</span><span>${s.name}</span></div><span class="eyebrow">Subject field guide · International universities · Reviewed ${today}</span><h1>${s.name}</h1><p>${s.tagline}. Discover verified scholarship opportunities, master's curricula, doctoral positions, and faculty profiles across source-reviewed institutions worldwide.</p><div class="meta"><span>Universities reviewed: ${uniNames.length} institutions (${uniNames.join(', ')})</span><span>Funding &amp; program records: ${opps.length}</span><span>Faculty records: ${fac.length}</span><span><a href="/#/explore">Interactive filters ↗</a></span></div></section><div class="wrap"><div class="band"><b>Only source-verified university information is displayed.</b><p>A listed master's program is not necessarily accepting applications today. Dated scholarship cards are removed after their deadlines, and professor recruitment status is never inferred.</p></div>${jumpLinks ? `<nav class="jump" aria-label="Opportunity types">${jumpLinks}</nav>` : ''}
${oppSections}
${facultySection}
      <section class="section">
        <h2>Source-reviewed universities in this field</h2>
        <p>Explore full admissions criteria, tuition structures, language conditions, and university portals:</p>
        <div style="margin-top:1rem;display:flex;flex-wrap:wrap;">
          ${uniCardsHtml}
        </div>
      </section>
    </div></main><footer class="footer"><div><strong>OpenField</strong><p>Independent research and scholarship information across international universities. Confirm all terms directly with the official institutions.</p></div><nav><a href="/about/">About</a><a href="/editorial-policy/">Editorial policy</a><a href="/privacy/">Privacy</a><a href="/contact/">Contact</a><a href="/sitemap.xml">Sitemap</a></nav></footer><script>(function(){const day=new Date().toLocaleDateString("en-CA");document.querySelectorAll("[data-deadline]").forEach(el=>{if(el.dataset.deadline<day)el.remove()})})();</script></body></html>\n`;

    const filePath = join(root, `subjects/${s.id}/index.html`);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, html, 'utf8');
    console.log(`  ✓ Built subjects/${s.id}/index.html (${opps.length} opps, ${fac.length} faculty across ${uniNames.length} universities)`);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAllSubjectPages();
}
