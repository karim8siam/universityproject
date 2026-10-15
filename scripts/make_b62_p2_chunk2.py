# scripts/make_b62_p2_chunk2.py
# Batch 62 Part 2 Chunk 2: Universities 24 to 30

chunk2 = [
  # 24. North Carolina Central University (Row 865)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "North Carolina Central University",
    "shortName": "NCCU",
    "slug": "north-carolina-central-university-durham",
    "location": "Durham, North Carolina, United States",
    "website": "https://www.nccu.edu",
    "sourceRow": 865,
    "stats": {"established": "1910", "students": "8,000+", "international": "3%", "faculty": "550+"},
    "heroSummary": "North Carolina Central University is a premier public Historically Black University (HBCU) in Durham, North Carolina, and part of the Research Triangle. Renowned for biomedical discovery, law, pharmaceutical sciences, and jazz studies.",
    "academicOverview": "NCCU features the Julius L. Chambers Biomedical/Biotechnology Research Institute (BBRI), the Biomanufacturing Research Institute and Technology Enterprise (BRITE), and the School of Law. It is a national leader in addressing health disparities and biomanufacturing workforce training.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5) under holistic test-optional review. Graduate programs in pharmaceutical sciences, biology, and law require an accredited bachelor's degree with 3.0 GPA, statement of purpose, and recommendation letters.",
    "opps": [
      {
        "title": "Master of Science in Pharmaceutical Sciences (Biomanufacturing)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "BRITE Golden LEAF Graduate Fellowships providing full tuition waiver and $20,000 annual living stipend",
        "fee": "$50",
        "tuition": "$5,100/year (In-state) / $18,200/year (Out-of-state)",
        "desc": "Conducted at the state-of-the-art BRITE facility in Research Triangle Park, training researchers in protein purification, bioreactor fermentation, drug design, and analytical biochemistry.",
        "requirements": {"gpa": "BS in chemistry, biology, pharmacy, or engineering with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Pharmaceutical research statement", "references": "Three letters from science faculty"},
        "source": "https://www.nccu.edu/brite/academic-programs/graduate-programs"
      },
      {
        "title": "Juris Doctor (J.D.) in Civil Rights and Health Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "School of Law Dean's Merit Scholarships providing up to full tuition remission",
        "fee": "$50",
        "tuition": "$19,500/year (In-state) / $41,200/year (Out-of-state)",
        "desc": "ABA-accredited legal education dedicated to social justice, public interest advocacy, healthcare jurisprudence, and community economic development.",
        "requirements": {"gpa": "Undergraduate GPA >= 3.2 and LSAT score >= 152", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "Accepted", "papers": "Personal statement and legal resume", "references": "Two academic recommendations"},
        "source": "https://law.nccu.edu/admissions/"
      },
      {
        "title": "Doctor of Philosophy in Integrated Biosciences",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NIH-funded research fellowships with $28,000 annual living stipend and 100% tuition remission",
        "fee": "$50",
        "tuition": "$0 (Fully funded doctoral candidate)",
        "desc": "Advanced interdisciplinary doctoral research investigating health disparities in cancer biology, neurodegenerative diseases, cardiovascular pharmacology, and environmental toxicology.",
        "requirements": {"gpa": "BS or MS in biological sciences or biochemistry with min. 3.25 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Quantitative >= 155", "papers": "Detailed research prospectus in biosciences", "references": "Three letters from laboratory mentors"},
        "source": "https://www.nccu.edu/bbri/academics/phd-integrated-biosciences"
      },
      {
        "title": "Master of Science in Information Science (Cybersecurity & Health Informatics)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "School of Library and Information Sciences Graduate Assistantships of $10,000/year",
        "fee": "$50",
        "tuition": "$5,100/year (In-state) / $18,200/year (Out-of-state)",
        "desc": "ALA-accredited curriculum covering electronic medical record systems, network intrusion detection, database systems, and data privacy law.",
        "requirements": {"gpa": "Accredited bachelor's degree with min. 2.75 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Statement of purpose", "references": "Two recommendations"},
        "source": "https://www.nccu.edu/slis/academics/master-information-science"
      },
      {
        "title": "Bachelor of Science in Biomedical Sciences",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Chancellor's Science Scholars Grants up to $8,000/year",
        "fee": "$50",
        "tuition": "$6,500/year (In-state) / $19,800/year (Out-of-state)",
        "desc": "Rigorous undergraduate pre-medical training in human physiology, genetics, organic chemistry, histology, and cellular biochemistry.",
        "requirements": {"gpa": "High school GPA >= 3.2 with chemistry and biology", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "Two teacher recommendations"},
        "source": "https://www.nccu.edu/college-health-and-sciences/biological-and-biomedical-sciences"
      },
      {
        "title": "North Carolina Central University Cheatham-White Scholars Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition, housing, meal plan, laptop, and $2,000 study abroad stipend ($28,000/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "The most distinguished competitive undergraduate fellowship at NCCU, recognizing exceptional academic scholars dedicated to community leadership and ethical service.",
        "requirements": {"gpa": "3.80 unweighted high school GPA and ACT >= 28 or SAT >= 1280", "ielts": "Exempt", "gre": "Exempt", "papers": "Cheatham-White competitive essay and leadership portfolio", "references": "Three letters of academic recommendation"},
        "source": "https://www.nccu.edu/admissions/financial-aid/cheatham-white-scholarship"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Karrie G. Dixon",
        "role": "Chancellor of North Carolina Central University",
        "department": "Office of the Chancellor",
        "subject": "social-sciences",
        "bio": "Dr. Karrie G. Dixon serves as the 13th Chancellor of NCCU, bringing extensive leadership in higher education governance, academic program expansion, and student success."
      },
      {
        "name": "Dr. Deepak Kumar",
        "role": "Director of BBRI and Professor of Pharmaceutical Sciences",
        "department": "Julius L. Chambers Biomedical/Biotechnology Research Institute",
        "subject": "biology",
        "bio": "Dr. Deepak Kumar conducts internationally recognized research in cancer health disparities, prostate cancer molecular genomics, and microRNA diagnostic biomarkers."
      },
      {
        "name": "Dr. Hernan Navarro",
        "role": "Director of BRITE and Professor of Medicinal Chemistry",
        "department": "Biomanufacturing Research Institute and Technology Enterprise",
        "subject": "chemistry",
        "bio": "Dr. Hernan Navarro is an expert in small-molecule drug discovery, opioid receptor pharmacology, and preclinical high-throughput chemical screening."
      }
    ]
  },

  # 25. North Carolina Wesleyan University (Row 868)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "North Carolina Wesleyan University",
    "shortName": "NC Wesleyan",
    "slug": "north-carolina-wesleyan-university-rocky-mount",
    "location": "Rocky Mount, North Carolina, United States",
    "website": "https://ncwu.edu",
    "sourceRow": 868,
    "stats": {"established": "1956", "students": "2,000+", "international": "8%", "faculty": "130+"},
    "heroSummary": "North Carolina Wesleyan University is a private Methodist liberal arts institution in Rocky Mount, North Carolina. Known for criminal justice, biomedical sciences, exercise science, business administration, and veteran education.",
    "academicOverview": "NC Wesleyan features the School of Mathematics and Sciences, School of Business, and School of Social Sciences. Key facilities include the Thomas A. Betts Jr. Pavilion, Dunn Center for The Performing Arts, and the modern Health and Movement Science laboratories.",
    "researchAdmissions": "Undergraduate admissions evaluate high school transcripts (minimum 2.5 unweighted GPA) under holistic test-optional review. Graduate programs in criminal justice and strategic leadership require an accredited bachelor's degree with 2.75 GPA.",
    "opps": [
      {
        "title": "Master of Science in Criminal Justice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Law Enforcement Foundation Grants providing up to $4,000 total program award",
        "fee": "$35",
        "tuition": "$495/credit hour",
        "desc": "Advanced study in forensic behavioral science, police organization leadership, constitutional criminal jurisprudence, and crime policy evaluation.",
        "requirements": {"gpa": "Accredited bachelor's degree with min. 2.75 GPA in criminal justice or social sciences", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Professional resume and statement of intent", "references": "Two professional letters"},
        "source": "https://ncwu.edu/academics/graduate/ms-criminal-justice/"
      },
      {
        "title": "Master of Science in Strategic Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Corporate Leadership Fellowships of $3,500 per academic year",
        "fee": "$35",
        "tuition": "$495/credit hour",
        "desc": "Prepares organizational managers in strategic crisis communication, human resource analytics, corporate governance, and change management.",
        "requirements": {"gpa": "Bachelor's degree with min. 2.5 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Leadership philosophy essay", "references": "Two recommendations"},
        "source": "https://ncwu.edu/academics/graduate/ms-strategic-leadership/"
      },
      {
        "title": "Bachelor of Science in Biomedical Sciences",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Bishop Science Scholars Awards providing up to $8,000/year",
        "fee": "$25",
        "tuition": "$34,500/year",
        "desc": "Comprehensive pre-medical curriculum covering mammalian anatomy, organic synthesis, medical genetics, biochemistry, and human pathology.",
        "requirements": {"gpa": "High school GPA >= 3.0 with chemistry and biology", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://ncwu.edu/academics/undergraduate/biomedical-sciences/"
      },
      {
        "title": "Bachelor of Science in Exercise Science",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Battling Bishop Athletic & Academic Grants up to $6,500/year",
        "fee": "$25",
        "tuition": "$34,500/year",
        "desc": "Instruction in exercise physiology, kinesiology, cardiovascular rehabilitation, and sports nutrition in the Movement Science lab.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Career interest essay", "references": "One recommendation"},
        "source": "https://ncwu.edu/academics/undergraduate/exercise-science/"
      },
      {
        "title": "Bachelor of Science in Computer Information Systems (Cybersecurity)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Technology Advancement Grants providing up to $5,000/year",
        "fee": "$25",
        "tuition": "$34,500/year",
        "desc": "Hands-on mastery of relational database design, network perimeter defense, ethical penetration testing, and IT enterprise management.",
        "requirements": {"gpa": "2.5 high school GPA with algebra II", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of purpose", "references": "One recommendation"},
        "source": "https://ncwu.edu/academics/undergraduate/computer-information-systems/"
      },
      {
        "title": "North Carolina Wesleyan University Heritage Full Tuition Scholarship",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition scholarship ($34,500/year value) renewable for four undergraduate academic years ($138,000 total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Prestigious award honoring freshmen who embody intellectual rigor, Christian ethical values, and dynamic leadership in community service.",
        "requirements": {"gpa": "3.80 unweighted high school GPA and ACT score >= 27 or SAT >= 1280", "ielts": "Exempt", "gre": "Exempt", "papers": "Heritage Scholarship competitive essay and interview", "references": "Three letters of recommendation"},
        "source": "https://ncwu.edu/admissions/financial-aid/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Evan D. Duff",
        "role": "President of North Carolina Wesleyan University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Evan D. Duff has served as President of NC Wesleyan since 2019, overseeing its transition from college to university and expanding healthcare and graduate degrees."
      },
      {
        "name": "Dr. Brent Dozier",
        "role": "Associate Professor of Mathematics and Science",
        "department": "School of Mathematics and Sciences",
        "subject": "mathematics",
        "bio": "Dr. Brent Dozier conducts research in applied statistical modeling, mathematical pedagogy, and undergraduate STEM curriculum design."
      },
      {
        "name": "Dr. Carl R. Lewis",
        "role": "Professor of Criminal Justice",
        "department": "School of Social Sciences",
        "subject": "social-sciences",
        "bio": "Dr. Carl Lewis is an expert in juvenile justice reform, criminal law jurisprudence, forensic investigative methodologies, and community policing paradigms."
      }
    ]
  },

  # 26. North Central University (Row 869)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "North Central University",
    "shortName": "North Central",
    "slug": "north-central-university-minneapolis",
    "location": "Minneapolis, Minnesota, United States",
    "website": "https://www.northcentral.edu",
    "sourceRow": 869,
    "stats": {"established": "1930", "students": "1,100+", "international": "3%", "faculty": "90+"},
    "heroSummary": "North Central University is a private Christian university in downtown Minneapolis, Minnesota, affiliated with the Assemblies of God. Renowned for music and worship arts, pastoral leadership, business administration, and urban ministry.",
    "academicOverview": "North Central operates the College of Fine Arts, College of Church Leadership, and the College of Arts and Sciences. Situated in the heart of downtown Minneapolis, the campus provides extensive urban non-profit and music recording studio partnerships.",
    "researchAdmissions": "Admissions require high school graduation or GED (minimum 2.5 GPA), statement of personal Christian faith and vocational aspirations, and pastoral or character recommendations.",
    "opps": [
      {
        "title": "Master of Arts in Strategic Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Urban Ministry Leadership Grants providing up to $4,500/year",
        "fee": "$35",
        "tuition": "$515/credit hour",
        "desc": "Prepares leaders for non-profit organizations, cross-cultural missions, corporate administration, and church networks in organizational ethics and conflict management.",
        "requirements": {"gpa": "Accredited bachelor's degree with min. 2.75 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Leadership goals statement", "references": "Two recommendations including pastoral reference"},
        "source": "https://www.northcentral.edu/graduate-programs/strategic-leadership/"
      },
      {
        "title": "Bachelor of Science in Music Performance & Recording Arts",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Fine Arts Talent Scholarships awarding up to $8,000/year",
        "fee": "$25",
        "tuition": "$28,500/year",
        "desc": "Comprehensive training in classical and contemporary musicianship, digital audio workstation (DAW) recording, audio mixing, and commercial production.",
        "requirements": {"gpa": "2.5 high school GPA and audition submission (audio/video or on-campus)", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Artistic resume", "references": "One music teacher reference"},
        "source": "https://www.northcentral.edu/undergraduate-majors/music/"
      },
      {
        "title": "Bachelor of Science in Pastoral Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Assemblies of God Ministry Endowed Grants of $5,000/year",
        "fee": "$25",
        "tuition": "$28,500/year",
        "desc": "Develops pastoral competencies in Greek and Hebrew exegesis, sermon preparation, counseling intervention, and urban church planting.",
        "requirements": {"gpa": "2.25 minimum high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal testimony essay", "references": "Pastoral recommendation"},
        "source": "https://www.northcentral.edu/undergraduate-majors/pastoral-leadership/"
      },
      {
        "title": "Bachelor of Science in Business Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Downtown Business Leadership Scholarships up to $6,000/year",
        "fee": "$25",
        "tuition": "$28,500/year",
        "desc": "Instruction in corporate financial analysis, digital marketing, business law, entrepreneurship, and ethical business decision frameworks.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of purpose", "references": "One recommendation"},
        "source": "https://www.northcentral.edu/undergraduate-majors/business-administration/"
      },
      {
        "title": "Bachelor of Science in Computer Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Twin Cities Tech Scholars Grants of $4,500/year",
        "fee": "$25",
        "tuition": "$28,500/year",
        "desc": "Covers software development in modern object-oriented languages, data structures, network security, database engineering, and web architecture.",
        "requirements": {"gpa": "2.5 high school GPA with algebra II", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of technical intent", "references": "One recommendation"},
        "source": "https://www.northcentral.edu/undergraduate-majors/computer-science/"
      },
      {
        "title": "North Central University Presidential Honors Fellowship",
        "type": "Fellowship",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition scholarship ($28,500/year value) renewable across four undergraduate years ($114,000 total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Premier honors award granted to incoming freshmen of exceptional spiritual commitment, artistic or academic excellence, and urban community leadership.",
        "requirements": {"gpa": "3.80 unweighted high school GPA and ACT >= 27 or SAT >= 1280", "ielts": "Exempt", "gre": "Exempt", "papers": "Presidential Honors essay and personal interview", "references": "Pastoral reference and two academic letters"},
        "source": "https://www.northcentral.edu/admissions-aid/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Scott Hagan",
        "role": "President of North Central University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Scott Hagan serves as the 7th President of North Central University, a respected author and speaker addressing organizational leadership and generational ministry."
      },
      {
        "name": "Dr. Allen Tennison",
        "role": "Dean of the College of Church Leadership and Professor of Theology",
        "department": "College of Church Leadership",
        "subject": "social-sciences",
        "bio": "Dr. Allen Tennison conducts theological research in Pentecostal history, ecumenical dialogues, historical theology, and biblical pneumatology."
      },
      {
        "name": "Prof. Larry Bach",
        "role": "Dean of the College of Fine Arts and Professor of Music",
        "department": "College of Fine Arts",
        "subject": "arts-design",
        "bio": "Prof. Larry Bach is an acclaimed choral conductor and music producer who has directed collegiate ensembles across North America and Europe."
      }
    ]
  },

  # 27. North Dakota State University (Row 870)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "North Dakota State University",
    "shortName": "NDSU",
    "slug": "north-dakota-state-university-fargo",
    "location": "Fargo, North Dakota, United States",
    "website": "https://www.ndsu.edu",
    "sourceRow": 870,
    "stats": {"established": "1890", "students": "12,000+", "international": "7%", "faculty": "850+"},
    "heroSummary": "North Dakota State University is a premier public land-grant Carnegie R1 doctoral research university in Fargo, North Dakota. World-renowned for agricultural science, coatings and polymeric materials, pharmacy, precision agriculture, and civil engineering.",
    "academicOverview": "NDSU comprises the College of Agriculture, Food Systems, and Natural Resources, College of Engineering, and the Department of Coatings and Polymeric Materials. It operates the Northern Crops Institute and over 18,000 acres of agricultural research land.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA (minimum 2.75 automatic admission) with strong math and science coursework. Graduate degree programs require an accredited bachelor's degree with 3.0 GPA, statement of purpose, and three letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Philosophy in Coatings and Polymeric Materials",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantships with $28,000 annual living stipend and 100% tuition coverage",
        "fee": "$35",
        "tuition": "$0 (Doctoral fellow funded)",
        "desc": "A globally celebrated polymer research department investigating bio-based sustainable resins, anti-corrosion protective coatings, nanocomposites, and self-healing polymers.",
        "requirements": {"gpa": "BS or MS in chemistry, polymer science, or chemical engineering with min. 3.25 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Quantitative >= 156 recommended", "papers": "Polymer research prospectus", "references": "Three letters from chemistry faculty"},
        "source": "https://www.ndsu.edu/cpm/graduate_programs/"
      },
      {
        "title": "Doctor of Philosophy in Agricultural and Biosystems Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "USDA-NIFA and State Agricultural Experiment Station Fellowships with $26,000 annual stipend and tuition remission",
        "fee": "$35",
        "tuition": "$0 (Fully funded doctoral candidate)",
        "desc": "Cutting-edge research in precision autonomous farm robotics, hyperspectral drone crop modeling, grain drying kinetics, and subsurface agricultural tile drainage hydrology.",
        "requirements": {"gpa": "BS or MS in engineering with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE quantitative score >= 155", "papers": "Statement of agricultural engineering research", "references": "Three letters of recommendation"},
        "source": "https://www.ndsu.edu/aben/graduate_programs/"
      },
      {
        "title": "Doctor of Pharmacy (Pharm.D.)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "College of Health and Human Sciences Endowed Pharmacy Fellowships up to $10,000/year",
        "fee": "$60",
        "tuition": "$680/credit hour (In-state) / $1,050/credit hour (Out-of-state)",
        "desc": "ACPE-accredited four-year professional doctorate combining pharmaceutical chemistry, clinical pharmacotherapy, pharmacogenomics, and hospital clinical rotations.",
        "requirements": {"gpa": "Undergraduate prerequisite GPA >= 3.0 in chemistry and biology", "ielts": "TOEFL 84+ or IELTS 6.5", "gre": "PCAT not required", "papers": "PharmCAS personal statement and interview", "references": "Three recommendations including licensed pharmacist"},
        "source": "https://www.ndsu.edu/pharmacy/"
      },
      {
        "title": "Master of Science in Computer Science (Big Data and Cybersecurity)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental Graduate Teaching Assistantships providing full tuition waiver and $16,000 stipend",
        "fee": "$35",
        "tuition": "$450/credit hour (In-state) / $675/credit hour (Out-of-state)",
        "desc": "Advanced study in distributed cloud computing, machine learning, data mining architectures, and network cyber defense.",
        "requirements": {"gpa": "BS in computer science or related STEM field with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Quantitative >= 155", "papers": "Statement of technical objectives", "references": "Two letters from faculty"},
        "source": "https://www.ndsu.edu/cs/graduate_programs/"
      },
      {
        "title": "Bachelor of Science in Precision Agriculture",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Grand Farm and AgTech Industry Scholarships up to $6,000/year",
        "fee": "$35",
        "tuition": "$9,800/year (In-state) / $14,700/year (Out-of-state)",
        "desc": "Pioneering interdisciplinary curriculum integrating GPS machine guidance, soil electrical conductivity sensing, drone multispectral imagery, and crop yield analytics.",
        "requirements": {"gpa": "High school GPA >= 2.75 with algebra II", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.ndsu.edu/aben/academics/precision_agriculture/"
      },
      {
        "title": "NDSU Presidential Honors Full Tuition Fellowship",
        "type": "Fellowship",
        "subject": "chemistry",
        "subjects": ["chemistry", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition plus $2,000 annual research stipend ($16,700/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "NDSU's highest competitive undergraduate scholarship recognizing outstanding scholars with superior academic records, leadership, and research drive.",
        "requirements": {"gpa": "Unweighted high school GPA >= 3.85 and ACT >= 31 or SAT >= 1410", "ielts": "Exempt", "gre": "Exempt", "papers": "Presidential Fellowship competition essay", "references": "Three letters of academic endorsement"},
        "source": "https://www.ndsu.edu/admission/financial_aid/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. David Cook",
        "role": "President of North Dakota State University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. David Cook serves as the 15th President of NDSU, advancing Carnegie R1 research output, regional agricultural partnerships, and university innovation corridors."
      },
      {
        "name": "Dr. Dean Webster",
        "role": "Professor and Department Chair of Coatings and Polymeric Materials",
        "department": "Department of Coatings and Polymeric Materials",
        "subject": "chemistry",
        "bio": "Dr. Dean Webster is a world leader in polymer synthesis, bio-based thermosets, non-toxic marine fouling-release coatings, and high-throughput coating formulation."
      },
      {
        "name": "Dr. Leon Schumacher",
        "role": "Professor and Department Chair of Agricultural and Biosystems Engineering",
        "department": "Department of Agricultural and Biosystems Engineering",
        "subject": "engineering",
        "bio": "Dr. Leon Schumacher is an internationally recognized expert in biofuels engine performance, agricultural equipment safety, and precision ag machine automation."
      }
    ]
  },

  # 28. North Idaho College (Row 871)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "North Idaho College",
    "shortName": "North Idaho",
    "slug": "north-idaho-college-coeur-dalene",
    "location": "Coeur d'Alene, Idaho, United States",
    "website": "https://www.nic.edu",
    "sourceRow": 871,
    "stats": {"established": "1933", "students": "4,300+", "international": "2%", "faculty": "280+"},
    "heroSummary": "North Idaho College is a comprehensive public community college situated on the scenic shores of Lake Coeur d'Alene in Coeur d'Alene, Idaho. Renowned for nursing, forestry, mechanical trades, dental hygiene, and university transfer education.",
    "academicOverview": "North Idaho College operates the Meyer Health and Sciences Building, Parker Technical Education Center in Rathdrum, and the Workforce Training Center. Provides seamless articulation agreements with the University of Idaho, Boise State, and Lewis-Clark State.",
    "researchAdmissions": "North Idaho College maintains an open-door admissions policy for high school graduates or GED recipients. Competitive health professions programs (Registered Nursing, Dental Hygiene) require secondary application and prerequisite sciences.",
    "opps": [
      {
        "title": "Associate of Science in Registered Nursing (ADN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Kootenai Health Nursing Scholarships providing up to $4,500/year",
        "fee": "$25",
        "tuition": "$3,800/year (In-district) / $9,200/year (Out-of-state)",
        "desc": "ACEN-accredited nursing program combining clinical simulation with acute care hospital rotations across Kootenai Health facilities.",
        "requirements": {"gpa": "2.5 GPA in prerequisite anatomy, physiology, and microbiology", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Nursing application essay and TEAS score", "references": "Two recommendations"},
        "source": "https://www.nic.edu/nursing/"
      },
      {
        "title": "Associate of Applied Science in Mechatronics & Industrial Automation",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Parker Technical Education Center Grants up to $3,500/year",
        "fee": "$25",
        "tuition": "$3,800/year (In-district) / $9,200/year (Out-of-state)",
        "desc": "Conducted at the state-of-the-art Rathdrum facility, covering programmable logic controllers (PLCs), industrial robotics, hydraulics, and instrumentation.",
        "requirements": {"gpa": "High school diploma or GED with technical aptitude", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Statement of technical objectives", "references": "One recommendation"},
        "source": "https://www.nic.edu/mechatronics/"
      },
      {
        "title": "Associate of Science in Environmental Science & Forestry",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Idaho Forest Products Commission Grants of $3,000/year",
        "fee": "$25",
        "tuition": "$3,800/year (In-district) / $9,200/year (Out-of-state)",
        "desc": "Fieldwork-based curriculum along Lake Coeur d'Alene studying silviculture, rangeland watersheds, GIS mapping, and forest wildfire ecology.",
        "requirements": {"gpa": "2.0 minimum high school GPA", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.nic.edu/forestry/"
      },
      {
        "title": "Associate of Science in Computer Science (Transfer Track)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Inland Northwest STEM Grants up to $2,500/year",
        "fee": "$25",
        "tuition": "$3,800/year (In-district) / $9,200/year (Out-of-state)",
        "desc": "Prepares students for direct university transfer in software engineering, discrete mathematics, data structures, and computer organization.",
        "requirements": {"gpa": "High school GPA >= 2.5 with precalculus readiness", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Statement of purpose", "references": "One recommendation"},
        "source": "https://www.nic.edu/cs/"
      },
      {
        "title": "Associate of Applied Science in Dental Hygiene",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Allied Health Endowed Scholarships of $3,000",
        "fee": "$25",
        "tuition": "$3,800/year (In-district) / $9,200/year (Out-of-state)",
        "desc": "CODA-accredited program combining clinical dental patient care, periodontics, radiology, and local anesthesia administration.",
        "requirements": {"gpa": "3.0 GPA in prerequisite anatomy, chemistry, and microbiology", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Dental hygiene statement of intent", "references": "Two recommendations"},
        "source": "https://www.nic.edu/dentalhygiene/"
      },
      {
        "title": "North Idaho College Foundation Excellence Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition and book stipend for entire two-year associate degree ($8,500 total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Premier scholarship awarded to exceptional incoming scholars demonstrating academic merit, leadership, and dedication to North Idaho's communities.",
        "requirements": {"gpa": "3.50 high school GPA", "ielts": "Exempt", "gre": "Exempt", "papers": "NIC Foundation application essay", "references": "Two letters of recommendation"},
        "source": "https://www.nic.edu/foundation/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Gregory South",
        "role": "Interim President of North Idaho College",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Gregory South oversees North Idaho College, leading institutional accreditation reaffirmation, regional workforce alignment, and career-technical education."
      },
      {
        "name": "Dr. Larry Stauffer",
        "role": "Dean of Instruction and Professor of Technology",
        "department": "Division of Career and Technical Education",
        "subject": "engineering",
        "bio": "Dr. Larry Stauffer is an engineering educator specializing in manufacturing engineering, mechatronics curriculum design, and industry apprenticeship pipelines."
      },
      {
        "name": "Dr. Wendy R. Ruff",
        "role": "Director of Nursing and Associate Professor",
        "department": "Division of Nursing and Health Professions",
        "subject": "biology",
        "bio": "Dr. Wendy Ruff leads nursing curriculum quality, with research addressing clinical simulation fidelity, rural hospital clinical rotations, and NCLEX pass rates."
      }
    ]
  },

  # 29. North Platte Community College (Row 872)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "North Platte Community College",
    "shortName": "NPCC",
    "slug": "north-platte-community-college-nebraska",
    "location": "North Platte, Nebraska, United States",
    "website": "https://www.mpcc.edu",
    "sourceRow": 872,
    "stats": {"established": "1965", "students": "1,800+", "international": "1%", "faculty": "110+"},
    "heroSummary": "North Platte Community College is a public two-year college in North Platte, Nebraska, and a primary campus of Mid-Plains Community College (MPCC). Celebrated for electrical technology, diesel power, welding, associate degree nursing, and agriculture.",
    "academicOverview": "NPCC operates the North Campus and South Campus in North Platte, housing modern technical centers for diesel mechanics, electrical utility linework, and simulation healthcare labs. Serves an 18-county rural footprint in west-central Nebraska.",
    "researchAdmissions": "NPCC maintains an open-door admissions policy for all high school graduates or GED completers. Health science and technical programs have program-specific safety and academic prerequisite guidelines.",
    "opps": [
      {
        "title": "Associate of Applied Science in Electrical Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Nebraska Career Scholarships providing up to $4,000 per academic year",
        "fee": "$0",
        "tuition": "$3,450/year (In-state) / $4,350/year (Out-of-state)",
        "desc": "Comprehensive training in commercial wiring, industrial motor controls, programmable logic controllers (PLCs), and national electric code (NEC) compliance.",
        "requirements": {"gpa": "High school diploma or GED with technical aptitude", "ielts": "TOEFL 55+ or IELTS 5.0", "gre": "Exempt", "papers": "Statement of technical career interest", "references": "One recommendation"},
        "source": "https://www.mpcc.edu/academics/programs/electrical-technology.php"
      },
      {
        "title": "Associate of Applied Science in Diesel Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Union Pacific and Regional Ag Equipment Industry Sponsorships up to $5,000/year",
        "fee": "$0",
        "tuition": "$3,450/year (In-state) / $4,350/year (Out-of-state)",
        "desc": "Hands-on instruction in heavy duty agricultural machinery powertrains, locomotive maintenance systems, electronic fuel diagnostics, and hydraulics.",
        "requirements": {"gpa": "High school diploma or GED", "ielts": "TOEFL 55+ or IELTS 5.0", "gre": "Exempt", "papers": "Technical interest statement", "references": "One reference"},
        "source": "https://www.mpcc.edu/academics/programs/diesel-technology.php"
      },
      {
        "title": "Associate Degree in Nursing (ADN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Great Plains Health Nursing Grants providing up to $4,500/year",
        "fee": "$0",
        "tuition": "$3,450/year (In-state) / $4,350/year (Out-of-state)",
        "desc": "ACEN-accredited nursing program with clinical simulation labs and acute care rotations at Great Plains Health Regional Medical Center.",
        "requirements": {"gpa": "2.5 GPA in prerequisite anatomy and physiology", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Nursing statement and TEAS exam score", "references": "Two recommendations"},
        "source": "https://www.mpcc.edu/academics/programs/nursing.php"
      },
      {
        "title": "Associate of Science in Agriculture (Ranch Management)",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Sandhills Ranching Heritage Scholarships of $3,000/year",
        "fee": "$0",
        "tuition": "$3,450/year (In-state) / $4,350/year (Out-of-state)",
        "desc": "Studies Nebraska Sandhills rangeland ecology, beef cattle nutrition, commodities marketing, forage management, and ranch financial accounting.",
        "requirements": {"gpa": "2.0 minimum high school GPA", "ielts": "TOEFL 55+ or IELTS 5.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.mpcc.edu/academics/programs/agriculture.php"
      },
      {
        "title": "Associate of Science in Computer Information Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Mid-Plains Tech Advancement Grants up to $2,500/year",
        "fee": "$0",
        "tuition": "$3,450/year (In-state) / $4,350/year (Out-of-state)",
        "desc": "Prepares students for network administration, cloud infrastructure, Python programming, and entry-level cybersecurity operations.",
        "requirements": {"gpa": "High school diploma or GED", "ielts": "TOEFL 55+ or IELTS 5.0", "gre": "Exempt", "papers": "Statement of purpose", "references": "One reference"},
        "source": "https://www.mpcc.edu/academics/programs/information-technology.php"
      },
      {
        "title": "Mid-Plains Community College President's Honors Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition and fees for two undergraduate academic years ($7,500 value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Awarded to top high school graduates residing in the 18-county service area demonstrating academic excellence and leadership in technical fields.",
        "requirements": {"gpa": "3.50 high school GPA and top 15% class rank", "ielts": "Exempt", "gre": "Exempt", "papers": "President's Fellowship essay", "references": "Two recommendations from instructors"},
        "source": "https://www.mpcc.edu/cost-and-aid/scholarships.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Ryan Purdy",
        "role": "President of Mid-Plains Community College",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Ryan Purdy serves as President of Mid-Plains Community College, guiding technical education expansions, rail industry partnerships, and rural nursing access."
      },
      {
        "name": "Dr. Jody Tomanek",
        "role": "Vice President of Academic Affairs",
        "department": "Office of Academic Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Jody Tomanek directs academic curriculum quality, university transfer articulation agreements, and career-technical workforce pathways."
      },
      {
        "name": "Prof. Marina Makovicka",
        "role": "Director of Health Occupations",
        "department": "Division of Health Occupations",
        "subject": "biology",
        "bio": "Prof. Marina Makovicka oversees nursing and allied health education, focusing on clinical simulation fidelity and rural acute care workforce pipelines."
      }
    ]
  },

  # 30. Northeast Alabama Community College (Row 873)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Northeast Alabama Community College",
    "shortName": "NACC",
    "slug": "northeast-alabama-community-college-rainsville",
    "location": "Rainsville, Alabama, United States",
    "website": "https://www.nacc.edu",
    "sourceRow": 873,
    "stats": {"established": "1965", "students": "3,000+", "international": "1%", "faculty": "170+"},
    "heroSummary": "Northeast Alabama Community College is a premier public community college in Rainsville, Alabama, on Sand Mountain. Regularly ranked among the top 10 community colleges in the United States by the Aspen Institute for student success, retention, and transfer outcomes.",
    "academicOverview": "NACC houses the Workforce Development Center, the Cecil B. Word Mathematics and Science Building, and the Tom Bevill Lyceum. Known for industrial systems technology, mechatronics, registered nursing, and university transfer curricula.",
    "researchAdmissions": "NACC operates an open-door admission policy for individuals holding a high school diploma or GED certificate. Specialized programs in nursing and emergency medical services require secondary selective admissions.",
    "opps": [
      {
        "title": "Associate of Applied Science in Industrial Systems Technology (Mechatronics)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Alabama FAME Advanced Manufacturing Technician (AMT) full sponsorships with paid industry co-ops",
        "fee": "$0",
        "tuition": "$4,650/year (In-state) / $9,300/year (Out-of-state)",
        "desc": "Nationally recognized mechatronics program training multi-craft technicians in robotics, industrial automation, PLCs, motor drives, and precision alignment.",
        "requirements": {"gpa": "High school diploma or GED with math aptitude", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Industrial career interest statement", "references": "One recommendation"},
        "source": "https://www.nacc.edu/programs/industrial-systems-technology"
      },
      {
        "title": "Associate in Applied Science in Registered Nursing (ADN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "DeKalb Regional Healthcare Nursing Scholarships up to $4,000/year",
        "fee": "$0",
        "tuition": "$4,650/year (In-state) / $9,300/year (Out-of-state)",
        "desc": "ACEN-accredited nursing program recognized for exceptional NCLEX pass rates, acute clinical rotations, and simulation hospital training.",
        "requirements": {"gpa": "2.5 minimum GPA in prerequisite biology and chemistry", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Nursing statement and ACT score", "references": "Two recommendations"},
        "source": "https://www.nacc.edu/programs/nursing"
      },
      {
        "title": "Associate of Science in Computer Science (Pre-Engineering Transfer)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Alabama STEM Council Merit Grants providing up to $3,500/year",
        "fee": "$0",
        "tuition": "$4,650/year (In-state) / $9,300/year (Out-of-state)",
        "desc": "Direct university transfer track articulated with Auburn University and University of Alabama, covering calculus, data structures, and C++ programming.",
        "requirements": {"gpa": "High school GPA >= 2.5 with precalculus", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Personal statement", "references": "One math/science teacher reference"},
        "source": "https://www.nacc.edu/programs/computer-science"
      },
      {
        "title": "Associate of Applied Science in Medical Laboratory Technology (MLT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Huntsville Hospital Health System MLT Scholarships of $3,500/year",
        "fee": "$0",
        "tuition": "$4,650/year (In-state) / $9,300/year (Out-of-state)",
        "desc": "NAACLS-accredited program in clinical hematology, immunohematology, clinical microbiology, and diagnostic clinical chemistry.",
        "requirements": {"gpa": "2.5 GPA in science prerequisites", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Clinical laboratory career statement", "references": "Two recommendations"},
        "source": "https://www.nacc.edu/programs/medical-laboratory-technology"
      },
      {
        "title": "Associate of Applied Science in Cybersecurity & Computer Information Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "National Cyber Workforce Stipends up to $3,000/year",
        "fee": "$0",
        "tuition": "$4,650/year (In-state) / $9,300/year (Out-of-state)",
        "desc": "Prepares technicians in network defense, enterprise server virtualization, ethical hacking, and cybersecurity incident analysis.",
        "requirements": {"gpa": "2.0 minimum high school GPA or GED", "ielts": "TOEFL 60+ or IELTS 5.5", "gre": "Exempt", "papers": "Statement of purpose", "references": "One recommendation"},
        "source": "https://www.nacc.edu/programs/cybersecurity"
      },
      {
        "title": "Northeast Alabama Community College Presidential Honors Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition and mandatory institutional fees for two academic years ($9,300 total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Top institutional honor awarded to incoming scholars demonstrating exceptional academic excellence, civic character, and leadership potential.",
        "requirements": {"gpa": "3.75 high school GPA and ACT score >= 26", "ielts": "Exempt", "gre": "Exempt", "papers": "Presidential Fellowship essay and interview", "references": "Three letters of recommendation"},
        "source": "https://www.nacc.edu/financial-aid/scholarships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. David Campbell",
        "role": "President of Northeast Alabama Community College",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. David Campbell has served as President of NACC since 2001, guiding the college to multiple top-10 national Aspen Prize rankings for student success and transfer."
      },
      {
        "name": "Dr. Myrna Williamson",
        "role": "Nursing Program Director and Associate Professor",
        "department": "Division of Nursing",
        "subject": "biology",
        "bio": "Dr. Myrna Williamson leads accredited nursing education with research focusing on clinical simulation competency and NCLEX retention models in rural Alabama."
      },
      {
        "name": "Prof. Mark Kelly",
        "role": "Dean of Workforce Development and Professor of Technology",
        "department": "Division of Workforce Development",
        "subject": "engineering",
        "bio": "Prof. Mark Kelly directs regional advanced manufacturing partnerships, the Alabama FAME mechatronics chapter, and industrial automation apprenticeships."
      }
    ]
  }
]

print(f"Part 2 Chunk 2 loaded: {len(chunk2)} USA universities")
