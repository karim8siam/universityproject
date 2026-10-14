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

export const cycle4Universities = [
  // 1. CANADA: McGill University (Row 53)
  {
    institution: "McGill University",
    shortName: "McGill",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Montreal, Quebec, Canada",
    website: "https://www.mcgill.ca",
    sourceRow: 53,
    slug: "mcgill-university",
    heroEyebrow: "Canada · Quebec · World-Renowned Historic Research Powerhouse · Reviewed 14 October 2026",
    headline: "McGill University (Montreal, Canada)",
    description: "McGill University guide: Graduate Excellence Fellowships ($25,000+ tuition waiver), Mila AI research placements, MSc in Computer Science & Neuroscience, and faculty profiles.",
    overview: "Founded in 1821 in Montreal, McGill University is consistently ranked among the world's top 35 universities and stands as one of Canada's most celebrated research institutions. With 12 Nobel laureates and 148 Rhodes Scholars (more than any other Canadian university), McGill pioneers discoveries in medicine, artificial intelligence (co-founding Mila with Yoshua Bengio and Joelle Pineau), neuroscience at The Neuro, and quantum materials. Explore verified graduate degrees, guaranteed doctoral funding packages, and world-renowned faculty profiles.",
    admissions: {
      masters: "Appropriate Bachelor's degree with standing equivalent to at least a Cumulative Grade Point Average (CGPA) of 3.2 out of 4.0 (typically 75%+) in relevant discipline.",
      phd: "Recognized Master's degree in relevant discipline with high academic standing (CGPA 3.4/4.0+), demonstrable thesis research competence, and strong academic recommendation letters.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall (no individual band below 6.0) or TOEFL iBT 86 overall (minimum 20 in each component); higher for CS/Neuroscience (IELTS 7.0).",
      proposal: "Comprehensive 2-page statement of purpose describing research milestones, theoretical framework, and target McGill faculty supervisor alignment.",
      appFee: "CAD $132.90 non-refundable application fee submitted through the McGill online portal.",
      documents: "Complete official university transcripts, 2 confidential letters of recommendation, curriculum vitae, and personal statement of research interests."
    },
    tuitionText: "Tuition for research-stream Master's and PhD programs is heavily subsidized. Under the McGill Graduate Excellence Fellowships and departmental base funding policies, doctoral students in good standing receive guaranteed minimum funding packages of CAD $22,000 to $28,000 per year plus tuition fee remissions that offset international tuition rates.",
    opportunities: [
      {
        id: 228,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "McGill Graduate Excellence Fellowships & McCall MacBain Scholarships",
        source: "https://www.mcgill.ca/gps/funding/opportunities/internal",
        funding: "Fully funded: Annual living stipend of CAD $20,000 to $30,000 per year plus full international tuition fee coverage for up to four years of doctoral study",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Departmental graduate awards nomination deadline for Fall entry)",
        fee: "CAD $132.90 graduate application fee",
        tuition: "Full tuition completely covered for fellowship recipients.",
        requirements: {
          gpa: "First-class academic standing (CGPA 3.7+ out of 4.0 or equivalent A average) across prior degree coursework.",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in all bands or TOEFL iBT 100.",
          gre: "Recommended for quantitative programs outside Canada.",
          papers: "Demonstrated research excellence through publications, conference papers, or Master's thesis.",
          references: "Two to three academic reference letters submitted electronically through the portal."
        },
        desc: "McGill's premier graduate funding awards providing guaranteed multi-year financial support, full tuition coverage, and competitive living stipends for outstanding domestic and international doctoral scholars."
      },
      {
        id: 229,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "McGill PhD in Computer Science",
        source: "https://www.cs.mcgill.ca/academic/graduate/phd/",
        funding: "Fully funded: Guaranteed minimum funding package of CAD $25,000 per year plus full tuition waiver through Research Assistantships and Teaching Assistantships",
        status: "open-position",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Strict annual deadline for September 2027 doctoral entry)",
        fee: "CAD $132.90 application fee",
        tuition: "Zero tuition. Full tuition and fees paid by departmental graduate fellowship.",
        requirements: {
          gpa: "Master's degree in Computer Science, Mathematics, or closely related field with minimum CGPA 3.4/4.0.",
          ielts: "Academic IELTS 7.0 overall (6.5 min band) or TOEFL iBT 100.",
          gre: "General GRE recommended for international degree holders.",
          papers: "High-quality research thesis or published papers in top computer science venues (NeurIPS, ICML, CVPR, IROS).",
          references: "Two academic reference letters evaluating scientific originality and research potential."
        },
        desc: "Four to five-year doctoral research program in the School of Computer Science at McConnell Engineering Building, offering frontier research in artificial intelligence, reinforcement learning, robotics, and bioinformatics in collaboration with Mila."
      },
      {
        id: 230,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "McGill Master of Science in Computer Science",
        source: "https://www.cs.mcgill.ca/academic/graduate/msc/",
        funding: "Fully funded: Guaranteed minimum funding package of CAD $21,000 per year for two years through teaching and research assistantships",
        status: "program-information",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 for Fall 2027 cohort admission",
        fee: "CAD $132.90 application fee",
        tuition: "CAD $10,500/year for international research students (offset by McGill tuition supplements).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science or Mathematics with minimum CGPA 3.2/4.0 in final two years.",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5 or TOEFL iBT 100.",
          gre: "Recommended.",
          papers: "Curriculum vitae, statement of purpose, and technical programming portfolio.",
          references: "Two academic letters of recommendation."
        },
        desc: "Two-year thesis-based Master of Science degree providing foundational and advanced training in machine learning, computational biology, cryptography, and computer systems with guaranteed graduate student funding."
      },
      {
        id: 231,
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Master's",
        title: "McGill Master of Science in Neuroscience (IPN)",
        source: "https://www.mcgill.ca/ipn/",
        funding: "Fully funded: Guaranteed minimum stipend of CAD $24,000 per year plus tuition support provided by primary supervisor",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Fall 2027 intake",
        fee: "CAD $132.90 application fee",
        tuition: "CAD $10,500/year (subsidized by IPN international fee waiver awards).",
        requirements: {
          gpa: "Bachelor of Science in Neuroscience, Biology, Physiology, or Computer Science with minimum 3.3 CGPA.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Demonstrated coursework background in molecular biology, neuroanatomy, or neuro-imaging.",
          references: "Two academic referee letters and commitment from a confirmed IPN thesis supervisor."
        },
        desc: "Premier interdisciplinary graduate degree program inside the Integrated Program in Neuroscience (IPN) based at The Neuro (Montreal Neurological Institute-Hospital), investigating neurodevelopment, cellular neurobiology, and neural computing."
      },
      {
        id: 232,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Research",
        title: "Mila - Quebec Artificial Intelligence Institute Collaborative Placements",
        source: "https://mila.quebec/en/",
        funding: "Funded research internships and Mila Excellence Fellowships supported by CIFAR and Pan-Canadian AI Strategy",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for collaborative lab research allocations",
        fee: "Free application directly to affiliated faculty",
        tuition: "Zero tuition; paid graduate research position.",
        requirements: {
          gpa: "Graduate student in Computer Science, Statistics, or Applied Mathematics with top-tier grades.",
          ielts: "Fluent technical English communication.",
          gre: "Not required.",
          papers: "Published or submitted research in deep reinforcement learning, generative models, or AI alignment.",
          references: "Endorsement from a Mila Core Academic Member and updated CV."
        },
        desc: "Frontier research placements inside Mila in Montreal (the world's largest academic deep learning community), collaborating with leading researchers on neural network theory, health AI, and trustworthy machine learning."
      },
      {
        id: 233,
        subject: "physics",
        subjects: ["physics", "chemistry", "biology"],
        type: "Internship",
        title: "McGill Science Undergraduate Research Awards (SURA)",
        source: "https://www.mcgill.ca/science/research/undergraduate-research/sura",
        funding: "Fully funded: CAD $7,500 award for 15 weeks of full-time summer laboratory research inside McGill research facilities",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual deadline for Summer 2027 term research)",
        fee: "Free application",
        tuition: "Zero tuition; full student research award.",
        requirements: {
          gpa: "Enrolled undergraduate student in good academic standing (minimum 3.2 CGPA).",
          ielts: "Working English fluency for laboratory operations.",
          gre: "Not required.",
          papers: "1-page research project proposal co-developed with a McGill faculty supervisor.",
          references: "Faculty research supervisor endorsement and university transcript."
        },
        desc: "Competitive 15-week summer research award enabling undergraduate students to conduct full-time experimental or theoretical research in physical, chemical, and computational sciences alongside leading McGill professors."
      },
      {
        id: 234,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "engineering"],
        type: "Fellowship",
        title: "McGill Graduate Teaching Assistantships (AGSEM)",
        source: "https://www.mcgill.ca/hr/employee-relations/collective-agreements/agsem",
        funding: "Salaried academic employment: CAD $35.22 to CAD $37.50 per hour under AGSEM collective agreement",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for upcoming academic year teaching appointments",
        fee: "Free application via McGill Workday student job portal",
        tuition: "Zero tuition; salaried university teaching contract.",
        requirements: {
          gpa: "Registered graduate student in good standing at McGill University.",
          ielts: "High oral English proficiency for lecturing, recitation, and laboratory instruction.",
          gre: "Not required.",
          papers: "Strong mastery of underlying undergraduate curriculum subject matter.",
          references: "Approval from department graduate director and course instructor."
        },
        desc: "Departmental academic teaching appointments providing instruction leadership training and hourly remuneration for running weekly laboratory sections, grading exams, and tutoring undergraduate students."
      }
    ],
    researchers: [
      {
        id: 117,
        subject: "computer-science",
        name: "Prof. Dr. Joelle Pineau",
        title: "Professor of Computer Science & Vice President of AI Research at Meta",
        university: "McGill University",
        country: "Canada",
        topics: ["Reinforcement Learning", "Healthcare AI", "Reproducibility in Machine Learning", "Robotics", "Adaptive Clinical Trials"],
        source: "https://www.cs.mcgill.ca/~jpineau/",
        email: null,
        summary: "Professor of Computer Science at McGill University, Core Academic Member at Mila, Vice President of AI Research at Meta, and international pioneer in reinforcement learning applied to personalized medical decision-making.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 118,
        subject: "computer-science",
        name: "Prof. Dr. Doina Precup",
        title: "Associate Professor of Computer Science & Research Director, Google DeepMind Montreal",
        university: "McGill University",
        country: "Canada",
        topics: ["Reinforcement Learning", "Temporal Abstraction", "Hierarchical Learning", "Markov Decision Processes", "AI in Medicine"],
        source: "https://www.cs.mcgill.ca/~dprecup/",
        email: null,
        summary: "Associate Professor in the School of Computer Science at McGill University, Core Academic Member at Mila, and Research Director leading the Google DeepMind office in Montreal, globally recognized for contributions to temporal abstraction in reinforcement learning.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 119,
        subject: "biology",
        name: "Prof. Dr. Alan Evans",
        title: "James McGill Professor of Neurology / Montreal Neurological Institute (The Neuro)",
        university: "McGill University",
        country: "Canada",
        topics: ["Brain Mapping", "Neuroinformatics", "BigBrain 3D Atlas", "Magnetic Resonance Imaging", "Alzheimer's Disease Biomarkers"],
        source: "https://www.mcgill.ca/neuro/alan-c-evans-phd",
        email: null,
        summary: "James McGill Professor of Neurology and Neurosurgery at McGill University, Scientific Director of the Healthy Brains, Healthy Lives initiative, and creator of the BigBrain 3D high-resolution histological human brain atlas.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 2. AUSTRALIA: The University of Sydney (Row 187)
  {
    institution: "The University of Sydney",
    shortName: "USYD",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Sydney, New South Wales, Australia",
    website: "https://www.sydney.edu.au",
    sourceRow: 187,
    slug: "the-university-of-sydney",
    heroEyebrow: "Australia · New South Wales · Australia's First University & Go8 Leader · Reviewed 14 October 2026",
    headline: "The University of Sydney (USYD)",
    description: "The University of Sydney guide: USydIS full scholarships (AUD $40,109/yr stipend), PhD in Engineering & IT, Sydney Quantum Academy labs, and internationally recognized faculty.",
    overview: "Founded in 1850 in Camperdown, Sydney, The University of Sydney is Australia's first university and a leading member of the prestigious Group of Eight (Go8). Consistently ranked among the top 20 universities globally in the QS World University Rankings, Sydney attracts over AUD $500 million in annual research funding. The university excels internationally in computer vision, quantum computing, biomedical nanotechnology, and public health. Explore verified graduate degrees, fully funded doctoral scholarships, and distinguished faculty profiles.",
    admissions: {
      masters: "Four-year Australian Bachelor's degree (Honours) or equivalent international qualification with minimum weighted average mark (WAM) of 65%+ (higher 75%+ for quantitative CS/Data Science).",
      phd: "Four-year undergraduate degree with First Class Honours (80%+ / H1) or a Master's degree with a substantial research thesis component (minimum 25% of total credits).",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each section) or TOEFL iBT 85 (writing 19, reading/listening/speaking 17); higher thresholds (IELTS 7.0) for professional engineering disciplines.",
      proposal: "Detailed 2 to 3-page research proposal specifying research questions, background literature, methodology, and potential faculty supervisors.",
      appFee: "AUD $150 application processing fee for international applicants (waived for specific scholarship applicants and partner institutions).",
      documents: "Complete official university transcripts, grading scale guide, curriculum vitae, two academic referee reports, and passport copy."
    },
    tuitionText: "Under the Australian Government Research Training Program (RTP) and University of Sydney International Research Scholarships (USydIS), domestic and selected international PhD candidates study completely tuition-free with full fee offsets (saving up to AUD $140,000) plus an annual tax-free living stipend of AUD $40,109 for up to 3.5 years.",
    opportunities: [
      {
        id: 235,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "University of Sydney International Research Scholarships (USydIS)",
        source: "https://www.sydney.edu.au/scholarships/e/university-sydney-international-scholarship.html",
        funding: "Fully funded: 100% full tuition fee offset plus living allowance stipend of AUD $40,109 per year (tax-free) for up to 3.5 years, relocation grant, and Overseas Student Health Cover (OSHC)",
        status: "open-scholarship",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 for Research Period 1 & 2 (March 2027 entry) consideration",
        fee: "AUD $150 application fee (scholarship consideration is automatic upon course application)",
        tuition: "Full tuition completely waived under the USydIS fee offset.",
        requirements: {
          gpa: "First Class Honours (H1 / 80%+ equivalent) in prior undergraduate or Master's research degree.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 85.",
          gre: "Not required by University of Sydney.",
          papers: "Prior peer-reviewed research publications or completed Honours/Master's thesis of high distinction.",
          references: "Two academic referee reports assessing research potential submitted via the online referee portal."
        },
        desc: "The University of Sydney's premier graduate research award offering complete tuition coverage and an annual tax-free living stipend of AUD $40,109 to exceptional domestic and international PhD candidates each year."
      },
      {
        id: 236,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        title: "University of Sydney PhD in Computer Science & Engineering",
        source: "https://www.sydney.edu.au/courses/courses/pr/doctor-of-philosophy-engineering.html",
        funding: "Fully funded: Eligible for USydIS scholarships (AUD $40,109/yr tax-free) and industry-sponsored ARC Linkage studentships",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for Research Period 3 (July 2027) international admissions",
        fee: "AUD $150 application fee",
        tuition: "Covered by RTP Fee Offset for scholarship holders; standard international tuition AUD $53,000/year.",
        requirements: {
          gpa: "Four-year Bachelor degree in Engineering or Computer Science with First Class Honours (80%+ / H1).",
          ielts: "Academic IELTS 6.5 overall with 6.0 minimum in each section.",
          gre: "Not required.",
          papers: "Substantial research component in prior studies (minimum 25% research project or publication record).",
          references: "Written confirmation of supervision support from an academic staff member in the Faculty of Engineering."
        },
        desc: "Four-year advanced doctoral research degree conducting world-leading investigations across artificial intelligence, autonomous robotics, cybersecurity, biomedical nanotechnology, and quantum control systems."
      },
      {
        id: 237,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "University of Sydney Master of Computer Science",
        source: "https://www.sydney.edu.au/courses/courses/pg/master-of-computer-science.html",
        funding: "Self-funded; eligible for Faculty of Engineering International Merit Scholarships (up to 20% tuition fee reduction)",
        status: "program-information",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 for Semester 1 (February 2027) intake",
        fee: "AUD $150 application fee",
        tuition: "AUD $53,000 per year (total 96 credit points over two full academic years).",
        requirements: {
          gpa: "Bachelor's degree with major in Computer Science or Software Engineering with minimum 65%+ credit average.",
          ielts: "Academic IELTS 6.5 overall with minimum 6.0 in each sub-band or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Rigorous foundation in computer systems, algorithms, data structures, and mathematics.",
          references: "Official university academic transcripts, syllabus outlines, and statement of intent."
        },
        desc: "Two-year research-oriented Master's degree comprising advanced coursework and a major year-long research thesis project under individual faculty mentorship, serving as a direct pathway to doctoral research."
      },
      {
        id: 238,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Master's",
        title: "University of Sydney Master of Data Science",
        source: "https://www.sydney.edu.au/courses/courses/pg/master-of-data-science.html",
        funding: "Self-funded; eligible for Sydney international postgraduate merit bursaries",
        status: "program-information",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 for Semester 1 intake",
        fee: "AUD $150 application processing fee",
        tuition: "AUD $53,000 per year (48 to 72 credit points, 1 to 1.5 years full-time).",
        requirements: {
          gpa: "Bachelor's degree with a quantitative major in computing, engineering, mathematics, or statistics with minimum 65% average.",
          ielts: "Academic IELTS 6.5 overall with minimum 6.0 in each component.",
          gre: "Not required.",
          papers: "Demonstrated coursework background in programming, database systems, linear algebra, and statistical modeling.",
          references: "Official academic transcripts, detailed syllabus descriptions, and resume."
        },
        desc: "Professional postgraduate master's degree training data scientists in statistical machine learning, visual data analytics, natural language processing, and scalable cloud computing infrastructure."
      },
      {
        id: 239,
        subject: "physics",
        subjects: ["physics", "computer-science"],
        type: "Research",
        title: "Sydney Quantum Academy (SQA) Collaborative Research Placements",
        source: "https://www.sydneyquantum.org/",
        funding: "Funded research fellowships and project grants supported by the NSW State Government and partner universities",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for collaborative seed grant and visiting fellow rounds",
        fee: "Free application directly to SQA",
        tuition: "Zero tuition; funded research appointment.",
        requirements: {
          gpa: "Master's or doctoral qualification in Physics, Quantum Engineering, or Computer Science with strong quantitative records.",
          ielts: "Technical English fluency for peer-reviewed academic publication.",
          gre: "Not required.",
          papers: "Published research in quantum control, silicon quantum processors, or quantum algorithms.",
          references: "Two academic referee letters and comprehensive publication list."
        },
        desc: "Interdisciplinary research collaboration hub linking Sydney, UNSW, UTS, and Macquarie, developing quantum hardware, error correction algorithms, and quantum software architectures."
      },
      {
        id: 240,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "Sydney Engineering Summer Research Internships",
        source: "https://www.sydney.edu.au/engineering/study/scholarships/undergraduate-research-internships.html",
        funding: "Fully funded: Bursary of AUD $600 to AUD $800 per week for 8 to 12 weeks of summer research work inside university laboratories",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for summer research allocation round",
        fee: "Free enrollment for approved graduate and undergraduate students",
        tuition: "Zero tuition; paid student research bursary.",
        requirements: {
          gpa: "Enrolled student in engineering or computer science with minimum 70% course average.",
          ielts: "Professional English communication skills.",
          gre: "Not required.",
          papers: "Resume / CV, technical portfolio, and statement of project interest.",
          references: "Academic endorsement from supervising faculty researcher."
        },
        desc: "Structured 8-to-12-week summer research internship placement embedding students inside world-leading laboratories in robotics, biomedical implants, and telecommunications."
      },
      {
        id: 241,
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering", "computer-science"],
        type: "Fellowship",
        title: "University of Sydney Postgraduate Teaching Demonstratorships",
        source: "https://www.sydney.edu.au/about-us/careers-at-sydney.html",
        funding: "Salaried academic tutoring: AUD $52.00 to AUD $65.00 per hour under University of Sydney Enterprise Agreement",
        status: "open-position",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 for Semester 1 departmental sessional teaching intakes",
        fee: "Free application through university casual recruitment portal",
        tuition: "Zero tuition; paid hourly employment contract.",
        requirements: {
          gpa: "Enrolled graduate researcher (PhD or Master by Research) in good academic standing.",
          ielts: "High level oral English presentation and instructional capabilities.",
          gre: "Not required.",
          papers: "Exceptional mastery of underlying coursework subject matter.",
          references: "Subject coordinator approval and mandatory completion of Sydney Teaching Foundations."
        },
        desc: "Sessional academic employment enabling graduate students to tutor weekly exercise classes, supervise engineering computer labs, conduct workshops, and grade assessments across undergraduate degree programs."
      }
    ],
    researchers: [
      {
        id: 120,
        subject: "computer-science",
        name: "Prof. Dr. Dacheng Tao",
        title: "Professor of Computer Science & ARC Laureate Fellow",
        university: "The University of Sydney",
        country: "Australia",
        topics: ["Deep Learning Theory", "Computer Vision", "Statistical Learning", "Generative AI", "Image Processing"],
        source: "https://www.sydney.edu.au/engineering/about/our-people/academic-staff/dacheng-tao.html",
        email: null,
        summary: "Professor of Computer Science at The University of Sydney, Fellow of the Australian Academy of Science, IEEE Fellow, ACM Fellow, and one of the world's most cited researchers in machine learning and computer vision.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 121,
        subject: "physics",
        name: "Prof. Dr. Michael Biercuk",
        title: "Professor of Quantum Physics & Founder/CEO of Q-CTRL",
        university: "The University of Sydney",
        country: "Australia",
        topics: ["Quantum Control", "Quantum Computing Hardware", "Trapped Ion Qubits", "Quantum Sensing", "Coherence Control"],
        source: "https://www.sydney.edu.au/science/about/our-people/academic-staff/michael-biercuk.html",
        email: null,
        summary: "Professor of Quantum Physics at The University of Sydney, Founder and CEO of Q-CTRL, former DARPA Program Manager, and international pioneer in quantum firmware, quantum control engineering, and trapped-ion quantum computation.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 122,
        subject: "engineering",
        name: "Prof. Dr. Hala Zreiqat AM",
        title: "Professor of Biomedical Engineering / Faculty of Engineering",
        university: "The University of Sydney",
        country: "Australia",
        topics: ["Biomaterials", "Tissue Engineering", "3D-Printed Bone Scaffolds", "Regenerative Medicine", "Orthopaedic Implants"],
        source: "https://www.sydney.edu.au/engineering/about/our-people/academic-staff/hala-zreiqat.html",
        email: null,
        summary: "Professor of Biomedical Engineering at The University of Sydney, Member of the Order of Australia (AM), Fellow of the Australian Academy of Science and the Australian Academy of Technology and Engineering, and pioneer in 3D-printed ceramic scaffolds for bone regeneration.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 3. GERMANY: Heidelberg University (Row 273)
  {
    institution: "Heidelberg University",
    shortName: "Heidelberg",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Heidelberg, Baden-Württemberg, Germany",
    website: "https://www.uni-heidelberg.de/en",
    sourceRow: 273,
    slug: "heidelberg-university",
    heroEyebrow: "Germany · Baden-Württemberg · Germany's Oldest University & Excellence Hub · Reviewed 14 October 2026",
    headline: "Heidelberg University (Ruprecht-Karls-Universität Heidelberg)",
    description: "Heidelberg University guide: Salaried TV-L E13 doctoral positions (€52,000–€60,000/yr), MSc in Scientific Computing & Physics, DKFZ cancer research, and 56 Nobel laureates.",
    overview: "Founded in 1386, Heidelberg University is Germany's oldest university and a continuous University of Excellence. Associated with 56 Nobel laureates (including Max Born, Robert Bunsen, and 2014 Chemistry Nobelist Stefan Hell), Heidelberg is a global powerhouse in fundamental Physics, Medicine, Molecular Biology, and Scientific Computing. Across the Neuenheimer Feld science campus, Heidelberg leads pioneering research in synthetic quantum matter, visual machine learning, and cancer biophysics. Review verified Master's curricula, salaried doctoral contracts, and faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree in Computer Science, Mathematics, Physics, or related discipline (minimum 180 ECTS credits) matching specific subject-area curriculum criteria.",
      phd: "Completed Master of Science degree (120 ECTS) with high academic distinction, written confirmation of supervision (Betreuungszusage) from a Heidelberg professor, and entry into the Graduate Academy.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall or TOEFL iBT 90 for English-taught graduate curricula; German proficiency required for German-medium degrees.",
      proposal: "Detailed research statement (Exposé) of 3 to 5 pages outlining the planned doctoral research problem, methodology, and work plan.",
      appFee: "Zero application fee via university portal; €75 uni-assist preliminary review documentation (VPD) fee for international degree holders.",
      documents: "University diploma, complete official transcripts with grading scale, CV in tabular format, motivation letter, and uni-assist VPD certificate."
    },
    tuitionText: "Under Baden-Württemberg state higher education law, tuition for EU/EEA students is zero (only an administrative semester contribution of approximately €171 is charged). For non-EU international students, tuition is €1,500 per semester. Doctoral candidates (Wissenschaftliche Mitarbeiter) are salaried university employees who pay zero tuition and receive full health and pension benefits.",
    opportunities: [
      {
        id: 242,
        subject: "physics",
        subjects: ["physics", "computer-science", "mathematics", "chemistry", "biology"],
        type: "Scholarship",
        title: "Heidelberg Graduate Academy Fellowships (LGF Scholarships)",
        source: "https://www.uni-heidelberg.de/de/studium/service-und-beratung/graduiertenakademie/promotionsstipendien",
        funding: "Fully funded: Monthly living stipend of €1,450 to €1,600 per month plus research travel allowance for up to three years of doctoral research",
        status: "open-scholarship",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for Summer semester doctoral award rounds",
        fee: "Free scholarship application through the Heidelberg Graduate Academy",
        tuition: "Zero tuition for doctoral scholarship holders.",
        requirements: {
          gpa: "Completed Master of Science degree with above-average grade (German equivalent 'gut' or 'sehr gut', 2.0 or better).",
          ielts: "English or German proficiency matching the doctoral school working language.",
          gre: "Not required.",
          papers: "Master's research thesis and 5-page doctoral research Exposé.",
          references: "Two academic evaluation letters from university professors."
        },
        desc: "Merit-based doctoral fellowships funded under the Baden-Württemberg State Graduate Funding Act (LGFG), supporting outstanding doctoral researchers conducting innovative scientific investigations across Heidelberg."
      },
      {
        id: 243,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Heidelberg Salaried Doctoral Positions (Wissenschaftliche/r Mitarbeiter/in - TV-L E13)",
        source: "https://www.uni-heidelberg.de/de/stellenangebote",
        funding: "Fully funded: Salaried employment contract under TV-L E13 tariff (€52,000 to €60,000 gross per year) with comprehensive German social insurance, health coverage, and state pension",
        status: "open-position",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Rolling departmental intakes across Neuenheimer Feld research institutes)",
        fee: "Free application directly to advertised vacancy",
        tuition: "Zero tuition. Appointed doctoral candidates are salaried academic staff.",
        requirements: {
          gpa: "Master of Science degree (120 ECTS) in Computer Science, Physics, or Mathematics with high marks.",
          ielts: "Fluent technical English proficiency for scientific publishing and team collaboration.",
          gre: "Not required.",
          papers: "Master's research thesis or peer-reviewed conference publications.",
          references: "Employment application, academic CV, and supervisor endorsement."
        },
        desc: "Three to four-year salaried university employment contracts at Heidelberg University research chairs, combining cutting-edge scientific investigation with teaching assistance and structured doctoral training."
      },
      {
        id: 244,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Heidelberg Master of Science in Scientific Computing",
        source: "https://www.iwr.uni-heidelberg.de/graduate-education/master-scientific-computing",
        funding: "Self-funded; eligible for IWR merit fellowships and HiWi assistantships",
        status: "program-information",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 for Winter semester (October 2027) intake",
        fee: "€75 uni-assist VPD processing fee for international degrees",
        tuition: "€1,500 per semester for non-EU international students (€171 semester fee for EU students).",
        requirements: {
          gpa: "Bachelor of Science in Mathematics, Computer Science, or Physics with minimum 180 ECTS and strong numerical mathematics foundation.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Transcript of records showing completed coursework matching prerequisite catalog.",
          references: "Official university academic transcripts, degree certificate, and CV."
        },
        desc: "Two-year research-focused Master of Science degree (120 ECTS) based at the Interdisciplinary Center for Scientific Computing (IWR), offering advanced specializations in Optimization, Machine Learning, Parallel Computing, and High-Performance Simulation."
      },
      {
        id: 245,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Master's",
        title: "Heidelberg Master of Science in Physics",
        source: "https://www.physik.uni-heidelberg.de/studium/master",
        funding: "Self-funded; eligible for Kirchhoff Institute bursaries and Max Planck research assistantships",
        status: "program-information",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 for Winter semester intake",
        fee: "€75 uni-assist VPD fee",
        tuition: "€1,500 per semester for non-EU students; €171 semester fee for EU.",
        requirements: {
          gpa: "Bachelor's degree in Physics with solid grounding in quantum mechanics, electrodynamics, and statistical physics.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Curriculum vitae and detailed summary of undergraduate experimental and theoretical physics courses.",
          references: "Official transcripts and bachelor degree certificate."
        },
        desc: "English-taught two-year Master's program (120 ECTS) in Neuenheimer Feld, partnering with the Max Planck Institutes for Nuclear Physics and Astronomy to train researchers in Quantum Dynamics, Particle Physics, and Biophysics."
      },
      {
        id: 246,
        subject: "biology",
        subjects: ["biology", "chemistry", "physics"],
        type: "Research",
        title: "German Cancer Research Center (DKFZ) Collaborative Placements",
        source: "https://www.dkfz.de/en/",
        funding: "Funded research positions supported by the Helmholtz Association and German Research Foundation (DFG)",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for collaborative oncology and biophysics research allocations",
        fee: "Free application directly to affiliated DKFZ researchers",
        tuition: "Zero tuition; funded scientific placement.",
        requirements: {
          gpa: "Graduate degree in Molecular Biology, Biophysics, or Biochemistry with distinction.",
          ielts: "Technical English communication fluency.",
          gre: "Not required.",
          papers: "Demonstrated contributions in cancer genetics, molecular imaging, or cell biology.",
          references: "Curriculum vitae, research portfolio, and two academic referee contacts."
        },
        desc: "Frontier research positions inside DKFZ (Germany's premier biomedical cancer research center) in Heidelberg, developing innovative oncology immunotherapies, radiation biophysics, and genomic diagnostics."
      },
      {
        id: 247,
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Internship",
        title: "Heidelberg Summer Research Internships in Molecular Life Sciences",
        source: "https://www.zmbk.uni-heidelberg.de/",
        funding: "Salaried internship: €900 to €1,400 per month for 8 to 12-week research placements inside ZMBH laboratories",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for Summer research internship allocations",
        fee: "Free application",
        tuition: "Zero tuition.",
        requirements: {
          gpa: "Enrolled student in biochemistry, molecular biology, or chemistry with strong marks.",
          ielts: "English language fluency.",
          gre: "Not required.",
          papers: "Resume / CV and 1-page statement of research interests.",
          references: "University transcript and recommendation from a faculty instructor."
        },
        desc: "Structured laboratory research internships inside the Center for Molecular Biology of Heidelberg University (ZMBH), embedding students in cutting-edge protein folding, chaperone mechanics, and cell signaling projects."
      },
      {
        id: 248,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Fellowship",
        title: "Heidelberg Academic Student Assistantships (HiWi)",
        source: "https://www.uni-heidelberg.de/de/beschaeftigte/service-und-beratung/studentische-hilfskraefte",
        funding: "Salaried hourly campus employment: €13.98 to €17.50 per hour under Baden-Württemberg university student assistant regulations",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for Summer semester appointments",
        fee: "Free application through university student job portal",
        tuition: "Zero tuition; paid student employment.",
        requirements: {
          gpa: "Enrolled student at Heidelberg University in good academic standing.",
          ielts: "Proficiency in German or English depending on department requirements.",
          gre: "Not required.",
          papers: "High academic marks in the subject area of the tutoring or lab assignment.",
          references: "Approval from supervising chair professor."
        },
        desc: "Campus employment positions (up to 80 hours per month) assisting Heidelberg professors in running exercise groups, tutoring undergraduate students, managing library collections, and maintaining scientific computers."
      }
    ],
    researchers: [
      {
        id: 123,
        subject: "computer-science",
        name: "Prof. Dr. Carsten Rother",
        title: "Professor of Computer Science & Head of Visual Learning Lab, IWR",
        university: "Heidelberg University",
        country: "Germany",
        topics: ["Computer Vision", "Visual Learning", "Graphical Models", "Image Segmentation", "Deep Learning for Geometry"],
        source: "https://vislearn.com/",
        email: null,
        summary: "Professor of Computer Science at Heidelberg University and Head of the Visual Learning Lab at the Interdisciplinary Center for Scientific Computing (IWR), creator of the GrabCut algorithm, and internationally recognized leader in visual machine learning.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 124,
        subject: "physics",
        name: "Prof. Dr. Markus Oberthaler",
        title: "Professor of Experimental Physics / Kirchhoff-Institute for Physics",
        university: "Heidelberg University",
        country: "Germany",
        topics: ["Quantum Optics", "Bose-Einstein Condensates", "Synthetic Quantum Matter", "Quantum Metrology", "Nonlinear Matter Waves"],
        source: "https://www.kip.uni-heidelberg.de/matterwave/",
        email: null,
        summary: "Professor of Experimental Physics at Heidelberg University's Kirchhoff-Institute for Physics, ERC Advanced Grant recipient, and world leader in ultra-cold quantum gases and atomic matter-wave interferometry.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 125,
        subject: "chemistry",
        name: "Prof. Dr. Stefan Hell",
        title: "Nobel Laureate in Chemistry (2014) / Honorary Professor of Physics",
        university: "Heidelberg University",
        country: "Germany",
        topics: ["Super-Resolution Microscopy", "STED Microscopy", "MINFLUX Nanoscopy", "Biophotonics", "Nanoscale Imaging"],
        source: "https://www.mpinat.mpg.de/hell",
        email: null,
        summary: "Honorary Professor of Physics at Heidelberg University and Director at the Max Planck Institute for Multidisciplinary Sciences, 2014 Nobel Laureate in Chemistry for the development of super-resolved fluorescence microscopy (STED and MINFLUX).",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 4. ITALY: University of Milano-Bicocca (Row 527)
  {
    institution: "University of Milano-Bicocca",
    shortName: "Bicocca",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Milan, Lombardy, Italy",
    website: "https://www.unimib.it",
    sourceRow: 527,
    slug: "university-of-milano-bicocca",
    heroEyebrow: "Italy · Milan · Lombardy's Leading Science & Technology Campus · Reviewed 14 October 2026",
    headline: "University of Milano-Bicocca (Università degli Studi di Milano-Bicocca)",
    description: "University of Milano-Bicocca guide: English MSc in Data Science & Materials Science, doctoral scholarships (€16,243/yr), optoelectronics research, and faculty profiles.",
    overview: "Established in 1998 in Milan's vibrant northern industrial innovation hub, the University of Milano-Bicocca (UNIMIB) is one of Italy's most dynamic and research-intensive public universities. Designed as a modern campus university, Bicocca enrolls over 38,000 students across state-of-the-art facilities in Greco-Pirelli. Bicocca leads Italian and European research in Data Science, Artificial Intelligence, Materials Science, Nanomedicine, and Marine Ecology. Review verified English-taught Master's degrees, fully funded doctoral scholarships, and faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor's degree (minimum 3 years, 180 ECTS) in Computer Science, Mathematics, Physics, or Engineering satisfying curricular prerequisite requirements.",
      phd: "Recognized second-cycle Master's degree (Laurea Magistrale, 120 ECTS) with high graduation mark (typically 100/110+) and successful public evaluation of research project proposal and oral examination.",
      language: "Demonstrated English proficiency equivalent to CEFR B2/C1: Academic IELTS 6.0/6.5 minimum or TOEFL iBT 80+ for English-medium graduate curricula.",
      proposal: "For PhD: detailed research project proposal of 3 to 5 pages outlining research aims, state of the art, methodology, and expected scientific contributions.",
      appFee: "€10 to €30 SegreterieOnline concorso registration fee.",
      documents: "University degree certificate, official transcripts with grading table, CV, motivation letter, and identity document."
    },
    tuitionText: "Under Italian public university regulations, annual tuition fees are income-based (calcolata in base all'ISEE parificato). For international students from non-EU countries, tuition is capped between €1,000 and €3,200 per year. Admitted PhD students holding ministerial scholarships study 100% tuition-free and receive an annual living allowance of €16,243.",
    opportunities: [
      {
        id: 249,
        subject: "physics",
        subjects: ["physics", "computer-science", "mathematics", "chemistry"],
        type: "Scholarship",
        title: "Bicocca Doctoral Fellowships (Borse di Dottorato di Ricerca)",
        source: "https://en.unimib.it/education/doctoral-programmes",
        funding: "Fully funded: Annual gross scholarship of €16,243 per year for 3 years, plus a 50% increase for research conducted abroad and dedicated 10% research budget",
        status: "open-scholarship",
        deadline: "2027-06-20",
        deadlineText: "June 20, 2027 (Annual national call for doctoral admissions - Ciclo XLIII)",
        fee: "€10 SegreterieOnline concorso registration fee",
        tuition: "Full tuition completely waived for all admitted doctoral scholarship recipients.",
        requirements: {
          gpa: "Second-cycle university Master's degree (Laurea Magistrale or international equivalent 120 ECTS) with high academic marks.",
          ielts: "CEFR B2 level English proficiency (certified or tested during oral interview).",
          gre: "Not required.",
          papers: "Original doctoral research project proposal (3–5 pages) and Master's thesis.",
          references: "Two academic recommendation letters submitted online by university professors."
        },
        desc: "Three-year ministerial and university doctoral scholarships covering living stipends, international research mobility supplements, and full tuition waivers for top-ranking candidates in the annual public doctoral competition."
      },
      {
        id: 250,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Bicocca PhD in Computer Science",
        source: "https://en.unimib.it/education/doctoral-programmes/computer-science",
        funding: "Fully funded: Three-year university doctoral scholarship (€16,243/year) with additional departmental research travel funds",
        status: "open-position",
        deadline: "2027-06-20",
        deadlineText: "June 20, 2027 for Autumn doctoral commencement",
        fee: "€10 application fee",
        tuition: "Zero tuition for scholarship holders.",
        requirements: {
          gpa: "Master's degree in Computer Science, Computer Engineering, or Mathematics with high academic marks.",
          ielts: "English fluency for oral examination and technical publishing.",
          gre: "Not required.",
          papers: "Master's thesis and doctoral research proposal aligned with department laboratories.",
          references: "Two academic referee letters and updated curriculum vitae."
        },
        desc: "Three-year doctoral curriculum in the Department of Informatics, Systems and Communication (DISCo), conducting research in machine learning, big data analytics, natural computing, and cyber security."
      },
      {
        id: 251,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Bicocca Master of Science in Data Science",
        source: "https://datascience.disco.unimib.it/en/",
        funding: "Self-funded; eligible for Lombardy regional DSU scholarships (full tuition waiver + up to €6,000/yr living grant)",
        status: "program-information",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Pre-selection round for non-EU international applicants)",
        fee: "€30 pre-selection evaluation fee",
        tuition: "€1,000 to €3,200 per year based on country of origin / ISEE (waived with DSU scholarship).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Mathematics, Statistics, or Engineering with minimum 75% equivalent GPA.",
          ielts: "English proficiency at CEFR B2 level (IELTS 6.0+ or TOEFL iBT 80+).",
          gre: "Not required.",
          papers: "Coursework background in calculus, linear algebra, probability, and programming.",
          references: "Curriculum vitae, detailed undergraduate transcript with course descriptions, and passport copy."
        },
        desc: "Two-year English-taught Master of Science (120 ECTS) in the Department of Informatics, Systems and Communication (DISCo), focusing on big data infrastructure, statistical learning, business intelligence, and deep neural networks."
      },
      {
        id: 252,
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry"],
        type: "Master's",
        title: "Bicocca Master of Science in Materials Science",
        source: "https://www.mater.unimib.it/en",
        funding: "Self-funded; eligible for Italian government MAECI grants and DSU welfare allowances",
        status: "program-information",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for international pre-enrollment",
        fee: "€30 pre-selection fee",
        tuition: "Up to €3,200 per year maximum for international students; reduced according to economic family indicator.",
        requirements: {
          gpa: "Bachelor's degree in Physics, Chemistry, or Materials Engineering with solid grounding in quantum physics and thermodynamics.",
          ielts: "English B2 level certificate or medium of instruction verification.",
          gre: "Not required.",
          papers: "Curriculum vitae and syllabus descriptions of completed mathematical and physical coursework.",
          references: "Transcripts of records and academic reference letter."
        },
        desc: "World-class two-year Master's degree (120 ECTS) offered in English inside the Department of Materials Science, featuring specializations in Optoelectronics, Photovoltaics, Nanomaterials, and Energy Storage."
      },
      {
        id: 253,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Research",
        title: "Bicocca Nanomedicine and Optoelectronics Laboratory Placements",
        source: "https://www.mater.unimib.it/en/research",
        funding: "Funded European Union Horizon Europe grants, Italian PNRR projects, and industrial collaboration funds",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for laboratory research internships",
        fee: "Free application directly to lab professors",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate or advanced undergraduate student in Materials Science, Physics, or Nanotechnology with strong academic records.",
          ielts: "Working English fluency for international lab communication.",
          gre: "Not required.",
          papers: "Hands-on experience in atomic force microscopy, thin-film deposition, or spectroscopic analysis.",
          references: "CV, project portfolio, and transcript."
        },
        desc: "Cutting-edge laboratory research positions inside the Department of Materials Science at Bicocca, developing silicon photonics, luminescent solar concentrators, targeted nanomedicines, and next-generation battery anodes."
      },
      {
        id: 254,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        title: "Bicocca International Traineeships & ERASMUS+ Research Internships",
        source: "https://en.unimib.it/international/international-mobility/erasmus-traineeship",
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
        desc: "Two to six-month structured laboratory traineeships enabling international students to participate in experimental biological, chemical, and physical sciences research at Bicocca's university laboratories."
      },
      {
        id: 255,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Fellowship",
        title: "Bicocca 150-Hour Student Collaborations (Collaborazioni a tempo parziale)",
        source: "https://www.unimib.it/servizi/studenti-e-laureati/collaborazioni-studentesche-150-ore",
        funding: "Salaried university employment: €1,095 per 150-hour block (approx. €7.30 to €9.00/hr net) exempt from personal income tax",
        status: "open-position",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Annual university-wide 150-hour student collaboration call)",
        fee: "Free application submitted via SegreterieOnline",
        tuition: "Zero tuition; paid student employment.",
        requirements: {
          gpa: "Enrolled Bicocca student who has completed at least 2/5 of required academic credits with good grade average.",
          ielts: "Italian or English working knowledge according to assigned structure.",
          gre: "Not required.",
          papers: "University merit ranking (based on ECTS credits and GPA).",
          references: "Student enrollment record."
        },
        desc: "Official university part-time employment contracts (150 hours total) assisting in university libraries, computer laboratories, science museums, and international student reception desks across Bicocca campuses."
      }
    ],
    researchers: [
      {
        id: 126,
        subject: "computer-science",
        name: "Prof. Dr. Giancarlo Mauri",
        title: "Professor Emeritus of Computer Science / Department DISCo",
        university: "University of Milano-Bicocca",
        country: "Italy",
        topics: ["Natural Computing", "Membrane Computing", "Theoretical Computer Science", "Bio-Inspired Algorithms", "Cellular Automata"],
        source: "https://www.disco.unimib.it/it/mauri-giancarlo",
        email: null,
        summary: "Professor Emeritus of Computer Science at the University of Milano-Bicocca, former Head of the Department of Informatics (DISCo), and world leader in natural computing, membrane computing, and molecular computational models.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 127,
        subject: "physics",
        name: "Prof. Dr. Francesco Montalenti",
        title: "Full Professor of Theoretical Physics & Head of Department of Materials Science",
        university: "University of Milano-Bicocca",
        country: "Italy",
        topics: ["Atomistic Simulations", "Semiconductor Heterostructures", "Silicon-Germanium Nanocrystals", "Epitaxial Growth", "Computational Materials Science"],
        source: "https://www.mater.unimib.it/it/montalenti-francesco",
        email: null,
        summary: "Full Professor of Theoretical Physics and Head of the Department of Materials Science at Bicocca, leading researcher in atomistic modeling of semiconductor crystal growth and strain-driven self-assembly of quantum dots.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 128,
        subject: "chemistry",
        name: "Prof. Dr. Laura Cipolla",
        title: "Full Professor of Organic Chemistry / Dept. of Biotechnology and Biosciences",
        university: "University of Milano-Bicocca",
        country: "Italy",
        topics: ["Glycochemistry", "Biomaterials for Regenerative Medicine", "Nanobiotechnology", "Scaffold Functionalization", "Carbohydrate Synthesis"],
        source: "https://www.btbs.unimib.it/it/cipolla-laura",
        email: null,
        summary: "Full Professor of Organic Chemistry at Bicocca, President of the Italian Carbohydrate Group, and pioneer in functionalized carbohydrate scaffolds for tissue engineering and nanoparticle-based drug targeting.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 5. USA: Stanford University (Row 971)
  {
    institution: "Stanford University",
    shortName: "Stanford",
    countryId: "usa",
    countryLabel: "United States",
    location: "Stanford, California, USA",
    website: "http://www.stanford.edu",
    sourceRow: 971,
    slug: "stanford-university",
    heroEyebrow: "United States · California · Silicon Valley's Innovation Engine · Reviewed 14 October 2026",
    headline: "Stanford University (Stanford, California)",
    description: "Stanford University guide: Knight-Hennessy Scholars ($54,000/yr stipend + tuition), PhD in Computer Science, Stanford HAI AI placements, CURIS internships, and faculty profiles.",
    overview: "Established in 1885 in the heart of Silicon Valley, Stanford University is widely recognized as one of the world's most innovative research institutions. Stanford's faculty and alumni have founded companies that generate more than USD $2.7 trillion in annual revenue (including Google, Hewlett-Packard, Cisco, and NVIDIA) and have received 85 Nobel laureates, 29 Turing Awards, and 20 Fields Medalists. Stanford leads the world in artificial intelligence, electrical engineering, nanophotonics, and bioengineering. Explore verified graduate degrees, fully funded doctoral packages, and distinguished faculty profiles.",
    admissions: {
      masters: "Accredited four-year U.S. Bachelor's degree or international equivalent with exceptional academic marks (typically 3.7+ / 4.0 GPA) in computer science, electrical engineering, or quantitative sciences.",
      phd: "Outstanding undergraduate or Master's degree with demonstrable scientific research ability, significant publications, and compelling letters of recommendation.",
      language: "Demonstrated English proficiency: TOEFL iBT 100 overall (minimum 25 in each subscore); Stanford does not accept IELTS scores.",
      proposal: "Comprehensive 2-page Statement of Purpose detailing research accomplishments, intellectual interests, and faculty alignment at Stanford.",
      appFee: "USD $125 graduate application fee submitted via the Stanford Graduate Admissions portal.",
      documents: "Complete official university transcripts, 3 academic letters of recommendation, resume / CV, and academic writing sample or code portfolio."
    },
    tuitionText: "Tuition for Master's programs at Stanford is charged based on unit enrollment (typically USD $62,000 to $68,000 per academic year for full-time graduate study). For doctoral researchers, Stanford provides guaranteed full funding for the regular duration of the PhD: 100% full tuition coverage plus annual living stipends of USD $52,000 to $56,000.",
    opportunities: [
      {
        id: 256,
        subject: "computer-science",
        subjects: ["computer-science", "engineering", "physics", "mathematics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Knight-Hennessy Scholars Program & Stanford Graduate Fellowships (SGF)",
        source: "https://knight-hennessy.stanford.edu/",
        funding: "Fully funded: Full tuition coverage plus annual living stipend of USD $54,000/year, academic enrichment grants, and round-trip travel allowance for up to three years of graduate study",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Stanford Graduate Fellowship departmental nomination deadline; Knight-Hennessy Scholars annual awards)",
        fee: "Free scholarship application (separate from Stanford graduate degree application fee)",
        tuition: "Full tuition completely covered for duration of scholarship award.",
        requirements: {
          gpa: "Graduation with exceptional academic distinction (typically top 5% of class, 3.8+ GPA).",
          ielts: "TOEFL iBT 100 overall.",
          gre: "General GRE optional depending on graduate department.",
          papers: "Demonstrated visionary leadership, independent thought, and civic commitment.",
          references: "Three recommendation letters submitted through the online application system."
        },
        desc: "Stanford's premier multidisciplinary graduate fellowship, awarding up to 100 fully funded graduate scholarships annually to students across all seven Stanford schools to address global challenges."
      },
      {
        id: 257,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Stanford PhD in Computer Science",
        source: "https://cs.stanford.edu/academics/phd",
        funding: "Fully funded: Five-year guaranteed funding package including full tuition and USD $54,000 annual living stipend through research assistantships and teaching fellowships",
        status: "open-position",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026 (Strict annual deadline for September 2027 doctoral entry)",
        fee: "USD $125 application fee",
        tuition: "Zero tuition. Full tuition and fees paid by departmental graduate fellowship.",
        requirements: {
          gpa: "Bachelor's or Master's degree in Computer Science, Mathematics, or Electrical Engineering with top marks.",
          ielts: "TOEFL iBT 100 minimum.",
          gre: "Not required.",
          papers: "Demonstrated research accomplishments in machine learning, systems, theory, robotics, or security.",
          references: "Three confidential academic letters of recommendation evaluating research creativity."
        },
        desc: "Five-year doctoral research program inside the Gates Computer Science Building in Silicon Valley, conducting frontier investigations in artificial intelligence, computer vision, robotics, systems architecture, and theory."
      },
      {
        id: 258,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "Stanford Master of Science in Computer Science",
        source: "https://cs.stanford.edu/academics/ms",
        funding: "Self-funded; eligible for Course Assistantships (CAs) covering 10-unit tuition plus USD $12,500/quarter stipend",
        status: "program-information",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026 for Fall 2027 cohort intake",
        fee: "USD $125 application processing fee",
        tuition: "USD $62,500 per academic year (45 total units over five academic quarters).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Mathematics, or closely related quantitative field with minimum 3.6 GPA.",
          ielts: "TOEFL iBT 100 overall.",
          gre: "General GRE optional.",
          papers: "Curriculum vitae, 2-page statement of purpose, and technical programming portfolio.",
          references: "Three academic or professional recommendation letters."
        },
        desc: "Globally celebrated terminal Master of Science degree (45 units) offering specialized tracks in Artificial Intelligence, Information Management & Analytics, Systems, Human-Computer Interaction, and Theory."
      },
      {
        id: 259,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master's",
        title: "Stanford Master of Science in Electrical Engineering",
        source: "https://ee.stanford.edu/academics/ms",
        funding: "Self-funded; eligible for laboratory research assistantships and departmental fellowships",
        status: "program-information",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026 for Fall entry",
        fee: "USD $125 application fee",
        tuition: "USD $62,500 per academic year (45 units).",
        requirements: {
          gpa: "Bachelor's degree in Electrical Engineering, Physics, or Computer Engineering with outstanding marks.",
          ielts: "TOEFL iBT 100 overall.",
          gre: "Optional.",
          papers: "Demonstrated coursework mastery of circuit design, signals, electromagnetism, and device physics.",
          references: "Three letters of academic recommendation and university transcripts."
        },
        desc: "World-leading 45-unit graduate degree program in Packard Building, offering cutting-edge specializations in Integrated Circuits, Quantum and Photonic Systems, Robotics & Autonomous Systems, and Signal Processing."
      },
      {
        id: 260,
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Research",
        title: "Stanford Institute for Human-Centered Artificial Intelligence (HAI) Placements",
        source: "https://hai.stanford.edu/",
        funding: "Funded postdoctoral and graduate research fellowships supported by Stanford HAI endowment and national research grants",
        status: "open-position",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 for collaborative research fellowship cycles",
        fee: "Free application directly to HAI",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate student in Computer Science, Cognitive Science, or Engineering with top-tier standing.",
          ielts: "Technical English communication fluency.",
          gre: "Not required.",
          papers: "Demonstrated research contributions in foundation models, AI ethics, cognitive science, or neuro-symbolic AI.",
          references: "Curriculum vitae, research statement, and two academic referee letters."
        },
        desc: "Interdisciplinary artificial intelligence institute at Stanford bringing together computer scientists, neuroscientists, ethicists, and medical researchers to advance human-centered foundation models and AI safety."
      },
      {
        id: 261,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Internship",
        title: "Stanford CURIS (Undergraduate Research in Computer Science)",
        source: "https://curis.stanford.edu/",
        funding: "Fully funded: Living stipend of USD $8,500 for 10 weeks of full-time summer laboratory research inside Stanford CS laboratories",
        status: "open-position",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Annual deadline for Summer 2027 CURIS cohort)",
        fee: "Free application",
        tuition: "Zero tuition; fully sponsored summer research fellowship.",
        requirements: {
          gpa: "Enrolled student in good academic standing with completed foundational CS coursework.",
          ielts: "Working English fluency for laboratory collaboration.",
          gre: "Not required.",
          papers: "Statement of purpose matching faculty laboratory project descriptions.",
          references: "Faculty research supervisor matching and academic transcript."
        },
        desc: "Signature 10-week summer research internship program pairing students directly with Stanford Computer Science faculty mentors to conduct novel investigations in AI, graphics, systems, and security."
      },
      {
        id: 262,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "engineering"],
        type: "Fellowship",
        title: "Stanford Course Assistantships (CA / Teaching Assistantships)",
        source: "https://cs.stanford.edu/academics/student-resources/course-assistantships",
        funding: "Salaried academic teaching appointments: USD $12,500 per quarter salary plus 10-unit full tuition allowance",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for Autumn quarter course teaching allocations",
        fee: "Free application through departmental teaching portals",
        tuition: "Tuition fully covered by teaching assistantship tuition allowance.",
        requirements: {
          gpa: "Matriculated Stanford graduate student in good academic standing.",
          ielts: "High level oral English presentation and tutorial instructional capabilities.",
          gre: "Not required.",
          papers: "Outstanding mastery of course curriculum and A grade in target course.",
          references: "Approval from course instructor and graduate advisor."
        },
        desc: "Departmental academic teaching appointments providing instructional training and substantial financial compensation for leading weekly problem sections, holding office hours, and grading assignments."
      }
    ],
    researchers: [
      {
        id: 129,
        subject: "computer-science",
        name: "Prof. Dr. Fei-Fei Li",
        title: "Sequoia Capital Professor of Computer Science & Co-Director of Stanford HAI",
        university: "Stanford University",
        country: "United States",
        topics: ["Computer Vision", "Machine Learning", "ImageNet", "Embodied AI", "Healthcare Artificial Intelligence"],
        source: "https://profiles.stanford.edu/fei-fei-li",
        email: null,
        summary: "Sequoia Capital Professor of Computer Science at Stanford University, Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence (HAI), creator of ImageNet (catalyst of modern deep learning), and member of the National Academy of Engineering.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 130,
        subject: "computer-science",
        name: "Prof. Dr. Christopher Manning",
        title: "Thomas M. Siebel Professor in Machine Learning & Director of SAIL",
        university: "Stanford University",
        country: "United States",
        topics: ["Natural Language Processing", "Deep Learning for NLP", "GloVe Embeddings", "Neural Machine Translation", "Language Models"],
        source: "https://nlp.stanford.edu/~manning/",
        email: null,
        summary: "Thomas M. Siebel Professor in Machine Learning and Professor of Linguistics and Computer Science at Stanford, Director of the Stanford Artificial Intelligence Laboratory (SAIL), ACM Fellow, and world leader in computational linguistics.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 131,
        subject: "engineering",
        name: "Prof. Dr. Jelena Vuckovic",
        title: "Jensen Huang Professor in Global Leadership & Chair of Electrical Engineering",
        university: "Stanford University",
        country: "United States",
        topics: ["Nanophotonics", "Inverse Design Optics", "Quantum Photonics", "Silicon Carbide Devices", "Optoelectronic Integration"],
        source: "https://profiles.stanford.edu/jelena-vuckovic",
        email: null,
        summary: "Jensen Huang Professor in Global Leadership and Chair of the Department of Electrical Engineering at Stanford, IEEE Fellow, Max Born Award recipient, and pioneer in computationally inverse-designed nanophotonics and solid-state quantum optics.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 6. UK: University College London (Row 1307)
  {
    institution: "University College London",
    shortName: "UCL",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "London, England, United Kingdom",
    website: "https://www.ucl.ac.uk",
    sourceRow: 1307,
    slug: "university-college-london",
    heroEyebrow: "United Kingdom · London · London's Global University & AI Pioneer · Reviewed 14 October 2026",
    headline: "University College London (UCL)",
    description: "University College London guide: UCL Research Excellence Scholarships (£22,278/yr tax-free), MSc in Machine Learning (CSML), DeepMind AI research, and faculty profiles.",
    overview: "Founded in 1826 in Bloomsbury, London, University College London (UCL) is consistently ranked among the world's top 10 universities. As England's first university to admit students regardless of religion or gender, UCL generates over £1.7 billion in annual income and is associated with 30 Nobel laureates. Co-founding the national Alan Turing Institute and maintaining intimate partnerships with Google DeepMind in Kings Cross, UCL leads the world in Machine Learning, Neuroscience, Computational Statistics, and Architectural Design. Explore verified graduate degrees, fully funded doctoral scholarships, and distinguished faculty profiles.",
    admissions: {
      masters: "UK Upper Second-Class (2:1) Honours Bachelor's degree or international equivalent (typically 80%+ or 3.3/4.0 GPA) in computer science, mathematics, engineering, or physical sciences.",
      phd: "Master's degree with Merit or UK First-Class Honours Bachelor's degree with demonstrable scientific research ability, publications, or thesis excellence.",
      language: "UCL Standard/Good/Advanced English levels: Level 2 requirement: Academic IELTS 7.0 overall (minimum 6.5 in all subscores) or TOEFL iBT 96 overall (minimum 24 in reading/writing, 22 in speaking/listening).",
      proposal: "Comprehensive 2 to 3-page research proposal detailing research hypothesis, novelty, methodology, and identified UCL academic research group.",
      appFee: "£90 application fee for postgraduate taught courses; free application for postgraduate doctoral research (PhD).",
      documents: "Complete official university transcripts, 2 academic reference letters, curriculum vitae, personal statement of purpose, and passport copy."
    },
    tuitionText: "Tuition for postgraduate taught master's programs ranges from £35,000 to £42,500 per year for overseas international students (£16,500 to £20,500 for UK home students). For doctoral researchers, the UCL Research Excellence Scholarships (RES) completely cover all tuition fees (home or overseas) and provide an annual tax-free stipend of £22,278 for 3 years.",
    opportunities: [
      {
        id: 263,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "chemistry", "mathematics", "biology"],
        type: "Scholarship",
        title: "UCL Research Excellence Scholarships (RES)",
        source: "https://www.ucl.ac.uk/scholarships/research-excellence-scholarship",
        funding: "Fully funded: Full tuition fees (home or overseas rate) for 3 years plus annual tax-free living stipend of £22,278 per year and £1,000 annual research consumables budget",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual deadline for 2027 doctoral entry scholarship consideration)",
        fee: "Free application for doctoral research programs",
        tuition: "Full tuition completely covered for the entire 3-year duration of the PhD.",
        requirements: {
          gpa: "First Class Honours undergraduate degree (or international equivalent A / 3.8+ GPA) or Master's with Distinction.",
          ielts: "UCL Level 2 requirement: IELTS 7.0 overall with minimum 6.5 in all elements.",
          gre: "Not required.",
          papers: "Demonstrated exceptional research potential through published work, pre-prints, or undergraduate thesis.",
          references: "Two academic referee reports submitted directly via the UCL application portal."
        },
        desc: "UCL's premier doctoral fellowship awarded to 40 outstanding international and domestic PhD scholars annually, providing comprehensive tuition fee coverage and £22,278/year maintenance."
      },
      {
        id: 264,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "UCL PhD in Computer Science",
        source: "https://www.ucl.ac.uk/computer-science/study/postgraduate-research",
        funding: "Fully funded: Departmental EPSRC studentships and industry partnerships covering full tuition plus London-weighted stipend (£21,237 to £24,000/yr)",
        status: "open-position",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for main autumn funding allocations",
        fee: "Free application",
        tuition: "Zero tuition for funded students; standard overseas tuition £38,300/year.",
        requirements: {
          gpa: "First Class Honours degree in Computer Science, Mathematics, or closely related field.",
          ielts: "Academic IELTS 7.0 overall (6.5 min band) or TOEFL iBT 96.",
          gre: "Not required.",
          papers: "Detailed 2-to-3 page research statement matching Department of Computer Science research themes.",
          references: "Two strong academic reference letters and endorsement from a potential supervisor."
        },
        desc: "Three to four-year doctoral research program inside UCL's Department of Computer Science in Bloomsbury, investigating Artificial Intelligence, Machine Learning, Robotics, Cryptography, and Financial Computing."
      },
      {
        id: 265,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "UCL MSc in Machine Learning",
        source: "https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/machine-learning-msc",
        funding: "Self-funded; eligible for DeepMind Scholarships (full fees + £19,000 living allowance) and UCL awards",
        status: "program-information",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Strict competitive deadline for September 2027 intake)",
        fee: "£90 application fee",
        tuition: "£41,000 for overseas international students; £19,300 for UK home students.",
        requirements: {
          gpa: "First Class UK Honours degree in Computer Science, Mathematics, or Physics with exceptional quantitative marks.",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in each section.",
          gre: "Not required.",
          papers: "Strong coursework background in linear algebra, multivariable calculus, probability, and Python/PyTorch.",
          references: "Two academic referee letters from university faculty instructors."
        },
        desc: "World-renowned one-year taught master's degree (180 UK credits / 90 ECTS) at the Centre for Computational Statistics and Machine Learning (CSML), providing rigorous mathematical foundations in deep learning, graphical models, and reinforcement learning."
      },
      {
        id: 266,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "UCL MSc in Robotics and Computation",
        source: "https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/robotics-and-computation-msc",
        funding: "Self-funded; eligible for UCL Engineering merit scholarships (£5,000 to £10,000)",
        status: "program-information",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for Autumn 2027 entry",
        fee: "£90 application processing fee",
        tuition: "£38,300 for international students; £17,500 for UK home students.",
        requirements: {
          gpa: "First Class or Upper Second Class (2:1) Honours degree in Engineering, Computer Science, or Physical Sciences.",
          ielts: "Academic IELTS 7.0 overall with minimum 6.5 in all bands.",
          gre: "Not required.",
          papers: "Coursework mastery of linear algebra, control theory, robotics kinematics, and C++/Python.",
          references: "Two academic letters of recommendation and personal statement."
        },
        desc: "Cutting-edge one-year postgraduate master's program based at UCL Robotics in Bloomsbury, focusing on autonomous robotic manipulation, surgical robotics, vision-based navigation, and computational kinematics."
      },
      {
        id: 267,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Research",
        title: "UCL Centre for Artificial Intelligence Research Placements",
        source: "https://www.ucl.ac.uk/ai-centre/",
        funding: "Funded research positions supported by UKRI Turing Institute grants and Google DeepMind research partnerships",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for collaborative postdoctoral and graduate research intakes",
        fee: "Free application directly to AI Centre researchers",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate degree in Computing, Data Science, or Applied Mathematics with distinction.",
          ielts: "Technical English publishing and presentation capability.",
          gre: "Not required.",
          papers: "Demonstrated contributions in reinforcement learning, generative models, or neural computer vision.",
          references: "Curriculum vitae, research portfolio, and two academic references."
        },
        desc: "Frontier artificial intelligence research center in Bloomsbury, conducting foundational research in deep learning, multi-agent systems, and neural rendering in collaboration with the Alan Turing Institute."
      },
      {
        id: 268,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Internship",
        title: "UCL Engineering Summer Research Internships",
        source: "https://www.ucl.ac.uk/engineering/study/undergraduate/undergraduate-summer-research",
        funding: "Fully funded: Bursary of £420 to £450 per week for 8 to 10 weeks of summer research work inside UCL laboratories",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual deadline for Summer 2027 research bursary applications)",
        fee: "Free application",
        tuition: "Zero tuition; paid student research bursary.",
        requirements: {
          gpa: "Enrolled undergraduate student with minimum 2:1 / First Class predicted grade.",
          ielts: "Fluent working English communication.",
          gre: "Not required.",
          papers: "Agreed project description co-authored with a UCL faculty host supervisor.",
          references: "Faculty host endorsement and university academic transcript."
        },
        desc: "Competitive summer research placement program, enabling undergraduate students to work directly alongside leading researchers on live scientific investigations in photonics, biomedical implants, and nanotech."
      },
      {
        id: 269,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "engineering"],
        type: "Fellowship",
        title: "UCL Postgraduate Teaching Assistantships (PGTA Pathway)",
        source: "https://www.ucl.ac.uk/human-resources/pay-benefits/salary-scales",
        funding: "Salaried academic employment: £21.50 to £27.00 per hour for laboratory demonstrating, problem class tutoring, and coursework marking",
        status: "open-position",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 for upcoming Autumn term teaching allocations",
        fee: "Free application via department PGTA administrators",
        tuition: "Zero tuition; hourly salaried university employment.",
        requirements: {
          gpa: "Registered postgraduate doctoral researcher (PhD student) at University College London.",
          ielts: "High level spoken English communication for classroom teaching.",
          gre: "Not required.",
          papers: "Satisfactory completion of UCL Arena One teaching development workshop.",
          references: "Approval from PhD primary research supervisor."
        },
        desc: "Departmental academic tutoring positions for enrolled doctoral researchers, providing pedagogical training and hourly remuneration for supervising undergraduate lab classes, leading tutorials, and grading coursework."
      }
    ],
    researchers: [
      {
        id: 132,
        subject: "computer-science",
        name: "Prof. Dr. David Silver",
        title: "Professor of Computer Science at UCL & Principal Research Scientist, Google DeepMind",
        university: "University College London",
        country: "United Kingdom",
        topics: ["Reinforcement Learning", "AlphaGo", "AlphaZero", "Deep Q-Networks", "Artificial General Intelligence"],
        source: "https://www.ucl.ac.uk/computer-science/people/david-silver",
        email: null,
        summary: "Professor of Computer Science at UCL, Principal Research Scientist at Google DeepMind, Fellow of the Royal Society, and lead researcher behind AlphaGo, AlphaZero, and modern deep reinforcement learning.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 133,
        subject: "computer-science",
        name: "Prof. Dr. Lourdes Agapito",
        title: "Professor of Computer Vision / Department of Computer Science",
        university: "University College London",
        country: "United Kingdom",
        topics: ["3D Computer Vision", "Dynamic Scene Reconstruction", "Neural Rendering", "Non-Rigid Structure from Motion", "Deformable Tracking"],
        source: "https://profiles.ucl.ac.uk/2916-lourdes-agapito",
        email: null,
        summary: "Professor of Computer Vision at UCL, Fellow of the Alan Turing Institute, and world leader in 3D reconstruction of non-rigid and deformable environments from monocular video sequences.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 134,
        subject: "computer-science",
        name: "Prof. Dr. John Shawe-Taylor",
        title: "Professor of Computational Statistics & Machine Learning / UNESCO Chair in AI",
        university: "University College London",
        country: "United Kingdom",
        topics: ["Support Vector Machines", "Kernel Methods", "Computational Learning Theory", "Trustworthy AI", "Information Retrieval"],
        source: "https://profiles.ucl.ac.uk/1127-john-shawe-taylor",
        email: null,
        summary: "Professor of Computational Statistics and Machine Learning at UCL, UNESCO Chair in Artificial Intelligence, former Head of the Department of Computer Science, and foundational pioneer in kernel methods and support vector machines.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 7. JAPAN: Nagoya University (Row 1713)
  {
    institution: "Nagoya University",
    shortName: "Meidai",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Nagoya, Aichi, Japan",
    website: "http://www.nagoya-u.ac.jp",
    sourceRow: 1713,
    slug: "nagoya-university",
    heroEyebrow: "Japan · Aichi · Designated National University & Nobel Center · Reviewed 14 October 2026",
    headline: "Nagoya University (名古屋大学 - Meidai)",
    description: "Nagoya University guide: Doctoral Mentoring Fellowships (¥200,000/mo), Blue LED semiconductor research, NUSIP automotive engineering, and Nobel laureate faculty.",
    overview: "Established in 1871 in central Japan's industrial heartland, Nagoya University (Meidai) is one of Japan's prestigious Designated National Universities. Renowned globally for producing 6 Nobel laureates in the 21st century (including Hiroshi Amano and Isamu Akasaki for inventing the Blue LED, and Ryoji Noyori in Chemistry), Nagoya University leads the world in gallium nitride (GaN) power semiconductors, high-energy particle physics at KMI, and autonomous vehicle informatics with Toyota. Explore verified English-medium degrees, fully funded doctoral scholarships, and distinguished faculty profiles.",
    admissions: {
      masters: "Completion of 16 years of formal education culminating in an accredited Bachelor's degree (or equivalent 4-year undergraduate diploma) in relevant discipline.",
      phd: "Recognized Master's degree or professional degree with demonstrated research accomplishments, publications, or Master's thesis of superior academic merit.",
      language: "Demonstrated English proficiency: Academic IELTS 6.5 overall or TOEFL iBT 80+ for English-language graduate degree tracks (e.g., G30 International Programs).",
      proposal: "Comprehensive 2 to 3-page research proposal detailing the intended research questions, background literature, methodology, and faculty supervisor alignment.",
      appFee: "¥10,000 to ¥30,000 examination fee depending on graduate school and international applicant category.",
      documents: "Graduation certificate, official transcripts with grading rubric, statement of purpose, two letters of recommendation, and passport scan."
    },
    tuitionText: "Under Japanese national university regulations, annual tuition is standard across all faculties at ¥535,800 per year (approx. USD $3,600), plus a one-time admission fee of ¥282,000. Recipient scholars of the Japanese Government MEXT scholarship or Nagoya University Doctoral Mentoring Fellowship receive 100% full tuition exemption plus monthly living allowances of ¥180,000 to ¥200,000.",
    opportunities: [
      {
        id: 270,
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry", "computer-science", "mathematics"],
        type: "Scholarship",
        title: "Nagoya University Doctoral Mentoring Fellowship & MEXT Grants",
        source: "https://en.nagoya-u.ac.jp/admissions/scholarships/",
        funding: "Fully funded: Monthly living stipend of ¥180,000 to ¥200,000 per month plus 100% full tuition and matriculation fee exemption for up to three years of doctoral study",
        status: "open-scholarship",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 (Application deadline for Autumn 2027 doctoral enrollment)",
        fee: "¥10,000 screening fee",
        tuition: "Full tuition completely waived under the scholarship system.",
        requirements: {
          gpa: "Demonstrated top-tier academic record in prior undergraduate and Master's degree studies.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85+.",
          gre: "Recommended for quantitative programs.",
          papers: "Master's research thesis or peer-reviewed publications demonstrating independent research capability.",
          references: "Two letters of recommendation from university academic mentors."
        },
        desc: "Nagoya University's premier international doctoral fellowship, providing full tuition and admission fee exemptions plus living allowances for outstanding privately financed and government-sponsored international PhD students."
      },
      {
        id: 271,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Nagoya University PhD in Informatics",
        source: "https://www.i.nagoya-u.ac.jp/en/admissions/",
        funding: "Fully funded: Eligible for JST SPRING fellowships (¥2,900,000/yr) and departmental research assistantships",
        status: "open-position",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 for Autumn intake (International Graduate Program in Informatics)",
        fee: "¥30,000 examination fee",
        tuition: "¥535,800 per year (tuition exemption available based on academic merit).",
        requirements: {
          gpa: "Master's degree in Informatics, Computer Science, or Electrical Engineering with high marks.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 80+.",
          gre: "General test scores accepted.",
          papers: "Master's research thesis and 3-page doctoral research proposal matching faculty research laboratories.",
          references: "Prior contact and informal acceptance letter from a graduate faculty supervisor."
        },
        desc: "Three-year doctoral curriculum inside the Graduate School of Informatics at Higashiyama campus, offering world-class research in autonomous driving systems, intelligent signal processing, and computer vision."
      },
      {
        id: 272,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Master's",
        title: "Nagoya University Master of Science in Physics",
        source: "https://www.phys.nagoya-u.ac.jp/en/",
        funding: "Self-funded; eligible for MEXT University Recommendation scholarships and Nagoya tuition exemptions",
        status: "program-information",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (International admissions round for October 2027 entry)",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per year plus one-time admission fee of ¥282,000.",
        requirements: {
          gpa: "Four-year Bachelor of Science in Physics or Mathematics with solid quantum mechanics and thermodynamics background.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 80+.",
          gre: "Physics subject test recommended.",
          papers: "Demonstrated coursework background in theoretical and experimental particle physics.",
          references: "Two letters of academic recommendation and official transcripts."
        },
        desc: "Two-year English-medium research Master's degree inside the Department of Physics (home to Sakata model and Nobel-winning CP violation discoveries), investigating particle physics, cosmology, and condensed matter."
      },
      {
        id: 273,
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Master's",
        title: "Nagoya University Master of Engineering in Materials Science",
        source: "https://www.engg.nagoya-u.ac.jp/en/",
        funding: "Self-funded; eligible for JASSO honors scholarships and Nagoya tuition waivers",
        status: "program-information",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026 for Autumn intake",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per year plus one-time admission fee.",
        requirements: {
          gpa: "Bachelor of Engineering in Materials Science, Applied Physics, or Chemistry with solid semiconductor background.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 80+.",
          gre: "Not required.",
          papers: "Demonstrated coursework background in solid-state physics, crystallography, and electronic devices.",
          references: "Official university transcripts, degree certificate, and personal statement."
        },
        desc: "Two-year Master of Engineering program inside Nagoya University's Graduate School of Engineering, offering world-renowned training in GaN wide-bandgap semiconductors, power electronics, and advanced alloys."
      },
      {
        id: 274,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Research",
        title: "Kobayashi-Maskawa Institute (KMI) Particle Physics Placements",
        source: "https://www.kmi.nagoya-u.ac.jp/eng/",
        funding: "Funded research projects supported by MEXT and international theoretical physics collaboration grants",
        status: "open-position",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for collaborative project allocations",
        fee: "Free application directly to KMI faculty",
        tuition: "Zero tuition; funded theoretical research placement.",
        requirements: {
          gpa: "Graduate student in Theoretical Physics, High-Energy Physics, or String Theory with distinction.",
          ielts: "Technical English fluency for international collaboration.",
          gre: "Not required.",
          papers: "Published or pre-print research in particle physics, dark matter detection, or Belle II analysis.",
          references: "Curriculum vitae, publication list, and supervisor endorsement."
        },
        desc: "Frontier particle physics research placements inside KMI at Nagoya University (named after Nobel laureates Makoto Kobayashi and Toshihide Maskawa), participating in Belle II flavor physics, dark matter searches, and quantum field theory."
      },
      {
        id: 275,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "Nagoya University Summer Intensive Program (NUSIP) in Automotive Engineering",
        source: "https://nupace.iee.nagoya-u.ac.jp/en/academic/nusip/",
        funding: "Fully funded: JASSO scholarship stipend of ¥150,000, free university accommodation, site visits to Toyota, and laboratory coaching",
        status: "open-position",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Strict international deadline for Summer 2027 NUSIP cohort)",
        fee: "Free application",
        tuition: "Zero tuition; fully sponsored summer program.",
        requirements: {
          gpa: "Enrolled undergraduate student in mechanical engineering, electrical engineering, or CS with 3.0+ GPA.",
          ielts: "Fluent working English communication.",
          gre: "Not required.",
          papers: "Statement of purpose detailing automotive technology interests and project preferences.",
          references: "Two academic letters of recommendation and official transcript."
        },
        desc: "Prestigious six-week summer research and study program (June–July) offering international engineering scholars direct laboratory research in autonomous vehicles, electric powertrains, and robotics in partnership with Japan's automotive industry."
      },
      {
        id: 276,
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering", "computer-science"],
        type: "Fellowship",
        title: "Nagoya University Teaching Assistantships (TA) & Research Assistantships (RA)",
        source: "https://en.nagoya-u.ac.jp/employment/",
        funding: "Salaried campus employment: ¥1,300 to ¥1,900 per hour assisting in laboratory investigations and course instruction",
        status: "open-position",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027 for Spring semester appointments",
        fee: "Free application through department administration",
        tuition: "Zero tuition; hourly salaried university employment.",
        requirements: {
          gpa: "Enrolled graduate student at Nagoya University in good academic standing.",
          ielts: "English or Japanese language proficiency matching the laboratory or lecture needs.",
          gre: "Not required.",
          papers: "Excellence in coursework relevant to assigned laboratory tasks.",
          references: "Approval from laboratory supervising professor."
        },
        desc: "University employment opportunities for enrolled Master's and PhD students providing financial assistance for assisting in seminar instruction, computer lab supervision, and experimental semiconductor fabrication."
      }
    ],
    researchers: [
      {
        id: 135,
        subject: "engineering",
        name: "Prof. Dr. Hiroshi Amano",
        title: "Nobel Laureate in Physics (2014) / Director of CIRFE",
        university: "Nagoya University",
        country: "Japan",
        topics: ["Gallium Nitride (GaN)", "Blue LEDs", "Wide-Bandgap Semiconductors", "Power Electronics", "Solid-State Lighting"],
        source: "https://en.nagoya-u.ac.jp/people/amano_hiroshi.html",
        email: null,
        summary: "Director of the Center for Integrated Research of Future Electronics (CIRFE) at Nagoya University, 2014 Nobel Laureate in Physics for the invention of efficient blue light-emitting diodes, enabling bright and energy-saving white light sources.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 136,
        subject: "chemistry",
        name: "Prof. Dr. Ryoji Noyori",
        title: "Nobel Laureate in Chemistry (2001) / University Professor",
        university: "Nagoya University",
        country: "Japan",
        topics: ["Asymmetric Catalysis", "Chiral Hydrogenation", "BINAP Ligands", "Green Chemistry", "Organic Synthesis"],
        source: "https://en.nagoya-u.ac.jp/people/noyori_ryoji.html",
        email: null,
        summary: "University Professor at Nagoya University, 2001 Nobel Laureate in Chemistry for his work on chirally catalyzed hydrogenation reactions, revolutionizing pharmaceutical manufacturing and asymmetric organic synthesis.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 137,
        subject: "computer-science",
        name: "Prof. Dr. Kazuya Takeda",
        title: "Professor of Informatics & Vice-President of Nagoya University",
        university: "Nagoya University",
        country: "Japan",
        topics: ["Autonomous Driving", "In-Vehicle Speech Recognition", "Signal Processing", "Driver Behavior Modeling", "Intelligent Vehicles"],
        source: "https://www.sp.m.is.nagoya-u.ac.jp/",
        email: null,
        summary: "Professor in the Graduate School of Informatics and Vice-President of Nagoya University, IEEE Fellow, leading innovator in speech signal processing, acoustic modeling, and autonomous vehicle informatics in partnership with Toyota.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 8. SWEDEN: Stockholm University (Row 1606)
  {
    institution: "Stockholm University",
    shortName: "Stockholm",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Stockholm, Sweden",
    website: "https://www.su.se",
    sourceRow: 1606,
    slug: "stockholm-university",
    heroEyebrow: "Sweden · Stockholm · Royal National City Park Campus · Reviewed 14 October 2026",
    headline: "Stockholm University (Stockholms universitet)",
    description: "Stockholm University guide: SU full tuition scholarships, salaried PhD employment (SEK 32k–38k/mo), MSc in Computer & Systems Sciences, and planetary boundaries research.",
    overview: "Established in 1878, Stockholm University is one of Europe's leading centers for higher education and research, set within the world's first national city park in Frescati. Associated with 7 Nobel laureates (including Svante Arrhenius and Paul Crutzen), Stockholm University leads globally in Environmental Science at the Stockholm Resilience Centre (originator of the Planetary Boundaries framework), Computer and Systems Sciences in Kista (DSV), and Theoretical Physics at the Oskar Klein Centre. Review verified English-taught Master's degrees, salaried doctoral positions, and faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree in Computer Science, Systems Science, Physics, or related quantitative field (minimum 180 ECTS credits), with a completed undergraduate thesis project.",
      phd: "Completed second-cycle Master's degree (minimum 120 ECTS) in relevant discipline satisfying Swedish third-cycle admission criteria, with demonstrable scientific publication or thesis excellence.",
      language: "Demonstrated English proficiency equivalent to Swedish upper secondary school English 6: Academic IELTS 6.5 overall (minimum 5.5 in each band) or TOEFL iBT 90 overall (writing minimum 20).",
      proposal: "For Master's: statement of purpose and academic transcripts via University Admissions Sweden. For PhD: comprehensive research statement matching specific advertised doctoral vacancies.",
      appFee: "SEK 900 centralized application fee for non-EU/EEA students applying through University Admissions Sweden (waived for EU/EEA citizens).",
      documents: "Degree certificate, complete official transcripts with grading rubric, English proficiency test score, and copy of valid passport."
    },
    tuitionText: "Under Swedish higher education regulations, EU/EEA and Swiss citizens study completely tuition-free. For non-EU/EEA international students, tuition for master's programs is SEK 67,500 to SEK 75,000 per semester (approx. SEK 270,000 to SEK 300,000 for a two-year 120 ECTS program). The Stockholm University Scholarship Scheme covers 100% of tuition fees for outstanding admitted Master's candidates. Doctoral candidates hold salaried employment contracts and study tuition-free.",
    opportunities: [
      {
        id: 277,
        subject: "environment",
        subjects: ["environment", "computer-science", "physics", "social-sciences"],
        type: "Scholarship",
        title: "Stockholm University Scholarship Scheme for International Master's Students",
        source: "https://www.su.se/english/education/admissions/scholarships",
        funding: "Fully funded: 100% full tuition fee waiver for the entire two-year duration of the Master's programme (saving up to SEK 300,000)",
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
        desc: "Stockholm University's premier merit-based scholarship covering full tuition fees for outstanding non-EU/EEA international students admitted to two-year Master's degree programs at Stockholm University."
      },
      {
        id: 278,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Stockholm University Salaried Doctoral Employment (Doktorandanställning)",
        source: "https://www.su.se/english/about-the-university/work-at-su/phd-studies",
        funding: "Fully funded: Four-year salaried university employment under Swedish state collective agreements starting from SEK 32,000/month rising to SEK 38,000/month gross, with full Swedish social benefits and pension",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Departmental vacancy intake; verify individual active job call)",
        fee: "Free application directly to advertised vacancy",
        tuition: "Zero tuition. Appointed PhD candidates are salaried Swedish university employees.",
        requirements: {
          gpa: "Master of Science degree (120 ECTS) in Computer Science, Systems Science, or related quantitative field.",
          ielts: "Swedish English 6 proficiency (IELTS 6.5+ or university-level English instruction verification).",
          gre: "Not required.",
          papers: "Master's research thesis or peer-reviewed publication in software, data science, or AI.",
          references: "Two academic reference letters, research statement, and complete transcripts."
        },
        desc: "Four-year salaried doctoral research appointments across Stockholm University research departments, combining cutting-edge scientific investigation with teaching duties under standard Swedish employment contracts and comprehensive health coverage."
      },
      {
        id: 279,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Stockholm University Master of Science in Computer and Systems Sciences",
        source: "https://www.dsv.su.se/en/education/courses-and-programmes/masters-programmes",
        funding: "Self-funded; eligible for Stockholm University Scholarships and Swedish Institute (SI) scholarships",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Autumn 2027 entry",
        fee: "SEK 900 centralized application fee",
        tuition: "SEK 67,500 per semester (SEK 270,000 total 2-year tuition for non-EU students; free for EU/EEA).",
        requirements: {
          gpa: "Bachelor's degree with major in Computer Science or Information Systems with strong grades in programming and algorithms.",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each section).",
          gre: "Not required.",
          papers: "Curriculum vitae and detailed summary of undergraduate programming and system design modules.",
          references: "Official university transcripts, degree certificate, and passport copy."
        },
        desc: "Two-year English-taught Master's program (120 ECTS) based at the Department of Computer and Systems Sciences (DSV) in Kista, covering Artificial Intelligence, Information Security, Data Science, and Software Quality."
      },
      {
        id: 280,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Master's",
        title: "Stockholm University Master of Science in Theoretical Physics",
        source: "https://www.fysik.su.se/english/education/master-programmes/theoretical-physics",
        funding: "Self-funded; eligible for Oskar Klein Centre bursaries and Swedish research allowances",
        status: "program-information",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 for Autumn entry",
        fee: "SEK 900 application fee",
        tuition: "SEK 70,000 per semester (SEK 280,000 total for non-EU international students).",
        requirements: {
          gpa: "Bachelor of Science in Physics or Theoretical Physics with solid quantum field theory and statistical mechanics background.",
          ielts: "Academic IELTS 6.5 overall with minimum 5.5 in all bands.",
          gre: "Not required.",
          papers: "Demonstrated coursework background in mathematical methods of physics, classical mechanics, and electrodynamics.",
          references: "Complete academic transcripts, motivation letter, and CV."
        },
        desc: "Interdisciplinary two-year Master's degree (120 ECTS) inside the Oskar Klein Centre at AlbaNova, offering world-class research tracks in General Relativity, String Theory, Quantum Information, and Particle Cosmology."
      },
      {
        id: 281,
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Research",
        title: "Stockholm Resilience Centre (SRC) Research Placements",
        source: "https://www.stockholmresilience.org/",
        funding: "Funded research projects supported by the Mistra Foundation and European Research Council (ERC) grants",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for collaborative seed projects",
        fee: "Free application directly to project directors",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate degree in Environmental Science, Complex Systems, or Sustainable Development with distinction.",
          ielts: "Technical English fluency for international collaboration.",
          gre: "Not required.",
          papers: "Prior experience in planetary boundaries modeling, social-ecological resilience, or climate tipping elements.",
          references: "Academic curriculum vitae, publication list, and two referee contacts."
        },
        desc: "World-famous sustainability research institute based at Stockholm University, advancing cross-disciplinary investigations into planetary boundaries, biosphere stewardship, and human resilience under climate disruption."
      },
      {
        id: 282,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Internship",
        title: "Stockholm Summer Research Placements inside Oskar Klein Centre",
        source: "https://www.okc.albanova.se/",
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
        desc: "Two to six-month structured research traineeships inside the Oskar Klein Centre for Cosmoparticle Physics, collaborating on dark matter searches, IceCube neutrino data, and gravitational wave theory."
      },
      {
        id: 283,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "physics"],
        type: "Fellowship",
        title: "Stockholm Teaching Assistantships & Laboratory Exercise Mentoring",
        source: "https://www.su.se/english/education/student-life/work-while-studying",
        funding: "Salaried hourly university employment: SEK 165 to SEK 205 per hour for supervising exercise classes, coding labs, and grading assignments",
        status: "open-position",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 for upcoming Autumn semester course assistantships",
        fee: "Free application via Stockholm course examiners",
        tuition: "Zero tuition; paid student employment.",
        requirements: {
          gpa: "Enrolled Master's or doctoral student at Stockholm in good academic standing.",
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
        id: 138,
        subject: "environment",
        name: "Prof. Dr. Johan Rockström",
        title: "Professor in Environmental Science & Director, Potsdam Institute (PIK)",
        university: "Stockholm University",
        country: "Sweden",
        topics: ["Planetary Boundaries", "Earth System Science", "Global Sustainability", "Climate Tipping Points", "Resilience Thinking"],
        source: "https://www.su.se/profiles/jrock-1.185633",
        email: null,
        summary: "Professor in Environmental Science at Stockholm University, Director of the Potsdam Institute for Climate Impact Research (PIK), creator of the acclaimed Planetary Boundaries framework, and world leader in global sustainability science.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 139,
        subject: "physics",
        name: "Prof. Dr. Katherine Freese",
        title: "Guest Professor of Theoretical Physics / Oskar Klein Centre",
        university: "Stockholm University",
        country: "Sweden",
        topics: ["Dark Matter", "Dark Stars", "Early Universe Cosmology", "Cosmic Microwave Background", "Astroparticle Physics"],
        source: "https://www.fysik.su.se/",
        email: null,
        summary: "Guest Professor of Theoretical Physics at Stockholm University and the Oskar Klein Centre, former Director of Nordita, member of the National Academy of Sciences, and world pioneer in indirect detection of dark matter and dark stars.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 140,
        subject: "computer-science",
        name: "Prof. Dr. Panagiotis Papapetrou",
        title: "Professor of Computer Science / Dept. of Computer and Systems Sciences (DSV)",
        university: "Stockholm University",
        country: "Sweden",
        topics: ["Data Mining", "Time Series Analysis", "Explainable AI", "Health Informatics", "Machine Learning for Medicine"],
        source: "https://dsv.su.se/en/about-dsv/staff/panagiotis-papapetrou",
        email: null,
        summary: "Professor of Computer Science at DSV Stockholm University, leading research in interpretable machine learning, temporal pattern mining, and clinical predictive modeling for cardiovascular and oncological healthcare systems.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 9. NETHERLANDS: Universiteit Leiden (Row 1519)
  {
    institution: "Universiteit Leiden",
    shortName: "Leiden",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Leiden, South Holland, Netherlands",
    website: "https://www.universiteitleiden.nl",
    sourceRow: 1519,
    slug: "universiteit-leiden",
    heroEyebrow: "Netherlands · South Holland · Netherlands' Oldest University & Science Center · Reviewed 14 October 2026",
    headline: "Universiteit Leiden (Leiden University)",
    description: "Universiteit Leiden guide: LExS Excellence Scholarships (full tuition + €10,000 grant), salaried CAO-NU PhD positions, MSc in Astronomy & Computer Science, and 16 Nobel laureates.",
    overview: "Founded in 1575 by William, Prince of Orange, Universiteit Leiden is the oldest university in the Netherlands and a foundational member of the League of European Research Universities (LERU). Renowned for educating 16 Nobel laureates (including Hendrik Lorentz, Pieter Zeeman, Heike Kamerlingh Onnes, and Jan Tinbergen), Leiden is a world leader in Astronomy (at the historic Leiden Observatory), Theoretical Physics (Lorentz Institute), Bio-pharmaceutical Sciences, and International Law in The Hague. Review verified Master's curricula, salaried doctoral employment, Bio Science Park internships, and distinguished faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree in Computer Science, Astronomy, Physics, or related quantitative field (minimum 180 ECTS credits) matching specific foundational course requirements with minimum GPA equivalent to Dutch 7.5/10.",
      phd: "Recognized Master of Science degree (120 ECTS) with excellent academic marks, strong thesis research evidence, and successful competitive interview for an advertised doctoral vacancy.",
      language: "Demonstrated English proficiency: Academic IELTS 7.0 overall (minimum 6.5 in all subscores) or TOEFL iBT 100 overall (minimum 22 in each component).",
      proposal: "For Master's: motivation letter, curriculum vitae, and detailed course descriptions via uSis. For PhD: comprehensive research statement aligned with advertised vacancy calls.",
      appFee: "€100 application fee for international applicants holding non-Dutch degrees (refunded upon successful matriculation).",
      documents: "Complete official transcripts, degree certificate, detailed descriptions of core undergraduate mathematics/programming modules, curriculum vitae, and passport scan."
    },
    tuitionText: "Under Dutch national higher education regulations, EU/EEA students pay the statutory tuition fee of €2,530 per year. For non-EU/EEA international students, tuition is approximately €19,600 to €21,500 per year for Master's programs. Outstanding admitted international students can receive the Leiden University Excellence Scholarship (LExS), covering up to 100% of tuition fees plus living allowances. Doctoral candidates (Promovendi) are paid university employees under the Dutch CAO-NU collective agreement.",
    opportunities: [
      {
        id: 284,
        subject: "physics",
        subjects: ["physics", "computer-science", "chemistry", "mathematics", "biology"],
        type: "Scholarship",
        title: "Leiden University Excellence Scholarships (LExS)",
        source: "https://www.universiteitleiden.nl/en/scholarships/sea/leiden-university-excellence-scholarship-lexs",
        funding: "Fully funded: Full tuition fee waiver (€19,600 to €21,500 per year) plus €10,000 per year contribution to living expenses for outstanding non-EEA Master's applicants",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Strict annual deadline for international LExS scholarship consideration)",
        fee: "€100 application fee (refunded upon matriculation)",
        tuition: "Full tuition completely waived for the entire two-year 120 ECTS duration.",
        requirements: {
          gpa: "Graduation with cumulative grade point average (CGPA) in top 10% of class or equivalent to first class honors.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all sections) or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence, curriculum vitae, and statement of intent.",
          references: "Two academic referee letters submitted directly through the online admission portal."
        },
        desc: "Prestigious university scholarship awarded to outstanding non-EU/EEA international students admitted to Master's degree programs at Leiden University, providing full tuition coverage and living allowance grants."
      },
      {
        id: 285,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Leiden Salaried PhD Positions (Promovendi under CAO-NU)",
        source: "https://www.universiteitleiden.nl/en/working-at/vacancies",
        funding: "Fully funded: Four-year salaried university employment under Collective Labour Agreement for Dutch Universities (CAO-NU) starting at €2,872/month in year 1 rising to €3,670/month in year 4 gross, plus 8% holiday allowance and 8.3% end-of-year bonus",
        status: "open-position",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Continuous rolling recruitment across Leiden science faculties)",
        fee: "Free application directly to open vacancy",
        tuition: "Zero tuition. PhD candidates are paid university staff members with comprehensive Dutch health and pension benefits.",
        requirements: {
          gpa: "Master of Science degree (120 ECTS) in Computer Science, Astronomy, or Physics with high marks.",
          ielts: "Fluent technical English communication for international collaboration and scientific publishing.",
          gre: "Not required.",
          papers: "Master's research thesis or peer-reviewed conference publications.",
          references: "Curriculum vitae, research portfolio, and two academic referee contacts."
        },
        desc: "Four-year salaried doctoral research appointments across Leiden University institutes, conducting frontier scientific investigations under standard Dutch collective employment contracts."
      },
      {
        id: 286,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Leiden Master of Science in Computer Science",
        source: "https://www.universiteitleiden.nl/en/education/study-programmes/master/computer-science",
        funding: "Self-funded; eligible for LExS scholarships, Holland Scholarships, and student tutoring positions",
        status: "program-information",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (February 1 for LExS scholarship applicants)",
        fee: "€100 application fee",
        tuition: "€21,100 per year for non-EU students; €2,530 per year for EU/EEA students.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science with solid grounding in algorithms, computational complexity, and data structures.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Curriculum vitae and course descriptions mapping completed modules to Leiden bachelor prerequisites.",
          references: "Official university transcripts and degree certificates."
        },
        desc: "Two-year Master of Science degree (120 ECTS) at the Leiden Institute of Advanced Computer Science (LIACS), offering specializations in Artificial Intelligence, Data Science, and Computer Science & Advanced Data Analytics."
      },
      {
        id: 287,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Master's",
        title: "Leiden Master of Science in Astronomy",
        source: "https://www.universiteitleiden.nl/en/education/study-programmes/master/astronomy",
        funding: "Self-funded; eligible for Leiden Observatory fellowships and LExS awards",
        status: "program-information",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 for Autumn intake",
        fee: "€100 application fee",
        tuition: "€21,100 per year for non-EU international students.",
        requirements: {
          gpa: "Bachelor's degree in Astronomy, Physics, or Mathematics with high marks in astrophysics and quantum mechanics.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Demonstrated coursework background in stellar structure, radiative processes, and observational techniques.",
          references: "Complete university academic transcripts and syllabus descriptions."
        },
        desc: "World-renowned two-year Master's degree (120 ECTS) based at the historic Leiden Observatory (founded in 1633), offering tracks in Astronomy & Astrophysics, Cosmology, Instrumentation, and Data Science."
      },
      {
        id: 288,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Research",
        title: "Lorentz Institute for Theoretical Physics Research Placements",
        source: "https://www.lorentz.leidenuniv.nl/",
        funding: "Funded research projects supported by the Dutch Research Council (NWO) and European Horizon programs",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for multidisciplinary laboratory positions",
        fee: "Free application directly to affiliated Lorentz Institute researchers",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate student in Theoretical Physics, Quantum Information, or Mathematics with distinction.",
          ielts: "Technical English fluency.",
          gre: "Not required.",
          papers: "Demonstrated skills in topological quantum matter, quantum error correction, or mesoscopic physics.",
          references: "CV, publication list, and academic reference."
        },
        desc: "Frontier theoretical physics institute in Leiden (founded in 1921), developing foundational theories of topological superconductors, Majorana fermions, quantum computation, and quantum transport."
      },
      {
        id: 289,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        title: "Leiden Bio Science Park Academic & Industrial Internships",
        source: "https://leidenbiosciencepark.nl/",
        funding: "Salaried internship: €800 to €1,200 per month for 3 to 6-month research internships directly embedded with biotechnology and pharma partners",
        status: "open-position",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 for upcoming semester graduation internships",
        fee: "Free enrollment for admitted students",
        tuition: "Included in enrolled degree curriculum; monthly compensation paid by company/lab.",
        requirements: {
          gpa: "Enrolled Master's student at Leiden with completion of first-year core modules.",
          ielts: "Working English communication.",
          gre: "Not required.",
          papers: "Resume / CV and technical project portfolio.",
          references: "Approval from Leiden master thesis supervisor."
        },
        desc: "Industrial and academic graduation research internships embedding graduate students within the Netherlands' largest life sciences innovation cluster, partnering with Janssen, Galapagos, and university research institutes."
      },
      {
        id: 290,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science", "physics"],
        type: "Fellowship",
        title: "Leiden Student Assistantships (Student-Assistenten)",
        source: "https://www.universiteitleiden.nl/en/working-at/job-categories/student-assistants",
        funding: "Salaried hourly campus employment: €16.20 to €21.50 per hour under Dutch university collective agreements",
        status: "open-position",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 for upcoming academic year tutoring positions",
        fee: "Free application through departmental student assistant coordinators",
        tuition: "Zero tuition; hourly salaried university employment.",
        requirements: {
          gpa: "Matriculated student at Leiden in good standing who has passed the relevant course with high grade (7.5+ / 10).",
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
        id: 141,
        subject: "physics",
        name: "Prof. Dr. Carlo Beenakker",
        title: "Professor of Theoretical Physics / Lorentz Institute for Theoretical Physics",
        university: "Universiteit Leiden",
        country: "Netherlands",
        topics: ["Mesoscopic Physics", "Majorana Fermions", "Topological Superconductors", "Quantum Transport", "Graphene Physics"],
        source: "https://www.lorentz.leidenuniv.nl/~beenakker/",
        email: null,
        summary: "Professor of Theoretical Physics at Leiden University, Spinoza Prize recipient, member of the Royal Netherlands Academy of Arts and Sciences, and internationally acclaimed pioneer in mesoscopic physics, random matrix theory, and Majorana zero modes.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 142,
        subject: "physics",
        name: "Prof. Dr. Ewine van Dishoeck",
        title: "Professor of Molecular Astrophysics / Leiden Observatory",
        university: "Universiteit Leiden",
        country: "Netherlands",
        topics: ["Astrochemistry", "Interstellar Medium", "Star and Planet Formation", "Submillimeter Astronomy", "ALMA Observations"],
        source: "https://home.strw.leidenuniv.nl/~ewine/",
        email: null,
        summary: "Professor of Molecular Astrophysics at Leiden Observatory, 2018 Kavli Prize in Astrophysics recipient, former President of the International Astronomical Union (IAU), and world pioneer in astrochemistry and the trail of water in star formation.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 143,
        subject: "computer-science",
        name: "Prof. Dr. Holger Hoos",
        title: "Professor of Machine Learning at LIACS & Alexander von Humboldt Professor",
        university: "Universiteit Leiden",
        country: "Netherlands",
        topics: ["Automated Machine Learning (AutoML)", "Algorithm Selection", "Empirical Algorithmics", "Artificial Intelligence", "Combinatorial Optimization"],
        source: "https://www.universiteitleiden.nl/en/staffmembers/holger-hoos",
        email: null,
        summary: "Professor of Machine Learning at Leiden Institute of Advanced Computer Science (LIACS), Alexander von Humboldt Professor, co-founder of the Confederation of Laboratories for Artificial Intelligence Research in Europe (CLAIRE), and pioneer in automated machine learning.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  },

  // 10. SWITZERLAND: University of Basel (Row 1360)
  {
    institution: "University of Basel",
    shortName: "Basel",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Basel, Basel-Stadt, Switzerland",
    website: "https://www.unibas.ch",
    sourceRow: 1360,
    slug: "university-of-basel",
    heroEyebrow: "Switzerland · Basel · Switzerland's Oldest University & Life Sciences Epicenter · Reviewed 14 October 2026",
    headline: "University of Basel (Universität Basel)",
    description: "University of Basel guide: Biozentrum fellowships (CHF 24,000/yr), salaried doctoral contracts (CHF 47k–52k/yr), MSc in Molecular Biology & Quantum Science, and faculty.",
    overview: "Founded in 1460, the University of Basel (Universität Basel) is the oldest university in Switzerland. Associated with 10 Nobel laureates and 2 Fields Medalists (including Erasmus of Rotterdam, Daniel Bernoulli, and 2016 Chemistry Nobelist Jacques Dubochet), Basel is the academic anchor of Europe's premier life sciences pharmaceutical hub (partnered with Novartis and Roche). Through the world-famous Biozentrum and the Swiss Nanoscience Institute (SNI), Basel leads globally in molecular structural biology, spin-qubit quantum science, and distributed information systems. Explore verified Master's curricula, doctoral assistant salaries, and world-renowned faculty profiles.",
    admissions: {
      masters: "Accredited Bachelor of Science degree (minimum 180 ECTS credits) in relevant subject area from an internationally recognized university with above-average grades.",
      phd: "Recognized Master of Science degree (minimum 120 ECTS) with high academic distinction, proven research thesis capability, and agreement from a Basel professor to serve as thesis advisor.",
      language: "Demonstrated English proficiency equivalent to CEFR C1: Academic IELTS 7.0 overall or TOEFL iBT 100 for English-taught graduate curricula.",
      proposal: "Comprehensive 2-page statement of purpose detailing academic milestones, research interests, and preferred Basel laboratories.",
      appFee: "CHF 100 application fee for holders of foreign degrees (CHF 50 for holders of Swiss degrees).",
      documents: "Complete official university transcripts, certified copy of degree diploma, curriculum vitae in English, motivation essay, and two academic referee letters."
    },
    tuitionText: "Tuition at the University of Basel is heavily subsidized by the cantons of Basel-Stadt and Basel-Landschaft. Tuition is standard across all faculties at CHF 720 per semester (CHF 1,440 per year) for Swiss and international students alike. Selected international graduate scholars receive Biozentrum fellowships (CHF 24,000 per year) or Swiss Nanoscience Institute awards. Doctoral candidates are salaried university employees receiving CHF 47,000 to CHF 52,000 per year.",
    opportunities: [
      {
        id: 291,
        subject: "biology",
        subjects: ["biology", "chemistry", "physics", "computer-science"],
        type: "Scholarship",
        title: "University of Basel Excellence Scholarships & Biozentrum Fellowships",
        source: "https://www.unibas.ch/en/Studies/Application-Admission/Tuition-Fees/Scholarships.html",
        funding: "Fully funded: Annual stipend of CHF 18,000 to CHF 24,000 per year plus full coverage of tuition and laboratory research expenses for up to three years",
        status: "open-scholarship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Strict annual deadline for Autumn Master's entry)",
        fee: "CHF 100 foreign credential evaluation fee",
        tuition: "Full tuition completely waived for fellowship recipients.",
        requirements: {
          gpa: "Graduation in the top 10% of undergraduate degree class with distinction.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Recommended for quantitative programs outside Switzerland.",
          papers: "Demonstrated academic motivation, 2-page research essay, and curriculum vitae.",
          references: "Two confidential academic letters of recommendation from university professors."
        },
        desc: "Premier merit fellowship awarded to exceptional incoming international and Swiss graduate candidates, providing up to CHF 24,000 per year to support full-time scientific study at the University of Basel and Biozentrum."
      },
      {
        id: 292,
        subject: "physics",
        subjects: ["physics", "computer-science", "mathematics"],
        type: "PhD",
        title: "University of Basel Doctoral Assistantships (Doktorierende)",
        source: "https://www.unibas.ch/en/Research/Doctorate.html",
        funding: "Fully funded: Salaried employment contract starting from CHF 47,000/year rising to CHF 52,000/year with Swiss pension, social security, and accident insurance",
        status: "open-position",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 for Autumn intake (rolling department vacancies)",
        fee: "Free application directly to open doctoral positions",
        tuition: "Zero tuition. Doctoral assistants are paid academic employees.",
        requirements: {
          gpa: "Master of Science degree (minimum 120 ECTS) with high academic distinction in Physics, Biology, or CS.",
          ielts: "Fluent technical English for international research collaboration.",
          gre: "Not required.",
          papers: "Master's thesis or peer-reviewed publication in high-impact international journals.",
          references: "Supervisory commitment letter from a Basel full professor and two academic references."
        },
        desc: "Four-year salaried doctoral research appointment inside Basel departments and the Swiss Nanoscience Institute (SNI), conducting frontier investigations with world-class cleanrooms and bio-laboratories."
      },
      {
        id: 293,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Master's",
        title: "Basel Master of Science in Molecular Biology (Biozentrum)",
        source: "https://www.biozentrum.unibas.ch/studies/master-studies",
        funding: "Self-funded; eligible for Biozentrum fellowships and laboratory assistantships",
        status: "program-information",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for Autumn intake",
        fee: "CHF 100 application fee",
        tuition: "CHF 720 per semester for Swiss and international students.",
        requirements: {
          gpa: "Bachelor of Science in Molecular Biology, Biochemistry, or Genetics with top academic standing.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Curriculum vitae, detailed descriptions of undergraduate coursework, and motivation letter.",
          references: "Two academic referee letters and complete university transcripts."
        },
        desc: "World-class two-year Master of Science program (90–120 ECTS) inside the state-of-the-art Biozentrum, offering specialized training in Structural Biology, Cell Motility, Infection Biology, and Computational Biology."
      },
      {
        id: 294,
        subject: "physics",
        subjects: ["physics", "engineering", "computer-science"],
        type: "Master's",
        title: "Basel Master of Science in Quantum Science and Technology",
        source: "https://quantum.unibas.ch/education/master-in-quantum-computing/",
        funding: "Self-funded; eligible for Swiss Nanoscience Institute grants and campus tutoring",
        status: "program-information",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 for Autumn admission",
        fee: "CHF 100 application fee",
        tuition: "CHF 720 per semester.",
        requirements: {
          gpa: "Bachelor's degree in Physics, Mathematics, or Electrical Engineering with solid quantum mechanics and linear algebra.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Recommended for non-Swiss degrees.",
          papers: "Curriculum vitae and descriptions of completed theoretical and practical physics modules.",
          references: "Two academic letters of recommendation and official transcript."
        },
        desc: "Cutting-edge two-year Master's degree inside the Department of Physics, covering Spin-Qubit Quantum Computing, Quantum Sensing, Nanoscale Transport, and Spintronics."
      },
      {
        id: 295,
        subject: "physics",
        subjects: ["physics", "engineering", "chemistry"],
        type: "Research",
        title: "Swiss Nanoscience Institute (SNI) Collaborative Placements",
        source: "https://nanoscience.unibas.ch/en/",
        funding: "Funded research positions supported by the Swiss Canton of Basel-Stadt and the Swiss National Science Foundation (SNSF)",
        status: "open-position",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 for collaborative lab placements",
        fee: "Free application directly to affiliated principal investigators",
        tuition: "Zero tuition; funded research placement.",
        requirements: {
          gpa: "Graduate student in Nanotechnology, Physics, or Materials Science with top-tier record.",
          ielts: "Technical English fluency.",
          gre: "Not required.",
          papers: "Demonstrated experience in scanning probe microscopy, quantum device fabrication, or nanofluidics.",
          references: "CV, publication list, and academic recommendation."
        },
        desc: "Frontier collaborative research placements inside the Swiss Nanoscience Institute (SNI) at Basel, conducting fundamental and applied investigations in quantum physics, nanomedicine, and molecular electronics."
      },
      {
        id: 296,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        title: "Biozentrum Summer Research Fellowships in Life Sciences",
        source: "https://www.biozentrum.unibas.ch/studies/summer-fellowships",
        funding: "Fully funded: Living stipend of CHF 1,600 per month for 8 weeks plus organized housing and round-trip travel reimbursement",
        status: "open-position",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 for Summer 2027 fellowship cohort",
        fee: "Free application",
        tuition: "Zero tuition; fully paid international fellowship.",
        requirements: {
          gpa: "Enrolled undergraduate (completed at least 2 years of Bachelor) or Master's student in life sciences.",
          ielts: "Fluent working English communication.",
          gre: "Not required.",
          papers: "Statement of purpose describing research interests and target Biozentrum research laboratories.",
          references: "Official university transcripts, curriculum vitae, and two recommendation letters."
        },
        desc: "Highly selective 8-week summer research program inside the Biozentrum, offering international students direct research collaboration with faculty mentors in molecular biology, neurobiology, and structural biochemistry."
      },
      {
        id: 297,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Fellowship",
        title: "Basel Teaching Assistantships (Hilfsassistierende)",
        source: "https://www.unibas.ch/en/Staff/Employment-Conditions/Student-Jobs.html",
        funding: "Salaried campus employment: CHF 25.00 to CHF 29.00 per hour for coaching exercise sessions, running coding labs, and grading assignments",
        status: "open-position",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027 for Autumn semester teaching allocations",
        fee: "Free application via Basel departmental portals",
        tuition: "Zero tuition; paid hourly university employment.",
        requirements: {
          gpa: "Enrolled Basel student in good standing who has passed the course module with high grades.",
          ielts: "Proficiency in German or English depending on the course language.",
          gre: "Not required.",
          papers: "High academic marks in foundational mathematics, algorithms, or physics.",
          references: "Approval from the course professor or head teaching assistant."
        },
        desc: "Departmental academic employment (Hilfsassistent) for enrolled undergraduate and graduate students at Basel, providing hourly compensation for conducting weekly tutorial exercise sessions and supervising lab sections."
      }
    ],
    researchers: [
      {
        id: 144,
        subject: "physics",
        name: "Prof. Dr. Daniel Loss",
        title: "Professor of Theoretical Physics & Director, Center for Quantum Sciences",
        university: "University of Basel",
        country: "Switzerland",
        topics: ["Quantum Computing", "Spin Qubits", "Loss-DiVincenzo Proposal", "Spintronics", "Majorana Fermions in Nanowires"],
        source: "https://quantumtheory.unibas.ch/people/loss.html",
        email: null,
        summary: "Professor of Theoretical Physics at the University of Basel, 2017 Wolf Prize in Physics recipient, Marcel Benoist Prize winner, and co-creator of the Loss-DiVincenzo proposal for quantum computation using electron spins in quantum dots.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 145,
        subject: "biology",
        name: "Prof. Dr. Michael N. Hall",
        title: "Professor of Biochemistry / Biozentrum, University of Basel",
        university: "University of Basel",
        country: "Switzerland",
        topics: ["Target of Rapamycin (TOR)", "Cell Growth Control", "Signaling Networks", "Cancer Metabolism", "Nutrient Sensing"],
        source: "https://www.biozentrum.unibas.ch/research/research-groups/research-groups-a-z/overview/unit/hall",
        email: null,
        summary: "Professor of Biochemistry at the Biozentrum of the University of Basel, 2014 Breakthrough Prize in Life Sciences recipient, Lasker Award winner, member of the National Academy of Sciences, and discoverer of the TOR (Target of Rapamycin) protein kinases.",
        recruiting: "Not verified",
        reviewed: today
      },
      {
        id: 146,
        subject: "computer-science",
        name: "Prof. Dr. Heiko Schuldt",
        title: "Full Professor of Computer Science / Head of DBIS Group",
        university: "University of Basel",
        country: "Switzerland",
        topics: ["Distributed Information Systems", "Stream Processing", "Multimedia Information Retrieval", "Digital Health Informatics", "Transaction Management"],
        source: "https://dbis.dmi.unibas.ch/people/heiko-schuldt/",
        email: null,
        summary: "Full Professor of Computer Science and Head of the Databases and Information Systems (DBIS) group at the University of Basel, pioneer in distributed workflow execution, multimedia retrieval systems, and secure medical data analytics.",
        recruiting: "Not verified",
        reviewed: today
      }
    ]
  }
];
