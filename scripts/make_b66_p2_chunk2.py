# scripts/make_b66_p2_chunk2.py
# Batch 66 Part 2 Chunk 2: Universities 24 to 30

chunk4 = [
  # 24. Texas Wesleyan University (Row 994)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Texas Wesleyan University",
    "shortName": "Texas Wesleyan",
    "slug": "texas-wesleyan-university",
    "location": "Fort Worth, Texas, United States",
    "website": "https://www.txwes.edu",
    "sourceRow": 994,
    "stats": {"established": "1890", "students": "2,600+", "international": "6%", "faculty": "180+"},
    "heroSummary": "Texas Wesleyan University is a distinguished private institution affiliated with the United Methodist Church, situated in the historic Polytechnic Heights neighborhood of Fort Worth, Texas. Texas Wesleyan is nationally celebrated for its Graduate Program of Nurse Anesthesia (GPNA)—one of the largest and most prestigious nurse anesthesia programs in the United States—alongside strong programs in business, education, and forensic science.",
    "academicOverview": "Texas Wesleyan operates four academic schools: the School of Health Professions, the School of Business Administration, the School of Education, and the School of Arts and Sciences. Its specialized clinical simulation center and advanced health sciences laboratories prepare healthcare leaders, certified registered nurse anesthetists (CRNAs), and innovative professionals.",
    "researchAdmissions": "Undergraduate admissions evaluate high school grade point average, test scores (test-optional available), and leadership potential. The GPNA and graduate health science programs maintain rigorous admissions requiring an unencumbered RN license, minimum one year of critical care ICU experience, a competitive collegiate science GPA (3.0+ minimum), and faculty interview panels.",
    "opps": [
      {
        "title": "Doctor of Nurse Anesthesia Practice (DNAP) - Entry-Level Practice",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Health Resources and Services Administration (HRSA) Nurse Anesthesia Traineeships up to $15,000",
        "fee": "$75",
        "tuition": "$1,120/credit hour",
        "desc": "COA-accredited 36-month practice doctorate preparing certified registered nurse anesthetists (CRNAs) with over 2,500 hours of clinical anesthesia rotations across premier hospital systems.",
        "requirements": {"gpa": "BSN with 3.0+ cumulative and science GPA; active RN license; minimum 1 year acute adult ICU experience", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE waived for 3.2+ GPA", "papers": "Personal professional goals statement", "references": "Three clinical supervisor recommendations"},
        "source": "https://txwes.edu/health-professions/dnap/"
      },
      {
        "title": "Bachelor of Science in Forensic Science - Chemistry & Criminalistics",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Texas Wesleyan Presidential Honors Scholarships up to $18,000/year",
        "fee": "$0",
        "tuition": "$34,500/year",
        "desc": "Rigorous undergraduate forensic program featuring hands-on chromatography, mass spectrometry, ballistics examination, and mock crime scene processing laboratories.",
        "requirements": {"gpa": "High school GPA 3.0+ with strong background in chemistry and biology", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Forensic science motivation essay", "references": "One STEM teacher recommendation"},
        "source": "https://txwes.edu/academics/arts-sciences/forensic-science/"
      },
      {
        "title": "Master of Business Administration (MBA) in Supply Chain Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "School of Business Executive Merit Grants up to $5,000",
        "fee": "$50",
        "tuition": "$790/credit hour",
        "desc": "IACBE-accredited graduate curriculum focusing on enterprise resource planning (ERP), freight procurement logistics, operations analytics, and managerial finance.",
        "requirements": {"gpa": "Accredited bachelor's degree with 2.75+ GPA", "ielts": "TOEFL 79+", "gre": "GMAT/GRE optional", "papers": "Career goals statement", "references": "Two professional references"},
        "source": "https://txwes.edu/academics/business/mba/"
      },
      {
        "title": "Bachelor of Science in Computer Science - Software Engineering",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "STEM Dean's Awards up to $14,000/year",
        "fee": "$0",
        "tuition": "$34,500/year",
        "desc": "Hands-on computer science program emphasizing algorithm design, cloud software architecture, database management systems, and cybersecurity principles.",
        "requirements": {"gpa": "High school GPA 2.8+ with algebra readiness", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://txwes.edu/academics/arts-sciences/computer-science/"
      },
      {
        "title": "Master of Science in Marriage and Family Therapy (MFT)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Community Counseling Traineeships up to $6,000",
        "fee": "$50",
        "tuition": "$790/credit hour",
        "desc": "COAMFTE-accredited master's program providing direct clinical training at the on-campus Central Texas Counseling Clinic, specializing in systemic family therapy and trauma recovery.",
        "requirements": {"gpa": "Undergraduate degree with 3.0+ GPA in psychology or related discipline", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Clinical philosophy statement", "references": "Three letters of recommendation"},
        "source": "https://txwes.edu/academics/arts-sciences/counseling/"
      },
      {
        "title": "Texas Wesleyan Clinical Anesthesia Simulation Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "$5,000 stipend and access to high-fidelity robotic surgical patient simulators",
        "fee": "$0",
        "tuition": "Endowed through GPNA Alumni Research Fund",
        "desc": "Clinical simulation fellowship evaluating crisis resource management protocols, difficult airway intubation algorithms, and patient hemodynamics during anesthesia induction.",
        "requirements": {"gpa": "Enrolled doctoral student in nurse anesthesia with 3.5+ GPA", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Anesthesia simulation research proposal", "references": "GPNA clinical faculty recommendation"},
        "source": "https://txwes.edu/health-professions/dnap/research-fellowships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Emily W. Messer",
        "role": "President & Professor of Higher Education",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Emily Messer serves as the 21st president and first female president of Texas Wesleyan University, bringing extensive executive leadership in university advancement and student engagement."
      },
      {
        "name": "Dr. Tito D. Tubires",
        "role": "Director & Professor of Nurse Anesthesia Practice",
        "department": "Graduate Program of Nurse Anesthesia (GPNA)",
        "subject": "biology",
        "bio": "Dr. Tubires is an expert in clinical nurse anesthesia education, researching pharmacology of inhaled anesthetics, high-fidelity human patient simulation models, and perioperative safety."
      },
      {
        "name": "Dr. Ricardo E. Rodriguez",
        "role": "Professor of Chemistry & Department Chair",
        "department": "Department of Chemistry and Biochemistry",
        "subject": "chemistry",
        "bio": "Dr. Rodriguez is an analytical chemist researching forensic chemical identification, environmental heavy metal extraction, and undergraduate chemistry pedagogical interventions."
      }
    ]
  },

  # 25. Texas Woman's University (Row 995)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Texas Woman's University",
    "shortName": "Texas Woman's",
    "slug": "texas-womans-university",
    "location": "Denton, Texas, United States",
    "website": "https://www.twu.edu",
    "sourceRow": 995,
    "stats": {"established": "1901", "students": "15,500+", "international": "4%", "faculty": "950+"},
    "heroSummary": "Texas Woman's University (TWU) is the nation's largest public university system primarily focused on women, operating campuses in Denton, Dallas, and Houston. Classified as a Carnegie R2 high-research institution, TWU is a national leader in nursing, physical therapy, occupational therapy, nutrition, and women's leadership studies.",
    "academicOverview": "TWU delivers accredited programs through the College of Nursing, the College of Health Sciences, the College of Arts and Sciences, the College of Professional Education, and the Merrilee Alexander Kick College of Business and Entrepreneurship. Its clinical centers in the Texas Medical Center in Houston and Dallas Medical District drive cutting-edge healthcare delivery and clinical trials.",
    "researchAdmissions": "Undergraduate admissions evaluate high school transcript, class rank, and GPA (assured admission for top 25% of Texas high school classes; test-optional). Graduate and professional healthcare admissions require an accredited bachelor's degree with a 3.0+ GPA, prerequisite science completions, and centralized application packets (e.g., NursingCAS, OTCAS, PTCAS).",
    "opps": [
      {
        "title": "Ph.D. in Nursing Science - Women's Health & Health Disparities",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate assistantships with tuition coverage plus $26,000 annual research stipend",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Elite doctoral research program training nurse scientists at TWU's Houston Medical Center and Dallas campuses, investigating maternal health inequities, oncology nursing interventions, and chronic illness management.",
        "requirements": {"gpa": "Master's degree in nursing (MSN) with 3.3+ GPA; unencumbered active RN license", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE optional", "papers": "Program of research statement and writing sample", "references": "Three doctoral-prepared references"},
        "source": "https://twu.edu/nursing/phd-in-nursing-science/"
      },
      {
        "title": "Doctor of Physical Therapy (DPT) - Dallas & Houston Clinical Campuses",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of Physical Therapy Endowed Merit Scholarships up to $10,000",
        "fee": "$50",
        "tuition": "$8,900/semester (in-state), $17,400/semester (out-of-state)",
        "desc": "CAPTE-accredited 33-month clinical doctorate providing over 36 weeks of full-time clinical internships in neurological rehabilitation, pediatric physical therapy, and musculoskeletal orthopedics.",
        "requirements": {"gpa": "Prerequisite science GPA 3.2+; minimum 50 hours PT clinical observation; PTCAS application", "ielts": "TOEFL 80+", "gre": "GRE scores required", "papers": "PTCAS personal statement", "references": "Three recommendations including licensed PT"},
        "source": "https://twu.edu/physical-therapy/doctor-of-physical-therapy/"
      },
      {
        "title": "Ph.D. in Nutrition - Metabolic Biochemistry & Functional Foods",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Departmental Teaching and Research Fellowships up to $22,000",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Interdisciplinary doctoral program investigating bioactive functional food compounds, dietary modulation of the gut microbiome, lipid metabolism, and type 2 diabetes prevention.",
        "requirements": {"gpa": "BS or MS in nutrition, biochemistry, or food science with 3.2+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE optional", "papers": "Nutrition research interests statement", "references": "Three academic recommendations"},
        "source": "https://twu.edu/nutrition-food-sciences/graduate-programs/phd-in-nutrition/"
      },
      {
        "title": "Master of Science in Occupational Therapy (MOT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Health Sciences Traineeship Grants up to $8,000",
        "fee": "$50",
        "tuition": "$450/credit hour (in-state)",
        "desc": "ACOTE-accredited occupational therapy program consistently ranked among the best in the nation, focusing on sensory processing, neurorehabilitation, and assistive adaptive technologies.",
        "requirements": {"gpa": "Prerequisite GPA 3.0+; OTCAS application; 40 observation hours", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "OTCAS essay", "references": "Three references including licensed OT"},
        "source": "https://twu.edu/occupational-therapy/"
      },
      {
        "title": "Master of Science in Informatics - Healthcare Informatics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "TWU Pioneer Health Informatics Scholarships up to $4,500",
        "fee": "$50",
        "tuition": "$450/credit hour (in-state)",
        "desc": "Applied informatics curriculum exploring electronic health record (EHR) data analytics, medical artificial intelligence architectures, health information security, and clinical decision support.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Statement of informatics intent", "references": "Two professional/academic recommendations"},
        "source": "https://twu.edu/informatics/"
      },
      {
        "title": "Jane Nelson Institute for Women's Leadership Research Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$5,000 research stipend, archival collection access, and executive policy mentor placement",
        "fee": "$0",
        "tuition": "Funded through Jane Nelson Institute Endowment",
        "desc": "Interdisciplinary fellowship investigating women's participation in corporate executive governance, political representation, business entrepreneurship funding access, and public policy advocacy.",
        "requirements": {"gpa": "Enrolled graduate student in business, sociology, or public administration with 3.4+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Women's leadership research proposal", "references": "Two faculty recommendation letters"},
        "source": "https://twu.edu/institutes/jane-nelson-institute/fellowships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Carine M. Feyten",
        "role": "Chancellor and President & Professor of Education",
        "department": "Office of the Chancellor",
        "subject": "social-sciences",
        "bio": "Dr. Carine M. Feyten serves as chancellor and president of Texas Woman's University, an internationally acclaimed scholar in second-language acquisition who established the TWU System and oversaw major campus expansions."
      },
      {
        "name": "Dr. Damon Leiss",
        "role": "Dean & Professor of Health Sciences",
        "department": "College of Health Sciences",
        "subject": "biology",
        "bio": "Dr. Leiss oversees the College of Health Sciences, leading interprofessional healthcare education, kinesiology, and rural physical therapy clinical outreach initiatives across Texas."
      },
      {
        "name": "Dr. Shanil Juma",
        "role": "Professor of Nutrition & Food Sciences",
        "department": "Department of Nutrition and Food Sciences",
        "subject": "biology",
        "bio": "Dr. Juma is an authority on nutritional physiology and bone biology, researching functional foods, tart cherries, blueberries, and dietary polyphenols for mitigating osteoarthritis and osteoporosis."
      }
    ]
  },

  # 26. The Chicago School (Row 999)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The Chicago School",
    "shortName": "The Chicago School",
    "slug": "the-chicago-school",
    "location": "Chicago, Illinois, United States",
    "website": "https://www.thechicagoschool.edu",
    "sourceRow": 999,
    "stats": {"established": "1979", "students": "6,000+", "international": "5%", "faculty": "450+"},
    "heroSummary": "The Chicago School (formerly The Chicago School of Professional Psychology) is a leading private nonprofit university dedicated exclusively to psychology, behavioral health, and nursing. Operating campuses in Chicago, Los Angeles, Anaheim, San Diego, Washington D.C., Dallas, and online, it is widely acclaimed for its APA-accredited Clinical Psychology Psy.D. programs and the pioneering Illinois College of Osteopathic Medicine.",
    "academicOverview": "The Chicago School delivers over 30 degree programs organized through the Department of Clinical Psychology, the Department of Applied Behavior Analysis (ABA), the Department of Forensic Psychology, and the College of Nursing and Advanced Health Professions. Its practitioner-scholar model emphasizes integrated multicultural clinical competence and community health engagement.",
    "researchAdmissions": "Admissions are competitive and evaluated through departmental faculty committees. Applicants must hold an accredited bachelor's or master's degree (minimum 3.0 cumulative GPA), submit official transcripts, letters of recommendation, a comprehensive personal essay detailing clinical/career objectives, and complete formal admissions interviews.",
    "opps": [
      {
        "title": "Doctor of Psychology (Psy.D.) in Clinical Psychology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Chicago School Dean's Doctoral Fellowships up to $15,000 annually",
        "fee": "$50",
        "tuition": "$1,380/credit hour",
        "desc": "APA-accredited practitioner-scholar doctoral program preparing clinical psychologists through integrated diagnostic practicums, neuropsychological testing, and APA-accredited predoctoral internships.",
        "requirements": {"gpa": "Bachelor's or Master's in psychology with 3.2+ GPA; minimum 18 hours in psychology", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE optional", "papers": "Personal professional goals statement and clinical writing sample", "references": "Three professional/academic recommendations"},
        "source": "https://www.thechicagoschool.edu/programs/psyd-clinical-psychology/"
      },
      {
        "title": "Ph.D. in Applied Behavior Analysis (ABA)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Departmental Teaching and Research Assistantships up to $12,000",
        "fee": "$50",
        "tuition": "$1,380/credit hour",
        "desc": "ABAI-verified doctoral curriculum training researchers and Board Certified Behavior Analysts (BCBA-D) in autism intervention science, organizational behavior management, and verbal behavior theory.",
        "requirements": {"gpa": "Master's degree in behavior analysis or related discipline with 3.3+ GPA; BCBA certification preferred", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Behavior analytic research statement", "references": "Three letters of recommendation"},
        "source": "https://www.thechicagoschool.edu/programs/phd-applied-behavior-analysis/"
      },
      {
        "title": "Master of Arts in Forensic Psychology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Public Interest Psychology Scholarships up to $6,000",
        "fee": "$50",
        "tuition": "$1,290/credit hour",
        "desc": "Applied forensic program examining criminal risk assessment, courtroom expert testimony, eyewitness memory psychology, and rehabilitation protocols within correctional facilities.",
        "requirements": {"gpa": "Baccalaureate degree with 3.0+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Forensic psychology personal essay", "references": "Two letters of recommendation"},
        "source": "https://www.thechicagoschool.edu/programs/ma-forensic-psychology/"
      },
      {
        "title": "Master of Science in Clinical Psychopharmacology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Prescriptive Authority Fellowships up to $5,000",
        "fee": "$50",
        "tuition": "$1,150/credit hour",
        "desc": "Post-doctoral and graduate degree preparing licensed psychologists for prescriptive authority (RxP), covering neurobiology, neuropharmacology, biochemistry, and clinical drug interactions.",
        "requirements": {"gpa": "Doctoral degree in psychology with active professional license", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Statement of clinical psychopharmacology intent", "references": "Two professional peer references"},
        "source": "https://www.thechicagoschool.edu/programs/ms-clinical-psychopharmacology/"
      },
      {
        "title": "Doctor of Osteopathic Medicine (D.O.) - Proposed Illinois COM",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Inaugural Medical Class Scholarships up to $20,000/year",
        "fee": "$80",
        "tuition": "$58,500/year",
        "desc": "Innovative medical training program integrating osteopathic manipulative medicine (OMM), psychiatric-integrated primary care, and community healthcare clinic rotations across Illinois.",
        "requirements": {"gpa": "Undergraduate science GPA 3.3+; competitive MCAT; AACOMAS application", "ielts": "TOEFL exempt for US degrees", "gre": "MCAT required", "papers": "AACOMAS personal statement", "references": "Pre-med committee letter or three faculty letters"},
        "source": "https://www.thechicagoschool.edu/illinois-college-of-osteopathic-medicine/"
      },
      {
        "title": "Chicago Center for Multicultural Mental Health Research Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$5,000 summer research stipend and urban community mental health center placement",
        "fee": "$0",
        "tuition": "Supported through The Chicago School Community Partnership Endowment",
        "desc": "Practitioner research fellowship examining cultural adaptations of evidence-based psychological interventions, immigrant mental health barriers, and trauma-informed care in urban clinic settings.",
        "requirements": {"gpa": "Enrolled Psy.D. or Ph.D. student with 3.5+ GPA", "ielts": "TOEFL 85+", "gre": "Exempt", "papers": "Multicultural mental health research proposal", "references": "Two psychology faculty letters"},
        "source": "https://www.thechicagoschool.edu/research/fellowships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Michele Nealon",
        "role": "President & Clinical Psychologist",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Michele Nealon is a licensed clinical psychologist and president of The Chicago School, an outspoken national advocate for healthcare parity, mental health destigmatization, and interprofessional clinical education."
      },
      {
        "name": "Dr. Michael Horowitz",
        "role": "Founding President Emeritus, TCS Education System",
        "department": "Department of Clinical Psychology",
        "subject": "social-sciences",
        "bio": "Dr. Michael Horowitz is a clinical psychologist who spearheaded the development of the TCS Education System, pioneering university community healthcare clinics and urban psychological services."
      },
      {
        "name": "Dr. Ted B. Koval",
        "role": "Chair & Professor of Applied Behavior Analysis",
        "department": "Department of Applied Behavior Analysis",
        "subject": "social-sciences",
        "bio": "Dr. Koval is a Board Certified Behavior Analyst-Doctoral (BCBA-D) who researches early intensive behavioral interventions for neurodevelopmental disorders and single-case experimental designs."
      }
    ]
  },

  # 27. The Citadel, the Military College of South Carolina (Row 1000)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The Citadel, the Military College of South Carolina",
    "shortName": "The Citadel",
    "slug": "the-citadel-the-military-college-of-south-carolina",
    "location": "Charleston, South Carolina, United States",
    "website": "https://www.citadel.edu",
    "sourceRow": 1000,
    "stats": {"established": "1842", "students": "3,700+", "international": "2%", "faculty": "280+"},
    "heroSummary": "The Citadel, the Military College of South Carolina, is a historic landmark institution located in Charleston, South Carolina. Renowned for its South Carolina Corps of Cadets and the civilian Citadel Graduate College, The Citadel has been ranked the #1 Public College in the South by U.S. News & World Report for over 13 consecutive years, acclaimed for engineering, cybersecurity, and principled leadership.",
    "academicOverview": "The Citadel comprises five schools: the School of Engineering, the Tommy & Victoria Baker School of Business, the Swain Family School of Science and Mathematics, the School of Humanities and Social Sciences, and the Zucker Family School of Education. Its Department of Cyber and Computer Sciences is designated a National Center of Academic Excellence in Cyber Defense.",
    "researchAdmissions": "Corps of Cadets undergraduate admissions require high school graduation, physical readiness standards, minimum GPA of 2.50, and leadership review. Citadel Graduate College (civilian evening/online) requires an accredited bachelor's degree with a 3.0+ GPA, resume, letters of recommendation, and department-specific materials.",
    "opps": [
      {
        "title": "Bachelor of Science in Civil Engineering - Coastal & Structural Infrastructure",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Citadel Corps of Cadets ROTC Scholarships and Engineering Grants up to $16,000/year",
        "fee": "$40",
        "tuition": "$13,200/year (SC cadet), $36,400/year (non-resident cadet)",
        "desc": "Historic ABET-accredited civil engineering program emphasizing coastal storm protection structures, seismic foundation design, structural steel mechanics, and surveying.",
        "requirements": {"gpa": "High school GPA 3.2+ with physics and calculus readiness; cadet physical standards", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Citadel leadership essay", "references": "Two academic recommendations"},
        "source": "https://www.citadel.edu/civil-engineering/"
      },
      {
        "title": "Master of Science in Computer and Information Sciences - Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "DoD Cyber Scholarship Program and Citadel Graduate Assistantships up to $10,000",
        "fee": "$40",
        "tuition": "$620/credit hour",
        "desc": "NSA/DHS-designated program joint with College of Charleston covering penetration testing, network forensics, secure hardware systems, and incident response architecture.",
        "requirements": {"gpa": "Bachelor's in computer science, STEM, or related field with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Cybersecurity career statement", "references": "Two professional/academic recommendations"},
        "source": "https://www.citadel.edu/cyber-and-computer-sciences/master-of-science/"
      },
      {
        "title": "Bachelor of Science in Mechanical Engineering - Aeronautical Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Citadel Engineering Foundation Scholarships up to $10,000",
        "fee": "$40",
        "tuition": "$13,200/year (SC cadet), $36,400/year (non-resident cadet)",
        "desc": "Hands-on engineering degree focusing on thermodynamic systems, flight propulsion, robotics, additive manufacturing, and computer-aided finite element design.",
        "requirements": {"gpa": "High school GPA 3.2+; cadet physical qualification", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Personal essay", "references": "One math/science teacher reference"},
        "source": "https://www.citadel.edu/mechanical-engineering/"
      },
      {
        "title": "Master of Arts in Military History",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Mark W. Clark Military History Fellowships up to $5,000",
        "fee": "$40",
        "tuition": "$620/credit hour",
        "desc": "Nationally acclaimed online and on-campus master's degree exploring grand strategy, maritime naval warfare history, operational doctrine, and insurgency dynamics.",
        "requirements": {"gpa": "Baccalaureate degree with 3.0+ GPA in history, political science, or related humanities", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Historical analysis writing sample", "references": "Two academic recommendations"},
        "source": "https://www.citadel.edu/history/master-of-arts-in-military-history/"
      },
      {
        "title": "Bachelor of Science in Biology - Pre-Health & Ecology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Swain Family Science Grants up to $8,000/year",
        "fee": "$40",
        "tuition": "$13,200/year (SC cadet)",
        "desc": "Rigorous undergraduate biological training utilizing Lowcountry salt marshes and Ashley River estuaries for coastal ecology and molecular biomedical research.",
        "requirements": {"gpa": "High school GPA 3.0+ with biology and chemistry labs", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Career statement", "references": "One counselor recommendation"},
        "source": "https://www.citadel.edu/biology/"
      },
      {
        "title": "Citadel Center for Cyber, Intelligence, and Security Studies Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$5,000 research stipend, cyber-range simulation access, and defense industry security clearance sponsorship pathway",
        "fee": "$0",
        "tuition": "Funded through Department of Defense National Centers of Academic Excellence Grant",
        "desc": "Competitive undergraduate and graduate fellowship conducting vulnerability audits on industrial IoT control systems, maritime port cyber-defenses, and geopolitical cyber warfare threat intelligence.",
        "requirements": {"gpa": "Citadel cadet or graduate student with 3.3+ GPA in computer science or intelligence studies", "ielts": "Exempt", "gre": "Exempt", "papers": "Cyber threat analysis research proposal", "references": "Faculty cyber director recommendation"},
        "source": "https://www.citadel.edu/cyber-center/fellowships/"
      }
    ],
    "researchers": [
      {
        "name": "General Glenn M. Walters (USMC, Ret.)",
        "role": "President & Former Assistant Commandant of the Marine Corps",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "General Glenn M. Walters serves as the 20th president of The Citadel, a retired four-star US Marine Corps general and Citadel alumnus who previously served as the 34th Assistant Commandant of the Marine Corps."
      },
      {
        "name": "Dr. Shankar M. Banik",
        "role": "Professor & Head of Cyber and Computer Sciences",
        "department": "Department of Cyber and Computer Sciences",
        "subject": "computer-science",
        "bio": "Dr. Banik is an internationally recognized computer scientist directing Citadel cyber programs, researching peer-to-peer security, cloud computing resilience, and cyber defense pedagogical architectures."
      },
      {
        "name": "Dr. William J. Davis Jr.",
        "role": "Department Head & Professor of Civil Engineering",
        "department": "Department of Civil, Environmental, and Construction Engineering",
        "subject": "engineering",
        "bio": "Dr. Davis is a professional engineer and leading transportation scholar, researching highway safety metrics, traffic simulation modeling, and coastal evacuation corridor resilience in South Carolina."
      }
    ]
  },

  # 28. The College of New Jersey (Row 1001)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The College of New Jersey",
    "shortName": "TCNJ",
    "slug": "the-college-of-new-jersey",
    "location": "Ewing, New Jersey, United States",
    "website": "https://www.tcnj.edu",
    "sourceRow": 1001,
    "stats": {"established": "1855", "students": "7,600+", "international": "3%", "faculty": "430+"},
    "heroSummary": "The College of New Jersey (TCNJ) is a highly selective public undergraduate-focused institution situated in Ewing Township, New Jersey. Consistently ranked the #1 Public Regional University in the North by U.S. News & World Report, TCNJ is renowned for its undergraduate research culture, exceptional four-year graduation rate, and acclaimed programs in engineering, education, and biology.",
    "academicOverview": "TCNJ comprises seven schools: Science, Engineering, the Arts and Communication, Business, Education, Humanities and Social Sciences, and Nursing and Health Sciences. Featuring modern laboratories in the STEM Complex and Armstrong Hall, TCNJ pairs students directly with faculty on competitive NSF-, NIH-, and state-funded research initiatives.",
    "researchAdmissions": "Undergraduate admissions are highly selective (average admitted GPA 3.65+; test-optional). Evaluation is holistic, assessing high school honors/AP coursework, extracurricular leadership, personal statement, and letters of recommendation. Specialized programs (e.g. 7-year accelerated medical BS/MD with Rutgers NJMS) require competitive standardized tests and separate interview rounds.",
    "opps": [
      {
        "title": "Bachelor of Science in Biomedical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "TCNJ Merit Scholarships up to $14,000/year",
        "fee": "$75",
        "tuition": "$17,800/year (in-state), $30,200/year (out-of-state)",
        "desc": "ABET-accredited engineering curriculum featuring hands-on biomechanics testing, biomaterials synthesis, neural engineering, and medical device design capstone projects.",
        "requirements": {"gpa": "High school GPA 3.5+ with AP calculus and physics/chemistry", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application essay and TCNJ engineering supplement", "references": "Two teacher recommendations"},
        "source": "https://biomedical.tcnj.edu/"
      },
      {
        "title": "Bachelor of Science in Computer Science - Software Theory & Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "School of Science Honors Scholarships up to $12,000/year",
        "fee": "$75",
        "tuition": "$17,800/year (in-state), $30,200/year (out-of-state)",
        "desc": "Rigorous undergraduate program in algorithms, database design, computer networks, machine learning, and human-computer interaction, with direct corporate internship pipelines to metro NY/NJ tech hubs.",
        "requirements": {"gpa": "High school GPA 3.4+ with precalculus or calculus", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Personal statement", "references": "One counselor and one math teacher letter"},
        "source": "https://computerscience.tcnj.edu/"
      },
      {
        "title": "Bachelor of Science in Biology - 7-Year BS/MD Accelerated Medical Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "TCNJ Presidential Honors Grants up to $16,000/year",
        "fee": "$75",
        "tuition": "$17,800/year (in-state)",
        "desc": "Premier dual-degree program in conjunction with Rutgers New Jersey Medical School (NJMS), providing conditional medical school acceptance for elite high school seniors.",
        "requirements": {"gpa": "Top 10% class rank with minimum 3.8 unweighted GPA; competitive SAT (1450+) or ACT (32+)", "ielts": "Exempt for US high schoolers", "gre": "Exempt", "papers": "Accelerated medical track supplemental essays", "references": "Three academic recommendations and interview"},
        "source": "https://biology.tcnj.edu/academics/medical-careers/7-year-bs-md-program/"
      },
      {
        "title": "Master of Public Health (MPH) - Global & Community Health Practice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "School of Nursing & Health Sciences Graduate Grants up to $6,000",
        "fee": "$75",
        "tuition": "$920/credit hour",
        "desc": "Interdisciplinary master's degree exploring epidemiology, environmental health toxicology, health communications, and community-based health disparity interventions.",
        "requirements": {"gpa": "Baccalaureate degree with 3.0+ GPA", "ielts": "TOEFL 80+", "gre": "Not required", "papers": "SOPHAS personal statement", "references": "Two letters of recommendation"},
        "source": "https://publichealth.tcnj.edu/programs/master-of-public-health/"
      },
      {
        "title": "Bachelor of Science in Physics - Astrophysics & Computational Physics",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "mathematics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Armstrong Science Foundation Fellowships up to $10,000/year",
        "fee": "$75",
        "tuition": "$17,800/year (in-state)",
        "desc": "Undergraduate physics curriculum offering direct observational astronomy research using the campus astronomical observatory, computational astrophysics simulations, and quantum mechanics.",
        "requirements": {"gpa": "High school GPA 3.3+ with physics and advanced mathematics", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Scientific purpose essay", "references": "One physics teacher letter"},
        "source": "https://physics.tcnj.edu/"
      },
      {
        "title": "TCNJ Mentored Undergraduate Summer Experience (MUSE) Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "chemistry", "physics"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$4,500 summer student stipend, full on-campus housing, and $1,000 research project supplies grant",
        "fee": "$0",
        "tuition": "Endowed through TCNJ Academic Research Fund",
        "desc": "Flagship 8-week intensive residential summer fellowship conducting faculty-mentored research across molecular biology, nanomaterials chemistry, and computer science.",
        "requirements": {"gpa": "Enrolled TCNJ undergraduate student in good academic standing (3.2+ GPA)", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Faculty-student joint research proposal", "references": "TCNJ faculty mentor recommendation"},
        "source": "https://fscollab.tcnj.edu/muse/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Michael A. Bernstein",
        "role": "President & Professor of History and Economics",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Michael A. Bernstein serves as the 17th president of The College of New Jersey, an economic historian and former provost at Tulane University and Stony Brook University who champions undergraduate research."
      },
      {
        "name": "Dr. Jeffrey M. Osborn",
        "role": "Provost, Vice President for Academic Affairs & Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Osborn is an evolutionary plant biologist and national leader in undergraduate STEM education, researching pollen morphology, floral evolution, and institutional institutionalization of undergraduate research."
      },
      {
        "name": "Dr. Andrea Welker",
        "role": "Dean & Professor of Civil and Environmental Engineering",
        "department": "School of Engineering",
        "subject": "engineering",
        "bio": "Dr. Welker leads the School of Engineering, an authority on geotechnical engineering and green stormwater infrastructure who researches rain garden bioretention and geosynthetics."
      }
    ]
  },

  # 29. The Cooper Union for the Advancement of Science and Art (Row 1002)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The Cooper Union for the Advancement of Science and Art",
    "shortName": "The Cooper Union",
    "slug": "the-cooper-union-for-the-advancement-of-science-and-art",
    "location": "New York, New York, United States",
    "website": "https://www.cooper.edu",
    "sourceRow": 1002,
    "stats": {"established": "1859", "students": "900+", "international": "16%", "faculty": "120+"},
    "heroSummary": "The Cooper Union for the Advancement of Science and Art is an internationally venerated private college located in Manhattan's East Village, New York City. Founded in 1859 by industrialist and philanthropist Peter Cooper under the vision that education should be accessible to all, Cooper Union is acclaimed for the Irwin S. Chanin School of Architecture, the School of Art, and the Albert Nerken School of Engineering.",
    "academicOverview": "Cooper Union comprises three world-renowned professional schools: the Irwin S. Chanin School of Architecture, the School of Art, and the Albert Nerken School of Engineering. Every admitted undergraduate student receives an automatic half-tuition scholarship (currently $22,275 annually), with the institution steadily executing its historic plan to restore 100% full-tuition scholarships for all undergraduate scholars.",
    "researchAdmissions": "Admissions are among the most competitive in the United States. Engineering applicants require outstanding academic records in advanced calculus and physics. Architecture and Art applicants must submit extensive original artistic portfolios and complete the legendary, rigorous Cooper Union Home Studio Test.",
    "opps": [
      {
        "title": "Bachelor of Architecture (B.Arch.) - 5-Year Professional Degree",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "engineering"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Automatic 50% tuition scholarship ($22,275/year) to all admitted students plus full need-based aid",
        "fee": "$75",
        "tuition": "$22,275/year (after automatic 50% scholarship)",
        "desc": "NAAB-accredited world-famous five-year professional architecture degree fostering avant-garde structural design, spatial theory, urban ecology, and architectural fabrication.",
        "requirements": {"gpa": "High school GPA 3.5+; rigorous creative portfolio; mandatory Cooper Union Studio Test", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "Exempt", "papers": "Personal essay and architecture test submissions", "references": "Two teacher recommendations"},
        "source": "https://cooper.edu/architecture/curriculum"
      },
      {
        "title": "Master of Engineering (M.Eng.) - Chemical Engineering & Nanotechnology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Albert Nerken Graduate Fellowships providing full tuition waiver and $24,000 research stipend",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Intensive graduate research program exploring microfluidics, polymeric drug delivery, environmental membrane separations, and electrocatalysis.",
        "requirements": {"gpa": "ABET-accredited BS in chemical engineering or related discipline with 3.3+ GPA", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "GRE quantitative 160+", "papers": "Statement of engineering research", "references": "Three letters of recommendation"},
        "source": "https://cooper.edu/engineering/curriculum/meng"
      },
      {
        "title": "Bachelor of Fine Arts (B.F.A.) - Fine Arts Studio Practice",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Automatic minimum 50% tuition scholarship plus need-based tuition coverage up to 100%",
        "fee": "$75",
        "tuition": "$22,275/year (after automatic 50% scholarship)",
        "desc": "Rigorous fine arts studio curriculum covering painting, sculpture, printmaking, photography, video, and social practice, situated in the heart of New York's art ecosystem.",
        "requirements": {"gpa": "High school diploma with creative merit; comprehensive 15-20 piece artwork portfolio; Cooper Union Hometest", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Personal artist statement", "references": "Two instructor recommendations"},
        "source": "https://cooper.edu/art/curriculum"
      },
      {
        "title": "Bachelor of Science in Electrical Engineering - Machine Learning & Signal Processing",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Automatic half-tuition scholarship ($22,275) plus Innovator Grants up to $10,000",
        "fee": "$75",
        "tuition": "$22,275/year",
        "desc": "ABET-accredited program covering digital signal processing, integrated circuit design, embedded robotics, communication theory, and neural network hardware acceleration.",
        "requirements": {"gpa": "High school GPA 3.7+ with calculus and physics", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "Exempt", "papers": "Common Application personal statement", "references": "Two STEM teacher recommendations"},
        "source": "https://cooper.edu/engineering/curriculum/ee"
      },
      {
        "title": "Bachelor of Science in Civil Engineering - Structural & Urban Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Automatic half-tuition scholarship ($22,275) plus endowed engineering merit grants",
        "fee": "$75",
        "tuition": "$22,275/year",
        "desc": "Intensive civil engineering degree emphasizing high-rise skyscraper structural dynamics, seismic retrofitting, urban infrastructure resilience, and geotechnical mechanics.",
        "requirements": {"gpa": "High school GPA 3.6+ with calculus and physics", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Engineering personal essay", "references": "Two academic recommendations"},
        "source": "https://cooper.edu/engineering/curriculum/ce"
      },
      {
        "title": "Cooper Union Benjamin Menschel Fellowship for Creative and Scientific Inquiry",
        "type": "Fellowship",
        "subject": "arts-design",
        "subjects": ["arts-design", "engineering", "physics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "$5,000 project grant, independent summer travel funding, and gallery exhibition in Cooper Union's 41 Cooper Square Gallery",
        "fee": "$0",
        "tuition": "Endowed through The Menschel Foundation and Cooper Union",
        "desc": "Prestigious interdisciplinary fellowship supporting self-directed creative, architectural, or scientific research projects culminating in a public exhibition and lecture.",
        "requirements": {"gpa": "Enrolled full-time Cooper Union student in architecture, art, or engineering with 3.3+ GPA", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Independent project proposal and travel itinerary", "references": "Two Cooper Union faculty sponsors"},
        "source": "https://cooper.edu/about/fellowships/menschel-fellowship"
      }
    ],
    "researchers": [
      {
        "name": "Laura Sparks",
        "role": "President & Former Executive Director of William Penn Foundation",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Laura Sparks serves as the 13th president of The Cooper Union, a champion of educational equity and financial strategist who constructed the 10-year plan to restore full-tuition scholarships for all undergraduate students."
      },
      {
        "name": "Nader Tehrani",
        "role": "Former Dean & Professor of Architecture",
        "department": "The Irwin S. Chanin School of Architecture",
        "subject": "arts-design",
        "bio": "Nader Tehrani is a world-renowned architect, educator, and founding principal of NADAAA, celebrated for digital fabrication innovations, geometric structural envelopes, and academic architectural pedagogy."
      },
      {
        "name": "Dr. Barry L. Shoop",
        "role": "Dean & Professor of Electrical Engineering, FIEEE",
        "department": "Albert Nerken School of Engineering",
        "subject": "engineering",
        "bio": "Dr. Barry Shoop is a Fellow of IEEE, OSA, and SPIE, a former president of OSA (Optica) and retired US Army Colonel who leads Cooper Union's engineering research in optical computing and neural processing."
      }
    ]
  },

  # 30. The George Washington University (Row 1003)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The George Washington University",
    "shortName": "George Washington",
    "slug": "the-george-washington-university",
    "location": "Washington, District of Columbia, United States",
    "website": "https://www.gwu.edu",
    "sourceRow": 1003,
    "stats": {"established": "1821", "students": "26,000+", "international": "14%", "faculty": "2,800+"},
    "heroSummary": "The George Washington University (GW) is an elite private Carnegie R1 research university located in the heart of Washington, D.C., blocks from the White House, the World Bank, and the State Department. Acclaimed for the Elliott School of International Affairs, GW Law, the Milken Institute School of Public Health, and the School of Engineering and Applied Science, GW generates over $320M in annual research expenditures.",
    "academicOverview": "GW spans three vibrant campuses: Foggy Bottom, Mount Vernon, and the GW Virginia Science and Technology Campus (VSTC). Its Science and Engineering Hall features a three-story high-bay structural testing laboratory, nanofabrication cleanrooms, and high-performance computing clusters that support pioneering research with NASA, NIH, NSF, and national laboratories.",
    "researchAdmissions": "Undergraduate admissions evaluate high school curriculum rigor, GPA, personal essays, and recommendations on a test-optional basis. Graduate and doctoral programs require an accredited bachelor's degree with a 3.0+ GPA, program-specific GRE/GMAT/MCAT scores (where mandated), professional writing samples, and academic letters of recommendation.",
    "opps": [
      {
        "title": "Master of Arts in International Affairs - Security Policy & Global Health",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Elliott School Dean's Merit Fellowships up to full tuition remission plus $18,000 living stipend",
        "fee": "$80",
        "tuition": "$1,995/credit hour",
        "desc": "Ranked among the top international affairs programs in the world, preparing diplomats, defense analysts, and multilateral executives through policy capstones in downtown Washington D.C.",
        "requirements": {"gpa": "Baccalaureate degree with 3.3+ GPA; strong background in history, economics, or political science", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "GRE optional", "papers": "Statement of purpose in international affairs and policy writing sample", "references": "Three letters of recommendation"},
        "source": "https://elliott.gwu.edu/academics/graduate-programs/master-arts-international-affairs"
      },
      {
        "title": "Ph.D. in Biomedical Engineering - Nanomedicine & Neural Interfaces",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "SEAS Doctoral Research Fellowships covering 100% tuition plus $34,000 annual research stipend",
        "fee": "$80",
        "tuition": "Covered by fellowship",
        "desc": "State-of-the-art doctoral training in the Science and Engineering Hall investigating cardiac optogenetics, microfluidic lab-on-a-chip diagnostics, and biomimetic neural tissue engineering.",
        "requirements": {"gpa": "BS or MS in engineering, physics, or biophysics with 3.4+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE quantitative 160+", "papers": "Research statement and CV", "references": "Three engineering recommendations"},
        "source": "https://www.seas.gwu.edu/biomedical-engineering-phd"
      },
      {
        "title": "Master of Public Health (MPH) in Global Environmental Health",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Milken Institute Dean's Scholarships up to $20,000",
        "fee": "$145",
        "tuition": "$1,920/credit hour",
        "desc": "CEPH-accredited program at the Milken Institute School of Public Health exploring global climate change health adaptation, environmental toxicology, occupational safety, and air quality governance.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA and college biology/chemistry; SOPHAS application", "ielts": "TOEFL 100+ or IELTS 7.0", "gre": "Not required", "papers": "SOPHAS personal statement", "references": "Three academic/professional recommendations"},
        "source": "https://publichealth.gwu.edu/academics/graduate/global-environmental-health-mph"
      },
      {
        "title": "Ph.D. in Computer Science - Cybersecurity & High-Assurance Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research and Teaching Assistantships covering tuition plus $34,000 stipend",
        "fee": "$80",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research program specializing in trustworthy AI, cryptographic protocols, cloud security, automated software verification, and privacy-preserving data systems.",
        "requirements": {"gpa": "BS or MS in computer science, mathematics, or computer engineering with 3.3+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE scores recommended", "papers": "Statement of purpose in computer science", "references": "Three letters of recommendation"},
        "source": "https://www.seas.gwu.edu/computer-science-phd"
      },
      {
        "title": "Juris Doctor (J.D.) - Intellectual Property and Technology Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "GW Law Merit Scholarships up to full three-year tuition coverage",
        "fee": "$80",
        "tuition": "$69,800/year",
        "desc": "Top-tier law program in Washington D.C. providing unmatched proximity to the US Patent and Trademark Office, Court of Appeals for the Federal Circuit, and federal regulatory agencies.",
        "requirements": {"gpa": "Undergraduate GPA 3.7+; competitive LSAT score (166+ median); LSAC CAS report", "ielts": "Exempt for US degree holders", "gre": "LSAT or GRE accepted", "papers": "Personal statement and legal resume", "references": "Two academic recommendations"},
        "source": "https://www.law.gwu.edu/jd-admissions"
      },
      {
        "title": "GW Space Policy Institute Graduate Research Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$8,000 research stipend, direct NASA/DoD policymaker access, and international astronautical congress travel grant",
        "fee": "$0",
        "tuition": "Endowed through the Space Policy Institute and Elliott School of International Affairs",
        "desc": "Elite policy fellowship researching lunar resource governance under the Artemis Accords, commercial orbital space station regulation, space situational awareness, and orbital debris mitigation.",
        "requirements": {"gpa": "Enrolled graduate student in international affairs, public policy, or aerospace engineering with 3.5+ GPA", "ielts": "TOEFL 100+", "gre": "Exempt", "papers": "Space policy research proposal", "references": "Two faculty recommendation letters"},
        "source": "https://spi.elliott.gwu.edu/academics/fellowships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Ellen M. Granberg",
        "role": "President & Sociologist",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Ellen Granberg serves as the 19th president of The George Washington University, a sociologist who previously served as provost at Rochester Institute of Technology, leading GW's clinical medical expansion and research investments."
      },
      {
        "name": "Dr. Scott Pace",
        "role": "Director of Space Policy Institute & Professor of the Practice",
        "department": "Elliott School of International Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Scott Pace is a former Executive Secretary of the US National Space Council and an internationally preeminent authority on civilian and commercial space policy and international space treaties."
      },
      {
        "name": "Dr. Mona Zaghloul",
        "role": "Professor of Electrical and Computer Engineering & IEEE Life Fellow",
        "department": "Department of Electrical and Computer Engineering",
        "subject": "engineering",
        "bio": "Dr. Zaghloul is an IEEE Life Fellow specializing in micro-electro-mechanical systems (MEMS), chemical and biological sensors, integrated circuit design, and neural network hardware implementations."
      }
    ]
  }
]
