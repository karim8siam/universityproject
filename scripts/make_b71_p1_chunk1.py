# scripts/make_b71_p1_chunk1.py
# Batch 71 Part 1 Chunk 1: Universities 1 to 8
# 1. Washington University in St. Louis (Row 1203)
# 2. Wayne State University (Row 1205)
# 3. Weber State University (Row 1206)
# 4. Webster University (Row 1207)
# 5. Wellesley College (Row 1208)
# 6. Wentworth Institute of Technology (Row 1209)
# 7. Western Carolina University (Row 1210)
# 8. Western Connecticut State University (Row 1211)

chunk1 = [
  # 1. Washington University in St. Louis (Row 1203)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Washington University in St. Louis",
    "shortName": "WashU",
    "slug": "washington-university-in-st-louis",
    "location": "St. Louis, Missouri, United States",
    "website": "https://wustl.edu",
    "sourceRow": 1203,
    "stats": {"established": "1853", "students": "16,000+", "international": "23%", "faculty": "4,100+"},
    "heroSummary": "Washington University in St. Louis (WashU) is a world-renowned private Carnegie R1 research university founded in 1853. Internationally acclaimed for the Washington University School of Medicine, McKelvey School of Engineering, Olin Business School, and Arts & Sciences, WashU drives pioneering breakthroughs in genomic sequencing, neuroscience, biomedical engineering, and plant biology with over $950 million in annual research expenditures.",
    "academicOverview": "WashU comprises seven academic divisions: the School of Medicine, McKelvey School of Engineering, College of Arts & Sciences, Olin Business School, School of Law, Sam Fox School of Design & Visual Arts, and the Brown School of Social Work. The university operates the McDonnell Genome Institute, the Siteman Cancer Center, and the Danforth Campus.",
    "researchAdmissions": "Undergraduate admissions are highly selective and test-optional. Graduate doctoral admissions offer full funding packages including multi-year living stipends ($36,000–$42,000/year), 100% tuition coverage, and health insurance. Applicants submit transcripts, letters of recommendation, statement of purpose, and English proficiency (TOEFL 90+ or IELTS 7.0+).",
    "opps": [
      {
        "title": "Ph.D. in Biomedical Engineering - Neural Engineering & Biomaterials - McKelvey School",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "Full fellowship: $37,500/year stipend, full tuition remission, and health benefits",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "Elite doctoral research fellowship in biomedical engineering developing advanced neurophotonic brain-computer interfaces, regenerative biomaterials, cardiac electromechanics, and ultrasound neuro-modulation.",
        "requirements": {
          "gpa": "3.6+ cumulative GPA in engineering or physical sciences",
          "ielts": "IELTS 7.0+ or TOEFL 100+",
          "gre": "GRE General optional",
          "papers": "Transcripts, CV, 3 letters of recommendation, and research statement",
          "references": "Three confidential academic letters"
        },
        "source": "https://bme.wustl.edu/graduate/phd/index.html"
      },
      {
        "title": "Ph.D. in Molecular Genetics and Genomics - Division of Biology & Biomedical Sciences (DBBS)",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-12-01",
        "deadlineText": "December 1, 2026",
        "funding": "Full DBBS fellowship: $38,500/year stipend plus full tuition waiver and insurance",
        "fee": "$0 (Waiver available)",
        "tuition": "$0 (Fully funded)",
        "desc": "World-leading genetics doctorate partnering with the McDonnell Genome Institute, focusing on functional human genomics, epigenetic remodeling in cancer, microbial pathogenesis, and CRISPR gene editing.",
        "requirements": {
          "gpa": "3.5+ undergraduate GPA in biological or chemical sciences",
          "ielts": "IELTS 7.5 or TOEFL 100+",
          "gre": "GRE not required",
          "papers": "Statement of purpose, CV, transcripts, and verified lab research experience",
          "references": "Three letters from research mentors"
        },
        "source": "https://dbbs.wustl.edu/programs/molecular-genetics-and-genomics/"
      },
      {
        "title": "Ph.D. in Computer Science - Artificial Intelligence & Cyber-Physical Systems",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "Doctoral research assistantship: $36,000/year stipend with complete tuition remission",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "High-impact computing fellowship conducting advanced research in trustworthy machine learning, distributed real-time cloud systems, surgical robotics, computer vision, and computational biology.",
        "requirements": {
          "gpa": "3.5+ GPA in computer science, mathematics, or related field",
          "ielts": "IELTS 7.0+ or TOEFL 95+",
          "gre": "GRE optional",
          "papers": "Academic CV, transcripts, research statement, and GitHub portfolio",
          "references": "Three academic references"
        },
        "source": "https://cse.wustl.edu/academics/graduate/phd-in-computer-science.html"
      },
      {
        "title": "Ph.D. in Chemistry - Quantum Dynamics & Catalytic Energy Materials",
        "type": "Fellowship",
        "subject": "chemistry",
        "subjects": ["chemistry", "physics"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Full graduate fellowship: $35,500/year stipend and 100% tuition coverage",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "Intensive chemistry doctoral program investigating solar photochemistry, transition-metal catalysis, solid-state battery electrolytes, ultrafast laser spectroscopy, and synthetic organic methodology.",
        "requirements": {
          "gpa": "3.3+ GPA in chemistry or biochemistry",
          "ielts": "IELTS 7.0+ or TOEFL 95+",
          "gre": "GRE Chemistry subject optional",
          "papers": "Transcripts, research essay, personal statement, and CV",
          "references": "Three letters of recommendation"
        },
        "source": "https://chemistry.wustl.edu/graduate"
      },
      {
        "title": "Master of Social Work (MSW) - Mental Health & International Social Development - Brown School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Brown School Merit & Need Scholarships covering up to 75% tuition",
        "fee": "$45",
        "tuition": "$44,800/year",
        "desc": "Nationally top-ranked social work program preparing leaders in psychiatric clinical intervention, community economic development, immigrant advocacy, and evidence-based global welfare policies.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA from an accredited institution",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "Not required",
          "papers": "Three analytical essays, CV, transcripts, and field experience documentation",
          "references": "Three professional or academic references"
        },
        "source": "https://brownschool.wustl.edu/academics/master-of-social-work/"
      },
      {
        "title": "Ph.D. in Physics - Astrophysics, Quantum Materials & Condensed Matter",
        "type": "Fellowship",
        "subject": "physics",
        "subjects": ["physics"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "Graduate fellowship: $36,000/year stipend, full tuition remission, and health insurance",
        "fee": "$75",
        "tuition": "$0 (Fully funded)",
        "desc": "Premier physics doctorate exploring topological quantum insulators, high-pressure physics, gamma-ray astronomy, cosmic ray detection, and quantum transport at cryogenic temperatures.",
        "requirements": {
          "gpa": "3.5+ GPA in physics, astronomy, or applied physics",
          "ielts": "IELTS 7.0+ or TOEFL 95+",
          "gre": "GRE Physics recommended but optional",
          "papers": "Statement of purpose, academic CV, transcripts",
          "references": "Three academic recommendation letters"
        },
        "source": "https://physics.wustl.edu/graduate"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Lori Setton",
        "role": "Lucy & Stanley Lopata Distinguished Professor and Chair of Biomedical Engineering",
        "department": "Department of Biomedical Engineering",
        "subject": "engineering",
        "bio": "Dr. Lori Setton directs the Musculoskeletal Tissue Engineering Lab at WashU, pioneering thermo-responsive biopolymer drug delivery hydrogels and mechanical biomaterial scaffolds for spinal disc regeneration and osteoarthritis repair."
      },
      {
        "name": "Dr. Jonathan Kipnis",
        "role": "Alan A. and Edith L. Wolff Distinguished Professor of Pathology and Immunology",
        "department": "Department of Pathology and Immunology",
        "subject": "biology",
        "bio": "Dr. Jonathan Kipnis is a world-renowned neuro-immunologist whose laboratory discovered functional lymphatic vessels lining the central nervous system dural sinuses, revolutionizing scientific understanding of neurodegenerative diseases."
      },
      {
        "name": "Dr. Yixin Chen",
        "role": "Professor of Computer Science & Engineering",
        "department": "Department of Computer Science & Engineering",
        "subject": "computer-science",
        "bio": "Dr. Yixin Chen investigates automated machine learning, nonlinear optimization, smart healthcare diagnostic algorithms, and constraint satisfaction for critical biomedical artificial intelligence systems."
      }
    ]
  },

  # 2. Wayne State University (Row 1205)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Wayne State University",
    "shortName": "Wayne State",
    "slug": "wayne-state-university",
    "location": "Detroit, Michigan, United States",
    "website": "https://wayne.edu",
    "sourceRow": 1205,
    "stats": {"established": "1868", "students": "24,000+", "international": "8%", "faculty": "2,700+"},
    "heroSummary": "Wayne State University is a major comprehensive urban Carnegie R1 public research university located in the cultural Midtown center of Detroit, Michigan. Founded in 1868, Wayne State is celebrated for the Wayne State University School of Medicine, College of Engineering, Law School, and Mike Ilitch School of Business, serving as a national powerhouse for health disparities research, automotive engineering, and urban community revitalization.",
    "academicOverview": "Wayne State enrolls students across 13 schools and colleges, featuring the nation's premier perinatal research branch, the smart mobility and battery engineering centers, and the Karmanos Cancer Institute. Wayne State forms Michigan's University Research Corridor alongside UM and MSU.",
    "researchAdmissions": "Undergraduate admissions review high school GPA, core preparation, and personal statements with test-optional policies. Graduate doctoral applicants receive Graduate Teaching or Research Assistantships ($24,000–$30,000/year plus tuition remission). Application requires an accredited bachelor's degree, transcripts, letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Biomedical Engineering - Impact Biomechanics & Smart Neuroprosthetics",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantship: $28,000/year stipend, full tuition scholarship, and health benefits",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "Internationally renowned impact biomechanics doctorate that established the Wayne State Tolerance Curve for automotive safety, conducting cutting-edge research in blast neurotrauma, pediatric crash simulation, and neural implants.",
        "requirements": {
          "gpa": "3.3+ GPA in engineering, biomechanics, or physical science",
          "ielts": "IELTS 6.5+ or TOEFL 85+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://engineering.wayne.edu/biomedical"
      },
      {
        "title": "Ph.D. in Cancer Biology - Tumor Microenvironment & Immunotherapy - Karmanos",
        "type": "Fellowship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2026-12-15",
        "deadlineText": "December 15, 2026",
        "funding": "Full NIH-supported fellowship: $32,000/year stipend, complete tuition waiver, and insurance",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "NCI-designated Karmanos Cancer Institute doctoral training program exploring cancer disparities, oncogenic signal transduction, targeted radiopharmaceuticals, and epigenetic mechanisms in breast and prostate tumors.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in biology, biochemistry, or pre-med",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "GRE not required",
          "papers": "Transcripts, CV, personal statement, research abstract",
          "references": "Three professional references"
        },
        "source": "https://cancerbiology.med.wayne.edu/"
      },
      {
        "title": "Master of Science in Automotive and Mobility Systems Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Mobility Innovation Fellowships and Industry Co-ops up to $15,000/year",
        "fee": "$50",
        "tuition": "$21,400/year (out-of-state) / $11,200/year (in-state)",
        "desc": "Midtown Detroit engineering master's addressing next-generation electric vehicle powertrains, connected autonomous vehicle (CAV) infrastructure, battery energy storage safety, and vehicle cybersecurity.",
        "requirements": {
          "gpa": "3.0+ GPA in mechanical, electrical, or automotive engineering",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE not required for GPAs above 3.0",
          "papers": "Transcripts, statement of career goals, CV",
          "references": "Two letters of recommendation"
        },
        "source": "https://engineering.wayne.edu/automotive"
      },
      {
        "title": "Ph.D. in Computer Science - Autonomous Driving & Cloud Edge AI",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental Graduate Assistantship: $26,500/year stipend and full tuition coverage",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "Cutting-edge computing doctorate focusing on edge computing algorithms for connected smart cities, privacy-preserving machine learning, real-time operating systems, and intelligent transportation safety.",
        "requirements": {
          "gpa": "3.3+ GPA in computer science or software engineering",
          "ielts": "IELTS 6.5+ or TOEFL 85+",
          "gre": "GRE optional",
          "papers": "CV, statement of research purpose, official transcripts",
          "references": "Three academic references"
        },
        "source": "https://engineering.wayne.edu/computer-science"
      },
      {
        "title": "Ph.D. in Chemistry - Organometallic Catalysis & Renewable Battery Electrochemistry",
        "type": "Fellowship",
        "subject": "chemistry",
        "subjects": ["chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Teaching/Research Assistantship: $27,000/year stipend, full tuition waiver, and health care",
        "fee": "$50",
        "tuition": "$0 (Fully funded)",
        "desc": "Doctoral research program investigating sustainable transition-metal catalysis, green organic synthesis, luminescent coordination polymers, and advanced lithium-ion and solid-state battery interfaces.",
        "requirements": {
          "gpa": "3.0+ GPA in chemistry or biochemistry",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Three letters from chemistry faculty"
        },
        "source": "https://clas.wayne.edu/chemistry"
      },
      {
        "title": "Master of Urban Planning (MUP) - Urban Revitalization & Transportation Equity",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental Graduate Scholarships up to $10,000/year",
        "fee": "$50",
        "tuition": "$19,800/year (out-of-state) / $10,400/year (in-state)",
        "desc": "PAB-accredited urban planning master's utilizing the living laboratory of Detroit to address spatial equity, sustainable urban transportation transit, community-based land use, and post-industrial revitalization.",
        "requirements": {
          "gpa": "3.0+ cumulative undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Personal statement detailing urban planning interests, CV, transcripts",
          "references": "Two professional or academic letters"
        },
        "source": "https://clas.wayne.edu/urban-planning"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Cynthia Bir",
        "role": "Professor and Chair of Biomedical Engineering",
        "department": "Department of Biomedical Engineering",
        "subject": "engineering",
        "bio": "Dr. Cynthia Bir is a leading researcher in injury biomechanics, ballistic impacts, and sports safety, evaluating protective equipment efficacy and blast trauma mechanisms for military, athletic, and forensic applications."
      },
      {
        "name": "Dr. Weisong Shi",
        "role": "Adjunct Professor of Computer Science & Connected Mobility Fellow",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Weisong Shi pioneered edge computing architectures, investigating energy-efficient cloud offloading, connected autonomous vehicle sensor fusion, and smart municipal digital infrastructure."
      },
      {
        "name": "Dr. Stephanie Brock",
        "role": "Professor of Chemistry",
        "department": "Department of Chemistry",
        "subject": "chemistry",
        "bio": "Dr. Stephanie Brock investigates nanoparticle synthesis, semiconductor aerogels, and transition-metal pnictides for electrochemical water splitting, supercapacitors, and magnetic thermoelectrics."
      }
    ]
  },

  # 3. Weber State University (Row 1206)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Weber State University",
    "shortName": "Weber State",
    "slug": "weber-state-university",
    "location": "Ogden, Utah, United States",
    "website": "https://www.weber.edu",
    "sourceRow": 1206,
    "stats": {"established": "1889", "students": "29,500+", "international": "3%", "faculty": "1,150+"},
    "heroSummary": "Weber State University is a comprehensive public polytechnic and regional teaching institution founded in 1889, situated along the scenic foothills of the Wasatch Mountains in Ogden, Utah. Renowned for engineering technology, automotive service technology, nursing and healthcare leadership, and professional sales, Weber State is an essential driver of the Northern Utah aerospace and defense innovation cluster adjacent to Hill Air Force Base.",
    "academicOverview": "Weber State comprises seven academic colleges: the College of Engineering, Applied Science & Technology (EAST), Dumke College of Health Professions, Goddard School of Business & Economics, College of Science, Telitha E. Lindquist College of Arts & Humanities, Moyes College of Education, and the College of Social & Behavioral Sciences. The university operates the Miller Advanced Research and Solutions (MARS) Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school graduation credentials, transcripts, and core curriculum with open and test-optional admissions. Graduate programs require an accredited bachelor's degree with a minimum 3.0 GPA, professional statement, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Bachelor of Science in Electrical and Computer Engineering - Aerospace Defense Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "EAST College Merit Scholarships up to $7,500/year",
        "fee": "$30",
        "tuition": "$17,200/year (out-of-state) / $6,100/year (in-state)",
        "desc": "ABET-accredited electrical and computer engineering degree partnering with the MARS Center and Hill AFB to train students in embedded avionics, high-frequency RF communications, and real-time guidance telemetry.",
        "requirements": {
          "gpa": "2.8+ high school or transfer GPA with precalculus proficiency",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not required",
          "papers": "Transcripts and application form",
          "references": "Not required for undergraduate entry"
        },
        "source": "https://www.weber.edu/east/degrees/ece.html"
      },
      {
        "title": "Master of Science in Computer Science - Secure Cloud Systems & Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Graduate Teaching Assistantships providing up to $8,000/semester plus partial tuition",
        "fee": "$60",
        "tuition": "$14,800/year (out-of-state) / $6,800/year (in-state)",
        "desc": "Rigorous applied computer science master's focusing on enterprise cloud computing architecture, secure DevOps, vulnerability penetration testing, machine learning pipelines, and cryptography.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in computer science or technical STEM discipline",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Resume, statement of purpose, academic transcripts",
          "references": "Two professional or academic letters"
        },
        "source": "https://www.weber.edu/east/degrees/ms-computer-science.html"
      },
      {
        "title": "Master of Health Administration (MHA) - Clinical Leadership & Healthcare Informatics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Dumke College Graduate Healthcare Scholarships up to $5,000/year",
        "fee": "$60",
        "tuition": "$16,200/year",
        "desc": "CAHME-accredited health administration program delivered by the Dumke College of Health Professions, equipping executive administrators in hospital financial governance, health policy, and telehealth analytics.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE/GMAT waiver available with healthcare work experience",
          "papers": "Statement of professional goals, CV, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.weber.edu/mha"
      },
      {
        "title": "Bachelor of Science in Manufacturing Systems Engineering - Advanced Composites",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Utah Aerospace Pathway Scholarships up to $6,000/year",
        "fee": "$30",
        "tuition": "$17,200/year (out-of-state) / $6,100/year (in-state)",
        "desc": "Hands-on manufacturing engineering curriculum focusing on carbon fiber composite fabrication, robotic additive manufacturing, computer-aided design (CAD/CAM), and automated quality inspection.",
        "requirements": {
          "gpa": "2.7+ high school or transfer GPA",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not required",
          "papers": "Official transcripts and diploma",
          "references": "Not required"
        },
        "source": "https://www.weber.edu/east/degrees/mse.html"
      },
      {
        "title": "Bachelor of Science in Zoology - High-Altitude Rocky Mountain Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "College of Science Undergraduate Research Fellowships up to $4,000/year",
        "fee": "$30",
        "tuition": "$17,200/year (out-of-state) / $6,100/year (in-state)",
        "desc": "Immersive field-based zoological science degree leveraging the Wasatch-Cache National Forest and Great Salt Lake ecosystems for wildlife telemetry, avian conservation, and environmental toxicology.",
        "requirements": {
          "gpa": "2.8+ high school GPA with biology and chemistry background",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not required",
          "papers": "High school transcripts and personal statement",
          "references": "Not required"
        },
        "source": "https://www.weber.edu/zoology"
      },
      {
        "title": "Master of Business Administration (MBA) - Aerospace & Supply Chain Management",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Goddard School Graduate Assistantships and Merit Awards up to $7,000/year",
        "fee": "$60",
        "tuition": "$18,500/year",
        "desc": "AACSB-accredited MBA program at the Goddard School of Business & Economics, delivering quantitative executive training in aerospace defense contract procurement, enterprise operations, and global logistics.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GMAT/GRE optional based on professional track record",
          "papers": "Resume showing 2+ years professional experience, essay, transcripts",
          "references": "Two professional references"
        },
        "source": "https://www.weber.edu/mba"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Fon Brown",
        "role": "Professor of Electrical and Computer Engineering",
        "department": "Department of Electrical & Computer Engineering",
        "subject": "engineering",
        "bio": "Dr. Fon Brown researches digital signal processing, reconfigurable FPGA logic, aerospace telemetry, and embedded microcontroller architectures for defense-grade avionics systems."
      },
      {
        "name": "Dr. Brian Rague",
        "role": "Associate Dean of the College of Engineering, Applied Science & Technology",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Brian Rague investigates parallel algorithms, high-performance distributed computing, software engineering process metrics, and cyber-resilient industrial control mechanisms."
      },
      {
        "name": "Dr. John Mull",
        "role": "Professor of Zoology",
        "department": "Department of Zoology",
        "subject": "environment",
        "bio": "Dr. John Mull conducts ecological field research in Great Basin and Rocky Mountain ecosystems, examining seed dispersal mutualisms, arthropod community structure, and desert conservation biology."
      }
    ]
  },

  # 4. Webster University (Row 1207)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Webster University",
    "shortName": "Webster",
    "slug": "webster-university",
    "location": "St. Louis, Missouri, United States",
    "website": "https://www.webster.edu",
    "sourceRow": 1207,
    "stats": {"established": "1915", "students": "11,500+", "international": "18%", "faculty": "950+"},
    "heroSummary": "Webster University is a private, nonprofit global university founded in 1915 in Webster Groves, Missouri, a charming suburban community within the St. Louis metropolitan region. Renowned for international education, cybersecurity, business administration at the Walker School of Business & Technology, media communications, and clinical counseling, Webster operates international campuses in Vienna, Geneva, Leiden, Tashkent, and Athens.",
    "academicOverview": "Webster comprises five schools and colleges: the George Herbert Walker School of Business & Technology, College of Humanities and Social Sciences, School of Communications, Leigh Gerdine College of Fine Arts, and the School of Education. The university operates the state-of-the-art East Academic Building and the Sverdrup Media Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA, essays, and extracurricular involvement with test-optional reviews. Graduate programs require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, personal statement, CV, and English proficiency (TOEFL 80+ or IELTS 6.5+). Merit-based international graduate scholarships are awarded upon admission.",
    "opps": [
      {
        "title": "Master of Science in Cybersecurity - Operations & Threat Intelligence",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Walker School International Cybersecurity Merit Awards up to $6,000/year",
        "fee": "$50",
        "tuition": "$16,500/year",
        "desc": "NSA/CAE-designated cybersecurity master's program providing hands-on training in offensive penetration testing, cryptographic protocols, cloud security posture management, and digital forensic incident response.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA in computing, mathematics, or related discipline",
          "ielts": "IELTS 6.0+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two academic or professional recommendations"
        },
        "source": "https://www.webster.edu/walker-school/cybersecurity.php"
      },
      {
        "title": "Master of Arts in International Relations - Diplomacy & Conflict Transformation",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Global Scholar Awards up to $5,000/year with study abroad mobility grants to Geneva/Vienna",
        "fee": "$50",
        "tuition": "$15,800/year",
        "desc": "Internationally renowned foreign policy master's allowing study across Webster's worldwide campus network, examining multilateral diplomacy, international humanitarian law, and global refugee governance.",
        "requirements": {
          "gpa": "2.75+ cumulative GPA from an accredited institution",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "300-500 word personal essay on international affairs, CV, transcripts",
          "references": "Two recommendation letters"
        },
        "source": "https://www.webster.edu/humanities-social-sciences/international-relations.php"
      },
      {
        "title": "Master of Business Administration (MBA) - Global Supply Chain & Analytics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Walker Leadership Fellowships up to $7,000/year",
        "fee": "$50",
        "tuition": "$17,200/year",
        "desc": "ACBSP-accredited global MBA curriculum delivered in accelerated 9-week terms, concentrating on multinational enterprise strategy, predictive data analytics, and supply chain sustainability.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA",
          "ielts": "IELTS 6.0+ or TOEFL 80+",
          "gre": "GMAT/GRE not required",
          "papers": "Professional resume, statement of career goals, transcripts",
          "references": "Two professional references"
        },
        "source": "https://www.webster.edu/walker-school/mba.php"
      },
      {
        "title": "Master of Science in Data Analytics - Big Data Engineering & Machine Learning",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "STEM Graduate Technology Scholarships up to $6,000/year",
        "fee": "$50",
        "tuition": "$16,500/year",
        "desc": "Applied data analytics master's combining statistical modeling in R and Python with distributed computing frameworks, SQL/NoSQL data warehousing, and predictive business intelligence.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA with quantitative coursework",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "CV, transcripts, statement of quantitative interests",
          "references": "Two recommendations"
        },
        "source": "https://www.webster.edu/walker-school/data-analytics.php"
      },
      {
        "title": "Master of Arts in Media Communications - Interactive Digital Production",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "School of Communications Creative Fellowships up to $5,000/year",
        "fee": "$50",
        "tuition": "$15,800/year",
        "desc": "Dynamic digital media degree utilizing the Sverdrup Complex studios to master multiplatform storytelling, video cinematography, interactive media design, and media sociology.",
        "requirements": {
          "gpa": "2.75+ undergraduate GPA in media, communications, or liberal arts",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Creative portfolio/sample, essay on media objectives, transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.webster.edu/communications/media-communications.php"
      },
      {
        "title": "Master of Arts in Clinical Mental Health Counseling - Trauma & Family Systems",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate Counseling Assistantships up to $6,000/year",
        "fee": "$50",
        "tuition": "$18,400/year",
        "desc": "CACREP-accredited clinical counseling program preparing practitioners for state LPC licensure through 700 hours of supervised clinical practicum and multicultural therapeutic modalities.",
        "requirements": {
          "gpa": "3.0+ GPA in psychology or social sciences",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "Not required",
          "papers": "Personal narrative essay, background check clearance, transcripts",
          "references": "Three professional references"
        },
        "source": "https://www.webster.edu/humanities-social-sciences/professional-counseling.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. James Brasfield",
        "role": "Professor of Management and Public Policy",
        "department": "George Herbert Walker School of Business & Technology",
        "subject": "social-sciences",
        "bio": "Dr. James Brasfield researches health policy governance, municipal administrative ethics, public budgeting systems, and intergovernmental fiscal management."
      },
      {
        "name": "Dr. Douglas M. Brantner",
        "role": "Associate Professor and Director of Cybersecurity Programs",
        "department": "Department of Mathematics & Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Douglas Brantner examines enterprise information assurance, national cyber defense posture, cloud vulnerability mitigation, and industrial network protocol hardening."
      },
      {
        "name": "Dr. Kristen Anderson Anderson",
        "role": "Professor of History and Political Science",
        "department": "Department of History, Politics & International Relations",
        "subject": "social-sciences",
        "bio": "Dr. Kristen Anderson researches American immigration policy history, 19th-century urban demographic integration, German-American ethnic communities, and transnational citizenship rights."
      }
    ]
  },

  # 5. Wellesley College (Row 1208)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Wellesley College",
    "shortName": "Wellesley",
    "slug": "wellesley-college",
    "location": "Wellesley, Massachusetts, United States",
    "website": "https://www.wellesley.edu",
    "sourceRow": 1208,
    "stats": {"established": "1870", "students": "2,400+", "international": "15%", "faculty": "350+"},
    "heroSummary": "Wellesley College is an elite private liberal arts women's college founded in 1870 in picturesque Wellesley, Massachusetts, 12 miles west of Boston. Celebrated as one of the Seven Sisters and among the highest-ranked undergraduate institutions in the world, Wellesley is acclaimed for developing pioneering female leaders in science, diplomacy, economics, and technology, maintaining academic cross-registration partnerships with MIT, Babson, and Olin College.",
    "academicOverview": "Wellesley offers over 50 departmental and interdepartmental undergraduate majors across the natural sciences, social sciences, arts, and humanities. The college operates the Science Center, Wellesley College Botanic Gardens, the Whitin Observatory, and the Davis Museum.",
    "researchAdmissions": "Undergraduate admissions are highly selective with test-optional application options via Common Application or Coalition Application. Wellesley is committed to meeting 100% of demonstrated financial need for all admitted students, including international undergraduates, through generous grant aid without loan obligations.",
    "opps": [
      {
        "title": "Bachelor of Arts in Computer Science - Human-Computer Interaction & AI (Cross-Registration with MIT)",
        "type": "Scholarship",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-01-08",
        "deadlineText": "January 8, 2027",
        "funding": "100% Demonstrated Financial Need Met (Average grant exceeds $62,000/year)",
        "fee": "$50 (Waiver available)",
        "tuition": "$64,300/year (Full need-based grant available)",
        "desc": "Elite undergraduate computer science degree featuring direct MIT cross-registration, hands-on lab research in tangible user interfaces, natural language processing, and collaborative robotics.",
        "requirements": {
          "gpa": "Top 10% high school class rank with rigorous honors/AP/IB coursework",
          "ielts": "IELTS 7.5+ or TOEFL 100+",
          "gre": "Not applicable (Undergraduate)",
          "papers": "Common Application, Wellesley member questions, counselor report, and transcripts",
          "references": "Two academic teacher recommendations"
        },
        "source": "https://www.wellesley.edu/cs"
      },
      {
        "title": "Bachelor of Arts in Neuroscience - Molecular Cellular & Cognitive Systems",
        "type": "Scholarship",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-01-08",
        "deadlineText": "January 8, 2027",
        "funding": "100% Need-Based Financial Aid Package covering full demonstrated tuition, room, and board",
        "fee": "$50",
        "tuition": "$64,300/year (Need-based grants apply)",
        "desc": "Top-tier undergraduate neuroscience program housed in the state-of-the-art Science Center, offering undergraduate research in synaptic plasticity, neurodevelopmental genetics, and optogenetics.",
        "requirements": {
          "gpa": "3.8+ unweighted high school GPA in advanced biology and chemistry",
          "ielts": "IELTS 7.5+ or TOEFL 100+",
          "gre": "Not applicable",
          "papers": "Transcripts, essays, school report, midyear report",
          "references": "Two teacher recommendations (STEM preferred)"
        },
        "source": "https://www.wellesley.edu/neuroscience"
      },
      {
        "title": "Bachelor of Arts in Economics - International Trade, Finance & Quantitative Econometrics",
        "type": "Scholarship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-08",
        "deadlineText": "January 8, 2027",
        "funding": "Wellesley College Need-Based Grants covering up to full tuition and living expenses",
        "fee": "$50",
        "tuition": "$64,300/year",
        "desc": "Renowned undergraduate economics department producing global central bankers and policymakers, exploring macro-econometric modeling, behavioral decision theory, and development finance.",
        "requirements": {
          "gpa": "Exceptional secondary school record with calculus preparation",
          "ielts": "IELTS 7.5+ or TOEFL 100+",
          "gre": "Not applicable",
          "papers": "Common App, personal essay, secondary school report",
          "references": "Two teacher recommendations"
        },
        "source": "https://www.wellesley.edu/economics"
      },
      {
        "title": "Bachelor of Arts in Environmental Studies - Marine Ecology & Climate Justice",
        "type": "Scholarship",
        "subject": "environment",
        "subjects": ["environment"],
        "deadline": "2027-01-08",
        "deadlineText": "January 8, 2027",
        "funding": "100% Demonstrated Need Grant Package with summer research stipends up to $5,000",
        "fee": "$50",
        "tuition": "$64,300/year",
        "desc": "Interdisciplinary environmental curriculum integrating field ecology, environmental GIS spatial analysis, environmental economics, and environmental policy with hands-on campus watershed fieldwork.",
        "requirements": {
          "gpa": "Top tier academic record with science and social sciences rigor",
          "ielts": "IELTS 7.5+ or TOEFL 100+",
          "gre": "Not applicable",
          "papers": "Common Application, essays, extracurricular activity sheet",
          "references": "Two teacher evaluation letters"
        },
        "source": "https://www.wellesley.edu/environmentalstudies"
      },
      {
        "title": "Bachelor of Arts in Astrophysics - Observational Astronomy & Planetary Atmospheres",
        "type": "Scholarship",
        "subject": "physics",
        "subjects": ["physics"],
        "deadline": "2027-01-08",
        "deadlineText": "January 8, 2027",
        "funding": "Full demonstrated need grant aid plus access to Whitin Observatory research fellowships",
        "fee": "$50",
        "tuition": "$64,300/year",
        "desc": "Distinguished astrophysics program operating the historic on-campus Whitin Observatory and accessing Keck Consortium remote telescopes for stellar spectroscopy and exoplanetary transit observations.",
        "requirements": {
          "gpa": "Exceptional record in high school physics and advanced mathematics",
          "ielts": "IELTS 7.5+ or TOEFL 100+",
          "gre": "Not applicable",
          "papers": "Transcripts, counselor recommendation, essays",
          "references": "Two teacher letters"
        },
        "source": "https://www.wellesley.edu/astronomy"
      },
      {
        "title": "Bachelor of Arts in Biochemistry - Structural Biology & Enzymology",
        "type": "Scholarship",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-01-08",
        "deadlineText": "January 8, 2027",
        "funding": "Comprehensive Need-Based Financial Aid Package meeting 100% of demonstrated need",
        "fee": "$50",
        "tuition": "$64,300/year",
        "desc": "ASBMB-accredited undergraduate biochemistry major training students in X-ray crystallography, protein NMR, enzyme kinetics, and molecular pharmacology in small research cohorts.",
        "requirements": {
          "gpa": "Rigorous chemistry, biology, and math preparation",
          "ielts": "IELTS 7.5+ or TOEFL 100+",
          "gre": "Not applicable",
          "papers": "Common Application, high school transcript, personal statement",
          "references": "Two teacher evaluations"
        },
        "source": "https://www.wellesley.edu/biochem"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Orit Shaer",
        "role": "Professor of Computer Science",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Orit Shaer directs the Wellesley Human-Computer Interaction (HCI) Lab, investigating tangible user interfaces, reality-based interaction, brain-computer interfaces, and the future of collaborative knowledge work."
      },
      {
        "name": "Dr. Marc Tetel",
        "role": "Dorothy and Charles Moses Professor of Natural Sciences",
        "department": "Neuroscience Program",
        "subject": "biology",
        "bio": "Dr. Marc Tetel investigates how steroid hormones and gut microbiome metabolites act in the brain to regulate neuroendocrine function, energy homeostasis, and obesity in female neural models."
      },
      {
        "name": "Dr. Kristin Butcher",
        "role": "Marshall I. Goldman Professor of Economics",
        "department": "Department of Economics",
        "subject": "social-sciences",
        "bio": "Dr. Kristin Butcher researches labor economics, health economics, the economic consequences of immigration, and social determinants of child health and educational outcomes."
      }
    ]
  },

  # 6. Wentworth Institute of Technology (Row 1209)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Wentworth Institute of Technology",
    "shortName": "Wentworth",
    "slug": "wentworth-institute-of-technology",
    "location": "Boston, Massachusetts, United States",
    "website": "https://wit.edu",
    "sourceRow": 1209,
    "stats": {"established": "1904", "students": "4,400+", "international": "7%", "faculty": "280+"},
    "heroSummary": "Wentworth Institute of Technology is an independent, polytechnic university established in 1904, situated on a 31-acre urban campus along the Fenway and Longwood Medical Area in Boston, Massachusetts. Renowned for its nationally recognized cooperative education (co-op) model, engineering, architecture, computer science, and construction management, Wentworth connects hands-on laboratory education with Boston's high-tech and biotech industry leaders.",
    "academicOverview": "Wentworth comprises five schools: the School of Architecture & Design, School of Computing & Data Science, School of Engineering, School of Management, and the School of Sciences & Humanities. The university requires two semesters of full-time professional co-op employment for graduation.",
    "researchAdmissions": "Undergraduate admissions evaluate high school math and science coursework, GPA, and personal essays with test-optional reviews. Graduate master's programs require an accredited bachelor's degree in a STEM discipline, a minimum 3.0 GPA, professional resume, and English language proficiency (TOEFL 79+ or IELTS 6.5+). Merit scholarships are awarded automatically upon admission.",
    "opps": [
      {
        "title": "Master of Science in Civil Engineering - Structural Resilience & Sustainable Infrastructure",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Wentworth Graduate Merit Scholarships up to $8,000/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "Applied civil engineering master's addressing seismic structural design, carbon-neutral concrete materials, geotechnical foundation mechanics, and climate-resilient coastal infrastructure.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in civil engineering or related engineering field",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Transcripts, statement of professional goals, resume",
          "references": "Two professional or academic letters"
        },
        "source": "https://wit.edu/academics/programs/civil-engineering-ms"
      },
      {
        "title": "Master of Science in Applied Computer Science - Cloud Computing & Machine Learning",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "School of Computing Graduate Fellowships up to $7,500/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "Intensive computer science program designed for software practitioners, concentrating on microservice architectures, enterprise cloud engineering in AWS/Azure, applied deep learning, and secure software design.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in computer science, software engineering, or STEM",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://wit.edu/academics/programs/applied-computer-science-ms"
      },
      {
        "title": "Master of Architecture (M.Arch) - Sustainable Urban Housing & Fabrication",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Architecture Design Excellence Scholarships up to $10,000/year",
        "fee": "$50",
        "tuition": "$28,900/year",
        "desc": "NAAB-accredited professional architecture degree focusing on ecological urban design, advanced digital fabrication, mass timber construction, and adaptive reuse in metropolitan Boston.",
        "requirements": {
          "gpa": "3.0+ GPA in pre-professional architecture or design degree",
          "ielts": "IELTS 6.5+ or TOEFL 80+",
          "gre": "Not required",
          "papers": "Design portfolio (PDF), statement of architectural intent, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://wit.edu/academics/programs/architecture-march"
      },
      {
        "title": "Master of Science in Construction Management - Virtual Design & Lean Project Delivery",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Construction Industry Endowed Scholarships up to $6,000/year",
        "fee": "$50",
        "tuition": "$24,500/year",
        "desc": "Industry-focused construction executive master's covering Building Information Modeling (BIM), lean construction logistics, risk management, and commercial procurement contracts.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA with construction or engineering background",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Resume showing construction experience, statement of purpose, transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://wit.edu/academics/programs/construction-management-ms"
      },
      {
        "title": "Bachelor of Science in Biomedical Engineering - Medical Device Co-op Track",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Wentworth Merit Scholarships up to $18,000/year plus co-op earnings ($18,000–$25,000/co-op semester)",
        "fee": "$50",
        "tuition": "$40,300/year",
        "desc": "ABET-accredited undergraduate biomedical engineering degree requiring two paid co-op semesters in Boston's Longwood Medical Area, specializing in biomechatronics and biosensors.",
        "requirements": {
          "gpa": "3.0+ high school GPA with advanced chemistry, physics, and precalculus",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not applicable",
          "papers": "Common Application, high school transcript, essay",
          "references": "One counselor and one STEM teacher recommendation"
        },
        "source": "https://wit.edu/academics/programs/biomedical-engineering-bs"
      },
      {
        "title": "Bachelor of Science in Cybersecurity - Digital Defense & Network Forensics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Polytechnic Excellence Grants up to $16,000/year",
        "fee": "$50",
        "tuition": "$40,300/year",
        "desc": "Hands-on undergraduate cybersecurity degree featuring dedicated offensive cyber range labs, network packet forensics, ethical hacking, and industrial enterprise risk assessment.",
        "requirements": {
          "gpa": "3.0+ high school GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not applicable",
          "papers": "High school transcripts, personal statement",
          "references": "Two recommendations"
        },
        "source": "https://wit.edu/academics/programs/cybersecurity-bs"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Douglas Ericson",
        "role": "Associate Professor of Mechanical Engineering",
        "department": "School of Engineering",
        "subject": "engineering",
        "bio": "Dr. Douglas Ericson conducts applied research in thermodynamic heat transfer, fluid power control systems, renewable thermal storage, and automated mechanical design."
      },
      {
        "name": "Dr. Mark Mix",
        "role": "Professor of Architecture",
        "department": "School of Architecture & Design",
        "subject": "arts-design",
        "bio": "Dr. Mark Mix investigates parametric architectural geometry, digital robotic fabrication techniques, urban tectonic systems, and carbon-sequestering building envelopes."
      },
      {
        "name": "Dr. Ali Khabari",
        "role": "Dean and Professor of Electrical Engineering",
        "department": "School of Engineering",
        "subject": "engineering",
        "bio": "Dr. Ali Khabari researches nano-electronics, semiconductor thin-film fabrication, carbon nanotube synthesis, and smart materials for energy harvesting."
      }
    ]
  },

  # 7. Western Carolina University (Row 1210)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Western Carolina University",
    "shortName": "WCU",
    "slug": "western-carolina-university",
    "location": "Cullowhee, North Carolina, United States",
    "website": "https://www.wcu.edu",
    "sourceRow": 1210,
    "stats": {"established": "1889", "students": "12,200+", "international": "2%", "faculty": "630+"},
    "heroSummary": "Western Carolina University is a comprehensive public doctoral university founded in 1889, located in the picturesque Cullowhee Valley between the Blue Ridge and Great Smoky Mountains in Western North Carolina. As a constituent campus of the University of North Carolina system, WCU is nationally recognized for emergency medical care and forensic science, Appalachian cultural ecology, engineering technology, and the NC Promise tuition plan.",
    "academicOverview": "WCU spans six colleges: the College of Arts and Sciences, College of Business, College of Education and Allied Professions, College of Engineering and Technology, College of Fine and Performing Arts, and the College of Health and Human Sciences. WCU operates the Western Carolina Forensic Osteology Research Station (FOREST), one of only a few human decomposition research facilities in the world.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA and transcripts. Eligible in-state and out-of-state undergraduates benefit from the NC Promise tuition plan ($2,500/semester tuition for out-of-state). Graduate applicants require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two letters of recommendation, and English proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Master of Science in Technology - Advanced Manufacturing & Automation",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Graduate Assistantships with stipends up to $10,500/year plus tuition remission",
        "fee": "$65",
        "tuition": "$14,800/year (out-of-state) / $7,400/year (in-state)",
        "desc": "Applied engineering technology master's program focusing on industrial robotics, precision CNC manufacturing, smart factory PLC controls, and materials characterization.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in engineering, technology, or physical sciences",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of purpose, resume, transcripts",
          "references": "Two academic or professional recommendations"
        },
        "source": "https://www.wcu.edu/learn/departments-schools-colleges/cet/engineering-and-technology/ms-technology.aspx"
      },
      {
        "title": "Bachelor of Science in Forensic Science - Forensic Chemistry & Biology (FOREST Facility)",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "NC Promise Tuition Plan ($5,000/year out-of-state tuition) plus STEM merit awards",
        "fee": "$65",
        "tuition": "$5,000/year (NC Promise out-of-state rate)",
        "desc": "Nationally acclaimed forensic science degree training students at the Western Carolina Forensic Osteology Research Station (FOREST), specializing in post-mortem interval estimation and forensic toxicology.",
        "requirements": {
          "gpa": "3.0+ high school GPA with biology and chemistry background",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not required",
          "papers": "High school transcripts and personal statement",
          "references": "Not required"
        },
        "source": "https://www.wcu.edu/learn/programs/forensic-science-bs/index.aspx"
      },
      {
        "title": "Master of Science in Biology - Southern Appalachian Ecology & Conservation",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Departmental Graduate Teaching Assistantships: $11,000/year stipend plus tuition support",
        "fee": "$65",
        "tuition": "$14,800/year (out-of-state) / $7,400/year (in-state)",
        "desc": "Immersive ecological graduate degree investigating high-biodiversity Southern Appalachian salamander populations, freshwater trout stream restoration, and forest canopy response to climate change.",
        "requirements": {
          "gpa": "3.0+ GPA in biology, ecology, or environmental science",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GRE optional",
          "papers": "Statement of research interests, CV, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.wcu.edu/learn/departments-schools-colleges/cas/science-and-math/biology/biology-ms.aspx"
      },
      {
        "title": "Doctor of Physical Therapy (DPT) - Neurological & Orthopedic Rehabilitation",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2026-11-01",
        "deadlineText": "November 1, 2026",
        "funding": "Physical Therapy Endowed Departmental Scholarships up to $6,000/year",
        "fee": "$65",
        "tuition": "$21,500/year",
        "desc": "CAPTE-accredited three-year clinical doctoral program housed in the Health and Human Sciences Building, integrating clinical biomechanics, musculoskeletal rehabilitation, and rural healthcare delivery.",
        "requirements": {
          "gpa": "3.2+ cumulative GPA and prerequisite science GPA",
          "ielts": "IELTS 7.0+ or TOEFL 90+",
          "gre": "GRE General exam required",
          "papers": "PTCAS application, verified observation hours, transcripts",
          "references": "Three letters (including one licensed PT)"
        },
        "source": "https://www.wcu.edu/learn/departments-schools-colleges/HHS/physical-therapy/index.aspx"
      },
      {
        "title": "Master of Science in Experiential and Outdoor Education - Wilderness Leadership",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Outdoor Education Graduate Assistantships with tuition waivers",
        "fee": "$65",
        "tuition": "$14,800/year",
        "desc": "Innovative graduate curriculum based in the Great Smoky Mountains, examining environmental education pedagogy, wilderness risk management, nature-based experiential therapy, and park stewardship.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of purpose detailing outdoor leadership philosophy, CV, transcripts",
          "references": "Three letters of recommendation"
        },
        "source": "https://www.wcu.edu/learn/departments-schools-colleges/ceap/humanservices/eoe/index.aspx"
      },
      {
        "title": "Bachelor of Science in Electrical Engineering - Renewable Energy Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "NC Promise Tuition ($5,000/year out-of-state) plus Engineering Merit Scholarships",
        "fee": "$65",
        "tuition": "$5,000/year (NC Promise rate)",
        "desc": "Hands-on ABET-accredited electrical engineering program preparing undergraduates in microgrid power distribution, solar inverter electronics, smart instrumentation, and control system automation.",
        "requirements": {
          "gpa": "3.0+ high school GPA with precalculus or calculus readiness",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and admissions essay",
          "references": "Not required"
        },
        "source": "https://www.wcu.edu/learn/programs/electrical-engineering-bs/index.aspx"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Nicholas Passalacqua",
        "role": "Associate Professor and Forensic Anthropology Program Coordinator",
        "department": "Department of Anthropology and Sociology",
        "subject": "biology",
        "bio": "Dr. Nicholas Passalacqua is a board-certified forensic anthropologist directing research at the FOREST decomposition facility, investigating skeletal trauma analysis and age-at-death estimation."
      },
      {
        "name": "Dr. Martin Tanaka",
        "role": "Associate Professor of Mechanical Engineering",
        "department": "College of Engineering and Technology",
        "subject": "engineering",
        "bio": "Dr. Martin Tanaka investigates biomechanical engineering modeling, smart prosthetic joints, fluid dynamics in human cardiovascular systems, and finite element stress analysis."
      },
      {
        "name": "Dr. Beverly Collins",
        "role": "Professor of Biology",
        "department": "Department of Biology",
        "subject": "environment",
        "bio": "Dr. Beverly Collins researches plant community ecology, forest regeneration dynamics, rare Southern Appalachian plant preservation, and wetland vegetation response to climate disturbances."
      }
    ]
  },

  # 8. Western Connecticut State University (Row 1211)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Western Connecticut State University",
    "shortName": "WCSU",
    "slug": "western-connecticut-state-university",
    "location": "Danbury, Connecticut, United States",
    "website": "https://www.wcsu.edu",
    "sourceRow": 1211,
    "stats": {"established": "1903", "students": "4,400+", "international": "3%", "faculty": "310+"},
    "heroSummary": "Western Connecticut State University (WCSU / WestConn) is an accessible public university founded in 1903, operating two campuses (Midtown and Westside) in Danbury, Connecticut, near the New York metropolitan border. A member of the Connecticut State Colleges and Universities (CSCU) system, WestConn is celebrated for meteorology and operational weather forecasting, nursing, jazz and musical theater, and cybersecurity.",
    "academicOverview": "WCSU comprises four schools: the Macricostas School of Arts and Sciences, Ancell School of Business, School of Professional Studies, and the School of Visual and Performing Arts. The university operates the Weather Center and the Westside Observatory equipped with a 20-inch Ritchey-Chrétien telescope.",
    "researchAdmissions": "Undergraduate admissions evaluate high school graduation credentials, transcripts, and personal statements with test-optional reviews. Graduate admissions require an accredited bachelor's degree with a minimum 2.8–3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Bachelor of Science in Meteorology - Operational Weather Forecasting & Climatology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Macricostas Science Merit Scholarships up to $6,000/year",
        "fee": "$50",
        "tuition": "$20,500/year (out-of-state) / $12,800/year (in-state)",
        "desc": "One of only two meteorology programs in Connecticut, utilizing the WCSU Weather Center to train broadcast and operational meteorologists in Doppler radar analysis, atmospheric thermodynamics, and numerical climate modeling.",
        "requirements": {
          "gpa": "2.8+ high school GPA with precalculus and physics coursework",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and personal statement",
          "references": "One teacher or counselor recommendation"
        },
        "source": "https://www.wcsu.edu/physics/meteorology/"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Psychiatric-Mental Health Nurse Practitioner (PMHNP)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Health Resources and Services Administration (HRSA) Traineeship Grants",
        "fee": "$50",
        "tuition": "$17,200/year",
        "desc": "CCNE-accredited graduate nursing curriculum preparing advanced practice nurses in psychiatric diagnostic assessment, psychopharmacological management, and psychotherapy across inpatient and community settings.",
        "requirements": {
          "gpa": "3.0+ BSN GPA from an accredited nursing school and active RN license",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Resume showing 1+ year clinical RN experience, statement of goals, transcripts",
          "references": "Three professional references"
        },
        "source": "https://www.wcsu.edu/nursing/graduate/"
      },
      {
        "title": "Master of Science in Cybersecurity - Incident Response & Threat Hunting",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Ancell School Technology Assistantships up to $5,000/year",
        "fee": "$50",
        "tuition": "$16,400/year",
        "desc": "Technical cybersecurity master's covering enterprise defense architecture, malware reverse engineering, packet analysis, and ISO/NIST regulatory compliance frameworks.",
        "requirements": {
          "gpa": "2.8+ undergraduate GPA in computer science, MIS, or related quantitative field",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "Not required",
          "papers": "Statement of purpose, resume, official transcripts",
          "references": "Two letters of recommendation"
        },
        "source": "https://www.wcsu.edu/cybersecurity/"
      },
      {
        "title": "Master of Business Administration (MBA) - Healthcare Operations & Strategic Analytics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Ancell Graduate Dean's Scholarships up to $4,500/year",
        "fee": "$50",
        "tuition": "$16,400/year",
        "desc": "AACSB-accredited MBA curriculum delivered at the Westside campus, equipping managers in quantitative financial analysis, healthcare systems administration, and strategic decision making.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA (or 2.8 with GMAT waiver)",
          "ielts": "IELTS 6.5+ or TOEFL 79+",
          "gre": "GMAT/GRE waiver available",
          "papers": "Professional resume, career objectives essay, transcripts",
          "references": "Two recommendations"
        },
        "source": "https://www.wcsu.edu/mba/"
      },
      {
        "title": "Bachelor of Science in Computer Science - Software Development & Embedded Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "WestConn STEM Achievement Scholarships up to $5,000/year",
        "fee": "$50",
        "tuition": "$20,500/year (out-of-state) / $12,800/year (in-state)",
        "desc": "Rigorous undergraduate computer science program providing comprehensive training in C++/Java software engineering, algorithms, Linux operating systems, and web application security.",
        "requirements": {
          "gpa": "2.8+ high school GPA with mathematics readiness",
          "ielts": "IELTS 6.0+ or TOEFL 68+",
          "gre": "Not applicable",
          "papers": "High school transcripts and personal essay",
          "references": "One recommendation letter"
        },
        "source": "https://www.wcsu.edu/cs/"
      },
      {
        "title": "Master of Arts in English - American Literary Studies & Writing Pedagogy",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Departmental Teaching Assistantships covering partial tuition and stipend",
        "fee": "$50",
        "tuition": "$15,200/year",
        "desc": "Advanced humanities degree emphasizing critical theory, American and world literature, rhetorical composition pedagogy, and professional editing.",
        "requirements": {
          "gpa": "3.0+ undergraduate GPA in English, literature, or humanities",
          "ielts": "IELTS 7.0+ or TOEFL 85+",
          "gre": "Not required",
          "papers": "10-15 page analytical critical writing sample, personal statement, transcripts",
          "references": "Two academic recommendations"
        },
        "source": "https://www.wcsu.edu/english/graduate/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Gary S. Lessor",
        "role": "Director of The Weather Center and Adjunct Professor of Meteorology",
        "department": "Department of Physics, Astronomy and Meteorology",
        "subject": "environment",
        "bio": "Dr. Gary Lessor oversees operational meteorological forecasting at the WCSU Weather Center, providing regional severe weather analysis, winter storm track modeling, and forensic meteorological analysis."
      },
      {
        "name": "Dr. Dan Barrett",
        "role": "Associate Professor and Chair of Psychology",
        "department": "Department of Psychology",
        "subject": "social-sciences",
        "bio": "Dr. Dan Barrett investigates social cognition, evolutionary psychology, interpersonal perception, and the cognitive biases influencing jury decision-making."
      },
      {
        "name": "Dr. Joan Palladino",
        "role": "Dean of the School of Professional Studies and Professor of Nursing",
        "department": "Department of Nursing",
        "subject": "biology",
        "bio": "Dr. Joan Palladino researches acute care nursing pedagogy, clinical simulation effectiveness in psychiatric nurse training, and patient safety protocols in emergency clinical settings."
      }
    ]
  }
]
