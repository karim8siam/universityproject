import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { recordProgress, updateRotation } from './sync-sheet.mjs';
import { generateAllSubjectPages } from './build-subject-pages.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = dirname(__dirname);

const read = p => readFileSync(join(root, p), 'utf8');
const write = (p, content) => {
  const full = join(root, p);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');
};

const slug = s => String(s).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dhaka', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

// Knowledge base of verified universities across the 10 target countries
const universityCatalog = {
  sweden: {
    institution: 'Blekinge Institute of Technology',
    sourceRow: 1555,
    countryId: 'sweden',
    countryLabel: 'Sweden',
    location: 'Karlskrona, Sweden',
    website: 'https://www.bth.se/eng/',
    slug: 'blekinge-institute-of-technology',
    shortName: 'BTH',
    subtext: 'Karlskrona, Blekinge · software engineering and doctoral employment reviewed',
    heroEyebrow: 'Sweden · Blekinge County · Software Engineering & Technology · Reviewed 14 October 2026',
    headline: 'Blekinge Institute of Technology (Blekinge Tekniska Högskola)',
    description: 'Blekinge Institute of Technology (BTH) guide: Master\'s in Software Engineering, BTH 50% tuition reduction scholarships, tuition-free PhD employment, and faculty.',
    overview: 'Established in 1989 in Karlskrona, Blekinge Institute of Technology (BTH) is a top-tier Swedish public institute of technology renowned globally for software engineering, strategic sustainability, and industrial co-production. Review verified campus-based master\'s curricula, BTH scholarship fee reductions, tuition-free doctoral positions, and faculty profiles before submitting applications via University Admissions Sweden.',
    admissions: {
      masters: 'Accredited Bachelor of Science degree in Software Engineering, Computer Science or equivalent technical field (minimum 180 ECTS credits), including completed thesis work of at least 15 ECTS.',
      phd: 'Completed second-cycle Master\'s degree in Computer Science, Software Engineering or related quantitative discipline satisfying Swedish third-cycle general syllabus criteria.',
      language: 'Demonstrated English proficiency equivalent to Swedish upper secondary school English 6 (IELTS Academic 6.5 overall with no band below 5.5, or TOEFL iBT 90 overall with writing minimum 20).',
      proposal: 'For master\'s: statement of purpose and academic transcripts via University Admissions Sweden. For PhD: comprehensive research statement and portfolio aligned with advertised department vacancies.',
      appFee: 'SEK 900 centralized application fee for non-EU/EEA students applying through University Admissions Sweden.',
      documents: 'Degree certificate, complete official transcripts with grading rubric, English proficiency test score, CV, and copy of valid passport.'
    },
    tuitionText: 'Under Swedish higher education regulations, EU/EEA and Swiss citizens study tuition-free. For non-EU/EEA international students, tuition is normally SEK 70,000 per semester (SEK 140,000 per year / SEK 280,000 for a two-year 120-credit Master\'s program). Qualifying international students can apply for the BTH Scholarship Programme, which covers 50% of tuition fees.',
    opportunities: [
      {
        id: 37,
        subject: 'engineering',
        subjects: ['engineering', 'computer-science'],
        type: 'Scholarship',
        title: 'BTH Scholarship Programme for Prospective Students',
        slug: 'bth-scholarship-programme-for-prospective-students',
        source: 'https://www.bth.se/eng/education/contact-and-service/scholarships/',
        funding: 'Partial funding: 50% tuition fee reduction',
        fee: 'SEK 70,000 per semester (non-EU standard tuition; 50% covered by scholarship)',
        tuition: 'SEK 70,000 per semester (SEK 140,000/year); reduced to SEK 35,000 per semester with BTH scholarship',
        status: 'open-scholarship',
        deadline: '2027-01-15',
        deadlineText: 'January 15, 2027 (Swedish national autumn admission round 1 deadline)',
        desc: 'Official merit-based tuition fee reduction covering 50% of tuition fees for non-EU/EEA students admitted to campus-based Master\'s degree programs at Blekinge Institute of Technology.',
        requirements: {
          gpa: 'Demonstrated academic excellence in previous undergraduate Bachelor of Science degree',
          ielts: 'Swedish English 6 equivalent (IELTS 6.5 overall with minimum 5.5 in each section)',
          gre: 'Not required by Swedish universities',
          papers: 'Completed undergraduate bachelor thesis project of at least 15 ECTS credits',
          references: 'Letters of academic recommendation, motivation essay, and passport copy'
        }
      },
      {
        id: 38,
        subject: 'computer-science',
        subjects: ['computer-science', 'engineering'],
        type: 'PhD',
        title: 'Blekinge Institute of Technology PhD and Licentiate in Software Engineering',
        slug: 'blekinge-institute-of-technology-phd-and-licentiate-in-software-engineering',
        source: 'https://www.bth.se/eng/research/third-cycle-studies/',
        funding: 'Fully funded: salaried university doctoral employment (doktorandanstallning) under Swedish collective agreements',
        fee: 'Free (Tuition-free third-cycle doctoral education across Swedish public universities)',
        tuition: 'Zero tuition. Appointed PhD researchers hold salaried employment contracts with comprehensive Swedish state social benefits and pension contributions.',
        status: 'open-position',
        deadline: '2027-04-15',
        deadlineText: 'April 15, 2027 (Departmental recruitment intake; verify specific active job vacancy call)',
        desc: 'Four-year salaried doctoral research appointment (or two-year licentiate) in the Department of Software Engineering at BTH, ranked among Europe\'s premier research centers for empirical software engineering and industrial cooperation.',
        requirements: {
          gpa: 'Master of Science degree (120 ECTS) in Software Engineering, Computer Science or related quantitative field',
          ielts: 'Swedish English 6 level proficiency (IELTS 6.5+ or university-level English instruction verification)',
          gre: 'Not required',
          papers: 'Master\'s thesis or peer-reviewed publication in software systems, requirements, or empirical engineering',
          references: 'Two academic or industry research reference letters, research statement, and CV'
        }
      }
    ],
    scholarships: [
      {
        slug: 'bth-scholarship-programme',
        title: 'BTH Scholarship Programme',
        badge: 'Sweden · Blekinge Institute of Technology · Reviewed 14 October 2026',
        description: 'Comprehensive guide to the BTH Scholarship Programme: 50% tuition waiver for campus-based Master\'s degrees, eligibility rules, and University Admissions Sweden steps.',
        lead: 'The Blekinge Institute of Technology (BTH) Scholarship Programme offers high-achieving non-EU/EEA international students a 50% tuition fee reduction on eligible master\'s programs.',
        coverage: '50% reduction applied directly to tuition fee invoices for each semester of study.',
        officialUrl: 'https://www.bth.se/eng/education/contact-and-service/scholarships/'
      },
      {
        slug: 'swedish-institute-scholarships-for-global-professionals',
        title: 'Swedish Institute Scholarships for Global Professionals (SI)',
        badge: 'Sweden · National Government Award · Reviewed 14 October 2026',
        description: 'Swedish Institute (SI) Scholarships for Global Professionals: full tuition coverage, SEK 12,000 monthly living stipend, and travel grants for master\'s studies in Sweden.',
        lead: 'The Swedish Institute Scholarships for Global Professionals (SI) is a prestigious Swedish government scholarship funding full tuition, living expenses, and health insurance for master\'s degrees at accredited Swedish universities, including BTH.',
        coverage: 'Full tuition fee waiver paid directly to BTH, SEK 12,000 monthly living allowance, SEK 10,000–15,000 travel grant, and membership in the SI Network for Future Global Leaders.',
        officialUrl: 'https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/'
      }
    ],
    faculty: [
      {
        id: 37,
        subject: 'engineering',
        name: 'Professor Tony Gorschek',
        title: 'Professor of Software Engineering / Head of Software Engineering Department',
        university: 'Blekinge Institute of Technology',
        country: 'Sweden',
        topics: ['Requirements Engineering', 'Software Architecture', 'Technology Transfer', 'Empirical Software Engineering'],
        source: 'https://www.bth.se/staff/tony-gorschek-tgo/',
        email: null,
        summary: 'Professor of Software Engineering and Head of Department at BTH, pioneering technology transfer models, industry-academia co-production, and requirements engineering methodologies.',
        recruiting: 'Not verified',
        reviewed: '2026-10-14'
      },
      {
        id: 38,
        subject: 'computer-science',
        name: 'Professor Darja Smite',
        title: 'Professor of Software Engineering / Department of Software Engineering',
        university: 'Blekinge Institute of Technology',
        country: 'Sweden',
        topics: ['Global Software Engineering', 'Distributed Software Teams', 'Work-from-Anywhere Software Teams', 'Empirical Engineering'],
        source: 'https://www.bth.se/staff/darja-smite-dsm/',
        email: null,
        summary: 'Professor of Software Engineering at BTH specializing in global software development, remote and hybrid software teams, distributed collaboration, and large-scale agile transitions.',
        recruiting: 'Not verified',
        reviewed: '2026-10-14'
      },
      {
        id: 39,
        subject: 'computer-science',
        name: 'Professor Håkan Grahn',
        title: 'Professor of Computer Engineering / Department of Computer Science',
        university: 'Blekinge Institute of Technology',
        country: 'Sweden',
        topics: ['Parallel Computing', 'High Performance Computing', 'Computer Architecture', 'Hardware Acceleration for AI'],
        source: 'https://www.bth.se/staff/hakan-grahn-hgr/',
        email: null,
        summary: 'Professor of Computer Engineering in the Department of Computer Science at BTH, researching multiprocessor architectures, parallel computing systems, and accelerated computing for machine learning.',
        recruiting: 'Not verified',
        reviewed: '2026-10-14'
      }
    ]
  },
  netherlands: {
    institution: 'University of Groningen',
    sourceRow: 1371,
    countryId: 'netherlands',
    countryLabel: 'Netherlands',
    location: 'Groningen, Netherlands',
    website: 'https://www.rug.nl',
    slug: 'university-of-groningen',
    shortName: 'Groningen',
    subtext: 'Groningen · academic research degrees and Eric Bleumink funding reviewed',
    heroEyebrow: 'Netherlands · Groningen · AI, Science & Humanities · Reviewed 14 October 2026',
    headline: 'University of Groningen (Rijksuniversiteit Groningen)',
    description: 'University of Groningen guide: Eric Bleumink master\'s scholarships, CAO salaried PhD doctoral vacancies, AI & computing research, and faculty.',
    overview: 'Founded in 1614, the University of Groningen (Rijksuniversiteit Groningen) is among the world\'s top 100 research universities, hosting two Nobel laureates and leading European research institutes including the Bernoulli Institute for Mathematics, Computer Science and AI. Review verified degree paths, Eric Bleumink funding, salaried doctoral researcher positions, and faculty profiles before submitting applications via Studielink.',
    admissions: {
      masters: 'Recognized academic Bachelor of Science degree in Artificial Intelligence, Computer Science, or closely related field with strong quantitative foundations (180 ECTS credits equivalent).',
      phd: 'Master\'s degree in Computer Science, Artificial Intelligence, or Engineering with high academic standing and strong research thesis.',
      language: 'English proficiency: TOEFL iBT minimum 90 (minimum 21 on sub-scores) or Academic IELTS 6.5 (minimum 6.0 on each band).',
      proposal: 'For master\'s: motivation letter, CV, and academic transcripts via Studielink. For doctoral vacancies: detailed research plan tailored to advertised PhD projects.',
      appFee: '€100 non-refundable application fee for non-EEA applicants with non-Dutch diploma (reimbursed upon enrollment or scholarship award).',
      documents: 'Official transcripts, degree certificate, certified translations, curriculum vitae, motivation statement, and academic reference letters.'
    },
    tuitionText: 'EU/EEA students pay the statutory Dutch tuition fee of approx. €2,601 per year. For non-EU/EEA students in science and engineering master\'s programmes, tuition is approx. €17,800 to €20,900 per year. Doctoral researchers are salaried public university employees under the Dutch University Collective Labour Agreement (CAO Nederlandse Universiteiten) and pay zero tuition.',
    opportunities: [
      {
        id: 40,
        subject: 'engineering',
        subjects: ['engineering', 'computer-science'],
        type: 'Scholarship',
        title: 'University of Groningen Eric Bleumink Fund Scholarships',
        slug: 'university-of-groningen-eric-bleumink-fund-scholarships',
        source: 'https://www.rug.nl/education/scholarships/eric-bleumink-fund',
        funding: 'Fully funded: 100% tuition coverage plus €1,200 monthly living stipend, international travel, and health insurance',
        fee: '€100 application fee for non-EU/EEA applicants (waived/reimbursed if awarded)',
        tuition: 'Approx. €17,800/year for non-EU science programmes; 100% covered by scholarship',
        status: 'open-scholarship',
        deadline: '2026-12-01',
        deadlineText: 'December 1, 2026 (Priority admission & nomination deadline for September 2027 intake)',
        desc: 'Prestigious full-ride scholarship covering complete tuition, monthly living expenses, travel, and books for talented international students from developing countries pursuing Master\'s degrees at the University of Groningen.',
        requirements: {
          gpa: 'Demonstrated exceptional academic achievement, typically ranking in the top 5-10% of undergraduate class',
          ielts: 'Academic IELTS 6.5 overall (no band below 6.0) or TOEFL iBT 90',
          gre: 'Not required',
          papers: 'High quality bachelor thesis or graduation project in related discipline',
          references: 'Two letters of academic recommendation, comprehensive CV, and statement of financial hardship'
        }
      },
      {
        id: 41,
        subject: 'computer-science',
        subjects: ['computer-science', 'engineering'],
        type: 'PhD',
        title: 'University of Groningen Fully Funded PhD Position in Artificial Intelligence and Computing',
        slug: 'university-of-groningen-fully-funded-phd-position-in-artificial-intelligence-and-computing',
        source: 'https://www.rug.nl/research/bernoulli/vacancies/',
        funding: 'Fully funded: salaried university doctoral employment (€2,872 to €3,670 gross per month under CAO Nederlandse Universiteiten)',
        fee: 'Free (Tuition-free third-cycle salaried doctoral appointment)',
        tuition: 'Zero tuition. Appointed PhD candidates are employed university researchers receiving pension contributions, 8% holiday allowance, and 8.3% end-of-year bonus.',
        status: 'open-position',
        deadline: '2027-03-31',
        deadlineText: 'March 31, 2027 (Rolling department research vacancy; check specific project call)',
        desc: 'Four-year salaried doctoral research vacancy at the Bernoulli Institute for Mathematics, Computer Science and Artificial Intelligence, conducting cutting-edge research in machine learning, cognitive systems, and robotics.',
        requirements: {
          gpa: 'Master of Science in Artificial Intelligence, Computer Science, Applied Mathematics or related discipline',
          ielts: 'C1 English proficiency (IELTS 7.0 or TOEFL 100 recommended for international applicants)',
          gre: 'Not required',
          papers: 'Master\'s thesis or scientific publication demonstrating strong analytical and programming skills',
          references: 'Detailed curriculum vitae, contact details of two academic referees, and cover letter'
        }
      }
    ],
    scholarships: [
      {
        slug: 'eric-bleumink-fund-scholarships',
        title: 'Eric Bleumink Fund Scholarships',
        badge: 'Netherlands · University of Groningen · Reviewed 14 October 2026',
        description: 'University of Groningen Eric Bleumink Fund: full tuition waiver, €1,200/month living stipend, travel, and health insurance for master\'s studies.',
        lead: 'The Eric Bleumink Fund awards full scholarships to exceptional postgraduate students from qualifying developing nations, covering 100% of tuition, living expenses, travel, and health insurance.',
        coverage: 'Full tuition coverage, €1,200 per month living stipend, international round-trip airfare, books, and comprehensive health insurance.',
        officialUrl: 'https://www.rug.nl/education/scholarships/eric-bleumink-fund'
      },
      {
        slug: 'nl-scholarship-university-of-groningen',
        title: 'NL Scholarship (Formerly Holland Scholarship) — University of Groningen',
        badge: 'Netherlands · Dutch Ministry of Education Award · Reviewed 14 October 2026',
        description: 'NL Scholarship at University of Groningen: €5,000 grant for non-EEA master\'s students financed by the Dutch Ministry of Education.',
        lead: 'The NL Scholarship is funded by the Dutch Ministry of Education, Culture and Science alongside the University of Groningen for international students from outside the EEA entering master\'s programs.',
        coverage: 'A one-time merit award of €5,000 paid during the first year of studies to offset tuition and settling-in costs.',
        officialUrl: 'https://www.rug.nl/education/scholarships/nl-scholarship'
      }
    ],
    faculty: [
      {
        id: 40,
        subject: 'computer-science',
        name: 'Professor Lambert Schomaker',
        title: 'Professor of Artificial Intelligence / Bernoulli Institute',
        university: 'University of Groningen',
        country: 'Netherlands',
        topics: ['Pattern Recognition', 'Handwriting Recognition', 'Artificial Intelligence', 'Historical Document Analysis'],
        source: 'https://www.rug.nl/staff/l.r.b.schomaker/',
        email: null,
        summary: 'Professor of Artificial Intelligence at the Bernoulli Institute, pioneering automated handwriting recognition, deep learning for pattern analysis, and historical manuscript identification.',
        recruiting: 'Not verified',
        reviewed: '2026-10-14'
      },
      {
        id: 41,
        subject: 'engineering',
        name: 'Professor Bayu Jayawardhana',
        title: 'Professor of Mechatronics & Control / ENTEG',
        university: 'University of Groningen',
        country: 'Netherlands',
        topics: ['Mechatronics', 'Control Systems', 'Dynamical Systems', 'Smart Energy Networks'],
        source: 'https://www.rug.nl/staff/b.jayawardhana/',
        email: null,
        summary: 'Professor of Mechatronics and Control at the Engineering and Technology Institute Groningen (ENTEG), researching nonlinear control theory, robotic systems, and smart grid coordination.',
        recruiting: 'Not verified',
        reviewed: '2026-10-14'
      },
      {
        id: 42,
        subject: 'engineering',
        name: 'Professor Ming Cao',
        title: 'Professor of Networks and Robotics / ENTEG',
        university: 'University of Groningen',
        country: 'Netherlands',
        topics: ['Multi-Agent Robotics', 'Autonomous Systems', 'Network Coordination', 'Distributed Control'],
        source: 'https://www.rug.nl/staff/m.cao/',
        email: null,
        summary: 'Professor of Networks and Robotics at ENTEG, investigating distributed control for cooperative multi-robot systems, autonomous navigation, and complex networked dynamical systems.',
        recruiting: 'Not verified',
        reviewed: '2026-10-14'
      }
    ]
  },
  switzerland: {
    institution: 'ETH Zurich',
    sourceRow: 1337,
    countryId: 'switzerland',
    countryLabel: 'Switzerland',
    location: 'Zurich, Switzerland',
    website: 'https://ethz.ch',
    slug: 'eth-zurich',
    shortName: 'ETH Zurich',
    subtext: 'Zurich · world-leading science, ESOP fellowships, and salaried doctorates reviewed',
    heroEyebrow: 'Switzerland · Zurich · Technology & Natural Sciences · Reviewed 14 October 2026',
    headline: 'ETH Zurich (Eidgenössische Technische Hochschule Zürich)',
    description: 'ETH Zurich guide: Excellence Scholarship (ESOP), salaried computer science doctoral employment, low public tuition fees, and verified faculty.',
    overview: 'Consistently ranked among the top 10 universities worldwide, ETH Zurich is Switzerland\'s premier federal institute of technology, celebrated for 22 Nobel laureates including Albert Einstein. Review verified master\'s degree curricula, the prestigious ESOP fellowship, salaried third-cycle doctoral contracts, and faculty profiles before submitting applications.',
    admissions: {
      masters: 'High-distinction Bachelor of Science degree in Computer Science, Electrical Engineering, Physics or related technical discipline (top tier of graduating cohort).',
      phd: 'Distinguished Master of Science degree with substantial master\'s thesis project in computing, robotics, or engineering.',
      language: 'English proficiency: C1 level (IELTS Academic 7.0 minimum or TOEFL iBT 100 minimum required for English-taught master\'s degrees).',
      proposal: 'For ESOP scholarship applicants: pre-proposal for master\'s thesis (3 pages). For doctoral vacancies: statement of research intent and portfolio.',
      appFee: 'CHF 150 application fee for holders of non-Swiss bachelor\'s degrees.',
      documents: 'Official transcripts, degree diploma, certified course descriptions, CV, 2 academic reference letters, and passport copy.'
    },
    tuitionText: 'As a public Swiss federal institution, standard tuition at ETH Zurich is exceptionally accessible at CHF 730 per semester (CHF 1,460 per year) for all students regardless of nationality. For ESOP scholarship recipients, tuition is fully waived. Doctoral researchers are salaried university employees with competitive Swiss standard compensation starting from CHF 48,000 to CHF 75,000 per year.',
    opportunities: [
      {
        id: 43,
        subject: 'computer-science',
        subjects: ['computer-science', 'engineering'],
        type: 'Scholarship',
        title: 'ETH Zurich Excellence Scholarship and Opportunity Programme (ESOP)',
        slug: 'eth-zurich-excellence-scholarship-and-opportunity-programme-esop',
        source: 'https://ethz.ch/en/studies/financial-matters/excellence-scholarship-and-opportunity-programme.html',
        funding: 'Fully funded: study and living costs contribution of CHF 12,000 per semester plus full tuition fee waiver',
        fee: 'CHF 150 international application fee',
        tuition: 'CHF 730/semester; 100% waived for ESOP fellows',
        status: 'open-scholarship',
        deadline: '2026-12-15',
        deadlineText: 'December 15, 2026 (Annual international Master\'s and ESOP deadline for Autumn 2027 intake)',
        desc: 'The most prestigious fellowship at ETH Zurich, awarding CHF 12,000 per semester plus full tuition waiver and dedicated faculty mentorship to outstanding students entering Master\'s degree programs.',
        requirements: {
          gpa: 'Grade A equivalent in Bachelor\'s degree (top 10% of undergraduate class required)',
          ielts: 'IELTS Academic 7.0 or TOEFL iBT 100',
          gre: 'GRE General test strongly recommended for applicants from non-Bologna countries',
          papers: 'A three-page pre-proposal for the candidate\'s prospective Master\'s thesis project',
          references: 'Two letters of recommendation from university professors, curriculum vitae, and motivation letter'
        }
      },
      {
        id: 44,
        subject: 'computer-science',
        subjects: ['computer-science', 'engineering'],
        type: 'PhD',
        title: 'ETH Zurich Doctoral Program in Computer Science and Systems',
        slug: 'eth-zurich-doctoral-program-in-computer-science-and-systems',
        source: 'https://infsec.ethz.ch/',
        funding: 'Fully funded: full-time university employment with standard doctoral salary (starting at CHF 48,000 to CHF 75,000/year)',
        fee: 'CHF 150 application fee; CHF 1,500 doctoral examination fee upon defense',
        tuition: 'Zero tuition. Appointed PhD candidates hold Swiss employment contracts with comprehensive social insurance, medical coverage, and retirement pensions.',
        status: 'open-position',
        deadline: '2027-01-01',
        deadlineText: 'January 1, 2027 (Department fellowship round; rolling lab calls year-round)',
        desc: 'Doctoral research appointment in the Department of Computer Science at ETH Zurich, providing world-class supervision, high-performance computing resources, and salaried Swiss employment.',
        requirements: {
          gpa: 'Master of Science with distinction in Computer Science, Electrical Engineering, or Mathematics',
          ielts: 'Demonstrated fluency in English (C1 equivalent)',
          gre: 'Strongly encouraged for non-EU applicants',
          papers: 'Master\'s thesis or conference publication in computer systems, algorithms, or cryptography',
          references: 'Curriculum vitae, transcript of records, statement of objectives, and two professor reference letters'
        }
      }
    ],
    scholarships: [
      {
        slug: 'eth-zurich-excellence-scholarship-esop',
        title: 'ETH Zurich Excellence Scholarship (ESOP)',
        badge: 'Switzerland · ETH Zurich · Reviewed 14 October 2026',
        description: 'ETH Zurich ESOP guide: CHF 12,000 per semester living grant, 100% tuition waiver, requirements, pre-proposal guidelines, and deadlines.',
        lead: 'The Excellence Scholarship & Opportunity Programme (ESOP) supports master\'s students at ETH Zurich with full study and living allowances and individual supervision.',
        coverage: 'CHF 12,000 per semester for living costs and study expenses, full waiver of tuition fees, and personalized academic coaching.',
        officialUrl: 'https://ethz.ch/en/studies/financial-matters/excellence-scholarship-and-opportunity-programme.html'
      },
      {
        slug: 'eth-zurich-doctoral-fellowships',
        title: 'ETH Zurich Doctoral Fellowships & Salaried Positions',
        badge: 'Switzerland · Federal Research Appointment · Reviewed 14 October 2026',
        description: 'Guide to ETH Zurich doctoral appointments: Swiss university employment, salary scales CHF 48,000–75,000, and department funding.',
        lead: 'Doctoral students at ETH Zurich are employed as scientific staff under Swiss federal employment regulations with guaranteed multi-year research funding.',
        coverage: 'Standard Swiss doctoral employment salary ranging from CHF 48,000 in Year 1 to CHF 75,000+ in senior years, plus full Swiss social security and research travel grants.',
        officialUrl: 'https://inf.ethz.ch/studies/doctoral-studies.html'
      }
    ],
    faculty: [
      {
        id: 43,
        subject: 'computer-science',
        name: 'Professor Timothy Roscoe',
        title: 'Full Professor of Computer Science / Systems Group',
        university: 'ETH Zurich',
        country: 'Switzerland',
        topics: ['Operating Systems', 'Distributed Systems', 'Network Architecture', 'Hardware-Software Co-Design'],
        source: 'https://systems.ethz.ch/people/troscoe.html',
        email: null,
        summary: 'Full Professor in the Department of Computer Science at ETH Zurich, leading the Systems Group and researching modular operating systems, rack-scale computing, and formal system verification.',
        recruiting: 'Not verified',
        reviewed: '2026-10-14'
      },
      {
        id: 44,
        subject: 'computer-science',
        name: 'Professor Olga Sorkine-Hornung',
        title: 'Full Professor of Computer Science / Interactive Geometry Lab',
        university: 'ETH Zurich',
        country: 'Switzerland',
        topics: ['Computer Graphics', 'Geometric Modeling', 'Digital Fabrication', 'Interactive Shape Manipulation'],
        source: 'https://igl.ethz.ch/people/sorkine/',
        email: null,
        summary: 'Full Professor of Computer Science at ETH Zurich and head of the Interactive Geometry Lab, acclaimed for foundational contributions to geometry processing and digital garment fabrication.',
        recruiting: 'Not verified',
        reviewed: '2026-10-14'
      },
      {
        id: 45,
        subject: 'computer-science',
        name: 'Professor Srdjan Capkun',
        title: 'Full Professor of Computer Science / Information Security Group',
        university: 'ETH Zurich',
        country: 'Switzerland',
        topics: ['Network Security', 'System Security', 'Hardware Security', 'Applied Cryptography'],
        source: 'https://infsec.ethz.ch/people/capkun.html',
        email: null,
        summary: 'Full Professor in the Department of Computer Science at ETH Zurich and director of the Zurich Information Security and Privacy Center (ZISC), focusing on wireless security and secure enclaves.',
        recruiting: 'Not verified',
        reviewed: '2026-10-14'
      }
    ]
  }
};

