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

export const cycle3Universities = [
  // 1. CANADA: University of Toronto (Row 121)
  {
    institution: "University of Toronto",
    shortName: "U of T",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Toronto, Ontario, Canada",
    website: "https://www.utoronto.ca",
    sourceRow: 121,
    slug: "university-of-toronto",
    heroEyebrow: "Canada · Ontario · Canada's Top Global Research University · Reviewed 14 October 2026",
    headline: "University of Toronto (U of T)",
    description: "University of Toronto guide: Doctoral Base Funding ($20,000+ tuition waiver), MSc in Applied Computing, Vector Institute AI placements, and Nobel laureate faculty.",
    overview: "Founded in 1827, the University of Toronto (U of T) is Canada's leading institution of learning, discovery and knowledge creation. Consistently ranked among the top 25 universities globally, U of T secures over CAD $1.4 billion in annual research funding. From the discovery of insulin to pioneering deep learning under Geoffrey Hinton, U of T leads the world in artificial intelligence, medicine, aerospace, and theoretical physics. Explore verified graduate degrees, guaranteed doctoral funding packages, and world-renowned faculty profiles.",
    admissions: {
      masters: "Appropriate 4-year Bachelor's degree with standing equivalent to at least a mid-B (typically 75%+) in the final year of undergraduate study from an accredited institution.",
      phd: "Recognized Master's degree with standing equivalent to at least B+ (typically 78%+), demonstrated thesis research capability, and strong letters of academic recommendation.",
      language: "Demonstrated English proficiency: Academic IELTS 7.0 overall with no band below 6.5, or TOEFL iBT 93 overall (writing and speaking minimum 22).",
      proposal: "Curriculum-aligned 2-page research statement describing research questions, background literature, and faculty supervisor alignment.",
      appFee: "CAD $125 to CAD $150 university application fee depending on graduate department and credential evaluation.",
      documents: "Complete official university transcripts, 3 academic letters of reference, curriculum vitae, and statement of intent."
    },
    tuitionText: "Tuition for research-stream Master's and PhD programs is heavily subsidized. Under the Arts & Science Doctoral Base Funding package, full-time doctoral students receive guaranteed minimum financial support of CAD $20,000 per year plus full coverage of tuition and incidental fees (effective zero net tuition). International tuition for professional Master's programs ranges from CAD $35,000 to CAD $60,000.",
    opportunities: [
      {
        id: 158,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "University of Toronto Doctoral Base Funding & Arts & Science Fellowships",
        source: "https://www.artsci.utoronto.ca/graduate/graduate-funding/base-funding",
        funding: "Fully funded: Minimum CAD $20,000 annual net living stipend plus 100% full tuition coverage for four to five years of doctoral research",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Departmental graduate awards nomination deadline for September intake)",
        fee: "CAD $125 graduate application fee",
        tuition: "Full tuition completely covered for all doctoral students in funded cohort.",
        requirements: {
          gpa: "First-class academic standing (A- / 80%+ equivalent) across prior degree coursework.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 93.",
          gre: "Recommended for quantitative programs outside Canada.",
          papers: "Demonstrated research excellence through publications, conference papers, or Master's thesis.",
          references: "Three academic reference letters submitted electronically through the portal."
        },
        desc: "U of T's guaranteed doctoral funding package ensuring all eligible doctoral stream students receive at least CAD $20,000 per year plus complete tuition coverage across Arts & Science, Applied Science, and Medicine."
      },
      {
        id: 159,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "University of Toronto PhD in Computer Science",
        source: "https://web.cs.toronto.edu/graduate/programs/phd",
        funding: "Fully funded: Guaranteed minimum funding package of CAD $29,000 per year plus full tuition waiver through Research Assistantships and Teaching Assistantships",
        status: "open-position",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Strict annual deadline for September 2027 doctoral entry)",
        fee: "CAD $125 application fee",
        tuition: "Zero tuition. Full tuition and fees paid by departmental graduate fellowship.",
        requirements: {
          gpa: "Master's degree in Computer Science or Mathematics with minimum A- (80%) average.",
          ielts: "Academic IELTS 7.0 overall (6.5 min band) or TOEFL iBT 93.",
          gre: "General GRE scores recommended for international degree holders.",
          papers: "High-quality research thesis or published papers in top computer science venues (NeurIPS, ICML, CVPR, SIGGRAPH, SOSP).",
          references: "Three academic reference letters evaluating scientific originality and research potential."
        },
        desc: "Five-year doctoral research program in U of T's globally celebrated Department of Computer Science (DCS), offering frontier research in machine learning, neural networks, computer systems, graphics, and quantum computing."
      },
      {
        id: 160,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "University of Toronto Master of Science in Applied Computing (MScAC)",
        source: "https://mscac.utoronto.ca/",
        funding: "Industry-funded: Guaranteed paid 8-month applied research internship paying minimum CAD $60,000 pro-rated (CAD $7,500/month)",
        status: "program-information",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 for Fall 2027 cohort admission",
        fee: "CAD $125 application processing fee",
        tuition: "CAD $30,000 domestic / CAD $65,000 international total tuition (offset by paid 8-month industry internship).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Mathematics, or Physics with minimum B+ average in final year.",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5 or TOEFL iBT 93.",
          gre: "Not required.",
          papers: "Curriculum vitae, statement of purpose, and technical programming portfolio.",
          references: "Three academic or industry letters of recommendation."
        },
        desc: "World-class 16-month master's degree combining 8 months of advanced graduate coursework in AI, data science, quantum, or cybersecurity with an 8-month paid applied research internship at top tech enterprises."
      },
      {
        id: 161,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master's",
        title: "University of Toronto MASc in Aerospace Engineering (UTIAS)",
        source: "https://www.utias.utoronto.ca/graduate-studies/masc-program/",
        funding: "Fully funded: Minimum guaranteed funding package of CAD $24,500 per year plus tuition allowance for two full years",
        status: "program-information",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 for September 2027 intake",
        fee: "CAD $125 application fee",
        tuition: "Covered by department research assistantship and MASc funding package.",
        requirements: {
          gpa: "Four-year Bachelor of Applied Science or Engineering with minimum mid-B (75%+) average.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 93.",
          gre: "Not required.",
          papers: "Demonstrated competence in aerodynamics, flight dynamics, structures, or orbital mechanics.",
          references: "Two academic referee letters and transcript of records."
        },
        desc: "Two-year research-intensive Master of Applied Science degree at the University of Toronto Institute for Aerospace Studies (UTIAS), investigating autonomous flight, microsatellites, green aviation, and space robotics."
      },
      {
        id: 162,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Research",
        title: "Vector Institute for Artificial Intelligence Research Placements",
        source: "https://vectorinstitute.ai/",
        funding: "Funded research internships and Vector Postgraduate Fellowships supported by CIFAR and Pan-Canadian AI Strategy",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for collaborative lab research rotations",
        fee: "Free application directly to affiliated faculty",
        tuition: "Zero tuition; paid graduate research position.",
        requirements: {
          gpa: "Graduate student in Computer Science, Statistics, or Applied Mathematics with top-tier grades.",
          ielts: "Fluent technical English communication.",
          gre: "Not required.",
          papers: "Published or submitted research in deep learning, generative modeling, or reinforcement learning.",
          references: "Endorsement from a Vector Faculty Affiliate and academic CV."
        },
        desc: "Frontier research placements inside the Vector Institute in downtown Toronto, collaborating with world-leading machine learning researchers on foundational neural architectures, AI safety, and health informatics."
      },
      {
        id: 163,
        subject: "physics",
        subjects: ["physics", "chemistry", "engineering"],
        type: "Internship",
        title: "University of Toronto Excellence Awards (UTEA) in Science",
        source: "https://research.utoronto.ca/funding-opportunities/special-research-programs/university-toronto-excellence-awards-utea",
        funding: "Fully funded: CAD $7,500 award for 14 weeks of full-time summer research inside U of T laboratories",
        status: "open-position",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Annual deadline for Summer 2027 term research)",
        fee: "Free application",
        tuition: "Zero tuition; full student research award.",
        requirements: {
          gpa: "Enrolled undergraduate student in good academic standing (minimum B+ / 77% average).",
          ielts: "Working English fluency for laboratory operations.",
          gre: "Not required.",
          papers: "1-page research project proposal co-developed with a U of T faculty supervisor.",
          references: "Faculty research supervisor endorsement and university transcript."
        },
        desc: "Competitive 14-week summer research award enabling undergraduate students to conduct full-time experimental or theoretical research in physical, engineering, and life sciences alongside leading U of T professors."
      },
      {
        id: 164,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "engineering"],
        type: "Fellowship",
        title: "U of T Graduate Teaching Assistantships (CUPE 3902 Unit 1)",
        source: "https://www.cupe3902.org/unit-1/",
        funding: "Salaried academic employment: CAD $48.24 to CAD $51.10 per hour under CUPE 3902 Unit 1 collective agreement",
        status: "open-position",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 for upcoming academic year teaching appointments",
        fee: "Free application via departmental TA job boards",
        tuition: "Zero tuition; salaried university teaching contract.",
        requirements: {
          gpa: "Registered graduate student in good standing at the University of Toronto.",
          ielts: "High oral English proficiency for lecturing, recitation, and laboratory instruction.",
          gre: "Not required.",
          papers: "Strong mastery of underlying undergraduate curriculum subject matter.",
          references: "Approval from department graduate chair and course coordinator."
        },
        desc: "Departmental academic teaching appointments providing instruction leadership training and hourly remuneration for running weekly laboratory sections, grading exams, and tutoring undergraduate students."
      }
    ],
    researchers: [
      {
        id: 87,
        subject: "computer-science",
        name: "Prof. Dr. Geoffrey Hinton",
        title: "Nobel Laureate in Physics (2024) / University Professor Emeritus",
        university: "University of Toronto",
        country: "Canada",
        topics: ["Deep Learning", "Artificial Neural Networks", "Backpropagation", "Boltzmann Machines", "Representation Learning"],
        source: "https://www.cs.toronto.edu/~hinton/",
        email: null,
        summary: "University Professor Emeritus at the University of Toronto, 2024 Nobel Laureate in Physics, 2018 Turing Award Laureate, widely known as the 'Godfather of Deep Learning' for seminal breakthroughs in neural network training.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 88,
        subject: "computer-science",
        name: "Prof. Dr. Raquel Urtasun",
        title: "Professor of Computer Science & Founder/CEO of Waabi",
        university: "University of Toronto",
        country: "Canada",
        topics: ["Autonomous Driving", "Computer Vision", "Machine Learning", "Generative Simulation", "Robotics"],
        source: "https://www.cs.toronto.edu/~urtasun/",
        email: null,
        summary: "Full Professor of Computer Science at the University of Toronto, Founder and CEO of Waabi, Canada Research Chair in Machine Learning and Computer Vision, and international leader in self-driving technology.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 89,
        subject: "chemistry",
        name: "Prof. Dr. Alán Aspuru-Guzik",
        title: "Professor of Chemistry and Computer Science / Canada 150 Research Chair",
        university: "University of Toronto",
        country: "Canada",
        topics: ["Quantum Chemistry", "Self-Driving Laboratories", "Quantum Algorithms", "Molecular Discovery", "AI for Materials"],
        source: "https://www.matter.toronto.edu/",
        email: null,
        summary: "Canada 150 Research Chair in Theoretical & Quantum Chemistry at U of T, CIFAR AI Chair, and pioneer in merging quantum computing, artificial intelligence, and automated robotics to accelerate materials discovery.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 2. AUSTRALIA: Curtin University (Row 159)
  {
    institution: "Curtin University",
    shortName: "Curtin",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Perth, Western Australia, Australia",
    website: "https://www.curtin.edu.au",
    sourceRow: 159,
    slug: "curtin-university",
    heroEyebrow: "Australia · Western Australia · Premier Global Research University · Reviewed 14 October 2026",
    headline: "Curtin University (Perth, Australia)",
    description: "Curtin University guide: Australian Government RTP Scholarships (AUD $35k/yr tax-free), ICRAR radio astronomy research, Master of Predictive Analytics, and faculty profiles.",
    overview: "Established in 1966 in Perth, Curtin University is Western Australia's largest and most culturally diverse university, ranked in the top 1% of universities worldwide. Curtin is globally renowned for mineral and mining engineering (ranked #2 in the world), computer science, and radio astronomy through the International Centre for Radio Astronomy Research (ICRAR) and Square Kilometre Array (SKA). Review verified postgraduate degrees, fully funded doctoral scholarships, and world-class faculty profiles.",
    admissions: {
      masters: "Recognized Bachelor's degree from an accredited institution with minimum course weighted average (CWA) of 65%+ or equivalent 3.0/4.0 GPA.",
      phd: "Four-year Bachelor's degree with First Class Honours (H1) or Master by Research degree with a substantial research thesis component (at least 25% of total degree credits).",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all subscores) or TOEFL iBT 79 (reading 13, listening 13, speaking 18, writing 21).",
      proposal: "Detailed 2 to 3-page research proposal outlining the intended research problem, methodology, timeline, and identified Curtin faculty supervisor.",
      appFee: "Zero application fee when applying directly online via the Curtin application portal.",
      documents: "Complete official university transcripts, grading scale guide, curriculum vitae, 2 academic referee reports, and passport copy."
    },
    tuitionText: "Under the Australian Government Research Training Program (RTP), domestic and selected international doctoral researchers receive complete 100% tuition fee offsets (saving up to AUD $120,000) plus an annual tax-free living stipend of AUD $35,000 for up to 3.5 years.",
    opportunities: [
      {
        id: 165,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "chemistry"],
        type: "Scholarship",
        title: "Curtin University Australian Government RTP & Strategic Doctoral Scholarships",
        source: "https://scholarships.curtin.edu.au/Scholarship/?current_page=1&scholarship_id=6606",
        funding: "Fully funded: Full tuition fee offset plus annual living stipend of AUD $35,000 per year (tax-free) for 3.5 years, relocation subsidy, and health cover",
        status: "open-scholarship",
        deadline: "2026-10-31",
        deadlineText: "October 31, 2026 for Semester 1 (February 2027) intake consideration",
        fee: "Free application",
        tuition: "Full tuition completely waived under RTP Fee Offset regulations.",
        requirements: {
          gpa: "First Class Honours (H1 / 80%+ equivalent) in prior undergraduate or Master's research degree.",
          ielts: "Academic IELTS 6.5 overall with minimum 6.0 in all bands or TOEFL iBT 79.",
          gre: "Not required.",
          papers: "Demonstrated research output (peer-reviewed journal papers, conference proceedings, or Honours thesis).",
          references: "Two academic referee reports assessing research aptitude submitted through the online referee portal."
        },
        desc: "Premier Australian doctoral research scholarship providing complete tuition coverage and an annual tax-free living stipend of AUD $35,000 for high-achieving domestic and international PhD candidates at Curtin."
      },
      {
        id: 166,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Curtin University PhD in Computing and Information Systems",
        source: "https://www.curtin.edu.au/study/offering/course-pg-doctor-of-philosophy-computing--dr-comp/",
        funding: "Fully funded: Eligible for Curtin Strategic Scholarships (AUD $35,000/yr tax-free) and industry-funded CRC projects",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for Mid-Year (Semester 2) admissions",
        fee: "Free application",
        tuition: "Zero tuition for RTP scholarship holders; standard international tuition AUD $41,400/year.",
        requirements: {
          gpa: "Bachelor's degree with First Class Honours or Master of Science by Research in Computing.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands).",
          gre: "Not required.",
          papers: "Completed Master's thesis or publication record in data science, AI, or cybersecurity.",
          references: "Written confirmation of supervision support from an academic staff member in the School of EECMS."
        },
        desc: "Four-year advanced doctoral research program conducting world-leading research in high-performance computing, artificial intelligence, blockchain, cybersecurity, and data-intensive radio astronomy."
      },
      {
        id: 167,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Master's",
        title: "Curtin Master of Predictive Analytics",
        source: "https://www.curtin.edu.au/study/offering/course-pg-master-of-predictive-analytics--mc-predan/",
        funding: "Self-funded; eligible for Curtin International Merit Scholarships (up to 25% tuition fee reduction)",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Semester 1 (February 2027) entry",
        fee: "Free application",
        tuition: "AUD $39,800 per year (total 400 credit points over two full academic years).",
        requirements: {
          gpa: "Bachelor's degree in science, engineering, mathematics, or business with strong quantitative marks.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-band).",
          gre: "Not required.",
          papers: "Demonstrated foundation in programming, statistics, and linear algebra.",
          references: "Complete university academic transcripts and personal statement."
        },
        desc: "Two-year postgraduate master's degree preparing graduates to extract meaningful insights from big data, combining machine learning algorithms, statistical forecasting, and cloud computing for industry decision-making."
      },
      {
        id: 168,
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Master's",
        title: "Curtin Master of Professional Engineering (Chemical Engineering)",
        source: "https://www.curtin.edu.au/study/offering/course-pg-master-of-professional-engineering--mc-proeng/",
        funding: "Self-funded; eligible for Western Australian energy industry bursaries and Curtin merit awards",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Semester 1 intake",
        fee: "Free application",
        tuition: "AUD $43,200 per year (typically 2 to 3 years full-time depending on bachelor background).",
        requirements: {
          gpa: "Bachelor of Engineering degree or equivalent in chemical sciences with minimum 65% CWA.",
          ielts: "Academic IELTS 6.5 overall with minimum 6.0 in all bands.",
          gre: "Not required.",
          papers: "Coursework background in thermodynamics, fluid mechanics, transport phenomena, and reaction engineering.",
          references: "Official university academic transcripts, detailed syllabus outlines, and resume."
        },
        desc: "Engineers Australia (EA) accredited professional engineering master's degree focusing on clean hydrogen energy, mineral carbonation, sustainable battery chemical processing, and industrial plant optimization."
      },
      {
        id: 169,
        subject: "physics",
        subjects: ["physics", "computer-science"],
        type: "Research",
        title: "Curtin International Centre for Radio Astronomy Research (ICRAR) Placements",
        source: "https://www.icrar.org/",
        funding: "Funded research projects supported by the Australian Research Council (ARC) and the Square Kilometre Array (SKA) consortium",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for research fellowship and graduate project allocations",
        fee: "Free application directly to affiliated laboratory professors",
        tuition: "Zero tuition; paid graduate research appointment.",
        requirements: {
          gpa: "Master's or First Class Honours in Astrophysics, Physics, or High-Performance Computing.",
          ielts: "Technical English fluency for international collaboration.",
          gre: "Not required.",
          papers: "Demonstrated skills in radio interferometry, high-performance computing, or extragalactic astrophysics.",
          references: "Curriculum vitae, publication record, and two referee contacts."
        },
        desc: "Frontier astrophysical research placements inside ICRAR Curtin, developing cutting-edge software and signal processing hardware for the Murchison Widefield Array (MWA) and the global Square Kilometre Array (SKA)."
      },
      {
        id: 170,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Internship",
        title: "Curtin Western Australian Energy & Mining Industry Research Internships",
        source: "https://www.curtin.edu.au/engage/industry/student-placements/",
        funding: "Salaried internship: AUD $850 to AUD $1,200 per week for 12-week professional industry research practicums",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for Semester 2 industry practicum placements",
        fee: "Free enrollment for approved Curtin graduate students",
        tuition: "Included in enrolled degree curriculum; industry stipend paid directly.",
        requirements: {
          gpa: "Enrolled Master of Professional Engineering student with minimum 65% CWA.",
          ielts: "Professional English communication skills for workplace and site safety.",
          gre: "Not required.",
          papers: "Resume / CV, technical engineering portfolio, and project preference statement.",
          references: "Academic endorsement from Curtin engineering internship coordinator."
        },
        desc: "Structured 12-week vocational research internship embedding graduate engineers with Western Australian resource, energy, and engineering pioneers (BHP, Rio Tinto, Woodside, Chevron)."
      },
      {
        id: 171,
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering", "computer-science"],
        type: "Fellowship",
        title: "Curtin Sessional Academic Teaching & Lab Demonstratorships",
        source: "https://www.curtin.edu.au/careers/casual-and-sessional-employment/",
        funding: "Salaried academic tutoring: AUD $46.50 to AUD $58.00 per hour under Curtin Enterprise Bargaining Agreement",
        status: "open-position",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 for Semester 1 departmental sessional teaching intakes",
        fee: "Free application through Curtin casual recruitment register",
        tuition: "Zero tuition; paid hourly employment contract.",
        requirements: {
          gpa: "Enrolled graduate researcher (PhD or Master by Research) in good academic standing.",
          ielts: "High level oral English presentation and tutorial instructional capabilities.",
          gre: "Not required.",
          papers: "Excellence in completed coursework relevant to assigned tutoring units.",
          references: "Unit coordinator approval and mandatory completion of Curtin Teaching Foundations."
        },
        desc: "Sessional campus academic employment enabling graduate students to instruct weekly tutorial classes, supervise computing and engineering laboratories, and grade assignments across undergraduate faculties."
      }
    ],
    researchers: [
      {
        id: 90,
        subject: "physics",
        name: "Prof. Dr. Melanie Johnston-Hollitt",
        title: "Professor of Radio Astronomy / ICRAR Curtin",
        university: "Curtin University",
        country: "Australia",
        topics: ["Radio Astronomy", "Square Kilometre Array (SKA)", "Galaxy Clusters", "Magnetic Fields in the Universe", "Murchison Widefield Array"],
        source: "https://staffportal.curtin.edu.au/staff/profile/view/Melanie.Johnston-hollitt/",
        email: null,
        summary: "Professor of Radio Astronomy at Curtin University, Director of the Murchison Widefield Array project, Square Kilometre Array science lead, and international authority on cosmic magnetism and large-scale galaxy structures.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 91,
        subject: "computer-science",
        name: "Prof. Dr. Vidyadhar Potdar",
        title: "Professor of Blockchain & Cybersecurity / School of Management & Marketing",
        university: "Curtin University",
        country: "Australia",
        topics: ["Blockchain", "Cybersecurity", "Supply Chain Traceability", "Smart Contracts", "Information Security"],
        source: "https://staffportal.curtin.edu.au/staff/profile/view/Vidyadhar.Potdar/",
        email: null,
        summary: "Professor of Blockchain and Cybersecurity at Curtin University, Director of the Blockchain R&D Lab, leading applied research in decentralized identity, supply chain transparency, and smart contract verification.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 92,
        subject: "chemistry",
        name: "Prof. Dr. Zongping Shao",
        title: "John Curtin Distinguished Professor of Chemical Engineering",
        university: "Curtin University",
        country: "Australia",
        topics: ["Solid Oxide Fuel Cells", "Electrochemical Energy Storage", "Hydrogen Production", "Perovskite Catalysts", "Batteries"],
        source: "https://staffportal.curtin.edu.au/staff/profile/view/Zongping.Shao/",
        email: null,
        summary: "John Curtin Distinguished Professor of Chemical Engineering at Curtin University, Clarivate Highly Cited Researcher in Materials Science & Chemistry, and global authority on solid oxide fuel cells and clean hydrogen generation.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 3. GERMANY: Humboldt University of Berlin (Row 291)
  {
    institution: "Humboldt University of Berlin",
    shortName: "Humboldt",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Berlin, Germany",
    website: "https://www.hu-berlin.de",
    sourceRow: 291,
    slug: "humboldt-university-of-berlin",
    heroEyebrow: "Germany · Berlin · Historic University of Excellence · Reviewed 14 October 2026",
    headline: "Humboldt University of Berlin (Humboldt-Universität zu Berlin)",
    description: "Humboldt University of Berlin guide: Salaried TV-L E13 doctoral positions (€52,000–€60,000/yr), MSc in Optical Sciences, BIFOLD AI research, and Nobel laureate heritage.",
    overview: "Founded in 1810 by Wilhelm von Humboldt, Humboldt University of Berlin is the mother of modern universities, originating the Humboldtian ideal of integrating teaching and research. Alma mater of 57 Nobel laureates including Albert Einstein, Max Planck, and Erwin Schrödinger, Humboldt is a certified University of Excellence within the Berlin University Alliance. Located across Mitte and the Adlershof science campus, Humboldt excels in Computer Science, Quantum Optics, Complex Systems, and Materials Science. Review verified Master's curricula, salaried doctoral contracts, and faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree in Computer Science, Physics, Mathematics, or closely related discipline (minimum 180 ECTS credits) satisfying subject-specific curriculum prerequisite tables.",
      phd: "Completed Master of Science degree (120 ECTS) with high academic distinction, written supervisory commitment (Betreuungszusage) from a Humboldt full professor, and admission to the doctoral committee.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall or TOEFL iBT 90 for English-taught graduate curricula; German proficiency (CEFR C1) required for German-taught programs.",
      proposal: "Detailed research statement (Exposé) of 3 to 5 pages outlining the planned doctoral research problem, methodology, and work plan.",
      appFee: "Zero application fee via university portal; €75 uni-assist preliminary review documentation (VPD) fee for international degree holders.",
      documents: "University diploma, complete official transcripts with grading scale, CV in tabular format, motivation letter, and uni-assist VPD certificate."
    },
    tuitionText: "Under German public higher education regulations, tuition at Humboldt University of Berlin is zero for both domestic and international students. All students pay only a mandatory semester fee of approximately €315, which includes the Berlin public transportation semester ticket. Salaried doctoral researchers (Wissenschaftliche Mitarbeiter) are paid university employees under the TV-L HU collective agreement.",
    opportunities: [
      {
        id: 172,
        subject: "physics",
        subjects: ["physics", "computer-science", "mathematics", "chemistry"],
        type: "Scholarship",
        title: "Humboldt Doctoral Fellowships (Humboldt-Promotionsstipendien)",
        source: "https://www.hu-berlin.de/de/forschung/wiss-nachwuchs/promovierende/foerderung",
        funding: "Fully funded: Monthly living stipend of €1,450 to €1,750 per month plus research travel allowance for up to three years of doctoral research",
        status: "open-scholarship",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for Summer semester doctoral award rounds",
        fee: "Free scholarship application through the Humboldt Graduate School",
        tuition: "Zero tuition. Public university third-cycle education in Berlin.",
        requirements: {
          gpa: "Completed Master of Science degree with above-average grade (German equivalent 'gut' or 'sehr gut', 2.0 or better).",
          ielts: "English or German proficiency matching the doctoral school working language.",
          gre: "Not required.",
          papers: "Master's research thesis and 5-page doctoral research Exposé.",
          references: "Two academic evaluation letters from university professors."
        },
        desc: "Merit-based doctoral fellowships funded by Humboldt University and foundation endowments, supporting outstanding doctoral researchers conducting innovative scientific investigations across Berlin."
      },
      {
        id: 173,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Humboldt University Salaried Doctoral Research (Wissenschaftliche/r Mitarbeiter/in - TV-L HU)",
        source: "https://www.hu-berlin.de/de/hu-partner/stellenausschreibungen",
        funding: "Fully funded: Salaried employment contract under TV-L HU E13 tariff (€52,000 to €60,000 gross per year) with comprehensive German social insurance, health coverage, and state pension",
        status: "open-position",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Rolling departmental intakes across Adlershof research institutes)",
        fee: "Free application directly to advertised vacancy",
        tuition: "Zero tuition. Appointed doctoral candidates are salaried academic staff.",
        requirements: {
          gpa: "Master of Science degree (120 ECTS) in Computer Science, Physics, or Mathematics with high marks.",
          ielts: "Fluent technical English proficiency for scientific publishing and team collaboration.",
          gre: "Not required.",
          papers: "Master's research thesis or peer-reviewed conference publications.",
          references: "Employment application, academic CV, and supervisor endorsement."
        },
        desc: "Three to four-year salaried university employment contracts at Humboldt University research chairs, combining cutting-edge scientific investigation with teaching assistance and structured doctoral training."
      },
      {
        id: 174,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Humboldt Master of Science in Computer Science (Informatik)",
        source: "https://www.informatik.hu-berlin.de/de/studium/master-informatik",
        funding: "Self-funded; zero tuition; eligible for DAAD scholarships and HiWi assistantships",
        status: "program-information",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 for Winter semester (October 2027) intake",
        fee: "€75 uni-assist VPD processing fee for international degrees",
        tuition: "Zero tuition; mandatory semester fee of approximately €315 (includes Berlin transit ticket).",
        requirements: {
          gpa: "Bachelor of Science in Computer Science with minimum 180 ECTS and rigorous foundations in theoretical computer science and algorithms.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Transcript of records showing completed coursework matching Humboldt prerequisite catalog.",
          references: "Official university academic transcripts, degree certificate, and CV."
        },
        desc: "Two-year research-focused Master of Science degree (120 ECTS) based at the Science Campus Adlershof, offering advanced specializations in Algorithms & Complexity, Data Science, Adaptive Systems, and Distributed Computing."
      },
      {
        id: 175,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Master's",
        title: "Humboldt Master of Science in Optical Sciences / Physics",
        source: "https://www.physics.hu-berlin.de/en/studies/optical-sciences",
        funding: "Self-funded; zero tuition; eligible for Berlin Optics Student Club bursaries and Max Born Institute assistantships",
        status: "program-information",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 for Winter semester intake",
        fee: "€75 uni-assist VPD fee",
        tuition: "Zero tuition; €315 semester fee.",
        requirements: {
          gpa: "Bachelor's degree in Physics, Optical Engineering, or Electrical Engineering with solid quantum mechanics and electrodynamics.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Curriculum vitae and detailed summary of undergraduate experimental and theoretical physics courses.",
          references: "Official transcripts and bachelor degree certificate."
        },
        desc: "English-taught two-year interdisciplinary Master's program (120 ECTS) in Adlershof, partnering with the Max Born Institute and Helmholtz-Zentrum Berlin to train experts in Quantum Optics, Ultrafast Lasers, and Nanophotonics."
      },
      {
        id: 176,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Research",
        title: "BIFOLD (Berlin Institute for the Foundations of Learning and Data) Placements",
        source: "https://bifold.berlin/",
        funding: "Funded research positions supported by the Federal Ministry of Education and Research (BMBF) and Berlin Senate",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for collaborative machine learning research allocations",
        fee: "Free application directly to affiliated BIFOLD researchers",
        tuition: "Zero tuition; funded scientific placement.",
        requirements: {
          gpa: "Graduate degree in Computer Science, Data Science, or Mathematics with distinction.",
          ielts: "Technical English communication fluency.",
          gre: "Not required.",
          papers: "Demonstrated contributions in machine learning algorithms, database architectures, or deep learning theory.",
          references: "Curriculum vitae, research portfolio, and two academic referee contacts."
        },
        desc: "Frontier research positions inside BIFOLD, Germany's national AI competence center co-hosted at Humboldt University, developing scalable deep learning systems, data management architectures, and explainable AI."
      },
      {
        id: 177,
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry"],
        type: "Internship",
        title: "Humboldt Adlershof Technology Park Student Research Fellowships",
        source: "https://www.wista.de/en/technology-park-adlershof",
        funding: "Salaried internship: €900 to €1,400 per month for 3 to 6-month research placements inside WISTA technology park laboratories",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for Summer research internship allocations",
        fee: "Free application",
        tuition: "Zero tuition.",
        requirements: {
          gpa: "Enrolled student in science or engineering with strong academic marks.",
          ielts: "English or German language fluency.",
          gre: "Not required.",
          papers: "Resume / CV and 1-page statement of research interests.",
          references: "University transcript and recommendation from a faculty instructor."
        },
        desc: "Structured laboratory research internships inside Germany's premier science and technology park in Berlin-Adlershof, embedding students in cutting-edge photonics, renewable materials, and analytics enterprises."
      },
      {
        id: 178,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Fellowship",
        title: "Humboldt Student Assistantships (Studentische Hilfskräfte - SHK)",
        source: "https://gremien.hu-berlin.de/de/personalrat-shk",
        funding: "Salaried hourly campus employment: €13.98 to €16.50 per hour under Berlin university student assistant collective agreement",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for Summer semester appointments",
        fee: "Free application through university student job portal",
        tuition: "Zero tuition; paid student employment.",
        requirements: {
          gpa: "Enrolled student at Humboldt University in good academic standing.",
          ielts: "Proficiency in German or English depending on department requirements.",
          gre: "Not required.",
          papers: "High academic marks in the subject area of the tutoring or lab assignment.",
          references: "Approval from supervising chair professor."
        },
        desc: "Campus employment positions (up to 80 hours per month) assisting Humboldt professors in running exercise groups, tutoring undergraduate students, managing library collections, and maintaining computer clusters."
      }
    ],
    researchers: [
      {
        id: 93,
        subject: "computer-science",
        name: "Prof. Dr. Verena Hafner",
        title: "Professor of Adaptive Systems / Department of Computer Science",
        university: "Humboldt University of Berlin",
        country: "Germany",
        topics: ["Cognitive Robotics", "Adaptive Systems", "Human-Robot Interaction", "Sensorimotor Learning", "Spatial Cognition"],
        source: "https://humboldt.gmbh/forschung/hafner",
        email: null,
        summary: "Professor of Adaptive Systems at Humboldt University of Berlin, internationally recognized leader in cognitive developmental robotics, sensorimotor modeling, and artificial cognitive architectures.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 94,
        subject: "physics",
        name: "Prof. Dr. Oliver Benson",
        title: "Professor of Nano-Optics / Department of Physics, Adlershof",
        university: "Humboldt University of Berlin",
        country: "Germany",
        topics: ["Quantum Optics", "Nano-Optics", "Single Photon Sources", "Hybrid Quantum Systems", "Photonic Nanomaterials"],
        source: "https://www.physik.hu-berlin.de/en/nano",
        email: null,
        summary: "Professor of Nano-Optics at Humboldt University of Berlin, pioneer in quantum optical technologies, solid-state single-photon emitters in diamond, and hybrid quantum nano-photonic structures.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 95,
        subject: "chemistry",
        name: "Prof. Dr. Stefan Hecht",
        title: "Professor of Organic Chemistry and Functional Materials",
        university: "Humboldt University of Berlin",
        country: "Germany",
        topics: ["Photoswitches", "Macromolecular Chemistry", "Optoelectronic Materials", "3D Printing with Light", "Molecular Electronics"],
        source: "https://hechtlab.de/",
        email: null,
        summary: "Professor of Chemistry at Humboldt University of Berlin and Founding Director of the Center for the Science of Materials Berlin, European Inventor Award finalist, and pioneer in light-controlled molecular switches.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 4. ITALY: Catholic University of Sacred Heart (Row 448)
  {
    institution: "Catholic University of Sacred Heart",
    shortName: "UCSC",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Milan & Rome, Italy",
    website: "https://www.unicatt.it",
    sourceRow: 448,
    slug: "catholic-university-of-sacred-heart",
    heroEyebrow: "Italy · Milan & Rome · Europe's Premier Catholic Research University · Reviewed 14 October 2026",
    headline: "Catholic University of Sacred Heart (Università Cattolica del Sacro Cuore)",
    description: "Catholic University of Sacred Heart guide: English MSc in Data Science & Healthcare Management, doctoral scholarships (€16,243/yr), Gemelli hospital research, and faculty profiles.",
    overview: "Founded in 1921 in Milan, Università Cattolica del Sacro Cuore (UCSC) is the largest private university in Europe, enrolling over 40,000 students across campuses in Milan, Rome, Brescia, Piacenza, and Cremona. Home to the world-renowned Policlinico Universitario Agostino Gemelli in Rome (consistently ranked Italy's #1 hospital), UCSC leads research in clinical oncology, biotechnology, data science for management, and agricultural sustainability. Explore verified English-taught Master's degrees, doctoral fellowships, and faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor's degree (minimum 3 years, 180 ECTS) in relevant subject area with minimum GPA equivalent to Italian 24/30 or 75%+.",
      phd: "Recognized Master's degree (Laurea Magistrale, 120 ECTS) with high graduation mark (typically 100/110+) and successful public evaluation of research project proposal and oral examination.",
      language: "Demonstrated English proficiency equivalent to CEFR B2/C1: Academic IELTS 6.0/6.5 minimum or TOEFL iBT 80+ for English-medium graduate curricula.",
      proposal: "For PhD: detailed research project proposal of 3 to 5 pages outlining research aims, state of the art, methodology, and expected scientific contributions.",
      appFee: "€100 application fee for international master's degree applicants.",
      documents: "University degree certificate, official transcripts with grading table, CV, motivation letter, and identity document."
    },
    tuitionText: "Tuition fees for international students at UCSC are determined by an income-based bracket system (typically €3,500 to €8,900 per year for non-EU students). Doctoral candidates holding university and ministerial scholarships receive complete 100% tuition waivers plus an annual living stipend of €16,243 gross.",
    opportunities: [
      {
        id: 179,
        subject: "biology",
        subjects: ["biology", "chemistry", "mathematics", "social-sciences"],
        type: "Scholarship",
        title: "UCSC Doctoral Scholarships & Educatt Merit Awards",
        source: "https://www.unicatt.it/en/study/phd-programs.html",
        funding: "Fully funded: Annual scholarship of €16,243 gross per year for 3 years, plus a 50% increase for research conducted abroad and subsidized housing support through Educatt",
        status: "open-scholarship",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Annual national call for doctoral admissions - Ciclo XLIII)",
        fee: "Free application for doctoral competition",
        tuition: "Full tuition completely waived for all admitted doctoral scholarship recipients.",
        requirements: {
          gpa: "Second-cycle university Master's degree (Laurea Magistrale or international equivalent 120 ECTS) with high academic marks.",
          ielts: "CEFR B2 level English proficiency (certified or assessed during interview).",
          gre: "Not required.",
          papers: "Original doctoral research proposal (3–5 pages) and Master's thesis.",
          references: "Two academic recommendation letters submitted online by university professors."
        },
        desc: "Three-year doctoral scholarships covering living stipends, international research travel supplements, and complete tuition waivers for top-ranking candidates in the annual doctoral competition."
      },
      {
        id: 180,
        subject: "physics",
        subjects: ["physics", "chemistry", "mathematics"],
        type: "PhD",
        title: "UCSC PhD in Science (Dottorato in Scienze)",
        source: "https://dottorati.unicatt.it/scienze",
        funding: "Fully funded: Three-year university doctoral scholarship (€16,243/year) with additional departmental research budget",
        status: "open-position",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 for Autumn doctoral commencement",
        fee: "Free application",
        tuition: "Zero tuition for scholarship holders.",
        requirements: {
          gpa: "Master's degree in Physics, Chemistry, or Mathematics with high academic marks.",
          ielts: "English fluency for oral examination and technical publishing.",
          gre: "Not required.",
          papers: "Master's thesis and doctoral research proposal aligned with department laboratories.",
          references: "Two academic referee letters and updated curriculum vitae."
        },
        desc: "Three-year interdisciplinary doctoral curriculum based at the Brescia and Milan campuses, investigating experimental physics, nanostructured surfaces, biomolecular chemistry, and mathematical modeling."
      },
      {
        id: 181,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "mathematics"],
        type: "Master's",
        title: "UCSC Master of Science in Data Science for Management",
        source: "https://international.unicatt.it/ucsc-international-data-science-for-management",
        funding: "Self-funded; eligible for UCSC International Scholarships (up to 30% tuition fee reduction)",
        status: "program-information",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Priority intake round for non-EU applicants)",
        fee: "€100 application fee",
        tuition: "€8,900 per year for non-EU students (reduced with merit scholarship); €3,500 to €8,900 based on income.",
        requirements: {
          gpa: "Bachelor's degree in Economics, Mathematics, Computer Science, or Engineering with minimum 75% equivalent GPA.",
          ielts: "English proficiency at CEFR B2 level (IELTS 6.0+ or TOEFL iBT 80+).",
          gre: "Not required.",
          papers: "Coursework background in calculus, statistics, programming, and microeconomics.",
          references: "Curriculum vitae, transcript with course descriptions, and motivation letter."
        },
        desc: "Two-year English-taught Master of Science degree (120 ECTS) in Milan, uniting statistical machine learning, predictive analytics, deep data architectures, and strategic corporate decision-making."
      },
      {
        id: 182,
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Master's",
        title: "UCSC Master of Science in Healthcare Management",
        source: "https://international.unicatt.it/ucsc-international-healthcare-management",
        funding: "Self-funded; eligible for Policlinico Gemelli merit awards and regional student welfare grants",
        status: "program-information",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for Autumn 2027 entry",
        fee: "€100 application processing fee",
        tuition: "€8,900 per year for international students; income-based reductions available.",
        requirements: {
          gpa: "Bachelor's degree in Medicine, Life Sciences, Economics, or Public Health with strong academic standing.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 80+.",
          gre: "Not required.",
          papers: "Demonstrated interest in clinical governance, healthcare economics, and digital medical technology.",
          references: "Two letters of recommendation and personal statement of purpose."
        },
        desc: "Two-year English-medium Master's program (120 ECTS) based at the School of Medicine and Policlinico Gemelli campus in Rome, preparing global managers for hospitals, pharmaceutical firms, and healthcare policy agencies."
      },
      {
        id: 183,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        title: "Policlinico Universitario Agostino Gemelli IRCCS Clinical Research Placements",
        source: "https://www.policlinicogemelli.it/ricerca-scientifica/",
        funding: "Funded research positions supported by Italian Ministry of Health (Ricerca Corrente) and EU Horizon Europe",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for clinical research project allocations",
        fee: "Free application directly to affiliated principal investigators",
        tuition: "Zero tuition; paid clinical research position.",
        requirements: {
          gpa: "Graduate degree in Medicine, Biotechnology, Molecular Biology, or Pharmacy with top marks.",
          ielts: "Working English fluency for international biomedical publishing.",
          gre: "Not required.",
          papers: "Experience in oncology cell culture, genomic sequencing, or clinical trial methodology.",
          references: "Curriculum vitae, publication list, and two academic referee letters."
        },
        desc: "World-class translational and clinical oncology research placements inside Policlinico Gemelli IRCCS in Rome, investigating personalized cancer therapies, molecular biomarkers, and innovative immunotherapy regimens."
      },
      {
        id: 184,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Internship",
        title: "UCSC International Internship & Traineeship Programme",
        source: "https://international.unicatt.it/ucsc-international-internships-abroad",
        funding: "Fully funded: Erasmus+ traineeship allowance (€450 to €600 per month) plus university partner hosting facilities",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for upcoming Spring/Summer mobility periods",
        fee: "Free participation under university exchange agreements",
        tuition: "Zero tuition.",
        requirements: {
          gpa: "Enrolled university student at an accredited partner institution worldwide.",
          ielts: "English or Italian language proficiency (B1/B2 minimum).",
          gre: "Not required.",
          papers: "Learning Agreement for Traineeship or internship project proposal.",
          references: "Home university international coordinator endorsement."
        },
        desc: "Structured two to six-month internship placements embedding international scholars within Milan's corporate, media, and design sectors alongside university research divisions."
      },
      {
        id: 185,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Fellowship",
        title: "UCSC Student Collaborations (Collaborazioni Studentesche)",
        source: "https://www.unicatt.it/servizi-agli-studenti/collaborazioni-studentesche.html",
        funding: "Salaried campus employment: €9.50 to €11.00 per hour (exempt from personal income tax) for up to 150 hours per academic year",
        status: "open-position",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (Annual campus student collaboration call)",
        fee: "Free application submitted online",
        tuition: "Zero tuition; paid student employment.",
        requirements: {
          gpa: "Matriculated UCSC student who has acquired at least 2/5 of required academic credits with good GPA.",
          ielts: "Italian or English working knowledge matching the assigned service.",
          gre: "Not required.",
          papers: "Merit ranking based on credits earned and exam grade average.",
          references: "University student enrollment record."
        },
        desc: "Official university part-time employment contracts (up to 150 hours total) assisting in university libraries, computer laboratories, campus orientation desks, and international student services."
      }
    ],
    researchers: [
      {
        id: 96,
        subject: "mathematics",
        name: "Prof. Dr. Gabriele Gianfreda",
        title: "Full Professor of Mathematical Physics / Faculty of Mathematical, Physical and Natural Sciences",
        university: "Catholic University of Sacred Heart",
        country: "Italy",
        topics: ["Mathematical Physics", "Stochastic Dynamical Systems", "Nonlinear Waves", "Fluid Dynamics Modeling", "Statistical Mechanics"],
        source: "https://docenti.unicatt.it/it/docente/gabriele-gianfreda",
        email: null,
        summary: "Full Professor of Mathematical Physics at Università Cattolica del Sacro Cuore in Brescia, leading research in stochastic differential equations, wave propagation in random media, and mathematical modeling of complex fluids.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 97,
        subject: "biology",
        name: "Prof. Dr. Walter Ricciardi",
        title: "Professor of Hygiene and Public Health / School of Medicine, Policlinico Gemelli",
        university: "Catholic University of Sacred Heart",
        country: "Italy",
        topics: ["Public Health", "Epidemiology", "Healthcare Policy", "Cancer Mission Board", "Preventive Medicine"],
        source: "https://docenti.unicatt.it/it/docente/walter-ricciardi",
        email: null,
        summary: "Professor of Hygiene and Public Health at UCSC in Rome, Chair of the European Commission Mission Board for Cancer, former President of the Italian National Institute of Health (ISS), and former member of the WHO Executive Board.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 98,
        subject: "biology",
        name: "Prof. Dr. Lorenzo Morelli",
        title: "Professor of Food Microbiology & Director, Dept. of Sustainable Food Process",
        university: "Catholic University of Sacred Heart",
        country: "Italy",
        topics: ["Gut Microbiota", "Probiotics", "Food Microbiology", "Lactic Acid Bacteria", "Functional Foods"],
        source: "https://docenti.unicatt.it/it/docente/lorenzo-morelli",
        email: null,
        summary: "Full Professor of Food Microbiology at UCSC in Piacenza, world authority on human gut microbiota, probiotic safety evaluation for the European Food Safety Authority (EFSA), and sustainable food biotechnology.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 5. USA: Harvard University (Row 732)
  {
    institution: "Harvard University",
    shortName: "Harvard",
    countryId: "usa",
    countryLabel: "United States",
    location: "Cambridge, Massachusetts, USA",
    website: "https://www.harvard.edu",
    sourceRow: 732,
    slug: "harvard-university",
    heroEyebrow: "United States · Massachusetts · World's Premier Research University · Reviewed 14 October 2026",
    headline: "Harvard University (Cambridge, Massachusetts)",
    description: "Harvard University guide: 5-year fully funded GSAS doctoral packages ($45,696/yr stipend + tuition), MS in Data Science (SEAS), Quantum Initiative labs, and faculty profiles.",
    overview: "Established in 1636, Harvard University is the oldest institution of higher learning in the United States and universally recognized as one of the world's preeminent research universities. Harvard's faculty and alumni have earned 161 Nobel laureates, 18 Fields Medalists, and 14 Turing Awards. Across the Harvard John A. Paulson School of Engineering and Applied Sciences (SEAS) and the Graduate School of Arts and Sciences (GSAS), Harvard pioneers breakthrough investigations in quantum computing, artificial intelligence, biotechnology, and cosmology. Explore verified graduate degrees, guaranteed doctoral funding packages, and world-renowned faculty profiles.",
    admissions: {
      masters: "Accredited four-year U.S. Bachelor's degree or international equivalent with exceptional academic record (typically 3.7+ / 4.0 GPA) in computer science, mathematics, or physical sciences.",
      phd: "Outstanding undergraduate or Master's degree with demonstrable scientific research ability, significant publications, and compelling letters of recommendation.",
      language: "Academic IELTS 7.5 overall (minimum 7.0 in all bands) or TOEFL iBT 100 overall (minimum 26 in each subscore).",
      proposal: "Comprehensive 2-page Statement of Purpose detailing research accomplishments, intellectual interests, and faculty alignment at Harvard SEAS/GSAS.",
      appFee: "USD $105 application fee submitted via the GSAS online application portal.",
      documents: "Complete official university transcripts, 3 academic letters of recommendation, resume / CV, and academic writing sample or code portfolio."
    },
    tuitionText: "Tuition for Master's programs at Harvard SEAS is charged per academic year (typically USD $62,000 to $65,000 per year). For doctoral researchers, Harvard GSAS guarantees full funding for five years: 100% full tuition and health fees are completely paid, plus an annual tax-free living stipend of USD $45,696.",
    opportunities: [
      {
        id: 186,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Harvard GSAS Doctoral Fellowship & Full Tuition Guarantee",
        source: "https://gsas.harvard.edu/financial-support/fellowships",
        funding: "Fully funded: 100% full tuition and health fee waiver plus annual living stipend of USD $45,696 for five years of doctoral study",
        status: "open-scholarship",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Strict annual deadline for September 2027 entry across SEAS & GSAS)",
        fee: "USD $105 application fee",
        tuition: "Full tuition completely covered for five years under Harvard GSAS funding guarantee.",
        requirements: {
          gpa: "Top-tier academic standing (typically 3.8+ GPA / A equivalent) in previous undergraduate or graduate studies.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "General GRE optional/not required by most SEAS departments.",
          papers: "Demonstrated research excellence through published work, preprints, or undergraduate thesis.",
          references: "Three academic reference letters submitted electronically through the GSAS portal."
        },
        desc: "Harvard's comprehensive five-year financial support guarantee for all admitted PhD students, providing full tuition coverage, health insurance, and an annual living stipend of USD $45,696."
      },
      {
        id: 187,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Harvard PhD in Computer Science (SEAS)",
        source: "https://seas.harvard.edu/computer-science/graduate-program",
        funding: "Fully funded: Five-year guaranteed funding package including full tuition and USD $45,696 annual stipend via research and teaching fellowships",
        status: "open-position",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 for Fall 2027 admission",
        fee: "USD $105 application fee",
        tuition: "Zero tuition for funded doctoral candidates.",
        requirements: {
          gpa: "Bachelor's or Master's degree in Computer Science, Mathematics, or Electrical Engineering with top marks.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Demonstrated research accomplishments in theoretical computer science, AI, systems, or security.",
          references: "Three confidential academic letters of recommendation evaluating research creativity."
        },
        desc: "Five-year doctoral research program inside the John A. Paulson School of Engineering and Applied Sciences (SEAS) in Allston, conducting frontier investigations in artificial intelligence, cryptography, systems, and quantum computer science."
      },
      {
        id: 188,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Master's",
        title: "Harvard Master of Science in Data Science (SEAS)",
        source: "https://seas.harvard.edu/applied-computation/graduate-programs/masters-data-science",
        funding: "Self-funded; eligible for external foundation fellowships and campus Teaching Fellow appointments",
        status: "program-information",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Strict annual deadline for Fall 2027 intake)",
        fee: "USD $105 application fee",
        tuition: "USD $64,500 per academic year (3 semesters full-time program).",
        requirements: {
          gpa: "Bachelor's degree with strong quantitative background in calculus, linear algebra, probability, and advanced programming.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "General GRE optional.",
          papers: "Resume / CV, 2-page statement of purpose, and technical programming portfolio.",
          references: "Three academic or professional recommendation letters."
        },
        desc: "Rigorous 3-semester Master of Science degree jointly offered by Computer Science and Statistics, focusing on statistical machine learning, deep learning, massive data management, and ethical data science."
      },
      {
        id: 189,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics"],
        type: "Master's",
        title: "Harvard Master of Science in Computational Science and Engineering (CSE)",
        source: "https://seas.harvard.edu/applied-computation/graduate-programs/masters-computational-science-and-engineering",
        funding: "Self-funded; eligible for merit bursaries and laboratory assistantships",
        status: "program-information",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 for Fall intake",
        fee: "USD $105 application processing fee",
        tuition: "USD $64,500 per academic year (typically 1 to 2 years full-time).",
        requirements: {
          gpa: "Bachelor's degree in engineering, physics, mathematics, or computer science with top academic standing.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "Optional.",
          papers: "Demonstrated coursework mastery of differential equations, numerical analysis, and C++/Python.",
          references: "Three letters of academic recommendation and university transcripts."
        },
        desc: "Advanced postgraduate master's degree training researchers in mathematical modeling, high-performance parallel computing, stochastic simulation, and physical data analysis."
      },
      {
        id: 190,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Research",
        title: "Harvard Center for Research on Computation and Society (CRCS) Placements",
        source: "https://crcs.seas.harvard.edu/",
        funding: "Funded postdoctoral and graduate research fellowships supported by NSF grants and Harvard endowed funds",
        status: "open-position",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 for collaborative research fellowship cycles",
        fee: "Free application directly to CRCS",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Doctoral or advanced graduate student in Computer Science, Applied Mathematics, or Economics.",
          ielts: "Technical English communication fluency.",
          gre: "Not required.",
          papers: "Demonstrated research contributions in AI for public health, algorithmic fairness, or multi-agent systems.",
          references: "Curriculum vitae, research statement, and two academic referee letters."
        },
        desc: "Interdisciplinary research center at Harvard SEAS bringing together computer scientists, public health experts, and social scientists to explore AI for social good, epidemic forecasting, and algorithmic governance."
      },
      {
        id: 191,
        subject: "physics",
        subjects: ["physics", "chemistry", "engineering"],
        type: "Internship",
        title: "Harvard PRISE (Program for Research in Science and Engineering)",
        source: "https://uraf.harvard.edu/prise",
        funding: "Fully funded: Living stipend of USD $5,000, free residential housing in Harvard historic houses, and meals for 10 weeks of summer laboratory research",
        status: "open-position",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027 (Strict annual deadline for Summer 2027 program)",
        fee: "Free application",
        tuition: "Zero tuition; fully sponsored summer research fellowship.",
        requirements: {
          gpa: "Enrolled undergraduate student in good academic standing.",
          ielts: "Working English fluency for laboratory collaboration.",
          gre: "Not required.",
          papers: "Detailed research project proposal matching a designated Harvard faculty laboratory.",
          references: "Harvard faculty lab sponsor commitment and academic transcript."
        },
        desc: "Competitive 10-week residential summer research program offering undergraduate scholars full housing, meals, stipends, and direct laboratory apprenticeships alongside Harvard faculty."
      },
      {
        id: 192,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "physics"],
        type: "Fellowship",
        title: "Harvard Teaching Fellowships (TF / Teaching Assistantships)",
        source: "https://gsas.harvard.edu/financial-support/teaching-fellowships",
        funding: "Salaried academic teaching appointments: USD $11,424 per course section per semester under Harvard Graduate Students Union (HGSU-UAW) agreement",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for Fall semester course teaching allocations",
        fee: "Free application through departmental teaching portals",
        tuition: "Zero tuition; salaried academic employment.",
        requirements: {
          gpa: "Matriculated Harvard PhD student in good academic standing.",
          ielts: "High level oral English presentation and tutorial instructional capabilities.",
          gre: "Not required.",
          papers: "Outstanding mastery of underlying coursework subject matter.",
          references: "Approval from course head professor and director of graduate studies."
        },
        desc: "Departmental academic teaching appointments providing instructional pedagogy training and competitive salary for conducting weekly section classes, grading problem sets, and managing laboratory courses."
      }
    ],
    researchers: [
      {
        id: 99,
        subject: "computer-science",
        name: "Prof. Dr. David Parkes",
        title: "John A. Paulson Dean of SEAS & George F. Colony Professor of Computer Science",
        university: "Harvard University",
        country: "United States",
        topics: ["Mechanism Design", "Multi-Agent Systems", "Artificial Intelligence", "Algorithmic Economics", "Machine Learning for Incentives"],
        source: "https://parkes.seas.harvard.edu/",
        email: null,
        summary: "Dean of the Harvard John A. Paulson School of Engineering and Applied Sciences (SEAS), George F. Colony Professor of Computer Science, AAAI Fellow, ACM Fellow, and global pioneer in mechanism design and AI economics.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 100,
        subject: "computer-science",
        name: "Prof. Dr. Cynthia Dwork",
        title: "Gordon McKay Professor of Computer Science / Harvard SEAS & Radcliffe",
        university: "Harvard University",
        country: "United States",
        topics: ["Differential Privacy", "Algorithmic Fairness", "Cryptography", "Proof-of-Work", "Distributed Computing"],
        source: "https://dwork.seas.harvard.edu/",
        email: null,
        summary: "Gordon McKay Professor of Computer Science at Harvard, inventor of Differential Privacy, co-inventor of Proof-of-Work, recipient of the Gödel Prize and Knuth Prize, and member of the National Academy of Sciences.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 101,
        subject: "physics",
        name: "Prof. Dr. Mikhail Lukin",
        title: "George Vasmer Leverett Professor of Physics / Co-Director, Harvard Quantum Initiative",
        university: "Harvard University",
        country: "United States",
        topics: ["Quantum Computing", "Neutral Atom Qubits", "Quantum Optics", "Nanophotonics", "Rydberg Atoms"],
        source: "https://lukin.physics.harvard.edu/",
        email: null,
        summary: "George Vasmer Leverett Professor of Physics at Harvard University, Co-Director of the Harvard Quantum Initiative, member of the National Academy of Sciences, and world leader in neutral-atom quantum processors.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 6. UK: University of Cambridge (Row 1311)
  {
    institution: "University of Cambridge",
    shortName: "Cambridge",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Cambridge, England, United Kingdom",
    website: "https://www.cam.ac.uk",
    sourceRow: 1311,
    slug: "university-of-cambridge",
    heroEyebrow: "United Kingdom · Cambridgeshire · Historic Collegiate Research University · Reviewed 14 October 2026",
    headline: "University of Cambridge",
    description: "University of Cambridge guide: Gates Cambridge Scholarships (full fees + £21,000/yr), PhD in Computer Science, Cavendish physics labs, and world-renowned faculty profiles.",
    overview: "Founded in 1209, the University of Cambridge is the world's third-oldest surviving university and one of its most prestigious. Cambridge has educated 121 Nobel laureates, 11 Fields Medalists, and 7 Turing Award winners. Home to the historic Cavendish Laboratory and the Department of Computer Science and Technology (the Computer Laboratory where Charles Babbage and Alan Turing pioneered computing), Cambridge conducts over £1.3 billion in annual research expenditures across quantum physics, machine learning, and biotechnology. Explore verified graduate degrees, fully funded doctoral scholarships, and world-leading faculty profiles.",
    admissions: {
      masters: "UK First Class Honours Bachelor's degree or international equivalent (typically 85%+ or 3.8/4.0 GPA) in computer science, mathematics, engineering, or physical sciences.",
      phd: "Master's degree with Distinction or UK First Class Honours undergraduate degree with demonstrable research capability and high academic standing.",
      language: "Cambridge Higher English language requirement: Academic IELTS 7.5 overall (minimum 7.0 in each component) or TOEFL iBT 110 overall (minimum 25 in each section).",
      proposal: "Comprehensive 2 to 3-page research proposal outlining the proposed research question, state of the art, methodology, and identified Cambridge research group.",
      appFee: "£50 to £75 postgraduate application fee submitted via the Applicant Portal.",
      documents: "Complete official university transcripts, 2 academic reference letters, curriculum vitae, research proposal, and passport copy."
    },
    tuitionText: "Tuition for postgraduate taught master's programs ranges from £38,000 to £45,000 per year for overseas international students (£15,000 to £20,000 for UK home students). Recipients of Gates Cambridge Scholarships or Cambridge Trust Awards receive 100% full university and college fee coverage plus an annual maintenance allowance of £21,000 per year.",
    opportunities: [
      {
        id: 193,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Gates Cambridge Scholarships & Cambridge Trust Awards",
        source: "https://www.gatescambridge.org/",
        funding: "Fully funded: Full university and college tuition fee coverage plus annual tax-free maintenance stipend of £21,000 per year, airfare, visa costs, and discretionary funding",
        status: "open-scholarship",
        deadline: "2026-12-03",
        deadlineText: "December 3, 2026 (Annual international deadline for Michaelmas 2027 entry; October 15 for US citizens)",
        fee: "£50 to £75 application fee",
        tuition: "Full tuition completely covered for the entire 3-to-4 year doctoral duration.",
        requirements: {
          gpa: "First Class Honours undergraduate degree (or international equivalent A / 3.9+ GPA) with outstanding intellectual ability.",
          ielts: "Cambridge Higher requirement: IELTS 7.5 overall with minimum 7.0 in all elements.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence, leadership potential, and commitment to improving the lives of others.",
          references: "Two academic referee letters and one specific personal Gates reference on leadership."
        },
        desc: "Prestigious global scholarship awarded to approximately 80 outstanding students outside the UK annually to pursue full-time postgraduate research degrees at the University of Cambridge."
      },
      {
        id: 194,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "University of Cambridge PhD in Computer Science",
        source: "https://www.cst.cam.ac.uk/admissions/phd",
        funding: "Fully funded: Departmental EPSRC studentships and Cambridge Trust awards covering full fees plus London-equivalent stipend (£19,237 to £21,000/yr)",
        status: "open-position",
        deadline: "2026-12-03",
        deadlineText: "December 3, 2026 for main funding round consideration",
        fee: "£75 application fee",
        tuition: "Zero tuition for funded students; standard overseas tuition £39,708/year.",
        requirements: {
          gpa: "First Class UK Honours degree in Computer Science, Mathematics, or closely related field.",
          ielts: "Academic IELTS 7.5 overall with 7.0 minimum in all components.",
          gre: "Not required.",
          papers: "Detailed 2-to-3 page research proposal matching Department of Computer Science research themes.",
          references: "Two strong academic referee letters and supervisor endorsement."
        },
        desc: "Three to four-year doctoral research program inside the Cambridge Computer Laboratory at the William Gates Building, conducting frontier investigations in artificial intelligence, programming languages, security, and systems."
      },
      {
        id: 195,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Cambridge MPhil in Advanced Computer Science (ACS)",
        source: "https://www.cst.cam.ac.uk/admissions/acs",
        funding: "Self-funded; eligible for Cambridge Trust merit bursaries and international college awards",
        status: "program-information",
        deadline: "2026-12-03",
        deadlineText: "December 3, 2026 (Priority funding deadline; final close February 25, 2027)",
        fee: "£75 application fee",
        tuition: "£42,216 for overseas international students; £15,921 for UK home students.",
        requirements: {
          gpa: "First Class UK Honours degree in Computer Science or Mathematics with exceptional quantitative mastery.",
          ielts: "Academic IELTS 7.5 overall with minimum 7.0 in each section.",
          gre: "Not required.",
          papers: "Extensive coursework background in compilers, algorithms, formal logic, and machine learning.",
          references: "Two academic referee letters from university faculty instructors."
        },
        desc: "Intensive 9-month taught and research master's degree preparing graduates for doctoral research, comprising advanced specialized modules and an individual 4-month research project under faculty mentorship."
      },
      {
        id: 196,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "Cambridge MPhil in Machine Learning and Machine Intelligence (MLMI)",
        source: "https://www.eng.cam.ac.uk/admissions/postgraduate/courses/mphil-machine-learning-and-machine-intelligence",
        funding: "Self-funded; eligible for Department of Engineering bursaries and Cambridge Trust awards",
        status: "program-information",
        deadline: "2026-12-03",
        deadlineText: "December 3, 2026 for funding consideration",
        fee: "£75 application processing fee",
        tuition: "£44,500 for overseas international students; £16,500 for UK home students.",
        requirements: {
          gpa: "First Class UK Honours degree in Engineering, Computer Science, Mathematics, or Physics.",
          ielts: "Academic IELTS 7.5 overall with minimum 7.0 in all bands.",
          gre: "Not required.",
          papers: "Rigorous foundation in linear algebra, multivariable calculus, probability, and Python/PyTorch.",
          references: "Two academic letters of recommendation and personal statement of purpose."
        },
        desc: "Elite one-year postgraduate degree inside the Department of Engineering, providing advanced mathematical and computational training in deep learning, speech recognition, computer vision, and probabilistic reasoning."
      },
      {
        id: 197,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Research",
        title: "Cambridge Cavendish Laboratory Research Placements",
        source: "https://www.phy.cam.ac.uk/",
        funding: "Funded research positions supported by EPSRC, European Research Council (ERC), and Trinity College fellowships",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for collaborative postdoctoral and graduate research intakes",
        fee: "Free application directly to Cavendish research groups",
        tuition: "Zero tuition; funded research appointment.",
        requirements: {
          gpa: "Graduate degree in Physics, Materials Science, or Applied Mathematics with distinction.",
          ielts: "Technical English publishing and presentation capability.",
          gre: "Not required.",
          papers: "Demonstrated contributions in condensed matter physics, quantum optics, or astrophysics.",
          references: "Curriculum vitae, research portfolio, and two academic references."
        },
        desc: "World-famous physics research placements inside the Cavendish Laboratory, pioneering research in quantum matter, optoelectronics, semiconductor physics, and cosmological instrumentation."
      },
      {
        id: 198,
        subject: "mathematics",
        subjects: ["mathematics", "physics"],
        type: "Internship",
        title: "Cambridge Summer Research in Mathematics and Physics (CMP)",
        source: "https://www.maths.cam.ac.uk/undergrad/summer-research",
        funding: "Fully funded: Bursary of £380 to £420 per week for 8 to 10 weeks of summer research work inside DAMTP or DPMMS",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual deadline for Summer 2027 research bursary applications)",
        fee: "Free application",
        tuition: "Zero tuition; paid student research bursary.",
        requirements: {
          gpa: "Enrolled undergraduate student with minimum First Class predicted standing.",
          ielts: "Fluent working English communication.",
          gre: "Not required.",
          papers: "Agreed project description co-authored with a Cambridge faculty research supervisor.",
          references: "Faculty host endorsement and university academic transcript."
        },
        desc: "Competitive summer research placement program in the Faculty of Mathematics, enabling students to collaborate with Cambridge researchers on theoretical physics, fluid dynamics, and pure mathematics."
      },
      {
        id: 199,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "mathematics"],
        type: "Fellowship",
        title: "Cambridge Postgraduate Demonstratorships & College Supervisions",
        source: "https://www.postgraduate.study.cam.ac.uk/finance/working-while-you-study",
        funding: "Salaried academic tutoring: £35.00 to £48.50 per hour for conducting small-group undergraduate supervisions and lab demonstrating",
        status: "open-position",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 for upcoming Michaelmas term teaching allocations",
        fee: "Free application via Cambridge colleges and academic departments",
        tuition: "Zero tuition; hourly salaried university employment.",
        requirements: {
          gpa: "Registered postgraduate doctoral researcher (PhD student) at the University of Cambridge.",
          ielts: "High level spoken English communication for undergraduate supervision.",
          gre: "Not required.",
          papers: "Mastery of course subject matter and completion of Cambridge Teaching & Learning workshop.",
          references: "Approval from PhD primary research supervisor."
        },
        desc: "Collegiate and departmental academic teaching positions for enrolled doctoral researchers, providing small-group pedagogy training and hourly remuneration for supervising Cambridge undergraduates."
      }
    ],
    researchers: [
      {
        id: 102,
        subject: "engineering",
        name: "Prof. Dr. Zoubin Ghahramani FRS",
        title: "Professor of Information Engineering & VP Research at Google DeepMind",
        university: "University of Cambridge",
        country: "United Kingdom",
        topics: ["Machine Learning", "Bayesian Nonparametrics", "Probabilistic Programming", "Information Theory", "Artificial Intelligence"],
        source: "https://www.eng.cam.ac.uk/profiles/zg201",
        email: null,
        summary: "Professor of Information Engineering at the University of Cambridge, Vice President of Research at Google DeepMind, Fellow of the Royal Society, and world leader in Bayesian machine learning and statistical artificial intelligence.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 103,
        subject: "engineering",
        name: "Prof. Dr. Carl Edward Rasmussen",
        title: "Professor of Information Engineering / Computational and Biological Learning Lab",
        university: "University of Cambridge",
        country: "United Kingdom",
        topics: ["Gaussian Processes", "Probabilistic Machine Learning", "Reinforcement Learning", "Climate Modeling AI", "Statistical Pattern Recognition"],
        source: "https://learning.eng.cam.ac.uk/carl/",
        email: null,
        summary: "Professor of Information Engineering at Cambridge, pioneer of Gaussian Processes in Machine Learning, co-author of the definitive MIT Press textbook on Gaussian processes, and leading researcher in AI for climate forecasting.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 104,
        subject: "physics",
        name: "Prof. Dr. Mete Atatüre",
        title: "Professor of Physics & Head of the Cavendish Laboratory",
        university: "University of Cambridge",
        country: "United Kingdom",
        topics: ["Quantum Optics", "Solid-State Spin Qubits", "Quantum Nanotechnology", "Diamond Colour Centres", "Semiconductor Quantum Dots"],
        source: "https://www.phy.cam.ac.uk/directory/atatrem",
        email: null,
        summary: "Professor of Physics and Head of the historic Cavendish Laboratory at Cambridge, Fellow of the Institute of Physics, Thomas Young Medal recipient, and global leader in optical control of solid-state quantum bits.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 7. JAPAN: Kyoto University (Row 1694)
  {
    institution: "Kyoto University",
    shortName: "Kyodai",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Kyoto, Japan",
    website: "https://www.kyoto-u.ac.jp",
    sourceRow: 1694,
    slug: "kyoto-university",
    heroEyebrow: "Japan · Kyoto · Imperial University of Fundamental Discovery · Reviewed 14 October 2026",
    headline: "Kyoto University (京都大学 - Kyodai)",
    description: "Kyoto University guide: President's Award & MEXT scholarships, Master of Informatics, Yukawa Institute theoretical physics, Amgen internships, and Nobel laureate faculty.",
    overview: "Established in 1897 as Japan's second imperial university, Kyoto University (Kyodai) is world-renowned for its spirit of academic freedom and ground-breaking fundamental discoveries. Kyoto University has produced 19 Nobel laureates (more than any other institution in Asia), 2 Fields Medalists, and a Gauss Prize winner. Renowned for Hideki Yukawa's discovery of the meson and Shinya Yamanaka's discovery of iPS stem cells, Kyoto University excels in theoretical physics, mathematics, chemistry, and informatics. Explore verified English-medium degrees, fully funded doctoral scholarships, and distinguished faculty profiles.",
    admissions: {
      masters: "Completion of 16 years of formal education culminating in an accredited Bachelor's degree (or equivalent 4-year undergraduate diploma) in relevant disciplines.",
      phd: "Recognized Master's degree or professional degree with demonstrated research accomplishments, publications, or Master's thesis of superior academic merit.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5/7.0 overall or TOEFL iBT 85+ for English-language graduate degree tracks (e.g., International Graduate Program).",
      proposal: "Comprehensive 2 to 3-page research plan (研究計画書) detailing the intended research questions, background literature, methodology, and faculty supervisor alignment.",
      appFee: "¥10,000 to ¥30,000 examination fee depending on graduate school and international applicant category.",
      documents: "Graduation certificate, official transcripts with grading rubric, statement of purpose, two letters of recommendation, and passport scan."
    },
    tuitionText: "Under Japanese national university regulations, annual tuition is standard across all faculties at ¥535,800 per year (approx. USD $3,600), plus a one-time admission fee of ¥282,000. Recipient scholars of the Japanese Government MEXT scholarship or Kyoto University President's Award receive 100% full tuition exemption plus monthly living allowances of ¥147,000 to ¥200,000.",
    opportunities: [
      {
        id: 200,
        subject: "physics",
        subjects: ["physics", "computer-science", "engineering", "chemistry", "mathematics", "biology"],
        type: "Scholarship",
        title: "Kyoto University President's Award & MEXT Scholarships",
        source: "https://www.kyoto-u.ac.jp/en/education-campus/tuition-scholarships/scholarships",
        funding: "Fully funded: Monthly living stipend of ¥147,000 to ¥200,000 per month plus 100% full tuition and matriculation fee exemption for up to three years of doctoral study",
        status: "open-scholarship",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (Application deadline for Autumn 2027 doctoral enrollment)",
        fee: "¥10,000 screening fee",
        tuition: "Full tuition completely waived under the scholarship system.",
        requirements: {
          gpa: "Demonstrated top-tier academic record in prior undergraduate and Master's degree studies.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 88+.",
          gre: "Recommended for quantitative programs.",
          papers: "Master's research thesis or peer-reviewed publications demonstrating independent research capability.",
          references: "Two letters of recommendation from university academic mentors."
        },
        desc: "Kyoto University's premier international doctoral fellowship, providing full tuition and admission fee exemptions plus living allowances for outstanding privately financed and government-sponsored international PhD students."
      },
      {
        id: 201,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Kyoto University PhD in Informatics",
        source: "https://www.i.kyoto-u.ac.jp/en/admission/doctor/",
        funding: "Fully funded: Eligible for JST SPRING fellowships (¥2,900,000/yr) and departmental research assistantships",
        status: "open-position",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 for Autumn intake (International Course in Intelligence Science)",
        fee: "¥30,000 examination fee",
        tuition: "¥535,800 per year (tuition exemption available based on academic merit).",
        requirements: {
          gpa: "Master's degree in Informatics, Computer Science, or Applied Mathematics with high marks.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85+.",
          gre: "General test scores accepted.",
          papers: "Master's research thesis and 3-page doctoral research proposal matching faculty research laboratories.",
          references: "Prior contact and informal acceptance letter from a graduate faculty supervisor."
        },
        desc: "Three-year doctoral curriculum inside the Graduate School of Informatics at Yoshida campus, offering world-class research in intelligence science, social informatics, speech recognition, and complex network algorithms."
      },
      {
        id: 202,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "Kyoto University Master of Informatics",
        source: "https://www.i.kyoto-u.ac.jp/en/admission/master/",
        funding: "Self-funded; eligible for MEXT University Recommendation scholarships and Kyoto tuition exemptions",
        status: "program-information",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (International admissions round for October 2027 entry)",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per year plus one-time admission fee of ¥282,000.",
        requirements: {
          gpa: "Four-year Bachelor's degree in Computer Science, Mathematics, or closely related quantitative discipline.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85+.",
          gre: "Recommended.",
          papers: "Strong coursework background in algorithms, discrete mathematics, computer architecture, and systems.",
          references: "Two letters of academic recommendation and official transcripts."
        },
        desc: "Two-year English-medium research Master's degree inside the Graduate School of Informatics, focusing on theoretical foundations, computer vision, natural language processing, and robotic intelligence."
      },
      {
        id: 203,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Master's",
        title: "Kyoto University Master of Science in Physics",
        source: "https://www.sci.kyoto-u.ac.jp/en/divisions/physics.html",
        funding: "Self-funded; eligible for JASSO honors scholarships and Kyoto tuition waivers",
        status: "program-information",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 for Autumn intake",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per year plus one-time admission fee.",
        requirements: {
          gpa: "Bachelor of Science in Physics or Mathematics with solid quantum mechanics and statistical physics background.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85+.",
          gre: "Physics subject test recommended.",
          papers: "Demonstrated coursework background in theoretical and experimental physics.",
          references: "Official university transcripts, degree certificate, and personal statement."
        },
        desc: "Two-year Master of Science program inside Kyoto University's historic Department of Physics, offering world-renowned training in condensed matter physics, particle astrophysics, and theoretical cosmology."
      },
      {
        id: 204,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Research",
        title: "Kyoto University Yukawa Institute for Theoretical Physics (YITP) Placements",
        source: "https://www.yukawa.kyoto-u.ac.jp/en-GB/",
        funding: "Funded research projects supported by MEXT and international theoretical physics collaboration grants",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for collaborative project allocations",
        fee: "Free application directly to YITP faculty",
        tuition: "Zero tuition; funded theoretical research placement.",
        requirements: {
          gpa: "Graduate student in Theoretical Physics, High-Energy Physics, or String Theory with distinction.",
          ielts: "Technical English fluency for international collaboration.",
          gre: "Not required.",
          papers: "Published or pre-print research in quantum gravity, particle physics, or non-equilibrium statistical mechanics.",
          references: "Curriculum vitae, publication list, and supervisor endorsement."
        },
        desc: "World-leading theoretical physics research placements inside YITP in Kyoto (founded by Nobel laureate Hideki Yukawa), participating in quantum field theory, superstring theory, and gravitational wave cosmology."
      },
      {
        id: 205,
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Internship",
        title: "Kyoto University Amgen Scholars Summer Research Program",
        source: "https://www.kyoto-u.ac.jp/en/education-campus/international/amgen_scholars",
        funding: "Fully funded: Living stipend of ¥250,000, free university accommodation, round-trip economy airfare to Kyoto, and scientific symposium travel",
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
        desc: "Prestigious eight-week summer research program (June–August) offering undergraduate scholars from around the world direct laboratory research apprenticeships under Kyoto faculty in molecular biology, chemistry, and bioengineering."
      },
      {
        id: 206,
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering", "computer-science"],
        type: "Fellowship",
        title: "Kyoto University Teaching Assistantships (TA) & Research Assistantships (RA)",
        source: "https://www.kyoto-u.ac.jp/en/about/operations/financial/scholarships.html",
        funding: "Salaried campus employment: ¥1,350 to ¥1,950 per hour assisting in laboratory investigations and course instruction",
        status: "open-position",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027 for Spring semester appointments",
        fee: "Free application through department administration",
        tuition: "Zero tuition; hourly salaried university employment.",
        requirements: {
          gpa: "Enrolled graduate student at Kyoto University in good academic standing.",
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
        id: 105,
        subject: "biology",
        name: "Prof. Dr. Shinya Yamanaka",
        title: "Nobel Laureate in Physiology or Medicine (2012) / Director Emeritus, CiRA",
        university: "Kyoto University",
        country: "Japan",
        topics: ["Induced Pluripotent Stem Cells (iPSCs)", "Stem Cell Biology", "Cellular Reprogramming", "Regenerative Medicine", "Gene Regulation"],
        source: "https://www.cira.kyoto-u.ac.jp/e/research/yamanaka_summary.html",
        email: null,
        summary: "Director Emeritus of the Center for iPS Cell Research and Application (CiRA) at Kyoto University, 2012 Nobel Laureate in Physiology or Medicine for the landmark discovery that mature, specialized cells can be reprogrammed to become pluripotent stem cells.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 106,
        subject: "engineering",
        name: "Prof. Dr. Hiroshi Ishiguro",
        title: "Visiting Professor at Kyoto University & ATR Fellow / Sanken",
        university: "Kyoto University",
        country: "Japan",
        topics: ["Android Robotics", "Human-Robot Interaction", "Geminoid Series", "Cognitive Robotics", "Teleoperation Systems"],
        source: "https://www.ar.sanken.osaka-u.ac.jp/ishiguro/",
        email: null,
        summary: "Visiting Professor at Kyoto University and ATR Fellow, world-renowned creator of the Geminoid and Erica android series, and pioneer in human-robot interaction and social robotics.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 107,
        subject: "computer-science",
        name: "Prof. Dr. Katsumi Tanaka",
        title: "Professor Emeritus of Informatics / Graduate School of Informatics",
        university: "Kyoto University",
        country: "Japan",
        topics: ["Information Retrieval", "Web Mining", "Multimedia Databases", "Social Media Analytics", "Knowledge Discovery"],
        source: "https://www.dl.kuis.kyoto-u.ac.jp/",
        email: null,
        summary: "Professor Emeritus at Kyoto University, former Dean of the Graduate School of Informatics, and pioneer in web information mining, digital libraries, and structured multimedia database search.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 8. SWEDEN: Uppsala University (Row 1619)
  {
    institution: "Uppsala University",
    shortName: "Uppsala",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Uppsala, Sweden",
    website: "https://www.uu.se",
    sourceRow: 1619,
    slug: "uppsala-university",
    heroEyebrow: "Sweden · Uppsala · Scandinavia's Oldest University · Reviewed 14 October 2026",
    headline: "Uppsala University (Uppsala universitet)",
    description: "Uppsala University guide: Uppsala full tuition scholarships, salaried PhD employment (SEK 32k–37.5k/mo), MSc in Computer Science, and Nobel laureate heritage.",
    overview: "Founded in 1477, Uppsala University is the oldest university in Sweden and all of Scandinavia. Consistently ranked among the top 100 universities worldwide, Uppsala has educated 16 Nobel laureates including Svante Arrhenius, Dag Hammarskjöld, and 2022 Nobelist Svante Pääbo. Across the Ångström Laboratory and the Biomedical Centre (BMC), Uppsala conducts frontier research in battery technology (Battery 2030+), evolutionary genomics, computer systems, and quantum materials. Explore verified English-taught Master's degrees, salaried doctoral positions, and faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree in Engineering, Computer Science or related quantitative field (minimum 180 ECTS credits), with a completed undergraduate thesis project.",
      phd: "Completed second-cycle Master's degree (minimum 120 ECTS) in relevant discipline satisfying Swedish third-cycle admission criteria, with demonstrable scientific publication or thesis excellence.",
      language: "Demonstrated English proficiency equivalent to Swedish upper secondary school English 6: Academic IELTS 6.5 overall (minimum 5.5 in each band) or TOEFL iBT 90 overall (writing minimum 20).",
      proposal: "For Master's: statement of purpose and academic transcripts via University Admissions Sweden. For PhD: comprehensive research statement matching specific advertised doctoral vacancies.",
      appFee: "SEK 900 centralized application fee for non-EU/EEA students applying through University Admissions Sweden (waived for EU/EEA citizens).",
      documents: "Degree certificate, complete official transcripts with grading rubric, English proficiency test score, and copy of valid passport."
    },
    tuitionText: "Under Swedish higher education regulations, EU/EEA and Swiss citizens study completely tuition-free. For non-EU/EEA international students, tuition for master's programs is SEK 72,500 to SEK 82,500 per semester (approx. SEK 290,000 to SEK 330,000 for a two-year 120 ECTS program). The Uppsala University Scholarship Programme covers 100% of tuition fees for outstanding admitted Master's candidates. Doctoral candidates hold salaried employment contracts and study tuition-free.",
    opportunities: [
      {
        id: 207,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "chemistry"],
        type: "Scholarship",
        title: "Uppsala University President's Club Scholarships & King Carl Gustaf Scholarships",
        source: "https://www.uu.se/en/admissions/master/scholarships/uppsala-university-scholarships",
        funding: "Fully funded: 100% full tuition fee waiver for the entire two-year duration of the Master's programme (saving up to SEK 330,000)",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Swedish national autumn admission round 1 deadline)",
        fee: "SEK 900 University Admissions Sweden application fee",
        tuition: "Full tuition completely waived for the 1st and 2nd academic year.",
        requirements: {
          gpa: "Outstanding academic marks in completed undergraduate Bachelor's degree (grade average equivalent to top 10%).",
          ielts: "Swedish English 6 equivalent (IELTS 6.5 overall with minimum 5.5 in each band) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic motivation, extracurricular leadership, and scholarly excellence.",
          references: "Letters of academic recommendation, motivation statement, and curriculum vitae."
        },
        desc: "Uppsala's premier merit-based scholarship covering full tuition fees for outstanding non-EU/EEA international students admitted to two-year Master's degree programs at Uppsala University."
      },
      {
        id: 208,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Uppsala University Salaried Doctoral Employment (Doktorandanställning)",
        source: "https://www.uu.se/en/about-uu/join-us/phd-studies",
        funding: "Fully funded: Four-year salaried university employment under Swedish state collective agreements starting from SEK 32,000/month rising to SEK 37,500/month gross, with full Swedish social benefits and pension",
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
        desc: "Four-year salaried doctoral research appointments across Uppsala research divisions, combining cutting-edge scientific investigation with teaching duties under standard Swedish employment contracts and comprehensive health coverage."
      },
      {
        id: 209,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Uppsala Master of Science in Computer Science",
        source: "https://www.uu.se/en/study/programme/master-programme-computer-science",
        funding: "Self-funded; eligible for Uppsala University Scholarships and Swedish Institute (SI) scholarships",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Autumn 2027 entry",
        fee: "SEK 900 centralized application fee",
        tuition: "SEK 72,500 per semester (SEK 290,000 total 2-year tuition for non-EU students; free for EU/EEA).",
        requirements: {
          gpa: "Bachelor's degree with major in Computer Science or Mathematics with strong grades in linear algebra, algorithms, and programming.",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each section).",
          gre: "Not required.",
          papers: "Curriculum vitae and detailed summary of undergraduate mathematics and programming modules.",
          references: "Official university transcripts, degree certificate, and passport copy."
        },
        desc: "Two-year English-taught Master's program (120 ECTS) based at the Information Technology department, covering algorithms, machine learning, embedded systems, software engineering, and an individual 30-ECTS thesis."
      },
      {
        id: 210,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Master's",
        title: "Uppsala Master of Science in Applied Biotechnology",
        source: "https://www.uu.se/en/study/programme/master-programme-applied-biotechnology",
        funding: "Self-funded; eligible for Uppsala scholarships and SciLifeLab laboratory bursaries",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Autumn entry",
        fee: "SEK 900 application fee",
        tuition: "SEK 72,500 per semester (SEK 290,000 total for non-EU international students).",
        requirements: {
          gpa: "Bachelor of Science in Biotechnology, Molecular Biology, or Chemistry with solid laboratory background.",
          ielts: "Academic IELTS 6.5 overall with minimum 5.5 in all bands.",
          gre: "Not required.",
          papers: "Demonstrated coursework background in genetics, biochemistry, cell biology, and microbiology.",
          references: "Complete academic transcripts, motivation letter, and CV."
        },
        desc: "Interdisciplinary two-year Master's degree (120 ECTS) inside the Biomedical Centre (BMC), partnering with Uppsala's vibrant life science cluster in biopharmaceuticals, synthetic biology, and molecular diagnostics."
      },
      {
        id: 211,
        subject: "physics",
        subjects: ["physics", "engineering", "chemistry"],
        type: "Research",
        title: "Uppsala Ångström Laboratory Research Placements",
        source: "https://www.teknat.uu.se/angstrom-laboratory/",
        funding: "Funded research projects supported by the Swedish Research Council (VR), Vinnova, and European Horizon programs",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for collaborative seed projects",
        fee: "Free application directly to project directors",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate degree in Physics, Materials Chemistry, or Electrical Engineering with distinction.",
          ielts: "Technical English fluency for international collaboration.",
          gre: "Not required.",
          papers: "Prior experience in cleanroom nanofabrication, battery electrochemistry, or X-ray spectroscopy.",
          references: "Academic curriculum vitae, publication list, and two referee contacts."
        },
        desc: "Europe's foremost advanced materials and energy physics research center at Ångström Laboratory, housing state-of-the-art cleanrooms, synchrotron beamlines, and battery storage labs under the Battery 2030+ initiative."
      },
      {
        id: 212,
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Internship",
        title: "Uppsala International Summer Research Traineeships & ERASMUS+ Placements",
        source: "https://www.uu.se/en/study/exchange-studies",
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
        desc: "Two to six-month structured research traineeships inside Uppsala research laboratories in electrochemistry, solar cell materials, and structural biology."
      },
      {
        id: 213,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "physics"],
        type: "Fellowship",
        title: "Uppsala Graduate Teaching & Laboratory Demonstrator Assistantships",
        source: "https://www.uu.se/en/students/work-and-career/work-at-uu",
        funding: "Salaried hourly university employment: SEK 165 to SEK 205 per hour for supervising exercise classes, coding labs, and grading assignments",
        status: "open-position",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 for upcoming Autumn semester course assistantships",
        fee: "Free application via Uppsala course examiners",
        tuition: "Zero tuition; paid student employment.",
        requirements: {
          gpa: "Enrolled Master's or doctoral student at Uppsala in good academic standing.",
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
        id: 108,
        subject: "biology",
        name: "Prof. Dr. Svante Pääbo",
        title: "Nobel Laureate in Physiology or Medicine (2022) / Uppsala Alumnus & Hon. Professor",
        university: "Uppsala University",
        country: "Sweden",
        topics: ["Paleogenomics", "Human Evolution", "Ancient DNA", "Neanderthal Genome", "Molecular Anthropology"],
        source: "https://www.uu.se/",
        email: null,
        summary: "Uppsala University alumnus and Honorary Professor, 2022 Nobel Laureate in Physiology or Medicine for his groundbreaking discoveries concerning the genomes of extinct hominins and human evolution, founding the field of paleogenomics.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 109,
        subject: "chemistry",
        name: "Prof. Dr. Kristina Edström",
        title: "Professor of Inorganic Chemistry / Coordinator of Battery 2030+",
        university: "Uppsala University",
        country: "Sweden",
        topics: ["Battery Chemistry", "Lithium-Ion Batteries", "Solid-State Batteries", "Electrode Materials", "Synchrotron Characterization"],
        source: "https://katalog.uu.se/profile/?id=N96-618",
        email: null,
        summary: "Professor of Inorganic Chemistry at Uppsala University's Ångström Laboratory, Coordinator of the €40M+ European Battery 2030+ research initiative, member of the Royal Swedish Academy of Engineering Sciences, and leading battery researcher.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 110,
        subject: "computer-science",
        name: "Prof. Dr. Wangyi Rao",
        title: "Professor of Embedded Systems / Department of Information Technology",
        university: "Uppsala University",
        country: "Sweden",
        topics: ["Real-Time Systems", "Formal Verification", "Timed Automata", "UPPAAL Model Checker", "Embedded Software"],
        source: "https://katalog.uu.se/profile/?id=N96-857",
        email: null,
        summary: "Professor of Embedded Systems at Uppsala University, IEEE Fellow, CAV Award recipient, and co-creator of UPPAAL (the world's most widely used model-checking tool for real-time and timed automata systems).",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 9. NETHERLANDS: TU Delft (Delft University of Technology) (Row 1513)
  {
    institution: "TU Delft (Delft University of Technology)",
    shortName: "TU Delft",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Delft, South Holland, Netherlands",
    website: "https://www.tudelft.nl",
    sourceRow: 1513,
    slug: "delft-university-of-technology",
    heroEyebrow: "Netherlands · South Holland · World-Class Engineering & Technology · Reviewed 14 October 2026",
    headline: "TU Delft (Delft University of Technology)",
    description: "TU Delft guide: Justus & Louise van Effen Scholarships (full tuition + €30,000 living grant), salaried CAO-NU PhD positions, MSc Aerospace Engineering, and faculty.",
    overview: "Established in 1842, Delft University of Technology (TU Delft) is the oldest and largest Dutch public technical university, ranked among the top 15 engineering and technology institutions in the world. TU Delft is globally celebrated for Aerospace Engineering (ranked #1 worldwide), Civil Engineering, Architecture, and Quantum Computing through QuTech. Review verified Master's curricula, salaried doctoral employment, aerospace wind-tunnel internships, and distinguished faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree in Engineering, Computer Science or related quantitative field (minimum 180 ECTS credits) matching specific foundational course requirements with minimum CGPA of 75%+ or 3.2/4.0.",
      phd: "Recognized Master of Science degree (120 ECTS) with excellent academic marks, strong thesis research evidence, and successful competitive interview for an advertised doctoral vacancy.",
      language: "Demonstrated English proficiency: Academic IELTS 7.0 overall (minimum 6.5 in all subscores) or TOEFL iBT 100 overall (minimum 22 in each component).",
      proposal: "For Master's: motivation statement, detailed course descriptions, and CV via Studielink and Osiaan. For PhD: comprehensive research statement aligned with advertised vacancy calls.",
      appFee: "€100 application fee for international applicants holding non-Dutch degrees (refunded upon successful matriculation).",
      documents: "Complete official transcripts, degree certificate, detailed descriptions of core undergraduate mathematics/programming modules, curriculum vitae, and passport scan."
    },
    tuitionText: "Under Dutch national higher education regulations, EU/EEA students pay the statutory tuition fee of €2,530 per year. For non-EU/EEA international students, tuition is approximately €21,515 per year for Master's programs. Outstanding admitted international students can receive the Justus & Louise van Effen Excellence Scholarship, covering 100% of tuition fees plus a €30,000 living allowance grant over 2 years. Doctoral candidates (Promovendi) are paid university employees under the Dutch CAO-NU collective agreement.",
    opportunities: [
      {
        id: 214,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "chemistry"],
        type: "Scholarship",
        title: "TU Delft Justus & Louise van Effen Excellence Scholarships",
        source: "https://www.tudelft.nl/en/education/practical-matters/scholarships/justus-louise-van-effen-excellence-scholarships",
        funding: "Fully funded: Full tuition fee waiver (€21,515 per year) plus €30,000 living expenses contribution (€15,000 per year) over the two-year Master's programme",
        status: "open-scholarship",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Strict annual deadline for international Excellence scholarship consideration)",
        fee: "€100 application fee (refunded upon matriculation)",
        tuition: "Full tuition completely waived for the entire two-year 120 ECTS duration.",
        requirements: {
          gpa: "Graduation with cumulative grade point average (CGPA) of at least 80% or equivalent to first class honors.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all sections) or TOEFL iBT 100.",
          gre: "GRE revised General Test required for MSc applicants in Aerospace and Computer Science.",
          papers: "Comprehensive motivation essay explaining academic thesis interests and CV.",
          references: "Two academic referee letters submitted directly through the online admission portal."
        },
        desc: "TU Delft's most prestigious merit scholarship awarded to outstanding non-EU/EEA international students admitted to MSc programmes, providing full tuition coverage and annual living expense allowances."
      },
      {
        id: 215,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "TU Delft Salaried PhD Positions (Promovendi under CAO-NU)",
        source: "https://www.tudelft.nl/en/about-tu-delft/working-at-tu-delft/phd-at-tu-delft",
        funding: "Fully funded: Four-year salaried university employment under Collective Labour Agreement for Dutch Universities (CAO-NU) starting at €2,872/month in year 1 rising to €3,670/month in year 4 gross, plus 8% holiday allowance and 8.3% end-of-year bonus",
        status: "open-position",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Continuous rolling recruitment across TU Delft faculties)",
        fee: "Free application directly to open vacancy",
        tuition: "Zero tuition. PhD candidates are paid university staff members with comprehensive Dutch health and pension benefits.",
        requirements: {
          gpa: "Master of Science degree (120 ECTS) in Computer Science, Aerospace, or Electrical Engineering with high marks.",
          ielts: "Fluent technical English communication for international collaboration and scientific publishing.",
          gre: "Not required.",
          papers: "Master's research thesis or peer-reviewed conference publications.",
          references: "Curriculum vitae, research portfolio, and two academic referee contacts."
        },
        desc: "Four-year salaried doctoral research appointments across TU Delft departments, conducting frontier industrial and fundamental investigations under standard Dutch collective employment contracts."
      },
      {
        id: 216,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master's",
        title: "TU Delft Master of Science in Aerospace Engineering",
        source: "https://www.tudelft.nl/en/education/programmes/masters/aerospace-engineering/msc-aerospace-engineering",
        funding: "Self-funded; eligible for Justus & Louise van Effen scholarships and European Space Agency bursaries",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Strict international deadline for Autumn 2027 intake)",
        fee: "€100 application fee",
        tuition: "€21,515 per year for non-EU students; €2,530 per year for EU/EEA students.",
        requirements: {
          gpa: "Bachelor's degree in Aerospace or Mechanical Engineering with solid mathematics, aerodynamics, and structural mechanics.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 100.",
          gre: "GRE revised General Test required for applicants with non-Dutch Bachelor's degrees.",
          papers: "Detailed course syllabus descriptions mapping undergraduate credits to TU Delft prerequisites.",
          references: "Official university transcripts, degree certificate, and two academic references."
        },
        desc: "World-ranked #1 two-year Master of Science degree (120 ECTS) offering world-class research tracks in Aerodynamics & Wind Energy, Flight Performance & Propulsion, Space Exploration, and Aerospace Structures."
      },
      {
        id: 217,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "TU Delft Master of Science in Computer Science",
        source: "https://www.tudelft.nl/en/education/programmes/masters/computer-science/msc-computer-science",
        funding: "Self-funded; eligible for TU Delft Excellence scholarships and student assistantships",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Autumn intake",
        fee: "€100 application fee",
        tuition: "€21,515 per year for non-EU international students.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science or closely related field with high grades in discrete mathematics and algorithms.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "GRE General test required for non-Dutch undergraduate degrees.",
          papers: "Demonstrated coursework background in data structures, algorithms, logic, and computer systems.",
          references: "Complete university academic transcripts and syllabus descriptions."
        },
        desc: "Two-year Master of Science degree (120 ECTS) in the Faculty of Electrical Engineering, Mathematics and Computer Science (EEMCS), offering tracks in Data Science & Technology, Software Technology, and Artificial Intelligence."
      },
      {
        id: 218,
        subject: "physics",
        subjects: ["physics", "computer-science"],
        type: "Research",
        title: "QuTech Quantum Computing Research Placements",
        source: "https://qutech.nl/",
        funding: "Funded research projects supported by the Dutch National Growth Fund (Quantum Delta NL) and Intel/Microsoft research agreements",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for multidisciplinary laboratory positions",
        fee: "Free application directly to affiliated QuTech researchers",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate student in Physics, Computer Science, or Electrical Engineering with distinction.",
          ielts: "Technical English fluency.",
          gre: "Not required.",
          papers: "Demonstrated skills in quantum error correction, superconducting qubits, or spin qubit hardware.",
          references: "CV, publication list, and academic reference."
        },
        desc: "Frontier quantum technology institute founded by TU Delft and TNO, developing scalable quantum computing architectures, topological qubits, and quantum internet protocols."
      },
      {
        id: 219,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Internship",
        title: "TU Delft High-Tech Aerospace & Maritime Industrial Internships",
        source: "https://www.tudelft.nl/en/ae/education/internships",
        funding: "Salaried internship: €850 to €1,300 per month for 3 to 6-month research internships directly embedded with Airbus, ESA, Boeing, or Damen Shipyards",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for upcoming semester graduation internships",
        fee: "Free enrollment for admitted students",
        tuition: "Included in enrolled degree curriculum; monthly compensation paid by company/lab.",
        requirements: {
          gpa: "Enrolled Master's student at TU Delft with completion of first-year core modules.",
          ielts: "Working English communication.",
          gre: "Not required.",
          papers: "Resume / CV and technical project portfolio.",
          references: "Approval from TU Delft master thesis supervisor."
        },
        desc: "Industrial and academic graduation research internships embedding graduate engineers within European aerospace centers, wind tunnel research facilities, and naval architecture firms."
      },
      {
        id: 220,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "engineering"],
        type: "Fellowship",
        title: "TU Delft Student Assistantships (Student-Assistenten)",
        source: "https://www.tudelft.nl/en/about-tu-delft/working-at-tu-delft/student-assistants",
        funding: "Salaried hourly campus employment: €16.50 to €21.80 per hour under Dutch university collective agreements",
        status: "open-position",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 for upcoming academic year tutoring positions",
        fee: "Free application through departmental student assistant coordinators",
        tuition: "Zero tuition; hourly salaried university employment.",
        requirements: {
          gpa: "Matriculated student at TU Delft in good standing who has passed the relevant course with high grade (7.5+ / 10).",
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
        id: 111,
        subject: "physics",
        name: "Prof. Dr. Lieven Vandersypen",
        title: "Antoni van Leeuwenhoek Professor of Quantum Nanoscience & Co-Director, QuTech",
        university: "TU Delft (Delft University of Technology)",
        country: "Netherlands",
        topics: ["Quantum Computing", "Silicon Spin Qubits", "Quantum Dots", "Quantum Error Correction", "Semiconductor Nanotechnology"],
        source: "https://qutech.nl/person/lieven-vandersypen/",
        email: null,
        summary: "Antoni van Leeuwenhoek Professor of Quantum Nanoscience at TU Delft, Co-Director of QuTech, Spinoza Prize recipient, and world pioneer in semiconductor spin qubits and quantum computing algorithms.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 112,
        subject: "computer-science",
        name: "Prof. Dr. Arie van Deursen",
        title: "Professor of Software Engineering / Head of Dept. of Software Technology",
        university: "TU Delft (Delft University of Technology)",
        country: "Netherlands",
        topics: ["Software Engineering", "Automated Software Testing", "AI-Assisted Programming", "Software Architecture", "Continuous Integration"],
        source: "https://avandeursen.com/",
        email: null,
        summary: "Professor of Software Engineering and Head of the Department of Software Technology at TU Delft, IEEE Fellow, leading innovator in automated unit testing, search-based software engineering, and software analysis.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 113,
        subject: "engineering",
        name: "Prof. Dr. Chiara Manfletti",
        title: "Professor of Space Propulsion and Mobility / Faculty of Aerospace Engineering",
        university: "TU Delft (Delft University of Technology)",
        country: "Netherlands",
        topics: ["Space Propulsion", "Green Rocket Propellants", "Liquid Rocket Engines", "Orbital Mobility", "Launch Vehicle Systems"],
        source: "https://www.tudelft.nl/en/ae/about-faculty/departments/space-engineering/space-propulsion/people/chiara-manfletti",
        email: null,
        summary: "Professor of Space Propulsion and Mobility at TU Delft, former Head of the Portuguese Space Agency (Portugal Space), and international leader in sustainable green rocket propellants and in-space transportation systems.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 10. SWITZERLAND: University of Geneva (Row 1354)
  {
    institution: "University of Geneva",
    shortName: "UNIGE",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Geneva, Switzerland",
    website: "https://www.unige.ch",
    sourceRow: 1354,
    slug: "university-of-geneva",
    heroEyebrow: "Switzerland · Geneva · Historic European Research Hub · Reviewed 14 October 2026",
    headline: "University of Geneva (Université de Genève - UNIGE)",
    description: "University of Geneva guide: Master of Excellence Fellowships (CHF 15,000/yr), CERN physics research, MSc in Astrophysics & Computer Science, and Nobel laureate faculty.",
    overview: "Founded in 1559 by John Calvin as the Geneva Academy, the University of Geneva (Université de Genève - UNIGE) is Switzerland's third largest university and one of Europe's top 20 research universities. UNIGE has produced or hosted 10 Nobel laureates and 3 Fields Medalists. Partnered intimately with CERN, the World Health Organization (WHO), and the Geneva Observatory (where Michel Mayor and Didier Queloz discovered the first exoplanet), UNIGE excels in astrophysics, quantum information, particle physics, and international law. Explore verified Master's curricula, doctoral assistant salaries, and world-renowned faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree (minimum 180 ECTS credits) in relevant subject area from an internationally recognized university with above-average grades.",
      phd: "Recognized Master of Science degree (minimum 120 ECTS) with high academic marks, proven research thesis capability, and agreement from a UNIGE full professor to serve as doctoral supervisor.",
      language: "Demonstrated English proficiency equivalent to CEFR C1: Academic IELTS 7.0 overall or TOEFL iBT 100 for English-taught graduate curricula.",
      proposal: "Comprehensive 2-page statement of purpose detailing academic milestones, research interests, and preferred UNIGE laboratories.",
      appFee: "CHF 65 application processing fee for holders of non-Swiss university degrees (waived for Swiss degree holders).",
      documents: "Complete official university transcripts, certified copy of degree diploma, curriculum vitae in English or French, motivation essay, and two academic referee letters."
    },
    tuitionText: "Tuition at the University of Geneva is heavily subsidized by the Republic and Canton of Geneva. Tuition is standard at only CHF 500 per semester (CHF 1,000 per year) for both Swiss and international students. Selected international master's candidates can receive the Master of Excellence Fellowship (CHF 10,000 to CHF 15,000 per year). Doctoral assistants are paid salaried employees receiving CHF 48,000 to CHF 53,000 per year.",
    opportunities: [
      {
        id: 221,
        subject: "physics",
        subjects: ["physics", "computer-science", "engineering", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "UNIGE Master of Excellence Fellowships (Faculty of Science)",
        source: "https://www.unige.ch/sciences/en/enseignements/formations/master/excellencemasterfellowships/",
        funding: "Fully funded: Annual fellowship grant of CHF 10,000 to CHF 15,000 per year for the full duration of the Master's programme (1.5 to 2 years)",
        status: "open-scholarship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Strict annual deadline for Autumn Master's entry)",
        fee: "CHF 65 foreign credential evaluation fee",
        tuition: "CHF 500 per semester (subsidized Swiss public tuition rate).",
        requirements: {
          gpa: "Graduation in the top 10% of undergraduate degree class with distinction.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Recommended for quantitative programs outside Switzerland.",
          papers: "Demonstrated academic motivation, 2-page research essay, and curriculum vitae.",
          references: "Two confidential academic letters of recommendation from university professors."
        },
        desc: "UNIGE Faculty of Science's premier merit fellowship awarded to exceptional incoming international and Swiss Master's candidates, providing up to CHF 15,000 per year to support full-time scientific study in Geneva."
      },
      {
        id: 222,
        subject: "physics",
        subjects: ["physics", "computer-science", "mathematics"],
        type: "PhD",
        title: "University of Geneva Doctoral Assistantships (Assistant-Doctorant)",
        source: "https://www.unige.ch/rh/en/recruitment/doctoral-assistantships/",
        funding: "Fully funded: Salaried employment contract starting from CHF 48,000/year rising to CHF 53,000/year with Swiss pension, social security, and accident insurance",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for Autumn intake (rolling department vacancies)",
        fee: "Free application directly to open doctoral positions",
        tuition: "Zero tuition. Doctoral assistants are paid academic employees.",
        requirements: {
          gpa: "Master of Science degree (minimum 120 ECTS) with high academic distinction in Physics, Mathematics, or CS.",
          ielts: "Fluent technical English for international research collaboration.",
          gre: "Not required.",
          papers: "Master's thesis or peer-reviewed publication in high-impact international journals.",
          references: "Supervisory commitment letter from a UNIGE full professor and two academic references."
        },
        desc: "Four-year salaried doctoral research appointment inside UNIGE departments, conducting frontier scientific investigations with state-of-the-art laboratory infrastructure in Geneva and CERN."
      },
      {
        id: 223,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Master's",
        title: "UNIGE Master of Science in Astrophysics",
        source: "https://www.unige.ch/sciences/astro/en/education/master/",
        funding: "Self-funded; eligible for Master of Excellence Fellowships (CHF 15,000/yr) and Geneva Observatory assistantships",
        status: "program-information",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for Autumn intake",
        fee: "CHF 65 application processing fee",
        tuition: "CHF 500 per semester for Swiss and international students.",
        requirements: {
          gpa: "Bachelor of Science in Physics or Mathematics with rigorous background in classical and quantum mechanics.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Physics subject test recommended for non-European credentials.",
          papers: "Curriculum vitae, detailed descriptions of undergraduate coursework, and motivation letter.",
          references: "Two academic referee letters and complete university transcripts."
        },
        desc: "World-leading two-year Master of Science program (120 ECTS) hosted at the Geneva Observatory in Sauverny, offering specialized training in Exoplanetary Science, Stellar Physics, Observational Cosmology, and Space Instrumentation."
      },
      {
        id: 224,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "UNIGE Master of Science in Computer Science (CUI)",
        source: "https://cui.unige.ch/en/formations/master-en-informatique/",
        funding: "Self-funded; eligible for UNIGE Excellence Fellowships and campus student tutoring",
        status: "program-information",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for Autumn admission",
        fee: "CHF 65 application fee",
        tuition: "CHF 500 per semester.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science or Mathematics with solid discrete mathematics and programming foundations.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Curriculum vitae and descriptions of completed theoretical and practical computer science modules.",
          references: "Two academic letters of recommendation and official transcript."
        },
        desc: "Comprehensive two-year Master's degree (90–120 ECTS) at the Centre Universitaire d'Informatique (CUI), covering Artificial Intelligence, Stochastic Information Processing, Cybersecurity, and Complex Systems."
      },
      {
        id: 225,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Research",
        title: "CERN & Geneva Observatory Collaborative Particle Physics Placements",
        source: "https://www.unige.ch/dpnc/",
        funding: "Funded research positions supported by the Swiss National Science Foundation (SNSF) and CERN research grants",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for collaborative lab placements",
        fee: "Free application directly to affiliated principal investigators",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate student in High-Energy Physics, Detector Physics, or Astronomy with top-tier record.",
          ielts: "Technical English fluency.",
          gre: "Not required.",
          papers: "Demonstrated experience in particle physics detector hardware, ROOT analysis, or high-energy simulation.",
          references: "CV, publication list, and academic recommendation."
        },
        desc: "Frontier collaborative research placements inside the Department of Nuclear and Corpuscular Physics (DPNC) at UNIGE, conducting experiments at the Large Hadron Collider (ATLAS, FASER) and AMS-02 on the ISS."
      },
      {
        id: 226,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        title: "UNIGE Summer Research Internships in Life Sciences & Physics",
        source: "https://www.unige.ch/sciences/en/enseignements/stages/",
        funding: "Fully funded: Living stipend of CHF 1,600 per month for up to 3 months plus university laboratory hosting facilities",
        status: "open-position",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 for Summer 2027 fellowship cohort",
        fee: "Free application",
        tuition: "Zero tuition; fully paid international fellowship.",
        requirements: {
          gpa: "Enrolled undergraduate (completed at least 2 years of Bachelor) or Master's student in natural sciences.",
          ielts: "Fluent working English communication.",
          gre: "Not required.",
          papers: "Statement of purpose describing research interests and target Faculty of Science laboratories.",
          references: "Official university transcripts, curriculum vitae, and one to two recommendation letters."
        },
        desc: "Structured summer research program inside UNIGE's Faculty of Science laboratories, offering students direct research mentorship in molecular biology, chemical biology, and experimental physics."
      },
      {
        id: 227,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "physics"],
        type: "Fellowship",
        title: "UNIGE Teaching Assistantships (Sous-assistants d'enseignement)",
        source: "https://www.unige.ch/rectorat/reglements/sous-assistants",
        funding: "Salaried campus employment: CHF 24.50 to CHF 28.00 per hour for coaching exercise sessions, running physics/coding labs, and grading assignments",
        status: "open-position",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027 for Autumn semester teaching allocations",
        fee: "Free application via UNIGE departmental portals",
        tuition: "Zero tuition; paid hourly university employment.",
        requirements: {
          gpa: "Enrolled UNIGE student in good standing who has passed the course module with high grades.",
          ielts: "Proficiency in French or English depending on the course language.",
          gre: "Not required.",
          papers: "High academic marks in foundational mathematics, algorithms, or physics.",
          references: "Approval from the course professor or head teaching assistant."
        },
        desc: "Departmental academic employment (sous-assistant) for enrolled undergraduate and graduate students at UNIGE, providing hourly compensation for conducting weekly tutorial exercise sessions and supervising lab sections."
      }
    ],
    researchers: [
      {
        id: 114,
        subject: "physics",
        name: "Prof. Dr. Michel Mayor",
        title: "Nobel Laureate in Physics (2019) / Professor Emeritus of Astronomy",
        university: "University of Geneva",
        country: "Switzerland",
        topics: ["Exoplanetary Science", "Doppler Spectroscopy", "51 Pegasi b", "Radial Velocity Method", "Geneva Observatory"],
        source: "https://www.unige.ch/sciences/astro/en/",
        email: null,
        summary: "Professor Emeritus of Astronomy at the University of Geneva and 2019 Nobel Laureate in Physics for the discovery of 51 Pegasi b (the first exoplanet orbiting a solar-type star), revolutionizing modern astrophysics.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 115,
        subject: "physics",
        name: "Prof. Dr. Didier Queloz",
        title: "Nobel Laureate in Physics (2019) / Professor of Physics, UNIGE & Cambridge",
        university: "University of Geneva",
        country: "Switzerland",
        topics: ["Exoplanet Detection", "Planetary Systems", "High-Precision Radial Velocity", "Spectrographs (HARPS/ESPRESSO)", "Origins of Life"],
        source: "https://www.unige.ch/sciences/astro/en/",
        email: null,
        summary: "Professor of Physics at the University of Geneva and the University of Cambridge, 2019 Nobel Laureate in Physics, pioneer in high-precision spectrographs (ELODIE, CORALIE, HARPS, ESPRESSO), and leader in exoplanetary characterization.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 116,
        subject: "computer-science",
        name: "Prof. Dr. Sviatoslav Voloshynovskiy",
        title: "Full Professor of Computer Science / Head of SIP Group, CUI",
        university: "University of Geneva",
        country: "Switzerland",
        topics: ["Information Security", "Stochastic Information Processing", "Machine Learning for Security", "Robust Watermarking", "Physical Unclonable Functions"],
        source: "https://sip.unige.ch/people/sviatoslav-voloshynovskiy/",
        email: null,
        summary: "Full Professor of Computer Science at the University of Geneva and Head of the Stochastic Information Processing (SIP) group, internationally recognized pioneer in information hiding, multimedia security, and privacy-preserving machine learning.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  }
];
