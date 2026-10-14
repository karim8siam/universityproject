import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
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
const today = '2026-10-14';

export const cycle6Universities = [
  // 1. CANADA: McMaster University (Row 41)
  {
    institution: "McMaster University",
    shortName: "McMaster",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Hamilton, Ontario, Canada",
    website: "https://www.mcmaster.ca",
    sourceRow: 41,
    slug: "mcmaster-university",
    heroEyebrow: "Canada · Ontario · Canada's Most Research-Intensive University · Reviewed 14 October 2026",
    headline: "McMaster University (Hamilton, Ontario)",
    description: "McMaster University guide: International Excellence Awards, PhD in Computer Science & Biomedical Engineering ($27,000+ guaranteed funding), and faculty profiles.",
    overview: "Founded in 1887 in Hamilton, Ontario, McMaster University is consistently ranked among Canada's top 4 and the world's top 80 research universities. Renowned as the birthplace of evidence-based medicine and problem-based learning (PBL), McMaster is home to the McMaster Nuclear Reactor (supplying a significant portion of the world's medical isotopes), the Brockhouse Institute for Materials Research, and leading artificial intelligence initiatives. Explore verified graduate degrees, guaranteed doctoral base funding packages, and world-class faculty profiles.",
    admissions: {
      masters: "4-year Honours Bachelor's degree from an accredited university with minimum B+ average (equivalent to 77-79% or 3.3/4.0 GPA) in relevant academic discipline.",
      phd: "Recognized Master's degree in relevant discipline with minimum B+ average (typically 80%+ / A- in major coursework) and demonstrable research thesis competency.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 88 overall (minimum 20 in each section); higher for CS/ECE (IELTS 7.0).",
      proposal: "Comprehensive 2-page statement of research intent describing research questions, academic background, and prospective McMaster faculty supervisor alignment.",
      appFee: "CAD $110 non-refundable graduate application fee submitted via the McMaster online portal.",
      documents: "Complete official academic transcripts, 2 confidential academic reference letters, curriculum vitae, and statement of research interests."
    },
    tuitionText: "Tuition for research-stream graduate degrees is supported by departmental funding packages and scholarships. For doctoral students in good standing, McMaster provides guaranteed minimum base funding of CAD $25,000 to $29,000 per year (comprising teaching assistantships, research stipends, and departmental scholarships) plus international tuition fee differentials.",
    opportunities: [
      {
        id: 368,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "biology", "chemistry"],
        type: "Scholarship",
        title: "McMaster International Excellence Graduate Awards & Provost's Scholarships",
        source: "https://gs.mcmaster.ca/awards-and-funding/",
        funding: "Fully funded: Annual stipend of CAD $24,000 to $30,000/year plus full international tuition fee differential waiver for up to four years of doctoral study",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Departmental graduate awards nomination deadline for Fall admission)",
        fee: "CAD $110 graduate application fee",
        tuition: "Full tuition differential covered for award recipients.",
        requirements: {
          gpa: "First-class academic standing (A- / 80%+ average) in previous university degree programs.",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in all bands or TOEFL iBT 92.",
          gre: "Recommended for applicants with international credentials.",
          papers: "Demonstrated research excellence through publications, conference papers, or Master's thesis.",
          references: "Two academic recommendation letters submitted via the graduate portal."
        },
        desc: "McMaster's premier international doctoral funding scheme, awarding guaranteed living stipends and tuition waivers to high-achieving international researchers."
      },
      {
        id: 369,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "McMaster PhD in Computer Science & Software Engineering",
        source: "https://www.eng.mcmaster.ca/cas/programs/phd/computer-science",
        funding: "Guaranteed minimum funding package of CAD $26,000/year for 4 years through research assistantships, teaching assistantships, and scholarships",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Fall admission cycle deadline for international applicants)",
        fee: "CAD $110 graduate application fee",
        tuition: "Subsidized through departmental base funding allocations.",
        requirements: {
          gpa: "Master's degree in Computer Science, Software Engineering, or Mathematics with at least a B+ (78%) average.",
          ielts: "Academic IELTS 7.0 overall (6.5 in each component) or TOEFL iBT 92.",
          gre: "General GRE optional but encouraged.",
          papers: "Master's thesis or peer-reviewed conference publications in computing.",
          references: "Two academic referee letters."
        },
        desc: "Four-year research-intensive doctoral program exploring artificial intelligence, algorithm design, formal methods, safety-critical software, and bioinformatics."
      },
      {
        id: 370,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "McMaster Master of Science (MSc) in Computer Science (Thesis)",
        source: "https://www.eng.mcmaster.ca/cas/programs/msc/computer-science",
        funding: "Guaranteed minimum financial support package of CAD $22,000/year for 2 years (6 terms)",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Fall admission deadline)",
        fee: "CAD $110 application fee",
        tuition: "Offset by graduate research stipends and teaching assistantships.",
        requirements: {
          gpa: "Four-year Bachelor's degree in Computer Science or closely related quantitative field with B+ (78%) average.",
          ielts: "Academic IELTS 7.0 overall (6.5 in each subscore) or TOEFL iBT 92.",
          gre: "Not required.",
          papers: "Demonstrated coursework excellence in algorithms, operating systems, and discrete mathematics.",
          references: "Two academic reference letters."
        },
        desc: "Two-year thesis-based Master of Science degree providing foundational graduate research training and original software or algorithmic investigations under faculty supervision."
      },
      {
        id: 371,
        subject: "engineering",
        subjects: ["engineering", "biology"],
        type: "Master's",
        title: "McMaster Master of Applied Science (MASc) in Biomedical Engineering",
        source: "https://www.eng.mcmaster.ca/mcmaster-school-biomedical-engineering/programs/masc-biomedical-engineering",
        funding: "Guaranteed annual funding package of CAD $23,000/year for full-time research candidates",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Fall intake deadline)",
        fee: "CAD $110 application fee",
        tuition: "Supported by departmental research assistantships.",
        requirements: {
          gpa: "Bachelor's degree in engineering, physical sciences, or life sciences with minimum B+ average.",
          ielts: "Academic IELTS 6.5 overall (6.0 in all bands) or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Undergraduate capstone design or laboratory research experience.",
          references: "Two academic letters of recommendation."
        },
        desc: "World-class interdisciplinary graduate training at the School of Biomedical Engineering, bridging microfluidics, biomaterials, medical imaging, and smart health devices."
      },
      {
        id: 372,
        subject: "physics",
        subjects: ["physics", "engineering", "chemistry"],
        type: "Research",
        title: "Brockhouse Institute for Materials Research (BIMR) Research Placements",
        source: "https://bimr.mcmaster.ca/",
        funding: "Fully funded research appointments: Competitive graduate stipend plus specialized microscopy and cleanroom access",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Spring research fellowship matching cycle)",
        fee: "Standard departmental application fee applies",
        tuition: "Full tuition coverage provided through BIMR partner departments.",
        requirements: {
          gpa: "First-class Bachelor's or Master's degree in materials science, physics, or chemistry (80%+ average).",
          ielts: "Academic IELTS 6.5+ or TOEFL iBT 88+.",
          gre: "Not required.",
          papers: "Solid experimental foundations in electron microscopy, crystallography, or quantum materials.",
          references: "Two academic letters confirming laboratory research aptitude."
        },
        desc: "Interdisciplinary research placements inside Canada's premier materials research facility, collaborating on electron microscopy, superconducting materials, and nuclear engineering."
      },
      {
        id: 373,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "McMaster Engineering Co-op & Undergraduate Student Research Awards (USRA)",
        source: "https://www.eng.mcmaster.ca/co-op-career/",
        funding: "Salaried placements: CAD $6,000 to $11,000 per 4-month academic term based on program level",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Summer research and industrial placement matching deadline)",
        fee: "Free application for enrolled McMaster students",
        tuition: "Standard co-op enrollment fee applies.",
        requirements: {
          gpa: "Minimum cumulative average of 75% in engineering or science coursework.",
          ielts: "Enrollment in good academic standing.",
          gre: "Not required.",
          papers: "Resume and technical transcript showing relevant project achievements.",
          references: "Endorsement by departmental co-op office."
        },
        desc: "Paid research and industrial internships connecting student engineers with leading research laboratories and high-technology ventures across southern Ontario's innovation corridor."
      },
      {
        id: 374,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "McMaster Graduate Teaching Assistantships (GTA) & Research Fellowships",
        source: "https://gs.mcmaster.ca/awards-and-funding/types-of-funding/teaching-assistantships/",
        funding: "Contractual salary: Approximately CAD $6,200 per term for a standard 130-hour teaching appointment under CUPE Local 3906",
        status: "open-program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Fall term teaching assistantship allocations)",
        fee: "Free internal application via Mosaic portal",
        tuition: "Complements base departmental graduate stipend.",
        requirements: {
          gpa: "Admitted and registered graduate student in good standing.",
          ielts: "Demonstrated spoken English fluency.",
          gre: "Not required.",
          papers: "High academic marks in the course to be demonstrated or tutored.",
          references: "Assigned by academic department chair."
        },
        desc: "Unionized teaching assistantships providing graduate scholars with university instructional experience, laboratory demonstration duties, and competitive hourly wages."
      }
    ],
    researchers: [
      {
        id: 177,
        subject: "engineering",
        name: "Prof. Dr. Jamal Deen CM",
        title: "Distinguished University Professor, Order of Canada, Fellow of the Royal Society of Canada (FRSC)",
        university: "McMaster University",
        country: "Canada",
        topics: ["Optoelectronics", "Semiconductor Devices", "Smart Biosensors", "Nanoelectronics"],
        source: "https://www.eng.mcmaster.ca/ece/people/faculty/jamal-deen",
        summary: "Member of the Order of Canada and former President of the Academy of Science of the Royal Society of Canada. Pioneer in microelectronics, optoelectronics, and smart sensors for health monitoring.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 178,
        subject: "computer-science",
        name: "Prof. Dr. Rong Zheng",
        title: "Professor of Computing and Software, IEEE Fellow",
        university: "McMaster University",
        country: "Canada",
        topics: ["Wireless Networking", "Mobile Computing", "Machine Learning for IoT", "Cyber-Physical Systems"],
        source: "https://www.eng.mcmaster.ca/cas/people/faculty/rong-zheng",
        summary: "IEEE Fellow and leading researcher in mobile computing, acoustic sensing, edge intelligence, and distributed machine learning algorithms for healthcare internet of things.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 179,
        subject: "biology",
        name: "Prof. Dr. Gerry Wright",
        title: "Executive Director of Global Nexus School for Pandemic Prevention, Professor of Biochemistry",
        university: "McMaster University",
        country: "Canada",
        topics: ["Antibiotic Resistance", "Antimicrobial Discovery", "Chemical Biology", "Microbiology"],
        source: "https://healthsci.mcmaster.ca/biochem/people/faculty/gerry-wright",
        summary: "Fellow of the Royal Society of Canada and pioneer in antibiotic resistome mapping, discovering novel fungal and bacterial natural products to overcome drug-resistant superbugs.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 2. AUSTRALIA: UNSW Sydney (Row 172)
  {
    institution: "UNSW Sydney",
    shortName: "UNSW",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Sydney, New South Wales, Australia",
    website: "https://www.unsw.edu.au",
    sourceRow: 172,
    slug: "unsw-sydney",
    heroEyebrow: "Australia · New South Wales · Group of Eight Quantum & Engineering Flagship · Reviewed 14 October 2026",
    headline: "UNSW Sydney (The University of New South Wales)",
    description: "UNSW Sydney guide: University International Postgraduate Awards (UIPA, $37,684/yr tax-free + tuition waiver), CQC2T quantum placements, and faculty profiles.",
    overview: "Established in 1949 in Kensington, Sydney, The University of New South Wales (UNSW Sydney) is a founding member of Australia's prestigious Group of Eight (Go8) and ranked in the world's top 20 universities (QS 2024/2025). UNSW is globally celebrated for pioneering silicon quantum computing (the Centre for Quantum Computation and Communication Technology - CQC2T led by Australian of the Year Prof. Michelle Simmons), world-record photovoltaic solar cell efficiencies, and artificial intelligence. Explore verified degrees, fully funded doctoral scholarships, and distinguished faculty profiles.",
    admissions: {
      masters: "Recognized Bachelor's degree with a minimum equivalent to an Australian credit average (65%+) or high credit (70%+) depending on faculty and discipline.",
      phd: "Four-year Bachelor's degree with Class I Honours (or Class II Division I) or Master's degree with significant research dissertation demonstrating high academic distinction.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall (minimum 6.0 in each subband) or TOEFL iBT 90 overall (minimum 23 in writing, 22 in reading/listening/speaking).",
      proposal: "Comprehensive 2-3 page research project proposal detailing aims, significance, methodology, and endorsed UNSW academic supervisor alignment.",
      appFee: "AUD $125 non-refundable international application fee submitted via the UNSW online Apply portal.",
      documents: "Complete official university transcripts, degree completion certificates, grading scale keys, 2 academic referee reports, detailed CV, and project outline."
    },
    tuitionText: "Tuition for international research candidates is 100% fully covered under the University International Postgraduate Award (UIPA) and Research Training Program (RTP). Recipients receive full international tuition fee waivers, Overseas Student Health Cover (OSHC), and tax-free living allowances of AUD $37,684 per year (indexed annually) for 3.5 to 4 years.",
    opportunities: [
      {
        id: 375,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "mathematics", "chemistry"],
        type: "Scholarship",
        title: "UNSW University International Postgraduate Award (UIPA) & RTP Scholarships",
        source: "https://www.unsw.edu.au/research/hdr/scholarships",
        funding: "Fully funded: Annual tax-free living stipend of AUD $37,684/year (indexed annually) plus full international tuition fee offset and single OSHC health cover for up to 3.5 years",
        status: "open-scholarship",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (Round 2 international scholarship consideration deadline for Term 3 entry)",
        fee: "AUD $125 international application fee",
        tuition: "Full tuition completely covered for duration of scholarship award.",
        requirements: {
          gpa: "First Class Honours (Honours 1) or equivalent Master's with high distinction in research.",
          ielts: "Academic IELTS 6.5 overall (no band less than 6.0) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrable research track record including peer-reviewed papers or conference presentations.",
          references: "Two academic referee reports submitted directly via UNSW referee system."
        },
        desc: "UNSW's premier competitive international doctoral scholarship scheme, awarding full tuition remissions and generous tax-free living stipends to outstanding global research scholars."
      },
      {
        id: 376,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "UNSW PhD in Computer Science and Engineering",
        source: "https://www.unsw.edu.au/engineering/computer-science-and-engineering/study/postgraduate-research",
        funding: "Fully funded doctoral position providing AUD $37,684/year tax-free stipend, full tuition fee remission, and project consumables funding",
        status: "open-program",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (Primary international scholarship deadline for mid-year entry)",
        fee: "AUD $125 international application fee",
        tuition: "100% covered via UNSW tuition fee offset scholarship.",
        requirements: {
          gpa: "Bachelor's degree with First Class Honours or Master's in CS or electrical engineering with significant research thesis.",
          ielts: "Academic IELTS 6.5 overall with 6.0 in all components.",
          gre: "Not required.",
          papers: "Demonstrated research writing ability and prior technical publications.",
          references: "Two academic referee reports."
        },
        desc: "Doctoral research program inside Australia's top-ranked engineering faculty, offering world-class research in artificial intelligence, cybersecurity, database systems, and operating systems."
      },
      {
        id: 377,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "UNSW Master of Information Technology (Artificial Intelligence & Data Science)",
        source: "https://www.unsw.edu.au/study/postgraduate/master-of-information-technology",
        funding: "UNSW Faculty of Engineering Global Merit Scholarships offering up to AUD $10,000 fee remissions",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Term 1 commencement application deadline)",
        fee: "AUD $125 application fee",
        tuition: "AUD $51,840 per year for international students without scholarship offset.",
        requirements: {
          gpa: "Bachelor's degree in any field with at least a 65% credit average; accelerated streams for computing graduates.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each subband) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Undergraduate degree project or relevant programming experience.",
          references: "Academic transcripts and syllabus documentation."
        },
        desc: "Comprehensive two-year professional computing degree offering specialized streams in artificial intelligence, bioinformatics, cybersecurity, and data science."
      },
      {
        id: 378,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        title: "UNSW Master of Engineering in Photovoltaics and Solar Energy",
        source: "https://www.unsw.edu.au/study/postgraduate/master-of-engineering-photovoltaics-and-solar-energy",
        funding: "Eligible for Australian Development Scholarships and UNSW Energy Institute bursaries",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Term 1 entry deadline)",
        fee: "AUD $125 application fee",
        tuition: "AUD $51,840 per academic year.",
        requirements: {
          gpa: "Four-year Bachelor of Engineering in relevant discipline with 65% average.",
          ielts: "Academic IELTS 6.5 overall (6.0 in all subscores).",
          gre: "Not required.",
          papers: "Coursework in electrical engineering, semiconductor physics, or materials.",
          references: "Academic reference letters and transcripts."
        },
        desc: "World-leading solar energy master's program from the institution that pioneered modern silicon solar cells, focusing on photovoltaic manufacturing, grid integration, and clean energy storage."
      },
      {
        id: 379,
        subject: "physics",
        subjects: ["physics", "computer-science", "engineering"],
        type: "Research",
        title: "Centre for Quantum Computation and Communication Technology (CQC2T) Placements",
        source: "https://www.cqc2t.org/",
        funding: "Fully funded research appointments: AUD $37,684/yr tax-free stipend plus dedicated cleanroom and dilution refrigerator access",
        status: "open-program",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (Formal HDR scholarship application deadline)",
        fee: "Standard UNSW application fee",
        tuition: "Tuition offset included for all scholarship awardees.",
        requirements: {
          gpa: "First Class Honours or equivalent Master's with high marks in physics, electrical engineering, or quantum information.",
          ielts: "Academic IELTS 6.5 overall.",
          gre: "Not required.",
          papers: "Demonstrated experimental cleanroom skills or theoretical quantum physics papers.",
          references: "Two academic referee endorsements."
        },
        desc: "World-renowned research placements at the forefront of atomic-scale silicon quantum computing, conducting single-atom spin manipulation and quantum architecture development."
      },
      {
        id: 380,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "UNSW Engineering Taste of Research & Summer Placements",
        source: "https://www.unsw.edu.au/engineering/study/student-life/taste-of-research",
        funding: "Funded bursary: AUD $6,000 tax-exempt scholarship for a 60-day summer research project placement",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Winter/Summer research placement intake applications open)",
        fee: "Free application for eligible university scholars",
        tuition: "No tuition charges for internship research program.",
        requirements: {
          gpa: "Enrolled undergraduate or postgraduate student with cumulative WAM of 75+ (Distinction average).",
          ielts: "Equivalent to standard UNSW English language requirement.",
          gre: "Not required.",
          papers: "Academic transcript and project preference selection.",
          references: "Endorsement by hosting UNSW faculty researcher."
        },
        desc: "Prestigious 60-day summer research internship program allowing high-performing engineering students to collaborate directly with leading UNSW research groups on frontier projects."
      },
      {
        id: 381,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "UNSW Casual Academic Teaching Fellowships & Lab Demonstratorships",
        source: "https://www.unsw.edu.au/careers",
        funding: "Contractual salary: AUD $55 to $72 per tutorial/marking hour based on qualification level",
        status: "open-program",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027 (Term 1 casual academic allocations)",
        fee: "Free application via UNSW recruitment portal",
        tuition: "Provides supplemental income during graduate study.",
        requirements: {
          gpa: "Enrolled in good standing in a UNSW postgraduate research or honours degree.",
          ielts: "High level of spoken English communication.",
          gre: "Not required.",
          papers: "Strong technical competency in course curriculum.",
          references: "Course authority approval."
        },
        desc: "Paid academic teaching contracts for postgraduate researchers, leading tutorial discussions, laboratory demonstration sessions, and coursework assessment in computing and engineering."
      }
    ],
    researchers: [
      {
        id: 180,
        subject: "physics",
        name: "Prof. Dr. Michelle Simmons AO",
        title: "Scientia Professor of Quantum Physics, Australian of the Year, Fellow of the Royal Society (FRS)",
        university: "UNSW Sydney",
        country: "Australia",
        topics: ["Quantum Computing", "Silicon Qubits", "Atomic-Scale Electronics", "Scanning Tunneling Microscopy"],
        source: "https://www.cqc2t.org/staff/michelle-simmons/",
        summary: "World pioneer in atomic electronics and silicon quantum computing. Discovered methods to fabricate atomic-scale single-atom transistors and quantum processors in silicon.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 181,
        subject: "computer-science",
        name: "Prof. Dr. Toby Walsh",
        title: "Scientia Professor of Artificial Intelligence, Fellow of the Australian Academy of Science (FAA)",
        university: "UNSW Sydney",
        country: "Australia",
        topics: ["Artificial Intelligence", "AI Ethics", "Constraint Programming", "Computational Social Choice"],
        source: "https://www.unsw.edu.au/staff/toby-walsh",
        summary: "Global thought leader in artificial intelligence and AI ethics. Fellow of AAAI and FAA, leading research on algorithmic fairness, autonomous decision systems, and automated reasoning.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 182,
        subject: "engineering",
        name: "Prof. Dr. Martin Green AM",
        title: "Scientia Professor, Queen Elizabeth Prize for Engineering, Global Energy Prize",
        university: "UNSW Sydney",
        country: "Australia",
        topics: ["Photovoltaics", "PERC Solar Cells", "Silicon Solar Technology", "Renewable Energy"],
        source: "https://www.unsw.edu.au/staff/martin-green",
        summary: "Known as the father of modern photovoltaics. Invented the PERC solar cell which now accounts for over 90% of global silicon solar module production.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 3. GERMANY: Ludwig Maximilian University of Munich (Row 308)
  {
    institution: "Ludwig Maximilian University of Munich",
    shortName: "LMU Munich",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Munich, Bavaria, Germany",
    website: "https://www.lmu.de/en/",
    sourceRow: 308,
    slug: "ludwig-maximilian-university-of-munich",
    heroEyebrow: "Germany · Bavaria · Historic University of Excellence & 43 Nobel Laureates · Reviewed 14 October 2026",
    headline: "Ludwig Maximilian University of Munich (LMU Munich)",
    description: "LMU Munich guide: Salaried PhD positions (TV-L E13 €52,000/yr), MSc in Quantum Science, Gene Center placements, and 43 Nobel laureate history.",
    overview: "Established in 1472, Ludwig Maximilian University of Munich (LMU Munich) is one of Europe's most prestigious and historic research universities and a continuous German University of Excellence. Boasting 43 Nobel laureates (including Max Planck, Wilhelm Röntgen, Werner Heisenberg, and Ferenc Krausz), LMU leads the world in quantum physics, molecular medicine (the Gene Center Munich), astrophysics, and neuroscience. Explore tuition-free degree programs, salaried doctoral contracts, and world-renowned faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science or Bachelor of Arts degree (minimum 180 ECTS) in relevant subject with grade equivalent to 'gut' (minimum 2.5 or better on German 1.0-5.0 scale).",
      phd: "Recognized Master's degree (grade 2.0 or better) in relevant discipline; formal agreement of doctoral supervision by an LMU university professor (*Doktorvater/mutter*).",
      language: "Demonstrated English proficiency for English-taught degrees: Academic IELTS 6.5 or TOEFL iBT 80-90 (German programs require DSH-2 or TestDaF 4x4).",
      proposal: "Comprehensive scientific exposé (5-10 pages) describing doctoral project framework, literature review, and methodology.",
      appFee: "No tuition fee; nominal semester fee (Semesterbeitrag) of approx. €150/semester including student services and transit ticket options.",
      documents: "Certified university transcripts, graduation certificates, curriculum vitae, module handbook, and academic letters of recommendation."
    },
    tuitionText: "Tuition is completely free of charge for all domestic and international students. Doctoral researchers are employed on salaried public-sector research employment contracts (Wissenschaftliche/r Mitarbeiter/in under TV-L E13), earning gross annual salaries of €50,000 to €56,000 per year with full statutory healthcare, unemployment insurance, and pension contributions.",
    opportunities: [
      {
        id: 382,
        subject: "physics",
        subjects: ["physics", "computer-science", "chemistry", "biology", "mathematics"],
        type: "Scholarship",
        title: "LMU Munich Excellence & Deutschlandstipendium Scholarships",
        source: "https://www.lmu.de/en/study/all-degrees-and-programs/financial-aid-and-scholarships/index.html",
        funding: "Merit grant: €3,600/year (€300/month) tax-free living stipend combined with corporate mentoring and exclusive laboratory project access",
        status: "open-scholarship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Annual scholarship application round for enrolled students)",
        fee: "Free application via LMU scholarship portal",
        tuition: "Tuition is completely free at LMU Munich.",
        requirements: {
          gpa: "Top academic marks (top 10% of cohort, German grade equivalent 1.5 or better).",
          ielts: "English or German proficiency conforming to program enrollment.",
          gre: "Not required.",
          papers: "Demonstrated social engagement, leadership, and scientific promise.",
          references: "Curriculum vitae and academic transcript."
        },
        desc: "Prestigious national merit scholarship co-funded by the German Federal Government and industrial partners, supporting high-achieving science and humanities scholars."
      },
      {
        id: 383,
        subject: "physics",
        subjects: ["physics", "computer-science"],
        type: "PhD",
        title: "LMU Salaried Doctoral Positions (Wissenschaftliche/r Mitarbeiter/in TV-L E13) in Quantum Science",
        source: "https://www.lmu.de/en/about-lmu/working-at-lmu/job-portal/index.html",
        funding: "Fully salaried research contract: TV-L E13 (100%) gross salary of €52,000 to €56,000/year with statutory health insurance, unemployment insurance, and pension",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling departmental chair recruitment for 2027 cohort)",
        fee: "No application fee",
        tuition: "Zero tuition fees; nominal €150/semester public contribution.",
        requirements: {
          gpa: "University Master's degree in physics, chemistry, or computing with grade 'gut' (minimum 2.0) or better.",
          ielts: "Fluency in English (IELTS 6.5+); working knowledge of German advantageous.",
          gre: "Not required.",
          papers: "Master's research thesis demonstrating deep methodological proficiency.",
          references: "Two academic recommendation letters and thesis summary."
        },
        desc: "Full-time salaried doctoral research contracts inside LMU's world-leading Faculty of Physics and the Munich Center for Quantum Science and Technology (MCQST)."
      },
      {
        id: 384,
        subject: "physics",
        subjects: ["physics", "computer-science", "mathematics"],
        type: "Master's",
        title: "LMU Master of Science in Quantum Science and Technology (QST)",
        source: "https://www.mcqst.de/education/master-of-science-in-qst/",
        funding: "Tuition-free elite degree; eligible for MCQST Master Fellowships (€1,000/month)",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (International applicant deadline for Winter semester)",
        fee: "Free application",
        tuition: "€0 tuition; standard semester fee approx. €150.",
        requirements: {
          gpa: "Bachelor of Science in Physics, Mathematics, or Computer Science with strong quantum mechanics coursework.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 88.",
          gre: "General GRE recommended for non-EU applicants.",
          papers: "Curriculum vitae and transcript of academic records.",
          references: "Two academic letters of recommendation."
        },
        desc: "Elite joint master's program between LMU Munich and TU Munich, providing world-class training in quantum computing, quantum optics, and quantum information theory."
      },
      {
        id: 385,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Master's",
        title: "LMU Master of Science in Data Science (Elite Graduate Program)",
        source: "https://www.m-datascience.mathematik-informatik-statistik.uni-muenchen.de/",
        funding: "Tuition-free program supported by the Elite Network of Bavaria",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Winter semester intake for international applicants)",
        fee: "Free application",
        tuition: "€0 tuition; semester fee of approx. €150.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Mathematics, or Statistics with top academic standing.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 95.",
          gre: "Recommended for non-European degrees.",
          papers: "Demonstrated coursework mastery in linear algebra, probability, and algorithms.",
          references: "Academic reference letters and personal statement."
        },
        desc: "Interdisciplinary elite master's degree taught in English, combining advanced machine learning, computational statistics, high-performance computing, and data ethics."
      },
      {
        id: 386,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        title: "Gene Center Munich & Max Planck Collaborative Research Placements",
        source: "https://www.genzentrum.uni-muenchen.de/",
        funding: "Fully funded research appointment: Competitive stipend or TV-L E13 contract with access to cryo-EM facilities",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Spring research fellowship applications)",
        fee: "Free application",
        tuition: "Tuition-free academic research collaboration.",
        requirements: {
          gpa: "Outstanding degree in biochemistry, molecular biology, or biophysics.",
          ielts: "English language proficiency (IELTS 6.5+ or TOEFL 90+).",
          gre: "Not required.",
          papers: "Prior experience with structural biology, protein purification, or RNA biochemistry.",
          references: "Two academic letters confirming laboratory aptitude."
        },
        desc: "Cutting-edge molecular bioscience placements at the Gene Center Munich, conducting structural biology and cryo-electron microscopy investigations of cellular machineries."
      },
      {
        id: 387,
        subject: "physics",
        subjects: ["physics", "computer-science"],
        type: "Internship",
        title: "Munich Center for Quantum Science and Technology (MCQST) Summer Placements",
        source: "https://www.mcqst.de/",
        funding: "Funded summer internship: €1,200/month living bursary plus laboratory project mentorship",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Annual international summer placement application deadline)",
        fee: "Free application",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Enrolled in good standing at a recognized university in physics, engineering, or computing.",
          ielts: "Fluent English language skills.",
          gre: "Not required.",
          papers: "Statement of research motivation and CV.",
          references: "Letter of recommendation from home university professor."
        },
        desc: "Structured summer research internship program in Munich quantum physics laboratories, providing international undergraduate scholars with direct research mentorship."
      },
      {
        id: 388,
        subject: "computer-science",
        subjects: ["computer-science", "physics"],
        type: "Fellowship",
        title: "LMU Student & Graduate Assistantships (HiWi Positions)",
        source: "https://www.lmu.de/en/about-lmu/working-at-lmu/job-portal/index.html",
        funding: "Contractual salary: €13.25 to €17.50 per hour depending on academic degree level",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Semester hiring for tutorial exercises and lab demonstrators)",
        fee: "Free application via institute job boards",
        tuition: "Complements tuition-free studies with taxable student wages.",
        requirements: {
          gpa: "Enrolled student at LMU Munich with excellent course marks in the target subject.",
          ielts: "English or German communication skills.",
          gre: "Not required.",
          papers: "Demonstrated code or analytical problem-solving skills.",
          references: "Endorsement by university institute chair."
        },
        desc: "Part-time student assistantships (*Hilfswissenschaftler/HiWi*) across university institutes, providing instructional experience, code evaluation, and practical research experience."
      }
    ],
    researchers: [
      {
        id: 183,
        subject: "physics",
        name: "Prof. Dr. Ferenc Krausz",
        title: "Director at Max Planck Institute of Quantum Optics, Professor of Physics, Nobel Laureate in Physics (2023)",
        university: "Ludwig Maximilian University of Munich",
        country: "Germany",
        topics: ["Attosecond Physics", "Ultrafast Laser Science", "Femtosecond Technology", "Atomic Physics"],
        source: "https://www.attoworld.de/people/ferenc-krausz.html",
        summary: "Nobel Laureate in Physics (2023) for experimental methods that generate attosecond pulses of light for the study of electron dynamics in matter, pioneering attosecond physics worldwide.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 184,
        subject: "physics",
        name: "Prof. Dr. Immanuel Bloch",
        title: "Scientific Director at Max Planck Institute of Quantum Optics, Chair of Quantum Optics at LMU",
        university: "Ludwig Maximilian University of Munich",
        country: "Germany",
        topics: ["Quantum Simulation", "Ultracold Quantum Gases", "Optical Lattices", "Quantum Many-Body Physics"],
        source: "https://www.quantum-munich.de/people/immanuel-bloch/",
        summary: "World pioneer in quantum simulation of strongly correlated many-body systems using ultracold atoms in optical lattices, Harvey Prize and Körber European Science Prize laureate.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 185,
        subject: "biology",
        name: "Prof. Dr. Patrick Cramer",
        title: "Honorary Professor at LMU Gene Center, President of the Max Planck Society",
        university: "Ludwig Maximilian University of Munich",
        country: "Germany",
        topics: ["Structural Biology", "RNA Polymerase", "Gene Transcription", "Cryo-EM"],
        source: "https://www.genzentrum.uni-muenchen.de/research-groups/cramer/",
        summary: "President of the Max Planck Society and former Director of the Gene Center Munich. World authority on structural mechanisms of gene transcription by RNA polymerase II.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 4. ITALY: University of Naples Federico II (Row 524)
  {
    institution: "University of Naples Federico II",
    shortName: "UniNa",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Naples, Campania, Italy",
    website: "https://www.unina.it",
    sourceRow: 524,
    slug: "university-of-naples-federico-ii",
    heroEyebrow: "Italy · Campania · World's Oldest Public Non-Sectarian University (Founded 1224) · Reviewed 14 October 2026",
    headline: "University of Naples Federico II (Naples, Italy)",
    description: "University of Naples Federico II guide: Doctoral Fellowships (€16,243/yr net), Apple Developer Academy, MSc in Aerospace Engineering, and faculty profiles.",
    overview: "Established in 1224 by Frederick II, Holy Roman Emperor, the University of Naples Federico II (Università degli Studi di Napoli Federico II - UniNa) is celebrating over 800 years of academic history as the world's oldest publicly funded university. With over 80,000 students, UniNa is a global research powerhouse in aerospace engineering, particle physics (collaborating with CERN and INFN), robotics, and digital technologies (hosting Europe's first Apple Developer Academy). Explore low-fee master's degrees, funded doctoral fellowships, and world-renowned faculty profiles.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 3 years / 180 ECTS) in relevant subject with minimum grade equivalent to 70%+ in Italian university grading.",
      phd: "Master's degree (Laurea Magistrale or international equivalent), competitive admission examination/interview, and submission of a scientific research proposal.",
      language: "Demonstrated English proficiency for English-taught degrees: Academic IELTS 6.0/6.5 overall or TOEFL iBT 80+ (or CEFR B2 certificate).",
      proposal: "Comprehensive 3 to 5-page research project proposal submitted with the doctoral application.",
      appFee: "€30 to €50 application fee; tuition fees are calculated progressively based on family ISEE (typically €156 to €2,500/yr, fully waived for scholarship holders).",
      documents: "Complete official transcripts, degree certificates with Declaration of Value (Dichiarazione di Valore) or CIMEA comparability certificate, CV, and motivation letter."
    },
    tuitionText: "Tuition is calculated progressively according to family financial standing (ISEE), with regional ADISURC grants providing complete tuition waivers, free student canteen meals, and student housing. For doctoral researchers, ministerial fellowships (Borse di Dottorato) provide a tax-exempt stipend of €16,243 net/year, plus a 50% monthly stipend supplement for research conducted abroad and an annual 10% research budget.",
    opportunities: [
      {
        id: 389,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "mathematics"],
        type: "Scholarship",
        title: "UniNa International Excellence Scholarships & Regional ADISURC Grants",
        source: "https://www.unina.it/didattica/opportunita-studenti/borse-di-studio",
        funding: "Fully funded: Full tuition waiver plus annual cash grant up to €6,500/year, free student canteen meals, and subsidized student residence accommodation",
        status: "open-scholarship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Annual international scholarship competition deadline for master's programs)",
        fee: "€30 application evaluation fee",
        tuition: "Full tuition completely waived for scholarship awardees.",
        requirements: {
          gpa: "High academic distinction in undergraduate degree (equivalent to top 15% or GPA 3.4+).",
          ielts: "Academic IELTS 6.5 overall or CEFR B2 English certification.",
          gre: "Not required.",
          papers: "Curriculum vitae and academic statement of objectives.",
          references: "Two letters of academic recommendation."
        },
        desc: "Merit and need-based international scholarship scheme providing comprehensive living allowances, free accommodation, and zero tuition fees for top-tier graduate students."
      },
      {
        id: 390,
        subject: "engineering",
        subjects: ["engineering", "physics", "computer-science"],
        type: "PhD",
        title: "Federico II Doctoral Fellowships (Borse di Dottorato) in Aerospace & Mechanical Engineering",
        source: "https://www.unina.it/didattica/post-laurea/dottorati-di-ricerca",
        funding: "Fully funded 3-year fellowship: €16,243 net/year (tax-free) plus 50% mobility supplement for international research stays and €1,624 annual research budget",
        status: "open-program",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Annual doctoral admission call deadline for 40th cycle)",
        fee: "€50 competitive examination fee",
        tuition: "100% tuition-free for all doctoral fellowship recipients.",
        requirements: {
          gpa: "Second-cycle Master's degree (Laurea Magistrale) with high marks in aerospace, mechanical, or electrical engineering.",
          ielts: "Demonstrated English proficiency (CEFR B2 or higher).",
          gre: "Not required.",
          papers: "Master's thesis summary and scientific research proposal.",
          references: "Two academic referee letters submitted directly via the application system."
        },
        desc: "Premier 3-year doctoral research program in aerospace engineering, aerodynamics, propulsion systems, and advanced composite materials."
      },
      {
        id: 391,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master's",
        title: "UniNa Master of Science in Aerospace Engineering (Taught in English)",
        source: "https://www.aerospace.unina.it/en/",
        funding: "Eligible for ADISURC regional grants (€6,500/yr + tuition waiver) and aerospace industry sponsorships",
        status: "open-program",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Non-EU applicant visa and admission deadline)",
        fee: "€30 application fee",
        tuition: "Base tuition €156 to €2,500/year depending on family ISEE bracket.",
        requirements: {
          gpa: "Bachelor's degree in aerospace, mechanical, or industrial engineering with solid mathematics and fluid mechanics marks.",
          ielts: "Academic IELTS 6.5 overall or CEFR B2 certificate.",
          gre: "Not required.",
          papers: "Demonstrated interest in flight mechanics, aerodynamics, and aerospace structures.",
          references: "Transcripts, CV, and motivation letter."
        },
        desc: "World-class 2-year English-taught master's degree in aerospace engineering, training students in satellite design, supersonic aerodynamics, and space propulsion systems."
      },
      {
        id: 392,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "UniNa Master of Science in Autonomous Systems and Robotics",
        source: "https://www.dieti.unina.it/index.php/en/",
        funding: "ADISURC financial aid, housing grants, and university merit waivers available",
        status: "open-program",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (International applicant deadline)",
        fee: "€30 application fee",
        tuition: "Progressive fee based on ISEE (maximum €2,500/yr).",
        requirements: {
          gpa: "Bachelor's degree in computer engineering, automation, or electrical engineering.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 80+.",
          gre: "Optional.",
          papers: "Curriculum vitae and academic transcripts.",
          references: "Academic reference letters."
        },
        desc: "Advanced engineering master's degree taught in English, focusing on autonomous ground vehicles, aerial robotics, machine vision, and intelligent control systems."
      },
      {
        id: 393,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Research",
        title: "Apple Developer Academy & PRISMA Lab Collaborative Placements",
        source: "https://www.developeracademy.unina.it/en/",
        funding: "Fully funded research appointments: Project stipend with access to Apple technology ecosystem and advanced robotics lab",
        status: "open-program",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Formal cohort intake for graduate researchers)",
        fee: "Free application",
        tuition: "Tuition fully covered under program sponsorship.",
        requirements: {
          gpa: "Master's degree in computer engineering, informatics, or interactive digital design.",
          ielts: "Fluency in English.",
          gre: "Not required.",
          papers: "Software design portfolio, iOS application development, or robotic manipulation code.",
          references: "Two academic referee letters."
        },
        desc: "Cutting-edge collaborative research and training hub established in partnership with Apple, pioneering mobile applications, human-computer interaction, and medical robotics."
      },
      {
        id: 394,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "Federico II Erasmus+ Traineeship & International Laboratory Research Placements",
        source: "https://www.unina.it/didattica/opportunita-studenti/erasmus-placement",
        funding: "Funded mobility stipend: €500 to €850/month European mobility grant plus destination university support",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Erasmus+ traineeship selection call)",
        fee: "No application fee for registered students",
        tuition: "Maintains regular enrollment status with fee waiver.",
        requirements: {
          gpa: "Enrolled in good standing in a Master's or PhD program at University of Naples Federico II.",
          ielts: "Language proficiency corresponding to destination institution.",
          gre: "Not required.",
          papers: "Learning agreement for traineeships signed by supervising professor.",
          references: "Departmental academic approval."
        },
        desc: "Structured funded research traineeships enabling graduate scholars to conduct experimental thesis investigations in leading aerospace and computing labs across Europe."
      },
      {
        id: 395,
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        type: "Fellowship",
        title: "Federico II 150-Hour Student Academic Collaboration Fellowships (Collaborazioni a Tempo Parziale)",
        source: "https://www.unina.it/didattica/opportunita-studenti/collaborazioni-studenti-150-ore",
        funding: "Tax-free grant: €1,200 to €1,600 for 150 hours of academic assistance during the academic year",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual university ranking publication and contract allocation)",
        fee: "Free application via online student portal",
        tuition: "Direct student wage supplement.",
        requirements: {
          gpa: "Enrolled student at University of Naples Federico II who has passed at least 40% of planned academic credits.",
          ielts: "Italian or English language proficiency.",
          gre: "Not required.",
          papers: "Student enrollment record.",
          references: "Automatic ranking based on merit and financial need."
        },
        desc: "Paid student work contracts inside university computer centres, libraries, and administrative research divisions, providing flexible financial support for degree candidates."
      }
    ],
    researchers: [
      {
        id: 186,
        subject: "engineering",
        name: "Prof. Dr. Bruno Siciliano",
        title: "Professor of Control and Robotics, Director of PRISMA Lab, IEEE Fellow",
        university: "University of Naples Federico II",
        country: "Italy",
        topics: ["Robotics", "Aerial Manipulation", "Human-Robot Interaction", "Service Robotics"],
        source: "https://www.docenti.unina.it/bruno.siciliano",
        summary: "World-renowned roboticist, author of the Springer Handbook of Robotics, and former President of the IEEE Robotics and Automation Society. Pioneer in aerial robotics and surgical robotics.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 187,
        subject: "engineering",
        name: "Prof. Dr. Raffaele Savino",
        title: "Full Professor of Aerospace Engineering",
        university: "University of Naples Federico II",
        country: "Italy",
        topics: ["Hypersonic Aerodynamics", "Aerospace Propulsion", "Microgravity Fluid Dynamics", "Space Systems"],
        source: "https://www.docenti.unina.it/raffaele.savino",
        summary: "Leading international researcher in hypersonic aerothermodynamics, atmospheric re-entry systems, hybrid rocket propulsion, and space experiment hardware.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 188,
        subject: "computer-science",
        name: "Prof. Dr. Antonio Pescapè",
        title: "Full Professor of Computer Networks, Fellow of IEEE",
        university: "University of Naples Federico II",
        country: "Italy",
        topics: ["Internet Measurements", "Network Security", "Traffic Classification", "Mobile Cloud Computing"],
        source: "https://www.docenti.unina.it/antonio.pescape",
        summary: "Prominent computer networking scientist, leading research in empirical network measurement, AI-driven cyberattack detection, and quality of experience (QoE) in cellular networks.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 5. USA: University of California, Berkeley (Row 1045)
  {
    institution: "University of California, Berkeley",
    shortName: "UC Berkeley",
    countryId: "usa",
    countryLabel: "United States",
    location: "Berkeley, California, USA",
    website: "https://www.berkeley.edu",
    sourceRow: 1045,
    slug: "university-of-california-berkeley",
    heroEyebrow: "United States · California · World's Preeminent Public Research University · Reviewed 14 October 2026",
    headline: "University of California, Berkeley (UC Berkeley)",
    description: "UC Berkeley guide: Berkeley Fellowships ($42,000+ stipend + full tuition waiver), PhD in EECS, BAIR artificial intelligence placements, and 110 Nobel laureates.",
    overview: "Established in 1868 overlooking the San Francisco Bay, the University of California, Berkeley is globally recognized as the world's premier public research university. With 110 Nobel laureates, 25 Turing Award winners, and 14 Fields Medalists, Berkeley has shaped modern human civilization through the discovery of 16 chemical elements (including Berkelium and Californium), Berkeley Unix (BSD), the RISC computer architecture, CRISPR-Cas9 gene editing (Jennifer Doudna), and foundational artificial intelligence (BAIR). Explore verified graduate degrees, guaranteed full doctoral funding packages, and world-renowned faculty profiles.",
    admissions: {
      masters: "Accredited four-year U.S. Bachelor's degree or recognized international equivalent with exceptional academic marks (typically 3.7+ / 4.0 GPA) in relevant quantitative disciplines.",
      phd: "Outstanding undergraduate or Master's degree in relevant discipline with demonstrable scientific research ability, significant publications, and compelling letters of recommendation.",
      language: "Demonstrated English proficiency: Academic IELTS 7.0 overall or TOEFL iBT 90 overall (minimum 22 in each subscore); requirements vary by graduate department.",
      proposal: "Comprehensive 2-page Statement of Purpose and personal history statement detailing research accomplishments, intellectual interests, and faculty alignment at Berkeley.",
      appFee: "USD $140 international graduate application fee submitted via the UC Berkeley Graduate Division portal (waivers available).",
      documents: "Complete official university transcripts, 3 academic letters of recommendation, resume / CV, and academic writing sample or research papers."
    },
    tuitionText: "Tuition for doctoral researchers is 100% fully covered for the duration of academic study. All admitted PhD students in good standing receive guaranteed multi-year financial support packages comprising full tuition and fee remissions, comprehensive health insurance, and monthly living stipends (USD $40,000 to $48,000 per year) via Graduate Student Researcher (GSR) appointments, Graduate Student Instructor (GSI) appointments, or fellowships.",
    opportunities: [
      {
        id: 396,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Berkeley Graduate Fellowships & Chancellor's Fellowships",
        source: "https://grad.berkeley.edu/financial/fellowships/",
        funding: "Fully funded: Full tuition coverage plus annual living stipend of USD $42,000/year and comprehensive university health insurance for up to four years",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Awarded automatically upon departmental graduate admission nomination)",
        fee: "Standard graduate application fee ($140 international)",
        tuition: "Full tuition completely covered for duration of award.",
        requirements: {
          gpa: "Graduation with highest academic distinction (typically top 5% of class, 3.85+ GPA).",
          ielts: "Academic IELTS 7.0+ or TOEFL iBT 90+.",
          gre: "Optional depending on department.",
          papers: "Demonstrated scientific originality, publications, or exceptional technical leadership.",
          references: "Three outstanding recommendation letters from research mentors."
        },
        desc: "UC Berkeley's most prestigious competitive graduate award, awarded across all engineering and science departments to support the world's most promising incoming doctoral researchers."
      },
      {
        id: 397,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "UC Berkeley PhD in Electrical Engineering & Computer Sciences (EECS)",
        source: "https://eecs.berkeley.edu/academics/graduate/research-programs/phd",
        funding: "Fully funded: Full tuition remission plus monthly Graduate Student Researcher (GSR) stipend exceeding USD $44,000/year and health insurance",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual Fall admission deadline)",
        fee: "USD $140 application fee",
        tuition: "100% covered by research appointments or fellowships.",
        requirements: {
          gpa: "Bachelor's or Master's degree in computer science, electrical engineering, or mathematics with near-perfect GPA.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 90.",
          gre: "General GRE not required.",
          papers: "Demonstrated original research track record in computer science or engineering.",
          references: "Three letters of recommendation from researchers familiar with candidate's work."
        },
        desc: "The world's highest-ranked public EECS doctoral program, offering unmatched research in foundational artificial intelligence, robotics, computer systems, and microelectronics."
      },
      {
        id: 398,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "UC Berkeley Master of Science in Computer Science (Plan I Thesis)",
        source: "https://eecs.berkeley.edu/academics/graduate/research-programs/ms",
        funding: "Departmental research assistantships providing tuition coverage and monthly stipends available for admitted students",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual admission deadline)",
        fee: "USD $140 application fee",
        tuition: "Fully subsidized for students holding research assistant appointments.",
        requirements: {
          gpa: "Bachelor of Science in computer science or quantitative sciences with strong academic marks.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated coursework excellence in algorithms, operating systems, and theory.",
          references: "Three academic recommendation letters."
        },
        desc: "Two-year research-focused Master of Science program culminating in an original scientific thesis supervised by world-renowned EECS faculty."
      },
      {
        id: 399,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        title: "UC Berkeley Master of Science in Civil and Environmental Engineering",
        source: "https://ce.berkeley.edu/grad/degrees/ms",
        funding: "Funded via Graduate Student Researcher (GSR) appointments with full tuition coverage and USD $40,000/year living stipend",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall admission cycle deadline)",
        fee: "USD $140 application fee",
        tuition: "Full tuition coverage through sponsored research assistantships.",
        requirements: {
          gpa: "Bachelor of Science in civil, environmental, or mechanical engineering (GPA 3.5+ / 4.0).",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 90.",
          gre: "General GRE optional.",
          papers: "Statement of purpose showing interest in resilient infrastructure and climate systems.",
          references: "Three academic recommendation letters."
        },
        desc: "World-leading engineering master's program focusing on structural mechanics, earthquake engineering, sustainable water resources, and climate adaptation."
      },
      {
        id: 400,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Research",
        title: "Berkeley Artificial Intelligence Research (BAIR) Lab Placements",
        source: "https://bair.berkeley.edu/",
        funding: "Fully funded research appointment: Full tuition support plus annual research assistantship stipends",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (EECS/BAIR graduate student intake deadline)",
        fee: "Included in graduate application",
        tuition: "Fully covered under research assistant appointments.",
        requirements: {
          gpa: "Top academic record in computer science, robotics, or mathematics.",
          ielts: "TOEFL iBT 90 or IELTS 7.0.",
          gre: "Not required.",
          papers: "Demonstrated algorithmic innovation, open-source code contributions, or machine learning publications.",
          references: "Three confidential research letters."
        },
        desc: "One of the world's premier AI research hubs, bringing together over 50 faculty and 300 graduate students investigating deep reinforcement learning, computer vision, and foundation models."
      },
      {
        id: 401,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics"],
        type: "Internship",
        title: "UC Berkeley Undergraduate Research Apprentice Program (URAP)",
        source: "https://urap.berkeley.edu/",
        funding: "Direct student stipends (USD $18.00 to $20.00/hour) or academic credit for supervised laboratory research",
        status: "open-program",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027 (Spring semester URAP application deadline)",
        fee: "Free application for enrolled Berkeley students",
        tuition: "Standard term registration fees apply.",
        requirements: {
          gpa: "Undergraduate student in good academic standing at UC Berkeley.",
          ielts: "Enrolled student status.",
          gre: "Not required.",
          papers: "Statement of interest and project selection.",
          references: "Faculty research mentor approval."
        },
        desc: "Structured undergraduate research program pairing students directly with leading faculty on original scientific and engineering investigations."
      },
      {
        id: 402,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "UC Berkeley Graduate Student Instructor (GSI) & Teaching Fellowships",
        source: "https://grad.berkeley.edu/financial/appointments/",
        funding: "Contractual salary: Full tuition fee remission plus monthly salary of approximately USD $3,800/month",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Departmental teaching allocations for Fall term)",
        fee: "Free internal appointment",
        tuition: "Provides 100% tuition coverage for duration of appointment.",
        requirements: {
          gpa: "Enrolled in good standing in a Berkeley Master's or doctoral program.",
          ielts: "Oral English proficiency certification for international teaching assistants.",
          gre: "Not required.",
          papers: "Subject mastery in relevant lecture or laboratory course.",
          references: "Faculty course instructor endorsement."
        },
        desc: "Academic teaching appointments providing graduate scholars with full tuition remissions, medical insurance, and competitive salaries while instructing Berkeley undergraduate courses."
      }
    ],
    researchers: [
      {
        id: 189,
        subject: "computer-science",
        name: "Prof. Dr. Stuart Russell OBE",
        title: "Professor of Computer Science, Smith-Zadeh Chair in Engineering, AAAI Fellow",
        university: "University of California, Berkeley",
        country: "United States",
        topics: ["Artificial Intelligence", "AI Alignment", "Probabilistic Reasoning", "Machine Learning"],
        source: "https://people.eecs.berkeley.edu/~russell/",
        summary: "World authority on artificial intelligence, co-author of the definitive textbook 'Artificial Intelligence: A Modern Approach', and pioneer in value-aligned, provably beneficial AI systems.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 190,
        subject: "computer-science",
        name: "Prof. Dr. Pieter Abbeel",
        title: "Professor of EECS, Director of the Berkeley Robot Learning Lab",
        university: "University of California, Berkeley",
        country: "United States",
        topics: ["Deep Reinforcement Learning", "Robot Learning", "Foundation Models for Robotics", "Imitation Learning"],
        source: "https://people.eecs.berkeley.edu/~pabbeel/",
        summary: "Pioneer in deep reinforcement learning for robotics, founder of Covariant, and recipient of the ACM Prize in Computing for foundational contributions to robot learning algorithms.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 191,
        subject: "biology",
        name: "Prof. Dr. Jennifer Doudna",
        title: "Li Ka Shing Chancellor's Chair in Biomedical and Health Sciences, Nobel Laureate in Chemistry (2020)",
        university: "University of California, Berkeley",
        country: "United States",
        topics: ["CRISPR-Cas9", "Gene Editing", "RNA Biochemistry", "Structural Biology"],
        source: "https://vcresearch.berkeley.edu/faculty/jennifer-doudna",
        summary: "Nobel Laureate in Chemistry (2020) for the development of the CRISPR-Cas9 genome editing technology, revolutionizing genetics, molecular medicine, and agriculture worldwide.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 6. UNITED KINGDOM: The University of Manchester (Row 1299)
  {
    institution: "The University of Manchester",
    shortName: "Manchester",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Manchester, England, United Kingdom",
    website: "https://www.manchester.ac.uk",
    sourceRow: 1299,
    slug: "the-university-of-manchester",
    heroEyebrow: "United Kingdom · England · Russell Group Titan & Birthplace of Nuclear Physics and Graphene · Reviewed 14 October 2026",
    headline: "The University of Manchester (Manchester, England)",
    description: "The University of Manchester guide: President's Doctoral Scholarships (£19,237/yr + full fees), National Graphene Institute placements, and 25 Nobel laureates.",
    overview: "Established in 1824 in Manchester, England, The University of Manchester is a prominent founding member of the prestigious Russell Group and ranked among the world's top 35 universities. Manchester has generated 25 Nobel laureates and historic scientific breakthroughs: John Dalton's atomic theory, Ernest Rutherford's splitting of the atom, the world's first programmable stored-program computer (The Manchester Baby), and the isolation of graphene (Andre Geim and Konstantin Novoselov, Nobel Prize in Physics 2010). Explore verified graduate degrees, funded doctoral studentships, and world-renowned faculty profiles.",
    admissions: {
      masters: "UK 2:1 honours degree or international equivalent (typically GPA 3.3/4.0 or 75-80%+) in computer science, engineering, or quantitative disciplines.",
      phd: "UK first-class or 2:1 honours degree plus Master's with merit or distinction (or international equivalent), with demonstrable independent research competence.",
      language: "Demonstrated English proficiency: Academic IELTS 7.0 overall (minimum 6.5 in all components) or TOEFL iBT 100 overall (minimum 22 in each component).",
      proposal: "Comprehensive 2-3 page research project proposal detailing research questions, proposed methodology, theoretical context, and faculty advisor alignment.",
      appFee: "£60 application fee for select competitive taught master's degrees; PhD research applications are free of charge.",
      documents: "Complete official university transcripts, 2 confidential academic reference letters, personal statement of research interests, and curriculum vitae."
    },
    tuitionText: "Tuition fees for international postgraduate research students are fully covered under the President's Doctoral Scholar (PDS) Award. Recipients receive 100% full international tuition fee coverage plus annual tax-free living stipends indexed to the UKRI rate (£19,237 to £20,500 per year for 3.5 to 4 years).",
    opportunities: [
      {
        id: 403,
        subject: "physics",
        subjects: ["physics", "engineering", "computer-science", "chemistry"],
        type: "Scholarship",
        title: "Manchester President's Doctoral Scholar (PDS) Award",
        source: "https://www.manchester.ac.uk/study/postgraduate-research/funding/opportunities/display/?id=00000305",
        funding: "Fully funded: Full international tuition fees covered plus annual tax-free living stipend at UKRI rate (£19,237+/year) and research consumables budget for 3.5 to 4 years",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual international scholarship competition deadline for Autumn entry)",
        fee: "Free application for research doctoral study",
        tuition: "Full tuition completely covered for duration of scholarship award.",
        requirements: {
          gpa: "First-class UK honours degree or international equivalent (minimum 3.7+ / 4.0 GPA or 80%+).",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in all subscores or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "High academic distinction; prior published research papers or high-distinction Master's dissertation.",
          references: "Two academic recommendation letters submitted via the application portal."
        },
        desc: "The University of Manchester's premier competitive doctoral award, offering full funding and bespoke presidential leadership training to the world's most promising doctoral researchers."
      },
      {
        id: 404,
        subject: "physics",
        subjects: ["physics", "engineering", "chemistry"],
        type: "PhD",
        title: "Manchester PhD in Graphene and 2D Materials (National Graphene Institute)",
        source: "https://www.graphene.manchester.ac.uk/study/postgraduate-research/",
        funding: "Fully funded studentships: Full tuition fees plus UKRI stipend (£19,237/year tax-free) and access to £61M NGI cleanroom facility",
        status: "open-program",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027 (Primary funding allocation deadline)",
        fee: "No application fee for PhD research applications",
        tuition: "Full international tuition fee covered under studentship.",
        requirements: {
          gpa: "First-class undergraduate degree or Master's with Distinction in physics, materials science, or chemistry.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in each component).",
          gre: "Not required.",
          papers: "Clear research proposal aligning with National Graphene Institute research chairs.",
          references: "Two academic referee reports."
        },
        desc: "Doctoral research inside the world's leading centre for two-dimensional materials, exploring electronic, optical, and thermal properties of graphene and heterostructures."
      },
      {
        id: 405,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "Manchester MSc in Advanced Computer Science",
        source: "https://www.manchester.ac.uk/study/masters/courses/list/08276/msc-advanced-computer-science/",
        funding: "Faculty of Science and Engineering International Excellence Scholarships available (£6,000 to £10,000 grants)",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (International applicant deadline for September entry)",
        fee: "£60 application fee",
        tuition: "£36,500 for international students for the 1-year intensive program.",
        requirements: {
          gpa: "UK 2:1 honours degree or international equivalent in computer science with strong programming and algorithms marks.",
          ielts: "Academic IELTS 7.0 overall (6.5 in all components) or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Transcript demonstrating strong algorithms, discrete mathematics, and software design marks.",
          references: "One academic reference letter."
        },
        desc: "Flexible, research-intensive Master of Science degree offering pathways in artificial intelligence, computer security, software engineering, and data analytics."
      },
      {
        id: 406,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master's",
        title: "Manchester MSc in Aerospace Engineering",
        source: "https://www.manchester.ac.uk/study/masters/courses/list/08323/msc-aerospace-engineering/",
        funding: "Postgraduate scholarships and industrial bursaries available for exceptional candidates",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Application deadline for international students)",
        fee: "£60 application fee",
        tuition: "£35,000 for international students for the 1-year program.",
        requirements: {
          gpa: "UK first-class or strong 2:1 honours degree in aerospace or mechanical engineering.",
          ielts: "Academic IELTS 6.5 overall with minimum 6.0 in all subscores.",
          gre: "Not required.",
          papers: "Coursework in aerodynamics, structural mechanics, and thermodynamics.",
          references: "One confidential academic reference."
        },
        desc: "Advanced aerospace engineering master's program utilizing supersonic wind tunnels and flight simulation facilities to train engineers for global aerospace careers."
      },
      {
        id: 407,
        subject: "physics",
        subjects: ["physics", "engineering", "chemistry"],
        type: "Research",
        title: "National Graphene Institute (NGI) & Henry Royce Institute Placements",
        source: "https://www.graphene.manchester.ac.uk/",
        funding: "Fully funded research appointments: Project stipend plus access to advanced cleanrooms and nanomaterials characterization equipment",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Collaborative research cohort matching)",
        fee: "Standard department application fee",
        tuition: "Tuition offset provided through partner studentships.",
        requirements: {
          gpa: "Master's degree in physics, materials science, or chemical engineering with high honors.",
          ielts: "IELTS 7.0 overall.",
          gre: "Not required.",
          papers: "Demonstrated laboratory experience in nanolithography, thin-film deposition, or spectroscopy.",
          references: "Two academic referee letters."
        },
        desc: "The UK's national institute for advanced materials research, pioneering discoveries in 2D heterostructures, quantum transport, and membrane filtration."
      },
      {
        id: 408,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Internship",
        title: "Manchester Department of Computer Science Summer Research Internships",
        source: "https://www.cs.manchester.ac.uk/",
        funding: "Salaried internship: £420 per week living stipend for 8 to 10 weeks of supervised laboratory research",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual summer internship application deadline)",
        fee: "Free application",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Enrolled in 2nd or 3rd year of undergraduate degree in computer science or engineering.",
          ielts: "Good command of spoken and written English.",
          gre: "Not required.",
          papers: "Academic transcript and statement of interest in computing research.",
          references: "Letter of recommendation from academic tutor."
        },
        desc: "Intensive 8 to 10-week summer research placements inside Manchester computing labs, working directly under faculty guidance on cutting-edge machine learning and systems projects."
      },
      {
        id: 409,
        subject: "computer-science",
        subjects: ["computer-science", "physics"],
        type: "Fellowship",
        title: "Manchester Graduate Teaching Assistantships & Demonstratorships (GTA)",
        source: "https://www.manchester.ac.uk/study/postgraduate-research/funding/opportunities/",
        funding: "Contractual salary: £18.50 to £23.50 per hour for tutoring, laboratory demonstration, and marking",
        status: "open-program",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Semester 1 tutoring allocations round)",
        fee: "Free internal application via department portal",
        tuition: "Provides supplemental income during doctoral research.",
        requirements: {
          gpa: "Enrolled PhD student in the Faculty of Science and Engineering.",
          ielts: "Spoken English fluency certified through university assessment.",
          gre: "Not required.",
          papers: "Subject mastery of the assigned course curriculum.",
          references: "Course organizer approval."
        },
        desc: "Contractual academic employment for registered doctoral researchers, assisting in tutorial leadership, coding laboratory exercises, and student assessment."
      }
    ],
    researchers: [
      {
        id: 192,
        subject: "physics",
        name: "Prof. Sir Andre Geim FRS",
        title: "Regius Professor of Physics, Royal Society Research Professor, Nobel Laureate in Physics (2010)",
        university: "The University of Manchester",
        country: "United Kingdom",
        topics: ["Graphene", "Two-Dimensional Crystals", "Van der Waals Heterostructures", "Mesoscopic Physics"],
        source: "https://www.physics.manchester.ac.uk/about/people/andre-geim/",
        summary: "Nobel Laureate in Physics (2010) for groundbreaking experiments regarding the two-dimensional material graphene. Pioneer in levitation physics, gecko tape, and 2D atomic membranes.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 193,
        subject: "physics",
        name: "Prof. Sir Konstantin Novoselov FRS",
        title: "Professor of Physics, Nobel Laureate in Physics (2010)",
        university: "The University of Manchester",
        country: "United Kingdom",
        topics: ["Condensed Matter Physics", "Mesoscopic Phenomena", "2D Materials", "Atomic Membranes"],
        source: "https://www.physics.manchester.ac.uk/about/people/kostya-novoselov/",
        summary: "Nobel Laureate in Physics (2010) for the isolation and characterization of graphene. Leading international investigator of novel 2D materials and electronic heterostructures.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 194,
        subject: "computer-science",
        name: "Prof. Dr. Steve Furber CBE FRS",
        title: "ICL Professor of Computer Engineering, Fellow of the Royal Society (FRS)",
        university: "The University of Manchester",
        country: "United Kingdom",
        topics: ["Neuromorphic Computing", "SpiNNaker Architecture", "Microprocessor Design", "Neural Networks"],
        source: "https://www.cs.manchester.ac.uk/about/people/steve-furber/",
        summary: "Principal designer of the BBC Micro and the ARM microprocessor architecture (powering billions of mobile devices worldwide), and creator of the SpiNNaker million-core neuromorphic supercomputer.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 7. JAPAN: Hokkaido University (Row 1650)
  {
    institution: "Hokkaido University",
    shortName: "Hokudai",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Sapporo, Hokkaido, Japan",
    website: "https://www.hokudai.ac.jp/en/",
    sourceRow: 1650,
    slug: "hokkaido-university",
    heroEyebrow: "Japan · Hokkaido · Historic Imperial University & World Chemistry Titan · Reviewed 14 October 2026",
    headline: "Hokkaido University (Sapporo, Japan)",
    description: "Hokkaido University guide: MEXT Special Scholarships (¥147,000/mo + full tuition waiver), ICReDD chemical design placements, and Nobel laureate history.",
    overview: "Established in 1876 in Sapporo, Hokkaido, Hokkaido University (Hokudai) is one of Japan's designated Imperial Universities and top research powerhouses. Founded under the motto 'Boys, be ambitious!' by Dr. William S. Clark, Hokudai is celebrated for world-changing chemistry (Nobel Laureate Akira Suzuki for Suzuki-Miyaura cross-coupling; home to the Institute for Chemical Reaction Design and Discovery - ICReDD), cryosphere and Arctic environmental science, veterinary medicine, and materials science. Explore verified graduate degrees, MEXT scholarship allocations, and world-renowned faculty profiles.",
    admissions: {
      masters: "16 years of formal education / recognized Bachelor's degree equivalent; passing of the Hokkaido University graduate entrance examination and interview.",
      phd: "Master's degree or professional degree equivalent; formal preliminary acceptance by a Hokkaido University prospective laboratory professor (*Kyoju*) and research plan approval.",
      language: "Demonstrated English proficiency for English-taught graduate programs: TOEFL iBT 80+ or Academic IELTS 6.5+ (Japanese programs require JLPT N1 or N2).",
      proposal: "Comprehensive 3-5 page research plan (*Kenkyu Keikaku-sho*) detailing theoretical framework, experiment design, and lab alignment.",
      appFee: "¥30,000 entrance examination application fee; admission fee of ¥282,000 and annual tuition of ¥535,800 (fully waived for MEXT and top international scholarship scholars).",
      documents: "Complete official university transcripts, graduation certificates, 2 letters of recommendation, health certificate, and research plan."
    },
    tuitionText: "Tuition is fully waived for scholars receiving Japanese Government (MEXT) University Recommendation Scholarships and Hokkaido University President's Fellowships. Recipients receive 100% full tuition exemption (saving ¥535,800/year plus the ¥282,000 matriculation fee) and monthly tax-free living allowances of ¥147,000 to ¥180,000/month.",
    opportunities: [
      {
        id: 410,
        subject: "chemistry",
        subjects: ["chemistry", "engineering", "physics", "biology", "environment"],
        type: "Scholarship",
        title: "Hokkaido University MEXT University Recommendation & President's Fellowships",
        source: "https://www.global.hokudai.ac.jp/admissions/scholarships/",
        funding: "Fully funded: 100% full tuition exemption plus monthly living allowance of ¥147,000/month (approx. ¥1,764,000/year) and round-trip international airfare",
        status: "open-scholarship",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (MEXT University Recommendation annual nomination deadline for Autumn entry)",
        fee: "¥30,000 application fee waived for nominated candidates",
        tuition: "Full tuition completely covered for duration of scholarship award.",
        requirements: {
          gpa: "Minimum cumulative GPA of 2.30 out of 3.00 on the MEXT grading scale (typically 80%+ equivalent).",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 80+ (or CEFR B2 equivalent).",
          gre: "Not required.",
          papers: "Demonstrated research capability in bachelor/master thesis and strong academic proposal.",
          references: "Two letters of recommendation addressed to the President of Hokkaido University."
        },
        desc: "Japan's premier governmental and university scholarship scheme, providing exceptional international scholars with full tuition waivers and generous living stipends for doctoral research."
      },
      {
        id: 411,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "PhD",
        title: "Hokkaido University PhD in Chemical Sciences and Engineering (AGP Course)",
        source: "https://www.eng.hokudai.ac.jp/english/graduate/",
        funding: "Fully funded through MEXT, JSPS Research Fellowships (DC1/DC2), or ICReDD Doctoral Fellowships (¥180,000/mo)",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (English Course Autumn entry application deadline)",
        fee: "¥30,000 examination fee",
        tuition: "Tuition exemption available based on merit and financial screening.",
        requirements: {
          gpa: "Master's degree in Chemistry, Chemical Engineering, or Materials Science with high academic standing.",
          ielts: "TOEFL iBT 80+ or IELTS 6.5+.",
          gre: "General GRE scores recommended for international applicants.",
          papers: "Master's thesis and academic publication record in chemical sciences.",
          references: "Formal acceptance by a Hokkaido University engineering faculty supervisor."
        },
        desc: "Advanced 3-year doctoral research program covering computer-driven chemical discovery, catalytic reaction design, macromolecular chemistry, and energy materials."
      },
      {
        id: 412,
        subject: "environment",
        subjects: ["environment", "biology", "physics"],
        type: "Master's",
        title: "Hokkaido University Master of Environmental Science (English Program)",
        source: "https://www.ees.hokudai.ac.jp/modules/admission/index.php?content_id=14",
        funding: "Supported by JASSO study grants and Graduate School of Environmental Science research assistantships",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (International Autumn admission deadline)",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per year (tuition exemption application available upon matriculation).",
        requirements: {
          gpa: "Bachelor of Science in Environmental Science, Biology, Chemistry, or Geosciences.",
          ielts: "TOEFL iBT 80+ or Academic IELTS 6.5+.",
          gre: "Not required.",
          papers: "Demonstrated coursework mastery in ecology, geochemistry, or atmospheric sciences.",
          references: "Two academic referee letters."
        },
        desc: "World-class 2-year English-medium master's program exploring cryosphere dynamics, polar ecology, climate change modeling, and environmental remediation."
      },
      {
        id: 413,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "Hokkaido University Master of Engineering in Materials Science and Engineering",
        source: "https://www.eng.hokudai.ac.jp/english/",
        funding: "Eligible for Monbukagakusho (MEXT) Honors Scholarships and Hokudai Foundation awards (¥48,000 to ¥100,000/mo)",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Autumn admission international screening deadline)",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per year (tuition exemption available).",
        requirements: {
          gpa: "Bachelor's degree in materials engineering, metallurgy, or physics with strong foundations.",
          ielts: "Academic IELTS 6.0+ or TOEFL iBT 79+.",
          gre: "Not required.",
          papers: "Undergraduate graduation thesis or research portfolio.",
          references: "Two academic recommendation letters."
        },
        desc: "Cutting-edge international master's degree focusing on advanced semiconductor materials, structural ceramics, eco-materials, and nanostructured metallurgy."
      },
      {
        id: 414,
        subject: "chemistry",
        subjects: ["chemistry", "computer-science"],
        type: "Research",
        title: "Institute for Chemical Reaction Design and Discovery (ICReDD) Placements",
        source: "https://www.icredd.hokudai.ac.jp/",
        funding: "Fully funded research appointment: ¥200,000 to ¥250,000/month living stipend with access to computational supercomputing and automated synthesis labs",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Annual WPI doctoral fellowship application deadline)",
        fee: "Free application",
        tuition: "Tuition fully subsidized under WPI research program.",
        requirements: {
          gpa: "Outstanding academic record in chemistry, computational science, or materials.",
          ielts: "High level of English proficiency.",
          gre: "Not required.",
          papers: "Prior experience in quantum chemical calculations, machine learning, or organic synthesis.",
          references: "Two academic reference letters from international researchers."
        },
        desc: "World Premier International (WPI) research placements combining artificial intelligence, quantum chemical calculations, and experimental synthesis to invent new chemical reactions."
      },
      {
        id: 415,
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Internship",
        title: "Hokkaido Summer Institute (HSI) Laboratory Placements",
        source: "https://hokkaidosummerinstitute.oia.hokudai.ac.jp/",
        funding: "JASSO scholarship eligible: ¥80,000 living allowance for approved short-term summer research fellows",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Application deadline for Summer course placement)",
        fee: "Tuition and application fees waived under partner university agreements",
        tuition: "¥0 tuition under reciprocal academic exchange.",
        requirements: {
          gpa: "Enrolled in good standing at an accredited partner university with GPA 2.3/3.0+.",
          ielts: "TOEFL iBT 80 or IELTS 6.0.",
          gre: "Not required.",
          papers: "Study plan and laboratory research proposal.",
          references: "Nomination by home university international office."
        },
        desc: "Intensive summer laboratory placement program bringing world-leading professors and international students to Sapporo for hands-on frontier scientific experiments."
      },
      {
        id: 416,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Fellowship",
        title: "Hokkaido University Teaching & Research Assistantships (TA/RA)",
        source: "https://www.global.hokudai.ac.jp/",
        funding: "Contractual hourly wages: ¥1,300 to ¥1,800/hour for registered graduate researchers",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Spring semester laboratory appointment allocations)",
        fee: "Free application",
        tuition: "Provides supplemental income during graduate research.",
        requirements: {
          gpa: "Enrolled in good standing in a Hokkaido University Master's or doctoral program.",
          ielts: "English or Japanese language communication competence.",
          gre: "Not required.",
          papers: "Demonstrated laboratory and technical expertise.",
          references: "Supervising professor nomination."
        },
        desc: "On-campus academic assistantships supporting graduate researchers while they mentor undergraduate laboratory experiments, grade exercises, and support academic research projects."
      }
    ],
    researchers: [
      {
        id: 195,
        subject: "chemistry",
        name: "Prof. Dr. Benjamin List",
        title: "Specially Appointed Professor at ICReDD, Nobel Laureate in Chemistry (2021)",
        university: "Hokkaido University",
        country: "Japan",
        topics: ["Asymmetric Organocatalysis", "Catalytic Reaction Design", "Organic Chemistry", "Chemical Discovery"],
        source: "https://www.icredd.hokudai.ac.jp/member/list-benjamin",
        summary: "Nobel Laureate in Chemistry (2021) for the development of asymmetric organocatalysis, leading collaborative research at Hokkaido's ICReDD on computer-aided organic synthesis.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 196,
        subject: "chemistry",
        name: "Prof. Dr. Satoshi Maeda",
        title: "Director of ICReDD, Professor of Chemistry",
        university: "Hokkaido University",
        country: "Japan",
        topics: ["Quantum Chemistry", "Reaction Path Search", "Artificial Force Induced Reaction (AFIR)", "Computational Chemistry"],
        source: "https://www.icredd.hokudai.ac.jp/member/maeda-satoshi",
        summary: "World pioneer in automated reaction path finding and inventor of the Artificial Force Induced Reaction (AFIR) method for quantum chemical discovery of novel reaction mechanisms.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 197,
        subject: "environment",
        name: "Prof. Dr. Shin Sugiyama",
        title: "Professor at Institute of Low Temperature Science",
        university: "Hokkaido University",
        country: "Japan",
        topics: ["Glaciology", "Ice Sheet Dynamics", "Greenland Glacier Monitoring", "Polar Science"],
        source: "https://www.lowtem.hokudai.ac.jp/en/staff/sugiyama.html",
        summary: "Leading international glaciologist, pioneering in-situ subglacial measurements, ice-ocean interactions, and discharge dynamics of glaciers in Greenland, Antarctica, and Patagonia.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 8. SWEDEN: Umeå University (Row 1598)
  {
    institution: "Umeå University",
    shortName: "Umeå",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Umeå, Västerbotten, Sweden",
    website: "https://www.umu.se/en/",
    sourceRow: 1598,
    slug: "umea-university",
    heroEyebrow: "Sweden · Västerbotten · Scandinavia's Arctic Research Titan & Birthplace of CRISPR Discovery · Reviewed 14 October 2026",
    headline: "Umeå University (Umeå, Sweden)",
    description: "Umeå University guide: Salaried PhD positions (SEK 31,500/mo), UCMR molecular medicine placements, MSc in AI & Robotics, and CRISPR Nobel heritage.",
    overview: "Established in 1965 in Umeå, northern Sweden, Umeå University is one of Scandinavia's premier research institutions and a globally recognized centre of scientific discovery. Umeå made history as the home of the seminal CRISPR-Cas9 genome editing discovery by Prof. Emmanuelle Charpentier at the Umeå Centre for Microbial Research (UCMR, Nobel Prize in Chemistry 2020). Umeå leads Europe in infection biology, artificial intelligence, autonomous robotics in extreme environments, and Arctic climate research. Explore verified degrees, salaried doctoral positions, and distinguished faculty profiles.",
    admissions: {
      masters: "Completed Bachelor's degree (minimum 180 ECTS) equivalent to a Swedish Kandidatexamen with a major relevant to the applied program.",
      phd: "Completed second-cycle Master's degree (minimum 240 ECTS with at least 60 ECTS at advanced level) with an independent thesis and proven research competence.",
      language: "Demonstrated English proficiency: English 6 / English B (Academic IELTS 6.5 overall, no band below 5.5, or TOEFL iBT 90 with minimum 20 in writing).",
      proposal: "Comprehensive 3-5 page research project proposal and work plan submitted for advertised doctoral employment positions.",
      appFee: "SEK 900 application fee for non-EU/EEA students submitting master's applications via Universityadmissions.se. Doctoral studies are completely tuition-free for all nationalities.",
      documents: "Complete official university transcripts, degree certificates, detailed syllabus descriptions, CV, and letters of recommendation."
    },
    tuitionText: "Doctoral education is 100% free of tuition fees for all nationalities. Doctoral researchers are employed as university staff (Doktorandanställning) under Swedish collective union agreements, receiving starting gross monthly salaries of SEK 31,500 to SEK 35,000/month with comprehensive Swedish healthcare and pension benefits.",
    opportunities: [
      {
        id: 417,
        subject: "biology",
        subjects: ["biology", "chemistry", "computer-science"],
        type: "Scholarship",
        title: "Umeå University International Master's Scholarships (EC Excellence)",
        source: "https://www.umu.se/en/education/fees-and-scholarships/scholarships/",
        funding: "Tuition waiver: Full or partial tuition fee remissions covering 100% or 50% of international tuition fees for Master's studies",
        status: "open-scholarship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Annual scholarship application deadline for admitted students)",
        fee: "SEK 900 national application fee",
        tuition: "Full tuition covered for top-ranked scholarship awardees.",
        requirements: {
          gpa: "Top-tier academic marks (typically top 10% of class, GPA 3.7+ equivalent) from recognized universities.",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each component) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and strong scholarship motivation statement.",
          references: "Applied as first choice program on Universityadmissions.se."
        },
        desc: "Umeå University's premier merit-based scholarship program for citizens of non-EU/EEA countries, awarding tuition fee remissions to top international scholars."
      },
      {
        id: 418,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Umeå University Salaried Doctoral Positions (Doktorandanställning) in Molecular Biology",
        source: "https://www.umu.se/en/work-with-us/open-positions/",
        funding: "Fully salaried employment: SEK 31,500 to SEK 35,000/month gross salary with Swedish social security, pension, and paid annual leave",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Spring doctoral recruitment round across science and medicine faculties)",
        fee: "Free application via Umeå recruitment portal",
        tuition: "100% tuition-free for all admitted doctoral researchers.",
        requirements: {
          gpa: "Master's degree (minimum 240 ECTS) in molecular biology, biochemistry, or genetics with high academic standing.",
          ielts: "Fluency in English (IELTS 6.5+ or equivalent).",
          gre: "Not required.",
          papers: "Master's thesis demonstrating capacity for independent laboratory research.",
          references: "Two academic letters of recommendation and personal statement."
        },
        desc: "Four-year fully salaried doctoral research employment contracts inside the Umeå Centre for Microbial Research (UCMR) and Department of Molecular Biology."
      },
      {
        id: 419,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "Umeå Master of Science in Robotics and Control",
        source: "https://www.umu.se/en/education/master/master-of-science-in-robotics-and-control/",
        funding: "Eligible for Umeå University Scholarships and Swedish Institute (SI) Global Professionals Scholarships",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (First round national application deadline)",
        fee: "SEK 900 application fee",
        tuition: "SEK 148,000 per academic year for non-EU/EEA students.",
        requirements: {
          gpa: "Bachelor's degree in computer science, robotics, or electrical engineering.",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Coursework in linear algebra, automated control, and Python/C++ programming.",
          references: "Official university transcripts and degree certificates."
        },
        desc: "Cutting-edge two-year master's program exploring autonomous mobile robots, field robotics for forestry/mining, human-robot interaction, and computer vision."
      },
      {
        id: 420,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "Umeå Master of Science in Artificial Intelligence",
        source: "https://www.umu.se/en/education/master/master-of-science-in-artificial-intelligence/",
        funding: "Scholarship opportunities: Umeå tuition waivers and WASP research bursaries",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (National application round deadline)",
        fee: "SEK 900 application fee",
        tuition: "SEK 148,000 per academic year.",
        requirements: {
          gpa: "Bachelor's degree in computer science or mathematics with solid programming background.",
          ielts: "Academic IELTS 6.5 (minimum 5.5 in each subscore).",
          gre: "Not required.",
          papers: "Demonstrated proficiency in algorithms, data structures, and mathematical statistics.",
          references: "Degree certificates and certified transcripts."
        },
        desc: "Rigorous master's degree focusing on automated reasoning, machine learning foundations, intelligent agents, and responsible ethical AI architectures."
      },
      {
        id: 421,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        title: "Umeå Centre for Microbial Research (UCMR) Frontier Research Placements",
        source: "https://www.ucmr.umu.se/",
        funding: "Fully funded research appointments: Monthly doctoral salary (SEK 31,500/mo) with state-of-the-art cryo-EM and bioimaging access",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Spring research cohort intake)",
        fee: "Free application",
        tuition: "Tuition-free collaborative research.",
        requirements: {
          gpa: "Master's degree in molecular biology, biochemistry, or microbiology with high honours.",
          ielts: "Fluent English language skills.",
          gre: "Not required.",
          papers: "Prior experience in molecular cloning, bacterial pathogenesis, or structural biochemistry.",
          references: "Two academic referee letters confirming experimental competence."
        },
        desc: "Research placements at the prestigious centre where CRISPR-Cas9 was co-discovered, investigating molecular mechanisms of infection biology and antimicrobial resistance."
      },
      {
        id: 422,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        title: "Climate Impacts Research Centre (CIRC) Abisko Arctic Placements",
        source: "https://www.arcticcirc.net/",
        funding: "Paid internship: SEK 16,000 to SEK 20,000/month project stipend including field station accommodation in Abisko",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer Arctic field placement matching deadline)",
        fee: "Free application",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Enrolled student at a recognized university in ecology, environmental science, or physical geography.",
          ielts: "Good command of written and spoken English.",
          gre: "Not required.",
          papers: "Curriculum vitae and motivation letter for subarctic field research.",
          references: "Academic reference letter."
        },
        desc: "Field research internships at the Abisko Scientific Research Station in northern Sweden, studying permafrost thaw, tundra carbon exchange, and aquatic ecosystems."
      },
      {
        id: 423,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "Umeå University Teaching Assistantships & Laboratory Mentoring",
        source: "https://www.umu.se/en/work-with-us/",
        funding: "Departmental teaching duties: Up to 20% departmental work integrated into doctoral employment, extending PhD duration to 5 years",
        status: "open-program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Autumn teaching allocation cycle)",
        fee: "Free internal appointment",
        tuition: "Standard salaried employment.",
        requirements: {
          gpa: "Admitted doctoral candidate in good academic standing at Umeå University.",
          ielts: "English communication competency.",
          gre: "Not required.",
          papers: "Completion of introductory university pedagogy course.",
          references: "Faculty director of studies approval."
        },
        desc: "Pedagogical teaching appointments enabling PhD researchers to teach undergraduate laboratory classes and supervise project assignments, extending fully paid doctoral employment."
      }
    ],
    researchers: [
      {
        id: 198,
        subject: "computer-science",
        name: "Prof. Dr. Virginia Dignum",
        title: "Professor of Responsible Artificial Intelligence, Wallenberg AI Fellow",
        university: "Umeå University",
        country: "Sweden",
        topics: ["Responsible AI", "AI Ethics", "Multi-Agent Systems", "Social Simulation"],
        source: "https://www.umu.se/en/staff/virginia-dignum/",
        summary: "World authority on ethical and responsible artificial intelligence, member of the EU High-Level Expert Group on AI, and leader of the AI Policy and Practice research group.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 199,
        subject: "biology",
        name: "Prof. Dr. Maria Fällman",
        title: "Professor of Medical Microbiology, Director of the National Molecular Medicine Fellowship Program",
        university: "Umeå University",
        country: "Sweden",
        topics: ["Bacterial Pathogenesis", "Infection Biology", "Host-Pathogen Interactions", "Signal Transduction"],
        source: "https://www.umu.se/en/staff/maria-fallman/",
        summary: "Leading Swedish microbiologist and researcher at UCMR, pioneering studies on how pathogenic bacteria manipulate host immune cells through type III secretion systems.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 200,
        subject: "computer-science",
        name: "Prof. Dr. Thomas Hellström",
        title: "Professor of Computer Science, Head of Robotics Group",
        university: "Umeå University",
        country: "Sweden",
        topics: ["Field Robotics", "Autonomous Vehicles", "Human-Robot Interaction", "Machine Learning"],
        source: "https://www.umu.se/en/staff/thomas-hellstrom/",
        summary: "Pioneer in field robotics for extreme Scandinavian environments, autonomous forestry machines, obstacle avoidance in unstructured terrain, and robotic cognitive modeling.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 9. NETHERLANDS: Erasmus University Rotterdam (Row 1394)
  {
    institution: "Erasmus University Rotterdam",
    shortName: "Erasmus",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Rotterdam, South Holland, Netherlands",
    website: "https://www.eur.nl/en",
    sourceRow: 1394,
    slug: "erasmus-university-rotterdam",
    heroEyebrow: "Netherlands · South Holland · Global Titan in Econometrics, Medicine & Business Analytics · Reviewed 14 October 2026",
    headline: "Erasmus University Rotterdam (Rotterdam, Netherlands)",
    description: "Erasmus University Rotterdam guide: Salaried PhD under CAO-NU (€3,670/mo), Tinbergen Institute placements, MSc in Econometrics, and Erasmus MC medical research.",
    overview: "Established in 1913 in Rotterdam, South Holland, Erasmus University Rotterdam (EUR) is an internationally celebrated European research university consistently ranked in the global top 70. Named after the Renaissance humanist Desiderius Erasmus, EUR is world-famous as the home of modern econometrics (Jan Tinbergen, recipient of the first Nobel Prize in Economics 1969; Tinbergen Institute), one of Europe's largest academic hospitals (Erasmus MC), and world-leading behavioral data science. Explore verified degrees, salaried doctoral positions under Dutch national agreements, and distinguished faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree from a recognized research university (WO) with equivalent to a Dutch university GPA (typically GPA 3.2+ / 4.0 or 75%+).",
      phd: "Completed Master of Science degree in relevant discipline; appointments occur via competitive application to advertised salaried PhD vacancies or approved external fellowships.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5-7.0 overall (minimum 6.0 in all subscores) or TOEFL iBT 90-100 overall (minimum 22 in all subscores).",
      proposal: "Detailed motivation letter and scientific exposé explaining project methodology and research alignment.",
      appFee: "€100 non-refundable application fee for international students with non-Dutch diplomas.",
      documents: "Complete certified academic transcripts, degree certificate, CV, 2 academic reference letters, and statement of research motivation."
    },
    tuitionText: "Tuition is charged for master's programs (€16,000 to €22,000/year for non-EEA students, with Holland Scholarships providing fee reductions). Doctoral candidates (Promovendi) are not students but salaried university staff employed under the Collective Labour Agreement for Dutch Universities (CAO-NU), earning gross monthly salaries of €2,872 (Year 1) rising to €3,670 (Year 4), plus 8% holiday allowance and 8.3% end-of-year bonus.",
    opportunities: [
      {
        id: 424,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "mathematics"],
        type: "Scholarship",
        title: "Erasmus University Excellence Scholarships & NL Scholarship",
        source: "https://www.eur.nl/en/education/practical-matters/financial-matters/scholarships-grants",
        funding: "Merit grant: €5,000 to €15,000 tuition fee reductions combined with housing assistance for top international Master's applicants",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual scholarship application deadline for non-EEA master's applicants)",
        fee: "€100 application fee",
        tuition: "Partial to full tuition offset depending on scholarship category.",
        requirements: {
          gpa: "Outstanding academic record with GPA equivalent to at least 8.0 on Dutch 10-point scale (top 10% of cohort).",
          ielts: "Academic IELTS 7.0 overall (no band below 6.5) or TOEFL iBT 100.",
          gre: "Required for economics and finance master's programs.",
          papers: "Convincing motivation letter highlighting academic excellence and future societal contribution.",
          references: "Two academic letters of recommendation."
        },
        desc: "Prestigious merit scholarship awarded to outstanding international students from outside the EU/EEA pursuing full-time master's degree programs at Erasmus University Rotterdam."
      },
      {
        id: 425,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics", "computer-science"],
        type: "PhD",
        title: "Erasmus Salaried PhD Positions (Promovendi under CAO-NU) & Tinbergen Institute",
        source: "https://www.eur.nl/en/working-at-eur/vacancies",
        funding: "Fully salaried employment: Gross monthly salary of €2,872 in Year 1 rising to €3,670 in Year 4, plus 8% holiday allowance and 8.3% end-of-year bonus",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling departmental vacancy recruitment for 2027 research intakes)",
        fee: "Free application via EUR careers portal",
        tuition: "Zero tuition fees; full employment contract under Dutch labor law.",
        requirements: {
          gpa: "Completed Master of Science degree in econometrics, economics, or data science with high academic marks.",
          ielts: "Fluency in English (IELTS 7.0+ or TOEFL 100+).",
          gre: "General GRE required for Tinbergen Institute economics positions.",
          papers: "Master's thesis demonstrating solid mathematical and empirical methodology.",
          references: "Two academic referee contacts and cover letter."
        },
        desc: "Four-year salaried doctoral research positions in econometrics, quantitative finance, and medical informatics, providing full statutory social benefits and pension contributions."
      },
      {
        id: 426,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "social-sciences"],
        type: "Master's",
        title: "Erasmus Master of Science in Econometrics and Management Science",
        source: "https://www.eur.nl/en/ese/master/econometrics-and-management-science",
        funding: "Eligible for NL Scholarships and Erasmus School of Economics waivers",
        status: "open-program",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (Non-EU/EEA applicant visa and admission deadline)",
        fee: "€100 application fee",
        tuition: "€18,200 per academic year for non-EEA students.",
        requirements: {
          gpa: "Bachelor's degree in Econometrics, Mathematics, or Statistics with strong linear algebra and probability.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "GRE revised General Test quantitative score 160+ required.",
          papers: "Coursework in microeconometrics, time series analysis, and operations research.",
          references: "Transcripts, CV, and motivation letter."
        },
        desc: "World-renowned two-year master's program taught in English, specializing in Business Analytics, Econometrics, Quantitative Finance, and Operations Research."
      },
      {
        id: 427,
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Master's",
        title: "Erasmus MC Master of Science in Health Sciences & Medical Informatics",
        source: "https://www.erasmusmc.nl/en/education/masters",
        funding: "Erasmus MC research assistantships and Dutch health grants available",
        status: "open-program",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (Application deadline for non-EEA students)",
        fee: "€100 application fee",
        tuition: "€19,500 per academic year.",
        requirements: {
          gpa: "Bachelor's degree in biomedical sciences, medicine, or computational health.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Demonstrated interest in epidemiology, clinical genomics, or healthcare data science.",
          references: "Academic reference letters and transcripts."
        },
        desc: "Research-intensive master's degree hosted inside Europe's largest medical centre, combining biostatistics, clinical epidemiology, and health data intelligence."
      },
      {
        id: 428,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Research",
        title: "Tinbergen Institute Advanced Economic & Econometric Placements",
        source: "https://www.tinbergen.nl/",
        funding: "Fully funded research appointment: Salaried employment under CAO-NU (€2,872–€3,670/mo) with full compute cluster access",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual graduate research intake deadline)",
        fee: "Free application",
        tuition: "Zero tuition charges under salaried appointment.",
        requirements: {
          gpa: "Master's degree in economics or econometrics with top quantitative marks.",
          ielts: "Fluent English skills.",
          gre: "GRE General quantitative score in 90th percentile.",
          papers: "Theoretical or empirical working papers in economics or finance.",
          references: "Two academic letters confirming technical rigor."
        },
        desc: "Joint graduate institute of Erasmus University, University of Amsterdam, and VU Amsterdam, providing elite research training in econometrics, finance, and macroeconomics."
      },
      {
        id: 429,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Internship",
        title: "Rotterdam Port & Financial Center Academic-Corporate Internships",
        source: "https://www.eur.nl/en/research",
        funding: "Paid internship: €800 to €1,300/month corporate allowance during Master's graduation research thesis",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Master's graduation internship matching cycle)",
        fee: "No application fee for enrolled master's students",
        tuition: "Maintains regular student registration.",
        requirements: {
          gpa: "Completion of first-year master's coursework with good academic standing.",
          ielts: "English language proficiency.",
          gre: "Not required.",
          papers: "Internship project plan approved by EUR academic thesis supervisor.",
          references: "Supervising faculty approval."
        },
        desc: "Practical research internships embedded inside leading multinational financial institutions and maritime logistics enterprises across the Rotterdam metropolitan gateway."
      },
      {
        id: 430,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Fellowship",
        title: "Erasmus Student Assistantships (Student-Assistenten)",
        source: "https://www.eur.nl/en/working-at-eur",
        funding: "Contractual salary: €15.50 to €18.50 per hour for tutorial teaching and econometric lab assistance",
        status: "open-program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Semester 1 student assistant teaching allocations)",
        fee: "Free internal application via department portal",
        tuition: "Provides supplemental income during Master's study.",
        requirements: {
          gpa: "Enrolled student at EUR with excellent marks in target subjects.",
          ielts: "English communication competency.",
          gre: "Not required.",
          papers: "Course completion with high grade.",
          references: "Lecturer endorsement."
        },
        desc: "Paid academic teaching positions for master's and advanced bachelor's students, leading tutorial sessions, assisting computer lab classes, and mentoring junior scholars."
      }
    ],
    researchers: [
      {
        id: 201,
        subject: "social-sciences",
        name: "Prof. Dr. Philip Hans Franses",
        title: "Professor of Applied Econometrics and Marketing Research, Fellow of Tinbergen Institute",
        university: "Erasmus University Rotterdam",
        country: "Netherlands",
        topics: ["Econometrics", "Time Series Analysis", "Forecasting", "Quantitative Marketing"],
        source: "https://www.eur.nl/people/philip-hans-franses",
        summary: "World-renowned econometrician and former Dean of Erasmus School of Economics. Pioneer in non-linear time series modeling, seasonal unit roots, and econometric forecasting.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 202,
        subject: "biology",
        name: "Prof. Dr. Marion Koopmans",
        title: "Head of the Department of Viroscience at Erasmus MC, Member of KNAW",
        university: "Erasmus University Rotterdam",
        country: "Netherlands",
        topics: ["Emerging Viruses", "One Health", "Zoonotic Transmission", "Epidemiology"],
        source: "https://www.erasmusmc.nl/en/research/researchers/koopmans-marion",
        summary: "World authority on emerging viral diseases, scientific advisor to the World Health Organization, and leader of global research on zoonotic virus spillover and pandemic preparedness.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 203,
        subject: "social-sciences",
        name: "Prof. Dr. Han Bleichrodt",
        title: "Professor of Behavioral Economics",
        university: "Erasmus University Rotterdam",
        country: "Netherlands",
        topics: ["Behavioral Economics", "Decision Theory", "Risk and Uncertainty", "Health Economics"],
        source: "https://www.eur.nl/people/han-bleichrodt",
        summary: "Prominent decision theorist and behavioral economist, recognized for empirical and axiomatic investigations of prospect theory, non-expected utility, and medical decision making.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 10. SWITZERLAND: USI Università della Svizzera italiana (Row 1361)
  {
    institution: "USI Università della Svizzera italiana",
    shortName: "USI Lugano",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Lugano and Mendrisio, Ticino, Switzerland",
    website: "https://www.usi.ch/en",
    sourceRow: 1361,
    slug: "usi-universita-della-svizzera-italiana",
    heroEyebrow: "Switzerland · Ticino · World-Renowned Centre for Informatics, AI & Architecture · Reviewed 14 October 2026",
    headline: "USI Università della Svizzera italiana (Lugano, Switzerland)",
    description: "USI Lugano guide: Salaried Doctoral Assistantships (CHF 50,000/yr), IDSIA Artificial Intelligence placements, MSc in Informatics, and Swiss CSCS supercomputing.",
    overview: "Established in 1996 in Lugano and Mendrisio, Ticino, Università della Svizzera italiana (USI) is one of Switzerland's 12 public universities. Despite its young age, USI has earned global recognition: its Faculty of Informatics is internationally ranked among Europe's top computing centres, affiliated with the Dalle Molle Institute for Artificial Intelligence (IDSIA, co-directed by deep learning pioneer Jürgen Schmidhuber), and collaborating with the Swiss National Supercomputing Centre (CSCS). Explore low-fee master's degrees, salaried doctoral assistantships, and world-class faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree (minimum 180 ECTS) in computer science, mathematics, or related quantitative discipline from a recognized university.",
      phd: "Recognized Master of Science degree in relevant discipline; appointment occurs through competitive selection to open salaried doctoral assistant positions.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall or TOEFL iBT 90 overall (all informatics and data science master's are taught entirely in English).",
      proposal: "Comprehensive curriculum vitae, statement of research interests, and description of technical software/analytical projects.",
      appFee: "CHF 100 application administrative fee; standard semester tuition of only CHF 2,000 to CHF 4,000/semester (waived for doctoral assistants).",
      documents: "Complete official academic transcripts, degree certificate, CV, 2 academic reference letters, and motivation letter."
    },
    tuitionText: "Tuition is completely free of charge for all doctoral candidates. Doctoral researchers are employed as salaried university assistants (Assistenti dottorandi), earning competitive gross annual salaries of CHF 47,040 to CHF 52,000 per year with comprehensive Swiss social healthcare and retirement coverage.",
    opportunities: [
      {
        id: 431,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Scholarship",
        title: "USI Faculty of Informatics Master's Excellence Grants",
        source: "https://www.usi.ch/en/education/master/study-grants",
        funding: "Merit grant: Complete waiver of tuition fees plus living grant of CHF 4,000/semester for outstanding international Master's applicants",
        status: "open-scholarship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual international grant competition deadline for Autumn entry)",
        fee: "CHF 100 administrative fee",
        tuition: "Full tuition completely waived for grant recipients.",
        requirements: {
          gpa: "Graduation with distinguished academic results (equivalent to top 10% of class) from an accredited university.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and compelling motivation letter.",
          references: "Two letters of recommendation from academic professors."
        },
        desc: "Prestigious Swiss excellence grants awarded to outstanding international graduates pursuing Master's studies in Informatics and Artificial Intelligence at USI."
      },
      {
        id: 432,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "USI Salaried Doctoral Assistantships (Assistente Dottorando) in Informatics & AI",
        source: "https://www.usi.ch/en/feeds/1458",
        funding: "Fully salaried Swiss university contract: CHF 47,040 to CHF 52,000/year gross salary with Swiss healthcare, pension, and paid leave",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Faculty spring recruitment for doctoral laboratory assistants)",
        fee: "Free application via USI recruitment portal",
        tuition: "Zero tuition charges under salaried university appointment.",
        requirements: {
          gpa: "University Master's degree in computer science, mathematics, or physics with high honors.",
          ielts: "Fluent English language skills.",
          gre: "Not required.",
          papers: "Master's research thesis demonstrating experimental or theoretical rigor.",
          references: "Two academic referee contacts and thesis advisor recommendation."
        },
        desc: "Four-year salaried doctoral research positions in computer systems, artificial intelligence, software engineering, and computational science."
      },
      {
        id: 433,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "USI Master of Science in Artificial Intelligence",
        source: "https://www.usi.ch/en/education/master/artificial-intelligence",
        funding: "Eligible for USI Master's Grants and Swiss cantonal living subsidies",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (International applicant deadline for Autumn entry)",
        fee: "CHF 100 application fee",
        tuition: "CHF 4,000 per semester for international students (scholarships available).",
        requirements: {
          gpa: "Bachelor of Science in Computer Science, Mathematics, or Physics with strong programming marks.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90 (taught entirely in English).",
          gre: "Not required.",
          papers: "Demonstrated coursework in machine learning, algorithms, and linear algebra.",
          references: "Certified transcripts and curriculum vitae."
        },
        desc: "High-level two-year English-taught Master of Science degree offered jointly with IDSIA, covering deep learning, reinforcement learning, robotics, and computer vision."
      },
      {
        id: 434,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "USI Master of Science in Software and Data Engineering",
        source: "https://www.usi.ch/en/education/master/software-and-data-engineering",
        funding: "Supported by Swiss research assistantships and faculty tuition scholarships",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (International application deadline)",
        fee: "CHF 100 application fee",
        tuition: "CHF 4,000 per semester.",
        requirements: {
          gpa: "Bachelor's degree in computer science or software engineering.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Transcripts showing solid grounding in distributed systems and databases.",
          references: "Curriculum vitae and motivation letter."
        },
        desc: "Specialized master's program bridging modern software architecture, large-scale data engineering, cloud systems, and software security."
      },
      {
        id: 435,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Research",
        title: "Dalle Molle Institute for Artificial Intelligence (IDSIA) Research Placements",
        source: "https://www.idsia.ch/",
        funding: "Fully funded research appointment: Salaried doctoral contract (CHF 50,000/yr) with cutting-edge GPU cluster access",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Collaborative doctoral AI intake deadline)",
        fee: "Free application",
        tuition: "Tuition fully covered under research appointment.",
        requirements: {
          gpa: "Master's degree in computer science, robotics, or mathematics with outstanding grades.",
          ielts: "High-level English communication skills.",
          gre: "Not required.",
          papers: "Practical research experience in neural networks, reinforcement learning, or swarm robotics.",
          references: "Two letters of recommendation from AI researchers."
        },
        desc: "World-famous artificial intelligence institute co-affiliated with USI and SUPSI, pioneering recurrent neural networks, LSTM foundations, and autonomous robotics."
      },
      {
        id: 436,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Internship",
        title: "USI Informatics Undergraduate Research & Summer Internships",
        source: "https://www.inf.usi.ch/",
        funding: "Funded summer scholarship: CHF 1,500/month living bursary plus laboratory project guidance",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual international summer program application deadline)",
        fee: "Free application via faculty portal",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Enrolled in 2nd or 3rd year of undergraduate degree in computer science or mathematics with top grades.",
          ielts: "Proficient in written and spoken English.",
          gre: "Not required.",
          papers: "Transcripts, curriculum vitae, and statement of research interests.",
          references: "Two letters of recommendation from home university professors."
        },
        desc: "Competitive summer research fellowship bringing international undergraduate scholars to Lugano to conduct independent computing and AI investigations."
      },
      {
        id: 437,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Fellowship",
        title: "USI Graduate Assistant Teaching Duties & Lab Supervision",
        source: "https://www.usi.ch/en/feeds/1458",
        funding: "Contractual salary: Incorporated into salaried doctoral assistant package (CHF 47,040–CHF 52,000/year)",
        status: "open-program",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Semester teaching assignment allocations)",
        fee: "Free internal appointment",
        tuition: "Included in employment contract.",
        requirements: {
          gpa: "Employed doctoral assistant in good academic standing at USI.",
          ielts: "English teaching communication competency.",
          gre: "Not required.",
          papers: "Course syllabus mastery.",
          references: "Faculty laboratory director endorsement."
        },
        desc: "Academic teaching appointments providing doctoral researchers with university instructional experience, supervising practical laboratory exercises and guiding bachelor student projects."
      }
    ],
    researchers: [
      {
        id: 204,
        subject: "computer-science",
        name: "Prof. Dr. Jürgen Schmidhuber",
        title: "Scientific Director at IDSIA, Professor at USI Faculty of Informatics",
        university: "USI Università della Svizzera italiana",
        country: "Switzerland",
        topics: ["Deep Learning", "Artificial Neural Networks", "LSTM Networks", "Reinforcement Learning"],
        source: "https://people.idsia.ch/~juergen/",
        summary: "Father of modern recurrent neural networks, co-inventor of Long Short-Term Memory (LSTM) which revolutionized speech recognition, translation, and large-scale language modeling.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 205,
        subject: "computer-science",
        name: "Prof. Dr. Antonio Carzaniga",
        title: "Full Professor at USI Faculty of Informatics, ACM Fellow",
        university: "USI Università della Svizzera italiana",
        country: "Switzerland",
        topics: ["Distributed Systems", "Content-Based Networking", "Software Architecture", "Publish-Subscribe Systems"],
        source: "https://www.inf.usi.ch/carzaniga/",
        summary: "ACM Fellow and pioneer in content-based publish/subscribe communication architectures, self-healing software systems, and large-scale distributed information dissemination.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 206,
        subject: "computer-science",
        name: "Prof. Dr. Cesare Pautasso",
        title: "Full Professor of Computer Science at USI",
        university: "USI Università della Svizzera italiana",
        country: "Switzerland",
        topics: ["Software Engineering", "RESTful Web APIs", "Cloud Architecture", "Business Process Modeling"],
        source: "https://www.inf.usi.ch/faculty/pautasso/",
        summary: "Leading international expert on software architecture, RESTful web services, cloud computing architectures, and visual programming environments.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  }
];
