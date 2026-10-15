// Batch 40 - Part 3: Universities 21 to 30
// UK (2), Japan (4), Netherlands (4)
// Opps: 4498 to 4567 (70 opps)
// Researchers: 1947 to 1976 (30 researchers)

export const part3Universities = [
  // 21. UK: St Mary's University, London (Twickenham)
  {
    institution: "St Mary's University, London (Twickenham)",
    slug: "st-marys-university-london-twickenham",
    countryId: "uk",
    countryLabel: "United Kingdom",
    sourceRow: 1293,
    location: "Twickenham, London, United Kingdom",
    website: "https://www.stmarys.ac.uk",
    shortName: "St Mary's Twickenham",
    badge: "Sports Science, Education & Liberal Arts",
    overview: "Established in 1850 on the historic Strawberry Hill estate in Twickenham, Greater London, St Mary's University is a leading UK institution renowned for world-class sports science, Olympic athlete training, strength and conditioning, Catholic theology, and teacher education.",
    lead: "Explore sports rehabilitation master's degrees, Olympic athlete scholarships, and educational research programs at St Mary's University, Twickenham in London.",
    description: "St Mary's University London (Twickenham) sports science degrees, Olympic training facilities, strength and conditioning, and education in London.",
    quickFacts: {
      type: "Public University (Catholic Foundation)",
      campus: "Strawberry Hill Campus, Twickenham, South West London",
      accreditation: "Privy Council Degree-Awarding Powers / QAA / BASES",
      admissions: "St Mary's Admissions Office (UCAS Institution Code S64)",
      language: "English",
      aid: "Over £1.2 million in sports scholarships, postgraduate bursaries, and alumni fee discounts"
    },
    strengths: [
      "Sports science, biomechanics, and strength and conditioning (UKSCA accredited)",
      "High-performance endurance running (St Mary's Endurance Performance and Coaching Centre - EPACC)",
      "Primary and secondary teacher education (Ofsted Outstanding rating)",
      "Sports rehabilitation, physiotherapy, and human bioethics"
    ],
    programs: [
      { title: "Master of Science in Strength and Conditioning", level: "Graduate Degree", desc: "Internationally renowned graduate program training elite performance coaches for Premier League, Olympic, and NFL athletic organizations." },
      { title: "Bachelor of Science (Hons) in Sports Rehabilitation", level: "Undergraduate Degree", desc: "BASRaT-accredited clinical degree specializing in musculoskeletal injury diagnosis, manual therapy, and return-to-play rehabilitation." },
      { title: "Doctor of Philosophy (Ph.D.) in Sport, Health and Applied Science", level: "Doctoral Degree", desc: "Research doctorate examining exercise physiology, gait biomechanics, athlete monitoring, and sports psychology." }
    ],
    opportunities: [
      {
        id: 4498,
        title: "St Mary's EPACC High-Performance Athletic Sports Scholarship",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Elite athletic scholarship supporting national and international-standard athletes, providing world-class coaching, physiotherapy, and sport science support.",
        funding: "Up to £4,000 cash training bursary plus free physiotherapy, biomechanics testing, and strength & conditioning coaching",
        fee: "Free application for admitted students",
        tuition: "Standard tuition applies (fees covered through athletic trusts where applicable)",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.stmarys.ac.uk/sport/sports-scholarships.aspx",
        requirements: {
          gpa: "Admitted to a full-time undergraduate or postgraduate degree program at St Mary's",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Verified national or international competitive sports performance portfolio",
          references: "National governing body (NGB) or Olympic coach endorsement"
        },
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        location: "Twickenham, London, United Kingdom"
      },
      {
        id: 4499,
        title: "Doctoral Research Studentship in Exercise Physiology and Thermoregulation",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "engineering"],
        desc: "Three-year funded Ph.D. studentship in the Faculty of Sport, Technology and Health Sciences examining heat adaptation protocols in elite marathon runners.",
        funding: "£19,237 annual UKRI-aligned living stipend plus full home/international tuition fee waiver",
        fee: "Free direct application",
        tuition: "Fully covered",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.stmarys.ac.uk/research/postgraduate-research.aspx",
        requirements: {
          gpa: "First-class or upper second-class master's degree in exercise physiology, sports science, or human biology",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Detailed 2,000-word research proposal and sample physiological testing reports",
          references: "Two academic letters from sports science professors"
        },
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        location: "Twickenham, London, United Kingdom"
      },
      {
        id: 4500,
        title: "Master of Science in Strength and Conditioning Direct Admission",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "engineering"],
        desc: "One-year full-time or two-year blended graduate curriculum featuring extensive laboratory testing in the state-of-the-art Performance Education Centre.",
        funding: "St Mary's alumni discounts (20% tuition reduction) and British sports council bursaries",
        fee: "Free application",
        tuition: "£9,800 (UK Home) / £16,500 (International)",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.stmarys.ac.uk/postgraduate-courses/strength-and-conditioning",
        requirements: {
          gpa: "Undergraduate degree (minimum 2:1 honours) in sports science, physical education, or physiotherapy",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Curriculum vitae and personal statement detailing athletic coaching experience",
          references: "Two references from academic or professional sports performance heads"
        },
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        location: "Twickenham, London, United Kingdom"
      },
      {
        id: 4501,
        title: "Bachelor of Science in Sports Rehabilitation BASRaT Clinical Program",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Three-year undergraduate clinical degree completing 400+ clinical placement hours with professional rugby, football, and NHS clinics.",
        funding: "UK Government student finance loans covering full tuition and maintenance grants",
        fee: "£28.50 UCAS application fee",
        tuition: "£9,250 per year (Home) / £15,800 per year (International)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.stmarys.ac.uk/undergraduate-courses/sports-rehabilitation",
        requirements: {
          gpa: "BBB at A-level (or equivalent), including Biology, Physical Education, or Chemistry",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each skill)",
          gre: "Not required",
          papers: "Personal statement highlighting sports therapy or clinical shadowing experience",
          references: "One academic reference"
        },
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        location: "Twickenham, London, United Kingdom"
      },
      {
        id: 4502,
        title: "Teddington Sports Performance Laboratory Clinical Biomechanics Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "computer-science"],
        desc: "Six-month clinical internship operating 3D Vicon motion capture, force plates, and wireless electromyography (EMG) systems.",
        funding: "£850 monthly stipend plus clinical technician certification",
        fee: "Free application for enrolled sports science students",
        tuition: "Not applicable; funded clinical practicum",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.stmarys.ac.uk/research/",
        requirements: {
          gpa: "Enrolled in sports science, physiotherapy, or biomechanics degree with minimum 60% average",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Resume and technical summary of motion capture or biomechanics software familiarity",
          references: "One biomechanics faculty recommendation"
        },
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        location: "Twickenham, London, United Kingdom"
      },
      {
        id: 4503,
        title: "St Mary's International Student Merit Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Undergraduate and postgraduate entrance scholarship recognizing outstanding academic achievement from non-UK international applicants.",
        funding: "£3,000 fee waiver applied to first-year degree tuition fees",
        fee: "Free application upon academic offer acceptance",
        tuition: "Credit applied against standard international tuition",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.stmarys.ac.uk/international/fees-and-scholarships.aspx",
        requirements: {
          gpa: "High academic attainment in secondary or undergraduate studies (equivalent to UK 2:1 honours)",
          ielts: "IELTS 6.0 or 6.5 depending on program",
          gre: "Not required",
          papers: "500-word essay explaining why St Mary's and London are pivotal to career aspirations",
          references: "Not required"
        },
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        location: "Twickenham, London, United Kingdom"
      },
      {
        id: 4504,
        title: "Professional Certificate in Applied Sport Nutrition and Doping Prevention",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Ten-week evening certificate covering macronutrient periodization, supplement safety protocols, and WADA anti-doping regulations.",
        funding: "SENr professional continuing education credit recognized",
        fee: "Free application",
        tuition: "£850 total course fee",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.stmarys.ac.uk/short-courses/",
        requirements: {
          gpa: "Background in sports coaching, nutrition, fitness training, or medicine",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Registration form and vocational CV",
          references: "Not required"
        },
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        location: "Twickenham, London, United Kingdom"
      }
    ],
    researchers: [
      {
        id: 1947,
        name: "Prof. Anthony McClaran",
        title: "Vice-Chancellor of St Mary's University & Former Chief Executive of QAA",
        subject: "social-sciences",
        topics: ["Higher Education Regulation", "Quality Assurance", "International Higher Education Policy"],
        summary: "Vice-Chancellor of St Mary's and international higher education leader who previously served as Chief Executive of both the UK Quality Assurance Agency (QAA) and Australia's TEQSA.",
        source: "https://www.stmarys.ac.uk/about/leadership/vice-chancellor.aspx",
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        recruiting: "Not verified"
      },
      {
        id: 1948,
        name: "Prof. John Brewer",
        title: "Professor of Applied Sports Science & Olympic Exercise Physiologist",
        subject: "biology",
        topics: ["Endurance Physiology", "Sports Hydration", "Soccer Match Analytics"],
        summary: "Prominent British exercise physiologist who directed sports science for the England National Football Team and Olympic distance runners, researching hydration and performance kinetics.",
        source: "https://www.stmarys.ac.uk/staff-directory/john-brewer.aspx",
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        recruiting: "Not verified"
      },
      {
        id: 1949,
        name: "Dr. Stephen Patterson",
        title: "Associate Professor in Applied Sport and Exercise Physiology",
        subject: "biology",
        topics: ["Blood Flow Restriction Training", "Ischemic Preconditioning", "Muscle Hypertrophy"],
        summary: "Leading world researcher on blood flow restriction (BFR) training, examining vascular adaptations, accelerated rehabilitation, and neuromuscular recovery in elite athletes.",
        source: "https://www.stmarys.ac.uk/staff-directory/stephen-patterson.aspx",
        university: "St Mary's University, London (Twickenham)",
        country: "United Kingdom",
        recruiting: "Not verified"
      }
    ]
  },

  // 22. UK: University of East London (UEL)
  {
    institution: "University of East London (UEL)",
    slug: "university-of-east-london-uel",
    countryId: "uk",
    countryLabel: "United Kingdom",
    sourceRow: 1313,
    location: "Stratford & Docklands, London, United Kingdom",
    website: "https://www.uel.ac.uk",
    shortName: "UEL London",
    badge: "Careers-First Modern Polyvalent University",
    overview: "Based on dynamic waterfront campuses in Docklands and Stratford near London's tech and financial hubs, the University of East London (UEL) enrolls over 40,000 students across 160 countries. UEL is celebrated for its 'Vision 2028' career-first curriculum, pioneering research in sustainable engineering, artificial intelligence, psychology, and public health.",
    lead: "Explore computer science master's scholarships, sustainable civil engineering fellowships, and clinical psychology doctorates at the University of East London.",
    description: "University of East London (UEL) computer science degrees, sustainable engineering fellowships, and psychology doctorates in London.",
    quickFacts: {
      type: "Public Research University",
      campus: "Docklands Campus & Stratford Campus, East London",
      accreditation: "Privy Council Degree-Awarding Powers / QAA / BCS / BPS / ICE",
      admissions: "UEL Applicant Relations (UCAS Institution Code E28)",
      language: "English",
      aid: "Over £4 million awarded annually in UEL Vice-Chancellor's scholarships, tech bursaries, and alumni discounts"
    },
    strengths: [
      "Sustainable civil engineering and structural carbon reduction",
      "Artificial intelligence, cloud computing, and cybersecurity (BCS accredited)",
      "Psychology and behavioral sciences (BPS accredited, top modern UK department)",
      "Sports therapy, public health, and urban community nursing"
    ],
    programs: [
      { title: "Master of Science in Computer Science (Artificial Intelligence Track)", level: "Graduate Degree", desc: "One-year intensive or two-year industrial placement degree exploring deep neural networks, computer vision, and cloud computing." },
      { title: "Bachelor of Engineering (BEng Hons) in Civil Engineering", level: "Undergraduate Degree", desc: "Accredited engineering degree concentrating on urban infrastructure resilience, low-carbon materials, and BIM software modeling." },
      { title: "Doctor of Clinical Psychology (DClinPsy)", level: "Professional Doctorate", desc: "Rigorous HCPC and BPS-accredited doctorate with funded NHS clinical trainee contracts serving East London communities." }
    ],
    opportunities: [
      {
        id: 4505,
        title: "UEL Vice-Chancellor's International Postgraduate Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Flagship scholarship offering substantial tuition fee discounts for outstanding international students enrolling in full-time master's programs.",
        funding: "Up to £4,000 tuition fee discount applied directly to postgraduate tuition costs",
        fee: "Free direct application or via international representative",
        tuition: "£15,960 to £17,400 standard international master's tuition",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.uel.ac.uk/international/fees-and-funding/scholarships",
        requirements: {
          gpa: "Undergraduate degree equivalent to UK 2:1 honours or higher",
          ielts: "IELTS 6.5 overall (minimum 6.0 in all bands) or equivalent",
          gre: "Not required",
          papers: "Personal statement demonstrating future career contribution to United Nations Sustainable Development Goals",
          references: "Two academic or employer reference letters"
        },
        university: "University of East London (UEL)",
        country: "United Kingdom",
        location: "Stratford & Docklands, London, United Kingdom"
      },
      {
        id: 4506,
        title: "Sustainable Civil Infrastructure and Bio-Concrete Research Fellowship",
        type: "PhD",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Three-year funded Ph.D. studentship in the Sustainable Structural Engineering lab developing self-healing bacterial concrete and recycled aggregate composites.",
        funding: "£19,500 annual living stipend plus full home/overseas tuition waiver and €4,000 materials budget",
        fee: "Free application",
        tuition: "Full tuition covered",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.uel.ac.uk/research/postgraduate-research",
        requirements: {
          gpa: "First-class Master's degree in civil engineering, materials science, or environmental engineering",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Three-page research proposal detailing concrete durability testing or life cycle assessment methodology",
          references: "Two academic letters from civil engineering professors"
        },
        university: "University of East London (UEL)",
        country: "United Kingdom",
        location: "Stratford & Docklands, London, United Kingdom"
      },
      {
        id: 4507,
        title: "Master of Science in Computer Science with Industrial Placement",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Two-year degree including a guaranteed one-year paid placement at a London technology company or financial institution.",
        funding: "Industrial placement salaries typically between £24,000 and £32,000 during the work placement year",
        fee: "Free application",
        tuition: "£11,880 (Home) / £16,920 (International) for academic modules",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.uel.ac.uk/postgraduate/courses/msc-computer-science",
        requirements: {
          gpa: "Undergraduate degree in computer science, mathematics, or science with at least 2:2 honours",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Resume and technical statement of purpose explaining programming proficiency (Java, Python, C++)",
          references: "One academic or professional reference"
        },
        university: "University of East London (UEL)",
        country: "United Kingdom",
        location: "Stratford & Docklands, London, United Kingdom"
      },
      {
        id: 4508,
        title: "Bachelor of Engineering (BEng Hons) in Civil Engineering Direct Admission",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Three-year ABET and JBM-accredited curriculum utilizing state-of-the-art hydraulics, geotechnical, and concrete structures testing laboratories in Docklands.",
        funding: "UEL Engineering Foundation Scholarships up to £2,000 per year",
        fee: "£28.50 UCAS application fee",
        tuition: "£9,250 per year (Home) / £15,240 per year (International)",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.uel.ac.uk/undergraduate/courses/beng-civil-engineering",
        requirements: {
          gpa: "112 UCAS tariff points from at least two A-levels, including Mathematics or Physics",
          ielts: "IELTS 6.0 overall (minimum 5.5 in each component)",
          gre: "Not required",
          papers: "UCAS application and personal statement",
          references: "One academic school reference"
        },
        university: "University of East London (UEL)",
        country: "United Kingdom",
        location: "Stratford & Docklands, London, United Kingdom"
      },
      {
        id: 4509,
        title: "London Tech City Cloud Computing and DevOps Summer Internship",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Ten-week paid summer internship with UEL's Career Zone partnering with East London FinTech startups on AWS infrastructure automation.",
        funding: "£13.15 per hour (London Living Wage) for 35 hours per week",
        fee: "Free application for enrolled UEL computing students",
        tuition: "Not applicable; paid technical internship",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.uel.ac.uk/about/careers/career-zone",
        requirements: {
          gpa: "Second-year or postgraduate student in computer science with minimum 60% average",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Resume and GitHub link demonstrating Docker, CI/CD, or cloud scripting projects",
          references: "One computing lecturer recommendation"
        },
        university: "University of East London (UEL)",
        country: "United Kingdom",
        location: "Stratford & Docklands, London, United Kingdom"
      },
      {
        id: 4510,
        title: "Doctor of Clinical Psychology (DClinPsy) NHS Funded Traineeship",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Three-year full-time professional doctorate providing salaried NHS Band 6 trainee psychologist contracts while studying at Stratford.",
        funding: "Full NHS Band 6 salary (approx. £35,392 per annum plus London weighting) and complete university tuition fee coverage",
        fee: "Clearing House for Postgraduate Courses in Clinical Psychology fee applies",
        tuition: "Fully funded by NHS Health Education England",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026",
        source: "https://www.uel.ac.uk/postgraduate/courses/professional-doctorate-clinical-psychology",
        requirements: {
          gpa: "At least 2:1 honours degree in psychology conferring Graduate Basis for Chartered Membership (GBC) with BPS",
          ielts: "IELTS 7.0 overall (minimum 7.0 in writing and speaking)",
          gre: "Not required",
          papers: "Clearing house application demonstrating 12+ months full-time clinical psychology assistant experience",
          references: "One academic and one clinical psychologist reference"
        },
        university: "University of East London (UEL)",
        country: "United Kingdom",
        location: "Stratford & Docklands, London, United Kingdom"
      },
      {
        id: 4511,
        title: "Professional Certificate in Urban Artificial Intelligence and Smart City Sensing",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Eight-week technical certificate teaching IoT sensor networks, urban traffic computer vision, and geospatial data analytics for city planners.",
        funding: "East London Local Enterprise Partnership subsidies available",
        fee: "Free application",
        tuition: "£1,450 total certificate tuition",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.uel.ac.uk/study/short-courses",
        requirements: {
          gpa: "Foundational computer programming or municipal engineering background",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Registration form and statement of technical background",
          references: "Not required"
        },
        university: "University of East London (UEL)",
        country: "United Kingdom",
        location: "Stratford & Docklands, London, United Kingdom"
      }
    ],
    researchers: [
      {
        id: 1950,
        name: "Prof. Amanda Broderick",
        title: "Vice-Chancellor and President of University of East London",
        subject: "social-sciences",
        topics: ["Higher Education Innovation", "Global Marketing Psychology", "Careers-First Pedagogy"],
        summary: "President of UEL and international marketing psychology scholar driving the 'Vision 2028' strategic transformation to pioneer 5.0 careers-led higher education in the UK.",
        source: "https://www.uel.ac.uk/about/governance-leadership/vice-chancellor",
        university: "University of East London (UEL)",
        country: "United Kingdom",
        recruiting: "Not verified"
      },
      {
        id: 1951,
        name: "Prof. Hassan Abdalla",
        title: "Provost & Professor of Sustainable Design and Smart Cities",
        subject: "engineering",
        topics: ["Smart City Infrastructure", "Digital Twins", "Sustainable Architectural Computing"],
        summary: "Renowned engineer and academic provost leading research on smart city modeling, artificial intelligence in urban design, and lifecycle environmental optimization.",
        source: "https://www.uel.ac.uk/staff/hassan-abdalla",
        university: "University of East London (UEL)",
        country: "United Kingdom",
        recruiting: "Not verified"
      },
      {
        id: 1952,
        name: "Prof. Cynthia Fu",
        title: "Professor of Affective Disorders and Clinical Neuroscience",
        subject: "biology",
        topics: ["Functional Neuroimaging (fMRI)", "Depression Biomarkers", "Cognitive Behavioral Neural Predictors"],
        summary: "Eminent clinical neuroscientist utilizing functional MRI and machine learning to identify neuroimaging biomarkers that predict patient response to psychological and pharmacological therapies.",
        source: "https://www.uel.ac.uk/staff/cynthia-fu",
        university: "University of East London (UEL)",
        country: "United Kingdom",
        recruiting: "Not verified"
      }
    ]
  },

  // 23. Japan: Kokushikan University
  {
    institution: "Kokushikan University",
    slug: "kokushikan-university-tokyo",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1681,
    location: "Setagaya, Tokyo & Tama, Japan",
    website: "http://www.kokushikan.ac.jp",
    shortName: "Kokushikan Tokyo",
    badge: "Disaster Prevention, Physical Education & Asia-Japan Studies",
    overview: "Established in 1917 in Setagaya, Tokyo, Kokushikan University is a major private university renowned for martial arts and Olympic athletic training, emergency medical services, disaster prevention engineering, and international Asian studies.",
    lead: "Explore disaster prevention engineering degrees, emergency paramedic science fellowships, and international Asian studies at Kokushikan University in Tokyo.",
    description: "Kokushikan University disaster mitigation engineering, emergency paramedic sciences, and sports performance studies in Setagaya, Tokyo.",
    quickFacts: {
      type: "Private University",
      campus: "Setagaya Campus (Main), Machida Campus & Tama Campus, Tokyo",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "Kokushikan University Admissions Center (Nyushi Center)",
      language: "Japanese (with specialized English courses and Asian language programs)",
      aid: "Kokushikan Academic Merit Scholarships, MEXT international scholarships, and JASSO honors bursaries"
    },
    strengths: [
      "Disaster prevention, emergency medical technology, and paramedic training (first in Japan)",
      "Physical education, martial arts (Judo, Kendo), and Olympic athletic development",
      "Asia-Japan geopolitical relations and historical cultural studies",
      "Civil engineering, seismic resilience, and urban infrastructure design"
    ],
    programs: [
      { title: "Master of Engineering in Disaster Mitigation & Urban Safety", level: "Graduate Degree", desc: "Two-year research master's degree focusing on seismic structural retrofitting, earthquake engineering, and urban fire safety." },
      { title: "Bachelor of Science in Emergency Medical System (Paramedic Science)", level: "Undergraduate Degree", desc: "First 4-year degree in Japan qualifying graduates for the national paramedic examination (Kyukyu Kyumeishi)." },
      { title: "Master of Arts in Global Asian Studies", level: "Graduate Degree", desc: "Interdisciplinary graduate curriculum exploring East Asian diplomatic history, trade law, and cultural diplomacy." }
    ],
    opportunities: [
      {
        id: 4512,
        title: "Kokushikan University International Student Tuition Reduction Fellowship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Tuition reduction scholarship covering 30% to 50% of tuition fees for foreign students admitted to degree programs with outstanding academic records.",
        funding: "30% to 50% tuition reduction (saving approx. ¥300,000 to ¥500,000 per year) renewable based on annual GPA",
        fee: "¥30,000 entrance examination fee",
        tuition: "¥1,100,000 to ¥1,450,000 standard annual undergraduate tuition",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        source: "https://www.kokushikan.ac.jp/international/admissions/",
        requirements: {
          gpa: "Completed 12 years of formal schooling with strong academic performance",
          ielts: "Japanese Language Proficiency Test (JLPT) N2 or N1 (or EJU score 220+ in Japanese)",
          gre: "Not required",
          papers: "High school transcripts, EJU score sheet, and statement of academic purpose in Japanese",
          references: "One recommendation from secondary school principal or Japanese language school teacher"
        },
        university: "Kokushikan University",
        country: "Japan",
        location: "Setagaya, Tokyo & Tama, Japan"
      },
      {
        id: 4513,
        title: "Graduate Research Fellowship in Seismic Engineering and Urban Disaster Mitigation",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Two-year master's research fellowship at the Disaster Prevention Research Institute studying earthquake ground motion simulation and structural dampers.",
        funding: "¥100,000 monthly research stipend plus full access to shake table testing facilities in Machida",
        fee: "¥35,000 graduate application fee",
        tuition: "¥900,000 per academic year (tuition waiver grants available)",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.kokushikan.ac.jp/research/graduate/",
        requirements: {
          gpa: "Bachelor's degree in civil engineering, architecture, or geophysics with minimum 3.0/4.0 GPA",
          ielts: "JLPT N2 or IELTS 6.0 for international applicants",
          gre: "Not required",
          papers: "Undergraduate thesis summary and four-page research plan on earthquake resistance",
          references: "Two academic letters from civil engineering professors"
        },
        university: "Kokushikan University",
        country: "Japan",
        location: "Setagaya, Tokyo & Tama, Japan"
      },
      {
        id: 4514,
        title: "Emergency Medical System and Paramedic Science Degree Direct Admission",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Four-year undergraduate clinical degree combining hospital emergency department rotations, advanced life support simulations, and ambulance ride-alongs.",
        funding: "Tokyo Emergency Medical Foundation bursaries and Kokushikan athletic/academic merit awards",
        fee: "¥30,000",
        tuition: "¥1,450,000 per academic year",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.kokushikan.ac.jp/faculty/EMS/",
        requirements: {
          gpa: "High school graduation certificate and robust physical medical examination clearance",
          ielts: "Fluent native or near-native Japanese (JLPT N1)",
          gre: "Not required",
          papers: "High school transcripts and personal interview assessing emergency response aptitude",
          references: "Not required"
        },
        university: "Kokushikan University",
        country: "Japan",
        location: "Setagaya, Tokyo & Tama, Japan"
      },
      {
        id: 4515,
        title: "Master of Arts in Global Asian Studies Admission Pathway",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Two-year interdisciplinary degree exploring international political economy, cross-border security architecture, and cultural exchange across the Indo-Pacific.",
        funding: "JASSO International Student Monbukagakusho Honors Scholarship (¥48,000/month)",
        fee: "¥35,000",
        tuition: "¥750,000 per academic year",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kokushikan.ac.jp/faculty/GSAS/",
        requirements: {
          gpa: "Bachelor's degree in political science, history, international relations, or modern languages",
          ielts: "JLPT N1 or IELTS 6.5 depending on language track",
          gre: "Not required",
          papers: "Undergraduate degree thesis and 2,000-word proposed research plan",
          references: "One academic reference letter"
        },
        university: "Kokushikan University",
        country: "Japan",
        location: "Setagaya, Tokyo & Tama, Japan"
      },
      {
        id: 4516,
        title: "Tama Campus Olympic Athletic Training and Sports Biomechanics Internship",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Six-month research practicum in the Department of Physical Education analyzing kinematic movement efficiency in martial artists and track sprinters.",
        funding: "¥60,000 monthly living stipend plus full training facility access at Tama Sports Ground",
        fee: "Free application for enrolled physical education students",
        tuition: "Not applicable; athletic laboratory internship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.kokushikan.ac.jp/research/",
        requirements: {
          gpa: "Enrolled in sports science or physical education degree with good academic standing",
          ielts: "Japanese conversational fluency",
          gre: "Not required",
          papers: "Resume and short statement on sports biomechanics or coaching interests",
          references: "Faculty sports coach recommendation"
        },
        university: "Kokushikan University",
        country: "Japan",
        location: "Setagaya, Tokyo & Tama, Japan"
      },
      {
        id: 4517,
        title: "Kokushikan Founder Memorial Academic Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Annual merit award honoring university founder Tokutomi Soho, presented to the top 2% of enrolled undergraduates across all faculties.",
        funding: "¥300,000 cash grant awarded directly to student with no repayment obligation",
        fee: "Free internal application",
        tuition: "Covered through primary enrollment",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://www.kokushikan.ac.jp/campus_life/scholarship/",
        requirements: {
          gpa: "Minimum 3.5/4.0 GPA across all completed university terms",
          ielts: "Japanese language proficiency",
          gre: "Not required",
          papers: "Academic transcript and faculty dean nomination",
          references: "Faculty advisor signature"
        },
        university: "Kokushikan University",
        country: "Japan",
        location: "Setagaya, Tokyo & Tama, Japan"
      },
      {
        id: 4518,
        title: "Certificate in Community Disaster Response Management and Incident Command",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        desc: "Six-week intensive certificate training municipal emergency coordinators in evacuation shelter logistics, drone reconnaissance, and GIS mapping.",
        funding: "Tokyo Metropolitan Government disaster management subsidies applicable",
        fee: "¥10,000 application fee",
        tuition: "¥85,000 full course tuition",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.kokushikan.ac.jp/research/institutes/disaster/",
        requirements: {
          gpa: "Background in civil engineering, public safety, firefighting, or municipal administration",
          ielts: "Japanese fluency",
          gre: "Not required",
          papers: "Application form and proof of relevant employment",
          references: "Not required"
        },
        university: "Kokushikan University",
        country: "Japan",
        location: "Setagaya, Tokyo & Tama, Japan"
      }
    ],
    researchers: [
      {
        id: 1953,
        name: "Prof. Dr. Shunji Ouchi",
        title: "President of Kokushikan University & Professor of Political Science",
        subject: "social-sciences",
        topics: ["Constitutional Law", "Administrative Governance", "Higher Education Reform"],
        summary: "President of Kokushikan University and legal scholar leading institutional internationalization and strengthening research in urban disaster resilience and emergency healthcare.",
        source: "https://www.kokushikan.ac.jp/about/overview/president/",
        university: "Kokushikan University",
        country: "Japan",
        recruiting: "Not verified"
      },
      {
        id: 1954,
        name: "Prof. Dr. Hiroki Takahashi",
        title: "Professor of Disaster Prevention Engineering & Seismic Structures",
        subject: "engineering",
        topics: ["Seismic Isolation Systems", "Structural Vibration Control", "Earthquake Hazard Mitigation"],
        summary: "Structural engineer evaluating seismic base isolation systems and conducting large-scale shake table experiments to protect critical emergency response hospitals.",
        source: "https://www.kokushikan.ac.jp/research/researchers/",
        university: "Kokushikan University",
        country: "Japan",
        recruiting: "Not verified"
      },
      {
        id: 1955,
        name: "Prof. Dr. Hitoshi Tanaka",
        title: "Professor of Emergency Medical Systems & Prehospital Medicine",
        subject: "biology",
        topics: ["Prehospital Resuscitation", "Trauma Life Support", "Paramedic Protocol Optimization"],
        summary: "Pioneering emergency medicine physician designing national prehospital resuscitation algorithms and advancing paramedic clinical training curricula across Japan.",
        source: "https://www.kokushikan.ac.jp/faculty/EMS/professors/",
        university: "Kokushikan University",
        country: "Japan",
        recruiting: "Not verified"
      }
    ]
  },

  // 24. Japan: Kyoto Pharmaceutical University (Kyoyaku)
  {
    institution: "Kyoto Pharmaceutical University (Kyoyaku)",
    slug: "kyoto-pharmaceutical-university-kyoyaku",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1688,
    location: "Yamashina-ku, Kyoto, Japan",
    website: "https://www.kyoto-phu.ac.jp",
    shortName: "Kyoto Pharma (Kyoyaku)",
    badge: "Historic Premier Pharmaceutical Sciences University",
    overview: "Founded in 1884 as the Kyoto German School of Medicine and Pharmacy, Kyoto Pharmaceutical University (Kyoto Yakka Daigaku, known as Kyoyaku) is one of Japan's oldest and most prestigious private pharmaceutical institutions, celebrated for groundbreaking drug discovery chemistry, clinical pharmacotherapy, and cancer molecular biology.",
    lead: "Explore pharmaceutical doctoral fellowships, cancer drug discovery research, and clinical pharmacy degrees at Kyoto Pharmaceutical University in Yamashina, Kyoto.",
    description: "Kyoto Pharmaceutical University (Kyoyaku) pharmaceutical doctoral fellowships, drug discovery chemistry, and clinical pharmacology in Kyoto, Japan.",
    quickFacts: {
      type: "Private Specialized Pharmaceutical University",
      campus: "Misasagi & Nakauchi Campuses, Yamashina-ku, Kyoto",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT / JPEC",
      admissions: "Kyoto Pharmaceutical University Center for Admissions",
      language: "Japanese and English (graduate research tracks in English)",
      aid: "Kyoyaku Doctoral Research Fellowships, MEXT scholarships, and pharmaceutical industry endowed awards"
    },
    strengths: [
      "Synthetic organic chemistry and targeted drug discovery",
      "Cancer molecular biology, monoclonal antibodies, and precision oncology",
      "Clinical pharmacology, therapeutic drug monitoring, and hospital pharmacy",
      "Pharmaceutical nanotechnology and liposomal drug delivery systems"
    ],
    programs: [
      { title: "Doctor of Philosophy in Pharmaceutical Sciences (4-Year Ph.D.)", level: "Doctoral Degree", desc: "Advanced doctoral degree for pharmacists and molecular scientists researching novel bioactive compounds and clinical therapies." },
      { title: "Bachelor of Pharmacy (6-Year Clinical Pharmacist Track)", level: "Undergraduate Degree", desc: "Six-year professional degree leading to eligibility for the Japanese National Pharmacist Examination, with extensive hospital residencies." },
      { title: "Master of Pharmaceutical Sciences (2-Year Research Track)", level: "Graduate Degree", desc: "Two-year master's curriculum concentrating on medicinal chemistry, pharmacology, and biopharmaceutical formulation." }
    ],
    opportunities: [
      {
        id: 4519,
        title: "Kyoto Pharmaceutical University Four-Year Doctoral Research Fellowship",
        type: "PhD",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        desc: "Four-year fully funded doctoral fellowship supporting research in synthetic medicinal chemistry and molecular oncology drug targets.",
        funding: "Full tuition waiver plus ¥150,000 monthly living stipend and ¥500,000 annual laboratory reagent allowance",
        fee: "¥30,000 application fee",
        tuition: "Full tuition covered",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.kyoto-phu.ac.jp/graduate/guidelines/",
        requirements: {
          gpa: "Completion of 6-year pharmacy degree, master's degree in pharmaceutical/chemical sciences, or equivalent medical qualification",
          ielts: "IELTS 6.5 or TOEFL iBT 80 (or JLPT N2 for Japanese-track programs)",
          gre: "Not required",
          papers: "Master's thesis summary and four-page research proposal in medicinal chemistry or pharmacology",
          references: "Two academic letters from professors of pharmacy or chemistry"
        },
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        location: "Yamashina-ku, Kyoto, Japan"
      },
      {
        id: 4520,
        title: "Kyoyaku Alumni Foundation International Student Entrance Scholarship",
        type: "Scholarship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        desc: "Merit award sponsored by the Kyoyaku Alumni Association granting 50% tuition reduction to high-achieving foreign graduate students.",
        funding: "50% tuition reduction (approx. ¥450,000 annual financial value)",
        fee: "Free application upon admission",
        tuition: "Discount credited against standard graduate tuition",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.kyoto-phu.ac.jp/campuslife/scholarship/",
        requirements: {
          gpa: "Undergraduate degree in pharmacy, chemistry, biology, or pharmacology with top 20% class standing",
          ielts: "English B2 or Japanese JLPT N2",
          gre: "Not required",
          papers: "Undergraduate academic transcripts and personal motivation letter",
          references: "One academic faculty reference"
        },
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        location: "Yamashina-ku, Kyoto, Japan"
      },
      {
        id: 4521,
        title: "Master of Pharmaceutical Sciences (Medicinal Chemistry Track) Admission",
        type: "Master's",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        desc: "Two-year laboratory-centered graduate program training researchers in asymmetric catalytic synthesis, natural product isolation, and spectroscopic analysis.",
        funding: "Teaching assistantships (TA) and laboratory research assistantships (RA) providing ¥50,000 to ¥80,000 monthly",
        fee: "¥30,000",
        tuition: "¥890,000 per academic year",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kyoto-phu.ac.jp/graduate/",
        requirements: {
          gpa: "Bachelor's degree (4-year) in pharmacy, chemistry, biochemistry, or related STEM discipline",
          ielts: "TOEFL iBT 75 or IELTS 6.0",
          gre: "Not required",
          papers: "Certified academic transcripts and undergraduate research summary",
          references: "One academic reference letter from undergraduate supervisor"
        },
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        location: "Yamashina-ku, Kyoto, Japan"
      },
      {
        id: 4522,
        title: "Cancer Molecular Therapeutics and Nanomedicine Laboratory Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Two-year postdoctoral fellowship developing targeted antibody-drug conjugates (ADCs) and exosome-based nucleic acid delivery systems.",
        funding: "¥3,600,000 annual research salary plus shared analytical NMR and mass spectrometry facility access",
        fee: "Free application",
        tuition: "Not applicable; salaried postdoctoral appointment",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.kyoto-phu.ac.jp/research/",
        requirements: {
          gpa: "Ph.D. in pharmacology, molecular biology, or nanomedicine obtained within the last 5 years",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Curriculum vitae, list of peer-reviewed publications, and three-page research plan",
          references: "Two letters of recommendation from senior biomedical scholars"
        },
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        location: "Yamashina-ku, Kyoto, Japan"
      },
      {
        id: 4523,
        title: "Bachelor of Pharmacy (6-Year Clinical Track) Direct Admission",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Six-year comprehensive professional pharmacy program with clinical training at Kyoto University Hospital and leading regional medical centers.",
        funding: "Kyoyaku Special Scholarship granting full first-year tuition waiver to top entrance exam scorers",
        fee: "¥35,000",
        tuition: "¥1,850,000 per academic year",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        source: "https://www.kyoto-phu.ac.jp/admission/",
        requirements: {
          gpa: "Completed 12 years of formal education with strong chemistry, biology, and mathematics grades",
          ielts: "Native or near-native Japanese proficiency (JLPT N1 required for Japanese licensing)",
          gre: "Not required",
          papers: "High school transcripts and successful entrance examination score",
          references: "Not required"
        },
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        location: "Yamashina-ku, Kyoto, Japan"
      },
      {
        id: 4524,
        title: "Kyoto Bio-Venture and Drug Discovery Incubator Summer Practicum",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "computer-science"],
        desc: "Eight-week summer practicum collaborating with Kyoto research park pharmaceutical startups on high-throughput screening and computational drug docking.",
        funding: "¥150,000 total summer stipend plus computational cluster access",
        fee: "Free application for enrolled pharmacy students",
        tuition: "Not applicable; industry research internship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.kyoto-phu.ac.jp/research/collaboration/",
        requirements: {
          gpa: "Enrolled in 3rd year or higher of pharmacy degree or graduate student",
          ielts: "Japanese or English working proficiency",
          gre: "Not required",
          papers: "Resume and one-page letter explaining drug docking or chemical synthesis interests",
          references: "Faculty research advisor endorsement"
        },
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        location: "Yamashina-ku, Kyoto, Japan"
      },
      {
        id: 4525,
        title: "Postgraduate Certificate in Pharmacometrics and Clinical Drug Monitoring (TDM)",
        type: "Course",
        subject: "biology",
        subjects: ["biology", "mathematics"],
        desc: "Six-month certificate course for practicing hospital pharmacists on NONMEM pharmacokinetic modeling, therapeutic drug monitoring, and dose optimization.",
        funding: "Japan Society of Hospital Pharmacists (JSHP) professional credits recognized",
        fee: "¥15,000 application fee",
        tuition: "¥120,000 full course tuition",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.kyoto-phu.ac.jp/lifelong/",
        requirements: {
          gpa: "Pharmacist license (Japan or foreign equivalent) or master's degree in pharmaceutical science",
          ielts: "Japanese proficiency",
          gre: "Not required",
          papers: "Copy of professional pharmacist license and application form",
          references: "Not required"
        },
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        location: "Yamashina-ku, Kyoto, Japan"
      }
    ],
    researchers: [
      {
        id: 1956,
        name: "Prof. Dr. Tsuneo Sasai",
        title: "President of Kyoto Pharmaceutical University & Professor of Medicinal Chemistry",
        subject: "chemistry",
        topics: ["Medicinal Chemistry", "Asymmetric Organic Synthesis", "Bioactive Natural Products"],
        summary: "President of Kyoyaku and eminent pharmaceutical chemist leading novel catalytic synthesis routes for complex antitumor alkaloids and cardiovascular agents.",
        source: "https://www.kyoto-phu.ac.jp/about/president/",
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        recruiting: "Not verified"
      },
      {
        id: 1957,
        name: "Prof. Dr. Toshiaki Kume",
        title: "Professor of Pharmacology & Neurobiology",
        subject: "biology",
        topics: ["Neuropharmacology", "Neurodegenerative Disease Biomarkers", "Synaptic Plasticity"],
        summary: "Neuropharmacologist investigating molecular mechanisms of glutamate neurotoxicity, dopaminergic neuronal protection, and therapeutic targets for Parkinson's disease.",
        source: "https://www.kyoto-phu.ac.jp/labo/pharmacology/",
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        recruiting: "Not verified"
      },
      {
        id: 1958,
        name: "Prof. Dr. Akira Yamamoto",
        title: "Professor of Biopharmaceutics & Drug Delivery Systems",
        subject: "chemistry",
        topics: ["Liposomal Drug Delivery", "Mucosal Drug Absorption", "Peptide Formulation"],
        summary: "World authority on biopharmaceutics and advanced drug delivery systems, developing nano-carrier formulations to enhance oral and nasal bioavailability of macromolecular peptide drugs.",
        source: "https://www.kyoto-phu.ac.jp/labo/biopharmaceutics/",
        university: "Kyoto Pharmaceutical University (Kyoyaku)",
        country: "Japan",
        recruiting: "Not verified"
      }
    ]
  },

  // 25. Japan: Kyoto Sangyo University (KSU)
  {
    institution: "Kyoto Sangyo University (KSU)",
    slug: "kyoto-sangyo-university-ksu",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1691,
    location: "Kita-ku, Kyoto, Japan",
    website: "https://www.kyoto-su.ac.jp",
    shortName: "Kyoto Sangyo (KSU)",
    badge: "Astrophysics, Life Sciences & Computer Science",
    overview: "Founded in 1965 by eminent astrophysicist Dr. Toshio Araki with the counsel of Nobel laureate Hideki Yukawa, Kyoto Sangyo University is a comprehensive private university located on the scenic Kamigamo campus in northern Kyoto, internationally renowned for astrophysics (housing the Koyama Astronomical Observatory), life sciences, information science, and economics.",
    lead: "Explore astrophysics research fellowships, life sciences master's degrees, and computer science programs at Kyoto Sangyo University in Kyoto.",
    description: "Kyoto Sangyo University (KSU) astrophysics research, Koyama Astronomical Observatory fellowships, and computer science degrees in Kyoto, Japan.",
    quickFacts: {
      type: "Private Comprehensive Research University",
      campus: "Kamigamo Campus (Comprehensive single campus), Kita-ku, Kyoto",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "Kyoto Sangyo University Admissions Center",
      language: "Japanese and English (graduate research programs with English tracks)",
      aid: "KSU President's Scholarships, Koyama Astronomical Fellowships, and MEXT international grants"
    },
    strengths: [
      "Observational astrophysics and infrared spectroscopy (Koyama Astronomical Observatory 1.3m telescope)",
      "Life sciences, protein structural biology, and mitochondrial molecular research",
      "Computer science, networked embedded systems, and natural language processing",
      "International economics, business administration, and modern foreign languages"
    ],
    programs: [
      { title: "Master of Science in Astrophysics (Koyama Observatory Track)", level: "Graduate Degree", desc: "Two-year research master's degree utilizing the 1.3-meter Araki Telescope for infrared spectroscopy of comets, novae, and stellar atmospheres." },
      { title: "Doctor of Philosophy in Life Sciences (Ph.D.)", level: "Doctoral Degree", desc: "Four-year advanced research degree investigating mitochondrial biogenesis, protein folding mechanisms, and plant stress physiology." },
      { title: "Bachelor of Science in Information Science and Technology", level: "Undergraduate Degree", desc: "Four-year degree providing rigorous training in software architecture, cybersecurity, machine learning, and data engineering." }
    ],
    opportunities: [
      {
        id: 4526,
        title: "Koyama Astronomical Observatory Graduate Research Fellowship",
        type: "Fellowship",
        subject: "physics",
        subjects: ["physics", "computer-science"],
        desc: "Two-year graduate fellowship conducting observational astrophysics and developing near-infrared spectrographs on the 1.3-meter Araki Telescope.",
        funding: "¥120,000 monthly research stipend plus full access to optical instrumentation laboratories",
        fee: "¥35,000 application fee",
        tuition: "Full or 50% tuition waiver grants available for selected research fellows",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.kyoto-su.ac.jp/observatory/",
        requirements: {
          gpa: "Bachelor of Science in physics, astronomy, or mathematics with minimum 3.0/4.0 GPA",
          ielts: "IELTS 6.5 or TOEFL iBT 80 (or JLPT N2)",
          gre: "Not required",
          papers: "Undergraduate thesis summary and four-page research plan in observational astronomy",
          references: "Two academic letters from astronomy or physics professors"
        },
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        location: "Kita-ku, Kyoto, Japan"
      },
      {
        id: 4527,
        title: "KSU International Student Academic Excellence Tuition Reduction",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Merit-based tuition waiver granting 30% to 50% tuition reduction to outstanding international undergraduate and graduate matriculants.",
        funding: "30% to 50% tuition fee reduction (saving approx. ¥300,000 to ¥550,000 per academic year)",
        fee: "¥35,000 entrance examination fee",
        tuition: "Discount applied directly to annual tuition fees",
        deadline: "2026-12-10",
        deadlineText: "December 10, 2026",
        source: "https://www.kyoto-su.ac.jp/english/admissions/scholarship.html",
        requirements: {
          gpa: "Completed 12 years of education with high academic standing",
          ielts: "JLPT N2/N1 or EJU Japanese 220+ (or IELTS 6.0 for English graduate track)",
          gre: "Not required",
          papers: "High school transcripts, EJU score report, and personal motivation statement",
          references: "One academic reference letter"
        },
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        location: "Kita-ku, Kyoto, Japan"
      },
      {
        id: 4528,
        title: "Doctor of Philosophy in Life Sciences Research Studentship",
        type: "PhD",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Three-year doctoral research position at the Faculty of Life Sciences investigating protein translocases in mitochondrial membranes.",
        funding: "¥150,000 monthly fellowship stipend plus complete high-resolution cryo-electron microscopy access",
        fee: "¥35,000",
        tuition: "Tuition fully reimbursed through university graduate research fellowship",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kyoto-su.ac.jp/graduate/life_science/",
        requirements: {
          gpa: "Master of Science in molecular biology, biochemistry, or biophysics with minimum 3.2 GPA",
          ielts: "IELTS 6.5 or TOEFL iBT 85",
          gre: "Not required",
          papers: "Master's dissertation summary and list of scientific publications or conference presentations",
          references: "Two academic letters from tenured biological science professors"
        },
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        location: "Kita-ku, Kyoto, Japan"
      },
      {
        id: 4529,
        title: "Bachelor of Science in Information Science and Technology Admission",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Four-year comprehensive computer science curriculum offering specializations in Network Systems, Intelligent Information, and Media Informatics.",
        funding: "KSU STEM Innovation Scholarships providing ¥200,000 annual study grants",
        fee: "¥35,000",
        tuition: "¥1,390,000 per academic year",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.kyoto-su.ac.jp/faculty/ist/",
        requirements: {
          gpa: "High school graduation certificate with strong mathematics and physics preparation",
          ielts: "JLPT N2 or EJU Japanese certification",
          gre: "Not required",
          papers: "High school transcript and entrance examination score",
          references: "Not required"
        },
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        location: "Kita-ku, Kyoto, Japan"
      },
      {
        id: 4530,
        title: "Kyoto Infrared Astrophysics Laboratory Summer Research Practicum",
        type: "Internship",
        subject: "physics",
        subjects: ["physics", "computer-science"],
        desc: "Eight-week observational internship at the Koyama Observatory reducing stellar spectra and analyzing infrared emission lines from novae.",
        funding: "¥80,000 monthly stipend plus dorm accommodation at Kamigamo campus",
        fee: "Free application for enrolled physics and astronomy students",
        tuition: "Not applicable; funded research practicum",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.kyoto-su.ac.jp/observatory/",
        requirements: {
          gpa: "Enrolled in 3rd year or higher in physics or astronomy with Python programming experience",
          ielts: "English or Japanese fluency",
          gre: "Not required",
          papers: "Resume and one-page letter describing interest in astronomical spectroscopy",
          references: "Faculty mentor recommendation"
        },
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        location: "Kita-ku, Kyoto, Japan"
      },
      {
        id: 4531,
        title: "MEXT Monbukagakusho University Recommendation Scholarship at KSU",
        type: "Scholarship",
        subject: "physics",
        subjects: ["physics", "biology"],
        desc: "Prestigious Japanese Government scholarship for exceptional international graduate students recommended by Kyoto Sangyo University.",
        funding: "Full tuition waiver, round-trip international airfare, and ¥144,000 monthly living stipend",
        fee: "Free application",
        tuition: "100% government funded",
        deadline: "2026-11-20",
        deadlineText: "November 20, 2026",
        source: "https://www.kyoto-su.ac.jp/english/admissions/mext.html",
        requirements: {
          gpa: "Minimum 3.3/4.0 undergraduate or master's GPA",
          ielts: "IELTS 6.5 or TOEFL iBT 80",
          gre: "Not required",
          papers: "Formal MEXT application forms, comprehensive research plan, and official transcripts",
          references: "Dean's letter of recommendation from home university"
        },
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        location: "Kita-ku, Kyoto, Japan"
      },
      {
        id: 4532,
        title: "Certificate in High-Performance Python for Scientific Computing and Machine Learning",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "physics"],
        desc: "Eight-week technical certificate covering NumPy vectorization, GPU acceleration with CUDA, PyTorch, and distributed cluster computing.",
        funding: "KSU open learning technology grant available",
        fee: "¥10,000",
        tuition: "¥75,000 total course fee",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.kyoto-su.ac.jp/extension/",
        requirements: {
          gpa: "Basic proficiency in procedural programming (Python, C, or Java)",
          ielts: "English or Japanese comprehension",
          gre: "Not required",
          papers: "Registration form and programming background checklist",
          references: "Not required"
        },
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        location: "Kita-ku, Kyoto, Japan"
      }
    ],
    researchers: [
      {
        id: 1959,
        name: "Prof. Dr. Tomotaka Kurosawa",
        title: "President of Kyoto Sangyo University & Professor of Legal Philosophy",
        subject: "social-sciences",
        topics: ["Philosophy of Law", "University Governance", "Comparative Jurisprudence"],
        summary: "President of Kyoto Sangyo University advancing interdisciplinary science on the unified Kamigamo campus and expanding international astronomical and life sciences research.",
        source: "https://www.kyoto-su.ac.jp/about/president/",
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        recruiting: "Not verified"
      },
      {
        id: 1960,
        name: "Prof. Dr. Hideyo Kawakita",
        title: "Director of the Koyama Astronomical Observatory & Professor of Astrophysics",
        subject: "physics",
        topics: ["Cometary Astronomy", "Near-Infrared Spectroscopy", "Solar System Formation"],
        summary: "World-renowned planetary astrophysicist investigating the chemical composition of cometary volatiles and ice sublimation using infrared spectroscopy to understand the origins of water in the solar system.",
        source: "https://www.kyoto-su.ac.jp/observatory/staff.html",
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        recruiting: "Not verified"
      },
      {
        id: 1961,
        name: "Prof. Dr. Toshiya Endo",
        title: "Professor of Life Sciences & Senior Structural Biologist",
        subject: "biology",
        topics: ["Mitochondrial Protein Import", "Structural Cell Biology", "Cryo-EM Biomolecular Architecture"],
        summary: "Celebrated structural biologist resolving the molecular architecture of the TOM and TIM protein import complexes in mitochondrial membranes using high-resolution cryo-electron microscopy.",
        source: "https://www.kyoto-su.ac.jp/faculty/prof/endo.html",
        university: "Kyoto Sangyo University (KSU)",
        country: "Japan",
        recruiting: "Not verified"
      }
    ]
  },

  // 26. Japan: Kyoto Seika University
  {
    institution: "Kyoto Seika University",
    slug: "kyoto-seika-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1692,
    location: "Sakyo-ku, Kyoto, Japan",
    website: "https://www.kyoto-seika.ac.jp",
    shortName: "Kyoto Seika",
    badge: "World Pioneer in Manga, Animation & Contemporary Arts",
    overview: "Established in 1968 in northern Kyoto, Kyoto Seika University is globally renowned as the world's first university to establish an academic Faculty of Manga and a graduate doctoral program in Manga Studies. It operates the famous Kyoto International Manga Museum in partnership with the City of Kyoto and provides premier degrees in contemporary visual art, animation, product design, and architectural humanities.",
    lead: "Explore manga and animation graduate fellowships, contemporary art degrees, and design research programs at Kyoto Seika University in Kyoto.",
    description: "Kyoto Seika University manga studies doctoral fellowships, animation production degrees, and contemporary design in Sakyo-ku, Kyoto.",
    quickFacts: {
      type: "Private Art & Design University",
      campus: "Iwakura Campus, Sakyo-ku, Kyoto (with Kyoto International Manga Museum)",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "Kyoto Seika University Admissions Office",
      language: "Japanese and English (international artist tracks available)",
      aid: "Seika Creative Excellence Scholarships, international tuition reduction, and JASSO grants"
    },
    strengths: [
      "Faculty of Manga: comic art, character design, and academic Manga Studies (Ph.D.)",
      "Animation production, CGI character rigging, and stop-motion filmmaking",
      "Traditional and contemporary Kyoto crafts (ceramics, textiles, printmaking)",
      "Architecture, interior design, and environmental visual communication"
    ],
    programs: [
      { title: "Doctor of Philosophy in Manga Studies (Ph.D.)", level: "Doctoral Degree", desc: "First-in-the-world doctoral degree examining manga semiotics, visual storytelling grammar, and global popular culture history." },
      { title: "Master of Fine Arts in Animation & Digital Media", level: "Graduate Degree", desc: "Two-year studio master's degree developing original animated short films, character animation, and experimental narrative media." },
      { title: "Bachelor of Arts in Character Design & Comic Art", level: "Undergraduate Degree", desc: "Studio-intensive four-year degree training professional manga creators, illustrators, and visual concept artists." }
    ],
    opportunities: [
      {
        id: 4533,
        title: "Kyoto Seika International Manga Studies Doctoral Fellowship",
        type: "PhD",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Three-year doctoral research fellowship at the International Manga Research Center investigating global graphic narrative theory and archival curation.",
        funding: "Full tuition waiver plus ¥120,000 monthly living stipend and access to the Kyoto International Manga Museum archives",
        fee: "¥35,000 application fee",
        tuition: "Full tuition covered",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        source: "https://www.kyoto-seika.ac.jp/graduate/manga/",
        requirements: {
          gpa: "Master's degree in visual arts, literature, cultural studies, or art history with minimum 3.2 GPA",
          ielts: "JLPT N1 or IELTS 6.5 (dissertations may be submitted in Japanese or English)",
          gre: "Not required",
          papers: "Master's thesis and comprehensive doctoral research plan on manga aesthetics or cross-cultural reception",
          references: "Two academic letters from professors of art, literature, or media studies"
        },
        university: "Kyoto Seika University",
        country: "Japan",
        location: "Sakyo-ku, Kyoto, Japan"
      },
      {
        id: 4534,
        title: "Seika International Student Creative Talent Scholarship",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Merit award offering 30% to 50% tuition reduction for talented foreign artists and designers admitted to Kyoto Seika undergraduate or master's programs.",
        funding: "30% to 50% tuition fee reduction (saving approx. ¥400,000 to ¥650,000 per academic year)",
        fee: "¥35,000 entrance examination fee",
        tuition: "Credit applied directly against annual tuition fees",
        deadline: "2026-12-05",
        deadlineText: "December 5, 2026",
        source: "https://www.kyoto-seika.ac.jp/eng/admissions/scholarships/",
        requirements: {
          gpa: "High school diploma or university degree with exceptional creative portfolio",
          ielts: "JLPT N2 (or EJU Japanese score 220+)",
          gre: "Not required",
          papers: "Creative art and design portfolio (10–15 original works) and personal statement in Japanese",
          references: "Not required"
        },
        university: "Kyoto Seika University",
        country: "Japan",
        location: "Sakyo-ku, Kyoto, Japan"
      },
      {
        id: 4535,
        title: "Master of Fine Arts in Animation Studio Production Direct Admission",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Two-year studio degree with dedicated digital animation workstations, multiplane camera rigs, and sound design suites in Iwakura.",
        funding: "Studio teaching assistantships and Japanese anime industry production grants available",
        fee: "¥35,000",
        tuition: "¥1,350,000 per academic year",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        source: "https://www.kyoto-seika.ac.jp/graduate/art/animation.html",
        requirements: {
          gpa: "Bachelor's degree in animation, film, visual art, or related field",
          ielts: "JLPT N2 minimum for studio instruction",
          gre: "Not required",
          papers: "Showreel (animated film samples or storyboard portfolio) and two-page proposed graduation film treatment",
          references: "One academic faculty reference"
        },
        university: "Kyoto Seika University",
        country: "Japan",
        location: "Sakyo-ku, Kyoto, Japan"
      },
      {
        id: 4536,
        title: "Bachelor of Arts in Character Design & Comic Art Admission Pathway",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Four-year specialized degree teaching anatomical figure drawing, digital clip studio paint workflow, and narrative serialization.",
        funding: "President's Excellence in Manga Entrance Grants up to ¥300,000",
        fee: "¥35,000",
        tuition: "¥1,450,000 per academic year",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.kyoto-seika.ac.jp/faculty/manga/character_design/",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "JLPT N2 or EJU Japanese 220+",
          gre: "Not required",
          papers: "Physical or digital portfolio containing character model sheets, colored illustrations, and short manga drafts",
          references: "Not required"
        },
        university: "Kyoto Seika University",
        country: "Japan",
        location: "Sakyo-ku, Kyoto, Japan"
      },
      {
        id: 4537,
        title: "Kyoto International Manga Museum Curatorial and Archival Internship",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Six-month curatorial internship preserving historical pre-war manga, cataloging foreign translation editions, and designing public museum exhibits.",
        funding: "¥70,000 monthly living stipend plus full behind-the-scenes museum archival access",
        fee: "Free application for enrolled Seika students",
        tuition: "Not applicable; museum practicum",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://kyotomm.jp/en/",
        requirements: {
          gpa: "Enrolled in 3rd year or higher in manga studies, art history, or museum curation",
          ielts: "Japanese fluency (JLPT N1)",
          gre: "Not required",
          papers: "Resume and one-page statement on manga history preservation interest",
          references: "Faculty advisor recommendation"
        },
        university: "Kyoto Seika University",
        country: "Japan",
        location: "Sakyo-ku, Kyoto, Japan"
      },
      {
        id: 4538,
        title: "Traditional Kyoto Ceramic and Textile Craft Masterclass Residency",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "chemistry"],
        desc: "One-year residential fellowship learning wood-fired Anagama kiln pottery and traditional Yuzen silk dyeing from certified Kyoto Living National Treasures.",
        funding: "¥1,200,000 annual artistic materials stipend plus dedicated studio space",
        fee: "Free application",
        tuition: "Covered through craft foundation endowment",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.kyoto-seika.ac.jp/faculty/art/craft/",
        requirements: {
          gpa: "Graduate degree in ceramics, textile arts, or sculptural craft",
          ielts: "Conversational Japanese",
          gre: "Not required",
          papers: "Artistic portfolio showcasing mastery of clay throwing, wood kiln firing, or fiber dyeing",
          references: "Two letters of recommendation from master craftspeople or art academy professors"
        },
        university: "Kyoto Seika University",
        country: "Japan",
        location: "Sakyo-ku, Kyoto, Japan"
      },
      {
        id: 4539,
        title: "Certificate in Digital 3D Character Sculpting with ZBrush and Maya",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "Eight-week technical certificate teaching digital anatomy sculpting, sub-surface scattering skin shaders, and game engine asset export.",
        funding: "Game industry partner tuition subsidies available",
        fee: "¥10,000",
        tuition: "¥95,000 total course fee",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.kyoto-seika.ac.jp/extension/",
        requirements: {
          gpa: "Fundamental 2D drawing or 3D digital software familiarity",
          ielts: "Japanese comprehension",
          gre: "Not required",
          papers: "Registration form and portfolio of digital sketches or 3D tests",
          references: "Not required"
        },
        university: "Kyoto Seika University",
        country: "Japan",
        location: "Sakyo-ku, Kyoto, Japan"
      }
    ],
    researchers: [
      {
        id: 1962,
        name: "Prof. Oussouby Sacko",
        title: "Former President & Professor of Architecture and Urban Anthropology",
        subject: "arts-design",
        topics: ["Urban Space Architecture", "Community Cultural Preservation", "Cross-Cultural Design Pedagogy"],
        summary: "Celebrated Malian-Japanese architect and educator who served as President of Kyoto Seika University, pioneering inclusive cross-cultural arts education and urban design.",
        source: "https://www.kyoto-seika.ac.jp/faculty/sacko_oussouby/",
        university: "Kyoto Seika University",
        country: "Japan",
        recruiting: "Not verified"
      },
      {
        id: 1963,
        name: "Prof. Jaqueline Berndt",
        title: "Visiting Professor of Manga Studies & Japanese Popular Culture",
        subject: "arts-design",
        topics: ["Manga Semiotics", "Comics Theory", "Japanese Media Studies"],
        summary: "Internationally renowned scholar of manga aesthetics, graphic narratives, and contemporary Japanese visual culture, publishing seminal works on manga criticism.",
        source: "https://www.kyoto-seika.ac.jp/research/manga/",
        university: "Kyoto Seika University",
        country: "Japan",
        recruiting: "Not verified"
      },
      {
        id: 1964,
        name: "Prof. Keiko Takemiya",
        title: "Professor Emerita of Manga & Former President of Kyoto Seika University",
        subject: "arts-design",
        topics: ["Pioneering Shōjo Manga", "Visual Narrative Composition", "Genga Art Preservation"],
        summary: "Legendary manga artist, member of the Year 24 Group, and former university president who pioneered intellectual legitimacy for manga studies and established the 'Genga' original artwork preservation project.",
        source: "https://www.kyoto-seika.ac.jp/about/history/",
        university: "Kyoto Seika University",
        country: "Japan",
        recruiting: "Not verified"
      }
    ]
  },

  // 27. Netherlands: Netherlands Institute for Sound and Vision (Beeld & Geluid)
  {
    institution: "Netherlands Institute for Sound and Vision",
    slug: "netherlands-institute-for-sound-and-vision-beeld-en-geluid",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1460,
    location: "Hilversum & The Hague, North Holland, Netherlands",
    website: "https://beeldengeluid.nl",
    shortName: "Sound & Vision Hilversum",
    badge: "National Audiovisual Media Research & Digital Heritage",
    overview: "Located in the iconic stained-glass building at the Media Park in Hilversum with an additional museum site in The Hague, the Netherlands Institute for Sound and Vision (Nederlands Instituut voor Beeld en Geluid) is Europe's largest audiovisual media archive. It functions as an accredited national research institute and university consortium partner, steward to over one million hours of television, radio, music, and digital games, and a pioneer in AI-assisted media archiving, news literacy, and digital cultural analytics.",
    lead: "Explore digital media research fellowships, audiovisual AI archival grants, and media history internships at Sound and Vision in Hilversum.",
    description: "Netherlands Institute for Sound and Vision (Beeld & Geluid) digital media research, AI archival analytics, and media history in Hilversum.",
    quickFacts: {
      type: "National Cultural & Media Research Institute (CLARIAH / NWO consortium partner)",
      campus: "Media Park, Hilversum & Zeestraat, The Hague, Netherlands",
      accreditation: "Dutch Ministry of Education, Culture and Science (OCW) / Europeana Partner",
      admissions: "Sound and Vision Research & Education Board",
      language: "Dutch and English",
      aid: "NWO digital humanities grants, Horizon Europe Marie Skłodowska-Curie fellowships, and CLARIAH bursaries"
    },
    strengths: [
      "Artificial intelligence for audiovisual data mining, automated speech-to-text, and computer vision",
      "Digital humanities and big data analysis of Dutch broadcasting history",
      "Media literacy, digital disinformation tracking, and journalistic ethics",
      "Video game preservation, interactive media archiving, and virtual reality heritage"
    ],
    programs: [
      { title: "Sound & Vision Visiting Research Fellowship in Digital Audiovisual Heritage", level: "Postdoctoral Fellowship", desc: "Three-to-six-month residential fellowship utilizing computational access to the 1-million-hour Dutch national media archive." },
      { title: "CLARIAH Graduate Research Internship in Media Analytics & NLP", level: "Graduate Practicum", desc: "Collaborative master's research placement applying natural language processing and computer vision to historical news broadcasts." },
      { title: "Executive Masterclass in AI-Driven Audiovisual Archiving & FAIR Data", level: "Professional Certificate", desc: "Specialized training for broadcast archivists, librarians, and museum curators on automated metadata extraction." }
    ],
    opportunities: [
      {
        id: 4540,
        title: "Sound and Vision Residential Research Fellowship in Digital Media History",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Six-month funded fellowship at the Hilversum Media Park analyzing longitudinal political debates, public broadcasting evolution, or digital culture.",
        funding: "€2,500 monthly research stipend plus dedicated workstation and complete uncompressed API access to national media archives",
        fee: "Free application",
        tuition: "Not applicable; funded research appointment",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.beeldengeluid.nl/en/knowledge/research",
        requirements: {
          gpa: "Ph.D. or advanced doctoral candidate in media studies, digital humanities, history, or computer science",
          ielts: "English fluency (Dutch reading ability advantageous)",
          gre: "Not required",
          papers: "Four-page research proposal detailing computational dataset requirements and analytical methodology",
          references: "Two academic letters from professors of media studies or history"
        },
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        location: "Hilversum & The Hague, North Holland, Netherlands"
      },
      {
        id: 4541,
        title: "CLARIAH-NL Audiovisual AI and Multimodal Machine Learning PhD Grant",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Four-year cooperative doctoral position with University of Amsterdam (UvA) developing multimodal transformers to index historical broadcast archives.",
        funding: "Full Dutch university collective labor agreement salary (€2,770 to €3,539/month gross) plus pension and holiday allowances",
        fee: "Free application",
        tuition: "Zero tuition under Dutch university employment regulations",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.beeldengeluid.nl/en/knowledge/projects",
        requirements: {
          gpa: "Master of Science in computer science, artificial intelligence, or computational linguistics with minimum 7.5/10 (Dutch scale)",
          ielts: "IELTS 7.0 or TOEFL iBT 100",
          gre: "Not required",
          papers: "Master's thesis and GitHub repository showcasing deep learning (PyTorch, HuggingFace, or OpenCV)",
          references: "Two letters of recommendation from AI or computer science faculty"
        },
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        location: "Hilversum & The Hague, North Holland, Netherlands"
      },
      {
        id: 4542,
        title: "Digital Game Preservation and Interactive Software Archiving Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "Six-month technical internship in Hilversum developing emulation environments, disc imaging, and oral history documentation for Dutch video game heritage.",
        funding: "€600 monthly internship allowance plus public transport card reimbursement",
        fee: "Free application for enrolled master's students",
        tuition: "Not applicable; curricular placement",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.beeldengeluid.nl/over/werken-bij/stages",
        requirements: {
          gpa: "Enrolled in master's in game studies, information science, software preservation, or heritage studies",
          ielts: "English or Dutch working fluency",
          gre: "Not required",
          papers: "Resume and short cover letter detailing digital preservation, hardware emulation, or retro-computing skills",
          references: "One academic faculty reference"
        },
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        location: "Hilversum & The Hague, North Holland, Netherlands"
      },
      {
        id: 4543,
        title: "News Disinformation and Deepfake Verification Research Grant",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Twelve-month grant at the The Hague Media Museum evaluating automated deepfake detection algorithms and civic media literacy tools.",
        funding: "€32,000 project grant over one year with European Digital Media Observatory (EDMO) co-sponsorship",
        fee: "Free application",
        tuition: "Not applicable; funded research appointment",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.beeldengeluid.nl/en/knowledge/news-and-journalism",
        requirements: {
          gpa: "Master's or Ph.D. in journalism, communication science, cognitive psychology, or data science",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Three-page research proposal on visual synthetic media verification protocols",
          references: "Two letters of recommendation from academic or journalistic authorities"
        },
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        location: "Hilversum & The Hague, North Holland, Netherlands"
      },
      {
        id: 4544,
        title: "Broadcast Media Oral History and Community Storytelling Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Nine-month project capturing oral histories of immigrant radio broadcasters, sound engineers, and underground pirate radio stations in the Netherlands.",
        funding: "€22,000 research award plus high-grade audio recording equipment and field logistics",
        fee: "Free application",
        tuition: "Not applicable; fellowship grant",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.beeldengeluid.nl/en/knowledge/research",
        requirements: {
          gpa: "Master's degree in cultural history, anthropology, or media studies",
          ielts: "Fluent Dutch and English",
          gre: "Not required",
          papers: "Demonstrated experience with audio interviewing and biographical qualitative methods",
          references: "Two academic letters of recommendation"
        },
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        location: "Hilversum & The Hague, North Holland, Netherlands"
      },
      {
        id: 4545,
        title: "Automated Subtitling and Speech Recognition Benchmark Internship",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Four-month data science internship benchmarking open-source Whisper and Kaldi speech recognition models against historical regional Dutch dialects.",
        funding: "€550 monthly allowance plus compute cluster access",
        fee: "Free application",
        tuition: "Not applicable; internship placement",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.beeldengeluid.nl/over/werken-bij/stages",
        requirements: {
          gpa: "Enrolled in computer science, computational linguistics, or data science",
          ielts: "Dutch listening comprehension and Python data skills",
          gre: "Not required",
          papers: "Resume and code sample demonstrating audio processing (librosa, PyTorch Audio, etc.)",
          references: "University professor endorsement"
        },
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        location: "Hilversum & The Hague, North Holland, Netherlands"
      },
      {
        id: 4546,
        title: "Executive Masterclass in Audiovisual Metadata Enrichment and Semantic Web",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Four-day intensive professional workshop for international broadcasters on Wikidata integration, Linked Open Data (LOD), and automated visual tagging.",
        funding: "European Broadcasting Union (EBU) member discounts available",
        fee: "Free application",
        tuition: "€950 course tuition fee",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.beeldengeluid.nl/en/knowledge/academy",
        requirements: {
          gpa: "Employed in digital archiving, media production, or information management",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Registration form and professional biography",
          references: "Not required"
        },
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        location: "Hilversum & The Hague, North Holland, Netherlands"
      }
    ],
    researchers: [
      {
        id: 1965,
        name: "Eppo van Nispen tot Sevenaer",
        title: "General Director of Sound and Vision & Media Innovation Leader",
        subject: "social-sciences",
        topics: ["Digital Cultural Heritage", "Media Literacy Governance", "Public Broadcasting Preservation"],
        summary: "General Director of Sound and Vision, stewarding the modernization of the national audiovisual archives, spearheading the Museum in The Hague, and promoting nationwide media literacy.",
        source: "https://www.beeldengeluid.nl/over/organisatie/directie",
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        recruiting: "Not verified"
      },
      {
        id: 1966,
        name: "Dr. Johan Oomen",
        title: "Head of Research and Heritage & Professor of Digital Humanities",
        subject: "computer-science",
        topics: ["Audiovisual Archival AI", "Linked Open Data", "Crowdsourced Heritage"],
        summary: "Pioneering digital humanities researcher leading international consortia (CLARIAH, Europeana) in applying automated speech recognition, computer vision, and semantic web models to cultural heritage.",
        source: "https://www.beeldengeluid.nl/en/knowledge/our-experts/johan-oomen",
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        recruiting: "Not verified"
      },
      {
        id: 1967,
        name: "Dr. Berber Hagedoorn",
        title: "Senior Research Fellow & Assistant Professor in Media Studies",
        subject: "social-sciences",
        topics: ["Television History", "Multiplatform Storytelling", "Comparative Digital Media Archiving"],
        summary: "Media scholar investigating European television history, transmedia narrative structures, and innovative methodology for user engagement with digital broadcast repositories.",
        source: "https://www.beeldengeluid.nl/en/knowledge/research",
        university: "Netherlands Institute for Sound and Vision",
        country: "Netherlands",
        recruiting: "Not verified"
      }
    ]
  },

  // 28. Netherlands: Netherlands Institute of Governance (NIG)
  {
    institution: "Netherlands Institute of Governance (NIG)",
    slug: "netherlands-institute-of-governance-nig",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1461,
    location: "Enschede, The Hague & Utrecht, Netherlands",
    website: "https://www.nigovernance.nl",
    shortName: "NIG Governance School",
    badge: "Inter-University Research School in Public Administration & Political Science",
    overview: "The Netherlands Institute of Governance (Nederlands Instituut voor Governance - NIG) is the accredited Dutch-Flemish inter-university research school in public administration and political science. Recognized by the Royal Netherlands Academy of Arts and Sciences (KNAW) and coordinated from the University of Twente in partnership with Utrecht, Leiden, Erasmus University Rotterdam, and Belgian universities (KU Leuven, Antwerp, Ghent), NIG trains doctoral researchers and advances comparative public policy.",
    lead: "Explore doctoral research fellowships, public policy masterclasses, and governance analytics programs at the Netherlands Institute of Governance.",
    description: "Netherlands Institute of Governance (NIG) inter-university public administration research, doctoral training programs, and political science across Dutch universities.",
    quickFacts: {
      type: "KNAW-Accredited Inter-University Research School (11 Dutch & Flemish Universities)",
      campus: "Administrative Secretariat at University of Twente (Enschede), with active nodes in The Hague and Utrecht",
      accreditation: "Royal Netherlands Academy of Arts and Sciences (KNAW) / EAPAA",
      admissions: "NIG Academic Board and Doctoral Training Committee",
      language: "English and Dutch",
      aid: "NWO research talent grants, EU Horizon Europe doctoral funding, and NIG training subsidies"
    },
    strengths: [
      "Comparative public administration, bureaucratic accountability, and institutional design",
      "Crisis management, digital governance, and algorithmic public service delivery",
      "Environmental governance, climate policy transitions, and European multi-level decision-making",
      "Rigorous doctoral methodology: qualitative comparative analysis (QCA), process tracing, and advanced econometrics"
    ],
    programs: [
      { title: "NIG Inter-University Doctoral Training Program (Ph.D.)", level: "Doctoral Curriculum", desc: "Four-year curriculum providing specialized theoretical and methodological seminars for Ph.D. candidates in public administration and political science." },
      { title: "Advanced Research Master in Public Administration and Organizational Science", level: "Research Master", desc: "Two-year NVAO-accredited master's jointly offered with Utrecht University, Erasmus University Rotterdam, and Tilburg University." },
      { title: "NIG Winter School in Advanced Qualitative and Quantitative Methods", level: "Postgraduate Course", desc: "Intensive doctoral methodology seminars in process tracing, QCA, survey experiments, and natural language processing." }
    ],
    opportunities: [
      {
        id: 4547,
        title: "NIG Inter-University Doctoral Fellowship in Algorithmic Governance",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Four-year funded doctoral position at University of Twente and NIG investigating public accountability in automated administrative decision-making.",
        funding: "Full collective labor agreement salary (€2,770 to €3,539/month gross) plus full NIG doctoral course curriculum tuition waiver",
        fee: "Free application",
        tuition: "Zero tuition under Dutch university employment regulations",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.nigovernance.nl/phd-programme/",
        requirements: {
          gpa: "Master of Science in public administration, political science, science and technology studies (STS), or law (minimum 7.5/10 Dutch scale)",
          ielts: "IELTS 7.0 or TOEFL iBT 100",
          gre: "Not required",
          papers: "Master's thesis and 4-page doctoral research proposal on algorithmic transparency in public agencies",
          references: "Two academic letters from professors of public administration or political science"
        },
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        location: "Enschede, The Hague & Utrecht, Netherlands"
      },
      {
        id: 4548,
        title: "Research Master in Public Administration and Organizational Science Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Two-year 120-ECTS inter-university research master's degree conducted jointly with Utrecht University and Erasmus University Rotterdam.",
        funding: "Utrecht Excellence Scholarships and Dutch government student finance (DUO) for qualifying EU students",
        fee: "€100 university application fee",
        tuition: "€2,530/year (EU statutory rate) or €17,800/year (non-EU international)",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://www.uu.nl/en/masters/public-administration-and-organisational-science-research",
        requirements: {
          gpa: "Bachelor's degree in public administration, sociology, political science, or related discipline with grade 7.5+ or top 15%",
          ielts: "IELTS 7.0 overall (minimum 6.5 in all bands)",
          gre: "Not required",
          papers: "Sample academic research paper, curriculum vitae, and letter of motivation",
          references: "Two academic reference letters evaluating empirical research aptitude"
        },
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        location: "Enschede, The Hague & Utrecht, Netherlands"
      },
      {
        id: 4549,
        title: "NIG Annual Best Ph.D. Dissertation Award and Publication Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "National scientific prize awarded annually to the most outstanding doctoral dissertation defended within the NIG research school network.",
        funding: "€2,500 cash prize plus open-access book publication grant with international university press",
        fee: "Free nomination by doctoral dissertation committee",
        tuition: "Not applicable; scientific honor",
        deadline: "2027-06-15",
        deadlineText: "June 15, 2027",
        source: "https://www.nigovernance.nl/awards/",
        requirements: {
          gpa: "Ph.D. degree successfully defended at a member Dutch or Flemish university within the preceding 12 months",
          ielts: "English or Dutch dissertation",
          gre: "Not required",
          papers: "Complete digital copy of dissertation and laudatio from the doctoral defense committee",
          references: "Supervisor letter of nomination"
        },
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        location: "Enschede, The Hague & Utrecht, Netherlands"
      },
      {
        id: 4550,
        title: "Climate Policy Transition and Energy Governance Postdoctoral Grant",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Two-year postdoctoral fellowship analyzing policy feedback loops, citizen deliberation, and nitrogen crisis negotiation across Dutch provinces.",
        funding: "€42,000 to €48,000 gross annual salary under Dutch university collective bargaining agreement (CAO)",
        fee: "Free application",
        tuition: "Not applicable; salaried postdoctoral appointment",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.nigovernance.nl/research-colloquia/",
        requirements: {
          gpa: "Ph.D. in public administration, environmental governance, or public policy completed within the last 4 years",
          ielts: "English fluency; reading knowledge of Dutch policy documents",
          gre: "Not required",
          papers: "Curriculum vitae, three published articles, and a five-page proposed environmental governance research plan",
          references: "Two letters of recommendation from senior public policy scholars"
        },
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        location: "Enschede, The Hague & Utrecht, Netherlands"
      },
      {
        id: 4551,
        title: "NIG Winter School in Advanced Process Tracing and QCA Methodologies",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        desc: "One-week doctoral masterclass in Utrecht teaching Bayesian process tracing, causal mechanisms, and fuzzy-set Qualitative Comparative Analysis.",
        funding: "Full course fee waiver for registered NIG member Ph.D. candidates",
        fee: "Free for NIG members / €650 for external doctoral candidates",
        tuition: "Covered through institute membership",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://www.nigovernance.nl/courses/winter-school/",
        requirements: {
          gpa: "Enrolled doctoral researcher or advanced research master student in social sciences",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "One-page memo outlining empirical research puzzle and current methodological design",
          references: "Not required"
        },
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        location: "Enschede, The Hague & Utrecht, Netherlands"
      },
      {
        id: 4552,
        title: "European Union Multi-Level Governance Policy Practicum in The Hague",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Six-month research practicum with the Dutch Ministry of the Interior or Council of State in The Hague evaluating EU directive implementation.",
        funding: "€750 monthly Dutch ministerial internship allowance",
        fee: "Free application for enrolled master's students",
        tuition: "Not applicable; government policy practicum",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.nigovernance.nl/contact/",
        requirements: {
          gpa: "Enrolled in master's in public administration, European studies, or administrative law",
          ielts: "Dutch and English fluency",
          gre: "Not required",
          papers: "Curriculum vitae and writing sample on public policy evaluation",
          references: "One academic faculty reference"
        },
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        location: "Enschede, The Hague & Utrecht, Netherlands"
      },
      {
        id: 4553,
        title: "Executive Masterclass in Public Crisis Communication and Institutional Resilience",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Three-day intensive course for senior civil servants, municipal mayors, and health directors on managing pandemics, floods, and cybersecurity outages.",
        funding: "Civil service employer professional development funding accepted",
        fee: "Free application",
        tuition: "€1,250 total course tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.nigovernance.nl/executive-education/",
        requirements: {
          gpa: "Minimum 5 years of professional experience in public administration or emergency management",
          ielts: "Dutch language proficiency",
          gre: "Not required",
          papers: "Registration form and professional biography",
          references: "Not required"
        },
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        location: "Enschede, The Hague & Utrecht, Netherlands"
      }
    ],
    researchers: [
      {
        id: 1968,
        name: "Prof. Dr. Bas Denters",
        title: "Academic Director of NIG & Professor of Public Administration, University of Twente",
        subject: "social-sciences",
        topics: ["Local Democracy", "Citizen Participation", "Urban Governance"],
        summary: "Academic Director of NIG and leading European scholar on democratic innovations, local government decentralization, and citizen-led public initiatives.",
        source: "https://www.nigovernance.nl/board/",
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        recruiting: "Not verified"
      },
      {
        id: 1969,
        name: "Prof. Dr. Mirko Noordegraaf",
        title: "Professor of Public Management, Utrecht University & Former NIG Board Chair",
        subject: "social-sciences",
        topics: ["Public Professionalism", "Executive Public Leadership", "Institutional Change"],
        summary: "Eminent management scholar analyzing how doctors, teachers, judges, and civil servants navigate managerial demands and maintain public institutional trust.",
        source: "https://www.uu.nl/medewerkers/MNoordegraaf",
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        recruiting: "Not verified"
      },
      {
        id: 1970,
        name: "Prof. Dr. Arjen Boin",
        title: "Professor of Public Administration, Leiden University & Crisis Management Scholar",
        subject: "social-sciences",
        topics: ["Mega-Crises Governance", "Institutional Leadership", "Disaster Politics"],
        summary: "World authority on institutional crisis management, advising European governments and multilateral bodies on leadership decision-making during high-uncertainty emergencies.",
        source: "https://www.universiteitleiden.nl/en/staffmembers/arjen-boin",
        university: "Netherlands Institute of Governance (NIG)",
        country: "Netherlands",
        recruiting: "Not verified"
      }
    ]
  },

  // 29. Netherlands: Nuclear Research and Consultancy Group (NRG Petten)
  {
    institution: "Nuclear Research and Consultancy Group (NRG Petten)",
    slug: "nuclear-research-and-consultancy-group-nrg-petten",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1466,
    location: "Petten, North Holland, Netherlands",
    website: "https://www.nrg.eu",
    shortName: "NRG Petten",
    badge: "Medical Isotopes & Nuclear Reactor Technology",
    overview: "Located along the North Sea dunes in Petten, the Nuclear Research and Consultancy Group (NRG / PALLAS) is Europe's premier nuclear research centre and the operator of the High Flux Reactor (HFR). NRG produces over 60% of Europe's medical radioisotopes (treating over 30,000 patients worldwide daily) and conducts cutting-edge research in molten salt reactors, nuclear waste transmutation, radiation materials science, and nuclear safety.",
    lead: "Explore nuclear engineering fellowships, medical isotope research grants, and radiation materials science doctorates at NRG in Petten.",
    description: "Nuclear Research and Consultancy Group (NRG Petten) medical isotope research, molten salt reactor engineering, and nuclear materials science in Petten.",
    quickFacts: {
      type: "National Nuclear Research Institute & Medical Isotope Center",
      campus: "Energy & Health Campus (EHC), Petten, North Holland",
      accreditation: "Authority for Nuclear Safety and Radiation Protection (ANVS) / IAEA / Euratom",
      admissions: "NRG Academic Partnerships & Graduate Board",
      language: "English and Dutch",
      aid: "Euratom nuclear research grants, Dutch national isotope subsidies, and doctoral research salaries"
    },
    strengths: [
      "Medical radioisotopes production and targeted alpha therapy research (Lutetium-177, Actinium-225)",
      "Next-generation nuclear energy (Molten Salt Reactors - MSR and Small Modular Reactors - SMR)",
      "High-flux neutron irradiation testing of materials and reactor vessel steels",
      "Nuclear safety assessment, decommissioning engineering, and radioactive waste management"
    ],
    programs: [
      { title: "NRG Doctoral Research Fellowship in Molten Salt Nuclear Chemistry", level: "Doctoral Degree", desc: "Four-year cooperative Ph.D. with TU Delft or TU Eindhoven investigating molten fluoride salt corrosion and fission product behavior." },
      { title: "Postdoctoral Fellowship in Medical Isotope Target Chemistry", level: "Postdoctoral Fellowship", desc: "Two-year research appointment developing high-purity Actinium-225 separation chemistry for targeted radionuclide cancer therapy." },
      { title: "Nuclear Safety Engineering and Radiation Protection Professional Practicum", level: "Graduate Practicum", desc: "Six-month specialized laboratory training in radiological shielding, neutron activation analysis, and thermal-hydraulic reactor modeling." }
    ],
    opportunities: [
      {
        id: 4554,
        title: "NRG Petten Doctoral Fellowship in Molten Salt Reactor (MSR) Fuel Chemistry",
        type: "PhD",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        desc: "Four-year funded doctoral position investigating redox control, actinide solubility, and fission gas bubble transport in molten fluoride salts.",
        funding: "€3,200 to €3,800 monthly gross research salary plus full TU Delft cooperative doctorate tuition waiver and radiation hazard allowance",
        fee: "Free application",
        tuition: "Full tuition covered",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.nrg.eu/en/careers",
        requirements: {
          gpa: "Master of Science in nuclear engineering, chemical engineering, physical chemistry, or materials science (minimum grade 7.5/10)",
          ielts: "IELTS 7.0 or TOEFL iBT 100",
          gre: "Not required",
          papers: "Master's thesis and statement of research interests in high-temperature thermodynamics or electrochemistry",
          references: "Two academic letters from professors of nuclear engineering or chemistry"
        },
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        location: "Petten, North Holland, Netherlands"
      },
      {
        id: 4555,
        title: "PALLAS Targeted Alpha Therapy (TAT) Medical Isotope Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Two-year postdoctoral fellowship at the Petten Health Campus evaluating cyclotron and reactor irradiation routes to produce therapeutic Actinium-225 and Lead-212.",
        funding: "€44,000 to €52,000 gross annual research salary plus state-of-the-art hot-cell laboratory access",
        fee: "Free application",
        tuition: "Not applicable; salaried postdoctoral appointment",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.nrg.eu/en/nuclear-health",
        requirements: {
          gpa: "Ph.D. in radiochemistry, nuclear medicine, radiopharmacy, or inorganic chemistry",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Curriculum vitae, publication list in radiochemistry, and three-page targeted isotope research plan",
          references: "Two letters of recommendation from senior radiopharmaceutical or nuclear scientists"
        },
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        location: "Petten, North Holland, Netherlands"
      },
      {
        id: 4556,
        title: "High Flux Reactor (HFR) Materials Irradiation Engineering Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Six-month master's research internship studying neutron embrittlement and microstructural defect clusters in fusion reactor divertor materials.",
        funding: "€850 monthly student compensation plus housing subsidy in the Alkmaar/Petten region",
        fee: "Free application for enrolled STEM master's students",
        tuition: "Not applicable; paid research internship",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.nrg.eu/en/careers/internships",
        requirements: {
          gpa: "Enrolled in master's in nuclear engineering, materials science, or applied physics",
          ielts: "English fluency (security clearance screening required for facility access)",
          gre: "Not required",
          papers: "Resume, university transcripts, and cover letter detailing materials physics background",
          references: "Academic supervisor letter of recommendation"
        },
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        location: "Petten, North Holland, Netherlands"
      },
      {
        id: 4557,
        title: "Nuclear Reactor Thermal-Hydraulics and CFD Computational Grant",
        type: "Fellowship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        desc: "Twelve-month computational fellowship modeling two-phase coolant flow and passive decay heat removal systems for Small Modular Reactors (SMRs).",
        funding: "€38,000 project grant over 12 months with high-performance supercomputing cluster allocation",
        fee: "Free application",
        tuition: "Not applicable; funded research fellowship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.nrg.eu/en/innovations/small-modular-reactors",
        requirements: {
          gpa: "Master of Science in mechanical engineering, fluid mechanics, or computational engineering",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Demonstrated proficiency with ANSYS Fluent, OpenFOAM, or RELAP5 reactor safety codes",
          references: "Two academic letters from engineering or fluid dynamics faculty"
        },
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        location: "Petten, North Holland, Netherlands"
      },
      {
        id: 4558,
        title: "European Euratom Nuclear Waste Transmutation and Geological Disposal Award",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "chemistry"],
        desc: "Annual research award supporting collaborative projects between Dutch and European universities on deep geological repository barrier integrity.",
        funding: "€6,000 travel and experimental testing grant at the Petten hot-cell facilities",
        fee: "Free application",
        tuition: "Not applicable; research award",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.nrg.eu/en/research",
        requirements: {
          gpa: "Doctoral student enrolled in radiochemistry, environmental geosciences, or civil engineering in an EU university",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Two-page proposal outlining experimental geochemical or radioactive waste barrier tests",
          references: "Ph.D. advisor endorsement"
        },
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        location: "Petten, North Holland, Netherlands"
      },
      {
        id: 4559,
        title: "Radiological Protection and Nuclear Safety Certification Course",
        type: "Course",
        subject: "physics",
        subjects: ["physics", "engineering"],
        desc: "Eight-week accredited professional radiation protection expert (Stralingsbeschermingsdeskundige) course certified under Dutch ANVS regulations.",
        funding: "Nuclear sector employer sponsorships accepted",
        fee: "Free application",
        tuition: "€2,950 total course tuition (including laboratory radiation dosimetry practicals)",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.nrg.eu/en/academy",
        requirements: {
          gpa: "Bachelor's or Master's degree in physics, chemistry, engineering, or biology",
          ielts: "Dutch or English depending on language cohort",
          gre: "Not required",
          papers: "Registration form and proof of academic prerequisites",
          references: "Not required"
        },
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        location: "Petten, North Holland, Netherlands"
      },
      {
        id: 4560,
        title: "Neutron Activation Analysis (NAA) Environmental Forensics Internship",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "environment"],
        desc: "Five-month research internship using reactor neutrons to determine trace heavy metal contamination in North Sea marine sediments and air filters.",
        funding: "€800 monthly living allowance",
        fee: "Free application",
        tuition: "Not applicable; paid laboratory internship",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.nrg.eu/en/careers/internships",
        requirements: {
          gpa: "Enrolled in analytical chemistry, environmental science, or nuclear physics",
          ielts: "English working fluency",
          gre: "Not required",
          papers: "Resume and transcript showing analytical spectroscopy or radiochemistry grades",
          references: "One academic faculty reference"
        },
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        location: "Petten, North Holland, Netherlands"
      }
    ],
    researchers: [
      {
        id: 1971,
        name: "Dr. Vinod Ramnandanlal",
        title: "Director of Nuclear Health & Commercial Executive, NRG / PALLAS",
        subject: "biology",
        topics: ["Medical Radioisotopes", "Targeted Radionuclide Therapy", "Global Radiopharmaceutical Supply Chains"],
        summary: "Executive leader overseeing global medical isotope operations at Petten, coordinating clinical radiopharmaceutical partnerships to supply hospitals worldwide with diagnostic and therapeutic isotopes.",
        source: "https://www.nrg.eu/en/about-us/management",
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        recruiting: "Not verified"
      },
      {
        id: 1972,
        name: "Dr. Jan Leen Kloosterman",
        title: "Senior Scientific Advisor & Professor of Nuclear Reactor Physics (TU Delft / NRG)",
        subject: "physics",
        topics: ["Molten Salt Reactors", "Thorium Fuel Cycles", "Nuclear Waste Transmutation"],
        summary: "Eminent nuclear reactor physicist leading computational and experimental investigations into thorium-fueled molten salt reactors and next-generation nuclear safety systems in Europe.",
        source: "https://www.nrg.eu/en/innovations/molten-salt-reactors",
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        recruiting: "Not verified"
      },
      {
        id: 1973,
        name: "Dr. Ferry Roelofs",
        title: "Head of Nuclear Safety and Thermal Hydraulics",
        subject: "engineering",
        topics: ["Liquid Metal Coolants", "Computational Fluid Dynamics in Reactors", "Passive Safety Mechanisms"],
        summary: "Leading reactor thermal-hydraulics researcher coordinating European projects on sodium and lead-cooled fast reactors and validated computational fluid dynamic safety analysis.",
        source: "https://www.nrg.eu/en/research",
        university: "Nuclear Research and Consultancy Group (NRG Petten)",
        country: "Netherlands",
        recruiting: "Not verified"
      }
    ]
  },

  // 30. Netherlands: VLAG Graduate School
  {
    institution: "VLAG Graduate School",
    slug: "vlag-graduate-school-wageningen",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1540,
    location: "Wageningen, Gelderland, Netherlands",
    website: "https://www.vlaggraduateschool.nl",
    shortName: "VLAG Graduate School",
    badge: "Biobased, Chemical, Food and Health Sciences",
    overview: "Accredited by the Royal Netherlands Academy of Arts and Sciences (KNAW), the VLAG Graduate School (Biobased, Chemical, Food and Health Sciences) is an internationally celebrated research and doctoral training school based at Wageningen University & Research (WUR). Bringing together over 100 research groups, 500 Ph.D. candidates, and 120 postdoctoral fellows, VLAG is the global leader in food technology, nutritional biology, biomolecular chemistry, and circular biobased production systems.",
    lead: "Explore world-leading doctoral research fellowships, nutritional genomics masterclasses, and biobased chemistry programs at VLAG Graduate School in Wageningen.",
    description: "VLAG Graduate School (Wageningen University) food technology doctorates, biobased chemistry research, and nutritional genomics in the Netherlands.",
    quickFacts: {
      type: "KNAW-Accredited Graduate & Research School (Wageningen University & Research)",
      campus: "Wageningen Campus, Gelderland, Netherlands",
      accreditation: "Royal Netherlands Academy of Arts and Sciences (KNAW) / Academic Ranking of World Universities #1 in Agriculture & Food Science",
      admissions: "VLAG Academic Committee and WUR PhD Services",
      language: "English",
      aid: "NWO Talent Scheme, EU Horizon Europe Marie Skłodowska-Curie fellowships, and full Dutch university employment contracts"
    },
    strengths: [
      "Food technology, structured foods, plant-based meat analogs, and soft matter physics",
      "Nutritional genomics, human gut microbiome, and metabolic health",
      "Biomolecular chemistry, synthetic biology, and industrial biotechnology",
      "Biobased circular materials, green biorefinery, and biopolymer processing"
    ],
    programs: [
      { title: "VLAG Ph.D. Training Program in Food Science & Nutrition", level: "Doctoral Degree", desc: "Four-year paid doctoral research position with personalized VLAG training plan, international secondments, and advanced doctoral masterclasses." },
      { title: "Master of Science in Food Technology (Specialization in Sustainable Food Process Engineering)", level: "Graduate Degree", desc: "Top-ranked two-year master's program at Wageningen University investigating high-moisture extrusion, food microstructures, and product sensory design." },
      { title: "Master of Science in Molecular Life Sciences (Biological Chemistry Track)", level: "Graduate Degree", desc: "Two-year graduate degree exploring protein crystallography, enzymology, and bio-nanotechnology." }
    ],
    opportunities: [
      {
        id: 4561,
        title: "VLAG Doctoral Fellowship in Plant-Based Protein Structuring and Extrusion",
        type: "PhD",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        desc: "Four-year funded doctoral research position at Wageningen Food Process Engineering investigating shear-induced structuring and rheology of legume proteins.",
        funding: "Full collective labor agreement salary (€2,770/month year 1 rising to €3,539/month year 4 gross) plus 8% holiday and 8.3% end-of-year bonuses",
        fee: "Free application",
        tuition: "Zero tuition under Dutch university employment regulations",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.vlaggraduateschool.nl/en/phd-programme.htm",
        requirements: {
          gpa: "Master of Science in food technology, chemical engineering, bioprocess engineering, or soft matter physics (minimum 7.5/10 Dutch scale)",
          ielts: "IELTS 6.5 overall (minimum 6.0 in speaking)",
          gre: "Not required",
          papers: "Master's thesis and research statement explaining passion for sustainable food transitions",
          references: "Two academic letters from food technology or engineering faculty"
        },
        university: "VLAG Graduate School",
        country: "Netherlands",
        location: "Wageningen, Gelderland, Netherlands"
      },
      {
        id: 4562,
        title: "Wageningen University Excellence Scholarship for Master of Science in Food Technology",
        type: "Scholarship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        desc: "Full-tuition scholarship for outstanding non-EEA students admitted to the Master of Science in Food Technology or Molecular Life Sciences.",
        funding: "Full tuition fee waiver (approx. €20,000/year) plus €11,000 annual living expenses contribution",
        fee: "Free application for scholarship upon university program admission",
        tuition: "Full tuition covered",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        source: "https://www.wur.nl/en/education-programmes/master/scholarships.htm",
        requirements: {
          gpa: "First-class bachelor's degree with GPA of at least 80% or equivalent to Dutch grade 8.0+",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Official university transcripts, curriculum vitae, and two-page letter of motivation",
          references: "Two academic reference letters on official university letterhead"
        },
        university: "VLAG Graduate School",
        country: "Netherlands",
        location: "Wageningen, Gelderland, Netherlands"
      },
      {
        id: 4563,
        title: "Gut Microbiome and Dietary Fiber Interactions Postdoctoral Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Two-year postdoctoral fellowship at the Laboratory of Microbiology investigating anaerobic fermentation of prebiotic glycans by human intestinal microbiota.",
        funding: "€44,000 to €52,000 gross annual research salary plus metabolomics and anaerobic culturing facility access",
        fee: "Free application",
        tuition: "Not applicable; salaried postdoctoral appointment",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.vlaggraduateschool.nl/en/research.htm",
        requirements: {
          gpa: "Ph.D. in microbiology, nutritional biochemistry, or metagenomics obtained within the last 4 years",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "List of publications, copy of Ph.D. dissertation, and three-page research outline",
          references: "Two letters of recommendation from senior microbiology or nutrition professors"
        },
        university: "VLAG Graduate School",
        country: "Netherlands",
        location: "Wageningen, Gelderland, Netherlands"
      },
      {
        id: 4564,
        title: "Master of Science in Food Technology (Sustainable Process Engineering) Admission",
        type: "Master's",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        desc: "Two-year 120-ECTS curriculum featuring an individual six-month thesis and an integrated four-month industrial internship at a global agrifood corporation.",
        funding: "Dutch government DUO financing (for EU citizens) and Wageningen university tuition discounts",
        fee: "Free application (or €100 for non-EEA degree holders)",
        tuition: "€2,530/year (EU statutory rate) / €19,800/year (non-EEA international)",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.wur.nl/en/education-programmes/master/msc-programmes/msc-food-technology.htm",
        requirements: {
          gpa: "Bachelor of Science in food technology, chemical engineering, or biotechnology with minimum 70% average",
          ielts: "IELTS 6.5 overall (minimum 6.0 in speaking)",
          gre: "Not required",
          papers: "Certified academic transcripts, detailed curriculum overview, and personal statement",
          references: "One academic reference letter"
        },
        university: "VLAG Graduate School",
        country: "Netherlands",
        location: "Wageningen, Gelderland, Netherlands"
      },
      {
        id: 4565,
        title: "Food Valley Agrifood Innovation and Sensory Science Internship",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Four-month research internship at the Wageningen Sensory Laboratory evaluating consumer perception, texture mouthfeel, and volatile aroma profiles.",
        funding: "€650 monthly internship allowance plus specialized gas chromatography-olfactometry (GC-O) training",
        fee: "Free application for enrolled master's students",
        tuition: "Not applicable; curricular industrial placement",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.wur.nl/en/research-results/research-institutes/food-biobased-research.htm",
        requirements: {
          gpa: "Enrolled in Master of Science in Food Technology, Sensory Science, or Consumer Behavior",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Curriculum vitae and short statement of sensory evaluation experience",
          references: "Academic internship coordinator approval"
        },
        university: "VLAG Graduate School",
        country: "Netherlands",
        location: "Wageningen, Gelderland, Netherlands"
      },
      {
        id: 4566,
        title: "VLAG International Doctoral Study Grant for Overseas Research Stays",
        type: "Scholarship",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        desc: "Mobility grant supporting VLAG Ph.D. candidates spending up to six months at prestigious partner laboratories worldwide (MIT, ETH Zurich, UC Davis).",
        funding: "Up to €5,000 mobility allowance covering international airfare and foreign living supplements",
        fee: "Free internal application for enrolled VLAG doctoral researchers",
        tuition: "Covered through active doctoral employment",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://www.vlaggraduateschool.nl/en/phd-programme/grants.htm",
        requirements: {
          gpa: "Successful completion of first-year VLAG doctoral evaluation (Go/No-Go decision)",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "Three-page research proposal and formal invitation letter from host international university laboratory",
          references: "Primary Ph.D. promoter approval"
        },
        university: "VLAG Graduate School",
        country: "Netherlands",
        location: "Wageningen, Gelderland, Netherlands"
      },
      {
        id: 4567,
        title: "Advanced Masterclass in Biopolymer Rheology and Food Structure Characterization",
        type: "Course",
        subject: "chemistry",
        subjects: ["chemistry", "physics"],
        desc: "Five-day intensive doctoral course in Wageningen teaching small-angle X-ray scattering (SAXS), confocal laser scanning microscopy, and non-linear rheology.",
        funding: "VLAG member fee waiver applicable",
        fee: "Free for VLAG Ph.D. students / €950 for external academic participants / €1,850 for industry participants",
        tuition: "Covered through graduate school membership",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.vlaggraduateschool.nl/en/courses.htm",
        requirements: {
          gpa: "Doctoral candidate or industry R&D scientist in food science, polymer physics, or biophysics",
          ielts: "English language proficiency",
          gre: "Not required",
          papers: "Registration form and abstract of current research project",
          references: "Not required"
        },
        university: "VLAG Graduate School",
        country: "Netherlands",
        location: "Wageningen, Gelderland, Netherlands"
      }
    ],
    researchers: [
      {
        id: 1974,
        name: "Prof. Dr. Tiny van Boekel",
        title: "Emeritus Professor of Food Quality and Design & Former Director of VLAG",
        subject: "chemistry",
        topics: ["Food Chemistry Kinetics", "Maillard Reaction Dynamics", "Food Quality Modeling"],
        summary: "World authority on food chemical reaction kinetics and predictive modeling of Maillard reaction pathways in thermal food processing.",
        source: "https://www.wur.nl/en/persons/tiny-prof.dr.ir.-majs-tiny-van-boekel.htm",
        university: "VLAG Graduate School",
        country: "Netherlands",
        recruiting: "Not verified"
      },
      {
        id: 1975,
        name: "Prof. Dr. Atze Jan van der Goot",
        title: "Professor of Sustainable Protein Structuring & Shear-Cell Pioneer",
        subject: "chemistry",
        topics: ["Shear-Cell Structuring Technology", "Plant-Based Meat Analogs", "Sustainable Food Processing"],
        summary: "Pioneering chemical engineer who invented shear-cell technology to create fibrous, meat-like textures from plant proteins with minimal energy and water consumption.",
        source: "https://www.wur.nl/en/persons/atze-jan-prof.dr.ir.-aj-atze-jan-van-der-goot.htm",
        university: "VLAG Graduate School",
        country: "Netherlands",
        recruiting: "Not verified"
      },
      {
        id: 1976,
        name: "Prof. Dr. Hauke Smidt",
        title: "Professor of Microbial Ecology & Gut Microbiome Leader",
        subject: "biology",
        topics: ["Anaerobic Microbiology", "Human and Animal Gut Microbiota", "Microbial Biotechnology"],
        summary: "Leading molecular microbial ecologist investigating how diet, prebiotic polysaccharides, and environmental factors shape gastrointestinal microbiome architecture and host metabolic health.",
        source: "https://www.wur.nl/en/persons/hauke-prof.dr.-h-hauke-smidt.htm",
        university: "VLAG Graduate School",
        country: "Netherlands",
        recruiting: "Not verified"
      }
    ]
  }
];
