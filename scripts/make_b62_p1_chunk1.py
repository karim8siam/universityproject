# scripts/make_b62_p1_chunk1.py
# Batch 62 Part 1 Chunk 1: Universities 1 to 8

chunk1 = [
  # 1. Montana Technological University (Row 832)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Montana Technological University",
    "shortName": "Montana Tech",
    "slug": "montana-technological-university-butte",
    "location": "Butte, Montana, United States",
    "website": "https://www.mtech.edu",
    "sourceRow": 832,
    "stats": {"established": "1896", "students": "2,400+", "international": "5%", "faculty": "160+"},
    "heroSummary": "Montana Technological University, located in Butte, Montana, is a leading public STEM-focused institution renowned for engineering, extractive metallurgical science, environmental geosciences, and energy resource management.",
    "academicOverview": "Montana Tech houses the School of Mines and Engineering and the College of Letters, Sciences, and Professional Studies. World-class facilities include the Underground Mine Education Center, Center for Advanced Materials Processing (CAMP), and petroleum recovery test labs.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA (minimum 2.5) with strong high school calculus and laboratory science coursework. Graduate degree programs require an accredited bachelor's degree in engineering or science with minimum 3.0 GPA, personal statement, and letters of recommendation.",
    "opps": [
      {
        "title": "Master of Science in Metallurgical and Materials Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate Research Assistantship with $20,000 annual stipend and 100% tuition remission",
        "fee": "$50",
        "tuition": "$5,800/year (In-state) / $18,400/year (Out-of-state)",
        "desc": "Premier research curriculum focusing on critical minerals extraction, hydrometallurgical processing, battery materials recycling, and pyrometallurgical synthesis.",
        "requirements": {"gpa": "Bachelor of Science in engineering or physical sciences with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional for domestic, recommended for international", "papers": "Statement of metallurgical research interests", "references": "Three letters from engineering faculty"},
        "source": "https://www.mtech.edu/metallurgical-engineering/"
      },
      {
        "title": "Doctor of Philosophy in Earth Science and Engineering (Mining/Geotechnical)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral research fellowships with full tuition waiver and $26,000 annual living stipend",
        "fee": "$50",
        "tuition": "$0 (Doctoral fellow funded)",
        "desc": "Interdisciplinary terminal research degree targeting mine rock mechanics, slope stability, underground excavation sensor networks, and subsurface environmental hydrology.",
        "requirements": {"gpa": "Master's degree in geological or mining engineering with min. 3.25 GPA", "ielts": "TOEFL 85+ or IELTS 7.0", "gre": "Quantitative score 156+", "papers": "Comprehensive doctoral research prospectus", "references": "Three academic recommendations"},
        "source": "https://www.mtech.edu/earth-science-phd/"
      },
      {
        "title": "Master of Science in Ecological Restoration",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Superfund and watershed restoration project stipends providing up to $18,000 per year",
        "fee": "$50",
        "tuition": "$5,800/year (In-state) / $18,400/year (Out-of-state)",
        "desc": "Applied science degree training specialists to restore contaminated aquatic ecosystems, tailings ponds, and heavy metal impacted riparian watersheds.",
        "requirements": {"gpa": "BS in ecology, biology, or environmental engineering with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Statement of environmental restoration career goals", "references": "Two faculty letters"},
        "source": "https://www.mtech.edu/restoration/"
      },
      {
        "title": "Bachelor of Science in Petroleum Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Society of Petroleum Engineers (SPE) and industry endowed scholarships up to $8,000/year",
        "fee": "$40",
        "tuition": "$7,800/year (In-state) / $24,500/year (Out-of-state)",
        "desc": "ABET-accredited program covering reservoir simulation, enhanced oil recovery, carbon underground injection, and geothermal reservoir extraction.",
        "requirements": {"gpa": "High school GPA >= 3.0 with precalculus and physics", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One STEM teacher recommendation"},
        "source": "https://www.mtech.edu/petroleum-engineering/"
      },
      {
        "title": "Bachelor of Science in Computer Science & Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Montana High Tech Business Alliance Merit Grants up to $5,000/year",
        "fee": "$40",
        "tuition": "$7,800/year (In-state) / $24,500/year (Out-of-state)",
        "desc": "Covers cyber-physical systems security, distributed high-performance computing, software verification, and embedded industrial controller protection.",
        "requirements": {"gpa": "High school GPA >= 2.75 with algebra II proficiency", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of computing objectives", "references": "One recommendation"},
        "source": "https://www.mtech.edu/computer-science/"
      },
      {
        "title": "Chancellor's Copper Scholars Fellowship",
        "type": "Scholarship",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition, university fees, and campus room/board allowance ($24,000/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Montana Tech's highest honors scholarship recognizing incoming undergraduates with superior mathematical talent and leadership in natural resource engineering.",
        "requirements": {"gpa": "Unweighted high school GPA >= 3.85 and ACT >= 30 or SAT >= 1390", "ielts": "Exempt", "gre": "Exempt", "papers": "Chancellor's Honors competition essay", "references": "Three letters from STEM instructors"},
        "source": "https://www.mtech.edu/financial-aid/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Les Cook",
        "role": "Chancellor and Professor",
        "department": "Office of the Chancellor",
        "subject": "social-sciences",
        "bio": "Dr. Les Cook serves as the 12th Chancellor of Montana Tech, leading STEM enrollment expansion, historic industrial research partnerships, and workforce modernization."
      },
      {
        "name": "Dr. Jerome Downey",
        "role": "Goldcorp Professor of Extractive Metallurgy",
        "department": "Department of Metallurgical and Materials Engineering",
        "subject": "engineering",
        "bio": "Dr. Jerome Downey is an international authority on high-temperature thermal processing, rare earth element recovery, and hazardous slag immobilization."
      },
      {
        "name": "Dr. Beverly Hartline",
        "role": "Professor Emerita of Physics and Geosciences",
        "department": "Department of Physics",
        "subject": "physics",
        "bio": "Dr. Beverly Hartline is a nuclear physicist whose research addresses particle accelerators, underground scientific laboratory design, and women in STEM advocacy."
      }
    ]
  },

  # 2. Montclair State University (Row 834)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Montclair State University",
    "shortName": "Montclair State",
    "slug": "montclair-state-university",
    "location": "Montclair, New Jersey, United States",
    "website": "https://www.montclair.edu",
    "sourceRow": 834,
    "stats": {"established": "1908", "students": "22,000+", "international": "4%", "faculty": "1,200+"},
    "heroSummary": "Montclair State University is a leading public Carnegie R2 doctoral research university located in Montclair, New Jersey. Known for computer science, environmental coastal research, educational pedagogy, business, and performing arts.",
    "academicOverview": "Montclair State comprises the College of Science and Mathematics, Feliciano School of Business, and Cali School of Music. It operates cutting-edge facilities including the Clean Energy and Sustainability Analytics Center and PSEG Sustainability Institute.",
    "researchAdmissions": "Undergraduate admissions evaluate high school coursework and grades under a holistic test-optional admissions policy. Graduate degree programs require an accredited bachelor's degree with 3.0 GPA, professional resume, and letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Philosophy in Environmental Science and Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Doctoral Graduate Assistantships with $24,000 annual stipend and 100% tuition coverage",
        "fee": "$60",
        "tuition": "$0 (Fully funded doctoral assistant)",
        "desc": "Interdisciplinary doctoral program investigating urban environmental degradation, estuarine biogeochemistry, water resource economics, and climate resilience planning.",
        "requirements": {"gpa": "BS or MS in environmental science, chemistry, biology, or geology with min. 3.25 GPA", "ielts": "TOEFL 83+ or IELTS 6.5", "gre": "Optional", "papers": "Doctoral research statement", "references": "Three letters from research faculty"},
        "source": "https://www.montclair.edu/earth-and-environmental-studies/phd-environmental-management/"
      },
      {
        "title": "Master of Science in Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental Graduate Merit Fellowships offering up to $8,000 per academic year",
        "fee": "$60",
        "tuition": "$745/credit hour (In-state) / $1,095/credit hour (Out-of-state)",
        "desc": "NSA-designated Center of Academic Excellence in Cyber Defense covering secure software architecture, blockchain security, network forensics, and cloud infrastructure defense.",
        "requirements": {"gpa": "Bachelor's degree in CS or related STEM field with min. 3.0 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Not required", "papers": "Statement of technical objectives", "references": "Two professional or academic letters"},
        "source": "https://www.montclair.edu/computer-science/graduate-programs/cybersecurity-ms/"
      },
      {
        "title": "Master of Science in Molecular Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Graduate Teaching Assistantships providing full tuition waiver and $16,000 annual stipend",
        "fee": "$60",
        "tuition": "$745/credit hour",
        "desc": "Intensive bench research training in recombinant DNA technology, protein chemistry, mammalian gene expression, and biopharmaceutical development.",
        "requirements": {"gpa": "BS in biology, biochemistry, or chemistry with min. 3.0 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Optional", "papers": "Statement of laboratory experience", "references": "Two letters from laboratory mentors"},
        "source": "https://www.montclair.edu/biology/graduate-programs/molecular-biology-ms/"
      },
      {
        "title": "Master of Business Administration (MBA - Business Analytics)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Feliciano School of Business Merit Scholarships up to $6,000",
        "fee": "$60",
        "tuition": "$850/credit hour",
        "desc": "AACSB-accredited program combining predictive modeling, big data corporate governance, financial econometrics, and supply chain logistics.",
        "requirements": {"gpa": "Accredited bachelor's degree with min. 2.85 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE optional", "papers": "Professional goals essay and resume", "references": "Two professional letters"},
        "source": "https://www.montclair.edu/feliciano-school-of-business/mba/"
      },
      {
        "title": "Bachelor of Science in Marine Biology and Coastal Sciences",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "New Jersey Sea Grant Consortium Undergraduate Research Fellowships up to $4,000/year",
        "fee": "$65",
        "tuition": "$14,500/year (In-state) / $23,800/year (Out-of-state)",
        "desc": "Fieldwork-based degree based at the Montclair State University Field Station at Stokes State Forest and coastal New Jersey estuaries, studying salt marsh ecology and oceanography.",
        "requirements": {"gpa": "High school GPA >= 3.0 with chemistry and biology", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One high school counselor letter"},
        "source": "https://www.montclair.edu/biology/undergraduate-programs/marine-biology-bs/"
      },
      {
        "title": "Montclair State Presidential Scholars Award",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition renewable for four undergraduate academic years ($14,500–$23,800/year value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Montclair State's premier institutional scholarship awarding incoming freshmen of exceptional academic achievement, public leadership, and civic responsibility.",
        "requirements": {"gpa": "3.80 unweighted high school GPA with rigorous AP/IB coursework", "ielts": "Exempt", "gre": "Exempt", "papers": "Presidential Scholarship competitive essay", "references": "Two academic recommendations"},
        "source": "https://www.montclair.edu/red-hawk-central/financial-aid/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jonathan Koppell",
        "role": "President and Professor of Public Affairs",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Jonathan Koppell serves as President of Montclair State University, focusing on public administration, civic technology innovation, and educational access transformation."
      },
      {
        "name": "Dr. Pankaj Lal",
        "role": "Professor and Director of the Clean Energy and Sustainability Analytics Center",
        "department": "Department of Earth and Environmental Studies",
        "subject": "environment",
        "bio": "Dr. Pankaj Lal is a globally recognized environmental economist investigating bioenergy lifecycle analysis, forest carbon offsets, and renewable energy adoption models."
      },
      {
        "name": "Dr. Aparna Varde",
        "role": "Professor of Computer Science",
        "department": "School of Computing",
        "subject": "computer-science",
        "bio": "Dr. Aparna Varde directs research in artificial intelligence, knowledge discovery in databases, computational linguistics, and smart urban infrastructure analytics."
      }
    ]
  },

  # 3. Montreat College (Row 835)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Montreat College",
    "shortName": "Montreat College",
    "slug": "montreat-college-north-carolina",
    "location": "Montreat, North Carolina, United States",
    "website": "https://www.montreat.edu",
    "sourceRow": 835,
    "stats": {"established": "1916", "students": "1,000+", "international": "3%", "faculty": "70+"},
    "heroSummary": "Montreat College is a private Christian liberal arts college in Montreat, North Carolina, nestled in the Blue Ridge Mountains. Known nationally for its pioneering cybersecurity program, outdoor education, business, and environmental science.",
    "academicOverview": "Montreat College operates the Center for Cybersecurity, the School of Arts and Sciences, and the Adult and Graduate Studies division. Its cyber lab is recognized as a National Center of Academic Excellence in Cyber Defense by the NSA.",
    "researchAdmissions": "Admissions require high school graduation or GED with minimum 2.5 GPA, personal statement outlining faith and educational objectives, and one academic recommendation.",
    "opps": [
      {
        "title": "Master of Science in Cybersecurity Administration",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "National Cyber Workforce Grants providing up to $5,000 per academic year",
        "fee": "$35",
        "tuition": "$595/credit hour",
        "desc": "An NSA-designated graduate program combining ethical governance, enterprise security architecture, incident response protocols, and cyber regulatory compliance.",
        "requirements": {"gpa": "2.75 minimum undergraduate GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Cybersecurity ethics statement", "references": "Two professional recommendations"},
        "source": "https://www.montreat.edu/academics/graduate/ms-cybersecurity/"
      },
      {
        "title": "Bachelor of Science in Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Carolina Cyber Center Scholarships awarding up to $8,000/year",
        "fee": "$30",
        "tuition": "$32,800/year",
        "desc": "Rigorous undergraduate training in penetration testing, threat hunting, network defense, digital forensics, and security operations center (SOC) management.",
        "requirements": {"gpa": "2.75 high school GPA with strong math preparation", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One teacher recommendation"},
        "source": "https://www.montreat.edu/academics/undergraduate/cybersecurity/"
      },
      {
        "title": "Bachelor of Science in Outdoor Education and Leadership",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Blue Ridge Outdoor Leadership Stipends of $4,500/year",
        "fee": "$30",
        "tuition": "$32,800/year",
        "desc": "Hands-on experiential curriculum based in Pisgah National Forest, covering wilderness risk management, environmental ethics, and search and rescue.",
        "requirements": {"gpa": "2.5 high school GPA and wilderness fitness endorsement", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Outdoor leadership essay", "references": "Two recommendations"},
        "source": "https://www.montreat.edu/academics/undergraduate/outdoor-education/"
      },
      {
        "title": "Bachelor of Science in Environmental Science",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Appalachian Conservation Scholarships up to $5,000/year",
        "fee": "$30",
        "tuition": "$32,800/year",
        "desc": "Investigates Southern Appalachian forest ecology, freshwater streams, soil geochemistry, and biological biodiversity conservation.",
        "requirements": {"gpa": "2.6 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of environmental interests", "references": "One science instructor reference"},
        "source": "https://www.montreat.edu/academics/undergraduate/environmental-science/"
      },
      {
        "title": "Bachelor of Science in Business Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Montreat Dean's Merit Scholarships providing up to $10,000/year",
        "fee": "$30",
        "tuition": "$32,800/year",
        "desc": "Develops competencies in corporate finance, managerial economics, ethical leadership, strategic marketing, and small enterprise entrepreneurship.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal essay", "references": "One counselor recommendation"},
        "source": "https://www.montreat.edu/academics/undergraduate/business-administration/"
      },
      {
        "title": "Montreat Pinnacle Honors Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition scholarship ($32,800/year value) renewable across four undergraduate years",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "The highest competitive scholarship awarded to incoming freshmen demonstrating exceptional intellectual curiosity, moral character, and STEM aptitude.",
        "requirements": {"gpa": "3.80 high school GPA and ACT >= 28 or SAT >= 1310", "ielts": "Exempt", "gre": "Exempt", "papers": "Pinnacle Scholarship competitive essay and interview", "references": "Two academic and one pastoral reference"},
        "source": "https://www.montreat.edu/admissions/financial-aid/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Paul J. Maurer",
        "role": "President of Montreat College",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Paul J. Maurer has led Montreat College since 2014, establishing the Carolina Cyber Center and expanding undergraduate STEM degrees."
      },
      {
        "name": "Dr. Daron Montgomery",
        "role": "Dean of the School of Arts and Sciences",
        "department": "School of Arts and Sciences",
        "subject": "social-sciences",
        "bio": "Dr. Daron Montgomery oversees academic curriculum, student experiential learning, and interdisciplinary faculty research in the humanities and sciences."
      },
      {
        "name": "Dr. Kelli Burgin",
        "role": "Associate Professor of Cybersecurity",
        "department": "Center for Cybersecurity",
        "subject": "computer-science",
        "bio": "Dr. Kelli Burgin specializes in wireless network vulnerability modeling, industrial control systems cybersecurity, and educational pathways in cyber defense."
      }
    ]
  },

  # 4. Morehead State University (Row 836)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Morehead State University",
    "shortName": "Morehead State",
    "slug": "morehead-state-university-kentucky",
    "location": "Morehead, Kentucky, United States",
    "website": "https://www.moreheadstate.edu",
    "sourceRow": 836,
    "stats": {"established": "1887", "students": "9,000+", "international": "3%", "faculty": "450+"},
    "heroSummary": "Morehead State University is a comprehensive public university in Morehead, Kentucky, situated in the foothills of the Daniel Boone National Forest. Renowned worldwide for its space science and small satellite engineering program.",
    "academicOverview": "Morehead State features the Space Science Center, the Ernst and Sara Lane Volgenau College of Education, and the Elmer R. Smith College of Business and Technology. Its 21-meter space tracking antenna is part of NASA's Deep Space Network.",
    "researchAdmissions": "Undergraduate admissions evaluate high school unweighted GPA (minimum 2.0 for standard admission; 3.0+ for Space Science honors). Graduate admissions require an accredited bachelor's degree with 2.75 to 3.0 GPA and departmental recommendations.",
    "opps": [
      {
        "title": "Master of Science in Space Systems Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "NASA Kentucky Space Grant Graduate Research Assistantships with $18,000 annual stipend and tuition remission",
        "fee": "$40",
        "tuition": "$585/credit hour (In-state) / $720/credit hour (Out-of-state)",
        "desc": "Elite aerospace curriculum where graduate students design, build, test, and operate SmallSats, CubeSats, and lunar orbiters in the on-campus cleanroom and satellite tracking center.",
        "requirements": {"gpa": "BS in engineering, physics, or computer science with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Quantitative score 155+ recommended", "papers": "Statement of space mission research interests", "references": "Three letters from engineering faculty"},
        "source": "https://www.moreheadstate.edu/academics/programs/space-systems-engineering-ms/"
      },
      {
        "title": "Bachelor of Science in Space Science",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Volgenau Space Science Endowed Scholarships providing up to $8,000/year",
        "fee": "$30",
        "tuition": "$9,600/year (In-state) / $14,400/year (Out-of-state)",
        "desc": "One of only a handful of undergraduate space science programs in the nation, providing direct operation experience with the 21-meter satellite tracking antenna.",
        "requirements": {"gpa": "High school GPA >= 3.0 with precalculus and physics", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of space science interests", "references": "Two recommendations"},
        "source": "https://www.moreheadstate.edu/academics/programs/space-science-bs/"
      },
      {
        "title": "Master of Science in Engineering and Technology Management",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Departmental Graduate Teaching Assistantships providing full tuition waiver and $10,000 stipend",
        "fee": "$40",
        "tuition": "$585/credit hour",
        "desc": "Prepares technical managers in production operations, automated robotics, supply chain optimization, and total quality management (Six Sigma).",
        "requirements": {"gpa": "Accredited bachelor's degree in engineering or technology with min. 2.75 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Career trajectory statement", "references": "Two letters of recommendation"},
        "source": "https://www.moreheadstate.edu/academics/programs/engineering-and-technology-management-ms/"
      },
      {
        "title": "Bachelor of Science in Agricultural Sciences (Veterinary Technology)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Kentucky Agricultural Development Fund Scholarships up to $3,500/year",
        "fee": "$30",
        "tuition": "$9,600/year (In-state) / $14,400/year (Out-of-state)",
        "desc": "Hands-on animal science and clinical veterinary instruction at the 350-acre Derrickson Agricultural Complex, featuring equine, beef, and small animal hospitals.",
        "requirements": {"gpa": "High school GPA >= 2.5 with biology coursework", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://www.moreheadstate.edu/academics/programs/agricultural-sciences-bs/"
      },
      {
        "title": "Bachelor of Science in Computer Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Appalachian STEM Scholar Grants providing up to $4,500/year",
        "fee": "$30",
        "tuition": "$9,600/year (In-state) / $14,400/year (Out-of-state)",
        "desc": "Covers algorithm analysis, systems programming, data structures, mobile software engineering, and database systems architecture.",
        "requirements": {"gpa": "High school GPA >= 2.5 with algebra II", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of purpose", "references": "One recommendation"},
        "source": "https://www.moreheadstate.edu/academics/programs/computer-science-bs/"
      },
      {
        "title": "Morehead State George M. Luckey Academic Honors Scholarship",
        "type": "Scholarship",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition, campus housing, meal plan, and $1,500 travel study stipend ($22,000/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "MSU's most prestigious merit award supporting extraordinary students across all four undergraduate years with dedicated honors faculty mentoring.",
        "requirements": {"gpa": "3.75 high school GPA and ACT >= 28 or SAT >= 1310", "ielts": "Exempt", "gre": "Exempt", "papers": "Luckey Honors Scholarship essay", "references": "Three letters of academic endorsement"},
        "source": "https://www.moreheadstate.edu/admissions/scholarships/honors-scholarship/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jay Morgan",
        "role": "President of Morehead State University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Jay Morgan serves as the 14th President of Morehead State, championing university aerospace expansions, regional economic growth, and student retention initiatives."
      },
      {
        "name": "Dr. Benjamin K. Malphrus",
        "role": "Professor of Space Science and Executive Director of the Space Science Center",
        "department": "Department of Physics, Earth Science, and Space Systems Engineering",
        "subject": "physics",
        "bio": "Dr. Benjamin Malphrus is a pioneering space systems architect who has led the design and mission operations of numerous NASA CubeSat missions to the Moon and deep space."
      },
      {
        "name": "Dr. Dirk Grupe",
        "role": "Associate Professor and Chair of Physics",
        "department": "Department of Physics, Earth Science, and Space Systems Engineering",
        "subject": "physics",
        "bio": "Dr. Dirk Grupe is an astrophysicist who studies supermassive black holes, active galactic nuclei (AGN), and tidal disruption events using Swift satellite X-ray data."
      }
    ]
  },

  # 5. Mount Holyoke College (Row 837)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Mount Holyoke College",
    "shortName": "Mount Holyoke",
    "slug": "mount-holyoke-college-south-hadley",
    "location": "South Hadley, Massachusetts, United States",
    "website": "https://www.mtholyoke.edu",
    "sourceRow": 837,
    "stats": {"established": "1837", "students": "2,200+", "international": "27%", "faculty": "240+"},
    "heroSummary": "Mount Holyoke College is a prestigious private liberal arts college for women and gender-diverse students in South Hadley, Massachusetts. The oldest of the historic Seven Sisters institutions and a member of the Five College Consortium.",
    "academicOverview": "Mount Holyoke offers 48 departmental and interdepartmental majors with cross-registration at Amherst, Smith, Hampshire, and UMass Amherst. World-class facilities include the Miller Worley Center for the Environment and Kendade Hall for Science.",
    "researchAdmissions": "Admissions are highly competitive, evaluating high school academic rigor, writing samples, intellectual curiosity, and letters of recommendation under a long-standing test-optional policy.",
    "opps": [
      {
        "title": "Bachelor of Arts in Computer Science & Data Science",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027 (Regular Decision)",
        "funding": "Lynk Summer Research Fellowships ($4,500 stipend) and institutional need-based grants up to full tuition",
        "fee": "$60",
        "tuition": "$63,500/year",
        "desc": "Rigorous undergraduate computing education emphasizing algorithmic fairness, artificial intelligence ethics, full-stack software development, and Five College cross-registration.",
        "requirements": {"gpa": "Top 10% high school class rank with calculus preparation", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Common Application personal essay and Mount Holyoke supplement", "references": "Two academic teacher recommendations and counselor report"},
        "source": "https://www.mtholyoke.edu/academics/find-your-program/computer-science"
      },
      {
        "title": "Bachelor of Arts in Neuroscience and Behavior",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Howard Hughes Medical Institute (HHMI) Undergraduate Science Grants up to $5,000",
        "fee": "$60",
        "tuition": "$63,500/year",
        "desc": "Interdisciplinary program examining neurobiology, cognitive neuroscience, psychopharmacology, synaptic electrophysiology, and neurodegenerative disorders.",
        "requirements": {"gpa": "Exceptional secondary school transcript in chemistry and biology", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Academic writing sample and statement", "references": "Two science/math recommendations"},
        "source": "https://www.mtholyoke.edu/academics/find-your-program/neuroscience-and-behavior"
      },
      {
        "title": "Bachelor of Arts in Environmental Studies & Policy",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Miller Worley Environmental Research Grants up to $4,500 per summer",
        "fee": "$60",
        "tuition": "$63,500/year",
        "desc": "Focuses on climate justice, urban ecology, environmental jurisprudence, renewable energy transition, and ecological economics.",
        "requirements": {"gpa": "Strong high school GPA in social sciences and laboratory sciences", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Personal essay", "references": "Two teacher recommendations"},
        "source": "https://www.mtholyoke.edu/academics/find-your-program/environmental-studies"
      },
      {
        "title": "Bachelor of Arts in Biochemistry",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Beckman Scholars Program awards providing $26,000 multi-year undergraduate research support",
        "fee": "$60",
        "tuition": "$63,500/year",
        "desc": "Intensive laboratory-based program in enzymology, macromolecular structural biology, spectroscopic techniques, and biophysical chemistry.",
        "requirements": {"gpa": "Rigorous high school preparation in chemistry and advanced calculus", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Application essay", "references": "Two teacher recommendations"},
        "source": "https://www.mtholyoke.edu/academics/find-your-program/biochemistry"
      },
      {
        "title": "Bachelor of Arts in International Relations & Global Politics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "McCulloch Center for Global Initiatives Study Abroad Grants up to $5,000",
        "fee": "$60",
        "tuition": "$63,500/year",
        "desc": "Explores multilateral diplomacy, global human rights regimes, international political economy, post-colonial statecraft, and international conflict resolution.",
        "requirements": {"gpa": "Strong background in world history and foreign languages", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Exempt", "papers": "Analytical writing sample", "references": "Two humanities/social science teacher letters"},
        "source": "https://www.mtholyoke.edu/academics/find-your-program/international-relations"
      },
      {
        "title": "Mount Holyoke Trustee Merit Scholarship",
        "type": "Scholarship",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Merit award of $30,000 per year renewable for four undergraduate academic years ($120,000 total value)",
        "fee": "$0",
        "tuition": "$30,000/year tuition reduction",
        "desc": "Awarded to incoming students demonstrating extraordinary academic achievement, creative vision, and leadership in social change.",
        "requirements": {"gpa": "Exceptional secondary school GPA and leadership portfolio", "ielts": "Exempt", "gre": "Exempt", "papers": "Trustee Scholarship essay", "references": "Three letters of recommendation"},
        "source": "https://www.mtholyoke.edu/admission/tuition-aid/merit-scholarships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Danielle R. Holley",
        "role": "President and Professor of Politics",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Danielle R. Holley serves as the 20th President of Mount Holyoke College, an esteemed legal scholar specializing in constitutional law and educational equity."
      },
      {
        "name": "Dr. Becky Wai-Ling Packard",
        "role": "Professor of Psychology and Education",
        "department": "Department of Psychology and Education",
        "subject": "social-sciences",
        "bio": "Dr. Becky Wai-Ling Packard conducts groundbreaking research on mentoring, STEM persistence among first-generation and women scholars, and inclusive laboratory climates."
      },
      {
        "name": "Dr. Craig Woodard",
        "role": "Professor of Biological Sciences",
        "department": "Department of Biological Sciences",
        "subject": "biology",
        "bio": "Dr. Craig Woodard investigates the molecular genetics of steroid hormone signaling, developmental biology in Drosophila melanogaster, and gene regulation mechanisms."
      }
    ]
  },

  # 6. Mount Marty University (Row 838)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Mount Marty University",
    "shortName": "Mount Marty",
    "slug": "mount-marty-university-yankton",
    "location": "Yankton, South Dakota, United States",
    "website": "https://www.mountmarty.edu",
    "sourceRow": 838,
    "stats": {"established": "1936", "students": "1,200+", "international": "4%", "faculty": "90+"},
    "heroSummary": "Mount Marty University is a private Catholic Benedictine university in Yankton, South Dakota, situated along the Missouri River. Renowned across the Northern Plains for nurse anesthesia, nursing, athletic training, and education.",
    "academicOverview": "Mount Marty features the Graduate Program in Nurse Anesthesia, the Division of Nursing and Health Sciences, and the Division of Business. Its clinical anesthesia program is one of the oldest and most respected in the upper Midwest.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5) or transfer coursework under test-optional review. Nurse anesthesia and graduate health programs require an accredited bachelor's degree in nursing, RN licensure, and clinical ICU experience.",
    "opps": [
      {
        "title": "Doctor of Nurse Anesthesia Practice (DNAP)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Health Resources and Services Administration (HRSA) Anesthesia Traineeships up to $15,000",
        "fee": "$75",
        "tuition": "$950/credit hour",
        "desc": "COA-accredited terminal clinical doctoral program preparing Certified Registered Nurse Anesthetists (CRNAs) for advanced surgical anesthesia and pain management.",
        "requirements": {"gpa": "BSN with min. 3.0 GPA, active RN license, and at least 1-2 years acute ICU clinical experience", "ielts": "TOEFL 84+ or IELTS 6.5", "gre": "Optional", "papers": "Personal statement and critical care portfolio", "references": "Three clinical and supervisor recommendations"},
        "source": "https://www.mountmarty.edu/academics/graduate-programs/nurse-anesthesia/"
      },
      {
        "title": "Master of Science in Nursing (Family Nurse Practitioner - FNP)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Rural Health Nursing Workforce Fellowships offering $6,000 per academic year",
        "fee": "$50",
        "tuition": "$625/credit hour",
        "desc": "Prepares advanced practice nurses to provide comprehensive primary healthcare to underserved rural communities throughout the Dakotas and Nebraska.",
        "requirements": {"gpa": "BSN with min. 3.0 GPA and unencumbered RN license", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Statement of rural health career goals", "references": "Three professional references"},
        "source": "https://www.mountmarty.edu/academics/graduate-programs/msn-fnp/"
      },
      {
        "title": "Bachelor of Science in Nursing (Pre-Licensure BSN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Avera Health Partnership Nursing Scholarships up to $10,000/year",
        "fee": "$35",
        "tuition": "$30,500/year",
        "desc": "CCNE-accredited undergraduate nursing curriculum with extensive simulation lab training and clinical rotations at Avera Sacred Heart Hospital.",
        "requirements": {"gpa": "High school GPA >= 3.0 with prerequisite chemistry and biology", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Nursing statement of intent", "references": "Two recommendations"},
        "source": "https://www.mountmarty.edu/academics/undergraduate-programs/nursing/"
      },
      {
        "title": "Bachelor of Science in Exercise Science",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Lancer Athletic & Academic Merit Grants up to $8,000/year",
        "fee": "$35",
        "tuition": "$30,500/year",
        "desc": "Instruction in human anatomy, clinical exercise testing, sports biomechanics, and strength and conditioning at the Cimpl Arena complex.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.mountmarty.edu/academics/undergraduate-programs/exercise-science/"
      },
      {
        "title": "Bachelor of Arts in Business Administration (Agri-Business)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Dakota Plains Agribusiness Endowed Scholarships up to $4,500/year",
        "fee": "$35",
        "tuition": "$30,500/year",
        "desc": "Combines accounting, corporate finance, and supply chain logistics with commodities marketing, grain merchandising, and agricultural lending.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of business interests", "references": "One letter of recommendation"},
        "source": "https://www.mountmarty.edu/academics/undergraduate-programs/business-administration/"
      },
      {
        "title": "Mount Marty Benedictine Honors Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition scholarship ($30,500/year value) renewable across four undergraduate years",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Premier scholarship recognizing exceptional incoming students who exemplify Benedictine values of hospitality, intellectual stewardship, and service leadership.",
        "requirements": {"gpa": "3.80 high school GPA and ACT >= 27", "ielts": "Exempt", "gre": "Exempt", "papers": "Benedictine values competitive essay and interview", "references": "Two letters of recommendation"},
        "source": "https://www.mountmarty.edu/admissions-aid/scholarships-and-grants/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Marc Long",
        "role": "President of Mount Marty University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Marc Long serves as President of Mount Marty University, overseeing healthcare programmatic expansion, regional hospital clinical partnerships, and rural health access."
      },
      {
        "name": "Dr. Andrea B. Sterling",
        "role": "Director and Associate Professor of Nurse Anesthesia",
        "department": "Graduate Program in Nurse Anesthesia",
        "subject": "biology",
        "bio": "Dr. Andrea Sterling is a certified registered nurse anesthetist (CRNA) investigating ultrasound-guided regional anesthesia, patient safety outcomes, and clinical simulation efficacy."
      },
      {
        "name": "Dr. Alan Hoesing",
        "role": "Professor of Exercise Science",
        "department": "Division of Nursing and Health Sciences",
        "subject": "biology",
        "bio": "Dr. Alan Hoesing conducts research in cardiorespiratory endurance adaptations, rural youth athletic conditioning, and musculoskeletal rehabilitation."
      }
    ]
  },

  # 7. Murray State University (Row 840)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Murray State University",
    "shortName": "Murray State",
    "slug": "murray-state-university-kentucky",
    "location": "Murray, Kentucky, United States",
    "website": "https://www.murraystate.edu",
    "sourceRow": 840,
    "stats": {"established": "1922", "students": "9,500+", "international": "4%", "faculty": "500+"},
    "heroSummary": "Murray State University is a nationally recognized public regional university in Murray, Kentucky. Celebrated for agriculture, occupational safety and health, engineering physics, telecommunications systems management, and veterinary science.",
    "academicOverview": "Murray State comprises the Hutson School of Agriculture, Jesse D. Jones College of Science, Engineering and Technology, and the Arthur J. Bauernfeind College of Business. Home to the Hancock Biological Station and Watershed Studies Institute.",
    "researchAdmissions": "Undergraduate admissions evaluate high school unweighted GPA (minimum 2.0 automatic or test-flexible review). Graduate admissions require an accredited bachelor's degree with 2.75 to 3.0 GPA, statement of purpose, and recommendations.",
    "opps": [
      {
        "title": "Master of Science in Occupational Safety and Health",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "NIOSH Training Project Grants providing full tuition remission and monthly living stipends",
        "fee": "$40",
        "tuition": "$525/credit hour (In-state) / $820/credit hour (Out-of-state)",
        "desc": "ABET-accredited leader in industrial hygiene, ergonomics, environmental toxic chemical exposure, hazard prevention engineering, and emergency disaster planning.",
        "requirements": {"gpa": "BS in safety, STEM, or health sciences with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Statement of occupational health career objectives", "references": "Three letters of recommendation"},
        "source": "https://www.murraystate.edu/academics/colleges-and-schools/jones-college/osh/"
      },
      {
        "title": "Master of Science in Agriculture (Sustainable Agriculture & Agribusiness)",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Hutson School Graduate Assistantships with $10,500 annual stipend and tuition scholarship",
        "fee": "$40",
        "tuition": "$525/credit hour",
        "desc": "Advanced research curriculum utilizing the 1,500-acre university farm complex to investigate soil carbon sequestration, precision ag technology, and agronomic crop breeding.",
        "requirements": {"gpa": "BS in agriculture or related biological sciences with min. 2.75 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Research statement", "references": "Two faculty letters"},
        "source": "https://www.murraystate.edu/academics/colleges-and-schools/hutson-school-of-agriculture/"
      },
      {
        "title": "Master of Science in Information Systems (Cybersecurity Concentration)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Bauernfeind College Fellowships up to $5,000 per year",
        "fee": "$40",
        "tuition": "$525/credit hour",
        "desc": "Focuses on cloud infrastructure governance, relational database management, threat modeling, and business continuity architecture.",
        "requirements": {"gpa": "2.75 undergraduate GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GMAT/GRE considered", "papers": "Statement of professional goals", "references": "Two professional letters"},
        "source": "https://www.murraystate.edu/academics/colleges-and-schools/bauernfeind-college-of-business/"
      },
      {
        "title": "Bachelor of Science in Engineering Physics (Mechanical & Electrical)",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Jesse D. Jones STEM Excellence Scholarships providing up to $6,000/year",
        "fee": "$40",
        "tuition": "$9,650/year (In-state) / $19,300/year (Out-of-state)",
        "desc": "EAC/ABET-accredited degree blending fundamental physics with classical mechanical and electrical engineering design and instrumentation.",
        "requirements": {"gpa": "High school GPA >= 3.0 with strong calculus preparation", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal essay", "references": "Two science/math teacher recommendations"},
        "source": "https://www.murraystate.edu/academics/colleges-and-schools/jones-college/engineering-physics/"
      },
      {
        "title": "Bachelor of Science in Veterinary Technology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Equine and Food Animal Health Grants up to $4,000/year",
        "fee": "$40",
        "tuition": "$9,650/year (In-state) / $19,300/year (Out-of-state)",
        "desc": "AVMA-accredited four-year program offering hands-on large and small animal clinical medicine, surgical nursing, anesthesiology, and diagnostic imaging.",
        "requirements": {"gpa": "3.0 high school GPA with prerequisite biology and chemistry", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Veterinary career essay", "references": "Two recommendations including licensed veterinarian"},
        "source": "https://www.murraystate.edu/academics/colleges-and-schools/hutson-school-of-agriculture/vet-tech/"
      },
      {
        "title": "Murray State University Presidential Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition plus on-campus housing and meal stipend ($24,000/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition covered)",
        "desc": "Murray State's premier honors award given to incoming freshmen demonstrating exceptional intellectual curiosity, community impact, and research dedication.",
        "requirements": {"gpa": "3.75 high school GPA and ACT score >= 28 or SAT >= 1310", "ielts": "Exempt", "gre": "Exempt", "papers": "Presidential Fellowship competitive essay and on-campus interview", "references": "Three letters of recommendation"},
        "source": "https://www.murraystate.edu/admissions/scholarships/presidential-fellowship.aspx"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Robert L. Jackson",
        "role": "President of Murray State University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Robert L. Jackson serves as the 10th President of Murray State University, leading major capital campus investments, record fundraising, and agricultural center expansions."
      },
      {
        "name": "Dr. Brian Parr",
        "role": "Dean of the Hutson School of Agriculture",
        "department": "Hutson School of Agriculture",
        "subject": "environment",
        "bio": "Dr. Brian Parr conducts research in agricultural education pedagogy, precision livestock management, and rural agronomic community development."
      },
      {
        "name": "Dr. David Ferguson",
        "role": "Professor and Chair of Occupational Safety and Health",
        "department": "Department of Occupational Safety and Health",
        "subject": "environment",
        "bio": "Dr. David Ferguson is a board-certified safety professional specializing in industrial accident modeling, occupational ergonomics, and corporate hazard mitigation systems."
      }
    ]
  },

  # 8. National American University (Row 841)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "National American University",
    "shortName": "National American",
    "slug": "national-american-university-rapid-city",
    "location": "Rapid City, South Dakota, United States",
    "website": "https://www.national.edu",
    "sourceRow": 841,
    "stats": {"established": "1941", "students": "2,800+", "international": "3%", "faculty": "150+"},
    "heroSummary": "National American University is a private, regionally accredited multi-campus and online university founded in Rapid City, South Dakota. Widely recognized for its specialized programs in intelligence management, national security, strategic leadership, and nursing.",
    "academicOverview": "National American University houses the Henley-Putnam School of Strategic Security, the College of Business, Technology, and Health Management, and the School of Nursing. Specialized curricula focus on counterterrorism, operational intelligence, and strategic protection.",
    "researchAdmissions": "Undergraduate admissions require high school graduation or GED. The Henley-Putnam School of Strategic Security programs evaluate professional resumes, background verification, and prior military, law enforcement, or corporate security experience.",
    "opps": [
      {
        "title": "Doctor of Strategic Security (DSS)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Henley-Putnam Strategic Security Scholarships providing up to $6,000 per year",
        "fee": "$45",
        "tuition": "$675/credit hour",
        "desc": "Terminal professional doctoral degree concentrating on intelligence analysis, counterterrorism strategy, geopolitical threat assessment, and strategic protection operations.",
        "requirements": {"gpa": "Master's degree with min. 3.0 GPA and demonstrated security/intelligence experience", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Doctoral research statement on national or strategic security", "references": "Three professional and security supervisor letters"},
        "source": "https://www.national.edu/programs/henley-putnam-school-of-strategic-security/doctor-of-strategic-security/"
      },
      {
        "title": "Master of Science in Intelligence Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Military and First Responder Tuition Scholarships reducing tuition by up to 25%",
        "fee": "$45",
        "tuition": "$525/credit hour",
        "desc": "Covers collection management, covert action analysis, intelligence ethics, open-source intelligence (OSINT), and counterintelligence methodologies.",
        "requirements": {"gpa": "Bachelor's degree with min. 2.5 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Professional resume and statement of intent", "references": "Two professional references"},
        "source": "https://www.national.edu/programs/henley-putnam-school-of-strategic-security/master-of-science-in-intelligence-management/"
      },
      {
        "title": "Master of Business Administration (MBA - Healthcare Administration)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "NAU Healthcare Leadership Grants providing $3,500 total award",
        "fee": "$45",
        "tuition": "$525/credit hour",
        "desc": "Equips healthcare executives with operational hospital analytics, regulatory compliance, health informatics, and clinical revenue cycle management.",
        "requirements": {"gpa": "Accredited bachelor's degree with min. 2.5 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://www.national.edu/programs/college-of-business-technology-health-management/master-of-business-administration/"
      },
      {
        "title": "Bachelor of Science in Intelligence Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Veterans and Law Enforcement Service Grants up to $4,000/year",
        "fee": "$35",
        "tuition": "$380/credit hour",
        "desc": "Hands-on instruction in threat identification, structured analytic techniques, critical infrastructure defense, and asymmetric warfare analysis.",
        "requirements": {"gpa": "High school diploma or GED with min. 2.0 GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of professional interest", "references": "One professional reference"},
        "source": "https://www.national.edu/programs/henley-putnam-school-of-strategic-security/bachelor-of-science-in-intelligence-management/"
      },
      {
        "title": "Bachelor of Science in Information Technology (Cybersecurity)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "NAU STEM Workforce Achievement Scholarships up to $3,500/year",
        "fee": "$35",
        "tuition": "$380/credit hour",
        "desc": "Covers digital network security, ethical penetration testing, firewall management, relational SQL databases, and incident forensics.",
        "requirements": {"gpa": "2.0 minimum high school GPA or GED", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One character reference"},
        "source": "https://www.national.edu/programs/college-of-business-technology-health-management/bachelor-of-science-in-information-technology/"
      },
      {
        "title": "NAU National Security Honors Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "50% tuition reduction across all four years of undergraduate or doctoral study ($18,000 total value)",
        "fee": "$0",
        "tuition": "50% tuition remission",
        "desc": "Competitive institutional merit award supporting active service members, veterans, and homeland security professionals pursuing strategic degrees.",
        "requirements": {"gpa": "Undergraduate GPA >= 3.5 or military/law enforcement service honors", "ielts": "Exempt", "gre": "Exempt", "papers": "National Security Leadership essay", "references": "Two supervisory endorsements"},
        "source": "https://www.national.edu/financial-aid/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Ronald L. Shape",
        "role": "President and Chief Executive Officer",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Ronald L. Shape serves as President of NAU, guiding institutional modernization, non-traditional student degree accessibility, and military educational alliances."
      },
      {
        "name": "Dr. Barbara Burke",
        "role": "Dean of Henley-Putnam School of Strategic Security",
        "department": "Henley-Putnam School of Strategic Security",
        "subject": "social-sciences",
        "bio": "Dr. Barbara Burke directs national security and intelligence curricula, with research focusing on threat management, counterintelligence doctrine, and military adult learning."
      },
      {
        "name": "Dr. Cindy Mathena",
        "role": "Provost and Chief Academic Officer",
        "department": "Office of Academic Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Cindy Mathena provides academic governance over collegiate curriculum quality, distance learning pedagogy, and healthcare accreditation standards."
      }
    ]
  }
]

print(f"Part 1 Chunk 1 loaded: {len(chunk1)} USA universities")
