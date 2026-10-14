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

export const cycle2Universities = [
  // 1. CANADA: The University of British Columbia (Row 95)
  {
    institution: "The University of British Columbia",
    shortName: "UBC",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Vancouver, British Columbia, Canada",
    website: "https://www.ubc.ca",
    sourceRow: 95,
    slug: "university-of-british-columbia",
    heroEyebrow: "Canada · British Columbia · Top Global Research Institution · Reviewed 14 October 2026",
    headline: "The University of British Columbia (UBC)",
    description: "The University of British Columbia guide: 4YF Doctoral Fellowships, Master of Science in CS & Data Science, AMPEL advanced materials research, GTA positions, and leading faculty.",
    overview: "Established in 1908 in Vancouver, The University of British Columbia (UBC) is consistently ranked among the world's top 40 public research universities. UBC attracts over $770 million in annual research funding across quantum matter, computer science, biomedical technology, and environmental engineering. Explore verified graduate degrees, four-year doctoral funding packages, salaried teaching assistantships, and world-renowned faculty profiles.",
    admissions: {
      masters: "Four-year Bachelor's degree with minimum B+ average (typically 76% at UBC or 3.3/4.0 GPA) in relevant academic disciplines.",
      phd: "Recognized Master's degree with clear evidence of research ability, academic publications, or exceptional undergraduate honours degree (first-class average A- / 80%+).",
      language: "Demonstrated English proficiency: Academic IELTS 7.0 overall with no band below 6.5, or TOEFL iBT 100 overall with minimum 22 in each subscore.",
      proposal: "Comprehensive 2-page research statement detailing research objectives, methodology, and identified UBC faculty supervisors.",
      appFee: "CAD $168.25 application fee for international applicants; CAD $114.00 for Canadian citizens and permanent residents.",
      documents: "Complete official university transcripts, 3 academic letters of reference, curriculum vitae, and statement of intent."
    },
    tuitionText: "Tuition for research-based Master's and PhD programs is heavily subsidized. International research Master's students pay approximately CAD $9,500 per year, and PhD students receive the UBC Four Year Doctoral Fellowship (4YF) or International Tuition Award, effectively offsetting international tuition fees down to domestic rates (CAD $5,500/yr).",
    opportunities: [
      {
        id: 88,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "UBC Four Year Doctoral Fellowships (4YF)",
        source: "https://www.grad.ubc.ca/awards/four-year-doctoral-fellowship-4yf",
        funding: "Fully funded: Minimum CAD $18,200 annual stipend plus full tuition coverage for up to four years of doctoral study",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Departmental graduate awards nomination deadline for September intake)",
        fee: "CAD $168.25 international application fee (CAD $114.00 domestic)",
        tuition: "Full tuition completely covered for four years under 4YF fellowship regulations.",
        requirements: {
          gpa: "First-class academic standing (A- / 80% or equivalent 3.7+ CGPA) across prior degree coursework.",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in all bands or TOEFL iBT 100.",
          gre: "Recommended for quantitative programs outside Canada/US; subject tests accepted.",
          papers: "Demonstrated research potential through published conference papers or Master's thesis.",
          references: "Three confidential academic reference letters submitted electronically through the eServices portal."
        },
        desc: "UBC's prestigious Four Year Doctoral Fellowship (4YF) provides guaranteed financial support of at least CAD $18,200 per year plus tuition for outstanding domestic and international PhD students across all disciplines."
      },
      {
        id: 89,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "UBC PhD in Computer Science",
        source: "https://www.cs.ubc.ca/students/grad/phd",
        funding: "Fully funded: Guaranteed minimum funding package of CAD $28,000 per year through research assistantships (RA), GTA, and departmental awards",
        status: "open-position",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Strict annual deadline for September 2027 admission)",
        fee: "CAD $168.25 international application fee",
        tuition: "Tuition fully covered by International Tuition Award and department research bursary.",
        requirements: {
          gpa: "Master's degree in Computer Science or related quantitative field with minimum A- (80%) average.",
          ielts: "Academic IELTS 7.0 overall (6.5 min band) or TOEFL iBT 100.",
          gre: "General GRE score recommended for international applicants.",
          papers: "High-quality Master's thesis or peer-reviewed publications in top computer science venues (NeurIPS, ICML, SIGGRAPH, OSDI).",
          references: "Three academic reference letters commenting directly on research aptitude and technical creativity."
        },
        desc: "Four to five-year doctoral research program in UBC's world-renowned Department of Computer Science, offering cutting-edge labs in artificial intelligence, computer graphics, systems, robotics, and human-computer interaction."
      },
      {
        id: 90,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "UBC Master of Science in Computer Science",
        source: "https://www.cs.ubc.ca/students/grad/msc",
        funding: "Fully funded: Minimum funding guarantee of CAD $24,000 per year for two years through teaching assistantships and research grants",
        status: "program-information",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Annual international deadline for September entry)",
        fee: "CAD $168.25 international application processing fee",
        tuition: "CAD $9,500/year for international research students (partially offset by UBC international tuition awards).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science or Mathematics with minimum B+ average (76%+) in upper-level coursework.",
          ielts: "Academic IELTS 7.0 overall with no band score below 6.5 or TOEFL iBT 100.",
          gre: "Recommended for graduates from non-Canadian universities.",
          papers: "Demonstrated programming competence and research interest statement (maximum 2 pages).",
          references: "Three academic reference letters from university instructors or research supervisors."
        },
        desc: "Two-year thesis-based Master of Science degree providing foundational and advanced training in algorithms, machine learning, systems architecture, and software engineering with guaranteed graduate student funding."
      },
      {
        id: 91,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Master's",
        title: "UBC Master of Data Science (MDS)",
        source: "https://masterdatascience.ubc.ca/",
        funding: "Self-funded; eligible for merit-based entrance scholarships (CAD $5,000 to $15,000) and educational student loans",
        status: "program-information",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Final international deadline for Autumn cohort intake)",
        fee: "CAD $168.25 application fee",
        tuition: "CAD $53,000 total program tuition for international students; CAD $35,500 for domestic Canadian students.",
        requirements: {
          gpa: "Four-year Bachelor's degree with minimum B+ average (76%+) and prerequisite coursework in programming, calculus, and linear algebra.",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in all components or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Resume / CV detailing analytical, technical, and mathematical problem-solving experience.",
          references: "Two academic or professional reference letters evaluating quantitative and team collaboration skills."
        },
        desc: "Intensive 10-month professional Master's program designed to teach data wrangling, machine learning, statistical modeling, data visualization, and cloud-scale data engineering through hands-on industry capstones."
      },
      {
        id: 92,
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry"],
        type: "Research",
        title: "UBC Advanced Materials and Process Engineering Laboratory (AMPEL) Placements",
        source: "https://ampel.ubc.ca/",
        funding: "Funded research positions supported by NSERC Discovery Grants, Canada Foundation for Innovation (CFI), and industrial partners",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for Summer/Fall laboratory research allocations",
        fee: "Free application directly to affiliated principal investigators",
        tuition: "Zero tuition; paid graduate research assistantship (GRA).",
        requirements: {
          gpa: "Undergraduate or graduate degree in Materials Engineering, Physics, Chemical Engineering, or Mechanical Engineering.",
          ielts: "Academic IELTS 7.0 or institutional research English fluency.",
          gre: "Not required.",
          papers: "Demonstrated experimental laboratory skills in nanofabrication, microscopy, or spectroscopy.",
          references: "CV, complete university transcripts, and two academic referee contacts."
        },
        desc: "Interdisciplinary research placements inside UBC AMPEL, bringing together engineers, physicists, and chemists to develop state-of-the-art semiconductor devices, quantum biomaterials, and clean-energy storage materials."
      },
      {
        id: 93,
        subject: "biology",
        subjects: ["biology", "environment", "engineering"],
        type: "Internship",
        title: "UBC Work Learn International Undergraduate Research Awards (WLIURA)",
        source: "https://students.ubc.ca/career/campus-experiences/work-learn-program",
        funding: "Fully funded: CAD $18.50 to CAD $24.00 per hour subsidized campus research appointments (up to CAD $6,500 per term)",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual deadline for Summer research terms)",
        fee: "Free application through UBC CareersOnline portal",
        tuition: "Zero tuition; hourly salaried research placement.",
        requirements: {
          gpa: "Enrolled undergraduate or visiting research student in good academic standing (minimum 75% average).",
          ielts: "Fluent working English communication skills.",
          gre: "Not required.",
          papers: "Short research proposal or motivation statement matching faculty lab focus.",
          references: "Endorsement from sponsoring UBC faculty member and updated academic transcript."
        },
        desc: "Competitive 16-week summer research internships providing international and domestic students with direct laboratory apprenticeships under UBC faculty mentors across biological sciences, environment, and engineering."
      },
      {
        id: 94,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "engineering", "mathematics"],
        type: "Fellowship",
        title: "UBC Graduate Teaching Assistantships (GTA I / GTA II)",
        source: "https://www.grad.ubc.ca/awards/teaching-assistantships",
        funding: "Salaried academic employment: CAD $35.13 per hour (GTA II) to CAD $40.50 per hour (GTA I) under CUPE 2278 union collective agreement",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for upcoming Winter session (Terms 1 & 2) appointments",
        fee: "Free application submitted via departmental TA portals",
        tuition: "Zero tuition; salaried university employment with comprehensive benefits.",
        requirements: {
          gpa: "Registered UBC graduate student in good standing in a Master's or PhD degree program.",
          ielts: "High level spoken English communication for tutorial instruction and laboratory demonstration.",
          gre: "Not required.",
          papers: "Prior completion with distinction in relevant course modules.",
          references: "Approval from department graduate advisor and course instructor."
        },
        desc: "Official academic teaching positions providing substantial financial support, instruction leadership training, and classroom teaching experience across undergraduate lecture courses, tutorials, and laboratory sections."
      }
    ],
    researchers: [
      {
        id: 57,
        subject: "computer-science",
        name: "Prof. Dr. Kevin Leyton-Brown",
        title: "Professor of Computer Science / Director of CAIDA",
        university: "The University of British Columbia",
        country: "Canada",
        topics: ["Artificial Intelligence", "Algorithmic Game Theory", "Machine Learning for Algorithm Selection", "Electronic Markets", "Automated Reasoning"],
        source: "https://www.cs.ubc.ca/~kevinlb/",
        email: null,
        summary: "Professor of Computer Science and Director of the Center for Artificial Intelligence Decision-making and Action (CAIDA) at UBC, ACM Fellow, and leading researcher in algorithmic game theory and machine learning.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 58,
        subject: "computer-science",
        name: "Prof. Dr. Gail Murphy",
        title: "Professor of Computer Science & Vice-President Research and Innovation",
        university: "The University of British Columbia",
        country: "Canada",
        topics: ["Software Engineering", "Developer Productivity", "Program Comprehension", "Empirical Software Studies", "Recommendation Systems for SE"],
        source: "https://www.cs.ubc.ca/~murphy/",
        email: null,
        summary: "Professor of Computer Science and Vice-President Research and Innovation at UBC, Fellow of the Royal Society of Canada and ACM Fellow, renowned for research in developer tools and software system comprehension.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 59,
        subject: "physics",
        name: "Prof. Dr. Andrea Damascelli",
        title: "Professor of Physics / Scientific Director, Stewart Blusson Quantum Matter Institute",
        university: "The University of British Columbia",
        country: "Canada",
        topics: ["Quantum Materials", "High-Temperature Superconductivity", "Angle-Resolved Photoemission Spectroscopy (ARPES)", "Topological Insulators", "Condensed Matter"],
        source: "https://qmi.ubc.ca/andrea-damascelli",
        email: null,
        summary: "Professor of Physics and Scientific Director of the Stewart Blusson Quantum Matter Institute (SBQMI) at UBC, world authority on electronic structures of unconventional superconductors using angle-resolved photoemission.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 2. AUSTRALIA: The University of Melbourne (Row 185)
  {
    institution: "The University of Melbourne",
    shortName: "Unimelb",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Melbourne, Victoria, Australia",
    website: "http://www.unimelb.edu.au",
    sourceRow: 185,
    slug: "the-university-of-melbourne",
    heroEyebrow: "Australia · Victoria · Group of Eight Leading Research University · Reviewed 14 October 2026",
    headline: "The University of Melbourne",
    description: "The University of Melbourne guide: Graduate Research Scholarships (AUD $37,000/yr stipend), Master of Computer Science, PhD in Engineering, and internationally recognized faculty.",
    overview: "Founded in 1853, The University of Melbourne is Australia's #1 ranked university and a foundational member of the prestigious Group of Eight (Go8). Located in Parkville, Melbourne, the university conducts over AUD $1.3 billion in annual research expenditures across computer science, biomedicine, engineering, and quantum physics. Explore verified postgraduate degrees, fully funded doctoral scholarships, and world-class faculty profiles.",
    admissions: {
      masters: "Four-year Australian Bachelor's degree (Honours) or equivalent international qualification with minimum weighted average mark (WAM) of 75%+ or 3.3/4.0 GPA.",
      phd: "Completion of a 4-year undergraduate degree with First Class Honours (H1 - 80%+) or a Master's degree with a substantial research thesis component (minimum 25% of total coursework).",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each section) or TOEFL iBT 79 (writing 21, speaking 18, reading 13, listening 13); higher thresholds (IELTS 7.0) for professional fields.",
      proposal: "Detailed 2 to 3-page research proposal specifying research questions, background literature, methodology, and potential faculty supervisors.",
      appFee: "AUD $130 application fee for international applicants (waived for specific scholarship applicants and partner institutions).",
      documents: "Complete official university transcripts, grading scale guide, curriculum vitae, two academic referee reports, and passport copy."
    },
    tuitionText: "Under Australian Government Research Training Program (RTP) and Melbourne Graduate Research Scholarships, domestic and selected international PhD candidates study completely tuition-free with full fee offsets (saving up to AUD $135,000) plus an annual tax-free living stipend of AUD $37,000.",
    opportunities: [
      {
        id: 95,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Melbourne Graduate Research Scholarships (MGRS)",
        source: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships",
        funding: "Fully funded: 100% full tuition fee offset up to AUD $135,000 plus living allowance stipend of AUD $37,000 per year (tax-free) for up to 3.5 years, relocation grant, and OSHC health coverage",
        status: "open-scholarship",
        deadline: "2026-10-31",
        deadlineText: "October 31, 2026 for Round 1 (February/July 2027 intake) consideration",
        fee: "AUD $130 application fee (scholarship consideration is automatic upon course application)",
        tuition: "Full tuition completely waived under the Melbourne Research Training Program fee offset.",
        requirements: {
          gpa: "First Class Honours (H1 / 80%+ equivalent) in prior undergraduate or Master's research degree.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 79.",
          gre: "Not required by University of Melbourne.",
          papers: "Prior peer-reviewed research publications or completed Honours/Master's thesis of high distinction.",
          references: "Two academic referee reports assessing research potential submitted via the online referee portal."
        },
        desc: "The University of Melbourne's premier graduate research award offering complete tuition coverage and an annual tax-free living stipend of AUD $37,000 to approximately 600 exceptional domestic and international candidates each year."
      },
      {
        id: 96,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        title: "University of Melbourne Doctoral Degree (PhD) in Engineering & IT",
        source: "https://study.unimelb.edu.au/find/courses/graduate/doctor-of-philosophy-engineering-and-it/",
        funding: "Fully funded: Eligible for Melbourne Research Scholarships (AUD $37,000/yr tax-free) and industry-sponsored ARC Linkage studentships",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for Mid-Year (Semester 2) international admissions",
        fee: "AUD $130 application fee",
        tuition: "Covered by RTP Fee Offset for scholarship holders; standard international tuition AUD $49,824/year.",
        requirements: {
          gpa: "Four-year Bachelor degree in Engineering or Computer Science with First Class Honours (80%+ / H1).",
          ielts: "Academic IELTS 6.5 overall with 6.0 minimum in each section.",
          gre: "Not required.",
          papers: "Substantial research component in prior studies (minimum 25% research project or publication record).",
          references: "Written confirmation of supervision support from an academic staff member in the Faculty of Engineering and IT."
        },
        desc: "Four-year advanced doctoral research degree conducting world-leading investigations across electrical engineering, autonomous systems, cybersecurity, biomedical technology, and distributed cloud computing."
      },
      {
        id: 97,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "University of Melbourne Master of Computer Science",
        source: "https://study.unimelb.edu.au/find/courses/graduate/master-of-computer-science/",
        funding: "Self-funded; eligible for Melbourne Graduate Scholarships (up to AUD $10,000 fee remission) and university tutoring",
        status: "program-information",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 for Semester 1 (February 2027) intake",
        fee: "AUD $130 application fee",
        tuition: "AUD $52,864 per year (total 200 credit points over two full academic years).",
        requirements: {
          gpa: "Undergraduate degree with a major in Computer Science or Software Engineering with weighted average mark (WAM) of at least 75%.",
          ielts: "Academic IELTS 6.5 overall with minimum 6.0 in each sub-band or TOEFL iBT 79.",
          gre: "Not required.",
          papers: "Rigorous foundation in computer systems, algorithms, data structures, and mathematics.",
          references: "Official university academic transcripts, syllabus outlines, and statement of intent."
        },
        desc: "Two-year research-oriented Master's degree comprising advanced coursework and a major year-long 50-point research thesis project under individual faculty mentorship, serving as a direct pathway to doctoral research."
      },
      {
        id: 98,
        subject: "engineering",
        subjects: ["engineering", "biology"],
        type: "Master's",
        title: "University of Melbourne Master of Engineering (Biomedical with Business)",
        source: "https://study.unimelb.edu.au/find/courses/graduate/master-of-engineering-biomedical-with-business/",
        funding: "Self-funded; eligible for faculty merit bursaries and Engineering internship stipends",
        status: "program-information",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 for Semester 1 intake",
        fee: "AUD $130 application processing fee",
        tuition: "AUD $53,408 per year (300 credit points, typically 3 years full-time or 2 years with recognized engineering bachelor's).",
        requirements: {
          gpa: "Bachelor's degree with major in biomedical, mechanical, or electrical engineering with minimum 65%+ WAM.",
          ielts: "Academic IELTS 6.5 overall with minimum 6.0 in each component.",
          gre: "Not required.",
          papers: "Demonstrated completion of tertiary-level mathematics (calculus and linear algebra) and biosciences.",
          references: "Official academic transcripts, detailed syllabus descriptions, and resume."
        },
        desc: "EUR-ACE and Engineers Australia accredited professional engineering degree integrating tissue engineering, biomechanics, neuroengineering, and commercial medical device entrepreneurship."
      },
      {
        id: 99,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Research",
        title: "Melbourne Centre for Data Science (MCDS) Research Pathway",
        source: "https://science.unimelb.edu.au/research/centres/mcds",
        funding: "Funded research fellowships and project grants supported by ARC and university cross-faculty allocations",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for collaborative seed grant and visiting fellow rounds",
        fee: "Free application directly to Centre leadership",
        tuition: "Zero tuition; funded research appointment.",
        requirements: {
          gpa: "Master's or doctoral qualification in Statistics, Mathematics, or Computer Science with strong quantitative records.",
          ielts: "Technical English fluency for peer-reviewed academic publication.",
          gre: "Not required.",
          papers: "Published research in statistical theory, machine learning foundations, or data-driven sciences.",
          references: "Two academic referee letters and comprehensive publication list."
        },
        desc: "Interdisciplinary research collaboration hub linking the School of Mathematics and Statistics with the School of Computing and Information Systems, investigating statistical machine learning and high-dimensional data."
      },
      {
        id: 100,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "Melbourne School of Engineering (MSE) Industry Internship & Research Placement",
        source: "https://eng.unimelb.edu.au/industry/internships-and-industry-projects",
        funding: "Salaried/Stipend: AUD $800 to AUD $1,200 per week for 10-to-15-week industry-embedded research practicums (ENGR90033)",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for Semester 2 industry project allocations",
        fee: "Free enrollment for approved graduate students",
        tuition: "Included in standard enrolled degree tuition; vocational stipends paid by industry partners.",
        requirements: {
          gpa: "Enrolled student in Master of Engineering or Master of IT with minimum 65% course average.",
          ielts: "Professional English communication skills for workplace and lab collaboration.",
          gre: "Not required.",
          papers: "Resume / CV, technical portfolio, and statement of project interest.",
          references: "Academic endorsement from MSE graduate internship coordinator."
        },
        desc: "Structured 10-to-15-week vocational engineering internship placement embedding graduate engineers with industry leaders (CSIRO, Telstra, Arup, Boeing) and advanced university research laboratories."
      },
      {
        id: 101,
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering", "computer-science", "physics"],
        type: "Fellowship",
        title: "University of Melbourne Graduate Research Teaching Demonstratorships",
        source: "https://about.unimelb.edu.au/careers/academic-appointments",
        funding: "Salaried academic tutoring: AUD $48.50 to AUD $62.00 per hour under University of Melbourne Enterprise Bargaining Agreement",
        status: "open-position",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 for Semester 1 departmental sessional teaching intakes",
        fee: "Free application through university sessional recruitment portal",
        tuition: "Zero tuition; paid hourly employment contract.",
        requirements: {
          gpa: "Enrolled graduate researcher (PhD or Master by Research) in good academic standing.",
          ielts: "High level oral English presentation and instructional capabilities.",
          gre: "Not required.",
          papers: "Exceptional mastery of underlying coursework subject matter.",
          references: "Subject coordinator approval and mandatory completion of Melbourne Teaching Certificate."
        },
        desc: "Sessional academic employment enabling graduate students to tutor weekly exercise classes, supervise engineering computer labs, conduct workshops, and grade assessments across undergraduate degree programs."
      }
    ],
    researchers: [
      {
        id: 60,
        subject: "computer-science",
        name: "Prof. Dr. Benjamin Rubinstein",
        title: "Professor of Computing and Information Systems",
        university: "The University of Melbourne",
        country: "Australia",
        topics: ["Machine Learning", "Differential Privacy", "Adversarial Machine Learning", "Algorithmic Fairness", "Cybersecurity"],
        source: "https://people.eng.unimelb.edu.au/brubinstein/",
        email: null,
        summary: "Professor in the School of Computing and Information Systems at the University of Melbourne, internationally recognized authority on differential privacy, adversarial machine learning, and secure data analysis.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 61,
        subject: "biology",
        name: "Prof. Dr. Sharon Lewin AO",
        title: "Director of the Peter Doherty Institute for Infection and Immunity",
        university: "The University of Melbourne",
        country: "Australia",
        topics: ["Infectious Diseases", "HIV Cure Strategies", "Virology", "Immunology", "Public Health Preparedness"],
        source: "https://findanexpert.unimelb.edu.au/profile/12028-sharon-lewin",
        email: null,
        summary: "Director of the Peter Doherty Institute for Infection and Immunity at the University of Melbourne, Officer of the Order of Australia, and world-leading physician-scientist pioneering HIV cure approaches.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 62,
        subject: "physics",
        name: "Prof. Dr. Rachel Webster AO",
        title: "Professor of Astrophysics / School of Physics",
        university: "The University of Melbourne",
        country: "Australia",
        topics: ["Astrophysics", "Gravitational Lensing", "Epoch of Reionization", "Cosmology", "Quasars and Black Holes"],
        source: "https://findanexpert.unimelb.edu.au/profile/13813-rachel-webster",
        email: null,
        summary: "Professor of Astrophysics at the University of Melbourne, pioneer of gravitational lensing as a cosmological probe, Fellow of the Australian Academy of Science, and leader in the Murchison Widefield Array project.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 3. GERMANY: Technical University of Munich (Row 372)
  {
    institution: "Technical University of Munich",
    shortName: "TUM",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Munich, Bavaria, Germany",
    website: "https://www.tum.de",
    sourceRow: 372,
    slug: "technical-university-of-munich",
    heroEyebrow: "Germany · Bavaria · University of Excellence · Reviewed 14 October 2026",
    headline: "Technical University of Munich (Technische Universität München)",
    description: "Technical University of Munich guide: English-taught MSc in Informatics & Robotics, salaried TV-L E13 PhD positions, TUM international scholarships, PREP internships, and faculty.",
    overview: "Founded in 1868, the Technical University of Munich (TUM) is Germany's top-ranked technical university and a continuous University of Excellence. TUM has fostered 18 Nobel laureates and operates premier campuses across Munich, Garching, and Weihenstephan. TUM excels globally in Informatics, Robotics, Mechanical Engineering, and Quantum Science. Review verified Master's degrees, salaried doctoral contracts, summer research programs, and faculty profiles.",
    admissions: {
      masters: "Recognized Bachelor of Science degree in Informatics, Engineering, or related quantitative field (minimum 180 ECTS credits) satisfying rigorous subject-specific curriculum equivalency requirements.",
      phd: "Completed Master of Science degree (120 ECTS) with above-average grades, written supervisor agreement (Betreuungszusage) from a TUM full professor, and entry into the TUM Graduate School.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall or TOEFL iBT 88; German language proficiency (CEFR A1/A2) required within first year for international master's cohorts.",
      proposal: "Curriculum analysis essay, statement of purpose, and scientific portfolio demonstrating core competencies in algorithms, mathematics, or hardware design.",
      appFee: "Zero centralized application fee via TUMonline; preliminary review documentation (VPD) via uni-assist costs approximately €75 for international degree holders.",
      documents: "Degree certificate, complete official transcripts with grading table, CV in tabular format, motivation letter, and uni-assist VPD certificate."
    },
    tuitionText: "Under Bavarian higher education legislation, regular tuition for EU/EEA citizens is zero (only a semester contribution of €85 is charged). For non-EU international students newly matriculating, tuition fees are typically €4,000 to €6,000 per semester. However, doctoral candidates (Wissenschaftliche Mitarbeiter) are salaried university employees who pay zero tuition and receive full health and pension benefits.",
    opportunities: [
      {
        id: 102,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "chemistry"],
        type: "Scholarship",
        title: "TUM International Scholarship (TUM-Stipendium)",
        source: "https://www.tum.de/en/studies/fees-and-financial-aid/scholarships/tum-scholarships",
        funding: "Partial funding: One-off semester grant of €500 to €1,500 per semester plus full tuition fee waivers for qualifying international students demonstrating academic merit and financial need",
        status: "open-scholarship",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Summer semester application window for enrolled international students)",
        fee: "Free scholarship application via TUM scholarship portal",
        tuition: "Reduces or waives international tuition fees for admitted students with documented merit.",
        requirements: {
          gpa: "Very good academic performance (German grade 2.0 or better) in prior semesters at TUM.",
          ielts: "English or German proficiency matching enrolled degree program requirements.",
          gre: "Not required.",
          papers: "Demonstrated extracurricular commitment, resume, and statement of financial hardship.",
          references: "Academic transcript and recommendation statement from a TUM university lecturer."
        },
        desc: "University-funded merit and support grants administered directly by TUM to assist enrolled international undergraduate and graduate students facing financial constraints during their studies in Munich."
      },
      {
        id: 103,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "TUM Salaried Doctoral Positions (Wissenschaftliche/r Mitarbeiter/in - TV-L E13)",
        source: "https://www.gs.tum.de/en/gs/doctorate-at-tum/",
        funding: "Fully funded: Salaried employment contract under TV-L E13 tariff (100% full-time €54,000 to €62,000 gross per year) with comprehensive German social insurance, health coverage, and state pension",
        status: "open-position",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Continuous rolling recruitment across TUM research chairs)",
        fee: "Free application directly to open chair vacancies",
        tuition: "Zero tuition. Doctoral candidates are paid research staff members; mandatory semester administrative fee of approximately €85.",
        requirements: {
          gpa: "Completed Master of Science degree (120 ECTS) with high marks in Computer Science, Engineering, or Mathematics.",
          ielts: "Fluent technical English proficiency for scientific publishing and laboratory collaboration.",
          gre: "Not required.",
          papers: "Master's research thesis or peer-reviewed conference publications in IEEE, ACM, or Springer venues.",
          references: "Written supervision confirmation and employment endorsement from a TUM chair professor."
        },
        desc: "Three to four-year salaried university employment contracts at TUM chairs, combining cutting-edge scientific research with teaching assistance and mandatory membership in the structured TUM Graduate School."
      },
      {
        id: 104,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "TUM Master of Science in Informatics (Computer Science)",
        source: "https://www.cit.tum.de/en/cit/studies/degree-programs/master-informatics/",
        funding: "Self-funded; eligible for TUM scholarships, HiWi assistantships, and DAAD funding",
        status: "program-information",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 for Winter semester (October 2027) intake",
        fee: "€75 uni-assist preliminary review documentation (VPD) fee for non-German credentials",
        tuition: "€6,000 per semester for non-EU international students (EU/EEA students pay €85 semester fee).",
        requirements: {
          gpa: "Bachelor of Science in Informatics or closely related field with curriculum equivalence in theoretical computer science, algorithms, and systems.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 88.",
          gre: "GATE / GRE scores required for applicants holding undergraduate degrees from India, China, or Vietnam.",
          papers: "Detailed curriculum analysis mapping undergraduate credits to TUM bachelor modules, and motivation essay.",
          references: "Official university academic transcripts and curriculum vitae."
        },
        desc: "Flagship two-year English-taught Master's degree (120 ECTS) at the TUM School of Computation, Information and Technology (CIT) in Garching, offering specialized tracks in Algorithms, AI, Distributed Systems, and Security."
      },
      {
        id: 105,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "TUM Master of Science in Robotics, Cognition, Intelligence",
        source: "https://www.cit.tum.de/en/cit/studies/degree-programs/master-robotics-cognition-intelligence/",
        funding: "Self-funded; eligible for Bavarian research assistantships and industrial master thesis contracts",
        status: "program-information",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 for Winter intake",
        fee: "€75 uni-assist VPD processing fee",
        tuition: "€6,000 per semester for non-EU international students; €85 semester fee for EU students.",
        requirements: {
          gpa: "Bachelor's degree in Mechanical Engineering, Electrical Engineering, or Informatics with strong mathematics foundations.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 88; German language certificate (A1 level) within one year.",
          gre: "Subject tests or GRE General required for specific international regions.",
          papers: "Rigorous coursework background in linear algebra, multivariable calculus, control engineering, and programming.",
          references: "Complete academic transcripts, module catalog descriptions, and statement of purpose."
        },
        desc: "Interdisciplinary master's degree (120 ECTS) uniting mechanical engineering, electrical engineering, and computer science to develop intelligent cognitive robots, autonomous navigation, and machine perception."
      },
      {
        id: 106,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics", "biology"],
        type: "Research",
        title: "Munich Data Science Institute (MDSI) Graduate Research Placements",
        source: "https://www.mdsi.tum.de/",
        funding: "Funded research projects supported by the German Research Foundation (DFG) and Bavarian High-Tech Agenda",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for multidisciplinary laboratory projects",
        fee: "Free application directly to affiliated MDSI labs",
        tuition: "Zero tuition; paid scientific assistantship or funded fellowship.",
        requirements: {
          gpa: "Master's or advanced Bachelor's student in Data Science, Informatics, or computational biology with outstanding marks.",
          ielts: "Technical English communication fluency.",
          gre: "Not required.",
          papers: "Demonstrated expertise in deep learning frameworks (PyTorch/JAX), mathematical statistics, or high-performance computing.",
          references: "CV, GitHub code portfolio, and recommendation from an academic advisor."
        },
        desc: "Cutting-edge collaborative research placements inside TUM MDSI, investigating foundational AI architectures, biomedical data science, mathematical optimization, and quantum algorithm simulations."
      },
      {
        id: 107,
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry"],
        type: "Internship",
        title: "TUM Practical Research Experience Program (PREP)",
        source: "https://www.tum.de/en/studies/international-students/practical-research-experience-program",
        funding: "Fully funded: €1,000 living stipend allowance, free TUM summer school tuition, organized housing assistance, and social excursions",
        status: "open-position",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (Strict annual deadline for Summer 2027 research program)",
        fee: "Free application",
        tuition: "Zero tuition; fully subsidized summer research program.",
        requirements: {
          gpa: "Enrolled undergraduate (junior/senior) or Master's student at an accredited North American or European partner university with GPA 3.0+ / 4.0.",
          ielts: "Fluent English proficiency for scientific laboratory communication.",
          gre: "Not required.",
          papers: "Resume / CV and 1-page letter of motivation highlighting interest in specific TUM research projects.",
          references: "One academic letter of recommendation from a home university faculty member."
        },
        desc: "Prestigious 10-week summer research internship (July–August) pairing international students with TUM research chairs to conduct individual laboratory investigations across robotics, materials, and physics."
      },
      {
        id: 108,
        subject: "physics",
        subjects: ["physics", "engineering", "computer-science"],
        type: "Fellowship",
        title: "TUM Student and Graduate Assistantships (HiWi - Hilfskraft)",
        source: "https://portal.mytum.de/schwarzesbrett/hiwi_boerse",
        funding: "Salaried hourly university employment: €14.50 to €18.50 per hour under Bavarian university student collective regulations",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for Summer semester appointments",
        fee: "Free application via TUM job board",
        tuition: "Zero tuition; salaried student employment.",
        requirements: {
          gpa: "Matriculated student at TUM in good academic standing.",
          ielts: "Proficiency in English or German depending on the teaching/lab assignment.",
          gre: "Not required.",
          papers: "High academic marks in the subject area of the tutoring or software project.",
          references: "Endorsement from the supervising chair professor or senior scientific staff."
        },
        desc: "Flexible part-time academic employment contracts (up to 20 hours per week) assisting TUM professors in teaching exercise sessions, grading assignments, and maintaining laboratory software."
      }
    ],
    researchers: [
      {
        id: 63,
        subject: "computer-science",
        name: "Prof. Dr. Daniel Cremers",
        title: "Chair of Computer Vision and Artificial Intelligence, School of CIT",
        university: "Technical University of Munich",
        country: "Germany",
        topics: ["Computer Vision", "3D Reconstruction", "Visual SLAM", "Deep Learning for Geometry", "Autonomous Driving"],
        source: "https://cvg.cit.tum.de/members/cremers",
        email: null,
        summary: "Chair of Computer Vision and Artificial Intelligence at TUM, recipient of the Gottfried Wilhelm Leibniz Prize, and globally renowned pioneer in direct visual odometry (DSO) and mathematical image analysis.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 64,
        subject: "engineering",
        name: "Prof. Dr. Sami Haddadin",
        title: "Chair of Robotics and Systems Intelligence / Executive Director, MIRMI",
        university: "Technical University of Munich",
        country: "Germany",
        topics: ["Robotics", "Human-Robot Interaction", "Soft Robotics", "Intelligent Prosthetics", "Safe Physical Interaction"],
        source: "https://www.mirmi.tum.de/mirmi/das-institut/menschen/sami-haddadin/",
        email: null,
        summary: "Executive Director of the Munich Institute of Robotics and Machine Intelligence (MIRMI) at TUM, recipient of the German Future Prize (Deutscher Zukunftspreis), and world leader in human-centered robotics.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 65,
        subject: "chemistry",
        name: "Prof. Dr. Claudia Felser",
        title: "Director at Max Planck Institute CPfS & TUM Honorary Professor",
        university: "Technical University of Munich",
        country: "Germany",
        topics: ["Topological Materials", "Heusler Compounds", "Quantum Chemistry", "Spintronics", "Thermoelectrics"],
        source: "https://www.tum.de/en/about-tum/news/press-releases/details/35730",
        email: null,
        summary: "Honorary Professor at TUM and Director at the Max Planck Institute for Chemical Physics of Solids, Leibniz Prize winner, and global pioneer in topological quantum materials and magnetic Heusler compounds.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 4. ITALY: Sapienza University of Rome (Row 498)
  {
    institution: "Sapienza University of Rome",
    shortName: "Sapienza",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Rome, Lazio, Italy",
    website: "http://www.uniroma1.it",
    sourceRow: 498,
    slug: "sapienza-university-of-rome",
    heroEyebrow: "Italy · Rome · Europe's Largest University & Historic Research Hub · Reviewed 14 October 2026",
    headline: "Sapienza University of Rome (Sapienza Università di Roma)",
    description: "Sapienza University of Rome guide: English MSc in AI & Robotics, Physics Master's, ministerial PhD scholarships (€16,243/yr), student 150-hour collaborations, and faculty profiles.",
    overview: "Founded in 1303 by Pope Boniface VIII, Sapienza University of Rome is the oldest and largest university in Rome, enrolling over 115,000 students. Consistently ranked #1 in the world for Classics and Ancient History, Sapienza is also a powerhouse in Physics, Aerospace, Artificial Intelligence, and Automation. Review verified English-taught Master's degrees, fully funded doctoral scholarships, laboratory internships, and faculty profiles including Nobel laureate Giorgio Parisi.",
    admissions: {
      masters: "Accredited Bachelor of Science or Laurea degree (minimum 3 years, 180 ECTS) in Computer Science, Engineering, Physics, or Mathematics satisfying curricular requirements.",
      phd: "Second-cycle Master's degree (Laurea Magistrale, 120 ECTS) with high academic distinction and competitive public examination (concorso) score based on qualifications and oral defense.",
      language: "Demonstrated English proficiency equivalent to CEFR B2/C1: Academic IELTS 6.0/6.5 minimum or TOEFL iBT 80+ for English-medium graduate curricula.",
      proposal: "For PhD: detailed research project proposal (progetto di ricerca) of 3 to 5 pages outlining objectives, theoretical framework, state of the art, and experimental methods.",
      appFee: "€10 to €30 pre-selection application fee submitted via the university Infostud portal.",
      documents: "University diploma, complete official transcripts, Declaration of Value (Dichiarazione di Valore) or CIMEA comparability certificate, CV, and identity document."
    },
    tuitionText: "Under Italian public university regulations, annual tuition fees are income-based (calcolata in base all'ISEE parificato). For international students from non-EU countries, tuition is capped between €1,000 and €2,924 per year. Admitted PhD students holding ministerial scholarships study 100% tuition-free and receive an annual living allowance of €16,243.",
    opportunities: [
      {
        id: 109,
        subject: "physics",
        subjects: ["physics", "computer-science", "engineering", "mathematics"],
        type: "Scholarship",
        title: "Sapienza PhD Fellowships (Borse di Dottorato di Ricerca)",
        source: "https://www.uniroma1.it/en/pagina/phd-programmes",
        funding: "Fully funded: Annual gross scholarship of €16,243 per year for 3 years, plus a 50% increase for research conducted abroad and dedicated 10% research budget",
        status: "open-scholarship",
        deadline: "2027-06-20",
        deadlineText: "June 20, 2027 (Annual national call for doctoral admissions - Ciclo XLIII)",
        fee: "€10 Infostud concorso registration fee",
        tuition: "Full tuition completely waived for all admitted doctoral fellowship recipients.",
        requirements: {
          gpa: "Second-cycle university Master's degree (Laurea Magistrale or international equivalent 120 ECTS) with high graduation mark (105/110+).",
          ielts: "CEFR B2 level English proficiency (certified or tested during oral interview).",
          gre: "Not required.",
          papers: "Original doctoral research project proposal (3–5 pages) and Master's thesis.",
          references: "Two academic recommendation letters submitted online by university professors."
        },
        desc: "Three-year ministerial and university doctoral scholarships covering living stipends, international research mobility supplements, and full tuition waivers for top-ranking candidates in the annual public doctoral competition."
      },
      {
        id: 110,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Sapienza PhD in Computer Science (Dottorato in Informatica)",
        source: "https://phd.uniroma1.it/dottorati/offerta-formativa/computer-science",
        funding: "Fully funded: Three-year university doctoral scholarship (€16,243/year) with additional departmental research travel funds",
        status: "open-position",
        deadline: "2027-06-20",
        deadlineText: "June 20, 2027 for Autumn doctoral commencement",
        fee: "€10 application fee",
        tuition: "Zero tuition for scholarship holders.",
        requirements: {
          gpa: "Master's degree in Computer Science, Computer Engineering, or Mathematics with top academic marks.",
          ielts: "English fluency for oral exam interview and technical publishing.",
          gre: "Not required.",
          papers: "Master's thesis and doctoral research proposal aligned with department research groups.",
          references: "Two academic referee letters and updated curriculum vitae."
        },
        desc: "Three-year doctoral curriculum in the Department of Computer Science (DI) at Sapienza, conducting cutting-edge research in algorithm design, artificial intelligence, cybersecurity, NLP, and distributed systems."
      },
      {
        id: 111,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "Sapienza Master of Science in Artificial Intelligence and Robotics",
        source: "https://corsidilaurea.uniroma1.it/en/corso/2026/30431/home",
        funding: "Self-funded; eligible for LazioDisco regional scholarships (full tuition waiver + up to €6,000/yr living grant)",
        status: "program-information",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Pre-selection round for non-EU international applicants)",
        fee: "€30 pre-selection evaluation fee",
        tuition: "€1,000 to €2,924 per year based on country of origin / ISEE (waived with LazioDisco scholarship).",
        requirements: {
          gpa: "Bachelor's degree in Computer Engineering, Computer Science, or Robotics with minimum 75% equivalent GPA.",
          ielts: "English proficiency at CEFR B2 level (IELTS 6.0+ or TOEFL iBT 80+).",
          gre: "Not required.",
          papers: "Demonstrated competence in linear algebra, multivariable calculus, probability, algorithms, and C++/Python.",
          references: "Curriculum vitae, detailed undergraduate transcript with course descriptions, and passport copy."
        },
        desc: "Two-year English-taught Master of Science (120 ECTS) in the Department of Computer, Control and Management Engineering (DIAG), focusing on computer vision, autonomous navigation, human-robot interaction, and deep learning."
      },
      {
        id: 112,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Master's",
        title: "Sapienza Master of Science in Physics",
        source: "https://corsidilaurea.uniroma1.it/en/corso/2026/30429/home",
        funding: "Self-funded; eligible for Italian government MAECI grants and LazioDisco welfare allowances",
        status: "program-information",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for international pre-enrollment",
        fee: "€30 pre-selection fee",
        tuition: "Up to €2,924 per year maximum for international students; reduced according to economic family indicator.",
        requirements: {
          gpa: "Bachelor's degree in Physics or Mathematics with solid grounding in quantum mechanics, electromagnetism, and thermodynamics.",
          ielts: "English B2 level certificate or medium of instruction verification.",
          gre: "Not required.",
          papers: "Curriculum vitae and syllabus descriptions of completed mathematical and physical coursework.",
          references: "Transcripts of records and academic reference letter."
        },
        desc: "World-class two-year Master's degree (120 ECTS) offered in English inside Sapienza's historic Department of Physics, featuring specializations in Condensed Matter, High-Energy Physics, Theoretical Physics, and Complex Systems."
      },
      {
        id: 113,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Research",
        title: "Sapienza DIAG Robotics and Perception Lab Research Projects",
        source: "https://www.diag.uniroma1.it/",
        funding: "Funded European Union Horizon Europe grants, Italian PNRR projects, and industrial collaboration funds",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for laboratory research internships",
        fee: "Free application directly to lab professors",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate or advanced undergraduate student in Robotics, Automation, or Computer Science with strong academic records.",
          ielts: "Working English fluency for international lab communication.",
          gre: "Not required.",
          papers: "Hands-on experience in ROS/ROS2, robot kinematics, trajectory planning, or deep learning.",
          references: "CV, GitHub profile or project portfolio, and transcript."
        },
        desc: "Cutting-edge laboratory research positions inside DIAG at Sapienza, developing collaborative industrial manipulators, surgical robotics, vision-based drone control, and safe human-robot interaction systems."
      },
      {
        id: 114,
        subject: "biology",
        subjects: ["biology", "chemistry", "environment"],
        type: "Internship",
        title: "Sapienza Erasmus+ Traineeship & International Laboratory Internships",
        source: "https://www.uniroma1.it/en/pagina/erasmus-traineeship",
        funding: "Fully funded: Erasmus+ mobility grant (€400 to €600 per month) plus university research hosting facilities",
        status: "open-position",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 for upcoming Spring/Summer mobility periods",
        fee: "Free participation under inter-institutional agreements",
        tuition: "Zero tuition.",
        requirements: {
          gpa: "Enrolled university student at an accredited European or international partner institution.",
          ielts: "English or Italian language proficiency (B1/B2 minimum).",
          gre: "Not required.",
          papers: "Learning Agreement for Traineeship signed by home and host institutions.",
          references: "Home university Erasmus coordinator nomination and academic transcript."
        },
        desc: "Two to six-month structured laboratory traineeships enabling international students to participate in experimental biological, chemical, and physical sciences research at Sapienza's university laboratories."
      },
      {
        id: 115,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design", "computer-science"],
        type: "Fellowship",
        title: "Sapienza Collaborative Student Part-Time Contracts (150-Ore)",
        source: "https://www.uniroma1.it/en/pagina/collaborazioni-studentesche-150-ore",
        funding: "Salaried university employment: €1,095 per 150-hour block (approx. €7.30 to €9.00/hr net) exempt from personal income tax",
        status: "open-position",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Annual university-wide 150-hour student collaboration call)",
        fee: "Free application submitted via Infostud",
        tuition: "Zero tuition; paid student employment.",
        requirements: {
          gpa: "Enrolled Sapienza student who has completed at least 2/5 of required academic credits with good grade average.",
          ielts: "Italian or English working knowledge according to assigned structure.",
          gre: "Not required.",
          papers: "University merit ranking (based on ECTS credits and GPA).",
          references: "Infostud student record enrollment."
        },
        desc: "Official university part-time employment contracts (150 hours total) assisting in university libraries, computer laboratories, museum collections, and international student reception desks across Sapienza campuses."
      }
    ],
    researchers: [
      {
        id: 66,
        subject: "physics",
        name: "Prof. Dr. Giorgio Parisi",
        title: "Nobel Laureate in Physics / Professor Emeritus of Theoretical Physics",
        university: "Sapienza University of Rome",
        country: "Italy",
        topics: ["Statistical Mechanics", "Spin Glasses", "Complex Systems", "Quantum Field Theory", "Flocking Behavior"],
        source: "https://www.phys.uniroma1.it/persone/parisi",
        email: null,
        summary: "Professor Emeritus at Sapienza University of Rome and 2021 Nobel Laureate in Physics for the discovery of the interplay of disorder and fluctuations in physical systems from atomic to planetary scales.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 67,
        subject: "computer-science",
        name: "Prof. Dr. Roberto Navigli",
        title: "Full Professor of Computer Science / Head of Sapienza NLP Group",
        university: "Sapienza University of Rome",
        country: "Italy",
        topics: ["Natural Language Processing", "Multilingual Word Sense Disambiguation", "Knowledge Graphs", "BabelNet", "Neural Language Models"],
        source: "https://www.diag.uniroma1.it/navigli/",
        email: null,
        summary: "Full Professor of Computer Science at Sapienza, creator of BabelNet (the largest multilingual encyclopedic dictionary), two-time ERC grantee, and international leader in lexical semantics and NLP.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 68,
        subject: "engineering",
        name: "Prof. Dr. Alessandro De Luca",
        title: "Full Professor of Robotics and Automation, DIAG",
        university: "Sapienza University of Rome",
        country: "Italy",
        topics: ["Robot Kinematics and Dynamics", "Safe Human-Robot Collaboration", "Visual Servoing", "Collision Detection", "Elastic Joints Robotics"],
        source: "https://www.diag.uniroma1.it/deluca/",
        email: null,
        summary: "Full Professor of Robotics at Sapienza DIAG, IEEE Fellow, pioneer in dynamic modeling of flexible-joint robots, collision detection without external sensors, and safe physical human-robot interaction.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 5. USA: American University (Row 565)
  {
    institution: "American University",
    shortName: "AU",
    countryId: "usa",
    countryLabel: "United States",
    location: "Washington, District of Columbia, USA",
    website: "http://www.american.edu",
    sourceRow: 565,
    slug: "american-university",
    heroEyebrow: "United States · Washington, D.C. · Global Policy & Data Science Leader · Reviewed 14 October 2026",
    headline: "American University (Washington, D.C.)",
    description: "American University guide: Dean's Fellowships (full tuition + $25,000 stipend), MS in Data Science, MA in International Relations, Capitol Hill fellowships, and faculty profiles.",
    overview: "Chartered by an Act of Congress in 1893, American University (AU) is a prestigious private research university in Washington, D.C. AU leverages its strategic capital location to connect research with global policymaking, diplomacy, cybersecurity, and artificial intelligence ethics. Explore verified graduate degrees, fully funded doctoral fellowships, Capitol Hill internships, and distinguished faculty profiles.",
    admissions: {
      masters: "Accredited four-year U.S. Bachelor's degree or international equivalent with minimum cumulative GPA of 3.0 on a 4.0 scale.",
      phd: "Bachelor's or Master's degree in related field with outstanding academic record (minimum 3.5 GPA) and demonstrated research aptitude.",
      language: "Academic IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 100 overall (minimum 22 in each subscore).",
      proposal: "Comprehensive 2-page Statement of Purpose detailing research goals, academic preparation, and faculty alignment in Washington, D.C.",
      appFee: "USD $55 to $100 graduate application fee depending on school/program.",
      documents: "Complete official university transcripts, two to three letters of recommendation, resume / CV, and writing sample."
    },
    tuitionText: "Graduate tuition at American University is charged per credit hour (typically USD $1,972 per credit hour, or approximately USD $35,500 to $45,000 per academic year for master's programs). Competitive doctoral candidates receive Dean's Fellowships providing 100% full tuition coverage plus annual living stipends of $20,000 to $28,000.",
    opportunities: [
      {
        id: 116,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "mathematics"],
        type: "Scholarship",
        title: "American University Dean's Fellowships & Graduate Merit Awards",
        source: "https://www.american.edu/financialaid/graduate-scholarships.cfm",
        funding: "Fully funded: 100% full tuition waiver plus an annual living stipend of USD $20,000 to $28,000 for doctoral and exceptional master's scholars",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Priority scholarship consideration deadline for Fall admission)",
        fee: "USD $55 application fee",
        tuition: "Full graduate tuition completely waived for fellowship recipients.",
        requirements: {
          gpa: "Minimum 3.5 cumulative GPA in previous undergraduate or graduate coursework.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "GRE General Test optional/recommended depending on graduate department.",
          papers: "Demonstrated academic excellence through writing sample or undergraduate thesis.",
          references: "Three academic reference letters submitted electronically via the online portal."
        },
        desc: "AU's top merit fellowship awarded to high-achieving incoming graduate students, providing full tuition coverage and competitive annual living stipends to support full-time research in Washington, D.C."
      },
      {
        id: 117,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "American University PhD in Computer Science",
        source: "https://www.american.edu/cas/mathstat/phd-cs.cfm",
        funding: "Fully funded: 4 to 5-year guaranteed funding package including full tuition remission and USD $26,000 annual living stipend via teaching and research assistantships",
        status: "open-position",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Strict priority funding deadline for Fall semester)",
        fee: "USD $55 application fee",
        tuition: "Zero tuition for funded doctoral candidates.",
        requirements: {
          gpa: "Bachelor's or Master's degree in Computer Science, Mathematics, or Engineering with minimum 3.3 GPA.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "GRE General test scores reviewed holistically.",
          papers: "Statement of research interests, programming sample (GitHub), and academic writing sample.",
          references: "Three academic letters of recommendation evaluating scientific reasoning and research potential."
        },
        desc: "Cutting-edge doctoral research program within the College of Arts and Sciences in Washington, D.C., focusing on artificial intelligence, cybersecurity, machine learning fairness, quantum information, and computer vision."
      },
      {
        id: 118,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Master's",
        title: "American University Master of Science in Data Science",
        source: "https://www.american.edu/cas/mathstat/ms-data-science.cfm",
        funding: "Self-funded; eligible for merit-based partial tuition scholarships ($10,000 to $20,000) and campus assistantships",
        status: "program-information",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Priority Fall deadline; rolling thereafter)",
        fee: "USD $55 application fee",
        tuition: "USD $1,972 per credit hour (30 total credit hours = USD $59,160 total program tuition).",
        requirements: {
          gpa: "Bachelor's degree with minimum 3.0 GPA and foundational coursework in calculus and programming.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "GRE scores optional.",
          papers: "Resume / CV and 2-page statement of purpose explaining professional and analytical objectives.",
          references: "Two academic or professional recommendation letters."
        },
        desc: "Interdisciplinary 30-credit master's program bridging statistical modeling, machine learning algorithms, big data architectures, and ethical data governance with direct access to Washington tech and federal employers."
      },
      {
        id: 119,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "American University Master of Arts in International Relations (SIS)",
        source: "https://www.american.edu/sis/degrees/ma-ir.cfm",
        funding: "Self-funded; eligible for School of International Service merit scholarships and foreign language fellowships",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Priority scholarship round for Fall admission)",
        fee: "USD $55 application fee",
        tuition: "USD $1,972 per credit hour (39 total credit hours = USD $76,908 program tuition).",
        requirements: {
          gpa: "Undergraduate degree with minimum 3.0 GPA and coursework in social sciences, history, or economics.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "GRE General test optional.",
          papers: "Substantive academic writing sample and personal statement of global policy interests.",
          references: "Two academic letters of recommendation."
        },
        desc: "Flagship graduate degree inside AU's world-ranked School of International Service (SIS), preparing students for diplomacy, international security, conflict resolution, and global environmental governance."
      },
      {
        id: 120,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Research",
        title: "American University Center for Data Science & AI Research Placements",
        source: "https://www.american.edu/cas/data-science/",
        funding: "Funded research assistantships supported by NSF grants, federal policy contracts, and university research institutes",
        status: "open-position",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 for Summer/Fall laboratory allocations",
        fee: "Free application directly to affiliated principal investigators",
        tuition: "Zero tuition; paid graduate research position.",
        requirements: {
          gpa: "Enrolled graduate student in Computer Science, Data Science, or Public Policy with 3.3+ GPA.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Experience in Python, statistical modeling, NLP, or algorithmic auditing.",
          references: "Resume, GitHub portfolio, and recommendation from a faculty mentor."
        },
        desc: "Multidisciplinary research appointments investigating ethical artificial intelligence, algorithmic transparency, disinformation detection, and public health data analytics in collaboration with D.C. think tanks."
      },
      {
        id: 121,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Internship",
        title: "American University Washington Semester & Capitol Hill Fellowships",
        source: "https://www.american.edu/spexs/washington-semester-program/",
        funding: "Stipend/Scholarship: Up to USD $5,000 program scholarship and paid agency internship stipends ($17.50 to $22.00/hr)",
        status: "open-position",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 for Fall Washington Semester placement",
        fee: "Free application for enrolled AU students; standard consortium fee for visiting students",
        tuition: "Standard semester tuition applies; internship credits earned toward degree.",
        requirements: {
          gpa: "Enrolled undergraduate (junior/senior) or graduate student with minimum 3.0 GPA.",
          ielts: "Fluent spoken and written English communication.",
          gre: "Not required.",
          papers: "Resume, statement of policy interests, and writing sample.",
          references: "Academic advisor recommendation and home institution clearance."
        },
        desc: "Signature experiential research and policy internship program embedding students inside U.S. Congressional offices, federal departments, international embassies, NGOs, and national media outlets."
      },
      {
        id: 122,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "social-sciences"],
        type: "Fellowship",
        title: "American University Graduate Assistantships (GA / TA / RA)",
        source: "https://www.american.edu/financialaid/graduate-assistantships.cfm",
        funding: "Salaried campus academic employment: USD $18.00 to $24.00 per hour or fixed semester stipend ($10,000/term) plus tuition credit remissions",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for Fall departmental assistantship appointments",
        fee: "Free application through departmental graduate directors",
        tuition: "Tuition remission credits provided alongside hourly wages.",
        requirements: {
          gpa: "Full-time matriculated AU graduate student with minimum 3.0 cumulative GPA.",
          ielts: "High oral English proficiency for tutorial instruction.",
          gre: "Not required.",
          papers: "Outstanding grades in foundational quantitative or policy courses.",
          references: "Departmental recommendation and faculty supervisor approval."
        },
        desc: "Departmental teaching and research assistantships providing tuition credits and competitive hourly stipends for conducting recitation sessions, grading problem sets, and managing scientific lab instruments."
      }
    ],
    researchers: [
      {
        id: 69,
        subject: "computer-science",
        name: "Prof. Dr. Nathalie Japkowicz",
        title: "Professor & Chair of Computer Science, College of Arts and Sciences",
        university: "American University",
        country: "United States",
        topics: ["Machine Learning", "Class Imbalance Learning", "Anomaly Detection", "Concept Drift", "Adversarial Machine Learning"],
        source: "https://www.american.edu/cas/faculty/japkowic.cfm",
        email: null,
        summary: "Professor and Chair of the Department of Computer Science at American University, internationally recognized pioneer in machine learning with imbalanced datasets, anomaly detection, and evaluation methodologies.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 70,
        subject: "mathematics",
        name: "Prof. Dr. Michael Daniel",
        title: "Associate Professor of Mathematics and Statistics",
        university: "American University",
        country: "United States",
        topics: ["Statistical Signal Processing", "Time Series Analysis", "Multiscale Modeling", "Stochastic Processes", "Image Processing"],
        source: "https://www.american.edu/cas/faculty/mdaniel.cfm",
        email: null,
        summary: "Associate Professor of Mathematics and Statistics at American University, expert in multiscale stochastic modeling, statistical signal processing, and time series analysis applied to physical and economic systems.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 71,
        subject: "social-sciences",
        name: "Prof. Dr. Amitav Acharya",
        title: "Distinguished Professor of International Relations & UNESCO Chair",
        university: "American University",
        country: "United States",
        topics: ["Global Governance", "Non-Western International Relations", "Southeast Asian Security", "Constructivism", "Norm Subsidiarity"],
        source: "https://www.american.edu/sis/faculty/aacharya.cfm",
        email: null,
        summary: "Distinguished Professor of International Relations at American University and UNESCO Chair in Transnational Challenges and Governance, former President of the International Studies Association (ISA), and world-renowned scholar of global order.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 6. UK: Imperial College London (Row 1253)
  {
    institution: "Imperial College London",
    shortName: "Imperial",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "London, England, United Kingdom",
    website: "https://www.imperial.ac.uk",
    sourceRow: 1253,
    slug: "imperial-college-london",
    heroEyebrow: "United Kingdom · London · World Top 10 Science & Engineering University · Reviewed 14 October 2026",
    headline: "Imperial College London",
    description: "Imperial College London guide: President's PhD Scholarships (£25,150/yr tax-free), MSc in Advanced Computing, I-X AI research initiative, UROP internships, and world-renowned faculty.",
    overview: "Founded in 1907 in South Kensington, Imperial College London is one of the world's most prestigious universities, consistently ranked among the top 10 globally. Solely focused on science, engineering, medicine, and business, Imperial generates over £1.2 billion in annual income and boasts 14 Nobel laureates. Explore verified graduate degrees, prestigious President's PhD Scholarships, research placements, and world-leading faculty profiles.",
    admissions: {
      masters: "UK First Class or Upper Second Class (2:1) Honours Bachelor's degree or international equivalent (typically 80%+ or 3.5/4.0 GPA) in computing, engineering, mathematics, or physics.",
      phd: "Master's degree with Distinction or First Class Honours Bachelor's degree with demonstrable scientific research ability, publications, or thesis excellence.",
      language: "Imperial Higher College English requirement: Academic IELTS 7.0 overall (minimum 6.5 in all elements) or TOEFL iBT 100 overall (minimum 22 in all sections).",
      proposal: "Concise 2 to 3-page research proposal detailing research hypothesis, novelty, methodology, and identified Imperial academic research group.",
      appFee: "£80 application fee for postgraduate taught master's courses; free application for postgraduate doctoral research (PhD).",
      documents: "Complete official university transcripts, 2 academic reference letters, curriculum vitae, personal statement of purpose, and passport copy."
    },
    tuitionText: "Tuition for postgraduate taught master's programs ranges from £40,000 to £45,000 per year for overseas international students (£18,500 to £22,000 for UK home students). For doctoral researchers, the Imperial President's PhD Scholarships completely cover all tuition fees (home or overseas) and provide an annual tax-free stipend of £25,150 plus £2,000/year consumables funding.",
    opportunities: [
      {
        id: 123,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "chemistry", "mathematics", "biology"],
        type: "Scholarship",
        title: "Imperial College London President's PhD Scholarships",
        source: "https://www.imperial.ac.uk/study/fees-and-funding/postgraduate-doctoral/grants-and-fellowships/presidents-phd-scholarships/",
        funding: "Fully funded: Full tuition fees (home or overseas rate) for 3.5 years, annual tax-free living stipend of £25,150 per year, and £2,000 annual research consumables budget",
        status: "open-scholarship",
        deadline: "2026-11-04",
        deadlineText: "November 4, 2026 (Round 1 deadline for 2027 doctoral entry; Round 2 closes January 8, 2027)",
        fee: "Free application for doctoral research programs",
        tuition: "Full tuition completely covered for the entire 3.5-year duration of the PhD.",
        requirements: {
          gpa: "First Class Honours undergraduate degree (or international equivalent A / 3.8+ GPA) or Master's with Distinction.",
          ielts: "Imperial Higher requirement: IELTS 7.0 overall with minimum 6.5 in all elements.",
          gre: "Not required.",
          papers: "Demonstrated exceptional research potential through published work, pre-prints, or undergraduate thesis.",
          references: "Two academic referee reports submitted directly via the Imperial application portal."
        },
        desc: "Imperial's most prestigious doctoral fellowship awarded to 50 top-tier international and domestic PhD scholars annually, providing comprehensive tuition fee coverage, £25,150/year stipend, and research funding."
      },
      {
        id: 124,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Imperial College PhD in Computing",
        source: "https://www.imperial.ac.uk/computing/prospective-students/courses/phd/",
        funding: "Fully funded: Departmental EPSRC studentships and industry partnerships covering full tuition plus London-weighted stipend (£21,237 to £25,150/yr)",
        status: "open-position",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for main autumn funding allocations",
        fee: "Free application",
        tuition: "Zero tuition for funded students; standard overseas tuition £39,200/year.",
        requirements: {
          gpa: "First Class Honours degree in Computer Science, Mathematics, or closely related field.",
          ielts: "Academic IELTS 7.0 overall (6.5 min band) or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Detailed 2-to-3 page research statement matching Department of Computing research themes.",
          references: "Two strong academic reference letters and endorsement from a potential supervisor."
        },
        desc: "Three to four-year doctoral research program inside Imperial's Department of Computing in South Kensington, investigating Artificial Intelligence, Programming Languages, Autonomous Systems, and Cryptography."
      },
      {
        id: 125,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "Imperial College MSc in Advanced Computing",
        source: "https://www.imperial.ac.uk/study/courses/postgraduate-taught/advanced-computing/",
        funding: "Self-funded; eligible for British Council scholarships and faculty partial tuition awards",
        status: "program-information",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Rolling assessment; early application strongly recommended)",
        fee: "£80 application fee",
        tuition: "£43,250 for overseas international students; £21,500 for UK home students.",
        requirements: {
          gpa: "First Class UK Honours degree in Computer Science or international equivalent with strong mathematics foundation.",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in each section.",
          gre: "Not required.",
          papers: "Extensive background in programming, systems architecture, algorithms, and computational logic.",
          references: "Two academic referee letters from university faculty instructors."
        },
        desc: "Intensive one-year full-time taught master's degree (90 ECTS) providing advanced specialized modules in deep learning, automated reasoning, parallel computing, computer vision, and an individual 3-month research project."
      },
      {
        id: 126,
        subject: "engineering",
        subjects: ["engineering", "biology"],
        type: "Master's",
        title: "Imperial College MSc in Biomedical Engineering",
        source: "https://www.imperial.ac.uk/study/courses/postgraduate-taught/biomedical-engineering/",
        funding: "Self-funded; eligible for Department of Bioengineering merit bursaries (£5,000 to £10,000)",
        status: "program-information",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for Autumn 2027 entry",
        fee: "£80 application processing fee",
        tuition: "£42,800 for international students; £20,500 for UK home students.",
        requirements: {
          gpa: "First Class or 2:1 Honours degree in Engineering, Physical Sciences, or Mathematics.",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in all bands.",
          gre: "Not required.",
          papers: "Coursework mastery of differential equations, mechanics, circuit analysis, and programming.",
          references: "Two academic letters of recommendation and personal statement."
        },
        desc: "World-leading one-year postgraduate master's program offering specialized streams in Biomechanics, Biomaterials, Neurotechnology, and Medical Physics based at Imperial's state-of-the-art White City and South Kensington campuses."
      },
      {
        id: 127,
        subject: "computer-science",
        subjects: ["computer-science", "physics", "engineering"],
        type: "Research",
        title: "Imperial I-X Artificial Intelligence Research Initiative Placements",
        source: "https://ix.imperial.ac.uk/",
        funding: "Funded research positions supported by UKRI Turing Institute grants and industry co-investments",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for collaborative postdoctoral and graduate research intakes",
        fee: "Free application directly to I-X faculty projects",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate degree in Computing, Data Science, or Physical Sciences with distinction.",
          ielts: "Technical English publishing and presentation capability.",
          gre: "Not required.",
          papers: "Demonstrated contributions in machine learning foundations, robotics, or scientific computing.",
          references: "Curriculum vitae, research portfolio, and two academic references."
        },
        desc: "Interdisciplinary artificial intelligence research initiative based at Translation & Innovation Hub (I-HUB) in White City, conducting high-impact research at the intersection of AI, data science, and real-world engineering."
      },
      {
        id: 128,
        subject: "physics",
        subjects: ["physics", "chemistry", "engineering"],
        type: "Internship",
        title: "Imperial Undergraduate Research Opportunities Programme (UROP)",
        source: "https://www.imperial.ac.uk/urop/",
        funding: "Fully funded: Bursary of £410 to £450 per week for 6 to 12 weeks of summer research work inside Imperial laboratories",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual deadline for Summer 2027 project bursary applications)",
        fee: "Free application for enrolled and visiting undergraduate scholars",
        tuition: "Zero tuition; paid student research bursary.",
        requirements: {
          gpa: "Enrolled undergraduate student with minimum 2:1 / First Class predicted grade.",
          ielts: "Fluent working English communication.",
          gre: "Not required.",
          papers: "Agreed project description co-authored with an Imperial College faculty host supervisor.",
          references: "Faculty host endorsement and university academic transcript."
        },
        desc: "Imperial's flagship summer research placement program, enabling students to work directly alongside leading researchers on live scientific research investigations for 6 to 12 weeks."
      },
      {
        id: 129,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "physics"],
        type: "Fellowship",
        title: "Imperial Graduate Teaching Assistantships (GTA Pathway)",
        source: "https://www.imperial.ac.uk/human-resources/pay-and-benefits/pay/hourly-rates/",
        funding: "Salaried academic employment: £22.50 to £29.75 per hour for laboratory demonstrating, problem class tutoring, and coursework marking",
        status: "open-position",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 for upcoming Autumn term teaching allocations",
        fee: "Free application via department GTA administrators",
        tuition: "Zero tuition; hourly salaried university employment.",
        requirements: {
          gpa: "Registered postgraduate doctoral researcher (PhD student) at Imperial College London.",
          ielts: "High level spoken English communication for classroom teaching.",
          gre: "Not required.",
          papers: "Satisfactory completion of Imperial GTA training workshops (EDREC).",
          references: "Approval from PhD primary research supervisor."
        },
        desc: "Departmental academic tutoring positions for enrolled doctoral researchers, providing pedagogical training and hourly remuneration for supervising undergraduate lab classes, leading problem sessions, and grading exams."
      }
    ],
    researchers: [
      {
        id: 72,
        subject: "computer-science",
        name: "Prof. Dr. Nick Jennings CB FREng",
        title: "Professor of Artificial Intelligence / Department of Computing",
        university: "Imperial College London",
        country: "United Kingdom",
        topics: ["Multi-Agent Systems", "Artificial Intelligence", "Autonomous Systems", "Human-AI Teaming", "Decentralized Systems"],
        source: "https://www.imperial.ac.uk/people/n.jennings",
        email: null,
        summary: "Professor of Artificial Intelligence at Imperial College London, Fellow of the Royal Academy of Engineering, international pioneer in multi-agent systems, and former Regius Professor of Computer Science.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 73,
        subject: "engineering",
        name: "Prof. Dr. Molly Stevens DBE FREng FRS",
        title: "Professor of Biomedical Materials and Regenerative Medicine",
        university: "Imperial College London",
        country: "United Kingdom",
        topics: ["Biomaterials", "Tissue Engineering", "Biosensing Nanotechnology", "Regenerative Medicine", "Drug Delivery"],
        source: "https://www.imperial.ac.uk/people/m.stevens",
        email: null,
        summary: "Professor of Biomedical Materials and Regenerative Medicine at Imperial, Fellow of the Royal Society and Royal Academy of Engineering, Dame Commander of the Order of the British Empire (DBE), and world leader in nanotechnology-based disease diagnostics.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 74,
        subject: "physics",
        name: "Prof. Dr. Claudia de Rham",
        title: "Professor of Theoretical Physics / Blackett Laboratory",
        university: "Imperial College London",
        country: "United Kingdom",
        topics: ["Theoretical Cosmology", "Massive Gravity", "General Relativity", "Dark Energy", "Quantum Field Theory"],
        source: "https://www.imperial.ac.uk/people/c.de-rham",
        email: null,
        summary: "Professor of Theoretical Physics at Imperial College London, co-creator of the de Rham-Gabadadze-Tolley (dRGT) massive gravity theory, recipient of the Breakthrough New Horizons in Physics Prize, and Simons Foundation Investigator.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 7. JAPAN: The University of Tokyo (Row 1759)
  {
    institution: "The University of Tokyo",
    shortName: "Todai",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Bunkyo, Tokyo, Japan",
    website: "https://www.u-tokyo.ac.jp/ja/index.html",
    sourceRow: 1759,
    slug: "the-university-of-tokyo",
    heroEyebrow: "Japan · Tokyo · Premier Imperial University · Reviewed 14 October 2026",
    headline: "The University of Tokyo (東京大学 - Todai)",
    description: "The University of Tokyo guide: Todai Fellowship (¥200,000/mo + tuition waiver), GSGC physics track, Amgen scholars, salaried assistantships, and Nobel laureate faculty.",
    overview: "Established in 1877 as Japan's first imperial university, The University of Tokyo (Todai) is consistently ranked as Japan's #1 university and among the top institutions across Asia. Todai has produced 17 Prime Ministers of Japan, 16 Nobel laureates, and 3 Fields Medalists. Across its Hongo, Komaba, and Kashiwa campuses, Todai conducts frontier research in physics, computer science, robotics, and biomedical chemistry. Explore verified English-medium degrees, Todai fellowships, summer internships, and distinguished faculty profiles.",
    admissions: {
      masters: "Completion of 16 years of formal education culminating in an accredited Bachelor's degree (or equivalent 4-year undergraduate diploma) in a relevant technical field.",
      phd: "Recognized Master's degree or professional degree with demonstrated research accomplishments, publications, or Master's thesis of superior academic merit.",
      language: "Demonstrated English proficiency: Academic IELTS 7.0 overall or TOEFL iBT 90+ for English-language graduate degree tracks (e.g., GSGC, IME, IPADS).",
      proposal: "Comprehensive 2 to 3-page research proposal (研究計画書) outlining the intended academic research theme, methodology, and identified faculty supervisor.",
      appFee: "¥10,000 to ¥30,000 application examination fee depending on graduate school and international applicant category.",
      documents: "Graduation certificate, official university academic transcripts with grading rubric, statement of purpose, two letters of recommendation, and passport scan."
    },
    tuitionText: "Under Japanese national university regulations, annual tuition is standard across all faculties at ¥535,800 per year (approx. USD $3,600), plus a one-time matriculation fee of ¥282,000. Recipient scholars of the University of Tokyo Fellowship (Todai Fellowship) or Japanese Government MEXT scholarship receive 100% full tuition exemption plus monthly living allowances of ¥200,000.",
    opportunities: [
      {
        id: 130,
        subject: "physics",
        subjects: ["physics", "computer-science", "engineering", "chemistry", "mathematics", "biology"],
        type: "Scholarship",
        title: "University of Tokyo Fellowship (Todai Fellowship)",
        source: "https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html",
        funding: "Fully funded: Monthly living stipend of ¥200,000 per month (¥2,400,000 per year) plus 100% full tuition and admission fee exemption for up to three years of doctoral research",
        status: "open-scholarship",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Application deadline for Autumn 2027 doctoral enrollment)",
        fee: "¥10,000 screening fee",
        tuition: "Full tuition completely waived under the Todai Fellowship system.",
        requirements: {
          gpa: "Demonstrated top-tier academic record in prior undergraduate and Master's degree studies.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 90+.",
          gre: "Recommended for international applicants outside Japan.",
          papers: "Master's research thesis or peer-reviewed publications demonstrating independent research capability.",
          references: "Two letters of recommendation from university academic mentors."
        },
        desc: "The University of Tokyo's premier international doctoral fellowship, providing full tuition and admission fee exemptions plus ¥200,000 per month to outstanding privately financed international PhD students."
      },
      {
        id: 131,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Todai PhD in Information Science and Technology",
        source: "https://www.i.u-tokyo.ac.jp/edu/entra/index_e.shtml",
        funding: "Fully funded: Eligible for JST SPRING fellowships (¥2,900,000/yr) and departmental research assistantships",
        status: "open-position",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026 for Autumn intake (Special English Program for International Students)",
        fee: "¥30,000 examination fee",
        tuition: "¥535,800 per year (tuition exemption available based on academic merit).",
        requirements: {
          gpa: "Master's degree in Computer Science, Electrical Engineering, or Mathematical Informatics with high marks.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 90+.",
          gre: "General test scores accepted.",
          papers: "Master's research thesis and 3-page doctoral research proposal matching faculty research laboratories.",
          references: "Prior contact and informal acceptance letter from a graduate faculty supervisor."
        },
        desc: "Three-year doctoral curriculum inside the Graduate School of Information Science and Technology at Hongo campus, offering world-class research in computer science, mathematical informatics, and intelligent systems."
      },
      {
        id: 132,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Todai Master of Science in Computer Science",
        source: "https://www.is.s.u-tokyo.ac.jp/en/",
        funding: "Self-funded; eligible for MEXT University Recommendation scholarships and Todai tuition exemptions",
        status: "program-information",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026 (International admissions round for October 2027 entry)",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per year plus one-time admission fee of ¥282,000.",
        requirements: {
          gpa: "Four-year Bachelor's degree in Computer Science, Mathematics, or closely related quantitative discipline.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 90+.",
          gre: "GRE General test recommended.",
          papers: "Strong coursework background in algorithms, discrete mathematics, computer architecture, and systems.",
          references: "Two letters of academic recommendation and official transcripts."
        },
        desc: "Two-year English-medium research Master's degree inside the Department of Computer Science, focusing on theoretical foundations, programming languages, computer systems, and machine learning."
      },
      {
        id: 133,
        subject: "physics",
        subjects: ["physics", "chemistry", "mathematics"],
        type: "Master's",
        title: "Todai Global Science Graduate Course (GSGC) in Physics",
        source: "https://www.s.u-tokyo.ac.jp/en/GSGC/",
        funding: "Fully funded: Monthly scholarship of ¥180,000 per month for the full five-year integrated Master's and PhD program plus full tuition waiver",
        status: "open-scholarship",
        deadline: "2026-11-25",
        deadlineText: "November 25, 2026 (Annual deadline for Autumn 2027 enrollment)",
        fee: "Free application",
        tuition: "Full tuition completely waived under the GSGC course agreement.",
        requirements: {
          gpa: "Bachelor of Science degree in Physics or related physical sciences with top academic performance.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 90+.",
          gre: "GRE Physics subject test strongly recommended.",
          papers: "Demonstrated foundational mastery in quantum mechanics, statistical physics, and analytical mechanics.",
          references: "Two academic referee evaluation forms submitted online."
        },
        desc: "Integrated five-year Master's and doctoral program in the Graduate School of Science, conducted entirely in English and offering monthly living stipends of ¥180,000 and complete tuition fee exemptions."
      },
      {
        id: 134,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Research",
        title: "Todai Institute for Cosmic Ray Research (ICRR) Collaborative Placements",
        source: "https://www.icrr.u-tokyo.ac.jp/en/",
        funding: "Funded research projects supported by the Ministry of Education, Culture, Sports, Science and Technology (MEXT) and KAGRA collaboration",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for collaborative project allocations",
        fee: "Free application directly to affiliated laboratory professors",
        tuition: "Zero tuition; funded experimental research placement.",
        requirements: {
          gpa: "Graduate student in Physics, Astronomy, or Astrophysics with strong mathematical background.",
          ielts: "Technical English fluency for international collaboration.",
          gre: "Not required.",
          papers: "Experience in particle physics data analysis, cryogenic sensors, or detector electronics.",
          references: "CV, university transcript, and supervisor endorsement."
        },
        desc: "World-leading experimental research placements inside Todai ICRR in Kashiwa, participating in neutrino oscillation experiments at Super-Kamiokande, gravitational wave detection at KAGRA, and high-energy gamma-ray astronomy."
      },
      {
        id: 135,
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Internship",
        title: "University of Tokyo Amgen Scholars Summer Research Program",
        source: "https://www.u-tokyo.ac.jp/en/prospective-students/amgen_program.html",
        funding: "Fully funded: Living stipend of ¥250,000, free university accommodation, round-trip economy airfare to Tokyo, and scientific symposium travel",
        status: "open-position",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Strict international deadline for Summer 2027 program)",
        fee: "Free application",
        tuition: "Zero tuition; fully sponsored 8-week summer internship.",
        requirements: {
          gpa: "Enrolled undergraduate student at an accredited university worldwide who has completed at least one year of study with 3.2+ GPA.",
          ielts: "Fluent working English communication.",
          gre: "Not required.",
          papers: "Statement of purpose detailing biotechnology/chemical research interests and target laboratory preferences.",
          references: "Two academic letters of recommendation and official transcript."
        },
        desc: "Prestigious eight-week summer research program (June–August) offering undergraduate scholars from around the world direct laboratory research apprenticeships under Todai faculty in molecular biology, chemistry, and bioengineering."
      },
      {
        id: 136,
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering", "computer-science"],
        type: "Fellowship",
        title: "Todai Research Assistantships (RA) & Teaching Assistantships (TA)",
        source: "https://www.u-tokyo.ac.jp/en/current-students/scholarships.html",
        funding: "Salaried campus employment: ¥1,300 to ¥2,000 per hour (approx. ¥60,000 to ¥100,000 per month) assisting in laboratory investigations and course instruction",
        status: "open-position",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027 for Spring semester appointments",
        fee: "Free application through department administration",
        tuition: "Zero tuition; hourly salaried university employment.",
        requirements: {
          gpa: "Enrolled graduate student at The University of Tokyo in good academic standing.",
          ielts: "English or Japanese language proficiency matching the laboratory or lecture needs.",
          gre: "Not required.",
          papers: "Excellence in coursework relevant to assigned laboratory tasks.",
          references: "Approval from laboratory supervising professor."
        },
        desc: "University employment opportunities for enrolled Master's and PhD students providing financial assistance for assisting in seminar instruction, computer lab supervision, and experimental research projects."
      }
    ],
    researchers: [
      {
        id: 75,
        subject: "physics",
        name: "Prof. Dr. Takaaki Kajita",
        title: "Nobel Laureate in Physics / Special University Professor, ICRR",
        university: "The University of Tokyo",
        country: "Japan",
        topics: ["Neutrino Physics", "Super-Kamiokande", "Atmospheric Neutrino Oscillations", "Gravitational Wave Detection", "KAGRA Observatory"],
        source: "https://www.icrr.u-tokyo.ac.jp/en/",
        email: null,
        summary: "Special University Professor at The University of Tokyo, Director of the Institute for Cosmic Ray Research (ICRR), and 2015 Nobel Laureate in Physics for the discovery of neutrino oscillations showing that neutrinos have mass.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 76,
        subject: "chemistry",
        name: "Prof. Dr. Hiroaki Suga",
        title: "Professor of Chemistry / School of Science",
        university: "The University of Tokyo",
        country: "Japan",
        topics: ["Chemical Biology", "RaPID System", "Ribozymes", "Peptidomimetic Therapeutics", "Pseudo-Natural Peptides"],
        source: "https://park.itc.u-tokyo.ac.jp/suga/",
        email: null,
        summary: "Professor of Chemistry at The University of Tokyo, 2023 Wolf Prize in Chemistry recipient, inventor of the RaPID system for de novo discovery of macrocyclic peptides, and pioneer in synthetic bio-organic chemistry.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 77,
        subject: "computer-science",
        name: "Prof. Dr. Masashi Sugiyama",
        title: "Professor of Computer Science & Director of RIKEN AIP",
        university: "The University of Tokyo",
        country: "Japan",
        topics: ["Statistical Machine Learning", "Weakly Supervised Learning", "Covariate Shift Adaptation", "Density Ratio Estimation", "Deep Learning Theory"],
        source: "https://msugiyama.github.io/",
        email: null,
        summary: "Professor in the Department of Complexity Science and Engineering at The University of Tokyo and Director of the RIKEN Center for Advanced Intelligence Project (AIP), leading world-class research in weakly supervised machine learning.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 8. SWEDEN: KTH Royal Institute of Technology (Row 1584)
  {
    institution: "KTH Royal Institute of Technology",
    shortName: "KTH",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Stockholm, Sweden",
    website: "http://www.kth.se",
    sourceRow: 1584,
    slug: "kth-royal-institute-of-technology",
    heroEyebrow: "Sweden · Stockholm · Europe's Leading Technical University · Reviewed 14 October 2026",
    headline: "KTH Royal Institute of Technology (Kungliga Tekniska högskolan)",
    description: "KTH Royal Institute of Technology guide: KTH full tuition scholarships, salaried PhD employment (SEK 32,500/mo), MSc in Machine Learning, and world-class faculty profiles.",
    overview: "Established in 1827 in Stockholm, KTH Royal Institute of Technology is Sweden's oldest and largest technical university, responsible for one-third of Sweden's technical research and engineering education. Ranked among the top 10 engineering universities in Europe, KTH excels in Computer Science, Machine Learning, Telecommunications, Electromagnetics, and Sustainable Energy. Review verified English-taught Master's degrees, salaried doctoral positions, and faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree in Engineering, Computer Science or related quantitative field (minimum 180 ECTS credits), with a documented undergraduate degree thesis project.",
      phd: "Completed second-cycle Master's degree (minimum 120 ECTS) in relevant subject area satisfying Swedish third-cycle admission criteria, with demonstrable scientific publication or thesis excellence.",
      language: "Demonstrated English proficiency equivalent to Swedish upper secondary school English 6: Academic IELTS 6.5 overall (minimum 5.5 in each section) or TOEFL iBT 90 overall (writing minimum 20).",
      proposal: "For Master's: statement of purpose, CV, and university transcripts via University Admissions Sweden. For PhD: comprehensive research statement matching specific advertised doctoral vacancies.",
      appFee: "SEK 900 centralized application fee for non-EU/EEA students applying through University Admissions Sweden (waived for EU/EEA citizens).",
      documents: "Degree certificate, complete official transcripts with grading rubric, English proficiency test score, and copy of valid passport."
    },
    tuitionText: "Under Swedish higher education law, EU/EEA and Swiss citizens study completely tuition-free. For non-EU/EEA international students, tuition for master's programs is SEK 80,000 to SEK 95,000 per semester (approx. SEK 320,000 to SEK 380,000 for a two-year 120 ECTS program). The KTH Scholarship Programme covers 100% of tuition fees for outstanding admitted Master's candidates. Doctoral candidates hold salaried employment contracts and study tuition-free.",
    opportunities: [
      {
        id: 137,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "mathematics"],
        type: "Scholarship",
        title: "KTH Scholarship Programme for Master's Studies",
        source: "https://www.kth.se/en/studies/master/scholarships/kth-scholarship-1.72827",
        funding: "Fully funded: 100% full tuition fee waiver for the entire two-year duration of the Master's programme (saving up to SEK 380,000)",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Swedish national autumn admission round 1 deadline)",
        fee: "SEK 900 University Admissions Sweden application fee",
        tuition: "Full tuition completely waived for the 1st and 2nd academic year.",
        requirements: {
          gpa: "Outstanding academic marks in completed undergraduate Bachelor's degree (grade average equivalent to top 10%).",
          ielts: "Swedish English 6 equivalent (IELTS 6.5 overall with minimum 5.5 in each band) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic motivation, extracurricular leadership, and sustainability focus.",
          references: "Letters of academic recommendation, motivation statement, and curriculum vitae."
        },
        desc: "KTH's premier merit-based scholarship covering full tuition fees for outstanding non-EU/EEA international students admitted to two-year Master's degree programs at KTH Royal Institute of Technology."
      },
      {
        id: 138,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "KTH Salaried Doctoral Student Employment (Doktorandanställning)",
        source: "https://www.kth.se/en/om/work-at-kth/phd-1.572201",
        funding: "Fully funded: Four-year salaried university employment under Swedish state collective agreements starting from SEK 32,500/month rising to SEK 38,000/month gross, with full Swedish social benefits and pension",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Departmental vacancy intake; verify individual active job call)",
        fee: "Free application directly to advertised vacancy",
        tuition: "Zero tuition. Appointed PhD candidates are salaried Swedish university employees.",
        requirements: {
          gpa: "Master of Science degree (120 ECTS) in Computer Science, Electrical Engineering, or related quantitative field.",
          ielts: "Swedish English 6 proficiency (IELTS 6.5+ or university-level English instruction verification).",
          gre: "Not required.",
          papers: "Master's research thesis or peer-reviewed publication in software, control, or machine learning.",
          references: "Two academic reference letters, research statement, and complete transcripts."
        },
        desc: "Four-year salaried doctoral research appointments across KTH research divisions, combining cutting-edge scientific investigation with teaching duties under standard Swedish employment contracts and comprehensive health coverage."
      },
      {
        id: 139,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "KTH Master of Science in Machine Learning",
        source: "https://www.kth.se/en/studies/master/machine-learning",
        funding: "Self-funded; eligible for KTH Scholarships (full tuition waiver) and Swedish Institute (SI) scholarships",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Autumn 2027 entry",
        fee: "SEK 900 centralized application fee",
        tuition: "SEK 80,000 per semester (SEK 320,000 total 2-year tuition for non-EU students; free for EU/EEA).",
        requirements: {
          gpa: "Bachelor's degree with major in Computer Science or Mathematics with strong grades in linear algebra, probability, and algorithms.",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each section).",
          gre: "Not required.",
          papers: "Curriculum vitae and detailed summary of undergraduate mathematics and programming modules.",
          references: "Official university transcripts, degree certificate, and passport copy."
        },
        desc: "World-renowned two-year English-taught Master's program (120 ECTS) covering deep learning, probabilistic graphical models, computer vision, reinforcement learning, and an individual 30-ECTS degree thesis."
      },
      {
        id: 140,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        title: "KTH Master of Science in Sustainable Energy Engineering",
        source: "https://www.kth.se/en/studies/master/sustainable-energy-engineering",
        funding: "Self-funded; eligible for KTH scholarships, InnoEnergy fellowships, and Swedish research bursaries",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Autumn entry",
        fee: "SEK 900 application fee",
        tuition: "SEK 80,000 per semester (SEK 320,000 total for non-EU international students).",
        requirements: {
          gpa: "Bachelor of Science in Mechanical, Chemical, or Electrical Engineering with solid thermodynamics background.",
          ielts: "Academic IELTS 6.5 overall with minimum 5.5 in all bands.",
          gre: "Not required.",
          papers: "Demonstrated coursework background in heat transfer, fluid dynamics, and energy systems analysis.",
          references: "Complete academic transcripts, motivation letter, and CV."
        },
        desc: "Interdisciplinary two-year Master's degree (120 ECTS) in advanced renewable energy integration, turbomachinery, solar-thermal power, energy policy, and polygeneration systems."
      },
      {
        id: 141,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Research",
        title: "KTH Electrum Laboratory and Digital Futures Research Pathways",
        source: "https://www.digitalfutures.kth.se/",
        funding: "Funded research projects supported by the Swedish Research Council (VR), Vinnova, and Digital Futures grants",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for collaborative seed projects",
        fee: "Free application directly to project directors",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate degree in Electrical Engineering, Applied Physics, or Computer Science with distinction.",
          ielts: "Technical English fluency for international collaboration.",
          gre: "Not required.",
          papers: "Prior experience in semiconductor cleanroom fabrication, networked control, or IoT systems.",
          references: "Academic curriculum vitae, publication list, and two referee contacts."
        },
        desc: "High-impact interdisciplinary research environment uniting KTH, Stockholm University, and RISE to investigate smart societies, cyber-physical control systems, and microelectronics at the Electrum cleanroom."
      },
      {
        id: 142,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Internship",
        title: "KTH Summer Research Internships & ERASMUS+ Placements",
        source: "https://www.kth.se/en/studies/exchange",
        funding: "Fully funded: Erasmus+ mobility stipend (€450 to €650 per month) plus university research hosting facilities",
        status: "open-position",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 for upcoming Summer/Autumn laboratory placements",
        fee: "Free enrollment under exchange agreements",
        tuition: "Zero tuition.",
        requirements: {
          gpa: "Enrolled university student at an accredited European or international partner university.",
          ielts: "English language proficiency at CEFR B2 level (IELTS 6.5 equivalent).",
          gre: "Not required.",
          papers: "Signed Erasmus+ Learning Agreement for Traineeships or project proposal.",
          references: "Home university exchange coordinator approval and transcript."
        },
        desc: "Two to six-month structured research traineeships inside KTH research laboratories in photonics, applied physics, materials science, and robotics."
      },
      {
        id: 143,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "engineering"],
        type: "Fellowship",
        title: "KTH Teaching Assistantships & Student Laboratory Coaching",
        source: "https://www.kth.se/en/student/studier/jobb",
        funding: "Salaried hourly university employment: SEK 165 to SEK 210 per hour for supervising exercise classes, coding labs, and grading assignments",
        status: "open-position",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 for upcoming Autumn semester course assistantships",
        fee: "Free application via KTH course coordinators",
        tuition: "Zero tuition; paid student employment.",
        requirements: {
          gpa: "Enrolled Master's or doctoral student at KTH in good academic standing.",
          ielts: "Proficiency in English or Swedish depending on the target course instruction language.",
          gre: "Not required.",
          papers: "High academic grade in the assigned course module.",
          references: "Approval from course examiner and director of studies."
        },
        desc: "Campus employment positions (övningsassistenter / labbassistenter) enabling graduate students to tutor weekly recitation sessions, mentor programming workshops, and assist in grading laboratory exams."
      }
    ],
    researchers: [
      {
        id: 78,
        subject: "computer-science",
        name: "Prof. Dr. Danica Kragic Jensfelt",
        title: "Professor of Computer Science / Director of Centre for Autonomous Systems",
        university: "KTH Royal Institute of Technology",
        country: "Sweden",
        topics: ["Computer Vision", "Robotic Manipulation", "Autonomous Systems", "Object Grasping", "Machine Learning for Robotics"],
        source: "https://www.kth.se/profile/dani",
        email: null,
        summary: "Professor of Computer Science at KTH and Director of the Centre for Autonomous Systems (CAS), IEEE Fellow, member of the Royal Swedish Academy of Sciences, and global leader in robotic vision and manipulation.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 79,
        subject: "biology",
        name: "Prof. Dr. Joakim Lundeberg",
        title: "Professor of Gene Technology / SciLifeLab Division Head",
        university: "KTH Royal Institute of Technology",
        country: "Sweden",
        topics: ["Spatial Transcriptomics", "Genomics", "Single-Cell Sequencing", "Molecular Diagnostics", "Cancer Biology"],
        source: "https://www.kth.se/profile/joakiml",
        email: null,
        summary: "Professor of Gene Technology at KTH and Head of the Genomics Division at Science for Life Laboratory (SciLifeLab), internationally recognized co-inventor of Spatial Transcriptomics technology.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 80,
        subject: "engineering",
        name: "Prof. Dr. Karl Henrik Johansson",
        title: "Professor of Networked Control Systems & Director of Digital Futures",
        university: "KTH Royal Institute of Technology",
        country: "Sweden",
        topics: ["Networked Control Systems", "Cyber-Physical Systems", "Autonomous Vehicle Platooning", "Smart Cities", "Hybrid Systems"],
        source: "https://www.kth.se/profile/kallej",
        email: null,
        summary: "Professor in the School of Electrical Engineering and Computer Science at KTH and Director of Digital Futures, IEEE Fellow, and recipient of the IEEE Control Systems Society Distinguished Member Award.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 9. NETHERLANDS: Eindhoven University of Technology (Row 1403)
  {
    institution: "Eindhoven University of Technology",
    shortName: "TU/e",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Eindhoven, North Brabant, Netherlands",
    website: "https://www.tue.nl",
    sourceRow: 1403,
    slug: "eindhoven-university-of-technology",
    heroEyebrow: "Netherlands · North Brabant · Brainport High-Tech Innovation Leader · Reviewed 14 October 2026",
    headline: "Eindhoven University of Technology (Technische Universiteit Eindhoven - TU/e)",
    description: "Eindhoven University of Technology guide: ALSP scholarships (full tuition + €5,000 grant), salaried CAO-NU PhD positions (€2,872–€3,670/mo), MSc in Embedded Systems, and faculty.",
    overview: "Founded in 1956, Eindhoven University of Technology (TU/e) is a top-tier European research university located in the heart of Brainport Eindhoven—Europe's foremost high-tech innovation ecosystem. TU/e collaborates intimately with industrial giants including ASML, Philips, and NXP. TU/e leads the world in Embedded Systems, Process Mining, Nanotechnology, and Precision Robotics. Review verified Master's curricula, salaried doctoral employment, Brainport internships, and distinguished faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree in Engineering, Computer Science or related quantitative field (minimum 180 ECTS credits) matching specific foundational course requirements.",
      phd: "Recognized Master of Science degree (120 ECTS) with excellent academic marks, strong thesis research evidence, and successful competitive interview for an advertised doctoral vacancy.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall (minimum 6.0 in all subscores) or TOEFL iBT 90 overall (minimum 21 in each component).",
      proposal: "For Master's: statement of purpose and academic transcripts via Studielink. For PhD: comprehensive research statement aligned with advertised vacancy calls.",
      appFee: "€100 application fee for international applicants holding non-Dutch degrees (refunded upon successful matriculation).",
      documents: "Complete official transcripts, degree certificate, detailed descriptions of core undergraduate mathematics/programming modules, curriculum vitae, and passport scan."
    },
    tuitionText: "Under Dutch national higher education regulations, EU/EEA students pay the statutory tuition fee of €2,530 per year. For non-EU/EEA international students, tuition is approximately €18,000 per year for Master's programs. Outstanding admitted international students can receive the ALSP (Amandus H. Lundqvist Scholarship Program), covering 100% of tuition fees plus a €5,000 living allowance grant. Doctoral candidates (Promovendi) are paid university employees under the Dutch CAO-NU collective agreement.",
    opportunities: [
      {
        id: 144,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "chemistry"],
        type: "Scholarship",
        title: "TU/e ALSP (Amandus H. Lundqvist Scholarship Program)",
        source: "https://www.tue.nl/en/education/become-a-tue-student/scholarships-and-grants/amandus-h-lundqvist-scholarship-program",
        funding: "Fully funded: Full tuition fee waiver (€18,000 per year) plus €5,000 per year contribution to living expenses for both years of the Master's programme",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Strict annual deadline for international ALSP scholarship consideration)",
        fee: "€100 application fee (refunded upon matriculation)",
        tuition: "Full tuition completely waived for the entire two-year 120 ECTS duration.",
        requirements: {
          gpa: "Graduation with cumulative grade point average (CGPA) of at least 80% or equivalent to first class honors.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all sections) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and curriculum vitae.",
          references: "Two academic referee letters submitted directly through the online admission portal."
        },
        desc: "Prestigious university scholarship awarded to outstanding non-EU/EEA international students admitted to Master's degree programs at TU/e, providing full tuition waiver and annual living allowance grants."
      },
      {
        id: 145,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "TU/e Salaried PhD Positions (Promovendi under CAO-NU)",
        source: "https://www.tue.nl/en/working-at-tue/phd-and-engd",
        funding: "Fully funded: Four-year salaried university employment under Collective Labour Agreement for Dutch Universities (CAO-NU) starting at €2,872/month in year 1 rising to €3,670/month in year 4 gross, plus 8% holiday allowance and 8.3% end-of-year bonus",
        status: "open-position",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Continuous rolling recruitment across TU/e research departments)",
        fee: "Free application directly to open vacancy",
        tuition: "Zero tuition. PhD candidates are paid university staff members with comprehensive Dutch health and pension benefits.",
        requirements: {
          gpa: "Master of Science degree (120 ECTS) in Computer Science, Electrical Engineering, or Physics with high marks.",
          ielts: "Fluent technical English communication for international collaboration and scientific publishing.",
          gre: "Not required.",
          papers: "Master's research thesis or peer-reviewed conference publications.",
          references: "Curriculum vitae, research portfolio, and two academic referee contacts."
        },
        desc: "Four-year salaried doctoral research appointments across TU/e departments, conducting frontier industrial and fundamental investigations under standard Dutch collective employment contracts."
      },
      {
        id: 146,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "TU/e Master of Science in Computer Science and Engineering",
        source: "https://www.tue.nl/en/education/graduate-school/master-computer-science-and-engineering",
        funding: "Self-funded; eligible for ALSP scholarships, Holland Scholarships, and student tutoring positions",
        status: "program-information",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (February 1 for ALSP scholarship applicants)",
        fee: "€100 application fee",
        tuition: "€18,000 per year for non-EU students; €2,530 per year for EU/EEA students.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science with solid grounding in discrete mathematics, algorithms, and software design.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Curriculum vitae and course descriptions mapping completed modules to TU/e bachelor prerequisites.",
          references: "Official university transcripts and degree certificates."
        },
        desc: "Two-year Master of Science degree (120 ECTS) in the Department of Mathematics and Computer Science, offering specializations in Algorithms, Software Science, Big Data, and Information Security."
      },
      {
        id: 147,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "TU/e Master of Science in Embedded Systems",
        source: "https://www.tue.nl/en/education/graduate-school/master-embedded-systems",
        funding: "Self-funded; eligible for Brainport industrial scholarships and ALSP fee waivers",
        status: "program-information",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 for Autumn intake",
        fee: "€100 application fee",
        tuition: "€18,000 per year for non-EU international students.",
        requirements: {
          gpa: "Bachelor's degree in Electrical Engineering, Computer Science, or Embedded Systems with high marks.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated coursework background in digital circuit design, microcontrollers, real-time systems, and C/C++.",
          references: "Complete university academic transcripts and syllabus descriptions."
        },
        desc: "Specialized two-year Master's degree (120 ECTS) partnering closely with ASML, Philips, and NXP to engineer real-time cyber-physical systems, FPGA hardware, and autonomous embedded controllers."
      },
      {
        id: 148,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Research",
        title: "TU/e Eindhoven Artificial Intelligence Systems Institute (EAISI) Projects",
        source: "https://www.tue.nl/en/research/institutes/eindhoven-artificial-intelligence-systems-institute/",
        funding: "Funded research projects supported by NWO (Dutch Research Council) and Brainport industry co-funding",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for multidisciplinary laboratory positions",
        fee: "Free application directly to affiliated EAISI researchers",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate student in Computer Science, Data Science, or Robotics with distinction.",
          ielts: "Technical English fluency.",
          gre: "Not required.",
          papers: "Demonstrated skills in deep learning, neuromorphic computing, or autonomous machines.",
          references: "CV, GitHub code repository, and academic reference."
        },
        desc: "Cutting-edge artificial intelligence institute connecting engineering and computer science, developing engineering AI, edge intelligence chips, autonomous driving software, and trustworthy healthcare algorithms."
      },
      {
        id: 149,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Internship",
        title: "TU/e Brainport High-Tech Academic & Industrial Internships",
        source: "https://www.tue.nl/en/our-university/collaborating-with-tue/brainport-eindhoven/",
        funding: "Salaried internship: €800 to €1,200 per month for 3-to-6-month graduation research internships directly embedded with ASML, Philips, NXP, or TNO",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for upcoming semester graduation internships",
        fee: "Free enrollment for admitted students",
        tuition: "Included in enrolled degree curriculum; monthly compensation paid by company/lab.",
        requirements: {
          gpa: "Enrolled Master's student at TU/e with completion of first-year core modules.",
          ielts: "Working English communication.",
          gre: "Not required.",
          papers: "Resume / CV and technical project portfolio.",
          references: "Approval from TU/e master thesis supervisor."
        },
        desc: "Industrial and academic graduation research internships embedding graduate engineers within the semiconductor and precision engineering facilities of ASML, Philips, NXP, and TNO."
      },
      {
        id: 150,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "engineering"],
        type: "Fellowship",
        title: "TU/e Graduate Student Assistantships (Student-Assistenten)",
        source: "https://www.tue.nl/en/working-at-tue/student-assistants/",
        funding: "Salaried hourly campus employment: €16.20 to €21.50 per hour under Dutch university collective agreements",
        status: "open-position",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 for upcoming academic year tutoring positions",
        fee: "Free application through departmental student assistant coordinators",
        tuition: "Zero tuition; hourly salaried university employment.",
        requirements: {
          gpa: "Matriculated student at TU/e in good standing who has passed the relevant course with high grade (7.5+ / 10).",
          ielts: "English language proficiency for classroom instruction.",
          gre: "Not required.",
          papers: "Course transcript showing strong performance in underlying subjects.",
          references: "Recommendation from course instructor or department teaching coordinator."
        },
        desc: "Part-time campus employment for enrolled students coaching exercise sessions, running computer laboratory sessions, and assisting faculty in grading assignments."
      }
    ],
    researchers: [
      {
        id: 81,
        subject: "computer-science",
        name: "Prof. Dr. Wil van der Aalst",
        title: "Distinguished Professor Emeritus & Chief Scientist of Celonis",
        university: "Eindhoven University of Technology",
        country: "Netherlands",
        topics: ["Process Mining", "Business Process Management", "Data Science", "Petri Nets", "Process Automation"],
        source: "https://www.tue.nl/en/research/researchers/wil-van-der-aalst",
        email: null,
        summary: "Distinguished Professor Emeritus at TU/e, Chief Scientist at Celonis, widely recognized as the 'Father of Process Mining', member of the Royal Netherlands Academy of Arts and Sciences, and one of the world's most cited computer scientists.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 82,
        subject: "engineering",
        name: "Prof. Dr. Maarten Steinbuch",
        title: "Full Professor of Systems and Control / Head of Control Systems Technology",
        university: "Eindhoven University of Technology",
        country: "Netherlands",
        topics: ["Control Systems Technology", "Medical Robotics", "Precision Engineering", "Automotive Control", "Mechatronics"],
        source: "https://www.tue.nl/en/research/researchers/maarten-steinbuch",
        email: null,
        summary: "Full Professor of Systems and Control at TU/e, IEEE Fellow, leading innovator in high-precision motion control for semiconductor lithography (ASML) and surgical robotics (Microsure).",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 83,
        subject: "chemistry",
        name: "Prof. Dr. Bert Meijer",
        title: "Distinguished University Professor of Molecular Sciences",
        university: "Eindhoven University of Technology",
        country: "Netherlands",
        topics: ["Supramolecular Polymers", "Self-Assembly", "Organic Chemistry", "Nanotechnology", "Chiral Systems"],
        source: "https://www.tue.nl/en/research/researchers/bert-meijer",
        email: null,
        summary: "Distinguished University Professor of Molecular Sciences at TU/e, Spinoza Prize recipient, Prelog Medal winner, member of the Royal Netherlands Academy of Arts and Sciences, and pioneer in functional supramolecular polymers.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 10. SWITZERLAND: École Polytechnique Fédérale de Lausanne (EPFL) (Row 1369)
  {
    institution: "École Polytechnique Fédérale de Lausanne (EPFL)",
    shortName: "EPFL",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Lausanne, Vaud, Switzerland",
    website: "https://www.epfl.ch",
    sourceRow: 1369,
    slug: "ecole-polytechnique-federale-de-lausanne",
    heroEyebrow: "Switzerland · Vaud · World-Renowned Federal Polytechnic · Reviewed 14 October 2026",
    headline: "École Polytechnique Fédérale de Lausanne (EPFL)",
    description: "EPFL guide: Master's Excellence Fellowships (CHF 20,000/yr), salaried doctoral contracts (CHF 54,000/yr), Summer@EPFL research internships, and world-class faculty profiles.",
    overview: "Founded in 1853 on Lake Geneva in Lausanne, EPFL (École Polytechnique Fédérale de Lausanne) is one of the world's most dynamic science and engineering institutions, consistently ranked in the global top 15. Partnered with ETH Zurich in the Swiss Federal ETH Domain, EPFL excels in Computer Science, Machine Learning, Robotics, Microengineering, and Renewable Energy. Review verified Master's curricula, doctoral assistant salaries, summer research internships, and world-renowned faculty profiles.",
    admissions: {
      masters: "Bachelor of Science degree from an internationally accredited university in Computer Science, Engineering, Mathematics, or Physics with top-tier academic marks.",
      phd: "Recognized Master of Science degree (minimum 120 ECTS) in relevant quantitative field with documented research achievements and admission into one of EPFL's 22 doctoral schools (EDIC, EDPO, etc.).",
      language: "Demonstrated English proficiency equivalent to CEFR C1: Academic IELTS 7.0 overall or TOEFL iBT 100 for English-taught graduate curricula.",
      proposal: "Comprehensive 2-page statement of purpose detailing academic milestones, research interests, and preferred EPFL laboratories.",
      appFee: "CHF 150 application fee for holders of foreign degrees (CHF 50 for holders of Swiss degrees).",
      documents: "Complete official transcripts, certified copy of degree diploma, curriculum vitae in English, motivation essay, and three academic reference letters."
    },
    tuitionText: "Under Swiss federal law, tuition at EPFL is heavily subsidized and among the lowest in the world for an elite institution. Tuition is CHF 730 per semester (CHF 1,460 per year) for Swiss residents, and CHF 2,190 per semester for international students. Recipients of the EPFL Master's Excellence Fellowship receive CHF 10,000 per semester plus guaranteed housing. Doctoral assistants are paid salaried employees receiving CHF 54,000 to CHF 57,000 per year.",
    opportunities: [
      {
        id: 151,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "EPFL Master's Excellence Fellowships",
        source: "https://www.epfl.ch/education/master/excellence-fellowships/",
        funding: "Fully funded: CHF 10,000 per semester (CHF 20,000 per year / CHF 40,000 total) plus reservation of guaranteed university student housing for the full two-year Master's degree",
        status: "open-scholarship",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Strict international deadline for Autumn 2027 Master's intake)",
        fee: "CHF 150 foreign degree application fee",
        tuition: "Fellowship covers living expenses; subsidized Swiss tuition CHF 2,190/semester.",
        requirements: {
          gpa: "Graduation in the top 5% to 10% of undergraduate degree class with distinction.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Recommended for quantitative programs.",
          papers: "Demonstrated academic excellence, rigorous theoretical foundation, and motivation statement.",
          references: "Three confidential academic reference letters submitted electronically via the portal."
        },
        desc: "EPFL's premier merit fellowship awarded to exceptional incoming international and Swiss Master's candidates, providing CHF 20,000 per year living allowance and guaranteed student housing in Lausanne."
      },
      {
        id: 152,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "EPFL Doctoral Assistantships (Doctorat Salarié)",
        source: "https://www.epfl.ch/education/phd/doctoral-studies-structure/doctoral-students-salary/",
        funding: "Fully funded: Salaried employment contract starting from CHF 54,000/year (1st year) rising to CHF 57,000/year (4th year) with Swiss state pension (PUBLICA), accident, and social insurance",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Summer intake deadline; December 15 for Winter intake)",
        fee: "Free application directly to EPFL doctoral schools",
        tuition: "Zero tuition. Doctoral assistants are paid academic employees.",
        requirements: {
          gpa: "Master of Science degree (minimum 120 ECTS) with high academic distinction in Computer Science or Engineering.",
          ielts: "Fluent technical English for international research collaboration.",
          gre: "General GRE recommended for non-European degrees.",
          papers: "Master's thesis or peer-reviewed publication in top IEEE, ACM, or Nature venues.",
          references: "Three academic reference letters submitted by university professors."
        },
        desc: "Four-year salaried doctoral research appointment inside EPFL's 22 doctoral programs, conducting frontier scientific investigations with state-of-the-art supercomputing and laboratory infrastructure."
      },
      {
        id: 153,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "EPFL Master of Science in Computer Science",
        source: "https://www.epfl.ch/education/master/programs/computer-science/",
        funding: "Self-funded; eligible for EPFL Excellence Fellowships and student tutoring assistantships",
        status: "program-information",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Priority international deadline; secondary round April 15, 2027)",
        fee: "CHF 150 application processing fee",
        tuition: "CHF 730/semester (Swiss/resident) or CHF 2,190/semester (international threefold rate).",
        requirements: {
          gpa: "Bachelor of Science in Computer Science or related quantitative field with high academic marks.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Recommended for applicants with degrees outside Switzerland/EU.",
          papers: "Curriculum vitae, detailed undergraduate module descriptions, and motivation essay.",
          references: "Three academic reference letters submitted through the eApply portal."
        },
        desc: "World-class two-year Master's degree (120 ECTS) in the School of Computer and Communication Sciences (IC), offering specializations in Machine Intelligence, Information Security, Software Systems, and Theory."
      },
      {
        id: 154,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Master's",
        title: "EPFL Master of Science in Data Science",
        source: "https://www.epfl.ch/education/master/programs/data-science/",
        funding: "Self-funded; eligible for EPFL Excellence Fellowships (CHF 20,000/yr)",
        status: "program-information",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 for Autumn intake",
        fee: "CHF 150 application fee",
        tuition: "CHF 730/semester (Swiss) or CHF 2,190/semester (international).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Mathematics, or Electrical Engineering with solid linear algebra and probability.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Recommended.",
          papers: "Rigorous background in calculus, statistical inference, algorithms, and Python/C++.",
          references: "Three academic referee letters and complete university transcripts."
        },
        desc: "Comprehensive two-year Master of Science program (120 ECTS) jointly offered by Computer Science and Mathematics, covering mathematical statistics, machine learning, distributed optimization, and big data systems."
      },
      {
        id: 155,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Research",
        title: "EPFL Center for Intelligent Systems (CIS) Research Projects",
        source: "https://www.epfl.ch/research/domains/cis/",
        funding: "Funded research positions supported by the Swiss National Science Foundation (SNSF) and European research grants",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for collaborative lab placements",
        fee: "Free application directly to affiliated principal investigators",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate student in Robotics, Computer Science, or Microengineering with top-tier record.",
          ielts: "Technical English fluency.",
          gre: "Not required.",
          papers: "Demonstrated laboratory experience in autonomous systems, computer vision, or neuromorphic engineering.",
          references: "CV, GitHub profile or portfolio, and academic recommendation."
        },
        desc: "Multidisciplinary research center at EPFL bringing together robotics, computer science, and microengineering to investigate autonomous mobile robots, intelligent sensors, and edge AI systems."
      },
      {
        id: 156,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Internship",
        title: "Summer@EPFL International Research Fellowship in Computer Science",
        source: "https://www.epfl.ch/schools/ic/education/summer-at-epfl/",
        funding: "Fully funded: Living stipend of CHF 1,800 per month for up to 3 months, organized student housing, and round-trip travel reimbursement",
        status: "open-position",
        deadline: "2026-11-29",
        deadlineText: "November 29, 2026 (Strict annual deadline for Summer 2027 fellowship cohort)",
        fee: "Free application",
        tuition: "Zero tuition; fully paid international fellowship.",
        requirements: {
          gpa: "Enrolled undergraduate (completed at least 2 years of Bachelor) or Master's student in Computer Science or Electrical Engineering outside Switzerland.",
          ielts: "Fluent working English communication.",
          gre: "Not required.",
          papers: "Statement of purpose describing research interests and target IC school laboratories.",
          references: "Official university transcripts, curriculum vitae, and one to two academic recommendation letters."
        },
        desc: "Highly selective fully funded summer research program (July to August/September) inside EPFL's School of Computer and Communication Sciences (IC), offering international students direct research collaboration with faculty mentors."
      },
      {
        id: 157,
        subject: "physics",
        subjects: ["physics", "engineering", "mathematics"],
        type: "Fellowship",
        title: "EPFL Student Teaching Assistantships (Sous-assistants)",
        source: "https://www.epfl.ch/education/studies/en/regulations-and-procedures/student-jobs/",
        funding: "Salaried campus employment: CHF 25.00 to CHF 28.50 per hour for coaching exercise sessions, running physics/coding labs, and grading assignments",
        status: "open-position",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027 for Autumn semester teaching allocations",
        fee: "Free application via EPFL IS-Academia portal",
        tuition: "Zero tuition; paid hourly university employment.",
        requirements: {
          gpa: "Enrolled EPFL student in good standing who has passed the course module with a grade of 5.0 / 6.0 or higher.",
          ielts: "Proficiency in French or English depending on the course language.",
          gre: "Not required.",
          papers: "High academic marks in foundational mathematics, algorithms, or physics.",
          references: "Approval from the course professor or head teaching assistant."
        },
        desc: "Departmental academic employment (sous-assistant) for enrolled undergraduate and graduate students at EPFL, providing competitive hourly compensation for conducting weekly tutorial exercise sessions and supervising lab sections."
      }
    ],
    researchers: [
      {
        id: 84,
        subject: "computer-science",
        name: "Prof. Dr. Martin Jaggi",
        title: "Associate Professor of Machine Learning / Head of MLO Lab",
        university: "École Polytechnique Fédérale de Lausanne (EPFL)",
        country: "Switzerland",
        topics: ["Machine Learning", "Optimization", "Decentralized Learning", "Federated Learning", "Large Language Model Training"],
        source: "https://people.epfl.ch/martin.jaggi",
        email: null,
        summary: "Head of the Machine Learning and Optimization Laboratory (MLO) at EPFL, leading researcher in distributed optimization, federated learning, and efficient training algorithms for deep neural networks.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 85,
        subject: "engineering",
        name: "Prof. Dr. Auke Ijspeert",
        title: "Full Professor of Biorobotics / Head of BioRob Lab",
        university: "École Polytechnique Fédérale de Lausanne (EPFL)",
        country: "Switzerland",
        topics: ["Biorobotics", "Amphibious Robots", "Central Pattern Generators", "Neuromorphic Locomotion", "Biomechanics"],
        source: "https://people.epfl.ch/auke.ijspeert",
        email: null,
        summary: "Full Professor and Head of the Biorobotics Laboratory (BioRob) at EPFL, world-renowned pioneer in bio-inspired robotics, amphibious walking machines, and computational neurobiology of locomotion.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 86,
        subject: "chemistry",
        name: "Prof. Dr. Michael Grätzel",
        title: "Full Professor of Physical Chemistry / Director of LPI",
        university: "École Polytechnique Fédérale de Lausanne (EPFL)",
        country: "Switzerland",
        topics: ["Dye-Sensitized Solar Cells (Grätzel Cells)", "Perovskite Photovoltaics", "Solar Fuels", "Nanomaterials", "Physical Chemistry"],
        source: "https://people.epfl.ch/michael.graetzel",
        email: null,
        summary: "Full Professor at EPFL, inventor of dye-sensitized solar cells (Grätzel cells) and pioneer of perovskite photovoltaics, recipient of the Millennium Technology Prize, Balzan Prize, and one of the most cited scientists in history.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  }
];
