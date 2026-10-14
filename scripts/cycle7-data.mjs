// Cycle 7 data: 10 premier research universities across 10 countries
// 70 verified opportunities (IDs 438-507), 30 researcher profiles (IDs 207-236)
// Dates reviewed: 2026-10-14, all deadlines >= 2026-10-14 or null

export const cycle7Universities = [
  // 1. CANADA: University of Calgary (Row 106)
  {
    institution: "University of Calgary",
    shortName: "UCalgary",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Calgary, Alberta, Canada",
    website: "https://www.ucalgary.ca",
    sourceRow: 106,
    slug: "university-of-calgary",
    heroEyebrow: "Canada · Alberta · U15 Research Powerhouse · Reviewed 14 October 2026",
    headline: "University of Calgary (Calgary, Alberta)",
    description: "University of Calgary guide: Graduate Award Competition, PhD in Computer Science ($25,000+ base funding), Schulich School of Engineering, and faculty profiles.",
    overview: "Founded in 1966 in Calgary, Alberta, the University of Calgary (UCalgary) is one of Canada's top comprehensive research institutions and a member of the prestigious U15. With over $500 million in annual sponsored research funding, UCalgary leads in energy transitions, biomedical engineering, quantum technologies, and data science. Explore verified graduate degrees, guaranteed doctoral base funding packages, and world-class faculty profiles.",
    admissions: {
      masters: "Four-year baccalaureate degree from a recognized institution with a minimum 3.0/4.0 GPA (equivalent to a B or 75%) over the last two undergraduate years (approx. 60 units).",
      phd: "Recognized Master's degree in a relevant discipline with a minimum 3.5/4.0 GPA (equivalent to an A- or 80%) and demonstrable thesis research experience.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-score) or TOEFL iBT 86 (minimum 20 in each section); higher for Computer Science and Engineering (IELTS 7.0 / TOEFL 97).",
      proposal: "Comprehensive 2-page statement of research interest articulating proposed doctoral investigations, theoretical foundations, and prospective supervisor alignment.",
      appFee: "CAD $125 for Canadian/permanent resident applicants; CAD $145 for international applicants via the online graduate portal.",
      documents: "Complete official academic transcripts, curriculum vitae, 2 to 3 academic reference letters, and research proposal/writing sample."
    },
    tuitionText: "Tuition for thesis-based graduate degrees is heavily subsidized and offset by departmental guaranteed funding packages. For full-time doctoral students in good standing, UCalgary faculties provide minimum guaranteed base funding of CAD $24,000 to $28,000 per year for four years (comprising graduate assistant research stipends, teaching assistantships, and university fellowships).",
    opportunities: [
      {
        id: 438,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "biology", "chemistry"],
        type: "Scholarship",
        title: "University of Calgary Graduate Award Competition (GAC) Doctoral Fellowships",
        source: "https://grad.ucalgary.ca/awards/opportunities/gac",
        funding: "Fully funded: Annual stipend of CAD $24,000 to $32,000/year plus tuition differential awards and travel research stipends for up to four years",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual university-wide Graduate Award Competition application deadline)",
        fee: "CAD $145 international graduate application fee",
        tuition: "Full tuition covered or offset through institutional fellowship awards.",
        requirements: {
          gpa: "First-class academic standing (minimum 3.5/4.0 GPA or equivalent A- average).",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5 or TOEFL iBT 97.",
          gre: "Not required for general GAC review; department dependent.",
          papers: "Demonstrated academic excellence, peer-reviewed publications, or strong Master's thesis record.",
          references: "Two academic referee appraisals submitted through the UCalgary portal."
        },
        desc: "UCalgary's central merit-based competition distributing over $15 million annually to incoming and continuing doctoral researchers across all faculties."
      },
      {
        id: 439,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "UCalgary PhD in Computer Science (Thesis)",
        source: "https://science.ucalgary.ca/computer-science/future-students/graduate/phd",
        funding: "Guaranteed minimum annual financial package of CAD $26,000/year for 4 years via teaching assistantships, research fellowships, and faculty grants",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall admission cycle deadline for international candidates)",
        fee: "CAD $145 international application fee",
        tuition: "Covered through graduate research and teaching stipends.",
        requirements: {
          gpa: "Recognized MSc in Computer Science or related quantitative field with minimum 3.3/4.0 GPA (typically 3.7+ competitive).",
          ielts: "Academic IELTS 7.0 overall with at least 6.5 in all bands or TOEFL iBT 97.",
          gre: "Optional but strongly recommended for international degree holders.",
          papers: "Evidence of independent research capability through thesis work or conference papers.",
          references: "Three academic reference letters."
        },
        desc: "Four-year doctoral program focusing on machine learning, human-computer interaction, visual analytics, cybersecurity, high-performance computing, and quantum software."
      },
      {
        id: 440,
        subject: "engineering",
        subjects: ["engineering"],
        type: "Master's",
        title: "UCalgary Master of Science (MSc) in Electrical and Computer Engineering",
        source: "https://schulich.ucalgary.ca/electrical-computer/future-students/graduate/msc",
        funding: "Guaranteed minimum funding package of CAD $22,000/year for 2 years (thesis stream)",
        status: "open-program",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Fall intake deadline for international candidates)",
        fee: "CAD $145 international application fee",
        tuition: "Offset by graduate assistantships and supervisor grants.",
        requirements: {
          gpa: "Four-year Bachelor's degree in Electrical/Computer Engineering with minimum 3.0/4.0 GPA.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.0 in each band) or TOEFL iBT 89.",
          gre: "Not required.",
          papers: "Undergraduate capstone design or published engineering research preferred.",
          references: "Two academic recommendation letters."
        },
        desc: "Two-year research-based Master's degree at the Schulich School of Engineering offering specialized tracks in autonomous systems, wireless communications, and microelectronics."
      },
      {
        id: 441,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Research",
        title: "UCalgary Quantum City Postdoctoral Research Fellowship in Quantum Information",
        source: "https://quantumcity.ca/careers/",
        funding: "Annual salary of CAD $65,000 to $75,000 plus full comprehensive extended health and dental benefits and travel allowance",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Annual Spring fellowship intake)",
        fee: "No fee for academic fellowship appointment",
        tuition: "Full post-doctoral salaried appointment; no tuition charged.",
        requirements: {
          gpa: "Completed PhD in Physics, Quantum Computing, Electrical Engineering, or Mathematics within the past 4 years.",
          ielts: "Fluent professional English communication.",
          gre: "Not required.",
          papers: "Demonstrated first-author publications in leading quantum information or optical physics journals.",
          references: "Three professional reference letters and a 3-page research project plan."
        },
        desc: "Two-year postdoctoral research appointment at the Institute for Quantum Science and Technology (IQST) developing quantum communications networks and superconducting sensors."
      },
      {
        id: 442,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        title: "UCalgary Biomedical Graduate Summer Research Fellowship (BGS-SRF)",
        source: "https://cumming.ucalgary.ca/gse/funding-and-awards",
        funding: "Living stipend of CAD $7,500 for a 16-week intensive laboratory research placement",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Summer cohort application deadline)",
        fee: "No fee to submit summer fellowship application",
        tuition: "No tuition charges; direct research studentship.",
        requirements: {
          gpa: "Enrolled in 3rd or 4th year undergraduate program in biological or biomedical sciences with minimum 3.2/4.0 GPA.",
          ielts: "Demonstrated academic English proficiency.",
          gre: "Not required.",
          papers: "Completed laboratory coursework in cellular biology, genetics, or physiology.",
          references: "One faculty member recommendation letter."
        },
        desc: "Four-month competitive summer research placement at the Cumming School of Medicine providing direct mentored benchwork in immunology, cancer biology, or neurosciences."
      },
      {
        id: 443,
        subject: "chemistry",
        subjects: ["chemistry", "environment", "engineering"],
        type: "Job",
        title: "UCalgary Research Associate / Lab Manager in Sustainable Catalysis & Clean Energy",
        source: "https://careers.ucalgary.ca/",
        funding: "Salaried academic appointment: CAD $58,000 - $68,000/year plus pension and benefits",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Departmental hiring review)",
        fee: "Free employment application through UCalgary Careers",
        tuition: "Salaried staff position; no tuition fees.",
        requirements: {
          gpa: "PhD in Chemistry, Chemical Engineering, or Materials Science.",
          ielts: "Fluent written and spoken English proficiency.",
          gre: "Not required.",
          papers: "Track record of publications in electrocatalysis, CO2 reduction, or hydrogen energy systems.",
          references: "Three professional references including previous principal investigators."
        },
        desc: "Full-time research management position supervising advanced analytical instrumentation (NMR, XRD, GC-MS) and coordinating multi-partner green hydrogen research grants."
      },
      {
        id: 444,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        title: "UCalgary Master of Arts (MA) in Economics",
        source: "https://arts.ucalgary.ca/economics/future-students/graduate/ma",
        funding: "Departmental financial support package of CAD $18,000 to $22,000/year via graduate teaching assistantships and awards",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall admission deadline)",
        fee: "CAD $145 international application fee",
        tuition: "Standard Alberta graduate tuition offset by assistantships.",
        requirements: {
          gpa: "Four-year Bachelor's degree in Economics or related quantitative discipline with minimum 3.0/4.0 GPA (3.4+ competitive).",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in each section) or TOEFL iBT 97.",
          gre: "GRE quantitative score of 160+ strongly recommended for international applicants.",
          papers: "Strong mathematical and statistical coursework (linear algebra, calculus, econometrics).",
          references: "Two academic reference letters."
        },
        desc: "Rigorous 12-to-24 month graduate program with specialized streams in environmental economics, financial econometrics, and regulatory policy analysis."
      }
    ],
    researchers: [
      {
        id: 207,
        subject: "computer-science",
        name: "Dr. Marina L. Gavrilova",
        title: "Professor of Computer Science & Head of Biometric Technologies Laboratory",
        university: "University of Calgary",
        country: "Canada",
        topics: ["Machine Learning", "Biometrics", "Cybersecurity", "Pattern Recognition"],
        source: "https://science.ucalgary.ca/contact-us/marina-gavrilova",
        summary: "Dr. Gavrilova leads the Biometric Technologies Laboratory at UCalgary, conducting seminal research in multimodal biometrics, machine learning for identity verification, behavioral data analytics, and computational geometry."
      },
      {
        id: 208,
        subject: "engineering",
        name: "Dr. Michael Kallos",
        title: "Professor of Biomedical Engineering & Director of Pharmaceutical Production Research Facility",
        university: "University of Calgary",
        country: "Canada",
        topics: ["Biomedical Engineering", "Stem Cell Bioprocessing", "Tissue Engineering", "Bioreactors"],
        source: "https://schulich.ucalgary.ca/contacts/michael-kallos",
        summary: "Dr. Kallos directs bioprocess engineering investigations for the scalable production of stem cells, cellular therapies, and tissue engineering applications at the Schulich School of Engineering."
      },
      {
        id: 209,
        subject: "physics",
        name: "Dr. Christoph Simon",
        title: "Professor of Physics & Astronomy & Quantum Information Research Chair",
        university: "University of Calgary",
        country: "Canada",
        topics: ["Quantum Information", "Quantum Optics", "Quantum Networks", "Quantum Biology"],
        source: "https://science.ucalgary.ca/contact-us/christoph-simon",
        summary: "Dr. Simon is an internationally acclaimed theoretical quantum physicist pioneering global quantum satellite repeaters, quantum memories, and quantum biological phenomena at UCalgary's IQST."
      }
    ]
  },

  // 2. AUSTRALIA: The University of Western Australia (Row 188)
  {
    institution: "The University of Western Australia",
    shortName: "UWA",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Perth, Western Australia, Australia",
    website: "https://www.uwa.edu.au",
    sourceRow: 188,
    slug: "the-university-of-western-australia",
    heroEyebrow: "Australia · Western Australia · Group of Eight (Go8) Premier University · Reviewed 14 October 2026",
    headline: "The University of Western Australia (Perth)",
    description: "The University of Western Australia guide: UWA Forrest Research Foundation Fellowships, PhD in Data Science ($35,000+ stipend), engineering degrees, and faculty profiles.",
    overview: "Established in 1911 as Western Australia's first university, The University of Western Australia (UWA) is a member of the prestigious Group of Eight (Go8) and ranked among the world's top 100 research institutions. Located on the picturesque Swan River in Perth, UWA is internationally renowned for its leadership in ocean engineering, mineral exploration, agricultural science, radio astronomy (home to the International Centre for Radio Astronomy Research - ICRAR), and biomedical science. Discover verified graduate opportunities, competitive doctoral scholarships, and distinguished researchers.",
    admissions: {
      masters: "Recognized Bachelor's degree (or equivalent qualification) from an accredited university with a minimum weighted average mark (WAM) of 60-65% depending on faculty.",
      phd: "Four-year Bachelor's degree with First Class Honours (H1) or a Master's degree with a significant research dissertation component (at least 25% of total course volume) graded at 75%+.",
      language: "Academic IELTS 6.5 overall (no individual band below 6.0) or TOEFL iBT 82 (reading 18, listening 20, speaking 20, writing 22); higher for law and clinical programs (IELTS 7.0/7.5).",
      proposal: "Detailed 1,000 to 2,000-word research proposal detailing background, methodology, theoretical framework, and alignment with UWA academic supervisors.",
      appFee: "AUD $100 international application fee via UWA apply online portal; fee waivers available for nominated international scholarship candidates.",
      documents: "Certified academic transcripts and degree certificates, formal curriculum vitae, research proposal, and contact details of two academic referees."
    },
    tuitionText: "International postgraduate research candidates are supported by extensive Australian Government and UWA scholarship schemes. Recipients of the UWA International Research Training Program (RTP) or UWA Postgraduate Awards receive a full international tuition fee waiver, an annual tax-free living allowance of AUD $35,000 to $40,000 per year for up to 3.5 years, and overseas student health cover (OSHC).",
    opportunities: [
      {
        id: 445,
        subject: "engineering",
        subjects: ["engineering", "computer-science", "physics", "environment", "biology"],
        type: "Scholarship",
        title: "UWA Forrest Research Foundation PhD Scholarships & Postdoctoral Fellowships",
        source: "https://www.forrestresearch.org.au/scholarships/",
        funding: "Fully funded: Living stipend of AUD $37,500/year plus AUD $12,000/year accommodation allowance, AUD $13,000 research travel grant, and full tuition fee waiver",
        status: "open-scholarship",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Annual mid-year round for international and domestic applicants)",
        fee: "Waived for Forrest Scholarship applicants",
        tuition: "Full tuition fee waiver for up to four years.",
        requirements: {
          gpa: "Outstanding academic record equivalent to Australian First Class Honours (WAM 85%+ or GPA 3.8/4.0).",
          ielts: "Academic IELTS 7.0 overall with no band below 6.5 or TOEFL iBT 95.",
          gre: "Not required.",
          papers: "Demonstrated track record of academic achievement, leadership, and potential for transformative research impact.",
          references: "Two comprehensive academic reference letters."
        },
        desc: "Prestigious Western Australian research scholarship offering exceptional financial support, residential accommodation at Forrest Hall, and mentorship for world-class doctoral scholars."
      },
      {
        id: 446,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "UWA PhD in Computer Science & Artificial Intelligence",
        source: "https://www.uwa.edu.au/study/courses/doctor-of-philosophy-computer-science",
        funding: "RTP-equivalent scholarship: AUD $35,000/year tax-free stipend for 3.5 years plus international tuition sponsorship",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Round 1 international postgraduate research scholarship deadline)",
        fee: "AUD $100 application fee",
        tuition: "Fully sponsored through RTP international fee offsetting.",
        requirements: {
          gpa: "Bachelor's degree with First Class Honours or Master's by Research in Computer Science/Software Engineering.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 82.",
          gre: "Not required.",
          papers: "Peer-reviewed publications in machine learning, computer vision, or algorithms preferred.",
          references: "Two academic referee reports."
        },
        desc: "Three to four-year research doctorate exploring deep learning, computer vision, autonomous robotics, privacy-preserving machine learning, and natural language processing."
      },
      {
        id: 447,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        title: "UWA Master of Professional Engineering (Civil & Offshore Engineering)",
        source: "https://www.uwa.edu.au/study/courses/master-of-professional-engineering",
        funding: "UWA Global Excellence Scholarship provides up to AUD $48,000 fee reduction ($12,000/year)",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Semester 1 February intake deadline)",
        fee: "AUD $100 application fee",
        tuition: "AUD $48,200/year (before merit scholarship reductions).",
        requirements: {
          gpa: "Recognized Bachelor of Engineering or Bachelor of Science with engineering major (minimum WAM 65%).",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 82.",
          gre: "Not required.",
          papers: "Engineering mathematics and structural mechanics prerequisite completion.",
          references: "Two academic references."
        },
        desc: "Engineers Australia and EUR-ACE accredited two-to-three year professional Master's degree specializing in marine geotechnics, offshore energy systems, and coastal infrastructure."
      },
      {
        id: 448,
        subject: "physics",
        subjects: ["physics", "computer-science"],
        type: "Research",
        title: "UWA ICRAR Postdoctoral Research Fellowship in Radio Astronomy & Big Data",
        source: "https://www.icrar.org/about/vacancies/",
        funding: "Salaried academic Level A/B appointment: AUD $92,000 to $108,000/year plus 17% superannuation employer contribution",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual recruitment round)",
        fee: "Free application via UWA job portal",
        tuition: "Salaried position; no tuition fees.",
        requirements: {
          gpa: "PhD in Astrophysics, Astronomy, Physics, or High Performance Computing.",
          ielts: "Fluent professional English proficiency.",
          gre: "Not required.",
          papers: "Extensive publications in radio interferometry, galaxy evolution, or Square Kilometre Array (SKA) data processing pipelines.",
          references: "Three professional reference letters."
        },
        desc: "Three-year postdoctoral research appointment at the International Centre for Radio Astronomy Research (ICRAR) working directly with Square Kilometre Array (SKA) pre-cursor data."
      },
      {
        id: 449,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        title: "UWA Oceans Institute Summer Research Studentship",
        source: "https://www.oceans.uwa.edu.au/students",
        funding: "Tax-free stipend of AUD $4,500 for an 8-week intensive marine research project",
        status: "open-program",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Summer vacation scholarship intake)",
        fee: "No application fee",
        tuition: "Full studentship; no tuition fees charged.",
        requirements: {
          gpa: "Current 3rd year undergraduate or Honours student with minimum WAM 70%.",
          ielts: "Demonstrated English proficiency.",
          gre: "Not required.",
          papers: "Coursework in marine biology, oceanography, or environmental science.",
          references: "One academic referee letter."
        },
        desc: "Two-month summer research program at the world-class UWA Oceans Institute investigating coral reef resilience, ocean acoustics, and sustainable fisheries."
      },
      {
        id: 450,
        subject: "mathematics",
        subjects: ["mathematics", "social-sciences"],
        type: "Master's",
        title: "UWA Master of Data Science",
        source: "https://www.uwa.edu.au/study/courses/master-of-data-science",
        funding: "UWA International Achievement Scholarship worth up to AUD $10,000/year reduction",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Semester 1 intake)",
        fee: "AUD $100 application fee",
        tuition: "AUD $46,500/year (subsidized by international scholarships).",
        requirements: {
          gpa: "Bachelor's degree in any discipline with tertiary mathematics/statistics units and minimum WAM 65%.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in all bands) or TOEFL iBT 82.",
          gre: "Not required.",
          papers: "Introductory programming in Python or R recommended.",
          references: "Academic transcript and resume."
        },
        desc: "Two-year conversion and advanced Master's degree equipping students with state-of-the-art computational statistics, cloud computing, machine learning, and ethical data governance."
      },
      {
        id: 451,
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Job",
        title: "UWA Research Associate in Synthetic Bio-Organic Chemistry & Drug Discovery",
        source: "https://www.uwa.edu.au/schools/molecular-sciences",
        funding: "Salaried academic appointment: AUD $88,000 to $98,000/year plus 17% superannuation",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (School recruitment deadline)",
        fee: "Free employment application",
        tuition: "Staff appointment; no tuition payable.",
        requirements: {
          gpa: "PhD in Organic Chemistry, Medicinal Chemistry, or Chemical Biology.",
          ielts: "Demonstrated professional English communication.",
          gre: "Not required.",
          papers: "First-author publications in peer-reviewed synthetic chemistry journals.",
          references: "Three academic/professional references."
        },
        desc: "Full-time two-year research position in the School of Molecular Sciences synthesizing targeted small-molecule therapeutics for antimicrobial resistance and oncology."
      }
    ],
    researchers: [
      {
        id: 210,
        subject: "computer-science",
        name: "Dr. Ajmal Mian",
        title: "Professor of Computer Science & Lead of 3D Computer Vision and AI Group",
        university: "The University of Western Australia",
        country: "Australia",
        topics: ["Computer Vision", "3D Shape Analysis", "Deep Learning", "Hyperspectral Imaging"],
        source: "https://research-repository.uwa.edu.au/en/persons/ajmal-mian",
        summary: "Dr. Mian is an ARC Future Fellow and internationally recognized authority in 3D computer vision, deep learning, face recognition, and hyperspectral data analysis at UWA."
      },
      {
        id: 211,
        subject: "physics",
        name: "Dr. Lister Staveley-Smith",
        title: "Professor of Astrophysics & ICRAR Co-Founder",
        university: "The University of Western Australia",
        country: "Australia",
        topics: ["Radio Astronomy", "Galaxy Evolution", "Interferometry", "Cosmology"],
        source: "https://research-repository.uwa.edu.au/en/persons/lister-staveley-smith",
        summary: "Dr. Staveley-Smith is a world-renowned radio astronomer leading large-scale neutral hydrogen galactic surveys and international instrumentation science for the Square Kilometre Array."
      },
      {
        id: 212,
        subject: "engineering",
        name: "Dr. Christophe Gaudin",
        title: "Professor of Geotechnical Engineering & Director of Oceans Graduate School",
        university: "The University of Western Australia",
        country: "Australia",
        topics: ["Offshore Geotechnics", "Marine Renewable Energy", "Centrifuge Modelling", "Subsea Foundations"],
        source: "https://research-repository.uwa.edu.au/en/persons/christophe-gaudin",
        summary: "Dr. Gaudin directs offshore foundation and anchoring research at UWA's world-class National Geotechnical Centrifuge Facility, supporting global offshore wind and oil/gas development."
      }
    ]
  },

  // 3. GERMANY: University of Bonn (Row 397)
  {
    institution: "University of Bonn",
    shortName: "Uni Bonn",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Bonn, North Rhine-Westphalia, Germany",
    website: "https://www.uni-bonn.de",
    sourceRow: 397,
    slug: "university-of-bonn",
    heroEyebrow: "Germany · North Rhine-Westphalia · German University of Excellence · Reviewed 14 October 2026",
    headline: "University of Bonn (Rheinische Friedrich-Wilhelms-Universität)",
    description: "University of Bonn guide: Hausdorff Center for Mathematics Fellowships, zero tuition, PhD in Computer Science & Robotics, and faculty profiles.",
    overview: "Founded in 1818, the University of Bonn (Rheinische Friedrich-Wilhelms-Universität Bonn) is one of Germany's most distinguished universities and one of only 11 certified German Universities of Excellence. Bonn boasts 6 Excellence Clusters—including the world-famous Hausdorff Center for Mathematics and ImmunoSensation. Home to numerous Nobel laureates and Fields medalists (such as Gerd Faltings and Peter Scholze), Bonn offers virtually tuition-free education, world-leading doctoral programs, and exceptional research infrastructure. Explore verified opportunities, admissions guidelines, and faculty leadership.",
    admissions: {
      masters: "Recognized Bachelor's degree (or equivalent 180 ECTS credit qualification) in a relevant field with an above-average German grade equivalent (minimum 2.5 or better on the German 1-5 scale).",
      phd: "Completed Master's degree (120 ECTS) with a research thesis graded at least 'good' (gut / 2.0 or better) and formal written acceptance by a Bonn doctoral supervisor.",
      language: "Academic IELTS 6.5 to 7.0 overall (minimum 6.0 in all bands) or TOEFL iBT 90+ for English-taught graduate programs; TestDaF 4x4 or DSH-2 for German-taught programs.",
      proposal: "Formal 3 to 5-page research proposal detailing research objectives, methodology, preliminary literature review, and academic work schedule.",
      appFee: "€0 application fee (Uni-Bonn does not charge application fees; nominal Uni-Assist fee may apply for international credential evaluation).",
      documents: "Certified academic transcripts, degree certificates, diploma supplements, statement of purpose, curriculum vitae, and two letters of recommendation."
    },
    tuitionText: "Public universities in North Rhine-Westphalia charge zero tuition fees for both EU and non-EU international students. Students pay only a nominal semester administration contribution (Semesterbeitrag) of approximately €330 per semester, which includes a free public transport ticket across the entire federal state of North Rhine-Westphalia and student union services. Doctoral positions are salaried civil service contracts (TV-L E13, 65%-100%).",
    opportunities: [
      {
        id: 452,
        subject: "mathematics",
        subjects: ["mathematics", "physics", "computer-science"],
        type: "Scholarship",
        title: "Bonn Hausdorff Center for Mathematics (HCM) Doctoral & Postdoctoral Fellowships",
        source: "https://www.hcm.uni-bonn.de/opportunities/",
        funding: "Fully funded: Salaried TV-L E13 position (€50,000 to €58,000/year gross) plus zero tuition and dedicated international conference travel grants",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual Hausdorff Doctoral & Postdoc international application deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition (nominal €330/semester administration and public transit fee).",
        requirements: {
          gpa: "Outstanding degree in Mathematics or Theoretical Physics (German grade 1.3 or top 5% of class).",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 95.",
          gre: "GRE Mathematics Subject Test recommended for international candidates.",
          papers: "Demonstrated mathematical rigor and research publications or exceptional thesis.",
          references: "Two confidential letters of recommendation from recognized mathematics professors."
        },
        desc: "Funded by Germany's Excellence Strategy, the Hausdorff Center awards prestigious doctoral and postdoctoral fellowships working alongside Fields medalists and world leaders in pure and applied mathematics."
      },
      {
        id: 453,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Uni Bonn PhD in Computer Science & Autonomous Robotics",
        source: "https://www.informatik.uni-bonn.de/en/studies/doctoral-studies",
        funding: "Funded research assistant position (TV-L E13, 100%, approx. €52,000/year gross) including statutory health and social insurance",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling admissions; funding allocation deadline for Fall intake)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Master's degree in Computer Science, Robotics, or Electrical Engineering with German grade 2.0 or better.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each section) or TOEFL iBT 88.",
          gre: "Not required.",
          papers: "Master's thesis or conference publications in robotics, computer vision, or machine learning.",
          references: "Two academic referee letters."
        },
        desc: "Three to four-year research doctorate exploring mobile manipulation, humanoid robots, cognitive systems, 3D perception, and SLAM in Bonn's renowned Autonomous Intelligent Systems laboratories."
      },
      {
        id: 454,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Uni Bonn Master of Science (MSc) in Computer Science (English-taught)",
        source: "https://www.informatik.uni-bonn.de/en/studies/master-programs/computer-science",
        funding: "Tuition-free program; DAAD and Bonn graduate foundation scholarships available",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Non-EU international applicant deadline for Summer/Fall intake)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees; €330/semester administration fee.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science with minimum 18 ECTS in theoretical computer science and 18 ECTS in mathematics.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 87.",
          gre: "Not required.",
          papers: "Demonstrated coursework rigor in algorithms and systems.",
          references: "Two academic recommendations."
        },
        desc: "Two-year international Master of Science degree taught 100% in English, offering research specializations in algorithms, visual computing, data science, and intelligent systems."
      },
      {
        id: 455,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Uni Bonn ImmunoSensation2 International Doctoral Fellowship",
        source: "https://www.immunosensation.de/career-training/graduate-school",
        funding: "Fully funded research contract: TV-L E13 65% (€34,000/year gross) with full social benefits and travel funding for 3 to 4 years",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Annual international recruitment call)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "MSc in Immunology, Molecular Biology, Biochemistry, or Medicine with excellent grades.",
          ielts: "Demonstrated English proficiency (IELTS 6.5+ or equivalent).",
          gre: "Not required.",
          papers: "Laboratory experience in flow cytometry, single-cell RNA sequencing, or mouse models.",
          references: "Two academic references."
        },
        desc: "Doctoral training within the ImmunoSensation2 Cluster of Excellence investigating innate immunity, neuro-immunology, and inflammatory disease mechanisms."
      },
      {
        id: 456,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Master's",
        title: "Uni Bonn Master of Science (MSc) in Physics (English-taught)",
        source: "https://www.physik-astro.uni-bonn.de/en/studies/master-physics",
        funding: "BCGS (Bonn-Cologne Graduate School) Honors Fellowships offering €934/month living stipend",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall admission and BCGS fellowship deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees; €330 semester social fee.",
        requirements: {
          gpa: "Bachelor's degree in Physics with high grades in quantum mechanics, statistical physics, and electrodynamics.",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 90.",
          gre: "GRE Physics recommended for non-EU applicants.",
          papers: "Strong undergraduate research or experimental laboratory coursework.",
          references: "Two recommendation letters."
        },
        desc: "Two-year research-focused Master's program in collaboration with the University of Cologne, covering particle physics, photonics, condensed matter, and astrophysics."
      },
      {
        id: 457,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "PhD",
        title: "Bonn Graduate School of Economics (BGSE) PhD Fellowships",
        source: "https://www.econ.uni-bonn.de/bgse/en",
        funding: "Fully funded: Monthly stipend of €1,450/month for the preparatory year, followed by TV-L E13 research contracts (€48,000/year gross)",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Annual international intake deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Bachelor's or Master's degree in Economics, Mathematics, or Statistics with superior quantitative standing.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 95.",
          gre: "GRE General quantitative score in the 90th percentile or above.",
          papers: "Writing sample or Bachelor's/Master's thesis in economics.",
          references: "Two confidential academic letters of evaluation."
        },
        desc: "Germany's top-ranked economics doctoral program, embedded within the ECONtribute Cluster of Excellence, specializing in microeconomic theory, behavioral economics, and public policy."
      },
      {
        id: 458,
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Internship",
        title: "Uni Bonn Center for Development Research (ZEF) Summer Research Fellowship",
        source: "https://www.zef.de/vacancies.html",
        funding: "Stipend of €1,200/month plus travel subsidy for 3-month research stay",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer intake deadline)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Enrolled in graduate studies in agricultural economics, environmental sciences, or geography.",
          ielts: "English fluency required.",
          gre: "Not required.",
          papers: "Demonstrated interest in sustainable land use, water governance, or food security in developing regions.",
          references: "One academic reference letter."
        },
        desc: "Three-month summer research opportunity at ZEF engaging with international interdisciplinary development projects in sub-Saharan Africa, Central Asia, and Latin America."
      }
    ],
    researchers: [
      {
        id: 213,
        subject: "computer-science",
        name: "Dr. Sven Behnke",
        title: "Professor of Computer Science & Head of Autonomous Intelligent Systems Group",
        university: "University of Bonn",
        country: "Germany",
        topics: ["Autonomous Robotics", "Deep Learning", "Cognitive Systems", "Computer Vision"],
        source: "https://www.ais.uni-bonn.de/behnke/",
        summary: "Dr. Behnke directs the Autonomous Intelligent Systems Group at Bonn, having led multiple international RoboCup championship teams and breakthrough research in humanoid robotics and disaster response automation."
      },
      {
        id: 214,
        subject: "mathematics",
        name: "Dr. Peter Scholze",
        title: "Director at Max Planck Institute for Mathematics & Professor of Mathematics",
        university: "University of Bonn",
        country: "Germany",
        topics: ["Arithmetic Geometry", "Perfectoid Spaces", "Algebraic Geometry", "p-adic Hodge Theory"],
        source: "https://www.hcm.uni-bonn.de/scholze/",
        summary: "Dr. Scholze is a Fields Medalist and pioneer of perfectoid spaces, recognized as one of the world's most influential mathematicians transforming contemporary arithmetic and algebraic geometry at Bonn."
      },
      {
        id: 215,
        subject: "biology",
        name: "Dr. Eicke Latz",
        title: "Professor of Immunobiology & Co-Founder of ImmunoSensation Cluster",
        university: "University of Bonn",
        country: "Germany",
        topics: ["Innate Immunity", "Inflammasomes", "Pattern Recognition Receptors", "Cardiovascular Immunology"],
        source: "https://www.immunosensation.de/research/researchers/latz",
        summary: "Dr. Latz is a Gottfried Wilhelm Leibniz Prize laureate leading world-renowned research into sterile inflammation, inflammasome activation mechanisms, and therapeutic interventions for chronic inflammatory diseases."
      }
    ]
  },

  // 4. ITALY: Università Bocconi (Row 538)
  {
    institution: "Università Bocconi",
    shortName: "Bocconi",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Milan, Lombardy, Italy",
    website: "https://www.unibocconi.it",
    sourceRow: 538,
    slug: "universita-bocconi",
    heroEyebrow: "Italy · Lombardy · World #4 in Business & Economics · Reviewed 14 October 2026",
    headline: "Università Bocconi (Milan)",
    description: "Università Bocconi guide: Full PhD Fellowships (100% tuition waiver + €18,000+ stipend), Master's in Data Science & Finance, and faculty profiles.",
    overview: "Founded in 1902 in Milan, Università Bocconi is one of Europe's top private research universities, consistently ranked in the global top 5 for Business, Economics, and Finance. Recognized globally for pioneering analytical approaches to economics, quantitative finance, decision sciences, and international law, Bocconi offers fully funded doctoral programs, generous merit awards, and an unparalleled European corporate and academic placement network. Explore verified graduate degrees, fellowship systems, and faculty leadership.",
    admissions: {
      masters: "Undergraduate degree (Bachelor's or equivalent) with high academic standing. Competitive candidates typically present GMAT scores of 650+ (Focus Edition 595+) or GRE equivalent.",
      phd: "Recognized Master's degree (or equivalent 4-year degree) in economics, finance, mathematics, statistics, computer science, or social sciences with top academic honors.",
      language: "Academic IELTS 6.5 or TOEFL iBT 89 (higher recommended for doctoral programs); Cambridge C1 Advanced/C2 Proficiency.",
      proposal: "Comprehensive 2 to 3-page research statement highlighting research questions, theoretical literature, quantitative methodology, and potential Bocconi faculty alignment.",
      appFee: "€100 application fee for Master of Science programs; €0 application fee for Bocconi PhD programs.",
      documents: "Complete official transcripts, CV, GMAT/GRE test score report, 2 confidential letters of recommendation, and personal motivation letter."
    },
    tuitionText: "For doctoral students, Bocconi awards 100% full-tuition waivers along with guaranteed tax-free living stipends of €18,000 to €21,000 per year for four years to all admitted PhD candidates, plus a 50% stipend increase during approved study-abroad research periods. For Master's programs, Bocconi Graduate Merit Awards provide 100% or 50% tuition reductions covering standard tuition fees (€16,000/year).",
    opportunities: [
      {
        id: 459,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Scholarship",
        title: "Bocconi PhD Full Fellowships in Economics, Finance & Management",
        source: "https://www.unibocconi.it/en/programs/phd",
        funding: "Fully funded: 100% full tuition waiver plus guaranteed tax-free annual stipend of €18,500/year for 4 years and 50% allowance increase for overseas research",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual international doctoral fellowship deadline)",
        fee: "€0 application fee for PhD programs",
        tuition: "Full 100% tuition waiver (€0 tuition) for all admitted doctoral students.",
        requirements: {
          gpa: "Master's or superior Bachelor's degree with top-tier grades in quantitative social sciences, mathematics, or business.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "GRE or GMAT score required (quantitative percentile typically 90%+ for successful candidates).",
          papers: "Statement of purpose, analytical writing sample, and research proposal.",
          references: "Two confidential academic reference letters."
        },
        desc: "All admitted Bocconi PhD candidates receive fully funded fellowships covering living costs and tuition, with placement records into top international universities (LSE, Harvard, MIT, Princeton) and central banks."
      },
      {
        id: 460,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Bocconi PhD in Statistics and Computer Science",
        source: "https://www.unibocconi.it/en/programs/phd/phd-statistics-and-computer-science",
        funding: "Guaranteed 4-year fellowship: €18,500/year stipend, full tuition waiver, and €2,000 research budget",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual intake deadline)",
        fee: "€0 application fee",
        tuition: "100% tuition waived.",
        requirements: {
          gpa: "Master's degree in Statistics, Computer Science, Mathematics, Physics, or Engineering with distinction.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Mandatory GRE General test score.",
          papers: "Demonstrated mathematical and programming proficiency (Python, R, C++).",
          references: "Two academic referee letters."
        },
        desc: "Four-year interdisciplinary PhD focusing on machine learning foundations, Bayesian statistics, high-dimensional probability, optimization, and algorithmic game theory."
      },
      {
        id: 461,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        title: "Bocconi Master of Science (MSc) in Economic and Social Sciences",
        source: "https://www.unibocconi.it/en/programs/master-science/economic-and-social-sciences",
        funding: "Bocconi Graduate Merit Awards provide 100% full-tuition waivers (€16,000/year value)",
        status: "open-program",
        deadline: "2027-01-28",
        deadlineText: "January 28, 2027 (International Round 2 deadline)",
        fee: "€100 application fee",
        tuition: "€16,000/year (offset by full or partial merit scholarships).",
        requirements: {
          gpa: "Bachelor's degree with high GPA and substantial background in microeconomics, macroeconomics, and mathematics.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 89.",
          gre: "GMAT or GRE test score strongly recommended for international applicants.",
          papers: "Academic dossier and curriculum vitae.",
          references: "Two letters of evaluation."
        },
        desc: "Rigorous two-year Master of Science preparing students for doctoral research or international institutions (IMF, World Bank, OECD) with deep mathematical modeling training."
      },
      {
        id: 462,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Master's",
        title: "Bocconi Master of Science (MSc) in Data Science and Business Analytics",
        source: "https://www.unibocconi.it/en/programs/master-science/data-science-and-business-analytics",
        funding: "Merit scholarships covering up to 100% tuition fees",
        status: "open-program",
        deadline: "2027-01-28",
        deadlineText: "January 28, 2027 (International admissions round)",
        fee: "€100 application fee",
        tuition: "€16,000/year (scholarship eligible).",
        requirements: {
          gpa: "Bachelor's degree in STEM, economics, or quantitative disciplines with top standing.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 89.",
          gre: "GMAT/GRE score required.",
          papers: "Demonstrated coursework in calculus, linear algebra, and computer programming.",
          references: "Two academic or professional references."
        },
        desc: "Two-year curriculum combining statistical learning, deep learning, scalable computing, and business optimization, taught entirely in English in Milan."
      },
      {
        id: 463,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        title: "Bocconi IGIER Postdoctoral Research Fellowship in Applied Economics",
        source: "https://igier.unibocconi.eu/jobs",
        funding: "Annual gross salary of €42,000 to €48,000 plus office space, travel budget, and research funds",
        status: "open-program",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Annual European Job Market recruitment)",
        fee: "Free submission via EconJobMarket",
        tuition: "Salaried research appointment; no tuition.",
        requirements: {
          gpa: "PhD in Economics, Econometrics, or Public Policy completed or near completion.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Working papers ready for submission to top general-interest economics journals.",
          references: "Three academic reference letters."
        },
        desc: "Two-year postdoctoral fellowship at the Innocenzo Gasparini Institute for Economic Research (IGIER) collaborating with leading European macroeconomists and political economists."
      },
      {
        id: 464,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Internship",
        title: "Bocconi B4i Startup & Innovation Summer Venture Traineeship",
        source: "https://b4i.unibocconi.it/",
        funding: "Monthly stipend of €1,000 plus co-working space and legal/business mentorship in Milan",
        status: "open-program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Summer cohort application deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Current graduate or undergraduate student with strong analytical and entrepreneurial drive.",
          ielts: "English proficiency.",
          gre: "Not required.",
          papers: "Innovative venture concept or technical project in AI, sustainability, or digital services.",
          references: "One referee or mentor letter."
        },
        desc: "Three-month summer incubation traineeship at Bocconi for Innovation (B4i) providing pre-seed capital access, legal advisory, and customer development training."
      },
      {
        id: 465,
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        type: "Master's",
        title: "Bocconi-Politecnico di Milano Joint MSc in Transformative Sustainability",
        source: "https://www.unibocconi.it/en/programs/master-science/transformative-sustainability",
        funding: "Joint scholarship awards covering partial to full tuition expenses",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Joint degree international round)",
        fee: "€100 application fee",
        tuition: "€16,000/year.",
        requirements: {
          gpa: "Bachelor's degree in engineering, economics, or environmental sciences with minimum 3.2/4.0 GPA.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 89.",
          gre: "GMAT or GRE score strongly recommended.",
          papers: "Personal statement demonstrating interdisciplinary commitment to sustainability.",
          references: "Two academic letters."
        },
        desc: "Pioneering joint degree between Bocconi University and Politecnico di Milano integrating ESG finance, environmental engineering, life-cycle assessment, and sustainable supply chains."
      }
    ],
    researchers: [
      {
        id: 216,
        subject: "social-sciences",
        name: "Dr. Tito Boeri",
        title: "Professor of Economics & Senior Fellow at IGIER",
        university: "Università Bocconi",
        country: "Italy",
        topics: ["Labor Economics", "Social Policy", "Welfare Systems", "Political Economy"],
        source: "https://faculty.unibocconi.eu/titoboeri/",
        summary: "Dr. Boeri is one of Europe's most prominent labor economists, former President of INPS (Italian Social Security Administration), and senior research fellow at IGIER and CEPR."
      },
      {
        id: 217,
        subject: "mathematics",
        name: "Dr. Pierpaolo Battigalli",
        title: "Professor of Decision Sciences & Department of Decision Sciences Chair",
        university: "Università Bocconi",
        country: "Italy",
        topics: ["Game Theory", "Epistemic Logic", "Decision Theory", "Behavioral Economics"],
        source: "https://faculty.unibocconi.eu/pierpaolobattigalli/",
        summary: "Dr. Battigalli is an internationally renowned game theorist, Fellow of the Econometric Society, and pioneer in epistemic game theory and dynamic psychological games."
      },
      {
        id: 218,
        subject: "computer-science",
        name: "Dr. Riccardo Zecchina",
        title: "Professor of Theoretical Physics & Machine Learning & Head of Department of Computing Sciences",
        university: "Università Bocconi",
        country: "Italy",
        topics: ["Machine Learning", "Statistical Physics", "Computational Complexity", "Optimization Algorithms"],
        source: "https://faculty.unibocconi.eu/riccardozecchina/",
        summary: "Dr. Zecchina was awarded the Lars Onsager Prize in Theoretical Statistical Physics and leads Bocconi's Department of Computing Sciences, bridging statistical mechanics and deep neural network dynamics."
      }
    ]
  },

  // 5. USA: Columbia University (Row 655)
  {
    institution: "Columbia University",
    shortName: "Columbia",
    countryId: "usa",
    countryLabel: "United States",
    location: "New York City, New York, United States",
    website: "https://www.columbia.edu",
    sourceRow: 655,
    slug: "columbia-university",
    heroEyebrow: "United States · New York · Ivy League Premier Research University · Reviewed 14 October 2026",
    headline: "Columbia University in the City of New York",
    description: "Columbia University guide: Fully funded PhD fellowships ($45,000+ stipend + 100% tuition waiver), Fu Foundation School of Engineering, and faculty profiles.",
    overview: "Established in 1754 as King's College, Columbia University is the oldest institution of higher learning in New York State and a founding member of the Ivy League. Ranked consistently among the top 15 universities in the world, Columbia is the birthplace of FM radio, the laser, MRI technology, and the Manhattan Project's early foundations. Operating state-of-the-art facilities across Morningside Heights, Manhattanville, and the Irving Medical Center, Columbia provides guaranteed multi-year funding packages for doctoral candidates, world-leading professional master's degrees, and distinguished faculty. Explore verified academic opportunities and admissions guidance.",
    admissions: {
      masters: "Conferred Bachelor's degree from an accredited institution with a strong academic transcript (typically 3.5+ GPA for competitive STEM and data science programs).",
      phd: "Undergraduate or Master's degree in an aligned discipline with exceptional academic achievement, demonstrable research capability, and strong faculty alignment.",
      language: "Academic IELTS 7.5 overall or TOEFL iBT 100+ (sub-scores 24+ recommended); required for applicants whose primary language of instruction was not English.",
      proposal: "Concise 2 to 3-page Statement of Academic Purpose detailing specific research inquiries, methodology, relevant laboratory experience, and faculty members of interest.",
      appFee: "USD $110 to $120 application fee submitted through Columbia GSAS or SEAS application portals; fee waivers available for eligible applicants.",
      documents: "Complete official electronic transcripts, curriculum vitae, 3 confidential letters of recommendation, statement of purpose, and writing sample where required."
    },
    tuitionText: "All admitted PhD students in the Graduate School of Arts and Sciences (GSAS) and Fu Foundation School of Engineering and Applied Science (SEAS) receive full financial support for up to five years. This guaranteed funding package includes a 100% tuition waiver, full payment of mandatory health fees and comprehensive health insurance premiums, and an annual living stipend of USD $45,000 to $48,000 per year.",
    opportunities: [
      {
        id: 466,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "PhD",
        title: "Columbia PhD in Computer Science (Fully Funded)",
        source: "https://www.cs.columbia.edu/education/phd/",
        funding: "Fully funded: 5-year package including 100% tuition waiver, health insurance, and annual living stipend of USD $47,000/year",
        status: "open-program",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Priority PhD admission deadline for Fall intake)",
        fee: "USD $120 application fee (waivers available upon request)",
        tuition: "100% tuition waived ($65,000/year value) for all doctoral scholars.",
        requirements: {
          gpa: "Bachelor's or Master's in Computer Science, Math, or Engineering with superior GPA (typically 3.7+ / 4.0).",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "GRE General test is optional.",
          papers: "Demonstrated research excellence through published papers or significant software projects.",
          references: "Three academic reference letters."
        },
        desc: "Five-year doctoral program covering foundational AI, natural language processing, computer vision, cryptography, distributed systems, quantum computing, and computational biology."
      },
      {
        id: 467,
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry"],
        type: "Scholarship",
        title: "Columbia SEAS Dean's Fellowship & Doctoral Research Assistantships",
        source: "https://www.engineering.columbia.edu/admissions/graduate/financial-aid",
        funding: "Fully funded: Guaranteed 5-year financial package providing full tuition, medical insurance, and living stipend ($46,000/year)",
        status: "open-scholarship",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Doctoral application deadline)",
        fee: "USD $120 application fee",
        tuition: "Full tuition coverage throughout doctoral candidacy.",
        requirements: {
          gpa: "Outstanding academic performance in undergraduate engineering or physical sciences (top 5% of graduating class).",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "Optional/not required by most engineering departments.",
          papers: "Clear statement of research purpose and laboratory achievements.",
          references: "Three confidential academic evaluations."
        },
        desc: "Prestigious fellowship awarded by the Fu Foundation School of Engineering to top incoming doctoral researchers across mechanical, biomedical, electrical, and chemical engineering."
      },
      {
        id: 468,
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Master's",
        title: "Columbia Master of Science (MS) in Data Science",
        source: "https://datascience.columbia.edu/education/programs/m-s-in-data-science/",
        funding: "Data Science Institute merit scholarships and on-campus research assistantships",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Priority deadline for international candidates)",
        fee: "USD $120 application fee",
        tuition: "USD $2,468 per credit (approx. 30 credits total; $74,040 full program).",
        requirements: {
          gpa: "Bachelor's degree with strong quantitative background in calculus, linear algebra, and programming in Python.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "GRE optional.",
          papers: "Personal statement demonstrating analytical curiosity and technical background.",
          references: "Three academic or professional recommendations."
        },
        desc: "Interdisciplinary 30-credit Master's degree jointly offered by Computer Science, Statistics, and Industrial Engineering through the Data Science Institute in NYC."
      },
      {
        id: 469,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Research",
        title: "Columbia Postdoctoral Research Scientist in Nanotechnology & 2D Materials",
        source: "https://nano.columbia.edu/opportunities",
        funding: "Annual salary of USD $72,000 to $80,000 plus full Columbia health and retirement benefits",
        status: "open-program",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Rolling review for Spring/Summer appointments)",
        fee: "Free employment application via Columbia RAPS portal",
        tuition: "Salaried academic appointment; no tuition charged.",
        requirements: {
          gpa: "PhD in Physics, Applied Physics, Materials Science, or Electrical Engineering.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Extensive experimental publication record in van der Waals heterostructures, graphene, or 2D semiconductor optics.",
          references: "Three professional reference letters."
        },
        desc: "Two-year postdoctoral position at the Columbia Nano Initiative and Center for Precision-Assembled Quantum Materials (PAQM) synthesizing and measuring novel low-dimensional quantum devices."
      },
      {
        id: 470,
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Master's",
        title: "Columbia Master of Public Administration in Environmental Science and Policy (MPA-ESP)",
        source: "https://www.sipa.columbia.edu/academics/programs/mpa-environmental-science-and-policy",
        funding: "SIPA Environmental Fellowships covering partial to full tuition expenses",
        status: "open-program",
        deadline: "2027-01-05",
        deadlineText: "January 5, 2027 (Fellowship priority application deadline)",
        fee: "USD $110 application fee",
        tuition: "Standard SIPA graduate tuition offset by fellowship aid.",
        requirements: {
          gpa: "Bachelor's degree with coursework in earth science, chemistry, or economics.",
          ielts: "Academic IELTS 7.5 or TOEFL iBT 100.",
          gre: "Optional.",
          papers: "Statement of purpose addressing a specific global climate resilience challenge.",
          references: "Three letters of recommendation."
        },
        desc: "Intensive 12-month program at the Columbia Climate School and SIPA training leaders in climate mitigation, environmental law, renewable finance, and planetary stewardship."
      },
      {
        id: 471,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        title: "Columbia Summer Undergraduate Research Fellowship (SURF) in Biological Sciences",
        source: "https://www.biology.columbia.edu/undergrad/surf",
        funding: "Living stipend of USD $5,000 plus complimentary Columbia University on-campus housing in Manhattan for 10 weeks",
        status: "open-program",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual summer application deadline)",
        fee: "No application fee",
        tuition: "No tuition charges; fully funded summer fellowship.",
        requirements: {
          gpa: "Undergraduate student currently enrolled in biology, biochemistry, or biophysics with 3.3+ GPA.",
          ielts: "English language proficiency.",
          gre: "Not required.",
          papers: "Demonstrated passion for fundamental biological laboratory research.",
          references: "Two letters of recommendation from science professors."
        },
        desc: "Ten-week immersive summer research experience in Morningside Heights conducting mentored hands-on experiments in genetics, neurobiology, or structural biology."
      },
      {
        id: 472,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Job",
        title: "Columbia Postdoctoral Fellow in the Society of Fellows in the Humanities",
        source: "https://societyoffellows.columbia.edu/fellowship",
        funding: "Annual stipend of USD $75,000 plus USD $7,000 research travel allowance and full Columbia benefits package",
        status: "open-program",
        deadline: "2026-11-01",
        deadlineText: "November 1, 2026 (Annual international competition deadline)",
        fee: "Free application",
        tuition: "Full post-doctoral salary; no tuition.",
        requirements: {
          gpa: "PhD in Humanities or Social Sciences received between January 1, 2024 and July 1, 2027.",
          ielts: "Native or near-native English proficiency.",
          gre: "Not required.",
          papers: "Significant book dissertation or monograph chapter in cultural studies, history, or political theory.",
          references: "Three letters of recommendation."
        },
        desc: "Prestigious two-year postdoctoral appointment offering independent intellectual freedom to conduct interdisciplinary research and teach one undergraduate course per semester at Columbia."
      }
    ],
    researchers: [
      {
        id: 219,
        subject: "computer-science",
        name: "Dr. Kathleen McKeown",
        title: "Henry and Gertrude Rothschild Professor of Computer Science & Founding Director of Data Science Institute",
        university: "Columbia University",
        country: "United States",
        topics: ["Natural Language Processing", "Text Summarization", "Conversational AI", "Digital Libraries"],
        source: "https://www.cs.columbia.edu/~kathy/",
        summary: "Dr. McKeown is an AAAI, ACM, and ACL Fellow and founding director of Columbia's Data Science Institute, internationally recognized for pioneering natural language generation and automated multi-document summarization."
      },
      {
        id: 220,
        subject: "physics",
        name: "Dr. Philip Kim",
        title: "Professor of Physics & Applied Physics",
        university: "Columbia University",
        country: "United States",
        topics: ["Graphene", "Mesoscopic Physics", "Quantum Hall Effect", "Low-Dimensional Nanomaterials"],
        source: "https://www.physics.columbia.edu/content/philip-kim",
        summary: "Dr. Kim is an Oliver E. Buckley Condensed Matter Prize winner and world-renowned pioneer in the experimental discovery of the anomalous quantum Hall effect in graphene and 2D materials."
      },
      {
        id: 221,
        subject: "engineering",
        name: "Dr. Gordana Vunjak-Novakovic",
        title: "University Professor & Mikati Foundation Professor of Biomedical Engineering",
        university: "Columbia University",
        country: "United States",
        topics: ["Tissue Engineering", "Stem Cells", "Organ-on-a-Chip", "Regenerative Medicine"],
        source: "https://bme.columbia.edu/faculty/gordana-vunjak-novakovic",
        summary: "Dr. Vunjak-Novakovic is an elected member of all three US National Academies (Medicine, Engineering, Sciences) and directs Columbia's Laboratory for Stem Cells and Tissue Engineering."
      }
    ]
  },

  // 6. UK: King's College London (Row 1254)
  {
    institution: "King's College London",
    shortName: "King's",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "London, England, United Kingdom",
    website: "https://www.kcl.ac.uk",
    sourceRow: 1254,
    slug: "kings-college-london",
    heroEyebrow: "United Kingdom · London · Russell Group Leading Research Institution · Reviewed 14 October 2026",
    headline: "King's College London (Strand, London)",
    description: "King's College London guide: King's Doctoral Studentships (£21,000+ tax-free stipend), MSc in Artificial Intelligence, Health & Biomedical research, and faculty profiles.",
    overview: "Founded in 1829 by King George IV and the Duke of Wellington, King's College London (KCL) is England's fourth-oldest university and a core member of the prestigious Russell Group. Ranked among the world's top 40 universities, King's has made profound contributions to science and society—including Rosalind Franklin and Maurice Wilkins' pivotal X-ray crystallography of DNA, and Peter Higgs' conceptualization of the Higgs boson. Situated in central London across Strand, Waterloo, Guy's, and St Thomas' campuses, King's offers world-class doctoral studentships, advanced Master's programs, and distinguished research leaders. Explore verified academic opportunities and admissions guidance.",
    admissions: {
      masters: "UK 2:1 Honours degree (or international equivalent, typically minimum 3.3/4.0 GPA or 65%+ UK mark equivalent) in an aligned discipline.",
      phd: "Master's degree with Merit or Distinction (or UK 1st Class Honours undergraduate degree) with demonstrable research expertise and supervisor agreement.",
      language: "Academic IELTS 6.5 to 7.0 overall (minimum 6.0 to 6.5 in all sub-tests depending on faculty band) or TOEFL iBT 92 to 100.",
      proposal: "Comprehensive 1,500 to 2,000-word research proposal describing original research questions, literature context, methodological design, and prospective KCL supervisor alignment.",
      appFee: "£75 to £120 non-refundable application fee for taught postgraduate courses; £0 to £75 for research degrees via King's Apply portal.",
      documents: "Official academic transcripts, certified English translations, degree certificates, CV, 2 academic reference letters, and research proposal."
    },
    tuitionText: "Tuition fees for international doctoral students are covered by competitive research councils and King's studentships. Full-award recipients under the King's Doctoral Studentship scheme receive a 100% international tuition fee waiver, a tax-free living stipend aligned with London UKRI rates (currently £21,237 per year for 3.5 to 4 years), and an annual research training support grant (RTSG) of £1,000 to £2,500.",
    opportunities: [
      {
        id: 473,
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Scholarship",
        title: "King's College London Doctoral Studentships in Informatics & AI",
        source: "https://www.kcl.ac.uk/informatics/postgraduate-research",
        funding: "Fully funded: UKRI London rate tax-free living stipend of £21,237/year for 3.5 years plus 100% full international tuition fee waiver and £1,500 annual research grant",
        status: "open-scholarship",
        deadline: "2027-01-22",
        deadlineText: "January 22, 2027 (Annual Faculty PGR studentship competition deadline)",
        fee: "£0 for doctoral research studentship application",
        tuition: "Full international tuition fees covered (£31,500/year value).",
        requirements: {
          gpa: "First-class UK Honours degree or Master's with Distinction in Computer Science, Mathematics, or Electrical Engineering.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in each sub-score) or TOEFL iBT 92.",
          gre: "Not required.",
          papers: "Demonstrated programming competence and research proposal aligned with Informatics faculty.",
          references: "Two academic referee letters submitted via King's Apply."
        },
        desc: "King's flagship funded doctoral studentship scheme supporting groundbreaking research in machine learning, cybersecurity, autonomous systems, and medical imaging."
      },
      {
        id: 474,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "King's Master of Science (MSc) in Artificial Intelligence",
        source: "https://www.kcl.ac.uk/study/postgraduate-taught/courses/artificial-intelligence-msc",
        funding: "King's International Postgraduate Taught Merit Scholarships (£10,000 fee reduction)",
        status: "open-program",
        deadline: "2027-03-05",
        deadlineText: "March 5, 2027 (International applicant priority consideration deadline)",
        fee: "£120 application fee",
        tuition: "£35,244/year for overseas international students.",
        requirements: {
          gpa: "UK 2:1 Honours degree (or equivalent GPA 3.3/4.0) in Computer Science, Mathematics, or closely related quantitative field.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Substantial programming background in Python, Java, or C++ and linear algebra.",
          references: "One academic reference letter and statement of purpose."
        },
        desc: "Comprehensive one-year Master of Science course covering deep learning, reinforcement learning, multi-agent systems, computer vision, and AI philosophy at the historic Strand campus."
      },
      {
        id: 475,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "King's Wellcome Trust 4-Year PhD in Cellular and Molecular Mechanisms of Health & Disease",
        source: "https://www.kcl.ac.uk/study/postgraduate-research/areas/cellular-molecular-mechanisms",
        funding: "Fully funded: Enhanced tax-free stipend starting at £23,500/year plus full tuition fees and £10,000/year lab research budget for 4 years",
        status: "open-program",
        deadline: "2026-12-08",
        deadlineText: "December 8, 2026 (Annual Wellcome Trust cohort deadline)",
        fee: "£0 application fee",
        tuition: "100% tuition fees covered.",
        requirements: {
          gpa: "Undergraduate degree with 1st Class or 2:1 Honours in biological sciences, medicine, or biochemistry.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in each band) or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Demonstrated laboratory research experience and analytical rigor.",
          references: "Two academic referee letters."
        },
        desc: "Four-year cohort-based doctoral training program comprising three laboratory rotation projects in year one followed by a three-year primary PhD project at Guy's campus."
      },
      {
        id: 476,
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Research",
        title: "King's Postdoctoral Research Associate in Quantum Photonics & Nanomaterials",
        source: "https://jobs.kcl.ac.uk/",
        funding: "Salaried academic Grade 6 position: £42,405 to £49,794/year inclusive of London Allowance, plus 21.6% USS pension contribution",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Full-time salaried staff role; no tuition.",
        requirements: {
          gpa: "PhD in Experimental Physics, Photonics, or Materials Science.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Strong record of publications in nanophotonics, plasmonics, or ultrafast laser spectroscopy.",
          references: "Three academic reference contacts."
        },
        desc: "Two-year postdoctoral position in the Department of Physics investigating light-matter interactions at the nanoscale and nanostructured materials for quantum information processing."
      },
      {
        id: 477,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Master's",
        title: "King's Master of Arts (MA) in War Studies",
        source: "https://www.kcl.ac.uk/study/postgraduate-taught/courses/war-studies-ma",
        funding: "Departmental bursaries and Sir Michael Howard Scholarships (£10,000 fee contribution)",
        status: "open-program",
        deadline: "2027-03-05",
        deadlineText: "March 5, 2027 (International application deadline)",
        fee: "£75 application fee",
        tuition: "£29,472/year for overseas students.",
        requirements: {
          gpa: "UK 2:1 Honours degree (or international GPA 3.3/4.0) in history, international relations, politics, or economics.",
          ielts: "Academic IELTS 7.0 overall (minimum 6.5 in all skills) or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Strong analytical writing sample (approx. 2,000 words).",
          references: "Two academic recommendation letters."
        },
        desc: "World-leading one-year postgraduate program within King's renowned Department of War Studies exploring international security, diplomacy, strategic doctrine, and global conflict resolution."
      },
      {
        id: 478,
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Internship",
        title: "King's Chemistry & Bio-imaging Undergraduate Summer Traineeship",
        source: "https://www.kcl.ac.uk/chemistry/study/undergraduate/summer-projects",
        funding: "Living bursary of £2,400 for an 8-week structured laboratory research internship",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer cohort deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Current 2nd or 3rd year undergraduate student in Chemistry, Pharmacy, or Biochemistry with 2:1 standing.",
          ielts: "Competent English communication.",
          gre: "Not required.",
          papers: "Enthusiasm for experimental synthetic chemistry or medical radiochemistry.",
          references: "One academic tutor reference."
        },
        desc: "Eight-week hands-on summer research studentship in central London labs investigating molecular imaging probes, radiopharmaceuticals, and chemical biology."
      },
      {
        id: 479,
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Job",
        title: "King's Research Fellow in Surgical Robotics & Medical Mechatronics",
        source: "https://www.kcl.ac.uk/bmeis/our-departments/surgical-interventional-engineering",
        funding: "Academic Grade 7 salary: £50,088 to £57,324/year including London Weighting and pension benefits",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Departmental recruitment)",
        fee: "Free application",
        tuition: "Salaried faculty post; no tuition fees.",
        requirements: {
          gpa: "PhD in Robotics, Mechatronics, Biomedical Engineering, or Computer Vision.",
          ielts: "Professional English communication.",
          gre: "Not required.",
          papers: "Demonstrated engineering prototypes and publications in IEEE Transactions on Robotics or equivalent.",
          references: "Three professional reference letters."
        },
        desc: "Three-year research fellowship at the School of Biomedical Engineering & Imaging Sciences based at St Thomas' Hospital developing AI-assisted robotic surgical tools."
      }
    ],
    researchers: [
      {
        id: 222,
        subject: "computer-science",
        name: "Dr. Michael Luck",
        title: "Professor of Computer Science & Director of the King's Institute for Artificial Intelligence",
        university: "King's College London",
        country: "United Kingdom",
        topics: ["Multi-Agent Systems", "Artificial Intelligence", "Autonomous Agents", "Trust and Reputation"],
        source: "https://www.kcl.ac.uk/people/michael-luck",
        summary: "Dr. Luck is a leading authority in multi-agent systems and former Head of the School of Natural and Mathematical Sciences, currently directing the King's Institute for Artificial Intelligence."
      },
      {
        id: 223,
        subject: "biology",
        name: "Dr. Fiona Watt",
        title: "Professor of Regenerative Medicine & Director of the Centre for Stem Cells & Regenerative Medicine",
        university: "King's College London",
        country: "United Kingdom",
        topics: ["Stem Cell Biology", "Epidermal Stem Cells", "Tissue Regeneration", "Cell Fate"],
        source: "https://www.kcl.ac.uk/people/fiona-watt",
        summary: "Dr. Watt is a Fellow of the Royal Society and Academy of Medical Sciences, internationally acclaimed for elucidating the intrinsic mechanisms that regulate mammalian stem cell self-renewal and epidermal differentiation."
      },
      {
        id: 224,
        subject: "physics",
        name: "Dr. Anatoly Zayats",
        title: "Chair in Experimental Physics & Head of Photonics & Nanotechnology Group",
        university: "King's College London",
        country: "United Kingdom",
        topics: ["Nanophotonics", "Plasmonics", "Metamaterials", "Ultrafast Optics"],
        source: "https://www.kcl.ac.uk/people/anatoly-zayats",
        summary: "Dr. Zayats is a Fellow of the Institute of Physics and Optica, leading pioneering investigations in nanophotonics, plasmonic metamaterials, and non-linear optical nanodevices at King's."
      }
    ]
  },

  // 7. JAPAN: Kyushu University (Row 1701)
  {
    institution: "Kyushu University",
    shortName: "Kyudai",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Fukuoka, Kyushu, Japan",
    website: "https://www.kyushu-u.ac.jp",
    sourceRow: 1701,
    slug: "kyushu-university",
    heroEyebrow: "Japan · Fukuoka · National Seven Imperial University · Reviewed 14 October 2026",
    headline: "Kyushu University (Ito Campus, Fukuoka)",
    description: "Kyushu University guide: MEXT Japanese Government Scholarships (¥145,000/month), English-taught PhD in Information Science, Hydrogen Energy, and faculty profiles.",
    overview: "Founded in 1911 as one of Japan's legendary National Seven Imperial Universities, Kyushu University (Kyudai) is a top designated national university headquartered in Fukuoka. With Japan's largest university campus—the sprawling Ito Campus—Kyushu University is an international scientific powerhouse leading the nation's clean energy transition as home to the International Institute for Carbon-Neutral Energy Research (I²CNER), the Next-Generation Fuel Cell Research Center, and cutting-edge supercomputing centers. Explore verified degree courses, Japanese Government MEXT scholarship procedures, and faculty leadership.",
    admissions: {
      masters: "16 years of formal education culminating in a recognized Bachelor's degree (or equivalent academic certification) with superior academic standing.",
      phd: "Recognized Master's degree (or professional degree) in a relevant discipline with demonstrable thesis research and academic publications.",
      language: "Academic IELTS 6.5 overall or TOEFL iBT 80+ for international English-taught graduate programs; JLPT N2/N1 for Japanese-medium courses.",
      proposal: "Detailed 2 to 3-page research plan in English or Japanese outlining research purpose, proposed methodologies, and prospective supervisor endorsement.",
      appFee: "¥30,000 examination fee for general graduate application; completely waived for Japanese Government (MEXT) scholarship recipients.",
      documents: "Official academic transcripts, graduation certificates, thesis abstract, research proposal, 2 recommendation letters, and prospective supervisor acceptance letter."
    },
    tuitionText: "Tuition for national universities in Japan is standardized by the Ministry of Education (MEXT). Standard tuition is ¥535,800 per year (approx. USD $3,600/year) plus a one-time admission fee of ¥282,000. MEXT Japanese Government Scholarship recipients receive 100% full tuition and admission fee exemptions, round-trip international airfare, and a tax-free monthly living stipend of ¥144,000 (Master's) to ¥147,000 (PhD) per month.",
    opportunities: [
      {
        id: 480,
        subject: "engineering",
        subjects: ["engineering", "chemistry", "physics", "computer-science"],
        type: "Scholarship",
        title: "Kyushu University MEXT University-Recommended Japanese Government Scholarships",
        source: "https://www.isc.kyushu-u.ac.jp/intlweb/en/admission/mext",
        funding: "Fully funded: Monthly stipend of ¥147,000/month for doctoral students (¥144,000/month for Master's) plus 100% tuition waiver and round-trip economy airfare",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual university recommendation deadline for October 2027 enrollment)",
        fee: "¥0 examination fee for MEXT applicants",
        tuition: "Full 100% tuition and admission fees waived by the Japanese Government.",
        requirements: {
          gpa: "Minimum GPA of 2.30/3.00 on the MEXT scale (equivalent to 80%+ or 3.4/4.0 GPA).",
          ielts: "Academic IELTS 6.5 overall or TOEFL iBT 80+ or CEFR B2 equivalent.",
          gre: "Not required.",
          papers: "Well-formulated research plan aligned with a Kyushu University professor who has agreed to supervise.",
          references: "Recommendation letter from Dean or Department Chair of home institution."
        },
        desc: "Prestigious Japanese Government scholarship providing complete financial security, housing assistance, and tuition waivers for top international graduate students at Kyushu University."
      },
      {
        id: 481,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Kyushu University Graduate School of Information Science and Electrical Engineering (ISEE) English PhD",
        source: "https://www.isee.kyushu-u.ac.jp/e/admissions.html",
        funding: "JSPS DC Doctoral Research Fellowships (¥200,000/month) and Kyudai Research Assistantships",
        status: "open-program",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027 (Fall October intake application deadline)",
        fee: "¥30,000 examination fee",
        tuition: "¥535,800/year (tuition exemption available for up to 100% upon application).",
        requirements: {
          gpa: "Master's degree in Computer Science, Electrical Engineering, or Applied Mathematics with solid academic results.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 80.",
          gre: "Not required.",
          papers: "Master's thesis summary and prospective research proposal.",
          references: "Two academic recommendation letters."
        },
        desc: "Three-year research doctoral program taught entirely in English covering cybersecurity, computer vision, natural language processing, semiconductor devices, and high-performance computing."
      },
      {
        id: 482,
        subject: "chemistry",
        subjects: ["chemistry", "engineering", "environment"],
        type: "Master's",
        title: "Kyushu University Master of Engineering in Applied Chemistry (English Course)",
        source: "https://www.chem.kyushu-u.ac.jp/english/",
        funding: "Kyushu University International Student Support Fund scholarships (¥60,000 to ¥100,000/month)",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (April/October admission cycles)",
        fee: "¥30,000 examination fee",
        tuition: "¥535,800/year.",
        requirements: {
          gpa: "Bachelor's degree in Chemistry, Chemical Engineering, or Materials Science with minimum 3.0/4.0 GPA.",
          ielts: "Academic IELTS 6.0+ or TOEFL iBT 79+.",
          gre: "Not required.",
          papers: "Undergraduate laboratory research thesis or capstone project in synthetic or physical chemistry.",
          references: "Two academic referee letters."
        },
        desc: "Two-year Master of Engineering program providing intensive training in molecular catalysis, polymer chemistry, battery materials, and organic electronics at Ito Campus."
      },
      {
        id: 483,
        subject: "physics",
        subjects: ["physics", "engineering", "environment"],
        type: "Research",
        title: "Kyushu University I²CNER Postdoctoral Research Fellowship in Hydrogen Energy & Fuel Cells",
        source: "https://i2cner.kyushu-u.ac.jp/en/recruit/",
        funding: "Annual salary of ¥5,500,000 to ¥6,800,000 plus relocation allowance, health insurance, and dedicated laboratory research funds",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (International recruitment review)",
        fee: "Free employment application",
        tuition: "Salaried academic post; no tuition.",
        requirements: {
          gpa: "PhD in Physics, Materials Science, Chemical Engineering, or Mechanical Engineering.",
          ielts: "Fluent spoken and written English.",
          gre: "Not required.",
          papers: "Demonstrated first-author publications in electrocatalysis, hydrogen embrittlement, or solid oxide fuel cells.",
          references: "Three professional reference letters."
        },
        desc: "Two to three-year postdoctoral research appointment at the International Institute for Carbon-Neutral Energy Research (I²CNER), established under the World Premier International (WPI) initiative."
      },
      {
        id: 484,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Kyushu University International Graduate Program in Biological Sciences & Agriculture",
        source: "https://www.agr.kyushu-u.ac.jp/english/education/graduate/",
        funding: "MEXT and JASSO Honors Scholarships providing ¥48,000/month plus university tuition waivers",
        status: "open-program",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Autumn intake deadline)",
        fee: "¥30,000 examination fee",
        tuition: "¥535,800/year (50% or 100% waiver available based on financial need).",
        requirements: {
          gpa: "Master's degree in Biological Sciences, Agricultural Chemistry, or Biotechnology.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 80.",
          gre: "Not required.",
          papers: "Published research papers or detailed thesis report.",
          references: "Two academic recommendations."
        },
        desc: "Three-year doctoral curriculum focusing on functional genomics, marine biotechnology, bioresource utilization, and molecular plant pathology."
      },
      {
        id: 485,
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Internship",
        title: "Kyushu University Ito Campus International Summer Research Internship (Q-SRI)",
        source: "https://www.isc.kyushu-u.ac.jp/intlweb/en/study/short-term",
        funding: "¥100,000 travel and living allowance plus complimentary university dormitory accommodation for 6 weeks",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Summer internship deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Currently enrolled undergraduate or Master's student in engineering or science with top 20% class standing.",
          ielts: "Good English conversational and scientific skills.",
          gre: "Not required.",
          papers: "Personal statement and transcript.",
          references: "One professor recommendation letter."
        },
        desc: "Six-week mentored summer laboratory experience on the Ito Campus, giving international students direct access to Kyudai clean energy and robotics laboratories."
      },
      {
        id: 486,
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        type: "Master's",
        title: "Kyushu University Master of Arts in International Relations & East Asian Studies (LL.M./M.A.)",
        source: "https://www.law.kyushu-u.ac.jp/programsinenglish/",
        funding: "Asian Development Bank - Japan Scholarship Program (full tuition, living allowance, and travel)",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (ADB-JSP and general international deadline)",
        fee: "¥30,000 examination fee",
        tuition: "¥535,800/year.",
        requirements: {
          gpa: "Bachelor's degree in Law, Political Science, Economics, or Humanities with minimum 3.0/4.0 GPA.",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Analytical writing sample or research proposal on East Asian economic integration or international law.",
          references: "Two academic letters."
        },
        desc: "One to two-year English-taught Master's program analyzing transnational commercial law, diplomatic security in the Asia-Pacific, and global environmental governance."
      }
    ],
    researchers: [
      {
        id: 225,
        subject: "chemistry",
        name: "Dr. Chihaya Adachi",
        title: "Distinguished Professor & Director of Center for Organic Photonics and Electronics Research (OPERA)",
        university: "Kyushu University",
        country: "Japan",
        topics: ["Thermally Activated Delayed Fluorescence (TADF)", "Organic Electronics", "OLEDs", "Optoelectronics"],
        source: "https://opera.kyushu-u.ac.jp/en/",
        summary: "Dr. Adachi is an internationally celebrated chemist and pioneer of 3rd-generation OLEDs through Thermally Activated Delayed Fluorescence (TADF), holding numerous international patents and Clarivate Highly Cited Researcher accolades."
      },
      {
        id: 226,
        subject: "engineering",
        name: "Dr. Petros Sofronis",
        title: "Director of International Institute for Carbon-Neutral Energy Research (I²CNER)",
        university: "Kyushu University",
        country: "Japan",
        topics: ["Hydrogen Embrittlement", "Mechanics of Materials", "Clean Energy", "Carbon Neutrality"],
        source: "https://i2cner.kyushu-u.ac.jp/en/people/staff/sofronis/",
        summary: "Dr. Sofronis directs the WPI-I²CNER institute at Kyushu University, leading international joint research with the University of Illinois Urbana-Champaign in fundamental mechanics of hydrogen-material interactions."
      },
      {
        id: 227,
        subject: "computer-science",
        name: "Dr. Seiichi Uchida",
        title: "Distinguished Professor of Information Science & Head of Pattern Recognition Lab",
        university: "Kyushu University",
        country: "Japan",
        topics: ["Pattern Recognition", "Document Analysis", "Computer Vision", "Bioimage Informatics"],
        source: "https://human.ait.kyushu-u.ac.jp/en/",
        summary: "Dr. Uchida is an IEEE and IAPR Fellow leading research in multimodal character recognition, deep learning for bioimage interpretation, and human-behavior understanding at Kyushu University."
      }
    ]
  },

  // 8. SWEDEN: Karolinska Institute (Row 1582)
  {
    institution: "Karolinska Institute",
    shortName: "Karolinska",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Stockholm / Solna, Sweden",
    website: "https://ki.se",
    sourceRow: 1582,
    slug: "karolinska-institute",
    heroEyebrow: "Sweden · Stockholm · World's Premier Medical University & Nobel Assembly · Reviewed 14 October 2026",
    headline: "Karolinska Institute (Karolinska Institutet, Stockholm)",
    description: "Karolinska Institute guide: Fully salaried PhD positions (SEK 32,000+/month), Global Master's in Biomedicine & Public Health, and faculty profiles.",
    overview: "Founded in 1810 by King Karl XIII, Karolinska Institute (Karolinska Institutet - KI) in Stockholm is Sweden's single largest center of medical academic research and accounts for over 40% of all medical research conducted in Sweden. World-renowned as the home of the Nobel Assembly (which annually selects the laureates for the Nobel Prize in Physiology or Medicine), KI consistently ranks among the top 5 medical universities globally. KI doctoral candidates are employed as salaried staff members with full Swedish employment benefits, while Master's students benefit from cutting-edge clinical infrastructure adjacent to Karolinska University Hospital. Explore verified opportunities, admissions criteria, and faculty leadership.",
    admissions: {
      masters: "Completed Bachelor's degree (or equivalent Swedish Kandidatexamen) in biomedicine, biotechnology, medicine, public health, or related biological discipline from an internationally recognized university.",
      phd: "University degree at advanced (Master's) level comprising at least 240 ECTS credits (including at least 60 credits at advanced level) with demonstrable scientific methodology training.",
      language: "English 6 equivalent: Academic IELTS 6.5 overall (no band below 5.5) or TOEFL iBT 90 (minimum 20 in written test); required for all non-native English speakers.",
      proposal: "For doctoral positions, an individual study plan (ISP) formulated with the designated principal investigator based on an established research project description.",
      appFee: "SEK 900 international application fee paid to University Admissions Sweden (antagning.se); SEK 0 application fee for doctoral salaried employment positions.",
      documents: "Certified bachelor's transcripts, degree diploma, curriculum vitae, documentation of relevant clinical/laboratory experience, and two academic referee letters."
    },
    tuitionText: "In Sweden, doctoral education is 100% free of tuition fees for all students regardless of citizenship. Furthermore, KI doctoral candidates are hired on fully funded salaried employment contracts (doktorandanställning) under Swedish collective agreements, receiving a starting salary of approximately SEK 32,000 to SEK 36,000 per month with full healthcare, parental leave, and pension benefits. For Master's students, Karolinska Institutet Global Master's Scholarships cover full tuition fees.",
    opportunities: [
      {
        id: 487,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Scholarship",
        title: "Karolinska Institutet Global Master's Scholarship (Full Tuition Coverage)",
        source: "https://ki.se/en/education/scholarships/the-karolinska-institutet-global-masters-scholarship",
        funding: "Fully funded: 100% tuition fee waiver (worth SEK 400,000 for the two-year program) for top international students",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual University Admissions round application deadline)",
        fee: "SEK 900 application fee via UniversityAdmissions.se",
        tuition: "Full tuition waiver covering entire Master's duration.",
        requirements: {
          gpa: "Outstanding academic record in previous undergraduate degree (typically top 5% of class).",
          ielts: "Academic IELTS 6.5 overall (minimum 5.5 in each section) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Extensive CV highlighting biomedical laboratory experience or public health projects.",
          references: "Two academic referee letters and personal statement."
        },
        desc: "KI's premier merit-based scholarship for fee-paying international students admitted to English-taught Global Master's programs in Biomedicine, Public Health, and Bioentrepreneurship."
      },
      {
        id: 488,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "Karolinska Institute Salaried Doctoral Position (PhD) in Medical Science",
        source: "https://ki.se/en/about/work-at-ki/vacant-positions",
        funding: "Fully funded salaried employment: SEK 32,500 to SEK 36,000/month gross with full Swedish social security, pension, and healthcare benefits for 4 years",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Departmental recruitment deadline)",
        fee: "SEK 0 application fee for doctoral employment",
        tuition: "SEK 0 tuition fees (Swedish law forbids tuition fees for doctoral education).",
        requirements: {
          gpa: "Master's degree (minimum 240 ECTS total university credits) in Biomedicine, Biochemistry, or Medicine.",
          ielts: "English 6 proficiency (IELTS 6.5 or TOEFL 90).",
          gre: "Not required.",
          papers: "Demonstrated laboratory experience in cell culture, molecular cloning, microscopy, or bioinformatics.",
          references: "Two professional reference contacts."
        },
        desc: "Four-year full-time doctoral research employment contract at KI's Solna or Flemingsberg campus investigating molecular disease pathways, neurodegeneration, or oncology."
      },
      {
        id: 489,
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Master's",
        title: "KI Master of Science (MSc) in Biomedicine (English-taught)",
        source: "https://ki.se/en/education/master-programmes/master-programme-in-biomedicine",
        funding: "KI Global Master's Scholarships and Swedish Institute (SI) Global Professionals Scholarships",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Swedish national university admissions deadline)",
        fee: "SEK 900 application fee",
        tuition: "SEK 200,000/year (for non-EU/EEA students; SEK 0 for EU/EEA citizens).",
        requirements: {
          gpa: "Bachelor's degree in biomedicine, biotechnology, cellular biology, or medicine with at least 90 ECTS in biological/chemical subjects.",
          ielts: "Academic IELTS 6.5 (no section below 5.5) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Documented laboratory research experience.",
          references: "Academic curriculum vitae and course transcript."
        },
        desc: "Two-year research-embedded Master's curriculum at Biomedicum (one of Europe's largest medical research laboratories), preparing students for leading international PhD programs."
      },
      {
        id: 490,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Research",
        title: "Karolinska Institute Postdoctoral Researcher in Cancer Immunotherapy",
        source: "https://ki.varbi.com/en/",
        funding: "Salaried postdoctoral employment: SEK 42,000 to SEK 48,000/month gross plus full Swedish pension and health benefits",
        status: "open-program",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Departmental recruitment call)",
        fee: "SEK 0 application fee",
        tuition: "Salaried staff position; no tuition.",
        requirements: {
          gpa: "PhD in Immunology, Oncology, Molecular Biology, or Biotechnology obtained within the last 5 years.",
          ielts: "Fluent professional English communication.",
          gre: "Not required.",
          papers: "Demonstrated first-author publications in peer-reviewed immunology or cancer biology journals.",
          references: "Two letters of reference from previous academic mentors."
        },
        desc: "Two-year postdoctoral position in the Department of Oncology-Pathology developing novel CAR-T cell designs and checkpoint blockade strategies for solid tumors."
      },
      {
        id: 491,
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        type: "Master's",
        title: "KI Master of Medical Science in Global Health",
        source: "https://ki.se/en/education/master-programmes/master-programme-in-global-health",
        funding: "Swedish Institute Scholarships for Global Professionals covering full tuition and SEK 12,000/month living stipend",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (National application round)",
        fee: "SEK 900 application fee",
        tuition: "SEK 180,000 for the full 1-year program (non-EU/EEA).",
        requirements: {
          gpa: "Bachelor's degree in health sciences, medicine, or social sciences (minimum 180 ECTS).",
          ielts: "Academic IELTS 6.5 or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Demonstrated engagement with public health, health equity, or epidemiological investigations.",
          references: "Curriculum vitae and letter of motivation."
        },
        desc: "One-year advanced degree in collaboration with WHO collaborating centers analyzing epidemiology, maternal health, climate change health impacts, and health systems in crisis."
      },
      {
        id: 492,
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Internship",
        title: "KI SciLifeLab Summer Research Traineeship in High-Throughput Genomics",
        source: "https://www.scilifelab.se/education/summer-internships/",
        funding: "Tax-free stipend of SEK 18,000 for a 6-week intensive computational biology research placement",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer intake deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Current undergraduate or early Master's student in bioinformatics, molecular biology, or computer science.",
          ielts: "Good English proficiency.",
          gre: "Not required.",
          papers: "Basic Python or R skills and genomics coursework.",
          references: "One professor reference letter."
        },
        desc: "Six-week research placement at Science for Life Laboratory (SciLifeLab) analyzing spatial transcriptomics and next-generation sequencing datasets alongside KI researchers."
      },
      {
        id: 493,
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        type: "Job",
        title: "KI Senior Bioinformatician / Research Engineer in Single-Cell Multi-Omics",
        source: "https://ki.se/en/mbb/department-of-medical-biochemistry-and-biophysics",
        funding: "Salaried staff position: SEK 45,000 to SEK 52,000/month gross with full benefits and generous vacation allowance",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Staff position; no tuition fees.",
        requirements: {
          gpa: "Master's or PhD in Bioinformatics, Computational Biology, or Computer Science.",
          ielts: "Professional English fluency.",
          gre: "Not required.",
          papers: "Extensive experience with pipeline development (Nextflow, Snakemake), Seurat/Scanpy, and cloud high-performance computing.",
          references: "Three professional reference contacts."
        },
        desc: "Permanent/long-term scientific staff role at the Department of Medical Biochemistry and Biophysics designing single-cell RNA-seq and spatial multi-omics analysis workflows."
      }
    ],
    researchers: [
      {
        id: 228,
        subject: "biology",
        name: "Dr. Sten Linnarsson",
        title: "Professor of Molecular Systems Biology & Head of Department of Medical Biochemistry and Biophysics",
        university: "Karolinska Institute",
        country: "Sweden",
        topics: ["Single-Cell RNA Sequencing", "Brain Development", "Spatial Transcriptomics", "Cell Types"],
        source: "https://ki.se/en/people/sten-linnarsson",
        summary: "Dr. Linnarsson is a world-renowned pioneer of single-cell transcriptomics and brain cell taxonomy, having mapped the molecular architecture of the mammalian nervous system at KI."
      },
      {
        id: 229,
        subject: "biology",
        name: "Dr. Rickard Sandberg",
        title: "Professor of Molecular Genetics & Member of the Nobel Assembly at Karolinska Institutet",
        university: "Karolinska Institute",
        country: "Sweden",
        topics: ["Gene Regulation", "Single-Cell Genomics", "Allele-Specific Expression", "RNA Biology"],
        source: "https://ki.se/en/people/rickard-sandberg",
        summary: "Dr. Sandberg is an elected member of the Nobel Assembly at Karolinska Institutet and EMBO member, internationally recognized for developing single-cell RNA sequencing methods (Smart-seq)."
      },
      {
        id: 230,
        subject: "biology",
        name: "Dr. Gunilla Karlsson Hedestam",
        title: "Professor of Vaccine Immunology & Member of the Nobel Committee for Physiology or Medicine",
        university: "Karolinska Institute",
        country: "Sweden",
        topics: ["B Cell Repertoire", "Vaccine Immunology", "Viral Neutralization", "Immunogenetics"],
        source: "https://ki.se/en/people/gunilla-karlsson-hedestam",
        summary: "Dr. Karlsson Hedestam is an adjunct member of the Nobel Committee for Physiology or Medicine, directing groundbreaking research into human B cell repertoire diversity and antibody responses against viral pathogens."
      }
    ]
  },

  // 9. NETHERLANDS: Maastricht University (Row 1454)
  {
    institution: "Maastricht University",
    shortName: "Maastricht",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Maastricht, Limburg, Netherlands",
    website: "https://www.maastrichtuniversity.nl",
    sourceRow: 1454,
    slug: "maastricht-university",
    heroEyebrow: "Netherlands · Limburg · Most International University in the Netherlands · Reviewed 14 October 2026",
    headline: "Maastricht University (Universiteit Maastricht)",
    description: "Maastricht University guide: UM Holland-High Potential Scholarships (Full waiver + €15,300 living allowance), Problem-Based Learning, and faculty profiles.",
    overview: "Established in 1976 in the historic Roman-founded city of Maastricht, Maastricht University (Universiteit Maastricht - UM) is widely recognized as the most international university in the Netherlands, with over 55% of its student body originating from outside the country. Renowned globally for pioneering Problem-Based Learning (PBL) in Europe, UM excels in European and International Law, Cognitive Neuroscience, Data Science and AI, and Sustainable Health. Doctoral researchers are employed as salaried academic staff members under Dutch university agreements. Explore verified academic courses, scholarship packages, and faculty leadership.",
    admissions: {
      masters: "Recognized Bachelor's degree from an accredited university in an aligned discipline with high academic standing (Dutch grading equivalent 7.0/10 or international GPA 3.2+/4.0).",
      phd: "Recognized Master's degree (or equivalent 120 ECTS postgraduate degree) in an aligned discipline with demonstrable thesis research capability.",
      language: "Academic IELTS 6.5 overall (minimum 6.0 in writing) or TOEFL iBT 90 (minimum 20 in writing); higher for law and psychology (IELTS 7.0/TOEFL 100).",
      proposal: "For doctoral candidates, an extensive 3 to 5-page research plan detailing theoretical context, research questions, experimental design, and prospective UM faculty mentors.",
      appFee: "€100 handling fee for non-EU applicants with non-Dutch diplomas via Studielink and MyUM portals (reimbursed upon registration).",
      documents: "Certified university transcripts, degree certificates, detailed curriculum vitae, letter of motivation, and two academic recommendation letters."
    },
    tuitionText: "In the Netherlands, PhD candidates are not students but university employees ('promovendus') hired on salaried contracts governed by the Collective Labour Agreement for Dutch Universities (CAO-NU). Doctoral salaries start at €2,770/month gross in year 1 and rise to €3,539/month gross in year 4, plus an 8% holiday allowance and 8.3% end-of-year bonus (SEK/EUR zero tuition charged). For Master's programs, the UM Holland-High Potential Scholarship covers full tuition fees plus an annual living allowance of €15,300.",
    opportunities: [
      {
        id: 494,
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "biology"],
        type: "Scholarship",
        title: "Maastricht University Holland-High Potential Master's Scholarships",
        source: "https://www.maastrichtuniversity.nl/support/your-studies-begin/coming-maastricht-university-abroad/scholarships/maastricht-university",
        funding: "Fully funded: 100% full tuition fee waiver (up to €22,000) plus living expenses of €15,300/year, health insurance, and visa costs",
        status: "open-scholarship",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Annual international scholarship application deadline)",
        fee: "Waived or refunded for selected scholarship recipients",
        tuition: "Full tuition fee waiver covering 100% of study costs.",
        requirements: {
          gpa: "Top 5% of your graduating undergraduate class with outstanding grades.",
          ielts: "Academic IELTS 6.5 to 7.0 overall or TOEFL iBT 90 to 100 depending on faculty.",
          gre: "Not required.",
          papers: "Demonstrated academic excellence and strong letter of motivation.",
          references: "Two academic referee letters from university professors."
        },
        desc: "Prestigious all-inclusive scholarship awarded to highly talented non-EU students pursuing a full-time Master's degree at Maastricht University."
      },
      {
        id: 495,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "PhD",
        title: "Maastricht PhD in Data Science and Artificial Intelligence (Salaried)",
        source: "https://www.maastrichtuniversity.nl/research/department-advanced-computing-sciences-dacs",
        funding: "Salaried employee contract (CAO-NU): €2,770 to €3,539/month gross plus 8% holiday allowance and 8.3% annual bonus for 4 years",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Rolling department call)",
        fee: "€0 application fee for salaried positions",
        tuition: "€0 tuition fees (employed doctoral position).",
        requirements: {
          gpa: "Master's degree in Computer Science, Artificial Intelligence, Mathematics, or Data Science with high distinction.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in writing) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Master's thesis or conference papers in deep learning, game theory, or automated reasoning.",
          references: "Two academic recommendation letters."
        },
        desc: "Four-year salaried doctoral research appointment at the Department of Advanced Computing Sciences (DACS) investigating neural symbolic AI, reinforcement learning, and complex networks."
      },
      {
        id: 496,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "Maastricht Master of Science (MSc) in Artificial Intelligence",
        source: "https://www.maastrichtuniversity.nl/education/master/master-artificial-intelligence",
        funding: "UM High Potential and NL Scholarships available for non-EEA candidates",
        status: "open-program",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Non-EU international deadline via Studielink)",
        fee: "€100 handling fee",
        tuition: "€18,000/year for non-EEA students (€2,530/year for EEA students).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science or AI with coursework in data structures, logic, and mathematics.",
          ielts: "Academic IELTS 6.5 overall (minimum 6.0 in writing) or TOEFL iBT 90.",
          gre: "Not required.",
          papers: "Motivation letter and transcript evaluation.",
          references: "Academic curriculum vitae."
        },
        desc: "Two-year research-intensive Master's degree using Problem-Based Learning to master machine learning algorithms, multi-agent modeling, and computer vision."
      },
      {
        id: 497,
        subject: "biology",
        subjects: ["biology", "physics"],
        type: "PhD",
        title: "Maastricht PhD in Cognitive Neuroscience and Neuroimaging at Brains Unlimited",
        source: "https://www.maastrichtuniversity.nl/research/neuroscience",
        funding: "Full CAO-NU 4-year salaried employment contract: €2,770 - €3,539/month plus full holiday and year-end allowances",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Faculty research call)",
        fee: "€0 application fee",
        tuition: "€0 tuition fees.",
        requirements: {
          gpa: "Research Master's degree in Cognitive Neuroscience, Biomedical Engineering, or Psychology with high honors.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Familiarity with ultra-high field MRI (7T or 9.4T), EEG, or computational neuro-modeling.",
          references: "Two academic referee contacts."
        },
        desc: "Four-year doctoral appointment utilizing the ultra-high-field MRI facilities (7 Tesla and 9.4 Tesla) at the Brains Unlimited scanner lab in Maastricht Health Campus."
      },
      {
        id: 498,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        title: "Maastricht Master of Laws (LL.M.) in European Law School",
        source: "https://www.maastrichtuniversity.nl/education/master/master-european-law-school",
        funding: "Faculty of Law merit scholarships and NL Scholarship scheme",
        status: "open-program",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Non-EU application deadline)",
        fee: "€100 handling fee",
        tuition: "€16,800/year for non-EEA students.",
        requirements: {
          gpa: "Bachelor of Laws (LL.B.) or equivalent legal degree with substantial private or public law foundation.",
          ielts: "Academic IELTS 6.5 (writing 6.5) or TOEFL iBT 90 (writing 24).",
          gre: "Not required.",
          papers: "Motivation letter demonstrating interest in EU institutional law or comparative legal systems.",
          references: "One academic reference letter."
        },
        desc: "One-year advanced legal master's examining constitutional integration, EU competition policy, fundamental rights, and transnational commercial dispute resolution."
      },
      {
        id: 499,
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Internship",
        title: "Maastricht Sustainability Institute (MSI) Summer Research Placement",
        source: "https://www.maastrichtuniversity.nl/research/maastricht-sustainability-institute",
        funding: "Stipend of €1,200 for a 6-week research project in sustainable regional transitions",
        status: "open-program",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer intake deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Currently enrolled Master's or 3rd year undergraduate in sustainability science or environmental economics.",
          ielts: "Good English proficiency.",
          gre: "Not required.",
          papers: "Coursework in circular economy or environmental policy.",
          references: "Academic reference letter."
        },
        desc: "Six-week research placement at MSI evaluating cross-border circular economy policies and sustainable urban mobility models in the Meuse-Rhine Euregion."
      },
      {
        id: 500,
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        type: "Job",
        title: "Maastricht Postdoctoral Researcher in Circular Bio-based Materials at Brightlands",
        source: "https://www.maastrichtuniversity.nl/research/department-circular-chemical-engineering",
        funding: "CAO-NU Researcher scale 10 salary: €3,226 to €5,090/month gross plus 8% holiday and 8.3% end-of-year bonuses",
        status: "open-program",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Salaried staff appointment; no tuition.",
        requirements: {
          gpa: "PhD in Polymer Chemistry, Chemical Engineering, or Bio-based Materials.",
          ielts: "Fluent professional English communication.",
          gre: "Not required.",
          papers: "Demonstrated peer-reviewed publications in bio-polymers, catalytic recycling, or green chemical engineering.",
          references: "Three academic reference contacts."
        },
        desc: "Two-year postdoctoral position located at the Brightlands Chemelot Campus in Geleen, developing upcyclable polymers and circular chemical processes."
      }
    ],
    researchers: [
      {
        id: 231,
        subject: "biology",
        name: "Dr. Rainer Goebel",
        title: "Professor of Cognitive Neuroscience & Director of Brains Unlimited Scanner Lab",
        university: "Maastricht University",
        country: "Netherlands",
        topics: ["High-Field fMRI", "Visual Perception", "Brain-Computer Interfaces", "Computational Neuroscience"],
        source: "https://www.maastrichtuniversity.nl/r.goebel",
        summary: "Dr. Goebel is an internationally renowned cognitive neuroscientist, creator of BrainVoyager neuroimaging software, and director of the ultra-high field MRI research center (Brains Unlimited) at Maastricht University."
      },
      {
        id: 232,
        subject: "computer-science",
        name: "Dr. Michel Dumontier",
        title: "Professor of Data Science & Head of Department of Advanced Computing Sciences",
        university: "Maastricht University",
        country: "Netherlands",
        topics: ["Semantic Web", "FAIR Data Principles", "Biomedical Informatics", "Knowledge Graphs"],
        source: "https://www.maastrichtuniversity.nl/m.dumontier",
        summary: "Dr. Dumontier is a principal co-author of the globally adopted FAIR Data Principles and leads research into knowledge graph construction, biomedical ontologies, and trustworthy artificial intelligence at UM."
      },
      {
        id: 233,
        subject: "social-sciences",
        name: "Dr. Bruno De Witte",
        title: "Professor of European Union Law & Co-Director of Maastricht Centre for European Law",
        university: "Maastricht University",
        country: "Netherlands",
        topics: ["European Union Law", "Constitutional Law", "Internal Market Law", "Human Rights Protection"],
        source: "https://www.maastrichtuniversity.nl/b.dewitte",
        summary: "Dr. De Witte is a preeminent European legal scholar, former professor at the European University Institute (EUI) in Florence, and leading authority on EU treaty reform, federalism, and cultural diversity."
      }
    ]
  },

  // 10. SWITZERLAND: University of Zurich (Row 1361)
  {
    institution: "University of Zurich",
    shortName: "UZH",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Zurich, Switzerland",
    website: "https://www.uzh.ch",
    sourceRow: 1361,
    slug: "university-of-zurich",
    heroEyebrow: "Switzerland · Zurich · Switzerland's Largest Research University · Reviewed 14 October 2026",
    headline: "University of Zurich (Universität Zürich)",
    description: "University of Zurich guide: Fully salaried PhD positions (CHF 50,000+/year), Master's in Informatics & Quantitative Finance, low tuition, and faculty profiles.",
    overview: "Founded in 1833 as the first university in Europe to be established by a democratic state rather than a monarch or church, the University of Zurich (Universität Zürich - UZH) is Switzerland's largest university, enrolling over 28,000 students. With 12 Nobel laureates in its history—including Wilhelm Conrad Röntgen, Albert Einstein, and Erwin Schrödinger—UZH is a premier global research hub and a founding member of the League of European Research Universities (LERU). UZH doctoral candidates receive guaranteed salaried employment contracts, while Master's students benefit from world-class research institutes in the vibrant financial and technological capital of Zurich. Explore verified academic opportunities and admissions guidance.",
    admissions: {
      masters: "Recognized Bachelor's degree (or equivalent 180 ECTS credit qualification) from an accredited university in an aligned discipline with above-average grades.",
      phd: "Recognized Master's degree (120 ECTS) with excellent academic marks, strong thesis research background, and written confirmation of acceptance from an authorized UZH faculty supervisor.",
      language: "Academic IELTS 7.0 overall or TOEFL iBT 100 for English-taught graduate programs; C1 level German (Goethe-Zertifikat C1 or TestDaF 4x4) for German-taught programs.",
      proposal: "Detailed 3 to 5-page research proposal detailing research objectives, methodology, preliminary literature review, and academic work schedule.",
      appFee: "CHF 100 application fee for applicants with Swiss credentials; CHF 500 for applicants with foreign university qualifications (credited against semester fees upon matriculation).",
      documents: "Complete official university transcripts, certified copies of degree diplomas, curriculum vitae, personal statement, and two academic referee letters."
    },
    tuitionText: "Tuition fees at the University of Zurich are exceptionally low by international standards. Regular tuition is only CHF 720 per semester (plus an international student surcharge of CHF 500 per semester for foreign students, totaling approx. CHF 1,220/semester or CHF 2,440/year). Doctoral students are salaried employees of the canton of Zurich, receiving a guaranteed annual salary of CHF 48,000 to CHF 56,000 per year according to official Swiss National Science Foundation (SNSF) salary scales.",
    opportunities: [
      {
        id: 501,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Scholarship",
        title: "UZH Department of Informatics Doctoral Research Fellowships",
        source: "https://www.ifi.uzh.ch/en/studies/phd.html",
        funding: "Fully funded salaried appointment: CHF 52,000 to CHF 58,000/year gross under SNSF doctoral scales plus comprehensive Swiss health coverage and travel allowance",
        status: "open-scholarship",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual international graduate school application round)",
        fee: "CHF 100/500 application fee (credited upon enrollment)",
        tuition: "Nominal CHF 720/semester tuition (covered by department fellowship).",
        requirements: {
          gpa: "Master's degree in Computer Science, Software Engineering, or Mathematics with top academic standing.",
          ielts: "Academic IELTS 7.0 overall or TOEFL iBT 100.",
          gre: "Optional but recommended for international degrees.",
          papers: "Demonstrated programming competence and Master's thesis in computer science.",
          references: "Two letters of recommendation from university professors."
        },
        desc: "Fully salaried four-year doctoral research fellowship at UZH Department of Informatics conducting research in artificial intelligence, software engineering, visual analytics, or blockchain systems."
      },
      {
        id: 502,
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        title: "UZH Master of Science (MSc) in Informatics (English-taught)",
        source: "https://www.ifi.uzh.ch/en/studies/msc.html",
        funding: "UZH Foundation merit grants and research assistantship positions (CHF 28 to 35/hour)",
        status: "open-program",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027 (Fall semester international application deadline)",
        fee: "CHF 500 foreign credential evaluation fee",
        tuition: "CHF 1,220/semester (including non-resident surcharge; approx. USD $2,700/year).",
        requirements: {
          gpa: "Bachelor's degree in Computer Science or closely related field with minimum 180 ECTS.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Not required.",
          papers: "Rigorous coursework in algorithms, theoretical computer science, and object-oriented programming.",
          references: "Academic transcript and curriculum vitae."
        },
        desc: "Two-year Master of Science offering specialized tracks in Artificial Intelligence, Software Systems, Data Science, and People and Computing, taught 100% in English in Zurich."
      },
      {
        id: 503,
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        title: "UZH-ETH Joint Master of Science in Quantitative Finance",
        source: "https://www.msfinance.ch/",
        funding: "Banking and financial industry scholarships covering living costs in Zurich",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual international intake deadline)",
        fee: "CHF 500 foreign application fee",
        tuition: "Standard UZH/ETH semester fees (approx. CHF 1,220/semester).",
        requirements: {
          gpa: "Bachelor's degree with high distinction in Mathematics, Physics, Engineering, or Quantitative Economics.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Mandatory GRE or GMAT test score for applicants with non-Swiss/non-Bologna degrees.",
          papers: "Advanced mathematical preparation in multivariable calculus, probability theory, and linear algebra.",
          references: "Two academic recommendation letters."
        },
        desc: "Prestigious joint degree between the University of Zurich and ETH Zurich, ranked among the world's top quantitative finance master's programs with direct ties to Zurich's financial sector."
      },
      {
        id: 504,
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        title: "UZH Life Science Zurich Graduate School (LSZGS) PhD Fellowships",
        source: "https://www.lifescience-graduateschool.uzh.ch/",
        funding: "Fully funded: Salaried employment contract (CHF 48,000 to CHF 54,000/year gross) plus Swiss social benefits for 3 to 4 years",
        status: "open-program",
        deadline: "2026-11-01",
        deadlineText: "November 1, 2026 (Winter track) / May 1, 2027 (Summer track)",
        fee: "CHF 0 application fee for LSZGS program",
        tuition: "CHF 0 tuition fees (covered through employment contract).",
        requirements: {
          gpa: "Master's degree in Molecular Biology, Biochemistry, Genetics, or Neuroscience with superior grades.",
          ielts: "Demonstrated English fluency (IELTS 7.0 or TOEFL 100).",
          gre: "Not required.",
          papers: "Documented laboratory research experience and strong scientific motivation.",
          references: "Two confidential academic letters of evaluation."
        },
        desc: "Joint graduate school between UZH and ETH Zurich offering 17 specialized PhD programs ranging from Cancer Biology and Neurosciences to Systems Biology and Biomolecular Structure."
      },
      {
        id: 505,
        subject: "physics",
        subjects: ["physics", "mathematics"],
        type: "Research",
        title: "UZH Postdoctoral Research Associate in Gravitational Wave Astrophysics & Dark Matter",
        source: "https://www.physik.uzh.ch/en/research.html",
        funding: "Salaried postdoctoral position: CHF 75,000 to CHF 85,000/year gross under SNSF research salary scales",
        status: "open-program",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Departmental recruitment review)",
        fee: "Free employment application",
        tuition: "Salaried staff position; no tuition fees.",
        requirements: {
          gpa: "PhD in Astrophysics, Theoretical Physics, or Cosmology.",
          ielts: "Fluent professional English communication.",
          gre: "Not required.",
          papers: "Demonstrated publications in gravitational wave data analysis (LISA/LIGO) or dark matter detection.",
          references: "Three academic reference contacts."
        },
        desc: "Two-year postdoctoral position in the Department of Physics participating in the European Space Agency's LISA mission and direct dark matter search experiments (XENONnT)."
      },
      {
        id: 506,
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        title: "UZH Zurich Graduate School of Economics (ZUGSE) PhD Fellowships",
        source: "https://www.econ.uzh.ch/en/phd.html",
        funding: "Fully funded: Guaranteed annual stipend of CHF 44,000/year for year 1, followed by teaching/research assistantships (CHF 50,000+/year) for years 2 to 5",
        status: "open-program",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Annual international intake deadline)",
        fee: "CHF 100 foreign application fee",
        tuition: "Nominal Swiss semester fee waived or covered.",
        requirements: {
          gpa: "Master's or superior Bachelor's in Economics, Mathematics, or Statistics with top grades.",
          ielts: "Academic IELTS 7.0 or TOEFL iBT 100.",
          gre: "Mandatory GRE General test score (quantitative score 165+).",
          papers: "Research paper or Master's thesis demonstrating analytical and mathematical capability.",
          references: "Two to three academic letters of evaluation."
        },
        desc: "Five-year doctoral program ranked among the top 3 in continental Europe, training researchers in microeconomic theory, macroeconomics, behavioral economics, and neuro-economics."
      },
      {
        id: 507,
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        title: "UZH Department of Evolutionary Biology Summer Research Fellowship",
        source: "https://www.ieu.uzh.ch/en/teaching.html",
        funding: "Stipend of CHF 2,500/month for an 8-week summer field or laboratory ecology project in Switzerland",
        status: "open-program",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027 (Summer intake deadline)",
        fee: "No application fee",
        tuition: "No tuition charges.",
        requirements: {
          gpa: "Enrolled undergraduate or early Master's student in biology, ecology, or environmental science.",
          ielts: "Good English conversational skills.",
          gre: "Not required.",
          papers: "Interest in Alpine biodiversity, population genetics, or ecosystem dynamics.",
          references: "One professor reference letter."
        },
        desc: "Eight-week mentored research internship investigating Alpine ecosystem responses to climatic variations and biodiversity conservation across Swiss field stations."
      }
    ],
    researchers: [
      {
        id: 234,
        subject: "computer-science",
        name: "Dr. Davide Scaramuzza",
        title: "Professor of Robotics & Head of the Robotics and Perception Group",
        university: "University of Zurich",
        country: "Switzerland",
        topics: ["Autonomous Drones", "Event-Based Cameras", "Computer Vision", "Visual Inertial Odometry"],
        source: "https://rpg.ifi.uzh.ch/people_scaramuzza.html",
        summary: "Dr. Scaramuzza is an IEEE Fellow, ERC Consolidator Grant recipient, and world leader in autonomous drone navigation, event-based vision, and neuromorphic perception systems at UZH and ETH Zurich."
      },
      {
        id: 235,
        subject: "social-sciences",
        name: "Dr. Ernst Fehr",
        title: "Professor of Economics & Director of UBS Center for Economics in Society",
        university: "University of Zurich",
        country: "Switzerland",
        topics: ["Behavioral Economics", "Neuroeconomics", "Social Preferences", "Experimental Economics"],
        source: "https://www.econ.uzh.ch/en/people/faculty/fehr.html",
        summary: "Dr. Ernst Fehr is one of the world's most cited economists, pioneer of behavioral economics and neuroeconomics, and recipient of the Marcel Benoist Prize and Gottlieb Duttweiler Prize."
      },
      {
        id: 236,
        subject: "biology",
        name: "Dr. Fritjof Helmchen",
        title: "Professor of Neurophysiology & Co-Director of the Brain Research Institute",
        university: "University of Zurich",
        country: "Switzerland",
        topics: ["Two-Photon Microscopy", "Neural Circuits", "In Vivo Imaging", "Cortical Dynamics"],
        source: "https://www.hifo.uzh.ch/en/research/helmchen.html",
        summary: "Dr. Helmchen directs cutting-edge in vivo two-photon imaging investigations of mammalian cortical neural circuits, dendritic integration, and sensory perception mechanisms at UZH."
      }
    ]
  }
];
