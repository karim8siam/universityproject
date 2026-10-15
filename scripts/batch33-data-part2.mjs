/**
 * Batch 33 - Part 2: Universities 11 to 20 (Total Unis 422 to 431)
 * Italy (3), USA (4), UK (3)
 * Opp IDs: 2958 to 3027 (70 opportunities)
 * Faculty IDs: 1287 to 1316 (30 faculty members)
 */

export const batch33Part2Universities = [
  // 11. Italy: IAAD. Istituto d'Arte Applicata e Design
  {
    institution: "IAAD. Istituto d'Arte Applicata e Design",
    shortName: "IAAD Italy",
    slug: "iaad-istituto-d-arte-applicata-e-design",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Turin & Bologna, Italy",
    website: "https://www.iaad.it",
    sourceRow: 472,
    headline: "IAAD: Transportation Design, Sustainable Mobility & Creative Communication Guide",
    overview: "IAAD. Istituto d'Arte Applicata e Design is one of Italy's premier higher education institutes for design, celebrated internationally for Europe's leading Transportation and Mobility Design master's programs in Turin, the historic capital of automotive styling.",
    description: "Verified master's programs, automotive styling fellowships, and international design admissions guide for IAAD in Turin and Bologna, Italy.",
    heroEyebrow: "Italian Higher Institute for Design · Turin & Bologna Campuses",
    tuitionText: "Tuition averages €8,500 to €15,500 per academic year depending on undergraduate or master's program. Early-bird merit scholarships, partner design studio awards, and regional DSU Piemonte housing bursaries are available.",
    admissions: {
      masters: "Bachelor's degree or equivalent (minimum 180 ECTS) in Industrial Design, Architecture, Engineering, or Visual Communication.",
      phd: "Not offering independent doctoral degrees; post-master creative residencies and studio apprenticeships available.",
      language: "English B2 (IELTS 6.0+ or TOEFL iBT 78+) for English-taught master's tracks, or Italian B2 for Italian-taught diplomas.",
      proposal: "Comprehensive design portfolio demonstrating 10-15 conceptual sketches, 3D digital renderings, clay/foam models, or digital design studies.",
      appFee: "€150 non-refundable application and portfolio assessment fee.",
      documents: "Certified academic transcripts, degree certificate, portfolio of works, motivation letter, and two academic/professional recommendations."
    },
    opportunities: [
      {
        id: 2958,
        title: "IAAD Italian Design Talent & Future Mobility Scholarship",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        funding: "€3,000 to €7,500 tuition deduction",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€150 application fee",
        tuition: "Subsidizes annual master's tuition fees",
        source: "https://www.iaad.it/en/admissions/scholarships/",
        desc: "Competitive merit scholarship awarded by IAAD and partner automotive design houses to outstanding creative talents enrolling in Transportation Design or Digital Communication.",
        requirements: {
          gpa: "Minimum 75% or equivalent in undergraduate design studies",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "High-caliber creative portfolio demonstrating automotive or product sketching proficiency",
          references: "Two academic or industry design references"
        }
      },
      {
        id: 2959,
        title: "Master of Arts in Transportation & Sustainable Mobility Design",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        funding: "Industry-sponsored studio projects with Ferrari, Pininfarina, and Italdesign",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€150 application fee",
        tuition: "€15,200 per academic year",
        source: "https://www.iaad.it/en/masters/transportation-design/",
        desc: "Renowned master's degree in Turin preparing car designers in exterior styling, interior UX, electric powertrain architecture packaging, and aerodynamic clay modeling.",
        requirements: {
          gpa: "Undergraduate degree in Industrial Design, Mechanical Engineering, or Architecture",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Design portfolio showing vehicle concept development, proportions, and digital rendering",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 2960,
        title: "Master of Arts in Digital Communication & Strategic Brand Design",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "Tuition reductions for top portfolio submissions",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "€150 application fee",
        tuition: "€13,500 per academic year",
        source: "https://www.iaad.it/en/masters/communication-design/",
        desc: "Specialized postgraduate program in creative direction, digital storytelling, interactive brand identity, and multimodal campaign architecture.",
        requirements: {
          gpa: "Bachelor's degree in Graphic Design, Marketing, Communication, or Arts",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Visual portfolio of branding, typography, or multimedia digital campaigns",
          references: "Two academic or creative director references"
        }
      },
      {
        id: 2961,
        title: "Turin Automotive Ergonomics & Human-Vehicle Interface Lab Project",
        type: "Research",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "€14,000 project grant support",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled master's students",
        tuition: "Industry laboratory sponsored",
        source: "https://www.iaad.it",
        desc: "Practical studio research initiative investigating holographic heads-up displays, cockpit tactile controls, and augmented reality navigation in autonomous cars.",
        requirements: {
          gpa: "Enrolled in IAAD Transportation Design master's with distinction grades",
          ielts: "English B2",
          gre: "Not required",
          papers: "Demonstrated skills in Alias AutoStudio, Blender, or Unity UI prototyping",
          references: "Studio master recommendation"
        }
      },
      {
        id: 2962,
        title: "Italian Style Studio & Motor Valley Design Apprenticeship",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        funding: "€900 per month industry stipend for 6-month studio placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated into accredited degree curriculum",
        source: "https://www.iaad.it/en/career-service/",
        desc: "Design apprenticeship placing students directly inside Turin and Bologna design studios (Italdesign, Bertone, Ducati, Magneti Marelli).",
        requirements: {
          gpa: "Satisfactory completion of semester 1 master's coursework",
          ielts: "Working English; basic Italian conversational skills",
          gre: "Not required",
          papers: "Updated professional portfolio and resume",
          references: "IAAD Career Service endorsement"
        }
      },
      {
        id: 2963,
        title: "Sustainable Materials & Future Mobility Creative Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        funding: "€32,000 annual creative fellowship grant",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Studio residency appointment",
        source: "https://www.iaad.it/en/careers/",
        desc: "One-year creative residency researching circular biopolymers, lightweight structural textiles, and carbon-neutral cabin aesthetics for micro-mobility vehicles.",
        requirements: {
          gpa: "Master's degree in Industrial Design, Materials Design, or Architecture",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Portfolio of sustainable materials experiments and 3-page research proposal",
          references: "Two letters of recommendation from design educators"
        }
      },
      {
        id: 2964,
        title: "Studio Master & Lead Lecturer in Transportation Exterior Styling",
        type: "Job",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        funding: "€55,000 - €70,000 per annum commensurate with senior industry experience",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Full-time academic studio leadership role",
        source: "https://www.iaad.it/en/careers/",
        desc: "Senior studio master leading master's ateliers in transportation design in Turin, mentoring students on concept cars and corporate sponsored briefs.",
        requirements: {
          gpa: "Degree in Automotive Design / Transportation Design",
          ielts: "English fluency; Italian language proficiency",
          gre: "Not required",
          papers: "Minimum 7 years proven senior vehicle design experience in automotive OEMs or styling centers",
          references: "Three industry references and extensive professional portfolio"
        }
      }
    ],
    researchers: [
      {
        id: 1287,
        name: "Matteo Piguzzi",
        title: "Coordinator of Transportation Design & Senior Automotive Stylist",
        subject: "arts-design",
        topics: ["Vehicle Exterior Styling", "Mobility Concepts", "Digital Surfacing", "Aerodynamic Form"],
        source: "https://www.iaad.it/en/faculty/",
        summary: "Matteo Piguzzi leads the Transportation Design department at IAAD Turin, guiding advanced styling briefs with major European automotive brands."
      },
      {
        id: 1288,
        name: "Andrea Rosati",
        title: "Head of Product & Sustainable Material Design",
        subject: "arts-design",
        topics: ["Circular Design", "Bio-materials", "Ergonomics", "Industrial Manufacturing"],
        source: "https://www.iaad.it/en/faculty/",
        summary: "Andrea Rosati directs sustainable industrial design studies, focusing on circular material lifecycles, user ergonomics, and advanced consumer electronics styling."
      },
      {
        id: 1289,
        name: "Laura Milani",
        title: "Director Emeritus & Creative Strategist",
        subject: "arts-design",
        topics: ["Creative Economy", "Design Thinking", "Urban Regeneration", "Visual Branding"],
        source: "https://www.iaad.it/en/faculty/",
        summary: "Laura Milani is a prominent cultural strategist and design educator who spearheaded IAAD's international expansion and creative industrial partnerships."
      }
    ]
  },

  // 12. Italy: Università degli Studi di Foggia
  {
    institution: "Università degli Studi di Foggia",
    shortName: "UniFg",
    slug: "universita-degli-studi-di-foggia",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Foggia, Apulia, Italy",
    website: "https://www.unifg.it",
    sourceRow: 541,
    headline: "Università di Foggia: Agrifood Tech, Precision Agriculture, Economics & Law Guide",
    overview: "The University of Foggia (Università degli Studi di Foggia) is a prominent public university in southern Italy, internationally recognized as a center of excellence for precision agriculture, Mediterranean agrifood biotechnology, nutritional sciences, and criminal law.",
    description: "Verified graduate admissions, PhD research fellowships, and agrifood guides for Università degli Studi di Foggia in Apulia, Italy.",
    heroEyebrow: "Italian Public University · Mediterranean Agrifood Center",
    tuitionText: "Tuition is income-tiered under Italy's ISEE indicator, typically ranging from €0 (no-tax area for ISEE under €22,000) up to approximately €1,900 per year. Fully funded doctoral scholarships funded by MUR and PNRR provide €16,243 per year tax-free.",
    admissions: {
      masters: "Laurea triennale (three-year Bachelor's degree) or recognized foreign equivalent with at least 180 ECTS in agricultural sciences, economics, or biology.",
      phd: "Laurea Magistrale (Master's degree) with minimum final grade of 100/110 and successful performance in the public national competitive entrance exam (concorso).",
      language: "Italian B2 for Italian-taught degrees; English B2 (IELTS 6.0+ or CEFR B2 certificate) for English-taught graduate tracks.",
      proposal: "Doctoral applicants submit a 5-page research project proposal in Italian or English detailing thesis framework and expected milestones.",
      appFee: "€30 to €50 public competition registration fee.",
      documents: "Legalized academic diploma, official transcript of exams, Europass CV, research project proposal, and identity document."
    },
    opportunities: [
      {
        id: 2965,
        title: "UniFg International Student Merit & Regional ADISU Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "€6,500 to €8,000 annually plus free university canteen and accommodation",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero application fee",
        tuition: "Full tuition exemption (€0) under ADISU Puglia regional welfare",
        source: "https://www.unifg.it/it/internazionale/opportunita-e-servizi/studenti-internazionali",
        desc: "Regional welfare and merit scholarship administered via ADISU Puglia for deserving national and international students enrolled at the University of Foggia.",
        requirements: {
          gpa: "Equivalent of Italian 85/110 or higher in undergraduate coursework",
          ielts: "IELTS 6.0 or Italian B2",
          gre: "Not required",
          papers: "Family economic documentation (ISEE Parificato) and academic transcript",
          references: "Not required for regional scholarship"
        }
      },
      {
        id: 2966,
        title: "Master of Science in Food Science and Precision Technology",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "engineering"],
        funding: "Zero tuition under ISEE thresholds; Erasmus+ mobility grants",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "€30 pre-evaluation fee",
        tuition: "€0 to €1,850 per year based on household income",
        source: "https://www.unifg.it/it/didattica/corsi-di-laurea/lauree-magistrali",
        desc: "Interdisciplinary master's degree exploring precision viticulture, olive oil biotechnology, food safety diagnostics, and sustainable processing technologies.",
        requirements: {
          gpa: "Bachelor's degree in Agricultural Science, Food Technology, or Chemistry",
          ielts: "English B2 or Italian B2",
          gre: "Not required",
          papers: "Academic transcript and curriculum vitae",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2967,
        title: "Ph.D. in Agrifood Sciences & Mediterranean Ecosystems Fellowship",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "€16,243 annual tax-free stipend with 50% increase for research abroad",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "€30 concorso fee",
        tuition: "€0 tuition (fully funded doctoral appointment)",
        source: "https://www.unifg.it/it/ricerca/dottorati-di-ricerca",
        desc: "Three-year doctoral research fellowship funded through PNRR and the Ministry of Universities, investigating climate-resilient crop genomics and Mediterranean soil microbiomes.",
        requirements: {
          gpa: "Master's degree in Agronomy, Biology, or Environmental Biotechnology (grade 100/110+)",
          ielts: "English B2 certificate",
          gre: "Not required",
          papers: "5-page original doctoral research proposal and master's thesis abstract",
          references: "Two letters of recommendation from professors"
        }
      },
      {
        id: 2968,
        title: "Apulian Precision Viticulture & Drone Remote Sensing Project",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "€15,000 project research grant",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "Zero tuition",
        source: "https://www.unifg.it/it/ricerca",
        desc: "Field-based agricultural research tracking multispectral imagery, irrigation efficiency, and grapevine pathogen early detection using autonomous drones across the Tavoliere plain.",
        requirements: {
          gpa: "Master's student or graduate in Agricultural Engineering or Remote Sensing",
          ielts: "Working English or Italian",
          gre: "Not required",
          papers: "Experience in GIS mapping, multispectral imaging, or sensor calibration",
          references: "Department supervisor recommendation"
        }
      },
      {
        id: 2969,
        title: "Mediterranean Olive Oil Quality & Food Biotech Practicum",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "€800 per month regional internship allowance for 6-month placement",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward Laurea Magistrale",
        source: "https://www.unifg.it/it/didattica/tirocini-e-placement",
        desc: "Practical laboratory internship working with certified food quality testing centers and major olive oil consortiums in southern Italy.",
        requirements: {
          gpa: "Completed at least 30 ECTS in food technology coursework",
          ielts: "Italian B1/B2 and basic English",
          gre: "Not required",
          papers: "CV and laboratory safety certification",
          references: "Internship tutor approval"
        }
      },
      {
        id: 2970,
        title: "UniFg Mediterranean Agrifood Postdoctoral Research Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "€28,000 - €34,000 annual research grant (Assegno di Ricerca)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Salaried postdoctoral appointment",
        source: "https://www.unifg.it/it/ricerca/assegni-di-ricerca",
        desc: "Two-year postdoctoral research grant focusing on fermentation biotechnology, probiotic functional foods, and waste valorization in the olive oil and dairy sectors.",
        requirements: {
          gpa: "PhD in Food Science, Microbiology, or Agricultural Chemistry",
          ielts: "Scholarly English publication record",
          gre: "Not required",
          papers: "Three peer-reviewed journal publications and 4-page research plan",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2971,
        title: "Tenure-Track Assistant Professorship (RTD-B) in Agronomy & Crop Systems",
        type: "Job",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "€42,000 - €50,000 gross annual salary under Italian university scales",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "€30 concorso fee",
        tuition: "Full academic faculty appointment",
        source: "https://www.unifg.it/it/ateneo/concorsi-e-selezioni",
        desc: "Three-year tenure-track assistant professor position (RTD-B) in the Department of Agricultural, Food, Natural resources and Engineering (DAFNE).",
        requirements: {
          gpa: "PhD in Agronomy or related field with at least three years postdoctoral research",
          ielts: "Fluency in Italian and English",
          gre: "Not required",
          papers: "Strong publication track record in Q1 agronomy journals",
          references: "Three academic reference contacts and full scientific dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1290,
        name: "Prof. Dr. Agostino Sevi",
        title: "Full Professor & Director of Department DAFNE",
        subject: "biology",
        topics: ["Animal Production", "Milk Quality", "Mediterranean Livestock", "Agrifood Sustainability"],
        source: "https://www.unifg.it/ugov/person/1460",
        summary: "Prof. Sevi directs the DAFNE department, researching dietary impacts on milk quality, environmental sustainability of livestock, and Mediterranean food systems."
      },
      {
        id: 1291,
        name: "Prof. Dr. Rosaria Viscecchia",
        title: "Full Professor of Agricultural Economics & Policy",
        subject: "social-sciences",
        topics: ["Rural Development", "Agricultural Economics", "CAP Policy", "Food Security"],
        source: "https://www.unifg.it/ugov/person/1572",
        summary: "Prof. Viscecchia specializes in European Common Agricultural Policy (CAP) economics, rural community development, and sustainable agrifood supply chains."
      },
      {
        id: 1292,
        name: "Prof. Dr. Giancarlo Colelli",
        title: "Full Professor of Post-Harvest Technology",
        subject: "engineering",
        topics: ["Postharvest Handling", "Fresh-Cut Produce", "Modified Atmosphere Packaging", "Food Quality Sensors"],
        source: "https://www.unifg.it/ugov/person/1138",
        summary: "Prof. Colelli is an internationally recognized expert in post-harvest preservation technologies, modified atmosphere packaging, and non-destructive fruit quality sensors."
      }
    ]
  },

  // 13. Italy: Venice International University (VIU)
  {
    institution: "Venice International University",
    shortName: "VIU Venice",
    slug: "venice-international-university",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Venice, Italy",
    website: "https://www.univiu.org",
    sourceRow: 557,
    headline: "Venice International University: Globalization, Sustainability & Cultural Heritage Guide",
    overview: "Venice International University (VIU) is a prestigious global consortium of 20 world-leading universities located on the island of San Servolo in Venice, offering high-level interdisciplinary programs in environmental sustainability, global governance, and digital heritage.",
    description: "Verified graduate courses, international sustainability fellowships, and admissions guide for Venice International University on San Servolo.",
    heroEyebrow: "Global University Consortium · San Servolo Island, Venice",
    tuitionText: "Tuition is fully waived for students and doctoral candidates enrolled at any of VIU's 20 member institutions (e.g., Boston College, Duke, Tsinghua, Ca' Foscari). External international participants pay course fees ranging from €1,200 to €3,500 with accommodation bursaries available.",
    admissions: {
      masters: "Enrollment in or completion of a recognized graduate or master's program at a partner university, or accredited foreign Bachelor's/Master's with strong academic standing.",
      phd: "Active PhD candidacy in sustainability, social sciences, or humanities, with an approved research abstract.",
      language: "Fluent English (IELTS 6.5+, TOEFL iBT 88+, or proof of English-medium university instruction).",
      proposal: "A 1-2 page statement explaining motivation, connection to Venice's ecological challenges, and interdisciplinary focus.",
      appFee: "Zero application fee for students from member universities; €50 for open summer institutes.",
      documents: "Official academic transcript, curriculum vitae, motivation statement, and one faculty letter of recommendation."
    },
    opportunities: [
      {
        id: 2972,
        title: "VIU Globalization Program Excellence & Accommodation Scholarship",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "€3,500 to €5,000 fellowship covering full residential accommodation on San Servolo",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "Full tuition waiver at VIU",
        source: "https://www.univiu.org/study/globalization-program/admissions",
        desc: "Merit-based residential scholarship for graduate and advanced undergraduate students participating in the semester-long Globalization Program on environmental governance in Venice.",
        requirements: {
          gpa: "Minimum 3.3 GPA or equivalent 80%+ marks in home university studies",
          ielts: "IELTS 6.5 or fluent English",
          gre: "Not required",
          papers: "Motivation statement detailing relevance of Venice ecosystem to academic goals",
          references: "One letter of recommendation from home university professor"
        }
      },
      {
        id: 2973,
        title: "Master's Intensive Program in Environmental Management & Sustainable Energy",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "Tuition subsidies and San Servolo campus residency grants",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee for consortium students",
        tuition: "€0 for member universities / €2,800 external",
        source: "https://www.univiu.org/study/sustainable-logistics",
        desc: "Intensive graduate curriculum examining maritime emissions, lagoon hydrodynamic defense (MOSE barrier), circular economy, and Mediterranean green energy transitions.",
        requirements: {
          gpa: "Enrolled in relevant master's program in engineering, environmental science, or economics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Curriculum vitae and academic transcript",
          references: "Faculty advisor approval"
        }
      },
      {
        id: 2974,
        title: "VIU International PhD Academy in Climate Change & Cultural Heritage",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "Fully covered residency, travel allowance, and €1,500 research grant",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition (fully sponsored PhD Academy)",
        source: "https://www.univiu.org/study/phd-academy",
        desc: "Competitive week-long intensive doctoral academy gathering PhD candidates from Europe, Asia, and the Americas to address sea level rise, heritage conservation, and climate adaptation.",
        requirements: {
          gpa: "Enrolled in an accredited PhD program in climate sciences, humanities, or engineering",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Abstract of doctoral dissertation (approx. 500 words) and CV",
          references: "Letter of support from doctoral supervisor"
        }
      },
      {
        id: 2975,
        title: "Venice Lagoon Ecological Modeling & Tidal Resilience Project",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "physics"],
        funding: "€16,000 project research stipend",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "Consortium funded",
        source: "https://www.univiu.org/research",
        desc: "Collaborative research project analyzing tidal wave dynamics, sea grass restoration, and the ecological impact of the MOSE flood barriers in the Venetian Lagoon.",
        requirements: {
          gpa: "Master's or doctoral standing in oceanography, hydrology, or ecological engineering",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Prior experience with hydrodynamic modeling (SWAN / Delft3D)",
          references: "Two academic referee letters"
        }
      },
      {
        id: 2976,
        title: "UNESCO & Venetian Cultural Heritage Preservation Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "€850 per month placement stipend for 12-week archival/field practicum",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated into VIU Globalization Program",
        source: "https://www.univiu.org/study/internships",
        desc: "Supervised practicum working alongside Venice civic preservation bodies, UNESCO regional offices, and digital archiving laboratories.",
        requirements: {
          gpa: "Completed Globalization Program courses at VIU with high standing",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Resume and one-page statement on cultural preservation ethics",
          references: "VIU Dean endorsement"
        }
      },
      {
        id: 2977,
        title: "VIU Sustainable Urbanism & Global Governance Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€38,000 annual fellowship stipend with San Servolo faculty residence",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Postdoctoral research residency",
        source: "https://www.univiu.org/research/fellowships",
        desc: "One-year postdoctoral appointment leading seminars and advancing publications in coastal resilience, climate diplomacy, and international sustainability governance.",
        requirements: {
          gpa: "PhD in Urban Planning, Political Science, Environmental Law, or Economics",
          ielts: "Excellent English publication record",
          gre: "Not required",
          papers: "Curriculum vitae, two journal articles, and a 3-page interdisciplinary course syllabus",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2978,
        title: "Visiting Professorship in Global Environmental Policy & Ethics",
        type: "Job",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "€25,000 semester honorarium plus on-campus island accommodation",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero fee",
        tuition: "Visiting faculty semester appointment",
        source: "https://www.univiu.org/about/work-with-us",
        desc: "Semester-long visiting faculty role teaching two interdisciplinary undergraduate/graduate seminars to international cohort on San Servolo.",
        requirements: {
          gpa: "Tenured or tenure-track faculty standing at a recognized university",
          ielts: "Native or near-native English fluency",
          gre: "Not required",
          papers: "Extensive teaching record and international publications in environmental policy",
          references: "Faculty dean recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1293,
        name: "Ambassador Umberto Vattani",
        title: "President of Venice International University",
        subject: "social-sciences",
        topics: ["Diplomatic History", "European Integration", "International Governance", "Cultural Diplomacy"],
        source: "https://www.univiu.org/about-viu/governance",
        summary: "Ambassador Vattani has served as Secretary General of the Italian Ministry of Foreign Affairs and champions international academic collaboration on San Servolo."
      },
      {
        id: 1294,
        name: "Prof. Dr. Ilda Mannino",
        title: "Director of the TEN Program on Sustainability",
        subject: "environment",
        topics: ["Circular Economy", "Sustainable Tourism", "Lagoon Ecology", "Environmental Policy"],
        source: "https://www.univiu.org/ten-program",
        summary: "Prof. Mannino directs sustainability initiatives at VIU, focusing on circular economy modeling, sustainable tourism in fragile ecosystems, and environmental training."
      },
      {
        id: 1295,
        name: "Prof. Dr. Carmelo Mesa-Lago",
        title: "Distinguished Visiting Professor of International Economics",
        subject: "social-sciences",
        topics: ["Development Economics", "Social Security Systems", "Latin American Economy", "Comparative Systems"],
        source: "https://www.univiu.org/faculty",
        summary: "Prof. Mesa-Lago is a renowned economist specializing in global social security systems, comparative health economics, and development policy."
      }
    ]
  },

  // 14. USA: University of California, Davis (UC Davis)
  {
    institution: "University of California, Davis",
    shortName: "UC Davis",
    slug: "university-of-california-davis",
    countryId: "usa",
    countryLabel: "United States",
    location: "Davis, California, United States",
    website: "https://www.ucdavis.edu",
    sourceRow: 1061,
    headline: "UC Davis: Agriculture, Environmental Sciences, Veterinary & Biological Engineering Guide",
    overview: "The University of California, Davis (UC Davis) is a world-renowned top-tier public research university (R1) ranked #1 in the United States for agricultural sciences and veterinary medicine, with globally preeminent programs in environmental science, biological systems engineering, and food innovation.",
    description: "Verified graduate admissions, fully funded doctoral fellowships, and STEM research guides for UC Davis in California.",
    heroEyebrow: "California Tier-1 Public Research University · World #1 in Agriculture",
    tuitionText: "Doctoral students in STEM typically receive full funding guarantees covering 100% of California resident or non-resident tuition and health insurance, plus annual living stipends of $34,000 to $42,000 through Teaching Assistantships (TA), Graduate Student Researcher (GSR) appointments, and fellowships.",
    admissions: {
      masters: "Bachelor's degree from an accredited institution with minimum 3.0 cumulative GPA (on a 4.0 scale) in undergraduate coursework.",
      phd: "Bachelor's or Master's degree with strong research background, minimum 3.2+ GPA, and compelling faculty research alignment.",
      language: "TOEFL iBT 80 minimum (100+ recommended for TA appointments) or IELTS Academic 7.0 overall.",
      proposal: "Comprehensive 2-page Statement of Purpose and Personal History and Diversity Statement detailing specific research goals and laboratory matches.",
      appFee: "$135 for domestic applicants / $155 for international applicants via the UC Davis Graduate Studies portal.",
      documents: "Official university transcripts, statement of purpose, personal history statement, curriculum vitae, and three letters of recommendation."
    },
    opportunities: [
      {
        id: 2979,
        title: "UC Davis Provost's First-Year Graduate Fellowship & Dean's Prize",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "Full tuition waiver plus $36,000 annual living stipend",
        status: "Open",
        deadline: "2027-01-05",
        deadlineText: "January 5, 2027",
        fee: "$155 international application fee",
        tuition: "100% tuition and health insurance remission",
        source: "https://grad.ucdavis.edu/internal-fellowships",
        desc: "Prestigious university-wide fellowship awarded to incoming doctoral students of exceptional academic promise entering biological sciences, agriculture, or engineering.",
        requirements: {
          gpa: "Minimum 3.7 GPA in undergraduate and prior graduate work",
          ielts: "TOEFL 100+ or IELTS 7.5",
          gre: "Optional or waived by most graduate groups",
          papers: "Demonstrated prior research publications or undergraduate thesis",
          references: "Three outstanding academic letters of recommendation"
        }
      },
      {
        id: 2980,
        title: "Ph.D. in Biological Systems Engineering (Fully Funded)",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "$38,000 annual stipend plus full tuition and health benefits for 5 years",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$155 application fee",
        tuition: "Full tuition covered via GSR/TA appointment",
        source: "https://bae.ucdavis.edu/graduate",
        desc: "Tier-1 doctoral program addressing global challenges at the intersection of biology and engineering, including precision robotics, agricultural automation, and bioprocessing.",
        requirements: {
          gpa: "Bachelor's or Master's in Engineering, Biological Sciences, or Physical Sciences with 3.2+ GPA",
          ielts: "TOEFL 90+ or IELTS 7.0",
          gre: "Not required",
          papers: "Statement of purpose detailing interest in precision agriculture or renewable bioproducts",
          references: "Three academic reference letters confirming engineering research capability"
        }
      },
      {
        id: 2981,
        title: "Master of Science in Environmental Policy and Management (EPM)",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "Merit-based departmental fellowships and research assistantships",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$155 application fee",
        tuition: "$17,500 CA resident / $32,600 non-resident per year",
        source: "https://epm.ucdavis.edu",
        desc: "Interdisciplinary professional master's degree training environmental leaders in California water rights, climate resilience policy, air quality governance, and GIS analysis.",
        requirements: {
          gpa: "Bachelor's degree with minimum 3.0 GPA in physical, biological, or social sciences",
          ielts: "TOEFL 85 or IELTS 7.0",
          gre: "Not required",
          papers: "Statement of purpose demonstrating passion for applied environmental policy",
          references: "Three letters of recommendation"
        }
      },
      {
        id: 2982,
        title: "UC Davis World Food Center & Climate-Smart Agriculture Assistantship",
        type: "Research",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "$35,000 annual Graduate Student Researcher (GSR) appointment",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero fee for enrolled graduate students",
        tuition: "100% tuition remission covered by grant",
        source: "https://worldfoodcenter.ucdavis.edu",
        desc: "Laboratory and field research measuring carbon fluxes, soil organic matter sequestration, and drought-tolerant crop yields across California's Central Valley.",
        requirements: {
          gpa: "Enrolled in UC Davis graduate program with excellent academic standing",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Hands-on experience in soil biogeochemistry, eddy covariance, or plant physiology",
          references: "PI recommendation letter"
        }
      },
      {
        id: 2983,
        title: "California Air Resources Board (CARB) Environmental Analysis Practicum",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "$28/hour for 16-week public environmental agency fellowship",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Curricular practical training credit",
        source: "https://icc.ucdavis.edu",
        desc: "Paid policy and environmental engineering internship in nearby Sacramento analyzing vehicle emissions, zero-emission grid modeling, and climate regulations.",
        requirements: {
          gpa: "Graduate standing in EPM, Civil & Environmental Engineering, or Atmospheric Science",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Resume, technical writing sample, and unofficial transcript",
          references: "Faculty advisor confirmation"
        }
      },
      {
        id: 2984,
        title: "UC Davis Center for Plant Biology Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "$66,500 - $74,000 annual salary under UC Postdoctoral Scholar contract (UAW)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral appointment",
        source: "https://plantbiology.ucdavis.edu",
        desc: "Two-year postdoctoral fellowship researching CRISPR/Cas genome editing, drought signaling cascades, and epigenetic adaptation in crop species.",
        requirements: {
          gpa: "PhD in Plant Biology, Genetics, Molecular Biology, or Biochemistry",
          ielts: "Strong record of peer-reviewed publications",
          gre: "Not required",
          papers: "Three first-authored publications in top biology journals and a 3-page research proposal",
          references: "Three letters of recommendation"
        }
      },
      {
        id: 2985,
        title: "Tenure-Track Assistant Professor in Agricultural Robotics & Automation",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "$105,000 - $130,000 9-month base salary plus summer research salary & start-up package",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Full-time tenure-track academic faculty position",
        source: "https://recruit.ucdavis.edu",
        desc: "Faculty appointment in the Department of Biological and Agricultural Engineering, leading a research group in autonomous field robots, AI computer vision, and harvesting automation.",
        requirements: {
          gpa: "PhD in Robotics, Electrical Engineering, Mechanical Engineering, or Agricultural Engineering",
          ielts: "Fluent communication in English",
          gre: "Not required",
          papers: "Outstanding publication record in robotics/automation and clear plan for USDA/NSF funding",
          references: "Three reference letters, statement of contributions to diversity, and teaching philosophy"
        }
      }
    ],
    researchers: [
      {
        id: 1296,
        name: "Dr. Pamela Ronald",
        title: "Distinguished Professor of Plant Pathology & Genome Center",
        subject: "biology",
        topics: ["Crop Genetics", "Infectious Disease Resistance", "Submergence-Tolerant Rice", "Food Security"],
        source: "https://biology.ucdavis.edu/people/pamela-ronald",
        summary: "Dr. Ronald is a member of the National Academy of Sciences and Wolf Prize laureate who engineered submergence-tolerant Sub1 rice, transforming food security for millions."
      },
      {
        id: 1297,
        name: "Dr. Kyaw Tha Paw U",
        title: "Distinguished Professor of Atmospheric Science & Biometeorology",
        subject: "environment",
        topics: ["Turbulent Transport", "Canopy Micrometeorology", "Eddy Covariance", "Climate Modeling"],
        source: "https://lawr.ucdavis.edu/people/faculty/paw-u-kyaw-tha",
        summary: "Dr. Paw U is a leading biometeorologist investigating atmosphere-canopy interactions, turbulent exchange of greenhouse gases, and biophysical climate feedbacks."
      },
      {
        id: 1298,
        name: "Dr. Stavros Vougioukas",
        title: "Professor of Biological & Agricultural Engineering",
        subject: "engineering",
        topics: ["Agricultural Robotics", "Autonomous Harvesters", "Spatial Automation", "Sensor Fusion"],
        source: "https://bae.ucdavis.edu/people/stavros-vougioukas",
        summary: "Dr. Vougioukas designs autonomous machines and robotic coordination systems for specialty crop orchard management, pruning, and fruit harvesting."
      }
    ]
  },

  // 15. USA: University of California, Irvine (UC Irvine)
  {
    institution: "University of California, Irvine",
    shortName: "UC Irvine",
    slug: "university-of-california-irvine",
    countryId: "usa",
    countryLabel: "United States",
    location: "Irvine, California, United States",
    website: "https://uci.edu",
    sourceRow: 1062,
    headline: "UC Irvine: Computer Science, Earth Systems Science, Medicine & Physics Guide",
    overview: "The University of California, Irvine (UC Irvine / UCI) is a prestigious AAU top-tier public research university in Southern California, celebrated for founding the Donald Bren School of Information and Computer Sciences, three Nobel Prizes in chemistry and physics, and pioneering Earth System Science research.",
    description: "Verified graduate admissions, fully funded doctoral fellowships, and research degrees guide for UC Irvine in California.",
    heroEyebrow: "AAU Member · California Top-10 Public Research University",
    tuitionText: "Doctoral students in STEM and informatics receive fully funded packages providing 100% coverage of tuition and student fees, comprehensive UC SHIP health insurance, and guaranteed minimum annual stipends of $36,000 to $44,000 through GSR and TA appointments.",
    admissions: {
      masters: "Bachelor's degree from a recognized institution with minimum cumulative 3.0 GPA in undergraduate studies.",
      phd: "Bachelor's or Master's degree in a relevant discipline with strong research background and minimum 3.2+ GPA.",
      language: "TOEFL iBT 80 minimum (26+ speaking recommended for TA eligibility) or IELTS Academic 7.0 overall (minimum 6.0 each band).",
      proposal: "Statement of Purpose detailing specific research experiences, proposed research directions, and intended faculty advisors.",
      appFee: "$135 for domestic applicants / $155 for international applicants via UCI Graduate Division.",
      documents: "Official academic transcripts, statement of purpose, personal history statement, resume/CV, and three letters of recommendation."
    },
    opportunities: [
      {
        id: 2986,
        title: "UCI Chancellor's Doctoral Fellowship & Eugene Cota-Robles Award",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "Full tuition coverage plus $38,000 annual stipend for up to five years",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "$155 international application fee",
        tuition: "100% tuition and health fee remission",
        source: "https://grad.uci.edu/funding/fellowships-awards/",
        desc: "Prestigious fellowship awarded to top incoming doctoral students in the Donald Bren School of Information and Computer Sciences or School of Physical Sciences.",
        requirements: {
          gpa: "Minimum 3.7 GPA in undergraduate or prior graduate degrees",
          ielts: "TOEFL 100+ or IELTS 7.5",
          gre: "Waived or optional across computer science disciplines",
          papers: "Demonstrated track record of academic excellence and independent research",
          references: "Three compelling academic referee letters"
        }
      },
      {
        id: 2987,
        title: "Ph.D. in Computer Science (Donald Bren School of ICS)",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Fully funded: $39,000 annual stipend + 100% tuition coverage for 5 years",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "$155 application fee",
        tuition: "Full tuition covered via GSR/TA appointment",
        source: "https://www.ics.uci.edu/grad/degrees/phd-cs/",
        desc: "Premier doctoral program conducting research in artificial intelligence, computer vision, cybersecurity, distributed systems, quantum computing, and biomedical informatics.",
        requirements: {
          gpa: "Bachelor's or Master's in Computer Science, Math, or Engineering with 3.3+ GPA",
          ielts: "TOEFL 80 (speaking 26 for TA) or IELTS 7.0",
          gre: "Not required",
          papers: "Research portfolio or publications in machine learning, systems, or algorithms",
          references: "Three academic letters of recommendation"
        }
      },
      {
        id: 2988,
        title: "Master of Science in Earth System Science (ESS)",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "physics"],
        funding: "Tuition support and Graduate Student Researcher (GSR) appointments",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$155 application fee",
        tuition: "$17,200 CA resident / $32,300 non-resident per year",
        source: "https://ess.uci.edu/academics/graduate-program",
        desc: "Pioneering interdisciplinary graduate degree investigating global climate dynamics, cryosphere loss, ocean biogeochemistry, and atmospheric chemistry.",
        requirements: {
          gpa: "BSc in Physics, Chemistry, Earth Science, or Mathematics with minimum 3.0 GPA",
          ielts: "TOEFL 85 or IELTS 7.0",
          gre: "Not required",
          papers: "Statement of purpose matching prospective faculty research group",
          references: "Three letters of recommendation"
        }
      },
      {
        id: 2989,
        title: "UCI Center for Machine Learning & Health Informatics Assistantship",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "biology"],
        funding: "$36,500 annual GSR salary plus tuition remission",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero fee for enrolled graduate students",
        tuition: "100% tuition covered by NIH/NSF grants",
        source: "https://cml.ics.uci.edu",
        desc: "Applied machine learning research developing deep neural architectures for clinical genomics, electronic health record prediction, and medical imaging diagnostics.",
        requirements: {
          gpa: "Enrolled in PhD in Computer Science or Statistics with excellent standing",
          ielts: "Fluency in English",
          gre: "Not required",
          papers: "Proven experience in PyTorch/TensorFlow and clinical dataset manipulation",
          references: "Lab director endorsement"
        }
      },
      {
        id: 2990,
        title: "Silicon Beach & Orange County Tech Industry Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "$45 - $60/hour for 12-week summer software engineering internship",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "CPT curricular credit",
        source: "https://career.uci.edu",
        desc: "Paid software engineering and data science internships with premier technology companies across Irvine and Southern California (Google, Blizzard, Broadcom, Rivian).",
        requirements: {
          gpa: "Enrolled in UCI graduate computer science degree with good academic standing",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Technical resume and GitHub portfolio",
          references: "Academic advisor CPT authorization"
        }
      },
      {
        id: 2991,
        title: "UCI Physical Sciences & Cryosphere Modeling Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "physics"],
        funding: "$67,000 - $75,000 annual salary under UC Postdoctoral contract with healthcare",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral appointment",
        source: "https://ps.uci.edu/research",
        desc: "Two-year postdoctoral fellowship utilizing satellite radar interferometry (InSAR) and climate models to quantify Antarctic and Greenland ice sheet mass balance.",
        requirements: {
          gpa: "PhD in Glaciology, Geophysics, Remote Sensing, or Atmospheric Science",
          ielts: "Exemplary English publication record",
          gre: "Not required",
          papers: "Three peer-reviewed publications and a 3-page research proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2992,
        title: "Tenure-Track Assistant Professor in Artificial Intelligence & Robotics",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "$110,000 - $135,000 9-month base salary plus summer salary and lab startup",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Full-time tenure-track faculty position",
        source: "https://recruit.ap.uci.edu",
        desc: "Probationary tenure-track faculty appointment in the Department of Computer Science, leading research in foundation models, robotic manipulation, and reinforcement learning.",
        requirements: {
          gpa: "PhD in Computer Science, Electrical Engineering, or related field",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Top-tier publications in NeurIPS, ICML, IROS, or RSS and clear funding vision",
          references: "Three reference letters, research statement, and diversity statement"
        }
      }
    ],
    researchers: [
      {
        id: 1299,
        name: "Dr. Pierre Baldi",
        title: "Distinguished Professor of Computer Science & Director of Institute for Genomics and Bioinformatics",
        subject: "computer-science",
        topics: ["Deep Learning Theory", "Bioinformatics", "Cheminformatics", "Computational Neuroscience"],
        source: "https://www.ics.uci.edu/~pfbaldi/",
        summary: "Dr. Baldi is an internationally recognized pioneer in deep learning architectures and bioinformatics, having authored seminal textbooks on neural networks and molecular machine learning."
      },
      {
        id: 1300,
        name: "Dr. Eric Rignot",
        title: "Donald Bren Professor of Earth System Science & NASA JPL Senior Research Scientist",
        subject: "environment",
        topics: ["Glaciology", "Satellite Radar Interferometry", "Ice Sheet Dynamics", "Sea Level Rise"],
        source: "https://faculty.sites.uci.edu/erignot/",
        summary: "Dr. Rignot is an elected member of the National Academy of Sciences whose satellite radar measurements of Greenland and Antarctic glacier melt are benchmark standards in climate science."
      },
      {
        id: 1301,
        name: "Dr. Deva Ramanan",
        title: "Professor of Computer Science & Computer Vision",
        subject: "computer-science",
        topics: ["Computer Vision", "Visual Recognition", "Object Detection", "Machine Perception"],
        source: "https://www.ics.uci.edu/~dramanan/",
        summary: "Dr. Ramanan is an acclaimed authority on computer vision and visual recognition, developing fundamental algorithms for deformable part models and human pose estimation."
      }
    ]
  },

  // 16. USA: University of Colorado Boulder (CU Boulder)
  {
    institution: "University of Colorado Boulder",
    shortName: "CU Boulder",
    slug: "university-of-colorado-boulder",
    countryId: "usa",
    countryLabel: "United States",
    location: "Boulder, Colorado, United States",
    website: "https://www.colorado.edu",
    sourceRow: 1072,
    headline: "CU Boulder: Aerospace, Quantum Physics, Environmental Science & Computing Guide",
    overview: "The University of Colorado Boulder (CU Boulder) is a premier Tier-1 public research institution (R1) celebrated for its five Nobel laureates in physics and chemistry, top-ranked aerospace engineering sciences, JILA quantum research institute, and world-leading climate science at CIRES.",
    description: "Verified graduate admissions, fully funded STEM fellowships, and aerospace research guides for CU Boulder in Colorado.",
    heroEyebrow: "Tier-1 Public Research University · Top NASA Research Contractor",
    tuitionText: "Doctoral students in engineering and physical sciences receive guaranteed full funding packages covering 100% of resident/non-resident tuition and student health insurance, plus annual living stipends of $35,000 to $43,000 through Graduate Research Assistant (GRA) and Graduate Part-Time Instructor (GPTI) positions.",
    admissions: {
      masters: "Bachelor's degree from an accredited institution with minimum 3.0 cumulative undergraduate GPA.",
      phd: "Bachelor's or Master's degree in aerospace, physics, computing, or related STEM field with minimum 3.2+ GPA and strong research credentials.",
      language: "TOEFL iBT 80 minimum (100+ strongly recommended for TA appointments) or IELTS Academic 6.5 minimum (7.0+ recommended).",
      proposal: "Statement of purpose (1,000 words) defining specific research objectives, technical accomplishments, and prospective faculty research matches.",
      appFee: "$60 for domestic applicants / $80 for international applicants via the CU Boulder Graduate Admissions application.",
      documents: "Official academic transcripts, statement of purpose, curriculum vitae, and three letters of recommendation."
    },
    opportunities: [
      {
        id: 2993,
        title: "CU Boulder Chancellor's Fellowship & Graduate School Award",
        type: "Scholarship",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "Full tuition waiver + $37,000 annual living stipend + $3,000 signing bonus",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "$80 international application fee",
        tuition: "100% tuition and comprehensive health insurance coverage",
        source: "https://www.colorado.edu/graduateschool/funding/fellowships",
        desc: "Prestigious fellowship awarded to outstanding incoming doctoral candidates pursuing advanced research in physics, aerospace engineering, or environmental sciences at CU Boulder.",
        requirements: {
          gpa: "Minimum 3.8 undergraduate GPA or equivalent top-decile standing",
          ielts: "TOEFL 100+ or IELTS 7.5",
          gre: "Waived or optional across physical sciences and engineering",
          papers: "Demonstrated prior research publications or undergraduate thesis",
          references: "Three outstanding academic letters of recommendation"
        }
      },
      {
        id: 2994,
        title: "Ph.D. in Aerospace Engineering Sciences (Smead Aerospace)",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Fully funded: $39,500 annual stipend + full tuition coverage for 5 years",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "$80 application fee",
        tuition: "Full tuition covered through GRA/GPTI appointment",
        source: "https://www.colorado.edu/aerospace/academics/graduate-program",
        desc: "World-leading aerospace doctoral program with NASA, LASP, and industry partnerships focusing on astrodynamics, autonomous space systems, satellite remote sensing, and hypersonics.",
        requirements: {
          gpa: "Bachelor's or Master's in Aerospace, Mechanical, Electrical Engineering, or Physics with 3.3+ GPA",
          ielts: "TOEFL 90+ or IELTS 7.0",
          gre: "Not required",
          papers: "Compelling research statement identifying Smead Aerospace faculty alignment",
          references: "Three letters of recommendation from engineering/physics faculty"
        }
      },
      {
        id: 2995,
        title: "Master of Science in Computational Science, Engineering & Mathematics",
        type: "Master's",
        subject: "mathematics",
        subjects: ["mathematics", "computer-science"],
        funding: "Departmental research assistantships and teaching positions",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$80 application fee",
        tuition: "$17,800 domestic / $36,200 international per year",
        source: "https://www.colorado.edu/amath/graduate-program",
        desc: "Advanced master's degree in the Department of Applied Mathematics covering numerical analysis, high-performance scientific computing, wavelets, and mathematical modeling.",
        requirements: {
          gpa: "BSc in Mathematics, Physics, Computer Science, or Engineering with 3.0+ GPA",
          ielts: "TOEFL 85 or IELTS 6.5",
          gre: "Not required",
          papers: "Statement of purpose explaining mathematical interests",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2996,
        title: "JILA & Quantum Physics Laboratory Research Assistantship",
        type: "Research",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "$38,000 annual research salary plus full tuition remission",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero fee for enrolled doctoral students",
        tuition: "100% tuition covered by NIST / NSF grants",
        source: "https://jila.colorado.edu",
        desc: "Groundbreaking research at the world-famous JILA institute (joint institute of CU Boulder & NIST) investigating ultracold atomic gases, atomic clocks, and quantum sensing.",
        requirements: {
          gpa: "Doctoral standing in physics or electrical engineering",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Hands-on experience with ultrahigh vacuum, diode lasers, or optical frequency combs",
          references: "JILA Fellow recommendation letter"
        }
      },
      {
        id: 2997,
        title: "Ball Aerospace & Lockheed Martin Space Systems Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "$35 - $48/hour for 14-week aerospace industry fellowship",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit component",
        source: "https://www.colorado.edu/career/",
        desc: "Paid technical engineering internship with major aerospace contractors across the Colorado aerospace corridor, testing satellite subsystems and guidance software.",
        requirements: {
          gpa: "Enrolled in Smead Aerospace or mechanical engineering with 3.2+ GPA",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Technical resume and space mission design project portfolio",
          references: "Faculty advisor confirmation"
        }
      },
      {
        id: 2998,
        title: "CIRES Environmental & Cryospheric Dynamics Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "physics"],
        funding: "$68,000 - $76,000 annual salary with full CU employee benefits",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral appointment",
        source: "https://cires.colorado.edu/visiting-fellows-program",
        desc: "Two-year postdoctoral fellowship at the Cooperative Institute for Research in Environmental Sciences (CIRES) analyzing polar ice sheet melting and atmospheric chemistry.",
        requirements: {
          gpa: "PhD in Atmospheric Science, Oceanography, Geophysics, or Environmental Science",
          ielts: "Distinguished publication record in English",
          gre: "Not required",
          papers: "Three first-authored peer-reviewed papers and a 4-page research proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 2999,
        title: "Tenure-Track Assistant Professor in Quantum Information & Optics",
        type: "Job",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "$108,000 - $132,000 9-month base salary plus summer salary and startup funding",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Full-time tenure-track academic faculty appointment",
        source: "https://jobs.colorado.edu",
        desc: "Faculty appointment in the Department of Physics and JILA, leading an independent experimental research group in quantum computing, optical lattices, or quantum networking.",
        requirements: {
          gpa: "PhD in Physics, Applied Physics, or Quantum Engineering",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Proven publication trajectory in Nature, Science, or Physical Review Letters and federal grant potential",
          references: "Three reference letters, research vision, and teaching dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1302,
        name: "Dr. Jun Ye",
        title: "JILA Fellow, NIST Fellow & Professor of Physics",
        subject: "physics",
        topics: ["Strontium Optical Clocks", "Ultracold Molecules", "Laser Frequency Combs", "Precision Measurement"],
        source: "https://jila.colorado.edu/ye-group",
        summary: "Dr. Ye is a Breakthrough Prize and Herbert Walther Award laureate renowned for constructing the world's most precise optical atomic clocks, operating at 19 decimal places."
      },
      {
        id: 1303,
        name: "Dr. Penina Axelrad",
        title: "Distinguished Professor & Joseph T. Negler Professor of Aerospace Engineering",
        subject: "engineering",
        topics: ["Satellite Navigation", "GNSS Remote Sensing", "Space Situational Awareness", "Orbit Determination"],
        source: "https://www.colorado.edu/aerospace/penina-axelrad",
        summary: "Dr. Axelrad is an elected member of the National Academy of Engineering recognized for foundational research in GPS signal processing and space navigation algorithms."
      },
      {
        id: 1304,
        name: "Dr. Waleed Abdalati",
        title: "Professor of Geography, Fellow of CIRES & Former NASA Chief Scientist",
        subject: "environment",
        topics: ["Satellite Remote Sensing", "Ice Sheet Mass Loss", "Cryospheric Change", "Space Policy"],
        source: "https://www.colorado.edu/geography/waleed-abdalati",
        summary: "Dr. Abdalati directs CIRES and formerly served as NASA Chief Scientist, utilizing satellite radar and airborne laser altimetry to document polar ice changes."
      }
    ]
  },

  // 17. USA: University of Delaware
  {
    institution: "University of Delaware",
    shortName: "UDel",
    slug: "university-of-delaware",
    countryId: "usa",
    countryLabel: "United States",
    location: "Newark, Delaware, United States",
    website: "https://www.udel.edu",
    sourceRow: 1078,
    headline: "University of Delaware: Chemical Engineering, Biopharmaceuticals, Energy & Materials Guide",
    overview: "The University of Delaware (UD) is a premier Tier-1 research university (R1) celebrated globally as one of the world's top chemical engineering centers, headquarters of the National Institute for Innovation in Manufacturing Biopharmaceuticals (NIIMBL), and a pioneer in composite materials and clean hydrogen energy.",
    description: "Verified graduate admissions, fully funded doctoral fellowships, and chemical engineering guides for University of Delaware.",
    heroEyebrow: "Tier-1 Public Research University · World #1 Chemical Engineering Hub",
    tuitionText: "Doctoral students in engineering and physical sciences receive full tuition scholarships covering 100% of tuition costs, comprehensive student medical insurance, and guaranteed annual living stipends of $33,000 to $39,000 via Graduate Research Assistant (GRA) and Teaching Assistant (TA) appointments.",
    admissions: {
      masters: "Bachelor's degree from an accredited college or university with minimum 3.0 undergraduate GPA (on a 4.0 scale).",
      phd: "Bachelor's or Master's degree in engineering, chemistry, biology, or computing with minimum 3.2+ GPA and strong research background.",
      language: "TOEFL iBT 79 minimum (100+ recommended for TA) or IELTS Academic 6.5 minimum (7.0+ recommended).",
      proposal: "Statement of objectives (1-2 pages) describing research interests, relevant laboratory experience, and intended faculty advisors.",
      appFee: "$75 non-refundable application fee via the UD Graduate College portal.",
      documents: "Official academic transcripts, statement of purpose, resume/curriculum vitae, and three letters of recommendation."
    },
    opportunities: [
      {
        id: 3000,
        title: "UDel Graduate College Excellence Fellowship & Dean's Scholar Award",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        funding: "Full tuition scholarship + $36,000 annual living stipend",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$75 application fee",
        tuition: "100% tuition and health insurance scholarship",
        source: "https://www.udel.edu/academics/colleges/grad/prospective-students/funding-awards/",
        desc: "Merit fellowship awarded to premier incoming doctoral students in chemical engineering, materials science, or biotechnology at the University of Delaware.",
        requirements: {
          gpa: "Minimum 3.7 undergraduate GPA in STEM discipline",
          ielts: "TOEFL 100+ or IELTS 7.5",
          gre: "Not required",
          papers: "Undergraduate research publications or thesis",
          references: "Three academic reference letters"
        }
      },
      {
        id: 3001,
        title: "Ph.D. in Chemical and Biomolecular Engineering (Fully Funded)",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "chemistry", "biology"],
        funding: "Guaranteed $38,000 annual stipend + 100% tuition coverage for 5 years",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "$75 application fee",
        tuition: "Full tuition covered through research assistantship",
        source: "https://cbe.udel.edu/academics/graduate/",
        desc: "Consistently ranked among the top 10 chemical engineering departments in the world, conducting groundbreaking research in catalysis, polymers, thermodynamics, and biomanufacturing.",
        requirements: {
          gpa: "BSc or MSc in Chemical Engineering, Chemistry, or Materials Science with 3.2+ GPA",
          ielts: "TOEFL 90+ or IELTS 7.0",
          gre: "Not required",
          papers: "Statement of purpose identifying prospective research laboratories",
          references: "Three letters of recommendation from faculty members"
        }
      },
      {
        id: 3002,
        title: "Master of Science in Cybersecurity & Information Assurance",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Departmental tuition scholarships and research assistantships",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$75 application fee",
        tuition: "$16,500 domestic / $32,000 international per year",
        source: "https://ece.udel.edu/academics/graduate/ms-cybersecurity/",
        desc: "Designated National Center of Academic Excellence in Cyber Defense, offering advanced coursework in secure hardware design, network protocol security, and digital forensics.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Computer Engineering, or Electrical Engineering with 3.0+ GPA",
          ielts: "TOEFL 85 or IELTS 6.5",
          gre: "Not required",
          papers: "Statement of purpose outlining cyber defense career focus",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 3003,
        title: "Center for Catalytic Science and Technology (CCST) Research Fellowship",
        type: "Research",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        funding: "$35,500 annual research salary plus full tuition remission",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee for enrolled graduate students",
        tuition: "100% tuition covered by DOE / NSF grants",
        source: "https://ccst.udel.edu",
        desc: "World-class research in heterogeneous catalysis, biomass upgrading, CO2 electroreduction, and renewable chemical feedstock synthesis.",
        requirements: {
          gpa: "Doctoral standing in chemical engineering or chemistry",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Experience in reactor kinetics, catalyst characterization (BET, XRD, XPS), or DFT modeling",
          references: "CCST faculty recommendation letter"
        }
      },
      {
        id: 3004,
        title: "NIIMBL Biopharmaceutical Manufacturing Industry Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "engineering"],
        funding: "$30/hour for 14-week advanced bioprocess engineering placement",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward master's or doctoral degree",
        source: "https://niimbl.org",
        desc: "Hands-on industrial research internship at the National Institute for Innovation in Manufacturing Biopharmaceuticals (NIIMBL) headquarters on UD's STAR Campus.",
        requirements: {
          gpa: "Enrolled in chemical engineering, biotechnology, or biology with 3.2+ GPA",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Technical resume and bioreactor laboratory protocol experience",
          references: "Academic advisor authorization"
        }
      },
      {
        id: 3005,
        title: "Center for Composite Materials (CCM) Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "$65,000 - $72,000 annual salary with full university employee benefits",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral appointment",
        source: "https://www.ccm.udel.edu",
        desc: "Two-year postdoctoral appointment researching multifunctional composite materials, thermoplastic crash structures, and high-rate automated manufacturing.",
        requirements: {
          gpa: "PhD in Materials Science, Mechanical Engineering, or Chemical Engineering",
          ielts: "Distinguished publication record in English",
          gre: "Not required",
          papers: "Three first-authored publications and a 3-page research agenda",
          references: "Three academic reference letters"
        }
      },
      {
        id: 3006,
        title: "Tenure-Track Assistant Professor in Sustainable Catalysis & Clean Energy",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "chemistry"],
        funding: "$105,000 - $125,000 9-month base salary plus summer salary and lab startup",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Full-time tenure-track faculty position",
        source: "https://careers.udel.edu",
        desc: "Faculty appointment in the Department of Chemical and Biomolecular Engineering, leading a research group in electrocatalysis, hydrogen economy, or plastic circularity.",
        requirements: {
          gpa: "PhD in Chemical Engineering, Chemistry, or Materials Science",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Stellar publication record and compelling research vision for NSF/DOE funding",
          references: "Three reference letters, research statement, and teaching dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1305,
        name: "Dr. Dionisios Vlachos",
        title: "Allan and Myra Ferguson Professor of Chemical & Biomolecular Engineering",
        subject: "engineering",
        topics: ["Multiscale Modeling", "Heterogeneous Catalysis", "Biomass Conversion", "Kinetic Modeling"],
        source: "https://cbe.udel.edu/people/faculty/dion-vlachos/",
        summary: "Dr. Vlachos is a globally renowned authority on multiscale catalytic reaction modeling, directing the Catalysis Center for Energy Innovation (CCEI) at UD."
      },
      {
        id: 1306,
        name: "Dr. Kelvin Lee",
        title: "Gore Professor of Chemical and Biomolecular Engineering & Institute Director of NIIMBL",
        subject: "biology",
        topics: ["Biopharmaceutical Manufacturing", "Proteomics", "Cell Line Engineering", "Monoclonal Antibodies"],
        source: "https://cbe.udel.edu/people/faculty/kelvin-lee/",
        summary: "Dr. Lee directs the national NIIMBL consortium, spearheading US research in biomanufacturing innovation, gene therapy scale-up, and cell line development."
      },
      {
        id: 1307,
        name: "Dr. Yushan Yan",
        title: "Henry Belin du Pont Chair of Chemical and Biomolecular Engineering",
        subject: "chemistry",
        topics: ["Electrochemical Energy", "Fuel Cells", "Anion Exchange Membranes", "Hydrogen Production"],
        source: "https://cbe.udel.edu/people/faculty/yushan-yan/",
        summary: "Dr. Yan is an elected member of the National Academy of Engineering recognized for pioneering durable anion-exchange membrane fuel cells and water electrolyzers."
      }
    ]
  },

  // 18. UK: University of Greenwich
  {
    institution: "University of Greenwich",
    shortName: "Greenwich",
    slug: "university-of-greenwich",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "London & Kent, United Kingdom",
    website: "https://www.gre.ac.uk",
    sourceRow: 1315,
    headline: "University of Greenwich: Maritime Studies, Natural Resources, AI & Engineering Guide",
    overview: "The University of Greenwich is an iconic London public university based at the historic Old Royal Naval College on the Thames, home to the internationally recognized Natural Resources Institute (NRI), Greenwich Maritime Centre, and advanced computing faculties.",
    description: "Verified master's programs, NRI research fellowships, and international admissions guide for University of Greenwich in London.",
    heroEyebrow: "Historic London Public University · World-Leading NRI Institute",
    tuitionText: "Tuition for international graduate students ranges from £15,500 to £19,000 per academic year. The International Scholarships Award offers up to £3,000 in tuition fee discounts. Vice-Chancellor's PhD Scholarships provide fully funded tuition and UKRI-standard living stipends.",
    admissions: {
      masters: "UK 2:2 or 2:1 honours degree or recognized international equivalent in engineering, computing, agriculture, or business.",
      phd: "Recognized Master's degree with merit or distinction, accompanied by a 4-page original research proposal and faculty supervisory agreement.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in all sub-skills) or equivalent secure English language test (SELT).",
      proposal: "A detailed 1,500-word research proposal outlining research methodology, timeline, and alignment with Greenwich research centers.",
      appFee: "Zero application fee via the university direct application portal.",
      documents: "Degree certificates, official transcripts, two academic references, curriculum vitae, and passport copy."
    },
    opportunities: [
      {
        id: 3007,
        title: "Greenwich International Student Excellence Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "£1,500 to £3,000 tuition fee discount",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "Deducted directly from first-year international tuition fees",
        source: "https://www.gre.ac.uk/finance/funding-your-studies/scholarships-and-bursaries",
        desc: "Merit-based tuition scholarship automatically assessed for international fee-paying students holding an offer for postgraduate taught programs at Greenwich.",
        requirements: {
          gpa: "UK 2:1 equivalent in undergraduate degree (minimum 65%+ marks)",
          ielts: "IELTS 6.5 overall (minimum 6.0 each band)",
          gre: "Not required",
          papers: "Strong personal statement explaining chosen field of study",
          references: "Two academic referee evaluations"
        }
      },
      {
        id: 3008,
        title: "Master of Science in Data Science and Artificial Intelligence",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "Office for Students (OfS) AI conversion scholarships available",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "£17,000 per academic year for international students",
        source: "https://www.gre.ac.uk/postgraduate-courses/engsci/data-science-msc",
        desc: "Advanced conversion and specialist master's covering machine learning, statistical modeling, big data architectures, and ethical AI in enterprise systems.",
        requirements: {
          gpa: "UK 2:2 honours degree or equivalent in computing, mathematics, or STEM subjects",
          ielts: "IELTS 6.5 (no sub-score below 6.0)",
          gre: "Not required",
          papers: "Personal statement detailing interest in data analytics",
          references: "One academic and one professional recommendation letter"
        }
      },
      {
        id: 3009,
        title: "Ph.D. in Global Agriculture & Food Security (NRI Doctoral Fellowship)",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "Full UKRI stipend (£20,622/year tax-free in London) plus full tuition fees",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero application fee",
        tuition: "100% tuition covered by Vice-Chancellor scholarship",
        source: "https://www.nri.org/study/postgraduate-research",
        desc: "Three-year doctoral studentship based at the world-renowned Natural Resources Institute (NRI), investigating post-harvest crop loss reduction and climate-resilient farming in the Global South.",
        requirements: {
          gpa: "Master's degree with Merit or Distinction in agricultural economics, agronomy, or biology",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Original 1,500-word research proposal focused on tropical agricultural systems",
          references: "Two academic reference letters"
        }
      },
      {
        id: 3010,
        title: "Greenwich Maritime Centre & Port Operations Research Assistantship",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "£18,500 annual research stipend",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "Funded via maritime industry research trust",
        source: "https://www.gre.ac.uk/research/centres/gmc",
        desc: "Applied policy research evaluating green port decarbonization, maritime autonomous surface ships, and UK coastal logistics corridors along the Thames estuary.",
        requirements: {
          gpa: "Postgraduate standing in Maritime Studies, Logistics, or Environmental Science",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Knowledge of international maritime regulations (IMO) and supply chain logistics",
          references: "Center director recommendation"
        }
      },
      {
        id: 3011,
        title: "London FinTech & Data Analytics Industrial Placement",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "£24,000 - £28,000 pro-rata salary for 11-month placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated placement year option",
        source: "https://www.gre.ac.uk/careers",
        desc: "One-year paid industrial work placement with leading London financial institutions and technology startups based in Canary Wharf and the City of London.",
        requirements: {
          gpa: "Enrolled in MSc Computer Science or Data Science with good standing",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "CV and technical coding test results",
          references: "Academic placement tutor sign-off"
        }
      },
      {
        id: 3012,
        title: "Natural Resources Institute Postdoctoral Research Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "£36,000 - £42,000 per annum under AC2 research grade with USS pension",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "Full salaried academic appointment",
        source: "https://www.nri.org",
        desc: "Two-year postdoctoral fellowship at NRI studying vector biology, viral crop diseases (cassava brown streak), and biological pest control in sub-Saharan Africa.",
        requirements: {
          gpa: "PhD in Entomology, Plant Virology, Agronomy, or Molecular Biology",
          ielts: "Excellent English publication record",
          gre: "Not required",
          papers: "Three peer-reviewed publications and a 3-page research project plan",
          references: "Three academic reference letters"
        }
      },
      {
        id: 3013,
        title: "Lecturer (Assistant Professor) in Applied Artificial Intelligence",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "£44,000 - £54,000 annual salary under UK university national pay spine",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Permanent academic faculty appointment",
        source: "https://jobs.gre.ac.uk",
        desc: "Academic faculty role in the School of Computing and Mathematical Sciences, teaching undergraduate and postgraduate modules and developing an externally funded AI research profile.",
        requirements: {
          gpa: "PhD in Artificial Intelligence, Computer Science, or closely related discipline",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Refereed journal publications and HEA Fellowship (or willingness to achieve within 2 years)",
          references: "Three academic references and teaching statement"
        }
      }
    ],
    researchers: [
      {
        id: 1308,
        name: "Prof. Dr. Ben Bennett",
        title: "Professor of International Agricultural Trade & Deputy Director of NRI",
        subject: "social-sciences",
        topics: ["Agricultural Economics", "Food Value Chains", "Post-Harvest Economics", "Trade Policy"],
        source: "https://www.nri.org/people/bennett-ben",
        summary: "Prof. Bennett is an international development economist leading NRI projects on agricultural supply chains, food loss mitigation, and African commodity trade."
      },
      {
        id: 1309,
        name: "Prof. Dr. Nicos Nicolaides",
        title: "Professor of Maritime Security & Director of Greenwich Maritime Centre",
        subject: "social-sciences",
        topics: ["Maritime Logistics", "Port Security", "Autonomous Shipping", "Thames Estuary Studies"],
        source: "https://www.gre.ac.uk/people/rep/faculty-of-engineering-and-science/nicos-nicolaides",
        summary: "Prof. Nicolaides investigates shipping security, smart port logistics, and autonomous maritime vessel integration into commercial sea routes."
      },
      {
        id: 1310,
        name: "Prof. Dr. Marinos Themistocleous",
        title: "Professor of Digital Innovation & Blockchain Technologies",
        subject: "computer-science",
        topics: ["Blockchain Governance", "Healthcare Informatics", "Enterprise Application Integration", "FinTech"],
        source: "https://www.gre.ac.uk/people/rep/faculty-of-engineering-and-science/marinos-themistocleous",
        summary: "Prof. Themistocleous is an internationally recognized expert on blockchain architecture, enterprise IT systems integration, and digital transformation."
      }
    ]
  },

  // 19. UK: University of Huddersfield
  {
    institution: "University of Huddersfield",
    shortName: "Huddersfield",
    slug: "university-of-huddersfield",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Huddersfield, West Yorkshire, United Kingdom",
    website: "https://www.hud.ac.uk",
    sourceRow: 1316,
    headline: "University of Huddersfield: Precision Engineering, Railway Research, Music & Pharmacy Guide",
    overview: "The University of Huddersfield is an acclaimed UK public research university recognized with the Queen's Anniversary Prize, home to the world-renowned Institute of Railway Research (IRR), Centre for Precision Technologies (CPT), and national teaching excellence awards.",
    description: "Verified graduate admissions, precision engineering fellowships, and railway science guides for University of Huddersfield.",
    heroEyebrow: "UK Public Research University · Queen's Anniversary Prize Winner",
    tuitionText: "International postgraduate tuition averages £16,500 to £18,500 per academic year. The Huddersfield International Scholarship provides up to £4,000 annually. Fully funded doctoral studentships through EPSRC and IRR cover full fees and standard UKRI living stipends.",
    admissions: {
      masters: "UK 2:2 or 2:1 honours degree or international equivalent in engineering, pharmacy, business, or computing.",
      phd: "Master's degree in a relevant subject with merit or distinction, and an approved 3-page research proposal.",
      language: "IELTS Academic 6.0 to 6.5 overall (minimum 5.5 in all bands) or equivalent SELT certificate.",
      proposal: "A 1,000-1,500 word research outline detailing methodology, novelty, and laboratory resource requirements.",
      appFee: "Zero application fee via the university direct online portal.",
      documents: "Degree certificates, transcripts, two academic references, personal statement, and valid passport."
    },
    opportunities: [
      {
        id: 3014,
        title: "Huddersfield Global Merit Postgraduate Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "£2,000 to £4,000 per academic year",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "Awarded as an automatic tuition fee remission for international students",
        source: "https://www.hud.ac.uk/international/scholarships/",
        desc: "Tuition fee scholarship awarded to talented international applicants accepted into postgraduate master's degrees in engineering, computing, or science.",
        requirements: {
          gpa: "Undergraduate degree equivalent to UK 2:1 honours (minimum 65% aggregate)",
          ielts: "IELTS 6.0 or 6.5 depending on degree course",
          gre: "Not required",
          papers: "Personal statement detailing academic interests and career plans",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3015,
        title: "Master of Science in Railway Systems Engineering (IRR)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Industry-sponsored bursaries through Network Rail & RSSB",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "£17,500 per year for international students",
        source: "https://www.hud.ac.uk/courses/postgraduate/railway-systems-engineering-msc/",
        desc: "World-class specialist program based at the Institute of Railway Research, covering wheel-rail tribology, pantograph-catenary dynamics, and digital signaling.",
        requirements: {
          gpa: "UK 2:2 honours degree or equivalent in Mechanical, Electrical, or Civil Engineering",
          ielts: "IELTS 6.0 overall (no subscore below 5.5)",
          gre: "Not required",
          papers: "Statement of purpose for railway engineering specialization",
          references: "Two academic or employer references"
        }
      },
      {
        id: 3016,
        title: "Ph.D. in Precision Metrology & Advanced Manufacturing (CPT Fellowship)",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "£19,237 annual tax-free stipend plus full UK/international tuition fees",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero application fee",
        tuition: "100% tuition covered by EPSRC doctoral studentship",
        source: "https://www.hud.ac.uk/research/cpt/",
        desc: "Three-year fully funded doctoral research appointment in the Centre for Precision Technologies, developing optical interferometry and on-machine metrology for semiconductor manufacturing.",
        requirements: {
          gpa: "Master's degree with Merit or Distinction in Engineering, Physics, or Optics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Three-page doctoral research proposal in precision optics or surface metrology",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3017,
        title: "Institute of Railway Research (IRR) Track Dynamics Assistantship",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "£17,500 annual research stipend",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "Funded via Rail Safety and Standards Board (RSSB) research grant",
        source: "https://www.hud.ac.uk/research/irr/",
        desc: "Applied railway research utilizing full-scale laboratory test rigs to simulate vehicle-track interaction, rolling contact fatigue, and acoustic noise emissions.",
        requirements: {
          gpa: "Postgraduate standing in Mechanical Engineering or Applied Physics",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Familiarity with multi-body dynamics simulation (VAMPIRE / SIMPACK)",
          references: "IRR project director recommendation"
        }
      },
      {
        id: 3018,
        title: "Siemens & Cummins High-Precision Engineering Industrial Placement",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "£21,000 - £25,000 annual salary for 12-month engineering placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated placement year",
        source: "https://www.hud.ac.uk/careers",
        desc: "One-year paid engineering placement with international manufacturing partners (Cummins Turbo Technologies, Siemens) situated in West Yorkshire.",
        requirements: {
          gpa: "Enrolled in MSc Advanced Mechanical Engineering with 60%+ average",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "CV and CAD/FEA design portfolio",
          references: "Academic placement tutor recommendation"
        }
      },
      {
        id: 3019,
        title: "Centre for Precision Technologies Postdoctoral Research Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "£36,000 - £41,500 per annum on Grade 7 with USS pension",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "Full salaried academic research post",
        source: "https://www.hud.ac.uk/research/cpt/",
        desc: "Two-year postdoctoral fellowship researching wavelength scanning interferometry, diamond turning surface generation, and nanoscale coordinate measuring systems.",
        requirements: {
          gpa: "PhD in Precision Engineering, Optical Metrology, or Applied Physics",
          ielts: "High-level English publication competence",
          gre: "Not required",
          papers: "Three peer-reviewed journal papers and a 3-page research proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 3020,
        title: "Senior Lecturer in Railway Rolling Stock & Traction Dynamics",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "£45,000 - £56,000 per annum on UK university national salary scale",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Permanent full-time faculty appointment",
        source: "https://www.hud.ac.uk/jobs",
        desc: "Academic faculty post in the Department of Mechanical Engineering / IRR, conducting funded research in electric traction systems, pantograph dynamics, and train braking.",
        requirements: {
          gpa: "PhD in Railway Engineering, Mechanical Engineering, or Dynamics",
          ielts: "Academic English fluency",
          gre: "Not required",
          papers: "Proven international research publications in rail transport and teaching credentials",
          references: "Three academic reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1311,
        name: "Prof. Simon Iwnicki",
        title: "Director of the Institute of Railway Research & Professor of Railway Engineering",
        subject: "engineering",
        topics: ["Wheel-Rail Interface", "Railway Dynamics", "Rolling Contact Fatigue", "Rail Vehicle Suspension"],
        source: "https://www.hud.ac.uk/our-staff/profile/index.php?staffprofile=simon-iwnicki",
        summary: "Prof. Iwnicki is an internationally celebrated authority on rail vehicle dynamics, author of the standard Handbook of Railway Vehicle Dynamics and editor of rail journals."
      },
      {
        id: 1312,
        name: "Prof. Xiangqian Jiang",
        title: "Royal Academy of Engineering Chair in Precision Metrology",
        subject: "engineering",
        topics: ["Surface Metrology", "Optical Interferometry", "Nanotechnology", "Advanced Manufacturing"],
        source: "https://www.hud.ac.uk/our-staff/profile/index.php?staffprofile=xiangqian-jiang",
        summary: "Prof. Dame Jane Jiang DBE is a world leader in surface metrology and optical instrumentation, holding multiple patents and prestigious international engineering awards."
      },
      {
        id: 1313,
        name: "Prof. Paul Allen",
        title: "Professor of Railway Dynamics & Assistant Director of IRR",
        subject: "engineering",
        topics: ["Track Interaction", "Vehicle Ride Quality", "Derailment Risk", "High-Speed Rail"],
        source: "https://www.hud.ac.uk/our-staff/profile/index.php?staffprofile=paul-allen",
        summary: "Prof. Allen leads technical research into high-speed track degradation, derailment mechanisms, and predictive condition monitoring for rail networks."
      }
    ]
  },

  // 20. UK: University of Salford
  {
    institution: "University of Salford",
    shortName: "Salford",
    slug: "university-of-salford",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Greater Manchester, United Kingdom",
    website: "https://www.salford.ac.uk",
    sourceRow: 1321,
    headline: "University of Salford: Acoustics, Energy House Labs, Cyber Security & MediaCityUK Guide",
    overview: "The University of Salford is a pioneering British civic university in Greater Manchester, famous for Europe's leading Acoustics and Audio Engineering research laboratories, its revolutionary Energy House 2.0 climate test facility, and its media campus at MediaCityUK alongside the BBC and ITV.",
    description: "Verified graduate admissions, Energy House research fellowships, and acoustics guides for University of Salford in Greater Manchester.",
    heroEyebrow: "Greater Manchester Civic University · Energy House 2.0 & MediaCityUK",
    tuitionText: "International postgraduate tuition averages £15,900 to £18,500 per academic year. The Salford International Excellence Scholarship awards discounts of up to £3,500. Fully funded doctoral studentships through EPSRC and industry partners cover full tuition and UKRI stipends.",
    admissions: {
      masters: "UK 2:2 or 2:1 honours degree or international equivalent in engineering, audio technology, computer science, or architecture.",
      phd: "Master's degree with good standing in a congruent discipline and an approved 3-4 page research proposal.",
      language: "IELTS Academic 6.0 to 6.5 overall (minimum 5.5 in each band) or equivalent SELT certificate.",
      proposal: "A 1,500-word research proposal describing experimental methodology, acoustic/energy laboratory needs, and literature review.",
      appFee: "Zero application fee via the university direct application portal.",
      documents: "Degree certificates, transcripts, two academic references, personal statement, and passport."
    },
    opportunities: [
      {
        id: 3021,
        title: "Salford International Excellence Postgraduate Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "£2,000 to £3,500 tuition fee discount",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "Applied directly to reduce international tuition fees",
        source: "https://www.salford.ac.uk/international/scholarships",
        desc: "Merit-based scholarship awarded to high-achieving international applicants entering master's programs in engineering, acoustics, computing, or environmental management.",
        requirements: {
          gpa: "Equivalent of UK 2:1 honours degree (minimum 65%+ marks)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Personal statement highlighting career ambition and academic commitment",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3022,
        title: "Master of Science in Audio Acoustics (World-Leading Acoustic Labs)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Institute of Acoustics (IOA) bursaries and laboratory assistantships",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "£17,000 per academic year for international students",
        source: "https://www.salford.ac.uk/courses/postgraduate/audio-acoustics",
        desc: "World-renowned specialist master's program utilizing anechoic chambers and reverberation suites, covering room acoustics, psychoacoustics, transducer design, and noise control.",
        requirements: {
          gpa: "UK 2:2 or 2:1 honours degree in Engineering, Physics, Mathematics, or Audio Technology",
          ielts: "IELTS 6.5 overall (minimum 6.0 each band)",
          gre: "Not required",
          papers: "Statement of interest in acoustic engineering and laboratory experiments",
          references: "Two academic recommendations"
        }
      },
      {
        id: 3023,
        title: "Ph.D. in Net-Zero Built Environment & Building Physics (Energy House 2.0)",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "£19,237 annual tax-free stipend plus full international tuition fees",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Zero application fee",
        tuition: "100% tuition covered by Energy House research grant",
        source: "https://energyhouse2.salford.ac.uk",
        desc: "Three-year doctoral studentship based inside the world's largest environmental test chamber (Energy House 2.0), testing building thermal efficiency under climatic extremes (-20°C to +40°C).",
        requirements: {
          gpa: "Master's degree with Merit or Distinction in Building Physics, Mechanical Engineering, or Environmental Science",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Original 1,500-word research proposal focused on domestic energy decarbonization",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3024,
        title: "Energy House 2.0 Smart Metering & Building Sensors Assistantship",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "£18,000 annual research stipend",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "Funded via UK Department for Energy Security and Net Zero grants",
        source: "https://energyhouse2.salford.ac.uk/research/",
        desc: "Applied sensor research testing IoT heat meters, smart home thermostats, and building insulation retrofits inside simulated weather chambers.",
        requirements: {
          gpa: "Postgraduate standing in Engineering, Architecture, or IoT Systems",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Experience in thermal imaging, heat flux sensors, or Python data acquisition",
          references: "Project supervisor endorsement"
        }
      },
      {
        id: 3025,
        title: "MediaCityUK BBC & ITV Digital Media Technology Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        funding: "£22,000 - £26,000 pro-rata salary for 11-month placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Industrial placement module",
        source: "https://www.salford.ac.uk/mediacityuk",
        desc: "Paid technical placement working alongside broadcasting and digital production teams at MediaCityUK (BBC R&D, ITV Granada, dock10 studios).",
        requirements: {
          gpa: "Enrolled in MSc Audio Technology or Digital Media with 60%+ average",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "CV and digital audio/video portfolio",
          references: "Academic placement lead sign-off"
        }
      },
      {
        id: 3026,
        title: "Salford Acoustics & Spatial Audio Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "£36,500 - £42,000 annual salary under Grade 7 with USS pension",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "Full salaried academic appointment",
        source: "https://www.salford.ac.uk/research/acoustics",
        desc: "Two-year postdoctoral fellowship researching binaural spatial audio, virtual reality acoustic rendering, and active noise cancellation algorithms.",
        requirements: {
          gpa: "PhD in Acoustics, Audio Engineering, or Signal Processing",
          ielts: "High-level English publication competence",
          gre: "Not required",
          papers: "Three peer-reviewed journal papers and a 3-page research proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 3027,
        title: "Lecturer (Assistant Professor) in Building Energy & Sustainability",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "£44,000 - £53,000 annual salary under UK university salary scale",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Permanent full-time faculty appointment",
        source: "https://www.salford.ac.uk/jobs",
        desc: "Academic faculty post in the School of Science, Engineering and Environment, teaching building services engineering and driving Energy House research on retrofitting.",
        requirements: {
          gpa: "PhD in Building Services Engineering, Architectural Engineering, or Energy Systems",
          ielts: "Academic English fluency",
          gre: "Not required",
          papers: "Track record of publications in high-impact building science journals",
          references: "Three academic references and teaching dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1314,
        name: "Prof. Trevor Cox",
        title: "Professor of Acoustic Engineering & Former President of the Institute of Acoustics",
        subject: "physics",
        topics: ["Room Acoustics", "Diffusers", "Metamaterials", "Audio Signal Processing"],
        source: "https://www.salford.ac.uk/our-staff/profile/index.php?staffprofile=trevor-cox",
        summary: "Prof. Cox is an internationally renowned acoustician and science broadcaster, pioneer of acoustic diffuser design, and author of Acoustic Absorbers and Diffusers."
      },
      {
        id: 1315,
        name: "Prof. Will Swan",
        title: "Director of Energy House Laboratories & Professor of Building Energy",
        subject: "engineering",
        topics: ["Building Energy Efficiency", "Retrofit Technologies", "Smart Metering", "Climate Simulation"],
        source: "https://www.salford.ac.uk/our-staff/profile/index.php?staffprofile=will-swan",
        summary: "Prof. Swan directs Energy House Laboratories, advising UK government and industry on domestic retrofit policies and net-zero residential standards."
      },
      {
        id: 1316,
        name: "Prof. Dr. Richard Fitton",
        title: "Professor of Building Performance & Co-Director of Energy House 2.0",
        subject: "engineering",
        topics: ["Building Physics", "In-situ Thermal Measurement", "Heat Pumps", "Fabric Performance"],
        source: "https://www.salford.ac.uk/our-staff/profile/index.php?staffprofile=richard-fitton",
        summary: "Prof. Fitton leads field and laboratory testing on building envelope performance, heat pump efficiency, and extreme weather resilience in homes."
      }
    ]
  }
];
