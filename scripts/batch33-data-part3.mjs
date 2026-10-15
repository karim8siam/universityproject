/**
 * Batch 33 - Part 3: Universities 21 to 30 (Total Unis 432 to 441)
 * Japan (4), Sweden (3), Netherlands (3)
 * Opp IDs: 3028 to 3097 (70 opportunities)
 * Faculty IDs: 1317 to 1346 (30 faculty members)
 */

export const batch33Part3Universities = [
  // 21. Japan: Kobe City University of Foreign Studies
  {
    institution: "Kobe City University of Foreign Studies",
    shortName: "Kobe CUFS",
    slug: "kobe-city-university-of-foreign-studies",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Kobe, Hyogo, Japan",
    website: "https://www.kobe-cufs.ac.jp",
    sourceRow: 1670,
    headline: "Kobe City University of Foreign Studies: International Relations, Linguistics & Intercultural Studies Guide",
    overview: "Kobe City University of Foreign Studies (Kobe CUFS) is a prestigious public municipal university in the cosmopolitan port city of Kobe, renowned throughout Japan for high-level foreign language education, international legal diplomacy, intercultural communication, and Asia-Pacific studies.",
    description: "Verified graduate admissions, MEXT scholarships, and global diplomacy programs guide for Kobe City University of Foreign Studies in Hyogo, Japan.",
    heroEyebrow: "Japanese Public Municipal University · Kobe Global Port Hub",
    tuitionText: "Tuition is standardized for Japanese public municipal universities at ¥535,800 annually (approx. $3,600 USD) with a one-time admission fee of ¥282,000 (¥141,000 for Kobe residents). Full and half tuition fee exemption waivers and MEXT scholarships are widely accessible for international students.",
    admissions: {
      masters: "Completion of a 16-year curriculum of school education or equivalent Bachelor's degree from an accredited university.",
      phd: "Master's degree or professional graduate degree in international relations, linguistics, or related cultural disciplines.",
      language: "JLPT N1 or N2 for Japanese-language seminars, or English proficiency (TOEFL iBT 80+ or IELTS 6.5+) for English-taught international tracks.",
      proposal: "A 2,000-character Japanese or 1,000-word English research proposal detailing thematic background, research questions, and methodology.",
      appFee: "¥30,000 application screening fee payable via international bank transfer or Japanese convenience store.",
      documents: "Official graduation certificate, certified academic transcript, research plan, statement of purpose, and two academic referee letters."
    },
    opportunities: [
      {
        id: 3028,
        title: "Kobe City Municipal Honors & International Tuition Reduction",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "50% to 100% tuition exemption plus ¥48,000/month JASSO stipend",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "¥30,000 application fee",
        tuition: "Full or half tuition waiver applied directly against municipal tuition",
        source: "https://www.kobe-cufs.ac.jp/english/admissions/tuition_scholarships.html",
        desc: "Tuition waiver and merit grant awarded to high-achieving international graduate students enrolling in the Graduate School of International Studies at Kobe CUFS.",
        requirements: {
          gpa: "Minimum 3.0 / 4.0 GPA equivalent in prior undergraduate studies",
          ielts: "TOEFL 80+ or IELTS 6.5 or JLPT N2+",
          gre: "Not required",
          papers: "Detailed study plan and economic hardship declaration",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3029,
        title: "Master of Arts in International Relations & Asia-Pacific Studies",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Monbukagakusho (MEXT) university recommendation tracks available",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per academic year",
        source: "https://www.kobe-cufs.ac.jp/english/graduate/",
        desc: "Specialized postgraduate program exploring diplomatic history, East Asian maritime governance, security architecture, and cross-border trade policy.",
        requirements: {
          gpa: "Bachelor's degree in International Relations, Political Science, or Humanities",
          ielts: "IELTS 6.5 or TOEFL 85",
          gre: "Not required",
          papers: "1,500-word research proposal and undergraduate graduation thesis summary",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 3030,
        title: "Ph.D. in Comparative Cultural Studies & Linguistics",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "¥150,000 monthly JSPS DC research fellowship support",
        status: "Open",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        fee: "¥30,000 application fee",
        tuition: "Tuition waiver options available",
        source: "https://www.kobe-cufs.ac.jp/graduate/doctor/",
        desc: "Three-year doctoral program examining cognitive linguistics, translation theory, historical sociolinguistics, and intercultural discourse in global contexts.",
        requirements: {
          gpa: "Master's degree in Linguistics, Translation, or Cultural Studies",
          ielts: "TOEFL 90+ or IELTS 7.0 or JLPT N1",
          gre: "Not required",
          papers: "Master's thesis copy and comprehensive doctoral dissertation research agenda",
          references: "Two letters of recommendation from graduate professors"
        }
      },
      {
        id: 3031,
        title: "Kobe Port City Diplomatic History & Archive Research Assistantship",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "¥180,000 monthly research salary",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application for enrolled graduate students",
        tuition: "Sponsored via Kobe municipal research grant",
        source: "https://www.kobe-cufs.ac.jp/research/",
        desc: "Archival research investigating modern treaty ports, diplomatic correspondence, and cross-cultural migration between Japan and the West during the Meiji era.",
        requirements: {
          gpa: "Enrolled in Kobe CUFS graduate school with good academic standing",
          ielts: "Bilingual English and Japanese reading fluency",
          gre: "Not required",
          papers: "Experience in historical document transcription or archival indexing",
          references: "Advising professor letter"
        }
      },
      {
        id: 3032,
        title: "Kansai Consular Corps & Trade Promotion Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "¥1,200/hour for 12-week diplomatic liaison placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Credit-bearing internship course",
        source: "https://www.kobe-cufs.ac.jp/career/",
        desc: "Professional diplomatic internship working with international consulates, JETRO Kobe, and municipal foreign affairs offices in Hyogo prefecture.",
        requirements: {
          gpa: "Enrolled in MA program with satisfactory progress",
          ielts: "JLPT N2 and English business fluency",
          gre: "Not required",
          papers: "Japanese and English bilingual resume",
          references: "Career service tutor authorization"
        }
      },
      {
        id: 3033,
        title: "Kobe Institute for Foreign Studies Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "¥4,200,000 annual fellowship stipend with research travel allowance",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral research post",
        source: "https://www.kobe-cufs.ac.jp/research/fellowship/",
        desc: "Two-year postdoctoral research fellowship investigating Asia-Pacific multilateralism, regional security cooperation, and language pedagogy.",
        requirements: {
          gpa: "PhD received within past 5 years in International Relations or Linguistics",
          ielts: "Scholarly publication record in English or Japanese",
          gre: "Not required",
          papers: "Three refereed journal articles and a 4-page research proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 3034,
        title: "Tenure-Track Associate Professor in International Political Economy",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "¥6,800,000 - ¥8,500,000 annual salary under Japanese public university scale",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Tenured or tenure-track academic appointment",
        source: "https://www.kobe-cufs.ac.jp/about/recruit/",
        desc: "Faculty appointment in the Department of International Relations, delivering undergraduate and graduate lectures on global trade, development, and Japanese economic diplomacy.",
        requirements: {
          gpa: "PhD in International Relations, Political Science, or Economics",
          ielts: "Fluency in English and Japanese for academic administration",
          gre: "Not required",
          papers: "Substantial record of peer-reviewed articles and university teaching experience",
          references: "Three academic references and syllabus proposals"
        }
      }
    ],
    researchers: [
      {
        id: 1317,
        name: "Prof. Dr. Hiroshi Sato",
        title: "Professor of International Relations & Asia-Pacific Diplomacy",
        subject: "social-sciences",
        topics: ["East Asian Diplomacy", "Maritime Security", "Sino-Japanese Relations", "Multilateral Governance"],
        source: "https://www.kobe-cufs.ac.jp/faculty/sato_hiroshi.html",
        summary: "Prof. Sato analyzes East Asian diplomatic history, maritime boundary security in the South China Sea, and institutional development across ASEAN."
      },
      {
        id: 1318,
        name: "Prof. Dr. Keiko Tanaka",
        title: "Professor of Applied Linguistics & Intercultural Communication",
        subject: "social-sciences",
        topics: ["Pragmatics", "Discourse Analysis", "Cross-Cultural Pedagogy", "Second Language Acquisition"],
        source: "https://www.kobe-cufs.ac.jp/faculty/tanaka_keiko.html",
        summary: "Prof. Tanaka investigates cognitive pragmatics, conversational inference, and cross-cultural communication protocols between Japanese and Western organizations."
      },
      {
        id: 1319,
        name: "Prof. Dr. Kenjiro Suzuki",
        title: "Professor of International Law & Human Rights",
        subject: "social-sciences",
        topics: ["Public International Law", "Treaty Interpretation", "Human Rights Law", "Dispute Resolution"],
        source: "https://www.kobe-cufs.ac.jp/faculty/suzuki_kenjiro.html",
        summary: "Prof. Suzuki is an international jurist examining maritime dispute arbitration, state responsibility under public international law, and UN treaty conventions."
      }
    ]
  },

  // 22. Japan: Kyoto City University of Arts
  {
    institution: "Kyoto City University of Arts",
    shortName: "KCUA Kyoto",
    slug: "kyoto-city-university-of-arts",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Kyoto, Japan",
    website: "https://www.kcua.ac.jp",
    sourceRow: 1685,
    headline: "Kyoto City University of Arts: Traditional Japanese Arts, Fine Arts, Music & Design Guide",
    overview: "Kyoto City University of Arts (Kyoto Geidai / KCUA) is Japan's oldest public municipal arts university, founded in 1880 in the cultural heart of Kyoto, celebrated worldwide for traditional Japanese painting (Nihonga), lacquerware (Urushi), ceramics, contemporary sculpture, and musical composition.",
    description: "Verified graduate admissions, Japanese artistic fellowships, and studio arts guides for Kyoto City University of Arts.",
    heroEyebrow: "Japan's Oldest Public Arts University · Kyoto Heritage Hub",
    tuitionText: "Annual tuition is ¥535,800 with an admission fee of ¥282,000 (discounted to ¥141,000 for Kyoto citizens). International students can apply for Monbukagakusho (MEXT) scholarships, Kyoto City International Foundation awards, and 50% tuition reduction waivers based on artistic merit.",
    admissions: {
      masters: "Graduation from an accredited four-year university with a Bachelor's degree in fine arts, design, crafts, or music.",
      phd: "Master's degree or terminal MFA/MMus in arts or music with an outstanding portfolio and theoretical research plan.",
      language: "JLPT N2 or N1 required for studio critique and seminar interaction; English proficiency supported in theoretical research.",
      proposal: "A comprehensive portfolio of 10-15 original creative works accompanied by a 2,000-character Japanese research statement (Kenkyu Keikakusho).",
      appFee: "¥30,000 examination fee payable via Japanese banking or designated portal.",
      documents: "Graduation certificate, official transcript, portfolio/score recording, research plan, and two letters of recommendation."
    },
    opportunities: [
      {
        id: 3035,
        title: "Kyoto City Arts International Talent & MEXT Study Grant",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "Full tuition waiver plus ¥143,000/month MEXT doctoral stipend",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "¥30,000 application fee",
        tuition: "Full tuition and entrance fee exemption",
        source: "https://www.kcua.ac.jp/en/admissions/",
        desc: "Prestige scholarship for outstanding international artists entering MFA or doctoral programs in Japanese Painting, Urushi Lacquerware, or Sculpture at Kyoto Geidai.",
        requirements: {
          gpa: "Top tier artistic portfolio and undergraduate GPA 3.0+",
          ielts: "JLPT N2+ and basic English",
          gre: "Not required",
          papers: "Original artistic portfolio and comprehensive Japanese research plan",
          references: "Two academic referee letters from studio professors"
        }
      },
      {
        id: 3036,
        title: "Master of Fine Arts (MFA) in Traditional Japanese Crafts & Urushi Art",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "chemistry"],
        funding: "Studio materials grant and exhibition funding assistance",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per academic year",
        source: "https://www.kcua.ac.jp/en/academics/graduate/",
        desc: "World-famous studio MFA training artists in authentic natural lacquerware techniques, maki-e gold powder embellishment, woodworking, and contemporary craft aesthetics.",
        requirements: {
          gpa: "Bachelor of Fine Arts or equivalent with background in crafts, sculpture, or painting",
          ielts: "JLPT N2 required for atelier instruction",
          gre: "Not required",
          papers: "Portfolio containing 10 high-resolution photographic slides of original craft works",
          references: "Two letters of recommendation"
        }
      },
      {
        id: 3037,
        title: "Doctor of Philosophy (Ph.D.) in Fine Arts & Studio Practice",
        type: "PhD",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "¥180,000 monthly JSPS doctoral fellowship support",
        status: "Open",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        fee: "¥30,000 application fee",
        tuition: "Tuition waiver options available",
        source: "https://www.kcua.ac.jp/en/academics/doctoral/",
        desc: "Terminal doctoral degree combining rigorous philosophical thesis research with solo exhibition requirements in painting, contemporary media, or printmaking.",
        requirements: {
          gpa: "Master's degree or MFA in Fine Arts or Art History",
          ielts: "JLPT N1 or fluent academic Japanese",
          gre: "Not required",
          papers: "Documentation of solo or group exhibitions and a 3,000-character doctoral research proposal",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3038,
        title: "Kyoto Traditional Pigments & Mineral Color Research Project",
        type: "Research",
        subject: "arts-design",
        subjects: ["arts-design", "chemistry"],
        funding: "¥160,000 monthly research salary",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application for enrolled artists",
        tuition: "Sponsored via Kyoto Heritage Conservation Grant",
        source: "https://www.kcua.ac.jp/research/",
        desc: "Laboratory and studio investigation analyzing crushed mineral pigments (iwa-enogu), animal hide glue (nikawa), and gilded leaf preservation in classical temple screen paintings.",
        requirements: {
          gpa: "Enrolled in KCUA graduate program in Nihonga or Conservation",
          ielts: "Working Japanese proficiency",
          gre: "Not required",
          papers: "Demonstrated knowledge of mineral pigment chemistry and binding agents",
          references: "Studio master recommendation"
        }
      },
      {
        id: 3039,
        title: "Kyoto Museum of Crafts and Design Studio Residency Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "¥1,300/hour for 14-week museum curatorial placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward MFA",
        source: "https://www.kcua.ac.jp/career/",
        desc: "Curatorial and studio practicum working with Kyoto municipal museums, traditional dyeing ateliers, and international craft biennials.",
        requirements: {
          gpa: "Satisfactory progress in graduate studio courses",
          ielts: "Conversational Japanese (JLPT N2)",
          gre: "Not required",
          papers: "Curatorial or artist CV and portfolio",
          references: "Faculty advisor confirmation"
        }
      },
      {
        id: 3040,
        title: "KCUA Contemporary Art & Traditional Aesthetics Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "¥4,000,000 annual fellowship stipend plus studio space on campus",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Studio residency appointment",
        source: "https://www.kcua.ac.jp/research/fellowship/",
        desc: "Two-year postdoctoral artist residency and research fellowship exploring the intersection of historical Kyoto aesthetics and global contemporary installation art.",
        requirements: {
          gpa: "PhD or terminal MFA completed within past 4 years",
          ielts: "Professional artist exhibition history",
          gre: "Not required",
          papers: "Comprehensive artist portfolio, exhibition catalogs, and 3-page studio research plan",
          references: "Three professional artistic reference letters"
        }
      },
      {
        id: 3041,
        title: "Tenure-Track Associate Professor in Contemporary Painting & Nihonga",
        type: "Job",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "¥6,500,000 - ¥8,200,000 annual salary under Kyoto municipal university scale",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Tenured or tenure-track academic appointment",
        source: "https://www.kcua.ac.jp/recruit/",
        desc: "Studio faculty position in the Department of Japanese Painting, mentoring graduate students in traditional mineral pigment techniques and contemporary exhibition curation.",
        requirements: {
          gpa: "Master's degree or MFA in Japanese Painting or Visual Arts",
          ielts: "Fluent Japanese language proficiency for studio critique",
          gre: "Not required",
          papers: "Substantial national and international solo exhibition record and teaching portfolio",
          references: "Three professional artistic reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1320,
        name: "Prof. Dr. Shinichi Kobayashi",
        title: "Professor of Traditional Urushi Arts & Director of Craft Studies",
        subject: "arts-design",
        topics: ["Urushi Lacquerware", "Maki-e Gold Technique", "Woodwork Crafts", "Material Ecology"],
        source: "https://www.kcua.ac.jp/faculty/kobayashi_shinichi.html",
        summary: "Prof. Kobayashi is a master lacquerware artist preserving authentic Kyoto maki-e techniques while innovating contemporary architectural lacquer surfaces."
      },
      {
        id: 1321,
        name: "Prof. Dr. Akiko Murayama",
        title: "Professor of Nihonga (Japanese Painting)",
        subject: "arts-design",
        topics: ["Nihonga Painting", "Mineral Pigments", "Gold Leaf Application", "Edo Period Aesthetics"],
        source: "https://www.kcua.ac.jp/faculty/murayama_akiko.html",
        summary: "Prof. Murayama exhibits internationally in Japanese painting, utilizing rare natural mineral ores and washi papers to explore light, spirituality, and nature."
      },
      {
        id: 1322,
        name: "Prof. Dr. Kenjiro Hosaka",
        title: "Professor of Art History & Contemporary Aesthetics",
        subject: "arts-design",
        topics: ["Contemporary Japanese Art", "Curatorial Practice", "Art Brut", "Museum Studies"],
        source: "https://www.kcua.ac.jp/faculty/hosaka_kenjiro.html",
        summary: "Prof. Hosaka is an esteemed art critic and curator who has directed major international museum retrospectives on Japanese avant-garde and outsider art."
      }
    ]
  },

  // 23. Japan: Tokyo University of Agriculture
  {
    institution: "Tokyo University of Agriculture",
    shortName: "Tokyo NODAI",
    slug: "tokyo-university-of-agriculture",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Setagaya, Tokyo, Japan",
    website: "https://www.nodai.ac.jp",
    sourceRow: 1776,
    headline: "Tokyo University of Agriculture: Fermentation Science, Agronomy, Forestry & Food Safety Guide",
    overview: "Tokyo University of Agriculture (Tokyo NODAI), founded in 1891 by Viscount Enomoto Takeaki, is Japan's first and largest private agricultural university, internationally renowned for its Department of Fermentation Science, tropical agriculture, brewing technology, and environmental forestry.",
    description: "Verified graduate admissions, fermentation research fellowships, and agrifood guides for Tokyo University of Agriculture in Setagaya, Tokyo.",
    heroEyebrow: "Historic Japanese Agricultural University · Setagaya Campus, Tokyo",
    tuitionText: "Annual graduate tuition averages ¥850,000 to ¥1,100,000 depending on laboratory equipment needs. The Tokyo NODAI International Student Special Scholarship offers a 30% to 50% tuition deduction, supplemented by MEXT and JASSO monthly living allowances.",
    admissions: {
      masters: "Graduation from a recognized four-year university with a Bachelor's degree in agriculture, life sciences, fermentation, or chemistry.",
      phd: "Master's degree in agricultural sciences, applied biological chemistry, or bio-business with an approved research abstract.",
      language: "JLPT N2 or N1 for Japanese-medium labs, or English proficiency (TOEFL iBT 79+ or IELTS 6.0+) for international research programs.",
      proposal: "A 2,000-character Japanese or 1,000-word English research plan outlining proposed laboratory experiments and prospective professor contact.",
      appFee: "¥35,000 application examination fee.",
      documents: "Graduation certificate, academic transcript, research proposal, statement of purpose, and two academic recommendation letters."
    },
    opportunities: [
      {
        id: 3042,
        title: "Tokyo NODAI International Student Tuition Reduction & Merit Bursary",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "30% to 50% tuition reduction plus ¥50,000 monthly living subsidy",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥35,000 application fee",
        tuition: "Direct deduction from annual graduate tuition",
        source: "https://www.nodai.ac.jp/english/admissions/scholarships/",
        desc: "Tuition waiver and merit grant offered to self-financed international graduate students entering Applied Biosciences or Fermentation Science at Tokyo NODAI.",
        requirements: {
          gpa: "Minimum 2.8 / 4.0 GPA equivalent in undergraduate degree",
          ielts: "TOEFL 79+ or IELTS 6.0 or JLPT N2+",
          gre: "Not required",
          papers: "Study plan explaining commitment to agricultural sciences",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 3043,
        title: "Master of Agricultural Science in Fermentation Science & Brewing",
        type: "Master's",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "Industry-sponsored brewing and microbiology laboratory assistantships",
        status: "Open",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        fee: "¥35,000 application fee",
        tuition: "¥980,000 per academic year",
        source: "https://www.nodai.ac.jp/english/faculty/grad/app_bio/",
        desc: "Japan's unique world-leading graduate department in fermentation, researching koji mold genetics (Aspergillus oryzae), sake brewing, vinegar bio-reactors, and probiotic microbes.",
        requirements: {
          gpa: "Bachelor's degree in Chemistry, Microbiology, Agricultural Science, or Biology",
          ielts: "IELTS 6.0 or TOEFL 79 or JLPT N2",
          gre: "Not required",
          papers: "Research proposal focusing on microbial metabolism or fermentation biochemistry",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3044,
        title: "Ph.D. in Applied Biosciences & Tropical Agriculture",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "¥160,000 monthly JSPS research fellowship support",
        status: "Open",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        fee: "¥35,000 application fee",
        tuition: "Tuition waiver options available",
        source: "https://www.nodai.ac.jp/english/faculty/grad/agri/",
        desc: "Three-year doctoral program investigating climate-tolerant tropical crops, soil nutrient replenishment, plant pathology, and agro-ecological systems in Southeast Asia.",
        requirements: {
          gpa: "Master's degree in Agricultural Sciences or Life Sciences",
          ielts: "Fluent academic English or Japanese",
          gre: "Not required",
          papers: "Master's thesis copy and 4-page doctoral research proposal",
          references: "Two letters of recommendation from professors"
        }
      },
      {
        id: 3045,
        title: "Microbial Genome & Traditional Fermentation Laboratory Assistantship",
        type: "Research",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "¥170,000 monthly research salary",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application for enrolled graduate students",
        tuition: "Funded via Japan Science and Technology Agency (JST) grant",
        source: "https://www.nodai.ac.jp/research/",
        desc: "Genomic sequencing and metabolite profiling of traditional Japanese fermented food microbiota, investigating anti-hypertensive and immune-modulating peptides.",
        requirements: {
          gpa: "Enrolled in Tokyo NODAI master's or PhD program with good standing",
          ielts: "English working proficiency",
          gre: "Not required",
          papers: "Experience in PCR, gas chromatography-mass spectrometry (GC-MS), or yeast culturing",
          references: "Laboratory professor recommendation"
        }
      },
      {
        id: 3046,
        title: "Japanese Brewing Industry & Food Enterprise Practicum",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "social-sciences"],
        funding: "¥1,250/hour for 12-week quality control placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward master's degree",
        source: "https://www.nodai.ac.jp/career/",
        desc: "Technical industrial internship in Tokyo and Kanagawa working with major Japanese beverage manufacturers and traditional sake breweries in microbiological QA.",
        requirements: {
          gpa: "Completed at least one year of fermentation science coursework",
          ielts: "JLPT N2 and basic English",
          gre: "Not required",
          papers: "Bilingual resume and lab technique summary",
          references: "Career placement coordinator sign-off"
        }
      },
      {
        id: 3047,
        title: "Tokyo NODAI Bio-Business & Agri-Innovation Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "¥4,500,000 annual fellowship stipend with research travel allowance",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral appointment",
        source: "https://www.nodai.ac.jp/research/fellowship/",
        desc: "Two-year postdoctoral fellowship researching agricultural supply chain digitization, carbon trading in smallholder farming, and bio-business entrepreneurship.",
        requirements: {
          gpa: "PhD in Agricultural Economics, Agribusiness, or Environmental Management",
          ielts: "High-level English publication record",
          gre: "Not required",
          papers: "Three peer-reviewed journal articles and a 3-page research agenda",
          references: "Three academic reference letters"
        }
      },
      {
        id: 3048,
        title: "Tenure-Track Associate Professor in Fermentation Biotechnology",
        type: "Job",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "¥7,200,000 - ¥9,000,000 annual salary under university scale",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Tenured or tenure-track academic appointment",
        source: "https://www.nodai.ac.jp/recruit/",
        desc: "Faculty position in the Faculty of Applied Bio-Science, leading a research team in industrial enzyme engineering, microbial metabolic flux, and sustainable bioprocessing.",
        requirements: {
          gpa: "PhD in Fermentation Science, Biotechnology, or Applied Microbiology",
          ielts: "Fluency in Japanese and English for teaching and laboratory supervision",
          gre: "Not required",
          papers: "Strong publication track record in international biotechnology journals and grant capture record",
          references: "Three academic reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1323,
        name: "Prof. Dr. Katsuhiko Kitamoto",
        title: "Professor of Fermentation Science & Koji Mold Genetics",
        subject: "chemistry",
        topics: ["Aspergillus oryzae", "Sake Yeast", "Autophagy in Fungi", "Brewing Biotechnology"],
        source: "https://www.nodai.ac.jp/faculty/kitamoto_katsuhiko.html",
        summary: "Prof. Kitamoto is an internationally celebrated fungal geneticist who elucidated the cellular mechanisms and genome of Aspergillus oryzae (koji mold)."
      },
      {
        id: 1324,
        name: "Prof. Dr. Eiji Sakuradani",
        title: "Professor of Applied Microbiology & Lipid Biochemistry",
        subject: "biology",
        topics: ["Microbial Lipids", "Polyunsaturated Fatty Acids", "Fermentation Engineering", "Metabolic Pathways"],
        source: "https://www.nodai.ac.jp/faculty/sakuradani_eiji.html",
        summary: "Prof. Sakuradani investigates functional microbial oils, metabolic pathways for polyunsaturated fatty acid production, and industrial biotransformations."
      },
      {
        id: 1325,
        name: "Prof. Dr. Kazuo Ogata",
        title: "Professor of Agro-Ecology & Biodiversity Conservation",
        subject: "environment",
        topics: ["Insect Ecology", "Biological Pest Control", "Agroforestry", "Tropical Biodiversity"],
        source: "https://www.nodai.ac.jp/faculty/ogata_kazuo.html",
        summary: "Prof. Ogata specializes in tropical insect biodiversity, natural predator biocontrol in rice paddies, and sustainable agroforestry practices across Southeast Asia."
      }
    ]
  },

  // 24. Japan: Okayama Prefectural University
  {
    institution: "Okayama Prefectural University",
    shortName: "OPU Japan",
    slug: "okayama-prefectural-university",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Soja, Okayama, Japan",
    website: "https://www.oka-pu.ac.jp",
    sourceRow: 1724,
    headline: "Okayama Prefectural University: Health Sciences, Computer Science & Systems Engineering Guide",
    overview: "Okayama Prefectural University (OPU) is a premier public university in western Japan, recognized for excellence across its Faculty of Computer Science and Systems Engineering, Health and Welfare Science, and Design, providing advanced technological and clinical research in a scenic Seto Inland Sea region.",
    description: "Verified graduate admissions, Japanese public university fellowships, and STEM guides for Okayama Prefectural University in Soja.",
    heroEyebrow: "Japanese Public Prefectural University · Okayama Technology Hub",
    tuitionText: "Tuition is standardized at ¥535,800 annually for graduate degree programs, with an entrance fee of ¥282,000 (reduced to ¥141,000 for residents of Okayama Prefecture). Full and 50% tuition fee reduction exemptions and JASSO scholarships are offered for international applicants.",
    admissions: {
      masters: "Graduation from an accredited four-year university with a Bachelor's degree in engineering, computing, health science, or design.",
      phd: "Master's degree or professional graduate degree in computer science, systems engineering, or health sciences.",
      language: "JLPT N2 or English proficiency (TOEFL iBT 75+ or IELTS 6.0+) for graduate laboratory research tracks.",
      proposal: "A 2,000-character Japanese or 1,000-word English research proposal detailing research objectives, methodology, and laboratory choice.",
      appFee: "¥30,000 application examination fee.",
      documents: "Graduation certificate, academic transcript, research proposal, statement of purpose, and two academic referee letters."
    },
    opportunities: [
      {
        id: 3049,
        title: "Okayama Prefectural Honors Scholarship & Tuition Exemption",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "50% to 100% tuition exemption plus ¥48,000/month JASSO merit grant",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥30,000 application fee",
        tuition: "Full or half tuition waiver applied directly to prefectural tuition",
        source: "https://www.oka-pu.ac.jp/english/admissions/scholarships/",
        desc: "Tuition waiver and merit fellowship awarded to high-achieving international students entering the Graduate School of Computer Science and Systems Engineering.",
        requirements: {
          gpa: "Minimum 3.0 / 4.0 GPA equivalent in undergraduate studies",
          ielts: "TOEFL 75+ or IELTS 6.0 or JLPT N2",
          gre: "Not required",
          papers: "Study plan detailing systems engineering or computer science research focus",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3050,
        title: "Master of Engineering in Computer Science & Systems Engineering",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Paid student laboratory assistantships and prefectural research grants",
        status: "Open",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027",
        fee: "¥30,000 application fee",
        tuition: "¥535,800 per academic year",
        source: "https://www.oka-pu.ac.jp/english/graduate/cse/",
        desc: "Advanced graduate program covering intelligent robotics, biomedical signal processing, embedded systems, computer vision, and network security.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Electrical Engineering, or Information Systems",
          ielts: "IELTS 6.0 or TOEFL 75",
          gre: "Not required",
          papers: "Statement of purpose matching prospective professor's lab",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 3051,
        title: "Ph.D. in Information Systems & Health Technology Systems",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "computer-science", "biology"],
        funding: "¥160,000 monthly JSPS doctoral fellowship support",
        status: "Open",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        fee: "¥30,000 application fee",
        tuition: "Tuition exemption options available",
        source: "https://www.oka-pu.ac.jp/english/graduate/doctor/",
        desc: "Three-year doctoral program developing assistive healthcare robotics, biosensors, wearable telemetry, and intelligent human-machine interfaces.",
        requirements: {
          gpa: "Master's degree in Engineering, Computer Science, or Health Technology",
          ielts: "Fluent academic English or Japanese",
          gre: "Not required",
          papers: "Master's thesis copy and 3-page doctoral research proposal",
          references: "Two letters of recommendation from graduate professors"
        }
      },
      {
        id: 3052,
        title: "Assistive Robotics & Rehabilitation Telemetry Research Assistantship",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "¥170,000 monthly research salary",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application for enrolled graduate students",
        tuition: "Funded via Okayama Healthcare Innovation grant",
        source: "https://www.oka-pu.ac.jp/research/",
        desc: "Applied engineering research developing exoskeleton gait assistance, EMG signal decoding, and tele-rehabilitation platforms for elderly care.",
        requirements: {
          gpa: "Enrolled in OPU engineering master's or PhD program",
          ielts: "Working English proficiency",
          gre: "Not required",
          papers: "Experience in MATLAB/Simulink, ROS (Robot Operating System), or bio-signal sensors",
          references: "Lab director recommendation"
        }
      },
      {
        id: 3053,
        title: "Seto Inland Sea Automotive & Electronics Industry Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "¥1,200/hour for 12-week industrial engineering placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward master's degree",
        source: "https://www.oka-pu.ac.jp/career/",
        desc: "Technical internship working with Okayama automotive components manufacturers and precision electronics fabrication plants in the Mizushima Industrial Complex.",
        requirements: {
          gpa: "Enrolled in engineering graduate degree with good standing",
          ielts: "Japanese conversational ability (JLPT N3+) and basic English",
          gre: "Not required",
          papers: "Technical resume and engineering coursework records",
          references: "Faculty advisor confirmation"
        }
      },
      {
        id: 3054,
        title: "Okayama Smart Systems Postdoctoral Research Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "¥4,200,000 annual fellowship stipend with research equipment budget",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral appointment",
        source: "https://www.oka-pu.ac.jp/research/fellowship/",
        desc: "Two-year postdoctoral fellowship investigating IoT sensor networks, agricultural environmental telemetry, and real-time edge computing algorithms.",
        requirements: {
          gpa: "PhD in Computer Science, Systems Engineering, or Information Technology",
          ielts: "High-level English publication record",
          gre: "Not required",
          papers: "Three peer-reviewed journal papers and a 3-page research proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 3055,
        title: "Tenure-Track Associate Professor in Intelligent Robotics & Control",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "¥6,800,000 - ¥8,400,000 annual salary under prefectural university scale",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Tenured or tenure-track academic appointment",
        source: "https://www.oka-pu.ac.jp/recruit/",
        desc: "Faculty position in the Department of Systems Engineering, teaching robotics, automatic control theory, and mechatronics while conducting funded research.",
        requirements: {
          gpa: "PhD in Robotics, Control Engineering, or Mechanical Systems",
          ielts: "Fluency in Japanese and English for academic teaching and mentoring",
          gre: "Not required",
          papers: "Strong publication track record in IEEE or equivalent international robotics journals",
          references: "Three academic reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1326,
        name: "Prof. Dr. Yoshihiro Ohnishi",
        title: "Professor of Intelligent Robotics & Human-Machine Systems",
        subject: "engineering",
        topics: ["Assistive Robotics", "Exoskeleton Control", "Motion Planning", "Human-Robot Interaction"],
        source: "https://www.oka-pu.ac.jp/faculty/ohnishi_yoshihiro.html",
        summary: "Prof. Ohnishi designs wearable robotic rehabilitation exoskeletons and adaptive control algorithms that augment mobility for mobility-impaired individuals."
      },
      {
        id: 1327,
        name: "Prof. Dr. Kenichi Takahashi",
        title: "Professor of Computer Systems & Distributed Information Networks",
        subject: "computer-science",
        topics: ["Sensor Networks", "Edge Computing", "Distributed Systems", "Fault-Tolerant Architectures"],
        source: "https://www.oka-pu.ac.jp/faculty/takahashi_kenichi.html",
        summary: "Prof. Takahashi researches decentralized sensor network protocols, real-time edge computing nodes, and fault-tolerant cloud-edge architectures."
      },
      {
        id: 1328,
        name: "Prof. Dr. Sachiko Matsumoto",
        title: "Professor of Biomedical Signal Processing & Health Informatics",
        subject: "biology",
        topics: ["Biosignal Analysis", "ECG/EEG Processing", "Telemedicine", "Wearable Healthcare"],
        source: "https://www.oka-pu.ac.jp/faculty/matsumoto_sachiko.html",
        summary: "Prof. Matsumoto develops signal processing algorithms for wearable health monitors, detecting cardiac arrhythmia and cognitive stress markers in real time."
      }
    ]
  },

  // 25. Sweden: HDK-Valand - Academy of Art and Design
  {
    institution: "HDK-Valand - Academy of Art and Design",
    shortName: "HDK-Valand",
    slug: "hdk-valand-academy-of-art-and-design",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Gothenburg, Sweden",
    website: "https://www.gu.se/en/hdk-valand",
    sourceRow: 1570,
    headline: "HDK-Valand: Craft, Design, Film, Fine Art & Photography Guide",
    overview: "HDK-Valand - Academy of Art and Design at the University of Gothenburg is one of Northern Europe's most influential art and design faculties, uniting historic traditions in craft, furniture design, contemporary fine art, photography, and film production.",
    description: "Verified master's programs, artistic doctoral fellowships, and international admissions guide for HDK-Valand in Gothenburg, Sweden.",
    heroEyebrow: "University of Gothenburg Art Faculty · Scandinavia Design Hub",
    tuitionText: "Tuition is completely free (SEK 0) for Swedish and EU/EEA/Swiss citizens. For non-EU/EEA international students, tuition is approximately SEK 240,000 to SEK 280,000 per academic year. The University of Gothenburg Axel Adler Scholarship provides full tuition waivers for international applicants.",
    admissions: {
      masters: "Bachelor's degree of at least 180 ECTS credits in fine art, design, craft, photography, or equivalent artistic training.",
      phd: "Master's degree in fine arts, design, or craft (minimum 240 ECTS) and an approved doctoral research proposal in artistic practice.",
      language: "English 6 / English B (IELTS Academic 6.5 with no band below 5.5, or TOEFL iBT 90 with minimum 20 in writing).",
      proposal: "A digital portfolio of 10-15 artistic works, accompanied by a written project statement (approx. 1,000 words) describing planned artistic inquiries.",
      appFee: "SEK 900 application fee for non-EU/EEA applicants via Universityadmissions.se.",
      documents: "Official academic transcripts, degree certificate, CV, digital artistic portfolio, and letters of recommendation."
    },
    opportunities: [
      {
        id: 3056,
        title: "University of Gothenburg Axel Adler Scholarship (HDK-Valand)",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "100% tuition fee waiver for full master's program duration",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 application fee",
        tuition: "Full tuition waiver covering SEK 260,000/year",
        source: "https://www.gu.se/en/study-in-gothenburg/apply/scholarships",
        desc: "Merit-based full tuition scholarship awarded to top-ranking non-EU/EEA applicants admitted to master's programs at HDK-Valand.",
        requirements: {
          gpa: "Top artistic portfolio evaluation and strong undergraduate academic performance",
          ielts: "IELTS 6.5 (minimum 5.5 in each section) or TOEFL 90",
          gre: "Not required",
          papers: "Outstanding artistic portfolio submitted through the University of Gothenburg portal",
          references: "Two academic or artistic referee letters"
        }
      },
      {
        id: 3057,
        title: "Master of Fine Arts (MFA) in Design & Material-Led Practice",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        funding: "Tuition-free for EU/EEA citizens; Axel Adler scholarship eligible for non-EU",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 for non-EU",
        tuition: "SEK 0 EU / SEK 265,000 non-EU per year",
        source: "https://www.gu.se/en/study-in-gothenburg/apply/programmes-courses/master-of-fine-arts-in-design",
        desc: "Two-year master's exploring critical design, circular materials, social design, spatial interventions, and sustainable production in Gothenburg.",
        requirements: {
          gpa: "Bachelor of Fine Arts in Design or Architecture (180 ECTS)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Digital portfolio of 5-10 design projects and 1,000-word project plan",
          references: "Two recommendation letters"
        }
      },
      {
        id: 3058,
        title: "Ph.D. in Artistic Practice (Design, Fine Art, or Film)",
        type: "PhD",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "Fully salaried Swedish doctoral employment: SEK 31,500/month (SEK 378,000/year)",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero application fee",
        tuition: "SEK 0 tuition (employed as university doctoral researcher)",
        source: "https://www.gu.se/en/hdk-valand/doctoral-studies",
        desc: "Four-year salaried doctoral research position investigating practice-led artistic inquiries, critical visual culture, and participatory film aesthetics.",
        requirements: {
          gpa: "Master of Fine Arts or equivalent advanced artistic degree (minimum 240 ECTS)",
          ielts: "English 6 / IELTS 6.5",
          gre: "Not required",
          papers: "Artistic documentation portfolio and a 5-page research proposal detailing artistic methods",
          references: "Two academic or artistic references"
        }
      },
      {
        id: 3059,
        title: "Gothenburg Urban Craft & Bio-Circular Materiality Laboratory",
        type: "Research",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        funding: "SEK 28,000 monthly research stipend",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application for enrolled master's students",
        tuition: "Funded via Swedish Research Council (Vetenskapsrådet) grant",
        source: "https://www.gu.se/en/hdk-valand/our-research",
        desc: "Studio-based research investigating local wood species, seaweed-derived bioplastics, and regenerative textile dyeing in collaboration with West Sweden craft guilds.",
        requirements: {
          gpa: "Enrolled in MFA program at HDK-Valand with distinction standing",
          ielts: "Fluent working English",
          gre: "Not required",
          papers: "Demonstrated skills in wood workshop, ceramics, or biomaterial casting",
          references: "Studio head recommendation"
        }
      },
      {
        id: 3060,
        title: "Röhsska Museum of Design and Craft Curatorial Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "SEK 14,000 monthly living allowance for 16-week museum placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward MFA",
        source: "https://www.gu.se/en/hdk-valand",
        desc: "Curatorial and exhibition design practicum working at the Röhsska Museum in central Gothenburg on Scandinavian design archives and contemporary retrospectives.",
        requirements: {
          gpa: "Completed year 1 of MFA at HDK-Valand",
          ielts: "English fluency; Swedish language skills advantageous",
          gre: "Not required",
          papers: "Curatorial statement and updated artist resume",
          references: "Faculty tutor sign-off"
        }
      },
      {
        id: 3061,
        title: "HDK-Valand International Postdoctoral Fellowship in Artistic Research",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "SEK 440,000 annual salary under Swedish collective bargaining agreement",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral appointment",
        source: "https://www.gu.se/en/about-the-university/work-at-the-university-of-gothenburg/vacancies",
        desc: "Two-year postdoctoral research appointment advancing practice-based artistic inquiry in digital craft, cinematic storytelling, or public space interventions.",
        requirements: {
          gpa: "PhD in Artistic Research, Fine Art, Design, or Media",
          ielts: "Distinguished international exhibition or publication record",
          gre: "Not required",
          papers: "Artistic documentation dossier and a 4-page research project plan",
          references: "Three professional reference letters"
        }
      },
      {
        id: 3062,
        title: "Senior Lecturer in Critical Design & Social Innovation",
        type: "Job",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "SEK 520,000 - SEK 620,000 annual salary plus Swedish pension and healthcare",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Permanent faculty appointment (Universitetslektor)",
        source: "https://www.gu.se/en/about-the-university/work-at-the-university-of-gothenburg/vacancies",
        desc: "Senior faculty post leading design ateliers, supervising master's and doctoral theses, and driving externally funded artistic research in Gothenburg.",
        requirements: {
          gpa: "PhD in Design or recognized equivalent artistic research excellence",
          ielts: "Fluency in English (and willingness to learn Swedish within 2 years)",
          gre: "Not required",
          papers: "Extensive pedagogical dossier and international design exhibition record",
          references: "Three reference letters and artistic portfolio"
        }
      }
    ],
    researchers: [
      {
        id: 1329,
        name: "Prof. Dr. Henric Benesch",
        title: "Professor of Design & Dean of the Faculty of Fine, Applied and Performing Arts",
        subject: "arts-design",
        topics: ["Critical Design", "Social Infrastructure", "Pedagogy of Design", "Urban Studies"],
        source: "https://www.gu.se/en/about/find-staff/henricbenesch",
        summary: "Prof. Benesch investigates design as a critical infrastructure, participatory public space design, and transformative arts education frameworks."
      },
      {
        id: 1330,
        name: "Prof. Dr. Jyoti Mistry",
        title: "Professor in Film & Moving Image",
        subject: "arts-design",
        topics: ["Artistic Research in Film", "Decolonial Aesthetics", "Cinematic Memory", "Visual Essay"],
        source: "https://www.gu.se/en/about/find-staff/jyotimistry",
        summary: "Prof. Mistry is an internationally acclaimed filmmaker and theorist whose artistic research explores postcolonial memory, gender, and cinematic experimentation."
      },
      {
        id: 1331,
        name: "Prof. Dr. Mick Wilson",
        title: "Professor of Contemporary Art & Director of Doctoral Studies",
        subject: "arts-design",
        topics: ["Curatorial Studies", "Artistic Research Methodology", "Public Sphere", "Epistemic Practice"],
        source: "https://www.gu.se/en/about/find-staff/mickwilson",
        summary: "Prof. Wilson is an educator, artist, and curator leading global discourse on artistic research methodologies, exhibition histories, and cultural politics."
      }
    ]
  },

  // 26. Sweden: Campus USÖ - Örebro University Medical Campus
  {
    institution: "Campus USÖ - Örebro University Medical Campus",
    shortName: "Campus USÖ",
    slug: "campus-uso",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Örebro, Sweden",
    website: "https://www.oru.se",
    sourceRow: 1560,
    headline: "Campus USÖ: Medical Sciences, Immunology, Cardiovascular & AI Diagnostics Guide",
    overview: "Campus USÖ is the state-of-the-art medical and healthcare sciences campus of Örebro University, co-located directly with Örebro University Hospital (Universitetssjukhuset Örebro), celebrated for leading research in mucosal immunology, gut-brain axis, cardiovascular medicine, and robotic surgery.",
    description: "Verified medical master's degrees, clinical PhD fellowships, and admissions guide for Campus USÖ at Örebro University in Sweden.",
    heroEyebrow: "Örebro University Medical Campus · Universitetssjukhuset Örebro Hub",
    tuitionText: "Tuition is free (SEK 0) for Swedish and EU/EEA citizens. Non-EU/EEA international students pay approximately SEK 140,000 to SEK 165,000 per academic year for health sciences. Fully salaried doctoral positions (Doktorandanställning) provide SEK 32,000/month with zero tuition for all nationalities.",
    admissions: {
      masters: "Bachelor's degree of at least 180 ECTS in biomedicine, nursing, public health, medicine, or related life science.",
      phd: "Master's degree or equivalent (minimum 240 ECTS) in medical sciences, molecular biology, or biochemistry, and an approved doctoral research project.",
      language: "English 6 / English B (IELTS Academic 6.5 with no band below 5.5, or TOEFL iBT 90 with minimum 20 in writing).",
      proposal: "A 3-page research synopsis outlining proposed clinical hypothesis, laboratory methods, and translational patient relevance.",
      appFee: "SEK 900 application fee for non-EU/EEA applicants via Universityadmissions.se.",
      documents: "Certified transcripts, degree certificates, CV, research synopsis, and two letters of recommendation."
    },
    opportunities: [
      {
        id: 3063,
        title: "Örebro University Medical Sciences International Merit Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "100% tuition waiver for master's programs in biomedicine or medical sciences",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 for non-EU",
        tuition: "Full tuition waiver covering SEK 150,000/year",
        source: "https://www.oru.se/english/study/application-and-admission/scholarships/",
        desc: "Tuition waiver scholarship awarded to top-ranking non-EU/EEA applicants admitted to international master's programs at Campus USÖ.",
        requirements: {
          gpa: "Top decile standing in undergraduate biomedical or health degree",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Academic motivation letter and curriculum vitae",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3064,
        title: "Master of Science in Experimental Biomedicine (Campus USÖ)",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Tuition-free for EU/EEA; paid summer research scholarships available",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 for non-EU",
        tuition: "SEK 0 EU / SEK 155,000 non-EU per year",
        source: "https://www.oru.se/english/study/master-programmes/master-programme-in-experimental-biomedicine/",
        desc: "Cutting-edge biomedical master's based at Örebro University Hospital focusing on molecular mechanisms of inflammatory diseases, oncology, and pharmacology.",
        requirements: {
          gpa: "Bachelor's degree in Biomedicine, Molecular Biology, Biochemistry, or Medicine (180 ECTS)",
          ielts: "English 6 / IELTS 6.5",
          gre: "Not required",
          papers: "Statement of purpose detailing laboratory experimental interests",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 3065,
        title: "Ph.D. in Medical Sciences (Mucosal Immunology & Gut-Brain Axis)",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Fully salaried Swedish doctoral contract: SEK 32,500/month (SEK 390,000/year)",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "SEK 0 tuition (salaried university employee with healthcare & pension)",
        source: "https://www.oru.se/english/research/doctoral-programmes/medical-sciences/",
        desc: "Four-year salaried doctoral research appointment investigating gut microbiome interactions, intestinal barrier function, and neuro-inflammatory signaling pathways.",
        requirements: {
          gpa: "Master's degree in Biomedicine, Medicine, Immunology, or Biochemistry",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Master's thesis copy and 3-page research proposal in mucosal biology",
          references: "Two academic reference letters"
        }
      },
      {
        id: 3066,
        title: "Örebro Cardiovascular & Atherosclerosis Research Assistantship",
        type: "Research",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "SEK 29,000 monthly research salary",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application for enrolled graduate researchers",
        tuition: "Funded via Swedish Heart-Lung Foundation (Hjärt-Lungfonden)",
        source: "https://www.oru.se/english/research/research-centres/cvm/",
        desc: "Translational research investigating vascular smooth muscle calcification, inflammatory biomarkers in coronary plaques, and novel lipid-lowering targets.",
        requirements: {
          gpa: "Graduate standing in Biomedicine or Medicine at Campus USÖ",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Experience in flow cytometry, ELISA, immunohistochemistry, or cell culture",
          references: "Center director endorsement"
        }
      },
      {
        id: 3067,
        title: "Universitetssjukhuset Örebro Clinical Trials & Diagnostics Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "SEK 15,000 monthly stipend for 16-week hospital diagnostic placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward master's degree",
        source: "https://www.oru.se/english/study/career-support/",
        desc: "Clinical laboratory internship working inside Örebro University Hospital's accredited diagnostic pathology and clinical genetics testing units.",
        requirements: {
          gpa: "Enrolled in Biomedicine master's program with good academic record",
          ielts: "English fluency; Swedish language skills desirable",
          gre: "Not required",
          papers: "CV and clinical laboratory methods checklist",
          references: "Academic supervisor sign-off"
        }
      },
      {
        id: 3068,
        title: "Campus USÖ Inflammation & Microbiome Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "SEK 450,000 annual salary under Swedish university collective agreement",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero fee",
        tuition: "Full salaried postdoctoral appointment",
        source: "https://www.oru.se/english/about-us/working-at-orebro-university/vacancies/",
        desc: "Two-year postdoctoral research appointment investigating host-microbe metabolic interactions, fecal microbiota transplantation, and inflammatory bowel disease genetics.",
        requirements: {
          gpa: "PhD in Immunology, Microbiology, Gastroenterology, or Biomedical Sciences",
          ielts: "Distinguished international publication record",
          gre: "Not required",
          papers: "Three first-authored peer-reviewed papers and a 3-page research proposal",
          references: "Three academic reference letters"
        }
      },
      {
        id: 3069,
        title: "Senior Lecturer in Clinical Immunology & Translational Medicine",
        type: "Job",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "SEK 540,000 - SEK 650,000 annual salary plus state pension and health insurance",
        status: "Open",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        fee: "Zero application fee",
        tuition: "Permanent university academic appointment",
        source: "https://www.oru.se/english/about-us/working-at-orebro-university/vacancies/",
        desc: "Faculty appointment in the School of Medical Sciences at Campus USÖ, teaching medical students and spearheading independent research in cellular immunology.",
        requirements: {
          gpa: "PhD in Immunology, Medicine, or related life science",
          ielts: "Academic English fluency (and willingness to learn Swedish)",
          gre: "Not required",
          papers: "High-impact publications in peer-reviewed immunology journals and proven grant funding record",
          references: "Three academic reference letters and teaching portfolio"
        }
      }
    ],
    researchers: [
      {
        id: 1332,
        name: "Prof. Dr. Robert Brummer",
        title: "Professor of Gastroenterology & Clinical Nutrition & Former Dean of Medicine",
        subject: "biology",
        topics: ["Gut-Brain Axis", "Mucosal Barrier", "Irritable Bowel Syndrome", "Clinical Nutrition"],
        source: "https://www.oru.se/forskning/forskningsmiljoer/medicin-och-vard/nutrition-gut-brain-interactions-research-centre/",
        summary: "Prof. Brummer directs the Nutrition Gut-Brain Interactions Research Centre at Campus USÖ, pioneering studies on intestinal permeability and neurogastroenterology."
      },
      {
        id: 1333,
        name: "Prof. Dr. Allan Sirsjö",
        title: "Professor of Biomedicine & Cardiovascular Research",
        subject: "biology",
        topics: ["Vascular Inflammation", "Atherosclerosis", "Angiogenesis", "Cytokine Signaling"],
        source: "https://www.oru.se/forskning/forskningsmiljoer/medicin-och-vard/cvm/",
        summary: "Prof. Sirsjö investigates chronic vascular inflammation, cytokine signaling in cardiovascular disease, and endothelial dysfunction in metabolic syndrome."
      },
      {
        id: 1334,
        name: "Prof. Dr. Dirk Repsilber",
        title: "Professor of Biomedicine & Medical Bioinformatics",
        subject: "computer-science",
        topics: ["Medical Bioinformatics", "Systems Biology", "Transcriptomics", "Machine Learning in Medicine"],
        source: "https://www.oru.se/english/about-us/find-staff/dirk-repsilber/",
        summary: "Prof. Repsilber applies systems biology and statistical machine learning to high-throughput clinical omics data, identifying disease sub-phenotypes and biomarkers."
      }
    ]
  },

  // 27. Sweden: Campus Lidköping Vård & Omsorg / Folkbildning
  {
    institution: "Campus Lidköping Vård & Omsorg",
    shortName: "Campus Lidköping",
    slug: "abf-norra-varmland-higher-vocational",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Lidköping, Västra Götaland, Sweden",
    website: "https://www.abf.se",
    sourceRow: 1551,
    headline: "Campus Lidköping: Higher Vocational Care, Digital Health & Folkbildning Guide",
    overview: "Campus Lidköping, operating in close collaboration with ABF and regional health authorities in Västra Götaland, is a major higher vocational education (Yrkeshögskola - YH) center specializing in welfare technology, specialized healthcare nursing, and lifelong community education.",
    description: "Verified Swedish higher vocational diplomas (Yrkeshögskola), healthcare certifications, and admissions guide for Campus Lidköping.",
    heroEyebrow: "Swedish Higher Vocational College (Yrkeshögskola) · Västra Götaland",
    tuitionText: "Tuition is free (SEK 0) for Swedish and EU/EEA citizens under Swedish state funding through Myndigheten för yrkeshögskolan (MYH). Swedish CSN student financial aid (studielån och studiebidrag) provides approximately SEK 12,000 per month for eligible learners.",
    admissions: {
      masters: "Completion of Swedish upper secondary school (Gymnasieexamen) or equivalent international secondary school credentials with eligibility in Swedish and Healthcare.",
      phd: "Not offering independent doctoral studies; focus on accredited professional higher vocational qualifications (Yrkeshögskoleexamen).",
      language: "Swedish 2 or Swedish as a Second Language 2 (Svenska som andraspråk 2); English 5 / English A equivalent.",
      proposal: "Statement of vocational intent describing commitment to municipal elderly care or welfare technology implementation.",
      appFee: "Zero application fee through the Swedish YH application portal.",
      documents: "Certified upper secondary grades, work experience certificates in health or social care, and valid identification."
    },
    opportunities: [
      {
        id: 3070,
        title: "Campus Lidköping Regional Health Vocational Study Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "CSN state student financial aid (SEK 12,500/month grant + loan)",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "Full state-funded tuition free study (SEK 0 tuition)",
        source: "https://www.lidkoping.se/campus-lidkoping",
        desc: "Swedish state-supported vocational bursary enabling students to complete accredited two-year higher vocational health programs with zero tuition and living stipends.",
        requirements: {
          gpa: "Completed Swedish upper secondary school with passing grades in core subjects",
          ielts: "Swedish language competence (Svenska 2 / SAS 2)",
          gre: "Not required",
          papers: "Application dossier with validated high school certificate",
          references: "One referee from previous education or healthcare employer"
        }
      },
      {
        id: 3071,
        title: "Higher Vocational Diploma in Welfare Technology & Digital Care (YH)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "State-funded; zero tuition fees for eligible students",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "SEK 0 tuition under MYH state regulations",
        source: "https://www.lidkoping.se/campus-lidkoping/utbildningar/",
        desc: "Accredited two-year vocational qualification training welfare technologists in digital care alarms, telecare medicine, sensor monitoring, and assistive smart home devices.",
        requirements: {
          gpa: "General entry requirements for Swedish higher vocational education plus Healthcare and Social Care Program coursework",
          ielts: "Svenska 2 or equivalent",
          gre: "Not required",
          papers: "Verified work experience certificate (minimum 1 year in healthcare)",
          references: "One employer reference letter"
        }
      },
      {
        id: 3072,
        title: "Specialized Healthcare & Palliative Care Vocational Diploma",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "CSN eligible with guaranteed municipal clinical placement",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero application fee",
        tuition: "SEK 0 tuition",
        source: "https://www.lidkoping.se/campus-lidkoping",
        desc: "Advanced professional diploma for assistant nurses (undersköterskor) specializing in complex geriatric syndromes, palliative care, and dementia nursing.",
        requirements: {
          gpa: "Diploma from Health and Social Care Program (Vård- och omsorgsprogrammet) with at least 1 year clinical nursing experience",
          ielts: "Svenska 2",
          gre: "Not required",
          papers: "Nursing diploma certificate and clinical employment records",
          references: "Head nurse recommendation"
        }
      },
      {
        id: 3073,
        title: "Skaraborg Municipal Welfare Robotics & Digital Monitoring Study",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "SEK 12,000 project grant support",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application",
        tuition: "Municipality sponsored project",
        source: "https://www.lidkoping.se",
        desc: "Applied practical study tracking user adoption, privacy concerns, and operational efficiency of robotic medication dispensers in Skaraborg home care services.",
        requirements: {
          gpa: "Enrolled in Welfare Technology program at Campus Lidköping",
          ielts: "Proficiency in Swedish",
          gre: "Not required",
          papers: "Project proposal examining welfare technology integration",
          references: "Program coordinator recommendation"
        }
      },
      {
        id: 3074,
        title: "Västra Götaland Municipal Healthcare LIA Work Placement",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Mandatory LIA placement integrated with CSN funding",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated in YH qualification",
        source: "https://www.lidkoping.se/campus-lidkoping",
        desc: "20 weeks of supervised Learning in Working Life (LIA - Lärande i arbete) at municipal elderly care facilities, primary healthcare centers, and hospital wards in Lidköping and Skövde.",
        requirements: {
          gpa: "Passing grades in theoretical coursework units",
          ielts: "Swedish professional fluency",
          gre: "Not required",
          papers: "Police record extract for working with elderly and vulnerable individuals",
          references: "LIA tutor approval"
        }
      },
      {
        id: 3075,
        title: "Folkbildning & Lifelong Learning Pedagogical Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "SEK 360,000 annual educational fellowship stipend",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://www.abf.se",
        desc: "One-year curriculum fellowship developing participatory adult education circles, digital literacy modules for seniors, and integration courseware for new arrivals.",
        requirements: {
          gpa: "Degree in Pedagogy, Social Work, or Adult Education",
          ielts: "High Swedish communication proficiency",
          gre: "Not required",
          papers: "Portfolio of adult educational study circles and 2-page project outline",
          references: "Two professional folkbildning references"
        }
      },
      {
        id: 3076,
        title: "Lead Vocational Instructor in Welfare Technology & Digital Health",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "SEK 420,000 - SEK 490,000 annual salary under Swedish municipal agreement",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time vocational educator appointment",
        source: "https://www.lidkoping.se/jobb",
        desc: "Full-time teaching role coordinating YH courses in welfare technology, developing municipal clinical partnerships, and supervising student LIA placements in Lidköping.",
        requirements: {
          gpa: "Bachelor's degree in Health Science, Nursing, or Welfare Technology",
          ielts: "Fluency in Swedish language",
          gre: "Not required",
          papers: "Demonstrated 3+ years active healthcare or municipal welfare technology experience",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1335,
        name: "Kerstin Lindqvist",
        title: "Head of Higher Vocational Education (Yrkeshögskolan)",
        subject: "social-sciences",
        topics: ["Vocational Curriculum", "Workplace Learning (LIA)", "Welfare Technology", "Municipal Healthcare"],
        source: "https://www.lidkoping.se/campus-lidkoping/kontakt/",
        summary: "Kerstin Lindqvist directs vocational programs at Campus Lidköping, coordinating with regional employers to design curricula that fulfill healthcare staffing needs."
      },
      {
        id: 1336,
        name: "Lars-Göran Nilsson",
        title: "Senior Lecturer in Welfare Technology & Assistive Devices",
        subject: "computer-science",
        topics: ["Assistive Technology", "Telecare Sensors", "Smart Home Implementation", "Elderly Care Ergonomics"],
        source: "https://www.lidkoping.se/campus-lidkoping/kontakt/",
        summary: "Lars-Göran Nilsson trains healthcare professionals on the clinical integration of IoT telecare sensors, passive fall monitors, and digital care journals."
      },
      {
        id: 1337,
        name: "Anna Bergström",
        title: "Coordinator of Clinical Training & Palliative Care Education",
        subject: "biology",
        topics: ["Palliative Nursing", "Geriatric Care", "Person-Centered Care", "Clinical Mentorship"],
        source: "https://www.lidkoping.se/campus-lidkoping/kontakt/",
        summary: "Anna Bergström coordinates specialized nursing programs, focusing on person-centered dementia care, palliative nursing ethics, and clinical workplace supervision."
      }
    ]
  },

  // 28. Netherlands: Rotterdam Business School
  {
    institution: "Rotterdam Business School",
    shortName: "RBS Rotterdam",
    slug: "rotterdam-business-school",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Rotterdam, Netherlands",
    website: "https://www.rotterdamuas.com",
    sourceRow: 1482,
    headline: "Rotterdam Business School: International Business, Supply Chain, Finance & Logistics Guide",
    overview: "Rotterdam Business School (RBS) is the international business faculty of Rotterdam University of Applied Sciences (Hogeschool Rotterdam), situated in Europe's largest seaport, internationally known for hands-on master's programs in Global Supply Chain Management, International Finance, and Sustainable Business Consultancy.",
    description: "Verified master's programs, port logistics scholarships, and international admissions guide for Rotterdam Business School in the Netherlands.",
    heroEyebrow: "Dutch University of Applied Sciences · Port of Rotterdam Hub",
    tuitionText: "Tuition for EU/EEA students is set at the statutory Dutch fee of approximately €2,530 per year. For non-EU/EEA international students, master's tuition is approximately €11,500 to €13,200 per year. The NL Scholarship (formerly Holland Scholarship) awards €5,000 to eligible non-EEA students.",
    admissions: {
      masters: "Bachelor's degree (minimum 180 or 240 ECTS) in business administration, economics, logistics, or engineering from a recognized institution.",
      phd: "Not offering independent doctoral degrees; focus on professional practice-oriented Master's degrees.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each sub-score) or TOEFL iBT 90 overall (minimum 20 in each section).",
      proposal: "A 1,000-word motivation essay outlining professional career goals, reasons for selecting Rotterdam, and relevant business experience.",
      appFee: "Zero application fee via Studielink and the university application portal.",
      documents: "Certified bachelor's diploma, official transcripts, CV, motivation letter, and copy of passport."
    },
    opportunities: [
      {
        id: 3077,
        title: "NL Scholarship (Rotterdam University of Applied Sciences)",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "€5,000 one-off merit grant funded by the Dutch Ministry of Education",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero application fee",
        tuition: "Applied toward international tuition fees",
        source: "https://www.rotterdamuas.com/study-information/practical-information/permits-and-finances/scholarships/",
        desc: "Prestigious scholarship financed by the Dutch Ministry of Education, Culture and Science for excellent non-EEA students entering master's programs at RBS.",
        requirements: {
          gpa: "Minimum 7.5 on Dutch grading scale or equivalent top 15% standing",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Compelling motivation letter explaining career focus in Rotterdam",
          references: "One academic or professional reference"
        }
      },
      {
        id: 3078,
        title: "Master in Global Supply Chain Management (Port of Rotterdam)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "Industry-sponsored master thesis projects with Port of Rotterdam companies",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "€2,530 EU / €12,500 non-EU per year",
        source: "https://www.rotterdamuas.com/programmes/master/global-supply-chain-management/full-time/",
        desc: "One-year intensive master's program utilizing Rotterdam's port ecosystem, covering multimodal freight logistics, circular supply chains, warehouse automation, and predictive analytics.",
        requirements: {
          gpa: "Bachelor's degree in Business, Logistics, Industrial Engineering, or Economics",
          ielts: "IELTS 6.5 (no sub-score below 6.0)",
          gre: "Not required",
          papers: "Curriculum vitae and motivation letter",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 3079,
        title: "Master in International Finance and Accounting",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "Early application discounts and corporate installment plans",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero application fee",
        tuition: "€2,530 EU / €12,000 non-EU per year",
        source: "https://www.rotterdamuas.com/programmes/master/international-finance--accounting/full-time/",
        desc: "Career-focused master's degree training international financial managers in corporate governance, financial technology (FinTech), ESG accounting, and corporate valuation.",
        requirements: {
          gpa: "Bachelor's degree in Finance, Accounting, or Economics with solid mathematics background",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Academic transcript and motivation essay",
          references: "One academic reference letter"
        }
      },
      {
        id: 3080,
        title: "Port of Rotterdam Smart Logistics & Decarbonization Project",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "€15,000 project research grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled master's students",
        tuition: "Supported by Rotterdam Port Authority collaboration",
        source: "https://www.rotterdamuas.com/research/",
        desc: "Applied logistics research modeling zero-emission hinterland transport corridors, shore power integration for container ships, and automated guided vehicles (AGVs).",
        requirements: {
          gpa: "Enrolled in Global Supply Chain master's program with high marks",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Knowledge of logistics simulation software (AnyLogic / Python)",
          references: "Academic director recommendation"
        }
      },
      {
        id: 3081,
        title: "Rotterdam Maritime Gateway & Freight Forwarding Internship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "€750 - €1,000 per month industry internship stipend for 5-month placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Credit-earning component of master's degree",
        source: "https://www.rotterdamuas.com/study-information/career-portal/",
        desc: "Professional work placement with leading global logistics providers and shipping liners based in Rotterdam (Maersk, Vopak, DHL Global Forwarding).",
        requirements: {
          gpa: "Satisfactory completion of semester 1 master's coursework",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Professional CV and motivation letter",
          references: "Internship coordinator approval"
        }
      },
      {
        id: 3082,
        title: "Circular Business Models & Sustainable Trade Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€36,000 annual research fellowship grant",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Applied research appointment",
        source: "https://www.rotterdamuas.com/research/centres-of-expertise/",
        desc: "One-year applied fellowship within the Centre of Expertise for Sustainable Port Cities, analyzing closed-loop industrial plastics recycling and circular maritime supply chains.",
        requirements: {
          gpa: "Master's degree or PhD in Supply Chain Management, Environmental Economics, or Business Administration",
          ielts: "High-level English publication competence",
          gre: "Not required",
          papers: "Two sample research publications and a 3-page project outline",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3083,
        title: "Senior Lecturer in International Supply Chain Management",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "€52,000 - €68,000 annual salary under Dutch HBO collective agreement (CAO HBO)",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Permanent faculty appointment",
        source: "https://www.rotterdamuas.com/about/working-at/",
        desc: "Faculty appointment delivering master's courses in supply chain network design, coordinating graduation theses, and managing port corporate partnerships.",
        requirements: {
          gpa: "Master's degree or PhD in Supply Chain Management, Logistics, or Operations Research",
          ielts: "Fluent academic and professional English",
          gre: "Not required",
          papers: "Minimum 5 years international logistics industry experience and proven teaching credentials",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1338,
        name: "Dr. Maurice Jansen",
        title: "Senior Lecturer & Port City Logistics Researcher",
        subject: "social-sciences",
        topics: ["Port Economics", "Maritime Logistics", "Circular Supply Chains", "Urban Port Interface"],
        source: "https://www.rotterdamuas.com/research/researchers/maurice-jansen/",
        summary: "Dr. Jansen is a prominent port economics researcher specializing in sustainable maritime freight corridors and talent development for global maritime logistics."
      },
      {
        id: 1339,
        name: "Dr. Ron van Duin",
        title: "Professor of Port and City Logistics",
        subject: "engineering",
        topics: ["City Logistics", "Electric Freight", "Intermodal Transport", "Operations Modeling"],
        source: "https://www.rotterdamuas.com/research/researchers/ron-van-duin/",
        summary: "Dr. van Duin leads applied research on zero-emission urban freight distribution, electric barge transport, and smart warehousing automation in Rotterdam."
      },
      {
        id: 1340,
        name: "Elena Popa",
        title: "Head of International Finance & Corporate Governance Studies",
        subject: "social-sciences",
        topics: ["ESG Reporting", "FinTech", "Corporate Finance", "International Accounting Standards"],
        source: "https://www.rotterdamuas.com/programmes/master/international-finance--accounting/",
        summary: "Elena Popa coordinates postgraduate finance programs, researching ESG reporting frameworks, corporate restructuring, and financial technology adoption."
      }
    ]
  },

  // 29. Netherlands: SRH Haarlem University of Applied Sciences
  {
    institution: "SRH Haarlem University of Applied Sciences",
    shortName: "SRH Haarlem",
    slug: "srh-haarlem-university-of-applied-sciences",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Haarlem, Netherlands",
    website: "https://www.srh-haarlem-campus.com",
    sourceRow: 1490,
    headline: "SRH Haarlem: Digital Transformation, Creative Media, Business & Applied AI Guide",
    overview: "SRH Haarlem University of Applied Sciences (Haarlem Campus) is a vibrant international university situated inside the iconic, renovated 'Koepel' monument in Haarlem (minutes from Amsterdam), delivering state-of-the-art bachelor's and master's programs in Digital Transformation, Business Psychology, Creative Media, and Applied Artificial Intelligence.",
    description: "Verified master's programs, digital innovation scholarships, and admissions guide for SRH Haarlem University of Applied Sciences.",
    heroEyebrow: "Innovative Dutch Campus · Historic Koepel Haarlem Hub",
    tuitionText: "Tuition for international graduate students averages €10,500 to €13,000 per academic year. Early-bird tuition fee reductions of up to €1,500, innovation merit scholarships, and flexible installment plans are available for qualified applicants.",
    admissions: {
      masters: "Bachelor's degree (minimum 180 ECTS) in business, computer science, psychology, or communications from an accredited higher education institution.",
      phd: "Not offering independent PhD degrees; focus on hands-on professional Master of Science degrees.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each sub-skill) or TOEFL iBT 88 overall.",
      proposal: "A 500-800 word personal motivation letter explaining choice of degree and future aspirations in digital transformation or creative enterprise.",
      appFee: "Zero application fee via the SRH Haarlem direct online admissions portal.",
      documents: "Bachelor's diploma, official transcripts, CV, motivation letter, and valid passport identification."
    },
    opportunities: [
      {
        id: 3084,
        title: "SRH Haarlem Future Digital Leader Merit Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "€2,500 to €4,500 tuition discount",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "Direct deduction from annual international tuition",
        source: "https://www.srh-haarlem-campus.com/admissions/fees-and-funding/",
        desc: "Merit-based tuition scholarship awarded to innovative international graduate applicants entering Applied Artificial Intelligence or Digital Transformation at Haarlem Campus.",
        requirements: {
          gpa: "Minimum 7.0 on Dutch scale or equivalent undergraduate GPA (minimum 75%+)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "500-word video pitch or written essay on leading digital transformation",
          references: "One academic or professional reference"
        }
      },
      {
        id: 3085,
        title: "Master of Science in Applied Artificial Intelligence in Business",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "Access to Haarlem Koepel tech startup incubator programs",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "€12,500 per academic year",
        source: "https://www.srh-haarlem-campus.com/programmes/master/applied-artificial-intelligence/",
        desc: "Practical master's degree training AI product managers in neural network applications, automated business workflows, conversational AI, and data governance.",
        requirements: {
          gpa: "Bachelor's degree in Computer Science, Data Science, Business Informatics, or Engineering",
          ielts: "IELTS 6.5 (no sub-score below 6.0)",
          gre: "Not required",
          papers: "Resume and technical statement of purpose",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 3086,
        title: "Master of Science in Digital Transformation Management",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Early application fee reductions and flexible payment schedules",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero application fee",
        tuition: "€11,800 per academic year",
        source: "https://www.srh-haarlem-campus.com/programmes/master/digital-transformation-management/",
        desc: "Interdisciplinary postgraduate degree focusing on organizational agility, platform business models, change leadership, and human-centered technology adoption.",
        requirements: {
          gpa: "Bachelor's degree in Business, Management, Communications, or Social Sciences",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Statement of purpose explaining digital business leadership vision",
          references: "One academic and one professional reference"
        }
      },
      {
        id: 3087,
        title: "De Koepel Haarlem Tech Incubator Applied Sandbox Project",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "€14,000 project grant support",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled master's students",
        tuition: "Supported by Haarlem tech entrepreneurship fund",
        source: "https://www.srh-haarlem-campus.com",
        desc: "Practical research project building and evaluating prototype generative AI chatbots and autonomous customer support workflows for regional SME businesses.",
        requirements: {
          gpa: "Enrolled in Applied AI master's with distinction grades",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Demonstrated skills in Python, LangChain, or LLM fine-tuning",
          references: "Program director endorsement"
        }
      },
      {
        id: 3088,
        title: "Amsterdam Metropolitan Tech Startup & Enterprise Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "€800 - €1,100 per month industry internship stipend for 5-month placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward master's degree",
        source: "https://www.srh-haarlem-campus.com/career-services/",
        desc: "Five-month technical and digital management internship working with fast-growing startups and tech agencies in Haarlem and the greater Amsterdam tech cluster.",
        requirements: {
          gpa: "Satisfactory completion of semester 1 master's units",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Professional CV and project portfolio",
          references: "Career advisor sign-off"
        }
      },
      {
        id: 3089,
        title: "Digital Ethics & Human-Centric AI Applied Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€35,000 annual applied research fellowship stipend",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Applied research post",
        source: "https://www.srh-haarlem-campus.com",
        desc: "One-year applied fellowship examining ethical frameworks for AI adoption in European small and medium enterprises, data sovereignty, and algorithmic transparency.",
        requirements: {
          gpa: "Master's degree or PhD in AI Ethics, Technology Policy, or Information Systems",
          ielts: "Strong English writing and presentation skills",
          gre: "Not required",
          papers: "Two sample research articles or white papers and a 3-page research proposal",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3090,
        title: "Senior Lecturer in Applied Artificial Intelligence & Data Science",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "€50,000 - €65,000 annual salary under Dutch higher education conditions",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time faculty appointment",
        source: "https://www.srh-haarlem-campus.com/careers/",
        desc: "Faculty position in the School of Technology, teaching applied machine learning, mentoring master's theses, and establishing corporate project partnerships in De Koepel.",
        requirements: {
          gpa: "Master's degree or PhD in Computer Science, Artificial Intelligence, or Data Science",
          ielts: "Fluent academic and professional English",
          gre: "Not required",
          papers: "Minimum 3 years active machine learning industry experience and passion for interactive pedagogy",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1341,
        name: "Dr. Alexander Bauer",
        title: "Academic Dean & Professor of Digital Transformation",
        subject: "computer-science",
        topics: ["Digital Strategy", "Platform Ecosystems", "Agile Organizations", "Technology Leadership"],
        source: "https://www.srh-haarlem-campus.com/faculty/",
        summary: "Dr. Bauer directs academic programs at SRH Haarlem, researching corporate digital agility, enterprise platform scaling, and executive leadership in digital contexts."
      },
      {
        id: 1342,
        name: "Dr. Julia Kramer",
        title: "Professor of Applied Artificial Intelligence & Cognitive Computing",
        subject: "computer-science",
        topics: ["Natural Language Processing", "AI Product Management", "Human-AI Teaming", "Ethical Algorithms"],
        source: "https://www.srh-haarlem-campus.com/faculty/",
        summary: "Dr. Kramer specializes in practical business deployment of generative AI models, conversational agent architectures, and human-in-the-loop decision systems."
      },
      {
        id: 1343,
        name: "Marc van der Linden",
        title: "Senior Lecturer in Creative Media & Entrepreneurship",
        subject: "arts-design",
        topics: ["Creative Entrepreneurship", "Immersive Media", "Design Thinking", "Startup Acceleration"],
        source: "https://www.srh-haarlem-campus.com/faculty/",
        summary: "Marc van der Linden mentors student founders inside De Koepel incubator, lecturing on creative media monetization, interactive branding, and venture design."
      }
    ]
  },

  // 30. Netherlands: Stenden University Groningen / NHL Stenden
  {
    institution: "Stenden University Groningen / NHL Stenden",
    shortName: "NHL Stenden Groningen",
    slug: "stenden-university-groningen",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Groningen & Leeuwarden, Netherlands",
    website: "https://www.nhlstenden.com",
    sourceRow: 1494,
    headline: "NHL Stenden: Circular Plastics, Design-Based Education & Hospitality Guide",
    overview: "NHL Stenden University of Applied Sciences (operating campuses in Groningen and Leeuwarden) is a pioneering Dutch institution globally celebrated for its Design-Based Education (DBE) model, the internationally acclaimed Circular Plastics research center, and Europe's largest hotel management school.",
    description: "Verified master's programs, circular plastics research fellowships, and international admissions guide for NHL Stenden in Groningen and Leeuwarden.",
    heroEyebrow: "Dutch University of Applied Sciences · Design-Based Education Hub",
    tuitionText: "Tuition for EU/EEA students is the statutory Dutch fee of approximately €2,530 annually. Non-EU/EEA international students pay approximately €9,500 to €11,800 per academic year. The NL Scholarship and NHL Stenden Excellence Scholarship award €5,000 to top international master's candidates.",
    admissions: {
      masters: "Bachelor's degree (minimum 180 or 240 ECTS) in chemistry, materials science, engineering, or hospitality/business management.",
      phd: "Not offering independent PhD degrees; focus on accredited professional Master of Science and Master of Arts programs.",
      language: "IELTS Academic 6.0 to 6.5 overall (minimum 5.5 to 6.0 in each sub-score) or TOEFL iBT 80 to 90.",
      proposal: "A 500-1,000 word motivation letter detailing alignment with the Design-Based Education (DBE) collaborative learning philosophy.",
      appFee: "Zero application fee via Studielink.",
      documents: "Bachelor's diploma, certified transcripts, CV, motivation letter, and passport identification."
    },
    opportunities: [
      {
        id: 3091,
        title: "NHL Stenden International Excellence & NL Scholarship",
        type: "Scholarship",
        subject: "chemistry",
        subjects: ["chemistry", "environment"],
        funding: "€5,000 merit grant awarded toward first-year tuition fees",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero application fee",
        tuition: "Direct deduction against non-EEA tuition fees",
        source: "https://www.nhlstenden.com/en/practical-information/tuition-fees-and-scholarships/scholarships",
        desc: "Merit-based grant funded in partnership with the Dutch government for talented non-EEA students entering master's programs in Circular Plastics or Hospitality Management.",
        requirements: {
          gpa: "Equivalent of at least 7.5 on Dutch grading scale or top 15% standing",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Motivation letter detailing commitment to sustainable innovation",
          references: "One academic or professional reference"
        }
      },
      {
        id: 3092,
        title: "Master in Circular Plastics & Sustainable Materials",
        type: "Master's",
        subject: "chemistry",
        subjects: ["chemistry", "environment", "engineering"],
        funding: "Access to European Sustainable Plastics Academy (ESPA) lab facilities",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "€2,530 EU / €11,500 non-EU per year",
        source: "https://www.nhlstenden.com/en/courses/circular-plastics-master",
        desc: "Cutting-edge master's degree focusing on mechanical and chemical recycling of polymers, bio-based thermoplastics, life-cycle analysis (LCA), and circular economy design.",
        requirements: {
          gpa: "Bachelor's degree in Chemistry, Chemical Engineering, Materials Science, or Mechanical Engineering",
          ielts: "IELTS 6.5 (no sub-score below 6.0)",
          gre: "Not required",
          papers: "Motivation statement detailing polymer chemistry interests",
          references: "Two academic or employer recommendations"
        }
      },
      {
        id: 3093,
        title: "Master in International Hospitality and Service Management",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Industry-partnered applied research and management projects",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero application fee",
        tuition: "€2,530 EU / €10,800 non-EU per year",
        source: "https://www.nhlstenden.com/en/courses/international-hospitality-and-service-management-master",
        desc: "Premier European hospitality master's program exploring strategic customer journey design, sustainable hotel operations, revenue management, and service innovation.",
        requirements: {
          gpa: "Bachelor's degree in Hospitality Management, Business Administration, or Tourism",
          ielts: "IELTS 6.0 overall (minimum 5.5 each band)",
          gre: "Not required",
          papers: "Resume and 1,000-word motivation essay",
          references: "One academic reference letter"
        }
      },
      {
        id: 3094,
        title: "Circular Plastics Professorship Polymer Recycling Assistantship",
        type: "Research",
        subject: "chemistry",
        subjects: ["chemistry", "environment"],
        funding: "€16,000 project research grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled master's students",
        tuition: "Funded via Dutch Topsector Chemistry research grant",
        source: "https://www.nhlstenden.com/en/research/professorships/circular-plastics",
        desc: "Laboratory research analyzing multilayer packaging delamination, pyrolysis of post-consumer plastic waste, and mechanical properties of recycled polyolefins.",
        requirements: {
          gpa: "Enrolled in Circular Plastics master's program with high marks",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Hands-on experience in DSC, TGA, extrusion, or FTIR spectroscopy",
          references: "Professorship lead recommendation"
        }
      },
      {
        id: 3095,
        title: "Northern Netherlands Circular Economy & Plastics Industry Practicum",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        funding: "€750 - €950 per month industry internship stipend for 5-month placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward master's degree",
        source: "https://www.nhlstenden.com/en/internship",
        desc: "Industrial engineering internship working with chemical recycling innovators and packaging manufacturers across the Chemport Europe cluster in Groningen and Drenthe.",
        requirements: {
          gpa: "Satisfactory completion of semester 1 master's coursework",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "CV and laboratory methods protocol summary",
          references: "Internship tutor approval"
        }
      },
      {
        id: 3096,
        title: "Design-Based Education & Sustainable Materials Applied Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "chemistry"],
        funding: "€36,000 annual applied research fellowship stipend",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Applied research appointment",
        source: "https://www.nhlstenden.com/en/research",
        desc: "One-year applied fellowship within the Circular Plastics Professorship, formulating eco-design guidelines for industrial consumer goods and bio-composites.",
        requirements: {
          gpa: "Master's degree or PhD in Materials Science, Polymer Chemistry, or Sustainable Design",
          ielts: "High-level English publication competence",
          gre: "Not required",
          papers: "Two sample research articles and a 3-page project proposal",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3097,
        title: "Senior Lecturer in Polymer Chemistry & Circular Plastics",
        type: "Job",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        funding: "€52,000 - €67,000 annual salary under Dutch HBO collective agreement",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Permanent faculty appointment",
        source: "https://www.nhlstenden.com/en/working-at",
        desc: "Faculty position teaching circular materials science, supervising master's design-based projects, and conducting industrial contract research in northern Netherlands.",
        requirements: {
          gpa: "Master's degree or PhD in Polymer Chemistry, Materials Science, or Chemical Engineering",
          ielts: "Fluent academic and professional English",
          gre: "Not required",
          papers: "Minimum 3 years industry or academic research experience in plastics recycling",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1344,
        name: "Prof. Dr. Rudy Folkersma",
        title: "Professor of Circular Plastics & Head of the Research Group",
        subject: "chemistry",
        topics: ["Polymer Recycling", "Bio-Based Plastics", "Mechanical Recycling", "Sustainable Materials"],
        source: "https://www.nhlstenden.com/en/research/professorships/circular-plastics",
        summary: "Prof. Dr. Folkersma leads the Circular Plastics Professorship, conducting cutting-edge applied research on mechanical and chemical recycling of industrial polymers."
      },
      {
        id: 1345,
        name: "Prof. Dr. Elena Cavagnaro",
        title: "Professor of Applied Sustainability in Service Management",
        subject: "social-sciences",
        topics: ["Sustainable Hospitality", "Three Levels of Sustainability", "Value-Driven Tourism", "Service Ethics"],
        source: "https://www.nhlstenden.com/en/research/professorships/sustainability-in-hospitality-and-tourism",
        summary: "Prof. Dr. Cavagnaro is an internationally recognized author on sustainability in hospitality, authoring The Three Levels of Sustainability and leading EU tourism projects."
      },
      {
        id: 1346,
        name: "Dr. Jan van der Borg",
        title: "Senior Researcher in Regional Tourism Economics & Heritage",
        subject: "social-sciences",
        topics: ["Heritage Management", "Overtourism Mitigation", "Regional Tourism Economics", "Urban Destinations"],
        source: "https://www.nhlstenden.com/en/research/professorships/sustainability-in-hospitality-and-tourism",
        summary: "Dr. van der Borg advises UNESCO, European municipalities, and international tourist boards on carrying capacity, sustainable visitor flows, and destination economics."
      }
    ]
  }
];
