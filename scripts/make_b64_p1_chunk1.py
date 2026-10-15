# scripts/make_b64_p1_chunk1.py
# Batch 64 Part 1 Chunk 1: Universities 1 to 8

chunk1 = [
  # 1. Pacific University (Row 905)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Pacific University",
    "shortName": "Pacific University",
    "slug": "pacific-university-forest-grove",
    "location": "Forest Grove, Oregon, United States",
    "website": "https://www.pacificu.edu",
    "sourceRow": 905,
    "stats": {"established": "1849", "students": "3,800+", "international": "4%", "faculty": "340+"},
    "heroSummary": "Pacific University is a top-ranked private comprehensive university nestled in Forest Grove and Hillsboro, Oregon. Globally recognized for healthcare professions, the College of Optometry, clinical psychology, education, and environmental sciences.",
    "academicOverview": "Pacific University features the College of Optometry (one of only 23 in North America), the Hillsboro Health Professions Campus, and the historic Marsh Hall in Forest Grove. Its clinical health clinics serve thousands of low-income patients throughout Washington County and the Pacific Northwest.",
    "researchAdmissions": "Undergraduate admissions are test-optional, reviewing high school academic performance (average 3.6 GPA), essays, and extracurricular involvement. Professional programs (Optometry, Occupational Therapy, Physical Therapy) require specialized centralized applications (OptomCAS, PTCAS), clinical shadowing, and prerequisite science coursework.",
    "opps": [
      {
        "title": "Doctor of Optometry (OD)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Optometry Dean's Scholarships up to $15,000/year",
        "fee": "$75",
        "tuition": "$44,800/year",
        "desc": "Premier four-year clinical optometry doctorate offering extensive training in ocular disease management, contact lenses, neuro-optometric rehabilitation, and surgical co-management in Pacific EyeClinics.",
        "requirements": {"gpa": "3.0 science GPA in 90+ semester credits including organic chemistry, biochemistry, and physics", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "OAT or GRE scores required", "papers": "OptomCAS personal essay", "references": "Three letters of recommendation (one practicing optometrist)"},
        "source": "https://www.pacificu.edu/optometry"
      },
      {
        "title": "Doctor of Physical Therapy (DPT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Physical Therapy Endowed Diversity Awards up to $10,000",
        "fee": "$75",
        "tuition": "$38,400/year",
        "desc": "CAPTE-accredited 33-month clinical curriculum focusing on musculoskeletal diagnostics, neurological rehabilitation, pediatric PT, and interprofessional clinical team management.",
        "requirements": {"gpa": "3.0 cumulative and prerequisite science GPA, 100+ observation hours", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE scores required", "papers": "PTCAS essay and personal statement", "references": "Three clinical recommendations"},
        "source": "https://www.pacificu.edu/physical-therapy"
      },
      {
        "title": "Ph.D. in Clinical Psychology (School of Graduate Psychology)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "Graduate research assistantships providing partial tuition waivers and clinical stipends",
        "fee": "$60",
        "tuition": "$1,120/credit hour",
        "desc": "APA-accredited scientist-practitioner doctoral program preparing clinical neuropsychologists, child psychologists, and health psychologists with supervised clinical rotations across Portland hospitals.",
        "requirements": {"gpa": "3.2 GPA in undergraduate psychology or behavioral sciences", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "General GRE required", "papers": "Statement of clinical and research interests", "references": "Three academic/clinical references"},
        "source": "https://www.pacificu.edu/graduate-psychology/programs/phd-clinical-psychology"
      },
      {
        "title": "Bachelor of Science in Environmental Science (Sustainability Track)",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Pacific Presidential Academic Scholarships up to $22,000/year",
        "fee": "$0",
        "tuition": "$51,800/year",
        "desc": "Fieldwork-intensive bachelor's degree investigating Pacific Coast rainforest ecosystems, watershed management in the Tualatin River basin, and salmon conservation biology.",
        "requirements": {"gpa": "3.0 high school GPA with biology and algebra", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Personal essay", "references": "One counselor recommendation"},
        "source": "https://www.pacificu.edu/academics/programs/environmental-science"
      },
      {
        "title": "Master of Fine Arts (MFA) in Writing (Low-Residency)",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "MFA Program Merit Grants and Writers-in-Residence Fellowships up to $6,000",
        "fee": "$50",
        "tuition": "$19,500/year",
        "desc": "Nationally acclaimed low-residency creative writing MFA offering concentrations in fiction, poetry, and creative nonfiction, guided by award-winning faculty authors.",
        "requirements": {"gpa": "Accredited bachelor's degree", "ielts": "TOEFL 85+ or IELTS 7.0", "gre": "Exempt", "papers": "Writing sample (20-30 pages prose or 10-15 poems)", "references": "Three letters of recommendation"},
        "source": "https://www.pacificu.edu/mfa"
      },
      {
        "title": "Pacific EyeClinics Vision Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "physics"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$5,000 research stipend and optical laboratory supply grant",
        "fee": "$0",
        "tuition": "Covered by College of Optometry Research Fund",
        "desc": "Postdoctoral or graduate research fellowship investigating dry eye syndrome biomarkers, keratoconus corneal topography, and pediatric myopia control therapies.",
        "requirements": {"gpa": "OD, MS, or PhD candidate in vision science or biomedical sciences", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Exempt", "papers": "Vision science research proposal", "references": "Two optometric faculty letters"},
        "source": "https://www.pacificu.edu/optometry/research/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Fraser Horn",
        "role": "Dean & Professor of Optometry",
        "department": "College of Optometry",
        "subject": "biology",
        "bio": "Dr. Horn is an acclaimed authority on sports vision, ocular disease, and traumatic brain injury visual rehabilitation, serving as past chair of the American Optometric Association Sports Vision Section."
      },
      {
        "name": "Dr. Christiane Brems",
        "role": "Professor of Clinical Psychology",
        "department": "School of Graduate Psychology",
        "subject": "social-sciences",
        "bio": "Dr. Brems is an ABPP-board-certified clinical psychologist specializing in integrative healthcare, trauma treatment, and mindfulness-based interventions in rural health clinics."
      },
      {
        "name": "Dr. Paige Baugher",
        "role": "Associate Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Baugher investigates cellular signal transduction, macrophage activation in autoimmune pathologies, and molecular mechanisms of programmed cancer cell apoptosis."
      }
    ]
  },

  # 2. Park University at Malmstrom AFB (Row 906)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Park University at Malmstrom AFB",
    "shortName": "Park University Malmstrom",
    "slug": "park-university-malmstrom-afb",
    "location": "Great Falls, Montana, United States",
    "website": "https://www.park.edu",
    "sourceRow": 906,
    "stats": {"established": "1875", "students": "7,500+", "international": "6%", "faculty": "480+"},
    "heroSummary": "Park University is a pioneering non-profit private university founded in 1875, with campus centers nationwide including its established military installation center at Malmstrom Air Force Base in Great Falls, Montana. Noted for military logistics, cybersecurity, criminal justice, and public administration.",
    "academicOverview": "Operating through the College of Management and the College of Liberal Arts and Sciences, Park's Malmstrom AFB campus provides accelerated degree pathways for military servicemembers, veterans, and civilian aerospace contractors. It features modern hybrid computer classrooms and defense aerospace partnerships.",
    "researchAdmissions": "Park University offers rolling, open-friendly admissions for undergraduate candidates. Military applicants receive military transcript evaluation (JST/CCAF) and tuition assistance alignment. Graduate applicants require an accredited bachelor's with a 2.75 GPA.",
    "opps": [
      {
        "title": "Bachelor of Science in Information and Computer Science (Cybersecurity)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Park Military Service Scholarships and DoD tuition assistance vouchers",
        "fee": "$35",
        "tuition": "$13,600/year ($450/credit; $250/credit for military)",
        "desc": "Hands-on instruction in defensive network administration, ethical hacking, cryptographic protocols, digital forensics, and cloud infrastructure security.",
        "requirements": {"gpa": "High school diploma or 2.0 college transfer GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One character reference"},
        "source": "https://www.park.edu/academics/explore-majors-programs/information-computer-science-degree"
      },
      {
        "title": "Master of Business Administration (MBA) in Project Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Graduate Academic Excellence Grants up to $3,000",
        "fee": "$35",
        "tuition": "$630/credit hour ($20,790 total program)",
        "desc": "ACBSP-accredited curriculum covering corporate strategy, risk mitigation, PMI-aligned project scheduling, supply chain dynamics, and defense procurement operations.",
        "requirements": {"gpa": "2.75 undergraduate GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GMAT/GRE optional", "papers": "Resume and goals essay", "references": "Two professional references"},
        "source": "https://www.park.edu/academics/explore-majors-programs/master-business-administration"
      },
      {
        "title": "Bachelor of Public Administration (BPA) in Homeland Security",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "First Responder and Military Dependent Grants up to $2,500/year",
        "fee": "$35",
        "tuition": "$13,600/year ($450/credit; $250/credit for military)",
        "desc": "Interdisciplinary study in emergency disaster management, critical infrastructure security, municipal administrative law, and multi-agency crisis communications.",
        "requirements": {"gpa": "2.0 GPA with high school completion or GED", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.park.edu/academics/explore-majors-programs/public-administration-degree"
      },
      {
        "title": "Bachelor of Science in Logistics and Supply Chain Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "engineering"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Global Logistics Academic Awards up to $3,500/year",
        "fee": "$35",
        "tuition": "$13,600/year ($450/credit; $250/credit for military)",
        "desc": "Training students in defense depot logistics, multimodal freight management, inventory simulation, and global trade compliance.",
        "requirements": {"gpa": "2.0 GPA with high school algebra", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Career goals essay", "references": "One reference"},
        "source": "https://www.park.edu/academics/explore-majors-programs/supply-chain-logistics-degree"
      },
      {
        "title": "Master of Healthcare Administration (MHA)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Healthcare Leadership Fellowships up to $4,000",
        "fee": "$35",
        "tuition": "$630/credit hour ($22,680 total program)",
        "desc": "Designed to prepare clinical administrators in health informatics, healthcare finance, bioethics, regulatory compliance, and hospital quality management.",
        "requirements": {"gpa": "2.75 undergraduate GPA with health or business background", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Statement of healthcare goals", "references": "Two professional letters"},
        "source": "https://www.park.edu/academics/explore-majors-programs/master-healthcare-administration"
      },
      {
        "title": "Defense Aerospace Logistics Applied Research Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$4,000 applied research stipend and enterprise software access",
        "fee": "$0",
        "tuition": "Covered by Park University Military Research Office",
        "desc": "Applied student fellowship examining cold-weather aerospace supply chain resilience, intercontinental missile depot maintenance, and predictive parts inventory modeling.",
        "requirements": {"gpa": "3.0 GPA in logistics, computer science, or management", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Research statement (2 pages)", "references": "Two faculty letters"},
        "source": "https://www.park.edu/research/military-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Shane B. Smeed",
        "role": "President & Professor of Higher Education Administration",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Smeed directs Park University's nationwide network of campus centers, focusing on adult learner retention, military educational partnerships, and institutional strategic planning."
      },
      {
        "name": "Dr. Kathy Lofflin",
        "role": "Associate Dean of the College of Management",
        "department": "School of Business",
        "subject": "social-sciences",
        "bio": "Dr. Lofflin researches international human resource management, project leadership performance in hybrid military environments, and corporate ethics pedagogy."
      },
      {
        "name": "Dr. Alex Silvius",
        "role": "Associate Professor of Physics and Computer Science",
        "department": "Department of Natural and Applied Sciences",
        "subject": "physics",
        "bio": "Dr. Silvius specializes in computational physics, computational quantum chemistry simulations, and machine learning models for materials science."
      }
    ]
  },

  # 3. Penn State Beaver (Row 907)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Penn State Beaver",
    "shortName": "Penn State Beaver",
    "slug": "penn-state-beaver-monaca",
    "location": "Monaca, Pennsylvania, United States",
    "website": "https://beaver.psu.edu",
    "sourceRow": 907,
    "stats": {"established": "1965", "students": "650+", "international": "5%", "faculty": "65+"},
    "heroSummary": "Penn State Beaver is a student-centered commonwealth campus of the Pennsylvania State University located on 100 wooded acres in Monaca, Pennsylvania, northwest of Pittsburgh. Renowned for engineering, project management, cybersecurity analytics, and seamless Penn State 2+2 transitions.",
    "academicOverview": "Penn State Beaver offers complete four-year baccalaureate degrees in high-demand fields as well as the world-renowned Penn State 2+2 plan (starting at Beaver and completing at University Park or another campus in over 275 majors). It features the Michael Baker Jr. Engineering Building, the Beaver campus police training facility, and advanced laboratory science suites.",
    "researchAdmissions": "Penn State uses a centralized undergraduate admissions application (via MyPennState or Common App). Admissions evaluates high school GPA (average 3.2-3.6), coursework rigor, and optional SAT/ACT scores. Transfer students require a minimum 2.0 GPA for university admission.",
    "opps": [
      {
        "title": "Bachelor of Science in Project and Supply Chain Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Penn State Discover Awards and Beaver Campus Merit Grants up to $8,000/year",
        "fee": "$65",
        "tuition": "$14,800/year (PA Resident) / $24,600/year (Non-resident)",
        "desc": "Comprehensive business degree training students in quantitative supply chain analytics, SAP enterprise software, Six Sigma quality control, and procurement logistics in the Pittsburgh industrial corridor.",
        "requirements": {"gpa": "2.8 high school GPA with algebra and trigonometry", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Penn State admissions personal essay", "references": "One counselor recommendation"},
        "source": "https://beaver.psu.edu/academics/degrees/pscm"
      },
      {
        "title": "Bachelor of Science in Cybersecurity Analytics and Operations",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of IST Commonwealth Scholarships up to $5,000/year",
        "fee": "$65",
        "tuition": "$14,800/year (PA Resident) / $24,600/year (Non-resident)",
        "desc": "Rigorous cybersecurity curriculum covering cyber threat intelligence, risk management frameworks, penetration testing, malware defense, and digital forensics.",
        "requirements": {"gpa": "3.0 GPA with high school mathematics", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Admissions essay", "references": "One counselor letter"},
        "source": "https://beaver.psu.edu/academics/degrees/cybersecurity"
      },
      {
        "title": "Bachelor of Science in Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Penn State Academic Excellence Awards up to $6,000/year",
        "fee": "$65",
        "tuition": "$14,800/year (PA Resident) / $24,600/year (Non-resident)",
        "desc": "Pre-health and ecological laboratory curriculum providing undergraduate research access in genetics, molecular cell biology, microbiology, and Ohio River riparian ecology.",
        "requirements": {"gpa": "3.0 GPA with high school chemistry and biology", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Personal essay", "references": "One science teacher letter"},
        "source": "https://beaver.psu.edu/academics/degrees/biology"
      },
      {
        "title": "Bachelor of Science in Criminal Justice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Beaver Alumni Endowed Criminal Justice Awards",
        "fee": "$65",
        "tuition": "$14,800/year (PA Resident) / $24,600/year (Non-resident)",
        "desc": "Examining criminological theory, constitutional criminal procedure, policing ethics, juvenile justice reform, and forensic evidence analysis.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://beaver.psu.edu/academics/degrees/criminal-justice"
      },
      {
        "title": "Penn State 2+2 Engineering Transfer Pathway",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Michael Baker Engineering Scholarships up to $4,500/year",
        "fee": "$65",
        "tuition": "$14,800/year (Beaver campus rate for first two years)",
        "desc": "Start engineering foundations (calculus, physics, computer programming, chemistry) at Beaver with small class sizes before transitioning to University Park for aerospace, mechanical, or chemical engineering.",
        "requirements": {"gpa": "3.2 GPA with advanced high school mathematics and physics", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Engineering interest essay", "references": "One STEM teacher letter"},
        "source": "https://beaver.psu.edu/academics/2plus2"
      },
      {
        "title": "Ohio River Watershed Undergraduate Research Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$3,800 summer research stipend plus laboratory instrumentation funding",
        "fee": "$0",
        "tuition": "Covered by Penn State Undergraduate Research Fund",
        "desc": "Undergraduate research fellowship sampling microplastics, heavy metal industrial effluents, and benthic aquatic macroinvertebrates in Beaver County waterways.",
        "requirements": {"gpa": "3.0 GPA in biology, chemistry, or environmental sciences", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Research proposal and resume", "references": "Two science faculty letters"},
        "source": "https://beaver.psu.edu/research/watershed-fellowship"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Carey McDougall",
        "role": "Chancellor & Chief Academic Officer",
        "department": "Office of the Chancellor",
        "subject": "arts-design",
        "bio": "Dr. McDougall is a sculptor, educator, and academic executive researching civic engagement in public art, environmental sculpture, and community-engaged university learning."
      },
      {
        "name": "Dr. Michael Hay",
        "role": "Associate Professor of Chemistry",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Hay's research focuses on environmental chemistry, wastewater remediation using tailored chelating ligands, and heavy metal speciation in regional watershed sediment."
      },
      {
        "name": "Dr. Kristen Olson",
        "role": "Associate Professor of English",
        "department": "Department of English",
        "subject": "arts-design",
        "bio": "Dr. Olson specializes in early modern literature, visual rhetoric in Renaissance texts, and digital humanities archival preservation methodologies."
      }
    ]
  },

  # 4. PennWest California (Row 908)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "PennWest California",
    "shortName": "PennWest California",
    "slug": "pennwest-california",
    "location": "California, Pennsylvania, United States",
    "website": "https://www.pennwest.edu",
    "sourceRow": 908,
    "stats": {"established": "1852", "students": "6,200+", "international": "3%", "faculty": "310+"},
    "heroSummary": "PennWest California (formerly California University of Pennsylvania) is a prominent campus of Pennsylvania Western University located along the Monongahela River in California, Pennsylvania. Acclaimed for mechatronics engineering technology, exercise science, digital forensics, commercial drone technology, and nursing.",
    "academicOverview": "PennWest California operates the Eberly Science and Technology Center, the Convocation Center, and specialized robotics and mechatronics automation laboratories. It has pioneered online graduate master's degrees in exercise science and wellness for over two decades.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5 recommended) with test-optional application pathways. Graduate programs require an accredited baccalaureate degree with a minimum 2.80 cumulative GPA and program-specific prerequisites.",
    "opps": [
      {
        "title": "Bachelor of Science in Mechatronics Engineering Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "PennWest Vulcan Merit Scholarships up to $6,000/year",
        "fee": "$35",
        "tuition": "$7,716/year (In-state) / $11,574/year (Out-of-state)",
        "desc": "ABET-accredited program integrating mechanical systems, PLC programming, industrial robotic arms, microcontrollers, and fluid power hydraulics in high-tech automation labs.",
        "requirements": {"gpa": "2.75 GPA with college preparatory algebra and physics", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal essay", "references": "One recommendation"},
        "source": "https://www.pennwest.edu/academics/mechatronics-engineering-technology"
      },
      {
        "title": "Master of Science in Exercise Science and Health Promotion",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Graduate assistantships offering 100% tuition coverage plus stipend",
        "fee": "$35",
        "tuition": "$516/credit (In-state) / $774/credit (Out-of-state)",
        "desc": "Nation's leading online graduate exercise science program offering concentrations in sports performance, rehabilitation science, wellness coaching, and tactical strength conditioning.",
        "requirements": {"gpa": "2.8 GPA in exercise science, kinesiology, or health discipline", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Resume and statement of intent", "references": "Two professional references"},
        "source": "https://www.pennwest.edu/academics/exercise-science-health-promotion"
      },
      {
        "title": "Bachelor of Science in Digital Forensics and Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Eberly STEM Innovation Scholarships up to $4,000",
        "fee": "$35",
        "tuition": "$7,716/year (In-state) / $11,574/year (Out-of-state)",
        "desc": "Comprehensive training in EnCase/FTK forensic extraction, hard drive recovery, mobile device forensics, malware triage, and criminal courtroom evidence handling.",
        "requirements": {"gpa": "2.5 GPA with high school mathematics", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of goals", "references": "One counselor recommendation"},
        "source": "https://www.pennwest.edu/academics/digital-forensics"
      },
      {
        "title": "Bachelor of Science in Commercial Drone Technology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Aviation Aerospace Grants up to $3,000/year",
        "fee": "$35",
        "tuition": "$7,716/year (In-state) / $11,574/year (Out-of-state)",
        "desc": "FAA Part 107 certified training covering unmanned aerial systems (UAS) piloting, multispectral sensor integration, thermal survey, and 3D GIS terrain mapping.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal essay", "references": "One character reference"},
        "source": "https://www.pennwest.edu/academics/drone-technology"
      },
      {
        "title": "Master of Science in Clinical Mental Health Counseling",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Mental Health Workforce Expansion Fellowships up to $5,000",
        "fee": "$35",
        "tuition": "$516/credit (In-state) / $774/credit (Out-of-state)",
        "desc": "CACREP-accredited program preparing students for LPC licensure with 700 hours of clinical mental health counseling practicum in southwestern Pennsylvania community agencies.",
        "requirements": {"gpa": "3.0 undergraduate GPA with background in psychology or social work", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Counseling philosophy statement and background clearances", "references": "Three professional references"},
        "source": "https://www.pennwest.edu/academics/clinical-mental-health-counseling"
      },
      {
        "title": "Applied Robotics and Autonomous Systems Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$4,000 research stipend and robotics laboratory workspace",
        "fee": "$0",
        "tuition": "Covered by Eberly Science Endowment",
        "desc": "Applied student fellowship designing robotic machine vision systems, automated guided vehicles (AGVs), and smart conveyor sorting mechanisms in the Mechatronics Lab.",
        "requirements": {"gpa": "3.0 GPA in mechatronics, computer science, or engineering technology", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Robotics project design proposal", "references": "Two engineering faculty letters"},
        "source": "https://www.pennwest.edu/research/robotics-fellowship"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Brenda Fredette",
        "role": "Dean & Professor of Science and Technology",
        "department": "College of Science, Technology and Business",
        "subject": "biology",
        "bio": "Dr. Fredette is a molecular biologist researching cellular signaling mechanisms in developmental embryology and leading STEM workforce alignment initiatives across western Pennsylvania."
      },
      {
        "name": "Dr. Jennifer Mock",
        "role": "Chair & Professor of Exercise Science",
        "department": "Department of Exercise and Sport Science",
        "subject": "biology",
        "bio": "Dr. Mock's research examines neuromuscular adaptations in elite athletes, tactical fitness programming for first responders, and online kinesiology pedagogy."
      },
      {
        "name": "Prof. Jeffrey Sumey",
        "role": "Associate Professor of Mechatronics Engineering Technology",
        "department": "Department of Applied Engineering and Technology",
        "subject": "engineering",
        "bio": "Prof. Sumey specializes in industrial robotics programming, PLC automation systems, and remote telemetry instrumentation for automated manufacturing facilities."
      }
    ]
  },

  # 5. Pepperdine University - DC Campus (Row 909)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Pepperdine University - DC Campus",
    "shortName": "Pepperdine Washington DC",
    "slug": "pepperdine-university-washington-dc",
    "location": "Washington, DC, United States",
    "website": "https://www.pepperdine.edu",
    "sourceRow": 909,
    "stats": {"established": "1937", "students": "10,000+", "international": "11%", "faculty": "920+"},
    "heroSummary": "Pepperdine University is an elite private research university affiliated with the Churches of Christ, maintaining its Washington, DC permanent academic campus in the downtown cultural corridor on Pennsylvania Avenue. Renowned for public policy, international diplomacy, constitutional law, and corporate finance.",
    "academicOverview": "Pepperdine's Washington, DC campus operates as an integral global academic hub hosting the School of Public Policy, the Seaver College DC Academic Internship Program, and the Caruso School of Law Washington Semester. Students complete congressional, think tank, and federal agency fellowships alongside advanced policy seminars.",
    "researchAdmissions": "Undergraduate admission to Pepperdine is competitive and holistic (average high school GPA 3.7). Admission to DC graduate programs through the School of Public Policy or Caruso Law requires an accredited bachelor's, professional recommendations, and analytical writing samples.",
    "opps": [
      {
        "title": "Master of Public Policy (MPP) - Washington DC Track",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "mathematics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of Public Policy Dean's Merit Fellowships covering up to 100% of tuition",
        "fee": "$50",
        "tuition": "$42,600/year",
        "desc": "Rigorous policy curriculum combining quantitative econometrics, constitutional foundations, cost-benefit modeling, and direct federal agency internships on Capitol Hill and K Street.",
        "requirements": {"gpa": "3.0 undergraduate GPA with coursework in economics and statistics", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "Optional", "papers": "Policy writing sample and personal statement", "references": "Three letters of recommendation"},
        "source": "https://publicpolicy.pepperdine.edu/academics/master-public-policy"
      },
      {
        "title": "Juris Doctor (JD) Washington DC Semester Program",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Caruso Law Faculty Scholars Awards up to full tuition",
        "fee": "$0",
        "tuition": "$63,800/year",
        "desc": "Elite legal curriculum pairing rigorous administrative and constitutional law seminars with clinical externships at the Department of Justice, federal appellate courts, and international human rights NGOs.",
        "requirements": {"gpa": "Bachelor's degree with competitive LSAT score (median 164) and high undergraduate GPA (median 3.75)", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "LSAT or GRE required", "papers": "Personal statement and legal resume", "references": "Two academic recommendations"},
        "source": "https://law.pepperdine.edu/experiential-learning/externships/washington-dc"
      },
      {
        "title": "Master of Science in Global Business (Graziadio)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graziadio Business School Merit Endowments up to $15,000",
        "fee": "$60",
        "tuition": "$48,900/year",
        "desc": "AACSB-accredited international commerce curriculum focusing on international trade treaties, multilateral currency risk, multinational marketing, and global economic diplomacy.",
        "requirements": {"gpa": "3.0 GPA in undergraduate bachelor's degree", "ielts": "TOEFL 95+ or IELTS 7.0", "gre": "GMAT/GRE optional", "papers": "Essay and professional resume", "references": "Two professional references"},
        "source": "https://bschool.pepperdine.edu/masters-degree/global-business"
      },
      {
        "title": "Bachelor of Arts in Political Science (DC Internship Semester)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Seaver College Blanche E. Seaver Scholarships up to $25,000/year",
        "fee": "$65",
        "tuition": "$65,990/year",
        "desc": "Immersive undergraduate semester in Washington DC integrating high-level federal internships with seminars in legislative politics, political communication, and national security.",
        "requirements": {"gpa": "3.5+ high school GPA with strong humanities and social science profile", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "Exempt", "papers": "Common Application essay and Pepperdine faith statement", "references": "Two teacher recommendations"},
        "source": "https://seaver.pepperdine.edu/academics/programs/political-science"
      },
      {
        "title": "Master of Dispute Resolution (MDR - Straus Institute)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Straus Institute Conflict Resolution Fellowships up to $10,000",
        "fee": "$0",
        "tuition": "$2,350/credit hour",
        "desc": "Offered by the world's top-ranked Straus Institute for Dispute Resolution, educating international mediators in complex multi-party negotiation, international arbitration, and diplomatic consensus building.",
        "requirements": {"gpa": "3.0 undergraduate or law degree GPA", "ielts": "TOEFL 95+ or IELTS 7.0", "gre": "Exempt", "papers": "Conflict resolution goals statement", "references": "Two professional letters"},
        "source": "https://law.pepperdine.edu/straus/academics/mdr"
      },
      {
        "title": "Capitol Hill & Think Tank Policy Research Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-31",
        "deadlineText": "January 31, 2027",
        "funding": "$6,000 research fellowship stipend and Washington DC residential housing subsidy",
        "fee": "$0",
        "tuition": "Covered by School of Public Policy Endowment",
        "desc": "Elite graduate fellowship conducting empirical policy evaluations on constitutional federalism, regulatory economics, and foreign policy grand strategy in Washington, DC.",
        "requirements": {"gpa": "3.3 GPA in public policy, political science, economics, or law", "ielts": "TOEFL 95+ or IELTS 7.0", "gre": "Exempt", "papers": "Policy research prospectus (3 pages)", "references": "Two faculty letters"},
        "source": "https://publicpolicy.pepperdine.edu/fellowships/dc"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Pete Peterson",
        "role": "Dean & Professor of Public Policy",
        "department": "School of Public Policy",
        "subject": "social-sciences",
        "bio": "Dean Peterson is a leading scholar on public engagement, regional governance, and national political participation, serving on civic leadership boards in Washington and California."
      },
      {
        "name": "Dr. Robert George",
        "role": "Distinguished Visiting Professor & Senior Fellow",
        "department": "School of Public Policy & Caruso Law",
        "subject": "social-sciences",
        "bio": "Acclaimed constitutional scholar, legal philosopher, and former Chair of the US Commission on International Religious Freedom, analyzing natural law and constitutional interpretation."
      },
      {
        "name": "Prof. Sukhsimranjit Singh",
        "role": "Judge Danny Weinstein Managing Director & Professor of Law",
        "department": "Straus Institute for Dispute Resolution",
        "subject": "social-sciences",
        "bio": "Prof. Singh is an internationally recognized mediator and scholar of cross-cultural dispute resolution, having trained judges, diplomats, and business leaders across more than 40 countries."
      }
    ]
  },

  # 6. Peru State College (Row 910)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Peru State College",
    "shortName": "Peru State",
    "slug": "peru-state-college-nebraska",
    "location": "Peru, Nebraska, United States",
    "website": "https://www.peru.edu",
    "sourceRow": 910,
    "stats": {"established": "1867", "students": "1,900+", "international": "2%", "faculty": "110+"},
    "heroSummary": "Peru State College is the historic first higher education institution in Nebraska, established in 1867 on the scenic oak-covered bluffs above the Missouri River in Peru, Nebraska. Known as the 'Campus of a Thousand Oaks,' it is renowned for teacher education, criminal justice, wildlife ecology, and visual arts.",
    "academicOverview": "Peru State features the historic T.J. Majors Hall, the Hoyt Science Hall, and the modern Center for Applied Science and Technology. Surrounded by the Missouri River riparian corridor, it offers extraordinary living laboratories for environmental fieldwork and wildlife management.",
    "researchAdmissions": "Peru State College maintains an accessible admissions policy welcoming high school graduates and transfer students. Freshmen applicants submit official high school transcripts (minimum 2.0 GPA) with test-optional reviews. Graduate programs require an accredited bachelor's degree with a 2.75 GPA.",
    "opps": [
      {
        "title": "Bachelor of Science in Wildlife Ecology and Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Oak Tree Academic Merit Scholarships up to $4,000/year",
        "fee": "$0",
        "tuition": "$5,700/year (In-state) / $5,700/year (One-Rate tuition for all US residents)",
        "desc": "Hands-on ecological curriculum covering wildlife telemetry, waterfowl census, fisheries management, forest silviculture, and habitat restoration along the Missouri River alluvial plain.",
        "requirements": {"gpa": "High school completion with biology and algebra", "ielts": "TOEFL 61+ or IELTS 5.5", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.peru.edu/academics/degrees/wildlife-ecology"
      },
      {
        "title": "Master of Science in Education (MSEd) in Curriculum & Instruction",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Nebraska Teacher Shortage Loan Forgiveness and graduate waivers",
        "fee": "$0",
        "tuition": "$335/credit hour",
        "desc": "Advanced pedagogical curriculum preparing master educators in differentiated instructional design, educational neuroscience, student assessment analytics, and rural school leadership.",
        "requirements": {"gpa": "2.75 undergraduate GPA in education or related field", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Teaching philosophy essay", "references": "Two professional references"},
        "source": "https://www.peru.edu/academics/graduate/msed"
      },
      {
        "title": "Bachelor of Science in Criminal Justice (Law Enforcement Focus)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Bobcat Achievement Awards up to $3,000/year",
        "fee": "$0",
        "tuition": "$5,700/year (One-Rate tuition)",
        "desc": "Instruction in police operational tactics, juvenile diversion models, criminal investigative protocols, constitutional law, and corrections management.",
        "requirements": {"gpa": "2.0 high school GPA", "ielts": "TOEFL 61+ or IELTS 5.5", "gre": "Exempt", "papers": "Career interest essay", "references": "One reference"},
        "source": "https://www.peru.edu/academics/degrees/criminal-justice"
      },
      {
        "title": "Bachelor of Science in Computer and Information Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "STEM Workforce Scholarships up to $3,500/year",
        "fee": "$0",
        "tuition": "$5,700/year (One-Rate tuition)",
        "desc": "Training in database design, networking architectures, modern object-oriented programming (Python/Java), cloud technologies, and web application engineering.",
        "requirements": {"gpa": "2.0 GPA with high school mathematics", "ielts": "TOEFL 61+ or IELTS 5.5", "gre": "Exempt", "papers": "Personal statement", "references": "One counselor recommendation"},
        "source": "https://www.peru.edu/academics/degrees/computer-information-systems"
      },
      {
        "title": "Bachelor of Fine Arts (BFA) in Visual Arts",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Fine Arts Talent Grants up to $2,500/year",
        "fee": "$0",
        "tuition": "$5,700/year (One-Rate tuition)",
        "desc": "Studio-based instruction in ceramics, printmaking, digital graphic design, oil painting, and gallery exhibition curation in the Peru State Art Gallery.",
        "requirements": {"gpa": "High school diploma and visual portfolio review (10 works)", "ielts": "TOEFL 61+ or IELTS 5.5", "gre": "Exempt", "papers": "Artist statement", "references": "One art teacher letter"},
        "source": "https://www.peru.edu/academics/degrees/art"
      },
      {
        "title": "Missouri River Riparian Ecology Summer Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$3,500 summer research stipend plus on-campus housing waiver",
        "fee": "$0",
        "tuition": "Covered by Nebraska State College System Research Grant",
        "desc": "Summer field research fellowship studying pallid sturgeon river migration, floodplain wetland macroinvertebrates, and bald eagle roosting habitats along the Nebraska-Iowa border.",
        "requirements": {"gpa": "2.8 GPA in wildlife ecology or biology", "ielts": "TOEFL 61+ or IELTS 5.5", "gre": "Exempt", "papers": "Field research plan", "references": "Two science faculty letters"},
        "source": "https://www.peru.edu/research/riparian-fellowship"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Michael Evans",
        "role": "President & Professor of Communications",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Evans is a folklorist and communications scholar researching indigenous media, community journalism in rural America, and cultural preservation in public folklore."
      },
      {
        "name": "Dr. Richard Clopton",
        "role": "Professor of Natural Science",
        "department": "Department of Natural Sciences",
        "subject": "biology",
        "bio": "Dr. Clopton is an internationally known parasitologist specializing in apicomplexan parasite taxonomy, life cycles of gregarines, and arthropod symbiotic interactions."
      },
      {
        "name": "Dr. Judy Grotrian",
        "role": "Dean & Professor of Business",
        "department": "School of Professional Studies",
        "subject": "social-sciences",
        "bio": "Dr. Grotrian investigates rural entrepreneurship dynamics, experiential business learning pedagogies, and small business financial sustainability across the Great Plains."
      }
    ]
  },

  # 7. Pfeiffer University (Row 911)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Pfeiffer University",
    "shortName": "Pfeiffer University",
    "slug": "pfeiffer-university-misenheimer",
    "location": "Misenheimer, North Carolina, United States",
    "website": "https://www.pfeiffer.edu",
    "sourceRow": 911,
    "stats": {"established": "1885", "students": "1,400+", "international": "3%", "faculty": "130+"},
    "heroSummary": "Pfeiffer University is a private regional university affiliated with the United Methodist Church, with its main campus in Misenheimer, North Carolina, and its modern Center for Health Sciences in downtown Albemarle. Celebrated for physician assistant studies, occupational therapy, nursing, criminal justice, and health administration.",
    "academicOverview": "Pfeiffer features the Center for Health Sciences in Albemarle (housing cutting-edge anatomical simulation suites, cadaver labs, and mock surgical operating theaters), the historic Misenheimer undergraduate campus, and the Charlotte professional center.",
    "researchAdmissions": "Undergraduate admissions review high school GPA (minimum 2.5 recommended) with test-optional application options. Master of Science in Physician Assistant Studies and Master of Science in Occupational Therapy require competitive CASPA/OTCAS centralized applications, prerequisite health sciences GPAs (3.0+), and clinical healthcare hours.",
    "opps": [
      {
        "title": "Master of Science in Physician Assistant Studies (MS-PAS)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-12-01",
        "deadlineText": "December 1, 2026",
        "funding": "Rural Health Workforce Fellowships up to $10,000",
        "fee": "$75",
        "tuition": "$39,500/year",
        "desc": "ARC-PA-accredited 27-month clinical program housed in the Center for Health Sciences, educating patient-centered clinicians for rural primary care, emergency medicine, and surgical subspecialties.",
        "requirements": {"gpa": "3.0 cumulative and science GPA with 500+ patient care hours", "ielts": "TOEFL 85+ or IELTS 6.5", "gre": "GRE or PA-CAT required", "papers": "CASPA essay and personal narrative", "references": "Three clinical recommendations"},
        "source": "https://www.pfeiffer.edu/academics/graduate-programs/physician-assistant-studies"
      },
      {
        "title": "Master of Science in Occupational Therapy (MSOT)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Health Sciences Graduate Grants up to $6,000",
        "fee": "$75",
        "tuition": "$34,800/year",
        "desc": "ACOTE-accredited curriculum preparing occupational therapists in pediatrics, neuro-rehabilitation, geriatric therapy, and adaptive technology in specialized sensory and living labs.",
        "requirements": {"gpa": "3.0 prerequisite GPA in anatomy, physiology, and developmental psychology", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Optional", "papers": "OTCAS personal essay", "references": "Three recommendations (one licensed OT)"},
        "source": "https://www.pfeiffer.edu/academics/graduate-programs/occupational-therapy"
      },
      {
        "title": "Master of Health Administration (MHA)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Pfeiffer Healthcare Executive Scholarships up to $4,500",
        "fee": "$40",
        "tuition": "$725/credit hour ($26,100 total program)",
        "desc": "CAHME-accredited graduate curriculum instructing healthcare managers in hospital financial operations, healthcare quality metrics, healthcare law, and digital health records.",
        "requirements": {"gpa": "2.8 undergraduate GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GMAT/GRE optional", "papers": "Professional resume and statement", "references": "Two professional references"},
        "source": "https://www.pfeiffer.edu/academics/graduate-programs/master-of-health-administration"
      },
      {
        "title": "Bachelor of Science in Nursing (BSN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Falcon Healthcare Endowed Scholarships up to $14,000/year",
        "fee": "$0",
        "tuition": "$33,400/year",
        "desc": "CCNE-accredited pre-licensure BSN program with clinical rotations across Atrium Health Stanly and Novant Health medical centers, utilizing high-fidelity simulation manikins.",
        "requirements": {"gpa": "2.8 GPA in prerequisite anatomy, physiology, and microbiology", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Nursing statement and TEAS examination", "references": "Two recommendations"},
        "source": "https://www.pfeiffer.edu/academics/undergraduate-programs/nursing"
      },
      {
        "title": "Bachelor of Science in Criminal Justice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Presidential Merit Awards up to $16,000 distributed over four years",
        "fee": "$0",
        "tuition": "$33,400/year",
        "desc": "Comprehensive coursework in criminal evidence procedure, cybercrime investigation, criminological theory, corrections ethics, and juvenile delinquency.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal essay", "references": "One counselor recommendation"},
        "source": "https://www.pfeiffer.edu/academics/undergraduate-programs/criminal-justice"
      },
      {
        "title": "Rural Community Health & Telemedicine Research Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$4,000 research stipend funded by regional healthcare endowments",
        "fee": "$0",
        "tuition": "Covered by Pfeiffer Health Sciences Endowment",
        "desc": "Graduate clinical research fellowship evaluating chronic disease telemedicine models, diabetes self-management education, and mobile clinic access in rural North Carolina counties.",
        "requirements": {"gpa": "3.2 GPA in PA studies, occupational therapy, nursing, or MHA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Exempt", "papers": "Health disparities research proposal", "references": "Two clinical faculty letters"},
        "source": "https://www.pfeiffer.edu/research/health-sciences-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Scott Bullard",
        "role": "President & Professor of Religion",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Bullard provides strategic leadership for Pfeiffer University, researching Christian theological ethics, historical liturgies, and faith-integrated liberal arts education."
      },
      {
        "name": "Dr. Dawn Lucas",
        "role": "Dean & Professor of Health Sciences",
        "department": "Division of Applied Health Sciences",
        "subject": "biology",
        "bio": "Dr. Lucas directs Pfeiffer's Center for Health Sciences, researching clinical interprofessional healthcare simulation, rural primary care access, and occupational therapy interventions."
      },
      {
        "name": "Dr. Mark McCallum",
        "role": "Professor of Biology",
        "department": "Department of Natural and Health Sciences",
        "subject": "biology",
        "bio": "Dr. McCallum specializes in developmental biology, amphibian metamorphosis signaling pathways, and ecological biomonitoring of North Carolina Piedmont freshwater habitats."
      }
    ]
  },

  # 8. Pima Medical Institute - Las Vegas (Row 912)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Pima Medical Institute - Las Vegas",
    "shortName": "Pima Medical Las Vegas",
    "slug": "pima-medical-institute-las-vegas",
    "location": "Las Vegas, Nevada, United States",
    "website": "https://pmi.edu",
    "sourceRow": 912,
    "stats": {"established": "1972", "students": "2,100+", "international": "2%", "faculty": "140+"},
    "heroSummary": "Pima Medical Institute is a premier private allied healthcare educational institution founded in 1972, operating an expansive regional health science campus in Las Vegas, Nevada. Renowned for specialized training in radiography, respiratory therapy, veterinary technology, physical therapist assistant, and diagnostic medical sonography.",
    "academicOverview": "Pima Medical Las Vegas features modern medical laboratories equipped with digital radiographic imaging suites, mechanical ventilator training workstations, ultrasound machines, and surgical veterinary suites. Students alternate classroom instruction with intensive clinical externships across major hospital systems in the Las Vegas Valley (UMC, Sunrise Health, St. Rose Dominican).",
    "researchAdmissions": "Admission requires a high school diploma or recognized equivalency. Applicants must take the Wonderlic Scholastic Level Exam (SLE) meeting program-specific score benchmarks, pass an admissions interview, and clear criminal background and drug screening checks for clinical placements.",
    "opps": [
      {
        "title": "Associate of Applied Science in Radiography",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "physics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Pima Medical Career Foundation Scholarships up to $3,000",
        "fee": "$0",
        "tuition": "$38,500/total 2-year program",
        "desc": "JRCERT-accredited radiography program preparing students for ARRT national certification through digital radiographic positioning, radiation safety, image processing, and 1,200+ clinical hospital hours.",
        "requirements": {"gpa": "High school diploma/GED with passing Wonderlic SLE score (19+)", "ielts": "TOEFL 65+ or IELTS 6.0", "gre": "Exempt", "papers": "Admissions interview and health screening", "references": "Two references"},
        "source": "https://pmi.edu/programs/associate/radiography"
      },
      {
        "title": "Associate of Applied Science in Respiratory Therapy",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Pulmonary Health Career Grants up to $2,500",
        "fee": "$0",
        "tuition": "$34,200/total program",
        "desc": "CoARC-accredited degree qualifying graduates for RRT credentialing, covering mechanical ventilation, arterial blood gas analysis, neonatal/pediatric critical care, and cardiopulmonary pharmacology.",
        "requirements": {"gpa": "High school diploma/GED with passing Wonderlic SLE score (18+)", "ielts": "TOEFL 65+ or IELTS 6.0", "gre": "Exempt", "papers": "Respiratory care entrance essay", "references": "Two recommendations"},
        "source": "https://pmi.edu/programs/associate/respiratory-therapy"
      },
      {
        "title": "Associate of Applied Science in Physical Therapist Assistant (PTA)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Allied Health Career Advancement Awards up to $2,500",
        "fee": "$0",
        "tuition": "$35,900/total program",
        "desc": "CAPTE-accredited curriculum training PT assistants in therapeutic exercise, gait training, biomechanical modalities, orthopedic rehabilitation, and neurological recovery protocols.",
        "requirements": {"gpa": "High school completion with passing Wonderlic SLE score (19+)", "ielts": "TOEFL 65+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal interview and clinical readiness attestation", "references": "Two character references"},
        "source": "https://pmi.edu/programs/associate/physical-therapist-assistant"
      },
      {
        "title": "Associate of Applied Science in Veterinary Technician",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Veterinary Technology Foundation Grants up to $2,000",
        "fee": "$0",
        "tuition": "$33,400/total program",
        "desc": "AVMA-accredited training in animal anesthesia, veterinary dental prophylaxis, surgical assistance, clinical hematology, and exotic animal restraint and nursing.",
        "requirements": {"gpa": "High school diploma or GED with SLE score (17+)", "ielts": "TOEFL 65+ or IELTS 6.0", "gre": "Exempt", "papers": "Animal care motivation essay", "references": "One recommendation"},
        "source": "https://pmi.edu/programs/associate/veterinary-technician"
      },
      {
        "title": "Bachelor of Science in Health Care Administration (Online Completion)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Alumni Degree Advancement Tuition Discounts up to $3,000",
        "fee": "$0",
        "tuition": "$17,800/program ($425/credit)",
        "desc": "Accelerated online bachelor's degree designed for allied health associate degree holders, focusing on healthcare finance, health law, clinical team leadership, and quality improvement.",
        "requirements": {"gpa": "Associate degree in allied health discipline with minimum 2.0 GPA", "ielts": "TOEFL 70+ or IELTS 6.0", "gre": "Exempt", "papers": "Professional resume and statement", "references": "One professional reference"},
        "source": "https://pmi.edu/programs/bachelor/health-care-administration"
      },
      {
        "title": "Advanced Clinical Radiography & Modality Externship Fellowship",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "physics"],
        "deadline": "2027-02-28",
        "deadlineText": "February 28, 2027",
        "funding": "$3,200 clinical externship stipend plus ARRT licensing examination voucher",
        "fee": "$0",
        "tuition": "Covered by Pima Healthcare Clinical Partnership Fund",
        "desc": "Clinical fellowship providing advanced diagnostic imaging rotations in computed tomography (CT), fluoroscopy, and pediatric emergency trauma imaging at University Medical Center (UMC) of Southern Nevada.",
        "requirements": {"gpa": "3.5 GPA in radiography coursework and clinical commendations", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Clinical case study proposal", "references": "Two clinical supervisor letters"},
        "source": "https://pmi.edu/externships/radiography-fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Prof. Rebecca McNally",
        "role": "Campus Director & Clinical Operations Lead",
        "department": "Campus Administration",
        "subject": "social-sciences",
        "bio": "Prof. McNally oversees academic accreditation, healthcare industry hospital partnerships, and allied healthcare workforce certification programs in Southern Nevada."
      },
      {
        "name": "Prof. David Vance",
        "role": "Program Director of Radiography",
        "department": "Radiography Division",
        "subject": "biology",
        "bio": "Prof. Vance is an ARRT-certified radiologic technologist with over 20 years of clinical experience in interventional radiology, digital radiation safety, and radiography curriculum accreditation."
      },
      {
        "name": "Prof. Brenda Ricketts",
        "role": "Program Director of Respiratory Therapy",
        "department": "Respiratory Therapy Division",
        "subject": "biology",
        "bio": "Prof. Ricketts is a registered respiratory therapist researching mechanical ventilation weaning protocols, pediatric airway management, and simulation-based clinical healthcare training."
      }
    ]
  }
]

if __name__ == "__main__":
    print(f"Part 1 Chunk 1 loaded: {len(chunk1)} USA universities")
    for u in chunk1:
        print(f" - {u['institution']} ({u['slug']}) - Row {u['sourceRow']}")
