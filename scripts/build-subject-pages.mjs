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
  "University of Basel": "/universities/university-of-basel/",
  "University of Waterloo": "/universities/university-of-waterloo/",
  "The University of Queensland": "/universities/the-university-of-queensland/",
  "RWTH Aachen University": "/universities/rwth-aachen-university/",
  "University of Milan": "/universities/university-of-milan/",
  "Massachusetts Institute of Technology": "/universities/massachusetts-institute-of-technology/",
  "The University of Edinburgh": "/universities/the-university-of-edinburgh/",
  "Osaka University": "/universities/osaka-university/",
  "Lund University": "/universities/lund-university/",
  "Vrije Universiteit Amsterdam": "/universities/vrije-universiteit-amsterdam/",
  "University of Lausanne": "/universities/university-of-lausanne/",
  "McMaster University": "/universities/mcmaster-university/",
  "UNSW Sydney": "/universities/unsw-sydney/",
  "Ludwig Maximilian University of Munich": "/universities/ludwig-maximilian-university-of-munich/",
  "University of Naples Federico II": "/universities/university-of-naples-federico-ii/",
  "University of California, Berkeley": "/universities/university-of-california-berkeley/",
  "The University of Manchester": "/universities/the-university-of-manchester/",
  "Hokkaido University": "/universities/hokkaido-university/",
  "Umeå University": "/universities/umea-university/",
  "Erasmus University Rotterdam": "/universities/erasmus-university-rotterdam/",
  "USI Università della Svizzera italiana": "/universities/usi-universita-della-svizzera-italiana/",
  "University of Calgary": "/universities/university-of-calgary/",
  "The University of Western Australia": "/universities/the-university-of-western-australia/",
  "University of Bonn": "/universities/university-of-bonn/",
  "Università Bocconi": "/universities/universita-bocconi/",
  "Columbia University": "/universities/columbia-university/",
  "King's College London": "/universities/kings-college-london/",
  "Kyushu University": "/universities/kyushu-university/",
  "Karolinska Institute": "/universities/karolinska-institute/",
  "Maastricht University": "/universities/maastricht-university/",
  "University of Zurich": "/universities/university-of-zurich/",
  "Queen's University": "/universities/queens-university/",
  "Monash University": "/universities/monash-university/",
  "University of Freiburg": "/universities/university-of-freiburg/",
  "University of Trento": "/universities/university-of-trento/",
  "Princeton University": "/universities/princeton-university/",
  "University of Bristol": "/universities/university-of-bristol/",
  "University of Tsukuba": "/universities/university-of-tsukuba/",
  "Stockholm School of Economics": "/universities/stockholm-school-of-economics/",
  "University of Twente": "/universities/university-of-twente/",
  "University of St. Gallen": "/universities/university-of-st-gallen/",
  "Western University": "/universities/western-university/",
  "RMIT University": "/universities/rmit-university/",
  "University of Göttingen": "/universities/university-of-goettingen/",
  "University of Padua": "/universities/university-of-padua/",
  "Yale University": "/universities/yale-university/",
  "University of Glasgow": "/universities/university-of-glasgow/",
  "Waseda University": "/universities/waseda-university/",
  "Swedish University of Agricultural Sciences": "/universities/swedish-university-of-agricultural-sciences/",
  "Wageningen University & Research": "/universities/wageningen-university-and-research/",
  "University of Bern": "/universities/university-of-bern/",
  "Ontario Tech University": "/universities/ontario-tech-university/",
  "Ontario Tech": "/universities/ontario-tech-university/",
  "Griffith University": "/universities/griffith-university/",
  "Griffith": "/universities/griffith-university/",
  "Leipzig University": "/universities/leipzig-university/",
  "Uni Leipzig": "/universities/leipzig-university/",
  "University of Salerno": "/universities/university-of-salerno/",
  "UniSa": "/universities/university-of-salerno/",
  "Vanderbilt University": "/universities/vanderbilt-university/",
  "Vanderbilt": "/universities/vanderbilt-university/",
  "Birmingham City University": "/universities/birmingham-city-university/",
  "BCU": "/universities/birmingham-city-university/",
  "Fukuoka Women's University": "/universities/fukuoka-womens-university/",
  "FWU": "/universities/fuji-womens-university/",
  "Royal College of Music": "/universities/royal-college-of-music/",
  "KMH": "/universities/royal-college-of-music/",
  "Saxion University of Applied Sciences": "/universities/saxion-university-of-applied-sciences/",
  "Saxion": "/universities/saxion-university-of-applied-sciences/",
  "Business School Lausanne": "/universities/business-school-lausanne/",
  "BSL": "/universities/business-school-lausanne/",
  "Brandon University": "/universities/brandon-university/",
  "Brandon": "/universities/brandon-university/",
  "Australian Catholic University": "/universities/australian-catholic-university/",
  "ACU": "/universities/australian-catholic-university/",
  "University of Kiel": "/universities/university-of-kiel/",
  "Kiel University": "/universities/university-of-kiel/",
  "Accademia di Belle Arti di Venezia": "/universities/accademia-di-belle-arti-di-venezia/",
  "Accademia Venezia": "/universities/accademia-di-belle-arti-di-venezia/",
  "University of Michigan": "/universities/university-of-michigan/",
  "UMich": "/universities/university-of-michigan/",
  "Manchester Metropolitan University": "/universities/manchester-metropolitan-university/",
  "Manchester Met": "/universities/manchester-metropolitan-university/",
  "Eikei University of Hiroshima": "/universities/eikei-university-of-hiroshima/",
  "Eikei": "/universities/eikei-university-of-hiroshima/",
  "Sophiahemmet Högskola": "/universities/sophiahemmet-hogskola/",
  "Sophiahemmet": "/universities/sophiahemmet-hogskola/",
  "Christelijke Hogeschool Ede": "/universities/christelijke-hogeschool-ede/",
  "CHE": "/universities/christelijke-hogeschool-ede/",
  "César Ritz Colleges Switzerland": "/universities/cesar-ritz-colleges-switzerland/",
  "César Ritz": "/universities/cesar-ritz-colleges-switzerland/",
  "Ambrose University": "/universities/ambrose-university/",
  "Ambrose": "/universities/ambrose-university/",
  "CQUniversity": "/universities/cquniversity/",
  "Esslingen University of Applied Sciences": "/universities/esslingen-university-of-applied-sciences/",
  "Hochschule Esslingen": "/universities/esslingen-university-of-applied-sciences/",
  "University of Camerino": "/universities/university-of-camerino/",
  "UNICAM": "/universities/university-of-camerino/",
  "Amherst College": "/universities/amherst-college/",
  "Amherst": "/universities/amherst-college/",
  "London School of Economics and Political Science": "/universities/london-school-of-economics/",
  "LSE": "/universities/london-school-of-economics/",
  "Hiroshima Institute of Technology": "/universities/hiroshima-institute-of-technology/",
  "HIT": "/universities/hiroshima-institute-of-technology/",
  "Linköping University": "/universities/linkoping-university/",
  "LiU": "/universities/linkoping-university/",
  "HU University of Applied Sciences Utrecht": "/universities/hu-university-of-applied-sciences-utrecht/",
  "Hogeschool Utrecht": "/universities/hu-university-of-applied-sciences-utrecht/",
  "University of Teacher Education Bern": "/universities/university-of-teacher-education-bern/",
  "PHBern": "/universities/university-of-teacher-education-bern/",
  "Burman University": "/universities/burman-university/",
  "Burman": "/universities/burman-university/",
  "Federation University Australia": "/universities/federation-university-australia/",
  "Federation": "/universities/federation-university-australia/",
  "FernUniversität in Hagen": "/universities/fernuniversitaet-in-hagen/",
  "FernUni Hagen": "/universities/fernuniversitaet-in-hagen/",
  "University of Insubria": "/universities/university-of-insubria/",
  "UniInsubria": "/universities/university-of-insubria/",
  "Appalachian State University": "/universities/appalachian-state-university/",
  "App State": "/universities/appalachian-state-university/",
  "Queen's University Belfast": "/universities/queens-university-belfast/",
  "Queen's Belfast": "/universities/queens-university-belfast/",
  "Health Sciences University of Hokkaido": "/universities/health-sciences-university-of-hokkaido/",
  "HSUH": "/universities/health-sciences-university-of-hokkaido/",
  "Marie Cederschiöld University": "/universities/marie-cederschiold-university/",
  "Marie Cederschiöld": "/universities/marie-cederschiold-university/",
  "University of Humanistic Studies": "/universities/university-of-humanistic-studies/",
  "UvH": "/universities/university-of-humanistic-studies/",
  "Webster Geneva Campus": "/universities/webster-geneva-campus/",
  "Webster Geneva": "/universities/webster-geneva-campus/",
  "Canadian Mennonite University": "/universities/canadian-mennonite-university/",
  "CMU": "/universities/canadian-mennonite-university/",
  "James Cook University": "/universities/james-cook-university/",
  "JCU": "/universities/james-cook-university/",
  "University of Rostock": "/universities/university-of-rostock/",
  "Uni Rostock": "/universities/university-of-rostock/",
  "University of Basilicata": "/universities/university-of-basilicata/",
  "UNIBAS": "/universities/university-of-basilicata/",
  "Alabama A&M University": "/universities/alabama-a-and-m-university/",
  "AAMU": "/universities/alabama-a-and-m-university/",
  "University of Bath": "/universities/university-of-bath/",
  "Bath": "/universities/university-of-bath/",
  "Fuji Women's University": "/universities/fuji-womens-university/",
  "Örebro University": "/universities/orebro-university/",
  "ORU": "/universities/orebro-university/",
  "University of Applied Sciences Leiden": "/universities/university-of-applied-sciences-leiden/",
  "Hogeschool Leiden": "/universities/university-of-applied-sciences-leiden/",
  "University Hospital Zurich": "/universities/university-hospital-of-zurich/",
  "USZ": "/universities/university-hospital-of-zurich/",
  "City University of Canada": "/universities/city-university-of-canada/",
  "CityU Canada": "/universities/city-university-of-canada/",
  "University of the Sunshine Coast": "/universities/university-of-the-sunshine-coast/",
  "UniSC": "/universities/university-of-the-sunshine-coast/",
  "Baden-Wuerttemberg Cooperative State University": "/universities/baden-wuerttemberg-cooperative-state-university/",
  "DHBW": "/universities/baden-wuerttemberg-cooperative-state-university/",
  "University of Campania Luigi Vanvitelli": "/universities/university-of-campania-luigi-vanvitelli/",
  "UniCampania": "/universities/university-of-campania-luigi-vanvitelli/",
  "Alabama State University": "/universities/alabama-state-university/",
  "ASU": "/universities/alabama-state-university/",
  "Newcastle University": "/universities/newcastle-university/",
  "Newcastle": "/universities/newcastle-university/",
  "Fukuoka Dental College": "/universities/fukuoka-dental-college/",
  "FDC": "/universities/fukuoka-dental-college/",
  "Sankt Ignatios College": "/universities/sankt-ignatios-college/",
  "Sankt Ignatios": "/universities/sankt-ignatios-college/",
  "Zuyd University of Applied Sciences": "/universities/zuyd-university-of-applied-sciences/",
  "Zuyd": "/universities/zuyd-university-of-applied-sciences/",
  "Citizen Science Zurich": "/universities/citizen-science-zurich/",
  "CSZ": "/universities/citizen-science-zurich/",
  "Concordia University of Edmonton": "/universities/concordia-university-of-edmonton/",
  "CUE": "/universities/concordia-university-of-edmonton/",
  "Batchelor Institute of Indigenous Tertiary Education": "/universities/batchelor-institute-of-indigenous-tertiary-education/",
  "Batchelor Institute": "/universities/batchelor-institute-of-indigenous-tertiary-education/",
  "AKAD University": "/universities/akad-university/",
  "AKAD": "/universities/akad-university/",
  "CIMBA Italy": "/universities/cimba-italy/",
  "CIMBA": "/universities/cimba-italy/",
  "Adams State University": "/universities/adams-state-university/",
  "Adams State": "/universities/adams-state-university/",
  "Birmingham Newman University": "/universities/birmingham-newman-university/",
  "Newman": "/universities/birmingham-newman-university/",
  "Hiroshima International University": "/universities/hiroshima-international-university/",
  "HIU": "/universities/hokkaido-information-university/",
  "Stockholms konstnärliga högskola": "/universities/stockholms-konstnarliga-hogskola/",
  "SKH": "/universities/stockholms-konstnarliga-hogskola/",
  "Arnhem Business School": "/universities/arnhem-business-school/",
  "ABS HAN": "/universities/arnhem-business-school/",
  "Zurich Elite Business School": "/universities/zurich-elite-business-school/",
  "ZEBS": "/universities/zurich-elite-business-school/",
  "College of the North Atlantic": "/universities/college-of-the-north-atlantic/",
  "CNA": "/universities/college-of-the-north-atlantic/",
  "Adelaide Institute of Higher Education": "/universities/adelaide-institute-of-higher-education/",
  "AIHE": "/universities/adelaide-institute-of-higher-education/",
  "Bavarian Academy of Sciences and Humanities": "/universities/bavarian-academy-of-sciences-and-humanities/",
  "BAdW": "/universities/bavarian-academy-of-sciences-and-humanities/",
  "Apulia Libera Università": "/universities/apulia-libera-universita/",
  "ALU": "/universities/apulia-libera-universita/",
  "Alaska Pacific University": "/universities/alaska-pacific-university/",
  "APU": "/universities/alaska-pacific-university/",
  "Arden University": "/universities/arden-university/",
  "Arden": "/universities/arden-university/",
  "Hiroshima Shudo University": "/universities/hiroshima-shudo-university/",
  "Shudo": "/universities/hiroshima-shudo-university/",
  "European Spallation Source": "/universities/european-spallation-source/",
  "ESS": "/universities/european-spallation-source/",
  "Amsterdam Tech": "/universities/amsterdam-tech/",
  "Zurich Business School (UIBS)": "/universities/zurich-business-school-uibs/",
  "UIBS Zurich": "/universities/zurich-business-school-uibs/",
  "Assiniboine College": "/universities/assiniboine-college/",
  "Assiniboine": "/universities/assiniboine-college/",
  "Torrens University Australia": "/universities/torrens-university-australia/",
  "Torrens": "/universities/torrens-university-australia/",
  "ADG Business School an der Steinbeis-Hochschule": "/universities/adg-business-school-steinbeis/",
  "ADG Business School": "/universities/adg-business-school-steinbeis/",
  "Centro E-Learning Università dei 5 Reali Siti": "/universities/centro-elearning-universita-5-reali-siti/",
  "5 Reali Siti": "/universities/centro-elearning-universita-5-reali-siti/",
  "Anderson University": "/universities/anderson-university/",
  "Anderson": "/universities/anderson-university/",
  "Belfast Metropolitan College": "/universities/belfast-metropolitan-college/",
  "Belfast Met": "/universities/belfast-metropolitan-college/",
  "Fukuoka Jogakuin University": "/universities/fukuoka-jogakuin-university/",
  "Fukujo": "/universities/fukuoka-jogakuin-university/",
  "Akademi för Ledarskap och Teologi": "/universities/akademi-for-ledarskap-och-teologi/",
  "ALT": "/universities/akademi-for-ledarskap-och-teologi/",
  "Amsterdam Center for Law & Economics": "/universities/amsterdam-center-for-law-and-economics/",
  "ACLE": "/universities/amsterdam-center-for-law-and-economics/",
  "SDBS Swiss Distance Business School": "/universities/sdbs-swiss-distance-business-school/",
  "SDBS": "/universities/sdbs-swiss-distance-business-school/",
  "Bow Valley College": "/universities/bow-valley-college/",
  "Bow Valley": "/universities/bow-valley-college/",
  "SAE University College": "/universities/sae-university-college/",
  "SAE": "/universities/sae-university-college/",
  "Berlin School of Economics and Law": "/universities/berlin-school-of-economics-and-law/",
  "HWR Berlin": "/universities/berlin-school-of-economics-and-law/",
  "CUOA Business School": "/universities/cuoa-business-school/",
  "CUOA": "/universities/cuoa-business-school/",
  "Angelo State University": "/universities/angelo-state-university/",
  "Angelo State": "/universities/angelo-state-university/",
  "Edge Hill University": "/universities/edge-hill-university/",
  "Edge Hill": "/universities/edge-hill-university/",
  "Hokkai-Gakuen University": "/universities/hokkai-gakuen-university/",
  "HGU": "/universities/hokkai-gakuen-university/",
  "Gammelkroppa skogsskola": "/universities/gammelkroppa-skogsskola/",
  "Gammelkroppa": "/universities/gammelkroppa-skogsskola/",
  "Nyenrode Business Universiteit": "/universities/nyenrode-business-universiteit/",
  "Nyenrode": "/universities/nyenrode-business-universiteit/",
  "Academy of Leadership Sciences Switzerland": "/universities/academy-of-leadership-sciences-switzerland/",
  "ALSS": "/universities/academy-of-leadership-sciences-switzerland/",
  "Cégep Limoilou": "/universities/cegep-limoilou/",
  "Limoilou": "/universities/cegep-limoilou/",
  "Nungalinya College": "/universities/nungalinya-college/",
  "Nungalinya": "/universities/nungalinya-college/",
  "DHBW Lörrach": "/universities/dhbw-loerrach/",
  "European College of Parma Foundation": "/universities/european-college-of-parma/",
  "European College of Parma": "/universities/european-college-of-parma/",
  "Arkansas Tech University": "/universities/arkansas-tech-university/",
  "ATU": "/universities/arkansas-tech-university/",
  "Leeds Arts University": "/universities/leeds-arts-university/",
  "Leeds Arts": "/universities/leeds-arts-university/",
  "Hokkaido Information University": "/universities/hokkaido-information-university/",
  "LINXS - Institute of Advanced Neutron and X-ray Science": "/universities/linxs-institute-of-advanced-neutron-and-x-ray-science/",
  "LINXS": "/universities/linxs-institute-of-advanced-neutron-and-x-ray-science/",
  "Bestuursacademie Nederland": "/universities/bestuursacademie-nederland/",
  "Bestuursacademie": "/universities/bestuursacademie-nederland/",
  "Swiss International Institute Lausanne": "/universities/swiss-international-institute-lausanne/",
  "SIIL": "/universities/swiss-international-institute-lausanne/",
  "Cégep Garneau": "/universities/cegep-garneau/",
  "Garneau": "/universities/cegep-garneau/",
  "Canterbury Institute of Management": "/universities/canterbury-institute-of-management/",
  "CIM": "/universities/canterbury-institute-of-management/",
  "Academy of Public Administration and Judiciary Meissen": "/universities/academy-of-public-administration-meissen/",
  "HSF Meißen": "/universities/academy-of-public-administration-meissen/",
  "Humanitas University": "/universities/humanitas-university/",
  "Hunimed": "/universities/humanitas-university/",
  "Augustana University": "/universities/augustana-university/",
  "Augustana": "/universities/augustana-university/",
  "Leeds Beckett University": "/universities/leeds-beckett-university/",
  "Leeds Beckett": "/universities/leeds-beckett-university/",
  "Hokkaido University of Education": "/universities/hokkaido-university-of-education/",
  "Hokkyodai": "/universities/hokkaido-university-of-education/",
  "Campus Skellefteå": "/universities/campus-skelleftea/",
  "CWTS - Centre for Science and Technology Studies": "/universities/cwts-leiden-university/",
  "CWTS": "/universities/cwts-leiden-university/",
  "Swiss Educational College": "/universities/swiss-educational-college/",
  "SEC": "/universities/swiss-educational-college/"
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
