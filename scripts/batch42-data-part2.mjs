// Batch 42 - Part 2: Universities 11 to 20
// Italy (3), USA (5), UK (2)
// Opps: 4848 to 4917 (70 opps)
// Researchers: 2097 to 2126 (30 researchers)

export const part2Universities = [
  // 11. Italy: UnitelmaSapienza University - Polo di Trani
  {
    institution: "UnitelmaSapienza University (Polo di Trani)",
    slug: "unitelmasapienza-university-polo-di-trani",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 514,
    location: "Trani, Barletta-Andria-Trani, Apulia, Italy",
    website: "https://www.unitelmasapienza.it",
    shortName: "Unitelma Trani",
    badge: "Sapienza Rome Online & Regional Polo",
    overview: "UnitelmaSapienza University - Polo di Trani is the premier regional academic centre in Apulia directly linked to Sapienza University of Rome. Delivering fully accredited online undergraduate, master's, and postgraduate specialization diplomas, the Trani campus bridges southern Italy with Italy's premier public research university through blended tutoring, on-site exams, and administrative support.",
    lead: "Earn accredited Sapienza University of Rome degrees in law, economics, and public administration via the Trani regional polo.",
    description: "UnitelmaSapienza University Polo di Trani online law degrees, public administration master's, and Italian regional study grants.",
    quickFacts: {
      type: "State-Recognized Telematic University (Sapienza University of Rome System)",
      campus: "Polo Didattico Trani, Palazzo Prometeo, Trani, Apulia",
      accreditation: "Italian Ministry of Universities and Research (MUR) / ANVUR Verified",
      admissions: "Direct online matriculation with continuous enrollment throughout the calendar year",
      language: "Italian (B2/C1 for official examinations and state-recognized degrees)",
      aid: "Convenzioni Enti Pubblici, Trani Regional Study Grants & Agevolazioni Giovani"
    },
    strengths: [
      "Direct academic affiliation and shared professorial standards with Sapienza University of Rome",
      "Official examinations and face-to-face tutoring held locally in Trani for southern Italian students",
      "Specialized Master's programs tailored for civil servants, healthcare directors, and legal professionals",
      "Highly accessible continuous enrollment allowing students to commence studies in any month"
    ],
    programs: [
      { title: "Laurea Magistrale a Ciclo Unico in Giurisprudenza (Law)", level: "Five-Year Master of Laws", desc: "Five-year integrated law degree qualifying graduates for the Italian Bar exam, judiciary concourse, and notarial careers." },
      { title: "Master di I Livello in Management delle Organizzazioni Sanitarie", level: "First-Level Master's", desc: "Specialized post-bachelor curriculum in healthcare governance, clinical budgeting, health law, and hospital management." },
      { title: "Laurea Triennale in Economia Aziendale (Business Economics)", level: "Three-Year Bachelor's", desc: "Comprehensive foundational degree in corporate accounting, tax law, financial analysis, and strategic marketing." }
    ],
    opportunities: [
      {
        id: 4848,
        title: "Borsa di Studio Polo di Trani - Futuro Digitale",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Regional tuition grant awarded by the Trani Polo committee to young students under 26 residing in the BAT and Bari provinces.",
        funding: "50% reduction on annual university tuition fees (€1,000 direct tuition saving)",
        fee: "€0 application fee",
        tuition: "Standard tuition reduced from €2,000 to €1,000/year",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.unitelmasapienza.it/iscrizioni/agevolazioni/",
        requirements: {
          gpa: "High school diploma (Diploma di Maturità) with grade of 75/100 or better",
          ielts: "Italian language fluency",
          gre: "Not required",
          papers: "Declaration of residency in Apulia and personal motivation essay",
          references: "High school teacher recommendation"
        }
      },
      {
        id: 4849,
        title: "Laurea Magistrale in Giurisprudenza (LMG-01) Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "State-recognized five-year single-cycle master's in law enabling remote lecture attendance with official exam sittings in Trani.",
        funding: "Convenzione Dipendenti Pubblici offering reduced €1,600 annual fee",
        fee: "€16 stamp duty (marca da bollo)",
        tuition: "€2,100 per academic year",
        deadline: "2027-10-31",
        deadlineText: "October 31, 2027 (Continuous admission rounds)",
        source: "https://www.unitelmasapienza.it/corsi-di-laurea/giurisprudenza/",
        requirements: {
          gpa: "Italian secondary school diploma or recognized international high school credential",
          ielts: "Italian B2/C1",
          gre: "Not required",
          papers: "Online identity verification and tax code submission",
          references: "Not required"
        }
      },
      {
        id: 4850,
        title: "Master in Management Sanitario per le Professioni Mediche",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "One-year executive master's (60 CFU) granting essential points and management qualifications for public health director roles.",
        funding: "Accredited for 50 ECM (Educazione Continua in Medicina) credits",
        fee: "€16",
        tuition: "€1,500 total course fee",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.unitelmasapienza.it/master/management-sanitario/",
        requirements: {
          gpa: "Bachelor's or Master's degree in Medicine, Nursing, Pharmacy, or Allied Health Professions",
          ielts: "Italian proficiency",
          gre: "Not required",
          papers: "Curriculum vitae and professional order registration number",
          references: "Clinical department director approval"
        }
      },
      {
        id: 4851,
        title: "Polo di Trani Legal Research Practicum in Maritime & Port Law",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Applied legal research fellowship analyzing Adriatic maritime trade agreements, customs tariffs, and port sustainability regulation in Apulia.",
        funding: "€6,000 annual research grant and access to Sapienza digital jurisprudence archives",
        fee: "€0",
        tuition: "Free to selected law graduates",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.unitelmasapienza.it/ricerca/",
        requirements: {
          gpa: "Completed master's degree in law with thesis in maritime, commercial, or administrative law",
          ielts: "Italian and English proficiency",
          gre: "Not required",
          papers: "Research proposal focusing on Adriatic port governance and blue economy legal frameworks",
          references: "Two academic letters"
        }
      },
      {
        id: 4852,
        title: "Laurea Triennale in Economia Aziendale Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year undergraduate program in corporate management, digital accounting, and business strategy with exam sessions in Trani.",
        funding: "Discounted tuition for students under 21 years of age",
        fee: "€16",
        tuition: "€1,800/year (or €1,000 with under-21 discount)",
        deadline: "2027-10-31",
        deadlineText: "October 31, 2027",
        source: "https://www.unitelmasapienza.it/corsi-di-laurea/economia-aziendale/",
        requirements: {
          gpa: "Secondary school certificate (Maturità)",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "High school certificate and personal declaration",
          references: "Not required"
        }
      },
      {
        id: 4853,
        title: "Master in Criminologia e Scienze Forensi Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Specialized postgraduate program covering forensic psychology, criminal investigation techniques, cyber forensics, and penal courtroom procedures.",
        funding: "Police and Armed Forces personnel tuition reduction of 30%",
        fee: "€16",
        tuition: "€1,400 total tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.unitelmasapienza.it/master/criminologia/",
        requirements: {
          gpa: "Degree in Law, Psychology, Sociology, Medicine, or Political Science",
          ielts: "Italian fluency",
          gre: "Not required",
          papers: "Curriculum vitae and professional background narrative",
          references: "One referee"
        }
      },
      {
        id: 4854,
        title: "Agevolazione Donne e Imprenditoria Femminile Award",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Dedicated financial support grant reducing tuition for female entrepreneurs and working mothers enrolling in degree programs in Apulia.",
        funding: "€500 direct tuition reduction across each academic year",
        fee: "€0",
        tuition: "Applied to tuition fees",
        deadline: "2027-11-15",
        deadlineText: "November 15, 2027",
        source: "https://www.unitelmasapienza.it/iscrizioni/agevolazioni-donne/",
        requirements: {
          gpa: "Female students enrolling in any full-time UnitelmaSapienza degree program",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Self-certification of maternal or entrepreneurial status",
          references: "Not required"
        }
      }
    ],
    researchers: [
      {
        id: 2097,
        name: "Prof. Avv. Mario Caligiuri",
        title: "Professor of Intelligence & Educational Policy",
        department: "Department of Law and Society",
        email: "mario.caligiuri@unitelmasapienza.it",
        phone: "+39 06 4402670",
        interests: ["Economic Intelligence", "Educational Policy", "National Security Culture", "Digital Governance"],
        website: "https://www.unitelmasapienza.it/docenti/mario-caligiuri/",
        subject: "social-sciences",
        summary: "Prof. Avv. Mario Caligiuri is a leading Italian scholar in intelligence studies and public policy, directing postgraduate intelligence curricula and publishing on statecraft in the information age."
      },
      {
        id: 2098,
        name: "Prof.ssa Paola Paniccia",
        title: "Professor of Business Management & Economics",
        department: "Department of Economics",
        email: "paola.paniccia@unitelmasapienza.it",
        phone: "+39 06 4402671",
        interests: ["Business Model Innovation", "Sustainable Tourism Management", "Healthcare Governance", "Regional Economics"],
        website: "https://www.unitelmasapienza.it/docenti/paola-paniccia/",
        subject: "social-sciences",
        summary: "Prof.ssa Paola Paniccia researches strategic business management and healthcare organizational frameworks, evaluating resilience in regional economic networks."
      },
      {
        id: 2099,
        name: "Prof. Cesare Pinelli",
        title: "Professor of Public and Constitutional Law",
        department: "Department of Legal Studies",
        email: "cesare.pinelli@unitelmasapienza.it",
        phone: "+39 06 4402672",
        interests: ["Constitutional Law", "European Integration Law", "Fundamental Rights", "Parliamentary Procedure"],
        website: "https://www.unitelmasapienza.it/docenti/cesare-pinelli/",
        subject: "social-sciences",
        summary: "Prof. Cesare Pinelli is an esteemed constitutional law jurist lecturing on constitutional justice, Italian administrative law, and European human rights jurisprudence."
      }
    ]
  },

  // 12. Italy: Università Primo Levi Bologna
  {
    institution: "Università Primo Levi",
    slug: "universita-primo-levi-bologna",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 516,
    location: "Bologna, Emilia-Romagna, Italy",
    website: "https://www.universitaprimolevi.it",
    shortName: "Primo Levi Bologna",
    badge: "Lifelong Higher Learning & Cultural Humanities",
    overview: "Università Primo Levi, established in 1989 in the heart of historic Bologna, is one of Italy's most prestigious institutions of continuous university-level education (educazione permanente). Dedicated to democratic access to culture, the arts, philosophy, scientific literacy, and civic engagement, Primo Levi engages thousands of adult and continuing scholars each year through over 250 advanced academic courses.",
    lead: "Experience premier continuing academic education in history, philosophy, and cultural heritage in historic Bologna.",
    description: "Università Primo Levi continuous higher education, Bolognese cultural heritage seminars, and adult learning academic awards.",
    quickFacts: {
      type: "Accredited Continuous Higher Education University (Istituzione Culturale Superiore)",
      campus: "Via Azzo Gardino Historic Campus, Manifattura delle Arti, Bologna",
      accreditation: "Region of Emilia-Romagna / Municipality of Bologna Cultural Register / CNCA",
      admissions: "Open academic registration with module-based credit enrollment (rolling)",
      language: "Italian (with foreign language instruction in English, French, Spanish, and German)",
      aid: "Comune di Bologna Cultural Vouchers & Primo Levi Social Solidarity Reductions"
    },
    strengths: [
      "Over 35 years of recognized leadership in adult higher learning and intergenerational cultural dialogue",
      "Academic faculty drawn from the University of Bologna (Alma Mater) and leading cultural institutions",
      "Rich curriculum covering art history, philosophy, contemporary geopolitics, literature, and astronomy",
      "Partnership with Cineteca di Bologna, MAMbo (Modern Art Museum), and regional archaeological institutes"
    ],
    programs: [
      { title: "Corso Accademico in Storia dell'Arte Bolognese ed Emiliana", level: "Continuing Higher Diploma", desc: "Two-year academic cycle examining Renaissance painting, the Carracci academy, Baroque sculpture, and contemporary urban art in Emilia." },
      { title: "Dipartimento di Filosofia e Pensiero Critico Contemporaneo", level: "Higher Academic Certificate", desc: "Advanced seminar series exploring 20th-century European philosophy, ethics of science, bioethics, and civic democracy." },
      { title: "Corso di Archeologia del Mediterraneo e Civiltà Antiche", level: "Continuing Higher Diploma", desc: "Detailed archaeological study of Etruscan settlements, Roman civil engineering, and maritime trade across Magna Graecia." }
    ],
    opportunities: [
      {
        id: 4855,
        title: "Borsa di Studio Solidale Primo Levi per la Cultura",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Tuition waiver program designed to ensure that adult learners facing financial constraints can participate freely in university courses.",
        funding: "Full waiver of annual registration and course tuition fees",
        fee: "€0",
        tuition: "Normally €120–€250 per course series; waived for scholarship recipients",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027 (Annual academic launch)",
        source: "https://www.universitaprimolevi.it/iscrizioni/borse-studio/",
        requirements: {
          gpa: "Open to adult citizens residing in the metropolitan city of Bologna",
          ielts: "Italian language comprehension",
          gre: "Not required",
          papers: "ISEE financial statement indicating socio-economic need",
          references: "Self-declaration of motivation"
        }
      },
      {
        id: 4856,
        title: "Corso Biennale in Storia dell'Arte e Patrimonio Culturale Admission",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Comprehensive two-year modular diploma exploring Bolognese art from the Middle Ages to Morandi, featuring guided museum field lectures.",
        funding: "Discount for members of the Cineteca di Bologna and Bologna Welcome Card holders",
        fee: "€25 annual membership association fee",
        tuition: "€220 per year",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.universitaprimolevi.it/corsi/storia-arte/",
        requirements: {
          gpa: "Passionate interest in art history and cultural conservation",
          ielts: "Italian fluency",
          gre: "Not required",
          papers: "Enrollment registration form",
          references: "Not required"
        }
      },
      {
        id: 4857,
        title: "Primo Levi Research Practicum in Bolognese Civic Memory",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Six-month oral history fellowship documenting post-war industrial labor, student movements, and resistance archives in Bologna.",
        funding: "€2,500 research grant and publication in the Primo Levi Cultural Monographs series",
        fee: "€0",
        tuition: "Covered by historical society sponsorship",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.universitaprimolevi.it/ricerca-studi/",
        requirements: {
          gpa: "Degree or equivalent studies in History, Humanities, Literature, or Anthropology",
          ielts: "Italian proficiency",
          gre: "Not required",
          papers: "Detailed oral history research proposal and interview plan",
          references: "Academic reference letter"
        }
      },
      {
        id: 4858,
        title: "Seminario Accademico di Filosofia Contemporanea ed Etica Civica",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Semester-long academic seminar investigating planetary ethics, Hannah Arendt's political philosophy, and the perils of digital totalities.",
        funding: "Comune di Bologna educational co-funding",
        fee: "€25 association fee",
        tuition: "€140 course fee",
        deadline: "2027-10-15",
        deadlineText: "October 15, 2027",
        source: "https://www.universitaprimolevi.it/corsi/filosofia/",
        requirements: {
          gpa: "Curiosity and engagement in philosophical and civic discourse",
          ielts: "Italian comprehension",
          gre: "Not required",
          papers: "Registration form",
          references: "Not required"
        }
      },
      {
        id: 4859,
        title: "Laboratorio di Scrittura Creativa e Narrazione Letteraria",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Practical narrative workshop mentored by published Italian novelists, focusing on fiction structures, voice development, and editorial editing.",
        funding: "End-of-year public anthology publication for top student manuscripts",
        fee: "€25",
        tuition: "€180 per semester",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.universitaprimolevi.it/corsi/scrittura-creativa/",
        requirements: {
          gpa: "Writing enthusiasm",
          ielts: "Italian writing proficiency",
          gre: "Not required",
          papers: "Short 2-page creative writing sample",
          references: "Not required"
        }
      },
      {
        id: 4860,
        title: "Premio Letterario e Saggistico Primo Levi per Autori Emergenti",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Annual essay competition rewarding original non-fiction studies reflecting the humanistic and ethical spirit of author Primo Levi.",
        funding: "€1,500 prize award plus formal presentation ceremony in Bologna's Sala Borsa",
        fee: "€0 entry fee",
        tuition: "Free literary competition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.universitaprimolevi.it/premio-letterario/",
        requirements: {
          gpa: "Open to writers and students across Italy",
          ielts: "Italian language",
          gre: "Not required",
          papers: "Unpublished essay between 15,000 and 30,000 characters addressing memory, ethics, or human rights",
          references: "Submission with pseudonymous cover page"
        }
      },
      {
        id: 4861,
        title: "Corso Specialistico in Lingua e Civiltà Comparate Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Advanced multi-lingual linguistics and cultural studies curriculum covering Anglo-American, Hispanic, and Francophone comparative literature.",
        funding: "Subsidized linguistic laboratory materials",
        fee: "€25",
        tuition: "€195 per academic year",
        deadline: "2027-10-15",
        deadlineText: "October 15, 2027",
        source: "https://www.universitaprimolevi.it/corsi/lingue/",
        requirements: {
          gpa: "Intermediate language level (B1/B2) in target foreign language",
          ielts: "Depending on selected language track",
          gre: "Not required",
          papers: "Online diagnostic self-evaluation test",
          references: "Not required"
        }
      }
    ],
    researchers: [
      {
        id: 2100,
        name: "Prof. Alberto Preti",
        title: "Presidente & Professor of Contemporary History",
        department: "Consiglio Direttivo & Dipartimento di Storia",
        email: "alberto.preti@universitaprimolevi.it",
        phone: "+39 051 249868",
        interests: ["Contemporary Italian History", "Social History of Emilia-Romagna", "Labour Movements", "Public Memory"],
        website: "https://www.universitaprimolevi.it/docenti/alberto-preti/",
        subject: "social-sciences",
        summary: "Prof. Alberto Preti, formerly professor of contemporary history at the University of Bologna and President of Università Primo Levi, leads academic programs in regional civic and political history."
      },
      {
        id: 2101,
        name: "Dott.ssa Fabia Zanasi",
        title: "Direttrice Didattica & Art Historian",
        department: "Dipartimento di Storia dell'Arte",
        email: "fabia.zanasi@universitaprimolevi.it",
        phone: "+39 051 249869",
        interests: ["Emilian Renaissance Art", "Baroque Bologna", "Museum Curating", "Artistic Heritage Didactics"],
        website: "https://www.universitaprimolevi.it/docenti/fabia-zanasi/",
        subject: "arts-design",
        summary: "Dott.ssa Fabia Zanasi directs academic planning and coordinates art history modules, curating specialized field seminar visits across the historic monuments of Bologna."
      },
      {
        id: 2102,
        name: "Prof. Franco La Cecla",
        title: "Visiting Lecturer in Cultural Anthropology and Architecture",
        department: "Dipartimento di Antropologia e Scienze Sociali",
        email: "franco.lacecla@universitaprimolevi.it",
        phone: "+39 051 249870",
        interests: ["Anthropology of Space", "Urban Sociology", "Cultural Epistemology", "Architecture and Human Behavior"],
        website: "https://www.universitaprimolevi.it/docenti/franco-la-cecla/",
        subject: "social-sciences",
        summary: "Prof. Franco La Cecla is an internationally recognized Italian anthropologist and essayist teaching courses on urban space, human perception, and contemporary social structures."
      }
    ]
  },

  // 13. Italy: Università Telematica Pegaso - Sede di Ancona
  {
    institution: "Università Telematica Pegaso (Sede di Ancona)",
    slug: "universita-telematica-pegaso-sede-di-ancona",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 554,
    location: "Ancona, Marche, Italy",
    website: "https://www.unipegaso.it",
    shortName: "Pegaso Ancona",
    badge: "Digital Higher Education & Marche Regional Polo",
    overview: "Università Telematica Pegaso - Sede di Ancona serves as the central Marche regional university centre for Italy's largest state-accredited telematic university. Offering Italian Ministry of Universities and Research (MUR) accredited degrees in education, computer engineering, law, and physical education, the Ancona centre coordinates in-person exam sessions, academic advising, and regional corporate agreements.",
    lead: "Study state-accredited Italian bachelor's and master's degrees with localized exam sessions in Ancona.",
    description: "Università Telematica Pegaso Ancona online engineering and educational sciences degrees, Italian state exam sessions, and regional discounts.",
    quickFacts: {
      type: "State-Recognized Telematic University (Multiversity Group)",
      campus: "Sede d'Esame Ancona, Corso Mazzini / Piazza Cavour Area, Ancona, Marche",
      accreditation: "Italian Ministry of Universities and Research (MUR) / ANVUR Verified",
      admissions: "Continuous online enrollment with immediate digital platform access",
      language: "Italian (B2/C1 for official examinations and state-recognized degrees)",
      aid: "Programma All-Inclusive, Convenzioni Sindacali, and Regional Youth Reductions"
    },
    strengths: [
      "Official ANVUR-accredited degrees carrying identical legal value to traditional state universities",
      "Localized in-person and digital exam sittings right in Ancona for Marche region residents",
      "Leading national provider of teaching qualification credits (24/30/60 CFU percorsi abilitanti docenti)",
      "State-of-the-art 24/7 digital learning environment with video lectures, interactive quizzes, and e-tutors"
    ],
    programs: [
      { title: "Laurea Magistrale in Scienze Pedagogiche (Pedagogical Sciences)", level: "Two-Year Master's", desc: "Specialized master's qualifying graduates for educational leadership, school coordination, and special needs pedagogical design." },
      { title: "Laurea Triennale in Ingegneria Informatica (Computer Engineering)", level: "Three-Year Bachelor's", desc: "Rigorous curriculum encompassing database systems, object-oriented software design, computer networking, and cybersecurity." },
      { title: "Laurea Triennale in Scienze Motorie (Sports and Physical Exercise)", level: "Three-Year Bachelor's", desc: "Comprehensive training in exercise physiology, kinesiology, sports management, and athletic coaching methodologies." }
    ],
    opportunities: [
      {
        id: 4862,
        title: "Borsa di Studio Futuro Marche - Pegaso Ancona",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Tuition reduction granted to Marche region residents enrolling in online undergraduate degrees through the Ancona regional headquarters.",
        funding: "Reduction of annual tuition from €3,000 to €1,700 per year",
        fee: "€0",
        tuition: "€1,700/year (under regional convention)",
        deadline: "2027-10-31",
        deadlineText: "October 31, 2027",
        source: "https://www.unipegaso.it/iscrizioni/convenzioni/",
        requirements: {
          gpa: "High school completion diploma (Diploma di Maturità)",
          ielts: "Italian B2/C1",
          gre: "Not required",
          papers: "Enrollment application and residency proof in Marche region",
          references: "Not required"
        }
      },
      {
        id: 4863,
        title: "Laurea Triennale in Ingegneria Informatica (L-8) Admission",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Three-year computer engineering degree covering algorithm development, web programming, operating systems, and computer network security.",
        funding: "Discounted tuition through regional corporate technology conventions",
        fee: "€16 stamp duty",
        tuition: "€1,800/year (discounted) / €3,000/year (standard)",
        deadline: "2027-11-30",
        deadlineText: "November 30, 2027",
        source: "https://www.unipegaso.it/corsi-di-laurea/ingegneria-informatica/",
        requirements: {
          gpa: "Secondary school certificate with passing math marks",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Digital registration and identity verification",
          references: "Not required"
        }
      },
      {
        id: 4864,
        title: "Percorso Universitario 60 CFU per l'Abilitazione Docenti",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Accredited 60 CFU teacher training qualification pathway mandated by MUR for secondary school teaching concourses.",
        funding: "Eligible for Italian Carta del Docente (€500 annual voucher)",
        fee: "€16",
        tuition: "€2,500 total regulated fee",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.unipegaso.it/corsi-post-laurea/percorsi-abilitanti-docenti/",
        requirements: {
          gpa: "Relevant Master's degree (Laurea Magistrale) satisfying specific subject class requirements",
          ielts: "Italian fluency",
          gre: "Not required",
          papers: "Transcript evaluation confirming class competition access",
          references: "Academic director approval"
        }
      },
      {
        id: 4865,
        title: "Laurea Magistrale in Scienze Pedagogiche (LM-85) Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Advanced two-year master's preparing pedagogical coordinators, juvenile justice counselors, and adult education directors.",
        funding: "Discounted rate for public school employees and social cooperative staff",
        fee: "€16",
        tuition: "€1,900/year",
        deadline: "2027-10-31",
        deadlineText: "October 31, 2027",
        source: "https://www.unipegaso.it/corsi-di-laurea/scienze-pedagogiche/",
        requirements: {
          gpa: "Undergraduate degree in Educational Sciences, Psychology, or Humanities",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Degree certificate and transcript of credits",
          references: "Not required"
        }
      },
      {
        id: 4866,
        title: "Laurea Triennale in Scienze Motorie (L-22) Admission",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Comprehensive degree in sports biomechanics, athletic training, rehabilitation gymnastics, and sports club management.",
        funding: "CONI sports federation affiliated discount",
        fee: "€16",
        tuition: "€1,800/year",
        deadline: "2027-11-30",
        deadlineText: "November 30, 2027",
        source: "https://www.unipegaso.it/corsi-di-laurea/scienze-motorie/",
        requirements: {
          gpa: "Maturità certificate",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Medical certificate for non-competitive sports activity",
          references: "Not required"
        }
      },
      {
        id: 4867,
        title: "Pegaso Ancona Digital Innovation Grant for Regional Startups",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Annual seed innovation grant supported by Pegaso and Marche regional incubators rewarding student e-commerce and ed-tech ideas.",
        funding: "€3,000 cash grant and technical cloud infrastructure support",
        fee: "€0",
        tuition: "Free contest for matriculated students",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.unipegaso.it/ricerca/innovazione/",
        requirements: {
          gpa: "Good academic standing in a Pegaso degree program",
          ielts: "Italian or English",
          gre: "Not required",
          papers: "Business plan highlighting digital platform scalability in the Marche region",
          references: "Faculty committee evaluation"
        }
      },
      {
        id: 4868,
        title: "Master di I Livello in Management per le Funzioni di Coordinamento",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Official one-year healthcare master's qualifying nurses, physiotherapists, and technicians for ward head and coordination positions (Caposala).",
        funding: "Eligible for healthcare tax credits",
        fee: "€16",
        tuition: "€1,200 total tuition",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.unipegaso.it/master/coordinamento-sanitario/",
        requirements: {
          gpa: "Degree in Healthcare Professions (Nursing, Midwifery, Radiology, Physiotherapy) with at least 2 years clinical experience",
          ielts: "Italian fluency",
          gre: "Not required",
          papers: "Registration with the professional health registry (OPI/TSRM)",
          references: "Hospital ward endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2103,
        name: "Prof. Pierpaolo Limone",
        title: "Rettore (Rector) & Professor of Experimental Pedagogy",
        department: "Rettorato & Dipartimento di Scienze dell'Educazione",
        email: "rettore@unipegaso.it",
        phone: "+39 081 7614000",
        interests: ["Digital Pedagogy", "Educational Technology", "Media Education", "Experimental Learning Methodologies"],
        website: "https://www.unipegaso.it/ateneo/governance/rettore/",
        subject: "social-sciences",
        summary: "Prof. Pierpaolo Limone is Rector of Università Telematica Pegaso, leading national research into generative AI in personalized education, virtual learning environments, and teacher training methodologies."
      },
      {
        id: 2104,
        name: "Prof.ssa Raffaella Cassano",
        title: "Professor of Business Economics and Strategy",
        department: "Dipartimento di Economia e Management",
        email: "raffaella.cassano@unipegaso.it",
        phone: "+39 081 7614001",
        interests: ["Corporate Governance", "Digital Business Models", "Financial Reporting", "Regional Business Ecosystems"],
        website: "https://www.unipegaso.it/docenti/raffaella-cassano/",
        subject: "social-sciences",
        summary: "Prof.ssa Raffaella Cassano investigates strategic financial management, circular economy integration in manufacturing SMEs, and digital corporate reporting."
      },
      {
        id: 2105,
        name: "Prof. Ing. Marco Franceschetti",
        title: "Associate Professor of Computer Engineering",
        department: "Dipartimento di Ingegneria",
        email: "marco.franceschetti@unipegaso.it",
        phone: "+39 081 7614002",
        interests: ["Cybersecurity Protocols", "Distributed Cloud Computing", "Big Data Analytics", "IoT Network Security"],
        website: "https://www.unipegaso.it/docenti/marco-franceschetti/",
        subject: "computer-science",
        summary: "Prof. Ing. Marco Franceschetti instructs courses in computer network architecture and cybersecurity, evaluating zero-trust network defenses and encrypted distributed communications."
      }
    ]
  },

  // 14. USA: Arizona State University - Tempe Campus
  {
    institution: "Arizona State University (Tempe Campus)",
    slug: "arizona-state-university-tempe-campus",
    countryId: "usa",
    countryLabel: "United States",
    sourceRow: 578,
    location: "Tempe, Arizona, United States",
    website: "https://www.asu.edu",
    shortName: "ASU Tempe",
    badge: "Tier-1 Research & #1 in Innovation",
    overview: "Arizona State University - Tempe Campus is the historic flagship and primary research powerhouse of ASU, consistently ranked #1 in Innovation by U.S. News & World Report for ten consecutive years. An R1 Carnegie-classified institution with over $800M in annual research expenditures, ASU Tempe hosts the Ira A. Fulton Schools of Engineering, the Biodesign Institute, and the Julie Ann Wrigley Global Futures Laboratory.",
    lead: "Join the nation's #1 university for innovation, top-ranked engineering, and cutting-edge planetary sustainability research at ASU Tempe.",
    description: "Arizona State University Tempe campus master's degrees, Fulton Engineering research fellowships, and international innovation scholarships.",
    quickFacts: {
      type: "Public Flagship Research University (R1 Doctoral Institution)",
      campus: "Historic Tempe Campus (664 acres), Phoenix Metropolitan Area, Arizona",
      accreditation: "Higher Learning Commission (HLC) / ABET / AACSB",
      admissions: "ASU Central Graduate & Undergraduate Admissions Portal",
      language: "English (TOEFL iBT 80, IELTS 6.5, or Duolingo 105 for most programs)",
      aid: "New American University Scholarships, Fulton Graduate Fellowships & RA/TA appointments"
    },
    strengths: [
      "Ranked #1 for Innovation by U.S. News & World Report ahead of MIT and Stanford",
      "Ira A. Fulton Schools of Engineering: largest and most comprehensive engineering school in the US",
      "The Biodesign Institute: groundbreaking research in biomimetic materials, immunology, and clean energy",
      "Julie Ann Wrigley Global Futures Laboratory: world-leading planetary sustainability research"
    ],
    programs: [
      { title: "Master of Science in Computer Science (Fulton)", level: "Graduate Degree", desc: "Two-year research-intensive master's covering artificial intelligence, distributed cloud systems, algorithmic robotics, and cryptographic protocols." },
      { title: "Doctor of Philosophy in Sustainability", level: "Doctoral Degree", desc: "Flagship interdisciplinary doctorate from the School of Sustainability examining climate resilience, water resource governance, and urban ecology." },
      { title: "Master of Science in Electrical Engineering", level: "Graduate Degree", desc: "World-class curriculum in semiconductors, power systems, RF photonics, and nanoscale device physics in partnership with Intel and TSMC." }
    ],
    opportunities: [
      {
        id: 4869,
        title: "New American University International Student Merit Award",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Prestigious renewable undergraduate and graduate scholarship awarded to outstanding international scholars admitted to degree programs at ASU Tempe.",
        funding: "Up to $15,000 per academic year credited directly toward out-of-state tuition fees",
        fee: "$85 international application fee",
        tuition: "$33,400 to $37,200 per year for out-of-state/international students",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Priority scholarship round)",
        source: "https://admission.asu.edu/international/costs-aid",
        requirements: {
          gpa: "Minimum 3.50/4.0 unweighted GPA in previous secondary or undergraduate study",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 80",
          gre: "Not required for undergraduate; department-specific for graduate",
          papers: "Demonstrated extracurricular achievement, leadership essays, and academic transcripts",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 4870,
        title: "Fulton Schools of Engineering Graduate Dean's Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Full graduate funding package for exceptional Ph.D. scholars in Computer Science, Electrical Engineering, and Robotics.",
        funding: "Full tuition waiver, comprehensive health insurance, and a $32,000 annual living stipend",
        fee: "$85",
        tuition: "100% waived by engineering fellowship",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (For Fall 2027 admission)",
        source: "https://engineering.asu.edu/graduate-fellowships/",
        requirements: {
          gpa: "Minimum 3.6/4.0 GPA in engineering, math, or computer science",
          ielts: "IELTS 7.0 or TOEFL iBT 90",
          gre: "Optional but recommended for quantitative assessment",
          papers: "Detailed 2-page research statement highlighting research alignment with Fulton faculty",
          references: "Three academic reference letters"
        }
      },
      {
        id: 4871,
        title: "Master of Science in Computer Science Enrolment",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Comprehensive 30-credit master's with thesis and non-thesis options, featuring specialized tracks in Big Data Systems, Cybersecurity, and AI.",
        funding: "Teaching and Research Assistantships available ($12,000–$16,000/semester)",
        fee: "$85",
        tuition: "$17,500 per semester (non-resident)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://scai.engineering.asu.edu/graduate-computer-science/",
        requirements: {
          gpa: "Bachelor of Science in Computer Science or related STEM field with minimum 3.25 GPA",
          ielts: "IELTS 6.5 or TOEFL iBT 80",
          gre: "GRE quantitative score 160+ recommended",
          papers: "Statement of purpose and current technical CV",
          references: "Three letters of recommendation"
        }
      },
      {
        id: 4872,
        title: "Biodesign Institute Postdoctoral Fellowship in Molecular Design",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Two-year postdoctoral research appointment at the Biodesign Center for Molecular Design and Biomimetics developing synthetic biology nanostructures.",
        funding: "$62,000 to $68,000 annual salary plus full university employee healthcare benefits",
        fee: "$0",
        tuition: "Not applicable (salaried employment)",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://biodesign.asu.edu/careers/",
        requirements: {
          gpa: "Ph.D. in Biochemistry, Molecular Biology, Chemical Engineering, or Biophysics",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Comprehensive publication list and 3-page research proposal on DNA origami or enzymatic nanostructures",
          references: "Three professional peer references"
        }
      },
      {
        id: 4873,
        title: "Julie Ann Wrigley Global Futures Planetary Sustainability Grant",
        type: "Grant",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Competitive seed research funding for interdisciplinary teams researching arid-lands water governance, extreme heat mitigation, and clean transitions.",
        funding: "$25,000 to $50,000 research project award",
        fee: "$0",
        tuition: "Not applicable",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://globalfutures.asu.edu/research/",
        requirements: {
          gpa: "Graduate student or faculty standing in sustainability, geography, or environmental policy",
          ielts: "English 7.0",
          gre: "Not required",
          papers: "Interdisciplinary project proposal with clear Arizona community partner co-benefits",
          references: "Dean of School approval"
        }
      },
      {
        id: 4874,
        title: "Intel Semiconductor Research Internship at ASU Tempe",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Six-month cooperative research internship at Intel's Chandler semiconductor fabrication complex in collaboration with ASU Fulton nanofabrication labs.",
        funding: "$35–$45/hour full-time wage plus tuition assistance credits",
        fee: "$0",
        tuition: "Paid industry placement",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://engineering.asu.edu/industry-partnerships/",
        requirements: {
          gpa: "Enrolled in M.S. or Ph.D. in Electrical Engineering, Materials Science, or Chemical Engineering (GPA 3.4+)",
          ielts: "English 6.5",
          gre: "Not required",
          papers: "Technical resume highlighting semiconductor lithography, cleanroom, or circuit design experience",
          references: "Faculty research advisor sign-off"
        }
      },
      {
        id: 4875,
        title: "Master of Science in Clean Energy and Electrical Power Systems",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Two-year graduate degree focusing on high-voltage grid stability, utility-scale photovoltaic integration, and power electronics.",
        funding: "Eligible for US Department of Energy clean energy traineeships ($24,000/year)",
        fee: "$85",
        tuition: "$17,500/semester (non-resident)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://ecee.engineering.asu.edu/graduate/",
        requirements: {
          gpa: "B.S. in Electrical Engineering with minimum 3.0 GPA",
          ielts: "IELTS 6.5 or TOEFL iBT 80",
          gre: "Optional",
          papers: "Statement of purpose describing grid integration or renewable power interests",
          references: "Three references"
        }
      }
    ],
    researchers: [
      {
        id: 2106,
        name: "Dr. Michael M. Crow",
        title: "President of Arizona State University & Professor of Science and Technology Policy",
        department: "Office of the President & School for the Future of Innovation in Society",
        email: "michael.crow@asu.edu",
        phone: "+1 480-965-8974",
        interests: ["Higher Education Innovation", "Science and Technology Policy", "Sustainable Development", "Knowledge Enterprise Design"],
        website: "https://president.asu.edu/about/biography",
        subject: "social-sciences",
        summary: "Dr. Michael M. Crow is President of Arizona State University, recognized globally as the visionary architect of the 'New American University' model, driving unprecedented research expansion and democratization of higher learning."
      },
      {
        id: 2107,
        name: "Dr. Hao Yan",
        title: "Director of the Biodesign Center for Molecular Design & Biomimetics",
        department: "School of Molecular Sciences & The Biodesign Institute",
        email: "hao.yan@asu.edu",
        phone: "+1 480-727-8570",
        interests: ["DNA Nanotechnology", "Structural Biomimetics", "Molecular Computation", "Directed Self-Assembly"],
        website: "https://biodesign.asu.edu/hao-yan",
        subject: "chemistry",
        summary: "Dr. Hao Yan is a pioneer in structural DNA nanotechnology, engineering functional macromolecular architectures for targeted cancer therapeutics and nanoscale photonic devices."
      },
      {
        id: 2108,
        name: "Dr. Kyle Squires",
        title: "Dean, Ira A. Fulton Schools of Engineering & Vice Provost",
        department: "Ira A. Fulton Schools of Engineering",
        email: "squires@asu.edu",
        phone: "+1 480-965-1721",
        interests: ["Fluid Dynamics", "Computational Turbulence Modeling", "Aerodynamics of Complex Configurations", "High-Performance Computing"],
        website: "https://fultonapps.asu.edu/directory/person/7625",
        subject: "engineering",
        summary: "Dr. Kyle Squires is Dean of the Fulton Schools of Engineering and a fellow of ASME and AIAA, researching computational fluid dynamics, turbulence simulation, and aerodynamic optimization."
      }
    ]
  },

  // 15. USA: Bethel College (Kansas)
  {
    institution: "Bethel College",
    slug: "bethel-college-kansas",
    countryId: "usa",
    countryLabel: "United States",
    sourceRow: 595,
    location: "North Newton, Kansas, United States",
    website: "https://www.bethelks.edu",
    shortName: "Bethel College KS",
    badge: "Mennonite Heritage & Top Liberal Arts",
    overview: "Bethel College, chartered in 1887 in North Newton, Kansas, is the oldest Mennonite college in North America. Known for its rigorous undergraduate liberal arts, nursing, peace and conflict studies, and sciences, Bethel consistently ranks among the top national liberal arts colleges in Washington Monthly for social mobility, student community service, and research output.",
    lead: "Experience values-driven liberal arts education, premier undergraduate science research, and generous merit scholarships at Bethel College.",
    description: "Bethel College Kansas undergraduate liberal arts, peace and conflict studies, nursing degrees, and international merit scholarships.",
    quickFacts: {
      type: "Private Liberal Arts College (Mennonite Affiliated)",
      campus: "North Newton Campus (60 scenic acres in central Kansas)",
      accreditation: "Higher Learning Commission (HLC) / CCNE (Nursing) / CAEP (Education)",
      admissions: "Direct online application with rolling admissions",
      language: "English (IELTS 6.0, TOEFL iBT 70, or Duolingo 95)",
      aid: "Bethel Academic Merit Scholarships ($10,000–$16,000/year) & Kansas Comprehensive Grants"
    },
    strengths: [
      "Top 20 National Liberal Arts College for Social Mobility by Washington Monthly",
      "Pioneering Kansas Institute for Peace and Conflict Resolution (KIPCOR)",
      "Exceptional acceptance rate to medical, dental, and graduate health science programs",
      "Strong undergraduate student research opportunities with dedicated faculty mentorship"
    ],
    programs: [
      { title: "Bachelor of Science in Nursing (BSN)", level: "Undergraduate Degree", desc: "Four-year CCNE-accredited nursing curriculum featuring state-of-the-art simulation labs and extensive clinical rotations in Wichita regional hospitals." },
      { title: "Bachelor of Arts in Peace and Conflict Studies", level: "Undergraduate Degree", desc: "Interdisciplinary study of restorative justice, international mediation, conflict resolution, and human rights advocacy through KIPCOR." },
      { title: "Bachelor of Science in Biology / Pre-Medicine", level: "Undergraduate Degree", desc: "Rigorous laboratory and field biology program examining genetics, cellular biology, and environmental ecology with 95%+ pre-med placement." }
    ],
    opportunities: [
      {
        id: 4876,
        title: "Bethel Presidential Academic Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Four-year merit scholarship awarded to incoming freshmen demonstrating exceptional secondary school academic performance.",
        funding: "$16,000 per academic year ($64,000 total across four undergraduate years)",
        fee: "$0 online application fee",
        tuition: "$33,400 per academic year",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027 (Priority scholarship consideration)",
        source: "https://www.bethelks.edu/admissions/financial-aid/scholarships/",
        requirements: {
          gpa: "Minimum 3.75 high school GPA on a 4.0 scale (or ACT 27+ / SAT 1260+)",
          ielts: "IELTS 6.5 or TOEFL iBT 79",
          gre: "Not required",
          papers: "High school transcript and personal motivation statement",
          references: "One counselor or teacher recommendation letter"
        }
      },
      {
        id: 4877,
        title: "KIPCOR Peace & Restorative Justice Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Undergraduate research and community mediation fellowship hosted at the Kansas Institute for Peace and Conflict Resolution.",
        funding: "$4,500 annual research stipend plus certified civil mediation training",
        fee: "$0",
        tuition: "Integrated into degree scholarship package",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://kipcor.org/",
        requirements: {
          gpa: "Minimum 3.2 GPA in peace studies, history, political science, or psychology",
          ielts: "English fluency",
          gre: "Not required",
          papers: "750-word essay on nonviolent conflict intervention or restorative justice practices",
          references: "Faculty letter of support"
        }
      },
      {
        id: 4878,
        title: "Bachelor of Science in Nursing (BSN) Admission & Clinical Practicum",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Direct entry or transfer into Bethel's acclaimed nursing cohort with intensive clinical placements in Wichita trauma and rural health centres.",
        funding: "Kansas Nursing Service Scholarship ($4,500/year service agreement)",
        fee: "$0",
        tuition: "$33,400 per year (heavily offset by merit scholarships)",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.bethelks.edu/academics/undergraduate-programs/nursing/",
        requirements: {
          gpa: "Minimum 2.75 cumulative college GPA with grades of 'C' or better in anatomy, physiology, and microbiology",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "TEAS nursing entrance exam score and personal essay",
          references: "Two academic or clinical references"
        }
      },
      {
        id: 4879,
        title: "Undergraduate Summer Research Institute (URSI) Science Grant",
        type: "Grant",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Ten-week funded summer laboratory research program pairing students one-on-one with faculty mentors in biochemistry, ecology, or genetics.",
        funding: "$4,000 summer student stipend plus free on-campus housing in Goerz Hall",
        fee: "$0",
        tuition: "Full summer research grant",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.bethelks.edu/academics/research-opportunities/",
        requirements: {
          gpa: "Enrolled Bethel undergraduate majoring in Biology, Chemistry, or Mathematics (GPA 3.0+)",
          ielts: "English 6.0",
          gre: "Not required",
          papers: "Laboratory project proposal developed in collaboration with a Bethel research professor",
          references: "Faculty sponsor nomination"
        }
      },
      {
        id: 4880,
        title: "Bethel International Student Diversity Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Need- and merit-based grant awarded to non-US citizen students bringing diverse global perspectives to the North Newton campus.",
        funding: "Up to $12,000 per academic year applied toward tuition and campus housing",
        fee: "$0",
        tuition: "Credited directly to billing statement",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.bethelks.edu/admissions/international-students/",
        requirements: {
          gpa: "Secondary school certificate with high academic standing (equivalent to 3.0+ US GPA)",
          ielts: "IELTS 6.0 or TOEFL iBT 70",
          gre: "Not required",
          papers: "International financial certification form and personal essay",
          references: "One teacher reference"
        }
      },
      {
        id: 4881,
        title: "Mennonite Church USA Leadership Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Tuition matching grant for active participants in Mennonite, Anabaptist, or related historic peace church congregations.",
        funding: "$2,000 annual Bethel match of congregational scholarship support",
        fee: "$0",
        tuition: "Direct tuition reduction",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.bethelks.edu/admissions/financial-aid/church-grants/",
        requirements: {
          gpa: "Admission in good standing to Bethel College",
          ielts: "English 6.0",
          gre: "Not required",
          papers: "Church sponsorship confirmation letter",
          references: "Pastor or church board reference"
        }
      },
      {
        id: 4882,
        title: "Bachelor of Arts in Graphic Design and Visual Media Enrolment",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Four-year undergraduate program combining digital illustration, typography, UI/UX design, and gallery exhibition production.",
        funding: "Bethel Fine Arts Performance Scholarships available ($1,500–$3,500/year)",
        fee: "$0",
        tuition: "$33,400/year",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.bethelks.edu/academics/undergraduate-programs/art/",
        requirements: {
          gpa: "High school graduation certificate with 2.50+ GPA",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Portfolio submission of 5–10 original artworks",
          references: "Art teacher reference"
        }
      }
    ],
    researchers: [
      {
        id: 2109,
        name: "Dr. Jon C. Gering",
        title: "President & Professor of Biology",
        department: "Office of the President & Department of Biology",
        email: "jgering@bethelks.edu",
        phone: "+1 316-284-5248",
        interests: ["Insect Ecology", "Biogeography", "Biodiversity Conservation", "Higher Education Leadership"],
        website: "https://www.bethelks.edu/about/leadership/president/",
        subject: "biology",
        summary: "Dr. Jon C. Gering is President of Bethel College and an ecologist studying arboreal insect community dynamics, biodiversity metrics, and ecological stewardship in prairie landscapes."
      },
      {
        id: 2110,
        name: "Dr. Sheri Lepard",
        title: "Director of Nursing & Associate Professor",
        department: "Department of Nursing",
        email: "slepard@bethelks.edu",
        phone: "+1 316-284-5287",
        interests: ["Nurse Education Pedagogy", "Clinical Simulation", "Rural Healthcare Access", "Palliative Care"],
        website: "https://www.bethelks.edu/academics/faculty/sheri-lepard/",
        subject: "biology",
        summary: "Dr. Sheri Lepard directs Bethel's accredited nursing program, innovating high-fidelity simulation training to prepare registered nurses for acute and rural healthcare environments."
      },
      {
        id: 2111,
        name: "Dan Quinlin",
        title: "Director of KIPCOR & Lecturer in Conflict Resolution",
        department: "Kansas Institute for Peace and Conflict Resolution (KIPCOR)",
        email: "dquinlin@bethelks.edu",
        phone: "+1 316-284-5217",
        interests: ["Restorative Justice", "Community Mediation", "Conflict Coaching", "Nonviolent Communication"],
        website: "https://kipcor.org/about/staff/",
        subject: "social-sciences",
        summary: "Dan Quinlin leads KIPCOR, facilitating state-certified mediation, restorative justice initiatives in Kansas correctional and school systems, and student peace advocacy."
      }
    ]
  },

  // 16. USA: Bethel University (Tennessee)
  {
    institution: "Bethel University",
    slug: "bethel-university-tennessee",
    countryId: "usa",
    countryLabel: "United States",
    sourceRow: 596,
    location: "McKenzie, Tennessee, United States",
    website: "https://www.bethelu.edu",
    shortName: "Bethel University TN",
    badge: "Healthcare, Criminal Justice & Bass Fishing",
    overview: "Bethel University, chartered in 1842 in McKenzie, Tennessee, is a private comprehensive university affiliated with the Cumberland Presbyterian Church. Renowned across the Southeast for its Physician Assistant (PA) master's program, online criminal justice and business degrees, and national-championship collegiate bass fishing team, Bethel combines professional preparation with Christian service.",
    lead: "Explore accredited Physician Assistant master's programs, online criminal justice degrees, and athletic scholarships at Bethel University.",
    description: "Bethel University Tennessee Physician Assistant master's degree, online nursing, MBA programs, and collegiate athletic scholarships.",
    quickFacts: {
      type: "Private Comprehensive University (Cumberland Presbyterian Affiliated)",
      campus: "McKenzie Campus (100 acres in West Tennessee) & Online Division",
      accreditation: "Southern Association of Colleges and Schools Commission on Colleges (SACSCOC) / ARC-PA",
      admissions: "Direct online application via Bethel Portal / CASPA for Physician Assistant",
      language: "English (TOEFL iBT 79, IELTS 6.5, or Duolingo 100)",
      aid: "Bethel Institutional Merit Scholarships, Tennessee HOPE Scholarship & Federal Pell Grants"
    },
    strengths: [
      "Accredited Master of Science in Physician Assistant Studies (MSPAS) with top board pass rates",
      "Nationally dominant collegiate competitive bass fishing program (multiple national titles)",
      "Comprehensive College of Professional Studies offering flexible 100% online adult degrees",
      "Division of Nursing CCNE-accredited undergraduate training with rural health clinicals"
    ],
    programs: [
      { title: "Master of Science in Physician Assistant Studies (MSPAS)", level: "Graduate Professional Degree", desc: "27-month intensive ARC-PA accredited medical curriculum featuring 12 months of clinical rotations in family medicine, surgery, and emergency care." },
      { title: "Master of Business Administration (MBA)", level: "Graduate Degree", desc: "36-credit online graduate program with concentrations in Healthcare Administration, Executive Management, and Academic Leadership." },
      { title: "Bachelor of Science in Criminal Justice", level: "Undergraduate Degree", desc: "Comprehensive study of forensic investigation, constitutional law, corrections policy, and emergency management." }
    ],
    opportunities: [
      {
        id: 4883,
        title: "Bethel University Academic Excellence Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Merit award granted to incoming full-time undergraduate students based on cumulative high school GPA and standardized test scores.",
        funding: "Up to $11,000 per academic year renewable for four consecutive years",
        fee: "$0 application fee",
        tuition: "$17,490 per academic year for traditional undergraduate programs",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027 (Rolling admissions)",
        source: "https://www.bethelu.edu/admissions/financial-aid/scholarships",
        requirements: {
          gpa: "Minimum 3.25 cumulative GPA on a 4.0 scale",
          ielts: "IELTS 6.5 or TOEFL iBT 79",
          gre: "Not required",
          papers: "High school transcript and completed FAFSA or international financial affidavit",
          references: "One academic reference"
        }
      },
      {
        id: 4884,
        title: "Master of Science in Physician Assistant Studies (MSPAS) Admission",
        type: "Master's",
        subject: "biology",
        subjects: ["biology"],
        desc: "Highly competitive 27-month clinical program preparing medical providers for national certification (PANCE) and clinical practice.",
        funding: "Eligible for federal HRSA rural healthcare loan repayment grants ($50,000)",
        fee: "$60 supplemental fee (plus CASPA application fee)",
        tuition: "$88,500 total program tuition across seven trimesters",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (For CASPA rolling evaluation)",
        source: "https://www.bethelu.edu/academics/physician-assistant-studies",
        requirements: {
          gpa: "Minimum 3.25 overall GPA and 3.25 science prerequisite GPA; minimum 1,000 hours of direct patient healthcare experience",
          ielts: "TOEFL iBT 90 or IELTS 7.0",
          gre: "Optional",
          papers: "CASPA personal narrative, verified clinical hours log, and situational judgment test",
          references: "Three references (including at least one practicing PA or physician)"
        }
      },
      {
        id: 4885,
        title: "Master of Business Administration in Healthcare Management",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "100% online MBA tailored for healthcare administrators, covering medical law, clinical informatics, healthcare finance, and strategic planning.",
        funding: "Corporate partner tuition discount of 15%",
        fee: "$0",
        tuition: "$610 per credit hour ($21,960 total degree tuition)",
        deadline: "2027-07-01",
        deadlineText: "July 1, 2027",
        source: "https://www.bethelu.edu/academics/college-of-professional-studies/mba",
        requirements: {
          gpa: "Bachelor's degree from a regionally accredited institution with minimum 2.50 GPA",
          ielts: "English 6.5",
          gre: "Not required",
          papers: "Official undergraduate transcripts and professional resume",
          references: "Two professional references"
        }
      },
      {
        id: 4886,
        title: "Collegiate Bass Fishing Team Athletic Scholarship",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment"],
        desc: "Athletic scholarship awarded to competitive collegiate anglers representing Bethel in national Bassmaster and MLF collegiate tournaments.",
        funding: "Partial to full tuition scholarship plus tournament travel and tournament boat equipment support",
        fee: "$0",
        tuition: "Awarded as athletic scholarship award",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://bethelathletics.com/sports/fish/index",
        requirements: {
          gpa: "High school GPA 2.50+ and meet NAIA eligibility clearinghouse rules",
          ielts: "English 6.0",
          gre: "Not required",
          papers: "Tournament angling resume and video highlight submission",
          references: "Head Coach interview and tryout evaluation"
        }
      },
      {
        id: 4887,
        title: "Bachelor of Science in Criminal Justice Online Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Accelerated degree completion program for law enforcement officers, military service members, and aspiring criminal justice professionals.",
        funding: "Law enforcement agency educational tuition assistance eligible",
        fee: "$0",
        tuition: "$420 per credit hour",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://www.bethelu.edu/academics/college-of-professional-studies/criminal-justice",
        requirements: {
          gpa: "High school completion or transferable college credits (minimum 2.0 GPA)",
          ielts: "English 6.0",
          gre: "Not required",
          papers: "Official transcripts and career goal summary",
          references: "One referee"
        }
      },
      {
        id: 4888,
        title: "Bethel Christian Leadership & Church Ministry Award",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Tuition grant for dependent children of ordained ministers or students actively pursuing vocational ministry degrees.",
        funding: "$2,500 annual award renewable across four years",
        fee: "$0",
        tuition: "Applied directly to tuition balance",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.bethelu.edu/admissions/financial-aid/",
        requirements: {
          gpa: "Minimum 2.5 GPA and active church affiliation",
          ielts: "English 6.0",
          gre: "Not required",
          papers: "Letter from church denomination certifying ministerial standing or ordination",
          references: "Pastor reference letter"
        }
      },
      {
        id: 4889,
        title: "Tennessee Rural Health Nursing Scholarship Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Funded clinical nursing practicum hosted in West Tennessee rural health clinics and critical access hospitals.",
        funding: "$3,000 semester clinical stipend plus mileage reimbursement",
        fee: "$0",
        tuition: "Integrated into BSN degree program",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.bethelu.edu/academics/division-of-nursing",
        requirements: {
          gpa: "Senior standing in Bethel Bachelor of Science in Nursing program",
          ielts: "English 6.5",
          gre: "Not required",
          papers: "Clinical competency checklist and background check",
          references: "Clinical Nursing Faculty recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2112,
        name: "Dr. Walter Butler",
        title: "President & Alumnus of Bethel University",
        department: "Office of the President",
        email: "butlerw@bethelu.edu",
        phone: "+1 731-352-4004",
        interests: ["Higher Education Administration", "Christian Leadership", "Rural Community Development", "Adult Degree Completion"],
        website: "https://www.bethelu.edu/about/office-of-the-president",
        subject: "social-sciences",
        summary: "Dr. Walter Butler has served as President of Bethel University since 2013, steering major online degree growth and healthcare laboratory enhancements across Tennessee."
      },
      {
        id: 2113,
        name: "Dr. Jenny Webb",
        title: "Program Director & Associate Professor of Physician Assistant Studies",
        department: "Physician Assistant Studies Program",
        email: "webbj@bethelu.edu",
        phone: "+1 731-352-6467",
        interests: ["Physician Assistant Education", "Primary Care Medicine", "Emergency Medicine Diagnostics", "Clinical Simulation Competency"],
        website: "https://www.bethelu.edu/academics/physician-assistant-faculty",
        subject: "biology",
        summary: "Dr. Jenny Webb directs the ARC-PA accredited Physician Assistant program, coordinating clinical education and rural health primary care rotations across the Mid-South."
      },
      {
        id: 2114,
        name: "Garry Mason",
        title: "Head Coach, Bethel University Bass Fishing",
        department: "Department of Athletics",
        email: "masong@bethelu.edu",
        phone: "+1 731-352-4050",
        interests: ["Collegiate Bass Fishing", "Aquatic Ecosystem Conservation", "Outdoor Sports Management", "Fisheries Stewardship"],
        website: "https://bethelathletics.com/sports/fish/coaches/garry-mason",
        subject: "environment",
        summary: "Garry Mason is the legendary founder and head coach of Bethel's Bass Fishing team, creating the first collegiate bass fishing scholarship program in America and winning multiple national championships."
      }
    ]
  },

  // 17. USA: Blue Ridge Community College (North Carolina)
  {
    institution: "Blue Ridge Community College",
    slug: "blue-ridge-community-college-north-carolina",
    countryId: "usa",
    countryLabel: "United States",
    sourceRow: 598,
    location: "Flat Rock & Hendersonville, North Carolina, United States",
    website: "https://www.blueridge.edu",
    shortName: "Blue Ridge CC",
    badge: "Advanced Manufacturing & Appalachian Tech",
    overview: "Blue Ridge Community College, situated in the Blue Ridge Mountains of western North Carolina with campuses in Henderson and Transylvania counties, is a premier two-year public institution renowned for its cutting-edge mechatronics, advanced manufacturing, brewing and distillation sciences, and comprehensive university transfer degrees.",
    lead: "Gain hands-on skills in mechatronics engineering, healthcare sciences, and craft brewing at Blue Ridge Community College in North Carolina.",
    description: "Blue Ridge Community College North Carolina mechatronics engineering, brewing sciences, university transfer diplomas, and technical scholarships.",
    quickFacts: {
      type: "Public Comprehensive Community College (North Carolina Community College System)",
      campus: "Henderson County Campus (Flat Rock) & Transylvania County Campus (Brevard)",
      accreditation: "Southern Association of Colleges and Schools Commission on Colleges (SACSCOC)",
      admissions: "Open-door admissions policy via CFNC (College Foundation of North Carolina)",
      language: "English (TOEFL iBT 61, IELTS 5.5, or placement testing for international applicants)",
      aid: "Blue Ridge Educational Foundation Scholarships & North Carolina Longleaf Commitment Grants"
    },
    strengths: [
      "Southeastern Advanced Molding and Manufacturing Technology Centre (SAMMTC)",
      "Apprenticeship Blue Ridge: tuition-free company-paid youth and adult technical apprenticeships",
      "Craft Beverage Fermentation and Distillation program serving the regional brewing economy",
      "Seamless Comprehensive Articulation Agreement (CAA) transferring credits to all 16 UNC system universities"
    ],
    programs: [
      { title: "Associate in Applied Science in Mechatronics Engineering Technology", level: "Associate Degree (AAS)", desc: "Two-year technical degree covering industrial robotics, programmable logic controllers (PLCs), electrical motors, and automated manufacturing systems." },
      { title: "Associate in Science (University Transfer)", level: "Associate Degree (AS)", desc: "Sixty-credit transfer pathway directly articulating into engineering, computer science, and biological science bachelor's degrees across the UNC system." },
      { title: "Brewing, Distillation and Fermentation (AAS)", level: "Associate Degree (AAS)", desc: "Hands-on instruction in yeast microbiology, brewhouse engineering, sensory evaluation, and quality assurance chemistry." }
    ],
    opportunities: [
      {
        id: 4890,
        title: "Blue Ridge Educational Foundation Academic Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Endowed scholarship awarding full and partial tuition assistance to curriculum students pursuing engineering, technology, or health sciences.",
        funding: "Up to $2,500 per academic year covering tuition, required books, and laboratory fees",
        fee: "$0 application fee",
        tuition: "$2,432/year (In-state) / $8,576/year (Out-of-state/International)",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.blueridge.edu/financial-aid/scholarships/",
        requirements: {
          gpa: "Minimum 2.50 cumulative GPA on high school or college coursework",
          ielts: "English 5.5",
          gre: "Not required",
          papers: "Completed general scholarship application and FAFSA submission",
          references: "One reference"
        }
      },
      {
        id: 4891,
        title: "Apprenticeship Blue Ridge Salaried Technical Contract",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Four-year registered apprenticeship pairing students with regional manufacturing corporations with full tuition coverage and paid wages.",
        funding: "100% covered college tuition plus starting hourly wage of $15.00–$18.00/hour",
        fee: "$0",
        tuition: "Completely covered by state apprenticeship waiver and employer",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.blueridge.edu/apprenticeships/",
        requirements: {
          gpa: "High school diploma with satisfactory math and mechanical aptitude scores",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Employer interview, drug screen, and signed apprenticeship agreement",
          references: "High school technical teacher recommendation"
        }
      },
      {
        id: 4892,
        title: "Associate in Science to UNC Engineering Articulation Pathway",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "mathematics"],
        desc: "Two-year degree program providing guaranteed junior-year transfer into engineering faculties at NC State University or UNC Charlotte.",
        funding: "Eligible for federal Pell Grants and NC Community College scholarships",
        fee: "$0",
        tuition: "$1,216 per semester (in-state) / $4,288 per semester (out-of-state)",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.blueridge.edu/programs/associate-in-science/",
        requirements: {
          gpa: "High school completion; placement in Calculus I (MAT 271)",
          ielts: "English 5.5",
          gre: "Not required",
          papers: "High school or previous college transcripts",
          references: "Not required"
        }
      },
      {
        id: 4893,
        title: "Craft Brewing & Distillation Laboratory Practicum",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        desc: "Paid semester internship embedded within regional commercial craft breweries (e.g., Sierra Nevada, Oskar Blues) in western North Carolina.",
        funding: "$16.00/hour seasonal wage plus commercial sensory evaluation certification",
        fee: "$0",
        tuition: "Standard course enrollment fee",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.blueridge.edu/programs/brewing-distillation-fermentation/",
        requirements: {
          gpa: "Must be 21 years of age and completed brewhouse chemistry prerequisites with GPA 2.5+",
          ielts: "English 5.5",
          gre: "Not required",
          papers: "Brewing safety portfolio and resume",
          references: "Program lead instructor approval"
        }
      },
      {
        id: 4894,
        title: "North Carolina Longleaf Commitment Tuition Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "State legislative grant covering 100% of tuition and mandatory fees for eligible graduating high school seniors attending Blue Ridge CC.",
        funding: "Full tuition and fee coverage for up to two consecutive academic years",
        fee: "$0",
        tuition: "100% covered",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://www.blueridge.edu/financial-aid/longleaf-grant/",
        requirements: {
          gpa: "Graduate from a North Carolina high school with unweighted GPA of 2.8 or better",
          ielts: "Not applicable for domestic high school grads",
          gre: "Not required",
          papers: "Completed FAFSA and enrollment in a minimum of 6 credit hours",
          references: "High school verification"
        }
      },
      {
        id: 4895,
        title: "Associate Degree Nursing (ADN) Healthcare Admission",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology"],
        desc: "Five-semester registered nursing program preparing students for the NCLEX-RN licensing exam with clinical rotations in Pardee and AdventHealth.",
        funding: "Eligible for North Carolina Forgivable Education Loans for Service (FELS)",
        fee: "$0",
        tuition: "$2,432 per year (in-state tuition)",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027 (Competitive admission)",
        source: "https://www.blueridge.edu/programs/nursing/",
        requirements: {
          gpa: "Minimum 2.50 GPA in prerequisite anatomy, physiology, and general education courses",
          ielts: "English 6.0",
          gre: "Not required",
          papers: "ATI TEAS score report and certified nursing assistant (CNA I) credential",
          references: "Nursing admissions committee review"
        }
      },
      {
        id: 4896,
        title: "Automotive Systems Technology Master Technician Certificate",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "ASE-certified technical training in electric vehicle (EV) drivetrains, computer diagnostics, electronic braking, and suspension systems.",
        funding: "Snap-on Tool Grant discount program providing up to 50% tool rebates",
        fee: "$0",
        tuition: "$1,216 per semester",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.blueridge.edu/programs/automotive-systems/",
        requirements: {
          gpa: "High school completion or GED",
          ielts: "English 5.5",
          gre: "Not required",
          papers: "Valid driver's license and transcript",
          references: "Not required"
        }
      }
    ],
    researchers: [
      {
        id: 2115,
        name: "Dr. Laura B. Leatherwood",
        title: "President of Blue Ridge Community College",
        department: "Office of the President",
        email: "l_leatherwood@blueridge.edu",
        phone: "+1 828-694-1705",
        interests: ["Community College Leadership", "Workforce Development", "Apprenticeship Models", "Advanced Manufacturing Education"],
        website: "https://www.blueridge.edu/about-blue-ridge/board-of-trustees-and-leadership/",
        subject: "social-sciences",
        summary: "Dr. Laura B. Leatherwood has served as President of Blue Ridge Community College since 2017, earning national acclaim for expanding Apprenticeship Blue Ridge and securing major industrial training partnerships."
      },
      {
        id: 2116,
        name: "Sharon Suprun",
        title: "Dean of Applied Technologies",
        department: "Division of Applied Technologies",
        email: "s_suprun@blueridge.edu",
        phone: "+1 828-694-1748",
        interests: ["Mechatronics Pedagogy", "Computer Integrated Machining", "Robotics Automation", "STEM Career Pathways"],
        website: "https://www.blueridge.edu/academics/applied-technologies/",
        subject: "engineering",
        summary: "Sharon Suprun directs the engineering technology and advanced manufacturing curricula at Blue Ridge, steering partnerships with regional aerospace and automotive suppliers."
      },
      {
        id: 2117,
        name: "Dr. Chad Bledsoe",
        title: "Executive Vice President",
        department: "Executive Administration",
        email: "c_bledsoe@blueridge.edu",
        phone: "+1 828-694-1706",
        interests: ["Higher Education Finance", "Institutional Effectiveness", "University Transfer Articulation", "Curricular Accreditation"],
        website: "https://www.blueridge.edu/about-blue-ridge/leadership/",
        subject: "social-sciences",
        summary: "Dr. Chad Bledsoe manages institutional operations, accreditation compliance, and state university transfer articulation agreements across North Carolina."
      }
    ]
  },

  // 18. USA: Brigham Young University–Idaho (BYU-Idaho)
  {
    institution: "Brigham Young University–Idaho",
    slug: "brigham-young-university-idaho-byui",
    countryId: "usa",
    countryLabel: "United States",
    sourceRow: 609,
    location: "Rexburg, Idaho, United States",
    website: "https://www.byui.edu",
    shortName: "BYU-Idaho",
    badge: "Low-Cost Undergraduate STEM & Church Education",
    overview: "Brigham Young University–Idaho (BYU-Idaho), established in 1888 in Rexburg, Idaho, is a major private undergraduate university owned and operated by The Church of Jesus Christ of Latter-day Saints (LDS). Serving over 40,000 campus and online students, BYU-Idaho is renowned for its high-quality, student-centered teaching model, exceptionally affordable subsidized tuition, and premier programs in computer science, software engineering, business, and agriculture.",
    lead: "Access world-class undergraduate software engineering, agricultural sciences, and subsidized tuition at BYU-Idaho.",
    description: "BYU-Idaho undergraduate software engineering, agriculture degrees, low-cost church subsidized tuition, and student merit awards.",
    quickFacts: {
      type: "Private Undergraduate University (LDS Church Educational System)",
      campus: "Rexburg Campus (430 acres in the Upper Snake River Valley, Idaho)",
      accreditation: "Northwest Commission on Colleges and Universities (NWCCU) / ABET (Engineering & CS)",
      admissions: "CES Admissions Application (ecclesiastical endorsement required for all applicants)",
      language: "English (TOEFL iBT 66, IELTS 6.0, PTE 46, or ACT/SAT equivalent)",
      aid: "LDS Church Tuition Subsidy (approx. 50% discount for church members) & BYU-Idaho Merit Awards"
    },
    strengths: [
      "One of the most affordable accredited universities in the United States ($2,400–$4,800/semester)",
      "Dedicated undergraduate focus with 100% of classes taught directly by faculty without graduate teaching assistants",
      "Robust software engineering and computing program with graduates recruited heavily by Silicon Valley and Utah's Silicon Slopes",
      "Extensive experiential learning through student-run enterprises, agricultural research farms, and tech incubators"
    ],
    programs: [
      { title: "Bachelor of Science in Software Engineering", level: "Undergraduate Degree", desc: "ABET-accredited four-year degree focusing on full-stack software development, distributed systems architecture, cloud computing, and DevOps engineering." },
      { title: "Bachelor of Science in Computer Science", level: "Undergraduate Degree", desc: "Rigorous curriculum encompassing algorithms, machine learning, computer graphics, database structures, and formal language theory." },
      { title: "Bachelor of Science in Agronomy, Crop and Soil Science", level: "Undergraduate Degree", desc: "Hands-on agricultural science training conducted on BYU-Idaho's 250-acre research farm covering precision irrigation, soil biochemistry, and crop pathology." }
    ],
    opportunities: [
      {
        id: 4897,
        title: "BYU-Idaho Academic Merit Tuition Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Merit-based tuition scholarship awarded to incoming freshmen and continuing students maintaining high academic grade averages.",
        funding: "Full or half tuition waiver for the academic semester (saving up to $4,800 per year)",
        fee: "$35 CES application fee",
        tuition: "$2,400/semester (LDS member rate) or $4,800/semester (Non-member rate)",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Priority deadline)",
        source: "https://www.byui.edu/financial-aid/scholarships/academic-merit",
        requirements: {
          gpa: "High school GPA of 3.75+ or university cumulative GPA of 3.80+",
          ielts: "IELTS 6.0 or TOEFL iBT 66",
          gre: "Not required",
          papers: "High school transcript and standard ecclesiastical endorsement",
          references: "Bishop/ecclesiastical leader endorsement"
        }
      },
      {
        id: 4898,
        title: "Bachelor of Science in Software Engineering ABET Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Four-year comprehensive degree with integrated internship semester placing students at tech firms like Amazon, Microsoft, and Qualtrics.",
        funding: "Eligible for departmental teaching assistantships and internships ($14–$18/hour)",
        fee: "$35",
        tuition: "$2,400 per semester (subsidized church rate)",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027 (Fall intake)",
        source: "https://www.byui.edu/computer-science-and-electrical-engineering/",
        requirements: {
          gpa: "High school completion with strong background in algebra and trigonometry",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "CES admissions essays and commitment to the BYU-Idaho Honor Code",
          references: "Two endorsements"
        }
      },
      {
        id: 4899,
        title: "Agricultural Science Research Farm Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "environment"],
        desc: "Paid field research internship at the BYU-Idaho Agricultural Research Centre evaluating potato disease resistance and precision drone irrigation.",
        funding: "$15.50/hour seasonal wage plus on-site field laboratory credits",
        fee: "$0",
        tuition: "Standard semester credit tuition",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.byui.edu/applied-plant-science/",
        requirements: {
          gpa: "Enrolled student majoring in Agronomy, Plant Science, or Horticulture (GPA 2.7+)",
          ielts: "English 6.0",
          gre: "Not required",
          papers: "Resume and agricultural experience statement",
          references: "Faculty farm manager approval"
        }
      },
      {
        id: 4900,
        title: "Heber J. Grant Need-Based Tuition Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "University need-based grant providing financial assistance for students with demonstrated socio-economic challenges.",
        funding: "Up to $1,800 per semester applied directly to tuition and campus bookstore accounts",
        fee: "$0",
        tuition: "Applied to university charges",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.byui.edu/financial-aid/grants",
        requirements: {
          gpa: "Satisfactory academic progress (cumulative GPA 2.0+)",
          ielts: "English 6.0",
          gre: "Not required",
          papers: "FAFSA or international financial hardship declaration",
          references: "Financial aid advisor review"
        }
      },
      {
        id: 4901,
        title: "Bachelor of Science in Computer Science Admission",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science"],
        desc: "Undergraduate degree emphasizing theoretical foundations of computing, algorithm design, compiler engineering, and machine intelligence.",
        funding: "On-campus computing lab assistantships available",
        fee: "$35",
        tuition: "$2,400/semester (LDS rate) / $4,800/semester (Standard)",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        source: "https://www.byui.edu/degrees/computer-science-bs",
        requirements: {
          gpa: "High school GPA of 3.0 or higher",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "CES application and ecclesiastical endorsement",
          references: "Ecclesiastical leader"
        }
      },
      {
        id: 4902,
        title: "BYU-Idaho Student Research Conference (SRC) Project Award",
        type: "Grant",
        subject: "engineering",
        subjects: ["engineering", "biology", "physics"],
        desc: "Undergraduate research prize awarded to the best student presentations and posters at the biannual campus-wide Research Conference.",
        funding: "$1,000 cash award and university publication in the BYU-Idaho Undergraduate Research Journal",
        fee: "$0",
        tuition: "Direct cash prize",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.byui.edu/student-research-conference",
        requirements: {
          gpa: "Undergraduate student currently enrolled at BYU-Idaho",
          ielts: "English fluency",
          gre: "Not required",
          papers: "300-word research abstract and faculty mentor endorsement",
          references: "Faculty research advisor signature"
        }
      },
      {
        id: 4903,
        title: "Bachelor of Science in Business Management Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year business degree featuring practical student-led consulting projects (IBC - Integrated Business Core) and venture creation.",
        funding: "IBC venture revenue sharing opportunities",
        fee: "$35",
        tuition: "$2,400 per semester",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        source: "https://www.byui.edu/business-management/",
        requirements: {
          gpa: "High school completion with minimum 2.50 GPA",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Application personal essay and ecclesiastical interview",
          references: "Endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2118,
        name: "Alvin F. Meredith III",
        title: "President of Brigham Young University–Idaho",
        department: "Office of the President",
        email: "president@byui.edu",
        phone: "+1 208-496-1111",
        interests: ["Higher Education Leadership", "Student-Centered Learning", "Global Education Access", "Institutional Governance"],
        website: "https://www.byui.edu/president/about",
        subject: "social-sciences",
        summary: "Alvin F. Meredith III is the 18th President of BYU-Idaho, leading initiatives to expand affordable undergraduate degree access, innovative teaching methods, and student discipleship."
      },
      {
        id: 2119,
        name: "Dr. Scott Burton",
        title: "Department Chair & Professor of Computer Science and Electrical Engineering",
        department: "Department of Computer Science & Electrical Engineering",
        email: "burtons@byui.edu",
        phone: "+1 208-496-7580",
        interests: ["Software Engineering Education", "Web Technologies", "Distributed Database Systems", "Curriculum Development"],
        website: "https://www.byui.edu/csee/faculty/scott-burton",
        subject: "computer-science",
        summary: "Dr. Scott Burton leads the CSEE department at BYU-Idaho, authoring open educational resources for software engineering and coordinating industry advisory boards."
      },
      {
        id: 2120,
        name: "Dr. Blake Willis",
        title: "Professor of Animal Science and Genetics",
        department: "Department of Animal and Food Science",
        email: "willisb@byui.edu",
        phone: "+1 208-496-4520",
        interests: ["Quantitative Livestock Genetics", "Ruminant Nutrition", "Beef Cattle Production", "Precision Agriculture"],
        website: "https://www.byui.edu/animal-science/faculty/blake-willis",
        subject: "biology",
        summary: "Dr. Blake Willis conducts research on quantitative livestock genetics, feed efficiency, and herd management at the BYU-Idaho livestock and agronomy facilities."
      }
    ]
  },

  // 19. UK: Moorlands College
  {
    institution: "Moorlands College",
    slug: "moorlands-college-christchurch",
    countryId: "uk",
    countryLabel: "United Kingdom",
    sourceRow: 1272,
    location: "Christchurch, Dorset, United Kingdom",
    website: "https://www.moorlands.ac.uk",
    shortName: "Moorlands College",
    badge: "Theology, Christian Leadership & Community Care",
    overview: "Moorlands College, founded in 1948 in Christchurch, Dorset (with regional centres in Devon and the Midlands), is an accredited UK higher education institution celebrated for its applied theology, Christian leadership, community youth work, and intercultural mission degrees, validated by the University of Gloucestershire and recognized by the UK Quality Assurance Agency (QAA).",
    lead: "Study University of Gloucestershire-validated applied theology, youth work, and Christian leadership at Moorlands College in Dorset.",
    description: "Moorlands College applied theology degrees, University of Gloucestershire validated master's, youth work bursaries, and UK theological grants.",
    quickFacts: {
      type: "Accredited Theological Higher Education College",
      campus: "Christchurch Campus (Dorset) & Regional Centres in Devon and the Midlands",
      accreditation: "Validated by University of Gloucestershire / Reviewed by QAA / Registered with OfS",
      admissions: "Direct online application & interview process (UCAS code: M85)",
      language: "English (IELTS Academic 6.0 for BA, 6.5 for MA with minimum 6.0 in writing)",
      aid: "Moorlands College Bursary Fund & UK Student Finance (Tuition & Maintenance Loans)"
    },
    strengths: [
      "All undergraduate and postgraduate degrees fully validated by the University of Gloucestershire",
      "Over 75 years of specialized training in applied theology, pastoral counseling, and youth mission",
      "Unique placement-based study tracks combining classroom theology with weekly church or NGO field practice",
      "High student satisfaction ratings in the UK National Student Survey (NSS)"
    ],
    programs: [
      { title: "BA (Hons) in Applied Theology", level: "Undergraduate Honours Degree", desc: "Three-year degree exploring biblical hermeneutics, Christian doctrine, church history, and pastoral ministry with extensive fieldwork placements." },
      { title: "MA in Applied Theology (Christian Leadership / Chaplaincy)", level: "Postgraduate Master's", desc: "Two-year modular master's designed for practitioners, focusing on organizational leadership, contemporary culture, and institutional chaplaincy." },
      { title: "BA (Hons) in Applied Theology with Youth and Community Work", level: "Undergraduate Honours Degree", desc: "Professional degree combining theological foundation with JNC-recognized youth work competencies and community development." }
    ],
    opportunities: [
      {
        id: 4904,
        title: "Moorlands College Entrance Bursary for Applied Theology",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Means-tested bursary awarded to incoming undergraduate students to alleviate tuition or on-campus accommodation costs in Dorset.",
        funding: "Up to £1,500 per academic year applied against accommodation or fees",
        fee: "£0 direct application fee",
        tuition: "£9,250 per year (UK home students) / £12,500 per year (International)",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.moorlands.ac.uk/fees-and-funding/",
        requirements: {
          gpa: "Passionate Christian commitment and minimum 80 UCAS tariff points (or equivalent)",
          ielts: "IELTS 6.0 overall (minimum 6.0 in writing)",
          gre: "Not required",
          papers: "Personal statement and Christian testimony explaining vocational ministry intentions",
          references: "Two references (including one from a church minister or community leader)"
        }
      },
      {
        id: 4905,
        title: "BA (Hons) in Applied Theology (University of Gloucestershire Validated)",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year honours degree qualifying graduates for church leadership, theological education, pastoral care, and non-profit administration.",
        funding: "Eligible for full UK Student Finance England tuition and maintenance loans",
        fee: "£0",
        tuition: "£9,250/year (UK home)",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.moorlands.ac.uk/undergraduate/ba-applied-theology/",
        requirements: {
          gpa: "Minimum 80 UCAS points (equivalent to CDD at A-level or BTEC National Diploma)",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Application personal statement and admissions interview",
          references: "Two character and church references"
        }
      },
      {
        id: 4906,
        title: "MA in Applied Theology (Christian Leadership Track) Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Modular postgraduate program featuring intensive teaching weeks in Christchurch combined with personal research into organizational leadership.",
        funding: "Eligible for UK Government Postgraduate Master's Loan (up to £12,471)",
        fee: "£0",
        tuition: "£7,800 total program tuition (modular across two years)",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.moorlands.ac.uk/postgraduate/ma-applied-theology/",
        requirements: {
          gpa: "Honours degree (2:1 or 2:2) in theology, religious studies, humanities, or related discipline",
          ielts: "IELTS 6.5 overall (minimum 6.0 in all bands)",
          gre: "Not required",
          papers: "1,500-word theological writing sample or previous dissertation abstract",
          references: "Two academic or professional references"
        }
      },
      {
        id: 4907,
        title: "Church and Community Placement Practicum Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Travel and placement support grant for students conducting compulsory weekly youth work or church ministry in rural Dorset and Hampshire.",
        funding: "£500 per academic year travel subsidy provided by the College Placement Trust",
        fee: "$0",
        tuition: "Integrated into degree program",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.moorlands.ac.uk/placements/",
        requirements: {
          gpa: "Enrolled in full-time campus or placement-based BA honours program",
          ielts: "English 6.0",
          gre: "Not required",
          papers: "Signed placement agreement with an approved church or community youth trust",
          references: "Placement supervisor confirmation"
        }
      },
      {
        id: 4908,
        title: "BA (Hons) Applied Theology with Youth & Community Work Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Professional training combining biblical studies with community youth development, adolescent mental health, and social justice intervention.",
        funding: "Student Finance England eligible",
        fee: "£0",
        tuition: "£9,250 per year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.moorlands.ac.uk/undergraduate/ba-youth-and-community-work/",
        requirements: {
          gpa: "80 UCAS tariff points and proven experience working with young people",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Enhanced DBS (Disclosure and Barring Service) check and personal essay",
          references: "Youth leader reference"
        }
      },
      {
        id: 4909,
        title: "Moorlands Hardship & Emergency Financial Fund",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Emergency relief grant for enrolled students experiencing unexpected personal financial distress or sudden living hardship.",
        funding: "Discretionary grant of £250 to £1,000 depending on emergency assessment",
        fee: "£0",
        tuition: "Direct non-repayable grant",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027 (Rolling assessment)",
        source: "https://www.moorlands.ac.uk/student-support/",
        requirements: {
          gpa: "Current student in good academic standing at Moorlands College",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Detailed statement of financial emergency with supporting documentation",
          references: "Student Services tutor review"
        }
      },
      {
        id: 4910,
        title: "Foundation Year in Applied Theology Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "One-year preparatory foundation course providing academic writing skills, introductory biblical studies, and study skills for degree entry.",
        funding: "Eligible for UK undergraduate student finance",
        fee: "£0",
        tuition: "£6,500 for foundation year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.moorlands.ac.uk/undergraduate/foundation-year/",
        requirements: {
          gpa: "Demonstrated interest and potential; lower formal tariff thresholds considered through interview",
          ielts: "IELTS 5.5",
          gre: "Not required",
          papers: "Personal statement and admissions interview",
          references: "One referee"
        }
      }
    ],
    researchers: [
      {
        id: 2121,
        name: "Rev. Dr. David Hilborn",
        title: "Principal & Professor of Theology",
        department: "Senior Leadership Team & Faculty of Theology",
        email: "d.hilborn@moorlands.ac.uk",
        phone: "+44 1425 674500",
        interests: ["Systematic Theology", "Evangelical History", "Ecumenism", "Theological Ethics"],
        website: "https://www.moorlands.ac.uk/staff/david-hilborn/",
        subject: "social-sciences",
        summary: "Rev. Dr. David Hilborn is Principal of Moorlands College, an internationally published systematic theologian and former head of theology for the Evangelical Alliance UK."
      },
      {
        id: 2122,
        name: "Dr. Sharon Jones",
        title: "Vice Principal (Academic) & Senior Lecturer",
        department: "Academic Leadership & Biblical Studies",
        email: "s.jones@moorlands.ac.uk",
        phone: "+44 1425 674501",
        interests: ["Old Testament Studies", "Biblical Hebrew", "Hermeneutics", "Theology of Justice"],
        website: "https://www.moorlands.ac.uk/staff/sharon-jones/",
        subject: "social-sciences",
        summary: "Dr. Sharon Jones oversees academic standards, university validation with the University of Gloucestershire, and biblical language curricula at Moorlands."
      },
      {
        id: 2123,
        name: "Rev. Dr. Ian Coffey",
        title: "Director of Leadership Training & Author",
        department: "Department of Practical and Pastoral Theology",
        email: "i.coffey@moorlands.ac.uk",
        phone: "+44 1425 674502",
        interests: ["Pastoral Leadership", "Church Planting", "Cross-Cultural Mission", "Spiritual Formation"],
        website: "https://www.moorlands.ac.uk/staff/ian-coffey/",
        subject: "social-sciences",
        summary: "Rev. Dr. Ian Coffey directs postgraduate Christian leadership training, authoring multiple books on pastoral mentoring and contemporary ministry dynamics."
      }
    ]
  },

  // 20. UK: University of the West of Scotland (London Campus)
  {
    institution: "University of the West of Scotland (London Campus)",
    slug: "university-of-the-west-of-scotland-london-campus",
    countryId: "uk",
    countryLabel: "United Kingdom",
    sourceRow: 1265,
    location: "London Docklands, London, United Kingdom",
    website: "https://www.uwslondon.ac.uk",
    shortName: "UWS London",
    badge: "Business, Healthcare & Capital Innovation",
    overview: "University of the West of Scotland - London Campus, situated in the historic Export Building at Republic in the London Docklands, is a state-of-the-art urban campus delivering career-focused postgraduate and undergraduate degrees in business, international healthcare management, project management, and information technology in the UK's financial capital.",
    lead: "Study career-accelerating MBA, project management, and global health master's degrees at UWS London in the Docklands financial district.",
    description: "UWS London Campus MBA master's degrees, healthcare management, London career internships, and international tuition fee scholarships.",
    quickFacts: {
      type: "Public University Branch Campus (University of the West of Scotland)",
      campus: "The Export Building, Republic, 1 Clove Crescent, London Docklands",
      accreditation: "Privy Council / Quality Assurance Agency for Higher Education (QAA) / CMI",
      admissions: "UWS London Direct Portal & UCAS (intakes in Jan, May, and Sept)",
      language: "English (IELTS Academic 6.0 with no sub-score below 5.5 for UG; 6.5 for PG)",
      aid: "UWS International Excellence Scholarships (£2,000–£3,500) & UK Postgraduate Loans"
    },
    strengths: [
      "Modern innovative campus located inside the tech and creative hub of Republic in London Docklands",
      "Flexible three intakes per year (September, January, and May) facilitating rapid career progression",
      "Degrees accredited by professional bodies including the Chartered Management Institute (CMI)",
      "Direct connections with City of London corporate headquarters, financial institutions, and the NHS"
    ],
    programs: [
      { title: "Master of Business Administration (MBA with CMI Accreditation)", level: "Master of Business Administration", desc: "One-year intensive general management degree focusing on global strategic management, financial leadership, digital marketing, and enterprise agility." },
      { title: "MSc in Project Management", level: "Postgraduate Master's", desc: "Practitioner-focused master's aligned with APM and PMI standards covering agile methodologies, risk governance, and complex infrastructure logistics." },
      { title: "MSc in Health and Social Care Management", level: "Postgraduate Master's", desc: "Specialized healthcare leadership curriculum preparing managers for hospital trusts, public health directorates, and private clinical networks." }
    ],
    opportunities: [
      {
        id: 4911,
        title: "UWS London International Student Merit Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Automatic tuition fee reduction awarded to self-funding international students holding strong undergraduate degrees admitted to UWS London.",
        funding: "£2,500 direct tuition fee reduction credited against the total master's program fee",
        fee: "£0 direct application fee",
        tuition: "£14,500 to £16,000 standard international postgraduate tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (September intake)",
        source: "https://www.uwslondon.ac.uk/fees-funding/scholarships/",
        requirements: {
          gpa: "Minimum UK 2:1 equivalent in recognized international undergraduate degree",
          ielts: "IELTS 6.5 overall with no individual component below 5.5",
          gre: "Not required",
          papers: "Degree certificate, complete academic transcript, and personal statement",
          references: "One academic and one professional reference letter"
        }
      },
      {
        id: 4912,
        title: "Master of Business Administration (MBA) Admission & CMI Diploma",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Twelve-month master's degree culminating in an MBA from UWS and a Level 7 Strategic Management Diploma from the Chartered Management Institute.",
        funding: "Eligible for UK Postgraduate Master's Loan (up to £12,471 for eligible UK residents)",
        fee: "£0",
        tuition: "£8,500 (Home) / £15,500 (International)",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.uwslondon.ac.uk/courses/mba/",
        requirements: {
          gpa: "Bachelor's honours degree (minimum 2:2) plus at least 1–2 years of professional supervisory experience",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Updated CV and personal statement outlining career trajectory",
          references: "Two professional references"
        }
      },
      {
        id: 4913,
        title: "MSc in Project Management Admission & PMI Practicum",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Industry-focused master's equipping graduates with Scrum, PRINCE2, and Agile frameworks for major infrastructure and technology projects.",
        funding: "Early payment tuition discount of £1,000",
        fee: "£0",
        tuition: "£15,000 total tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.uwslondon.ac.uk/courses/msc-project-management/",
        requirements: {
          gpa: "Undergraduate degree in business, engineering, IT, or social sciences",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Letter of intent describing project management ambitions in London",
          references: "Academic reference letter"
        }
      },
      {
        id: 4914,
        title: "London Financial District Corporate Placement Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-to-six-month placement organized through UWS London Careers Network with multinational firms in Canary Wharf and the City.",
        funding: "London Living Wage (£13.15/hour) paid directly by corporate employer",
        fee: "£0",
        tuition: "Integrated into degree career pathway",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.uwslondon.ac.uk/student-life/careers/",
        requirements: {
          gpa: "Successful completion of first two trimesters of MSc/MBA study",
          ielts: "English 6.5",
          gre: "Not required",
          papers: "UK standard CV and mock interview assessment",
          references: "Career advisor recommendation"
        }
      },
      {
        id: 4915,
        title: "MSc in Health and Social Care Management Admission",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Postgraduate master's exploring healthcare economics, epidemiology, NHS organizational policy, and patient care ethics.",
        funding: "Eligible for NHS employer sponsorship",
        fee: "£0",
        tuition: "£14,500 total tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.uwslondon.ac.uk/courses/msc-health-social-care-management/",
        requirements: {
          gpa: "Bachelor's degree in healthcare, nursing, social work, or public administration",
          ielts: "IELTS 6.5 (minimum 6.0 in each band)",
          gre: "Not required",
          papers: "Personal statement detailing healthcare management challenges",
          references: "Professional supervisor reference"
        }
      },
      {
        id: 4916,
        title: "UWS London Alumni Career Advancement Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Tuition discount for alumni of UWS or affiliated global partner colleges progressing to a second postgraduate qualification.",
        funding: "20% tuition fee discount across the entire course",
        fee: "£0",
        tuition: "Direct fee reduction",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.uwslondon.ac.uk/alumni/",
        requirements: {
          gpa: "Graduated with an undergraduate or postgraduate qualification from UWS",
          ielts: "Proof of previous UWS study satisfies language requirements",
          gre: "Not required",
          papers: "UWS student ID and degree transcript",
          references: "Not required"
        }
      },
      {
        id: 4917,
        title: "BSc (Hons) in International Business Management Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year honours degree delivered at the London Docklands campus focusing on international trade, digital commerce, and corporate finance.",
        funding: "Eligible for full UK Student Finance loans",
        fee: "£0",
        tuition: "£9,250/year (Home) / £14,000/year (International)",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.uwslondon.ac.uk/courses/bsc-international-business/",
        requirements: {
          gpa: "A-Levels (minimum 96 UCAS points) or recognized international high school diploma",
          ielts: "IELTS 6.0 (no band < 5.5)",
          gre: "Not required",
          papers: "UCAS personal statement",
          references: "One referee"
        }
      }
    ],
    researchers: [
      {
        id: 2124,
        name: "Dr. Lucy Meredith",
        title: "Campus Director & Professor of Academic Operations",
        department: "London Campus Directorate",
        email: "lucy.meredith@uws.ac.uk",
        phone: "+44 20 8108 2888",
        interests: ["Higher Education Leadership", "Transnational Education", "Urban Campus Innovation", "Applied Pedagogy"],
        website: "https://www.uwslondon.ac.uk/about-us/leadership/",
        subject: "social-sciences",
        summary: "Dr. Lucy Meredith leads strategic and academic development at UWS London Campus, fostering innovative industry co-working integrations within the Republic Docklands quarter."
      },
      {
        id: 2125,
        name: "Dr. Karim Menacere",
        title: "Senior Lecturer in International Business & Strategy",
        department: "School of Business and Creative Industries",
        email: "karim.menacere@uws.ac.uk",
        phone: "+44 20 8108 2889",
        interests: ["Strategic Management", "Cross-Border Mergers", "International Trade Logistics", "Emerging Market Economies"],
        website: "https://www.uwslondon.ac.uk/faculty/dr-karim-menacere/",
        subject: "social-sciences",
        summary: "Dr. Karim Menacere instructs MBA core modules in strategic management and international trade, consulting widely on cross-cultural negotiation and business agility."
      },
      {
        id: 2126,
        name: "Dr. Amira Halabi",
        title: "Head of Healthcare Management Programs",
        department: "School of Health and Life Sciences (London)",
        email: "amira.halabi@uws.ac.uk",
        phone: "+44 20 8108 2890",
        interests: ["Healthcare Systems Management", "Public Health Epidemiology", "Clinical Governance", "Health Economics"],
        website: "https://www.uwslondon.ac.uk/faculty/dr-amira-halabi/",
        subject: "biology",
        summary: "Dr. Amira Halabi oversees health and social care postgraduate education at UWS London, conducting research on NHS administrative efficiency and healthcare inequality."
      }
    ]
  }
];
