/**
 * Batch 34 - Part 3: Universities 21 to 30 (Total Unis 462 to 471)
 * Japan (4), Sweden (3), Netherlands (3)
 * Opp IDs: 3238 to 3307 (70 opportunities)
 * Faculty IDs: 1407 to 1436 (30 faculty members)
 */

export const batch34Part3Universities = [
  // 21. Japan: Aichi University (Nagoya Campus)
  {
    institution: "Aichi University (Nagoya Campus)",
    shortName: "Aichi University Nagoya",
    slug: "aichi-university-nagoya-campus",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Sasashima Live, Nakamura-ku, Nagoya, Aichi, Japan",
    website: "https://www.aichi-u.ac.jp",
    sourceRow: 1623,
    headline: "Aichi University Nagoya: Global Economics, Modern Chinese Studies & Law Guide",
    overview: "Located in Nagoya's Sasashima Live 24 redevelopment district, Aichi University Nagoya Campus is an urban flagship institution internationally recognized for its Faculty of Modern Chinese Studies, International Communication, and Chubu regional economic policy research.",
    description: "Explore undergraduate and graduate programs, international exchange scholarships, and research at Aichi University Nagoya Campus in Japan.",
    heroEyebrow: "Nagoya Sasashima Live Campus · Modern Chinese Studies & Chubu Economics",
    tuitionText: "Annual undergraduate tuition is approximately ¥1,050,000 to ¥1,280,000. Graduate school tuition is approximately ¥750,000 to ¥920,000 per year. MEXT Japanese Government scholarships, JASSO honors scholarships, and Aichi University international tuition reduction grants (up to 50% waiver) are accessible.",
    admissions: {
      masters: "Graduation from an accredited 4-year undergraduate university (16 years of formal education) or evaluated equivalent for master's degree admission.",
      phd: "Master's degree or recognized professional graduate degree, submitted master's thesis, and structured doctoral research proposal in Japanese or English.",
      language: "JLPT N1 or N2 for Japanese-taught tracks; TOEFL iBT 79 or IELTS 6.0 for international global programs.",
      proposal: "Research plan (Kenkyu Keikaku-sho) of 2,000 to 3,000 Japanese characters detailing theoretical framework and literature.",
      appFee: "¥30,000 international screening examination fee.",
      documents: "Official academic transcripts, graduation certificate, JLPT or English proficiency score report, research plan, and letter of recommendation."
    },
    opportunities: [
      {
        id: 3238,
        title: "Aichi University International Academic Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "50% tuition waiver plus ¥50,000 monthly living stipend",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥30,000 screening fee",
        tuition: "Subsidizes first-year graduate enrollment at Nagoya campus",
        source: "https://www.aichi-u.ac.jp/international/scholarship",
        desc: "Merit-based financial award for newly admitted international master's and doctoral scholars demonstrating top academic standing in economics, commerce, or Asian studies.",
        requirements: {
          gpa: "Undergraduate GPA of 3.2/4.0 or equivalent",
          ielts: "JLPT N1/N2 or IELTS 6.5",
          gre: "Not required",
          papers: "Research proposal on East Asian economic integration or regional supply chains",
          references: "Two academic letters of recommendation from undergraduate dean or professor"
        }
      },
      {
        id: 3239,
        title: "Master of Modern Chinese Studies & East Asian Diplomacy",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Chubu business exchange travel fellowships",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥30,000 screening fee",
        tuition: "¥820,000 per academic year",
        source: "https://www.aichi-u.ac.jp/faculty/modern-chinese",
        desc: "Japan's premier graduate program in contemporary Chinese political economy, dual-degree cross-border fieldwork, and Sino-Japanese trade relations.",
        requirements: {
          gpa: "Bachelor's degree with background in Asian studies, politics, or linguistics",
          ielts: "JLPT N1 or HSK Level 5/6",
          gre: "Not required",
          papers: "Detailed 2,500-word Japanese research prospectus (Kenkyu Keikakusho)",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3240,
        title: "PhD in Chubu Regional Economics & Global Manufacturing Policy",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "¥1,200,000 annual doctoral research fellowship",
        status: "Open",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        fee: "¥30,000 screening fee",
        tuition: "¥680,000 annual tuition fee",
        source: "https://www.aichi-u.ac.jp/graduate/economics",
        desc: "Doctoral research examining automotive cluster supply chains, smart logistics in Central Japan, and green manufacturing transition economics.",
        requirements: {
          gpa: "Master's degree in economics or management with strong quantitative training",
          ielts: "TOEFL iBT 80 or JLPT N1",
          gre: "Not required",
          papers: "Summary of Master's thesis and 3,000-word doctoral dissertation plan",
          references: "Two faculty recommendations"
        }
      },
      {
        id: 3241,
        title: "BA in International Communication & Cross-Cultural Media",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Study abroad airfare subsidies for all admitted undergraduates",
        status: "Open",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026",
        fee: "¥30,000 application fee",
        tuition: "¥1,180,000 per year",
        source: "https://www.aichi-u.ac.jp/faculty/international-communication",
        desc: "Multilingual bachelor's curriculum integrating English and Asian language proficiency, global journalism, digital communications, and intercultural diplomacy.",
        requirements: {
          gpa: "Completion of 12 years of elementary and secondary schooling",
          ielts: "IELTS 6.0 or EJU (Examination for Japanese University Admission) Japanese score",
          gre: "Not required",
          papers: "Personal statement of international educational goals",
          references: "High school principal recommendation"
        }
      },
      {
        id: 3242,
        title: "Master of Business Administration & SME Innovation",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Nagoya Chamber of Commerce scholarship grants",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "¥30,000 screening fee",
        tuition: "¥890,000 per academic year",
        source: "https://www.aichi-u.ac.jp/graduate/business",
        desc: "Executive and full-time master's concentrating on family business succession, Monozukuri manufacturing management, and export strategy for Chubu SMEs.",
        requirements: {
          gpa: "Bachelor's degree plus minimum 2 years of business practice preferred",
          ielts: "JLPT N2 or IELTS 6.0",
          gre: "Not required",
          papers: "Essay on regional industrial competitiveness",
          references: "One academic and one employer reference"
        }
      },
      {
        id: 3243,
        title: "Intensive Japanese Language & Cultural Studies Semester",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "JASSO short-term exchange grants (¥80,000 monthly)",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "¥15,000 application fee",
        tuition: "¥350,000 per semester",
        source: "https://www.aichi-u.ac.jp/international/japanese-program",
        desc: "Immersive program designed for international university students seeking advanced Japanese proficiency, business etiquette, and cultural literacy.",
        requirements: {
          gpa: "Current enrollment in an accredited overseas university",
          ielts: "Basic Japanese proficiency (JLPT N4 or 150 hours of instruction)",
          gre: "Not required",
          papers: "Motivation statement",
          references: "One university academic reference"
        }
      },
      {
        id: 3244,
        title: "Chubu Clean Energy Industrial Transformation Internship",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "¥100,000 monthly living stipend and local transit pass",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "Corporate sponsored experiential learning credit",
        source: "https://www.aichi-u.ac.jp/career/internship",
        desc: "Summer placement with leading Nagoya automotive and aerospace suppliers researching carbon-neutral factory logistics and renewable energy integration.",
        requirements: {
          gpa: "Undergraduate junior/senior or master's student in economics, engineering, or environmental studies",
          ielts: "Conversational Japanese (JLPT N2)",
          gre: "Not required",
          papers: "Resume and cover letter detailing clean energy project interest",
          references: "Faculty advisor approval"
        }
      }
    ],
    researchers: [
      {
        id: 1407,
        name: "Prof. Dr. Masahiro Kawai",
        title: "Dean of Modern Chinese Studies & Professor of Asian Economics",
        subject: "social-sciences",
        topics: ["East Asian Economic Integration", "Chinese Macroeconomy", "Cross-Strait Trade", "Regional Financial Architecture"],
        source: "https://www.aichi-u.ac.jp/research/researcher",
        summary: "Prof. Kawai is an eminent authority on East Asian financial regionalism and Chinese economic transformation, having advised multilateral economic institutions."
      },
      {
        id: 1408,
        name: "Prof. Hiroshi Takahashi",
        title: "Professor of Regional Industrial Policy & Supply Chain Analytics",
        subject: "social-sciences",
        topics: ["Monozukuri Innovation", "Chubu Automotive Clusters", "Supply Chain Resilience", "SME Digitalization"],
        source: "https://www.aichi-u.ac.jp/research/researcher",
        summary: "Prof. Takahashi investigates the spatial economics and supplier networks of the Chubu industrial heartland, focusing on automotive electrification."
      },
      {
        id: 1409,
        name: "Dr. Yoko Suzuki",
        title: "Associate Professor of Intercultural Media & Communication",
        subject: "social-sciences",
        topics: ["Media Framing", "Transnational Asian Pop Culture", "Digital Discourse", "Intercultural Pedagogy"],
        source: "https://www.aichi-u.ac.jp/research/researcher",
        summary: "Dr. Suzuki studies transnational media distribution in East Asia, youth digital communication practices, and multilingual discourse analysis."
      }
    ]
  },

  // 22. Japan: Aomori University (Tokyo Campus)
  {
    institution: "Aomori University (Tokyo Campus)",
    shortName: "Aomori University Tokyo",
    slug: "aomori-university-tokyo-campus",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Edogawa-ku, Tokyo, Japan",
    website: "https://aomori-u-tokyo.jp",
    sourceRow: 1624,
    headline: "Aomori University Tokyo: Software Engineering, Data Science & Regional Revitalization",
    overview: "Established by the Kohseigakuen Educational Corporation, Aomori University Tokyo Campus in Edogawa Ward delivers state-of-the-art education in software engineering, applied artificial intelligence, management information systems, and urban-rural regional revitalization.",
    description: "Guide to bachelor's degrees, IT certifications, software engineering scholarships, and admissions at Aomori University Tokyo Campus.",
    heroEyebrow: "Tokyo Edogawa Academic Center · Software Engineering & Information Management",
    tuitionText: "Annual undergraduate tuition is approximately ¥1,150,000 to ¥1,350,000. Institutional tuition reductions up to 30% are awarded to qualifying international students, supplemented by JASSO scholarships and Kohseigakuen educational grants.",
    admissions: {
      masters: "Aomori University Tokyo specializes in undergraduate Bachelor of Software Engineering and Management Information; graduate applicants affiliate with parent university graduate schools.",
      phd: "Not offered at Tokyo Campus; undergraduate degree programs.",
      language: "JLPT N2 minimum for degree admission; EJU Japanese score of 200+ points.",
      proposal: "Statement of personal reason for choosing Tokyo Campus (Shibo Riyusho) and technical career aspirations.",
      appFee: "¥30,000 entrance examination fee.",
      documents: "High school graduation certificate, 3-year academic transcript, JLPT/EJU score certificate, personal statement, and valid residence card/passport."
    },
    opportunities: [
      {
        id: 3245,
        title: "Kohseigakuen Tokyo International Tech Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "¥300,000 annual tuition fee reduction",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "¥30,000 examination fee",
        tuition: "Renewable for four undergraduate years based on academic GPA",
        source: "https://aomori-u-tokyo.jp/admissions/scholarship/",
        desc: "Designed to support talented international students enrolling in the Faculty of Software Information at the Edogawa Tokyo campus.",
        requirements: {
          gpa: "High school GPA of 3.0 or equivalent, with strong mathematics grades",
          ielts: "JLPT N2 or EJU Japanese score >= 220",
          gre: "Not required",
          papers: "Personal essay on contributing to Japan's software industry",
          references: "Letter of recommendation from Japanese language school principal or high school teacher"
        }
      },
      {
        id: 3246,
        title: "Bachelor of Software Information (AI & Cloud Architecture)",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Tokyo IT industry co-op internships and project grants",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "¥30,000 examination fee",
        tuition: "¥1,260,000 per academic year",
        source: "https://aomori-u-tokyo.jp/faculty/software-information/",
        desc: "Four-year technical bachelor's degree covering full-stack software development, generative AI modeling, mobile application engineering, and cyber defense.",
        requirements: {
          gpa: "High school graduation diploma (12 years of formal schooling)",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Statement of purpose (800 Japanese characters)",
          references: "Academic reference letter"
        }
      },
      {
        id: 3247,
        title: "Bachelor of Business Administration & Management Information",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Tokyo enterprise business venture awards",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥30,000 examination fee",
        tuition: "¥1,190,000 per academic year",
        source: "https://aomori-u-tokyo.jp/faculty/business-administration/",
        desc: "Interdisciplinary bachelor's combining digital marketing, e-commerce systems, ERP implementation, and cross-border trade management.",
        requirements: {
          gpa: "Standard high school graduation credentials",
          ielts: "JLPT N2 or equivalent",
          gre: "Not required",
          papers: "Essay on digital transformation in retail businesses",
          references: "One referee letter"
        }
      },
      {
        id: 3248,
        title: "Tokyo Edogawa Community & Urban Revitalization Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "¥150,000 project grant and municipal fieldwork support",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "Academic credit for civic service learning",
        source: "https://aomori-u-tokyo.jp/campus-life/community/",
        desc: "Experiential fellowship connecting students with Edogawa Ward initiatives in disaster preparedness, intercultural coexistence, and urban greening.",
        requirements: {
          gpa: "Enrolled student at Aomori University Tokyo Campus",
          ielts: "Conversational Japanese proficiency",
          gre: "Not required",
          papers: "Community action plan (1,000 Japanese characters)",
          references: "Faculty advisor approval"
        }
      },
      {
        id: 3249,
        title: "Full-Stack Web & Mobile App Development Summer Intensive",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "Industry equipment sponsorship",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "¥10,000 registration fee",
        tuition: "¥180,000 certificate fee",
        source: "https://aomori-u-tokyo.jp/academics/short-programs/",
        desc: "Six-week intensive summer boot-camp focusing on TypeScript, React, React Native, serverless backends, and deployment on AWS.",
        requirements: {
          gpa: "Foundational programming familiarity in any language",
          ielts: "Japanese or English comprehension",
          gre: "Not required",
          papers: "GitHub repository link or code sample",
          references: "None"
        }
      },
      {
        id: 3250,
        title: "Tokyo IT Corporation Graduate Career Placement Internship",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "¥120,000 monthly internship stipend",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free application",
        tuition: "Work-integrated learning course credit",
        source: "https://aomori-u-tokyo.jp/career/support/",
        desc: "Three-month paid placement with Tokyo software houses and system integrators leading to prospective full-time employment offers in Japan.",
        requirements: {
          gpa: "Junior or senior standing with minimum 2.8 GPA",
          ielts: "JLPT N2 (Business Japanese)",
          gre: "Not required",
          papers: "Technical CV and portfolio of completed programming assignments",
          references: "Department chair recommendation"
        }
      },
      {
        id: 3251,
        title: "Aomori-Tokyo Cross-Campus Inter-Regional Exchange Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "Full travel and lodging grant for Tohoku fieldwork",
        status: "Open",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027",
        fee: "Free application",
        tuition: "Covers two-week exchange in Aomori Prefecture",
        source: "https://aomori-u-tokyo.jp/campus-life/exchange/",
        desc: "Enables Tokyo campus undergraduates to spend intensive study periods at the Aomori Main Campus studying agricultural tech, apple genomics, and marine ecology.",
        requirements: {
          gpa: "Good academic standing in first or second year",
          ielts: "Japanese language fluency",
          gre: "Not required",
          papers: "Essay on bridging metropolitan technology and regional natural resources",
          references: "One professor reference"
        }
      }
    ],
    researchers: [
      {
        id: 1410,
        name: "Prof. Kenichi Sato",
        title: "Campus Director & Professor of Software Systems",
        subject: "computer-science",
        topics: ["Distributed Computing", "Cloud System Architecture", "Data Reliability", "Software Engineering Pedagogy"],
        source: "https://aomori-u-tokyo.jp/faculty/staff/",
        summary: "Prof. Sato directs Tokyo Campus academic operations, specializing in large-scale distributed architectures, fault-tolerant cloud software, and IT curriculum design."
      },
      {
        id: 1411,
        name: "Dr. Mayumi Endo",
        title: "Professor of Information Management & Digital Marketing",
        subject: "social-sciences",
        topics: ["Consumer Big Data", "E-Commerce Strategy", "Digital Platforms", "Business Analytics"],
        source: "https://aomori-u-tokyo.jp/faculty/staff/",
        summary: "Dr. Endo researches digital platform dynamics, analyzing consumer interaction data and algorithmic merchandising for modern omnichannel retail."
      },
      {
        id: 1412,
        name: "Dr. Takashi Watanabe",
        title: "Associate Professor of Artificial Intelligence & Natural Language Processing",
        subject: "computer-science",
        topics: ["Natural Language Processing", "Machine Learning", "Automated Knowledge Extraction", "Dialogue Systems"],
        source: "https://aomori-u-tokyo.jp/faculty/staff/",
        summary: "Dr. Watanabe investigates semantic analysis of Japanese text, transformer-based conversational agents, and domain-specific knowledge graph generation."
      }
    ]
  },

  // 23. Japan: Bunkyo University (Tokyo Adachi Campus)
  {
    institution: "Bunkyo University (Tokyo Adachi Campus)",
    shortName: "Bunkyo University Adachi",
    slug: "bunkyo-university-tokyo-adachi-campus",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Adachi-ku, Tokyo, Japan",
    website: "https://www.bunkyo.ac.jp",
    sourceRow: 1626,
    headline: "Bunkyo University Tokyo Adachi: International Studies, Business & Media Guide",
    overview: "Bunkyo University's flagship Tokyo Adachi Campus, opened in 2021 near Hanahata, houses the Faculty of International Studies and Faculty of Business Administration, celebrated for bilingual education, media production, cross-cultural diplomacy, and educational pedagogical excellence.",
    description: "Explore bachelor's and master's degree programs, international study grants, and modern campus facilities at Bunkyo University Tokyo Adachi Campus.",
    heroEyebrow: "Tokyo Metropolitan Campus · Faculty of International Studies & Business",
    tuitionText: "Annual undergraduate tuition is approximately ¥1,200,000 to ¥1,380,000. Graduate tuition averages ¥780,000 per year. Bunkyo University provides a 30% international student tuition waiver, Bunkyo Educational Foundation awards, and external JASSO honors scholarships.",
    admissions: {
      masters: "Graduation from a recognized 4-year undergraduate university, submission of bachelor's graduation thesis or research equivalent, and interview.",
      phd: "Master's degree in international relations, linguistics, communication, or business administration, plus submitted research proposal.",
      language: "JLPT N1 or N2 for Japanese-based courses; TOEFL iBT 75 or IELTS 6.0 for international tracks.",
      proposal: "Research plan (Kenkyu Keikakusho) of 2,000 characters outlining methodology and primary sources.",
      appFee: "¥35,000 application screening fee.",
      documents: "Graduation certificate, academic transcript, official language score, statement of academic goals, and recommendation letter."
    },
    opportunities: [
      {
        id: 3252,
        title: "Bunkyo University Global Leadership Tuition Reduction Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "30% to 50% tuition waiver for qualified international students",
        status: "Open",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        fee: "¥35,000 screening fee",
        tuition: "Applied directly to reduce semester tuition costs",
        source: "https://www.bunkyo.ac.jp/international/scholarship/",
        desc: "Awarded to high-achieving international scholars admitted to the Faculty of International Studies or Faculty of Business Administration at Tokyo Adachi Campus.",
        requirements: {
          gpa: "Minimum 3.0/4.0 academic average in previous high school or university studies",
          ielts: "JLPT N2 or IELTS 6.0",
          gre: "Not required",
          papers: "Essay on multicultural coexistence in 21st-century Asian metropolises",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 3253,
        title: "BA in International Studies & Global Tourism Management",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Overseas study mobility grants up to ¥200,000",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "¥35,000 screening fee",
        tuition: "¥1,280,000 per academic year",
        source: "https://www.bunkyo.ac.jp/faculty/international/",
        desc: "Four-year curriculum addressing international relations, intercultural communications, sustainable tourism economics, and hospitality management.",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "JLPT N2 or EJU Japanese score 220+",
          gre: "Not required",
          papers: "Statement of purpose explaining international career objectives",
          references: "High school counselor reference"
        }
      },
      {
        id: 3254,
        title: "BA in Business Administration & Marketing Communication",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Corporate sponsored digital media project awards",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "¥35,000 screening fee",
        tuition: "¥1,240,000 per academic year",
        source: "https://www.bunkyo.ac.jp/faculty/business/",
        desc: "Develops competencies in corporate finance, brand strategy, advertising psychology, digital creative content production, and accounting systems.",
        requirements: {
          gpa: "High school diploma with satisfactory academic record",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Personal statement detailing interest in business enterprise",
          references: "One academic reference"
        }
      },
      {
        id: 3255,
        title: "Master of International Studies & Cross-Cultural Pedagogy",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Teaching assistantships in bilingual language laboratories",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "¥35,000 screening fee",
        tuition: "¥790,000 per academic year",
        source: "https://www.bunkyo.ac.jp/graduate/international/",
        desc: "Two-year postgraduate course investigating second-language acquisition theory, bilingual education, comparative international policy, and intercultural negotiation.",
        requirements: {
          gpa: "Bachelor's degree in humanities, social sciences, or education",
          ielts: "JLPT N1 or IELTS 6.5",
          gre: "Not required",
          papers: "Structured research plan (2,500 characters) and undergraduate thesis summary",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 3256,
        title: "Digital Media & Creative Production Studio Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "¥180,000 media equipment grant and studio access",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "Full studio access credit",
        source: "https://www.bunkyo.ac.jp/campus/adachi/",
        desc: "Provides undergraduate media creators with 4K broadcast studio facilities, podcasting suites, and editing suites for documentary and interactive design.",
        requirements: {
          gpa: "Enrolled student at Bunkyo University Adachi Campus",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Creative portfolio (video reel, web design, or graphic art)",
          references: "Media department professor recommendation"
        }
      },
      {
        id: 3257,
        title: "Adachi Ward Multilingual Community Service Internship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "¥60,000 monthly activity stipend",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Experiential service learning course credit",
        source: "https://www.bunkyo.ac.jp/campus/adachi/community/",
        desc: "Fieldwork internship assisting local Adachi Ward schools, international resident consultation desks, and cultural diversity initiatives.",
        requirements: {
          gpa: "Minimum 2.8 GPA",
          ielts: "JLPT N2 (conversational Japanese)",
          gre: "Not required",
          papers: "Statement of motivation for community engagement",
          references: "Faculty mentor signature"
        }
      },
      {
        id: 3258,
        title: "Tokyo Business Incubation & Entrepreneurship Competition",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "¥500,000 top prize seed funding and venture capital mentorship",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free participation",
        tuition: "Extracurricular accelerator curriculum",
        source: "https://www.bunkyo.ac.jp/career/entrepreneurship/",
        desc: "Semester-long accelerator guiding student startup teams from market problem validation through MVP design and angel investor pitch presentations.",
        requirements: {
          gpa: "Open to all enrolled Bunkyo University students in teams of 2 to 5",
          ielts: "English or Japanese",
          gre: "Not required",
          papers: "Executive summary and business model canvas (5 pages)",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1413,
        name: "Prof. Kazuo Ishikawa",
        title: "Dean of Faculty of International Studies & Professor of Diplomacy",
        subject: "social-sciences",
        topics: ["International Relations", "Public Diplomacy", "East Asian Security", "Peace Studies"],
        source: "https://www.bunkyo.ac.jp/research/researchers/",
        summary: "Prof. Ishikawa leads the Faculty of International Studies, publishing widely on Asia-Pacific diplomatic architecture and multilateral conflict resolution."
      },
      {
        id: 1414,
        name: "Dr. Sayaka Morita",
        title: "Professor of Marketing Communication & Brand Psychology",
        subject: "social-sciences",
        topics: ["Consumer Psychology", "Brand Strategy", "Sensory Marketing", "Digital Advertising"],
        source: "https://www.bunkyo.ac.jp/research/researchers/",
        summary: "Dr. Morita researches the subconscious effects of visual brand design and sensory advertising on consumer purchasing decisions in Asian markets."
      },
      {
        id: 1415,
        name: "Dr. Kenji Tanaka",
        title: "Associate Professor of Second Language Acquisition & TESOL",
        subject: "social-sciences",
        topics: ["Bilingual Education", "Task-Based Language Teaching", "Linguistic Motivation", "Applied Linguistics"],
        source: "https://www.bunkyo.ac.jp/research/researchers/",
        summary: "Dr. Tanaka specializes in task-based pedagogy, investigating structural motivation variables in Japanese learners of English and bilingual curriculum design."
      }
    ]
  },

  // 24. Japan: Hanazono University
  {
    institution: "Hanazono University",
    shortName: "Hanazono University",
    slug: "hanazono-university-kyoto",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Nakagyo-ku, Kyoto, Japan",
    website: "https://www.hanazono.ac.jp",
    sourceRow: 1639,
    headline: "Hanazono University: Zen Buddhist Heritage, Social Welfare & History Guide",
    overview: "Founded in 1872 by the Myoshin-ji temple of the Rinzai Zen sect in Kyoto, Hanazono University is a venerable institution internationally celebrated for the International Research Institute for Zen Buddhism (IRIZ), social welfare science, and ancient Kyoto historical archaeology.",
    description: "Explore undergraduate and graduate programs in Zen Buddhism, social welfare, Japanese historical archaeology, and international research at Hanazono University in Kyoto.",
    heroEyebrow: "Kyoto Rinzai Zen Heritage · International Zen Research & Social Welfare",
    tuitionText: "Annual undergraduate tuition is approximately ¥1,080,000 to ¥1,260,000. Graduate tuition is approximately ¥680,000 to ¥820,000 annually. Rinzai Sect educational scholarships, Hanazono University international tuition reductions (30-50%), and Kyoto Prefectural grants are available.",
    admissions: {
      masters: "Graduation from an accredited 4-year undergraduate institution in humanities, sociology, social welfare, or philosophy.",
      phd: "Master's degree in Buddhist studies, literature, or sociology, accompanied by submitted master's thesis and comprehensive doctoral prospectus.",
      language: "JLPT N1 or N2 for Japanese-taught humanities tracks; reading comprehension of classical Sino-Japanese (Kanbun) beneficial for Zen archival studies.",
      proposal: "Doctoral research prospectus (3,000 Japanese characters) detailing historical sources, textual manuscripts, and historiographical methodology.",
      appFee: "¥35,000 international examination fee.",
      documents: "Bachelor's/Master's graduation certificates, official academic transcripts, research plan, JLPT certificate, and academic recommendation letter."
    },
    opportunities: [
      {
        id: 3259,
        title: "International Research Institute for Zen Buddhism (IRIZ) Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "¥1,200,000 annual research stipend plus full tuition waiver",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Free application",
        tuition: "Full doctoral tuition remission",
        source: "https://www.hanazono.ac.jp/research/iriz/",
        desc: "Prestigious research fellowship for international scholars investigating Rinzai Zen textual manuscripts, Chan Buddhist philology, or Kyoto temple cultural archives.",
        requirements: {
          gpa: "Master's degree in Buddhist studies, Asian philosophy, or Japanese history with high academic honors",
          ielts: "JLPT N1 and proficiency in classical Kanbun or Classical Chinese",
          gre: "Not required",
          papers: "Original research proposal on Zen monastic chronicles or epigraphy",
          references: "Two academic letters from senior Buddhist studies or Asian history professors"
        }
      },
      {
        id: 3260,
        title: "Master of Arts in Buddhist Studies & Zen Philosophy",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Myoshin-ji temple heritage bursaries available",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥35,000 screening fee",
        tuition: "¥740,000 per academic year",
        source: "https://www.hanazono.ac.jp/graduate/letters/",
        desc: "Immersion into Rinzai Zen monastic doctrine, Koan meditation texts, early medieval Japanese thought, and comparative East Asian philosophy.",
        requirements: {
          gpa: "Bachelor's degree in humanities, philosophy, or religion",
          ielts: "JLPT N1 or N2",
          gre: "Not required",
          papers: "Research prospectus and summary of undergraduate graduation thesis",
          references: "Two academic recommendations"
        }
      },
      {
        id: 3261,
        title: "Master of Social Welfare & Clinical Gerontology",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Kyoto healthcare foundation training stipends",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "¥35,000 screening fee",
        tuition: "¥760,000 per academic year",
        source: "https://www.hanazono.ac.jp/graduate/social-welfare/",
        desc: "Focuses on advanced social casework, elderly care systems in aging super-societies, psychiatric social work, and community welfare administration.",
        requirements: {
          gpa: "Bachelor's degree in social work, psychology, nursing, or related field",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "Research proposal on eldercare community models or psychiatric support",
          references: "One academic and one clinical supervisor reference"
        }
      },
      {
        id: 3262,
        title: "PhD in Japanese History & Kyoto Cultural Archaeology",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Kyoto municipal archaeological survey assistantships",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥35,000 screening fee",
        tuition: "¥690,000 per academic year",
        source: "https://www.hanazono.ac.jp/graduate/letters/history/",
        desc: "Three-year doctoral degree conducting excavations and archival analyses of Muromachi period Kyoto, temple architecture, and samurai material culture.",
        requirements: {
          gpa: "Master's degree in archaeology, Japanese history, or art history",
          ielts: "JLPT N1 and proficiency in reading Kuzushiji (historical cursive script)",
          gre: "Not required",
          papers: "Doctoral dissertation prospectus (15 pages)",
          references: "Two academic faculty letters"
        }
      },
      {
        id: 3263,
        title: "BA in Japanese Literature & Cultural Heritage",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "Hanazono International Student Tuition Reduction (30%)",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "¥35,000 screening fee",
        tuition: "¥1,120,000 per academic year",
        source: "https://www.hanazono.ac.jp/faculty/letters/japanese/",
        desc: "Study classical Kyoto literature, Waka poetry, tea ceremony aesthetics (Chado), calligraphy, and modern Japanese prose in the ancient capital.",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "JLPT N2 or EJU Japanese score >= 220",
          gre: "Not required",
          papers: "Personal statement (Shibo Riyusho)",
          references: "High school reference"
        }
      },
      {
        id: 3264,
        title: "Kyoto Zen Temple Monastic Practice & Mindfulness Seminar",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Temple accommodation subsidies available",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "¥20,000 registration fee",
        tuition: "¥120,000 two-week workshop fee",
        source: "https://www.hanazono.ac.jp/academics/zen-center/",
        desc: "Two-week experiential seminar including Zazen seated meditation at Myoshin-ji, vegetarian temple cuisine (Shojin Ryori), and classical Zen lectures.",
        requirements: {
          gpa: "Open to enrolled university students and researchers worldwide",
          ielts: "English or Japanese comprehension",
          gre: "Not required",
          papers: "Motivation statement",
          references: "None"
        }
      },
      {
        id: 3265,
        title: "Clinical Psychology Practicum & Youth Counseling Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "¥80,000 monthly clinical training grant",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free application",
        tuition: "Clinical internship credit",
        source: "https://www.hanazono.ac.jp/faculty/social-welfare/psychology/",
        desc: "Supervised practicum at the Hanazono Psychological Counseling Center treating adolescent school refusal, behavioral adjustment, and family trauma.",
        requirements: {
          gpa: "Graduate student in clinical psychology or social welfare",
          ielts: "JLPT N1 (fluent native-level Japanese)",
          gre: "Not required",
          papers: "Clinical case study reflection paper",
          references: "Clinical supervisor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1416,
        name: "Prof. Dr. Urs App",
        title: "Senior Research Fellow, International Research Institute for Zen Buddhism",
        subject: "social-sciences",
        topics: ["Zen Historiography", "Early Chan Buddhism", "East-West Intellectual History", "Schopenhauer & Orientalism"],
        source: "https://www.hanazono.ac.jp/research/iriz/researchers/",
        summary: "Dr. App is a world-renowned specialist in early Chan texts, the history of European discoveries of Asian religions, and digital philology in Zen archives."
      },
      {
        id: 1417,
        name: "Prof. Masao Nishimura",
        title: "Professor of Japanese Archaeology & Kyoto Historical Geography",
        subject: "social-sciences",
        topics: ["Kyoto Urban Archaeology", "Muromachi Material Culture", "Ancient Temple Excavations", "Heritage Preservation"],
        source: "https://www.hanazono.ac.jp/faculty/staff/",
        summary: "Prof. Nishimura directs major archaeological excavations across the historic Nakagyo and Kamigyo wards of Kyoto, recovering medieval urban artifacts."
      },
      {
        id: 1418,
        name: "Dr. Chieko Morimoto",
        title: "Professor of Social Welfare & Gerontological Social Work",
        subject: "social-sciences",
        topics: ["Elderly Care Systems", "Dementia Care Networks", "Community Welfare Governance", "Social Work Ethics"],
        source: "https://www.hanazono.ac.jp/faculty/staff/",
        summary: "Dr. Morimoto investigates sustainable long-term care insurance models and community-based integrated care systems for Kyoto's aging demographic."
      }
    ]
  },

  // 25. Sweden: Campus Valla - Linköping University
  {
    institution: "Campus Valla - Linköping University",
    shortName: "Campus Valla (LiU)",
    slug: "campus-valla-linkoping-university",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Linköping, Östergötland, Sweden",
    website: "https://www.liu.se",
    sourceRow: 1561,
    headline: "Campus Valla (LiU): Autonomous Systems, Applied Physics & Clean Energy Guide",
    overview: "Campus Valla is the flagship research campus of Linköping University (LiU), housing the Institute of Technology (LiTH), celebrated for world-class research in semiconductor materials, autonomous robotic systems, organic electronics, applied mathematics, and circular clean energy.",
    description: "Explore Master's degrees, doctoral PhD studentships, and research at Campus Valla Linköping University in Sweden.",
    heroEyebrow: "Östergötland Innovation Flagship · Autonomous Systems & Advanced Materials",
    tuitionText: "Tuition is completely free for citizens of Sweden, EU/EEA, and Switzerland. International student tuition is approximately SEK 120,000 to SEK 160,000 per academic year. LiU International Scholarship waivers (25% to 75% tuition discount) and Swedish Institute (SI) Global Professionals scholarships are accessible.",
    admissions: {
      masters: "Accredited Bachelor's degree (180 ECTS credits) in a relevant engineering, science, or computer science discipline; mathematics prerequisites apply.",
      phd: "Fully salaried doctoral employment; requires a Master's degree (minimum 240 ECTS credits) and outstanding performance in relevant scientific coursework.",
      language: "English 6 / English B from Swedish upper secondary school, or IELTS Academic 6.5 (minimum 5.5 in all bands) or TOEFL iBT 90.",
      proposal: "Doctoral applications require a statement of purpose addressing specific advertised PhD project topics.",
      appFee: "SEK 900 international application fee via UniversityAdmissions.se.",
      documents: "Bachelor's diploma, complete academic transcripts, English certificate, resume/CV, and passport copy."
    },
    opportunities: [
      {
        id: 3266,
        title: "LiU International Master's Tuition Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "50% to 75% tuition fee waiver",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 application fee",
        tuition: "Subsidizes 2-year MSc engineering programs at Campus Valla",
        source: "https://liu.se/en/education/scholarships",
        desc: "Merit scholarship awarded to top-ranking non-EU/EEA applicants admitted to master's programs at the Institute of Technology at Campus Valla.",
        requirements: {
          gpa: "Excellent bachelor's GPA in relevant engineering or scientific field",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Personal statement detailing scientific interest and academic accomplishments",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 3267,
        title: "MSc in Autonomous Systems and Robotics",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "WASP (Wallenberg AI, Autonomous Systems and Software Program) project positions",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 application fee",
        tuition: "SEK 145,000 per academic year for non-EU students (Free for EU/EEA)",
        source: "https://liu.se/en/education/program/6maut",
        desc: "State-of-the-art master's covering sensor fusion, SLAM algorithms, autonomous navigation, drone control, and collaborative industrial robotics.",
        requirements: {
          gpa: "Bachelor's degree in electrical engineering, computer science, or mechanical engineering with 30 ECTS in mathematics",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Statement of purpose",
          references: "Academic transcripts"
        }
      },
      {
        id: 3268,
        title: "PhD in Semiconductor Materials & Wide Bandgap Nanotechnology",
        type: "PhD",
        subject: "physics",
        subjects: ["physics", "engineering"],
        funding: "Fully funded salaried employment: SEK 32,500 to SEK 38,000 monthly",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free direct application",
        tuition: "Zero tuition; paid Swedish state doctoral appointment",
        source: "https://liu.se/en/work-at-liu/vacancies",
        desc: "Four-year salaried doctoral research at the Department of Physics, Chemistry and Biology (IFM) on silicon carbide (SiC) and gallium nitride power electronics.",
        requirements: {
          gpa: "Master of Science in applied physics, materials science, or nanotechnology",
          ielts: "Fluent English proficiency",
          gre: "Not required",
          papers: "Master's thesis PDF and 1,000-word research motivation letter",
          references: "Two academic referee contacts"
        }
      },
      {
        id: 3269,
        title: "MSc in Materials Science and Nanotechnology",
        type: "Master's",
        subject: "physics",
        subjects: ["physics", "chemistry"],
        funding: "Materials research laboratory stipends",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 application fee",
        tuition: "SEK 150,000 per academic year for international students (Free for EU)",
        source: "https://liu.se/en/education/program/6mmat",
        desc: "Explores thin-film physics, nanomaterials synthesis, quantum materials characterization, and energy harvesting polymers at the IFM institute.",
        requirements: {
          gpa: "Bachelor's degree in physics, chemistry, or materials engineering with solid quantum mechanics background",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Letter of intent",
          references: "Two academic letters"
        }
      },
      {
        id: 3270,
        title: "MSc in Intelligent Transport Systems & Clean Logistics",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "Swedish Transport Administration (Trafikverket) project grants",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 application fee",
        tuition: "SEK 135,000 per year for non-EU students",
        source: "https://liu.se/en/education/program/6mits",
        desc: "Focuses on connected vehicle networks, dynamic traffic simulation, electrified fleet operations, and smart urban distribution systems.",
        requirements: {
          gpa: "Bachelor's in engineering, logistics, computer science, or mathematics",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Motivation letter",
          references: "Academic transcripts"
        }
      },
      {
        id: 3271,
        title: "Postdoctoral Fellowship in Organic Bioelectronics & Plant Neurobiology",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "engineering"],
        funding: "SEK 42,000 monthly fellowship stipend",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free direct application",
        tuition: "Fully funded research appointment",
        source: "https://liu.se/en/organisation/liu/itn/lopec",
        desc: "Investigates organic electrochemical transistors, conductive polymers in living plants, and bio-hybrid neural signaling interfaces.",
        requirements: {
          gpa: "PhD in bioelectronics, biotechnology, biophysics, or organic chemistry awarded within past 3 years",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "List of peer-reviewed publications and research vision statement",
          references: "Three academic references"
        }
      },
      {
        id: 3272,
        title: "WASP Industrial Summer Research Internship in Applied AI",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        funding: "SEK 22,000 monthly summer student stipend",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Zero tuition; paid Swedish research internship",
        source: "https://liu.se/en/research/wasp",
        desc: "Ten-week research placement alongside top AI faculty working on reinforcement learning, computer vision for aerospace, and large language model safety.",
        requirements: {
          gpa: "Completed at least 3 years of study in computer science, data science, or engineering mathematics",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Resume and code repository links",
          references: "One professor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1419,
        name: "Prof. Dr. Magnus Berggren",
        title: "Professor of Organic Electronics & Director of Laboratory of Organic Electronics",
        subject: "physics",
        topics: ["Organic Bioelectronics", "Printed Electronics", "Electronic Plants", "Ion Transistors"],
        source: "https://liu.se/en/employee/magbe21",
        summary: "Prof. Berggren is an internationally celebrated pioneer of electronic plants and organic bioelectronics, member of the Royal Swedish Academy of Sciences."
      },
      {
        id: 1420,
        name: "Prof. Dr. Fredrik Heintz",
        title: "Professor of Artificial Intelligence & Director of WASP Graduate School",
        subject: "computer-science",
        topics: ["Trustworthy AI", "Autonomous Systems", "Knowledge Representation", "Stream Reasoning"],
        source: "https://liu.se/en/employee/frehe17",
        summary: "Prof. Heintz is a leading European AI expert leading the Wallenberg AI initiative and advising the European Commission on trustworthy artificial intelligence."
      },
      {
        id: 1421,
        name: "Prof. Dr. Igor Abrikosov",
        title: "Head of Theoretical Physics Division & Professor of Materials Theory",
        subject: "physics",
        topics: ["Quantum Materials", "First-Principles Calculations", "Extreme Conditions", "Alloy Thermodynamics"],
        source: "https://liu.se/en/employee/igoab28",
        summary: "Prof. Abrikosov conducts theoretical materials modeling at extreme pressures and temperatures, calculating quantum electronic structures of novel alloys."
      }
    ]
  },

  // 26. Sweden: AHU - Centre for Educational Development (Lund University)
  {
    institution: "AHU - Centre for Educational Development (Lund University)",
    shortName: "AHU Lund University",
    slug: "ahu-centre-educational-development-lund",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Lund, Skåne, Sweden",
    website: "https://www.ahu.lu.se",
    sourceRow: 1552,
    headline: "AHU Lund: Higher Education Pedagogy, Digital Learning & Academic Leadership",
    overview: "The Centre for Educational Development (Avdelningen för högskolepedagogisk utveckling - AHU) at Lund University is Sweden's foremost academic center for scholarship of teaching and learning (SoTL), higher education pedagogical research, doctoral supervisor certification, and digital learning environments.",
    description: "Explore postgraduate diplomas in higher education pedagogy, research fellowships, and doctoral education at AHU Centre for Educational Development at Lund University.",
    heroEyebrow: "Lund University Pedagogical Institute · Higher Education Research & Digital Learning",
    tuitionText: "Tuition is free for Lund University faculty and researchers. For external participants, course modules typically range from SEK 12,000 to SEK 28,000. Swedish Research Council (Vetenskapsrådet) educational grants and Erasmus+ academic staff mobility funding are widely utilized.",
    admissions: {
      masters: "Master's degree or ongoing appointment as a university lecturer, researcher, or doctoral candidate in higher education.",
      phd: "PhD candidates in educational sciences require an accredited Master's degree in education, sociology, or cognitive sciences with high academic distinction.",
      language: "Swedish and English (courses offered in both languages; English proficiency equivalent to English 6/B).",
      proposal: "Teaching philosophy statement or proposed pedagogical development project plan (1,000-1,500 words).",
      appFee: "Free application for Swedish and EU university employees.",
      documents: "Curriculum vitae, verified degree certificates, teaching dossier or list of instructional responsibilities, and recommendation letter."
    },
    opportunities: [
      {
        id: 3273,
        title: "Scholarship of Teaching & Learning (SoTL) Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "SEK 150,000 project research grant and sabbatical coverage",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Full pedagogical fellowship funding",
        source: "https://www.ahu.lu.se/en/research/sotl/",
        desc: "Supports university faculty and educational researchers conducting empirical investigations into disciplinary learning, student assessment, and generative AI in academia.",
        requirements: {
          gpa: "PhD or senior academic appointment in any university discipline",
          ielts: "Fluent English or Swedish",
          gre: "Not required",
          papers: "1,500-word SoTL project proposal focusing on evidence-based instructional improvement",
          references: "Department head endorsement letter"
        }
      },
      {
        id: 3274,
        title: "Postgraduate Diploma in Higher Education Pedagogy & Leadership",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Swedish university staff development sponsorships",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "SEK 36,000 for external participants (Free for Lund staff)",
        source: "https://www.ahu.lu.se/en/courses/",
        desc: "Advanced qualification covering university pedagogical theory, inclusive curriculum design, active learning environments, and academic course evaluation.",
        requirements: {
          gpa: "Master's or doctoral degree and active teaching appointment in higher education",
          ielts: "English 6 / Swedish 3",
          gre: "Not required",
          papers: "Teaching portfolio reflection and philosophical statement",
          references: "One institutional reference"
        }
      },
      {
        id: 3275,
        title: "Doctoral Supervision in Higher Education Qualification Course",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Lund University research council faculty funding",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free application",
        tuition: "Fully sponsored faculty development",
        source: "https://www.ahu.lu.se/en/courses/supervising-phd/",
        desc: "Mandatory qualification for docent status in Sweden, focusing on research ethics, conflict mediation, doctoral milestone monitoring, and thesis feedback.",
        requirements: {
          gpa: "Completed PhD and active supervision of doctoral candidates or postdocs",
          ielts: "English or Swedish working proficiency",
          gre: "Not required",
          papers: "Brief reflection on personal supervision experience",
          references: "Department chair approval"
        }
      },
      {
        id: 3276,
        title: "PhD in Educational Sciences & Higher Education Policy",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Fully salaried Swedish state doctoral position: SEK 32,000 monthly",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Free direct application",
        tuition: "Zero tuition; paid 4-year doctoral employment",
        source: "https://www.ahu.lu.se/en/research/phd/",
        desc: "Four-year doctoral appointment researching internationalization in higher education, algorithmic governance in universities, or academic freedom dynamics.",
        requirements: {
          gpa: "Master's degree in education, sociology, political science, or related humanities",
          ielts: "English 6 / IELTS 6.5",
          gre: "Not required",
          papers: "Master's thesis and 2,500-word doctoral research plan",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3277,
        title: "Generative AI in University Learning & Assessment Certificate",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "Digital education innovation funding",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "SEK 14,000 for external attendees",
        source: "https://www.ahu.lu.se/en/courses/digital-learning/",
        desc: "Specialized modular course training educators on prompt engineering in teaching, redesigning assessments in an AI era, and ethical academic integrity policies.",
        requirements: {
          gpa: "University instructional role or instructional designer appointment",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Syllabus of a course to be adapted with AI learning tools",
          references: "None"
        }
      },
      {
        id: 3278,
        title: "Nordic Pedagogical Development Summer Masterclass",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Nordplus higher education travel stipends",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "SEK 500 registration fee",
        tuition: "SEK 18,000 intensive 1-week course",
        source: "https://www.ahu.lu.se/en/conferences/",
        desc: "Annual Nordic symposium and workshop bringing together university educational developers from Sweden, Norway, Denmark, and Finland.",
        requirements: {
          gpa: "Practicing academic developer or instructional faculty member",
          ielts: "English working fluency",
          gre: "Not required",
          papers: "Abstract of teaching case study (500 words)",
          references: "One referee"
        }
      },
      {
        id: 3279,
        title: "Postdoctoral Fellowship in Disciplinary Higher Education Research",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "SEK 40,000 monthly fellowship for 2 years",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application",
        tuition: "Full post-doctoral fellowship award",
        source: "https://www.ahu.lu.se/en/research/",
        desc: "Two-year postdoctoral appointment analyzing student conceptual change in STEM disciplines, threshold concepts, and active laboratory pedagogies.",
        requirements: {
          gpa: "PhD in educational sciences, STEM education, or science studies within past 3 years",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Doctoral dissertation summary and 3-page research proposal",
          references: "Two academic faculty letters"
        }
      }
    ],
    researchers: [
      {
        id: 1422,
        name: "Prof. Dr. Torgny Roxå",
        title: "Associate Professor of Higher Education & Senior SoTL Scholar",
        subject: "social-sciences",
        topics: ["Microcultures in Academia", "Scholarship of Teaching and Learning", "Academic Leadership", "Educational Change"],
        source: "https://www.ahu.lu.se/en/staff/",
        summary: "Dr. Roxå is a pioneer of the microculture perspective in higher education, analyzing how significant conversations in informal teacher networks drive institutional pedagogical change."
      },
      {
        id: 1423,
        name: "Dr. Jennifer Löfgreen",
        title: "Head of AHU & Senior Lecturer in Higher Education Pedagogy",
        subject: "social-sciences",
        topics: ["Doctoral Education", "Supervision Pedagogy", "Assessment Policies", "Faculty Development"],
        source: "https://www.ahu.lu.se/en/staff/",
        summary: "Dr. Löfgreen directs AHU at Lund University, researching doctoral education trajectories, supervisory relationships, and faculty assessment frameworks."
      },
      {
        id: 1424,
        name: "Dr. Marita Ljungqvist",
        title: "Senior Lecturer in Educational Technology & Digital Pedagogy",
        subject: "social-sciences",
        topics: ["Digital Learning Environments", "Generative AI in Education", "Hybrid Teaching", "Learning Analytics"],
        source: "https://www.ahu.lu.se/en/staff/",
        summary: "Dr. Ljungqvist evaluates digital tool implementation in university instruction, active blended learning paradigms, and ethical pedagogical responses to AI."
      }
    ]
  },

  // 27. Sweden: KTH Södertälje Campus (Sustainable Production)
  {
    institution: "KTH Södertälje Campus (Sustainable Production)",
    shortName: "KTH Södertälje",
    slug: "kth-sodertalje-campus-sweden",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Södertälje, Stockholm County, Sweden",
    website: "https://www.kth.se/sodertalje",
    sourceRow: 1584,
    headline: "KTH Södertälje: Sustainable Production Logistics & Circular Industrial Systems Guide",
    overview: "KTH Södertälje is the specialized industrial research and education campus of KTH Royal Institute of Technology, co-located in Södertälje Science Park alongside global industrial giants Scania and AstraZeneca, focused on circular manufacturing, smart production logistics, and digital twin engineering.",
    description: "Explore Master's degrees, doctoral research, and industrial scholarships in sustainable production engineering at KTH Södertälje in Sweden.",
    heroEyebrow: "Södertälje Science Park Flagship · Circular Manufacturing & Industrial Logistics",
    tuitionText: "Tuition is free for citizens of EU/EEA and Switzerland. International student tuition is approximately SEK 155,000 per academic year. KTH Scholarship waivers, Scania industrial fellowship awards, and Swedish Institute (SI) scholarships are accessible.",
    admissions: {
      masters: "Bachelor of Science in mechanical engineering, industrial engineering, or chemical engineering (180 ECTS) with at least 30 ECTS in mathematics and mechanics.",
      phd: "Master's degree (minimum 240 ECTS) in production engineering or systems logistics; doctoral students receive full Swedish university salaries.",
      language: "English 6 / English B from Swedish upper secondary school, or IELTS 6.5 (minimum 5.5 across all components) or TOEFL iBT 90.",
      proposal: "Doctoral applications require motivation letter addressing advertised industrial research projects.",
      appFee: "SEK 900 via national portal UniversityAdmissions.se for non-EU applicants.",
      documents: "Bachelor's diploma, complete university transcripts, English test results, curriculum vitae, and passport copy."
    },
    opportunities: [
      {
        id: 3280,
        title: "KTH Södertälje Industrial Excellence Master's Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "Full 100% tuition waiver for 2-year MSc program",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 application fee",
        tuition: "Full coverage of international tuition fees at KTH Södertälje",
        source: "https://www.kth.se/en/studies/master/scholarships",
        desc: "Merit-based award for outstanding international students admitted to the Master of Science in Sustainable Production Development at Campus Södertälje.",
        requirements: {
          gpa: "Top 10% class standing in an accredited engineering bachelor's degree",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Motivation statement demonstrating commitment to sustainable manufacturing",
          references: "Two academic letters of recommendation"
        }
      },
      {
        id: 3281,
        title: "MSc in Sustainable Production Development",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "Industrial thesis stipends with Scania CV AB and AstraZeneca",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 application fee",
        tuition: "SEK 155,000 per academic year for non-EU students (Free for EU/EEA)",
        source: "https://www.kth.se/en/studies/master/sustainable-production-development",
        desc: "Two-year engineering master's addressing circular manufacturing systems, cyber-physical production, lean logistics, and life-cycle carbon optimization.",
        requirements: {
          gpa: "Bachelor's degree in mechanical, industrial, or manufacturing engineering",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Statement of purpose outlining manufacturing innovation goals",
          references: "Academic transcripts"
        }
      },
      {
        id: 3282,
        title: "PhD in Industrial Logistics & Digital Twin Factory Optimization",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Fully salaried Swedish state doctoral employment: SEK 33,500 to SEK 39,000 monthly",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free direct application",
        tuition: "Zero tuition; paid 4-year doctoral appointment",
        source: "https://www.kth.se/en/om/work-at-kth",
        desc: "Four-year salaried doctoral research at the Department of Sustainable Production Development modeling factory digital twins and automated material flow.",
        requirements: {
          gpa: "Master's degree in engineering with background in simulation, operations research, or data science",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Master's thesis PDF and 2-page research vision statement",
          references: "Two academic references"
        }
      },
      {
        id: 3283,
        title: "Scania-KTH Smart Heavy-Vehicle Manufacturing Co-op",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "SEK 25,000 monthly internship salary and thesis funding",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application",
        tuition: "Master's thesis 30 ECTS project credit",
        source: "https://www.kth.se/sodertalje/samverkan",
        desc: "Six-month master's thesis and industrial co-op at Scania's Södertälje plant optimizing battery pack assembly lines and automated guided vehicle (AGV) routing.",
        requirements: {
          gpa: "Enrolled in final year of an engineering master's at KTH or Swedish university",
          ielts: "English working proficiency",
          gre: "Not required",
          papers: "Master's thesis project proposal",
          references: "Faculty advisor approval"
        }
      },
      {
        id: 3284,
        title: "Circular Economy in Automotive Systems Certificate",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "Södertälje Science Park industry vouchers",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "SEK 16,000 for external corporate participants (Free for KTH students)",
        source: "https://www.kth.se/sodertalje/utbildning",
        desc: "Executive and graduate certificate exploring remanufacturing economics, battery recycling hydrometallurgy, and closed-loop material passports.",
        requirements: {
          gpa: "Engineering degree or equivalent industrial experience",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "Curriculum vitae and employer letter",
          references: "None"
        }
      },
      {
        id: 3285,
        title: "Postdoctoral Fellowship in Sustainable Biopharmaceutical Manufacturing",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "engineering"],
        funding: "SEK 43,000 monthly research salary for 2 years",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Fully funded research appointment",
        source: "https://www.kth.se/en/om/work-at-kth",
        desc: "Conducted in collaboration with AstraZeneca Södertälje investigating continuous bioprocessing, cleanroom energy reduction, and green pharmaceutical formulation.",
        requirements: {
          gpa: "PhD in chemical engineering, biotechnology, or pharmaceutical sciences",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "List of scientific publications and 3-page research project plan",
          references: "Three academic referee letters"
        }
      },
      {
        id: 3286,
        title: "Södertälje Science Week Student Innovation Award",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "SEK 50,000 cash grant and prototype fabrication support",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free entry",
        tuition: "Direct student development grant",
        source: "https://sscp.se/scienceweek/",
        desc: "Annual competition during Södertälje Science Week recognizing innovative student projects in industrial sustainability, circular logistics, or green tech.",
        requirements: {
          gpa: "Open to student teams containing at least one KTH Södertälje student",
          ielts: "English or Swedish",
          gre: "Not required",
          papers: "Project pitch deck and functional prototype demo",
          references: "Faculty mentor signature"
        }
      }
    ],
    researchers: [
      {
        id: 1425,
        name: "Prof. Dr. Monica Bellgran",
        title: "Professor of Production Logistics & Head of KTH Södertälje",
        subject: "engineering",
        topics: ["Sustainable Production Systems", "Production Logistics", "Circular Manufacturing", "Factory Layout Design"],
        source: "https://www.kth.se/profile/bellgran",
        summary: "Prof. Bellgran is an authority on production logistics and factory development, advising national manufacturing boards and leading circular industry initiatives in Sweden."
      },
      {
        id: 1426,
        name: "Prof. Dr. Magnus Wiktorsson",
        title: "Professor of Production Logistics & Smart Industry Researcher",
        subject: "engineering",
        topics: ["Smart Manufacturing Logistics", "Digital Twin Simulation", "Supply Chain Sustainability", "Material Flow"],
        source: "https://www.kth.se/profile/magwik",
        summary: "Prof. Wiktorsson leads research into digitized material flow and digital twin optimization in automotive and biopharmaceutical manufacturing."
      },
      {
        id: 1427,
        name: "Dr. Farazee Asif",
        title: "Associate Professor of Circular Manufacturing Systems",
        subject: "engineering",
        topics: ["Circular Economy", "Remanufacturing", "Product-Service Systems", "Industrial Life-Cycle Assessment"],
        source: "https://www.kth.se/profile/asif",
        summary: "Dr. Asif investigates closed-loop manufacturing architectures, remanufacturing methodology, and life-cycle costing for heavy vehicles."
      }
    ]
  },

  // 28. Netherlands: Amsterdam School for Integrative Medicine & Health
  {
    institution: "Amsterdam School for Integrative Medicine & Health",
    shortName: "Amsterdam School for Integrative Medicine",
    slug: "amsterdam-school-for-integrative-medicine",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Amsterdam, North Holland, Netherlands",
    website: "https://schoolforintegrativemedicine.nl",
    sourceRow: 1375,
    headline: "Amsterdam School for Integrative Medicine: Lifestyle Healthcare & Clinical Research",
    overview: "The Amsterdam School for Integrative Medicine & Health is an accredited Dutch professional institute pioneering evidence-based integrative healthcare, mind-body clinical interventions, lifestyle medicine, clinical phytotherapy, and patient-centered chronic disease prevention.",
    description: "Explore accredited postgraduate diplomas, clinical internships, and professional certifications at the Amsterdam School for Integrative Medicine & Health in the Netherlands.",
    heroEyebrow: "Amsterdam Health Academy · Lifestyle Medicine & Integrative Clinical Care",
    tuitionText: "Tuition for professional postgraduate diploma programs averages €3,500 to €6,800 per academic year. Dutch healthcare continuing professional development (CPD) allowances, accredited foundation bursaries, and clinical research grants are accessible.",
    admissions: {
      masters: "Accredited Bachelor's or Master's degree in medicine, nursing, physiotherapy, clinical psychology, pharmacy, or biological sciences.",
      phd: "Not offering independent doctorates; conducts clinical research trials in collaboration with Dutch university medical centers (Amsterdam UMC).",
      language: "Proficiency in Dutch or English depending on module track (minimum IELTS 6.5 or equivalent for international masterclasses).",
      proposal: "Statement of clinical intent describing integration of evidence-based complementary therapeutics into professional practice.",
      appFee: "€100 non-refundable application fee.",
      documents: "Medical or healthcare practitioner diploma, professional registration (BIG-register if applicable), resume/CV, and motivation letter."
    },
    opportunities: [
      {
        id: 3287,
        title: "Integrative Clinical Medicine Professional Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "€2,500 tuition credit award",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "€100 application fee",
        tuition: "Subsidizes advanced postgraduate integrative medicine diploma",
        source: "https://schoolforintegrativemedicine.nl/opleidingen/",
        desc: "Merit award for licensed physicians, advanced nurse practitioners, and clinical researchers pursuing specialization in evidence-based integrative health.",
        requirements: {
          gpa: "Medical degree (MD) or master's in clinical health sciences",
          ielts: "English B2/C1 or Dutch proficiency",
          gre: "Not required",
          papers: "1,000-word proposal on evaluating lifestyle medicine interventions in chronic disease management",
          references: "Two professional clinical references"
        }
      },
      {
        id: 3288,
        title: "Postgraduate Diploma in Lifestyle Medicine & Metabolic Health",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Dutch health insurer preventive care subsidies",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "€100 application fee",
        tuition: "€4,800 full program tuition",
        source: "https://schoolforintegrativemedicine.nl/opleidingen/lifestyle-medicine/",
        desc: "Comprehensive 12-month program exploring nutritional biochemistry, circadian biology, microbiome therapeutics, stress endocrinology, and behavioral change coaching.",
        requirements: {
          gpa: "Bachelor's or Master's in medicine, nutrition, physiotherapy, or human biology",
          ielts: "IELTS 6.5 or equivalent",
          gre: "Not required",
          papers: "Letter of clinical motivation",
          references: "One referee contact"
        }
      },
      {
        id: 3289,
        title: "Postgraduate Certificate in Evidence-Based Phytotherapy & Botanical Medicine",
        type: "Master's",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "European herbal medicine research bursaries",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "€100 application fee",
        tuition: "€3,600 total tuition",
        source: "https://schoolforintegrativemedicine.nl/opleidingen/phytotherapy/",
        desc: "Rigorous pharmacognosy course investigating standardized botanical extracts, cytochrome P450 herb-drug interactions, anti-inflammatory polyphenols, and regulatory compliance.",
        requirements: {
          gpa: "Degree in pharmacy, medicine, pharmacology, or biochemistry",
          ielts: "English B2 level",
          gre: "Not required",
          papers: "Review essay on phytotherapeutic safety profiles",
          references: "One academic or professional letter"
        }
      },
      {
        id: 3290,
        title: "Mind-Body Medicine & Neurobiology Clinical Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "€2,000 research grant and clinical laboratory access",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free application",
        tuition: "Fully sponsored research module",
        source: "https://schoolforintegrativemedicine.nl/onderzoek/",
        desc: "Clinical fellowship exploring psychoneuroimmunology, mindfulness-based stress reduction (MBSR) biomarkers, vagal tone measurement, and chronic pain modulation.",
        requirements: {
          gpa: "Clinical psychology, neuroscience, or medical degree",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Study protocol investigating heart rate variability (HRV) in clinical cohorts",
          references: "Two academic faculty letters"
        }
      },
      {
        id: 3291,
        title: "Integrative Oncology Supportive Care Masterclass",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        funding: "Oncology healthcare provider education grants",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€50 registration fee",
        tuition: "€1,850 accredited 3-day intensive",
        source: "https://schoolforintegrativemedicine.nl/cursussen/oncology/",
        desc: "Advanced masterclass for oncology nurses and physicians on mitigating chemotherapy side effects, evidence-informed acupuncture, therapeutic nutrition, and fatigue management.",
        requirements: {
          gpa: "Active clinical license in oncology, palliative care, or family medicine",
          ielts: "English or Dutch proficiency",
          gre: "Not required",
          papers: "Proof of clinical employment and license",
          references: "Department supervisor signature"
        }
      },
      {
        id: 3292,
        title: "Clinical Gut Microbiome & Functional Immunology Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Laboratory analysis stipend and sequencing kit coverage",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free application",
        tuition: "Experiential clinical learning credit",
        source: "https://schoolforintegrativemedicine.nl/onderzoek/microbioma/",
        desc: "Three-month clinical practicum analyzing metagenomic stool sequencing, mucosal barrier integrity, short-chain fatty acid quantification, and customized dietary interventions.",
        requirements: {
          gpa: "Master's student or graduate in microbiology, medicine, or biochemistry",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Resume and clinical motivation statement",
          references: "One referee"
        }
      },
      {
        id: 3293,
        title: "Integrative Health Patient-Centered Communication Workshop",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Dutch continuing medical education (CME) accredited points",
        status: "Open",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        fee: "€50 registration fee",
        tuition: "€950 weekend intensive",
        source: "https://schoolforintegrativemedicine.nl/cursussen/",
        desc: "Trains clinicians in motivational interviewing, shared decision-making, and navigating patient inquiries regarding complementary treatments.",
        requirements: {
          gpa: "Healthcare professional or graduate student",
          ielts: "Dutch or English",
          gre: "Not required",
          papers: "Registration form",
          references: "None required"
        }
      }
    ],
    researchers: [
      {
        id: 1428,
        name: "Dr. Ines von Rosenstiel",
        title: "Medical Director & Pediatrician Specialized in Integrative Health",
        subject: "biology",
        topics: ["Integrative Pediatrics", "Lifestyle Medicine", "Shared Decision-Making", "Preventive Clinical Care"],
        source: "https://schoolforintegrativemedicine.nl/over-ons/docenten/",
        summary: "Dr. von Rosenstiel is an internationally recognized pediatrician and pioneer of integrative medicine in the Netherlands, lecturing widely on lifestyle interventions for children."
      },
      {
        id: 1429,
        name: "Dr. Rogier Hoenders",
        title: "Scientific Advisor & Psychiatrist in Integrative Mental Health",
        subject: "social-sciences",
        topics: ["Integrative Psychiatry", "Nutritional Neurobiology", "Lifestyle Interventions", "Depression Recovery"],
        source: "https://schoolforintegrativemedicine.nl/over-ons/docenten/",
        summary: "Dr. Hoenders is a leading clinical psychiatrist investigating lifestyle psychiatry, mindfulness-based relapse prevention, and metabolic drivers of mood disorders."
      },
      {
        id: 1430,
        name: "Dr. Herman van Wietmarschen",
        title: "Senior Researcher in Systems Biology & Functional Diagnostics",
        subject: "biology",
        topics: ["Systems Biology", "Metabolomics", "Personalized Medicine", "Microbiome Profiling"],
        source: "https://schoolforintegrativemedicine.nl/over-ons/docenten/",
        summary: "Dr. van Wietmarschen utilizes systems biology and metabolomic profiling to understand phenotypic patterns and individualized responses to integrative health therapies."
      }
    ]
  },

  // 29. Netherlands: Erasmus University College
  {
    institution: "Erasmus University College",
    shortName: "Erasmus University College",
    slug: "erasmus-university-college",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Nieuwemarkt, Rotterdam, South Holland, Netherlands",
    website: "https://www.eur.nl/en/euc",
    sourceRow: 1404,
    headline: "Erasmus University College: Liberal Arts & Sciences, Problem-Based Learning Guide",
    overview: "Erasmus University College (EUC) is the international honours undergraduate college of Erasmus University Rotterdam, housed in a monument building in central Rotterdam, celebrated for its multidisciplinary Bachelor of Liberal Arts and Sciences (BSc), intensive Problem-Based Learning (PBL), and global societal impact.",
    description: "Explore the Bachelor of Liberal Arts and Sciences, international exchange, scholarships, and admissions at Erasmus University College in Rotterdam.",
    heroEyebrow: "Rotterdam Honours College · Liberal Arts & Sciences with Problem-Based Learning",
    tuitionText: "EU/EEA statutory tuition is approximately €4,700 per year (including statutory tuition plus institutional fee). Non-EU/EEA international tuition is approximately €14,900 to €16,500 annually. EUC Excellence Scholarships, Erasmus Trustfonds grants, and Dutch student finance (DUO) are available.",
    admissions: {
      masters: "EUC offers an intensive 3-year undergraduate honours Bachelor of Science (BSc) in Liberal Arts and Sciences; graduates automatically qualify for prestigious master's degrees globally.",
      phd: "Undergraduate honours college; doctoral research candidates matriculate through Erasmus University Rotterdam graduate schools.",
      language: "IELTS Academic 7.0 overall (minimum 6.5 in all bands) or TOEFL iBT 100.",
      proposal: "Motivation letter detailing why EUC's multidisciplinary Problem-Based Learning approach aligns with your educational philosophy.",
      appFee: "€100 non-refundable EUR institutional application fee.",
      documents: "Secondary school diploma (IB diploma, European Baccalaureate, or national equivalent with high mathematics grade), official transcripts, CV, and academic recommendation."
    },
    opportunities: [
      {
        id: 3294,
        title: "EUC Excellence International Merit Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "€3,000 to €7,500 annual tuition reduction",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "€100 application fee",
        tuition: "Renewable for all 3 years of BSc Liberal Arts & Sciences",
        source: "https://www.eur.nl/en/euc/financial-matters/scholarships",
        desc: "Merit-based award for high-achieving non-EEA students admitted to Erasmus University College demonstrating academic distinction and civic leadership.",
        requirements: {
          gpa: "Top 10% class rank or IB score 36+ points with strong mathematics grade",
          ielts: "IELTS 7.0 overall (no band under 6.5) or TOEFL 100",
          gre: "Not required",
          papers: "750-word motivation essay on multidisciplinary problem-solving",
          references: "Two academic letters of recommendation from high school teachers"
        }
      },
      {
        id: 3295,
        title: "Bachelor of Science in Liberal Arts and Sciences (Life Sciences Major)",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Erasmus MC clinical research assistantships",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "€100 application fee",
        tuition: "€4,750 for EU/EEA; €15,400 for international students",
        source: "https://www.eur.nl/en/euc/academics/majors/life-sciences",
        desc: "Pre-med and biotechnology major covering molecular biology, immunology, neuroscience, human genetics, and pharmacology in partnership with Erasmus MC.",
        requirements: {
          gpa: "Recognized high school diploma with advanced mathematics and chemistry/biology",
          ielts: "IELTS 7.0",
          gre: "Not required",
          papers: "Motivation statement and math placement diagnostic",
          references: "One academic reference"
        }
      },
      {
        id: 3296,
        title: "Bachelor of Science in Liberal Arts and Sciences (Economics & Business Major)",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "Rotterdam corporate partner scholarships",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "€100 application fee",
        tuition: "€4,750 for EU/EEA; €15,400 for international students",
        source: "https://www.eur.nl/en/euc/academics/majors/economics-business",
        desc: "Co-developed with Rotterdam School of Management, focusing on microeconomics, econometrics, corporate finance, international trade, and behavioral economics.",
        requirements: {
          gpa: "High school diploma with rigorous mathematics (IB Math AA or equivalent)",
          ielts: "IELTS 7.0",
          gre: "Not required",
          papers: "Personal motivation letter",
          references: "One teacher recommendation"
        }
      },
      {
        id: 3297,
        title: "Bachelor of Science in Liberal Arts and Sciences (Sustainability Major)",
        type: "Bachelor's",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "Port of Rotterdam clean energy student stipends",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "€100 application fee",
        tuition: "€4,750 for EU/EEA; €15,400 for international students",
        source: "https://www.eur.nl/en/euc/academics/majors/sustainability",
        desc: "Interdisciplinary major integrating environmental systems modeling, climate governance, energy transition policy, and ecological economics.",
        requirements: {
          gpa: "Strong high school record across sciences and social sciences",
          ielts: "IELTS 7.0",
          gre: "Not required",
          papers: "Essay on urban resilience challenges in delta cities",
          references: "One academic recommendation"
        }
      },
      {
        id: 3298,
        title: "EUC Student Housing Financial Support Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "€2,400 accommodation stipend for first-year residential college living",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "Assists with mandatory first-year Lucie residential tower rent",
        source: "https://www.eur.nl/en/euc/financial-matters/housing-costs",
        desc: "Need-based award helping international scholars offset living costs at the historic residential campus in central Rotterdam.",
        requirements: {
          gpa: "Admitted offer holder to EUC with demonstrated financial need",
          ielts: "Standard EUC admission requirement",
          gre: "Not required",
          papers: "Financial disclosure and brief personal circumstance essay",
          references: "Included with admission dossier"
        }
      },
      {
        id: 3299,
        title: "Global Citizenship and Urban Fieldwork Immersion",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Fieldwork project materials grant",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free internal registration",
        tuition: "Integrated into standard curriculum credit",
        source: "https://www.eur.nl/en/euc/academics/curriculum",
        desc: "Four-week capstone course deploying student consulting teams to solve real urban policy, immigration, and sustainability challenges in Rotterdam.",
        requirements: {
          gpa: "Enrolled second-year EUC student",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Urban inquiry research proposal",
          references: "Tutor endorsement"
        }
      },
      {
        id: 3300,
        title: "Erasmus International Exchange Fellowship (UC Berkeley / Sciences Po)",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "€3,500 travel and semester exchange grant",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Free application",
        tuition: "Home institution tuition paid; zero host tuition fee",
        source: "https://www.eur.nl/en/euc/academics/exchange",
        desc: "Competitive semester study abroad fellowship enabling third-year EUC students to study at prestigious partner institutions worldwide.",
        requirements: {
          gpa: "Cumulative GPA of 3.5 or higher during first two years at EUC",
          ielts: "Not applicable beyond initial admission",
          gre: "Not required",
          papers: "Study plan explaining host university course integration",
          references: "Academic advisor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1431,
        name: "Prof. Dr. Gabriele Jacobs",
        title: "Dean of Erasmus University College & Professor of Organizational Psychology",
        subject: "social-sciences",
        topics: ["Organizational Psychology", "Intergroup Conflict", "Urban Safety", "Higher Education Pedagogy"],
        source: "https://www.eur.nl/people/gabriele-jacobs",
        summary: "Prof. Jacobs leads EUC, publishing extensive research on intergroup dynamics, policing organizational change in Europe, and innovative liberal arts pedagogy."
      },
      {
        id: 1432,
        name: "Dr. Walter de Koning",
        title: "Head of Life Sciences Department & Molecular Neurobiologist",
        subject: "biology",
        topics: ["Neurobiology", "Cellular Signaling", "Biomedical Education", "Molecular Pharmacology"],
        source: "https://www.eur.nl/people/walter-de-koning",
        summary: "Dr. de Koning directs the pre-medical and life sciences track at EUC, investigating cellular signal transduction and mentoring students entering medical doctorates."
      },
      {
        id: 1433,
        name: "Dr. Susan Vermaas",
        title: "Senior Lecturer in Economics & Econometrics",
        subject: "social-sciences",
        topics: ["Microeconometrics", "Labor Economics", "Problem-Based Learning", "Behavioral Economics"],
        source: "https://www.eur.nl/people/susan-vermaas",
        summary: "Dr. Vermaas researches microeconometric evaluation of labor market policies and has authored pedagogical frameworks for problem-based economics teaching."
      }
    ]
  },

  // 30. Netherlands: Fontys School of the Arts
  {
    institution: "Fontys School of the Arts",
    shortName: "Fontys School of the Arts",
    slug: "fontys-school-of-the-arts-tilburg",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Tilburg, North Brabant, Netherlands",
    website: "https://www.fontys.nl",
    sourceRow: 1411,
    headline: "Fontys School of the Arts: Music, Contemporary Circus, Dance & Theatre Guide",
    overview: "Fontys School of the Arts (Fontys Academy of the Arts) in Tilburg is one of Europe's most innovative creative arts conservatories, celebrated for the Academy of Circus and Performance Art (ACaPA), Dance Arts in Context, the Rockacademie, Master of Music, and performing arts technology.",
    description: "Explore bachelor's and master's degrees, international auditions, conservatory scholarships, and admissions at Fontys School of the Arts in Tilburg, Netherlands.",
    heroEyebrow: "Tilburg Arts Conservatory · Academy of Circus, Dance & Rockacademie",
    tuitionText: "EU/EEA statutory tuition is approximately €2,530 per academic year. Non-EU/EEA international tuition is approximately €8,900 to €11,500 annually. Holland Scholarship (NL Scholarship) awards of €5,000, Fontys Creative Talent bursaries, and Brabant cultural stipends are accessible.",
    admissions: {
      masters: "Accredited Bachelor of Music, Dance, Theatre, or Fine Arts (or verified professional artistic portfolio equivalent) for Master's programs.",
      phd: "Artistic practice-based doctoral research offered in partnership with Dutch research universities (such as Leiden University Academy of Creative and Performing Arts).",
      language: "IELTS Academic 6.0 overall (minimum 5.5 in each band) or TOEFL iBT 80 for international English-taught bachelor and master programs.",
      proposal: "Artistic portfolio, live audition or video recordings, and creative project development proposal (500-1,000 words).",
      appFee: "Audition fee typically €50 to €75 depending on artistic discipline.",
      documents: "Secondary school diploma or bachelor's degree certificate, artistic portfolio/media links, motivation letter, CV, and copy of passport."
    },
    opportunities: [
      {
        id: 3301,
        title: "NL Scholarship (Holland Scholarship) for Creative Arts",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "€5,000 one-time financial grant",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Audition fee applies",
        tuition: "Awarded during the first year of study in Tilburg",
        source: "https://fontys.edu/Study-at-Fontys/Finances/Scholarships.htm",
        desc: "Funded by the Dutch Ministry of Education and Fontys for talented incoming non-EEA students enrolling in full-time bachelor's or master's degrees at Fontys Academy of the Arts.",
        requirements: {
          gpa: "Exceptional audition performance and academic qualification",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Artistic motivation essay detailing creative vision for studying in Brabant",
          references: "Two artistic or academic recommendation letters"
        }
      },
      {
        id: 3302,
        title: "Bachelor of Circus and Performance Art (ACaPA)",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "International circus tour and performance grants",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "Audition fee €75",
        tuition: "€2,530 EU / €10,800 non-EU per academic year",
        source: "https://fontys.edu/Bachelors-masters/Bachelors/Circus-and-Performance-Art.htm",
        desc: "Internationally renowned conservatory program training professional contemporary circus artists in aerial acrobatics, juggling, tightwire, teeterboard, and dramaturgy.",
        requirements: {
          gpa: "High physical aptitude, medical clearance, and successful two-round physical audition",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Video audition reel and personal artistic statement",
          references: "One circus or movement instructor reference"
        }
      },
      {
        id: 3303,
        title: "Bachelor of Dance: Dance Arts in Context",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "European dance residency and choreographic support",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Audition fee €50",
        tuition: "€2,530 EU / €10,800 non-EU per academic year",
        source: "https://fontys.edu/Bachelors-masters/Bachelors/Dance-Arts-in-Context.htm",
        desc: "Prepares contemporary dance artists in physical choreography, improvisation, somatic movement, site-specific performance, and cultural dramaturgy.",
        requirements: {
          gpa: "Pass in secondary education and successful live physical dance audition",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Choreographic motivation statement",
          references: "One dance teacher reference"
        }
      },
      {
        id: 3304,
        title: "Master of Music: Classical, Jazz & Pop Performance",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design"],
        funding: "Fontys Ensemble & Orchestra fellowship awards",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Audition fee €60",
        tuition: "€2,530 EU / €11,200 non-EU per year",
        source: "https://fontys.edu/Bachelors-masters/Masters/Master-of-Music.htm",
        desc: "Two-year master's for instrumentalists, vocalists, and composers, combining advanced individual virtuosity, artistic research, and creative entrepreneurship.",
        requirements: {
          gpa: "Bachelor of Music degree or equivalent conservatory credential",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Artistic research plan (1,000 words) and 30-minute audition video recording",
          references: "Two professional music references"
        }
      },
      {
        id: 3305,
        title: "Bachelor of Music: Rockacademie (Popular Music)",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "Dutch music industry talent stipends",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "Audition fee €60",
        tuition: "€2,530 EU / €10,800 non-EU per academic year",
        source: "https://fontys.nl/rockacademie",
        desc: "Pioneering pop music academy that has launched chart-topping artists, specializing in songwriting, music production, live session work, and artist management.",
        requirements: {
          gpa: "Secondary school diploma and competitive music audition",
          ielts: "IELTS 6.0 or Dutch fluency",
          gre: "Not required",
          papers: "Three recorded original tracks and personal artistic profile",
          references: "One referee"
        }
      },
      {
        id: 3306,
        title: "Master of Performing Public Space (PPS)",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "European cultural urbanism research stipends",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application",
        tuition: "€2,530 EU / €9,400 non-EU per year",
        source: "https://fontys.edu/Bachelors-masters/Masters/Performing-Public-Space.htm",
        desc: "Blended low-residency master's for cross-disciplinary artists designing interventions, site-specific installations, and social activism in urban public spaces.",
        requirements: {
          gpa: "Bachelor's degree in theatre, dance, visual arts, architecture, or urban design",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Public space artistic project proposal (1,500 words) and portfolio",
          references: "Two professional artistic references"
        }
      },
      {
        id: 3307,
        title: "Digital Audio & Sound Design Summer Conservatory Workshop",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "engineering"],
        funding: "Young creative talent travel bursaries",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "€30 registration fee",
        tuition: "€1,200 two-week studio course",
        source: "https://fontys.nl/kunst/cursussen",
        desc: "Intensive summer studio in electronic music composition, Max/MSP visual programming, spatial synthesis, and sound design for contemporary circus and theatre.",
        requirements: {
          gpa: "Basic experience with digital audio workstations (Ableton Live or Logic Pro)",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "Audio portfolio link",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1434,
        name: "Prof. Dr. Nirav Christophe",
        title: "Professor of Artistic Research & Public Space Dramaturgy",
        subject: "arts-design",
        topics: ["Artistic Research", "Creative Writing Pedagogy", "Public Space Performance", "Dramaturgical Inquiry"],
        source: "https://fontys.nl/Onderzoek/Lectoren/Nirav-Christophe.htm",
        summary: "Prof. Christophe leads artistic research in performing public space, examining how participatory theatre interventions reshape civic identity and urban coexistence."
      },
      {
        id: 1435,
        name: "Prof. Janine Dijkmeijer",
        title: "Director of Fontys Academy of the Arts & Dance Innovator",
        subject: "arts-design",
        topics: ["Dance Pedagogy", "Cultural Entrepreneurship", "Interdisciplinary Arts", "Performing Arts Leadership"],
        source: "https://fontys.nl/Over-Fontys/Organisatie/Janine-Dijkmeijer.htm",
        summary: "Prof. Dijkmeijer has directed prestigious international dance companies (including NDT), leading the pedagogical modernization of Fontys arts academies."
      },
      {
        id: 1436,
        name: "Dr. Falk Hübner",
        title: "Senior Researcher in Music Performance & Interdisciplinary Methodology",
        subject: "arts-design",
        topics: ["Music-Theatre", "Artistic Research Methodology", "Musician Physicality", "Interactive Sound"],
        source: "https://fontys.nl/Onderzoek/Onderzoekers/Falk-Huebner.htm",
        summary: "Dr. Hübner researches the performer's body in contemporary music theatre, compositional strategies, and methodological frameworks for artistic doctorates."
      }
    ]
  }
];
