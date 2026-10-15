# scripts/make_b63_p1_chunk1.py
# Batch 63 Part 1 Chunk 1: Universities 1 to 8

chunk1 = [
  # 1. Northeast Community College (Row 874)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Northeast Community College",
    "shortName": "Northeast CC",
    "slug": "northeast-community-college-norfolk",
    "location": "Norfolk, Nebraska, United States",
    "website": "https://www.northeast.edu",
    "sourceRow": 874,
    "stats": {"established": "1973", "students": "5,100+", "international": "2%", "faculty": "260+"},
    "heroSummary": "Northeast Community College is a comprehensive public community college based in Norfolk, Nebraska. Known across the Midwest for precision agriculture, wind energy technology, nursing, and veterinary technology.",
    "academicOverview": "Northeast CC operates the Chuck M. Pohlman Agriculture Complex, the Applied Technology Building, and extended campuses in O'Neill, South Sioux City, and West Point. It serves a 20-county agricultural region with high-tech farm test plots and wind turbine simulators.",
    "researchAdmissions": "Northeast CC operates an open-access admissions policy for high school graduates and GED completers. Health sciences programs (Registered Nursing, Paramedic, Physical Therapist Assistant) require competitive secondary admission and prerequisite science benchmarks.",
    "opps": [
      {
        "title": "Associate of Applied Science in Precision Agriculture",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Nebraska Career Scholarships providing up to $4,500 per academic year",
        "fee": "$0",
        "tuition": "$3,800/year (In-state) / $4,800/year (Out-of-state)",
        "desc": "Hands-on instruction utilizing variable-rate fertilizer applicators, multispectral drone mapping, yield monitoring systems, and GPS RTK tractor guidance at the college farm.",
        "requirements": {"gpa": "High school diploma or GED with technical aptitude", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Agricultural career goals statement", "references": "One recommendation"},
        "source": "https://www.northeast.edu/degrees-and-programs/precision-agriculture"
      },
      {
        "title": "Associate of Applied Science in Wind Energy Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Renewable Energy Workforce Grants of $3,500/year",
        "fee": "$0",
        "tuition": "$3,800/year (In-state) / $4,800/year (Out-of-state)",
        "desc": "Training wind turbine technicians in electrical generator maintenance, climb safety, high-voltage substations, and mechanical hydraulic pitch systems.",
        "requirements": {"gpa": "High school diploma or GED with physical climb capability", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Technical safety agreement", "references": "One character reference"},
        "source": "https://www.northeast.edu/degrees-and-programs/wind-energy-technology"
      },
      {
        "title": "Associate Degree in Nursing (ADN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Faith Regional Health Services Nursing Grants providing up to $5,000/year",
        "fee": "$0",
        "tuition": "$3,800/year (In-state) / $4,800/year (Out-of-state)",
        "desc": "ACEN-accredited nursing program with acute hospital rotations at Faith Regional Health Services and high-fidelity human patient simulation laboratories.",
        "requirements": {"gpa": "2.7 GPA in prerequisite anatomy, physiology, and microbiology", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Nursing statement of intent and TEAS score", "references": "Two recommendations"},
        "source": "https://www.northeast.edu/degrees-and-programs/nursing"
      },
      {
        "title": "Associate of Applied Science in Veterinary Technology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Nebraska Veterinary Medical Association Scholarships up to $3,000/year",
        "fee": "$0",
        "tuition": "$3,800/year (In-state) / $4,800/year (Out-of-state)",
        "desc": "AVMA-accredited clinical curriculum in veterinary pharmacology, hematology, surgical nursing, radiographic imaging, and food animal handling.",
        "requirements": {"gpa": "High school GPA >= 2.5 with biology and chemistry", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Veterinary clinical interest statement", "references": "Two recommendations including licensed veterinarian"},
        "source": "https://www.northeast.edu/degrees-and-programs/veterinary-technology"
      },
      {
        "title": "Associate of Science in Computer Science (Transfer Track)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM Transfer Achievement Grants providing $2,500/year",
        "fee": "$0",
        "tuition": "$3,800/year (In-state) / $4,800/year (Out-of-state)",
        "desc": "Direct university transfer pathway articulated with University of Nebraska-Lincoln, covering calculus, data structures, algorithms, and systems programming.",
        "requirements": {"gpa": "2.5 high school GPA with precalculus readiness", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.northeast.edu/degrees-and-programs/computer-science"
      },
      {
        "title": "Northeast Community College President's Honors Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition and mandatory campus fees ($4,800/year value) across two academic years",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Top institutional merit scholarship honoring graduating high school seniors from Northeast's 20-county service area showing superior academic and community promise.",
        "requirements": {"gpa": "3.50 high school GPA and top 15% class rank", "ielts": "Exempt", "gre": "Exempt", "papers": "President's Fellowship essay", "references": "Two letters of recommendation from high school teachers"},
        "source": "https://www.northeast.edu/financial-aid-and-scholarships/scholarships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Leah A. Barrett",
        "role": "President of Northeast Community College",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Leah A. Barrett serves as President of Northeast Community College, guiding multi-million dollar ag-tech facility expansions and rural workforce pipeline development."
      },
      {
        "name": "Dr. Michele Gill",
        "role": "Vice President of Educational Services",
        "department": "Office of Academic Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Michele Gill directs instructional quality, career-technical accreditation, and university articulation agreements across all 20 Nebraska service counties."
      },
      {
        "name": "Prof. Bernie Thyen",
        "role": "Director of Agriculture and Water Resources",
        "department": "Applied Technology and Agriculture Division",
        "subject": "environment",
        "bio": "Prof. Bernie Thyen specializes in precision irrigation telemetry, soil health conservation, and agricultural drone applications in Midwestern crop production."
      }
    ]
  },

  # 2. Northeastern Illinois University (Row 875)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Northeastern Illinois University",
    "shortName": "Northeastern Illinois",
    "slug": "northeastern-illinois-university-chicago",
    "location": "Chicago, Illinois, United States",
    "website": "https://www.neiu.edu",
    "sourceRow": 875,
    "stats": {"established": "1867", "students": "6,500+", "international": "4%", "faculty": "480+"},
    "heroSummary": "Northeastern Illinois University is a comprehensive public institution located on Chicago's northwest side. Designated as a Hispanic-Serving Institution (HSI), NEIU is celebrated for computer science, teacher education, urban community leadership, and social work.",
    "academicOverview": "NEIU comprises the College of Arts and Sciences, Daniel L. Goodwin College of Education, and the College of Business and Technology. Operates satellite centers including El Centro in Avondale and the Jacob H. Carruthers Center for Inner City Studies in Bronzeville.",
    "researchAdmissions": "Undergraduate admissions evaluate high school unweighted GPA (minimum 2.5 for automatic admission) under a test-optional policy. Graduate programs require an accredited bachelor's degree with 2.75 to 3.0 GPA, statement of goals, and recommendations.",
    "opps": [
      {
        "title": "Master of Science in Computer Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental Graduate Teaching Assistantships providing 100% tuition waiver and $12,500 annual stipend",
        "fee": "$40",
        "tuition": "$455/credit hour (In-state) / $910/credit hour (Out-of-state)",
        "desc": "Advanced study in algorithm complexity, machine learning architectures, distributed database systems, cloud infrastructure, and cybersecurity.",
        "requirements": {"gpa": "BS in computer science or related field with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Statement of computing objectives", "references": "Two letters from faculty or tech employers"},
        "source": "https://www.neiu.edu/academics/college-of-arts-and-sciences/departments/computer-science/computer-science-master-of-science"
      },
      {
        "title": "Master of Social Work (MSW - Urban Communities)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Behavioral Health Workforce Education and Training (BHWET) Fellowships up to $10,000",
        "fee": "$40",
        "tuition": "$455/credit hour",
        "desc": "CSWE-accredited clinical social work curriculum with concentrated practice in urban community mental health, restorative youth justice, and immigrant family advocacy.",
        "requirements": {"gpa": "Bachelor's degree with min. 3.0 GPA in social sciences or humanities", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Social work personal statement and ethical scenario essay", "references": "Three letters of recommendation"},
        "source": "https://www.neiu.edu/academics/college-of-arts-and-sciences/departments/social-work/master-of-social-work"
      },
      {
        "title": "Master of Arts in Inner City Studies",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Carruthers Center Urban Research Grants of $4,000 per academic year",
        "fee": "$40",
        "tuition": "$455/credit hour",
        "desc": "Based at the historic Carruthers Center in Bronzeville, examining African American public policy, urban sociological structures, economic development, and community organizing.",
        "requirements": {"gpa": "Accredited bachelor's degree with min. 2.75 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Urban studies research statement", "references": "Two recommendations"},
        "source": "https://www.neiu.edu/academics/college-of-arts-and-sciences/departments/inner-city-studies"
      },
      {
        "title": "Bachelor of Science in Biology (Cellular and Pre-Medical)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "NIH-MARC Undergraduate Student Training in Academic Research (U-STAR) Honors Fellowships",
        "fee": "$30",
        "tuition": "$10,900/year (In-state) / $21,800/year (Out-of-state)",
        "desc": "Rigorous bench science preparation in recombinant genetics, mammalian histology, immunology, and biochemistry for medical school pathways.",
        "requirements": {"gpa": "High school GPA >= 2.75 with biology and chemistry", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.neiu.edu/academics/college-of-arts-and-sciences/departments/biology/biology-major"
      },
      {
        "title": "Bachelor of Science in Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Chicagoland Cyber Defense Grants providing up to $5,000/year",
        "fee": "$30",
        "tuition": "$10,900/year (In-state) / $21,800/year (Out-of-state)",
        "desc": "Covers network defense, cryptographic protocols, digital forensics, ethical vulnerability assessments, and cloud infrastructure security.",
        "requirements": {"gpa": "2.5 high school GPA with algebra II", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of technical intent", "references": "One recommendation"},
        "source": "https://www.neiu.edu/academics/college-of-arts-and-sciences/departments/computer-science/cybersecurity-major"
      },
      {
        "title": "NEIU Presidential Honors Full Tuition Scholarship",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state tuition and fees ($11,800/year value) renewable for four undergraduate academic years ($47,200 total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "NEIU's most distinguished merit award given to incoming freshmen demonstrating superior scholarship, civic leadership, and urban community engagement.",
        "requirements": {"gpa": "3.75 unweighted high school GPA and top 10% class rank", "ielts": "Exempt", "gre": "Exempt", "papers": "Presidential Scholarship competitive essay and interview", "references": "Three letters of academic endorsement"},
        "source": "https://www.neiu.edu/financial-aid/scholarships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Katrina E. Bell-Jordan",
        "role": "President of Northeastern Illinois University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Katrina E. Bell-Jordan serves as the 8th President of NEIU, a communications scholar focusing on intercultural rhetoric, educational equity, and urban university transformation."
      },
      {
        "name": "Dr. Marcelo Sztainberg",
        "role": "Professor of Computer Science and Vice Provost",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Marcelo Sztainberg conducts research in optimization algorithms, parallel computing, computer science education, and Hispanic STEM recruitment initiatives."
      },
      {
        "name": "Dr. Pamela Geddes",
        "role": "Professor of Biology and Environmental Science",
        "department": "Department of Biology",
        "subject": "environment",
        "bio": "Dr. Pamela Geddes is an aquatic ecologist who studies Great Lakes wetland biodiversity, urban watershed nutrient flows, and invasive species ecological dynamics."
      }
    ]
  },

  # 3. Northeastern University (Row 876)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Northeastern University",
    "shortName": "Northeastern",
    "slug": "northeastern-university-boston",
    "location": "Boston, Massachusetts, United States",
    "website": "https://www.northeastern.edu",
    "sourceRow": 876,
    "stats": {"established": "1898", "students": "36,000+", "international": "22%", "faculty": "2,100+"},
    "heroSummary": "Northeastern University is a world-renowned top-tier private Carnegie R1 global research university headquartered in Boston, Massachusetts. Globally acclaimed as the pioneer and world leader in cooperative education (co-op), artificial intelligence, and experiential robotics.",
    "academicOverview": "Northeastern features the Khoury College of Computer Sciences, College of Engineering, and Bouvé College of Health Sciences, alongside an interconnected global network across London, Toronto, Vancouver, Seattle, and Silicon Valley. Research expenditures exceed $260M annually across biotechnology, cybersecurity, and nanomedicine.",
    "researchAdmissions": "Undergraduate admissions are highly selective (acceptance rate ~6%), evaluating secondary school curriculum rigor, standardized testing (test-optional), extracurricular impact, and leadership essays. Graduate admissions require an accredited bachelor's degree with minimum 3.2 to 3.5 GPA and research portfolio.",
    "opps": [
      {
        "title": "Doctor of Philosophy in Computer Science (Experiential AI and Machine Learning)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-01",
        "deadlineText": "January 1, 2027",
        "funding": "Full graduate research fellowship covering 100% tuition, university health insurance, and $40,000 annual living stipend",
        "fee": "$100",
        "tuition": "$0 (Fully funded doctoral candidate)",
        "desc": "Elite Khoury College doctoral research at the Institute for Experiential AI and Cybersecurity and Privacy Institute, studying large language models, quantum computing, and ethical autonomous robotics.",
        "requirements": {"gpa": "BS or MS in CS, engineering, or mathematics with min. 3.5 GPA", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Quantitative >= 165 recommended", "papers": "Comprehensive research statement and publication list", "references": "Three letters from leading computing researchers"},
        "source": "https://www.khoury.northeastern.edu/academics/graduate/phd-computer-science/"
      },
      {
        "title": "Doctor of Philosophy in Bioengineering (Nanomedicine & Therapeutics)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-01",
        "deadlineText": "January 1, 2027",
        "funding": "Doctoral Research Assistantships with $39,000 annual stipend and 100% tuition remission",
        "fee": "$100",
        "tuition": "$0 (Fully funded doctoral fellow)",
        "desc": "Pioneering translational engineering investigating targeted lipid nanoparticle drug delivery, cellular mechanics, neuro-engineering interfaces, and biomaterials at the Interdisciplinary Science and Engineering Complex (ISEC).",
        "requirements": {"gpa": "BS or MS in bioengineering, materials science, or chemical engineering with min. 3.5 GPA", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "GRE quantitative score >= 162", "papers": "Doctoral research prospectus", "references": "Three letters from engineering faculty"},
        "source": "https://bioe.northeastern.edu/academics/graduate-studies/phd-program/"
      },
      {
        "title": "Master of Science in Cybersecurity (Technical & Governance Tracks)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Khoury Dean's Merit Scholarships providing up to $15,000 total award plus six-month paid corporate co-op placement",
        "fee": "$100",
        "tuition": "$1,820/credit hour",
        "desc": "NSA-designated Center of Academic Excellence combining software security, network vulnerability forensics, hardware security, and embedded IoT security.",
        "requirements": {"gpa": "BS in computer science, computer engineering, or related STEM field with min. 3.2 GPA", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Not required", "papers": "Statement of technical objectives", "references": "Two letters of recommendation"},
        "source": "https://www.khoury.northeastern.edu/academics/graduate/ms-cybersecurity/"
      },
      {
        "title": "Master of Science in Data Science (Khoury & Engineering Joint)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Experiential Data Science Fellowships offering up to $12,000 tuition reduction plus paid corporate co-op",
        "fee": "$100",
        "tuition": "$1,820/credit hour",
        "desc": "Interdisciplinary curriculum mastering machine learning theory, high-dimensional statistical modeling, distributed systems (Spark/Hadoop), and causal data inference.",
        "requirements": {"gpa": "BS in quantitative discipline with min. 3.3 GPA", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Optional", "papers": "Statement of purpose and resume", "references": "Two academic recommendations"},
        "source": "https://www.khoury.northeastern.edu/academics/graduate/ms-data-science/"
      },
      {
        "title": "Bachelor of Science in Computer Science & Cognitive Psychology",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-01-01",
        "deadlineText": "January 1, 2027",
        "funding": "Northeastern University Honors Scholarships ranging from $15,000 to $28,000/year renewable",
        "fee": "$75",
        "tuition": "$62,500/year",
        "desc": "Combines human cognition, perceptual psychology, natural language processing, and deep neural networks with two six-month paid global co-op placements.",
        "requirements": {"gpa": "Top 5% high school class rank with AP calculus and computer science", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Common Application essay and Northeastern supplements", "references": "Two academic teacher recommendations"},
        "source": "https://www.khoury.northeastern.edu/academics/undergraduate/combined-majors/"
      },
      {
        "title": "Northeastern University Torch Scholars Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-01",
        "deadlineText": "January 1, 2027",
        "funding": "Full tuition, fees, room, board, and global co-op immersion expenses for all four to five undergraduate years ($85,000/year value; >$350,000 total award)",
        "fee": "$0",
        "tuition": "$0 (100% full-ride scholarship)",
        "desc": "Northeastern's landmark experiential scholarship dedicated to first-generation students who have overcome significant adversity and exhibit extraordinary leadership and resilience.",
        "requirements": {"gpa": "First-generation college applicant with nomination by community leader or educator", "ielts": "Exempt", "gre": "Exempt", "papers": "Torch Scholars portfolio, essays, and intensive finalist interview", "references": "Three letters of recommendation"},
        "source": "https://www.northeastern.edu/torch/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Joseph E. Aoun",
        "role": "President and Professor of Linguistics",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Joseph E. Aoun has served as the 7th President of Northeastern University since 2006, internationally renowned for formulating 'Humanics' and transforming higher education through experiential learning."
      },
      {
        "name": "Dr. Usama Fayyad",
        "role": "Executive Director of the Institute for Experiential AI and Professor of Computer Science",
        "department": "Khoury College of Computer Sciences",
        "subject": "computer-science",
        "bio": "Dr. Usama Fayyad is a data mining pioneer who served as the world's first Chief Data Officer at Yahoo!, researching machine learning, predictive big data models, and human-in-the-loop AI systems."
      },
      {
        "name": "Dr. Mansoor Amiji",
        "role": "University Distinguished Professor of Pharmaceutical Sciences and Chemical Engineering",
        "department": "Department of Pharmaceutical Sciences",
        "subject": "engineering",
        "bio": "Dr. Mansoor Amiji directs translational nanomedicine research, engineering targeted polymeric and lipid nanoparticles for nucleic acid delivery in cancer and cardiovascular diseases."
      }
    ]
  },

  # 4. Northern Arizona University (Row 877)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Northern Arizona University",
    "shortName": "Northern Arizona",
    "slug": "northern-arizona-university-flagstaff",
    "location": "Flagstaff, Arizona, United States",
    "website": "https://nau.edu",
    "sourceRow": 877,
    "stats": {"established": "1899", "students": "28,000+", "international": "4%", "faculty": "1,400+"},
    "heroSummary": "Northern Arizona University is a high-research public doctoral university situated 7,000 feet above sea level in Flagstaff, Arizona. Celebrated for forestry, climate science, planetary astronomy at Lowell Observatory, microbiology, and indigenous health disparities.",
    "academicOverview": "NAU features the College of the Environment, Forestry, and Natural Sciences, the Pathogen and Microbiome Institute (PMI), and the School of Informatics, Computing, and Cyber Systems. Research centers manage the 4,000-acre Centennial Forest and partner with the USGS Astrogeology Science Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core competency coursework (minimum 3.0 unweighted core GPA for guaranteed admission). Graduate admissions require an accredited bachelor's degree with 3.0 GPA, statement of purpose, and three letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Philosophy in Earth Sciences and Environmental Sustainability",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantships with $26,000 annual living stipend, full tuition waiver, and health coverage",
        "fee": "$65",
        "tuition": "$0 (Doctoral fellow funded)",
        "desc": "Interdisciplinary doctoral curriculum investigating Colorado Plateau hydrology, forest fire ecology, dendrochronology, carbon fluxes, and arid land climate adaptations.",
        "requirements": {"gpa": "BS or MS in forestry, geology, biology, or environmental science with min. 3.25 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Optional", "papers": "Doctoral research statement and writing sample", "references": "Three letters from research scientists"},
        "source": "https://nau.edu/ses/phd-earth-sciences-and-environmental-sustainability/"
      },
      {
        "title": "Doctor of Philosophy in Astronomy and Planetary Science",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NASA and Lowell Observatory Doctoral Fellowships providing $28,000 annual stipend and 100% tuition remission",
        "fee": "$65",
        "tuition": "$0 (Fully funded doctoral candidate)",
        "desc": "Conducted in partnership with Lowell Observatory, the Discovery Channel Telescope (DCT), and the USGS Astrogeology Science Center, studying exoplanet atmospheres, cometary ice physics, and Mars rover missions.",
        "requirements": {"gpa": "BS in astronomy, physics, or planetary science with min. 3.3 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Physics GRE recommended", "papers": "Planetary research prospectus", "references": "Three letters from astrophysics researchers"},
        "source": "https://nau.edu/astronomy-and-planetary-science/phd-program/"
      },
      {
        "title": "Doctor of Philosophy in Informatics and Computing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "SICCS Research Fellowships with $27,000 annual living stipend and tuition waiver",
        "fee": "$65",
        "tuition": "$0 (Fully funded)",
        "desc": "Focuses on ecological informatics, bio-computational modeling, cyber-physical sensor networks, remote sensing image processing, and secure distributed computing.",
        "requirements": {"gpa": "BS or MS in CS, data science, or engineering with min. 3.2 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Quantitative score 155+", "papers": "Statement of informatics research objectives", "references": "Three academic recommendations"},
        "source": "https://nau.edu/siccs/degrees/phd-informatics-and-computing/"
      },
      {
        "title": "Master of Science in Forestry",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of Forestry Graduate Assistantships providing $18,000 annual stipend and tuition scholarship",
        "fee": "$65",
        "tuition": "$580/credit hour (In-state) / $1,420/credit hour (Out-of-state)",
        "desc": "SAF-accredited leader in ponderosa pine silviculture, wildfire behavior modeling, forest economics, and indigenous tribal forestry co-management.",
        "requirements": {"gpa": "BS in forestry, biology, or natural resources with min. 3.0 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Not required", "papers": "Forestry research statement", "references": "Three letters from forestry faculty"},
        "source": "https://nau.edu/forestry/ms-forestry/"
      },
      {
        "title": "Bachelor of Science in Mechanical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "NAU Blue and Gold STEM Scholarships up to $9,000/year",
        "fee": "$50",
        "tuition": "$12,200/year (In-state) / $28,400/year (Out-of-state)",
        "desc": "ABET-accredited degree in thermodynamics, aerodynamics, computational fluid mechanics, biomechatronics, and autonomous vehicle design.",
        "requirements": {"gpa": "High school GPA >= 3.0 with precalculus and physics", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://nau.edu/mechanical-engineering/"
      },
      {
        "title": "Northern Arizona University President's Excellence Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition plus $2,000 annual research enrichment grant ($28,400/year value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "NAU's premier competitive scholarship awarded to extraordinary undergraduate scholars committed to environmental sustainability, scientific research, and civic leadership.",
        "requirements": {"gpa": "3.80 unweighted high school core GPA with ACT >= 29 or SAT >= 1350", "ielts": "Exempt", "gre": "Exempt", "papers": "President's Excellence competitive essay", "references": "Three letters of academic recommendation"},
        "source": "https://nau.edu/office-of-scholarships-and-financial-aid/presidents-excellence-award/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. José Luis Cruz Rivera",
        "role": "President and Professor of Electrical Engineering",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. José Luis Cruz Rivera serves as the 17th President of NAU, an electrical engineer specializing in signal processing, higher education access, and Hispanic student equity."
      },
      {
        "name": "Dr. Paul Keim",
        "role": "Regents' Professor and Executive Director of the Pathogen and Microbiome Institute",
        "department": "Pathogen and Microbiome Institute",
        "subject": "biology",
        "bio": "Dr. Paul Keim is a world authority in microbial genomics and pathogen forensics, who led the landmark genomic investigation identifying the 2001 Amerithrax anthrax strain."
      },
      {
        "name": "Dr. David Trilling",
        "role": "Professor and Department Chair of Astronomy and Planetary Science",
        "department": "Department of Astronomy and Planetary Science",
        "subject": "physics",
        "bio": "Dr. David Trilling conducts observational planetary astronomy investigating near-Earth asteroids, Kuiper Belt objects, and planetary system formation using space telescopes."
      }
    ]
  },

  # 5. Northern Illinois University (Row 878)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Northern Illinois University",
    "shortName": "Northern Illinois",
    "slug": "northern-illinois-university-dekalb",
    "location": "DeKalb, Illinois, United States",
    "website": "https://www.niu.edu",
    "sourceRow": 878,
    "stats": {"established": "1895", "students": "15,500+", "international": "5%", "faculty": "950+"},
    "heroSummary": "Northern Illinois University is a public Carnegie R2 doctoral research university located in DeKalb, Illinois, 65 miles west of Chicago. World-renowned for particle accelerator physics at Fermi National Accelerator Laboratory and Argonne National Laboratory.",
    "academicOverview": "NIU comprises the College of Liberal Arts and Sciences, College of Engineering and Engineering Technology (CEET), and the College of Business. Key centers include the Center for Secondary Analysis of Atomic and Nuclear Data and the Northern Illinois Center for Accelerator and Detector Development (NICADD).",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA (minimum 3.0 for guaranteed admission; test-free holistic review). Graduate admissions require an accredited bachelor's degree with 3.0 GPA, personal goals statement, and letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Philosophy in Physics (High Energy & Accelerator Physics)",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Fermilab and Argonne National Laboratory Joint Doctoral Fellowships with $28,000 annual living stipend and 100% tuition coverage",
        "fee": "$60",
        "tuition": "$0 (Fully funded doctoral fellow)",
        "desc": "Conducted in direct partnership with Fermilab and Argonne, researching superconducting radiofrequency (SRF) cavities, neutrino oscillations, Higgs boson physics, and muon g-2 experiments.",
        "requirements": {"gpa": "BS or MS in physics or mathematics with min. 3.25 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Physics GRE recommended", "papers": "High-energy physics research statement", "references": "Three letters from physics research mentors"},
        "source": "https://www.niu.edu/clas/physics/academics/graduate/phd.shtml"
      },
      {
        "title": "Doctor of Philosophy in Mechanical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "CEET Doctoral Research Assistantships with $24,000 annual stipend and full tuition waiver",
        "fee": "$60",
        "tuition": "$0 (Doctoral fellow funded)",
        "desc": "Advanced engineering research in microfluidics, autonomous robotics, additive metal manufacturing, vibro-acoustic structural monitoring, and sustainable thermal energy systems.",
        "requirements": {"gpa": "BS or MS in mechanical or aerospace engineering with min. 3.2 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE quantitative score >= 156", "papers": "Doctoral research statement", "references": "Three academic recommendations"},
        "source": "https://www.niu.edu/ceet/academics/mechanical/graduate/phd.shtml"
      },
      {
        "title": "Master of Science in Computer Science (Computational Intelligence & Software)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental Graduate Teaching Assistantships providing $14,000 annual stipend and tuition remission",
        "fee": "$60",
        "tuition": "$515/credit hour (In-state) / $880/credit hour (Out-of-state)",
        "desc": "Covers deep learning architectures, big data distributed systems, computer vision, network security protocols, and compiler construction.",
        "requirements": {"gpa": "BS in computer science or related STEM field with min. 3.0 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Not required", "papers": "Statement of technical objectives", "references": "Two faculty letters"},
        "source": "https://www.niu.edu/clas/computer-science/academics/graduate/ms.shtml"
      },
      {
        "title": "Master of Science in Accountancy (MAS)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "College of Business Dean's Fellowships up to $6,000 per year",
        "fee": "$60",
        "tuition": "$515/credit hour",
        "desc": "AACSB-accredited, nationally ranked accounting program with consistently high CPA exam pass rates, forensic auditing, and tax compliance.",
        "requirements": {"gpa": "Accredited bachelor's degree in business or accounting with min. 3.0 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE optional", "papers": "Career trajectory statement", "references": "Two recommendations"},
        "source": "https://www.niu.edu/business/academics/accountancy/graduate/mas.shtml"
      },
      {
        "title": "Bachelor of Science in Electrical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "CEET Engineering Merit Scholarships providing up to $5,000/year",
        "fee": "$40",
        "tuition": "$9,850/year (In-state) / $15,800/year (Out-of-state)",
        "desc": "ABET-accredited program covering digital signal processing, microelectronics, power transmission grids, RF communications, and FPGA digital logic.",
        "requirements": {"gpa": "High school GPA >= 3.0 with calculus and physics", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.niu.edu/ceet/academics/electrical/undergraduate/index.shtml"
      },
      {
        "title": "Northern Illinois University Presidential Scholars Award",
        "type": "Scholarship",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition, mandatory fees, and on-campus room/board ($24,000/year value across four years; $96,000 total award)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "NIU's premier competitive scholarship awarded to extraordinary incoming freshmen who exhibit remarkable intellectual curiosity, civic leadership, and research drive.",
        "requirements": {"gpa": "3.85 unweighted high school GPA and ACT >= 30 or SAT >= 1390", "ielts": "Exempt", "gre": "Exempt", "papers": "Presidential Scholars competition essay and interview", "references": "Three letters of academic endorsement"},
        "source": "https://www.niu.edu/financial-aid/types/scholarships/presidential.shtml"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Lisa C. Freeman",
        "role": "President and Professor of Biology",
        "department": "Office of the President",
        "subject": "biology",
        "bio": "Dr. Lisa C. Freeman serves as President of NIU, a veterinary pharmacologist who has championed federal laboratory collaborations, student mental health, and inclusive STEM access."
      },
      {
        "name": "Dr. Gerald Blazey",
        "role": "Vice President for Research and Innovation and Professor of Physics",
        "department": "Department of Physics",
        "subject": "physics",
        "bio": "Dr. Gerald Blazey is a distinguished high-energy experimental particle physicist who served as co-spokesperson of the DZero experiment at Fermilab's Tevatron collider."
      },
      {
        "name": "Dr. Swapan Chattopadhyay",
        "role": "Distinguished Professor of Physics and Director of Accelerator Science",
        "department": "Northern Illinois Center for Accelerator and Detector Development",
        "subject": "physics",
        "bio": "Dr. Swapan Chattopadhyay is an internationally celebrated accelerator physicist who has held leadership roles at Berkeley Lab, Jefferson Lab, and the Cockcroft Institute."
      }
    ]
  },

  # 6. Northern Kentucky University (Row 879)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Northern Kentucky University",
    "shortName": "Northern Kentucky",
    "slug": "northern-kentucky-university-highland-heights",
    "location": "Highland Heights, Kentucky, United States",
    "website": "https://www.nku.edu",
    "sourceRow": 879,
    "stats": {"established": "1968", "students": "15,000+", "international": "4%", "faculty": "900+"},
    "heroSummary": "Northern Kentucky University is a public metropolitan university in Highland Heights, Kentucky, just seven miles southeast of downtown Cincinnati. Renowned for cybersecurity, informatics, health innovation, business, and law.",
    "academicOverview": "NKU houses the College of Informatics, the Salmon P. Chase College of Law, and the College of Health and Human Services. The College of Informatics is housed in the $50M Griffin Hall, featuring the Digitorium and a full cyber threat operations center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school unweighted GPA (minimum 2.75 for standard admission; test-optional). Graduate degree programs require an accredited bachelor's degree with 2.75 to 3.0 GPA, personal statement, and letters of recommendation.",
    "opps": [
      {
        "title": "Master of Science in Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "National Cyber Workforce Fellowships offering up to $8,000 per academic year",
        "fee": "$40",
        "tuition": "$585/credit hour (In-state) / $780/credit hour (Out-of-state)",
        "desc": "NSA-designated Center of Academic Excellence in Cyber Defense utilizing Griffin Hall's virtual cyber range to study penetration testing, cloud forensics, and malware reverse engineering.",
        "requirements": {"gpa": "Bachelor's degree in CS, IT, or related STEM field with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Statement of cybersecurity purpose", "references": "Two professional letters"},
        "source": "https://www.nku.edu/academics/informatics/programs/graduate/mscybersecurity.html"
      },
      {
        "title": "Juris Doctor (J.D.) in Law and Technology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Chase College of Law Dean's Merit Scholarships providing up to full tuition remission",
        "fee": "$40",
        "tuition": "$22,500/year (In-state) / $32,400/year (Out-of-state)",
        "desc": "ABA-accredited legal curriculum at the Salmon P. Chase College of Law, focusing on digital privacy regulations, artificial intelligence liability, patent prosecution, and digital evidence.",
        "requirements": {"gpa": "Undergraduate GPA >= 3.2 and LSAT score >= 153", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "Accepted", "papers": "Personal statement and legal resume", "references": "Two academic recommendations"},
        "source": "https://chaselaw.nku.edu/admissions.html"
      },
      {
        "title": "Master of Science in Health Informatics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Health Innovation Center Research Assistantships with $12,000 annual stipend",
        "fee": "$40",
        "tuition": "$585/credit hour",
        "desc": "CAHIIM-accredited program combining clinical analytics, electronic medical records governance, healthcare cybersecurity, and population health data visualization.",
        "requirements": {"gpa": "Accredited bachelor's degree with min. 2.75 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Statement of health informatics goals", "references": "Two recommendations"},
        "source": "https://www.nku.edu/academics/informatics/programs/graduate/mshi.html"
      },
      {
        "title": "Bachelor of Science in Mechatronics Engineering Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Haas Foundation and Advanced Manufacturing Scholarships up to $5,000/year",
        "fee": "$40",
        "tuition": "$10,500/year (In-state) / $21,000/year (Out-of-state)",
        "desc": "Hands-on instruction in industrial robotics, automated manufacturing systems, programmable logic controllers (PLCs), and sensor instrumentation.",
        "requirements": {"gpa": "High school GPA >= 2.75 with algebra II", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.nku.edu/academics/artsci/programs/undergraduate/mechatronics.html"
      },
      {
        "title": "Bachelor of Science in Data Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "College of Informatics Merit Grants providing up to $4,500/year",
        "fee": "$40",
        "tuition": "$10,500/year (In-state) / $21,000/year (Out-of-state)",
        "desc": "Mastery of Python data wrangling, machine learning models, statistical hypothesis testing, and big data visualization in the Digitorium.",
        "requirements": {"gpa": "2.75 high school GPA with strong math preparation", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of purpose", "references": "One recommendation"},
        "source": "https://www.nku.edu/academics/informatics/programs/undergraduate/datascience.html"
      },
      {
        "title": "NKU Presidential Honors Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition plus $2,500 annual experiential research stipend ($23,500/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "NKU's highest undergraduate scholarship awarded to incoming freshmen who embody academic excellence, innovative problem solving, and public service leadership.",
        "requirements": {"gpa": "3.80 unweighted high school GPA and ACT score >= 28 or SAT >= 1310", "ielts": "Exempt", "gre": "Exempt", "papers": "Presidential Fellowship competition essay and interview", "references": "Three letters of recommendation"},
        "source": "https://www.nku.edu/admissions/scholarships.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Cady Short-Thompson",
        "role": "President of Northern Kentucky University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Cady Short-Thompson serves as the 7th President of NKU, an expert in communication studies, political rhetoric, and metropolitan university workforce alignment."
      },
      {
        "name": "Dr. Kevin Kirby",
        "role": "Dean of the College of Informatics and Professor of Computer Science",
        "department": "College of Informatics",
        "subject": "computer-science",
        "bio": "Dr. Kevin Kirby conducts research in computational intelligence, neural networks, biological computation models, and interdisciplinary informatics pedagogy."
      },
      {
        "name": "Dr. James Walden",
        "role": "Professor of Computer Science and Director of the Center for Information Security",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. James Walden investigates software vulnerability economics, automated source code security auditing, and web application threat defense."
      }
    ]
  },

  # 7. Northern Michigan University (Row 880)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Northern Michigan University",
    "shortName": "Northern Michigan",
    "slug": "northern-michigan-university-marquette",
    "location": "Marquette, Michigan, United States",
    "website": "https://nmu.edu",
    "sourceRow": 880,
    "stats": {"established": "1899", "students": "7,000+", "international": "3%", "faculty": "380+"},
    "heroSummary": "Northern Michigan University is a comprehensive public university situated on the shores of Lake Superior in Marquette, Michigan. Renowned for environmental science, outdoor recreation leadership, frozen forensic anthropology, medicinal plant chemistry, and wildlife biology.",
    "academicOverview": "NMU houses the College of Arts and Sciences and College of Technology and Occupational Sciences. World-class facilities include the FROST (Forensic Research Outdoor Station) facility, the native cold-climate forest test plots, and the Superior Dome.",
    "researchAdmissions": "Undergraduate admissions evaluate high school unweighted GPA (minimum 2.25; test-blind holistic review). Graduate degree programs require an accredited bachelor's degree with 3.0 GPA, personal goals statement, and letters of recommendation.",
    "opps": [
      {
        "title": "Bachelor of Science in Medicinal Plant Chemistry",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Shimadzu Analytical Excellence Grants providing up to $5,000/year",
        "fee": "$35",
        "tuition": "$12,400/year (In-state) / $18,200/year (Out-of-state)",
        "desc": "The first accredited four-year undergraduate degree in the nation dedicated to the chemical analysis, gas chromatography (GC-MS), and extraction of botanical medicines.",
        "requirements": {"gpa": "High school GPA >= 2.75 with strong chemistry preparation", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://nmu.edu/chemistry/medicinal-plant-chemistry"
      },
      {
        "title": "Master of Science in Biology (Forensic Anthropology & Ecology)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "FROST Research Assistantships with $14,000 annual living stipend and full tuition remission",
        "fee": "$35",
        "tuition": "$590/credit hour",
        "desc": "Conducted at the Forensic Research Outdoor Station (FROST), the world's only cold-climate human taphonomy facility studying cold-environment postmortem decay.",
        "requirements": {"gpa": "BS in biology, anthropology, or chemistry with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Forensic research statement and ethics agreement", "references": "Three letters from laboratory mentors"},
        "source": "https://nmu.edu/biology/graduate"
      },
      {
        "title": "Bachelor of Science in Fisheries and Wildlife Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Lake Superior Conservation Grants up to $4,000/year",
        "fee": "$35",
        "tuition": "$12,400/year (In-state) / $18,200/year (Out-of-state)",
        "desc": "Field-intensive curriculum along Lake Superior studying cold-water limnology, boreal forest mammal tracking, wetlands restoration, and wildlife telemetry.",
        "requirements": {"gpa": "High school GPA >= 2.5 with biology coursework", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of environmental interests", "references": "One recommendation"},
        "source": "https://nmu.edu/biology/fisheries-wildlife"
      },
      {
        "title": "Master of Science in Applied Behavior Analysis",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Upper Peninsula Autism Network Fellowships providing up to $6,000",
        "fee": "$35",
        "tuition": "$590/credit hour",
        "desc": "ABAI-verified course sequence preparing behavior analysts in developmental disability clinical interventions, school-based therapies, and experimental behavior analysis.",
        "requirements": {"gpa": "2.75 minimum undergraduate GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://nmu.edu/psychologicalscience/graduate-programs"
      },
      {
        "title": "Bachelor of Science in Outdoor Recreation Leadership and Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "North Country Trail Leadership Grants up to $3,500/year",
        "fee": "$35",
        "tuition": "$12,400/year (In-state) / $18,200/year (Out-of-state)",
        "desc": "Combines wilderness expeditions across Michigan's Upper Peninsula with outdoor risk management, eco-tourism operations, and natural resources park administration.",
        "requirements": {"gpa": "2.25 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal essay", "references": "One recommendation"},
        "source": "https://nmu.edu/hper/outdoor-recreation"
      },
      {
        "title": "Northern Michigan University Harden Presidential Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition plus on-campus room and board ($24,000/year value across four years)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "NMU's most prestigious merit award granted to extraordinary incoming freshmen demonstrating remarkable academic achievement, outdoor leadership, and community service.",
        "requirements": {"gpa": "3.80 unweighted high school GPA and ACT >= 28 or SAT >= 1310", "ielts": "Exempt", "gre": "Exempt", "papers": "Harden Fellowship competitive essay and interview", "references": "Three letters of academic endorsement"},
        "source": "https://nmu.edu/admissions/freshman-scholarships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Brock Tessman",
        "role": "President of Northern Michigan University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Brock Tessman serves as President of NMU, a political scientist specializing in international relations, strategic forecasting, and rural public university vitality."
      },
      {
        "name": "Dr. Lesley Putman",
        "role": "Professor of Chemistry",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Lesley Putman is a plant biochemist investigating phytoremediation of industrial environmental pollutants, plant secondary metabolites, and medicinal botanical compounds."
      },
      {
        "name": "Dr. Jill Leonard",
        "role": "Professor and Department Head of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Jill Leonard is a fish physiologist who investigates migratory energetics, cold-water stress adaptations in Lake Superior trout, and aquatic conservation biology."
      }
    ]
  },

  # 8. Northern New Mexico College (Row 881)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Northern New Mexico College",
    "shortName": "Northern New Mexico",
    "slug": "northern-new-mexico-college-espanola",
    "location": "Española, New Mexico, United States",
    "website": "https://nnmc.edu",
    "sourceRow": 881,
    "stats": {"established": "1909", "students": "1,300+", "international": "2%", "faculty": "90+"},
    "heroSummary": "Northern New Mexico College is a public Hispanic-Serving Institution (HSI) and Native American-Serving Nontribal Institution (NASNTI) in Española, New Mexico. Known for electromechanical engineering technology, environmental science, nursing, and Spanish colonial arts.",
    "academicOverview": "Northern New Mexico College features the Department of Engineering and Technology and the Department of Nursing and Health Sciences. Maintains strategic research and workforce alliances with Los Alamos National Laboratory (LANL) and the surrounding Eight Northern Indian Pueblos.",
    "researchAdmissions": "Northern New Mexico College maintains an open-door admissions policy for all high school graduates or GED recipients. Bachelor of Engineering and Registered Nursing programs require prerequisite mathematics and science competency benchmarks.",
    "opps": [
      {
        "title": "Bachelor of Engineering in Information Engineering Technology (Cybersecurity & LANL Co-op)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Los Alamos National Laboratory (LANL) Undergraduate Co-op Fellowships providing full tuition and $22/hour research internships",
        "fee": "$0",
        "tuition": "$5,200/year (In-state) / $14,200/year (Out-of-state)",
        "desc": "ABET-accredited degree in secure network administration, cloud infrastructure, SCADA control security, and direct national laboratory clearance pathways.",
        "requirements": {"gpa": "High school GPA >= 2.5 with college algebra readiness", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Technical statement of purpose", "references": "One recommendation"},
        "source": "https://nnmc.edu/home/academics/schools-departments/engineering-technology/iet-program/"
      },
      {
        "title": "Bachelor of Engineering in Electromechanical Engineering Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Department of Energy Minority Serving Institution Grants up to $5,000/year",
        "fee": "$0",
        "tuition": "$5,200/year (In-state) / $14,200/year (Out-of-state)",
        "desc": "Hands-on instruction in industrial robotics, solar photovoltaics, programmable microcontrollers, mechatronics circuits, and computer-aided drafting (CAD).",
        "requirements": {"gpa": "2.5 high school GPA with physics and precalculus", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Personal essay", "references": "One recommendation"},
        "source": "https://nnmc.edu/home/academics/schools-departments/engineering-technology/emet-program/"
      },
      {
        "title": "Bachelor of Science in Environmental Science",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Rio Grande Watershed Stewardship Grants of $3,500/year",
        "fee": "$0",
        "tuition": "$5,200/year (In-state) / $14,200/year (Out-of-state)",
        "desc": "Fieldwork-based curriculum along the Rio Chama and Rio Grande investigating acequia water hydrology, arid soil ecology, and forest wildfire regeneration.",
        "requirements": {"gpa": "2.0 minimum high school GPA", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Statement of environmental interests", "references": "One recommendation"},
        "source": "https://nnmc.edu/home/academics/schools-departments/biology-chemistry-environmental-sciences/"
      },
      {
        "title": "Bachelor of Science in Nursing (RN to BSN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "New Mexico Rural Health Nursing Grants providing up to $4,000/year",
        "fee": "$0",
        "tuition": "$5,200/year (In-state) / $14,200/year (Out-of-state)",
        "desc": "CCNE-accredited nursing completion degree focusing on rural and tribal population health, medical informatics, and community health leadership.",
        "requirements": {"gpa": "Active RN license and accredited Associate Degree in Nursing with min. 2.5 GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Nursing portfolio", "references": "One clinical supervisor reference"},
        "source": "https://nnmc.edu/home/academics/schools-departments/nursing-health-sciences/"
      },
      {
        "title": "Bachelor of Integrated Studies (Pueblo Indian Studies & Southwest Heritage)",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-05-15",
        "deadlineText": "May 15, 2027",
        "funding": "Northern New Mexico Heritage Scholarships of $3,000/year",
        "fee": "$0",
        "tuition": "$5,200/year (In-state) / $14,200/year (Out-of-state)",
        "desc": "Interdisciplinary curriculum exploring Tewa and Tiwa cultural heritage, Southwestern colonial history, traditional Spanish tinwork, and regional water sovereignty.",
        "requirements": {"gpa": "High school diploma or GED", "ielts": "English proficiency", "gre": "Exempt", "papers": "Cultural heritage statement", "references": "One recommendation"},
        "source": "https://nnmc.edu/home/academics/schools-departments/humanities-social-sciences/"
      },
      {
        "title": "Northern New Mexico College President's Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition and registration fees ($5,200/year value) renewable for four undergraduate academic years",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "NNMC's highest honor awarded to incoming scholars who demonstrate remarkable academic talent and dedication to the cultural and economic vitality of Northern New Mexico.",
        "requirements": {"gpa": "3.50 high school GPA and leadership portfolio", "ielts": "Exempt", "gre": "Exempt", "papers": "President's Fellowship essay", "references": "Two recommendations from educators"},
        "source": "https://nnmc.edu/home/financial-aid/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Héctor Balderas",
        "role": "President of Northern New Mexico College",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Héctor Balderas serves as President of NNMC, former Attorney General and State Auditor of New Mexico, championing educational access and rural workforce infrastructure."
      },
      {
        "name": "Dr. Sadia Ahmed",
        "role": "Chair and Associate Professor of Engineering and Technology",
        "department": "Department of Engineering and Technology",
        "subject": "engineering",
        "bio": "Dr. Sadia Ahmed directs accredited engineering technology curricula, specializing in power systems, microcontroller design, and national laboratory workforce pipelines."
      },
      {
        "name": "Dr. Mario Izaguirre-Sierra",
        "role": "Associate Professor of Biology",
        "department": "Department of Biology, Chemistry, and Environmental Sciences",
        "subject": "biology",
        "bio": "Dr. Mario Izaguirre-Sierra is a biomedical researcher investigating intracellular signaling, cellular transport mechanisms, and undergraduate laboratory science mentorship."
      }
    ]
  }
]

print(f"Part 1 Chunk 1 loaded: {len(chunk1)} USA universities")
