/**
 * Batch 35 - Part 2: Universities 11 to 20 (Total Unis 482 to 491)
 * Italy (3), USA (4), UK (3)
 * Opp IDs: 3378 to 3447 (70 opportunities)
 * Faculty IDs: 1467 to 1496 (30 faculty members)
 */

export const batch35Part2Universities = [
  // 11. Italy: 3D University
  {
    institution: "3D University",
    shortName: "3D University Rome",
    slug: "3d-university-rome-italy",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Rome, Lazio, Italy",
    website: "https://www.3duniversity.it",
    sourceRow: 441,
    headline: "3D University Rome: CGI Animation, Virtual Production & Game Design Guide",
    overview: "3D University in Rome is an elite Italian academy for computer graphics, certified Unreal Engine authorized training, digital visual effects (VFX), virtual production, and real-time architectural visualization for international film and video game studios.",
    description: "Explore master courses, virtual production diplomas, digital animation scholarships, and admissions at 3D University in Rome, Italy.",
    heroEyebrow: "Rome Digital Animation Hub · CGI & Virtual Production Academy",
    tuitionText: "Tuition for professional master courses typically ranges from €4,500 to €8,900 for full-year comprehensive certifications. Italian cinema production bursaries, early enrollment grants, and hardware workstation sponsorships are available.",
    admissions: {
      masters: "Secondary school diploma or recognized university degree in design, architecture, fine arts, computer science, or relevant digital portfolio.",
      phd: "Not offering independent doctorates; operates applied digital production laboratories in collaboration with European film academies.",
      language: "Italian and English (modules offered with bilingual English/Italian instruction).",
      proposal: "Creative portfolio showing 3D models, 2D concept art, graphic design, or video reel (minimum 5 pieces).",
      appFee: "€100 registration and portfolio review fee.",
      documents: "Curriculum vitae, academic qualification certificates, digital portfolio link, and letter of motivation."
    },
    opportunities: [
      {
        id: 3378,
        title: "Rome Digital Cinema & Virtual Production Scholarship",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "€2,500 tuition credit award",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€100 application fee",
        tuition: "Subsidizes full-time Master in Virtual Production in Rome",
        source: "https://www.3duniversity.it/corsi/",
        desc: "Merit award for exceptional digital artists and filmmakers enrolling in the intensive Unreal Engine virtual camera and LED wall cinematography masterclass.",
        requirements: {
          gpa: "Prior diploma or degree in media, architecture, design, or fine arts",
          ielts: "Italian or English working proficiency",
          gre: "Not required",
          papers: "Showreel or digital portfolio demonstrating 3D or visual storytelling aptitude",
          references: "One professional or academic recommendation"
        }
      },
      {
        id: 3379,
        title: "Master in 3D Computer Graphics & Cinematic Visual Effects",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "Italian VFX studio paid traineeships",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€100 application fee",
        tuition: "€7,800 full program tuition",
        source: "https://www.3duniversity.it/corsi/master-3d-computer-graphics/",
        desc: "Comprehensive 800-hour master's covering hard-surface modeling, organic sculpting in ZBrush, procedural shading in Houdini, and compositing in Nuke.",
        requirements: {
          gpa: "High school diploma or bachelor's degree",
          ielts: "English B2 or Italian",
          gre: "Not required",
          papers: "Letter of intent outlining career goals in the entertainment industry",
          references: "One referee letter"
        }
      },
      {
        id: 3380,
        title: "Master in Real-Time Game Art & Unreal Engine 5 Architecture",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        funding: "Epic Games MegaGrant affiliated workstation bursaries",
        status: "Open",
        deadline: "2027-03-20",
        deadlineText: "March 20, 2027",
        fee: "€100 application fee",
        tuition: "€8,200 full tuition",
        source: "https://www.3duniversity.it/corsi/master-unreal-engine/",
        desc: "Focuses on Nanite geometry, Lumen dynamic global illumination, Niagara particle physics, Blueprint visual scripting, and cross-platform optimization.",
        requirements: {
          gpa: "Basic experience with 3D software or programming",
          ielts: "English B2",
          gre: "Not required",
          papers: "Portfolio of interactive models or game assets",
          references: "One academic reference"
        }
      },
      {
        id: 3381,
        title: "Architectural Visualization & Digital Twin Heritage Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        funding: "€2,000 project grant and photogrammetry drone access",
        status: "Open",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027",
        fee: "Free application",
        tuition: "Studio lab workspace credit",
        source: "https://www.3duniversity.it/corsi/archviz/",
        desc: "Fellowship capturing high-resolution LiDAR scans and photogrammetry of historic Roman monuments, generating real-time interactive digital twin environments.",
        requirements: {
          gpa: "Degree or enrollment in architecture, civil engineering, or digital arts",
          ielts: "Italian or English",
          gre: "Not required",
          papers: "Proposal for digital preservation of historic Italian architecture",
          references: "Two academic faculty letters"
        }
      },
      {
        id: 3382,
        title: "Professional Diploma in 3D Character Animation & Motion Capture",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "Rome film studio production assistantships",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "€100 application fee",
        tuition: "€6,500 total course fee",
        source: "https://www.3duniversity.it/corsi/animation/",
        desc: "Explores the 12 principles of animation, facial FACS rigging, bipedal locomotion, and motion capture suit performance cleanup for cinematic games.",
        requirements: {
          gpa: "Secondary education completion with drawing or acting background",
          ielts: "Working knowledge of English or Italian",
          gre: "Not required",
          papers: "Showreel or animation video sample",
          references: "One referee"
        }
      },
      {
        id: 3383,
        title: "Houdini Procedural Simulation & Pyro FX Summer Masterclass",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "physics"],
        funding: "VFX software license vouchers",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€50 registration fee",
        tuition: "€1,650 two-week intensive",
        source: "https://www.3duniversity.it/corsi/houdini/",
        desc: "Hands-on studio masterclass exploring VEX coding, fluid dynamics (FLIP), rigid body destruction (RBD), and volumetric smoke/fire simulations.",
        requirements: {
          gpa: "Familiarity with math concepts (vectors, matrices) and basic 3D fundamentals",
          ielts: "English or Italian",
          gre: "Not required",
          papers: "CV and statement of interest",
          references: "None"
        }
      },
      {
        id: 3384,
        title: "Women in Computer Graphics & Game Development Bursary",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "€2,000 tuition fee discount",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free application",
        tuition: "Applied directly to reduce course registration costs",
        source: "https://www.3duniversity.it/borse-di-studio/",
        desc: "Dedicated award promoting gender diversity in the Italian video game, animation, and visual effects industries for female technical artists.",
        requirements: {
          gpa: "Admitted female candidate to any full-year 3D University master course",
          ielts: "Standard admission",
          gre: "Not required",
          papers: "500-word essay on promoting diversity in game development",
          references: "One recommendation letter"
        }
      }
    ],
    researchers: [
      {
        id: 1467,
        name: "Valerio Di Fonzo",
        title: "Director of 3D University & Senior Visual Effects Supervisor",
        subject: "arts-design",
        topics: ["Visual Effects Pipelines", "CGI Production", "Stereoscopic 3D", "Photorealistic Lighting"],
        source: "https://www.3duniversity.it/chi-siamo/",
        summary: "Di Fonzo is the founder and director of 3D University in Rome, having supervised digital visual effects on national and international cinematic productions."
      },
      {
        id: 1468,
        name: "Marco Savini",
        title: "Head of Virtual Production & Unreal Engine Certified Instructor",
        subject: "computer-science",
        topics: ["Virtual Production", "Real-Time Rendering", "Unreal Engine 5", "LED Wall In-Camera VFX"],
        source: "https://www.3duniversity.it/chi-siamo/",
        summary: "Savini directs real-time virtual production training, consulting for film studios on in-camera visual effects and motion tracking workflows."
      },
      {
        id: 1469,
        name: "Alessia D'Amato",
        title: "Lead Procedural Artist & Houdini Simulation Specialist",
        subject: "computer-science",
        topics: ["Procedural Modeling", "Particle Dynamics", "Houdini VEX", "Crowd Simulation"],
        source: "https://www.3duniversity.it/chi-siamo/",
        summary: "D'Amato specializes in procedural simulation architecture, researching algorithmic environment synthesis and fluid dynamic optimizations for AAA titles."
      }
    ]
  },

  // 12. Italy: CHANGE - Scuola di Specializzazione in Psicoterapia Familiare
  {
    institution: "CHANGE - Scuola di Specializzazione in Psicoterapia Familiare",
    shortName: "Scuola CHANGE Bari",
    slug: "scuola-change-psicoterapia-bari",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Bari, Apulia, Italy",
    website: "https://www.scuolachange.it",
    sourceRow: 452,
    headline: "Scuola CHANGE: Systemic Family Psychotherapy, Relational Clinical Care Guide",
    overview: "Scuola CHANGE in Bari is an accredited Italian postgraduate institute of psychotherapy recognized by the Ministry of Universities and Research (MUR), renowned for its four-year specialization in systemic-relational psychotherapy, family mediation, adolescent crisis intervention, and clinical psychopathology.",
    description: "Explore four-year postgraduate psychotherapy specializations, clinical internships, and admissions at Scuola CHANGE in Bari, Italy.",
    heroEyebrow: "Apulian Clinical Psychology Academy · Systemic Family Psychotherapy",
    tuitionText: "Annual tuition for the four-year accredited specialization program is approximately €3,600 to €4,200. Regional Apulian postgraduate training vouchers, regional healthcare scholarships, and subsidized clinical supervision placements are available.",
    admissions: {
      masters: "Master's degree in Psychology (LM-51) or Medicine and Surgery (LM-41), with registration or pending registration in the official Italian professional register (Albo degli Psicologi or Medici).",
      phd: "Four-year postgraduate specialization conferring the legally recognized title of Psychotherapist (Psicoterapeuta) under Italian law (art. 3 L. 56/89).",
      language: "Italian language fluency (C1 level required for clinical client dialogue and supervision).",
      proposal: "Individual motivational and clinical aptitude interview evaluating relational maturity and theoretical orientation.",
      appFee: "€100 admissions screening and personal evaluation interview fee.",
      documents: "University graduation diploma with transcripts, certificate of professional register enrollment, curriculum vitae, and photo ID."
    },
    opportunities: [
      {
        id: 3385,
        title: "Bari Systemic-Relational Psychotherapy Excellence Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "€1,200 annual tuition deduction",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€100 interview fee",
        tuition: "Renewable across all 4 years of specialization",
        source: "https://www.scuolachange.it/iscrizioni-e-costi/",
        desc: "Merit award honoring incoming psychologists and medical doctors demonstrating outstanding university graduation marks and dedication to family clinical welfare.",
        requirements: {
          gpa: "Graduation grade of 110/110 or 110 cum laude in Psychology or Medicine",
          ielts: "Italian C1/native fluency",
          gre: "Not required",
          papers: "Reflective autobiographical essay on personal family dynamics and professional motivation (1,500 words)",
          references: "Two academic or clinical supervisor letters of recommendation"
        }
      },
      {
        id: 3386,
        title: "Four-Year Postgraduate Specialization in Systemic-Relational Psychotherapy",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "ASL Apulia clinical internship placement coverage",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€100 interview fee",
        tuition: "€3,800 per academic year (500 hours annual training)",
        source: "https://www.scuolachange.it/programma-didattico/",
        desc: "MUR-accredited 4-year degree providing theoretical training in Gregory Bateson's cybernetics, Salvador Minuchin's structural model, live one-way mirror supervision, and 100 hours of annual hospital clinical internships.",
        requirements: {
          gpa: "Laurea Magistrale in Psicologia or Medicina e Chirurgia with Albo registration",
          ielts: "Italian language fluency",
          gre: "Not required",
          papers: "Clinical motivation statement and academic CV",
          references: "One referee letter"
        }
      },
      {
        id: 3387,
        title: "Master in Systemic Family Mediation & Conflict Resolution",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Court mediation service traineeships",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "€100 application fee",
        tuition: "€2,600 total course fee",
        source: "https://www.scuolachange.it/corsi-e-master/",
        desc: "One-year professional diploma training mediators in parental separation dynamics, custody disputes, safeguarding children's interests, and restorative negotiation.",
        requirements: {
          gpa: "Degree in psychology, law, social work, or education",
          ielts: "Italian fluency",
          gre: "Not required",
          papers: "Case study essay on resolving parental disputes",
          references: "One professional reference"
        }
      },
      {
        id: 3388,
        title: "Adolescent Crisis & Eating Disorders Clinical Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "€2,500 research grant and clinical consultation access",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Subsidized clinical research module",
        source: "https://www.scuolachange.it/ricerca-e-progetti/",
        desc: "Research fellowship examining anorexic and bulimic family systems, self-harming behaviors in youth, and triadic relational interventions.",
        requirements: {
          gpa: "Enrolled specialization student or practicing psychotherapist",
          ielts: "Italian C1",
          gre: "Not required",
          papers: "Clinical research proposal on eating disorder family interventions",
          references: "Clinical supervisor recommendation"
        }
      },
      {
        id: 3389,
        title: "Live Supervision Behind the One-Way Mirror Masterclass",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Continuing medical education (ECM) accredited points",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "€50 registration fee",
        tuition: "€850 weekend intensive",
        source: "https://www.scuolachange.it/corsi-e-master/supervisione/",
        desc: "Advanced clinical training utilizing one-way observation mirrors, bug-in-the-ear live coaching, genogram mapping, and therapeutic paradoxical interventions.",
        requirements: {
          gpa: "Licensed psychologist, physician, or psychiatry resident",
          ielts: "Italian proficiency",
          gre: "Not required",
          papers: "Proof of clinical license",
          references: "None"
        }
      },
      {
        id: 3390,
        title: "Couples Therapy in Cross-Cultural Marriages Clinical Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Apulian social integration service allowance",
        status: "Open",
        deadline: "2027-05-20",
        deadlineText: "May 20, 2027",
        fee: "Free application",
        tuition: "Clinical practicum credit",
        source: "https://www.scuolachange.it/tirocini/",
        desc: "Supervised practicum working with bicultural and immigrant couples navigating cultural dissonance, intergenerational expectations, and blended family dynamics.",
        requirements: {
          gpa: "Third or fourth-year specialization student at Scuola CHANGE",
          ielts: "Italian and working English or French",
          gre: "Not required",
          papers: "Practicum statement of intent",
          references: "Didactic director approval"
        }
      },
      {
        id: 3391,
        title: "Regione Puglia Pass Laureati Continuing Education Voucher",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Up to €7,500 total regional tuition voucher coverage",
        status: "Open",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        fee: "Free regional application",
        tuition: "Full reimbursement of postgraduate tuition fees for resident graduates",
        source: "https://www.regione.puglia.it",
        desc: "Regional government initiative financing postgraduate specialization degrees for Apulian graduates pursuing state-recognized psychotherapy qualifications.",
        requirements: {
          gpa: "Resident of Apulia holding a recognized university master's degree",
          ielts: "Italian language",
          gre: "Not required",
          papers: "Regional ISEE financial documentation and course enrollment certificate",
          references: "Included with regional submission"
        }
      }
    ],
    researchers: [
      {
        id: 1470,
        name: "Dr.ssa Angela Carbonara",
        title: "Director of Scuola CHANGE & Senior Systemic Psychotherapist",
        subject: "social-sciences",
        topics: ["Systemic Family Therapy", "Genogram Analysis", "Eating Disorders in Adolescents", "Clinical Supervision"],
        source: "https://www.scuolachange.it/docenti/",
        summary: "Dr. Carbonara directs Scuola CHANGE, publishing on relational therapies, paradoxical prescriptions, and systemic interventions in complex family crises."
      },
      {
        id: 1471,
        name: "Dr. Vito Valenzano",
        title: "Didactic Coordinator & Specialist in Relational Cybernetics",
        subject: "social-sciences",
        topics: ["Relational Cybernetics", "Couple Therapy", "Family Mediation", "Group Dynamics"],
        source: "https://www.scuolachange.it/docenti/",
        summary: "Dr. Valenzano trains postgraduate clinicians in second-order cybernetics, emotional resonance, and conflict de-escalation in high-conflict divorces."
      },
      {
        id: 1472,
        name: "Dr.ssa Maria Grazia Foschino Barbaro",
        title: "Professor of Child Psychopathology & Trauma Specialist",
        subject: "social-sciences",
        topics: ["Child Maltreatment", "Attachment Trauma", "Infant-Parent Psychotherapy", "Forensic Psychology"],
        source: "https://www.scuolachange.it/docenti/",
        summary: "Dr. Foschino Barbaro is a leading Italian expert on developmental trauma, consulting for judicial courts on child protection and traumatic attachment."
      }
    ]
  },

  // 13. Italy: Clivet University
  {
    institution: "Clivet University",
    shortName: "Clivet University",
    slug: "clivet-university-feltre-belluno",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Feltre, Belluno, Veneto, Italy",
    website: "https://www.clivet.com",
    sourceRow: 455,
    headline: "Clivet University: Heat Pumps, Thermodynamic HVAC & Decarbonization Guide",
    overview: "Clivet University in Feltre (Belluno, Veneto) is the specialized corporate training and engineering research academy of Clivet S.p.A. (Midea Group), celebrated for state-of-the-art applied engineering in inverter heat pumps, commercial hydronic chillers, air renewal systems, and building decarbonization.",
    description: "Explore advanced thermodynamic engineering courses, HVAC design certifications, scholarships, and technical training at Clivet University in Feltre, Italy.",
    heroEyebrow: "Veneto Clean Climate Technology · Heat Pumps & Hydronic HVAC Engineering",
    tuitionText: "Tuition for professional engineering modules ranges from €800 to €2,500. European HVAC engineering training bursaries, corporate installer sponsorships, and Veneto regional green tech innovation grants are accessible.",
    admissions: {
      masters: "Engineering degree (mechanical, electrical, energy, or civil engineering) or certified technical background in thermodynamic systems.",
      phd: "Not offering independent academic doctorates; conducts applied thermodynamic research in partnership with University of Padua and University of Trento.",
      language: "Italian and English (modules delivered in both languages for international heating/cooling engineers).",
      proposal: "Statement of technical intent detailing building energy modeling or heat pump retrofit projects.",
      appFee: "Free online technical registration for industry professionals and engineering students.",
      documents: "Curriculum vitae, engineering degree certificate or HVAC technician license, and company/academic sponsorship letter."
    },
    opportunities: [
      {
        id: 3392,
        title: "Clivet European Heat Pump Engineering Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "€2,000 course fee reduction and lodging in Feltre",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Full coverage of advanced thermodynamic modeling masterclass",
        source: "https://www.clivet.com/en/clivet-university",
        desc: "Granted to promising energy engineering graduates researching low-GWP refrigerant cycles (R290 propane) and reversible air-to-water heat pump efficiency.",
        requirements: {
          gpa: "Bachelor's or Master's degree in mechanical, chemical, or energy engineering",
          ielts: "English B2 or Italian",
          gre: "Not required",
          papers: "500-word essay on decarbonizing residential heating in Europe",
          references: "One academic faculty reference"
        }
      },
      {
        id: 3393,
        title: "Advanced Hydronic Heat Pump & Inverter Chiller Masterclass",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Clivet partner distributor traineeships",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "€2,200 full certification fee",
        source: "https://www.clivet.com/en/training-courses",
        desc: "Comprehensive applied curriculum exploring scroll and screw compressor thermodynamics, electronic expansion valves, seasonal COP optimization, and acoustic dampening.",
        requirements: {
          gpa: "Technical diploma or degree in engineering",
          ielts: "English or Italian",
          gre: "Not required",
          papers: "CV and professional experience overview",
          references: "One engineering supervisor letter"
        }
      },
      {
        id: 3394,
        title: "Commercial Building Decarbonization & BACS Automation Certificate",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Veneto Green Building Council subsidies",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free registration",
        tuition: "€1,400 technical course fee",
        source: "https://www.clivet.com/en/bacs-systems",
        desc: "Covers Building Automation and Control Systems (EN 15232), Modbus/BACnet network integration, predictive cloud energy management, and demand response.",
        requirements: {
          gpa: "Experience in building automation, electrical engineering, or HVAC design",
          ielts: "English B2",
          gre: "Not required",
          papers: "Registration form and statement of project interest",
          references: "None"
        }
      },
      {
        id: 3395,
        title: "Thermodynamic Research & Low-GWP Refrigerant Fellowship",
        type: "Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        funding: "€3,000 laboratory research stipend and test chamber access",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free application",
        tuition: "Fully sponsored industrial research placement",
        source: "https://www.clivet.com/en/innovation",
        desc: "Six-month research fellowship at Clivet's R&D acoustic and climatic chambers testing natural refrigerants (R290, CO2) under extreme Nordic ambient conditions (-25°C).",
        requirements: {
          gpa: "Enrolled master's or doctoral student in energy engineering or thermal physics",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Research brief on thermodynamic simulation of propane heat pump cycles",
          references: "Two academic faculty recommendations"
        }
      },
      {
        id: 3396,
        title: "Controlled Mechanical Ventilation (VMC) & Indoor Air Quality Course",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "Energy efficiency tax incentive training grants",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free application",
        tuition: "€950 technical course fee",
        source: "https://www.clivet.com/en/vmc-courses",
        desc: "Explores active thermodynamic recovery, enthalpy wheel heat exchangers, HEPA filtration, CO2 sensing, and humidity modulation in near-zero energy buildings (nZEB).",
        requirements: {
          gpa: "HVAC engineer, architect, or building physics specialist",
          ielts: "Italian or English",
          gre: "Not required",
          papers: "CV and registration form",
          references: "None"
        }
      },
      {
        id: 3397,
        title: "Clivet Factory Industrial Automation & Lean Assembly Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering"],
        funding: "€1,000 monthly living stipend and company canteen access",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free application",
        tuition: "Work-integrated training credit",
        source: "https://www.clivet.com/en/careers",
        desc: "Three-month paid placement at the Feltre manufacturing headquarters inspecting robotic sheet metal punching, automated brazing lines, and helium leak detection.",
        requirements: {
          gpa: "Student in mechanical, industrial, or electrical engineering",
          ielts: "Italian or English",
          gre: "Not required",
          papers: "Curriculum vitae and academic transcript",
          references: "Faculty advisor approval"
        }
      },
      {
        id: 3398,
        title: "Smart Thermostat & IoT Energy Cloud Development Workshop",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Clivet Eye digital app development awards",
        status: "Open",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        fee: "Free registration",
        tuition: "€800 workshop fee",
        source: "https://www.clivet.com/en/clivet-eye",
        desc: "Hands-on coding workshop connecting heat pump controllers to AWS IoT Core, designing predictive scheduling algorithms, and analyzing telemetry time-series data.",
        requirements: {
          gpa: "Software engineering or IoT background (REST APIs, MQTT, Python)",
          ielts: "English fluency",
          gre: "Not required",
          papers: "GitHub repository link or portfolio",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1473,
        name: "Ing. Bruno Bellò",
        title: "Founder of Clivet & Senior Thermodynamic Systems Pioneer",
        subject: "engineering",
        topics: ["Hydronic Heat Pumps", "Dedicated Outdoor Air Systems", "Seasonal Energy Efficiency", "Industrial Decarbonization"],
        source: "https://www.clivet.com/en/company-profile",
        summary: "Ing. Bellò founded Clivet in 1989, pioneering specialized heat pump systems that integrate heating, cooling, and fresh air ventilation into a single thermodynamic loop."
      },
      {
        id: 1474,
        name: "Ing. Stefano Bellò",
        title: "Managing Director of Clivet S.p.A. & HVAC Innovation Lead",
        subject: "engineering",
        topics: ["Inverter Technology", "Natural Refrigerants", "Building Automation", "Smart Energy Grids"],
        source: "https://www.clivet.com/en/company-profile",
        summary: "Ing. Stefano Bellò directs strategic engineering and R&D operations, leading European adoption of R290 heat pumps and digital energy management solutions."
      },
      {
        id: 1475,
        name: "Dr. Andrea Mantovani",
        title: "Head of Clivet University & Technical Training Director",
        subject: "engineering",
        topics: ["Thermodynamic Simulation", "Chiller Acoustics", "Enthalpy Recovery", "HVAC Pedagogies"],
        source: "https://www.clivet.com/en/clivet-university",
        summary: "Dr. Mantovani oversees technical curriculum at Clivet University, having trained over 5,000 European engineers on low-carbon heating technologies."
      }
    ]
  },

  // 14. USA: Arkansas State University (Beebe / Little Rock)
  {
    institution: "Arkansas State University (Beebe / Little Rock)",
    shortName: "ASU Beebe",
    slug: "arkansas-state-university-beebe",
    countryId: "usa",
    countryLabel: "United States",
    location: "Beebe & Little Rock, Arkansas, USA",
    website: "https://www.asub.edu",
    sourceRow: 575,
    headline: "ASU Beebe: Veterinary Technology, Agriculture & Computer Systems Guide",
    overview: "Arkansas State University-Beebe is an accredited public university campus operating locations in Beebe, Searcy, Heber Springs, and Little Rock Air Force Base, celebrated for its AVMA-accredited veterinary technology, agricultural equipment mechanics, computer systems, and nursing programs.",
    description: "Explore associate degrees, veterinary technology certifications, STEM transfer scholarships, and admissions at ASU Beebe in Arkansas.",
    heroEyebrow: "Central Arkansas Regional University · Veterinary Tech & Agriculture",
    tuitionText: "In-state tuition is approximately $107 per credit hour; out-of-state tuition is approximately $182 per credit hour. Arkansas Academic Challenge scholarships, ASU-Beebe Foundation merit awards, and military tuition assistance for Little Rock AFB are accessible.",
    admissions: {
      masters: "ASU Beebe specializes in associate degrees (AA, AS, AAS) and professional technical certificates with seamless 2+2 bachelor's articulation to Arkansas State University (Jonesboro).",
      phd: "Undergraduate institution offering associate degrees; upper-level and graduate degrees offered through university center partnerships.",
      language: "TOEFL iBT 61 or IELTS 5.5 for international students.",
      proposal: "Online university application with declaration of degree major.",
      appFee: "Free online admission application.",
      documents: "Official high school or prior college transcripts, ACT/SAT or Accuplacer placement scores, and immunization records (MMR)."
    },
    opportunities: [
      {
        id: 3399,
        title: "ASU-Beebe Chancellor's Academic Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "$3,000 annual tuition credit",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "Covers up to 15 credit hours of tuition per semester",
        source: "https://www.asub.edu/financial-aid/scholarships/",
        desc: "Highest institutional academic award for incoming high school graduates demonstrating superior ACT scores and cumulative grade point averages.",
        requirements: {
          gpa: "High school GPA of 3.5 or higher with ACT composite score of 24+",
          ielts: "Standard admissions requirement",
          gre: "Not required",
          papers: "Scholarship application form",
          references: "One academic teacher reference"
        }
      },
      {
        id: 3400,
        title: "AAS in Veterinary Technology (AVMA Accredited)",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Arkansas veterinary clinic practicum stipends",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "$3,260 per academic year (in-state baseline)",
        source: "https://www.asub.edu/academics/veterinary-technology/",
        desc: "Intensive 2-year clinical program training licensed veterinary technicians in animal anesthesia, surgical nursing, radiography, pharmacology, and hematology.",
        requirements: {
          gpa: "Completion of prerequisite college chemistry and biology with 2.5+ GPA",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Documented 40 hours of veterinary clinical observation",
          references: "Two letters of recommendation (including one licensed veterinarian)"
        }
      },
      {
        id: 3401,
        title: "Associate of Science in Computer Information Systems",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Arkansas STEM transfer tuition waivers",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free application",
        tuition: "$3,260 per year for Arkansas residents ($5,460 out-of-state)",
        source: "https://www.asub.edu/academics/computer-systems/",
        desc: "Transfer-oriented degree covering Python programming, object-oriented systems design, relational databases (SQL), network routing, and web scripting.",
        requirements: {
          gpa: "High school diploma with mathematics readiness score",
          ielts: "IELTS 5.5",
          gre: "Not required",
          papers: "Official transcripts",
          references: "None"
        }
      },
      {
        id: 3402,
        title: "AAS in Agriculture Equipment Technology (John Deere Tech)",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "John Deere dealership paid co-op sponsorship and toolsets",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "$3,800 per year (plus dealer tool support)",
        source: "https://www.asub.edu/academics/agriculture-equipment-technology/",
        desc: "Specialized corporate partnership program training certified service technicians on advanced combine harvesters, GPS precision guidance, and diesel engines.",
        requirements: {
          gpa: "High school graduation, valid driver's license, and dealer interview",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "John Deere sponsoring dealer agreement",
          references: "Dealership sponsor endorsement"
        }
      },
      {
        id: 3403,
        title: "Associate of Applied Science in Registered Nursing (RN)",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Arkansas healthcare workforce retention grants",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "$3,900 per academic year",
        source: "https://www.asub.edu/academics/nursing/",
        desc: "Prepares students for NCLEX-RN licensure through clinical rotations at Unity Health, Baptist Health, and Arkansas Children's Hospital in Little Rock.",
        requirements: {
          gpa: "Anatomy & Physiology prerequisites completed with 2.75+ cumulative GPA",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "TEAS nursing entrance exam score report",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 3404,
        title: "Computer Aided Drafting and Design (CADD) Certificate",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        funding: "State workforce career education vouchers",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "$1,600 certificate cost",
        source: "https://www.asub.edu/academics/computer-aided-drafting/",
        desc: "Hands-on instruction in architectural drafting, mechanical solid modeling, civil topographical mapping, and 3D additive printing.",
        requirements: {
          gpa: "High school diploma or GED",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Application form",
          references: "None"
        }
      },
      {
        id: 3405,
        title: "Military Veteran & Dependent Transition Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Covers out-of-state tuition differential plus $500 book stipend",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free application",
        tuition: "Honors service at Little Rock Air Force Base",
        source: "https://www.asub.edu/lrafb/",
        desc: "Dedicated award assisting active-duty military, veterans, and military spouses stationed at Little Rock Air Force Base enrolled in college coursework.",
        requirements: {
          gpa: "Good academic standing and proof of military affiliation (DD-214 or military ID)",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Military transition essay",
          references: "Base education officer signature"
        }
      }
    ],
    researchers: [
      {
        id: 1476,
        name: "Dr. Jennifer Methvin",
        title: "Chancellor of ASU-Beebe & Higher Education Leadership Lead",
        subject: "social-sciences",
        topics: ["Community College Governance", "Rural Higher Education", "Workforce Development", "Student Completion"],
        source: "https://www.asub.edu/about-us/chancellors-office/",
        summary: "Dr. Methvin is Chancellor of ASU-Beebe, publishing widely on institutional strategic alignment, rural economic development, and technical college access."
      },
      {
        id: 1477,
        name: "Dr. Keith McClanahan",
        title: "Director of Veterinary Technology & Clinical Veterinarian",
        subject: "biology",
        topics: ["Veterinary Anesthesiology", "Companion Animal Medicine", "Clinical Diagnostics", "Parasitology"],
        source: "https://www.asub.edu/academics/veterinary-technology/faculty/",
        summary: "Dr. McClanahan directs the AVMA-accredited Veterinary Technology program, researching veterinary clinical education standards and zoonotic disease control."
      },
      {
        id: 1478,
        name: "Teddy Davis",
        title: "Dean of Arts and Sciences & Associate Professor of History",
        subject: "social-sciences",
        topics: ["Southern US History", "Arkansas Political Economy", "Civil War Historiography", "Curriculum Design"],
        source: "https://www.asub.edu/academics/arts-and-sciences/",
        summary: "Davis oversees the division of arts and sciences, researching 19th-century regional economic history and expanding transfer pathways across Arkansas."
      }
    ]
  },

  // 15. USA: Baker University
  {
    institution: "Baker University",
    shortName: "Baker University",
    slug: "baker-university-baldwin-city",
    countryId: "usa",
    countryLabel: "United States",
    location: "Baldwin City, Kansas, USA",
    website: "https://www.bakeru.edu",
    sourceRow: 582,
    headline: "Baker University: Kansas Liberal Arts, School of Education & Nursing Guide",
    overview: "Founded in 1858, Baker University is the oldest chartered institution of higher education in Kansas, celebrated for its historic Baldwin City campus, acclaimed School of Education (doctoral EdD), School of Nursing (Stormont Vail Health partner), and pre-health sciences.",
    description: "Explore bachelor's, master's, and doctoral degrees, nursing clinical rotations, merit scholarships, and admissions at Baker University in Kansas.",
    heroEyebrow: "Historic Kansas Private University · Oldest University in Kansas",
    tuitionText: "Undergraduate annual tuition is approximately $33,500. Graduate tuition averages $625 to $850 per credit hour. Over 95% of full-time undergraduate students receive institutional aid, including Presidential Scholarships (up to $18,000/year) and Baker Trustee awards.",
    admissions: {
      masters: "Accredited Bachelor's degree with a minimum 3.0 GPA for graduate school; teaching license required for advanced educational leadership master's.",
      phd: "EdD in Educational Leadership requires a Master's degree, professional educational administrative experience, and an academic writing sample.",
      language: "TOEFL iBT 80 or IELTS 6.5 for international degree applicants.",
      proposal: "Statement of purpose detailing personal character, academic achievements, and educational goals.",
      appFee: "$20 online application fee (often waived for campus visitors).",
      documents: "Official secondary school or college transcripts, personal essay, resume/CV, and two letters of recommendation."
    },
    opportunities: [
      {
        id: 3406,
        title: "Baker University Presidential Academic Merit Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "$18,000 annual undergraduate tuition grant ($72,000 over 4 years)",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Free application",
        tuition: "Renewable for four undergraduate years with 3.25 GPA",
        source: "https://www.bakeru.edu/admissions-aid/financial-aid/scholarships/",
        desc: "Highest competitive academic scholarship awarded to incoming first-year students demonstrating outstanding high school achievement and civic leadership.",
        requirements: {
          gpa: "High school GPA of 3.8+ or ACT 28+ / SAT 1310+",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "500-word personal statement detailing community service and academic passion",
          references: "Two academic teacher recommendations"
        }
      },
      {
        id: 3407,
        title: "Doctor of Education (EdD) in Educational Leadership",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Educational administrative research assistantships",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$50 application fee",
        tuition: "$24,500 total estimated annual program cost",
        source: "https://www.bakeru.edu/academics/education/edd-educational-leadership/",
        desc: "Prestigious doctoral program preparing superintendents, educational policymakers, and university administrators in organizational theory, school law, and quantitative evaluation.",
        requirements: {
          gpa: "Master's degree in education or related field with minimum 3.5 graduate GPA",
          ielts: "IELTS 7.0 or TOEFL 90",
          gre: "Not required",
          papers: "Scholarly writing sample and 1,500-word dissertation interest statement",
          references: "Three professional and academic letters of recommendation"
        }
      },
      {
        id: 3408,
        title: "Bachelor of Science in Nursing (BSN)",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Stormont Vail Health clinical nursing sponsorships",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$20 application fee",
        tuition: "$33,500 per academic year",
        source: "https://www.bakeru.edu/academics/nursing/bsn/",
        desc: "CCNE-accredited professional nursing curriculum delivered in partnership with Stormont Vail Health in Topeka, combining hospital intensive care rotations and simulation labs.",
        requirements: {
          gpa: "Prerequisite science GPA of 3.0+ across anatomy, physiology, and microbiology",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Personal statement detailing motivation for professional healthcare",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 3409,
        title: "Master of Science in Instructional Design and Performance Technology",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Corporate training employer discounts",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "$20 application fee",
        tuition: "$14,800 full program tuition",
        source: "https://www.bakeru.edu/academics/education/ms-instructional-design/",
        desc: "Online master's preparing learning engineers in multimedia course development, adult cognitive learning theory, gamification, and LMS enterprise deployment.",
        requirements: {
          gpa: "Bachelor's degree with 3.0 cumulative GPA",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Resume and professional goals essay",
          references: "Two professional references"
        }
      },
      {
        id: 3410,
        title: "Bachelor of Science in Molecular Biology & Pre-Medicine",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Undergraduate laboratory summer research fellowships",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "$20 application fee",
        tuition: "$33,500 per academic year",
        source: "https://www.bakeru.edu/academics/undergraduate/molecular-bioscience/",
        desc: "Pre-medical track exploring genetics, protein biochemistry, cellular signaling, immunology, and undergraduate research in cancer biology.",
        requirements: {
          gpa: "High school graduation with advanced biology and chemistry",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Statement of purpose for pre-health sciences",
          references: "One science teacher reference"
        }
      },
      {
        id: 3411,
        title: "Master of Business Administration (MBA - Executive Healthcare)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Healthcare executive leadership bursaries",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$20 application fee",
        tuition: "$16,500 total program tuition",
        source: "https://www.bakeru.edu/academics/business/mba/",
        desc: "Addresses healthcare finance, strategic marketing, organizational behavior, legal and regulatory issues in hospital administration.",
        requirements: {
          gpa: "Bachelor's degree with minimum 2.75 GPA",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Career resume and personal statement",
          references: "One professional reference"
        }
      },
      {
        id: 3412,
        title: "Harlaxton College British Semester Study Abroad Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "$4,000 travel and study abroad housing scholarship",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "Full semester credit transfer at Victorian manor campus in England",
        source: "https://www.bakeru.edu/academics/study-abroad/",
        desc: "Enables Baker undergraduates to study British literature, history, and European arts while residing at historic Harlaxton Manor in Lincolnshire, UK.",
        requirements: {
          gpa: "Current Baker University student with 3.0+ GPA",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Study abroad essay explaining cultural and academic goals",
          references: "Faculty advisor endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 1479,
        name: "Dr. Lynne Murray",
        title: "President of Baker University & Higher Education Policy Scholar",
        subject: "social-sciences",
        topics: ["Higher Education Administration", "Philanthropic Strategy", "Institutional Sustainability", "University Governance"],
        source: "https://www.bakeru.edu/about-us/presidents-office/",
        summary: "Dr. Murray is the 29th President of Baker University, recognized nationally for innovative university-healthcare partnerships and campus modernization."
      },
      {
        id: 1480,
        name: "Dr. Marcus Childress",
        title: "Dean of School of Education & Professor of Instructional Technology",
        subject: "social-sciences",
        topics: ["Instructional Systems Design", "Educational Technology", "Distance Learning", "Teacher Preparation"],
        source: "https://www.bakeru.edu/academics/education/faculty/",
        summary: "Dr. Childress leads Baker's School of Education, researching cognitive strategies in digital learning environments and teacher workforce resilience."
      },
      {
        id: 1481,
        name: "Dr. Erin Morris",
        title: "Associate Professor of Biology & Genetics Specialist",
        subject: "biology",
        topics: ["Developmental Genetics", "Cellular Biology", "Undergraduate Research Pedagogy", "Molecular Entomology"],
        source: "https://www.bakeru.edu/academics/undergraduate/faculty/",
        summary: "Dr. Morris investigates genetic pathways in cellular development and mentors undergraduate researchers conducting laboratory biochemistry."
      }
    ]
  },

  // 16. USA: Bay Atlantic University (BAU Washington D.C.)
  {
    institution: "Bay Atlantic University (BAU Washington D.C.)",
    shortName: "Bay Atlantic University",
    slug: "bay-atlantic-university-washington-dc",
    countryId: "usa",
    countryLabel: "United States",
    location: "Washington, D.C., USA",
    website: "https://bau.edu",
    sourceRow: 586,
    headline: "Bay Atlantic University: Cyber Security, Big Data, MBA & International Affairs",
    overview: "Bay Atlantic University (BAU) is a private, non-profit university in downtown Washington, D.C., situated near the White House, celebrated for accredited undergraduate and master's degrees in cybersecurity, data analytics, MBA, and international affairs within the global BAU Global Network.",
    description: "Explore bachelor's and master's degrees, international tuition scholarships, and internships in Washington D.C. at Bay Atlantic University.",
    heroEyebrow: "Washington D.C. International University · Cyber Security & Global Affairs",
    tuitionText: "Undergraduate tuition is approximately $13,500 per year ($560 per credit). Graduate tuition is approximately $1,100 per credit ($19,800 for full 36-credit master's programs). Global Scholarship awards (up to 50% tuition reduction) and Washington fellowship grants are available.",
    admissions: {
      masters: "Accredited Bachelor's degree with a minimum 2.7 GPA in related academic area; resume and interview required for graduate admissions.",
      phd: "Not offering independent doctorates; offers career-focused bachelor's and master's degree programs.",
      language: "TOEFL iBT 80, IELTS 6.5, or Duolingo 105 for non-native English speakers.",
      proposal: "Statement of purpose (500-750 words) detailing international educational goals in Washington D.C.",
      appFee: "$45 international student application fee.",
      documents: "Official university transcripts, degree diploma, certified English translations, passport copy, bank financial statement, and two recommendation letters."
    },
    opportunities: [
      {
        id: 3413,
        title: "BAU Global Leader International Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "25% to 50% tuition waiver across full degree duration",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$45 application fee",
        tuition: "Reduces undergraduate or master's tuition at Washington D.C. campus",
        source: "https://bau.edu/admissions/scholarships/",
        desc: "Competitive merit award granted to talented international scholars demonstrating high academic records and civic leadership in business or technology.",
        requirements: {
          gpa: "Undergraduate GPA of 3.2+ or high school GPA of 3.0+",
          ielts: "IELTS 6.5 or TOEFL 80",
          gre: "Not required",
          papers: "Personal essay on contributing to global economic or technological cooperation",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 3414,
        title: "Master of Science in Cyber Security & Threat Intelligence",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "D.C. defense and cyber consulting internship opportunities",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$45 application fee",
        tuition: "$19,800 total program tuition (36 credits)",
        source: "https://bau.edu/program/ms-cyber-security/",
        desc: "Comprehensive master's program covering ethical hacking, vulnerability management, cloud security architecture, cyber warfare defense, and federal compliance.",
        requirements: {
          gpa: "Bachelor's degree in computer science, IT, engineering, or related field",
          ielts: "IELTS 6.5 or TOEFL 80",
          gre: "Not required",
          papers: "Statement of technical purpose",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 3415,
        title: "Master of Science in Big Data Analytics & Artificial Intelligence",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "Data science industry project sponsorships",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "$45 application fee",
        tuition: "$19,800 full program cost",
        source: "https://bau.edu/program/ms-big-data-analytics/",
        desc: "Covers machine learning modeling, Hadoop and Spark distributed systems, data visualization with Tableau, predictive econometrics, and neural networks.",
        requirements: {
          gpa: "Bachelor's degree with quantitative foundation in mathematics or statistics",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Personal statement detailing analytical programming background",
          references: "Two references"
        }
      },
      {
        id: 3416,
        title: "Master of Business Administration (MBA - Global Affairs Track)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Diplomatic mission and NGO partial fellowships",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "$45 application fee",
        tuition: "$19,800 total program fee",
        source: "https://bau.edu/program/mba/",
        desc: "Prepares corporate managers and policy analysts in international trade law, strategic finance, political risk modeling, and executive decision science.",
        requirements: {
          gpa: "Bachelor's degree in any discipline",
          ielts: "IELTS 6.5 or TOEFL 80",
          gre: "Not required",
          papers: "Resume and professional goals essay",
          references: "Two professional references"
        }
      },
      {
        id: 3417,
        title: "Bachelor of Arts in Political Science & International Relations",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Washington think-tank internship placements",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$45 application fee",
        tuition: "$13,500 per academic year",
        source: "https://bau.edu/program/ba-political-science-international-relations/",
        desc: "Four-year undergraduate degree situated minutes from the US Capitol, exploring American foreign policy, international law, United Nations diplomacy, and peace negotiations.",
        requirements: {
          gpa: "High school diploma with satisfactory grades",
          ielts: "IELTS 6.0 or TOEFL 75",
          gre: "Not required",
          papers: "Essay on a global diplomatic challenge",
          references: "One teacher or counselor reference"
        }
      },
      {
        id: 3418,
        title: "D.C. Technology & Diplomacy Capstone Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "$3,000 project research grant and policy briefing support",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "Capstone course credit",
        source: "https://bau.edu/academics/",
        desc: "Fellowship pairing graduate students with Washington think tanks to publish policy briefs on semiconductor supply chains, AI regulation, and cyber espionage.",
        requirements: {
          gpa: "Graduate standing in cybersecurity, data analytics, or MBA with 3.3+ GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Policy brief research proposal",
          references: "Faculty advisor recommendation"
        }
      },
      {
        id: 3419,
        title: "Cyber Defense Certified Incident Handler Workshop",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "CompTIA and EC-Council certification voucher assistance",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free registration",
        tuition: "$1,500 executive short course",
        source: "https://bau.edu/academics/professional-certificates/",
        desc: "Weekend intensive covering digital evidence preservation, malware dynamic triage, packet Wireshark inspection, and incident containment protocols.",
        requirements: {
          gpa: "Working knowledge of operating systems and IP networking",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "Registration form",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1482,
        name: "Dr. Sinem Vatanartiran",
        title: "President of Bay Atlantic University & Educational Leadership Scholar",
        subject: "social-sciences",
        topics: ["International Education", "Educational Policy", "Curriculum Reform", "Transnational Higher Education"],
        source: "https://bau.edu/about/leadership/",
        summary: "Dr. Vatanartiran is President of BAU Washington, publishing on cross-border education models, intercultural pedagogical adaptation, and academic quality assurance."
      },
      {
        id: 1483,
        name: "Dr. Paolo von Schirach",
        title: "Professor of International Relations & President of Global Policy Institute",
        subject: "social-sciences",
        topics: ["Geopolitics", "Energy Security", "International Trade Agreements", "Transatlantic Relations"],
        source: "https://bau.edu/faculty/paolo-von-schirach/",
        summary: "Prof. von Schirach directs the Global Policy Institute in Washington, providing expert analysis on international energy politics, trade, and economic statecraft."
      },
      {
        id: 1484,
        name: "Dr. Cihan Cobanoglu",
        title: "Dean of School of Business and Information Technology",
        subject: "computer-science",
        topics: ["Information Systems Management", "Hospitality Analytics", "Artificial Intelligence Applications", "Consumer Technology"],
        source: "https://bau.edu/faculty/",
        summary: "Dr. Cobanoglu is an expert in business informatics and artificial intelligence adoption, authoring numerous books on information systems and data strategy."
      }
    ]
  },

  // 17. USA: Bellevue University
  {
    institution: "Bellevue University",
    shortName: "Bellevue University",
    slug: "bellevue-university-nebraska",
    countryId: "usa",
    countryLabel: "United States",
    location: "Bellevue, Nebraska, USA",
    website: "https://www.bellevue.edu",
    sourceRow: 587,
    headline: "Bellevue University: NSA Center of Cyber Excellence, Healthcare & MBA Guide",
    overview: "Bellevue University in Bellevue, Nebraska, is an accredited private university recognized by the NSA and DHS as a National Center of Academic Excellence in Cyber Defense, renowned for career-aligned online and on-campus bachelor's, master's, and doctoral (PhD in Human Capital Management) degrees.",
    description: "Explore NSA-certified cybersecurity degrees, healthcare informatics, executive doctorates, and scholarships at Bellevue University in Nebraska.",
    heroEyebrow: "Greater Omaha Applied University · NSA Center of Cyber Excellence",
    tuitionText: "Undergraduate tuition averages $350 to $440 per credit hour. Graduate tuition ranges from $615 to $660 per credit hour. Bellevue University Kirkpatrick Signature scholarships, military service grants, and corporate partner tuition discounts are widely available.",
    admissions: {
      masters: "Accredited Bachelor's degree with a minimum 2.5 cumulative GPA; professional work experience evaluated for executive master's tracks.",
      phd: "PhD in Human Capital Management requires a Master's degree, strong managerial track record, and a structured dissertation research statement.",
      language: "TOEFL iBT 71 or IELTS 6.0 for international applicants.",
      proposal: "Personal statement detailing career objectives and how the degree program facilitates professional advancement.",
      appFee: "$50 application processing fee (frequently waived online).",
      documents: "Official college transcripts, resume/CV, personal statement, and two professional or academic references."
    },
    opportunities: [
      {
        id: 3420,
        title: "Kirkpatrick Signature Academic Merit Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "$4,000 annual undergraduate tuition grant",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Renewable for full undergraduate degree with 3.0 GPA",
        source: "https://www.bellevue.edu/admissions/financial-aid/scholarships/",
        desc: "Merit award honoring incoming undergraduate students demonstrating academic excellence, intellectual curiosity, and commitment to civic responsibility.",
        requirements: {
          gpa: "High school GPA of 3.25+ or transfer GPA of 3.0+",
          ielts: "IELTS 6.0 or TOEFL 71",
          gre: "Not required",
          papers: "500-word essay on how American democratic values and free enterprise shape leadership",
          references: "One academic or community reference"
        }
      },
      {
        id: 3421,
        title: "Master of Science in Cybersecurity (NSA CAE-CD Designated)",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Department of Defense Cyber Scholarship Program eligible",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$50 application fee",
        tuition: "$23,760 total program tuition (36 credits)",
        source: "https://www.bellevue.edu/degrees/master/cybersecurity-ms/",
        desc: "Designated by the National Security Agency, this program covers cloud governance, secure software development, penetration testing, threat modeling, and forensics.",
        requirements: {
          gpa: "Bachelor's degree in computing, engineering, or related field with 2.75+ GPA",
          ielts: "IELTS 6.0 or TOEFL 71",
          gre: "Not required",
          papers: "Statement of technical intent",
          references: "Two professional or academic references"
        }
      },
      {
        id: 3422,
        title: "PhD in Human Capital Management",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Corporate executive doctoral research grants",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "$50 application fee",
        tuition: "$36,000 total estimated multi-year doctoral tuition",
        source: "https://www.bellevue.edu/degrees/doctoral/human-capital-management-phd/",
        desc: "Nationally recognized executive doctorate investigating workforce analytics, strategic human capital valuation, organizational learning architectures, and executive succession.",
        requirements: {
          gpa: "Master's degree (MBA, MS, or MA) with minimum 3.0 graduate GPA and 5+ years of leadership experience",
          ielts: "IELTS 6.5 or TOEFL 80",
          gre: "Not required",
          papers: "Dissertation research concept paper (1,500 words) and CV",
          references: "Three professional or academic references"
        }
      },
      {
        id: 3423,
        title: "Master of Science in Strategic Finance & Fintech Analytics",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "Midwest financial services partnership bursaries",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "$50 application fee",
        tuition: "$23,760 full tuition",
        source: "https://www.bellevue.edu/degrees/master/strategic-finance-ms/",
        desc: "Covers financial modeling, corporate capital allocation, algorithmic trading principles, blockchain finance, and forensic accounting.",
        requirements: {
          gpa: "Bachelor's degree with foundational business or mathematics coursework",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal career statement",
          references: "One referee letter"
        }
      },
      {
        id: 3424,
        title: "Bachelor of Science in Healthcare Informatics and Analytics",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "computer-science"],
        funding: "Nebraska healthcare system tuition reimbursement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$50 application fee",
        tuition: "$14,500 per academic year",
        source: "https://www.bellevue.edu/degrees/undergraduate/healthcare-informatics-bs/",
        desc: "Bridges health data science and clinical operations, covering electronic health record (EHR) optimization, healthcare privacy (HIPAA), and clinical outcome analytics.",
        requirements: {
          gpa: "High school diploma or completed associate degree",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Transcripts and personal statement",
          references: "None"
        }
      },
      {
        id: 3425,
        title: "USSTRATCOM Defense & National Security Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "$5,000 project research grant near Offutt Air Force Base",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "Full academic credit for defense policy research",
        source: "https://www.bellevue.edu/about/partnerships/military/",
        desc: "Conducted in proximity to US Strategic Command (Offutt AFB), analyzing nuclear deterrence communications, critical space telemetry defense, and cyber deterrence.",
        requirements: {
          gpa: "Enrolled graduate student in cybersecurity, national security, or leadership",
          ielts: "US citizenship or security clearance eligible where required",
          gre: "Not required",
          papers: "Research brief on global strategic defense systems",
          references: "Two academic or military supervisor letters"
        }
      },
      {
        id: 3426,
        title: "Certified Ethical Hacker (CEH) Accelerated Training Camp",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "Workforce defense innovation vouchers",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free application",
        tuition: "$1,850 professional certificate",
        source: "https://www.bellevue.edu/degrees/certificates/",
        desc: "Five-day intensive boot-camp covering reconnaissance methodologies, wireless network penetration, web application exploits, and defense evasion.",
        requirements: {
          gpa: "Prior networking or cybersecurity coursework",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Registration form",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1485,
        name: "Dr. Mary Hawkins",
        title: "President of Bellevue University & Human Capital Leadership Lead",
        subject: "social-sciences",
        topics: ["Human Capital Theory", "Workforce Learning Models", "Higher Education Innovation", "Adult Learning"],
        source: "https://www.bellevue.edu/about/leadership/",
        summary: "Dr. Hawkins is President of Bellevue University, a national advocate for adult learning models and corporate-university career alignment."
      },
      {
        id: 1486,
        name: "Dr. Douglas R. Rausch",
        title: "Program Director of Cybersecurity & Center of Academic Excellence Lead",
        subject: "computer-science",
        topics: ["Cyber Warfare", "Information Assurance", "Cloud Security", "Critical Infrastructure Protection"],
        source: "https://www.bellevue.edu/degrees/master/cybersecurity-ms/faculty",
        summary: "Dr. Rausch is a retired Air Force cyber officer directing Bellevue's NSA-designated cybersecurity program, researching national cyber defense."
      },
      {
        id: 1487,
        name: "Dr. David V. F. Fike",
        title: "Professor of Data Analytics & Healthcare Informatics Researcher",
        subject: "computer-science",
        topics: ["Predictive Analytics", "Healthcare Quality Metrics", "Machine Learning in Medicine", "Applied Biostatistics"],
        source: "https://www.bellevue.edu/degrees/master/business-analytics-ms/faculty",
        summary: "Dr. Fike evaluates statistical prediction models for clinical patient outcomes, publishing extensively on healthcare informatics and epidemiological data."
      }
    ]
  },

  // 18. UK: Oxford Business College
  {
    institution: "Oxford Business College",
    shortName: "Oxford Business College",
    slug: "oxford-business-college-uk",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Oxford, England, United Kingdom",
    website: "https://www.oxfordbusinesscollege.ac.uk",
    sourceRow: 1242,
    headline: "Oxford Business College: Pearson BTEC HND, Business & Management Guide",
    overview: "Established in 1985 in the historic university city of Oxford, Oxford Business College (OBC) is an accredited independent higher education college offering Pearson BTEC Higher National Diplomas (HND) in Business, university top-up degrees, and executive management qualifications in partnership with UK universities.",
    description: "Explore Pearson HND in Business, university top-up degrees, scholarships, and admissions at Oxford Business College in Oxford, UK.",
    heroEyebrow: "Oxford Independent Business College · Pearson HND & Top-Up Degrees",
    tuitionText: "Tuition for UK home students is approximately £6,000 to £9,250 per year (covered by Student Finance England). International student tuition averages £9,500 to £12,500 annually. Oxford Business College Academic Excellence scholarships and flexible installment bursaries are accessible.",
    admissions: {
      masters: "Pearson HND entry requires GCE A-Levels or Level 3 equivalent; university top-up degrees require completed HND or foundation degree (minimum 240 credits).",
      phd: "Undergraduate and postgraduate diploma college; does not confer doctoral degrees directly.",
      language: "IELTS Academic 6.0 overall (minimum 5.5 in each skill) or equivalent recognized English certificate.",
      proposal: "Personal statement (500 words) describing career ambitions and reasons for studying in Oxford.",
      appFee: "Free online application directly via the OBC website.",
      documents: "Passport copy, secondary school certificates, complete transcripts, personal statement, and one academic or employment reference."
    },
    opportunities: [
      {
        id: 3427,
        title: "Oxford Academic Excellence International Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "£2,500 tuition fee reduction",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Subsidizes HND or top-up degree tuition fees in Oxford",
        source: "https://www.oxfordbusinesscollege.ac.uk/scholarships/",
        desc: "Merit award honoring high-achieving international students enrolling in Pearson BTEC Level 5 HND or BA (Hons) Business Management top-up programs.",
        requirements: {
          gpa: "Equivalent of UK ABB at A-Level or Level 3 diploma with distinction",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "500-word statement on ethical leadership in international trade",
          references: "One academic referee letter"
        }
      },
      {
        id: 3428,
        title: "Pearson BTEC Level 5 Higher National Diploma (HND) in Business",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "UK Student Finance England maintenance loan eligible",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "£9,250 for UK students; £11,500 for international students per year",
        source: "https://www.oxfordbusinesscollege.ac.uk/courses/hnd-business/",
        desc: "Two-year higher vocational qualification covering business strategy, marketing principles, human resources, financial reporting, and entrepreneurship.",
        requirements: {
          gpa: "Level 3 qualification (minimum 64 UCAS points) or equivalent secondary diploma",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement and admissions interview",
          references: "One academic reference"
        }
      },
      {
        id: 3429,
        title: "BA (Hons) Business Management (Final Year Top-Up)",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Oxford corporate partnership bursaries available",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "£9,250 UK / £12,000 international tuition",
        source: "https://www.oxfordbusinesscollege.ac.uk/courses/ba-hons-business-management-top-up/",
        desc: "One-year university top-up degree allowing HND graduates to earn a full UK bachelor's degree with honors, focusing on global marketing and corporate strategy.",
        requirements: {
          gpa: "Completed Pearson BTEC Level 5 HND in Business or Foundation Degree (240 credits)",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Undergraduate transcript and dissertation proposal",
          references: "Two academic recommendations"
        }
      },
      {
        id: 3430,
        title: "Pearson BTEC Level 5 HND in Digital Technologies (Cloud & Cyber)",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "UK digital skills workforce bursaries",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free application",
        tuition: "£11,500 per academic year for international students",
        source: "https://www.oxfordbusinesscollege.ac.uk/courses/hnd-digital-technologies/",
        desc: "Comprehensive computing HND covering cloud fundamentals, cybersecurity defenses, big data analytics, networking infrastructure, and software engineering.",
        requirements: {
          gpa: "Level 3 qualification in IT, science, or mathematics (64 UCAS points)",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Technical career statement",
          references: "One referee letter"
        }
      },
      {
        id: 3431,
        title: "Postgraduate Diploma in Strategic Management & Leadership (Level 7)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Executive management employer subsidies",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "£7,500 total program tuition",
        source: "https://www.oxfordbusinesscollege.ac.uk/courses/level-7-diploma/",
        desc: "Advanced 120-credit executive qualification providing advanced standing toward a UK university MBA top-up dissertation, focusing on strategic organizational change.",
        requirements: {
          gpa: "Bachelor's degree or minimum 3 years of managerial experience",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Professional CV and organizational impact essay",
          references: "Two professional references"
        }
      },
      {
        id: 3432,
        title: "Oxford Young Entrepreneurship Incubator Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "£1,500 startup seed grant and workspace in Oxford",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "Incubator mentoring credit",
        source: "https://www.oxfordbusinesscollege.ac.uk/student-life/",
        desc: "Supports student startup founders creating e-commerce, digital marketing, or sustainable consumer product businesses during their HND or degree studies.",
        requirements: {
          gpa: "Enrolled OBC student in good academic standing",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Business plan pitch deck (10 slides)",
          references: "Course tutor endorsement"
        }
      },
      {
        id: 3433,
        title: "Digital Marketing & Brand Strategy Executive Masterclass",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Continuing professional development vouchers",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free application",
        tuition: "£850 weekend intensive",
        source: "https://www.oxfordbusinesscollege.ac.uk/courses/short-courses/",
        desc: "Covers performance marketing, search engine optimization, programmatic advertising, content marketing, and brand resonance in European markets.",
        requirements: {
          gpa: "Open to working professionals and students",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "Registration form",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1488,
        name: "Dr. Fayyaz Qureshi",
        title: "Director of Academic Affairs & Professor of Higher Education Management",
        subject: "social-sciences",
        topics: ["Higher Education Quality Assurance", "Vocational Pedagogies", "Student Retention", "Strategic Business Curriculum"],
        source: "https://www.oxfordbusinesscollege.ac.uk/about-us/our-team/",
        summary: "Dr. Qureshi directs academic quality and Pearson accreditation at Oxford Business College, researching educational governance and vocational student mobility."
      },
      {
        id: 1489,
        name: "Dr. Padmesh Gupta",
        title: "Managing Director of Oxford Business College & International Business Scholar",
        subject: "social-sciences",
        topics: ["Transnational Education", "International Trade", "Cross-Cultural Management", "Entrepreneurship"],
        source: "https://www.oxfordbusinesscollege.ac.uk/about-us/our-team/",
        summary: "Dr. Gupta has led Oxford Business College for over two decades, authoring publications on cross-border education and SME internationalization."
      },
      {
        id: 1490,
        name: "Dr. Arshad Jamal",
        title: "Head of Computing and Technology & Data Science Specialist",
        subject: "computer-science",
        topics: ["Cloud Architecture", "Cybersecurity Education", "Data Systems", "Predictive Analytics"],
        source: "https://www.oxfordbusinesscollege.ac.uk/about-us/our-team/",
        summary: "Dr. Jamal oversees computing and digital technologies, investigating digital literacy frameworks and enterprise cloud security adoption."
      }
    ]
  },

  // 19. UK: City of Bristol College
  {
    institution: "City of Bristol College",
    shortName: "City of Bristol College",
    slug: "city-of-bristol-college-bristol",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Bristol, England, United Kingdom",
    website: "https://www.cityofbristol.ac.uk",
    sourceRow: 1246,
    headline: "City of Bristol College: Aerospace Engineering, Creative Arts & Digital Tech Guide",
    overview: "City of Bristol College is one of the largest further and higher education colleges in the South West of England, with major centers including the Advanced Technology Centre (ATC) at Parkway and College Green, celebrated for aerospace engineering apprenticeships, computing, creative arts, and healthcare.",
    description: "Explore foundation degrees, aerospace engineering diplomas, creative arts programs, and scholarships at City of Bristol College in Bristol, UK.",
    heroEyebrow: "South West England Further & Higher Education · Advanced Aerospace & Engineering",
    tuitionText: "Tuition for UK higher education foundation degrees is £7,500 to £9,250 per year (eligible for Student Finance England). International student tuition averages £9,800 to £13,200 annually. Advanced Technology scholarships, West of England apprenticeships, and travel bursaries are available.",
    admissions: {
      masters: "Foundation degrees and HND programs require 64 to 80 UCAS tariff points from A-Levels, BTEC Level 3 Extended Diplomas, or recognized international secondary awards.",
      phd: "Further and higher education college; university level degrees delivered in partnership with the University of Plymouth and University of the West of England (UWE Bristol).",
      language: "IELTS Academic 6.0 overall (minimum 5.5 in each sub-test) for international applicants.",
      proposal: "Personal statement detailing career aspirations in aerospace, engineering, or creative industries.",
      appFee: "Free direct application for FE; UCAS application fee (£28.50) for full-time higher education foundation degrees.",
      documents: "Complete academic transcripts, secondary school certificates, passport copy, personal statement, and one academic reference."
    },
    opportunities: [
      {
        id: 3434,
        title: "West of England Advanced Aerospace Engineering Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering"],
        funding: "£2,500 tuition fee award",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Subsidizes HND or Foundation Degree in Aeronautical Engineering",
        source: "https://www.cityofbristol.ac.uk/study-with-us/financial-support/",
        desc: "Merit scholarship supporting aspiring aerospace and mechanical technicians studying at the state-of-the-art Advanced Technology Centre at Parkway.",
        requirements: {
          gpa: "Level 3 qualification in engineering or mathematics with distinction profile",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "500-word statement on future contributions to the Filton aerospace corridor",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 3435,
        title: "FdEng in Aeronautical Engineering & Aircraft Systems",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "Airbus and Rolls-Royce apprentice sponsored pathways",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "UCAS fee applies",
        tuition: "£8,500 per year for UK students; £12,500 for international students",
        source: "https://www.cityofbristol.ac.uk/courses/aeronautical-engineering-foundation-degree/",
        desc: "Two-year foundation degree validated by University of Plymouth, covering aerodynamics, aircraft propulsion, avionics, flight mechanics, and CAD simulation.",
        requirements: {
          gpa: "Minimum 64 UCAS points including A-Level Mathematics or Physics, or BTEC Level 3 Engineering",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "UCAS personal statement",
          references: "One academic reference"
        }
      },
      {
        id: 3436,
        title: "Foundation Degree in Cyber Security & Network Management",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "South West cyber cluster project grants",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "UCAS fee",
        tuition: "£8,000 per academic year",
        source: "https://www.cityofbristol.ac.uk/courses/cyber-security-foundation-degree/",
        desc: "Delivered in partnership with UWE Bristol, covering network infrastructure, penetration testing, threat intelligence, cloud virtualization, and ethical hacking.",
        requirements: {
          gpa: "64 UCAS tariff points from related computing qualifications",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement detailing computing background",
          references: "One academic reference"
        }
      },
      {
        id: 3437,
        title: "FdSc in Animal Behaviour, Welfare and Conservation Science",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "Bristol Zoological Society field study subsidies",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "UCAS fee",
        tuition: "£8,250 per academic year",
        source: "https://www.cityofbristol.ac.uk/courses/animal-behaviour-and-welfare/",
        desc: "Two-year foundation degree exploring wildlife conservation ecology, veterinary ethology, habitat restoration, and captive animal husbandry.",
        requirements: {
          gpa: "64 UCAS points including biology or environmental science",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement detailing animal care experience",
          references: "One reference letter"
        }
      },
      {
        id: 3438,
        title: "Foundation Degree in Creative Digital Media & Film Production",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "Bristol UNESCO City of Film production awards",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "UCAS fee",
        tuition: "£8,500 per year",
        source: "https://www.cityofbristol.ac.uk/courses/creative-digital-media/",
        desc: "Explores digital cinematography, audio post-production, scriptwriting, color grading in DaVinci Resolve, and documentary filmmaking.",
        requirements: {
          gpa: "64 UCAS points and visual portfolio or showreel",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Showreel link and personal statement",
          references: "One academic reference"
        }
      },
      {
        id: 3439,
        title: "Electric Vehicle High Voltage Maintenance Certification",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering"],
        funding: "West of England Combined Authority green skills funding",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "£1,200 professional qualification",
        source: "https://www.cityofbristol.ac.uk/courses/electric-vehicle-technology/",
        desc: "IMI-accredited qualification training motor vehicle technicians in safely isolating high-voltage lithium battery packs, inverter diagnostics, and EV systems.",
        requirements: {
          gpa: "Level 3 Automotive qualification or equivalent trade experience",
          ielts: "English working fluency",
          gre: "Not required",
          papers: "Proof of trade qualifications",
          references: "Employer letter"
        }
      },
      {
        id: 3440,
        title: "City of Bristol College Higher Education Progression Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "£1,000 cash grant for first-year higher education study",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free application",
        tuition: "Direct student support stipend",
        source: "https://www.cityofbristol.ac.uk/study-with-us/financial-support/",
        desc: "Awarded automatically to eligible students progressing from Level 3 further education courses into higher education foundation degrees at the college.",
        requirements: {
          gpa: "Completed Level 3 qualification at City of Bristol College",
          ielts: "Standard course requirement",
          gre: "Not required",
          papers: "Internal progression application form",
          references: "Department tutor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1491,
        name: "Julia Gray",
        title: "Principal & Chief Executive Officer of City of Bristol College",
        subject: "social-sciences",
        topics: ["Further Education Leadership", "Technical Skills Strategy", "Community Inclusion", "Apprenticeship Models"],
        source: "https://www.cityofbristol.ac.uk/about-us/executive-team/",
        summary: "Julia Gray is Principal and CEO, leading the strategic expansion of advanced technology, apprenticeships, and higher education across Bristol."
      },
      {
        id: 1492,
        name: "Richard Harrison",
        title: "Head of Advanced Technology Centre & Aerospace Engineering Lead",
        subject: "engineering",
        topics: ["Aerospace Engineering", "Avionics Systems", "Additive Manufacturing", "Apprenticeship Training"],
        source: "https://www.cityofbristol.ac.uk/about-us/our-centres/advanced-technology-centre/",
        summary: "Harrison directs the Advanced Technology Centre at Parkway, managing industry partnerships with aerospace manufacturers in the Filton cluster."
      },
      {
        id: 1493,
        name: "Rachel Davies",
        title: "Director of Higher Education & University Partnerships",
        subject: "social-sciences",
        topics: ["Foundation Degree Design", "Widening Participation", "University Articulation", "Quality Assurance"],
        source: "https://www.cityofbristol.ac.uk/about-us/executive-team/",
        summary: "Davies coordinates university validation partnerships with UWE Bristol and University of Plymouth, expanding higher technical education in the West of England."
      }
    ]
  },

  // 20. UK: Hugh Baird College
  {
    institution: "Hugh Baird College",
    shortName: "Hugh Baird College",
    slug: "hugh-baird-college-liverpool",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Bootle, Liverpool, England, United Kingdom",
    website: "https://www.hughbaird.ac.uk",
    sourceRow: 1252,
    headline: "Hugh Baird College: Healthcare, Maritime Logistics & Hugh Baird University Centre",
    overview: "Hugh Baird College in the Liverpool City Region (Bootle) is a leading further and higher education institution featuring the Hugh Baird University Centre (validated by the University of Central Lancashire - UCLan), the Port Academy Liverpool for maritime port logistics, and specialized nursing and health sciences.",
    description: "Explore foundation degrees, maritime logistics certifications, nursing programs, and scholarships at Hugh Baird College in Liverpool, UK.",
    heroEyebrow: "Merseyside University Centre · Health Sciences & Maritime Port Logistics",
    tuitionText: "Tuition for UK higher education degrees at Hugh Baird University Centre is approximately £7,500 to £9,000 per year (covered by Student Finance England). International student tuition averages £9,200 to £12,000 annually. Port Academy scholarships, NHS healthcare traineeships, and adult learner loans are available.",
    admissions: {
      masters: "Higher Education foundation degrees require 64-80 UCAS tariff points from A-Levels, BTEC Level 3, or international secondary qualifications.",
      phd: "Undergraduate higher education centre; degrees validated and conferred by the University of Central Lancashire (UCLan).",
      language: "IELTS Academic 6.0 overall (minimum 5.5 in each component) for international applicants.",
      proposal: "Personal statement detailing career focus in maritime operations, healthcare, or digital computing.",
      appFee: "Free direct application for college courses; UCAS fee applies for full-time university-level foundation degrees.",
      documents: "Complete academic transcripts, secondary school certificates, passport copy, personal statement, and one referee contact."
    },
    opportunities: [
      {
        id: 3441,
        title: "Port Academy Liverpool Maritime Logistics Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "£2,000 tuition fee discount",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Subsidizes foundation degree studies at Port Academy Liverpool",
        source: "https://www.hughbaird.ac.uk/university-centre/financial-support",
        desc: "Merit award supporting students pursuing maritime transport, port freight operations, and supply chain management at the Port of Liverpool campus.",
        requirements: {
          gpa: "Level 3 qualification in business, logistics, or engineering with merit profile",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "500-word statement on modernization of Liverpool container shipping",
          references: "One academic or employer recommendation"
        }
      },
      {
        id: 3442,
        title: "Foundation Degree in Maritime and Port Operations",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "Mersey Maritime industry placement stipends",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "UCAS fee applies",
        tuition: "£7,500 UK / £11,000 international tuition per year",
        source: "https://www.hughbaird.ac.uk/courses/university-centre/maritime-and-port-operations/",
        desc: "Two-year degree validated by UCLan, covering vessel chartering, container port logistics, international maritime law, customs tariffing, and marine safety.",
        requirements: {
          gpa: "Minimum 64 UCAS points from relevant Level 3 qualifications",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement explaining interest in maritime shipping",
          references: "One academic reference"
        }
      },
      {
        id: 3443,
        title: "Foundation Degree in Health and Social Care (Clinical Practice)",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "NHS Liverpool University Hospitals NHS Trust placement support",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "UCAS fee",
        tuition: "£7,500 per academic year",
        source: "https://www.hughbaird.ac.uk/courses/university-centre/health-and-social-care/",
        desc: "Prepares assistant practitioners for roles across Liverpool hospitals and community trusts, focusing on clinical anatomy, physiology, and palliative care.",
        requirements: {
          gpa: "64 UCAS points and DBS enhanced background check",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement detailing healthcare caregiving experience",
          references: "One professional reference"
        }
      },
      {
        id: 3444,
        title: "FdSc in Computing and Systems Development",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "Liverpool City Region digital tech bursaries",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "UCAS fee",
        tuition: "£7,500 per year",
        source: "https://www.hughbaird.ac.uk/courses/university-centre/computing/",
        desc: "Validated by UCLan, covering full-stack software development (C#/.NET), relational database architecture, cybersecurity analysis, and cloud deployment.",
        requirements: {
          gpa: "64 UCAS points in computing, IT, or mathematics",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Statement of technical intent",
          references: "One academic reference"
        }
      },
      {
        id: 3445,
        title: "BA (Hons) in Creative and Performing Arts (Top-Up)",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "Merseyside arts festival performance grants",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "UCAS fee",
        tuition: "£8,000 UK / £11,500 international tuition",
        source: "https://www.hughbaird.ac.uk/courses/university-centre/creative-arts-top-up/",
        desc: "One-year honors degree top-up for foundation degree or HND graduates, exploring contemporary theatrical direction, choreography, digital arts, and event curation.",
        requirements: {
          gpa: "Completed Foundation Degree or HND in drama, dance, or performing arts",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Audition performance or creative portfolio review",
          references: "Two performance references"
        }
      },
      {
        id: 3446,
        title: "Offshore Renewable Energy & Port Engineering Certificate",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "Mersey green maritime transition vouchers",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "£1,100 short course fee",
        source: "https://www.hughbaird.ac.uk/courses/port-academy-liverpool/",
        desc: "Specialized training analyzing offshore wind turbine marshalling, subsea cabling logistics, harbor crane operations, and green port decarbonization.",
        requirements: {
          gpa: "Technical background in engineering, logistics, or marine operations",
          ielts: "English working fluency",
          gre: "Not required",
          papers: "CV and registration form",
          references: "None"
        }
      },
      {
        id: 3447,
        title: "Hugh Baird University Centre Access to Higher Education Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "£1,000 cash bursary",
        status: "Open",
        deadline: "2027-05-20",
        deadlineText: "May 20, 2027",
        fee: "Free application",
        tuition: "Direct student financial support",
        source: "https://www.hughbaird.ac.uk/university-centre/financial-support",
        desc: "Dedicated bursary supporting mature learners and students progressing from Access to HE Diplomas entering undergraduate study at Hugh Baird University Centre.",
        requirements: {
          gpa: "Completed Access to HE Diploma with merit/distinction profile",
          ielts: "Standard admission",
          gre: "Not required",
          papers: "Application form detailing personal circumstance and academic ambition",
          references: "Tutor reference"
        }
      }
    ],
    researchers: [
      {
        id: 1494,
        name: "Rachael Hennigan",
        title: "Principal & Chief Executive Officer of Hugh Baird College",
        subject: "social-sciences",
        topics: ["Further Education Leadership", "Merseyside Economic Renewal", "Social Mobility", "Vocational Curriculum Reform"],
        source: "https://www.hughbaird.ac.uk/about-us/our-leadership/",
        summary: "Rachael Hennigan is Principal and CEO, steering major capital investment into the Port Academy Liverpool and expanding healthcare education."
      },
      {
        id: 1495,
        name: "Colette Mawdsley",
        title: "Dean of Hugh Baird University Centre & Higher Education Lead",
        subject: "social-sciences",
        topics: ["Higher Technical Qualifications", "Widening Participation", "University Validation", "Employer-Led Pedagogy"],
        source: "https://www.hughbaird.ac.uk/university-centre/our-team/",
        summary: "Mawdsley directs the Hugh Baird University Centre, managing undergraduate degree validation with UCLan and promoting academic progression on Merseyside."
      },
      {
        id: 1496,
        name: "Capt. John Wilson",
        title: "Head of Port Academy Liverpool & Master Mariner",
        subject: "engineering",
        topics: ["Maritime Logistics", "Port Freight Operations", "Marine Safety Standards", "Vessel Navigation Simulation"],
        source: "https://www.hughbaird.ac.uk/courses/port-academy-liverpool/",
        summary: "Captain Wilson directs maritime training, having served as a deep-sea master mariner and consulting on Mersey port operations and logistics."
      }
    ]
  }
];
