# scripts/make_b71_p2_chunk2.py
# Batch 71 Part 2 Chunk 2: Universities 24 to 30
# 24. Kutztown University of Pennsylvania (Row 781)
# 25. North Carolina Central University (Row 865)
# 26. North Carolina Wesleyan University (Row 868)
# 27. Metropolitan State University (Row 813)
# 28. Missouri Valley College (Row 827)
# 29. University of Maryland Global Campus (Row 1101)
# 30. University of Louisiana at Lafayette (Row 800)

chunk4 = [
  # 24. Kutztown University of Pennsylvania (Row 781)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Kutztown University of Pennsylvania",
    "shortName": "Kutztown",
    "slug": "kutztown-university-of-pennsylvania",
    "location": "Kutztown, Pennsylvania, United States",
    "website": "https://www.kutztown.edu",
    "sourceRow": 781,
    "stats": {"established": "1866", "students": "7,500+", "international": "3%", "faculty": "480+"},
    "heroSummary": "Kutztown University of Pennsylvania (KU) is a comprehensive public university established in 1866, nestled in the rolling countryside of Kutztown, Pennsylvania, between Reading and Allentown. A member of the Pennsylvania State System of Higher Education (PASSHE), Kutztown is internationally acclaimed for visual and commercial arts, education, business administration, and computer science and information technology.",
    "academicOverview": "KU comprises four colleges: the College of Visual and Performing Arts, College of Liberal Arts and Sciences, College of Business, and College of Education. The university operates the Sharadin Arts Building and the Pennsylvania German Cultural Heritage Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and transcripts with test-optional application options. Graduate master's programs require an accredited bachelor's degree with a minimum 2.8–3.0 GPA, personal statement, two letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+). Graduate assistantships provide full tuition waivers and stipends.",
    "opps": [
      {
        "title": "Bachelor of Fine Arts (BFA) in Communication Design - Graphic Design & Advertising",
        "type": "Scholarship",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Sharadin Arts Visual Merit Scholarships up to $6,000/year",
        "fee": "$35",
        "tuition": "$15,200/year (out-of-state) / $7,716/year (in-state)",
        "desc": "Nationally acclaimed NASAD-accredited communication design program with an elite creative alumni network, training graphic designers, art directors, and interactive UI/UX specialists in the Sharadin Arts Building.",
        "requirements": {
          "gpa": "2.8+ high school GPA with portfolio submission (10-15 creative works)",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "Transcripts, visual portfolio submission, essay",
          "references": "One art teacher recommendation"
        },
        "source": "https://www.kutztown.edu/academics/colleges-and-departments/visual-and-performing-arts/majors-and-minors/communication-design.html"
      },
      {
        "title": "Master of Science in Computer Science - Software Engineering & Cloud Infrastructure",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Departmental Graduate Assistantships with full tuition waiver plus $6,000/year stipend",
        "fee": "$35",
        "tuition": "$0 (With full GA)",
        "desc": "Rigorous graduate computing program emphasizing enterprise software engineering, distributed cloud computing, cybersecurity vulnerability assessment, and advanced database architecture.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA in computer science, software engineering, or STEM",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of purpose, resume, official transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.kutztown.edu/academics/colleges-and-departments/liberal-arts-and-sciences/departments/computer-science-and-information-technology/graduate-program.html"
      },
      {
        "title": "Master of Business Administration (MBA) - Value-Driven Management & Financial Strategy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "College of Business Graduate Assistantships up to $5,000/year",
        "fee": "$35",
        "tuition": "$14,800/year (out-of-state) / $9,800/year (in-state)",
        "desc": "AACSB-accredited 30-credit-hour MBA delivering executive training in corporate financial analytics, strategic marketing, managerial economics, and supply chain logistics.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GMAT/GRE waiver available",
          "papers": "Resume, personal career statement, transcripts",
          "references": "Two professional references"
        },
        "source": "https://www.kutztown.edu/academics/colleges-and-departments/business/programs/mba.html"
      },
      {
        "title": "Master of Education in Reading - Reading Specialist Certification",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "PASSHE Educator Advancement Grants up to $4,000/year",
        "fee": "$35",
        "tuition": "$14,500/year",
        "desc": "CAEP-accredited graduate education degree leading to Pennsylvania Reading Specialist K-12 certification, focusing on diagnostic reading clinical practicum, dyslexia remediation, and literacy leadership.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with teaching certification",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Teaching certificate, personal essay, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.kutztown.edu/academics/colleges-and-departments/education/programs/reading-med.html"
      },
      {
        "title": "Bachelor of Science in Marine Science - Coastal Ecology & Oceanography",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Chincoteague Bay Field Station Research Grants up to $4,000/year",
        "fee": "$35",
        "tuition": "$15,200/year (out-of-state) / $7,716/year (in-state)",
        "desc": "Hands-on marine science degree utilizing KU's membership in the Chincoteague Bay Field Station on Wallops Island, Virginia, to conduct marine invertebrate physiology and coastal oceanography.",
        "requirements": {
          "gpa": "2.8+ high school GPA with biology and chemistry background",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and personal statement",
          "references": "Not required"
        },
        "source": "https://www.kutztown.edu/academics/colleges-and-departments/liberal-arts-and-sciences/departments/physical-sciences/marine-science.html"
      },
      {
        "title": "Master of Social Work (MSW) - Family-In-Environment Clinical Practice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Graduate Social Work Assistantships and Rural Mental Health Stipends up to $6,000/year",
        "fee": "$35",
        "tuition": "$15,200/year",
        "desc": "CSWE-accredited social work degree utilizing a distinctive 'family-in-environment' framework to prepare clinical social workers for mental health clinics, schools, and child welfare agencies.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of social work purpose, CV, official transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.kutztown.edu/academics/colleges-and-departments/liberal-arts-and-sciences/departments/social-work/msw.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Lisa Frye",
        "role": "Professor and Chair of Computer Science and Information Technology",
        "department": "Department of Computer Science and Information Technology",
        "subject": "computer-science",
        "bio": "Dr. Lisa Frye researches software-defined networking (SDN), network management protocol security, wireless sensor networks, and computer science educational pedagogical methods."
      },
      {
        "name": "Dr. Matthew Stone",
        "role": "Associate Professor of Physical Sciences",
        "department": "Department of Physical Sciences",
        "subject": "environment",
        "bio": "Dr. Matthew Stone conducts research in chemical oceanography, marine sediment biogeochemistry, nutrient fluxes in estuarine waters, and environmental trace metal speciation."
      },
      {
        "name": "Dr. John Jackson",
        "role": "Professor of Social Work and MSW Program Director",
        "department": "Department of Social Work",
        "subject": "social-sciences",
        "bio": "Dr. John Jackson investigates rural community mental health access, family systems therapy models, addiction recovery clinical protocols, and child welfare policy outcomes."
      }
    ]
  },

  # 25. North Carolina Central University (Row 865)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "North Carolina Central University",
    "shortName": "NCCU",
    "slug": "north-carolina-central-university",
    "location": "Durham, North Carolina, United States",
    "website": "https://www.nccu.edu",
    "sourceRow": 865,
    "stats": {"established": "1910", "students": "8,000+", "international": "4%", "faculty": "560+"},
    "heroSummary": "North Carolina Central University (NCCU) is a premier comprehensive public historically Black university (HBCU) founded in 1910, situated on a historic 135-acre campus in Durham, North Carolina, within the thriving Research Triangle. Renowned for biomedical sciences through the Julius L. Chambers Biomedical/Biotechnology Research Institute (BBRI), the Biomanufacturing Research Institute and Technology Enterprise (BRITE), the NCCU School of Law, and jazz studies, NCCU is a national beacon for biotechnology and legal equity.",
    "academicOverview": "NCCU comprises seven schools and colleges: the College of Health and Sciences, College of Arts, Social Sciences and Humanities, School of Business, School of Law, School of Library and Information Sciences (SLIS), School of Education, and the Graduate School. The university operates BBRI and the BRITE biomanufacturing pilot facility.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, transcripts, and personal statements with test-optional application options. Graduate doctoral and master's admissions require an accredited bachelor's degree with a minimum 2.8–3.0 GPA, statement of purpose, recommendation letters, and English proficiency (TOEFL 79+ or IELTS 6.5+). Graduate Research Assistantships (GRA) through BRITE/BBRI provide stipends up to $22,000/year plus tuition remission.",
    "opps": [
      {
        "title": "Ph.D. in Integrated Biosciences - Cancer Health Disparities & Drug Discovery - BBRI",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "BBRI Doctoral Research Assistantship: $24,000/year stipend, full tuition remission, and health insurance",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "Premier doctoral training program housed in the Julius L. Chambers BBRI, exploring oncogenic signaling mechanisms in prostate and breast cancers, metabolic diseases, and novel natural product drug discovery.",
        "requirements": {
          "gpa": "3.2+ GPA in biological sciences, biochemistry, or chemistry",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of research interests, CV, official transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.nccu.edu/health-sciences/integrated-biosciences-phd"
      },
      {
        "title": "Master of Science in Pharmaceutical Sciences - Biomanufacturing & Process Analytics - BRITE",
        "type": "Fellowship",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology", "engineering"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "BRITE Graduate Fellowships: $16,000/year stipend plus tuition support",
        "fee": "$50",
        "tuition": "$0 (With fellowship)",
        "desc": "Cutting-edge biopharmaceutical master's utilizing the 52,000-sq-ft BRITE pilot plant to train specialists in monoclonal antibody expression, bioreactor cell culture, chromatographic purification, and cGMP compliance.",
        "requirements": {
          "gpa": "3.0+ GPA in chemistry, biology, pharmacy, or chemical engineering",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE not required",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two recommendation letters"
        },
        "source": "https://www.nccu.edu/brite/academic-programs/graduate-programs"
      },
      {
        "title": "Juris Doctor (J.D.) - Civil Rights & Environmental Justice - NCCU School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "School of Law Dean's Leadership Merit Scholarships up to 100% tuition",
        "fee": "$50 (Waiver available)",
        "tuition": "$32,500/year (out-of-state) / $19,800/year (in-state)",
        "desc": "Historic ABA-accredited law school established in 1939 with a pioneering mission of equal justice under law, featuring clinical externships in biotechnology patent law, environmental justice, and civil rights litigation.",
        "requirements": {
          "gpa": "Accredited bachelor's degree with competitive undergraduate GPA",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "LSAT score required",
          "papers": "Personal statement, resume, CAS law school report",
          "references": "Two letters of recommendation"
        },
        "source": "https://law.nccu.edu/admissions/"
      },
      {
        "title": "Master of Science in Information Science (MSIS) - Cybersecurity & Health Informatics - SLIS",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "School of Library & Information Sciences Endowed Grants up to $6,000/year",
        "fee": "$50",
        "tuition": "$17,400/year (out-of-state) / $8,900/year (in-state)",
        "desc": "ALA-accredited STEM master's based in the Research Triangle, exploring database administration, health informatics architecture, cybersecurity policy, and data warehousing.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two academic recommendations"
        },
        "source": "https://www.nccu.edu/slis/msis"
      },
      {
        "title": "Master of Music (MM) in Jazz Studies - Performance & Composition",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Jazz Studies Graduate Assistantships with tuition waivers and performance stipends",
        "fee": "$50",
        "tuition": "$16,500/year (out-of-state) / $8,400/year (in-state)",
        "desc": "Nationally acclaimed HBCU jazz studies graduate program founded by jazz legends, offering intensive big band and combo performance, jazz arranging, advanced improvisation, and historical pedagogy.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA in music or audition equivalent",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Performance audition tape, repertoire list, transcripts",
          "references": "Two recommendations from music professionals"
        },
        "source": "https://www.nccu.edu/jazz-studies"
      },
      {
        "title": "Master of Science in Mathematics - Applied Statistics & Biomathematics",
        "type": "Degree",
        "subject": "mathematics",
        "subjects": ["mathematics", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Departmental Teaching Assistantships with stipends up to $10,000/year plus tuition remission",
        "fee": "$50",
        "tuition": "$16,500/year",
        "desc": "Applied mathematics graduate program preparing students for Research Triangle biotech careers in epidemiological modeling, statistical computing in R/SAS, and numerical algorithms.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA in mathematics or quantitative STEM",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of goals, CV, transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.nccu.edu/math/graduate"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Hernan Navarro",
        "role": "Director of BRITE and Professor of Pharmaceutical Sciences",
        "department": "Biomanufacturing Research Institute and Technology Enterprise",
        "subject": "chemistry",
        "bio": "Dr. Hernan Navarro directs biopharmaceutical research at BRITE, investigating drug discovery for central nervous system disorders, high-throughput screening, and therapeutic lead optimization."
      },
      {
        "name": "Dr. Antonio Baines",
        "role": "Associate Professor of Biological and Biomedical Sciences",
        "department": "Julius L. Chambers Biomedical/Biotechnology Research Institute",
        "subject": "biology",
        "bio": "Dr. Antonio Baines researches pancreatic cancer molecular genetics, targeting oncogenic Ras/Ral small GTPases and evaluating novel kinase inhibitors to overcome chemo-resistance."
      },
      {
        "name": "Dr. April Dawson",
        "role": "Associate Dean of Technology and Professor of Law",
        "department": "School of Law",
        "subject": "social-sciences",
        "bio": "Dr. April Dawson examines the intersection of constitutional law, artificial intelligence algorithms in judicial sentencing, legal technology pedagogy, and Supreme Court jurisprudence."
      }
    ]
  },

  # 26. North Carolina Wesleyan University (Row 868)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "North Carolina Wesleyan University",
    "shortName": "NC Wesleyan",
    "slug": "north-carolina-wesleyan-university",
    "location": "Rocky Mount, North Carolina, United States",
    "website": "https://ncwu.edu",
    "sourceRow": 868,
    "stats": {"established": "1956", "students": "2,000+", "international": "7%", "faculty": "140+"},
    "heroSummary": "North Carolina Wesleyan University (NCWU) is a dynamic private, multi-faith university established in 1956, situated on a scenic 200-acre campus in Rocky Mount, North Carolina. Acclaimed for undergraduate biology and biomedical research, criminal justice, organizational management, and teacher education, NCWU offers small class sizes, individualized faculty research mentorship, and vibrant international student community engagement.",
    "academicOverview": "NCWU offers bachelor's degrees and graduate programs through the School of Mathematics and Sciences, School of Business, School of Social Sciences & Humanities, and the School of Education. The university operates the Dunn Center for the Performing Arts.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, secondary school preparation, and personal statements with test-optional reviews. International merit scholarships covering up to $15,000/year are automatically awarded to eligible undergraduate candidates based on academic records.",
    "opps": [
      {
        "title": "Bachelor of Science in Biomedical Sciences - Pre-Medical & Molecular Biology",
        "type": "Scholarship",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Bishop Science Merit Scholarships up to $15,000/year",
        "fee": "$0 (Free application)",
        "tuition": "$33,400/year",
        "desc": "Hands-on undergraduate biomedical program providing laboratory research in molecular genetics, histology, human physiology, and clinical shadowing at UNC Health Nash.",
        "requirements": {
          "gpa": "2.8+ high school GPA with biology and chemistry coursework",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and personal statement",
          "references": "Not required"
        },
        "source": "https://ncwu.edu/academics/undergraduate/biomedical-sciences/"
      },
      {
        "title": "Master of Science in Strategic Leadership - Organizational Change & Analytics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Graduate Leadership Scholarships up to $4,000/year",
        "fee": "$25",
        "tuition": "$12,500/year",
        "desc": "Flexible 30-credit-hour graduate leadership curriculum concentrating on ethical decision making, executive team motivation, organizational change, and strategic planning.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA",
          "ielts": "IELTS 6.0+ or TOEFL 75+",
          "gre": "Not required",
          "papers": "Resume, personal leadership essay, transcripts",
          "references": "Two professional references"
        },
        "source": "https://ncwu.edu/academics/graduate/ms-strategic-leadership/"
      },
      {
        "title": "Bachelor of Science in Computer Information Systems - Cyber Defense & Web Technologies",
        "type": "Scholarship",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "STEM Leadership Grants up to $14,000/year",
        "fee": "$0",
        "tuition": "$33,400/year",
        "desc": "Applied computing degree preparing graduates in enterprise network architecture, defensive cybersecurity, database administration with SQL, and modern full-stack web engineering.",
        "requirements": {
          "gpa": "2.5+ high school GPA",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "Transcripts and application",
          "references": "Not required"
        },
        "source": "https://ncwu.edu/academics/undergraduate/cis/"
      },
      {
        "title": "Bachelor of Science in Criminal Justice - Forensic Investigation & Homeland Security",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "NC Wesleyan Academic Excellence Awards up to $13,500/year",
        "fee": "$0",
        "tuition": "$33,400/year",
        "desc": "Comprehensive criminal justice program exploring criminal constitutional law, forensic evidence collection, correctional rehabilitation, and intelligence counter-terrorism.",
        "requirements": {
          "gpa": "2.5+ high school GPA",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts, personal essay",
          "references": "Not required"
        },
        "source": "https://ncwu.edu/academics/undergraduate/criminal-justice/"
      },
      {
        "title": "Bachelor of Science in Environmental Science - Conservation & Wetland Hydrology",
        "type": "Scholarship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Environmental Stewardship Grants up to $13,000/year",
        "fee": "$0",
        "tuition": "$33,400/year",
        "desc": "Interdisciplinary environmental degree utilizing coastal plain freshwater river basins to study water quality monitoring, soil conservation, and endangered local wildlife preservation.",
        "requirements": {
          "gpa": "2.8+ high school GPA",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and personal statement",
          "references": "Not required"
        },
        "source": "https://ncwu.edu/academics/undergraduate/environmental-science/"
      },
      {
        "title": "Master of Criminal Justice (MCJ) - Advanced Administration & Criminological Theory",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Criminal Justice Professional Traineeships up to $3,500/year",
        "fee": "$25",
        "tuition": "$12,500/year",
        "desc": "Online and hybrid master's program for law enforcement executives, focusing on community-oriented policing administration, criminal justice statistical research, and correctional policy reform.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA",
          "ielts": "IELTS 6.0+ or TOEFL 75+",
          "gre": "Not required",
          "papers": "Professional resume, statement of purpose, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://ncwu.edu/academics/graduate/mcj/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Danielle Simpson",
        "role": "Associate Professor and Program Coordinator of Criminal Justice",
        "department": "Department of Criminal Justice",
        "subject": "social-sciences",
        "bio": "Dr. Danielle Simpson investigates juvenile justice policy, police-community relations, restorative justice alternatives, and mental health interventions in correctional systems."
      },
      {
        "name": "Dr. Daniel Stovall",
        "role": "Associate Professor of Biology",
        "department": "Department of Mathematics and Sciences",
        "subject": "biology",
        "bio": "Dr. Daniel Stovall researches cancer molecular biology, investigating transcriptional regulation, glioblastoma cell migration, and zinc-finger transcription factors in undergraduate research labs."
      },
      {
        "name": "Dr. Kelvin Spragley",
        "role": "Associate Professor of Education and Coordinator of Diversity Programming",
        "department": "School of Education",
        "subject": "social-sciences",
        "bio": "Dr. Kelvin Spragley researches culturally responsive teaching methods, minority teacher recruitment, and pedagogical equity in rural North Carolina public schools."
      }
    ]
  },

  # 27. Metropolitan State University (Row 813)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Metropolitan State University",
    "shortName": "Metro State",
    "slug": "metropolitan-state-university",
    "location": "St. Paul, Minnesota, United States",
    "website": "https://www.metrostate.edu",
    "sourceRow": 813,
    "stats": {"established": "1971", "students": "9,800+", "international": "5%", "faculty": "560+"},
    "heroSummary": "Metropolitan State University (Metro State) is an urban comprehensive public university founded in 1971 in St. Paul and Minneapolis, Minnesota. A member of the Minnesota State Colleges and Universities system, Metro State is acclaimed for cybersecurity and computer science—hosting Minnesota's premier Cyber Range—nursing, dental hygiene, community psychology, and business administration, serving a diverse adult learner population in the Twin Cities.",
    "academicOverview": "Metro State operates through five colleges: the College of Sciences, College of Nursing and Health Sciences, College of Management, College of Liberal Arts, and the School of Urban Education. The university operates the Minnesota Cyber Range and the Science Education Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school diplomas or prior college transfer credits with accessible, test-optional admissions. Graduate programs require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 80+ or IELTS 6.5+). Graduate scholarships and assistantships are available.",
    "opps": [
      {
        "title": "Master of Science in Cybersecurity - Defensive Operations & Minnesota Cyber Range",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "National Science Foundation CyberCorps Scholarships for Service (Full tuition + $34,000 stipend)",
        "fee": "$40",
        "tuition": "$13,800/year (out-of-state) / $9,500/year (in-state)",
        "desc": "NSA-designated Center of Academic Excellence in Cyber Defense, utilizing the cutting-edge Minnesota Cyber Range to train defensive analysts in threat hunting, industrial control protection, and digital forensics.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in computer science, IT, or STEM",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Statement of purpose, resume, official transcripts",
          "references": "Two professional or academic letters"
        },
        "source": "https://www.metrostate.edu/academics/cybersecurity-ms"
      },
      {
        "title": "Doctor of Nursing Practice (DNP) - Family Nurse Practitioner & Systems Leadership",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Advanced Nursing Education Workforce (ANEW) HRSA Grants up to $15,000",
        "fee": "$40",
        "tuition": "$18,500/year",
        "desc": "CCNE-accredited terminal nursing practice doctorate delivering comprehensive primary care clinical rotations across Twin Cities healthcare systems, health disparities epidemiology, and healthcare informatics.",
        "requirements": {
          "gpa": "3.0+ BSN GPA and active unencumbered Minnesota RN license",
          "ielts": "IELTS 7.0+ or TOEFL 85+",
          "gre": "Not required",
          "papers": "Resume showing 1+ year clinical RN practice, personal statement, transcripts",
          "references": "Three professional references"
        },
        "source": "https://www.metrostate.edu/academics/doctor-nursing-practice"
      },
      {
        "title": "Master of Science in Computer Science - Machine Learning & Distributed Cloud Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Departmental Graduate Assistantships up to $7,000/year",
        "fee": "$40",
        "tuition": "$13,800/year (out-of-state) / $9,500/year (in-state)",
        "desc": "Advanced computer science curriculum exploring deep learning architectures, cloud computing in AWS and Kubernetes, modern compiler design, and algorithmic optimization.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in computer science or related mathematics/engineering",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.metrostate.edu/academics/computer-science-ms"
      },
      {
        "title": "Master of Business Administration (MBA) - Healthcare & Strategic Analytics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "College of Management Graduate Fellowships up to $5,000/year",
        "fee": "$40",
        "tuition": "$14,500/year",
        "desc": "ACBSP-accredited MBA curriculum partnering with Twin Cities medical and technology headquarters, emphasizing data-driven financial decision making, healthcare governance, and corporate strategy.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GMAT/GRE waiver available with work experience",
          "papers": "Professional resume, essay on management goals, transcripts",
          "references": "Two professional references"
        },
        "source": "https://www.metrostate.edu/academics/business-administration-mba"
      },
      {
        "title": "Master of Science in Dental Hygiene - Advanced Clinical Practice & Oral Public Health",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Dental Public Health Traineeship Scholarships up to $6,000/year",
        "fee": "$40",
        "tuition": "$15,200/year",
        "desc": "Pioneering dental graduate curriculum training dental hygienists for dental therapy clinical practice, oral public health advocacy, community health epidemiology, and clinical pedagogy.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in dental hygiene with active dental hygiene license",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Statement of professional goals, CV, license verification, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.metrostate.edu/academics/dental-hygiene-ms"
      },
      {
        "title": "Master of Science in Community Psychology - Mental Health Evaluation & Social Justice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Urban Community Psychology Fellowships up to $5,000/year",
        "fee": "$40",
        "tuition": "$13,800/year",
        "desc": "Interdisciplinary community psychology master's focusing on urban community program evaluation, cross-cultural mental health intervention, participatory action research, and public policy advocacy.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA in psychology or social sciences",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Personal statement, writing sample, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.metrostate.edu/academics/community-psychology-ms"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Faisal Kaleem",
        "role": "Professor of Computer Science & Cybersecurity and Director of the Minnesota Cyber Range",
        "department": "Department of Computer Science and Cybersecurity",
        "subject": "computer-science",
        "bio": "Dr. Faisal Kaleem is a cybersecurity researcher who founded the Minnesota Cyber Range, investigating digital forensics, zero-trust network protocols, cellular security, and gamified cyber threat simulations."
      },
      {
        "name": "Dr. Maya Sullivan",
        "role": "Associate Professor of Nursing",
        "department": "Department of Nursing",
        "subject": "biology",
        "bio": "Dr. Maya Sullivan investigates health equity in urban maternal-child health, community-based doula interventions, and nursing workforce retention among underrepresented clinical providers."
      },
      {
        "name": "Dr. Glen Morris",
        "role": "Associate Professor of Natural Sciences",
        "department": "Department of Natural Sciences",
        "subject": "environment",
        "bio": "Dr. Glen Morris researches Mississippi River urban watershed biogeochemistry, aquatic nutrient loading, storm-water wetland filtration, and freshwater macroinvertebrate ecology in the Twin Cities."
      }
    ]
  },

  # 28. Missouri Valley College (Row 827)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Missouri Valley College",
    "shortName": "Missouri Valley",
    "slug": "missouri-valley-college",
    "location": "Marshall, Missouri, United States",
    "website": "https://www.moval.edu",
    "sourceRow": 827,
    "stats": {"established": "1889", "students": "1,600+", "international": "18%", "faculty": "110+"},
    "heroSummary": "Missouri Valley College (MVC) is an independent four-year liberal arts college established in 1889, situated on a 150-acre campus in Marshall, Missouri, in the heart of the Missouri River agricultural basin. Celebrated for agricultural business, nursing and health sciences, biology, criminal justice, and intercollegiate athletics, MVC serves a vibrant international student body drawn from over 40 countries worldwide.",
    "academicOverview": "MVC offers undergraduate and graduate programs through five divisions: the Division of Agribusiness, Division of Business, Division of Nursing and Health Sciences, Division of Math and Sciences, and the Division of Education. The university operates the Malcolm Center for Student Life and the Burns Athletic Complex.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, secondary school preparation, and personal statements with test-optional reviews. International undergraduate merit scholarships covering $8,000 to $16,000/year are automatically awarded based on academic transcripts and athletic/artistic talent.",
    "opps": [
      {
        "title": "Bachelor of Science in Agribusiness - Crop Management & Agricultural Finance",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Missouri Valley Agricultural Leadership Scholarships up to $14,000/year",
        "fee": "$0 (Free application)",
        "tuition": "$21,800/year",
        "desc": "Hands-on agribusiness degree situated in fertile Midwestern farmland, training students in commodity grain marketing, precision crop agronomy, farm risk management, and agribusiness economics.",
        "requirements": {
          "gpa": "2.5+ high school GPA with mathematics readiness",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and application form",
          "references": "Not required"
        },
        "source": "https://www.moval.edu/academics/agribusiness/"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - Rural Clinical Care & Emergency Simulation",
        "type": "Scholarship",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Division of Nursing Healthcare Merit Grants up to $15,000/year",
        "fee": "$0",
        "tuition": "$21,800/year",
        "desc": "CCNE-accredited undergraduate nursing program featuring high-fidelity simulation labs and clinical hospital rotations at Fitzgibbon Hospital and regional central Missouri healthcare centers.",
        "requirements": {
          "gpa": "3.0+ high school GPA with chemistry and biology coursework",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not applicable",
          "papers": "Transcripts, essay on nursing philosophy",
          "references": "One recommendation"
        },
        "source": "https://www.moval.edu/academics/nursing/"
      },
      {
        "title": "Master of Arts in Educational Administration - K-12 Leadership & School Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Educator Advancement Grants up to $3,500/year",
        "fee": "$0",
        "tuition": "$10,500/year",
        "desc": "State-approved online graduate program preparing teachers for school principal and administrator certification, emphasizing school budgeting, curriculum evaluation, and educational legal compliance.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA with teaching certification",
          "ielts": "IELTS 6.0+ or TOEFL 75+",
          "gre": "Not required",
          "papers": "Teaching license, resume, transcripts",
          "references": "Two administrator references"
        },
        "source": "https://www.moval.edu/academics/graduate-programs/educational-administration/"
      },
      {
        "title": "Bachelor of Science in Biology - Wildlife Ecology & Conservation Genetics",
        "type": "Scholarship",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Math and Science Achievement Awards up to $13,000/year",
        "fee": "$0",
        "tuition": "$21,800/year",
        "desc": "Field-oriented undergraduate biology curriculum utilizing Missouri River wetland ecosystems and native prairie reserves to conduct population genetics, ornithology, and water toxicology research.",
        "requirements": {
          "gpa": "2.8+ high school GPA with biology background",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and personal statement",
          "references": "Not required"
        },
        "source": "https://www.moval.edu/academics/biology/"
      },
      {
        "title": "Master of Science in Athletic Training (MSAT) - Sports Biomechanics & Injury Rehabilitation",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Athletic Training Clinical Assistantships up to $5,000/year",
        "fee": "$25",
        "tuition": "$16,200/year",
        "desc": "CAATE-accredited professional graduate program providing extensive clinical rotations with 30+ collegiate athletic teams, specializing in concussion assessment, therapeutic modalities, and orthopedic taping.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with human anatomy and physiology prerequisites",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "ATCAS application, observation hours log, transcripts",
          "references": "Two recommendations (at least one athletic trainer)"
        },
        "source": "https://www.moval.edu/academics/athletic-training/"
      },
      {
        "title": "Bachelor of Science in Criminal Justice - Law Enforcement Administration & Corrections",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Missouri Valley Merit Scholarships up to $12,000/year",
        "fee": "$0",
        "tuition": "$21,800/year",
        "desc": "Undergraduate criminal justice program covering criminal investigation techniques, constitutional rights, juvenile delinquency prevention, and correctional institution administration.",
        "requirements": {
          "gpa": "2.5+ high school GPA",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and application form",
          "references": "Not required"
        },
        "source": "https://www.moval.edu/academics/criminal-justice/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jennifer Livengood",
        "role": "Associate Professor of Psychology and Division of Social Sciences Chair",
        "department": "Division of Social Sciences",
        "subject": "social-sciences",
        "bio": "Dr. Jennifer Livengood investigates cognitive behavioral psychology, social media impacts on adolescent identity formation, and mental health counseling outcomes in rural collegiate populations."
      },
      {
        "name": "Dr. Michele Reinke",
        "role": "Professor of Biology",
        "department": "Division of Math and Sciences",
        "subject": "biology",
        "bio": "Dr. Michele Reinke researches physiological ecology, aquatic ecosystem toxicology, freshwater fish biodiversity in the Missouri River basin, and undergraduate science education pedagogy."
      },
      {
        "name": "Dr. Larry Stockman",
        "role": "Associate Professor of Business Administration",
        "department": "Division of Business",
        "subject": "social-sciences",
        "bio": "Dr. Larry Stockman researches agricultural economics, Midwest commodity distribution logistics, small business entrepreneurship, and rural economic revitalization strategies."
      }
    ]
  },

  # 29. University of Maryland Global Campus (Row 1101)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Maryland Global Campus",
    "shortName": "UMGC",
    "slug": "university-of-maryland-global-campus",
    "location": "Adelphi, Maryland, United States",
    "website": "https://www.umgc.edu",
    "sourceRow": 1101,
    "stats": {"established": "1947", "students": "90,000+", "international": "14%", "faculty": "3,800+"},
    "heroSummary": "The University of Maryland Global Campus (UMGC) is a premier public open-access university established in 1947, headquartered in Adelphi, Maryland, within the Washington, D.C. metropolitan region. As the online and adult learning institution of the University System of Maryland, UMGC educates over 90,000 students worldwide, specializing in cybersecurity and information technology—as an NSA/DHS designated Center of Academic Excellence—data analytics, biotechnology, business administration, and national security.",
    "academicOverview": "UMGC comprises the School of Cybersecurity & Information Technology, School_of_Business, and the School of Arts & Sciences, delivering career-aligned degrees across 140+ global locations including military installations in Europe, Asia, and the Middle East. The university is a world leader in virtual cyber competitions and digital laboratory simulations.",
    "researchAdmissions": "Undergraduate admissions evaluate high school completion or previous college transfer credits with open, test-optional admissions. Graduate master's and doctoral admissions require an accredited bachelor's or master's degree with a minimum 3.0 GPA, professional statement, and English language proficiency (TOEFL 79+ or IELTS 6.5+). Competitive military and merit scholarships are available.",
    "opps": [
      {
        "title": "Master of Science in Cybersecurity Technology - Cloud Security Architecture & Intrusion Analysis",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "NSA Cyber Security Scholarships and UMGC Graduate Merit Grants up to $6,000/year",
        "fee": "$50",
        "tuition": "$19,500/year (out-of-state) / $12,800/year (in-state)",
        "desc": "Designated by the NSA as a Center of Academic Excellence in Cyber Defense (CAE-CD), this master's covers packet-level network intrusion analysis, zero-trust cloud architecture in AWS/Azure, and penetration testing.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in computer science, IT, or STEM",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of purpose, resume, official transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.umgc.edu/online-degrees/masters/cybersecurity-technology"
      },
      {
        "title": "Doctor of Management (DM) - Executive Leadership & Strategic Innovation",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Executive Doctoral Fellowships up to $7,500/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "Terminal executive doctoral program designed for C-suite leaders and senior directors, investigating evidence-based management, organizational resilience, complex system dynamics, and corporate strategic governance.",
        "requirements": {
          "gpa": "3.3+ master's degree GPA and 5+ years of senior executive management experience",
          "ielts": "IELTS 7.0+ or TOEFL 85+",
          "gre": "Not required",
          "papers": "Doctoral research statement, executive resume, transcripts",
          "references": "Three professional references"
        },
        "source": "https://www.umgc.edu/online-degrees/doctoral/management"
      },
      {
        "title": "Master of Science in Data Analytics - Machine Learning & Predictive Modeling",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "STEM Graduate Technology Fellowships up to $5,000/year",
        "fee": "$50",
        "tuition": "$19,500/year (out-of-state) / $12,800/year (in-state)",
        "desc": "STEM-designated graduate degree training data scientists in Python, R, distributed big data architectures, neural network deep learning, and predictive business analytics.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with statistics readiness",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Resume, statement of purpose, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.umgc.edu/online-degrees/masters/data-analytics"
      },
      {
        "title": "Master of Science in Biotechnology - Regulatory Affairs & Biosecurity",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Biotechnology Graduate Industry Grants up to $5,000/year",
        "fee": "$50",
        "tuition": "$19,500/year (out-of-state) / $12,800/year (in-state)",
        "desc": "Located in the I-270 BioCapital corridor near the FDA and NIH, this master's prepares professionals in pharmaceutical regulatory compliance, vaccine manufacturing policy, and life science intellectual property.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in biology, chemistry, or related life science",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of purpose, CV, transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.umgc.edu/online-degrees/masters/biotechnology"
      },
      {
        "title": "Master of Business Administration (MBA) - Global Enterprise Strategy & Finance",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Business Dean's Graduate Scholarships up to $4,500/year",
        "fee": "$50",
        "tuition": "$19,500/year",
        "desc": "Career-focused 30-credit-hour MBA delivering competencies in financial modeling, multinational strategic marketing, supply chain optimization, and ethical corporate management.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Professional resume, essay, transcripts",
          "references": "Two professional references"
        },
        "source": "https://www.umgc.edu/online-degrees/masters/business-administration-mba"
      },
      {
        "title": "Master of Science in Digital Forensics and Cyber Investigation - Federal Evidence Recovery",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Cyber Forensics Leadership Awards up to $5,000/year",
        "fee": "$50",
        "tuition": "$19,500/year",
        "desc": "Advanced forensics master's preparing investigators for federal agencies and private enterprises in computer memory analysis, mobile device extraction, cloud telemetry acquisition, and court expert witness testimony.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in IT, computer science, or criminal justice",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Personal statement, resume, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.umgc.edu/online-degrees/masters/digital-forensics-cyber-investigation"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Loyce Pailen",
        "role": "Senior Director of the Center for Security Studies and Professor",
        "department": "School of Cybersecurity & Information Technology",
        "subject": "computer-science",
        "bio": "Dr. Loyce Pailen is a nationally recognized expert in cybersecurity governance, artificial intelligence security ethics, privacy-preserving biometric encryption, and cyber workforce pipeline development."
      },
      {
        "name": "Dr. James Robertson",
        "role": "Program Director and Associate Professor of Biotechnology",
        "department": "School of Arts & Sciences",
        "subject": "biology",
        "bio": "Dr. James Robertson researches biomanufacturing regulatory pathways, biosecurity protocols, vaccine commercialization logistics, and biological intellectual property management."
      },
      {
        "name": "Dr. Douglas Harrison",
        "role": "Vice President and Dean of the School of Cybersecurity & Information Technology",
        "department": "School of Cybersecurity & Information Technology",
        "subject": "computer-science",
        "bio": "Dr. Douglas Harrison investigates adult learning pedagogy in digital environments, adaptive computing assessments, and competency-based curricula in STEM disciplines."
      }
    ]
  },

  # 30. Texas A&M University (Row 984)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Texas A&M University",
    "shortName": "Texas A&M",
    "slug": "texas-a-m-university",
    "location": "College Station, Texas, United States",
    "website": "https://www.tamu.edu",
    "sourceRow": 984,
    "stats": {"established": "1876", "students": "74,000+", "international": "9%", "faculty": "4,200+"},
    "heroSummary": "Texas A&M University (Texas A&M / TAMU) is the flagship public land-, sea-, and space-grant Carnegie R1 doctoral research university of Texas, founded in 1876 in College Station, Texas. World-renowned for the College of Engineering, College of Agriculture & Life Sciences, School of Veterinary Medicine & Biomedical Sciences, Bush School of Government & Public Service, and Mays Business School, Texas A&M ranks among the nation's top research powerhouses with over $1.2 billion in annual research expenditures.",
    "academicOverview": "Texas A&M encompasses 16 colleges and schools, operating the Texas A&M Engineering Experiment Station (TEES), Texas A&M Transportation Institute (TTI), and Texas A&M AgriLife Research. TAMU holds the largest single-campus student body in the United States and is a founding member of the Association of American Universities (AAU).",
    "researchAdmissions": "Undergraduate admissions evaluate class rank, academic transcripts, and essays with test-optional reviews. Graduate doctoral programs offer multi-year fellowships, Graduate Research Assistantships (GRA), and Graduate Teaching Assistantships (GTA) ($28,000–$36,000/year plus full tuition remission and health insurance). Application requires transcripts, statement of purpose, three recommendation letters, and English proficiency (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Aerospace Engineering - Hypersonics & Space Systems - TEES",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "TEES Graduate Research Fellowship: $32,000/year stipend, full tuition remission, and health insurance",
        "fee": "$90",
        "tuition": "$0 (Fully funded)",
        "desc": "Elite doctoral program at the National Aerothermochemistry and Hypersonics Laboratory, investigating high-enthalpy boundary layer transition, scramjet propulsion, plasma flow control, and autonomous orbital rendezvous.",
        "requirements": {
          "gpa": "3.5+ GPA in aerospace, mechanical, or materials engineering",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE Quantitative 160+ recommended",
          "papers": "Statement of purpose, academic CV, official transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://engineering.tamu.edu/aerospace/academics/degrees/graduate/phd.html"
      },
      {
        "title": "Ph.D. in Petroleum Engineering - Carbon Sequestration & Unconventional Reservoirs",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Harold Vance Departmental Doctoral Assistantship: $30,000/year stipend plus full tuition coverage",
        "fee": "$90",
        "tuition": "$0 (Fully funded)",
        "desc": "Consistently ranked as the #1 petroleum engineering department in the world, conducting cutting-edge research in deep subsurface CO2 mineral trapping, hydraulic fracture digital twins, and geothermal reservoir physics.",
        "requirements": {
          "gpa": "3.3+ GPA in petroleum, chemical, or mechanical engineering",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE General required",
          "papers": "Statement of research interests, resume, transcripts",
          "references": "Three academic references"
        },
        "source": "https://engineering.tamu.edu/petroleum/academics/degrees/graduate/phd.html"
      },
      {
        "title": "Doctor of Veterinary Medicine (DVM) - Comparative Oncology & Equine Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-09-15",
        "deadlineText": "September 15, 2027",
        "funding": "School of Veterinary Medicine Endowed Merit Scholarships up to $18,000/year",
        "fee": "$75",
        "tuition": "$38,500/year (out-of-state) / $24,200/year (in-state)",
        "desc": "World-leading veterinary medical center recognized for advanced clinical rotations in large animal surgery, equine lameness, comparative oncological therapies, and exotic wildlife conservation.",
        "requirements": {
          "gpa": "3.0+ cumulative GPA with prerequisite science coursework and clinical animal hours",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "GRE not required",
          "papers": "TMDSAS veterinary application, clinical experience log, transcripts",
          "references": "Three evaluations (including one licensed veterinarian)"
        },
        "source": "https://vetmed.tamu.edu/dvm/admissions/"
      },
      {
        "title": "Ph.D. in Computer Science - Autonomous Systems & Trustworthy Cybersecurity",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Research Assistantship: $30,000/year stipend with 100% tuition remission",
        "fee": "$90",
        "tuition": "$0 (Fully funded)",
        "desc": "Top-tier computing doctorate investigating machine learning robustness against adversarial perturbations, hardware-assisted security, distributed cloud storage, and human-robot cooperative algorithms.",
        "requirements": {
          "gpa": "3.4+ GPA in computer science, software engineering, or computer engineering",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "Statement of research purpose, CV, transcripts",
          "references": "Three academic letters"
        },
        "source": "https://engineering.tamu.edu/cse/academics/degrees/graduate/phd.html"
      },
      {
        "title": "Master of Public Service and Administration (MPSA) - National Security & Public Policy - Bush School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Bush School Merit Scholarships covering up to 100% of tuition plus $5,000/year stipend",
        "fee": "$0 (Application fee waiver provided)",
        "tuition": "$22,400/year (Scholarships apply)",
        "desc": "Prestigious public policy master's at the George H.W. Bush School of Government & Public Service, training leaders in homeland defense, international intelligence policy, and public agency management.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA from an accredited institution",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts, analytical writing sample",
          "references": "Three letters of recommendation"
        },
        "source": "https://bush.tamu.edu/admissions/degree/mpsa/"
      },
      {
        "title": "Ph.D. in Soil and Crop Sciences - Genomics & Climate-Resilient Agriculture - AgriLife",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Texas A&M AgriLife Doctoral Research Assistantship: $28,000/year stipend plus full tuition waiver",
        "fee": "$90",
        "tuition": "$0 (Fully funded)",
        "desc": "Global leader in agricultural innovation conducting field research on drought-tolerant cotton and sorghum genomic breeding, soil carbon dynamics, and remote-sensing precision hydrology.",
        "requirements": {
          "gpa": "3.2+ GPA in plant sciences, agronomy, soil science, or biology",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "Statement of research goals, CV, official transcripts",
          "references": "Three academic references"
        },
        "source": "https://soilcrop.tamu.edu/academics/graduate-programs/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Rodney Bowersox",
        "role": "Senior Associate Dean of Engineering and Professor of Aerospace Engineering",
        "department": "Department of Aerospace Engineering",
        "subject": "engineering",
        "bio": "Dr. Rodney Bowersox directs the Texas A&M National Aerothermochemistry and Hypersonics Laboratory, conducting groundbreaking research in high-speed optical diagnostics, plasma aerodynamics, and scramjet propulsion for the DoD and NASA."
      },
      {
        "name": "Dr. B. Don Russell",
        "role": "Distinguished Professor of Electrical and Computer Engineering and TEES Fellow",
        "department": "Department of Electrical & Computer Engineering",
        "subject": "engineering",
        "bio": "Dr. B. Don Russell is an elected member of the National Academy of Engineering who pioneered automated electrical power distribution fault detection and smart grid wildfire prevention technologies."
      },
      {
        "name": "Dr. Jane Welsh",
        "role": "Professor of Veterinary Integrative Biosciences",
        "department": "School of Veterinary Medicine & Biomedical Sciences",
        "subject": "biology",
        "bio": "Dr. Jane Welsh investigates neuro-immunology, animal models of multiple sclerosis, viral encephalitis mechanisms, and central nervous system remyelination therapies."
      }
    ]
  }
]
