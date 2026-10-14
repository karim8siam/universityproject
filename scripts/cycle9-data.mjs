// Cycle 9 data: 10 premier research universities across 10 countries
// 70 verified opportunities (IDs 578-647), 30 researcher profiles (IDs 267-296)
// Dates reviewed: 2026-10-14, all deadlines >= 2026-10-14 or null

export const cycle9Universities = [
  // 1. CANADA: Western University (Row 137)
  {
    institution: "Western University",
    shortName: "Western",
    countryId: "canada",
    countryLabel: "Canada",
    location: "London, Ontario, Canada",
    website: "https://www.uwo.ca",
    sourceRow: 137,
    slug: "western-university",
    heroEyebrow: "Canada · Ontario · U15 Research Giant & Home of Ivey Business School · Reviewed 14 October 2026",
    headline: "Western University (University of Western Ontario)",
    description: "Western University guide: Western Graduate Research Scholarships ($24,000+ base funding), PhD in Computer Science, Brain and Mind Institute, and faculty profiles.",
    overview: "Founded in 1878 in London, Ontario, Western University (University of Western Ontario) is a founding member of Canada's U15 group of research-intensive universities. Consistently ranked among the world's top 120 universities, Western is internationally renowned for neuroscience and cognitive imaging at the Western Brain and Mind Institute, world-leading wind engineering at the Boundary Layer Wind Tunnel Laboratory, the renowned Ivey Business School, and musculoskeletal health research. Explore verified graduate degree pathways, guaranteed doctoral base funding packages, and world-class faculty profiles.",
    admissions: {
      masters: "Four-year Bachelor's degree (Honours) from an accredited university with a minimum 70% average (equivalent to B standing or 3.0/4.0 GPA) across the last two years of study; competitive STEM programs typically require 78%+ (B+).",
      phd: "Recognized Master's degree in a relevant discipline with minimum 78% average (B+ or 3.3/4.0 GPA) and demonstrable thesis research capability.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 86 (minimum 20 in each section); higher for Computer Science (IELTS 7.0 / TOEFL 92).",
      proposal: "Comprehensive 2-page statement of academic purpose detailing research questions, methodological approach, and alignment with Western faculty mentors.",
      appFee: "CAD $150 non-refundable application fee submitted via the Western School of Graduate and Postdoctoral Studies portal.",
      documents: "Complete official academic transcripts, curriculum vitae, 2 to 3 academic reference letters, and statement of research intent."
    },
    tuitionText: "Tuition for research-based graduate students is offset by departmental funding packages and scholarships. For full-time doctoral students in good standing, Western guarantees minimum annual funding of CAD $24,000 to $28,000 per year for four years (comprising Western Graduate Research Scholarships, graduate teaching assistantships, and supervisor research stipends) plus international tuition differential awards.",
    opportunities: [
      {
        id: 578,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "biology", "chemistry"],
        type: "Scholarship",
        title: "Western Graduate Research Scholarship (WGRS) & Doctoral Fellowships",
        source: "https://grad.uwo.ca/finances/funding/index.html",
        funding: "Fully funded: Annual financial package of CAD $24,000 to $30,000/year for 4 years plus full international tuition fee differential offset",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual departmental funding allocation deadline for Fall intake)",
        fee: "CAD $150 graduate application fee",
        tuition: "Differential tuition covered through university scholarship awards.",
        requirements: {
          gpa: "First-class academic standing (minimum 80% or 3.7/4.0 GPA) in previous university degree programs.",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5 or TOEFL iBT 92.",
          gre: "Recommended for international applicants with non-Canadian credentials.",
          papers: "Demonstrated academic excellence, research publications, or strong Master's thesis record.",
          references: "Two academic referee appraisals submitted via the graduate portal."
        },
        desc: "Western's premier merit-based doctoral funding guarantee, providing guaranteed living stipends and full tuition fee offsets to domestic and international doctoral scholars across all disciplines."
      },
      {
        id: 579,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Western PhD in Computer Science (Thesis-Stream)",
        source: "https://www.csd.uwo.ca/graduate/future_students/phd_program.html",
        funding: "Guaranteed minimum annual financial package of CAD $25,500/year for 4 years via teaching assistantships and research grants",
        status: "open-program",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Fall admission cycle deadline for international candidates)",
        fee: "CAD $150 international application fee",
        tuition: "Offset by departmental base funding packages.",
        requirements: {
          gpa: "Master's degree in Computer Science, Software Engineering, or Mathematics with at least a 78% (B+) average.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 92.",
          gre: "Optional but encouraged for international degree holders.",
          papers: "Master's thesis or peer-reviewed publications in computing.",
          references: "Two academic referee letters."
        },
        desc: "Four-year research doctorate exploring machine learning, medical image analysis, bioinformatics, distributed cloud systems, and theoretical foundations of computation."
      },
      {
        id: 580,
        subject: "biology",
        subjects: ["biology", "physics"],
        type: "PhD",
        title: "Western PhD in Neuroscience at the Brain and Mind Institute",
        source: "https://www.uwo.ca/neuroscience/graduate/index.html",
        funding: "Guaranteed minimum funding of CAD $26,000/year for 4 years plus lab equipment grants and conference travel awards",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (International applicant deadline)",
        fee: "CAD $150 application fee",
        tuition: "Subsidized through graduate research stipends.",
        requirements: {
          gpa: "Master's degree or 4-year Honours Bachelor's in neuroscience, psychology, biology, or biomedical engineering with minimum 80% (A-) average.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 92.",
          gre: "Not required.",
          papers: "Demonstrated laboratory experience in neuroimaging (fMRI), cognitive electrophysiology, or behavioral models.",
          references: "Two academic letters of recommendation."
        },
        desc: "Interdisciplinary doctoral program based at the Western Brain and Mind Institute using state-of-the-art 3T and 7T MRI scanners to study cognitive development, memory, and neurodegeneration."
      },
      {
        id: 581,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        title: "Western Master of Engineering Science (MESc) in Civil & Wind Engineering",
        source: "https://www.eng.uwo.ca/civil/graduate/future_students/mesc.html",
        funding: "Guaranteed minimum funding of CAD $22,000/year for 2 years (thesis stream)",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Fall intake deadline)",
        fee: "CAD $150 application fee",
        tuition: "Offset through graduate research assistantships.",
        requirements: {
          gpa: "Four-year Bachelor of Engineering with minimum 78% average over the last two years.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each section) or TOEFL iBT 86.",
          gre: "Not required.",
          papers: "Undergraduate capstone design or structural mechanics laboratory experience.",
          references: "Two academic letters of recommendation."
        },
        desc: "Two-year research-based Master's degree working directly with the Boundary Layer Wind Tunnel Laboratory and the WindEEE Dome, studying severe storm effects on high-rise structures and bridges."
      },
      {
        id: 582,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        title: "Western Robarts Research Institute Summer Student Research Fellowship",
        source: "https://www.robarts.ca/education/summer_student_program.html",
        funding: "Living stipend of CAD $6,500 for a 16-week mentored biomedical research placement",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Summer cohort application deadline)",
        fee: "No application fee",
        tuition: "No tuition charges; direct studentship.",
        requirements: {
          gpa: "Enrolled in 2nd or 3rd year undergraduate biology, medical biophysics, or biochemistry with minimum 75% average.",
          ielts: "Demonstrated English proficiency.",
          gre: "Not required.",
          papers: "Coursework in cellular biology, physiology, or immunology.",
          references: "One professor reference letter."
        },
        desc: "Four-month competitive summer research placement at Robarts Research Institute conducting translational research in cardiovascular health, medical imaging, and neurobiology."
      },
      {
        id: 583,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        title: "Western Master of Science (MSc) in Management (Business Analytics Track)",
        source: "https://www.ivey.uwo.ca/msc/",
        funding: "Ivey Global Leader Scholarships worth CAD $10,000 to $25,000",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (International Round 2 deadline)",
        fee: "CAD $150 application fee",
        tuition: "CAD $58,500 for the full 16-month program (international).",
        requirements: {
          gpa: "Undergraduate degree with strong academic record (B+ / 78% minimum) with quantitative coursework.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "GMAT or GRE required (competitive GMAT 650+).",
          papers: "Personal video questions and written essays.",
          references: "Two academic or professional reference letters."
        },
        desc: "Direct-entry 16-month Master of Science at the world-renowned Ivey Business School combining case-method business decision-making with big data predictive analytics."
      },
      {
        id: 584,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Job",
        title: "Western Research Associate in Advanced Functional Materials & Clean Energy",
        source: "https://www.uwo.ca/chem/",
        funding: "Salaried academic appointment: CAD $58,000 to $68,000/year plus pension and benefits",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Departmental recruitment review)",
        fee: "Free employment application via Western Careers",
        tuition: "Salaried staff position; no tuition fees.",
        requirements: {
          gpa: "PhD in Chemistry, Materials Science, or Chemical Engineering.",
          ielts: "Fluent written and spoken English proficiency.",
          gre: "Not required.",
          papers: "First-author publications in solid-state lithium batteries, synchrotrons, or nanomaterials.",
          references: "Three professional reference letters."
        },
        desc: "Two-year full-time research position in the Department of Chemistry developing advanced operando synchrotron characterization methods for next-generation solid-state battery interfaces."
      }
    ],
    researchers: [
      {
        id: 267,
        subject: "biology",
        name: "Dr. Adrian Owen",
        title: "Professor of Cognitive Neuroscience and Imaging & Canada Excellence Research Chair",
        university: "Western University",
        country: "Canada",
        topics: ["Consciousness", "fMRI Neuroimaging", "Traumatic Brain Injury", "Cognitive Neuroscience"],
        source: "https://www.uwo.ca/bmi/people/owen.html",
        summary: "Dr. Owen is an internationally acclaimed neuroscientist who pioneered the use of functional neuroimaging to detect conscious awareness and establish communication with vegetative state patients."
      },
      {
        id: 268,
        subject: "engineering",
        name: "Dr. Horia Hangan",
        title: "Professor of Wind Engineering & Founding Director of WindEEE Research Institute",
        university: "Western University",
        country: "Canada",
        topics: ["Wind Engineering", "Tornado Simulators", "Aerodynamics", "Fluid Mechanics"],
        source: "https://www.eng.uwo.ca/civil/faculty/hangan_h/index.html",
        summary: "Dr. Hangan led the creation of the WindEEE Dome—the world's first hexagonal wind tunnel chamber capable of generating physical tornadoes, downbursts, and gust fronts at full scale."
      },
      {
        id: 269,
        subject: "computer-science",
        name: "Dr. Charles X. Ling",
        title: "Professor of Computer Science & Science Distinguished Research Professor",
        university: "Western University",
        country: "Canada",
        topics: ["Machine Learning", "Data Mining", "Cognitive Robotics", "Explainable AI"],
        source: "https://www.csd.uwo.ca/people/faculty/charles_ling.html",
        summary: "Dr. Ling is an IEEE Fellow and leading authority in cost-sensitive learning, active learning, and data mining, having authored seminal textbooks and algorithms deployed in commercial search systems."
      }
    ]
  },

  // 2. AUSTRALIA: RMIT University (Row 177)
  {
    institution: "RMIT University",
    shortName: "RMIT",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Melbourne, Victoria, Australia",
    website: "https://www.rmit.edu.au",
    sourceRow: 177,
    slug: "rmit-university",
    heroEyebrow: "Australia · Victoria · Global Leader in Design, Tech & Applied Research · Reviewed 14 October 2026",
    headline: "RMIT University (Melbourne City Campus)",
    description: "RMIT University guide: RMIT Vice-Chancellor's PhD Scholarships (AUD $35,000+ stipend), Master's in Artificial Intelligence, Blockchain, and faculty profiles.",
    overview: "Founded in 1887 as the Working Men's College of Melbourne, RMIT University (Royal Melbourne Institute of Technology) is one of Australia's premier institutions of technology and design. Ranked #1 in Australia and #18 globally for Art and Design (QS) and renowned for aerospace, computer science, and blockchain innovation, RMIT operates vibrant global campuses anchored in the heart of Melbourne's central business district. Explore verified graduate degrees, fully funded doctoral scholarships, and world-class faculty profiles.",
    admissions: {
      masters: "Recognized Bachelor's degree from an accredited institution with a minimum grade point average (GPA) of 2.5/4.0 or 60%+ average mark.",
      phd: "Four-year Bachelor's degree with First Class Honours (H1, 80%+ WAM) or Master's degree with a significant research dissertation component graded at H1/80%+.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-test) or TOEFL iBT 79 (reading 13, listening 12, speaking 18, writing 21); higher for Law and Communication (IELTS 7.0).",
      proposal: "Comprehensive 1,000 to 2,000-word research proposal describing background, methodology, objectives, and confirmed RMIT academic supervisor alignment.",
      appFee: "AUD $100 international application fee via the RMIT online portal; fee waivers available for nominated scholarship candidates.",
      documents: "Certified academic transcripts, degree certificates, CV, research proposal, and contact details for two academic referees."
    },
    tuitionText: "International graduate research candidates are supported by competitive scholarships. Recipients of the RMIT Research Stipend Scholarship (RRSS) or RTP receive a 100% full international tuition fee waiver, a tax-free living allowance of AUD $34,841 per year for up to 3.5 years, single overseas student health cover (OSHC), and a relocation grant.",
    opportunities: [
      {
        id: 585,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "arts-design"],
        type: "Scholarship",
        title: "RMIT Vice-Chancellor's PhD Excellence Scholarships",
        source: "https://www.rmit.edu.au/students/careers-opportunities/scholarships/research",
        funding: "Fully funded: Living stipend of AUD $37,000/year for 3.5 years plus AUD $5,000 annual research grant and 100% tuition fee waiver",
        status: "open-scholarship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Annual international postgraduate research scholarship closing date)",
        fee: "Waived for scholarship applicants",
        tuition: "Full 100% international tuition waiver (worth AUD $46,000/year).",
        requirements: {
          gpa: "First Class Honours (H1) or equivalent international GPA (minimum 3.8/4.0 or WAM 80%+).",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 79.",
          gre: "Not required.",
          papers: "Demonstrated research excellence (first-author publications, conference papers, or Honours/Master's thesis).",
          references: "Two academic referee reports."
        },
        desc: "RMIT's most prestigious doctoral research award, providing top living stipends, professional development allowances, and tuition waivers for high-achieving domestic and international researchers."
      },
      {
        id: 586,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "RMIT Master of Artificial Intelligence",
        source: "https://www.rmit.edu.au/study-with-us/levels-of-study/postgraduate-study/masters-by-coursework/mc270",
        funding: "RMIT Academic Excellence Scholarships worth up to AUD $10,000 fee contribution",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Semester 1 February intake)",
        fee: "AUD $100 application fee",
        tuition: "AUD $44,160/year for international students.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Software Engineering, or closely related STEM discipline with minimum GPA 2.0/4.0 (3.0+ competitive).",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 79.",
          gre: "Not required.",
          papers: "Demonstrated coursework in programming (Python/Java), data structures, and linear algebra.",
          references: "Academic transcript and statement of intent."
        },
        desc: "Two-year industry-aligned Master's degree teaching deep learning, natural language processing, computer vision, autonomous agents, and ethical AI deployment."
      },
      {
        id: 587,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "PhD",
        title: "RMIT PhD in Aerospace and Aviation Engineering",
        source: "https://www.rmit.edu.au/study-with-us/levels-of-study/postgraduate-study/higher-degrees-by-research/dr216",
        funding: "RTP-equivalent doctoral scholarship: AUD $34,841/year tax-free for 3.5 years plus full tuition sponsorship",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Round 1 international research intake)",
        fee: "AUD $100 application fee",
        tuition: "Fully sponsored through RTP international fee offsetting.",
        requirements: {
          gpa: "Bachelor's degree with First Class Honours or Master's by Research in Aerospace, Mechanical, or Materials Engineering.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 79.",
          gre: "Not required.",
          papers: "Demonstrated research or industry experience in aerodynamics, composite materials, or UAV avionics.",
          references: "Two academic referee reports."
        },
        desc: "Three to four-year research doctorate exploring autonomous unmanned aerial vehicles (UAVs), composite aerostructures, computational fluid dynamics, and space systems."
      },
      {
        id: 588,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Research",
        title: "RMIT ARC Centre of Excellence in Exciton Science Postdoctoral Fellow",
        source: "https://excitonscience.com/careers",
        funding: "Salaried academic Level A/B appointment: AUD $92,000 to $108,000/year plus 17% superannuation",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Salaried research post; no tuition.",
        requirements: {
          gpa: "PhD in Physics, Materials Science, or Physical Chemistry.",
          ielts: "Fluent professional English communication.",
          gre: "Not required.",
          papers: "Extensive publications in ultrafast laser spectroscopy, exciton dynamics, or solar cell materials.",
          references: "Three professional reference letters."
        },
        desc: "Two-year postdoctoral position in the ARC Centre of Excellence in Exciton Science developing next-generation photovoltaic materials and light-emitting semiconductor devices."
      },
      {
        id: 589,
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Master's",
        title: "RMIT Master of Animation, Games and Interactivity (MAGI)",
        source: "https://www.rmit.edu.au/study-with-us/levels-of-study/postgraduate-study/masters-by-coursework/mc222",
        funding: "RMIT School of Design Merit Scholarships worth up to AUD $10,000",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Semester 1 intake)",
        fee: "AUD $100 application fee",
        tuition: "AUD $40,320/year.",
        requirements: {
          gpa: "Bachelor's degree in any field with creative portfolio submission.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 79.",
          gre: "Not required.",
          papers: "Digital portfolio showcasing 3D animation, interactive gameplay prototypes, or digital art.",
          references: "Artist statement and resume."
        },
        desc: "Ranked among the world's top 10 animation schools, this two-year studio-based Master's degree trains directors, VR creators, and technical artists in cutting-edge interactive narrative design."
      },
      {
        id: 590,
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Internship",
        title: "RMIT Centre for Urban Research (CUR) Summer Sustainability Fellowship",
        source: "https://www.rmit.edu.au/research/centres-collaborations/urban-research",
        funding: "Living bursary of AUD $4,000 for an 8-week structured urban research project",
        status: "open-program",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Summer vacation scholarship intake)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Current 3rd year undergraduate or Honours student with minimum WAM 70%.",
          ielts: "English communication.",
          gre: "Not required.",
          papers: "Coursework in urban planning, environmental geography, or circular economy.",
          references: "One academic tutor letter."
        },
        desc: "Eight-week summer research placement investigating climate resilience in urban microclimates, urban biodiversity conservation, and zero-carbon building transitions in Melbourne."
      },
      {
        id: 591,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Job",
        title: "RMIT Blockchain Innovation Hub Postdoctoral Research Fellow",
        source: "https://www.rmit.edu.au/blockchain-innovation-hub",
        funding: "Academic Level A/B salary: AUD $90,000 to $105,000/year plus 17% superannuation employer contribution",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Staff position; no tuition fees.",
        requirements: {
          gpa: "PhD in Institutional Economics, Cryptofinance, or Information Systems.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Demonstrated peer-reviewed publications in tokenomics, decentralized autonomous organizations (DAOs), or blockchain governance.",
          references: "Three academic reference contacts."
        },
        desc: "Two-year full-time research position at the world-renowned RMIT Blockchain Innovation Hub studying decentralized governance, smart contract institutions, and digital asset market structure."
      }
    ],
    researchers: [
      {
        id: 270,
        subject: "engineering",
        name: "Dr. Elena Pirogova",
        title: "Professor of Biomedical Engineering & Associate Dean of Engineering",
        university: "RMIT University",
        country: "Australia",
        topics: ["BioMEMS", "Therapeutic Ultrasound", "Biosensors", "Wound Healing Technologies"],
        source: "https://www.rmit.edu.au/contact/staff-contacts/academic-staff/p/pirogova-professor-elena",
        summary: "Dr. Pirogova is an internationally recognized biomedical engineer leading research into bio-electromagnetics, micro-nanoscale biosensors, and acoustic wave devices for rapid wound regeneration."
      },
      {
        id: 271,
        subject: "social-sciences",
        name: "Dr. Jason Potts",
        title: "Distinguished Professor of Economics & Director of the RMIT Blockchain Innovation Hub",
        university: "RMIT University",
        country: "Australia",
        topics: ["Cryptoeconomics", "Evolutionary Economics", "Blockchain Governance", "Innovation Economics"],
        source: "https://www.rmit.edu.au/contact/staff-contacts/academic-staff/p/potts-professor-jason",
        summary: "Dr. Potts is an internationally celebrated economist who co-founded the RMIT Blockchain Innovation Hub, having authored foundational treatises on institutional cryptoeconomics and technological evolution."
      },
      {
        id: 272,
        subject: "computer-science",
        name: "Dr. Mark Sanderson",
        title: "Professor of Computer Science & Lead of Information Retrieval and Search Group",
        university: "RMIT University",
        country: "Australia",
        topics: ["Information Retrieval", "Search Engine Evaluation", "Text Mining", "Voice Search"],
        source: "https://www.rmit.edu.au/contact/staff-contacts/academic-staff/s/sanderson-professor-mark",
        summary: "Dr. Sanderson is an ACM SIGIR Academy inductee and world-renowned authority on search engine evaluation, interactive information retrieval, and test collections for web search architectures."
      }
    ]
  },

  // 3. GERMANY: University of Göttingen (Row 405)
  {
    institution: "University of Göttingen",
    shortName: "Uni Göttingen",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Göttingen, Lower Saxony, Germany",
    website: "https://www.uni-goettingen.de",
    sourceRow: 405,
    slug: "university-of-goettingen",
    heroEyebrow: "Germany · Lower Saxony · Historic University of 45+ Nobel Laureates · Reviewed 14 October 2026",
    headline: "University of Göttingen (Georg-August-Universität)",
    description: "University of Göttingen guide: Zero tuition fees, GGNB Molecular Biology Fellowships, Computer Science degrees, and faculty profiles.",
    overview: "Founded in 1737 by King George II of Great Britain and Elector of Hanover, the University of Göttingen (Georg-August-Universität Göttingen) is one of Germany's most historic and renowned institutions of higher education. Associated with over 45 Nobel laureates—including Max Born, Werner Heisenberg, Max Planck, and James Franck—and legendary mathematicians like Carl Friedrich Gauss and David Hilbert, Göttingen offers virtually tuition-free education, world-renowned graduate schools, and state-of-the-art facilities in partnership with four Max Planck Institutes. Explore verified opportunities, admissions guidelines, and faculty leadership.",
    admissions: {
      masters: "Recognized Bachelor's degree (180 ECTS) in relevant subject with above-average German grade equivalent (minimum 2.5 or better on the German 1-5 scale).",
      phd: "Completed Master's degree (120 ECTS) with a research thesis graded at least 'good' (2.0 or better) and formal written endorsement by a Göttingen faculty supervisor.",
      language: "Academic IELTS 6.5 to 7.0 overall or TOEFL iBT 90+ for English-taught graduate programs; TestDaF 4x4 or DSH-2 for German-taught degrees.",
      proposal: "Formal 3 to 5-page research proposal detailing research objectives, methodology, preliminary literature review, and academic work schedule.",
      appFee: "€0 application fee (no application fee charged by the University of Göttingen).",
      documents: "Certified academic transcripts, degree certificates, diploma supplements, CV, motivation letter, and two academic recommendation letters."
    },
    tuitionText: "Public universities in Lower Saxony charge ZERO tuition fees (€0 tuition) for both domestic and international students in regular Bachelor's, Master's, and doctoral programs. Students pay only a nominal semester administration contribution (Semesterbeitrag) of approximately €390 per semester, which includes a free regional train ticket across Lower Saxony and parts of Germany. Doctoral candidates are employed on salaried research contracts (TV-L E13, 65%-100%, approx. €34,000 to €52,000/year gross).",
    opportunities: [
      {
        id: 592,
        subject: "biology",
        subjects: ["biology", "chemistry", "physics"],
        type: "Scholarship",
        title: "Göttingen Graduate Center for Neurosciences, Biophysics, and Molecular Biosciences (GGNB) Fellowships",
        source: "https://www.uni-goettingen.de/en/56640.html",
        funding: "Fully funded: Salaried TV-L E13 research contract (€34,000 to €42,000/year gross) plus zero tuition fees and dedicated travel stipends for 3 to 4 years",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual international GGNB doctoral application deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Outstanding Master's or 4-year Bachelor's degree in Molecular Biology, Biophysics, Biochemistry, or Medicine.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 95.",
          gre: "Not required.",
          papers: "Demonstrated laboratory research experience and strong scientific motivation.",
          references: "Two confidential academic letters of recommendation."
        },
        desc: "Joint excellence doctoral program run in collaboration with four Max Planck Institutes and the German Primate Center, providing world-class training in molecular biology and biophysics."
      },
      {
        id: 593,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Uni Göttingen Master of Science (MSc) in Applied Data Science (English-taught)",
        source: "https://www.uni-goettingen.de/en/569733.html",
        funding: "Tuition-free program; Lower Saxony state merit grants and student assistantships available",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Non-EU international applicant deadline for Fall intake)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees; nominal €390 semester social fee.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Data Science, Mathematics, or a quantitative domain with at least 60 ECTS in informatics/statistics.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Programming skills in Python/R and multivariable calculus preparation.",
          references: "Academic curriculum vitae and transcript."
        },
        desc: "Two-year English-taught Master's degree combining scalable machine learning, statistical inference, data privacy, and applied domain specializations in bioinformatics or digital humanities."
      },
      {
        id: 594,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "PhD",
        title: "Uni Göttingen PhD in Physics & Max Planck Particle Astrophysics",
        source: "https://www.uni-goettingen.de/en/111812.html",
        funding: "Salaried TV-L E13 contract (€34,000 to €52,000/year gross) with full social benefits for 3 to 4 years",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling admissions; funding allocation deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Master's degree in Physics with high honors in quantum field theory, particle physics, or astrophysics.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Recommended for non-EU degrees.",
          papers: "Master's thesis or publication in ATLAS experiment data analysis or dark matter searches.",
          references: "Two academic referee letters."
        },
        desc: "Doctoral research program at the II. Institute of Physics collaborating directly with CERN's ATLAS experiment and the Max Planck Institute for Solar System Research."
      },
      {
        id: 595,
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "PhD",
        title: "Uni Göttingen PhD in Molecular Chemistry & Catalysis",
        source: "https://www.uni-goettingen.de/en/61582.html",
        funding: "Fully funded research contract: TV-L E13 65% (€34,000/year gross) plus lab funding",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Departmental recruitment deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Master of Science in Chemistry or Chemical Biology with German grade 2.0 or better.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Laboratory experience in organometallic synthesis, homogeneous catalysis, or bioinorganic spectroscopy.",
          references: "Two academic references."
        },
        desc: "Three to four-year doctoral training program in the Faculty of Chemistry developing earth-abundant metal catalysts, C-H bond activation, and green synthesis methodologies."
      },
      {
        id: 596,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        title: "Uni Göttingen Master of Science (MSc) in Development Economics (English-taught)",
        source: "https://www.uni-goettingen.de/en/214152.html",
        funding: "DAAD EPOS Full Scholarships covering monthly living allowance of €934/month and travel subsidies",
        status: "open-program",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (DAAD EPOS scholarship application deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Bachelor's degree in economics or closely related field with at least 18 ECTS in mathematics/statistics and 60 ECTS in economics.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "GRE General test recommended for international applicants.",
          papers: "Demonstrated commitment to empirical development analysis.",
          references: "Two letters of recommendation."
        },
        desc: "Germany's leading two-year Master's degree in development economics, offering rigorous training in econometric impact evaluation, microfinance, rural poverty alleviation, and climate shocks."
      },
      {
        id: 597,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        title: "Göttingen Forest Ecology and Agroforestry Summer Research Internship",
        source: "https://www.uni-goettingen.de/en/72493.html",
        funding: "Monthly stipend of €1,000 plus field station accommodation for an 8-week summer research placement",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer intake deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Enrolled in undergraduate or early Master's studies in forest sciences, ecology, or environmental management.",
          ielts: "English communication.",
          gre: "Not required.",
          papers: "Demonstrated interest in biodiversity conservation and tree physiology under drought stress.",
          references: "One academic tutor letter."
        },
        desc: "Two-month field research placement in the Faculty of Forest Sciences investigating temperate canopy microclimates and root-soil microbial interactions."
      },
      {
        id: 598,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Job",
        title: "Uni Göttingen Postdoctoral Research Associate in Solid-State NMR Spectroscopy",
        source: "https://www.uni-goettingen.de/en/stellenangebote",
        funding: "Salaried TV-L E13 academic position: €48,000 to €54,000/year gross with full benefits",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Staff position; no tuition fees.",
        requirements: {
          gpa: "PhD in Chemistry, Biophysics, or Materials Science.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Demonstrated first-author publications in ultra-high field solid-state NMR of membrane proteins or battery materials.",
          references: "Three professional reference contacts."
        },
        desc: "Two-year postdoctoral position utilizing Göttingen's world-class 1.2 GHz NMR spectrometer facilities to resolve complex membrane protein assemblies and polymer electrolyte interfaces."
      }
    ],
    researchers: [
      {
        id: 273,
        subject: "physics",
        name: "Dr. Stefan W. Hell",
        title: "Director at Max Planck Institute for Multidisciplinary Sciences & Honorary Professor of Physics",
        university: "University of Göttingen",
        country: "Germany",
        topics: ["STED Microscopy", "Super-Resolution Imaging", "Nanophotonics", "MINFLUX"],
        source: "https://www.mpinat.mpg.de/hell",
        summary: "Dr. Hell was awarded the 2014 Nobel Prize in Chemistry for the development of super-resolved fluorescence microscopy (STED), shattering the Abbe diffraction barrier of light."
      },
      {
        id: 274,
        subject: "chemistry",
        name: "Dr. Lutz Ackermann",
        title: "Professor of Organic Chemistry & Director of the Friedrich Wöhler Research Institute for Sustainable Chemistry",
        university: "University of Göttingen",
        country: "Germany",
        topics: ["C-H Activation", "Electrochemical Catalysis", "Late-Stage Functionalization", "Green Chemistry"],
        source: "https://www.uni-goettingen.de/en/50118.html",
        summary: "Dr. Ackermann is a Gottfried Wilhelm Leibniz Prize laureate and world authority in organic synthesis, pioneering transition metal-catalyzed and electrocatalytic C-H activation for sustainable pharmaceuticals."
      },
      {
        id: 275,
        subject: "social-sciences",
        name: "Dr. Stephan Klasen",
        title: "Chair of Development Economics & Founder of Courant Research Centre",
        university: "University of Göttingen",
        country: "Germany",
        topics: ["Poverty Measurement", "Gender Inequality", "Development Economics", "Missing Women"],
        source: "https://www.uni-goettingen.de/en/64756.html",
        summary: "Dr. Klasen was an internationally acclaimed development economist and lead investigator in global poverty, gender inequality, and the economics of demographic change at Göttingen."
      }
    ]
  },

  // 4. ITALY: University of Padua (Row 542 / Row 513)
  {
    institution: "University of Padua",
    shortName: "UniPadova",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Padua, Veneto, Italy",
    website: "https://www.unipd.it",
    sourceRow: 542,
    slug: "university-of-padua",
    heroEyebrow: "Italy · Veneto · Founded 1222 & Galileo's Alma Academic Home · Reviewed 14 October 2026",
    headline: "University of Padua (Università degli Studi di Padova)",
    description: "University of Padua guide: Galileo Galilei PhD Fellowships (€16,290+ stipend + zero tuition), Department of Information Engineering, and faculty profiles.",
    overview: "Founded in 1222, the University of Padua (Università degli Studi di Padova - UniPD) is the world's fifth-oldest surviving university and second-oldest in Italy. Renowned historically as the academic home where Galileo Galilei taught physics and astronomy for 18 years, and where Elena Cornaro Piscopia became the first woman in history to receive a PhD in 1678, Padua is today one of Italy's premier research giants, excelling in quantum communication, robotics, astrophysics, human rights, and biomedical sciences. Explore verified graduate degrees, fully funded doctoral scholarships, and world-class faculty profiles.",
    admissions: {
      masters: "Bachelor's degree (Laurea or foreign equivalent, minimum 180 ECTS) in a relevant subject area with an above-average academic transcript (typically minimum 70%+ or 3.0/4.0 GPA).",
      phd: "Master's degree (Laurea Magistrale or equivalent 120 ECTS post-bachelor degree) with excellent academic marks, strong thesis research background, and detailed research proposal.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 85+ for English-taught graduate programs; CEFR B2 certification.",
      proposal: "Comprehensive 2 to 4-page research proposal detailing state of the art, research objectives, methodology, and prospective UniPadova department alignment.",
      appFee: "€30 application fee for Master's and PhD programs via the UniPadova online portal.",
      documents: "Official academic transcripts with certified translations, curriculum vitae, statement of purpose, two letters of recommendation, and research proposal."
    },
    tuitionText: "Doctoral students receiving University of Padua PhD scholarships pay ZERO tuition fees (€0 tuition) and receive a guaranteed tax-free living stipend of €16,290 per year (increased by 50% during research visits abroad) plus an annual research budget of €1,629 to €2,443. For Master's students, tuition is income-based (up to €2,700/year for non-EU students), and Padua International Excellence Scholarships provide full tuition waivers plus a €8,000/year living allowance.",
    opportunities: [
      {
        id: 599,
        subject: "physics",
        subjects: ["physics", "engineering", "computer-science"],
        type: "Scholarship",
        title: "Padua International PhD Scholarships in Physics & Quantum Technologies",
        source: "https://www.dfa.unipd.it/didattica/dottorati-di-ricerca/",
        funding: "Fully funded: Annual tax-free stipend of €16,290/year for 3 years plus 50% allowance increase for overseas research, €1,600/year travel grant, and 100% tuition waiver",
        status: "open-scholarship",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Annual international doctoral call deadline)",
        fee: "€30 application fee",
        tuition: "Full 100% tuition fee waiver for scholarship recipients.",
        requirements: {
          gpa: "Master of Science in Physics, Astronomy, or Applied Mathematics with high academic honors.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Master's thesis in quantum optics, condensed matter, or particle physics.",
          references: "Two academic referee letters."
        },
        desc: "Prestigious doctoral scholarships in the Department of Physics and Astronomy 'Galileo Galilei' exploring quantum communication networks, satellite quantum cryptography, and dark matter detection."
      },
      {
        id: 600,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "UniPadova Master of Science (MSc) in Computer Engineering (English-taught)",
        source: "https://www.dei.unipd.it/en/master-degree-computer-engineering",
        funding: "Padua International Excellence Scholarships covering full tuition and €8,000/year living stipend",
        status: "open-program",
        deadline: "2027-03-08",
        deadlineText: "March 8, 2027 (Non-EU international admissions call)",
        fee: "€30 application fee",
        tuition: "€1,000 to €2,700/year (fully waived for scholarship recipients).",
        requirements: {
          gpa: "Bachelor's degree in Computer Engineering, Computer Science, or Electrical Engineering with minimum 70% average.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Demonstrated coursework in computer architecture, operating systems, algorithms, and networks.",
          references: "Academic CV and motivation statement."
        },
        desc: "Two-year English-taught Master's program at the Department of Information Engineering (DEI) covering artificial intelligence, cloud architectures, cyber-physical robotics, and internet of things."
      },
      {
        id: 601,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        title: "UniPadova PhD in Information Engineering (DEI) & Robotics",
        source: "https://www.dei.unipd.it/en/phd-program",
        funding: "Guaranteed 3-year fellowship: €16,290/year stipend, full tuition waiver, and dedicated research travel budget",
        status: "open-program",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Annual doctoral intake deadline)",
        fee: "€30 application fee",
        tuition: "100% tuition waived.",
        requirements: {
          gpa: "Master's degree in Engineering, Computer Science, Telecommunications, or Bioengineering.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Demonstrated technical skills in control theory, wireless systems, or biomedical signal processing.",
          references: "Two academic referee letters."
        },
        desc: "Three-year research doctorate exploring autonomous mobile robots, wearable rehabilitation robotics, 6G wireless communication systems, and photonic sensors."
      },
      {
        id: 602,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "UniPadova PhD in Biosciences and Molecular Medicine",
        source: "https://www.biologia.unipd.it/en/educational-offer/phd-courses/",
        funding: "Fully funded: Annual stipend of €16,290/year plus laboratory research budget and full tuition waiver",
        status: "open-program",
        deadline: "2027-05-20",
        deadlineText: "May 20, 2027 (Doctoral admissions cycle)",
        fee: "€30 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Master's degree in Molecular Biology, Genetics, Biotechnology, or Medicine with honors.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Laboratory research experience in mitochondrial biology, structural biochemistry, or developmental genetics.",
          references: "Two letters of recommendation."
        },
        desc: "Doctoral training program in the Department of Biology and Venetian Institute of Molecular Medicine (VIMM) investigating mitochondrial dynamics, cell metabolism, and muscle dystrophy therapies."
      },
      {
        id: 603,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "UniPadova Master of Arts (MA) in Human Rights and Multi-Level Governance",
        source: "https://unipd-centrodirittiumani.it/en/attivita/Master-degree-Human-Rights-and-Multi-level-Governance/46",
        funding: "Veneto Region Student Support Scholarships covering full tuition and accommodation in Padua",
        status: "open-program",
        deadline: "2027-03-08",
        deadlineText: "March 8, 2027 (International applicant deadline)",
        fee: "€30 application fee",
        tuition: "€1,000 - €2,700/year (scholarship eligible).",
        requirements: {
          gpa: "Bachelor's degree in political science, law, international relations, or sociology with minimum 3.0/4.0 GPA.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Statement of purpose addressing international humanitarian law or refugee protection.",
          references: "Two academic letters."
        },
        desc: "Renowned two-year English-taught Master's program at the 'Antonio Papisca' Human Rights Centre preparing experts for the United Nations, European Union institutions, and international human rights NGOs."
      },
      {
        id: 604,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        title: "Padua Botanical Garden (Orto Botanico) Summer Biodiversity Traineeship",
        source: "https://ortobotanico1545.it/",
        funding: "Stipend of €1,000 for a 6-week botanical and biodiversity conservation internship",
        status: "open-program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Summer cohort deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Enrolled in undergraduate or Master's studies in plant biology, ecology, or agricultural sciences.",
          ielts: "English communication.",
          gre: "Not required.",
          papers: "Demonstrated interest in plant taxonomy and germplasm preservation.",
          references: "One professor reference letter."
        },
        desc: "Six-week research placement at the world's oldest university botanical garden (UNESCO World Heritage Site since 1545), investigating rare plant seed banking and Alpine flora responses to climate change."
      },
      {
        id: 605,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Job",
        title: "UniPadova Senior Postdoctoral Fellow in Mitochondrial Calcium Signalling at VIMM",
        source: "https://www.vimm.it/jobs/",
        funding: "Salaried research contract (Assegno di Ricerca): €32,000 to €38,000/year net plus Italian social security",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Staff position; no tuition.",
        requirements: {
          gpa: "PhD in Biochemistry, Molecular Biology, or Physiology.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "First-author publications in mitochondrial physiology, calcium channels, or cardiac metabolism.",
          references: "Three professional reference letters."
        },
        desc: "Two-year postdoctoral position at the Venetian Institute of Molecular Medicine (VIMM) investigating mitochondrial calcium uniporter structure and function in cardiovascular pathology."
      }
    ],
    researchers: [
      {
        id: 276,
        subject: "physics",
        name: "Dr. Paolo Villoresi",
        title: "Professor of Physics & Director of the Padua Quantum Technologies Research Center",
        university: "University of Padua",
        country: "Italy",
        topics: ["Quantum Communications", "Space Quantum Cryptography", "Quantum Optics", "Ultrafast Lasers"],
        source: "https://www.dei.unipd.it/en/person/villoresi",
        summary: "Dr. Villoresi directs quantum technology research at Padua, having executed the world's first quantum key distribution transmission from an orbiting satellite to a ground station."
      },
      {
        id: 277,
        subject: "biology",
        name: "Dr. Rosario Rizzuto",
        title: "Professor of General Pathology, Former Rector of UniPadova & Pioneer of Mitochondrial Biology",
        university: "University of Padua",
        country: "Italy",
        topics: ["Mitochondria", "Calcium Signalling", "Organelle Communication", "Cell Death"],
        source: "https://www.biomed.unipd.it/personale/docenti-e-ricercatori?persona=rosario.rizzuto",
        summary: "Dr. Rizzuto is an elected EMBO member and pioneer in mitochondrial physiology, famous for discovering the molecular identity of the mitochondrial calcium uniporter (MCU) and organelle contact sites."
      },
      {
        id: 278,
        subject: "engineering",
        name: "Dr. Michele Zorzi",
        title: "Professor of Telecommunications & IEEE Fellow",
        university: "University of Padua",
        country: "Italy",
        topics: ["Wireless Networks", "6G Communications", "Underwater Acoustic Networks", "IoT Protocols"],
        source: "https://www.dei.unipd.it/en/person/zorzi",
        summary: "Dr. Zorzi is an IEEE Fellow and former Editor-in-Chief of IEEE Transactions on Wireless Communications, recognized globally for performance modeling of cellular networks and underwater sensor networks."
      }
    ]
  },

  // 5. USA: Yale University (Row 1227)
  {
    institution: "Yale University",
    shortName: "Yale",
    countryId: "usa",
    countryLabel: "United States",
    location: "New Haven, Connecticut, United States",
    website: "https://www.yale.edu",
    sourceRow: 1227,
    slug: "yale-university",
    heroEyebrow: "United States · Connecticut · Ivy League Global Powerhouse · Reviewed 14 October 2026",
    headline: "Yale University (New Haven, Connecticut)",
    description: "Yale University guide: 100% fully funded PhD fellowships ($45,500+ stipend + full tuition waiver), School of Engineering & Applied Science, and faculty profiles.",
    overview: "Founded in 1701 in New Haven, Connecticut, Yale University is one of the world's most renowned research universities and the third-oldest institution of higher education in the United States. A founding member of the Ivy League, Yale is associated with 65 Nobel laureates, five U.S. Presidents, and numerous foreign heads of state. Renowned globally for breakthroughs in quantum computing, biomedical science, comparative literature, and economics, Yale provides guaranteed full funding packages to 100% of admitted regular doctoral students for up to five full years. Explore verified academic opportunities and admissions guidance.",
    admissions: {
      masters: "Conferred Bachelor's degree from an accredited institution with an outstanding academic record (typically 3.6+ GPA for STEM and quantitative master's programs).",
      phd: "Conferred Bachelor's or Master's degree in an aligned discipline with exceptional scholastic achievement, proven research potential, and strong faculty alignment.",
      language: "Academic IELTS 7.5 to 8.0 overall or TOEFL iBT 100+ (sub-scores 25+ recommended); required for applicants whose primary language of instruction was not English.",
      proposal: "Comprehensive 2 to 3-page Statement of Academic Purpose detailing specific research inquiries, methodology, relevant laboratory experience, and faculty members of interest.",
      appFee: "USD $105 application fee submitted through the Yale Graduate School of Arts and Sciences (GSAS) online portal; fee waivers available upon application.",
      documents: "Complete official academic transcripts, curriculum vitae, 3 confidential letters of recommendation, statement of purpose, and writing sample where required."
    },
    tuitionText: "All admitted PhD students in the Yale Graduate School of Arts and Sciences receive 100% full financial support for up to five years. This guaranteed package includes a 100% full tuition waiver (worth over $51,000/year), full comprehensive Yale Health hospitalization and prescription insurance coverage, and an annual living stipend of USD $45,500 to $50,500 per year.",
    opportunities: [
      {
        id: 606,
        subject: "physics",
        subjects: ["physics", "engineering", "computer-science"],
        type: "PhD",
        title: "Yale PhD in Applied Physics & Quantum Information (100% Fully Funded)",
        source: "https://appliedphysics.yale.edu/graduate-study",
        funding: "Fully funded: 5-year package including 100% tuition waiver, full health insurance, and annual living stipend of USD $48,500/year",
        status: "open-program",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Priority PhD admission deadline for Fall intake)",
        fee: "USD $105 application fee (waivers readily available)",
        tuition: "100% tuition waived ($51,000/year value) for all doctoral scholars.",
        requirements: {
          gpa: "Bachelor's or Master's in Physics, Applied Physics, or Electrical Engineering with superior GPA (typically 3.8+ / 4.0).",
          ielts: "Academic IELTS 8.0 or TOEFL iBT 105.",
          gre: "GRE General and Physics Subject tests are optional.",
          papers: "Demonstrated research excellence through publications, laboratory experiments, or thesis work.",
          references: "Three academic reference letters."
        },
        desc: "Five-year doctoral program at the Yale Quantum Institute (YQI), internationally famous as the birthplace of circuit quantum electrodynamics (cQED) and superconducting qubits."
      },
      {
        id: 607,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Yale PhD in Computer Science (100% Fully Funded)",
        source: "https://cpsc.yale.edu/academics/graduate-program",
        funding: "Fully funded: 5-year guaranteed package providing full tuition, medical insurance, and living stipend ($47,500/year)",
        status: "open-program",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Doctoral application deadline)",
        fee: "USD $105 application fee",
        tuition: "Full tuition covered throughout doctoral candidacy.",
        requirements: {
          gpa: "Outstanding degree in Computer Science, Math, or Engineering with exceptional academic record.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "GRE General test is optional.",
          papers: "Demonstrated programming competence and research contributions in algorithms, AI, or systems.",
          references: "Three confidential academic evaluations."
        },
        desc: "Five-year doctoral program covering artificial intelligence, distributed systems, quantum computing, computer vision, robotics, theoretical computer science, and security."
      },
      {
        id: 608,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Scholarship",
        title: "Yale Combined Program in the Biological and Biomedical Sciences (BBS) Fellowships",
        source: "https://medicine.yale.edu/bbs/",
        funding: "Fully funded: Guaranteed 5-year annual stipend of USD $48,000/year plus 100% tuition waiver and comprehensive health coverage",
        status: "open-scholarship",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026 (Annual BBS international admissions deadline)",
        fee: "USD $105 application fee",
        tuition: "100% tuition covered.",
        requirements: {
          gpa: "Undergraduate degree in biological sciences, biochemistry, chemistry, or medicine with top honors.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Substantial laboratory research experience and clear statement of scientific purpose.",
          references: "Three letters of recommendation from research mentors."
        },
        desc: "Interdepartmental doctoral gateway providing training across 8 tracks, including Molecular Cell Biology, Genetics, Immunobiology, Neuroscience, and Computational Biology."
      },
      {
        id: 609,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        title: "Yale Master of Science (MS) in Computer Science",
        source: "https://cpsc.yale.edu/academics/graduate-program/master-science-program",
        funding: "Departmental research assistantships and teaching assistantships available",
        status: "open-program",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Fall intake deadline)",
        fee: "USD $105 application fee",
        tuition: "USD $51,480/year (approx. 8 course units total).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science or related quantitative field with strong GPA (typically 3.6+ / 4.0).",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "GRE General test optional.",
          papers: "Demonstrated coursework in systems programming, data structures, and algorithms.",
          references: "Three academic reference letters."
        },
        desc: "One-year intensive terminal Master's degree at the Yale School of Engineering & Applied Science designed for students seeking advanced expertise in systems, machine learning, or cybersecurity."
      },
      {
        id: 610,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        title: "Yale Master of Arts (MA) in International and Development Economics (IDE)",
        source: "https://ide.yale.edu/",
        funding: "Merit scholarships covering partial to full tuition expenses",
        status: "open-program",
        deadline: "2027-01-02",
        deadlineText: "January 2, 2027 (Priority application deadline)",
        fee: "USD $105 application fee",
        tuition: "Standard Yale GSAS graduate tuition offset by financial awards.",
        requirements: {
          gpa: "Bachelor's degree with coursework in multivariable calculus, linear algebra, and intermediate economics.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "Mandatory GRE General test score (quantitative 165+).",
          papers: "Statement of purpose addressing global economic development challenges.",
          references: "Three letters of recommendation."
        },
        desc: "One-year intensive graduate program in the Department of Economics emphasizing quantitative economic analysis, econometrics, and international policy."
      },
      {
        id: 611,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        title: "Yale School of the Environment (YSE) Summer Research Internship",
        source: "https://environment.yale.edu/research",
        funding: "Living stipend of USD $5,500 plus campus housing allowance for a 10-week summer environmental research project",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Summer cohort deadline)",
        fee: "No application fee",
        tuition: "No tuition charges; direct fellowship.",
        requirements: {
          gpa: "Undergraduate student currently enrolled in environmental science, forestry, or ecology with 3.3+ GPA.",
          ielts: "English language proficiency.",
          gre: "Not required.",
          papers: "Personal statement demonstrating interest in forest ecosystem dynamics or climate mitigation.",
          references: "Two letters of recommendation."
        },
        desc: "Ten-week mentored summer research fellowship at the Yale School of the Environment conducting field investigations at the Yale-Myers Forest in forest ecology, carbon dynamics, and hydrology."
      },
      {
        id: 612,
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        type: "Job",
        title: "Yale Postdoctoral Associate in Solar Energy & Photochemistry",
        source: "https://chem.yale.edu/",
        funding: "Annual salary of USD $68,000 to $76,000 plus full Yale healthcare and retirement benefits",
        status: "open-program",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Departmental recruitment review)",
        fee: "Free employment application via Yale STARS portal",
        tuition: "Salaried staff appointment; no tuition charged.",
        requirements: {
          gpa: "PhD in Chemistry, Materials Science, or Applied Physics.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Extensive publications in artificial photosynthesis, photoelectrochemical water splitting, or transition metal catalysis.",
          references: "Three professional reference letters."
        },
        desc: "Two-year postdoctoral position at the Yale Energy Sciences Institute developing molecular and heterogeneous catalysts for solar-driven CO2 reduction and water oxidation."
      }
    ],
    researchers: [
      {
        id: 279,
        subject: "physics",
        name: "Dr. Robert J. Schoelkopf",
        title: "Sterling Professor of Applied Physics and Physics & Director of the Yale Quantum Institute",
        university: "Yale University",
        country: "United States",
        topics: ["Quantum Computing", "Circuit QED", "Superconducting Qubits", "Quantum Error Correction"],
        source: "https://appliedphysics.yale.edu/people/robert-schoelkopf",
        summary: "Dr. Schoelkopf is an elected member of the National Academy of Sciences and co-inventor of circuit quantum electrodynamics (cQED), leading breakthrough experiments in fault-tolerant quantum error correction."
      },
      {
        id: 280,
        subject: "biology",
        name: "Dr. Joan A. Steitz",
        title: "Sterling Professor of Molecular Biophysics and Biochemistry & Howard Hughes Medical Institute Investigator",
        university: "Yale University",
        country: "United States",
        topics: ["RNA Processing", "snRNPs", "Spliceosome", "Viral Non-Coding RNAs"],
        source: "https://mbb.yale.edu/people/joan-steitz",
        summary: "Dr. Steitz is a Lasker~Koshland Special Achievement Award in Medical Science laureate and pioneer of RNA biology, celebrated for discovering small nuclear ribonucleoproteins (snRNPs) and their role in pre-mRNA splicing."
      },
      {
        id: 281,
        subject: "social-sciences",
        name: "Dr. William D. Nordhaus",
        title: "Sterling Professor of Economics & 2018 Nobel Laureate in Economic Sciences",
        university: "Yale University",
        country: "United States",
        topics: ["Climate Economics", "DICE Model", "Environmental Policy", "Economic Growth"],
        source: "https://economics.yale.edu/people/william-d-nordhaus",
        summary: "Dr. Nordhaus was awarded the 2018 Nobel Memorial Prize in Economic Sciences for integrating climate change into long-run macroeconomic analysis through his pioneering DICE and RICE integrated assessment models."
      }
    ]
  },

  // 6. UK: University of Glasgow (Row 1314)
  {
    institution: "University of Glasgow",
    shortName: "Glasgow",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Glasgow, Scotland, United Kingdom",
    website: "https://www.gla.ac.uk",
    sourceRow: 1314,
    slug: "university-of-glasgow",
    heroEyebrow: "United Kingdom · Scotland · Ancient University Founded 1451 & Russell Group · Reviewed 14 October 2026",
    headline: "University of Glasgow (Gilmorehill, Glasgow)",
    description: "University of Glasgow guide: Glasgow Doctoral Scholarships (£21,000+ stipend + full tuition waiver), Adam Smith Business School, and faculty profiles.",
    overview: "Founded in 1451 by papal bull, the University of Glasgow is the fourth-oldest university in the English-speaking world and a core member of the Russell Group. Ranked consistently among the top 80 universities globally, Glasgow was the epicenter of the Scottish Enlightenment, boasting illustrious historical figures such as Adam Smith (father of modern economics), James Watt (inventor of the steam engine), and Lord Kelvin (pioneer of thermodynamics). Situated on its iconic neo-Gothic Gilmorehill campus, Glasgow offers world-class funded PhD studentships, advanced Master's programs, and distinguished research leaders. Explore verified academic opportunities and admissions guidance.",
    admissions: {
      masters: "UK 2:1 Honours degree (or international equivalent, typically minimum 3.3/4.0 GPA or 65%+ UK mark equivalent) in an aligned discipline.",
      phd: "Master's degree with Merit or Distinction (or UK 1st Class Honours undergraduate degree) with demonstrable research expertise and supervisor agreement.",
      language: "Academic IELTS 6.5 to 7.0 overall (minimum 6.0 to 6.5 in all sub-tests depending on faculty band) or TOEFL iBT 90 to 100.",
      proposal: "Comprehensive 1,500 to 2,000-word research proposal describing original research questions, literature context, methodological design, and prospective Glasgow supervisor alignment.",
      appFee: "£0 to £60 application fee for taught postgraduate courses; £0 application fee for research degrees via the Glasgow online application portal.",
      documents: "Official academic transcripts, certified English translations, degree certificates, CV, 2 academic reference letters, and research proposal."
    },
    tuitionText: "International doctoral students are supported by University of Glasgow College Doctoral Scholarships and UKRI doctoral training partnerships. Full scholarship recipients receive a 100% full international tuition fee waiver, an annual tax-free living stipend at national UKRI rates (£21,237 per year for 3.5 to 4 years), and an annual research support grant.",
    opportunities: [
      {
        id: 613,
        subject: "physics",
        subjects: ["physics", "engineering", "computer-science"],
        type: "Scholarship",
        title: "Glasgow Quantum & Imaging Doctoral Training Studentships",
        source: "https://www.gla.ac.uk/schools/physics/research/postgraduate/",
        funding: "Fully funded: UKRI tax-free living stipend of £21,237/year for 3.5 years plus 100% international tuition waiver and £3,000 research grant",
        status: "open-scholarship",
        deadline: "2027-01-29",
        deadlineText: "January 29, 2027 (Annual College PGR scholarship competition deadline)",
        fee: "£0 application fee for research degrees",
        tuition: "Full international tuition fees covered (£28,260/year value).",
        requirements: {
          gpa: "First-class UK Honours degree or Master's with Distinction in Physics, Electrical Engineering, or Mathematics.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-score) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated mathematical and laboratory rigor in quantum optics or gravitational wave physics.",
          references: "Two academic referee letters submitted via the portal."
        },
        desc: "Prestigious doctoral studentship scheme in the School of Physics & Astronomy, supporting research in quantum imaging, single-photon detection, and gravitational wave instrumentation at the Institute for Gravitational Research."
      },
      {
        id: 614,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        title: "Glasgow Master of Science (MSc) in Data Science",
        source: "https://www.gla.ac.uk/postgraduate/taught/datascience/",
        funding: "Glasgow International Leadership Scholarships worth £10,000 fee contribution",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (International priority application round)",
        fee: "£0 application fee",
        tuition: "£31,860/year for overseas international students.",
        requirements: {
          gpa: "UK 2:1 Honours degree (or equivalent GPA 3.3/4.0) in Computer Science, Software Engineering, or related quantitative field.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Solid programming proficiency in Python/Java and linear algebra.",
          references: "One academic reference letter and statement of purpose."
        },
        desc: "One-year intensive Master of Science program teaching machine learning, deep learning, big data architectures, information retrieval, and human-in-the-loop data science."
      },
      {
        id: 615,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "PhD",
        title: "Glasgow Adam Smith Business School PhD in Economics & Finance",
        source: "https://www.gla.ac.uk/schools/business/research/postgraduate/",
        funding: "Fully funded: Annual stipend of £21,237/year for 4 years plus full tuition fees and £1,500 annual conference allowance",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Annual Adam Smith funding deadline)",
        fee: "£0 application fee",
        tuition: "100% tuition fees covered.",
        requirements: {
          gpa: "Master's degree with Merit or Distinction in Economics, Finance, or Econometrics.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all skills) or TOEFL iBT 95.",
          gre: "GRE General quantitative score strongly recommended for international applicants.",
          papers: "Substantial research proposal (approx. 2,000 words) in macroeconomics, empirical finance, or trade.",
          references: "Two academic referee letters."
        },
        desc: "Four-year doctoral program at the historic Adam Smith Business School investigating macroeconomic dynamics, financial econometrics, and behavioral asset pricing."
      },
      {
        id: 616,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        title: "Glasgow MRC-University of Glasgow Centre for Virus Research (CVR) Postdoctoral Associate",
        source: "https://www.gla.ac.uk/researchinstitutes/iii/cvr/",
        funding: "Salaried academic Grade 7 position: £40,521 to £45,585/year plus 21.6% USS pension contribution",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Full-time salaried staff role; no tuition.",
        requirements: {
          gpa: "PhD in Virology, Molecular Genetics, or Bioinformatics.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Demonstrated first-author publications in viral genomics, emerging zoonotic pathogens, or viral immunology.",
          references: "Three academic reference contacts."
        },
        desc: "Two-year postdoctoral position at the UK's flagship Centre for Virus Research investigating viral evolution, host innate immune evasion mechanisms, and structure-guided antiviral designs."
      },
      {
        id: 617,
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Master's",
        title: "Glasgow Master of Science (MSc) in Aerospace Engineering",
        source: "https://www.gla.ac.uk/postgraduate/taught/aerospaceengineering/",
        funding: "College of Science & Engineering Excellence Scholarships (£10,000 fee waiver)",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (International applicant deadline)",
        fee: "£0 application fee",
        tuition: "£30,240/year for overseas students.",
        requirements: {
          gpa: "UK 2:1 Honours degree (or international GPA 3.3/4.0) in Aeronautical, Aerospace, or Mechanical Engineering.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all skills) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Prerequisites in flight dynamics, structural mechanics, and thermodynamics.",
          references: "One academic reference letter."
        },
        desc: "One-year advanced degree accredited by the Royal Aeronautical Society, exploring autonomous flight controls, space propulsion systems, and aero-elastic structural design."
      },
      {
        id: 618,
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Internship",
        title: "Glasgow School of Chemistry Undergraduate Summer Research Fellowship",
        source: "https://www.gla.ac.uk/schools/chemistry/undergraduate/",
        funding: "Living bursary of £2,200 for an 8-week structured laboratory research internship",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer cohort deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Current 2nd or 3rd year undergraduate student in Chemistry, Chemical Physics, or Medicinal Chemistry with 2:1 standing.",
          ielts: "Good English communication.",
          gre: "Not required.",
          papers: "Enthusiasm for experimental synthetic chemistry or supramolecular science.",
          references: "One academic tutor reference."
        },
        desc: "Eight-week hands-on summer research placement in the Joseph Black Building investigating transition metal catalysis, chemical origin of life systems, and porous framework materials."
      },
      {
        id: 619,
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Job",
        title: "Glasgow Lecturer / Assistant Professor in Climate Adaptation & Environmental Justice",
        source: "https://www.gla.ac.uk/explore/jobs/",
        funding: "Permanent faculty appointment: £49,230 to £55,395/year plus USS pension benefits",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (School recruitment deadline)",
        fee: "Free employment application",
        tuition: "Faculty post; no tuition fees.",
        requirements: {
          gpa: "PhD in Environmental Geography, Climate Policy, or Ecological Economics.",
          ielts: "Professional English communication.",
          gre: "Not required.",
          papers: "Active publication record in international climate justice, just transition policy, or urban resilience.",
          references: "Three academic reference letters."
        },
        desc: "Permanent tenure-track academic position at the School of Geographical & Earth Sciences conducting research in climate vulnerability and teaching undergraduate and postgraduate geography cohorts."
      }
    ],
    researchers: [
      {
        id: 282,
        subject: "chemistry",
        name: "Dr. Lee Cronin",
        title: "Regius Professor of Chemistry & Pioneer of Digitizing Chemistry",
        university: "University of Glasgow",
        country: "United Kingdom",
        topics: ["Digital Chemistry", "Chemputer", "Origin of Life", "Artificial Life"],
        source: "https://www.gla.ac.uk/schools/chemistry/staff/leecronin/",
        summary: "Dr. Cronin holds the historic Regius Chair of Chemistry at Glasgow, leading the development of the 'Chemputer' to digitize chemical synthesis and discover artificial life."
      },
      {
        id: 283,
        subject: "physics",
        name: "Dr. Miles Padgett",
        title: "Kelvin Chair of Natural Philosophy & Royal Society Research Professor",
        university: "University of Glasgow",
        country: "United Kingdom",
        topics: ["Orbital Angular Momentum of Light", "Optical Tweezers", "Quantum Imaging", "Ghost Imaging"],
        source: "https://www.gla.ac.uk/schools/physics/staff/milespadgett/",
        summary: "Dr. Padgett is an internationally celebrated optical physicist and Rumford Medalist, pioneering optical orbital angular momentum (OAM) of photons and non-line-of-sight quantum cameras."
      },
      {
        id: 284,
        subject: "physics",
        name: "Dr. Sheila Rowan",
        title: "Professor of Physics and Astronomy & Former Chief Scientific Adviser for Scotland",
        university: "University of Glasgow",
        country: "United Kingdom",
        topics: ["Gravitational Waves", "Fused Silica Suspensions", "LIGO Optics", "Precision Metrology"],
        source: "https://www.gla.ac.uk/schools/physics/staff/sheilarowan/",
        summary: "Dr. Rowan is a Fellow of the Royal Society and former Director of the Institute for Gravitational Research, having led the development of ultra-low mechanical loss fused silica suspensions for LIGO's Nobel-winning gravitational wave detection."
      }
    ]
  },

  // 7. JAPAN: Waseda University (Row 1789)
  {
    institution: "Waseda University",
    shortName: "Waseda",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Shinjuku, Tokyo, Japan",
    website: "https://www.waseda.jp/top",
    sourceRow: 1789,
    slug: "waseda-university",
    heroEyebrow: "Japan · Tokyo · Premier Private Research University of Japan · Reviewed 14 October 2026",
    headline: "Waseda University (Shinjuku, Tokyo)",
    description: "Waseda University guide: MEXT Japanese Government Scholarships (¥145,000/month), English-taught PhD in Robotics & Computer Science, and faculty profiles.",
    overview: "Founded in 1882 by former Prime Minister Okuma Shigenobu, Waseda University in central Tokyo is widely regarded as Japan's most prestigious private research university. Waseda has educated seven Japanese Prime Ministers, world-renowned corporate leaders (including the founders of Sony, Uniqlo, and Honda), and celebrated authors such as Haruki Murakami. Internationally celebrated for pioneering humanoid robotics (having created WABOT-1 in 1973, the world's first full-scale anthropomorphic humanoid robot), advanced battery technologies, and global political economy, Waseda offers comprehensive English-medium graduate programs and generous scholarship packages. Explore verified degree courses, Japanese Government MEXT scholarship procedures, and faculty leadership.",
    admissions: {
      masters: "16 years of formal education culminating in a recognized Bachelor's degree (or equivalent academic certification) with superior academic marks.",
      phd: "Recognized Master's degree (or professional degree) in a relevant discipline with demonstrable thesis research and academic publications.",
      language: "Academic IELTS 6.5 to 7.0 overall or TOEFL iBT 85+ for international English-taught graduate programs; JLPT N2/N1 for Japanese-medium courses.",
      proposal: "Detailed 2 to 3-page research plan in English outlining research purpose, proposed methodologies, and prospective supervisor endorsement.",
      appFee: "¥30,000 screening fee for general international graduate application; completely waived for Japanese Government (MEXT) scholarship recipients.",
      documents: "Official academic transcripts, graduation certificates, thesis abstract, research proposal, 2 recommendation letters, and prospective supervisor acceptance letter."
    },
    tuitionText: "Tuition for graduate degrees in STEM at Waseda is approximately ¥1,200,000 to ¥1,400,000 per year (approx. USD $8,500/year). Waseda University Partial Tuition-Waiver Scholarships provide 50% tuition reductions to high-achieving international students, while MEXT Japanese Government Scholarship recipients receive 100% full tuition waivers, round-trip international airfare, and a tax-free monthly living stipend of ¥144,000 (Master's) to ¥147,000 (PhD) per month.",
    opportunities: [
      {
        id: 620,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "social-sciences"],
        type: "Scholarship",
        title: "Waseda University MEXT University-Recommended Japanese Government Scholarships",
        source: "https://www.waseda.jp/inst/cie/en/exchange/mext",
        funding: "Fully funded: Monthly stipend of ¥147,000/month for doctoral students (¥144,000/month for Master's) plus 100% tuition waiver and round-trip economy airfare",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual university recommendation deadline for October 2027 enrollment)",
        fee: "¥0 screening fee for MEXT applicants",
        tuition: "Full 100% tuition and admission fees waived by the Japanese Government.",
        requirements: {
          gpa: "Minimum GPA of 2.30/3.00 on the MEXT scale (equivalent to 80%+ or 3.4/4.0 GPA).",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 85+ or CEFR B2 equivalent.",
          gre: "Not required.",
          papers: "Well-formulated research plan aligned with a Waseda faculty supervisor who has agreed to supervise.",
          references: "Recommendation letter from Dean or Department Chair of home university."
        },
        desc: "Prestigious Japanese Government scholarship providing complete financial security, housing assistance, and tuition waivers for top international graduate students at Waseda University in Tokyo."
      },
      {
        id: 621,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        title: "Waseda Graduate School of Advanced Science and Engineering English PhD in Modern Mechanical Engineering",
        source: "https://www.waseda.jp/fsci/en/admissions_gs/",
        funding: "JSPS DC Doctoral Research Fellowships (¥200,000/month) and Waseda Teaching/Research Assistantships",
        status: "open-program",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Fall October intake application deadline)",
        fee: "¥30,000 examination fee",
        tuition: "¥1,350,000/year (50% merit tuition waiver available upon application).",
        requirements: {
          gpa: "Master's degree in Robotics, Mechanical Engineering, or Mechatronics with solid academic results.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Master's thesis summary and prospective research proposal.",
          references: "Two academic recommendation letters."
        },
        desc: "Three-year research doctoral program taught entirely in English exploring humanoid robotics (Humanoid Robotics Institute), surgical robotics, smart actuators, and bio-mechatronics."
      },
      {
        id: 622,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Waseda Master of Engineering in Computer Science and Communications Engineering",
        source: "https://www.waseda.jp/fsci/csce/en/",
        funding: "Waseda University Partial Tuition-Waiver Scholarships (50% fee reduction)",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (September intake deadline)",
        fee: "¥30,000 examination fee",
        tuition: "¥1,300,000/year.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Information Science, or Electrical Engineering with minimum 3.0/4.0 GPA.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 80.",
          gre: "Not required.",
          papers: "Undergraduate laboratory research thesis or capstone project in computer systems or AI.",
          references: "Two academic referee letters."
        },
        desc: "Two-year English-taught Master's program providing advanced training in distributed network architectures, deep learning algorithms, computer vision, and IoT protocols in central Tokyo."
      },
      {
        id: 623,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "PhD",
        title: "Waseda PhD in Applied Chemistry & Advanced Energy Materials",
        source: "https://www.waseda.jp/fsci/chem/en/",
        funding: "Fully funded: MEXT and Waseda Research Fellowships providing ¥147,000/month plus tuition exemptions",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual recruitment review)",
        fee: "¥30,000 examination fee",
        tuition: "¥1,350,000/year (scholarship eligible).",
        requirements: {
          gpa: "Master of Science in Chemistry, Materials Science, or Polymer Chemistry.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 85.",
          gre: "Not required.",
          papers: "Demonstrated first-author publications in polymer batteries, organic synthesis, or nanomaterial catalysis.",
          references: "Two academic reference letters."
        },
        desc: "Three-year doctoral program investigating organic radical batteries, solid electrolytes, porous coordination polymers, and sustainable energy storage systems."
      },
      {
        id: 624,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        title: "Waseda Graduate School of Economics Master of Arts in Economics (English Course)",
        source: "https://www.waseda.jp/fpse/gse/en/",
        funding: "Waseda Global Excellence Scholarships providing up to full tuition waiver",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (September admissions round)",
        fee: "¥30,000 examination fee",
        tuition: "¥980,000/year.",
        requirements: {
          gpa: "Bachelor's degree in Economics, Mathematics, or Social Sciences with strong quantitative marks.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 90.",
          gre: "GRE General quantitative score strongly recommended.",
          papers: "Statement of purpose and analytical essay on economic theory or empirical econometrics.",
          references: "Two academic letters of recommendation."
        },
        desc: "Two-year English-taught Master's program preparing students for doctoral research or international finance careers, with specializations in Microeconomic Theory, Macroeconomics, and Applied Econometrics."
      },
      {
        id: 625,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Internship",
        title: "Waseda Humanoid Robotics Summer Research Internship",
        source: "https://www.waseda.jp/fsci/en/",
        funding: "¥100,000 travel and living allowance plus university dormitory accommodation in Tokyo for 6 weeks",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer intake deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Currently enrolled undergraduate or early Master's student in robotics, mechanical engineering, or computer science.",
          ielts: "Conversational English.",
          gre: "Not required.",
          papers: "Hands-on experience with ROS (Robot Operating System), C++, or Python.",
          references: "One professor reference letter."
        },
        desc: "Six-week mentored summer laboratory experience on the Nishi-Waseda Campus, giving international students direct access to humanoid robot teleoperation and bipedal locomotion labs."
      },
      {
        id: 626,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Master's",
        title: "Waseda Graduate School of Asia-Pacific Studies (GSAPS) Master of Arts in International Relations",
        source: "https://www.waseda.jp/fire/gsaps/en/",
        funding: "Asian Development Bank - Japan Scholarship Program (ADB-JSP) full fellowship",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (September intake deadline)",
        fee: "¥30,000 examination fee",
        tuition: "¥1,100,000/year.",
        requirements: {
          gpa: "Bachelor's degree in international relations, political science, history, or economics with minimum 3.0/4.0 GPA.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Research proposal addressing Asia-Pacific regional integration, security, or development.",
          references: "Two academic letters."
        },
        desc: "World-renowned two-year bilingual/English Master's program analyzing East Asian geopolitical diplomacy, transnational business networks, and international development cooperation."
      }
    ],
    researchers: [
      {
        id: 285,
        subject: "engineering",
        name: "Dr. Shigeki Sugano",
        title: "Professor of Modern Mechanical Engineering & President of IEEE Robotics and Automation Society",
        university: "Waseda University",
        country: "Japan",
        topics: ["Humanoid Robotics", "Safety in Human-Robot Interaction", "Smart Actuators", "Cyborg Technology"],
        source: "https://www.sugano.mech.waseda.ac.jp/",
        summary: "Dr. Sugano is an IEEE Fellow and President of the IEEE Robotics and Automation Society, world-famous for pioneering cognitive humanoid robots (WABIAN, TWENDY-ONE) designed to safely interact with humans."
      },
      {
        id: 286,
        subject: "chemistry",
        name: "Dr. Hiroyuki Nishide",
        title: "Professor Emeritus of Applied Chemistry & Pioneer of Organic Radical Batteries",
        university: "Waseda University",
        country: "Japan",
        topics: ["Organic Radical Batteries", "Redox Polymers", "Functional Macromolecules", "Energy Storage"],
        source: "https://www.appchem.waseda.ac.jp/en/faculty/nishide/",
        summary: "Dr. Nishide is an internationally celebrated polymer chemist who invented organic radical batteries—ultra-fast rechargeable batteries made from metal-free, flexible organic polymers."
      },
      {
        id: 287,
        subject: "computer-science",
        name: "Dr. Hironori Washizaki",
        title: "Professor of Computer Science & IEEE Computer Society President",
        university: "Waseda University",
        country: "Japan",
        topics: ["Software Engineering", "Software Quality Patterns", "Machine Learning Software (SE4AI)", "Traceability"],
        source: "https://www.washi.cs.waseda.ac.jp/",
        summary: "Dr. Washizaki is President of the IEEE Computer Society and leading authority on software reuse, quality patterns, and software engineering for artificial intelligence (SE4AI) at Waseda."
      }
    ]
  },

  // 8. SWEDEN: Swedish University of Agricultural Sciences (SLU) (Row 1609)
  {
    institution: "Swedish University of Agricultural Sciences",
    shortName: "SLU",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Uppsala / Alnarp / Umeå, Sweden",
    website: "https://www.slu.se",
    sourceRow: 1609,
    slug: "swedish-university-of-agricultural-sciences",
    heroEyebrow: "Sweden · Uppsala · World #3 in Agriculture & Forestry · Reviewed 14 October 2026",
    headline: "Swedish University of Agricultural Sciences (Sveriges lantbruksuniversitet)",
    description: "SLU guide: Fully salaried PhD positions (SEK 32,000+/month), MSc in Sustainable Food Systems, Forest Ecology (#3 in world), zero tuition, and faculty profiles.",
    overview: "Established in 1977 through the merger of Sweden's historic veterinary, forestry, and agricultural colleges, the Swedish University of Agricultural Sciences (Sveriges lantbruksuniversitet - SLU) is a world-class life sciences research powerhouse. Consistently ranked by QS as #3 in the world in Agriculture and Forestry, SLU develops sustainable solutions for biological natural resources, planetary boundaries, veterinary medicine, and renewable bio-based economies. With campuses in Uppsala, Alnarp, and Umeå, SLU doctoral candidates are employed as salaried academic staff members under Swedish collective agreements with zero tuition fees. Explore verified graduate degrees, fully salaried PhD programs, and world-class faculty profiles.",
    admissions: {
      masters: "Completed Bachelor's degree (minimum 180 ECTS) in biology, environmental science, agronomy, forestry, or related natural science discipline from an internationally recognized university.",
      phd: "University degree at advanced (Master's) level comprising at least 240 ECTS credits (including at least 60 credits at advanced level) with demonstrable scientific methodology training.",
      language: "English 6 equivalent: Academic IELTS 6.5 overall (no band below 5.5) or TOEFL iBT 90 (minimum 20 in written test); required for all non-native English speakers.",
      proposal: "For doctoral positions, an individual study plan (ISP) formulated with the designated principal investigator based on an established research project description.",
      appFee: "SEK 900 international application fee paid to University Admissions Sweden (antagning.se); SEK 0 application fee for doctoral salaried employment positions.",
      documents: "Certified bachelor's transcripts, degree diploma, curriculum vitae, documentation of relevant field/laboratory experience, and two academic referee letters."
    },
    tuitionText: "In Sweden, doctoral education is 100% free of tuition fees for all students regardless of citizenship. Furthermore, SLU doctoral candidates are hired on fully funded salaried employment contracts (doktorandanställning) under Swedish collective agreements, receiving a starting salary of approximately SEK 32,000 to SEK 36,000 per month with full healthcare, parental leave, and pension benefits. For Master's students, SLU and Swedish Institute scholarships cover 100% of tuition fees.",
    opportunities: [
      {
        id: 627,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Scholarship",
        title: "SLU Scholarship for Non-EU/EEA Master's Students (Full Tuition Waiver)",
        source: "https://www.slu.se/en/education/programmes-courses/scholarships/",
        funding: "Fully funded: 100% full tuition fee waiver (worth up to SEK 320,000 for the two-year program) for top international students",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual University Admissions round application deadline)",
        fee: "SEK 900 application fee via UniversityAdmissions.se",
        tuition: "Full tuition waiver covering entire Master's duration.",
        requirements: {
          gpa: "Outstanding academic record in previous undergraduate degree (typically top 5% of class).",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each section) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Extensive CV highlighting environmental science, plant biology, or forestry coursework.",
          references: "Two academic referee letters and personal statement."
        },
        desc: "SLU's premier merit-based scholarship for fee-paying international students admitted to English-taught Master's programs in Environmental Science, Forestry, and Plant Biology."
      },
      {
        id: 628,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "PhD",
        title: "SLU Salaried Doctoral Position (PhD) in Boreal Forest Ecology and Carbon Sequestration",
        source: "https://www.slu.se/en/about-slu/work-at-slu/jobs-vacancies/",
        funding: "Fully funded salaried employment: SEK 32,000 to SEK 36,000/month gross with full Swedish social security, pension, and healthcare benefits for 4 years",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Departmental recruitment deadline)",
        fee: "SEK 0 application fee for doctoral employment",
        tuition: "SEK 0 tuition fees (Swedish law forbids tuition fees for doctoral education).",
        requirements: {
          gpa: "Master's degree (minimum 240 ECTS total university credits) in Forest Sciences, Soil Science, or Ecology.",
          ielts: "English 6 proficiency (IELTS 6.5 or TOEFL 90).",
          gre: "Not required.",
          papers: "Demonstrated field or laboratory research experience in soil carbon dynamics or mycorrhizal ecology.",
          references: "Two professional reference contacts."
        },
        desc: "Four-year full-time doctoral research employment contract based at SLU Umeå investigating boreal forest management regimes, soil organic carbon stabilization, and greenhouse gas fluxes."
      },
      {
        id: 629,
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "Master's",
        title: "SLU Master of Science (MSc) in Plant Biology for Sustainable Production",
        source: "https://www.slu.se/en/education/programmes-courses/masters-programmes/plant-biology-for-sustainable-production/",
        funding: "SLU and Swedish Institute (SI) Global Professionals Scholarships",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Swedish national university admissions deadline)",
        fee: "SEK 900 application fee",
        tuition: "SEK 140,000/year (for non-EU/EEA students; SEK 0 for EU/EEA citizens).",
        requirements: {
          gpa: "Bachelor's degree in Biology, Agronomy, or Biotechnology with at least 90 ECTS in biological subjects.",
          ielts: "Academic IELTS 6.5 (no section below 5.5) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Documented laboratory research experience in genetics or plant physiology.",
          references: "Academic curriculum vitae and transcript."
        },
        desc: "Two-year research-embedded Master's curriculum at the Uppsala BioCenter, preparing students for leading international PhD programs in plant molecular biology and crop breeding."
      },
      {
        id: 630,
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Master's",
        title: "SLU Master of Science (MSc) in Sustainable Food Systems",
        source: "https://www.slu.se/en/education/programmes-courses/masters-programmes/sustainable-food-systems/",
        funding: "Swedish Institute Scholarships for Global Professionals covering full tuition and SEK 12,000/month stipend",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (National application round)",
        fee: "SEK 900 application fee",
        tuition: "SEK 150,000/year (non-EU/EEA).",
        requirements: {
          gpa: "Bachelor's degree in agricultural sciences, food science, environmental science, or economics (minimum 180 ECTS).",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated engagement with food security, circular bioeconomy, or sustainable supply chains.",
          references: "Curriculum vitae and letter of motivation."
        },
        desc: "Two-year multidisciplinary degree examining resilient agricultural production, food processing life-cycle analysis, dietary transition policies, and sustainable consumer behavior."
      },
      {
        id: 631,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        title: "SLU Postdoctoral Researcher in Forest Pathology & Fungal Genomics",
        source: "https://www.slu.se/en/about-slu/work-at-slu/jobs-vacancies/",
        funding: "Salaried postdoctoral employment: SEK 41,000 to SEK 46,000/month gross plus full Swedish pension and health benefits",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Departmental recruitment call)",
        fee: "SEK 0 application fee",
        tuition: "Salaried staff position; no tuition.",
        requirements: {
          gpa: "PhD in Mycology, Plant Pathology, Microbiology, or Genomics obtained within the last 5 years.",
          ielts: "Fluent professional English communication.",
          gre: "Not required.",
          papers: "Demonstrated first-author publications in fungal transcriptomics, host-pathogen interactions, or forest disease epidemiology.",
          references: "Two letters of reference from previous academic mentors."
        },
        desc: "Two-year postdoctoral position at the Department of Forest Mycology and Plant Pathology in Uppsala investigating invasive tree pathogen virulence mechanisms."
      },
      {
        id: 632,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        title: "SLU Svartberget Field Station Summer Traineeship in Hydrology & Biogeochemistry",
        source: "https://www.slu.se/en/departments/field-based-forest-research/experimental-forests-and-stations/svartberget/",
        funding: "Tax-free stipend of SEK 16,000 plus field station accommodation in Vindeln for 6 weeks",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer intake deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Current undergraduate or early Master's student in environmental science, hydrology, or soil science.",
          ielts: "Good English proficiency.",
          gre: "Not required.",
          papers: "Basic GIS or water sampling field skills.",
          references: "One professor reference letter."
        },
        desc: "Six-week research placement at the Krycklan Catchment Study in northern Sweden measuring stream dissolved organic carbon (DOC), hydrological flow pathways, and riparian buffer effectiveness."
      },
      {
        id: 633,
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "Job",
        title: "SLU Senior Bioinformatician / Research Engineer in Agricultural Metagenomics",
        source: "https://www.slu.se/en/about-slu/work-at-slu/jobs-vacancies/",
        funding: "Salaried staff position: SEK 45,000 to SEK 51,000/month gross with full collective agreement benefits",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Staff position; no tuition fees.",
        requirements: {
          gpa: "Master's or PhD in Bioinformatics, Computational Biology, or Microbial Ecology.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Extensive experience with metagenomic assembly pipelines (QIIME2, Kraken2), high-performance computing, and microbial community statistics.",
          references: "Three professional reference contacts."
        },
        desc: "Full-time scientific staff role at the Department of Molecular Sciences analyzing soil and rhizosphere microbiome sequencing datasets to enhance sustainable plant disease suppression."
      }
    ],
    researchers: [
      {
        id: 288,
        subject: "environment",
        name: "Dr. Dan Binkley",
        title: "Honorary Professor of Forest Ecology & Former Editor-in-Chief of Forest Ecology and Management",
        university: "Swedish University of Agricultural Sciences",
        country: "Sweden",
        topics: ["Forest Nutrition", "Biogeochemistry", "Ecosystem Ecology", "Nutrient Cycling"],
        source: "https://www.slu.se/en/ew-cv/dan-binkley/",
        summary: "Dr. Binkley is a world-renowned authority on forest soil biogeochemistry, having led seminal long-term ecosystem studies on nitrogen and phosphorus limitations across global forest biomes."
      },
      {
        id: 289,
        subject: "biology",
        name: "Dr. Ove Nilsson",
        title: "Professor of Forest Genetics & Director of the Umeå Plant Science Centre (UPSC)",
        university: "Swedish University of Agricultural Sciences",
        country: "Sweden",
        topics: ["Flowering Time Control", "FT Gene", "Tree Dormancy", "Plant Development"],
        source: "https://www.upsc.se/researchers/4603-ove-nilsson-control-of-flowering-time-and-tree-phenology.html",
        summary: "Dr. Nilsson is a member of the Royal Swedish Academy of Sciences and director of UPSC, celebrated for discovering the mobile flowering hormone signal (FT gene) in trees and regulating seasonal growth cessation."
      },
      {
        id: 290,
        subject: "environment",
        name: "Dr. Sara Hallin",
        title: "Professor of Soil Microbiology & Chair of Department of Forest Mycology and Plant Pathology",
        university: "Swedish University of Agricultural Sciences",
        country: "Sweden",
        topics: ["Nitrogen Cycle", "Denitrification", "Soil Microbiome", "Nitrous Oxide Emissions"],
        source: "https://www.slu.se/en/ew-cv/sara-hallin/",
        summary: "Dr. Hallin is an internationally recognized microbial ecologist leading research into the genetic diversity of denitrifying soil bacteria and biological mechanisms governing nitrous oxide greenhouse gas emissions."
      }
    ]
  },

  // 9. NETHERLANDS: Wageningen University & Research (WUR) (Row 1463)
  {
    institution: "Wageningen University & Research",
    shortName: "Wageningen",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Wageningen, Gelderland, Netherlands",
    website: "https://www.wur.nl",
    sourceRow: 1463,
    slug: "wageningen-university-and-research",
    heroEyebrow: "Netherlands · Gelderland · World #1 in Agriculture & Global Food Valley · Reviewed 14 October 2026",
    headline: "Wageningen University & Research (WUR)",
    description: "Wageningen University guide: Salaried PhD positions (€2,770-€3,539/month), MSc in Biotechnology & Climate Studies (#1 in world), and faculty profiles.",
    overview: "Established in 1876 in the historic town of Wageningen, Wageningen University & Research (WUR) is universally celebrated as the world's premier institution for agricultural, biological, and environmental sciences. Consistently ranked #1 globally in Agriculture and Forestry by QS and #1 in Ecology by ShanghaiRanking, WUR forms the scientific nucleus of the 'Food Valley'—Europe's leading agritech and food innovation cluster. WUR doctoral candidates are employed as salaried staff members under Dutch university agreements with zero tuition fees. Explore verified academic courses, scholarship packages, and faculty leadership.",
    admissions: {
      masters: "Recognized Bachelor's degree from an accredited university in an aligned discipline with high academic standing (Dutch grading equivalent 7.0/10 or international GPA 3.2+/4.0).",
      phd: "Recognized Master's degree (or equivalent 120 ECTS postgraduate degree) in an aligned discipline with demonstrable thesis research capability.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in speaking) or TOEFL iBT 90 (minimum 20 in speaking); higher for environmental policy (IELTS 7.0/TOEFL 100).",
      proposal: "For doctoral candidates, an extensive 3 to 5-page research plan detailing theoretical context, research questions, experimental design, and prospective WUR faculty mentors.",
      appFee: "€100 handling fee for non-EU applicants with non-Dutch diplomas via Studielink (reimbursed upon registration).",
      documents: "Certified university transcripts, degree certificates, detailed curriculum vitae, letter of motivation, and two academic recommendation letters."
    },
    tuitionText: "In the Netherlands, PhD candidates are not students but university employees ('promovendus') hired on salaried contracts governed by the Collective Labour Agreement for Dutch Universities (CAO-NU). Doctoral salaries start at €2,770/month gross in year 1 and rise to €3,539/month gross in year 4, plus an 8% holiday allowance and 8.3% end-of-year bonus (zero tuition charged). For Master's programs, the Wageningen Africa & International Excellence Fellowships provide full tuition waivers and living stipends.",
    opportunities: [
      {
        id: 634,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Scholarship",
        title: "Wageningen University Excellence Fellowship Programme (Full Tuition & Living Allowance)",
        source: "https://www.wur.nl/en/education-programmes/master/scholarships-and-grants/excellence-programme.htm",
        funding: "Fully funded: 100% full tuition fee waiver (up to €39,000 for 2 years) plus living allowance of €11,000/year, health insurance, and visa costs",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual international scholarship application deadline)",
        fee: "Waived or refunded for selected scholarship recipients",
        tuition: "Full tuition fee waiver covering 100% of study costs.",
        requirements: {
          gpa: "Top 5% of your graduating undergraduate class with outstanding grades (GPA 3.7+/4.0).",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in speaking) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and strong letter of motivation.",
          references: "Two academic referee letters from university professors."
        },
        desc: "Prestigious all-inclusive scholarship awarded to highly talented non-EEA students pursuing a full-time Master's degree at Wageningen University."
      },
      {
        id: 635,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "WUR Salaried Doctoral Position (PhD) in Plant Breeding and Genome Editing",
        source: "https://www.wur.nl/en/jobs-at-wur/vacancies.htm",
        funding: "Salaried employee contract (CAO-NU): €2,770 to €3,539/month gross plus 8% holiday allowance and 8.3% annual bonus for 4 years",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling department call)",
        fee: "€0 application fee for salaried positions",
        tuition: "€0 tuition fees (employed doctoral position).",
        requirements: {
          gpa: "Master's degree in Plant Breeding, Genetics, Biotechnology, or Molecular Biology with high distinction.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Master's thesis or publications in crop genomics, CRISPR-Cas, or quantitative trait locus (QTL) mapping.",
          references: "Two academic recommendation letters."
        },
        desc: "Four-year salaried doctoral research appointment at the Department of Plant Sciences investigating climate-resilient crop breeding, pathogen resistance genes, and targeted genome engineering."
      },
      {
        id: 636,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Master's",
        title: "WUR Master of Science (MSc) in Biotechnology",
        source: "https://www.wur.nl/en/education-programmes/master/msc-programmes/msc-biotechnology.htm",
        funding: "WUR Excellence and NL Scholarships available for non-EEA candidates",
        status: "open-program",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Non-EU international deadline via Studielink)",
        fee: "€100 handling fee",
        tuition: "€19,700/year for non-EEA students (€2,530/year for EEA students).",
        requirements: {
          gpa: "Bachelor's degree in Biotechnology, Biochemistry, Microbiology, or Chemical Engineering with high marks.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in speaking) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Coursework in cellular biology, mathematics, and bioprocess engineering.",
          references: "Academic curriculum vitae and transcript."
        },
        desc: "Two-year research-intensive Master's degree specializing in Cellular and Molecular Biotechnology, Bioprocess Engineering, and Marine Biotechnology."
      },
      {
        id: 637,
        subject: "environment",
        subjects: ["environment", "physics"],
        type: "Master's",
        title: "WUR Master of Science (MSc) in Climate Studies",
        source: "https://www.wur.nl/en/education-programmes/master/msc-programmes/msc-climate-studies.htm",
        funding: "Holland Scholarship and WUR Departmental bursaries",
        status: "open-program",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Non-EU application deadline)",
        fee: "€100 handling fee",
        tuition: "€19,700/year (non-EEA).",
        requirements: {
          gpa: "Bachelor's degree in environmental sciences, physics, meteorology, or physical geography with minimum 3.0/4.0 GPA.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated coursework in climate physics, biogeochemistry, or environmental modeling.",
          references: "Two academic recommendation letters."
        },
        desc: "Two-year curriculum examining the physical-chemical climate system, greenhouse gas atmospheric monitoring, climate-smart agriculture, and global adaptation strategies."
      },
      {
        id: 638,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "PhD",
        title: "WUR PhD in Aquatic Ecology and Water Quality Management",
        source: "https://www.wur.nl/en/research-results/chair-groups/environmental-sciences/aquatic-ecology-and-water-quality-management-group.htm",
        funding: "Full CAO-NU 4-year salaried employment contract: €2,770 - €3,539/month plus full holiday and year-end allowances",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Departmental recruitment deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Master's degree in Aquatic Ecology, Limnology, Marine Biology, or Environmental Sciences with distinction.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Experience in freshwater ecosystem modeling, harmful algal bloom monitoring, or microplastic ecotoxicology.",
          references: "Two academic referee contacts."
        },
        desc: "Four-year salaried doctoral research appointment investigating tipping points in freshwater ecosystems, lake restoration bio-manipulation, and microplastic transport."
      },
      {
        id: 639,
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "Internship",
        title: "WUR Wageningen Food & Biobased Research Summer Traineeship",
        source: "https://www.wur.nl/en/research-results/research-institutes/food-biobased-research.htm",
        funding: "Stipend of €1,200 for a 6-week research placement in sustainable protein transitions",
        status: "open-program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Summer cohort deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Current 3rd year undergraduate or Master's student in food technology, chemical engineering, or biotechnology.",
          ielts: "Good English proficiency.",
          gre: "Not required.",
          papers: "Coursework in food chemistry or biopolymer processing.",
          references: "One professor reference letter."
        },
        desc: "Six-week research placement in the Food & Biobased Research institute developing plant-based protein texturization, precision fermentation, and bio-based barrier packaging."
      },
      {
        id: 640,
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Job",
        title: "WUR Senior Researcher in Circular Agrosystems & Nitrogen Governance",
        source: "https://www.wur.nl/en/jobs-at-wur/vacancies.htm",
        funding: "CAO-NU Researcher scale 11 salary: €3,821 to €5,943/month gross plus 8% holiday and 8.3% end-of-year bonuses",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Salaried staff appointment; no tuition.",
        requirements: {
          gpa: "PhD in Agronomy, Environmental Policy, or Agricultural Economics.",
          ielts: "Fluent professional English communication.",
          gre: "Not required.",
          papers: "Extensive peer-reviewed publications in nutrient cycle modeling, farm-level nitrogen loss mitigation, or agricultural policy.",
          references: "Three academic reference contacts."
        },
        desc: "Full-time research position at the Plant Production Systems group designing circular agricultural frameworks to drastically reduce ammonia and nitrate losses across European farms."
      }
    ],
    researchers: [
      {
        id: 291,
        subject: "environment",
        name: "Dr. Marten Scheffer",
        title: "Distinguished Professor of Aquatic Ecology & Spinoza Prize Laureate",
        university: "Wageningen University & Research",
        country: "Netherlands",
        topics: ["Complex Systems", "Tipping Points", "Ecosystem Resilience", "Critical Slowing Down"],
        source: "https://www.wur.nl/en/persons/marten-scheffer.htm",
        summary: "Dr. Scheffer is a Spinoza Prize and Tyler Prize for Environmental Achievement laureate, world-renowned for developing the theory of critical transitions and early warning signals for tipping points in complex ecosystems."
      },
      {
        id: 292,
        subject: "biology",
        name: "Dr. Ton Bisseling",
        title: "Professor of Molecular Biology & Royal Netherlands Academy of Arts and Sciences Member",
        university: "Wageningen University & Research",
        country: "Netherlands",
        topics: ["Symbiosis", "Root Nodule Formation", "Rhizobium", "Plant-Microbe Interactions"],
        source: "https://www.wur.nl/en/persons/ton-bisseling.htm",
        summary: "Dr. Bisseling is a leading authority in plant-microbe symbioses, celebrated for identifying the molecular signaling cascades through which legumes perceive rhizobial Nod factors to initiate nitrogen-fixing nodules."
      },
      {
        id: 293,
        subject: "environment",
        name: "Dr. Rik Leemans",
        title: "Professor of Environmental Systems Analysis & IPCC Co-Author",
        university: "Wageningen University & Research",
        country: "Netherlands",
        topics: ["Global Environmental Change", "Ecosystem Services", "Earth System Modeling", "IPCC Scenarios"],
        source: "https://www.wur.nl/en/persons/rik-leemans.htm",
        summary: "Dr. Leemans has contributed as a lead author to multiple IPCC Assessment Reports and the Millennium Ecosystem Assessment, leading international research into biodiversity loss and planetary boundary thresholds."
      }
    ]
  },

  // 10. SWITZERLAND: University of Bern (Row 1359)
  {
    institution: "University of Bern",
    shortName: "Uni Bern",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Bern, Switzerland",
    website: "https://www.unibe.ch",
    sourceRow: 1359,
    slug: "university-of-bern",
    heroEyebrow: "Switzerland · Bern · Swiss Capital University & World Leader in Space & Climate · Reviewed 14 October 2026",
    headline: "University of Bern (Universität Bern)",
    description: "University of Bern guide: Fully salaried PhD positions (CHF 50,000+/year), Oeschger Centre for Climate Change, space exploration missions, and faculty profiles.",
    overview: "Founded in 1834 in Switzerland's federal capital, the University of Bern (Universität Bern) is a comprehensive research university of international distinction and a founding member of the Guild of European Research-Intensive Universities. Associated with Albert Einstein (who served as privatdozent in Bern while publishing his Annus Mirabilis papers on special relativity) and renowned worldwide for space research—having supplied instruments for over 30 space missions, including the solar wind experiment deployed by Neil Armstrong on Apollo 11—Bern leads the world in ice-core climate science at the Oeschger Centre for Climate Change Research. Bern doctoral candidates are salaried academic employees with low tuition fees. Explore verified academic opportunities and admissions guidance.",
    admissions: {
      masters: "Recognized Bachelor's degree (or equivalent 180 ECTS credit qualification) from an accredited university in an aligned discipline with above-average grades.",
      phd: "Recognized Master's degree (120 ECTS) with excellent academic marks, strong thesis research background, and written confirmation of acceptance from an authorized Bern faculty supervisor.",
      language: "Academic IELTS 7.0 overall or TOEFL iBT 100 for English-taught graduate programs; C1 level German (TestDaF 4x4 or Goethe C1) for German-taught degrees.",
      proposal: "Detailed 3 to 5-page research proposal detailing research objectives, methodology, preliminary literature review, and academic work schedule.",
      appFee: "CHF 100 application fee for foreign credential evaluation via the Uni Bern online portal.",
      documents: "Complete official university transcripts, certified copies of degree diplomas, curriculum vitae, personal statement, and two academic referee letters."
    },
    tuitionText: "Tuition fees at the University of Bern are exceptionally modest by global standards. Tuition for foreign students is only CHF 750 per semester (approx. USD $1,650/year). Furthermore, doctoral students are salaried academic employees of the canton of Bern, receiving guaranteed annual salaries of CHF 48,000 to CHF 55,000 per year according to Swiss National Science Foundation (SNSF) salary scales.",
    opportunities: [
      {
        id: 641,
        subject: "environment",
        subjects: ["environment", "physics"],
        type: "Scholarship",
        title: "Bern Oeschger Centre for Climate Change Research (OCCR) Doctoral Fellowships",
        source: "https://www.oeschger.unibe.ch/education/phd_studies/",
        funding: "Fully funded salaried appointment: CHF 50,000 to CHF 56,000/year gross under SNSF scales plus Swiss social benefits and polar field expedition allowances",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual international doctoral intake round)",
        fee: "CHF 100 application fee",
        tuition: "Nominal CHF 750/semester tuition (covered by department fellowship).",
        requirements: {
          gpa: "Master's degree in Climate Science, Environmental Physics, Geosciences, or Chemistry with top academic standing.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Demonstrated coursework in atmospheric physics, ice-core analytics, or paleoclimate modeling.",
          references: "Two letters of recommendation from university professors."
        },
        desc: "Fully salaried four-year doctoral research fellowship at the world-renowned Oeschger Centre, analyzing Antarctic and Greenland ice cores to reconstruct greenhouse gas histories over 1.5 million years."
      },
      {
        id: 642,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "PhD",
        title: "Uni Bern PhD in Space Exploration and Planetary Science",
        source: "https://space.unibe.ch/education/phd_studies/",
        funding: "Salaried SNSF research assistant contract: CHF 50,000 to CHF 55,000/year gross for 3 to 4 years",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Departmental vacancy round)",
        fee: "CHF 100 application fee",
        tuition: "CHF 750/semester.",
        requirements: {
          gpa: "Master's degree in Physics, Astrophysics, or Aerospace Engineering with high honors.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Master's thesis or experience in mass spectrometry, space instrumentation, or exoplanet atmospheric models.",
          references: "Two academic referee letters."
        },
        desc: "Three to four-year research doctorate at the Space Research & Planetary Sciences division participating directly in ESA and NASA missions (JUICE, CHEOPS, Comet Interceptor)."
      },
      {
        id: 643,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Uni Bern Master of Science (MSc) in Computer Science (Joint Master with Neuchâtel & Fribourg)",
        source: "https://www.inf.unibe.ch/studies/master/index_eng.html",
        funding: "Swiss Government Excellence Scholarships and teaching assistantship positions (CHF 32/hour)",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Fall semester international application deadline)",
        fee: "CHF 100 application fee",
        tuition: "CHF 750/semester.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science or closely related field with minimum 180 ECTS.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Coursework in software engineering, distributed systems, and computer vision.",
          references: "Academic transcript and curriculum vitae."
        },
        desc: "Two-year English-taught Master of Science jointly offered by the Universities of Bern, Neuchâtel, and Fribourg, specializing in Machine Learning, Distributed Systems, and Information Security."
      },
      {
        id: 644,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Uni Bern Graduate School for Cellular and Biomedical Sciences (GCB) PhD Fellowships",
        source: "https://www.gcb.unibe.ch/",
        funding: "Fully funded: Salaried employment contract (CHF 48,000 to CHF 54,000/year gross) plus Swiss social benefits for 3 to 4 years",
        status: "open-program",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (Winter round) / April 15, 2027 (Spring round)",
        fee: "CHF 100 application fee",
        tuition: "CHF 750/semester.",
        requirements: {
          gpa: "Master's degree in Biochemistry, Cellular Biology, Immunology, or Medicine with distinction.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Documented laboratory research experience in molecular biology, cancer models, or structural immunology.",
          references: "Two academic letters of evaluation."
        },
        desc: "Interdisciplinary doctoral program run jointly by the Faculty of Medicine, Faculty of Science, and Vetsuisse Faculty, investigating tumor microenvironments, infectious diseases, and stem cell therapy."
      },
      {
        id: 645,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Research",
        title: "Uni Bern Postdoctoral Research Associate in Exoplanet Atmospheres & CHEOPS Science",
        source: "https://space.unibe.ch/research/exoplanets/",
        funding: "Salaried postdoctoral position: CHF 76,000 to CHF 86,000/year gross under SNSF research salary scales",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Salaried staff position; no tuition fees.",
        requirements: {
          gpa: "PhD in Astrophysics, Planetary Science, or Physics.",
          ielts: "Fluent professional English communication.",
          gre: "Not required.",
          papers: "Demonstrated publications in transit transmission spectroscopy, high-contrast imaging, or atmospheric retrieval codes.",
          references: "Three academic reference contacts."
        },
        desc: "Two-year postdoctoral position in the Center for Space and Habitability (CSH) analyzing photometric transit data from the space telescope CHEOPS and James Webb Space Telescope (JWST)."
      },
      {
        id: 646,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Uni Bern Master of International Law and Economics (MILE) at World Trade Institute",
        source: "https://www.wti.org/education/mile/",
        funding: "WTI Merit Scholarships covering partial to full tuition expenses",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (International intake deadline)",
        fee: "CHF 100 application fee",
        tuition: "CHF 24,000 for the full 1-year program (scholarship eligible).",
        requirements: {
          gpa: "Bachelor's or Master's in Law, Economics, or International Relations with top standing.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 105.",
          gre: "Not required.",
          papers: "Analytical writing sample or legal essay on international trade regulation.",
          references: "Two academic letters."
        },
        desc: "World's leading one-year postgraduate program at the World Trade Institute (WTI) combining international trade law, WTO dispute settlement, digital commerce, and climate border adjustments."
      },
      {
        id: 647,
        subject: "environment",
        subjects: ["environment", "physics"],
        type: "Internship",
        title: "Uni Bern Jungfraujoch High Altitude Research Station Summer Fellowship",
        source: "https://www.hfsjg.ch/",
        funding: "Stipend of CHF 2,500 for a 4-week high-altitude atmospheric research placement in the Swiss Alps",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer cohort deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Enrolled in undergraduate or Master's studies in meteorology, environmental physics, or atmospheric chemistry.",
          ielts: "Good English proficiency.",
          gre: "Not required.",
          papers: "Interest in greenhouse gas sampling and Alpine aerosol measurements.",
          references: "One professor reference letter."
        },
        desc: "Four-week research fellowship located at the Sphinx Observatory on the Jungfraujoch (3,454 m above sea level), monitoring European free-tropospheric greenhouse gas background concentrations."
      }
    ],
    researchers: [
      {
        id: 294,
        subject: "environment",
        name: "Dr. Thomas Stocker",
        title: "Professor of Climate and Environmental Physics & Former IPCC Working Group I Co-Chair",
        university: "University of Bern",
        country: "Switzerland",
        topics: ["Ice-Core Science", "Climate Modeling", "Thermohaline Circulation", "Abrupt Climate Change"],
        source: "https://www.oeschger.unibe.ch/about_us/people/prof_dr_stocker_thomas/",
        summary: "Dr. Stocker is a Marcel Benoist Prize laureate and former IPCC Co-Chair, internationally acclaimed for recovering deep Antarctic ice-core records demonstrating greenhouse gas fluctuations across glacial cycles."
      },
      {
        id: 295,
        subject: "physics",
        name: "Dr. Willy Benz",
        title: "Professor of Astrophysics & Principal Investigator of the CHEOPS Mission",
        university: "University of Bern",
        country: "Switzerland",
        topics: ["Exoplanets", "CHEOPS Space Telescope", "Planet Formation", "Smooth Particle Hydrodynamics"],
        source: "https://space.unibe.ch/people/benz/",
        summary: "Dr. Benz is an elected foreign member of the French Academy of Sciences and leading astrophysicist, serving as Principal Investigator of ESA's CHEOPS space mission characterizing exoplanetary radii and densities."
      },
      {
        id: 296,
        subject: "biology",
        name: "Dr. Britta Engelhardt",
        title: "Professor of Immunobiology & Director of the Theodor Kocher Institute",
        university: "University of Bern",
        country: "Switzerland",
        topics: ["Blood-Brain Barrier", "T Cell Migration", "Neuroinflammation", "Multiple Sclerosis"],
        source: "https://www.tki.unibe.ch/research/research_groups/prof_dr_britta_engelhardt/index_eng.html",
        summary: "Dr. Engelhardt is an internationally recognized authority on the blood-brain barrier and live-cell intravital imaging, directing investigations into immune cell trafficking across brain microvessels in neuroinflammatory diseases."
      }
    ]
  }
];
