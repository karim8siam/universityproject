// Batch 43 - Part 2: Universities 11 to 20
// Italy (3), USA (5), UK (2)
// Opps: 5058 to 5127 (70 opps)
// Researchers: 2187 to 2216 (30 researchers)

export const part2Universities = [
  // 11. Italy: Scuola di Psicoterapia Funzionale (SIF Padova)
  {
    institution: "Scuola di Psicoterapia Funzionale (SIF Padova)",
    slug: "scuola-di-psicoterapia-funzionale-sif-padova",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 499,
    location: "Padova, Veneto, Italy",
    website: "https://www.psicologiafunzionale.it",
    shortName: "SIF Padova",
    badge: "Postgraduate Psychotherapy Institute",
    overview: "The Scuola di Psicoterapia Funzionale (Società Italiana di Psicoterapia Funzionale - SIF) sede di Padova is a state-recognized postgraduate clinical specialization institute accredited by the Italian Ministry of University and Research (MUR), delivering specialized 4-year specialization diplomas in body-mind functional psychotherapy, psychodiagnostics, and psychosomatic clinical interventions.",
    lead: "Explore postgraduate clinical psychotherapy specialization diplomas, psychosomatic research grants, and regional healthcare internships at SIF Padova.",
    description: "SIF Padova accredited four-year clinical psychotherapy specialization, psychodiagnostic training, clinical hospital internships, and MUR bursaries.",
    quickFacts: {
      type: "MUR-Accredited Postgraduate Specialization Institute (Scuola di Specializzazione)",
      campus: "Via Vicenza Campus, Padova, Veneto",
      accreditation: "Italian Ministry of University and Research (MUR) / National Order of Psychologists (CNOP)",
      admissions: "Psychology or Medicine university degree plus state exam registration",
      language: "Italian (C1 CEFR)",
      aid: "MUR Specialization Tax Deductions & SIF Clinical Trainee Bursaries"
    },
    strengths: [
      "Official MUR recognition conferring the legal qualification of Psychotherapist in Italy and the European Union",
      "Pioneering Functional Psychotherapy methodology integrating emotional, cognitive, postural, and physiological functioning",
      "Direct clinical placement network within Veneto regional local health authorities (ULSS) and hospital psychiatric units",
      "Supervised clinical practice with video-recorded psychotherapy sessions and individual clinical supervision"
    ],
    programs: [
      { title: "Diploma di Specializzazione quadriennale in Psicoterapia Funzionale", level: "Postgraduate Clinical Specialization (MUR)", desc: "Four-year accredited clinical curriculum comprising 2,000 hours of theoretical instruction, experiential personal analysis, and hospital clinical internships." },
      { title: "Master Clinico in Psicodiagnostica Funzionale e Disturbi Psicosomatici", level: "Master di Alta Formazione", desc: "One-year advanced training in psychophysiological stress measurement, projective testing, and psychosomatic clinical assessment." },
      { title: "Corso di Perfezionamento in Interventi sullo Stress e Benessere Organizzativo", level: "Corso di Perfezionamento", desc: "Applied executive certificate focused on biofeedback, workplace burnout prevention, and organizational health protocols." }
    ],
    opportunities: [
      {
        id: 5058,
        title: "Borsa di Merito Clinico SIF Padova",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Tuition fee waiver awarded to newly enrolled doctors in psychology or medicine demonstrating exceptional clinical research promise.",
        funding: "€2,000 direct tuition reduction across first two years of the specialization school",
        fee: "€50 clinical interview fee",
        tuition: "€3,600 per academic year",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.psicologiafunzionale.it/ammissioni/",
        requirements: {
          gpa: "Master's degree in Psychology (LM-51) or Medicine (LM-41) with minimum 105/110",
          ielts: "Italian C1 proficiency",
          gre: "Not required",
          papers: "Clinical case analysis essay or empirical thesis summary",
          references: "Two academic letters from psychology university faculty"
        }
      },
      {
        id: 5059,
        title: "Diploma di Specializzazione in Psicoterapia Funzionale Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Four-year statutory postgraduate training course qualifying graduates as licensed psychotherapists under Italian law (Legge 56/89).",
        funding: "Tax-deductible educational expenses and subsidized bank loan agreements available",
        fee: "€50 admission fee",
        tuition: "€3,700 per academic year",
        deadline: "2027-10-31",
        deadlineText: "October 31, 2027",
        source: "https://www.psicologiafunzionale.it/scuola-di-psicoterapia/",
        requirements: {
          gpa: "Degree in Psychology or Medicine and passing score on state licensing examination (Esame di Stato)",
          ielts: "Italian C1 proficiency",
          gre: "Not required",
          papers: "Curriculum vitae and personal motivation statement for therapeutic training",
          references: "Clinical admissions interview with the didactic board"
        }
      },
      {
        id: 5060,
        title: "Veneto Regional Hospital Clinical Psychology Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "500-hour annual mandatory clinical placement conducted in public hospital mental health centres (CSM) and neuro-psychiatric clinics across the Veneto region.",
        funding: "Structured academic clinical credits and supervised institutional case review",
        fee: "Covered by school enrollment",
        tuition: "Covered by school enrollment",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.psicologiafunzionale.it/tirocini/",
        requirements: {
          gpa: "Enrolled in SIF Padova specialization curriculum",
          ielts: "Italian C1",
          gre: "Not required",
          papers: "Professional liability insurance and certified medical clearance",
          references: "Designation by SIF internship coordinator"
        }
      },
      {
        id: 5061,
        title: "Master in Psicodiagnostica Funzionale e Misurazione dello Stress",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Advanced 12-month program in psychophysiological telemetry, heart rate variability (HRV) analysis, and projective diagnostic testing.",
        funding: "Installment payment options and regional voucher eligibility",
        fee: "€50 registration fee",
        tuition: "€2,200 complete master tuition",
        deadline: "2027-11-15",
        deadlineText: "November 15, 2027",
        source: "https://www.psicologiafunzionale.it/corsi-e-master/",
        requirements: {
          gpa: "Five-year degree in Psychology or Medicine",
          ielts: "Italian B2/C1",
          gre: "Not required",
          papers: "CV and diagnostic portfolio summary",
          references: "One professional reference"
        }
      },
      {
        id: 5062,
        title: "Premio di Ricerca Psicosomatica Luciano Rispoli",
        type: "Grant",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Annual scientific grant dedicated to founder Luciano Rispoli supporting empirical investigation into neurobiological markers of chronic stress.",
        funding: "€2,500 research grant and publication in the European Journal of Functional Psychology",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-08-30",
        deadlineText: "August 30, 2027",
        source: "https://www.psicologiafunzionale.it/ricerca/",
        requirements: {
          gpa: "Postgraduate trainee or doctoral researcher in psychology/neuroscience",
          ielts: "Italian or English proficiency",
          gre: "Not required",
          papers: "10-page paper on physiological markers (cortisol, autonomic tone) in psychological trauma",
          references: "Endorsement by scientific board member"
        }
      },
      {
        id: 5063,
        title: "Corso di Alta Formazione in Psicoterapia dell'Età Evolutiva",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Specialized post-degree module focusing on functional developmental psychopathology, family systemic therapy, and child play observation.",
        funding: "Continuous Medical Education (ECM) accredited with subsidized tuition",
        fee: "€50 fee",
        tuition: "€1,800 course fee",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.psicologiafunzionale.it/corsi/",
        requirements: {
          gpa: "Degree in Psychology or Child Neuropsychiatry",
          ielts: "Italian B2/C1",
          gre: "Not required",
          papers: "Professional curriculum vitae",
          references: "One referee"
        }
      },
      {
        id: 5064,
        title: "SIF Clinical Research Residency Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "One-year post-specialization clinical research fellowship at the Padova Functional Psychotherapy Centre investigating chronic pain interventions.",
        funding: "€6,000 research stipend and dedicated clinical consultation room",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-10-15",
        deadlineText: "October 15, 2027",
        source: "https://www.psicologiafunzionale.it/ricerca/",
        requirements: {
          gpa: "Completed postgraduate specialization in psychotherapy with honors",
          ielts: "Italian C1 and English B2",
          gre: "Not required",
          papers: "Detailed clinical study protocol examining functional psychotherapy in fibromyalgia patients",
          references: "Two clinical supervisor recommendations"
        }
      }
    ],
    researchers: [
      {
        id: 2187,
        name: "Dott.ssa Paola Bressan",
        title: "Direttrice Didattica Sede di Padova",
        department: "Direzione Didattica e Clinica",
        topics: ["Functional Psychodiagnostics", "Psychosomatic Symptom Integration", "Clinical Supervision"],
        summary: "Dott.ssa Paola Bressan coordinates clinical training at SIF Padova, researching mind-body functional diagnostics, somatic stress indicators, and effective supervisory models for psychotherapists in training.",
        website: "https://www.psicologiafunzionale.it/docenti/",
        source: "https://www.psicologiafunzionale.it/docenti/",
        recruiting: "Not verified",
        subject: "biology"
      },
      {
        id: 2188,
        name: "Prof. Luciano Rispoli",
        title: "Fondatore e Presidente Scientifico Emerito",
        department: "Comitato Scientifico Internazionale",
        topics: ["Neo-Functional Psychology Theory", "Autonomic Nervous System Regulation", "Stress Ecology"],
        summary: "Prof. Luciano Rispoli is the pioneer of Functional Psychotherapy in Europe, having formulated systemic models of the Functional Self that integrate cognitive, emotional, postural, and neurovegetative processes.",
        website: "https://www.psicologiafunzionale.it/docenti/",
        source: "https://www.psicologiafunzionale.it/docenti/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2189,
        name: "Dott. Marco Chiarello",
        title: "Docente di Psicofisiologia Clinica e Biofeedback",
        department: "Laboratorio di Psicofisiologia Applicata",
        topics: ["Heart Rate Variability Telemetry", "Biofeedback Interventions", "Trauma Neurobiology"],
        summary: "Dott. Marco Chiarello investigates physiological stress telemetry, autonomic nervous system modulation, and biofeedback-assisted therapy protocols for generalized anxiety and post-traumatic conditions.",
        website: "https://www.psicologiafunzionale.it/docenti/",
        source: "https://www.psicologiafunzionale.it/docenti/",
        recruiting: "Not verified",
        subject: "biology"
      }
    ]
  },

  // 12. Italy: Università degli Studi Niccolò Cusano (Polo di Bari)
  {
    institution: "Università degli Studi Niccolò Cusano (Polo di Bari)",
    slug: "unicusano-learning-center-bari",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 509,
    location: "Bari, Apulia, Italy",
    website: "https://www.centrounicusano.it",
    shortName: "Unicusano Bari",
    badge: "Digital & Blended Telematic University",
    overview: "Università degli Studi Niccolò Cusano (Polo di Bari) is a major regional learning centre of the MUR-accredited Italian telematics university Unicusano, providing undergraduate, single-cycle master, and postgraduate degree programs in engineering, law, economics, psychology, and educational sciences with multimedia e-learning and on-site exam facilities in Bari.",
    lead: "Explore bachelor and master degrees in engineering, law, economics, psychology, and Apulian regional study bursaries at Unicusano Bari.",
    description: "Unicusano Bari accredited online and blended degrees in mechanical engineering, civil engineering, law, business economics, and MUR financial aid.",
    quickFacts: {
      type: "State-Recognized Telematic University Campus (Università Telematica Statale Riconosciuta MUR)",
      campus: "Via Domenico Nicolai Campus, Downtown Bari, Apulia",
      accreditation: "Italian Ministry of University and Research (MUR) / ANVUR",
      admissions: "Open rolling admissions with mandatory non-selective verification test",
      language: "Italian (B2/C1) with select English curriculum modules",
      aid: "Unicusano 'Borse di Studio Reti Formative' & Regional ADISU Puglia Partnerships"
    },
    strengths: [
      "Full MUR legal equivalence conferring identical qualifications to traditional Italian public universities",
      "Flexible blended instructional methodology combining 24/7 digital lectures with local tutor-assisted seminars in Bari",
      "Comprehensive faculties encompassing Civil, Mechanical, Industrial, and Biomedical Engineering",
      "Integrated regional career service facilitating internship placements with Apulian industrial and service companies"
    ],
    programs: [
      { title: "Laurea Magistrale a ciclo unico in Giurisprudenza (LMG-01)", level: "Single-Cycle Master of Law", desc: "Five-year statutory legal curriculum preparing graduates for the judiciary, bar examination (Avvocato), and public administration." },
      { title: "Corso di Laurea in Ingegneria Meccanica (L-09)", level: "Corso di Laurea Triennale", desc: "Three-year engineering program covering thermofluid dynamics, machine design, manufacturing automation, and industrial robotics." },
      { title: "Corso di Laurea in Economia Aziendale e Management (L-18)", level: "Corso di Laurea Triennale", desc: "Business economics degree focused on financial controlling, corporate strategy, digital marketing, and tax governance." }
    ],
    opportunities: [
      {
        id: 5065,
        title: "Borsa di Studio Unicusano Polo di Bari",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Tuition discount scholarship awarded to incoming undergraduate and graduate students residing in Apulia enrolling at the Bari learning centre.",
        funding: "€1,200 annual tuition fee reduction throughout the standard degree program",
        fee: "€0 admission test fee",
        tuition: "€3,000 to €3,600 per academic year",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.centrounicusano.it/bari/agevolazioni/",
        requirements: {
          gpa: "High school diploma (Diploma di Maturità) with minimum score of 75/100",
          ielts: "Italian B2 proficiency",
          gre: "Not required",
          papers: "Enrollment documentation and proof of residence in Apulia",
          references: "Not required"
        }
      },
      {
        id: 5066,
        title: "Laurea Triennale in Ingegneria Meccanica Enrolment",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "3-year MUR-accredited Bachelor of Mechanical Engineering delivering online coursework, virtual laboratory simulations, and exam sessions in Bari.",
        funding: "Installment payment plans and corporate employer agreement discounts",
        fee: "€0",
        tuition: "€3,300 per academic year",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.centrounicusano.it/facolta-ingegneria/",
        requirements: {
          gpa: "Five-year Italian secondary school diploma or equivalent international credential",
          ielts: "Italian B2 proficiency",
          gre: "Not required",
          papers: "Verification test of mathematics and physics fundamentals",
          references: "One academic reference"
        }
      },
      {
        id: 5067,
        title: "Apulian Industrial Manufacturing & Automation Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "150-hour curricular engineering internship conducted with manufacturing, aerospace, and energy enterprises in the Bari industrial zone.",
        funding: "Academic credits and regional travel expense compensation",
        fee: "Covered by tuition",
        tuition: "Covered by tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.centrounicusano.it/tirocini-e-stage/",
        requirements: {
          gpa: "Completion of at least 90 ECTS credits in an engineering degree",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Curricular stage training agreement and enterprise project plan",
          references: "University academic tutor approval"
        }
      },
      {
        id: 5068,
        title: "Laurea Triennale in Scienze dell'Educazione e Formazione (L-19)",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Three-year degree preparing professional educators for community services, early childhood development, and lifelong corporate vocational training.",
        funding: "Discounted rates for public sector and educational workers",
        fee: "€0",
        tuition: "€2,800 per academic year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.centrounicusano.it/facolta-scienze-educazione/",
        requirements: {
          gpa: "Secondary school diploma",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Motivational statement",
          references: "Not required"
        }
      },
      {
        id: 5069,
        title: "Laurea Magistrale in Ingegneria Civile (LM-23) Enrolment",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Two-year master's degree focusing on seismic structural engineering, hydraulic systems, geotechnical stability, and infrastructure rehabilitation.",
        funding: "Tax-deductible fees and flexible continuous registration",
        fee: "€0",
        tuition: "€3,600 per year",
        deadline: "2027-10-31",
        deadlineText: "October 31, 2027",
        source: "https://www.centrounicusano.it/facolta-ingegneria/",
        requirements: {
          gpa: "Bachelor's degree in Civil or Environmental Engineering with at least 180 ECTS",
          ielts: "Italian B2/C1",
          gre: "Not required",
          papers: "Undergraduate transcript evaluation",
          references: "Curricular verification certificate"
        }
      },
      {
        id: 5070,
        title: "Premio di Merito Unicusano per Donne nelle STEM",
        type: "Grant",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Regional grant program designed to incentivize female enrollment in computer science, mechanical engineering, and civil engineering degrees.",
        funding: "€1,500 direct grant awarded to top female students in engineering",
        fee: "€0",
        tuition: "€3,300 per year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.centrounicusano.it/borse-stem/",
        requirements: {
          gpa: "Maturità grade >= 80/100 or undergraduate GPA >= 26/30",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Essay on engineering innovation in southern Italy",
          references: "One reference"
        }
      },
      {
        id: 5071,
        title: "Master Universitario di I Livello in Project Management",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "One-year executive master (60 CFU) delivering PMI-aligned methodology in agile project management, risk analysis, and corporate procurement.",
        funding: "Eligible for INPS executive scholarships and regional funding vouchers",
        fee: "€0",
        tuition: "€2,100 complete master tuition",
        deadline: "2027-11-30",
        deadlineText: "November 30, 2027",
        source: "https://www.centrounicusano.it/master-universitari/",
        requirements: {
          gpa: "At least a three-year undergraduate degree in any academic discipline",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Curriculum vitae and professional summary",
          references: "Managerial letter of endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2190,
        name: "Prof. Ing. Gaetano Ciaravino",
        title: "Docente di Idraulica e Costruzioni Idrauliche",
        department: "Facoltà di Ingegneria",
        topics: ["Hydraulic Network Optimization", "Urban Drainage Systems", "Water Resource Modeling"],
        summary: "Prof. Ing. Gaetano Ciaravino lectures and conducts engineering research in fluid mechanics, urban storm drainage modeling, and the optimization of pressurized regional water distribution networks.",
        website: "https://www.unicusano.it/docenti/",
        source: "https://www.unicusano.it/docenti/",
        recruiting: "Not verified",
        subject: "engineering"
      },
      {
        id: 2191,
        name: "Prof.ssa Paola Paniccia",
        title: "Docente di Economia e Gestione delle Imprese",
        department: "Facoltà di Economia",
        topics: ["Sustainable Enterprise Governance", "Regional SME Networks", "Circular Business Models"],
        summary: "Prof.ssa Paola Paniccia researches strategic business management, evaluating competitive dynamics among small-and-medium enterprises in southern Italy and sustainable corporate innovation systems.",
        website: "https://www.unicusano.it/docenti/",
        source: "https://www.unicusano.it/docenti/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2192,
        name: "Prof. Avv. Mario Caligiuri",
        title: "Ordinario di Pedagogia e Intelligence Studies",
        department: "Facoltà di Giurisprudenza e Scienze della Formazione",
        topics: ["Intelligence and Security Studies", "Information Literacy", "Educational Geopolitics"],
        summary: "Prof. Avv. Mario Caligiuri is an influential scholar pioneering academic intelligence studies in Italy, researching pedagogical frameworks for information discernment, cyber intelligence, and national security policy.",
        website: "https://www.unicusano.it/docenti/",
        source: "https://www.unicusano.it/docenti/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 13. Italy: Università Popolare di Padova
  {
    institution: "Università Popolare di Padova",
    slug: "universita-popolare-di-padova",
    countryId: "italy",
    countryLabel: "Italy",
    sourceRow: 550,
    location: "Padova, Veneto, Italy",
    website: "https://www.unipoppd.org",
    shortName: "UniPop Padova",
    badge: "Lifelong Higher Education & Culture",
    overview: "Università Popolare di Padova, established in 1902 in the intellectual capital of the Veneto, is an esteemed regional open institution for lifelong adult higher education, multidisciplinary university-level certificates, foreign languages, art history, and cultural heritage research.",
    lead: "Explore university certificates in European languages, art history, environmental sciences, and adult learning grants at Università Popolare di Padova.",
    description: "Università Popolare di Padova accredited cultural education certificates, foreign language diplomas, regional heritage seminars, and adult bursaries.",
    quickFacts: {
      type: "Public Moral Corporation / Institution of Lifelong Higher Education",
      campus: "Corso Giuseppe Garibaldi Campus, Historic Center, Padova, Veneto",
      accreditation: "Italian Confederation of Popular Universities (CNUPI) / Recognized by MIUR / Veneto Region",
      admissions: "Open enrollment for adult learners and university students",
      language: "Italian (with multilingual foreign language faculties)",
      aid: "UniPop Lifelong Learning Bursaries & Veneto Regional Senior Education Credits"
    },
    strengths: [
      "Over 120 years of continuous cultural and scientific instruction in historic Padua",
      "Comprehensive curriculum encompassing over 150 annual academic courses, lectures, and laboratory masterclasses",
      "Accredited language school offering CEFR-certified instruction from A1 to C2 levels in 10 world languages",
      "Collaborative cultural excursions exploring Venetian art, architecture, and archaeological excavations"
    ],
    programs: [
      { title: "Certificato Accademico in Storia dell'Arte Veneta e Rinascimentale", level: "Corso Superiore di Cultura", desc: "Two-year multidisciplinary curriculum analyzing Venetian painting from Giotto to Tintoretto, Palladian villas, and archival conservation." },
      { title: "Programma di Lingue e Culture Straniere (CEFR B1-C2)", level: "Certificato di Competenza Linguistica", desc: "Comprehensive foreign language instruction in English, German, French, Spanish, Russian, and Japanese with certified oral examiners." },
      { title: "Corso di Scienze della Terra, Botanica e Climatologia Locale", level: "Corso di Divulgazione Scientifica", desc: "Applied scientific lecture and laboratory course examining the geology of the Euganean Hills, botanical ecosystems, and climate adaptations." }
    ],
    opportunities: [
      {
        id: 5072,
        title: "Borsa di Studio Cultura Aperta UniPop Padova",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Tuition bursary awarded to young scholars, unemployed adults, or seniors enrolling in annual cultural and art history certificate courses.",
        funding: "Full 100% tuition waiver for selected academic certificate tracks",
        fee: "€25 annual institutional membership fee",
        tuition: "€280 to €520 per annual academic course",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.unipoppd.org/borse-di-studio/",
        requirements: {
          gpa: "Secondary school diploma or equivalent adult learning background",
          ielts: "Italian B2 proficiency",
          gre: "Not required",
          papers: "Brief letter of motivation explaining personal or cultural research goals",
          references: "One character reference"
        }
      },
      {
        id: 5073,
        title: "Certificato Superiore di Storia dell'Arte Veneta Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Full-year structured course examining Giotto's Scrovegni Chapel frescoes, Donatello's Paduan bronzes, and Renaissance architectural theory.",
        funding: "Subsidized public civic rates and discounted member packages",
        fee: "€25 membership",
        tuition: "€340 full annual course tuition",
        deadline: "2027-10-15",
        deadlineText: "October 15, 2027",
        source: "https://www.unipoppd.org/corsi/storia-dell-arte/",
        requirements: {
          gpa: "Open enrollment; general passion for art history and regional heritage",
          ielts: "Italian fluency",
          gre: "Not required",
          papers: "Enrollment form",
          references: "Not required"
        }
      },
      {
        id: 5074,
        title: "Padova City Historic Archive & Museum Curatorial Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Curatorial internship supporting temporary art exhibitions, exhibition guide training, and archival cataloguing across Padua civic museums.",
        funding: "Academic certificate of curatorial practice and museum pass access",
        fee: "Included in course enrollment",
        tuition: "Included in course enrollment",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.unipoppd.org/tirocini/",
        requirements: {
          gpa: "Completion of at least one academic art history or museology course at UniPop",
          ielts: "Italian C1",
          gre: "Not required",
          papers: "Curatorial project pitch",
          references: "Art history course instructor approval"
        }
      },
      {
        id: 5075,
        title: "Corso Avanzato di Lingua e Letteratura Inglese (C1/C2)",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Annual advanced seminar preparing students for Cambridge C1 Advanced and C2 Proficiency exams with focus on literary and essayistic translation.",
        funding: "Installment payment options available",
        fee: "€25 membership",
        tuition: "€420 annual course tuition",
        deadline: "2027-10-10",
        deadlineText: "October 10, 2027",
        source: "https://www.unipoppd.org/corsi/lingue/",
        requirements: {
          gpa: "B2 level diagnostic entrance test score",
          ielts: "English B2 certificate or diagnostic assessment",
          gre: "Not required",
          papers: "Placement assessment",
          references: "Not required"
        }
      },
      {
        id: 5076,
        title: "Premio per la Divulgazione Storica e Archeologica Veneta",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Monetary grant supporting independent historical monograph research and public lectures on archaeological findings in the Veneto region.",
        funding: "€1,500 research grant and public lecture sponsorship at Palazzo Bo",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-11-15",
        deadlineText: "November 15, 2027",
        source: "https://www.unipoppd.org/premi-di-studio/",
        requirements: {
          gpa: "Completed historical research thesis or published paper",
          ielts: "Italian C1",
          gre: "Not required",
          papers: "5-page research summary on Paduan civic history or Roman archaeology",
          references: "Two academic or museum curator references"
        }
      },
      {
        id: 5077,
        title: "Corso di Botanica Applicata e Flora dei Colli Euganei",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Field-based scientific course covering regional Mediterranean and sub-mountainous plant species, soil composition, and environmental conservation.",
        funding: "Subsidized civic education rate",
        fee: "€25 membership",
        tuition: "€290 complete course including 4 weekend botanical excursions",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.unipoppd.org/corsi/scienze-e-natura/",
        requirements: {
          gpa: "Open to all nature enthusiasts and biology students",
          ielts: "Italian B2",
          gre: "Not required",
          papers: "Enrollment form",
          references: "Not required"
        }
      },
      {
        id: 5078,
        title: "UniPop Research Fellowship in Lifelong Learning Pedagogy",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "One-year visiting research fellowship analyzing third-age education impact on cognitive resilience and community engagement in urban Veneto.",
        funding: "€4,000 research stipend and dedicated research library privileges in Padua",
        fee: "€0",
        tuition: "€0",
        deadline: "2027-09-01",
        deadlineText: "September 1, 2027",
        source: "https://www.unipoppd.org/ricerca/",
        requirements: {
          gpa: "Master's or PhD in Education, Psychology, or Sociology",
          ielts: "Italian C1",
          gre: "Not required",
          papers: "Research proposal on educational gerontology and active citizenship",
          references: "Two professorial recommendation letters"
        }
      }
    ],
    researchers: [
      {
        id: 2193,
        name: "Prof. Alberto Preti",
        title: "Presidente e Docente di Storia Contemporanea",
        department: "Consiglio Direttivo e Dipartimento Storico",
        topics: ["Venetian Contemporary History", "Popular Education Movements", "Civic Memory"],
        summary: "Prof. Alberto Preti serves as President of Università Popolare di Padova, leading historical research into civic educational movements in northern Italy, 20th-century social transformations, and regional historiography.",
        website: "https://www.unipoppd.org/chi-siamo/",
        source: "https://www.unipoppd.org/chi-siamo/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2194,
        name: "Dott.ssa Fabia Zanasi",
        title: "Coordinatrice Dipartimento di Storia dell'Arte",
        department: "Dipartimento di Arti Visive e Beni Culturali",
        topics: ["Renaissance Venetian Frescoes", "Palladian Architecture", "Museum Curating"],
        summary: "Dott.ssa Fabia Zanasi coordinates art historical education and museum partnerships, researching 14th- and 15th-century fresco preservation in Padua and Renaissance architectural theory.",
        website: "https://www.unipoppd.org/docenti/",
        source: "https://www.unipoppd.org/docenti/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2195,
        name: "Prof. Franco La Cecla",
        title: "Docente di Antropologia Culturale e dello Spazio",
        department: "Dipartimento di Scienze Sociali e Umane",
        topics: ["Urban Anthropology", "Space Perception", "Architecture and Society"],
        summary: "Prof. Franco La Cecla is an internationally acclaimed cultural anthropologist and architectural critic who conducts seminars on the anthropology of urban spaces, spatial perception, and Mediterranean cultural identities.",
        website: "https://www.unipoppd.org/docenti/",
        source: "https://www.unipoppd.org/docenti/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 14. USA: Arizona College of Nursing (Mesa Campus)
  {
    institution: "Arizona College of Nursing (Mesa Campus)",
    slug: "arizona-college-of-nursing-mesa",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 574,
    location: "Mesa, Arizona, USA",
    website: "https://www.arizonacollege.edu",
    shortName: "Arizona College Mesa",
    badge: "Accelerated Nursing & Healthcare College",
    overview: "Arizona College of Nursing (Mesa Campus) is an accredited specialized healthcare institution in the Phoenix metropolitan area offering an accelerated, high-touch 3-year Bachelor of Science in Nursing (BSN) degree, high-fidelity clinical simulation laboratories, and direct clinical hospital partnerships across Arizona health systems.",
    lead: "Explore accelerated 3-year BSN degrees, nursing clinical simulation practicums, and healthcare merit scholarships at Arizona College of Nursing in Mesa.",
    description: "Arizona College of Nursing Mesa accredited accelerated BSN degree, clinical hospital practicums, high-fidelity simulation labs, and Arizona nursing scholarships.",
    quickFacts: {
      type: "Private Specialized Healthcare College",
      campus: "Mesa Campus (Dobson Road), Phoenix Metro Area, Arizona",
      accreditation: "Commission on Collegiate Nursing Education (CCNE) / ABHES / Arizona State Board of Nursing",
      admissions: "Rolling cohort admissions (3 starts per year) with HESI A2 entrance exam",
      language: "English (TOEFL iBT 80+ or HESI A2 English Composite 75%+)",
      aid: "Federal Title IV Aid, Arizona College Opportunity Grants & Healthcare Tuition Bursaries"
    },
    strengths: [
      "Accelerated 3-year Bachelor of Science in Nursing (BSN) with zero prerequisite course waiting lists",
      "State-of-the-art simulation centre featuring high-fidelity human patient simulators and modern hospital ward mockups",
      "Clinical rotations integrated across premier Phoenix valley medical systems and regional hospital networks",
      "Rigorous NCLEX-RN board preparation integrated throughout all core nursing clinical semesters"
    ],
    programs: [
      { title: "Bachelor of Science in Nursing (BSN)", level: "Accelerated Bachelor of Science (3-Year)", desc: "Comprehensive 120-credit BSN curriculum combining general science fundamentals, pharmacology, medical-surgical nursing, and pediatric/obstetric clinicals." },
      { title: "Medical Assisting with Phlebotomy Diploma", level: "Allied Health Diploma", desc: "Hands-on clinical training in diagnostic phlebotomy, EKG recording, clinical charting, and outpatient clinical office procedures." },
      { title: "Dental Assisting with Radiography Certificate", level: "Allied Health Certificate", desc: "Specialized dental radiography, chairside assisting, dental material management, and infection control protocols." }
    ],
    opportunities: [
      {
        id: 5079,
        title: "Arizona Future Nurse Healthcare Leadership Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Merit scholarship providing substantial tuition relief to incoming BSN students demonstrating exceptional academic drive and dedication to nursing excellence.",
        funding: "Up to $5,000 tuition reduction distributed across clinical quarters",
        fee: "$50 application and HESI exam fee",
        tuition: "Approx. $22,500 per academic year for the accelerated BSN",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.arizonacollege.edu/financial-aid/scholarships/",
        requirements: {
          gpa: "High school GPA of 3.0 or cumulative college transfer GPA of 2.75",
          ielts: "HESI A2 Composite score of 75% or TOEFL iBT 80",
          gre: "Not required",
          papers: "500-word personal statement detailing motivation to enter the nursing profession",
          references: "Two professional or academic letters of recommendation"
        }
      },
      {
        id: 5080,
        title: "Accelerated 3-Year Bachelor of Science in Nursing (BSN)",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Intensive accredited BSN program enabling students to graduate in 36 continuous months and sit for the NCLEX-RN registered nurse licensing examination.",
        funding: "Federal Pell Grants, Direct Subsidized/Unsubsidized Loans, and institutional payment plans",
        fee: "$50 application fee",
        tuition: "$23,200 per year",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.arizonacollege.edu/nursing-program/bsn/",
        requirements: {
          gpa: "High school diploma or GED equivalent",
          ielts: "English language proficiency assessed via HESI A2",
          gre: "Not required",
          papers: "Passing score on HESI A2 Entrance Exam (Math & Reading comprehension)",
          references: "Admissions interview with nursing faculty"
        }
      },
      {
        id: 5081,
        title: "Phoenix Valley Acute Care Hospital Clinical Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Over 800 hours of mandatory supervised clinical rotations placed within Phoenix and Mesa regional acute care hospitals, ICU, and trauma centers.",
        funding: "Included in BSN degree curriculum with full clinical malpractice coverage",
        fee: "Covered by program tuition",
        tuition: "Covered by program tuition",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.arizonacollege.edu/nursing-program/clinical-experience/",
        requirements: {
          gpa: "Satisfactory completion of all foundational pathophysiology and pharmacology modules",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Level 1 Arizona Fingerprint Clearance Card, CPR BLS for Healthcare Providers, and 10-panel drug screen",
          references: "Clinical faculty endorsement"
        }
      },
      {
        id: 5082,
        title: "Arizona College Healthcare Opportunity Grant",
        type: "Grant",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Need-based institutional grant designed to assist first-generation students in purchasing nursing clinical uniforms, medical diagnostic kits, and digital textbooks.",
        funding: "$2,000 direct supply and lab fee grant",
        fee: "$50",
        tuition: "Standard BSN tuition applies",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.arizonacollege.edu/financial-aid/",
        requirements: {
          gpa: "Enrolled in good standing in the BSN program",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "FAFSA filing and demonstrated financial need",
          references: "Not required"
        }
      },
      {
        id: 5083,
        title: "Medical Assisting with Phlebotomy Clinical Diploma",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Accelerated 30-week allied health diploma providing hands-on competency in blood collection, vital sign measurement, and ambulatory clinical workflows.",
        funding: "Federal Title IV eligible and career transition subsidies available",
        fee: "$50 application fee",
        tuition: "$14,500 total diploma tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.arizonacollege.edu/allied-health-programs/medical-assisting/",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Immunization record and background clearance",
          references: "One character reference"
        }
      },
      {
        id: 5084,
        title: "Military Veteran Healthcare Transition Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Dedicated tuition assistance scholarship honoring active military service members, veterans, and military spouses transitioning into nursing careers.",
        funding: "$3,500 annual tuition grant combinable with GI Bill benefits",
        fee: "Waived for military veterans",
        tuition: "Standard tuition rates",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.arizonacollege.edu/financial-aid/military-veterans/",
        requirements: {
          gpa: "High school diploma or prior college military credit transfer",
          ielts: "English fluency",
          gre: "Not required",
          papers: "DD-214 or Certificate of Eligibility",
          references: "One military or civilian reference"
        }
      },
      {
        id: 5085,
        title: "NCLEX-RN High-Performance Clinical Mentorship Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Comprehensive senior-year fellowship pairing graduating nursing seniors with doctoral clinical nurse preceptors for intensive board preparation.",
        funding: "$1,500 NCLEX testing voucher and testing software licensing package",
        fee: "$0",
        tuition: "$0",
        deadline: "2027-09-01",
        deadlineText: "September 1, 2027",
        source: "https://www.arizonacollege.edu/nursing-program/",
        requirements: {
          gpa: "Minimum 3.5 cumulative nursing clinical GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Predictive HESI Comprehensive Exam exit score >= 900",
          references: "Recommendation from two clinical nursing instructors"
        }
      }
    ],
    researchers: [
      {
        id: 2196,
        name: "Dr. Amber Kool",
        title: "Associate Provost of Nursing & Academic Operations",
        department: "College of Nursing Executive Leadership",
        topics: ["Nursing Education Innovation", "Clinical Simulation Pedagogies", "NCLEX Predictive Analytics"],
        summary: "Dr. Amber Kool oversees academic nursing programs across Arizona College of Nursing campuses, researching simulation-based clinical training efficacy, curriculum redesign, and student outcomes in NCLEX board examinations.",
        website: "https://www.arizonacollege.edu/leadership/",
        source: "https://www.arizonacollege.edu/leadership/",
        recruiting: "Not verified",
        subject: "biology"
      },
      {
        id: 2197,
        name: "Dr. Damien Zikakis",
        title: "Director of Clinical Operations & Hospital Partnerships",
        department: "Department of Clinical Education",
        topics: ["Acute Care Clinical Transitions", "Preceptor Training Models", "Healthcare Workforce Retention"],
        summary: "Dr. Damien Zikakis manages clinical education partnerships across Arizona medical centres, studying clinical preceptorship dynamics, patient safety protocols, and post-licensure workforce retention.",
        website: "https://www.arizonacollege.edu/leadership/",
        source: "https://www.arizonacollege.edu/leadership/",
        recruiting: "Not verified",
        subject: "biology"
      },
      {
        id: 2198,
        name: "Dr. Mary Adams",
        title: "Dean of Nursing, Mesa Campus",
        department: "School of Nursing - Mesa",
        topics: ["Health Disparities in Underserved Communities", "Pharmacology Teaching Methods", "Maternal-Child Health"],
        summary: "Dr. Mary Adams leads the Mesa campus nursing faculty, investigating culturally competent community health nursing interventions, maternal-child health disparities, and pharmacology integration in accelerated BSN tracks.",
        website: "https://www.arizonacollege.edu/faculty/",
        source: "https://www.arizonacollege.edu/faculty/",
        recruiting: "Not verified",
        subject: "biology"
      }
    ]
  },

  // 15. USA: Berkeley College (New York City Midtown Campus)
  {
    institution: "Berkeley College (New York City Midtown Campus)",
    slug: "berkeley-college-new-york-city-midtown",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 593,
    location: "New York, New York, USA",
    website: "https://berkeleycollege.edu",
    shortName: "Berkeley College NYC",
    badge: "Business, Fashion & Professional Studies",
    overview: "Berkeley College New York City Midtown Campus, located on 43rd Street in Manhattan between Fifth and Madison Avenues, is an accredited private career-focused institution established in 1931, offering bachelor and associate degrees in fashion merchandising, interior design, financial services, criminal justice, and international business.",
    lead: "Explore degrees in fashion merchandising, business administration, graphic design, and Manhattan career scholarships at Berkeley College NYC Midtown.",
    description: "Berkeley College NYC Midtown accredited degrees in fashion merchandising, interior design, business management, and Manhattan corporate internship scholarships.",
    quickFacts: {
      type: "Private Career-Focused Business & Design College",
      campus: "Midtown Manhattan Campus (East 43rd Street), New York City",
      accreditation: "Middle States Commission on Higher Education (MSCHE) / IACBE",
      admissions: "Rolling quarterly admissions with personal interview",
      language: "English (IELTS 6.0 / TOEFL iBT 61 / Duolingo 95+)",
      aid: "Berkeley College Institutional Grants, Honors Scholarships & Federal Aid"
    },
    strengths: [
      "Prime Midtown Manhattan location adjacent to Grand Central Terminal, fashion houses, and corporate headquarters",
      "World-class Fashion Merchandising and Management curriculum with direct participation in New York Fashion Week",
      "Mandatory internships integrated into every degree program through an extensive network of NYC employers",
      "Larry L. Luing School of Business accredited by the International Accreditation Council for Business Education (IACBE)"
    ],
    programs: [
      { title: "B.B.A. in Fashion Merchandising and Management", level: "Bachelor of Business Administration", desc: "Four-year specialized degree covering retail buying, luxury brand management, supply chain sustainability, and fashion trend forecasting." },
      { title: "B.F.A. in Interior Design", level: "Bachelor of Fine Arts", desc: "CIDA-aligned professional interior design degree teaching CAD/BIM modeling, sustainable lighting, materials specifications, and commercial space planning." },
      { title: "B.S. in Information Technology Management", level: "Bachelor of Science", desc: "Applied technology program linking enterprise database architecture, cloud infrastructure, IT project leadership, and cybersecurity." }
    ],
    opportunities: [
      {
        id: 5086,
        title: "Berkeley College NYC Achievement Honors Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Merit scholarship covering up to 50% of tuition for high-achieving high school seniors and transfer scholars admitted to bachelor's degree tracks.",
        funding: "Up to $12,000 per academic year in tuition reduction",
        fee: "$50 application fee",
        tuition: "Approx. $26,900 per academic year",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://berkeleycollege.edu/admissions/financial-aid/scholarships/index.html",
        requirements: {
          gpa: "Cumulative GPA of 3.0 or higher on a 4.0 scale",
          ielts: "IELTS 6.0 overall (or TOEFL iBT 70+)",
          gre: "Not required",
          papers: "500-word personal essay regarding professional aspirations in New York City",
          references: "Two academic or professional recommendation letters"
        }
      },
      {
        id: 5087,
        title: "B.B.A. in Fashion Merchandising & Management Enrolment",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Four-year Manhattan-based degree training buyers, visual merchandisers, brand managers, and retail analysts for global fashion enterprises.",
        funding: "Institutional aid, Federal Pell Grants, and New York TAP eligible",
        fee: "$50 application fee",
        tuition: "$13,450 per semester",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://berkeleycollege.edu/academics/undergraduate-degrees/fashion-merchandising-and-management/index.html",
        requirements: {
          gpa: "High school diploma or equivalent",
          ielts: "IELTS 6.0 or TOEFL iBT 61",
          gre: "Not required",
          papers: "Official high school transcripts and personal statement",
          references: "One recommendation letter"
        }
      },
      {
        id: 5088,
        title: "Manhattan Fashion District Corporate Internship Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Structured semester internship placed within leading New York fashion showrooms, luxury retail corporate offices, and PR agencies.",
        funding: "$16.50 to $22.00 per hour corporate compensation",
        fee: "Covered by degree enrollment",
        tuition: "Covered by degree enrollment",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://berkeleycollege.edu/student-life/career-services/index.html",
        requirements: {
          gpa: "Completion of 60 credits in fashion or business program with minimum 2.8 GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Professional resume and fashion digital portfolio",
          references: "Career services coordinator endorsement"
        }
      },
      {
        id: 5089,
        title: "B.F.A. Interior Design Studio Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        desc: "Studio-intensive four-year degree preparing interior designers with Revit, AutoCAD, 3D spatial rendering, building codes, and sustainable materials.",
        funding: "Design portfolio talent grants available",
        fee: "$50 application fee",
        tuition: "$13,800 per semester",
        deadline: "2027-07-01",
        deadlineText: "July 1, 2027",
        source: "https://berkeleycollege.edu/academics/undergraduate-degrees/interior-design/index.html",
        requirements: {
          gpa: "High school completion with GPA 2.5+",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Creative visual portfolio of 8-12 drawings or digital designs",
          references: "One artistic or academic reference"
        }
      },
      {
        id: 5090,
        title: "Larry L. Luing Business Leadership Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Grant awarded to undergraduate students pursuing degrees in international business, accounting, or information technology management.",
        funding: "$3,000 annual grant applied directly toward tuition charges",
        fee: "$50",
        tuition: "Standard college tuition",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://berkeleycollege.edu/admissions/financial-aid/scholarships/index.html",
        requirements: {
          gpa: "High school or transfer GPA of 2.75+",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Essay on entrepreneurship and corporate ethical responsibility",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 5091,
        title: "Global Diversity & International Student Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Scholarship aimed at supporting international students holding F-1 visas who contribute to cultural diversity across Berkeley College campuses.",
        funding: "Up to 35% tuition reduction for the duration of the undergraduate program",
        fee: "$50 international fee",
        tuition: "$26,900 per year before scholarship",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://berkeleycollege.edu/international-students/index.html",
        requirements: {
          gpa: "Secondary school equivalency certificate with good academic standing",
          ielts: "IELTS 6.0 or TOEFL iBT 61",
          gre: "Not required",
          papers: "Personal statement detailing cross-cultural perspectives and career goals",
          references: "One teacher or counselor recommendation"
        }
      },
      {
        id: 5092,
        title: "New York Sustainable Design & Urban Space Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        desc: "Senior research fellowship investigating biophilic interior architecture and recycled materials in high-density Manhattan commercial buildings.",
        funding: "$4,000 project research grant and showcase exhibition in the Berkeley College Gallery",
        fee: "$0",
        tuition: "$0",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://berkeleycollege.edu/academics/undergraduate-degrees/interior-design/index.html",
        requirements: {
          gpa: "Senior standing in BFA Interior Design with minimum 3.4 GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Comprehensive interior design thesis portfolio and materials specification binder",
          references: "Two design faculty endorsements"
        }
      }
    ],
    researchers: [
      {
        id: 2199,
        name: "Joshua B. Green",
        title: "Chair, Fashion Merchandising & Management",
        department: "School of Professional Studies",
        topics: ["Luxury Brand Strategy", "Sustainable Fashion Supply Chains", "Omnichannel Retail Merchandising"],
        summary: "Joshua B. Green heads the Fashion Merchandising and Management department, studying consumer behavior in luxury retail, sustainable textile sourcing, and digital supply chain visibility.",
        website: "https://berkeleycollege.edu/faculty/",
        source: "https://berkeleycollege.edu/faculty/",
        recruiting: "Not verified",
        subject: "arts-design"
      },
      {
        id: 2200,
        name: "Dr. Elana Zolfo",
        title: "Dean, Larry L. Luing School of Business",
        department: "School of Business",
        topics: ["Organizational Leadership", "Business Ethics Education", "Higher Education Workforce Readiness"],
        summary: "Dr. Elana Zolfo leads the business school at Berkeley College, focusing on applied business curricula design, career competencies in corporate finance, and experiential executive training in New York City.",
        website: "https://berkeleycollege.edu/faculty/",
        source: "https://berkeleycollege.edu/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2201,
        name: "Prof. Nicole DeFeo",
        title: "Coordinator, Interior Design Department",
        department: "Department of Interior Design",
        topics: ["Biophilic Interior Architecture", "Commercial Space Optimization", "Sustainable Materials Specification"],
        summary: "Prof. Nicole DeFeo directs interior design studio education, examining sustainable building certification standards, adaptive reuse of commercial urban real estate, and human-centric spatial wellness.",
        website: "https://berkeleycollege.edu/faculty/",
        source: "https://berkeleycollege.edu/faculty/",
        recruiting: "Not verified",
        subject: "arts-design"
      }
    ]
  },

  // 16. USA: California Miramar University (CMU)
  {
    institution: "California Miramar University (CMU)",
    slug: "california-miramar-university-cmu",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 613,
    location: "San Diego, California, USA",
    website: "https://www.calmu.edu",
    shortName: "California Miramar",
    badge: "Polytechnic, Tech & Business University",
    overview: "California Miramar University (CMU), located in San Diego, California, is an accredited private university specializing in practical, industry-aligned bachelor, master, and doctoral degree programs in artificial intelligence, computer science, business administration, cyber security, and sports management.",
    lead: "Explore bachelor, master, and doctoral programs in computer science, AI, business administration, and STEM CPT/OPT opportunities at California Miramar University.",
    description: "California Miramar University (CMU) accredited degrees in computer science, MBA, DBA, cybersecurity, and San Diego international STEM scholarships.",
    quickFacts: {
      type: "Private Polytechnic University",
      campus: "San Diego Main Campus (Camino Del Rio North), California",
      accreditation: "Distance Education Accrediting Commission (DEAC) / CHEA Recognized",
      admissions: "Rolling bi-monthly term admissions with online application",
      language: "English (IELTS 6.0/6.5 / TOEFL iBT 71+ / Duolingo 100+)",
      aid: "CMU International Merit Scholarships, Military Tuition Discounts & Corporate Grants"
    },
    strengths: [
      "STEM-designated Master of Science programs eligible for up to 3 years of post-study OPT work authorization in the USA",
      "Curricular Practical Training (CPT) integrated throughout graduate programs for immediate workforce experience",
      "Doctor of Business Administration (DBA) designed for working executives and senior technology leaders",
      "Dynamic San Diego location with active connections to southern California biotech, defense, and software firms"
    ],
    programs: [
      { title: "M.S. in Computer Science (STEM Designated)", level: "Master of Science", desc: "Two-year graduate STEM degree covering algorithms, machine learning architectures, cloud computing networks, and cyber defense." },
      { title: "Master of Business Administration (MBA)", level: "Master of Business Administration", desc: "Specializations in Technology Management, International Business, Healthcare Management, and Finance." },
      { title: "Doctor of Business Administration (DBA)", level: "Doctorate (DBA)", desc: "Applied doctoral research degree focusing on strategic management, organizational innovation, and quantitative business analytics." }
    ],
    opportunities: [
      {
        id: 5093,
        title: "CMU Global Tech Leadership Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Tuition discount scholarship awarded to incoming international and domestic graduate students entering STEM degree programs.",
        funding: "$3,000 tuition reduction distributed equally across graduate semesters",
        fee: "$50 application fee",
        tuition: "Approx. $14,400 to $16,800 total master's program tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.calmu.edu/admissions/financial-aid/",
        requirements: {
          gpa: "Undergraduate bachelor's degree with minimum 3.0 GPA",
          ielts: "IELTS 6.5 overall (or TOEFL iBT 79+)",
          gre: "Not required",
          papers: "750-word statement of purpose outlining technical career objectives",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 5094,
        title: "M.S. in Computer Science (STEM Designated) Enrolment",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "36-credit STEM master's program instructing in advanced data structures, AI algorithms, database security, and cloud deployment pipelines.",
        funding: "Eligible for day-one CPT and 3-year STEM OPT extension for international students",
        fee: "$50 application fee",
        tuition: "$15,480 full degree tuition",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.calmu.edu/programs/master-of-science-in-computer-science/",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Engineering, Math, or related STEM field",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Resume and technical background evaluation",
          references: "Two academic or professional recommendations"
        }
      },
      {
        id: 5095,
        title: "San Diego Tech Sector Curricular Practical Training (CPT)",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Authorized academic CPT internship placed within software companies, defense technology contractors, or startups across San Diego County.",
        funding: "$24.00 to $35.00 per hour industry compensation",
        fee: "Covered by graduate course registration",
        tuition: "Covered by graduate course registration",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.calmu.edu/international-students/cpt-opt/",
        requirements: {
          gpa: "Enrolled in good standing in a CMU graduate degree program (GPA >= 3.0)",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Valid F-1 status and approved employer training cooperative agreement",
          references: "Academic dean CPT approval"
        }
      },
      {
        id: 5096,
        title: "Doctor of Business Administration (DBA) Enrolment",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Applied 60-credit doctoral curriculum preparing corporate executives and business educators through advanced quantitative and qualitative dissertation research.",
        funding: "Institutional tuition payment plans and corporate employer tuition reimbursement eligible",
        fee: "$50 application fee",
        tuition: "$27,000 complete doctoral degree tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.calmu.edu/programs/doctor-of-business-administration/",
        requirements: {
          gpa: "Master's degree (MBA or related field) with minimum 3.0 GPA and 3+ years professional management experience",
          ielts: "IELTS 6.5 or TOEFL iBT 80",
          gre: "Not required",
          papers: "1,500-word doctoral research topic proposal",
          references: "Three professional/academic recommendation letters"
        }
      },
      {
        id: 5097,
        title: "Master of Business Administration (MBA - Tech Management)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "36-credit executive MBA track combining agile technology roadmapping, enterprise risk management, corporate finance, and strategic marketing.",
        funding: "Merit scholarships and military discount rates available",
        fee: "$50 application fee",
        tuition: "$14,400 total MBA tuition",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.calmu.edu/programs/master-of-business-administration/",
        requirements: {
          gpa: "Recognized bachelor's degree",
          ielts: "IELTS 6.0/6.5",
          gre: "Not required",
          papers: "Statement of purpose and professional resume",
          references: "Two references"
        }
      },
      {
        id: 5098,
        title: "CMU Cybersecurity Defense & Threat Intelligence Grant",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Grant supporting student research in cloud penetration testing, automated SIEM anomaly detection, and cryptographic protocols.",
        funding: "$2,500 grant applied toward tuition and specialized cybersecurity exam vouchers",
        fee: "$0",
        tuition: "Standard tuition",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.calmu.edu/admissions/financial-aid/",
        requirements: {
          gpa: "Current graduate student in computer science with minimum 3.3 GPA",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Technical proposal on zero-trust cloud architecture",
          references: "One faculty endorsement"
        }
      },
      {
        id: 5099,
        title: "San Diego Entrepreneurship & Venture Incubation Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Post-graduate fellowship offering seed workspace, legal mentoring, and pitch coaching for students launching high-tech startups in southern California.",
        funding: "$5,000 non-dilutive seed grant plus 6 months incubator membership",
        fee: "$0",
        tuition: "$0",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.calmu.edu/student-services/career-services/",
        requirements: {
          gpa: "Graduating student or recent alumni from CMU MBA or MSCS programs",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Detailed 15-page business plan and functional software prototype",
          references: "Two advisory board endorsements"
        }
      }
    ],
    researchers: [
      {
        id: 2202,
        name: "Dr. Stanley Foster",
        title: "President & CEO",
        department: "Office of the President",
        topics: ["Higher Education Administration", "Distance Learning Pedagogy", "Strategic Global Alliances"],
        summary: "Dr. Stanley Foster directs California Miramar University, spearheading institutional accreditation compliance, technology integration in modern hybrid education, and international university partnerships.",
        website: "https://www.calmu.edu/about-us/leadership/",
        source: "https://www.calmu.edu/about-us/leadership/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2203,
        name: "Dr. Ali Gooyabadi",
        title: "Dean of the School of Technology and Computer Science",
        department: "School of Technology",
        topics: ["Machine Learning Architectures", "Cloud Computing Infrastructure", "Cybersecurity Protocols"],
        summary: "Dr. Ali Gooyabadi leads computer science and AI education at CMU, investigating distributed computing reliability, neural network optimization, and enterprise information security frameworks.",
        website: "https://www.calmu.edu/about-us/faculty/",
        source: "https://www.calmu.edu/about-us/faculty/",
        recruiting: "Not verified",
        subject: "computer-science"
      },
      {
        id: 2204,
        name: "Dr. Nick Ghalambor",
        title: "Dean of the School of Business and Management",
        department: "School of Business",
        topics: ["International Corporate Strategy", "Quantitative Econometrics", "Executive Leadership Development"],
        summary: "Dr. Nick Ghalambor directs doctoral and master's business studies, focusing on empirical econometric evaluation, corporate governance, and cross-border strategic mergers and acquisitions.",
        website: "https://www.calmu.edu/about-us/faculty/",
        source: "https://www.calmu.edu/about-us/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 17. USA: Campbell University (Raleigh Campus)
  {
    institution: "Campbell University (Raleigh Campus)",
    slug: "campbell-university-raleigh-campus",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 617,
    location: "Raleigh, North Carolina, USA",
    website: "https://www.campbell.edu",
    shortName: "Campbell University Raleigh",
    badge: "Law, Business & Graduate Center",
    overview: "Campbell University Raleigh Campus, situated on Hillsborough Street in downtown Raleigh, North Carolina, houses the renowned Norman Adrian Wiggins School of Law and graduate programs in business, education, and public administration, providing premier legal training, judicial clerkships, and direct proximity to North Carolina's Supreme Court and State Capitol.",
    lead: "Explore Juris Doctor (J.D.) degrees, dual J.D./MBA programs, appellate judicial clerkships, and legal merit scholarships at Campbell Law in downtown Raleigh.",
    description: "Campbell University Raleigh Campus Norman Adrian Wiggins School of Law accredited J.D. degrees, downtown judicial internships, and North Carolina legal fellowships.",
    quickFacts: {
      type: "Private Baptist University Professional Campus",
      campus: "Downtown Raleigh Campus (Hillsborough Street), North Carolina",
      accreditation: "American Bar Association (ABA) / SACSCOC",
      admissions: "LSAC Credential Assembly Service (CAS) for law; rolling graduate admissions",
      language: "English (TOEFL iBT 100+ / IELTS 7.5 for law school)",
      aid: "Campbell Law Dean's Excellence Scholarships, Merit Fellowships & Federal Direct Loans"
    },
    strengths: [
      "Unmatched trial advocacy program consistently ranked among the top trial advocacy law schools in the United States",
      "Prime downtown Raleigh location steps from the North Carolina General Assembly, Supreme Court, and federal courthouse",
      "Remarkable North Carolina Bar Examination ultimate pass rate consistently exceeding state averages",
      "Extensive clinical law network including the Blanchard Community Law Clinic, Restorative Justice Clinic, and Innocence Project"
    ],
    programs: [
      { title: "Juris Doctor (J.D.)", level: "First Professional Law Degree", desc: "Three-year ABA-accredited legal curriculum renowned for intensive practical trial advocacy, legal research, statutory interpretation, and judicial ethics." },
      { title: "Dual J.D. / Master of Business Administration (MBA)", level: "Dual Graduate Degree", desc: "Four-year joint program combining comprehensive legal jurisprudence with executive corporate finance, management strategy, and commercial contract leadership." },
      { title: "Master of Public Administration (MPA)", level: "Master's Degree", desc: "Graduate degree preparing public policy leaders for executive roles in municipal governance, non-profit administration, and state policy analysis." }
    ],
    opportunities: [
      {
        id: 5100,
        title: "Campbell Law Dean's Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Prestigious merit scholarship providing full or substantial tuition remission to incoming J.D. candidates demonstrating superior academic ability and LSAT scores.",
        funding: "Up to 100% full tuition remission (valued up to $48,000 per academic year)",
        fee: "$0 application fee through LSAC",
        tuition: "Approx. $47,800 per academic year",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://law.campbell.edu/admissions/scholarships-financial-aid/",
        requirements: {
          gpa: "Competitive undergraduate GPA (median admitted GPA ~3.55)",
          ielts: "English fluency assessed via LSAT; TOEFL iBT 100 if applicable",
          gre: "LSAT score required (median ~156-160) or competitive GRE",
          papers: "Personal statement detailing character, leadership, and reasons for pursuing legal practice",
          references: "Two academic or professional letters submitted through LSAC CAS"
        }
      },
      {
        id: 5101,
        title: "Juris Doctor (J.D.) Full-Time Professional Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Three-year professional doctorate in law featuring Campbell's nationally acclaimed trial advocacy sequence and competitive moot court teams.",
        funding: "Federal Direct Unsubsidized Loans, Grad PLUS Loans, and institutional merit endowments",
        fee: "$0 application fee",
        tuition: "$47,800 per academic year",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://law.campbell.edu/admissions/",
        requirements: {
          gpa: "Conferred bachelor's degree from an accredited university",
          ielts: "English fluency",
          gre: "Valid LSAT score",
          papers: "Complete LSAC Credential Assembly Service report, resume, and character and fitness disclosures",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 5102,
        title: "North Carolina Supreme Court & Appellate Judicial Externship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Competitive semester judicial externship placed with justices of the North Carolina Supreme Court and judges of the NC Court of Appeals in Raleigh.",
        funding: "Earns 3-4 academic credits toward J.D. degree; covers court parking and security clearances",
        fee: "Covered by law school tuition",
        tuition: "Covered by law school tuition",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://law.campbell.edu/experiential-learning/externships/",
        requirements: {
          gpa: "Top 25% class standing at Campbell Law following first-year (1L) curriculum",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Unedited legal writing sample (bench memo or appellate brief) and resume",
          references: "Interview and nomination by Campbell Law externship committee"
        }
      },
      {
        id: 5103,
        title: "Blanchard Community Law Clinic Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Post-graduate clinical fellowship supervising law student casework in criminal record expunction, housing rights, and legal relief for indigent clients in Raleigh.",
        funding: "$52,000 annual fellowship salary plus full university healthcare benefits",
        fee: "$0",
        tuition: "$0",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://law.campbell.edu/experiential-learning/clinics/blanchard-community-law-clinic/",
        requirements: {
          gpa: "Juris Doctor graduate licensed to practice law in North Carolina (or eligible for NC Bar reciprocity)",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Demonstrated commitment to pro bono legal service and public interest advocacy",
          references: "Three professional legal references"
        }
      },
      {
        id: 5104,
        title: "Dual J.D. / Master of Business Administration (MBA) Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Four-year joint degree offered with Campbell's Lundy-Fetterman School of Business preparing attorneys for corporate counsel, venture capital, and commercial banking.",
        funding: "Combined law and business merit scholarships available",
        fee: "$0",
        tuition: "Combined J.D. tuition schedule",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://law.campbell.edu/academics/dual-degrees/jd-mba/",
        requirements: {
          gpa: "Successful admission to Campbell Law and approval by business graduate admissions",
          ielts: "English fluency",
          gre: "LSAT score accepted in lieu of GMAT",
          papers: "Statement of purpose connecting legal and corporate business outcomes",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 5105,
        title: "Campbell Law Trial Advocacy Summer Honors Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Grant funding summer travel, lodging, and competition entry fees for student advocates representing Campbell Law in national mock trial tournaments.",
        funding: "$3,000 travel and competition stipend",
        fee: "$0",
        tuition: "$0",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://law.campbell.edu/advocacy/",
        requirements: {
          gpa: "Selection for Campbell Law National Trial Team",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Competitive courtroom audition performance",
          references: "Endorsement by Director of Advocacy"
        }
      },
      {
        id: 5106,
        title: "Restorative Justice & Criminal Law Reform Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Research and clinical fellowship investigating victim-offender reconciliation models and restorative justice diversion programs across North Carolina courts.",
        funding: "$4,500 research grant and project presentation at the NC Bar Association annual colloquium",
        fee: "$0",
        tuition: "$0",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://law.campbell.edu/experiential-learning/clinics/restorative-justice-clinic/",
        requirements: {
          gpa: "Current 2L or 3L law student at Campbell Law with high marks in criminal procedure",
          ielts: "English fluency",
          gre: "Not required",
          papers: "10-page scholarly brief on restorative justice diversion outcomes",
          references: "Recommendation from criminal law faculty member"
        }
      }
    ],
    researchers: [
      {
        id: 2205,
        name: "J. Rich Leonard",
        title: "Dean Emeritus & Professor of Law",
        department: "Norman Adrian Wiggins School of Law",
        topics: ["Bankruptcy Jurisprudence", "Judicial Administration", "Commercial Restructuring Law"],
        summary: "J. Rich Leonard, former United States Bankruptcy Judge for the Eastern District of North Carolina, served over a decade as Dean of Campbell Law, authoring seminal treatises on corporate reorganization, federal judicial ethics, and international legal systems.",
        website: "https://law.campbell.edu/faculty/",
        source: "https://law.campbell.edu/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2206,
        name: "Prof. Dan Tilly",
        title: "Director of Advocacy Programs & Professor of Law",
        department: "Department of Trial Advocacy",
        topics: ["Evidence Law", "Courtroom Trial Practice", "Appellate Oral Advocacy"],
        summary: "Prof. Dan Tilly directs Campbell Law's top-ranked advocacy program, instructing student advocates in forensic evidence admissibility, cross-examination techniques, and federal trial procedure.",
        website: "https://law.campbell.edu/faculty/",
        source: "https://law.campbell.edu/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2207,
        name: "Prof. Ashley H. Campbell",
        title: "Director of the Blanchard Community Law Clinic",
        department: "Clinical Education Programs",
        topics: ["Poverty Law", "Legal Aid Access", "Criminal Record Expunction Policy"],
        summary: "Prof. Ashley H. Campbell directs clinical legal education at Campbell Law, investigating systemic barriers to civil legal representation, fair housing litigation, and restorative community legal remedies.",
        website: "https://law.campbell.edu/faculty/",
        source: "https://law.campbell.edu/faculty/",
        recruiting: "Not verified",
        subject: "social-sciences"
      }
    ]
  },

  // 18. USA: Carolina University
  {
    institution: "Carolina University",
    slug: "carolina-university-winston-salem",
    countryId: "usa",
    countryLabel: "USA",
    sourceRow: 619,
    location: "Winston-Salem, North Carolina, USA",
    website: "https://carolinau.edu",
    shortName: "Carolina University",
    badge: "Christ-Centered Research & Tech University",
    overview: "Carolina University, situated in Winston-Salem, North Carolina, is a private non-profit university offering accredited undergraduate, master's, and doctoral degree programs across business administration, computer science, public health, psychology, and interdisciplinary theological leadership.",
    lead: "Explore degrees in computer science, public health, MBA, PhD programs, and merit scholarships at Carolina University in Winston-Salem.",
    description: "Carolina University accredited degrees in software engineering, data science, public health, PhD leadership, and North Carolina academic grants.",
    quickFacts: {
      type: "Private Non-Profit University",
      campus: "Winston-Salem Campus (Franklin Street), North Carolina",
      accreditation: "Transnational Association of Christian Colleges and Schools (TRACS) / CHEA Recognized",
      admissions: "Rolling admissions with flexible monthly module starts",
      language: "English (IELTS 6.0 / TOEFL iBT 69+ / Duolingo 95+)",
      aid: "Carolina Opportunity Scholarships, Presidential Academic Awards & Federal Aid"
    },
    strengths: [
      "Accelerated 7-week modular academic calendar enabling flexible, continuous degree progression",
      "Robust STEM computer science and data analytics curricula with state-of-the-art cyber laboratories",
      "Interdisciplinary PhD in Leadership offering concentrations in educational leadership, business, and healthcare",
      "Dynamic campus community fostering ethical servant leadership, global service, and community research"
    ],
    programs: [
      { title: "B.S. in Computer Science & Artificial Intelligence", level: "Bachelor of Science", desc: "Four-year undergraduate program covering Python software development, algorithm design, cloud database architectures, and applied machine learning." },
      { title: "Master of Public Health (MPH)", level: "Master of Public Health", desc: "Two-year professional healthcare curriculum focusing on epidemiological surveillance, community health promotion, and biostatistical modeling." },
      { title: "Ph.D. in Leadership", level: "Doctor of Philosophy (Ph.D.)", desc: "60-credit terminal research doctorate offering specialized research tracks in organizational governance, higher education administration, and healthcare systems." }
    ],
    opportunities: [
      {
        id: 5107,
        title: "Carolina University Presidential Merit Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Merit-based tuition discount awarded to incoming freshman and transfer students demonstrating exceptional high school academic records.",
        funding: "Up to $6,000 per academic year in tuition assistance",
        fee: "$35 application fee",
        tuition: "Approx. $13,500 per academic year",
        deadline: "2027-07-01",
        deadlineText: "July 1, 2027",
        source: "https://carolinau.edu/admissions/financial-aid/",
        requirements: {
          gpa: "High school GPA of 3.25 or cumulative college GPA of 3.0",
          ielts: "IELTS 6.0 or TOEFL iBT 70",
          gre: "Not required",
          papers: "500-word personal statement on servant leadership and academic goals",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 5108,
        title: "B.S. in Computer Science & Artificial Intelligence Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Four-year undergraduate degree covering data structures, object-oriented software engineering, machine learning models, and cloud computing.",
        funding: "Pell grants, state grants, and university payment instalment options available",
        fee: "$35 application fee",
        tuition: "$13,500 per academic year",
        deadline: "2027-08-01",
        deadlineText: "August 1, 2027",
        source: "https://carolinau.edu/academics/undergraduate-degrees/bs-computer-science/",
        requirements: {
          gpa: "High school graduation diploma with strong algebra and science background",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Official transcripts and admissions essay",
          references: "One academic reference"
        }
      },
      {
        id: 5109,
        title: "Piedmont Triad Health Informatics & Public Health Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "180-hour applied practicum placed within North Carolina regional public health departments, community clinics, and hospital wellness divisions.",
        funding: "Academic credits and regional transportation stipends available",
        fee: "Covered by tuition",
        tuition: "Covered by tuition",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://carolinau.edu/academics/graduate-degrees/master-of-public-health/",
        requirements: {
          gpa: "Good standing in the Master of Public Health program (minimum 3.0 GPA)",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Practicum project proposal focusing on community epidemiology",
          references: "Approval from MPH practicum director"
        }
      },
      {
        id: 5110,
        title: "Ph.D. in Leadership Terminal Research Enrolment",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Terminal 60-credit doctoral program preparing researchers and executives through quantitative methodology, organizational theory, and dissertation defense.",
        funding: "Doctoral research assistantships and institutional tuition waivers available",
        fee: "$50 application fee",
        tuition: "$14,800 per academic year",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://carolinau.edu/academics/doctoral-degrees/phd-leadership/",
        requirements: {
          gpa: "Conferred master's degree from an accredited institution with minimum 3.2 GPA",
          ielts: "IELTS 6.5 or TOEFL iBT 80",
          gre: "GRE or GMAT evaluated favorably but not strictly required",
          papers: "1,500-word dissertation research statement and writing sample",
          references: "Three academic or professional recommendations"
        }
      },
      {
        id: 5111,
        title: "Master of Public Health (MPH in Epidemiology) Enrolment",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "mathematics"],
        desc: "Two-year graduate degree delivering rigorous biostatistics, infectious disease modeling, healthcare policy, and environmental health risk analysis.",
        funding: "Tuition installment plans and public health graduate awards",
        fee: "$35 application fee",
        tuition: "$12,800 per year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://carolinau.edu/academics/graduate-degrees/master-of-public-health/",
        requirements: {
          gpa: "Bachelor's degree with coursework in biology, chemistry, or statistics",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement on public health challenges",
          references: "Two academic letters"
        }
      },
      {
        id: 5112,
        title: "Carolina Tech & Data Science Innovation Grant",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Monetary grant supporting student capstone projects developing predictive machine learning models for municipal service optimization in North Carolina.",
        funding: "$2,000 project grant and GPU compute access",
        fee: "$0",
        tuition: "Standard tuition",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://carolinau.edu/research/",
        requirements: {
          gpa: "Junior or Senior undergraduate computer science student with GPA >= 3.2",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Capstone project technical specification document",
          references: "One professorial recommendation"
        }
      },
      {
        id: 5113,
        title: "Winston-Salem Community Health Research Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Graduate fellowship analyzing rural health access and preventive cardiovascular interventions across North Carolina's Piedmont region.",
        funding: "$4,500 research fellowship stipend and conference travel support",
        fee: "$0",
        tuition: "$0",
        deadline: "2027-09-01",
        deadlineText: "September 1, 2027",
        source: "https://carolinau.edu/research/",
        requirements: {
          gpa: "Master's or doctoral student in public health or leadership",
          ielts: "English fluency",
          gre: "Not required",
          papers: "5-page research design proposal with community data integration",
          references: "Two academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2208,
        name: "Dr. Sandeep Gopalan",
        title: "Executive Vice President & Provost",
        department: "Office of Academic Affairs",
        topics: ["International Law", "Higher Education Governance", "Technology and Legal Ethics"],
        summary: "Dr. Sandeep Gopalan is a Rhodes Scholar and internationally recognized legal academic who oversees academic strategy at Carolina University, conducting scholarship in international commercial law, corporate governance, and technology policy.",
        website: "https://carolinau.edu/about/leadership/",
        source: "https://carolinau.edu/about/leadership/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2209,
        name: "Dr. Douglas Munier",
        title: "Dean of the School of Arts and Sciences",
        department: "School of Arts and Sciences",
        topics: ["Educational Leadership", "Applied Mathematics", "Curriculum Design Methodologies"],
        summary: "Dr. Douglas Munier directs science and liberal arts programs, researching mathematical pedagogy, instructional system models, and student retention in quantitative STEM fields.",
        website: "https://carolinau.edu/faculty/",
        source: "https://carolinau.edu/faculty/",
        recruiting: "Not verified",
        subject: "mathematics"
      },
      {
        id: 2210,
        name: "Dr. Ronda Hawkins",
        title: "Chair of Public Health Programs",
        department: "Department of Public Health",
        topics: ["Community Epidemiology", "Health Disparities in Rural Populations", "Chronic Disease Prevention"],
        summary: "Dr. Ronda Hawkins coordinates graduate public health education, researching biostatistical determinants of chronic disease in southeastern US communities and community-based health promotion interventions.",
        website: "https://carolinau.edu/faculty/",
        source: "https://carolinau.edu/faculty/",
        recruiting: "Not verified",
        subject: "biology"
      }
    ]
  },

  // 19. UK: City College Oxford
  {
    institution: "City College Oxford",
    slug: "city-college-oxford",
    countryId: "uk",
    countryLabel: "UK",
    sourceRow: 1245,
    location: "Oxford, Oxfordshire, UK",
    website: "https://citycollegeoxford.co.uk",
    shortName: "City College Oxford",
    badge: "Business, Computing & Health Sciences College",
    overview: "City College Oxford, situated in the historic city of Oxford, is an accredited independent higher and further education college offering Pearson BTEC Higher National Certificates (HNC) and Higher National Diplomas (HND) in business, computing, health and social care, and hospitality management, providing structured pathway progression into UK university degree completion programs.",
    lead: "Explore Pearson BTEC HND diplomas in computing, business management, health and social care, and university top-up pathways at City College Oxford.",
    description: "City College Oxford accredited Pearson HND diplomas in computing, software development, healthcare management, and university bachelor top-up options.",
    quickFacts: {
      type: "Independent Higher & Further Education College",
      campus: "Hurst Street Campus, Oxford, Oxfordshire, UK",
      accreditation: "Pearson Edexcel Approved Centre / BAC Accredited",
      admissions: "Rolling tri-mester intake (September, January, May)",
      language: "English (IELTS 5.5/6.0 overall with no band below 5.5)",
      aid: "City College Oxford Academic Merit Bursaries & Student Finance England Eligibility (via designated partners)"
    },
    strengths: [
      "Rigorous Pearson BTEC Level 4 HNC and Level 5 HND qualifications recognized globally by universities and employers",
      "Direct pathway for graduates to enter the final third year ('top-up') of honours degree programs at UK universities",
      "Small tutorial classes offering personalized academic guidance in the academic heart of Oxford",
      "Industry-focused technical modules in cloud computing, cyber security, systems analysis, and enterprise finance"
    ],
    programs: [
      { title: "Pearson BTEC Level 5 HND in Computing", level: "Higher National Diploma (HND)", desc: "Two-year higher education diploma covering programming paradigms, data structures, network security, database administration, and cloud solutions." },
      { title: "Pearson BTEC Level 5 HND in Business", level: "Higher National Diploma (HND)", desc: "Two-year qualification developing capabilities in corporate financial analysis, international marketing, operations management, and human resources." },
      { title: "Pearson BTEC Level 5 HND in Healthcare Practice", level: "Higher National Diploma (HND)", desc: "Specialized clinical and administrative healthcare training in public health principles, physiological healthcare delivery, and healthcare ethics." }
    ],
    opportunities: [
      {
        id: 5114,
        title: "City College Oxford International Academic Bursary",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Tuition discount scholarship awarded to international and domestic applicants demonstrating strong prior academic results in technical subjects.",
        funding: "£1,500 direct tuition fee reduction across the two-year HND qualification",
        fee: "£150 international registration and assessment fee",
        tuition: "£6,500 to £7,500 per academic year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://citycollegeoxford.co.uk/fees-and-funding/",
        requirements: {
          gpa: "GCE A-Levels (minimum 2 subjects passed) or recognized international high school leaving certificate with good grades in math/science",
          ielts: "IELTS 5.5 overall with no component below 5.5 (or CEFR B2 equivalent)",
          gre: "Not required",
          papers: "500-word personal statement outlining motivation to study in Oxford",
          references: "One academic letter of reference from secondary school teacher"
        }
      },
      {
        id: 5115,
        title: "Pearson BTEC Level 5 HND in Computing Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Two-year, 240-credit Higher National Diploma providing comprehensive training in Python, Java, relational databases, network engineering, and cybersecurity.",
        funding: "Payment installment plans and university progression scholarships available",
        fee: "£150 registration fee",
        tuition: "£7,200 per academic year",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://citycollegeoxford.co.uk/hnd-in-computing/",
        requirements: {
          gpa: "Minimum 1 A-Level or BTEC Level 3 Extended Diploma or equivalent international secondary certificate",
          ielts: "IELTS 5.5/6.0 overall",
          gre: "Not required",
          papers: "Academic transcripts and identity documentation",
          references: "One academic reference"
        }
      },
      {
        id: 5116,
        title: "Oxfordshire Technology & Software Development Internship",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "12-week practical work experience placed within Oxfordshire software consultancies, digital marketing firms, and regional technology hubs.",
        funding: "£11.44 per hour UK National Living Wage during active industry placement",
        fee: "Covered by HND tuition",
        tuition: "Covered by HND tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://citycollegeoxford.co.uk/student-services/",
        requirements: {
          gpa: "Successful completion of Year 1 HNC Computing units with Merits or Distinctions",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Programming portfolio showcasing web or database project code",
          references: "Endorsement from computing course leader"
        }
      },
      {
        id: 5117,
        title: "Pearson BTEC Level 5 HND in Business Management Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Two-year commercial management diploma preparing students for entry into the final year (Level 6 Top-Up) of a UK Bachelor of Science (BSc) degree.",
        funding: "Modular fee payment plans available",
        fee: "£150 registration fee",
        tuition: "£6,800 per academic year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://citycollegeoxford.co.uk/hnd-in-business/",
        requirements: {
          gpa: "GCE A-Levels or equivalent overseas diploma",
          ielts: "IELTS 5.5 overall",
          gre: "Not required",
          papers: "Statement of purpose detailing business administration interests",
          references: "One referee"
        }
      },
      {
        id: 5118,
        title: "Oxford University City Academic Top-Up Bursary",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Transition grant assisting graduating HND students progressing into bachelor's honours degree top-up programs at partner UK universities.",
        funding: "£1,000 direct transition grant applied toward top-up university enrollment fees",
        fee: "£0",
        tuition: "Standard partner university top-up fees apply",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://citycollegeoxford.co.uk/progression/",
        requirements: {
          gpa: "Graduation from City College Oxford HND with overall Merit/Distinction profile",
          ielts: "IELTS 6.0/6.5 for university entry",
          gre: "Not required",
          papers: "Conditional top-up offer letter from a recognized UK university",
          references: "College principal recommendation"
        }
      },
      {
        id: 5119,
        title: "Pearson BTEC Level 5 HND in Healthcare Practice Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Two-year diploma delivering rigorous clinical foundation in public health epidemiology, healthcare policy, health informatics, and physiological monitoring.",
        funding: "Self-funded and employer sponsorship options available",
        fee: "£150 registration fee",
        tuition: "£7,000 per academic year",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://citycollegeoxford.co.uk/hnd-in-healthcare/",
        requirements: {
          gpa: "Level 3 qualification in health, science, or general subjects",
          ielts: "IELTS 5.5 overall",
          gre: "Not required",
          papers: "Clean Enhanced DBS check and health clearance",
          references: "Two references"
        }
      },
      {
        id: 5120,
        title: "City College Oxford Digital Innovation Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "One-year post-HND technology fellowship providing studio lab access and mentoring for developers building open-source educational software.",
        funding: "£3,000 project development grant and computing laboratory resources",
        fee: "£0",
        tuition: "£0",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://citycollegeoxford.co.uk/research/",
        requirements: {
          gpa: "HND Computing distinction profile or recent graduate",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Technical software development brief and GitHub code repository link",
          references: "Two academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2211,
        name: "Dr. Farooq Ahmad",
        title: "Principal & Director of Academic Affairs",
        department: "Academic Leadership",
        topics: ["Higher National Curriculum Design", "Vocational Progression Pathways", "Educational Quality Assurance"],
        summary: "Dr. Farooq Ahmad leads City College Oxford, specializing in higher vocational education frameworks, Pearson Edexcel standards verification, and university top-up articulation agreements across the UK.",
        website: "https://citycollegeoxford.co.uk/about-us/",
        source: "https://citycollegeoxford.co.uk/about-us/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2212,
        name: "Sajjad Hussain",
        title: "Head of Computing and Information Technology",
        department: "Faculty of Computing",
        topics: ["Cybersecurity Defense Protocols", "Cloud Database Optimization", "Object-Oriented Programming"],
        summary: "Sajjad Hussain coordinates computing curriculum and technical laboratories, researching practical network defense protocols, distributed database systems, and full-stack software development methodologies.",
        website: "https://citycollegeoxford.co.uk/faculty/",
        source: "https://citycollegeoxford.co.uk/faculty/",
        recruiting: "Not verified",
        subject: "computer-science"
      },
      {
        id: 2213,
        name: "Elizabeth Davies",
        title: "Senior Lecturer in Health & Social Care",
        department: "Department of Healthcare Practice",
        topics: ["Healthcare Quality Standards", "Public Health Interventions", "Community Care Ethics"],
        summary: "Elizabeth Davies instructs in healthcare practice and health informatics, examining community health disparities, clinical governance standards, and patient-centred multidisciplinary care models.",
        website: "https://citycollegeoxford.co.uk/faculty/",
        source: "https://citycollegeoxford.co.uk/faculty/",
        recruiting: "Not verified",
        subject: "biology"
      }
    ]
  },

  // 20. UK: National Extension College (NEC Cambridge)
  {
    institution: "National Extension College (NEC Cambridge)",
    slug: "national-extension-college-nec",
    countryId: "uk",
    countryLabel: "UK",
    sourceRow: 1273,
    location: "Cambridge, Cambridgeshire, UK",
    website: "https://www.nec.ac.uk",
    shortName: "NEC Cambridge",
    badge: "Pioneering Open & Distance Learning",
    overview: "The National Extension College (NEC), founded in 1963 in Cambridge by social innovator Michael Young, is the UK's historic non-profit pioneer of distance learning, offering accredited GCSE, A-Level, and degree-level vocational qualifications with expert one-to-one tutor mentoring to empower independent learners across the globe.",
    lead: "Explore accredited online A-Levels, structured university foundation pathways, and educational access bursaries at the historic National Extension College in Cambridge.",
    description: "National Extension College (NEC Cambridge) accredited online A-Levels, GCSEs, university access diplomas, and distance learning bursaries.",
    quickFacts: {
      type: "Registered Educational Charity & Pioneer Distance Learning College",
      campus: "The Michael Young Centre, Purbeck Road, Cambridge, UK",
      accreditation: "Pearson Edexcel / AQA / OCR / Cambridge Assessment International Education",
      admissions: "Open flexible year-round enrollment with no geographic constraints",
      language: "English (CEFR B2 / IELTS 6.0 recommended for advanced study)",
      aid: "NEC Educational Access Bursary Fund & Charitable Hardship Grants"
    },
    strengths: [
      "Historic educational charity whose groundbreaking distance pedagogical model served as the prototype for The Open University",
      "Official examination centre partnerships across the UK ensuring seamless exam entry and practical lab endorsements",
      "Personal subject-specialist tutors providing one-to-one formative assignment feedback throughout each course",
      "Extensive curriculum of 30+ accredited online A-Level and GCSE qualifications accepted by Russell Group universities"
    ],
    programs: [
      { title: "Structured Online A-Level Program in Mathematics & Further Mathematics", level: "Advanced Level Qualification (A-Level)", desc: "Two-year distance program with individual tutor support covering pure mathematics, mechanics, statistical distributions, and complex calculus." },
      { title: "Structured Online A-Level in Physics, Chemistry & Biology", level: "Advanced Level Qualification (A-Level)", desc: "Rigorous science A-Levels including optional laboratory practical endorsement residential sessions at UK university laboratories." },
      { title: "NEC University Access & Academic Bridging Curriculum", level: "Higher Education Foundation Diploma", desc: "Specialized bridging courses developing critical writing, academic research methodology, and statistical analysis for adult university entrants." }
    ],
    opportunities: [
      {
        id: 5121,
        title: "NEC Michael Young Memorial Educational Access Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "Need-based charitable bursary funding up to 100% of course enrollment fees for students facing significant financial hardship or health barriers.",
        funding: "Full or partial tuition fee coverage (valued up to £1,200 per A-Level course)",
        fee: "£0 application fee",
        tuition: "Standard course fees range from £695 to £1,195 per subject",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.nec.ac.uk/financial-support/",
        requirements: {
          gpa: "Demonstrated commitment to independent study; open educational access policy",
          ielts: "English language competence sufficient for GCE study",
          gre: "Not required",
          papers: "Income verification statement and 400-word personal impact essay",
          references: "One referee from an educator, employer, or community leader"
        }
      },
      {
        id: 5122,
        title: "Online GCE A-Level Mathematics Complete Curriculum Enrolment",
        type: "Course",
        subject: "mathematics",
        subjects: ["mathematics", "physics"],
        desc: "Complete Edexcel/AQA accredited distance A-Level with comprehensive course portal access, 12 tutor-marked assignments, and dedicated exam booking support.",
        funding: "Flexible monthly installment payment plans available without interest",
        fee: "£0 registration fee",
        tuition: "£895 full course tuition (including tutor support for up to 24 months)",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.nec.ac.uk/courses/a-level-maths/",
        requirements: {
          gpa: "GCSE Mathematics at Grade 6/B or international equivalent",
          ielts: "English B2 proficiency",
          gre: "Not required",
          papers: "Enrollment registration",
          references: "Not required"
        }
      },
      {
        id: 5123,
        title: "Cambridge University Laboratory Practical Science Endorsement",
        type: "Internship",
        subject: "physics",
        subjects: ["physics", "chemistry"],
        desc: "Intensive 4-day residential hands-on laboratory practical sessions held at partner university labs in Cambridge to achieve the mandatory A-Level Practical Endorsement.",
        funding: "Subsidized lab accommodation bursaries available for eligible bursary recipients",
        fee: "Included in lab booking fee",
        tuition: "£950 comprehensive lab endorsement fee",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.nec.ac.uk/exams-and-assessment/practical-endorsements/",
        requirements: {
          gpa: "Active enrollment in NEC A-Level Biology, Chemistry, or Physics course",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Completion of preliminary theoretical lab safety units",
          references: "Tutor recommendation"
        }
      },
      {
        id: 5124,
        title: "Online GCE A-Level Computer Science Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Accredited distance learning curriculum covering Python programming, Boolean algebra, computational complexity, networking protocols, and a practical coding project.",
        funding: "Payment installment plans available",
        fee: "£0",
        tuition: "£945 complete course fee",
        deadline: "2027-10-15",
        deadlineText: "October 15, 2027",
        source: "https://www.nec.ac.uk/courses/a-level-computer-science/",
        requirements: {
          gpa: "GCSE in Computer Science or Mathematics at Grade 5/C or higher",
          ielts: "English B2",
          gre: "Not required",
          papers: "Course registration form",
          references: "Not required"
        }
      },
      {
        id: 5125,
        title: "NEC Women in STEM Academic Advancement Grant",
        type: "Grant",
        subject: "physics",
        subjects: ["physics", "engineering"],
        desc: "Philanthropic grant funding science and mathematics A-Level course fees for women returning to education to pursue STEM university degrees.",
        funding: "£1,000 grant per science subject applied directly against course and exam fees",
        fee: "£0",
        tuition: "Covers up to full course cost",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.nec.ac.uk/financial-support/",
        requirements: {
          gpa: "Open to female students aged 19+ returning to higher education",
          ielts: "English B2",
          gre: "Not required",
          papers: "Statement of career ambition in engineering, physics, or computing",
          references: "One reference"
        }
      },
      {
        id: 5126,
        title: "Online GCE A-Level Environmental Science Enrolment",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Comprehensive distance curriculum examining biophysical ecosystems, atmospheric physics, renewable energy systems, and global conservation governance.",
        funding: "Low-cost monthly payment options",
        fee: "£0",
        tuition: "£850 complete course fee",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.nec.ac.uk/courses/a-level-environmental-science/",
        requirements: {
          gpa: "GCSE Science or Geography at Grade 4/C or above",
          ielts: "English B2",
          gre: "Not required",
          papers: "Enrollment form",
          references: "Not required"
        }
      },
      {
        id: 5127,
        title: "Michael Young Distance Learning Pedagogical Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Research fellowship examining digital asynchronous pedagogy, AI tutoring interfaces, and educational equity for non-traditional adult learners.",
        funding: "£5,000 research stipend and archive access at Cambridge libraries",
        fee: "£0",
        tuition: "£0",
        deadline: "2027-11-01",
        deadlineText: "November 1, 2027",
        source: "https://www.nec.ac.uk/about-us/",
        requirements: {
          gpa: "Postgraduate degree in Education, Digital Pedagogy, or Social Sciences",
          ielts: "English C1",
          gre: "Not required",
          papers: "8-page research monograph proposal on distance educational accessibility",
          references: "Two academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2214,
        name: "Dr. Esther Chesterman",
        title: "Chief Executive Officer",
        department: "Executive Leadership",
        topics: ["Distance Learning Pedagogy", "Adult Education Inclusion", "Vocational Qualifications Policy"],
        summary: "Dr. Esther Chesterman leads the National Extension College as CEO, championing progressive distance learning methodologies, national qualification reform, and systemic digital inclusion for non-traditional adult scholars across the UK.",
        website: "https://www.nec.ac.uk/about-us/our-team/",
        source: "https://www.nec.ac.uk/about-us/our-team/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2215,
        name: "Ros Morpeth OBE",
        title: "Former Chief Executive & Vice President",
        department: "Board of Trustees",
        topics: ["Open Educational Access", "Prisoner Education Rehabilitation", "Charitable Education Governance"],
        summary: "Ros Morpeth OBE has dedicated over four decades to expanding distance educational access for disenfranchised populations, including incarcerated learners and isolated adult students, receiving an OBE for services to education.",
        website: "https://www.nec.ac.uk/about-us/our-team/",
        source: "https://www.nec.ac.uk/about-us/our-team/",
        recruiting: "Not verified",
        subject: "social-sciences"
      },
      {
        id: 2216,
        name: "Ian Simpson",
        title: "Lead Tutor in Mathematics and Further Mathematics",
        department: "Faculty of Mathematics",
        topics: ["Asynchronous Mathematical Tutoring", "Calculus Visualization", "STEM Online Pedagogy"],
        summary: "Ian Simpson oversees distance mathematics pedagogy at NEC, researching formative digital assessment methods, visual conceptualization of calculus, and distance mentorship in advanced STEM disciplines.",
        website: "https://www.nec.ac.uk/about-us/our-tutors/",
        source: "https://www.nec.ac.uk/about-us/our-tutors/",
        recruiting: "Not verified",
        subject: "mathematics"
      }
    ]
  }
];
