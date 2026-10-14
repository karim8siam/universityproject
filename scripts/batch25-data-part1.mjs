export const batch25Part1 = [
  // 1. Canada: Ontario Tech University (Row 74)
  {
    institution: "Ontario Tech University",
    shortName: "Ontario Tech",
    slug: "ontario-tech-university",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Oshawa, Ontario, Canada",
    sourceRow: 74,
    website: "https://ontariotechu.ca",
    headline: "Ontario Tech University: Nuclear Engineering, Automotive & Graduate Scholarships",
    description: "Explore Ontario Tech University graduate admissions, ACE climatic wind tunnel research, nuclear engineering doctorates, master's degrees, and funding in Oshawa.",
    heroEyebrow: "Oshawa, Greater Toronto Area, Ontario · Modern STEM & Nuclear Engineering Leader",
    overview: "Ontario Tech University (University of Ontario Institute of Technology) is one of Canada's top modern public research universities, globally recognized for nuclear engineering, clean energy, automotive aerodynamics at ACE (Automotive Centre of Excellence), artificial intelligence, and forensic science.",
    admissions: {
      masters: "Four-year honours undergraduate degree (BSc, BEng) from an accredited university with minimum B average (minimum 73%–76% or 3.0/4.3 GPA) in the last two years.",
      phd: "Master's degree in a relevant discipline with a minimum B+ standing (77%–79% or 3.3/4.3 GPA) and proven research potential.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 83 (minimum 20 in listening/reading, 19 in writing, 20 in speaking).",
      proposal: "For research thesis programs: 2–3 page statement of research intent describing alignment with Ontario Tech research clusters and identified faculty supervisor.",
      appFee: "$110 CAD non-refundable application fee submitted through Ontario Tech School of Graduate and Postdoctoral Studies.",
      documents: "Official academic transcripts, 2–3 confidential letters of recommendation, CV/resume, and proof of English language proficiency."
    },
    tuitionText: "International graduate tuition at Ontario Tech ranges from approximately $23,000 to $27,500 CAD per year. Thesis-stream master's and PhD candidates receive competitive graduate funding packages combining Graduate Research Assistantships (GRA) and Graduate Teaching Assistantships (GTA) up to $18,000 CAD/year.",
    opportunities: [
      {
        id: 1418,
        title: "Ontario Tech Graduate Research Assistantship (GRA) & Teaching Fellowship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Scholarship",
        source: "https://gradstudy.ontariotechu.ca/funding/internal-awards/index.php",
        funding: "Up to $18,000 CAD/year financial support package + internal tuition bursaries",
        status: "Open for 2026/2027 entry",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Fall 2027 priority deadline)",
        fee: "$110 CAD",
        tuition: "$24,200 CAD/year (standard international rate)",
        requirements: {
          gpa: "Minimum 75% (B+) overall academic average in engineering or physical sciences",
          ielts: "6.5 overall (minimum 6.0 in all bands)",
          gre: "Not required for Canadian degrees",
          papers: "Academic CV and 2-page statement of research interests",
          references: "Two academic referee letters from university professors"
        },
        desc: "Merit-based graduate research and teaching funding awarded to full-time thesis-based master's and doctoral students in engineering and applied sciences."
      },
      {
        id: 1419,
        title: "Doctor of Philosophy (PhD) in Nuclear Engineering & Small Modular Reactors (SMRs)",
        subject: "engineering",
        subjects: ["engineering", "physics", "environment"],
        type: "PhD",
        source: "https://gradstudy.ontariotechu.ca/programs/energy-systems-and-nuclear-science/nuclear-engineering-phd.php",
        funding: "Guaranteed minimum funding of $22,000 CAD/year for 4 years via nuclear research chairs",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$110 CAD",
        tuition: "$23,600 CAD/year (offset by departmental bursaries)",
        requirements: {
          gpa: "Master's degree in Nuclear, Mechanical, or Chemical Engineering with B+ average",
          ielts: "6.5 overall (no individual band below 6.0)",
          gre: "Not required",
          papers: "Master's thesis summary and 3-page research proposal on reactor physics, thermalhydraulics, or SMR safety",
          references: "Three academic reference letters"
        },
        desc: "Canada's only dedicated nuclear engineering doctoral program, training specialists in Small Modular Reactor (SMR) licensing, CANDU lifecycle management, and nuclear waste transmutation."
      },
      {
        id: 1420,
        title: "Master of Science (MSc) in Computer Science with Focus on Trustworthy AI",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        source: "https://gradstudy.ontariotechu.ca/programs/business-and-information-technology/computer-science-msc.php",
        funding: "Graduate teaching assistantships and Vector Institute scholarship nominations",
        status: "Applications open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$110 CAD",
        tuition: "$25,400 CAD/year for international candidates",
        requirements: {
          gpa: "Four-year undergraduate degree in Computer Science with minimum B average",
          ielts: "6.5 overall (minimum 6.0 in each component)",
          gre: "Recommended for international applicants (310+)",
          papers: "Statement of intent highlighting programming, machine learning, and algorithm projects",
          references: "Two academic referee letters"
        },
        desc: "Advanced graduate program focusing on ethical artificial intelligence, deep learning safety, cybersecurity, and distributed cloud computing systems."
      },
      {
        id: 1421,
        title: "ACE Climatic Wind Tunnel Aerodynamics & EV Thermal Research Assistantship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Research",
        source: "https://ace.ontariotechu.ca/",
        funding: "NSERC and automotive industry funded assistantship ($23,500 CAD/year)",
        status: "Active research vacancy",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "$110 CAD",
        tuition: "Subsidized via research fellowship",
        requirements: {
          gpa: "BSc or BEng in Mechanical, Aerospace, or Automotive Engineering",
          ielts: "6.5 overall",
          gre: "Not required",
          papers: "Hands-on experience in computational fluid dynamics (CFD) or wind tunnel testing",
          references: "Two faculty supervisor recommendations"
        },
        desc: "Graduate research at the world-class ACE facility testing electric vehicle thermal management, extreme cold-weather battery efficiency, and aerodynamic drag reduction."
      },
      {
        id: 1422,
        title: "Clean Energy Research Laboratory (CERL) Hydrogen Production Practicum",
        subject: "chemistry",
        subjects: ["chemistry", "engineering", "environment"],
        type: "Internship",
        source: "https://cerl.ontariotechu.ca/",
        funding: "Paid industrial research placement ($25–$32 CAD/hour)",
        status: "Open for graduate engineering students",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "$0 (enrolled co-op unit)",
        tuition: "Included in standard term fee",
        requirements: {
          gpa: "Good standing in Ontario Tech MEng or MASc program",
          ielts: "Institutional standard",
          gre: "Not required",
          papers: "Technical resume and lab safety certifications",
          references: "Faculty co-op advisor endorsement"
        },
        desc: "Industry-collaborative practicum at CERL evaluating thermochemical copper-chlorine (Cu-Cl) cycles for zero-emission nuclear hydrogen production."
      },
      {
        id: 1423,
        title: "Canada Research Chair in Clean Energy Postdoctoral Fellowship",
        subject: "environment",
        subjects: ["environment", "engineering", "chemistry"],
        type: "Fellowship",
        source: "https://ontariotechu.ca/research/research-services/research-chairs.php",
        funding: "$62,000 CAD annual salary + research travel fund for 2 years",
        status: "International competition",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "$0",
        tuition: "Salaried postdoctoral appointment",
        requirements: {
          gpa: "PhD in Mechanical, Chemical, or Environmental Engineering",
          ielts: "Fluent academic English",
          gre: "Not applicable",
          papers: "Substantial peer-reviewed publication record in hydrogen energy systems or fuel cells",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral appointment leading experimental design in high-efficiency electrolysis, integrated multigeneration energy systems, and carbon capture."
      },
      {
        id: 1424,
        title: "Master of Engineering (MEng) in Autonomous Systems & Artificial Intelligence",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        source: "https://gradstudy.ontariotechu.ca/programs/engineering-and-applied-science/electrical-and-computer-engineering-meng.php",
        funding: "Dean's international merit entrance awards available ($3,000 CAD)",
        status: "Applications open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$110 CAD",
        tuition: "$26,800 CAD total for 1-year professional master's",
        requirements: {
          gpa: "Bachelor's degree in Electrical, Computer, or Mechanical Engineering with minimum 73% average",
          ielts: "6.5 overall (minimum 6.0 in each band)",
          gre: "Not required",
          papers: "Statement of purpose outlining robotics kinematics and embedded systems experience",
          references: "Two academic or employer recommendations"
        },
        desc: "Industry-focused master's program covering autonomous driving perception, sensor fusion, SLAM algorithms, and functional safety in automated transport."
      }
    ],
    researchers: [
      {
        id: 627,
        name: "Dr. Ibrahim Dincer",
        title: "Professor of Mechanical Engineering & Leading Hydrogen Energy Authority",
        subject: "engineering",
        topics: ["Hydrogen Energy", "Thermochemical Water Splitting", "Energy Storage", "Exergy Analysis"],
        source: "https://ontariotechu.ca/experts/feas/ibrahim-dincer.php",
        recruiting: "Not verified",
        summary: "Dr. Dincer is one of the world's most cited energy scientists, pioneering clean hydrogen production cycles, integrated energy storage systems, and advanced exergy methods."
      },
      {
        id: 628,
        name: "Dr. Igor Pioro",
        title: "Professor of Nuclear Engineering & Fellow of ASME and CNS",
        subject: "engineering",
        topics: ["Supercritical Water Reactors", "Nuclear Thermalhydraulics", "CANDU Reactor Safety", "Small Modular Reactors"],
        source: "https://ontariotechu.ca/experts/fesns/igor-pioro.php",
        recruiting: "Not verified",
        summary: "Dr. Pioro is an international authority on nuclear reactor thermalhydraulics, authoring authoritative treatises on Supercritical-Water-Cooled Nuclear Reactors (SCWRs)."
      },
      {
        id: 629,
        name: "Dr. Carolyn McGregor",
        title: "Canada Research Chair in Health Informatics & Professor of Computer Science",
        subject: "computer-science",
        topics: ["Big Data Analytics", "Neonatal Health Monitoring", "Predictive Clinical Algorithms", "Space Medicine Telemetry"],
        source: "https://ontariotechu.ca/experts/fbit/carolyn-mcgregor.php",
        recruiting: "Not verified",
        summary: "Dr. McGregor leads the Artemis Health Informatics project, creating real-time stream computing platforms that detect life-threatening hospital-acquired infections hours before clinical manifestation."
      }
    ]
  },

  // 2. Australia: Griffith University (Row 166)
  {
    institution: "Griffith University",
    shortName: "Griffith",
    slug: "griffith-university",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Gold Coast & Brisbane, Queensland, Australia",
    sourceRow: 166,
    website: "https://www.griffith.edu.au",
    headline: "Griffith University: Marine Biology, Nursing Excellence & RTP Fellowships",
    description: "Discover Griffith University admissions, Australian Government RTP doctoral stipends, coastal marine ecology, world #1 nursing degrees, and research in Queensland.",
    heroEyebrow: "Gold Coast & Brisbane, Queensland · Top 2% World University · Marine & Biomedical Hub",
    overview: "Griffith University is a major Australian public research university based in Southeast Queensland across five vibrant campuses. Internationally renowned for world-ranked nursing, marine science (Coastal and Marine Research Centre), clean water technology, environmental science, and drug discovery at the Griffith Institute for Drug Discovery (GRIDD).",
    admissions: {
      masters: "Completed bachelor's degree from a recognized institution with a minimum GPA of 4.5 on a 7-point scale (or credit average / 65%+).",
      phd: "First-class honours degree (H1) or research master's degree with a demonstrated track record of scholarly publications.",
      language: "IELTS Academic 6.5 overall (no individual band below 6.0) or PTE Academic 58+; Nursing and Clinical disciplines require 7.0 overall (minimum 7.0 in all bands).",
      proposal: "Required for Higher Degree Research (PhD/MPhil): 2,000-word proposal aligned with a confirmed Griffith academic supervisor.",
      appFee: "Free directly through the Griffith International Online Application Portal.",
      documents: "Certified degree certificates, academic transcripts, two confidential referee reports, CV, and verified English proficiency report."
    },
    tuitionText: "International graduate tuition typically ranges from $33,500 to $42,000 AUD per year depending on the faculty. Australian Government RTP and Griffith University Postgraduate Research Scholarships (GUPRS) provide full tuition offsets and tax-free living stipends of $33,500 AUD/year for up to 3.5 years.",
    opportunities: [
      {
        id: 1425,
        title: "Australian Government RTP & Griffith University Postgraduate Research Scholarship (GUPRS)",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Scholarship",
        source: "https://www.griffith.edu.au/research-study/scholarships",
        funding: "100% tuition fee waiver, $33,500 AUD/year tax-free stipend, and overseas health cover (OSHC)",
        status: "Open for 2027 entry",
        deadline: "2026-10-31",
        deadlineText: "October 31, 2026 (Annual international HDR round)",
        fee: "$0",
        tuition: "100% covered by Australian Government RTP offset",
        requirements: {
          gpa: "First-class honours (H1) or research master's degree with equivalent distinction",
          ielts: "6.5 overall (minimum 6.0 in each band)",
          gre: "Not required",
          papers: "Detailed 2,000-word research proposal aligned with Griffith research institute",
          references: "Two academic referee reports confirming research aptitude"
        },
        desc: "Highly competitive flagship doctoral scholarship funding domestic and international scholars conducting impactful research across all disciplines."
      },
      {
        id: 1426,
        title: "Doctor of Philosophy (PhD) in Marine Ecology & Coral Reef Resilience",
        subject: "biology",
        subjects: ["biology", "environment"],
        type: "PhD",
        source: "https://www.griffith.edu.au/coastal-marine-research-centre",
        funding: "Coastal and Marine Research Centre PhD stipend ($34,000 AUD/year)",
        status: "Open for expressions of interest",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Mid-year intake)",
        fee: "$0",
        tuition: "Full tuition waiver for scholarship recipients",
        requirements: {
          gpa: "Honours degree Class 1 or MSc in Marine Science, Zoology, or Environmental Biology",
          ielts: "6.5 overall (minimum 6.0 in all bands)",
          gre: "Not required",
          papers: "Demonstrated scientific scuba fieldwork experience or coral bleaching modeling skills",
          references: "Two academic referee letters from marine scientists"
        },
        desc: "Doctoral research conducted with the Coastal and Marine Research Centre evaluating Great Barrier Reef thermal tolerance, larval connectivity, and seagrass restoration."
      },
      {
        id: 1427,
        title: "Master of Global Public Health & Tropical Disease Epidemiology",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        type: "Master's",
        source: "https://www.griffith.edu.au/study/degrees/master-of-global-public-health-5732",
        funding: "Griffith International Student Excellence Scholarship (25% fee discount)",
        status: "Applications open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (Trimester 1 commencement)",
        fee: "$0",
        tuition: "$34,500 AUD/year before discount",
        requirements: {
          gpa: "Bachelor's degree in health, science, or social science with credit average",
          ielts: "6.5 overall (minimum 6.0 across all components)",
          gre: "Not required",
          papers: "Statement of purpose explaining career goals in epidemiological surveillance",
          references: "One academic and one professional reference"
        },
        desc: "Postgraduate master's degree preparing leaders in global health policy, biosecurity, vector-borne disease control, and pandemic preparedness."
      },
      {
        id: 1428,
        title: "Griffith Institute for Drug Discovery (GRIDD) Chemical Biology Assistantship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Research",
        source: "https://www.griffith.edu.au/institute-drug-discovery",
        funding: "Research project appointment ($84,000–$92,000 AUD Level A salary)",
        status: "Active research vacancy",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "$0",
        tuition: "Salaried university research staff appointment",
        requirements: {
          gpa: "MSc or PhD in Medicinal Chemistry, Chemical Biology, or Pharmacology",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Experience in NMR spectroscopy, natural product extraction, or cryo-EM structure determination",
          references: "Two academic referee contacts"
        },
        desc: "Applied chemical biology vacancy investigating NatureBank biodiscovery library compounds against drug-resistant tuberculosis and parasitic infections."
      },
      {
        id: 1429,
        title: "Gold Coast University Hospital Clinical Health Placement",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Internship",
        source: "https://www.griffith.edu.au/griffith-health/clinics-and-facilities",
        funding: "Clinical supervisory stipend + hospital badge credentials",
        status: "Annual intake for enrolled postgraduates",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$0",
        tuition: "Curricular credit placement",
        requirements: {
          gpa: "Enrolled in Griffith Master of Nursing, Physiotherapy, or Medical Science",
          ielts: "7.0 overall (minimum 7.0 in all sub-tests)",
          gre: "Not required",
          papers: "Queensland Health clinical requirements: Blue Card, vaccination records, CPR certificate",
          references: "Clinical placement coordinator endorsement"
        },
        desc: "Clinical immersion training across the co-located Gold Coast Health and Knowledge Precinct, rotating through acute tertiary care, trauma, and clinical research trials."
      },
      {
        id: 1430,
        title: "Australian Rivers Institute Postdoctoral Fellowship in Catchment Hydrology",
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Fellowship",
        source: "https://www.griffith.edu.au/australian-rivers-institute",
        funding: "$96,000 AUD annual salary plus $15,000 AUD project operational funds for 2 years",
        status: "Open competition",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "$0",
        tuition: "Salaried postdoctoral position",
        requirements: {
          gpa: "PhD in Hydrology, Civil Engineering, or Aquatic Geomorphology",
          ielts: "Native or fluent English",
          gre: "Not applicable",
          papers: "Demonstrated peer-reviewed publications on river basin sediment modeling or hydrodynamic simulation",
          references: "Three academic referee letters"
        },
        desc: "Two-year postdoctoral fellowship at the world-leading Australian Rivers Institute analyzing catchment runoff dynamics, riparian wetlands, and climate adaptation."
      },
      {
        id: 1431,
        title: "Master of Cyber Security & Threat Intelligence",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        source: "https://www.griffith.edu.au/study/degrees/master-of-cyber-security-5735",
        funding: "Griffith Remarkable Scholarship (50% tuition reduction for top applicants)",
        status: "Applications open",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "$0",
        tuition: "$36,000 AUD/year before scholarship reduction",
        requirements: {
          gpa: "Bachelor's degree in IT, Computing, or Software Engineering with minimum 65% average",
          ielts: "6.5 overall (minimum 6.0 in each sub-test)",
          gre: "Not required",
          papers: "Statement of purpose detailing cybersecurity or penetration testing experience",
          references: "Two academic or employer recommendations"
        },
        desc: "Industry-aligned master's curriculum exploring network security, digital forensics, incident response, blockchain security, and security operations center (SOC) analytics."
      }
    ],
    researchers: [
      {
        id: 630,
        name: "Dr. Stuart Bunn",
        title: "Emeritus Professor & Former Director of the Australian Rivers Institute",
        subject: "environment",
        topics: ["Freshwater Ecology", "River Food Webs", "Hydrological Connectivity", "Water Security"],
        source: "https://experts.griffith.edu.au/18843-stuart-bunn",
        recruiting: "Not verified",
        summary: "Dr. Bunn is an internationally cited authority on freshwater ecosystems, advising global water bodies on environmental flow management and river basin health."
      },
      {
        id: 631,
        name: "Dr. Ronald Quinn",
        title: "Professor of Medicinal Chemistry & Pioneer of NatureBank at GRIDD",
        subject: "chemistry",
        topics: ["Natural Product Chemistry", "Drug Discovery", "High-Throughput Screening", "Metabolomics"],
        source: "https://experts.griffith.edu.au/18765-ronald-quinn",
        recruiting: "Not verified",
        summary: "Dr. Quinn is an AM recipient who established NatureBank, a world-unique collection of over 200,000 natural plant and marine extracts for pharmaceutical drug discovery."
      },
      {
        id: 632,
        name: "Dr. Catherine Pickering",
        title: "Professor of Botany & Ecological Tourism",
        subject: "biology",
        topics: ["Alpine Plant Ecology", "Recreation Ecology", "Conservation Biology", "Systematic Quantitative Literature Reviews"],
        source: "https://experts.griffith.edu.au/18809-catherine-pickering",
        recruiting: "Not verified",
        summary: "Dr. Pickering investigates the ecological impacts of tourism, alpine plant adaptations to warming, and developed the widely used PRISMA-compliant quantitative review method."
      }
    ]
  },

  // 3. Germany: Leipzig University (Row 315)
  {
    institution: "Leipzig University",
    shortName: "Uni Leipzig",
    slug: "leipzig-university",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Leipzig, Saxony, Germany",
    sourceRow: 315,
    website: "https://www.uni-leipzig.de/en/",
    headline: "Leipzig University: Global Studies, Leibniz Physics & Doctoral Excellence",
    description: "Discover Leipzig University graduate programs, German Excellence clusters, tuition-free education, physics and linguistics doctorates, and research funding in Saxony.",
    heroEyebrow: "Saxony, Germany · Founded 1409 · Top German Research University · Excellence Clusters",
    overview: "Founded in 1409, Leipzig University (Universität Leipzig) is one of the world's oldest continuously operating universities. Renowned for alumni like Goethe, Leibniz, and Angela Merkel, Uni Leipzig is a powerhouse in quantum physics, global and European studies, bioinformatics, and cognitive neuroscience.",
    admissions: {
      masters: "Relevant bachelor's degree (180 ECTS) in a corresponding discipline with an above-average final grade (equivalent to German grade 2.5 or better).",
      phd: "Recognized master's degree or Diplom with academic distinction ('magna cum laude' or better), accompanied by formal supervisor acceptance (Betreuungszusage).",
      language: "English-taught programs require CEFR B2/C1 (IELTS 6.5+ or TOEFL iBT 90+); German-taught programs require DSH-2 or TestDaF 4x4.",
      proposal: "For doctoral candidates: detailed 5–10 page research exposé outlining theoretical foundation, empirical methodology, and projected dissertation schedule.",
      appFee: "€0 for direct admission portal / €75 for uni-assist preliminary review where required.",
      documents: "Certified degree certificate, diploma supplement, transcript of records, CV, letter of motivation, and language certificates."
    },
    tuitionText: "Tuition is 100% free for all domestic and international students at Leipzig University. Students only pay a semester social contribution (Semesterbeitrag) of approximately €265 per semester, which includes a complete regional public transit pass for Central Germany (MDV network).",
    opportunities: [
      {
        id: 1432,
        title: "German Research Foundation (DFG) Doctoral Fellowship in Quantum Matter (TV-L E13)",
        subject: "physics",
        subjects: ["physics", "chemistry"],
        type: "PhD",
        source: "https://www.physgeo.uni-leipzig.de/en/institut-fuer-experimentelle-physik-ii",
        funding: "75% to 100% TV-L E13 salaried contract (€38,000–€52,000 gross/year) for 3 years",
        status: "Open for 2026/2027 candidates",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026",
        fee: "€0",
        tuition: "€0 (tuition-free German higher education)",
        requirements: {
          gpa: "Master of Science in Physics, Materials Science, or Applied Mathematics with top marks",
          ielts: "English C1 level (IELTS 6.5+ or TOEFL 90+)",
          gre: "Not required",
          papers: "Master's thesis on topological insulators, superconducting materials, or magnetic resonance",
          references: "Two academic referee letters from university professors"
        },
        desc: "Fully salaried doctoral research investigating correlated electron phenomena, 2D van der Waals materials, and quantum phase transitions at the Felix Bloch Institute."
      },
      {
        id: 1433,
        title: "Erasmus Mundus Joint Master Degree (EMJMD) in Global Studies",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Scholarship",
        source: "https://www.uni-leipzig.de/en/international/study-in-leipzig/degree-programmes/erasmus-mundus-masters",
        funding: "Full European Commission scholarship: €1,400/month living allowance + full fee coverage and travel",
        status: "Annual international call",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "€0",
        tuition: "100% covered by Erasmus Mundus grant",
        requirements: {
          gpa: "Outstanding bachelor's degree in History, Political Science, Sociology, or Economics",
          ielts: "C1 level English (IELTS 7.0+ or TOEFL 100+)",
          gre: "Not required",
          papers: "Sample academic essay on global history, transnationalism, or global governance",
          references: "Two confidential academic letters of recommendation"
        },
        desc: "Prestigious joint international master's program coordinated by Leipzig University with London School of Economics, Vienna, Roskilde, and Wroclaw."
      },
      {
        id: 1434,
        title: "Master of Science (M.Sc.) in Bioinformatics & Computational Genomics",
        subject: "computer-science",
        subjects: ["computer-science", "biology", "mathematics"],
        type: "Master's",
        source: "https://www.bioinf.uni-leipzig.de/teaching/msc_bioinf/",
        funding: "Tuition-free program; student research assistant (HiWi) contracts available",
        status: "Applications open",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Winter semester 2027 entry)",
        fee: "€0",
        tuition: "€0 (semester fee of ~€265 applies)",
        requirements: {
          gpa: "BSc in Bioinformatics, Computer Science, Biology, or Biochemistry with minimum 60 ECTS in computing/math",
          ielts: "English B2/C1 (IELTS 6.5+)",
          gre: "Not required",
          papers: "Programming portfolio in Python, C++, or R and transcript of records",
          references: "Letter of motivation and academic CV"
        },
        desc: "English-taught master's exploring non-coding RNA algorithms, phylogenetic reconstruction, deep learning for proteomics, and structural biology."
      },
      {
        id: 1435,
        title: "Max Planck Institute for Evolutionary Anthropology Collaborative Research Assistantship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Research",
        source: "https://www.eva.mpg.de/",
        funding: "TVöD research salary contract (€34,000–€42,000 gross/year)",
        status: "Active research appointment",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "€0",
        tuition: "Salaried research appointment",
        requirements: {
          gpa: "Master's degree in Ancient DNA, Molecular Anthropology, or Population Genetics",
          ielts: "Fluent scientific English",
          gre: "Not required",
          papers: "Cleanroom ancient DNA extraction or next-generation sequencing bioinformatics experience",
          references: "Two academic referee contacts"
        },
        desc: "Cooperative research vacancy alongside the Nobel Prize-winning MPI team analyzing hominin paleogenomics, Neanderthal admixture, and prehistoric human migrations."
      },
      {
        id: 1436,
        title: "Helmholtz Centre for Environmental Research (UFZ) Catchment Ecology Practicum",
        subject: "environment",
        subjects: ["environment", "chemistry"],
        type: "Internship",
        source: "https://www.ufz.de/index.php?en=34289",
        funding: "Paid student research stipend (€1,100–€1,450/month)",
        status: "Summer and autumn placements",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€0",
        tuition: "Enrolled student curricular unit",
        requirements: {
          gpa: "Good standing in MSc Environmental Science, Biology, or Chemistry",
          ielts: "English B2",
          gre: "Not required",
          papers: "CV and letter of interest in aquatic eco-toxicology or river monitoring",
          references: "Academic supervisor confirmation"
        },
        desc: "Applied research practicum at the UFZ Leipzig monitoring aquatic micropollutants, biodiversity decline in agricultural catchments, and wetland restoration."
      },
      {
        id: 1437,
        title: "Centre for the Study of Culture and Societal Change Postdoctoral Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship",
        source: "https://www.uni-leipzig.de/en/research/",
        funding: "Full 100% TV-L E13 postdoctoral salary (€58,000–€64,000 gross/year) for 2 years",
        status: "Open international competition",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "€0",
        tuition: "€0 (salaried academic role)",
        requirements: {
          gpa: "Completed PhD in Sociology, History, Cultural Studies, or Political Science",
          ielts: "Academic English or German fluency",
          gre: "Not applicable",
          papers: "Doctoral dissertation summary, sample publication, and 5-page research plan",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral fellowship investigating post-socialist transformation, regional socio-economic polarization, and memory politics in Central and Eastern Europe."
      },
      {
        id: 1438,
        title: "Master of Science (M.Sc.) in Physics with Specialization in Soft Matter & Biophysics",
        subject: "physics",
        subjects: ["physics", "biology"],
        type: "Master's",
        source: "https://www.physgeo.uni-leipzig.de/en/studium/international-physics-studies-program-ipsp",
        funding: "Tuition-free program; departmental lab assistant contracts available",
        status: "Applications open",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        fee: "€0",
        tuition: "€0 (standard €265 semester fee)",
        requirements: {
          gpa: "Bachelor of Science in Physics with grade equivalent to German 2.5 or better",
          ielts: "TOEFL iBT 80+ or IELTS 6.0+",
          gre: "Optional",
          papers: "Transcript of records showing solid foundation in statistical physics and thermodynamics",
          references: "Letter of motivation and CV"
        },
        desc: "Flagship International Physics Studies Program (IPSP) taught entirely in English exploring polymer physics, biological membranes, single-molecule mechanics, and statistical mechanics."
      }
    ],
    researchers: [
      {
        id: 633,
        name: "Dr. Peter F. Stadler",
        title: "Professor of Bioinformatics & Head of the Bioinformatics Group",
        subject: "computer-science",
        topics: ["RNA Secondary Structure", "Comparative Genomics", "Non-Coding RNA", "Evolutionary Theory"],
        source: "https://www.bioinf.uni-leipzig.de/~studla/",
        recruiting: "Not verified",
        summary: "Dr. Stadler is one of the world's leading computational biologists, developing foundational algorithms for RNA secondary structure prediction, phylogenetic graph theory, and non-coding RNA discovery."
      },
      {
        id: 634,
        name: "Dr. Josef Käs",
        title: "Professor of Physics & Head of Soft Matter Physics",
        subject: "physics",
        topics: ["Biophysics of Cancer", "Optical Stretcher", "Cytoskeletal Mechanics", "Cell Motility"],
        source: "https://home.uni-leipzig.de/pwm/",
        recruiting: "Not verified",
        summary: "Dr. Käs invented the optical stretcher, pioneering the biomechanical characterization of malignant cancer cells and investigating phase transitions in tumor tissue."
      },
      {
        id: 635,
        name: "Dr. Matthias Middell",
        title: "Professor of Cultural History & Director of the Global and European Studies Institute",
        subject: "social-sciences",
        topics: ["Global History", "Spatial Formats", "Transnational Studies", "Historiography"],
        source: "https://www.uni-leipzig.de/gesi",
        recruiting: "Not verified",
        summary: "Dr. Middell is a preeminent global historian examining spatialization processes, respatialization under globalization, and the cultural history of revolutions."
      }
    ]
  },

  // 4. Italy: University of Salerno (Row 532)
  {
    institution: "University of Salerno",
    shortName: "UniSa",
    slug: "university-of-salerno",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Fisciano & Salerno, Campania, Italy",
    sourceRow: 532,
    website: "https://web.unisa.it/en",
    headline: "University of Salerno: Pharmacy, Engineering & ADISURC Regional Scholarships",
    description: "Explore University of Salerno master's degrees, ADISURC study grants, Pharmacy and Chemical Engineering PhD scholarships, and international admissions in Campania.",
    heroEyebrow: "Campania, Italy · Historic Medical School Heritage · Premier Campus University",
    overview: "The University of Salerno (Università degli Studi di Salerno) inherits the legacy of the historic Schola Medica Salernitana, the oldest medical school in medieval Europe. Located on modern Anglo-Saxon-style campuses in Fisciano and Baronissi, it is renowned for pharmacy, chemical engineering, computer science, and legal studies.",
    admissions: {
      masters: "Three-year undergraduate degree (Laurea) or international bachelor's degree evaluated via the national Universitaly pre-enrolment platform.",
      phd: "Master's degree (Laurea Magistrale) with competitive examination of CV, research proposal, and an academic interview (available via video conference).",
      language: "B2 English certificate (IELTS 6.0+, TOEFL 78+, or Cambridge B2 First); Italian B2 required only for courses taught in Italian.",
      proposal: "Required for doctoral admission: 3,000–5,000 word research proposal written in English outlining objectives, state of the art, and experimental methodology.",
      appFee: "€30 application evaluation fee.",
      documents: "Universitaly summary, bachelor's degree certificate with Declaration of Value (DoV) or CIMEA comparability statement, and transcript of records."
    },
    tuitionText: "Tuition is means-tested based on equivalent economic indicator (ISEE parificato), ranging from €156 to approximately €2,200 per year. Regional ADISURC scholarships (Azienda per il Diritto allo Studio Universitario della Regione Campania) provide eligible students with 100% tuition waivers, free campus housing, and up to €7,000 cash grants.",
    opportunities: [
      {
        id: 1439,
        title: "Campania Regional ADISURC Full Scholarship & Campus Housing Grant",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "Scholarship",
        source: "https://web.unisa.it/en/teaching/fees-and-financial-aid/scholarships",
        funding: "Complete tuition waiver, free residence accommodation in Fisciano, and up to €7,000/year cash stipend",
        status: "Annual competition",
        deadline: "2026-11-05",
        deadlineText: "November 5, 2026 (Annual ADISURC deadline)",
        fee: "€30",
        tuition: "100% waived for ADISURC beneficiaries (only €156 regional fee applies)",
        requirements: {
          gpa: "Minimum 70% undergraduate academic standing; family ISEE parificato < €25,000",
          ielts: "B2 English level (IELTS 6.0+ or equivalent)",
          gre: "Not required",
          papers: "Verified foreign family income and real estate documentation translated into Italian",
          references: "Academic admission confirmation"
        },
        desc: "Comprehensive needs-and-merit based regional scholarship open to domestic and international students ensuring access to higher education in Campania."
      },
      {
        id: 1440,
        title: "Doctor of Philosophy (PhD) in Drug Discovery & Pharmaceutical Sciences",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        type: "PhD",
        source: "https://web.unisa.it/en/research/phd-programmes",
        funding: "€16,243 net annual scholarship (tax-exempt) for 3 years + research mobility funds",
        status: "Open for 42nd cycle",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Cycle XLII intake)",
        fee: "€30",
        tuition: "€0 (full tuition waiver for funded doctoral positions)",
        requirements: {
          gpa: "Master of Science in Pharmacy, Chemistry, or Molecular Biotechnology",
          ielts: "B2 English proficiency verified via interview",
          gre: "Not required",
          papers: "Curriculum vitae, research proposal in medicinal chemistry, pharmacology, or drug delivery",
          references: "Two academic referee letters from university professors"
        },
        desc: "Doctoral research program based at the Department of Pharmacy investigating synthetic anticancer agents, computational ligand docking, and nanomedicine drug carriers."
      },
      {
        id: 1441,
        title: "Master of Science (M.Sc.) in Chemical Engineering & Sustainable Industrial Processes",
        subject: "engineering",
        subjects: ["engineering", "chemistry", "environment"],
        type: "Master's",
        source: "https://web.unisa.it/en/teaching/degree-programmes?dettaglio=2144",
        funding: "ADISURC merit grants and university fee discount tiers",
        status: "Applications open via Universitaly",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (International applicants)",
        fee: "€30",
        tuition: "€156–€2,100/year adjusted by family income",
        requirements: {
          gpa: "Bachelor's degree in Chemical, Materials, or Environmental Engineering",
          ielts: "IELTS 6.0+ or TOEFL 75+",
          gre: "Not required",
          papers: "Statement of purpose detailing interest in supercritical fluid processing or polymer recycling",
          references: "One academic letter of recommendation"
        },
        desc: "Two-year international master's taught in English exploring advanced separation processes, supercritical CO2 technologies, green solvent formulation, and bioreactors."
      },
      {
        id: 1442,
        title: "Supercritical Fluid Processing Laboratory Research Assistantship",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Research",
        source: "https://web.unisa.it/ricerca/strutture/laboratori",
        funding: "Annual research grant (Assegno di Ricerca) of €20,500–€24,500 gross",
        status: "Active research call",
        deadline: "2026-12-20",
        deadlineText: "December 20, 2026",
        fee: "€0",
        tuition: "Salaried research appointment",
        requirements: {
          gpa: "Master's degree in Chemical Engineering or Applied Chemistry",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Hands-on experience with high-pressure supercritical fluid apparatus or microencapsulation",
          references: "Two academic referee contacts"
        },
        desc: "Applied research post optimizing supercritical antisolvent (SAS) precipitation for active pharmaceutical ingredient (API) bioavailability enhancement."
      },
      {
        id: 1443,
        title: "Baronissi Biomedical Research Campus Clinical Diagnostics Practicum",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Internship",
        source: "https://web.unisa.it/en/departments/medicine-surgery-and-dentistry",
        funding: "Clinical training bursary (€750–€1,000/month)",
        status: "Open for postgraduate healthcare students",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€0",
        tuition: "Curricular credit course",
        requirements: {
          gpa: "Enrolled in MSc Medical Biotechnology, Pharmacy, or Clinical Medicine",
          ielts: "B2 English",
          gre: "Not required",
          papers: "Laboratory safety certifications and vaccination clearance",
          references: "Hospital department head approval"
        },
        desc: "Clinical diagnostic internship rotating through molecular pathology, flow cytometry, and therapeutic drug monitoring laboratories at the Baronissi campus."
      },
      {
        id: 1444,
        title: "Postdoctoral Fellowship in Artificial Intelligence & Big Data Analytics",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Fellowship",
        source: "https://web.unisa.it/en/departments/computer-science",
        funding: "€26,000 net annual research contract for 24 months",
        status: "Open competition",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€0",
        tuition: "Salaried postdoctoral role",
        requirements: {
          gpa: "PhD in Computer Science, Data Science, or Information Engineering",
          ielts: "Professional English fluency",
          gre: "Not applicable",
          papers: "Demonstrated publications in top-tier machine learning or database venues (e.g., IEEE TKDE, VLDB, KDD)",
          references: "Three letters of recommendation"
        },
        desc: "Two-year postdoctoral fellowship at the Department of Computer Science developing explainable deep learning architectures, knowledge distillation, and graph neural networks."
      },
      {
        id: 1445,
        title: "Master of Science (M.Sc.) in Food Engineering & Mediterranean Agrifood Innovation",
        subject: "engineering",
        subjects: ["engineering", "chemistry", "biology"],
        type: "Master's",
        source: "https://web.unisa.it/en/teaching/degree-programmes?dettaglio=2145",
        funding: "ADISURC fee exemptions and university merit awards",
        status: "Applications open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "€30",
        tuition: "€156–€2,100/year (means-tested)",
        requirements: {
          gpa: "Bachelor's degree in Food Engineering, Chemical Engineering, or Food Science",
          ielts: "English B2 certificate",
          gre: "Not required",
          papers: "Statement of purpose detailing interest in Mediterranean food shelf-life and sustainable packaging",
          references: "One academic letter of recommendation"
        },
        desc: "English-taught master's degree exploring industrial food preservation, olive oil and wine valorization, biodegradable biopolymers, and smart food supply chains."
      }
    ],
    researchers: [
      {
        id: 636,
        name: "Dr. Ernesto Reverchon",
        title: "Full Professor of Chemical Engineering & Leader in Supercritical Technologies",
        subject: "engineering",
        topics: ["Supercritical Fluids", "Aerogels", "Nanostructured Biomaterials", "Drug Delivery Systems"],
        source: "https://docenti.unisa.it/001397/home",
        recruiting: "Not verified",
        summary: "Dr. Reverchon is an internationally cited pioneer in supercritical fluid processing, developing landmark techniques for aerogel synthesis, microencapsulation, and tissue engineering scaffolds."
      },
      {
        id: 637,
        name: "Dr. Gianluca Sbardella",
        title: "Professor of Medicinal Chemistry & Epigenetics",
        subject: "chemistry",
        topics: ["Epigenetic Drug Discovery", "Histone Acetyltransferases", "Anticancer Therapeutics", "Medicinal Chemistry"],
        source: "https://docenti.unisa.it/005234/home",
        recruiting: "Not verified",
        summary: "Dr. Sbardella directs international research on epigenetic chemical probes, discovering small-molecule modulators of chromatin enzymes for targeted oncology."
      },
      {
        id: 638,
        name: "Dr. Vincenzo Loia",
        title: "Rector of the University & Full Professor of Computer Science",
        subject: "computer-science",
        topics: ["Computational Intelligence", "Fuzzy Cognitive Maps", "Cybersecurity", "Ambient Intelligence"],
        source: "https://docenti.unisa.it/000966/home",
        recruiting: "Not verified",
        summary: "Dr. Loia is the Rector of UniSa and an IEEE Fellow who pioneered situational awareness models, fuzzy cognitive architectures, and automated forensic reasoning systems."
      }
    ]
  },

  // 5. USA: Vanderbilt University (Row 1197)
  {
    institution: "Vanderbilt University",
    shortName: "Vanderbilt",
    slug: "vanderbilt-university",
    countryId: "usa",
    countryLabel: "USA",
    location: "Nashville, Tennessee, USA",
    sourceRow: 1197,
    website: "https://www.vanderbilt.edu",
    headline: "Vanderbilt University: Biomedical Engineering, Computer Science & Fully Funded PhDs",
    description: "Explore Vanderbilt University graduate admissions, School of Engineering, fully funded PhD fellowships, Vanderbilt Medical Center research, and degrees in Nashville.",
    heroEyebrow: "Nashville, Tennessee · Elite Tier-1 R1 Research University · Biomedical Powerhouse",
    overview: "Vanderbilt University is an elite private research university situated on a historic 330-acre arboretum campus in Nashville, Tennessee. Ranked among the nation's premier institutions, Vanderbilt is renowned for biomedical engineering, pharmacology at Vanderbilt University Medical Center, computer science, and education (Peabody College).",
    admissions: {
      masters: "Four-year bachelor's degree from an accredited institution with exceptional academic standing (typical undergraduate GPA 3.6+ on a 4.0 scale).",
      phd: "Undergraduate or master's degree in a relevant discipline; all admitted full-time doctoral students receive guaranteed 5-year funding packages covering full tuition, living stipends, and health insurance.",
      language: "TOEFL iBT 100+, IELTS Academic 7.0+, or Duolingo English Test 130+.",
      proposal: "Comprehensive statement of purpose detailing intellectual trajectory, research experience, and specific alignment with 2–3 Vanderbilt faculty laboratories.",
      appFee: "$95 USD (institutional fee waivers available for demonstrated financial hardship and diversity pipeline programs).",
      documents: "Official academic transcripts, 3 confidential letters of recommendation, curriculum vitae, and research writing sample."
    },
    tuitionText: "Graduate tuition at Vanderbilt is approximately $57,500 USD per year. However, all full-time PhD students admitted to the Graduate School receive 100% full tuition scholarships and guaranteed annual research/teaching stipends of at least $38,000 to $42,500 USD for 5 years.",
    opportunities: [
      {
        id: 1446,
        title: "Vanderbilt Graduate School Provost's Doctoral Fellowship & Full Stipend",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Scholarship",
        source: "https://gradschool.vanderbilt.edu/funding/",
        funding: "100% full tuition waiver + $41,000 USD/year living stipend + comprehensive health insurance",
        status: "Open for Fall 2027 entry",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Priority PhD deadline)",
        fee: "$95 USD (waiver available)",
        tuition: "100% covered by Vanderbilt fellowship",
        requirements: {
          gpa: "Undergraduate GPA 3.5+ in Computer Science, Math, or Engineering",
          ielts: "7.0+ or TOEFL 100+",
          gre: "Optional / Holistic review",
          papers: "Statement of purpose and technical GitHub repository or published paper",
          references: "Three academic reference letters from research mentors"
        },
        desc: "Flagship 5-year doctoral fellowship funding exceptional PhD candidates conducting high-impact research in machine learning, cyber-physical systems, and surgical robotics."
      },
      {
        id: 1447,
        title: "Doctor of Philosophy (PhD) in Biomedical Engineering (BME)",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        type: "PhD",
        source: "https://engineering.vanderbilt.edu/bme/graduate-program/",
        funding: "Guaranteed $40,000 USD/year stipend + full tuition waiver for 5 years",
        status: "Applications open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "$95 USD",
        tuition: "Fully funded by departmental fellowship",
        requirements: {
          gpa: "BS or MS in Biomedical, Electrical, or Mechanical Engineering, or Physics",
          ielts: "7.0 overall (minimum 6.5 in all bands)",
          gre: "Optional",
          papers: "Statement of purpose detailing interest in biomedical imaging, nanomedicine, or neural engineering",
          references: "Three academic letters of recommendation"
        },
        desc: "Nationally top-ranked doctoral program closely integrated with Vanderbilt University Medical Center, pioneering optical coherence tomography, therapeutic ultrasound, and targeted oncology."
      },
      {
        id: 1448,
        title: "Master of Science in Computer Science & Autonomous Intelligent Systems",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        source: "https://engineering.vanderbilt.edu/cs/graduate-program/",
        funding: "Merit-based partial tuition scholarships and graduate research appointments",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$95 USD",
        tuition: "$56,800 USD/year",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Computer Engineering, or Mathematics (GPA 3.4+)",
          ielts: "TOEFL 100+ or IELTS 7.0+",
          gre: "Optional",
          papers: "Statement of purpose highlighting software engineering and systems architecture experience",
          references: "Three letters of recommendation"
        },
        desc: "Two-year master's curriculum exploring deep reinforcement learning, cloud distributed architectures, cyber-physical system verification, and computer vision."
      },
      {
        id: 1449,
        title: "Institute for Surgery and Engineering (VISE) Surgical Robotics Assistantship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Research",
        source: "https://www.vanderbilt.edu/vise/",
        funding: "NIH-funded research assistantship ($39,500 USD/year) + full tuition waiver",
        status: "Active laboratory vacancy",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        fee: "$0 (enrolled graduate students)",
        tuition: "Covered by NIH training grant",
        requirements: {
          gpa: "BSc in Robotics, Mechanical Engineering, or Computer Science",
          ielts: "English standard satisfied",
          gre: "Not required",
          papers: "Demonstrated background in continuum robotics, medical image guidance, or haptic interfaces",
          references: "Two faculty recommendations"
        },
        desc: "Interdisciplinary research post based at VISE developing steerable needles, transoral surgical robots, and augmented-reality surgical guidance systems."
      },
      {
        id: 1450,
        title: "Vanderbilt University Medical Center (VUMC) Biomedical Data Science Practicum",
        subject: "biology",
        subjects: ["biology", "computer-science"],
        type: "Internship",
        source: "https://www.vumc.org/dbmi/",
        funding: "Paid biomedical informatics fellowship ($28–$35 USD/hour)",
        status: "Summer and semester placement rounds",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Summer 2027 placement)",
        fee: "$0",
        tuition: "N/A (practicum fellowship)",
        requirements: {
          gpa: "Good standing in Vanderbilt graduate engineering or informatics program",
          ielts: "Institutional standard",
          gre: "Not required",
          papers: "Resume and project statement on clinical phenotyping or biobank genomic analysis",
          references: "Faculty advisor endorsement"
        },
        desc: "Applied data science practicum embedded within BioVU, Vanderbilt's massive biobank linking de-identified electronic health records with patient genomic profiles."
      },
      {
        id: 1451,
        title: "Vanderbilt Center for Quantitative Sciences Postdoctoral Fellowship",
        subject: "mathematics",
        subjects: ["mathematics", "biology", "computer-science"],
        type: "Fellowship",
        source: "https://www.vumc.org/cqs/",
        funding: "$74,000 USD annual salary + $6,000 USD conference travel fund for 2 years",
        status: "Open competition",
        deadline: "2027-01-05",
        deadlineText: "January 5, 2027",
        fee: "$0",
        tuition: "Salaried postdoctoral appointment",
        requirements: {
          gpa: "Doctorate completed within 3 years in Biostatistics, Applied Mathematics, or Computational Biology",
          ielts: "Native or fluent English",
          gre: "Not applicable",
          papers: "Substantial publication record in survival analysis, spatial genomics, or high-dimensional statistics",
          references: "Three letters of recommendation"
        },
        desc: "Two-year postdoctoral fellowship developing novel statistical methods for single-cell multiomics, cancer spatial transcriptomics, and clinical survival prediction."
      },
      {
        id: 1452,
        title: "Master of Engineering (M.Eng.) in Civil & Infrastructure Management",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        source: "https://engineering.vanderbilt.edu/cee/graduate-program/",
        funding: "Engineering professional scholarships available",
        status: "Applications open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$95 USD",
        tuition: "$57,500 USD for the full degree",
        requirements: {
          gpa: "Bachelor's degree in Civil, Environmental, or Mechanical Engineering with GPA 3.3+",
          ielts: "TOEFL 95+ or IELTS 7.0+",
          gre: "Optional",
          papers: "Statement of purpose explaining career goals in smart cities and resilient infrastructure",
          references: "Two professional or academic references"
        },
        desc: "Professional master's curriculum focusing on intelligent transportation systems, smart grid integration, structural health monitoring, and disaster risk assessment."
      }
    ],
    researchers: [
      {
        id: 639,
        name: "Dr. Robert Webster",
        title: "Richard A. Schroeder Professor of Mechanical Engineering & Co-Director of VISE",
        subject: "engineering",
        topics: ["Surgical Robotics", "Continuum Robots", "Medical Devices", "Image-Guided Surgery"],
        source: "https://engineering.vanderbilt.edu/bio/robert-webster",
        recruiting: "Not verified",
        summary: "Dr. Webster is an internationally renowned surgical robotics pioneer, inventing concentric tube continuum robots for minimally invasive skull base and lung procedures."
      },
      {
        id: 640,
        name: "Dr. Abhishek Dubey",
        title: "Associate Professor of Computer Science & Electrical Engineering",
        subject: "computer-science",
        topics: ["Smart Cities", "Cyber-Physical Systems", "Resilient Transit", "Decentralized AI"],
        source: "https://engineering.vanderbilt.edu/bio/abhishek-dubey",
        recruiting: "Not verified",
        summary: "Dr. Dubey leads the Smart and Resilient Computing Systems lab, directing large-scale NSF-funded smart transit optimization and distributed energy grid automation projects."
      },
      {
        id: 641,
        name: "Dr. Anita Mahadevan-Jansen",
        title: "Orrin H. Ingram Chair in Biomedical Engineering & SPIE President Emeritus",
        subject: "engineering",
        topics: ["Biomedical Photonics", "Raman Spectroscopy", "Optical Diagnostics", "Intraoperative Imaging"],
        source: "https://engineering.vanderbilt.edu/bio/anita-mahadevan-jansen",
        recruiting: "Not verified",
        summary: "Dr. Mahadevan-Jansen is an elected fellow of AIMBE and SPIE who pioneered intraoperative optical guidance technologies and label-free Raman spectroscopy for surgical tissue discrimination."
      }
    ]
  },

  // 6. UK: Birmingham City University (Row 1237)
  {
    institution: "Birmingham City University",
    shortName: "BCU",
    slug: "birmingham-city-university",
    countryId: "uk",
    countryLabel: "UK",
    location: "Birmingham, England, UK",
    sourceRow: 1237,
    website: "https://bcu.ac.uk",
    headline: "Birmingham City University: Royal Birmingham Conservatoire, STEAM & Masters",
    description: "Explore Birmingham City University postgraduate programs, Royal Birmingham Conservatoire doctorates, STEAMhouse innovation fellowships, and scholarships in Birmingham.",
    heroEyebrow: "Birmingham, West Midlands, UK · Major Urban University · Creative & Tech Powerhouse",
    overview: "Birmingham City University (BCU) is a major public university in the UK's second city. Celebrating its globally acclaimed Royal Birmingham Conservatoire, prestigious Birmingham School of Art, STEAMhouse collaborative innovation center, and world-class health simulation facilities, BCU excels in creative arts, engineering, and digital technologies.",
    admissions: {
      masters: "UK honours degree (minimum 2:2, with 2:1 preferred for competitive programs) or international equivalent in an appropriate academic field.",
      phd: "Master's degree with merit or distinction (or international equivalent), accompanied by a formal supervisory endorsement from a BCU faculty mentor.",
      language: "IELTS Academic 6.0 overall (minimum 5.5 in all bands) for most postgraduate courses; 6.5 overall for computing, research degrees, and health courses.",
      proposal: "For MPhil/PhD: 1,500–2,500 word research proposal outlining research aims, methodological framework, resource requirements, and academic significance.",
      appFee: "£0 (free direct online application via the BCU portal).",
      documents: "Certified degree certificate, official transcript of records, two academic reference letters, personal statement, and portfolio/audition (for creative disciplines)."
    },
    tuitionText: "International postgraduate tuition ranges from approximately £16,000 to £18,500 per year. BCU International Scholarships provide automatic merit fee reductions of up to £2,000, and UKRI-aligned doctoral studentships cover 100% of tuition plus an annual living stipend of £19,237.",
    opportunities: [
      {
        id: 1453,
        title: "BCU Vice-Chancellor's International Postgraduate Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Scholarship",
        source: "https://www.bcu.ac.uk/international/fees-and-finance/scholarships",
        funding: "Up to £2,000 tuition fee discount automatically awarded on academic merit",
        status: "Open for 2026/2027 entry",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Spring 2027 intake)",
        fee: "£0",
        tuition: "£16,500/year (before scholarship reduction)",
        requirements: {
          gpa: "UK 2:1 honours degree equivalent in relevant undergraduate degree",
          ielts: "6.0 overall (minimum 5.5 in each component)",
          gre: "Not required",
          papers: "Personal statement detailing career ambitions and chosen field",
          references: "Two academic referee letters"
        },
        desc: "Merit-based international tuition scholarship open to all full-time postgraduate taught master's students enrolling across BCU faculties."
      },
      {
        id: 1454,
        title: "Doctor of Philosophy (PhD) in Music Composition & Electroacoustic Technology",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "PhD",
        source: "https://www.bcu.ac.uk/conservatoire/research/research-degrees",
        funding: "Royal Birmingham Conservatoire doctoral studentship (£19,237/year stipend + tuition)",
        status: "Open for applications",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "£0",
        tuition: "Full fee coverage for funded studentships",
        requirements: {
          gpa: "MMus or MA in Composition, Sonic Arts, or Music Technology with distinction",
          ielts: "6.5 overall (minimum 6.0 in all bands)",
          gre: "Not required",
          papers: "Portfolio of 3–4 original scores or electronic compositions and 2,000-word proposal",
          references: "Two academic references from recognized music scholars"
        },
        desc: "Doctoral research conducted within the state-of-the-art Royal Birmingham Conservatoire exploring algorithmic composition, multichannel spatial audio, and interactive digital performance."
      },
      {
        id: 1455,
        title: "Master of Science (MSc) in Cyber Security & Cloud Architecture",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        source: "https://www.bcu.ac.uk/courses/cyber-security-msc",
        funding: "BCU merit awards and STEM bursaries available",
        status: "Applications open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "£0",
        tuition: "£16,800/year for international students",
        requirements: {
          gpa: "UK 2:2 honours degree or equivalent in Computing, IT, or Telecommunications",
          ielts: "6.0 overall (no band below 5.5)",
          gre: "Not required",
          papers: "Statement of purpose explaining interest in cloud security and vulnerability assessment",
          references: "One academic and one professional reference"
        },
        desc: "Cisco and AWS-aligned master's curriculum exploring ethical hacking, cloud security architecture, digital forensics, and industrial control network resilience."
      },
      {
        id: 1456,
        title: "STEAMhouse Center for Collaborative Innovation Industrial Research Assistantship",
        subject: "engineering",
        subjects: ["engineering", "arts-design", "computer-science"],
        type: "Research",
        source: "https://steamhouse.org.uk/",
        funding: "Grade 6 researcher salary (£34,000–£40,000/year)",
        status: "Active project vacancy",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "£0",
        tuition: "Salaried university research staff appointment",
        requirements: {
          gpa: "Master's degree in Product Design, Mechanical Engineering, or Digital Fabrication",
          ielts: "Fluent professional English",
          gre: "Not required",
          papers: "Demonstrated skills in 3D prototyping, CNC machining, or additive manufacturing",
          references: "Two professional reference letters"
        },
        desc: "Applied research post at STEAMhouse bridging arts and STEM to co-create sustainable industrial products, circular polymers, and smart wearable electronics."
      },
      {
        id: 1457,
        title: "University Hospitals Birmingham NHS Foundation Trust Health Simulation Practicum",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Internship",
        source: "https://www.bcu.ac.uk/health-sciences/simulation",
        funding: "Clinical practice allowance + uniform and transport subsidy",
        status: "Open for postgraduate healthcare students",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "£0",
        tuition: "Curricular credit course",
        requirements: {
          gpa: "Enrolled in MSc Advanced Clinical Practice, Radiography, or Nursing",
          ielts: "7.0 overall (minimum 7.0 in all bands)",
          gre: "Not required",
          papers: "DBS enhanced disclosure and occupational health immunizations",
          references: "Clinical placement tutor approval"
        },
        desc: "Hands-on clinical internship utilizing BCU's £41M simulation suites and Queen Elizabeth Hospital clinical wards to master acute resuscitation and diagnostic imaging."
      },
      {
        id: 1458,
        title: "Faculty of Computing, Engineering & the Built Environment Postdoctoral Fellowship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Fellowship",
        source: "https://www.bcu.ac.uk/research/our-faculties/cebe",
        funding: "Salaried postdoctoral appointment (£38,500–£44,000/year)",
        status: "Open competition",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "£0",
        tuition: "Salaried academic role",
        requirements: {
          gpa: "PhD in Civil Engineering, Structural Health Monitoring, or Building Informatics",
          ielts: "Academic English fluency",
          gre: "Not applicable",
          papers: "Demonstrated peer-reviewed publications on digital twins, BIM automation, or sensor arrays",
          references: "Three academic reference contacts"
        },
        desc: "Two-year postdoctoral fellowship researching digital twin infrastructure, structural fiber-optic sensing, and carbon accounting in major UK civil engineering works."
      },
      {
        id: 1459,
        title: "Master of Arts (MA) in User Experience (UX) Design",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Master's",
        source: "https://www.bcu.ac.uk/courses/user-experience-design-ma",
        funding: "BCU international scholarships available",
        status: "Applications open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "£0",
        tuition: "£16,500/year for international students",
        requirements: {
          gpa: "UK 2:2 honours degree or equivalent in Design, Psychology, Computing, or Media",
          ielts: "6.0 overall (minimum 5.5 in each section)",
          gre: "Not required",
          papers: "Digital portfolio of 10–15 wireframes, user journeys, or interactive prototypes",
          references: "One academic and one professional reference"
        },
        desc: "Creative graduate degree training UX researchers and product designers in human-centered design, usability testing, accessibility heuristics, and design systems."
      }
    ],
    researchers: [
      {
        id: 642,
        name: "Dr. Joe Spencer",
        title: "Professor of Digital Arts & Media Technology",
        subject: "arts-design",
        topics: ["Interactive Media", "Digital Art Installations", "Creative Coding", "Spatial Audio"],
        source: "https://www.bcu.ac.uk/conservatoire/research/our-staff",
        recruiting: "Not verified",
        summary: "Dr. Spencer leads research on interactive digital installations, creative technology interfaces, and the synthesis between audio-visual algorithms and physical audience engagement."
      },
      {
        id: 643,
        name: "Dr. Hanifa Shah",
        title: "Professor of Information Systems & Pro-Vice-Chancellor",
        subject: "computer-science",
        topics: ["Business Information Systems", "Digital Transformation", "Knowledge Engineering", "Enterprise Systems"],
        source: "https://www.bcu.ac.uk/computing-engineering-and-the-built-environment/about-us/our-staff/hanifa-shah",
        recruiting: "Not verified",
        summary: "Dr. Shah directs research on strategic enterprise systems, agile information architecture, and the digital transformation of public and industrial services."
      },
      {
        id: 644,
        name: "Dr. Lamine Mahdjoubi",
        title: "Professor of Smart Cities & Built Environment",
        subject: "engineering",
        topics: ["Building Information Modeling (BIM)", "Smart Cities", "Urban Analytics", "Digital Twins"],
        source: "https://www.bcu.ac.uk/computing-engineering-and-the-built-environment/about-us/our-staff/lamine-mahdjoubi",
        recruiting: "Not verified",
        summary: "Dr. Mahdjoubi investigates advanced 3D laser scanning, automated building energy models, and digital twin technology for resilient historic and modern urban infrastructure."
      }
    ]
  },

  // 7. Japan: Fukuoka Women's University (Row 1636)
  {
    institution: "Fukuoka Women's University",
    shortName: "FWU",
    slug: "fukuoka-womens-university",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Fukuoka, Japan",
    sourceRow: 1636,
    website: "https://www.fwu.ac.jp/english/",
    headline: "Fukuoka Women's University: Environmental Science, Food Nutrition & Global Leadership",
    description: "Discover Fukuoka Women's University graduate admissions, MEXT scholarships, international leadership programs, environmental science doctorates, and research in Kyushu.",
    heroEyebrow: "Fukuoka, Kyushu · Historic Public Prefectural University · Women's Leadership & Science",
    overview: "Fukuoka Women's University (FWU / Fukuoka Joshi Daigaku), founded in 1923, is a historic public prefectural university in Fukuoka, Japan. It is celebrated for its International College of Arts and Sciences, graduate programs in Environmental Science, Human Environmental Sciences, Food and Nutritional Sciences, and global leadership.",
    admissions: {
      masters: "Completion of 16 years of formal education with a bachelor's degree in environmental science, nutrition, biology, humanities, or social sciences.",
      phd: "Master's degree or equivalent in a relevant field; applicants must submit an academic thesis and research plan endorsed by an FWU faculty advisor.",
      language: "TOEFL iBT 70+, IELTS 5.5+, or Japanese JLPT N2 depending on the research laboratory's primary working language.",
      proposal: "Detailed 2–3 page research proposal outlining problem statement, methodology, and connection to FWU environmental or nutritional laboratories.",
      appFee: "¥30,000 JPY examination screening fee.",
      documents: "Bachelor's/Master's certificate of graduation, academic transcript, letters of recommendation, and passport copy."
    },
    tuitionText: "Tuition is approximately ¥535,800 JPY per year (admission fee of ¥282,000 JPY for Fukuoka residents, ¥423,000 JPY for non-residents). International students regularly receive 50% to 100% tuition exemptions based on academic merit, and MEXT scholars receive full tuition exemption plus a monthly living stipend.",
    opportunities: [
      {
        id: 1460,
        title: "Japanese Government (MEXT) University Recommendation Scholarship at FWU",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Scholarship",
        source: "https://www.fwu.ac.jp/english/admissions/",
        funding: "Full tuition waiver, admission fee exemption, roundtrip flights, and ¥144,000 JPY/month living stipend",
        status: "Annual selection",
        deadline: "2026-12-20",
        deadlineText: "December 20, 2026 (For October 2027 intake)",
        fee: "¥0 (for MEXT candidates)",
        tuition: "¥0 (fully funded by Japanese Ministry of Education)",
        requirements: {
          gpa: "Minimum 2.3 out of 3.0 on MEXT GPA scale",
          ielts: "CEFR B2 (IELTS 5.5+ or TOEFL iBT 72+)",
          gre: "Not required",
          papers: "Formal research proposal matched with FWU Graduate School of Human Environmental Science",
          references: "Dean's letter of recommendation from home university"
        },
        desc: "Prestigious national scholarship awarded to exceptional international women scholars pursuing master's or doctoral degrees in environmental science, nutrition, or global studies."
      },
      {
        id: 1461,
        title: "Doctor of Philosophy (PhD) in Environmental Biotechnology & Marine Conservation",
        subject: "environment",
        subjects: ["environment", "biology", "chemistry"],
        type: "PhD",
        source: "https://www.fwu.ac.jp/english/academics/graduate/",
        funding: "FWU Special Doctoral Research Fellowship (tuition waiver + ¥70,000 JPY/month stipend)",
        status: "Open for 2027 entry",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (Spring 2027 entry)",
        fee: "¥30,000 JPY",
        tuition: "¥535,800 JPY/year (50%–100% tuition exemption available)",
        requirements: {
          gpa: "Master's degree in Environmental Science, Aquatic Biology, or Biochemistry",
          ielts: "TOEFL 75+ or IELTS 6.0+",
          gre: "Not required",
          papers: "Master's thesis and 4-page research plan on coastal marine pollution or microbial bioremediation",
          references: "Two academic referee letters from university professors"
        },
        desc: "Doctoral research analyzing microplastic degradation in Hakata Bay, mangrove carbon sequestration, and marine microbial enzymes in East Asian coastal systems."
      },
      {
        id: 1462,
        title: "Master of Science in Food and Nutritional Sciences & Molecular Metabolism",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "Master's",
        source: "https://www.fwu.ac.jp/english/academics/graduate/human_environ.html",
        funding: "FWU International Student Tuition Exemption (50% fee discount)",
        status: "Applications open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026 (Spring 2027 semester)",
        fee: "¥30,000 JPY",
        tuition: "¥535,800 JPY/year before exemption",
        requirements: {
          gpa: "Bachelor's degree in Nutrition, Dietetics, Biochemistry, or Food Science",
          ielts: "IELTS 5.5+ or TOEFL 70+",
          gre: "Not required",
          papers: "Statement of purpose outlining research interest in functional food bioactives or metabolic disease",
          references: "Academic recommendation from undergraduate dean"
        },
        desc: "Advanced master's degree investigating dietary polyphenols, gut microbiota interactions, molecular mechanisms of metabolic syndrome, and clinical nutritional therapy."
      },
      {
        id: 1463,
        title: "Atmospheric Chemistry & Asian Dust (Kosa) Transport Laboratory Assistantship",
        subject: "chemistry",
        subjects: ["chemistry", "environment"],
        type: "Research",
        source: "https://www.fwu.ac.jp/english/research/",
        funding: "¥90,000 JPY monthly student research stipend via KAKENHI scientific grants",
        status: "Active laboratory vacancy",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥0",
        tuition: "Tuition waiver support available",
        requirements: {
          gpa: "BSc in Chemistry, Atmospheric Science, or Geochemistry",
          ielts: "Working English fluency",
          gre: "Not required",
          papers: "Experience with aerosol mass spectrometry or gas chromatography",
          references: "Laboratory professor recommendation"
        },
        desc: "Funded research post evaluating transboundary air pollution across the Tsushima Strait, PM2.5 chemical composition, and secondary organic aerosol formation."
      },
      {
        id: 1464,
        title: "Fukuoka Regional Marine Ecology & Water Quality Practicum",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "Internship",
        source: "https://www.fwu.ac.jp/english/international/",
        funding: "Municipal environmental training allowance (¥110,000 JPY/month)",
        status: "Summer and autumn cycles",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "¥0",
        tuition: "Curricular credit course",
        requirements: {
          gpa: "Enrolled in FWU Graduate School in good standing",
          ielts: "Conversational Japanese or technical English",
          gre: "Not required",
          papers: "Resume and field sampling certificate",
          references: "Faculty advisor confirmation"
        },
        desc: "Three-month field practicum with Fukuoka City Environmental Bureau conducting coastal water monitoring, red tide surveillance, and tidal flat habitat assessments."
      },
      {
        id: 1465,
        title: "JSPS-FWU Postdoctoral Fellowship in Global Gender Studies & East Asian Public Policy",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship",
        source: "https://www.fwu.ac.jp/english/academics/institute/",
        funding: "¥362,000 JPY monthly salary + ¥200,000 JPY travel allowance and research grant for 2 years",
        status: "Annual JSPS international competition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "¥0",
        tuition: "Salaried postdoctoral appointment",
        requirements: {
          gpa: "PhD in Sociology, Gender Studies, Political Science, or International Relations",
          ielts: "Academic English or Japanese fluency",
          gre: "Not applicable",
          papers: "Peer-reviewed publications on gender equality policy, demographic aging, or women's political leadership in Asia",
          references: "Three letters of recommendation from international professors"
        },
        desc: "Two-year postdoctoral fellowship supported by the Japan Society for the Promotion of Science (JSPS) examining gender labor economics, family welfare policies, and corporate governance in Japan."
      },
      {
        id: 1466,
        title: "Master of Arts in International Exchange & Transcultural Communication",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://www.fwu.ac.jp/english/academics/graduate/",
        funding: "Tuition reductions and prefectural international grants available",
        status: "Admissions open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "¥30,000 JPY",
        tuition: "¥535,800 JPY/year",
        requirements: {
          gpa: "Bachelor's degree in Linguistics, Literature, International Relations, or Cultural Studies",
          ielts: "IELTS 6.0+ or Japanese JLPT N2",
          gre: "Not required",
          papers: "Statement of purpose detailing comparative cultural analysis or second language acquisition",
          references: "Two academic referee letters"
        },
        desc: "Interdisciplinary master's curriculum training international cultural mediators, bilingual educators, and NGO project directors across the Asia-Pacific region."
      }
    ],
    researchers: [
      {
        id: 645,
        name: "Dr. Kazuo Sugihara",
        title: "Professor of Environmental Chemistry & Ecotoxicology",
        subject: "environment",
        topics: ["Environmental Endocrine Disruptors", "Atmospheric Particulates", "Heavy Metal Speciation", "Water Quality Analysis"],
        source: "https://www.fwu.ac.jp/english/research/",
        recruiting: "Not verified",
        summary: "Dr. Sugihara investigates the biological impacts of chemical contaminants in coastal environments, focusing on endocrine-disrupting chemicals and atmospheric aerosol deposition."
      },
      {
        id: 646,
        name: "Dr. Keiko Takahashi",
        title: "Professor of Nutritional Biochemistry & Functional Foods",
        subject: "biology",
        topics: ["Dietary Polyphenols", "Metabolic Regulation", "Lipid Metabolism", "Obesity Prevention"],
        source: "https://www.fwu.ac.jp/english/research/",
        recruiting: "Not verified",
        summary: "Dr. Takahashi conducts clinical and cellular studies on traditional Japanese plant flavonoids, elucidating molecular signaling pathways that regulate adipogenesis and glucose uptake."
      },
      {
        id: 647,
        name: "Dr. Hiroshi Sato",
        title: "Professor of International Relations & East Asian Regional Governance",
        subject: "social-sciences",
        topics: ["East Asian Diplomacy", "Human Security", "Transnational Migration", "Regional Economic Cooperation"],
        source: "https://www.fwu.ac.jp/english/research/",
        recruiting: "Not verified",
        summary: "Dr. Sato specializes in regional multilateral institutions, analyzing non-traditional security challenges, migration networks, and diplomatic normalization between Japan, China, and South Korea."
      }
    ]
  },

  // 8. Sweden: Royal College of Music (KMH) (Row 1601)
  {
    institution: "Royal College of Music",
    shortName: "KMH",
    slug: "royal-college-of-music",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Stockholm, Sweden",
    sourceRow: 1601,
    website: "https://www.kmh.se/in-english.html",
    headline: "Royal College of Music: Electroacoustic Music, Performance & Doctoral Studies",
    description: "Explore Royal College of Music (Kungliga Musikhögskolan - KMH) master's programs, artistic research doctorates, electroacoustic music, and admissions in Stockholm.",
    heroEyebrow: "Stockholm, Sweden · Founded 1771 · Sweden's Oldest Higher Music Institution",
    overview: "Founded in 1771 by King Gustav III, the Royal College of Music (Kungliga Musikhögskolan / KMH) in Stockholm is Sweden's oldest and foremost institution for higher education in music. Renowned for its avant-garde electroacoustic studios, world-class jazz, classical performance, and innovative artistic research in partnership with KTH.",
    admissions: {
      masters: "Bachelor of Fine Arts in Music (180 ECTS) or equivalent degree; admission is determined primarily through rigorous musical auditions, portfolios, and interviews.",
      phd: "Artistic doctoral degree (240 ECTS) in music performance, composition, or music education; conferred in partnership with Malmö Academy of Music or KTH Royal Institute of Technology.",
      language: "English 6 / English B (IELTS Academic 6.5 with no band below 5.5, or TOEFL iBT 90 with minimum 20 in writing).",
      proposal: "For artistic doctoral calls: 5-page artistic research plan outlining musical problematics, methodology, performance outcomes, and contextualization.",
      appFee: "900 SEK application fee via Universityadmissions.se (EU/EEA students exempt).",
      documents: "Bachelor's degree certificate, academic transcripts, audio/video audition portfolio, CV, and letters of recommendation."
    },
    tuitionText: "Tuition is free for Swedish, EU/EEA, and Swiss citizens. For non-EU/EEA students, master's tuition is approximately 190,000 to 220,000 SEK per year. PhD candidates are employed as full-time university researchers with monthly salaries starting at ~31,500 SEK/month, paying zero tuition fees.",
    opportunities: [
      {
        id: 1467,
        title: "KMH Salaried PhD Employment in Artistic Research in Music",
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "PhD",
        source: "https://www.kmh.se/in-english/research/doctoral-studies.html",
        funding: "100% full-time salaried employment starting at 32,000 SEK/month (~€33,500/year) + comprehensive pension and benefits",
        status: "Open for doctoral calls",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "0 SEK",
        tuition: "0 SEK (salaried employee; tuition-free)",
        requirements: {
          gpa: "Master of Fine Arts in Music or equivalent advanced degree with artistic excellence",
          ielts: "English 6 (IELTS 6.5 or equivalent)",
          gre: "Not required",
          papers: "Substantial portfolio of documented musical performances or compositions + 5-page research plan",
          references: "Two international referee letters from established musicologists or composers"
        },
        desc: "Four-year salaried doctoral research appointment developing innovative musical performance practice, embodied music cognition, or interactive electroacoustic composition."
      },
      {
        id: 1468,
        title: "Swedish Institute (SI) Scholarship for Global Professionals at KMH",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        type: "Scholarship",
        source: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
        funding: "Full tuition coverage, monthly living grant of 12,000 SEK, insurance, and travel allowance",
        status: "Annual SI application window",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        fee: "900 SEK (universityadmissions.se)",
        tuition: "Fully waived by Swedish Institute",
        requirements: {
          gpa: "High-achieving bachelor's degree; minimum 3,000 hours of documented professional cultural/musical work experience",
          ielts: "IELTS 6.5 (minimum 5.5 in each band)",
          gre: "Not required",
          papers: "Europass CV and leadership evidence from an eligible country",
          references: "Two professional reference letters"
        },
        desc: "Prestigious Swedish government scholarship funding international master's candidates committed to cultural leadership, community arts development, and creative innovation."
      },
      {
        id: 1469,
        title: "Master of Fine Arts (MFA) in Electroacoustic Composition",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        type: "Master's",
        source: "https://www.kmh.se/in-english/education/master-programmes/composition---electroacoustic-music.html",
        funding: "KMH tuition fee scholarships (covering 50%–100% of tuition)",
        status: "Open on Universityadmissions.se",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (National Swedish deadline)",
        fee: "900 SEK",
        tuition: "205,000 SEK/year for non-EU students",
        requirements: {
          gpa: "BFA in Music or Composition with verified sound design or studio portfolio",
          ielts: "IELTS 6.5 (no component under 5.5)",
          gre: "Not required",
          papers: "Portfolio of 3–5 original electroacoustic works (stereo/multichannel audio) and artistic project proposal",
          references: "Audition and interview evaluation"
        },
        desc: "Two-year master's program utilizing KMH's world-famous surround studios, exploring spatial sound diffusion, live electronics, granular synthesis, and sound art."
      },
      {
        id: 1470,
        title: "KMH & KTH Sound and Music Computing Collaborative Laboratory Assistantship",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        type: "Research",
        source: "https://www.kth.se/smc",
        funding: "Paid scientific research assistant salary (25,000 SEK/month)",
        status: "Active research vacancy",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "0 SEK",
        tuition: "Covered by research project grant",
        requirements: {
          gpa: "BSc or ongoing MSc in Music Technology, Computer Science, or Acoustic Engineering",
          ielts: "English 6 proficiency",
          gre: "Not required",
          papers: "Proficiency in SuperCollider, Max/MSP, Python audio libraries, or digital signal processing (DSP)",
          references: "Academic project supervisor confirmation"
        },
        desc: "Joint research post between KMH and KTH Sound and Music Computing lab exploring machine learning for musical gesture recognition and binaural acoustic simulation."
      },
      {
        id: 1471,
        title: "Royal Stockholm Philharmonic Orchestra & Berwaldhallen Orchestral Practicum",
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Internship",
        source: "https://www.kmh.se/in-english/education/practical-information/",
        funding: "Professional orchestra trainee stipend (14,000 SEK/month)",
        status: "Annual audition round for enrolled performance master's students",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "0 SEK",
        tuition: "Curricular credit course",
        requirements: {
          gpa: "Enrolled in KMH Classical Performance Master's program",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Successful live orchestra screen audition",
          references: "Instrumental department chair approval"
        },
        desc: "Prestigious orchestral placement performing side-by-side with the Royal Stockholm Philharmonic Orchestra and Swedish Radio Symphony Orchestra."
      },
      {
        id: 1472,
        title: "Postdoctoral Fellowship in Music Acoustics & Embodied Instrument Interaction",
        subject: "physics",
        subjects: ["physics", "arts-design", "computer-science"],
        type: "Fellowship",
        source: "https://www.kmh.se/in-english/research.html",
        funding: "Salaried postdoctoral appointment (43,000–47,000 SEK/month + social benefits)",
        status: "International call",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "0 SEK",
        tuition: "0 SEK (salaried employee)",
        requirements: {
          gpa: "PhD in Musical Acoustics, Audio Signal Processing, or Musicology",
          ielts: "Fluent academic English",
          gre: "Not applicable",
          papers: "Demonstrated peer-reviewed publications in physical modeling of musical instruments or acoustic resonance",
          references: "Three academic reference contacts"
        },
        desc: "Two-year postdoctoral appointment examining acoustic wave propagation in traditional Nordic instruments, haptic feedback in virtual instruments, and room acoustics."
      },
      {
        id: 1473,
        title: "Master of Fine Arts (MFA) in Jazz Performance & Improvisational Systems",
        subject: "arts-design",
        subjects: ["arts-design"],
        type: "Master's",
        source: "https://www.kmh.se/in-english/education/master-programmes/jazz.html",
        funding: "KMH international scholarship awards available",
        status: "Open on Universityadmissions.se",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "900 SEK",
        tuition: "210,000 SEK/year for non-EU students",
        requirements: {
          gpa: "Bachelor of Fine Arts in Jazz or Improvisation",
          ielts: "IELTS 6.5 (minimum 5.5 in each section)",
          gre: "Not required",
          papers: "Audition recordings of 3 contrasting jazz standards and original composition",
          references: "Two academic or professional musical references"
        },
        desc: "World-class jazz master's degree training elite improvisers in advanced harmonic concepts, Nordic jazz aesthetics, ensemble leadership, and cross-genre fusion."
      }
    ],
    researchers: [
      {
        id: 648,
        name: "Dr. Henrik Frisk",
        title: "Professor of Music & Head of Research at KMH",
        subject: "arts-design",
        topics: ["Artistic Research", "Interactive Music Systems", "Improvisation & Technology", "Electroacoustic Music"],
        source: "https://www.kmh.se/in-english/research/contact-research/henrik-frisk.html",
        recruiting: "Not verified",
        summary: "Dr. Frisk is an active saxophonist, composer, and pioneer in artistic research in music, developing interactive systems that explore human-machine improvisational dynamics."
      },
      {
        id: 649,
        name: "Dr. Bill Brunson",
        title: "Emeritus Professor of Electroacoustic Music",
        subject: "arts-design",
        topics: ["Multichannel Sound Diffusion", "Electronic Composition", "Studio Technology", "Sonic Arts History"],
        source: "https://www.kmh.se/in-english/research/contact-research/",
        recruiting: "Not verified",
        summary: "Dr. Brunson played a defining role in establishing KMH's internationally renowned electroacoustic music studios, authoring major spatial music works for multichannel sound domes."
      },
      {
        id: 650,
        name: "Dr. Cecilia Ferm Almqvist",
        title: "Professor of Music Education & Didactics",
        subject: "social-sciences",
        topics: ["Music Pedagogy", "Philosophical Didactics", "Inclusion in Music Education", "Sociology of Music"],
        source: "https://www.kmh.se/in-english/research/contact-research/",
        recruiting: "Not verified",
        summary: "Dr. Ferm Almqvist publishes extensively on phenomenological music pedagogy, democratic music learning environments, and the sociological dimensions of music teaching."
      }
    ]
  },

  // 9. Netherlands: Saxion University of Applied Sciences (Row 1427)
  {
    institution: "Saxion University of Applied Sciences",
    shortName: "Saxion",
    slug: "saxion-university-of-applied-sciences",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Enschede & Deventer, Overijssel, Netherlands",
    sourceRow: 1427,
    website: "https://www.saxion.edu",
    headline: "Saxion University of Applied Sciences: Applied Nanotechnology, Robotics & NL Scholarships",
    description: "Explore Saxion University of Applied Sciences applied master's degrees, Nanotechnology research, Dutch Ministry NL Scholarships, and robotics in Enschede and Deventer.",
    heroEyebrow: "Overijssel, Netherlands · Enschede & Deventer · Leading High-Tech & Applied Nanotechnology Hub",
    overview: "Saxion University of Applied Sciences (Hogeschool Saxion) is one of the Netherlands' premier higher education institutions for applied engineering and technology. Located in the high-tech Twente innovation corridor adjacent to the University of Twente, Saxion is celebrated for Applied Nanotechnology, circular textiles, mechatronics, and IT.",
    admissions: {
      masters: "Bachelor of Science in Engineering, Physics, Chemistry, Computing, or related discipline from a recognized university with strong academic performance.",
      phd: "Direct doctoral degrees in the Netherlands are conferred via research university partnerships (e.g., University of Twente); Saxion Research Groups hire doctoral researchers for joint projects.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each subscore) or TOEFL iBT 90+.",
      proposal: "For master's entry: detailed motivation letter, CV, and technical portfolio; for research contracts: technical project proposal.",
      appFee: "€0 (applications submitted via Studielink and Saxion portal).",
      documents: "Bachelor's degree diploma, transcript of records, passport copy, CV, proof of English, and motivation statement."
    },
    tuitionText: "Tuition for EU/EEA students is the statutory Dutch fee of approximately €2,530 per year. For non-EU/EEA students, master's tuition ranges from €9,500 to €11,500 per year. Dutch Ministry NL Scholarships provide €5,000 awards to high-achieving non-EEA applicants.",
    opportunities: [
      {
        id: 1474,
        title: "Dutch Ministry NL Scholarship (formerly Holland Scholarship) at Saxion",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Scholarship",
        source: "https://www.saxion.edu/studying-at-saxion/finance/scholarships/holland-scholarship",
        funding: "€5,000 cash grant awarded in the first year of study",
        status: "Open for 2027 entry",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Non-EEA student deadline)",
        fee: "€0",
        tuition: "€9,800/year (offset by €5,000 scholarship)",
        requirements: {
          gpa: "Excellent bachelor's GPA (equivalent to Dutch 7.5+ or top 20% of class)",
          ielts: "IELTS 6.5 overall with 6.0 in all bands",
          gre: "Not required",
          papers: "Compelling motivation letter explaining high-tech engineering goals in Twente",
          references: "One academic and one professional recommendation"
        },
        desc: "Competitive scholarship financed by the Dutch Ministry of Education and Saxion for exceptional non-EEA students enrolling in English-taught master's degrees."
      },
      {
        id: 1475,
        title: "Master of Science in Applied Nanotechnology (High-Tech Materials & Lab-on-a-Chip)",
        subject: "chemistry",
        subjects: ["chemistry", "engineering", "physics"],
        type: "Master's",
        source: "https://www.saxion.edu/programmes/master/applied-nanotechnology",
        funding: "Saxion Living Technology Scholarships + MESA+ NanoLab internships",
        status: "Applications open via Studielink",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027 (International applicants)",
        fee: "€0",
        tuition: "€9,800/year for non-EU students; €2,530 for EU students",
        requirements: {
          gpa: "BSc in Chemistry, Chemical Engineering, Applied Physics, or Electrical Engineering",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "Not required",
          papers: "Demonstrated background in microfabrication, cleanroom techniques, or material chemistry",
          references: "Two academic referee contacts"
        },
        desc: "The only Applied Nanotechnology master's in the Netherlands, collaborating with MESA+ NanoLab on microfluidic lab-on-a-chip diagnostic devices, functional nanomaterials, and biosensors."
      },
      {
        id: 1476,
        title: "Collaborative Applied Doctoral Candidacy in Microfluidics with University of Twente",
        subject: "engineering",
        subjects: ["engineering", "chemistry", "biology"],
        type: "PhD",
        source: "https://www.saxion.edu/research/applied-nanotechnology",
        funding: "Fully paid Dutch university researcher contract (€2,770–€3,539/month under VSNU CAO) for 4 years",
        status: "Joint recruitment call",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "€0",
        tuition: "€0 (salaried employee status)",
        requirements: {
          gpa: "MSc in Nanotechnology, Bioengineering, or Applied Physics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Master's thesis on microfluidic chip design, point-of-care diagnostics, or nanofluidics",
          references: "Two academic supervisor endorsements"
        },
        desc: "Four-year salaried doctoral research project conducted between Saxion Applied Nanotechnology Research Group and University of Twente MESA+ Institute developing organ-on-chip platforms."
      },
      {
        id: 1477,
        title: "Mechatronics & Mobile Robotics Research Assistantship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Research",
        source: "https://www.saxion.edu/research/mechatronics",
        funding: "Applied research salary (€2,400–€2,900/month)",
        status: "Active project vacancy",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "€0",
        tuition: "Salaried research staff position",
        requirements: {
          gpa: "BSc or ongoing MSc in Mechatronics, Mechanical Engineering, or Computer Science",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Experience with ROS/ROS2, embedded microcontroller programming, or drone kinematics",
          references: "Project leader recommendation"
        },
        desc: "Applied development role working with Dutch industrial automation consortia on unmanned ground vehicles (UGVs) for precision agriculture and inspection drones."
      },
      {
        id: 1478,
        title: "ASML & Demcon High-Tech Systems Industrial Graduation Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Internship",
        source: "https://www.saxion.edu/studying-at-saxion/internships",
        funding: "Industry internship allowance (€650–€950/month)",
        status: "Annual master's graduation round",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "€0",
        tuition: "Curricular graduation project",
        requirements: {
          gpa: "Passed first-year coursework in Saxion engineering master's program",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Graduation project proposal approved by Saxion examination board",
          references: "Academic mentor confirmation"
        },
        desc: "Six-month master's graduation internship based at high-tech multinationals in Twente/Eindhoven researching sub-nanometer positioning systems or laser optics."
      },
      {
        id: 1479,
        title: "Sustainable & Functional Textiles Applied Postdoctoral Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "environment", "engineering"],
        type: "Fellowship",
        source: "https://www.saxion.edu/research/sustainable-and-functional-textiles",
        funding: "Salaried appointment (€3,800–€4,500/month under Dutch CAO-HBO)",
        status: "Open project competition",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€0",
        tuition: "Salaried role",
        requirements: {
          gpa: "PhD in Polymer Chemistry, Textile Engineering, or Materials Science",
          ielts: "C1 English proficiency",
          gre: "Not required",
          papers: "Peer-reviewed publications on circular fiber recycling (SaXcell), bio-based dyes, or conductive yarn",
          references: "Three academic referee contacts"
        },
        desc: "Two-year applied research fellowship leading collaborative industrial projects on chemical cellulose recycling (SaXcell process), smart textiles, and zero-waste yarn spinning."
      },
      {
        id: 1480,
        title: "Master of Science in Robotics Systems Engineering",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        source: "https://www.saxion.edu/programmes/master/robotics-systems-engineering",
        funding: "Saxion Talent Scholarship and regional high-tech vouchers available",
        status: "Applications open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "€0",
        tuition: "€9,800/year (non-EEA); €2,530/year (EEA)",
        requirements: {
          gpa: "BSc in Electrical, Mechanical, Mechatronics, or Software Engineering",
          ielts: "IELTS 6.5 (minimum 6.0 in all bands)",
          gre: "Not required",
          papers: "Statement of purpose detailing interest in collaborative robotics and digital twins",
          references: "Two academic referee letters"
        },
        desc: "Advanced applied master's examining collaborative robots (cobots), computer vision for quality control, industrial IoT communication, and autonomous mobile manipulators."
      }
    ],
    researchers: [
      {
        id: 651,
        name: "Dr. Martin Bennink",
        title: "Professor of Applied Nanotechnology & Head of Research Group",
        subject: "chemistry",
        topics: ["Lab-on-a-Chip", "Nanofluidics", "Biosensors", "Microfabrication"],
        source: "https://www.saxion.edu/research/researchers/martin-bennink",
        recruiting: "Not verified",
        summary: "Dr. Bennink leads the Applied Nanotechnology group, developing microfluidic devices and impedance biosensors for rapid point-of-care medical and food pathogen testing."
      },
      {
        id: 652,
        name: "Dr. Jan Mahy",
        title: "Professor of Sustainable & Functional Textiles",
        subject: "chemistry",
        topics: ["Textile Recycling", "SaXcell Process", "Circular Cellulose", "Bio-Based Fibers"],
        source: "https://www.saxion.edu/research/researchers/jan-mahy",
        recruiting: "Not verified",
        summary: "Dr. Mahy co-developed the SaXcell chemical recycling technology that converts post-consumer cotton waste into high-quality virgin-grade textile fibers."
      },
      {
        id: 653,
        name: "Dr. Dirk Bekke",
        title: "Professor of Mechatronics & Autonomous Systems",
        subject: "engineering",
        topics: ["Agricultural Robotics", "Unmanned Aerial Systems", "Sensor Fusion", "Industrial Automation"],
        source: "https://www.saxion.edu/research/researchers/dirk-bekke",
        recruiting: "Not verified",
        summary: "Dr. Bekke directs applied robotics research, focusing on autonomous field robots for precision weeding, automated drone inspections, and smart mechatronic drives."
      }
    ]
  },

  // 10. Switzerland: Business School Lausanne (BSL) (Row 1334)
  {
    institution: "Business School Lausanne",
    shortName: "BSL",
    slug: "business-school-lausanne",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Chavannes-près-Renens, Lausanne, Vaud, Switzerland",
    sourceRow: 1334,
    website: "https://bsl-lausanne.ch",
    headline: "Business School Lausanne: Sustainable Business, DBA & International Scholarships",
    description: "Discover Business School Lausanne graduate admissions, Doctor of Business Administration (DBA), sustainable finance master's degrees, and executive research in Switzerland.",
    heroEyebrow: "Lausanne, Vaud, Switzerland · ACBSP-Accredited Business School · Sustainability Pioneer",
    overview: "Business School Lausanne (BSL) is an internationally accredited Swiss business school located on the shores of Lake Geneva near EPFL and UNIL in Lausanne. A founding member of the World Business Council for Sustainable Development (WBCSD) academic partners, BSL is celebrated for pioneering sustainable business, circular economics, and executive doctoral research.",
    admissions: {
      masters: "Bachelor's degree in business, economics, social sciences, or related discipline from a recognized institution with sound academic performance.",
      phd: "Doctor of Business Administration (DBA) requires an MBA or relevant master's degree plus at least 5 years of significant managerial or professional experience.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 90+; Cambridge C1 Advanced.",
      proposal: "For DBA applicants: 3–5 page research concept note outlining real-world managerial problem, sustainability implications, and proposed empirical methodology.",
      appFee: "150 CHF administrative application fee.",
      documents: "Bachelor's/Master's diplomas, certified transcripts, CV, two professional/academic letters of reference, and personal statement."
    },
    tuitionText: "Tuition for master's programs at BSL is approximately 36,000 to 42,000 CHF for the full program. Doctor of Business Administration (DBA) tuition is approximately 45,000 CHF over 3 years. BSL Sustainability Excellence Scholarships provide fee reductions of up to 30% for high-achieving international candidates.",
    opportunities: [
      {
        id: 1481,
        title: "BSL Sustainability Leadership & Social Impact Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Scholarship",
        source: "https://bsl-lausanne.ch/admissions/scholarships/",
        funding: "Up to 30% tuition fee reduction awarded on academic and leadership merit",
        status: "Open for 2026/2027 entry",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Spring 2027 intake)",
        fee: "150 CHF",
        tuition: "38,000 CHF total (before scholarship discount)",
        requirements: {
          gpa: "Bachelor's degree with minimum 3.2/4.0 GPA or European equivalent",
          ielts: "6.5 overall (minimum 6.0 across all components)",
          gre: "Not required (GMAT optional)",
          papers: "Essay on circular economy innovation or sustainable enterprise transition",
          references: "Two letters of recommendation (academic or professional)"
        },
        desc: "Merit-based scholarship supporting international master's and MBA candidates demonstrating exceptional commitment to the UN Sustainable Development Goals (SDGs)."
      },
      {
        id: 1482,
        title: "Doctor of Business Administration (DBA) in Sustainable Business & Governance",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "PhD",
        source: "https://bsl-lausanne.ch/programs/doctorate/doctor-of-business-administration-dba/",
        funding: "Corporate co-sponsorship and BSL executive research grants available",
        status: "Open for 2027 cohort",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "150 CHF",
        tuition: "45,000 CHF total over 3-year executive research program",
        requirements: {
          gpa: "Master's degree or MBA + minimum 5 years of significant management experience",
          ielts: "Fluent English (C1 level / IELTS 7.0+)",
          gre: "Not required",
          papers: "5-page research concept note addressing sustainable corporate transformation or ESG metrics",
          references: "Two professional executive recommendations"
        },
        desc: "Executive doctoral program for senior managers and consultants producing action-oriented research on regenerative business models, stakeholder governance, and corporate sustainability."
      },
      {
        id: 1483,
        title: "Master of Science (M.Sc.) in Sustainable Finance & Impact Investing",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Master's",
        source: "https://bsl-lausanne.ch/programs/master/msc-in-finance/",
        funding: "BSL Merit Award (up to 10,000 CHF tuition reduction)",
        status: "Applications open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "150 CHF",
        tuition: "36,000 CHF for entire 1.5-year degree",
        requirements: {
          gpa: "Bachelor's degree in Economics, Finance, Mathematics, or Business",
          ielts: "6.5 overall (minimum 6.0 in each sub-score)",
          gre: "Not required",
          papers: "Personal statement detailing interest in green bonds, ESG valuation, or carbon markets",
          references: "Two academic or employer recommendations"
        },
        desc: "Specialized postgraduate program taught in English in Switzerland's financial corridor covering green bond structuring, ESG portfolio analytics, impact measurement, and carbon accounting."
      },
      {
        id: 1484,
        title: "Institute for Business Sustainability (IBS) Applied Research Assistantship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Research",
        source: "https://bsl-lausanne.ch/faculty-research/research/",
        funding: "Applied research stipend (approx. 32,000 CHF/year)",
        status: "Active research appointment",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "0 CHF",
        tuition: "Tuition discount applied",
        requirements: {
          gpa: "Master's or ongoing doctoral student in Sustainable Business, Economics, or Public Policy",
          ielts: "English C1 level",
          gre: "Not required",
          papers: "Experience in qualitative corporate case studies, Delphi methods, or sustainability reporting",
          references: "Academic research director endorsement"
        },
        desc: "Applied research post investigating corporate circular economy adoption, true-cost accounting, and supply chain decarbonization alongside Swiss multinationals."
      },
      {
        id: 1485,
        title: "World Business Council for Sustainable Development (WBCSD) Practicum",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Internship",
        source: "https://bsl-lausanne.ch/careers-networking/",
        funding: "Paid corporate sustainability internship (2,800–3,500 CHF/month)",
        status: "Open for postgraduate business students",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "0 CHF",
        tuition: "Included in master's curriculum",
        requirements: {
          gpa: "Enrolled in BSL master's program in good academic standing",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Updated CV and portfolio of corporate sustainability audits",
          references: "BSL career development office approval"
        },
        desc: "Six-month practicum based in Geneva or Lausanne collaborating with international sustainability initiatives on corporate net-zero pledges and circular packaging roadmaps."
      },
      {
        id: 1486,
        title: "Postdoctoral Fellowship in Regenerative Economics & Stakeholder Capitalism",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Fellowship",
        source: "https://bsl-lausanne.ch/faculty-research/",
        funding: "Salaried postdoctoral appointment (75,000–85,000 CHF/year)",
        status: "Open international competition",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "0 CHF",
        tuition: "0 CHF (salaried academic researcher)",
        requirements: {
          gpa: "PhD in Business Administration, Economics, or Organization Studies",
          ielts: "Academic English fluency",
          gre: "Not applicable",
          papers: "Demonstrated peer-reviewed publications on corporate sustainability or alternative economic models",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral appointment examining business models that restore natural capital, doughnut economics application in cities, and multi-capital accounting."
      },
      {
        id: 1487,
        title: "Master of International Business in Digital Transformation & Smart Enterprises",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Master's",
        source: "https://bsl-lausanne.ch/programs/master/msc-in-international-business/",
        funding: "BSL Excellence Scholarship available",
        status: "Admissions open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "150 CHF",
        tuition: "38,000 CHF for entire degree",
        requirements: {
          gpa: "Bachelor's degree in any discipline with minimum 3.0/4.0 GPA",
          ielts: "6.5 overall (minimum 6.0 in all bands)",
          gre: "Not required",
          papers: "Statement of purpose explaining interest in enterprise digital transformation and AI strategy",
          references: "Two letters of recommendation"
        },
        desc: "Dynamic master's degree training future executives in platform business models, enterprise AI deployment, agile organizational design, and digital ethics."
      }
    ],
    researchers: [
      {
        id: 654,
        name: "Dr. Katrin Muff",
        title: "Professor of Practice in Sustainability & Thought Leader in Responsible Leadership",
        subject: "social-sciences",
        topics: ["Responsible Leadership", "Business Sustainability 3.0", "Positive Impact Space", "SDG Integration"],
        source: "https://bsl-lausanne.ch/faculty-research/faculty-directory/",
        recruiting: "Not verified",
        summary: "Dr. Muff is the former Dean of BSL and co-author of the Business Sustainability 3.0 typology, pioneering methodologies to align corporate strategy with global sustainability challenges."
      },
      {
        id: 655,
        name: "Dr. Thomas Dyllick",
        title: "Professor Emeritus of Sustainability Management & Senior Research Fellow",
        subject: "social-sciences",
        topics: ["Corporate Sustainability", "True Business Sustainability", "Stakeholder Value", "Sustainable Business Models"],
        source: "https://bsl-lausanne.ch/faculty-research/faculty-directory/",
        recruiting: "Not verified",
        summary: "Dr. Dyllick is an internationally cited authority on corporate environmental management and sustainability, co-founding foundational frameworks for authentic corporate social responsibility."
      },
      {
        id: 656,
        name: "Dr. Sascha Nick",
        title: "Professor of Circular Economy & Ecological Economics",
        subject: "environment",
        topics: ["Planetary Boundaries", "Circular Economy", "Sufficiency Business Models", "Urban Systems Transition"],
        source: "https://bsl-lausanne.ch/faculty-research/faculty-directory/",
        recruiting: "Not verified",
        summary: "Dr. Nick investigates societal transformation pathways within planetary boundaries, focusing on low-energy living, circular supply loops, and participatory democracy for climate action."
      }
    ]
  }
];
