/**
 * Batch 32 - Part 2: Cycle 40 (Universities 11 to 20 of Batch 32, Total Unis 392 to 401)
 * Opp IDs: 2748 to 2817 (70 opportunities)
 * Faculty IDs: 1197 to 1226 (30 faculty members)
 */

export const cycle40Universities = [
  // 11. Canada: St. Francis Xavier University (StFX)
  {
    institution: "St. Francis Xavier University",
    shortName: "StFX",
    slug: "st-francis-xavier-university",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Antigonish, Nova Scotia, Canada",
    website: "https://www.stfx.ca",
    sourceRow: 89,
    headline: "St. Francis Xavier University: Research Degrees, Coady Institute & Scholarships Guide",
    overview: "St. Francis Xavier University (StFX) in Antigonish, Nova Scotia, is one of Canada's most prestigious primarily undergraduate and graduate universities, celebrated for the Coady Institute, world-class environmental sciences, health research, and strong alumni network.",
    description: "Verified graduate studies, research fellowships, and admissions guide for St. Francis Xavier University in Nova Scotia, Canada.",
    heroEyebrow: "Nova Scotia Historic Institution · Coady Institute Hub",
    tuitionText: "Domestic graduate tuition ranges from CAD $7,800 to $9,500 annually. International student tuition is approximately CAD $19,200 to $22,800 annually. Research assistantships, Dean's fellowships, and Coady international bursaries offer robust funding.",
    admissions: {
      masters: "Four-year undergraduate honors degree (or equivalent) in a related discipline with minimum 75% average (B+) across senior courses.",
      phd: "Recognized Master's degree in relevant field with minimum 80% average (A-) and documented research or publication record.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each sub-score) or TOEFL iBT 90 (minimum 20 in each section).",
      proposal: "Comprehensive 2-page research proposal detailing proposed thesis topic, prospective supervisor, and methodology.",
      appFee: "CAD $100 non-refundable graduate application fee.",
      documents: "Official academic transcripts, statement of research intent, curriculum vitae, and three academic reference letters."
    },
    opportunities: [
      {
        id: 2748,
        title: "StFX Graduate Research Fellowship & Dean's Merit Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "CAD $8,000 to $15,000 per academic year",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "CAD $100 application fee",
        tuition: "Partial/full tuition remission plus research stipend supplement",
        source: "https://www.stfx.ca/admissions/graduate-studies/fees-and-financing",
        desc: "Merit-based entrance award awarded to high-achieving applicants entering thesis-based Master of Science or Master of Arts programs at StFX.",
        requirements: {
          gpa: "Minimum 80% (A-) cumulative GPA in the final two years of undergraduate study",
          ielts: "IELTS 6.5 overall or TOEFL iBT 90",
          gre: "Not required",
          papers: "Demonstrated research potential in honours undergraduate thesis",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2749,
        title: "Master of Science in Earth & Environmental Sciences",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "chemistry", "biology"],
        funding: "Guaranteed minimum funding package: CAD $21,000/year (stipend + TA/RA)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "CAD $100 application fee",
        tuition: "CAD $8,400 domestic / CAD $20,800 international per year",
        source: "https://www.stfx.ca/academics/science/earth-sciences/graduate-program",
        desc: "Research-intensive Master of Science program focusing on environmental biogeochemistry, coastal paleoclimatology, hydrogeology, and geothermal energy in Atlantic Canada.",
        requirements: {
          gpa: "B.Sc. in Earth Sciences, Environmental Science, Chemistry, or Biology with B+ average",
          ielts: "IELTS 6.5 (minimum 6.0 each band) or TOEFL 90",
          gre: "Not required",
          papers: "Two-page statement of research interest identifying prospective faculty supervisor",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2750,
        title: "Ph.D. in Educational Studies Cooperative Doctoral Fellowship",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "CAD $25,000 per year for four years plus research assistantship",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "CAD $100 application fee",
        tuition: "CAD $8,900 domestic / CAD $21,500 international per year",
        source: "https://www.stfx.ca/academics/faculty-education/phd-educational-studies",
        desc: "Collaborative inter-university doctoral program in Nova Scotia exploring educational leadership, critical pedagogy, community development, and indigenous curriculum reconciliation.",
        requirements: {
          gpa: "Master of Education or Master of Arts in relevant field with minimum A- average",
          ielts: "IELTS 7.0 overall (minimum 6.5 writing) or TOEFL 95",
          gre: "Not required",
          papers: "Four-page doctoral dissertation research proposal and writing sample",
          references: "Three academic reference letters verifying research aptitude"
        }
      },
      {
        id: 2751,
        title: "Atlantic Coastal Ecosystems & Carbon Sequestration Investigation",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "Fully funded research assistantship (CAD $23,000 annual stipend)",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee for appointed scholars",
        tuition: "Covered by NSERC Discovery Grant",
        source: "https://www.stfx.ca/research",
        desc: "Field-based environmental investigation tracking blue carbon stocks, salt marsh restoration, and greenhouse gas flux dynamics along the Northumberland Strait.",
        requirements: {
          gpa: "Degree in Environmental Sciences, Ecology, or Oceanography with 78%+ average",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Experience in carbon flux chambers, gas chromatography, or geospatial mapping",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2752,
        title: "Coady Institute Community Leadership & Social Innovation Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "CAD $22/hour for 16-week community development fellowship",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated into accredited graduate studies curriculum",
        source: "https://coady.stfx.ca",
        desc: "Hands-on experiential leadership placement embedded with non-profit community organizations, cooperative movements, and indigenous economic development bodies.",
        requirements: {
          gpa: "Enrollment in StFX graduate programs or Coady Diploma with minimum 75% GPA",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Personal statement demonstrating community development engagement",
          references: "Two professional or community reference letters"
        }
      },
      {
        id: 2753,
        title: "Brian Mulroney Institute of Government Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "CAD $60,000 annual salary plus health benefits and research travel grant",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral employee",
        source: "https://www.mulroneyinstitute.ca",
        desc: "Two-year postdoctoral fellowship researching public policy, Atlantic economic development, bilateral Canada-US trade relations, or indigenous self-governance.",
        requirements: {
          gpa: "PhD in Political Science, Public Policy, Economics, or History awarded within 4 years",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "Two peer-reviewed journal articles and a 4-page research agenda",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2754,
        title: "Tenure-Track Assistant Professor in Aquatic Ecology & Biodiversity",
        type: "Job",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "CAD $94,000 - $115,000 per annum with comprehensive university benefits",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "Zero fee",
        tuition: "Full-time tenure-track academic appointment",
        source: "https://www.stfx.ca/about/careers-stfx",
        desc: "Full-time faculty appointment in the Department of Biology teaching undergraduate and graduate aquatic ecology, supervising thesis students, and leading an externally funded research program.",
        requirements: {
          gpa: "PhD in Biology, Aquatic Ecology, Limnology, or Marine Sciences",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Demonstrated publication record and potential to secure competitive Tri-Council (NSERC) funding",
          references: "Three academic referee letters and teaching dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1197,
        name: "Dr. Dave Risk",
        title: "Professor & Chair of Earth Sciences & Flux Lab Director",
        subject: "environment",
        topics: ["Greenhouse Gas Measurement", "Methane Emissions", "Carbon Sequestration", "Sensor Systems"],
        source: "https://www.stfx.ca/faculty/dave-risk",
        summary: "Dr. Risk directs the StFX FluxLab, developing vehicle-mounted and stationary greenhouse gas measurement sensors deployed worldwide to quantify fugitive methane emissions."
      },
      {
        id: 1198,
        name: "Dr. Tam Dahir",
        title: "Associate Professor of Computer Science & Machine Learning",
        subject: "computer-science",
        topics: ["Natural Language Processing", "Machine Learning", "Health Informatics", "Data Mining"],
        source: "https://www.stfx.ca/faculty/tam-dahir",
        summary: "Dr. Dahir investigates deep neural network architectures, text mining for medical knowledge discovery, and ethical AI in healthcare decision-making."
      },
      {
        id: 1199,
        name: "Dr. Moira Cavanaugh",
        title: "Professor of Organic Chemistry & Functional Materials",
        subject: "chemistry",
        topics: ["Polymer Chemistry", "Biomaterials", "Renewable Plastics", "Surface Coatings"],
        source: "https://www.stfx.ca/faculty/moira-cavanaugh",
        summary: "Dr. Cavanaugh synthesizes bio-based polymers, exploring biodegradable packaging alternatives and anti-fouling marine coatings from renewable chemical feedstocks."
      }
    ]
  },

  // 12. Australia: National Institute of Technology (NIT Australia)
  {
    institution: "National Institute of Technology",
    shortName: "NIT Australia",
    slug: "national-institute-of-technology",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Perth & Darwin, Australia",
    website: "https://www.nitaustralia.edu.au",
    sourceRow: 172,
    headline: "National Institute of Technology: Cloud Systems, Cybersecurity & Advanced IT Guide",
    overview: "National Institute of Technology (NIT Australia) is a premier Australian accredited higher education provider in Perth and Darwin, renowned for industry-focused undergraduate and postgraduate diplomas in cloud computing, cybersecurity, software engineering, and telecommunications.",
    description: "Verified IT qualifications, industry internships, and admissions guide for National Institute of Technology in Australia.",
    heroEyebrow: "Australian Tech Institute · Perth & Darwin Hub",
    tuitionText: "Tuition for accredited diplomas and advanced higher education qualifications ranges from AUD $14,000 to $18,500 annually. International merit scholarships provide tuition fee deductions between 15% and 25% for high-achieving applicants.",
    admissions: {
      masters: "Recognized Bachelor degree or advanced diploma in Information Technology, Computer Science, or Engineering with equivalent credit transfer.",
      phd: "Postgraduate research pathways facilitated via affiliated Australian university partnerships.",
      language: "IELTS Academic overall band score 6.0 (with no individual band below 5.5) or PTE Academic 50.",
      proposal: "Statement of purpose detailing IT career objectives and technical background.",
      appFee: "AUD $250 international enrollment and registration fee.",
      documents: "Certified academic transcripts, passport copy, English test results, and resume/CV."
    },
    opportunities: [
      {
        id: 2755,
        title: "NIT Australia Tech Pioneer International Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "AUD $3,000 to $5,000 tuition fee waiver",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "AUD $250 registration fee",
        tuition: "Applied as credit deduction against first-year tuition fees",
        source: "https://www.nitaustralia.edu.au/scholarships",
        desc: "Merit scholarship granted to prospective international students demonstrating outstanding academic achievement in previous STEM or computing qualifications.",
        requirements: {
          gpa: "Minimum 70% average or equivalent in high school or undergraduate studies",
          ielts: "IELTS 6.0 overall (minimum 5.5 in each module)",
          gre: "Not required",
          papers: "500-word essay on how IT innovation will address sustainable development challenges",
          references: "One academic referee letter"
        }
      },
      {
        id: 2756,
        title: "Advanced Diploma of Information Technology (Cloud & Cyber Security)",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Flexible payment plans + industry scholarship eligibility",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "AUD $250 application fee",
        tuition: "AUD $15,800 per academic year",
        source: "https://www.nitaustralia.edu.au/courses/advanced-diploma-of-information-technology",
        desc: "Two-year intensive higher education qualification focusing on AWS/Azure cloud architecture, enterprise network penetration testing, SIEM operations, and incident response.",
        requirements: {
          gpa: "Successful completion of Year 12 or equivalent diploma in computing",
          ielts: "IELTS 6.0 (no band below 5.5) or PTE Academic 50",
          gre: "Not required",
          papers: "Personal statement outlining technical computing background",
          references: "One academic or employer recommendation"
        }
      },
      {
        id: 2757,
        title: "Applied Research Project in Enterprise Zero-Trust Cyber Security Architecture",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "AUD $28,000 annual research bursary plus industry laboratory access",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Zero fee",
        tuition: "Tuition waiver sponsored by Australian cybersecurity industry consortium",
        source: "https://www.nitaustralia.edu.au/research",
        desc: "Postgraduate research fellowship investigating identity-centric zero-trust models, micro-segmentation, and automated threat hunting using machine learning algorithms.",
        requirements: {
          gpa: "Honours degree or Master's in Computer Science, Cyber Security, or Information Systems",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "2,000-word research proposal on Zero-Trust protocols",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2758,
        title: "Western Australia Smart Mining & Autonomous Fleet Telemetry Project",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "AUD $2,200 monthly stipend supported by Pilbara mining tech grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Sponsored research placement",
        source: "https://www.nitaustralia.edu.au/industry",
        desc: "Applied technical project configuring long-range private LTE/5G networks and edge computing sensors for driverless haul trucks in Western Australian mining sites.",
        requirements: {
          gpa: "Background in Telecommunications, Embedded Systems, or Networking",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Experience in networking protocols, Wireshark, or Python automation",
          references: "Two technical referees"
        }
      },
      {
        id: 2759,
        title: "Perth Tech Hub Industry Work Placement & Cyber SOC Internship",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "AUD $1,050 per week during 12-week professional internship",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Included within accredited NIT course enrollment",
        source: "https://www.nitaustralia.edu.au/work-placement",
        desc: "Twelve-week immersive industry work placement embedded in a live Security Operations Centre (SOC) monitoring enterprise threats, triaging alerts, and hardening server firewalls.",
        requirements: {
          gpa: "Successful completion of core cybersecurity modules at NIT with minimum 70% grade",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Australian National Police Clearance and updated CV",
          references: "Academic faculty endorsement"
        }
      },
      {
        id: 2760,
        title: "NIT Australia Cloud Infrastructure & DevOps Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "AUD $82,000 - $92,000 per annum salary plus 11.5% superannuation",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Salaried academic post",
        source: "https://www.nitaustralia.edu.au/careers",
        desc: "Two-year postdoctoral fellowship researching Kubernetes container orchestration, infrastructure-as-code security, and multi-cloud resilience frameworks.",
        requirements: {
          gpa: "PhD in Computer Science, Software Engineering, or Information Systems within past 4 years",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Minimum 3 peer-reviewed publications in cloud computing or software engineering",
          references: "Three professional reference letters"
        }
      },
      {
        id: 2761,
        title: "Senior Lecturer in Network Security & Ethical Hacking",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "AUD $95,000 - $115,000 annual salary plus superannuation",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Continuing full-time academic appointment",
        source: "https://www.nitaustralia.edu.au/jobs",
        desc: "Full-time faculty member delivering lectures and hands-on laboratory training in ethical hacking, digital forensics, and network defense to undergraduate and diploma students.",
        requirements: {
          gpa: "Master's or PhD in Cyber Security or Computer Science with industry certifications (CISSP, CEH, OSCP)",
          ielts: "Native or fluent English communication skills",
          gre: "Not required",
          papers: "Demonstrated teaching experience and cybersecurity industry background",
          references: "Two professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1200,
        name: "Dr. Siby Thomas",
        title: "Academic Dean & Head of School of Information Technology",
        subject: "computer-science",
        topics: ["Cybersecurity Governance", "Cloud Architecture", "Curriculum Design", "Enterprise Networking"],
        source: "https://www.nitaustralia.edu.au/faculty/siby-thomas",
        summary: "Dr. Thomas leads academic governance at NIT Australia, focusing on enterprise security compliance, cloud curriculum accreditation, and digital skills development."
      },
      {
        id: 1201,
        name: "Prof. Dr. Tariq Al-Kindi",
        title: "Adjunct Professor of Wireless Communications & Telecommunications",
        subject: "engineering",
        topics: ["5G/6G Networks", "Software Defined Networking", "RF Engineering", "IoT Sensors"],
        source: "https://www.nitaustralia.edu.au/faculty/tariq-alkindi",
        summary: "Prof. Al-Kindi investigates cellular network optimization, software-defined radio architectures, and industrial wireless sensor connectivity in harsh environments."
      },
      {
        id: 1202,
        name: "M.Sc. Priya Nandakumar",
        title: "Senior Lecturer in Software Development & Web Technologies",
        subject: "computer-science",
        topics: ["Full-Stack Development", "Microservices Architecture", "API Security", "Agile Methodologies"],
        source: "https://www.nitaustralia.edu.au/faculty/priya-nandakumar",
        summary: "M.Sc. Nandakumar specializes in modern web development frameworks, RESTful API security, and integrating continuous integration and deployment (CI/CD) pipelines into technical pedagogy."
      }
    ]
  },

  // 13. Germany: Johannes Gutenberg University of Mainz (JGU Mainz)
  {
    institution: "Johannes Gutenberg University of Mainz",
    shortName: "JGU Mainz",
    slug: "johannes-gutenberg-university-of-mainz",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Mainz, Rhineland-Palatinate, Germany",
    website: "https://www.uni-mainz.de",
    sourceRow: 305,
    headline: "Johannes Gutenberg University of Mainz: Nuclear Physics, mRNA & Materials Science",
    overview: "Johannes Gutenberg University of Mainz (JGU Mainz), founded in 1477, is one of Germany's largest and most research-intensive universities, member of the German U15, internationally famed for the PRISMA+ Cluster of Excellence (MAMI electron accelerator), polymer research (MPI-P), and biotechnology (home to BioNTech).",
    description: "Verified graduate degree programs, doctoral positions, and admissions guide for Johannes Gutenberg University of Mainz in Germany.",
    heroEyebrow: "German U15 Flagship · PRISMA+ Physics & mRNA Biotechnology",
    tuitionText: "Zero tuition fees for domestic and international students. The semester fee (Semesterbeitrag) is approximately €350 per semester, which includes a comprehensive semester ticket for regional public transit across Rhineland-Palatinate and the Frankfurt/Rhine-Main metropolitan area.",
    admissions: {
      masters: "Recognized Bachelor of Science or Bachelor of Arts (180 ECTS) in relevant subject with above-average grades.",
      phd: "Master's degree (M.Sc., M.A., Diplom) with grade 'gut' (2.0 or better) in physics, chemistry, biology, or humanities.",
      language: "English programs: TOEFL iBT 90 or IELTS 6.5. German programs: DSH-2 or TestDaF 4x4.",
      proposal: "Doctoral research outline (2,000 words) with written supervisory agreement from a JGU Mainz professor.",
      appFee: "€75 evaluation fee via uni-assist for international applicants with non-German degrees.",
      documents: "Bachelor's/Master's certificate, transcript of records with grading scale, CV, motivation letter, and language certificates."
    },
    opportunities: [
      {
        id: 2762,
        title: "PRISMA+ Excellence Cluster Doctoral Fellowship in Precision Particle Physics",
        type: "Scholarship",
        subject: "physics",
        subjects: ["physics", "mathematics"],
        funding: "Full TV-L E13 research salary (€52,000 - €56,000 gross per year with healthcare and pension)",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition (tuition-free German university)",
        source: "https://www.prisma.uni-mainz.de/graduate-school",
        desc: "Prestigious doctoral fellowship at the PRISMA+ Cluster of Excellence investigating dark matter, neutrino physics, and subatomic precision measurements at the MESA and MAMI electron accelerators.",
        requirements: {
          gpa: "Master of Science in Physics or Mathematics with grade 1.5 or better",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "General GRE or Physics GRE recommended for international candidates",
          papers: "Master's thesis abstract and coding samples (C++, Python, ROOT)",
          references: "Two academic referee letters from university professors"
        }
      },
      {
        id: 2763,
        title: "Master of Science in Biomedicine & Translational Oncology",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Tuition-free state education; student research assistantships (HiWi) available",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€75 uni-assist fee",
        tuition: "Zero tuition (€0); Semester administrative fee ~€350",
        source: "https://www.biomedicine.uni-mainz.de",
        desc: "Elite English-taught Master of Science combining molecular immunology, mRNA vaccine biotechnology, and experimental oncology in close collaboration with the University Medical Center Mainz.",
        requirements: {
          gpa: "B.Sc. in Biology, Biochemistry, Molecular Medicine, or Pharmacy with top 20% ranking",
          ielts: "IELTS 6.5 (minimum 6.0 each skill) or TOEFL iBT 90",
          gre: "Not required",
          papers: "Letter of motivation detailing immunology and lab bench techniques",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2764,
        title: "Salaried Doctoral Researcher (TV-L E13) in Supramolecular Polymer Chemistry",
        type: "PhD",
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        funding: "€50,000 - €55,000 annual gross salary plus full social security coverage",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Zero tuition for doctoral candidates",
        source: "https://www.chemie.uni-mainz.de/promotion",
        desc: "Three-year funded doctoral position at the Department of Chemistry exploring stimulus-responsive hydrogels, covalent adaptable networks, and bio-degradable nanocarriers.",
        requirements: {
          gpa: "M.Sc. in Chemistry, Polymer Science, or Materials Science with high honors",
          ielts: "Fluent English or German",
          gre: "Not required",
          papers: "Summary of Master's thesis and documentation of synthetic chemistry laboratory experience",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 2765,
        title: "Quantum Spintronics & Topological Magnetic Insulator Research Project",
        type: "Research",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "€2,300 monthly research stipend plus beamtime access at synchrotron facilities",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Funded by German Research Foundation (DFG)",
        source: "https://www.spintronics.uni-mainz.de",
        desc: "Fundamental physics project investigating skyrmions, antiferromagnetic spin currents, and ultrafast optical spin manipulation for next-generation non-volatile neuromorphic computing.",
        requirements: {
          gpa: "Degree in Condensed Matter Physics, Nanoengineering, or Materials Science",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Experience with thin film deposition (sputtering), SQUID magnetometry, or Python modeling",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2766,
        title: "BioNTech & University Medical Center Translational mRNA Clinical Internship",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "€1,800 monthly industrial stipend for 6-month laboratory residency",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited Master's curriculum",
        source: "https://www.unimedizin-mainz.de",
        desc: "Six-month clinical and laboratory internship in Mainz analyzing lipid nanoparticle (LNP) delivery mechanisms, in vitro mRNA transcription, and immune assays for personalized cancer therapeutics.",
        requirements: {
          gpa: "Enrolled in JGU Mainz Master in Biomedicine, Molecular Biotechnology, or Pharmacy",
          ielts: "Fluent English; German helpful for clinical environment",
          gre: "Not required",
          papers: "Updated CV and proof of biosafety laboratory training (S1/S2)",
          references: "Academic faculty endorsement"
        }
      },
      {
        id: 2767,
        title: "Gutenberg Research College (GRC) Advanced Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "€66,000 per year full university salary plus €15,000 independent research budget",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried university employee",
        source: "https://www.grc.uni-mainz.de/fellowships",
        desc: "Prestigious two-year postdoctoral fellowship at the Gutenberg Research College for exceptional emerging scholars in book history, printing history, digital humanities, or philosophy.",
        requirements: {
          gpa: "PhD in Humanities, History, or Social Sciences completed with 'summa cum laude' within 4 years",
          ielts: "Fluency in English or German",
          gre: "Not required",
          papers: "Book manuscript or at least three significant peer-reviewed papers; 5-page research plan",
          references: "Three academic reference letters from international scholars"
        }
      },
      {
        id: 2768,
        title: "W3 Professorship in Theoretical High-Energy Particle Physics",
        type: "Job",
        subject: "physics",
        subjects: ["physics", "mathematics"],
        funding: "W3 German civil servant salary scale (€95,000 - €118,000 gross per annum)",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero fee",
        tuition: "Tenured full university professorship (Beamtenverhältnis)",
        source: "https://www.uni-mainz.de/stellenangebote",
        desc: "Permanent full professorship at the Institute of Physics within PRISMA+, leading theoretical research in quantum field theory, electroweak precision observables, and dark sector physics.",
        requirements: {
          gpa: "Habilitation or equivalent outstanding international research record in theoretical physics",
          ielts: "Fluency in English; ability to teach German within 2 years",
          gre: "Not required",
          papers: "Extensive publication list in leading journals and proven record of securing external research grants",
          references: "Three international letters of evaluation"
        }
      }
    ],
    researchers: [
      {
        id: 1203,
        name: "Prof. Dr. Mathias Kläui",
        title: "Professor of Physics & Director of Center for Quantum Spintronics",
        subject: "physics",
        topics: ["Spintronics", "Magnetic Skyrmions", "Nanomagnetism", "Antiferromagnetic Dynamics"],
        source: "https://www.klaeui-lab.physik.uni-mainz.de/team/prof-dr-mathias-klaeui",
        summary: "Prof. Kläui is a world-renowned condensed matter physicist leading groundbreaking investigations into topological spin structures, magnetic domain walls, and ultra-low power memory devices."
      },
      {
        id: 1204,
        name: "Prof. Dr. Tanja Weil",
        title: "Director at Max Planck Institute for Polymer Research & Professor of Chemistry",
        subject: "chemistry",
        topics: ["Macromolecular Chemistry", "Nanomedicine", "Bio-Hybrid Materials", "Drug Delivery"],
        source: "https://www.mpip-mainz.mpg.de/en/weil",
        summary: "Prof. Weil develops precision bio-macromolecules and hybrid nanomaterials for targeted intracellular drug delivery, cancer immunotherapy, and bio-inspired materials."
      },
      {
        id: 1205,
        name: "Prof. Dr. Ugur Sahin",
        title: "Professor of Translational Oncology and Immunology & Co-Founder of BioNTech",
        subject: "biology",
        topics: ["mRNA Vaccines", "Cancer Immunotherapy", "Personalized Medicine", "T-Cell Immunology"],
        source: "https://www.unimedizin-mainz.de/tr-onc/arbeitsgruppen/ag-sahin.html",
        summary: "Prof. Sahin pioneered synthetic mRNA modification and individualized cancer vaccines at JGU Mainz, leading to the world's first approved mRNA COVID-19 vaccine."
      }
    ]
  },

  // 14. Italy: Università Iuav di Venezia
  {
    institution: "Università Iuav di Venezia",
    shortName: "Iuav Venice",
    slug: "universita-iuav-di-venezia",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Venice, Veneto, Italy",
    website: "https://www.iuav.it",
    sourceRow: 548,
    headline: "Università Iuav di Venezia: Architecture, Urban Resilience & Design Guide",
    overview: "Università Iuav di Venezia, established in 1926 in the historic heart of Venice, is Italy's premier public university dedicated exclusively to architecture, urban planning, design, visual arts, and conservation of historical coastal built heritage.",
    description: "Verified master's programs, PhD fellowships, and admissions guide for Università Iuav di Venezia in Italy.",
    heroEyebrow: "Venice Historic Architecture Leader · World Design Hub",
    tuitionText: "Tuition is determined progressively based on family income (ISEE indicator), ranging from €156 for eligible lower-income brackets up to approximately €2,750 per year. Regional Veneto scholarships (ESU) provide full tuition waivers, student housing, and living allowances.",
    admissions: {
      masters: "Bachelor's degree (Laurea) in Architecture, Urban Planning, Design, or Arts (180 ECTS) with design portfolio review.",
      phd: "Master's degree (Laurea Magistrale) in Architecture or related spatial discipline with high honors and research proposal.",
      language: "Italian-taught tracks: Italian B2 (CELI/CILS). English-taught tracks: English B2 (IELTS 6.0 or TOEFL 78).",
      proposal: "Comprehensive digital architecture/design portfolio (PDF) and 1,500-word statement of design philosophy or research intent.",
      appFee: "€30 application evaluation fee.",
      documents: "Bachelor's diploma, transcript of records, design portfolio, curriculum vitae, and passport scan."
    },
    opportunities: [
      {
        id: 2769,
        title: "Veneto ESU Regional Architecture & Design Scholarship",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        funding: "Up to €7,000 per year plus free student accommodation in Venice and canteen services",
        status: "Open",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026",
        fee: "Zero fee",
        tuition: "Full tuition waiver based on ISEE economic indicator",
        source: "https://www.iuav.it/en/admissions/fees-and-scholarships",
        desc: "Regional government award ensuring equal access to higher education for international and Italian students admitted to Iuav architecture and urban design programs.",
        requirements: {
          gpa: "Undergraduate degree in Architecture, Design, or Urban Studies with good academic standing",
          ielts: "English B2 or Italian B2 depending on degree track",
          gre: "Not required",
          papers: "Family economic documentation (ISEE Parificato) for financial eligibility",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 2770,
        title: "Master of Science in Architecture (English Track)",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "engineering", "environment"],
        funding: "Merit-based tuition exemptions and international fee discounts available",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "€30 application fee",
        tuition: "€156 to €2,750 per year based on family ISEE",
        source: "https://www.iuav.it/en/courses/postgraduate-programmes/master-degree-architecture",
        desc: "Two-year European-accredited Master of Science taught entirely in English, training architects to address urban resilience, historic building retrofitting, and climate adaptation.",
        requirements: {
          gpa: "Bachelor's degree in Architecture or Architectural Engineering (minimum 3 years / 180 ECTS)",
          ielts: "IELTS 6.0 or TOEFL 78",
          gre: "Not required",
          papers: "Architecture portfolio (max 20 MB, up to 15 pages) demonstrating spatial design projects",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2771,
        title: "Ph.D. in Architecture, City and Design Doctoral Fellowship",
        type: "PhD",
        subject: "arts-design",
        subjects: ["arts-design", "environment", "social-sciences"],
        funding: "€21,500 net annual fellowship for three years plus research travel funding",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "€30 application fee",
        tuition: "Zero tuition for appointed doctoral researchers",
        source: "https://www.iuav.it/en/research/phd-programmes",
        desc: "Doctoral research program exploring Venetian lagoon urbanism, climate change adaptation of historic cities, circular construction materials, and design theory.",
        requirements: {
          gpa: "Master's degree in Architecture, Urbanism, Landscape, or Design with honors",
          ielts: "English B2 or Italian B2",
          gre: "Not required",
          papers: "Research project proposal (approx. 2,500 words) and digital design portfolio",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 2772,
        title: "Venice Lagoon Climate Adaptation & MOSE Barrier Urban Impact Study",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "arts-design"],
        funding: "€1,950 monthly research grant plus tidal field monitoring equipment",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Funded by European Horizon Heritage Resilience Project",
        source: "https://www.iuav.it/en/research",
        desc: "Interdisciplinary research study analyzing rising sea levels, salt marsh degradation, and architectural heritage preservation techniques across the historic lagoon of Venice.",
        requirements: {
          gpa: "M.Sc. in Architecture, Urban Planning, or Environmental Engineering",
          ielts: "B2 English proficiency",
          gre: "Not required",
          papers: "Demonstrated skills in GIS, historic building diagnostics, or hydrodynamic mapping",
          references: "Two academic references"
        }
      },
      {
        id: 2773,
        title: "Venice Biennale of Architecture & International Exhibition Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "€900 monthly expense allowance + full Biennale curator pass",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward Iuav Master's degree",
        source: "https://www.iuav.it/en/student-services/internships",
        desc: "Six-month architectural curatorial and exhibition design internship working alongside international pavilion curators and architectural installations at La Biennale di Venezia.",
        requirements: {
          gpa: "Current Iuav postgraduate student in good academic standing",
          ielts: "Fluent English and working Italian",
          gre: "Not required",
          papers: "Design portfolio and personal statement on exhibition curation",
          references: "Faculty thesis advisor recommendation"
        }
      },
      {
        id: 2774,
        title: "Iuav Postdoctoral Fellowship in Heritage Conservation & Material Diagnostics",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "chemistry", "engineering"],
        funding: "€38,000 per annum research fellowship plus laboratory consumable grant",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral research post",
        source: "https://www.iuav.it/en/research/postdoc",
        desc: "Two-year postdoctoral research appointment at the LabSCo (Laboratory for the Testing of Materials and Structures) investigating non-destructive testing of historic masonry in marine environments.",
        requirements: {
          gpa: "PhD in Architectural Conservation, Structural Engineering, or Materials Science within 4 years",
          ielts: "Fluent English or Italian",
          gre: "Not required",
          papers: "Minimum 3 journal publications in structural conservation or material degradation",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2775,
        title: "Associate Professor in Sustainable Urbanism & Climate Resilient Cities",
        type: "Job",
        subject: "arts-design",
        subjects: ["arts-design", "environment", "social-sciences"],
        funding: "€58,000 - €72,000 annual salary under Italian MUR civil service scale",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Tenured academic faculty post",
        source: "https://www.iuav.it/ateneo1/lavora-con/docenti",
        desc: "Permanent associate professorship in urban planning and design, leading advanced design studios, supervising doctoral research, and securing competitive European research funding.",
        requirements: {
          gpa: "Italian National Scientific Qualification (ASN) as Associate Professor or international tenure-track equivalent",
          ielts: "Fluent Italian and English teaching capacity",
          gre: "Not required",
          papers: "Outstanding record of urban planning monographs, competitive design awards, and Q1 publications",
          references: "Three international peer references"
        }
      }
    ],
    researchers: [
      {
        id: 1206,
        name: "Prof. Dr. Benno Albrecht",
        title: "Rector of Iuav & Professor of Architectural and Urban Composition",
        subject: "arts-design",
        topics: ["Urban Reconstruction", "Sustainable Architecture", "Post-Disaster Urbanism", "Venice Lagoon Planning"],
        source: "https://www.iuav.it/ateneo1/organi-di-/rettore",
        summary: "Prof. Albrecht is Rector of Iuav and an internationally recognized expert in post-war urban reconstruction, sustainable urban design in Africa and the Middle East, and ecological transitions."
      },
      {
        id: 1207,
        name: "Prof. Dr. Maria Chiara Tosi",
        title: "Professor of Urbanism & Director of Doctoral School",
        subject: "social-sciences",
        topics: ["Regional Urbanization", "Climate Resilient Landscapes", "Welfare Spaces", "Urban Morphology"],
        source: "https://www.iuav.it/docenti/maria-chiara-tosi",
        summary: "Prof. Tosi directs the Iuav Doctoral School, investigating the transformation of diffuse territories, ecological corridors, and spatial inequalities in European metropolitan regions."
      },
      {
        id: 1208,
        name: "Prof. Dr. Laura Fregolent",
        title: "Professor of Urban Planning & Territorial Governance",
        subject: "environment",
        topics: ["Spatial Planning", "Housing Dynamics", "Urban Resilience", "Environmental Governance"],
        source: "https://www.iuav.it/docenti/laura-fregolent",
        summary: "Prof. Fregolent explores urban territorial policies, the socio-spatial impacts of tourism, and participatory models for climate resilience in coastal cities."
      }
    ]
  },

  // 15. United States: University of Florida (UF)
  {
    institution: "University of Florida",
    shortName: "UF",
    slug: "university-of-florida",
    countryId: "usa",
    countryLabel: "United States",
    location: "Gainesville, Florida, United States",
    website: "https://www.ufl.edu",
    sourceRow: 1080,
    headline: "University of Florida: AI Research, Medicine & Engineering Flagship Guide",
    overview: "The University of Florida (UF) in Gainesville is a top-five public research university (AAU member, R1 Carnegie Classification), boasting over $1.25 billion in annual research expenditures, the world-class HiPerGator AI supercomputer (in partnership with NVIDIA), and preeminent colleges of engineering, medicine, and agriculture.",
    description: "Verified graduate admissions, doctoral fellowships, and research degrees guide for University of Florida in Gainesville, Florida.",
    heroEyebrow: "Top 5 Public Flagship · AAU Member · HiPerGator AI Supercomputer",
    tuitionText: "In-state graduate tuition is approximately $535 per credit hour ($12,740/year). Out-of-state and international graduate tuition is approximately $1,255 per credit hour ($30,130/year). Appointed graduate assistants (RAs/TAs) and doctoral fellows receive 100% tuition waivers, health insurance, and annual living stipends ($26,000–$36,000).",
    admissions: {
      masters: "Earned Bachelor's degree from an accredited institution with minimum 3.0 upper-division GPA on a 4.0 scale.",
      phd: "Earned Master's or exceptional Bachelor's degree with minimum 3.5 GPA and established research track record.",
      language: "TOEFL iBT 80 (with minimum speaking score of 23 for teaching assistantships) or IELTS Academic 6.0 overall.",
      proposal: "Doctoral statement of purpose (1,000 words) specifying research domain and prospective faculty laboratory supervisors.",
      appFee: "$30 non-refundable graduate application fee.",
      documents: "Official university transcripts, statement of purpose, curriculum vitae, and three letters of recommendation."
    },
    opportunities: [
      {
        id: 2776,
        title: "UF Graduate School Preeminence Doctoral Fellowship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science", "biology"],
        funding: "$32,000 annual stipend for four years plus 100% tuition waiver and GatorCare health insurance",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$30 application fee",
        tuition: "Full tuition waiver ($0 paid by fellow)",
        source: "https://graduateschool.ufl.edu/prospective-students/funding/fellowships",
        desc: "UF's most prestigious merit-based university-wide award granted to top incoming doctoral scholars in engineering, biomedical sciences, AI, and natural sciences.",
        requirements: {
          gpa: "Minimum 3.8 cumulative GPA in undergraduate or previous graduate studies",
          ielts: "IELTS 7.0 or TOEFL 95",
          gre: "Competitive GRE scores if requested by specific department",
          papers: "Demonstrated research excellence in undergraduate thesis or peer-reviewed publication",
          references: "Three academic recommendation letters"
        }
      },
      {
        id: 2777,
        title: "Master of Science in Computer Science & Artificial Intelligence",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "Graduate assistantships (TA/RA) with tuition waivers available for competitive applicants",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$30 application fee",
        tuition: "$12,740 in-state / $30,130 out-of-state per academic year",
        source: "https://www.cise.ufl.edu/academics/graduate",
        desc: "Herbert Wertheim College of Engineering flagship Master's program utilizing the HiPerGator AI supercomputer to study foundation models, computer vision, cybersecurity, and distributed systems.",
        requirements: {
          gpa: "B.S. in Computer Science, Computer Engineering, or Mathematics with minimum 3.3 GPA",
          ielts: "IELTS 6.5 or TOEFL iBT 84",
          gre: "GRE General Test (Quantitative 160+ recommended)",
          papers: "Statement of purpose outlining technical computing aspirations",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2778,
        title: "Ph.D. in Biomedical Sciences & Gene Therapy Doctoral Fellowship",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Fully funded: $36,000 annual stipend + full tuition waiver + individual health insurance",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "$30 application fee",
        tuition: "100% covered by College of Medicine training grant",
        source: "https://biomed.med.ufl.edu",
        desc: "Doctoral research position at the UF Powell Gene Therapy Center and McKnight Brain Institute developing adeno-associated virus (AAV) vectors for treating genetic and neurodegenerative diseases.",
        requirements: {
          gpa: "B.S. or M.S. in Biology, Biochemistry, Neuroscience, or Molecular Genetics with 3.5+ GPA",
          ielts: "IELTS 7.0 or TOEFL 90",
          gre: "Not required",
          papers: "Prior laboratory research experience in molecular biology or vector cloning",
          references: "Three letters of academic reference"
        }
      },
      {
        id: 2779,
        title: "HiPerGator Supercomputing & Climate AI Modeling Project",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "environment"],
        funding: "$28,000 annual research assistantship sponsored by NSF Cyberinfrastructure Grant",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$30 application fee",
        tuition: "Full tuition waiver included",
        source: "https://www.rc.ufl.edu/services/hipergator",
        desc: "High-performance computing project deploying GPU-accelerated deep neural networks on NVIDIA SuperPOD architectures to predict extreme hurricane storm surges across the Gulf Coast.",
        requirements: {
          gpa: "Degree in Computer Science, Atmospheric Sciences, or Applied Mathematics with 3.4+ GPA",
          ielts: "IELTS 6.5 or TOEFL 80",
          gre: "Not required",
          papers: "Proficiency in CUDA, Python, PyTorch, and MPI parallel computing",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2780,
        title: "Scripps Biomedical Research at UF Innovate Industry Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "$24/hour for 16-week industrial drug discovery internship",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Academic credit applied to graduate degree",
        source: "https://innovate.research.ufl.edu",
        desc: "Four-month intensive pharmaceutical research internship embedded within biomedical biotech startups at UF Innovate | Sid Martin Biotech incubator in Alachua, Florida.",
        requirements: {
          gpa: "Enrolled in UF graduate program in Biomedical Engineering, Chemistry, or Pharmacology with 3.3+ GPA",
          ielts: "Fluent English communication",
          gre: "Not required",
          papers: "Resume and chemical/biological hygiene safety certification",
          references: "Faculty research advisor endorsement"
        }
      },
      {
        id: 2781,
        title: "UF Center for Coastal Solutions Postdoctoral Research Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "engineering", "biology"],
        funding: "$65,000 - $72,000 annual salary plus full university benefits and travel allowance",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral university appointment",
        source: "https://ccs.eng.ufl.edu",
        desc: "Two-year postdoctoral fellowship developing coupled hydrodynamic-ecological models to mitigate harmful red tide algal blooms and restore coastal estuaries in Florida.",
        requirements: {
          gpa: "Ph.D. in Coastal Engineering, Marine Ecology, Oceanography, or Hydrology within past 3 years",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "Minimum 3 first-author publications in Q1 environmental or marine science journals",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2782,
        title: "Tenure-Track Assistant Professor in Robotics & Autonomous Systems",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "$118,000 - $135,000 for 9-month appointment plus generous startup package",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Full-time tenure-track faculty position",
        source: "https://explore.jobs.ufl.edu",
        desc: "Tenure-track academic faculty opening in the Department of Mechanical and Aerospace Engineering, conducting funded research in field robotics, collaborative manipulation, or UAV control.",
        requirements: {
          gpa: "Ph.D. in Robotics, Mechanical Engineering, Electrical Engineering, or Computer Science",
          ielts: "Demonstrated teaching excellence in English",
          gre: "Not required",
          papers: "High-impact publications in leading robotics venues (ICRA, IROS, IEEE Transactions on Robotics)",
          references: "Three academic reference letters and research statement"
        }
      }
    ],
    researchers: [
      {
        id: 1209,
        name: "Prof. Dr. Cammy R. Abernathy",
        title: "Dean of Herbert Wertheim College of Engineering & Professor of Materials Science",
        subject: "engineering",
        topics: ["Semiconductor Materials", "Thin Film Electronics", "Materials Processing", "Engineering Education"],
        source: "https://www.eng.ufl.edu/about/leadership/dean",
        summary: "Prof. Abernathy is an elected fellow of the National Academy of Inventors (NAI) and leads the Wertheim College of Engineering's statewide AI and advanced materials initiatives."
      },
      {
        id: 1210,
        name: "Prof. Dr. Arun Srivastava",
        title: "Chief of Division of Cellular and Molecular Therapy & Professor of Pediatrics",
        subject: "biology",
        topics: ["Gene Therapy", "Adeno-Associated Virus (AAV)", "Vector Biology", "Hemophilia Therapeutics"],
        source: "https://pediatrics.med.ufl.edu/profile/srivastava-arun",
        summary: "Prof. Srivastava is a global pioneer in parvovirus genetics and recombinant AAV gene therapy vectors for treating hemoglobinopathies and rare pediatric diseases."
      },
      {
        id: 1211,
        name: "Dr. Christine E. Schmidt",
        title: "Distinguished Professor of Biomedical Engineering & Chair",
        subject: "biology",
        topics: ["Neural Tissue Engineering", "Regenerative Biomaterials", "Peripheral Nerve Repair", "Hydrogels"],
        source: "https://www.bme.ufl.edu/people/faculty/christine_schmidt",
        summary: "Dr. Schmidt is a member of the National Academy of Engineering (NAE) whose patented decellularized nerve graft technology has restored sensation in hundreds of thousands of patients."
      }
    ]
  },

  // 16. United Kingdom: Nottingham Trent University (NTU)
  {
    institution: "Nottingham Trent University",
    shortName: "Nottingham Trent",
    slug: "nottingham-trent-university",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Nottingham, England, United Kingdom",
    website: "https://www.ntu.ac.uk",
    sourceRow: 1281,
    headline: "Nottingham Trent University: Smart Materials, Forensic Science & Sustainability Guide",
    overview: "Nottingham Trent University (NTU) is an acclaimed British public research university, awarded Queen's Anniversary Prizes for world-leading research in medical devices, smart textiles, food security, and optical imaging, celebrated for outstanding graduate employability.",
    description: "Verified postgraduate degrees, PhD studentships, and admissions guide for Nottingham Trent University in the UK.",
    heroEyebrow: "UK University of the Year · Queen's Anniversary Prize Winner",
    tuitionText: "Full-time domestic postgraduate tuition ranges from £9,000 to £11,500 per year. International student tuition is £16,500 to £18,900 per year. Fully funded PhD studentships provide 100% tuition coverage and an annual tax-free living stipend (£19,237).",
    admissions: {
      masters: "UK 2:1 or 2:2 Honours degree or international equivalent in a relevant discipline.",
      phd: "First class or upper second class (2:1) UK Honours degree or Master's degree with Merit/Distinction in related fields.",
      language: "IELTS Academic 6.5 overall with a minimum of 5.5 (or 6.0 for science and law) in each sub-test.",
      proposal: "1,500-word doctoral research project proposal outlining methodology, literature gap, and alignment with NTU research centers.",
      appFee: "Zero application fee for direct online postgraduate applications.",
      documents: "Degree certificates and transcripts, personal statement, two references (academic preferred), and passport copy."
    },
    opportunities: [
      {
        id: 2783,
        title: "NTU Vice-Chancellor's PhD Studentship in Smart Textiles & Wearable Electronics",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Full tuition fee waiver plus £19,237 annual tax-free stipend for 3 years",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "Zero application fee",
        tuition: "100% covered by NTU Vice-Chancellor Studentship",
        source: "https://www.ntu.ac.uk/research/phd-and-professional-doctorates/scholarships",
        desc: "Doctoral studentship based at the Advanced Textiles Research Group (ATRG) developing electronic yarn (E-yarn), embedded physiological sensors, and solar-harvesting fabrics.",
        requirements: {
          gpa: "First Class or 2:1 UK Honours degree or Master's in Materials Science, Textile Engineering, or Electronic Engineering",
          ielts: "IELTS 6.5 (minimum 6.0 each band)",
          gre: "Not required",
          papers: "Demonstrated laboratory experience in micro-assembly, textile fabrication, or sensor testing",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2784,
        title: "MSc in Biomedical Science & Pharmacology",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "NTU International Merit Scholarship (up to 50% tuition reduction) available",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Zero application fee",
        tuition: "£10,100 domestic / £18,400 international per year",
        source: "https://www.ntu.ac.uk/course/science-and-technology/pg/msc-biomedical-science",
        desc: "IBMS-accredited Master of Science exploring molecular toxicology, antimicrobial resistance, cancer immunotherapy, and advanced biomedical diagnostics.",
        requirements: {
          gpa: "Minimum 2:1 or 2:2 UK Honours degree in Biomedical Sciences, Biochemistry, or Pharmacology",
          ielts: "IELTS 6.5 (minimum 6.0 in each skill)",
          gre: "Not required",
          papers: "Personal statement detailing laboratory bench skills and professional goals",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 2785,
        title: "Ph.D. in Forensic Science & Non-Destructive Explosives Detection",
        type: "PhD",
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        funding: "£19,500 annual tax-free living stipend + UK/International fee waiver",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Funded by UK Home Office / EPSRC collaborative research grant",
        source: "https://www.ntu.ac.uk/research/groups-and-centres/centres/centre-for-forensic-science",
        desc: "Doctoral research position developing handheld Raman spectroscopy and chemical sensors for trace detection of illicit narcotics and peroxide-based improvised explosives.",
        requirements: {
          gpa: "Upper second class Honours or Master's in Chemistry, Forensic Science, or Chemical Physics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "2-page doctoral research proposal on spectroscopic analytical methods",
          references: "Two academic references"
        }
      },
      {
        id: 2786,
        title: "Urban Vertical Farming & Controlled Environment Agriculture Project",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "£18,500 annual research grant plus experimental greenhouse consumables",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Tuition waiver included",
        source: "https://www.ntu.ac.uk/research/groups-and-centres/centres/sustainable-futures-research-theme",
        desc: "Agritech research investigation evaluating LED photosynthetic spectral recipes, aeroponic nutrient recycling, and crop yield optimization in urban vertical farm installations.",
        requirements: {
          gpa: "Degree in Plant Biology, Agricultural Science, or Horticulture",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Laboratory report on plant physiology, chlorophyll fluorescence, or hydroponics",
          references: "Two academic referees"
        }
      },
      {
        id: 2787,
        title: "Boots UK & NTU Pharmaceutical Product Development Practicum",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "£16/hour for 12-month industrial placement with Boots UK in Nottingham",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Part of accredited sandwich postgraduate degree program",
        source: "https://www.ntu.ac.uk/study-and-courses/courses/work-placements",
        desc: "Twelve-month paid industrial placement situated at Boots UK headquarters in Nottingham, formulating skincare products, conducting stability trials, and testing active ingredients.",
        requirements: {
          gpa: "Enrolled in NTU MSc Chemistry, Cosmetic Science, or Pharmacology with 60%+ average",
          ielts: "Fluent English communication",
          gre: "Not required",
          papers: "Updated CV and industrial placement application statement",
          references: "Faculty course leader recommendation"
        }
      },
      {
        id: 2788,
        title: "Medical Technologies Innovation Facility (MTIF) Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "£42,000 - £48,000 per annum salary plus USS pension",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral research post",
        source: "https://www.mtif.co.uk",
        desc: "Two-year postdoctoral research appointment at the Medical Technologies Innovation Facility developing biocompatible 3D-printed orthopedic implants and microfluidic diagnostic chips.",
        requirements: {
          gpa: "PhD in Biomedical Engineering, Biomaterials, or Mechanical Engineering within 3 years",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Minimum 3 journal papers in biomaterials, implant design, or microfabrication",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2789,
        title: "Senior Lecturer in Cyber Security & Network Forensics",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "£45,585 - £56,021 per annum with generous Teachers' Pension Scheme",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "Zero fee",
        tuition: "Permanent full-time academic appointment",
        source: "https://jobs.ntu.ac.uk",
        desc: "Academic faculty post in the School of Science and Technology delivering undergraduate and postgraduate modules in cloud security, malware reverse engineering, and threat intelligence.",
        requirements: {
          gpa: "PhD in Cyber Security, Computer Science, or closely related field",
          ielts: "Native or fluent English communication skills",
          gre: "Not required",
          papers: "Record of high-quality publications in cyber defense or secure software design",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1212,
        name: "Prof. Dr. Tilak Dias",
        title: "Professor of Knitting and Head of Advanced Textiles Research Group (ATRG)",
        subject: "engineering",
        topics: ["Smart Textiles", "Wearable Electronics", "E-Yarn Technology", "Knitted Medical Implants"],
        source: "https://www.ntu.ac.uk/staff-profiles/science-technology/tilak-dias",
        summary: "Prof. Dias is a pioneer in electronic textiles and knitting technology, developing washable microchips embedded directly into yarns for medical telemetry and heated garments."
      },
      {
        id: 1213,
        name: "Prof. Dr. John Hunt",
        title: "Research Director of Medical Technologies Innovation Facility (MTIF)",
        subject: "biology",
        topics: ["Tissue Engineering", "Biomaterials", "Stem Cell Differentiation", "Medical Devices"],
        source: "https://www.ntu.ac.uk/staff-profiles/science-technology/john-hunt",
        summary: "Prof. Hunt directs translational medical technology commercialization, focusing on biocompatibility, cellular therapies, and clinical translation of surgical implants."
      },
      {
        id: 1214,
        name: "Prof. Dr. Haida Liang",
        title: "Head of Imaging and Sensing for Archaeology, Art History and Conservation (ISAAC)",
        subject: "physics",
        topics: ["Optical Coherence Tomography (OCT)", "Art Conservation", "Spectral Imaging", "Heritage Diagnostics"],
        source: "https://www.ntu.ac.uk/staff-profiles/science-technology/haida-liang",
        summary: "Prof. Liang leads the ISAAC laboratory, developing non-invasive optical coherence tomography and remote spectroscopic imaging to examine ancient paintings and historical manuscripts."
      }
    ]
  },

  // 17. Japan: Osaka Metropolitan University (OMU)
  {
    institution: "Osaka Metropolitan University",
    shortName: "OMU Osaka",
    slug: "osaka-metropolitan-university",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Osaka & Sakai, Osaka, Japan",
    website: "https://www.omu.ac.jp",
    sourceRow: 1730,
    headline: "Osaka Metropolitan University: Urban Science, Quantum Physics & Medicine Guide",
    overview: "Osaka Metropolitan University (OMU - 大阪公立大学), formed in 2022 by integrating Osaka City University and Osaka Prefecture University, is Japan's largest public metropolitan university, world-renowned for artificial photosynthesis, quantum physics, veterinary medicine, and urban sustainability.",
    description: "Verified graduate research programs, MEXT scholarships, and admissions guide for Osaka Metropolitan University in Japan.",
    heroEyebrow: "Japan's Largest Public Metropolitan University · Photosynthesis & Quantum Leader",
    tuitionText: "Annual graduate tuition is ¥535,800 (~$3,550 USD) for all students. Admission fees are ¥282,000 (reduced to ¥141,000 for Osaka residents). Full and half tuition exemption programs exist for international students, with prestigious MEXT and JSPS doctoral research fellowships available.",
    admissions: {
      masters: "Completion of 16 years of school education and an accredited Bachelor's degree in a corresponding scientific or humanitarian discipline.",
      phd: "Master's degree or professional graduate degree with demonstrated experimental, clinical, or theoretical research output.",
      language: "English programs: TOEFL iBT 80 or IELTS 6.0. Japanese-taught programs: JLPT N1 or N2.",
      proposal: "Comprehensive research proposal (Kenkyu-Keikaku-sho) in English or Japanese (2,000 words) endorsed by prospective faculty host.",
      appFee: "¥30,000 examination application fee.",
      documents: "Graduation certificate, academic transcript, research plan, two letters of recommendation, and passport copy."
    },
    opportunities: [
      {
        id: 2790,
        title: "OMU President's Fellowship for International Doctoral Researchers",
        type: "Scholarship",
        subject: "chemistry",
        subjects: ["chemistry", "physics", "biology"],
        funding: "¥180,000 monthly living stipend plus 100% tuition waiver and research allowance",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "100% waived by Osaka Metropolitan University",
        source: "https://www.omu.ac.jp/en/admissions/scholarships",
        desc: "Highly competitive doctoral fellowship offered by OMU to top-ranking international research scholars admitted into Natural Science, Engineering, or Life Science divisions.",
        requirements: {
          gpa: "Minimum 3.5 out of 4.0 GPA in Master's degree coursework",
          ielts: "IELTS 6.5 or TOEFL 85",
          gre: "Not required",
          papers: "Master's thesis manuscript and one published or submitted peer-reviewed paper",
          references: "Two letters of recommendation from university professors"
        }
      },
      {
        id: 2791,
        title: "Master of Science in Artificial Photosynthesis & Green Chemistry",
        type: "Master's",
        subject: "chemistry",
        subjects: ["chemistry", "environment", "physics"],
        funding: "Tuition reduction scholarships (up to 50%) + laboratory teaching assistantships",
        status: "Open",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 (~$3,550 USD) per year",
        source: "https://www.omu.ac.jp/en/academics/grad-sci",
        desc: "Cutting-edge Master of Science program situated at the Research Center for Artificial Photosynthesis (ReCAP), developing catalysts to produce hydrogen and solar fuels from water and CO2.",
        requirements: {
          gpa: "Bachelor of Science in Chemistry, Chemical Engineering, or Materials Science",
          ielts: "IELTS 6.0 or TOEFL 80",
          gre: "Not required",
          papers: "Detailed statement of research interest in photocatalysis or electrochemistry",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2792,
        title: "Ph.D. in Quantum Information & Solid-State Spintronics Fellowship",
        type: "PhD",
        subject: "physics",
        subjects: ["physics", "computer-science"],
        funding: "JST SPRING Fellowship: ¥200,000 monthly living stipend + ¥300,000 annual research grant",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥30,000 application fee",
        tuition: "Covered by doctoral fellowship scheme",
        source: "https://www.omu.ac.jp/en/academics/grad-eng",
        desc: "Doctoral research program investigating topological quantum materials, silicon-based spin qubits, and diamond NV centers for ultra-sensitive quantum sensing.",
        requirements: {
          gpa: "Master of Science in Applied Physics, Electrical Engineering, or Materials Physics",
          ielts: "TOEFL 80 or IELTS 6.0",
          gre: "Not required",
          papers: "Master's thesis summary and 3-page research proposal on quantum hardware",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2793,
        title: "Osaka Bay Coastal Resilience & Urban Heat Island Mitigation Project",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "¥170,000 monthly research salary funded by Osaka City Research Grant",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Fully sponsored research project",
        source: "https://www.omu.ac.jp/en/research",
        desc: "Interdisciplinary municipal science initiative utilizing high-resolution meteorological sensor networks and GIS microclimate modeling to reduce heat stress across Osaka.",
        requirements: {
          gpa: "Degree in Urban Climatology, Environmental Engineering, or Geoinformatics",
          ielts: "English or Japanese proficiency",
          gre: "Not required",
          papers: "Experience in meteorological modeling (WRF) or urban micrometeorology sensors",
          references: "Two academic recommendations"
        }
      },
      {
        id: 2794,
        title: "Kansai Bio-Pharma & Regenerative Medicine Laboratory Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "¥150,000 per month stipend plus commuter pass",
        status: "Open",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027",
        fee: "Zero fee",
        tuition: "Credit-bearing practical course module",
        source: "https://www.omu.ac.jp/med",
        desc: "Six-month clinical research internship based at OMU Hospital and Kansai pharmaceutical laboratories, screening monoclonal antibodies and testing stem cell therapies.",
        requirements: {
          gpa: "OMU graduate student in Medicine, Veterinary Medicine, or Biotechnology",
          ielts: "Fluent English; working conversational Japanese",
          gre: "Not required",
          papers: "Laboratory safety clearance and CV",
          references: "Faculty laboratory head endorsement"
        }
      },
      {
        id: 2795,
        title: "ReCAP Postdoctoral Research Fellowship in Solar Fuels & Photocatalysis",
        type: "Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "environment", "physics"],
        funding: "¥4,800,000 - ¥5,400,000 annual compensation plus national health insurance",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral research post",
        source: "https://www.recap.omu.ac.jp",
        desc: "Two-year postdoctoral position at the Research Center for Artificial Photosynthesis exploring metal-organic frameworks (MOFs) and photo-electrochemical water splitting cells.",
        requirements: {
          gpa: "PhD in Chemistry, Materials Science, or Chemical Engineering awarded within 5 years",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Minimum 4 international first-author journal papers in catalysis or energy materials",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2796,
        title: "Associate Professor in Veterinary Infectious Diseases & Zoonosis Control",
        type: "Job",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "¥7,500,000 - ¥9,200,000 annual salary under Japanese public university salary scale",
        status: "Open",
        deadline: "2026-12-20",
        deadlineText: "December 20, 2026",
        fee: "Zero fee",
        tuition: "Tenured public university academic faculty appointment",
        source: "https://www.omu.ac.jp/en/about/employment",
        desc: "Permanent faculty appointment in the Graduate School of Veterinary Science (Rinku Campus), leading surveillance research on avian influenza, tick-borne pathogens, and antimicrobial stewardship.",
        requirements: {
          gpa: "Doctor of Veterinary Medicine (DVM) and Ph.D. in Veterinary Microbiology or Virology",
          ielts: "Fluent English and conversational Japanese",
          gre: "Not required",
          papers: "Proven publication record in international veterinary or infectious disease journals",
          references: "Three academic reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1215,
        name: "Prof. Dr. Yutaka Amao",
        title: "Director of Research Center for Artificial Photosynthesis (ReCAP)",
        subject: "chemistry",
        topics: ["Artificial Photosynthesis", "Biocatalysis", "Solar Hydrogen Production", "CO2 Fixation"],
        source: "https://www.recap.omu.ac.jp/member/amao",
        summary: "Prof. Amao is a leading international authority on bio-inspired solar fuels, coupling enzyme catalysts with semiconductor electrodes to convert carbon dioxide into methanol."
      },
      {
        id: 1216,
        name: "Prof. Dr. Masakazu Anpo",
        title: "Special Honor Professor & Pioneer in Titanium Oxide Photocatalysis",
        subject: "chemistry",
        topics: ["Titanium Oxide", "Photocatalysis", "Visible-Light Catalysts", "Surface Chemistry"],
        source: "https://www.omu.ac.jp/sci/chem/anpo",
        summary: "Prof. Anpo is globally recognized for pioneering second-generation visible-light-responsive titanium dioxide photocatalysts used widely in environmental depollution."
      },
      {
        id: 1217,
        name: "Prof. Dr. Norifumi Kawada",
        title: "Dean of Graduate School of Medicine & Professor of Hepatology",
        subject: "biology",
        topics: ["Hepatic Stellate Cells", "Liver Fibrosis", "Gastroenterology", "Molecular Therapeutics"],
        source: "https://www.omu.ac.jp/med/hepatology/kawada",
        summary: "Prof. Kawada is an acclaimed medical researcher who discovered cytoglobin in hepatic stellate cells and unravels the molecular signaling pathways governing liver fibrosis and cancer."
      }
    ]
  },

  // 18. Sweden: Campus Nynäshamn
  {
    institution: "Campus Nynäshamn",
    shortName: "Campus Nynäshamn",
    slug: "campus-nynashamn",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Nynäshamn, Stockholm County, Sweden",
    website: "https://campusnynashamn.se",
    sourceRow: 1558,
    headline: "Campus Nynäshamn: Marine Engineering, Sustainable Tourism & Vocational Excellence",
    overview: "Campus Nynäshamn is an innovative Swedish municipal higher education and vocational college situated in the Stockholm Archipelago, partnering with KTH Royal Institute of Technology and Stockholm University to offer accredited qualifications in coastal marine technology, eco-tourism, and sustainable port logistics.",
    description: "Verified academic programs, higher vocational diplomas, and admissions guide for Campus Nynäshamn in Sweden.",
    heroEyebrow: "Stockholm Archipelago Campus · Marine & Coastal Tech",
    tuitionText: "Zero tuition fees for Swedish, EU/EEA, and Swiss citizens. Higher vocational programs (Yrkeshögskolan) are state-financed and tuition-free for all admitted residents. Non-EU international university partner courses range from SEK 115,000 to 150,000 annually.",
    admissions: {
      masters: "Accredited Bachelor's degree (180 ECTS) in Engineering, Marine Science, or Environmental Planning through partner university affiliations.",
      phd: "Industrial doctoral research placements operated in partnership with KTH Royal Institute of Technology or Stockholm University.",
      language: "Swedish B / Svenska 3 for Swedish vocational courses; English 6 (IELTS 6.5) for university partner degrees.",
      proposal: "Curriculum vitae, verified grade transcripts, and motivation letter detailing interest in marine sustainability.",
      appFee: "Zero application fee via the Swedish Higher Vocational Education portal (YH) or SEK 900 via Antagning.se for university degrees.",
      documents: "Certified high school or university transcripts, proof of prerequisite coursework, and identification."
    },
    opportunities: [
      {
        id: 2797,
        title: "Swedish State CSN Higher Education Grant & Study Loan (Studiemedel)",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "Up to SEK 12,056 per month (SEK 3,988 grant + SEK 8,068 loan) for eligible students",
        status: "Open",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        fee: "Zero fee",
        tuition: "100% state-funded education (Zero tuition)",
        source: "https://www.csn.se",
        desc: "Comprehensive Swedish state financial aid package providing monthly non-repayable grants and low-interest student loans for students enrolled in accredited studies at Campus Nynäshamn.",
        requirements: {
          gpa: "Admission to an accredited higher vocational or university program at Campus Nynäshamn",
          ielts: "Eligible residence status in Sweden/EU",
          gre: "Not required",
          papers: "Valid Swedish personal identification number (personnummer) and program registration",
          references: "Not required"
        }
      },
      {
        id: 2798,
        title: "Higher Vocational Diploma (YH-Examen) in Coastal Marine Engineering & Boat Systems",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "Tuition-free government funded education with CSN grant eligibility",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero application fee",
        tuition: "SEK 0 (Zero tuition for admitted students)",
        source: "https://campusnynashamn.se/utbildningar/marin-teknik",
        desc: "Two-year 400 YH-point engineering qualification focusing on electric boat propulsion, marine battery systems, composite hull repair, and port shore power installations.",
        requirements: {
          gpa: "General entry requirements for Swedish higher education with Mathematics 2 and Physics 1",
          ielts: "Svenska 2/3 or equivalent",
          gre: "Not required",
          papers: "Verified high school diploma and work experience documentation",
          references: "One professional reference"
        }
      },
      {
        id: 2799,
        title: "Industrial Ph.D. in Baltic Sea Coastal Electrification & Green Shipping Corridors",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "SEK 36,000 - 42,000 monthly employee salary with Swedish occupational pension and vacation",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition for salaried doctoral researcher",
        source: "https://campusnynashamn.se/forskning",
        desc: "Four-year cooperative industrial doctoral project operated alongside KTH Royal Institute of Technology, evaluating mega-watt charging hubs for electric ferries in the Port of Nynäshamn.",
        requirements: {
          gpa: "Master of Science in Electrical Engineering, Energy Systems, or Naval Architecture with 240 ECTS credits",
          ielts: "English 6 / IELTS 6.5",
          gre: "Not required",
          papers: "Master's thesis report and 3-page statement of research method",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2800,
        title: "Stockholm Archipelago Marine Biodiversity & Seagrass Meadow Restoration Study",
        type: "Research",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "SEK 29,000 monthly research stipend supported by Stockholm County Environmental Fund",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Full grant funding",
        source: "https://campusnynashamn.se/projekt",
        desc: "Applied marine ecology study tracking eelgrass (Zostera marina) restoration, water clarity improvement, and coastal fish nursery protection in shallow bays around Nynäshamn.",
        requirements: {
          gpa: "B.Sc. or M.Sc. in Marine Biology, Environmental Sciences, or Aquatic Ecology",
          ielts: "English or Swedish proficiency",
          gre: "Not required",
          papers: "Scientific scuba diving license (CMAS/PADI scientific) or boating certificate an advantage",
          references: "Two academic recommendations"
        }
      },
      {
        id: 2801,
        title: "Port of Nynäshamn & Baltic Ferry Logistics Curricular Work Placement (LIA)",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "Fully compensated company allowance + full CSN funding continuation",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Zero fee",
        tuition: "Integrated in state-accredited YH qualification",
        source: "https://campusnynashamn.se/for-foretag",
        desc: "Twenty-week practical internship embedded at ferry terminals and maritime logistics companies in Nynäshamn coordinating roll-on/roll-off cargo, customs clearance, and cold-ironing shore power.",
        requirements: {
          gpa: "Successful completion of Year 1 in Campus Nynäshamn Marine Technology program",
          ielts: "Swedish or English technical communication",
          gre: "Not required",
          papers: "Signed tripartite workplace training agreement and ID check",
          references: "Course coordinator evaluation"
        }
      },
      {
        id: 2802,
        title: "Archipelago Sustainable Tourism & Eco-Enterprise Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "SEK 470,000 annual research grant plus project operational budget",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Post-graduate research fellowship",
        source: "https://campusnynashamn.se/om-oss",
        desc: "Twelve-month applied fellowship examining circular tourism business models, off-grid island energy systems, and sustainable visitor management across southern Stockholm archipelago.",
        requirements: {
          gpa: "Master's or doctoral degree in Tourism Management, Human Geography, or Environmental Planning",
          ielts: "Fluent English and working Swedish",
          gre: "Not required",
          papers: "4-page project proposal addressing seasonal tourism balancing and preservation in archipelago communities",
          references: "Two professional reference letters"
        }
      },
      {
        id: 2803,
        title: "Senior Lecturer in Marine Propulsion & High-Voltage Electrical Systems",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "SEK 48,000 - 56,000 monthly salary with Swedish public sector pension benefits",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Permanent full-time faculty post",
        source: "https://campusnynashamn.se/jobb",
        desc: "Permanent senior faculty position leading laboratory instruction in electric boat powertrains, battery management systems, and safety compliance for marine vessels.",
        requirements: {
          gpa: "Degree in Marine/Electrical Engineering with documented maritime technical industry experience",
          ielts: "Fluent Swedish and English",
          gre: "Not required",
          papers: "Demonstrated experience in high-voltage electrical installations and marine diagnostics",
          references: "Two professional employer references"
        }
      }
    ],
    researchers: [
      {
        id: 1218,
        name: "Ing. Mikael Söderman",
        title: "Head of Maritime Education & Marine Technology Laboratory",
        subject: "engineering",
        topics: ["Marine Electrification", "Boat Propulsion", "Battery Systems", "Composite Materials"],
        source: "https://campusnynashamn.se/personal/soderman",
        summary: "Ing. Söderman coordinates vocational boat technology training and leads collaborative trials on zero-emission electric passenger vessels in the Stockholm Archipelago."
      },
      {
        id: 1219,
        name: "Dr. Anna Lundkvist",
        title: "Senior Lecturer in Sustainable Coastal Tourism & Regional Geography",
        subject: "social-sciences",
        topics: ["Archipelago Geography", "Eco-Tourism", "Community Resilience", "Heritage Preservation"],
        source: "https://campusnynashamn.se/personal/lundkvist",
        summary: "Dr. Lundkvist researches seasonal population pressures, maritime cultural heritage, and sustainable eco-destination governance in Nordic island environments."
      },
      {
        id: 1220,
        name: "M.Sc. Björn Engström",
        title: "Lecturer in Port Operations & Supply Chain Logistics",
        subject: "engineering",
        topics: ["Port Management", "Ferry Intermodal Freight", "Shore Power Systems", "Green Logistics"],
        source: "https://campusnynashamn.se/personal/engstrom",
        summary: "M.Sc. Engström specializes in roll-on/roll-off maritime terminal operations, automated gate logistics, and cold ironing electrical infrastructure in Baltic seaports."
      }
    ]
  },

  // 19. Netherlands: TIAS School for Business and Society
  {
    institution: "TIAS School for Business and Society",
    shortName: "TIAS",
    slug: "tias-school-for-business-and-society",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Tilburg & Utrecht, Netherlands",
    website: "https://www.tias.edu",
    sourceRow: 1508,
    headline: "TIAS School for Business and Society: Sustainable Finance, Executive MBA & Leadership",
    overview: "TIAS School for Business and Society, the premier joint business school of Tilburg University and Eindhoven University of Technology, is ranked among Europe's top business schools, holding triple-crown accreditation (AACSB, AMBA, EQUIS) and renowned for responsible leadership and sustainable finance.",
    description: "Verified Master of Science degrees, executive doctorates, and admissions guide for TIAS School for Business and Society in the Netherlands.",
    heroEyebrow: "Triple-Crown Accredited · European Top 35 Business School",
    tuitionText: "Tuition for full-time Master of Science in Business Administration is approximately €23,500 for the full program. TIAS offers generous merit-based scholarships between €5,000 and €10,000 for top-tier international and EU candidates.",
    admissions: {
      masters: "Recognized Bachelor's degree from an accredited university with strong academic standing.",
      phd: "Executive PhD / Doctorate in Business Administration (DBA): Master's degree plus at least 5 years of senior management experience.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each sub-test) or TOEFL iBT 90.",
      proposal: "Curriculum vitae, detailed letter of motivation, and essay addressing sustainable business impact.",
      appFee: "€100 application assessment fee.",
      documents: "Bachelor's diploma, academic transcripts, CV, two reference letters, and motivation essay."
    },
    opportunities: [
      {
        id: 2804,
        title: "TIAS Sustainable Leadership & Social Impact International Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€5,000 to €10,000 tuition fee reduction",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "€100 application fee",
        tuition: "Subtracted directly from full MSc in Business Administration tuition fee",
        source: "https://www.tias.edu/en/courses/master/full-time-mscba/scholarships",
        desc: "Prestigious merit scholarship awarded to exceptional candidates who demonstrate strong leadership potential and a proven commitment to ESG principles and societal impact.",
        requirements: {
          gpa: "Minimum 75% GPA or equivalent in previous undergraduate studies",
          ielts: "IELTS 6.5 overall or TOEFL iBT 90",
          gre: "TIAS Capacity Test or GMAT score (600+ recommended)",
          papers: "Scholarship essay (750 words) on leading positive change in sustainable business",
          references: "Two professional or academic letters of recommendation"
        }
      },
      {
        id: 2805,
        title: "Full-Time Master of Science in Business Administration (FT-MScBA)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Corporate sponsorships + Dutch DUO Lifelong Learning Credit available",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "€100 application fee",
        tuition: "€23,500 total program tuition",
        source: "https://www.tias.edu/en/courses/master/full-time-mscba",
        desc: "One-year NVAO-accredited Master of Science based in Utrecht offering specializations in Business Analytics, Finance, Investment Management, and Change Management.",
        requirements: {
          gpa: "Bachelor's degree from a research university or university of applied sciences (HBO)",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "GMAT or TIAS Capacity Test",
          papers: "Curriculum vitae and personal statement of purpose",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 2806,
        title: "Executive PhD / Doctorate in Business Administration (DBA) in Sustainable Finance",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "Corporate sponsored doctoral research fellowship scheme",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Executive doctoral program co-funded by sponsoring corporate partner",
        source: "https://www.tias.edu/en/courses/phd-dba/executive-phd",
        desc: "Four-year executive doctoral program conducted in collaboration with Tilburg University, examining climate risk pricing, ESG reporting standards, and green bond performance.",
        requirements: {
          gpa: "Master's degree in Economics, Finance, or Management with at least 5 years executive experience",
          ielts: "Fluent English proficiency",
          gre: "Not required for senior executives with proven track record",
          papers: "5-page doctoral research proposal outlining research question and corporate empirical data access",
          references: "Two executive recommendations"
        }
      },
      {
        id: 2807,
        title: "European Circular Economy & Corporate Governance Research Study",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€2,500 monthly research stipend plus conference travel allowance",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Funded by Dutch Research Council (NWO)",
        source: "https://www.tias.edu/en/knowledge/research",
        desc: "Applied empirical research study analyzing EU Corporate Sustainability Due Diligence Directive (CSDDD) compliance and supply chain emissions across multinational enterprises.",
        requirements: {
          gpa: "Master's degree in Economics, Business Administration, or Corporate Law",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Experience in econometric data analysis (Stata/R/Python)",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2808,
        title: "Amsterdam Financial Center ESG & Impact Investing Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "€1,250 monthly corporate allowance for 6-month placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated within TIAS MScBA curriculum",
        source: "https://www.tias.edu/en/career-development",
        desc: "Six-month structured business internship based in Amsterdam/Utrecht with institutional pension funds, private equity firms, and sustainable investment banks.",
        requirements: {
          gpa: "Enrolled in TIAS MScBA Finance/Investment tracks with high academic standing",
          ielts: "Fluent English communication",
          gre: "Not required",
          papers: "Financial valuation modeling portfolio and updated CV",
          references: "Program director endorsement"
        }
      },
      {
        id: 2809,
        title: "TIAS Postdoctoral Fellowship in Behavioral Economics & Responsible Leadership",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€54,000 - €60,000 per annum salary plus 8.3% end-of-year bonus and Dutch pension",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Salaried postdoctoral research post",
        source: "https://www.tias.edu/en/working-at-tias",
        desc: "Two-year postdoctoral fellowship investigating executive behavioral biases in strategic decision-making, algorithmic governance, and corporate integrity systems.",
        requirements: {
          gpa: "PhD in Management, Behavioral Economics, or Organizational Psychology within 3 years",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Minimum 2 papers in FT50 or ABS 4-star management journals",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2810,
        title: "Associate Professor / Professor of Sustainable Business Models",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€78,000 - €95,000 annual compensation under Dutch Universities CAO salary scale",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Permanent faculty appointment",
        source: "https://www.tias.edu/en/jobs",
        desc: "Senior faculty post to teach executive MBA and Master's programs, conduct cutting-edge research on circular business models, and lead executive corporate advisory projects.",
        requirements: {
          gpa: "PhD in Business Administration, Strategy, or Sustainable Economics",
          ielts: "Native or fluent English instructional capability",
          gre: "Not required",
          papers: "Outstanding international publication record in top-tier business journals and strong corporate network",
          references: "Three international references"
        }
      }
    ],
    researchers: [
      {
        id: 1221,
        name: "Prof. Dr. Jenke ter Horst",
        title: "Dean & Director of TIAS & Professor of Finance",
        subject: "social-sciences",
        topics: ["Socially Responsible Investing", "Pension Fund Finance", "Asset Pricing", "Mutual Funds"],
        source: "https://www.tias.edu/en/faculty/jenke-ter-horst",
        summary: "Prof. ter Horst leads TIAS academic strategy and is a recognized European authority on sustainable investing, pension economics, and institutional asset management."
      },
      {
        id: 1222,
        name: "Prof. Dr. Dirk Lefeber",
        title: "Professor of Corporate Finance & Energy Economics",
        subject: "social-sciences",
        topics: ["Energy Transition Finance", "Corporate Valuation", "Capital Budgeting", "M&A"],
        source: "https://www.tias.edu/en/faculty/dirk-lefeber",
        summary: "Prof. Lefeber directs research on the financial mechanisms supporting capital investments in renewable energy infrastructure and industrial decarbonization."
      },
      {
        id: 1223,
        name: "Dr. Mirjam Minderman",
        title: "Senior Researcher in Sustainability & Business Ethics",
        subject: "social-sciences",
        topics: ["Corporate Sustainability", "ESG Strategy", "Circular Economy", "Responsible Leadership"],
        source: "https://www.tias.edu/en/faculty/mirjam-minderman",
        summary: "Dr. Minderman researches institutional barriers to corporate sustainability transformations, circular business model design, and multi-stakeholder governance."
      }
    ]
  },

  // 20. Switzerland: University of Applied Sciences and Arts Western Switzerland (HES-SO)
  {
    institution: "University of Applied Sciences and Arts Western Switzerland",
    shortName: "HES-SO Switzerland",
    slug: "hes-so-university-of-applied-sciences-western-switzerland",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Delémont, Geneva, Lausanne & Fribourg, Switzerland",
    website: "https://www.hes-so.ch",
    sourceRow: 1340,
    headline: "HES-SO: Engineering, Life Sciences & Design in Western Switzerland",
    overview: "The University of Applied Sciences and Arts Western Switzerland (HES-SO - Haute école spécialisée de Suisse occidentale) is Switzerland's largest university of applied sciences network with over 21,000 students across six French-speaking cantons (Fribourg, Geneva, Jura, Neuchâtel, Valais, Vaud), celebrated for innovation in microtechnology, bioengineering, and health sciences.",
    description: "Verified master's programs, Swiss National Science Foundation doctoral positions, and admissions guide for HES-SO in Switzerland.",
    heroEyebrow: "Switzerland's Largest Applied Sciences Network · Western Swiss Flagship",
    tuitionText: "Tuition for Swiss and EU/EEA students is CHF 500 to CHF 750 per semester (CHF 1,000 to 1,500 / ~$1,150–1,720 USD per year). Tuition for non-EU international students is CHF 1,050 to 1,500 per semester. Doctoral and scientific collaborators hold salaried Swiss federal contracts starting at CHF 60,000.",
    admissions: {
      masters: "Bachelor's degree from a recognized university or university of applied sciences in a corresponding discipline with minimum grade 5.0 (Swiss scale) or ECTS B.",
      phd: "Master's degree (M.Sc., M.A.) with distinction; doctoral degrees are conferred cooperatively with Swiss cantonal universities (UNIGE, UNIL, EPFL).",
      language: "French B2/C1 for French-medium curricula; English B2/C1 (IELTS 6.5 or TOEFL 90) for international Master of Science tracks.",
      proposal: "Statement of academic purpose, portfolio of scientific or engineering work, and detailed CV in Swiss format.",
      appFee: "CHF 150 administrative application dossier fee.",
      documents: "Bachelor's diploma, academic transcripts with ECTS credit details, CV, identity document, and motivation letter."
    },
    opportunities: [
      {
        id: 2811,
        title: "Swiss Federal Government Excellence Scholarship at HES-SO",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "CHF 1,920 monthly tax-free stipend, full tuition waiver, and Swiss mandatory health insurance",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "100% waived by Swiss Federal Government",
        source: "https://www.hes-so.ch/en/international/scholarships",
        desc: "Prestigious federal scholarship granted by the Swiss Confederation to foreign researchers conducting cooperative doctoral or postdoctoral investigations in engineering or life sciences at HES-SO.",
        requirements: {
          gpa: "Master's degree with first class honors (grade 5.5+ on Swiss grading scale)",
          ielts: "English C1 (IELTS 7.0) or French C1",
          gre: "Not required",
          papers: "Comprehensive research proposal and written letter of support from an HES-SO hosting professor",
          references: "Two confidential academic letters of recommendation"
        }
      },
      {
        id: 2812,
        title: "Master of Science in Life Sciences (Biotechnology & Chemical Engineering)",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry", "engineering"],
        funding: "Swiss cantonal fee subsidies; paid research assistantships (CHF 2,600/month) available",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "CHF 150 application fee",
        tuition: "CHF 750 per semester (Swiss/EU) / CHF 1,050 per semester (Non-EU)",
        source: "https://www.hes-so.ch/en/courses/master/life-sciences",
        desc: "Multi-cantonal master's program based in Sion and Fribourg offering specializations in Applied Biosciences, Chemical Development & Production, and Viticulture & Enology.",
        requirements: {
          gpa: "Bachelor's degree in Biotechnology, Chemistry, Life Sciences, or Agronomy with above-average marks",
          ielts: "IELTS 6.5 or TOEFL 90 or French B2/C1",
          gre: "Not required",
          papers: "Motivation letter detailing laboratory thesis topic and industrial interests",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2813,
        title: "SNSF Cooperative Doctoral Position in Microengineering & Medical Implant Sensors",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "CHF 53,000 - 59,000 per year under Swiss National Science Foundation (SNSF) salary rates",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Zero tuition for salaried doctoral research collaborator",
        source: "https://www.hes-so.ch/en/research/phd-positions",
        desc: "Four-year cooperative doctoral fellowship conducted jointly with EPFL and HE-Arc (Neuchâtel), developing bio-resorbable pressure sensors and microfluidic diagnostic implants.",
        requirements: {
          gpa: "M.Sc. in Microtechnology, Electrical Engineering, Materials Science, or Biomedical Engineering",
          ielts: "IELTS 7.0 or French C1",
          gre: "Not required",
          papers: "Master's thesis manuscript in microfabrication or cleanroom processing (MEMS)",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 2814,
        title: "Swiss Innosuisse Alpine Hydropower & High-Altitude Glacial Lake PV Project",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "CHF 66,000 annual research salary plus Alpine field testing budget",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Fully funded by Innosuisse and Cantonal Energy Offices",
        source: "https://www.hes-so.ch/en/research/energy",
        desc: "Applied energy engineering project based at HES-SO Valais-Wallis designing floating photovoltaic systems on alpine reservoir lakes to maximize winter solar yield in sub-zero climates.",
        requirements: {
          gpa: "Master's degree in Energy Engineering, Civil Engineering, or Physics",
          ielts: "French or English professional proficiency",
          gre: "Not required",
          papers: "Demonstrated simulation experience in photovoltaic modeling, FEM, or computational fluid dynamics",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2815,
        title: "Health Valley Geneva & Vaud MedTech Device Curricular Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "CHF 3,000 per month for 6-month industrial internship",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited HES-SO Master of Science credits",
        source: "https://www.hes-so.ch/en/career-services",
        desc: "Six-month professional engineering placement embedded within medical technology manufacturers and bio-diagnostic firms in the Swiss Health Valley along Lake Geneva.",
        requirements: {
          gpa: "Enrolled in HES-SO Master in Engineering or Life Sciences with passing grades in all Year 1 exams",
          ielts: "Fluent English and working French",
          gre: "Not required",
          papers: "Technical CV and motivation statement for medtech manufacturing",
          references: "Faculty course director endorsement"
        }
      },
      {
        id: 2816,
        title: "HES-SO Foundation Precision Micro-Manufacturing Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "CHF 85,000 - 94,000 per annum salary plus Swiss occupational pension benefits",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero fee",
        tuition: "Full salaried university employee",
        source: "https://www.hes-so.ch/en/research/postdoc",
        desc: "Two-year postdoctoral fellowship at the Haute école Arc Ingénierie in Saint-Imier focusing on ultra-short laser micromachining, surface functionalization, and micro-optics.",
        requirements: {
          gpa: "PhD in Precision Engineering, Applied Physics, or Optics completed within 3 years",
          ielts: "Fluent English and working French",
          gre: "Not required",
          papers: "Minimum 3 first-author papers in recognized precision engineering or optics journals",
          references: "Three academic referee letters"
        }
      },
      {
        id: 2817,
        title: "Professor of Artificial Intelligence & Embedded Edge Computing",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "CHF 140,000 - 170,000 annual salary under Swiss cantonal public salary scales",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Tenured full-time university professorship",
        source: "https://www.hes-so.ch/en/jobs",
        desc: "Permanent professorship at the School of Engineering and Architecture of Fribourg (HEIA-FR), teaching embedded AI, tinyML, and leading funded Innosuisse industry research.",
        requirements: {
          gpa: "Doctorate (PhD) in Computer Science, Electrical Engineering, or related field with proven industry leadership",
          ielts: "Fluent French and English teaching capacity",
          gre: "Not required",
          papers: "Strong publication record and proven track record of securing Swiss Innosuisse research grants",
          references: "Three international academic references"
        }
      }
    ],
    researchers: [
      {
        id: 1224,
        name: "Prof. Dr. Luciana Vaccaro",
        title: "Rector of HES-SO & President of swissuniversities",
        subject: "physics",
        topics: ["Optics and Photonics", "Higher Education Policy", "European Research Collaboration", "Applied Sciences Governance"],
        source: "https://www.hes-so.ch/en/about-us/governance/rectorate",
        summary: "Prof. Vaccaro is Rector of HES-SO and President of swissuniversities, internationally prominent for advancing Swiss participation in Horizon Europe and fostering applied scientific innovation."
      },
      {
        id: 1225,
        name: "Prof. Dr. Dominique Genoud",
        title: "Professor of Information Systems & Head of Energy Informatics Lab",
        subject: "computer-science",
        topics: ["Energy Informatics", "Smart Grids", "Machine Learning", "Pervasive Computing"],
        source: "https://www.hevs.ch/en/rad/personnes/dominique-genoud-1225",
        summary: "Prof. Genoud leads applied research in artificial intelligence for smart energy management, predictive building thermal models, and decentralized renewable energy trading."
      },
      {
        id: 1226,
        name: "Prof. Dr. Marc Pfeifer",
        title: "Professor of Life Sciences & Head of Institute of Life Technologies",
        subject: "biology",
        topics: ["Microfluidics", "Point-of-Care Diagnostics", "Biosensors", "Diagnostic Devices"],
        source: "https://www.hevs.ch/en/rad/personnes/marc-pfeifer-1226",
        summary: "Prof. Pfeifer directs research in lab-on-a-chip diagnostic systems, microfluidic cell sorting, and rapid diagnostic tests for global health applications."
      }
    ]
  }
];
