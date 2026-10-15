# scripts/make_b65_p1_chunk1.py
# Batch 65 Part 1 Chunk 1: Universities 1 to 8

chunk1 = [
  # 1. Sewanee | The University of the South (Row 938)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Sewanee | The University of the South",
    "shortName": "Sewanee",
    "slug": "sewanee-the-university-of-the-south",
    "location": "Sewanee, Tennessee, United States",
    "website": "https://new.sewanee.edu",
    "sourceRow": 938,
    "stats": {"established": "1857", "students": "1,800+", "international": "4%", "faculty": "190+"},
    "heroSummary": "The University of the South, commonly known as Sewanee, is a prestigious private Episcopal liberal arts university situated on a breathtaking 13,000-acre mountaintop campus called 'The Domain' on the Cumberland Plateau in Sewanee, Tennessee. Known for its historic School of Theology, the Sewanee Review, and exceptional forestry and natural resources research.",
    "academicOverview": "Sewanee encompasses the College of Arts and Sciences and the School of Theology. The sprawling 13,000-acre Domain serves as an expansive living laboratory for environmental biology, forestry, hydrology, and cave biodiversity. Its historic collegiate gothic architecture, academic gown tradition, and world-class faculty provide an immersive liberal arts experience.",
    "researchAdmissions": "Undergraduate admissions are holistic and test-optional, evaluating high school academic rigor, writing essays, leadership, and community service. Graduate theological admissions require official academic transcripts, theological essays, personal recommendations from diocese leadership or clergy, and interviews.",
    "opps": [
      {
        "title": "Master of Divinity (M.Div.) - School of Theology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Generous School of Theology need- and merit-based grants covering up to 100% of tuition and housing stipends",
        "fee": "$50",
        "tuition": "$21,400/year (often fully subsidized)",
        "desc": "Three-year theological degree preparing ordained and lay leaders through rigorous biblical studies, historical theology, liturgy, homiletics, and parish internships across the Episcopal Church.",
        "requirements": {"gpa": "Accredited bachelor's degree with 3.0+ GPA", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Exempt", "papers": "Spiritual autobiography and vocational discernment statement", "references": "Three letters of recommendation including sponsoring bishop or rector"},
        "source": "https://theology.sewanee.edu/academics/master-of-divinity"
      },
      {
        "title": "Master of Fine Arts in Creative Writing (School of Letters)",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of Letters partial tuition merit awards and Sewanee Writers' Conference fellowships",
        "fee": "$45",
        "tuition": "$7,800/summer term",
        "desc": "Intensive summer-residency graduate writing program offering concentrations in fiction, poetry, and creative nonfiction, connected to the editorial legacy of the historic Sewanee Review.",
        "requirements": {"gpa": "Accredited bachelor's degree", "ielts": "TOEFL 85+ or IELTS 7.0", "gre": "Exempt", "papers": "Writing sample (20 pages fiction/prose or 10 poems) and critical essay", "references": "Two faculty or publishing recommendations"},
        "source": "https://letters.sewanee.edu"
      },
      {
        "title": "Bachelor of Science in Forestry and Natural Resources",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Sewanee Merit Scholarships up to $25,000/year and Domain Student Field Fellowships",
        "fee": "$0 (via Common App)",
        "tuition": "$54,200/year",
        "desc": "SAF-accredited undergraduate forestry degree utilizing Sewanee's 13,000-acre continuous forest Domain for silviculture, forest ecology, timber management, and watershed conservation research.",
        "requirements": {"gpa": "Rigorous high school college-preparatory coursework with strong biology and chemistry grades", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Common App personal essay", "references": "Two high school teacher recommendations"},
        "source": "https://new.sewanee.edu/academics/forestry-geology"
      },
      {
        "title": "Bachelor of Science in Computer Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Benedict and Vice-Chancellor's Merit Scholarships covering partial to full tuition",
        "fee": "$0",
        "tuition": "$54,200/year",
        "desc": "Rigorous undergraduate computing curriculum emphasizing algorithm analysis, systems architecture, distributed computing, and artificial intelligence within an intimate liberal arts setting.",
        "requirements": {"gpa": "Strong high school math and science foundations", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application personal essay", "references": "Secondary school counselor report and teacher evaluation"},
        "source": "https://new.sewanee.edu/academics/computer-science"
      },
      {
        "title": "Master of Arts in Theology (M.A.)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Theological Graduate Scholar Awards providing up to 50% tuition remission",
        "fee": "$50",
        "tuition": "$21,400/year",
        "desc": "Two-year academic graduate degree designed for scholars pursuing theological research, church leadership, religious education, or preparation for doctoral studies in religion.",
        "requirements": {"gpa": "Bachelor's degree with 3.2+ GPA in humanities, religion, or philosophy", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Not required", "papers": "Academic theological research essay and statement of purpose", "references": "Three letters of academic recommendation"},
        "source": "https://theology.sewanee.edu/academics/master-of-arts"
      },
      {
        "title": "Sewanee Domain Ecology and Watershed Field Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$4,500 summer stipend, on-campus Domain housing, and field equipment grant",
        "fee": "$0",
        "tuition": "Covered by the Office of Environmental Stewardship & Sustainability",
        "desc": "Summer undergraduate research fellowship conducting empirical fieldwork on forest canopy carbon sequestration, subterranean karst aquifers, and endangered amphibian habitat monitoring across the Domain.",
        "requirements": {"gpa": "Enrolled undergraduate in environmental science, forestry, geology, or biology", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Field research project proposal", "references": "Two science faculty recommendations"},
        "source": "https://new.sewanee.edu/offices-and-services/environmental-stewardship-sustainability/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Robert W. Pearigen",
        "role": "Vice-Chancellor and President & Professor of Politics",
        "department": "Office of the Vice-Chancellor & Department of Politics",
        "subject": "social-sciences",
        "bio": "Dr. Pearigen serves as Vice-Chancellor and President of the University of the South, researching American constitutional law, jurisprudence, and liberal arts pedagogical leadership."
      },
      {
        "name": "The Very Rev. Dr. James F. Turrell",
        "role": "Dean of the School of Theology & Professor of Liturgics",
        "department": "School of Theology",
        "subject": "social-sciences",
        "bio": "Dean Turrell is a distinguished ecclesiastical historian and liturgical scholar specializing in English Reformation prayer books, ritual evolution, and Anglican sacramental theology."
      },
      {
        "name": "Dr. Deborah McGrath",
        "role": "Carl Biehl Professor of International Studies & Professor of Biology",
        "department": "Department of Biology & Environmental Studies",
        "subject": "environment",
        "bio": "Dr. McGrath investigates forest ecosystem ecology, agroforestry carbon offsets, soil biogeochemistry, and payment-for-ecosystem-services models across the Cumberland Plateau and Latin America."
      }
    ]
  },

  # 2. Sheridan College (Row 939)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Sheridan College",
    "shortName": "Sheridan College",
    "slug": "sheridan-college-wyoming",
    "location": "Sheridan, Wyoming, United States",
    "website": "https://www.sheridan.edu",
    "sourceRow": 939,
    "stats": {"established": "1948", "students": "2,400+", "international": "2%", "faculty": "130+"},
    "heroSummary": "Sheridan College is a comprehensive public community college nestled at the base of the Bighorn Mountains in Sheridan, Wyoming. As part of the Northern Wyoming Community College District (NWCCD), it offers career-ready technical degrees, healthcare credentials, precision agriculture, and seamless university transfer pathways.",
    "academicOverview": "Sheridan College features modern facilities including the Whitney Academic Center, the Mars Agriculture Center, the Thorne-Rider Campus, and advanced machining workshops. It serves as an economic and technical catalyst for northern Wyoming, offering specialized training in nursing, diesel mechanics, welding, cyber defense, and equine science.",
    "researchAdmissions": "Sheridan College maintains an open-door admissions policy for secondary school graduates and GED recipients. Selective programs in nursing, dental hygiene, and industrial trades have competitive prerequisites, clinical background evaluations, and program-specific application deadlines.",
    "opps": [
      {
        "title": "Associate of Science in Nursing (ADN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Wyoming Hathaway Scholarship and Sheridan Memorial Hospital nursing tuition grants",
        "fee": "$0",
        "tuition": "$4,650/year in-state, $11,500/year out-of-state",
        "desc": "ACEN-accredited two-year registered nursing program providing clinical simulation in high-fidelity labs and direct acute care practicums at Sheridan Memorial Hospital and VA medical facilities.",
        "requirements": {"gpa": "2.7+ prerequisite GPA in anatomy, physiology, and microbiology", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Nursing application essay and TEAS exam score", "references": "Two professional or academic references"},
        "source": "https://www.sheridan.edu/academics/nursing"
      },
      {
        "title": "Associate of Applied Science in Welding Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Whitney Career & Technical Education Workforce Grants up to $3,500",
        "fee": "$0",
        "tuition": "$5,100/year in-state, $12,200/year out-of-state",
        "desc": "AWS-certified technical degree mastering SMAW, GTAW, GMAW, pipe fabrication, robotic welding, and non-destructive examination for aerospace, industrial, and mining equipment manufacturing.",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "TOEFL 65+ or IELTS 5.5", "gre": "Exempt", "papers": "General application form", "references": "Not required"},
        "source": "https://www.sheridan.edu/academics/welding-technology"
      },
      {
        "title": "Associate of Science in Agriculture and Equine Science",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Bighorn Mountain Agribusiness Scholar Awards up to $2,500/year",
        "fee": "$0",
        "tuition": "$4,650/year in-state, $11,500/year out-of-state",
        "desc": "Hands-on associate degree combining equine biomechanics, reproductive physiology, ranch management, and precision agronomy based at the Mars Agriculture Center.",
        "requirements": {"gpa": "High school diploma with foundational biology coursework", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of agricultural career intent", "references": "One agricultural educator or industry recommendation"},
        "source": "https://www.sheridan.edu/academics/agriculture"
      },
      {
        "title": "Associate of Science in Computer Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "STEM Transfer Scholarships and Wyoming Works Program grants",
        "fee": "$0",
        "tuition": "$4,650/year in-state, $11,500/year out-of-state",
        "desc": "Transfer-oriented curriculum covering data structures, object-oriented programming in C++ and Python, database design, and discrete mathematics for university baccalaureate entry.",
        "requirements": {"gpa": "High school diploma with placement in College Algebra or Precalculus", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Standard application", "references": "Not required"},
        "source": "https://www.sheridan.edu/academics/computer-science"
      },
      {
        "title": "Associate of Applied Science in Diesel Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Komatsu and Caterpillar regional workforce development stipends",
        "fee": "$0",
        "tuition": "$5,200/year in-state, $12,400/year out-of-state",
        "desc": "Comprehensive training on heavy industrial equipment, electronic diesel engine controls, hydraulic systems, power trains, and diagnostic software used in mining and transportation.",
        "requirements": {"gpa": "High school diploma or equivalent, mechanical aptitude assessment", "ielts": "TOEFL 65+ or IELTS 5.5", "gre": "Exempt", "papers": "Application form", "references": "Not required"},
        "source": "https://www.sheridan.edu/academics/diesel-technology"
      },
      {
        "title": "Whitney Center Precision Fabrication & Mining Technology Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "$3,000 project stipend and industrial tooling grant",
        "fee": "$0",
        "tuition": "Supported by the Whitney Center for Applied Technology",
        "desc": "Student workforce fellowship partnering with Powder River Basin mining and manufacturing industries to develop automated precision machining and heavy component fabrication solutions.",
        "requirements": {"gpa": "Enrolled in welding, diesel, or manufacturing technology with 3.0+ GPA", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Technical project proposal", "references": "One technical faculty endorsement"},
        "source": "https://www.sheridan.edu/community/foundation/scholarships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Walter Tribley",
        "role": "President, Northern Wyoming Community College District",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Tribley leads Sheridan College and Gillette College across NWCCD, specializing in community college governance, rural higher education access, and STEM workforce training partnerships."
      },
      {
        "name": "Prof. Cindy Bautz",
        "role": "Director of Nursing Education",
        "department": "Nursing and Health Sciences Division",
        "subject": "biology",
        "bio": "Prof. Bautz coordinates clinical curriculum, rural hospital preceptorships, and patient simulation methodologies for the Associate of Science in Nursing program at Sheridan College."
      },
      {
        "name": "Prof. Jed Jensen",
        "role": "Chair & Instructor of Agriculture & Equine Studies",
        "department": "Agriculture Division",
        "subject": "biology",
        "bio": "Prof. Jensen oversees equine genetics, rangeland grazing management, and animal reproductive technologies at the Mars Agriculture Center in northern Wyoming."
      }
    ]
  },

  # 3. Sinte Gleska University (Row 940)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Sinte Gleska University",
    "shortName": "Sinte Gleska",
    "slug": "sinte-gleska-university-mission",
    "location": "Mission, South Dakota, United States",
    "website": "https://www.sintegleska.edu",
    "sourceRow": 940,
    "stats": {"established": "1970", "students": "900+", "international": "1%", "faculty": "65+"},
    "heroSummary": "Sinte Gleska University (SGU) is a tribally chartered institution of higher education established by the Rosebud Sioux Tribe (Sicangu Lakota Oyate) in Mission, South Dakota. As a pioneering Tribal College and University (TCU), it was the first to offer accredited four-year baccalaureate and master's degrees founded on Lakota culture, philosophy, and tribal sovereignty.",
    "academicOverview": "SGU provides culturally grounded higher education spanning education, arts and sciences, tribal management, environmental science, and human services. Its curriculum integrates traditional Lakota epistemologies (Wolakota) with accredited academic standards, featuring the Lakota Studies Department and the Sicangu Heritage Center.",
    "researchAdmissions": "Sinte Gleska University maintains an open admissions policy welcoming enrolled tribal citizens and non-tribal students. Graduate programs require an accredited bachelor's degree, official transcripts, letters of intent demonstrating dedication to tribal communities, and letters of recommendation.",
    "opps": [
      {
        "title": "Master of Education in Curriculum & Instruction - Lakota Language Focus",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "American Indian College Fund Full Circle Scholarships and BIE Graduate Fellowships",
        "fee": "$25",
        "tuition": "$5,400/year",
        "desc": "Graduate degree empowering educators to design culturally responsive curricula, pedagogical materials, and immersion instruction for Lakota language revitalization in reservation and public schools.",
        "requirements": {"gpa": "Bachelor's degree in education or related field with 2.75+ GPA", "ielts": "Exempt for native speakers or TOEFL 75+", "gre": "Exempt", "papers": "Personal statement on Lakota education philosophy", "references": "Three professional/community references"},
        "source": "https://www.sintegleska.edu/academics/education"
      },
      {
        "title": "Bachelor of Science in Environmental Science & Indigenous Land Stewardship",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Tribal Land Grant Endowment Scholarships and USDA NIFA Tribal Fellowships",
        "fee": "$20",
        "tuition": "$4,200/year",
        "desc": "Four-year degree merging traditional ecological knowledge (TEK) with GIS mapping, prairie restoration ecology, tribal water resource management, and wildlife biology on the Rosebud Indian Reservation.",
        "requirements": {"gpa": "High school diploma or GED", "ielts": "TOEFL 70+ if applicable", "gre": "Exempt", "papers": "Application essay on environmental commitment", "references": "Two recommendations"},
        "source": "https://www.sintegleska.edu/academics/environmental-science"
      },
      {
        "title": "Bachelor of Science in Business Administration - Tribal Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Rosebud Sioux Higher Education Grants and American Indian College Fund awards",
        "fee": "$20",
        "tuition": "$4,200/year",
        "desc": "Program preparing ethical leaders in tribal enterprise governance, federal Indian law, grant administration, non-profit finance, and community economic development.",
        "requirements": {"gpa": "High school diploma or associate degree", "ielts": "TOEFL 70+ if applicable", "gre": "Exempt", "papers": "Statement of career objectives in tribal administration", "references": "Two references"},
        "source": "https://www.sintegleska.edu/academics/business"
      },
      {
        "title": "Bachelor of Arts in Lakota Studies",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Heritage Cultural Preservation Waivers and Tribal Tuition Assistance",
        "fee": "$20",
        "tuition": "$4,200/year",
        "desc": "Comprehensive degree covering Lakota linguistics, oral literature, tribal history, cosmology, ceremonial protocols, and treaty rights, taught by recognized Lakota knowledge keepers.",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "Exempt or TOEFL 70+", "gre": "Exempt", "papers": "Personal narrative", "references": "One community character reference"},
        "source": "https://www.sintegleska.edu/academics/lakota-studies"
      },
      {
        "title": "Associate of Science in Nursing (LPN to RN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Indian Health Service (IHS) Health Professions Pre-Graduate Scholarships",
        "fee": "$25",
        "tuition": "$4,500/year",
        "desc": "Clinical nursing bridge curriculum preparing healthcare professionals to deliver culturally competent acute and community health care at Rosebud Indian Health Service Hospital and tribal clinics.",
        "requirements": {"gpa": "Active unencumbered LPN license and 2.75+ prerequisite GPA in science courses", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Healthcare commitment essay", "references": "Two clinical supervisory references"},
        "source": "https://www.sintegleska.edu/academics/nursing"
      },
      {
        "title": "Sicangu Lakota Heritage & Tribal Sovereignty Research Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "$4,000 research stipend and tribal archives research stipend",
        "fee": "$0",
        "tuition": "Funded through SGU Indigenous Research Institute",
        "desc": "Undergraduate and community research fellowship documenting oral histories of Sicangu elders, traditional medicine ethnobotany, and historical land treaties on the Great Sioux Reservation.",
        "requirements": {"gpa": "Enrolled student at SGU with interest in tribal history and language", "ielts": "Exempt", "gre": "Exempt", "papers": "Oral history or sovereignty research proposal", "references": "Recommendation from tribal elder or faculty advisor"},
        "source": "https://www.sintegleska.edu/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Sherry Red Owl",
        "role": "Vice President of Academic Affairs & Lakota Scholar",
        "department": "Office of Academic Affairs & Lakota Studies",
        "subject": "social-sciences",
        "bio": "Dr. Red Owl directs academic standards and indigenous curriculum integration at Sinte Gleska University, researching bilingual Lakota immersion methodologies and tribal education sovereignty."
      },
      {
        "name": "Prof. Wayne Frederiksen",
        "role": "Chair & Professor of Education",
        "department": "Department of Education",
        "subject": "social-sciences",
        "bio": "Prof. Frederiksen leads the Master of Education program, investigating culturally congruent pedagogical models and teacher retention strategies in reservation school districts."
      },
      {
        "name": "Prof. Cheryl Medearis",
        "role": "Dean of Instruction & Director of Student Success",
        "department": "Division of Arts and Sciences",
        "subject": "social-sciences",
        "bio": "Prof. Medearis coordinates general education curricula, indigenous youth leadership development, and higher education articulation agreements across tribal and state universities."
      }
    ]
  },

  # 4. Sisseton Wahpeton College (Row 941)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Sisseton Wahpeton College",
    "shortName": "Sisseton Wahpeton",
    "slug": "sisseton-wahpeton-college-agency-village",
    "location": "Agency Village, South Dakota, United States",
    "website": "https://www.swcollege.edu",
    "sourceRow": 941,
    "stats": {"established": "1979", "students": "450+", "international": "1%", "faculty": "35+"},
    "heroSummary": "Sisseton Wahpeton College (SWC) is an accredited tribal college located in Agency Village on the Lake Traverse Reservation of the Sisseton Wahpeton Oyate in northeastern South Dakota. Dedicated to empowering the Dakota community, SWC delivers associate degree programs and vocational certifications rooted in the Dakota language, culture, and communal self-determination.",
    "academicOverview": "SWC provides specialized academic programs in Dakota Studies, Sustainable Food Systems, Behavioral Health, Computer Information Systems, and General Arts and Sciences. The college serves as a regional anchor for cultural preservation, indigenous horticulture, and professional skill enhancement.",
    "researchAdmissions": "SWC practices open enrollment for high school graduates and GED completers. Applications are submitted online or at the Agency Village admissions office, requiring high school transcripts or GED scores, immunization records, and tribal enrollment verification (if applicable).",
    "opps": [
      {
        "title": "Associate of Arts in Dakota Studies & Linguistic Revitalization",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "American Indian College Fund Scholarships and tribal higher education grants",
        "fee": "$15",
        "tuition": "$3,800/year",
        "desc": "Foundational degree immersing students in Dakota vocabulary, oral storytelling, tribal governance history, Dakota philosophy, and archival documentation methodologies.",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "Exempt or TOEFL 65+", "gre": "Exempt", "papers": "Statement of intent to preserve Dakota language", "references": "One community or academic reference"},
        "source": "https://www.swcollege.edu/academics/dakota-studies"
      },
      {
        "title": "Associate of Science in Sustainable Food Systems & Tribal Agriculture",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "USDA Tribal Land-Grant Student Stipends and SWC farm practicum support",
        "fee": "$15",
        "tuition": "$3,800/year",
        "desc": "Hands-on program in indigenous food sovereignty, organic horticultural practices, greenhouse management, and traditional crop seed-saving on the Lake Traverse Reservation.",
        "requirements": {"gpa": "High school diploma or GED", "ielts": "TOEFL 65+ if applicable", "gre": "Exempt", "papers": "Application form", "references": "Not required"},
        "source": "https://www.swcollege.edu/academics/sustainable-food-systems"
      },
      {
        "title": "Associate of Science in Computer Information Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM First Nations Technology Scholarships up to $2,000",
        "fee": "$15",
        "tuition": "$3,800/year",
        "desc": "Practical associate curriculum covering network configuration, cybersecurity basics, hardware maintenance, web application fundamentals, and database administration.",
        "requirements": {"gpa": "High school diploma with introductory algebra competency", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "General application", "references": "Not required"},
        "source": "https://www.swcollege.edu/academics/computer-information-systems"
      },
      {
        "title": "Associate of Arts in Addiction Studies & Behavioral Health Counseling",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Indian Health Service Behavioral Health Education Grants",
        "fee": "$15",
        "tuition": "$3,800/year",
        "desc": "Career-focused curriculum preparing counselors for state chemical dependency credentials, integrating trauma-informed therapy with Dakota healing traditions and sweat lodge protocols.",
        "requirements": {"gpa": "High school diploma or equivalent, background clearance for clinical observations", "ielts": "TOEFL 70+", "gre": "Exempt", "papers": "Counseling career essay", "references": "Two professional references"},
        "source": "https://www.swcollege.edu/academics/addiction-studies"
      },
      {
        "title": "Associate of Science in Business Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Sisseton Wahpeton Oyate Education Department Tuition Assistance",
        "fee": "$15",
        "tuition": "$3,800/year",
        "desc": "Comprehensive foundational curriculum in financial accounting, small business entrepreneurship, principles of marketing, and tribal economic law.",
        "requirements": {"gpa": "High school diploma or GED", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "Standard enrollment form", "references": "Not required"},
        "source": "https://www.swcollege.edu/academics/business-administration"
      },
      {
        "title": "Oyate Community Food Sovereignty & Dakota Ecology Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment"],
        "deadline": "2027-05-15",
        "deadlineText": "May 15, 2027",
        "funding": "$2,500 summer research stipend and greenhouse demonstration supplies",
        "fee": "$0",
        "tuition": "Provided through SWC Land-Grant Extension Department",
        "desc": "Summer experiential fellowship focused on cultivating ancestral flint corn, wild prairie turnip (timpsula) harvesting, and soil microbiomics in tribal community gardens.",
        "requirements": {"gpa": "Current student at SWC in good academic standing", "ielts": "Exempt", "gre": "Exempt", "papers": "Community food project outline", "references": "One instructor recommendation"},
        "source": "https://www.swcollege.edu/extension"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Vincent Blue Dog",
        "role": "President & Executive Academic Officer",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Blue Dog leads institutional advancement, federal tribal college grant implementation, and university transfer articulation at Sisseton Wahpeton College."
      },
      {
        "name": "Prof. Darlene Redday",
        "role": "Chair & Instructor of Dakota Studies",
        "department": "Dakota Studies Department",
        "subject": "social-sciences",
        "bio": "Prof. Redday is a respected Dakota linguist and educator specializing in dialect preservation, immersion teaching pedagogy, and Dakota oral history archiving."
      },
      {
        "name": "Prof. Danika White",
        "role": "Director of Land-Grant Extension & Sustainable Agriculture",
        "department": "Department of Sustainable Food Systems",
        "subject": "environment",
        "bio": "Prof. White leads tribal community agriculture initiatives, researching heirloom seed preservation, agroecology, and food sovereignty on the Lake Traverse Reservation."
      }
    ]
  },

  # 5. Slippery Rock University (Row 942)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Slippery Rock University",
    "shortName": "Slippery Rock",
    "slug": "slippery-rock-university",
    "location": "Slippery Rock, Pennsylvania, United States",
    "website": "https://www.sru.edu",
    "sourceRow": 942,
    "stats": {"established": "1889", "students": "8,400+", "international": "2%", "faculty": "420+"},
    "heroSummary": "Slippery Rock University (SRU) is a premier public university in western Pennsylvania and a four-star member of Pennsylvania's State System of Higher Education (PASSHE). Situated on an expansive 660-acre campus in Butler County, SRU is acclaimed nationwide for its top-tier Doctor of Physical Therapy program, safety management, exercise science, and environmental education.",
    "academicOverview": "SRU comprises the College of Health Professions, the College of Engineering and Science, the College of Business, and the College of Liberal Arts. It features cutting-edge biomechanics laboratories, a 70-acre Macoskey Center for Sustainable Systems Education and Research, and an NSA-designated National Center of Academic Excellence in Cyber Defense (CAE-CD).",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (average 3.5), college prep coursework, and optional standardized test scores. Graduate programs, including the competitive Doctor of Physical Therapy and MS in Occupational Safety, require GRE scores, clinical prerequisites, and PTCAS submissions.",
    "opps": [
      {
        "title": "Doctor of Physical Therapy (DPT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-12-01",
        "deadlineText": "December 1, 2026",
        "funding": "Departmental physical therapy graduate assistantships and clinical scholarship awards",
        "fee": "$70",
        "tuition": "$17,800/year in-state, $26,700/year out-of-state",
        "desc": "CAPTE-accredited three-year clinical doctoral program with exceptional first-time licensure pass rates, providing extensive training in musculoskeletal rehabilitation, neuro-recovery, and cardiopulmonary therapy.",
        "requirements": {"gpa": "3.2+ cumulative and science prerequisite GPA, 50+ observation hours", "ielts": "TOEFL 88+ or IELTS 6.5", "gre": "GRE scores required", "papers": "PTCAS personal statement", "references": "Three letters of recommendation including licensed physical therapist"},
        "source": "https://www.sru.edu/academics/graduate-programs/physical-therapy-doctor"
      },
      {
        "title": "Master of Science in Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate assistantships offering full tuition waivers and research stipends",
        "fee": "$40",
        "tuition": "$516/credit in-state, $774/credit out-of-state",
        "desc": "NSA-designated curriculum developing expertise in network penetration testing, digital forensics, cryptography, cloud security, and critical infrastructure defense.",
        "requirements": {"gpa": "Bachelor's in computer science, IT, or STEM with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Optional", "papers": "Statement of technical objectives", "references": "Two professional/academic recommendations"},
        "source": "https://www.sru.edu/academics/graduate-programs/cybersecurity"
      },
      {
        "title": "Master of Science in Occupational Safety and Health Management",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Safety Management Corporate Endowment Grants up to $5,000",
        "fee": "$40",
        "tuition": "$516/credit in-state, $774/credit out-of-state",
        "desc": "Nationally recognized graduate degree preparing corporate safety directors, industrial hygienists, and risk management specialists for manufacturing, oil and gas, and construction industries.",
        "requirements": {"gpa": "Undergraduate degree in safety management, engineering, or science with 2.75+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Professional goals essay", "references": "Two recommendations"},
        "source": "https://www.sru.edu/academics/graduate-programs/safety-management-ms"
      },
      {
        "title": "Bachelor of Science in Park & Resource Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "SRU Merit Scholarships and Macoskey Center Environmental Grants",
        "fee": "$0",
        "tuition": "$7,716/year in-state, $11,574/year out-of-state",
        "desc": "Comprehensive program preparing national and state park rangers, environmental educators, and conservation planners, featuring practical fieldwork at nearby state parks and wildlife refuges.",
        "requirements": {"gpa": "High school GPA 3.0+ with college prep coursework", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Common Application or SRU online application", "references": "Counselor recommendation"},
        "source": "https://www.sru.edu/academics/majors-and-minors/park-and-resource-management"
      },
      {
        "title": "Master of Science in Athletic Training (MSAT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Athletic Training Alumni Endowed Scholarships",
        "fee": "$50",
        "tuition": "$14,500/year in-state, $21,800/year out-of-state",
        "desc": "CAATE-accredited graduate degree offering hands-on clinical rotations with NCAA Division II athletic programs, professional sports teams, and orthopedic sports medicine clinics.",
        "requirements": {"gpa": "3.0+ undergraduate GPA with prerequisites in human anatomy, biomechanics, and nutrition", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "ATCAS personal statement", "references": "Three recommendations including certified athletic trainer (ATC)"},
        "source": "https://www.sru.edu/academics/graduate-programs/athletic-training-msat"
      },
      {
        "title": "Western PA Biomechanics & Human Performance Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$4,000 summer research stipend and laboratory motion-capture analysis funding",
        "fee": "$0",
        "tuition": "Provided by College of Health Professions Research Fund",
        "desc": "Graduate and undergraduate fellowship investigating kinematic gait analysis, ACL injury rehabilitation interventions, and robotic exoskeleton mobility aids.",
        "requirements": {"gpa": "Enrolled student in physical therapy, exercise science, or biomechanics with 3.2+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Research proposal", "references": "Two faculty endorsements"},
        "source": "https://www.sru.edu/research/biomechanics-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Karen Lehrman",
        "role": "President & Professor of Higher Education",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Lehrman provides strategic executive leadership at Slippery Rock University, focusing on student retention, academic innovation, and STEM healthcare program expansion across western Pennsylvania."
      },
      {
        "name": "Dr. John R. Rentschler",
        "role": "Chair & Professor of Physical Therapy",
        "department": "Department of Physical Therapy",
        "subject": "biology",
        "bio": "Dr. Rentschler specializes in orthopedic manual therapy, neuromuscular clinical rehabilitation, and evidence-based clinical curriculum design for doctoral physical therapy students."
      },
      {
        "name": "Dr. Nitin Sukhija",
        "role": "Associate Professor of Computer Science & Cybersecurity Director",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Sukhija conducts high-performance computing, cybersecurity threat modeling, distributed systems reliability, and AI-driven intrusion detection research."
      }
    ]
  },

  # 6. Smith College (Row 943)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Smith College",
    "shortName": "Smith College",
    "slug": "smith-college-northampton",
    "location": "Northampton, Massachusetts, United States",
    "website": "https://www.smith.edu",
    "sourceRow": 943,
    "stats": {"established": "1871", "students": "2,900+", "international": "14%", "faculty": "310+"},
    "heroSummary": "Smith College is an internationally renowned private women's liberal arts college in Northampton, Massachusetts, and a distinguished member of the prestigious Seven Sisters and Five College Consortium. Smith is famous for establishing the Picker Program in Engineering Science—the first accredited engineering program at a women's college in the United States.",
    "academicOverview": "Smith College offers a flexible, open curriculum without distribution requirements, encouraging interdisciplinary intellectual exploration. Highlights include the Picker Engineering Program, the innovative Maya Lin-designed Neilson Library, the Botanic Garden, and world-renowned programs in political science, economics, computer science, and biological sciences.",
    "researchAdmissions": "Smith College practices holistic, test-optional undergraduate admissions for women, evaluating academic rigor, intellectual curiosity, essays, and leadership. The Smith College School for Social Work admits graduate students of all genders for its acclaimed MSW and Ph.D. clinical social work programs.",
    "opps": [
      {
        "title": "Bachelor of Science in Engineering Science (Picker Engineering Program)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "100% demonstrated financial need met for all admitted students, including international students; average aid package $58,000+",
        "fee": "$65 (fee waivers available)",
        "tuition": "$64,280/year",
        "desc": "ABET-accredited engineering program combining rigorous mechanical, electrical, and environmental fundamentals with human-centered design through year-long industry Design Clinics.",
        "requirements": {"gpa": "Exceptional secondary school record with calculus, physics, and chemistry", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Common Application personal statement and Smith writing supplement", "references": "Two academic teacher recommendations and counselor report"},
        "source": "https://www.smith.edu/academics/engineering"
      },
      {
        "title": "Bachelor of Arts in Computer Science & Statistical Modeling",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full need-based financial aid awards and Kahn Liberal Arts Institute Research Fellowships",
        "fee": "$65",
        "tuition": "$64,280/year",
        "desc": "Distinguished computing program exploring machine learning, computational biology, software engineering, and ethics in algorithms with cross-registration across the Five College Consortium.",
        "requirements": {"gpa": "Competitive high school transcript with advanced mathematics", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Common App essay", "references": "Two teacher evaluations"},
        "source": "https://www.smith.edu/academics/computer-science"
      },
      {
        "title": "Master of Social Work (MSW) - School for Social Work",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "School for Social Work Merit Scholarships up to $18,000/year",
        "fee": "$60",
        "tuition": "$24,500/summer-block",
        "desc": "Intensive block-plan clinical social work master's program alternating summer academic residencies with eight-month paid clinical internships across hospitals and mental health centers nationwide.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA and strong social science background", "ielts": "TOEFL 95+ or IELTS 7.0", "gre": "Exempt", "papers": "Clinical case scenario essay and personal narrative on social justice", "references": "Three professional and academic recommendations"},
        "source": "https://www.smith.edu/ssw/academics/msw"
      },
      {
        "title": "Bachelor of Arts in Neuroscience & Behavioral Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Smith Need-Based Grants and SURF (Summer Undergraduate Research Fellowship) stipends",
        "fee": "$65",
        "tuition": "$64,280/year",
        "desc": "Interdisciplinary laboratory degree investigating neural circuitry, neuroendocrinology, psychopharmacology, and synaptic plasticity in modern Ford Hall research labs.",
        "requirements": {"gpa": "Strong high school STEM coursework in biology, chemistry, and calculus", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Common Application essay", "references": "Two academic recommendations"},
        "source": "https://www.smith.edu/academics/neuroscience"
      },
      {
        "title": "Bachelor of Arts in Architecture and Landscape Studies",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full need-based financial aid packages and Kahn Arts Grants",
        "fee": "$65",
        "tuition": "$64,280/year",
        "desc": "Studio-centered design program integrating architectural theory, spatial fabrication, sustainable landscape urbanism, and environmental conservation with Five College design studios.",
        "requirements": {"gpa": "Secondary school diploma with artistic and analytical preparation", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Common Application personal statement (portfolio optional)", "references": "Two teacher recommendations"},
        "source": "https://www.smith.edu/academics/architecture"
      },
      {
        "title": "Picker Engineering & Sustainability Research Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "$5,200 summer stipend, on-campus housing, and $1,500 laboratory material fund",
        "fee": "$0",
        "tuition": "Endowed by the Picker Program in Engineering Science",
        "desc": "Summer undergraduate research fellowship investigating renewable energy microgrids, water desalinization membranes, green building thermal dynamics, and environmental sensor arrays.",
        "requirements": {"gpa": "Enrolled undergraduate in engineering, physics, or environmental science", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Research project abstract", "references": "One engineering faculty endorsement"},
        "source": "https://www.smith.edu/academics/engineering/research"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Sarah Willie-LeBreton",
        "role": "President & Professor of Sociology",
        "department": "Office of the President & Department of Sociology",
        "subject": "social-sciences",
        "bio": "Dr. Willie-LeBreton is the 12th President of Smith College, a prominent sociologist researching social inequality, gender dynamics, African American social thought, and inclusive higher education leadership."
      },
      {
        "name": "Dr. Susannah Howe",
        "role": "Director of the Design Clinic & Senior Lecturer in Engineering",
        "department": "Picker Program in Engineering Science",
        "subject": "engineering",
        "bio": "Dr. Howe oversees the year-long Capstone Design Clinic in the Picker Engineering Program, researching engineering design education methodologies, team dynamics, and sustainable product fabrication."
      },
      {
        "name": "Dr. Nicholas Howe",
        "role": "Professor of Computer Science",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Howe conducts advanced research in computer vision, digital document image processing, optical character recognition for ancient manuscripts, and machine learning algorithm design."
      }
    ]
  },

  # 7. South Carolina State University (Row 944)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "South Carolina State University",
    "shortName": "SC State",
    "slug": "south-carolina-state-university-orangeburg",
    "location": "Orangeburg, South Carolina, United States",
    "website": "https://scsu.edu",
    "sourceRow": 944,
    "stats": {"established": "1896", "students": "3,000+", "international": "2%", "faculty": "180+"},
    "heroSummary": "South Carolina State University (SC State) is a distinguished public historically Black 1890 land-grant university located in Orangeburg, South Carolina. Renowned for its excellence in STEM, SC State houses the only undergraduate Nuclear Engineering program in South Carolina and has produced generations of African American military generals, engineers, educators, and civic leaders.",
    "academicOverview": "SC State comprises the College of Science, Technology, Engineering, Mathematics, and Transportation (STEM-T), the College of Education, Humanities, and Social Sciences, and the School of Business. It features the James E. Clyburn University Transportation Center, advanced radiochemistry laboratories, and an agricultural research extension station.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, completion of college preparatory curriculum units, and standardized test scores (SAT/ACT test-optional). Graduate admissions require an accredited bachelor's degree with a minimum 2.75 GPA, department-specific writing samples, and academic references.",
    "opps": [
      {
        "title": "Bachelor of Science in Nuclear Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "U.S. Department of Energy (DOE) Nuclear Energy Fellowships and Savannah River Nuclear Solutions STEM Scholarships up to $10,000/year",
        "fee": "$25",
        "tuition": "$11,060/year in-state, $21,750/year out-of-state",
        "desc": "The only undergraduate nuclear engineering degree in South Carolina, preparing students for reactor operations, radiation protection, nuclear waste management, and medical physics careers.",
        "requirements": {"gpa": "3.0+ high school GPA with strong grades in physics and calculus", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement on nuclear engineering career goals", "references": "Two letters from math or science instructors"},
        "source": "https://scsu.edu/college-of-science-technology-engineering-and-mathematics"
      },
      {
        "title": "Master of Science in Speech-Language Pathology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Health Resources and Services Administration (HRSA) Graduate Traineeships",
        "fee": "$35",
        "tuition": "$9,620/year in-state, $18,900/year out-of-state",
        "desc": "CAA-accredited graduate program offering comprehensive clinical diagnostics and speech-language therapy practicums in the on-campus Speech-Language and Hearing Clinic and regional hospitals.",
        "requirements": {"gpa": "3.0+ undergraduate GPA with prerequisites in speech sciences and audiology", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE scores required", "papers": "CSDCAS personal essay", "references": "Three academic recommendations"},
        "source": "https://scsu.edu/academics/speech-pathology"
      },
      {
        "title": "Master of Science in Transportation Planning & Highway Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Federal Highway Administration (FHWA) Eisenhower Transportation Fellowships",
        "fee": "$35",
        "tuition": "$9,620/year in-state, $18,900/year out-of-state",
        "desc": "Interdisciplinary program at the James E. Clyburn University Transportation Center focusing on intelligent transportation systems, traffic safety modeling, and multimodal freight logistics.",
        "requirements": {"gpa": "Bachelor's degree in engineering, urban planning, or STEM with 2.75+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "General GRE recommended", "papers": "Statement of purpose in transportation research", "references": "Two professional/academic recommendations"},
        "source": "https://scsu.edu/transportation-center"
      },
      {
        "title": "Bachelor of Science in Computer Science & Cybersecurity Track",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "National Science Foundation (NSF) CyberCorps Scholarships for Service (tuition + $25,000 stipend)",
        "fee": "$25",
        "tuition": "$11,060/year in-state, $21,750/year out-of-state",
        "desc": "Rigorous degree providing cutting-edge instruction in network security defense, software architecture, algorithm design, and cloud database security.",
        "requirements": {"gpa": "High school diploma with algebra II and trigonometry proficiency", "ielts": "TOEFL 75+ or IELTS 6.0", "gre": "Exempt", "papers": "Application essay", "references": "One high school counselor or teacher letter"},
        "source": "https://scsu.edu/academics/computer-science"
      },
      {
        "title": "Doctor of Education (Ed.D.) in Educational Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental educational leadership graduate assistantships",
        "fee": "$40",
        "tuition": "$10,500/year in-state, $20,200/year out-of-state",
        "desc": "Practitioner-focused doctorate developing school superintendents, higher education administrators, and education policy analysts through empirical dissertation research.",
        "requirements": {"gpa": "Master's degree in education with 3.3+ GPA, three years administrative/teaching experience", "ielts": "TOEFL 80+", "gre": "GRE or MAT scores required", "papers": "Educational leadership philosophy statement and writing sample", "references": "Three professional references"},
        "source": "https://scsu.edu/academics/educational-administration"
      },
      {
        "title": "James E. Clyburn Transportation & Clean Energy Research Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "$4,500 semester stipend and national transportation conference travel grant",
        "fee": "$0",
        "tuition": "Funded by the James E. Clyburn Center for Transportation Research",
        "desc": "Undergraduate and graduate research fellowship analyzing hydrogen fuel cells, electric vehicle battery performance, and radiation shielding materials.",
        "requirements": {"gpa": "Enrolled in engineering or computer science with 3.0+ GPA", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Research proposal", "references": "Faculty recommendation"},
        "source": "https://scsu.edu/research/transportation-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Alexander Conyers",
        "role": "President & Executive Leader",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Col. (Ret.) Alexander Conyers is the 13th President of South Carolina State University, championing historic campus capital investments, STEM enrollment growth, and corporate research alliances."
      },
      {
        "name": "Dr. Kenneth Lewis",
        "role": "Chair & Professor of Engineering & Nuclear Studies",
        "department": "Department of Engineering Technology & Nuclear Engineering",
        "subject": "engineering",
        "bio": "Dr. Lewis leads the premier Nuclear Engineering program at SC State, researching nuclear reactor instrumentation, thermal-hydraulics, and radiation measurement techniques."
      },
      {
        "name": "Dr. Regina Bush",
        "role": "Chair & Associate Professor of Speech Pathology and Audiology",
        "department": "Department of Speech Pathology and Audiology",
        "subject": "biology",
        "bio": "Dr. Bush investigates neurogenic communication disorders, pediatric speech pathology interventions, and health disparity reductions in rural minority communities."
      }
    ]
  },

  # 8. South Dakota School of Mines & Technology (Row 946)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "South Dakota School of Mines & Technology",
    "shortName": "South Dakota Mines",
    "slug": "south-dakota-school-of-mines-and-technology",
    "location": "Rapid City, South Dakota, United States",
    "website": "https://www.sdsmt.edu",
    "sourceRow": 946,
    "stats": {"established": "1885", "students": "2,500+", "international": "7%", "faculty": "170+"},
    "heroSummary": "South Dakota School of Mines & Technology (South Dakota Mines) is an elite public STEM research university located at the foothills of the Black Hills in Rapid City, South Dakota. Founded in 1885 during the Dakota gold rush to provide metallurgical and mining expertise, it is today a premier national engineering institution boasting exceptional starting career salaries and leading-edge partnerships with the Sanford Underground Research Facility (SURF).",
    "academicOverview": "South Dakota Mines offers comprehensive bachelor's, master's, and doctoral programs in 20 STEM majors, including materials science, mining engineering, geological engineering, mechanical engineering, computer science, and biomedical engineering. The university operates state-of-the-art facilities including the Arbegast Materials Processing and Joining Laboratory and the Museum of Geology.",
    "researchAdmissions": "Undergraduate admissions require high school graduation with strong math and science coursework (average incoming GPA 3.6). Graduate admissions require an accredited bachelor's degree in engineering, physics, or physical science with a minimum 3.0 GPA, GRE scores (departmental policy), statement of purpose, and academic letters of reference.",
    "opps": [
      {
        "title": "Ph.D. in Materials Science and Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate research assistantships providing full tuition waiver and $28,000 - $32,000 annual living stipends",
        "fee": "$35",
        "tuition": "100% covered for funded graduate assistants",
        "desc": "Elite doctoral program focusing on advanced alloys, friction stir welding, ceramic matrix composites, 2D nanomaterials, and corrosion resistance for aerospace and defense applications.",
        "requirements": {"gpa": "3.0+ GPA in engineering, materials science, chemistry, or physics", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE scores recommended", "papers": "Statement of research interests and technical curriculum vitae", "references": "Three letters of academic/research recommendation"},
        "source": "https://www.sdsmt.edu/academics/degrees/materials-science-and-engineering-phd"
      },
      {
        "title": "Ph.D. in Geology, Geological Engineering & Paleontology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NSF and Geological Survey funded research stipends ($26,000/year) plus tuition remission",
        "fee": "$35",
        "tuition": "Covered by assistantships",
        "desc": "Unique doctoral research leveraging the geologically rich Black Hills, Badlands, and Williston Basin for structural geology, geomechanics, paleoclimatology, and hydrogeology studies.",
        "requirements": {"gpa": "BS or MS in geology, geosciences, or civil engineering with 3.2+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE general test", "papers": "Research proposal and personal statement", "references": "Three academic references"},
        "source": "https://www.sdsmt.edu/academics/degrees/geology-and-geological-engineering-phd"
      },
      {
        "title": "Master of Science in Mining Engineering & Underground Geo-Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Mining Industry Foundation Fellowships and research assistantships up to $22,000/year",
        "fee": "$35",
        "tuition": "$495/credit in-state, $780/credit out-of-state",
        "desc": "Comprehensive graduate degree specializing in rock mechanics, automated underground excavation, mine ventilation safety, mineral processing, and sustainable reclamation.",
        "requirements": {"gpa": "Bachelor's degree in mining, civil, or geological engineering with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE required", "papers": "Statement of professional goals", "references": "Three letters of recommendation"},
        "source": "https://www.sdsmt.edu/academics/degrees/mining-engineering-ms"
      },
      {
        "title": "Master of Science in Computer Science & Artificial Intelligence",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Departmental teaching and research assistantships covering tuition and providing $18,000 annual stipends",
        "fee": "$35",
        "tuition": "$495/credit in-state, $780/credit out-of-state",
        "desc": "Cutting-edge degree developing mastery in deep learning, autonomous robotics, parallel supercomputing, and cyber-physical systems verification.",
        "requirements": {"gpa": "Bachelor's in computer science or related discipline with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE general test", "papers": "Statement of purpose", "references": "Two faculty letters"},
        "source": "https://www.sdsmt.edu/academics/degrees/computer-science-ms"
      },
      {
        "title": "Ph.D. in Biomedical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Biomedical research assistantships with full tuition remission and $28,000 annual stipend",
        "fee": "$35",
        "tuition": "Covered by assistantships",
        "desc": "Joint doctoral program investigating biomaterials for bone regeneration, microfluidic diagnostics, orthopedic biomechanics, and cardiovascular stent surface modifications.",
        "requirements": {"gpa": "BS or MS in biomedical engineering, mechanical engineering, or bio-sciences with 3.2+ GPA", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE scores required", "papers": "Research statement", "references": "Three letters of recommendation"},
        "source": "https://www.sdsmt.edu/academics/degrees/biomedical-engineering-phd"
      },
      {
        "title": "Sanford Underground Research Facility (SURF) Particle & Geo-Science Fellowship",
        "type": "Fellowship",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "$6,000 summer research stipend, underground lab access, and SURF dormitory housing",
        "fee": "$0",
        "tuition": "Funded by South Dakota Mines SURF Research Consortium",
        "desc": "Prestigious research fellowship conducting experiments 4,850 feet underground at the Sanford Underground Research Facility (the former Homestake gold mine) on dark matter detection (LZ experiment), neutrino physics (DUNE), and deep-subsurface extremophile geomicrobiology.",
        "requirements": {"gpa": "Enrolled graduate or upper-division student in physics, engineering, or geology with 3.3+ GPA", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "SURF research project proposal", "references": "Two faculty recommendations"},
        "source": "https://www.sdsmt.edu/research/surf"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jim Rankin",
        "role": "President & Professor of Electrical Engineering",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. Rankin leads South Dakota Mines, an alumnus and avionics engineer with extensive research experience in aircraft navigation systems, fly-by-wire controls, and federal STEM workforce policy."
      },
      {
        "name": "Dr. Michael West",
        "role": "Head & Professor of Materials and Metallurgical Engineering",
        "department": "Department of Materials and Metallurgical Engineering",
        "subject": "engineering",
        "bio": "Dr. West directs the Arbegast Materials Processing and Joining Laboratory, specializing in friction stir welding, advanced alloy microstructures, and solid-state materials joining."
      },
      {
        "name": "Dr. Laurie Anderson",
        "role": "Department Head & Professor of Geology and Geological Engineering",
        "department": "Department of Geology and Geological Engineering",
        "subject": "environment",
        "bio": "Dr. Anderson is an accomplished invertebrate paleontologist and geoscientist researching marine molluscan paleoecology, taphonomy, and environmental change across the fossil record."
      }
    ]
  }
]
