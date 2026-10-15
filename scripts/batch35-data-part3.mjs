/**
 * Batch 35 - Part 3: Universities 21 to 30 (Total Unis 492 to 501)
 * Japan (4), Sweden (3), Netherlands (3)
 * Opp IDs: 3448 to 3517 (70 opportunities)
 * Faculty IDs: 1497 to 1526 (30 faculty members)
 */

export const batch35Part3Universities = [
  // 21. Japan: GLOBIS University Graduate School of Management (Sendai Campus)
  {
    institution: "GLOBIS University Graduate School of Management (Sendai Campus)",
    shortName: "GLOBIS University Sendai",
    slug: "globis-university-sendai-campus",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Aoba-ku, Sendai, Miyagi, Japan",
    website: "https://mba.globis.ac.jp/campus/sendai",
    sourceRow: 1638,
    headline: "GLOBIS University Sendai: Technovate MBA, Venture Creation & Tohoku Recovery Guide",
    overview: "Located in the business center of Sendai, GLOBIS University Graduate School of Management (Sendai Campus) is Japan's premier venture-focused business school, celebrated for its accredited Master of Business Administration (MBA), 'Technovate' programming integrating AI with management strategy, and leadership in Tohoku regional innovation.",
    description: "Explore accredited MBA programs, venture creation fellowships, Technovate courses, and admissions at GLOBIS University Sendai Campus in Japan.",
    heroEyebrow: "Tohoku Executive Business Flagship · Venture Creation & Technovate MBA",
    tuitionText: "Tuition for the Part-time & Online MBA program is approximately ¥3,200,000 for the full two-to-three-year curriculum. Japanese Ministry of Health, Labour and Welfare educational training grants (up to ¥1,120,000 reimbursement), GLOBIS scholarship awards, and venture incubator seed funds are available.",
    admissions: {
      masters: "Bachelor's degree from an accredited university (or evaluated equivalent) plus a minimum of 2 years of professional work experience.",
      phd: "Executive professional graduate school; offers accredited Master of Business Administration (MBA) degrees.",
      language: "Japanese fluency for Japanese MBA track; TOEFL iBT 85 or IELTS 6.5 for English MBA modules.",
      proposal: "Statement of Kokorozashi (personal life mission and strategic leadership ambition) of 1,000 to 1,500 words.",
      appFee: "¥36,000 admissions screening and interview assessment fee.",
      documents: "University graduation diploma, complete transcripts, career resume/CV, essays detailing leadership achievement, and two professional recommendations."
    },
    opportunities: [
      {
        id: 3448,
        title: "Tohoku Regional Innovation & Startup MBA Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "¥500,000 to ¥1,000,000 tuition reduction award",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥36,000 screening fee",
        tuition: "Subsidizes MBA degree coursework at the Sendai campus",
        source: "https://mba.globis.ac.jp/financial/",
        desc: "Awarded to exceptional entrepreneurs and corporate intrapreneurs dedicated to revitalizing the Tohoku economy through technological venture creation.",
        requirements: {
          gpa: "Bachelor's degree with strong academic record and 3+ years professional track record",
          ielts: "Business Japanese fluency or IELTS 6.5",
          gre: "Not required (GLOBIS proprietary assessment)",
          papers: "Essay outlining a business venture model designed to stimulate Tohoku regional growth",
          references: "Two professional reference letters from senior executives"
        }
      },
      {
        id: 3449,
        title: "Master of Business Administration (Part-Time & Hybrid Track)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Japanese MHLW Professional Training Subsidies up to 70%",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "¥36,000 screening fee",
        tuition: "¥1,600,000 per academic year (2-year curriculum)",
        source: "https://mba.globis.ac.jp/curriculum/",
        desc: "Case-method MBA blending live Sendai weekend classroom sessions with interactive online modules in corporate finance, organizational behavior, and venture strategy.",
        requirements: {
          gpa: "Graduation from a 4-year university and minimum 2 years of business practice",
          ielts: "Japanese language proficiency",
          gre: "Not required",
          papers: "Kokorozashi essay detailing personal leadership philosophy",
          references: "One executive recommendation"
        }
      },
      {
        id: 3450,
        title: "Technovate MBA: AI & Data-Driven Strategy Specialization",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "Corporate digital transformation educational sponsorships",
        status: "Open",
        deadline: "2027-03-20",
        deadlineText: "March 20, 2027",
        fee: "¥36,000 screening fee",
        tuition: "Included within standard MBA tuition",
        source: "https://mba.globis.ac.jp/technovate/",
        desc: "Pioneering curriculum exploring AI-driven business models, generative AI in corporate workflows, algorithmic governance, and platform ecosystem strategy.",
        requirements: {
          gpa: "Admitted MBA candidate at GLOBIS University",
          ielts: "Japanese or English depending on module",
          gre: "Not required",
          papers: "Technical essay on deploying machine learning in retail or manufacturing",
          references: "One referee"
        }
      },
      {
        id: 3451,
        title: "G-STARTUP Tohoku Venture Acceleration Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "¥5,000,000 potential angel investment and venture capital mentoring",
        status: "Open",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027",
        fee: "Free application",
        tuition: "Full accelerator participation and investor showcase credit",
        source: "https://g-startup.jp",
        desc: "Flagship incubator pairing student startup founders with leading Japanese venture capitalists (Globis Capital Partners) for mentorship and seed capital.",
        requirements: {
          gpa: "GLOBIS student or alumni-led startup team with validated MVP",
          ielts: "Japanese or English",
          gre: "Not required",
          papers: "Pitch deck, financial projections, and product demonstration",
          references: "Two mentor endorsements"
        }
      },
      {
        id: 3452,
        title: "Pre-MBA Single Subject Enrolment Certification",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Employer continuing education tuition reimbursement",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "¥23,000 screening fee",
        tuition: "¥136,000 per 3-month single credit course",
        source: "https://mba.globis.ac.jp/pre_mba/",
        desc: "Enables business professionals to complete accredited individual MBA courses (Critical Thinking, Marketing, Financial Accounting) prior to full degree matriculation.",
        requirements: {
          gpa: "University degree or equivalent work experience",
          ielts: "Japanese proficiency",
          gre: "Not required",
          papers: "Short essay on professional goals",
          references: "None"
        }
      },
      {
        id: 3453,
        title: "Tohoku Social Impact & Regional Revitalization Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "¥100,000 monthly travel and fieldwork grant",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free application",
        tuition: "Experiential management consulting credit",
        source: "https://mba.globis.ac.jp/campus/sendai/topics/",
        desc: "Three-month consulting practicum advising Tohoku agricultural cooperatives, renewable energy producers, and coastal fisheries on digital transformation.",
        requirements: {
          gpa: "Enrolled GLOBIS MBA student in good academic standing",
          ielts: "Business Japanese",
          gre: "Not required",
          papers: "Consulting project proposal",
          references: "Faculty advisor approval"
        }
      },
      {
        id: 3454,
        title: "Female Business Leaders in Tohoku Leadership Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "¥300,000 tuition fee reduction",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "¥36,000 screening fee",
        tuition: "Credited against second-year tuition fees",
        source: "https://mba.globis.ac.jp/financial/",
        desc: "Dedicated award promoting executive female leadership and board representation across regional enterprises in northern Honshu.",
        requirements: {
          gpa: "Admitted female MBA student with demonstrated leadership progression",
          ielts: "Standard admission",
          gre: "Not required",
          papers: "Essay on advancing diversity in Japanese corporate management",
          references: "One professional reference"
        }
      }
    ],
    researchers: [
      {
        id: 1497,
        name: "Yoshito Hori",
        title: "President and Founder of GLOBIS University & Managing Partner of Globis Capital",
        subject: "social-sciences",
        topics: ["Venture Capital", "Technovate Management", "Corporate Kokorozashi", "Japanese Economic Policy"],
        source: "https://www.globis.ac.jp/about/president/",
        summary: "Yoshito Hori founded GLOBIS in 1992, creating Japan's largest business school and venture capital fund, authoring seminal works on entrepreneurship."
      },
      {
        id: 1498,
        name: "Prof. Satoshi Hirose",
        title: "Dean of Faculty Development & Professor of Strategic Management",
        subject: "social-sciences",
        topics: ["Competitive Strategy", "Business Model Innovation", "Case Method Pedagogy", "Corporate Turnarounds"],
        source: "https://mba.globis.ac.jp/faculty/",
        summary: "Prof. Hirose oversees faculty training and case design, researching competitive differentiation and strategic turnaround methodologies in Japanese industries."
      },
      {
        id: 1499,
        name: "Prof. Dr. Tomoya Nakamura",
        title: "Dean of English MBA Program & Specialist in Global Organizational Behavior",
        subject: "social-sciences",
        topics: ["Cross-Border Leadership", "Organizational Behavior", "Global Mindset", "Technological Disruption"],
        source: "https://mba.globis.ac.jp/faculty/",
        summary: "Dr. Nakamura leads international degree programs, investigating intercultural communication in multinational teams and human-centered technology management."
      }
    ]
  },

  // 22. Japan: Hokkaido Musashi Women's Junior College
  {
    institution: "Hokkaido Musashi Women's Junior College",
    shortName: "Hokkaido Musashi College",
    slug: "hokkaido-musashi-womens-junior-college",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Kita-ku, Sapporo, Hokkaido, Japan",
    website: "https://www.hmu.ac.jp",
    sourceRow: 1649,
    headline: "Hokkaido Musashi College: Liberal Arts, Economics, English & Career Guide",
    overview: "Hokkaido Musashi Women's Junior College in Sapporo is one of northern Japan's most respected women's higher education institutions, celebrated for its Department of Liberal Arts and Economics, Department of English Communication, exceptional graduate employment rates, and study abroad pathways.",
    description: "Explore junior college associate degrees, English communication pathways, international exchange scholarships, and admissions at Hokkaido Musashi College in Sapporo.",
    heroEyebrow: "Sapporo Women's Higher Education · Liberal Arts, Economics & Global Studies",
    tuitionText: "Annual tuition is approximately ¥1,050,000 to ¥1,180,000. Institutional tuition exemption grants (up to 50% waiver), Musashi Gakuen alumni scholarships, and JASSO student support loans are available.",
    admissions: {
      masters: "Two-year junior college offering Associate Degrees (Tanki Daigaku Shogo); graduates qualify for junior-year transfer into 4-year universities across Japan and abroad.",
      phd: "Undergraduate junior college; does not confer master's or doctoral degrees.",
      language: "JLPT N2 minimum for international student degree enrollment; EJU Japanese score >= 200.",
      proposal: "Statement of personal study motivation (Shibo Riyusho) and career progression plan.",
      appFee: "¥30,000 international entrance examination fee.",
      documents: "High school graduation diploma, 3-year academic transcript, JLPT certificate, personal statement, and recommendation from secondary school principal."
    },
    opportunities: [
      {
        id: 3455,
        title: "Musashi Gakuen International Academic Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "30% to 50% annual tuition fee reduction",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥30,000 examination fee",
        tuition: "Deducted directly from semester tuition payments",
        source: "https://www.hmu.ac.jp/admissions/scholarship/",
        desc: "Merit award for talented international female scholars demonstrating superior secondary school academic achievements and motivation for global business.",
        requirements: {
          gpa: "High school GPA of 3.2 or equivalent on a 4.0 scale",
          ielts: "JLPT N2 or EJU Japanese score >= 220",
          gre: "Not required",
          papers: "Essay on women's leadership in the East Asian service and digital economy",
          references: "Two academic referee letters from high school teachers"
        }
      },
      {
        id: 3456,
        title: "Associate Degree in Liberal Arts & Regional Economics",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Sapporo business internship placement support",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "¥30,000 examination fee",
        tuition: "¥1,120,000 per academic year",
        source: "https://www.hmu.ac.jp/academics/liberal-arts/",
        desc: "Two-year curriculum integrating microeconomics, corporate bookkeeping, tourism management, public policy, and contemporary Japanese legal institutions.",
        requirements: {
          gpa: "Completion of 12 years of elementary and secondary schooling",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Statement of purpose (800 Japanese characters)",
          references: "One high school counselor reference"
        }
      },
      {
        id: 3457,
        title: "Associate Degree in Global English Communication & Translation",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Overseas study mobility subsidies (up to ¥150,000)",
        status: "Open",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        fee: "¥30,000 examination fee",
        tuition: "¥1,140,000 per academic year",
        source: "https://www.hmu.ac.jp/academics/english/",
        desc: "Focuses on bilingual intercultural communication, media translation, business English correspondence, airline hospitality, and cross-cultural literature.",
        requirements: {
          gpa: "High school graduation with solid English and Japanese coursework",
          ielts: "IELTS 5.5 or TOEIC 550+",
          gre: "Not required",
          papers: "English language motivation statement",
          references: "One academic reference"
        }
      },
      {
        id: 3458,
        title: "Hokkaido Four-Year University Articulation & Transfer Pathway",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "University transfer entrance fee waivers",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free internal registration",
        tuition: "Integrated into standard junior college curriculum",
        source: "https://www.hmu.ac.jp/career/transfer/",
        desc: "Specialized academic extension track enabling graduates to transfer directly into the third year of national and private universities across Japan (Hokkaido University, etc.).",
        requirements: {
          gpa: "Second-year standing with minimum GPA of 3.3 across core courses",
          ielts: "Standard college enrollment",
          gre: "Not required",
          papers: "Transfer university study plan",
          references: "Academic advisor recommendation"
        }
      },
      {
        id: 3459,
        title: "Sapporo Hospitality & Aviation Industry Internship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "¥50,000 monthly travel and uniform stipend",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Experiential learning college credit",
        source: "https://www.hmu.ac.jp/career/internship/",
        desc: "Work-integrated training at New Chitose Airport and major Sapporo hotel groups developing professional customer relationship and bilingual concierge skills.",
        requirements: {
          gpa: "Second-year student in English or Liberal Arts",
          ielts: "Conversational Japanese and English",
          gre: "Not required",
          papers: "Career resume and interview",
          references: "Career centre endorsement"
        }
      },
      {
        id: 3460,
        title: "Information Technology & Digital Office Analytics Certificate",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "IT passport exam fee subsidies",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free for students",
        tuition: "Covered by college tuition levy",
        source: "https://www.hmu.ac.jp/academics/it-courses/",
        desc: "Modular training preparing students for national IT Passport and MOS certifications, covering relational spreadsheets, database management, and data ethics.",
        requirements: {
          gpa: "Enrolled student at Hokkaido Musashi College",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Course registration form",
          references: "None"
        }
      },
      {
        id: 3461,
        title: "Hokkaido Community Revitalization & Local Food Branding Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "¥100,000 project research grant",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free entry",
        tuition: "Direct student development grant",
        source: "https://www.hmu.ac.jp/campus-life/activities/",
        desc: "Award recognizing student research projects that promote Hokkaido agricultural products, eco-tourism, and regional revitalization in rural towns.",
        requirements: {
          gpa: "Student project team of 2 to 4 students",
          ielts: "Japanese language",
          gre: "Not required",
          papers: "Regional marketing proposal and slide deck",
          references: "Faculty advisor signature"
        }
      }
    ],
    researchers: [
      {
        id: 1500,
        name: "Prof. Dr. Kenji Sugimoto",
        title: "President of Hokkaido Musashi College & Professor of English Literature",
        subject: "arts-design",
        topics: ["British Literature", "Victorian Cultural History", "Women's Higher Education", "Intercultural Communication"],
        source: "https://www.hmu.ac.jp/about/greeting/",
        summary: "Prof. Sugimoto leads the college, publishing widely on Victorian narrative fiction and championing specialized liberal arts education for women in northern Japan."
      },
      {
        id: 1501,
        name: "Prof. Yumiko Sato",
        title: "Dean of Department of English & Second Language Acquisition Lead",
        subject: "social-sciences",
        topics: ["TESOL Pedagogy", "Oral Proficiency Testing", "Bilingualism", "Language Learning Strategies"],
        source: "https://www.hmu.ac.jp/faculty/",
        summary: "Prof. Sato directs English curricula, evaluating communicative language teaching methodologies and study abroad cultural adaptation."
      },
      {
        id: 1502,
        name: "Dr. Tatsuya Morita",
        title: "Associate Professor of Regional Economics & Public Policy",
        subject: "social-sciences",
        topics: ["Hokkaido Regional Economics", "Tourism Marketing", "Demographic Aging", "SME Employment"],
        source: "https://www.hmu.ac.jp/faculty/",
        summary: "Dr. Morita researches structural demographic transitions in Hokkaido, analyzing economic revitalization policies for local municipalities and small businesses."
      }
    ]
  },

  // 23. Japan: Hyogo Medical University (Kobe Campus)
  {
    institution: "Hyogo Medical University (Kobe Campus)",
    shortName: "Hyogo Medical University Kobe",
    slug: "hyogo-medical-university-kobe",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Chuo-ku, Kobe, Hyogo, Japan",
    website: "https://www.hyo-med.ac.jp",
    sourceRow: 1656,
    headline: "Hyogo Medical University Kobe: Clinical Pharmacy, Nursing & Biomedical Tech",
    overview: "Located on Port Island within the Kobe Biomedical Innovation Cluster (KBIC), Hyogo Medical University Kobe Campus houses the School of Pharmacy, School of Nursing, and School of Rehabilitation, celebrated for translational medical research, regenerative pharmacotherapy, and clinical hospital training.",
    description: "Explore doctoral and master's degrees in pharmaceutical sciences, clinical nursing, biomedical research, and admissions at Hyogo Medical University Kobe Campus.",
    heroEyebrow: "Kobe Biomedical Innovation Flagship · Advanced Pharmacy & Nursing Sciences",
    tuitionText: "Annual tuition for pharmaceutical sciences is approximately ¥1,800,000 to ¥2,200,000. Nursing and rehabilitation annual tuition averages ¥1,400,000 to ¥1,650,000. Graduate school tuition is approximately ¥850,000 per year. MEXT scholarships, Hyogo Medical University international research fellowships, and Kobe Biomedical cluster grants are accessible.",
    admissions: {
      masters: "Graduation from an accredited university in pharmacy, nursing, biology, chemistry, or medicine (16 years of education; 18 years for 4-year doctoral pharmacy programs).",
      phd: "Master's degree or 6-year pharmaceutical/medical bachelor's degree, submitted research thesis, and doctoral laboratory supervisor agreement.",
      language: "JLPT N1 or N2 for clinical Japanese patient-facing tracks; TOEFL iBT 80 or IELTS 6.5 for graduate pharmaceutical research laboratories.",
      proposal: "Detailed laboratory research proposal (Kenkyu Keikakusho) in pharmacology, medicinal chemistry, or nursing science.",
      appFee: "¥35,000 international screening and laboratory assessment fee.",
      documents: "Graduation diploma, certified university transcripts, language proficiency report, research plan, health certificate, and two academic letters of recommendation."
    },
    opportunities: [
      {
        id: 3462,
        title: "Kobe Biomedical Cluster International Pharmacy Fellowship",
        type: "Fellowship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "¥1,500,000 annual research fellowship plus full tuition remission",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Free application",
        tuition: "Full coverage of 4-year PhD in Pharmaceutical Sciences",
        source: "https://www.hyo-med.ac.jp/english/graduate/pharmacy/",
        desc: "Prestigious doctoral fellowship conducted at Port Island laboratories investigating molecular pharmacology, drug delivery systems (DDS), and targeted oncological compounds.",
        requirements: {
          gpa: "Graduation from a 6-year pharmacy degree or master's in medicinal chemistry with top 10% class standing",
          ielts: "TOEFL iBT 85 or IELTS 6.5",
          gre: "Not required",
          papers: "Original 2,000-word doctoral research plan on novel drug formulation or target validation",
          references: "Two academic letters from senior pharmaceutical professors"
        }
      },
      {
        id: 3463,
        title: "Doctor of Philosophy (PhD) in Pharmaceutical Sciences",
        type: "PhD",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "JSPS research fellow stipends and laboratory assistantships",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥35,000 screening fee",
        tuition: "¥850,000 annual doctoral tuition",
        source: "https://www.hyo-med.ac.jp/graduate/pharmacy/",
        desc: "Four-year advanced doctoral degree exploring pharmacokinetics, structural biology, organic synthesis of biologically active molecules, and clinical toxicology.",
        requirements: {
          gpa: "Master's degree in chemistry/biology or 6-year bachelor in pharmacy",
          ielts: "English or Japanese proficiency",
          gre: "Not required",
          papers: "Summary of previous research and dissertation prospectus",
          references: "Two academic recommendations"
        }
      },
      {
        id: 3464,
        title: "Master of Science in Clinical Nursing & Advanced Practice",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Hyogo University Hospital clinical scholarship grants",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "¥35,000 screening fee",
        tuition: "¥880,000 per academic year",
        source: "https://www.hyo-med.ac.jp/graduate/nursing/",
        desc: "Prepares Certified Nurse Specialists (CNS) in critical care, oncological palliative nursing, community health management, and geriatric care systems.",
        requirements: {
          gpa: "Bachelor of Science in Nursing with valid Japanese nursing license and 3+ years clinical experience",
          ielts: "JLPT N1 (fluent medical Japanese)",
          gre: "Not required",
          papers: "Clinical research proposal on patient care intervention",
          references: "Nursing director recommendation"
        }
      },
      {
        id: 3465,
        title: "Six-Year Professional Bachelor of Pharmaceutical Sciences",
        type: "Bachelor's",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "Hospital pharmacy clinical training stipends",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "¥35,000 screening fee",
        tuition: "¥2,100,000 per academic year",
        source: "https://www.hyo-med.ac.jp/faculty/pharmacy/",
        desc: "Accredited six-year curriculum preparing licensed clinical pharmacists through intensive laboratory pharmacology, compounding, and hospital ward rotations.",
        requirements: {
          gpa: "High school graduation with advanced chemistry, biology, and mathematics",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "Personal statement detailing commitment to pharmaceutical healthcare",
          references: "High school principal reference"
        }
      },
      {
        id: 3466,
        title: "Postdoctoral Fellowship in Regenerative Medicine & Biomaterials",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "engineering"],
        funding: "¥4,200,000 annual research salary for 2 years",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Fully funded research appointment",
        source: "https://www.hyo-med.ac.jp/research/institutes/",
        desc: "Conducts translational research alongside RIKEN Center for Biosystems Dynamics Research on Port Island, developing stem cell scaffolds and tissue regeneration.",
        requirements: {
          gpa: "PhD in bioengineering, cellular biology, or regenerative medicine within past 3 years",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "List of scientific publications and 3-page research project plan",
          references: "Three academic referee letters"
        }
      },
      {
        id: 3467,
        title: "Clinical Neuro-Rehabilitation & Physical Therapy Master's Track",
        type: "Master's",
        subject: "biology",
        subjects: ["biology"],
        funding: "Rehabilitation center assistantships available",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "¥35,000 screening fee",
        tuition: "¥850,000 per academic year",
        source: "https://www.hyo-med.ac.jp/graduate/rehabilitation/",
        desc: "Focuses on motor recovery following stroke, robotic gait assistance devices, electromyographic diagnostic analysis, and neurological physical therapy.",
        requirements: {
          gpa: "Bachelor's degree in physical therapy or occupational therapy",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "Research proposal on neuro-muscular rehabilitation",
          references: "Two academic or clinical references"
        }
      },
      {
        id: 3468,
        title: "Kobe Biomedical Summer Laboratory Research Practicum",
        type: "Course",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        funding: "Kobe municipal biomedical student travel grants",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "¥15,000 registration fee",
        tuition: "¥120,000 two-week workshop fee",
        source: "https://www.hyo-med.ac.jp/research/summer-school/",
        desc: "Two-week laboratory intensive covering HPLC chromatography, mass spectrometry analysis of protein metabolites, cell culturing, and confocal fluorescence microscopy.",
        requirements: {
          gpa: "Undergraduate student in pharmacy, biology, or chemistry",
          ielts: "English or Japanese comprehension",
          gre: "Not required",
          papers: "Motivation statement",
          references: "One professor reference"
        }
      }
    ],
    researchers: [
      {
        id: 1503,
        name: "Prof. Dr. Hiroshi Nishioka",
        title: "Dean of School of Pharmacy & Professor of Medicinal Chemistry",
        subject: "chemistry",
        topics: ["Synthetic Organic Chemistry", "Drug Design", "Enzyme Inhibitors", "Heterocyclic Compounds"],
        source: "https://www.hyo-med.ac.jp/faculty/pharmacy/staff/",
        summary: "Prof. Nishioka leads pharmaceutical research, specializing in the total synthesis of bioactive natural products and structure-activity relationships of antiviral agents."
      },
      {
        id: 1504,
        name: "Prof. Dr. Keiko Kawashima",
        title: "Dean of School of Nursing & Clinical Palliative Care Specialist",
        subject: "biology",
        topics: ["Palliative Nursing", "Oncology Symptom Management", "Bereavement Care", "Bioethics in Clinical Practice"],
        source: "https://www.hyo-med.ac.jp/faculty/nursing/staff/",
        summary: "Prof. Kawashima investigates quality of life in advanced cancer patients, evaluating interdisciplinary pain management protocols in hospital palliative units."
      },
      {
        id: 1505,
        name: "Dr. Kenjiro Matsumoto",
        title: "Professor of Pharmacobioclinical Pharmacology & Neuroscience",
        subject: "biology",
        topics: ["Neuropharmacology", "Pain Signaling Pathways", "Opioid Receptor Dynamics", "Gastrointestinal Motility"],
        source: "https://www.hyo-med.ac.jp/faculty/pharmacy/staff/",
        summary: "Dr. Matsumoto researches molecular pain signaling mechanisms and novel analgesics that modulate peripheral sensory nerves without central addictive side effects."
      }
    ]
  },

  // 24. Japan: International Pacific University (IPU Japan)
  {
    institution: "International Pacific University (IPU Japan)",
    shortName: "IPU Japan",
    slug: "international-pacific-university-japan",
    countryId: "japan",
    countryLabel: "Japan",
    location: "Higashi-ku, Okayama, Japan",
    website: "https://www.ipu-japan.ac.jp",
    sourceRow: 1659,
    headline: "International Pacific University: Global Sports, Education & Management Guide",
    overview: "International Pacific University (IPU) in Okayama is an innovative global university established by the Soshi Educational Group (with partner sister campuses in New Zealand), celebrated for athletic science, Olympic judo and sports training, teacher education, and international business management.",
    description: "Explore sports management degrees, global business programs, athletic fellowships, and admissions at International Pacific University in Okayama, Japan.",
    heroEyebrow: "Okayama Global Sports & Education Campus · Athletic Training & Management",
    tuitionText: "Annual undergraduate tuition is approximately ¥1,180,000 to ¥1,380,000. IPU Global Sports scholarships, international student tuition reductions (up to 50%), and Soshi Gakuen academic bursaries are awarded annually.",
    admissions: {
      masters: "Graduation from an accredited 4-year undergraduate university (16 years of education) for master's programs in education and physical education.",
      phd: "Not offering independent doctoral degrees; specializes in undergraduate and master's education with international sister campuses.",
      language: "JLPT N2 for Japanese-taught courses; TOEFL iBT 75 or IELTS 5.5 for International Leadership degree cohorts.",
      proposal: "Statement of athletic achievement or educational purpose (800-1,000 words).",
      appFee: "¥30,000 entrance examination fee.",
      documents: "Secondary school graduation diploma, complete transcripts, language test scores, athletic portfolio (if applying for sports track), and recommendation letters."
    },
    opportunities: [
      {
        id: 3469,
        title: "IPU Global Athletic & Academic Leadership Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "50% tuition reduction plus athletic facility training stipend",
        status: "Open",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        fee: "¥30,000 examination fee",
        tuition: "Renewable for all 4 undergraduate years based on academic and sports performance",
        source: "https://www.ipu-japan.ac.jp/admissions/scholarship/",
        desc: "Awarded to exceptional student-athletes and international leaders enrolling in the Faculty of Physical Education or Faculty of Contemporary Management.",
        requirements: {
          gpa: "High school GPA of 3.0+ and national or regional athletic competition record",
          ielts: "JLPT N2 or IELTS 5.5",
          gre: "Not required",
          papers: "Athletic resume and 500-word statement on sports diplomacy and fair play",
          references: "Two letters of recommendation from sports coaches or school principals"
        }
      },
      {
        id: 3470,
        title: "Bachelor of Physical Education & Sports Science",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Olympic training center sports conditioning grants",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "¥30,000 examination fee",
        tuition: "¥1,320,000 per academic year",
        source: "https://www.ipu-japan.ac.jp/faculty/pe/",
        desc: "Four-year curriculum exploring exercise physiology, biomechanics, athletic training conditioning, sports nutrition, and physical education pedagogy.",
        requirements: {
          gpa: "High school graduation and physical fitness assessment",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Personal statement detailing sports career aspirations",
          references: "One coach or teacher recommendation"
        }
      },
      {
        id: 3471,
        title: "Bachelor of Contemporary Management & Global Business",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "IPU New Zealand study exchange travel bursaries",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "¥30,000 examination fee",
        tuition: "¥1,220,000 per academic year",
        source: "https://www.ipu-japan.ac.jp/faculty/management/",
        desc: "Bilingual degree covering international trade, sports marketing, digital entertainment management, accounting systems, and corporate entrepreneurship.",
        requirements: {
          gpa: "High school diploma with satisfactory grades",
          ielts: "JLPT N2 or IELTS 5.5",
          gre: "Not required",
          papers: "Motivation essay on global business strategy",
          references: "One academic reference"
        }
      },
      {
        id: 3472,
        title: "Master of Education in Pedagogical Methodology & Educational Leadership",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Teacher education research bursaries available",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "¥30,000 examination fee",
        tuition: "¥820,000 per academic year",
        source: "https://www.ipu-japan.ac.jp/graduate/",
        desc: "Advanced two-year program for educators focusing on moral education, curriculum adaptation, ICT classroom integration, and school crisis governance.",
        requirements: {
          gpa: "Bachelor's degree in education or relevant teaching license",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "Research proposal on classroom pedagogical innovation (2,000 characters)",
          references: "Two academic or school administrative references"
        }
      },
      {
        id: 3473,
        title: "IPU New Zealand Dual Campus International Semester",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Soshi Group cross-border airfare and accommodation scholarship",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application",
        tuition: "Home campus tuition applies; zero host institution levy",
        source: "https://www.ipu-japan.ac.jp/international/nz/",
        desc: "Enables IPU Okayama students to spend a semester studying English, Maori cultural studies, and international business at IPU New Zealand in Palmerston North.",
        requirements: {
          gpa: "First or second year IPU student with satisfactory academic record",
          ielts: "IELTS 5.5",
          gre: "Not required",
          papers: "Study abroad plan and cultural motivation essay",
          references: "Faculty advisor endorsement"
        }
      },
      {
        id: 3474,
        title: "Judo & Martial Arts High Performance Coaching Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "¥200,000 equipment grant and Olympic dojo training access",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free application",
        tuition: "Dojo coaching certification credit",
        source: "https://www.ipu-japan.ac.jp/sports/judo/",
        desc: "Specialized fellowship under Olympic champion instructors analyzing modern judo biomechanics, weight categorization nutrition, and athletic mental conditioning.",
        requirements: {
          gpa: "Black belt (Dan rank) in Judo and competitive record",
          ielts: "Japanese comprehension",
          gre: "Not required",
          papers: "Coaching philosophy statement and competitive record CV",
          references: "Judo federation or head coach recommendation"
        }
      },
      {
        id: 3475,
        title: "Sports Nutrition & Hydration Science Summer Workshop",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        funding: "Sports performance nutrition grants",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "¥10,000 registration fee",
        tuition: "¥60,000 one-week intensive course",
        source: "https://www.ipu-japan.ac.jp/academics/workshops/",
        desc: "Covers glycogen replenishment kinetics, electrolyte balancing in high-heat athletic training, micronutrient supplementation, and body composition DXA scans.",
        requirements: {
          gpa: "Open to university students and sports trainers",
          ielts: "Japanese language",
          gre: "Not required",
          papers: "Registration form",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 1506,
        name: "Prof. Toshihiko Koga (Honorary Legacy)",
        title: "Founding Professor of Physical Education & Olympic Judo Gold Medalist",
        subject: "social-sciences",
        topics: ["Judo Biomechanics", "Olympic Athletic Training", "Budo Philosophy", "Youth Sports Mentorship"],
        source: "https://www.ipu-japan.ac.jp/sports/judo/",
        summary: "The late Olympic champion shaped IPU's elite judo and physical education programs, establishing a global legacy of athletic discipline and technical mastery."
      },
      {
        id: 1507,
        name: "Prof. Dr. Hiroshi Ohashi",
        title: "President of IPU & Chair of Soshi Educational Corporation",
        subject: "social-sciences",
        topics: ["Global Educational Exchange", "Transnational Higher Education", "Character Education", "Sports Leadership"],
        source: "https://www.ipu-japan.ac.jp/about/president/",
        summary: "Prof. Ohashi directs the global educational network spanning Japan and New Zealand, pioneering character education through sports and international immersion."
      },
      {
        id: 1508,
        name: "Dr. Kenjiro Suzuki",
        title: "Professor of Sports Biomechanics & Exercise Physiology",
        subject: "biology",
        topics: ["Motion Capture in Sports", "Muscle Activation Electromyography", "Sprint Kinematics", "Fatigue Monitoring"],
        source: "https://www.ipu-japan.ac.jp/faculty/staff/",
        summary: "Dr. Suzuki utilizes 3D optical motion capture to evaluate neuromuscular force production and reduce anterior cruciate ligament (ACL) injury risks in athletes."
      }
    ]
  },

  // 25. Sweden: Inland Norway University of Applied Sciences (Rena / Swedish Transnational Program)
  {
    institution: "Inland Norway University of Applied Sciences (Rena / Swedish Transnational Program)",
    shortName: "INN University (Swedish Border Region)",
    slug: "inland-norway-university-rena-transnational",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Rena & Swedish Border Region, Sweden / Norway",
    website: "https://www.inn.no",
    sourceRow: 1574,
    headline: "INN University (Rena): Game Tech, Forestry Economics & Crisis Management Guide",
    overview: "Inland Norway University of Applied Sciences (INN University) operates specialized cross-border research and educational partnerships with Swedish universities (Karlstad and Dalarna), celebrated for its Rena campus game development studios (Hammar Game Collective), forestry economics, and international crisis management.",
    description: "Explore bachelor's and master's degrees in game technology, forestry economics, crisis management, and Nordic cross-border study at INN University.",
    heroEyebrow: "Nordic Cross-Border Higher Education · Game Tech, Forestry & Crisis Management",
    tuitionText: "Tuition is free for Nordic and EU/EEA citizens. Non-EU/EEA international tuition ranges from NOK 130,000 to NOK 170,000 per academic year. Erasmus+ cross-border mobility grants, Norwegian state educational fund (Lånekassen) loans, and forestry industry research awards are available.",
    admissions: {
      masters: "Accredited Bachelor's degree (180 ECTS) in computing, forestry, economics, crisis management, or related discipline with a minimum C-grade average.",
      phd: "Master's degree (minimum 120 ECTS) with a grade of B or better; doctoral positions are fully salaried state research appointments.",
      language: "English proficiency equivalent to Norwegian English 1 / Swedish English 6 (IELTS Academic 6.5 overall or TOEFL iBT 90).",
      proposal: "Doctoral applications require a detailed 5-to-10-page research project plan in game technology, applied ecology, or crisis governance.",
      appFee: "Free direct online application through the university admissions portal.",
      documents: "Bachelor's diploma, complete academic transcripts, English proficiency certificate, CV, and copy of passport."
    },
    opportunities: [
      {
        id: 3476,
        title: "Nordic Cross-Border Game Technology Master's Fellowship",
        type: "Fellowship",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        funding: "NOK 50,000 game engine project grant and incubator studio space",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Full studio incubator workspace at Rena campus",
        source: "https://www.inn.no/en/studies/programmes-and-courses/master-in-applied-computer-science/",
        desc: "Fellowship supporting graduate programmers and technical artists developing virtual reality systems, procedural world generation, and game physics engines.",
        requirements: {
          gpa: "Bachelor's degree in computer science, software engineering, or game design",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Portfolio of interactive game software or playable demo link",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3477,
        title: "Master in Applied Computer Science (Game Technology & XR)",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "Nordic gaming studio sponsored thesis projects",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "NOK 145,000 per year for non-EU/EEA (Free for EU/EEA citizens)",
        source: "https://www.inn.no/en/studies/programmes-and-courses/master-in-applied-computer-science/",
        desc: "Two-year master's covering computer graphics algorithms, artificial intelligence in games, immersive extended reality (XR), and high-performance C++.",
        requirements: {
          gpa: "Undergraduate degree in computer science with at least 80 ECTS in computing and math",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Statement of purpose detailing game programming focus",
          references: "Academic transcripts"
        }
      },
      {
        id: 3478,
        title: "PhD in Applied Ecology & Boreal Forest Management",
        type: "PhD",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "Fully salaried doctoral position: NOK 532,000 to NOK 575,000 annually",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free direct application",
        tuition: "Zero tuition; paid 3-year Norwegian state research position",
        source: "https://www.inn.no/en/research/phd-programmes/applied-ecology/",
        desc: "Doctoral research conducted across the Scandinavian boreal forest investigating wolf-moose population dynamics, sustainable timber harvesting, and biodiversity.",
        requirements: {
          gpa: "Master's degree in ecology, biology, or forestry with high academic distinction",
          ielts: "Fluent English",
          gre: "Not required",
          papers: "Doctoral research proposal (1,500 words) and Master's thesis copy",
          references: "Two academic supervisor references"
        }
      },
      {
        id: 3479,
        title: "Master of Science in Crisis Management and Homeland Security",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Nordic civil defense research travel subsidies",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "NOK 135,000 per academic year for non-EU students",
        source: "https://www.inn.no/en/studies/programmes-and-courses/crisis-management/",
        desc: "Curriculum preparing emergency managers in civil protection, disaster logistics, hybrid warfare threats, critical infrastructure resilience, and risk communication.",
        requirements: {
          gpa: "Bachelor's degree in social science, law, political science, or engineering",
          ielts: "IELTS 6.5",
          gre: "Not required",
          papers: "Motivation statement detailing background in emergency services or policy",
          references: "One referee letter"
        }
      },
      {
        id: 3480,
        title: "Bachelor in Animation & Digital Visual Effects",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        funding: "Hammar media incubator production awards",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "NOK 130,000 per academic year for non-EU students",
        source: "https://www.inn.no/en/studies/programmes-and-courses/bachelor-in-animation/",
        desc: "Three-year creative degree covering 2D/3D character animation, digital storyboarding, visual effects compositing, and stop-motion filmmaking.",
        requirements: {
          gpa: "Higher Education Entrance Qualification (Generell studiekompetanse)",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Creative visual portfolio of 10 to 15 artworks or animation clips",
          references: "One teacher recommendation"
        }
      },
      {
        id: 3481,
        title: "Nordic Boreal Forest Carbon Accounting Summer Field School",
        type: "Course",
        subject: "environment",
        subjects: ["environment"],
        funding: "Nordplus higher education travel grants",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "NOK 8,500 two-week field course",
        source: "https://www.inn.no/en/research/summer-schools/",
        desc: "Field-based intensive measuring peatland carbon fluxes, Eddy covariance towers, LiDAR canopy penetration, and deadwood biodiversity across Scandinavia.",
        requirements: {
          gpa: "Undergraduate or graduate student in forestry, environmental science, or biology",
          ielts: "English comprehension",
          gre: "Not required",
          papers: "CV and letter of motivation",
          references: "None"
        }
      },
      {
        id: 3482,
        title: "Transnational Cross-Border Regional Economic Development Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "NOK 25,000 thesis grant",
        status: "Open",
        deadline: "2027-05-20",
        deadlineText: "May 20, 2027",
        fee: "Free application",
        tuition: "Applied towards Master's thesis field research",
        source: "https://www.inn.no/en/studies/scholarships/",
        desc: "Granted to master's students investigating economic cooperation, transportation corridors, and renewable bioeconomy along the Sweden-Norway border region.",
        requirements: {
          gpa: "Enrolled master's student at INN University",
          ielts: "Standard admission",
          gre: "Not required",
          papers: "Master's thesis research synopsis (3 pages)",
          references: "Thesis supervisor endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 1509,
        name: "Prof. Dr. Peer Jacob Svenkerud",
        title: "Rector of INN University & Professor of Strategic Communication",
        subject: "social-sciences",
        topics: ["Organizational Communication", "Crisis Communication", "Higher Education Governance", "Regional Development"],
        source: "https://www.inn.no/om-hogskolen/ledelse/",
        summary: "Prof. Svenkerud is Rector of INN University, researching crisis communication, organizational change, and cross-border Scandinavian university collaboration."
      },
      {
        id: 1510,
        name: "Prof. Dr. Morten Odden",
        title: "Professor of Applied Ecology & Wildlife Biology Specialist",
        subject: "environment",
        topics: ["Carnivore Ecology", "Predator-Prey Dynamics", "Boreal Forest Ecosystems", "Camera Trap Monitoring"],
        source: "https://www.inn.no/finn-en-ansatt/morten-odden.html",
        summary: "Prof. Odden is an internationally recognized Scandinavian wildlife biologist studying lynx, wolf, and ungulate population interactions in boreal forests."
      },
      {
        id: 1511,
        name: "Dr. Bente Evjemo",
        title: "Senior Lecturer in Game Design & Virtual Environments",
        subject: "computer-science",
        topics: ["User Experience in XR", "Virtual Production", "Serious Games", "Collaborative Game Design"],
        source: "https://www.inn.no/finn-en-ansatt/",
        summary: "Dr. Evjemo leads applied game research at the Rena campus, investigating human-computer interaction, immersive learning games, and virtual camera systems."
      }
    ]
  },

  // 26. Sweden: Kungl Vitterhetsakademien (Royal Academy of Letters, History and Antiquities)
  {
    institution: "Kungl Vitterhetsakademien (Royal Academy of Letters, History and Antiquities)",
    shortName: "Kungl. Vitterhetsakademien",
    slug: "kungl-vitterhetsakademien-stockholm",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Stockholm, Sweden",
    website: "https://www.vitterhetsakademien.se",
    sourceRow: 1585,
    headline: "Kungl. Vitterhetsakademien: Humanities Research, Archaeology & Antiquities Guide",
    overview: "Founded in 1753 by Queen Louisa Ulrika, Kungl. Vitterhetsakademien (The Royal Swedish Academy of Letters, History and Antiquities) is one of Sweden's most prestigious royal academies, dedicated to advancing scholarly excellence, archaeological excavations, historical heritage preservation, and doctoral research fellowships in the humanities.",
    description: "Explore doctoral research fellowships, archaeological heritage grants, postdoctoral prizes, and academic publications at Kungl. Vitterhetsakademien in Stockholm, Sweden.",
    heroEyebrow: "Royal Swedish Academy of Humanities · Historic Archaeology & Antiquities",
    tuitionText: "The Academy does not charge tuition; it is a learned royal research society that funds and awards extensive research grants, postdoctoral fellowships (SEK 300,000 to SEK 500,000 annually), and international conference travel stipends in the humanities and social sciences.",
    admissions: {
      masters: "Fellowships and project grants require a Master's degree or ongoing doctoral affiliation at an accredited university.",
      phd: "Postdoctoral fellowships and research prizes require a completed PhD in archaeology, history, classical studies, art history, or philology.",
      language: "Swedish and English (publications and grant proposals accepted in Swedish, English, French, and German).",
      proposal: "Comprehensive scholarly research project proposal (5-10 pages) with itemized research budget and primary archive citations.",
      appFee: "Free grant application via the Academy's research portal.",
      documents: "Doctoral dissertation summary, complete academic curriculum vitae, list of peer-reviewed publications, and letters of reference from two senior scholars."
    },
    opportunities: [
      {
        id: 3483,
        title: "Vitterhetsakademien Postdoctoral Research Fellowship in the Humanities",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "SEK 450,000 annual research fellowship salary for up to 3 years",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Free application",
        tuition: "Fully funded research appointment hosted at a Swedish university",
        source: "https://www.vitterhetsakademien.se/forskningsstod/ansokan.html",
        desc: "Prestigious fellowship supporting postdoctoral scholars conducting original archival research in Swedish history, archaeology, classical philology, or art history.",
        requirements: {
          gpa: "PhD in a humanities or social sciences discipline awarded within the past 4 years",
          ielts: "Fluent Swedish or English",
          gre: "Not required",
          papers: "Scholarly project proposal (10 pages) and comprehensive bibliography",
          references: "Two academic referee letters from university professors"
        }
      },
      {
        id: 3484,
        title: "Gad Rausing International Prize for Outstanding Humanistic Research",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "SEK 1,500,000 grand research prize",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free nomination",
        tuition: "Unrestricted humanistic research grant",
        source: "https://www.vitterhetsakademien.se/priser/gad-rausings-pris.html",
        desc: "One of the world's most prestigious prizes in the humanities, awarded annually to a distinguished Scandinavian scholar for groundbreaking contributions to archaeology or history.",
        requirements: {
          gpa: "Nomination by university faculty dean or national academy member",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Nomination dossier detailing scholarly lifetime publications",
          references: "Three external international peer evaluations"
        }
      },
      {
        id: 3485,
        title: "Borgs By & Öland Cultural Heritage Archaeological Field Grant",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "SEK 120,000 archaeological excavation and fieldwork subsidy",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "Field station residency at Borgs by estate on Öland",
        source: "https://www.vitterhetsakademien.se/kulturfastigheter/borgs-by.html",
        desc: "Supports field archaeologists and medieval historians investigating the historic Iron Age ringforts, medieval fortifications, and agricultural landscapes of Öland.",
        requirements: {
          gpa: "Master's or doctoral student in archaeology or historical geography",
          ielts: "Swedish or English working proficiency",
          gre: "Not required",
          papers: "Excavation or material analysis project plan",
          references: "Archaeological supervisor recommendation"
        }
      },
      {
        id: 3486,
        title: "Stjernstedtska Foundation Swedish Medieval Epigraphy Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "SEK 80,000 manuscript digitization and publication grant",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free application",
        tuition: "Full publication and archive transcription funding",
        source: "https://www.vitterhetsakademien.se/forskningsstod/fonder.html",
        desc: "Funding for researchers transcribing and analyzing medieval Swedish runic inscriptions, Latin parchment charters, and ecclesiastical seals.",
        requirements: {
          gpa: "Doctoral candidate or university lecturer in philology or medieval history",
          ielts: "Proficiency in Old Norse, Old Swedish, or Latin",
          gre: "Not required",
          papers: "Description of manuscript corpus and editorial methodology",
          references: "One referee letter"
        }
      },
      {
        id: 3487,
        title: "International Scholarly Exchange & Symposium Travel Grant",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "SEK 25,000 international travel and conference subsidy",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free application",
        tuition: "Travel expense reimbursement",
        source: "https://www.vitterhetsakademien.se/forskningsstod/resebidrag.html",
        desc: "Enables Swedish-based doctoral researchers and postdocs to present accepted papers at major international humanities conferences globally.",
        requirements: {
          gpa: "Active doctoral candidate or postdoc in Sweden",
          ielts: "Fluent English or relevant conference language",
          gre: "Not required",
          papers: "Accepted conference abstract and invitation letter",
          references: "Department chair signature"
        }
      },
      {
        id: 3488,
        title: "Ann-Kersti and Carl-Hakon Swenson Historical Monograph Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "SEK 200,000 sabbatical writing stipend",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free application",
        tuition: "Direct scholar stipend for manuscript finalization",
        source: "https://www.vitterhetsakademien.se/forskningsstod/",
        desc: "Awarded to senior scholars completing major monographs in Scandinavian cultural history, numismatics, or architectural antiquities.",
        requirements: {
          gpa: "Docent or Professor in history or antiquities",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Book prospectus and draft table of contents with sample chapter",
          references: "Two peer endorsements"
        }
      },
      {
        id: 3489,
        title: "Rettig Cultural Heritage Library & Archive Research Residency",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "SEK 60,000 research stipend and private library study room in Stockholm",
        status: "Open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "Free application",
        tuition: "Full archive access at Rettig House (Villagatan)",
        source: "https://www.vitterhetsakademien.se/om-akademien/rettigska-huset.html",
        desc: "Three-month residency at the Academy's historic headquarters in Östermalm inspecting rare book collections, antique numismatics, and 18th-century royal correspondence.",
        requirements: {
          gpa: "Graduate researcher in book history, art history, or 18th-century studies",
          ielts: "Swedish or English",
          gre: "Not required",
          papers: "Archive utilization statement",
          references: "Academic advisor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1512,
        name: "Prof. Dr. Peter Aronsson",
        title: "President of Kungl. Vitterhetsakademien & Professor of Cultural Heritage",
        subject: "social-sciences",
        topics: ["National Heritage Construction", "Historical Uses of the Past", "Cultural Policy", "Nordic Historiography"],
        source: "https://www.vitterhetsakademien.se/om-akademien/organisation/presidium.html",
        summary: "Prof. Aronsson is President of the Royal Academy and former Vice-Chancellor of Linnaeus University, internationally acclaimed for research on European national museums."
      },
      {
        id: 1513,
        name: "Prof. Dr. Birgitta Svensson",
        title: "Secretary of the Academy & Professor of Ethnology",
        subject: "social-sciences",
        topics: ["Cultural Heritage Politics", "Nordic Ethnology", "Prison Historiography", "Social Order and Modernity"],
        source: "https://www.vitterhetsakademien.se/om-akademien/organisation/presidium.html",
        summary: "Prof. Svensson serves as Permanent Secretary of the Royal Academy, researching cultural heritage governance, criminal subcultures, and institutional folklore."
      },
      {
        id: 1514,
        name: "Prof. Dr. Mats Burström",
        title: "Fellow of the Academy & Professor of Historical Archaeology",
        subject: "social-sciences",
        topics: ["Contemporary Archaeology", "Cold War Material Heritage", "Iron Age Settlement Archaeology", "Memory Studies"],
        source: "https://www.vitterhetsakademien.se/ledamoter/",
        summary: "Prof. Burström is an eminent archaeologist at Stockholm University and Academy fellow, known for pioneering contemporary archaeology and material culture studies."
      }
    ]
  },

  // 27. Sweden: Örebro University Hospital (USÖ - Universitetssjukhuset Örebro)
  {
    institution: "Örebro University Hospital (USÖ - Universitetssjukhuset Örebro)",
    shortName: "USÖ Örebro University Hospital",
    slug: "orebro-university-hospital-sweden",
    countryId: "sweden",
    countryLabel: "Sweden",
    location: "Örebro, Sweden",
    website: "https://www.regionorebrolan.se",
    sourceRow: 1621,
    headline: "USÖ Örebro University Hospital: Clinical Medicine, Oncology & Surgery Guide",
    overview: "Universitetssjukhuset Örebro (USÖ) is one of Sweden's top seven university hospitals, integrated with Örebro University's Faculty of Medicine and Health, acclaimed for world-class clinical research in colorectal surgery, inflammatory bowel disease, clinical oncology, robotic surgery, and cardiovascular medicine.",
    description: "Explore clinical medical research fellowships, doctoral PhD positions, surgical residencies, and admissions at USÖ Örebro University Hospital in Sweden.",
    heroEyebrow: "Swedish Academic Health Centre · Clinical Medicine, Oncology & Surgery",
    tuitionText: "Clinical doctoral positions are fully funded salaried appointments by Region Örebro Län and Örebro University (approx. SEK 34,000 to SEK 42,000 per month). Medical education is tuition-free for Swedish/EU citizens. ALF government medical research grants and Swedish Cancer Society (Cancerfonden) fellowships are widely awarded.",
    admissions: {
      masters: "Medical degree (MD), Bachelor/Master of Science in Biomedicine, Nursing, or Pharmacy from an accredited university.",
      phd: "Clinical PhD candidates require a Medical Degree (läkarexamen) or relevant Master of Science, clinical residency, and project approval by the regional ethics board.",
      language: "Swedish (C1 level / TISUS for patient-contact clinical roles); fluent English for biomedical laboratory research.",
      proposal: "Detailed clinical research protocol (Forskningsplan) of 5 to 8 pages defining patient cohorts, biostatistical power, and methodology.",
      appFee: "Free application for Swedish university medical positions.",
      documents: "Medical license (läkarlegitimation), degree certificates, official academic transcripts, research proposal, and supervisor letter."
    },
    opportunities: [
      {
        id: 3490,
        title: "USÖ Clinical Doctoral Research Fellowship in Colorectal Oncology",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Fully salaried clinical appointment: SEK 36,000 to SEK 42,000 monthly",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free direct application",
        tuition: "Zero tuition; paid Swedish hospital doctoral employment",
        source: "https://www.regionorebrolan.se/uso/forskning",
        desc: "Four-year clinical PhD at the Department of Surgery investigating circulating tumor DNA (ctDNA) biomarkers, robotic low anterior resections, and oncological outcomes.",
        requirements: {
          gpa: "Medical Degree (MD) with residency training in general surgery or oncology",
          ielts: "Swedish C1 and English working fluency",
          gre: "Not required",
          papers: "Clinical research project plan approved by academic supervisor",
          references: "Two senior clinical references (including department chief)"
        }
      },
      {
        id: 3491,
        title: "Regional ALF Research Grant in Inflammatory Bowel Disease (IBD)",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology"],
        funding: "SEK 600,000 annual research grant and biobank access",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "Full clinical research coverage",
        source: "https://www.regionorebrolan.se/forskning/alf/",
        desc: "Supports translational gastroenterology researchers investigating mucosal barrier immunology, cytokine profiles, and fecal microbiota transplantation in Crohn's disease.",
        requirements: {
          gpa: "PhD or active senior doctoral standing in gastroenterology or mucosal immunology",
          ielts: "English fluency",
          gre: "Not required",
          papers: "ALF application dossier with statistical power calculation",
          references: "Academic dean endorsement"
        }
      },
      {
        id: 3492,
        title: "Master of Science in Experimental & Clinical Biomedicine",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Swedish Research Council biomedical laboratory stipends",
        status: "Open",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        fee: "SEK 900 via UniversityAdmissions.se for non-EU",
        tuition: "SEK 145,000 per year for non-EU/EEA (Free for EU/EEA citizens)",
        source: "https://www.oru.se/english/study/courses-and-programmes/",
        desc: "Two-year master's taught in English, combining hands-on laboratory rotations in USÖ pathology laboratories, flow cytometry, genomics, and clinical trial design.",
        requirements: {
          gpa: "Bachelor's degree in biomedicine, pharmacy, biology, or biotechnology with 30 ECTS in chemistry/biochemistry",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Letter of intent",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3493,
        title: "USÖ Robotic Surgery & Surgical Simulation Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "SEK 45,000 monthly clinical training grant",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free application",
        tuition: "Advanced surgical console certification credit",
        source: "https://www.regionorebrolan.se/uso/kirurgi/",
        desc: "Post-residency clinical fellowship utilizing da Vinci Xi surgical robotics in complex pelvic, urological, and gynecological oncological reconstructions.",
        requirements: {
          gpa: "Board certification in surgery or urology with documented laparoscopic proficiency",
          ielts: "Swedish medical license (legitimerad läkare)",
          gre: "Not required",
          papers: "Surgical logbook and clinical motivation statement",
          references: "Head of Surgery recommendation"
        }
      },
      {
        id: 3494,
        title: "Cardiovascular Biomarkers & Coronary Intervention Clinical Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology"],
        funding: "Swedish Heart-Lung Foundation (Hjärt-Lungfonden) research grant",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Free application",
        tuition: "Full clinical cath lab research affiliation",
        source: "https://www.regionorebrolan.se/uso/kardiologi/",
        desc: "Research investigation into fractional flow reserve (FFR), high-sensitivity cardiac troponin kinetics, and microvascular coronary dysfunction in diabetic patients.",
        requirements: {
          gpa: "MD with cardiology specialty training or PhD candidate in cardiology",
          ielts: "Swedish C1 or fluent English",
          gre: "Not required",
          papers: "Research brief on intravascular imaging (OCT/IVUS)",
          references: "Two cardiology faculty recommendations"
        }
      },
      {
        id: 3495,
        title: "Clinical Infection Control & Antimicrobial Stewardship Course",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        funding: "Public health continuing medical education funding",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free for hospital staff",
        tuition: "SEK 8,000 for external attendees",
        source: "https://www.regionorebrolan.se/uso/smittskydd/",
        desc: "Advanced modular course for physicians analyzing multidrug-resistant pathogens (MRSA, ESBL), hospital ventilation isolation, and rational antibiotic prescribing.",
        requirements: {
          gpa: "Licensed physician, pharmacist, or clinical microbiologist",
          ielts: "Swedish proficiency",
          gre: "Not required",
          papers: "Registration form and medical license number",
          references: "None"
        }
      },
      {
        id: 3496,
        title: "Region Örebro Län Innovation in Nursing Care Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "SEK 50,000 development grant",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free entry",
        tuition: "Direct clinical development grant",
        source: "https://www.regionorebrolan.se/forskning/omvardnad/",
        desc: "Recognizes hospital nursing teams implementing evidence-based clinical protocols that reduce pressure ulcers, hospital falls, and post-operative delirium.",
        requirements: {
          gpa: "Registered nurse employed at USÖ or enrolled in advanced practice nursing",
          ielts: "Swedish language",
          gre: "Not required",
          papers: "Clinical quality improvement project report (4 pages)",
          references: "Clinical nurse specialist endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 1515,
        name: "Prof. Dr. Curt Tysk",
        title: "Senior Professor of Gastroenterology & Senior IBD Researcher",
        subject: "biology",
        topics: ["Inflammatory Bowel Disease", "Microscopic Colitis", "Clinical Epidemiology", "Gastrointestinal Pathology"],
        source: "https://www.oru.se/personal/curt_tysk",
        summary: "Prof. Tysk is a world authority on microscopic colitis and IBD epidemiology, having authored over 200 high-impact clinical gastroenterology publications."
      },
      {
        id: 1516,
        name: "Prof. Dr. Ylva Lindberg",
        title: "Director of Clinical Research (USÖ) & Professor of Oncology",
        subject: "biology",
        topics: ["Targeted Cancer Therapies", "ctDNA Biomarkers", "Radiation Oncology", "Clinical Trial Governance"],
        source: "https://www.regionorebrolan.se/uso/forskning/ledning/",
        summary: "Prof. Lindberg directs clinical research operations at USÖ, leading international randomized trials in adjuvant colorectal cancer treatments."
      },
      {
        id: 1517,
        name: "Dr. Jonas Halfvarson",
        title: "Professor of Gastroenterology & Lead of Genetic-Environmental IBD Studies",
        subject: "biology",
        topics: ["Twin Studies in IBD", "Gut Microbiome Metagenomics", "Biologic Therapies", "Predictive Immunology"],
        source: "https://www.oru.se/personal/jonas_halfvarson",
        summary: "Prof. Halfvarson investigates gene-environmental interactions using the Swedish twin registry to decipher immunological triggers of ulcerative colitis and Crohn's disease."
      }
    ]
  },

  // 28. Netherlands: Atlas College
  {
    institution: "Atlas College",
    shortName: "Atlas College Hoorn",
    slug: "atlas-college-hoorn-netherlands",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Hoorn & West-Friesland, North Holland, Netherlands",
    website: "https://www.atlascollege.nl",
    sourceRow: 1381,
    headline: "Atlas College: Bilingual VWO, Gymnasium & STEM Academic Academy Guide",
    overview: "Atlas College is a distinguished regional educational community in West-Friesland (North Holland), encompassing prestigious academic institutions including OSG West-Friesland (dating to 1385), celebrated for bilingual pre-university education (TTO VWO), the Classical Gymnasium, STEM robotics, and direct university transition to Dutch research universities.",
    description: "Explore pre-university VWO tracks, bilingual Dutch-English gymnasium, STEM academy competitions, and admissions at Atlas College in Hoorn, Netherlands.",
    heroEyebrow: "West-Friesland Academic Institute · Pre-University Science & Cultural Studies",
    tuitionText: "Public Dutch secondary education is tuition-free for resident students under the Ministry of Education, Culture and Science. Parental voluntary school contribution levies average €120 to €350 per year for bilingual tracks and cultural excursions. International student exchange grants and Stichting Leergeld subsidies are available.",
    admissions: {
      masters: "Atlas College provides secondary pre-university education (VWO/Gymnasium/HAVO) preparing students directly for university admission across the Netherlands and Europe.",
      phd: "Pre-university secondary college; graduates matriculate into university bachelor's programs (WO and HBO).",
      language: "Dutch and English (bilingual TTO track teaches 50%+ of subjects entirely in English; Cambridge English C1/C2 certificates awarded).",
      proposal: "Primary school teacher recommendation (advies basisschool) and motivation letter for bilingual gymnasium tracks.",
      appFee: "Free municipal secondary school application.",
      documents: "Primary school transition report (Onderwijskundig Rapport), academic record, and identity document/passport."
    },
    opportunities: [
      {
        id: 3497,
        title: "Bilingual Pre-University (TTO VWO) International Study Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "€1,500 annual bilingual curriculum and UK exchange grant",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Full coverage of Cambridge English examinations and overseas study trips",
        source: "https://www.atlascollege.nl/onderwijs/tweetalig-onderwijs/",
        desc: "Merit award for exceptional academic students enrolling in the six-year Bilingual VWO program at OSG West-Friesland preparing for international universities.",
        requirements: {
          gpa: "Definitive VWO primary school recommendation and top 10% standardized test score",
          ielts: "English interview assessment and native or B2 Dutch",
          gre: "Not required",
          papers: "Personal essay in English on international curiosity and global citizenship",
          references: "Primary school director recommendation"
        }
      },
      {
        id: 3498,
        title: "Classical Gymnasium: Greek, Latin & European Philosophy Stream",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "Classical Antiquity Rome and Athens travel subsidies",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "Zero tuition under Dutch public educational funding",
        source: "https://www.atlascollege.nl/onderwijs/gymnasium/",
        desc: "Six-year classical curriculum covering Latin and Ancient Greek philology, classical mythology, rhetoric, ancient architecture, and Western philosophical thought.",
        requirements: {
          gpa: "VWO advice with high cognitive and linguistic aptitude",
          ielts: "Dutch fluency",
          gre: "Not required",
          papers: "Motivation statement detailing fascination with classical history",
          references: "School evaluation report"
        }
      },
      {
        id: 3499,
        title: "STEM Academy & FIRST Tech Challenge Robotics Fellowship",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "€2,500 team robotics fabrication budget and workshop sponsorship",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "Full robotics laboratory sponsorship",
        source: "https://www.atlascollege.nl/onderwijs/technasium/",
        desc: "Competitive robotics fellowship designing autonomous and teleoperated competition robots using Java, sensor fusion, and CNC milled aluminum chassis.",
        requirements: {
          gpa: "Enrolled secondary student in Technasium or VWO Nature & Technology stream",
          ielts: "Dutch or English",
          gre: "Not required",
          papers: "Engineering design logbook or portfolio of previous coding projects",
          references: "STEM instructor endorsement"
        }
      },
      {
        id: 3500,
        title: "Pre-University Science Capstone Research Prize (Profielwerkstuk)",
        type: "Scholarship",
        subject: "physics",
        subjects: ["physics", "biology", "chemistry"],
        funding: "€1,000 research award and university laboratory placement",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free internal entry",
        tuition: "Direct student academic merit award",
        source: "https://www.atlascollege.nl/onderwijs/profielwerkstuk/",
        desc: "Annual prize honoring the most rigorous final-year secondary school research thesis in the Nature & Health (NG) or Nature & Technology (NT) academic profiles.",
        requirements: {
          gpa: "Year 6 VWO student submitting an empirical experimental thesis",
          ielts: "Dutch or English",
          gre: "Not required",
          papers: "Full Profielwerkstuk research paper (minimum 30 pages) and scientific poster",
          references: "Faculty research supervisor recommendation"
        }
      },
      {
        id: 3501,
        title: "Cambridge English C2 Proficiency Certification Track",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Cambridge assessment examination subsidies",
        status: "Open",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        fee: "Voluntary examination contribution",
        tuition: "Integrated into bilingual VWO upper secondary curriculum",
        source: "https://www.atlascollege.nl/onderwijs/cambridge-english/",
        desc: "Prepares advanced secondary scholars for the highest tier Cambridge C2 Proficiency (CPE) qualification, demonstrating native-level fluency for global universities.",
        requirements: {
          gpa: "Year 5 or 6 VWO student achieving high marks in English literature",
          ielts: "C1 level diagnostic score",
          gre: "Not required",
          papers: "Diagnostic writing sample",
          references: "English department head approval"
        }
      },
      {
        id: 3502,
        title: "European Youth Parliament & Model United Nations Delegation",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Conference travel subsidies to The Hague and Strasbourg",
        status: "Open",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        fee: "Free application",
        tuition: "Extracurricular diplomatic delegation training",
        source: "https://www.atlascollege.nl/activiteiten/mun/",
        desc: "Prepares students in parliamentary debate, international treaty negotiation, multilateral diplomacy, and resolution drafting for European student assemblies.",
        requirements: {
          gpa: "Good academic standing in social sciences, history, or economics",
          ielts: "Fluent spoken English",
          gre: "Not required",
          papers: "Position paper on international climate migration",
          references: "None"
        }
      },
      {
        id: 3503,
        title: "Atlas College Community Leadership & Civic Engagement Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "€500 community project grant",
        status: "Open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "Free application",
        tuition: "Direct student leadership grant",
        source: "https://www.atlascollege.nl/over-atlas/organisatie/",
        desc: "Awarded to student council leaders, peer tutors, and volunteers organizing mental health awareness, anti-bullying campaigns, and ecological recycling in schools.",
        requirements: {
          gpa: "Demonstrated extracurricular community service at an Atlas College campus",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Reflection essay on peer leadership impact",
          references: "School mentor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 1518,
        name: "Drs. Roel Scheepens",
        title: "Executive Board President of Atlas College & Educational Strategist",
        subject: "social-sciences",
        topics: ["Educational Governance", "Pre-University Pedagogies", "Bilingual Education Policy", "Regional School Networks"],
        source: "https://www.atlascollege.nl/over-atlas/bestuur/",
        summary: "Drs. Scheepens chairs the executive board of Atlas College, directing strategic educational quality, bilingual curricula, and digital infrastructure across West-Friesland."
      },
      {
        id: 1519,
        name: "Drs. Anja Valk",
        title: "Rector of OSG West-Friesland & Classical Philologist",
        subject: "arts-design",
        topics: ["Classical Antiquity Pedagogy", "Gymnasium Education", "Latin Translation", "School Cultural Heritage"],
        source: "https://www.osgwestfriesland.nl/onze-school/schoolleiding/",
        summary: "Drs. Valk directs OSG West-Friesland, preserving its centuries-old humanist gymnasium tradition while implementing advanced bilingual pre-university standards."
      },
      {
        id: 1520,
        name: "Ir. Marco van der Lee",
        title: "Coordinator of Technasium & STEM Curriculum Specialist",
        subject: "engineering",
        topics: ["Inquiry-Based STEM Pedagogy", "Robotics Education", "Design Thinking in Schools", "Physics Demonstrations"],
        source: "https://www.atlascollege.nl/onderwijs/technasium/",
        summary: "Ir. van der Lee leads the Technasium engineering curriculum, coaching international award-winning robotics teams and linking secondary students with Dutch universities."
      }
    ]
  },

  // 29. Netherlands: Brabant-Collectie (Tilburg University)
  {
    institution: "Brabant-Collectie (Tilburg University)",
    shortName: "Brabant-Collectie (Tilburg)",
    slug: "brabant-collectie-tilburg-university",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Tilburg, North Brabant, Netherlands",
    website: "https://www.brabantcollectie.nl",
    sourceRow: 1385,
    headline: "Brabant-Collectie Tilburg: Cartography, Religious History & Cultural Heritage Guide",
    overview: "Housed within Tilburg University Library, the Brabant-Collectie is an internationally significant academic heritage research repository, curating over 250,000 historical books, ancient maps, religious manuscripts, and prints documenting the cultural, political, and socio-economic history of the Duchy of Brabant and the Low Countries.",
    description: "Explore academic research fellowships, historical cartography archives, digital humanities projects, and study at the Brabant-Collectie at Tilburg University.",
    heroEyebrow: "Tilburg University Heritage Archive · Cartography, Religious Culture & History",
    tuitionText: "The Brabant-Collectie is an academic heritage research library within Tilburg University; visiting research fellowships provide monthly stipends of €1,200 to €2,500. University master's tuition at Tilburg University is €2,530 for EU/EEA and approximately €16,000 for international students. Brabant heritage grants and Prins Bernhard Cultuurfonds bursaries are available.",
    admissions: {
      masters: "Accredited Bachelor's or Master's degree in history, art history, religious studies, historical geography, cultural heritage, or digital humanities.",
      phd: "Doctoral researchers matriculate through Tilburg School of Humanities and Digital Sciences (TSHD); require Master's degree and approved dissertation proposal.",
      language: "Dutch and English (reading comprehension of 16th-19th century Dutch and Latin advantageous for primary archive investigations).",
      proposal: "Detailed research proposal (1,500 words) specifying exact archival collections, maps, or manuscripts to be consulted.",
      appFee: "Free research visit application for academic scholars.",
      documents: "Curriculum vitae, research proposal, publication list, and one academic supervisor letter of recommendation."
    },
    opportunities: [
      {
        id: 3504,
        title: "Brabant-Collectie Visiting Scholar Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "€2,500 monthly research stipend plus dedicated library carrel",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Full archive access and high-resolution digitization coverage",
        source: "https://www.brabantcollectie.nl/onderzoek/",
        desc: "Three-to-six month residential fellowship for international historians and geographers conducting deep archival research using the Brabant historical collections.",
        requirements: {
          gpa: "PhD candidate or postdoctoral researcher in history, geography, or humanities",
          ielts: "English or Dutch proficiency",
          gre: "Not required",
          papers: "1,500-word research proposal citing specific Brabant-Collectie shelfmarks",
          references: "Two academic referee letters from university professors"
        }
      },
      {
        id: 3505,
        title: "Historical Cartography & Low Countries Map Digitization Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "€3,000 project grant and digital imaging lab access",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "Digital humanities studio affiliation",
        source: "https://www.brabantcollectie.nl/kaarten/",
        desc: "Research investigation analyzing early modern Dutch cartography (Blaeu, Ortelius, Mercator), water board maps (waterschapskaarten), and georeferencing historical boundaries.",
        requirements: {
          gpa: "Master's degree or doctoral standing in historical cartography, GIS, or art history",
          ielts: "English B2/C1",
          gre: "Not required",
          papers: "Proposal for georeferencing and historical spatial analysis of 17th-century maps",
          references: "One academic referee"
        }
      },
      {
        id: 3506,
        title: "Research Master in Linguistics and Communication Sciences (Heritage Track)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "Tilburg School of Humanities merit scholarships up to €5,000",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "€100 EUR application fee",
        tuition: "€2,530 EU / €16,000 non-EU per academic year",
        source: "https://www.tilburguniversity.edu/education/masters-programmes",
        desc: "Two-year research master's investigating text mining of historical manuscripts, linguistic evolution of Brabantian dialects, and digital corpus linguistics.",
        requirements: {
          gpa: "Bachelor's degree in linguistics, history, literature, or digital humanities with minimum 7.5/10 GPA",
          ielts: "IELTS 7.0 overall (minimum 6.5 in all bands)",
          gre: "Not required",
          papers: "Academic writing sample and motivation letter",
          references: "Two academic recommendations"
        }
      },
      {
        id: 3507,
        title: "Doctoral PhD Studentship in Dutch Religious Culture & Monastic Archives",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        funding: "Fully salaried Dutch state doctoral position: €2,770 to €3,539 monthly",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free direct application",
        tuition: "Zero tuition; paid 4-year doctoral employment at Tilburg University",
        source: "https://www.tilburguniversity.edu/about/working-at",
        desc: "Four-year doctoral appointment analyzing Catholic enlightenment, monastic book production, counter-reformation devotional literature, and religious tolerance in the south Netherlands.",
        requirements: {
          gpa: "Master's degree in history, theology, or religious studies with distinction",
          ielts: "Proficiency in Dutch, Latin, and English",
          gre: "Not required",
          papers: "Master's thesis copy and 2,500-word doctoral research plan",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3508,
        title: "Digital Humanities Text Mining & OCR of Historical Prints Workshop",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "CLARIAH digital research infrastructure grants",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free for university researchers",
        tuition: "€450 for external attendees",
        source: "https://www.brabantcollectie.nl/activiteiten/",
        desc: "Two-week workshop on applying Transkribus AI handwritten text recognition (HTR), NLP sentiment analysis, and semantic web RDF tagging to 18th-century pamphlets.",
        requirements: {
          gpa: "Graduate student or researcher in humanities, computer science, or library sciences",
          ielts: "English working fluency",
          gre: "Not required",
          papers: "CV and statement of research project",
          references: "None"
        }
      },
      {
        id: 3509,
        title: "Prins Bernhard Cultuurfonds Brabant Heritage Publication Bursary",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        funding: "€3,500 book printing and monograph subsidy",
        status: "Open",
        deadline: "2027-05-20",
        deadlineText: "May 20, 2027",
        fee: "Free application",
        tuition: "Full publisher monograph subvention",
        source: "https://www.cultuurfonds.nl",
        desc: "Subsidizes the publication of peer-reviewed scholarly monographs, exhibition catalogues, or critical editions based on Brabant historical documents.",
        requirements: {
          gpa: "Completed manuscript accepted by a recognized academic publisher",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Publisher contract, budget overview, and table of contents",
          references: "Two external peer review reports"
        }
      },
      {
        id: 3510,
        title: "Rare Book Conservation & Paper Preservation Summer Masterclass",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "chemistry"],
        funding: "Heritage preservation material subsidies",
        status: "Open",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        fee: "€50 registration fee",
        tuition: "€950 intensive studio course",
        source: "https://www.brabantcollectie.nl/restauratie/",
        desc: "Hands-on studio training in de-acidification, leather binding restoration, parchment repair, Japanese paper infilling, and climate-controlled vault management.",
        requirements: {
          gpa: "Conservator, archivist, or graduate student in heritage preservation",
          ielts: "Dutch or English",
          gre: "Not required",
          papers: "Resume and proof of relevant experience",
          references: "One referee"
        }
      }
    ],
    researchers: [
      {
        id: 1521,
        name: "Dr. Paul Spapens",
        title: "Senior Heritage Specialist & Folk Culture Historian",
        subject: "social-sciences",
        topics: ["Brabant Cultural Identity", "Intangible Cultural Heritage", "Popular Devotional Traditions", "Oral History"],
        source: "https://www.brabantcollectie.nl/over-ons/medewerkers/",
        summary: "Dr. Spapens is an expert on Brabant folklore and intangible heritage, publishing over 50 books on local traditions, religious processions, and cultural sociology."
      },
      {
        id: 1522,
        name: "Drs. Joost van der Spek",
        title: "Curator of Brabant-Collectie & Special Collections Librarian",
        subject: "social-sciences",
        topics: ["Historical Cartography", "Rare Book Provenance", "Early Modern Print Culture", "Digital Humanities"],
        source: "https://www.brabantcollectie.nl/over-ons/medewerkers/",
        summary: "Drs. van der Spek curates the Brabant-Collectie at Tilburg University, directing large-scale digitization of rare manuscripts and historic atlases."
      },
      {
        id: 1523,
        name: "Prof. Dr. Arnoud-Jan Bijsterveld",
        title: "Professor of Regional History & Cultural Heritage Lead",
        subject: "social-sciences",
        topics: ["Medieval Clergy Prosopography", "Low Countries Regional History", "Public History", "Spatial Memory"],
        source: "https://www.tilburguniversity.edu/staff/a-j-a-bijsterveld",
        summary: "Prof. Bijsterveld teaches regional history at Tilburg University, publishing widely on medieval ecclesiastical networks, memory culture, and heritage landscapes."
      }
    ]
  },

  // 30. Netherlands: Drenthe College (Assen Campus)
  {
    institution: "Drenthe College (Assen Campus)",
    shortName: "Drenthe College Assen",
    slug: "drenthe-college-assen-netherlands",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    location: "Assen, Drenthe, Netherlands",
    website: "https://www.drenthecollege.nl",
    sourceRow: 1399,
    headline: "Drenthe College: Smart Healthcare, Logistics & Sustainable Engineering Guide",
    overview: "Drenthe College in Assen is a leading regional vocational college (MBO) in the northern Netherlands, celebrated for advanced technical training in healthcare technology (Zorg & Welzijn), green construction engineering, smart warehouse logistics, and automotive sensor mechanics.",
    description: "Explore vocational diplomas (MBO Level 3 & 4), smart healthcare simulations, green energy apprenticeships, and admissions at Drenthe College Assen in the Netherlands.",
    heroEyebrow: "Northern Netherlands Vocational Flagship · Smart Health, Logistics & Green Tech",
    tuitionText: "Statutory annual tuition set by the Dutch Ministry of Education (Lesgeld) is approximately €1,419 for full-time MBO Level 3 and 4 courses. Dutch student finance (DUO) study grants, regional healthcare traineeship stipends, and employer apprenticeships (BBL tracks) are available.",
    admissions: {
      masters: "MBO Level 4 Specialist and Middle Management diplomas require a completed VMBO Theoretical/Combined diploma or international secondary equivalent (minimum 10-11 years of schooling).",
      phd: "Vocational higher education college; graduates qualify for direct advancement to Universities of Applied Sciences (HBO bachelor's programs).",
      language: "Dutch proficiency (minimum B1/B2 for technical and healthcare courses) as instruction is conducted in Dutch.",
      proposal: "Intake interview and motivation statement assessing professional career affinity in trades, care, or IT.",
      appFee: "Free online application through the Dutch national education portal (CAMBO / studiekeuze123).",
      documents: "Secondary school graduation certificate, prior grade transcripts, proof of identity, and residence permit if applicable."
    },
    opportunities: [
      {
        id: 3511,
        title: "Drenthe Smart Healthcare Technology Apprenticeship Award",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "€2,000 annual training stipend and clinical scrubs allowance",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Free application",
        tuition: "Full coverage of statutory Dutch lesgeld tuition",
        source: "https://www.drenthecollege.nl/opleidingen/zorg-en-welzijn/",
        desc: "Granted to dedicated students enrolling in the MBO Level 4 Nursing (Verpleegkundige) program combining high-fidelity hospital simulation with regional clinic placements.",
        requirements: {
          gpa: "Completed VMBO-TL or international secondary schooling with strong biology grades",
          ielts: "Dutch B2 proficiency",
          gre: "Not required",
          papers: "Motivation statement detailing dedication to eldercare and nursing clinical practice",
          references: "One teacher or care supervisor recommendation"
        }
      },
      {
        id: 3512,
        title: "MBO Level 4 Diploma in Sustainable Building & Climate Engineering",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        funding: "Paid BBL apprenticeship wages (€800 to €1,400 monthly)",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Free application",
        tuition: "€1,419 statutory annual tuition",
        source: "https://www.drenthecollege.nl/opleidingen/techniek-en-technologie/",
        desc: "Three-to-four year program covering heat pump installations, solar photovoltaic integration, circular insulation materials, BIM drafting, and residential energy audits.",
        requirements: {
          gpa: "VMBO diploma with mathematics or physics",
          ielts: "Dutch B1/B2",
          gre: "Not required",
          papers: "Personal motivation essay",
          references: "One referee letter"
        }
      },
      {
        id: 3513,
        title: "MBO Level 4 in Smart Logistics & Automated Supply Chains",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Northern Netherlands distribution center co-op contracts",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Free application",
        tuition: "€1,419 per academic year",
        source: "https://www.drenthecollege.nl/opleidingen/handel-en-dienstverlening/",
        desc: "Prepares warehouse supervisors in automated sorting systems, RFID inventory telemetry, route optimization algorithms, and cold-chain freight compliance.",
        requirements: {
          gpa: "Secondary school certificate with mathematics credits",
          ielts: "Dutch B1",
          gre: "Not required",
          papers: "CV and intake interview",
          references: "None"
        }
      },
      {
        id: 3514,
        title: "MBO Level 4 in Software Development & Cloud Applications",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science"],
        funding: "Assen digital tech hub paid internships",
        status: "Open",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        fee: "Free application",
        tuition: "€1,419 per year",
        source: "https://www.drenthecollege.nl/opleidingen/media-en-ict/",
        desc: "Comprehensive vocational software engineering program covering full-stack web development (PHP, JavaScript, Python), mobile apps, database design, and cybersecurity.",
        requirements: {
          gpa: "VMBO diploma with solid analytical marks",
          ielts: "Dutch and basic English",
          gre: "Not required",
          papers: "Coding portfolio or statement of interest",
          references: "One teacher reference"
        }
      },
      {
        id: 3515,
        title: "Healthcare Robotics & Assisted Living Technology Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "engineering"],
        funding: "€2,500 project grant and living lab sensor access",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Free application",
        tuition: "Innovation lab credit",
        source: "https://www.drenthecollege.nl/innovatie/",
        desc: "Senior vocational fellowship testing robotic feeding aids, fall detection ambient sensors, and tele-care monitoring in elderly nursing homes across Drenthe.",
        requirements: {
          gpa: "Third or fourth-year student in health sciences or mechatronics",
          ielts: "Dutch fluency",
          gre: "Not required",
          papers: "Proposal for implementing assistive technology in elderly patient rooms",
          references: "Department coordinator recommendation"
        }
      },
      {
        id: 3516,
        title: "Electric & Hydrogen Vehicle Diagnostic Systems Certificate",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering"],
        funding: "Drenthe green transport transition vouchers",
        status: "Open",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        fee: "Free application",
        tuition: "€750 short course fee",
        source: "https://www.drenthecollege.nl/opleidingen/motorvoertuigentechniek/",
        desc: "Specialized modular training on the TT Circuit Assen mobility cluster, covering fuel cell testing, high-voltage battery safety, and electronic vehicle telemetry.",
        requirements: {
          gpa: "Prior automotive technician training or diploma",
          ielts: "Dutch working proficiency",
          gre: "Not required",
          papers: "Proof of technical qualification",
          references: "Employer endorsement"
        }
      },
      {
        id: 3517,
        title: "Drenthe College Vocational Excellence & Craftsmanship Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "€1,000 toolkit award and national Skills Heroes participation",
        status: "Open",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        fee: "Free entry",
        tuition: "Direct student development grant",
        source: "https://www.drenthecollege.nl/skills-heroes/",
        desc: "Honors the top vocational students across automotive, healthcare, hospitality, and construction competing in the national Dutch Skills Heroes championships.",
        requirements: {
          gpa: "Top practical performance in vocational workshop evaluations",
          ielts: "Dutch language",
          gre: "Not required",
          papers: "Nomination dossier and practical portfolio",
          references: "Vocational master trainer signature"
        }
      }
    ],
    researchers: [
      {
        id: 1524,
        name: "Drs. Ellen Marks",
        title: "Executive Board Member of Drenthe College & Vocational Innovation Lead",
        subject: "social-sciences",
        topics: ["Vocational Education Governance", "Regional Labor Market Alignment", "Apprenticeship Models", "Healthcare Innovation"],
        source: "https://www.drenthecollege.nl/over-dc/organisatie/college-van-bestuur/",
        summary: "Drs. Marks serves on the Executive Board, directing innovative vocational partnerships with regional healthcare trusts and tech enterprises in Drenthe."
      },
      {
        id: 1525,
        name: "Henk van de Pol",
        title: "Director of Technology and Sustainable Energy Programs",
        subject: "engineering",
        topics: ["Sustainable Installation Tech", "Heat Pump Systems", "Solar Engineering", "Vocational Didactics"],
        source: "https://www.drenthecollege.nl/opleidingen/techniek-en-technologie/",
        summary: "Van de Pol oversees engineering and construction curricula, pioneering hands-on renewable energy training labs for the energy transition in the north."
      },
      {
        id: 1526,
        name: "Marjolijn Veenstra",
        title: "Head of Health and Social Care Academy (Zorg & Welzijn)",
        subject: "biology",
        topics: ["Nursing Education", "Assistive Health Technology", "Geriatric Clinical Simulation", "Eldercare Quality"],
        source: "https://www.drenthecollege.nl/opleidingen/zorg-en-welzijn/",
        summary: "Veenstra directs healthcare and nursing education, managing high-fidelity clinical simulation laboratories and training certified nursing staff for Assen hospitals."
      }
    ]
  }
];
