/**
 * Batch 32 - Part 3: Cycle 41 (Universities 21 to 30 of Batch 32, Total Unis 402 to 411)
 * Opp IDs: 2818 to 2887 (70 opportunities)
 * Faculty IDs: 1227 to 1256 (30 faculty members)
 */

export const cycle41Universities = [
  // 21. Canada: University of Lethbridge (uLethbridge)
  {
    institution: "University of Lethbridge",
    shortName: "uLethbridge",
    slug: "university-of-lethbridge",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Lethbridge, Alberta, Canada",
    website: "https://www.ulethbridge.ca",
    sourceRow: 109,
    headline: "University of Lethbridge: Neuroscience, RNA Biology & Quantum Research Portal",
    overview: "The University of Lethbridge (uLethbridge) in Alberta is a top-ranking Canadian comprehensive research university, internationally celebrated for the Canadian Centre for Behavioural Neuroscience (CCBN), the Alberta RNA Research and Training Institute (ARRTI), and state-of-the-art Science Commons.",
    description: "Verified graduate admissions, doctoral fellowships, and research degrees guide for University of Lethbridge in Alberta, Canada.",
    heroEyebrow: "Alberta Research University · World Neuroscience Hub",
    tuitionText: "Domestic graduate tuition averages CAD $6,800 to $8,500 annually. International student tuition is approximately CAD $18,900 to $21,800 annually. All admitted thesis-based graduate students receive guaranteed minimum funding packages (CAD $17,000 for Master's; CAD $21,000 for PhD).",
    admissions: {
      masters: "Four-year Bachelor's degree (or equivalent) in relevant discipline with minimum 3.0 GPA (on 4.0 scale) in the last 20 university-level semester courses.",
      phd: "Master's degree with minimum 3.5 GPA on a 4.0 scale and documented research productivity in scientific or humanities disciplines.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 86 (minimum 20 in each section).",
      proposal: "Comprehensive 2-3 page research statement detailing background, proposed thesis questions, methodology, and identified faculty supervisor.",
      appFee: "CAD $140 non-refundable graduate application fee.",
      documents: "Official academic transcripts, curriculum vitae, letter of intent, and three academic letters of recommendation."
    },
    opportunities: [
      {
        id: 2818,
        title: "uLethbridge Board of Governors Graduate Doctoral Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "chemistry", "physics"],
        funding: "CAD $15,000 to $20,000 per year plus teaching assistantship guaranteed package",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "CAD $140 application fee",
        tuition: "Full domestic/partial international tuition offset with living stipend",
        source: "https://www.ulethbridge.ca/graduate-studies/awards",
        desc: "High-value merit scholarship awarded to top-ranking incoming doctoral students conducting research in Biomolecular Sciences, Neuroscience, or Earth and Space Science.",
        requirements: {
          gpa: "Minimum 3.7 GPA on a 4.0 scale in Master's degree coursework",
          ielts: "IELTS 6.5 or TOEFL 86",
          gre: "Not required",
          papers: "Demonstrated publication record or master's thesis honors",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2819,
        title: "Master of Science in Neuroscience & Behavioral Brain Research",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Guaranteed minimum funding package: CAD $19,500/year (RA/TA stipends)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "CAD $140 application fee",
        tuition: "CAD $7,200 domestic / CAD $19,800 international per year",
        source: "https://www.ulethbridge.ca/graduate-studies/neuroscience-msc",
        desc: "Research-intensive Master of Science at the world-renowned Canadian Centre for Behavioural Neuroscience (CCBN) exploring brain plasticity, neurodegenerative recovery, and synaptic memory.",
        requirements: {
          gpa: "Bachelor's degree in Neuroscience, Psychology, Biology, or Biochemistry with 3.3+ GPA",
          ielts: "IELTS 6.5 (no band below 6.0) or TOEFL 86",
          gre: "Not required",
          papers: "Detailed 2-page research interest statement identifying CCBN faculty supervisor",
          references: "Three letters of academic reference"
        }
      },
      {
        id: 2820,
        title: "Ph.D. in Biomolecular Science & RNA Biochemistry Fellowship",
        type: "PhD",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "CAD $25,000 per year for four years plus NSERC top-up eligibility",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "CAD $140 application fee",
        tuition: "CAD $7,500 domestic / CAD $20,400 international per year",
        source: "https://www.ulethbridge.ca/graduate-studies/biomolecular-science-phd",
        desc: "Doctoral research program based at the Alberta RNA Research and Training Institute (ARRTI), utilizing cryo-EM, NMR, and X-ray crystallography to dissect non-coding RNA mechanisms.",
        requirements: {
          gpa: "Master's degree in Biochemistry, Chemistry, or Molecular Biology with minimum 3.5 GPA",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "Not required",
          papers: "Master's research thesis and 3-page research proposal on RNA biophysics",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2821,
        title: "Water Resources & Agricultural Irrigation Climate Adaptation Study",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "CAD $24,000 annual research assistantship funded by Alberta Innovates",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee for appointed scholars",
        tuition: "Covered by provincial research grant",
        source: "https://www.ulethbridge.ca/research/centres-and-institutes/water-institute",
        desc: "Field-based hydrological research investigation monitoring Oldman River basin snowpack melt, agricultural irrigation efficiency, and groundwater drought resilience.",
        requirements: {
          gpa: "Degree in Hydrology, Civil/Agricultural Engineering, or Environmental Sciences",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Experience in hydrological catchment modeling (SWAT/MODFLOW) or field sensing",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2822,
        title: "Lethbridge Agricultural Research Centre Crop Biotechnology Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "CAD $23/hour for 16-week research term with Agriculture and Agri-Food Canada",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero placement fee",
        tuition: "Course-integrated research co-op placement",
        source: "https://www.ulethbridge.ca/coop",
        desc: "Applied agricultural science placement at Canada's largest federal crop research center, performing genetic screening for drought resistance and biocontrol of canola pathogens.",
        requirements: {
          gpa: "Current uLethbridge graduate student in Biology, Plant Sciences, or Biochemistry",
          ielts: "Fluent English communication",
          gre: "Not required",
          papers: "Federal reliability security clearance and laboratory resume",
          references: "Academic faculty endorsement"
        }
      },
      {
        id: 2823,
        title: "Canadian Centre for Behavioural Neuroscience Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "CAD $62,000 annual salary plus health benefits and conference travel fund",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral employee",
        source: "https://www.ulethbridge.ca/ccbn",
        desc: "Two-year postdoctoral fellowship conducting two-photon in vivo imaging, optogenetics, and behavioral kinematics in rodent models of stroke recovery and cognitive aging.",
        requirements: {
          gpa: "PhD in Neuroscience, Neurobiology, or Biomedical Engineering completed within 4 years",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "At least three first-author publications in peer-reviewed neuroscience journals",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2824,
        title: "Tenure-Track Assistant Professor in Quantum Information & Condensed Matter",
        type: "Job",
        subject: "physics",
        subjects: ["physics", "computer-science"],
        funding: "CAD $96,000 - $118,000 per annum with comprehensive pension and health plan",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "Zero fee",
        tuition: "Full-time probationary tenure-track academic appointment",
        source: "https://uleth.peopleadmin.ca",
        desc: "Full-time faculty appointment in the Department of Physics and Astronomy, conducting theoretical or experimental research in quantum algorithms, spin systems, or topological matter.",
        requirements: {
          gpa: "PhD in Physics, Applied Physics, or Quantum Computing",
          ielts: "Demonstrated excellence in university teaching in English",
          gre: "Not required",
          papers: "Track record of international peer-reviewed publications and potential to attract NSERC funding",
          references: "Three academic referee letters and teaching dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1227,
        name: "Prof. Dr. Bryan Kolb",
        title: "Officer of the Order of Canada & Professor of Neuroscience (CCBN)",
        subject: "biology",
        topics: ["Brain Plasticity", "Cortical Development", "Behavioral Neuroscience", "Stroke Rehabilitation"],
        source: "https://www.ulethbridge.ca/artsci/neuroscience/dr-bryan-kolb",
        summary: "Prof. Kolb is an internationally celebrated neuroscientist whose groundbreaking research revealed how experience, drugs, and injury permanently reshape synaptic connections in the cerebral cortex."
      },
      {
        id: 1228,
        name: "Prof. Dr. Ute Kothe",
        title: "Professor of Biochemistry & Director of ARRTI",
        subject: "chemistry",
        topics: ["RNA Modification", "Ribosome Biogenesis", "Pseudouridine Synthases", "Biochemical Kinetics"],
        source: "https://www.ulethbridge.ca/artsci/biochemistry/dr-ute-kothe",
        summary: "Prof. Kothe directs research on RNA-modifying enzymes, molecular mechanisms of ribosome assembly, and developing biochemical assays for therapeutic RNA targeting."
      },
      {
        id: 1229,
        name: "Prof. Dr. Saurya Das",
        title: "Professor of Theoretical Physics & Quantum Gravity",
        subject: "physics",
        topics: ["Quantum Gravity", "Black Hole Thermodynamics", "Dark Energy", "Cosmology"],
        source: "https://www.ulethbridge.ca/artsci/physics-astronomy/dr-saurya-das",
        summary: "Prof. Das investigates quantum corrections to general relativity, black hole entropy, and quantum condensate models of dark matter and cosmological expansion."
      }
    ]
  },

  // 22. Australia: Australian Federation College
  {
    institution: "Australian Federation College",
    shortName: "AFC Australia",
    slug: "australian-federation-college",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Sydney & Parramatta, New South Wales, Australia",
    website: "https://www.afcollege.edu.au",
    sourceRow: 152,
    headline: "Australian Federation College: Business, Information Systems & Vocational Pathways",
    overview: "Australian Federation College (AFC) is a dynamic Australian higher education and vocational institute based in Greater Sydney, accredited by ASQA and offering nationally recognized qualifications in enterprise management, business analytics, digital marketing, and software design.",
    description: "Verified academic diplomas, industry traineeships, and admissions guide for Australian Federation College in Sydney, Australia.",
    heroEyebrow: "Sydney Higher Education Provider · Business & Tech Hub",
    tuitionText: "Tuition for accredited diplomas and advanced diplomas ranges from AUD $12,500 to $16,000 annually. International students can access flexible installment payment schedules and merit-based bursaries of up to AUD $3,000.",
    admissions: {
      masters: "Completion of recognized Bachelor's degree or advanced diploma with relevant professional work experience in commercial or technological fields.",
      phd: "Articulation pathways into postgraduate research with affiliated Australian university partners.",
      language: "IELTS Academic overall band 6.0 (with no individual band score below 5.5) or PTE Academic 50.",
      proposal: "Statement of purpose outlining career aspirations and alignment with Australian industry standards.",
      appFee: "AUD $200 international enrollment application fee.",
      documents: "Certified high school / college transcripts, passport copy, English proficiency results, and curriculum vitae."
    },
    opportunities: [
      {
        id: 2825,
        title: "AFC Future Business & Technology Leadership Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "AUD $2,500 to $4,000 tuition fee offset",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "AUD $200 registration fee",
        tuition: "Applied as fee deduction across course installments",
        source: "https://www.afcollege.edu.au/scholarships",
        desc: "Merit-based financial bursary granted to prospective international students showing superior academic records and commitment to entrepreneurship or IT management.",
        requirements: {
          gpa: "Minimum 68% academic average in previous high school or tertiary qualifications",
          ielts: "IELTS 6.0 overall (minimum 5.5 each skill)",
          gre: "Not required",
          papers: "500-word statement explaining prospective contribution to Australian enterprise innovation",
          references: "One academic or employer recommendation"
        }
      },
      {
        id: 2826,
        title: "Advanced Diploma of Business & Strategic Project Management",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Flexible quarterly installment payment arrangements available",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "AUD $200 application fee",
        tuition: "AUD $14,200 per academic year",
        source: "https://www.afcollege.edu.au/courses/business",
        desc: "Two-year nationally recognized Australian qualification covering corporate strategic planning, organizational risk management, financial forecasting, and agile project delivery.",
        requirements: {
          gpa: "Completion of Year 12 or equivalent secondary education or Diploma in Business",
          ielts: "IELTS 6.0 (no band below 5.5) or PTE 50",
          gre: "Not required",
          papers: "Resume and certified copies of academic certificates",
          references: "One professional reference"
        }
      },
      {
        id: 2827,
        title: "Applied Research Project in Digital Marketing Analytics & Consumer Behavior",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "AUD $26,000 annual research scholarship plus industry data access",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Zero fee",
        tuition: "Tuition waiver sponsored by Sydney retail analytics consortium",
        source: "https://www.afcollege.edu.au/research",
        desc: "Postgraduate research fellowship exploring algorithmic customer segmentation, predictive lifetime value models, and privacy-preserving data analytics in Australian e-commerce.",
        requirements: {
          gpa: "Honours degree or Master's in Marketing, Business Analytics, or Data Science",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "2,000-word research proposal on predictive marketing algorithms",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2828,
        title: "Sydney Small Business Digital Transformation & Cloud Migration Initiative",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "AUD $2,000 monthly research stipend supported by New South Wales enterprise grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Sponsored research placement",
        source: "https://www.afcollege.edu.au/industry-projects",
        desc: "Applied enterprise research evaluating cloud SaaS adoption barriers, cyber risk posture, and automated payment gateways among Western Sydney family businesses.",
        requirements: {
          gpa: "Background in Information Systems, E-Commerce, or Business Informatics",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Practical familiarity with ERP systems, CRM software, or Google Cloud platform",
          references: "Two professional references"
        }
      },
      {
        id: 2829,
        title: "Parramatta Commercial District Business Traineeship & Marketing Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "AUD $950 per week during 12-week commercial internship",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Included within accredited AFC qualification enrollment",
        source: "https://www.afcollege.edu.au/traineeships",
        desc: "Twelve-week practical business work placement embedded within professional services firms, accounting agencies, and digital marketing agencies across Western Sydney.",
        requirements: {
          gpa: "Enrolled in AFC business or management diploma with minimum 65% grade",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Updated CV and business portfolio",
          references: "Academic faculty endorsement"
        }
      },
      {
        id: 2830,
        title: "AFC Enterprise Leadership & Innovation Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "AUD $80,000 - $90,000 per annum salary plus 11.5% superannuation",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Salaried academic post",
        source: "https://www.afcollege.edu.au/careers",
        desc: "Two-year postdoctoral fellowship investigating corporate sustainability governance, ethical procurement standards, and social entrepreneurship across Australasia.",
        requirements: {
          gpa: "PhD in Management, Sustainable Business, or Organizational Studies within past 4 years",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Minimum 3 peer-reviewed journal articles in management or organizational studies",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2831,
        title: "Senior Lecturer in Strategic Management & Enterprise Risk",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "AUD $92,000 - $110,000 annual salary plus statutory superannuation",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Continuing full-time academic faculty appointment",
        source: "https://www.afcollege.edu.au/jobs",
        desc: "Full-time faculty appointment responsible for designing and delivering vocational and higher education courses in corporate governance, change management, and business ethics.",
        requirements: {
          gpa: "Master's or PhD in Business Administration, Management, or related field with Certificate IV in Training and Assessment (TAE40116/TAE40122)",
          ielts: "Native or fluent English communication skills",
          gre: "Not required",
          papers: "Demonstrated teaching experience in the Australian VET/HE sector",
          references: "Two professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1230,
        name: "Dr. Anthony Morris",
        title: "Director of Academic Studies & Head of Business Faculty",
        subject: "social-sciences",
        topics: ["Strategic Management", "Organizational Leadership", "Vocational Curriculum Accreditation", "Business Ethics"],
        source: "https://www.afcollege.edu.au/staff/anthony-morris",
        summary: "Dr. Morris oversees academic compliance and curriculum development at AFC, focusing on integrating modern digital analytics and ethical leadership into tertiary education."
      },
      {
        id: 1231,
        name: "Dr. Susan Zhang",
        title: "Senior Lecturer in Business Analytics & Financial Decision Systems",
        subject: "social-sciences",
        topics: ["Financial Modeling", "Business Intelligence", "Predictive Analytics", "Corporate Risk"],
        source: "https://www.afcollege.edu.au/staff/susan-zhang",
        summary: "Dr. Zhang teaches quantitative decision analysis and investigates machine learning algorithms for cash-flow forecasting and credit risk scoring in small-to-medium enterprises."
      },
      {
        id: 1232,
        name: "M.Sc. David Campbell",
        title: "Senior Lecturer in Information Systems & Enterprise Architecture",
        subject: "computer-science",
        topics: ["Enterprise Systems", "Cloud Migration", "Database Security", "Digital Transformation"],
        source: "https://www.afcollege.edu.au/staff/david-campbell",
        summary: "M.Sc. Campbell brings over 15 years of industry enterprise architecture experience, mentoring students on cloud infrastructure migrations and cybersecurity best practices."
      }
    ]
  },

  // 23. Germany: TU Dortmund University
  {
    institution: "TU Dortmund University",
    shortName: "TU Dortmund",
    slug: "tu-dortmund-university",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Dortmund, North Rhine-Westphalia, Germany",
    website: "https://www.tu-dortmund.de",
    sourceRow: 378,
    headline: "TU Dortmund University: Chemical Engineering, Computer Science & Statistics Portal",
    overview: "TU Dortmund University (Technische Universität Dortmund), founded in 1968 in Germany's Ruhr industrial heartland, is a leading technical research university celebrated for having Europe's premier Faculty of Statistics, world-class Biochemical and Chemical Engineering (BCI), and foundational computer science research.",
    description: "Verified graduate degree programs, doctoral positions, and admissions guide for TU Dortmund University in Germany.",
    heroEyebrow: "Ruhr Innovation Hub · European Statistics Leader · Premier BCI Engineering",
    tuitionText: "Zero tuition fees for domestic and international students. All enrolled students pay only the social semester contribution (Semesterbeitrag) of approximately €340 per semester, which covers student union services and provides a regional public transit pass (NRW-Ticket).",
    admissions: {
      masters: "Accredited Bachelor of Science in Engineering, Computer Science, Statistics, or Natural Sciences with minimum 180 ECTS credits and strong mathematical grounding.",
      phd: "Master's degree (M.Sc., Diplom) with above-average grade (mindestens 'gut') in engineering, computer science, mathematics, or physics.",
      language: "English programs: TOEFL iBT 90 or IELTS 6.5. German programs: DSH-2 or TestDaF 4x4.",
      proposal: "Doctoral candidates submit a research plan aligned with a university chair; Masters applicants submit detailed transcript module guide.",
      appFee: "€75 evaluation fee via uni-assist for international applicants with non-German degrees.",
      documents: "Bachelor's diploma, academic transcript of records, module descriptions, curriculum vitae, and language proficiency certificate."
    },
    opportunities: [
      {
        id: 2832,
        title: "TU Dortmund Research School Excellence Doctoral Fellowship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics", "engineering"],
        funding: "Full TV-L E13 salary (€52,000 - €57,000 gross per year with pension and health coverage)",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition (tuition-free German university)",
        source: "https://www.tu-dortmund.de/en/research/doctoral-studies/graduate-center",
        desc: "Prestigious doctoral fellowship supporting talented international researchers in machine learning, biochemical engineering, or mathematical statistics at the TU Dortmund Graduate Center.",
        requirements: {
          gpa: "German GPA equivalent of 1.5 or better in Master of Science coursework",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "General GRE recommended (Quantitative 160+)",
          papers: "Master's thesis manuscript and one published conference or journal paper",
          references: "Two academic referee letters from university professors"
        }
      },
      {
        id: 2833,
        title: "Master of Science in Data Science & Statistical Machine Learning",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "State-funded tuition-free degree; research assistantships (HiWi) available at €14.50/hour",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€75 uni-assist fee",
        tuition: "Zero tuition (€0); Semester administrative fee ~€340",
        source: "https://www.statistik.tu-dortmund.de/en/studies/master/data-science",
        desc: "Unique interdisciplinary English-taught Master of Science offered jointly by the Faculties of Statistics, Computer Science, and Mathematics, exploring high-dimensional statistics, deep learning, and big data systems.",
        requirements: {
          gpa: "B.Sc. in Statistics, Computer Science, Mathematics, or Data Science with top 20% ranking",
          ielts: "IELTS 6.5 (minimum 6.0 each skill) or TOEFL iBT 90",
          gre: "Quantitative GRE 160+ recommended",
          papers: "Detailed module handbook comparing previous coursework to TU Dortmund prerequisites",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2834,
        title: "Salaried Doctoral Researcher (TV-L E13) in Bioprocess Engineering & Continuous Crystallization",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "chemistry", "biology"],
        funding: "Full TV-L E13 gross salary (€50,000 - €55,000 annually with comprehensive social benefits)",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Zero tuition for doctoral candidates",
        source: "https://bci.tu-dortmund.de/en/research",
        desc: "Three-year funded doctoral position at the Department of Biochemical and Chemical Engineering (BCI) developing continuous microfluidic crystallization and downstream purification for biological therapeutics.",
        requirements: {
          gpa: "Master of Science in Chemical Engineering, Biotechnology, or Process Engineering with high honors",
          ielts: "Fluent technical English or German",
          gre: "Not required",
          papers: "Summary of Master's thesis and documentation of chemical/bioprocess pilot plant work",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 2835,
        title: "Collaborative Research Centre (SFB 876) Resource-Constrained Data Analysis Project",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "€2,250 monthly research grant plus high-performance compute cluster access",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Funded by German Research Foundation (DFG)",
        source: "https://sfb876.tu-dortmund.de",
        desc: "Flagship DFG collaborative research center developing real-time machine learning algorithms optimized for low-power edge devices, embedded FPGA sensors, and ultra-fast cyber-physical networks.",
        requirements: {
          gpa: "Degree in Computer Science, Electrical Engineering, or Mathematics with 1.8 or better",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Strong coding ability in C++, Python, PyTorch, and experience with hardware accelerators",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2836,
        title: "Bayer / Evonik Ruhr Chemical Park Curricular Industrial Engineering Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        funding: "€1,900 monthly industrial salary for 6-month plant engineering residency",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited Master of Science curriculum",
        source: "https://bci.tu-dortmund.de/en/studies/internship",
        desc: "Six-month full-time engineering internship situated at major chemical manufacturing parks in the Ruhr region (Evonik Marl, Bayer Bergkamen), optimizing reaction kinetics and distillation columns.",
        requirements: {
          gpa: "Enrolled in TU Dortmund Master in Chemical Engineering or Process Engineering",
          ielts: "Fluent English; German B1/B2 required for plant safety protocols",
          gre: "Not required",
          papers: "Updated CV and chemical safety certification",
          references: "Faculty department internship coordinator approval"
        }
      },
      {
        id: 2837,
        title: "Lamarr Institute for Machine Learning and AI Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "€65,000 - €72,000 per annum salary plus conference travel and compute allocations",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried university researcher",
        source: "https://lamarr-institute.org/careers",
        desc: "Two-year postdoctoral fellowship at the prestigious Lamarr Institute in Dortmund exploring foundational trustworthy AI, neuro-symbolic reasoning, and algorithmic fairness.",
        requirements: {
          gpa: "PhD in Computer Science, Machine Learning, or Statistics completed within 3 years",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "At least three papers in top AI venues (NeurIPS, ICML, ICLR, KDD)",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2838,
        title: "W3 Professorship in Industrial Robotics & Cyber-Physical Production Systems",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "W3 German civil servant salary scale (€92,000 - €115,000 gross per annum)",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero fee",
        tuition: "Tenured full university professorship (Beamtenverhältnis)",
        source: "https://service.tu-dortmund.de/en/stellenangebote",
        desc: "Tenured full professorship in the Department of Mechanical Engineering, directing research in human-robot collaboration, autonomous production cells, and digital manufacturing.",
        requirements: {
          gpa: "Habilitation or equivalent international research track record in robotics or manufacturing systems",
          ielts: "Fluency in English and ability to lecture in German within 2 years",
          gre: "Not required",
          papers: "Extensive publication list and proven success in acquiring national and European research funding",
          references: "Three international letters of evaluation"
        }
      }
    ],
    researchers: [
      {
        id: 1233,
        name: "Prof. Dr. Katharina Morik",
        title: "Professor of Artificial Intelligence & Founding Co-Director of Lamarr Institute",
        subject: "computer-science",
        topics: ["Machine Learning", "Resource-Constrained Data Analysis", "Astroparticle Physics AI", "Data Mining"],
        source: "https://www-ai.cs.tu-dortmund.de/PERSONAL/morik.html",
        summary: "Prof. Morik is an internationally renowned machine learning pioneer who developed the SVM-light support vector machine algorithm and leads the federal Lamarr Institute for Machine Learning and AI."
      },
      {
        id: 1234,
        name: "Prof. Dr.-Ing. Gerhard Schembecker",
        title: "Head of Laboratory of Plant and Process Design & Dean of BCI",
        subject: "engineering",
        topics: ["Process Intensification", "Downstream Processing", "Continuous Crystallization", "Process Synthesis"],
        source: "https://apt.bci.tu-dortmund.de/en/team/prof-dr-ing-gerhard-schembecker",
        summary: "Prof. Schembecker directs advanced research in modular process design, continuous biochemical purification, and thermodynamic property prediction for chemical plants."
      },
      {
        id: 1235,
        name: "Prof. Dr. Katja Ickstadt",
        title: "Professor of Mathematical Statistics with Applications in Biometry",
        subject: "mathematics",
        topics: ["Biostatistics", "High-Dimensional Data", "Bayesian Statistics", "Bioinformatics"],
        source: "https://www.statistik.tu-dortmund.de/en/faculty/professorships/biometry/prof-dr-katja-ickstadt",
        summary: "Prof. Ickstadt leads statistical biometry investigations modeling complex genomic networks, spatial toxicological risk, and Bayesian approaches to medical diagnostics."
      }
    ]
  },

  // 24. Italy: Vita-Salute San Raffaele University (UniSR)
  {
    institution: "Vita-Salute San Raffaele University",
    shortName: "UniSR Milan",
    slug: "vita-salute-san-raffaele-university",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Milan, Lombardy, Italy",
    website: "https://www.unisr.it",
    sourceRow: 558,
    headline: "Vita-Salute San Raffaele University: Medicine, Gene Therapy & Philosophy Guide",
    overview: "Vita-Salute San Raffaele University (Università Vita-Salute San Raffaele - UniSR) in Milan is an elite Italian private university integrated within the San Raffaele Research Hospital, globally celebrated for world-first ex-vivo gene therapy approvals (Strimvelis, Libmeldy), neurosciences, and bioethics.",
    description: "Verified MD programs, biomedical master's degrees, PhD fellowships, and admissions guide for Vita-Salute San Raffaele University in Milan, Italy.",
    heroEyebrow: "Elite Biomedical University · European Gene Therapy Pioneer",
    tuitionText: "Tuition for the International MD Program is tiered based on family income, ranging from €8,000 to €20,140 per year. Master of Science programs range from €4,000 to €11,000 per year. Fully funded PhD fellowships provide €21,000 to €24,000 net per year plus research allowance.",
    admissions: {
      masters: "Accredited Bachelor of Science in Biology, Biotechnology, Pharmacy, or Biomedical Engineering (180 ECTS) with high academic GPA.",
      phd: "Master's degree (M.Sc., Laurea Magistrale) in Life Sciences or Medicine with honors and demonstrated laboratory research experience.",
      language: "English programs: IELTS Academic 6.5 overall (minimum 6.0 each band) or TOEFL iBT 88.",
      proposal: "Doctoral research proposal (1,500 words) specifying alignment with San Raffaele Scientific Institute (SRSI) research units.",
      appFee: "€100 application assessment fee.",
      documents: "Bachelor's/Master's diploma, transcript of exams, curriculum vitae, statement of research interests, and passport copy."
    },
    opportunities: [
      {
        id: 2839,
        title: "San Raffaele International Doctoral Fellowship in Molecular Medicine",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "€21,500 net annual tax-free living stipend for three years plus research budget",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "€100 application fee",
        tuition: "Full tuition waiver ($0 paid by fellow)",
        source: "https://www.unisr.it/en/postgraduate/phd/molecular-medicine",
        desc: "Prestigious doctoral fellowship hosted at the San Raffaele Scientific Institute (SRSI) investigating gene editing, cancer immunotherapy, cellular therapy, and clinical neurobiology.",
        requirements: {
          gpa: "Master of Science in Molecular Biology, Biotechnology, or Medicine with grade 108/110 or higher",
          ielts: "IELTS 6.5 or TOEFL 88",
          gre: "Not required",
          papers: "Master's research thesis summary and 2-page statement of scientific interest",
          references: "Two academic referee letters from research supervisors"
        }
      },
      {
        id: 2840,
        title: "International Master of Science in Cognitive Neuroscience (MSc)",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Merit-based fee reduction scholarships (up to 50%) available for top candidates",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "€100 application fee",
        tuition: "€8,500 per academic year",
        source: "https://www.unisr.it/en/postgraduate/master-of-science/cognitive-neuroscience",
        desc: "Two-year English-taught Master of Science combining cognitive neuropsychology, fMRI and MEG neuroimaging, brain-computer interfaces, and neural computation at UniSR.",
        requirements: {
          gpa: "Bachelor's degree in Psychology, Neuroscience, Biology, or Philosophy with B+ equivalent",
          ielts: "IELTS 6.5 (minimum 6.0 in each sub-test) or TOEFL 88",
          gre: "Not required",
          papers: "Personal statement explaining neuroscience career objectives",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 2841,
        title: "Ph.D. in Cellular & Molecular Gene Therapy for Rare Monogenic Diseases",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "€23,500 net annual fellowship supported by Telethon Institute for Gene Therapy (SR-Tiget)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Fully funded doctoral position",
        source: "https://www.sr-tiget.it",
        desc: "Doctoral research position at the world-leading San Raffaele Telethon Institute for Gene Therapy (SR-Tiget) engineering lentiviral vectors and CRISPR base editors for hematopoietic stem cells.",
        requirements: {
          gpa: "M.Sc. in Biotechnology, Biochemistry, or Medicine with top marks",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Research proposal on targeted gene editing and demonstrated molecular biology lab skills",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 2842,
        title: "San Raffaele Experimental Neuro-Immunology & Multiple Sclerosis Project",
        type: "Research",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "€2,200 monthly research salary funded by Italian Multiple Sclerosis Foundation (FISM)",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Fully funded research project",
        source: "https://www.unisr.it/en/research",
        desc: "Translational research study at the Institute of Experimental Neurology (INSPE) tracking neuroinflammation, microglial activation, and remyelination in neurodegenerative disease models.",
        requirements: {
          gpa: "Degree in Neuroscience, Molecular Medicine, or Pharmacology",
          ielts: "English B2/C1 proficiency",
          gre: "Not required",
          papers: "Experience in flow cytometry, confocal microscopy, or animal disease models",
          references: "Two academic references"
        }
      },
      {
        id: 2843,
        title: "San Raffaele Research Hospital Clinical Immuno-Oncology Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "€1,100 monthly hospital stipend for 6-month clinical trial placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited Master's or MD degree program",
        source: "https://www.unisr.it/en/student-services/internships",
        desc: "Six-month clinical residency embedded within the Phase I Clinical Trial Center of San Raffaele Hospital, monitoring CAR-T cell immunotherapy infusions and cytokine release syndrome.",
        requirements: {
          gpa: "Enrolled in UniSR MD or Biotechnology graduate program in good academic standing",
          ielts: "Fluent English; Italian B1 helpful for clinical ward interaction",
          gre: "Not required",
          papers: "Updated CV and Good Clinical Practice (GCP) certification",
          references: "Faculty clinical department mentor endorsement"
        }
      },
      {
        id: 2844,
        title: "SR-Tiget Postdoctoral Research Fellowship in Epigenetic Editing & Stem Cells",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "€46,000 - €52,000 per annum salary plus conference travel funding",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral research post",
        source: "https://www.unisr.it/en/research/career",
        desc: "Two-year postdoctoral fellowship at the San Raffaele Telethon Institute exploring targeted DNA methylation and zinc-finger epigenetic editors for long-term gene silencing in vivo.",
        requirements: {
          gpa: "PhD in Molecular Genetics, Gene Therapy, or Biochemistry within 3 years",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "Minimum 3 first-author papers in high-impact journals (Nature/Science/Cell family)",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2845,
        title: "Full Professor in Molecular Oncology & Cancer Epigenetics",
        type: "Job",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "€88,000 - €115,000 annual compensation under Italian MUR university scale",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Tenured full-time university professorship",
        source: "https://www.unisr.it/ateneo/lavora-con-noi",
        desc: "Permanent professorial appointment in the Faculty of Medicine and Surgery, directing an independent cancer biology laboratory and leading clinical translation at the San Raffaele Cancer Center.",
        requirements: {
          gpa: "National Scientific Qualification (ASN) as Full Professor in Oncology or international equivalent",
          ielts: "Fluent English instructional capability",
          gre: "Not required",
          papers: "Distinguished record of ERC grants or international clinical trials and major publications",
          references: "Three international peer references"
        }
      }
    ],
    researchers: [
      {
        id: 1236,
        name: "Prof. Dr. Luigi Naldini",
        title: "Director of San Raffaele Telethon Institute for Gene Therapy (SR-Tiget)",
        subject: "biology",
        topics: ["Lentiviral Vectors", "Gene Therapy", "Hematopoietic Stem Cells", "Targeted Genome Editing"],
        source: "https://www.sr-tiget.it/investigators/luigi-naldini",
        summary: "Prof. Naldini is a world-renowned pioneer who pioneered lentiviral vectors for human gene transfer, enabling the curative genetic treatment of lethal inherited childhood disorders."
      },
      {
        id: 1237,
        name: "Prof. Dr. Gianvito Martino",
        title: "Vice-Rector for Research & Director of Division of Neuroscience",
        subject: "biology",
        topics: ["Neural Stem Cells", "Neuroimmunology", "Multiple Sclerosis", "Regenerative Neurology"],
        source: "https://www.unisr.it/docenti/gianvito-martino",
        summary: "Prof. Martino explores somatic neural stem cell transplantation, discovering that neural precursors exert potent immunomodulatory and trophic actions in the central nervous system."
      },
      {
        id: 1238,
        name: "Prof. Dr. Chiara Bonini",
        title: "Head of Experimental Hematology Unit & Professor of Hematology",
        subject: "biology",
        topics: ["CAR-T Cells", "Cancer Immunotherapy", "T-Cell Receptor (TCR) Engineering", "Bone Marrow Transplantation"],
        source: "https://www.unisr.it/docenti/chiara-bonini",
        summary: "Prof. Bonini is an international leader in cell and gene therapy for hematological malignancies, developing genetically modified T-cells equipped with suicide genes to treat leukemia."
      }
    ]
  },

  // 25. United States: University of Houston (UH)
  {
    institution: "University of Houston",
    shortName: "UH",
    slug: "university-of-houston",
    countryId: "usa",
    countryLabel: "United States",
    location: "Houston, Texas, United States",
    website: "https://uh.edu",
    sourceRow: 1083,
    headline: "University of Houston: Energy Engineering, Superconductivity & Computer Science",
    overview: "The University of Houston (UH), founded in 1927, is a premier Tier-One public research university (Carnegie R1) situated in the energy capital of the world, home to the Texas Center for Superconductivity (TcSUH), world-leading petroleum and chemical engineering, and the Cullen College of Engineering.",
    description: "Verified graduate admissions, doctoral fellowships, and research degrees guide for University of Houston in Texas.",
    heroEyebrow: "Carnegie R1 Research University · World Energy & Superconductivity Hub",
    tuitionText: "In-state graduate tuition averages $9,400 to $11,200 annually. Out-of-state and international graduate tuition is approximately $21,500 to $24,800 annually. Doctoral students in engineering and sciences typically receive full tuition fellowships (GTF) plus annual assistantship stipends ($24,000–$34,000).",
    admissions: {
      masters: "Earned Bachelor's degree from an accredited institution with minimum 3.0 cumulative GPA on a 4.0 scale.",
      phd: "Earned Master's or outstanding Bachelor's degree with minimum 3.4 GPA and strong research aptitude in STEM or business fields.",
      language: "TOEFL iBT 79 overall (minimum 20 in each section) or IELTS Academic 6.5 overall.",
      proposal: "Doctoral statement of research intent (1,000 words) identifying specific research faculty and laboratories at UH.",
      appFee: "$75 domestic / $140 international graduate application fee.",
      documents: "Official university transcripts, statement of purpose, resume/CV, and three letters of recommendation."
    },
    opportunities: [
      {
        id: 2846,
        title: "UH Presidential Graduate Fellowship & Graduate Tuition Fellowship (GTF)",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry"],
        funding: "$28,000 annual stipend for four years plus 100% graduate tuition waiver",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$140 international fee",
        tuition: "Full tuition covered ($0 paid by fellow)",
        source: "https://www.uh.edu/graduate-school/funding-fellowships",
        desc: "Premier merit-based doctoral award granted to exceptional incoming PhD students across Cullen College of Engineering, College of Natural Sciences and Mathematics, and Bauer College of Business.",
        requirements: {
          gpa: "Minimum 3.7 undergraduate or graduate cumulative GPA",
          ielts: "IELTS 7.0 or TOEFL 92",
          gre: "Competitive GRE scores if required by department",
          papers: "Demonstrated prior research output in honors thesis or published paper",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2847,
        title: "Master of Science in Subsea & Energy Systems Engineering",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "Graduate assistantships (TA/RA) and Texas Energy Industry merit scholarships available",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$140 application fee",
        tuition: "$10,200 in-state / $22,800 out-of-state per academic year",
        source: "https://www.egr.uh.edu/academics/graduate-programs",
        desc: "Pioneering engineering master's program located in Houston, focusing on offshore pipeline engineering, subsea robotics, carbon capture and storage (CCS), and offshore hydrogen pipelines.",
        requirements: {
          gpa: "B.S. in Mechanical, Civil, Petroleum, or Chemical Engineering with minimum 3.0 GPA",
          ielts: "IELTS 6.5 or TOEFL iBT 79",
          gre: "GRE Quantitative 155+ recommended",
          papers: "Statement of purpose detailing offshore and clean energy engineering goals",
          references: "Three letters of recommendation"
        }
      },
      {
        id: 2848,
        title: "Ph.D. in High-Temperature Superconductivity & Quantum Materials Fellowship",
        type: "PhD",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "Fully funded: $30,000–$34,000 annual research assistantship + full tuition waiver",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$140 application fee",
        tuition: "100% tuition remission provided by TcSUH endowment",
        source: "https://tcsuh.com/education/graduate",
        desc: "Doctoral research position at the world-famous Texas Center for Superconductivity (TcSUH) synthesizing high-Tc cuprate and nickelate superconductors for zero-loss power transmission.",
        requirements: {
          gpa: "B.S. or M.S. in Physics, Materials Science, or Electrical Engineering with 3.5+ GPA",
          ielts: "IELTS 6.5 or TOEFL 85",
          gre: "GRE Physics or General GRE recommended",
          papers: "Master's thesis or undergraduate research publication in condensed matter physics",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2849,
        title: "Gulf Coast Hydrogen Hub & Industrial Decarbonization Research Project",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "chemistry", "environment"],
        funding: "$26,000 annual research stipend sponsored by US Department of Energy (DOE) Grant",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$75 domestic / $140 international fee",
        tuition: "Full tuition waiver under DOE research grant",
        source: "https://www.uh.edu/uh-energy",
        desc: "Interdisciplinary clean energy project at UH Energy modeling regional hydrogen pipelines, salt cavern geological storage, and industrial carbon capture in the Houston Ship Channel.",
        requirements: {
          gpa: "Degree in Chemical, Mechanical, or Petroleum Engineering with 3.3+ GPA",
          ielts: "IELTS 6.5 or TOEFL 79",
          gre: "Not required",
          papers: "Experience with process simulation (Aspen Plus, HYSYS) or reservoir modeling",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2850,
        title: "Houston Energy Corridor & NASA Johnson Space Center Curricular Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "$28/hour for 16-week semester placement with major energy or aerospace firms",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Applied to UH graduate cooperative education credits",
        source: "https://www.egr.uh.edu/coop",
        desc: "Four-month paid engineering co-op placement stationed in the Houston Energy Corridor (ExxonMobil, Chevron, SLB) or at NASA Johnson Space Center contractors.",
        requirements: {
          gpa: "Current UH graduate engineering student in good standing with 3.2+ GPA",
          ielts: "Fluent English communication skills",
          gre: "Not required",
          papers: "Updated CV and company background check clearance",
          references: "Academic faculty advisor recommendation"
        }
      },
      {
        id: 2851,
        title: "TcSUH Postdoctoral Research Fellowship in Superconducting Magnet Devices",
        type: "Fellowship",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "$66,000 - $74,000 annual salary plus standard UH medical benefits",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried university employee",
        source: "https://tcsuh.com/about/opportunities",
        desc: "Two-year postdoctoral research appointment developing high-field superconducting magnets and superconducting magnetic energy storage (SMES) for fusion reactors and MRI.",
        requirements: {
          gpa: "Ph.D. in Physics, Electrical Engineering, or Materials Science completed within 4 years",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "Minimum 4 peer-reviewed journal articles in applied superconductivity or cryogenics",
          references: "Three letters of professional reference"
        }
      },
      {
        id: 2852,
        title: "Tenure-Track Assistant Professor in Computer Science & Cloud Security",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "$116,000 - $138,000 for 9-month appointment plus generous startup research package",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Tenure-track academic faculty appointment",
        source: "https://uh.edu/human-resources/careers",
        desc: "Full-time tenure-track faculty position in the Department of Computer Science, leading research in distributed cloud systems, confidential computing, and zero-trust security.",
        requirements: {
          gpa: "Ph.D. in Computer Science or Computer Engineering by appointment start date",
          ielts: "Demonstrated excellence in English classroom teaching",
          gre: "Not required",
          papers: "High quality papers in top-tier computer science conferences (ACM CCS, IEEE S&P, USENIX)",
          references: "Three academic reference letters and research statement"
        }
      }
    ],
    researchers: [
      {
        id: 1239,
        name: "Prof. Dr. Zhifeng Ren",
        title: "Director of TcSUH & Paul C. W. Chu Chair in Physics",
        subject: "physics",
        topics: ["Thermoelectric Materials", "Superconductivity", "Nanomaterials", "Electrocatalysis"],
        source: "https://tcsuh.com/people/faculty/zhifeng-ren",
        summary: "Prof. Ren is an elected Fellow of the National Academy of Inventors (NAI) and APS, renowned for synthesizing nanostructured thermoelectrics and clean energy catalysts."
      },
      {
        id: 1240,
        name: "Prof. Dr. Ramanan Krishnamoorti",
        title: "Vice President for Energy and Innovation & Professor of Chemical Engineering",
        subject: "engineering",
        topics: ["Polymer Nanocomposites", "Energy Transition", "Carbon Management", "Petroleum Fluids"],
        source: "https://www.chee.uh.edu/faculty/krishnamoorti",
        summary: "Prof. Krishnamoorti leads university-wide energy initiatives, pioneering polymer nanocomposites for battery electrolytes and industrial carbon management systems."
      },
      {
        id: 1241,
        name: "Prof. Dr. Pradeep Sharma",
        title: "Hugh Roy and Lillie Cranz Cullen University Professor of Mechanical Engineering",
        subject: "engineering",
        topics: ["Flexoelectricity", "Nanomechanics", "Soft Robotics", "Smart Materials"],
        source: "https://www.me.uh.edu/faculty/sharma",
        summary: "Prof. Sharma is a member of the National Academy of Engineering (NAE) whose research uncovered fundamental mechanical-electrical coupling in nanoscale soft matter and biomembranes."
      }
    ]
  },

  // 26. United Kingdom: Oxford Brookes University
  {
    institution: "Oxford Brookes University",
    shortName: "Oxford Brookes",
    slug: "oxford-brookes-university",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Oxford, England, United Kingdom",
    website: "https://www.brookes.ac.uk",
    sourceRow: 1283,
    headline: "Oxford Brookes University: Motorsport Engineering, Architecture & Hospitality Guide",
    overview: "Oxford Brookes University, located in the world-famous city of Oxford, is a top UK modern university globally renowned for educating Formula 1 race engineers (Motorsport Engineering), the prestigious School of Architecture, and international hospitality management.",
    description: "Verified postgraduate courses, PhD studentships, and admissions guide for Oxford Brookes University in the UK.",
    heroEyebrow: "Premier UK Modern University · Formula 1 Motorsport & Architecture Leader",
    tuitionText: "Full-time domestic postgraduate tuition is £9,250 to £11,500 per year. International student tuition is £16,900 to £19,500 per year. Fully funded doctoral studentships cover 100% of fees plus an annual tax-free living stipend (£19,237).",
    admissions: {
      masters: "UK 2:1 or 2:2 Honours degree or international equivalent in a relevant discipline.",
      phd: "First class or upper second class (2:1) UK Honours degree or Master's degree with Merit/Distinction in related fields.",
      language: "IELTS Academic 6.5 overall with a minimum of 6.0 in reading and writing, and 5.5 in listening and speaking.",
      proposal: "1,500-word doctoral research project proposal detailing methodology, literature review, and alignment with research groups.",
      appFee: "Zero application fee for direct online postgraduate applications.",
      documents: "Degree certificates and transcripts, personal statement, two references (at least one academic), and passport scan."
    },
    opportunities: [
      {
        id: 2853,
        title: "Oxford Brookes Vice-Chancellor's PhD Studentship in Motorsport Aerodynamics",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Full tuition fee waiver plus £19,237 annual tax-free living stipend for 3 years",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "Zero application fee",
        tuition: "100% covered by university studentship award",
        source: "https://www.brookes.ac.uk/research/postgraduate-research-degrees/research-studentships",
        desc: "Doctoral studentship at the Centre for Automotive and Motorsport Engineering exploring unsteady CFD ground-effect aerodynamics, vortex control, and wind tunnel testing for high-performance race cars.",
        requirements: {
          gpa: "First Class or 2:1 UK MEng or international equivalent in Mechanical, Aerospace, or Motorsport Engineering",
          ielts: "IELTS 6.5 (minimum 6.0 writing/reading)",
          gre: "Not required",
          papers: "Demonstrated computational fluid dynamics (CFD) and aerodynamic test rig experience",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2854,
        title: "MSc in Motorsport Engineering (Formula 1 Engineering Pathway)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "physics", "computer-science"],
        funding: "Oxford Brookes International Student Scholarship (£2,000 fee reduction) available",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Zero application fee",
        tuition: "£10,800 domestic / £19,200 international per year",
        source: "https://www.brookes.ac.uk/courses/postgraduate/motorsport-engineering-msc",
        desc: "World-renowned master's program located in the UK's 'Motorsport Valley', providing advanced training in vehicle dynamics, race car telemetry, telemetry analytics, and composite structures.",
        requirements: {
          gpa: "Minimum 2:1 Honours degree in Mechanical, Automotive, Motorsport, or Aerospace Engineering",
          ielts: "IELTS 6.5 (minimum 6.0 in all components)",
          gre: "Not required",
          papers: "Personal statement detailing Formula Student or competitive motorsport experience",
          references: "Two academic or industry recommendations"
        }
      },
      {
        id: 2855,
        title: "Ph.D. in Sustainable Architecture & Net-Zero Retrofit Technologies",
        type: "PhD",
        subject: "arts-design",
        subjects: ["arts-design", "environment", "engineering"],
        funding: "£19,500 annual tax-free stipend + full UK/International fee waiver",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Funded by UKRI / Architecture Research Centre",
        source: "https://www.brookes.ac.uk/school-of-architecture/research",
        desc: "Doctoral research position at the Oxford Institute for Sustainable Development (OISD) modeling post-occupancy building performance, embodied carbon, and natural ventilation in historic UK housing stock.",
        requirements: {
          gpa: "Upper second class Honours or Master's in Architecture, Building Physics, or Sustainable Design",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "2-page doctoral research proposal outlining building physics methodology",
          references: "Two academic references"
        }
      },
      {
        id: 2856,
        title: "Primate Conservation & Tropical Forest Habitat Fragmentation Project",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "£18,000 annual research bursary plus overseas field station grant",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Tuition waiver included",
        source: "https://www.brookes.ac.uk/conservation",
        desc: "World-renowned primate conservation research group conducting field camera-trap monitoring, acoustic sensors, and canopy corridor mapping to protect endangered primates across Southeast Asia and Africa.",
        requirements: {
          gpa: "BSc or MSc in Anthropology, Zoology, Wildlife Conservation, or Ecology",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Previous field research experience in remote or tropical forest environments",
          references: "Two academic referees"
        }
      },
      {
        id: 2857,
        title: "Formula 1 Team Trackside Engineering & Vehicle Dynamics Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "£22,000 pro-rata industrial salary for 12-month placement in Motorsport Valley",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated sandwich placement within Oxford Brookes MSc degree",
        source: "https://www.brookes.ac.uk/courses/postgraduate/motorsport-engineering-msc",
        desc: "Twelve-month full-time industrial engineering placement embedded directly inside an active Formula 1 team (e.g., Williams, Red Bull Racing, Alpine, Mercedes-AMG) based in the Oxfordshire region.",
        requirements: {
          gpa: "Enrolled in Oxford Brookes MSc Motorsport Engineering with 65%+ academic average",
          ielts: "Fluent English communication",
          gre: "Not required",
          papers: "Motorsport portfolio, CAD/CFD design samples, and updated CV",
          references: "Course leader endorsement"
        }
      },
      {
        id: 2858,
        title: "Oxford Institute for Sustainable Development Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "arts-design", "social-sciences"],
        funding: "£41,500 - £47,000 per annum salary plus USS pension benefits",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral research post",
        source: "https://www.brookes.ac.uk/research/postdoctoral-fellowships",
        desc: "Two-year postdoctoral fellowship investigating community energy resilience, climate adaptation in urban planning, and circular construction timber supply chains in the UK.",
        requirements: {
          gpa: "PhD in Urban Planning, Sustainable Architecture, or Environmental Studies within 3 years",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Minimum 3 journal papers in architectural science or urban planning",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2859,
        title: "Senior Lecturer in Automotive Powertrain & Battery Energy Storage",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "£44,263 - £54,395 per annum with generous Universities Superannuation Scheme (USS)",
        status: "Open",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026",
        fee: "Zero fee",
        tuition: "Permanent full-time academic appointment",
        source: "https://www.brookes.ac.uk/jobs",
        desc: "Academic faculty post in the School of Engineering, Computing and Mathematics delivering lectures on electric vehicle powertrains, thermal management of lithium-ion battery packs, and race car electrification.",
        requirements: {
          gpa: "PhD in Mechanical Engineering, Electrical Engineering, or Automotive Powertrains",
          ielts: "Native or fluent English communication skills",
          gre: "Not required",
          papers: "Proven publication record in automotive energy systems or motorsport engineering",
          references: "Three professional/academic references"
        }
      }
    ],
    researchers: [
      {
        id: 1242,
        name: "Prof. Dr. Denise Morrey",
        title: "Professor of Mechanical Engineering & Former Dean of Technology",
        subject: "engineering",
        topics: ["Vehicle Dynamics", "Vibration Analysis", "Automotive Composite Materials", "Engineering Pedagogy"],
        source: "https://www.brookes.ac.uk/staff/profiles/denise-morrey",
        summary: "Prof. Morrey was instrumental in building Oxford Brookes' world-leading motorsport engineering faculty, specializing in vehicle chassis vibration, acoustics, and structural composites."
      },
      {
        id: 1243,
        name: "Prof. Dr. Anna Nekaris",
        title: "Professor of Anthropology & Primate Conservation",
        subject: "biology",
        topics: ["Primate Conservation", "Nocturnal Mammals", "Tropical Forest Ecology", "Wildlife Trade Law"],
        source: "https://www.brookes.ac.uk/staff/profiles/anna-nekaris",
        summary: "Prof. Nekaris directs the Little Fireface Project, leading world-renowned research on slow loris venom evolution, nocturnal primate ecology, and international wildlife trafficking prevention."
      },
      {
        id: 1244,
        name: "Prof. Dr. Rajat Gupta",
        title: "Director of Oxford Institute for Sustainable Development (OISD)",
        subject: "environment",
        topics: ["Building Energy Performance", "Smart Grids", "Urban Microclimates", "Low-Carbon Housing"],
        source: "https://www.brookes.ac.uk/staff/profiles/rajat-gupta",
        summary: "Prof. Gupta is an internationally recognized authority on urban building energy mapping, evaluating real-world energy performance, and smart local energy systems in communities."
      }
    ]
  },

  // 27. Japan: Yokohama National University (YNU)
  {
    institution: "Yokohama National University",
    shortName: "YNU Yokohama",
    slug: "yokohama-national-university",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Yokohama, Kanagawa, Japan",
    website: "https://www.ynu.ac.jp",
    sourceRow: 1793,
    headline: "Yokohama National University: Marine Technology, Semiconductor & Chemistry Guide",
    overview: "Yokohama National University (YNU - 横浜国立大学) is a prestigious Japanese national university located in the port city of Yokohama, renowned for naval architecture and ocean engineering, advanced power semiconductor devices, risk management, and chemical science.",
    description: "Verified graduate research programs, MEXT scholarships, and admissions guide for Yokohama National University in Japan.",
    heroEyebrow: "Prestigious Japanese National University · Ocean Engineering & Semiconductor Leader",
    tuitionText: "Annual graduate tuition is standard Japanese national university tuition: ¥535,800 (~$3,550 USD). Admission fee is ¥282,000 (one-time). Japanese Government MEXT scholarships, JASSO honors scholarships, and full/half tuition exemptions are available for qualified international students.",
    admissions: {
      masters: "Completion of 16 years of education and an accredited Bachelor's degree in engineering, science, or social sciences.",
      phd: "Master's degree or professional equivalent with demonstrated thesis or journal publication output.",
      language: "English programs: TOEFL iBT 80 or IELTS 6.0. Japanese programs: JLPT N1 or N2.",
      proposal: "Detailed research proposal (Kenkyu-Keikaku-sho) in English or Japanese (2,000 words) endorsed by prospective faculty host.",
      appFee: "¥30,000 examination application fee.",
      documents: "Graduation certificate, academic transcript, research plan, two letters of recommendation, and passport copy."
    },
    opportunities: [
      {
        id: 2860,
        title: "MEXT Japanese Government University Recommendation Scholarship at YNU",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "chemistry", "physics"],
        funding: "¥144,000 to ¥145,000 monthly stipend, 100% tuition waiver, and round-trip economy flights",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "Zero application fee for nominated scholars",
        tuition: "100% waived by Japanese Government",
        source: "https://www.ynu.ac.jp/english/admissions/scholarship/mext.html",
        desc: "Prestigious Monbukagakusho (MEXT) scholarship allocated directly through Yokohama National University for top international applicants enrolling in Graduate School of Engineering or Urban Innovation.",
        requirements: {
          gpa: "Minimum 2.30 out of 3.0 on MEXT GPA grading scale",
          ielts: "IELTS 6.0 or TOEFL 80 or JLPT N2",
          gre: "Not required",
          papers: "Research plan detailing proposed laboratory work at YNU",
          references: "Two academic recommendation letters including Dean's recommendation"
        }
      },
      {
        id: 2861,
        title: "Master of Engineering in Naval Architecture & Ocean Engineering",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Tuition exemption scholarships (up to 100%) + teaching assistantships available",
        status: "Open",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 (~$3,550 USD) per year",
        source: "https://www.es.ynu.ac.jp/english",
        desc: "Flagship master's program utilizing YNU's deep wave basin and ship towing tanks to explore autonomous surface vessels, marine floating wind foundations, and computational hydrodynamics.",
        requirements: {
          gpa: "Bachelor's degree in Naval Architecture, Mechanical Engineering, Civil Engineering, or Physics",
          ielts: "IELTS 6.0 or TOEFL 80",
          gre: "Not required",
          papers: "Detailed 2-page statement of research interest in ocean engineering",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2862,
        title: "Ph.D. in Wide Bandgap Power Semiconductors & Diamond Electronics Fellowship",
        type: "PhD",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "JST SPRING Fellowship: ¥200,000 monthly living stipend + ¥350,000 annual research fund",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥30,000 application fee",
        tuition: "Covered by doctoral fellowship scheme",
        source: "https://www.ynu.ac.jp/english/admissions/doctoral",
        desc: "Doctoral research program developing gallium nitride (GaN), silicon carbide (SiC), and diamond semiconductor transistors for ultra-high-efficiency electric grid inverters and EV power modules.",
        requirements: {
          gpa: "Master of Science or Engineering in Electrical Engineering, Applied Physics, or Materials Science",
          ielts: "TOEFL 80 or IELTS 6.0",
          gre: "Not required",
          papers: "Master's thesis manuscript and one published journal or conference paper",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2863,
        title: "Tokyo Bay Coastal Ecology & Urban Flood Defense Modeling Project",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "¥180,000 monthly research salary funded by Ministry of Land, Infrastructure, Transport and Tourism (MLIT)",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Fully sponsored research project",
        source: "https://www.urban.ynu.ac.jp/english",
        desc: "Interdisciplinary research study combining high-resolution storm surge simulation, seawall structural resilience, and estuarine wetland preservation across Tokyo Bay.",
        requirements: {
          gpa: "Degree in Civil Engineering, Environmental Science, or Coastal Hydrology",
          ielts: "English or Japanese proficiency",
          gre: "Not required",
          papers: "Experience in hydrodynamic modeling (Delft3D/FVCOM) or GIS mapping",
          references: "Two academic recommendations"
        }
      },
      {
        id: 2864,
        title: "Yokohama Industrial Port & Automotive Battery Testing Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        funding: "¥160,000 per month stipend plus commuting travel pass",
        status: "Open",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027",
        fee: "Zero fee",
        tuition: "Course-integrated practical placement",
        source: "https://www.ynu.ac.jp/english/campus/career",
        desc: "Three to six-month technical internship working with automotive OEMs (Nissan, Mitsubishi) and maritime battery manufacturers in the Keihin industrial zone.",
        requirements: {
          gpa: "YNU graduate engineering student in good academic standing",
          ielts: "Conversational Japanese (JLPT N3+) and English proficiency",
          gre: "Not required",
          papers: "Resume and Japanese Rirekisho",
          references: "Faculty mentor recommendation"
        }
      },
      {
        id: 2865,
        title: "JSPS Postdoctoral Fellowship for International Researchers at YNU",
        type: "Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "physics", "engineering"],
        funding: "¥362,000 monthly maintenance allowance, ¥200,000 settling-in fee, and research grant",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero fee",
        tuition: "Salaried fellowship from the Japan Society for the Promotion of Science (JSPS)",
        source: "https://www.jsps.go.jp/english/e-fellow",
        desc: "Prestigious two-year international postdoctoral fellowship conducted in partnership with YNU faculty in electrochemistry, solid-state batteries, or organic synthesis.",
        requirements: {
          gpa: "PhD in Chemistry, Materials Science, or Chemical Engineering awarded within 6 years",
          ielts: "Proficiency in English",
          gre: "Not required",
          papers: "Strong record of international first-author journal papers",
          references: "Three reference letters and nomination from host YNU professor"
        }
      },
      {
        id: 2866,
        title: "Associate Professor in Autonomous Surface Vessels & Marine Robotics",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "¥7,800,000 - ¥9,500,000 annual compensation under Japanese national university salary scale",
        status: "Open",
        deadline: "2026-12-20",
        deadlineText: "December 20, 2026",
        fee: "Zero fee",
        tuition: "Tenured national university academic faculty appointment",
        source: "https://www.ynu.ac.jp/english/about/recruit",
        desc: "Permanent faculty appointment in the Faculty of Engineering, teaching marine vehicle dynamics, path planning algorithms, and supervising towing tank experimental research.",
        requirements: {
          gpa: "Doctorate (Ph.D.) in Naval Architecture, Ocean Engineering, or Robotics",
          ielts: "Fluent English and conversational Japanese",
          gre: "Not required",
          papers: "Minimum 4 international peer-reviewed journal papers and track record of external grants",
          references: "Three academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 1245,
        name: "Prof. Dr. Tsutomu Miyasaka",
        title: "Visiting Professor & Pioneer of Perovskite Solar Cells",
        subject: "chemistry",
        topics: ["Perovskite Photovoltaics", "Solid-State Electrochemistry", "Solar Energy Conversion", "Dye-Sensitized Solar Cells"],
        source: "https://www.ynu.ac.jp/english/faculty/chem/miyasaka",
        summary: "Prof. Miyasaka invented organometal halide perovskite solar cells in 2009, a monumental breakthrough that transformed global photovoltaic technology."
      },
      {
        id: 1246,
        name: "Prof. Dr. Hitoshi Koshiba",
        title: "Professor of Marine Hydrodynamics & Naval Architecture",
        subject: "engineering",
        topics: ["Ship Resistance", "Autonomous Marine Vehicles", "Towing Tank Experiments", "Wave-Current Interactions"],
        source: "https://er-web.jmk.ynu.ac.jp/html/KOSHIBA_Hitoshi/en.html",
        summary: "Prof. Koshiba conducts experimental fluid dynamics research in ship model basins, evaluating hull wave resistance and maritime energy-saving retrofits."
      },
      {
        id: 1247,
        name: "Prof. Dr. Kenji Katori",
        title: "Professor of Applied Physics & Semiconductor Nanodevices",
        subject: "physics",
        topics: ["Wide Bandgap Semiconductors", "Silicon Carbide Devices", "Power Electronics", "Quantum Defects"],
        source: "https://er-web.jmk.ynu.ac.jp/html/KATORI_Kenji/en.html",
        summary: "Prof. Katori leads power semiconductor device fabrication, focusing on defect reduction in SiC and GaN epitaxial wafers for electric propulsion and renewable grid converters."
      }
    ]
  },

  // 28. Sweden: Kungl. Vitterhetsakademien (Royal Swedish Academy of Letters, History and Antiquities)
  {
    institution: "Kungl. Vitterhetsakademien",
    shortName: "Vitterhetsakademien",
    slug: "kungl-vitterhetsakademien",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Stockholm, Sweden",
    website: "https://www.vitterhetsakad.se",
    sourceRow: 1585,
    headline: "Kungl. Vitterhetsakademien: Humanities, Archaeology & Heritage Research",
    overview: "The Royal Swedish Academy of Letters, History and Antiquities (Kungliga Vitterhets Historie och Antikvitets Akademien), founded in 1753 by Queen Lovisa Ulrika, is Sweden's national royal academy promoting excellence, postdoctoral fellowships, and research grants across the humanities, archaeology, philology, and cultural heritage conservation.",
    description: "Verified postdoctoral fellowships, research grants, and international research residencies guide for Kungl. Vitterhetsakademien in Stockholm, Sweden.",
    heroEyebrow: "Founded 1753 · Swedish Royal Academy of Humanities & Antiquities",
    tuitionText: "Zero tuition fees. Kungl. Vitterhetsakademien operates as a premier grant-giving and fellowship-conferring national research institution. Fellowships and researcher grants provide tax-exempt stipends (SEK 350,000–550,000/year) and institutional project funding.",
    admissions: {
      masters: "Nomination and eligibility require completion of a recognized Master of Arts or equivalent degree in Humanities, Archaeology, or Cultural Heritage.",
      phd: "Collaborative doctoral candidates must be matriculated at partner Swedish universities (Stockholm, Uppsala, Lund, Gothenburg).",
      language: "Swedish and/or English at advanced scholarly level (CEFR C1/C2).",
      proposal: "Detailed 5-page research proposal detailing scholarly methodology, archival sources, and contributions to humanistic or archaeological knowledge.",
      appFee: "Zero application fee for research fellowship competitions.",
      documents: "Doctoral dissertation summary, publication list, curriculum vitae, detailed project plan, and two letters of academic nomination."
    },
    opportunities: [
      {
        id: 2867,
        title: "Vitterhetsakademien National Humanities Postdoctoral Research Fellowship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "SEK 420,000 per year tax-free research stipend for two years plus travel allowance",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero application fee",
        tuition: "Full fellowship award (Zero tuition)",
        source: "https://www.vitterhetsakad.se/forskningsstod/stipendier",
        desc: "Prestigious national research fellowship awarded to exceptional early-career scholars in history, archaeology, classical languages, or cultural heritage studies.",
        requirements: {
          gpa: "PhD in Humanities, History, or Archaeology defended within the past three years",
          ielts: "Scholarly English or Swedish proficiency",
          gre: "Not required",
          papers: "Monograph or peer-reviewed papers; 5-page project description",
          references: "Two letters of nomination from Swedish or international academy members"
        }
      },
      {
        id: 2868,
        title: "Master's Research Travel Bursary & Archival Residency in Swedish Cultural History",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "SEK 50,000 research travel grant plus archival access in Stockholm",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Bursary applied toward research travel and archival stays",
        source: "https://www.vitterhetsakad.se/forskningsstod/anslag",
        desc: "Competitive grant enabling graduate thesis students enrolled at Swedish or Nordic universities to conduct primary source archival research at the Royal Academy library and heritage collections.",
        requirements: {
          gpa: "Enrolled in Master of Arts in History, Archaeology, or Ethnology with high academic standing",
          ielts: "Swedish or English proficiency",
          gre: "Not required",
          papers: "Master's thesis outline and itemized research travel budget",
          references: "One academic supervisor recommendation letter"
        }
      },
      {
        id: 2869,
        title: "Ph.D. in Nordic Archaeology & Cultural Heritage Conservation Fellowship",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "chemistry"],
        funding: "SEK 36,000 monthly research salary via affiliated university hosting department",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition for appointed doctoral researcher",
        source: "https://www.vitterhetsakad.se/forskningsstod",
        desc: "Four-year cooperative doctoral fellowship operated alongside Stockholm University, utilizing isotope bioarchaeology and dendrochronology to analyze early medieval Scandinavian settlement patterns.",
        requirements: {
          gpa: "Master of Arts in Archaeology, Osteoarchaeology, or Heritage Science",
          ielts: "English C1 or Swedish C1",
          gre: "Not required",
          papers: "Master's thesis manuscript and 4-page research proposal on Nordic archaeology",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2870,
        title: "Swedish Historical Monuments & Landscape Preservation Research Project",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "SEK 32,000 monthly research stipend funded by Academy cultural properties trust",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Full grant funding",
        source: "https://www.vitterhetsakad.se/kulturfastigheter",
        desc: "Interdisciplinary heritage study monitoring stone weathering, bio-deterioration, and climatic threats across historic cultural properties owned by the Academy, including Borgs by on Öland and Stjernsund.",
        requirements: {
          gpa: "Degree in Heritage Conservation, Architectural History, or Materials Science",
          ielts: "Swedish or English proficiency",
          gre: "Not required",
          papers: "Experience in building diagnostics or historical landscape survey",
          references: "Two academic recommendations"
        }
      },
      {
        id: 2871,
        title: "National Heritage Board & Academy Archival Conservation Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "SEK 18,000 monthly expense stipend for 5-month residency",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward university Master's degree",
        source: "https://www.vitterhetsakad.se/biblioteket",
        desc: "Five-month professional curatorial internship based at the Vitterhetsakademiens Library in Stockholm, restoring rare 17th-century manuscripts, numismatic collections, and digital catalogs.",
        requirements: {
          gpa: "Enrolled in Master's in Archive Science, Museum Studies, or Paper Conservation",
          ielts: "Swedish working proficiency",
          gre: "Not required",
          papers: "Personal statement and conservation portfolio",
          references: "Academic faculty endorsement"
        }
      },
      {
        id: 2872,
        title: "Lovisa Ulrika Royal Academy Senior Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "SEK 550,000 annual research grant plus publication subsidy for academy monograph",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Senior scholarly research appointment",
        source: "https://www.vitterhetsakad.se/priser_och_beloningar",
        desc: "Two-year senior fellowship honoring the Academy's royal founder, awarded to an established humanities scholar to complete a landmark monograph for publication in the Academy's series.",
        requirements: {
          gpa: "Docent or Associate Professor standing in a humanistic discipline at a Nordic university",
          ielts: "Scholarly fluency in Swedish or English",
          gre: "Not required",
          papers: "Comprehensive publication list and detailed book proposal with chapter outlines",
          references: "Three international peer letters"
        }
      },
      {
        id: 2873,
        title: "Research Officer & Academic Editor in Historical Publications",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "SEK 45,000 - 52,000 monthly salary with Swedish state pension and employment terms",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Permanent scholarly administrative appointment",
        source: "https://www.vitterhetsakad.se/om_akademien/organisation",
        desc: "Permanent editorial and research administration post managing peer-review processes, academic journal publishing, and symposia for the Royal Swedish Academy.",
        requirements: {
          gpa: "PhD in History, Archaeology, Classical Philology, or related discipline",
          ielts: "Native or near-native Swedish and fluent English",
          gre: "Not required",
          papers: "Experience in academic publishing, manuscript copyediting, and research funding administration",
          references: "Two professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1248,
        name: "Prof. Dr. Peter Aronsson",
        title: "President of Kungl. Vitterhetsakademien & Professor of History",
        subject: "social-sciences",
        topics: ["Uses of History", "National Identity", "Cultural Heritage Policy", "Historical Consciousness"],
        source: "https://www.vitterhetsakad.se/ledamoter/peter_aronsson",
        summary: "Prof. Aronsson leads the Royal Academy and is a prominent Swedish historian investigating how cultural heritage and history are mobilized in nation-building and museum institutions."
      },
      {
        id: 1249,
        name: "Prof. Dr. Kerstin Lidén",
        title: "Permanent Secretary of Vitterhetsakademien & Professor of Archaeological Science",
        subject: "social-sciences",
        topics: ["Archaeological Science", "Biomolecular Archaeology", "Prehistoric Diet", "Ancient DNA"],
        source: "https://www.vitterhetsakad.se/ledamoter/kerstin_liden",
        summary: "Prof. Lidén is a world pioneer in archaeological science, utilizing stable isotopes and ancient DNA to reconstruct migration, subsistence, and disease in prehistoric populations."
      },
      {
        id: 1250,
        name: "Prof. Dr. Johan Cnattingius",
        title: "Academician & Professor of Classical Archaeology and Ancient History",
        subject: "arts-design",
        topics: ["Mediterranean Archaeology", "Etruscan Civilization", "Ancient Epigraphy", "Numismatics"],
        source: "https://www.vitterhetsakad.se/ledamoter/johan_cnattingius",
        summary: "Prof. Cnattingius directs research on classical Mediterranean antiquities, Greco-Roman architectural traditions, and the conservation of Swedish archaeological excavation collections."
      }
    ]
  },

  // 29. Netherlands: University College Roosevelt (UCR)
  {
    institution: "University College Roosevelt",
    shortName: "UCR",
    slug: "university-college-roosevelt",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Middelburg, Zeeland, Netherlands",
    website: "https://www.ucr.nl",
    sourceRow: 1520,
    headline: "University College Roosevelt: Liberal Arts & Sciences, Delta Engineering & Sustainability",
    overview: "University College Roosevelt (UCR) in historic Middelburg, Zeeland, is the prestigious international honours undergraduate and graduate research college of Utrecht University, celebrated for rigorous interdisciplinary liberal arts, innovative Delta Engineering, and biomedical science.",
    description: "Verified honours degree programs, research fellowships, and admissions guide for University College Roosevelt in the Netherlands.",
    heroEyebrow: "Utrecht University Honours College · Zeeland Delta Campus",
    tuitionText: "Tuition for statutory Dutch/EU students is approximately €3,500 to €4,500 annually (statutory tuition plus institutional college fee). Tuition for non-EU international students is approximately €10,500 to €14,000 annually. Need-based and merit-based Roosevelt Scholarships provide up to €7,500 per year.",
    admissions: {
      masters: "Accredited Bachelor of Arts or Bachelor of Science degree with minimum GPA 3.0 / 4.0 or Dutch 7.5/10 for articulated graduate master's tracks with Utrecht University.",
      phd: "Doctoral researchers are enrolled through Utrecht University Graduate School in collaboration with UCR's Delta research groups.",
      language: "IELTS Academic 7.0 overall (minimum 6.5 in each sub-score) or TOEFL iBT 100 (minimum 24 in writing).",
      proposal: "Curriculum vitae, detailed motivation letter, and academic writing sample (essay or bachelor thesis).",
      appFee: "€100 application assessment fee.",
      documents: "High school / undergraduate diplomas, official grade transcripts, academic letter of recommendation, and passport copy."
    },
    opportunities: [
      {
        id: 2874,
        title: "Roosevelt Foundation Honours Merit Scholarship",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "€3,000 to €7,500 per year toward tuition and guaranteed campus accommodation",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "€100 application fee",
        tuition: "Reduces annual statutory/institutional college tuition",
        source: "https://www.ucr.nl/admissions/financial-matters/scholarships",
        desc: "Prestigious merit scholarship offered by the Roosevelt Foundation to top incoming international and EU students who exhibit intellectual curiosity and social engagement.",
        requirements: {
          gpa: "Top 10% academic standing in previous secondary or undergraduate studies",
          ielts: "IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL 100",
          gre: "Not required",
          papers: "Motivation essay (750 words) exploring an interdisciplinary solution to a global challenge",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2875,
        title: "Bachelor of Science / Master Track in Delta Engineering & Water Technology",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "Dutch DUO student finance + Erasmus+ mobility grant eligibility",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "€100 application fee",
        tuition: "€4,250 domestic/EU / €12,800 international per year",
        source: "https://www.ucr.nl/academics/science/engineering",
        desc: "Pioneering engineering program situated in the Zeeland coastal delta, focusing on flood defense infrastructure, saline agriculture, coastal hydrodynamics, and sustainable energy.",
        requirements: {
          gpa: "Secondary or tertiary education diploma with advanced mathematics and physics",
          ielts: "IELTS 7.0 or TOEFL 100",
          gre: "Not required",
          papers: "Motivation letter detailing passion for water engineering and sustainability",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 2876,
        title: "Ph.D. in Coastal Salinization & Climate Resilient Agriculture Fellowship",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "Salaried Dutch doctoral contract: €36,000 - €44,000 per annum with pension and 8.3% holiday allowance",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition for appointed researcher",
        source: "https://www.ucr.nl/research",
        desc: "Four-year doctoral position operated jointly with Utrecht University, evaluating groundwater intrusion of saltwater into polders and cultivating salt-tolerant crop varietals.",
        requirements: {
          gpa: "MSc in Hydrology, Agronomy, Environmental Sciences, or Soil Chemistry with honors",
          ielts: "IELTS 7.0 or equivalent",
          gre: "Not required",
          papers: "Master's thesis report and 3-page research proposal on delta salinization",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2877,
        title: "Oosterschelde Storm Surge Barrier Ecological Impact & Shellfish Reef Study",
        type: "Research",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "€2,300 monthly research salary funded by Zeeland Delta Environmental Grant",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Funded research project",
        source: "https://www.ucr.nl/research/delta-research",
        desc: "Marine ecology field project monitoring tidal energy dissipation, mussel and oyster reef regeneration, and sand starvation dynamics behind the Oosterschelde barrier.",
        requirements: {
          gpa: "Degree in Marine Biology, Aquatic Ecology, or Coastal Geomorphology",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Experience in benthic sampling, acoustic Doppler current profiling (ADCP), or GIS",
          references: "Two academic recommendations"
        }
      },
      {
        id: 2878,
        title: "Zeeland Delta Region Coastal Engineering & Water Governance Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "€1,100 monthly stipend for 5-month placement with Rijkswaterstaat",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited UCR honors curriculum",
        source: "https://www.ucr.nl/academics/internships",
        desc: "Five-month professional internship embedded within the Dutch Ministry of Infrastructure and Water Management (Rijkswaterstaat) or delta engineering consultancies in Zeeland.",
        requirements: {
          gpa: "Current UCR student with minimum 3.2 GPA in Science or Social Sciences",
          ielts: "Fluent English; conversational Dutch an asset",
          gre: "Not required",
          papers: "Updated CV and statement on delta governance interest",
          references: "Faculty academic advisor recommendation"
        }
      },
      {
        id: 2879,
        title: "Eleanor Roosevelt Sustainable Development Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€50,000 - €56,000 per annum salary plus Dutch university pension and benefits",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried university employee",
        source: "https://www.ucr.nl/about-ucr/working-at-ucr",
        desc: "Two-year postdoctoral research appointment exploring regional climate justice, multi-level water governance, and human rights frameworks in coastal communities.",
        requirements: {
          gpa: "PhD in Political Science, Environmental Law, Human Geography, or Sociology within 3 years",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "Minimum 3 published peer-reviewed journal articles",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2880,
        title: "Assistant / Associate Professor in Environmental Data Science & Coastal Modeling",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "environment"],
        funding: "€58,000 - €76,000 annual compensation under Dutch Universities CAO salary scale",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Tenure-track academic faculty appointment",
        source: "https://www.ucr.nl/about-ucr/working-at-ucr/vacancies",
        desc: "Full-time faculty post delivering undergraduate lectures in environmental informatics, python spatial modeling, and advising undergraduate capstone research in Middelburg.",
        requirements: {
          gpa: "PhD in Computational Environmental Science, Geoinformatics, or Civil Engineering",
          ielts: "Native or fluent English instruction capability",
          gre: "Not required",
          papers: "Strong publication record in computational hydrology or remote sensing and proven teaching dedication",
          references: "Three academic reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1251,
        name: "Prof. Dr. Bert van den Brink",
        title: "Dean of University College Roosevelt & Professor of Political and Social Philosophy",
        subject: "social-sciences",
        topics: ["Political Philosophy", "Democratic Theory", "Liberal Arts Education", "Civic Deliberation"],
        source: "https://www.ucr.nl/about-ucr/organization/dean",
        summary: "Prof. van den Brink directs UCR academic leadership, focusing on normative democratic theory, civic engagement, and interdisciplinary liberal arts pedagogy."
      },
      {
        id: 1252,
        name: "Dr. Herman van den Bosch",
        title: "Professor of Urban Innovation & Sustainable Delta Infrastructure",
        subject: "engineering",
        topics: ["Delta Cities", "Smart Urban Infrastructure", "Circular Construction", "Sustainable Urban Design"],
        source: "https://www.ucr.nl/faculty/herman-vandenbosch",
        summary: "Prof. van den Bosch investigates smart delta cities, resilient water governance systems, and circular infrastructure development in sensitive coastal environments."
      },
      {
        id: 1253,
        name: "Dr. Wiebe Bijker",
        title: "Honorary Professor of Science, Technology & Society (STS)",
        subject: "social-sciences",
        topics: ["Social Construction of Technology (SCOT)", "Water Engineering History", "Technological Vulnerability", "Public Policy"],
        source: "https://www.ucr.nl/faculty/wiebe-bijker",
        summary: "Prof. Bijker is a world-renowned STS pioneer who co-developed the Social Construction of Technology framework and analyzes the political culture of coastal flood engineering."
      }
    ]
  },

  // 30. Switzerland: Bern University of Applied Sciences (BFH)
  {
    institution: "Bern University of Applied Sciences",
    shortName: "BFH Switzerland",
    slug: "bern-university-of-applied-sciences",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Bern & Biel/Bienne, Switzerland",
    website: "https://www.bfh.ch",
    sourceRow: 1341,
    headline: "Bern University of Applied Sciences: Wood Engineering, Medical Informatics & Automotive Guide",
    overview: "Bern University of Applied Sciences (BFH - Berner Fachhochschule) is a premier Swiss public university located in the bilingual canton of Bern, internationally celebrated for Europe's leading Institute for Wood Engineering in Biel, digital health and medical informatics, cybersecurity, and automotive engineering.",
    description: "Verified master's degree programs, Swiss Innosuisse research, and admissions guide for Bern University of Applied Sciences in Switzerland.",
    heroEyebrow: "Swiss Public University · Wood Engineering & Medical Informatics Leader",
    tuitionText: "Tuition for Swiss and EU/EEA students is CHF 750 per semester (CHF 1,500 / ~$1,720 USD per year). Tuition for non-EU international students is CHF 950 per semester. Appointed doctoral candidates and scientific collaborators hold salaried Swiss federal employment contracts starting at CHF 60,000.",
    admissions: {
      masters: "Accredited Bachelor's degree from a recognized university or university of applied sciences in engineering, computer science, or forestry/wood science with above-average grades.",
      phd: "Master's degree (M.Sc., M.A.) with high standing; doctoral degrees are conferred cooperatively with Swiss universities (Uni Bern, ETH Zurich, EPFL).",
      language: "German C1 or French C1 for bilingual programs; English C1 (IELTS 7.0 or Cambridge English Advanced) for international Master of Science tracks.",
      proposal: "Curriculum vitae, detailed motivation statement, and portfolio of technical engineering projects.",
      appFee: "CHF 100 administrative application registration fee.",
      documents: "Bachelor's diploma, transcript of grades with ECTS credits, CV, passport copy, and motivation letter."
    },
    opportunities: [
      {
        id: 2881,
        title: "Swiss Confederation Excellence Scholarship & Research Fellowship at BFH",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "CHF 1,920 monthly tax-free living stipend, full tuition waiver, and Swiss health insurance",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "100% waived by Swiss Federal Government",
        source: "https://www.sbfi.admin.ch/scholarships_eng",
        desc: "Federal scholarship granted by the Swiss Confederation for international scientists conducting cooperative doctoral or postdoctoral investigations in engineering or forestry at BFH.",
        requirements: {
          gpa: "Master's degree with highest academic honors (Swiss grade 5.5+ or equivalent)",
          ielts: "English C1 (IELTS 7.0) or German/French C1",
          gre: "Not required",
          papers: "Comprehensive research proposal and written support letter from a BFH hosting professor",
          references: "Two confidential academic recommendation letters"
        }
      },
      {
        id: 2882,
        title: "Master of Science in Wood Technology & Timber Engineering (Biel Campus)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment", "arts-design"],
        funding: "Swiss cantonal tuition subsidies; research assistantships (CHF 2,500/month) available",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "CHF 100 application fee",
        tuition: "CHF 750 per semester (Swiss/EU) / CHF 950 per semester (Non-EU)",
        source: "https://www.bfh.ch/en/studies/master/wood-technology",
        desc: "Europe's foremost master's program in timber engineering and bio-based composites, based at the Biel campus, exploring multi-story timber buildings, adhesive chemistry, and robotic CNC joinery.",
        requirements: {
          gpa: "Bachelor's degree in Wood Engineering, Civil Engineering, Architecture, or Materials Science",
          ielts: "IELTS 6.5 or German/French B2/C1",
          gre: "Not required",
          papers: "Motivation letter detailing structural timber design or composite research interests",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2883,
        title: "SNSF Cooperative Doctoral Position in Medical Informatics & Clinical AI Diagnostics",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        funding: "CHF 53,000 - 58,000 per year under Swiss National Science Foundation (SNSF) salary rates",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition for salaried doctoral research collaborator",
        source: "https://www.bfh.ch/en/research/research-areas/medical-informatics",
        desc: "Four-year cooperative doctoral fellowship conducted jointly with University of Bern Medical School, developing federated machine learning algorithms for multi-hospital EHR data privacy.",
        requirements: {
          gpa: "M.Sc. in Computer Science, Medical Informatics, Biomedical Engineering, or Data Science with honors",
          ielts: "IELTS 7.0 or German C1",
          gre: "Not required",
          papers: "Master's thesis manuscript in medical AI or secure distributed computing",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2884,
        title: "Swiss Innosuisse Autonomous Electric Mountain Transit & Battery Pack Project",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "CHF 67,000 annual research salary plus laboratory prototyping budget",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Fully sponsored by Swiss Innovation Agency",
        source: "https://www.bfh.ch/en/research/research-areas/automotive-engineering",
        desc: "Applied automotive engineering study at the Biel Vehicle Technology Laboratory, developing thermal runaway mitigation and regenerative braking for heavy electric buses operating on steep Alpine roads.",
        requirements: {
          gpa: "Master's degree in Automotive Engineering, Mechatronics, or Electrical Systems",
          ielts: "German or English professional working proficiency",
          gre: "Not required",
          papers: "Demonstrated simulation skills in MATLAB/Simulink or battery electrochemical modeling",
          references: "Two academic or industry letters"
        }
      },
      {
        id: 2885,
        title: "Swiss MedTech & Precision Watchmaking Micro-Manufacturing Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "CHF 3,100 per month for 6-month industrial internship in Biel/Bern",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited BFH Master of Science curriculum",
        source: "https://www.bfh.ch/en/career-services",
        desc: "Six-month professional engineering placement embedded within world-famous precision watchmakers (Swatch Group, Rolex) or surgical instrument manufacturers in the Jura arc region.",
        requirements: {
          gpa: "Enrolled in BFH Master in Engineering, Microtechnology, or Medical Technology",
          ielts: "Fluent English and working German or French",
          gre: "Not required",
          papers: "Technical CV and portfolio of precision mechanical design",
          references: "Faculty course director endorsement"
        }
      },
      {
        id: 2886,
        title: "BFH Institute for Human Centered Engineering Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "biology", "computer-science"],
        funding: "CHF 86,000 - 95,000 per annum salary plus Swiss occupational pension benefits",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried university employee",
        source: "https://www.bfh.ch/en/research/postdoc",
        desc: "Two-year postdoctoral fellowship at the Institute for Human Centered Engineering (HuCE) developing non-invasive optical sensor implants, retinal prosthetics, and robotic assistive exoskeletons.",
        requirements: {
          gpa: "PhD in Biomedical Engineering, Applied Physics, or Electrical Engineering completed within 3 years",
          ielts: "Fluent English and working German",
          gre: "Not required",
          papers: "Minimum 3 first-author papers in recognized biomedical technology or sensor journals",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2887,
        title: "Professor of High-Performance Timber Construction & Structural Mechanics",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "environment", "arts-design"],
        funding: "CHF 145,000 - 175,000 annual salary under Swiss cantonal public salary scales",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Tenured full-time university professorship",
        source: "https://www.bfh.ch/en/about-bfh/jobs",
        desc: "Permanent professorship at the Institute for Timber Construction, Structures and Architecture in Biel, leading applied research in tall timber buildings, structural glulam adhesives, and seismic resistance.",
        requirements: {
          gpa: "Doctorate (PhD) or equivalent distinguished engineering practice in structural timber engineering",
          ielts: "Fluent German and English teaching capability; French is an asset",
          gre: "Not required",
          papers: "Distinguished record of innovative timber structures, patents, and competitive Innosuisse research grants",
          references: "Three international academic references"
        }
      }
    ],
    researchers: [
      {
        id: 1254,
        name: "Prof. Dr. Steffen Franke",
        title: "Head of Institute for Timber Construction, Structures and Architecture",
        subject: "engineering",
        topics: ["Timber Engineering", "Structural Joinery", "Glulam Mechanics", "Tall Timber Structures"],
        source: "https://www.bfh.ch/en/steffen-franke",
        summary: "Prof. Franke is an international authority on structural timber mechanics, developing ductile connection systems and design codes for multi-story wooden skyscrapers."
      },
      {
        id: 1255,
        name: "Prof. Dr. Jörn Kohlhammer",
        title: "Professor of Medical Informatics & Visual Analytics",
        subject: "computer-science",
        topics: ["Visual Analytics", "Medical Data Visualization", "Clinical Decision Support", "Information Systems"],
        source: "https://www.bfh.ch/en/joern-kohlhammer",
        summary: "Prof. Kohlhammer directs research in interactive data visualization for complex clinical workflows, patient trajectories, and genomic variant discovery."
      },
      {
        id: 1256,
        name: "Prof. Dr. Volker M. Koch",
        title: "Head of Institute for Human Centered Engineering (HuCE)",
        subject: "engineering",
        topics: ["Biomedical Engineering", "Sensor Systems", "Medical Signal Processing", "Microengineering"],
        source: "https://www.bfh.ch/en/volker-koch",
        summary: "Prof. Koch directs the HuCE institute, developing wearable medical monitors, optical biosensors, and neural stimulation devices in collaboration with Swiss clinics."
      }
    ]
  }
];
