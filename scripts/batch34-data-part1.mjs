/**
 * Batch 34 - Part 1: Universities 1 to 10 (Total Unis 442 to 451)
 * Canada (3), Australia (3), Germany (4)
 * Opp IDs: 3098 to 3167 (70 opportunities)
 * Faculty IDs: 1347 to 1376 (30 faculty members)
 */

export const batch34Part1Universities = [
  // 1. Canada: Assiniboine Community College
  {
    institution: "Assiniboine Community College",
    shortName: "Assiniboine College",
    slug: "assiniboine-community-college-brandon",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Brandon, Manitoba, Canada",
    website: "https://assiniboine.net",
    sourceRow: 8,
    headline: "Assiniboine Community College: Sustainable Agriculture, Public Safety & Applied Tech Guide",
    overview: "Assiniboine Community College is an accredited public post-secondary institution in Brandon, Manitoba, celebrated for the Prairie Innovation Centre for Sustainable Agriculture, advanced public safety training, agribusiness technology, and applied trades education.",
    description: "Verified diplomas, agricultural tech certificates, and international admissions guide for Assiniboine Community College in Manitoba, Canada.",
    heroEyebrow: "Manitoba Public College · Prairie Innovation Centre Hub",
    tuitionText: "Domestic annual tuition averages CAD $4,800 to $6,500. International student tuition is approximately CAD $14,200 to $17,800 annually. Entrance bursaries, Manitoba Scholarship and Bursary Initiative (MSBI) awards, and work-integrated learning stipends are available.",
    admissions: {
      masters: "Completion of Canadian Grade 12 or equivalent secondary education, or a recognized undergraduate degree for postgraduate certificate streams.",
      phd: "Not offering independent doctoral programs; focus on applied polytechnic diplomas and post-graduate certificates.",
      language: "IELTS Academic 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 79 overall.",
      proposal: "Statement of educational intent describing technical career objectives in agriculture or technology.",
      appFee: "CAD $200 non-refundable international application processing fee via the Assiniboine application portal.",
      documents: "Certified high school or post-secondary transcripts, notarized graduation certificates, English proficiency proof, and valid passport."
    },
    opportunities: [
      {
        id: 3098,
        title: "Assiniboine International Student Merit Entrance Scholarship",
        type: "Scholarship",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "CAD $2,500 to $5,000 tuition credit",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "CAD $200 application fee",
        tuition: "Subsidizes first-year post-secondary tuition",
        source: "https://assiniboine.net/admissions/paying-college/awards-scholarships",
        desc: "Merit-based entrance award granted to incoming international scholars demonstrating high academic achievement enrolling in agribusiness, environmental engineering, or digital technology.",
        requirements: {
          gpa: "Minimum 75% or B equivalent in prior secondary or post-secondary coursework",
          ielts: "IELTS 6.5 overall (no band below 6.0)",
          gre: "Not required",
          papers: "500-word personal statement highlighting future contributions to Manitoba's economy",
          references: "One academic or community reference letter"
        }
      },
      {
        id: 3099,
        title: "Agribusiness & Sustainable Crop Technology Diploma",
        type: "Master's",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "Manitoba agricultural industry co-op scholarships available",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "CAD $200 application fee",
        tuition: "CAD $15,600 per year for international students",
        source: "https://assiniboine.net/programs/agribusiness",
        desc: "Two-year applied polytechnic program focusing on precision ag technologies, soil fertility, grain marketing, agribusiness finance, and sustainable crop rotation across the Canadian prairies.",
        requirements: {
          gpa: "Grade 12 graduation with credits in Grade 12 English and Mathematics",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Statement of career interest in prairie agriculture",
          references: "One academic recommendation letter"
        }
      },
      {
        id: 3100,
        title: "Advanced Diploma in Sustainable Food Systems & Horticulture",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "environment"],
        funding: "Work-integrated greenhouse research assistantships",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "CAD $200 application fee",
        tuition: "CAD $14,900 per academic year",
        source: "https://assiniboine.net/programs/horticultural-production",
        desc: "Hands-on post-diploma credential exploring controlled environment agriculture, hydroponics, urban greenhouse management, and integrated pest management.",
        requirements: {
          gpa: "Post-secondary diploma or bachelor's degree in science, agriculture, or related field",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "Academic transcript and resume",
          references: "One professional reference"
        }
      },
      {
        id: 3101,
        title: "Prairie Innovation Centre Precision Agriculture Field Assistantship",
        type: "Research",
        subject: "environment",
        subjects: ["environment", "engineering"],
        funding: "CAD $18,000 annual research stipend",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled technical students",
        tuition: "Funded via Manitoba Agriculture Innovation grant",
        source: "https://assiniboine.net/research",
        desc: "Applied field research testing autonomous seed drill telemetry, drone-based NDVI canopy analysis, and variable rate fertilizer applications on trial plots.",
        requirements: {
          gpa: "Enrolled in Assiniboine agriculture or tech program with strong grades",
          ielts: "Fluent communication in English",
          gre: "Not required",
          papers: "Demonstrated skills in GIS mapping or agricultural machinery operations",
          references: "Instructor recommendation"
        }
      },
      {
        id: 3102,
        title: "Manitoba Agricultural Logistics & Farm Machinery Co-op",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "social-sciences"],
        funding: "CAD $22/hour for 16-week paid industrial co-op placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated into diploma co-op credit",
        source: "https://assiniboine.net/student-life/careers-and-employment",
        desc: "Paid technical work placement with regional grain elevators, machinery dealerships, and precision farming service providers across western Manitoba.",
        requirements: {
          gpa: "Satisfactory completion of year 1 coursework with minimum 2.5 GPA",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Resume and valid driver's license",
          references: "Co-op education coordinator authorization"
        }
      },
      {
        id: 3103,
        title: "Prairie Agro-Ecological Systems Applied Teaching Fellowship",
        type: "Fellowship",
        subject: "environment",
        subjects: ["environment", "biology"],
        funding: "CAD $45,000 annual fellowship honorarium",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://assiniboine.net/about-us/careers",
        desc: "One-year applied fellowship developing digital curriculum modules on soil organic matter regeneration and drought resilience in dryland farming.",
        requirements: {
          gpa: "Master's degree in Soil Science, Agronomy, or Agribusiness",
          ielts: "Professional English command",
          gre: "Not required",
          papers: "Portfolio of technical agricultural training materials and 2-page project proposal",
          references: "Two academic or industry references"
        }
      },
      {
        id: 3104,
        title: "Instructor in Agribusiness Technology & Crop Management",
        type: "Job",
        subject: "environment",
        subjects: ["environment", "social-sciences"],
        funding: "CAD $78,000 - $94,000 annual salary under MGEU collective agreement",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time permanent academic teaching position",
        source: "https://assiniboine.net/about-us/careers",
        desc: "Faculty appointment delivering lectures and field practicums in precision agriculture, crop health diagnostics, and agricultural supply chain operations in Brandon.",
        requirements: {
          gpa: "Bachelor's or Master's degree in Agriculture, Plant Science, or Agribusiness",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Minimum 3 years Canadian agricultural industry experience and demonstrated instructional ability",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1347,
        name: "Dr. Tim Hore",
        title: "Dean of the School of Agriculture & Environment",
        subject: "environment",
        topics: ["Precision Agriculture", "Agronomy", "Soil Science", "Agribusiness Innovation"],
        source: "https://assiniboine.net/about-us/leadership-team",
        summary: "Dr. Hore oversees agricultural and environmental programming at Assiniboine, spearheading the creation of the Prairie Innovation Centre for Sustainable Agriculture."
      },
      {
        id: 1348,
        name: "Bryan Krampetz",
        title: "Chair of Public Safety & Police Studies",
        subject: "social-sciences",
        topics: ["Emergency Services", "Law Enforcement", "Community Safety", "Tactical Training"],
        source: "https://assiniboine.net/programs/police-studies",
        summary: "Bryan Krampetz coordinates public safety training programs, integrating crisis de-escalation, legal frameworks, and digital investigative techniques."
      },
      {
        id: 1349,
        name: "Dr. Dave Neale",
        title: "Senior Researcher in Agribusiness Technologies",
        subject: "engineering",
        topics: ["Agricultural Telematics", "Crop Modeling", "Soil Moisture Sensors", "Variable Rate Application"],
        source: "https://assiniboine.net/research",
        summary: "Dr. Neale conducts applied research on automated sensor networks, satellite crop vigor tracking, and yield monitor calibration across Manitoba farms."
      }
    ]
  },

  // 2. Canada: Bow Valley College
  {
    institution: "Bow Valley College",
    shortName: "Bow Valley College",
    slug: "bow-valley-college-calgary",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Calgary, Alberta, Canada",
    website: "https://bowvalleycollege.ca",
    sourceRow: 13,
    headline: "Bow Valley College: Health Care, Cloud Computing, Business & Creative Tech Guide",
    overview: "Bow Valley College is Alberta's premier comprehensive community college situated in downtown Calgary, renowned for industry-aligned career education, its Chiu School of Business, Centre for Entertainment Arts, and state-of-the-art simulation health centers.",
    description: "Verified post-diploma certificates, healthcare programs, and international admissions guide for Bow Valley College in Calgary, Alberta.",
    heroEyebrow: "Calgary Public College · Chiu School of Business & Health Sciences",
    tuitionText: "Tuition for domestic learners is approximately CAD $5,200 to $7,000 annually. For international students, full-time tuition averages CAD $15,800 to $19,500 per year. Bow Valley College Entrance Scholarships and Alberta international bursaries provide tuition assistance.",
    admissions: {
      masters: "Completion of an Alberta Grade 12 or equivalent secondary education, or a recognized Bachelor's degree for post-baccalaureate diplomas.",
      phd: "Not offering independent doctoral studies; focus on accredited career diplomas and post-graduate certificates.",
      language: "IELTS Academic 6.0 to 6.5 overall (minimum 6.0 in each skill) or TOEFL iBT 83 overall.",
      proposal: "Statement of purpose outlining career background and technology or business focus.",
      appFee: "CAD $140 international student application processing fee.",
      documents: "Certified transcripts, proof of English proficiency, resume, and copy of passport."
    },
    opportunities: [
      {
        id: 3105,
        title: "Bow Valley College International Student Leadership Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "CAD $2,000 to $4,500 tuition fee discount",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "CAD $140 application fee",
        tuition: "Direct credit applied against international course fees",
        source: "https://bowvalleycollege.ca/student-resources/financial-aid-and-awards",
        desc: "Tuition scholarship awarded to high-achieving international learners entering post-diploma certificates in cloud computing, business analytics, or healthcare administration in Calgary.",
        requirements: {
          gpa: "Minimum 3.0 / 4.0 GPA or equivalent in preceding academic studies",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "500-word essay detailing community leadership and future goals in Canada",
          references: "Two academic or employment reference letters"
        }
      },
      {
        id: 3106,
        title: "Post-Diploma Certificate in Cloud Computing & DevOps",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "AWS Academy and Microsoft Azure certification grant vouchers",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "CAD $140 application fee",
        tuition: "CAD $17,400 per year for international students",
        source: "https://bowvalleycollege.ca/programs-courses/technology/cloud-computing",
        desc: "One-year intensive post-graduate certificate covering multi-cloud architectures (AWS, Azure), infrastructure as code (Terraform), container orchestration (Kubernetes), and CI/CD pipelines.",
        requirements: {
          gpa: "Undergraduate degree or diploma in computer science, software engineering, or related discipline",
          ielts: "IELTS 6.5 overall (minimum 6.0 each band)",
          gre: "Not required",
          papers: "Resume and technical background statement",
          references: "One academic or technical reference"
        }
      },
      {
        id: 3107,
        title: "Practical Nurse Diploma (State-of-the-Art Clinical Simulation)",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Government of Alberta health sector bursaries and clinical stipends",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "CAD $140 application fee",
        tuition: "CAD $18,200 per year for international students",
        source: "https://bowvalleycollege.ca/programs-courses/health-care/practical-nurse",
        desc: "Accredited two-year healthcare diploma preparing students for licensure with the College of Licensed Practical Nurses of Alberta (CLPNA) using robotic human patient simulators.",
        requirements: {
          gpa: "High school completion with minimum 60% in English 30-1, Math 20-2, and Biology 30",
          ielts: "IELTS Academic 6.5 overall (minimum 6.5 in speaking, 6.0 other bands)",
          gre: "Not required",
          papers: "Police Information Check with Vulnerable Sector Search and immunization records",
          references: "Two professional reference letters"
        }
      },
      {
        id: 3108,
        title: "Calgary Downtown Smart City & Digital Inclusion Research Project",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "CAD $16,000 project research stipend",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled technical students",
        tuition: "Funded via City of Calgary civic innovation grant",
        source: "https://bowvalleycollege.ca/about/applied-research",
        desc: "Applied research testing public Wi-Fi IoT sensor deployments, digital literacy barriers for newcomer seniors, and open data visualization for municipal Calgary services.",
        requirements: {
          gpa: "Enrolled in Bow Valley College technology or business analytics program with 3.2+ GPA",
          ielts: "Fluent communication in English",
          gre: "Not required",
          papers: "Experience in Python, SQL, or Tableau data modeling",
          references: "Faculty research mentor endorsement"
        }
      },
      {
        id: 3109,
        title: "Calgary Energy & FinTech Corporate Technology Practicum",
        type: "Internship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "CAD $24/hour for 14-week corporate practicum placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero placement fee",
        tuition: "Curricular requirement of post-diploma program",
        source: "https://bowvalleycollege.ca/student-resources/career-services",
        desc: "Supervised corporate technology internship with Calgary energy firms, financial software consultancies, and digital agencies.",
        requirements: {
          gpa: "Satisfactory completion of semester 1 coursework",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Canadian-style resume and technical portfolio",
          references: "Practicum coordinator sign-off"
        }
      },
      {
        id: 3110,
        title: "Applied Health Simulation & Clinical Pedagogy Fellowship",
        type: "Fellowship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "CAD $46,000 annual clinical educational fellowship",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://bowvalleycollege.ca/about/careers",
        desc: "One-year instructional fellowship developing immersive virtual reality nursing simulation scenarios and objective structured clinical examination (OSCE) rubrics.",
        requirements: {
          gpa: "Bachelor's or Master's degree in Nursing (BN/MN) with active Canadian RN license",
          ielts: "Professional clinical English command",
          gre: "Not required",
          papers: "Clinical simulation teaching dossier and 2-page project proposal",
          references: "Two professional nursing or educational references"
        }
      },
      {
        id: 3111,
        title: "Instructor in Cloud Architecture & Enterprise Software Development",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "CAD $82,000 - $98,000 per annum with comprehensive Alberta health benefits",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Permanent full-time faculty appointment",
        source: "https://bowvalleycollege.ca/about/careers",
        desc: "Faculty position in the School of Technology, teaching enterprise cloud migration, automated testing, and serverless computing in downtown Calgary.",
        requirements: {
          gpa: "Degree in Computer Science, Software Engineering, or related technical field",
          ielts: "Fluent academic and industry English",
          gre: "Not required",
          papers: "Minimum 4 years software development/cloud architecture industry experience and industry certifications (AWS/Azure)",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1350,
        name: "Dr. Misheck Mwaba",
        title: "President & CEO of Bow Valley College",
        subject: "engineering",
        topics: ["Applied Research Strategy", "Polytechnic Education", "Mechanical Engineering", "Workforce Transformation"],
        source: "https://bowvalleycollege.ca/about/leadership",
        summary: "Dr. Mwaba leads Bow Valley College, advancing applied research initiatives, downtown revitalization partnerships, and micro-credential pathways for Alberta workers."
      },
      {
        id: 1351,
        name: "Dr. Eddie Sargent",
        title: "Dean of the Chiu School of Business",
        subject: "social-sciences",
        topics: ["Business Analytics", "Strategic Management", "Digital Commerce", "Entrepreneurial Systems"],
        source: "https://bowvalleycollege.ca/programs-courses/chiu-school-of-business",
        summary: "Dr. Sargent oversees business education at Bow Valley College, integrating enterprise analytics, FinTech partnerships, and experiential corporate projects."
      },
      {
        id: 1352,
        name: "Debbie Sheppard",
        title: "Dean of the School of Health & Wellness",
        subject: "biology",
        topics: ["Clinical Simulation", "Nursing Leadership", "Patient Safety", "Interprofessional Healthcare"],
        source: "https://bowvalleycollege.ca/programs-courses/health-care",
        summary: "Debbie Sheppard directs healthcare qualifications, championing advanced clinical simulation pedagogy and interprofessional healthcare training."
      }
    ]
  },

  // 3. Canada: CDI College
  {
    institution: "CDI College",
    shortName: "CDI College",
    slug: "cdi-college-winnipeg",
    countryId: "canada",
    countryLabel: "Canada",
    location: "Winnipeg, Manitoba, Canada",
    website: "https://www.cdicollege.ca",
    sourceRow: 19,
    headline: "CDI College: Cybersecurity, Healthcare Assistance, Legal Studies & Network Admin Guide",
    overview: "CDI College is one of Canada's most established career training colleges with campuses across Manitoba, Alberta, BC, Ontario, and Quebec, providing fast-track vocational training in Network and Database Administration, Cybersecurity, Paralegal Studies, and Health Care Aide services.",
    description: "Verified accelerated diplomas, career certifications, and international admissions guide for CDI College in Winnipeg, Canada.",
    heroEyebrow: "Canadian Career College · Accelerated Professional Training",
    tuitionText: "Tuition ranges from CAD $11,500 to $16,800 depending on diploma duration. Flexible modular payment arrangements, student line of credit support, and career advancement bursaries are accessible.",
    admissions: {
      masters: "High school graduation diploma or mature student status (19+ years old) with passing marks on the college entrance assessment.",
      phd: "Not offering independent doctoral studies; focus on fast-track career-ready diploma qualifications.",
      language: "IELTS Academic 5.5 to 6.0 overall or institutional English proficiency examination.",
      proposal: "Statement of career goals and commitment to fast-track vocational course completion.",
      appFee: "CAD $150 non-refundable registration processing fee.",
      documents: "Secondary school graduation transcripts, valid photo ID, entrance exam scores, and proof of legal residency or study visa."
    },
    opportunities: [
      {
        id: 3112,
        title: "CDI College Career Foundation & Rapid Career Bursary",
        type: "Scholarship",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "CAD $1,500 to $3,500 tuition discount",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "CAD $150 application fee",
        tuition: "Deducted directly from scheduled diploma tuition installments",
        source: "https://www.cdicollege.ca/financial-assistance/",
        desc: "Tuition bursary awarded to career transitioners and international students enrolling in accelerated diploma programs in cybersecurity, business, or health services.",
        requirements: {
          gpa: "Passing score on the CDI Wonderlic admissions assessment",
          ielts: "IELTS 5.5 overall",
          gre: "Not required",
          papers: "500-word career ambition statement",
          references: "One character or professional reference"
        }
      },
      {
        id: 3113,
        title: "Network and Database Administrator Diploma",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Included CompTIA and Cisco CCNA exam preparation vouchers",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "CAD $150 application fee",
        tuition: "CAD $15,200 total program tuition",
        source: "https://www.cdicollege.ca/programs/technology/",
        desc: "Accelerated 45-week diploma preparing graduates for enterprise network engineering, SQL database administration, Windows Server management, and network troubleshooting.",
        requirements: {
          gpa: "High school graduation diploma or mature student entrance pass",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Admissions interview with technical program advisor",
          references: "One referee letter"
        }
      },
      {
        id: 3114,
        title: "Health Care Aide & Community Clinical Care Diploma",
        type: "Master's",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "Provincial clinical practicum training stipend support",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "CAD $150 application fee",
        tuition: "CAD $12,800 total program tuition",
        source: "https://www.cdicollege.ca/programs/healthcare/",
        desc: "Comprehensive healthcare diploma combining classroom theory with mandatory hospital and long-term care clinical placements, covering patient transfers, vitals, and palliative comfort.",
        requirements: {
          gpa: "Grade 12 completion with English 40S or equivalent",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Criminal Record Check with Vulnerable Sector Search and Adult Abuse Registry check",
          references: "Two character reference letters"
        }
      },
      {
        id: 3115,
        title: "Enterprise Cybersecurity Sandbox & Threat Emulation Project",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "CAD $12,000 project grant support",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled technical students",
        tuition: "Supported by technical training sandbox resources",
        source: "https://www.cdicollege.ca",
        desc: "Practical project analyzing network packet captures, configuring intrusion prevention systems (Snort/Suricata), and analyzing simulated ransomware attack vectors.",
        requirements: {
          gpa: "Enrolled in CDI technology diploma with distinction grades",
          ielts: "Technical English competence",
          gre: "Not required",
          papers: "Lab report demonstrating Linux security hardening or firewall configuration",
          references: "Lead technical instructor recommendation"
        }
      },
      {
        id: 3116,
        title: "Manitoba Healthcare Network Supervised Clinical Practicum",
        type: "Internship",
        subject: "biology",
        subjects: ["biology", "social-sciences"],
        funding: "CAD $20/hour for 8-week clinical facility placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero placement fee",
        tuition: "Mandatory component of Health Care Aide diploma",
        source: "https://www.cdicollege.ca/career-services/",
        desc: "Hands-on supervised clinical placement within Winnipeg Regional Health Authority (WRHA) facilities and licensed long-term care homes.",
        requirements: {
          gpa: "Successful completion of all pre-clinical academic courses",
          ielts: "Fluent communication in English",
          gre: "Not required",
          papers: "Valid CPR Level C / First Aid and Immunization clearance card",
          references: "Clinical practicum coordinator approval"
        }
      },
      {
        id: 3117,
        title: "Vocational Pedagogy & Practical Skills Curriculum Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "CAD $42,000 annual vocational curriculum fellowship",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://www.cdicollege.ca/careers/",
        desc: "One-year curriculum fellowship designing hybrid vocational courseware and interactive digital lab simulations for career college learners across Canada.",
        requirements: {
          gpa: "Bachelor's degree in Education, Computer Science, or Health Science",
          ielts: "High English communication proficiency",
          gre: "Not required",
          papers: "Portfolio of adult vocational curriculum modules and 2-page project plan",
          references: "Two professional reference letters"
        }
      },
      {
        id: 3118,
        title: "Senior Instructor in Network Infrastructure & Cyber Defense",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "CAD $75,000 - $88,000 annual salary plus benefits",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time vocational instructor appointment",
        source: "https://www.cdicollege.ca/careers/",
        desc: "Instructional role delivering hands-on networking and cybersecurity diploma classes in Winnipeg, preparing students for Cisco and CompTIA credentials.",
        requirements: {
          gpa: "Diploma or Degree in Computer Systems / Networking with active CCNA/Security+ credentials",
          ielts: "Fluent communication in English",
          gre: "Not required",
          papers: "Minimum 3 years active IT networking industry experience",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1353,
        name: "Robert MacIntosh",
        title: "Director of Technology Curriculum & Applied Learning",
        subject: "computer-science",
        topics: ["Network Architecture", "Cybersecurity Training", "Vocational Pedagogy", "Database Administration"],
        source: "https://www.cdicollege.ca/about/",
        summary: "Robert MacIntosh oversees technology diploma curricula across CDI College, designing industry-aligned training labs for IT certifications."
      },
      {
        id: 1354,
        name: "Carolyn Friesen",
        title: "Head of Health Care Studies & Clinical Placement",
        subject: "biology",
        topics: ["Health Care Aide Competency", "Clinical Simulation", "Geriatric Care", "Patient Advocacy"],
        source: "https://www.cdicollege.ca/about/",
        summary: "Carolyn Friesen coordinates healthcare diploma instruction, managing clinical practicum partnerships across regional health authorities."
      },
      {
        id: 1355,
        name: "David Alper",
        title: "Senior Lecturer in Legal Studies & Corporate Compliance",
        subject: "social-sciences",
        topics: ["Canadian Legal Procedures", "Paralegal Practice", "Corporate Governance", "Litigation Support"],
        source: "https://www.cdicollege.ca/about/",
        summary: "David Alper instructs legal assistant and paralegal students in civil litigation workflows, contract drafting, and Canadian legal ethics."
      }
    ]
  },

  // 4. Australia: Acknowledge Education
  {
    institution: "Acknowledge Education",
    shortName: "Acknowledge Education",
    slug: "acknowledge-education-melbourne",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Melbourne, Victoria, Australia",
    website: "https://www.acknowledgeeducation.edu.au",
    sourceRow: 144,
    headline: "Acknowledge Education: Nursing, Social Work, Civil Engineering & Community Services Guide",
    overview: "Acknowledge Education (including Stott's College and Melbourne Language Centre) is an established Australian tertiary education provider with over 135 years of history, delivering accredited Bachelor and Master degrees in Nursing, Social Work, and Civil Engineering across Melbourne, Sydney, Perth, and Brisbane.",
    description: "Verified degrees, healthcare programs, and international admissions guide for Acknowledge Education in Australia.",
    heroEyebrow: "Australian Higher Education Provider · Historic Melbourne Institution",
    tuitionText: "Undergraduate and postgraduate tuition averages AUD $14,000 to $22,000 per academic year depending on degree stream. Academic merit fee remissions, early-bird bonuses, and flexible term installment plans are available for international students.",
    admissions: {
      masters: "Completion of an Australian Bachelor's degree or recognized overseas equivalent in a congruent field of study.",
      phd: "Not offering independent doctoral studies; focus on accredited professional Bachelor and Master qualifications.",
      language: "IELTS Academic 6.5 to 7.0 overall (minimum 6.5 in writing and other bands; 7.0 each band for Nursing).",
      proposal: "Statement of purpose (500-800 words) highlighting clinical or engineering aspirations in Australia.",
      appFee: "AUD $250 international student application processing fee.",
      documents: "Certified academic transcripts, degree certificate, passport bio-page, English proficiency evidence, and GTE documentation."
    },
    opportunities: [
      {
        id: 3119,
        title: "Acknowledge Education Academic Excellence International Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "AUD $3,000 to $6,000 annual tuition fee reduction",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "AUD $250 application fee",
        tuition: "Subsidizes higher education tuition fees across semesters",
        source: "https://www.acknowledgeeducation.edu.au/international-students/",
        desc: "Merit-based scholarship awarded to high-performing international candidates entering accredited bachelor's or master's degrees in nursing, social work, or engineering.",
        requirements: {
          gpa: "Minimum 70% or equivalent in preceding diploma or undergraduate degree",
          ielts: "IELTS 6.5 overall",
          gre: "Not required",
          papers: "500-word personal statement detailing academic leadership",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3120,
        title: "Master of Social Work (Professional Qualifying)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Australian Association of Social Workers (AASW) accredited pathway",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "AUD $250 application fee",
        tuition: "AUD $21,500 per academic year",
        source: "https://www.acknowledgeeducation.edu.au/courses/master-of-social-work/",
        desc: "Two-year AASW-accredited professional master's degree preparing graduates for social advocacy, child protection, mental health intervention, and 1,000 hours of clinical placement.",
        requirements: {
          gpa: "Bachelor's degree with at least one year of social or behavioral science coursework",
          ielts: "IELTS Academic 7.0 overall (minimum 7.0 in each band)",
          gre: "Not required",
          papers: "Statement of purpose addressing AASW ethical standards",
          references: "Two professional or academic references"
        }
      },
      {
        id: 3121,
        title: "Bachelor of Civil Engineering (Honours)",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "mathematics"],
        funding: "Engineers Australia provisional accreditation pathway",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "AUD $250 application fee",
        tuition: "AUD $22,800 per year",
        source: "https://www.acknowledgeeducation.edu.au/courses/bachelor-of-civil-engineering-honours/",
        desc: "Four-year professional engineering degree covering structural design, geomechanics, hydraulic engineering, sustainable concrete technology, and project management.",
        requirements: {
          gpa: "Australian Year 12 completion or equivalent with prerequisites in Mathematics and Physics",
          ielts: "IELTS 6.5 overall (minimum 6.0 each band)",
          gre: "Not required",
          papers: "Academic transcripts and statement of engineering interest",
          references: "One academic recommendation letter"
        }
      },
      {
        id: 3122,
        title: "Melbourne Urban Social Work & Mental Health Practicum Project",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "AUD $14,000 project research grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled graduate students",
        tuition: "Supported by community health research grant",
        source: "https://www.acknowledgeeducation.edu.au",
        desc: "Applied qualitative study exploring trauma-informed counseling models for newly arrived migrant families and youth in suburban Melbourne.",
        requirements: {
          gpa: "Enrolled in Master of Social Work with distinction standing",
          ielts: "IELTS 7.0 overall",
          gre: "Not required",
          papers: "Research proposal outlining qualitative fieldwork methodology",
          references: "Field education coordinator recommendation"
        }
      },
      {
        id: 3123,
        title: "Victorian Healthcare & Clinical Agency Field Placement",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Mandatory 1,000-hour AASW supervised placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Integrated into accredited degree curriculum",
        source: "https://www.acknowledgeeducation.edu.au/current-students/field-education/",
        desc: "Two distinct 500-hour field education placements in hospitals, community mental health centers, and family service organizations across Victoria.",
        requirements: {
          gpa: "Passing grades in foundational social work practice units",
          ielts: "IELTS 7.0 in all bands",
          gre: "Not required",
          papers: "Working with Children Check (WWCC) and National Police Certificate",
          references: "Academic advisor sign-off"
        }
      },
      {
        id: 3124,
        title: "Social Work Pedagogy & Decolonial Practice Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "AUD $44,000 annual curriculum fellowship stipend",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://www.acknowledgeeducation.edu.au/careers/",
        desc: "One-year curriculum fellowship embedding Aboriginal and Torres Strait Islander ways of knowing and cross-cultural casework into higher education social work courses.",
        requirements: {
          gpa: "Master's degree or PhD in Social Work, Sociology, or Human Services",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Portfolio of social work curriculum materials and 3-page project outline",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3125,
        title: "Senior Lecturer in Structural Engineering & Concrete Mechanics",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "mathematics"],
        funding: "AUD $95,000 - $115,000 per annum plus 11.5% Australian superannuation",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time academic faculty appointment",
        source: "https://www.acknowledgeeducation.edu.au/careers/",
        desc: "Academic faculty post in the Faculty of Engineering, teaching structural mechanics, finite element modeling, and supervising final-year capstone engineering projects.",
        requirements: {
          gpa: "PhD in Civil Engineering, Structural Engineering, or Mechanics",
          ielts: "Academic English fluency",
          gre: "Not required",
          papers: "Demonstrated record of peer-reviewed engineering publications and tertiary teaching experience",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1356,
        name: "Dr. Nicholas Manganas",
        title: "Dean of Higher Education & Academic Governance",
        subject: "social-sciences",
        topics: ["Higher Education Policy", "Intercultural Studies", "Academic Quality Assurance", "Social Equity"],
        source: "https://www.acknowledgeeducation.edu.au/about-us/",
        summary: "Dr. Manganas leads academic affairs at Acknowledge Education, overseeing TEQSA compliance, curriculum design, and higher education degree pathways."
      },
      {
        id: 1357,
        name: "Dr. Sarah MacLean",
        title: "Head of School of Social Work",
        subject: "social-sciences",
        topics: ["Social Work Practice", "Mental Health Interventions", "Community Wellbeing", "Field Education"],
        source: "https://www.acknowledgeeducation.edu.au/courses/master-of-social-work/",
        summary: "Dr. MacLean directs social work education, researching trauma-informed community interventions and clinical supervision models in Victoria."
      },
      {
        id: 1358,
        name: "Dr. Amir Hosseini",
        title: "Head of Civil Engineering Programs",
        subject: "engineering",
        topics: ["Structural Mechanics", "Sustainable Concrete", "Earthquake Engineering", "Finite Element Analysis"],
        source: "https://www.acknowledgeeducation.edu.au/courses/bachelor-of-civil-engineering-honours/",
        summary: "Dr. Hosseini specializes in structural resilience, geopolymer concrete mixes, and earthquake-resistant building design across Australian urban environments."
      }
    ]
  },

  // 5. Australia: Asset College
  {
    institution: "Asset College",
    shortName: "Asset College",
    slug: "asset-college-australia",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Brisbane, Queensland, Australia",
    website: "https://www.asset.edu.au",
    sourceRow: 148,
    headline: "Asset College: Security Risk Management, Work Health Safety & Project Management Guide",
    overview: "Asset College (RTO #31718) is one of Australia's premier vocational and training organizations, nationally renowned for corporate security risk management, aviation security, investigative services, and Work Health and Safety (WHS) diplomas across Brisbane and national online hubs.",
    description: "Verified diplomas, security management qualifications, and professional training guide for Asset College in Australia.",
    heroEyebrow: "Australian Registered Training Organisation · Security Risk & WHS",
    tuitionText: "Tuition averages AUD $2,800 to $6,500 depending on diploma or advanced diploma program. Flexible modular fee structures, Queensland Certificate 3 Guarantee funding for eligible domestic residents, and corporate employer sponsorships are available.",
    admissions: {
      masters: "Completion of Australian Year 12 or equivalent secondary education, or demonstrated relevant industry experience for mature applicants.",
      phd: "Not offering independent doctoral studies; focus on nationally recognized vocational qualifications.",
      language: "IELTS Academic 5.5 to 6.0 overall or equivalent vocational language literacy and numeracy (LLN) test.",
      proposal: "Statement of career intent focusing on security risk management or corporate compliance.",
      appFee: "AUD $150 course enrollment administration fee.",
      documents: "Certified identity documents, verified educational transcripts, LLN assessment test results, and criminal record check for security licensing."
    },
    opportunities: [
      {
        id: 3126,
        title: "Asset College Professional Development Leadership Bursary",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "AUD $1,200 to $2,500 fee credit",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "AUD $150 enrollment fee",
        tuition: "Subsidizes advanced diploma course enrollment",
        source: "https://www.asset.edu.au/fees-and-funding/",
        desc: "Tuition bursary awarded to career professionals entering Advanced Diploma of Security Risk Management or Work Health and Safety programs at Asset College.",
        requirements: {
          gpa: "Passing evaluation on pre-enrollment LLN assessment",
          ielts: "IELTS 5.5 overall",
          gre: "Not required",
          papers: "500-word statement on enterprise risk mitigation goals",
          references: "One professional employer reference"
        }
      },
      {
        id: 3127,
        title: "Advanced Diploma of Security Risk Management (CPP60121)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "Recognized national qualification eligible for corporate co-funding",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "AUD $150 enrollment fee",
        tuition: "AUD $5,900 total program tuition",
        source: "https://www.asset.edu.au/courses/advanced-diploma-security-risk-management/",
        desc: "Premier Australian qualification covering critical infrastructure protection, enterprise threat assessment, risk treatment plans, and emergency crisis governance.",
        requirements: {
          gpa: "Completion of Diploma of Security Risk Management or 3+ years security industry experience",
          ielts: "Vocational English proficiency",
          gre: "Not required",
          papers: "Resume demonstrating corporate risk or operational security experience",
          references: "Two professional reference letters"
        }
      },
      {
        id: 3128,
        title: "Diploma of Work Health and Safety (BSB51319)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "Flexible online and workshop-based modular payment schedules",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "AUD $150 enrollment fee",
        tuition: "AUD $4,200 total program tuition",
        source: "https://www.asset.edu.au/courses/diploma-work-health-and-safety/",
        desc: "Nationally accredited training preparing health and safety managers to audit workplace hazards, implement WHS management systems, and manage incident investigations.",
        requirements: {
          gpa: "Completion of Certificate IV in Work Health and Safety or equivalent workplace experience",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Evidence of workplace WHS compliance involvement",
          references: "One employer endorsement"
        }
      },
      {
        id: 3129,
        title: "Critical Infrastructure Threat Modeling Practical Project",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "AUD $10,000 project sponsorship grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled advanced diploma students",
        tuition: "Supported by security risk training sandbox",
        source: "https://www.asset.edu.au",
        desc: "Applied practical study analyzing physical vulnerability, access control architecture, and drone surveillance countermeasures for commercial seaports and electrical sub-stations.",
        requirements: {
          gpa: "Enrolled in Advanced Diploma of Security Risk Management with distinction marks",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Sample risk assessment matrix for a major commercial facility",
          references: "Senior trainer recommendation"
        }
      },
      {
        id: 3130,
        title: "Queensland Corporate Risk & WHS Audit Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "biology"],
        funding: "AUD $25/hour for 10-week workplace safety audit placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated in vocational diploma curriculum",
        source: "https://www.asset.edu.au",
        desc: "Supervised industry workplace placement conducting real-world safety compliance audits, ergonomic assessments, and emergency evacuation drills with Brisbane corporate clients.",
        requirements: {
          gpa: "Satisfactory completion of core WHS units",
          ielts: "Professional English communication",
          gre: "Not required",
          papers: "Updated professional resume and sample safety audit report",
          references: "Course coordinator sign-off"
        }
      },
      {
        id: 3131,
        title: "Corporate Security Pedagogy & Resilience Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "AUD $38,000 annual vocational curriculum fellowship",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://www.asset.edu.au/careers/",
        desc: "One-year curriculum fellowship designing interactive tabletop crisis simulation exercises and cyber-physical security integration training packages.",
        requirements: {
          gpa: "Degree or Advanced Diploma in Security Management, Criminology, or Workplace Safety",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Portfolio of emergency response simulation scenarios and 2-page project plan",
          references: "Two industry reference letters"
        }
      },
      {
        id: 3132,
        title: "Senior Trainer and Assessor in Security Risk Management",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "AUD $80,000 - $95,000 annual salary plus Queensland superannuation",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time vocational trainer appointment",
        source: "https://www.asset.edu.au/careers/",
        desc: "Instructional role delivering ASQA-compliant security risk and investigations training in Brisbane and online, mentoring corporate security executives.",
        requirements: {
          gpa: "CPP60121 or higher qualification plus TAE40116/TAE40122 certification",
          ielts: "Fluent communication in English",
          gre: "Not required",
          papers: "Documented 5+ years active Australian security risk or law enforcement experience",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1359,
        name: "Darren Lawrence",
        title: "Chief Executive Officer & Director of Training",
        subject: "social-sciences",
        topics: ["Security Risk Frameworks", "ASQA Compliance", "VET Governance", "Workplace Safety"],
        source: "https://www.asset.edu.au/about-us/",
        summary: "Darren Lawrence leads Asset College, ensuring national vocational quality standards and developing specialized workforce credentials for the security industry."
      },
      {
        id: 1360,
        name: "Mark Evans",
        title: "Head of Security & Investigation Programs",
        subject: "social-sciences",
        topics: ["Critical Infrastructure Protection", "Threat Assessment", "Fraud Investigation", "Crisis Management"],
        source: "https://www.asset.edu.au/trainers/",
        summary: "Mark Evans brings extensive security sector leadership to Asset College, training security risk managers in threat intelligence and corporate asset protection."
      },
      {
        id: 1361,
        name: "Tanya O'Connor",
        title: "Lead Trainer in Work Health and Safety",
        subject: "social-sciences",
        topics: ["Occupational Health & Safety", "Ergonomics", "Hazard Identification", "ISO 45001 Systems"],
        source: "https://www.asset.edu.au/trainers/",
        summary: "Tanya O'Connor coordinates WHS diploma qualifications, focusing on safety culture transformation, hazard audits, and ISO 45001 compliance standards."
      }
    ]
  },

  // 6. Australia: Canterbury Institute of Management
  {
    institution: "Canterbury Institute of Management",
    shortName: "CIM Darwin",
    slug: "canterbury-institute-of-management-darwin",
    countryId: "australia",
    countryLabel: "Australia",
    location: "Darwin, Northern Territory, Australia",
    website: "https://ciom.edu.au",
    sourceRow: 156,
    headline: "Canterbury Institute of Management: Business Information Systems, Accounting & Project Management Guide",
    overview: "Canterbury Institute of Management (CIM) is an accredited Australian higher education provider delivering TEQSA-registered Bachelor degrees in Business, Information Systems, and Accounting with modern campuses in Darwin (Northern Territory) and Sydney.",
    description: "Verified degrees, business information systems programs, and international admissions guide for Canterbury Institute of Management in Darwin.",
    heroEyebrow: "Australian Higher Education Provider · Darwin Campus Hub",
    tuitionText: "Tuition averages AUD $14,500 to $18,000 per academic year for international students. Regional study incentives for the Northern Territory, merit scholarships of up to AUD $4,000, and flexible per-semester installment scheduling are available.",
    admissions: {
      masters: "Completion of an Australian Year 12 senior secondary certificate, AQF Associate Degree, or recognized overseas equivalent with satisfactory grades.",
      phd: "Not offering independent doctoral programs; focus on accredited undergraduate higher education degrees.",
      language: "IELTS Academic 6.0 overall (minimum 5.5 in each skill) or recognized equivalent PTE Academic score.",
      proposal: "Genuine Student (GS) statement detailing career vision and choice of regional Darwin study.",
      appFee: "AUD $200 international enrollment application fee.",
      documents: "Certified high school or post-secondary transcripts, passport bio-data page, English test certificate, and financial capacity evidence."
    },
    opportunities: [
      {
        id: 3133,
        title: "CIM Northern Territory Regional Study Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "AUD $2,500 to $4,500 annual tuition fee reduction",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "AUD $200 application fee",
        tuition: "Deducted across scheduled semester tuition fees",
        source: "https://ciom.edu.au/admissions/",
        desc: "Regional scholarship supporting talented international students pursuing higher education degrees in Information Systems or Accounting in Darwin.",
        requirements: {
          gpa: "Minimum 70% or equivalent in secondary school completion",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "500-word statement on contributing to Northern Territory economic growth",
          references: "One referee letter from previous school"
        }
      },
      {
        id: 3134,
        title: "Bachelor of Business Information Systems (BBIS)",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "Access to regional tech internship networks in Darwin",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "AUD $200 application fee",
        tuition: "AUD $16,800 per academic year",
        source: "https://ciom.edu.au/courses/bachelor-of-business-information-systems/",
        desc: "Three-year TEQSA-accredited degree integrating systems analysis, enterprise database design, cybersecurity fundamentals, cloud computing, and IT project governance.",
        requirements: {
          gpa: "Australian Year 12 or overseas equivalent with pass in English and Mathematics",
          ielts: "IELTS 6.0 overall (minimum 5.5 each band)",
          gre: "Not required",
          papers: "Statement of interest in business technology",
          references: "One academic recommendation letter"
        }
      },
      {
        id: 3135,
        title: "Bachelor of Accounting (CPA & CA ANZ Pathway)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "Professional accounting accreditation pathway",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "AUD $200 application fee",
        tuition: "AUD $15,900 per academic year",
        source: "https://ciom.edu.au/courses/bachelor-of-accounting/",
        desc: "Three-year degree accredited by CPA Australia and Chartered Accountants ANZ, covering financial accounting, taxation law, auditing, management control, and corporate finance.",
        requirements: {
          gpa: "Australian Year 12 or equivalent with strong numeracy background",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Academic transcript and statement of purpose",
          references: "One referee letter"
        }
      },
      {
        id: 3136,
        title: "Northern Territory Digital SME Systems Optimization Project",
        type: "Research",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "AUD $12,000 project research grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled technical students",
        tuition: "Supported by regional commerce research funds",
        source: "https://ciom.edu.au",
        desc: "Applied business analytics project analyzing cloud inventory migration, digital transaction adoption, and cybersecurity posture among small businesses across Darwin.",
        requirements: {
          gpa: "Enrolled in BBIS program with distinction grade average",
          ielts: "English fluency",
          gre: "Not required",
          papers: "Project proposal examining regional enterprise technology adoption",
          references: "Faculty mentor recommendation"
        }
      },
      {
        id: 3137,
        title: "Darwin Commerce & Public Administration Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "AUD $24/hour for 12-week supervised corporate placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero placement fee",
        tuition: "Integrated into final-year degree curriculum",
        source: "https://ciom.edu.au/students/careers/",
        desc: "Supervised industry placement working with accounting firms, commercial logistics offices, and Northern Territory government agencies in Darwin.",
        requirements: {
          gpa: "Satisfactory completion of year 2 degree units",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Resume and business communications portfolio",
          references: "Academic internship coordinator authorization"
        }
      },
      {
        id: 3138,
        title: "Regional Enterprise & Digital Curriculum Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "AUD $40,000 annual curriculum fellowship stipend",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://ciom.edu.au/careers/",
        desc: "One-year curriculum fellowship developing interactive financial simulation courseware and agile project management workshops for regional business students.",
        requirements: {
          gpa: "Master's degree or PhD in Business, Accounting, or Information Systems",
          ielts: "Professional English fluency",
          gre: "Not required",
          papers: "Portfolio of interactive learning resources and 2-page project plan",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3139,
        title: "Lecturer in Enterprise Information Systems & Database Design",
        type: "Job",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "AUD $88,000 - $104,000 per annum plus Australian superannuation",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time academic faculty appointment",
        source: "https://ciom.edu.au/careers/",
        desc: "Academic faculty role delivering lectures in business intelligence, database management, and enterprise systems at CIM Darwin campus.",
        requirements: {
          gpa: "PhD or Master's degree in Information Systems, Computer Science, or Business Informatics",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Demonstrated tertiary teaching record and professional industry experience",
          references: "Three academic reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1362,
        name: "Dr. Gregory Harper",
        title: "Academic Dean & Head of Business Programs",
        subject: "social-sciences",
        topics: ["Academic Governance", "Strategic Management", "Curriculum Design", "Higher Education Quality"],
        source: "https://ciom.edu.au/about-us/",
        summary: "Dr. Harper oversees academic quality and course delivery at Canterbury Institute of Management, leading TEQSA accreditation initiatives and business curriculum innovations."
      },
      {
        id: 1363,
        name: "Dr. Pradip Patel",
        title: "Head of School of Information Systems",
        subject: "computer-science",
        topics: ["Database Systems", "Business Analytics", "Information Security", "Enterprise Cloud Architecture"],
        source: "https://ciom.edu.au/faculty/",
        summary: "Dr. Patel coordinates IT qualifications, researching relational database optimization, business intelligence frameworks, and cloud security for regional enterprises."
      },
      {
        id: 1364,
        name: "Subhash Sharma",
        title: "Senior Lecturer in Professional Accounting & Auditing",
        subject: "social-sciences",
        topics: ["Corporate Accounting", "Australian Taxation Law", "Auditing Frameworks", "Financial Modeling"],
        source: "https://ciom.edu.au/faculty/",
        summary: "Subhash Sharma lectures in professional accounting standards, guiding students through CPA Australia accreditation prerequisites and corporate financial compliance."
      }
    ]
  },

  // 7. Germany: Academy of Public Administration of Saxony (HSF Meißen)
  {
    institution: "Academy of Public Administration of Saxony",
    shortName: "HSF Meißen",
    slug: "academy-of-public-administration-of-saxony",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Meißen, Saxony, Germany",
    website: "https://www.hsf.sachsen.de",
    sourceRow: 210,
    headline: "HSF Meißen: Public Governance, Legal Informatics, Taxation & E-Government Guide",
    overview: "The Academy of Public Administration of Saxony (Hochschule Meißen - HSF Meißen & Fortbildungszentrum) is Saxony's premier state university of applied sciences for public administration, renowned for training civil servants in administrative law, digital e-government, municipal finance, and tax law.",
    description: "Verified degrees, public administration fellowships, and admissions guide for HSF Meißen in Saxony, Germany.",
    heroEyebrow: "Saxon State University of Applied Sciences · Civil Service & Public Law",
    tuitionText: "Tuition is free (€0). As dual civil-service trainees (Beamtenanwärter), admitted German/EU students receive a monthly preparatory civil service salary (Anwärterbezüge) of approximately €1,400 to €1,600 per month during their studies.",
    admissions: {
      masters: "Abitur, Fachhochschulreife, or recognized international equivalent secondary credential with solid grades in German, Mathematics, and Social Sciences.",
      phd: "Not offering independent doctoral degrees; graduates qualify for senior civil service career tracks (Höherer Dienst) and university master's articulation.",
      language: "German C1 / DSH-2 or TestDaF 4 required for official administrative jurisprudence and civil service legal studies.",
      proposal: "Structured motivation dossier and passing score on the Saxon State civil service selection competition (Auswahlverfahren des Landespersonalausschusses).",
      appFee: "Zero application fee via the Saxon State civil service portal.",
      documents: "Certified high school diploma, CV, health fitness certificate for civil service appointment, and police clearance certificate (Führungszeugnis)."
    },
    opportunities: [
      {
        id: 3140,
        title: "Saxon State Civil Service Trainee Salary & Dual Study Fellowship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€1,450 to €1,600 monthly civil service trainee salary throughout studies",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "Full tuition-free study (€0 tuition funded by the Free State of Saxony)",
        source: "https://www.hsf.sachsen.de/studium/bewerbung/",
        desc: "Dual civil service study scholarship providing a full monthly trainee salary, state healthcare coverage, and guaranteed civil service career entry upon graduation.",
        requirements: {
          gpa: "German Abitur or Fachhochschulreife with grade 2.5 or better",
          ielts: "German C1 required",
          gre: "Not required",
          papers: "Successful completion of the central Saxon civil service aptitude examination",
          references: "Two character or academic appraisals"
        }
      },
      {
        id: 3141,
        title: "Bachelor of Laws (LL.B.) in General Public Administration (Allgemeine Verwaltung)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Salaried dual study model with Saxon municipal authorities",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition for all enrolled dual students",
        source: "https://www.hsf.sachsen.de/studium/fachbereich-allgemeine-verwaltung/",
        desc: "Three-year dual bachelor's degree combining administrative law, constitutional law, municipal budgeting, public human resources, and e-government systems.",
        requirements: {
          gpa: "Abitur or recognized European equivalent with strong analytical marks",
          ielts: "German language mastery (C1)",
          gre: "Not required",
          papers: "Motivation statement for public service leadership",
          references: "Civil service selection committee appraisal"
        }
      },
      {
        id: 3142,
        title: "Diplom-Finanzwirt (FH) in State Tax Administration (Steuerverwaltung)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "Fully salaried preparatory civil service appointment (€1,450/month)",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition",
        source: "https://www.hsf.sachsen.de/studium/fachbereich-steuerverwaltung/",
        desc: "Rigorous three-year professional degree specializing in corporate taxation, income tax law, fiscal auditing, balance sheet analysis, and digital tax compliance.",
        requirements: {
          gpa: "University entrance qualification with high marks in mathematics and economics",
          ielts: "German C1",
          gre: "Not required",
          papers: "Application via the Saxon State Tax Office (Landesamt für Steuern und Finanzen)",
          references: "Tax authority interview evaluation"
        }
      },
      {
        id: 3143,
        title: "Saxon E-Government & Digital Administrative Law Project",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€14,500 project research grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled students",
        tuition: "Funded via Saxon Ministry of the Interior innovation grant",
        source: "https://www.hsf.sachsen.de/forschung/",
        desc: "Applied legal and technical research investigating the implementation of the Online Access Act (OZG), digital citizen identity wallets, and automated administrative decision workflows.",
        requirements: {
          gpa: "Enrolled in HSF Meißen law or tax program with high distinction grades",
          ielts: "German C1/C2",
          gre: "Not required",
          papers: "Research paper on administrative digitization or data privacy",
          references: "Faculty professor recommendation"
        }
      },
      {
        id: 3144,
        title: "Saxon Ministry & Municipal Administrative Residency Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Fully compensated practical semester (€1,450/month)",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Core curricular component of dual study",
        source: "https://www.hsf.sachsen.de/studium/praxisabschnitte/",
        desc: "Supervised practical training semesters in Saxon state ministries in Dresden, district offices (Landratsämter), and municipal city halls (Rathäuser).",
        requirements: {
          gpa: "Passing grades in theoretical civil law and public administrative modules",
          ielts: "German fluency",
          gre: "Not required",
          papers: "Official civil service performance appraisal",
          references: "Training mentor sign-off"
        }
      },
      {
        id: 3145,
        title: "Digital Public Sector Governance & Ethics Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "arts-design"],
        funding: "€38,000 annual public administration fellowship stipend",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational research appointment",
        source: "https://www.hsf.sachsen.de/karriere/",
        desc: "One-year fellowship formulating continuing education modules on automated discretionary decisions, AI in public registries, and ethical administrative compliance.",
        requirements: {
          gpa: "First or Second State Examination in Law, or Master's degree in Public Administration / Political Science",
          ielts: "Fluent German and English",
          gre: "Not required",
          papers: "Two legal or administrative publications and 3-page research outline",
          references: "Two academic or judicial referee letters"
        }
      },
      {
        id: 3146,
        title: "Professor (W2) in Public Law & Municipal Administrative Jurisprudence",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "W2 Saxon civil service salary scale (€80,000 - €98,000 per annum)",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Tenured civil service professorship (Beamtenverhältnis auf Lebenszeit)",
        source: "https://www.hsf.sachsen.de/aktuelles/stellenausschreibungen/",
        desc: "Professorial appointment in the Department of General Public Administration, teaching constitutional and administrative law and conducting research on modern public governance.",
        requirements: {
          gpa: "Completed Second State Law Exam (Volljurist) with above-average marks and doctoral degree in Law (Dr. iur.)",
          ielts: "German native or C2 fluency",
          gre: "Not required",
          papers: "Proven judicial, administrative, or legal practice experience and academic publications",
          references: "Full judicial and academic application dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1365,
        name: "Prof. Dr. Frank Nolden",
        title: "Rector of HSF Meißen & Professor of Public Administrative Law",
        subject: "social-sciences",
        topics: ["Administrative Law", "Civil Service Reform", "Municipal Governance", "E-Government Law"],
        source: "https://www.hsf.sachsen.de/hochschule/leitung/",
        summary: "Prof. Dr. Nolden directs HSF Meißen, specializing in modern administrative reforms, civil service education standards, and legal frameworks for municipal government."
      },
      {
        id: 1366,
        name: "Prof. Dr. Claudia Vater",
        title: "Dean of the Faculty of General Administration",
        subject: "social-sciences",
        topics: ["Constitutional Law", "Administrative Ethics", "Civil Service Law", "Public Management"],
        source: "https://www.hsf.sachsen.de/fachbereiche/allgemeine-verwaltung/",
        summary: "Prof. Dr. Vater oversees public administration curricula, researching civil service ethics, disciplinary jurisprudence, and administrative procedure law."
      },
      {
        id: 1367,
        name: "Prof. Dr. Stefan Berger",
        title: "Dean of the Faculty of Tax Administration",
        subject: "social-sciences",
        topics: ["Corporate Tax Law", "Fiscal Accounting", "International Tax Law", "Digital Audit Systems"],
        source: "https://www.hsf.sachsen.de/fachbereiche/steuerverwaltung/",
        summary: "Prof. Dr. Berger directs the tax administration faculty, analyzing corporate tax restructuring, transfer pricing audits, and automated tax reporting systems."
      }
    ]
  },

  // 8. Germany: ADG Business School an der Steinbeis-Hochschule
  {
    institution: "ADG Business School",
    shortName: "ADG Business School",
    slug: "adg-business-school-montabaur",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Montabaur, Rhineland-Palatinate, Germany",
    website: "https://www.adg-business-school.de",
    sourceRow: 211,
    headline: "ADG Business School: Cooperative Banking, Digital Finance & Executive Management Guide",
    overview: "ADG Business School an der Steinbeis-Hochschule, situated at historic Schloss Montabaur, is Germany's premier academic business school for cooperative banking, wealth management, sustainable finance, and executive leadership, partnering directly with the German Cooperative Financial Network (Genossenschaftliche FinanzGruppe Volksbanken Raiffeisenbanken).",
    description: "Verified master's programs, banking scholarships, and executive management guide for ADG Business School in Montabaur, Germany.",
    heroEyebrow: "Steinbeis University Business School · Schloss Montabaur Campus",
    tuitionText: "Tuition averages €14,000 to €19,500 for full degree programs. Cooperative banking employers typically sponsor 50% to 100% of employee tuition fees. Early-bird merit reductions and Steinbeis education loan funds are available.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 180 or 210 ECTS) in economics, business administration, finance, or congruent field.",
      phd: "Not offering independent doctoral studies; focus on accredited state-recognized Bachelor of Arts and Master of Science degrees.",
      language: "German B2/C1 for corporate banking seminars, with good working knowledge of professional English.",
      proposal: "Curriculum vitae detailing banking or corporate finance experience, accompanied by a letter of motivation.",
      appFee: "Zero application fee via the online ADG admissions portal.",
      documents: "Bachelor's degree certificate, academic transcript of records, employment verification letter, and personal identification."
    },
    opportunities: [
      {
        id: 3147,
        title: "Genossenschaftliche FinanzGruppe Executive Excellence Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "€3,000 to €6,000 tuition fee offset",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero application fee",
        tuition: "Applied directly against master's degree tuition",
        source: "https://www.adg-business-school.de/finanzierung-stipendien/",
        desc: "Merit-based tuition scholarship awarded to outstanding young finance professionals entering Master of Science in Banking & Finance or Digital Innovation at Montabaur.",
        requirements: {
          gpa: "German equivalent grade 2.0 or better in undergraduate business degree",
          ielts: "German B2/C1",
          gre: "Not required",
          papers: "500-word essay on future business models in regional cooperative banking",
          references: "One professional recommendation from a financial institution"
        }
      },
      {
        id: 3148,
        title: "Master of Science (M.Sc.) in Banking & Finance",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "Employer co-sponsorship options and tax-deductible tuition",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "€16,800 total program tuition",
        source: "https://www.adg-business-school.de/studiengaenge/master/m-sc-banking-finance/",
        desc: "FIBAA-accredited professional master's degree combining risk management, regulatory banking compliance (Basel IV, MaRisk), credit portfolio modeling, and sustainable ESG financing.",
        requirements: {
          gpa: "Undergraduate degree in Business, Economics, or Law with minimum 180 ECTS",
          ielts: "German B2/C1 and basic English",
          gre: "Not required",
          papers: "Proof of active employment in financial services or corporate finance",
          references: "Employer endorsement"
        }
      },
      {
        id: 3149,
        title: "Master of Science (M.Sc.) in Digital Transformation & Financial Tech",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "Industry-backed digital project modules",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero application fee",
        tuition: "€17,200 total program tuition",
        source: "https://www.adg-business-school.de/studiengaenge/master/m-sc-digital-innovation-business-transformation/",
        desc: "Advanced graduate program exploring algorithmic trading, blockchain applications in decentralized finance, digital identity verification, and agile leadership in banking.",
        requirements: {
          gpa: "Bachelor's degree in Business Informatics, Economics, or Computer Science",
          ielts: "German B2 and English proficiency",
          gre: "Not required",
          papers: "Statement of interest in FinTech innovation",
          references: "One academic or employer recommendation"
        }
      },
      {
        id: 3150,
        title: "Schloss Montabaur Sustainable Banking & ESG Integration Study",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€15,000 project research grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled master's students",
        tuition: "Supported by DZ BANK foundation research grant",
        source: "https://www.adg-business-school.de/forschung/",
        desc: "Applied banking research investigating EU green taxonomy compliance, climate stress-testing for mid-sized bank portfolios, and biodiversity loan covenants.",
        requirements: {
          gpa: "Enrolled in M.Sc. Banking & Finance with distinction marks",
          ielts: "German and English business fluency",
          gre: "Not required",
          papers: "Research synopsis evaluating ESG regulatory frameworks",
          references: "Academic director recommendation"
        }
      },
      {
        id: 3151,
        title: "Volksbanken Raiffeisenbanken Corporate Treasury Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "€1,200 per month corporate banking internship stipend",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Curricular credit toward master's degree",
        source: "https://www.adg-business-school.de",
        desc: "Corporate banking internship inside cooperative financial institutions, participating in corporate loan underwriting, interest rate hedging, and treasury cash management.",
        requirements: {
          gpa: "Satisfactory completion of semester 1 master's units",
          ielts: "German business fluency",
          gre: "Not required",
          papers: "Resume and banking coursework transcript",
          references: "Faculty advisor confirmation"
        }
      },
      {
        id: 3152,
        title: "Cooperative Enterprise & Community Finance Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€42,000 annual applied finance fellowship stipend",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Applied research post",
        source: "https://www.adg-business-school.de/karriere/",
        desc: "One-year applied fellowship researching the resilience of decentralized cooperative financial structures during macroeconomic liquidity shocks and digital disruptions.",
        requirements: {
          gpa: "Master's degree or PhD in Finance, Economics, or Banking Management",
          ielts: "Fluent German and English",
          gre: "Not required",
          papers: "Two sample research articles on banking and a 3-page research agenda",
          references: "Two academic or banking executive referee letters"
        }
      },
      {
        id: 3153,
        title: "Professor in Banking Management, Financial Risk & Regulation",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "mathematics"],
        funding: "€75,000 - €95,000 annual salary under Steinbeis University remuneration guidelines",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time academic professorship",
        source: "https://www.adg-business-school.de/karriere/",
        desc: "Professorial role delivering executive master's seminars in banking governance, asset-liability management, and regulatory compliance at Schloss Montabaur.",
        requirements: {
          gpa: "Doctorate in Business Administration, Economics, or Finance (Dr. rer. pol.)",
          ielts: "German native/C2 and English business fluency",
          gre: "Not required",
          papers: "Minimum 5 years senior financial services industry experience and proven pedagogical excellence",
          references: "Three professional and academic reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1368,
        name: "Prof. Dr. Christian Bock",
        title: "Academic Director & Professor of Banking Management",
        subject: "social-sciences",
        topics: ["Cooperative Banking", "Bank Risk Management", "MaRisk & Basel IV", "Financial Strategy"],
        source: "https://www.adg-business-school.de/ueber-uns/dozenten-professoren/",
        summary: "Prof. Dr. Bock oversees banking management curricula at ADG, advising cooperative financial institutions on regulatory capital management and strategic bank leadership."
      },
      {
        id: 1369,
        name: "Prof. Dr. Stefanie Kisgen",
        title: "Professor of Leadership & Digital Business Transformation",
        subject: "social-sciences",
        topics: ["Executive Leadership", "Digital Workspaces", "Corporate Culture", "Change Management"],
        source: "https://www.adg-business-school.de/ueber-uns/dozenten-professoren/",
        summary: "Prof. Dr. Kisgen specializes in executive development, agile leadership in financial services, and corporate culture adaptation during technological transitions."
      },
      {
        id: 1370,
        name: "Dr. Marco Becker",
        title: "Senior Lecturer in Financial Technologies & Sustainable Finance",
        subject: "social-sciences",
        topics: ["FinTech", "Blockchain Finance", "ESG Scoring", "Algorithmic Investment"],
        source: "https://www.adg-business-school.de/ueber-uns/dozenten-professoren/",
        summary: "Dr. Becker lectures on financial technologies, digital asset compliance, and ESG investment methodologies for European credit institutions."
      }
    ]
  },

  // 9. Germany: Duale Hochschule Baden-Württemberg Lörrach (DHBW Lörrach)
  {
    institution: "Duale Hochschule Baden-Württemberg Lörrach",
    shortName: "DHBW Lörrach",
    slug: "dhbw-loerrach-university",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Lörrach, Baden-Württemberg, Germany",
    website: "https://dhbw-loerrach.de",
    sourceRow: 216,
    headline: "DHBW Lörrach: Mechatronics, Computer Science, Health & International Business Guide",
    overview: "Duale Hochschule Baden-Württemberg Lörrach (DHBW Lörrach) is a renowned state university situated in the trinational border region of Germany, Switzerland, and France, pioneering the German cooperative education model where students rotate quarterly between university theory and paid corporate work at top engineering multinationals.",
    description: "Verified dual bachelor's degrees, corporate engineering fellowships, and admissions guide for DHBW Lörrach in Germany.",
    heroEyebrow: "Baden-Württemberg State Dual University · Trinational Border Hub",
    tuitionText: "Tuition is free (€0). As dual students employed with corporate partner companies (Dualer Partner), students receive guaranteed monthly employment salaries averaging €1,100 to €1,600 per month throughout their entire three-year degree.",
    admissions: {
      masters: "General higher education entrance qualification (Abitur), Fachhochschulreife, or recognized foreign equivalent.",
      phd: "Not offering independent doctoral studies; focus on accredited Bachelor of Science and Bachelor of Engineering degrees.",
      language: "German C1/DSH-2 for German-taught degrees; English B2/C1 for international corporate partner placements.",
      proposal: "A formal training contract (Ausbildungsvertrag) concluded with an approved DHBW partner company (Dualer Partner).",
      appFee: "Zero application fee through DHBW or corporate partner.",
      documents: "Certified school diploma, CV, corporate training contract, and health insurance confirmation."
    },
    opportunities: [
      {
        id: 3154,
        title: "DHBW Corporate Dual Partner Employment & Salary Guarantee",
        type: "Scholarship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "€1,200 to €1,650 monthly corporate salary paid across all 3 years",
        status: "Open",
        deadline: "2027-01-31",
        deadlineText: "January 31, 2027",
        fee: "Zero application fee",
        tuition: "Full tuition-free study (€0 tuition at Baden-Württemberg state universities)",
        source: "https://dhbw-loerrach.de/bewerbung",
        desc: "Corporate cooperative fellowship providing full monthly salary, covered health insurance, and zero tuition through employment contracts with international industrial partners (Roche, Endress+Hauser, Novartis).",
        requirements: {
          gpa: "Abitur or European equivalent with strong mathematics and physics marks",
          ielts: "German C1 and English B2",
          gre: "Not required",
          papers: "Successful technical interview and signed dual training contract with partner firm",
          references: "Corporate hiring manager endorsement"
        }
      },
      {
        id: 3155,
        title: "Bachelor of Engineering (B.Eng.) in Mechatronics & Trinational Systems",
        type: "Master's",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Salaried trinational corporate engineering apprenticeship",
        status: "Open",
        deadline: "2027-02-15",
        deadlineText: "February 15, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition",
        source: "https://dhbw-loerrach.de/mechatronik",
        desc: "Cooperative engineering degree integrating mechanical systems, robotics, microelectronics, embedded firmware, and sensor integration in high-tech manufacturing.",
        requirements: {
          gpa: "Abitur with strong STEM grades",
          ielts: "German C1 (and English/French advantageous for trinational track)",
          gre: "Not required",
          papers: "Signed training agreement with partner engineering company",
          references: "Corporate mentor recommendation"
        }
      },
      {
        id: 3156,
        title: "Bachelor of Science (B.Sc.) in Applied Computer Science (Informatik)",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "engineering"],
        funding: "Guaranteed monthly corporate salary (€1,300/month)",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Zero application fee",
        tuition: "€0 tuition",
        source: "https://dhbw-loerrach.de/informatik",
        desc: "Three-year dual curriculum alternating between university campus and enterprise software development teams, focusing on cloud systems, database engineering, and cybersecurity.",
        requirements: {
          gpa: "Abitur or technical high school diploma with pass in Mathematics and Computing",
          ielts: "German C1 and English B2",
          gre: "Not required",
          papers: "Corporate dual study employment contract",
          references: "One academic or technical reference"
        }
      },
      {
        id: 3157,
        title: "Trinational Medical Device & Sensor Automation Laboratory Project",
        type: "Research",
        subject: "engineering",
        subjects: ["engineering", "biology"],
        funding: "€15,000 project research grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled engineering students",
        tuition: "Funded via Baden-Württemberg cross-border innovation fund",
        source: "https://dhbw-loerrach.de/forschung",
        desc: "Applied mechatronics research testing optical biosensors, automated micro-dispensing systems, and quality control robotics for regional pharmaceutical manufacturers.",
        requirements: {
          gpa: "Enrolled in DHBW mechatronics or computer science with distinction grades",
          ielts: "German C1 and English fluency",
          gre: "Not required",
          papers: "Demonstrated skills in microcontroller programming (C/C++) or CAD design",
          references: "Laboratory professor recommendation"
        }
      },
      {
        id: 3158,
        title: "Baden-Basel Trinational Corporate Engineering Practicum",
        type: "Internship",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "Fully salaried 12-week rotational corporate work term (€1,400/month)",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero fee",
        tuition: "Core curricular component of dual study",
        source: "https://dhbw-loerrach.de/unternehmen",
        desc: "Mandatory corporate engineering placement rotating every 12 weeks into industrial facilities across the Upper Rhine border region (Lörrach, Basel, Mulhouse).",
        requirements: {
          gpa: "Passing grades in theoretical engineering modules",
          ielts: "German working proficiency",
          gre: "Not required",
          papers: "Corporate workplace practice report",
          references: "Company training supervisor confirmation"
        }
      },
      {
        id: 3159,
        title: "Dual Cooperative Pedagogy & Engineering Education Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "engineering"],
        funding: "€42,000 annual applied engineering education fellowship",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Educational appointment",
        source: "https://dhbw-loerrach.de/karriere",
        desc: "One-year curriculum fellowship designing hybrid virtual lab simulations and trinational student exchange frameworks in automation technology.",
        requirements: {
          gpa: "Master's degree or PhD in Engineering, Computer Science, or Technical Pedagogy",
          ielts: "Fluent German and English",
          gre: "Not required",
          papers: "Portfolio of dual study teaching resources and 2-page project outline",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3160,
        title: "Professor (W2) in Autonomous Systems & Industrial Robotics",
        type: "Job",
        subject: "engineering",
        subjects: ["engineering", "computer-science"],
        funding: "W2 Baden-Württemberg civil service salary scale (€82,000 - €102,000 per year)",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Tenured civil service professorship",
        source: "https://dhbw-loerrach.de/karriere",
        desc: "Professorial appointment in the Faculty of Engineering, teaching robotics, kinematics, sensor fusion, and supervising student corporate engineering theses.",
        requirements: {
          gpa: "Doctoral degree in Mechanical Engineering, Electrical Engineering, or Mechatronics (Dr.-Ing.)",
          ielts: "German C1/C2 and English fluency",
          gre: "Not required",
          papers: "Minimum 5 years professional industry engineering experience (outside academia) per Baden-Württemberg Higher Education Act",
          references: "Full academic and industrial application dossier"
        }
      }
    ],
    researchers: [
      {
        id: 1371,
        name: "Prof. Dr. Gerhard Jäger",
        title: "Rector of DHBW Lörrach & Professor of Computer Science",
        subject: "computer-science",
        topics: ["Dual Higher Education", "Software Engineering", "Trinational Cooperation", "Embedded Systems"],
        source: "https://dhbw-loerrach.de/hochschule/leitung",
        summary: "Prof. Dr. Jäger directs DHBW Lörrach, championing trinational educational partnerships across the Upper Rhine and innovative dual study engineering models."
      },
      {
        id: 1372,
        name: "Prof. Dr. Ralf Busch",
        title: "Dean of the Faculty of Engineering",
        subject: "engineering",
        topics: ["Mechatronics", "Automation Systems", "Control Engineering", "Industrial Robotics"],
        source: "https://dhbw-loerrach.de/fakultaet-technik",
        summary: "Prof. Dr. Busch oversees engineering degree programs, researching industrial robotics integration, sensor-actuator networks, and manufacturing automation."
      },
      {
        id: 1373,
        name: "Prof. Dr. Michael Ruck",
        title: "Professor of Medical Technology & Bio-Sensors",
        subject: "engineering",
        topics: ["Medical Instrumentation", "Optical Biosensors", "Diagnostic Devices", "Fluidics"],
        source: "https://dhbw-loerrach.de/fakultaet-technik",
        summary: "Prof. Dr. Ruck collaborates with regional medical technology multinationals in Basel and Lörrach, developing microfluidic testing devices and clinical sensors."
      }
    ]
  },

  // 10. Germany: Berlin School of Business and Innovation (BSBI)
  {
    institution: "Berlin School of Business and Innovation",
    shortName: "BSBI Berlin",
    slug: "berlin-school-of-business-and-innovation-bsbi",
    countryId: "germany",
    countryLabel: "Germany",
    location: "Berlin, Germany",
    website: "https://berlinsbi.com",
    sourceRow: 224,
    headline: "BSBI Berlin: Global MBA, Data Analytics, Digital Marketing & Creative Industries Guide",
    overview: "Berlin School of Business and Innovation (BSBI) is an international business school located in Berlin's historic Alte Post building in Neukölln, delivering accredited bachelor's, master's, and doctorate degrees in partnership with Università Telematica Internazionale UNINETTUNO and the University for the Creative Arts (UCA).",
    description: "Verified master's programs, business scholarships, and international admissions guide for BSBI in Berlin, Germany.",
    heroEyebrow: "International Business School · Berlin Neukölln Campus",
    tuitionText: "Tuition for postgraduate programs averages €11,000 to €14,500 for the full degree. High-achiever scholarships of up to 50% tuition reduction, early-bird fee discounts, and flexible monthly payment plans are available for international candidates.",
    admissions: {
      masters: "Recognized Bachelor's degree (minimum 180 ECTS) in business, humanities, engineering, or computing from an accredited university.",
      phd: "Master's degree or MBA with good academic standing, accompanied by a 3,000-word doctoral research proposal and interview.",
      language: "IELTS Academic 6.0 to 6.5 overall (minimum 5.5 to 6.0 in each band) or equivalent medium of instruction (MOI) certification.",
      proposal: "A 500-word personal statement detailing academic motivation, career plans, and interest in Berlin's startup ecosystem.",
      appFee: "Zero application fee through the BSBI direct online portal.",
      documents: "Bachelor's certificate, official transcripts, CV, personal statement, copy of passport, and two letters of recommendation."
    },
    opportunities: [
      {
        id: 3161,
        title: "BSBI Berlin Global Leadership & Women in STEM Scholarship",
        type: "Scholarship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "30% to 50% tuition fee reduction",
        status: "Open",
        deadline: "2027-02-01",
        deadlineText: "February 1, 2027",
        fee: "Zero application fee",
        tuition: "Reduces overall international master's degree tuition",
        source: "https://berlinsbi.com/admissions/fees-and-scholarships",
        desc: "Merit-based scholarship awarded to ambitious international students entering Master's programs in Digital Marketing, Data Analytics, or Global MBA at BSBI Berlin.",
        requirements: {
          gpa: "Minimum 70% or equivalent in undergraduate studies",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "500-word essay on entrepreneurial ambition and digital innovation in Berlin",
          references: "One academic or professional reference"
        }
      },
      {
        id: 3162,
        title: "Global MBA (Full-Time / Blended Learning in Berlin)",
        type: "Master's",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "Early application discounts and corporate installment plans",
        status: "Open",
        deadline: "2027-03-01",
        deadlineText: "March 1, 2027",
        fee: "Zero application fee",
        tuition: "€13,500 total program tuition",
        source: "https://berlinsbi.com/programmes/postgraduate/global-mba",
        desc: "Career-transforming master's degree awarded in partnership with UNINETTUNO, exploring entrepreneurial leadership, cross-border corporate finance, strategic marketing, and innovation management.",
        requirements: {
          gpa: "Bachelor's degree in any discipline with at least 1-2 years relevant professional work experience",
          ielts: "IELTS 6.0 (no sub-score below 5.5)",
          gre: "Not required",
          papers: "Curriculum vitae and personal statement",
          references: "Two professional or academic reference letters"
        }
      },
      {
        id: 3163,
        title: "MSc in Data Analytics for Business Decision Making",
        type: "Master's",
        subject: "computer-science",
        subjects: ["computer-science", "social-sciences"],
        funding: "Access to Berlin startup ecosystem networking events",
        status: "Open",
        deadline: "2027-03-15",
        deadlineText: "March 15, 2027",
        fee: "Zero application fee",
        tuition: "€12,600 total program tuition",
        source: "https://berlinsbi.com/programmes/postgraduate/msc-data-analytics",
        desc: "Advanced master's degree training business analysts in Python, SQL data extraction, machine learning predictive models, data visualization, and enterprise data ethics.",
        requirements: {
          gpa: "Bachelor's degree with quantitative background in business, engineering, or computing",
          ielts: "IELTS 6.0 overall",
          gre: "Not required",
          papers: "Statement of purpose detailing interest in commercial analytics",
          references: "One academic and one employer reference"
        }
      },
      {
        id: 3164,
        title: "Berlin Startup Ecosystem & Venture Scaling Research Assistantship",
        type: "Research",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€14,000 project research grant",
        status: "Open",
        deadline: "2027-03-31",
        deadlineText: "March 31, 2027",
        fee: "Free application for enrolled master's students",
        tuition: "Supported by BSBI entrepreneurship center grant",
        source: "https://berlinsbi.com",
        desc: "Applied market study examining early-stage seed funding rounds, venture capital syndicates, and scaling hurdles for AI startups in Berlin-Mitte and Kreuzberg.",
        requirements: {
          gpa: "Enrolled in BSBI MBA or data analytics program with high standing",
          ielts: "Fluent English communication",
          gre: "Not required",
          papers: "Sample research paper or market valuation analysis",
          references: "Academic tutor recommendation"
        }
      },
      {
        id: 3165,
        title: "Berlin Tech Venture & Digital Agency Work Practicum",
        type: "Internship",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€950 - €1,200 per month internship compensation for 5-month placement",
        status: "Open",
        deadline: "2027-04-15",
        deadlineText: "April 15, 2027",
        fee: "Zero placement fee",
        tuition: "Credit-bearing component of master's degree",
        source: "https://berlinsbi.com/student-services/careers-service",
        desc: "Supervised business and analytics internship working with innovative Berlin technology startups, e-commerce brands, and digital marketing consultancies.",
        requirements: {
          gpa: "Satisfactory completion of semester 1 master's modules",
          ielts: "Professional English fluency; basic German beneficial",
          gre: "Not required",
          papers: "Professional CV and motivation letter",
          references: "Careers service sign-off"
        }
      },
      {
        id: 3166,
        title: "International Entrepreneurship & Circular Economy Fellowship",
        type: "Fellowship",
        subject: "social-sciences",
        subjects: ["social-sciences", "environment"],
        funding: "€36,000 annual applied business fellowship stipend",
        status: "Open",
        deadline: "2027-02-28",
        deadlineText: "February 28, 2027",
        fee: "Free application",
        tuition: "Applied research post",
        source: "https://berlinsbi.com/about-us/careers",
        desc: "One-year applied fellowship formulating curriculum case studies on circular business models, social enterprise governance, and sustainable consumer tech.",
        requirements: {
          gpa: "Master's degree or PhD in Management, Economics, or Sustainability",
          ielts: "High-level English publication competence",
          gre: "Not required",
          papers: "Two sample business case studies or peer-reviewed papers and 3-page research proposal",
          references: "Two academic referee letters"
        }
      },
      {
        id: 3167,
        title: "Senior Lecturer in Global Strategy & Enterprise Innovation",
        type: "Job",
        subject: "social-sciences",
        subjects: ["social-sciences", "computer-science"],
        funding: "€55,000 - €70,000 annual salary under institutional remuneration scale",
        status: "Open",
        deadline: "2026-12-15",
        deadlineText: "December 15, 2026",
        fee: "Zero application fee",
        tuition: "Full-time academic faculty appointment",
        source: "https://berlinsbi.com/about-us/careers",
        desc: "Faculty position delivering postgraduate seminars in corporate strategy, supervising master's dissertations, and building industrial partnerships in Berlin.",
        requirements: {
          gpa: "PhD or DBA in Strategic Management, International Business, or Economics",
          ielts: "Fluent academic English",
          gre: "Not required",
          papers: "Minimum 3 years tertiary business teaching experience and international publication record",
          references: "Three professional reference letters"
        }
      }
    ],
    researchers: [
      {
        id: 1374,
        name: "Prof. Dr. Kyriakos Kouveliotis",
        title: "Provost & Chief Academic Officer of BSBI",
        subject: "social-sciences",
        topics: ["Higher Education Leadership", "Global Strategy", "Crisis Management", "International Relations"],
        source: "https://berlinsbi.com/about-us/faculty/",
        summary: "Prof. Dr. Kouveliotis is an international academic leader and author directing academic strategy and global degree partnerships at BSBI Berlin."
      },
      {
        id: 1375,
        name: "Dr. Farshad Badie",
        title: "Associate Dean & Head of School of Computer Science and AI",
        subject: "computer-science",
        topics: ["Human-AI Interaction", "Logic in AI", "Data Science", "Cognitive Informatics"],
        source: "https://berlinsbi.com/about-us/faculty/",
        summary: "Dr. Badie specializes in the philosophy of computing, symbolic logic in artificial intelligence, and semantic data analytics for enterprise systems."
      },
      {
        id: 1376,
        name: "Dr. Anastasios Fountis",
        title: "Head of Postgraduate Programmes & Finance Specialist",
        subject: "social-sciences",
        topics: ["Corporate Finance", "Financial Economics", "Mergers & Acquisitions", "Risk Modeling"],
        source: "https://berlinsbi.com/about-us/faculty/",
        summary: "Dr. Fountis leads postgraduate finance programs, researching financial economics, capital structure optimization, and corporate valuation methodologies."
      }
    ]
  }
];