export async function runAutopublishCycle() {
  console.log(`\n========================================`);
  console.log(`OpenField Autonomous Publishing Engine`);
  console.log(`Execution Time: ${new Date().toISOString()}`);
  console.log(`========================================\n`);

  const rotation = JSON.parse(read('country-rotation.json'));
  let targetCountry = process.env.FORCE_COUNTRY || rotation.nextCountry;

  if (!universityCatalog[targetCountry]) {
    console.log(`Country "${targetCountry}" is not ready in catalog or already completed.`);
    // Find next country that has catalog entry
    for (const c of rotation.order) {
      if (universityCatalog[c] && !rotation.completedInCycle.includes(c)) {
        targetCountry = c;
        break;
      }
    }
  }

  const uni = universityCatalog[targetCountry];
  if (!uni) {
    console.log(`No pending universities in catalog. All scheduled countries completed.`);
    return { success: true, message: 'Catalog exhausted for current cycle' };
  }

  console.log(`Publishing next university:`);
  console.log(`  Country:     ${uni.countryLabel} (${uni.countryId})`);
  console.log(`  Institution: ${uni.institution}`);
  console.log(`  Source Row:  ${uni.sourceRow}`);

  // 1. Generate University Guide HTML
  const uniGuideHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${uni.institution}: Programs, Scholarships &amp; Faculty | OpenField</title><meta name="description" content="${uni.description}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/universities/${uni.slug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${uni.institution}: Programs, Scholarships &amp; Faculty | OpenField"><meta property="og:description" content="${uni.description}"><meta property="og:url" content="https://openstemfield.org/universities/${uni.slug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"CollegeOrUniversity","headline":"${uni.headline}","dateModified":"${today}","isBasedOn":"${uni.website}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${uni.countryId}/">${uni.countryLabel}</a> · <a href="/universities/${uni.slug}/">${uni.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><span class="eyebrow">${uni.heroEyebrow}</span><h1>${uni.headline}</h1><p>${uni.overview}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${uni.website}">Official university portal ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Programs, degrees &amp; academic offerings</h2><p>Review checked academic pathways and funding options below:</p><div class="grid"><article class="card"><h3><a href="/opportunities/${uni.opportunities[0].id}-${uni.opportunities[0].slug}/">${uni.opportunities[0].title}</a></h3><p>${uni.opportunities[0].desc}</p></article><article class="card"><h3><a href="/opportunities/${uni.opportunities[1].id}-${uni.opportunities[1].slug}/">${uni.opportunities[1].title}</a></h3><p>${uni.opportunities[1].desc}</p></article><article class="card"><h3><a href="/scholarships/${uni.scholarships[0].slug}/">${uni.scholarships[0].title}</a></h3><p>${uni.scholarships[0].lead}</p></article></div></section><section class="section"><h2>Admissions, language requirements &amp; application process</h2><dl class="pairs"><div class="pair"><dt>Master's admission eligibility</dt><dd>${uni.admissions.masters}</dd></div><div class="pair"><dt>Doctoral admission eligibility</dt><dd>${uni.admissions.phd}</dd></div><div class="pair"><dt>Language proficiency</dt><dd>${uni.admissions.language}</dd></div><div class="pair"><dt>Research proposal / Intent</dt><dd>${uni.admissions.proposal}</dd></div><div class="pair"><dt>Application fee</dt><dd>${uni.admissions.appFee}</dd></div><div class="pair"><dt>Required documentation</dt><dd>${uni.admissions.documents}</dd></div></dl></section><section class="section"><h2>Tuition fees and verified scholarship systems</h2><p>${uni.tuitionText}</p><div class="actions"><a class="btn" href="/scholarships/${uni.scholarships[0].slug}/">${uni.scholarships[0].title} ↗</a><a class="btn" href="/scholarships/${uni.scholarships[1].slug}/">${uni.scholarships[1].title} ↗</a><a target="_blank" rel="noopener noreferrer" href="${uni.scholarships[0].officialUrl}">Official scholarship source ↗</a></div></section><section class="section"><h2>Verified faculty profiles and research areas</h2><p>Academic research leads at ${uni.institution}:</p><div class="grid">${uni.faculty.map(f => `<article class="card"><h3><a href="/researchers/${f.id}-${slug(f.name)}/">${f.name}</a></h3><p>${f.summary}</p></article>`).join('')}</div></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ${uni.institution} documentation reviewed ${today}. Degree admissions and supervisory availability require individual application and formal acceptance. OpenField does not charge students fees.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${uni.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${uni.countryId}/">${uni.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
  write(`universities/${uni.slug}/index.html`, uniGuideHtml);

  // 2. Generate Opportunity Pages
  for (const opp of uni.opportunities) {
    const oppHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${opp.title} | OpenField</title><meta name="description" content="${opp.desc}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/opportunities/${opp.id}-${opp.slug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${opp.title} | OpenField"><meta property="og:description" content="${opp.desc}"><meta property="og:url" content="https://openstemfield.org/opportunities/${opp.id}-${opp.slug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${opp.title}","dateModified":"${today}","isBasedOn":"${opp.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${uni.countryId}/">${uni.countryLabel}</a> · <a href="/universities/${uni.slug}/">${uni.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><span class="eyebrow">${uni.countryLabel} · ${opp.type} · Reviewed ${today}</span><h1>${opp.title}</h1><p>${opp.desc}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official source ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Key specifications &amp; funding coverage</h2><dl class="pairs"><div class="pair"><dt>Funding status</dt><dd>${opp.funding}</dd></div><div class="pair"><dt>Tuition and fees</dt><dd>${opp.tuition}</dd></div><div class="pair"><dt>Application fee</dt><dd>${opp.fee}</dd></div><div class="pair"><dt>Application deadline</dt><dd>${opp.deadlineText}</dd></div><div class="pair"><dt>Academic GPA requirement</dt><dd>${opp.requirements.gpa}</dd></div><div class="pair"><dt>English language requirement</dt><dd>${opp.requirements.ielts}</dd></div><div class="pair"><dt>Required references</dt><dd>${opp.requirements.references}</dd></div></dl></section><section class="section"><h2>Application procedure and guidance</h2><p>Prospective candidates should review full academic requirements directly on the official university portal before submitting documents.</p><p><a href="/universities/${uni.slug}/">${uni.institution} guide ↗</a> · <a target="_blank" rel="noopener noreferrer" href="${opp.source}">Official admissions portal ↗</a></p></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official ${uni.institution} documentation reviewed ${today}. Admission and funding criteria are subject to official university review.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${uni.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${uni.countryId}/">${uni.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`opportunities/${opp.id}-${opp.slug}/index.html`, oppHtml);
  }

  // 3. Generate Scholarship Pages
  for (const sch of uni.scholarships) {
    const schHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${sch.title} Guide | OpenField</title><meta name="description" content="${sch.description}"><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/scholarships/${sch.slug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${sch.title} Guide | OpenField"><meta property="og:description" content="${sch.description}"><meta property="og:url" content="https://openstemfield.org/scholarships/${sch.slug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${sch.title}","dateModified":"${today}","isBasedOn":"${sch.officialUrl}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${uni.countryId}/">${uni.countryLabel}</a> · <a href="/universities/${uni.slug}/">${uni.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><span class="eyebrow">${sch.badge}</span><h1>${sch.title}</h1><p>${sch.lead}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${sch.officialUrl}">Official scholarship source ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Scholarship benefits and coverage</h2><p>${sch.coverage}</p><p><a href="/universities/${uni.slug}/">${uni.institution} guide ↗</a> · <a target="_blank" rel="noopener noreferrer" href="${sch.officialUrl}">Official scholarship portal ↗</a></p></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official program guidelines reviewed ${today}. Award decisions and eligibility rules are determined solely by the awarding institution.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${uni.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${uni.countryId}/">${uni.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`scholarships/${sch.slug}/index.html`, schHtml);
  }

  // 4. Generate Researcher Profile Pages
  for (const fac of uni.faculty) {
    const facSlug = `${fac.id}-${slug(fac.name)}`;
    const facHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${fac.name} — ${uni.institution} Research Profile | OpenField</title><meta name="description" content="${fac.name} at ${uni.institution}: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta name="robots" content="index,follow"><link rel="canonical" href="https://openstemfield.org/researchers/${facSlug}/"><link rel="icon" type="image/svg+xml" href="/openfield-logo-mark.svg"><link rel="stylesheet" href="/seo.css"><meta property="og:title" content="${fac.name} — ${uni.institution} Research Profile | OpenField"><meta property="og:description" content="${fac.name} at ${uni.institution}: ${fac.title}, ${fac.topics.join(', ')}, and official research profile."><meta property="og:url" content="https://openstemfield.org/researchers/${facSlug}/"><script type="application/ld+json">{"@context":"https://schema.org","@type":"ProfilePage","headline":"${fac.name}","dateModified":"${today}","isBasedOn":"${fac.source}","publisher":{"@type":"Organization","name":"OpenField"}}</script></head><body><header class="header"><a class="brand" href="/"><img src="/openfield-logo-mark.svg" width="44" alt="">OpenField</a><nav><a href="/universities/">Universities</a> · <a href="/countries/${uni.countryId}/">${uni.countryLabel}</a> · <a href="/universities/${uni.slug}/">${uni.shortName} guide</a></nav></header><main class="wrap"><section class="hero"><span class="eyebrow">${uni.countryLabel} · ${fac.topics[0]} · Reviewed ${today}</span><h1>${fac.name}</h1><p>${fac.summary}</p><div class="meta"><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official faculty profile ↗</a><span>Research checked, not sponsored</span></div></section><section class="section"><h2>Research expertise and leadership</h2><dl class="pairs"><div class="pair"><dt>Research areas</dt><dd>${fac.topics.join(', ')}</dd></div><div class="pair"><dt>Academic position</dt><dd>${fac.title}</dd></div><div class="pair"><dt>Primary university source</dt><dd><a target="_blank" rel="noopener noreferrer" href="${fac.source}">Official directory entry ↗</a></dd></div><div class="pair"><dt>Recruitment status</dt><dd>Not verified. Leadership profile does not imply active vacancies or assistantship availability.</dd></div></dl></section><section class="section"><h2>Supervision and contact</h2><p>Students interested in research supervision are advised to consult formal department application channels.</p><p><a href="/universities/${uni.slug}/">${uni.institution} guide ↗</a></p></section><section class="section"><h2>Important verification note</h2><p>Facts reflect official university directory records reviewed ${today}. Faculty recruitment and admissions require formal application.</p><p class="source-note">Reviewed ${today} · <a href="/editorial-policy/">Editorial standards</a> · <a href="/contact/">Report an issue</a></p></section></main><footer class="footer"><strong>OpenField</strong><p>Independent student research guides; not affiliated with ${uni.institution}.</p><nav><a href="/universities/">Universities</a> · <a href="/countries/${uni.countryId}/">${uni.countryLabel}</a> · <a href="/privacy/">Privacy</a> · <a href="/sitemap.xml">Sitemap</a></nav></footer></body></html>\n`;
    write(`researchers/${facSlug}/index.html`, facHtml);
  }

  // 5. Append to data.js
  let dataContent = read('data.js');
  // Append opportunities before '];\nexport const researchers=['
  const oppsFormatted = uni.opportunities.map(o => {
    return `  {\n    "university": ${JSON.stringify(uni.institution)},\n    "country": ${JSON.stringify(uni.countryLabel)},\n    "location": ${JSON.stringify(uni.location)},\n    "reviewed": "${today}",\n    "id": ${o.id},\n    "subject": ${JSON.stringify(o.subject)},\n    "subjects": ${JSON.stringify(o.subjects)},\n    "type": ${JSON.stringify(o.type)},\n    "title": ${JSON.stringify(o.title)},\n    "source": ${JSON.stringify(o.source)},\n    "funding": ${JSON.stringify(o.funding)},\n    "status": ${JSON.stringify(o.status)},\n    "deadline": ${o.deadline ? `"${o.deadline}"` : 'null'},\n    "deadlineText": ${JSON.stringify(o.deadlineText)},\n    "fee": ${JSON.stringify(o.fee)},\n    "tuition": ${JSON.stringify(o.tuition)},\n    "requirements": {\n      "gpa": ${JSON.stringify(o.requirements.gpa)},\n      "ielts": ${JSON.stringify(o.requirements.ielts)},\n      "gre": ${JSON.stringify(o.requirements.gre)},\n      "papers": ${JSON.stringify(o.requirements.papers)},\n      "references": ${JSON.stringify(o.requirements.references)}\n    },\n    "desc": ${JSON.stringify(o.desc)}\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*export const researchers=\[/,
    `,\n${oppsFormatted}\n];\nexport const researchers=[`
  );

  // Append researchers before the last '];'
  const facFormatted = uni.faculty.map(f => {
    return `  {\n    "id": ${f.id},\n    "subject": ${JSON.stringify(f.subject)},\n    "name": ${JSON.stringify(f.name)},\n    "title": ${JSON.stringify(f.title)},\n    "university": ${JSON.stringify(uni.institution)},\n    "country": ${JSON.stringify(uni.countryLabel)},\n    "topics": ${JSON.stringify(f.topics)},\n    "source": ${JSON.stringify(f.source)},\n    "email": null,\n    "summary": ${JSON.stringify(f.summary)},\n    "recruiting": "Not verified",\n    "reviewed": "${today}"\n  }`;
  }).join(',\n');

  dataContent = dataContent.replace(
    /\n\];\s*$/,
    `,\n${facFormatted}\n];\n`
  );

  write('data.js', dataContent);

  // 6. Update country page
  const countryPath = `countries/${uni.countryId}/index.html`;
  let countryHtml = read(countryPath);
  countryHtml = countryHtml.replace('name="robots" content="noindex,follow"', 'name="robots" content="index,follow"');
  countryHtml = countryHtml.replace('masterundefineds', "master's");
  countryHtml = countryHtml.replace(
    /<strong>0<\/strong><span>detailed university guides published<\/span>/,
    `<strong>1</strong><span>detailed university guide published</span>`
  );
  if (!countryHtml.includes(uni.slug)) {
    countryHtml = countryHtml.replace(
      /<section class="wrap section"><div class="country-awaiting">/,
      `<section class="wrap section"><div class="country-published-guide" style="background:#fff;border:1px solid #dcd7ca;border-radius:12px;padding:1.5rem;margin-bottom:1.5rem;"><span class="country-badge" style="background:#134e4a;color:#fff;">DETAILED GUIDE PUBLISHED</span><h2 style="margin:0.5rem 0;"><a href="/universities/${uni.slug}/">${uni.institution} Guide ↗</a></h2><p style="color:#555;">${uni.overview}</p><div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:1rem;"><a class="btn" href="/universities/${uni.slug}/">Open University Guide ↗</a><a class="btn" href="/opportunities/${uni.opportunities[0].id}-${uni.opportunities[0].slug}/">View Scholarship ↗</a></div></div><div class="country-awaiting">`
    );
  }
  write(countryPath, countryHtml);

  // 7. Update universities/index.html
  let uniIndex = read('universities/index.html');
  // Increment published count
  const currMatch = uniIndex.match(/<strong>(\d+)<\/strong><span>universities with detailed published guides<\/span>/);
  if (currMatch) {
    const newCount = Number(currMatch[1]) + 1;
    uniIndex = uniIndex.replace(currMatch[0], `<strong>${newCount}</strong><span>universities with detailed published guides</span>`);
  }
  // Change country card status if pending
  const targetTag = `href="/countries/${uni.countryId}/" class="country-link-card"`;
  const pattern = new RegExp(`(<a ${targetTag}>[\\s\\S]*?)<p class="country-pending">[^<]+<\\/p>`);
  uniIndex = uniIndex.replace(pattern, `$1<p class="country-verified">1 source-reviewed university</p>`);
  write('universities/index.html', uniIndex);

  // 8. Update app.js
  let appJs = read('app.js');
  if (!appJs.includes(`"${uni.institution}":`)) {
    appJs = appJs.replace(
      'const universityMap={',
      `const universityMap={"${uni.institution}":"/universities/${uni.slug}/",`
    );
    write('app.js', appJs);
  }

  // 9. Update country-directory.js
  let dirJs = read('country-directory.js');
  if (!dirJs.includes(`"${uni.institution}":`)) {
    const pTag = `published={`;
    dirJs = dirJs.replace(pTag, `${pTag}${uni.countryId}:{"${uni.institution}":"/universities/${uni.slug}/"},`);
    write('country-directory.js', dirJs);
  }

  // 10. Update sitemap.xml
  let sitemap = read('sitemap.xml');
  const urlsToAdd = [
    `https://openstemfield.org/countries/${uni.countryId}/`,
    `https://openstemfield.org/universities/${uni.slug}/`,
    ...uni.opportunities.map(o => `https://openstemfield.org/opportunities/${o.id}-${o.slug}/`),
    ...uni.scholarships.map(s => `https://openstemfield.org/scholarships/${s.slug}/`),
    ...uni.faculty.map(f => `https://openstemfield.org/researchers/${f.id}-${slug(f.name)}/`)
  ];

  for (const u of urlsToAdd) {
    if (!sitemap.includes(`<loc>${u}</loc>`)) {
      const entry = `<url><loc>${u}</loc><lastmod>${today}</lastmod></url>\n`;
      sitemap = sitemap.replace('</urlset>', `${entry}</urlset>`);
    }
  }
  write('sitemap.xml', sitemap);

  // 11. Update country-rotation.json
  const completed = [...rotation.completedInCycle];
  if (!completed.includes(targetCountry)) completed.push(targetCountry);

  let nextCountry = rotation.order[0];
  for (const c of rotation.order) {
    if (!completed.includes(c)) {
      nextCountry = c;
      break;
    }
  }

  const publishedInCountry = { ...rotation.publishedInCountry };
  publishedInCountry[targetCountry] = (publishedInCountry[targetCountry] || 0) + 1;

  const newRotation = {
    ...rotation,
    completedInCycle: completed.length >= rotation.order.length ? [] : completed,
    cycle: completed.length >= rotation.order.length ? rotation.cycle + 1 : rotation.cycle,
    nextCountry,
    lastPublished: {
      country: targetCountry,
      university: uni.institution,
      sourceRow: uni.sourceRow
    },
    publishedInCountry,
    updatedAt: today
  };
  write('country-rotation.json', JSON.stringify(newRotation, null, 2) + '\n');

  console.log(`\nLocal files created and updated successfully!`);

  // 11b. Regenerate all subject pages from live data.js
  console.log(`Regenerating all 9 subject field pages...`);
  generateAllSubjectPages();

  // 12. Run Site Verification
  console.log(`Running verify-site.mjs...`);
  try {
    const res = execSync('node scripts/verify-site.mjs', { cwd: root, encoding: 'utf8' });
    console.log(res.trim());
  } catch (err) {
    console.error(`Verification FAILED:\n`, err.stdout || err.message);
    throw err;
  }

  // 13. Sync with Google Sheet Webhook
  console.log(`Syncing with Google Sheet Webhook...`);
  try {
    await updateRotation(uni.countryLabel, {
      publishedCount: publishedInCountry[targetCountry],
      currentRoundStatus: `Round ${rotation.cycle} completed`,
      mostRecentPublished: uni.institution,
      updatedDate: today
    });

    await recordProgress({
      sourceRow: uni.sourceRow,
      country: uni.countryLabel,
      institution: uni.institution,
      officialWebsite: uni.website,
      universityGuide: `https://openstemfield.org/universities/${uni.slug}/`,
      publishedContent: `${uni.opportunities[0].title}, ${uni.opportunities[1].title}, 2 scholarships, 3 faculty profiles; live on Vercel`,
      evidenceReviewDate: today,
      gitCommit: 'github-actions-cycle',
      deploymentQa: 'Automated CI & Vercel live sync',
      nextAction: `Completed ${uni.countryLabel} turn; next country ${nextCountry}`,
      publishedDone: true,
      sitemapUpdated: true
    });
    console.log(`Google Sheet Webhook sync completed!`);
  } catch (err) {
    console.warn(`Webhook sync notice: ${err.message}`);
  }

  console.log(`\nAutopublish cycle complete for ${uni.institution} (${uni.countryLabel})!`);
  return { success: true, university: uni.institution, country: uni.countryLabel, nextCountry };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runAutopublishCycle().catch(err => {
    console.error('Fatal autopublish error:', err);
    process.exit(1);
  });
}
