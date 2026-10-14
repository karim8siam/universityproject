export const batch24Part1 = [
  // 1. Canada: Lakehead University (Row 43)
  {
    institution: "Lakehead University",
    shortName: "Lakehead",
    slug: "lakehead-university",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Thunder Bay & Orillia, Ontario, Canada",
    sourceRow: 43,
    website: "https://www.lakeheadu.ca",
    headline: "Lakehead University: Comprehensive Graduate Programs, Research & Scholarships",
    description: "Explore Lakehead University admissions, research assistantships, graduate funding, master's and doctoral degrees across Thunder Bay and Orillia campuses.",
    heroEyebrow: "Ontario, Canada · Thunder Bay & Orillia · Research University",
    overview: "Lakehead University is a comprehensive Canadian research institution recognized for its leadership in boreal ecology, environmental biotechnology, northern health, engineering, and Indigenous-focused scholarship across dynamic campuses in Thunder Bay and Orillia, Ontario.",
    admissions: {
      masters: "Four-year bachelor's degree from an accredited university with minimum 70% to 75% (B standing) over the final two years of study.",
      phd: "Recognized master's degree with high academic standing (minimum 75% or B+ average) and demonstrated research potential.",
      language: "IELTS 6.5 (minimum 6.0 in each band) or TOEFL iBT 80 (minimum 19 in each subscore); Duolingo 110 accepted for selected programs.",
      proposal: "Required for research thesis streams: 2–3 page research intent outlining prospective supervisor alignment and methodology.",
      appFee: "$125 CAD non-refundable institutional application fee via Lakehead Graduate Studies Portal.",
      documents: "Official academic transcripts, 2–3 confidential academic reference letters, curriculum vitae, and statement of intent."
    },
    tuitionText: "Graduate tuition at Lakehead University averages approximately $23,500 to $27,800 CAD per year for international master's and PhD candidates. Substantial graduate assistantships (GA) paying $10,800–$14,500 CAD plus research fellowships (GRA) offset costs for thesis-stream students.",
    opportunities: [
      {
        id: 1278,
        title: "Lakehead Graduate Assistantship (GA) & Research Award",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Scholarship",
        source: "https://www.lakeheadu.ca/admissions/graduate/funding",
        funding: "Up to $14,500 CAD stipend per academic year plus tuition offsets",
        status: "Open for 2026/2027 entry",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Priority Fall 2027 entry)",
        fee: "$125 CAD",
        tuition: "$24,200 CAD/year (standard international graduate rate)",
        requirements: {
          gpa: "Minimum 75% (B+) overall academic average",
          ielts: "6.5 overall (no individual band below 6.0)",
          gre: "Not required for Canadian graduate programs",
          papers: "Comprehensive academic CV and statement of research interests",
          references: "Two academic referee letters submitted online"
        },
        desc: "Merit-based graduate teaching and research assistantship funding awarded to incoming full-time thesis-based master's and doctoral students at Lakehead University."
      },
      {
        id: 1279,
        title: "Doctor of Philosophy (PhD) in Biotechnology & Environmental Systems",
        subject: "biology",
        subjects: ["biology", "environment", "chemistry"],
        type: "PhD",
        source: "https://www.lakeheadu.ca/programs/graduate/biotechnology",
        funding: "Guaranteed minimum funding package of $21,000 CAD/year for 4 years",
        status: "Open for 2027 admissions",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Fall 2027 cycle)",
        fee: "$125 CAD",
        tuition: "$23,600 CAD/year (offset by departmental bursaries)",
        requirements: {
          gpa: "MSc degree with minimum 78% (B+) academic average",
          ielts: "7.0 overall (minimum 6.5 in all bands)",
          gre: "Not required",
          papers: "Master's thesis abstract and 3-page proposed dissertation outline",
          references: "Three academic reference letters from graduate advisors"
        },
        desc: "Interdisciplinary doctoral program investigating bioremediation, forest biomass valorization, molecular genetics, and northern ecosystem resilience."
      },
      {
        id: 1280,
        title: "Master of Science (MSc) in Computer Science & Artificial Intelligence",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        source: "https://www.lakeheadu.ca/programs/graduate/computer-science",
        funding: "Departmental research assistantships and teaching fellowships available",
        status: "Applications open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027 (Fall 2027 priority deadline)",
        fee: "$125 CAD",
        tuition: "$25,100 CAD/year for international candidates",
        requirements: {
          gpa: "Four-year BSc in CS or related field with minimum 70% average",
          ielts: "6.5 overall (minimum 6.0 in each component)",
          gre: "Recommended for non-Canadian degrees (305+ combined)",
          papers: "Statement of purpose highlighting programming and algorithm proficiencies",
          references: "Two academic references from university instructors"
        },
        desc: "Advanced graduate curriculum featuring machine learning, high-performance computing, cybersecurity, and applied deep learning systems."
      },
      {
        id: 1281,
        title: "Biorefining Research Institute (BRI) Graduate Research Assistantship",
        subject: "chemistry",
        subjects: ["chemistry", "engineering", "environment"],
        type: "Research",
        source: "https://www.lakeheadu.ca/research-and-innovation/research-centres-institutes/bri",
        funding: "$22,000 CAD per annum funded through NSERC and industrial partners",
        status: "Active research vacancy",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Winter/Spring 2027 cohort)",
        fee: "$125 CAD",
        tuition: "$23,800 CAD/year",
        requirements: {
          gpa: "BSc or BEng with minimum 75% average in chemical sciences",
          ielts: "6.5 overall with 6.0 in writing and speaking",
          gre: "Not mandatory",
          papers: "Prior laboratory experience in chromatography or thermochemical processing",
          references: "Two professional laboratory supervisor references"
        },
        desc: "Funded laboratory research focusing on value-added biochemicals, lignin valorization, green pulping technologies, and sustainable bioplastics."
      },
      {
        id: 1282,
        title: "Centre for Advanced Studies in Engineering & Northern Infrastructure Practicum",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Internship",
        source: "https://www.lakeheadu.ca/programs/faculties/engineering",
        funding: "Paid industry co-op placement ($24–$32 CAD/hour)",
        status: "Available for enrolled graduate engineers",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Summer/Fall 2027 placement)",
        fee: "$0 (enrolled co-op course registration)",
        tuition: "Included in graduate co-op tuition schedule",
        requirements: {
          gpa: "Good standing in MEng or MSc Engineering program",
          ielts: "Program admission standards satisfied",
          gre: "Not required",
          papers: "Updated technical resume and cover letter",
          references: "Academic faculty endorsement"
        },
        desc: "Industry-embedded internship with northern infrastructure consultancies and mining consortia solving cold-climate geotechnics and structural resilience."
      },
      {
        id: 1283,
        title: "Northern Policy Institute Postdoctoral Research Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        type: "Fellowship",
        source: "https://www.lakeheadu.ca/research-and-innovation/research-chairs",
        funding: "$55,000 CAD annual salary plus research allowance",
        status: "Open competition",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "$0 (fellowship application)",
        tuition: "None (postdoctoral salaried role)",
        requirements: {
          gpa: "Completed PhD in Public Policy, Economics, Geography, or Sociology",
          ielts: "Native or advanced fluent English proficiency",
          gre: "Not applicable",
          papers: "Three sample peer-reviewed publications and 4-page research proposal",
          references: "Three academic reference letters including doctoral supervisor"
        },
        desc: "Two-year postdoctoral appointment analyzing regional economic diversification, remote healthcare access, and indigenous community resource co-management."
      },
      {
        id: 1284,
        title: "Master of Environmental Studies (MES) in Northern Environments & Resource Policy",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        type: "Master's",
        source: "https://www.lakeheadu.ca/programs/graduate/environmental-studies",
        funding: "Lakehead Research Graduate Scholarships ($5,000–$10,000 CAD)",
        status: "Open for admissions",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$125 CAD",
        tuition: "$23,900 CAD/year for international students",
        requirements: {
          gpa: "Bachelor's degree with minimum 73% in environmental studies or related field",
          ielts: "6.5 overall (no band less than 6.0)",
          gre: "Not required",
          papers: "Statement of interest in boreal ecology or environmental governance",
          references: "Two academic letters of recommendation"
        },
        desc: "Interdisciplinary master's curriculum combining environmental impact assessment, geographic information systems, and climate adaptation strategies."
      }
    ],
    researchers: [
      {
        id: 567,
        name: "Dr. Sudip Rakshit",
        title: "Canada Research Chair in Bio-refining & Professor of Chemical Engineering",
        subject: "engineering",
        topics: ["Bioenergy & Biofuels", "Bioprocess Engineering", "Enzymatic Conversions", "Lignocellulosic Biomass"],
        source: "https://www.lakeheadu.ca/users/R/srakshit",
        summary: "Dr. Rakshit directs the Biorefining Research Institute, pioneering enzyme engineering and chemical reaction routes to convert industrial forestry residues into sustainable biomaterials."
      },
      {
        id: 568,
        name: "Dr. Zubair Fadlullah",
        title: "Associate Professor & Research Chair in Computer Science",
        subject: "computer-science",
        topics: ["Edge Computing", "AI Security", "Smart Grid Networks", "Internet of Medical Things"],
        source: "https://www.lakeheadu.ca/users/F/zfadlull",
        summary: "Dr. Fadlullah leads research in machine learning algorithms for next-generation wireless systems, low-latency mobile edge networks, and resilient cyber-physical systems."
      },
      {
        id: 569,
        name: "Dr. Brian McLaren",
        title: "Professor of Forest Ecology & Wildlife Conservation",
        subject: "environment",
        topics: ["Boreal Forest Dynamics", "Ungulate Ecology", "Landscape Genetics", "Conservation Management"],
        source: "https://www.lakeheadu.ca/users/M/bmclaren",
        summary: "Dr. McLaren investigates boreal predator-prey dynamics, forest ecosystem restoration, and the ecological impacts of climate warming on North American forest biomes."
      }
    ]
  },

  // 2. Australia: University of Canberra (Row 195)
  {
    institution: "University of Canberra",
    shortName: "UC Canberra",
    slug: "university-of-canberra",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Canberra, Australian Capital Territory, Australia",
    sourceRow: 195,
    website: "https://www.canberra.edu.au",
    headline: "University of Canberra: Higher Degree Research, Degrees & International Awards",
    description: "Explore University of Canberra admissions, RTP doctoral stipends, international student scholarships, master's programs, and faculty research.",
    heroEyebrow: "Canberra, ACT · Capital Research University · Work-Integrated Learning",
    overview: "The University of Canberra is a dynamic public institution in the nation's capital known for applied research, deep public policy connections, cybersecurity, applied ecology, sports science, and high graduate employability.",
    admissions: {
      masters: "Recognized Australian bachelor's degree or overseas equivalent with a minimum credit average (65%+) or equivalent GPA.",
      phd: "Bachelor's degree with first-class or upper second-class honours (H1 or H2A), or a research master's with demonstrated thesis track record.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 across all bands) or PTE Academic 58+; TOEFL iBT 79+.",
      proposal: "Required for HDR (MPhil/PhD): 1,500–2,500 word research proposal aligned with a confirmed UC supervisory team.",
      appFee: "Free directly through the UC International Application Portal.",
      documents: "Certified transcripts and degree certificates, referee reports, CV, and verified English proficiency test results."
    },
    tuitionText: "International graduate tuition ranges from $32,000 to $41,500 AUD per year depending on the discipline. Research Training Program (RTP) scholarships provide full tuition fee offsets and annual living stipends of $33,500 AUD for high-achieving HDR candidates.",
    opportunities: [
      {
        id: 1285,
        title: "Australian Government Research Training Program (RTP) International Stipend",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Scholarship",
        source: "https://www.canberra.edu.au/research/future-research-students/scholarships-and-fees",
        funding: "Full tuition waiver plus $33,500 AUD/year tax-free stipend and health cover (OSHC)",
        status: "Open for 2027 intake",
        deadline: "2026-10-31",
        deadlineText: "October 31, 2026 (Annual International HDR round)",
        fee: "$0 (direct application)",
        tuition: "100% covered by Australian Government RTP offset",
        requirements: {
          gpa: "First-class honours (H1) or research master's degree with equivalent distinction",
          ielts: "6.5 overall (no score under 6.0)",
          gre: "Not required",
          papers: "Substantial research proposal and demonstrated publication or thesis output",
          references: "Two academic referee reports confirming research aptitude"
        },
        desc: "Prestigious federal research scholarship providing comprehensive funding for domestic and international PhD candidates pursuing world-leading research at UC."
      },
      {
        id: 1286,
        title: "Doctor of Philosophy (PhD) in Applied Ecology & Environmental Water Governance",
        subject: "environment",
        subjects: ["environment", "biology"],
        type: "PhD",
        source: "https://www.canberra.edu.au/research/institutes/iae",
        funding: "Institute for Applied Ecology (IAE) PhD scholarship ($34,000 AUD/year)",
        status: "Open for expressions of interest",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (Mid-year intake)",
        fee: "$0",
        tuition: "Full RTP fee waiver for successful scholarship recipients",
        requirements: {
          gpa: "Honours degree Class 1 or Master of Science by research",
          ielts: "6.5 overall (minimum 6.0 in reading, writing, listening, speaking)",
          gre: "Not required",
          papers: "Detailed 2,000-word proposal addressing freshwater biodiversity or river hydrology",
          references: "Two academic supervisor endorsements"
        },
        desc: "Cutting-edge doctoral research hosted at the Institute for Applied Ecology analyzing Murray-Darling freshwater systems, ecological genomics, and invasive species management."
      },
      {
        id: 1287,
        title: "Master of Science (MSc) in Cyber Security & Forensic Computing",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Master's",
        source: "https://www.canberra.edu.au/courses/search/master-of-cyber-security",
        funding: "UC International Merit Scholarship (10%–20% fee reduction)",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Semester 1, 2027 commencement)",
        fee: "$0",
        tuition: "$37,200 AUD/year",
        requirements: {
          gpa: "Bachelor's degree in computing, IT, or mathematics with credit average (65%+)",
          ielts: "6.5 overall with 6.0 minimum subscores",
          gre: "Not required",
          papers: "Statement of purpose outlining cyber defense interests",
          references: "Academic reference or professional supervisor recommendation"
        },
        desc: "Specialized postgraduate program covering cloud security, penetration testing, threat intelligence, and digital evidence analysis in collaboration with national agencies."
      },
      {
        id: 1288,
        title: "Centre for Deliberative Democracy & Global Governance Research Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Research",
        source: "https://www.canberra.edu.au/research/institutes/igpa/deliberative-democracy",
        funding: "Funded project appointment ($88,000–$96,000 AUD Level A/B salary)",
        status: "Open research grant appointment",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        fee: "$0",
        tuition: "Not applicable (academic staff appointment)",
        requirements: {
          gpa: "Doctorate in Political Science, Sociology, or International Relations",
          ielts: "Native or fluent English proficiency",
          gre: "Not required",
          papers: "Demonstrated peer-reviewed publications on democratic deliberation or citizen assemblies",
          references: "Three academic referee contacts"
        },
        desc: "Research fellowship investigating participatory democratic processes, global citizen assemblies, and algorithmic governance at the internationally recognized centre."
      },
      {
        id: 1289,
        title: "Canberra Health Services & UC Sports Medicine Clinical Practicum",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Internship",
        source: "https://www.canberra.edu.au/about-uc/faculties/health",
        funding: "Clinical supervisory placement with transport and equipment stipend",
        status: "Enrolment open for graduate health candidates",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "$0 (course-embedded unit)",
        tuition: "Covered by semester tuition",
        requirements: {
          gpa: "Completion of year 1 of Master of Physiotherapy or High Performance Sport",
          ielts: "7.0 overall (minimum 7.0 in all sub-bands)",
          gre: "Not required",
          papers: "National Police Check and ACT Working With Vulnerable People registration",
          references: "Clinical skills supervisor endorsement"
        },
        desc: "Clinical immersion training in musculoskeletal rehabilitation, sports biomechanics, and athlete load monitoring in partnership with the Australian Institute of Sport."
      },
      {
        id: 1290,
        title: "Vice-Chancellor's Postdoctoral Research Fellowship",
        subject: "engineering",
        subjects: ["engineering", "computer-science", "environment"],
        type: "Fellowship",
        source: "https://www.canberra.edu.au/research/research-strengths",
        funding: "$98,500 AUD annual salary plus $15,000 AUD annual research project grant",
        status: "Annual selective fellowship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "$0",
        tuition: "Full salary appointment",
        requirements: {
          gpa: "PhD awarded within the past 5 years",
          ielts: "Academic English proficiency",
          gre: "Not required",
          papers: "Strategic 5-page research program aligned with UC research themes",
          references: "Three international confidential letters of reference"
        },
        desc: "Three-year early-career research fellowship designed to foster research leaders in sustainable systems, public health innovation, and intelligent data systems."
      },
      {
        id: 1291,
        title: "Master of Public Policy (MPP) in Governance & Digital Transformation",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Master's",
        source: "https://www.canberra.edu.au/courses/search/master-of-public-policy",
        funding: "UC International High Achiever Award (20% fee waiver)",
        status: "Applications open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Semester 1)",
        fee: "$0",
        tuition: "$35,800 AUD/year",
        requirements: {
          gpa: "Bachelor's degree in any discipline with minimum 60% average",
          ielts: "6.5 overall (minimum 6.0 in each skill)",
          gre: "Not required",
          papers: "500-word statement explaining interest in Australian and global public policy",
          references: "One academic and one employer reference"
        },
        desc: "Practitioner-oriented degree leveraging Canberra's parliamentary and policy institutions to master regulatory design, digital government, and policy evaluation."
      }
    ],
    researchers: [
      {
        id: 570,
        name: "Dr. Ross Thompson",
        title: "Professor of Ecology & Director of the Institute for Applied Ecology",
        subject: "environment",
        topics: ["Freshwater Ecology", "River Restoration", "Food Web Dynamics", "Catchment Management"],
        source: "https://researchprofiles.canberra.edu.au/en/persons/ross-thompson",
        summary: "Dr. Thompson is an internationally cited freshwater ecologist examining food web structure, biodiversity conservation, and the ecological impacts of climate extremes across Australasian river networks."
      },
      {
        id: 571,
        name: "Dr. John Dryzek",
        title: "Centenary Professor of Deliberative Democracy & Global Governance",
        subject: "social-sciences",
        topics: ["Deliberative Democracy", "Environmental Politics", "Global Governance", "Citizen Assemblies"],
        source: "https://researchprofiles.canberra.edu.au/en/persons/john-dryzek",
        summary: "Dr. Dryzek is an ARC Australian Laureate Fellow and pioneer in democratic theory, authoring foundational frameworks on deliberative institutions and ecological democracy."
      },
      {
        id: 572,
        name: "Dr. Michael Platow",
        title: "Professor of Social Psychology & Human Factors",
        subject: "social-sciences",
        topics: ["Social Identity Theory", "Leadership Dynamics", "Justice & Trust", "Group Decision Making"],
        source: "https://researchprofiles.canberra.edu.au/en/persons/michael-platow",
        summary: "Dr. Platow conducts experimental research on social identity processes, leadership credibility, and prejudice reduction in institutional environments."
      }
    ]
  },

  // 3. Germany: University of Münster (Row 414)
  {
    institution: "University of Münster",
    shortName: "Uni Münster",
    slug: "university-of-muenster",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Münster, North Rhine-Westphalia, Germany",
    sourceRow: 414,
    website: "https://www.uni-muenster.de",
    headline: "University of Münster: Excellence Clusters, Doctoral Fellowships & Master's",
    description: "Discover University of Münster academic programs, MEET Battery Research Center doctorates, tuition-free education, and research fellowships in North Rhine-Westphalia.",
    heroEyebrow: "North Rhine-Westphalia · Top German Research University · Excellence Clusters",
    overview: "The University of Münster (Universität Münster) is one of Germany's largest and most prestigious research universities, renowned for its Clusters of Excellence in Mathematics and Multiscale Imaging, world-class battery research at MEET, nanosciences, and humanities.",
    admissions: {
      masters: "Relevant bachelor's degree (180 ECTS) with above-average grades (German grade 2.5 or better, or international equivalent).",
      phd: "Master's degree or equivalent (Staatsexamen, Diplom) with at least 'good' (gut) academic distinction and formal supervisor acceptance.",
      language: "English-taught programs require CEFR B2/C1 (TOEFL iBT 90+ or IELTS 6.5+); German-taught programs require DSH-2 or TestDaF 4x4.",
      proposal: "For doctoral admissions: detailed 5–10 page research exposé with timeline and formal supervisory agreement (Promotionsvereinbarung).",
      appFee: "€0 (no application fee for direct university portal submission).",
      documents: "Certified degree diplomas, diploma supplement with transcript of records, CV in Europass format, and letter of motivation."
    },
    tuitionText: "Tuition is 100% free for all domestic and international students at the University of Münster. Students only pay a semester social contribution (Semesterbeitrag) of approximately €330 per semester, which includes a regional public transport ticket throughout North Rhine-Westphalia.",
    opportunities: [
      {
        id: 1292,
        title: "MEET Battery Research Center Doctoral Fellowship (TV-L E13)",
        subject: "chemistry",
        subjects: ["chemistry", "engineering", "physics"],
        type: "PhD",
        source: "https://www.uni-muenster.de/MEET/en/career/index.html",
        funding: "100% salaried research position (€50,000–€56,000 gross/year under TV-L E13)",
        status: "Open for 2026/2027 candidates",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026",
        fee: "€0",
        tuition: "€0 (tuition-free German higher education)",
        requirements: {
          gpa: "Master of Science in Chemistry, Materials Science, or Chemical Engineering with high distinction",
          ielts: "IELTS 6.5 or TOEFL 90+ (or proven English coursework)",
          gre: "Not required",
          papers: "Master's thesis on electrochemical storage or solid-state ionics",
          references: "Two academic referee letters"
        },
        desc: "Fully funded 3-year doctoral appointment at MEET investigating next-generation solid-state lithium metal batteries, electrolyte stability, and sustainable recycling."
      },
      {
        id: 1293,
        title: "Mathematics Münster Graduate School (MMGS) PhD Fellowship",
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        type: "Scholarship",
        source: "https://www.uni-muenster.de/MathematicsMuenster/careers/mmgs.shtml",
        funding: "€1,600/month tax-free scholarship plus research travel and conference budget",
        status: "Annual international call",
        deadline: "2026-11-01",
        deadlineText: "November 1, 2026",
        fee: "€0",
        tuition: "€0 (no tuition fees)",
        requirements: {
          gpa: "MSc in Mathematics with outstanding marks (German 1.0–1.5 equivalent)",
          ielts: "C1 level English proficiency",
          gre: "Mathematics subject test welcome but optional",
          papers: "Master's thesis summary and research interests in pure or applied mathematics",
          references: "Two detailed academic recommendation letters"
        },
        desc: "Doctoral funding from the Cluster of Excellence 'Mathematics Münster: Dynamics - Geometry - Structure' supporting brilliant young mathematicians."
      },
      {
        id: 1294,
        title: "Master of Science (M.Sc.) in Geoinformatics & Spatial Data Science",
        subject: "computer-science",
        subjects: ["computer-science", "environment"],
        type: "Master's",
        source: "https://www.uni-muenster.de/Geoinformatics/en/studies/msc/index.html",
        funding: "Tuition-free study; DAAD and Deutschlandstipendium grants available (€300/month)",
        status: "Open for Winter 2027",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (International applicants)",
        fee: "€0",
        tuition: "€0 (semester contribution of ~€330 applies)",
        requirements: {
          gpa: "BSc in Geoinformatics, Computer Science, or Geography with at least 60 ECTS in computing/geodata",
          ielts: "IELTS 6.5 or TOEFL iBT 88+",
          gre: "Not required",
          papers: "Portfolio of programming projects or GIS data science assignments",
          references: "Academic transcript and letter of motivation"
        },
        desc: "English-taught graduate curriculum exploring machine learning for earth observation, spatial sensor networks, open geodata standards, and autonomous navigation."
      },
      {
        id: 1295,
        title: "Cells in Motion Interfaculty Centre (CiM) Molecular Imaging Assistantship",
        subject: "biology",
        subjects: ["biology", "chemistry", "physics"],
        type: "Research",
        source: "https://www.uni-muenster.de/Cells-in-Motion/",
        funding: "TV-L E13 (65% research contract, ~€32,500 gross/year)",
        status: "Active research vacancy",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "€0",
        tuition: "€0",
        requirements: {
          gpa: "Master's degree in Molecular Biology, Biophysics, or Biochemistry",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Hands-on experience with confocal microscopy, super-resolution or live-cell imaging",
          references: "Two academic referee contacts"
        },
        desc: "Graduate research project examining cellular dynamics, vascular morphogenesis, and leukocyte extravasation using high-end intravital microscopy."
      },
      {
        id: 1296,
        title: "Fraunhofer Research Institution for Battery Cell Production (FFB) Industrial Practicum",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Internship",
        source: "https://www.ffb.fraunhofer.de/en.html",
        funding: "Paid scientific student assistant stipend (€1,200–€1,600/month)",
        status: "Continuous intake for enrolled students",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027 (Summer 2027 cohort)",
        fee: "€0",
        tuition: "Covered by student registration",
        requirements: {
          gpa: "Enrolled in MSc Physics, Chemistry, Materials Science, or Mechanical Engineering",
          ielts: "Professional working proficiency in English or German",
          gre: "Not required",
          papers: "Curriculum vitae and academic transcript",
          references: "Academic course advisor confirmation"
        },
        desc: "Hands-on engineering practicum at the Fraunhofer FFB pilot plant in Münster mastering automated electrode slurry coating, cell assembly, and quality verification."
      },
      {
        id: 1297,
        title: "Cluster of Excellence Religion & Politics Postdoctoral Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Fellowship",
        source: "https://www.uni-muenster.de/Religion-und-Politik/en/",
        funding: "Full 100% TV-L E13 postdoctoral salary (€58,000–€64,000 gross/year) for 2 years",
        status: "Open international competition",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "€0",
        tuition: "€0 (salaried academic appointment)",
        requirements: {
          gpa: "Completed PhD in History, Political Science, Philosophy, or Religious Studies",
          ielts: "Advanced academic English or German proficiency",
          gre: "Not applicable",
          papers: "Doctoral monograph summary, sample publication, and 5-page research project plan",
          references: "Three academic letters of recommendation"
        },
        desc: "Prestigious fellowship at Germany's leading interdisciplinary cluster examining religious pluralism, conflict mediation, and political secularization across eras."
      },
      {
        id: 1298,
        title: "Master of Science (M.Sc.) in Physics with Specialization in Nanophysics & Photonics",
        subject: "physics",
        subjects: ["physics", "engineering"],
        type: "Master's",
        source: "https://www.uni-muenster.de/Physik/en/studium/msc/index.html",
        funding: "Tuition-free program; research institute student contracts available",
        status: "Admissions open",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Winter semester)",
        fee: "€0",
        tuition: "€0 (standard €330 semester fee)",
        requirements: {
          gpa: "Bachelor of Science in Physics with grade equivalent to German 2.5 or better",
          ielts: "TOEFL iBT 80+ or IELTS 6.0+",
          gre: "Recommended for non-EU applicants",
          papers: "Transcript of records showing solid foundation in quantum mechanics and electrodynamics",
          references: "Letter of motivation and CV"
        },
        desc: "Comprehensive master's program taught in English with direct laboratory access to the Center for Soft Nanoscience (SoN) and the Center for Nanotechnology (CeNTech)."
      }
    ],
    researchers: [
      {
        id: 573,
        name: "Dr. Martin Winter",
        title: "Professor of Materials Science & Scientific Director of MEET Battery Research Center",
        subject: "chemistry",
        topics: ["Lithium-Ion Batteries", "Solid-State Electrolytes", "Battery Recycling", "Electrochemical Energy Storage"],
        source: "https://www.uni-muenster.de/MEET/en/team/management.html",
        summary: "Dr. Winter is an internationally acclaimed pioneer in battery chemistry, holding numerous patents and leading Germany's national battery research consortiums."
      },
      {
        id: 574,
        name: "Dr. Christopher Deninger",
        title: "Professor of Mathematics & Co-Spokesperson of Cluster of Excellence Mathematics Münster",
        subject: "mathematics",
        topics: ["Arithmetic Geometry", "Dynamical Systems", "L-Functions", "Motivic Cohomology"],
        source: "https://www.uni-muenster.de/FB10/u/deninger/",
        summary: "Dr. Deninger is a Leibniz Prize laureate known for deep contributions linking arithmetic algebraic geometry, foliation theory, and analytical dynamical systems."
      },
      {
        id: 575,
        name: "Dr. Cornelia Denz",
        title: "Professor of Applied Physics & Nonlinear Photonics",
        subject: "physics",
        topics: ["Optical Tweezers", "Nonlinear Optics", "Holography", "Structured Light Fields"],
        source: "https://www.uni-muenster.de/Physik.AP/Denz/",
        summary: "Dr. Denz conducts foundational research on structured light, photonic crystals, and optical manipulation of biological micro-systems."
      }
    ]
  },

  // 4. Italy: University of Bergamo (Row 521)
  {
    institution: "University of Bergamo",
    shortName: "UniBg",
    slug: "university-of-bergamo",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Bergamo, Lombardy, Italy",
    sourceRow: 521,
    website: "https://en.unibg.it",
    headline: "University of Bergamo: Engineering, Economics & Diritto allo Studio Scholarships",
    description: "Explore University of Bergamo master's degrees, DSU regional study grants, PhD scholarships in engineering and economics, and international admissions in Lombardy.",
    heroEyebrow: "Lombardy, Italy · Public Research University · Industry 4.0 Hub",
    overview: "The University of Bergamo (Università degli Studi di Bergamo) is a progressive Italian state university located in Lombardy's industrial and cultural heartland, distinguished for engineering manufacturing excellence, international economics, digital humanities, and legal studies.",
    admissions: {
      masters: "Three-year undergraduate degree (Laurea) or international bachelor's degree evaluated through the Universitaly pre-enrolment portal.",
      phd: "Master's degree (Laurea Magistrale) with competitive evaluation of curriculum vitae, publications, and oral research presentation.",
      language: "B2 English level (IELTS 6.0+, TOEFL 72+, Cambridge FCE, or medium-of-instruction certificate); Italian required only for Italian-taught curricula.",
      proposal: "Required for doctoral applicants: 3,000–5,000 word research proposal written in English outlining research objectives and bibliography.",
      appFee: "€30 to €52 administrative pre-evaluation fee depending on call.",
      documents: "Universitaly application summary, degree certificate with Declaration of Value (DoV) or CIMEA Statement of Comparability, and transcript."
    },
    tuitionText: "Tuition is based on family financial evaluation (ISEE parificato), ranging from €156 to approximately €2,800 per year. Regional DSU scholarships (Diritto allo Studio Universitario) provide qualifying international students with full tuition waivers, free cafeteria meals, and annual cash stipends up to €7,000.",
    opportunities: [
      {
        id: 1299,
        title: "Lombardy Regional DSU Full Scholarship & Accommodation Grant",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        type: "Scholarship",
        source: "https://en.unibg.it/services/fees-and-funding/scholarships",
        funding: "Complete tuition waiver, free student housing, and cash stipend up to €7,000/year",
        status: "Annual competition",
        deadline: "2026-11-05",
        deadlineText: "November 5, 2026 (Annual DSU deadline)",
        fee: "€30 pre-evaluation",
        tuition: "100% waived for DSU beneficiaries (only €156 regional tax applies)",
        requirements: {
          gpa: "Minimum 70% undergraduate academic standing; family ISEE parificato < €25,000",
          ielts: "B2 English level (IELTS 6.0+ or equivalent)",
          gre: "Not required",
          papers: "Verified foreign income and property documentation translated into Italian",
          references: "Academic admission confirmation"
        },
        desc: "Needs-and-merit based regional scholarship open to all enrolled international students ensuring equal access to higher education in Lombardy."
      },
      {
        id: 1300,
        title: "Doctor of Philosophy (PhD) in Engineering & Applied Sciences (Full Ministerial Grant)",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "PhD",
        source: "https://en.unibg.it/research/phd-programmes",
        funding: "€16,243 net annual scholarship (exempt from personal income tax) for 3 years",
        status: "Open for 42nd cycle",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027 (Cycle XLII intake)",
        fee: "€30",
        tuition: "€0 (full tuition waiver for funded PhD positions)",
        requirements: {
          gpa: "Master of Science in Mechanical, Management, or Electrical Engineering",
          ielts: "B2 English proficiency verified via interview",
          gre: "Optional",
          papers: "Detailed 5-page research project on smart manufacturing, robotics, or digital twins",
          references: "Two letters of presentation from university professors"
        },
        desc: "Doctoral research program closely linked with Lombardy's advanced manufacturing corridor, covering mechatronics, logistics optimization, and sustainable materials."
      },
      {
        id: 1301,
        title: "Master of Science (M.Sc.) in Management Engineering & Smart Industry",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        source: "https://en.unibg.it/ugov/degree-programmes/7027",
        funding: "DSU merit stipends and university fee discount tiers",
        status: "Applications open via Universitaly",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027 (Non-EU student intake)",
        fee: "€30",
        tuition: "€156–€2,600/year adjusted by family income",
        requirements: {
          gpa: "Bachelor's degree in Industrial Engineering, Business Engineering, or Computer Science",
          ielts: "IELTS 6.0+ or TOEFL 75+",
          gre: "Not required",
          papers: "Curriculum vitae detailing engineering coursework and industrial motivation",
          references: "One academic letter of reference"
        },
        desc: "Two-year international master's taught in English exploring supply chain digitalization, predictive maintenance, energy management, and Industry 4.0 paradigms."
      },
      {
        id: 1302,
        title: "Kilometro Rosso Innovation District Research Internship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Internship",
        source: "https://www.kilometrorosso.com/en/",
        funding: "Paid corporate research stipend (€800–€1,200/month)",
        status: "Applications open each semester",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€0",
        tuition: "Covered under curricular internship credit program",
        requirements: {
          gpa: "Enrolled in MSc Computer Science or Engineering at UniBg",
          ielts: "B2 English",
          gre: "Not required",
          papers: "Portfolio demonstrating Python, IoT systems, or embedded software skills",
          references: "Academic tutor approval"
        },
        desc: "Curricular research internship hosted inside the Kilometro Rosso science park collaborating with Brembo, ABB, and industrial AI labs on cyber-physical automation."
      },
      {
        id: 1303,
        title: "Department of Economics Applied Econometrics & Big Data Assistantship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        type: "Research",
        source: "https://en.unibg.it/research/departments/department-economics",
        funding: "Annual research grant (Assegno di Ricerca) of €20,000–€24,000 gross",
        status: "Active grant call",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "€0",
        tuition: "€0 (salaried academic research grant)",
        requirements: {
          gpa: "Master's degree in Economics, Statistics, or Data Science",
          ielts: "Fluent English communication skills",
          gre: "Not required",
          papers: "Working papers or thesis chapter using R, Stata, or Python econometrics",
          references: "Two academic referee contacts"
        },
        desc: "Twelve-month research position focusing on empirical microeconometrics, labor market dynamics in northern Italy, and regional economic resilience."
      },
      {
        id: 1304,
        title: "Postdoctoral Fellowship in Human-Computer Interaction & Assistive Robotics",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Fellowship",
        source: "https://en.unibg.it/research/departments/department-management-information-and-production-engineering",
        funding: "€26,000 net annual research contract for 24 months",
        status: "Open competition",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "€0",
        tuition: "€0 (salaried postdoctoral role)",
        requirements: {
          gpa: "PhD in Robotics, Computer Engineering, or Cognitive Science",
          ielts: "Professional English fluency",
          gre: "Not applicable",
          papers: "Track record of international conferences (e.g., IEEE ICRA, IROS, or CHI)",
          references: "Two letters of recommendation from senior investigators"
        },
        desc: "Advanced postdoctoral study developing intuitive robotic control interfaces, wearable haptics, and assistive cognitive devices for eldercare and industry."
      },
      {
        id: 1305,
        title: "Master of Arts (M.A.) in Clinical Psychology for Individuals, Families & Organizations",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        type: "Master's",
        source: "https://en.unibg.it/ugov/degree-programmes/7029",
        funding: "Eligible for DSU fee waivers and international excellence grants",
        status: "Admissions open for 2027",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "€30",
        tuition: "€156–€2,600/year (means-tested)",
        requirements: {
          gpa: "Bachelor's degree in Psychology or Behavioral Sciences with at least 88 ECTS in core psychology",
          ielts: "English B2 certificate",
          gre: "Not required",
          papers: "Personal statement detailing clinical interest and therapeutic ethics",
          references: "One academic letter of recommendation"
        },
        desc: "English-taught master's exploring clinical assessment, systemic family counseling, organizational well-being, and neuropsychological rehabilitation."
      }
    ],
    researchers: [
      {
        id: 576,
        name: "Dr. Sergio Cavalieri",
        title: "Rector & Full Professor of Operations Management & Industrial Systems",
        subject: "engineering",
        topics: ["Industrial Servitization", "Supply Chain Design", "Industry 4.0", "Predictive Maintenance"],
        source: "https://en.unibg.it/rubrica/sergio-cavalieri",
        summary: "Dr. Cavalieri directs international research on industrial engineering, product-service systems, and the digital transformation of manufacturing supply chains."
      },
      {
        id: 577,
        name: "Dr. Giancarlo Maccarini",
        title: "Professor of Mechanical Engineering & Manufacturing Technology",
        subject: "engineering",
        topics: ["Additive Manufacturing", "Precision Machining", "Metrology", "Surface Engineering"],
        source: "https://en.unibg.it/rubrica/giancarlo-maccarini",
        summary: "Dr. Maccarini leads the precision manufacturing laboratory at UniBg, examining laser powder bed fusion, dimensional tolerances, and micro-machining."
      },
      {
        id: 578,
        name: "Dr. Annalisa Cristini",
        title: "Professor of Economics & Quantitative Methods",
        subject: "social-sciences",
        topics: ["Labor Economics", "Productivity Dynamics", "Wages & Employment", "Macroeconomic Modeling"],
        source: "https://en.unibg.it/rubrica/annalisa-cristini",
        summary: "Dr. Cristini investigates human capital accumulation, industrial relations, and the effects of technological adoption on regional European employment structures."
      }
    ]
  },

  // 5. USA: Dartmouth College (Row 663)
  {
    institution: "Dartmouth College",
    shortName: "Dartmouth",
    slug: "dartmouth-college",
    countryId: "usa",
    countryLabel: "USA",
    location: "Hanover, New Hampshire, USA",
    sourceRow: 663,
    website: "https://home.dartmouth.edu",
    headline: "Dartmouth College: Ivy League Doctoral Fellowships, Master's & Research Grants",
    description: "Explore Dartmouth College Guarini School of Graduate Studies admissions, Thayer engineering doctorates, fully funded PhD fellowships, and faculty research.",
    heroEyebrow: "Hanover, New Hampshire · Ivy League · Top Tier R1 Research",
    overview: "Dartmouth College is a world-renowned Ivy League institution in Hanover, New Hampshire, combining premier undergraduate education with world-leading research in computer science, biotechnology, polar environmental science, and biomedical engineering through the Guarini School, Thayer School of Engineering, and Geisel School of Medicine.",
    admissions: {
      masters: "Four-year bachelor's degree from an accredited institution with exceptional academic achievement (typical undergraduate GPA 3.6+ on a 4.0 scale).",
      phd: "Undergraduate or master's degree in a relevant field; all accepted PhD candidates receive full funding packages covering tuition and generous living stipends.",
      language: "TOEFL iBT 100+, IELTS Academic 7.0+, or Duolingo English Test 130+.",
      proposal: "Comprehensive statement of purpose detailing intellectual trajectory, specific research questions, and alignment with 2–3 Dartmouth faculty mentors.",
      appFee: "$75 to $100 USD (fee waivers readily available based on financial need).",
      documents: "Official academic transcripts, 3 confidential letters of recommendation, CV/resume, and research writing sample."
    },
    tuitionText: "Graduate tuition at Dartmouth is approximately $65,500 USD per year. However, all full-time PhD students admitted to the Guarini School of Graduate and Advanced Studies receive a 100% tuition waiver and a guaranteed annual living stipend of at least $40,000 USD for 5 years.",
    opportunities: [
      {
        id: 1306,
        title: "Guarini School of Graduate Studies Fully Funded PhD Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Scholarship",
        source: "https://graduate.dartmouth.edu/admissions-financial-aid/financial-support",
        funding: "100% tuition waiver plus $42,500 USD annual living stipend and full health insurance",
        status: "Open for Fall 2027",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Annual PhD deadline)",
        fee: "$85 USD (waiver available)",
        tuition: "100% covered by Dartmouth fellowship",
        requirements: {
          gpa: "Undergraduate GPA 3.5+ in Computer Science, Math, or related STEM discipline",
          ielts: "7.0+ or TOEFL 100+",
          gre: "Optional / Holistic review",
          papers: "Statement of purpose and GitHub repository or published technical paper",
          references: "Three academic reference letters from faculty familiar with research"
        },
        desc: "Comprehensive 5-year Ivy League doctoral funding package supporting doctoral scholars across artificial intelligence, cybersecurity, algorithms, and computational biology."
      },
      {
        id: 1307,
        title: "Doctor of Philosophy (PhD) in Engineering Sciences at Thayer School of Engineering",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "PhD",
        source: "https://engineering.dartmouth.edu/academics/graduate/phd",
        funding: "Guaranteed $41,000 USD/year stipend + full tuition waiver and healthcare",
        status: "Applications open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (Priority fall consideration)",
        fee: "$75 USD",
        tuition: "Fully funded by Thayer fellowships",
        requirements: {
          gpa: "Strong background in engineering, physics, or applied mathematics",
          ielts: "7.0 overall (minimum 6.5 in all bands)",
          gre: "Optional",
          papers: "Research statement articulating interdisciplinary engineering goals",
          references: "Three academic letters of recommendation"
        },
        desc: "Unified engineering doctoral degree without departmental boundaries, emphasizing biotechnology, energy technologies, and advanced semiconductors."
      },
      {
        id: 1308,
        title: "Master of Science (M.S.) in Quantitative Biomedical Sciences (QBS)",
        subject: "biology",
        subjects: ["biology", "computer-science", "mathematics"],
        type: "Master's",
        source: "https://geiselmed.dartmouth.edu/qbs/",
        funding: "Partial merit scholarships and graduate research assistantships",
        status: "Applications open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$75 USD",
        tuition: "$64,200 USD/year",
        requirements: {
          gpa: "Bachelor's degree with strong quantitative or life science coursework (GPA 3.4+)",
          ielts: "TOEFL 100+ or IELTS 7.0+",
          gre: "Optional",
          papers: "Personal statement detailing bioinformatics or health data science goals",
          references: "Three letters of recommendation"
        },
        desc: "Interdisciplinary master's bridging bioinformatics, health data science, and epidemiology at the Geisel School of Medicine and Dartmouth Cancer Center."
      },
      {
        id: 1309,
        title: "Institute of Arctic Studies Polar Environmental Research Assistantship",
        subject: "environment",
        subjects: ["environment", "physics"],
        type: "Research",
        source: "https://dickey.dartmouth.edu/arctic-environment/institute-arctic-studies",
        funding: "Graduate research stipend ($38,000 USD/year) plus Greenland/Arctic expedition costs",
        status: "Active research call",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        fee: "$0 (enrolled graduate students)",
        tuition: "Full tuition covered through NSF research grant",
        requirements: {
          gpa: "Background in Earth Sciences, Glaciology, or Environmental Physics",
          ielts: "English proficiency met",
          gre: "Not required",
          papers: "Demonstrated fieldwork experience or physical modeling skills",
          references: "Two faculty recommendations"
        },
        desc: "Field-based research analyzing polar ice core paleoclimatology, permafrost thaw dynamics, and Arctic environmental geopolitics."
      },
      {
        id: 1310,
        title: "Dartmouth Energy Collaborative & Irving Institute Climate Practicum",
        subject: "environment",
        subjects: ["environment", "engineering", "social-sciences"],
        type: "Internship",
        source: "https://irving.dartmouth.edu/",
        funding: "$6,500 USD student research stipend for 10-week summer placement",
        status: "Annual competition for graduate students",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$0",
        tuition: "N/A (summer project grant)",
        requirements: {
          gpa: "Enrolled in good standing at Dartmouth graduate program",
          ielts: "Institutional standard",
          gre: "Not required",
          papers: "Proposal detailing climate policy or renewable technology transition project",
          references: "Faculty advisor endorsement"
        },
        desc: "Interdisciplinary summer fellowship working with regional grid operators, federal laboratories, and international clean-energy non-profits."
      },
      {
        id: 1311,
        title: "Neukom Institute for Computational Science Postdoctoral Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences", "arts-design"],
        type: "Fellowship",
        source: "https://neukom.dartmouth.edu/fellowships/neukom-fellows",
        funding: "$75,000 USD annual salary + $10,000 USD annual research fund for 3 years",
        status: "Prestigious open competition",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026",
        fee: "$0",
        tuition: "Salaried postdoctoral appointment",
        requirements: {
          gpa: "Doctorate completed within 3 years in computer science or computational domain",
          ielts: "Native or fluent English",
          gre: "Not required",
          papers: "Curriculum vitae, 3 major papers, and 3-page interdisciplinary proposal",
          references: "Three letters of recommendation"
        },
        desc: "Independent 3-year fellowship for scholars whose research bridges computation with the arts, natural sciences, or social inquiry."
      },
      {
        id: 1312,
        title: "Master of Science (M.S.) in Computer Science with Concentration in Cyber Security",
        subject: "computer-science",
        subjects: ["computer-science"],
        type: "Master's",
        source: "https://web.cs.dartmouth.edu/graduate/ms-program",
        funding: "Teaching assistantships available for second-term students",
        status: "Applications open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "$85 USD",
        tuition: "$65,500 USD/year",
        requirements: {
          gpa: "BA/BS in Computer Science or related degree with GPA 3.5+",
          ielts: "TOEFL 100+ or IELTS 7.0+",
          gre: "Optional",
          papers: "Demonstrated programming excellence in C/C++, Rust, or Python",
          references: "Three academic or industry reference letters"
        },
        desc: "Intensive graduate degree providing rigorous foundations in cryptographic protocols, system vulnerability analysis, and network security."
      }
    ],
    researchers: [
      {
        id: 579,
        name: "Dr. Hany Farid",
        title: "Professor of Computer Science & Pioneer in Digital Forensics",
        subject: "computer-science",
        topics: ["Digital Image Forensics", "Deepfake Detection", "Misinformation Analysis", "Computer Vision"],
        source: "https://faculty-directory.dartmouth.edu/hany-farid",
        summary: "Dr. Farid is an internationally recognized authority on digital forensics, developing mathematical algorithms to detect manipulated media and synthesized human faces."
      },
      {
        id: 580,
        name: "Dr. Mary Albert",
        title: "Professor of Engineering & Executive Director of the U.S. Ice Drilling Program",
        subject: "engineering",
        topics: ["Glaciology", "Snow & Firn Mechanics", "Ice Core Science", "Polar Engineering"],
        source: "https://engineering.dartmouth.edu/community/faculty/mary-albert",
        summary: "Dr. Albert directs national scientific ice drilling infrastructure, studying climate history preserved in Antarctic and Greenland ice sheets."
      },
      {
        id: 581,
        name: "Dr. George Cybenko",
        title: "Dorothy and Walter Gramm Professor of Engineering",
        subject: "computer-science",
        topics: ["Neural Networks", "Approximation Theory", "Behavioral Cyber Security", "Signal Processing"],
        source: "https://engineering.dartmouth.edu/community/faculty/george-cybenko",
        summary: "Dr. Cybenko proved the foundational Universal Approximation Theorem for neural networks and pioneered behavioral profiling for threat detection."
      }
    ]
  },

  // 6. UK: City St George's, University of London (Row 1248)
  {
    institution: "City St George's, University of London",
    shortName: "City St George's",
    slug: "city-st-georges-university-of-london",
    countryId: "uk",
    countryLabel: "UK",
    location: "London, England, UK",
    sourceRow: 1248,
    website: "https://www.city.ac.uk",
    headline: "City St George's, University of London: Masters, PhD Studentships & Bayes Business School",
    description: "Explore City St George's, University of London postgraduate programs, Bayes Business School scholarships, health science doctorates, and research funding in central London.",
    heroEyebrow: "Central London, UK · Health, Business & STEM Powerhouse · Merged Institution",
    overview: "City St George's, University of London represents the historic merger of City, University of London and St George's, University of London, creating a health, medical science, technology, business (Bayes Business School), and journalism powerhouse in the heart of London.",
    admissions: {
      masters: "Upper second-class honours degree (UK 2:1) or international equivalent in an appropriate academic discipline.",
      phd: "Master's degree with merit or distinction (or international equivalent), accompanied by a formal supervisory endorsement.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each sub-test); Bayes Business School and Journalism require 7.0 (minimum 6.5 in writing).",
      proposal: "For research degrees: 2,000–3,000 word proposal detailing aims, literature context, methodology, and ethical considerations.",
      appFee: "£0 for most postgraduate courses; £50 for Bayes MSc applications.",
      documents: "Degree certificates, official transcripts, two academic references, CV, and personal statement."
    },
    tuitionText: "Postgraduate tuition typically ranges from £21,500 to £33,000 per year for international students (Bayes MSc programs may range up to £34,500). Full PhD studentships funded by UKRI and institutional endowments cover tuition fees plus an annual London-weighted stipend of £21,237.",
    opportunities: [
      {
        id: 1313,
        title: "City Doctoral Studentship & Full London-Weighted Stipend",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Scholarship",
        source: "https://www.city.ac.uk/prospective-students/finance/funding/doctoral-studentships",
        funding: "Full UK/International tuition fees covered plus £21,237/year tax-free London stipend for 3 years",
        status: "Open for 2027 entry",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027 (Annual studentship competition)",
        fee: "£0",
        tuition: "100% covered by City Doctoral Studentship",
        requirements: {
          gpa: "First-class UK bachelor's or master's with distinction (or international equivalent)",
          ielts: "6.5 overall (minimum 6.0 in all components)",
          gre: "Not required",
          papers: "Well-developed 4-page research proposal aligned with department research groups",
          references: "Two academic referee letters"
        },
        desc: "Prestigious doctoral scholarship awarded competitively to exceptional domestic and international research candidates across computing and engineering."
      },
      {
        id: 1314,
        title: "Doctor of Philosophy (PhD) in Cardiovascular Medicine & Biomedical Science",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        type: "PhD",
        source: "https://www.sgul.ac.uk/study/courses/postgraduate-research",
        funding: "British Heart Foundation and institutional PhD studentships available",
        status: "Open for 2026/2027 intake",
        deadline: "2026-12-08",
        deadlineText: "December 8, 2026",
        fee: "£0",
        tuition: "Full fee coverage for funded positions",
        requirements: {
          gpa: "First or upper second-class BSc/MSc in Biomedical Sciences or Medicine",
          ielts: "7.0 overall with 6.5 in all sub-scores",
          gre: "Not required",
          papers: "Demonstrated cellular biology or cardiac pharmacology research experience",
          references: "Two academic references from university supervisors"
        },
        desc: "Hospital-co-located doctoral research at the Tooting campus investigating cardiac channelopathies, vascular biology, and infectious disease diagnostics."
      },
      {
        id: 1315,
        title: "Master of Science (MSc) in Artificial Intelligence at Bayes Business School & STEM",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        source: "https://www.city.ac.uk/prospective-students/courses/postgraduate/artificial-intelligence",
        funding: "City International Excellence Scholarship (£3,000–£5,000 fee waiver)",
        status: "Applications open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027 (International applicants)",
        fee: "£0",
        tuition: "£27,800 for international students",
        requirements: {
          gpa: "UK 2:1 honours degree in Computing, Mathematics, or Engineering",
          ielts: "6.5 overall with 6.0 in all bands",
          gre: "Not required",
          papers: "Statement of interest demonstrating coding proficiency in Python and linear algebra",
          references: "One academic and one professional reference"
        },
        desc: "Cutting-edge curriculum examining deep learning, reinforcement learning, computer vision, and explainable AI systems for industry and healthcare."
      },
      {
        id: 1316,
        title: "Centre for Human-Computer Interaction Design (HCID) Research Assistantship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Research",
        source: "https://www.city.ac.uk/research/centres/hcid",
        funding: "Grade 6 researcher salary (£37,500–£44,000/year)",
        status: "Active project vacancy",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026",
        fee: "£0",
        tuition: "Salaried staff appointment",
        requirements: {
          gpa: "Master's degree in HCI, Interaction Design, or Computer Science",
          ielts: "Fluent professional English",
          gre: "Not required",
          papers: "Track record of user evaluation studies, accessibility research, or digital interaction design",
          references: "Two referee contacts"
        },
        desc: "Funded research project designing accessible healthcare interfaces, multimodal interactions, and trustworthy digital tools for diverse user populations."
      },
      {
        id: 1317,
        title: "St George's University Hospital NHS Trust Clinical Research Practicum",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        type: "Internship",
        source: "https://www.stgeorges.nhs.uk/education-and-research/",
        funding: "NHS band 5 training bursary / placement allowance",
        status: "Open for postgraduate healthcare students",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "£0",
        tuition: "Covered by course registration",
        requirements: {
          gpa: "Enrolled in MSc Biomedical Science, Genomic Medicine, or Public Health",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "DBS enhanced disclosure and occupational health clearance",
          references: "Academic clinical coordinator endorsement"
        },
        desc: "Hospital-based research practicum embedded in acute clinical trials, diagnostic pathology laboratories, and genomic screening workflows."
      },
      {
        id: 1318,
        title: "Bayes Business School Postdoctoral Fellowship in Quantitative Finance",
        subject: "mathematics",
        subjects: ["mathematics", "social-sciences"],
        type: "Fellowship",
        source: "https://www.bayes.city.ac.uk/faculties-and-research",
        funding: "Competitive £45,000–£52,000 annual salary plus research support",
        status: "Open call",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "£0",
        tuition: "Salaried appointment",
        requirements: {
          gpa: "PhD in Financial Mathematics, Econometrics, or Quantitative Finance",
          ielts: "Academic English fluency",
          gre: "Not required",
          papers: "Two working papers or publications in leading finance/econometrics journals",
          references: "Three academic reference letters"
        },
        desc: "Postdoctoral fellowship analyzing algorithmic trading strategies, high-frequency limit order books, and systemic climate risk in financial institutions."
      },
      {
        id: 1319,
        title: "Master of Science (MSc) in Health Informatics & Clinical Data Science",
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        type: "Master's",
        source: "https://www.city.ac.uk/prospective-students/courses/postgraduate/health-informatics",
        funding: "NHS Digital and university postgraduate awards available",
        status: "Applications open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "£0",
        tuition: "£24,500/year for international students",
        requirements: {
          gpa: "UK 2:1 honours degree in Computing, Health Sciences, or related field",
          ielts: "6.5 overall (minimum 6.0 in each skill)",
          gre: "Not required",
          papers: "Personal statement explaining motivation to transform healthcare through data",
          references: "Two academic or employer recommendations"
        },
        desc: "Interdisciplinary training combining electronic health records, predictive health modeling, clinical decision support systems, and medical ethics."
      }
    ],
    researchers: [
      {
        id: 582,
        name: "Dr. Jo Wood",
        title: "Professor of Visual Analytics & Information Visualization",
        subject: "computer-science",
        topics: ["Visual Analytics", "Geographic Data Science", "Information Visualization", "Spatial Interaction"],
        source: "https://www.city.ac.uk/about/people/academics/jo-wood",
        summary: "Dr. Wood is a preeminent researcher in visual analytics, developing novel data visualization algorithms for large-scale geographic and urban mobility networks."
      },
      {
        id: 583,
        name: "Dr. Sanjeev Krishna",
        title: "Professor of Molecular Parasitology & Medicine at St George's",
        subject: "biology",
        topics: ["Antimalarial Resistance", "Infectious Disease Diagnostics", "Artemisinin Pharmacodynamics", "Global Health"],
        source: "https://www.sgul.ac.uk/profiles/sanjeev-krishna",
        summary: "Dr. Krishna is an FMedSci fellow leading landmark clinical trials on antimalarial pharmacology, diagnostic technologies, and drug resistance in tropical medicine."
      },
      {
        id: 584,
        name: "Dr. Laura Empson",
        title: "Professor in the Management of Professional Services at Bayes Business School",
        subject: "social-sciences",
        topics: ["Professional Service Firms", "Leadership Dynamics", "Governance & Mergers", "Organizational Trust"],
        source: "https://www.bayes.city.ac.uk/faculties-and-research/experts/laura-empson",
        summary: "Dr. Empson publishes foundational research on collective leadership, partner dynamics, and governance in global legal and consulting organizations."
      }
    ]
  },

  // 7. Japan: Fukuoka Institute of Technology (Row 1633)
  {
    institution: "Fukuoka Institute of Technology",
    shortName: "FIT",
    slug: "fukuoka-institute-of-technology",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Fukuoka, Japan",
    sourceRow: 1633,
    website: "https://www.fit.ac.jp/en/",
    headline: "Fukuoka Institute of Technology: Graduate Engineering, MEXT & Robotics Research",
    description: "Discover Fukuoka Institute of Technology engineering graduate school, robotics laboratories, MEXT scholarships, master's and doctoral degrees in Kyushu.",
    heroEyebrow: "Fukuoka, Kyushu · Private Technology Institute · Robotics & Information Science",
    overview: "Fukuoka Institute of Technology (FIT / Fukuoka Kogyo Daigaku) is a prominent engineering and applied sciences university in Fukuoka, Kyushu, celebrated for robotics, semiconductor device engineering, electronic materials, and high industry employment across Japan's 'Silicon Island'.",
    admissions: {
      masters: "Completion of 16 years of formal education with a bachelor's degree in engineering, computer science, or physical sciences.",
      phd: "Master's degree in engineering or relevant scientific discipline with verified thesis or peer-reviewed publication.",
      language: "TOEFL iBT 72+, IELTS 5.5+, or Japanese JLPT N2 (depending on designated supervisor's working language).",
      proposal: "Detailed research proposal (2–3 pages) in English or Japanese matching a FIT laboratory research theme.",
      appFee: "¥30,000 JPY entrance examination screening fee.",
      documents: "Graduation certificate, academic transcript, letters of recommendation from undergraduate dean/advisor, and research plan."
    },
    tuitionText: "Annual graduate tuition at FIT is approximately ¥850,000 to ¥1,050,000 JPY. International students receive a 30% to 50% tuition reduction scholarship, and Japanese Government MEXT scholarship holders receive full tuition exemption plus a monthly stipend of ¥144,000–¥145,000 JPY.",
    opportunities: [
      {
        id: 1320,
        title: "Japanese Government (MEXT) University Recommendation Scholarship at FIT",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Scholarship",
        source: "https://www.fit.ac.jp/en/admissions/",
        funding: "100% tuition exemption, round-trip airfare, and ¥144,000–¥145,000 JPY/month living stipend",
        status: "Annual selection",
        deadline: "2026-12-20",
        deadlineText: "December 20, 2026 (For October 2027 intake)",
        fee: "¥0 (for MEXT nominees)",
        tuition: "¥0 (fully funded by Japanese Ministry of Education)",
        requirements: {
          gpa: "Minimum 2.3 out of 3.0 on MEXT GPA scale",
          ielts: "CEFR B2 (IELTS 5.5+ or TOEFL iBT 72+)",
          gre: "Not required",
          papers: "Formal research plan outlining robotics, materials, or communications research",
          references: "Dean's recommendation letter from home university"
        },
        desc: "Prestigious national scholarship awarded to exceptional international engineering students pursuing master's or doctoral degrees at FIT."
      },
      {
        id: 1321,
        title: "Doctor of Engineering in Electronic Engineering & Semiconductor Devices",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "PhD",
        source: "https://www.fit.ac.jp/en/faculty/graduate/electronics/",
        funding: "FIT Graduate Research Fellowships (covering tuition + ¥50,000 JPY/month stipend)",
        status: "Open for 2027 admissions",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Spring 2027 round)",
        fee: "¥30,000 JPY",
        tuition: "¥900,000 JPY/year (50% reduction applies to qualified international students)",
        requirements: {
          gpa: "Master's degree in electronics, physics, or materials engineering",
          ielts: "TOEFL 75+ or IELTS 6.0+",
          gre: "Not required",
          papers: "Summary of master's thesis and proposed semiconductor fabrication project",
          references: "Two academic referee letters"
        },
        desc: "Doctoral research program investigating wide-bandgap semiconductors, gallium nitride (GaN) power devices, and nano-electronic fabrication in Kyushu's semiconductor hub."
      },
      {
        id: 1322,
        title: "Master of Engineering in Intelligent Robotics & Autonomous Systems",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        source: "https://www.fit.ac.jp/en/faculty/graduate/mechanical/",
        funding: "FIT International Student Tuition Reduction (30%–50% waiver)",
        status: "Applications open",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Spring 2027 intake)",
        fee: "¥30,000 JPY",
        tuition: "¥850,000 JPY/year before discount",
        requirements: {
          gpa: "Bachelor's degree in Mechanical Engineering, Mechatronics, or Computer Science",
          ielts: "IELTS 5.5+ or TOEFL iBT 70+",
          gre: "Not required",
          papers: "Statement of purpose outlining robotics kinematics or embedded control goals",
          references: "Academic reference from university professor"
        },
        desc: "Advanced engineering master's covering humanoid robotics, computer vision, sensor fusion, and robotic manipulation for manufacturing automation."
      },
      {
        id: 1323,
        title: "FIT Information & Communication Systems Laboratory Research Assistantship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Research",
        source: "https://www.fit.ac.jp/en/faculty/graduate/information/",
        funding: "¥100,000 JPY monthly research stipend through industrial collaborative grants",
        status: "Active lab vacancy",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "¥0",
        tuition: "Tuition waiver applied",
        requirements: {
          gpa: "Strong background in network protocols, wireless communications, or distributed computing",
          ielts: "Working English fluency",
          gre: "Not required",
          papers: "Sample code repository or undergraduate research project report",
          references: "Academic supervisor confirmation"
        },
        desc: "Applied research vacancy evaluating 6G wireless communication architectures, edge computing security, and vehicular ad-hoc networks (VANET)."
      },
      {
        id: 1324,
        title: "Kyushu Silicon Island Semiconductor Fab Industrial Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "Internship",
        source: "https://www.fit.ac.jp/en/careers/",
        funding: "Corporate internship stipend (¥120,000–¥160,000 JPY/month) + accommodation",
        status: "Summer and autumn placement cycles",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027 (Summer 2027 placement)",
        fee: "¥0",
        tuition: "Curricular credit unit",
        requirements: {
          gpa: "Good standing in FIT graduate engineering program",
          ielts: "Basic conversational Japanese or fluent technical English",
          gre: "Not required",
          papers: "Cleanroom protocol training completion and CV",
          references: "FIT career center endorsement"
        },
        desc: "Three-month industrial internship with regional semiconductor manufacturers and cleanrooms mastering wafer lithography, thin-film deposition, and packaging."
      },
      {
        id: 1325,
        title: "JSPS-FIT Postdoctoral Fellowship in Advanced Functional Materials",
        subject: "chemistry",
        subjects: ["chemistry", "physics", "engineering"],
        type: "Fellowship",
        source: "https://www.fit.ac.jp/en/research/",
        funding: "¥362,000 JPY monthly salary + ¥200,000 JPY travel allowance and research grant",
        status: "Annual JSPS international competition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "¥0",
        tuition: "Salaried postdoctoral appointment",
        requirements: {
          gpa: "PhD in Materials Chemistry, Condensed Matter Physics, or Polymer Science",
          ielts: "Fluent English or Japanese",
          gre: "Not applicable",
          papers: "At least 3 first-author journal papers in recognized international journals",
          references: "Two letters of recommendation from international professors"
        },
        desc: "Two-year postdoctoral fellowship supported by the Japan Society for the Promotion of Science (JSPS) researching polymer nanocomposites and thermoelectric materials."
      },
      {
        id: 1326,
        title: "Master of Information Science in Artificial Intelligence & Big Data Analytics",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        type: "Master's",
        source: "https://www.fit.ac.jp/en/faculty/graduate/information/",
        funding: "Partial tuition exemption for eligible international postgraduates",
        status: "Open for admissions",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "¥30,000 JPY",
        tuition: "¥850,000 JPY/year (before scholarship reductions)",
        requirements: {
          gpa: "Undergraduate degree in Computer Science, Data Science, or Mathematics",
          ielts: "IELTS 6.0+ or TOEFL 75+",
          gre: "Not required",
          papers: "Programming portfolio in Python, Java, or C++ and motivation letter",
          references: "Academic reference from university advisor"
        },
        desc: "Graduate program focusing on deep neural networks, natural language processing, predictive maintenance algorithms, and cyber security."
      }
    ],
    researchers: [
      {
        id: 585,
        name: "Dr. Leonard Barolli",
        title: "Professor of Information & Communication Systems",
        subject: "computer-science",
        topics: ["Wireless Mesh Networks", "Fuzzy Logic Systems", "Sensor Networks", "Peer-to-Peer Computing"],
        source: "https://www.fit.ac.jp/en/faculty/graduate/information/",
        summary: "Dr. Barolli is a highly prolific computer scientist publishing extensive work on fuzzy logic controllers, genetic algorithms, and routing optimization in wireless communications."
      },
      {
        id: 586,
        name: "Dr. Nobuhiro Matsushita",
        title: "Professor of Electrical Engineering & Electronic Materials",
        subject: "engineering",
        topics: ["Ferromagnetic Films", "Spin Electronics", "Thin Film Synthesis", "High-Frequency Inductors"],
        source: "https://www.fit.ac.jp/en/faculty/graduate/electronics/",
        summary: "Dr. Matsushita develops novel low-temperature synthesis techniques for spin-electronic materials, soft magnetic thin films, and high-density storage devices."
      },
      {
        id: 587,
        name: "Dr. Kenji Suzuki",
        title: "Professor of Mechanical & Robotic Systems",
        subject: "engineering",
        topics: ["Autonomous Mobile Robots", "Mechatronic Control", "Human-Robot Interaction", "Biomedical Prosthetics"],
        source: "https://www.fit.ac.jp/en/faculty/graduate/mechanical/",
        summary: "Dr. Suzuki specializes in autonomous mobile robot navigation in unstructured environments, actuator design, and assistive robotic exoskeletons."
      }
    ]
  },

  // 8. Sweden: University West (Row 1617)
  {
    institution: "University West",
    shortName: "University West",
    slug: "university-west",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Trollhättan, Sweden",
    sourceRow: 1617,
    website: "https://www.hv.se/en/",
    headline: "University West: Work-Integrated Learning, Thermal Spraying & Robot Automation",
    description: "Explore University West master's degrees, Production Technology Centre doctorates, Work-Integrated Learning (WIL), and Swedish Institute scholarships in Trollhättan.",
    heroEyebrow: "Trollhättan, Sweden · Sweden's Leading University for Work-Integrated Learning · PTC Hub",
    overview: "University West (Högskolan Väst) is Sweden's government-designated premier university for Work-Integrated Learning (AIL). Located in Trollhättan near Gothenburg, it hosts the world-class Production Technology Centre (PTC) specializing in additive manufacturing, thermal spraying, and robotic welding alongside GKN Aerospace and Volvo.",
    admissions: {
      masters: "Bachelor's degree (180 ECTS) with at least 90 ECTS in a relevant engineering, IT, or business subject area via Universityadmissions.se.",
      phd: "Master's degree (minimum 240 ECTS with 60 ECTS at advanced level) with a completed scientific degree project.",
      language: "English 6 / English B (IELTS 6.5 with no band below 5.5, or TOEFL iBT 90 with minimum 20 in writing).",
      proposal: "For doctoral positions (fully salaried PhD employment): CV, publication sample, and research motivation addressing the advertised project.",
      appFee: "900 SEK application fee paid via Universityadmissions.se (EU/EEA students exempt).",
      documents: "Certified bachelor's degree diploma, complete transcripts of records, proof of English, and copy of passport."
    },
    tuitionText: "Tuition is free for Swedish, EU/EEA, and Swiss citizens. For non-EU/EEA students, master's tuition is approximately 130,000 to 145,000 SEK per year. All PhD candidates are employed as university staff on full monthly salaries (starting at ~31,000 SEK/month), paying zero tuition fees.",
    opportunities: [
      {
        id: 1327,
        title: "University West PhD Employment in Production Technology (Fully Salaried)",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        type: "PhD",
        source: "https://www.hv.se/en/research/research-education/",
        funding: "100% full-time salaried employment starting at 31,500 SEK/month (~€33,000/year) + benefits",
        status: "Open for doctoral calls",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "0 SEK",
        tuition: "0 SEK (salaried employee status; no tuition fees in Sweden)",
        requirements: {
          gpa: "MSc in Mechanical, Materials, or Manufacturing Engineering",
          ielts: "English 6 (IELTS 6.5 or equivalent)",
          gre: "Not required",
          papers: "Master's thesis in metal additive manufacturing, thermal spraying, or robotic automation",
          references: "Two academic referee contacts"
        },
        desc: "Four-year salaried doctoral appointment based at the Production Technology Centre (PTC) conducting experimental research in aerospace metallurgy and laser metal deposition."
      },
      {
        id: 1328,
        title: "Swedish Institute (SI) Scholarship for Global Professionals at University West",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Scholarship",
        source: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
        funding: "100% tuition coverage, monthly living grant of 12,000 SEK, and travel allowance",
        status: "Annual SI application window",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        fee: "900 SEK (universityadmissions.se)",
        tuition: "Fully waived by Swedish Institute",
        requirements: {
          gpa: "High-achieving bachelor's degree; minimum 3,000 hours of documented work experience",
          ielts: "IELTS 6.5 (minimum 5.5 in each band)",
          gre: "Not required",
          papers: "CV in Europass format and leadership proof from eligible country",
          references: "Two professional reference letters"
        },
        desc: "Prestigious Swedish government scholarship funding international master's students demonstrating leadership and commitment to the UN 2030 Agenda."
      },
      {
        id: 1329,
        title: "Master of Science in Robotics & Automation (Work-Integrated Learning)",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        source: "https://www.hv.se/en/education/degree-programmes/master-in-robotics-and-automation/",
        funding: "University West international scholarships (covering 25%–50% of tuition)",
        status: "Open via Universityadmissions.se",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (National Swedish deadline)",
        fee: "900 SEK",
        tuition: "140,000 SEK/year for non-EU students",
        requirements: {
          gpa: "BSc in Electrical, Mechanical, Mechatronics, or Computer Engineering",
          ielts: "IELTS 6.5 (no component under 5.5)",
          gre: "Not required",
          papers: "Statement of purpose detailing interest in robot kinematics and industrial control",
          references: "Academic reference letters"
        },
        desc: "Two-year master's taught in English featuring extensive laboratory projects at the PTC on industrial robot programming, machine vision, and digital twin simulation."
      },
      {
        id: 1330,
        title: "Production Technology Centre (PTC) Additive Manufacturing Research Assistantship",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        type: "Research",
        source: "https://www.hv.se/en/research/research-environments/production-technology-west/",
        funding: "Paid research project assistantship (22,000 SEK/month)",
        status: "Active laboratory vacancy",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "0 SEK",
        tuition: "Covered by research project grant",
        requirements: {
          gpa: "BSc or ongoing MSc in Materials Science or Mechanical Engineering",
          ielts: "English 6 proficiency",
          gre: "Not required",
          papers: "Hands-on experience with wire arc additive manufacturing (WAAM) or metallurgy",
          references: "University West supervisor endorsement"
        },
        desc: "Collaborative research project alongside GKN Aerospace evaluating microstructure evolution and residual stress in wire-feed additive manufacturing of superalloys."
      },
      {
        id: 1331,
        title: "GKN Aerospace & Volvo Trucks Industrial Work-Integrated Learning Internship",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Internship",
        source: "https://www.hv.se/en/meet-university-west/work-integrated-learning/",
        funding: "Paid engineering co-op placement (approx. 20,000–26,000 SEK/month)",
        status: "Open for second-year master's candidates",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "0 SEK",
        tuition: "Included in standard semester registration",
        requirements: {
          gpa: "Satisfactory completion of Year 1 master's courses at University West",
          ielts: "Fluent English communication",
          gre: "Not required",
          papers: "Updated CV and portfolio of engineering simulations",
          references: "Academic tutor approval"
        },
        desc: "Work-Integrated Learning (AIL) industrial thesis placement integrated inside aerospace and heavy vehicle plants in Trollhättan and Gothenburg."
      },
      {
        id: 1332,
        title: "Postdoctoral Fellowship in Thermal Spray Coatings & High-Temperature Materials",
        subject: "engineering",
        subjects: ["engineering", "physics", "chemistry"],
        type: "Fellowship",
        source: "https://www.hv.se/en/research/research-environments/production-technology-west/",
        funding: "Salaried postdoctoral appointment (42,000–47,000 SEK/month + pension & benefits)",
        status: "International call",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "0 SEK",
        tuition: "0 SEK (salaried employee)",
        requirements: {
          gpa: "PhD in Materials Engineering, Surface Engineering, or Plasma Physics",
          ielts: "Proficient scientific English",
          gre: "Not applicable",
          papers: "Demonstrated publication record in peer-reviewed surface engineering journals",
          references: "Three academic reference contacts"
        },
        desc: "Two-year postdoctoral position examining suspension plasma spray (SPS) thermal barrier coatings for next-generation hydrogen and aviation gas turbines."
      },
      {
        id: 1333,
        title: "Master of Science in Manufacturing Engineering with Specialization in Digital Twins",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        source: "https://www.hv.se/en/education/degree-programmes/master-in-manufacturing-engineering/",
        funding: "University West Master's Scholarship (tuition fee waiver)",
        status: "Open on Universityadmissions.se",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "900 SEK",
        tuition: "135,000 SEK/year for non-EU students",
        requirements: {
          gpa: "Bachelor's degree in Mechanical, Production, or Industrial Engineering",
          ielts: "IELTS 6.5 (minimum 5.5 in each section)",
          gre: "Not required",
          papers: "Motivation letter detailing manufacturing automation experience",
          references: "Two academic referee letters"
        },
        desc: "One-year or two-year advanced degree focused on smart factory architectures, virtual commissioning, digital twins, and industrial IoT integration."
      }
    ],
    researchers: [
      {
        id: 588,
        name: "Dr. Per Nylén",
        title: "Professor of Production Technology & Head of Department",
        subject: "engineering",
        topics: ["Thermal Spraying", "Surface Engineering", "Thermal Barrier Coatings", "Process Diagnostics"],
        source: "https://www.hv.se/en/staff/per-nylen/",
        summary: "Dr. Nylén leads research on thermal spraying and coating processes for aerospace components, advancing plasma diagnostic techniques and suspension spraying."
      },
      {
        id: 589,
        name: "Dr. Anna-Karin Christiansson",
        title: "Professor of Automatic Control & Industrial Robotics",
        subject: "engineering",
        topics: ["Sensor Fusion", "Robot Control", "Process Monitoring", "Non-Destructive Testing"],
        source: "https://www.hv.se/en/staff/anna-karin-christiansson/",
        summary: "Dr. Christiansson conducts applied control engineering research on robotic welding automation, real-time sensor monitoring, and defect detection in manufacturing."
      },
      {
        id: 590,
        name: "Dr. Mohit Gupta",
        title: "Professor of Materials Engineering & Thermal Spray Technology",
        subject: "engineering",
        topics: ["Suspension Plasma Spray", "Ceramic Coatings", "High-Temperature Wear", "Environmental Barrier Coatings"],
        source: "https://www.hv.se/en/staff/mohit-gupta/",
        summary: "Dr. Gupta is an expert in novel ceramic thermal barrier coatings, investigating microstructural design to withstand thermal fatigue in gas turbine engines."
      }
    ]
  },

  // 9. Netherlands: HAN University of Applied Sciences (Row 1429)
  {
    institution: "HAN University of Applied Sciences",
    shortName: "HAN",
    slug: "han-university-of-applied-sciences",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Arnhem & Nijmegen, Gelderland, Netherlands",
    sourceRow: 1429,
    website: "https://www.han.nl/en/",
    headline: "HAN University of Applied Sciences: Automotive, Engineering & NL Scholarships",
    description: "Explore HAN University of Applied Sciences applied master's programs, NL Scholarships, automotive systems research, and sustainable energy degrees in Arnhem and Nijmegen.",
    heroEyebrow: "Arnhem & Nijmegen, Netherlands · Applied Research · Automotive & Clean Mobility",
    overview: "HAN University of Applied Sciences (Hogeschool van Arnhem en Nijmegen) is one of the largest and most respected applied science universities in the Netherlands, renowned for its international engineering expertise, Automotive Centre of Expertise, renewable energy systems, and life sciences.",
    admissions: {
      masters: "Bachelor of Science in Engineering, Automotive, Computing, or related discipline from a recognized institution with sound academic performance.",
      phd: "Direct doctoral degrees in the Netherlands are conferred via university partnerships (e.g., Radboud University or TU Eindhoven); professional professorships recruit doctoral researchers for joint projects.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each subscore) or TOEFL iBT 90+.",
      proposal: "For master's entry: detailed motivation letter, CV, and technical background summary; for research contracts: technical project proposal.",
      appFee: "€0 (applications submitted via Studielink and HAN OSIRIS portal).",
      documents: "Bachelor's diploma, transcript of records, passport copy, CV, proof of English, and motivation statement."
    },
    tuitionText: "Tuition for EU/EEA students is the statutory Dutch fee of approximately €2,530 per year. For non-EU/EEA students, master's tuition ranges from €9,500 to €11,800 per year. Dutch Ministry NL Scholarships provide €5,000 awards to talented non-EEA applicants.",
    opportunities: [
      {
        id: 1334,
        title: "Dutch Ministry NL Scholarship (formerly Holland Scholarship) at HAN",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Scholarship",
        source: "https://www.han.nl/en/study-and-living/scholarships/",
        funding: "€5,000 cash grant awarded in the first year of study",
        status: "Open for 2027 entry",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Non-EU application deadline)",
        fee: "€0",
        tuition: "€9,850/year (offset by €5,000 scholarship)",
        requirements: {
          gpa: "Excellent bachelor's GPA (equivalent to Dutch 7.5+ or top 20% of graduating class)",
          ielts: "IELTS 6.5 overall with 6.0 in all bands",
          gre: "Not required",
          papers: "Compelling motivation letter demonstrating professional and academic ambition",
          references: "One academic and one professional recommendation"
        },
        desc: "Competitive scholarship financed by the Dutch Ministry of Education and HAN for exceptional non-EEA students enrolling in English-taught master's programs."
      },
      {
        id: 1335,
        title: "Master of Science in Automotive Systems & Clean Mobility (Joint Program)",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        type: "Master's",
        source: "https://www.han.nl/en/programs/master/automotive-systems/",
        funding: "HAN Merit Scholarship + automotive industry sponsorship contracts",
        status: "Applications open via Studielink",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027 (International applicants)",
        fee: "€0",
        tuition: "€9,850/year for non-EU students; €2,530 for EU students",
        requirements: {
          gpa: "BSc in Automotive, Mechanical, Electrical Engineering, or Mechatronics",
          ielts: "IELTS 6.5 or TOEFL 90",
          gre: "Not required",
          papers: "Demonstrated coursework in control engineering, dynamics, or vehicle electronics",
          references: "Two academic referee contacts"
        },
        desc: "Internationally renowned master's program focusing on electric powertrains, autonomous vehicle perception, battery management systems, and vehicle dynamics."
      },
      {
        id: 1336,
        title: "Collaborative Applied Doctoral Candidacy in Smart Grids with Radboud University",
        subject: "engineering",
        subjects: ["engineering", "environment", "computer-science"],
        type: "PhD",
        source: "https://www.han.nl/en/research/centres-of-expertise/",
        funding: "Fully paid Dutch university researcher contract (€2,770–€3,539/month under VSNU CAO)",
        status: "Joint recruitment call",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        fee: "€0",
        tuition: "€0 (salaried employee status)",
        requirements: {
          gpa: "MSc in Electrical Engineering, Sustainable Energy, or Computer Science",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Master's thesis on decentralized power systems, microgrids, or energy storage control",
          references: "Two academic supervisor endorsements"
        },
        desc: "Four-year salaried doctoral research project conducted between HAN Centre of Expertise Sustainable Energy and Radboud University investigating hydrogen storage and local microgrid balancing."
      },
      {
        id: 1337,
        title: "Automotive Centre of Expertise (ACE) Autonomous Driving Research Assistantship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        type: "Research",
        source: "https://www.han.nl/en/research/centres-of-expertise/sustainable-energy-and-mobility/",
        funding: "Applied research salary (€2,400–€2,900/month)",
        status: "Active project vacancy",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "€0",
        tuition: "N/A (research staff position)",
        requirements: {
          gpa: "BSc or ongoing MSc in Robotics, Computer Science, or Automotive Engineering",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Experience with ROS/ROS2, LiDAR sensor processing, or Kalman filtering",
          references: "Project leader recommendation"
        },
        desc: "Applied development position working with Dutch automotive consortia on cooperative automated shuttles and camera-LiDAR fusion algorithms."
      },
      {
        id: 1338,
        title: "DAF Trucks & VDL Industrial Graduation Internship",
        subject: "engineering",
        subjects: ["engineering"],
        type: "Internship",
        source: "https://www.han.nl/en/programs/master/automotive-systems/practical-information/",
        funding: "Industry internship allowance (€600–€900/month)",
        status: "Annual master's graduation round",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (Autumn graduation cohort)",
        fee: "€0",
        tuition: "Curricular graduation project",
        requirements: {
          gpa: "Passed all first-year coursework in HAN engineering master's program",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Graduation proposal approved by HAN examination board",
          references: "Academic mentor confirmation"
        },
        desc: "Six-month master's graduation internship based at major Dutch vehicle manufacturers researching heavy electric truck thermal management or hydrogen combustion."
      },
      {
        id: 1339,
        title: "Centre of Expertise Sustainable Energy Postdoctoral Applied Fellowship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        type: "Fellowship",
        source: "https://www.han.nl/en/research/centres-of-expertise/sustainable-energy-and-mobility/",
        funding: "Salaried appointment (€3,800–€4,500/month under Dutch CAO-HBO)",
        status: "Open project competition",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€0",
        tuition: "Salaried role",
        requirements: {
          gpa: "PhD in Energy Systems, Electrical Engineering, or Applied Physics",
          ielts: "C1 English proficiency",
          gre: "Not required",
          papers: "Peer-reviewed publications on industrial heat pumps or thermal battery integration",
          references: "Three academic reference contacts"
        },
        desc: "Two-year applied research fellowship leading collaborative industrial projects on industrial electrification, seasonal heat storage, and regional energy hubs."
      },
      {
        id: 1340,
        title: "Master of Science in Engineering Systems & Sustainable Energy Track",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        type: "Master's",
        source: "https://www.han.nl/en/programs/master/engineering-systems/",
        funding: "Eligible for HAN international awards and Erasmus+ traineeship grants",
        status: "Applications open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "€0",
        tuition: "€9,850/year (non-EEA); €2,530/year (EEA)",
        requirements: {
          gpa: "BSc in Electrical, Chemical, or Mechanical Engineering",
          ielts: "IELTS 6.5 (minimum 6.0 in all bands)",
          gre: "Not required",
          papers: "Motivation statement detailing commitment to renewable energy transition",
          references: "Two academic referee letters"
        },
        desc: "Advanced applied master's examining PV integration, wind turbine dynamics, power electronics converters, and grid compliance standards."
      }
    ],
    researchers: [
      {
        id: 591,
        name: "Dr. Bram Veenhuizen",
        title: "Professor of Vehicle Mechatronics & Sustainable Mobility",
        subject: "engineering",
        topics: ["Electric Vehicles", "Vehicle Dynamics", "Driveability Modeling", "Autonomous Driving Systems"],
        source: "https://www.han.nl/en/research/professors/bram-veenhuizen/",
        summary: "Dr. Veenhuizen leads the Sustainable Mobility research group, directing national projects on vehicle electrification, battery safety, and intelligent transport."
      },
      {
        id: 592,
        name: "Dr. Mascha van der Voort",
        title: "Professor of Human-Centered Design & Applied Technology",
        subject: "engineering",
        topics: ["User-Centered Design", "Interaction Engineering", "Smart Products", "Mobility Ergonomics"],
        source: "https://www.han.nl/en/research/professors/",
        summary: "Dr. van der Voort explores the interface between human factors and advanced technology, developing evaluation methods for autonomous vehicle interfaces."
      },
      {
        id: 593,
        name: "Dr. Jan Benders",
        title: "Professor of Smart Business & Operations Management",
        subject: "social-sciences",
        topics: ["Lean Production", "Digital Transformation", "Work Organization", "Supply Chain Innovation"],
        source: "https://www.han.nl/en/research/professors/",
        summary: "Dr. Benders investigates the implementation of smart manufacturing technologies, workplace reorganization, and continuous improvement systems in European industry."
      }
    ]
  },

  // 10. Switzerland: Haute école pédagogique du canton de Vaud (Row 1340)
  {
    institution: "Haute école pédagogique du canton de Vaud",
    shortName: "HEP Vaud",
    slug: "hep-vaud",
    countryId: "switzerland",
    countryLabel: "Switzerland",
    location: "Lausanne, Vaud, Switzerland",
    sourceRow: 1340,
    website: "https://www.hepl.ch",
    headline: "HEP Vaud: Educational Sciences, Collaborative Doctorates & Research in Lausanne",
    description: "Discover HEP Vaud higher education programs, joint doctoral fellowships in educational sciences with UNIL, teacher training, and research funding in Lausanne.",
    heroEyebrow: "Lausanne, Vaud · Swiss Teacher Education University · Educational Sciences Research",
    overview: "Haute école pédagogique du canton de Vaud (HEP Vaud) is a prominent Swiss public university institution based in Lausanne on Lake Geneva. It is dedicated to teacher education, pedagogy, digital learning technologies, and advanced research in educational sciences in partnership with the University of Lausanne (UNIL) and EPFL.",
    admissions: {
      masters: "Recognized bachelor's degree in education, social sciences, or discipline corresponding to secondary teaching subjects; French proficiency at C1 level required for teaching tracks.",
      phd: "Master's degree (minimum 120 ECTS or 300 ECTS total) in educational sciences, psychology, or related field; admission conducted jointly with UNIL Faculty of Social and Political Sciences.",
      language: "French C1 level (DALF C1) for French-taught pedagogy programs; English B2/C1 for international educational technology and research teams.",
      proposal: "Detailed research project exposé (5–8 pages) outlining pedagogical questions, theoretical framework, and proposed empirical methodology.",
      appFee: "150 CHF administrative application fee.",
      documents: "University degrees, certified transcripts, CV, criminal record excerpt, language certificates, and statement of research motivation."
    },
    tuitionText: "Tuition fees for international students at HEP Vaud are modest, set by cantonal regulations at approximately 500 to 720 CHF per semester. Fully funded doctoral assistant positions (Assistant-e doctorant-e) provide salaried contracts of 60,000 to 75,000 CHF per year.",
    opportunities: [
      {
        id: 1341,
        title: "Joint HEP Vaud & UNIL Doctoral Fellowship in Educational Sciences",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "PhD",
        source: "https://www.hepl.ch/fr/accueil/formation/doctorat.html",
        funding: "Salaried doctoral assistant contract (approx. 65,000–72,000 CHF/year for 4 years)",
        status: "Annual doctoral call",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "150 CHF",
        tuition: "500 CHF/semester (offset by university research contract)",
        requirements: {
          gpa: "Master's degree in Educational Sciences, Psychology, or Sociology with high marks",
          ielts: "French C1 (DALF C1) and working English proficiency",
          gre: "Not required",
          papers: "Master's thesis and 6-page research proposal on pedagogical innovation or learning cognition",
          references: "Two academic referee letters from university professors"
        },
        desc: "Four-year salaried doctoral research fellowship delivered in partnership with the University of Lausanne (UNIL) investigating learning science, pedagogy, and educational sociology."
      },
      {
        id: 1342,
        title: "Swiss Government Excellence Scholarship (ESKAS) at HEP Vaud",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        type: "Scholarship",
        source: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
        funding: "1,920 CHF monthly tax-free living stipend, Swiss health insurance, and roundtrip flight",
        status: "Annual Swiss diplomatic competition",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026 (Country-specific embassy deadlines apply)",
        fee: "0 CHF",
        tuition: "Full tuition waiver granted by host institution",
        requirements: {
          gpa: "Master's degree with honors; applicant born after Dec 31, 1991",
          ielts: "Language certificate in French or English depending on research project",
          gre: "Not required",
          papers: "Comprehensive research proposal with formal written endorsement by a HEP Vaud professor",
          references: "Two confidential letters of reference from home university faculty"
        },
        desc: "Prestigious federal scholarship awarded by the Swiss Confederation to foreign researchers pursuing doctoral or postdoctoral research in Lausanne."
      },
      {
        id: 1343,
        title: "Master of Science in Special Education & Inclusive Pedagogy (MScE)",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://www.hepl.ch/fr/accueil/formation/masters.html",
        funding: "Cantonal study grants (Bourses d'études de l'État de Vaud) available",
        status: "Open for admissions",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "150 CHF",
        tuition: "500 CHF/semester",
        requirements: {
          gpa: "Bachelor's in Education, Psychology, or Special Needs Education",
          ielts: "French C1 proficiency (DALF C1)",
          gre: "Not required",
          papers: "Motivation statement demonstrating commitment to inclusive education and neurodiversity",
          references: "Academic reference letter"
        },
        desc: "Postgraduate master's degree training pedagogical specialists in neurodiversity, learning difficulties, classroom inclusion, and educational intervention design."
      },
      {
        id: 1344,
        title: "Digital Learning & Educational Technology Research Laboratory Assistantship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        type: "Research",
        source: "https://www.hepl.ch/fr/accueil/recherche.html",
        funding: "Part-time scientific collaborator salary (approx. 45,000 CHF/year for 50% role)",
        status: "Active research appointment",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "0 CHF",
        tuition: "N/A (salaried research staff)",
        requirements: {
          gpa: "Master's in Educational Technology, Human-Computer Interaction, or Computer Science",
          ielts: "French B2 and English B2/C1",
          gre: "Not required",
          papers: "Demonstrated skills in digital game-based learning, VR in classrooms, or learning analytics",
          references: "Academic laboratory director recommendation"
        },
        desc: "Applied research post investigating the integration of artificial intelligence tools, digital literacy, and computational thinking in Swiss primary and secondary curricula."
      },
      {
        id: 1345,
        title: "Vaud Cantonal Schools Clinical Pedagogical Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Internship",
        source: "https://www.hepl.ch/fr/accueil/formation/stages.html",
        funding: "Paid practical training allowance provided by the Department of Education (DFJC)",
        status: "Annual practical cohort",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "0 CHF",
        tuition: "Included in semester matriculation",
        requirements: {
          gpa: "Enrolled in HEP Vaud Master's program in good standing",
          ielts: "DALF C1 French certification",
          gre: "Not required",
          papers: "Clean criminal record certificate and health declaration",
          references: "Pedagogical mentor approval"
        },
        desc: "Field-based teaching practicum in Vaud public schools mastering classroom management, differentiated instruction, and educational assessment."
      },
      {
        id: 1346,
        title: "Postdoctoral Fellowship in Didactics of Sciences & Environmental Education",
        subject: "environment",
        subjects: ["environment", "social-sciences", "biology"],
        type: "Fellowship",
        source: "https://www.hepl.ch/fr/accueil/recherche/unites-de-recherche.html",
        funding: "Salaried postdoctoral contract (85,000–95,000 CHF/year)",
        status: "Open competition",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "0 CHF",
        tuition: "0 CHF (salaried academic researcher)",
        requirements: {
          gpa: "PhD in Science Didactics, Environmental Science Education, or Curriculum Studies",
          ielts: "Proficiency in French and English",
          gre: "Not applicable",
          papers: "Demonstrated track record of publications in scientific didactics journals",
          references: "Three academic reference letters"
        },
        desc: "Two-year postdoctoral appointment examining climate change education, critical thinking development, and experimental science inquiry in schooling."
      },
      {
        id: 1347,
        title: "Master of Advanced Studies (MAS) in School Management & Educational Leadership",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        type: "Master's",
        source: "https://www.hepl.ch/fr/accueil/formation/formation-continue.html",
        funding: "Institutional and cantonal professional development subsidies available",
        status: "Admissions open",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        fee: "150 CHF",
        tuition: "7,500 CHF for entire 60 ECTS executive curriculum",
        requirements: {
          gpa: "Master's degree or equivalent with at least 5 years of professional educational experience",
          ielts: "French C1 level",
          gre: "Not required",
          papers: "Professional portfolio and institutional vision statement",
          references: "School director recommendation letter"
        },
        desc: "Executive master's program preparing school administrators and educational leaders in institutional governance, change management, and educational law."
      }
    ],
    researchers: [
      {
        id: 594,
        name: "Dr. Bernard Schneuwly",
        title: "Affiliated Professor of Language Didactics & Educational Sciences",
        subject: "social-sciences",
        topics: ["Didactics of French", "Vygotskian Psychology", "Writing Development", "Curriculum History"],
        source: "https://www.hepl.ch/fr/accueil/recherche.html",
        summary: "Dr. Schneuwly is an internationally cited authority on language didactics, cultural-historical psychology, and the didactic transposition of literary concepts."
      },
      {
        id: 595,
        name: "Dr. Philippe Losego",
        title: "Professor of Sociology of Education & Institutional Analysis",
        subject: "social-sciences",
        topics: ["Sociology of Schooling", "Educational Inequalities", "Teacher Professionalization", "Social Policy"],
        source: "https://www.hepl.ch/fr/accueil/recherche.html",
        summary: "Dr. Losego leads research on the sociology of pedagogical institutions, social stratification in Swiss schools, and educational reform dynamics."
      },
      {
        id: 596,
        name: "Dr. Catherine Audrin",
        title: "Professor of Quantitative Methods & Educational Psychology",
        subject: "social-sciences",
        topics: ["Learning Psychology", "Cognitive Assessment", "Quantitative Educational Modeling", "Teacher Well-Being"],
        source: "https://www.hepl.ch/fr/accueil/recherche.html",
        summary: "Dr. Audrin investigates the cognitive and emotional predictors of student success, psychometrics, and quantitative evaluation of pedagogical interventions."
      }
    ]
  }
];
