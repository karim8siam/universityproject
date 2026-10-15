// Batch 41 - Part 3: Universities 21 to 30
// UK (2), Japan (4), Netherlands (4)
// Opps: 4708 to 4777 (70 opps)
// Researchers: 2037 to 2066 (30 researchers)

export const part3Universities = [
  // 21. UK: Stranmillis University College (A College of Queen's University Belfast)
  {
    institution: "Stranmillis University College (A College of Queen's University Belfast)",
    slug: "stranmillis-university-college-belfast",
    countryId: "uk",
    countryLabel: "United Kingdom",
    sourceRow: 1295,
    location: "Belfast, Northern Ireland, UK",
    website: "https://www.stran.ac.uk",
    shortName: "Stranmillis Belfast",
    badge: "Teacher Education & Early Childhood Pedagogy",
    overview: "Established in 1922 on a picturesque 46-acre woodland campus in south Belfast, Stranmillis University College is a distinguished university college of Queen's University Belfast. It is recognized as a leader in initial teacher education, early childhood studies, pastoral care, and educational research across the UK and Ireland.",
    lead: "Experience premier teacher education, early childhood research, and educational leadership degrees at Stranmillis University College in Belfast.",
    description: "Stranmillis University College teacher education degrees, Queen's University Belfast validation, and educational research fellowships in Belfast, UK.",
    quickFacts: {
      type: "Public University College (A College of Queen's University Belfast)",
      campus: "46-Acre Stranmillis Woodland Estate, South Belfast, Northern Ireland",
      accreditation: "General Teaching Council for Northern Ireland (GTCNI) / Queen's University Belfast",
      admissions: "UCAS deadline late January for BEd; rolling for postgraduate programs",
      language: "English (IELTS 6.5 minimum with 6.0 in each sub-test)",
      aid: "Department of Education NI Training Bursaries, Stranmillis Scholarships"
    },
    strengths: [
      "Degrees awarded and validated by prestigious Russell Group member Queen's University Belfast",
      "Over a century of excellence in primary and post-primary teacher education",
      "Centre for Research in Educational Underachievement (CREU)",
      "Exceptional student satisfaction and graduate employment rates across Northern Ireland"
    ],
    programs: [
      { title: "Bachelor of Education (BEd Primary / Post-Primary)", level: "Undergraduate Degree", desc: "Four-year professional initial teacher education degree accredited by GTCNI qualifying teachers across the UK and internationally." },
      { title: "Master of Teaching (MTeach)", level: "Postgraduate Degree", desc: "Advanced professional master's for practicing teachers focusing on pedagogical inquiry, inclusive education, and curriculum leadership." },
      { title: "BA (Hons) Early Childhood Studies", level: "Undergraduate Degree", desc: "Comprehensive three-year degree exploring child development psychology, play-based learning, safeguarding, and family support." }
    ],
    opportunities: [
      {
        id: 4708,
        title: "Stranmillis Centre for Research in Educational Underachievement Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-year postdoctoral research fellowship investigating socio-economic educational disparities, working-class male educational attainment, and community mentoring.",
        funding: "£32,000 annual research salary plus project dissemination budget",
        fee: "None",
        tuition: "Tuition-free research position",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.stran.ac.uk/research/creu/",
        requirements: {
          gpa: "Doctorate in education, sociology, or developmental psychology",
          ielts: "English native or IELTS 7.5 overall",
          gre: "Not required",
          papers: "List of peer-reviewed publications and 1,500-word proposed research agenda",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4709,
        title: "Bachelor of Education (BEd Hons Primary) Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year GTCNI-accredited teacher education program combining academic subject specialisms with extensive school-based teaching practice across Northern Ireland.",
        funding: "Northern Ireland Department of Education training grants and student loans",
        fee: "UCAS application fee £28.50",
        tuition: "£4,845/year (NI residents), £9,250/year (GB students), or £17,400/year (International)",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        source: "https://www.stran.ac.uk/courses/undergraduate/bed-primary/",
        requirements: {
          gpa: "BBB at A-Level (or equivalent) including GCSE English, Mathematics, and Science (Grade C/4 or above)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Personal statement detailing passion for child pedagogy and classroom observation experience",
          references: "One academic referee letter and successful interview"
        }
      },
      {
        id: 4710,
        title: "Master of Education (MEd) in Special Educational Needs (SEN)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Modular master's degree (Queen's University Belfast validated) examining neurodiversity, autism spectrum pedagogies, and assistive learning technologies.",
        funding: "Department of Education professional development subsidies",
        fee: "None",
        tuition: "£6,400 total program tuition (NI/UK) or £15,200 (International)",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.stran.ac.uk/courses/postgraduate/med-special-educational-needs/",
        requirements: {
          gpa: "Minimum 2:2 honours degree in education, social science, or recognized teaching qualification",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Professional CV and statement outlining current educational role",
          references: "Two references (one academic, one professional)"
        }
      },
      {
        id: 4711,
        title: "Belfast Urban School Teaching & Community Engagement Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Twelve-week immersive school placement in Belfast primary or secondary schools implementing differentiated learning and trauma-informed classroom strategies.",
        funding: "Travel reimbursement and teaching materials allowance up to £500",
        fee: "None",
        tuition: "Included in BEd tuition",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.stran.ac.uk/student-life/school-placements/",
        requirements: {
          gpa: "Enrolled in BEd or PGCE with satisfactory AccessNI criminal record clearance",
          ielts: "English fluency",
          gre: "Not required",
          papers: "AccessNI enhanced disclosure form and fitness to teach declaration",
          references: "Teaching practice coordinator sign-off"
        }
      },
      {
        id: 4712,
        title: "Stranmillis International Commonwealth Teacher Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Merit scholarship supporting teachers from Commonwealth countries pursuing master's degrees in early years education or educational leadership in Belfast.",
        funding: "£3,500 tuition fee contribution",
        fee: "None",
        tuition: "Credited against international tuition fees",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.stran.ac.uk/international/fees-and-scholarships/",
        requirements: {
          gpa: "Minimum 2:1 honours degree or international equivalent in education",
          ielts: "IELTS 6.5 overall (minimum 6.0 in each band)",
          gre: "Not required",
          papers: "750-word essay on how graduate study will impact primary education in applicant's home nation",
          references: "Two professional reference letters"
        }
      },
      {
        id: 4713,
        title: "Summer School in Play-Based Learning & Outdoor Nature Pedagogy",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Two-week certificate workshop utilizing Stranmillis woodland grounds to master forest school techniques, sensory exploration, and risk-benefit play.",
        funding: "Early-bird discount £150",
        fee: "£450 course registration fee including forest school materials",
        tuition: "Included in registration fee",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.stran.ac.uk/courses/cpd/",
        requirements: {
          gpa: "Open to educators, nursery practitioners, and education degree students",
          ielts: "English B2",
          gre: "Not required",
          papers: "Registration form",
          references: "None"
        }
      },
      {
        id: 4714,
        title: "Doctoral Studentship in Digital Pedagogy & STEM Education in Schools",
        type: "PhD",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Three-year PhD studentship (co-supervised with Queen's University Belfast) examining coding curricula, classroom robotics, and computational thinking in primary schools.",
        funding: "£19,237 annual tax-free stipend plus full home tuition fees",
        fee: "None",
        tuition: "Fully waived",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.stran.ac.uk/research/postgraduate-research/",
        requirements: {
          gpa: "Master's degree in education or educational technology with Merit or Distinction",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "2,000-word doctoral proposal on digital education in schools",
          references: "Two academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2037,
        name: "Prof. Jonathan Heggarty MBE",
        title: "Principal and Chief Executive",
        department: "Executive Directorate",
        email: "principal@stran.ac.uk",
        website: "https://www.stran.ac.uk/about-us/leadership-and-governance/",
        recruiting: "Not verified",
        interests: ["Teacher education policy in Northern Ireland", "Digital learning technologies in schools", "Higher education governance", "STEM pedagogical innovation"]
      },
      {
        id: 2038,
        name: "Dr. Noel Purdy",
        title: "Director of the Centre for Research in Educational Underachievement (CREU)",
        department: "Centre for Research in Educational Underachievement",
        email: "n.purdy@stran.ac.uk",
        website: "https://www.stran.ac.uk/staff/dr-noel-purdy/",
        recruiting: "Not verified",
        interests: ["Educational underachievement", "School bullying and cyberbullying prevention", "Pastoral care in education", "Special educational needs policy"]
      },
      {
        id: 2039,
        name: "Dr. Colette Gray",
        title: "Principal Lecturer in Early Childhood Studies",
        department: "Department of Early Childhood Studies",
        email: "c.gray@stran.ac.uk",
        website: "https://www.stran.ac.uk/staff/dr-colette-gray/",
        recruiting: "Not verified",
        interests: ["Children's rights and child participation", "Early years science and numeracy", "Play-based learning methodologies", "Early childhood intervention"]
      }
    ]
  },

  // 22. UK: University of South Wales (Prifysgol De Cymru)
  {
    institution: "University of South Wales (Prifysgol De Cymru)",
    slug: "university-of-south-wales-usw",
    countryId: "uk",
    countryLabel: "United Kingdom",
    sourceRow: 1322,
    location: "Pontypridd, Cardiff & Newport, Wales, UK",
    website: "https://www.southwales.ac.uk",
    shortName: "USW Wales",
    badge: "Aerospace, Cyber Security & Creative Industries",
    overview: "The University of South Wales (Prifysgol De Cymru) is one of the largest universities in the UK, operating major campuses in Pontypridd, Cardiff, and Newport. Internationally recognized for its National Cyber Security Academy (GCHQ/NCSC certified), Aerospace Centre with operational flight simulators, and award-winning Cardiff film and animation studios.",
    lead: "Build cutting-edge expertise at the UK's National Cyber Security Academy, aerospace flight test centres, and film studios at University of South Wales.",
    description: "University of South Wales degree programs, aerospace engineering scholarships, and NCSC cybersecurity master's across Cardiff and Newport, UK.",
    quickFacts: {
      type: "Public Comprehensive Research University (Prifysgol De Cymru)",
      campus: "Pontypridd (Treforest/Glyntaff), Cardiff City Centre, and Newport Campus",
      accreditation: "Privy Council / National Cyber Security Centre (NCSC) / Royal Aeronautical Society (RAeS) / ScreenSkills",
      admissions: "September and February intakes; UCAS for undergraduate degrees",
      language: "English & Welsh (bilingual degrees and Coleg Cymraeg Cenedlaethol modules)",
      aid: "USW International Scholarships, Welsh Government Master's Bursaries"
    },
    strengths: [
      "National Cyber Security Academy—certified by GCHQ and the NCSC",
      "USW Aerospace Centre with full-size Jetstream commercial aircraft and CAE flight simulator",
      "Cardiff Campus Creative Graduate School—top UK incubator for animation and visual effects",
      "Extensive partnerships with Airbus, GE Aviation, BBC Cymru Wales, and Welsh Police Forces"
    ],
    programs: [
      { title: "BSc (Hons) Applied Cyber Security", level: "Undergraduate Degree", desc: "NCSC-certified degree delivered in the National Cyber Security Academy covering penetration testing, network defense, and malware reverse engineering." },
      { title: "BEng (Hons) Aeronautical Engineering", level: "Undergraduate Degree", desc: "RAeS-accredited aerospace program focusing on propulsion, composite aircraft structures, CFD aerodynamics, and avionics." },
      { title: "MA Animation (Computer Animation / Stop-Motion)", level: "Postgraduate Degree", desc: "ScreenSkills Select accredited master's training visual storytellers in 3D modeling, character rigging, and industry pipeline production." }
    ],
    opportunities: [
      {
        id: 4715,
        title: "USW National Cyber Security Academy Excellence Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Tuition discount scholarship awarded to undergraduate and postgraduate students entering NCSC-certified cyber security programs at USW Newport.",
        funding: "£2,500 annual tuition fee reduction throughout the degree course",
        fee: "None",
        tuition: "£9,000/year (Wales home), £9,250/year (UK), or £15,800/year (International)",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.southwales.ac.uk/courses/cyber-security/",
        requirements: {
          gpa: "Minimum ABB at A-Level (or equivalent) in computer science, mathematics, or physics",
          ielts: "IELTS 6.0 overall (minimum 5.5 in each band)",
          gre: "Not required",
          papers: "Demonstrated interest in computer networks and information security",
          references: "One academic referee letter"
        }
      },
      {
        id: 4716,
        title: "BEng (Hons) Aeronautical Engineering Admission",
        type: "Bachelor's",
        subject: "engineering",
        subjects: ["engineering", "physics"],
        desc: "Three-year RAeS-accredited engineering degree utilizing the on-campus Aerospace Centre with full flight simulators and sub-sonic wind tunnels.",
        funding: "International Student Scholarship £2,500/year automatic deduction",
        fee: "UCAS fee £28.50",
        tuition: "£9,000/year (Wales) / £15,800/year (International)",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.southwales.ac.uk/courses/beng-hons-aeronautical-engineering/",
        requirements: {
          gpa: "112-120 UCAS tariff points including Mathematics and Physics",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Personal statement detailing aerospace engineering ambitions",
          references: "One mathematics or physics teacher recommendation"
        }
      },
      {
        id: 4717,
        title: "Airbus / GE Aviation Industrial Engineering Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering"],
        desc: "One-year paid industrial sandwich placement (Year in Industry) with aerospace giants in South Wales evaluating aircraft wing assembly and jet engine overhauls.",
        funding: "£18,500 to £22,000 paid industrial salary",
        fee: "None",
        tuition: "Reduced sandwich year fee £1,800",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.southwales.ac.uk/employability/placements/",
        requirements: {
          gpa: "Completion of Year 2 engineering studies with minimum 55% average",
          ielts: "English proficiency",
          gre: "Not required",
          papers: "CV and cover letter tailored to corporate host partner",
          references: "Faculty placement tutor approval"
        }
      },
      {
        id: 4718,
        title: "MSc Forensic Audit and Accounting Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "One-year specialized master's examining corporate fraud investigations, asset recovery, expert witness court testimony, and anti-bribery compliance.",
        funding: "Welsh Government Master's Bursaries up to £4,000 for qualifying students",
        fee: "None",
        tuition: "£8,800 (UK home) or £16,000 (International)",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.southwales.ac.uk/courses/msc-forensic-audit-and-accounting/",
        requirements: {
          gpa: "Minimum 2:2 honours degree in accounting, finance, business, or law",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "CV and personal statement outlining career goals in fraud prevention",
          references: "Two professional or academic references"
        }
      },
      {
        id: 4719,
        title: "Cardiff Creative Industries Film & Animation Studio Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "One-year post-production residency in Cardiff providing access to green screen soundstages, Dolby Atmos mixing suites, and high-performance render farms.",
        funding: "£12,000 production grant plus free studio residency",
        fee: "None",
        tuition: "Tuition-free studio fellowship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.southwales.ac.uk/cardiff-campus/",
        requirements: {
          gpa: "BA or MA in animation, film, visual effects, or computer games design",
          ielts: "English B2",
          gre: "Not required",
          papers: "Showreel link (Vimeo/YouTube) and 10-page treatment for original animated short",
          references: "Two industry or academic references"
        }
      },
      {
        id: 4720,
        title: "USW Welsh Language (Cymraeg) Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Scholarship supported by Coleg Cymraeg Cenedlaethol for students completing at least 40 credits per academic year through the medium of Welsh.",
        funding: "£1,500 per year (£4,500 over three years)",
        fee: "None",
        tuition: "Directly awarded to student",
        deadline: "2027-06-01",
        deadlineText: "June 1, 2027",
        source: "https://www.southwales.ac.uk/welsh-at-usw/",
        requirements: {
          gpa: "Fluent Welsh speaker enrolled in designated Welsh-medium study pathways",
          ielts: "Not applicable (Welsh medium)",
          gre: "Not required",
          papers: "Coleg Cymraeg scholarship application form",
          references: "One referee from secondary school or college"
        }
      },
      {
        id: 4721,
        title: "Doctoral Research Fellowship in Industrial Hydrogen Combustion & Decarbonisation",
        type: "PhD",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        desc: "Three-year PhD research position at the Sustainable Environment Research Centre (SERC) investigating hydrogen blends in industrial furnaces and gas turbines.",
        funding: "£19,237 annual tax-free UKRI-equivalent research stipend plus research consumables",
        fee: "None",
        tuition: "Fully waived",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.southwales.ac.uk/research/research-centres/sustainable-environment-research-centre/",
        requirements: {
          gpa: "First-class or upper second-class master's degree in chemical engineering, mechanical engineering, or chemistry",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "2,000-word proposed doctoral methodology on combustion emissions",
          references: "Two academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2040,
        name: "Dr. Ben Calvert",
        title: "Vice-Chancellor and Chief Executive",
        department: "Executive Board",
        email: "vice-chancellor@southwales.ac.uk",
        website: "https://www.southwales.ac.uk/about/leadership-and-governance/executive-team/",
        recruiting: "Not verified",
        interests: ["Higher education policy in Wales", "Widening participation and social justice", "Creative industries regional clusters", "University enterprise strategy"]
      },
      {
        id: 2041,
        name: "Prof. Andrew Ware",
        title: "Professor of Computing and Artificial Intelligence",
        department: "Faculty of Computing, Engineering and Science",
        email: "andrew.ware@southwales.ac.uk",
        website: "https://www.southwales.ac.uk/about/our-people/",
        recruiting: "Not verified",
        interests: ["Artificial intelligence and machine learning applications", "Intelligent decision support systems", "Cybersecurity heuristics", "Automated anomaly detection"]
      },
      {
        id: 2042,
        name: "Prof. Sandra Esteves",
        title: "Professor of Bioprocess Engineering & Director of SERC",
        department: "Sustainable Environment Research Centre (SERC)",
        email: "sandra.esteves@southwales.ac.uk",
        website: "https://www.southwales.ac.uk/about/our-people/",
        recruiting: "Not verified",
        interests: ["Anaerobic digestion biotechnology", "Renewable hydrogen and bio-methane", "Biological carbon capture and utilization (CCU)", "Waste valorisation"]
      }
    ]
  },

  // 23. Japan: Kyoto Koka Women's University
  {
    institution: "Kyoto Koka Women's University",
    slug: "kyoto-koka-womens-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1687,
    location: "Ukyo-ku, Kyoto, Kansai, Japan",
    website: "https://www.koka.ac.jp",
    shortName: "Kyoto Koka",
    badge: "Clinical Nutrition & Healthcare Sciences",
    overview: "Rooted in the Buddhist ethos of Shinran Shonin ('Compassion and Sincerity'), Kyoto Koka Women's University is a prestigious women's university in western Kyoto celebrated for its top-tier Faculty of Healthcare Sciences, nationally leading registered dietitian training, clinical nursing, and child development psychology.",
    lead: "Master clinical nutrition, registered nursing, and Buddhist humanist healthcare sciences at Kyoto Koka Women's University in Kyoto.",
    description: "Kyoto Koka Women's University degree programs, clinical nutrition fellowships, and healthcare sciences scholarships in Kyoto, Japan.",
    quickFacts: {
      type: "Private Buddhist Women's University (Koka Gakuen Educational Corporation)",
      campus: "Kadonocho Campus, Nishikyogoku, Ukyo-ku, Kyoto",
      accreditation: "Japan University Accreditation Association (JUAA) / Ministry of Health, Labour and Welfare",
      admissions: "General entrance exams in January/February; international student call in November/December",
      language: "Japanese (JLPT N2/N1 required for clinical programs)",
      aid: "Koka Gakuen Foundation Scholarships, JASSO International Student Honors"
    },
    strengths: [
      "Nation-leading pass rates on the National Exam for Registered Dietitians (Kanri Eiyoshi)",
      "Cutting-edge Clinical Simulation Centre for nursing and pediatric healthcare training",
      "Grounded in Mahayana Buddhist philosophy emphasizing holistic, compassionate patient care",
      "Vibrant student exchange agreements and clinical observation partnerships across Asia and Oceania"
    ],
    programs: [
      { title: "Bachelor of Science in Health and Nutrition (Registered Dietitian Course)", level: "Undergraduate Degree", desc: "Four-year specialized degree training clinical dietitians in medical nutrition therapy, sports nutrition, and institutional food systems." },
      { title: "Bachelor of Science in Nursing (Department of Nursing)", level: "Undergraduate Degree", desc: "Four-year comprehensive nursing degree preparing registered nurses and public health nurses for hospital and community clinics." },
      { title: "Master of Psychological Sciences (Clinical Psychology Course)", level: "Graduate Degree", desc: "Certified training program preparing licensed clinical psychologists (Rinsho Shinrishi) and certified public psychologists (Konin Shinrishi)." }
    ],
    opportunities: [
      {
        id: 4722,
        title: "Kyoto Koka International Student Special Tuition Reduction Award",
        type: "Scholarship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        desc: "Tuition reduction scholarship covering 30% to 50% of annual tuition fees for eligible self-funded international students across healthcare and humanities faculties.",
        funding: "30% to 50% tuition reduction (saving approx. ¥350,000 to ¥550,000 per academic year)",
        fee: "¥30,000 application screening fee",
        tuition: "¥1,380,000 standard annual tuition and laboratory fees (reduced by scholarship)",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        source: "https://www.koka.ac.jp/examination/international/",
        requirements: {
          gpa: "Minimum 3.0/4.0 equivalent in high school or undergraduate transcript",
          ielts: "JLPT N2 or N1 (Japanese Language Proficiency Test)",
          gre: "Not required",
          papers: "Statement of purpose written in Japanese (800 characters) and proof of financial solvency",
          references: "One academic referee letter from Japanese language school or high school"
        }
      },
      {
        id: 4723,
        title: "Bachelor of Science in Health & Nutrition (Registered Dietitian) Admission",
        type: "Bachelor's",
        subject: "biology",
        subjects: ["biology", "chemistry"],
        desc: "Four-year degree equipping graduates to pass Japan's rigorous national registered dietitian examination and manage specialized clinical diets in hospitals.",
        funding: "Koka Academic Achievement Scholarships up to ¥300,000/year",
        fee: "¥30,000",
        tuition: "¥1,420,000 per year including laboratory clinical fees",
        deadline: "2027-01-20",
        deadlineText: "January 20, 2027",
        source: "https://www.koka.ac.jp/faculty/nutrition/",
        requirements: {
          gpa: "12 years of formal education with strong background in Chemistry and Biology",
          ielts: "JLPT N1 recommended (N2 minimum for clinical communication)",
          gre: "EJU (Examination for Japanese University Admission) scores in Science",
          papers: "High school transcripts and personal health certification",
          references: "Principal or teacher recommendation"
        }
      },
      {
        id: 4724,
        title: "Kyoto University Hospital Clinical Dietetics & Nursing Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Eight-week hospital rotation at major university teaching hospitals in Kyoto managing clinical nutrition charts and post-operative nutritional support.",
        funding: "Institutional clinical travel and uniform subsidy",
        fee: "None",
        tuition: "Included in degree tuition",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.koka.ac.jp/career/practicum/",
        requirements: {
          gpa: "Completed third-year clinical dietetics coursework with grade 'B' or higher",
          ielts: "Fluent native or near-native Japanese (JLPT N1)",
          gre: "Not required",
          papers: "Immunization record and OSPE (Objective Structured Practical Exam) passing certificate",
          references: "Clinical practicum supervisor clearance"
        }
      },
      {
        id: 4725,
        title: "Master of Psychological Sciences (Clinical Psychology) Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Two-year graduate degree accredited as a Type-I designated graduate school for training Certified Public Psychologists and Clinical Psychologists in Japan.",
        funding: "Graduate research assistantships providing ¥200,000 per term",
        fee: "¥30,000",
        tuition: "¥920,000 per academic year",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.koka.ac.jp/graduate/psychology/",
        requirements: {
          gpa: "Bachelor's degree in psychology or related human services field",
          ielts: "JLPT N1 proficiency",
          gre: "Not required",
          papers: "Research proposal (2,000 Japanese characters) and thesis summary",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4726,
        title: "Koka Buddhist Humanities & Traditional Kyoto Culture Research Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "One-year visiting research fellowship exploring Shin Buddhist ethics, traditional Japanese tea ceremony (Chado) therapy, and elderly mindfulness care in Kyoto temples.",
        funding: "¥1,800,000 annual research grant plus temple archives residency",
        fee: "None",
        tuition: "Tuition-free fellowship",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.koka.ac.jp/research/buddhist-studies/",
        requirements: {
          gpa: "Master's degree or PhD candidate in religious studies, Japanese history, or cultural philosophy",
          ielts: "Japanese proficiency suitable for archival reading (JLPT N1)",
          gre: "Not required",
          papers: "3-page research plan on Buddhist compassionate care models",
          references: "Two academic letters"
        }
      },
      {
        id: 4727,
        title: "Japanese Traditional Washoku Nutritional Science & Fermentation Course",
        type: "Course",
        subject: "chemistry",
        subjects: ["chemistry", "biology"],
        desc: "Four-week intensive summer lecture and laboratory series examining the biochemistry of koji fermentation, miso aging, and UNESCO Washoku dietary balance.",
        funding: "Kansai Agrifood Foundation study grant ¥50,000",
        fee: "¥10,000",
        tuition: "¥85,000 course fee inclusive of all fermentation lab ingredients",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.koka.ac.jp/lifelong/washoku/",
        requirements: {
          gpa: "Basic knowledge of organic chemistry or biology",
          ielts: "Japanese B1/N3 or English (bilingual interpreter provided)",
          gre: "Not required",
          papers: "Registration form",
          references: "None"
        }
      },
      {
        id: 4728,
        title: "Department of Child Education Preschool & Nursery Teacher Training Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Four-year degree qualifying educators for both Kindergarten Teacher (Type-1) and Certified Nursery Teacher (Hoikushi) national licenses.",
        funding: "Kyoto Prefecture Nursery Teacher Training Loan Scheme (full loan forgiveness upon 5 years local service)",
        fee: "¥30,000",
        tuition: "¥1,350,000 per year",
        deadline: "2027-02-10",
        deadlineText: "February 10, 2027",
        source: "https://www.koka.ac.jp/faculty/child/",
        requirements: {
          gpa: "High school graduation diploma",
          ielts: "JLPT N2 or higher",
          gre: "Not required",
          papers: "Piano aptitude self-evaluation and personal statement",
          references: "One educator recommendation"
        }
      }
    ],
    researchers: [
      {
        id: 2043,
        name: "Prof. Dr. Hiroshi Tomita",
        title: "President",
        department: "Office of the President & Faculty of Healthcare Sciences",
        email: "president@mail.koka.ac.jp",
        website: "https://www.koka.ac.jp/about/president/",
        recruiting: "Not verified",
        interests: ["Higher education for women in Japan", "Pediatric clinical sciences", "Buddhist bioethics in terminal care", "Regional healthcare networks in Kansai"]
      },
      {
        id: 2044,
        name: "Prof. Dr. Michitaka Naito",
        title: "Professor of Clinical Nutrition & Food Biochemistry",
        department: "Department of Health and Nutrition",
        email: "m-naito@mail.koka.ac.jp",
        website: "https://www.koka.ac.jp/faculty/nutrition/professors/",
        recruiting: "Not verified",
        interests: ["Lipid metabolism in metabolic syndrome", "Functional components in traditional Kyoto vegetables (Kyo-yasai)", "Nutritional intervention for atherosclerosis", "Dietary fiber bioactivity"]
      },
      {
        id: 2045,
        name: "Prof. Dr. Keiko Kawano",
        title: "Professor of Clinical Psychology",
        department: "Graduate School of Psychological Sciences",
        email: "k-kawano@mail.koka.ac.jp",
        website: "https://www.koka.ac.jp/graduate/psychology/professors/",
        recruiting: "Not verified",
        interests: ["Cognitive behavioral therapy for anxiety disorders", "Child development counseling in school settings", "Parent-child psychotherapy", "Mindfulness-based stress reduction"]
      }
    ]
  },

  // 24. Japan: Kyoto Tachibana University
  {
    institution: "Kyoto Tachibana University",
    slug: "kyoto-tachibana-university",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1693,
    location: "Yamashina-ku, Kyoto, Kansai, Japan",
    website: "https://www.tachibana-u.ac.jp",
    shortName: "Kyoto Tachibana",
    badge: "AI Informatics & Cultural Heritage Design",
    overview: "Nestled on the green foothills of Mount Yamashina in eastern Kyoto, Kyoto Tachibana University is an agile, rapidly growing comprehensive university. Known for its world-class brass band club ('Orange Devils'), top-ranked Faculty of Nursing, Faculty of AI and Global Engineering, and vibrant Japanese historical heritage studies.",
    lead: "Study artificial intelligence, historical cultural heritage, and nursing sciences in ancient Kyoto at Kyoto Tachibana University.",
    description: "Kyoto Tachibana University degree programs, AI informatics scholarships, and historical heritage fellowships in Yamashina, Kyoto, Japan.",
    quickFacts: {
      type: "Private Comprehensive Coeducational University",
      campus: "Yamashina Green Hillside Campus, Kyoto (near JR Yamashina Station)",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "General entrance examination in January; international student admission in November",
      language: "Japanese & English (multidisciplinary global curriculum)",
      aid: "Tachibana Incentive Scholarships, JASSO Honors Grants, MEXT Recommendation"
    },
    strengths: [
      "Brand-new Faculty of AI & Informatics focusing on applied data science and generative algorithms",
      "Premier clinical nursing and physical therapy programs affiliated with top Kansai medical centers",
      "Celebrated Kyoto Historical Heritage Studies investigating Heian archaeological excavations",
      "World-famous Kyoto Tachibana Wind Orchestra ('Orange Devils') renowned internationally"
    ],
    programs: [
      { title: "Bachelor of Science in Information Science (Faculty of AI & Informatics)", level: "Undergraduate Degree", desc: "Four-year computing degree specializing in machine learning, cloud architecture, game design, and digital media informatics." },
      { title: "Bachelor of Science in Nursing", level: "Undergraduate Degree", desc: "Four-year nursing degree preparing candidates for the Japanese National Nursing Examination with clinical rotations at Kyoto University Hospital." },
      { title: "Bachelor of Arts in Historical Heritage Studies", level: "Undergraduate Degree", desc: "Interdisciplinary archaeology and cultural preservation degree conducting active excavations and digital archiving of Kyoto temples and shrines." }
    ],
    opportunities: [
      {
        id: 4729,
        title: "Kyoto Tachibana AI & Data Science Entrance Scholarship",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "mathematics"],
        desc: "Merit-based entrance scholarship awarding full or half tuition waivers to students entering the Faculty of AI and Informatics with superior math/programming aptitude.",
        funding: "¥500,000 to ¥1,000,000 annual tuition waiver, renewable for up to four years",
        fee: "¥30,000 examination fee",
        tuition: "¥1,480,000 standard annual engineering/informatics tuition",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.tachibana-u.ac.jp/admission/scholarship/",
        requirements: {
          gpa: "Minimum 3.3/4.0 in high school mathematics and information technology",
          ielts: "JLPT N2 (or EJU score of 280+ in Japanese)",
          gre: "Not required",
          papers: "Algorithmic coding project description or mathematics portfolio",
          references: "One mathematics or science teacher recommendation"
        }
      },
      {
        id: 4730,
        title: "Bachelor of Science in Information Science Admission",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Four-year degree developing AI engineers, data analysts, and full-stack software developers equipped with Python, PyTorch, and AWS cloud proficiencies.",
        funding: "Tachibana Global Future Bursaries up to ¥400,000/year",
        fee: "¥30,000",
        tuition: "¥1,480,000 per academic year",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027",
        source: "https://www.tachibana-u.ac.jp/faculty/ai_informatics/",
        requirements: {
          gpa: "High school diploma with completion of advanced algebra and calculus",
          ielts: "JLPT N2 or higher",
          gre: "Not required",
          papers: "High school transcripts and personal statement",
          references: "High school principal recommendation"
        }
      },
      {
        id: 4731,
        title: "Kyoto Historical Temples Digital Archiving & 3D Photogrammetry Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "computer-science"],
        desc: "One-year research fellowship applying 3D laser scanning, drone photogrammetry, and VR reconstruction to historic wooden temple structures in Yamashina and Higashiyama.",
        funding: "¥2,000,000 annual fellowship stipend plus laser scanning equipment access",
        fee: "None",
        tuition: "Tuition-free research fellowship",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.tachibana-u.ac.jp/research/cultural_heritage/",
        requirements: {
          gpa: "Master's degree in archaeology, architectural history, or digital media",
          ielts: "Japanese JLPT N1 or English C1",
          gre: "Not required",
          papers: "3-page research proposal on digital preservation of Japanese Buddhist architecture",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4732,
        title: "Kansai Medical Center Advanced Nursing Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology"],
        desc: "Ten-week clinical hospital rotation stationed at Kyoto Prefectural Medical University Hospital or Takeda General Hospital managing acute care nursing.",
        funding: "Institutional clinical placement allowance ¥40,000/month",
        fee: "None",
        tuition: "Included in standard nursing tuition",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.tachibana-u.ac.jp/faculty/nursing/",
        requirements: {
          gpa: "Completed third-year nursing coursework and practical OSCE exam",
          ielts: "Native or certified JLPT N1 Japanese fluency",
          gre: "Not required",
          papers: "Hospital placement clearance and medical fitness certificate",
          references: "Faculty nursing supervisor sign-off"
        }
      },
      {
        id: 4733,
        title: "Kyoto Tachibana International Student Tuition Support Grant",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Annual scholarship providing 30% reduction in annual tuition fees for all privately financed international undergraduate and graduate students in good standing.",
        funding: "30% reduction of tuition fees (saving approx. ¥300,000 to ¥450,000 per year)",
        fee: "None",
        tuition: "Applied directly to semester billing",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://www.tachibana-u.ac.jp/international/scholarship/",
        requirements: {
          gpa: "Maintaining GPA of 2.5/4.0 and at least 80% attendance in all courses",
          ielts: "JLPT N2 or higher",
          gre: "Not required",
          papers: "Economic status statement and Alien Registration card",
          references: "Academic advisor recommendation"
        }
      },
      {
        id: 4734,
        title: "Master of Arts in Cultural Policy and Japanese History Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Two-year graduate degree investigating medieval Kyoto urban history, temple archival documents (Komonjo), and museum curation.",
        funding: "Graduate research bursaries ¥250,000/year",
        fee: "¥30,000",
        tuition: "¥840,000 per year",
        deadline: "2027-01-25",
        deadlineText: "January 25, 2027",
        source: "https://www.tachibana-u.ac.jp/graduate/letters/",
        requirements: {
          gpa: "Bachelor's degree in history, archaeology, Japanese literature, or museum studies",
          ielts: "JLPT N1 (ability to read classical Japanese cursive script advantageous)",
          gre: "Not required",
          papers: "Undergraduate thesis summary and 2,000-character master's research plan",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4735,
        title: "Summer Intensive Program in Japanese Game Development & Anime Informatics",
        type: "Course",
        subject: "computer-science",
        subjects: ["computer-science", "arts-design"],
        desc: "Three-week studio course exploring Unity 3D engine programming, character rigging, and Japanese game narrative construction in Kyoto.",
        funding: "Kyoto Digital Entertainment Association student bursary ¥30,000",
        fee: "¥15,000",
        tuition: "¥120,000 complete course fee",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.tachibana-u.ac.jp/summer_school/",
        requirements: {
          gpa: "Basic programming or 3D modeling experience",
          ielts: "English B2 or Japanese N3",
          gre: "Not required",
          papers: "Personal portfolio or GitHub repository link",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 2046,
        name: "Prof. Dr. Hiroki Sato",
        title: "President",
        department: "Office of the President & Faculty of Economics",
        email: "president@tachibana-u.ac.jp",
        website: "https://www.tachibana-u.ac.jp/about/president/",
        recruiting: "Not verified",
        interests: ["Higher education management in Japan", "Labor economics and employment systems", "Human resource development in regional Kansai", "Work-life balance policy"]
      },
      {
        id: 2047,
        name: "Prof. Dr. Takayuki Nakamura",
        title: "Dean of the Faculty of AI and Informatics",
        department: "Faculty of AI and Informatics",
        email: "nakamura-t@tachibana-u.ac.jp",
        website: "https://www.tachibana-u.ac.jp/faculty/ai_informatics/teachers/",
        recruiting: "Not verified",
        interests: ["Intelligent robotics and human-robot interaction", "Computer vision for elder care", "Autonomous mobile robots", "Deep reinforcement learning"]
      },
      {
        id: 2048,
        name: "Prof. Dr. Masahiro Inokuchi",
        title: "Professor of Japanese Archaeology & Cultural Heritage",
        department: "Department of Historical Heritage",
        email: "inokuchi-m@tachibana-u.ac.jp",
        website: "https://www.tachibana-u.ac.jp/faculty/letters/teachers/",
        recruiting: "Not verified",
        interests: ["Ancient Kyoto urban archaeology", "Heian-kyo palace site excavations", "Conservation science of historical wooden artifacts", "Ceramic chronology in Kansai"]
      }
    ]
  },

  // 25. Japan: Kyoto University of Education
  {
    institution: "Kyoto University of Education",
    slug: "kyoto-university-of-education",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1696,
    location: "Fushimi-ku, Kyoto, Kansai, Japan",
    website: "https://www.kyokyo-u.ac.jp",
    shortName: "Kyokyo",
    badge: "National Pedagogical Sciences & Science Didactics",
    overview: "Founded in 1876, Kyoto University of Education (Kyoto Kyoiku Daigaku) is a distinguished national university in Fushimi, Kyoto, dedicated solely to teacher education, pedagogical theory, STEM educational sciences, and educational leadership. It operates affiliated primary, secondary, and special needs schools across Kyoto.",
    lead: "Experience Japan's premier national teacher training university, STEM didactic laboratories, and educational psychology at Kyoto University of Education.",
    description: "Kyoto University of Education national degree programs, MEXT teacher training scholarships, and educational science doctorates in Fushimi, Kyoto, Japan.",
    quickFacts: {
      type: "National University Corporation (Kokuritsu Daigaku Hojin)",
      campus: "Fukakusa Campus, Fushimi-ku, Kyoto (near JR Fujinomori Station)",
      accreditation: "National Institution for Academic Degrees and Quality Enhancement of Higher Education (NIAD-QE)",
      admissions: "National Center Test & Secondary Entrance Exams in February/March; MEXT Teacher Training in Autumn",
      language: "Japanese (English used in international comparative education research)",
      aid: "MEXT Japanese Government Scholarships, National Tuition Exemption (100% or 50% waiver)"
    },
    strengths: [
      "Distinguished national teacher training university with over 145 years of educational heritage",
      "Comprehensive network of on-site affiliated elementary, junior high, and special needs laboratory schools",
      "Pioneering Center for Environmental Education and Science Didactics",
      "MEXT designated host university for Teacher Training Program international research fellows"
    ],
    programs: [
      { title: "Bachelor of Education (Faculty of Education)", level: "Undergraduate Degree", desc: "Four-year comprehensive degree with specializations in science didactics, mathematics education, language arts, social studies, and fine arts pedagogy." },
      { title: "Master of Education (Graduate School of Teacher Education)", level: "Professional Master's", desc: "Professional degree (Kyoshoku Daigakuin) preparing master teachers, school principals, and instructional design supervisors." },
      { title: "Joint PhD in Educational Sciences (United Graduate School of Education)", level: "Doctoral Degree", desc: "Doctoral research program delivered in consortium examining cognitive learning mechanisms, comparative pedagogy, and educational policy." }
    ],
    opportunities: [
      {
        id: 4736,
        title: "MEXT Teacher Training Program International Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Eighteen-month Japanese Government (MEXT) fellowship for international school teachers conducting comparative pedagogical research and observing classroom practice in Kyoto.",
        funding: "¥143,000 monthly living stipend, round-trip international airfare, and 100% full tuition waiver",
        fee: "None",
        tuition: "Fully waived by Japanese Government",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.kyokyo-u.ac.jp/international/mext_teacher.html",
        requirements: {
          gpa: "Graduate of a university or teacher training college with at least 5 years active classroom teaching experience",
          ielts: "English or Japanese proficiency; willingness to undertake 6-month intensive Japanese language training",
          gre: "Not required",
          papers: "Recommendation through Japanese Embassy in home country and 1,500-word educational research proposal",
          references: "Official school employer recommendation and national ministry endorsement"
        }
      },
      {
        id: 4737,
        title: "Kyoto University of Education National Tuition Exemption Program",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Full (100%) or partial (50%) national tuition waiver granted to enrolled undergraduate and graduate students demonstrating academic excellence and financial need.",
        funding: "100% waiver (saving ¥535,800/year) or 50% waiver (saving ¥267,900/year)",
        fee: "¥17,000 national entrance exam fee",
        tuition: "¥535,800 standard national university annual tuition (fully waived upon approval)",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.kyokyo-u.ac.jp/student/tuition_exemption.html",
        requirements: {
          gpa: "Enrolled in undergraduate or graduate school in good academic standing (top 30% of class)",
          ielts: "Japanese language proficiency",
          gre: "Not required",
          papers: "Family income documentation and financial hardship statement",
          references: "Academic advisor recommendation"
        }
      },
      {
        id: 4738,
        title: "Master of Education (Professional Degree in School Leadership) Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-year professional master's (Kyoshoku Daigakuin) addressing school crisis management, classroom lesson study (Jugyokenkyu), and inclusive education.",
        funding: "Teaching assistantships and prefectural board of education sponsorships",
        fee: "¥30,000",
        tuition: "¥535,800 per academic year",
        deadline: "2027-01-10",
        deadlineText: "January 10, 2027",
        source: "https://www.kyokyo-u.ac.jp/graduate/",
        requirements: {
          gpa: "Bachelor's degree and Japanese Teacher License (or international equivalent)",
          ielts: "Native or JLPT N1 Japanese fluency",
          gre: "Not required",
          papers: "Pedagogical research proposal (3,000 Japanese characters) and teaching portfolio",
          references: "Two professional or academic references"
        }
      },
      {
        id: 4739,
        title: "Kyoto National Affiliated Schools Lesson Study & Teaching Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Eight-week intensive pedagogical practicum embedded in Kyoto University of Education's attached elementary and junior high schools practicing Japanese Lesson Study (Jugyokenkyu).",
        funding: "National school practicum supplies provided",
        fee: "None",
        tuition: "Curricular requirement",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://www.kyokyo-u.ac.jp/attached_school/",
        requirements: {
          gpa: "Third-year standing in Bachelor of Education with passing grades in educational foundation courses",
          ielts: "Japanese native or JLPT N1",
          gre: "Not required",
          papers: "Detailed 45-minute lesson plan (Shidoan) in chosen discipline",
          references: "Practicum director approval"
        }
      },
      {
        id: 4740,
        title: "Bachelor of Education (Science Education Specialization) Admission",
        type: "Bachelor's",
        subject: "physics",
        subjects: ["physics", "chemistry"],
        desc: "Four-year national degree preparing secondary school physics, chemistry, biology, and earth science teachers with experimental laboratory mastery.",
        funding: "National JASSO scholarships and university tuition waivers eligible",
        fee: "¥17,000",
        tuition: "¥535,800 per year",
        deadline: "2027-02-05",
        deadlineText: "February 5, 2027",
        source: "https://www.kyokyo-u.ac.jp/faculty/science/",
        requirements: {
          gpa: "Completion of 12 years of schooling and Common Test for University Admissions (Kyotsu Test)",
          ielts: "Japanese language mastery",
          gre: "Not required",
          papers: "National secondary school transcripts and personal statement",
          references: "High school principal endorsement"
        }
      },
      {
        id: 4741,
        title: "Center for Environmental Education Boreal-Temperate Forest Ecology Grant",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "biology"],
        desc: "One-year visiting research grant investigating environmental curriculum development, outdoor sensory ecology, and biodiversity fieldwork at Fushimi ecological stations.",
        funding: "¥1,500,000 annual research grant plus field station laboratory access",
        fee: "None",
        tuition: "Tuition-free research status",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.kyokyo-u.ac.jp/center/environmental/",
        requirements: {
          gpa: "Master's degree in environmental science, ecology, or science education",
          ielts: "Japanese B2 or English B2",
          gre: "Not required",
          papers: "1,200-word proposed environmental didactic module",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4742,
        title: "Certificate Course in Japanese Lesson Study & Cross-Cultural Didactics",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-week international summer seminar examining the collaborative design, video reflection, and collaborative critique of classroom lesson plans.",
        funding: "JICA and international participant travel bursaries available",
        fee: "¥15,000",
        tuition: "¥60,000 certificate fee",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.kyokyo-u.ac.jp/international/lesson_study.html",
        requirements: {
          gpa: "Active classroom teachers or graduate students in education",
          ielts: "English B2 (simultaneous Japanese interpretation provided)",
          gre: "Not required",
          papers: "Brief CV and sample lesson plan from home country",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 2049,
        name: "Prof. Dr. Hiroaki Kosaka",
        title: "President",
        department: "Office of the President & Department of Mathematics Education",
        email: "president@kyokyo-u.ac.jp",
        website: "https://www.kyokyo-u.ac.jp/about/president/",
        recruiting: "Not verified",
        interests: ["Mathematics didactic theory", "Teacher training curriculum reform", "National university governance", "Lesson study in mathematical reasoning"]
      },
      {
        id: 2050,
        name: "Prof. Dr. Tatsuya Mizukoshi",
        title: "Professor of Science Education & Physics Didactics",
        department: "Department of Science Education",
        email: "mizukoshi@kyokyo-u.ac.jp",
        website: "https://www.kyokyo-u.ac.jp/faculty/science/staff/",
        recruiting: "Not verified",
        interests: ["Conceptual change in physics learning", "Development of hands-on electromagnetic experimental apparatus", "Inquiry-based STEM curricula", "ICT in science classrooms"]
      },
      {
        id: 2051,
        name: "Prof. Dr. Yuko Tsuboi",
        title: "Professor of Special Needs Education & Child Psychology",
        department: "Department of Special Needs Education",
        email: "y-tsuboi@kyokyo-u.ac.jp",
        website: "https://www.kyokyo-u.ac.jp/faculty/special_needs/staff/",
        recruiting: "Not verified",
        interests: ["Inclusive education systems in Japanese schools", "Support systems for children with developmental disorders", "Universal design of learning (UDL)", "Teacher consultative competencies"]
      }
    ]
  },

  // 26. Japan: Kyoto University of Foreign Studies (KUFS)
  {
    institution: "Kyoto University of Foreign Studies (KUFS)",
    slug: "kyoto-university-of-foreign-studies-kufs",
    countryId: "japan",
    countryLabel: "Japan",
    sourceRow: 1697,
    location: "Ukyo-ku, Kyoto, Kansai, Japan",
    website: "https://www.kufs.ac.jp",
    shortName: "KUFS Kyoto",
    badge: "Multilingual Diplomacy & Global Studies",
    overview: "Founded in 1947, Kyoto University of Foreign Studies (Kyoto Gaikokugo Daigaku) is a premier private language and international affairs university in western Kyoto. Operating under the motto PAX MUNDI PER LINGUAS ('World Peace through Languages'), KUFS offers intensive education in 19 foreign languages, international relations, translation science, and Japanese language pedagogy.",
    lead: "Master global diplomacy, conference translation, and cultural diplomacy across 19 languages at Kyoto University of Foreign Studies.",
    description: "Kyoto University of Foreign Studies degree programs, international relations master's, and multilingual translation scholarships in Kyoto, Japan.",
    quickFacts: {
      type: "Private Foreign Studies and International Affairs University",
      campus: "Saiin Campus, Ukyo-ku, Kyoto (near Hankyu Saiin Station)",
      accreditation: "Japan University Accreditation Association (JUAA) / MEXT",
      admissions: "Spring (April) and Autumn (September) entrance cycles",
      language: "Japanese, English, Spanish, French, German, Italian, Russian, Chinese, Korean, etc.",
      aid: "Morita Fund Scholarships, KUFS International Student Tuition Reduction (30%)"
    },
    strengths: [
      "Instruction in 19 world languages coupled with area studies and international diplomacy",
      "Department of Global Studies taught 100% in English (no Japanese prerequisite for admission)",
      "State-of-the-art multilingual self-access learning hub (NINJA - Navigating Information for Japanese and Global Autonomy)",
      "Strong placement record in Japanese foreign diplomacy, UN agencies, and global trading companies (Sogo Shosha)"
    ],
    programs: [
      { title: "Bachelor of Arts in Global Studies (Department of Global Studies)", level: "Undergraduate Degree", desc: "Four-year English-taught major examining international peace and conflict, sustainable development, and cross-cultural communication." },
      { title: "Bachelor of Arts in Global Tourism", level: "Undergraduate Degree", desc: "Specialized degree exploring cultural heritage management, sustainable eco-tourism, and airline/hospitality governance." },
      { title: "Master of Arts in Language and Culture (Graduate School of Foreign Studies)", level: "Graduate Degree", desc: "Two-year master's program with specializations in translation and interpreting, applied linguistics, and comparative cultural studies." }
    ],
    opportunities: [
      {
        id: 4743,
        title: "KUFS Morita International Peace Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Prestigious merit scholarship providing full or 50% tuition remission for international students enrolled in the Department of Global Studies or Global Tourism.",
        funding: "Full or half tuition waiver (saving ¥500,000 to ¥1,000,000 per academic year)",
        fee: "¥30,000 application fee",
        tuition: "¥1,260,000 standard annual undergraduate tuition",
        deadline: "2027-01-15",
        deadlineText: "January 15, 2027",
        source: "https://www.kufs.ac.jp/en/admissions/scholarships/",
        requirements: {
          gpa: "Minimum 3.2/4.0 in secondary school coursework",
          ielts: "IELTS 6.5 overall (minimum 6.0 each band) or TOEFL iBT 80 (for English track)",
          gre: "Not required",
          papers: "1,000-word essay on 'Fostering World Peace through Intercultural Dialogue'",
          references: "Two academic recommendation letters"
        }
      },
      {
        id: 4744,
        title: "Bachelor of Arts in Global Studies (English-Medium Degree) Admission",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year undergraduate degree taught entirely in English covering international security, post-colonial human rights, and global trade economics.",
        funding: "30% automatic international student tuition reduction for all self-funded students",
        fee: "¥30,000",
        tuition: "¥1,260,000 per year (reduced to approx. ¥882,000 with 30% reduction)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.kufs.ac.jp/en/faculties/global_studies/",
        requirements: {
          gpa: "High school graduation certificate",
          ielts: "IELTS 6.0 or TOEFL iBT 71",
          gre: "Not required",
          papers: "Statement of purpose and online video interview",
          references: "High school counselor or educator reference"
        }
      },
      {
        id: 4745,
        title: "Master of Arts in Language and Culture (Translation & Interpreting Track)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Two-year graduate degree in simultaneous and consecutive interpreting, literary translation, and legal-commercial translation between Japanese and English/Spanish.",
        funding: "KUFS Graduate Research Bursaries ¥300,000/year",
        fee: "¥30,000",
        tuition: "¥820,000 per academic year",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.kufs.ac.jp/en/graduate/",
        requirements: {
          gpa: "Bachelor's degree in languages, linguistics, literature, or international relations",
          ielts: "IELTS 7.0 (for non-native English speakers) or JLPT N1 (for non-native Japanese speakers)",
          gre: "Not required",
          papers: "Sample translation and 1,500-word proposed thesis topic",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4746,
        title: "United Nations & Diplomatic NGOs Internship Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Semester-long practical internship placement with UN agencies, international cultural consulates in Osaka/Kobe, or multinational trading chambers.",
        funding: "International mobility stipend ¥60,000/month",
        fee: "None",
        tuition: "Academic credit enrollment applies",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.kufs.ac.jp/career/internship/",
        requirements: {
          gpa: "Completed 60 undergraduate credits with minimum 3.0 GPA",
          ielts: "Bilingual English and Japanese fluency",
          gre: "Not required",
          papers: "Diplomatic CV and motivation letter",
          references: "KUFS Career Centre endorsement"
        }
      },
      {
        id: 4747,
        title: "KUFS 30% International Student Tuition Reduction Award",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Institutional financial assistance scheme providing an automatic 30% tuition fee reduction to eligible visa-holding international undergraduate students.",
        funding: "30% off annual tuition (saving approx. ¥378,000 per year)",
        fee: "None",
        tuition: "Applied directly to billing statement",
        deadline: "2026-12-01",
        deadlineText: "December 1, 2026",
        source: "https://www.kufs.ac.jp/en/admissions/fees/",
        requirements: {
          gpa: "Enrolled undergraduate with 'College Student' residence status and satisfactory GPA",
          ielts: "English or Japanese according to program language",
          gre: "Not required",
          papers: "Income and residence card documentation",
          references: "Faculty advisor confirmation"
        }
      },
      {
        id: 4748,
        title: "Kyoto Heritage Tourism & Sustainable Hospitality Management Course",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Six-week upper-level certificate module analyzing overtourism mitigation, UNESCO intangible cultural preservation, and ryokan eco-lodging in Kyoto.",
        funding: "Field excursion subsidies provided by Kyoto Tourism Bureau",
        fee: "¥10,000",
        tuition: "¥65,000 module tuition",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.kufs.ac.jp/faculties/global_tourism/",
        requirements: {
          gpa: "Enrolled undergraduate in tourism, business, or anthropology",
          ielts: "English B2 or Japanese N2",
          gre: "Not required",
          papers: "Registration form",
          references: "None"
        }
      },
      {
        id: 4749,
        title: "Visiting Research Fellowship in Japanese as a Second Language Pedagogy",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "One-year post-master's fellowship investigating communicative Japanese language teaching methodologies, kanji acquisition psychology, and digital language tools.",
        funding: "¥1,800,000 annual research stipend plus NINJA language lab facilities access",
        fee: "None",
        tuition: "Tuition-free visiting scholar status",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.kufs.ac.jp/research/fellowships/",
        requirements: {
          gpa: "Master's degree in applied linguistics, Japanese language education, or TESOL",
          ielts: "JLPT N1 and English C1",
          gre: "Not required",
          papers: "2,000-word proposed research project on second language acquisition",
          references: "Two academic referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2052,
        name: "Prof. Dr. Takahiro Ono",
        title: "President",
        department: "Office of the President & Department of Hispanic Studies",
        email: "president@kufs.ac.jp",
        website: "https://www.kufs.ac.jp/about/president/",
        recruiting: "Not verified",
        interests: ["Spanish and Latin American literature", "Intercultural communication theory", "International university diplomacy", "Foreign language educational pedagogy"]
      },
      {
        id: 2053,
        name: "Prof. Dr. Craig Smith",
        title: "Professor of Global Studies & International Relations",
        department: "Department of Global Studies",
        email: "c_smith@kufs.ac.jp",
        website: "https://www.kufs.ac.jp/en/faculties/global_studies/staff/",
        recruiting: "Not verified",
        interests: ["East Asian security politics", "Transnational migration and identity in Japan", "Conflict resolution in the Asia-Pacific", "Peace education methodologies"]
      },
      {
        id: 2054,
        name: "Prof. Dr. Nobuo Saji",
        title: "Professor of Applied Linguistics & Cognitive Semantics",
        department: "Graduate School of Foreign Studies",
        email: "n_saji@kufs.ac.jp",
        website: "https://www.kufs.ac.jp/en/graduate/staff/",
        recruiting: "Not verified",
        interests: ["Cognitive linguistics and metaphor processing", "Vocabulary acquisition in second language learning", "Lexical semantics", "Corpus-based language analysis"]
      }
    ]
  },

  // 27. Netherlands: European University of Post-Industrial Cities (UNIC European University Alliance / Erasmus University Rotterdam)
  {
    institution: "European University of Post-Industrial Cities (UNIC European University Alliance / Erasmus University Rotterdam)",
    slug: "unic-european-university-post-industrial-cities",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1407,
    location: "Rotterdam, South Holland, Netherlands",
    website: "https://unic.eu",
    shortName: "UNIC Alliance Rotterdam",
    badge: "European University Alliance & Urban Resilience",
    overview: "The European University of Post-Industrial Cities (UNIC) is a premier European University Alliance funded by the European Commission, anchored in the Netherlands by Erasmus University Rotterdam (Campus Woudestein). Uniting 10 leading European universities, UNIC drives urban resilience, post-industrial economic transition, superdiversity, and cross-border joint European degrees.",
    lead: "Experience groundbreaking European joint degrees, urban post-industrial resilience fellowships, and superdiversity research across 10 European cities with UNIC.",
    description: "UNIC European University Alliance degrees, Erasmus+ mobility grants, and urban transition research fellowships anchored at Erasmus University Rotterdam.",
    quickFacts: {
      type: "European University Alliance (EC Erasmus+ Initiative / Erasmus University Rotterdam Coordinated)",
      campus: "Campus Woudestein, Burgemeester Oudlaan 50, Rotterdam & 10 European partner campuses",
      accreditation: "European Commission / NVAO / European Universities Initiative",
      admissions: "Annual intake in Spring for Autumn semester start",
      language: "English (inter-university European alliance degrees)",
      aid: "Erasmus+ European University Mobility Grants, UNIC Seed Funds, CityLabs Stipends"
    },
    strengths: [
      "Alliance of 10 universities across Rotterdam, Bochum, Cork, Bilbao, Liège, Oulu, Zagreb, Istanbul, Lodz, and Malmö",
      "Pioneering UNIC CityLabs connecting academic researchers with municipal policymakers and citizen groups",
      "Cross-border joint European Master's and micro-credentials with seamless credit portability",
      "Deep focus on just transition, post-industrial regeneration, and superdiversity in urban centers"
    ],
    programs: [
      { title: "Joint Master in Post-Industrial Urban Transformation", level: "Joint European Master's", desc: "Two-year trans-European master's studying industrial heritage repurposing, circular urban metabolism, and socially just green transitions." },
      { title: "Joint Master in Superdiversity in Education and Society", level: "Joint European Master's", desc: "Interdisciplinary European degree addressing linguistic diversity, inclusive urban schooling, and migration governance." },
      { title: "UNIC European Micro-Credentials in Urban Resilience", level: "Postgraduate Certificate", desc: "Modular, stackable European credits covering climate adaptation, participatory budgeting, and smart city digital citizenship." }
    ],
    opportunities: [
      {
        id: 4750,
        title: "UNIC Alliance Transnational European Master's Mobility Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "Erasmus+ funded mobility scholarship supporting students completing joint master's coursework across at least two UNIC alliance member universities.",
        funding: "€1,400 per month Erasmus+ living grant plus €1,500 travel and installation subsidy",
        fee: "None",
        tuition: "€2,530/year statutory EU tuition or €15,600/year non-EU tuition (reduced by alliance grants)",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://unic.eu/en/education/joint-masters",
        requirements: {
          gpa: "Bachelor's degree in urban studies, sociology, economics, geography, or architecture with 3.3 GPA or higher",
          ielts: "IELTS 7.0 overall (minimum 6.5 in all components) or TOEFL iBT 95",
          gre: "Not required",
          papers: "1,200-word statement on post-industrial urban challenges and CV",
          references: "Two academic referee letters from university faculty"
        }
      },
      {
        id: 4751,
        title: "Joint Master in Post-Industrial Urban Transformation Admission",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Two-year multi-campus European degree exploring circular economy redevelopment, former brownfield regeneration, and urban climate adaptation.",
        funding: "UNIC mobility grants covering semester transfers between Rotterdam, Bilbao, and Bochum",
        fee: "€100 EUR administrative evaluation fee",
        tuition: "€2,530/year (EU/EEA) or €15,600/year (Non-EU)",
        deadline: "2027-04-01",
        deadlineText: "April 1, 2027",
        source: "https://unic.eu/en/programs/urban-transformation/",
        requirements: {
          gpa: "Undergraduate degree in social sciences, environmental studies, or urban planning (minimum 180 ECTS)",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Motivation letter detailing why studying in post-industrial cities is vital",
          references: "Two academic references"
        }
      },
      {
        id: 4752,
        title: "UNIC CityLabs Urban Transition Action Research Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        desc: "One-year post-master's fellowship based at Erasmus University Rotterdam conducting co-creation fieldwork with the Port of Rotterdam and Rotterdam City Council.",
        funding: "€24,000 annual research stipend plus CityLabs stakeholder network support",
        fee: "None",
        tuition: "Tuition-free fellowship",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://unic.eu/en/citylabs",
        requirements: {
          gpa: "Master of Science in public administration, urban geography, or environmental sociology",
          ielts: "English C1 (fluent)",
          gre: "Not required",
          papers: "1,500-word proposed participatory research plan on port-city energy transitions",
          references: "Two professional or academic recommendations"
        }
      },
      {
        id: 4753,
        title: "Rotterdam Port Brownfield Industrial Ecology & Circular Economy Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "environment"],
        desc: "Six-month research internship analyzing industrial symbiosis, waste heat networks, and circular building material salvage across the Rotterdam port complex.",
        funding: "€950 monthly corporate trainee stipend",
        fee: "None",
        tuition: "Curricular credit applies",
        deadline: "2027-04-30",
        deadlineText: "April 30, 2027",
        source: "https://unic.eu/en/careers/internships",
        requirements: {
          gpa: "Enrolled in master's degree within UNIC alliance in engineering, industrial ecology, or management",
          ielts: "English B2 or Dutch B2",
          gre: "Not required",
          papers: "CV and cover letter targeted at port transition challenges",
          references: "Academic tutor clearance"
        }
      },
      {
        id: 4754,
        title: "UNIC Alliance Seed Fund for Collaborative Transnational Research",
        type: "PhD",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Seed funding grant for doctoral candidate teams across at least two UNIC universities researching digital public services and algorithmic equity in diverse cities.",
        funding: "€10,000 project grant covering travel, workshop organization, and publication fees",
        fee: "None",
        tuition: "Not applicable",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://unic.eu/en/research/seed-fund",
        requirements: {
          gpa: "Joint application by PhD researchers from at least two distinct UNIC alliance institutions",
          ielts: "English C1",
          gre: "Not required",
          papers: "Collaborative research proposal (max 5 pages) with work packages and budget",
          references: "Endorsement letters from both PhD supervisors"
        }
      },
      {
        id: 4755,
        title: "European Micro-Credential in Superdiverse Classroom Pedagogies",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Ten-week online Blended Intensive Programme (5 ECTS) investigating plurilingual teaching strategies, translanguaging, and anti-bias classroom curricula.",
        funding: "Erasmus+ BIP short-term physical mobility grant €79/day during the 5-day on-campus intensive in Cork",
        fee: "None (for students of UNIC member institutions) / €350 external",
        tuition: "Included in registration",
        deadline: "2026-11-30",
        deadlineText: "November 30, 2026",
        source: "https://unic.eu/en/education/micro-credentials",
        requirements: {
          gpa: "Graduate or advanced undergraduate student in education, linguistics, or social sciences",
          ielts: "English B2",
          gre: "Not required",
          papers: "Motivation statement and transcript",
          references: "None"
        }
      },
      {
        id: 4756,
        title: "Just Transition & Clean Energy Decarbonisation Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        desc: "One-year post-doctoral fellowship modeling job shifts, renewable micro-grids, and social justice outcomes in post-coal and heavy industrial European regions.",
        funding: "€32,000 annual net fellowship stipend plus conference travel allowance",
        fee: "None",
        tuition: "Tuition-free",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://unic.eu/en/research/thematic-lines",
        requirements: {
          gpa: "PhD in energy economics, geography, environmental engineering, or sociology",
          ielts: "English C1",
          gre: "Not required",
          papers: "List of scientific publications and 3-page research proposal on Just Transition indicators",
          references: "Two international academic references"
        }
      }
    ],
    researchers: [
      {
        id: 2055,
        name: "Prof. Dr. Ed Brinksma",
        title: "President of Erasmus University Rotterdam & UNIC Alliance Board Member",
        department: "Executive Board Erasmus University Rotterdam",
        email: "brinksma@cvb.eur.nl",
        website: "https://www.eur.nl/en/about-eur/board-and-management/executive-board",
        recruiting: "Not verified",
        interests: ["European university alliances", "Higher education innovation models", "Formal methods and computer science", "Societal impact of research"]
      },
      {
        id: 2056,
        name: "Prof. Dr. Peter Scholten",
        title: "Alliance Coordinator of UNIC & Professor of Public Policy",
        department: "Department of Public Administration & UNIC Alliance",
        email: "p.scholten@essb.eur.nl",
        website: "https://www.eur.nl/en/people/peter-scholten",
        recruiting: "Not verified",
        interests: ["Governance of superdiversity", "Migration policy analysis", "European higher education integration", "Co-creation and urban CityLabs"]
      },
      {
        id: 2057,
        name: "Prof. Dr. Liesbet van Zoonen",
        title: "Academic Director of Erasmus Graduate School & Professor of Sociology",
        department: "Erasmus School of Social and Behavioural Sciences",
        email: "vanzoonen@essb.eur.nl",
        website: "https://www.eur.nl/en/people/liesbet-van-zoonen",
        recruiting: "Not verified",
        interests: ["Smart cities and democratic citizenship", "Urban digital technology governance", "Gender and media culture", "Public engagement in post-industrial cities"]
      }
    ]
  },

  // 28. Netherlands: ArtEZ University of the Arts - Home of Performance Practices
  {
    institution: "ArtEZ University of the Arts - Home of Performance Practices",
    slug: "artez-home-of-performance-practices-arnhem",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1453,
    location: "Arnhem, Gelderland, Netherlands",
    website: "https://www.performancepractices.nl",
    shortName: "ArtEZ Performance Practices",
    badge: "Choreography & Expanded Theater",
    overview: "ArtEZ University of the Arts in Arnhem is one of the Netherlands' foremost institutions for higher arts education. Its Master of Theatre Practices (now Home of Performance Practices) is an internationally celebrated graduate laboratory for experimental choreography, body-based sonic arts, post-dramatic theatre, and ecological dramaturgy.",
    lead: "Pioneer experimental choreography, expanded dramaturgy, and somatic arts at the Home of Performance Practices at ArtEZ in Arnhem.",
    description: "ArtEZ Home of Performance Practices master's degrees, choreographic research grants, and international performance fellowships in Arnhem, Netherlands.",
    quickFacts: {
      type: "Public Specialized Arts University (Hogeschool voor de Kunsten)",
      campus: "Onderlangs 9 Campus, on the Rhine River banks, Arnhem",
      accreditation: "NVAO (Accreditation Organisation of the Netherlands and Flanders)",
      admissions: "Annual auditions and portfolio assessments in February and April",
      language: "English (international master's cohort)",
      aid: "NL Scholarship (formerly Holland Scholarship), ArtEZ Talent Grants, DUO Study Finance"
    },
    strengths: [
      "Internationally renowned Master of Performance Practices accredited with highest European honors",
      "Prime riverside campus in Arnhem equipped with black box theatres and sound labs",
      "Close partnerships with Holland Festival, Spring Festival Utrecht, and Tanzquartier Wien",
      "Interdisciplinary framework merging contemporary dance, somatic activism, and performance philosophy"
    ],
    programs: [
      { title: "Master of Performance Practices (MA)", level: "Graduate Degree", desc: "Two-year research-based master's for choreographers, performance artists, and theatre makers developing transformative artistic methodologies." },
      { title: "Bachelor of Dance (Dance Artist / Choreography)", level: "Undergraduate Degree", desc: "Four-year comprehensive dance conservatory training performers in contemporary floorwork, partnering, improvisation, and somatic techniques." },
      { title: "Bachelor of Theatre in Education (Docent Theater)", level: "Undergraduate Degree", desc: "Four-year pedagogical and artistic degree qualifying theatre makers to teach, direct community plays, and foster social arts projects." }
    ],
    opportunities: [
      {
        id: 4757,
        title: "ArtEZ NL Scholarship for Non-EEA Performance Artists",
        type: "Scholarship",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Prestigious Dutch Ministry of Education scholarship awarded to exceptionally talented international master's students from outside the EEA.",
        funding: "€5,000 one-time financial contribution towards living expenses in the first study year",
        fee: "€50 audition assessment fee",
        tuition: "€2,530/year (EU/EEA) or €11,500/year (Non-EEA)",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        source: "https://www.artez.nl/en/study-at-artez/scholarships/nl-scholarship",
        requirements: {
          gpa: "Recognized Bachelor of Arts in dance, theatre, visual arts, or performance",
          ielts: "IELTS 6.0 overall (minimum 5.5 in all bands) or equivalent",
          gre: "Not required",
          papers: "Artistic portfolio (video links to original choreographic or performance works) and 1,000-word artistic research proposal",
          references: "Two artistic or academic referee recommendations"
        }
      },
      {
        id: 4758,
        title: "Master of Performance Practices (MA) Admission",
        type: "Master's",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Two-year full-time graduate degree empowering independent artists to test radical performance methodologies and complete an international thesis work.",
        funding: "ArtEZ internal bursaries up to €2,000 and Dutch DUO student financing eligible",
        fee: "€50",
        tuition: "€2,530 per year (EEA statutory rate) / €11,500 (Institutional non-EEA rate)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.performancepractices.nl/admissions",
        requirements: {
          gpa: "Undergraduate degree in performing arts or substantial proven professional track record",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Documentation of artistic practice (video portfolio) and statement of artistic research inquiry",
          references: "Successful completion of live or online audition and interview"
        }
      },
      {
        id: 4759,
        title: "Spring Performing Arts Festival Utrecht Curatorial Practicum",
        type: "Internship",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Four-month practical curatorial and production residency embedded in the Spring Performing Arts Festival Utrecht programming team.",
        funding: "€800 monthly festival trainee stipend plus festival pass",
        fee: "None",
        tuition: "Curricular credit applies",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.performancepractices.nl/partnerships",
        requirements: {
          gpa: "Enrolled student in Master of Performance Practices with strong organizational skills",
          ielts: "English fluency (Dutch advantageous)",
          gre: "Not required",
          papers: "Curatorial statement and professional CV",
          references: "Endorsement by ArtEZ Course Director"
        }
      },
      {
        id: 4760,
        title: "ArtEZ Somatic Ecology & Expanded Dramaturgy Fellowship",
        type: "Fellowship",
        subject: "arts-design",
        subjects: ["arts-design", "environment"],
        desc: "One-year visiting artist-in-residence fellowship exploring ecological grief, more-than-human performance, and body-based sound practices in Gelderland.",
        funding: "€16,000 production and living grant plus free use of studio black boxes",
        fee: "None",
        tuition: "Tuition-free residency",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.performancepractices.nl/residency",
        requirements: {
          gpa: "Completed master's degree in arts or equivalent 5 years professional performance experience",
          ielts: "English C1",
          gre: "Not required",
          papers: "Detailed 1,500-word performance project description and tech rider",
          references: "Two letters of recommendation from international curators or choreographers"
        }
      },
      {
        id: 4761,
        title: "Bachelor of Dance (Dance Artist) Audition Call",
        type: "Bachelor's",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Four-year conservatory program training contemporary dancers in Graham, Cunningham, release technique, contact improvisation, and creative repertoire.",
        funding: "Statutory Dutch tuition fees and government performance grants",
        fee: "€50 audition fee",
        tuition: "€2,530/year (EU) or €10,800/year (Non-EU)",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.artez.nl/en/course/dance-artist",
        requirements: {
          gpa: "Secondary school graduation (HAVO, VWO, or international equivalent)",
          ielts: "English B2 or Dutch B2",
          gre: "Not required",
          papers: "Video pre-selection showing contemporary solo and technical ballet combinations",
          references: "Physical dance physiotherapist medical certificate"
        }
      },
      {
        id: 4762,
        title: "Summer Laboratory in Expanded Voice & Sonic Body Practices",
        type: "Course",
        subject: "arts-design",
        subjects: ["arts-design"],
        desc: "Two-week laboratory intensive in Arnhem exploring extended vocal techniques, contact microphones on body tissue, and collective sound rituals.",
        funding: "Fonds Podiumkunsten partial fee subsidies available",
        fee: "€400 course fee inclusive of sound studio access and recording equipment",
        tuition: "Included in course fee",
        deadline: "2027-05-30",
        deadlineText: "May 30, 2027",
        source: "https://www.performancepractices.nl/summer-lab",
        requirements: {
          gpa: "Open to professional vocalists, sound designers, actors, and choreographers",
          ielts: "English B2",
          gre: "Not required",
          papers: "Short biography and 300-word statement of intent",
          references: "None"
        }
      },
      {
        id: 4763,
        title: "Practice-Based Artistic Research Doctoral Fellowship in Performing Arts",
        type: "PhD",
        subject: "arts-design",
        subjects: ["arts-design", "social-sciences"],
        desc: "Four-year joint PhD in the Arts (in partnership with Radboud University or Leiden University) investigating choreographic notation and political bodies.",
        funding: "€28,000 annual net doctoral researcher stipend plus studio production budget",
        fee: "None",
        tuition: "Tuition-free doctoral candidacy",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.artez.nl/en/research/phd-in-the-arts",
        requirements: {
          gpa: "Master of Fine Arts or Master of Arts in relevant arts discipline",
          ielts: "English C1",
          gre: "Not required",
          papers: "5-page artistic research plan outlining practice-as-research methodology and portfolio",
          references: "Two academic or institutional referee letters"
        }
      }
    ],
    researchers: [
      {
        id: 2058,
        name: "Nirav Christophe",
        title: "Professor of Theatre and Dramaturgy",
        department: "ArtEZ Professorship in Theatre Practices",
        email: "n.christophe@artez.nl",
        website: "https://www.artez.nl/en/research/professorships/theatre-maker",
        recruiting: "Not verified",
        interests: ["Collaborative playwriting methodologies", "Practice-as-research in theatre", "Ecological dramaturgy", "Interdisciplinary performance creation"]
      },
      {
        id: 2059,
        name: "Pavlos Kountouriotis",
        title: "Head of Master of Performance Practices",
        department: "Home of Performance Practices",
        email: "p.kountouriotis@artez.nl",
        website: "https://www.performancepractices.nl/team/",
        recruiting: "Not verified",
        interests: ["Choreography as political activism", "Queer performance theory", "Somatic architectures", "Philosophy of performance"]
      },
      {
        id: 2060,
        name: "Dr. Jeroen Fabius",
        title: "Senior Lecturer in Dance History & Dramaturgy",
        department: "ArtEZ School of Dance",
        email: "j.fabius@artez.nl",
        website: "https://www.artez.nl/en/research/professorships/performative-creative-processes",
        recruiting: "Not verified",
        interests: ["History of contemporary European dance", "Choreographic dramaturgy", "Embodied archives and reconstruction", "Dance pedagogy in higher education"]
      }
    ]
  },

  // 29. Netherlands: NCOI University of Applied Sciences (NCOI Hogeschool)
  {
    institution: "NCOI University of Applied Sciences (NCOI Hogeschool)",
    slug: "ncoi-university-of-applied-sciences",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1459,
    location: "Hilversum & Utrecht, Netherlands",
    website: "https://www.ncoi.nl",
    shortName: "NCOI Hogeschool",
    badge: "Executive Business & Applied Professional Degrees",
    overview: "NCOI Hogeschool (NCOI University of Applied Sciences) is the largest provider of accredited higher professional education for working adults and corporate executives in the Netherlands. NVAO-accredited, NCOI offers practice-oriented Bachelor's, Master's, and Executive MBA degrees structured for full-time professionals across the Netherlands.",
    lead: "Elevate your corporate leadership with NVAO-accredited Executive MBAs, health management master's, and IT degrees at NCOI Hogeschool.",
    description: "NCOI Hogeschool accredited degree programs, Executive MBA courses, and corporate business scholarships in Hilversum, Netherlands.",
    quickFacts: {
      type: "Private Accredited University of Applied Sciences (Aangewezen Hogeschool)",
      campus: "Headquarters in Hilversum with over 30 executive teaching locations across the Netherlands",
      accreditation: "NVAO (Accreditation Organisation of the Netherlands and Flanders) / Ministry of OCW",
      admissions: "Monthly flexible starting moments throughout the calendar year",
      language: "Dutch (selected executive masterclasses in English)",
      aid: "Dutch Government Lifelong Learning Credit (Levenlanglerenkrediet), Employer Tax Subsidies"
    },
    strengths: [
      "Largest accredited educator for working professionals in the Netherlands (over 40,000 active students)",
      "Fully accredited by NVAO with state-recognized HBO Bachelor and Master titles",
      "Executive MBA tracks with specializations in Big Data, Digital Strategy, and Healthcare Management",
      "Practical modular examination based on real-world employer business cases rather than rote testing"
    ],
    programs: [
      { title: "Executive Master of Business Administration (MBA)", level: "Executive Master's", desc: "Two-year NVAO-accredited management program combining corporate financial strategy, leadership psychology, and digital business transformation." },
      { title: "Master of Health Administration (MHA)", level: "Professional Master's", desc: "Specialized healthcare governance degree preparing medical directors and hospital managers for integrated care and cost efficiency." },
      { title: "HBO Bachelor Bedrijfskunde (Business Administration)", level: "Undergraduate Degree", desc: "Four-year flexible work-study bachelor's covering organizational design, supply chain optimization, and commercial strategy." }
    ],
    opportunities: [
      {
        id: 4764,
        title: "Dutch Government Lifelong Learning Credit (Levenlanglerenkrediet) at NCOI",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Government-backed tuition loan scheme providing up to €11,000 per year at favorable rates for adults up to 57 years old pursuing accredited HBO degrees at NCOI.",
        funding: "Up to €11,000 per year low-interest government tuition financing",
        fee: "None",
        tuition: "Full coverage of NCOI tuition costs through government disbursement",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.ncoi.nl/subsidies/levenlanglerenkrediet.html",
        requirements: {
          gpa: "Dutch or EU/EEA citizenship, age under 57 years, and admission to an accredited NCOI HBO degree",
          ielts: "Dutch language proficiency",
          gre: "Not required",
          papers: "DUO application and proof of NCOI degree enrollment",
          references: "Not required"
        }
      },
      {
        id: 4765,
        title: "Executive Master of Business Administration (MBA) Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "Two-year executive master's (60 ECTS) accredited by NVAO, tailored for directors and senior managers managing strategic corporate transitions.",
        funding: "Corporate tax deductibility and employer co-financing packages",
        fee: "€150 registration fee",
        tuition: "€19,500 total program tuition (all course materials, exams, and modular coaching included)",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.ncoi.nl/opleidingen/master-of-business-administration-mba.html",
        requirements: {
          gpa: "Bachelor's degree (HBO or WO) plus at least 3 years relevant management experience",
          ielts: "Fluent Dutch (or English for international modules)",
          gre: "Not required",
          papers: "Professional curriculum vitae and employer motivation letter",
          references: "One executive referee letter"
        }
      },
      {
        id: 4766,
        title: "NCOI Corporate Innovation & Digital Transformation Grant",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        desc: "Annual scholarship awarding €2,500 tuition contributions to professionals pursuing Master's programs in Digital Business or IT Management.",
        funding: "€2,500 direct tuition reduction",
        fee: "None",
        tuition: "Deducted from module fee invoice",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        source: "https://www.ncoi.nl/subsidies/beurzen.html",
        requirements: {
          gpa: "HBO diploma in business, engineering, or computing",
          ielts: "Dutch proficiency",
          gre: "Not required",
          papers: "750-word proposal on implementing AI or cloud technologies in candidate's current organization",
          references: "Employer endorsement"
        }
      },
      {
        id: 4767,
        title: "Master of Health Administration (MHA) Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        desc: "Two-year specialized master's for healthcare executives addressing Dutch Zorgverzekeringswet regulation, hospital staffing, and value-based healthcare.",
        funding: "Stagefonds Zorg government training subsidy eligible",
        fee: "€150",
        tuition: "€18,900 total program tuition",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.ncoi.nl/opleidingen/master-in-health-administration-mha.html",
        requirements: {
          gpa: "HBO or WO degree in medicine, health sciences, nursing, or management with healthcare employment",
          ielts: "Dutch proficiency C1",
          gre: "Not required",
          papers: "Resume showing at least 2 years healthcare coordination experience",
          references: "Healthcare organization executive sponsor letter"
        }
      },
      {
        id: 4768,
        title: "HBO Bachelor Informatica & Software Engineering Enrolment",
        type: "Bachelor's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        desc: "Four-year modular bachelor's program covering agile software development, cloud computing (Azure/AWS), cybersecurity, and relational database management.",
        funding: "SLIM subsidy eligible (up to €24,999 corporate training subsidy for SMEs)",
        fee: "€100",
        tuition: "€4,250 per year",
        deadline: "2027-05-31",
        deadlineText: "May 31, 2027",
        source: "https://www.ncoi.nl/opleidingen/hbo-bachelor-informatica.html",
        requirements: {
          gpa: "HAVO, VWO, or MBO-4 diploma (or 21+ colloquium doctum entrance exam)",
          ielts: "Dutch language proficiency",
          gre: "Not required",
          papers: "Secondary education certificate and employer work confirmation",
          references: "None"
        }
      },
      {
        id: 4769,
        title: "Post-Bachelor Programma in Duurzaam Ondernemen & ESG Compliance",
        type: "Course",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        desc: "Six-month executive certificate covering European CSRD reporting directives, greenhouse gas scope 1-3 auditing, and circular supply chain design.",
        funding: "SME Sustainable Innovation Voucher eligible",
        fee: "€50",
        tuition: "€3,450 complete certificate tuition",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        source: "https://www.ncoi.nl/opleidingen/post-bachelor-duurzaam-ondernemen.html",
        requirements: {
          gpa: "HBO bachelor's degree or at least 3 years business operations experience",
          ielts: "Dutch B2",
          gre: "Not required",
          papers: "Curriculum vitae",
          references: "None"
        }
      },
      {
        id: 4770,
        title: "Executive Fellowship in Public Sector Digital Leadership",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "One-year professional fellowship investigating algorithmic transparency and citizen data privacy within Dutch municipalities (Gemeenten).",
        funding: "€12,000 professional research bursary plus advisory publication support",
        fee: "None",
        tuition: "Tuition-free under fellowship grant",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        source: "https://www.ncoi.nl/kenniscentrum/",
        requirements: {
          gpa: "Master's degree in public administration, law, or information science",
          ielts: "Dutch native or C1 fluency",
          gre: "Not required",
          papers: "Case study proposal on algorithmic governance in local government",
          references: "Two professional or academic references"
        }
      }
    ],
    researchers: [
      {
        id: 2061,
        name: "Drs. Robert van Zanten",
        title: "Director General & CEO",
        department: "Executive Board NCOI Groep",
        email: "directie@ncoi.nl",
        website: "https://www.ncoi.nl/over-ncoi/organisatie.html",
        recruiting: "Not verified",
        interests: ["Adult higher education methodologies", "Flexible learning architectures for working adults", "Corporate workforce upskilling", "NVAO quality assurance"]
      },
      {
        id: 2062,
        name: "Dr. Henk Jan van Schothorst",
        title: "Academic Dean of Master Programs",
        department: "NCOI University of Applied Sciences Master Faculty",
        email: "hjvanschothorst@ncoi.nl",
        website: "https://www.ncoi.nl/over-ncoi/docenten.html",
        recruiting: "Not verified",
        interests: ["Strategic management in turbulent markets", "Executive leadership psychology", "Corporate governance and ethics", "Action learning research methodologies"]
      },
      {
        id: 2063,
        name: "Drs. Anke van Vuuren",
        title: "Head of Health and Social Care Education",
        department: "Faculty of Healthcare & Social Studies",
        email: "avanvuuren@ncoi.nl",
        website: "https://www.ncoi.nl/over-ncoi/docenten.html",
        recruiting: "Not verified",
        interests: ["Integrated healthcare chain management", "Digital health solutions adoption by medical staff", "Value-based healthcare financing", "Interprofessional hospital collaboration"]
      }
    ]
  },

  // 30. Netherlands: NHL Stenden University of Applied Sciences (Groningen Campus)
  {
    institution: "NHL Stenden University of Applied Sciences (Groningen Campus)",
    slug: "nhl-stenden-university-groningen-campus",
    countryId: "netherlands",
    countryLabel: "Netherlands",
    sourceRow: 1494,
    location: "Groningen, Netherlands",
    website: "https://www.nhlstenden.com",
    shortName: "NHL Stenden Groningen",
    badge: "Design-Based Education & Sustainable Innovation",
    overview: "NHL Stenden University of Applied Sciences is a dynamic multi-campus institution in the northern Netherlands. Its Groningen Campus is internationally celebrated for Design-Based Education (DBE), cutting-edge teacher training academies, social work innovations, and sustainable regional development in the vibrant university city of Groningen.",
    lead: "Experience groundbreaking Design-Based Education (DBE), international teacher training, and social innovation at NHL Stenden's Groningen Campus.",
    description: "NHL Stenden Groningen degree programs, Design-Based Education scholarships, and international teacher education master's in Groningen, Netherlands.",
    quickFacts: {
      type: "Public University of Applied Sciences (Hogeschool)",
      campus: "Groningen Campus, Rengerslaan / Eemsgolaan, Groningen",
      accreditation: "NVAO (Accreditation Organisation of the Netherlands and Flanders)",
      admissions: "May 1 for non-EU students; August 15 for EU/EEA students",
      language: "English & Dutch (numerous English-medium international bachelors & masters)",
      aid: "NL Scholarship, NHL Stenden Talent Grants, DUO Dutch Student Financing"
    },
    strengths: [
      "Pioneering Design-Based Education (DBE) learning concept co-creating solutions with industry",
      "Celebrated International Teacher Education for Primary Schools (ITEPS)—Europe's first 4-year degree for international schools",
      "Vibrant student city environment in Groningen (ranked Europe's top student city)",
      "Strong research professorships in Educational Innovation and Sustainable Circular Economy"
    ],
    programs: [
      { title: "Bachelor of Education in International Teacher Education for Primary Schools (ITEPS)", level: "Undergraduate Degree", desc: "Four-year English-medium degree preparing educators for international and bilingual primary schools worldwide, with teaching practices on 3 continents." },
      { title: "Master of Science in Content and Language Integrated Learning (CLIL)", level: "Graduate Degree", desc: "Specialized postgraduate master's exploring bilingual pedagogy, cognitive language scaffolding, and intercultural classroom communication." },
      { title: "Bachelor of Social Work (Social Innovation Track)", level: "Undergraduate Degree", desc: "Four-year professional degree focusing on community resilience, youth mentoring, mental health outreach, and urban inclusivity." }
    ],
    opportunities: [
      {
        id: 4771,
        title: "NHL Stenden NL Scholarship for Exceptional International Students",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Prestigious Dutch Ministry of Education grant awarded to high-achieving non-EEA students entering bachelor's or master's programs at NHL Stenden.",
        funding: "€5,000 one-time merit contribution awarded during the first academic year",
        fee: "None",
        tuition: "€2,530/year (EU/EEA) or €9,950/year (Non-EU undergraduate)",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        source: "https://www.nhlstenden.com/en/practical-information/tuition-fees-and-scholarships/scholarships",
        requirements: {
          gpa: "Minimum 3.2/4.0 in high school diploma or equivalent international baccalaureate",
          ielts: "IELTS 6.0 overall (minimum 5.0 in each sub-score)",
          gre: "Not required",
          papers: "500-word motivation letter explaining why Design-Based Education fits applicant's goals",
          references: "One academic referee letter"
        }
      },
      {
        id: 4772,
        title: "Bachelor of Education in International Teacher Education for Primary Schools (ITEPS)",
        type: "Bachelor's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Four-year internationally accredited teacher degree with mandatory teaching placements across Europe, Asia, and the Americas.",
        funding: "Erasmus+ teaching mobility grants up to €400/month during international school internships",
        fee: "Studielink free registration",
        tuition: "€2,530/year (EU statutory rate) / €9,950/year (Non-EU rate)",
        deadline: "2027-05-01",
        deadlineText: "May 1, 2027",
        source: "https://www.nhlstenden.com/en/courses/international-teacher-education-for-primary-schools-iteps",
        requirements: {
          gpa: "Secondary school certificate equivalent to Dutch HAVO/VWO (e.g. IB Diploma, A-Levels)",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Matching activity intake assignment and personal introduction video",
          references: "Secondary school recommendation"
        }
      },
      {
        id: 4773,
        title: "International School Global Teaching Placement Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Twelve-week teaching practicum embedded in accredited international world schools (IB World Schools, Council of International Schools) across Europe or Southeast Asia.",
        funding: "Host school accommodation allowance and Erasmus+ travel grant",
        fee: "None",
        tuition: "Included in ITEPS tuition",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        source: "https://www.nhlstenden.com/en/practical-information/studying-abroad/internships",
        requirements: {
          gpa: "Second or third-year standing in ITEPS with passing grades in pedagogical methods",
          ielts: "English native or IELTS 6.5",
          gre: "Not required",
          papers: "Enhanced international criminal record check (VOG) and child protection certificate",
          references: "ITEPS placement officer clearance"
        }
      },
      {
        id: 4774,
        title: "Master in Content & Language Integrated Learning (CLIL) Admission",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences"],
        desc: "Two-year part-time or one-year full-time master's training educators in teaching academic disciplines (history, science, geography) in a foreign language.",
        funding: "Dutch Lerarenbeurs teacher grant covering up to 100% tuition for qualifying teachers",
        fee: "None",
        tuition: "€2,530/year (EU) or €11,500/year (Non-EU)",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        source: "https://www.nhlstenden.com/en/courses/master-content-and-language-integrated-learning-clil",
        requirements: {
          gpa: "Bachelor's degree in education or subject teaching qualification with teaching experience",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Curriculum vitae and 750-word statement on bilingual classroom challenges",
          references: "Two professional or academic references"
        }
      },
      {
        id: 4775,
        title: "Design-Based Education (DBE) Pedagogical Innovation Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        desc: "One-year post-master's research fellowship exploring iterative prototyping, agile learning ateliers, and community stakeholder integration in vocational curricula.",
        funding: "€22,000 annual research grant plus DBE research atelier residency",
        fee: "None",
        tuition: "Tuition-free fellowship",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        source: "https://www.nhlstenden.com/en/research/educational-leadership-and-innovation",
        requirements: {
          gpa: "Master's degree in educational sciences, instructional design, or psychology",
          ielts: "English C1 or Dutch C1",
          gre: "Not required",
          papers: "Research proposal (1,500 words) on agile team learning in higher education",
          references: "Two academic referee letters"
        }
      },
      {
        id: 4776,
        title: "Circular Plastics & Bio-Based Materials Engineering Practicum",
        type: "Internship",
        subject: "chemistry",
        subjects: ["chemistry", "engineering"],
        desc: "Six-month research internship at NHL Stenden's Circular Plastics professorship testing biopolymer recycling, mechanical degradation, and bio-based packaging.",
        funding: "€850 monthly research intern stipend",
        fee: "None",
        tuition: "Curricular credit registration applies",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        source: "https://www.nhlstenden.com/en/research/circular-plastics",
        requirements: {
          gpa: "Enrolled in chemistry, chemical engineering, or materials technology",
          ielts: "English B2",
          gre: "Not required",
          papers: "CV and lab skills statement",
          references: "Chemistry faculty endorsement"
        }
      },
      {
        id: 4777,
        title: "Summer School in Design Thinking for Community Resilience",
        type: "Course",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        desc: "Two-week workshop in Groningen engaging with local neighborhood initiatives to prototype solutions for social cohesion, youth integration, and green spaces.",
        funding: "Erasmus+ short mobility funding eligible",
        fee: "€450 inclusive of workshop materials and field excursions in Groningen",
        tuition: "Included in course fee",
        deadline: "2027-05-15",
        deadlineText: "May 15, 2027",
        source: "https://www.nhlstenden.com/en/summer-schools",
        requirements: {
          gpa: "Open to undergraduate students in all disciplines",
          ielts: "English B2",
          gre: "Not required",
          papers: "Short motivation letter",
          references: "None"
        }
      }
    ],
    researchers: [
      {
        id: 2064,
        name: "Dr. Erica Schaper",
        title: "President of the Executive Board",
        department: "Executive Board NHL Stenden",
        email: "collegevanbestuur@nhlstenden.com",
        website: "https://www.nhlstenden.com/en/about-nhl-stenden/organization/executive-board",
        recruiting: "Not verified",
        interests: ["Design-Based Education institutional scaling", "Regional economic innovation in the northern Netherlands", "Higher professional education policy", "Sustainable university campus governance"]
      },
      {
        id: 2065,
        name: "Prof. Dr. Marco Snoek",
        title: "Professor of Teaching and Teacher Education",
        department: "Professorship in Educational Leadership",
        email: "marco.snoek@nhlstenden.com",
        website: "https://www.nhlstenden.com/en/research/professorships/teaching-and-teacher-education",
        recruiting: "Not verified",
        interests: ["Teacher professionalism and career pathways", "School development and leadership", "Design-Based learning environments", "International teacher mobility"]
      },
      {
        id: 2066,
        name: "Prof. Dr. Jan Jorna",
        title: "Professor of Sustainable Plastics & Circular Economy",
        department: "Professorship in Circular Plastics",
        email: "jan.jorna@nhlstenden.com",
        website: "https://www.nhlstenden.com/en/research/professorships/circular-plastics",
        recruiting: "Not verified",
        interests: ["Circular polymer recycling technologies", "Bio-based composite materials", "Lifecycle assessment of plastics", "Industrial symbiosis in northern Netherlands"]
      }
    ]
  }
];
