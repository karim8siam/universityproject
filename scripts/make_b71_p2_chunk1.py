# scripts/make_b71_p2_chunk1.py
# Batch 71 Part 2 Chunk 1: Universities 16 to 23
# 16. Wilmington University (Row 1222)
# 17. Wisconsin Lutheran College (Row 1224)
# 18. Xavier University of Louisiana (Row 1226)
# 19. Yeshiva University (Row 1228)
# 20. York University - Nebraska (Row 1229)
# 21. University of Denver (Row 1079)
# 22. Kansas State University (Row 771)
# 23. Indiana University of Pennsylvania (Row 757)

chunk3 = [
  # 16. Wilmington University (Row 1222)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Wilmington University",
    "shortName": "WilmU",
    "slug": "wilmington-university",
    "location": "New Castle, Delaware, United States",
    "website": "https://www.wilmu.edu",
    "sourceRow": 1222,
    "stats": {"established": "1968", "students": "20,000+", "international": "12%", "faculty": "1,200+"},
    "heroSummary": "Wilmington University (WilmU) is a private, nonprofit doctoral research institution founded in 1968 in New Castle, Delaware. Nationally recognized for accessible career-oriented education, cybersecurity, healthcare and doctoral nursing practice, business administration, and educational technology, WilmU serves as a primary provider of flexible degree programs for working professionals and international scholars throughout the Mid-Atlantic.",
    "academicOverview": "WilmU comprises seven colleges: the College of Technology, College of Health Professions & Natural Sciences, College of Business, College of Education & Liberal Arts, College of Social & Behavioral Sciences, School of Law, and the Division of Doctoral Studies. The university is a designated National Center of Academic Excellence in Cyber Defense (CAE-CD).",
    "researchAdmissions": "Undergraduate admissions evaluate high school diplomas or equivalencies with open, test-optional policies. Graduate doctoral and master's admissions require an accredited bachelor's or master's degree with a minimum 3.0 GPA, professional resume, personal statement, and English proficiency (TOEFL 79+ or IELTS 6.5+). Merit scholarships and graduate assistantships are available.",
    "opps": [
      {
        "title": "Doctor of Science in Cybersecurity - Enterprise Information Assurance & Threat Governance",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Doctoral Cyber Leadership Scholarships up to $8,000/year",
        "fee": "$35",
        "tuition": "$18,500/year",
        "desc": "NSA/CAE-CD designated doctoral degree preparing cybersecurity C-suite executives, researchers, and policymakers in zero-trust architecture, cloud security governance, critical infrastructure defense, and adversarial threat modeling.",
        "requirements": {
          "gpa": "3.3+ GPA in a relevant master's degree in IT, cybersecurity, or computer science",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Doctoral research statement, professional CV, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.wilmu.edu/technology/cybersecurity-doctorate.aspx"
      },
      {
        "title": "Doctor of Nursing Practice (DNP) - Executive Healthcare Leadership & Clinical Innovation",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "College of Health Professions Endowed Traineeships up to $6,000/year",
        "fee": "$35",
        "tuition": "$16,800/year",
        "desc": "CCNE-accredited terminal practice degree equipping advanced practice nurses and healthcare executives with systems-level leadership, epidemiology, translational healthcare informatics, and clinical policy advocacy.",
        "requirements": {
          "gpa": "3.0+ MSN GPA from an accredited program and active unencumbered RN license",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Resume showing clinical leadership, DNP project proposal, transcripts",
          "references": "Three professional references"
        },
        "source": "https://www.wilmu.edu/health/doctor-of-nursing-practice.aspx"
      },
      {
        "title": "Master of Science in Information Systems Technologies - Artificial Intelligence & Cloud Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Technology Graduate Merit Grants up to $5,000/year",
        "fee": "$35",
        "tuition": "$15,200/year",
        "desc": "Practical STEM master's exploring enterprise cloud infrastructure in AWS and Azure, conversational AI deployment, business process automation, and data pipeline security.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA in technology, business, or related STEM",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.wilmu.edu/technology/information-systems-technologies-master.aspx"
      },
      {
        "title": "Doctor of Business Administration (DBA) - Strategic Management & Executive Analytics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "College of Business Executive Fellowships up to $7,000/year",
        "fee": "$35",
        "tuition": "$18,200/year",
        "desc": "IACBE-accredited doctoral business degree designed for corporate leaders, concentrating on econometric forecasting, applied organizational research, global marketing governance, and change management.",
        "requirements": {
          "gpa": "3.3+ master's degree GPA with managerial work experience",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GMAT/GRE not required",
          "papers": "Doctoral research goals essay, executive resume, transcripts",
          "references": "Three professional references"
        },
        "source": "https://www.wilmu.edu/business/dba.aspx"
      },
      {
        "title": "Master of Science in Environmental Science - Geospatial GIS & Wetland Restoration",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Delaware Estuary Environmental Research Grants up to $5,000/year",
        "fee": "$35",
        "tuition": "$15,200/year",
        "desc": "Applied environmental master's utilizing Delaware Bay coastal wetlands to study environmental impact assessment, spatial GIS cartography, watershed hydrology, and coastal resilience.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in natural sciences, biology, or environmental science",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Transcripts, statement of career objectives, resume",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.wilmu.edu/health/environmental-science-master.aspx"
      },
      {
        "title": "Master of Science in Administration of Justice - Cyber Crime & Forensic Investigation",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Criminal Justice Professional Scholarships up to $4,500/year",
        "fee": "$35",
        "tuition": "$15,200/year",
        "desc": "Advanced criminal justice degree exploring federal digital evidence recovery, dark web financial tracking, constitutional criminal procedure, and homeland security counter-extremism.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Personal statement, resume, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.wilmu.edu/behavioralscience/administration-of-justice-master.aspx"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mark Hufe",
        "role": "Director of Cyber Defense Education and Assistant Professor of Technology",
        "department": "College of Technology",
        "subject": "computer-science",
        "bio": "Dr. Mark Hufe leads WilmU's CAE-CD designated cybersecurity programs, researching SCADA industrial control vulnerability detection, penetration testing simulations, and national cyber defense curricula."
      },
      {
        "name": "Dr. Angela Herman",
        "role": "Chair of Doctoral Nursing Programs and Associate Professor",
        "department": "College of Health Professions & Natural Sciences",
        "subject": "biology",
        "bio": "Dr. Angela Herman investigates healthcare systems leadership, chronic illness self-management in underserved populations, and evidence-based nursing intervention translation."
      },
      {
        "name": "Dr. Donald Dawson",
        "role": "Assistant Professor of Business and Analytics",
        "department": "College of Business",
        "subject": "social-sciences",
        "bio": "Dr. Donald Dawson researches predictive corporate analytics, ethical algorithmic decision-making in financial lending, and econometric forecasting models for Mid-Atlantic business entities."
      }
    ]
  },

  # 17. Wisconsin Lutheran College (Row 1224)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Wisconsin Lutheran College",
    "shortName": "WLC",
    "slug": "wisconsin-lutheran-college",
    "location": "Milwaukee, Wisconsin, United States",
    "website": "https://www.wlc.edu",
    "sourceRow": 1224,
    "stats": {"established": "1973", "students": "1,200+", "international": "3%", "faculty": "120+"},
    "heroSummary": "Wisconsin Lutheran College (WLC) is an independent Christian liberal arts college founded in 1973, situated on a picturesque suburban campus in Milwaukee, Wisconsin, directly adjacent to the Milwaukee Regional Medical Center. Acclaimed for undergraduate biology, pre-medical health sciences, nursing, neuroscience, and servant leadership, WLC provides intensive undergraduate research collaborations and state-of-the-art laboratory training in the Generac Hall science complex.",
    "academicOverview": "WLC offers more than 40 undergraduate majors and graduate professional programs across the School of Arts and Sciences, School of Business, and School of Professional Studies. WLC maintains research partnerships with the Medical College of Wisconsin and the Versiti Blood Research Institute.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, core coursework, and personal essays with test-optional reviews. Merit scholarships covering $10,000 to $20,000/year are automatically awarded to eligible undergraduate applicants based on academic credentials.",
    "opps": [
      {
        "title": "Bachelor of Science in Biology - Pre-Medicine & Medical Research (MRMC Partnership)",
        "type": "Scholarship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Generac Hall Science Scholars Awards up to $18,000/year",
        "fee": "$0 (Free application)",
        "tuition": "$33,800/year",
        "desc": "Premier pre-medical biology program situated steps from the Milwaukee Regional Medical Center, offering undergraduates laboratory research in zebrafish developmental genetics, cancer pharmacology, and neuro-histology.",
        "requirements": {
          "gpa": "3.0+ high school GPA with biology and chemistry background",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not applicable",
          "papers": "High school transcripts and personal statement",
          "references": "One teacher or counselor recommendation"
        },
        "source": "https://www.wlc.edu/academics/programs/biology"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - Acute Clinical Rotations & Simulation",
        "type": "Scholarship",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Wisconsin Lutheran Healthcare Merit Grants up to $16,000/year",
        "fee": "$0",
        "tuition": "$33,800/year",
        "desc": "CCNE-accredited undergraduate nursing program featuring high-fidelity clinical simulation suites and clinical practicums at Froedtert Hospital and Children's Wisconsin.",
        "requirements": {
          "gpa": "3.2+ high school GPA with chemistry and biology rigor",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not applicable",
          "papers": "Transcripts, essay on nursing vocation",
          "references": "One academic recommendation"
        },
        "source": "https://www.wlc.edu/academics/programs/nursing"
      },
      {
        "title": "Bachelor of Science in Neuroscience - Cognitive Electrophysiology & Brain Plasticity",
        "type": "Scholarship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Undergraduate Neuroscience Research Fellowships up to $15,000/year",
        "fee": "$0",
        "tuition": "$33,800/year",
        "desc": "Interdisciplinary neuroscience curriculum investigating behavioral neuropharmacology, EEG sensory processing, memory consolidation, and neurodegenerative disease mechanisms.",
        "requirements": {
          "gpa": "3.0+ high school GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not applicable",
          "papers": "Transcripts and personal statement",
          "references": "One teacher evaluation"
        },
        "source": "https://www.wlc.edu/academics/programs/neuroscience"
      },
      {
        "title": "Bachelor of Science in Computer Science - Software Architecture & Cloud Systems",
        "type": "Scholarship",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "WLC STEM Leadership Grants up to $16,000/year",
        "fee": "$0",
        "tuition": "$33,800/year",
        "desc": "Hands-on computing degree preparing software developers in Java, Python, data structures, cloud infrastructure, algorithm optimization, and enterprise database systems.",
        "requirements": {
          "gpa": "2.8+ high school GPA with mathematics readiness",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not applicable",
          "papers": "Transcripts and application",
          "references": "Not required"
        },
        "source": "https://www.wlc.edu/academics/programs/computer-science"
      },
      {
        "title": "Master of Arts in High Performance Instruction - Pedagogical Innovation & Curriculum",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Educator Advancement Scholarships up to $4,000/year",
        "fee": "$0",
        "tuition": "$12,400/year",
        "desc": "Practical graduate education degree designed for practicing K-12 teachers to master differentiated instruction, instructional technology integration, and educational data assessment.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with teaching experience",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of educational philosophy, resume, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.wlc.edu/academics/programs/high-performance-instruction"
      },
      {
        "title": "Bachelor of Science in Business Administration - Finance & Servant Leadership",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "WLC Christian Leadership Scholarships up to $17,000/year",
        "fee": "$0",
        "tuition": "$33,800/year",
        "desc": "Rigorous undergraduate business curriculum emphasizing ethical corporate governance, quantitative investment analysis, managerial marketing, and Milwaukee corporate internships.",
        "requirements": {
          "gpa": "2.8+ high school GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not applicable",
          "papers": "Transcripts, essay",
          "references": "One recommendation"
        },
        "source": "https://www.wlc.edu/academics/programs/business-administration"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Robert Balza",
        "role": "Associate Professor and Chair of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Robert Balza investigates cardiac development and valve embryogenesis using avian and zebrafish models, researching extracellular matrix signaling and congenital heart defects in Generac Hall laboratories."
      },
      {
        "name": "Dr. Jarrod Erbe",
        "role": "Dean of the School of Arts and Sciences and Professor of Biology",
        "department": "School of Arts and Sciences",
        "subject": "biology",
        "bio": "Dr. Jarrod Erbe researches molecular microbiology, microbial genetics, bacterial virulence factors, and undergraduate laboratory pedagogical efficacy."
      },
      {
        "name": "Dr. David Brightsman",
        "role": "Associate Professor of Business and Leadership",
        "department": "School of Business",
        "subject": "social-sciences",
        "bio": "Dr. David Brightsman investigates servant leadership organizational models, behavioral corporate finance, ethical decision-making frameworks, and non-profit strategic sustainability."
      }
    ]
  },

  # 18. Xavier University of Louisiana (Row 1226)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Xavier University of Louisiana",
    "shortName": "XULA",
    "slug": "xavier-university-of-louisiana",
    "location": "New Orleans, Louisiana, United States",
    "website": "https://www.xula.edu",
    "sourceRow": 1226,
    "stats": {"established": "1925", "students": "3,400+", "international": "4%", "faculty": "260+"},
    "heroSummary": "Xavier University of Louisiana (XULA) is a private Catholic historically Black university (HBCU) founded in 1925 by Saint Katharine Drexel in New Orleans, Louisiana. World-renowned as the premier national producer of African American students who graduate from medical school, XULA is acclaimed for the College of Pharmacy, biomedical sciences, chemistry, public health, and cancer health disparities research.",
    "academicOverview": "XULA comprises the College of Arts and Sciences and the College of Pharmacy, alongside the Center for Minority Health and Health Disparities Research and Education. The university operates state-of-the-art research laboratories in the Norman C. Francis Science Complex and the Pharmacy Pavilion.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, math/science coursework, and personal statements with test-optional reviews. Graduate and professional admissions (Pharm.D., master's) require an accredited bachelor's degree with a minimum 3.0 GPA, official transcripts, letters of recommendation, and English proficiency (TOEFL 80+ or IELTS 6.5+). Merit scholarships are awarded upon admission.",
    "opps": [
      {
        "title": "Doctor of Pharmacy (Pharm.D.) - Clinical Pharmacokinetics & Health Equity - College of Pharmacy",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Pharmacy Dean's Scholarships up to $12,000/year",
        "fee": "$75",
        "tuition": "$38,500/year",
        "desc": "ACPE-accredited four-year professional pharmacy doctorate recognized nationally for training clinical pharmacists who lead community pharmacotherapy, infectious disease trials, and oncological drug management.",
        "requirements": {
          "gpa": "2.75+ prerequisite college GPA with organic chemistry and biology prerequisites",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "PCAT optional",
          "papers": "PharmCAS application, personal statement, official college transcripts",
          "references": "Two recommendations (at least one science professor or pharmacist)"
        },
        "source": "https://www.xula.edu/collegeofpharmacy/index.html"
      },
      {
        "title": "Bachelor of Science in Chemistry - Pre-Medical Track & Chemical Synthesis",
        "type": "Scholarship",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Katharine Drexel Merit Scholarships up to $20,000/year",
        "fee": "$40 (Waiver available)",
        "tuition": "$26,800/year",
        "desc": "The nation's top producer of Black chemistry undergraduates who enter medical school, providing rigorous laboratory synthesis in bio-organic chemistry, spectroscopy, and medicinal drug design.",
        "requirements": {
          "gpa": "3.3+ high school GPA with advanced chemistry and calculus readiness",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not applicable",
          "papers": "Common Application, personal essay, high school transcripts",
          "references": "Two teacher recommendations"
        },
        "source": "https://www.xula.edu/chemistry/index.html"
      },
      {
        "title": "Master of Science in Health Informatics - Healthcare Analytics & Electronic Records",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Health Disparities Technology Fellowships up to $6,000/year",
        "fee": "$50",
        "tuition": "$16,500/year",
        "desc": "Cutting-edge health informatics master's focusing on clinical healthcare database security, machine learning algorithms for epidemiological tracking, and interoperable telehealth systems.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in STEM, health, or computer science",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, official transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.xula.edu/health-informatics/index.html"
      },
      {
        "title": "Master of Public Health (MPH) - Health Equity & Chronic Disease Epidemiology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Public Health Leadership Grants up to $7,500/year",
        "fee": "$50",
        "tuition": "$17,200/year",
        "desc": "CEPH-accredited public health master's concentrating on racial and socio-economic health disparities, environmental justice in Gulf Coast communities, and epidemiological biostatistics.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "SOPHAS application, personal statement on health equity, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.xula.edu/publichealth/index.html"
      },
      {
        "title": "Bachelor of Science in Biology - Cancer Cell Biology & Molecular Genetics",
        "type": "Scholarship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NIH MARC & RISE Undergraduate Research Fellowships with full tuition and monthly stipends",
        "fee": "$40",
        "tuition": "$26,800/year (Fellowships apply)",
        "desc": "Nationally acclaimed pre-medical biology curriculum offering funded biomedical laboratory research in oncogene regulation, triple-negative breast cancer cell signaling, and cardiovascular epigenetics.",
        "requirements": {
          "gpa": "3.2+ high school GPA with biology and chemistry coursework",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not applicable",
          "papers": "Transcripts, essay, counselor report",
          "references": "Two teacher recommendations"
        },
        "source": "https://www.xula.edu/biology/index.html"
      },
      {
        "title": "Master of Arts in Curriculum and Instruction - Urban STEM Education",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Xavier Urban Teacher Residency Stipends up to $15,000",
        "fee": "$50",
        "tuition": "$14,800/year",
        "desc": "CAEP-accredited graduate education degree preparing transformative urban STEM educators through immersive co-teaching residencies in New Orleans public and charter schools.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Statement of teaching intent, resume, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.xula.edu/education/index.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Kathleen Kennedy",
        "role": "Dean of the College of Pharmacy and Professor",
        "department": "College of Pharmacy",
        "subject": "biology",
        "bio": "Dr. Kathleen Kennedy directs health disparities research at XULA, investigating pharmacy education diversity, cardiovascular medication adherence, and clinical interventions in underserved Gulf South populations."
      },
      {
        "name": "Dr. Maryam Foroozesh",
        "role": "Professor and Head of the Division of Mathematical and Physical Sciences",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Maryam Foroozesh investigates synthetic medicinal chemistry, designing targeted enzyme inhibitors and novel therapeutic agents for chemo-resistant breast and prostate cancers."
      },
      {
        "name": "Dr. Guangdi Wang",
        "role": "Professor of Chemistry and Director of the XULA Center for Cancer Research",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Guangdi Wang specializes in mass spectrometry-based drug metabolism and pharmacokinetic analysis, synthesizing novel selective estrogen receptor modulators (SERMs) for breast cancer therapy."
      }
    ]
  },

  # 19. Yeshiva University (Row 1228)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Yeshiva University",
    "shortName": "Yeshiva",
    "slug": "yeshiva-university",
    "location": "New York, New York, United States",
    "website": "https://www.yu.edu",
    "sourceRow": 1228,
    "stats": {"established": "1886", "students": "6,500+", "international": "16%", "faculty": "780+"},
    "heroSummary": "Yeshiva University is an elite private Carnegie R2 doctoral research university founded in 1886, spanning four campuses across New York City. Internationally renowned for the Benjamin N. Cardozo School of Law, Ferkauf Graduate School of Psychology, Sy Syms School of Business, Wurzweiler School of Social Work, and Katz School of Science and Health, Yeshiva combines world-class secular scholarship in biomedical sciences, artificial intelligence, and law with enduring intellectual tradition.",
    "academicOverview": "Yeshiva operates across four NYC campuses (Wilf, Beren, Brookdale, and Resnick), encompassing the Cardozo School of Law in Greenwich Village, Katz School of Science and Health, Ferkauf Graduate School of Psychology, Wurzweiler School of Social Work, and Yeshiva College. The university maintains prominent research laboratories in AI, data analytics, and biotechnology.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, essays, and extracurricular commitment with test-optional policies. Graduate doctoral and master's admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, letters of recommendation, and English proficiency (TOEFL 85+ or IELTS 6.5+). Merit scholarships are awarded across graduate and law programs.",
    "opps": [
      {
        "title": "Master of Science in Artificial Intelligence - Deep Learning & Natural Language Processing - Katz School",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Katz School STEM Merit Scholarships up to $15,000/year",
        "fee": "$65",
        "tuition": "$26,500/year",
        "desc": "Elite STEM-designated artificial intelligence master's based in Manhattan, training students in transformer neural architectures, computer vision, reinforcement learning, and ethical AI deployment.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with strong mathematics and programming foundation",
          "ielts": "IELTS 6.5+ or TOEFL 85+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two academic or professional recommendations"
        },
        "source": "https://www.yu.edu/katz/ai"
      },
      {
        "title": "Juris Doctor (J.D.) - Intellectual Property & Corporate Law - Cardozo School of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Cardozo Law Dean's Merit Scholarships covering up to 100% of tuition",
        "fee": "$0 (Application fee waiver available)",
        "tuition": "$68,500/year",
        "desc": "Nationally top-ranked intellectual property law school located in Greenwich Village, home to the Innocence Project, offering immersive clinics in blockchain technology, patent litigation, and media entertainment law.",
        "requirements": {
          "gpa": "Accredited bachelor's degree with competitive undergraduate GPA",
          "ielts": "IELTS 7.5+ or TOEFL 100+",
          "gre": "LSAT or GRE score required",
          "papers": "Personal statement, resume, CAS credential report",
          "references": "Two letters of recommendation"
        },
        "source": "https://cardozo.yu.edu/admissions/jd-admissions"
      },
      {
        "title": "Ph.D. in Clinical Psychology with Health Emphasis - Behavioral Medicine - Ferkauf School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2026-12-01",
        "deadlineText": "December 1, 2026",
        "funding": "Ferkauf School Doctoral Fellowships and Research Assistantships up to $16,000/year",
        "fee": "$75",
        "tuition": "$38,400/year",
        "desc": "APA-accredited doctoral program in clinical psychology with health emphasis, providing rigorous training in neuropsychological assessment, psycho-oncology, chronic pain management, and behavioral medicine.",
        "requirements": {
          "gpa": "3.3+ GPA in psychology or behavioral science",
          "ielts": "IELTS 7.0+ or TOEFL 100+",
          "gre": "GRE General optional",
          "papers": "Clinical statement of purpose, CV, transcripts",
          "references": "Three letters from research mentors"
        },
        "source": "https://www.yu.edu/ferkauf/clinical-health-phd"
      },
      {
        "title": "Master of Science in Biotechnology Management and Entrepreneurship",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Katz Biotechnology Innovation Scholarships up to $12,000/year",
        "fee": "$65",
        "tuition": "$26,500/year",
        "desc": "Cross-disciplinary STEM program connecting molecular biology and genomics with life science venture capital, clinical trial management, and FDA regulatory pathways.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in biology, chemistry, or related science",
          "ielts": "IELTS 6.5+ or TOEFL 85+",
          "gre": "Not required",
          "papers": "Statement of career objectives, CV, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.yu.edu/katz/biotechnology"
      },
      {
        "title": "Master of Science in Quantitative Economics - Financial Econometrics & Machine Learning",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Sy Syms Quantitative Economics Fellowships up to $10,000/year",
        "fee": "$65",
        "tuition": "$25,200/year",
        "desc": "STEM-designated quantitative economics master's in Midtown Manhattan, combining rigorous macro-econometric modeling, algorithmic trading theory, and Python financial data science.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with multivariate calculus and statistics",
          "ielts": "IELTS 6.5+ or TOEFL 85+",
          "gre": "GRE/GMAT optional",
          "papers": "Statement of purpose, resume, official transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.yu.edu/syms/quantitative-economics"
      },
      {
        "title": "Master of Social Work (MSW) - Clinical Practice with Children & Families - Wurzweiler",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Wurzweiler School Endowed Scholarships up to $8,000/year",
        "fee": "$50",
        "tuition": "$22,800/year",
        "desc": "CSWE-accredited social work program established in 1957, preparing clinical therapists for private practice, hospital palliative care, trauma therapy, and community advocacy.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 85+",
          "gre": "Not required",
          "papers": "Personal narrative essay, resume, transcripts",
          "references": "Two professional references"
        },
        "source": "https://www.yu.edu/wurzweiler/msw"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Paul Russo",
        "role": "Vice Provost and Dean of the Katz School of Science and Health",
        "department": "Katz School of Science and Health",
        "subject": "computer-science",
        "bio": "Dr. Paul Russo researches artificial intelligence integration in healthcare systems, technology entrepreneurship, digital knowledge networks, and data-driven learning analytics."
      },
      {
        "name": "Dr. Roee Gutman",
        "role": "Associate Professor of Quantitative Analytics",
        "department": "Sy Syms School of Business",
        "subject": "social-sciences",
        "bio": "Dr. Roee Gutman investigates financial econometrics, algorithmic volatility forecasting, portfolio risk management, and quantitative optimization for institutional asset managers."
      },
      {
        "name": "Dr. Roee Holtzer",
        "role": "Professor of Psychology and Director of the Clinical Health Psychology Ph.D. Program",
        "department": "Ferkauf Graduate School of Psychology",
        "subject": "social-sciences",
        "bio": "Dr. Roee Holtzer is a clinical neuropsychologist investigating cognitive aging, functional neuroimaging (fNIRS) during dual-task locomotion, and prefrontal cortex biomarkers in neurodegenerative diseases."
      }
    ]
  },

  # 20. York University - Nebraska (Row 1229)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "York University - Nebraska",
    "shortName": "York University",
    "slug": "york-university-nebraska",
    "location": "York, Nebraska, United States",
    "website": "https://www.york.edu",
    "sourceRow": 1229,
    "stats": {"established": "1890", "students": "650+", "international": "8%", "faculty": "50+"},
    "heroSummary": "York University (formerly York College) is an independent Christian liberal arts university founded in 1890, situated on a 50-acre campus in York, Nebraska. Renowned for values-centered education, biology and pre-health preparation, criminal justice, business administration, and organizational leadership, York provides personalized faculty mentorship and practical field internships in a tight-knit Midwestern academic community.",
    "academicOverview": "York University offers bachelor's degrees and select master's programs through divisions of Natural Sciences & Mathematics, Business, Education, and Humanities. The university operates the Holthus Science Center and the Bartholomew Performing Arts Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school graduation credentials, transcripts, and personal character statements with test-optional pathways. York University offers merit scholarships covering up to $12,000/year for incoming undergraduate scholars based on academic performance.",
    "opps": [
      {
        "title": "Bachelor of Science in Biology - Pre-Medical & Healthcare Professions",
        "type": "Scholarship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Holthus Science Achievement Scholarships up to $12,000/year",
        "fee": "$0 (Free application)",
        "tuition": "$21,400/year",
        "desc": "Rigorous undergraduate pre-medical biology curriculum offering hands-on human anatomy dissection, cellular physiology, genetics, and clinical observation hours at York General Hospital.",
        "requirements": {
          "gpa": "2.8+ high school GPA with biology and chemistry background",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcript, application form",
          "references": "Not required"
        },
        "source": "https://www.york.edu/academics/undergraduate-majors/biology"
      },
      {
        "title": "Master of Arts in Organizational and Global Leadership - Strategic Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "York Graduate Leadership Grants up to $3,500/year",
        "fee": "$25",
        "tuition": "$10,800/year",
        "desc": "Flexible 36-credit online graduate program focusing on ethical organizational governance, conflict negotiation, cross-cultural leadership dynamics, and strategic team development.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA from an accredited institution",
          "ielts": "IELTS 6.0+ or TOEFL 75+",
          "gre": "Not required",
          "papers": "Personal statement of leadership goals, resume, transcripts",
          "references": "Two professional references"
        },
        "source": "https://www.york.edu/online/maol"
      },
      {
        "title": "Bachelor of Science in Criminal Justice - Digital Investigation & Law Enforcement",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "York University Merit Awards up to $10,000/year",
        "fee": "$0",
        "tuition": "$21,400/year",
        "desc": "Hands-on undergraduate criminal justice program covering constitutional legal procedures, digital forensic crime scene documentation, juvenile justice systems, and law enforcement ethics.",
        "requirements": {
          "gpa": "2.5+ high school GPA",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and personal statement",
          "references": "Not required"
        },
        "source": "https://www.york.edu/academics/undergraduate-majors/criminal-justice"
      },
      {
        "title": "Bachelor of Science in Business Administration - Agribusiness & Farm Financial Management",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Midwest Agricultural Business Grants up to $10,000/year",
        "fee": "$0",
        "tuition": "$21,400/year",
        "desc": "Specialized business program situated in the agricultural heartland of Nebraska, examining commodity market trading, agricultural cooperative management, crop insurance finance, and enterprise accounting.",
        "requirements": {
          "gpa": "2.5+ high school GPA",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "Transcripts and application",
          "references": "Not required"
        },
        "source": "https://www.york.edu/academics/undergraduate-majors/business-administration"
      },
      {
        "title": "Bachelor of Science in Elementary Education - K-6 Endorsement & Practicum",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Nebraska Teacher Education Scholarships up to $11,000/year",
        "fee": "$0",
        "tuition": "$21,400/year",
        "desc": "State-approved teacher education curriculum offering early classroom clinical practicums, literacy instruction pedagogy, and 16 weeks of full-time student teaching.",
        "requirements": {
          "gpa": "2.75+ high school GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not applicable",
          "papers": "High school transcripts, character reference",
          "references": "One recommendation"
        },
        "source": "https://www.york.edu/academics/undergraduate-majors/education"
      },
      {
        "title": "Bachelor of Arts in Psychology - Behavioral Counseling & Adolescent Development",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "York Academic Excellence Awards up to $10,000/year",
        "fee": "$0",
        "tuition": "$21,400/year",
        "desc": "Undergraduate psychology curriculum covering abnormal psychology, developmental cognitive theory, counseling methodologies, and empirical behavioral research methodology.",
        "requirements": {
          "gpa": "2.5+ high school GPA",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "Transcripts and personal essay",
          "references": "Not required"
        },
        "source": "https://www.york.edu/academics/undergraduate-majors/psychology"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Frank Wheeler",
        "role": "Professor of History and Humanities",
        "department": "Department of Humanities",
        "subject": "social-sciences",
        "bio": "Dr. Frank Wheeler investigates American religious history, Restoration Movement theological heritage, frontier educational expansion, and Great Plains community social history."
      },
      {
        "name": "Dr. Erin DeHart",
        "role": "Associate Professor of Education",
        "department": "Department of Education",
        "subject": "social-sciences",
        "bio": "Dr. Erin DeHart researches literacy acquisition in elementary education, trauma-informed pedagogical interventions in rural classrooms, and teacher candidate mentoring frameworks."
      },
      {
        "name": "Dr. Ray Miller",
        "role": "Professor of Biology and Environmental Sciences",
        "department": "Division of Natural Sciences & Mathematics",
        "subject": "biology",
        "bio": "Dr. Ray Miller conducts biological field research in tallgrass prairie restoration, monarch butterfly migratory feeding habitats in Nebraska, and freshwater aquatic macroinvertebrates."
      }
    ]
  },

  # 21. University of Denver (Row 1079)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Denver",
    "shortName": "DU",
    "slug": "university-of-denver",
    "location": "Denver, Colorado, United States",
    "website": "https://www.du.edu",
    "sourceRow": 1079,
    "stats": {"established": "1864", "students": "13,800+", "international": "9%", "faculty": "1,450+"},
    "heroSummary": "The University of Denver (DU) is a premier private Carnegie R1 research university founded in 1864, situated on a 125-acre campus south of downtown Denver with panoramic views of the Rocky Mountains. Acclaimed for the Josef Korbel School of International Studies, Sturm College of Law, Daniels College of Business, Ritchie School of Engineering & Computer Science, and the Graduate School of Professional Psychology, DU is a global powerhouse for international relations, renewable energy engineering, and social science research.",
    "academicOverview": "DU encompasses ten colleges and graduate schools: the Josef Korbel School of International Studies, Sturm College of Law, Daniels College of Business, Ritchie School of Engineering and Computer Science, College of Arts, Humanities and Social Sciences, Graduate School of Social Work, and Morgridge College of Education. The university operates the Mount Evans Observatory.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, course rigor, and personal essays with test-optional reviews. Graduate doctoral programs offer multi-year fellowships and Graduate Research Assistantships ($28,000–$36,000/year plus full tuition remission and health insurance). Application requires transcripts, statement of purpose, three recommendation letters, and English proficiency (TOEFL 88+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in International Studies - Global Governance, Security & Human Rights - Josef Korbel School",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "Korbel Doctoral Fellowship: $30,000/year stipend, full tuition waiver, and travel research funding",
        "fee": "$65",
        "tuition": "$0 (Fully funded)",
        "desc": "World-renowned international affairs doctorate that educated U.S. Secretaries of State, investigating multilateral global governance, authoritarianism, climate security diplomacy, and international human rights law.",
        "requirements": {
          "gpa": "3.5+ GPA in a relevant master's or bachelor's degree in political science, economics, or history",
          "ielts": "IELTS 7.5+ or TOEFL 100+",
          "gre": "GRE optional",
          "papers": "Substantial analytical writing sample, statement of research purpose, CV",
          "references": "Three academic recommendation letters"
        },
        "source": "https://korbel.du.edu/academics/phd-international-studies"
      },
      {
        "title": "Ph.D. in Electrical and Computer Engineering - Renewable Energy & Power Grid Resiliency",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Ritchie School Graduate Research Assistantship: $29,000/year stipend plus 100% tuition coverage",
        "fee": "$65",
        "tuition": "$0 (Fully funded)",
        "desc": "Doctoral research program partnering with NREL to advance renewable energy grid integration, distributed microgrids, power electronics converters, and cyber-physical security of energy systems.",
        "requirements": {
          "gpa": "3.3+ GPA in electrical engineering, computer engineering, or related STEM",
          "ielts": "IELTS 6.5+ or TOEFL 88+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://ritchieschool.du.edu/engineering/electrical-computer-engineering/phd"
      },
      {
        "title": "Juris Doctor (J.D.) - Natural Resources & Environmental Law - Sturm College of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Sturm Law Dean's Merit Scholarships covering up to 100% tuition",
        "fee": "$65 (Waiver available)",
        "tuition": "$58,400/year",
        "desc": "Nationally top-ranked natural resources and environmental law program offering clinical training in public lands management, water law, tribal resource rights, and energy transition policy.",
        "requirements": {
          "gpa": "Accredited bachelor's degree with competitive undergraduate GPA",
          "ielts": "IELTS 7.0+ or TOEFL 95+",
          "gre": "LSAT or GRE score required",
          "papers": "Personal statement, resume, CAS law credential report",
          "references": "Two recommendations"
        },
        "source": "https://www.law.du.edu/admissions/jd-admissions"
      },
      {
        "title": "Ph.D. in Computer Science - Robotic Swarms & Distributed Artificial Intelligence",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Research Fellowship: $30,000/year stipend, complete tuition waiver, and health care",
        "fee": "$65",
        "tuition": "$0 (Fully funded)",
        "desc": "Cutting-edge computer science doctorate focusing on multi-robot coordination, autonomous unmanned aerial systems, human-robot interaction, and secure distributed algorithms.",
        "requirements": {
          "gpa": "3.3+ GPA in computer science or related mathematics/engineering discipline",
          "ielts": "IELTS 6.5+ or TOEFL 88+",
          "gre": "GRE optional",
          "papers": "Statement of research interests, academic CV, transcripts",
          "references": "Three academic references"
        },
        "source": "https://ritchieschool.du.edu/computer-science/phd"
      },
      {
        "title": "Ph.D. in Biological Sciences - Alpine Plant Adaptation & Cellular Neurobiology",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Graduate Teaching/Research Assistantship: $28,500/year stipend plus full tuition waiver",
        "fee": "$65",
        "tuition": "$0 (Fully funded)",
        "desc": "Doctoral training program utilizing Colorado Rocky Mountain high-altitude field stations and modern molecular laboratories to study cellular stress signaling, alpine ecology, and neurodegenerative biophysics.",
        "requirements": {
          "gpa": "3.2+ undergraduate GPA in biological sciences or biochemistry",
          "ielts": "IELTS 6.5+ or TOEFL 88+",
          "gre": "Not required",
          "papers": "Research statement, CV, transcripts",
          "references": "Three letters from science professors"
        },
        "source": "https://science.du.edu/biological-sciences/phd"
      },
      {
        "title": "Master of Science in Business Analytics (MSBA) - Predictive Modeling & Financial Tech - Daniels",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Daniels College of Business Graduate Merit Scholarships up to $15,000/year",
        "fee": "$100",
        "tuition": "$42,500/year",
        "desc": "AACSB-accredited STEM master's program at the Daniels College of Business, preparing analysts in Python, machine learning for consumer analytics, database architecture, and corporate risk modeling.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with quantitative readiness",
          "ielts": "IELTS 6.5+ or TOEFL 88+",
          "gre": "GMAT/GRE optional",
          "papers": "Professional resume, essay, official transcripts",
          "references": "Two recommendations"
        },
        "source": "https://daniels.du.edu/business-analytics/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Amin Khodaei",
        "role": "Professor and Chair of Electrical and Computer Engineering",
        "department": "Ritchie School of Engineering and Computer Science",
        "subject": "engineering",
        "bio": "Dr. Amin Khodaei is an internationally recognized expert in smart grid modernization, resilient microgrids, quantum computing applications in power systems, and renewable energy integration."
      },
      {
        "name": "Dr. Rachel Epstein",
        "role": "Professor of International Relations",
        "department": "Josef Korbel School of International Studies",
        "subject": "social-sciences",
        "bio": "Dr. Rachel Epstein researches international security, European financial regulatory integration, NATO expansion dynamics, and the institutional power of international organizations."
      },
      {
        "name": "Dr. Anna Sher",
        "role": "Professor of Biological Sciences",
        "department": "Department of Biological Sciences",
        "subject": "environment",
        "bio": "Dr. Anna Sher investigates plant ecology, invasive species management in arid Western river systems, riparian restoration, and the ecological consequences of drought on native biodiversity."
      }
    ]
  },

  # 22. Kansas State University (Row 771)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Kansas State University",
    "shortName": "K-State",
    "slug": "kansas-state-university",
    "location": "Manhattan, Kansas, United States",
    "website": "https://www.k-state.edu",
    "sourceRow": 771,
    "stats": {"established": "1863", "students": "20,000+", "international": "8%", "faculty": "1,400+"},
    "heroSummary": "Kansas State University (K-State) is the historic flagship public land-grant Carnegie R1 doctoral research university of Kansas, founded in 1863 in Manhattan, Kansas ('The Little Apple'). Internationally renowned for agricultural sciences and veterinary medicine, grain and bakery science, biosecurity at the Biosecurity Research Institute (BRI), engineering, and architecture, K-State is situated directly adjacent to the federal National Bio and Agro-Defense Facility (NBAF), making it the global epicenter of agricultural biosafety and animal health research.",
    "academicOverview": "K-State comprises nine academic colleges: the College of Agriculture, College of Veterinary Medicine, Carl R. Ice College of Engineering, College of Architecture, Planning & Design (APDesign), College of Arts and Sciences, College of Business Administration, College of Health and Human Sciences, College of Education, and K-State Olathe. The university operates the Biosecurity Research Institute.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and core preparation with test-optional reviews. Graduate doctoral programs offer competitive Graduate Teaching and Research Assistantships ($22,000–$30,000/year plus full tuition remission). Master's and doctoral applicants submit transcripts, statement of purpose, three letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Doctor of Veterinary Medicine (DVM) - Agricultural Livestock & Zoonotic Infectious Diseases",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-09-15",
        "deadlineText": "September 15, 2027",
        "funding": "College of Veterinary Medicine Endowed Merit Scholarships up to $15,000/year",
        "fee": "$75",
        "tuition": "$34,200/year (out-of-state) / $17,500/year (in-state)",
        "desc": "World-class veterinary medicine doctorate partnering with NBAF to train veterinary scientists in livestock disease epidemiology, food animal production medicine, zoonotic virology, and clinical surgery.",
        "requirements": {
          "gpa": "2.8+ science and cumulative prerequisite GPA with required animal experience hours",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "GRE not required",
          "papers": "VMCAS application, veterinary experience log, transcripts",
          "references": "Three letters (including at least one veterinarian)"
        },
        "source": "https://www.vet.k-state.edu/admissions/"
      },
      {
        "title": "Ph.D. in Grain Science - Cereal Chemistry & Industrial Bioprocessing",
        "type": "Fellowship",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental Graduate Research Assistantship: $25,000/year stipend, full tuition waiver, and lab fees",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "The only department in the United States granting doctoral degrees in grain and milling science, conducting cutting-edge research in cereal starch chemistry, extruded food polymers, bioproducts, and grain safety.",
        "requirements": {
          "gpa": "3.2+ GPA in food science, chemistry, chemical engineering, or agriculture",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.grains.k-state.edu/academics/graduate/index.html"
      },
      {
        "title": "Ph.D. in Biological and Agricultural Engineering - Precision Agriculture & Hydrology",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Carl R. Ice College of Engineering Fellowship: $26,000/year stipend plus full tuition coverage",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "Interdisciplinary engineering doctorate focusing on Ogallala Aquifer water sustainability, autonomous agricultural machinery, drone remote sensing for crop yield, and bio-energy processing.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in engineering or physical sciences",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of research interests, CV, transcripts",
          "references": "Three academic references"
        },
        "source": "https://www.bae.ksu.edu/academics/graduate/"
      },
      {
        "title": "Ph.D. in Computer Science - Artificial Intelligence & Cyber-Physical Security",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Graduate Assistantship: $25,000/year stipend and 100% tuition coverage",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "High-impact computing doctorate focusing on trustworthy machine learning, agricultural IoT sensor network security, software engineering automated testing, and cyber defense.",
        "requirements": {
          "gpa": "3.2+ GPA in computer science or related discipline",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of research purpose, CV, transcripts",
          "references": "Three academic letters"
        },
        "source": "https://www.cs.ksu.edu/academics/graduate/phd/"
      },
      {
        "title": "Master of Architecture (M.Arch) - Sustainable Prairie Architecture & Urban Design - APDesign",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "APDesign Endowed Graduate Scholarships up to $10,000/year",
        "fee": "$75",
        "tuition": "$21,400/year (out-of-state) / $10,800/year (in-state)",
        "desc": "Nationally top-ranked professional architecture program in Seaton Hall, emphasizing environmental sustainability, tectonic mass timber fabrication, parametric modeling, and resilient urban community planning.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in architecture or environmental design",
          "ielts": "IELTS 7.0+ or TOEFL 85+",
          "gre": "Not required",
          "papers": "Design portfolio, statement of intent, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://apdesign.k-state.edu/arch/apply/"
      },
      {
        "title": "Ph.D. in Agronomy - Plant Breeding, Soil Health & Climate Resilience",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Graduate Research Assistantship: $24,500/year stipend plus full tuition waiver",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "World-renowned agronomy doctorate conducting field and genomic research on drought-tolerant wheat and sorghum cultivars, carbon sequestration in prairie soils, and precision nutrient management.",
        "requirements": {
          "gpa": "3.2+ GPA in agronomy, plant science, biology, or soil science",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of research intent, CV, transcripts",
          "references": "Three academic references"
        },
        "source": "https://www.agronomy.k-state.edu/academics/graduate-programs/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Stephen Higgs",
        "role": "Director of the Biosecurity Research Institute (BRI) and University Distinguished Professor",
        "department": "Biosecurity Research Institute",
        "subject": "biology",
        "bio": "Dr. Stephen Higgs is an internationally recognized expert in vector-borne zoonotic arboviruses, researching mosquito transmission of Zika, chikungunya, and West Nile viruses in biosafety level 3 (BSL-3) facilities."
      },
      {
        "name": "Dr. Chuck Rice",
        "role": "University Distinguished Professor of Soil Microbiology",
        "department": "Department of Agronomy",
        "subject": "environment",
        "bio": "Dr. Chuck Rice served on the Nobel Peace Prize-winning Intergovernmental Panel on Climate Change (IPCC), researching soil carbon sequestration, nitrogen cycling, and agricultural greenhouse gas mitigation."
      },
      {
        "name": "Dr. Caterina Scoglio",
        "role": "Paslay Professor of Electrical and Computer Engineering",
        "department": "Department of Electrical and Computer Engineering",
        "subject": "engineering",
        "bio": "Dr. Caterina Scoglio investigates complex network modeling, epidemic spread in human and livestock populations, and cyber-resilient infrastructure design."
      }
    ]
  },

  # 23. Indiana University of Pennsylvania (Row 757)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Indiana University of Pennsylvania",
    "shortName": "IUP",
    "slug": "indiana-university-of-pennsylvania",
    "location": "Indiana, Pennsylvania, United States",
    "website": "https://www.iup.edu",
    "sourceRow": 757,
    "stats": {"established": "1875", "students": "8,800+", "international": "4%", "faculty": "540+"},
    "heroSummary": "Indiana University of Pennsylvania (IUP) is a comprehensive public doctoral research university founded in 1875 in Indiana, Pennsylvania, 55 miles northeast of Pittsburgh. The largest doctoral-granting institution in the Pennsylvania State System of Higher Education (PASSHE), IUP is celebrated for safety sciences and industrial hygiene, clinical psychology, criminology and criminal justice, nursing, and teacher education.",
    "academicOverview": "IUP comprises five academic colleges: the Kopchick College of Natural Sciences and Mathematics, Eberly College of Business, College of Health and Human Services, College of Arts, Humanities, Media, and Public Affairs, and the College of Education and Communications. The university operates the $90-million John J. and Char Kopchick Hall science complex.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and transcripts with test-optional application pathways. Graduate doctoral and master's admissions require an accredited bachelor's degree with a minimum 2.8–3.0 GPA, personal statement, letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+). Graduate assistantships provide stipends and partial to full tuition waivers.",
    "opps": [
      {
        "title": "Ph.D. in Safety Sciences - Occupational Ergonomics & Industrial Hygiene",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Doctoral Graduate Assistantships with stipends up to $15,000/year plus full tuition waiver",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "The nation's flagship doctoral program in safety sciences, preparing industry leaders and researchers in occupational hazard mitigation, industrial aerosol toxicology, and organizational safety culture.",
        "requirements": {
          "gpa": "3.0+ master's or bachelor's GPA in safety sciences, engineering, or related science",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, official transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.iup.edu/safetysciences/grad/safety-sciences-phd/"
      },
      {
        "title": "Doctor of Psychology (Psy.D.) in Clinical Psychology - Community Mental Health",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2026-12-01",
        "deadlineText": "December 1, 2026",
        "funding": "Doctoral Assistantships providing tuition waivers and annual stipends up to $10,000",
        "fee": "$50",
        "tuition": "$19,200/year (out-of-state) / $12,800/year (in-state)",
        "desc": "APA-accredited practitioner-scholar doctoral program recognized for training clinical psychologists in evidence-based rural community mental health, clinical neuropsychology, and child psychological assessment.",
        "requirements": {
          "gpa": "3.2+ GPA in psychology or behavioral science",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "GRE General optional",
          "papers": "Personal statement, clinical interests essay, CV, transcripts",
          "references": "Three academic or clinical references"
        },
        "source": "https://www.iup.edu/psychology/grad/clinical-psychology-psyd/"
      },
      {
        "title": "Ph.D. in Criminology - Quantitative Crime Policy & Juvenile Justice",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Doctoral Teaching/Research Fellowships: $14,000/year stipend plus full tuition waiver",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "Top-tier doctoral program in criminology and criminal justice focusing on statistical modeling of criminal recidivism, community policing evaluation, penal reform, and forensic theory.",
        "requirements": {
          "gpa": "3.3+ GPA in a master's program in criminology, criminal justice, or sociology",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Scholarly writing sample, statement of research purpose, CV",
          "references": "Three academic recommendations"
        },
        "source": "https://www.iup.edu/criminology/grad/criminology-phd/"
      },
      {
        "title": "Master of Science in Applied Mathematics - Operations Research & Statistical Computing",
        "type": "Degree",
        "subject": "mathematics",
        "subjects": ["mathematics", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Departmental Graduate Assistantships with tuition waivers and stipends up to $8,000/year",
        "fee": "$50",
        "tuition": "$16,500/year (out-of-state) / $11,000/year (in-state)",
        "desc": "Applied mathematics curriculum housed in Kopchick Hall, focusing on numerical optimization, stochastic processes, data analytics in Python and R, and predictive predictive modeling.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA with multivariate calculus and linear algebra",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.iup.edu/math/grad/applied-mathematics-ms/"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Nursing Education & Healthcare Administration",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "PASSHE Nursing Faculty Traineeship Awards up to $5,000/year",
        "fee": "$50",
        "tuition": "$15,200/year",
        "desc": "CCNE-accredited graduate nursing program preparing nurse educators and clinical administrators to design nursing school curricula, lead clinical simulation centers, and direct hospital nursing staff.",
        "requirements": {
          "gpa": "3.0+ BSN GPA and unencumbered RN license",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Resume showing 1+ year clinical experience, essay, transcripts",
          "references": "Two professional references"
        },
        "source": "https://www.iup.edu/nursing/grad/nursing-ms/"
      },
      {
        "title": "Bachelor of Science in Computer Science - Software Engineering & Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Kopchick STEM Excellence Scholarships up to $6,000/year",
        "fee": "$50",
        "tuition": "$18,500/year (out-of-state) / $9,500/year (in-state)",
        "desc": "ABET-accredited undergraduate computer science program based in the new John J. and Char Kopchick Hall, featuring modern cybersecurity labs, full-stack software development, and Linux systems programming.",
        "requirements": {
          "gpa": "2.8+ high school GPA with algebra readiness",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and personal statement",
          "references": "Not required"
        },
        "source": "https://www.iup.edu/compsci/undergrad/computer-science-bs/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Wanda Minnick",
        "role": "Associate Professor and Safety Sciences Graduate Program Coordinator",
        "department": "Department of Safety Sciences",
        "subject": "engineering",
        "bio": "Dr. Wanda Minnick investigates occupational safety and health management systems, ergonomic risk assessment in manufacturing facilities, and industrial worker fatality prevention strategies."
      },
      {
        "name": "Dr. John A. Lewis",
        "role": "Professor of Criminology and Criminal Justice",
        "department": "Department of Criminology and Criminal Justice",
        "subject": "social-sciences",
        "bio": "Dr. John Lewis researches criminal justice sentencing guidelines, juvenile offender behavioral rehabilitation, substance abuse interventions in correctional institutions, and forensic program evaluation."
      },
      {
        "name": "Dr. Sudipta Majumdar",
        "role": "Associate Professor of Chemistry",
        "department": "Department of Chemistry, Biochemistry, and Physics",
        "subject": "chemistry",
        "bio": "Dr. Sudipta Majumdar conducts biochemical research in enzymology, examining bacterial antibiotic resistance mechanisms, protein-ligand binding kinetics, and metalloenzyme active sites in Kopchick Hall."
      }
    ]
  }
]
