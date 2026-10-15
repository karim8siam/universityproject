// Batch 44 - Part 3: Universities 21 to 30
// UK (2), Japan (4), Netherlands (4)
// Opps: 5338 to 5407 (70 opps)
// Researchers: 2307 to 2336 (30 researchers)

export const part3Universities = [
  // 21. UK: University of Cumbria in London
  {
    institution: "University of Cumbria in London",
    slug: "university-of-cumbria-in-london",
    countryId: "uk",
    countryLabel: "UK",
    sourceRow: 1312,
    location: "London, England, UK",
    website: "https://www.cumbria.ac.uk/student-life/locations/london/",
    shortName: "University of Cumbria in London",
    badge: "London Teacher Training & Health Professions Campus",
    overview: "The University of Cumbria in London, situated on East India Dock Road in the East End of London, is the capital campus of the University of Cumbria. Specializing in primary teacher education (PGCE and BA), adult nursing, business management, and occupational health, the London campus provides direct routes into inner-city London schools, NHS trusts, and public sector leadership.",
    lead: "Explore London teacher training degrees, nursing pathways, healthcare leadership masters, and London study bursaries at University of Cumbria in London.",
    description: "University of Cumbria in London campus degrees in education, PGCE teacher training, nursing, business management, and UK student loan funding.",
    quickFacts: {
      type: "Public University Campus",
      campus: "East India Dock Road Campus, Tower Hamlets, London",
      accreditation: "Privy Council / Quality Assurance Agency (QAA) / DfE & NMC",
      admissions: "UCAS application, verified GCSE English/Maths/Science, and interview",
      language: "English (IELTS 6.5 - 7.0 for professional teaching and nursing routes)",
      aid: "Department for Education (DfE) Teacher Bursaries & NHS Learning Support Fund"
    },
    strengths: [
      "Over 98% employment rate for London primary teacher education graduates",
      "Specialized clinical training partnerships with Barts Health NHS Trust and Royal London Hospital",
      "Small seminar learning environment in dynamic East London with direct Docklands transport links",
      "Extensive mentoring for career changers and non-traditional mature students"
    ],
    programs: [
      { title: "PGCE Primary Education with QTS", level: "Postgraduate Certificate", desc: "One-year intensive school-centered teacher training qualification with Qualified Teacher Status (QTS) in London primary schools." },
      { title: "BSc (Hons) in Adult Nursing", level: "Bachelor's Degree", desc: "Three-year NMC-approved degree combining simulation labs with clinical placements in East London hospitals and community care clinics." },
      { title: "BA (Hons) in Global Business Management", level: "Bachelor's Degree", desc: "Three-year urban business degree focusing on sustainable corporate finance, digital marketing, enterprise logistics, and human resource leadership." }
    ],
    opportunities: [
      {
        id: 5338,
        title: "London Primary Teacher Training Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Department for Education tax-free bursary awarded to eligible candidates training to teach in high-priority subjects in London schools.",
        funding: "Up to £28,000 tax-free training bursary depending on degree class and subject",
        fee: "£0 application fee (apply via DfE Apply)",
        tuition: "£9,250 tuition fee loan eligible through Student Finance England",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.cumbria.ac.uk/study/courses/postgraduate/pgce-primary-london/",
        requirements: {
          gpa: "UK bachelor's degree (2:2 or higher) or recognized international equivalent",
          ielts: "IELTS 7.0 overall (minimum 6.5 in all components)",
          gre: "Not required",
          papers: "Personal statement detailing commitment to London primary school teaching",
          references: "Two references (academic and professional)"
        }
      },
      {
        id: 5339,
        title: "PGCE Primary Education with QTS Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "One-year postgraduate teacher training with 24 weeks of assessed teaching practice in diverse partner schools across East London.",
        funding: "Student Finance England tuition and maintenance loans",
        fee: "£0 application fee",
        tuition: "£9,250 for UK students",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.cumbria.ac.uk/study/courses/postgraduate/pgce-primary-london/",
        requirements: {
          gpa: "Undergraduate honours degree; GCSEs grade C/4 in English, Maths, and Science",
          ielts: "IELTS 7.0",
          gre: "Not required",
          papers: "Enhanced DBS check and fitness to teach health clearance",
          references: "Successful completion of interview assessment"
        }
      },
      {
        id: 5340,
        title: "Barts Health NHS Trust Clinical Nursing Placement",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Supervised acute hospital and community nursing clinical practice rotations across major East London hospital wards and trauma centers.",
        funding: "£5,000 annual non-repayable NHS Learning Support Fund training grant",
        fee: "£0 application fee",
        tuition: "Curricular requirement of BSc Adult Nursing",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.cumbria.ac.uk/study/courses/undergraduate/nursing-adult-london/",
        requirements: {
          gpa: "Enrolled in BSc Adult Nursing at London campus",
          ielts: "IELTS 7.0 (or OET Grade B)",
          gre: "Not required",
          papers: "Occupational health clearance and DBS check",
          references: "Clinical link tutor authorization"
        }
      },
      {
        id: 5341,
        title: "BSc (Hons) in Adult Nursing Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        desc: "Three-year professional degree accredited by the Nursing and Midwifery Council (NMC) qualifying registered nurses for NHS careers.",
        funding: "Eligible for £5,000/year NHS training grant plus £2,000 regional childcare allowance",
        fee: "£0 direct application fee (via UCAS)",
        tuition: "£9,250 per year for UK residents",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.cumbria.ac.uk/study/courses/undergraduate/nursing-adult-london/",
        requirements: {
          gpa: "104-112 UCAS points from A-levels or BTEC Extended Diploma in Health and Social Care",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Personal statement demonstrating compassion, resilience, and nursing commitment",
          references: "Two academic or employer references"
        }
      },
      {
        id: 5342,
        title: "University of Cumbria London Opportunity Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Targeted maintenance bursary assisting low-income undergraduate students studying at the London campus with commuting and living costs.",
        funding: "£1,000 annual grant",
        fee: "£0 application fee",
        tuition: "Paid directly to the student for living expenses",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.cumbria.ac.uk/study/student-finance/scholarships-and-bursaries/",
        requirements: {
          gpa: "Enrolled student with verified household income below £25,000",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Student Finance England income assessment letter",
          references: "Not required"
        }
      },
      {
        id: 5343,
        title: "BA (Hons) in Global Business Management Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year undergraduate program in corporate strategy, digital international marketing, managerial accounting, and organizational agility.",
        funding: "UK student tuition fee loans cover full cost",
        fee: "£0 application fee",
        tuition: "£9,250 per year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://www.cumbria.ac.uk/study/courses/undergraduate/global-business-management-london/",
        requirements: {
          gpa: "96-104 UCAS points from A-levels or equivalent Level 3 credentials",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement and transcripts",
          references: "One referee"
        }
      },
      {
        id: 5344,
        title: "East London School Leadership Research Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Small-scale practitioner research grant supporting PGCE trainees and masters students conducting pedagogical action research in inner-city schools.",
        funding: "£1,500 project grant and educational resource support",
        fee: "£0 application fee",
        tuition: "Non-repayable action research funding",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.cumbria.ac.uk/research/",
        requirements: {
          gpa: "Enrolled in postgraduate education program in good standing",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Research proposal outlining inclusive literacy or numeracy intervention",
          references: "School mentor and university tutor endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2307,
        name: "Prof. Julie Mennell",
        title: "Vice Chancellor and Professor of Applied Physics",
        department: "Office of the Vice Chancellor",
        subject: "physics",
        interests: ["Higher Education Policy", "Place-Based Regeneration", "Forensic Physics"],
        summary: "Prof. Julie Mennell leads the University of Cumbria, championing medical school creation, capital campus investments, and national public sector partnerships.",
        source: "https://www.cumbria.ac.uk/about/organisation/executive-team/",
        recruiting: "Not verified"
      },
      {
        id: 2308,
        name: "Dr. Karen Morris",
        title: "Director of Institute of Health",
        department: "Institute of Health (London Campus)",
        subject: "biology",
        interests: ["Interprofessional Healthcare Education", "Occupational Therapy", "Clinical Competence Assessment"],
        summary: "Dr. Karen Morris directs health professional curricula across Cumbria and London campuses, investigating simulation pedagogies and clinical reasoning.",
        source: "https://www.cumbria.ac.uk/staff/karen-morris",
        recruiting: "Not verified"
      },
      {
        id: 2309,
        name: "Dr. Pete Boyd",
        title: "Professor of Professional Learning",
        department: "Institute of Education",
        subject: "social-sciences",
        interests: ["Teacher Professional Identity", "Classroom Assessment for Learning", "Urban School Pedagogy"],
        summary: "Dr. Pete Boyd researches teacher educator identities, critical pedagogical practices, and collaborative action research in urban multicultural schools.",
        source: "https://www.cumbria.ac.uk/staff/pete-boyd",
        recruiting: "Not verified"
      }
    ]
  },

  // 22. UK: University of Sunderland in London (UoSiL)
  {
    institution: "University of Sunderland in London (UoSiL)",
    slug: "university-of-sunderland-in-london-uosil",
    countryId: "uk",
    countryLabel: "UK",
    sourceRow: 1324,
    location: "Canary Wharf, London, UK",
    website: "https://london.sunderland.ac.uk",
    shortName: "UoSiL Canary Wharf",
    badge: "Financial District Career-Focused University Campus",
    overview: "The University of Sunderland in London (UoSiL), established in 2012 in the heart of London's Canary Wharf financial district (Harbour Exchange), offers career-focused degrees in business, finance, tourism, digital technologies, and healthcare. Designed for international and domestic professionals, UoSiL provides flexible four-intake academic schedules (October, January, April, June).",
    lead: "Explore Canary Wharf MBA degrees, digital technology masters, adult nursing bachelors, and international merit bursaries at University of Sunderland in London.",
    description: "University of Sunderland in London degrees in business, MBA, digital technologies, nursing, finance, and career acceleration scholarships.",
    quickFacts: {
      type: "Public University Branch Campus",
      campus: "Canary Wharf Campus, Harbour Exchange Square, Isle of Dogs, London",
      accreditation: "Privy Council / Quality Assurance Agency (QAA) / CMI & ACCA",
      admissions: "Flexible rolling entry with four intakes per year (October, January, April, June)",
      language: "English (IELTS 6.0 for undergraduate; 6.5 for postgraduate degrees)",
      aid: "UoSiL London International Scholarships & Student Finance England Loans"
    },
    strengths: [
      "Direct location in the Canary Wharf international banking and tech business district",
      "Flexible four-intake annual entry calendar enabling rapid career transitions",
      "Professional accreditations including Chartered Management Institute (CMI) and ACCA",
      "Comprehensive digital mock trading floors, modern healthcare simulation labs, and tech hubs"
    ],
    programs: [
      { title: "Master of Business Administration (MBA)", level: "Master's Degree", desc: "One-year intensive business master's with specializations in Finance, Marketing, Supply Chain, and Cyber Security." },
      { title: "BSc (Hons) in Adult Nursing (Blended)", level: "Bachelor's Degree", desc: "NMC-approved healthcare program designed for flexible study blending interactive digital modules with London hospital clinical rotations." },
      { title: "MSc in Computer Systems Engineering", level: "Master's Degree", desc: "Postgraduate degree focusing on cloud computing architectures, IoT networks, distributed database management, and cyber defense." }
    ],
    opportunities: [
      {
        id: 5345,
        title: "UoSiL Canary Wharf International Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Tuition fee scholarship awarded to self-funded international students enrolling in undergraduate or postgraduate taught programs at the London campus.",
        funding: "£1,500 - £2,000 direct tuition fee reduction",
        fee: "£0 application fee",
        tuition: "£14,500 - £16,500 annual international tuition",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://london.sunderland.ac.uk/fees-and-finance/scholarships/",
        requirements: {
          gpa: "Academic score of 60%+ in previous bachelor or high school studies",
          ielts: "IELTS 6.0 for UG / 6.5 for PG",
          gre: "Not required",
          papers: "Personal statement detailing career alignment with London financial hub",
          references: "One academic or employment recommendation"
        }
      },
      {
        id: 5346,
        title: "Master of Business Administration (MBA) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "One-year executive-track MBA accredited by the CMI, covering strategic corporate management, global financial markets, and digital leadership.",
        funding: "UK postgraduate master's loan eligible (up to £12,471)",
        fee: "£0 application fee",
        tuition: "£10,000 for UK students / £16,500 for international students",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://london.sunderland.ac.uk/courses/business/mba-masters-in-business-administration/",
        requirements: {
          gpa: "Undergraduate degree (minimum 2:2) plus relevant managerial work experience",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Curriculum vitae and 500-word career aspiration essay",
          references: "Two letters of reference"
        }
      },
      {
        id: 5347,
        title: "Canary Wharf Financial & FinTech Corporate Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "12-week professional internship with financial institutions, consulting firms, or FinTech startups based in Canary Wharf and the City of London.",
        funding: "£13.15/hour London Living Wage compensation",
        fee: "£0 application fee",
        tuition: "Curricular placement module",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://london.sunderland.ac.uk/careers-and-employability/",
        requirements: {
          gpa: "Enrolled in postgraduate business or computing program with 60%+ average",
          ielts: "Fluent English communication",
          gre: "Not required",
          papers: "Professional UK-format CV and cover letter",
          references: "UoSiL careers advisor approval"
        }
      },
      {
        id: 5348,
        title: "MSc in Computer Systems Engineering Enrolment",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "One-year full-time postgraduate curriculum exploring enterprise cloud engineering, distributed microservices, network security, and IoT telemetry.",
        funding: "STEM graduate loan eligibility and departmental fee discounts",
        fee: "£0 application fee",
        tuition: "£9,500 (UK) / £15,500 (international)",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://london.sunderland.ac.uk/courses/technology/msc-computer-systems-engineering/",
        requirements: {
          gpa: "Bachelor's degree in computing, engineering, or physical sciences (2:2 honours)",
          ielts: "IELTS 6.0 overall with no band below 5.5",
          gre: "Not required",
          papers: "Academic transcripts and technical portfolio",
          references: "One academic reference"
        }
      },
      {
        id: 5349,
        title: "BSc (Hons) in Adult Nursing (Blended) Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        desc: "Three-year NMC-accredited degree blending interactive online learning with immersive clinical hospital placements across London NHS trusts.",
        funding: "£5,000 annual non-repayable NHS Learning Support Fund",
        fee: "£0 application fee",
        tuition: "£9,250 per year for UK students",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://london.sunderland.ac.uk/courses/nursing/bsc-adult-nursing-blended/",
        requirements: {
          gpa: "112 UCAS tariff points from A-levels or BTEC Health Diploma",
          ielts: "IELTS 7.0 (or GCSE English and Maths grade C/4)",
          gre: "Not required",
          papers: "Personal statement and DBS certificate",
          references: "Two references"
        }
      },
      {
        id: 5350,
        title: "UoSiL Alumni Loyalty Fee Discount",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Tuition reduction for University of Sunderland alumni progressing to postgraduate master's study at the London campus.",
        funding: "20% discount on total postgraduate tuition fees",
        fee: "£0 application fee",
        tuition: "Applied directly against master's fees",
        deadline: "2027-07-31",
        deadlineText: "July 31, 2027",
        source: "https://london.sunderland.ac.uk/fees-and-finance/scholarships/",
        requirements: {
          gpa: "Successful completion of undergraduate bachelor's degree at University of Sunderland",
          ielts: "Not required for Sunderland graduates",
          gre: "Not required",
          papers: "Graduation certificate confirmation",
          references: "Not required"
        }
      },
      {
        id: 5351,
        title: "BSc (Hons) in International Tourism and Hospitality Management Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year undergraduate program training leaders in luxury hotel management, airline operations, global events, and hospitality analytics.",
        funding: "Student Finance England tuition and maintenance support",
        fee: "£0 application fee",
        tuition: "£9,250 per year for UK residents",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://london.sunderland.ac.uk/courses/tourism/bsc-international-tourism-and-hospitality-management/",
        requirements: {
          gpa: "96 UCAS tariff points from acceptable Level 3 qualifications",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Statement of interest and school transcripts",
          references: "One referee"
        }
      }
    ],
    researchers: [
      {
        id: 2310,
        name: "Sir David Bell, KCB",
        title: "Vice Chancellor and Chief Executive",
        department: "Executive Directorate",
        subject: "social-sciences",
        interests: ["Higher Education Leadership", "Public Sector Governance", "Educational Reform"],
        summary: "Sir David Bell leads the University of Sunderland and its London campus, with extensive experience as former Permanent Secretary at the Department for Education.",
        source: "https://london.sunderland.ac.uk/about-us/university-leadership/",
        recruiting: "Not verified"
      },
      {
        id: 2311,
        name: "Stefano De Dominicis",
        title: "Associate Professor and Head of London Academic Operations",
        department: "Faculty of Business and Digital Technologies",
        subject: "social-sciences",
        interests: ["Behavioral Economics", "Consumer Decision Making", "FinTech Adoption"],
        summary: "Stefano De Dominicis coordinates academic programs at UoSiL, researching consumer financial decision-making and digital transformation in urban business centers.",
        source: "https://london.sunderland.ac.uk/staff/stefano-de-dominicis",
        recruiting: "Not verified"
      },
      {
        id: 2312,
        name: "Dr. Paul Graham",
        title: "Senior Lecturer in Health Sciences",
        department: "School of Nursing and Health Professions",
        subject: "biology",
        interests: ["Adult Critical Nursing", "Clinical Simulation Efficacy", "Palliative Care Practices"],
        summary: "Dr. Paul Graham leads adult nursing clinical modules at UoSiL, investigating high-fidelity simulation learning and patient advocacy in acute hospital care.",
        source: "https://london.sunderland.ac.uk/staff/paul-graham",
        recruiting: "Not verified"
      }
    ]
  },

  // 23. Japan: Kyoto Women's University
  {
    institution: "Kyoto Women's University",
    slug: "kyoto-womens-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1699,
    location: "Higashiyama-ku, Kyoto, Japan",
    website: "https://www.kyoto-wu.ac.jp",
    shortName: "Kyoto Women's University",
    badge: "Premier Historic Women's University in Kyoto",
    overview: "Kyoto Women's University (Kyoto Joshi Daigaku), founded in 1899 and set against the scenic eastern hills of Higashiyama in Kyoto, is one of Japan's most prestigious private women's universities. Renowned for its Faculty of Contemporary Society, Faculty of Home Economics (Food and Nutrition), Faculty of Human Development and Education, and the historic Shin Buddhist educational traditions, the university maintains top national employment and national exam pass rates.",
    lead: "Explore clinical nutrition degrees, contemporary legal studies, traditional textile preservation, and Kyoto international scholarships at Kyoto Women's University.",
    description: "Kyoto Women's University degree programs in food sciences, education, law, psychology, and international student tuition reduction awards.",
    quickFacts: {
      type: "Private Women's University (Shin Buddhist Tradition)",
      campus: "Higashiyama Campus, Kyoto, Kansai, Japan",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "Competitive entrance examination or EJU (Examination for Japanese University Admission for International Students)",
      language: "Japanese (JLPT N1 or N2 depending on faculty); select English international seminars",
      aid: "Kyoto Women's University International Tuition Waiver (30%-50%) & JASSO Honors Scholarships"
    },
    strengths: [
      "Top national pass rate for the National Examination for Registered Dietitians (Kanri Eiyoshi)",
      "Pioneering Faculty of Contemporary Society and Faculty of Law empowering women in Japanese governance",
      "Kyoto cultural heritage preservation, traditional kimono textiles, and Japanese literature archives",
      "Serene historic campus in Higashiyama surrounded by UNESCO temples and botanical gardens"
    ],
    programs: [
      { title: "Bachelor of Science in Food and Nutrition (Food Science)", level: "Bachelor's Degree", desc: "Four-year specialized degree preparing certified national registered dietitians, clinical nutritionists, and food biochemists." },
      { title: "Bachelor of Arts in Japanese Literature and Cultural Studies", level: "Bachelor's Degree", desc: "Immersion curriculum in classical Heian literature, waka poetry, Kyoto folklore, and modern Japanese literary aesthetics." },
      { title: "Bachelor of Laws (Faculty of Law)", level: "Bachelor's Degree", desc: "Comprehensive legal education focusing on constitutional jurisprudence, civil litigation, international human rights, and public policy." }
    ],
    opportunities: [
      {
        id: 5352,
        title: "Kyoto Women's University International Tuition Reduction Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Merit-based tuition waiver awarded to privately financed international students enrolled in undergraduate or graduate faculties.",
        funding: "30% to 50% reduction in annual tuition fees",
        fee: "¥30,000 entrance examination fee",
        tuition: "Approx. ¥850,000 - ¥1,200,000 annual tuition depending on faculty",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.kyoto-wu.ac.jp/international/scholarship.html",
        requirements: {
          gpa: "Excellent score on Examination for Japanese University Admission (EJU)",
          ielts: "JLPT N1 or N2 certificate",
          gre: "Not required",
          papers: "Study plan essay in Japanese explaining motivation to study in Kyoto",
          references: "One teacher recommendation letter"
        }
      },
      {
        id: 5353,
        title: "Bachelor of Science in Food and Nutrition Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Four-year laboratory curriculum in physiological chemistry, clinical dietetics, food preservation, and metabolic health.",
        funding: "Eligible for JASSO international study stipends (¥48,000/month)",
        fee: "¥30,000 entrance examination fee",
        tuition: "¥1,350,000 per academic year",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.kyoto-wu.ac.jp/faculty/kasei/shokumotsu/",
        requirements: {
          gpa: "High school graduation with chemistry and biology foundations",
          ielts: "JLPT N1 recommended",
          gre: "Not required",
          papers: "High school transcript, EJU scores in Japanese and sciences",
          references: "High school principal recommendation"
        }
      },
      {
        id: 5354,
        title: "Kyoto Clinical Nutrition & Hospital Dietetics Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Four-week clinical practicum in Kyoto university hospitals, community health centers, and maternal wellness facilities.",
        funding: "Accredited practical training credits toward registered dietitian licensing",
        fee: "¥0 application fee",
        tuition: "Integrated into degree program",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.kyoto-wu.ac.jp/faculty/kasei/shokumotsu/",
        requirements: {
          gpa: "Completed 3rd year of Food and Nutrition major in good standing",
          ielts: "Japanese fluency",
          gre: "Not required",
          papers: "Clinical placement logbook and medical screening records",
          references: "Faculty nutrition department supervisor approval"
        }
      },
      {
        id: 5355,
        title: "Bachelor of Arts in Japanese Literature and Culture Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Four-year degree studying classical manuscripts, Kyoto court literature, traditional tea and kimono arts, and modern linguistics.",
        funding: "Kyoto cultural preservation endowed awards",
        fee: "¥30,000 application fee",
        tuition: "¥1,100,000 per academic year",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.kyoto-wu.ac.jp/faculty/bungaku/kokubun/",
        requirements: {
          gpa: "12 years of formal education or equivalent international qualification",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "Japanese essay examination and interview",
          references: "One academic reference"
        }
      },
      {
        id: 5356,
        title: "Higashiyama Cultural Archives Research Grant",
        type: "Grant",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Research grant supporting undergraduate and master's projects utilizing Kyoto Women's University rare Buddhist and Heian period literary collections.",
        funding: "¥200,000 research stipend and rare book access privileges",
        fee: "¥0 application fee",
        tuition: "Direct research support",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.kyoto-wu.ac.jp/library/rare_books/",
        requirements: {
          gpa: "Enrolled in literature or cultural studies with top grades in classical Japanese",
          ielts: "Advanced classical Japanese literacy",
          gre: "Not required",
          papers: "Archival research project plan (approx. 2,000 Japanese characters)",
          references: "Department chair recommendation"
        }
      },
      {
        id: 5357,
        title: "Bachelor of Laws (Faculty of Law) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year legal curriculum designed to foster female legal scholars, civil servants, corporate compliance directors, and judicial advocates.",
        funding: "Legal talent merit scholarships",
        fee: "¥30,000 application fee",
        tuition: "¥1,150,000 per academic year",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.kyoto-wu.ac.jp/faculty/hougaku/",
        requirements: {
          gpa: "Secondary school completion with strong analytical profile",
          ielts: "JLPT N1 for international students",
          gre: "Not required",
          papers: "Essay on contemporary legal challenges in Japanese society",
          references: "One referee"
        }
      },
      {
        id: 5358,
        title: "Kyoto Shin Buddhist Cultural Leadership Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Endowed scholarship for students demonstrating commitment to social welfare, ethics, and community volunteer service in Kyoto prefecture.",
        funding: "¥300,000 annual scholarship",
        fee: "¥0 application fee",
        tuition: "Applied towards annual university fees",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.kyoto-wu.ac.jp/student/scholarship/",
        requirements: {
          gpa: "Good academic standing (minimum 3.0 GPA)",
          ielts: "Japanese proficiency",
          gre: "Not required",
          papers: "Community service essay and volunteer record log",
          references: "Recommendation from faculty advisor"
        }
      }
    ],
    researchers: [
      {
        id: 2313,
        name: "Prof. Dr. Midori Takematsu",
        title: "President and Professor of Humanities",
        department: "Office of the President",
        subject: "social-sciences",
        interests: ["Women's Higher Education in Japan", "Comparative Cultural Studies", "University Governance"],
        summary: "Prof. Dr. Midori Takematsu leads Kyoto Women's University, advancing female leadership initiatives, international exchange programs, and community welfare.",
        source: "https://www.kyoto-wu.ac.jp/about/president/",
        recruiting: "Not verified"
      },
      {
        id: 2314,
        name: "Prof. Dr. Keiko Morimoto",
        title: "Professor of Clinical Nutrition and Metabolic Biochemistry",
        department: "Department of Food and Nutrition",
        subject: "biology",
        interests: ["Dietary Phenolic Compounds", "Metabolic Syndrome Prevention", "Functional Japanese Foods"],
        summary: "Prof. Dr. Keiko Morimoto analyzes the bioactive mechanisms of traditional Japanese diets, green tea polyphenols, and vascular disease prevention.",
        source: "https://www.kyoto-wu.ac.jp/faculty/kasei/shokumotsu/teachers/",
        recruiting: "Not verified"
      },
      {
        id: 2315,
        name: "Prof. Dr. Yoko Yamashita",
        title: "Professor of Classical Japanese Literature",
        department: "Department of Japanese Literature",
        subject: "arts-design",
        interests: ["Heian Period Court Literature", "Tale of Genji Manuscript Studies", "Classical Waka Poetry"],
        summary: "Prof. Dr. Yoko Yamashita is a recognized scholar of Heian literature, analyzing gender dynamics and narrative rhetoric in classical Kyoto court texts.",
        source: "https://www.kyoto-wu.ac.jp/faculty/bungaku/kokubun/teachers/",
        recruiting: "Not verified"
      }
    ]
  },

  // 24. Japan: Kyushu Sangyo University
  {
    institution: "Kyushu Sangyo University",
    slug: "kyushu-sangyo-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1700,
    location: "Fukuoka, Kyushu, Japan",
    website: "https://www.kyusan-u.ac.jp",
    shortName: "Kyushu Sangyo University",
    badge: "Kyushu Comprehensive Science, Engineering & Arts Hub",
    overview: "Kyushu Sangyo University (KSU), established in 1960 in Fukuoka—the vibrant economic center of Kyushu—is a comprehensive private university with over 10,000 students. Combining faculties of science and engineering, architecture, art and design, life science, economics, and international tourism, KSU is celebrated for its industry-academia co-creation and applied digital technologies.",
    lead: "Explore mechanical robotics degrees, manga & media arts bachelors, biotechnology programs, and Fukuoka international scholarships at Kyushu Sangyo University.",
    description: "Kyushu Sangyo University degree courses in robotics engineering, art & design, architecture, biotechnology, and Japanese international student funding.",
    quickFacts: {
      type: "Comprehensive Private University",
      campus: "Matsukadai Campus, Higashi-ku, Fukuoka, Kyushu, Japan",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "Special entrance examination for international students / EJU scores",
      language: "Japanese (JLPT N2 or N1); expanding English research programs",
      aid: "KSU International Student Tuition Reduction (30%-50%) & Fukuoka Prefectural Grants"
    },
    strengths: [
      "Center for Advanced Mechanical and Robotic Engineering collaborating with northern Kyushu industrial robotics hubs (Yaskawa, Toyota)",
      "Pioneering Faculty of Art and Design excelling in visual communication, manga, and gaming concept art",
      "Comprehensive Department of Life Science exploring fermentation biochemistry and agricultural biotechnology",
      "Vibrant international community in Fukuoka with direct flight connections across East Asia"
    ],
    programs: [
      { title: "Bachelor of Engineering in Mechanical and Robotic Engineering", level: "Bachelor's Degree", desc: "Four-year applied curriculum covering industrial robotics kinematics, mechatronics control, CAD/CAM prototyping, and autonomous mobile vehicles." },
      { title: "Bachelor of Fine Arts in Visual Design and Media Arts", level: "Bachelor's Degree", desc: "Studio-based program in manga illustration, 3D CGI animation, interactive game design, and digital visual communication." },
      { title: "Bachelor of Science in Applied Chemistry and Life Science", level: "Bachelor's Degree", desc: "Laboratory-intensive degree exploring functional biomaterials, industrial enzymology, and environmental biosensors." }
    ],
    opportunities: [
      {
        id: 5359,
        title: "Kyushu Sangyo University International Student Tuition Reduction",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "arts-design", "biology"],
        desc: "Tuition waiver for self-supporting international students enrolled in undergraduate faculties based on academic merit and entrance examination score.",
        funding: "30% to 50% waiver of annual tuition fees across four years",
        fee: "¥20,000 international exam fee",
        tuition: "Approx. ¥1,050,000 - ¥1,450,000 per year before waiver",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        source: "https://www.kyusan-u.ac.jp/international/scholarship/",
        requirements: {
          gpa: "Good academic standing in secondary school or international EJU score",
          ielts: "JLPT N2 or above",
          gre: "Not required",
          papers: "Personal statement in Japanese and proof of international resident status",
          references: "One teacher recommendation"
        }
      },
      {
        id: 5360,
        title: "Bachelor of Engineering in Robotics and Mechatronics Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Four-year curriculum training engineers in industrial robotic arms, microcomputer embedded systems, sensor integration, and computer vision.",
        funding: "Kyushu industrial consortium scholarships",
        fee: "¥20,000 application fee",
        tuition: "¥1,450,000 per academic year (before international reduction)",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        source: "https://www.kyusan-u.ac.jp/faculty/engineering/",
        requirements: {
          gpa: "High school graduation with physics and advanced mathematics",
          ielts: "JLPT N2 (or EJU Japanese score >= 200)",
          gre: "Not required",
          papers: "Transcripts, EJU score sheet, and interview",
          references: "High school recommendation letter"
        }
      },
      {
        id: 5361,
        title: "Northern Kyushu Robotics Cluster Industrial Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Eight-week technical engineering internship with major robotics and automotive manufacturers located in the northern Kyushu industrial corridor.",
        funding: "¥120,000 monthly internship stipend and transportation coverage",
        fee: "¥0 application fee",
        tuition: "Credits accredited toward degree",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.kyusan-u.ac.jp/career/internship/",
        requirements: {
          gpa: "Enrolled in 3rd year of engineering with minimum 2.5 GPA",
          ielts: "Business Japanese conversational ability",
          gre: "Not required",
          papers: "Technical resume and engineering project portfolio",
          references: "Departmental internship coordinator approval"
        }
      },
      {
        id: 5362,
        title: "Bachelor of Fine Arts in Visual Media Arts Enrolment",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Four-year studio curriculum in digital illustration, manga storytelling, 3D character animation, and interactive media design.",
        funding: "Fukuoka creative media talent awards",
        fee: "¥20,000 application fee",
        tuition: "¥1,400,000 per academic year",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        source: "https://www.kyusan-u.ac.jp/faculty/art/",
        requirements: {
          gpa: "12 years of schooling or recognized equivalent",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Creative art portfolio containing 10-15 original visual works",
          references: "One referee"
        }
      },
      {
        id: 5363,
        title: "Fukuoka Manga & Digital Entertainment Studio Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Ten-week studio placement working with Fukuoka-based video game developers and digital animation production companies.",
        funding: "Professional portfolio credits and mentorship from studio art directors",
        fee: "¥0 application fee",
        tuition: "Integrated in design curriculum",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.kyusan-u.ac.jp/faculty/art/internship/",
        requirements: {
          gpa: "Junior or senior art major with advanced digital tool competency (Maya, Clip Studio, Unity)",
          ielts: "Japanese proficiency",
          gre: "Not required",
          papers: "Digital portfolio and concept design presentation",
          references: "Studio class professor recommendation"
        }
      },
      {
        id: 5364,
        title: "Bachelor of Science in Applied Chemistry and Life Science Enrolment",
        type: "Course",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        desc: "Four-year degree program providing training in analytical chemistry, organic synthesis, microbiology, and bioprocess technology.",
        funding: "Life science laboratory research stipends",
        fee: "¥20,000 application fee",
        tuition: "¥1,450,000 per academic year",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        source: "https://www.kyusan-u.ac.jp/faculty/science/",
        requirements: {
          gpa: "Secondary school graduation with chemistry and mathematics",
          ielts: "JLPT N2",
          gre: "Not required",
          papers: "Academic transcripts and motivation essay in Japanese",
          references: "Not required"
        }
      },
      {
        id: 5365,
        title: "Fukuoka Regional Exchange Scholarship at KSU",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Prefectural scholarship funded by Fukuoka international exchange foundations for students active in multicultural community engagement.",
        funding: "¥50,000 monthly living stipend for one academic year",
        fee: "¥0 application fee",
        tuition: "Direct monthly cash stipend",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.kyusan-u.ac.jp/international/scholarship/",
        requirements: {
          gpa: "Enrolled undergraduate international student with minimum 3.0 GPA",
          ielts: "Japanese conversational fluency",
          gre: "Not required",
          papers: "Essay on multicultural coexistence in Fukuoka",
          references: "University international center recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2316,
        name: "Prof. Dr. Katsunori Kitagawa",
        title: "President and Professor of Engineering",
        department: "Office of the President",
        subject: "engineering",
        interests: ["Robotics Engineering", "Applied Mechatronics", "Industry-University Partnerships"],
        summary: "Prof. Dr. Katsunori Kitagawa leads Kyushu Sangyo University, spearheading cross-disciplinary research between art, robotics, and regional manufacturing.",
        source: "https://www.kyusan-u.ac.jp/guide/president/",
        recruiting: "Not verified"
      },
      {
        id: 2317,
        name: "Prof. Dr. Kenji Takahashi",
        title: "Professor of Mechanical and Robotics Engineering",
        department: "Faculty of Science and Engineering",
        subject: "engineering",
        interests: ["Autonomous Mobile Robots", "Sensor Fusion Algorithms", "Industrial Robot Control"],
        summary: "Prof. Dr. Kenji Takahashi develops SLAM algorithms and obstacle-avoidance control systems for autonomous guided vehicles in smart factories.",
        source: "https://www.kyusan-u.ac.jp/faculty/engineering/teachers/",
        recruiting: "Not verified"
      },
      {
        id: 2318,
        name: "Prof. Kazuhiko Hoshino",
        title: "Professor of Visual Design and Manga Art",
        department: "Faculty of Art and Design",
        subject: "arts-design",
        interests: ["Visual Storytelling", "Character Concept Design", "Digital Media Animation"],
        summary: "Prof. Kazuhiko Hoshino mentors students in narrative manga production, game concept aesthetics, and digital publishing pipelines in Fukuoka.",
        source: "https://www.kyusan-u.ac.jp/faculty/art/teachers/",
        recruiting: "Not verified"
      }
    ]
  },

  // 25. Japan: Kōbe Tokiwa University
  {
    institution: "Kōbe Tokiwa University",
    slug: "kobe-tokiwa-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1702,
    location: "Kobe, Hyogo, Japan",
    website: "https://www.kobe-tokiwa.ac.jp/univ/",
    shortName: "Kōbe Tokiwa University",
    badge: "Medical Laboratory Sciences & Child Pedagogy",
    overview: "Kōbe Tokiwa University (Kobe Tokiwa Daigaku), located in Nagata-ku, Kobe, Hyogo Prefecture, is an established private university dedicated to allied health sciences, clinical laboratory technology, nursing, oral health, and early childhood education. With its motto 'Heart in Hands', Kobe Tokiwa is nationally recognized for exceptional pass rates on the National Examination for Clinical Laboratory Technologists.",
    lead: "Explore medical laboratory science degrees, registered nursing bachelors, early childhood pedagogy, and Hyogo healthcare awards at Kōbe Tokiwa University.",
    description: "Kōbe Tokiwa University degree programs in clinical laboratory sciences, nursing, pediatric education, and Japanese healthcare bursaries.",
    quickFacts: {
      type: "Private Specialized Healthcare University",
      campus: "Nagata Main Campus, Kobe, Hyogo, Japan",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "General entrance examination, recommendation admission, and healthcare interview",
      language: "Japanese (JLPT N1 or N2 for healthcare professional tracks)",
      aid: "Tokiwa Gakuen Institutional Scholarships & Hyogo Medical Tuition Loans"
    },
    strengths: [
      "Consistently among the highest pass rates in Western Japan for National Clinical Laboratory Technologist exams",
      "Modern clinical simulation laboratories with automated biochemical analyzers and hematology instrumentation",
      "Comprehensive Department of Nursing training acute care and community healthcare nurses",
      "Close hospital affiliations with Kobe University Hospital, Kobe City Medical Center General Hospital, and Hyogo Prefectural hospitals"
    ],
    programs: [
      { title: "Bachelor of Science in Medical Technology (Clinical Laboratory Science)", level: "Bachelor's Degree", desc: "Four-year curriculum training certified clinical laboratory technologists in clinical chemistry, hematology, microbiology, pathology, and genetic testing." },
      { title: "Bachelor of Science in Nursing", level: "Bachelor's Degree", desc: "Four-year professional nursing degree preparing students for the National Nurse Examination and community healthcare nursing." },
      { title: "Bachelor of Education in Early Childhood Care and Education", level: "Bachelor's Degree", desc: "Specialized pedagogical degree qualifying graduates as kindergarten educators and certified childcare workers (Hoikushi)." }
    ],
    opportunities: [
      {
        id: 5366,
        title: "Tokiwa Healthcare Academic Merit Award",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Tuition reduction scholarship awarded to incoming undergraduate students who achieve superior scores on the general healthcare entrance examinations.",
        funding: "¥300,000 - ¥500,000 annual tuition fee reduction",
        fee: "¥30,000 entrance examination fee",
        tuition: "¥1,550,000 annual tuition for laboratory science faculties",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.kobe-tokiwa.ac.jp/univ/exam/scholarship.html",
        requirements: {
          gpa: "High school GPA of 3.5 or higher with chemistry and biology prerequisites",
          ielts: "Japanese JLPT N1 or native equivalent",
          gre: "Not required",
          papers: "High school transcript and personal statement on dedication to healthcare",
          references: "High school principal recommendation"
        }
      },
      {
        id: 5367,
        title: "Bachelor of Science in Medical Technology (Clinical Lab Science) Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Four-year laboratory degree training medical technologists in clinical microscopy, blood banking, immunological testing, and molecular diagnostics.",
        funding: "Eligible for Japan Student Services Organization (JASSO) loans",
        fee: "¥30,000 entrance examination fee",
        tuition: "¥1,550,000 per academic year",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        source: "https://www.kobe-tokiwa.ac.jp/univ/faculty/health/laboratory/",
        requirements: {
          gpa: "Secondary school graduation with solid chemistry and biology foundation",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "School records and health screening certificate",
          references: "Recommendation from high school science instructor"
        }
      },
      {
        id: 5368,
        title: "Kobe Medical Center Clinical Laboratory Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Ten-week hospital laboratory rotation conducting automated clinical chemistry analysis, blood group matching, and pathogen culturing under senior technologists.",
        funding: "Practical qualification credits toward national licensure",
        fee: "¥0 application fee",
        tuition: "Integrated into degree program",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.kobe-tokiwa.ac.jp/univ/faculty/health/laboratory/hospital/",
        requirements: {
          gpa: "Enrolled in 4th year with completion of all pre-clinical laboratory exams",
          ielts: "Fluent Japanese",
          gre: "Not required",
          papers: "Hepatitis B vaccination proof and hospital confidentiality agreement",
          references: "Clinical practicum committee authorization"
        }
      },
      {
        id: 5369,
        title: "Bachelor of Science in Nursing Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        desc: "Four-year degree program fostering compassionate, highly skilled registered nurses and public health nurses through clinical simulations and hospital wards.",
        funding: "Hyogo Prefectural Nurse Training Loan Program eligible",
        fee: "¥30,000 application fee",
        tuition: "¥1,600,000 per academic year",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        source: "https://www.kobe-tokiwa.ac.jp/univ/faculty/health/nursing/",
        requirements: {
          gpa: "Secondary school completion with biology foundation",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "Personal statement detailing healthcare service commitment and transcripts",
          references: "One referee"
        }
      },
      {
        id: 5370,
        title: "Hyogo Prefectural Hospital Clinical Nursing Residency",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Twelve-week clinical nursing rotation across surgical, pediatric, psychiatric, and emergency departments in Kobe and Hyogo hospitals.",
        funding: "Professional clinical training credits and student insurance coverage",
        fee: "¥0 application fee",
        tuition: "Covered by nursing curriculum registration",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.kobe-tokiwa.ac.jp/univ/faculty/health/nursing/clinical/",
        requirements: {
          gpa: "Successful completion of foundational 1st-3rd year nursing OSCE exams",
          ielts: "Japanese fluency",
          gre: "Not required",
          papers: "Immunization record and clinical readiness assessment",
          references: "Dean of Nursing approval"
        }
      },
      {
        id: 5371,
        title: "Bachelor of Education in Early Childhood Pedagogy Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year curriculum qualifying graduates as kindergarten educators and certified nursery school teachers (Hoikushi) with music, art, and child psychology.",
        funding: "Hyogo Childcare Worker Training Tuition Loan eligible (full waiver upon working in Hyogo)",
        fee: "¥30,000 application fee",
        tuition: "¥1,250,000 per academic year",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027",
        source: "https://www.kobe-tokiwa.ac.jp/univ/faculty/education/",
        requirements: {
          gpa: "High school graduation diploma",
          ielts: "JLPT N2 or N1",
          gre: "Not required",
          papers: "Personal statement and basic piano / vocal practical evaluation",
          references: "Not required"
        }
      },
      {
        id: 5372,
        title: "Tokiwa International Exchange Study Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Grant supporting student participation in international nursing and health comparative study tours to partner universities in Asia and Europe.",
        funding: "¥150,000 overseas travel grant",
        fee: "¥0 application fee",
        tuition: "Direct non-repayable travel support",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.kobe-tokiwa.ac.jp/univ/international/",
        requirements: {
          gpa: "Enrolled in 2nd or 3rd year with minimum 2.8 GPA",
          ielts: "English B1 or conversational foreign language ability",
          gre: "Not required",
          papers: "Overseas study plan outlining healthcare comparative objectives",
          references: "Faculty advisor recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2319,
        name: "Prof. Dr. Shinichi Takahashi",
        title: "President and Professor of Medicine",
        department: "Office of the President",
        subject: "biology",
        interests: ["Laboratory Medicine", "Clinical Pathology", "Medical Education Strategy"],
        summary: "Prof. Dr. Shinichi Takahashi presides over Kōbe Tokiwa University, directing medical technology accreditation, simulation center development, and clinical research.",
        source: "https://www.kobe-tokiwa.ac.jp/univ/about/president.html",
        recruiting: "Not verified"
      },
      {
        id: 2320,
        name: "Prof. Dr. Kazuo Tsubaki",
        title: "Professor of Hematology and Clinical Immunology",
        department: "Department of Medical Technology",
        subject: "biology",
        interests: ["Hematological Malignancies", "Flow Cytometry Diagnostics", "Immunohematology"],
        summary: "Prof. Dr. Kazuo Tsubaki researches leukemia cell surface markers, automated flow cytometric diagnostics, and transfusion compatibility testing.",
        source: "https://www.kobe-tokiwa.ac.jp/univ/faculty/health/laboratory/teachers/",
        recruiting: "Not verified"
      },
      {
        id: 2321,
        name: "Prof. Dr. Keiko Kawabata",
        title: "Professor of Pediatric Nursing",
        department: "Department of Nursing",
        subject: "biology",
        interests: ["Pediatric Palliative Care", "Family-Centered Pediatric Nursing", "Child Health Literacy"],
        summary: "Prof. Dr. Keiko Kawabata specializes in family-centered care models for chronically ill pediatric patients and pediatric nursing simulation pedagogies.",
        source: "https://www.kobe-tokiwa.ac.jp/univ/faculty/health/nursing/teachers/",
        recruiting: "Not verified"
      }
    ]
  },

  // 26. Japan: Miyagi University
  {
    institution: "Miyagi University",
    slug: "miyagi-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1707,
    location: "Sendai & Kurokawa, Miyagi, Japan",
    website: "https://www.myu.ac.jp",
    shortName: "Miyagi University",
    badge: "Tohoku Public Innovation, Nursing & Food Sciences",
    overview: "Miyagi University (Miyagi Daigaku / MYU), established in 1997 with campuses in Taiwa (Kurokawa District) and Nagamachi (Sendai), is a forward-thinking public prefectural university in the Tohoku region. Renowned for its School of Nursing, School of Project Design (integrating business management, IT, and regional architectural planning), and School of Food, Agricultural and Environmental Sciences, MYU is a recognized leader in disaster recovery, sustainable agri-food systems, and regional revitalization.",
    lead: "Explore project design degrees, sustainable food bioeconomy bachelors, advanced nursing, and Tohoku public university scholarships at Miyagi University.",
    description: "Miyagi University public degree courses in project design, nursing, food and environmental sciences, and Japanese government student funding.",
    quickFacts: {
      type: "Public Prefectural University (Kōritsu Daigaku)",
      campus: "Taiwa Campus (Kurokawa) and Nagamachi Campus (Sendai), Miyagi, Japan",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "National Center Test / Common Test for University Admissions or special international screening",
      language: "Japanese (JLPT N1 or N2); select English seminars",
      aid: "Miyagi Prefectural Tuition Exemption System & JASSO Honors Scholarships"
    },
    strengths: [
      "Pioneering School of Project Design uniting user experience, regional economic regeneration, and data science",
      "Advanced School of Food, Agricultural and Environmental Sciences supporting northeastern Japan's marine and agri-food sectors",
      "Highly respected School of Nursing with exceptional national pass rates and public hospital integration in Sendai",
      "Modern, light-filled architectural campuses recognized with architectural design awards"
    ],
    programs: [
      { title: "Bachelor of Project Design (School of Project Design)", level: "Bachelor's Degree", desc: "Four-year curriculum integrating business innovation, spatial design, informatics, and community revitalization strategy." },
      { title: "Bachelor of Science in Food and Environmental Sciences", level: "Bachelor's Degree", desc: "Comprehensive program in agricultural biotechnology, marine resource utilization, food chemistry, and supply chain logistics." },
      { title: "Bachelor of Science in Nursing", level: "Bachelor's Degree", desc: "Public university nursing degree training registered nurses and public health nurses for acute care and community healthcare disaster response." }
    ],
    opportunities: [
      {
        id: 5373,
        title: "Miyagi Prefectural International Student Tuition Waiver",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment", "biology"],
        desc: "Public university tuition reduction or complete exemption awarded to outstanding international students facing economic hardship.",
        funding: "50% to 100% waiver of annual public university tuition fees",
        fee: "¥17,000 entrance examination fee",
        tuition: "¥535,800 standard annual public university tuition",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.myu.ac.jp/campuslife/scholarship/",
        requirements: {
          gpa: "Excellent high school academic performance or EJU score",
          ielts: "JLPT N1 or N2",
          gre: "Not required",
          papers: "Income evaluation statement and personal study plan in Japanese",
          references: "One academic reference"
        }
      },
      {
        id: 5374,
        title: "Bachelor of Project Design Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science", "arts-design"],
        desc: "Four-year degree program teaching design thinking, data analysis, business enterprise development, and architectural urban regeneration.",
        funding: "Regional startup grants and JASSO scholarship eligible",
        fee: "¥17,000 application fee",
        tuition: "¥535,800 per academic year for prefectural residents (¥282,000 admission fee)",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        source: "https://www.myu.ac.jp/academics/project-design/",
        requirements: {
          gpa: "Completion of 12 years of education; EJU Japanese and mathematics",
          ielts: "JLPT N1 recommended",
          gre: "Not required",
          papers: "Statement of purpose detailing regional revitalization project idea",
          references: "High school transcript and recommendation"
        }
      },
      {
        id: 5375,
        title: "Tohoku Regional Economic Revitalization Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Eight-week field internship embedded in Miyagi municipal development offices, agricultural cooperatives, or digital design firms in Sendai.",
        funding: "Project research stipend and academic course credit",
        fee: "¥0 application fee",
        tuition: "Included in standard university tuition",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.myu.ac.jp/cooperation/internship/",
        requirements: {
          gpa: "Enrolled in 3rd year of Project Design with minimum 2.8 GPA",
          ielts: "Japanese fluency",
          gre: "Not required",
          papers: "Project proposal on regional community development",
          references: "Faculty seminar supervisor approval"
        }
      },
      {
        id: 5376,
        title: "Bachelor of Science in Food and Environmental Sciences Enrolment",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "biology", "chemistry"],
        desc: "Four-year applied science degree exploring circular bioeconomy, functional food analysis, marine fisheries conservation, and organic agriculture.",
        funding: "Food industry research bursaries and prefectural agricultural grants",
        fee: "¥17,000 application fee",
        tuition: "¥535,800 per academic year",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        source: "https://www.myu.ac.jp/academics/food-environmental/",
        requirements: {
          gpa: "Secondary school graduation with science prerequisites",
          ielts: "JLPT N2 or higher",
          gre: "Not required",
          papers: "EJU score report in Japanese and science subjects",
          references: "One referee"
        }
      },
      {
        id: 5377,
        title: "Sanriku Coastal Marine Bioeconomy Research Practicum",
        type: "Internship",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "Summer field research rotation along the Sanriku coast studying seaweed mariculture, oyster bed ecosystem dynamics, and seafood cold-chain processing.",
        funding: "¥100,000 summer research travel allowance",
        fee: "¥0 application fee",
        tuition: "Covers laboratory course credit",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.myu.ac.jp/research/sanriku/",
        requirements: {
          gpa: "2nd or 3rd year student in food and environmental sciences",
          ielts: "Japanese proficiency",
          gre: "Not required",
          papers: "Field laboratory safety clearance and statement of intent",
          references: "Department chair recommendation"
        }
      },
      {
        id: 5378,
        title: "Bachelor of Science in Nursing Enrolment",
        type: "Course",
        subject: "biology",
        subjects: ["biology"],
        desc: "Four-year public university nursing program preparing students for registered nursing and public health nursing national examinations.",
        funding: "Miyagi Prefectural Nurse Training Loan Program (tuition waiver on prefectural service)",
        fee: "¥17,000 application fee",
        tuition: "¥535,800 per academic year",
        deadline: "2027-01-30",
        deadlineText: "January 30, 2027",
        source: "https://www.myu.ac.jp/academics/nursing/",
        requirements: {
          gpa: "Upper secondary school completion with strong science profile",
          ielts: "JLPT N1",
          gre: "Not required",
          papers: "Transcripts, motivation essay, and interview assessment",
          references: "High school recommendation letter"
        }
      },
      {
        id: 5379,
        title: "Tohoku Future Innovation Seed Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Seed capital grant awarded to multidisciplinary student teams developing social venture concepts or tech products benefiting the Tohoku region.",
        funding: "¥300,000 seed venture grant and incubator support",
        fee: "¥0 application fee",
        tuition: "Direct non-dilutive innovation funding",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.myu.ac.jp/cooperation/innovation/",
        requirements: {
          gpa: "Enrolled undergraduate or graduate student team",
          ielts: "Japanese or English",
          gre: "Not required",
          papers: "Pitch deck outlining problem statement, prototype, and regional economic viability",
          references: "Faculty project mentor endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2322,
        name: "Prof. Dr. Hiroki Tsuda",
        title: "President and Professor of Design Informatics",
        department: "Office of the President",
        subject: "social-sciences",
        interests: ["Information Design", "Regional Innovation Architecture", "Public Higher Education Policy"],
        summary: "Prof. Dr. Hiroki Tsuda presides over Miyagi University, leading strategic university-industry collaborations and digital design thinking initiatives.",
        source: "https://www.myu.ac.jp/about/president/",
        recruiting: "Not verified"
      },
      {
        id: 2323,
        name: "Prof. Dr. Yutaka Nakai",
        title: "Professor of Agricultural Microbiology and Soil Ecology",
        department: "School of Food, Agricultural and Environmental Sciences",
        subject: "environment",
        interests: ["Composting Microbiology", "Soil Carbon Cycles", "Agricultural Biomass Recycling"],
        summary: "Prof. Dr. Yutaka Nakai investigates microbial biodegradation in compost ecosystems and circular organic farming technologies in Miyagi Prefecture.",
        source: "https://www.myu.ac.jp/faculty/food/teachers/",
        recruiting: "Not verified"
      },
      {
        id: 2324,
        name: "Prof. Dr. Midori Sugawara",
        title: "Professor of Community Health and Disaster Nursing",
        department: "School of Nursing",
        subject: "biology",
        interests: ["Disaster Nursing Protocols", "Community Public Health Resilience", "Gerontological Healthcare"],
        summary: "Prof. Dr. Midori Sugawara analyzes community nursing mobilization in post-earthquake recovery contexts and long-term rural elderly healthcare.",
        source: "https://www.myu.ac.jp/faculty/nursing/teachers/",
        recruiting: "Not verified"
      }
    ]
  },

  // 27. Netherlands: Hogeschool IPABO (Alkmaar Campus)
  {
    institution: "Hogeschool IPABO (Alkmaar Campus)",
    slug: "hogeschool-ipabo-alkmaar",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1425,
    location: "Alkmaar, North Holland, Netherlands",
    website: "https://www.ipabo.nl",
    shortName: "Hogeschool IPABO Alkmaar",
    badge: "Specialized University of Applied Sciences for Teacher Education",
    overview: "Hogeschool IPABO (Instituut voor Pedagogiek en Onderwijskunde), operating an established campus on Gabriël Metsustraat in Alkmaar (North Holland) alongside its Amsterdam campus, is an accredited, specialized Dutch university of applied sciences entirely dedicated to primary teacher education (pabo). Renowned for pedagogical innovation, early childhood bilingualism, and inclusive classroom leadership, IPABO maintains deep partnerships with primary school boards across the North Holland region.",
    lead: "Explore Dutch primary education degrees, academic teacher bachelors (ALO/Pabo), pedagogical research fellowships, and Dutch teacher grants at Hogeschool IPABO Alkmaar.",
    description: "Hogeschool IPABO Alkmaar campus degrees in primary teacher education (pabo), pedagogical leadership, and Dutch statutory tuition grants.",
    quickFacts: {
      type: "Specialized Public-Funded University of Applied Sciences (Monosectorale Hogeschool)",
      campus: "Alkmaar Regional Campus, North Holland, Netherlands",
      accreditation: "NVAO (Accreditation Organisation of the Netherlands and Flanders) / Dutch Ministry of Education",
      admissions: "HAVO, VWO, or MBO Level 4 diploma; successful national Pabo entry tests in history, geography, and science",
      language: "Dutch (NT2 Level II / C1 Dutch proficiency for primary teaching licensure)",
      aid: "Dutch DUO Student Finance & Tegemoetkoming Leraren (Teacher Tuition Subsidies)"
    },
    strengths: [
      "Specialized monocentric focus ensuring 100% institutional resources are dedicated to pedagogical excellence",
      "Immediate full-year school immersion placements throughout primary schools in North Holland",
      "Top-rated National Student Survey (NSE) scores for teacher accessibility and curriculum quality",
      "Pioneering research center in Culturally Responsive Pedagogy and Early Literacy"
    ],
    programs: [
      { title: "Bachelor of Education in Primary School Teaching (Pabo Voltijd)", level: "Bachelor's Degree", desc: "Four-year professional bachelor's degree qualifying graduates as fully certified Dutch primary school teachers (Groepsleerkracht basisonderwijs)." },
      { title: "Academische Pabo (Joint Bachelor with University)", level: "Bachelor's Degree", desc: "Four-year double-degree combining practical teacher training with university-level educational sciences and pedagogical research." },
      { title: "Zij-instroom in het Beroep (Lateral Entry Primary Teaching)", level: "Post-Graduate Diploma", desc: "Two-year intensive customized program enabling career changers holding existing bachelor's degrees to teach in primary schools while completing certification." }
    ],
    opportunities: [
      {
        id: 5380,
        title: "Tegemoetkoming Leraren (Dutch National Teacher Tuition Subsidy)",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Government grant from the Dutch Ministry of Education, Culture and Science (OCW) reimbursing tuition fees for students training to become certified teachers.",
        funding: "Up to €2,530 annual direct tuition reimbursement",
        fee: "€0 application fee (via DUO)",
        tuition: "€2,530 statutory annual tuition (wettelijk collegegeld)",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://duo.nl/particulier/opleiding-tot-leraar/",
        requirements: {
          gpa: "Enrolled in an accredited teacher training program (pabo) at Hogeschool IPABO",
          ielts: "Dutch language proficiency: NT2-II",
          gre: "Not required",
          papers: "DUO digital application and proof of Dutch higher education enrollment",
          references: "Not required"
        }
      },
      {
        id: 5381,
        title: "Bachelor Leraar Basisonderwijs (Pabo Voltijd) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year full-time professional education degree blending child psychology, language acquisition, mathematics pedagogy, and classroom internships in Alkmaar.",
        funding: "DUO student grant, public transport pass (studentenreisproduct), and performance grant",
        fee: "€0 application fee via Studielink",
        tuition: "€2,530 standard statutory tuition per year",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.ipabo.nl/opleidingen/bachelor-leraar-basisonderwijs/",
        requirements: {
          gpa: "HAVO or VWO diploma, or MBO Level 4; passing national Pabo entrance assessments in geography, history, and nature/technology",
          ielts: "Dutch C1 / NT2 Level II",
          gre: "Not required",
          papers: "Studielink registration and diploma verification",
          references: "Not required"
        }
      },
      {
        id: 5382,
        title: "Noord-Holland Primary School Teaching Internship (LIO-Stage)",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Final-year intensive Teacher-in-Training (Leraar in Opleiding - LIO) placement with primary schools in Alkmaar, Hoorn, or Den Helder with independent classroom teaching.",
        funding: "€1,200 - €1,800 monthly trainee teacher salary (LIO-vergoeding)",
        fee: "€0 application fee",
        tuition: "Curricular credit requirement",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.ipabo.nl/over-ipabo/stage-en-partners/",
        requirements: {
          gpa: "Successful completion of 1st-3rd year Pabo curriculum and national knowledge tests (kennisbasis)",
          ielts: "Fluent Dutch",
          gre: "Not required",
          papers: "Certificate of Good Conduct (VOG - Verklaring Omtrent het Gedrag)",
          references: "School mentor and IPABO placement supervisor approval"
        }
      },
      {
        id: 5383,
        title: "Academische Pabo (Dual Degree Education & Pedagogy) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year elite dual track combining pabo teacher training at IPABO with educational sciences research at university level.",
        funding: "Eligible for statutory tuition and DUO master's loan transition",
        fee: "€0 Studielink fee",
        tuition: "€2,530 per academic year",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.ipabo.nl/opleidingen/academische-pabo/",
        requirements: {
          gpa: "VWO diploma (pre-university education) with strong English and mathematics marks",
          ielts: "Native or near-native Dutch proficiency",
          gre: "Not required",
          papers: "VWO certificate and motivation interview",
          references: "Not required"
        }
      },
      {
        id: 5384,
        title: "IPABO Pedagogical Research Center Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Research grant supporting action research projects on multilingual classroom learning, digital pedagogical tools, and child wellbeing in urban schools.",
        funding: "€2,500 research stipend and project publishing budget",
        fee: "€0 application fee",
        tuition: "Direct research project support",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://www.ipabo.nl/onderzoek/",
        requirements: {
          gpa: "Enrolled in 4th year or master's program with strong educational research record",
          ielts: "Dutch and English proficiency",
          gre: "Not required",
          papers: "5-page research plan on classroom pedagogical interventions",
          references: "Lector / research chair recommendation"
        }
      },
      {
        id: 5385,
        title: "Zij-instroom in het Beroep (Lateral Entry Certification) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-year paid pathway for university graduates transitioning into primary school teaching while earning full professional licensure.",
        funding: "Subsidized through Dutch government Zij-instroom grant covering 100% of study costs",
        fee: "€0 application fee",
        tuition: "Covered by school board and government grant",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.ipabo.nl/opleidingen/zij-instroom/",
        requirements: {
          gpa: "Completed higher professional education (hbo) or university (wo) bachelor's degree",
          ielts: "Dutch language proficiency (C1)",
          gre: "Not required",
          papers: "Employment contract with Dutch primary school board and suitability assessment (geschiktheidsonderzoek)",
          references: "Two professional references"
        }
      },
      {
        id: 5386,
        title: "Erasmus+ European Teacher Exchange Grant at IPABO",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "EU scholarship enabling IPABO education students to undertake a semester practicum in Scandinavian or European bilingual primary schools.",
        funding: "€380 - €450 monthly mobility grant plus travel allowance",
        fee: "€0 application fee",
        tuition: "Tuition paid to IPABO; partner university tuition waived",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.ipabo.nl/internationalisering/",
        requirements: {
          gpa: "Completed 1st and 2nd year Pabo studies with minimum GPA 7.0/10",
          ielts: "English B2 or destination national language competence",
          gre: "Not required",
          papers: "Motivation letter and European learning agreement",
          references: "International office endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2325,
        name: "Eric Westhoek",
        title: "Voorzitter College van Bestuur (President)",
        department: "College van Bestuur",
        subject: "social-sciences",
        interests: ["Teacher Education Policy", "School Leadership", "Regional Educational Cooperation"],
        summary: "Eric Westhoek leads Hogeschool IPABO, directing institutional strategy, regional school consortium alliances, and pedagogical research in North Holland.",
        source: "https://www.ipabo.nl/over-ipabo/organisatie/",
        recruiting: "Not verified"
      },
      {
        id: 2326,
        name: "Dr. Anje Ros",
        title: "Lector Goed Leraarschap en Goed Onderwijs",
        department: "Kenniscentrum Onderwijs en Innovatie",
        subject: "social-sciences",
        interests: ["Inquiry-Based Learning", "Teacher Professionalization", "Classroom Pedagogy"],
        summary: "Dr. Anje Ros investigates inquiry-based learning, teacher feedback strategies, and classroom dynamics that foster student autonomy and motivation.",
        source: "https://www.ipabo.nl/onderzoek/lectoren/",
        recruiting: "Not verified"
      },
      {
        id: 2327,
        name: "Dr. Martine van Rijswijk",
        title: "Lector Taalontwikkeling en Meertaligheid",
        department: "Kenniscentrum Meertaligheid",
        subject: "social-sciences",
        interests: ["Early Childhood Language Acquisition", "Multilingual Classrooms", "Literacy Pedagogy"],
        summary: "Dr. Martine van Rijswijk analyzes second language development, early childhood vocabulary growth, and multilingual pedagogical strategies in diverse schools.",
        source: "https://www.ipabo.nl/onderzoek/lectoren/",
        recruiting: "Not verified"
      }
    ]
  },

  // 28. Netherlands: Saxion University of Applied Sciences (Deventer Campus)
  {
    institution: "Saxion University of Applied Sciences (Deventer Campus)",
    slug: "saxion-university-of-applied-sciences-deventer",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1427,
    location: "Deventer, Overijssel, Netherlands",
    website: "https://www.saxion.nl",
    shortName: "Saxion Deventer",
    badge: "Dutch Living Technology & Smart Industry Leader",
    overview: "Saxion University of Applied Sciences (Saxion Hogeschool), with over 27,000 students, maintains a campus located right by the historic railway station in Deventer, Overijssel. Famous for its educational theme 'Living Technology', Saxion Deventer specializes in international business, applied psychology, software engineering, urban design, and sustainable environmental technology, delivering programs in English and Dutch.",
    lead: "Explore applied psychology degrees, international business bachelors, urban design masters, and Holland Scholarship awards at Saxion University of Applied Sciences Deventer.",
    description: "Saxion University of Applied Sciences Deventer campus degree programs in business, psychology, environmental technology, and international student funding.",
    quickFacts: {
      type: "Public University of Applied Sciences (Hogeschool)",
      campus: "Handelskade Campus, Deventer, Overijssel, Netherlands",
      accreditation: "NVAO (Accreditation Organisation of the Netherlands and Flanders) / Dutch Ministry of Education",
      admissions: "Secondary school diploma equivalent to Dutch HAVO/VWO or international IB/high school with math",
      language: "English (IELTS 6.0 or TOEFL iBT 80) and Dutch tracks",
      aid: "NL Scholarship (formerly Holland Scholarship), Saxion Talent Bursaries & Orange Tulip Awards"
    },
    strengths: [
      "'Living Technology' educational philosophy linking human behavior with technological innovations",
      "Premier English-taught International Business and Applied Psychology bachelor's degrees",
      "Pioneering research groups in Urban Planning, Sustainable Water Technology, and Smart Mobility",
      "Dynamic campus environment with direct high-speed rail connections to Amsterdam, Utrecht, and Germany"
    ],
    programs: [
      { title: "Bachelor of Science in Applied Psychology", level: "Bachelor's Degree", desc: "Four-year English-taught degree exploring consumer behavior, occupational health psychology, cognitive ergonomics, and neuropsychology." },
      { title: "Bachelor of Business Administration in International Business", level: "Bachelor's Degree", desc: "Comprehensive degree in global supply chain logistics, cross-border corporate finance, digital marketing, and international trade strategy." },
      { title: "Master of Science in Applied Nanotechnology", level: "Master's Degree", desc: "Two-year cutting-edge postgraduate program covering microfluidics, biosensors, nano-coatings, and functional nanomaterials." }
    ],
    opportunities: [
      {
        id: 5387,
        title: "NL Scholarship (Holland Scholarship) at Saxion",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Dutch government scholarship for excellent non-EEA students enrolling in English-taught bachelor's or master's programs at Saxion.",
        funding: "€5,000 contribution towards living costs in the first year",
        fee: "€0 application fee via Studielink",
        tuition: "€8,600 - €12,500 annual non-EEA institutional tuition",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        source: "https://www.saxion.edu/studying-at-saxion/finance/scholarships",
        requirements: {
          gpa: "Outstanding academic grades (minimum 75% or 3.2/4.0 GPA)",
          ielts: "IELTS 6.5 overall or TOEFL iBT 90",
          gre: "Not required",
          papers: "Motivation letter and video statement explaining leadership ambitions",
          references: "One academic reference letter"
        }
      },
      {
        id: 5388,
        title: "Bachelor of Science in Applied Psychology (English Track) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Four-year English-taught bachelor's degree investigating behavioral modification, corporate organizational psychology, and e-health interventions.",
        funding: "Saxion Talent Scholarship eligible for subsequent academic years",
        fee: "€0 application fee",
        tuition: "€2,530/year (EU/EEA statutory) / €8,600/year (non-EEA)",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.saxion.edu/programmes/bachelor/applied-psychology",
        requirements: {
          gpa: "Equivalent of Dutch HAVO/VWO diploma with mathematics and English",
          ielts: "IELTS 6.0 or TOEFL iBT 80",
          gre: "Not required",
          papers: "Academic transcripts, motivation letter, and CV",
          references: "Not required"
        }
      },
      {
        id: 5389,
        title: "Dutch Living Technology Smart Industry Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        desc: "Five-month corporate semester internship placed with Dutch tech multinationals (ASML, Philips, Thales) or innovative SMEs in eastern Netherlands.",
        funding: "€400 - €700 monthly corporate internship allowance",
        fee: "€0 application fee",
        tuition: "Full curricular credit component (30 ECTS)",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.saxion.edu/programmes/internships",
        requirements: {
          gpa: "Completed at least 100 ECTS in degree program in good standing",
          ielts: "English fluency; Dutch advantageous for local firm integration",
          gre: "Not required",
          papers: "Internship learning contract and professional CV",
          references: "Faculty internship coordinator authorization"
        }
      },
      {
        id: 5390,
        title: "BBA in International Business Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year international business degree featuring real-world consulting projects, foreign exchange semester, and corporate strategy simulation.",
        funding: "Dutch government DUO student loans for EU students",
        fee: "€0 application fee",
        tuition: "€2,530/year (EU/EEA) / €8,600/year (non-EEA)",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.saxion.edu/programmes/bachelor/international-business",
        requirements: {
          gpa: "Secondary school graduation with economics or mathematics credentials",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Official transcripts and personal statement",
          references: "Not required"
        }
      },
      {
        id: 5391,
        title: "Saxion Talent Scholarship (STS)",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Merit award for continuing non-EEA students who achieve at least 55 ECTS in their previous academic year at Saxion.",
        funding: "€2,500 annual tuition reduction for second, third, or fourth year",
        fee: "€0 application fee",
        tuition: "Directly credited against annual tuition invoice",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.saxion.edu/studying-at-saxion/finance/scholarships/saxion-talent-scholarship",
        requirements: {
          gpa: "Earned minimum 55 ECTS in preceding academic year at Saxion",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Official Saxion grade transcript verification",
          references: "Not required"
        }
      },
      {
        id: 5392,
        title: "Master of Science in Applied Nanotechnology Enrolment",
        type: "Course",
        subject: "physics",
        subjects: ["physics", "engineering", "chemistry"],
        desc: "Two-year English-taught master's degree preparing research engineers in nano-fabrication, lab-on-a-chip microfluidics, and cleanroom instrumentation.",
        funding: "Research assistantships with NanoNextNL and MESA+ institute partners",
        fee: "€0 application fee",
        tuition: "€2,530/year (EU) / €11,500/year (non-EU)",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.saxion.edu/programmes/master/applied-nanotechnology",
        requirements: {
          gpa: "Bachelor's degree in applied physics, chemical engineering, electrical engineering, or materials science",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Transcripts, bachelor thesis summary, and CV",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 5393,
        title: "Saxion Sustainable Living Technology Research Fellowship",
        type: "Grant",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Fellowship supporting master's and graduating bachelor's students conducting applied research on urban heat resilience and circular water systems.",
        funding: "€3,000 project grant and specialized laboratory access",
        fee: "€0 application fee",
        tuition: "Direct thesis research award",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.saxion.edu/research",
        requirements: {
          gpa: "Enrolled in environmental science, urban design, or civil engineering with minimum 7.5/10 GPA",
          ielts: "English or Dutch proficiency",
          gre: "Not required",
          papers: "5-page thesis project proposal endorsed by Saxion research group",
          references: "Lector / professor endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2328,
        name: "Anka Mulder",
        title: "President of the Executive Board",
        department: "Executive Board",
        subject: "social-sciences",
        interests: ["Higher Education Digitalization", "Open Educational Resources", "Living Technology Strategy"],
        summary: "Anka Mulder serves as President of Saxion University of Applied Sciences, leading institutional innovation, internationalization, and applied AI integration.",
        source: "https://www.saxion.edu/about-saxion/organisation/executive-board",
        recruiting: "Not verified"
      },
      {
        id: 2329,
        name: "Dr. Martin Bennink",
        title: "Lector in NanoBio Technology",
        department: "Research Group NanoBio",
        subject: "physics",
        interests: ["Point-of-Care Diagnostics", "Microfluidic Biosensors", "Lab-on-a-Chip Systems"],
        summary: "Dr. Martin Bennink leads nanotechnology research at Saxion, developing rapid diagnostic biosensors, microfluidic devices, and optical detection platforms.",
        source: "https://www.saxion.edu/research/living-technology/nanotechnology",
        recruiting: "Not verified"
      },
      {
        id: 2330,
        name: "Dr. Jan Veuger",
        title: "Lector in Blockchain and Smart Cities",
        department: "Research Group Smart Cities",
        subject: "computer-science",
        interests: ["Blockchain in Real Estate", "Smart City Governance", "Digital Twins in Urban Planning"],
        summary: "Dr. Jan Veuger investigates distributed ledger technology, decentralized governance, and digital urban infrastructure in medium-sized European cities.",
        source: "https://www.saxion.edu/research/smart-cities",
        recruiting: "Not verified"
      }
    ]
  },

  // 29. Netherlands: Tio Business School (Hogeschool Tio)
  {
    institution: "Tio Business School (Hogeschool Tio)",
    slug: "tio-business-school-netherlands",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1511,
    location: "Utrecht & Amsterdam, Netherlands",
    website: "https://www.tio.nl",
    shortName: "Tio Business School",
    badge: "Top-Rated Private University of Applied Sciences in the Netherlands",
    overview: "Tio Business School (Hogeschool Tio), established in 1969 with flagship campuses in Utrecht, Amsterdam, Rotterdam, Eindhoven, and Groningen, is the premier private university of applied sciences in the Netherlands. Consistently ranked by the Keuzegids Hbo as the #1 small university of applied sciences for over ten consecutive years, Tio is renowned for accelerated three-year bachelor's degrees in hotel management, international business, commerce entrepreneurship, and digital marketing.",
    lead: "Explore accelerated hotel management degrees, international business bachelors, digital marketing courses, and Tio talent scholarships at Hogeschool Tio.",
    description: "Tio Business School Netherlands accelerated degree programs in hotel management, international business, commerce, and merit-based private scholarships.",
    quickFacts: {
      type: "State-Recognized Private University of Applied Sciences (Aangewezen Particuliere Hogeschool)",
      campus: "Campuses in Utrecht, Amsterdam, Rotterdam, Eindhoven, and Groningen",
      accreditation: "NVAO (Accreditation Organisation of the Netherlands and Flanders) / Dutch Ministry of Education",
      admissions: "HAVO, VWO, or international equivalent; personal intake interview and study choice check",
      language: "100% English tracks and Dutch tracks available (IELTS 6.0 or TOEFL iBT 80)",
      aid: "Dutch DUO Student Finance eligible (statutory tuition loan + supplementary grants) & Tio Bursaries"
    },
    strengths: [
      "Consistently voted best small university of applied sciences in the Netherlands in national student rankings",
      "Accelerated three-year bachelor's degree pathways saving students one full year of study",
      "Average class size of only 11 students ensuring intensive personalized faculty mentoring",
      "Two mandatory international corporate internships connecting students with luxury hotel chains and tech leaders worldwide"
    ],
    programs: [
      { title: "Bachelor of Business Administration in Hotel and Event Management", level: "Bachelor's Degree", desc: "Three-year accelerated degree preparing general managers for luxury hotel resorts, festival organizers, Michelin gastronomy, and event agencies." },
      { title: "Bachelor of Science in International Business Management", level: "Bachelor's Degree", desc: "Three-year comprehensive business degree covering corporate internationalization, e-commerce, financial modeling, and venture capital." },
      { title: "Bachelor of Arts in Digital Marketing and Communication", level: "Bachelor's Degree", desc: "Modern creative degree in growth hacking, social media marketing, visual content strategy, and consumer data analytics." }
    ],
    opportunities: [
      {
        id: 5394,
        title: "Tio International Talent Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Merit-based tuition scholarship awarded to outstanding non-EU/EEA international students enrolling in English-taught bachelor programs at Tio.",
        funding: "€5,000 direct tuition reduction across first academic year",
        fee: "€95 registration assessment fee",
        tuition: "€21,900 annual private tuition (standard private rate)",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.tio.nl/en/studying-at-tio/fees-and-finance/scholarships/",
        requirements: {
          gpa: "High school graduating score equivalent to Dutch grade 7.5/10 or GPA 3.3/4.0",
          ielts: "IELTS 6.5 overall or TOEFL iBT 85",
          gre: "Not required",
          papers: "Curriculum vitae and 750-word essay on entrepreneurial leadership in hospitality or international business",
          references: "Two academic or professional reference letters"
        }
      },
      {
        id: 5395,
        title: "BBA in Hotel and Event Management (Accelerated 3-Year) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year intensive bachelor's degree featuring two full-semester international hotel internships and management simulation games.",
        funding: "Dutch students qualify for standard DUO tuition fee loans and travel cards",
        fee: "€95 application fee",
        tuition: "€21,900 per academic year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.tio.nl/en/programmes/bachelor-hotel-and-event-management/",
        requirements: {
          gpa: "Secondary school diploma (HAVO, VWO, IB, or international equivalent)",
          ielts: "IELTS 6.0 for English track",
          gre: "Not required",
          papers: "Personal intake interview and study choice motivation questionnaire",
          references: "Not required"
        }
      },
      {
        id: 5396,
        title: "Global Luxury Hospitality International Internship",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Twenty-week operational or managerial internship with premier luxury hotel groups (Marriott, Hilton, Four Seasons) in Amsterdam, London, Dubai, or Singapore.",
        funding: "€500 - €1,200 monthly corporate stipend plus accommodation assistance",
        fee: "€0 application fee",
        tuition: "Mandatory component of accelerated degree (30 ECTS)",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.tio.nl/en/studying-at-tio/internships/",
        requirements: {
          gpa: "Satisfactory completion of 1st year hospitality management modules",
          ielts: "English fluency; additional languages advantageous",
          gre: "Not required",
          papers: "Professional hospitality resume and interview preparation video",
          references: "Tio international internship coordinator approval"
        }
      },
      {
        id: 5397,
        title: "BSc in International Business Management (Accelerated 3-Year) Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Three-year fast-track degree in cross-border finance, international contract law, digital marketing, and venture startup creation.",
        funding: "Eligible for Tio early enrollment discounts",
        fee: "€95 application fee",
        tuition: "€21,900 per year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.tio.nl/en/programmes/bachelor-international-business-management/",
        requirements: {
          gpa: "Secondary school diploma with mathematics",
          ielts: "IELTS 6.0 or TOEFL iBT 80",
          gre: "Not required",
          papers: "Academic transcripts and intake interview",
          references: "Not required"
        }
      },
      {
        id: 5398,
        title: "BA in Digital Marketing and Communication Enrolment",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Three-year bachelor's degree in conversion rate optimization, digital content creation, search engine advertising, and brand storytelling.",
        funding: "Corporate co-study funding and DUO student finance eligible",
        fee: "€95 application fee",
        tuition: "€21,900 per academic year",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://www.tio.nl/en/programmes/bachelor-commerce-entrepreneurship-and-organisations/",
        requirements: {
          gpa: "High school completion diploma",
          ielts: "IELTS 6.0",
          gre: "Not required",
          papers: "Personal statement and intake assessment",
          references: "Not required"
        }
      },
      {
        id: 5399,
        title: "Tio Young Entrepreneur Seed Grant",
        type: "Grant",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Seed funding award provided by Tio alumni network supporting the incorporation and launch of promising student startup ventures.",
        funding: "€3,500 non-dilutive seed capital and executive coaching",
        fee: "€0 application fee",
        tuition: "Direct entrepreneurial grant",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.tio.nl/en/about-tio/entrepreneurship/",
        requirements: {
          gpa: "Registered student in Tio business or hospitality degree with sound academic standing",
          ielts: "English or Dutch fluency",
          gre: "Not required",
          papers: "Complete business plan and live pitch presentation to investment committee",
          references: "Business faculty mentor endorsement"
        }
      },
      {
        id: 5400,
        title: "Amsterdam Corporate Digital Marketing Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Twenty-week digital marketing internship with tech startups, creative advertising agencies, or multinational brands in the Amsterdam metropolitan area.",
        funding: "€500 - €800 monthly company compensation",
        fee: "€0 application fee",
        tuition: "Integrated in degree curriculum",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.tio.nl/en/studying-at-tio/internships/",
        requirements: {
          gpa: "Completed 2nd year of digital marketing or business degree",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Digital marketing portfolio (social campaigns, analytics dashboards) and CV",
          references: "Tio career services approval"
        }
      }
    ],
    researchers: [
      {
        id: 2331,
        name: "Mark van de Gevel",
        title: "Managing Director and Member of the Executive Board",
        department: "Executive Directorate",
        subject: "social-sciences",
        interests: ["Private Higher Education Strategy", "Personalized Higher Education", "Hospitality Leadership"],
        summary: "Mark van de Gevel oversees academic quality, national accreditation, and operational strategy across all five Tio Business School campuses.",
        source: "https://www.tio.nl/over-tio/organisatie/",
        recruiting: "Not verified"
      },
      {
        id: 2332,
        name: "Dr. Herman van den Bosch",
        title: "Professor of Urban Innovation and Smart Logistics",
        department: "Faculty of International Business",
        subject: "social-sciences",
        interests: ["Urban Economic Innovation", "Sustainable Supply Chains", "Smart Business Ecosystems"],
        summary: "Dr. Herman van den Bosch publishes on urban innovation systems, sustainable freight logistics, and real estate economic transformations in European metropolises.",
        source: "https://www.tio.nl/over-tio/docenten/",
        recruiting: "Not verified"
      },
      {
        id: 2333,
        name: "Suzanne van Harten",
        title: "Head of Hospitality and Event Management Studies",
        department: "Faculty of Hospitality",
        subject: "social-sciences",
        interests: ["Luxury Hospitality Operations", "Sustainable Tourism Dynamics", "Service Design"],
        summary: "Suzanne van Harten directs international hospitality curricula, researching customer journey ergonomics, event crisis management, and luxury hospitality branding.",
        source: "https://www.tio.nl/over-tio/docenten/",
        recruiting: "Not verified"
      }
    ]
  },

  // 30. Netherlands: Drenthe College (Assen De Haar Campus)
  {
    institution: "Drenthe College (Assen De Haar Campus)",
    slug: "drenthe-college-assen",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1399,
    location: "Assen, Drenthe, Netherlands",
    website: "https://mbo.dcterra.nl",
    shortName: "Drenthe College Assen",
    badge: "Northern Netherlands Smart Mobility & Applied Technology Hub",
    overview: "Drenthe College, with its specialized technical campus on De Haar in Assen (Overijssel/Drenthe border adjacent to the world-famous TT Circuit Assen), is a leading regional institution of vocational and applied higher technical education. The Assen campus is internationally acclaimed for automotive engineering, smart mobility technologies, sustainable hydrogen powertrains, precision engineering, and health technologies.",
    lead: "Explore smart mobility engineering degrees, hydrogen automotive technologies, green energy diplomas, and Dutch technical study grants at Drenthe College Assen.",
    description: "Drenthe College Assen campus applied programs in automotive engineering, smart mobility, precision technology, healthcare, and Dutch education funding.",
    quickFacts: {
      type: "Public Regional Technical & Vocational College (Regionaal Opleidingencentrum - ROC)",
      campus: "De Haar Technology Campus, Assen, Drenthe, Netherlands",
      accreditation: "Dutch Ministry of Education, Culture and Science (OCW) / SBB",
      admissions: "VMBO, HAVO, or secondary technical diploma with technical intake assessment",
      language: "Dutch (B1/B2 level for vocational credentials); technical English utilized in mobility labs",
      aid: "Dutch DUO MBO Student Financing, Regional Technical Bursaries & Employer Apprenticeship Wages"
    },
    strengths: [
      "Center of Expertise for Smart Mobility and Automotive Engineering adjacent to TT Circuit Assen",
      "Pioneering hydrogen drivetrain testing facilities and battery energy storage research labs",
      "Dual track apprenticeship education (BBL) providing paid employer contracts throughout study",
      "High regional graduate placement rate with northern Dutch engineering and energy consortiums"
    ],
    programs: [
      { title: "Specialist Smart Mobility and Automotive Engineering (MBO Level 4)", level: "Associate / Vocational Diploma", desc: "Four-year advanced technical degree covering autonomous vehicle telemetry, EV battery diagnostics, CAN-bus networks, and hydrogen fuel cells." },
      { title: "Precision Engineering and Mechatronics Technology (MBO Level 4)", level: "Associate / Vocational Diploma", desc: "Comprehensive engineering diploma in CNC 5-axis machining, industrial robotics programming, PLC automation, and micro-precision mechanics." },
      { title: "Sustainable Energy Systems and Smart Grid Engineering", level: "Associate / Vocational Diploma", desc: "Applied technical curriculum focusing on solar thermal installations, industrial heat pump systems, and microgrid electrical distribution." }
    ],
    opportunities: [
      {
        id: 5401,
        title: "Northern Netherlands Technical Excellence Bursary",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Regional technical study award supporting talented students enrolling in smart mobility and sustainable energy engineering programs at Drenthe College Assen.",
        funding: "€1,200 annual grant plus specialized tool kit allowance",
        fee: "€0 application fee",
        tuition: "€1,419 statutory annual MBO tuition fee (wettelijk cursusgeld)",
        deadline: "2027-06-30",
        deadlineText: "June 30, 2027",
        source: "https://mbo.dcterra.nl/financiering-en-studiekosten",
        requirements: {
          gpa: "Satisfactory VMBO-GL/TL or HAVO graduation with strong mathematics and physics",
          ielts: "Dutch language proficiency (NT2 B1 or higher)",
          gre: "Not required",
          papers: "Secondary school certificate and technical motivation statement",
          references: "One technical instructor recommendation"
        }
      },
      {
        id: 5402,
        title: "Specialist Smart Mobility and Automotive Technology Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Four-year technical diploma preparing automotive diagnostic specialists in electric vehicle systems, hydrogen powertrains, and sensor telemetry.",
        funding: "Dutch DUO student finance and free national student public transport pass",
        fee: "€0 application fee",
        tuition: "€1,419 per academic year for students aged 18+",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://mbo.dcterra.nl/opleidingen/smart-mobility-autotechniek",
        requirements: {
          gpa: "VMBO Theoretical or Combined Pathway, or HAVO diploma",
          ielts: "Dutch B2 level",
          gre: "Not required",
          papers: "Enrollment contract and intake interview",
          references: "Not required"
        }
      },
      {
        id: 5403,
        title: "TT Circuit Assen Automotive Telemetry Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Twenty-week practical internship with motorsports testing facilities, vehicle homologation centers, and advanced automotive workshops at TT Circuit Assen.",
        funding: "€450 - €750 monthly practical training allowance",
        fee: "€0 application fee",
        tuition: "Curricular qualification requirement (BPV - Beroepspraktijkvorming)",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://mbo.dcterra.nl/stage-en-bpv",
        requirements: {
          gpa: "Enrolled in smart mobility or automotive technology program in good standing",
          ielts: "Dutch fluency",
          gre: "Not required",
          papers: "SBB-accredited training agreement and workplace safety certification",
          references: "College BPV coordinator approval"
        }
      },
      {
        id: 5404,
        title: "Precision Engineering and Mechatronics Enrolment",
        type: "Course",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "Four-year program providing training in high-precision micro-machining, automated robotic production cells, and pneumatic/hydraulic automation.",
        funding: "BBL dual-track provides full employer-paid wage throughout training",
        fee: "€0 application fee",
        tuition: "€1,419 per academic year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://mbo.dcterra.nl/opleidingen/mechatronica-precisietechniek",
        requirements: {
          gpa: "VMBO diploma with mathematics or science",
          ielts: "Dutch proficiency",
          gre: "Not required",
          papers: "Certificate of secondary education and intake check",
          references: "Not required"
        }
      },
      {
        id: 5405,
        title: "Northern Hydrogen Valley Clean Energy Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Sixteen-week industrial placement with northern Dutch green hydrogen initiatives, energy storage facilities, or industrial biogas refineries.",
        funding: "€500 monthly technical internship stipend",
        fee: "€0 application fee",
        tuition: "Part of sustainable energy curriculum",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://mbo.dcterra.nl/stage-en-bpv",
        requirements: {
          gpa: "Senior student in sustainable energy engineering",
          ielts: "Dutch proficiency",
          gre: "Not required",
          papers: "VCA safety passport and internship contract",
          references: "Practical tutor recommendation"
        }
      },
      {
        id: 5406,
        title: "Sustainable Energy Systems and Smart Grid Enrolment",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "Three-year technical degree in industrial heat pumps, solar microgrid installations, and battery energy storage management for climate-neutral buildings.",
        funding: "Eligible for Dutch climate transition workforce subsidies",
        fee: "€0 application fee",
        tuition: "€1,419 per academic year",
        deadline: "2027-07-15",
        deadlineText: "July 15, 2027",
        source: "https://mbo.dcterra.nl/opleidingen/duurzame-energie",
        requirements: {
          gpa: "VMBO certificate or equivalent technical foundation",
          ielts: "Dutch B1/B2",
          gre: "Not required",
          papers: "Secondary diploma and registration form",
          references: "Not required"
        }
      },
      {
        id: 5407,
        title: "Assen Smart Mobility Innovation Grant",
        type: "Grant",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Innovation grant supporting student capstone engineering teams developing solar electric prototypes or zero-emission urban delivery vehicles.",
        funding: "€2,000 project prototyping grant and workshop tooling access",
        fee: "€0 application fee",
        tuition: "Direct equipment prototyping grant",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://mbo.dcterra.nl/innovatie-en-projecten",
        requirements: {
          gpa: "Enrolled student team in final year of technical engineering program",
          ielts: "Dutch or technical English",
          gre: "Not required",
          papers: "Technical design schematic, bill of materials, and project roadmap",
          references: "Senior technical lab instructor endorsement"
        }
      }
    ],
    researchers: [
      {
        id: 2334,
        name: "Lukas Wolthuis",
        title: "Director of Technical Education and Mobility",
        department: "Department of Automotive and Smart Mobility",
        subject: "engineering",
        interests: ["Smart Mobility Systems", "Technical Vocational Pedagogies", "Regional Hydrogen Ecosystems"],
        summary: "Lukas Wolthuis directs technical education at the Assen campus, coordinating joint innovation projects with the TT Circuit Assen and regional automotive employers.",
        source: "https://mbo.dcterra.nl/over-ons/organisatie",
        recruiting: "Not verified"
      },
      {
        id: 2335,
        name: "Ing. Peter van der Veen",
        title: "Lead Instructor in Hydrogen and Electric Powertrains",
        department: "Department of Automotive Technology",
        subject: "engineering",
        interests: ["Fuel Cell Vehicle Diagnostics", "High-Voltage Safety Protocols", "Battery Energy Storage"],
        summary: "Ing. Peter van der Veen oversees high-voltage electric vehicle and hydrogen fuel cell diagnostic laboratories, training technicians in modern powertrain maintenance.",
        source: "https://mbo.dcterra.nl/docenten/peter-van-der-veen",
        recruiting: "Not verified"
      },
      {
        id: 2336,
        name: "Klaas Mulder",
        title: "Senior Lecturer in Precision Mechatronics and Automation",
        department: "Department of Mechatronics and Precision Engineering",
        subject: "engineering",
        interests: ["5-Axis CNC Machining", "Industrial Robotics Integration", "PLC Automation Networks"],
        summary: "Klaas Mulder instructs advanced precision engineering, mentoring students in automated robotic cells, computer-integrated manufacturing, and industrial quality control.",
        source: "https://mbo.dcterra.nl/docenten/klaas-mulder",
        recruiting: "Not verified"
      }
    ]
  }
];
