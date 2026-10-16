# scripts/make_b67_p1_chunk2.py
# Batch 67 Part 1 Chunk 2: Universities 9 to 15

chunk2 = [
  # 9. The University of Texas at Arlington (Row 1018)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Texas at Arlington",
    "shortName": "UT Arlington",
    "slug": "the-university-of-texas-at-arlington",
    "location": "Arlington, Texas, United States",
    "website": "https://www.uta.edu",
    "sourceRow": 1018,
    "stats": {"established": "1895", "students": "41,000+", "international": "8%", "faculty": "2,200+"},
    "heroSummary": "The University of Texas at Arlington (UTA) is a world-class public Carnegie R1 research university located in the heart of the Dallas-Fort Worth metroplex. Generating over $130M in annual research expenditures, UTA is home to the largest nursing program in Texas, the renowned College of Engineering, the Shimadzu Center for Advanced Analytical Chemistry, and the Aerodynamics Research Center.",
    "academicOverview": "UTA comprises nine colleges and schools offering over 180 degree programs. Key research institutes include the Aerodynamics Research Center (operating hypersonic arc-jet wind tunnels), the North Texas Genome Center, the Center for Transportation Equity, Decisions and Dollars (CTEDD), and the Automation & Robotics Research Institute.",
    "researchAdmissions": "Undergraduate admissions evaluate high school curriculum, GPA, and test scores (assured admission for top 25% of Texas classes). Graduate and doctoral applicants require an accredited bachelor's degree with a 3.0+ GPA, program-specific GRE/GMAT scores (waivers available), a statement of research intent, and three letters of recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Aerospace Engineering - Hypersonic Aerodynamics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Aerodynamics Research Center Assistantships with full tuition remission and $32,000 stipend",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Elite doctoral research training utilizing UTA's arc-heated wind tunnel facilities to investigate hypersonic boundary-layer transition, plasma flow control, and scramjet propulsion.",
        "requirements": {"gpa": "BS or MS in aerospace or mechanical engineering with 3.3+ GPA; GRE quantitative 155+", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE scores required", "papers": "Aerospace research statement", "references": "Three letters of recommendation"},
        "source": "https://www.uta.edu/academics/schools-colleges/engineering/academics/departments/mae/degrees/phd-ae"
      },
      {
        "title": "Ph.D. in Computer Science - Artificial Intelligence & Computer Vision",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Graduate Teaching and Research Assistantships up to $30,000/year",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Research-intensive doctoral program exploring deep neural network architectures, robotic perception, biomedical image segmentation, and edge AI compute systems.",
        "requirements": {"gpa": "BS or MS in computer science, software engineering, or related field with 3.2+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE quantitative 155+", "papers": "Statement of computational purpose", "references": "Three academic recommendations"},
        "source": "https://www.uta.edu/academics/schools-colleges/engineering/academics/departments/cse/degrees/phd-cs"
      },
      {
        "title": "Ph.D. in Nursing - Health Disparities & Chronic Disease Interventions",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Nursing and Health Innovation Doctoral Fellowships up to $26,000",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Research doctoral program training nurse scientists to design community-based interventions addressing cardiovascular disparities, maternal health outcomes, and geriatric care delivery.",
        "requirements": {"gpa": "BSN or MSN with 3.3+ GPA; unencumbered active RN license", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Program of research statement", "references": "Three academic/professional letters"},
        "source": "https://www.uta.edu/academics/schools-colleges/conhi/academics/doctoral/phd-nursing"
      },
      {
        "title": "Master of Science in Materials Science and Engineering",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering", "chemistry"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Shimadzu Analytical Center Research Assistantships up to $20,000",
        "fee": "$75",
        "tuition": "$520/credit hour (in-state), $1,150/credit hour (out-of-state)",
        "desc": "Interdisciplinary graduate degree exploring thin-film nanomaterials, 2D semiconductors, polymer nanocomposites, and electron microscopy characterization.",
        "requirements": {"gpa": "Undergraduate degree in engineering, physics, or chemistry with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "GRE quantitative 152+", "papers": "Statement of materials research goals", "references": "Two letters of recommendation"},
        "source": "https://www.uta.edu/academics/schools-colleges/engineering/academics/departments/materials-science"
      },
      {
        "title": "Master of Science in Quantitative Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Departmental Graduate Teaching Assistantships covering tuition plus $16,000 stipend",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Rigorous interdisciplinary program applying mathematical modeling, bioinformatics pipelines, and population genetics statistics to ecological and genomics data.",
        "requirements": {"gpa": "Bachelor's in biology, math, or related field with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Quantitative biology research essay", "references": "Two academic recommendations"},
        "source": "https://www.uta.edu/academics/schools-colleges/science/departments/biology/graduate/quantitative-biology-ms"
      },
      {
        "title": "Aerodynamics Research Center Hypersonic Testing Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$7,000 research stipend, arc-jet hypersonic wind tunnel facility runtime, and laser diagnostics access",
        "fee": "$0",
        "tuition": "Supported through Department of Defense and UTA Aerodynamics Research Endowment",
        "desc": "Prestigious research fellowship conducting optical schlieren imaging, particle image velocimetry, and high-enthalpy thermal boundary layer testing at Mach 5 to Mach 16.",
        "requirements": {"gpa": "Enrolled doctoral student in aerospace engineering with 3.4+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Hypersonic aerodynamics experimental proposal", "references": "ARC faculty investigator letter"},
        "source": "https://www.uta.edu/arc/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jennifer Cowley",
        "role": "President & Professor of Urban Planning",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Jennifer Cowley serves as the 10th president of UT Arlington, an urban planning scholar and smart cities expert who was the first female president of UTA, expanding industry partnerships across DFW."
      },
      {
        "name": "Dr. Frank K. Lu",
        "role": "Professor of Aerospace Engineering & Former Director of ARC",
        "department": "Department of Mechanical and Aerospace Engineering",
        "subject": "engineering",
        "bio": "Dr. Frank Lu is an internationally celebrated expert in hypersonics, shock-wave boundary-layer interactions, pulse detonation engines, and arc-heated plasma wind tunnels."
      },
      {
        "name": "Dr. Kevin A. Schug",
        "role": "Shimadzu Distinguished Professor of Analytical Chemistry",
        "department": "Department of Chemistry and Biochemistry",
        "subject": "chemistry",
        "bio": "Dr. Kevin Schug is an authority on separation sciences and mass spectrometry, researching gas chromatography-vacuum ultraviolet detection, environmental water contaminants, and natural product extraction."
      }
    ]
  },

  # 10. The University of Texas at Austin (Row 1019)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Texas at Austin",
    "shortName": "UT Austin",
    "slug": "the-university-of-texas-at-austin",
    "location": "Austin, Texas, United States",
    "website": "https://www.utexas.edu",
    "sourceRow": 1019,
    "stats": {"established": "1883", "students": "53,000+", "international": "10%", "faculty": "3,100+"},
    "heroSummary": "The University of Texas at Austin is the world-renowned flagship Carnegie R1 public research university of Texas and a member of the Association of American Universities (AAU). Driving over $800M in annual sponsored research, UT Austin is celebrated for the Cockrell School of Engineering, the Dell Medical School, the McCombs School of Business, the College of Natural Sciences, and the Texas Advanced Computing Center (TACC).",
    "academicOverview": "UT Austin comprises 18 colleges and schools. Key research installations include the Texas Advanced Computing Center (housing Frontera and Vista supercomputers), the J.J. Pickle Research Campus, the McDonald Observatory in West Texas, the Marine Science Institute in Port Aransas, and the Energy Institute.",
    "researchAdmissions": "Undergraduate admissions are highly competitive (top 6% Texas auto-admit; holistic review for international and out-of-state). Graduate and doctoral applicants require a recognized bachelor's degree with a 3.0+ GPA, program-specific standardized test scores (GRE/GMAT where required), statement of purpose, CV, and three letters of recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Computer Science - Machine Learning and Autonomous Robotics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Fellowships covering 100% tuition, $38,000 annual living stipend, and TACC supercomputer allocation",
        "fee": "$90",
        "tuition": "Covered by fellowship",
        "desc": "Ranked among the top 10 computer science programs in the world, investigating transformer architectures, reinforcement learning in physical robotics, distributed systems, and quantum algorithms.",
        "requirements": {"gpa": "BS or MS in computer science, mathematics, or related STEM field with 3.6+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE scores optional", "papers": "Research statement and published portfolio", "references": "Three letters of academic recommendation"},
        "source": "https://www.cs.utexas.edu/graduate-program/phd-program"
      },
      {
        "title": "Ph.D. in Electrical and Computer Engineering - Semiconductor Devices & Nanotechnology",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Microelectronics Research Center Fellowships with full tuition remission and $36,000 stipend",
        "fee": "$90",
        "tuition": "Covered by fellowship",
        "desc": "Cutting-edge doctoral training in the Cockrell School of Engineering researching 2D materials, spintronics, neuromorphic integrated circuits, and advanced semiconductor packaging.",
        "requirements": {"gpa": "Degree in electrical engineering, physics, or materials science with 3.5+ GPA", "ielts": "TOEFL 90+ or IELTS 7.0", "gre": "GRE quantitative 160+", "papers": "Statement of purpose in microelectronics", "references": "Three engineering recommendations"},
        "source": "https://www.ece.utexas.edu/academics/graduate"
      },
      {
        "title": "Ph.D. in Physics - Quantum Information & High Energy Theory",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Teaching and Research Assistantships with full tuition waiver and $34,000 annual stipend",
        "fee": "$90",
        "tuition": "Covered by assistantship",
        "desc": "Renowned doctoral physics program exploring quantum error correction, topological quantum computing, string theory, gravitational wave astronomy, and laser-plasma accelerators.",
        "requirements": {"gpa": "BS or MS in physics or mathematics with 3.5+ GPA; GRE physics subject test recommended", "ielts": "TOEFL 90+", "gre": "GRE scores accepted", "papers": "Physics research statement", "references": "Three letters of scientific recommendation"},
        "source": "https://www.ph.utexas.edu/graduate-program"
      },
      {
        "title": "Doctor of Medicine (M.D.) - Innovation and Value-Based Healthcare",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Dell Medical School Merit Scholarships covering up to 100% of four-year medical tuition",
        "fee": "$200 (TMDSAS)",
        "tuition": "$21,500/year (in-state)",
        "desc": "Progressive medical curriculum at Dell Medical School with an accelerated preclinical curriculum, third-year Innovation Discovery year, and clinical clerkships across Dell Seton Medical Center.",
        "requirements": {"gpa": "Undergraduate science GPA 3.6+; competitive MCAT score (514+ median); TMDSAS application", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "TMDSAS essays and Dell Med secondary essays", "references": "Pre-med committee evaluation packet"},
        "source": "https://dellmed.utexas.edu/education/academics/medical-school-degree"
      },
      {
        "title": "Master of Science in Energy and Earth Resources (EER)",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Jackson School of Geosciences Graduate Fellowships up to $25,000",
        "fee": "$90",
        "tuition": "$6,800/semester (in-state), $13,200/semester (out-of-state)",
        "desc": "Interdisciplinary program bridging Jackson School geosciences, energy engineering, public policy, and finance, focusing on clean energy transitions, hydrogen infrastructure, and carbon capture.",
        "requirements": {"gpa": "Bachelor's degree with 3.2+ GPA and quantitative coursework", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "Energy resources statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.jsg.utexas.edu/eer/"
      },
      {
        "title": "Texas Advanced Computing Center (TACC) High-Performance Computing Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "physics", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "$8,000 research stipend, direct access to the Frontera supercomputer node allocations, and HPC mentor pairing",
        "fee": "$0",
        "tuition": "Endowed through NSF Supercomputing Awards and UT Austin TACC",
        "desc": "Elite graduate fellowship executing parallel algorithms, large-scale computational astrophysics simulations, and exascale climate modeling on the nation's premier academic supercomputers.",
        "requirements": {"gpa": "Enrolled doctoral student in STEM with 3.5+ GPA and experience in MPI/CUDA/OpenMP parallel computing", "ielts": "TOEFL 90+", "gre": "Exempt", "papers": "Supercomputing computational research proposal", "references": "TACC senior scientist recommendation"},
        "source": "https://www.tacc.utexas.edu/education/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Jay C. Hartzell",
        "role": "President & Lillian C. Westerveldt Centennial Chair",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Jay Hartzell serves as the 30th president of UT Austin, a prominent financial economist and former dean of the McCombs School of Business who spearheaded historic research growth and campus expansion."
      },
      {
        "name": "Dr. Alan C. Bovik",
        "role": "Cockrell Family Regents Endowed Chair & IEEE Edison Medalist",
        "department": "Department of Electrical and Computer Engineering",
        "subject": "engineering",
        "bio": "Dr. Bovik is a world authority on digital video processing who created the Structural Similarity (SSIM) image metric used globally across Netflix, YouTube, and Apple, receiving an Emmy Award and the IEEE Edison Medal."
      },
      {
        "name": "Dr. Dan Stanzione",
        "role": "Associate Vice President for Research & Executive Director of TACC",
        "department": "Texas Advanced Computing Center (TACC)",
        "subject": "computer-science",
        "bio": "Dr. Dan Stanzione leads TACC, an international leader in high-performance computing who oversaw the design and deployment of the Stampede and Frontera supercomputers for petascale science."
      }
    ]
  },

  # 11. The University of Texas at Dallas (Row 1020)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Texas at Dallas",
    "shortName": "UT Dallas",
    "slug": "the-university-of-texas-at-dallas",
    "location": "Richardson, Texas, United States",
    "website": "https://www.utdallas.edu",
    "sourceRow": 1020,
    "stats": {"established": "1969", "students": "31,500+", "international": "16%", "faculty": "1,500+"},
    "heroSummary": "The University of Texas at Dallas (UT Dallas) is a premier Carnegie R1 public research university located in Richardson, Texas, in the epicenter of the Telecom Corridor. Founded by the founders of Texas Instruments (Eugene McDermott, Cecil Green, and J. Erik Jonsson), UT Dallas is globally renowned for computer science, electrical engineering, cybersecurity, bioengineering, and management science.",
    "academicOverview": "Comprising eight schools, UT Dallas is anchored by the Erik Jonsson School of Engineering and Computer Science, the Naveen Jindal School of Management, and the School of Behavioral and Brain Sciences. Its campus features the Natural Science and Engineering Research Laboratory (NSERL) cleanroom complex, the Texas Analog Center of Excellence (TxACE), and the Center for Applied AI.",
    "researchAdmissions": "Undergraduate admissions evaluate class rank, GPA, and curriculum rigor with strong mathematics preparation. Graduate and doctoral applicants require a baccalaureate degree from an accredited institution with a minimum 3.0 cumulative GPA, competitive GRE/GMAT scores (program-specific waivers available), a statement of purpose, and three letters of recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Computer Science - Cybersecurity & Trustworthy AI",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research and Teaching Assistantships covering full tuition plus $32,000 annual living stipend",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Elite doctoral program within the Erik Jonsson School, investigating binary code analysis, cloud virtualization defenses, privacy-preserving machine learning, and hardware trojan detection.",
        "requirements": {"gpa": "BS or MS in computer science, software engineering, or related field with 3.4+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE quantitative 158+", "papers": "Statement of computational purpose", "references": "Three letters of academic recommendation"},
        "source": "https://cs.utdallas.edu/academics/graduate/phd-computer-science/"
      },
      {
        "title": "Ph.D. in Electrical Engineering - Analog & RF Microelectronics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Texas Analog Center of Excellence (TxACE) Fellowships with tuition coverage plus $34,000 stipend",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Pioneering doctoral research at TxACE exploring millimeter-wave integrated circuits, terahertz transceivers, power management ICs, and silicon photonics.",
        "requirements": {"gpa": "Degree in electrical engineering, computer engineering, or physics with 3.3+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE quantitative 156+", "papers": "Microelectronics research statement", "references": "Three engineering recommendations"},
        "source": "https://ece.utdallas.edu/academics/graduate-programs/phd-ee/"
      },
      {
        "title": "Ph.D. in Biomedical Engineering - Neural Engineering & Bio-Nanomaterials",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental Graduate Research Assistantships up to $30,000/year",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research program collaborating with UT Southwestern Medical Center, investigating vagus nerve stimulation, implantable bioelectronics, and targeted drug delivery polymers.",
        "requirements": {"gpa": "BS or MS in bioengineering, engineering, or biophysics with 3.3+ GPA", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Biomedical research statement", "references": "Three letters of recommendation"},
        "source": "https://bmen.utdallas.edu/academics/graduate-programs/phd-bmen/"
      },
      {
        "title": "Master of Science in Business Analytics (MSBA)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science", "mathematics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Jindal School Dean's Excellence Scholarships up to $10,000",
        "fee": "$50",
        "tuition": "$950/credit hour (in-state), $1,800/credit hour (out-of-state)",
        "desc": "Top-ranked STEM-designated program covering predictive machine learning modeling, big data cloud architectures, healthcare informatics, and marketing optimization.",
        "requirements": {"gpa": "Baccalaureate degree with 3.0+ GPA and calculus/statistics coursework", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GMAT/GRE waiver available for qualified applicants", "papers": "Business analytics statement of goals", "references": "Two letters of recommendation"},
        "source": "https://jindal.utdallas.edu/accounting-finance-analytics/ms-business-analytics/"
      },
      {
        "title": "Ph.D. in Cognition and Neuroscience",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Center for BrainHealth Fellowships with full tuition waiver and $28,000 annual stipend",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Advanced neuroscience doctorate based in the School of Behavioral and Brain Sciences and Center for BrainHealth, investigating cognitive aging, fMRI neuroimaging, and neural plasticity.",
        "requirements": {"gpa": "Undergraduate degree in neuroscience, psychology, or biology with 3.2+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Cognitive neuroscience research goals statement", "references": "Three academic recommendations"},
        "source": "https://bbs.utdallas.edu/degrees/phd-cognition-neuroscience/"
      },
      {
        "title": "Texas Analog Center of Excellence (TxACE) Semiconductor Research Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "$7,500 research stipend, Class-100 cleanroom lithography access, and Texas Instruments corporate mentoring",
        "fee": "$0",
        "tuition": "Supported through Semiconductor Research Corporation (SRC) and TxACE Endowment",
        "desc": "Prestigious research fellowship fabricating energy-efficient integrated analog circuits, high-speed radar sensors, and bio-compatible neural interface chips.",
        "requirements": {"gpa": "Enrolled graduate student in electrical engineering or materials science with 3.4+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Analog circuit fabrication research proposal", "references": "TxACE faculty investigator letter"},
        "source": "https://txace.utdallas.edu/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Richard C. Benson",
        "role": "President & Eugene McDermott Distinguished University Chair",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. Richard Benson serves as president of UT Dallas, a prominent mechanical engineer specializing in flexible structures and mechanics of magnetic storage media who has guided UTD's research growth."
      },
      {
        "name": "Dr. Kenneth O. Kenneth",
        "role": "Director of TxACE & Texas Instruments Distinguished Chair",
        "department": "Texas Analog Center of Excellence (TxACE)",
        "subject": "engineering",
        "bio": "Dr. Kenneth O is a world-renowned analog microelectronics pioneer who established TxACE, holding dozens of patents in RF CMOS integrated circuits, radar on chip, and terahertz imaging."
      },
      {
        "name": "Dr. Bhavani Thuraisingham",
        "role": "Founders Chair Professor of Computer Science & Cybersecurity Pioneer",
        "department": "Department of Computer Science & Cyber Security Research Institute",
        "subject": "computer-science",
        "bio": "Dr. Bhavani Thuraisingham is a Fellow of IEEE, ACM, and AAAS, an internationally celebrated cyber intelligence authority who pioneered secure database systems and cloud data security."
      }
    ]
  },

  # 12. The University of Texas at San Antonio (Row 1021)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Texas at San Antonio",
    "shortName": "UTSA",
    "slug": "the-university-of-texas-at-san-antonio",
    "location": "San Antonio, Texas, United States",
    "website": "https://www.utsa.edu",
    "sourceRow": 1021,
    "stats": {"established": "1969", "students": "34,800+", "international": "5%", "faculty": "1,450+"},
    "heroSummary": "The University of Texas at San Antonio (UTSA) is an elite Carnegie R1 public research university and designated Hispanic-Serving Institution (HSI) located in San Antonio, Texas. Globally celebrated as a national powerhouse in cybersecurity, cloud computing, and data science, UTSA houses the National Security Collaboration Center (NSCC) and the School of Data Science, driving over $150M in annual research expenditures.",
    "academicOverview": "UTSA delivers accredited academic programs across seven colleges, including the Klesse College of Engineering and Integrated Design, the College of Sciences, and the Carlos Alvarez College of Business. Key research facilities include the Cybersecurity Manufacturing Innovation Institute (CyManII), the Brain Health Consortium, and the Center for Advanced Measurements in Extreme Environments (CAMEE).",
    "researchAdmissions": "Undergraduate admissions evaluate high school curriculum, rank, and test scores (guaranteed admission for top 25% of Texas high schools; test-optional). Graduate applicants require an accredited bachelor's degree with a 3.0+ GPA, program-specific GRE/GMAT scores (waivers available), professional statement, and letters of recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Computer Science - Cloud Security and Cyber Intelligence",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "National Security Collaboration Center Fellowships covering full tuition plus $32,000 annual research stipend",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Elite doctoral program inside UTSA's downtown School of Data Science and NSCC, researching secure cloud virtualization, cryptographic authentication, industrial IoT defenses, and adversarial machine learning.",
        "requirements": {"gpa": "BS or MS in computer science, computer engineering, or related discipline with 3.3+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE quantitative 155+", "papers": "Cybersecurity research objectives statement", "references": "Three letters of academic recommendation"},
        "source": "https://www.utsa.edu/cs/graduate/phd.html"
      },
      {
        "title": "Ph.D. in Mechanical Engineering - Advanced Materials in Extreme Environments",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NASA CAMEE Graduate Research Assistantships covering tuition plus $30,000 stipend",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research program studying thermal protection systems for space reentry, hypersonic aero-thermodynamics, composite materials fatigue, and computational fluid mechanics.",
        "requirements": {"gpa": "Degree in mechanical or aerospace engineering with 3.2+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE scores required", "papers": "Mechanical engineering statement of research", "references": "Three engineering recommendations"},
        "source": "https://klesse.utsa.edu/mechanical/graduate/phd.html"
      },
      {
        "title": "Ph.D. in Cellular and Molecular Biology - Neurobiology and Infectious Diseases",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Brain Health Consortium Fellowships with full tuition remission and $28,000 living stipend",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Interdisciplinary laboratory doctorate investigating neural circuitry disorders, fungal pathogen virulence, regenerative stem cell therapy, and biodefense vaccine development.",
        "requirements": {"gpa": "Bachelor's degree in biological sciences, biochemistry, or microbiology with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Molecular biology research statement", "references": "Three scientific letters of recommendation"},
        "source": "https://sciences.utsa.edu/integrative-biology/graduate/phd.html"
      },
      {
        "title": "Master of Science in Artificial Intelligence",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "School of Data Science Merit Grants up to $8,000",
        "fee": "$60",
        "tuition": "$510/credit hour (in-state), $1,100/credit hour (out-of-state)",
        "desc": "Comprehensive graduate program in the downtown School of Data Science, covering deep learning architectures, computer vision, natural language processing, and ethical autonomous decision systems.",
        "requirements": {"gpa": "Bachelor's degree in computer science, data science, engineering, or mathematics with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE optional for 3.2+ GPA", "papers": "AI career purpose statement", "references": "Two academic recommendations"},
        "source": "https://sds.utsa.edu/academic-programs/ms-ai/"
      },
      {
        "title": "Master of Science in Information Technology - Cyber Security Concentration",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Carlos Alvarez College Cyber Fellowships up to $6,000",
        "fee": "$60",
        "tuition": "$510/credit hour",
        "desc": "AACSB-accredited graduate program consistently ranked the #1 cybersecurity program in the nation by Ponemon Institute, focusing on intrusion detection, digital forensics, and enterprise cyber risk management.",
        "requirements": {"gpa": "Bachelor's degree with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Cybersecurity professional statement", "references": "Two professional/academic recommendations"},
        "source": "https://business.utsa.edu/programs/ms-information-technology/"
      },
      {
        "title": "National Security Collaboration Center (NSCC) Defense Intelligence Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$6,500 stipend, high-security cyber-range access, and direct federal intelligence agency mentor pairing",
        "fee": "$0",
        "tuition": "Funded through US Department of Homeland Security and UTSA NSCC Endowment",
        "desc": "Competitive research fellowship operating inside the secure National Security Collaboration Center, conducting live cyber-threat intelligence feeds, automated vulnerability hunts, and zero-trust protocol audits.",
        "requirements": {"gpa": "US Citizen, enrolled graduate student in cybersecurity or computer science with 3.4+ GPA", "ielts": "Exempt", "gre": "Exempt", "papers": "National security cyber defense research proposal", "references": "NSCC faculty director recommendation"},
        "source": "https://www.utsa.edu/nscc/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Taylor Eighmy",
        "role": "President & Professor of Civil and Environmental Engineering",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. Taylor Eighmy is the sixth president of UTSA, an environmental engineer and former vice chancellor for research at UT Knoxville who led UTSA to achieve Carnegie R1 classification."
      },
      {
        "name": "Dr. Ravi Sandhu",
        "role": "Executive Director of Institute for Cyber Security & IEEE Fellow",
        "department": "Department of Computer Science & ICS",
        "subject": "computer-science",
        "bio": "Dr. Ravi Sandhu is an internationally recognized pioneer in information security who formulated the Role-Based Access Control (RBAC) standard, holding the Lutcher Brown Endowed Chair in Cyber Security."
      },
      {
        "name": "Dr. David Akopian",
        "role": "Associate Dean & Professor of Electrical and Computer Engineering",
        "department": "Klesse College of Engineering and Integrated Design",
        "subject": "engineering",
        "bio": "Dr. Akopian is an IEEE Fellow researching wireless communication systems, satellite positioning GPS architectures, indoor mobile navigation, and biomedical telemetry sensors."
      }
    ]
  },

  # 13. The University of Texas Rio Grande Valley (Row 1022)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Texas Rio Grande Valley",
    "shortName": "UTRGV",
    "slug": "the-university-of-texas-rio-grande-valley",
    "location": "Edinburg, Texas, United States",
    "website": "https://www.utrgv.edu",
    "sourceRow": 1022,
    "stats": {"established": "2013", "students": "32,400+", "international": "4%", "faculty": "1,400+"},
    "heroSummary": "The University of Texas Rio Grande Valley (UTRGV) is a premier public research institution and one of the largest Hispanic-Serving Institutions (HSIs) in the United States, operating vibrant campuses across Edinburg, Brownsville, and South Padre Island. Acclaimed for its innovative School of Medicine, the STARGATE space communications facility (partnering with SpaceX Starbase), and coastal marine science, UTRGV drives transformative health and aerospace innovation.",
    "academicOverview": "UTRGV comprises 11 colleges and schools, including the School of Medicine, the College of Engineering and Computer Science, and the School of Earth, Environmental, and Marine Sciences (SEEMS). Research flagships include the South Texas Diabetes and Obesity Institute (STDOI), STARGATE space radiofrequency center, and the Coastal Studies Laboratory.",
    "researchAdmissions": "Undergraduate admissions evaluate high school class rank and GPA (assured admission for top 25% of Texas classes). Graduate and professional admissions require an accredited bachelor's degree with a 3.0+ GPA, program-specific entrance examinations, letters of recommendation, and personal statements.",
    "opps": [
      {
        "title": "Doctor of Medicine (M.D.) - South Texas Border Health Track",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "UTRGV School of Medicine Tuition Scholarships up to full tuition remission",
        "fee": "$200 (TMDSAS)",
        "tuition": "$19,800/year (in-state)",
        "desc": "LCME-accredited medical doctorate training physician-leaders through early clinical rotations in colonias and regional health systems, focusing on diabetes, non-alcoholic fatty liver disease, and border health.",
        "requirements": {"gpa": "Undergraduate science GPA 3.4+; competitive MCAT; TMDSAS application", "ielts": "Exempt for US degree holders", "gre": "MCAT required", "papers": "TMDSAS essays and UTRGV secondary application", "references": "Pre-med committee evaluation packet"},
        "source": "https://www.utrgv.edu/school-of-medicine/admissions/"
      },
      {
        "title": "Ph.D. in Physics - Gravitational Wave Astronomy & Space Radio Science",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Center for Advanced Radio Astronomy Assistantships with full tuition waiver and $28,000 stipend",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Elite astrophysics doctorate partnering directly with the LIGO Scientific Collaboration and STARGATE, researching pulsar timing arrays, gravitational wave data analysis, and space telemetry.",
        "requirements": {"gpa": "BS or MS in physics, astronomy, or mathematics with 3.2+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE scores recommended", "papers": "Astrophysics research proposal", "references": "Three scientific letters of recommendation"},
        "source": "https://www.utrgv.edu/physics/graduate/phd/index.htm"
      },
      {
        "title": "Ph.D. in Human Genetics - Complex Disease and Metabolic Genomics",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "chemistry"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "South Texas Diabetes and Obesity Institute (STDOI) Fellowships providing $30,000 annual stipend",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Interdisciplinary doctoral program investigating genetic epidemiology, type 2 diabetes susceptibility loci, lipidomics, and statistical genomics in Mexican American populations.",
        "requirements": {"gpa": "Bachelor's or Master's in biology, genetics, or bioinformatics with 3.2+ GPA", "ielts": "TOEFL 79+", "gre": "Optional", "papers": "Genetics research statement", "references": "Three letters of recommendation"},
        "source": "https://www.utrgv.edu/som/departments/human-genetics/education/phd/"
      },
      {
        "title": "Master of Science in Ocean, Coastal, and Earth Sciences",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Coastal Studies Laboratory Graduate Assistantships up to $16,000",
        "fee": "$50",
        "tuition": "$450/credit hour (in-state), $880/credit hour (out-of-state)",
        "desc": "Hands-on graduate curriculum utilizing South Padre Island research facilities to investigate Laguna Madre hypersaline lagoon dynamics, sea turtle nesting, and red tide algal blooms.",
        "requirements": {"gpa": "Undergraduate degree in environmental science, biology, or geology with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Coastal science research essay", "references": "Two academic recommendations"},
        "source": "https://www.utrgv.edu/seems/graduate-programs/ms-ocean-coastal-earth-sciences/"
      },
      {
        "title": "Master of Science in Computer Science - Autonomous Systems & Robotics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Engineering Graduate Teaching Assistantships covering tuition plus $14,000 stipend",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Advanced computer science degree exploring computer vision for aerospace applications, robot operating systems (ROS), cloud databases, and machine learning algorithms.",
        "requirements": {"gpa": "Bachelor's degree in computer science or related field with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of computational goals", "references": "Two letters of recommendation"},
        "source": "https://www.utrgv.edu/csec/graduate/ms-computer-science/"
      },
      {
        "title": "STARGATE Commercial Space Exploration & Telemetry Fellowship",
        "type": "Fellowship",
        "subject": "physics",
        "subjects": ["physics", "engineering", "computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$6,000 summer research stipend, custom phased-array antenna lab access, and SpaceX orbital launch telemetry observations",
        "fee": "$0",
        "tuition": "Funded through Texas Emerging Technology Fund and UTRGV STARGATE Center",
        "desc": "Competitive space science fellowship developing next-generation phased-array tracking algorithms, deep space radio communications, and satellite trajectory analysis adjacent to Starbase.",
        "requirements": {"gpa": "Enrolled graduate student in physics, electrical engineering, or aerospace with 3.3+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Space communications research proposal", "references": "STARGATE faculty investigator recommendation"},
        "source": "https://www.utrgv.edu/stargate/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Guy Bailey",
        "role": "President & Sociolinguist",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Guy Bailey serves as the founding president of UTRGV, an eminent sociolinguist and former president of Texas Tech University and the University of Alabama who unified UT Pan American and UT Brownsville."
      },
      {
        "name": "Dr. Fredrick A. Jenet",
        "role": "Founder and Director of STARGATE & Professor of Physics",
        "department": "Department of Physics and Astronomy & STARGATE",
        "subject": "physics",
        "bio": "Dr. Fredrick Jenet is an astrophysicist who founded STARGATE and the Center for Advanced Radio Astronomy, pioneering pulsar timing arrays to detect low-frequency gravitational waves."
      },
      {
        "name": "Dr. Sarah Williams-Blangero",
        "role": "Director of STDOI & H-E-B Distinguished Chair in Diabetes and Genomics",
        "department": "South Texas Diabetes and Obesity Institute (STDOI)",
        "subject": "biology",
        "bio": "Dr. Williams-Blangero is a genetic epidemiologist who leads STDOI, directing massive genomic cohort studies on diabetes, metabolic syndrome, and fatty liver disease in South Texas."
      }
    ]
  },

  # 14. The University of Tulsa (Row 1023)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of Tulsa",
    "shortName": "University of Tulsa",
    "slug": "the-university-of-tulsa",
    "location": "Tulsa, Oklahoma, United States",
    "website": "https://utulsa.edu",
    "sourceRow": 1023,
    "stats": {"established": "1894", "students": "3,800+", "international": "11%", "faculty": "340+"},
    "heroSummary": "The University of Tulsa (TU) is a premier private Carnegie R2 research university located in Tulsa, Oklahoma. Nationally celebrated for its world-leading McDougall School of Petroleum Engineering, the Cyber Corps cybersecurity initiative (designated a National Center of Academic Excellence in Information Assurance), and the College of Law, TU is a powerhouse in energy, cyber defense, and applied science.",
    "academicOverview": "TU operates five colleges: the College of Engineering and Computer Science, the Kendall College of Arts and Sciences, the Collins College of Business, the Oxley College of Health Sciences, and the College of Law. Key research centers include the Tulsa University Separation Technology Projects (TUSTP), the Cyber Security Information Research Center, and the Gilcrease Museum research collections.",
    "researchAdmissions": "Undergraduate admissions are selective, evaluating high school academic rigor, GPA, standardized test scores (test-optional available), and leadership. Graduate and doctoral programs require an accredited bachelor's degree with a 3.0+ GPA, program-specific GRE/GMAT scores (waivers available), statement of purpose, and three letters of recommendation.",
    "opps": [
      {
        "title": "Ph.D. in Petroleum Engineering - Subsurface Fluid Flow & Carbon Storage",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "TU Drilling & Petroleum Industry Consortia Fellowships covering 100% tuition plus $32,000 annual stipend",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "World-renowned petroleum engineering program utilizing multiphase flow loops and high-pressure drilling simulation labs to research carbon capture and sequestration (CCS), hydrogen storage, and hydraulic fracturing geomechanics.",
        "requirements": {"gpa": "BS or MS in petroleum, mechanical, chemical, or civil engineering with 3.3+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE quantitative 156+", "papers": "Petroleum research objectives statement", "references": "Three letters of academic recommendation"},
        "source": "https://engineering.utulsa.edu/petroleum-engineering/graduate-program/"
      },
      {
        "title": "Ph.D. in Computer Science - Cyber Operations & Hardware Security",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NSF CyberCorps Scholarship for Service Fellowships providing full tuition and $34,000 annual stipend",
        "fee": "$60",
        "tuition": "Covered by fellowship",
        "desc": "Elite NSA/DHS-designated cyber defense doctoral program investigating SCADA industrial control security, automotive electronic control unit (ECU) exploitation, and firmware reverse engineering.",
        "requirements": {"gpa": "Degree in computer science or computer engineering with 3.3+ GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "GRE scores recommended", "papers": "Cybersecurity research proposal", "references": "Three letters of recommendation"},
        "source": "https://engineering.utulsa.edu/computer-science/graduate-program/"
      },
      {
        "title": "Juris Doctor (J.D.) - Sustainable Energy and Resources Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "TU College of Law Energy Scholars Grants covering up to 100% tuition",
        "fee": "$0",
        "tuition": "$27,900/year",
        "desc": "Preeminent energy law curriculum exploring mineral title examination, oil and gas leases, renewable energy regulatory compliance, and international energy arbitration.",
        "requirements": {"gpa": "Undergraduate GPA 3.3+; competitive LSAT score (155+ median); LSAC CAS report", "ielts": "TOEFL 90+", "gre": "LSAT or GRE accepted", "papers": "Personal statement and legal career goals", "references": "Two letters of recommendation"},
        "source": "https://law.utulsa.edu/admissions/"
      },
      {
        "title": "Master of Science in Mechanical Engineering - Robotics & Biomechanics",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Graduate Teaching Assistantships covering tuition plus $18,000 stipend",
        "fee": "$60",
        "tuition": "Covered by assistantship",
        "desc": "Hands-on graduate engineering degree covering prosthetic limb design, multi-body kinematics, autonomous robotic navigation, and thermal-fluid transport phenomena.",
        "requirements": {"gpa": "ABET-accredited BS in mechanical engineering with 3.0+ GPA", "ielts": "TOEFL 80+", "gre": "GRE quantitative 153+", "papers": "Statement of engineering research", "references": "Two engineering faculty recommendations"},
        "source": "https://engineering.utulsa.edu/mechanical-engineering/graduate-program/"
      },
      {
        "title": "Bachelor of Science in Chemical Engineering - Refining & Bio-Energy",
        "type": "Degree",
        "subject": "chemistry",
        "subjects": ["chemistry", "engineering"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "TU Presidential Scholarships up to $26,000/year",
        "fee": "$0",
        "tuition": "$45,600/year",
        "desc": "Rigorous undergraduate program preparing process engineers in chemical reactor modeling, catalysis, carbon management, and industrial separations in the Mid-Continent energy corridor.",
        "requirements": {"gpa": "High school GPA 3.5+ with chemistry and calculus readiness", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Common Application essay", "references": "Two teacher recommendations"},
        "source": "https://engineering.utulsa.edu/chemical-engineering/"
      },
      {
        "title": "TU Cyber Security Information Research Center Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "$7,000 summer research stipend, hardware testbed lab access, and defense agency internship pathway",
        "fee": "$0",
        "tuition": "Funded through Cyber Security Information Research Center Endowment",
        "desc": "Elite research fellowship analyzing zero-day vulnerabilities in critical infrastructure pipeline telemetry, electric substation smart meters, and autonomous vehicle CAN bus protocols.",
        "requirements": {"gpa": "Enrolled graduate or upper-division student in computer science or electrical engineering with 3.4+ GPA", "ielts": "TOEFL 80+", "gre": "Exempt", "papers": "Cyber vulnerability research proposal", "references": "TU Cyber Corps faculty mentor letter"},
        "source": "https://engineering.utulsa.edu/cyber-corps/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Brad R. Carson",
        "role": "President & Professor of Law and Public Policy",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Brad Carson serves as president of The University of Tulsa, a Rhodes Scholar, former US Congressman, former Under Secretary of the Army, and national authority on national security policy."
      },
      {
        "name": "Dr. Suhash Ghosh",
        "role": "Professor of Computer Science & Cyber Security Researcher",
        "department": "Department of Computer Science & Cyber Corps",
        "subject": "computer-science",
        "bio": "Dr. Ghosh is an expert in digital forensics, embedded systems security, and hardware attack mitigation, leading multiple federal research grants for critical infrastructure protection."
      },
      {
        "name": "Dr. Cem Sarica",
        "role": "F.H. 'Mick' Merelli/Cimarex Energy Professor of Petroleum Engineering",
        "department": "McDougall School of Petroleum Engineering",
        "subject": "engineering",
        "bio": "Dr. Cem Sarica is an internationally celebrated authority on multiphase flow in pipes, flow assurance, and paraffin deposition, directing TU's Fluid Flow Projects (TUFFP) consortium."
      }
    ]
  },

  # 15. The University of West Alabama (Row 1024)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "The University of West Alabama",
    "shortName": "University of West Alabama",
    "slug": "the-university-of-west-alabama",
    "location": "Livingston, Alabama, United States",
    "website": "https://www.uwa.edu",
    "sourceRow": 1024,
    "stats": {"established": "1835", "students": "5,700+", "international": "3%", "faculty": "280+"},
    "heroSummary": "The University of West Alabama (UWA) is a historic public regional university located in Livingston, Alabama, in the heart of the fertile Black Belt region. Renowned for its Julia Tutwiler College of Education, the College of Natural Sciences and Mathematics, and the Black Belt Museum, UWA is acclaimed for environmental conservation biology, rural educator preparation, and community economic development.",
    "academicOverview": "UWA delivers undergraduate and graduate education through five colleges: Natural Sciences and Mathematics, Liberal Arts, Business and Technology, the Julia Tutwiler College of Education, and the Division of Online Programs. Its 600-acre campus houses the Cahaba River biodiversity research stations, the Black Belt Museum paleontology collections, and the Center for the Study of the Black Belt.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.0) and standardized test scores (test-optional available). Graduate programs require an accredited bachelor's degree with a 2.75+ GPA (3.0+ on last 60 hours), statement of purpose, and two professional or academic letters of recommendation.",
    "opps": [
      {
        "title": "Master of Science in Conservation Biology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Black Belt Environmental Assistantships covering tuition plus $14,000 stipend",
        "fee": "$30",
        "tuition": "Covered by assistantship",
        "desc": "Hands-on graduate field program utilizing Alabama's biodiverse river networks for endangered freshwater mussel restoration, wetland ecology, herpetological surveys, and wildlife habitat management.",
        "requirements": {"gpa": "Undergraduate degree in biology, ecology, or related science with 3.0+ GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE optional", "papers": "Conservation research proposal", "references": "Two academic recommendations"},
        "source": "https://www.uwa.edu/academics/college-of-natural-sciences-and-mathematics/department-of-biological-and-environmental-sciences/ms-conservation-biology/"
      },
      {
        "title": "Master of Education (M.Ed.) in Rural Education and Leadership",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Julia Tutwiler Teacher Grants up to $5,000",
        "fee": "$30",
        "tuition": "$450/credit hour",
        "desc": "CAEP-accredited graduate program equipping educators with progressive strategies for curriculum development, trauma-informed pedagogy, and administrative leadership in rural school districts.",
        "requirements": {"gpa": "Accredited bachelor's degree with active teaching certificate and 2.75+ GPA", "ielts": "TOEFL 79+", "gre": "Not required", "papers": "Philosophy of rural education essay", "references": "Two administrator references"},
        "source": "https://www.uwa.edu/academics/julia-tutwiler-college-of-education/department-of-instructional-leadership-and-support/med-instructional-leadership/"
      },
      {
        "title": "Bachelor of Science in Environmental Science - Natural Resource Management",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "UWA Trustee Merit Scholarships up to $10,000/year",
        "fee": "$0",
        "tuition": "$9,100/year (in-state), $18,200/year (out-of-state)",
        "desc": "Field-oriented undergraduate program providing practical training in geographic information systems (GIS), forestry ecology, water quality testing, and environmental soil chemistry.",
        "requirements": {"gpa": "High school GPA 2.5+ with laboratory science courses", "ielts": "TOEFL 71+", "gre": "Exempt", "papers": "Personal career goals essay", "references": "One counselor recommendation"},
        "source": "https://www.uwa.edu/academics/college-of-natural-sciences-and-mathematics/department-of-biological-and-environmental-sciences/bs-environmental-science/"
      },
      {
        "title": "Master of Business Administration (MBA) in Rural Economic Development",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Black Belt Economic Development Fellowships up to $4,500",
        "fee": "$30",
        "tuition": "$450/credit hour",
        "desc": "ACBSP-accredited business curriculum exploring agribusiness finance, rural enterprise incubation, supply chain logistics, and municipal economic stimulus strategies.",
        "requirements": {"gpa": "Bachelor's degree in any discipline with 2.75+ GPA", "ielts": "TOEFL 79+", "gre": "GMAT/GRE not required", "papers": "Statement of business leadership goals", "references": "Two professional references"},
        "source": "https://www.uwa.edu/academics/college-of-business-and-technology/department-of-business-administration/mba/"
      },
      {
        "title": "Bachelor of Science in Computer Information Systems - Cyber Defense",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Technology Dean's Scholarships up to $6,000/year",
        "fee": "$0",
        "tuition": "$9,100/year (in-state)",
        "desc": "Applied technical curriculum preparing students in network administration, intrusion defense, relational database architecture, and web application programming.",
        "requirements": {"gpa": "High school GPA 2.5+ with algebra readiness", "ielts": "TOEFL 71+", "gre": "Exempt", "papers": "Statement of interest", "references": "One teacher recommendation"},
        "source": "https://www.uwa.edu/academics/college-of-business-and-technology/department-of-computer-information-systems/bs-cis/"
      },
      {
        "title": "Black Belt Museum Cretaceous Paleontology & Fossil Science Fellowship",
        "type": "Fellowship",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "$4,000 summer research stipend, field excavation equipment, and museum specimen curation access",
        "fee": "$0",
        "tuition": "Supported through Black Belt Museum Research Endowment",
        "desc": "Competitive research fellowship excavating Late Cretaceous mosasaur and plesiosaur marine reptile fossils from the Mooreville Chalk formations of western Alabama.",
        "requirements": {"gpa": "Enrolled undergraduate or graduate student in geology, biology, or environmental science with 3.0+ GPA", "ielts": "TOEFL 79+", "gre": "Exempt", "papers": "Paleontological field excavation proposal", "references": "Museum curator recommendation"},
        "source": "https://www.uwa.edu/blackbeltmuseum/fellowships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Ken Tucker",
        "role": "President & Professor of Business Administration",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Ken Tucker serves as the president of The University of West Alabama, an experienced higher education administrator who has led major institutional enrollment growth and rural development partnerships."
      },
      {
        "name": "Dr. John McCall",
        "role": "Professor of Biology & Director of Black Belt Museum",
        "department": "Department of Biological and Environmental Sciences",
        "subject": "biology",
        "bio": "Dr. John McCall is a freshwater biologist and paleontologist who leads the Black Belt Museum, conducting extensive field research on Black Belt biodiversity and Cretaceous marine vertebrates."
      },
      {
        "name": "Dr. Jeffrey Merida",
        "role": "Chair & Associate Professor of Natural Sciences",
        "department": "Department of Biological and Environmental Sciences",
        "subject": "biology",
        "bio": "Dr. Merida conducts research on environmental physiology, cellular toxicology of aquatic organisms, and undergraduate experiential learning models in the rural South."
      }
    ]
  }
]
