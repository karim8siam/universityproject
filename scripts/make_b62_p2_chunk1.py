# scripts/make_b62_p2_chunk1.py
# Batch 62 Part 2 Chunk 1: Universities 16 to 23

chunk1 = [
  # 16. New Jersey Institute of Technology (Row 854)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "New Jersey Institute of Technology",
    "shortName": "NJIT",
    "slug": "new-jersey-institute-of-technology-newark",
    "location": "Newark, New Jersey, United States",
    "website": "https://www.njit.edu",
    "sourceRow": 854,
    "stats": {"established": "1881", "students": "12,500+", "international": "11%", "faculty": "800+"},
    "heroSummary": "New Jersey Institute of Technology is a top-tier public Carnegie R1 doctoral research university in Newark, New Jersey. Celebrated worldwide for computing, civil infrastructure, biomedical engineering, data science, and solar physics research.",
    "academicOverview": "NJIT houses the Newark College of Engineering, Ying Wu College of Computing, and the Big Bear Solar Observatory in California. It conducts over $165M in annual research in smart materials, additive manufacturing, artificial intelligence, and cybersecurity.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (average 3.6), calculus readiness, and STEM rigor under test-optional review. Graduate degree admissions require an accredited bachelor's degree in engineering, CS, or physical science with minimum 3.0 GPA and letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Philosophy in Computer Science (AI and Systems)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027 (Fall Priority)",
        "funding": "Doctoral Graduate Research Assistantship with $32,000 annual living stipend, full tuition waiver, and subsidized health insurance",
        "fee": "$75",
        "tuition": "$0 (Doctoral fellow funded)",
        "desc": "Elite Carnegie R1 doctoral curriculum investigating distributed deep learning, federated cybersecurity algorithms, quantum computing models, and high-performance computing architectures.",
        "requirements": {"gpa": "Bachelor's or Master's degree in CS or related STEM field with min. 3.5 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Quantitative score 160+ recommended", "papers": "Comprehensive research proposal in computing", "references": "Three letters from academic mentors"},
        "source": "https://cs.njit.edu/phd-computer-science"
      },
      {
        "title": "Doctor of Philosophy in Biomedical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "NIH/NSF-backed research fellowships with $30,000 annual stipend and 100% tuition remission",
        "fee": "$75",
        "tuition": "$0 (Fully funded doctoral candidate)",
        "desc": "Translational engineering research in neural prosthetic interfaces, musculoskeletal biomechanics, biomaterials for tissue regeneration, and orthopedic diagnostic devices.",
        "requirements": {"gpa": "BS or MS in biomedical engineering, mechanical engineering, or biophysics with min. 3.4 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE quantitative score >= 158", "papers": "Statement of biomedical engineering research goals", "references": "Three letters from engineering faculty"},
        "source": "https://biomedical.njit.edu/academics/graduate/phd/"
      },
      {
        "title": "Master of Science in Data Science (Computational Track)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Ying Wu College Dean's Merit Scholarships providing up to $10,000 per academic year",
        "fee": "$75",
        "tuition": "$1,250/credit hour (In-state) / $1,850/credit hour (Out-of-state)",
        "desc": "Rigorous STEM curriculum spanning machine learning theory, high-dimensional statistical inference, big data pipelines (Spark/Hadoop), and neural networks.",
        "requirements": {"gpa": "BS in computer science, mathematics, or engineering with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional for domestic, recommended for international", "papers": "Statement of computational objectives", "references": "Two letters of recommendation"},
        "source": "https://ds.njit.edu/ms-data-science"
      },
      {
        "title": "Master of Science in Civil Engineering (Resilient Infrastructure)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Departmental Graduate Teaching Assistantships covering tuition waiver plus $18,000 annual stipend",
        "fee": "$75",
        "tuition": "$1,250/credit hour (In-state) / $1,850/credit hour (Out-of-state)",
        "desc": "Advanced study in seismic-resistant structural design, intelligent transportation systems, smart concrete composites, and coastal storm surge modeling.",
        "requirements": {"gpa": "BS in civil or structural engineering with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Engineering resume and statement of intent", "references": "Two academic recommendations"},
        "source": "https://civil.njit.edu/academics/graduate/ms/"
      },
      {
        "title": "Bachelor of Science in Electrical Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NJIT Highlander Merit Scholarships awarding up to $16,000/year renewable",
        "fee": "$75",
        "tuition": "$18,500/year (In-state) / $35,200/year (Out-of-state)",
        "desc": "ABET-accredited program covering semiconductor device physics, photonics, wireless communications, RF circuit design, and autonomous robotics.",
        "requirements": {"gpa": "High school GPA >= 3.5 with AP calculus and physics", "ielts": "TOEFL 79+ or IELTS 6.0", "gre": "Exempt", "papers": "Common Application essay and NJIT supplement", "references": "Two STEM teacher recommendations"},
        "source": "https://ece.njit.edu/undergraduate"
      },
      {
        "title": "Albert Dorman Honors College Full-Ride Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition, campus housing, and summer research fellowship ($42,000/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full scholarship)",
        "desc": "The premier honors fellowship awarded to top incoming STEM scholars, providing customized research colloquia, executive mentoring, and industry internships.",
        "requirements": {"gpa": "Unweighted high school GPA >= 3.85 with ACT >= 32 or SAT >= 1430", "ielts": "Exempt", "gre": "Exempt", "papers": "Honors College competitive essays and interview", "references": "Three letters from STEM instructors"},
        "source": "https://honors.njit.edu/admissions"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Teik C. Lim",
        "role": "President and Distinguished Professor of Mechanical Engineering",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. Teik C. Lim serves as President of NJIT, an internationally recognized engineer specializing in structural acoustics, vibro-impact dynamics, and additive manufacturing."
      },
      {
        "name": "Dr. Haimin Wang",
        "role": "Distinguished Professor of Physics and Director of Space Weather Research",
        "department": "Department of Physics",
        "subject": "physics",
        "bio": "Dr. Haimin Wang directs the Center for Solar-Terrestrial Research and Big Bear Solar Observatory, conducting pioneering investigations into solar flare eruptions and space weather."
      },
      {
        "name": "Dr. Atam P. Dhawan",
        "role": "Senior Vice Provost for Research and Distinguished Professor of Electrical & Computer Engineering",
        "department": "Department of Electrical and Computer Engineering",
        "subject": "engineering",
        "bio": "Dr. Atam Dhawan holds numerous patents in optical medical imaging, point-of-care biophotonics sensors, and artificial intelligence-based pattern recognition for melanoma diagnosis."
      }
    ]
  },

  # 17. New Mexico Institute of Mining and Technology (Row 855)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "New Mexico Institute of Mining and Technology",
    "shortName": "New Mexico Tech",
    "slug": "new-mexico-institute-of-mining-and-technology-socorro",
    "location": "Socorro, New Mexico, United States",
    "website": "https://www.nmt.edu",
    "sourceRow": 855,
    "stats": {"established": "1889", "students": "1,800+", "international": "8%", "faculty": "150+"},
    "heroSummary": "New Mexico Institute of Mining and Technology (New Mexico Tech) is a world-renowned public STEM research university in Socorro, New Mexico. Known internationally for energetic materials testing, hydrology, astrophysics at the VLA, and petroleum recovery.",
    "academicOverview": "New Mexico Tech operates the Energetic Materials Research and Testing Center (EMRTC), Langmuir Laboratory for Atmospheric Research, and the Magdalena Ridge Observatory. It is an epicenter for explosive engineering and geophysical research.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5; 3.0+ recommended for engineering) with strong precalculus and science scores. Graduate programs require an accredited STEM bachelor's degree with 3.0 GPA and faculty sponsorship.",
    "opps": [
      {
        "title": "Doctor of Philosophy in Hydrology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research Assistantships with $27,000 annual living stipend and 100% tuition coverage",
        "fee": "$45",
        "tuition": "$0 (Fully funded doctoral assistant)",
        "desc": "One of the premier hydrology programs in the world, addressing groundwater contaminant transport, karst aquifer hydrogeology, arid basin water budgets, and computational fluid mechanics.",
        "requirements": {"gpa": "BS or MS in geoscience, civil engineering, or environmental science with min. 3.25 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Quantitative >= 158", "papers": "Hydrology research prospectus", "references": "Three letters from science/engineering faculty"},
        "source": "https://www.nmt.edu/academics/ees/grad/hydrology.php"
      },
      {
        "title": "Master of Science in Mechanical Engineering (Explosives Engineering Track)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "EMRTC DoD research project stipends providing up to $22,000 per year plus tuition remission",
        "fee": "$45",
        "tuition": "$5,200/year (In-state) / $15,800/year (Out-of-state)",
        "desc": "Unique worldwide program utilizing the 40-square-mile field testing range to study detonation shock waves, blast mitigation armor, pyrotechnics, and ballistics.",
        "requirements": {"gpa": "BS in mechanical, mining, or chemical engineering with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Statement of research interests in energetics", "references": "Two letters from engineering mentors"},
        "source": "https://www.nmt.edu/academics/mecheng/graduate.php"
      },
      {
        "title": "Doctor of Philosophy in Physics (Astrophysics at the Magdalena Ridge)",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Teaching & Research Assistantships with $26,000 annual stipend and tuition fellowship",
        "fee": "$45",
        "tuition": "$0 (Fully funded)",
        "desc": "Doctoral research utilizing the Magdalena Ridge Observatory (MRO) interferometer and Very Large Array (VLA) to study radio astronomy, pulsar timing, and atmospheric lightning physics.",
        "requirements": {"gpa": "BS in physics, astrophysics, or mathematics with min. 3.2 GPA", "ielts": "TOEFL 80+ or IELTS 6.5", "gre": "Physics GRE strongly recommended", "papers": "Astrophysical research statement", "references": "Three academic references"},
        "source": "https://www.nmt.edu/academics/physics/grad.php"
      },
      {
        "title": "Master of Science in Petroleum Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Petroleum Recovery Research Center (PRRC) Fellowships up to $18,000/year",
        "fee": "$45",
        "tuition": "$5,200/year (In-state) / $15,800/year (Out-of-state)",
        "desc": "Curriculum focused on subsurface carbon dioxide storage, shale reservoir fracture modeling, enhanced oil recovery, and geothermal energy production.",
        "requirements": {"gpa": "BS in petroleum, chemical, or civil engineering with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Quantitative >= 155", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://www.nmt.edu/academics/petroleum/grad.php"
      },
      {
        "title": "Bachelor of Science in Materials Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "New Mexico Tech Presidential Merit Scholarships providing up to $8,000/year",
        "fee": "$30",
        "tuition": "$8,600/year (In-state) / $25,400/year (Out-of-state)",
        "desc": "Hands-on instruction in high-temperature refractory alloys, ceramic composites, corrosion science, and nanomaterials synthesis.",
        "requirements": {"gpa": "High school GPA >= 3.0 with chemistry and physics", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal essay", "references": "One recommendation"},
        "source": "https://www.nmt.edu/academics/matsci/undergrad.php"
      },
      {
        "title": "New Mexico Tech Copper & Gold Presidential Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition plus $4,000 annual research stipend ($29,400/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "NMT's most prestigious merit scholarship recognizing exceptional incoming freshmen possessing elite analytical ability and passion for discovery in the physical sciences.",
        "requirements": {"gpa": "Unweighted high school GPA >= 3.80 and ACT >= 30 or SAT >= 1390", "ielts": "Exempt", "gre": "Exempt", "papers": "Presidential Fellowship competition essay", "references": "Three letters from STEM instructors"},
        "source": "https://www.nmt.edu/finaid/scholarships.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mahyar Amouzegar",
        "role": "President of New Mexico Tech",
        "department": "Office of the President",
        "subject": "engineering",
        "bio": "Dr. Mahyar Amouzegar serves as President of New Mexico Tech, an applied operations researcher focusing on energy logistics, national security modeling, and STEM research leadership."
      },
      {
        "name": "Dr. Van Romero",
        "role": "Professor of Physics and Vice President of Research",
        "department": "Department of Physics",
        "subject": "physics",
        "bio": "Dr. Van Romero is a leading energetic materials physicist who directs advanced blast physics testing, homeland security counter-explosives, and cosmic ray monitoring at EMRTC."
      },
      {
        "name": "Dr. Mark Person",
        "role": "Professor of Hydrology",
        "department": "Department of Earth and Environmental Science",
        "subject": "environment",
        "bio": "Dr. Mark Person is a renowned hydrogeologist investigating paleohydrology, geothermal fluid flow in deep continental basins, and induced seismicity from wastewater injection."
      }
    ]
  },

  # 18. New Mexico State University (Row 856)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "New Mexico State University",
    "shortName": "NMSU",
    "slug": "new-mexico-state-university-las-cruces",
    "location": "Las Cruces, New Mexico, United States",
    "website": "https://www.nmsu.edu",
    "sourceRow": 856,
    "stats": {"established": "1888", "students": "21,000+", "international": "6%", "faculty": "1,100+"},
    "heroSummary": "New Mexico State University is the comprehensive land-grant and space-grant research university of New Mexico, located in Las Cruces. A premier Hispanic-Serving Institution (HSI) renowned for aerospace engineering, agriculture, astronomy, and border health.",
    "academicOverview": "NMSU features the College of Agricultural, Consumer and Environmental Sciences, College of Engineering, and the Physical Science Laboratory (PSL). It operates the Apache Point Observatory and the historic Fabian Garcia Science Center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school unweighted GPA (minimum 2.75 for guaranteed admission or holistic review). Graduate degree programs require an accredited bachelor's degree with 3.0 GPA, statement of purpose, and three letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Philosophy in Astronomy (Observational & Theoretical)",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Research & Teaching Assistantships with $26,500 annual stipend and 100% tuition remission",
        "fee": "$50",
        "tuition": "$0 (Doctoral fellow funded)",
        "desc": "Elite astronomy doctoral program utilizing the Apache Point Observatory 3.5-meter telescope and Sloan Digital Sky Survey (SDSS) to study galactic evolution and planetary atmospheres.",
        "requirements": {"gpa": "BS or MS in astronomy, physics, or mathematics with min. 3.2 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Physics GRE optional", "papers": "Statement of astronomical research experience", "references": "Three letters from research astrophysicists"},
        "source": "https://astronomy.nmsu.edu/graduate-program/"
      },
      {
        "title": "Doctor of Philosophy in Aerospace Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NASA Space Grant and DoD fellowships providing full tuition and $28,000 annual living stipend",
        "fee": "$50",
        "tuition": "$0 (Fully funded doctoral candidate)",
        "desc": "Advanced research in hypersonics, unmanned aerial vehicles (UAVs), orbital mechanics, propulsion chemistry, and suborbital flight testing near White Sands Space Harbor.",
        "requirements": {"gpa": "BS or MS in aerospace or mechanical engineering with min. 3.2 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE quantitative score >= 156", "papers": "Doctoral research prospectus", "references": "Three letters of academic recommendation"},
        "source": "https://mae.nmsu.edu/graduate/"
      },
      {
        "title": "Master of Science in Plant and Environmental Sciences (Precision Agriculture)",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "USDA-NIFA Graduate Research Assistantships with $16,000 stipend and tuition waiver",
        "fee": "$50",
        "tuition": "$380/credit hour (In-state) / $1,050/credit hour (Out-of-state)",
        "desc": "Studies arid land crop irrigation efficiency, chile pepper genetics, rangeland soil microbiology, and remote sensing UAV crop monitoring in the Mesilla Valley.",
        "requirements": {"gpa": "BS in agronomy, horticulture, or biology with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Research statement", "references": "Two faculty letters"},
        "source": "https://pes.nmsu.edu/academics/graduate.html"
      },
      {
        "title": "Master of Science in Computer Science (Artificial Intelligence Track)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Departmental Graduate Teaching Assistantships providing $15,000 stipend and tuition award",
        "fee": "$50",
        "tuition": "$380/credit hour (In-state) / $1,050/credit hour (Out-of-state)",
        "desc": "Covers deep reinforcement learning, natural language processing, computer vision for autonomous rovers, and cloud computing security.",
        "requirements": {"gpa": "BS in computer science or related STEM field with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Statement of technical objectives", "references": "Three letters of recommendation"},
        "source": "https://cs.nmsu.edu/graduate/"
      },
      {
        "title": "Bachelor of Science in Civil Engineering (Water Resources)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "NMSU ConocoPhillips and Engineering Excellence Grants up to $6,000/year",
        "fee": "$50",
        "tuition": "$8,500/year (In-state) / $26,200/year (Out-of-state)",
        "desc": "ABET-accredited degree addressing Rio Grande water management, hydrology, desert wastewater treatment, and structural hydraulics.",
        "requirements": {"gpa": "High school GPA >= 3.0 with precalculus and chemistry", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://ce.nmsu.edu/undergraduate/"
      },
      {
        "title": "NMSU Conroy Honors Presidential Fellowship",
        "type": "Fellowship",
        "subject": "physics",
        "subjects": ["physics", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition plus on-campus housing allowance ($28,000/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "The highest institutional honor given to incoming freshmen in the William B. Conroy Honors College, supporting groundbreaking research in STEM and public leadership.",
        "requirements": {"gpa": "3.85 high school GPA and ACT score >= 30 or SAT >= 1390", "ielts": "Exempt", "gre": "Exempt", "papers": "Conroy Honors competition essay and interview", "references": "Three letters of academic endorsement"},
        "source": "https://honors.nmsu.edu/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Mónica Torres",
        "role": "Interim President of New Mexico State University",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Dr. Mónica Torres leads NMSU, focusing on land-grant community engagement, Hispanic-Serving Institution educational excellence, and statewide economic development."
      },
      {
        "name": "Dr. Jason Jackiewicz",
        "role": "Professor and Department Head of Astronomy",
        "department": "Department of Astronomy",
        "subject": "physics",
        "bio": "Dr. Jason Jackiewicz is a helioseismologist investigating the internal dynamics of the Sun, solar subsurface flows, asteroseismology, and exoplanet host star magnetic cycles."
      },
      {
        "name": "Dr. Pei Xu",
        "role": "Professor of Civil Engineering and Water Resources",
        "department": "Department of Civil Engineering",
        "subject": "engineering",
        "bio": "Dr. Pei Xu conducts cutting-edge research in membrane separation technologies, desalination of brackish groundwater, and produced water treatment for agricultural reuse."
      }
    ]
  },

  # 19. New York Law School (Row 858)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "New York Law School",
    "shortName": "New York Law School",
    "slug": "new-york-law-school-manhattan",
    "location": "New York, New York, United States",
    "website": "https://www.nyls.edu",
    "sourceRow": 858,
    "stats": {"established": "1891", "students": "1,100+", "international": "7%", "faculty": "110+"},
    "heroSummary": "New York Law School is an independent, ABA-accredited law school located in Tribeca in lower Manhattan, New York City. Renowned for intellectual property law, cybersecurity jurisprudence, financial services regulation, and social justice advocacy.",
    "academicOverview": "NYLS operates the Innovation Center for Law and Technology, the Center for Financial Services Law, and the Center for New York City Law. Situated steps from Wall Street, federal and state courts, and Silicon Alley tech enterprises.",
    "researchAdmissions": "Juris Doctor (JD) admissions require an accredited bachelor's degree, Law School Admission Test (LSAT) or GRE score, personal statement, and letters of recommendation evaluated through the Law School Admission Council (LSAC).",
    "opps": [
      {
        "title": "Juris Doctor (J.D.) in Intellectual Property and Technology Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Innovation Center Merit Scholarships providing up to $35,000 per academic year",
        "fee": "$0 (Fee waiver upon request)",
        "tuition": "$58,500/year",
        "desc": "Elite legal curriculum in patent prosecution, artificial intelligence copyright law, digital privacy governance, and venture capital financing in lower Manhattan.",
        "requirements": {"gpa": "Undergraduate GPA >= 3.4 and LSAT score >= 156 (or competitive GRE)", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Accepted in lieu of LSAT", "papers": "Personal statement and legal resume", "references": "Two academic or professional recommendations"},
        "source": "https://www.nyls.edu/academics/jd-program/"
      },
      {
        "title": "Master of Laws (LL.M.) in Cybersecurity and Data Privacy",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Cybersecurity Legal Fellowships awarding up to $15,000 total program reduction",
        "fee": "$50",
        "tuition": "$2,100/credit hour",
        "desc": "Advanced post-JD specialization covering global regulatory compliance (GDPR/CCPA), incident breach response law, national security surveillance, and blockchain law.",
        "requirements": {"gpa": "First professional degree in law (JD or international LLB)", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Not required", "papers": "Statement of legal research interests", "references": "Two letters from legal scholars or partners"},
        "source": "https://www.nyls.edu/academics/llm-programs/cybersecurity-and-data-privacy/"
      },
      {
        "title": "Juris Doctor (J.D.) in Financial Services and Corporate Compliance",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Wall Street Legal Scholars Awards up to $30,000/year",
        "fee": "$0",
        "tuition": "$58,500/year",
        "desc": "Capitalizes on Tribeca's proximity to Wall Street to train attorneys in SEC enforcement, fintech regulations, derivatives transactions, and corporate governance.",
        "requirements": {"gpa": "Undergraduate GPA >= 3.3 and LSAT score >= 155", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Accepted", "papers": "Statement of corporate law intent", "references": "Two professional letters"},
        "source": "https://www.nyls.edu/academics/centers-and-institutes/center-for-financial-services-law/"
      },
      {
        "title": "Juris Doctor (J.D.) in Social Justice and Public Interest Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Public Interest Honors Scholarships providing up to full tuition coverage",
        "fee": "$0",
        "tuition": "$58,500/year",
        "desc": "Comprehensive clinical practice in criminal defense, immigration asylum, civil rights litigation, and urban housing justice in New York courts.",
        "requirements": {"gpa": "Demonstrated public service record and competitive LSAT/GRE score", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Accepted", "papers": "Public interest commitment essay", "references": "Two letters from mentors"},
        "source": "https://www.nyls.edu/academics/clinics-and-experiential-learning/"
      },
      {
        "title": "Master of Laws (LL.M.) in Financial Services Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Center for Financial Services Merit Grants up to $12,000",
        "fee": "$50",
        "tuition": "$2,100/credit hour",
        "desc": "Designed for domestic and international legal counsel navigating cross-border banking regulations, anti-money laundering (AML), and cryptocurrency governance.",
        "requirements": {"gpa": "JD or equivalent law degree from an accredited institution", "ielts": "TOEFL 100+ or IELTS 7.5", "gre": "Not required", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://www.nyls.edu/academics/llm-programs/financial-services-law/"
      },
      {
        "title": "New York Law School Dean's Scholars Full Tuition Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "100% full tuition coverage ($58,500/year value) renewable for all three years of legal education ($175,500 total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "NYLS's most prestigious merit award granted to exceptional incoming JD candidates with stellar academic records and demonstrated legal leadership potential.",
        "requirements": {"gpa": "Undergraduate GPA >= 3.75 and LSAT >= 163 (or equivalent percentile GRE)", "ielts": "Exempt", "gre": "Exempt", "papers": "Dean's Scholars competitive essay and interview", "references": "Three letters of academic and professional recommendation"},
        "source": "https://www.nyls.edu/admissions/financial-aid/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Anthony W. Crowell",
        "role": "Dean and President of New York Law School",
        "department": "Office of the Dean",
        "subject": "social-sciences",
        "bio": "Anthony W. Crowell has served as Dean and President of NYLS since 2012, previously serving as Counselor to New York City Mayor Michael R. Bloomberg."
      },
      {
        "name": "Prof. Ari Ezra Waldman",
        "role": "Professor of Law and Director of the Innovation Center for Law and Technology",
        "department": "Innovation Center for Law and Technology",
        "subject": "social-sciences",
        "bio": "Prof. Ari Ezra Waldman is a nationally acclaimed scholar in technology law, privacy design, algorithmic discrimination, and digital civil liberties."
      },
      {
        "name": "Prof. Houman B. Shadab",
        "role": "Professor of Law and Co-Director of the Center for Business and Financial Law",
        "department": "Center for Financial Services Law",
        "subject": "social-sciences",
        "bio": "Prof. Houman Shadab is a prolific legal scholar specializing in hedge funds, commercial contracts, financial derivatives, and legal technology automation."
      }
    ]
  },

  # 20. Newman University (Row 859)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Newman University",
    "shortName": "Newman Univ",
    "slug": "newman-university-wichita",
    "location": "Wichita, Kansas, United States",
    "website": "https://newmanu.edu",
    "sourceRow": 859,
    "stats": {"established": "1933", "students": "2,800+", "international": "4%", "faculty": "160+"},
    "heroSummary": "Newman University is a private Catholic liberal arts university in Wichita, Kansas, sponsored by the Adorers of the Blood of Christ. Widely recognized for allied health sciences, nursing, pre-med education, and social work throughout the Great Plains.",
    "academicOverview": "Newman University houses the School of Healthcare Professions, School of Arts and Sciences, and the School of Business and Technology. Facilities include the Bishop Gerber Science Center, cardiac catheterization simulation suites, and sonography labs.",
    "researchAdmissions": "Undergraduate admissions evaluate high school unweighted GPA (minimum 2.25) under test-optional review. Healthcare and graduate programs require an accredited bachelor's degree with 2.75 to 3.0 GPA and clinical references.",
    "opps": [
      {
        "title": "Master of Social Work (MSW - Clinical Practice)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Health Resources and Services Administration (HRSA) Behavioral Health Grants up to $10,000",
        "fee": "$40",
        "tuition": "$630/credit hour",
        "desc": "CSWE-accredited clinical social work curriculum preparing licensed clinical social workers (LCSWs) in mental health therapy, rural family trauma, and addictions.",
        "requirements": {"gpa": "Bachelor's degree with min. 3.0 GPA in liberal arts or social sciences", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Personal statement of social work values", "references": "Three professional and academic recommendations"},
        "source": "https://newmanu.edu/academics/graduate-programs/master-of-social-work"
      },
      {
        "title": "Master of Business Administration (MBA - Leadership & Healthcare)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "School of Business Merit Fellowships providing up to $4,500",
        "fee": "$40",
        "tuition": "$610/credit hour",
        "desc": "Prepares organizational leaders in healthcare analytics, corporate finance, strategic human capital management, and ethical business decision-making.",
        "requirements": {"gpa": "2.75 minimum undergraduate GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GMAT/GRE optional", "papers": "Professional resume and career statement", "references": "Two letters of recommendation"},
        "source": "https://newmanu.edu/academics/graduate-programs/master-of-business-administration"
      },
      {
        "title": "Bachelor of Science in Nursing (Pre-Licensure BSN)",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Ascension Via Christi Nursing Scholarships up to $8,000/year",
        "fee": "$35",
        "tuition": "$34,200/year",
        "desc": "CCNE-accredited nursing degree offering acute clinical rotations across Wichita medical centers and training in the Bishop Gerber Science Center simulation suite.",
        "requirements": {"gpa": "3.0 high school GPA with prerequisite anatomy and chemistry B or better", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Nursing statement of intent", "references": "Two recommendations"},
        "source": "https://newmanu.edu/academics/undergraduate-programs/nursing"
      },
      {
        "title": "Bachelor of Science in Radiologic Technology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "physics"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Allied Health Professional Grants up to $4,000/year",
        "fee": "$35",
        "tuition": "$34,200/year",
        "desc": "JRCERT-accredited degree in diagnostic radiography, digital fluoroscopy, radiation biology, and computed tomography (CT) imaging.",
        "requirements": {"gpa": "2.75 high school GPA with physics and biology", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Career interest essay", "references": "Two recommendations"},
        "source": "https://newmanu.edu/academics/undergraduate-programs/radiologic-technology"
      },
      {
        "title": "Bachelor of Science in Sonography",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Healthcare Imaging Endowed Grants of $3,500/year",
        "fee": "$35",
        "tuition": "$34,200/year",
        "desc": "Dual-concentration program covering diagnostic medical sonography (abdomen/OB-GYN) and adult echocardiography (cardiac ultrasound).",
        "requirements": {"gpa": "2.85 high school GPA with anatomy prerequisites", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "Two recommendations"},
        "source": "https://newmanu.edu/academics/undergraduate-programs/sonography"
      },
      {
        "title": "St. John Henry Newman Full Tuition Scholars Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full tuition scholarship ($34,200/year value) renewable for four undergraduate academic years ($136,800 total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "The most distinguished competitive merit award given to incoming freshmen demonstrating academic excellence, moral leadership, and community service.",
        "requirements": {"gpa": "3.85 unweighted high school GPA and ACT score >= 29 or SAT >= 1350", "ielts": "Exempt", "gre": "Exempt", "papers": "St. John Henry Newman competitive essay and on-campus interview", "references": "Three letters of academic endorsement"},
        "source": "https://newmanu.edu/admissions/scholarships"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Kathleen S. Jagger",
        "role": "President and Professor of Biology",
        "department": "Office of the President",
        "subject": "biology",
        "bio": "Dr. Kathleen S. Jagger is a microbiologist and public health leader serving as the 12th President of Newman University, championing health sciences workforce development."
      },
      {
        "name": "Dr. Lori Steiner",
        "role": "Dean of the School of Arts and Sciences and Professor of Mathematics",
        "department": "School of Arts and Sciences",
        "subject": "mathematics",
        "bio": "Dr. Lori Steiner directs scientific curriculum innovation, with research addressing statistical modeling, collegiate retention in mathematics, and undergraduate STEM mentorship."
      },
      {
        "name": "Dr. Teresa Wilkerson",
        "role": "Associate Professor and Director of Adult and Professional Studies",
        "department": "School of Business and Technology",
        "subject": "social-sciences",
        "bio": "Dr. Teresa Wilkerson conducts research in organizational change management, healthcare leadership ethics, and adult degree completion dynamics."
      }
    ]
  },

  # 21. NewU University (Row 860)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "NewU University",
    "shortName": "NewU",
    "slug": "newu-university-washington-dc",
    "location": "Washington, District of Columbia, United States",
    "website": "https://newu.university",
    "sourceRow": 860,
    "stats": {"established": "2019", "students": "400+", "international": "8%", "faculty": "35+"},
    "heroSummary": "NewU University is an innovative private, non-profit university in downtown Washington, D.C. Pioneers an accelerated 3-year bachelor's degree model focused on high-demand disciplines in computer science, data science, entrepreneurship, and psychology.",
    "academicOverview": "NewU operates schools of Computer Science, Business & Entrepreneurship, and Psychology. Its curriculum eliminates traditional general education bloat, focusing strictly on experiential project-based learning and corporate tech apprenticeships in the DC metro area.",
    "researchAdmissions": "Admissions evaluate high school academic records (minimum 2.5 unweighted GPA) or college transfer credits. Standardized tests (SAT/ACT) are entirely test-blind, with applications judged on intellectual passion and interview.",
    "opps": [
      {
        "title": "Bachelor of Science in Computer Science (Software Engineering)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "NewU Tech Innovators Merit Grants up to $6,000/year",
        "fee": "$0",
        "tuition": "$16,500/year",
        "desc": "Accelerated 3-year degree mastering full-stack web and mobile development, algorithms, cloud computing, and DevOps engineering in downtown Washington, D.C.",
        "requirements": {"gpa": "2.5 minimum high school GPA or GED", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement on tech ambitions", "references": "One recommendation"},
        "source": "https://newu.university/programs/computer-science/"
      },
      {
        "title": "Bachelor of Science in Data Science & Machine Learning",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "District Data Analytics Scholarships of $5,000/year",
        "fee": "$0",
        "tuition": "$16,500/year",
        "desc": "Hands-on instruction in statistical modeling, machine learning pipelines, predictive analytics, SQL databases, and data visualization.",
        "requirements": {"gpa": "2.75 high school GPA with algebra II", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of purpose", "references": "One recommendation"},
        "source": "https://newu.university/programs/data-science/"
      },
      {
        "title": "Bachelor of Science in Entrepreneurship & Innovation",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "NewU Venture Accelerator Grants providing $4,500/year",
        "fee": "$0",
        "tuition": "$16,500/year",
        "desc": "Intensive business curriculum covering venture capital pitching, growth marketing, digital commerce scaling, and corporate financial accounting.",
        "requirements": {"gpa": "2.25 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Startup idea pitch or personal statement", "references": "One character recommendation"},
        "source": "https://newu.university/programs/entrepreneurship/"
      },
      {
        "title": "Bachelor of Arts in Psychology & Human Behavior",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-05-15",
        "deadlineText": "May 15, 2027",
        "funding": "Behavioral Science Leadership Grants of $4,000/year",
        "fee": "$0",
        "tuition": "$16,500/year",
        "desc": "Studies cognitive psychology, organizational behavior, mental health methodologies, and consumer decision-making analytics.",
        "requirements": {"gpa": "2.25 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://newu.university/programs/psychology/"
      },
      {
        "title": "Bachelor of Science in Cybersecurity Operations",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "National Capital Cyber Grants providing $5,000/year",
        "fee": "$0",
        "tuition": "$16,500/year",
        "desc": "Focuses on network defense, cloud infrastructure hardening, ethical penetration testing, and federal compliance standards.",
        "requirements": {"gpa": "2.5 high school GPA", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Technical interest statement", "references": "One recommendation"},
        "source": "https://newu.university/programs/cybersecurity/"
      },
      {
        "title": "NewU Next-Gen Founder Full Tuition Fellowship",
        "type": "Fellowship",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "100% full tuition coverage ($16,500/year value) across all three accelerated degree years ($49,500 total value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Premier merit fellowship awarded to exceptional young tech builders, innovators, and entrepreneurs committed to solving societal challenges.",
        "requirements": {"gpa": "3.75 high school GPA or demonstrated technological portfolio", "ielts": "Exempt", "gre": "Exempt", "papers": "Next-Gen Founder competition essay and project pitch", "references": "Two recommendations"},
        "source": "https://newu.university/scholarships/"
      }
    ],
    "researchers": [
      {
        "name": "Prof. Strats Mirchev",
        "role": "President and Founder",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Prof. Strats Mirchev is an entrepreneur and educational visionary who founded NewU University to address the student debt crisis with accelerated debt-free degree paths."
      },
      {
        "name": "Prof. Alexander Bozhinov",
        "role": "Chief Academic Officer and Professor of Computer Science",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Prof. Alexander Bozhinov specializes in cloud microservices, software architecture, and agile pedagogical models for accelerated tech degrees."
      },
      {
        "name": "Dr. Elena Petrova",
        "role": "Professor of Applied Data Science",
        "department": "Department of Data Science",
        "subject": "computer-science",
        "bio": "Dr. Elena Petrova conducts research in predictive algorithms, machine learning model evaluation, and computational business analytics."
      }
    ]
  },

  # 22. Nexford University (Row 861)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Nexford University",
    "shortName": "Nexford",
    "slug": "nexford-university-washington-dc",
    "location": "Washington, District of Columbia, United States",
    "website": "https://www.nexford.edu",
    "sourceRow": 861,
    "stats": {"established": "2019", "students": "4,500+", "international": "85%", "faculty": "180+"},
    "heroSummary": "Nexford University is an innovative, DEAC-accredited online university headquartered in Washington, D.C. Providing 100% online, competency-based global degree programs in business analytics, artificial intelligence, and digital transformation.",
    "academicOverview": "Nexford University features the School of Business and the School of Technology. Programs are designed around real-time employer skills data and competency-based modules, serving international scholars and working professionals across over 100 countries.",
    "researchAdmissions": "Undergraduate admissions evaluate high school graduation or GED equivalent. Graduate degree programs require an accredited bachelor's degree with 2.5 GPA and professional goals statement. Fully online admissions with rolling monthly intakes.",
    "opps": [
      {
        "title": "Master of Business Administration (MBA - Artificial Intelligence)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Nexford Global Leaders Scholarship providing up to 30% monthly tuition discount",
        "fee": "$25",
        "tuition": "$280/month (flat monthly subscription)",
        "desc": "Competency-based MBA focusing on corporate generative AI integration, predictive data analytics, ethical technology governance, and digital enterprise scaling.",
        "requirements": {"gpa": "Accredited bachelor's degree with min. 2.5 GPA", "ielts": "TOEFL 79+ or IELTS 6.5 (or Nexford English Assessment)", "gre": "Exempt", "papers": "Professional goals statement", "references": "Two professional references"},
        "source": "https://www.nexford.edu/programs/mba"
      },
      {
        "title": "Master of Science in Digital Transformation",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Emerging Markets Tech Grants providing up to 25% tuition reduction",
        "fee": "$25",
        "tuition": "$280/month",
        "desc": "Equips managers to lead enterprise cloud migrations, omnichannel digital customer journeys, agile workplace transformations, and cybersecurity risk governance.",
        "requirements": {"gpa": "Bachelor's degree with min. 2.5 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Not required", "papers": "Digital transformation career essay", "references": "Two recommendations"},
        "source": "https://www.nexford.edu/programs/ms-digital-transformation"
      },
      {
        "title": "Master of Science in Cybersecurity",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Cyber Defense Leadership Grants of $1,500 total program award",
        "fee": "$25",
        "tuition": "$280/month",
        "desc": "Hands-on virtual lab training in enterprise network protection, cloud threat intelligence, security regulatory auditing, and incident response.",
        "requirements": {"gpa": "Bachelor's degree in IT, STEM, or business with min. 2.5 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Exempt", "papers": "Technical objectives statement", "references": "Two professional letters"},
        "source": "https://www.nexford.edu/programs/ms-cybersecurity"
      },
      {
        "title": "Bachelor of Business Administration (BBA - Supply Chain)",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Future Female Leaders Scholarships providing up to 50% tuition reduction",
        "fee": "$25",
        "tuition": "$180/month (flat monthly subscription)",
        "desc": "Covers global logistics, maritime freight economics, procurement analytics, ERP systems, and warehouse automation strategies.",
        "requirements": {"gpa": "High school diploma or GED equivalent", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.nexford.edu/programs/bba"
      },
      {
        "title": "Bachelor of Science in Data Analytics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "mathematics"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Global STEM Advancement Scholarships up to 35% tuition discount",
        "fee": "$25",
        "tuition": "$180/month",
        "desc": "Mastery of Python programming for data analysis, Tableau visualization, statistical hypotheses testing, and SQL relational databases.",
        "requirements": {"gpa": "High school diploma with algebra proficiency", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Statement of technical goals", "references": "One character recommendation"},
        "source": "https://www.nexford.edu/programs/bs-data-analytics"
      },
      {
        "title": "Nexford Global Impact Full Tuition Fellowship",
        "type": "Fellowship",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "100% full tuition coverage for entire degree duration ($8,000–$12,000 program value)",
        "fee": "$0",
        "tuition": "$0 (100% full tuition coverage)",
        "desc": "Awarded to extraordinary global students and professionals from developing nations who demonstrate community leadership and entrepreneurial vision.",
        "requirements": {"gpa": "Outstanding academic record and proven social impact record", "ielts": "Exempt", "gre": "Exempt", "papers": "Global Impact competitive essay and video interview", "references": "Two recommendations"},
        "source": "https://www.nexford.edu/scholarships"
      }
    ],
    "researchers": [
      {
        "name": "Fadl Al Tarzi",
        "role": "Chief Executive Officer and Founder",
        "department": "Office of the President",
        "subject": "social-sciences",
        "bio": "Fadl Al Tarzi is an educational entrepreneur who founded Nexford University to democratize affordable, competency-based American higher education worldwide."
      },
      {
        "name": "Dr. Sheila Fournier-Bonilla",
        "role": "Chief Academic Officer",
        "department": "Office of Academic Affairs",
        "subject": "social-sciences",
        "bio": "Dr. Sheila Fournier-Bonilla is an expert in digital pedagogy, competency-based curriculum development, and online higher education accreditation."
      },
      {
        "name": "Dr. Omid Asgari",
        "role": "Professor of Business Analytics and Management",
        "department": "School of Business",
        "subject": "social-sciences",
        "bio": "Dr. Omid Asgari conducts research in organizational agility, artificial intelligence applications in corporate management, and global workforce analytics."
      }
    ]
  },

  # 23. North Carolina A&T State University (Row 864)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "North Carolina A&T State University",
    "shortName": "NC A&T",
    "slug": "north-carolina-a-and-t-state-university-greensboro",
    "location": "Greensboro, North Carolina, United States",
    "website": "https://www.ncat.edu",
    "sourceRow": 864,
    "stats": {"established": "1891", "students": "14,000+", "international": "4%", "faculty": "900+"},
    "heroSummary": "North Carolina Agricultural and Technical State University is the largest Historically Black University (HBCU) in the United States, located in Greensboro, North Carolina. A premier Carnegie R2 doctoral research university leading the nation in graduating Black engineers and agricultural scientists.",
    "academicOverview": "NC A&T comprises the College of Engineering, College of Agriculture and Environmental Sciences, and College of Science and Technology. Major research centers include the NSF Engineering Research Center for Revolutionizing Metallic Biomaterials and the Center for Advanced Transportation Systems.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA (average 3.7 unweighted) with strong STEM coursework under holistic review. Graduate degree admissions require an accredited bachelor's degree with 3.0 GPA, personal goals statement, and letters of recommendation.",
    "opps": [
      {
        "title": "Doctor of Philosophy in Computational Data Science and Engineering",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Doctoral Graduate Research Assistantship with $28,000 annual living stipend, full tuition waiver, and healthcare allowance",
        "fee": "$60",
        "tuition": "$0 (Fully funded doctoral fellow)",
        "desc": "Interdisciplinary doctoral program focusing on high-performance parallel computing, machine learning algorithms, cybersecurity modeling, and computational bioinformatics.",
        "requirements": {"gpa": "BS or MS in engineering, CS, or mathematics with min. 3.25 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "GRE quantitative score >= 158", "papers": "Comprehensive doctoral research prospectus", "references": "Three letters from engineering/computing faculty"},
        "source": "https://www.ncat.edu/coe/academics/phd-cdse.php"
      },
      {
        "title": "Doctor of Philosophy in Mechanical Engineering (Advanced Autonomous Systems)",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NSF and DoD Engineering Fellowships providing full tuition and $28,000 annual stipend",
        "fee": "$60",
        "tuition": "$0 (Doctoral fellow funded)",
        "desc": "Cutting-edge research in autonomous vehicle guidance, hypersonics, multi-functional composite nanomaterials, and robotics control systems.",
        "requirements": {"gpa": "BS or MS in mechanical or aerospace engineering with min. 3.2 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Quantitative >= 155", "papers": "Statement of mechanical research interests", "references": "Three letters of recommendation"},
        "source": "https://www.ncat.edu/coe/departments/meen/graduate.php"
      },
      {
        "title": "Master of Science in Agricultural and Environmental Systems",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "USDA-1890 National Scholars Graduate Fellowships covering full tuition plus monthly stipend",
        "fee": "$60",
        "tuition": "$5,200/year (In-state) / $18,400/year (Out-of-state)",
        "desc": "Conducted at the 492-acre University Farm complex, studying sustainable agroecology, urban food systems, soil microbial biogeochemistry, and climate-smart horticulture.",
        "requirements": {"gpa": "BS in agriculture, biology, or environmental science with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Optional", "papers": "Agricultural research statement", "references": "Two faculty letters"},
        "source": "https://www.ncat.edu/caes/academics/graduate-programs.php"
      },
      {
        "title": "Master of Science in Nanoengineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "chemistry"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Joint School of Nanoscience and Nanoengineering (JSNN) Research Assistantships with $20,000 stipend",
        "fee": "$60",
        "tuition": "$5,200/year (In-state) / $18,400/year (Out-of-state)",
        "desc": "Based at the world-class JSNN facility equipped with cleanrooms and electron microscopes, studying 2D materials, nanobiosensors, and quantum nanoscale devices.",
        "requirements": {"gpa": "BS in engineering, physics, chemistry, or materials science with min. 3.0 GPA", "ielts": "TOEFL 79+ or IELTS 6.5", "gre": "Recommended", "papers": "Nanoengineering goals essay", "references": "Three academic recommendations"},
        "source": "https://jsnn.ncat.uncg.edu/"
      },
      {
        "title": "Bachelor of Science in Computer Science (Cybersecurity Track)",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "NSA/DoD Cyber Scholarship Program (CySP) covering full tuition, books, and $27,000 undergraduate stipend",
        "fee": "$60",
        "tuition": "$6,700/year (In-state) / $20,300/year (Out-of-state)",
        "desc": "NSA-designated Center of Academic Excellence in Cyber Defense covering software security, cryptography, reverse engineering, and cloud network forensics.",
        "requirements": {"gpa": "High school GPA >= 3.2 with precalculus", "ielts": "TOEFL 68+ or IELTS 6.0", "gre": "Exempt", "papers": "Personal statement", "references": "Two STEM teacher recommendations"},
        "source": "https://www.ncat.edu/coe/departments/cs/undergraduate.php"
      },
      {
        "title": "North Carolina A&T Cheatham-White Scholars Fellowship",
        "type": "Fellowship",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full in-state or out-of-state tuition, room and board, books, laptop, and four summer research/travel stipends ($32,000/year total value)",
        "fee": "$0",
        "tuition": "$0 (100% full scholarship)",
        "desc": "The most prestigious fully funded undergraduate merit fellowship at NC A&T, awarded to high-achieving scholars exhibiting outstanding leadership, scholarship, and community service.",
        "requirements": {"gpa": "3.80 unweighted high school GPA and ACT >= 28 or SAT >= 1280", "ielts": "Exempt", "gre": "Exempt", "papers": "Cheatham-White competitive essay and leadership portfolio", "references": "Three letters of academic recommendation"},
        "source": "https://www.ncat.edu/admissions/financial-aid/cheatham-white-scholarship.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. James R. Martin II",
        "role": "Chancellor of North Carolina A&T State University",
        "department": "Office of the Chancellor",
        "subject": "engineering",
        "bio": "Dr. James R. Martin II serves as the 13th Chancellor of NC A&T, an internationally recognized civil engineer specializing in earthquake engineering and geotechnical infrastructure resilience."
      },
      {
        "name": "Dr. Jagannathan Sankar",
        "role": "University Distinguished Professor and Director of the ERC for Revolutionizing Metallic Biomaterials",
        "department": "Department of Mechanical Engineering",
        "subject": "engineering",
        "bio": "Dr. Jagannathan Sankar is a world-renowned biomaterials pioneer directing the NSF-ERC, inventing biodegradable magnesium alloys and nano-ceramic implants."
      },
      {
        "name": "Dr. Gerry Dozier",
        "role": "Charles M. Hampton Endowed Professor of Computer Science",
        "department": "Department of Computer Science",
        "subject": "computer-science",
        "bio": "Dr. Gerry Dozier is an expert in artificial intelligence, evolutionary computation, biometrics security, identity science, and adversarial machine learning."
      }
    ]
  }
]

print(f"Part 2 Chunk 1 loaded: {len(chunk1)} USA universities")
