# scripts/make_b70_p1_chunk1.py
# Batch 70 Part 1 Chunk 1: Universities 1 to 8 (Providence, St. Francis, Sioux Falls, South Alabama, South Carolina, USC Aiken, USF, USC)

chunk1 = [
  # 1. University of Providence (Row 1150)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Providence",
    "shortName": "Providence",
    "slug": "university-of-providence",
    "location": "Great Falls, Montana, United States",
    "website": "https://www.uprovidence.edu",
    "sourceRow": 1150,
    "stats": {"established": "1932", "students": "1,050+", "international": "4%", "faculty": "90+"},
    "heroSummary": "The University of Providence is a private Catholic university founded in 1932 by the Sisters of Providence, situated on a 44-acre campus in Great Falls, Montana. Partnering with Providence St. Joseph Health—one of the largest non-profit healthcare systems in the United States—the university is renowned for nursing, healthcare administration, applied forensic science, and exercise science.",
    "academicOverview": "The university comprises two primary schools: the School of Health Professions and the School of Liberal Arts and Sciences. Serving as the primary educational arm of Providence St. Joseph Health, UP provides direct clinical training pipelines, healthcare simulation facilities, and criminal justice internships across the Northern Rockies.",
    "researchAdmissions": "Undergraduate admissions are test-optional and holistic, evaluating high school transcripts and GPA (minimum 2.5). Graduate programs require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Master of Science in Infection Prevention and Epidemiology - Clinical Healthcare Safety",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Providence St. Joseph Health Employee Tuition Fellowships up to $10,000",
        "fee": "$50",
        "tuition": "$18,500 total",
        "desc": "Specialized clinical epidemiology master's preparing board-certified infection preventionists (CIC) in hospital-acquired infection surveillance, outbreak tracing, antibiotic stewardship, and CDC bio-safety guidelines.",
        "requirements": {"gpa": "Bachelor's degree in nursing, biology, medical laboratory science, or allied health with GPA 3.0+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE not required", "papers": "Statement of purpose and clinical resume", "references": "Two professional healthcare recommendations"},
        "source": "https://www.uprovidence.edu/academics/programs/infection-prevention-and-epidemiology-ms/"
      },
      {
        "title": "Bachelor of Science in Forensic Science - Crime Scene Investigation & Criminalistics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Mother Joseph Academic Merit Scholarships up to $14,000/year",
        "fee": "$35",
        "tuition": "$27,000/year",
        "desc": "Hands-on forensic science curriculum covering latent fingerprint comparison, bloodstain pattern interpretation, forensic microscopy, ballistics trajectories, and mock courtroom expert testimony.",
        "requirements": {"gpa": "High school GPA 2.5+ with strong science preparation", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One academic recommendation"},
        "source": "https://www.uprovidence.edu/academics/programs/forensic-science-bs/"
      },
      {
        "title": "Master of Science in Clinical Mental Health Counseling - Rural Behavioral Health",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Rural Mental Health Traineeship Grants up to $8,000",
        "fee": "$50",
        "tuition": "$22,000 total",
        "desc": "CACREP-aligned clinical mental health master's preparing licensed professional counselors (LPC) in trauma-informed psychotherapy, adolescent counseling, crisis de-escalation, and rural tele-health.",
        "requirements": {"gpa": "Undergraduate degree in psychology, human services, or related field with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Personal counseling philosophy essay", "references": "Three professional references"},
        "source": "https://www.uprovidence.edu/academics/programs/clinical-mental-health-counseling-ms/"
      },
      {
        "title": "Bachelor of Science in Exercise Science - Sports Physiology & Human Performance",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Athletic and STEM Departmental Awards up to $12,000/year",
        "fee": "$35",
        "tuition": "$27,000/year",
        "desc": "Pre-physical therapy and athletic training curriculum in the human performance lab, studying VO2 max metabolic testing, biomechanical force plates, strength and conditioning, and cardiac rehabilitation.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.uprovidence.edu/academics/programs/exercise-science-bs/"
      },
      {
        "title": "Master of Healthcare Administration (MHA) - Healthcare Operations & Health Informatics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Health Leadership Fellowships up to $6,000",
        "fee": "$50",
        "tuition": "$19,500 total",
        "desc": "CAHME-informed graduate curriculum emphasizing clinical system finance, electronic health record interoperability, hospital quality analytics, and healthcare regulatory compliance.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+ and healthcare experience preferred", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Statement of healthcare leadership goals", "references": "Two recommendations"},
        "source": "https://www.uprovidence.edu/academics/programs/healthcare-administration-mha/"
      },
      {
        "title": "Bachelor of Science in Biology - Molecular Genetics & Pre-Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Undergraduate STEM research awards and institutional scholarships up to $14,000/year",
        "fee": "$35",
        "tuition": "$27,000/year",
        "desc": "Rigorous pre-medical biology curriculum featuring undergraduate laboratory genetics research, cell culture assays, immunology, and clinical shadowing at Benefis Health System.",
        "requirements": {"gpa": "High school GPA 2.7+ with biology and chemistry coursework", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One science teacher reference"},
        "source": "https://www.uprovidence.edu/academics/programs/biology-bs/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Stephen B. Sivo",
        "role": "Associate Professor of Healthcare Administration",
        "department": "School of Health Professions",
        "subject": "social-sciences",
        "bio": "Dr. Sivo conducts research in healthcare systems operations, patient outcome analytics, hospital reimbursement models, and quality improvement metrics in regional medical networks."
      },
      {
        "name": "Dr. Brenda Johnston",
        "role": "Assistant Professor of Forensic Science",
        "department": "Department of Criminal Justice and Forensic Science",
        "subject": "biology",
        "bio": "Dr. Johnston investigates forensic microscopy, trace evidence recovery protocols, crime scene documentation techniques, and pedagogical innovations in forensic death investigation."
      },
      {
        "name": "Dr. Elizabeth Paddock",
        "role": "Associate Professor of Psychology & Counseling",
        "department": "Department of Psychology",
        "subject": "social-sciences",
        "bio": "Dr. Paddock investigates rural mental health delivery disparities, clinical supervision effectiveness, adolescent resilience interventions, and trauma recovery therapies."
      }
    ]
  },

  # 2. University of Saint Francis (Row 1151)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Saint Francis",
    "shortName": "USF Fort Wayne",
    "slug": "university-of-saint-francis",
    "location": "Fort Wayne, Indiana, United States",
    "website": "https://www.sf.edu",
    "sourceRow": 1151,
    "stats": {"established": "1890", "students": "2,200+", "international": "4%", "faculty": "180+"},
    "heroSummary": "The University of Saint Francis (USF) is a private Franciscan Catholic university founded in 1890, situated on a scenic 70-acre lakeside campus in Fort Wayne, Indiana. Celebrated for elite healthcare education—graduating the region's top nurses and physician assistants—as well as animated arts and digital media at USF Downtown, Saint Francis combines Catholic intellectual values with cutting-edge professional clinical preparation.",
    "academicOverview": "USF comprises four primary colleges and divisions: the College of Health Sciences, College of Arts, Sciences, and Business, Division of Creative Arts, and the Keith Busse School of Business and Entrepreneurial Leadership. USF operates advanced clinical simulation centers and downtown studio arts facilities in Fort Wayne.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate students. Graduate programs require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two to three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Master of Science in Physician Assistant Studies (MSPAS) - Clinical Medicine & Surgery",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-09-01",
        "deadlineText": "September 1, 2027",
        "funding": "Healthcare system sponsorship stipends up to $10,000",
        "fee": "$60",
        "tuition": "$38,000/year",
        "desc": "ARC-PA accredited 27-month clinical physician assistant master's offering clinical rotations in emergency medicine, general surgery, pediatric medicine, and cardiology at Parkview Health and Lutheran Health Network.",
        "requirements": {"gpa": "Prerequisite GPA 3.2+ with minimum 1,000 hours direct patient healthcare experience", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "CASPA personal statement", "references": "Three clinical/academic references"},
        "source": "https://www.sf.edu/programs/physician-assistant-studies/"
      },
      {
        "title": "Bachelor of Science in Animation - 3D Character Modeling & Motion Design",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Creative Arts Talent Scholarships up to $12,000/year",
        "fee": "$30",
        "tuition": "$34,500/year",
        "desc": "Housed at USF Downtown creative studios, teaching industry-standard 3D Maya character animation, digital rigging, storyboarding, visual effects compositing, and game asset pipelines.",
        "requirements": {"gpa": "High school GPA 2.5+ and portfolio of 10 creative art pieces", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Artist statement", "references": "One recommendation"},
        "source": "https://www.sf.edu/programs/animation/"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Family Nurse Practitioner",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "College of Health Sciences Nursing Scholarships up to $8,000",
        "fee": "$50",
        "tuition": "$18,000 total",
        "desc": "CCNE-accredited graduate nursing program training advanced practice registered nurses in comprehensive adult and pediatric diagnostic reasoning, pharmacology management, and rural clinical care.",
        "requirements": {"gpa": "BSN from accredited program with GPA 3.0+; active unencumbered RN license", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Nursing professional statement", "references": "Two professional references"},
        "source": "https://www.sf.edu/programs/family-nurse-practitioner/"
      },
      {
        "title": "Bachelor of Science in Cybersecurity - Digital Defense & Penetration Testing",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Technology Innovation Grants up to $10,000/year",
        "fee": "$30",
        "tuition": "$34,500/year",
        "desc": "Rigorous cybersecurity curriculum emphasizing ethical hacking, packet analysis, cloud security architecture, digital forensics, and industrial control system defense.",
        "requirements": {"gpa": "High school GPA 2.5+ with mathematics proficiency", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One teacher recommendation"},
        "source": "https://www.sf.edu/programs/cybersecurity/"
      },
      {
        "title": "Master of Healthcare Administration (MHA) - Strategic Health Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Keith Busse School of Business Leadership Fellowships up to $6,000",
        "fee": "$50",
        "tuition": "$17,500 total",
        "desc": "Accelerated online and evening MHA curriculum covering hospital budget forecasting, healthcare organizational ethics, clinical workflow optimization, and health insurance policy.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Statement of goals and resume", "references": "Two recommendations"},
        "source": "https://www.sf.edu/programs/healthcare-administration/"
      },
      {
        "title": "Bachelor of Science in Biology - Ecology & Environmental Restoration",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Franciscan Environmental Stewardship Grants up to $8,000",
        "fee": "$30",
        "tuition": "$34,500/year",
        "desc": "Field biology curriculum utilizing the on-campus Mirror Lake, St. Francis nature trails, and regional wetland preserves to study aquatic ecology, amphibian population health, and stream water chemistry.",
        "requirements": {"gpa": "High school GPA 2.5+ with strong high school biology and chemistry", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One science recommendation"},
        "source": "https://www.sf.edu/programs/biology/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mark LePore",
        "role": "Professor of Counseling & Human Services",
        "department": "College of Arts, Sciences, and Business",
        "subject": "social-sciences",
        "bio": "Dr. LePore conducts research in disaster mental health response, trauma intervention for first responders, bereavement counseling for children, and compassion fatigue prevention."
      },
      {
        "name": "Dr. Amy Obringer",
        "role": "Professor of Biology & Medical Technology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Obringer investigates cellular microbiology, diagnostic laboratory blood assay techniques, antimicrobial resistance in community water systems, and pre-health sciences pedagogy."
      },
      {
        "name": "Dr. Justin Coby",
        "role": "Associate Professor of Healthcare Administration",
        "department": "Keith Busse School of Business",
        "subject": "social-sciences",
        "bio": "Dr. Coby specializes in rural community health center management, healthcare revenue cycle dynamics, pharmaceutical supply chains, and health disparity interventions."
      }
    ]
  },

  # 3. University of Sioux Falls (Row 1153)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Sioux Falls",
    "shortName": "USF",
    "slug": "university-of-sioux-falls",
    "location": "Sioux Falls, South Dakota, United States",
    "website": "https://www.usiouxfalls.edu",
    "sourceRow": 1153,
    "stats": {"established": "1883", "students": "1,600+", "international": "4%", "faculty": "110+"},
    "heroSummary": "The University of Sioux Falls (USF) is a private Christian liberal arts university founded in 1883 in Sioux Falls, South Dakota. Celebrated for high-impact nursing education, exercise science, business management, and education, USF leverages its location in South Dakota's economic and healthcare capital—home to Sanford Health and Avera Health—to provide extensive clinical internships and corporate co-ops.",
    "academicOverview": "USF delivers undergraduate and graduate degrees through four schools: the College of Arts and Sciences, Fredrikson School of Education, Vucurevich School of Business, and the School of Nursing. The campus features state-of-the-art nursing simulation laboratories and the McDonald Center.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate students, evaluating high school GPA (minimum 2.6). Graduate applicants require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Bachelor of Science in Nursing (BSN) - Acute Care Clinical Simulation - School of Nursing",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Sanford & Avera Health Sponsorship Grants up to $15,000",
        "fee": "$30",
        "tuition": "$32,800/year",
        "desc": "Top-tier CCNE-accredited undergraduate nursing program featuring over 600 hours of direct hospital clinical rotations in pediatric ICU, emergency trauma, cardiovascular surgery, and obstetrics in Sioux Falls.",
        "requirements": {"gpa": "Prerequisite GPA 3.0+ with strong biology and chemistry grades", "ielts": "TOEFL 80+", "gre": "N/A", "papers": "Nursing admissions essay", "references": "Two recommendations"},
        "source": "https://www.usiouxfalls.edu/academics/programs/nursing-major"
      },
      {
        "title": "Master of Business Administration (MBA) - Healthcare Management & Corporate Finance",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Vucurevich Business Merit Scholarships up to $6,000",
        "fee": "$30",
        "tuition": "$16,500 total",
        "desc": "IACBE-accredited MBA curriculum emphasizing healthcare executive leadership, medical practice economics, capital investment analytics, and corporate ethical decision-making.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+; business or healthcare experience preferred", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Statement of professional goals and resume", "references": "Two letters of recommendation"},
        "source": "https://www.usiouxfalls.edu/academics/programs/master-of-business-administration"
      },
      {
        "title": "Bachelor of Science in Exercise Science - Clinical Biomechanics & Kinesiology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Undergraduate Academic and Athletic Scholarships up to $14,000/year",
        "fee": "$30",
        "tuition": "$32,800/year",
        "desc": "Comprehensive human performance curriculum conducting metabolic testing, electromyography (EMG) muscle activation recording, sports injury prevention, and athletic training protocols.",
        "requirements": {"gpa": "High school GPA 2.6+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.usiouxfalls.edu/academics/programs/exercise-science-major"
      },
      {
        "title": "Bachelor of Science in Computer Science - Software Architecture & Cyber Defense",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM Achievement Awards up to $10,000/year",
        "fee": "$30",
        "tuition": "$32,800/year",
        "desc": "Undergraduate computing degree delivering hands-on training in object-oriented programming, cloud database structures, mobile application development, and network defense systems.",
        "requirements": {"gpa": "High school GPA 2.6+ with mathematics background", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.usiouxfalls.edu/academics/programs/computer-science-major"
      },
      {
        "title": "Master of Education (M.Ed.) - Educational Leadership & Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "South Dakota Educator Support Grants up to $4,000",
        "fee": "$30",
        "tuition": "$13,500 total",
        "desc": "Graduate leadership program preparing certified teachers for K-12 principal certification, school budget governance, educational law, and instructional coaching.",
        "requirements": {"gpa": "Bachelor's degree with valid teaching license and minimum 2.75 GPA", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Educational leadership essay and resume", "references": "Two professional references"},
        "source": "https://www.usiouxfalls.edu/academics/programs/master-of-education"
      },
      {
        "title": "Bachelor of Science in Biology - Biomedical Sciences & Pre-Dental",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Pre-Health Professional Grants up to $12,000/year",
        "fee": "$30",
        "tuition": "$32,800/year",
        "desc": "Pre-professional life science track emphasizing human gross anatomy dissection, microbiology, mammalian physiology, and clinical shadowing in the Sioux Falls healthcare corridor.",
        "requirements": {"gpa": "High school GPA 2.7+ with biology and chemistry", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One science teacher reference"},
        "source": "https://www.usiouxfalls.edu/academics/programs/biology-major"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Rebecca Schultz",
        "role": "Associate Professor of Nursing",
        "department": "School of Nursing",
        "subject": "biology",
        "bio": "Dr. Schultz conducts clinical research on high-fidelity simulation pedagogies in nursing, medication error reduction in acute pediatric units, and transitions of care for rural patients."
      },
      {
        "name": "Dr. Joy Ross",
        "role": "Professor of Biology",
        "department": "Department of Natural Sciences",
        "subject": "biology",
        "bio": "Dr. Ross specializes in molecular genetics, investigating cellular signaling in mammalian embryonic development, apoptosis regulatory pathways, and undergraduate laboratory biology pedagogy."
      },
      {
        "name": "Dr. Shawn Stone",
        "role": "Professor of Physics and Mathematics",
        "department": "Department of Natural Sciences",
        "subject": "physics",
        "bio": "Dr. Stone conducts research in nuclear astrophysics, measuring low-energy cross sections of nuclear reactions in stellar nucleosynthesis, gamma-ray spectroscopy, and physics education."
      }
    ]
  },

  # 4. University of South Alabama (Row 1154)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of South Alabama",
    "shortName": "South Alabama",
    "slug": "university-of-south-alabama",
    "location": "Mobile, Alabama, United States",
    "website": "https://www.southalabama.edu",
    "sourceRow": 1154,
    "stats": {"established": "1963", "students": "13,800+", "international": "7%", "faculty": "1,050+"},
    "heroSummary": "The University of South Alabama (South Alabama / USA) is a premier public doctoral research university and academic medical center located in Mobile on the historic Alabama Gulf Coast. Renowned for marine biology through the Dauphin Island Sea Lab, coastal civil engineering, chemical engineering, and advanced medicine at the USA Health system, South Alabama anchors the regional healthcare and aerospace manufacturing economy.",
    "academicOverview": "South Alabama encompasses ten colleges and schools: the Frederick P. Whiddon College of Medicine, College of Engineering, College of Nursing, College of Arts and Sciences, Mitchell College of Business, School of Computing, College of Allied Health Professions, and College of Education. South Alabama operates the Mitchell Cancer Institute and the USA Technology & Research Park.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5) and coursework. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two to three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Marine Sciences - Coastal Biological Oceanography & Fisheries - Dauphin Island",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships $28,000/year plus full tuition remission and lab fees",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Elite marine science doctorate based at the Dauphin Island Sea Lab on the Gulf of Mexico, investigating barrier island geomorphology, fish stock population dynamics, hypoxia in coastal estuaries, and seagrass meadow ecology.",
        "requirements": {"gpa": "BS or MS in marine biology, biology, oceanography, or related field with GPA 3.2+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests aligned with marine sciences faculty", "references": "Three letters of recommendation"},
        "source": "https://www.southalabama.edu/colleges/artsandsci/marinesciences/"
      },
      {
        "title": "Ph.D. in Basic Medical Sciences - Cancer Biology & Vascular Cell Signaling - Whiddon College of Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full 5-year guarantee: $34,000/year stipend, complete tuition remission, and health benefits",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Distinguished biomedical doctorate at the Center for Lung Biology and Mitchell Cancer Institute researching pulmonary arterial hypertension, endothelial barrier regulation, tumor metastasis, and DNA damage repair.",
        "requirements": {"gpa": "Bachelor's degree in biological sciences, chemistry, or related STEM field with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Personal research statement and laboratory background", "references": "Three letters from research mentors"},
        "source": "https://www.southalabama.edu/colleges/com/doctoral-program/"
      },
      {
        "title": "Ph.D. in Chemical and Biomolecular Engineering - Nanomaterials & Separation Processes",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Research Assistantships $29,000/year plus full tuition waiver",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research collaborating with Gulf Coast chemical complexes on membrane gas separations, heterogeneous nanocatalysis, biopolymer synthesis, and industrial wastewater treatment.",
        "requirements": {"gpa": "BS in chemical engineering, chemistry, or materials science with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://www.southalabama.edu/colleges/engineering/chemical/chemical-phd.html"
      },
      {
        "title": "Ph.D. in Computing - Artificial Intelligence & Cyber Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of Computing Graduate Assistantships $26,000/year plus tuition remission",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Advanced research in intelligent robotic control, deep learning for medical imaging diagnostics, industrial supervisory control and data acquisition (SCADA) security, and computer networks.",
        "requirements": {"gpa": "BS or MS in Computer Science, Software Engineering, or Information Systems with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.southalabama.edu/colleges/soc/phd/"
      },
      {
        "title": "Doctor of Audiology (Au.D.) - Clinical Audiology & Vestibular Diagnostics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Speech and Hearing Clinic Assistantships covering partial tuition and monthly stipend",
        "fee": "$60",
        "tuition": "$21,500/year",
        "desc": "CAA-accredited 4-year clinical doctorate training audiologists in cochlear implant fitting, balance vestibular assessment, auditory evoked potentials, and pediatric hearing screening.",
        "requirements": {"gpa": "Undergraduate GPA 3.2+ with prerequisite coursework in speech and hearing sciences", "ielts": "TOEFL 85+", "gre": "GRE required", "papers": "CSDCAS personal essay", "references": "Three academic/clinical references"},
        "source": "https://www.southalabama.edu/colleges/alliedhealth/speechandhearing/aud.html"
      },
      {
        "title": "Master of Science in Civil Engineering - Coastal Hurricane Resilience & Port Structures",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental research assistantships $20,000/year plus tuition waiver",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Specialized coastal engineering master's addressing hurricane wave impacts on bridge decks, storm surge hydrodynamic modeling, scour mitigation at port pilings, and geotechnical foundations.",
        "requirements": {"gpa": "BS in civil engineering or allied engineering field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Two letters of recommendation"},
        "source": "https://www.southalabama.edu/colleges/engineering/civil/civil-ms.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Sean Powers",
        "role": "Chair & Professor of Marine Sciences",
        "department": "Department of Marine Sciences & Dauphin Island Sea Lab",
        "subject": "environment",
        "bio": "Dr. Powers is an internationally acclaimed marine fisheries ecologist, investigating red snapper population dynamics in the Gulf of Mexico, oyster reef restoration, and deep-sea oil spill impacts on marine habitats."
      },
      {
        "name": "Dr. Troy Stevens",
        "role": "Director & Professor of Pharmacology",
        "department": "Center for Lung Biology & Whiddon College of Medicine",
        "subject": "biology",
        "bio": "Dr. Stevens directs the Center for Lung Biology, investigating pulmonary endothelial barrier regulation, bacterial toxin-induced vascular leak, and molecular mechanisms of acute respiratory distress syndrome (ARDS)."
      },
      {
        "name": "Dr. Christy Wheeler West",
        "role": "Associate Professor of Chemical and Biomolecular Engineering",
        "department": "Department of Chemical and Biomolecular Engineering",
        "subject": "engineering",
        "bio": "Dr. West specializes in transport phenomena, polymer nanocomposites, bio-based flame retardant coatings, and microencapsulated phase change materials for energy storage."
      }
    ]
  },

  # 5. University of South Carolina (Row 1155)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of South Carolina",
    "shortName": "South Carolina",
    "slug": "university-of-south-carolina",
    "location": "Columbia, South Carolina, United States",
    "website": "https://sc.edu",
    "sourceRow": 1155,
    "stats": {"established": "1801", "students": "35,600+", "international": "8%", "faculty": "2,200+"},
    "heroSummary": "The University of South Carolina is the historic public flagship research university of South Carolina, founded in 1801 in Columbia. A designated Carnegie R1 research powerhouse, South Carolina is internationally celebrated for hosting America's #1 international business program at the Darla Moore School of Business, nuclear and aerospace engineering, public health, sports science, and hydrogen energy technology.",
    "academicOverview": "South Carolina encompasses 16 colleges and schools including the Darla Moore School of Business, Molinaroli College of Engineering and Computing, Arnold School of Public Health, School of Medicine Columbia, and the School of Law. The university is home to the McNair Center for Aerospace Innovation and the Center for Hydrogen Research.",
    "researchAdmissions": "Undergraduate admissions are highly competitive through the Common Application. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "International MBA (IMBA) - Global Strategy & Emerging Markets - Darla Moore School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Darla Moore Fellowships covering up to 100% of tuition plus corporate overseas immersion stipends",
        "fee": "$100",
        "tuition": "$45,000 total",
        "desc": "Ranked #1 in International Business for over 30 consecutive years by U.S. News, featuring mandatory foreign language tracks, 6-month corporate consulting residencies in Asia, Europe, or Latin America, and global supply chain strategy.",
        "requirements": {"gpa": "Bachelor's degree with competitive GPA, minimum 2 years professional work experience, and GMAT or GRE score", "ielts": "TOEFL 100+ or IELTS 7.5+", "gre": "GMAT/GRE required", "papers": "Two international business essays and resume", "references": "Two professional recommendations"},
        "source": "https://sc.edu/study/colleges_schools/moore/study/international_mba/"
      },
      {
        "title": "Ph.D. in Aerospace Engineering - Automated Carbon Fiber Composites - McNair Center",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "McNair Aerospace Fellowships $34,000/year plus complete tuition waiver partnering with Boeing",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Elite aerospace doctorate conducting automated fiber placement (AFP), thermoplastic composite welding, nondestructive ultrasonic evaluation, and digital twin manufacturing for next-generation commercial aircraft.",
        "requirements": {"gpa": "BS or MS in aerospace, mechanical, or materials engineering with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose detailing composites research focus", "references": "Three letters of recommendation"},
        "source": "https://sc.edu/study/colleges_schools/engineering_and_computing/academics/aerospace_engineering/"
      },
      {
        "title": "Ph.D. in Exercise Science - Neuromuscular Control & Pediatric Obesity Prevention - Arnold School",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "NIH-funded pre-doctoral traineeships $33,000/year plus full tuition remission",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Consistently ranked the #1 exercise science doctoral program in the nation, investigating physical activity epidemiology, stroke rehabilitation robotics, cardiorespiratory fitness metrics, and sedentary behavior physiology.",
        "requirements": {"gpa": "Degree in exercise science, kinesiology, physiology, or biology with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Statement of research interests aligned with faculty mentor", "references": "Three academic references"},
        "source": "https://sc.edu/study/colleges_schools/public_health/academics/areas_of_study/exercise_science/exercise_science_phd.php"
      },
      {
        "title": "Ph.D. in Chemical Engineering - Hydrogen Fuel Cells & Electrocatalysis",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Center for Hydrogen Research Fellowships $32,000/year plus tuition coverage",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Pioneering doctoral program in clean energy technologies, focusing on proton exchange membrane (PEM) fuel cells, solid oxide electrolysis, battery degradation modeling, and carbon capture adsorption.",
        "requirements": {"gpa": "BS in chemical engineering or chemistry with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://sc.edu/study/colleges_schools/engineering_and_computing/academics/chemical_engineering/"
      },
      {
        "title": "Ph.D. in Computer Science and Engineering - Cyber-Physical Security & Big Data Analytics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Teaching/Research Assistantships $30,000/year plus tuition waiver",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Advanced computer science doctorate focusing on wireless sensor networks, hardware security verification, computer vision for uncrewed aerial vehicles, and bioinformatics algorithms.",
        "requirements": {"gpa": "BS or MS in Computer Science with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://sc.edu/study/colleges_schools/engineering_and_computing/academics/computer_science_and_engineering/"
      },
      {
        "title": "Master of Science in Sport and Entertainment Management - Venue Operations & Sports Analytics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "College of Hospitality, Retail and Sport Management Merit Scholarships up to $10,000",
        "fee": "$50",
        "tuition": "$24,500 total",
        "desc": "World-renowned graduate program preparing venue directors, athletic executives, and sports data analysts at the Colonial Life Arena and Williams-Brice Stadium operations.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; sport industry background preferred", "ielts": "TOEFL 80+", "gre": "GRE/GMAT optional", "papers": "Statement of purpose and professional resume", "references": "Two letters of recommendation"},
        "source": "https://sc.edu/study/colleges_schools/hrsm/academics/sport_and_entertainment_management/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Steven Pate",
        "role": "McNair Chair & Professor of Aerospace Engineering",
        "department": "McNair Center for Aerospace Innovation and Research",
        "subject": "engineering",
        "bio": "Dr. Pate directs advanced composite manufacturing research at the McNair Center, investigating automated fiber placement kinematics, thermoplastic resin infusion, and damage tolerance of aircraft structures."
      },
      {
        "name": "Dr. Steven Blair",
        "role": "Distinguished Professor Emeritus of Exercise Science",
        "department": "Arnold School of Public Health",
        "subject": "biology",
        "bio": "Dr. Blair is one of the world's most cited exercise epidemiologists, establishing the foundational link between cardiorespiratory fitness, sedentary lifestyle, and all-cause cardiovascular mortality."
      },
      {
        "name": "Dr. John Weidner",
        "role": "Professor of Chemical Engineering",
        "department": "Molinaroli College of Engineering and Computing",
        "subject": "engineering",
        "bio": "Dr. Weidner investigates electrochemical energy systems, mathematical modeling of lithium-ion batteries, hydrogen production via sulfur-iodine thermochemical cycles, and fuel cell electrocatalysis."
      }
    ]
  },

  # 6. University of South Carolina Aiken (Row 1156)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of South Carolina Aiken",
    "shortName": "USC Aiken",
    "slug": "university-of-south-carolina-aiken",
    "location": "Aiken, South Carolina, United States",
    "website": "https://www.usca.edu",
    "sourceRow": 1156,
    "stats": {"established": "1961", "students": "3,900+", "international": "5%", "faculty": "240+"},
    "heroSummary": "The University of South Carolina Aiken (USC Aiken) is a top-ranked public regional comprehensive university established in 1961 in Aiken, South Carolina. Located near the Savannah River National Laboratory (SRNL) nuclear corridor and celebrated as the equestrian heartland of the South, USC Aiken delivers exceptional programs in industrial process engineering, cybersecurity, nursing, biology, and equestrian business.",
    "academicOverview": "USC Aiken spans four colleges and schools: the College of Sciences and Engineering, School of Nursing, School of Business Administration, and the College of Arts, Humanities, and Social Sciences. The campus hosts the Ruth Patrick Science Education Center and the Advanced Manufacturing Collaborative.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate students, evaluating high school core GPA (minimum 2.5). Graduate applicants require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.0+).",
    "opps": [
      {
        "title": "Bachelor of Science in Industrial Process Engineering - Nuclear Systems & Automation",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Savannah River Nuclear Solutions (SRNS) Engineering Scholarships up to $10,000/year",
        "fee": "$35",
        "tuition": "$20,800/year (out-of-state) / $10,400/year (in-state)",
        "desc": "Tailored engineering curriculum developed in partnership with Savannah River National Laboratory, covering chemical process simulation, PLC automation controls, thermal hydraulics, and nuclear materials handling.",
        "requirements": {"gpa": "High school GPA 2.75+ with precalculus or calculus", "ielts": "TOEFL 79+ or IELTS 6.0+", "gre": "N/A", "papers": "Admissions essay", "references": "One math/science teacher reference"},
        "source": "https://www.usca.edu/academics/departments/sciences-engineering/engineering"
      },
      {
        "title": "Bachelor of Science in Applied Computer Science - Cybersecurity & Enterprise Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Department of Energy Cyber Merit Grants up to $8,000/year",
        "fee": "$35",
        "tuition": "$20,800/year",
        "desc": "Hands-on cybersecurity curriculum addressing industrial control system protection, network defense, ethical hacking penetration testing, database structures, and digital forensics.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.usca.edu/academics/departments/sciences-engineering/computer-science"
      },
      {
        "title": "Master of Science in Applied Clinical Psychology - Evidence-Based Psychotherapy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate Assistantships $12,000/year plus out-of-state tuition waiver",
        "fee": "$45",
        "tuition": "$15,500 total",
        "desc": "Practitioner-scholar master's program offering extensive clinical practicum training in cognitive behavioral therapy (CBT), psychological diagnostic assessment, and psychopathology.",
        "requirements": {"gpa": "Undergraduate degree in psychology or related field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of clinical intent and goals", "references": "Three letters of recommendation"},
        "source": "https://www.usca.edu/academics/departments/arts-humanities-social-sciences/psychology/graduate"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN) - Clinical Nursing Leadership",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Aiken Regional Medical Centers Nursing Stipends up to $8,000",
        "fee": "$35",
        "tuition": "$20,800/year",
        "desc": "CCNE-accredited professional nursing curriculum utilizing high-fidelity clinical simulation mannequins, pharmacology lab simulations, and rotations at Aiken Regional and Augusta University Health.",
        "requirements": {"gpa": "Prerequisite GPA 3.0+ and TEAS nursing entrance exam", "ielts": "TOEFL 80+", "gre": "N/A", "papers": "Nursing statement of purpose", "references": "Two recommendations"},
        "source": "https://www.usca.edu/academics/departments/school-of-nursing"
      },
      {
        "title": "Bachelor of Science in Biology - Environmental Remediation & Herpetology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Ruth Patrick Science Research Fellowships up to $6,000",
        "fee": "$35",
        "tuition": "$20,800/year",
        "desc": "Field ecology track conducting biodiversity studies in the Sandhills ecological region, Savannah River wetland drainage, radioecology tracing, and amphibian conservation.",
        "requirements": {"gpa": "High school GPA 2.5+ with strong science preparation", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.usca.edu/academics/departments/sciences-engineering/biology"
      },
      {
        "title": "Master of Business Administration (MBA) - Energy Economics & Supply Chain",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "School of Business Administration Dean's Awards up to $5,000",
        "fee": "$45",
        "tuition": "$14,000 total",
        "desc": "AACSB-accredited MBA curriculum focusing on industrial supply chain analytics, energy economics, managerial accounting, and executive leadership in manufacturing corridors.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Statement of purpose and resume", "references": "Two letters of recommendation"},
        "source": "https://www.usca.edu/academics/departments/school-of-business-administration/mba"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Daren Timmons",
        "role": "Professor of Chemistry & Provost",
        "department": "Department of Chemistry and Physics",
        "subject": "chemistry",
        "bio": "Dr. Timmons investigates coordination chemistry of metal-organic frameworks (MOFs), luminescent copper complexes, and crystal engineering for gas separation and environmental sensing."
      },
      {
        "name": "Dr. Michelle Vieyra",
        "role": "Associate Professor of Biology",
        "department": "Department of Biology and Geology",
        "subject": "biology",
        "bio": "Dr. Vieyra conducts neurobiology research on olfactory sensory processing, neurodegenerative behavioral assays in animal models, and cognitive neuroscience pedagogy."
      },
      {
        "name": "Dr. Titan Paul",
        "role": "Associate Professor of Engineering",
        "department": "Department of Industrial Process Engineering",
        "subject": "engineering",
        "bio": "Dr. Paul specializes in thermal-fluid systems, computational fluid dynamics (CFD) modeling of heat exchangers, nanofluid heat transfer enhancement, and nuclear safety thermal analysis."
      }
    ]
  },

  # 7. University of South Florida (Row 1159)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of South Florida",
    "shortName": "USF",
    "slug": "university-of-south-florida",
    "location": "Tampa, Florida, United States",
    "website": "https://www.usf.edu",
    "sourceRow": 1159,
    "stats": {"established": "1956", "students": "49,700+", "international": "11%", "faculty": "3,400+"},
    "heroSummary": "The University of South Florida (USF) is an elite member of the Association of American Universities (AAU) and one of the nation's fastest-rising public Carnegie R1 research institutions, situated on a sprawling campus in Tampa, Florida. Driving over $600 million in annual research, USF is internationally celebrated for medical breakthroughs at USF Health, patent generation, marine science at St. Petersburg, cybersecurity, and public health.",
    "academicOverview": "USF encompasses 14 colleges and schools including the Morsani College of Medicine, College of Engineering, College of Marine Science, College of Public Health, Muma College of Business, and the Taneja College of Pharmacy. Key institutes include the Global Virus Network Center of Excellence, Florida Center for Cybersecurity (Cyber Florida), and the Clean Energy Research Center (CERC).",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA and SAT/ACT scores. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Marine Science - Ocean Circulation & Coastal Oceanography - St. Petersburg",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research fellowships $32,000/year plus complete tuition waiver",
        "fee": "$30",
        "tuition": "Covered by fellowship",
        "desc": "Elite oceanographic doctorate based on the Tampa Bay waterfront in St. Petersburg, researching Gulf of Mexico loop currents, satellite ocean color imagery, red tide dinoflagellate blooms, and deep-sea coral reef ecosystems.",
        "requirements": {"gpa": "BS or MS in marine science, physics, geology, or chemistry with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests aligned with CMS faculty", "references": "Three letters of recommendation"},
        "source": "https://www.usf.edu/marine-science/academics/degrees/phd.aspx"
      },
      {
        "title": "Ph.D. in Medical Sciences - Neuroscience & Alzheimer's Therapeutics - Morsani College of Medicine",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full 5-year guarantee: $35,000/year stipend, full tuition remission, and health insurance",
        "fee": "$30",
        "tuition": "Covered by fellowship",
        "desc": "Top-tier biomedical doctorate at the USF Health Neuroscience Institute researching tau pathology in Alzheimer's disease, stem cell neurogenesis after ischemic stroke, neuro-immunology, and traumatic brain injury therapies.",
        "requirements": {"gpa": "Undergraduate degree in life sciences, biochemistry, or neuroscience with GPA 3.3+", "ielts": "TOEFL 85+", "gre": "GRE not accepted", "papers": "Statement of purpose and laboratory research experience", "references": "Three letters of recommendation"},
        "source": "https://health.usf.edu/medicine/graduatestudies/phd"
      },
      {
        "title": "Ph.D. in Computer Science and Engineering - Cyber Florida & AI Hardware Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Cyber Florida and Departmental Fellowships $32,000/year plus full tuition remission",
        "fee": "$30",
        "tuition": "Covered by fellowship",
        "desc": "Conducted in partnership with Cyber Florida, exploring hardware root-of-trust verification, deep learning anomaly detection, smart grid cryptographic protection, and autonomous robotic navigation.",
        "requirements": {"gpa": "BS in Computer Science, Computer Engineering, or related discipline with GPA 3.4+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://www.usf.edu/engineering/cse/graduate/phd.aspx"
      },
      {
        "title": "Ph.D. in Chemical Engineering - Clean Energy & Battery Storage Materials - CERC",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Clean Energy Research Center Fellowships $31,000/year plus tuition remission",
        "fee": "$30",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research conducted through the Clean Energy Research Center (CERC), investigating phase-change thermal storage materials, photocatalytic hydrogen splitters, and perovskite solar photovoltaic films.",
        "requirements": {"gpa": "BS in chemical engineering, materials science, or chemistry with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.usf.edu/engineering/chbme/graduate/phd-chbme.aspx"
      },
      {
        "title": "Ph.D. in Public Health - Global Communicable Disease & Vector Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "College of Public Health Doctoral Fellowships $30,000/year plus complete tuition coverage",
        "fee": "$30",
        "tuition": "Covered by fellowship",
        "desc": "Top-20 ranked College of Public Health doctorate exploring mosquito transmission vectors of Zika and malaria, neglected tropical parasitic infections, vaccine policy trials, and global health surveillance.",
        "requirements": {"gpa": "Master's degree (MPH or MSPH) with GPA 3.3+; quantitative and life science coursework", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Statement of public health research objectives", "references": "Three academic references"},
        "source": "https://health.usf.edu/publichealth/apply/phd"
      },
      {
        "title": "Master of Science in Cybersecurity - Digital Forensics & Information Assurance",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "National Center of Academic Excellence Merit Scholarships up to $10,000",
        "fee": "$30",
        "tuition": "$21,500 total",
        "desc": "NSA-designated cybersecurity master's covering incident response forensics, cloud zero-trust security architecture, network vulnerability assessment, and threat hunting.",
        "requirements": {"gpa": "Bachelor's degree in STEM or business with GPA 3.0+; programming knowledge", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://www.usf.edu/cybersecurity/academics/ms-cybersecurity.aspx"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Robert H. Weisberg",
        "role": "Distinguished University Professor of Physical Oceanography",
        "department": "College of Marine Science",
        "subject": "environment",
        "bio": "Dr. Weisberg investigates coastal ocean circulation dynamics, storm surge predictive modeling in Tampa Bay, West Florida shelf coastal upwelling, and El Niño climate teleconnections."
      },
      {
        "name": "Dr. Sudeep Sarkar",
        "role": "Distinguished University Professor of Computer Science",
        "department": "Department of Computer Science and Engineering",
        "subject": "computer-science",
        "bio": "Dr. Sarkar is a fellow of the IEEE and National Academy of Inventors, researching computer vision algorithms, automated video gait analysis, biometrics recognition, and gesture perception."
      },
      {
        "name": "Dr. D. Yogi Goswami",
        "role": "Distinguished University Professor of Chemical Engineering",
        "department": "Clean Energy Research Center (CERC)",
        "subject": "engineering",
        "bio": "Dr. Goswami is an internationally recognized pioneer in solar thermal energy, developing the Goswami combined power and cooling thermodynamic cycle, solar photocatalytic disinfection, and thermal storage."
      }
    ]
  },

  # 8. University of Southern California (Row 1160)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Southern California",
    "shortName": "USC",
    "slug": "university-of-southern-california",
    "location": "Los Angeles, California, United States",
    "website": "https://www.usc.edu",
    "sourceRow": 1160,
    "stats": {"established": "1880", "students": "49,500+", "international": "25%", "faculty": "4,700+"},
    "heroSummary": "The University of Southern California (USC) is one of the world's leading private research universities and a distinguished member of the Association of American Universities (AAU). Located in the heart of Los Angeles, USC is world-famous for cinematic arts at the USC School of Cinematic Arts, engineering and AI at the Viterbi School of Engineering, biomedical breakthroughs at the Keck School of Medicine, and international business at the Marshall School.",
    "academicOverview": "USC spans 23 schools and units including the Viterbi School of Engineering, School of Cinematic Arts, Keck School of Medicine, Marshall School of Business, Gould School of Law, and the Annenberg School for Communication and Journalism. Leading research institutes include the Information Sciences Institute (ISI)—where the Internet's domain name system (DNS) was invented—and the Institute for Creative Technologies (ICT).",
    "researchAdmissions": "Admissions are among the most selective globally. Graduate admissions require an accredited bachelor's degree with a high GPA (typically 3.5+), statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 100+ or IELTS 7.5+).",
    "opps": [
      {
        "title": "Ph.D. in Computer Science - Artificial Intelligence & Natural Language Processing - Viterbi School & ISI",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full 5-year guarantee: $42,000/year stipend, complete tuition remission, and health benefits",
        "fee": "$90",
        "tuition": "Covered by fellowship",
        "desc": "Elite computing doctorate at Viterbi and the Information Sciences Institute (ISI) researching large language model alignment, machine translation, multi-agent reinforcement learning, quantum computing algorithms, and robotics.",
        "requirements": {"gpa": "BS or MS in Computer Science, Mathematics, or Electrical Engineering with GPA 3.6+", "ielts": "TOEFL 100+ or IELTS 7.5+", "gre": "GRE optional", "papers": "Research statement of purpose and CV", "references": "Three letters of recommendation from faculty researchers"},
        "source": "https://www.cs.usc.edu/academic-programs/phd/"
      },
      {
        "title": "Master of Fine Arts in Film & Television Production - Directing & Cinematography - School of Cinematic Arts",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "George Lucas & SCA Endowed Fellowships covering up to 100% of tuition and production budgets",
        "fee": "$90",
        "tuition": "$52,000/year",
        "desc": "The world's premier film school, offering three years of intensive hands-on production on industry soundstages, covering directing, cinematography on Arri/RED cameras, editing in Avid, sound design, and producing.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.2+; creative portfolio (visual sample, writing sample, creative resume)", "ielts": "TOEFL 100+", "gre": "GRE not required", "papers": "Personal statement and cinematic scene writing prompt", "references": "Three letters of recommendation"},
        "source": "https://cinema.usc.edu/production/index.cfm"
      },
      {
        "title": "Ph.D. in Biomedical Engineering - Neural Engineering & Retinal Prosthetics - Viterbi School",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-12-15",
        "deadlineText": "December 15, 2027",
        "funding": "Full 5-year fellowship guarantee: $40,000/year stipend plus complete tuition remission",
        "fee": "$90",
        "tuition": "Covered by fellowship",
        "desc": "Pioneering doctoral program in neural prostheses (birthplace of the Argus II bionic eye), brain-machine interfaces, cardiovascular biomechanics, and microfluidic organ-on-a-chip diagnostics.",
        "requirements": {"gpa": "BS in engineering, physics, or neuroscience with GPA 3.5+", "ielts": "TOEFL 100+", "gre": "GRE optional", "papers": "Statement of purpose detailing lab interest", "references": "Three letters of recommendation"},
        "source": "https://bme.usc.edu/academics/phd/"
      },
      {
        "title": "Ph.D. in Cancer Biology and Genomics - Norris Comprehensive Cancer Center - Keck School",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full graduate assistantships $39,000/year plus full tuition remission and health insurance",
        "fee": "$90",
        "tuition": "Covered by fellowship",
        "desc": "NCI-designated comprehensive cancer center doctorate investigating DNA methylation epigenetics, oncogenic signaling cascades, chimeric antigen receptor (CAR-T) cell therapy, and tumor immunogenomics.",
        "requirements": {"gpa": "Bachelor's degree in biological sciences with GPA 3.4+ and wet-lab research credentials", "ielts": "TOEFL 100+", "gre": "GRE not accepted", "papers": "Statement of research background and career goals", "references": "Three academic references"},
        "source": "https://keck.usc.edu/pibbs/phd-programs/cancer-biology-and-genomics/"
      },
      {
        "title": "Ph.D. in Aerospace Engineering - Spacecraft Propulsion & Hypersonic Gas Dynamics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Viterbi Graduate Fellowships $39,000/year plus complete tuition coverage",
        "fee": "$90",
        "tuition": "Covered by fellowship",
        "desc": "Elite aerospace doctorate collaborating with NASA JPL, SpaceX, and Northrop Grumman on electric ion thrusters, rarefied gas dynamics, boundary layer transition in hypersonics, and orbital mechanics.",
        "requirements": {"gpa": "BS in Aerospace or Mechanical Engineering with GPA 3.5+", "ielts": "TOEFL 100+", "gre": "GRE optional", "papers": "Statement of purpose and technical resume", "references": "Three letters of recommendation"},
        "source": "https://ame.usc.edu/academics/doctoral-programs/"
      },
      {
        "title": "Ph.D. in Communication - Digital Media Platforms & Computational Communication - Annenberg School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-12-01",
        "deadlineText": "December 1, 2027",
        "funding": "Full 5-year Annenberg Doctoral Fellowships $38,000/year plus full tuition waiver",
        "fee": "$90",
        "tuition": "Covered by fellowship",
        "desc": "Consistently ranked among the world's top communication doctoral programs, exploring algorithmic media bias, online disinformation networks, political communication, and social platform governance.",
        "requirements": {"gpa": "Bachelor's or master's degree in communication or social sciences with GPA 3.5+", "ielts": "TOEFL 100+", "gre": "GRE optional", "papers": "Scholarly writing sample and statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://annenberg.usc.edu/communication/phd"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mark Humayun",
        "role": "University Professor of Biomedical Engineering and Ophthalmology",
        "department": "Viterbi School of Engineering & Keck School of Medicine",
        "subject": "engineering",
        "bio": "Dr. Humayun is a member of the National Academy of Engineering and National Academy of Medicine, inventor of the Argus II bionic eye retinal prosthesis restoring sight to blind patients, and recipient of the National Medal of Technology and Innovation."
      },
      {
        "name": "Dr. Yolanda Gil",
        "role": "Research Professor of Computer Science",
        "department": "Information Sciences Institute (ISI) & Viterbi School",
        "subject": "computer-science",
        "bio": "Dr. Gil is a fellow of AAAI and ACM, researching automated scientific discovery algorithms, knowledge capture, semantic workflows, and intelligent conversational assistants."
      },
      {
        "name": "Dr. Peter A. Jones",
        "role": "Distinguished Professor Emeritus of Biochemistry & Molecular Medicine",
        "department": "Norris Comprehensive Cancer Center & Keck School",
        "subject": "biology",
        "bio": "Dr. Jones is a world-renowned pioneer in cancer epigenetics, discovering the mechanism of 5-azacytidine DNA methylation inhibition, and former president of the American Association for Cancer Research (AACR)."
      }
    ]
  }
]
