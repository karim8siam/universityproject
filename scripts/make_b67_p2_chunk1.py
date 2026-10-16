# scripts/make_b67_p2_chunk1.py
# Batch 67 Part 2 Chunk 1: Universities 16 to 23

chunk3 = [
  # 16. Touro University Nevada (Row 1025)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Touro University Nevada",
    "shortName": "Touro University Nevada",
    "slug": "touro-university-nevada",
    "location": "Henderson, Nevada, United States",
    "website": "https://tun.touro.edu",
    "sourceRow": 1025,
    "stats": {"established": "2004", "students": "1,600+", "international": "4%", "faculty": "180+"},
    "heroSummary": "Touro University Nevada (TUN) is a private, non-profit health sciences and medical university located in Henderson, Nevada. Home to the largest medical school in Nevada—the College of Osteopathic Medicine—and the College of Health and Human Services, TUN is acclaimed for physician assistant training, occupational therapy, physical therapy, and the pioneering Center for Autism and Developmental Disabilities.",
    "academicOverview": "TUN focuses exclusively on graduate and professional healthcare education. Its state-of-the-art campus features high-fidelity clinical simulation laboratories, a human gross anatomy dissection suite, and the on-campus Touro Health Center, providing primary care and autism therapy to Southern Nevada communities.",
    "researchAdmissions": "Admissions are highly competitive and processed through centralized application services (AACOMAS for Osteopathic Medicine, CASPA for PA, OTCAS, PTCAS, NursingCAS). Applicants require a completed bachelor's degree with rigorous science prerequisite coursework (minimum 3.0 cumulative and science GPA), clinical shadowing hours, and letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Osteopathic Medicine (D.O.) - Integrative Primary Care",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Touro Dean's Merit Scholarships and Nevada Health Service Corps Grants up to $20,000/year",
        "fee": "$100 (AACOMAS)",
        "tuition": "$62,400/year",
        "desc": "COCA-accredited four-year medical doctorate integrating osteopathic manipulative medicine (OMM), ultrasound diagnostics, and clinical rotations across Valley Health System and Dignity Health.",
        "requirements": {"gpa": "Science GPA 3.3+; competitive MCAT score (504+ average); AACOMAS application", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AACOMAS personal statement and Touro secondary essays", "references": "Three letters including a physician letter (D.O. preferred)"},
        "source": "https://tun.touro.edu/programs/osteopathic-medicine/"
      },
      {
        "title": "Master of Science in Physician Assistant Studies (MSPAS)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Health Sciences Clinical Assistantships up to $10,000",
        "fee": "$75 (CASPA)",
        "tuition": "$44,800/year",
        "desc": "ARC-PA-accredited 28-month curriculum preparing clinician PAs through clinical clerkships in emergency medicine, surgery, pediatric care, and rural Nevada community clinics.",
        "requirements": {"gpa": "Prerequisite science GPA 3.2+; minimum 500 hours direct patient care clinical experience; CASPA application", "ielts": "TOEFL 85+", "gre": "GRE or PA-CAT scores", "papers": "CASPA personal essay", "references": "Three clinical recommendations"},
        "source": "https://tun.touro.edu/programs/physician-assistant-studies/"
      },
      {
        "title": "Doctor of Physical Therapy (DPT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of Physical Therapy Endowed Scholarships up to $8,000",
        "fee": "$65 (PTCAS)",
        "tuition": "$38,900/year",
        "desc": "CAPTE-accredited clinical doctorate providing hands-on training in musculoskeletal physical therapy, neuro-rehabilitation, amputee mobility, and pediatric developmental therapies.",
        "requirements": {"gpa": "Prerequisite science GPA 3.0+; minimum 40 PT clinical observation hours; PTCAS application", "ielts": "TOEFL 80+", "gre": "GRE scores required", "papers": "PTCAS essay and personal statement", "references": "Three letters of recommendation including licensed PT"},
        "source": "https://tun.touro.edu/programs/physical-therapy/"
      },
      {
        "title": "Master of Science in Medical Health Sciences (MHS)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Pre-Medical Academic Enhancement Grants up to $5,000",
        "fee": "$50",
        "tuition": "$28,500/year",
        "desc": "One-year intensive biomedical post-baccalaureate curriculum designed to strengthen academic preparation for medical school, covering histology, medical biochemistry, and pharmacology.",
        "requirements": {"gpa": "Bachelor's degree with 2.75+ GPA in pre-medical coursework", "ielts": "TOEFL 80+", "gre": "MCAT or GRE score required", "papers": "Healthcare career motivation essay", "references": "Two science faculty recommendations"},
        "source": "https://tun.touro.edu/programs/medical-health-sciences/"
      },
      {
        "title": "Doctor of Occupational Therapy (OTD) - Post-Professional & Entry Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Occupational Therapy Clinical Leadership Awards up to $6,000",
        "fee": "$65 (OTCAS)",
        "tuition": "$36,200/year",
        "desc": "ACOTE-accredited occupational therapy program emphasizing sensory integration interventions for autism spectrum disorders, assistive technologies, and hand rehabilitation.",
        "requirements": {"gpa": "Prerequisite GPA 3.0+; OTCAS application; 40 observation hours", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "OT personal statement", "references": "Three references including licensed OT"},
        "source": "https://tun.touro.edu/programs/occupational-therapy/"
      },
      {
        "title": "Touro Center for Autism and Developmental Disabilities Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$5,000 clinical research stipend, multidisciplinary autism clinic immersion, and clinical trial diagnostic data access",
        "fee": "$0",
        "tuition": "Supported through Touro University Nevada Autism Center Endowment",
        "desc": "Clinical fellowship evaluating early behavioral interventions, speech and language therapy markers, and pediatric neurodevelopmental diagnostic trajectories in Nevada.",
        "requirements": {"gpa": "Enrolled medical, PA, or therapy doctoral student in good academic standing (3.3+ GPA)", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Autism clinical research proposal", "references": "Center for Autism clinical faculty recommendation"},
        "source": "https://tun.touro.edu/autism-center/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Shelley Berkley",
        "role": "CEO and Senior Provost & Former US Congresswoman",
        "department": "Executive Leadership",
        "subject": "social-sciences",
        "bio": "Shelley Berkley serves as CEO and senior provost of Touro University Nevada, a seven-term former US Representative who led Nevada's higher education system and expanded healthcare training facilities."
      },
      {
        "name": "Dr. Wolfgang G. Gilliar",
        "role": "Dean & Professor of Osteopathic Manipulative Medicine",
        "department": "College of Osteopathic Medicine",
        "subject": "biology",
        "bio": "Dr. Wolfgang Gilliar is an internationally recognized physician-scholar in osteopathic medicine and musculoskeletal rehabilitation, researching spinal mechanics and manual medicine outcomes."
      },
      {
        "name": "Dr. Robert Askey",
        "role": "Dean & Associate Professor of Health and Human Services",
        "department": "College of Health and Human Services",
        "subject": "biology",
        "bio": "Dr. Robert Askey oversees physician assistant, occupational therapy, and nursing programs, researching clinical simulation pedagogy and rural healthcare workforce retention."
      }
    ]
  },

  # 17. Transylvania University (Row 1026)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Transylvania University",
    "shortName": "Transylvania University",
    "slug": "transylvania-university",
    "location": "Lexington, Kentucky, United States",
    "website": "https://www.transy.edu",
    "sourceRow": 1026,
    "stats": {"established": "1780", "students": "1,050+", "international": "3%", "faculty": "95+"},
    "heroSummary": "Transylvania University is a historic private liberal arts university located in downtown Lexington, Kentucky. Established in 1780 during the American Revolution, Transylvania is the oldest university in Kentucky and the 16th oldest in the nation, renowned for exceptional medical and law school placement rates, the Brown Science Center, and rigorous undergraduate research.",
    "academicOverview": "Transylvania offers over 45 majors and pre-professional programs across the Divisions of Natural Sciences and Mathematics, Humanities, and Social Sciences. Its distinctive academic calendar features a dedicated May term for immersive field research and travel courses, paired with high-performance instrumentation in chemistry and biology.",
    "researchAdmissions": "Admissions are selective and holistic, evaluating high school academic rigor, GPA, personal essays, and extracurricular commitment (test-optional available). All admitted students are automatically evaluated for merit scholarships up to full tuition.",
    "opps": [
      {
        "title": "Bachelor of Arts in Biology - Pre-Medical Research Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "William R. Kenan, Jr. Merit Scholarships up to full tuition ($44,000/year)",
        "fee": "$0",
        "tuition": "$44,160/year",
        "desc": "High-placement biomedical program with a 90%+ medical school acceptance rate, featuring vertebrate dissection, molecular genetics research, and clinical internships at UK Chandler Hospital.",
        "requirements": {"gpa": "High school GPA 3.5+ with AP/honors biology and chemistry", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application personal statement", "references": "Two teacher recommendations"},
        "source": "https://www.transy.edu/academics/programs/biology"
      },
      {
        "title": "Bachelor of Arts in Chemistry - Biochemistry Concentration",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Transylvania Pioneer STEM Grants up to $22,000/year",
        "fee": "$0",
        "tuition": "$44,160/year",
        "desc": "ACS-certified undergraduate chemistry curriculum in the Brown Science Center, featuring hands-on NMR spectroscopy, gas chromatography-mass spectrometry, and organic synthesis.",
        "requirements": {"gpa": "High school GPA 3.3+ with chemistry and precalculus", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Personal essay", "references": "One STEM teacher recommendation"},
        "source": "https://www.transy.edu/academics/programs/chemistry"
      },
      {
        "title": "Bachelor of Arts in Computer Science - Software Engineering & Data",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Transylvania Academic Dean's Scholarships up to $24,000/year",
        "fee": "$0",
        "tuition": "$44,160/year",
        "desc": "Comprehensive liberal arts computer science degree covering algorithm design, relational databases, web development frameworks, and machine learning models.",
        "requirements": {"gpa": "High school GPA 3.2+ with mathematics preparation", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://www.transy.edu/academics/programs/computer-science"
      },
      {
        "title": "Bachelor of Arts in Philosophy, Politics, and Economics (PPE) - Pre-Law Track",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Henry Clay Pre-Law Fellowships up to $20,000/year",
        "fee": "$0",
        "tuition": "$44,160/year",
        "desc": "Interdisciplinary honors curriculum fostering rigorous constitutional analysis, public economic policy debate, and political philosophy, with nearly 100% law school placement.",
        "requirements": {"gpa": "High school GPA 3.4+; analytical writing portfolio", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Pre-law analytical essay", "references": "Two academic recommendations"},
        "source": "https://www.transy.edu/academics/programs/philosophy-politics-and-economics"
      },
      {
        "title": "Bachelor of Arts in Environmental Studies - Bluegrass Conservation",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Transylvania Environmental Stewardship Grants up to $18,000",
        "fee": "$0",
        "tuition": "$44,160/year",
        "desc": "Field-intensive program utilizing central Kentucky's karst geography and nature preserves for watershed hydrology, ecological restoration, and environmental sustainability policy.",
        "requirements": {"gpa": "High school GPA 3.0+", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Environmental motivation statement", "references": "One teacher recommendation"},
        "source": "https://www.transy.edu/academics/programs/environmental-studies"
      },
      {
        "title": "Transylvania Kenan Summer Undergraduate Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "chemistry", "physics"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$4,500 student stipend, on-campus summer housing, and $1,000 laboratory research supplies grant",
        "fee": "$0",
        "tuition": "Endowed through The William R. Kenan, Jr. Charitable Trust",
        "desc": "Intensive 10-week faculty-mentored summer research fellowship in cellular biology, molecular biochemistry, or computational physics culminating in national conference presentations.",
        "requirements": {"gpa": "Enrolled Transylvania undergraduate student with 3.3+ GPA in a STEM major", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Faculty-mentored scientific research proposal", "references": "Transylvania faculty research sponsor letter"},
        "source": "https://www.transy.edu/academics/undergraduate-research/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Brien Lewis",
        "role": "President & Professor of Business and Law",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Brien Lewis serves as the 28th president of Transylvania University, an attorney and higher education executive who previously served as president of Catawba College, expanding institutional endowments and campus facilities."
      },
      {
        "name": "Dr. Belinda Sly",
        "role": "Professor of Biology & Chair of Division of Natural Sciences",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Belinda Sly is a developmental geneticist researching evolutionary changes in gene expression and morphological evolution, directing undergraduate laboratory genomics projects."
      },
      {
        "name": "Dr. Eva Csuhai",
        "role": "Professor of Chemistry & Kenan Endowed Professor",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Eva Csuhai is an organic and analytical chemist investigating synthesized heterocyclic compounds, green chemical oxidation reactions, and mentoring undergraduate pre-health scholars."
      }
    ]
  },

  # 18. Trinity College (Row 1027)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Trinity College",
    "shortName": "Trinity College",
    "slug": "trinity-college-hartford",
    "location": "Hartford, Connecticut, United States",
    "website": "https://www.trincoll.edu",
    "sourceRow": 1027,
    "stats": {"established": "1823", "students": "2,200+", "international": "15%", "faculty": "240+"},
    "heroSummary": "Trinity College is a historic, highly selective private liberal arts college situated on a 100-acre English-style collegiate gothic campus in Hartford, Connecticut. Founded in 1823 as the second-oldest college in Connecticut, Trinity is celebrated as one of the few liberal arts institutions offering an ABET-accredited engineering program, world-class neuroscience, urban studies, and international affairs.",
    "academicOverview": "Trinity delivers over 40 majors and interdisciplinary minors through dedicated departments in the Arts, Humanities, Natural Sciences, and Social Sciences. Its Roy Nutt Mathematics, Engineering & Computer Science Center, Clement Chemistry Building, and neuroscience laboratories provide direct undergraduate access to advanced laser optics and neuro-electrophysiology rigs.",
    "researchAdmissions": "Admissions are highly selective and evaluated holistically (Common Application; test-optional). Evaluation emphasizes rigorous secondary school curriculum (honors/AP/IB), academic GPA, personal essays, extracurricular leadership, and counselor/teacher recommendations.",
    "opps": [
      {
        "title": "Bachelor of Science in Engineering - Electrical & Biomedical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Trinity Presidential Merit Scholarships up to $30,000/year plus full need-based aid",
        "fee": "$65",
        "tuition": "$67,420/year",
        "desc": "Rare ABET-accredited engineering program at a premier liberal arts college, integrating bio-instrumentation, embedded signal processing, digital circuit design, and senior design clinic capstones.",
        "requirements": {"gpa": "High school GPA 3.6+ with AP calculus and physics", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "Exempt", "papers": "Common Application essay and Trinity engineering supplement", "references": "Two teacher recommendations"},
        "source": "https://www.trincoll.edu/engineering/"
      },
      {
        "title": "Bachelor of Science in Neuroscience - Behavioral & Cellular Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Trinity STEM Scholars Fellowships up to $25,000/year",
        "fee": "$65",
        "tuition": "$67,420/year",
        "desc": "Interdisciplinary program examining neuro-electrophysiology, synaptic neurotransmission, cognitive behavioral models, and neurodegenerative disease mechanisms in rodent animal models.",
        "requirements": {"gpa": "High school GPA 3.5+ with strong biology and chemistry preparation", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Personal essay", "references": "Two academic recommendations"},
        "source": "https://www.trincoll.edu/neuroscience/"
      },
      {
        "title": "Bachelor of Science in Computer Science - Systems & Cryptography",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Nutt Mathematics and Computing Grants up to $20,000/year",
        "fee": "$65",
        "tuition": "$67,420/year",
        "desc": "Rigorous undergraduate computer science curriculum exploring algorithm theory, distributed operating systems, cryptographic security, and human-centered computing.",
        "requirements": {"gpa": "High school GPA 3.4+ with calculus readiness", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Statement of intellectual purpose", "references": "One math and one humanities teacher letter"},
        "source": "https://www.trincoll.edu/cs/"
      },
      {
        "title": "Bachelor of Arts in Public Policy and Law - Urban Governance & Constitutional Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Hartford Urban Leadership Scholarships up to $25,000/year",
        "fee": "$65",
        "tuition": "$67,420/year",
        "desc": "Elite undergraduate policy curriculum leveraging Trinity's location in Connecticut's state capital for legislative internships, legal clinic placements, and policy analysis.",
        "requirements": {"gpa": "High school GPA 3.5+ with rigorous humanities/social science coursework", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Public policy analysis writing sample", "references": "Two teacher recommendations"},
        "source": "https://www.trincoll.edu/public-policy-law/"
      },
      {
        "title": "Bachelor of Science in Physics - Astrophysics & Quantum Mechanics",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Trinity Science Center Grants up to $18,000/year",
        "fee": "$65",
        "tuition": "$67,420/year",
        "desc": "Hands-on physics program offering undergraduate research in observational astronomy using the campus observatory, quantum optics, and computational mechanics.",
        "requirements": {"gpa": "High school GPA 3.4+ with physics and calculus", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Scientific purpose essay", "references": "One science teacher letter"},
        "source": "https://www.trincoll.edu/physics/"
      },
      {
        "title": "Trinity College Summer Research Program (TCSRP) Science Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "engineering", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "$4,800 summer student stipend, full on-campus residential housing, and $1,500 faculty-student research grant",
        "fee": "$0",
        "tuition": "Endowed through The Meg and Allen Cowett Research Endowment",
        "desc": "Competitive 10-week summer research fellowship pairing students one-on-one with faculty mentors across engineering, neuroscience, molecular biology, and chemistry.",
        "requirements": {"gpa": "Enrolled Trinity College undergraduate student in good academic standing (3.3+ GPA)", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Faculty-mentored research project proposal", "references": "Trinity faculty research mentor letter"},
        "source": "https://www.trincoll.edu/science-center/summer-research-program/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Joanne Berger-Sweeney",
        "role": "President & Professor of Neuroscience",
        "department": "Office of the President & Neuroscience Program",
        "subject": "biology",
        "bio": "Dr. Joanne Berger-Sweeney is the 22nd president of Trinity College, an internationally acclaimed neuroscientist who has conducted groundbreaking research on the neurobiology of Rett syndrome and autism."
      },
      {
        "name": "Dr. John D. Mertens",
        "role": "Professor of Engineering",
        "department": "Department of Engineering",
        "subject": "engineering",
        "bio": "Dr. Mertens is an authority on combustion kinetics, thermodynamic shock tube measurements, and air quality emissions, mentoring undergraduate engineering design projects."
      },
      {
        "name": "Dr. Susan A. Masino",
        "role": "Vernon D. Roosa Professor of Applied Science",
        "department": "Neuroscience Program and Department of Psychology",
        "subject": "biology",
        "bio": "Dr. Masino is an internationally recognized neuroscientist investigating neuromodulators (adenosine), ketogenic metabolic therapies for epilepsy, and forest conservation biology."
      }
    ]
  },

  # 19. Trinity Washington University (Row 1028)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Trinity Washington University",
    "shortName": "Trinity Washington",
    "slug": "trinity-washington-university",
    "location": "Washington, District of Columbia, United States",
    "website": "https://www.trinitydc.edu",
    "sourceRow": 1028,
    "stats": {"established": "1897", "students": "1,800+", "international": "4%", "faculty": "140+"},
    "heroSummary": "Trinity Washington University is a historic private institution founded by the Sisters of Notre Dame de Namur in Washington, D.C. Designated as both a Predominantly Black Institution (PBI) and a Hispanic-Serving Institution (HSI), Trinity is renowned for its historic undergraduate College of Arts and Sciences (dedicated to women's education), the School of Nursing and Health Professions, and social justice leadership.",
    "academicOverview": "Trinity operates five academic units: the historic College of Arts and Sciences, the School of Nursing and Health Professions, the School of Education, the School of Business and Graduate Studies, and the School of Professional Studies. Its modern Payden Academic Center features advanced nursing simulation suites and digital science laboratories.",
    "researchAdmissions": "Admissions are accessible, holistic, and mission-centered. Undergraduate applicants are evaluated based on high school academic transcripts (minimum 2.50 GPA; test-optional). Nursing and health professions programs require clinical prerequisite science grades and interviews.",
    "opps": [
      {
        "title": "Bachelor of Science in Nursing (BSN) - Payden Clinical Simulation Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Trinity Nursing Leadership Scholarships and D.C. Health Grants up to $15,000/year",
        "fee": "$0",
        "tuition": "$26,400/year",
        "desc": "CCNE-accredited nursing program utilizing high-fidelity patient simulation in the Payden Academic Center, followed by acute care clinical rotations at MedStar Washington Hospital Center.",
        "requirements": {"gpa": "Prerequisite collegiate GPA 3.0+ in anatomy, physiology, and microbiology; TEAS score 65%+", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Nursing philosophy essay", "references": "Two professional/academic recommendations"},
        "source": "https://discover.trinitydc.edu/nursing/bsn/"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Nurse Administrator & Educator",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "HRSA Advanced Nursing Workforce Grants up to $8,000",
        "fee": "$0",
        "tuition": "$850/credit hour",
        "desc": "Graduate nursing program preparing nursing executives and academic faculty to manage clinical healthcare systems and lead evidence-based nursing curricula in urban healthcare hubs.",
        "requirements": {"gpa": "Accredited BSN with 3.0+ GPA; unencumbered active RN license", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Statement of advanced nursing leadership goals", "references": "Two clinical supervisor recommendations"},
        "source": "https://discover.trinitydc.edu/nursing/msn/"
      },
      {
        "title": "Master of Arts in Clinical Mental Health Counseling",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Behavioral Health Workforce Traineeships up to $6,000",
        "fee": "$0",
        "tuition": "$850/credit hour",
        "desc": "CACREP-aligned program preparing licensed professional counselors (LPCs) with deep specialization in multicultural counseling, urban trauma recovery, and family systems therapy.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Clinical counseling essay and faculty interview", "references": "Three professional recommendations"},
        "source": "https://discover.trinitydc.edu/education/counseling/"
      },
      {
        "title": "Bachelor of Science in Biology - Molecular & Cellular Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Trinity Sister Christine Hoffhein Science Grants up to $12,000/year",
        "fee": "$0",
        "tuition": "$26,400/year",
        "desc": "Laboratory-intensive undergraduate degree in the Payden Academic Center covering genetics, microbiology, biochemistry, and pre-medical preparation for women in STEM.",
        "requirements": {"gpa": "High school GPA 2.75+ with biology and chemistry", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Personal statement", "references": "One science instructor recommendation"},
        "source": "https://discover.trinitydc.edu/cas/programs/biology/"
      },
      {
        "title": "Master of Business Administration (MBA) in Nonprofit Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Social Justice Leadership Fellowships up to $4,500",
        "fee": "$0",
        "tuition": "$850/credit hour",
        "desc": "Evening and online executive MBA focusing on philanthropic governance, fundraising financial modeling, public advocacy campaigns, and social enterprise development.",
        "requirements": {"gpa": "Baccalaureate degree with 2.75+ GPA", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Professional background essay", "references": "Two professional references"},
        "source": "https://discover.trinitydc.edu/bgs/mba/"
      },
      {
        "title": "Trinity D.C. Community Health Disparities Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "$4,000 summer research stipend and placement with District of Columbia public health clinic initiatives",
        "fee": "$0",
        "tuition": "Supported through Trinity Washington University Social Justice Endowment",
        "desc": "Undergraduate and graduate clinical research fellowship investigating maternal health disparities, chronic asthma prevalence, and healthcare access barriers east of the Anacostia River in D.C.",
        "requirements": {"gpa": "Enrolled Trinity student in nursing, counseling, or biology with 3.2+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Community health disparities proposal", "references": "Nursing faculty mentor recommendation"},
        "source": "https://discover.trinitydc.edu/fellowships/"
      }
    ],
    "researchers": [
      {
        "name": "Patricia McGuire",
        "role": "President & Legal Scholar",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Patricia McGuire has served as president of Trinity Washington University since 1989, an attorney and national higher education leader who transformed Trinity into a national model for educating underserved women."
      },
      {
        "name": "Dr. Mary Romanello",
        "role": "Dean & Professor of Health Sciences",
        "department": "School of Nursing and Health Professions",
        "subject": "biology",
        "bio": "Dr. Romanello leads nursing and health professions, researching interprofessional healthcare collaboration, health disparities in urban populations, and clinical simulation models."
      },
      {
        "name": "Dr. Cynthia Greer",
        "role": "Associate Professor of Counseling",
        "department": "School of Education & Counseling Program",
        "subject": "social-sciences",
        "bio": "Dr. Greer is a licensed professional counselor researching trauma recovery, ethical decision-making in clinical counseling, and educational psychology in urban communities."
      }
    ]
  },

  # 20. Troy University (Row 1029)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Troy University",
    "shortName": "Troy University",
    "slug": "troy-university",
    "location": "Troy, Alabama, United States",
    "website": "https://www.troy.edu",
    "sourceRow": 1029,
    "stats": {"established": "1887", "students": "14,900+", "international": "6%", "faculty": "820+"},
    "heroSummary": "Troy University is a comprehensive public institution headquartered in Troy, Alabama, with campuses across the state and international learning partnerships worldwide. Acclaimed for the Center for Materials and Manufacturing Sciences (CMMS), the Sorrell College of Business, and the School of Nursing, Troy combines applied technological research with strong global student engagement.",
    "academicOverview": "Troy is organized into five colleges: Arts and Sciences, the Sorrell College of Business, Communication and Fine Arts, Education, and Health and Human Services. The Center for Materials and Manufacturing Sciences anchors research in polymer recycling, advanced composites, and medical polymer synthesis.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.0 with 20 ACT, or 2.50+ test-optional). Graduate admissions require an accredited bachelor's degree with a 2.50+ cumulative GPA (3.0+ on last 60 hours), official transcripts, letters of recommendation, and program-specific entrance exams.",
    "opps": [
      {
        "title": "Master of Science in Materials Science and Engineering - Polymer Recycling",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry", "environment"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Center for Materials and Manufacturing Sciences Research Assistantships up to $18,000",
        "fee": "$50",
        "tuition": "$450/credit hour (in-state), $900/credit hour (out-of-state)",
        "desc": "Cutting-edge graduate engineering program at the CMMS focusing on circular polymer upcycling, biodegradable plastics synthesis, thermoplastic composite fabrication, and rheology characterization.",
        "requirements": {"gpa": "BS in engineering, chemistry, or physics with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE quantitative 150+", "papers": "Statement of materials research purpose", "references": "Two letters of recommendation"},
        "source": "https://www.troy.edu/academics/colleges-schools/arts-sciences/center-materials-manufacturing-sciences/"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Family Nurse Practitioner",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Alabama Rural Nursing Traineeships up to $8,000",
        "fee": "$50",
        "tuition": "$450/credit hour",
        "desc": "ACEN-accredited advanced practice nursing program preparing nurse practitioners to manage chronic illness and deliver primary care across rural clinics in the Deep South.",
        "requirements": {"gpa": "BSN from accredited program with 3.0+ GPA; active RN license", "ielts": "TOEFL 79+", "gre": "Exempt for 3.0+ GPA", "papers": "Advanced nursing practice statement", "references": "Three clinical/academic references"},
        "source": "https://www.troy.edu/academics/colleges-schools/health-human-services/school-nursing/msn.html"
      },
      {
        "title": "Master of Science in Computer Science - Artificial Intelligence & Cyber Defense",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate Teaching Assistantships covering partial tuition plus $12,000 stipend",
        "fee": "$50",
        "tuition": "$450/credit hour (in-state)",
        "desc": "Rigorous graduate degree exploring deep neural network training, cloud security frameworks, database management systems, and distributed algorithms.",
        "requirements": {"gpa": "Bachelor's degree in computer science or related discipline with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose in computer science", "references": "Two letters of recommendation"},
        "source": "https://www.troy.edu/academics/colleges-schools/arts-sciences/computer-science/ms.html"
      },
      {
        "title": "Master of Science in Strategic Communication - Digital Marketing Strategy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Hall School of Journalism Graduate Assistantships up to $6,000",
        "fee": "$50",
        "tuition": "$450/credit hour",
        "desc": "Applied communications curriculum focusing on crisis public relations, digital audience analytics, social media influence modeling, and strategic organizational branding.",
        "requirements": {"gpa": "Baccalaureate degree with 2.75+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Strategic communications writing sample", "references": "Two academic/professional letters"},
        "source": "https://www.troy.edu/academics/colleges-schools/communication-fine-arts/journalism-communication/ms-strategic-communication.html"
      },
      {
        "title": "Bachelor of Science in Surveying and Geomatics Sciences",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "mathematics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Alabama Society of Professional Land Surveyors Grants up to $5,000/year",
        "fee": "$30",
        "tuition": "$9,300/year (in-state), $18,600/year (out-of-state)",
        "desc": "ABET-accredited geomatics program training students in boundary surveying, satellite GPS geodesy, digital photogrammetry, hydrographic surveying, and legal land boundaries.",
        "requirements": {"gpa": "High school GPA 2.5+ with algebra and trigonometry", "ielts": "TOEFL 71+", "gre": "Exempt", "papers": "Career motivation essay", "references": "One teacher recommendation"},
        "source": "https://www.troy.edu/academics/colleges-schools/arts-sciences/surveying-geomatics/bs.html"
      },
      {
        "title": "Troy Center for Materials and Manufacturing Sciences Research Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry", "environment"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$5,000 research stipend, advanced polymer compounding extruder access, and thermal analysis lab testing",
        "fee": "$0",
        "tuition": "Endowed through National Institute of Standards and Technology (NIST) and Troy CMMS",
        "desc": "Competitive materials research fellowship investigating compatibilization chemistry for mixed post-consumer recycled plastics and lightweight automotive composite panels.",
        "requirements": {"gpa": "Enrolled graduate student in materials engineering, chemistry, or environmental science with 3.3+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Polymer recycling research proposal", "references": "CMMS faculty investigator letter"},
        "source": "https://www.troy.edu/cmms/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jack Hawkins Jr.",
        "role": "Chancellor & Educational Leader",
        "department": "Office of the Chancellor",
        "subject": "social-sciences",
        "bio": "Dr. Jack Hawkins Jr. has served as chancellor of Troy University since 1989, making him the longest-serving chief executive of a public university in the United States, steering Troy's international expansion."
      },
      {
        "name": "Dr. Govind Menon",
        "role": "Director of School of Science and Technology & Professor of Physics",
        "department": "School of Science and Technology & CMMS",
        "subject": "physics",
        "bio": "Dr. Govind Menon is an astrophysicist and materials researcher investigating general relativity, polymer physics, and directing research infrastructure at the Center for Materials and Manufacturing Sciences."
      },
      {
        "name": "Dr. Wade Forehand",
        "role": "Director & Professor of Nursing",
        "department": "School of Nursing",
        "subject": "biology",
        "bio": "Dr. Wade Forehand oversees nursing education at Troy, conducting scholarship on advanced clinical nursing practice, rural healthcare access, and high-fidelity patient simulation."
      }
    ]
  },

  # 21. Truckee Meadows Community College (Row 1030)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Truckee Meadows Community College",
    "shortName": "TMCC",
    "slug": "truckee-meadows-community-college",
    "location": "Reno, Nevada, United States",
    "website": "https://www.tmcc.edu",
    "sourceRow": 1030,
    "stats": {"established": "1971", "students": "10,500+", "international": "2%", "faculty": "450+"},
    "heroSummary": "Truckee Meadows Community College (TMCC) is a comprehensive public institution of the Nevada System of Higher Education (NSHE), located on Dandini Boulevard overlooking Reno, Nevada. Renowned for applied workforce training and university transfer pathways, TMCC collaborates with the Tahoe Reno Industrial Center (home to the Tesla Gigafactory and Panasonic) to deliver cutting-edge advanced manufacturing, logistics, and allied health programs.",
    "academicOverview": "TMCC delivers associate degrees, technical certificates, and applied bachelor's degrees across five divisions: Technical Sciences, Liberal Arts, Sciences, Business and Social Sciences, and Health Sciences. The William N. Pennington Applied Technology Center anchors advanced robotics, automated manufacturing, and diesel technology.",
    "researchAdmissions": "TMCC maintains an open-door admission policy for high school graduates and GED holders. Specialized applied baccalaureate and health science programs (such as Nursing and Dental Hygiene) have selective criteria including prerequisite coursework, GPA thresholds (2.75+), and entrance testing.",
    "opps": [
      {
        "title": "Bachelor of Applied Science (BAS) in Advanced Manufacturing & Logistics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Nevada Promise Scholarships and Gigafactory Workforce Apprenticeships up to $8,000",
        "fee": "$20",
        "tuition": "$135/credit hour (in-state lower-division), $195/credit hour (upper-division)",
        "desc": "Four-year applied engineering technology degree preparing industrial managers in automated PLC programming, automated robotics, supply chain distribution, and lean manufacturing.",
        "requirements": {"gpa": "Associate degree or 60 semester credits in industrial technology or related field with 2.5+ GPA", "ielts": "TOEFL 61+", "gre": "Exempt", "papers": "Career goals statement", "references": "One professional reference"},
        "source": "https://www.tmcc.edu/applied-technologies/advanced-manufacturing-and-logistics"
      },
      {
        "title": "Associate of Science in Nursing (RN) - Pennington Health Simulation Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Pennington Foundation Nursing Grants covering up to 100% of tuition and clinical lab supplies",
        "fee": "$20",
        "tuition": "$135/credit hour",
        "desc": "ACEN-accredited registered nursing program with clinical rotations at Renown Regional Medical Center and Saint Mary's Regional Medical Center in Reno.",
        "requirements": {"gpa": "Prerequisite collegiate GPA 2.75+ in anatomy, physiology, and microbiology; HESI A2 exam score 75%+", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Nursing professional essay", "references": "Two academic recommendations"},
        "source": "https://www.tmcc.edu/nursing"
      },
      {
        "title": "Bachelor of Applied Science (BAS) in Cyber Defense",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Nevada Governor's Office of Science, Innovation and Technology (OSIT) STEM Grants",
        "fee": "$20",
        "tuition": "$195/credit hour",
        "desc": "Hands-on cybersecurity bachelor's degree covering network penetration testing, digital forensics, firewall architecture, and security information event management (SIEM).",
        "requirements": {"gpa": "AAS in computer science, IT, or 60 credits with 2.5+ GPA", "ielts": "TOEFL 61+", "gre": "Exempt", "papers": "Cybersecurity career essay", "references": "One instructor recommendation"},
        "source": "https://www.tmcc.edu/computer-technologies/cyber-defense"
      },
      {
        "title": "Associate of Science in Environmental Science - Sierra Nevada Watersheds",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "TMCC Foundation Academic Scholarships up to $4,000",
        "fee": "$20",
        "tuition": "$135/credit hour",
        "desc": "University-parallel transfer program utilizing the Truckee River and Lake Tahoe basin for aquatic ecology, climate science, geology, and water chemistry field observations.",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "TOEFL 61+", "gre": "Exempt", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://www.tmcc.edu/environmental-science"
      },
      {
        "title": "Bachelor of Applied Science (BAS) in Dental Hygiene",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Nevada State Dental Association Scholarships up to $5,000",
        "fee": "$20",
        "tuition": "$195/credit hour",
        "desc": "CODA-accredited program combining on-campus dental clinic patient care with advanced public health administration and periodontal pathology coursework.",
        "requirements": {"gpa": "Prerequisite GPA 2.75+; Dental Hygiene National Board eligibility", "ielts": "TOEFL 75+", "gre": "Exempt", "papers": "Dental hygiene clinical philosophy essay", "references": "Two professional/clinical recommendations"},
        "source": "https://www.tmcc.edu/dental-hygiene"
      },
      {
        "title": "Tahoe Reno Clean Energy & Battery Technology Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry", "environment"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$4,000 workforce stipend and direct manufacturing laboratory internship at Tahoe Reno Industrial Center",
        "fee": "$0",
        "tuition": "Supported through Nevada Workforce Innovations Grant and TMCC Foundation",
        "desc": "Applied technology fellowship studying automated lithium-ion battery cell production, industrial robotics calibration, and factory floor PLC network integration.",
        "requirements": {"gpa": "Enrolled TMCC BAS or AAS student in manufacturing, electronics, or diesel technology with 3.0+ GPA", "ielts": "TOEFL 65+", "gre": "Exempt", "papers": "Advanced manufacturing project statement", "references": "Technical faculty recommendation"},
        "source": "https://www.tmcc.edu/applied-technologies/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Karin M. Hilgersom",
        "role": "President & Educational Leader",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Karin Hilgersom serves as president of Truckee Meadows Community College, an experienced community college administrator who expanded TMCC's applied bachelor's degrees and regional clean tech partnerships."
      },
      {
        "name": "Dr. Jeffrey Alexander",
        "role": "Vice President of Academic Affairs & Historian",
        "department": "Academic Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Jeffrey Alexander directs academic programs at TMCC, an authority on technical higher education policy and workforce curriculum integration with emerging industries."
      },
      {
        "name": "Prof. Barbara Walden",
        "role": "Director of Technical Sciences & Manufacturing Expert",
        "department": "William N. Pennington Applied Technology Center",
        "subject": "engineering",
        "bio": "Prof. Walden leads the Applied Technology Center, directing curriculum in automated manufacturing, robotics systems, and industry apprenticeships with Tesla and Panasonic."
      }
    ]
  },

  # 22. Tufts University (Row 1031)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Tufts University",
    "shortName": "Tufts University",
    "slug": "tufts-university",
    "location": "Medford, Massachusetts, United States",
    "website": "https://www.tufts.edu",
    "sourceRow": 1031,
    "stats": {"established": "1852", "students": "13,400+", "international": "16%", "faculty": "1,550+"},
    "heroSummary": "Tufts University is an elite private Carnegie R1 research university located across campuses in Medford/Somerville, Boston, and Grafton, Massachusetts. Renowned for The Fletcher School of Law and Diplomacy (the nation's oldest graduate school of international affairs), the Tufts School of Medicine, the School of Engineering, and the Cummings School of Veterinary Medicine, Tufts generates over $250M in annual research expenditures.",
    "academicOverview": "Tufts comprises ten constituent schools. Research powerhouses include the Center for Cellular Agriculture (pioneering cultivated meat), the Tufts Lyme Disease Initiative, the Allen Discovery Center (bioelectric regeneration), and the Jean Mayer USDA Human Nutrition Research Center on Aging (HNRCA).",
    "researchAdmissions": "Admissions are highly selective. Undergraduate applicants are reviewed holistically via the Common Application (test-optional). Graduate and professional programs require an accredited bachelor's degree with a 3.3+ GPA, program-specific standardized tests (GRE, MCAT, LSAT where required), statement of research objectives, and three letters of recommendation.",
    "opps": [
      {
        "title": "Master of Arts in Law and Diplomacy (MALD) - The Fletcher School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-10",
        "deadlineText": "January 10, 2027",
        "funding": "Fletcher School Dean's Scholarships covering up to full tuition plus living stipends",
        "fee": "$80",
        "tuition": "$56,200/year",
        "desc": "The gold standard in international affairs education, combining international law, diplomatic history, security studies, international economics, and sustainable development capstones.",
        "requirements": {"gpa": "Baccalaureate degree with 3.4+ GPA and demonstrated global experience", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "GRE optional", "papers": "Statement of purpose in international affairs and policy analytical essay", "references": "Three letters of recommendation"},
        "source": "https://fletcher.tufts.edu/academics/programs/master-arts-law-and-diplomacy-mald"
      },
      {
        "title": "Ph.D. in Biomedical Engineering - Cellular Agriculture & Tissue Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships covering 100% tuition plus $36,000 annual living stipend",
        "fee": "$85",
        "tuition": "Covered by assistantship",
        "desc": "Pioneering doctoral program at the Tufts Center for Cellular Agriculture, researching cultivated meat bioprocessing, silk biomaterial scaffolds, and 3D organoid modeling.",
        "requirements": {"gpa": "BS or MS in bioengineering, chemical engineering, or biology with 3.5+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE optional", "papers": "Biomedical research statement and CV", "references": "Three letters of recommendation"},
        "source": "https://engineering.tufts.edu/bme/graduate"
      },
      {
        "title": "Doctor of Medicine (M.D.) - Tufts Health Sciences Boston Campus",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-11-01",
        "deadlineText": "November 1, 2027",
        "funding": "Tufts School of Medicine Merit Scholarships up to full tuition",
        "fee": "$130 (AMCAS)",
        "tuition": "$69,800/year",
        "desc": "LCME-accredited medical doctorate renowned for clinical training at Tufts Medical Center, early clinical preceptorships, and integrated biomedical research pathways.",
        "requirements": {"gpa": "Undergraduate science GPA 3.7+; competitive MCAT (514+ median); AMCAS application", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AMCAS personal statement and Tufts secondary essays", "references": "Pre-health committee letter or three faculty recommendations"},
        "source": "https://medicine.tufts.edu/admissions-financial-aid"
      },
      {
        "title": "Ph.D. in Computer Science - Human-Robot Interaction & Cognitive Computing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Fellowships covering tuition plus $35,000 annual research stipend",
        "fee": "$85",
        "tuition": "Covered by fellowship",
        "desc": "Cutting-edge doctoral research at the Human-Robot Interaction (HRI) Laboratory exploring ethical autonomous robots, natural language human-machine interfaces, and machine vision.",
        "requirements": {"gpa": "Degree in computer science, robotics, or cognitive science with 3.4+ GPA", "ielts": "TOEFL 90+", "gre": "GRE scores optional", "papers": "Statement of computational purpose", "references": "Three letters of academic recommendation"},
        "source": "https://engineering.tufts.edu/cs/graduate"
      },
      {
        "title": "Doctor of Veterinary Medicine (D.V.M.) - Cummings School of Veterinary Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-09-15",
        "deadlineText": "September 15, 2027",
        "funding": "Cummings School Endowed Scholarships up to $20,000/year",
        "fee": "$120 (VMCAS)",
        "tuition": "$61,400/year",
        "desc": "AVMA-accredited veterinary doctorate on a 594-acre campus in Grafton, MA, offering premier hospital rotations at Foster Hospital for Small Animals and Large Animal Hospital.",
        "requirements": {"gpa": "Prerequisite science GPA 3.4+; minimum 400 hours veterinary clinical experience; VMCAS application", "ielts": "TOEFL 90+", "gre": "GRE optional", "papers": "VMCAS personal statement", "references": "Three letters including licensed veterinarian"},
        "source": "https://vet.tufts.edu/admissions"
      },
      {
        "title": "Tufts Center for Cellular Agriculture (TUCCA) Innovation Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "biology", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "$8,000 summer research stipend, pilot-scale bioreactor facility access, and cultivated food startup mentorship",
        "fee": "$0",
        "tuition": "Endowed through USDA National Institute of Food and Agriculture and TUCCA",
        "desc": "Prestigious research fellowship optimizing serum-free cell growth media, immortalized bovine and fish cell lines, and sustainable food biomanufacturing scale-up.",
        "requirements": {"gpa": "Enrolled graduate student in bioengineering, food science, or molecular biology with 3.5+ GPA", "ielts": "TOEFL 90+", "gre": "Exempt", "papers": "Cellular agriculture bioprocess proposal", "references": "TUCCA faculty investigator letter"},
        "source": "https://cellularagriculture.tufts.edu/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Sunil Kumar",
        "role": "President & Professor of Electrical Engineering",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. Sunil Kumar is the 14th president of Tufts University, an operations research and electrical engineering scholar who previously served as provost of Johns Hopkins University and dean of Chicago Booth."
      },
      {
        "name": "Dr. David L. Kaplan",
        "role": "Stern Family Endowed Professor of Engineering & Director of TUCCA",
        "department": "Department of Biomedical Engineering",
        "subject": "engineering",
        "bio": "Dr. David Kaplan is a member of the National Academy of Engineering and world authority on biomaterials, pioneering silk-based tissue scaffolds and founding the field of cellular agriculture."
      },
      {
        "name": "Dr. Michael Levin",
        "role": "Vannevar Bush Professor & Director of Allen Discovery Center",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Michael Levin is an internationally celebrated developmental biophysicist who pioneered developmental bioelectricity, synthetic morphology, and biological robotics (Xenobots)."
      }
    ]
  },

  # 23. Tulane University (Row 1032)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Tulane University",
    "shortName": "Tulane University",
    "slug": "tulane-university",
    "location": "New Orleans, Louisiana, United States",
    "website": "https://tulane.edu",
    "sourceRow": 1032,
    "stats": {"established": "1834", "students": "14,000+", "international": "12%", "faculty": "1,450+"},
    "heroSummary": "Tulane University is a prestigious private Carnegie R1 research university and a member of the Association of American Universities (AAU), situated along historic St. Charles Avenue in New Orleans, Louisiana. Renowned for the School of Public Health and Tropical Medicine (the oldest in the US), the Tulane School of Medicine, Tulane Law School, and the ByWater Institute, Tulane generates over $220M in annual research expenditures.",
    "academicOverview": "Tulane operates ten constituent schools and colleges across uptown and downtown New Orleans. Flagship research centers include the Tulane National Primate Research Center (one of seven federally funded primate centers), the ByWater Institute (river-coastal delta dynamics), the Tulane Cancer Center, and the A.B. Freeman School of Business.",
    "researchAdmissions": "Undergraduate admissions are highly selective (test-optional holistic review via Common Application). Graduate and professional programs require an accredited bachelor's degree with a 3.3+ GPA, standardized test scores (GRE, MCAT, LSAT, GMAT where required), statement of purpose, and three letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Public Health (DrPH) in Tropical Medicine & Global Health Systems",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "School of Public Health Dean's Doctoral Fellowships covering 100% tuition plus $32,000 annual living stipend",
        "fee": "$145 (SOPHAS)",
        "tuition": "Covered by fellowship",
        "desc": "The nation's preeminent tropical medicine doctorate, researching vector-borne parasitic transmission (malaria, Chagas, dengue), epidemiological surveillance, and global health crisis response.",
        "requirements": {"gpa": "Master's degree in public health, biology, or medicine with 3.3+ GPA; SOPHAS application", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE optional", "papers": "SOPHAS personal statement and tropical disease research aims", "references": "Three letters of academic recommendation"},
        "source": "https://sph.tulane.edu/degrees/doctoral"
      },
      {
        "title": "Ph.D. in Biomedical Sciences - Infectious Diseases and Immunology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Biomedical Graduate Fellowships with full tuition waiver, $34,000 stipend, and health insurance",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research program at the School of Medicine and Tulane National Primate Research Center investigating retroviral pathogenesis, aerosolized biodefense vaccines, and tuberculosis immunology.",
        "requirements": {"gpa": "BS or MS in biological sciences or biochemistry with 3.3+ GPA", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Immunology research statement", "references": "Three letters of scientific recommendation"},
        "source": "https://medicine.tulane.edu/education/biomedical-sciences-graduate-program"
      },
      {
        "title": "Doctor of Medicine (M.D.) - Clinical Medicine and Community Health Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-11-01",
        "deadlineText": "November 1, 2027",
        "funding": "Tulane Medical Alumni Endowed Scholarships up to full four-year tuition",
        "fee": "$130 (AMCAS)",
        "tuition": "$67,800/year",
        "desc": "LCME-accredited medical training with extensive clinical clerkships across University Medical Center New Orleans and the Southeast Louisiana Veterans Health Care System.",
        "requirements": {"gpa": "Undergraduate science GPA 3.6+; competitive MCAT (512+ median); AMCAS application", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "AMCAS personal statement and secondary essays", "references": "Pre-health committee letter or three faculty recommendations"},
        "source": "https://medicine.tulane.edu/admissions"
      },
      {
        "title": "Master of Science in River-Coastal Science and Engineering",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "ByWater Institute Graduate Assistantships up to $24,000",
        "fee": "$50",
        "tuition": "$1,450/credit hour",
        "desc": "Unique interdisciplinary program examining Mississippi River delta sediment diversion dynamics, barrier island morphological change, coastal wetlands restoration, and hurricane surge modeling.",
        "requirements": {"gpa": "Undergraduate degree in civil engineering, geology, or environmental science with 3.0+ GPA", "ielts": "TOEFL 80+", "gre": "GRE quantitative 155+", "papers": "Coastal science research proposal", "references": "Two engineering/science recommendations"},
        "source": "https://sse.tulane.edu/rcse/graduate-program"
      },
      {
        "title": "Master of Laws (LL.M.) in Admiralty and Maritime Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Tulane Maritime Law Center Scholarships up to $15,000",
        "fee": "$60",
        "tuition": "$62,500/year",
        "desc": "The world's preeminent graduate maritime law program, focusing on charter parties, marine insurance litigation, offshore energy exploration contracts, and international maritime arbitration.",
        "requirements": {"gpa": "J.D. from an accredited US law school or first law degree from a foreign university", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Exempt", "papers": "Maritime law interest statement", "references": "Two professional/academic recommendations"},
        "source": "https://law.tulane.edu/academics/admiralty-maritime-law"
      },
      {
        "title": "ByWater Institute Gulf Coast Resilience Research Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "social-sciences", "engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$6,500 summer research stipend, coastal research vessel survey time, and Delta hydrological sensor deployment",
        "fee": "$0",
        "tuition": "Supported through Tulane ByWater Institute Research Endowment",
        "desc": "Interdisciplinary fellowship investigating nature-based coastal protection systems, community flood resilience along the Gulf Coast, and hypoxia mitigation in the Mississippi River delta.",
        "requirements": {"gpa": "Enrolled graduate student in coastal engineering, environmental science, or public policy with 3.3+ GPA", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Gulf Coast resilience research proposal", "references": "ByWater Institute faculty sponsor recommendation"},
        "source": "https://bywater.tulane.edu/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Michael A. Fitts",
        "role": "President & Professor of Law",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Michael A. Fitts is the 15th president of Tulane University, a legal scholar and former dean of the University of Pennsylvania Law School who has led Tulane to record application growth and massive research expansion."
      },
      {
        "name": "Dr. Thomas W. LaVeist",
        "role": "Dean & Weatherhead Presidential Chair in Health Equity",
        "department": "School of Public Health and Tropical Medicine",
        "subject": "social-sciences",
        "bio": "Dr. Thomas LaVeist is an elected member of the National Academy of Medicine and leading health policy scholar researching social determinants of health and racial disparities in healthcare access."
      },
      {
        "name": "Dr. Mead A. Allison",
        "role": "Chair & Professor of River-Coastal Science and Engineering",
        "department": "Department of River-Coastal Science and Engineering & ByWater Institute",
        "subject": "environment",
        "bio": "Dr. Mead Allison is an oceanographer and coastal sedimentologist investigating Mississippi River delta sediment transport, coastal wetland retention, and coastal restoration engineering."
      }
    ]
  }
]
