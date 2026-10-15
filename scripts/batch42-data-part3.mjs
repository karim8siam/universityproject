// Batch 42 - Part 3: Universities 21 to 30
// UK (2), Japan (4), Netherlands (4)
// Opps: 4918 to 4987 (70 opps)
// Researchers: 2127 to 2156 (30 researchers)

export const part3Universities = [
  // 21. UK: North West Regional College (NWRC)
  {
    institution: "North West Regional College",
    slug: "north-west-regional-college-nwrc",
    countryId: "uk",
    countryLabel: "United Kingdom",
    sourceRow: 1279,
    location: "Derry~Londonderry, Northern Ireland, United Kingdom",
    website: "https://www.nwrc.ac.uk",
    shortName: "NWRC",
    badge: "Renewable Energy & Ulster Higher Diplomas",
    overview: "North West Regional College (NWRC), with main campuses across Derry~Londonderry, Limavady, and Strabane in Northern Ireland, is a major tertiary education institution delivering university-level Higher National Diplomas (HND), Foundation Degrees validated by Ulster University and Queen's University Belfast, and cutting-edge industrial innovation through the Business Support Centre (BSC).",
    lead: "Study Ulster University-validated foundation degrees, software engineering diplomas, and industrial apprenticeships at NWRC.",
    description: "North West Regional College higher education foundation degrees, software engineering, renewable energy, and Northern Ireland study awards.",
    quickFacts: {
      type: "Public Further and Higher Education College (Northern Ireland Executive)",
      campus: "Strand Road Campus, Derry~Londonderry (plus Limavady and Strabane)",
      accreditation: "Department for the Economy (DfE) / Validated by Ulster University & QUB / QAA",
      admissions: "NWRC Direct Higher Education Portal (admissions open January to August)",
      language: "English (IELTS Academic 6.0 overall with minimum 5.5 in each band)",
      aid: "Student Finance NI (Tuition Fee & Maintenance Grants) & NWRC Hardship Support"
    },
    strengths: [
      "Degree-awarding partnerships with Ulster University and Queen's University Belfast",
      "Award-winning Business Support Centre (BSC) providing technical R&D support to regional industry",
      "Cutting-edge Food Technology Centre and Applied Industry 4.0 Prototyping Suites",
      "Low tuition fees compared to Great Britain universities (£2,800/year for full-time foundation degrees)"
    ],
    programs: [
      { title: "Foundation Degree in Science (FdSc) in Software Development", level: "Foundation Degree (Level 5)", desc: "Two-year degree validated by Ulster University covering full-stack cloud computing, relational databases, Java, and cyber security." },
      { title: "Foundation Degree in Engineering (Renewable Energy and Electrical Systems)", level: "Foundation Degree (Level 5)", desc: "Ulster University-validated engineering program focusing on wind turbine integration, solar PV microgrids, and PLC automation." },
      { title: "Higher National Diploma (HND) in Applied Hospitality & Tourism Management", level: "Higher National Diploma (Level 5)", desc: "Two-year professional management curriculum with culinary leadership and international event operations." }
    ],
    opportunities: [
      {
        id: 4918,
        title: "NWRC Higher Education Excellence Entrance Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Tuition discount awarded to high-achieving school leavers enrolling in Ulster University-validated STEM foundation degrees at NWRC.",
        funding: "£1,000 cash bursary paid across the first year of full-time higher education study",
        fee: "£0 direct application fee",
        tuition: "£2,800 per academic year for full-time foundation degrees",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.nwrc.ac.uk/higher-education/fees-and-funding",
        requirements: {
          gpa: "Minimum 64 UCAS tariff points from A-Levels, BTEC Extended Diploma, or equivalent",
          ielts: "IELTS 6.0 overall with no score below 5.5",
          gre: "Not required",
          papers: "High school examination certificates and personal statement",
          references: "One academic reference"
        }
      },
      {
        id: 4919,
        title: "Foundation Degree in Software Development (Ulster Validated) Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science"],
        desc: "Two-year higher education program with guaranteed direct transfer into Year 3 of the B.Sc. (Hons) Computing at Ulster University Magee.",
        funding: "Full Student Finance NI tuition fee loan eligibility (£2,800/year)",
        fee: "£0",
        tuition: "£2,800/year (Full-time) / £900/year (Part-time)",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.nwrc.ac.uk/courses/software-development-foundation-degree",
        requirements: {
          gpa: "A-Levels including Mathematics or Computing, or BTEC Level 3 in IT with Merit grades",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Online application and GCSE English and Math grade C/4 certificates",
          references: "Teacher recommendation"
        }
      },
      {
        id: 4920,
        title: "FdEng in Electrical & Renewable Energy Engineering Admission",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Comprehensive engineering curriculum training technicians for Northern Ireland's booming onshore wind and green hydrogen grid installations.",
        funding: "Eligible for Department for the Economy (DfE) technical apprentice subsidies",
        fee: "£0",
        tuition: "£2,800 per year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.nwrc.ac.uk/courses/electrical-electronic-engineering-foundation-degree",
        requirements: {
          gpa: "GCSE grade C in Mathematics, Physics or Science, plus 64 UCAS points",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Academic transcripts",
          references: "One referee"
        }
      },
      {
        id: 4921,
        title: "NWRC Business Support Centre Industrial R&D Internship",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Six-month paid technical internship assisting regional SMEs through Invest NI Innovation Vouchers in 3D prototyping and automation.",
        funding: "£11.44/hour wage (National Living Wage) plus industry innovation mentoring",
        fee: "£0",
        tuition: "Paid technical placement",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.nwrc.ac.uk/business-support-centre",
        requirements: {
          gpa: "Currently enrolled in Year 2 of an NWRC higher education engineering or computing program",
          ielts: "English fluency",
          gre: "Not required",
          papers: "CV and technical portfolio showcasing CAD, software code, or electronics design",
          references: "BSC Technical Manager endorsement"
        }
      },
      {
        id: 4922,
        title: "Foundation Degree in Hospitality & Tourism Management Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Applied hospitality curriculum validated by Ulster University, featuring an integrated 400-hour industry work placement in the Causeway Coast.",
        funding: "Tourism NI industry placement awards (£500–£1,000)",
        fee: "£0",
        tuition: "£2,800/year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.nwrc.ac.uk/courses/hospitality-and-tourism-management-foundation-degree",
        requirements: {
          gpa: "48 UCAS tariff points and GCSE English grade C",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement highlighting customer service and leadership ambitions",
          references: "One referee"
        }
      },
      {
        id: 4923,
        title: "Northern Ireland Higher Level Apprenticeship (HLA) in Software Engineering",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science"],
        desc: "Earn-while-you-learn programme where students work 4 days a week with IT employers (e.g., Allstate, Fujitsu) and attend NWRC 1 day per week.",
        funding: "100% funded tuition (no student loan needed) plus starting salary of £17,000–£21,000/year",
        fee: "£0",
        tuition: "Free via Department for the Economy funding",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.nwrc.ac.uk/higher-level-apprenticeships",
        requirements: {
          gpa: "80 UCAS tariff points including computing or STEM subjects, plus GCSE Math grade C",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Employer interview and signed HLA apprentice contract",
          references: "Employer endorsement"
        }
      },
      {
        id: 4924,
        title: "NWRC Student Hardship and Childcare Support Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Discretionary grant aiding higher education students facing childcare costs, travel burdens, or sudden financial hardship in the North West.",
        funding: "Up to £2,000 non-repayable grant per academic year",
        fee: "£0",
        tuition: "Direct student support grant",
        deadline: "2027-10-31",
        deadlineText: "October 31, 2027",
        source: "https://www.nwrc.ac.uk/student-services/financial-support",
        requirements: {
          gpa: "Full-time or part-time enrolled higher education student with verified household income under £19,203",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Household income documentation and evidence of expenditure",
          references: "Student Services assessment"
        }
      }
    ],
    researchers: [
      {
        id: 2127,
        name: "Leo Murphy",
        title: "Principal & Chief Executive Officer",
        department: "Executive Directorate",
        email: "leo.murphy@nwrc.ac.uk",
        phone: "+44 28 7127 6000",
        interests: ["Further and Higher Education Policy", "Cross-Border Skills Strategy", "Tertiary Education Mergers", "Regional Innovation Hubs"],
        website: "https://www.nwrc.ac.uk/about/leadership",
        subject: "social-sciences",
        summary: "Leo Murphy is Principal and CEO of North West Regional College, steering cross-border skills initiatives with the Republic of Ireland and championing higher-level technical apprenticeships."
      },
      {
        id: 2128,
        name: "Dr. Fergal Tuffy",
        title: "Business Support Centre Manager & Technology Transfer Lead",
        department: "Business Support Centre (BSC)",
        email: "fergal.tuffy@nwrc.ac.uk",
        phone: "+44 28 7127 6170",
        interests: ["Technology Transfer", "Applied Industrial Research", "Industry 4.0 Integration", "SME Innovation Vouchers"],
        website: "https://www.nwrc.ac.uk/business-support-centre/team",
        subject: "engineering",
        summary: "Dr. Fergal Tuffy manages the Business Support Centre, directing academic researchers and engineers who assist regional manufacturing, food technology, and software enterprises."
      },
      {
        id: 2129,
        name: "Gillian Moss",
        title: "Head of School of Computing and Creative Media",
        department: "School of Computing & Creative Media",
        email: "gillian.moss@nwrc.ac.uk",
        phone: "+44 28 7127 6185",
        interests: ["Software Development Pedagogy", "Cybersecurity Training Frameworks", "Women in Technology", "Foundation Degree Articulation"],
        website: "https://www.nwrc.ac.uk/courses/computing",
        subject: "computer-science",
        summary: "Gillian Moss oversees higher education computing degrees and Higher Level Apprenticeships, collaborating with Ulster University to ensure seamless degree transfer for tech graduates."
      }
    ]
  },

  // 22. UK: Liverpool John Moores University International Study Centre
  {
    institution: "Liverpool John Moores University International Study Centre",
    slug: "ljmu-international-study-centre",
    countryId: "uk",
    countryLabel: "United Kingdom",
    sourceRow: 1263,
    location: "Liverpool, Merseyside, United Kingdom",
    website: "https://www.ljmuisc.com",
    shortName: "LJMU ISC",
    badge: "Liverpool Pathway & University Foundation",
    overview: "Liverpool John Moores University International Study Centre (LJMU ISC), located at Rodney House on Mount Pleasant in the vibrant knowledge quarter of Liverpool, provides premier International Foundation Years and International Year One pathway programs in partnership with Study Group, opening guaranteed progression routes into hundreds of undergraduate and postgraduate degrees at LJMU.",
    lead: "Secure guaranteed progression into top-ranked engineering, pharmacy, and sports science degrees at LJMU through the International Study Centre.",
    description: "LJMU International Study Centre foundation degrees, International Year One pathways, Liverpool university progression, and merit scholarships.",
    quickFacts: {
      type: "University International Pathway Centre (LJMU in partnership with Study Group)",
      campus: "Rodney House Campus, Mount Pleasant, Liverpool Knowledge Quarter",
      accreditation: "Office for Students (OfS) Registered / Quality Assurance Agency (QAA) Monitored",
      admissions: "Direct online application via Study Group international portal",
      language: "English (Academic IELTS for UKVI 4.5 to 5.5 depending on pathway route)",
      aid: "LJMU ISC International Progression Scholarships (£1,000–£3,000)"
    },
    strengths: [
      "Direct campus integration with full access to LJMU Aldham Robarts and Avril Robarts libraries",
      "Guaranteed degree progression to Liverpool John Moores University upon reaching academic pass thresholds",
      "World-leading sports science faculty (LJMU is consistently ranked top 10 globally for sports science)",
      "Dedicated English language tuition and small interactive seminar groups to bridge international learning styles"
    ],
    programs: [
      { title: "International Foundation Year in Engineering, Computing and Life Sciences", level: "Pre-Degree Foundation", desc: "Three-term intensive pathway preparing students for entry into Year 1 of BEng Mechanical Engineering, BSc Computer Science, or MPharm Pharmacy." },
      { title: "International Year One in Business and Management", level: "First-Year Degree Equivalent", desc: "Credit-bearing first-year equivalent providing direct progression into Year 2 of BSc Business Management or Accounting and Finance." },
      { title: "Pre-Master's in Engineering and Science", level: "Postgraduate Preparation", desc: "One or two-term postgraduate bridging programme offering research methodology, academic English, and subject preparation for MSc programmes." }
    ],
    opportunities: [
      {
        id: 4925,
        title: "LJMU International Study Centre Early Bird Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Tuition fee reduction awarded to international pathway applicants confirming their acceptance offer before the priority intake deadline.",
        funding: "Up to £2,500 deduction applied directly to the pathway program tuition fee",
        fee: "£0 application fee",
        tuition: "£14,500 to £16,500 for the full three-term International Foundation Year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (September intake)",
        source: "https://www.ljmuisc.com/fees/scholarships",
        requirements: {
          gpa: "Good high school grades (e.g., equivalent to 5 GCSEs at grade C/4 or better)",
          ielts: "Academic IELTS for UKVI 4.5 to 5.0 (with no component below 4.0)",
          gre: "Not required",
          papers: "High school transcripts, graduation certificate, and personal statement",
          references: "One academic reference"
        }
      },
      {
        id: 4926,
        title: "International Foundation Year in Engineering & Computing Enrolment",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Three-term foundation curriculum guaranteeing progression into Year 1 of BEng Civil Engineering, BEng Mechanical, or BSc Computer Science at LJMU.",
        funding: "Eligible for continuing LJMU International Achievement Scholarship (£3,000/year at degree level)",
        fee: "£0",
        tuition: "£15,500 total pathway tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.ljmuisc.com/programmes/international-foundation-year/engineering-computing-and-life-sciences",
        requirements: {
          gpa: "Completed 12 years of schooling with satisfactory grades in mathematics and physics",
          ielts: "UKVI IELTS 5.0 overall (minimum 5.0 in writing)",
          gre: "Not required",
          papers: "Academic certificates and passport copy",
          references: "High school teacher reference"
        }
      },
      {
        id: 4927,
        title: "International Year One (IY1) in Business & Management Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Direct equivalent to the first year of a UK bachelor's degree, allowing successful students to transition straight into Year 2 at LJMU.",
        funding: "Progression award of £1,000 for students achieving a 65%+ average in IY1",
        fee: "£0",
        tuition: "£15,000 total tuition",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://www.ljmuisc.com/programmes/international-year-one/business-and-management",
        requirements: {
          gpa: "High school graduation certificate plus one year of higher education study or exceptional A-Level results",
          ielts: "UKVI IELTS 5.5 overall (minimum 5.5 in writing)",
          gre: "Not required",
          papers: "Personal statement detailing business ambitions in Liverpool",
          references: "Academic reference letter"
        }
      },
      {
        id: 4928,
        title: "Pre-Master's Programme in Engineering and Computing Enrolment",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "One or two-term postgraduate preparation course securing admission into MSc Software Engineering, MSc Civil Engineering, or MSc Data Science at LJMU.",
        funding: "Alumni discount on progression into LJMU master's degrees",
        fee: "£0",
        tuition: "£9,500 (one term) or £14,000 (two terms)",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.ljmuisc.com/programmes/pre-masters",
        requirements: {
          gpa: "Recognised diploma or general degree in engineering, physical sciences, or computing",
          ielts: "UKVI IELTS 5.5 (minimum 5.5 in all skills)",
          gre: "Not required",
          papers: "Transcripts of previous higher education and academic CV",
          references: "One professional or academic referee"
        }
      },
      {
        id: 4929,
        title: "LJMU Sports Science Pathway & Laboratory Practicum",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Specialized foundation stream leading to LJMU's world-renowned School of Sport and Exercise Sciences, with access to cutting-edge biomechanics labs.",
        funding: "Sports excellence progression awards available upon entering Year 1",
        fee: "£0",
        tuition: "£15,500 total foundation tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.ljmuisc.com/programmes/international-foundation-year/sports-science",
        requirements: {
          gpa: "Good secondary school grades with emphasis in biology, physical education, or chemistry",
          ielts: "UKVI IELTS 5.0 (writing 5.0)",
          gre: "Not required",
          papers: "Personal statement detailing sports science or athletic background",
          references: "Teacher or coach reference"
        }
      },
      {
        id: 4930,
        title: "Liverpool Knowledge Quarter Student Ambassador Internship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Part-time paid on-campus internship representing LJMU ISC during student open days, campus tours, and international induction events.",
        funding: "£11.44/hour up to 10 hours per week during term-time",
        fee: "£0",
        tuition: "Paid hourly employment",
        deadline: "2027-10-15",
        deadlineText: "October 15, 2027",
        source: "https://www.ljmuisc.com/student-life",
        requirements: {
          gpa: "Enrolled in an LJMU ISC pathway program with excellent attendance (95%+)",
          ielts: "English fluency",
          gre: "Not required",
          papers: "CV and short video self-introduction",
          references: "Centre Director approval"
        }
      },
      {
        id: 4931,
        title: "International Foundation Year in Pharmacy & Life Sciences",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Targeted pathway securing admission into Year 1 of the four-year Master of Pharmacy (MPharm) or BSc Biomedical Science at LJMU.",
        funding: "Eligible for continuing £3,000/year LJMU merit scholarships",
        fee: "£0",
        tuition: "£15,500 total tuition",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.ljmuisc.com/programmes/international-foundation-year/life-sciences",
        requirements: {
          gpa: "High school completion with strong marks in Chemistry and Biology",
          ielts: "UKVI IELTS 5.5 overall (minimum 5.5 in all sub-skills)",
          gre: "Not required",
          papers: "Statement of purpose and MPharm values-based interview preparation",
          references: "Science teacher reference"
        }
      }
    ],
    researchers: [
      {
        id: 2130,
        name: "Dr. Peter Kelly",
        title: "Head of Centre & Academic Director",
        department: "LJMU International Study Centre Directorate",
        email: "peter.kelly@studygroup.com",
        phone: "+44 151 231 2121",
        interests: ["International Student Acculturation", "Pathway Curriculum Design", "Academic English Pedagogy", "Quality Assurance in TNE"],
        website: "https://www.ljmuisc.com/about-us/staff",
        subject: "social-sciences",
        summary: "Dr. Peter Kelly directs academic operations and progression standards at LJMU ISC, coordinating curricular alignment between Study Group and LJMU academic faculties."
      },
      {
        id: 2131,
        name: "Prof. Keith George",
        title: "Pro-Vice-Chancellor for Research & Enterprise (LJMU Liaison)",
        department: "LJMU School of Sport and Exercise Sciences",
        email: "k.george@ljmu.ac.uk",
        phone: "+44 151 231 4300",
        interests: ["Cardiovascular Physiology", "Athlete Heart Remodeling", "Exercise Echocardiography", "Preventative Cardiology"],
        website: "https://www.ljmu.ac.uk/about-us/staff-profiles/faculty-of-science/sport-and-exercise-sciences/keith-george",
        subject: "biology",
        summary: "Prof. Keith George is Pro-Vice-Chancellor of LJMU and an internationally renowned exercise cardiologist studying cardiac adaptation in elite endurance athletes."
      },
      {
        id: 2132,
        name: "Dr. Sandra Byrne",
        title: "Senior Pathway Tutor in Computing & Mathematics",
        department: "Department of STEM Foundation Studies",
        email: "sandra.byrne@studygroup.com",
        phone: "+44 151 231 2122",
        interests: ["Introductory Programming Pedagogy", "Computational Thinking", "Applied Calculus for Engineers", "STEM Student Retention"],
        website: "https://www.ljmuisc.com/programmes/stem-tutors",
        subject: "computer-science",
        summary: "Dr. Sandra Byrne leads foundation computing instruction at Rodney House, preparing international students for rigorous undergraduate algorithmic and data coursework at LJMU."
      }
    ]
  },

  // 23. Japan: Kibi International University (Okayama Campus)
  {
    institution: "Kibi International University",
    slug: "kibi-international-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1667,
    location: "Takahashi & Okayama, Okayama Prefecture, Japan",
    website: "https://kiui.jp",
    shortName: "Kibi International Univ",
    badge: "Restoration Science, Agriculture & Anime Arts",
    overview: "Kibi International University (KIUI), founded in 1990 in the scenic castle city of Takahashi with campuses in Okayama and Minamiawaji, is a distinguished private Japanese university renowned for its specialized Department of Cultural Property Conservation (cultural heritage restoration), wine and agricultural biotechnology, digital animation arts, and international sports sciences.",
    lead: "Study ancient cultural property restoration, wine biotechnology, and digital anime arts at Kibi International University in Okayama.",
    description: "Kibi International University cultural property restoration master's, agriculture biotechnology, anime production, and MEXT international tuition waivers.",
    quickFacts: {
      type: "Private International University (Juntoku Educational Corporation)",
      campus: "Iga Campus (Takahashi), Okayama Campus & Minamiawaji Regional Agriculture Campus",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT Accredited",
      admissions: "International Student Entrance Examination & EJU (Examination for Japanese University Admission)",
      language: "Japanese (JLPT N2/N1 for standard degree tracks); selected English seminar modules",
      aid: "MEXT Honors Scholarship (Gakushushoreihi), KIUI 30%–50% Tuition Fee Reduction & Takahashi Municipal Housing Subsidies"
    },
    strengths: [
      "Department of Cultural Property Restoration: one of Japan's foremost centres for restoring national historical treasures, oil paintings, and wooden artifacts",
      "Pioneering Faculty of Regional Creation and Agriculture in Minamiawaji researching precision viticulture and wine fermentation",
      "Department of Animation and Media Arts training illustrators and 3D animators for Tokyo and Kansai production studios",
      "Generous tuition reductions and comprehensive support for foreign international students"
    ],
    programs: [
      { title: "Graduate School of Cultural Property Restoration (Master's / Ph.D.)", level: "Graduate Degree", desc: "Advanced scientific and artisan training in the conservation, pigment analysis, and physical restoration of Japanese historic scrolls, ceramics, and Western oil paintings." },
      { title: "Faculty of Agriculture and Food Science", level: "Undergraduate Degree", desc: "Four-year agricultural curriculum in Minamiawaji examining plant biotechnology, climate-resilient horticulture, and food fermentation science." },
      { title: "Department of Animation and Manga Arts", level: "Undergraduate Degree", desc: "Comprehensive creative program covering 2D hand-drawn animation, digital storyboarding, 3D CGI modeling, and character conceptualization." }
    ],
    opportunities: [
      {
        id: 4932,
        title: "KIUI Special Tuition Fee Reduction for International Students",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "biology"],
        desc: "Tuition reduction of 30% to 50% granted to eligible foreign international students enrolled full-time in degree faculties at Kibi International University.",
        funding: "30%–50% tuition waiver (saving approximately ¥300,000–¥500,000 per academic year)",
        fee: "¥15,000 international examination fee",
        tuition: "Normally ¥1,050,000/year; reduced to approx. ¥650,000/year with KIUI award",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (April intake)",
        source: "https://kiui.jp/international/scholarships/",
        requirements: {
          gpa: "Completed 12 years of formal schooling with strong academic performance",
          ielts: "JLPT N2 (Japanese Language Proficiency Test) or EJU Japanese score of 200+",
          gre: "Not required",
          papers: "Statement of purpose written in Japanese and financial guarantee certificate",
          references: "Recommendation letter from Japanese language school or secondary institution"
        }
      },
      {
        id: 4933,
        title: "Master of Science in Cultural Property Restoration Admission",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "chemistry"],
        desc: "Two-year Master's degree working directly with ancient scrolls, temple sculptures, and European classical paintings in high-tech restoration laboratories.",
        funding: "Eligible for JASSO Honors Scholarship for international graduate researchers (¥48,000/month)",
        fee: "¥30,000 application fee",
        tuition: "¥850,000 per academic year",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://kiui.jp/graduate/cultural-property/",
        requirements: {
          gpa: "Bachelor's degree in fine arts, art history, chemistry, materials science, or conservation",
          ielts: "JLPT N2 or N1",
          gre: "Not required",
          papers: "Research plan detailing proposed restoration case study and portfolio of conservation or studio art",
          references: "Two academic letters"
        }
      },
      {
        id: 4934,
        title: "Takahashi City International Student Municipal Housing Subsidy",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Municipal rent subsidy provided by the City of Takahashi for enrolled international university students living in designated student apartments.",
        funding: "¥10,000 to ¥15,000 per month rent reduction subsidized by Takahashi City Hall",
        fee: "¥0",
        tuition: "Direct housing subsidy",
        deadline: "2027-04-10",
        deadlineText: "April 10, 2027",
        source: "https://kiui.jp/campus-life/housing/",
        requirements: {
          gpa: "Matriculated full-time international student at Takahashi Campus",
          ielts: "Not applicable",
          gre: "Not required",
          papers: "Resident registration certificate (Juminhyo) and apartment lease contract in Takahashi",
          references: "University international affairs office certification"
        }
      },
      {
        id: 4935,
        title: "Faculty of Agriculture and Food Science Enrolment (Minamiawaji Campus)",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "environment"],
        desc: "Four-year Bachelor of Agriculture exploring soil biochemistry, viticulture, greenhouse automation, and Awaji island terroir.",
        funding: "Awaji Regional Agricultural Development Grant (¥200,000 entrance award)",
        fee: "¥15,000",
        tuition: "¥750,000/year (after international tuition reduction)",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://kiui.jp/faculty/agriculture/",
        requirements: {
          gpa: "High school completion with biology or chemistry credits",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Letter of intent describing agricultural innovation goals",
          references: "One referee"
        }
      },
      {
        id: 4936,
        title: "Department of Animation & Media Arts Portfolio Review Admission",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Four-year degree developing studio-ready digital animators, story artists, and character designers for the Japanese entertainment industry.",
        funding: "Wacom digital pen display hardware access and studio production grants",
        fee: "¥15,000",
        tuition: "¥820,000/year (with international student discount)",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://kiui.jp/faculty/animation/",
        requirements: {
          gpa: "Secondary graduation certificate",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Artistic portfolio comprising 10–20 original manga, animation character designs, or storyboards",
          references: "Portfolio assessment and faculty interview"
        }
      },
      {
        id: 4937,
        title: "Kansai Cultural Artifacts Scientific Research Practicum",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "chemistry"],
        desc: "Six-month research internship examining infrared reflectography and pigment identification on Edo-period folding screens (Byobu).",
        funding: "¥150,000 research travel grant and museum conservation laboratory placement",
        fee: "¥0",
        tuition: "Included in graduate curriculum",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://kiui.jp/research/cultural-heritage/",
        requirements: {
          gpa: "Enrolled in KIUI Graduate School of Cultural Property Restoration",
          ielts: "Japanese N1 or N2",
          gre: "Not required",
          papers: "Laboratory proposal detailing nondestructive spectroscopy or pigment testing methods",
          references: "Laboratory professor nomination"
        }
      },
      {
        id: 4938,
        title: "Kibi Women's Soccer & Sports Science Athletic Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Athletic scholarship for competitive women soccer players joining the nationally renowned FC Charme Kibi International University Okayama team.",
        funding: "Full or half tuition waiver plus team uniform and tournament travel coverage",
        fee: "¥0",
        tuition: "Waived or reduced under athletic contract",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://kiui.jp/sports/charme/",
        requirements: {
          gpa: "High school completion and high-level competitive soccer playing experience",
          ielts: "Japanese conversational ability",
          gre: "Not required",
          papers: "Athletic match resume and coach recommendation letter",
          references: "FC Charme Head Coach evaluation"
        }
      }
    ],
    researchers: [
      {
        id: 2133,
        name: "Prof. Dr. Mitsuhiko Morita",
        title: "President & Professor of Agricultural Biotechnology",
        department: "Office of the President & Faculty of Agriculture",
        email: "morita@kiui.ac.jp",
        phone: "+81 866-22-9454",
        interests: ["Plant Biotechnology", "Agricultural Terroir Science", "Viticulture Fermentation", "Regional Revitalization"],
        website: "https://kiui.jp/about/president/",
        subject: "biology",
        summary: "Prof. Dr. Mitsuhiko Morita is President of Kibi International University, spearheading the Minamiawaji agricultural research campus and evaluating indigenous yeast strains for winemaking."
      },
      {
        id: 2134,
        name: "Prof. Hironori Oishi",
        title: "Professor of Cultural Property Conservation & Restoration",
        department: "Graduate School of Cultural Property Restoration",
        email: "oishi@kiui.ac.jp",
        phone: "+81 866-22-9455",
        interests: ["Japanese Painting Restoration", "Urushi Lacquer Chemistry", "Pigment Micro-Analysis", "Traditional Craft Conservation"],
        website: "https://kiui.jp/faculty/staff/oishi-hironori/",
        subject: "arts-design",
        summary: "Prof. Hironori Oishi is one of Japan's foremost cultural property restoration scholars, directing historical scroll repair and advising national cultural heritage agencies on artifact preservation."
      },
      {
        id: 2135,
        name: "Prof. Kazuhiko Inoue",
        title: "Professor of Animation Production & Digital Media",
        department: "Department of Animation and Media Arts",
        email: "k-inoue@kiui.ac.jp",
        phone: "+81 866-22-9456",
        interests: ["2D Animation Directing", "Digital Storyboarding", "Anime Production Pipelines", "Visual Narrative Pedagogy"],
        website: "https://kiui.jp/faculty/staff/inoue-kazuhiko/",
        subject: "arts-design",
        summary: "Prof. Kazuhiko Inoue is an experienced commercial animation director who trains students in keyframe animation, cinematic lighting, and industry production workflows for Japanese anime studios."
      }
    ]
  },

  // 24. Japan: Kobe College (Kobe Jogakuin Daigaku)
  {
    institution: "Kobe College",
    slug: "kobe-college-kobe-jogakuin",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1671,
    location: "Nishinomiya, Hyogo Prefecture, Japan",
    website: "https://www.kobe-c.ac.jp",
    shortName: "Kobe College",
    badge: "Historic Women's Liberal Arts & Vories Architecture",
    overview: "Kobe College (Kobe Jogakuin Daigaku), founded in 1875 by American missionary educators, is one of Japan's oldest and most prestigious private women's liberal arts colleges. Situated on the scenic hilltop of Okada-yama in Nishinomiya, its campus is a designated National Important Cultural Property designed by renowned architect William Merrell Vories. Kobe College is celebrated for its departments of English literature, music performance, psychological science, and human sciences.",
    lead: "Experience over 150 years of women's leadership, conservatory music performance, and historic Vories campus life at Kobe College.",
    description: "Kobe College women's liberal arts degrees, music conservatory performance master's, cross-cultural humanities, and international study grants.",
    quickFacts: {
      type: "Private Women's Liberal Arts College (Christian Tradition)",
      campus: "Okada-yama Campus, Nishinomiya, Hyogo (National Important Cultural Property)",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT Accredited",
      admissions: "Kobe College International Admissions & Comprehensive Selection (AO)",
      language: "Japanese (JLPT N2/N1) for regular tracks; English for Department of English courses",
      aid: "Kobe College International Student Scholarships (30%–50% tuition deduction) & Alumnae Association Bursaries"
    },
    strengths: [
      "Okada-yama Campus: 12 historic buildings designated as National Important Cultural Properties of Japan",
      "Exceptional School of Music with conservatory-level training in piano, vocal arts, and orchestral instruments",
      "Pioneering tradition of women's higher education, critical thinking, and international global citizenship",
      "Small seminar classes fostering close mentorship and superior employment rates in global corporations and teaching"
    ],
    programs: [
      { title: "Bachelor of Arts in English and Global Communication", level: "Undergraduate Degree", desc: "Four-year immersive curriculum in English literary analysis, applied linguistics, translation studies, and cross-cultural communication." },
      { title: "Master of Music in Performance (Piano / Vocal / Orchestral)", level: "Graduate Degree", desc: "Two-year conservatory master's providing solo recital coaching, chamber music performance, opera theatre, and musicology." },
      { title: "Department of Psychological and Behavioral Sciences", level: "Undergraduate Degree", desc: "Empirical study of developmental psychology, clinical counseling, cognitive neuroscience, and social behavior." }
    ],
    opportunities: [
      {
        id: 4939,
        title: "Kobe College International Student Tuition Reduction Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Tuition waiver covering 30% of annual academic fees awarded to all privately funded international undergraduate and graduate students in good standing.",
        funding: "30% direct reduction on annual tuition fees (saving approx. ¥280,000–¥380,000 per year)",
        fee: "¥17,000 international examination fee",
        tuition: "Reduced from approx. ¥1,150,000 to ¥800,000 per year",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027 (Spring enrollment)",
        source: "https://www.kobe-c.ac.jp/english/admissions/scholarships/",
        requirements: {
          gpa: "Female student completing 12 years of formal schooling with GPA equivalent to 3.0/4.0",
          ielts: "JLPT N2/N1 for Japanese programs or TOEFL iBT 80 / IELTS 6.5 for English major",
          gre: "Not required",
          papers: "Personal motivation essay in Japanese or English detailing academic purpose",
          references: "Recommendation letter from school principal or teacher"
        }
      },
      {
        id: 4940,
        title: "School of Music Master of Music Recital Admission & Audition",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Audition-based entry for women musicians into the prestigious Kobe College Graduate School of Music with world-class faculty coaching.",
        funding: "Yamaha and Kawai Music Foundation competitive external scholarships eligible",
        fee: "¥30,000 audition fee",
        tuition: "¥1,250,000 per year (music laboratory and studio fee included)",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026 (For April 2027 matriculation)",
        source: "https://www.kobe-c.ac.jp/music/graduate/",
        requirements: {
          gpa: "Bachelor of Music or equivalent conservatory degree with exceptional performance audition",
          ielts: "JLPT N2 (or English proficiency for international masterclasses)",
          gre: "Not required",
          papers: "Repertoire list of 30 minutes of contrasting classical works (e.g., Bach, Beethoven, Chopin)",
          references: "Two music mentor references"
        }
      },
      {
        id: 4941,
        title: "Kobe College Alumnae Association Megumi International Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Prestigious endowed scholarship funded by the Megumikai (Alumnae Association) supporting female international students demonstrating leadership.",
        funding: "¥300,000 annual cash stipend awarded in two semester disbursements",
        fee: "¥0",
        tuition: "Direct cash scholarship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.kobe-c.ac.jp/campuslife/scholarship/",
        requirements: {
          gpa: "Enrolled undergraduate female international student with GPA 3.2+",
          ielts: "Japanese or English proficiency",
          gre: "Not required",
          papers: "Essay on women's empowerment and international leadership in Asia",
          references: "Faculty advisor nomination"
        }
      },
      {
        id: 4942,
        title: "BA in English Literature and Intercultural Studies Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Four-year degree featuring intensive English language debates, British and American literary canons, and global translation workshops.",
        funding: "Study abroad semester grants for partner universities in the UK and USA",
        fee: "¥17,000",
        tuition: "¥850,000/year (after international tuition reduction)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.kobe-c.ac.jp/english/departments/english/",
        requirements: {
          gpa: "High school completion certificate with strong English grades",
          ielts: "IELTS 6.0 or TOEFL iBT 75",
          gre: "Not required",
          papers: "English personal statement and high school transcripts",
          references: "Teacher reference"
        }
      },
      {
        id: 4943,
        title: "Department of Psychological & Behavioral Sciences Laboratory Practicum",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Undergraduate empirical research in eye-tracking, cognitive development in early childhood, and clinical counseling methodologies.",
        funding: "Internal psychological research presentation grants",
        fee: "¥17,000",
        tuition: "¥880,000/year",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.kobe-c.ac.jp/departments/psychology/",
        requirements: {
          gpa: "Secondary school graduation",
          ielts: "JLPT N1 or N2",
          gre: "Not required",
          papers: "Statement of interest in psychological research",
          references: "One referee"
        }
      },
      {
        id: 4944,
        title: "Vories Heritage Architectural Documentation Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Summer architectural and historical fellowship documenting William Merrell Vories' Spanish Mission style buildings on the Okada-yama campus.",
        funding: "¥200,000 research award plus access to historic blueprints and college archives",
        fee: "¥0",
        tuition: "Fully funded research project",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.kobe-c.ac.jp/about/heritage/",
        requirements: {
          gpa: "Student or researcher in architectural history, heritage preservation, or Japanese cultural history",
          ielts: "Japanese and English reading ability",
          gre: "Not required",
          papers: "Research proposal focusing on Vories architectural design principles in early 20th century Japan",
          references: "Faculty recommendation"
        }
      },
      {
        id: 4945,
        title: "Kobe College Global Internship in International Education",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "On-campus internship at the International Exchange Center assisting foreign exchange scholars and coordinating cross-cultural global dialogues.",
        funding: "¥1,100/hour on-campus student employment",
        fee: "¥0",
        tuition: "Paid campus employment",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.kobe-c.ac.jp/english/international/",
        requirements: {
          gpa: "Enrolled Kobe College student with bilingual Japanese and English proficiency",
          ielts: "Bilingual fluency",
          gre: "Not required",
          papers: "Resume and short statement on international student support",
          references: "International Center director approval"
        }
      }
    ],
    researchers: [
      {
        id: 2136,
        name: "Prof. Dr. Toshiko Saito",
        title: "President & Professor of American Literature",
        department: "Office of the President & Department of English",
        email: "t-saito@mail.kobe-c.ac.jp",
        phone: "+81 798-51-8511",
        interests: ["19th-Century American Literature", "Women's Writing", "Transatlantic Cultural Exchange", "Higher Education for Women"],
        website: "https://www.kobe-c.ac.jp/about/president/",
        subject: "social-sciences",
        summary: "Prof. Dr. Toshiko Saito is President of Kobe College, leading the preservation of the Vories heritage campus while authoring critical studies on 19th-century American women's literature."
      },
      {
        id: 2137,
        name: "Prof. Michiko Hayashi",
        title: "Dean of the School of Music & Acclaimed Mezzo-Soprano",
        department: "School of Music",
        email: "m-hayashi@mail.kobe-c.ac.jp",
        phone: "+81 798-51-8520",
        interests: ["Vocal Pedagogy", "Operatic Performance", "German Lieder Interpretation", "Vocal Physiology"],
        website: "https://www.kobe-c.ac.jp/music/faculty/hayashi-michiko/",
        subject: "arts-design",
        summary: "Prof. Michiko Hayashi is an internationally celebrated Japanese mezzo-soprano and Dean of Music at Kobe College, performing with major orchestras worldwide and training elite opera singers."
      },
      {
        id: 2138,
        name: "Dr. Kenji Yoshimura",
        title: "Professor of Cognitive and Developmental Psychology",
        department: "Department of Psychological and Behavioral Sciences",
        email: "k-yoshimura@mail.kobe-c.ac.jp",
        phone: "+81 798-51-8530",
        interests: ["Child Cognitive Development", "Parent-Child Attachment", "Eye-Tracking Methodologies", "Educational Psychology"],
        website: "https://www.kobe-c.ac.jp/departments/faculty/yoshimura-kenji/",
        subject: "social-sciences",
        summary: "Dr. Kenji Yoshimura conducts experimental research on infant social cognition, emotional regulation, and developmental support systems in Japanese family structures."
      }
    ]
  },

  // 25. Japan: Kobe Gakuin University (Port Island & Arise Campus)
  {
    institution: "Kobe Gakuin University",
    slug: "kobe-gakuin-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1673,
    location: "Kobe, Hyogo Prefecture, Japan",
    website: "https://www.kobegakuin.ac.jp",
    shortName: "Kobe Gakuin",
    badge: "Pharmacy, Disaster Management & Waterfront Tech",
    overview: "Kobe Gakuin University, established in 1966 and one of the largest comprehensive private universities in the Kansai region with over 11,000 students, operates two flagship campuses: the Port Island Campus overlooking Kobe Harbor and the verdant Arise Campus in Nishi-ku. Renowned for its Faculty of Pharmaceutical Sciences, pioneering Faculty of Contemporary Social Studies (specializing in disaster mitigation and crisis management), and Faculty of Law.",
    lead: "Study clinical pharmacy, disaster mitigation, and waterfront business law at Kobe Gakuin University in Kobe Harbor.",
    description: "Kobe Gakuin University pharmaceutical sciences degrees, disaster management programs, international tuition fee reductions, and Kansai research grants.",
    quickFacts: {
      type: "Private Comprehensive University",
      campus: "Port Island Campus (Chuo-ku, Kobe waterfront) & Arise Campus (Nishi-ku, Kobe)",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT Accredited",
      admissions: "International Student Examination / EJU / AO Admissions",
      language: "Japanese (JLPT N2 or N1 required for undergraduate and professional faculties)",
      aid: "Kobe Gakuin 30% International Tuition Fee Reduction & Mori Memorial Scholarships"
    },
    strengths: [
      "Top-tier Faculty of Pharmaceutical Sciences with integrated 6-year clinical pharmacist degree",
      "Pioneering Disaster Mitigation and Crisis Management programs born from the 1995 Great Hanshin Earthquake",
      "Ultra-modern Port Island waterfront campus adjacent to Kobe Biomedical Innovation Cluster (KBIC)",
      "Vibrant cooperative internships with the City of Kobe, Hyogo Prefectural Government, and multinational ports"
    ],
    programs: [
      { title: "Doctor of Pharmacy (Pharm.D. - 6-Year Clinical Program)", level: "Professional Doctoral Degree", desc: "Six-year clinical pharmacy curriculum preparing licensed pharmacists for hospital intensive care units, pharmaceutical R&D, and clinical pharmacology." },
      { title: "Bachelor of Contemporary Social Studies (Disaster Management)", level: "Undergraduate Degree", desc: "First-of-its-kind program in Japan exploring community disaster resilience, crisis communication, evacuation logistics, and humanitarian aid." },
      { title: "Graduate School of Law (Master's / Ph.D.)", level: "Graduate Degree", desc: "Advanced legal research focusing on maritime trade law, international commercial arbitration, intellectual property, and environmental compliance." }
    ],
    opportunities: [
      {
        id: 4946,
        title: "Kobe Gakuin 30% International Student Tuition Reduction",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Tuition waiver covering 30% of standard annual tuition fees for all eligible privately financed international students at Kobe Gakuin.",
        funding: "30% reduction on annual tuition fees (saving ¥250,000–¥450,000 per academic year)",
        fee: "¥15,000 international application fee",
        tuition: "Varies by faculty; reduced to approx. ¥750,000–¥1,200,000/year",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027 (Spring entrance)",
        source: "https://www.kobegakuin.ac.jp/international/scholarship/",
        requirements: {
          gpa: "Completed 12 years of formal education with good academic records",
          ielts: "JLPT N2 or EJU Japanese score 220+",
          gre: "Not required",
          papers: "Statement of purpose in Japanese and financial support certificate",
          references: "One teacher recommendation letter"
        }
      },
      {
        id: 4947,
        title: "Faculty of Pharmaceutical Sciences Clinical Research Enrolment",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Six-year Pharm.D. or four-year pharmaceutical research degree with clinical clerkships at Kobe University Hospital and KBIC research labs.",
        funding: "Eligible for Kobe Biomedical Cluster research assistantships",
        fee: "¥35,000 entrance examination fee",
        tuition: "¥1,850,000 per year (standard pharmacy tuition before discounts)",
        deadline: "2026-12-20",
        deadlineText: "December 20, 2026",
        source: "https://www.kobegakuin.ac.jp/faculty/pharmacy/",
        requirements: {
          gpa: "Secondary school certificate with high marks in Chemistry, Biology, and Mathematics",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "Science examination results and medical interview",
          references: "Principal recommendation"
        }
      },
      {
        id: 4948,
        title: "Great Hanshin-Awaji Disaster Resilience Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "One-year graduate research fellowship hosted at the Port Island Disaster Prevention Research Centre investigating urban seismic resilience.",
        funding: "¥1,200,000 annual research stipend plus full access to the Hyogo Disaster Simulation Hall",
        fee: "¥0",
        tuition: "Covered by research fellowship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.kobegakuin.ac.jp/research/disaster-prevention/",
        requirements: {
          gpa: "Master's or doctoral student in civil engineering, sociology, urban planning, or disaster risk science",
          ielts: "Japanese N2 or English C1",
          gre: "Not required",
          papers: "Research proposal detailing urban evacuation simulation or community disaster mitigation plans",
          references: "Academic supervisor letter"
        }
      },
      {
        id: 4949,
        title: "Mori Memorial International Student Merit Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Endowed merit scholarship for the top international students enrolled across the humanities and social science faculties.",
        funding: "¥400,000 annual cash award paid directly to the student",
        fee: "¥0",
        tuition: "Non-repayable direct stipend",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.kobegakuin.ac.jp/scholarships/mori/",
        requirements: {
          gpa: "Top 5% GPA in faculty cohort at Kobe Gakuin",
          ielts: "Japanese fluency",
          gre: "Not required",
          papers: "Academic essay on cross-cultural relations between Japan and student's home nation",
          references: "Dean of Faculty nomination"
        }
      },
      {
        id: 4950,
        title: "Port Island Harbor Maritime Logistics & Trade Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-month practical internship with the Port of Kobe container terminals and international freight forwarding enterprises.",
        funding: "¥120,000 monthly internship stipend",
        fee: "¥0",
        tuition: "Credit-bearing internship course",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.kobegakuin.ac.jp/career/internships/",
        requirements: {
          gpa: "Junior or senior standing in Faculty of Business Administration or Economics",
          ielts: "JLPT N2 and English B2",
          gre: "Not required",
          papers: "Resume and port logistics interest statement",
          references: "Career centre advisor sign-off"
        }
      },
      {
        id: 4951,
        title: "Graduate School of Food and Medicinal Sciences Admission",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Two-year Master of Science degree investigating nutraceutical compounds, food safety analytics, and functional food biochemistry.",
        funding: "JASSO Master's research loan exemption for outstanding results",
        fee: "¥30,000",
        tuition: "¥850,000 per academic year",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.kobegakuin.ac.jp/graduate/food-nutrition/",
        requirements: {
          gpa: "Bachelor's degree in chemistry, biology, nutrition, or pharmacy",
          ielts: "JLPT N2 or English proficiency",
          gre: "Not required",
          papers: "Graduation thesis abstract and research plan",
          references: "Academic referee"
        }
      },
      {
        id: 4952,
        title: "Faculty of Psychology Clinical Counseling Internship",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Practical clinical psychology placement conducted at the Kobe Gakuin Psychological Counseling Centre serving the local Kobe community.",
        funding: "Subsidized clinical supervision fee",
        fee: "¥15,000",
        tuition: "Standard tuition",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kobegakuin.ac.jp/faculty/psychology/",
        requirements: {
          gpa: "Completion of prerequisite developmental and clinical psychology modules",
          ielts: "Native or near-native Japanese fluency",
          gre: "Not required",
          papers: "Clinical motivation statement and ethics agreement",
          references: "Clinical department head approval"
        }
      }
    ],
    researchers: [
      {
        id: 2139,
        name: "Prof. Dr. Masatoshi Nakamura",
        title: "President & Professor of Pharmaceutical Chemistry",
        department: "Office of the President & Faculty of Pharmaceutical Sciences",
        email: "m-nakamura@pharm.kobegakuin.ac.jp",
        phone: "+81 78-974-1551",
        interests: ["Medicinal Chemistry", "Drug Delivery Systems", "Pharmacokinetics", "Clinical Pharmacy Education"],
        website: "https://www.kobegakuin.ac.jp/about/president/",
        subject: "chemistry",
        summary: "Prof. Dr. Masatoshi Nakamura is President of Kobe Gakuin University, leading pharmaceutical research collaborations with the Kobe Biomedical Innovation Cluster."
      },
      {
        id: 2140,
        name: "Prof. Dr. Shigeo Murota",
        title: "Professor of Disaster Mitigation & Crisis Governance",
        department: "Faculty of Contemporary Social Studies",
        email: "murota@css.kobegakuin.ac.jp",
        phone: "+81 78-974-1552",
        interests: ["Disaster Risk Management", "Earthquake Evacuation Modeling", "Community Resilience", "Crisis Communications"],
        website: "https://www.kobegakuin.ac.jp/faculty/css/prof-murota/",
        subject: "social-sciences",
        summary: "Prof. Dr. Shigeo Murota is a prominent Japanese disaster management scholar advising municipal disaster task forces on urban earthquake evacuation and resilience planning."
      },
      {
        id: 2141,
        name: "Dr. Yoko Yamashita",
        title: "Associate Professor of Food and Nutritional Sciences",
        department: "Faculty of Nutrition",
        email: "yamashita@nutr.kobegakuin.ac.jp",
        phone: "+81 78-974-1553",
        interests: ["Polyphenol Bioavailability", "Antioxidant Biochemistry", "Functional Food Chemistry", "Metabolic Syndrome Prevention"],
        website: "https://www.kobegakuin.ac.jp/faculty/nutrition/yamashita/",
        subject: "biology",
        summary: "Dr. Yoko Yamashita investigates functional food ingredients, identifying polyphenol mechanisms that reduce metabolic disorders and improve cardiovascular health."
      }
    ]
  },

  // 26. Japan: Kobe Shinwa University
  {
    institution: "Kobe Shinwa University",
    slug: "kobe-shinwa-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1677,
    location: "Kita-ku, Kobe, Hyogo Prefecture, Japan",
    website: "https://www.kobe-shinwa.ac.jp",
    shortName: "Kobe Shinwa",
    badge: "Teacher Education, Sports Science & Child Psychology",
    overview: "Kobe Shinwa University (formerly Kobe Shinwa Women's University, coeducational since 2023), established in 1966 in the green hills of Kita-ku, Kobe, is a prestigious Japanese university recognized nationwide for its exceptional teacher preparation (consistently ranking top in Hyogo for elementary teacher employment), sports pedagogy, clinical psychology, and early childhood education.",
    lead: "Excel in accredited teacher education, clinical child psychology, and competitive sports science at Kobe Shinwa University in Kobe.",
    description: "Kobe Shinwa University teacher training degrees, sports science master's, international student scholarships, and child psychology research.",
    quickFacts: {
      type: "Private Coeducational University (Shinwa Gakuen Educational Foundation)",
      campus: "Suzurandai Campus, Kita-ku, Kobe, Hyogo Prefecture",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT Accredited",
      admissions: "Comprehensive AO Admissions, EJU & International Student Portal",
      language: "Japanese (JLPT N2 required for undergraduate curricula; N1 for teacher certification)",
      aid: "Shinwa International Student Tuition Waivers (up to 50%) & Gakuen Founder Bursaries"
    },
    strengths: [
      "#1 in Hyogo Prefecture for public elementary school teacher employment success",
      "Nationally elite women's volleyball and track and field collegiate athletic programs",
      "Department of Child Development with dedicated on-campus Shinwa Child Study Centre",
      "Fully coeducational since April 2023 with modern sports training and psychological observation facilities"
    ],
    programs: [
      { title: "Faculty of Education (Elementary & Special Needs Licensure)", level: "Undergraduate Degree", desc: "Four-year curriculum qualifying graduates for Japanese elementary teacher and special needs education teaching licenses." },
      { title: "Department of Sports and Social Development", level: "Undergraduate Degree", desc: "Covers athletic coaching, biomechanics of sports performance, community health promotion, and sports event management." },
      { title: "Graduate School of Psychology (Clinical Psychology Master's)", level: "Master's Degree", desc: "MEXT-certified training program qualifying graduates for the national Certified Public Psychologist (Ginkou Shinrishi) license." }
    ],
    opportunities: [
      {
        id: 4953,
        title: "Shinwa International Student Academic Tuition Reduction",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Tuition waiver reducing academic fees by 30% to 50% for all privately financed international students demonstrating strong motivation.",
        funding: "30%–50% tuition reduction (saving approximately ¥320,000–¥480,000 per year)",
        fee: "¥15,000 examination fee",
        tuition: "Normally ¥1,180,000/year; reduced to approx. ¥700,000/year",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.kobe-shinwa.ac.jp/international/scholarship/",
        requirements: {
          gpa: "Completed 12 years of schooling with satisfactory marks",
          ielts: "JLPT N2 or EJU Japanese score of 200+",
          gre: "Not required",
          papers: "Personal statement in Japanese describing career goals in education or sports",
          references: "High school or language school recommendation"
        }
      },
      {
        id: 4954,
        title: "Graduate School of Clinical Psychology Licensure Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Rigorous two-year Master's degree featuring clinical rotations at the Shinwa Psychological Clinic preparing for the national psychologist exam.",
        funding: "Eligible for JASSO Graduate Research Scholarships",
        fee: "¥30,000 entrance fee",
        tuition: "¥850,000 per academic year",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        source: "https://www.kobe-shinwa.ac.jp/graduate/psychology/",
        requirements: {
          gpa: "Bachelor's degree with completed psychology foundation credits",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "Research plan on developmental, clinical, or school psychology",
          references: "Two academic letters"
        }
      },
      {
        id: 4955,
        title: "Kobe Shinwa Athletic Performance Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Athletic scholarship awarded to competitive athletes in volleyball, basketball, and track joining Shinwa university sports squads.",
        funding: "Full or half tuition waiver plus dedicated athletic trainer conditioning",
        fee: "¥0",
        tuition: "Waived or reduced under athletic contract",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kobe-shinwa.ac.jp/sports/",
        requirements: {
          gpa: "High school graduation and outstanding regional or national tournament athletic record",
          ielts: "Japanese conversational proficiency",
          gre: "Not required",
          papers: "Athletic achievement dossier and coach recommendation",
          references: "Team Head Coach tryout approval"
        }
      },
      {
        id: 4956,
        title: "Faculty of Education Elementary Teaching Practicum",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Mandatory four-week teaching placement (Kyoiku Jisshu) in public primary schools across Kobe and Hyogo Prefecture.",
        funding: "Municipal travel grant for regional teaching placements",
        fee: "¥15,000",
        tuition: "Included in regular undergraduate fees",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.kobe-shinwa.ac.jp/faculty/education/",
        requirements: {
          gpa: "Third-year standing in Faculty of Education with passing grades in pedagogical methods",
          ielts: "JLPT N1 for international students seeking Japanese teaching certification",
          gre: "Not required",
          papers: "Lesson plan dossier and ethics agreement",
          references: "Education faculty mentor sign-off"
        }
      },
      {
        id: 4957,
        title: "Shinwa Child Development Laboratory Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "One-year research fellowship observing early childhood play dynamics and parent-toddler interactions at the Shinwa Community Child Centre.",
        funding: "¥500,000 research project allowance",
        fee: "¥0",
        tuition: "Not applicable",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.kobe-shinwa.ac.jp/research/child-center/",
        requirements: {
          gpa: "Graduate or advanced undergraduate standing in Child Development or Early Childhood Care",
          ielts: "Japanese fluency",
          gre: "Not required",
          papers: "Observational research plan targeting preschool emotional socialization",
          references: "Faculty research advisor endorsement"
        }
      },
      {
        id: 4958,
        title: "Department of Sports and Social Development Admission",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Four-year degree examining sports biomechanics, exercise physiology, health coaching, and regional sports tourism.",
        funding: "Eligible for Shinwa International Student Tuition Discount",
        fee: "¥15,000",
        tuition: "¥750,000/year (after international tuition reduction)",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kobe-shinwa.ac.jp/faculty/sports/",
        requirements: {
          gpa: "High school completion certificate",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Sports essay and high school transcripts",
          references: "One referee"
        }
      },
      {
        id: 4959,
        title: "Shinwa Gakuen Founder Centennial Memorial Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Merit award celebrating academic diligence and community volunteer service in Kita-ku, Kobe.",
        funding: "¥200,000 direct cash award",
        fee: "¥0",
        tuition: "Cash grant",
        deadline: "2027-09-30",
        deadlineText: "September 30, 2027",
        source: "https://www.kobe-shinwa.ac.jp/about/scholarships/",
        requirements: {
          gpa: "Enrolled student with cumulative GPA 3.3+",
          ielts: "Japanese proficiency",
          gre: "Not required",
          papers: "Documentation of 30+ hours of community voluntary service",
          references: "Department chair recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2142,
        name: "Prof. Dr. Kenji Yamamoto",
        title: "President & Professor of Educational Philosophy",
        department: "Office of the President & Faculty of Education",
        email: "k-yamamoto@kobe-shinwa.ac.jp",
        phone: "+81 78-591-1651",
        interests: ["Teacher Preparation Pedagogy", "Educational Philosophy", "Coeducational Institutional Reform", "School Curriculum Standards"],
        website: "https://www.kobe-shinwa.ac.jp/about/president/",
        subject: "social-sciences",
        summary: "Prof. Dr. Kenji Yamamoto is President of Kobe Shinwa University, leading the transition to full coeducation and modernizing elementary teacher education across western Japan."
      },
      {
        id: 2143,
        name: "Prof. Dr. Hiroki Matsuo",
        title: "Professor of Sports Biomechanics and Exercise Physiology",
        department: "Department of Sports and Social Development",
        email: "matsuo@kobe-shinwa.ac.jp",
        phone: "+81 78-591-1652",
        interests: ["Sports Biomechanics", "Motion Analysis in Volleyball", "Muscle Fatigue Recovery", "Youth Athletic Training"],
        website: "https://www.kobe-shinwa.ac.jp/faculty/staff/matsuo-hiroki/",
        subject: "biology",
        summary: "Prof. Dr. Hiroki Matsuo conducts high-speed kinematic video motion analysis on competitive collegiate volleyball spikers, publishing widely on jump biomechanics and ACL injury prevention."
      },
      {
        id: 2144,
        name: "Dr. Mayumi Takahashi",
        title: "Director of Clinical Psychological Center & Professor",
        department: "Graduate School of Psychology",
        email: "m-takahashi@kobe-shinwa.ac.jp",
        phone: "+81 78-591-1653",
        interests: ["Child Clinical Psychology", "School Absenteeism (Futoukou)", "Play Therapy", "Family Counseling Systems"],
        website: "https://www.kobe-shinwa.ac.jp/faculty/staff/takahashi-mayumi/",
        subject: "social-sciences",
        summary: "Dr. Mayumi Takahashi is a clinical psychologist directing the Shinwa Psychological Clinic, specializing in play therapy interventions for children experiencing school refusal and trauma."
      }
    ]
  },

  // 27. Netherlands: Markus Verbeek Praehep
  {
    institution: "Markus Verbeek Praehep",
    slug: "markus-verbeek-praehep",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1455,
    location: "Hilversum & Utrecht, Netherlands",
    website: "https://www.mvp.nl",
    shortName: "Markus Verbeek Praehep",
    badge: "Accredited Dutch Accountancy & Tax Law",
    overview: "Markus Verbeek Praehep (MVP), founded in 1896 and based in Hilversum with training hubs in Utrecht, Amsterdam, and Rotterdam, is the Netherlands' foremost specialized higher education institution for chartered accountancy (Registeraccountant - RA), accounting consultant certification (Accountant-Administratieconsulent - AA), tax advisory, financial auditing, and corporate compliance.",
    lead: "Master accredited Dutch chartered accountancy (RA/AA), corporate taxation, and financial auditing at Markus Verbeek Praehep.",
    description: "Markus Verbeek Praehep accredited Dutch chartered accountancy degrees, post-bachelor tax law, NBA certification, and employer-sponsored traineeships.",
    quickFacts: {
      type: "State-Recognized Specialized Higher Institute (NVAO & CEA Accredited)",
      campus: "Hilversum Head Office (Marathon 1) & Regional Lecture Centres in Utrecht and Amsterdam",
      accreditation: "Dutch-Flemish Accreditation Organisation (NVAO) / Commissie Eindtermen Accountantsopleiding (CEA)",
      admissions: "Modular higher professional enrollment with recognized prior accounting or business qualifications",
      language: "Dutch (C1 for Dutch fiscal law and accounting standards); English accounting literature",
      aid: "Employer Study Cost Reimbursement (Studiekostenregeling) & Levenlanglerenkrediet (DUO)"
    },
    strengths: [
      "Over 125 years of accredited leadership in Dutch accountancy and financial education",
      "Full CEA and NBA (Koninklijke Nederlandse Beroepsorganisatie van Accountants) accreditation for RA and AA titles",
      "Dual study model tailored for working professionals in Big Four accounting firms and regional financial practices",
      "High first-time pass rates in national integrated final practical examinations"
    ],
    programs: [
      { title: "Post-Master Accountancy (Opleiding tot Registeraccountant - RA)", level: "Post-Master Professional Degree", desc: "Accredited CEA curriculum qualifying professionals for registration in the Dutch register of certified public accountants (RA)." },
      { title: "HBO Bachelor Accountancy (NVAO Geaccrediteerd)", level: "Professional Bachelor's (HBO)", desc: "Four-year higher vocational degree covering financial accounting, audit methodologies, corporate taxation, and management control." },
      { title: "Post-Bachelor Belastingadviseur (Tax Advisory Diploma)", level: "Post-Bachelor Specialization", desc: "Specialized postgraduate program in Dutch corporate income tax (Vennootschapsbelasting), VAT, estate planning, and international tax treaties." }
    ],
    opportunities: [
      {
        id: 4960,
        title: "Markus Verbeek Praehep Corporate Traineeship Sponsorship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Full or partial employer tuition reimbursement contract provided by participating Dutch accounting and audit firms (PwC, Deloitte, EY, KPMG, BDO).",
        funding: "100% tuition reimbursement plus monthly professional salary (€2,800–€3,800/month)",
        fee: "€0",
        tuition: "Covered completely under corporate training agreement (studiekostenovereenkomst)",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027 (September start)",
        source: "https://www.mvp.nl/opleidingen/financieel/accountancy.html",
        requirements: {
          gpa: "Completed academic Master's in Accounting or HBO Bachelor Accountancy",
          ielts: "Dutch C1 proficiency",
          gre: "Not required",
          papers: "Employment contract with an approved audit firm and university transcripts",
          references: "Employer training partner approval"
        }
      },
      {
        id: 4961,
        title: "Post-Master Accountancy (RA Traject) Enrolment",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-year part-time postgraduate curriculum satisfying all CEA statutory requirements to qualify as a Dutch Registeraccountant.",
        funding: "Eligible for Dutch DUO Levenlanglerenkrediet (up to €11,000/year loan)",
        fee: "€0",
        tuition: "€8,500 per academic year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.mvp.nl/opleidingen/post-master-accountancy-ra.html",
        requirements: {
          gpa: "University Master of Science in Accountancy or pre-master deficiency program",
          ielts: "Dutch C1",
          gre: "Not required",
          papers: "University transcript verification and employer registration",
          references: "Audit firm mentor"
        }
      },
      {
        id: 4962,
        title: "HBO Bachelor Accountancy (Deeltijd / Duaal) Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "NVAO-accredited four-year bachelor's degree designed for assistants in accounting practices balancing study with employment.",
        funding: "Dutch government STAP and Levenlanglerenkrediet eligible",
        fee: "€0",
        tuition: "€4,950 per academic year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.mvp.nl/opleidingen/hbo-bachelor-accountancy.html",
        requirements: {
          gpa: "HAVO, VWO, or MBO Level 4 diploma with mathematics and economics background",
          ielts: "Dutch language proficiency",
          gre: "Not required",
          papers: "Diplomas and employment contract verification",
          references: "Not required"
        }
      },
      {
        id: 4963,
        title: "Post-Bachelor Belastingadviseur & Tax Law Specialization",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "One-year intensive specialization in Dutch corporate tax law, transfer pricing, and EU tax anti-avoidance directives.",
        funding: "Tax deductible educational expense under Dutch corporate tax law",
        fee: "€0",
        tuition: "€4,250 total program tuition",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.mvp.nl/opleidingen/post-bachelor-belastingadviseur.html",
        requirements: {
          gpa: "HBO Bachelor in Business Economics, Accountancy, or Law",
          ielts: "Dutch C1",
          gre: "Not required",
          papers: "Undergraduate degree transcripts",
          references: "One referee"
        }
      },
      {
        id: 4964,
        title: "NBA Integrated Practical Examination Preparation Practicum",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Six-month simulated audit defense and practical case coaching preparing candidates for the final oral exam of the NBA register.",
        funding: "€1,500 employer-sponsored coaching subsidy",
        fee: "€0",
        tuition: "€2,200 coaching fee",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.mvp.nl/praktijkopleiding/",
        requirements: {
          gpa: "Completed theoretical Post-Master RA or AA exams and minimum 3 years verified practical portfolio",
          ielts: "Dutch fluency",
          gre: "Not required",
          papers: "NBA electronic portfolio submission",
          references: "Registered Practical Mentor (Praktijkopleider) approval"
        }
      },
      {
        id: 4965,
        title: "ESG & Sustainability Auditing Micro-Credential for Accountants",
        type: "Bachelor's",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Specialized postgraduate certificate preparing auditors for the EU Corporate Sustainability Reporting Directive (CSRD) and assurance.",
        funding: "Subsidized through Dutch climate education subsidies",
        fee: "€0",
        tuition: "€1,850 course fee",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.mvp.nl/cursussen/duurzaamheidsverslaggeving-csrd.html",
        requirements: {
          gpa: "Qualified accountant (RA/AA) or financial controller",
          ielts: "Dutch and English comprehension",
          gre: "Not required",
          papers: "Professional credential verification",
          references: "Not required"
        }
      },
      {
        id: 4966,
        title: "Forensic Accounting & Fraud Auditing Masterclass",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Postgraduate masterclass analyzing cyber forensic auditing, money laundering indicators, and courtroom expert witness presentation.",
        funding: "Corporate crime prevention educational subsidy",
        fee: "€0",
        tuition: "€2,450 total tuition",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.mvp.nl/cursussen/forensic-accounting.html",
        requirements: {
          gpa: "Bachelor's in Finance, Accounting, Law, or Criminology",
          ielts: "Dutch C1",
          gre: "Not required",
          papers: "Resume and clean judicial record statement",
          references: "Employer recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2145,
        name: "Drs. Robert van Zanten",
        title: "Director of Accountancy Programs & Registered Accountant (RA)",
        department: "Opleidingsdirectie Accountancy",
        email: "r.vanzanten@mvp.nl",
        phone: "+31 35 760 4800",
        interests: ["Auditing Standards", "CEA Curriculum Compliance", "Professional Ethics in Accounting", "Quality Assurance in Auditing"],
        website: "https://www.mvp.nl/over-mvp/docenten/robert-van-zanten.html",
        subject: "social-sciences",
        summary: "Drs. Robert van Zanten is a Registered Accountant (RA) directing CEA-accredited accountancy programs at Markus Verbeek Praehep, consulting on Dutch auditing standards and professional ethics."
      },
      {
        id: 2146,
        name: "Mr. Dr. Jan Sanders",
        title: "Professor of Corporate Tax Law & Fiscal Counsel",
        department: "Vakgroep Fiscaal Recht",
        email: "j.sanders@mvp.nl",
        phone: "+31 35 760 4801",
        interests: ["Dutch Corporate Taxation (Vpb)", "European Tax Directives", "Transfer Pricing", "Fiscal Fraud Prevention"],
        website: "https://www.mvp.nl/over-mvp/docenten/jan-sanders.html",
        subject: "social-sciences",
        summary: "Mr. Dr. Jan Sanders is an acclaimed Dutch tax lawyer lecturing on corporate tax compliance, anti-tax avoidance directives (ATAD), and international treaty interpretation."
      },
      {
        id: 2147,
        name: "Mariska de Jong RA",
        title: "Senior Lecturer in Sustainability Assurance & CSRD Reporting",
        department: "Vakgroep Financial Control & ESG",
        email: "m.dejong@mvp.nl",
        phone: "+31 35 760 4802",
        interests: ["CSRD Sustainability Reporting", "Non-Financial Audit Assurance", "Integrated Corporate Governance", "ESG Metrics"],
        website: "https://www.mvp.nl/over-mvp/docenten/mariska-de-jong.html",
        subject: "environment",
        summary: "Mariska de Jong RA leads curriculum modules in sustainability auditing, training Dutch accountants in non-financial reporting verification and ESG audit trails."
      }
    ]
  },

  // 28. Netherlands: Shenzhou Open University of TCM
  {
    institution: "Shenzhou Open University of TCM",
    slug: "shenzhou-open-university-of-tcm",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1486,
    location: "Amsterdam, North Holland, Netherlands",
    website: "https://www.shenzhou-university.com",
    shortName: "Shenzhou University",
    badge: "Traditional Chinese Medicine & Acupuncture",
    overview: "Shenzhou Open University of TCM, established in 1991 in Amsterdam, is Europe's premier educational institution for Traditional Chinese Medicine (TCM). Delivering comprehensive, English-taught and Dutch-taught diplomas in Acupuncture, Chinese Herbal Medicine, Tuina massage, and Western Basic Medicine, Shenzhou is fully accredited by Dutch professional healthcare associations (Zhong, NVA, NWP) and affiliated with premier TCM universities in Beijing and Guangzhou.",
    lead: "Study accredited European Traditional Chinese Medicine, clinical acupuncture, and herbal pharmacology at Shenzhou University in Amsterdam.",
    description: "Shenzhou Open University of TCM acupuncture diplomas, Chinese herbal medicine, Western basic medicine credits, and clinical internship fellowships.",
    quickFacts: {
      type: "Specialized Higher Health Institute of Traditional Chinese Medicine",
      campus: "Geldersekade Campus, Central Amsterdam, North Holland",
      accreditation: "Accredited by Zhong (Dutch Association of TCM) / NVA / SNRO (Stichting Nederlands Register Opleidingen)",
      admissions: "Direct online application with secondary or higher education diploma",
      language: "English (main European international tracks) and Dutch (selected weekend cohorts)",
      aid: "Dutch Health Insurance Complementary Reimbursement Accreditation & Shenzhou Installment Plans"
    },
    strengths: [
      "Over 30 years as the foremost European academic centre for authentic Traditional Chinese Medicine",
      "Full professional recognition by Dutch health insurance companies (Zilveren Kruis, VGZ, CZ) for graduate treatments",
      "Academic cooperation with Beijing University of Chinese Medicine (BUCM)",
      "Dedicated on-campus clinical training clinic with real patient consultations under master practitioners"
    ],
    programs: [
      { title: "Diploma in Acupuncture (Three-Year Professional Program)", level: "Professional Higher Diploma", desc: "Three-year curriculum covering meridian theory, point location, pulse and tongue diagnosis, moxibustion, cupping, and clinical internships." },
      { title: "Diploma in Chinese Herbal Medicine", level: "Postgraduate Diploma", desc: "Two-year specialized course exploring over 300 herbal substances, classical formulas, herbal safety, and pharmacology." },
      { title: "Western Basic Medicine (WBM - Westerse Medische Basiskennis)", level: "Accredited Foundation Diploma", desc: "CPION/Plato-accredited foundation in anatomy, physiology, and pathology required for health insurance recognition in the Netherlands." }
    ],
    opportunities: [
      {
        id: 4967,
        title: "Shenzhou Acupuncture Professional Diploma Enrolment",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Three-year comprehensive professional training qualifying practitioners for certified clinical acupuncture practice across the EU.",
        funding: "Flexible multi-semester payment plan (interest-free installment options)",
        fee: "€50 registration fee",
        tuition: "€3,450 per academic year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027 (September start)",
        source: "https://www.shenzhou-university.com/acupuncture/",
        requirements: {
          gpa: "Completed secondary education (HAVO/VWO equivalent) or bachelor's degree in any discipline",
          ielts: "English B2/C1 for international cohorts",
          gre: "Not required",
          papers: "Application dossier and statement of motivation",
          references: "One referee"
        }
      },
      {
        id: 4968,
        title: "Diploma in Chinese Herbal Medicine & Pharmacology Admission",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Two-year postgraduate diploma analyzing classical herbal formulas, synergistic contraindications, and evidence-based phytotherapy.",
        funding: "Early-registration discount of €250",
        fee: "€50",
        tuition: "€3,600 per academic year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.shenzhou-university.com/herbal-medicine/",
        requirements: {
          gpa: "Completed Acupuncture Diploma or equivalent TCM foundations (minimum 120 ECTS equivalent)",
          ielts: "English B2",
          gre: "Not required",
          papers: "TCM foundation transcripts and clinical license copy",
          references: "Senior TCM practitioner letter"
        }
      },
      {
        id: 4969,
        title: "Western Basic Medicine (CPION / Plato Accredited) Admission",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology"],
        desc: "One-year intensive medical foundation in cardiovascular, nervous, and endocrine pathology meeting statutory Dutch complementary medicine laws.",
        funding: "Tax deductible professional development in the Netherlands",
        fee: "€50",
        tuition: "€2,250 total program tuition",
        deadline: "2027-09-15",
        deadlineText: "September 15, 2027",
        source: "https://www.shenzhou-university.com/western-basic-medicine/",
        requirements: {
          gpa: "Secondary school graduation or higher",
          ielts: "English or Dutch comprehension",
          gre: "Not required",
          papers: "Registration form and identification document",
          references: "Not required"
        }
      },
      {
        id: 4970,
        title: "Amsterdam Clinical Internship Practicum under Master Practitioners",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Mandatory 300-hour clinical residency at the Shenzhou Outpatient TCM Clinic treating chronic pain, dermatological, and stress disorders.",
        funding: "Hands-on supervision included in tuition without extra clinical surcharge",
        fee: "€0",
        tuition: "Included in Acupuncture Diploma",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.shenzhou-university.com/internship/",
        requirements: {
          gpa: "Successful completion of Year 1 & 2 acupuncture theoretical examinations",
          ielts: "English or Dutch",
          gre: "Not required",
          papers: "Clinical logbook and patient hygiene certification",
          references: "Clinic supervisor sign-off"
        }
      },
      {
        id: 4971,
        title: "Beijing University of Chinese Medicine Summer Hospital Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Two-week intensive hospital clinical observation fellowship hosted at BUCM affiliated teaching hospitals in Beijing, China.",
        funding: "Subsidized clinical translation and hospital rotation access (€1,200 bursary)",
        fee: "€0",
        tuition: "Travel costs separate",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://www.shenzhou-university.com/china-internship/",
        requirements: {
          gpa: "Senior student or graduate of Shenzhou TCM programs",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Valid passport and clinical intention statement",
          references: "Shenzhou Academic Board nomination"
        }
      },
      {
        id: 4972,
        title: "Diploma in Tuina Chinese Medical Massage Enrolment",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology"],
        desc: "Two-year specialized manual therapy curriculum focusing on musculoskeletal rehabilitation, acupressure manipulation, and pediatric Tuina.",
        funding: "Modular payment schedule available",
        fee: "€50",
        tuition: "€2,950 per academic year",
        deadline: "2027-08-31",
        deadlineText: "August 31, 2027",
        source: "https://www.shenzhou-university.com/tuina/",
        requirements: {
          gpa: "Secondary education completion with manual dexterity",
          ielts: "English B2",
          gre: "Not required",
          papers: "Motivational letter",
          references: "One referee"
        }
      },
      {
        id: 4973,
        title: "Shenzhou Student Practitioner Research Award",
        type: "Grant",
        subject: "biology",
        subjects: ["biology"],
        desc: "Annual research award honoring outstanding graduate case studies demonstrating successful integrative TCM treatment outcomes.",
        funding: "€1,000 cash honorarium and publication in the European Journal of Oriental Medicine",
        fee: "€0",
        tuition: "Direct cash prize",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.shenzhou-university.com/research-awards/",
        requirements: {
          gpa: "Graduating student in Acupuncture or Herbal Medicine",
          ielts: "English writing proficiency",
          gre: "Not required",
          papers: "Complete 3,000-word clinical case report with pulse/tongue diagnostic records and treatment analysis",
          references: "Clinical supervisor nomination"
        }
      }
    ],
    researchers: [
      {
        id: 2148,
        name: "Dr. Dong Zhi-Lin",
        title: "Founder, Chancellor & Senior TCM Professor",
        department: "University Directorate & Department of Herbal Medicine",
        email: "chancellor@shenzhou-university.com",
        phone: "+31 20 626 5050",
        interests: ["Chinese Herbal Pharmacology", "Integrative Oncology", "TCM Standardization in Europe", "Acupuncture Clinical Trials"],
        website: "https://www.shenzhou-university.com/faculty/dr-dong-zhilin/",
        subject: "biology",
        summary: "Dr. Dong Zhi-Lin is the founder of Shenzhou Open University of TCM and an international authority on Chinese herbal medicine, serving on global advisory boards of the World Federation of Chinese Medicine Societies (WFCMS)."
      },
      {
        id: 2149,
        name: "Dr. Zhang Hui",
        title: "Head of Acupuncture Department & Chief Clinical Supervisor",
        department: "Department of Acupuncture",
        email: "h.zhang@shenzhou-university.com",
        phone: "+31 20 626 5051",
        interests: ["Pain Management Acupuncture", "Neurological Rehabilitation", "Scalp Acupuncture", "Pulse Diagnosis"],
        website: "https://www.shenzhou-university.com/faculty/dr-zhang-hui/",
        subject: "biology",
        summary: "Dr. Zhang Hui oversees acupuncture clinical education and student outpatient clinic operations, specializing in scalp acupuncture for post-stroke recovery and chronic pain."
      },
      {
        id: 2150,
        name: "Dr. Robbert van Haselen",
        title: "Director of Research & Integrative Medicine Specialist",
        department: "Department of Western Basic Medicine & Research",
        email: "r.vanhaselen@shenzhou-university.com",
        phone: "+31 20 626 5052",
        interests: ["Integrative Medicine Research", "Methodology in Complementary Healthcare", "Evidence-Based Phytotherapy", "Clinical Trial Methodology"],
        website: "https://www.shenzhou-university.com/faculty/dr-robbert-van-haselen/",
        subject: "biology",
        summary: "Dr. Robbert van Haselen is a research methodologist and international medical editor publishing systematic reviews on complementary and integrative clinical healthcare."
      }
    ]
  },

  // 29. Netherlands: The Hague Pathway College (THPC)
  {
    institution: "The Hague Pathway College (THPC)",
    slug: "the-hague-pathway-college-thpc",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1505,
    location: "The Hague, South Holland, Netherlands",
    website: "https://www.thehaguepathway.nl",
    shortName: "THPC The Hague",
    badge: "International City of Peace & THUAS Foundation",
    overview: "The Hague Pathway College (THPC), situated directly on the campus of The Hague University of Applied Sciences (THUAS) in the international city of peace and justice, provides accredited International Foundation Year programmes in Management, Social Sciences, Technology, and Design in partnership with Navitas, offering guaranteed direct progression into English-taught Bachelor's degrees at THUAS.",
    lead: "Secure guaranteed progression into top-tier Dutch bachelor's degrees in international law, business, and engineering at THPC in The Hague.",
    description: "The Hague Pathway College international foundation year, THUAS degree pathways, Dutch student visa sponsorship, and Navitas academic scholarships.",
    quickFacts: {
      type: "International Higher Education Pathway College (in partnership with THUAS & Navitas)",
      campus: "The Hague University of Applied Sciences Main Campus, Johanna Westerdijkplein, The Hague",
      accreditation: "Dutch Ministry of Education, Culture and Science Recognized Pathways / Navitas Global",
      admissions: "Direct online application via Navitas International Portal (intakes in Sept & Jan)",
      language: "English (IELTS Academic for UKVI/International 5.0 to 5.5 depending on pathway)",
      aid: "THPC Navitas Academic Merit Scholarships & THUAS Holland Scholarship Eligibility"
    },
    strengths: [
      "Direct integration into the state-of-the-art campus of The Hague University of Applied Sciences (THUAS)",
      "Guaranteed progression into world-renowned degrees: International Law, European Studies, Industrial Design",
      "Located in The Hague, the international legal capital hosting the International Court of Justice and OPCW",
      "Comprehensive visa, housing, and Dutch residence permit (IND) assistance for international students"
    ],
    programs: [
      { title: "International Foundation Year in Management and Social Sciences", level: "University Foundation", desc: "Three-term pathway preparing students for entry into Bachelor's programs in International Business, European Studies, and International Communication." },
      { title: "International Foundation Year in Technology and Design", level: "University Foundation", desc: "Intensive academic foundation in mathematics, physics, and computing leading to Bachelor's in Industrial Design Engineering or User Experience Design." },
      { title: "Fast-Track Foundation (Two-Term Accelerated Pathway)", level: "Accelerated Foundation", desc: "Intensive six-month academic bridging program for high-achieving scholars with higher English proficiency seeking September degree entry." }
    ],
    opportunities: [
      {
        id: 4974,
        title: "THPC Navitas International Academic Merit Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Merit-based tuition scholarship awarded to top international applicants displaying exceptional secondary school grades.",
        funding: "€2,500 direct reduction credited toward pathway tuition fees",
        fee: "€0 application fee",
        tuition: "€14,500 for the standard three-term International Foundation Year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027 (September intake)",
        source: "https://www.thehaguepathway.nl/fees-and-scholarships",
        requirements: {
          gpa: "Completed secondary education equivalent to Dutch HAVO/VWO with strong academic marks",
          ielts: "IELTS 5.5 overall (minimum 5.5 in writing)",
          gre: "Not required",
          papers: "High school transcripts and 500-word personal statement explaining why The Hague was chosen",
          references: "One teacher or counselor reference letter"
        }
      },
      {
        id: 4975,
        title: "International Foundation Year in Management & Social Sciences Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-term foundation securing guaranteed progression into Year 1 of THUAS International Business (BBA) or International & European Law (LL.B.).",
        funding: "Eligible for continuing THUAS NL Scholarship (€5,000 in Year 1)",
        fee: "€0",
        tuition: "€14,500 total tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.thehaguepathway.nl/programmes/management-and-social-sciences",
        requirements: {
          gpa: "12 years of formal education with passing grades in social studies and math",
          ielts: "IELTS 5.0 (three-term track) or IELTS 5.5 (two-term fast-track)",
          gre: "Not required",
          papers: "Secondary diploma and transcripts with certified English translation",
          references: "High school teacher reference"
        }
      },
      {
        id: 4976,
        title: "International Foundation Year in Technology and Design Admission",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "arts-design"],
        desc: "Academic pathway guaranteeing progression into THUAS Bachelor of Science in Industrial Design Engineering or User Experience Design.",
        funding: "Design portfolio workshop access included",
        fee: "€0",
        tuition: "€14,500 total tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.thehaguepathway.nl/programmes/technology-and-design",
        requirements: {
          gpa: "Secondary graduation with satisfactory grades in mathematics and physics",
          ielts: "IELTS 5.0 to 5.5",
          gre: "Not required",
          papers: "Transcripts and design or technical interest statement",
          references: "Academic reference"
        }
      },
      {
        id: 4977,
        title: "The Hague International Legal Capital Internship Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Guided NGO and international diplomacy observation practicum visiting international tribunals, the Peace Palace, and Dutch ministries in The Hague.",
        funding: "Fully sponsored study visits and diplomacy symposium passes",
        fee: "€0",
        tuition: "Included in Social Sciences pathway curriculum",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.thehaguepathway.nl/student-life",
        requirements: {
          gpa: "Enrolled in THPC Management & Social Sciences pathway with 90%+ attendance",
          ielts: "English 5.5",
          gre: "Not required",
          papers: "Essay on international peace and justice institutions",
          references: "Course tutor approval"
        }
      },
      {
        id: 4978,
        title: "Fast-Track Two-Term Foundation Programme Enrolment",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Accelerated six-month curriculum commencing in January and finishing in July, preparing students for direct September entry into THUAS.",
        funding: "Reduced tuition fee of €11,800",
        fee: "€0",
        tuition: "€11,800 for full fast-track",
        deadline: "2026-11-15",
        deadlineText: "November 15, 2026 (January 2027 start)",
        source: "https://www.thehaguepathway.nl/programmes/fast-track",
        requirements: {
          gpa: "High school completion with above-average grades",
          ielts: "IELTS 5.5 overall (minimum 5.5 in writing)",
          gre: "Not required",
          papers: "Official transcripts and personal statement",
          references: "One referee"
        }
      },
      {
        id: 4979,
        title: "THPC Student Ambassador Leadership Award",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Financial stipend awarded to pathway students producing digital content, campus video tours, and assisting new international arrivals.",
        funding: "€1,000 cash grant awarded at end-of-year graduation ceremony",
        fee: "€0",
        tuition: "Direct cash award",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.thehaguepathway.nl/student-experience",
        requirements: {
          gpa: "Good academic standing in pathway modules",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Social media and student ambassador portfolio",
          references: "Student Services Manager recommendation"
        }
      },
      {
        id: 4980,
        title: "English for Academic Purposes (EAP) Intensive Preparation",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Single-term intensive academic English and study skills module for students needing to elevate their IELTS score before starting the foundation year.",
        funding: "Tuition credited toward subsequent foundation course upon passing",
        fee: "€0",
        tuition: "€4,800 course fee",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.thehaguepathway.nl/programmes/english-language-courses",
        requirements: {
          gpa: "High school graduation",
          ielts: "IELTS 4.5 overall",
          gre: "Not required",
          papers: "IELTS score certificate",
          references: "Not required"
        }
      }
    ],
    researchers: [
      {
        id: 2151,
        name: "Dr. Paul Nixon",
        title: "Director of Internationalization & Academic Advisor",
        department: "THPC Academic Directorate & THUAS",
        email: "p.nixon@thehaguepathway.nl",
        phone: "+31 70 445 8888",
        interests: ["International Higher Education Pedagogy", "European Political Science", "E-Governance", "Cross-Cultural Acculturation"],
        website: "https://www.thehaguepathway.nl/staff/dr-paul-nixon",
        subject: "social-sciences",
        summary: "Dr. Paul Nixon coordinates academic quality and university progression between The Hague Pathway College and The Hague University of Applied Sciences faculties."
      },
      {
        id: 2152,
        name: "Saskia van de Gevel",
        title: "Head of Student Services and Admissions",
        department: "Student Operations & Navitas Netherlands",
        email: "saskia.vandegevel@thehaguepathway.nl",
        phone: "+31 70 445 8889",
        interests: ["International Student Mobility", "IND Dutch Visa Compliance", "Student Wellbeing", "Academic Transition Services"],
        website: "https://www.thehaguepathway.nl/about-us/team",
        subject: "social-sciences",
        summary: "Saskia van de Gevel manages international admissions, IND residence permits, and housing services for global scholars arriving in The Hague."
      },
      {
        id: 2153,
        name: "Mark van Wees",
        title: "Senior Lecturer in Mathematics & Design Engineering",
        department: "Department of Technology and Design",
        email: "mark.vanwees@thehaguepathway.nl",
        phone: "+31 70 445 8890",
        interests: ["Engineering Mathematics", "Applied Mechanics", "CAD Design Methodologies", "STEM Foundation Pedagogy"],
        website: "https://www.thehaguepathway.nl/programmes/faculty-stem",
        subject: "engineering",
        summary: "Mark van Wees leads technology and design modules at THPC, training international students in mathematical physics, mechanics, and design prototyping."
      }
    ]
  },

  // 30. Netherlands: Twente Pathway College (TPC)
  {
    institution: "Twente Pathway College (TPC)",
    slug: "twente-pathway-college-tpc",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1514,
    location: "Enschede, Overijssel, Netherlands",
    website: "https://www.twentepathway.nl",
    shortName: "TPC Enschede",
    badge: "High Tech Human Touch & University of Twente",
    overview: "Twente Pathway College (TPC), located on the picturesque American-style campus of the University of Twente in Enschede, provides rigorous International Foundation Year programmes in Engineering & Technology and Behavioural & Social Sciences, in partnership with Navitas, delivering guaranteed direct progression into world-leading Bachelor of Science degrees at the University of Twente.",
    lead: "Gain guaranteed entry into University of Twente world-class engineering, nanotechnology, and computer science degrees through TPC.",
    description: "Twente Pathway College international foundation year, University of Twente STEM pathways, high-tech campus living, and Navitas academic awards.",
    quickFacts: {
      type: "International Research University Pathway College (University of Twente & Navitas)",
      campus: "University of Twente Campus, Drienerl, Enschede, Overijssel",
      accreditation: "Dutch Ministry of Education Recognized University Partner / Navitas",
      admissions: "Direct online application via Navitas Twente Portal (September start)",
      language: "English (IELTS Academic for UKVI/International 5.0 to 5.5 overall with minimum 5.0 in writing)",
      aid: "TPC Academic Merit Scholarships & University of Twente Scholarship (UTS) on progression"
    },
    strengths: [
      "Located directly on the University of Twente campus, the Netherlands' only true American-style residential campus",
      "Guaranteed progression into premier UT Bachelor of Science degrees: Mechanical Engineering, Computer Science, Electrical Engineering",
      "World-class high-tech ecosystem hosting the MESA+ Institute for Nanotechnology and DesignLab",
      "Full access to University of Twente student associations, sports complexes, and innovation incubators"
    ],
    programs: [
      { title: "International Foundation Year in Engineering and Technology", level: "University Foundation", desc: "Three-term rigorous preparation in advanced mathematics, physics, and programming guaranteeing entry into Year 1 of BSc Mechanical, Electrical, or Computer Science at UT." },
      { title: "International Foundation Year in Behavioural and Social Sciences", level: "University Foundation", desc: "Specialized academic pathway leading directly into Bachelor of Science degrees in Psychology, Communication Science, or Management, Society & Technology." },
      { title: "Foundation in International Business Administration (IBA)", level: "University Foundation", desc: "Interdisciplinary business preparation integrating technology entrepreneurship, digital innovation, and corporate finance at UT." }
    ],
    opportunities: [
      {
        id: 4981,
        title: "TPC Navitas High-Tech Excellence Scholarship",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Tuition award granted to prospective international engineering and computing scholars admitted to Twente Pathway College with outstanding high school mathematics scores.",
        funding: "€2,500 direct tuition reduction credited against the pathway programme fees",
        fee: "€0 application fee",
        tuition: "€15,200 for the three-term Engineering & Technology Foundation Year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.twentepathway.nl/fees-and-scholarships",
        requirements: {
          gpa: "Secondary school graduation with high grades in Mathematics and Physics (equivalent to Dutch VWO level)",
          ielts: "IELTS 5.5 overall (minimum 5.0 in writing)",
          gre: "Not required",
          papers: "High school transcripts and personal motivation letter focusing on technology innovation",
          references: "One academic letter of recommendation"
        }
      },
      {
        id: 4982,
        title: "International Foundation Year in Engineering & Technology Enrolment",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Three-term pathway guaranteeing progression into Year 1 of BSc Mechanical Engineering, Electrical Engineering, or Technical Computer Science at UT.",
        funding: "Eligible for University of Twente Scholarship (UTS - up to €22,000/year at degree level)",
        fee: "€0",
        tuition: "€15,200 total tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.twentepathway.nl/programmes/engineering-and-technology",
        requirements: {
          gpa: "Completed 12 years of schooling with strong STEM mathematics coursework",
          ielts: "IELTS 5.0 (with extra English modules) or IELTS 5.5",
          gre: "Not required",
          papers: "Transcripts of secondary grades and passport copy",
          references: "High school math or physics teacher recommendation"
        }
      },
      {
        id: 4983,
        title: "International Foundation Year in Behavioural & Social Sciences Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Pathway leading directly into the University of Twente Bachelor of Science in Psychology or Communication Science.",
        funding: "DesignLab student innovation project grant eligibility",
        fee: "€0",
        tuition: "€14,800 total tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.twentepathway.nl/programmes/behavioural-and-social-sciences",
        requirements: {
          gpa: "Secondary graduation diploma with passing grades in social sciences and mathematics",
          ielts: "IELTS 5.5 overall",
          gre: "Not required",
          papers: "Personal statement detailing interest in human-technology interaction",
          references: "One referee"
        }
      },
      {
        id: 4984,
        title: "MESA+ Nanotechnology High-Tech Campus Lab Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Guided research observation placement inside the world-class MESA+ Institute for Nanotechnology cleanrooms on the University of Twente campus.",
        funding: "Cleanroom training certification and prototype mentorship sponsored by UT",
        fee: "€0",
        tuition: "Included in engineering pathway tuition",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.twentepathway.nl/campus-life",
        requirements: {
          gpa: "Enrolled in TPC Engineering & Technology pathway with top marks in physics",
          ielts: "English 5.5",
          gre: "Not required",
          papers: "Lab safety agreement and nanotechnology interest essay",
          references: "TPC Science Director nomination"
        }
      },
      {
        id: 4985,
        title: "Foundation in International Business Administration (IBA) Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Three-term pathway preparing students for UT's tech-driven IBA Bachelor's, combining corporate strategy, digital marketing, and tech entrepreneurship.",
        funding: "Kennispark Twente startup incubator mentorship",
        fee: "€0",
        tuition: "€14,800 total tuition",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.twentepathway.nl/programmes/management-and-social-sciences",
        requirements: {
          gpa: "12 years of formal schooling with mathematics",
          ielts: "IELTS 5.5",
          gre: "Not required",
          papers: "Statement of purpose and secondary transcripts",
          references: "One teacher reference"
        }
      },
      {
        id: 4986,
        title: "University of Twente Progression Excellence Bursary",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Automatic progression scholarship awarded to TPC students who graduate from the foundation year with a GPA of 8.0/10 or higher.",
        funding: "€3,000 cash bursary applied toward Year 1 tuition at the University of Twente",
        fee: "€0",
        tuition: "Direct fee reduction upon university matriculation",
        deadline: "2027-08-15",
        deadlineText: "August 15, 2027",
        source: "https://www.twentepathway.nl/progression",
        requirements: {
          gpa: "Completed all TPC foundation modules with minimum 8.0 average",
          ielts: "Successful completion of pathway English satisfies UT degree requirements",
          gre: "Not required",
          papers: "Foundation transcript of grades",
          references: "TPC Academic Director endorsement"
        }
      },
      {
        id: 4987,
        title: "Kennispark Twente Student Tech Startup Fellowship",
        type: "Grant",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Seed innovation grant supported by Kennispark Twente and Incubase for pathway students building software or hardware hardware ventures.",
        funding: "€2,500 prototype grant plus incubator workspace access",
        fee: "€0",
        tuition: "Not applicable",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://kennispark.nl/",
        requirements: {
          gpa: "Good academic standing in a TPC pathway programme",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Startup pitch deck outlining technological feasibility and market problem",
          references: "Incubase mentor endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2154,
        name: "Dr. Anne Dijkstra",
        title: "Academic Director & Assistant Professor of Science Communication",
        department: "TPC Academic Directorate & University of Twente",
        email: "a.m.dijkstra@utwente.nl",
        phone: "+31 53 489 3340",
        interests: ["Science and Technology Communication", "Public Engagement with Nanotechnology", "STEM Pathway Pedagogy", "Responsible Research Innovation"],
        website: "https://people.utwente.nl/a.m.dijkstra",
        subject: "social-sciences",
        summary: "Dr. Anne Dijkstra coordinates academic progression frameworks between TPC and University of Twente faculties, conducting international research on public perceptions of emerging science."
      },
      {
        id: 2155,
        name: "Prof. Dr. Albert van den Berg",
        title: "Distinguished Professor of Nanotechnology & Lab-on-a-Chip Pioneer",
        department: "MESA+ Institute for Nanotechnology (UT)",
        email: "a.vandenberg@utwente.nl",
        phone: "+31 53 489 2750",
        interests: ["Lab-on-a-Chip Technology", "Microfluidics", "Nanotechnology in Medicine", "Organ-on-Chip Models"],
        website: "https://people.utwente.nl/a.vandenberg",
        subject: "engineering",
        summary: "Prof. Dr. Albert van den Berg, Spinoza Prize laureate and pioneer of Lab-on-a-Chip microfluidics, directs cutting-edge biomedical nanotechnology at the MESA+ Institute."
      },
      {
        id: 2156,
        name: "Gillian Jones",
        title: "College Director & Head of Student Services",
        department: "Twente Pathway College Operations",
        email: "gillian.jones@twentepathway.nl",
        phone: "+31 53 489 8000",
        interests: ["International Student Retention", "Residential Campus Integration", "Higher Education Operations", "Cross-Cultural Student Support"],
        website: "https://www.twentepathway.nl/about-us/leadership",
        subject: "social-sciences",
        summary: "Gillian Jones leads student life, housing integration, and welfare services at TPC, ensuring international students transition seamlessly into the University of Twente residential campus."
      }
    ]
  }
];
