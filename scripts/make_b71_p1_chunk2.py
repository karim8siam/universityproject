# scripts/make_b71_p1_chunk2.py
# Batch 71 Part 1 Chunk 2: Universities 9 to 15
# 9. Western Kentucky University (Row 1213)
# 10. Western Michigan University (Row 1214)
# 11. Western New Mexico University (Row 1216)
# 12. Western Washington University (Row 1217)
# 13. Wichita State University (Row 1219)
# 14. Widener University (Row 1220)
# 15. Willamette University (Row 1221)

chunk2 = [
  # 9. Western Kentucky University (Row 1213)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Western Kentucky University",
    "shortName": "WKU",
    "slug": "western-kentucky-university",
    "location": "Bowling Green, Kentucky, United States",
    "website": "https://www.wku.edu",
    "sourceRow": 1213,
    "stats": {"established": "1906", "students": "16,500+", "international": "4%", "faculty": "920+"},
    "heroSummary": "Western Kentucky University (WKU) is a public comprehensive university founded in 1906, situated on a hill commanding the Barren River valley in Bowling Green, Kentucky. Acclaimed for journalism and photojournalism at the School of Media & Communication, karst hydrogeology and cave science through the Crawford Hydrology Laboratory, mechanical engineering, and applied physics, WKU serves as an essential center of innovation and regional economic development in south-central Kentucky.",
    "academicOverview": "WKU comprises five undergraduate and graduate colleges: the Potter College of Arts & Letters, Gordon Ford College of Business, College of Education and Behavioral Sciences, Ogden College of Science and Engineering, and the College of Health and Human Services. WKU operates the Crawford Hydrology Laboratory and partners with Mammoth Cave National Park.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and coursework with test-optional application pathways. Graduate programs require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, personal statement, two to three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+). Graduate assistantships provide stipends and full or partial tuition waivers.",
    "opps": [
      {
        "title": "Master of Science in Geoscience - Karst Hydrogeology & Cave Environmental Systems",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Crawford Hydrology Lab Graduate Research Assistantships: $12,000/year plus tuition remission",
        "fee": "$65",
        "tuition": "$14,500/year (out-of-state) / $8,900/year (in-state)",
        "desc": "World-renowned geoscience graduate program leveraging Mammoth Cave National Park to study groundwater dye tracing, sinkhole contaminant transport, speleology, and karst watershed protection.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in geology, environmental science, or related physical science",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of research interests, CV, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.wku.edu/earth/graduate/index.php"
      },
      {
        "title": "Master of Science in Engineering Technology Management - Manufacturing & Quality Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Graduate Teaching/Research Assistantships up to $10,000/year",
        "fee": "$65",
        "tuition": "$14,500/year (out-of-state) / $8,900/year (in-state)",
        "desc": "Applied engineering management program focusing on Six Sigma quality analytics, industrial automation robotics, supply chain optimization, and lean manufacturing systems for south-central Kentucky automotive industries.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA in engineering, technology, or STEM discipline",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two professional or academic letters"
        },
        "source": "https://www.wku.edu/seas/etm.php"
      },
      {
        "title": "Bachelor of Arts in Photojournalism - Visual Storytelling & Documentary Photography",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "School of Media Hearst Journalism Endowed Scholarships up to $6,000/year",
        "fee": "$50",
        "tuition": "$21,400/year (out-of-state) / $11,100/year (in-state)",
        "desc": "Nationally celebrated visual journalism program winning numerous national Hearst Journalism championships and Pulitzer Prizes, training photojournalists in digital documentary, lighting, and multimedia reporting.",
        "requirements": {
          "gpa": "2.8+ high school GPA with visual arts or writing interests",
          "ielts": "IELTS 6.0+ or TOEFL 71+",
          "gre": "Not applicable",
          "papers": "Transcripts and personal statement (portfolio optional for scholarships)",
          "references": "Not required"
        },
        "source": "https://www.wku.edu/journalism/photojournalism.php"
      },
      {
        "title": "Master of Science in Homeland Security Sciences - Disaster Mitigation & Chemical Threat Defense",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Applied Physics Institute Research Fellowships up to $11,000/year",
        "fee": "$65",
        "tuition": "$14,500/year",
        "desc": "Specialized defense sciences degree operated with the Applied Physics Institute, examining nuclear and chemical threat detection, radiological sensor networks, and emergency infrastructure resilience.",
        "requirements": {
          "gpa": "3.0+ GPA in physics, chemistry, engineering, or security science",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of professional goals, resume, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.wku.edu/physics/hss.php"
      },
      {
        "title": "Master of Science in Biology - Molecular Toxicology & Microbial Ecology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental Teaching Assistantships: $12,500/year stipend plus full tuition coverage",
        "fee": "$65",
        "tuition": "$0 (With full TA fellowship)",
        "desc": "Hands-on biological sciences master's conducting research in freshwater stream toxicity, microbial antibiotic resistance, endocrine disruptor pharmacology, and subterranean cave fauna adaptation.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in biology or related field",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Research statement, CV, undergraduate transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.wku.edu/biology/graduate/index.php"
      },
      {
        "title": "Master of Business Administration (MBA) - Data Analytics & Strategic Supply Chain",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Gordon Ford College Graduate Assistantships up to $9,000/year",
        "fee": "$65",
        "tuition": "$16,200/year",
        "desc": "AACSB-accredited MBA curriculum delivered by the Gordon Ford College of Business, preparing managers in managerial economics, data-informed supply chains, and enterprise leadership.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GMAT/GRE optional based on experience",
          "papers": "Professional resume, statement of purpose, transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.wku.edu/mba/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Chris Groves",
        "role": "University Distinguished Professor of Hydrogeology and Director of the Crawford Hydrology Laboratory",
        "department": "Department of Earth, Environmental, and Atmospheric Sciences",
        "subject": "environment",
        "bio": "Dr. Chris Groves is an internationally recognized expert in karst hydrology and geochemistry, serving on UNESCO cave and karst programs and investigating global carbon cycle interactions with limestone aquifers."
      },
      {
        "name": "Dr. Cathleen Webb",
        "role": "Associate Dean of the Ogden College of Science and Engineering and Professor of Chemistry",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Cathleen Webb researches environmental chemistry, focusing on heavy metal remediation, arsenic and mercury sorption in aquatic sediments, and drinking water security."
      },
      {
        "name": "Dr. Farhad Ashrafzadeh",
        "role": "Professor of Electrical Engineering",
        "department": "School of Engineering and Applied Sciences",
        "subject": "engineering",
        "bio": "Dr. Farhad Ashrafzadeh conducts research in power electronics, renewable wind and solar energy integration, advanced motor drives, and smart electric vehicle grid charging algorithms."
      }
    ]
  },

  # 10. Western Michigan University (Row 1214)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Western Michigan University",
    "shortName": "WMU",
    "slug": "western-michigan-university",
    "location": "Kalamazoo, Michigan, United States",
    "website": "https://wmich.edu",
    "sourceRow": 1214,
    "stats": {"established": "1903", "students": "17,500+", "international": "10%", "faculty": "1,100+"},
    "heroSummary": "Western Michigan University is a comprehensive public Carnegie R2 doctoral research university founded in 1903 in Kalamazoo, Michigan. Internationally acclaimed for the College of Aviation—one of the largest and most prestigious collegiate flight training and aeronautical science programs in North America—as well as the College of Engineering and Applied Sciences, paper and chemical engineering, and blind rehabilitation, WMU is a vital driver of Michigan's advanced manufacturing and aerospace sectors.",
    "academicOverview": "WMU spans seven degree-granting colleges: the College of Aviation (located in Battle Creek), College of Engineering and Applied Sciences, Haworth College of Business, College of Health and Human Services, College of Arts and Sciences, College of Education and Human Development, and the College of Fine Arts. The university operates the Business Technology and Research (BTR) Park.",
    "researchAdmissions": "Undergraduate admissions evaluate high school academic records with test-optional reviews. Graduate doctoral programs offer Graduate Teaching and Research Assistantships ($18,000–$25,000/year plus full tuition scholarships). Master's and doctoral applicants submit transcripts, statement of purpose, three recommendation letters, and English proficiency (TOEFL 80+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Bachelor of Science in Aviation Flight Science - Commercial Airline & Fleet Management",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "College of Aviation Flight Scholarships and Industry Pathway Grants up to $10,000/year",
        "fee": "$40",
        "tuition": "$20,800/year (out-of-state) / $15,600/year (in-state)",
        "desc": "Aviation accreditation (AABI)-certified flight degree operating a state-of-the-art fleet of Cirrus SR20 aircraft and Level 6 flight simulators at the Battle Creek aviation campus, partnering directly with major global airlines.",
        "requirements": {
          "gpa": "3.0+ high school GPA with strong math and physics background and FAA Class 1 Medical",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not applicable",
          "papers": "Transcripts, aviation motivation essay, FAA medical certificate",
          "references": "Two recommendations"
        },
        "source": "https://wmich.edu/aviation/academics/flight-science"
      },
      {
        "title": "Ph.D. in Mechanical and Aerospace Engineering - Unmanned Aerial Systems & Aerostructures",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Graduate Assistantship: $22,000/year stipend, 100% tuition remission, and health insurance",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "Cutting-edge aerospace doctorate at the Parkview Campus investigating hypersonic aerodynamics, autonomous drone swarm guidance, lightweight composite fatigue, and computational fluid dynamics.",
        "requirements": {
          "gpa": "3.3+ GPA in mechanical, aerospace, or materials engineering",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "Research statement, CV, official transcripts",
          "references": "Three academic references"
        },
        "source": "https://wmich.edu/mechanical-aerospace/academics/phd"
      },
      {
        "title": "Ph.D. in Paper and Chemical Engineering - Sustainable Bio-Based Packaging & Nanocellulose",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Paper Technology Foundation Doctoral Fellowship: $24,000/year stipend and full tuition",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "Unique doctoral program in paper and chemical engineering utilizing pilot-scale papermaking and recycling plants to engineer biodegradable food packaging, nanocellulose barrier films, and printed flexible sensors.",
        "requirements": {
          "gpa": "3.2+ GPA in chemical engineering, chemistry, or polymer science",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://wmich.edu/pchem/academics/phd"
      },
      {
        "title": "Master of Science in Cybersecurity - Embedded Systems & Industrial IoT Defense",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Departmental Teaching Assistantships up to $15,000/year plus tuition support",
        "fee": "$50",
        "tuition": "$19,200/year (out-of-state) / $11,500/year (in-state)",
        "desc": "Advanced cybersecurity curriculum concentrating on hardware security, industrial control SCADA networks, reverse code engineering, and adversarial machine learning defenses.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in computer science or electrical engineering",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "CV, transcripts, statement of research purpose",
          "references": "Two letters of recommendation"
        },
        "source": "https://wmich.edu/cs/academics/graduate/ms-cybersecurity"
      },
      {
        "title": "Ph.D. in Biological Sciences - Cellular Neurobiology & Aquatic Ecology",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Graduate Assistantship: $21,000/year stipend plus full tuition waiver",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "Doctoral research program offering specialized training in neurodegenerative disease modeling, ion channel biophysics, Great Lakes freshwater ecology, and conservation genomics.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in biological sciences or biochemistry",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE not required",
          "papers": "Research statement, CV, transcripts",
          "references": "Three academic references"
        },
        "source": "https://wmich.edu/biology/academics/graduate/phd"
      },
      {
        "title": "Master of Science in Orientation and Mobility for the Blind - Blindness & Low Vision Studies",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Federal Rehabilitation Services Administration (RSA) Long-Term Training Grants",
        "fee": "$50",
        "tuition": "$18,500/year",
        "desc": "Pioneering blindness rehabilitation program recognized as the first and premier graduate orientation and mobility curriculum in the world, preparing specialists in sensory substitution and urban transit navigation.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA from an accredited institution",
          "ielts": "IELTS 7.0+ or TOEFL 85+",
          "gre": "Not required",
          "papers": "Statement of professional goals, CV, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://wmich.edu/visionstudies/academics/mobility"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Tianshu Liu",
        "role": "Professor of Mechanical and Aerospace Engineering",
        "department": "Department of Mechanical and Aerospace Engineering",
        "subject": "engineering",
        "bio": "Dr. Tianshu Liu conducts internationally recognized research in experimental aerodynamics, optical diagnostics, skin-friction measurement, and unsteady flow physics over bio-inspired flapping wings."
      },
      {
        "name": "Dr. Kecheng Li",
        "role": "Professor and Chair of Chemical and Paper Engineering",
        "department": "Department of Chemical and Paper Engineering",
        "subject": "engineering",
        "bio": "Dr. Kecheng Li investigates biomass fractionation, cellulose nanomaterials, sustainable packaging alternatives, and green printed electronics utilizing renewable paper substrates."
      },
      {
        "name": "Dr. John Spitsbergen",
        "role": "Professor and Chair of Biological Sciences",
        "department": "Department of Biological Sciences",
        "subject": "biology",
        "bio": "Dr. John Spitsbergen researches neurotrophic factors, autonomic nerve development, muscular plasticity, and cardiovascular regulation in hypertension and diabetes models."
      }
    ]
  },

  # 11. Western New Mexico University (Row 1216)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Western New Mexico University",
    "shortName": "WNMU",
    "slug": "western-new-mexico-university",
    "location": "Silver City, New Mexico, United States",
    "website": "https://wnmu.edu",
    "sourceRow": 1216,
    "stats": {"established": "1893", "students": "3,400+", "international": "5%", "faculty": "190+"},
    "heroSummary": "Western New Mexico University (WNMU) is an open-access public Hispanic-Serving Institution (HSI) established in 1893, situated atop a hillside in historic Silver City, New Mexico, bordering the 3.3-million-acre Gila National Forest. Celebrated for social work, forestry and wildlife ecology, Southwestern archaeological anthropology, and the WNMU Museum housing the world's largest collection of prehistoric Mimbres pottery, WNMU provides accessible applied learning across the American Southwest.",
    "academicOverview": "WNMU offers undergraduate and graduate degrees through the College of Arts and Sciences, College of Business, College of Education, and School of Social Work. The university operates the Gila Center for Environmental Studies and the historic Fleming Hall museum.",
    "researchAdmissions": "Undergraduate admissions evaluate high school graduation or GED credentials with open, test-optional admissions policies. Graduate master's programs require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, personal statement, two letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.0+). Graduate assistantships provide tuition reductions and stipends.",
    "opps": [
      {
        "title": "Master of Social Work (MSW) - Rural Community Mental Health & Indigenous Advocacy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Behavioral Health Workforce Education and Training (BHWET) HRSA Stipends up to $10,000",
        "fee": "$40",
        "tuition": "$11,200/year (out-of-state) / $5,800/year (in-state)",
        "desc": "CSWE-accredited master of social work degree delivered fully online or hybrid, training clinical practitioners to deliver culturally competent mental healthcare in rural Southwestern and Native American tribal communities.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA (or 3.0+ in last 60 credit hours)",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Personal narrative statement, resume, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://socialwork.wnmu.edu/"
      },
      {
        "title": "Master of Arts in Interdisciplinary Studies (MAIS) - Southwest Archaeology & Mimbres Culture",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "arts-design"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "WNMU Graduate Fellowships and Museum Curatorial Assistantships up to $5,000/year",
        "fee": "$40",
        "tuition": "$10,800/year (out-of-state) / $5,600/year (in-state)",
        "desc": "Interdisciplinary graduate curriculum utilizing the WNMU Museum Mimbres collection and surrounding Gila archaeological sites to examine prehistoric Mogollon culture, rock art conservation, and Southwest ethnohistory.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in anthropology, history, or humanities",
          "ielts": "IELTS 6.0+ or TOEFL 75+",
          "gre": "Not required",
          "papers": "Statement of intent, writing sample, transcripts",
          "references": "Two academic recommendations"
        },
        "source": "https://grad.wnmu.edu/mais/"
      },
      {
        "title": "Bachelor of Science in Forest and Wildlife Ecology - Gila Wilderness Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Western New Mexico STEM Tuition Waiver Scholarships up to $4,000/year",
        "fee": "$30",
        "tuition": "$13,600/year (out-of-state) / $6,200/year (in-state)",
        "desc": "Field-intensive undergraduate ecology program utilizing the adjacent Gila Wilderness—the world's first designated wilderness area—for wildfire ecology field research, Mexican gray wolf tracking, and watershed conservation.",
        "requirements": {
          "gpa": "2.5+ high school GPA with biology and algebra readiness",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcript, application form",
          "references": "Not required"
        },
        "source": "https://naturalsciences.wnmu.edu/forestry/"
      },
      {
        "title": "Master of Business Administration (MBA) - Healthcare & International Business",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Graduate Business Merit Scholarships up to $4,000/year",
        "fee": "$40",
        "tuition": "$10,800/year (out-of-state) / $5,600/year (in-state)",
        "desc": "ACBSP-accredited 36-credit-hour MBA program delivering quantitative leadership training in cross-border commerce, healthcare finance, managerial accounting, and organizational ethics.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA",
          "ielts": "IELTS 6.0+ or TOEFL 75+",
          "gre": "GMAT/GRE not required",
          "papers": "Resume, personal essay, official transcripts",
          "references": "Two recommendations"
        },
        "source": "https://business.wnmu.edu/mba/"
      },
      {
        "title": "Master of Arts in Educational Leadership - Borderland Bilingual Administration",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "New Mexico Teacher Preparation Loan-for-Service Grants",
        "fee": "$40",
        "tuition": "$10,800/year",
        "desc": "CAEP-accredited educational leadership degree preparing principals and administrators to manage multicultural borderland schools, English language learner curricula, and school financial law.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with teaching certification",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of educational philosophy, teaching license, transcripts",
          "references": "Two administrator references"
        },
        "source": "https://education.wnmu.edu/leadership/"
      },
      {
        "title": "Bachelor of Science in Nursing (RN to BSN) - Rural Healthcare Delivery",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "New Mexico Nursing Excellence Scholarships up to $3,500/year",
        "fee": "$30",
        "tuition": "$13,600/year (out-of-state) / $6,200/year (in-state)",
        "desc": "CCNE-accredited nursing program equipping registered nurses with advanced clinical assessment, community health epidemiology, evidence-based nursing informatics, and rural hospital leadership.",
        "requirements": {
          "gpa": "2.5+ associate degree in nursing GPA and active unencumbered RN license",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "RN license verification, transcripts",
          "references": "Not required"
        },
        "source": "https://nursing.wnmu.edu/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Danielle Le Roux",
        "role": "Associate Professor of Natural Sciences",
        "department": "Department of Natural Sciences",
        "subject": "environment",
        "bio": "Dr. Danielle Le Roux researches riparian ecosystem restoration, Southwestern desert plant physiology, soil microbial dynamics, and the impact of severe drought on Gila watershed flora."
      },
      {
        "name": "Dr. Andrew Hernandez",
        "role": "Assistant Professor of Social Work",
        "department": "School of Social Work",
        "subject": "social-sciences",
        "bio": "Dr. Andrew Hernandez investigates rural mental health access disparities, historical trauma among Native American youth, and community-driven behavioral health interventions in the Southwest."
      },
      {
        "name": "Dr. Scott Fritz",
        "role": "Professor of History and Southwest Studies",
        "department": "Department of Social Sciences & Cultural Studies",
        "subject": "social-sciences",
        "bio": "Dr. Scott Fritz conducts archival and oral history research on 19th-century New Mexico mining camps, Apacheria territorial conflicts, and merchant trade networks along the Camino Real."
      }
    ]
  },

  # 12. Western Washington University (Row 1217)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Western Washington University",
    "shortName": "WWU",
    "slug": "western-washington-university",
    "location": "Bellingham, Washington, United States",
    "website": "https://www.wwu.edu",
    "sourceRow": 1217,
    "stats": {"established": "1893", "students": "15,200+", "international": "3%", "faculty": "820+"},
    "heroSummary": "Western Washington University is a top-ranking public comprehensive master's university established in 1893, perched along Bellingham Bay overlooking the Salish Sea and North Cascades in Bellingham, Washington. Celebrated for environmental science and marine biology at the Huxley College of the Environment (now College of the Environment), manufacturing engineering technology at the Vehicle Research Institute (VRI), psychology, and marine science at the Shannon Point Marine Center, WWU is an environmental and clean-tech innovation beacon in the Pacific Northwest.",
    "academicOverview": "WWU encompasses seven colleges: the College of the Environment, College of Science and Engineering, College of Humanities and Social Sciences, College of Business and Economics, Fairhaven College of Interdisciplinary Studies, Woodring College of Education, and the College of Fine and Performing Arts. The university operates the Shannon Point Marine Center in Anacortes, Washington.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, course rigor, and personal statements with test-optional reviews. Graduate master's programs require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three recommendation letters, and English proficiency (TOEFL 86+ or IELTS 7.0+). Graduate Teaching Assistantships (GTA) provide stipends of $16,000–$18,000/year plus tuition waivers.",
    "opps": [
      {
        "title": "Master of Science in Environmental Science - Marine Estuarine & Salish Sea Toxicology",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Shannon Point Marine Center Teaching Assistantships: $16,800/year stipend plus full tuition waiver",
        "fee": "$100",
        "tuition": "$0 (Fully funded TA)",
        "desc": "Premier environmental science master's partnering with Shannon Point Marine Center to investigate ocean acidification in the Salish Sea, microplastic bioaccumulation in marine trophic webs, and salmon habitat restoration.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in environmental science, biology, chemistry, or related STEM",
          "ielts": "IELTS 7.0+ or TOEFL 86+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://cenv.wwu.edu/esci/environmental-science-ms"
      },
      {
        "title": "Master of Science in Computer Science - Distributed Systems & Computer Vision",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Departmental Graduate Teaching Assistantships: $17,500/year stipend plus tuition waiver",
        "fee": "$100",
        "tuition": "$0 (With GTA)",
        "desc": "Rigorous thesis-based computer science master's exploring deep learning object tracking, cloud-native cluster computing, secure wireless communications, and biomedical image classification.",
        "requirements": {
          "gpa": "3.2+ GPA in computer science or related mathematics/engineering field",
          "ielts": "IELTS 7.0+ or TOEFL 86+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, academic CV, transcripts",
          "references": "Three academic recommendations"
        },
        "source": "https://cs.wwu.edu/graduate-program"
      },
      {
        "title": "Bachelor of Science in Manufacturing Engineering - Vehicle Research Institute (VRI)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-01-31",
        "deadlineText": "January 31, 2027",
        "funding": "Engineering Endowed Merit Scholarships and Clean-Tech Grants up to $8,000/year",
        "fee": "$70",
        "tuition": "$26,400/year (out-of-state) / $8,900/year (in-state)",
        "desc": "ABET-accredited engineering program housed in the renowned Vehicle Research Institute (VRI), designing and building solar-electric hybrid vehicles, composite monocoque chassis, and automated robotics.",
        "requirements": {
          "gpa": "3.2+ high school GPA with calculus and physics preparation",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not applicable",
          "papers": "Transcripts, activity log, personal essay",
          "references": "One teacher evaluation"
        },
        "source": "https://engineeringdesign.wwu.edu/vri"
      },
      {
        "title": "Master of Science in Chemistry - Green Catalysis & Nanomaterials Synthesis",
        "type": "Fellowship",
        "subject": "chemistry",
        "subjects": ["chemistry"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Teaching Assistantship: $16,500/year stipend plus 100% tuition coverage",
        "fee": "$100",
        "tuition": "$0 (Fully funded)",
        "desc": "Research-intensive chemistry master's offering advanced training in transition-metal organometallics, quantum dot solar luminescence, solid-state NMR, and green polymer degradation.",
        "requirements": {
          "gpa": "3.0+ GPA in chemistry or biochemistry",
          "ielts": "IELTS 7.0+ or TOEFL 86+",
          "gre": "GRE not required",
          "papers": "Research interests statement, CV, transcripts",
          "references": "Three letters from science faculty"
        },
        "source": "https://chemistry.wwu.edu/graduate-studies"
      },
      {
        "title": "Master of Science in Geology - Volcanology & Cascade Tectonics",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Geology Teaching and Research Assistantships: $16,500/year plus tuition remission",
        "fee": "$100",
        "tuition": "$0 (Fully funded)",
        "desc": "Pacific Northwest field geological degree investigating active volcanism in Mount Baker, Cascadia subduction zone seismology, glacial geomorphology, and structural geology.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in geology or geophysics",
          "ielts": "IELTS 7.0+ or TOEFL 86+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, official transcripts",
          "references": "Three academic references"
        },
        "source": "https://geology.wwu.edu/graduate-program"
      },
      {
        "title": "Master of Arts in Environmental Studies - Environmental Policy & Indigenous Sovereignty",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of the Environment Graduate Fellowships up to $9,000/year",
        "fee": "$100",
        "tuition": "$17,800/year (out-of-state) / $11,200/year (in-state)",
        "desc": "Interdisciplinary environmental policy curriculum exploring tribal treaty rights in fisheries, climate resilience planning, transboundary water governance with Canada, and community food sovereignty.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 7.0+ or TOEFL 86+",
          "gre": "Not required",
          "papers": "Statement of purpose, writing sample, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://cenv.wwu.edu/envs/environmental-studies-ma"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Brian Bingham",
        "role": "Director of Shannon Point Marine Center and Professor of Environmental Sciences",
        "department": "Shannon Point Marine Center",
        "subject": "environment",
        "bio": "Dr. Brian Bingham investigates marine invertebrate larval ecology, cnidarian-algal symbiosis, and the impacts of ocean warming and acidification on Pacific Northwest intertidal communities."
      },
      {
        "name": "Dr. David Patrick",
        "role": "Professor of Chemistry and Vice Provost for Research",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. David Patrick researches advanced surface chemistry, liquid crystals, molecular self-assembly, and luminescent solar concentrator optical materials for clean energy harvesting."
      },
      {
        "name": "Dr. Jackie Caplan-Auerbach",
        "role": "Professor of Geology and Associate Dean of the College of Science & Engineering",
        "department": "Department of Geology",
        "subject": "environment",
        "bio": "Dr. Jackie Caplan-Auerbach is a seismologist and volcanologist investigating submarine eruptions, seismic acoustics of glacial collapse, and acoustic tremor signatures in the Cascadia subduction zone."
      }
    ]
  },

  # 13. Wichita State University (Row 1219)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Wichita State University",
    "shortName": "WSU",
    "slug": "wichita-state-university",
    "location": "Wichita, Kansas, United States",
    "website": "https://www.wichita.edu",
    "sourceRow": 1219,
    "stats": {"established": "1895", "students": "17,500+", "international": "11%", "faculty": "950+"},
    "heroSummary": "Wichita State University is a major comprehensive urban public research university established in 1895, located in Wichita, Kansas—the 'Air Capital of the World'. Acclaimed for aerospace engineering and aeronautical research at the National Institute for Aviation Research (NIAR), mechanical engineering, computer science, and healthcare innovation at the Innovation Campus, Wichita State ranks #1 in the nation in industry-funded aerospace research expenditures with over $200 million annually.",
    "academicOverview": "Wichita State comprises nine academic colleges and institutes: the College of Engineering, Fairmount College of Liberal Arts and Sciences, W. Frank Barton School of Business, College of Health Professions, College of Applied Studies, Dorothy and Bill Cohen Honors College, and the College of Fine Arts. The university operates the National Institute for Aviation Research (NIAR).",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and coursework with test-optional reviews. Graduate doctoral programs offer Graduate Research Assistantships (GRA) through NIAR ($24,000–$32,000/year plus tuition remission). Master's and doctoral applicants submit transcripts, statement of purpose, letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Aerospace Engineering - Advanced Composites & Crashworthiness - NIAR",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NIAR Doctoral Research Assistantship: $26,000/year stipend, full tuition scholarship, and industry co-op",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "Elite aerospace doctorate operating within the National Institute for Aviation Research (NIAR), investigating full-scale aircraft structural crashworthiness, composite digital twin certification, and hypersonic wind tunnel dynamics.",
        "requirements": {
          "gpa": "3.2+ GPA in aerospace, mechanical, or materials engineering",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE Quantitative 155+ recommended",
          "papers": "Statement of purpose, resume, official transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.wichita.edu/academics/engineering/aerospace/graduate/phd.php"
      },
      {
        "title": "Ph.D. in Industrial, Systems, and Manufacturing Engineering - Digital Twin & Additive Manufacturing",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Research Assistantship: $24,000/year stipend plus full tuition waiver",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "Industry-driven engineering doctorate utilizing NIAR's Advanced Technologies Lab for Aerospace Systems (ATLAS) to develop metal 3D printing algorithms, robotic automated fiber placement, and supply chain digital twins.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in engineering or physical sciences",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Transcripts, CV, statement of research purpose",
          "references": "Three academic references"
        },
        "source": "https://www.wichita.edu/academics/engineering/ime/graduate/phd.php"
      },
      {
        "title": "Master of Science in Computer Science - Cybersecurity & Autonomous Navigation",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Innovation Campus Graduate Assistantships up to $14,000/year",
        "fee": "$75",
        "tuition": "$17,200/year (out-of-state) / $8,400/year (in-state)",
        "desc": "Rigorous graduate computing degree exploring avionics software security, drone swarm consensus protocols, deep learning for sensor fusion, and cyber-physical infrastructure defense.",
        "requirements": {
          "gpa": "3.0+ GPA in computer science, software engineering, or computer engineering",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, CV, transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.wichita.edu/academics/engineering/eecs/graduate/cs_ms.php"
      },
      {
        "title": "Ph.D. in Chemistry - Polymeric Biomaterials & Nanomedicine Drug Delivery",
        "type": "Fellowship",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate Teaching/Research Assistantship: $22,500/year stipend and full tuition waiver",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "Doctoral research program focusing on synthetic macromolecular chemistry, stimuli-responsive nanocarriers for targeted oncological drug delivery, antimicrobial surfaces, and bio-nanotechnology.",
        "requirements": {
          "gpa": "3.0+ GPA in chemistry, biochemistry, or chemical engineering",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Research statement, CV, official transcripts",
          "references": "Three letters from science professors"
        },
        "source": "https://www.wichita.edu/academics/fairmount_college_of_liberal_arts_and_sciences/chemistry/graduate/phd.php"
      },
      {
        "title": "Doctor of Physical Therapy (DPT) - Musculoskeletal & Neuromuscular Rehabilitation",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Health Professions Endowed Clinical Scholarships up to $6,000/year",
        "fee": "$75",
        "tuition": "$22,400/year",
        "desc": "CAPTE-accredited three-year professional doctorate delivering clinical anatomy dissection, neuro-rehabilitation, pediatric physical therapy, and evidence-based orthopedics.",
        "requirements": {
          "gpa": "3.0+ cumulative GPA and prerequisite science GPA",
          "ielts": "IELTS 7.0+ or TOEFL 88+",
          "gre": "GRE required",
          "papers": "PTCAS application, verified observation hours, transcripts",
          "references": "Three recommendations (including one licensed PT)"
        },
        "source": "https://www.wichita.edu/academics/health_professions/pt/dpt.php"
      },
      {
        "title": "Master of Business Administration (MBA) - Aviation Management & Global Supply Chain",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Barton School Graduate Fellowships up to $7,500/year",
        "fee": "$75",
        "tuition": "$18,500/year",
        "desc": "AACSB-accredited MBA program housed in Woolsey Hall at the W. Frank Barton School of Business, partnering with Airbus, Textron Aviation, and Spirit AeroSystems in aerospace supply chain analytics.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GMAT/GRE waiver available",
          "papers": "Resume showing professional experience, statement of purpose, transcripts",
          "references": "Two professional references"
        },
        "source": "https://www.wichita.edu/academics/business/graduate_studies/mba.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. John Tomblin",
        "role": "Senior Vice President for Industry and Defense Programs and Executive Director of NIAR",
        "department": "National Institute for Aviation Research",
        "subject": "engineering",
        "bio": "Dr. John Tomblin is a globally renowned authority on advanced composite material qualification, leading NIAR's aircraft certification, full-scale structural testing, and additive manufacturing programs for the FAA and DoD."
      },
      {
        "name": "Dr. Ramazan Asmatulu",
        "role": "Professor of Mechanical Engineering",
        "department": "Department of Mechanical Engineering",
        "subject": "engineering",
        "bio": "Dr. Ramazan Asmatulu researches nanotechnology, electrospun nanocomposite fibers, lightning strike protection for composite aircraft, solar thermal cells, and biomaterial implants."
      },
      {
        "name": "Dr. Visvakumar Aravinthan",
        "role": "Associate Professor and Department Chair of Electrical and Computer Engineering",
        "department": "Department of Electrical & Computer Engineering",
        "subject": "engineering",
        "bio": "Dr. Visvakumar Aravinthan investigates smart grid resiliency, electric vehicle charging impacts on urban distribution networks, cyber-physical power system security, and power system restoration."
      }
    ]
  },

  # 14. Widener University (Row 1220)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Widener University",
    "shortName": "Widener",
    "slug": "widener-university",
    "location": "Chester, Pennsylvania, United States",
    "website": "https://www.widener.edu",
    "sourceRow": 1220,
    "stats": {"established": "1821", "students": "5,800+", "international": "4%", "faculty": "450+"},
    "heroSummary": "Widener University is a private doctoral civic-engagement university founded in 1821, situated on a 110-acre campus in Chester, Pennsylvania, within the greater Philadelphia metropolitan area. Renowned for professional education in engineering, nursing, clinical psychology, social work, and law through the Widener University Delaware Law School and Commonwealth Law School, Widener integrates rigorous academic theory with experiential community clinic leadership.",
    "academicOverview": "Widener comprises seven schools and colleges: the School of Engineering, School of Nursing, College of Arts & Sciences, School of Business Administration, Center for Human Sexuality Studies, School of Law (Delaware Law School in Wilmington, DE, and Commonwealth Law School in Harrisburg, PA), and the College of Health and Human Services.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, essays, and extracurricular involvement with test-optional reviews. Graduate doctoral and master's programs require an accredited bachelor's degree with a minimum 3.0 GPA, personal statement, professional resume, letters of recommendation, and English proficiency (TOEFL 80+ or IELTS 6.5+). Graduate scholarships and assistantships are available.",
    "opps": [
      {
        "title": "Doctor of Psychology (Psy.D.) in Clinical Psychology - Health & Forensic Psychology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2026-12-01",
        "deadlineText": "December 1, 2026",
        "funding": "Graduate Clinical Assistantships and Tuition Scholarships up to $12,000/year",
        "fee": "$50",
        "tuition": "$34,500/year",
        "desc": "APA-accredited practitioner-scholar doctoral program recognized for specialized dual degrees (Psy.D./MBA, Psy.D./JD), delivering clinical rotations across Philadelphia hospitals and mental health centers.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in psychology or behavioral science",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "GRE General optional",
          "papers": "Three clinical essays, CV, official transcripts",
          "references": "Three letters from psychologists or academic mentors"
        },
        "source": "https://www.widener.edu/academics/graduate-studies/clinical-psychology-psyd"
      },
      {
        "title": "Master of Science in Biomedical Engineering - Orthopedic Biomechanics & Medical Implants",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "School of Engineering Graduate Research Assistantships up to $9,000/year",
        "fee": "$50",
        "tuition": "$19,800/year",
        "desc": "Hands-on engineering master's addressing surgical implant biomechanics, biomaterial biocompatibility, finite element computational modeling, and tissue scaffold fabrication.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in engineering, biology, or physics",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two academic or professional recommendations"
        },
        "source": "https://www.widener.edu/academics/graduate-studies/biomedical-engineering-ms"
      },
      {
        "title": "Juris Doctor (J.D.) - Environmental Law & Corporate Compliance - Delaware Law School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Delaware Law Merit Scholarships covering up to 100% of tuition",
        "fee": "$60 (Waiver available)",
        "tuition": "$42,600/year",
        "desc": "ABA-accredited legal education based in Wilmington, Delaware—the corporate litigation capital of the United States—featuring specialized certificates in corporate law, environmental advocacy, and trial advocacy.",
        "requirements": {
          "gpa": "Accredited bachelor's degree with competitive undergraduate GPA",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "LSAT or GRE score required",
          "papers": "Personal statement, resume, CAS credential assembly service report",
          "references": "Two letters of recommendation"
        },
        "source": "https://delawarelaw.widener.edu/admissions/jd-admissions/"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Family Nurse Practitioner (FNP)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "School of Nursing Graduate Traineeships up to $7,500/year",
        "fee": "$50",
        "tuition": "$18,500/year",
        "desc": "CCNE-accredited graduate nursing program preparing registered nurses for national FNP certification, emphasizing primary care management of chronic health conditions across the lifespan.",
        "requirements": {
          "gpa": "3.0+ BSN GPA and active unencumbered RN license",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Resume showing 1+ year clinical experience, personal essay, transcripts",
          "references": "Three professional references"
        },
        "source": "https://www.widener.edu/academics/graduate-studies/family-nurse-practitioner-msn"
      },
      {
        "title": "Master of Social Work (MSW) - Trauma-Informed Clinical Practice",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Center for Social Work Education Merit Grants up to $6,000/year",
        "fee": "$50",
        "tuition": "$17,200/year",
        "desc": "CSWE-accredited social work degree with a distinct trauma-informed clinical curriculum, preparing practitioners for hospital, school, and community mental health leadership.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Personal statement detailing commitment to social justice, CV, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.widener.edu/academics/graduate-studies/social-work-msw"
      },
      {
        "title": "Ph.D. in Human Sexuality Studies - Clinical Sex Therapy & Sexuality Education",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Center for Human Sexuality Graduate Fellowships up to $10,000/year",
        "fee": "$50",
        "tuition": "$26,400/year",
        "desc": "The only fully accredited doctoral program in human sexuality studies housed at a comprehensive university in the United States, training global leaders in sexual health clinical therapy and policy research.",
        "requirements": {
          "gpa": "3.3+ master's degree GPA in mental health, education, or healthcare",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "GRE optional",
          "papers": "Scholarly writing sample, statement of research purpose, CV",
          "references": "Three academic references"
        },
        "source": "https://www.widener.edu/academics/graduate-studies/human-sexuality-phd"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Babatunde Ogunnaike",
        "role": "Adjunct Professor of Chemical and Biomedical Engineering",
        "department": "School of Engineering",
        "subject": "engineering",
        "bio": "Dr. Babatunde Ogunnaike investigates process control systems, mathematical modeling of complex biological systems, and neural network optimization for biomedical therapies."
      },
      {
        "name": "Dr. Sanjay Lele",
        "role": "Associate Professor of Psychology",
        "department": "Institute for Graduate Clinical Psychology",
        "subject": "social-sciences",
        "bio": "Dr. Sanjay Lele researches clinical cognitive-behavioral assessment, psychodynamic psychotherapy processes, cross-cultural mental health delivery, and forensic psychological evaluation."
      },
      {
        "name": "Dr. Anita Singh",
        "role": "Associate Professor and Chair of Biomedical Engineering",
        "department": "Department of Biomedical Engineering",
        "subject": "engineering",
        "bio": "Dr. Anita Singh investigates orthopedic biomechanics, spine kinematics, neonatal brachial plexus injury mechanisms, and biomaterial testing of surgical bone graft scaffolds."
      }
    ]
  },

  # 15. Willamette University (Row 1221)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Willamette University",
    "shortName": "Willamette",
    "slug": "willamette-university",
    "location": "Salem, Oregon, United States",
    "website": "https://willamette.edu",
    "sourceRow": 1221,
    "stats": {"established": "1842", "students": "2,400+", "international": "6%", "faculty": "210+"},
    "heroSummary": "Willamette University is a distinguished private liberal arts and professional university founded in 1842 in Salem, Oregon, making it the oldest university in the Western United States. Situated directly across the street from the Oregon State Capitol and State Supreme Court, Willamette is renowned for political science and law at the College of Law, business and public administration at the Atkinson Graduate School of Management, data science, and environmental science.",
    "academicOverview": "Willamette encompasses five colleges and schools: the College of Arts and Sciences, College of Law, Atkinson Graduate School of Management, School of Computing and Information Sciences, and the Pacific Northwest College of Art (PNCA in Portland). The university operates the Zena Sustainability Park—a 305-acre living research forest.",
    "researchAdmissions": "Undergraduate admissions evaluate secondary school transcripts, essays, and extracurriculars with test-optional policies. Graduate admissions for law, business, and computing require an accredited bachelor's degree with a minimum 3.0 GPA, resume, statement of purpose, letters of recommendation, and English proficiency (TOEFL 80+ or IELTS 6.5+). Merit scholarships are awarded upon admission.",
    "opps": [
      {
        "title": "Master of Science in Data Science - Civic Analytics & Environmental Modeling",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "environment"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "School of Computing Graduate Merit Scholarships up to $10,000/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "Applied data science master's program utilizing direct partnerships with Oregon state government agencies to analyze geospatial climate datasets, public health telemetry, and machine learning policy governance.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with quantitative background in calculus or programming",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://willamette.edu/computing/programs/ms-data-science/index.html"
      },
      {
        "title": "Juris Doctor (J.D.) - Environmental Law & Public Interest - College of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "College of Law Dean's Merit Scholarships covering up to 100% tuition",
        "fee": "$50 (Waiver available)",
        "tuition": "$47,200/year",
        "desc": "ABA-accredited legal education positioned directly opposite the Oregon State Capitol, offering unparalleled legislative externships, water rights law, public policy advocacy, and trial practice.",
        "requirements": {
          "gpa": "Accredited bachelor's degree with competitive undergraduate GPA",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "LSAT or GRE score required",
          "papers": "Personal statement, resume, CAS law school report",
          "references": "Two academic or professional recommendations"
        },
        "source": "https://willamette.edu/law/admission/jd/index.html"
      },
      {
        "title": "Master of Business Administration (MBA) - Public and Not-for-Profit Management - Atkinson School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Atkinson School Endowed Merit Scholarships up to $18,000/year",
        "fee": "$50",
        "tuition": "$32,500/year",
        "desc": "One of only two programs in the world accredited by both AACSB International (business) and NASPAA (public administration), integrating corporate finance with public policy and nonprofit leadership.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GMAT/GRE optional",
          "papers": "Resume showing leadership potential, essay, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://willamette.edu/mba/admission/index.html"
      },
      {
        "title": "Bachelor of Arts in Environmental Science - Forest Ecology & Zena Research Preserve",
        "type": "Scholarship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Willamette Merit Scholarships up to $25,000/year plus summer research grants",
        "fee": "$50",
        "tuition": "$56,800/year (Significant merit scholarships apply)",
        "desc": "Hands-on undergraduate environmental science curriculum conducting field ecology, watershed hydrology, and wildfire restoration at the 305-acre Zena Sustainability Park.",
        "requirements": {
          "gpa": "3.3+ high school GPA with biology and chemistry background",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not applicable",
          "papers": "Common Application, essay, transcripts",
          "references": "One counselor and one teacher recommendation"
        },
        "source": "https://willamette.edu/cla/environmental-science/index.html"
      },
      {
        "title": "Master of Fine Arts (MFA) in Visual Studies - Pacific Northwest College of Art (PNCA)",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "PNCA Dean's Visual Arts Fellowships up to $12,000/year",
        "fee": "$50",
        "tuition": "$38,400/year",
        "desc": "Interdisciplinary studio art MFA based at PNCA in Portland, Oregon, fostering critical discourse, studio critique, printmaking, installation sculpture, and contemporary social practice.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in fine arts or related field",
          "ielts": "IELTS 7.0+ or TOEFL 85+",
          "gre": "Not required",
          "papers": "Visual portfolio (20 images/videos), artist statement, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://pnca.willamette.edu/academics/graduate/mfa-visual-studies"
      },
      {
        "title": "Bachelor of Arts in Politics, Policy, Law and Ethics (PPLE) - Capitol Legislative Internship",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Willamette College Leadership Scholarships up to $24,000/year",
        "fee": "$50",
        "tuition": "$56,800/year",
        "desc": "Distinctive interdisciplinary undergraduate major that places students in legislative offices and the Governor's office at the Oregon State Capitol, examining constitutional law, political philosophy, and state policymaking.",
        "requirements": {
          "gpa": "Top 20% high school class rank with social sciences rigor",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not applicable",
          "papers": "Common Application, writing sample/essay, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://willamette.edu/cla/pple/index.html"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Karen Arabas",
        "role": "Professor of Environmental Science and Dendrochronology Director",
        "department": "Department of Environmental Science",
        "subject": "environment",
        "bio": "Dr. Karen Arabas is a biogeographer and dendrochronologist who uses tree rings to reconstruct wildfire history, forest disturbance regimes, and climate variability across the Pacific Northwest."
      },
      {
        "name": "Dr. David Gutterman",
        "role": "Professor of Politics, Policy, Law and Ethics",
        "department": "Department of Politics, Policy, Law and Ethics",
        "subject": "social-sciences",
        "bio": "Dr. David Gutterman researches political theory, American political thought, the rhetoric of religious nationalism, democratic social movements, and narrative ethics in public life."
      },
      {
        "name": "Dr. Haiyan Cheng",
        "role": "Professor of Computer Science",
        "department": "School of Computing and Information Sciences",
        "subject": "computer-science",
        "bio": "Dr. Haiyan Cheng conducts research in high-performance scientific computing, parallel algorithm design, computational linear algebra, and data assimilation for environmental forecasting models."
      }
    ]
  }
]
