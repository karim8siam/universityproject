/**
 * Batch 34 - Part 2: Universities 11 to 20 (Total Unis 452 to 461)
 * Italy (3), USA (4), UK (3)
 * Opp IDs: 3168 to 3237 (70 opportunities)
 * Faculty IDs: 1377 to 1406 (30 faculty members)
 */

export const batch34Part2Universities = [
  // 11. Italy: Carpigiani Gelato University
  {
    institution: "Carpigiani Gelato University",
    shortName: "Carpigiani Gelato University",
    slug: "carpigiani-gelato-university-bologna",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Anzola dell'Emilia, Bologna, Italy",
    website: "https://www.gelatouniversity.com",
    sourceRow: 447,
    headline: "Carpigiani Gelato University: Food Chemistry, Artisan Gelato & Dairy Science Guide",
    overview: "Carpigiani Gelato University is the premier global institution dedicated to training professionals in artisanal gelato production, food science chemistry, thermal engineering, sensory analysis, and international gelateria management.",
    description: "Comprehensive guide to master courses, food technology research, and international professional certifications at Carpigiani Gelato University in Bologna, Italy.",
    heroEyebrow: "Bologna Food Valley · Artisan Gelato & Food Tech Academy",
    tuitionText: "Tuition for professional diploma modules typically ranges from €1,200 to €4,500 depending on specialization level (Basic, Intermediate, Advanced, and Master). Culinary entrepreneurship stipends and industry equipment grants are available for international scholars.",
    admissions: {
      masters: "Secondary school diploma or recognized undergraduate degree in food science, hospitality, culinary arts, or chemistry for advanced master diplomas.",
      phd: "Not offering independent doctoral credentials; operates applied research laboratories in partnership with regional universities across Emilia-Romagna.",
      language: "Proficiency in English or Italian (courses offered in multiple languages including English, Italian, Spanish, and French).",
      proposal: "Statement of career ambition detailing culinary business plans or dairy technology focus.",
      appFee: "€150 registration and workshop lab materials fee.",
      documents: "Curriculum vitae, academic credentials, identity document/passport, and proof of food safety hygiene awareness."
    },
    opportunities: [
      {
        id: 3168,
        title: "Artisan Gelato Master Course International Grant",
        type: "Scholarship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "€2,000 tuition reduction award",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€150 registration fee",
        tuition: "Subsidizes specialized master training in Emilia-Romagna",
        source: "https://www.gelatouniversity.com/en/courses",
        desc: "Merit award supporting culinary chemists and international gelato entrepreneurs entering the four-week comprehensive Gelato Pioneer certification.",
        requirements: {
          gpa: "Prior diploma or relevant background in hospitality, culinary arts, or chemistry",
          ielts: "English B2 proficiency equivalent or Italian language certificate",
          gre: "Not required",
          papers: "Culinary business concept or food preservation proposal (600 words)",
          references: "One professional culinary or academic recommendation"
        }
      },
      {
        id: 3169,
        title: "Master in Food Technology & Gelato Science",
        type: "Master's",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "Laboratory assistantships with Emilia-Romagna food research centers",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€150 registration fee",
        tuition: "€4,200 total program tuition",
        source: "https://www.gelatouniversity.com/en/courses/complete-path",
        desc: "Intensive applied postgraduate program exploring balancing techniques, freezing curve thermodynamics, fat-protein emulsification, and functional sugars.",
        requirements: {
          gpa: "Bachelor's degree in chemistry, biology, food engineering, or culinary arts",
          ielts: "IELTS 6.0 or verified English fluency",
          gre: "Not required",
          papers: "Technical essay on dairy rheology or alternative sweetener dynamics",
          references: "Two academic or industry references"
        }
      },
      {
        id: 3170,
        title: "Plant-Based & Vegan Frozen Dessert Science Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "€1,500 research stipend and laboratory access",
        status: "Open",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027",
        fee: "€150 registration fee",
        tuition: "Fully covered research placement",
        source: "https://www.gelatouniversity.com/en/about-us",
        desc: "Research fellowship investigating plant-derived hydrocolloids, oat-pea protein matrices, and low-glycemic freezing formulations.",
        requirements: {
          gpa: "Minimum 3.0/4.0 in food science or biochemistry",
          ielts: "English B2 or Italian equivalent",
          gre: "Not required",
          papers: "Research brief on plant-based colloidal stability",
          references: "One academic faculty letter"
        }
      },
      {
        id: 3171,
        title: "Postgraduate Diploma in Food Service Operations & Gelato Retail Management",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "Small business entrepreneurship grants available",
        status: "Open",
        deadline: "2027-03-25",
        deadlineText: "March 25, 2027",
        fee: "€150 registration fee",
        tuition: "€3,800 full tuition",
        source: "https://www.gelatouniversity.com/en/courses",
        desc: "Curriculum preparing managers to design cold chain distribution, manage HACCP protocols, assess unit economics, and launch franchise systems.",
        requirements: {
          gpa: "Recognized post-secondary diploma or bachelor's degree",
          ielts: "English B2 proficiency",
          gre: "Not required",
          papers: "Business feasibility study of 1,000 words",
          references: "One professional reference"
        }
      },
      {
        id: 3172,
        title: "Advanced Thermal Dynamics & Freezing Machinery Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        funding: "€900 monthly industrial training allowance",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "Zero tuition; paid industrial work-integrated learning",
        source: "https://www.gelatouniversity.com/en/about-us/carpigiani",
        desc: "Engineering internship studying batch freezer compressors, scraping blade fluid dynamics, and thermodynamic efficiency in industrial chillers.",
        requirements: {
          gpa: "Enrollment or completion of mechanical or chemical engineering degree",
          ielts: "Fluent Italian or English",
          gre: "Not required",
          papers: "Statement of technical interest in cryogenic and cooling engineering",
          references: "One engineering professor recommendation"
        }
      },
      {
        id: 3173,
        title: "Artisanal Dairy Fermentation & Pastry Science Certificate",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Italian culinary federation partial awards",
        status: "Open",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        fee: "€150 application fee",
        tuition: "€2,600 course fee",
        source: "https://www.gelatouniversity.com/en/courses",
        desc: "Applied course focusing on lactic fermentation, cultured butter, probiotic ice creams, and Italian confectionery paste crystallization.",
        requirements: {
          gpa: "Culinary diploma or biological sciences credential",
          ielts: "B2 English or Italian",
          gre: "Not required",
          papers: "Portfolio of culinary experience or statement of interest",
          references: "One referee contact"
        }
      },
      {
        id: 3174,
        title: "Sensory Analysis & Gelato Gastronomy Summer Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "€1,200 travel and accommodation stipend",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€100 registration fee",
        tuition: "Fully subsidized laboratory coursework",
        source: "https://www.gelatouniversity.com/en/courses",
        desc: "Two-week intensive research workshop exploring quantitative descriptive analysis, texture profiling, and olfactory perception in frozen confections.",
        requirements: {
          gpa: "Enrolled in food science, gastronomy, or sensory psychology",
          ielts: "English B2 level",
          gre: "Not required",
          papers: "Letter of motivation detailing sensory evaluation interests",
          references: "One academic referee"
        }
      }
    ],
    researchers: [
      {
        id: 1377,
        name: "Dr. Gianpaolo Valli",
        title: "Senior Gelato Master & Food Chemist",
        subject: "chemistry",
        topics: ["Thermal Emulsification", "Sugar Crystallization", "Cryogenic Balancing", "Food Rheology"],
        source: "https://www.gelatouniversity.com/en/teachers",
        summary: "Dr. Valli is one of Italy's foremost authorities on gelato chemistry, lecturing globally on sugar thermodynamics and recipe calculation."
      },
      {
        id: 1378,
        name: "Chef Alessandro Racca",
        title: "Pastry & Gelato Technical Director",
        subject: "biology",
        topics: ["Dairy Science", "Fermentation", "Pastry Chemistry", "Frozen Dessert Formulation"],
        source: "https://www.gelatouniversity.com/en/teachers",
        summary: "Chef Racca directs advanced confectionery development, researching the interaction of dairy fats with plant proteins in sub-zero applications."
      },
      {
        id: 1379,
        name: "Dr. Kaori Ito",
        title: "International Training & Sensory Analysis Coordinator",
        subject: "social-sciences",
        topics: ["Sensory Analysis", "Cross-Cultural Palates", "Food Heritage", "Gastronomic Tourism"],
        source: "https://www.gelatouniversity.com/en/teachers",
        summary: "Dr. Ito coordinates international educational modules, focusing on comparative sensory perception and consumer behavior in Asian and European food markets."
      }
    ]
  },

  // 12. Italy: CUOA Business School
  {
    institution: "CUOA Business School",
    shortName: "CUOA Business School",
    slug: "cuoa-business-school-vicenza",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Altavilla Vicentina, Vicenza, Italy",
    website: "https://www.cuoa.it",
    sourceRow: 457,
    headline: "CUOA Business School: Executive MBA, Lean Management & Digital Supply Chain Guide",
    overview: "CUOA Business School is one of Italy's oldest and most prestigious management academies, situated in the historic Villa Valmarana Morosini in Veneto, renowned for lean manufacturing, operations management, and SME internationalization.",
    description: "Explore master's degrees, full-time MBAs, executive doctorates, and international leadership programs at CUOA Business School in Vicenza, Italy.",
    heroEyebrow: "Veneto Management Academy · Lean Enterprise & Executive MBA",
    tuitionText: "Tuition ranges from €12,000 for specialized master's programs to €28,000 for the Executive MBA. Merit scholarships, regional Fondazione CUOA grants, and corporate sponsorships cover up to 50% of tuition fees.",
    admissions: {
      masters: "Recognized Bachelor's degree from an accredited university; minimum 2 years of work experience for specialized executive masters.",
      phd: "Executive DBA candidates require a Master's degree and at least 5 years of significant managerial responsibility.",
      language: "B2/C1 English proficiency (TOEFL iBT 85+ or IELTS 6.5) for English-taught master programs.",
      proposal: "Curriculum vitae with motivation letter outlining managerial impact and strategic leadership objectives.",
      appFee: "€100 non-refundable application fee.",
      documents: "Undergraduate degree transcripts, official graduation diploma, two professional letters of recommendation, and identity documentation."
    },
    opportunities: [
      {
        id: 3175,
        title: "CUOA International Executive MBA Merit Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "€10,000 tuition reduction award",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "€100 application fee",
        tuition: "Subsidizes 2027-2028 Executive MBA tuition in Vicenza",
        source: "https://www.cuoa.it/ita/formazione/executive-mba",
        desc: "Awarded to exceptional corporate leaders and international managers with high academic records enrolling in the accredited CUOA Executive MBA program.",
        requirements: {
          gpa: "Bachelor's degree with strong academic record and 3+ years managerial experience",
          ielts: "IELTS 6.5 or TOEFL 85+",
          gre: "CUOA admissions test or GMAT accepted",
          papers: "Essay on managing digital transformation in manufacturing SMEs",
          references: "Two professional reference letters from senior executives"
        }
      },
      {
        id: 3176,
        title: "Master in Lean Operations & Supply Chain Management",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "Paid corporate internships with leading Veneto manufacturing enterprises",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "€100 application fee",
        tuition: "€15,500 total tuition fee",
        source: "https://www.cuoa.it/ita/formazione/master-full-time",
        desc: "Full-time 12-month program focusing on Lean Six Sigma methodology, digital supply chain optimization, Industry 4.0 shopfloor automation, and procurement.",
        requirements: {
          gpa: "Degree in engineering, economics, or scientific discipline",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Motivation letter demonstrating commitment to operational excellence",
          references: "One academic or professional reference"
        }
      },
      {
        id: 3177,
        title: "Master in Finance, Risk Management & Digital Banking",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Bank foundation partial scholarships available",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "€100 application fee",
        tuition: "€14,800 tuition",
        source: "https://www.cuoa.it/ita/formazione/master-full-time/master-finance-banking",
        desc: "Specialized master covering quantitative risk modeling, Basel IV regulatory frameworks, fintech analytics, and corporate capital restructuring.",
        requirements: {
          gpa: "Undergraduate degree in economics, finance, mathematics, or statistics",
          ielts: "IELTS 6.5 or equivalent",
          gre: "GMAT or CUOA aptitude evaluation",
          papers: "Statement of purpose detailing interest in digital financial systems",
          references: "Two recommendations"
        }
      },
      {
        id: 3178,
        title: "CUOA Executive DBA Research Fellowship",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "€5,000 annual research grant and company project sponsorship",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "€150 application fee",
        tuition: "€9,000 per academic year",
        source: "https://www.cuoa.it/ita/formazione/executive-mba/executive-dba",
        desc: "Three-year executive doctorate combining doctoral-level applied research with strategic organizational intervention in corporate governance and innovation.",
        requirements: {
          gpa: "Master's degree (MSc or MBA) with at least 5 years of senior management practice",
          ielts: "IELTS 7.0 or professional English fluency",
          gre: "Not required",
          papers: "Applied doctoral research proposal (2,500 words) addressing an organizational challenge",
          references: "Two senior corporate or academic endorsements"
        }
      },
      {
        id: 3179,
        title: "Master in Sustainable Business & ESG Strategy",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "Green economy tuition discounts up to €3,000",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€100 application fee",
        tuition: "€13,500 total tuition",
        source: "https://www.cuoa.it/ita/formazione/master-full-time",
        desc: "Prepares sustainability officers to navigate CSRD reporting, circular economy business models, carbon accounting, and stakeholder governance.",
        requirements: {
          gpa: "Bachelor's degree in any discipline",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Essay on ESG materiality assessment in European supply chains",
          references: "One academic and one professional letter"
        }
      },
      {
        id: 3180,
        title: "Digital Transformation & AI Strategy Corporate Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "Full tuition waiver and executive project stipend",
        status: "Open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "Free application",
        tuition: "Sponsored by Veneto Tech Consortium",
        source: "https://www.cuoa.it/ita/formazione/executive-education",
        desc: "Fellowship for tech professionals implementing generative AI, machine learning predictive models, and cloud architectures in manufacturing.",
        requirements: {
          gpa: "Degree in computer science, software engineering, or data science",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Project proposal on AI-driven supply chain anomaly detection",
          references: "Two professional endorsements"
        }
      },
      {
        id: 3181,
        title: "CUOA Summer School in International Business Law & Governance",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Early enrollment discount €500",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "€50 registration fee",
        tuition: "€2,200 intensive two-week tuition",
        source: "https://www.cuoa.it/ita/formazione/executive-education",
        desc: "Intensive summer program examining cross-border M&A, European corporate law, IP protection, and international arbitration.",
        requirements: {
          gpa: "Current undergraduate or graduate student in law, business, or political science",
          ielts: "B2 English proficiency",
          gre: "Not required",
          papers: "Curriculum vitae and motivation letter",
          references: "One academic referee"
        }
      }
    ],
    researchers: [
      {
        id: 1380,
        name: "Prof. Alberto Felice De Toni",
        title: "Scientific Director & Professor of Operations Strategy",
        subject: "engineering",
        topics: ["Operations Strategy", "Complexity Management", "Lean Production", "Innovation Systems"],
        source: "https://www.cuoa.it/ita/chi-siamo/faculty",
        summary: "Prof. De Toni is an acclaimed authority on industrial complexity, organizational cybernetics, and lean manufacturing systems in Europe."
      },
      {
        id: 1381,
        name: "Dr. Andrea Furlan",
        title: "Dean of Faculty & Professor of Supply Chain Management",
        subject: "social-sciences",
        topics: ["Supply Chain Integration", "Lean Transformation", "Industrial Clusters", "Strategic Procurement"],
        source: "https://www.cuoa.it/ita/chi-siamo/faculty",
        summary: "Dr. Furlan leads research in buyer-supplier collaboration, lean shopfloor deployment, and agile operations across northern Italian manufacturing."
      },
      {
        id: 1382,
        name: "Dr. Laura Baccelloni",
        title: "Head of Executive Education & Corporate Governance Specialist",
        subject: "social-sciences",
        topics: ["Family Business Governance", "Executive Leadership", "Organizational Behavior", "Talent Management"],
        source: "https://www.cuoa.it/ita/chi-siamo/faculty",
        summary: "Dr. Baccelloni investigates leadership continuity in family-owned conglomerates, board composition, and executive transition dynamics."
      }
    ]
  },

  // 13. Italy: Facoltà Teologica Pugliese
  {
    institution: "Facoltà Teologica Pugliese",
    shortName: "Facoltà Teologica Pugliese",
    slug: "facolta-teologica-pugliese",
    countryId: "italy",
    countryLabel: "Italy",
    location: "Bari & Molfetta, Apulia, Italy",
    website: "https://www.facoltateologica.it",
    sourceRow: 464,
    headline: "Facoltà Teologica Pugliese: Mediterranean Hermeneutics, Patristics & Philosophy Guide",
    overview: "Facoltà Teologica Pugliese is a pontifical academic institution established by the Holy See in Apulia, with major campuses in Bari and Molfetta, celebrated for ecumenical theology, Patristic scholarship, and Mediterranean dialogue.",
    description: "Academic guide to baccalaureate, licentiate, and doctoral degrees in sacred theology and ecumenism at Facoltà Teologica Pugliese in Italy.",
    heroEyebrow: "Apulia Pontifical Faculty · Mediterranean Hermeneutics & Ecumenical Studies",
    tuitionText: "Academic tuition is highly accessible, averaging €1,200 to €2,400 annually for canonical degree programs. Diocesan bursaries, Holy See international student grants, and regional study scholarships are provided.",
    admissions: {
      masters: "Ecclesiastical Baccalaureate in Theology or equivalent academic degree in philosophy or humanities for Licentiate admission.",
      phd: "Canonical Licentiate in Sacred Theology (S.T.L.) with a grade of Magna cum Laude (or equivalent minimum 8.5/10).",
      language: "Italian language fluency (B2/C1) and working knowledge of classical languages (Latin, Biblical Greek, or Hebrew) for advanced theological research.",
      proposal: "Doctoral research prospectus detailing bibliographic sources and hermeneutical methodology.",
      appFee: "€80 canonical administrative registration fee.",
      documents: "Ecclesiastical or civil academic transcripts, baptismal or civil identification certificate, and letter of presentation from ecclesiastical authority or academic supervisor."
    },
    opportunities: [
      {
        id: 3182,
        title: "Pontifical Ecumenical Dialogue Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "€2,500 annual tuition and board contribution",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "€80 application fee",
        tuition: "Full coverage of canonical licentiate tuition in Bari",
        source: "https://www.facoltateologica.it/borse-di-studio",
        desc: "Granted to graduate scholars conducting research on Orthodox-Catholic ecumenism, Mediterranean interreligious ethics, and Byzantine-Latin theology.",
        requirements: {
          gpa: "Canonical Baccalaureate in Sacred Theology with Magna cum Laude",
          ielts: "Italian B2/C1 proficiency; working Greek or Latin",
          gre: "Not required",
          papers: "Research essay on Eastern Mediterranean conciliar documents",
          references: "Two letters of recommendation from ecclesiastical or theological faculty"
        }
      },
      {
        id: 3183,
        title: "Licentiate in Sacred Theology (S.T.L.) in Pastoral Ecumenism",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Diocesan foundation housing subsidies available",
        status: "Open",
        deadline: "2027-03-30",
        deadlineText: "March 30, 2027",
        fee: "€80 application fee",
        tuition: "€1,800 per academic year",
        source: "https://www.facoltateologica.it/offerta-formativa/licenza",
        desc: "Two-year canonical licentiate focusing on ecumenical theology, interfaith dialogue, missiology in contemporary Europe, and historical ecclesiology.",
        requirements: {
          gpa: "Bachelor or Baccalaureate in Sacred Theology (S.T.B.)",
          ielts: "Italian language proficiency",
          gre: "Not required",
          papers: "Synthesis paper on Patristic ecclesiology",
          references: "One academic dean reference"
        }
      },
      {
        id: 3184,
        title: "Doctorate in Sacred Theology (S.T.D.) in Patristics & Mediterranean History",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "€6,000 annual doctoral stipend for selected international fellows",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "€100 application fee",
        tuition: "€2,100 annual doctoral fee",
        source: "https://www.facoltateologica.it/offerta-formativa/dottorato",
        desc: "Advanced three-year research degree producing an original dissertation on early Church fathers, medieval Apulian monastic culture, or Greek Patristic exegesis.",
        requirements: {
          gpa: "Licentiate in Sacred Theology (S.T.L.) with minimum grade of 8.5/10",
          ielts: "Italian fluency plus Latin and Ancient Greek proficiency",
          gre: "Not required",
          papers: "Detailed 15-page doctoral research prospectus with bibliography",
          references: "Two letters from theology professors or ecclesiastical superiors"
        }
      },
      {
        id: 3185,
        title: "Baccalaureate in Sacred Theology (S.T.B.) Institutional Cycle",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Full room and board for sponsored seminarians and bursaries for lay students",
        status: "Open",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        fee: "€80 application fee",
        tuition: "€1,500 per academic year",
        source: "https://www.facoltateologica.it/offerta-formativa/baccellierato",
        desc: "Five-year first-cycle canonical degree covering systematic theology, moral theology, Church history, canon law, and fundamental philosophy.",
        requirements: {
          gpa: "High school diploma qualifying for Italian university admission",
          ielts: "Italian B2 proficiency",
          gre: "Not required",
          papers: "Personal statement of motivation",
          references: "Presentation letter from Bishop or academic mentor"
        }
      },
      {
        id: 3186,
        title: "Master in Bioethics, Medical Ethics & Human Vulnerability",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Regional healthcare ethics bursaries available",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€80 application fee",
        tuition: "€1,600 total tuition",
        source: "https://www.facoltateologica.it/offerta-formativa/master",
        desc: "Interdisciplinary postgraduate diploma analyzing ethical questions in genetics, clinical care, palliative treatment, and artificial intelligence ethics.",
        requirements: {
          gpa: "Undergraduate degree in medicine, philosophy, law, nursing, or theology",
          ielts: "Italian language fluency",
          gre: "Not required",
          papers: "Essay on clinical ethics dilemmas in healthcare systems",
          references: "One professional reference"
        }
      },
      {
        id: 3187,
        title: "Summer Institute in Medieval Byzantine-Latin Epigraphy & Art",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "Apulian cultural heritage travel grants",
        status: "Open",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        fee: "€50 registration fee",
        tuition: "€850 inclusive of site visits in Bari and Otranto",
        source: "https://www.facoltateologica.it/eventi",
        desc: "Three-week summer seminar inspecting medieval manuscripts, crypt frescoes, and epigraphic records bridging Byzantine and Norman-Latin traditions.",
        requirements: {
          gpa: "Enrolled in humanities, art history, classical studies, or archaeology",
          ielts: "Italian or English working proficiency",
          gre: "Not required",
          papers: "Brief letter of motivation",
          references: "One faculty reference"
        }
      },
      {
        id: 3188,
        title: "Research Fellowship in Nicolaian Studies & Eastern Church Relations",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "€4,000 research stipend and archive access at Basilica San Nicola",
        status: "Open",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        fee: "Free application",
        tuition: "Fully subsidized research placement",
        source: "https://www.facoltateologica.it/ricerca",
        desc: "Postdoctoral or senior doctoral fellowship exploring the historical, liturgical, and ecumenical legacy of Saint Nicholas of Myra and the Bari ecumenical seat.",
        requirements: {
          gpa: "Master's or Licentiate in theology, history, or Byzantine studies",
          ielts: "Proficiency in Italian and Greek or Latin",
          gre: "Not required",
          papers: "Project outline on Mediterranean pilgrimage archives",
          references: "Two academic faculty letters"
        }
      }
    ],
    researchers: [
      {
        id: 1383,
        name: "Prof. Mons. Vito Angiuli",
        title: "Grand Chancellor & Professor of Pastoral Theology",
        subject: "social-sciences",
        topics: ["Pastoral Theology", "Ecumenical Dialogue", "Catechetics", "Mediterranean Ecclesiology"],
        source: "https://www.facoltateologica.it/docenti",
        summary: "Mons. Angiuli oversees academic governance, publishing widely on pastoral hermeneutics, ecclesial renewal, and South Italian religious sociology."
      },
      {
        id: 1384,
        name: "Prof. P. Giovanni Distante",
        title: "Professor of Eastern Patristics & Rector of Basilica San Nicola",
        subject: "social-sciences",
        topics: ["Eastern Patristics", "Byzantine Liturgy", "Nicolaian Theology", "Ecumenism"],
        source: "https://www.facoltateologica.it/docenti",
        summary: "Father Distante is an eminent Dominican theologian leading historical and liturgical scholarship on Orthodox-Catholic relations and Patristic exegesis."
      },
      {
        id: 1385,
        name: "Prof.ssa Lorella Congedo",
        title: "Professor of Moral Theology & Bioethics",
        subject: "social-sciences",
        topics: ["Fundamental Moral Theology", "Clinical Bioethics", "End-of-Life Ethics", "Vulnerability Studies"],
        source: "https://www.facoltateologica.it/docenti",
        summary: "Prof. Congedo teaches moral theology, directing research on human dignity, clinical bioethical consultation, and social vulnerability in medical care."
      }
    ]
  },

  // 14. USA: Antioch University New England
  {
    institution: "Antioch University New England",
    shortName: "Antioch New England",
    slug: "antioch-university-new-england-keene",
    countryId: "usa",
    countryLabel: "United States",
    location: "Keene, New Hampshire, USA",
    website: "https://www.antioch.edu/new-england/",
    sourceRow: 569,
    headline: "Antioch University New England: Environmental Studies, Clinical Psychology & Climate Action",
    overview: "Antioch University New England in Keene, New Hampshire, is a pioneering private graduate institution acclaimed for experiential education, APA-accredited clinical psychology (PsyD), environmental conservation, and climate change resilience.",
    description: "Explore doctoral PsyD programs, MS in Environmental Studies, climate resilience certificates, and scholarships at Antioch University New England in Keene, NH.",
    heroEyebrow: "New England Graduate School · Climate Resilience & Clinical Psychology",
    tuitionText: "Graduate tuition averages $950 to $1,150 per credit hour depending on the program. Doctoral PsyD tuition is approximately $36,000 annually. Antioch Opportunity Grants, Center for Climate Preparedness fellowships, and federal graduate loans are accessible.",
    admissions: {
      masters: "Accredited Bachelor's degree with a minimum cumulative GPA of 3.0; prerequisite courses in life sciences or social sciences depending on department.",
      phd: "PsyD and Environmental PhD require relevant master's or exceptional undergraduate honors, clinical/field background, and an in-person or virtual interview.",
      language: "TOEFL iBT 80 or IELTS 6.5 minimum for non-native English speakers.",
      proposal: "Statement of purpose reflecting social justice values, commitment to environmental stewardship, or clinical therapeutic philosophy.",
      appFee: "$50 online application fee (fee waivers available upon request).",
      documents: "Official post-secondary transcripts, current resume/CV, three letters of recommendation, and personal reflective essay."
    },
    opportunities: [
      {
        id: 3189,
        title: "Center for Climate Preparedness & Resilience Graduate Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "$12,000 annual stipend plus partial tuition award",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "$50 application fee",
        tuition: "Subsidizes MS in Environmental Studies coursework",
        source: "https://www.antioch.edu/new-england/environmental-studies/",
        desc: "Supports graduate students conducting community climate resilience assessments, flood mitigation modeling, and urban forestry planning across New England.",
        requirements: {
          gpa: "Minimum 3.2 GPA in environmental science, geography, or public policy",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required (test-blind policy)",
          papers: "1,000-word statement on municipal climate adaptation strategies",
          references: "Two academic or environmental organization recommendations"
        }
      },
      {
        id: 3190,
        title: "Doctor of Psychology (PsyD) in Clinical Psychology",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Practicum stipends and departmental teaching assistantships",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "$50 application fee",
        tuition: "$36,200 per academic year",
        source: "https://www.antioch.edu/new-england/applied-psychology-family-therapy/psyd-clinical-psychology/",
        desc: "APA-accredited five-year doctoral program emphasizing practitioner-scholar training, social justice, systemic family therapy, and neuropsychological evaluation.",
        requirements: {
          gpa: "Bachelor's or Master's degree in psychology or related field with 3.3+ GPA",
          ielts: "IELTS 7.0 or TOEFL 90",
          gre: "Not required",
          papers: "Personal statement detailing clinical philosophy and reflective autobiography",
          references: "Three letters of recommendation (at least one clinical supervisor)"
        }
      },
      {
        id: 3191,
        title: "MS in Environmental Studies: Conservation Biology",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "Field research grants and conservation NGO assistantships",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$50 application fee",
        tuition: "$28,500 total estimated program cost",
        source: "https://www.antioch.edu/new-england/environmental-studies/ms-environmental-studies/",
        desc: "Prepares conservation biologists in wildlife population modeling, landscape ecology, GIS spatial analysis, and endangered species recovery.",
        requirements: {
          gpa: "Undergraduate degree in biology, ecology, or related natural sciences",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Statement of interest in northeastern biodiversity preservation",
          references: "Two academic faculty letters"
        }
      },
      {
        id: 3192,
        title: "PhD in Environmental Studies: Interdisciplinary Scholarship",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "$15,000 annual research fellowship and tuition remission",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$50 application fee",
        tuition: "$18,000 per academic year",
        source: "https://www.antioch.edu/new-england/environmental-studies/phd-environmental-studies/",
        desc: "Low-residency doctoral program designed for mid-career professionals researching political ecology, environmental justice, food systems, or ecological economics.",
        requirements: {
          gpa: "Master's degree in environmental science, policy, or related field",
          ielts: "IELTS 7.0 or TOEFL 95",
          gre: "Not required",
          papers: "Dissertation research concept paper (1,500 words)",
          references: "Three professional and academic recommendations"
        }
      },
      {
        id: 3193,
        title: "MA in Clinical Mental Health Counseling",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Community mental health clinical training grants",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "$50 application fee",
        tuition: "$27,000 per year",
        source: "https://www.antioch.edu/new-england/applied-psychology-family-therapy/clinical-mental-health-counseling/",
        desc: "CACREP-accredited program preparing licensed professional counselors specializing in trauma therapy, substance use recovery, and multicultural counseling.",
        requirements: {
          gpa: "Bachelor's degree with 3.0 GPA minimum",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Reflective essay on personal and professional counseling readiness",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 3194,
        title: "Post-Master's Certificate in Nature-Based Early Childhood Education",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "Early educator continuing professional awards",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$50 application fee",
        tuition: "$9,500 total certificate cost",
        source: "https://www.antioch.edu/new-england/education/nature-based-early-childhood-education/",
        desc: "Groundbreaking curriculum training educators in forest kindergarten leadership, outdoor pedagogical risk assessment, and child-nature relationship development.",
        requirements: {
          gpa: "Bachelor's or Master's degree in education or early childhood field",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Statement of outdoor education teaching philosophy",
          references: "One professional supervisory letter"
        }
      },
      {
        id: 3195,
        title: "Horace Mann Social Justice Endowed Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "$5,000 one-time tuition credit",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "$50 application fee",
        tuition: "Directly deducted from semester tuition bill",
        source: "https://www.antioch.edu/admissions-aid/financial-aid/",
        desc: "Merit and need award recognizing incoming students who demonstrate proven leadership in advancing marginalized communities or environmental advocacy.",
        requirements: {
          gpa: "Admitted student in any Antioch New England degree program",
          ielts: "Standard admission requirements",
          gre: "Not required",
          papers: "750-word essay detailing social justice leadership impact",
          references: "One community organization leader reference"
        }
      }
    ],
    researchers: [
      {
        id: 1386,
        name: "Dr. Abigail Abrash Walton",
        title: "Co-Director of Center for Climate Preparedness and Resilience",
        subject: "environment",
        topics: ["Climate Resilience", "Environmental Justice", "Organizational Leadership", "Public Policy"],
        source: "https://www.antioch.edu/new-england/faculty/",
        summary: "Dr. Abrash Walton conducts research on municipal climate preparedness, institutional environmental governance, and human rights advocacy."
      },
      {
        id: 1387,
        name: "Dr. Lorraine Mangione",
        title: "Professor of Clinical Psychology & Director of Practicum",
        subject: "social-sciences",
        topics: ["Clinical Supervision", "Psychodynamic Psychotherapy", "Grief and Loss", "Group Psychotherapy"],
        source: "https://www.antioch.edu/new-england/faculty/",
        summary: "Dr. Mangione is an APA fellow researching clinical supervision frameworks, relational psychodynamics, and the creative psychology of mourning."
      },
      {
        id: 1388,
        name: "Dr. Peter Palmiotto",
        title: "Chair of Environmental Studies & Professor of Forest Ecology",
        subject: "biology",
        topics: ["Forest Dynamics", "Tropical Rainforest Ecology", "Conservation Biology", "Silviculture"],
        source: "https://www.antioch.edu/new-england/faculty/",
        summary: "Dr. Palmiotto studies forest regeneration dynamics, tropical biodiversity conservation, and northeastern United States canopy ecology."
      }
    ]
  },

  // 15. USA: Arcadia University - Christiana
  {
    institution: "Arcadia University - Christiana",
    shortName: "Arcadia Christiana Campus",
    slug: "arcadia-university-christiana",
    countryId: "usa",
    countryLabel: "United States",
    location: "Newark, Delaware, USA",
    website: "https://www.arcadia.edu/majors-and-programs/physician-assistant-program",
    sourceRow: 571,
    headline: "Arcadia University Christiana: Top-Ranked Physician Assistant & Health Sciences Guide",
    overview: "Arcadia University's Christiana Campus in Newark, Delaware, is the dedicated healthcare and clinical education center for Arcadia's nationally ranked Physician Assistant (PA) and graduate medical science programs, integrated with ChristianaCare Health System.",
    description: "Explore the ARC-PA accredited Physician Assistant Master of Medical Science (MMS) program, clinical rotations, and admissions at Arcadia Christiana Campus.",
    heroEyebrow: "Delaware Valley Health Sciences · Nationally Ranked Physician Assistant Program",
    tuitionText: "Tuition for the 24-month Master of Medical Science (MMS) in Physician Assistant program is approximately $48,000 per academic year. Health professions scholarships, National Health Service Corps (NHSC) loan repayments, and institutional awards are available.",
    admissions: {
      masters: "Baccalaureate degree from an accredited institution with minimum overall and science GPA of 3.0; completion of anatomy, physiology, chemistry, and genetics.",
      phd: "Christiana campus focuses on clinical graduate degrees (MMS, DPT clinical affiliates); doctoral applicants consult Arcadia main campus.",
      language: "TOEFL iBT 89 or IELTS 6.5 minimum for non-native English speakers.",
      proposal: "CASPA personal narrative describing motivation for healthcare service and clinical teamwork.",
      appFee: "Submitted via CASPA ($179 first designation) plus Arcadia supplemental fee.",
      documents: "Official college transcripts, minimum 200 hours of direct patient care experience (PCE), and three letters of recommendation including one PA/physician."
    },
    opportunities: [
      {
        id: 3196,
        title: "Arcadia Physician Assistant Merit Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "$10,000 tuition remission award",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Submitted via CASPA",
        tuition: "Reduces MMS tuition for top-tier candidates",
        source: "https://www.arcadia.edu/majors-and-programs/physician-assistant-program",
        desc: "Merit award honoring incoming graduate students demonstrating academic excellence, leadership in pre-health societies, and superior patient care records.",
        requirements: {
          gpa: "Undergraduate science GPA of 3.5 or higher",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Optional / Not required",
          papers: "CASPA personal essay and supplemental diversity statement",
          references: "Three letters of recommendation including a practicing PA or MD"
        }
      },
      {
        id: 3197,
        title: "Master of Medical Science (MMS) in Physician Assistant Studies",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "ChristianaCare clinical training stipends and loan forgiveness eligibility",
        status: "Open",
        deadline: "2026-11-01",
        deadlineText: "November 1, 2026",
        fee: "CASPA application fees",
        tuition: "$48,500 per academic year (24-month curriculum)",
        source: "https://www.arcadia.edu/majors-and-programs/physician-assistant-program",
        desc: "Rigorous 24-month medical science program blending didactic clinical medicine, pharmacotherapeutics, and emergency/surgical hospital rotations.",
        requirements: {
          gpa: "Bachelor's degree with 3.0+ minimum overall and science GPA",
          ielts: "TOEFL iBT 89 or IELTS 6.5",
          gre: "Not required",
          papers: "Documented 200+ patient care hours and personal statement",
          references: "Three recommendation letters (including clinical supervisor)"
        }
      },
      {
        id: 3198,
        title: "Rural & Underserved Community Medicine Clinical Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "$7,500 annual tuition grant",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Standard CASPA fee",
        tuition: "Credited toward second-year clinical rotation semesters",
        source: "https://www.arcadia.edu/majors-and-programs/physician-assistant-program",
        desc: "Incentive award for PA candidates committing to clinical clerkships and service in federally designated Health Professional Shortage Areas (HPSAs).",
        requirements: {
          gpa: "Good standing in Arcadia Christiana PA program",
          ielts: "Standard admissions",
          gre: "Not required",
          papers: "Commitment essay outlining goals in community primary care",
          references: "One clinical mentor evaluation"
        }
      },
      {
        id: 3199,
        title: "Arcadia Global Health Clinical Rotation Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "$4,500 international travel and clinical placement subsidy",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "Full elective rotation credit",
        source: "https://www.arcadia.edu/majors-and-programs/physician-assistant-program",
        desc: "Provides PA students opportunities to complete an elective international medical mission or clinical rotation in Latin America, Africa, or Europe.",
        requirements: {
          gpa: "Completion of first-year didactic phase with 3.2+ GPA",
          ielts: "Not applicable for domestic / standard enrollment",
          gre: "Not required",
          papers: "Global health service plan and cultural competency reflection",
          references: "Clinical faculty endorsement"
        }
      },
      {
        id: 3200,
        title: "Dual Degree Master of Public Health & MMS Physician Assistant",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Public health epidemiology assistantships",
        status: "Open",
        deadline: "2026-11-01",
        deadlineText: "November 1, 2026",
        fee: "CASPA application fees",
        tuition: "$46,000 per academic year (30-month dual curriculum)",
        source: "https://www.arcadia.edu/majors-and-programs/dual-degrees/",
        desc: "Three-year integrated curriculum preparing clinical practitioners with advanced competencies in disease surveillance, healthcare management, and biostatistics.",
        requirements: {
          gpa: "Bachelor's degree with 3.2 science and overall GPA",
          ielts: "IELTS 7.0 or TOEFL 90",
          gre: "Not required",
          papers: "Essay addressing public health disparities and clinical interventions",
          references: "Three letters of recommendation"
        }
      },
      {
        id: 3201,
        title: "ChristianaCare Hospital Clinical Immersion Internship",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        funding: "Hospital rotation placement and medical equipment coverage",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free internal application",
        tuition: "Included in standard clinical tuition",
        source: "https://www.arcadia.edu/majors-and-programs/physician-assistant-program",
        desc: "Intensive 6-week clinical internship in trauma surgery, pediatric intensive care, and inpatient oncology at Christiana Hospital.",
        requirements: {
          gpa: "Current second-year Arcadia PA student in good academic standing",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Clinical specialty preference statement",
          references: "Clinical coordinator approval"
        }
      },
      {
        id: 3202,
        title: "Advanced Health Sciences Continuing Clinical Workshop",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Continuing medical education (CME) employer sponsorships",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "$50 registration fee",
        tuition: "$1,400 continuing education fee",
        source: "https://www.arcadia.edu/majors-and-programs/physician-assistant-program",
        desc: "Weekend intensive covering point-of-care ultrasound (POCUS), advanced airway management, and diagnostic pharmacogenomics.",
        requirements: {
          gpa: "Licensed PA, NP, or graduate medical student",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Proof of clinical licensure or graduate enrollment",
          references: "One professional supervisor letter"
        }
      }
    ],
    researchers: [
      {
        id: 1389,
        name: "Dr. Megan E. Selleck",
        title: "Director of Physician Assistant Studies - Delaware Campus",
        subject: "biology",
        topics: ["Clinical Medicine", "PA Education", "Simulation-Based Learning", "Interprofessional Health"],
        source: "https://www.arcadia.edu/profile/faculty-and-staff",
        summary: "Dr. Selleck directs the Christiana PA program, publishing on high-fidelity medical simulation, diagnostic reasoning, and interprofessional clinical training."
      },
      {
        id: 1390,
        name: "Prof. Michael Huber",
        title: "Clinical Assistant Professor & Director of Didactic Education",
        subject: "biology",
        topics: ["Emergency Medicine", "Point-of-Care Ultrasound", "Pharmacology", "Cardiovascular Therapeutics"],
        source: "https://www.arcadia.edu/profile/faculty-and-staff",
        summary: "Prof. Huber specializes in acute inpatient medicine, focusing on ultrasound-guided procedures and emergency medical decision-making."
      },
      {
        id: 1391,
        name: "Dr. Kimberly R. Erickson",
        title: "Associate Professor of Health Sciences & Public Health Epidemiologist",
        subject: "social-sciences",
        topics: ["Public Health Surveillance", "Health Disparities", "Chronic Disease Prevention", "Biostatistics"],
        source: "https://www.arcadia.edu/profile/faculty-and-staff",
        summary: "Dr. Erickson researches health equity in underserved suburban populations, maternal health outcomes, and epidemiological modeling."
      }
    ]
  },

  // 16. USA: Arizona Christian University
  {
    institution: "Arizona Christian University",
    shortName: "Arizona Christian University",
    slug: "arizona-christian-university-glendale",
    countryId: "usa",
    countryLabel: "United States",
    location: "Glendale, Arizona, USA",
    website: "https://www.azcu.edu",
    sourceRow: 573,
    headline: "Arizona Christian University: Liberal Arts, Cultural Research & Behavioral Science Guide",
    overview: "Arizona Christian University (ACU) is an accredited private university in Glendale, Arizona, celebrated for its Center for Christian Cultural Research, competitive Firestorm athletics, behavioral health programs, and teacher education.",
    description: "Explore bachelor's and master's degree pathways, cultural research fellowships, and merit scholarships at Arizona Christian University in Glendale, AZ.",
    heroEyebrow: "Greater Phoenix Liberal Arts · Cultural Research & Behavioral Health",
    tuitionText: "Undergraduate annual tuition is approximately $32,000. Graduate tuition averages $550 to $700 per credit hour. Over 90% of students receive financial aid, including Presidential Scholarships, Arizona Christian grants, and athletic fellowships.",
    admissions: {
      masters: "Baccalaureate degree from a CHEA-recognized accredited institution with a minimum cumulative GPA of 2.75 for master's programs.",
      phd: "Not offering independent doctoral degrees; provides undergraduate and master's credentials.",
      language: "TOEFL iBT 80 or IELTS 6.0 for international applicants.",
      proposal: "Statement of purpose detailing academic goals and alignment with university institutional mission.",
      appFee: "$50 application fee (waived during preview days).",
      documents: "Official secondary and college transcripts, personal spiritual/academic statement, and two academic or character recommendations."
    },
    opportunities: [
      {
        id: 3203,
        title: "Presidential Merit Academic Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "$14,000 annual undergraduate tuition grant",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "$50 application fee",
        tuition: "Renewable for four consecutive academic years",
        source: "https://www.azcu.edu/admissions-aid/financial-aid/",
        desc: "Highest institutional academic award for incoming freshmen and transfers achieving superior high school GPA and leadership distinction.",
        requirements: {
          gpa: "High school GPA of 3.8 or higher, or college transfer GPA of 3.6+",
          ielts: "IELTS 6.5 or equivalent",
          gre: "SAT/ACT optional",
          papers: "Personal statement detailing academic achievements and community service",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 3204,
        title: "Master of Science in Marriage and Family Therapy (MFT)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Clinical practicum fee waivers and graduate teaching bursaries",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "$50 application fee",
        tuition: "$22,500 total estimated annual tuition",
        source: "https://www.azcu.edu/academics/programs/marriage-and-family-therapy/",
        desc: "Integrative graduate program training licensed therapists in family systems theory, clinical diagnosis, child therapy, and relational healing.",
        requirements: {
          gpa: "Bachelor's degree with 3.0 GPA in psychology, human development, or related field",
          ielts: "IELTS 6.5 or TOEFL 80",
          gre: "Not required",
          papers: "Reflective essay on therapeutic philosophy and personal growth",
          references: "Three professional/academic recommendations"
        }
      },
      {
        id: 3205,
        title: "BS in Behavioral Health & Human Services",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Arizona behavioral health workforce training stipends",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "$50 application fee",
        tuition: "$32,000 per academic year",
        source: "https://www.azcu.edu/academics/programs/behavioral-health/",
        desc: "Undergraduate degree preparing graduates for case management, crisis intervention, addiction counseling, and youth mentorship.",
        requirements: {
          gpa: "High school diploma or GED with 2.5 minimum GPA",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal motivation essay",
          references: "One teacher or counselor reference"
        }
      },
      {
        id: 3206,
        title: "Cultural Research Center Undergraduate Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "$4,000 research stipend and polling laboratory training",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "Full credit for survey research internship",
        source: "https://www.arizonachristian.edu/culturalresearchcenter/",
        desc: "Undergraduate fellowship working alongside national pollsters analyzing American worldview trends, civic engagement, and statistical demographics.",
        requirements: {
          gpa: "Minimum 3.3 GPA in political science, psychology, sociology, or communications",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Writing sample analyzing contemporary cultural survey data",
          references: "One faculty mentor endorsement"
        }
      },
      {
        id: 3207,
        title: "BS in Cybersecurity & Information Technology",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "STEM tech industry internship partnerships",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$50 application fee",
        tuition: "$32,000 per academic year",
        source: "https://www.azcu.edu/academics/programs/cybersecurity/",
        desc: "Technical bachelor's covering network penetration testing, ethical hacking, secure software lifecycle, and cloud security architecture.",
        requirements: {
          gpa: "High school GPA 2.75 with strong foundation in mathematics",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Statement of technical career goals",
          references: "One academic recommendation"
        }
      },
      {
        id: 3208,
        title: "Elementary & Secondary Teacher Education Residency",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Arizona Department of Education teacher tuition subsidies",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "$50 application fee",
        tuition: "$32,000 per year",
        source: "https://www.azcu.edu/academics/programs/elementary-education/",
        desc: "State-certified education program combining classroom pedagogy, curriculum design, literacy methods, and a full-year student teaching residency.",
        requirements: {
          gpa: "High school GPA 3.0 and fingerprint clearance card",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Teaching philosophy statement",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 3209,
        title: "Firestorm Athletic & Academic Leadership Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "$5,000 to $12,000 annual award",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "$50 application fee",
        tuition: "Subsidizes varsity athletic scholar-athletes",
        source: "https://acufirestorm.com",
        desc: "Awarded to student-athletes participating in NAIA / GSAC varsity sports who maintain a high academic standard and civic engagement.",
        requirements: {
          gpa: "High school GPA 2.8+ and recruitment by varsity coaching staff",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Athletic resume and leadership essay",
          references: "Two coaching or athletic director references"
        }
      }
    ],
    researchers: [
      {
        id: 1392,
        name: "Dr. George Barna",
        title: "Director of Research, Cultural Research Center & Professor",
        subject: "social-sciences",
        topics: ["Worldview Research", "Cultural Demographics", "Sociology of Religion", "Public Polling"],
        source: "https://www.arizonachristian.edu/culturalresearchcenter/",
        summary: "Dr. Barna is a nationally prominent polling researcher and author who has conducted over 500 nationwide surveys on culture, values, and worldview dynamics."
      },
      {
        id: 1393,
        name: "Dr. Carolyn Pela",
        title: "Dean of College of Arts and Humanities & Professor of Psychology",
        subject: "social-sciences",
        topics: ["Marriage and Family Therapy", "Adolescent Development", "Behavioral Health", "Clinical Systems"],
        source: "https://www.azcu.edu/academics/faculty/",
        summary: "Dr. Pela is a licensed marriage and family therapist leading research on adolescent identity development, relational resilience, and family systems."
      },
      {
        id: 1394,
        name: "Prof. Jeffrey Green",
        title: "Chair of Department of Business & Technology",
        subject: "computer-science",
        topics: ["Cybersecurity Governance", "Network Defense", "Information Systems", "Tech Ethics"],
        source: "https://www.azcu.edu/academics/faculty/",
        summary: "Prof. Green guides technology and cybersecurity education, researching threat intelligence, incident response protocols, and ethical computing."
      }
    ]
  },

  // 17. USA: Athens State University
  {
    institution: "Athens State University",
    shortName: "Athens State University",
    slug: "athens-state-university-alabama",
    countryId: "usa",
    countryLabel: "United States",
    location: "Athens, Alabama, USA",
    website: "https://www.athens.edu",
    sourceRow: 579,
    headline: "Athens State University: Upper-Division STEM, Cybersecurity & Business Guide",
    overview: "Athens State University is Alabama's only specialized upper-division public university, situated near the Huntsville aerospace and defense corridor, renowned for affordable bachelor's completion, cybersecurity, management of technology, and educator certification.",
    description: "Explore upper-division bachelor's degrees, online graduate programs, STEM scholarships, and admissions at Athens State University in Alabama.",
    heroEyebrow: "North Alabama Upper-Division University · Huntsville Corridor STEM & Defense Tech",
    tuitionText: "In-state tuition is approximately $265 per credit hour; out-of-state tuition is approximately $530 per credit hour (with regional reciprocal discounts). Alabama transfer scholarships, DoD STEM grants, and federal financial aid are widely awarded.",
    admissions: {
      masters: "Accredited Bachelor's degree with a 3.0 cumulative GPA for graduate programs (MS in Cyber Security, MS in Strategic Leadership).",
      phd: "Upper-division institution offering bachelor's completion and master's degrees; does not offer doctorates directly.",
      language: "TOEFL iBT 79 or IELTS 6.0 for international degree seekers.",
      proposal: "Statement of career focus and transfer degree alignment.",
      appFee: "$35 non-refundable application fee.",
      documents: "Official transcripts from all previously attended colleges (minimum 36-60 transferable credit hours for undergraduate entry) and government photo ID."
    },
    opportunities: [
      {
        id: 3210,
        title: "North Alabama Aerospace & Defense STEM Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "$4,000 annual tuition credit",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "$35 application fee",
        tuition: "Subsidizes computer science and engineering coursework",
        source: "https://www.athens.edu/financial-aid/scholarships/",
        desc: "Competitive scholarship for transfer students entering computer science, cybersecurity, or management of technology aligned with Huntsville defense contractors.",
        requirements: {
          gpa: "Minimum 3.25 cumulative college transfer GPA",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "500-word essay on technical aspirations in aerospace defense or cyber resilience",
          references: "Two letters of recommendation from college STEM faculty"
        }
      },
      {
        id: 3211,
        title: "Master of Science in Cyber Security",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "NSA/DoD Cyber Center of Academic Excellence grants",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "$35 application fee",
        tuition: "$11,500 total in-state program tuition",
        source: "https://www.athens.edu/academics/programs/cyber-security-ms/",
        desc: "Designated National Center of Academic Excellence in Cyber Defense, offering advanced coursework in threat hunting, digital forensics, cryptography, and cloud assurance.",
        requirements: {
          gpa: "Bachelor's degree in computer science, IT, mathematics, or related field with 3.0 GPA",
          ielts: "IELTS 6.0 or TOEFL 79",
          gre: "Not required",
          papers: "Statement of intent highlighting cybersecurity background",
          references: "Two academic or professional references"
        }
      },
      {
        id: 3212,
        title: "Bachelor of Science in Information Technology & Cloud Systems",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "Transfer student merit grants up to $2,000 per semester",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "$35 application fee",
        tuition: "$7,950 per academic year (in-state baseline)",
        source: "https://www.athens.edu/academics/programs/information-technology/",
        desc: "Upper-division completion program covering enterprise cloud architecture (AWS/Azure), database administration, systems administration, and containerization.",
        requirements: {
          gpa: "Minimum 36 transferable semester credit hours with 2.0+ GPA",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Official college transcripts",
          references: "One academic advisor reference"
        }
      },
      {
        id: 3213,
        title: "Master of Science in Strategic Leadership & Innovation",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "Corporate partner tuition discounts available",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "$35 application fee",
        tuition: "$10,800 total tuition",
        source: "https://www.athens.edu/academics/programs/strategic-leadership/",
        desc: "Focuses on organizational leadership, executive decision modeling, project management, change enablement, and cross-functional team dynamics.",
        requirements: {
          gpa: "Bachelor's degree with 3.0 GPA",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Resume and professional career statement",
          references: "Two supervisory references"
        }
      },
      {
        id: 3214,
        title: "Bachelor of Science in Management of Technology (MOT)",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "Industrial manufacturing co-op programs",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "$35 application fee",
        tuition: "$7,950 per academic year",
        source: "https://www.athens.edu/academics/programs/management-of-technology/",
        desc: "Bridges engineering operations and commercial business, training students in quality management (Six Sigma), supply logistics, and high-tech product lifecycles.",
        requirements: {
          gpa: "60 transferable credit hours from an accredited community college or university",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "College transcripts",
          references: "One referee contact"
        }
      },
      {
        id: 3215,
        title: "Center for Lifelong Learning Cyber Defense Professional Certificate",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "State workforce innovation and opportunity act (WIOA) funding",
        status: "Open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "Free registration",
        tuition: "$1,850 certificate tuition",
        source: "https://www.athens.edu/center-for-lifelong-learning/",
        desc: "Hands-on non-credit fast-track credential preparing students for CompTIA Security+, CySA+, and CEH cybersecurity industry certifications.",
        requirements: {
          gpa: "Prior coursework or practical familiarity with computer networking",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "Resume and registration form",
          references: "None required"
        }
      },
      {
        id: 3216,
        title: "Athens State University Transfer Honors Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "$3,000 per academic year",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "$35 application fee",
        tuition: "Applied towards final two years of undergraduate study",
        source: "https://www.athens.edu/financial-aid/scholarships/",
        desc: "Honors award recognizing community college Phi Theta Kappa (PTK) honor society graduates transferring into Athens State degree programs.",
        requirements: {
          gpa: "Cumulative transfer GPA of 3.5+ with associate degree completion",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Proof of PTK membership and transfer application",
          references: "One community college professor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1395,
        name: "Dr. Richard Kyle",
        title: "Chair of Department of Computer Science & Cybersecurity",
        subject: "computer-science",
        topics: ["Cybersecurity", "Network Security", "Cryptography", "Defense Information Assurance"],
        source: "https://www.athens.edu/faculty-staff/",
        summary: "Dr. Kyle leads the NSA-designated cyber defense program, researching intrusion detection systems, autonomous cyber warfare, and critical infrastructure hardening."
      },
      {
        id: 1396,
        name: "Dr. Kim LaFevor",
        title: "Dean of College of Business & Professor of Management",
        subject: "social-sciences",
        topics: ["Organizational Behavior", "Human Resource Strategy", "Business Analytics", "Labor Economics"],
        source: "https://www.athens.edu/faculty-staff/",
        summary: "Dr. LaFevor publishes on workforce readiness in advanced manufacturing, organizational leadership strategies, and human capital analytics."
      },
      {
        id: 1397,
        name: "Dr. Leigh Hester",
        title: "Associate Professor of Management of Technology",
        subject: "engineering",
        topics: ["Operations Management", "Supply Chain Logistics", "Quality Engineering", "Lean Six Sigma"],
        source: "https://www.athens.edu/faculty-staff/",
        summary: "Dr. Hester specializes in technology commercialization, aerospace supply chains, and industrial engineering optimization in north Alabama."
      }
    ]
  },

  // 18. UK: Anglia Ruskin University Cambridge (ARU Cambridge)
  {
    institution: "Anglia Ruskin University Cambridge (ARU Cambridge)",
    shortName: "ARU Cambridge",
    slug: "aru-cambridge-anglia-ruskin",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Cambridge, England, United Kingdom",
    website: "https://aru.ac.uk/student-life/life-on-campus/cambridge-campus",
    sourceRow: 1232,
    headline: "ARU Cambridge: Clinical Medicine, AI, Forensic Science & Creative Technology Guide",
    overview: "ARU Cambridge is the historic central campus of Anglia Ruskin University in Cambridge, England, renowned for biomedical science, the Cambridge School of Art, clinical research, applied artificial intelligence, and extensive biotechnology industry partnerships.",
    description: "Explore undergraduate and postgraduate degrees, PhD studentships, and international admissions at ARU Cambridge in the UK.",
    heroEyebrow: "Cambridge Science & Innovation · Cambridge School of Art & Clinical Medicine",
    tuitionText: "UK undergraduate tuition is £9,250 per year. International undergraduate tuition ranges from £15,900 to £19,200 annually. Postgraduate international tuition is £16,500 to £20,500. International Merit Scholarships, Vice Chancellor's awards, and UKRI research council studentships are available.",
    admissions: {
      masters: "UK 2:1 or recognized international equivalent undergraduate degree in relevant discipline; 2:2 considered with relevant work experience.",
      phd: "Master's degree with merit or distinction, detailed research proposal (1,500-2,000 words), and supervisor alignment.",
      language: "IELTS Academic 6.5 overall (minimum 5.5 or 6.0 in each sub-test depending on program).",
      proposal: "Doctoral applicants require a structured research methodology and literature review proposal.",
      appFee: "Direct online application via ARU portal is free of charge; undergraduate applications via UCAS (£28.50).",
      documents: "Graduation certificate, complete academic transcripts, passport copy, personal statement, and two academic references."
    },
    opportunities: [
      {
        id: 3217,
        title: "ARU Vice Chancellor's International Doctoral Studentship",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "computer-science"],
        funding: "Full UK/international tuition fee waiver plus £19,237 annual stipend",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Free direct application",
        tuition: "Full 3-year PhD fee coverage",
        source: "https://aru.ac.uk/research/postgraduate-research",
        desc: "Funded doctoral studentship in the School of Life Sciences investigating molecular epidemiology, antimicrobial resistance, or AI-driven genomics.",
        requirements: {
          gpa: "First-class or upper second-class honours degree and master's with distinction in biosciences",
          ielts: "IELTS 6.5 overall (minimum 6.0 in writing)",
          gre: "Not required",
          papers: "1,500-word PhD research proposal",
          references: "Two academic referee letters from research supervisors"
        }
      },
      {
        id: 3218,
        title: "MSc in Artificial Intelligence with Applied Data Science",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "£4,000 ARU STEM international scholarship",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application",
        tuition: "£18,100 international tuition",
        source: "https://aru.ac.uk/study/postgraduate/artificial-intelligence",
        desc: "Comprehensive master's program covering deep learning architectures, computer vision, natural language processing, neural networks, and Cambridge tech cluster projects.",
        requirements: {
          gpa: "UK 2:2 honours degree or international equivalent in computing, engineering, or mathematics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Personal statement detailing programming and computing experience",
          references: "One academic or professional reference"
        }
      },
      {
        id: 3219,
        title: "MSc in Forensic Science & Analytical Chemistry",
        type: "Master's",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "Forensic laboratory bursaries available",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "£17,500 international tuition",
        source: "https://aru.ac.uk/study/postgraduate/forensic-science",
        desc: "Chartered Society of Forensic Sciences accredited course exploring crime scene reconstruction, toxicology, DNA profiling, and spectroscopy.",
        requirements: {
          gpa: "Undergraduate degree in chemistry, biology, forensic science, or related area (2:2 or above)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Personal statement explaining forensic laboratory aspirations",
          references: "Two academic recommendations"
        }
      },
      {
        id: 3220,
        title: "MA in Children's Book Illustration (Cambridge School of Art)",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "Exhibition awards and international bursaries",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "£19,100 international tuition",
        source: "https://aru.ac.uk/study/postgraduate/childrens-book-illustration",
        desc: "World-renowned master's program that has produced numerous Bologna Ragazzi and Macmillan prize winners, focusing on narrative visual storytelling and sequential art.",
        requirements: {
          gpa: "Undergraduate degree in illustration, graphic design, fine art, or related discipline",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Comprehensive digital portfolio (20-30 pieces) and artist statement",
          references: "Two creative or academic references"
        }
      },
      {
        id: 3221,
        title: "BSc (Hons) in Biomedical Science (IBMS Accredited)",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "NHS hospital laboratory placement grants",
        status: "Open",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        fee: "UCAS application fee (£28.50)",
        tuition: "£16,700 per academic year for international students",
        source: "https://aru.ac.uk/study/undergraduate/biomedical-science",
        desc: "Institute of Biomedical Science (IBMS) accredited degree providing rigorous training in medical microbiology, cellular pathology, clinical biochemistry, and immunology.",
        requirements: {
          gpa: "BBB at A-Level (including Chemistry or Biology) or IB 30 points",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "UCAS personal statement",
          references: "One academic school reference"
        }
      },
      {
        id: 3222,
        title: "ARU International Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "£4,000 tuition fee discount",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free application",
        tuition: "Directly deducted from first-year tuition fee",
        source: "https://aru.ac.uk/student-life/fees-and-funding/scholarships",
        desc: "Awarded automatically to high-achieving international applicants holding an offer for an undergraduate or postgraduate taught course at ARU Cambridge.",
        requirements: {
          gpa: "Equivalent of UK 2:1 degree or ABB at A-Level",
          ielts: "Meets standard course English condition",
          gre: "Not required",
          papers: "500-word supporting statement on how you will contribute to ARU student community",
          references: "Included with degree application"
        }
      },
      {
        id: 3223,
        title: "PhD in Biomedical Engineering & Medical Technology",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "Cambridge biomedical campus project sponsorship",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free direct application",
        tuition: "£17,800 annual international doctoral research fee",
        source: "https://aru.ac.uk/research/postgraduate-research",
        desc: "Three-year research investigation focusing on biosensors, medical diagnostic robotics, prosthetics bio-compatibility, and physiological monitoring devices.",
        requirements: {
          gpa: "Master's degree in biomedical engineering, mechanical engineering, or medical physics",
          ielts: "IELTS 6.5 (minimum 6.0 across bands)",
          gre: "Not required",
          papers: "PhD research outline (2,000 words) with research schedule",
          references: "Two academic letters"
        }
      }
    ],
    researchers: [
      {
        id: 1398,
        name: "Prof. Selim Cellek",
        title: "Director of Medical Technology Research Centre (MTRC)",
        subject: "biology",
        topics: ["Fibrosis Research", "Translational Medicine", "Drug Discovery", "Medical Devices"],
        source: "https://aru.ac.uk/people/",
        summary: "Prof. Cellek is an expert in translational pharmacology and medical devices, leading groundbreaking investigations into antifibrotic therapies and organ preservation."
      },
      {
        id: 1399,
        name: "Prof. Shelley Salisbury",
        title: "Course Leader in MA Children's Book Illustration & Senior Illustrator",
        subject: "arts-design",
        topics: ["Narrative Illustration", "Visual Storytelling", "Printmaking", "Children's Literature"],
        source: "https://aru.ac.uk/people/",
        summary: "Prof. Salisbury has shaped international illustration education, exhibiting across Europe and mentoring generations of award-winning picture-book authors."
      },
      {
        id: 1400,
        name: "Dr. George Wilson",
        title: "Senior Lecturer in Computing & Artificial Intelligence",
        subject: "computer-science",
        topics: ["Machine Learning", "Computer Vision", "Health Informatics", "Applied Neural Networks"],
        source: "https://aru.ac.uk/people/",
        summary: "Dr. Wilson researches computer vision algorithms for medical imaging diagnosis and intelligent predictive models in Cambridge's biotech corridor."
      }
    ]
  },

  // 19. UK: BPP University Birmingham
  {
    institution: "BPP University Birmingham",
    shortName: "BPP Birmingham",
    slug: "bpp-university-birmingham",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Birmingham, England, United Kingdom",
    website: "https://www.bpp.com/about-bpp/locations/birmingham",
    sourceRow: 1240,
    headline: "BPP Birmingham: Law School, SQE Preparation, Accountancy & Data Analytics Guide",
    overview: "BPP University Birmingham is a leading professional training center in the West Midlands financial district, celebrated for BPP Law School, Solicitors Qualifying Examination (SQE) pathways, ACCA-accredited accounting, and healthcare management.",
    description: "Explore legal qualifications, SQE1/SQE2 preparation, Master of Laws (LLM), and accounting programs at BPP University Birmingham.",
    heroEyebrow: "Midlands Professional Law & Accountancy · SQE Prep & Financial Services",
    tuitionText: "Tuition for postgraduate law programs (LLM/SQE) ranges from £14,500 to £17,500. MSc in Accounting & Finance is approximately £15,000 for international students. Dean of Law scholarships, Future Leader bursaries, and law firm training contracts are accessible.",
    admissions: {
      masters: "UK 2:2 or international equivalent undergraduate degree in any discipline for law conversion (PGDL/SQE) or relevant business degree for accounting.",
      phd: "BPP focuses strictly on career-focused professional undergraduate and postgraduate qualifications; does not offer academic PhDs.",
      language: "IELTS 6.5 overall (minimum 6.0 in all components) for law and business masters.",
      proposal: "Personal statement detailing professional ambitions in the UK legal, accounting, or tech sectors.",
      appFee: "Free direct online application through the BPP portal.",
      documents: "Degree transcripts and certificates, personal statement, CV/resume, copy of passport, and one professional or academic reference."
    },
    opportunities: [
      {
        id: 3224,
        title: "BPP Dean of Law International Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "£3,000 to £5,000 tuition fee reduction",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Credited against LLM or PGDL tuition fees",
        source: "https://www.bpp.com/study/funding/scholarships",
        desc: "Merit scholarship awarded to aspiring international solicitors and barristers demonstrating exceptional academic merit and advocacy potential.",
        requirements: {
          gpa: "Minimum 2:1 undergraduate degree equivalent or top 15% class standing",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "750-word essay on the future role of AI in commercial legal practice",
          references: "Two academic or legal employer recommendations"
        }
      },
      {
        id: 3225,
        title: "LLM Legal Practice (SQE1 & SQE2) Comprehensive Pathway",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Leading UK law firm training contract sponsorships",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application",
        tuition: "£16,900 full course tuition",
        source: "https://www.bpp.com/courses/law/postgraduate/llm-legal-practice-sqe",
        desc: "Master's course combining intensive preparation for SRA SQE1 and SQE2 assessments with advanced commercial legal skills and pro bono clinic practice.",
        requirements: {
          gpa: "Qualifying UK law degree (2:2 or above) or PGDL conversion",
          ielts: "IELTS 6.5 overall (no component below 6.0)",
          gre: "Not required",
          papers: "Personal statement focusing on legal career objectives in the UK",
          references: "One academic and one professional reference"
        }
      },
      {
        id: 3226,
        title: "Postgraduate Diploma in Law (PGDL) Conversion Course",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "West Midlands diversity in law bursaries available",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "£14,200 total tuition",
        source: "https://www.bpp.com/courses/law/postgraduate/pgdl",
        desc: "Intensive conversion program for non-law graduates providing complete foundation in English contract, tort, criminal, constitutional, and property law.",
        requirements: {
          gpa: "Undergraduate bachelor's degree in any subject (minimum 2:2)",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Personal statement outlining motivation to transition into law",
          references: "One academic reference"
        }
      },
      {
        id: 3227,
        title: "MSc in Accounting and Finance [ACCA Embedded]",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "Professional firm accounting trainee stipends",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "£15,000 international tuition",
        source: "https://www.bpp.com/courses/business/postgraduate/msc-accounting-and-finance",
        desc: "Designed in alignment with ACCA Strategic Professional papers, covering advanced financial management, strategic business reporting, and corporate governance.",
        requirements: {
          gpa: "Bachelor's degree in accounting, finance, or business with strong quantitative marks",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Career statement explaining accounting career milestones",
          references: "Two professional or academic references"
        }
      },
      {
        id: 3228,
        title: "MSc in Applied Data Analytics & Business Intelligence",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "Midlands tech digital talent bursaries up to £2,500",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free application",
        tuition: "£15,500 total tuition",
        source: "https://www.bpp.com/courses/technology/postgraduate/msc-applied-data-analytics",
        desc: "Equips commercial managers with practical skills in SQL, Python for data science, PowerBI visualization, predictive modeling, and data privacy law.",
        requirements: {
          gpa: "2:2 undergraduate degree in any discipline",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Personal statement detailing interest in enterprise analytics",
          references: "One referee contact"
        }
      },
      {
        id: 3229,
        title: "Professional Bar Training Course (BTC) Advocacy Fellowship",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Inns of Court scholarship awards support",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "£17,200 total program fee",
        source: "https://www.bpp.com/courses/law/postgraduate/bar-training-course",
        desc: "Rigorous barrister qualification focusing on courtroom advocacy, cross-examination techniques, conference skills, and civil/criminal litigation.",
        requirements: {
          gpa: "Qualifying law degree (minimum 2:1) and membership of an Inn of Court",
          ielts: "IELTS 7.5 overall (minimum 7.5 in each component)",
          gre: "Not required",
          papers: "Legal advocacy essay and video assessment submission",
          references: "Two academic or judicial references"
        }
      },
      {
        id: 3230,
        title: "BPP Future Leaders in Commercial Law Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "£2,500 fee reduction",
        status: "Open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "Free application",
        tuition: "Subsidizes summer or autumn term law enrollment",
        source: "https://www.bpp.com/study/funding/scholarships",
        desc: "Designed to support aspiring lawyers from under-represented backgrounds seeking commercial law training contracts in the Midlands.",
        requirements: {
          gpa: "Offer holder for any postgraduate law program at BPP Birmingham",
          ielts: "Meets course language condition",
          gre: "Not required",
          papers: "500-word statement on promoting diversity and inclusion in commercial law",
          references: "One reference letter"
        }
      }
    ],
    researchers: [
      {
        id: 1401,
        name: "Prof. Andrew Chadwick",
        title: "Dean of BPP Law School & Professor of Commercial Legal Practice",
        subject: "social-sciences",
        topics: ["Legal Education", "SQE Assessment", "Commercial Litigation", "Corporate Law"],
        source: "https://www.bpp.com/about-bpp/faculty",
        summary: "Prof. Chadwick leads national curriculum reform in legal education, shaping SQE preparation programs and professional corporate training."
      },
      {
        id: 1402,
        name: "Dr. Rachel Holmes",
        title: "Head of Programmes (Birmingham) & Solicitor Advocate",
        subject: "social-sciences",
        topics: ["Civil Dispute Resolution", "Legal Ethics", "Advocacy Training", "Clinical Legal Education"],
        source: "https://www.bpp.com/about-bpp/faculty",
        summary: "Dr. Holmes directs Birmingham law operations, researching courtroom pedagogical techniques, pro bono impact, and civil litigation ethics."
      },
      {
        id: 1403,
        name: "Prof. David Somer",
        title: "Director of Accounting & Financial Services",
        subject: "social-sciences",
        topics: ["Financial Reporting", "ACCA Standards", "Audit Governance", "Forensic Accounting"],
        source: "https://www.bpp.com/about-bpp/faculty",
        summary: "Prof. Somer guides accounting and finance qualifications, publishing on international reporting compliance and forensic fraud examination."
      }
    ]
  },

  // 20. UK: Liverpool Institute for Performing Arts (LIPA)
  {
    institution: "Liverpool Institute for Performing Arts (LIPA)",
    shortName: "LIPA Liverpool",
    slug: "liverpool-institute-for-performing-arts-lipa",
    countryId: "uk",
    countryLabel: "United Kingdom",
    location: "Liverpool, England, United Kingdom",
    website: "https://www.lipa.ac.uk",
    sourceRow: 1261,
    headline: "Liverpool Institute for Performing Arts (LIPA): Sound Tech, Theatre & Music Guide",
    overview: "Co-founded by Sir Paul McCartney in Liverpool, the Liverpool Institute for Performing Arts (LIPA) is an internationally celebrated specialist higher education conservatory for music, sound technology, acting, theatre design, and creative management.",
    description: "Explore world-class degrees in sound technology, music performance, theatre production, and international auditions at LIPA in Liverpool, UK.",
    heroEyebrow: "Liverpool Creative Arts Conservatory · Paul McCartney Co-Founded Sound Tech & Theatre",
    tuitionText: "UK undergraduate tuition is £9,250 per year. International undergraduate tuition is approximately £19,800 to £21,500 annually. Paul McCartney scholarships, LIPA International bursaries, and creative industry placement stipends are awarded annually.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 2:1) in music, sound engineering, performing arts, or substantial professional portfolio equivalent.",
      phd: "Specialist conservatory focusing on bachelor's and master's professional conservatory training; doctoral students affiliate with Liverpool partner universities.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each sub-score).",
      proposal: "Audition performance video or technical production portfolio (sound mixing, design drawings, or production management documentation).",
      appFee: "Audition fee typically £30-£45 (waived for low-income candidates); UCAS application fee applies for undergraduate degree entry.",
      documents: "Audition recordings or digital portfolio, academic certificates, personal statement of artistic intent, and two references."
    },
    opportunities: [
      {
        id: 3231,
        title: "Sir Paul McCartney International Music Fellowship",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "£5,000 annual tuition award",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Audition fee applies",
        tuition: "Subsidizes BA/MA Music degree studies in Liverpool",
        source: "https://www.lipa.ac.uk/study-here/fees-and-funding",
        desc: "Prestigious award honoring outstanding international musical performers, songwriters, and composers demonstrating exceptional artistic originality.",
        requirements: {
          gpa: "Successful audition and admission to a LIPA undergraduate or postgraduate music program",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Original portfolio of 3 recorded songs/compositions and artistic statement",
          references: "Two professional music industry or academic teacher recommendations"
        }
      },
      {
        id: 3232,
        title: "BA (Hons) in Sound Technology (Tonmeister Standard)",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "arts-design"],
        funding: "Studio engineer industry work-placement stipends",
        status: "Open",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        fee: "UCAS application fee (£28.50)",
        tuition: "£20,500 international annual tuition",
        source: "https://www.lipa.ac.uk/courses/undergraduate/sound-technology",
        desc: "World-leading recording arts degree covering multi-track acoustic engineering, live sound reinforcement, spatial audio (Dolby Atmos), and mastering.",
        requirements: {
          gpa: "ABB at A-Level (including Music Technology, Physics, or Maths) or equivalent",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Portfolio of 2-3 produced recordings with detailed production notes",
          references: "One academic reference"
        }
      },
      {
        id: 3233,
        title: "MA in Professional Acting & Devised Performance",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "Conservatory talent bursaries available",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Audition fee £35",
        tuition: "£19,800 international tuition",
        source: "https://www.lipa.ac.uk/courses/postgraduate/acting-company",
        desc: "Intensive one-year conservatory masters focusing on classical text, screen acting, voice projection, physical theatre, and London industry showcases.",
        requirements: {
          gpa: "Undergraduate degree in drama or extensive professional stage experience",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Audition monologue performance (classical and contemporary) and interview",
          references: "Two theatre director or academic references"
        }
      },
      {
        id: 3234,
        title: "BA (Hons) in Theatre and Production Support",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "arts-design"],
        funding: "National theatre technician apprenticeship stipends",
        status: "Open",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        fee: "UCAS fee (£28.50)",
        tuition: "£19,800 annual international fee",
        source: "https://www.lipa.ac.uk/courses/undergraduate/theatre-production",
        desc: "Hands-on stagecraft degree covering computerized lighting design, scenic construction, rigging, pyrotechnics, and live production management.",
        requirements: {
          gpa: "Pass in relevant Level 3 qualifications or international baccalaureate equivalent",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Technical design portfolio demonstrating stage or lighting work",
          references: "One teacher or director reference"
        }
      },
      {
        id: 3235,
        title: "MA in Music Industry Leadership and Management",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "UK music trade association scholarships",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free direct application",
        tuition: "£18,500 international tuition",
        source: "https://www.lipa.ac.uk/courses/postgraduate/music-industry-professional",
        desc: "Trains future music executives in digital streaming royalties, artist management, copyright law, international touring logistics, and synch licensing.",
        requirements: {
          gpa: "UK 2:1 degree in business, music, or media, or significant industry track record",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Case study essay analyzing music publishing disruption",
          references: "Two industry or academic references"
        }
      },
      {
        id: 3236,
        title: "Spatial Audio & Immersive Sound Engineering Certificate",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "arts-design"],
        funding: "Creative audio development bursaries",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "£25 registration fee",
        tuition: "£1,950 intensive summer course",
        source: "https://www.lipa.ac.uk/study-here/short-courses",
        desc: "Specialist studio masterclass in Dolby Atmos mixing, ambisonics for VR/AR gaming, and binaural headphone audio production.",
        requirements: {
          gpa: "Working knowledge of digital audio workstations (Pro Tools or Logic Pro)",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "CV and sample DAW session files",
          references: "None"
        }
      },
      {
        id: 3237,
        title: "LIPA Creative Arts International Diversity Bursary",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "£3,000 fee contribution",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free application",
        tuition: "Direct credit towards course fees",
        source: "https://www.lipa.ac.uk/study-here/fees-and-funding",
        desc: "Dedicated to broadening participation among international creative artists from developing nations pursuing professional training at LIPA.",
        requirements: {
          gpa: "Admitted offer holder for any full-time undergraduate or master's course",
          ielts: "Standard course requirement",
          gre: "Not required",
          papers: "500-word statement on artistic perspective and background",
          references: "Included with course application"
        }
      }
    ],
    researchers: [
      {
        id: 1404,
        name: "Prof. Mark Featherstone-Witty OBE",
        title: "Founding Principal & Professor of Performing Arts Pedagogy",
        subject: "arts-design",
        topics: ["Arts Education", "Creative Entrepreneurship", "Stage Pedagogy", "Cultural Policy"],
        source: "https://www.lipa.ac.uk/about-us/leadership-team",
        summary: "Prof. Featherstone-Witty co-founded LIPA with Paul McCartney, pioneering holistic multi-disciplinary training for working performing arts professionals."
      },
      {
        id: 1405,
        name: "Dr. Jon Thornton",
        title: "Head of Sound Technology & Spatial Audio Researcher",
        subject: "engineering",
        topics: ["Spatial Audio", "Dolby Atmos Mixing", "Acoustics", "Audio Perception"],
        source: "https://www.lipa.ac.uk/about-us/teaching-staff",
        summary: "Dr. Thornton is an internationally recognized audio engineer and AES fellow researching immersive audio mixing, multichannel loudspeaker setups, and sound perception."
      },
      {
        id: 1406,
        name: "Prof. Will Hammond",
        title: "Head of Acting & Professional Director",
        subject: "arts-design",
        topics: ["Classical Drama", "Screen Acting Techniques", "Stanislavski System", "Directing"],
        source: "https://www.lipa.ac.uk/about-us/teaching-staff",
        summary: "Prof. Hammond directs conservatory actor training at LIPA, having directed national theatrical tours and coached prominent British film and television actors."
      }
    ]
  }
];
