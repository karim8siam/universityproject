# scripts/make_b66_p1_chunk1.py
# Batch 66 Part 1 Chunk 1: Universities 1 to 8

chunk1 = [
  # 1. St. Joseph’s University, New York - Brooklyn (Row 969)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "St. Joseph's University, New York - Brooklyn",
    "shortName": "St. Joseph's NY Brooklyn",
    "slug": "st-josephs-university-new-york-brooklyn",
    "location": "Brooklyn, New York, United States",
    "website": "https://www.sjny.edu",
    "sourceRow": 969,
    "stats": {"established": "1916", "students": "4,300+", "international": "3%", "faculty": "310+"},
    "heroSummary": "St. Joseph's University, New York is an independent university located in the historic Clinton Hill neighborhood of Brooklyn, with a sister campus in Long Island. Founded by the Sisters of St. Joseph, the university is acclaimed for its leading nursing school, the renowned Dillon Child Study Center (one of the first laboratory preschools in NYC), cutting-edge forensic psychology, and accessible liberal arts education.",
    "academicOverview": "St. Joseph's comprises the School of Arts and Sciences, the School of Professional and Graduate Studies, and the Department of Nursing. Its Brooklyn campus features the historic Tuohy Hall, state-of-the-art computer science and digital media laboratories, and clinical healthcare simulation suites.",
    "researchAdmissions": "Undergraduate admissions evaluate high school academic records (average 3.3 GPA), personal essays, and extracurricular involvement on a test-optional basis. Graduate programs require an accredited baccalaureate degree with a 3.0+ minimum GPA, official transcripts, letters of recommendation, and program-specific personal statements.",
    "opps": [
      {
        "title": "Master of Science in Nursing - Adult-Gerontology Primary Care",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "HRSA Advanced Nursing Workforce Scholarships and NYC hospital tuition partnerships",
        "fee": "$50",
        "tuition": "$990/credit hour",
        "desc": "CCNE-accredited graduate nursing program preparing nurse practitioners to deliver primary healthcare across adult and geriatric populations in urban ambulatory clinics and medical centers.",
        "requirements": {"gpa": "Accredited BSN with 3.0+ GPA and unencumbered active NY RN license", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Professional nursing philosophy essay", "references": "Two professional/clinical recommendations"},
        "source": "https://www.sjny.edu/brooklyn/academics/programs/msn-adult-gerontology"
      },
      {
        "title": "Bachelor of Science in Computer Science & Artificial Intelligence",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "St. Joseph's Presidential Merit Scholarships up to $24,000/year",
        "fee": "$0",
        "tuition": "$34,200/year",
        "desc": "Rigorous undergraduate program covering algorithms, deep neural networks, cloud computing architecture, and software development, leveraging NYC's tech ecosystem.",
        "requirements": {"gpa": "High school GPA 3.0+ with precalculus or advanced math", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application personal statement", "references": "One academic teacher recommendation"},
        "source": "https://www.sjny.edu/brooklyn/academics/programs/computer-science"
      },
      {
        "title": "Master of Science in Forensic Psychology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate Social Science Research Assistantships up to $6,000",
        "fee": "$50",
        "tuition": "$990/credit hour",
        "desc": "Interdisciplinary master's degree exploring psychopathology, criminal behavior analysis, courtroom psychological evaluation, and rehabilitation in the criminal justice system.",
        "requirements": {"gpa": "Bachelor's degree in psychology or social sciences with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Statement of research interests in forensic psychology", "references": "Two letters of recommendation"},
        "source": "https://www.sjny.edu/brooklyn/academics/programs/forensic-psychology-ms"
      },
      {
        "title": "Bachelor of Science in Child Study & Early Childhood Education",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Dillon Child Study Center Fellowship Awards up to $5,000",
        "fee": "$0",
        "tuition": "$34,200/year",
        "desc": "Premier teacher education curriculum integrating on-campus laboratory preschool practicums at the historic Dillon Child Study Center with dual certification in general and special education.",
        "requirements": {"gpa": "High school GPA 2.8+ and fingerprint clearance for classroom observations", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Teaching motivation essay", "references": "One counselor recommendation"},
        "source": "https://www.sjny.edu/brooklyn/academics/programs/child-study"
      },
      {
        "title": "Master of Business Administration (MBA) in Health Care Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Executive Healthcare Management Merit Grants up to $4,500",
        "fee": "$50",
        "tuition": "$1,040/credit hour",
        "desc": "IACBE-accredited graduate degree focusing on healthcare financial analysis, regulatory compliance, health informatics, and strategic institutional leadership in metro New York.",
        "requirements": {"gpa": "Bachelor's degree with 2.75+ GPA from an accredited institution", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Statement of managerial goals", "references": "Two professional references"},
        "source": "https://www.sjny.edu/brooklyn/academics/programs/mba-health-care-management"
      },
      {
        "title": "Brooklyn Urban Community Health & Pedagogical Research Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$4,000 summer project stipend and urban community clinic placement",
        "fee": "$0",
        "tuition": "Funded through St. Joseph's University Academic Research Fund",
        "desc": "Community health and educational fellowship analyzing pediatric health disparities, early literacy intervention outcomes, and immigrant family healthcare access across Brooklyn.",
        "requirements": {"gpa": "Enrolled graduate or upper-division student in nursing, child study, or psychology with 3.2+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Urban community project proposal", "references": "One faculty recommendation"},
        "source": "https://www.sjny.edu/research/community-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Donald R. Boomgaarden",
        "role": "President & Professor of Music",
        "department": "Office of the President",
        "subject": "arts-design",
        "bio": "Dr. Boomgaarden serves as the eighth President of St. Joseph's University, New York, a noted musicologist, classical pianist, and higher education administrative leader."
      },
      {
        "name": "Dr. Maria Fletcher",
        "role": "Associate Dean & Professor of Nursing",
        "department": "Department of Nursing",
        "subject": "biology",
        "bio": "Dr. Fletcher directs graduate nursing education, researching adult palliative care, nurse practitioner clinical competency development, and community chronic disease management."
      },
      {
        "name": "Dr. Phillip Dehne",
        "role": "Chair & Professor of History",
        "department": "Department of History",
        "subject": "social-sciences",
        "bio": "Dr. Dehne is a modern British and imperial historian specializing in economic warfare, international trade blockades during World War I, and European geopolitical development."
      }
    ]
  },

  # 2. St. Mary's College of Maryland Campus Center (Row 970)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "St. Mary's College of Maryland",
    "shortName": "St. Mary's College of Maryland",
    "slug": "st-marys-college-of-maryland-st-marys-city",
    "location": "St. Mary's City, Maryland, United States",
    "website": "https://www.smcm.edu",
    "sourceRow": 970,
    "stats": {"established": "1840", "students": "1,600+", "international": "3%", "faculty": "140+"},
    "heroSummary": "St. Mary's College of Maryland (SMCM) is the designated public honors college of Maryland, located on the historic riverfront where Maryland was founded in 1634 in St. Mary's City. Acclaimed nationwide for offering an elite private liberal arts college experience at a public university cost, SMCM is celebrated for its waterfront marine science, colonial historical archaeology, atomic physics, and nationally ranked sailing team.",
    "academicOverview": "SMCM provides an intensive liberal arts curriculum centered on the signature 'St. Mary's Project' (SMP)—an independent eight-credit capstone research thesis. Its scenic 361-acre waterfront campus features the Marine Science Research Center, modern physics optics laboratories, and contiguous archaeological excavation sites exploring 17th-century colonial history.",
    "researchAdmissions": "Undergraduate admissions evaluate high school academic rigor, writing essays, intellectual depth, and leadership on a test-optional basis (average incoming GPA 3.6). The Master of Arts in Teaching (MAT) requires an accredited bachelor's degree with a 3.0+ GPA, subject matter prerequisites, and academic recommendations.",
    "opps": [
      {
        "title": "Master of Arts in Teaching (MAT)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Maryland Teacher Shortage Grants and MAT Graduate Assistantships covering up to 50% tuition",
        "fee": "$50",
        "tuition": "$12,400/year in-state, $18,600/year out-of-state",
        "desc": "Intensive one-year cohort graduate program leading to Maryland initial teacher certification, featuring a full-year clinical internship in regional public schools.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA in a teaching certification subject area", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Teaching philosophy and diversity statement", "references": "Three letters of academic/professional recommendation"},
        "source": "https://www.smcm.edu/mat/"
      },
      {
        "title": "Bachelor of Science in Marine Science & Coastal Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "St. Mary's Public Honors Merit Scholarships up to $10,000/year and Chesapeake Bay Foundation Grants",
        "fee": "$0 (via Common App)",
        "tuition": "$15,124/year in-state, $31,200/year out-of-state",
        "desc": "Hands-on waterfront degree utilizing the St. Mary's River estuary and Chesapeake Bay research vessels for oyster restoration, water quality analysis, and benthic community surveying.",
        "requirements": {"gpa": "Strong high school science curriculum in biology and chemistry", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application personal essay", "references": "Two academic recommendations"},
        "source": "https://www.smcm.edu/marine-science/"
      },
      {
        "title": "Bachelor of Science in Physics & Quantum Optics",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "St. Mary's Honors Fellowships and NSF Undergraduate Research Stipends",
        "fee": "$0",
        "tuition": "$15,124/year in-state, $31,200/year out-of-state",
        "desc": "Distinguished undergraduate physics program specializing in laser cooling, atom interferometry, quantum optics, and acoustics, culminating in a year-long St. Mary's Project thesis.",
        "requirements": {"gpa": "Competitive high school transcript with calculus and physics", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application essay", "references": "Two teacher evaluations"},
        "source": "https://www.smcm.edu/physics/"
      },
      {
        "title": "Bachelor of Science in Computer Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "SMCM Honors Academic Grants and STEM Diversity Awards",
        "fee": "$0",
        "tuition": "$15,124/year in-state, $31,200/year out-of-state",
        "desc": "Comprehensive computing curriculum emphasizing algorithm analysis, computer systems, machine learning, and human-computer interaction in an intimate honors college setting.",
        "requirements": {"gpa": "High school GPA 3.3+ with strong math background", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Common Application essay", "references": "Counselor recommendation"},
        "source": "https://www.smcm.edu/mathcs/"
      },
      {
        "title": "Bachelor of Arts in Anthropology & Historical Archaeology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Historic St. Mary's City Collaborative Fieldwork Scholarships",
        "fee": "$0",
        "tuition": "$15,124/year in-state, $31,200/year out-of-state",
        "desc": "Nationally acclaimed historical archaeology program in partnership with Historic St. Mary's City, providing direct fieldwork excavating 17th-century colonial sites and Indigenous settlements.",
        "requirements": {"gpa": "High school diploma with college-prep social studies curriculum", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Personal essay", "references": "Two academic recommendations"},
        "source": "https://www.smcm.edu/anthropology/"
      },
      {
        "title": "St. Mary's River Watershed & Chesapeake Bay Estuary Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$4,500 summer research stipend, waterfront dormitory housing, and research boat time",
        "fee": "$0",
        "tuition": "Funded through SMCM Marine Science Endowment",
        "desc": "Undergraduate summer research fellowship investigating submerged aquatic vegetation (SAV) recovery, blue crab population dynamics, and estuarine microplastics in the lower Potomac and Chesapeake Bay.",
        "requirements": {"gpa": "Enrolled SMCM student in marine science, biology, or environmental studies with 3.2+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Estuarine research proposal", "references": "One marine science faculty letter"},
        "source": "https://www.smcm.edu/marine-science/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Tuajuanda C. Jordan",
        "role": "President & Biochemist",
        "department": "Office of the President",
        "subject": "biology",
        "bio": "Dr. Jordan serves as the seventh President of St. Mary's College of Maryland, an accomplished biochemist and national leader in undergraduate STEM research education."
      },
      {
        "name": "Dr. Charles Adler",
        "role": "Professor of Physics",
        "department": "Department of Physics",
        "subject": "physics",
        "bio": "Dr. Adler is an optical physicist researching meteorological optics (rainbows, halos), laser scattering, and the intersection of science and science fiction literature."
      },
      {
        "name": "Dr. Julia King",
        "role": "Professor of Anthropology & Archaeology",
        "department": "Department of Anthropology",
        "subject": "social-sciences",
        "bio": "Dr. King is a prominent historical archaeologist specializing in early colonial Chesapeake history, Indigenous and European intercultural interactions, and historic landscape archaeology."
      }
    ]
  },

  # 3. State Technical College of Missouri (Row 972)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "State Technical College of Missouri",
    "shortName": "State Tech Missouri",
    "slug": "state-technical-college-of-missouri-linn",
    "location": "Linn, Missouri, United States",
    "website": "https://www.statetechmo.edu",
    "sourceRow": 972,
    "stats": {"established": "1961", "students": "2,200+", "international": "1%", "faculty": "130+"},
    "heroSummary": "State Technical College of Missouri ('State Tech'), located on a modern 360-acre campus in Linn, Missouri, is the state's only public technical college with a statewide mission. Acclaimed as one of the best community and technical colleges in the nation by WalletHub and Forbes, State Tech maintains an extraordinary 99% graduate career placement rate, offering elite training in nuclear technology, aviation maintenance, precision machining, and civil engineering.",
    "academicOverview": "State Tech operates specialized multi-million-dollar training facilities including the Utility Technician Training Center, the Vehicle and Power Center, the Nilges Technology Center, and an on-campus airport for aviation maintenance. The curriculum is developed in direct lockstep with Fortune 500 industrial partners.",
    "researchAdmissions": "State Tech practices open technical admissions for applicants with a high school diploma or GED equivalent. High-demand programs (such as Nuclear Technology, Aviation Maintenance, and Physical Therapist Assistant) require specific ACT/Accuplacer math scores, technical aptitude testing, and interview evaluations.",
    "opps": [
      {
        "title": "Associate of Applied Science in Nuclear Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Ameren Nuclear and Callaway Energy Center full tuition sponsorship scholarships with guaranteed employment",
        "fee": "$0",
        "tuition": "$6,420/year in-state, $12,840/year out-of-state",
        "desc": "Premier nuclear curriculum offering options in Radiation Protection, Reactor Operations, and Nuclear Instrumentation, training technicians for nuclear power stations and radiochemistry facilities.",
        "requirements": {"gpa": "High school diploma with algebra and chemistry proficiency, background security check", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Nuclear program application essay", "references": "Two professional/academic references"},
        "source": "https://www.statetechmo.edu/programs/industrial-tech/nuclear-technology/"
      },
      {
        "title": "Associate of Applied Science in Aviation Maintenance",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Boeing Aviation Workforce Grants up to $4,000",
        "fee": "$0",
        "tuition": "$6,420/year in-state, $12,840/year out-of-state",
        "desc": "FAA Part 147-approved program training students for both Airframe and Powerplant (A&P) licenses, operating on operational aircraft and turbine engines at the on-campus airport.",
        "requirements": {"gpa": "High school diploma with mechanical aptitude assessment", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.statetechmo.edu/programs/transportation-tech/aviation-maintenance/"
      },
      {
        "title": "Associate of Applied Science in Civil Engineering Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Missouri Department of Transportation (MoDOT) Workforce Scholarships",
        "fee": "$0",
        "tuition": "$6,420/year in-state, $12,840/year out-of-state",
        "desc": "Hands-on engineering technician curriculum covering GPS robotic surveying, AutoCAD Civil 3D, concrete/asphalt soil mechanics testing, and municipal infrastructure inspection.",
        "requirements": {"gpa": "High school diploma with algebra and geometry", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "Standard application", "references": "Not required"},
        "source": "https://www.statetechmo.edu/programs/civil-tech/civil-engineering-technology/"
      },
      {
        "title": "Associate of Applied Science in Automation & Mechatronics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "FANUC Robotics and Rockwell Automation Industry Tool Stipends",
        "fee": "$0",
        "tuition": "$6,420/year in-state, $12,840/year out-of-state",
        "desc": "High-tech technical curriculum training automation technicians in programmable logic controllers (Allen-Bradley PLCs), robotic cell integration, motor drives, and industrial Ethernet.",
        "requirements": {"gpa": "High school diploma with algebra competency", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "Application form", "references": "Not required"},
        "source": "https://www.statetechmo.edu/programs/industrial-tech/automation-mechatronics/"
      },
      {
        "title": "Associate of Applied Science in Computer Application Development",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "State Tech STEM Foundation Scholarships up to $2,500",
        "fee": "$0",
        "tuition": "$6,420/year in-state, $12,840/year out-of-state",
        "desc": "Applied coding curriculum focusing on C#, Java, Python, SQL relational database architecture, mobile application development, and agile software development cycles.",
        "requirements": {"gpa": "High school diploma with computer literacy", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.statetechmo.edu/programs/computer-tech/computer-application-development/"
      },
      {
        "title": "Missouri Precision Technology & Industrial Robotics Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "$3,500 student workforce stipend and industry tooling sponsorship",
        "fee": "$0",
        "tuition": "Provided by State Tech Industry Partnership Board",
        "desc": "Applied technical fellowship working with regional manufacturing plants to program robotic welding cells, calibrate nuclear sensor arrays, and optimize automated assembly workflows.",
        "requirements": {"gpa": "Enrolled student in nuclear, mechatronics, or aviation tech with 3.2+ GPA", "ielts": "TOEFL 70+", "gre": "Exempt", "papers": "Technical capstone project abstract", "references": "One technical faculty endorsement"},
        "source": "https://www.statetechmo.edu/foundation/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Shawn Strong",
        "role": "President & Technical Educator",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. Strong leads State Technical College of Missouri, driving unprecedented enrollment growth, campus facility expansion, and industry alignment that achieves a 99% placement rate."
      },
      {
        "name": "Dr. Christopher Bowers",
        "role": "Vice President of Academic Affairs",
        "department": "Office of Academic Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Bowers directs curriculum innovation and technical accreditation standards across State Tech's industrial, transportation, and health technology divisions."
      },
      {
        "name": "Prof. Rick Mihalevich",
        "role": "Dean of Technical Education",
        "department": "Technical Education Division",
        "subject": "engineering",
        "bio": "Prof. Mihalevich oversees advanced manufacturing, mechatronics, and nuclear technology programs, coordinating corporate partnerships with power utilities and aerospace manufacturers."
      }
    ]
  },

  # 4. Stockton University (Row 973)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Stockton University",
    "shortName": "Stockton University",
    "slug": "stockton-university-galloway",
    "location": "Galloway, New Jersey, United States",
    "website": "https://stockton.edu",
    "sourceRow": 973,
    "stats": {"established": "1969", "students": "9,300+", "international": "2%", "faculty": "460+"},
    "heroSummary": "Stockton University is a top-ranked public undergraduate and graduate university set on a stunning 1,600-acre campus within the Pinelands National Reserve in Galloway, New Jersey, with an oceanfront Atlantic City campus on the Boardwalk. Acclaimed for coastal marine science (operating its own Marine Field Station), healthcare disciplines (Doctor of Physical Therapy and Nursing), environmental studies, and hospitality management.",
    "academicOverview": "Stockton comprises the School of Natural Sciences and Mathematics, the School of Health Sciences, the School of Business, the School of Social and Behavioral Sciences, and the School of Arts and Humanities. It features the Marine Field Station at Nacote Creek with research vessels, acoustic seafloor mappers, and the state-of-the-art Unified Science Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (average 3.5), coursework rigor, and optional SAT/ACT scores. Graduate programs require an accredited bachelor's degree with a 3.0+ minimum GPA, GRE scores (program-dependent), statement of purpose, and academic letters of reference.",
    "opps": [
      {
        "title": "Doctor of Physical Therapy (DPT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "School of Health Sciences Graduate Assistantships and clinical traineeship awards",
        "fee": "$75 (via PTCAS)",
        "tuition": "$15,800/year in-state, $23,900/year out-of-state",
        "desc": "CAPTE-accredited three-year clinical doctoral degree providing rigorous training in orthopedic biomechanics, neuro-rehabilitation, pediatric physical therapy, and acute care clinical internships.",
        "requirements": {"gpa": "3.2+ cumulative and prerequisite science GPA, 50+ observation hours", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE scores required", "papers": "PTCAS essay and personal statement", "references": "Three letters of recommendation including licensed PT"},
        "source": "https://stockton.edu/graduate/physical-therapy.html"
      },
      {
        "title": "Master of Science in Coastal Zone Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Marine Field Station Graduate Research Fellowships ($14,000/year + tuition waiver)",
        "fee": "$50",
        "tuition": "$850/credit hour in-state, $1,250/credit hour out-of-state",
        "desc": "Interdisciplinary master's degree utilizing Stockton's Marine Field Station for research on sea-level rise resilience, beach replenishment, salt marsh restoration, and coastal resource law.",
        "requirements": {"gpa": "Bachelor's degree in marine science, environmental science, or biology with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE optional", "papers": "Statement of coastal research goals", "references": "Two academic recommendations"},
        "source": "https://stockton.edu/graduate/coastal-zone-management.html"
      },
      {
        "title": "Master of Science in Data Science and Strategic Analytics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Graduate assistantships offering full tuition remission and research stipends",
        "fee": "$50",
        "tuition": "$850/credit in-state, $1,250/credit out-of-state",
        "desc": "Advanced STEM-designated program covering machine learning, big data architectures, predictive statistical modeling, data visualization, and ethics in artificial intelligence.",
        "requirements": {"gpa": "Bachelor's degree in STEM, business, or quantitative discipline with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Statement of analytical purpose", "references": "Two recommendations"},
        "source": "https://stockton.edu/graduate/data-science-strategic-analytics.html"
      },
      {
        "title": "Bachelor of Science in Environmental Science - Pinelands Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Stockton Merit Scholarships up to $10,000/year and Pinelands Research Awards",
        "fee": "$0",
        "tuition": "$15,532/year in-state, $23,714/year out-of-state",
        "desc": "Unique undergraduate program utilizing Stockton's 1,600-acre Pinelands reserve campus as an outdoor laboratory for wildland fire science, forest hydrology, and rare species conservation.",
        "requirements": {"gpa": "High school GPA 3.0+ with biology and chemistry", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Common Application personal statement", "references": "One counselor recommendation"},
        "source": "https://stockton.edu/natural-sciences-mathematics/environmental-science.html"
      },
      {
        "title": "Master of Science in Nursing - Adult-Gerontology Primary Care NP",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "New Jersey Health Foundation Nursing Grants up to $6,000",
        "fee": "$50",
        "tuition": "$875/credit in-state, $1,280/credit out-of-state",
        "desc": "CCNE-accredited graduate degree preparing nurse practitioners through 600+ hours of clinical primary care rotations across South Jersey hospitals and community health networks.",
        "requirements": {"gpa": "BSN from an accredited program with 3.2+ GPA, active RN license in New Jersey", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Statement of advanced nursing intent", "references": "Three professional references"},
        "source": "https://stockton.edu/graduate/nursing.html"
      },
      {
        "title": "New Jersey Coastal & Estuarine Marine Science Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$4,500 summer research stipend, Marine Field Station boat access, and oceanographic sensor kit",
        "fee": "$0",
        "tuition": "Endowed through the Stockton Coastal Research Center",
        "desc": "Interdisciplinary fellowship conducting side-scan sonar seafloor mapping, coastal barrier island erosion modeling, and horseshoe crab spawning ecology in Delaware Bay.",
        "requirements": {"gpa": "Enrolled student in marine science, environmental science, or geology with 3.2+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Coastal marine research proposal", "references": "Marine science faculty endorsement"},
        "source": "https://stockton.edu/marine-field-station/research.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Joe Bertolino",
        "role": "President & Higher Education Scholar",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Bertolino serves as the sixth President of Stockton University, a nationally respected educator dedicated to social justice, student mental health, and community engagement."
      },
      {
        "name": "Dr. Peter Straub",
        "role": "Professor of Biology & Marine Science",
        "department": "School of Natural Sciences and Mathematics",
        "subject": "biology",
        "bio": "Dr. Straub investigates estuarine fish and shellfish genetics, marine biotechnology, side-scan sonar hydrographic mapping, and coastal ecosystem restoration."
      },
      {
        "name": "Dr. Thomas Kinsella",
        "role": "Professor of Literature & Director of South Jersey Culture Center",
        "department": "School of Arts and Humanities",
        "subject": "arts-design",
        "bio": "Dr. Kinsella directs the South Jersey Culture & History Center, researching the history of bookbinding, regional Pinelands cultural folklore, and historical printing methods."
      }
    ]
  },

  # 5. Stony Brook University (Row 974)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Stony Brook University",
    "shortName": "Stony Brook",
    "slug": "stony-brook-university",
    "location": "Stony Brook, New York, United States",
    "website": "https://www.stonybrook.edu",
    "sourceRow": 974,
    "stats": {"established": "1957", "students": "26,000+", "international": "17%", "faculty": "2,900+"},
    "heroSummary": "Stony Brook University (State University of New York at Stony Brook) is a world-renowned public flagship research university on Long Island's North Shore. Classified as an R1 Doctoral University and a member of the Association of American Universities (AAU), Stony Brook co-manages the prestigious Brookhaven National Laboratory (BNL) for the U.S. Department of Energy. It is globally famous for inventing Magnetic Resonance Imaging (MRI), the Simons Center for Geometry and Physics, and premier programs in physics, computer science, and medicine.",
    "academicOverview": "Stony Brook encompasses the College of Arts and Sciences, the College of Engineering and Applied Sciences, the Renaissance School of Medicine, and the School of Marine and Atmospheric Sciences (SoMAS). Highlights include the Simons Center for Geometry and Physics, the Center of Excellence in Wireless and Information Technology (CEWIT), and the Advanced Energy Center.",
    "researchAdmissions": "Undergraduate admissions are highly competitive (average GPA 3.9, middle 50% SAT 1340-1510, test-optional). Graduate admissions require an accredited bachelor's degree with a 3.0+ minimum GPA (3.5+ for competitive STEM doctorates), GRE scores (department-specific), rigorous research statements of purpose, and three academic references.",
    "opps": [
      {
        "title": "Ph.D. in Physics & Quantum Information (Simons Center / BNL)",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "mathematics"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Full graduate research assistantships providing 100% tuition remission and $34,000 - $38,000 annual living stipends",
        "fee": "$100",
        "tuition": "Covered 100% by doctoral assistantships",
        "desc": "World-class doctoral program in high-energy physics, string theory, quantum chromodynamics, and condensed matter, conducted in collaboration with the Simons Center and Brookhaven National Laboratory.",
        "requirements": {"gpa": "BS or MS in physics or mathematics with 3.5+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Physics GRE strongly recommended", "papers": "Statement of purpose detailing theoretical or experimental research", "references": "Three letters from research physicists"},
        "source": "https://www.physics.sunysb.edu/Physics/graduate/"
      },
      {
        "title": "Ph.D. in Computer Science - Artificial Intelligence & Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental research and teaching assistantships covering full tuition and $32,000+ annual stipend",
        "fee": "$100",
        "tuition": "Covered by assistantships",
        "desc": "Top-tier doctoral program leading breakthroughs in computer vision, natural language processing, distributed cloud computing, cybersecurity, and virtual reality visualization at CEWIT.",
        "requirements": {"gpa": "Bachelor's or master's in CS with 3.5+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "General GRE scores", "papers": "Statement of research interests and curriculum vitae", "references": "Three academic references"},
        "source": "https://www.cs.stonybrook.edu/admissions/Graduate-Admissions"
      },
      {
        "title": "Doctor of Medicine (M.D.) - Renaissance School of Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Renaissance School Merit and Need-Based Scholarships up to full tuition",
        "fee": "$100 (via AMCAS)",
        "tuition": "$45,670/year in-state, $68,990/year out-of-state",
        "desc": "LCME-accredited medical doctorate renowned for translational biomedical research, clinical training at Stony Brook University Hospital, and early clinical immersion pathways.",
        "requirements": {"gpa": "Competitive undergraduate science GPA (average 3.8) and MCAT score (average 516)", "ielts": "TOEFL not required for AMCAS", "gre": "MCAT required", "papers": "AMCAS personal statement and Stony Brook secondary essays", "references": "Pre-health committee letter or three faculty recommendations"},
        "source": "https://renaissance.stonybrookmedicine.edu/admissions"
      },
      {
        "title": "Ph.D. in Materials Science and Chemical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate assistantships providing full tuition waiver and $30,000+ stipend",
        "fee": "$100",
        "tuition": "Covered by assistantships",
        "desc": "Cutting-edge doctoral research utilizing Brookhaven National Lab's National Synchrotron Light Source II (NSLS-II) for energy storage batteries, polymer nanocomposites, and catalytic membranes.",
        "requirements": {"gpa": "Degree in chemical engineering, materials science, or chemistry with 3.3+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three academic recommendations"},
        "source": "https://www.stonybrook.edu/matsci/graduate/"
      },
      {
        "title": "Ph.D. in Marine and Atmospheric Sciences (SoMAS)",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "SoMAS Research Assistantships providing full tuition waiver and $31,000 annual stipend",
        "fee": "$100",
        "tuition": "Covered by assistantships",
        "desc": "World-class doctoral program in oceanography, atmospheric chemistry, climate modeling, and coastal fisheries utilizing Stony Brook's marine research fleet and supercomputing clusters.",
        "requirements": {"gpa": "BS or MS in atmospheric sciences, oceanography, physics, or biology with 3.3+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE scores accepted", "papers": "Research statement and CV", "references": "Three letters of recommendation"},
        "source": "https://www.somas.stonybrook.edu/academics/graduate/"
      },
      {
        "title": "Brookhaven National Laboratory & Simons Quantum Physics Fellowship",
        "type": "Fellowship",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "$8,000 summer research stipend and direct access to BNL particle accelerators and quantum computing testbeds",
        "fee": "$0",
        "tuition": "Funded jointly by Stony Brook University and Brookhaven National Laboratory",
        "desc": "Prestigious research fellowship for graduate scholars conducting fundamental quantum computing algorithms, relativistic heavy-ion collider data analytics, and ultrafast laser spectroscopy at BNL.",
        "requirements": {"gpa": "Enrolled doctoral student in physics, computer science, or engineering with 3.5+ GPA", "ielts": "TOEFL 90+", "gre": "Exempt", "papers": "Quantum research project proposal", "references": "Two faculty advisor letters"},
        "source": "https://www.stonybrook.edu/commcms/simons/research/fellowships.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Richard L. McCormick",
        "role": "Interim President & Historian",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. McCormick serves as Interim President of Stony Brook University, a distinguished American political historian and former President of Rutgers University and the University of Washington."
      },
      {
        "name": "Dr. Alexander Zamolodchikov",
        "role": "Simons Center Chair & Distinguished Professor of Physics",
        "department": "Simons Center for Geometry and Physics & Department of Physics and Astronomy",
        "subject": "physics",
        "bio": "Dr. Zamolodchikov is an internationally renowned theoretical physicist celebrated for pioneering conformal field theory, integrable quantum field theories, and 2D quantum gravity models."
      },
      {
        "name": "Dr. Arie Kaufman",
        "role": "Distinguished Professor of Computer Science",
        "department": "Department of Computer Science & CEWIT",
        "subject": "computer-science",
        "bio": "Dr. Kaufman is an IEEE Fellow and National Academy of Inventors Fellow known globally for inventing 3D virtual colonoscopy, volume visualization algorithms, and immersive virtual reality environments."
      }
    ]
  },

  # 6. Strayer University (Row 975)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Strayer University",
    "shortName": "Strayer University",
    "slug": "strayer-university-wilmington",
    "location": "Wilmington, Delaware, United States",
    "website": "https://www.strayer.edu",
    "sourceRow": 975,
    "stats": {"established": "1892", "students": "48,000+", "international": "4%", "faculty": "1,800+"},
    "heroSummary": "Strayer University is an accredited private university founded in 1892 in Baltimore and Washington, D.C., operating campus locations across the eastern United States—including its prominent Wilmington, Delaware campus—alongside an extensive online learning platform. Strayer specializes in career-aligned bachelor's and master's degrees in business administration, information technology, cybersecurity, healthcare administration, and criminal justice designed for working adult learners.",
    "academicOverview": "Strayer University is accredited by the Middle States Commission on Higher Education (MSCHE) and its business programs are accredited by ACBSP. It offers innovative learning options such as the Jack Welch Management Institute (JWMI) Executive MBA and the Strayer 'Graduation Fund' which provides tuition-free classes as milestones are achieved.",
    "researchAdmissions": "Strayer University operates an open and flexible admissions policy for high school graduates and adult learners. Graduate applicants must possess an accredited baccalaureate degree with a minimum 2.50 GPA, submit official transcripts, and complete an entrance consultation without requiring standardized GMAT or GRE exams.",
    "opps": [
      {
        "title": "Master of Business Administration (MBA) - Digital Entrepreneurship",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Strayer Graduation Fund (earn a tuition-free course for every 3 passed) and corporate partner tuition discounts up to 20%",
        "fee": "$0",
        "tuition": "$1,680/course ($18,480 total program tuition)",
        "desc": "ACBSP-accredited online and campus MBA covering strategic venture funding, digital marketing analytics, leadership communications, and operational scalability.",
        "requirements": {"gpa": "Accredited bachelor's degree with 2.5+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GMAT/GRE not required", "papers": "General application form", "references": "Not required"},
        "source": "https://www.strayer.edu/online-degrees/masters/business-administration"
      },
      {
        "title": "Master of Science in Information Systems - Cloud Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-31",
        "deadlineText": "March 31, 2027",
        "funding": "STEM Workforce Advancement Grants and employer tuition assistance",
        "fee": "$0",
        "tuition": "$1,680/course",
        "desc": "Applied graduate degree developing expertise in cloud architecture (AWS/Azure), enterprise database systems, threat intelligence, and cybersecurity policy implementation.",
        "requirements": {"gpa": "Bachelor's degree in IT, business, or related field with 2.5+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Application form", "references": "Not required"},
        "source": "https://www.strayer.edu/online-degrees/masters/information-systems"
      },
      {
        "title": "Bachelor of Science in Accounting",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Strayer Academic Achievement Grants up to $3,000",
        "fee": "$0",
        "tuition": "$1,525/course",
        "desc": "Comprehensive accounting curriculum preparing students for the CPA exam through coursework in taxation, forensic auditing, corporate financial reporting, and cost management.",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "TOEFL 70+", "gre": "Exempt", "papers": "Standard application", "references": "Not required"},
        "source": "https://www.strayer.edu/online-degrees/bachelors/accounting"
      },
      {
        "title": "Master of Health Services Administration (MHSA)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Healthcare Leadership Tuition Grants",
        "fee": "$0",
        "tuition": "$1,680/course",
        "desc": "Professional graduate curriculum examining healthcare financial management, epidemiological health planning, healthcare law and ethics, and hospital organizational governance.",
        "requirements": {"gpa": "Bachelor's degree with 2.5+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Career statement in healthcare", "references": "Not required"},
        "source": "https://www.strayer.edu/online-degrees/masters/health-services-administration"
      },
      {
        "title": "Bachelor of Science in Criminal Justice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "First Responder and Public Service Tuition Scholarships",
        "fee": "$0",
        "tuition": "$1,525/course",
        "desc": "Career-oriented program exploring criminal law, corrections administration, juvenile justice systems, forensic evidence management, and community policing.",
        "requirements": {"gpa": "High school diploma or GED", "ielts": "TOEFL 70+", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.strayer.edu/online-degrees/bachelors/criminal-justice"
      },
      {
        "title": "Mid-Atlantic Corporate Workforce & Fintech Innovation Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "$3,000 project completion stipend and corporate mentorship pairing",
        "fee": "$0",
        "tuition": "Provided through Strayer University Center for Workforce Innovation",
        "desc": "Applied student fellowship evaluating credit card banking analytics, consumer financial privacy, and artificial intelligence customer verification tools in Delaware's financial hub.",
        "requirements": {"gpa": "Enrolled graduate student in business or IT with 3.2+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Fintech project proposal", "references": "One faculty recommendation"},
        "source": "https://www.strayer.edu/about/student-success"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Antoinette Farmer-Thompson",
        "role": "Provost & Chief Academic Officer",
        "department": "Office of the Provost",
        "subject": "social-sciences",
        "bio": "Dr. Farmer-Thompson leads academic operations across Strayer University, researching adult learning methodologies, AI-integrated digital courseware, and socio-economic workforce mobility."
      },
      {
        "name": "Dr. Joe Rogers",
        "role": "Dean & Professor of the School of Business",
        "department": "School of Business",
        "subject": "social-sciences",
        "bio": "Dr. Rogers oversees ACBSP-accredited business curriculum development, specializing in strategic leadership, corporate ethics, and competency-based business pedagogy."
      },
      {
        "name": "Dr. Nicole Jackson",
        "role": "Associate Dean of Information Technology",
        "department": "School of Information Technology",
        "subject": "computer-science",
        "bio": "Dr. Jackson conducts research on cloud security infrastructures, cybersecurity workforce certifications, and curriculum design for adult online learners in computing."
      }
    ]
  },

  # 7. Suffolk University (Row 976)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Suffolk University",
    "shortName": "Suffolk University",
    "slug": "suffolk-university-boston",
    "location": "Boston, Massachusetts, United States",
    "website": "https://www.suffolk.edu",
    "sourceRow": 976,
    "stats": {"established": "1906", "students": "6,700+", "international": "15%", "faculty": "490+"},
    "heroSummary": "Suffolk University is a comprehensive private university located in the heart of downtown Boston on Beacon Hill, directly adjacent to the Massachusetts State House, the Supreme Judicial Court, and Boston's financial district. Renowned for its nationally top-ranked Suffolk University Law School (a pioneer in Legal Technology and Intellectual Property), the AACSB-accredited Sawyer Business School, and the College of Arts & Sciences.",
    "academicOverview": "Suffolk's urban campus integrates students directly into Boston's political, legal, and financial institutions. Highlights include the modern 20 Somerset academic building, the Moakley Law Library, the Legal Innovation & Technology (LIT) Lab, and healthcare simulation suites in downtown Boston.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA (average 3.4), personal statements, and extracurricular involvement on a test-optional basis. Graduate admissions require an accredited bachelor's degree with a 3.0+ minimum GPA, official transcripts, resume, statement of purpose, and two academic/professional recommendations.",
    "opps": [
      {
        "title": "Juris Doctor (J.D.) - Legal Technology & Intellectual Property",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Dean's Law Merit Scholarships covering up to 100% of law tuition and LIT Lab Fellowships",
        "fee": "$0 (via LSAC)",
        "tuition": "$55,980/year",
        "desc": "Nationally recognized law degree rated #1 for legal technology by National Jurist, offering specialized training in algorithmic legal tools, patent prosecution, biomedical IP, and clinical litigation.",
        "requirements": {"gpa": "Accredited bachelor's degree with competitive undergraduate GPA and LSAT/GRE score", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "LSAT or GRE scores accepted", "papers": "Personal statement and legal resume", "references": "Two letters of recommendation"},
        "source": "https://www.suffolk.edu/law/academics-clinics/juris-doctor"
      },
      {
        "title": "Master of Science in Business Analytics (Sawyer Business School)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Sawyer Business School Merit Fellowships up to $18,000",
        "fee": "$50",
        "tuition": "$1,540/credit hour",
        "desc": "STEM-designated graduate analytics program mastering Python, SQL, Tableau, machine learning, predictive modeling, and supply chain analytics in downtown Boston.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA in business, economics, STEM, or quantitative field", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE waived for GPA > 3.0", "papers": "Statement of purpose", "references": "Two recommendations"},
        "source": "https://www.suffolk.edu/academics/programs/business-analytics-msba"
      },
      {
        "title": "Master of Science in Finance & FinTech",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Financial Services Corporate Scholarships up to $10,000",
        "fee": "$50",
        "tuition": "$1,540/credit hour",
        "desc": "STEM-designated finance master's exploring blockchain technology, algorithmic trading strategies, risk management, and quantitative asset pricing.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE optional", "papers": "Statement of financial career objectives", "references": "Two professional letters"},
        "source": "https://www.suffolk.edu/academics/programs/finance-msf"
      },
      {
        "title": "Master of Science in Mental Health Counseling",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Departmental counseling traineeships and urban mental health stipends",
        "fee": "$50",
        "tuition": "$1,120/credit hour",
        "desc": "60-credit clinical graduate degree preparing licensed mental health counselors (LMHC) through 700+ hours of supervised clinical internships across Boston hospitals and counseling clinics.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA in psychology or behavioral sciences", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Exempt", "papers": "Clinical counseling essay and personal interview", "references": "Three letters of recommendation"},
        "source": "https://www.suffolk.edu/academics/programs/mental-health-counseling-ms"
      },
      {
        "title": "Bachelor of Science in Radiation Therapy",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "physics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Suffolk Honors Scholarships up to $22,000/year and clinical hospital stipends",
        "fee": "$0",
        "tuition": "$44,780/year",
        "desc": "JRCERT-accredited curriculum offering clinical oncology training at Massachusetts General Hospital, Brigham and Women's Hospital, and Dana-Farber Cancer Institute.",
        "requirements": {"gpa": "High school GPA 3.2+ with physics, chemistry, and precalculus", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Common Application essay", "references": "Two teacher recommendations"},
        "source": "https://www.suffolk.edu/academics/programs/radiation-therapy"
      },
      {
        "title": "Beacon Hill Legal Innovation & Public Policy Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$5,000 summer legal research stipend and Massachusetts State House legislative placement",
        "fee": "$0",
        "tuition": "Endowed by the Suffolk University Legal Innovation & Technology Lab",
        "desc": "Interdisciplinary fellowship developing automated legal aid docassembly tools, consumer privacy statutes, and artificial intelligence ethics legislation in Massachusetts.",
        "requirements": {"gpa": "Enrolled law student or graduate public policy student with 3.2+ GPA", "ielts": "TOEFL 90+", "gre": "Exempt", "papers": "Legal tech or public policy proposal", "references": "One law faculty endorsement"},
        "source": "https://www.suffolk.edu/law/academics-clinics/clinics-experiential-opportunities/legal-innovation-tech-lab"
      }
    ],
    "researchers": [
      {
        "name": "Marisa J. Kelly",
        "role": "President & Political Scientist",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Marisa J. Kelly is the 11th President of Suffolk University, a political scientist with extensive leadership experience expanding urban experiential learning and institutional diversity."
      },
      {
        "name": "Andrew Perlman",
        "role": "Dean & Professor of Law",
        "department": "Suffolk University Law School",
        "subject": "social-sciences",
        "bio": "Dean Perlman is a nationally acclaimed legal ethics and technology pioneer who served as vice chair of the ABA Commission on the Future of Legal Services."
      },
      {
        "name": "Dr. Amy Zeng",
        "role": "Dean & Professor of Operations and Supply Chain Management",
        "department": "Sawyer Business School",
        "subject": "social-sciences",
        "bio": "Dr. Zeng leads the Sawyer Business School, conducting research on global supply chain design, reverse logistics, supply chain risk management, and international business analytics."
      }
    ]
  },

  # 8. Syracuse University (Row 977)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Syracuse University",
    "shortName": "Syracuse University",
    "slug": "syracuse-university",
    "location": "Syracuse, New York, United States",
    "website": "https://www.syracuse.edu",
    "sourceRow": 977,
    "stats": {"established": "1870", "students": "22,500+", "international": "16%", "faculty": "1,850+"},
    "heroSummary": "Syracuse University is an internationally renowned private R1 research university located in Syracuse, New York. Acclaimed worldwide for the S.I. Newhouse School of Public Communications (the nation's foremost media school) and the Maxwell School of Citizenship and Public Affairs (consistently ranked the #1 public affairs school in America), Syracuse is also globally prominent in gravitational wave astrophysics (LIGO contributor), veterans education, architecture, and computer engineering.",
    "academicOverview": "Syracuse comprises 13 schools and colleges, including Newhouse, Maxwell, the College of Engineering and Computer Science, the School of Architecture, the College of Law, and the Falk College of Sport and Human Dynamics. The university operates modern cleanrooms, the Syracuse Biomaterials Institute, and supercomputing clusters for astrophysics.",
    "researchAdmissions": "Undergraduate admissions evaluate high school academic rigor (average GPA 3.7), personal essays, and extracurricular leadership on a test-optional basis. Graduate admissions require an accredited bachelor's degree with a 3.0+ minimum GPA (3.5+ for competitive doctoral fellowships), GRE scores (program-specific), detailed research statement of purpose, and three academic letters of recommendation.",
    "opps": [
      {
        "title": "Master of Arts in Public Diplomacy and Global Communications (Newhouse & Maxwell)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Newhouse and Maxwell Merit Scholarships covering partial to full tuition ($20,000 - $40,000)",
        "fee": "$75",
        "tuition": "$1,910/credit hour",
        "desc": "Joint professional master's degree from Newhouse and Maxwell preparing diplomats, international broadcasters, and global NGO strategists through integrated public policy and international communications coursework.",
        "requirements": {"gpa": "Accredited bachelor's degree with 3.3+ GPA in social sciences, journalism, or humanities", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "GRE optional", "papers": "Statement of purpose in international public diplomacy", "references": "Three letters of academic/professional recommendation"},
        "source": "https://newhouse.syracuse.edu/academics/public-diplomacy-and-global-communications/"
      },
      {
        "title": "Ph.D. in Computer and Information Science - Autonomous AI & Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Graduate research assistantships providing 100% tuition remission and $32,000 annual living stipends",
        "fee": "$75",
        "tuition": "Covered 100% by doctoral assistantships",
        "desc": "Carnegie R1 doctoral program investigating safe autonomous robotics, deep neural network formal verification, distributed cyber systems, and cyber-physical security.",
        "requirements": {"gpa": "Bachelor's or master's in CS, CE, or math with 3.5+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE scores required", "papers": "Research statement of purpose and CV", "references": "Three letters of academic recommendation"},
        "source": "https://engineering-computer-science.syracuse.edu/academics/programs/computer-information-science-phd/"
      },
      {
        "title": "Ph.D. in Physics - Gravitational Wave Astrophysics & Quantum Biophysics",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "NSF and departmental research assistantships with full tuition waiver and $31,500 annual stipend",
        "fee": "$75",
        "tuition": "Covered by assistantships",
        "desc": "Elite doctoral program renowned for leading roles in the LIGO Scientific Collaboration, detecting gravitational waves from merging binary black holes, and biological soft matter physics.",
        "requirements": {"gpa": "BS or MS in physics or related field with 3.3+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Physics GRE recommended", "papers": "Statement of physics research interests", "references": "Three letters from research physicists"},
        "source": "https://artsandsciences.syracuse.edu/physics/graduate/"
      },
      {
        "title": "Master of Public Administration (M.P.A.) - Maxwell School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Maxwell Graduate Fellowships and Robertson Foundation Government Fellowships covering full tuition",
        "fee": "$75",
        "tuition": "$1,910/credit hour",
        "desc": "Consistently ranked the #1 MPA program in the United States by U.S. News, preparing leaders in public policy, public budgeting, nonprofit governance, and international development.",
        "requirements": {"gpa": "Bachelor's degree with 3.2+ GPA from an accredited institution", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "GRE optional", "papers": "Public service career essay", "references": "Three letters of recommendation"},
        "source": "https://www.maxwell.syr.edu/academics/programs/master-of-public-administration"
      },
      {
        "title": "Ph.D. in Mechanical and Aerospace Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental research assistantships with full tuition remission and $32,000 stipend",
        "fee": "$75",
        "tuition": "Covered by assistantships",
        "desc": "Doctoral research degree focusing on autonomous flight controls, hypersonics, turbomachinery aerodynamics, and multiscale computational fluid mechanics.",
        "requirements": {"gpa": "Degree in aerospace, mechanical, or civil engineering with 3.3+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE scores required", "papers": "Statement of purpose and technical CV", "references": "Three academic recommendations"},
        "source": "https://engineering-computer-science.syracuse.edu/academics/programs/mechanical-aerospace-engineering-phd/"
      },
      {
        "title": "LIGO Gravitational Wave & Syracuse Quantum Technologies Fellowship",
        "type": "Fellowship",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "$7,500 summer research stipend, cleanroom access, and LIGO interferometer collaboration travel",
        "fee": "$0",
        "tuition": "Funded through Syracuse Gravitational Wave Astronomy Group Endowment",
        "desc": "Graduate and upper-division research fellowship working directly on optical coatings, thermal noise reduction, and cryogenic silicon suspensions for Next-Generation Gravitational Wave Detectors (Cosmic Explorer).",
        "requirements": {"gpa": "Enrolled graduate or upper-division student in physics, engineering, or optics with 3.4+ GPA", "ielts": "TOEFL 90+", "gre": "Exempt", "papers": "Gravitational wave research proposal", "references": "Two physics faculty letters"},
        "source": "https://gw-astronomy.syr.edu/research/fellowships/"
      }
    ],
    "researchers": [
      {
        "name": "Kent Syverud",
        "role": "Chancellor and President & Professor of Law",
        "department": "Office of the Chancellor",
        "subject": "social-sciences",
        "bio": "Kent Syverud serves as the 12th Chancellor and President of Syracuse University, an eminent legal scholar and former dean of Vanderbilt Law School and Washington University School of Law."
      },
      {
        "name": "Dr. David M. Van Slyke",
        "role": "Dean & Louis A. Bantle Chair in Business and Government Policy",
        "department": "Maxwell School of Citizenship and Public Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Van Slyke leads the Maxwell School, a prominent scholar on public-private partnerships, government contracting, executive leadership, and strategic public management."
      },
      {
        "name": "Dr. Stefan W. Ballmer",
        "role": "Professor of Physics & LIGO Instrument Scientist",
        "department": "Department of Physics & Syracuse Gravitational Wave Group",
        "subject": "physics",
        "bio": "Dr. Ballmer is an internationally recognized physicist who contributed to the historic Nobel Prize-winning detection of gravitational waves, designing optical sensors and quantum readouts for Advanced LIGO."
      }
    ]
  }
]
