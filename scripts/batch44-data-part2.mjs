// Batch 44 - Part 2: Universities 11 to 20
// Italy (3), USA (5), UK (2)
// Opps: 5268 to 5337 (70 opps)
// Researchers: 2277 to 2306 (30 researchers)

export const part2Universities = [
  // 11. Italy: Università degli Studi Link (Polo di Matera)
  {
    institution: "Università degli Studi Link (Polo di Matera)",
    slug: "universita-degli-studi-link-matera",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 543,
    location: "Matera, Basilicata, Italy",
    website: "https://www.unilink.it",
    shortName: "Link Campus Matera",
    badge: "Innovative Southern Italian Higher Education",
    overview: "Università degli Studi Link (Link Campus University), founded in Rome and maintaining a dedicated Southern Italian regional campus in the UNESCO World Heritage city of Matera, is an accredited private university known for international relations, business management, digital communications, cybersecurity, and creative cultural heritage management.",
    lead: "Discover digital management degrees, creative cultural heritage masters, Mediterranean geopolitics fellowships, and regional study grants at Link Campus Matera.",
    description: "Università degli Studi Link Matera campus degrees in business, cybersecurity, cultural heritage, international relations, and Italian scholarship options.",
    quickFacts: {
      type: "State-Recognized Private University (Università Non Statale Legalmente Riconosciuta)",
      campus: "Matera Regional Campus, Basilicata, Italy",
      accreditation: "Italian Ministry of University and Research (MUR) / ANVUR",
      admissions: "Evaluation of high school / bachelor diploma and motivational entrance interview",
      language: "Italian and English (bilingual tracks; minimum B2 proficiency)",
      aid: "Link Merit Scholarships, Basilicata Regional Grants (ARDISU) & Corporate Bursaries"
    },
    strengths: [
      "Strategic focus on digital transformation, enterprise cybersecurity, and strategic intelligence",
      "Cultural heritage preservation, multimedia production, and creative industries in Matera",
      "International faculty with senior diplomatic, intelligence, and business executive experience",
      "Blended interactive learning combining digital seminars with immersive workshops"
    ],
    programs: [
      { title: "Laurea Triennale in Economia Aziendale Digitale", level: "Bachelor's Degree", desc: "Three-year undergraduate degree focusing on digital business models, financial analytics, e-commerce strategy, and corporate governance." },
      { title: "Laurea Magistrale in Tecnologie e Gestione dell'Innovazione", level: "Master's Degree", desc: "Two-year postgraduate degree covering technological roadmapping, cybersecurity risk management, and big data enterprise governance." },
      { title: "Master Universitario in Valorizzazione dei Beni Culturali e Territoriali", level: "Master's Degree", desc: "Specialized postgraduate program training cultural asset managers, museum curators, and sustainable cultural tourism leaders." }
    ],
    opportunities: [
      {
        id: 5268,
        title: "Borsa di Studio per il Merito Accademico Link Matera",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Tuition reduction award for incoming Italian and international students demonstrating outstanding secondary school or bachelor performance.",
        funding: "€2,500 annual tuition reduction renewable across degree duration",
        fee: "€50 application evaluation fee",
        tuition: "€5,800 annual standard private university tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.unilink.it/agevolazioni-e-borse-di-studio",
        requirements: {
          gpa: "High school graduation diploma with minimum score of 80/100 or equivalent",
          ielts: "Italian B2 or English B2 depending on program language",
          gre: "Not required",
          papers: "Personal statement detailing motivation and career objectives",
          references: "One letter of reference"
        }
      },
      {
        id: 5269,
        title: "Laurea Triennale in Economia Aziendale Digitale Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Three-year undergraduate program in corporate economics, digital entrepreneurship, financial management, and marketing technology.",
        funding: "Early enrollment fee discounts and regional study subsidies",
        fee: "€50 registration fee",
        tuition: "€5,800 per academic year",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.unilink.it/corsi-di-laurea-triennale/economia-aziendale-digitale",
        requirements: {
          gpa: "Upper secondary school diploma (Diploma di Maturità) or international equivalent",
          ielts: "Italian B2 proficiency",
          gre: "Not required",
          papers: "Secondary school certificate and identity documentation",
          references: "Successful completion of admission interview"
        }
      },
      {
        id: 5270,
        title: "Matera Creative Cultural District Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Three-month professional internship placed with Matera cultural foundations, film production companies, or digital museum archives.",
        funding: "€600 - €900 monthly regional internship reimbursement",
        fee: "€0 application fee",
        tuition: "Curricular university credit",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.unilink.it/ufficio-stage-e-placement",
        requirements: {
          gpa: "Enrolled in 2nd or 3rd year at Link Campus with at least 60 ECTS completed",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Curriculum vitae and project portfolio",
          references: "Endorsement by academic internship tutor"
        }
      },
      {
        id: 5271,
        title: "Laurea Magistrale in Tecnologie e Gestione dell'Innovazione Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Two-year master's curriculum combining digital governance, cloud security architectures, smart organization design, and data ethics.",
        funding: "Corporate co-funded study grants",
        fee: "€50 application fee",
        tuition: "€6,200 per academic year",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.unilink.it/corsi-di-laurea-magistrale/gestione-innovazione",
        requirements: {
          gpa: "Bachelor's degree in economics, engineering, computer science, or communication with at least 180 ECTS",
          ielts: "Italian B2 and English B2",
          gre: "Not required",
          papers: "Transcript of university exams, graduation thesis summary, and CV",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 5272,
        title: "Borsa di Ricerca per la Transizione Digitale del Mezzogiorno",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Research grant supporting graduate student fieldwork on digital modernization and tech adoption in Southern Italian small and medium enterprises.",
        funding: "€3,000 project research grant",
        fee: "€0 application fee",
        tuition: "Direct non-repayable research grant",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.unilink.it/ricerca-scientifica/",
        requirements: {
          gpa: "Master's student in good academic standing (minimum 27/30 exam average)",
          ielts: "Italian and English proficiency",
          gre: "Not required",
          papers: "5-page thesis project proposal focusing on Southern Italian industrial digitalization",
          references: "Faculty research supervisor recommendation"
        }
      },
      {
        id: 5273,
        title: "Master Universitario in Valorizzazione dei Beni Culturali Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "One-year first-level university master's degree training cultural entrepreneurs, museum directors, and audiovisual heritage curators.",
        funding: "Bursaries supported by Basilicata creative industry initiatives",
        fee: "€50 application fee",
        tuition: "€4,500 total master's tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.unilink.it/master/beni-culturali",
        requirements: {
          gpa: "Bachelor's degree in arts, humanities, architecture, or economics",
          ielts: "Italian language fluency",
          gre: "Not required",
          papers: "Motivation statement and cultural project concept note",
          references: "One referee contact"
        }
      },
      {
        id: 5274,
        title: "Borsa Futuro Sud per Imprenditorialità Giovanile",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Targeted scholarship incentive for students resident in Southern Italian regions aiming to launch innovative local startup ventures.",
        funding: "€1,800 tuition contribution per year",
        fee: "€0 application fee",
        tuition: "Credited directly against enrollment fees",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.unilink.it/agevolazioni-e-borse-di-studio",
        requirements: {
          gpa: "Satisfactory academic entry score (minimum 75/100)",
          ielts: "Italian language proficiency",
          gre: "Not required",
          papers: "Short business idea summary and regional development essay",
          references: "Not required"
        }
      }
    ],
    researchers: [
      {
        id: 2277,
        name: "Prof. Carlo Alberto Giusti",
        title: "Rettore e Professore Ordinario",
        department: "Dipartimento di Scienze Economiche e Giuridiche",
        subject: "social-sciences",
        interests: ["Economic Law", "Banking Regulations", "University Management"],
        summary: "Prof. Carlo Alberto Giusti directs academic policy and research at Università degli Studi Link, focusing on financial markets law and institutional governance.",
        source: "https://www.unilink.it/docenti/carlo-alberto-giusti",
        recruiting: "Not verified"
      },
      {
        id: 2278,
        name: "Prof.ssa Paola Paniccia",
        title: "Professoressa Ordinaria di Economia e Gestione delle Imprese",
        department: "Dipartimento di Management e Innovazione",
        subject: "social-sciences",
        interests: ["Strategic Management", "Sustainable Business Models", "Tourism Ecosystems"],
        summary: "Prof.ssa Paola Paniccia researches systemic business management, sustainable destination ecosystems, and organizational governance in heritage sites.",
        source: "https://www.unilink.it/docenti/paola-paniccia",
        recruiting: "Not verified"
      },
      {
        id: 2279,
        name: "Prof. Roberto Pasca di Magliano",
        title: "Professore di Economia Internazionale",
        department: "Dipartimento di Scienze Politiche e Geopolitica",
        subject: "social-sciences",
        interests: ["Mediterranean Economics", "Development Economics", "Geopolitical Trends"],
        summary: "Prof. Roberto Pasca di Magliano analyzes Mediterranean trade corridors, regional economic disparities, and international development strategies.",
        source: "https://www.unilink.it/docenti/roberto-pasca",
        recruiting: "Not verified"
      }
    ]
  },

  // 12. Italy: Università Giustino Fortunato (Sede di Padova)
  {
    institution: "Università Giustino Fortunato (Sede di Padova)",
    slug: "universita-giustino-fortunato-padova",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 547,
    location: "Padova, Veneto, Italy",
    website: "https://www.unifortunato.eu",
    shortName: "UniFortunato Padova",
    badge: "Accredited Law, Psychology & Aviation Sciences",
    overview: "Università degli Studi Giustino Fortunato, legally recognized by the Italian Ministry of University and Research, operates a major university hub in Padova (Veneto). Renowned for its prestigious Faculty of Law, innovative Bachelor in Aeronautical Sciences and Air Transportation, psychology, and education degrees, UniFortunato combines flexible digital learning with on-site seminars and scientific conferences.",
    lead: "Explore aviation sciences degrees, forensic psychology masters, accredited law degrees, and Veneto regional scholarships at UniFortunato Padova.",
    description: "Università Giustino Fortunato Padova campus degrees in law, aviation transport sciences, psychology, education, and Italian tuition aid.",
    quickFacts: {
      type: "State-Recognized Telematic & Campus University",
      campus: "Padova Regional Campus, Veneto, Italy",
      accreditation: "Italian Ministry of University and Research (MUR) / ANVUR",
      admissions: "Open admission with diploma verification and diagnostic skills test (OFA)",
      language: "Italian (minimum B2 level for native degree tracks)",
      aid: "UniFortunato Merit Grants & National Right to Study Subsidies"
    },
    strengths: [
      "Unique Bachelor of Science in Aviation and Aerospace Transportation Management",
      "Accredited five-year single-cycle Master of Laws (Laurea Magistrale a Ciclo Unico in Giurisprudenza)",
      "High-level research center in behavioural sciences, clinical psychology, and neuroethics",
      "Modern blended educational model with personalized e-tutors and live workshops in Padova"
    ],
    programs: [
      { title: "Laurea Triennale in Scienze e Tecnologie dei Trasporti Aeronautici", level: "Bachelor's Degree", desc: "Specialized three-year degree training flight operations managers, airport directors, air navigation controllers, and aerospace logistics specialists." },
      { title: "Laurea Magistrale a Ciclo Unico in Giurisprudenza", level: "Master's Degree", desc: "Five-year qualifying law degree covering European civil law, criminal procedure, administrative justice, and international corporate jurisprudence." },
      { title: "Laurea Magistrale in Psicologia Comportamentale e Forense", level: "Master's Degree", desc: "Two-year postgraduate degree preparing licensed psychologists in forensic diagnostics, investigative psychology, and clinical interventions." }
    ],
    opportunities: [
      {
        id: 5275,
        title: "Borsa di Studio per le Scienze Aeronautiche UniFortunato",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Merit scholarship awarded to top applicants enrolling in the Aviation Transport Management bachelor's program at the Padova campus.",
        funding: "€1,500 annual tuition deduction",
        fee: "€0 application fee",
        tuition: "€2,800 standard annual university tuition",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.unifortunato.eu/agevolazioni-economiche/",
        requirements: {
          gpa: "High school graduation diploma with minimum score of 75/100",
          ielts: "Italian B2 and English B1",
          gre: "Not required",
          papers: "Motivation essay on career goals in air transport or aerospace management",
          references: "Not required"
        }
      },
      {
        id: 5276,
        title: "Laurea in Scienze e Tecnologie dei Trasporti Aeronautici Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Three-year undergraduate program covering aeronautical meteorology, air traffic law, airport operations engineering, and flight safety management.",
        funding: "Agreements with flight training schools (ATO) and airport authorities",
        fee: "€0 application fee",
        tuition: "€2,800 per academic year",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.unifortunato.eu/corsi-di-laurea/scienze-e-tecnologie-dei-trasporti/",
        requirements: {
          gpa: "Upper secondary school diploma or equivalent",
          ielts: "Italian language proficiency",
          gre: "Not required",
          papers: "Diploma certification and registration documentation",
          references: "Not required"
        }
      },
      {
        id: 5277,
        title: "Tirocinio Formativo presso Autorità Aeroportuali del Veneto",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Three-month curricular internship with Venice/Verona airport management groups or regional civil aviation operators.",
        funding: "€500 - €800 monthly internship reimbursement",
        fee: "€0 application fee",
        tuition: "Credited as academic internship credits (CFU)",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.unifortunato.eu/ufficio-stage-e-tirocini/",
        requirements: {
          gpa: "Completed at least 90 ECTS in aeronautical transport degree",
          ielts: "Italian B2 and English B2",
          gre: "Not required",
          papers: "Curriculum vitae and academic record transcript",
          references: "Approval of university internship coordinator"
        }
      },
      {
        id: 5278,
        title: "Laurea Magistrale a Ciclo Unico in Giurisprudenza Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Five-year integrated qualifying law degree preparing future judges, magistrates, attorneys, and public sector administrative officials.",
        funding: "Early enrollment tuition discounts and youth study subsidies",
        fee: "€0 application fee",
        tuition: "€2,800 per academic year",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.unifortunato.eu/corsi-di-laurea/giurisprudenza/",
        requirements: {
          gpa: "Upper secondary school diploma",
          ielts: "Italian language fluency",
          gre: "Not required",
          papers: "School leaving certificate and identification documents",
          references: "Not required"
        }
      },
      {
        id: 5279,
        title: "Borsa di Ricerca Giuridico-Economica \"Giustino Fortunato\"",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Research grant supporting legal and economic graduate thesis research into Southern Italian economic development and transport connectivity.",
        funding: "€2,500 research grant and digital law library subscription",
        fee: "€0 application fee",
        tuition: "Direct thesis research funding",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.unifortunato.eu/ricerca/borse-di-ricerca/",
        requirements: {
          gpa: "Graduating master's student with minimum 28/30 grade average in core legal subjects",
          ielts: "Italian proficiency",
          gre: "Not required",
          papers: "5-page thesis abstract and methodological approach document",
          references: "Supervising law professor reference"
        }
      },
      {
        id: 5280,
        title: "Laurea Magistrale in Psicologia Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-year master's degree qualifying graduates for the Italian state licensing examination (Esame di Stato) for professional psychologists.",
        funding: "Regional health internship bursaries",
        fee: "€0 application fee",
        tuition: "€2,800 per academic year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.unifortunato.eu/corsi-di-laurea/psicologia-magistrale/",
        requirements: {
          gpa: "Bachelor's degree in psychological sciences and techniques (L-24) with 180 ECTS",
          ielts: "Italian B2 proficiency",
          gre: "Not required",
          papers: "Bachelor's degree transcripts and CV",
          references: "Not required"
        }
      },
      {
        id: 5281,
        title: "Agevolazione Giovani Studenti Under 21",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Financial incentive program reducing tuition fees for students under 21 enrolling directly after secondary school graduation.",
        funding: "€800 reduction on first-year tuition fees",
        fee: "€0 application fee",
        tuition: "Reduces annual cost to €2,000",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.unifortunato.eu/agevolazioni-economiche/",
        requirements: {
          gpa: "Age 21 or younger at time of enrollment with recognized diploma",
          ielts: "Italian proficiency",
          gre: "Not required",
          papers: "Birth certificate / ID card and high school diploma",
          references: "Not required"
        }
      }
    ],
    researchers: [
      {
        id: 2280,
        name: "Prof. Avv. Giuseppe Acocella",
        title: "Magnifico Rettore e Professore Ordinario",
        department: "Dipartimento di Scienze Giuridiche ed Economiche",
        subject: "social-sciences",
        interests: ["Philosophy of Law", "Social Ethics", "Italian Constitutional History"],
        summary: "Prof. Avv. Giuseppe Acocella presides over Università Giustino Fortunato, authoring leading treatises on jurisprudence, civic ethics, and constitutionalism.",
        source: "https://www.unifortunato.eu/ateneo/rettorato/",
        recruiting: "Not verified"
      },
      {
        id: 2281,
        name: "Prof. Fabrizio Corona",
        title: "Professore Ordinario di Didattica e Pedagogia Speciale",
        department: "Dipartimento di Scienze Umane e dell'Educazione",
        subject: "social-sciences",
        interests: ["Inclusive Pedagogies", "Special Educational Needs", "Neurodevelopmental Learning"],
        summary: "Prof. Fabrizio Corona directs research in assistive educational technologies, special education frameworks, and cognitive learning rehabilitation.",
        source: "https://www.unifortunato.eu/docenti/fabrizio-corona/",
        recruiting: "Not verified"
      },
      {
        id: 2282,
        name: "Prof.ssa Katia La Regina",
        title: "Professoressa di Diritto Processuale Penale",
        department: "Dipartimento di Scienze Giuridiche",
        subject: "social-sciences",
        interests: ["Criminal Procedure", "European Human Rights Law", "Digital Evidence Admissibility"],
        summary: "Prof.ssa Katia La Regina investigates procedural criminal law, transnational police cooperation, and constitutional guarantees in digital investigations.",
        source: "https://www.unifortunato.eu/docenti/katia-la-regina/",
        recruiting: "Not verified"
      }
    ]
  },

  // 13. Italy: Università Telematica Pegaso (Sede di Foggia)
  {
    institution: "Università Telematica Pegaso (Sede di Foggia)",
    slug: "universita-telematica-pegaso-foggia",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 555,
    location: "Foggia, Puglia, Italy",
    website: "https://www.unipegaso.it",
    shortName: "UniPegaso Foggia",
    badge: "Accredited Digital Degree Hub in Puglia",
    overview: "Università Telematica Pegaso, Italy's premier accredited online university recognized by Ministerial Decree, maintains a modern examination and regional learning centre in Foggia, Puglia. Delivering state-accredited degree qualifications in economics, education, law, civil engineering, and sports science, the Foggia center provides local student support, physical exams, and blended workshops.",
    lead: "Discover accredited digital degrees in civil engineering, economics, sports science, and Puglia regional study bursaries at UniPegaso Foggia.",
    description: "Università Telematica Pegaso Foggia campus degree programs in engineering, economics, education, law, and accredited Italian online qualifications.",
    quickFacts: {
      type: "State-Recognized Telematic University (Università Telematica Statutaria)",
      campus: "Foggia Regional Examination & Study Center, Puglia, Italy",
      accreditation: "Italian Ministry of University and Research (MUR) / ANVUR",
      admissions: "Rolling open enrollment year-round with diploma recognition",
      language: "Italian (all instructional materials in Italian; B2 level recommended)",
      aid: "UniPegaso Special Convention Programs (All-inclusive agreements) & Student Aid"
    },
    strengths: [
      "24/7 accessible digital cloud learning platform with continuous self-assessment testing",
      "Full academic accreditation with degrees bearing identical legal validity to traditional Italian universities",
      "Local examination and in-person graduation assistance at the prestigious Foggia historic venue",
      "Special tuition reduction conventions with public administration, armed forces, and professional associations"
    ],
    programs: [
      { title: "Laurea Triennale in Ingegneria Civile", level: "Bachelor's Degree", desc: "Three-year engineering program covering structural mechanics, hydraulics, geotechnical engineering, and transportation infrastructure." },
      { title: "Laurea Triennale in Scienze dell'Educazione e della Formazione", level: "Bachelor's Degree", desc: "Foundational education curriculum preparing community educators, vocational trainers, and childhood development pedagogists." },
      { title: "Laurea Triennale in Scienze Motorie", level: "Bachelor's Degree", desc: "Three-year sports science degree covering exercise physiology, athletic training methodology, biomechanics, and sports management." }
    ],
    opportunities: [
      {
        id: 5282,
        title: "Borsa di Studio \"Futuro Digitale\" UniPegaso Foggia",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Tuition discount scholarship supporting local Pugliese students enrolling in digital undergraduate and graduate programs.",
        funding: "€1,200 annual tuition reduction (lowering tuition from €3,000 to €1,800)",
        fee: "€0 application fee",
        tuition: "€1,800 subsidized annual tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.unipegasofoggia.it/convenzioni-e-agevolazioni/",
        requirements: {
          gpa: "Upper secondary school diploma (Diploma di Maturità)",
          ielts: "Italian language fluency",
          gre: "Not required",
          papers: "Enrollment contract and identity documentation",
          references: "Not required"
        }
      },
      {
        id: 5283,
        title: "Laurea Triennale in Ingegneria Civile Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Accredited three-year bachelor's degree in civil engineering providing theoretical foundations and computer-aided structural design.",
        funding: "Eligible for professional engineering order study subsidies",
        fee: "€0 application fee",
        tuition: "€2,000 per academic year under university convention",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.unipegaso.it/corsi-di-laurea/ingegneria-civile",
        requirements: {
          gpa: "High school graduation diploma with mathematics foundation",
          ielts: "Italian language proficiency",
          gre: "Not required",
          papers: "Certified diploma copies and tax code documentation",
          references: "Not required"
        }
      },
      {
        id: 5284,
        title: "Tirocinio Tecnico-Professionale Ingegneria a Foggia",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Curricular 150-hour technical internship with civil engineering consulting studios, construction firms, or municipal technical offices in Foggia province.",
        funding: "CFU university internship credits and professional mentorship",
        fee: "€0 application fee",
        tuition: "Integrated in degree enrollment",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.unipegaso.it/tirocini-e-stage",
        requirements: {
          gpa: "Completion of at least 80 ECTS in civil engineering coursework",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Internship educational project signed by enterprise tutor",
          references: "Approval of academic internship director"
        }
      },
      {
        id: 5285,
        title: "Laurea Triennale in Scienze dell'Educazione e della Formazione Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year qualification for early childhood educators, socio-cultural animators, and corporate human resources trainers.",
        funding: "Special fee agreements for school educators and civil service volunteers",
        fee: "€0 application fee",
        tuition: "€1,800 annual tuition fee under convention",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.unipegaso.it/corsi-di-laurea/scienze-educazione",
        requirements: {
          gpa: "Secondary school diploma or recognized international equivalent",
          ielts: "Italian language competence",
          gre: "Not required",
          papers: "Enrollment application and transcripts",
          references: "Not required"
        }
      },
      {
        id: 5286,
        title: "Laurea Triennale in Scienze Motorie Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Comprehensive degree program in physical education, kinesiology, athletic preparation, and adapted physical activities for rehabilitation.",
        funding: "CONI and sports federation educational discounts",
        fee: "€0 application fee",
        tuition: "€2,000 per academic year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.unipegaso.it/corsi-di-laurea/scienze-motorie",
        requirements: {
          gpa: "Secondary school graduation diploma and certificate of sports medical fitness",
          ielts: "Italian language proficiency",
          gre: "Not required",
          papers: "Medical fitness certificate and secondary school diploma",
          references: "Not required"
        }
      },
      {
        id: 5287,
        title: "Borsa di Studio Donne per le STEM UniPegaso",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Targeted scholarship promoting female participation in civil engineering, computer science, and technical sciences degrees.",
        funding: "€1,000 annual fee deduction across full bachelor's degree",
        fee: "€0 application fee",
        tuition: "Direct fee reduction",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.unipegaso.it/agevolazioni-economiche/",
        requirements: {
          gpa: "Female students enrolling in STEM engineering bachelor programs",
          ielts: "Italian proficiency",
          gre: "Not required",
          papers: "Enrollment application and personal statement on STEM aspirations",
          references: "Not required"
        }
      },
      {
        id: 5288,
        title: "Master di Primo Livello in Management per le Funzioni di Coordinamento Sanitario",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "One-year 60-ECTS postgraduate university master's degree training healthcare department coordinators, nursing managers, and medical clinic administrators.",
        funding: "Health ministry training vouchers and CME accreditation credits",
        fee: "€0 application fee",
        tuition: "€1,200 total master's tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.unipegaso.it/master/coordinamento-sanitario",
        requirements: {
          gpa: "Bachelor's degree in nursing, healthcare professions, or medicine",
          ielts: "Italian language fluency",
          gre: "Not required",
          papers: "Professional license registry number and degree certificate",
          references: "Not required"
        }
      }
    ],
    researchers: [
      {
        id: 2283,
        name: "Prof. Pierpaolo Limone",
        title: "Rettore e Professore Ordinario",
        department: "Dipartimento di Scienze della Formazione e Didattica Digitale",
        subject: "social-sciences",
        interests: ["Digital Pedagogy", "Educational Technology", "Media Education"],
        summary: "Prof. Pierpaolo Limone presides over Università Telematica Pegaso, conducting pioneering research on digital classroom architectures and AI in e-learning.",
        source: "https://www.unipegaso.it/ateneo/governance",
        recruiting: "Not verified"
      },
      {
        id: 2284,
        name: "Prof.ssa Rosita Deluigi",
        title: "Professoressa Ordinaria di Pedagogia Generale e Sociale",
        department: "Facoltà di Scienze Umane",
        subject: "social-sciences",
        interests: ["Intercultural Pedagogy", "Community Inclusion", "Intergenerational Learning"],
        summary: "Prof.ssa Rosita Deluigi investigates community educational dynamics, participatory action research, and pedagogical inclusion in southern Italian municipalities.",
        source: "https://www.unipegaso.it/docenti/rosita-deluigi",
        recruiting: "Not verified"
      },
      {
        id: 2285,
        name: "Prof. Ing. Gaetano Ciaravino",
        title: "Professore di Idraulica e Costruzioni Idrauliche",
        department: "Facoltà di Ingegneria",
        subject: "engineering",
        interests: ["Hydraulic Engineering", "Flood Risk Management", "Urban Drainage Systems"],
        summary: "Prof. Ing. Gaetano Ciaravino researches computational fluid mechanics, sustainable urban drainage networks, and hydraulic flood prevention.",
        source: "https://www.unipegaso.it/docenti/gaetano-ciaravino",
        recruiting: "Not verified"
      }
    ]
  },

  // 14. USA: Carrington College (Reno Campus)
  {
    institution: "Carrington College (Reno Campus)",
    slug: "carrington-college-reno",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 620,
    location: "Reno, Nevada, USA",
    website: "https://carrington.edu/location/reno-nevada",
    shortName: "Carrington College Reno",
    badge: "Accredited Allied Healthcare & Nursing College",
    overview: "Carrington College, founded in 1967 and maintaining an accredited state-of-the-art healthcare campus in Reno, Nevada, is a dedicated institution of allied health and nursing education. Institutionally accredited by the Accrediting Commission for Community and Junior Colleges (ACCJC/WASC), Carrington prepares licensed practical nurses, medical assistants, dental hygienists, and respiratory therapists through clinical simulation labs and regional hospital externships.",
    lead: "Explore associate degrees in nursing, dental hygiene, respiratory care, and Nevada healthcare career grants at Carrington College Reno.",
    description: "Carrington College Reno campus degree programs in nursing, medical assisting, respiratory care, dental hygiene, and federal financial aid.",
    quickFacts: {
      type: "Accredited Private Allied Health College",
      campus: "Kietzke Lane Campus, Reno, Nevada",
      accreditation: "Accrediting Commission for Community and Junior Colleges (ACCJC) / WASC",
      admissions: "High school diploma / GED plus Wonderlic basic skills and clinical background clearance",
      language: "English (standard high school level proficiency)",
      aid: "Federal Title IV Aid (Pell Grants, Direct Loans) & Nevada Silver State Career Scholarships"
    },
    strengths: [
      "High-fidelity clinical simulation hospital suites with computerized patient mannequins",
      "Accredited Registered Nursing (ADN) and Practical Nursing programs recognized by the Nevada State Board of Nursing",
      "Direct clinical rotation partnerships with Renown Health and Saint Mary's Regional Medical Center in Reno",
      "Career services department providing lifelong graduate employment placement assistance"
    ],
    programs: [
      { title: "Associate of Science in Nursing (ADN)", level: "Associate Degree", desc: "Two-year clinical degree preparing students for the NCLEX-RN licensing examination and professional hospital nursing practice." },
      { title: "Associate of Science in Respiratory Care", level: "Associate Degree", desc: "Specialized respiratory therapy program accredited by CoARC, training practitioners in ventilator management, CPR, and pulmonary medicine." },
      { title: "Certificate in Medical Assisting", level: "Certificate", desc: "Nine-month hands-on curriculum covering phlebotomy, EKG administration, clinical documentation, and outpatient practice management." }
    ],
    opportunities: [
      {
        id: 5289,
        title: "Carrington Nevada Healthcare Career Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Merit-based tuition scholarship awarded to incoming Nevada residents enrolled in full-time nursing or allied health associate programs.",
        funding: "$2,500 direct tuition credit across program academic year",
        fee: "$0 application fee",
        tuition: "$18,500 total annual program tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://carrington.edu/financial-aid/scholarships/",
        requirements: {
          gpa: "High school GPA of 2.75 or minimum score of 500 on GED",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "500-word essay explaining dedication to healthcare service in Northern Nevada",
          references: "One personal or employer reference"
        }
      },
      {
        id: 5290,
        title: "Associate of Science in Nursing (ADN) Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        desc: "Comprehensive associate degree program training future Registered Nurses through clinical hospital rotations and simulation laboratories.",
        funding: "Federal Pell Grants up to $7,395/year and subsidized Stafford loans",
        fee: "$50 TEAS entrance testing fee",
        tuition: "$21,000 per academic year",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://carrington.edu/program/registered-nursing/",
        requirements: {
          gpa: "High school diploma or GED with completion of college-level anatomy and physiology",
          ielts: "English fluency",
          gre: "Not required; passing score on ATI TEAS entrance exam required",
          papers: "Immunization records, background check, and official transcripts",
          references: "Two professional reference contacts"
        }
      },
      {
        id: 5291,
        title: "Renown Health Clinical Nursing Externship",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Supervised 240-hour acute care hospital clinical rotation in medical-surgical, pediatric, and intensive care units at Renown Regional Medical Center.",
        funding: "Clinical practice credits and healthcare partner uniform/scrub stipend",
        fee: "$0 application fee",
        tuition: "Included in course registration fees",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://carrington.edu/student-services/clinical-externships/",
        requirements: {
          gpa: "Enrolled in ADN program in good academic standing (minimum 80% course exam average)",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Current AHA BLS CPR certification and 10-panel drug screening clearance",
          references: "Clinical nursing faculty evaluation"
        }
      },
      {
        id: 5292,
        title: "Associate of Science in Respiratory Care Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "engineering"],
        desc: "CoARC-accredited degree program teaching advanced cardiopulmonary mechanics, mechanical ventilation, and neonatal respiratory therapy.",
        funding: "Title IV federal student assistance and veteran GI Bill benefits",
        fee: "$0 application fee",
        tuition: "$19,500 annual tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://carrington.edu/program/respiratory-care/",
        requirements: {
          gpa: "High school graduation with chemistry and algebra prerequisites",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Proof of high school completion and Wonderlic entrance examination",
          references: "Not required"
        }
      },
      {
        id: 5293,
        title: "Certificate in Medical Assisting Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        desc: "Nine-month comprehensive training program preparing graduates for CMA (AAMA) or RMA national credentialing examinations.",
        funding: "Nevada workforce innovation grants (WIOA) eligible",
        fee: "$0 application fee",
        tuition: "$14,200 total certificate cost",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://carrington.edu/program/medical-assisting/",
        requirements: {
          gpa: "High school diploma or GED equivalent",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Enrollment agreement and official identification",
          references: "Not required"
        }
      },
      {
        id: 5294,
        title: "Carrington High School Graduate Opportunity Award",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Tuition award supporting recent high school graduates who immediately transition into allied healthcare certificate or associate programs.",
        funding: "$1,500 tuition discount voucher",
        fee: "$0 application fee",
        tuition: "Applied toward first-semester tuition",
        deadline: "2027-07-01",
        deadlineText: "July 1, 2027",
        source: "https://carrington.edu/financial-aid/scholarships/",
        requirements: {
          gpa: "High school graduation within the preceding 12 months with minimum 2.5 GPA",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Official high school transcript confirming graduation",
          references: "High school counselor verification"
        }
      },
      {
        id: 5295,
        title: "Dental Hygiene Clinical Practicum at Carrington Dental Clinic",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Extensive hands-on outpatient clinical training providing dental cleanings, fluoride treatments, and dental radiography to the Reno public community.",
        funding: "Supervised clinical instruction and patient care certification",
        fee: "$0 application fee",
        tuition: "Covered under standard lab fees",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://carrington.edu/location/reno-nevada/dental-clinic/",
        requirements: {
          gpa: "Enrolled in Carrington Dental Hygiene program",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Nevada state student hygienist license clearance and health records",
          references: "Clinical director authorization"
        }
      }
    ],
    researchers: [
      {
        id: 2286,
        name: "Dr. Amanda Perkins",
        title: "Dean of Nursing and Health Professions",
        department: "Department of Registered Nursing",
        subject: "biology",
        interests: ["Clinical Simulation Pedagogy", "Patient Safety in Acute Care", "Nurse Retention Strategies"],
        summary: "Dr. Amanda Perkins coordinates clinical instruction and accreditation at Carrington College Reno, specializing in high-fidelity simulation and NCLEX-RN pass rate optimization.",
        source: "https://carrington.edu/location/reno-nevada/faculty/",
        recruiting: "Not verified"
      },
      {
        id: 2287,
        name: "Robert MacIntyre, RRT",
        title: "Program Director of Respiratory Care",
        department: "Department of Respiratory Therapy",
        subject: "biology",
        interests: ["Mechanical Ventilation Weaning", "Cardiopulmonary Diagnostics", "Critical Care Protocols"],
        summary: "Robert MacIntyre leads clinical education in respiratory care, training practitioners in pediatric ventilation, critical care trauma, and advanced airway management.",
        source: "https://carrington.edu/location/reno-nevada/faculty/",
        recruiting: "Not verified"
      },
      {
        id: 2288,
        name: "Lisa Reynolds, CDA",
        title: "Lead Instructor in Dental Assisting & Hygiene",
        department: "Department of Dental Sciences",
        subject: "biology",
        interests: ["Preventative Dental Hygiene", "Digital Radiography", "Infection Control in Dentistry"],
        summary: "Lisa Reynolds trains dental health practitioners in community preventative care, four-handed dentistry, and modern digital diagnostic imaging.",
        source: "https://carrington.edu/location/reno-nevada/faculty/",
        recruiting: "Not verified"
      }
    ]
  },

  // 15. USA: Carroll College (Montana)
  {
    institution: "Carroll College (Montana)",
    slug: "carroll-college-montana",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 621,
    location: "Helena, Montana, USA",
    website: "https://www.carroll.edu",
    shortName: "Carroll College",
    badge: "Top Regional College in the American West",
    overview: "Carroll College, founded in 1909 in Montana's state capital of Helena, is a premier private Catholic liberal arts college. Ranked consistently by U.S. News & World Report as the #1 Regional College in the West, Carroll is nationally celebrated for its pre-medical placement rate (over 85%), pioneering Anthrozoology program, civil engineering, nursing, and environmental science.",
    lead: "Explore pre-med excellence, anthrozoology degrees, civil engineering bachelors, and Montana presidential scholarships at Carroll College Helena.",
    description: "Carroll College Montana degree programs in pre-medicine, anthrozoology, civil engineering, nursing, and merit-based financial aid.",
    quickFacts: {
      type: "Private Catholic Liberal Arts College",
      campus: "Benton Avenue Hilltop Campus, Helena, Montana",
      accreditation: "Northwest Commission on Colleges and Universities (NWCCU) / ABET & CCNE",
      admissions: "Holistic review of high school transcript, personal essay, and optional ACT/SAT scores",
      language: "English (TOEFL iBT 79 or IELTS 6.5 for international students)",
      aid: "Carroll Presidential & Trustee Merit Scholarships (up to $25,000/year)"
    },
    strengths: [
      "Extraordinary pre-medicine placement rate with graduates admitted to top medical schools nationwide",
      "World-first undergraduate major in Anthrozoology studying the human-animal bond and canine training",
      "ABET-accredited Civil and Mechanical Engineering programs with 100% FE examination pass rates",
      "Magnificent Rocky Mountain wilderness setting providing direct field access for environmental ecology research"
    ],
    programs: [
      { title: "Bachelor of Arts in Anthrozoology", level: "Bachelor's Degree", desc: "Internationally renowned program training service dogs, studying animal behaviour, equine therapy, and ethical human-animal interactions." },
      { title: "Bachelor of Science in Biology (Pre-Medicine Track)", level: "Bachelor's Degree", desc: "Rigorous curriculum in anatomy, human physiology, molecular genetics, and organic chemistry paired with hospital clinical shadowing." },
      { title: "Bachelor of Science in Civil Engineering", level: "Bachelor's Degree", desc: "ABET-accredited engineering degree covering structural design, geotechnical hydrology, environmental remediation, and seismic resilience." }
    ],
    opportunities: [
      {
        id: 5296,
        title: "Carroll College Presidential Merit Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "engineering", "social-sciences"],
        desc: "Four-year merit scholarship awarded to incoming freshmen based on high school GPA and rigorous academic curriculum.",
        funding: "Up to $25,000 per year ($100,000 over four years)",
        fee: "$0 application fee (Carroll operates fee-free applications)",
        tuition: "$39,500 annual undergraduate tuition",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        source: "https://www.carroll.edu/scholarships-aid/merit-scholarships",
        requirements: {
          gpa: "High school GPA of 3.8 or higher with honors / AP / IB courses",
          ielts: "IELTS 6.5 or TOEFL iBT 79",
          gre: "SAT/ACT test-optional",
          papers: "Common Application or Carroll application essay",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 5297,
        title: "Bachelor of Arts in Anthrozoology Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Four-year bachelor's degree featuring hands-on dog foster training, equine ethology, wildlife conservation, and human-animal psychology.",
        funding: "Eligible for Carroll endowed pet-care and animal science bursaries",
        fee: "$0 application fee",
        tuition: "$39,500 per academic year",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.carroll.edu/anthrozoology",
        requirements: {
          gpa: "High school diploma with minimum 3.0 GPA",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Personal statement detailing animal care or welfare background",
          references: "One letter of reference"
        }
      },
      {
        id: 5298,
        title: "Rocky Mountain Wilderness Ecology Field Practicum",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Ten-week summer ecological field research internship in Glacier National Park and the Helena National Forest studying native carnivores and alpine watershed quality.",
        funding: "$4,500 summer research stipend plus backcountry field accommodations",
        fee: "$0 application fee",
        tuition: "Supported by National Science Foundation REU grant",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.carroll.edu/undergraduate-research",
        requirements: {
          gpa: "Minimum 3.2 GPA in biology or environmental science",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Resume and 2-page essay on ecological field research interests",
          references: "Two faculty recommendation letters"
        }
      },
      {
        id: 5299,
        title: "Bachelor of Science in Biology (Pre-Med Track) Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Elite four-year curriculum designed for aspiring physicians, dentists, and biomedical scientists, featuring extensive hospital shadowing at St. Peter's Health.",
        funding: "Carroll Trustee Scholarships and Health Sciences Endowed Awards",
        fee: "$0 application fee",
        tuition: "$39,500 per academic year",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.carroll.edu/biology/pre-medicine",
        requirements: {
          gpa: "High school GPA of 3.5 or higher with AP/IB biology and chemistry",
          ielts: "IELTS 6.5 or TOEFL iBT 80",
          gre: "Not required",
          papers: "High school transcript and personal statement",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 5300,
        title: "Carroll Pre-Med Hospital Clinical Shadowing Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Structured semester-long clinical observation rotation shadowing emergency physicians, orthopedic surgeons, and pediatricians at St. Peter's Health.",
        funding: "Academic clinical credit and pre-med committee endorsement",
        fee: "$0 application fee",
        tuition: "Included in semester registration",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.carroll.edu/pre-med/clinical-experience",
        requirements: {
          gpa: "Junior or senior standing with minimum 3.5 GPA in science coursework",
          ielts: "English fluency",
          gre: "Not required",
          papers: "HIPAA compliance clearance, criminal background check, and statement of intent",
          references: "Carroll Pre-Medical Committee recommendation"
        }
      },
      {
        id: 5301,
        title: "Bachelor of Science in Civil Engineering Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "ABET-accredited four-year engineering degree providing comprehensive training in structural analysis, steel and concrete design, and geotechnical modeling.",
        funding: "Montana Engineering Association and Carroll STEM scholarships",
        fee: "$0 application fee",
        tuition: "$39,500 per academic year",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.carroll.edu/civil-engineering",
        requirements: {
          gpa: "Strong high school math and physics background (pre-calculus/calculus)",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Official transcripts and personal statement",
          references: "One mathematics or science instructor recommendation"
        }
      },
      {
        id: 5302,
        title: "Bishop Carroll Catholic Heritage Leadership Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Endowed scholarship for students demonstrating active community leadership, faith-based service, and ethical citizenship.",
        funding: "$3,000 annual scholarship award",
        fee: "$0 application fee",
        tuition: "Direct tuition reduction",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.carroll.edu/scholarships-aid/donor-funded-scholarships",
        requirements: {
          gpa: "Minimum high school GPA of 3.0",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Community service log and 500-word essay on ethical leadership",
          references: "Letter from community organization leader or parish priest"
        }
      }
    ],
    researchers: [
      {
        id: 2289,
        name: "Dr. John Cech",
        title: "President and Professor of Higher Education",
        department: "Office of the President",
        subject: "social-sciences",
        interests: ["Higher Education Leadership", "Workforce Development", "Rural Access to College"],
        summary: "Dr. John Cech presides over Carroll College, advancing healthcare education partnerships, campus facilities modernization, and undergraduate STEM research.",
        source: "https://www.carroll.edu/about/office-president",
        recruiting: "Not verified"
      },
      {
        id: 2290,
        name: "Dr. Marie Suthers, DVM",
        title: "Associate Professor and Chair of Anthrozoology",
        department: "Department of Anthrozoology",
        subject: "biology",
        interests: ["Human-Animal Ethology", "Service Dog Training Protocols", "Equine-Facilitated Therapy"],
        summary: "Dr. Marie Suthers directs Carroll's renowned Anthrozoology program, studying physiological stress reduction in human-canine interactions and canine cognition.",
        source: "https://www.carroll.edu/faculty/marie-suthers",
        recruiting: "Not verified"
      },
      {
        id: 2291,
        name: "Dr. Grant Hokit",
        title: "Professor of Biology",
        department: "Department of Natural Sciences",
        subject: "biology",
        interests: ["Vector-Borne Disease Ecology", "Herpetology", "West Nile Virus Dynamics"],
        summary: "Dr. Grant Hokit leads epidemiological and ecological field studies in Montana, examining mosquito transmission vectors and climate impacts on amphibian populations.",
        source: "https://www.carroll.edu/faculty/grant-hokit",
        recruiting: "Not verified"
      }
    ]
  },

  // 16. USA: Carroll University (Wisconsin)
  {
    institution: "Carroll University (Wisconsin)",
    slug: "carroll-university-wisconsin",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 622,
    location: "Waukesha, Wisconsin, USA",
    website: "https://www.carrollu.edu",
    shortName: "Carroll University",
    badge: "Wisconsin's Oldest Four-Year Higher Education Institution",
    overview: "Carroll University, chartered in 1846 in Waukesha, Wisconsin (Milwaukee metropolitan area), is Wisconsin's pioneer four-year institution of higher learning. Renowned nationally for its premier healthcare programs—including physical therapy (DPT), occupational therapy, athletic training, and nursing—Carroll blends rigorous professional clinical preparation with an innovative Cross-Cultural Experience curriculum.",
    lead: "Explore Doctor of Physical Therapy programs, direct-entry nursing bachelors, graphic design, and Wisconsin pioneer scholarships at Carroll University Waukesha.",
    description: "Carroll University Wisconsin degree courses in physical therapy, nursing, business, graphic communication, and merit-based institutional scholarships.",
    quickFacts: {
      type: "Private Comprehensive Pioneer University",
      campus: "Main Campus & Center for Graduate Studies, Waukesha, Wisconsin",
      accreditation: "Higher Learning Commission (HLC) / CAPTE & CCNE",
      admissions: "Rolling admission with evaluation of high school transcripts and extracurricular profile",
      language: "English (IELTS 6.5 or TOEFL iBT 79 for international applicants)",
      aid: "Carroll Pioneer & Trustee Scholarships (up to $23,000/year)"
    },
    strengths: [
      "Top-tier Doctor of Physical Therapy (DPT) program with 100% board pass rates",
      "Direct-entry Bachelor of Science in Nursing (BSN) with on-site clinical simulation hospital",
      "Innovative Cross-Cultural Experience (CCE) requirement integrating domestic and international field study",
      "Dynamic undergraduate research and entrepreneurship center in the Milwaukee tech corridor"
    ],
    programs: [
      { title: "Doctor of Physical Therapy (DPT)", level: "Doctorate / PhD", desc: "CAPTE-accredited professional clinical doctorate featuring 36 weeks of full-time clinical internships in musculoskeletal, neurological, and pediatric physical therapy." },
      { title: "Bachelor of Science in Nursing (BSN)", level: "Bachelor's Degree", desc: "Four-year direct-admit nursing degree featuring state-of-the-art simulation labs and clinical rotations across southeastern Wisconsin healthcare networks." },
      { title: "Bachelor of Science in Graphic Communication", level: "Bachelor's Degree", desc: "Comprehensive creative program combining visual brand identity, UI/UX design, digital marketing, and web media production." }
    ],
    opportunities: [
      {
        id: 5303,
        title: "Carroll University Trustee Merit Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Renewable undergraduate academic scholarship awarded to incoming freshmen based on high school achievement.",
        funding: "$23,000 per year ($92,000 over four years)",
        fee: "$0 application fee",
        tuition: "$37,200 annual tuition",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.carrollu.edu/financial-aid/scholarships/freshman",
        requirements: {
          gpa: "High school unweighted GPA of 3.75 or higher",
          ielts: "IELTS 6.5 or TOEFL iBT 79",
          gre: "Test-optional for SAT/ACT",
          papers: "Personal essay and high school academic records",
          references: "One academic counselor or teacher recommendation"
        }
      },
      {
        id: 5304,
        title: "Doctor of Physical Therapy (DPT) Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        desc: "Three-year clinical doctorate training licensed physical therapists through advanced human gross anatomy dissections and intensive clinical rotations.",
        funding: "Graduate clinical assistantships and departmental fellowships",
        fee: "$50 PTCAS centralized application fee",
        tuition: "$42,000 annual graduate tuition",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.carrollu.edu/academics/health-sciences/physical-therapy",
        requirements: {
          gpa: "Bachelor's degree with minimum 3.2 cumulative GPA and 3.2 prerequisite science GPA",
          ielts: "IELTS 7.0 or TOEFL iBT 90",
          gre: "GRE required (combined verbal/quantitative score recommended > 300)",
          papers: "Statement of purpose and documented 50+ hours of physical therapy observation",
          references: "Three letters of recommendation (including one licensed physical therapist)"
        }
      },
      {
        id: 5305,
        title: "Froedtert & Medical College of Wisconsin Clinical Rotation",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Full-time 12-week clinical hospital affiliation embedded in specialized trauma, rehabilitation, or outpatient orthopedic departments.",
        funding: "Clinical doctorate curricular credits and malpractice coverage",
        fee: "$0 application fee",
        tuition: "Included in graduate curriculum tuition",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://www.carrollu.edu/academics/health-sciences/physical-therapy/clinical-education",
        requirements: {
          gpa: "Completed 2nd year of DPT program in good standing",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Wisconsin criminal background check, CPR certification, and immunization records",
          references: "Director of Clinical Education approval"
        }
      },
      {
        id: 5306,
        title: "Bachelor of Science in Nursing (Direct Admit) Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        desc: "Four-year direct-entry BSN degree preparing students for the NCLEX-RN through advanced clinical simulations and hospital nursing rotations.",
        funding: "Wisconsin healthcare workforce retention grants and Carroll nursing bursaries",
        fee: "$0 application fee",
        tuition: "$37,200 per academic year",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.carrollu.edu/academics/health-sciences/nursing",
        requirements: {
          gpa: "High school GPA of 3.2 or higher with strong chemistry and biology grades",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Official transcripts and personal statement",
          references: "One science teacher recommendation"
        }
      },
      {
        id: 5307,
        title: "Bachelor of Science in Graphic Communication Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Four-year creative technology degree covering user interface design, branding systems, package design, typography, and web design.",
        funding: "Carroll Art and Creative Media talent scholarships",
        fee: "$0 application fee",
        tuition: "$37,200 per year",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.carrollu.edu/academics/arts-sciences/graphic-communication",
        requirements: {
          gpa: "High school diploma with minimum 2.75 GPA",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Creative digital portfolio featuring 8-12 design or art samples",
          references: "Not required"
        }
      },
      {
        id: 5308,
        title: "Milwaukee Advertising & Media Agency Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Semester-long graphic design and digital media internship with creative agencies, publishing houses, or corporate marketing teams in the Milwaukee area.",
        funding: "$15 - $20 per hour employer internship wages",
        fee: "$0 application fee",
        tuition: "Academic credit incorporated into degree",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.carrollu.edu/academics/internships",
        requirements: {
          gpa: "Junior or senior standing with minimum 3.0 GPA in graphic communication",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Professional digital portfolio and resume",
          references: "Faculty advisor approval"
        }
      },
      {
        id: 5309,
        title: "Pioneer Cross-Cultural Experience (CCE) Travel Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Endowed travel grant supporting undergraduate students participating in immersive international or domestic cross-cultural study experiences.",
        funding: "$1,500 travel and research stipend",
        fee: "$0 application fee",
        tuition: "Direct travel grant award",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.carrollu.edu/academics/cross-cultural-experience",
        requirements: {
          gpa: "Enrolled undergraduate student fulfilling CCE requirement",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "CCE program application and essay detailing cultural learning objectives",
          references: "Faculty program leader recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2292,
        name: "Dr. Cindy Gnadinger",
        title: "President and Professor of Education",
        department: "Office of the President",
        subject: "social-sciences",
        interests: ["Higher Education Leadership", "Curriculum Innovation", "Cross-Cultural Pedagogy"],
        summary: "Dr. Cindy Gnadinger serves as the 15th President of Carroll University, expanding modern health sciences facilities and regional community health clinics.",
        source: "https://www.carrollu.edu/about/office-president",
        recruiting: "Not verified"
      },
      {
        id: 2293,
        name: "Dr. Sara Deprey",
        title: "Director and Associate Professor of Physical Therapy",
        department: "Department of Physical Therapy",
        subject: "biology",
        interests: ["Neuromuscular Rehabilitation", "Pediatric Physical Therapy", "Clinical Biomechanics"],
        summary: "Dr. Sara Deprey coordinates physical therapy clinical curricula, researching mobility interventions for neurological impairments and stroke survivors.",
        source: "https://www.carrollu.edu/faculty/sara-deprey",
        recruiting: "Not verified"
      },
      {
        id: 2294,
        name: "Dr. Teri Kaul",
        title: "Chair and Professor of Nursing",
        department: "Department of Nursing",
        subject: "biology",
        interests: ["Critical Care Nursing", "Simulation in Healthcare Education", "Patient Health Literacy"],
        summary: "Dr. Teri Kaul directs the nursing department, focusing on clinical simulation mastery, patient outcome safety, and healthcare workforce readiness.",
        source: "https://www.carrollu.edu/faculty/teri-kaul",
        recruiting: "Not verified"
      }
    ]
  },

  // 17. USA: Casper College (Wyoming)
  {
    institution: "Casper College (Wyoming)",
    slug: "casper-college-wyoming",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 623,
    location: "Casper, Wyoming, USA",
    website: "https://www.caspercollege.edu",
    shortName: "Casper College",
    badge: "Premier Comprehensive Collegiate Institution in Wyoming",
    overview: "Casper College, established in 1945 atop Casper Mountain foothills in central Wyoming, is one of the largest and most comprehensive community colleges in the Rocky Mountain region. Offering over 140 academic degrees and certificates, Casper College is renowned for mineral and petroleum engineering technology, agriculture, nursing, theatre arts, and seamless university transfer agreements.",
    lead: "Explore petroleum technology degrees, visual arts bachelors pathways, registered nursing, and Wyoming Hathaway scholarships at Casper College.",
    description: "Casper College Wyoming degree courses in engineering technology, nursing, fine arts, agriculture, and Wyoming state scholarship options.",
    quickFacts: {
      type: "Public Comprehensive Community College",
      campus: "College Drive Foothills Campus, Casper, Wyoming",
      accreditation: "Higher Learning Commission (HLC) / ACEN & NASAD",
      admissions: "Open-door admission policy with high school diploma / GED and placement testing",
      language: "English (standard secondary school competency)",
      aid: "Wyoming Hathaway Scholarship & Casper College Foundation Awards (over $2M annually)"
    },
    strengths: [
      "Center for Energy and Petroleum Technology equipped with industrial drill rigs and simulation labs",
      "Partnership with University of Wyoming (UW-Casper) for direct completion of 4-year bachelor's degrees on campus",
      "Nationally accredited visual arts and world-class Gertrude Krampert Theatre complex",
      "Extensive Western agricultural research facilities and collegiate rodeo team"
    ],
    programs: [
      { title: "Associate of Science in Engineering", level: "Associate Degree", desc: "Two-year transferable engineering foundation covering calculus III, differential equations, physics with calculus, and statics." },
      { title: "Associate of Applied Science in Petroleum Technology", level: "Associate Degree", desc: "Hands-on technical curriculum in drilling operations, well logging, oil and gas production facilities, and petroleum safety compliance." },
      { title: "Associate Degree in Nursing (ADN)", level: "Associate Degree", desc: "ACEN-accredited registered nursing curriculum preparing students for the NCLEX-RN and hospital clinical practice." }
    ],
    opportunities: [
      {
        id: 5310,
        title: "Casper College Foundation Academic Excellence Award",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        desc: "Endowed scholarship for full-time students at Casper College demonstrating outstanding academic potential and community engagement.",
        funding: "$3,000 per academic year ($1,500 per semester)",
        fee: "$0 application fee",
        tuition: "$3,600 annual in-state tuition / $8,900 out-of-state",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.caspercollege.edu/financial-aid/scholarships/",
        requirements: {
          gpa: "Minimum high school or college GPA of 3.25",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "General scholarship application and personal goals statement",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 5311,
        title: "Associate of Applied Science in Petroleum Technology Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Two-year degree program providing direct practical training in hydraulic fracturing, well-site production management, and industrial safety.",
        funding: "Energy industry sponsorships and Wyoming Works workforce grants",
        fee: "$0 application fee",
        tuition: "$3,600 annual tuition for Wyoming residents",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://www.caspercollege.edu/program/petroleum-technology/",
        requirements: {
          gpa: "High school diploma or GED equivalent",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Placement assessment in mathematics and reading",
          references: "Not required"
        }
      },
      {
        id: 5312,
        title: "Wyoming Energy Basin Industrial Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Twelve-week paid technical summer internship with major petroleum extraction and renewable energy operators in the Powder River Basin.",
        funding: "$20 - $26 per hour industrial internship salary",
        fee: "$0 application fee",
        tuition: "Applied towards vocational credit requirements",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://www.caspercollege.edu/career-services/",
        requirements: {
          gpa: "Completed at least two semesters in petroleum technology with 2.8+ GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "OSHA 10 certification, drug screen, and driver's license",
          references: "Endorsement by petroleum faculty instructor"
        }
      },
      {
        id: 5313,
        title: "Associate Degree in Nursing (ADN) Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        desc: "Two-year clinical nursing curriculum accredited by ACEN and approved by the Wyoming State Board of Nursing.",
        funding: "Wyoming healthcare workforce stipends and federal Pell grants",
        fee: "$0 application fee ($50 TEAS testing fee)",
        tuition: "$4,200 per year including specialized clinical lab fees",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.caspercollege.edu/program/nursing/",
        requirements: {
          gpa: "Completion of prerequisite anatomy and physiology courses with 2.7+ GPA",
          ielts: "English language proficiency",
          gre: "Not required; passing score on ATI TEAS required",
          papers: "Immunization portfolio, background check, and transcripts",
          references: "Two professional reference contacts"
        }
      },
      {
        id: 5314,
        title: "Wyoming Hathaway Scholarship at Casper College",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering", "arts-design"],
        desc: "State-funded merit scholarship program for Wyoming high school graduates attending Wyoming community colleges.",
        funding: "Up to $1,680 per semester ($3,360 annually) based on Hathaway tier",
        fee: "$0 application fee",
        tuition: "Covers nearly 100% of standard resident tuition",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.caspercollege.edu/financial-aid/hathaway/",
        requirements: {
          gpa: "Wyoming high school graduate with minimum 2.5 GPA and 19+ ACT score",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Official high school transcript and ACT score verification",
          references: "Not required"
        }
      },
      {
        id: 5315,
        title: "Associate of Fine Arts in Visual Art Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Two-year studio arts curriculum accredited by NASAD preparing students for transfer into top BFA programs nationwide.",
        funding: "Visual arts department talent scholarships and gallery exhibition prizes",
        fee: "$0 application fee",
        tuition: "$3,600 per academic year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.caspercollege.edu/program/visual-art/",
        requirements: {
          gpa: "High school diploma or GED",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Visual art portfolio (optional for admission; required for talent awards)",
          references: "Not required"
        }
      },
      {
        id: 5316,
        title: "Nicolaysen Art Museum Curatorial Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Curatorial and museum education internship hosted in partnership with Casper's premier regional contemporary art museum.",
        funding: "$1,500 semester internship stipend",
        fee: "$0 application fee",
        tuition: "Academic elective credit",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.caspercollege.edu/visual-arts/internships/",
        requirements: {
          gpa: "Visual arts or art history major with minimum 3.0 GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Art writing sample and resume",
          references: "Faculty art instructor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2295,
        name: "Dr. Darren Divine",
        title: "President and Professor of Biology",
        department: "Office of the President",
        subject: "biology",
        interests: ["Wildlife Ecology", "Higher Education Administration", "Technical Workforce Training"],
        summary: "Dr. Darren Divine presides over Casper College, directing campus strategic planning, university transfer pathways, and regional STEM industry partnerships.",
        source: "https://www.caspercollege.edu/about/leadership/",
        recruiting: "Not verified"
      },
      {
        id: 2296,
        name: "Paul Marquard, PE",
        title: "Director of Energy and Engineering Technology",
        department: "School of Science and Mathematics",
        subject: "engineering",
        interests: ["Petroleum Production Systems", "Industrial Hydraulics", "Environmental Safety"],
        summary: "Paul Marquard leads petroleum and engineering technology instruction, researching drilling efficiency, reservoir production, and industrial automation.",
        source: "https://www.caspercollege.edu/faculty/paul-marquard",
        recruiting: "Not verified"
      },
      {
        id: 2297,
        name: "Maren Stewart, MSN, RN",
        title: "Director of Nursing Education",
        department: "School of Health Science",
        subject: "biology",
        interests: ["Simulation-Based Clinical Training", "Rural Healthcare Access", "Geriatric Nursing"],
        summary: "Maren Stewart coordinates Casper College's accredited nursing program, focusing on rural clinical readiness and patient outcome safety.",
        source: "https://www.caspercollege.edu/faculty/maren-stewart",
        recruiting: "Not verified"
      }
    ]
  },

  // 18. USA: Central Methodist University (Missouri)
  {
    institution: "Central Methodist University (Missouri)",
    slug: "central-methodist-university",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 626,
    location: "Fayette, Missouri, USA",
    website: "https://www.centralmethodist.edu",
    shortName: "Central Methodist University",
    badge: "Historic Missouri Liberal Arts & Marine Biology Hub",
    overview: "Central Methodist University (CMU), founded in 1854 in historic Fayette, Missouri, is an established private four-year university. Renowned for its distinctive undergraduate major in marine biology (supported by a dedicated inland oceanarium research laboratory), music education, computer science, and nursing, CMU provides personalized mentorship and generous institutional scholarships.",
    lead: "Explore marine biology in Missouri, music education bachelors, nursing degrees, and CMU presidential scholarships at Central Methodist University.",
    description: "Central Methodist University Missouri degree courses in marine biology, nursing, music education, computer science, and institutional scholarships.",
    quickFacts: {
      type: "Private Comprehensive University",
      campus: "Historic Campus, Fayette, Missouri",
      accreditation: "Higher Learning Commission (HLC) / CCNE & NASM",
      admissions: "Rolling admissions based on cumulative high school GPA (test-optional)",
      language: "English (IELTS 6.0 or TOEFL iBT 79 for international students)",
      aid: "CMU Eagle Excellence & Presidential Scholarships (up to $16,000/year)"
    },
    strengths: [
      "Nationally rare inland marine biology program with dedicated 1,200-gallon marine research aquaria",
      "NASM-accredited Swinney Conservatory of Music producing award-winning music educators",
      "Comprehensive nursing program with 100% NCLEX-RN first-time pass rates",
      "Active undergraduate research symposium and regional environmental field stations"
    ],
    programs: [
      { title: "Bachelor of Science in Marine Biology", level: "Bachelor's Degree", desc: "Four-year specialized degree studying marine invertebrate zoology, coral reef ecology, ichthyology, and oceanography with Gulf Coast field excursions." },
      { title: "Bachelor of Music Education (BME)", level: "Bachelor's Degree", desc: "NASM-accredited degree qualifying music educators in choral, instrumental, and general elementary music pedagogy." },
      { title: "Bachelor of Science in Computer Science", level: "Bachelor's Degree", desc: "Applied curriculum covering algorithmic design, database systems, cybersecurity, and mobile application engineering." }
    ],
    opportunities: [
      {
        id: 5317,
        title: "CMU Eagle Presidential Merit Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "computer-science", "arts-design"],
        desc: "Premier merit scholarship awarded to incoming first-year students demonstrating exceptional academic and leadership excellence.",
        funding: "$16,000 per year ($64,000 over four years)",
        fee: "$0 application fee",
        tuition: "$27,400 annual undergraduate tuition",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.centralmethodist.edu/financial-aid/scholarships.html",
        requirements: {
          gpa: "High school GPA of 3.75 or higher (or ACT score 27+)",
          ielts: "IELTS 6.0 or TOEFL iBT 79",
          gre: "Test-optional",
          papers: "High school transcript and personal statement",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 5318,
        title: "Bachelor of Science in Marine Biology Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "environment"],
        desc: "Four-year undergraduate degree featuring on-campus saltwater reef laboratories, shark biology, and field research at the Gulf Coast Research Laboratory.",
        funding: "Marine science endowed bursaries and travel study grants",
        fee: "$0 application fee",
        tuition: "$27,400 per academic year",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.centralmethodist.edu/academics/undergraduate/marine-biology.html",
        requirements: {
          gpa: "High school diploma with biology and chemistry coursework",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Application essay detailing interest in marine conservation",
          references: "Not required"
        }
      },
      {
        id: 5319,
        title: "Gulf Coast Oceanographic Field Research Practicum",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Four-week intensive summer field research course at the Gulf Coast Research Laboratory studying estuarine ecology and barrier island ecosystems.",
        funding: "$2,000 departmental travel and research stipend",
        fee: "$0 application fee",
        tuition: "Credit included in summer tuition",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.centralmethodist.edu/academics/undergraduate/marine-biology.html",
        requirements: {
          gpa: "Completed at least two semesters of marine biology with 3.0+ GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Field research safety questionnaire and statement of purpose",
          references: "Faculty marine biology instructor approval"
        }
      },
      {
        id: 5320,
        title: "Bachelor of Music Education (BME) Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Four-year professional music degree in the Swinney Conservatory of Music qualifying teachers for Missouri K-12 vocal or instrumental certification.",
        funding: "Music audition talent awards (up to $5,000 annually)",
        fee: "$0 application fee",
        tuition: "$27,400 per academic year",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.centralmethodist.edu/academics/undergraduate/music-education.html",
        requirements: {
          gpa: "High school GPA of 2.75 or higher",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Audition repertoire list and performance evaluation",
          references: "Music teacher recommendation"
        }
      },
      {
        id: 5321,
        title: "Bachelor of Science in Computer Science Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Four-year computer science program providing robust foundations in software architecture, network security, Python/Java programming, and AI.",
        funding: "STEM scholarship opportunities for qualified applicants",
        fee: "$0 application fee",
        tuition: "$27,400 per year",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.centralmethodist.edu/academics/undergraduate/computer-science.html",
        requirements: {
          gpa: "High school diploma with algebra II / pre-calculus",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Official transcripts and personal statement",
          references: "Not required"
        }
      },
      {
        id: 5322,
        title: "Missouri River Basin Environmental Monitoring Practicum",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Ten-week ecological monitoring internship measuring water quality, river sediment transport, and native fish populations along the Missouri River.",
        funding: "$3,500 summer research stipend",
        fee: "$0 application fee",
        tuition: "Funded project credit",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.centralmethodist.edu/academics/undergraduate/environmental-science.html",
        requirements: {
          gpa: "Sophomore or junior standing with 2.8+ GPA in science courses",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Resume and 1-page research statement",
          references: "Faculty research mentor recommendation"
        }
      },
      {
        id: 5323,
        title: "United Methodist Church Leadership Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Matching scholarship for active members of the United Methodist Church pursuing undergraduate degrees at Central Methodist University.",
        funding: "Up to $2,000 annual matching award",
        fee: "$0 application fee",
        tuition: "Applied directly to term tuition",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.centralmethodist.edu/financial-aid/scholarships.html",
        requirements: {
          gpa: "Good academic standing (minimum 2.5 GPA)",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Church membership confirmation form",
          references: "Letter from home church pastor"
        }
      }
    ],
    researchers: [
      {
        id: 2298,
        name: "Dr. Roger Drake",
        title: "President and Professor of Business",
        department: "Office of the President",
        subject: "social-sciences",
        interests: ["Higher Education Finance", "Institutional Strategy", "Regional Economic Impact"],
        summary: "Dr. Roger Drake has served as President of CMU since 2013, overseeing major endowment expansion, campus athletic renovations, and academic STEM growth.",
        source: "https://www.centralmethodist.edu/about/office-of-the-president.html",
        recruiting: "Not verified"
      },
      {
        id: 2299,
        name: "Dr. Gregory Thurmon",
        title: "Associate Professor of Biology and Director of Marine Research",
        department: "Department of Natural Sciences",
        subject: "biology",
        interests: ["Coral Reef Ecology", "Aquaculture Systems", "Marine Invertebrate Physiology"],
        summary: "Dr. Gregory Thurmon built and manages CMU's marine research laboratory, researching closed-loop reef environments, clownfish breeding, and coastal ecology.",
        source: "https://www.centralmethodist.edu/faculty/gregory-thurmon.html",
        recruiting: "Not verified"
      },
      {
        id: 2300,
        name: "Dr. Dori Waggoner",
        title: "Dean of the Swinney Conservatory of Music",
        department: "Swinney Conservatory of Music",
        subject: "arts-design",
        interests: ["Music Pedagogy", "Instrumental Conducting", "Acoustics in Performance"],
        summary: "Dr. Dori Waggoner directs the Swinney Conservatory, teaching wind ensemble conducting, instrumental pedagogy, and music education assessment strategies.",
        source: "https://www.centralmethodist.edu/faculty/dori-waggoner.html",
        recruiting: "Not verified"
      }
    ]
  },

  // 19. UK: Royal Welsh College of Music & Drama
  {
    institution: "Royal Welsh College of Music & Drama",
    slug: "royal-welsh-college-of-music-drama",
    countryId: "uk",
    countryLabel: "UK",
    sourceRow: 1289,
    location: "Cardiff, Wales, UK",
    website: "https://www.rwcmd.ac.uk",
    shortName: "RWCMD Cardiff",
    badge: "The National Conservatoire of Wales",
    overview: "The Royal Welsh College of Music & Drama (Coleg Brenhinol Cerdd a Drama Cymru), established in 1949 and set within the magnificent grounds of Bute Park in Cardiff, is the National Conservatoire of Wales. RWCMD is ranked among the United Kingdom's leading conservatoires for acting, stage management, scenic design, orchestral performance, opera, and composition, with state-of-the-art theatres and concert halls.",
    lead: "Discover world-class acting degrees, orchestral performance masters, stage design courses, and Welsh national artistic scholarships at RWCMD Cardiff.",
    description: "Royal Welsh College of Music & Drama degree programs in acting, music performance, stage management, opera, and international bursaries.",
    quickFacts: {
      type: "Public National Conservatoire / University College",
      campus: "Bute Park Campus & Anthony Hopkins Centre, Cardiff, Wales",
      accreditation: "University of South Wales Group / QAA UK / Conservatoires UK (CUKAS)",
      admissions: "Highly competitive live artistic audition / interview and portfolio evaluation",
      language: "English (IELTS 6.0 - 7.0 depending on program; Welsh language pathways available)",
      aid: "RWCMD Scholarship Fund, Leverhulme Trust Awards & Welsh Government Grants"
    },
    strengths: [
      "Richard Burton Theatre Company producing professional public seasons in Cardiff and London",
      "World-class concert hall (Dora Stoutzker Hall) and specialized opera school",
      "Award-winning design for performance department excelling in theatre scenography and puppetry",
      "Over 90% professional industry placement across West End, BBC, Welsh National Opera, and Royal Shakespeare Company"
    ],
    programs: [
      { title: "Bachelor of Arts (Hons) in Acting", level: "Bachelor's Degree", desc: "Three-year intensive conservatoire training in voice, movement, screen acting, classical text, and industry showcase performances." },
      { title: "Master of Music (MMus) in Performance", level: "Master's Degree", desc: "Two-year postgraduate instrumental or vocal curriculum with principal study tuition, masterclasses, and orchestral rehearsals." },
      { title: "Bachelor of Arts (Hons) in Design for Performance", level: "Bachelor's Degree", desc: "Practical degree in theatre set design, costume construction, digital scenography, and puppetry for stage and screen." }
    ],
    opportunities: [
      {
        id: 5324,
        title: "Leverhulme Arts Scholarship at RWCMD",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Prestigious merit scholarship awarded to exceptionally gifted undergraduate and postgraduate students in music or drama.",
        funding: "£5,000 - £10,000 annual fee bursary",
        fee: "£65 audition fee via UCAS Conservatoires",
        tuition: "£9,250/year (UK) / £24,500/year (international)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.rwcmd.ac.uk/study/fees-and-funding/scholarships",
        requirements: {
          gpa: "Outstanding audition performance score assessed by conservatoire panel",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each band)",
          gre: "Not required",
          papers: "Artistic resume, headshot, and statement of artistic intent",
          references: "Two professional or academic artistic references"
        }
      },
      {
        id: 5325,
        title: "Bachelor of Arts (Hons) in Acting Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Three-year full-time conservatoire degree developing professional actors for stage, television, radio, and international screen industries.",
        funding: "Eligible for Student Finance England / Wales tuition loans and maintenance bursaries",
        fee: "£65 UCAS Conservatoires fee",
        tuition: "£9,250 per year for UK residents",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.rwcmd.ac.uk/study/courses/ba-acting",
        requirements: {
          gpa: "Normal minimum of 2 A-levels (or equivalent qualifications)",
          ielts: "IELTS 7.0 for drama programs",
          gre: "Not required",
          papers: "Audition monologues (one classical Shakespeare and one contemporary text)",
          references: "One referee from drama teacher or school"
        }
      },
      {
        id: 5326,
        title: "Richard Burton Theatre Company Production Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Final-year intensive production residency staging 15 fully mounted theatrical productions directed by visiting international directors.",
        funding: "Professional industry showcase in London and Cardiff",
        fee: "£0 application fee",
        tuition: "Core curricular component of final year",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.rwcmd.ac.uk/about-us/richard-burton-theatre-company",
        requirements: {
          gpa: "Enrolled in 3rd year of BA Acting, Stage Management, or Design",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Casting audition and production department assignment",
          references: "Conservatoire director of drama endorsement"
        }
      },
      {
        id: 5327,
        title: "Master of Music (MMus) in Performance Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Two-year postgraduate degree providing intensive individual instrumental instruction, chamber music, and side-by-side orchestral placements with the BBC National Orchestra of Wales.",
        funding: "RWCMD instrumental awards and Welsh National Opera coaching grants",
        fee: "£65 application fee",
        tuition: "£10,500/year (UK) / £23,500/year (international)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.rwcmd.ac.uk/study/courses/mmus-music-performance",
        requirements: {
          gpa: "Undergraduate degree in music (minimum 2:1 honours) or equivalent conservatoire diploma",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "30-minute audition recital program of varied stylistic repertoire",
          references: "Two musical references"
        }
      },
      {
        id: 5328,
        title: "BBC National Orchestra of Wales Professional Orchestral Pathway",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Side-by-side orchestral training scheme placing advanced instrumentalists in live rehearsals and broadcasts with the BBC NOW in Cardiff.",
        funding: "Professional rehearsal credits and mentorship from section principals",
        fee: "£0 application fee",
        tuition: "Integrated into postgraduate performance degree",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.rwcmd.ac.uk/study/courses/orchestral-performance",
        requirements: {
          gpa: "Passing the competitive annual BBC NOW orchestral audition trial",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Orchestral excerpts repertoire and concerto movement",
          references: "Principal study instrument tutor recommendation"
        }
      },
      {
        id: 5329,
        title: "Bachelor of Arts (Hons) in Design for Performance Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Three-year studio training in theatre set design, period costume construction, digital projection mapping, and scenic art.",
        funding: "Linbury Prize mentorship and conservatoire design bursaries",
        fee: "£65 application fee",
        tuition: "£9,250 per academic year for UK students",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.rwcmd.ac.uk/study/courses/ba-design-for-performance",
        requirements: {
          gpa: "A-level or BTEC National Diploma in art, design, or theatre subjects",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Visual design portfolio with sketches, 3D scale models, and costume drawings",
          references: "One academic or art tutor reference"
        }
      },
      {
        id: 5330,
        title: "Gareth Jones Vocal Arts Bursary",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Endowed bursary supporting young opera singers studying at the David Seligman Opera School at RWCMD.",
        funding: "£3,500 contribution towards private coaching and vocal tuition",
        fee: "£0 application fee",
        tuition: "Applied directly to vocal tuition fees",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.rwcmd.ac.uk/study/fees-and-funding/scholarships",
        requirements: {
          gpa: "Enrolled in vocal studies or opera master's degree",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Audition aria performance recorded with accompanist",
          references: "Head of Vocal Studies recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2301,
        name: "Prof. Helena Gaunt",
        title: "Principal and Professor of Music",
        department: "Directorate of the Conservatoire",
        subject: "arts-design",
        interests: ["Conservatoire Pedagogy", "Creative Collaboration in Music", "Higher Arts Education Policy"],
        summary: "Prof. Helena Gaunt leads the Royal Welsh College of Music & Drama, publishing internationally on professional artistry, chamber music pedagogy, and creative ensemble leadership.",
        source: "https://www.rwcmd.ac.uk/about-us/our-people/leadership-team",
        recruiting: "Not verified"
      },
      {
        id: 2302,
        name: "Jonathan Munby",
        title: "Director of Drama Performance",
        department: "Richard Burton School of Drama",
        subject: "arts-design",
        interests: ["Contemporary Classical Directing", "Shakespearean Performance", "Actor Training Methodologies"],
        summary: "Jonathan Munby directs drama performance at RWCMD, having directed internationally acclaimed productions for the Royal Shakespeare Company and the Globe.",
        source: "https://www.rwcmd.ac.uk/about-us/our-people/drama-staff",
        recruiting: "Not verified"
      },
      {
        id: 2303,
        name: "Tim Rhys-Evans, MBE",
        title: "Director of Music",
        department: "School of Music",
        subject: "arts-design",
        interests: ["Choral Conducting", "Vocal Artistry", "Welsh Musical Heritage"],
        summary: "Tim Rhys-Evans coordinates classical and contemporary music curricula at RWCMD, renowned for pioneering choral innovation and community vocal engagement.",
        source: "https://www.rwcmd.ac.uk/about-us/our-people/music-staff",
        recruiting: "Not verified"
      }
    ]
  },

  // 20. UK: University Centre Leeds
  {
    institution: "University Centre Leeds",
    slug: "university-centre-leeds",
    countryId: "uk",
    countryLabel: "UK",
    sourceRow: 1305,
    location: "Leeds, West Yorkshire, UK",
    website: "https://ucleeds.ac.uk",
    shortName: "University Centre Leeds",
    badge: "Specialized Applied Higher Education in Yorkshire",
    overview: "University Centre Leeds, located in the cultural and digital technology hub of Leeds, West Yorkshire, is a higher education institution offering university-level degrees, foundation degrees, and top-up qualifications validated by the Open University and Leeds Beckett University. The institution is renowned for digital media, game art, cyber security, healthcare leadership, and performing arts.",
    lead: "Explore game design degrees, cyber security bachelors, creative arts top-ups, and West Yorkshire study bursaries at University Centre Leeds.",
    description: "University Centre Leeds degree programs in computer science, game development, health, visual arts, and UK student loan funding.",
    quickFacts: {
      type: "Public Higher Education Institution",
      campus: "Mabgate Campus & Quarry Hill Creative Arts, Leeds, West Yorkshire",
      accreditation: "Open University (OU) & Leeds Beckett University Validated / QAA UK",
      admissions: "UCAS application with 48-80 UCAS tariff points, portfolio or interview",
      language: "English (IELTS 6.0 with no band below 5.5, or GCSE English Grade 4/C)",
      aid: "Student Finance England Tuition & Maintenance Loans / UC Leeds Opportunity Bursaries"
    },
    strengths: [
      "Industry-standard digital media studios, VR motion capture labs, and high-end gaming suites",
      "Vocational integration with Leeds digital tech agencies, gaming studios, and NHS trusts",
      "Small class cohort sizes with intensive 1-on-1 tutoring and career mentorship",
      "Flexible progression routes from Level 4/5 foundation degrees to Level 6 Honours bachelor's degrees"
    ],
    programs: [
      { title: "BSc (Hons) in Cyber Security and Software Development", level: "Bachelor's Degree", desc: "Three-year applied degree covering ethical hacking, network forensics, secure software development, and cloud computing architectures." },
      { title: "BA (Hons) in Game Art and Concept Development", level: "Bachelor's Degree", desc: "Comprehensive creative program focusing on 3D environment modeling, character rigging, concept painting, and real-time game engines." },
      { title: "BSc (Hons) in Health and Social Care Management", level: "Bachelor's Degree", desc: "Leadership curriculum addressing healthcare policy, clinical governance, public health epidemiology, and social care management." }
    ],
    opportunities: [
      {
        id: 5331,
        title: "University Centre Leeds Opportunity Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Cash bursary awarded to full-time undergraduate students from low-income households or underrepresented backgrounds in higher education.",
        funding: "£1,000 per year paid directly to the student in two installments",
        fee: "£0 application fee",
        tuition: "£7,500 - £8,950 annual tuition (significantly lower than standard £9,250 universities)",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://ucleeds.ac.uk/fees-and-funding/bursaries/",
        requirements: {
          gpa: "Enrolled in 1st year of an undergraduate degree with verified household income below £25,000",
          ielts: "English GCSE Grade C/4 or IELTS 6.0",
          gre: "Not required",
          papers: "Student Finance England household assessment confirmation",
          references: "Not required"
        }
      },
      {
        id: 5332,
        title: "BSc (Hons) in Cyber Security and Software Development Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Three-year degree program validated by The Open University covering penetration testing, network defense, Python, and cloud infrastructure.",
        funding: "Student Finance England tuition fee loan covers 100% of course costs",
        fee: "£0 direct application fee (apply via UCAS)",
        tuition: "£7,500 per academic year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://ucleeds.ac.uk/courses/cyber-security-and-software-development-bsc-hons/",
        requirements: {
          gpa: "Minimum 64 UCAS tariff points from A-levels, BTEC, or T-levels",
          ielts: "IELTS 6.0 or GCSE English and Maths Grade C/4",
          gre: "Not required",
          papers: "Personal statement explaining technical computing interests and career ambitions",
          references: "One academic reference"
        }
      },
      {
        id: 5333,
        title: "Leeds Digital Tech Cluster Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science"],
        desc: "12-week work-based placement embedded with Leeds tech enterprises, digital marketing companies, or regional IT consultancies.",
        funding: "£11.44/hour National Living Wage compensation",
        fee: "£0 application fee",
        tuition: "Academic credit incorporated into second-year curriculum",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://ucleeds.ac.uk/employability-and-careers/",
        requirements: {
          gpa: "Enrolled in 2nd year of computer science or digital media with minimum 2:1 standing",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Technical CV and portfolio repository link",
          references: "Course tutor approval"
        }
      },
      {
        id: 5334,
        title: "BA (Hons) in Game Art and Concept Development Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Creative industry degree teaching Maya, ZBrush, Unreal Engine 5, substance painter, and concept art pipelines for commercial video games.",
        funding: "Eligible for UK government undergraduate tuition and maintenance support",
        fee: "£0 application fee",
        tuition: "£7,500 per academic year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://ucleeds.ac.uk/courses/game-art-ba-hons/",
        requirements: {
          gpa: "64 UCAS points from art, media, or computing qualifications",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Digital portfolio of 10-15 pieces showing 2D concept sketches, digital paintings, or 3D models",
          references: "One referee"
        }
      },
      {
        id: 5335,
        title: "Leeds Creative Gaming Studio Internship",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Supervised studio internship working with northern UK indie game development studios on character asset creation and environmental lighting.",
        funding: "Industry portfolio credits and mentoring from studio art directors",
        fee: "£0 application fee",
        tuition: "Part of final-year professional practice module",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://ucleeds.ac.uk/courses/game-art-ba-hons/",
        requirements: {
          gpa: "Second or third-year game art student with strong digital modeling portfolio",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Artstation portfolio link and CV",
          references: "Design tutor recommendation"
        }
      },
      {
        id: 5336,
        title: "BSc (Hons) in Health and Social Care Leadership Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Degree training managers for NHS trusts, community health services, hospice administration, and social care providers.",
        funding: "NHS learning support fund eligibility for designated tracks",
        fee: "£0 application fee",
        tuition: "£7,500 per academic year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://ucleeds.ac.uk/courses/health-and-social-care-bsc-hons/",
        requirements: {
          gpa: "64 UCAS points or equivalent health and social care Level 3 qualification",
          ielts: "English GCSE Grade 4/C or equivalent",
          gre: "Not required",
          papers: "Personal statement detailing volunteer or work experience in care settings",
          references: "One professional or academic referee"
        }
      },
      {
        id: 5337,
        title: "STEM Digital Progression Grant at UC Leeds",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Hardware and technology grant providing students in computing and engineering with high-performance laptops and specialized software licenses.",
        funding: "£500 equipment voucher and cloud computing credits",
        fee: "£0 application fee",
        tuition: "Direct non-repayable grant",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://ucleeds.ac.uk/fees-and-funding/",
        requirements: {
          gpa: "Enrolled in computing or cyber security bachelor's degree",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Proof of enrollment and tech equipment application form",
          references: "Department head approval"
        }
      }
    ],
    researchers: [
      {
        id: 2304,
        name: "Dr. Cheryl Smith",
        title: "Dean of Higher Education",
        department: "Directorate of Higher Education",
        subject: "social-sciences",
        interests: ["Widening Participation in HE", "Vocational Degree Pathways", "Applied Pedagogy"],
        summary: "Dr. Cheryl Smith directs higher education strategy at University Centre Leeds, focusing on employer-led curricula and social mobility across Yorkshire.",
        source: "https://ucleeds.ac.uk/about-us/leadership/",
        recruiting: "Not verified"
      },
      {
        id: 2305,
        name: "Richard Hirst",
        title: "Head of School for Digital and Engineering",
        department: "School of Digital and Creative Technologies",
        subject: "computer-science",
        interests: ["Cybersecurity Infrastructure", "Software Architecture", "Industry 4.0 Integration"],
        summary: "Richard Hirst oversees computing and cyber security degrees, liaising with Leeds technology firms to align student projects with enterprise cyber defense standards.",
        source: "https://ucleeds.ac.uk/staff/richard-hirst",
        recruiting: "Not verified"
      },
      {
        id: 2306,
        name: "Gemma Dagnall",
        title: "Curriculum Manager for Creative Arts & Game Design",
        department: "School of Creative Arts",
        subject: "arts-design",
        interests: ["Game Art Aesthetics", "3D Digital Prototyping", "Interactive Storytelling"],
        summary: "Gemma Dagnall leads game art and concept development curricula, mentoring students in real-time engine rendering and digital asset pipelines.",
        source: "https://ucleeds.ac.uk/staff/gemma-dagnall",
        recruiting: "Not verified"
      }
    ]
  }
];
