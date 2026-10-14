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

export const cycle5Universities = [
  // 1. CANADA: University of Waterloo (Row 98)
  {
    institution: "University of Waterloo",
    shortName: "Waterloo",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Waterloo, Ontario, Canada",
    website: "https://uwaterloo.ca",
    sourceRow: 98,
    slug: "university-of-waterloo",
    heroEyebrow: "Canada · Ontario · Global Leader in Innovation, Tech & Quantum Computing · Reviewed 14 October 2026",
    headline: "University of Waterloo (Waterloo, Ontario)",
    description: "University of Waterloo guide: President's Graduate Scholarships, International Doctoral Awards ($28,500+ guaranteed funding), IQC quantum placements, and faculty profiles.",
    overview: "Founded in 1957 in Waterloo, Ontario, the University of Waterloo is widely recognized as Canada's most innovative university and the global pioneer of cooperative education (co-op). Waterloo is an international powerhouse in computer science, software engineering, mathematics, and quantum computing, housing the world-renowned Institute for Quantum Computing (IQC) and collaborating closely with the nearby Perimeter Institute for Theoretical Physics. Explore verified graduate degrees, guaranteed doctoral funding packages, and world-leading faculty profiles.",
    admissions: {
      masters: "4-year Honours Bachelor's degree (or equivalent) in computer science, mathematics, or engineering with standing equivalent to at least 78% (B+ to A- average).",
      phd: "Recognized Master's degree in relevant discipline with high academic standing (minimum 80% or A- average) and demonstrable independent research capability.",
      language: "Demonstrated English proficiency: Academic IELTS 7.5 overall (minimum 7.0 in writing and speaking) or TOEFL iBT 100 overall (minimum 26 in writing and speaking).",
      proposal: "Comprehensive 2-page statement of research interest outlining background, proposed methodology, and alignment with target Waterloo faculty supervisors.",
      appFee: "CAD $125 non-refundable application fee submitted through the Waterloo online portal.",
      documents: "Complete official university transcripts, 3 confidential letters of recommendation, curriculum vitae, and personal statement of research interests."
    },
    tuitionText: "Tuition for research-stream graduate degrees is supported by departmental funding packages and scholarships. For doctoral students in good standing, Waterloo provides guaranteed minimum base funding of CAD $28,500 per year (often exceeding CAD $35,000 in CS and engineering) plus the International Doctoral Student Award (IDSA) which substantially offsets international tuition fees.",
    opportunities: [
      {
        id: 298,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Waterloo President's Graduate Scholarship & International Doctoral Student Award (IDSA)",
        source: "https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/awards/international-doctoral-student-award-idsa",
        funding: "Fully funded: Annual living stipend of CAD $20,000 to $28,500/year plus full international tuition fee differential offset for up to four years of doctoral study",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Departmental graduate awards nomination deadline for Fall entry)",
        fee: "CAD $125 graduate application fee",
        tuition: "Full tuition differential covered for award recipients.",
        requirements: {
          gpa: "First-class academic standing (minimum 80% / A- average or equivalent) across prior degree coursework.",
          ielts: "Academic IELTS 7.5 overall with minimum 7.0 in writing and speaking or TOEFL iBT 100.",
          gre: "Recommended for quantitative programs outside North America.",
          papers: "Demonstrated research potential through publications, conferences, or Bachelor/Master thesis.",
          references: "Three academic reference letters submitted electronically through the Waterloo portal."
        },
        desc: "Waterloo's flagship doctoral awards package providing guaranteed financial assistance and international fee remissions for outstanding students pursuing doctoral research across all faculties."
      },
      {
        id: 299,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Waterloo PhD in Computer Science & Quantum Information",
        source: "https://cs.uwaterloo.ca/future-graduate-students/phd-program",
        funding: "Guaranteed minimum funding of CAD $28,500/year for 4 years through research assistantships, teaching assistantships, and scholarships",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall admission cycle deadline; earlier application advised)",
        fee: "CAD $125 graduate application fee",
        tuition: "Tuition offset provided through IDSA and departmental base funding.",
        requirements: {
          gpa: "Master's degree in Computer Science, Mathematics, or closely related discipline with at least an A- (80%) average.",
          ielts: "Academic IELTS 7.5 overall (7.0 in writing and speaking) or TOEFL iBT 100.",
          gre: "General GRE required for international applicants who completed degrees outside Canada.",
          papers: "Prior peer-reviewed research papers or Master's thesis in computer science.",
          references: "Three confidential academic references."
        },
        desc: "One of the world's leading computer science doctoral programs, offering cutting-edge research in quantum computing, artificial intelligence, systems, algorithms, and cryptography."
      },
      {
        id: 300,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Waterloo Master of Mathematics (MMath) in Computer Science (Thesis)",
        source: "https://cs.uwaterloo.ca/current-graduate-students/programs/mmath",
        funding: "Minimum funding package of CAD $24,000/year for 2 years (6 terms) for full-time thesis-stream students",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall entry application deadline)",
        fee: "CAD $125 graduate application fee",
        tuition: "Subsidized through research assistantships and teaching allocations.",
        requirements: {
          gpa: "Four-year Honours Bachelor's degree in Computer Science or Mathematics with a minimum 78% overall average.",
          ielts: "Academic IELTS 7.5 overall with 7.0 in writing/speaking.",
          gre: "Recommended for international applicants.",
          papers: "Demonstrated coursework excellence and undergraduate research experience.",
          references: "Three academic reference letters."
        },
        desc: "Rigorous two-year thesis-based Master of Mathematics degree providing deep theoretical foundational training and faculty-supervised original computer science research."
      },
      {
        id: 301,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "Waterloo Master of Applied Science (MASc) in Electrical & Computer Engineering",
        source: "https://uwaterloo.ca/electrical-computer-engineering/graduate-studies",
        funding: "Guaranteed minimum financial support package of CAD $23,000/year for 2 years",
        status: "open-program",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Fall admission deadline)",
        fee: "CAD $125 graduate application fee",
        tuition: "Supported by research assistantships and departmental awards.",
        requirements: {
          gpa: "Bachelor's degree in electrical engineering, computer engineering, or related discipline with minimum 78% average.",
          ielts: "Academic IELTS 7.0 overall (6.5 in all bands) or TOEFL iBT 90.",
          gre: "Optional for applicants with North American degrees.",
          papers: "Undergraduate capstone project or laboratory research experience.",
          references: "Three letters of recommendation."
        },
        desc: "Research-intensive Master of Applied Science program focusing on wireless communications, robotics, nanophotonics, embedded systems, and power engineering."
      },
      {
        id: 302,
        subject: "physics",
        subjects: ["physics", "computer-science", "mathematics"],
        type: "Research",
        title: "Institute for Quantum Computing (IQC) Graduate Research Placements",
        source: "https://uwaterloo.ca/institute-for-quantum-computing/",
        funding: "Fully funded research appointment: Competitive stipend starting at CAD $28,500/year plus specialized laboratory travel grants",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Formal graduate intake via Physics, CS, or ECE)",
        fee: "Standard department application fee applies",
        tuition: "Full tuition support packages provided through IQC and partner departments.",
        requirements: {
          gpa: "High honours Bachelor's or Master's degree in physics, mathematics, or computer science (82%+ average).",
          ielts: "Academic IELTS 7.5 overall or TOEFL iBT 100.",
          gre: "Physics GRE or General GRE strongly encouraged.",
          papers: "Strong mathematical physics foundation; prior research in quantum information theory or experimental hardware.",
          references: "Three academic letters confirming research potential."
        },
        desc: "Interdisciplinary research placements at one of the world's premier quantum centres, conducting theoretical and experimental investigations into superconducting qubits, optics, and algorithms."
      },
      {
        id: 303,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "Waterloo Co-operative Education & Undergraduate Research Assistantships (URA)",
        source: "https://uwaterloo.ca/co-operative-education/",
        funding: "Salaried placement: CAD $6,500 to $12,000 per 4-month academic term based on program level and discipline",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Spring/Summer term research placement matching cycle)",
        fee: "No application fee for registered enrolled students",
        tuition: "Academic term fees apply as per standard registration status.",
        requirements: {
          gpa: "Minimum cumulative average of 75% in engineering, math, or science coursework.",
          ielts: "Enrollment in good standing at University of Waterloo.",
          gre: "Not required.",
          papers: "Curriculum vitae and technical transcript demonstrating relevant course foundations.",
          references: "Faculty endorsement required for laboratory placements."
        },
        desc: "Canada's largest academic co-op and research assistantship ecosystem, connecting students with cutting-edge university laboratory projects and leading high-tech industry partners."
      },
      {
        id: 304,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "Waterloo Graduate Teaching Assistantships (GTA) & Research Assistantships (GRA)",
        source: "https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/awards/graduate-teaching-assistantships",
        funding: "Contractual salary: Approximately CAD $5,500 per term for a standard 10 hour/week teaching appointment",
        status: "open-program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Fall term teaching assistantship allocation review)",
        fee: "Free application via departmental TA portal",
        tuition: "Complements base departmental graduate stipend.",
        requirements: {
          gpa: "Admission and ongoing registration in a Waterloo research graduate degree.",
          ielts: "Demonstrated spoken English proficiency: IELTS Spoken band 7.0+ or completion of ITA training.",
          gre: "Not required.",
          papers: "Strong mastery of course curriculum to be tutored or demonstrated.",
          references: "Assigned by academic graduate office."
        },
        desc: "Salaried academic teaching appointments under the Canadian Union of Public Employees (CUPE), providing graduate scholars with instructional experience and supplemental income."
      }
    ],
    researchers: [
      {
        id: 147,
        subject: "physics",
        name: "Prof. Dr. Raymond Laflamme",
        title: "Canada Research Chair in Quantum Information, Professor of Physics",
        university: "University of Waterloo",
        country: "Canada",
        topics: ["Quantum Information", "Quantum Error Correction", "Nuclear Magnetic Resonance", "Quantum Computing"],
        source: "https://uwaterloo.ca/institute-for-quantum-computing/people-profiles/raymond-laflamme",
        summary: "Pioneer in quantum error correction and former student of Stephen Hawking. Founding Executive Director of the Institute for Quantum Computing (IQC) and leading researcher in experimental quantum implementations.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 148,
        subject: "computer-science",
        name: "Prof. Dr. Jimmy Lin",
        title: "David R. Cheriton Chair in Software Systems, Professor of Computer Science",
        university: "University of Waterloo",
        country: "Canada",
        topics: ["Information Retrieval", "Natural Language Processing", "Large Language Models", "Search Systems"],
        source: "https://cs.uwaterloo.ca/~jimmylin/",
        summary: "World-renowned authority on large-scale information retrieval, dense neural retrieval architectures, and big data infrastructure for natural language processing.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 149,
        subject: "computer-science",
        name: "Prof. Dr. Kate Larson",
        title: "University Research Chair in Multiagent Systems, Professor of Computer Science",
        university: "University of Waterloo",
        country: "Canada",
        topics: ["Multiagent Systems", "Algorithmic Game Theory", "AI Ethics", "Reinforcement Learning"],
        source: "https://cs.uwaterloo.ca/~klarson/",
        summary: "Distinguished researcher in multiagent coordination, cooperative game theory, computational social choice, and ethical AI mechanism design.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 2. AUSTRALIA: The University of Queensland (Row 156)
  {
    institution: "The University of Queensland",
    shortName: "UQ",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Brisbane, Queensland, Australia",
    website: "https://www.uq.edu.au",
    sourceRow: 156,
    slug: "the-university-of-queensland",
    heroEyebrow: "Australia · Queensland · Group of Eight Founding Member · Reviewed 14 October 2026",
    headline: "The University of Queensland (Brisbane, Australia)",
    description: "The University of Queensland guide: UQ Graduate School Scholarships ($35,000/yr tax-free + tuition waiver), AIBN bioengineering placements, and faculty profiles.",
    overview: "Established in 1909 in Brisbane, The University of Queensland (UQ) is a founding member of Australia's prestigious Group of Eight (Go8) and ranked consistently among the world's top 40 to 50 universities. UQ is internationally acclaimed for discoveries that transformed global healthcare (including the Gardasil cervical cancer vaccine and the Nanopatch), sustainable energy, and quantum photonics. Explore verified graduate degrees, fully funded doctoral packages, and distinguished faculty profiles.",
    admissions: {
      masters: "Recognized Bachelor's degree with a minimum Grade Point Average (GPA) of 5.0 on UQ's 7-point scale (approximately 70-75%+) in a relevant discipline.",
      phd: "Bachelor's degree with First Class Honours or Master's degree with a substantial research thesis (minimum 25% research component) and high academic standing.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall (minimum 6.0 in each subband) or TOEFL iBT 87 overall (minimum 21 in writing, 19 in other bands).",
      proposal: "Comprehensive 2-3 page research project outline detailing background, research questions, proposed methodology, and endorsed UQ advisor alignment.",
      appFee: "AUD $100 non-refundable international application fee submitted via UQ's online portal.",
      documents: "Complete official university transcripts, graduation certificates, 2 academic referee reports, detailed CV, and project proposal."
    },
    tuitionText: "Tuition for international research higher degree candidates is fully covered under the UQ Graduate School Scholarships (UQGSS) and Australian Government Research Training Program (RTP). Recipients receive 100% full tuition fee offset scholarships, overseas student health cover (OSHC), and tax-free living allowances.",
    opportunities: [
      {
        id: 305,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "biology", "chemistry"],
        type: "Scholarship",
        title: "UQ Graduate School Scholarships (UQGSS) & RTP Research Scholarships",
        source: "https://scholarships.uq.edu.au/scholarship/graduate-school-scholarships-uqgss",
        funding: "Fully funded: Annual tax-free living stipend of AUD $35,000/year (indexed annually) plus full international tuition fee offset and single OSHC health cover for up to 3.5 years",
        status: "open-scholarship",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Round 2 international scholarship consideration deadline for mid-year entry)",
        fee: "AUD $100 international application fee",
        tuition: "Full tuition completely covered for duration of award.",
        requirements: {
          gpa: "First Class Honours (Honours I) or equivalent Master's with high distinction in research.",
          ielts: "Academic IELTS 6.5 overall (no band less than 6.0) or TOEFL iBT 87.",
          gre: "Not required.",
          papers: "Demonstrable research track record including publications, conference presentations, or honours thesis.",
          references: "Two academic referee reports submitted directly via UQ referee system."
        },
        desc: "The University of Queensland's premier competitive doctoral scholarship scheme, awarding fully funded tuition offsets and generous living stipends to outstanding international researchers."
      },
      {
        id: 306,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "UQ PhD in Information Technology & Electrical Engineering",
        source: "https://study.uq.edu.au/study-options/programs/doctor-philosophy-7501",
        funding: "Fully funded doctoral position providing AUD $35,000/year tax-free stipend, full tuition fee remission, and project consumables funding",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Primary international scholarship deadline for mid-year entry)",
        fee: "AUD $100 international application fee",
        tuition: "100% covered via UQ tuition fee offset scholarship.",
        requirements: {
          gpa: "Bachelor's degree with First Class Honours or Master's degree in IT, CS, or electrical engineering with significant research thesis.",
          ielts: "Academic IELTS 6.5 overall with 6.0 in all components.",
          gre: "Not required.",
          papers: "Demonstrated research writing ability and prior technical publications.",
          references: "Two academic referee reports."
        },
        desc: "Comprehensive 3.5 to 4 year doctoral research degree exploring artificial intelligence, cyber security, data science, computer vision, and advanced electrical systems."
      },
      {
        id: 307,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "UQ Master of Computer Science (Cyber Security & Data Analytics)",
        source: "https://study.uq.edu.au/study-options/programs/master-computer-science-5527",
        funding: "Merit-based scholarships available: Faculty of EAIT International Scholarships providing up to AUD $10,000 tuition fee reductions",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Semester 1 commencement application deadline)",
        fee: "AUD $100 application fee",
        tuition: "AUD $49,440 per year for international students without scholarship offset.",
        requirements: {
          gpa: "Bachelor's degree in computer science or software engineering with minimum GPA 5.0/7.0 (approx. 72%).",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each subband) or TOEFL iBT 87.",
          gre: "Not required.",
          papers: "Undergraduate degree project or relevant programming portfolio.",
          references: "Academic transcripts and syllabus documentation."
        },
        desc: "Advanced two-year coursework and industry capstone degree providing rigorous training in distributed systems, cryptographic security, and scalable cloud engineering."
      },
      {
        id: 308,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Master's",
        title: "UQ Master of Biotechnology (Biomedical & Synthetic Biology)",
        source: "https://study.uq.edu.au/study-options/programs/master-biotechnology-5595",
        funding: "Scholarship opportunities: UQ Science International Scholarships offering AUD $5,000 to $10,000 tuition remissions",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Semester 1 entry deadline)",
        fee: "AUD $100 application fee",
        tuition: "AUD $47,200 per academic year.",
        requirements: {
          gpa: "Bachelor's degree in biological sciences, biochemistry, or biotechnology with GPA 5.0/7.0 or higher.",
          ielts: "Academic IELTS 6.5 overall (6.0 in all subscores).",
          gre: "Not required.",
          papers: "Laboratory experience in molecular biology or biochemistry.",
          references: "Academic reference letters and transcripts."
        },
        desc: "World-class biotechnology research and industry training hosted at UQ's cutting-edge bioscience institutes, focusing on drug delivery, vaccines, and molecular biology."
      },
      {
        id: 309,
        subject: "engineering",
        subjects: ["engineering", "biology", "chemistry"],
        type: "Research",
        title: "Australian Institute for Bioengineering and Nanotechnology (AIBN) Placements",
        source: "https://aibn.uq.edu.au/",
        funding: "Fully funded research appointments: AUD $35,000/yr tax-free stipend plus dedicated laboratory consumable funding",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Formal RHD scholarship application deadline)",
        fee: "Standard UQ application fee",
        tuition: "Tuition offset included for all scholarship awardees.",
        requirements: {
          gpa: "First Class Honours or equivalent Master's with high marks in bioengineering, materials, or molecular biology.",
          ielts: "Academic IELTS 6.5 overall.",
          gre: "Not required.",
          papers: "Demonstrated experimental laboratory skills and research publications.",
          references: "Two academic referee endorsements."
        },
        desc: "Interdisciplinary research placements in nanomedicine, biomaterials, stem cell regenerative therapy, and precision therapeutics at one of Australia's premier research institutes."
      },
      {
        id: 310,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics"],
        type: "Internship",
        title: "UQ Summer & Winter Research Scholarships Program",
        source: "https://employability.uq.edu.au/summer-winter-research",
        funding: "Funded bursary: AUD $1,500 to $3,000 research stipend for 6 to 10 weeks of supervised laboratory research",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Winter research program intake applications open)",
        fee: "Free application for eligible university scholars",
        tuition: "No tuition charges for internship research program.",
        requirements: {
          gpa: "Enrolled undergraduate or postgraduate student with cumulative GPA 5.5/7.0 or higher.",
          ielts: "Equivalent to standard UQ English language requirement.",
          gre: "Not required.",
          papers: "Academic transcript and project preference selection.",
          references: "Endorsement by hosting UQ faculty researcher."
        },
        desc: "Intensive 6 to 10-week laboratory immersion program allowing undergraduate and master's scholars to work alongside leading UQ professors on frontier scientific projects."
      },
      {
        id: 311,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "UQ Casual Academic Teaching Fellowships & Lab Demonstratorships",
        source: "https://hr.uq.edu.au/careers/casual-academic",
        funding: "Contractual salary: AUD $52 to $68 per tutorial/marking hour based on qualification level",
        status: "open-program",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027 (Semester 1 casual academic allocations)",
        fee: "Free application via UQ CAAS recruitment portal",
        tuition: "Provides supplemental income during graduate study.",
        requirements: {
          gpa: "Enrolled in good standing in a UQ postgraduate research or honours degree.",
          ielts: "High level of spoken English communication.",
          gre: "Not required.",
          papers: "Strong technical competency in course curriculum.",
          references: "Subject coordinator approval."
        },
        desc: "Paid academic teaching contracts for postgraduate researchers, leading tutorial discussions, laboratory demonstration sessions, and coursework assessment in engineering and IT."
      }
    ],
    researchers: [
      {
        id: 150,
        subject: "physics",
        name: "Prof. Dr. Halina Rubinsztein-Dunlop AO",
        title: "Professor of Physics, Fellow of the Australian Academy of Science (FAA)",
        university: "The University of Queensland",
        country: "Australia",
        topics: ["Optical Tweezers", "Quantum Atom Optics", "Laser Cooling", "Nanophotonics"],
        source: "https://researchers.uq.edu.au/researcher/287",
        summary: "Officer of the Order of Australia (AO), pioneer in optical tweezers, microrheology, laser manipulation of atoms, and founder of the UQ Quantum Science Laboratories.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 151,
        subject: "computer-science",
        name: "Prof. Dr. Shazia Sadiq",
        title: "Professor of Computer Science, Fellow of the Australian Academy of Technology and Engineering (FTSE)",
        university: "The University of Queensland",
        country: "Australia",
        topics: ["Data Quality", "Business Process Management", "Process Mining", "Data Science"],
        source: "https://researchers.uq.edu.au/researcher/222",
        summary: "Leading international researcher in data quality management, process analytics, and responsible educational data science, chairing national initiatives in STEM diversity.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 152,
        subject: "engineering",
        name: "Prof. Dr. Mark Kendall",
        title: "Professor of Bioengineering, Inventor of the Nanopatch",
        university: "The University of Queensland",
        country: "Australia",
        topics: ["Nanomedicine", "Vaccine Delivery", "Biomedical Devices", "Microneedles"],
        source: "https://researchers.uq.edu.au/researcher/1344",
        summary: "World-renowned bioengineer and Rolex Laureate for Enterprise, pioneer of the Nanopatch needle-free vaccine delivery technology and advanced micro-nanotechnologies.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 3. GERMANY: RWTH Aachen University (Row 337)
  {
    institution: "RWTH Aachen University",
    shortName: "RWTH Aachen",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Aachen, North Rhine-Westphalia, Germany",
    website: "https://rwth-aachen.de",
    sourceRow: 337,
    slug: "rwth-aachen-university",
    heroEyebrow: "Germany · North Rhine-Westphalia · TU9 Engineering & Tech Titan · Reviewed 14 October 2026",
    headline: "RWTH Aachen University (Aachen, Germany)",
    description: "RWTH Aachen University guide: Salaried PhD positions (TV-L E13 €54,000/yr), MSc Robotic Systems, JARA computing placements, UROP internships, and faculty profiles.",
    overview: "Established in 1870 in Aachen, North Rhine-Westphalia, RWTH Aachen University is Germany's largest technical university and a prominent founding member of the TU9 alliance. RWTH is internationally celebrated as an engineering powerhouse, driving breakthroughs in autonomous robotics, advanced metallurgy, automotive technology, and high-performance computing. Explore tuition-free degree programs, salaried doctoral employment contracts, and world-class faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree in engineering or computer science closely aligned with RWTH curricula, demonstrating rigorous foundations in mathematics and mechanics.",
      phd: "Relevant Master's degree (grade 'gut' or better, typically 2.0 or higher in German grading scale); formal confirmation of doctoral supervision by an RWTH university chair professor.",
      language: "Demonstrated English proficiency for English-taught degrees: Academic IELTS 6.5 overall or TOEFL iBT 90 (German programs require TestDaF 4x4 or DSH-2).",
      proposal: "Comprehensive 5 to 10-page scientific exposé describing doctoral research framework, methodology, and work plan.",
      appFee: "No tuition fee; nominal semester social contribution (Semesterbeitrag) of approx. €320/semester including public regional transit ticket.",
      documents: "Certified university transcripts, detailed module handbook/course descriptions, curriculum vitae, and academic letters of recommendation."
    },
    tuitionText: "Tuition is free of charge for all domestic and international students. Doctoral candidates are predominantly employed on salaried public-sector research employment contracts (Wissenschaftliche/r Mitarbeiter/in under TV-L E13), earning gross salaries of €52,000 to €58,000 per year with comprehensive statutory health insurance and pension benefits.",
    opportunities: [
      {
        id: 312,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics"],
        type: "Scholarship",
        title: "RWTH Aachen Excellence & Deutschlandstipendium Scholarships",
        source: "https://www.rwth-aachen.de/cms/root/wirtschaft/fuer-studierende/stipendien-und-foerderprogramme/~bdpj/deutschlandstipendium/",
        funding: "Merit grant: €3,600/year (€300/month) tax-free living stipend combined with corporate mentoring and exclusive laboratory project access",
        status: "open-scholarship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Annual scholarship application round for enrolled students)",
        fee: "Free application via RWTH scholarship portal",
        tuition: "Tuition is completely free at RWTH Aachen.",
        requirements: {
          gpa: "Top academic marks (top 10% of cohort, German grade equivalent 1.5 or better).",
          ielts: "English or German proficiency conforming to program enrollment.",
          gre: "Not required.",
          papers: "Demonstrated social engagement, leadership, and scientific promise.",
          references: "Curriculum vitae and academic transcript."
        },
        desc: "Prestigious national merit scholarship co-funded by the German Federal Government and industrial partners, supporting high-achieving engineering and science scholars."
      },
      {
        id: 313,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        title: "RWTH Salaried Doctoral Positions (Wissenschaftliche/r Mitarbeiter/in TV-L E13)",
        source: "https://www.rwth-aachen.de/cms/root/die-rwth/arbeiten-an-der-rwth/~dyb/jobboerse/",
        funding: "Fully salaried research contract: TV-L E13 (100%) gross salary of €52,000 to €58,000/year with statutory health insurance, unemployment insurance, and pension",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling departmental chair recruitment for 2027 cohort)",
        fee: "No application fee",
        tuition: "Zero tuition fees; nominal €320/semester public transit contribution.",
        requirements: {
          gpa: "University Master's degree in engineering, computer science, or physics with grade 'gut' (minimum 2.0) or better.",
          ielts: "Fluency in English (IELTS 6.5+); working knowledge of German advantageous.",
          gre: "Not required.",
          papers: "Master's research thesis demonstrating deep methodological proficiency.",
          references: "Two academic recommendation letters and thesis summary."
        },
        desc: "Full-time salaried doctoral research contracts across RWTH's world-leading engineering and informatics institutes, developing cutting-edge technologies in industry-partnered projects."
      },
      {
        id: 314,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "RWTH Master of Science in Robotic Systems Engineering",
        source: "https://www.academy.rwth-aachen.de/en/programs/masters-degrees/msc-robotic-systems-engineering",
        funding: "Industrial sponsorships and DAAD scholarships available for eligible international students",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (International applicant deadline for Winter semester)",
        fee: "Free application via RWTHonline portal",
        tuition: "Full-degree program tuition structure applies for specialized executive engineering degrees.",
        requirements: {
          gpa: "Bachelor's degree in mechanical engineering, electrical engineering, or mechatronics with strong mathematics background.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "General GRE recommended for applicants outside the European Union.",
          papers: "Demonstrated coursework in control theory, kinematics, and programming.",
          references: "Two academic letters of recommendation."
        },
        desc: "Cutting-edge international master's degree focusing on autonomous robotic manipulators, mobile robotics, artificial intelligence for cyber-physical systems, and human-robot interaction."
      },
      {
        id: 315,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "RWTH Master of Science in Computer Science (Informatik)",
        source: "https://www.rwth-aachen.de/cms/root/studium/vor-dem-studium/studiengaenge/liste-der-aktuellen-studiengaenge/detail/~bjvt/informatik-m-sc-/",
        funding: "Tuition-free program; eligible for DAAD and student research assistantships (€1,200/mo)",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Winter semester intake for non-EU applicants)",
        fee: "Free application",
        tuition: "€0 tuition; semester fee of approx. €320 covers state-wide transit.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science equivalent to RWTH curriculum with high mathematics and theoretical CS components.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "GRE revised General Test required for applicants with degrees outside the Bologna area.",
          papers: "Bachelor thesis or substantial software project documentation.",
          references: "Curriculum vitae and official transcripts."
        },
        desc: "Highly flexible, research-intensive master's program taught in English, offering specializations in software verification, machine learning, computer graphics, and distributed systems."
      },
      {
        id: 316,
        subject: "computer-science",
        subjects: ["computer-science", "physics"],
        type: "Research",
        title: "Jülich Aachen Research Alliance (JARA) Advanced Research Placements",
        source: "https://www.jara.org/",
        funding: "Funded research appointment: Competitive stipend or TV-L E13 contract with access to Jülich supercomputing facilities",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Spring research fellowship applications)",
        fee: "Free application",
        tuition: "Tuition-free academic research collaboration.",
        requirements: {
          gpa: "Outstanding degree in computer science, physics, or neuroscience with high quantitative marks.",
          ielts: "English language proficiency (IELTS 6.5+ or TOEFL 90+).",
          gre: "Not required.",
          papers: "Prior experience with parallel computing, quantum simulation, or computational neuroscience.",
          references: "Two academic letters confirming computational aptitude."
        },
        desc: "Joint research initiative between RWTH Aachen and Forschungszentrum Jülich, enabling graduate scholars to utilize Europe's fastest supercomputers for quantum and brain simulation."
      },
      {
        id: 317,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics"],
        type: "Internship",
        title: "RWTH Undergraduate Research Opportunities Programme (UROP International)",
        source: "https://www.rwth-aachen.de/go/id/bngb/",
        funding: "Funded summer internship: €2,000 living bursary plus comprehensive German language and cultural immersion program",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual international summer placement application deadline)",
        fee: "Free application via UROP portal",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Enrolled in good standing at a recognized university with cumulative GPA equivalent to 3.2/4.0+.",
          ielts: "Fluent English language skills.",
          gre: "Not required.",
          papers: "Statement of research motivation and CV.",
          references: "Letter of recommendation from home university professor."
        },
        desc: "Ten-week structured summer research internship program in RWTH Aachen laboratories, providing international undergraduate scholars with direct research project mentorship."
      },
      {
        id: 318,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "RWTH Student & Graduate Assistantships (HiWi Positions)",
        source: "https://www.rwth-aachen.de/cms/root/studium/im-studium/arbeitsmarkt-praktika/~dxc/studentische-hilfskraefte-hiwis/",
        funding: "Contractual salary: €13.25 to €17.50 per hour depending on academic degree level",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Semester hiring for tutorial exercises and lab demonstrators)",
        fee: "Free application via institute job boards",
        tuition: "Complements tuition-free studies with taxable student wages.",
        requirements: {
          gpa: "Enrolled student at RWTH Aachen with excellent course marks in the target subject.",
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
        id: 153,
        subject: "computer-science",
        name: "Prof. Dr. Bastian Leibe",
        title: "Professor of Computer Science, Head of Computer Vision Group",
        university: "RWTH Aachen University",
        country: "Germany",
        topics: ["Computer Vision", "Autonomous Driving", "Multi-Object Tracking", "Deep Learning"],
        source: "https://www.vision.rwth-aachen.de/person/1/",
        summary: "Leading European authority on visual object categorization, pedestrian tracking, semantic segmentation, and deep learning architectures for autonomous vehicle perception.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 154,
        subject: "computer-science",
        name: "Prof. Dr. Joost-Pieter Katoen",
        title: "Professor of Computer Science, Head of Software Modeling and Verification Group",
        university: "RWTH Aachen University",
        country: "Germany",
        topics: ["Model Checking", "Formal Verification", "Probabilistic Programming", "Concurrency"],
        source: "https://moves.rwth-aachen.de/people/katoen/",
        summary: "ACM Fellow and member of Academia Europaea, world pioneer in probabilistic model checking, automated software verification, and formal semantics of programming languages.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 155,
        subject: "engineering",
        name: "Prof. Dr. Dirk Uwe Sauer",
        title: "Chair for Electrochemical Energy Conversion and Storage Systems",
        university: "RWTH Aachen University",
        country: "Germany",
        topics: ["Battery Storage", "Electromobility", "Lithium-Ion Degradation", "Renewable Grid Integration"],
        source: "https://www.isea.rwth-aachen.de/institut/team/detailseite/?p=sauer-dirk-uwe",
        summary: "Global authority on battery storage systems, electro-chemical diagnostics, lifetime prediction of lithium-ion cells, and electrical powertrain engineering.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 4. ITALY: University of Milan (Row 522)
  {
    institution: "University of Milan",
    shortName: "UniMi",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Milan, Lombardy, Italy",
    website: "https://www.unimi.it/it",
    sourceRow: 522,
    slug: "university-of-milan",
    heroEyebrow: "Italy · Lombardy · LERU Member & Biomedical Research Flagship · Reviewed 14 October 2026",
    headline: "University of Milan (Milan, Italy)",
    description: "University of Milan guide: Doctoral Fellowships (€16,243/yr net), MSc in Bioinformatics & Data Science, IFOM cancer research placements, and faculty profiles.",
    overview: "Founded in 1924 in the heart of Milan, the University of Milan (Università degli Studi di Milano, known as La Statale) is one of Italy's premier public research universities and the sole Italian member of the prestigious League of European Research Universities (LERU). La Statale is internationally celebrated for biomedical research, cancer genomics (partnered with IFOM and IEO), pharmaceutical sciences, and computational bioinformatics. Explore low-fee master's degrees, funded doctoral fellowships, and world-renowned faculty profiles.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 3 years / 180 ECTS) in relevant subject with minimum grade equivalent to 70%+ in Italian university grading.",
      phd: "Master's degree (Laurea Specialistica/Magistrale or international equivalent), competitive admission examination/interview, and submission of a scientific research proposal.",
      language: "Demonstrated English proficiency for English-taught degrees: Academic IELTS 6.0/6.5 overall or TOEFL iBT 80+ (or CEFR B2/C1 certificate).",
      proposal: "Comprehensive 3 to 5-page research project proposal submitted with the doctoral application.",
      appFee: "€30 to €50 application fee; tuition fees are calculated progressively based on family ISEE (typically €156 to €2,800/yr, fully waived for scholarship holders).",
      documents: "Complete official transcripts, degree certificates with Declaration of Value (Dichiarazione di Valore) or CIMEA comparability certificate, CV, and motivation letter."
    },
    tuitionText: "Tuition is calculated progressively according to family financial standing (ISEE), with regional DSU grants providing complete tuition waivers and free student housing. For doctoral researchers, ministerial fellowships (Borse di Dottorato) provide a tax-exempt stipend of €16,243 net/year, plus a 50% monthly stipend supplement for research conducted abroad and an annual 10% research budget.",
    opportunities: [
      {
        id: 319,
        subject: "biology",
        subjects: ["biology", "chemistry", "computer-science"],
        type: "Scholarship",
        title: "University of Milan Excellence Scholarships & Regional DSU Grants",
        source: "https://www.unimi.it/en/study/financial-support/scholarships",
        funding: "Fully funded: Full tuition waiver plus annual cash grant up to €7,000/year, free student canteen meals, and subsidized student residence accommodation",
        status: "open-scholarship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Annual international scholarship competition deadline for master's programs)",
        fee: "€30 application evaluation fee",
        tuition: "Full tuition completely waived for scholarship awardees.",
        requirements: {
          gpa: "High academic distinction in undergraduate degree (equivalent to top 10% or GPA 3.5+).",
          ielts: "Academic IELTS 6.5 overall or CEFR B2/C1 English certification.",
          gre: "Not required.",
          papers: "Curriculum vitae and academic statement of objectives.",
          references: "Two letters of academic recommendation."
        },
        desc: "Merit and need-based international scholarship scheme providing comprehensive living allowances, free accommodation, and zero tuition fees for top-tier graduate students."
      },
      {
        id: 320,
        subject: "biology",
        subjects: ["biology", "chemistry", "computer-science"],
        type: "PhD",
        title: "Statale Doctoral Fellowships (Borse di Dottorato) in Molecular Medicine & Life Sciences",
        source: "https://www.unimi.it/en/education/postgraduate-programmes/doctoral-programmes-phd",
        funding: "Fully funded 3-year fellowship: €16,243 net/year (tax-free) plus 50% mobility supplement for international research stays and €1,624 annual research budget",
        status: "open-program",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Annual doctoral admission call deadline for 40th cycle)",
        fee: "€50 competitive examination fee",
        tuition: "100% tuition-free for all doctoral fellowship recipients.",
        requirements: {
          gpa: "Second-cycle Master's degree (Laurea Magistrale) with high marks in biology, biotechnology, or medicine.",
          ielts: "Demonstrated English proficiency (CEFR B2 or higher).",
          gre: "Not required.",
          papers: "Master's thesis summary and scientific research proposal.",
          references: "Two academic referee letters submitted directly via the application system."
        },
        desc: "Premier 3-year doctoral research program in molecular oncology, translational medicine, and genomics, collaborating with the European Institute of Oncology (IEO)."
      },
      {
        id: 321,
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        type: "Master's",
        title: "University of Milan Master of Science in Bioinformatics for Computational Genomics",
        source: "https://bioinformatics.cdl.unimi.it/en",
        funding: "Eligible for Excellence Scholarships and DSU regional grants (€7,000/yr + tuition waiver)",
        status: "open-program",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Non-EU applicant visa and admission deadline)",
        fee: "€30 application fee",
        tuition: "Base tuition €156 to €2,800/year depending on family ISEE bracket.",
        requirements: {
          gpa: "Bachelor's degree in computer science, mathematics, biotechnology, or biology with solid quantitative marks.",
          ielts: "Academic IELTS 6.5 overall or CEFR B2 certificate.",
          gre: "Not required.",
          papers: "Demonstrated interest in computational biology and programming.",
          references: "Transcripts, CV, and motivation letter."
        },
        desc: "Cutting-edge joint master's program taught in English with Politecnico di Milano, combining machine learning, next-generation sequencing analytics, and computational genomics."
      },
      {
        id: 322,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Master's",
        title: "University of Milan Master of Science in Data Science and Economics (DSE)",
        source: "https://dse.cdl.unimi.it/en",
        funding: "DSU financial aid, housing grants, and university merit waivers available",
        status: "open-program",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (International applicant deadline)",
        fee: "€30 application fee",
        tuition: "Progressive fee based on ISEE (maximum €2,800/yr).",
        requirements: {
          gpa: "Bachelor's degree in economics, computer science, mathematics, or statistics.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 80+.",
          gre: "Optional.",
          papers: "Curriculum vitae and academic transcripts.",
          references: "Academic reference letters."
        },
        desc: "Interdisciplinary master's degree taught in English, focusing on algorithmic data science, machine learning models, predictive economic analytics, and business intelligence."
      },
      {
        id: 323,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        title: "FIRC Institute of Molecular Oncology (IFOM) & IEO Research Placements",
        source: "https://www.unimi.it/en/research",
        funding: "Fully funded research appointment: Competitive stipend with access to advanced genomic and imaging platforms",
        status: "open-program",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Formal laboratory intake for graduate researchers)",
        fee: "Free application",
        tuition: "Tuition covered by hosting institute research fellowship.",
        requirements: {
          gpa: "Master's degree in molecular biology, biochemistry, or genetics with high academic standing.",
          ielts: "Fluency in English.",
          gre: "Not required.",
          papers: "Practical laboratory experience in cell culture, molecular cloning, or proteomics.",
          references: "Two academic referee letters."
        },
        desc: "World-class research placements at Italy's premier molecular oncology campus, conducting frontier investigations into DNA damage mechanisms, tumor metastasis, and immunotherapy."
      },
      {
        id: 324,
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Internship",
        title: "Statale Erasmus+ Traineeship & International Laboratory Research Placements",
        source: "https://www.unimi.it/en/international/study-abroad/traineeships-abroad",
        funding: "Funded mobility stipend: €500 to €800/month European mobility grant plus destination university support",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Erasmus+ traineeship selection call)",
        fee: "No application fee for registered students",
        tuition: "Maintains regular enrollment status with fee waiver.",
        requirements: {
          gpa: "Enrolled in good standing in a Master's or PhD program at University of Milan.",
          ielts: "Language proficiency corresponding to destination institution.",
          gre: "Not required.",
          papers: "Learning agreement for traineeships signed by supervising professor.",
          references: "Departmental academic approval."
        },
        desc: "Structured funded research traineeships enabling graduate scholars to conduct experimental thesis investigations in leading academic and industrial laboratories across Europe."
      },
      {
        id: 325,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Fellowship",
        title: "Statale 150-Hour Student Academic Collaboration Fellowships (Collaborazioni a Tempo Parziale)",
        source: "https://www.unimi.it/en/study/financial-support/student-work-150-hours",
        funding: "Tax-free grant: €1,200 to €1,600 for 150 hours of academic assistance during the academic year",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual university ranking publication and contract allocation)",
        fee: "Free application via online student portal",
        tuition: "Direct student wage supplement.",
        requirements: {
          gpa: "Enrolled student at University of Milan who has passed at least 40% of planned academic credits.",
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
        id: 156,
        subject: "biology",
        name: "Prof. Dr. Pier Paolo Di Fiore",
        title: "Full Professor of General Pathology, Director of Molecular Medicine Program at IFOM-IEO",
        university: "University of Milan",
        country: "Italy",
        topics: ["Endocytosis", "Cancer Biology", "Tumorigenesis", "Molecular Medicine"],
        source: "https://www.unimi.it/en/ugov/person/pierpaolo-difiore",
        summary: "EMBO Member and leading international cancer biologist. Pioneer in understanding endocytic mechanisms in receptor signaling regulation and cancer stem cell dynamics.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 157,
        subject: "computer-science",
        name: "Prof. Dr. Marco Frasca",
        title: "Associate Professor of Computer Science",
        university: "University of Milan",
        country: "Italy",
        topics: ["Bioinformatics", "Graph Neural Networks", "Machine Learning", "Computational Biology"],
        source: "https://www.unimi.it/en/ugov/person/marco-frasca",
        summary: "Prominent researcher in artificial intelligence applied to biomedical systems, gene function prediction, graph embedding algorithms, and clinical survival prediction.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 158,
        subject: "chemistry",
        name: "Prof. Dr. Luisa Torsi",
        title: "Distinguished Professor, Fellow of Accademia dei Lincei",
        university: "University of Milan",
        country: "Italy",
        topics: ["Organic Bioelectronics", "Single-Molecule Biosensors", "Point-of-Care Diagnostics", "Nanotechnology"],
        source: "https://www.unimi.it/en/ugov/person/luisa-torsi",
        summary: "World-renowned pioneer in organic electronic transistors capable of single-molecule biomarker detection for early diagnosis of progressive and viral diseases.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 5. USA: Massachusetts Institute of Technology (Row 801)
  {
    institution: "Massachusetts Institute of Technology",
    shortName: "MIT",
    countryId: "usa",
    countryLabel: "United States",
    location: "Cambridge, Massachusetts, USA",
    website: "https://web.mit.edu",
    sourceRow: 801,
    slug: "massachusetts-institute-of-technology",
    heroEyebrow: "United States · Massachusetts · World's Leading STEM Powerhouse · Reviewed 14 October 2026",
    headline: "Massachusetts Institute of Technology (Cambridge, Massachusetts)",
    description: "MIT guide: Presidential Fellowships ($50,000+ stipend + full tuition), PhD in EECS, CSAIL AI placements, UROP internships, and Nobel laureate faculty.",
    overview: "Founded in 1861 in Cambridge, Massachusetts, the Massachusetts Institute of Technology (MIT) is globally recognized as the preeminent technological research institution. With 101 Nobel laureates, 26 Turing Award winners, and 8 Fields Medalists, MIT faculty and alumni have invented fundamental pillars of modern science including radar, digital computing, RSA encryption, the World Wide Web Consortium (W3C), and mRNA vaccine delivery. Explore verified graduate degrees, guaranteed full doctoral funding packages, and world-renowned faculty profiles.",
    admissions: {
      masters: "Accredited four-year U.S. Bachelor's degree or international equivalent with exceptional academic marks (typically 3.8+ / 4.0 GPA) in STEM disciplines.",
      phd: "Outstanding undergraduate or Master's degree in relevant discipline with demonstrable scientific research ability, significant publications, and compelling letters of recommendation.",
      language: "Demonstrated English proficiency: Academic IELTS 7.0 overall or TOEFL iBT 100 overall (minimum 25 in each subscore); requirements vary by department.",
      proposal: "Comprehensive 2-page Statement of Objectives detailing scientific accomplishments, research interests, and alignment with target MIT laboratory groups.",
      appFee: "USD $75 to $105 graduate application fee submitted directly via departmental admissions portals (waivers widely available).",
      documents: "Complete official university transcripts, 3 academic letters of recommendation, resume / CV, and academic writing sample or research papers."
    },
    tuitionText: "Tuition for doctoral candidates is 100% fully covered for the regular duration of the PhD. All admitted PhD students in good standing receive guaranteed financial support packages comprising full tuition waivers, individual health insurance, and monthly living stipends (USD $45,000 to $52,000 per year) via research assistantships (RA), teaching assistantships (TA), or fellowships.",
    opportunities: [
      {
        id: 326,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "MIT Presidential Fellowships & Departmental Fellowships",
        source: "https://odge.mit.edu/finances/fellowships/",
        funding: "Fully funded: 100% full tuition coverage plus annual living stipend of USD $48,000/year and comprehensive MIT student health insurance",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Awarded automatically upon departmental graduate admission nomination)",
        fee: "Standard MIT graduate application fee ($75-$105)",
        tuition: "Full tuition completely covered for duration of award.",
        requirements: {
          gpa: "Graduation with highest academic distinction (typically top 2-5% of class, 3.85+ GPA).",
          ielts: "Academic IELTS 7.0+ or TOEFL iBT 100+.",
          gre: "Optional or required depending on department.",
          papers: "Exceptional scientific creativity, prior publications, or innovative technological artifacts.",
          references: "Three outstanding recommendation letters from research supervisors."
        },
        desc: "MIT's most prestigious competitive graduate award, recruited across all engineering and science departments to support the world's most promising first-year doctoral researchers."
      },
      {
        id: 327,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "MIT PhD in Electrical Engineering and Computer Science (EECS)",
        source: "https://www.eecs.mit.edu/academics/graduate-programs/",
        funding: "Fully funded: Full tuition coverage plus monthly research assistantship (RA) stipend exceeding USD $48,000/year and health insurance",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual Fall admission deadline)",
        fee: "USD $75 application fee",
        tuition: "100% covered by research assistantship or fellowship.",
        requirements: {
          gpa: "Bachelor's or Master's degree in computer science, electrical engineering, or mathematics with near-perfect GPA.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "General GRE optional.",
          papers: "Demonstrated original research track record in computer science or engineering.",
          references: "Three letters of recommendation from researchers familiar with candidate's work."
        },
        desc: "The world's highest-ranked EECS doctoral program, offering unmatched research opportunities in artificial intelligence, robotics, quantum computing, computer systems, and microelectronics."
      },
      {
        id: 328,
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        type: "Master's",
        title: "MIT Master of Science in Technology and Policy (TPP)",
        source: "https://tpp.mit.edu/",
        funding: "Full research assistantships (RA) providing tuition coverage and monthly stipends available for admitted students",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual admission deadline)",
        fee: "USD $75 application fee",
        tuition: "Fully subsidized for students holding research assistant appointments.",
        requirements: {
          gpa: "Bachelor of Science in engineering or quantitative sciences with strong academic marks.",
          ielts: "Academic IELTS 7.5 overall or TOEFL iBT 100.",
          gre: "General GRE scores accepted.",
          papers: "Statement of purpose demonstrating passion for technology-driven public policy challenges.",
          references: "Three academic or professional recommendation letters."
        },
        desc: "Rigorous two-year interdisciplinary Master of Science program bridging cutting-edge engineering innovation with international energy policy, cybersecurity governance, and economic regulation."
      },
      {
        id: 329,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master's",
        title: "MIT Master of Science in Mechanical Engineering",
        source: "https://meche.mit.edu/academics/graduate/degrees/master-science-mechanical-engineering",
        funding: "Funded via Research Assistantships (RA) with full tuition coverage and USD $45,000/year living stipend",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall admission cycle deadline)",
        fee: "USD $75 application fee",
        tuition: "Full tuition coverage through sponsored research assistantships.",
        requirements: {
          gpa: "Bachelor of Science in mechanical engineering or related physical sciences (GPA 3.8+ / 4.0).",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "General GRE optional.",
          papers: "Engineering design portfolio or undergraduate thesis research.",
          references: "Three academic recommendation letters."
        },
        desc: "Pioneering thesis-based graduate degree providing foundational mastery and laboratory research in biomechanics, robotics, micro-nano manufacturing, and clean thermal fluid systems."
      },
      {
        id: 330,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Research",
        title: "MIT Computer Science and Artificial Intelligence Laboratory (CSAIL) Placements",
        source: "https://www.csail.mit.edu/",
        funding: "Fully funded research appointments: Full tuition support plus annual research assistantship stipends",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (EECS/CSAIL graduate student intake deadline)",
        fee: "Included in graduate application",
        tuition: "Fully covered under research assistant appointments.",
        requirements: {
          gpa: "First-tier academic record in computer science, robotics, or mathematics.",
          ielts: "TOEFL iBT 100 or IELTS 7.0.",
          gre: "Optional.",
          papers: "Demonstrated algorithmic innovation, open-source code contributions, or machine learning publications.",
          references: "Three confidential research letters."
        },
        desc: "The largest research laboratory at MIT and the historical birthplace of the internet, personal computing, and robotics, pursuing breakthroughs in foundation models, computer vision, and theory."
      },
      {
        id: 331,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics"],
        type: "Internship",
        title: "MIT Undergraduate Research Opportunities Program (UROP)",
        source: "https://urop.mit.edu/",
        funding: "Direct hourly pay (USD $16.00 to $18.50/hour) or academic credit for supervised laboratory research",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Spring semester UROP direct funding application deadline)",
        fee: "Free application for enrolled MIT students",
        tuition: "Standard term registration fees apply.",
        requirements: {
          gpa: "Undergraduate student in good academic standing at MIT.",
          ielts: "Enrolled student status.",
          gre: "Not required.",
          papers: "Project proposal agreed upon with sponsoring faculty supervisor.",
          references: "Faculty research supervisor approval."
        },
        desc: "Pioneering undergraduate research program founded in 1969, engaging over 90% of MIT undergraduates in faculty-led scientific investigations and patent-producing laboratory work."
      },
      {
        id: 332,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "MIT Graduate Research & Teaching Assistantships (GRA / GTA)",
        source: "https://gradeducation.mit.edu/finances/assistantships/",
        funding: "Contractual salary: Full tuition waiver plus monthly stipend of approximately USD $4,000/month",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Departmental teaching and research allocations for Fall term)",
        fee: "Free internal appointment",
        tuition: "Provides 100% tuition coverage for duration of appointment.",
        requirements: {
          gpa: "Enrolled in good standing in an MIT Master's or doctoral program.",
          ielts: "Spoken English assessment for teaching assistants.",
          gre: "Not required.",
          papers: "Subject mastery in relevant lecture or laboratory course.",
          references: "Faculty course head endorsement."
        },
        desc: "Academic research and teaching appointments providing graduate scholars with full tuition remissions, medical insurance, and competitive salaries while instructing MIT undergraduate courses."
      }
    ],
    researchers: [
      {
        id: 159,
        subject: "computer-science",
        name: "Prof. Dr. Regina Barzilay",
        title: "School of Engineering Distinguished Professor of AI and Health, CSAIL",
        university: "Massachusetts Institute of Technology",
        country: "United States",
        topics: ["Machine Learning", "Drug Discovery", "Computational Oncology", "Natural Language Processing"],
        source: "https://www.csail.mit.edu/person/regina-barzilay",
        summary: "MacArthur Fellow and member of the National Academy of Engineering. World pioneer in deep learning models for molecular property prediction, antibiotic discovery, and early breast cancer detection.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 160,
        subject: "computer-science",
        name: "Prof. Dr. Daniela Rus",
        title: "Director of CSAIL, Andrew and Erna Viterbi Professor of EECS",
        university: "Massachusetts Institute of Technology",
        country: "United States",
        topics: ["Robotics", "Autonomous Systems", "Soft Robotics", "Artificial Intelligence"],
        source: "https://www.csail.mit.edu/person/daniela-rus",
        summary: "Member of the National Academy of Engineering and Director of CSAIL. Pioneer in networked robotics, modular self-reconfiguring machines, autonomous vehicles, and liquid neural networks.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 161,
        subject: "physics",
        name: "Prof. Dr. Wolfgang Ketterle",
        title: "John D. MacArthur Professor of Physics, Nobel Laureate in Physics (2001)",
        university: "Massachusetts Institute of Technology",
        country: "United States",
        topics: ["Bose-Einstein Condensation", "Ultracold Atoms", "Quantum Degenerate Gases", "Atomic Physics"],
        source: "https://physics.mit.edu/faculty/wolfgang-ketterle/",
        summary: "Nobel Laureate in Physics for the realization of Bose-Einstein condensation in dilute gases of alkali atoms and pioneering studies of the fundamental properties of condensates.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 6. UNITED KINGDOM: The University of Edinburgh (Row 1297)
  {
    institution: "The University of Edinburgh",
    shortName: "Edinburgh",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Edinburgh, Scotland, United Kingdom",
    website: "https://www.ed.ac.uk",
    sourceRow: 1297,
    slug: "the-university-of-edinburgh",
    heroEyebrow: "United Kingdom · Scotland · Ancient Research Titan & AI Powerhouse · Reviewed 14 October 2026",
    headline: "The University of Edinburgh (Edinburgh, Scotland)",
    description: "The University of Edinburgh guide: Edinburgh Doctoral College Scholarships (£19,237/yr + full fees), MSc in Artificial Intelligence, Bayes Centre placements, and faculty profiles.",
    overview: "Founded in 1583 in Edinburgh, Scotland, The University of Edinburgh is one of the ancient universities of the United Kingdom and ranked consistently among the world's top 25 to 30 institutions. The engine of the Scottish Enlightenment (alumni include David Hume, Adam Smith, and Charles Darwin), Edinburgh is globally celebrated for artificial intelligence (the School of Informatics is Europe's largest academic computing research centre), medicine, and theoretical physics. Explore verified graduate degrees, funded doctoral studentships, and world-renowned faculty profiles.",
    admissions: {
      masters: "UK 2:1 honours degree or international equivalent (typically GPA 3.3/4.0 or 75-80%+) in computer science, mathematics, or relevant quantitative discipline.",
      phd: "UK 2:1 honours degree plus Master's with merit or distinction (or international equivalent), with demonstrable independent research competence.",
      language: "Demonstrated English proficiency: Academic IELTS 7.0 overall (minimum 6.0 or 6.5 in all components) or TOEFL iBT 100 overall (minimum 20 in each component).",
      proposal: "Comprehensive 2-3 page research project proposal detailing research questions, proposed methodology, theoretical context, and faculty advisor alignment.",
      appFee: "£60 application fee for select competitive taught master's degrees; PhD applications are free of charge.",
      documents: "Complete official university transcripts, 2 confidential academic reference letters, personal statement of research interests, and curriculum vitae."
    },
    tuitionText: "Tuition fees for international postgraduate research students are fully covered under the Edinburgh Doctoral College Scholarships (Principal's Career Development Scholarships). Recipients receive 100% full tuition fee coverage at international rates plus annual tax-free living stipends indexed to the UKRI rate (£19,237 to £20,500 per year for 3.5 to 4 years).",
    opportunities: [
      {
        id: 333,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Edinburgh Doctoral College Scholarships (Principal's Career Development Scholarships)",
        source: "https://www.ed.ac.uk/student-funding/postgraduate/uk-eu/university-scholarships/edcs",
        funding: "Fully funded: Full international tuition fees covered plus annual tax-free living stipend at UKRI rate (£19,237+/year) for up to four years of doctoral study",
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
          references: "Two academic recommendation letters submitted via the EUCLID portal."
        },
        desc: "The University of Edinburgh's premier doctoral funding scheme, supporting exceptional international researchers across all disciplines with full fees and living stipends."
      },
      {
        id: 334,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "PhD",
        title: "Edinburgh PhD in Informatics (Artificial Intelligence & Data Science)",
        source: "https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2024&id=492",
        funding: "Fully funded studentships: Full tuition fees plus UKRI stipend (£19,237/year tax-free) and £1,000/year conference travel allowance",
        status: "open-program",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027 (School of Informatics primary funding allocation deadline)",
        fee: "No application fee for PhD research applications",
        tuition: "Full international tuition fee covered under studentship.",
        requirements: {
          gpa: "First-class undergraduate degree or Master's with Distinction in computer science, mathematics, or physics.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in each component).",
          gre: "Not required.",
          papers: "Clear research proposal aligning with Informatics research institutes (ANC, IPAB, CISA, ICSA).",
          references: "Two academic referee reports."
        },
        desc: "Doctoral research inside Europe's largest academic computing centre, offering world-class research in probabilistic machine learning, robotics, natural language processing, and quantum computing."
      },
      {
        id: 335,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "Edinburgh MSc in Computer Science",
        source: "https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2024&id=107",
        funding: "Informatics Master's Scholarships and Edinburgh Global Master's Scholarships available (£5,000 to £10,000 grants)",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (International applicant deadline for September entry)",
        fee: "£60 application fee",
        tuition: "£38,500 for international students for the 1-year intensive program.",
        requirements: {
          gpa: "UK 2:1 honours degree or international equivalent in computer science or related discipline with strong programming skills.",
          ielts: "Academic IELTS 7.0 overall (6.5 in all components) or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Transcript demonstrating strong algorithms, mathematics, and software design marks.",
          references: "One academic reference letter."
        },
        desc: "Intensive 1-year Master of Science degree covering advanced algorithms, computer systems architecture, formal verification, and distributed computation."
      },
      {
        id: 336,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "Edinburgh MSc in Artificial Intelligence",
        source: "https://www.ed.ac.uk/studying/postgraduate/degrees/index.php?r=site/view&edition=2024&id=102",
        funding: "Eligible for DeepMind Scholarships and British Council STEM scholarships (£10,000 to full funding)",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Application deadline for international students)",
        fee: "£60 application fee",
        tuition: "£40,900 for international students for the 1-year program.",
        requirements: {
          gpa: "UK first-class or strong 2:1 honours degree in computer science, mathematics, engineering, or cognitive science.",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in all subscores.",
          gre: "Not required.",
          papers: "Demonstrated mathematical foundations in linear algebra, calculus, and Python programming.",
          references: "One confidential academic reference."
        },
        desc: "One of the world's longest-running and most celebrated master's degrees in AI, providing rigorous training in deep learning, natural language processing, automated planning, and computer vision."
      },
      {
        id: 337,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Research",
        title: "Bayes Centre Data Science & Artificial Intelligence Placements",
        source: "https://www.ed.ac.uk/bayes",
        funding: "Fully funded research appointments: Project stipend plus access to Archer2 supercomputing resources",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Collaborative research cohort matching)",
        fee: "Standard department application fee",
        tuition: "Tuition offset provided through partner studentships.",
        requirements: {
          gpa: "Master's degree in informatics, mathematics, or computational physics with high honors.",
          ielts: "IELTS 7.0 overall.",
          gre: "Not required.",
          papers: "Demonstrated computational modeling skills and data analytics experience.",
          references: "Two academic referee letters."
        },
        desc: "The University of Edinburgh's flagship innovation hub for data science and AI, collaborating across robotics, space satellites, medical informatics, and financial technology."
      },
      {
        id: 338,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Internship",
        title: "Edinburgh School of Informatics Summer Research Internships",
        source: "https://www.ed.ac.uk/informatics/postgraduate/research-degrees/vacation-internships",
        funding: "Salaried internship: £420 per week living stipend for 8 to 10 weeks of supervised laboratory research",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual summer internship application deadline)",
        fee: "Free application",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Enrolled in 2nd or 3rd year of undergraduate degree in computer science or mathematics.",
          ielts: "Good command of spoken and written English.",
          gre: "Not required.",
          papers: "Academic transcript and statement of interest in informatics research.",
          references: "Letter of recommendation from academic tutor."
        },
        desc: "Intensive 8 to 10-week summer research placements inside Informatics research labs, working directly under faculty guidance on cutting-edge machine learning and robotics projects."
      },
      {
        id: 339,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "Edinburgh Postgraduate Teaching Assistantships & Demonstratorships (T&D)",
        source: "https://www.ed.ac.uk/human-resources/jobs",
        funding: "Contractual salary: £18.50 to £24.00 per hour for tutoring, laboratory demonstration, and marking",
        status: "open-program",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Semester 1 tutoring allocations round)",
        fee: "Free internal application via Informatics T&D portal",
        tuition: "Provides supplemental income during doctoral research.",
        requirements: {
          gpa: "Enrolled PhD student in the School of Informatics or School of Engineering.",
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
        id: 162,
        subject: "computer-science",
        name: "Prof. Dr. Mirella Lapata",
        title: "Chair in Natural Language Processing, Fellow of the Royal Society of Edinburgh (FRSE)",
        university: "The University of Edinburgh",
        country: "United Kingdom",
        topics: ["Natural Language Processing", "Semantic Parsing", "Neural Machine Translation", "Machine Learning"],
        source: "https://homepages.inf.ed.ac.uk/mlap/",
        summary: "World-renowned computational linguist and BCS Lovelace Medalist. Pioneer in probabilistic semantic parsing, text summarization, multi-modal learning, and neural translation models.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 163,
        subject: "computer-science",
        name: "Prof. Dr. Sethu Vijayakumar FRSE",
        title: "Professor of Robotics, Director of Edinburgh Centre for Robotics",
        university: "The University of Edinburgh",
        country: "United Kingdom",
        topics: ["Humanoid Robotics", "Machine Learning", "Autonomous Manipulation", "Biomechatronics"],
        source: "https://www.ed.ac.uk/profile/sethu-vijayakumar",
        summary: "Programme Co-Director for AI at The Alan Turing Institute and NASA Valkyrie humanoid robotics lead, pioneering scalable machine learning algorithms for high-dimensional robotic control.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 164,
        subject: "computer-science",
        name: "Prof. Dr. Jane Hillston",
        title: "Head of School of Informatics, Fellow of the Royal Society of Edinburgh (FRSE)",
        university: "The University of Edinburgh",
        country: "United Kingdom",
        topics: ["Formal Methods", "Stochastic Process Algebras", "Performance Modelling", "Systems Biology"],
        source: "https://www.ed.ac.uk/profile/jane-hillston",
        summary: "BCS Lovelace Medalist and pioneer of the PEPA (Performance Evaluation Process Algebra) formal language for quantitative performance modeling and verification of concurrent computer systems.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 7. JAPAN: Osaka University (Row 1732)
  {
    institution: "Osaka University",
    shortName: "Osaka Univ",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Suita and Toyonaka, Osaka, Japan",
    website: "https://www.osaka-u.ac.jp/ja",
    sourceRow: 1732,
    slug: "osaka-university",
    heroEyebrow: "Japan · Osaka · Historic Imperial University & World Robotics Pioneer · Reviewed 14 October 2026",
    headline: "Osaka University (Osaka, Japan)",
    description: "Osaka University guide: MEXT University Recommendation Fellowships (¥147,000/mo + full tuition waiver), PhD in Information Science, IFReC immunology, and faculty profiles.",
    overview: "Established in 1931 as one of Japan's designated Imperial Universities, Osaka University (Handai) is consistently ranked among Japan's top 3 research universities and the world's top 80 institutions. Handai is internationally celebrated for pioneer breakthroughs in immunology (home to the World Premier International Immunology Frontier Research Center - IFReC), humanoid robotics (Prof. Hiroshi Ishiguro's laboratory), quantum materials, and mechanical engineering. Explore verified graduate degrees, MEXT scholarship allocations, and world-renowned faculty profiles.",
    admissions: {
      masters: "16 years of formal education / recognized Bachelor's degree equivalent; passing of the Osaka University graduate entrance examination and interview.",
      phd: "Master's degree or professional degree equivalent; formal preliminary acceptance by an Osaka University prospective laboratory professor (Kyoju) and research plan approval.",
      language: "Demonstrated English proficiency for English-taught graduate programs: TOEFL iBT 80+ or Academic IELTS 6.5+ (Japanese programs require JLPT N1 or N2).",
      proposal: "Comprehensive 3-5 page research plan (Kenkyu Keikaku-sho) detailing theoretical framework, experiment design, and lab alignment.",
      appFee: "¥30,000 entrance examination application fee; admission fee of ¥282,000 and annual tuition of ¥535,800 (fully waived for MEXT and top international scholarship scholars).",
      documents: "Complete official university transcripts, graduation certificates, 2 letters of recommendation, health certificate, and research plan."
    },
    tuitionText: "Tuition is fully waived for scholars receiving Japanese Government (MEXT) University Recommendation Scholarships and Osaka University Doctoral Fellowships. Recipients receive 100% full tuition exemption (saving ¥535,800/year plus the ¥282,000 matriculation fee) and monthly tax-free living allowances of ¥147,000 to ¥180,000/month.",
    opportunities: [
      {
        id: 340,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Osaka University MEXT University Recommendation & OU Fellowships",
        source: "https://www.osaka-u.ac.jp/en/international/inbound/scholarship",
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
          references: "Two letters of recommendation addressed to the President of Osaka University."
        },
        desc: "Japan's premier governmental and university scholarship scheme, providing exceptional international scholars with full tuition waivers and generous living stipends for doctoral research."
      },
      {
        id: 341,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Osaka University PhD in Information Science and Technology",
        source: "https://www.ist.osaka-u.ac.jp/english/",
        funding: "Fully funded through MEXT, JSPS Research Fellowships (DC1/DC2), or Osaka University Fellowship (¥180,000/mo)",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (English Course Autumn entry application deadline)",
        fee: "¥30,000 examination fee",
        tuition: "Tuition exemption available based on merit and financial screening.",
        requirements: {
          gpa: "Master's degree in Computer Science, Information Science, or Mathematics with high academic standing.",
          ielts: "TOEFL iBT 80+ or IELTS 6.5+.",
          gre: "General GRE scores recommended for international applicants.",
          papers: "Master's thesis and academic publication record in computer science.",
          references: "Formal acceptance by an Osaka University IST faculty supervisor."
        },
        desc: "Advanced 3-year doctoral research program covering cyber-physical systems, multi-agent systems, deep learning architectures, network security, and quantum information."
      },
      {
        id: 342,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "Osaka University Master of Engineering in Precision Engineering & Robotics",
        source: "https://www.eng.osaka-u.ac.jp/en/",
        funding: "Eligible for Monbukagakusho (MEXT) Honors Scholarships and Handai Foundation awards (¥48,000 to ¥100,000/mo)",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Autumn admission international screening deadline)",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per year (tuition exemption available).",
        requirements: {
          gpa: "Bachelor's degree in mechanical, precision, or electrical engineering with strong mathematical foundations.",
          ielts: "Academic IELTS 6.0+ or TOEFL iBT 79+.",
          gre: "Not required.",
          papers: "Undergraduate graduation thesis or design portfolio.",
          references: "Two academic recommendation letters."
        },
        desc: "Internationally renowned master's program taught in English, providing direct laboratory training in humanoid robotics, nanomachining, laser engineering, and micro-electromechanical systems."
      },
      {
        id: 343,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Master's",
        title: "Osaka University Master of Science in Physics (Special Integrated Science Course - SISC)",
        source: "https://www.sci.osaka-u.ac.jp/en/",
        funding: "Supported by JASSO study grants and Graduate School of Science research assistantships",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (International SISC Autumn admission deadline)",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per year (tuition exemption application available upon matriculation).",
        requirements: {
          gpa: "Bachelor of Science in Physics or Mathematics with first-class marks.",
          ielts: "TOEFL iBT 80+ or Academic IELTS 6.5+.",
          gre: "Physics GRE score strongly recommended.",
          papers: "Demonstrated coursework mastery in quantum mechanics, statistical physics, and electromagnetism.",
          references: "Two academic referee letters."
        },
        desc: "Rigorous 2-year English-medium master's program exploring experimental and theoretical physics, condensed matter, subatomic particle physics at RCNP, and laser fusion."
      },
      {
        id: 344,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        title: "Immunology Frontier Research Center (IFReC) World Premier Placements",
        source: "https://www.ifrec.osaka-u.ac.jp/en/",
        funding: "Fully funded research appointment: ¥200,000 to ¥250,000/month living stipend with state-of-the-art bioimaging laboratory access",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Annual WPI doctoral fellowship application deadline)",
        fee: "Free application",
        tuition: "Tuition fully subsidized under WPI research program.",
        requirements: {
          gpa: "Outstanding academic record in biology, immunology, or medicine.",
          ielts: "High level of English proficiency.",
          gre: "Not required.",
          papers: "Prior experience in flow cytometry, single-cell RNA-sequencing, or cellular imaging.",
          references: "Two academic reference letters from international researchers."
        },
        desc: "World Premier International (WPI) research placements at one of the world's most cited immunology research centres, investigating innate immunity, immune regulation, and cancer immunotherapy."
      },
      {
        id: 345,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics"],
        type: "Internship",
        title: "Osaka University FrontierLab Mini Short-Term Research Exchange",
        source: "https://www.osaka-u.ac.jp/en/international/inbound/exchange_program/frontier",
        funding: "JASSO scholarship eligible: ¥80,000/month living allowance for approved exchange researchers",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Application deadline for Autumn exchange placement)",
        fee: "Tuition and application fees waived under partner university agreements",
        tuition: "¥0 tuition under reciprocal academic exchange.",
        requirements: {
          gpa: "Enrolled in good standing at an Osaka University partner university with GPA 2.3/3.0+.",
          ielts: "TOEFL iBT 80 or IELTS 6.0.",
          gre: "Not required.",
          papers: "Study plan and laboratory research proposal.",
          references: "Nomination by home university international office."
        },
        desc: "Three to twelve-month laboratory placement program allowing international science and engineering students to conduct independent experimental research under Handai professors."
      },
      {
        id: 346,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        title: "Osaka University Teaching & Research Assistantships (TA/RA)",
        source: "https://www.osaka-u.ac.jp/en/academics/ed_support",
        funding: "Contractual hourly wages: ¥1,300 to ¥1,800/hour for registered graduate researchers",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Spring semester laboratory appointment allocations)",
        fee: "Free application",
        tuition: "Provides supplemental income during graduate research.",
        requirements: {
          gpa: "Enrolled in good standing in an Osaka University Master's or doctoral program.",
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
        id: 165,
        subject: "computer-science",
        name: "Prof. Dr. Hiroshi Ishiguro",
        title: "Director of the Intelligent Robotics Laboratory, Distinguished Professor",
        university: "Osaka University",
        country: "Japan",
        topics: ["Humanoid Robotics", "Android Science", "Cognitive Robotics", "Human-Robot Interaction"],
        source: "https://www.irl.sys.es.osaka-u.ac.jp/",
        summary: "World-renowned pioneer in human-like android robots and cognitive social robotics. Creator of the Geminoid tele-operated androids and leading researcher in artificial social presence.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 166,
        subject: "biology",
        name: "Prof. Dr. Shizuo Akira",
        title: "Professor at IFReC, Member of the Japan Academy, Foreign Associate of the NAS",
        university: "Osaka University",
        country: "Japan",
        topics: ["Innate Immunity", "Toll-like Receptors", "Inflammation", "Immunology"],
        source: "https://www.ifrec.osaka-u.ac.jp/en/laboratory/host_defense/",
        summary: "One of the most cited biomedical scientists in modern history. Discovered the recognition mechanisms of Toll-like receptors (TLRs) and pathogen-associated molecular patterns in innate immunity.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 167,
        subject: "computer-science",
        name: "Prof. Dr. Masayuki Murata",
        title: "Professor of Information Science and Technology",
        university: "Osaka University",
        country: "Japan",
        topics: ["Information Networks", "Bio-inspired Computing", "Brain-inspired Networks", "Cloud Systems"],
        source: "https://www.ist.osaka-u.ac.jp/english/researcher/murata_masayuki.html",
        summary: "Leading researcher in self-organizing communication architectures, biological attractor selection for robust internet systems, and autonomic edge-cloud networking.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 8. SWEDEN: Lund University (Row 1579)
  {
    institution: "Lund University",
    shortName: "Lund",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Lund, Scania, Sweden",
    website: "https://www.lu.se",
    sourceRow: 1579,
    slug: "lund-university",
    heroEyebrow: "Sweden · Scania · Scandinavia's Historic Research Flagship · Reviewed 14 October 2026",
    headline: "Lund University (Lund, Sweden)",
    description: "Lund University guide: Salaried PhD positions (SEK 31,500/mo), MAX IV synchrotron & ESS placements, MSc in Wireless Communication, and Nobel laureate faculty.",
    overview: "Founded in 1666 in Lund, Scania, Lund University is one of northern Europe's oldest, largest, and most prestigious universities, consistently ranked among the world's top 80 to 100 institutions. Lund is an international science powerhouse, housing the world-leading MAX IV synchrotron radiation facility and the European Spallation Source (ESS). With discoveries including medical ultrasound, Bluetooth technology, and attosecond physics (Prof. Anne L'Huillier, Nobel Prize in Physics 2023), Lund leads the world in nanotechnology, medicine, and engineering. Explore verified degrees, salaried doctoral positions, and distinguished faculty profiles.",
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
        id: 347,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Lund University Global Scholarship Programme (LUGS)",
        source: "https://www.lunduniversity.lu.se/admissions/bachelors-and-masters-studies/scholarships-and-awards/lund-university-global-scholarship",
        funding: "Tuition waiver: Selective merit scholarships covering 25%, 50%, 75%, or 100% of international tuition fees for Master's studies",
        status: "open-scholarship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Annual scholarship application deadline for admitted students)",
        fee: "SEK 900 national application fee",
        tuition: "Up to 100% tuition coverage for duration of the Master's program.",
        requirements: {
          gpa: "Top-tier academic marks (typically top 10% of class, GPA 3.7+ equivalent) from recognized universities.",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each component) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and strong scholarship motivation statement.",
          references: "Applied as first choice program on Universityadmissions.se."
        },
        desc: "Lund University's premier merit-based scholarship program for citizens of non-EU/EEA countries, awarding tuition fee remissions to top international scholars."
      },
      {
        id: 348,
        subject: "physics",
        subjects: ["physics", "engineering", "computer-science"],
        type: "PhD",
        title: "Lund University Salaried Doctoral Positions (Doktorandanställning)",
        source: "https://www.lunduniversity.lu.se/vacancies",
        funding: "Fully salaried employment: SEK 31,500 to SEK 35,000/month gross salary with Swedish social security, pension, and paid annual leave",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Spring doctoral recruitment round across science and engineering faculties)",
        fee: "Free application via Lund recruitment portal",
        tuition: "100% tuition-free for all admitted doctoral researchers.",
        requirements: {
          gpa: "Master's degree (minimum 240 ECTS) in physics, engineering, or computing with high academic standing.",
          ielts: "Fluency in English (IELTS 6.5+ or equivalent).",
          gre: "Not required.",
          papers: "Master's thesis demonstrating capacity for independent research.",
          references: "Two academic letters of recommendation and personal statement."
        },
        desc: "Four-year fully salaried doctoral research employment contracts across physics, materials science, and computing faculties, conducting frontier research with comprehensive social benefits."
      },
      {
        id: 349,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "Lund Master of Science in Wireless Communication",
        source: "https://www.lunduniversity.lu.se/lubas/i-uoh-lu-TAWIR",
        funding: "Eligible for Lund Global Scholarships and Swedish Institute (SI) Global Professionals Scholarships",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (First round national application deadline)",
        fee: "SEK 900 application fee",
        tuition: "SEK 160,000 per academic year for non-EU/EEA students.",
        requirements: {
          gpa: "Bachelor's degree in electrical engineering, computer engineering, or telecommunications.",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Coursework in signal processing, communications, and linear algebra.",
          references: "Official university transcripts and degree certificates."
        },
        desc: "World-renowned two-year master's program taught in close partnership with Ericsson and Sony, exploring 5G/6G wireless networks, MIMO signal processing, and antenna systems."
      },
      {
        id: 350,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "Lund Master of Science in Machine Learning, Systems and Control",
        source: "https://www.lunduniversity.lu.se/lubas/i-uoh-lu-TAMSC",
        funding: "Scholarship opportunities: LUGS tuition waivers and Faculty of Engineering bursaries",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (National application round deadline)",
        fee: "SEK 900 application fee",
        tuition: "SEK 160,000 per academic year.",
        requirements: {
          gpa: "Bachelor's degree in computer science, mathematics, or engineering with strong linear algebra and programming.",
          ielts: "Academic IELTS 6.5 (minimum 5.5 in each subscore).",
          gre: "Not required.",
          papers: "Demonstrated proficiency in Python, C++, and automated control theory.",
          references: "Degree certificates and certified transcripts."
        },
        desc: "Interdisciplinary master's degree combining modern machine learning, reinforcement learning, convex optimization, and autonomous control theory."
      },
      {
        id: 351,
        subject: "physics",
        subjects: ["physics", "engineering", "chemistry"],
        type: "Research",
        title: "MAX IV Laboratory & European Spallation Source (ESS) Collaborative Placements",
        source: "https://www.maxiv.lu.se/",
        funding: "Fully funded research appointments: Monthly doctoral salary (SEK 31,500/mo) with synchrotron beamline access",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Spring synchrotron user and doctoral allocation cycle)",
        fee: "Free application",
        tuition: "Tuition-free collaborative research.",
        requirements: {
          gpa: "Master's degree in physics, chemistry, or materials science with high honours.",
          ielts: "Fluent English language skills.",
          gre: "Not required.",
          papers: "Prior experience in X-ray diffraction, spectroscopy, or neutron scattering.",
          references: "Two academic referee letters confirming experimental competence."
        },
        desc: "Research placements at the world's brightest X-ray synchrotron facility (MAX IV) and next-generation neutron spallation source (ESS), investigating novel quantum materials and biomolecules."
      },
      {
        id: 352,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "Lund LTH Engineering Summer Research & Ideon Science Park Placements",
        source: "https://www.lth.se/english/",
        funding: "Paid internship: SEK 18,000 to SEK 24,000/month project stipend in university laboratories and incubator start-ups",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer project matching deadline)",
        fee: "Free application",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Enrolled student at a recognized university in engineering or computing with solid grades.",
          ielts: "Good command of written and spoken English.",
          gre: "Not required.",
          papers: "Curriculum vitae and project portfolio.",
          references: "Academic reference letter."
        },
        desc: "Structured research and industrial internships connecting student engineers with leading research chairs at LTH and innovative high-tech ventures at Ideon Science Park."
      },
      {
        id: 353,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Fellowship",
        title: "Lund University Teaching Assistantships & Laboratory Mentoring",
        source: "https://www.lunduniversity.lu.se/about-university/work-at-lund-university",
        funding: "Departmental teaching duties: Up to 20% departmental work integrated into doctoral employment, extending PhD duration to 5 years",
        status: "open-program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Autumn teaching allocation cycle)",
        fee: "Free internal appointment",
        tuition: "Standard salaried employment.",
        requirements: {
          gpa: "Admitted doctoral candidate in good academic standing at Lund University.",
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
        id: 168,
        subject: "physics",
        name: "Prof. Dr. Anne L'Huillier",
        title: "Professor of Atomic Physics, Nobel Laureate in Physics (2023)",
        university: "Lund University",
        country: "Sweden",
        topics: ["Attosecond Physics", "High-Harmonic Generation", "Ultrafast Laser Science", "Quantum Dynamics"],
        source: "https://www.lunduniversity.lu.se/lucat/user/fys-alh",
        summary: "Nobel Laureate in Physics (2023) for experimental methods that generate attosecond pulses of light for the study of electron dynamics in matter, pioneering ultrafast physics worldwide.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 169,
        subject: "physics",
        name: "Prof. Dr. Kimberly Dick Thelander",
        title: "Professor of Material Science, Fellow of the Royal Swedish Academy of Sciences",
        university: "Lund University",
        country: "Sweden",
        topics: ["Semiconductor Nanowires", "Crystal Growth", "Transmission Electron Microscopy", "Nanotechnology"],
        source: "https://www.lunduniversity.lu.se/lucat/user/ftf-kdt",
        summary: "Leading international pioneer in semiconductor nanowire crystal growth mechanisms, heteroepitaxy, and atomic-resolution in-situ electron microscopy.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 170,
        subject: "engineering",
        name: "Prof. Dr. Karl-Erik Årzén",
        title: "Professor at Department of Automatic Control, Fellow of IEEE",
        university: "Lund University",
        country: "Sweden",
        topics: ["Automatic Control", "Real-Time Systems", "Cloud Computing Control", "Cyber-Physical Systems"],
        source: "https://www.control.lth.se/staff/karl-erik-arzen/",
        summary: "World authority on embedded real-time control architectures, co-design of control and computing systems, and automated resource management in cloud datacenters.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 9. NETHERLANDS: Vrije Universiteit Amsterdam (Row 1485)
  {
    institution: "Vrije Universiteit Amsterdam",
    shortName: "VU Amsterdam",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Amsterdam, North Holland, Netherlands",
    website: "https://www.vu.nl",
    sourceRow: 1485,
    slug: "vrije-universiteit-amsterdam",
    heroEyebrow: "Netherlands · North Holland · Renowned European Research Hub · Reviewed 14 October 2026",
    headline: "Vrije Universiteit Amsterdam (Amsterdam, Netherlands)",
    description: "VU Amsterdam guide: VUFP Excellence Scholarships (100% tuition waiver), Salaried PhD under CAO-NU (€3,670/mo), VUSec hardware security, and faculty profiles.",
    overview: "Established in 1880 in Amsterdam, North Holland, Vrije Universiteit Amsterdam (VU Amsterdam) is a world-class European research university consistently ranked in the global top 120 institutions. Known for its values-driven societal impact, VU Amsterdam is internationally celebrated for computer systems and cybersecurity (the world-famous VUSec group), artificial intelligence, medical informatics, and molecular biophysics. Explore verified degree pathways, salaried doctoral employment under Dutch national agreements, and distinguished faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree from a recognized research university (WO) with equivalent to a Dutch university GPA (typically GPA 3.0+ / 4.0 or 75%+).",
      phd: "Completed Master of Science degree in relevant discipline; appointments occur via competitive application to advertised salaried PhD vacancies or approved external fellowships.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall (minimum 6.0 in all subscores) or TOEFL iBT 92 overall (minimum 21 in all subscores).",
      proposal: "Detailed motivation letter and scientific exposé explaining project methodology and research alignment.",
      appFee: "€100 non-refundable application fee for international students with non-Dutch diplomas.",
      documents: "Complete certified academic transcripts, degree certificate, CV, 2 academic reference letters, and statement of research motivation."
    },
    tuitionText: "Tuition is charged for master's programs (€16,000 to €19,500/year for non-EEA students, with VUFP scholarships providing 100% tuition waivers). Doctoral candidates (Promovendi) are not students but salaried university staff employed under the Collective Labour Agreement for Dutch Universities (CAO-NU), earning gross monthly salaries of €2,872 (Year 1) rising to €3,670 (Year 4), plus 8% holiday allowance and 8.3% end-of-year bonus.",
    opportunities: [
      {
        id: 354,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "VU Fellowship Programme (VUFP) & Holland Scholarship",
        source: "https://vu.nl/en/education/more-about/vu-fellowship-programme-vufp",
        funding: "Fully funded tuition waiver: 100% full international tuition fee coverage plus optional €5,000 one-time living allowance contribution",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual scholarship application deadline for non-EEA international master's applicants)",
        fee: "€100 application fee",
        tuition: "Full tuition covered for scholarship awardees.",
        requirements: {
          gpa: "Outstanding academic record with GPA equivalent to at least 8.0 on Dutch 10-point scale (top 10% of cohort).",
          ielts: "Academic IELTS 6.5 overall (no band below 6.0) or TOEFL iBT 92.",
          gre: "Not required.",
          papers: "Convincing motivation letter highlighting academic excellence and future societal contribution.",
          references: "Two academic letters of recommendation."
        },
        desc: "Prestigious merit scholarship awarded to outstanding international students from outside the EU/EEA pursuing full-time master's degree programs at VU Amsterdam."
      },
      {
        id: 355,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "VU Amsterdam Salaried PhD Positions (Promovendi under CAO-NU)",
        source: "https://workingat.vu.nl/vacancies",
        funding: "Fully salaried employment: Gross monthly salary of €2,872 in Year 1 rising to €3,670 in Year 4, plus 8% holiday allowance and 8.3% end-of-year bonus",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling departmental vacancy recruitment for 2027 research intakes)",
        fee: "Free application via VU careers portal",
        tuition: "Zero tuition fees; full employment contract under Dutch labor law.",
        requirements: {
          gpa: "Completed Master of Science degree in computer science, AI, or related field with high academic marks.",
          ielts: "Fluency in English (IELTS 6.5+ or TOEFL 92+).",
          gre: "Not required.",
          papers: "Master's thesis demonstrating solid scientific methodology and software engineering skills.",
          references: "Two academic referee contacts and cover letter."
        },
        desc: "Four-year salaried doctoral research positions in computer science, artificial intelligence, and systems security, providing full statutory social benefits and pension contributions."
      },
      {
        id: 356,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "VU Amsterdam Master of Science in Artificial Intelligence",
        source: "https://vu.nl/en/education/master/artificial-intelligence",
        funding: "Eligible for VUFP excellence scholarships and high-tech corporate bursaries",
        status: "open-program",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (Non-EU/EEA applicant visa and admission deadline)",
        fee: "€100 application fee",
        tuition: "€16,980 per academic year for non-EEA students.",
        requirements: {
          gpa: "Bachelor's degree in Artificial Intelligence, Computer Science, or closely related discipline with strong math background.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 92.",
          gre: "Not required.",
          papers: "Coursework in machine learning, logic, and computational statistics.",
          references: "Transcripts, CV, and motivation letter."
        },
        desc: "Leading two-year English-taught master's degree focusing on knowledge representation, machine learning, human-aware AI systems, and natural language technologies."
      },
      {
        id: 357,
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        title: "VU Amsterdam Master of Science in Computer Science (Joint Degree with UvA)",
        source: "https://vu.nl/en/education/master/computer-science",
        funding: "VUFP merit scholarships and Dutch research assistantships available",
        status: "open-program",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (Application deadline for non-EEA students)",
        fee: "€100 application fee",
        tuition: "€16,980 per academic year.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science with courses in computer architecture, operating systems, and networks.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 92.",
          gre: "Not required.",
          papers: "Substantial software development project or Bachelor's thesis.",
          references: "Academic reference letters and transcripts."
        },
        desc: "Elite joint master's program with the University of Amsterdam, offering specializations in Computer Systems & Security, Big Data Engineering, and Foundations of Computing."
      },
      {
        id: 358,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Research",
        title: "Systems and Network Security Group (VUSec) Research Placements",
        source: "https://www.vusec.net/",
        funding: "Fully funded research appointment: Salaried employment under CAO-NU (€2,872–€3,670/mo) with full hardware laboratory access",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual hardware security research group intake)",
        fee: "Free application",
        tuition: "Zero tuition charges under salaried appointment.",
        requirements: {
          gpa: "Master's degree in computer science or computer engineering with outstanding systems programming marks.",
          ielts: "Fluent English skills.",
          gre: "Not required.",
          papers: "Low-level C/C++ and assembly systems programming expertise; knowledge of CPU architectures.",
          references: "Two academic letters confirming technical rigor."
        },
        desc: "Research placements inside one of the world's most acclaimed computer security labs, uncovering microarchitectural CPU flaws, cache side channels, and binary exploitation."
      },
      {
        id: 359,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Internship",
        title: "Amsterdam Science Park & Zuidas Academic-Corporate Internships",
        source: "https://vu.nl/en/research",
        funding: "Paid internship: €800 to €1,200/month industrial allowance during Master's graduation research thesis",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Master's graduation internship matching cycle)",
        fee: "No application fee for enrolled master's students",
        tuition: "Maintains regular student registration.",
        requirements: {
          gpa: "Completion of first-year master's coursework with good academic standing.",
          ielts: "English language proficiency.",
          gre: "Not required.",
          papers: "Internship project plan approved by VU academic thesis supervisor.",
          references: "Supervising faculty approval."
        },
        desc: "Practical research internships embedded inside leading international technology firms and research institutes in the Amsterdam metropolitan area for Master's thesis projects."
      },
      {
        id: 360,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Fellowship",
        title: "VU Student Assistantships (Student-Assistenten)",
        source: "https://workingat.vu.nl/",
        funding: "Contractual salary: €15.50 to €18.20 per hour for tutorial teaching and laboratory exercise grading",
        status: "open-program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Semester 1 student assistant teaching allocations)",
        fee: "Free internal application via department portal",
        tuition: "Provides supplemental income during Master's study.",
        requirements: {
          gpa: "Enrolled student at VU Amsterdam with excellent marks in target subjects.",
          ielts: "English communication competency.",
          gre: "Not required.",
          papers: "Course completion with high grade.",
          references: "Lecturer endorsement."
        },
        desc: "Paid academic teaching positions for master's and advanced bachelor's students, leading exercise sessions, grading code submissions, and mentoring junior scholars."
      }
    ],
    researchers: [
      {
        id: 171,
        subject: "computer-science",
        name: "Prof. Dr. Herbert Bos",
        title: "Professor of Systems Security, Head of the VUSec Group, ACM Fellow",
        university: "Vrije Universiteit Amsterdam",
        country: "Netherlands",
        topics: ["Systems Security", "Hardware Vulnerabilities", "Binary Analysis", "Microarchitectural Attacks"],
        source: "https://www.cs.vu.nl/~herbertb/",
        summary: "ACM Fellow and leading international systems security researcher. Discovered seminal hardware security vulnerabilities including Rowhammer variants, Spectre gadgets, and memory errors.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 172,
        subject: "computer-science",
        name: "Prof. Dr. Frank van Harmelen",
        title: "Professor of Knowledge Representation & Reasoning, Member of KNAW",
        university: "Vrije Universiteit Amsterdam",
        country: "Netherlands",
        topics: ["Knowledge Representation", "Semantic Web", "Symbolic AI", "Knowledge Graphs"],
        source: "https://www.cs.vu.nl/~frankh/",
        summary: "Member of the Royal Netherlands Academy of Arts and Sciences (KNAW) and EurAI Fellow. Co-developer of the W3C OWL Web Ontology Language and pioneer in combining symbolic and neural AI.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 173,
        subject: "physics",
        name: "Prof. Dr. Gijs Wuite",
        title: "Professor of Physics of Living Systems",
        university: "Vrije Universiteit Amsterdam",
        country: "Netherlands",
        topics: ["Biophysics", "Optical Tweezers", "Atomic Force Microscopy", "DNA-Protein Interactions"],
        source: "https://research.vu.nl/en/persons/gijs-wuite",
        summary: "Leading European biophysicist, pioneer in single-molecule manipulation using optical tweezers and acoustic force spectroscopy to study dynamic DNA-protein interactions.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 10. SWITZERLAND: University of Lausanne (Row 1354)
  {
    institution: "University of Lausanne",
    shortName: "UNIL",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Lausanne, Vaud, Switzerland",
    website: "https://www.unil.ch",
    sourceRow: 1354,
    slug: "university-of-lausanne",
    heroEyebrow: "Switzerland · Vaud · Lake Geneva Flagship for Life Sciences & Oncology · Reviewed 14 October 2026",
    headline: "University of Lausanne (Lausanne, Switzerland)",
    description: "University of Lausanne guide: UNIL Master's Grants (CHF 19,200/yr), Salaried Doctoral Assistantships (CHF 54,000/yr), AGORA oncology placements, and faculty profiles.",
    overview: "Established in 1537 along the shores of Lake Geneva in Lausanne, the University of Lausanne (Université de Lausanne - UNIL) is an internationally celebrated Swiss research institution. Together with EPFL and the CHUV University Hospital, UNIL forms a world-leading biomedical and oncology powerhouse housing the AGORA Cancer Research Centre and the Ludwig Institute for Cancer Research. UNIL leads Europe in molecular life sciences, cancer immunotherapy, evolutionary bioinformatics, and environmental geosciences. Explore low-fee master's degrees, salaried doctoral assistantships, and world-class faculty profiles.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 180 ECTS) in relevant subject from an officially recognized university; prerequisites evaluated by the respective UNIL faculty.",
      phd: "Recognized Master's degree in relevant discipline; formal agreement of doctoral supervision from a qualified thesis director (directeur de thèse) at UNIL.",
      language: "Demonstrated English or French proficiency depending on degree program (English master's require IELTS 6.5-7.0 or TOEFL iBT 90+; French programs require CEFR B2/C1).",
      proposal: "Comprehensive 2-4 page research project plan approved by the sponsoring UNIL thesis director.",
      appFee: "CHF 200 application administrative fee for applicants holding non-Swiss qualifications; standard semester tuition of only CHF 580/semester (no international tuition surcharge).",
      documents: "Certified academic transcripts, degree diplomas, curriculum vitae, motivation letter, and valid passport identification."
    },
    tuitionText: "Tuition is highly subsidized at UNIL for all nationalities, costing only CHF 580 per semester. Doctoral candidates are employed as salaried university research assistants (Assistant·e·s diplômé·e·s), earning competitive gross annual salaries of CHF 50,000 to CHF 58,000 per year with comprehensive Swiss social healthcare and retirement coverage.",
    opportunities: [
      {
        id: 361,
        subject: "biology",
        subjects: ["biology", "chemistry", "computer-science"],
        type: "Scholarship",
        title: "UNIL Master's Grants for International Students",
        source: "https://www.unil.ch/international/en/home/menu_volet/mobilite/venir-a-lunil/bourses-de-master-unil.html",
        funding: "Fully funded: Living grant of CHF 1,600/month (CHF 19,200/year) for the complete normal duration of the Master's degree plus complete waiver of semester tuition fees",
        status: "open-scholarship",
        deadline: "2026-11-01",
        deadlineText: "November 1, 2026 (Annual international grant competition deadline for Autumn 2027 entry)",
        fee: "CHF 200 administrative fee (refunded if grant is awarded)",
        tuition: "Full tuition completely waived for grant recipients.",
        requirements: {
          gpa: "Graduation with distinguished academic results (equivalent to top 10% of class) from an accredited foreign university.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and compelling motivation letter.",
          references: "Two letters of recommendation from academic professors."
        },
        desc: "Prestigious Swiss excellence grants awarded to ten outstanding international graduates each year to pursue Master's studies at the University of Lausanne."
      },
      {
        id: 362,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "UNIL Salaried Doctoral Assistantships (Assistant·e diplômé·e)",
        source: "https://www.unil.ch/carrieres/en/home/menu_volet/postuler/offres-demploi.html",
        funding: "Fully salaried Swiss university contract: CHF 52,000 to CHF 58,000/year gross salary with Swiss healthcare, pension, and paid leave",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Departmental spring recruitment for doctoral laboratory assistants)",
        fee: "Free application via UNIL recruitment portal",
        tuition: "Zero tuition charges under salaried university appointment.",
        requirements: {
          gpa: "University Master's degree in biological sciences, medicine, or biochemistry with high honors.",
          ielts: "Fluent English language skills.",
          gre: "Not required.",
          papers: "Master's research thesis demonstrating experimental rigor.",
          references: "Two academic referee contacts and thesis advisor recommendation."
        },
        desc: "Four to five-year salaried doctoral research positions in life sciences, oncology, and geosciences, conducting original research alongside world-class Swiss laboratory investigators."
      },
      {
        id: 363,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Master's",
        title: "UNIL Master of Science in Molecular Life Sciences",
        source: "https://www.unil.ch/ecole-biologie/en/home/menu_volet/master/master-in-molecular-life-sciences.html",
        funding: "Eligible for UNIL Master's Grants and Swiss cantonal living subsidies",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (International applicant deadline for Autumn entry)",
        fee: "CHF 200 application fee",
        tuition: "Subsidized standard tuition: CHF 580 per semester.",
        requirements: {
          gpa: "Bachelor of Science in Biology, Biochemistry, or Molecular Medicine with strong laboratory marks.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90 (taught entirely in English).",
          gre: "Not required.",
          papers: "Demonstrated coursework in genetics, cell biology, and biochemistry.",
          references: "Certified transcripts and curriculum vitae."
        },
        desc: "High-level two-year English-taught Master of Science degree with specializations in Cancer Biology, Immunology, Bioinformatics, and Stem Cell Biology."
      },
      {
        id: 364,
        subject: "environment",
        subjects: ["environment", "physics"],
        type: "Master's",
        title: "UNIL Master of Science in Earth Sciences (Joint Degree with UniGe)",
        source: "https://www.unil.ch/gse/en/home/menu_volet/enseignement/masters/master-in-earth-sciences.html",
        funding: "Subsidized Swiss tuition (CHF 580/semester) and laboratory field study support",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (International application deadline)",
        fee: "CHF 200 application fee",
        tuition: "CHF 580 per semester.",
        requirements: {
          gpa: "Bachelor's degree in geosciences, environmental sciences, or physics.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Transcripts showing solid grounding in geological or environmental sciences.",
          references: "Curriculum vitae and motivation letter."
        },
        desc: "Prestigious joint master's degree with the University of Geneva exploring geological hazards, environmental geochemistry, alpine tectonics, and sedimentary basins."
      },
      {
        id: 365,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        title: "Ludwig Institute for Cancer Research & AGORA Cancer Center Placements",
        source: "https://www.unil.ch/cancer/",
        funding: "Fully funded research appointment: Salaried doctoral contract (CHF 54,000/yr) with cutting-edge immunotherapy laboratory facilities",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Collaborative doctoral oncology intake deadline)",
        fee: "Free application",
        tuition: "Tuition fully covered under research appointment.",
        requirements: {
          gpa: "Master's degree in oncology, immunology, or biochemistry with outstanding laboratory grades.",
          ielts: "High-level English communication skills.",
          gre: "Not required.",
          papers: "Practical research experience in tumor immunology, T-cell biology, or single-cell sequencing.",
          references: "Two letters of recommendation from cancer researchers."
        },
        desc: "Cutting-edge translational oncology research placements investigating personalized neoantigen vaccines, T-cell receptor engineering, and tumor microenvironment mechanics."
      },
      {
        id: 366,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        title: "UNIL Summer Undergraduate Research (SUR) Programme in Life Sciences",
        source: "https://www.unil.ch/eb-sur/en/home.html",
        funding: "Fully funded summer scholarship: Free university student housing, international travel refund, and CHF 1,500 living bursary",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual international summer program application deadline)",
        fee: "Free application via SUR online portal",
        tuition: "Zero tuition charges.",
        requirements: {
          gpa: "Enrolled in 2nd or 3rd year of undergraduate degree in biology, medicine, or biochemistry with top grades.",
          ielts: "Proficient in written and spoken English.",
          gre: "Not required.",
          papers: "Transcripts, curriculum vitae, and statement of research interests.",
          references: "Two letters of recommendation from home university professors."
        },
        desc: "Highly selective 8-week summer research fellowship bringing international undergraduate scholars to Lausanne to conduct independent laboratory investigations in world-class faculties."
      },
      {
        id: 367,
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "Fellowship",
        title: "UNIL Graduate Assistant Teaching Duties & Lab Supervision",
        source: "https://www.unil.ch/carrieres/en/home.html",
        funding: "Contractual salary: Incorporated into salaried doctoral assistant package (CHF 52,000–CHF 58,000/year)",
        status: "open-program",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Semester teaching assignment allocations)",
        fee: "Free internal appointment",
        tuition: "Included in employment contract.",
        requirements: {
          gpa: "Employed doctoral assistant in good academic standing at UNIL.",
          ielts: "English or French teaching communication competency.",
          gre: "Not required.",
          papers: "Course syllabus mastery.",
          references: "Faculty laboratory director endorsement."
        },
        desc: "Academic teaching appointments providing doctoral researchers with university instructional experience, supervising practical laboratory exercises and guiding bachelor student projects."
      }
    ],
    researchers: [
      {
        id: 174,
        subject: "biology",
        name: "Prof. Dr. George Coukos",
        title: "Director of the Department of Oncology UNIL-CHUV, Head of Ludwig Lausanne Branch",
        university: "University of Lausanne",
        country: "Switzerland",
        topics: ["Ovarian Cancer", "Cancer Immunotherapy", "Tumor Microenvironment", "T-Cell Engineering"],
        source: "https://www.unil.ch/cancer/en/home/menu_volet/recherche/prof-george-coukos.html",
        summary: "World-renowned cancer immunotherapy pioneer and Director of the Department of Oncology. Leading clinical translation of tumor-infiltrating lymphocytes (TIL) and dendritic cell vaccines.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 175,
        subject: "biology",
        name: "Prof. Dr. Johanna Joyce",
        title: "Full Professor of Oncology, Ludwig Institute for Cancer Research",
        university: "University of Lausanne",
        country: "Switzerland",
        topics: ["Tumor Microenvironment", "Macrophage Polarization", "Brain Metastasis", "Chemoresistance"],
        source: "https://www.unil.ch/joycelab/",
        summary: "EMBO Member and leading cancer researcher. Discovered critical mechanisms by which tumor-associated macrophages and microenvironment non-cancer cells promote brain tumor progression and resistance.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 176,
        subject: "biology",
        name: "Prof. Dr. Marc Robinson-Rechavi",
        title: "Full Professor of Bioinformatics, SIB Swiss Institute of Bioinformatics Group Leader",
        university: "University of Lausanne",
        country: "Switzerland",
        topics: ["Evolutionary Genomics", "Comparative Transcriptomics", "Bgee Database", "Bioinformatics"],
        source: "https://www.unil.ch/dee/en/home/menu_volet/people/professeurs/prof-marc-robinson-rechavi.html",
        summary: "Prominent evolutionary bioinformatician and creator of the Bgee database. Pioneer in large-scale comparative genomics and expression evolution across animal species.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  }
];
