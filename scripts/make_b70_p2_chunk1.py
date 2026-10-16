# scripts/make_b70_p2_chunk1.py
# Batch 70 Part 2 Chunk 1: Universities 16 to 23 (UW Tacoma, UWG, UWM, UW-Parkside, UW-Platteville, UW Oshkosh, UWyo, Utah State)

chunk3 = [
  # 16. University of Washington Tacoma (Row 1177)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Washington Tacoma",
    "shortName": "UW Tacoma",
    "slug": "university-of-washington-tacoma",
    "location": "Tacoma, Washington, United States",
    "website": "https://www.tacoma.uw.edu",
    "sourceRow": 1177,
    "stats": {"established": "1990", "students": "5,100+", "international": "7%", "faculty": "340+"},
    "heroSummary": "The University of Washington Tacoma (UW Tacoma) is an urban-serving public university located in historic revitalized warehouse structures in downtown Tacoma, Washington. Renowned for computer science and cybersecurity at the School of Engineering & Technology, urban environmental science at the Center for Urban Waters, healthcare leadership, and social work, UW Tacoma drives South Sound economic transformation.",
    "academicOverview": "UW Tacoma spans five schools: the School of Engineering & Technology (SET), School of Interdisciplinary Arts & Sciences, Milgard School of Business, School of Nursing & Healthcare Leadership, and the School of Social Work & Criminal Justice. The campus is home to the Center for Urban Waters on the Thea Foss Waterway.",
    "researchAdmissions": "Undergraduate admissions are test-optional and evaluate academic transcripts, GPA, and personal essays. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, two to three letters of recommendation, and English language proficiency (TOEFL 92+ or IELTS 7.0+).",
    "opps": [
      {
        "title": "Master of Science in Computer Science and Systems - Distributed Cloud & Machine Learning - SET",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "School of Engineering & Technology Graduate Assistantships up to $18,000/year",
        "fee": "$85",
        "tuition": "$25,500/year",
        "desc": "Advanced computer science master's focusing on cloud infrastructure scalability, distributed ledger systems, adversarial deep learning, natural language processing, and big data pipelines.",
        "requirements": {"gpa": "BS in Computer Science or related STEM field with GPA 3.2+", "ielts": "TOEFL 92+ or IELTS 7.0+", "gre": "GRE optional", "papers": "Statement of purpose detailing technical background", "references": "Three letters of recommendation"},
        "source": "https://www.tacoma.uw.edu/set/programs/graduate/mscss"
      },
      {
        "title": "Master of Science in Environmental Science - Urban Estuary Contaminants - Center for Urban Waters",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "Center for Urban Waters Research Fellowships $24,000/year plus tuition assistance",
        "fee": "$85",
        "tuition": "$21,000/year",
        "desc": "Operating at the LEED Platinum Center for Urban Waters, researching urban stormwater runoff toxicants (such as 6PPD-quinone lethal to coho salmon), microplastics pollution in Puget Sound, and wastewater mass spectrometry.",
        "requirements": {"gpa": "BS in environmental science, chemistry, biology, or geology with GPA 3.0+", "ielts": "TOEFL 92+", "gre": "GRE optional", "papers": "Statement of environmental research interests", "references": "Three letters of recommendation"},
        "source": "https://www.tacoma.uw.edu/sias/sam/mses"
      },
      {
        "title": "Master of Cybersecurity and Leadership (MCL) - Cyber Operations & Executive Strategy",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Milgard & SET Cybersecurity Leadership Grants up to $8,000",
        "fee": "$85",
        "tuition": "$27,000 total",
        "desc": "Interdisciplinary cohort master's partnering the School of Engineering & Technology with the Milgard School of Business, training cyber executives in cloud security compliance, incident response protocols, and corporate risk management.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and 2+ years technology or security experience", "ielts": "TOEFL 92+", "gre": "GRE/GMAT not required", "papers": "Statement of cybersecurity leadership goals", "references": "Two professional references"},
        "source": "https://www.tacoma.uw.edu/mcl"
      },
      {
        "title": "Master of Science in Electrical and Computer Engineering - Embedded Cyber-Physical Systems",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-02-15",
        "deadlineText": "February 15, 2027",
        "funding": "SET Engineering Fellowships $16,000/year plus partial tuition waiver",
        "fee": "$85",
        "tuition": "$25,500/year",
        "desc": "Hardware-software integration master's covering real-time embedded systems, FPGA hardware acceleration, autonomous robotics sensing, and signal processing architectures.",
        "requirements": {"gpa": "BS in electrical engineering, computer engineering, or physics with GPA 3.0+", "ielts": "TOEFL 92+", "gre": "GRE optional", "papers": "Statement of purpose and resume", "references": "Two letters of recommendation"},
        "source": "https://www.tacoma.uw.edu/set/programs/graduate/msece"
      },
      {
        "title": "Master of Social Work (MSW) - Integrative Practice & Children and Families",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Child Welfare Employee Traineeships and community fellowships up to $10,000",
        "fee": "$85",
        "tuition": "$19,500/year",
        "desc": "CSWE-accredited clinical master's preparing licensed clinical social workers (LCSW) in urban mental health, child welfare advocacy, trauma intervention, and community empowerment.",
        "requirements": {"gpa": "Undergraduate degree with liberal arts background and GPA 3.0+", "ielts": "TOEFL 92+", "gre": "GRE not required", "papers": "Social work essay and resume", "references": "Three professional references"},
        "source": "https://www.tacoma.uw.edu/swcj/msw"
      },
      {
        "title": "Bachelor of Arts in Sustainable Urban Development - Urban Planning & Housing Equity",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Urban Studies Departmental Scholarships up to $6,000/year",
        "fee": "$80",
        "tuition": "$40,500/year (out-of-state) / $12,600/year (resident)",
        "desc": "Interdisciplinary urban planning curriculum exploring transit-oriented development, affordable housing equity, brownfield remediation, and climate-resilient city design.",
        "requirements": {"gpa": "High school GPA 3.0+", "ielts": "TOEFL 92+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.tacoma.uw.edu/urban-studies/sustainable-urban-development"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Edward Kolodziej",
        "role": "Professor of Civil & Environmental Engineering",
        "department": "Center for Urban Waters & School of Interdisciplinary Arts & Sciences",
        "subject": "environment",
        "bio": "Dr. Kolodziej investigates water quality chemistry, leading the international breakthrough identifying 6PPD-quinone from tire wear particles as the toxic cause of coho salmon mass die-offs."
      },
      {
        "name": "Dr. Yan Bai",
        "role": "Professor of Computer Science & Systems",
        "department": "School of Engineering & Technology",
        "subject": "computer-science",
        "bio": "Dr. Bai specializes in wireless communications security, mobile computing protocols, cyber-physical smart grid defense, and artificial intelligence for biometric authentication."
      },
      {
        "name": "Dr. Joel Baker",
        "role": "Director & Professor of Environmental Science",
        "department": "Center for Urban Waters",
        "subject": "environment",
        "bio": "Dr. Baker is the Port of Tacoma Chair in Environmental Science, modeling the transport and fate of persistent organic pollutants (PCBs, PFAS) and atmospheric deposition in aquatic ecosystems."
      }
    ]
  },

  # 17. University of West Georgia (Row 1178)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of West Georgia",
    "shortName": "UWG",
    "slug": "university-of-west-georgia",
    "location": "Carrollton, Georgia, United States",
    "website": "https://www.westga.edu",
    "sourceRow": 1178,
    "stats": {"established": "1906", "students": "12,700+", "international": "5%", "faculty": "620+"},
    "heroSummary": "The University of West Georgia (UWG) is a comprehensive public doctoral research university situated on a scenic 645-acre campus in Carrollton, Georgia, 45 miles west of Atlanta. Internationally renowned as the birthplace of humanistic psychology in the United States, UWG is also celebrated for teacher education, nursing simulation excellence at the Tanner Health System School of Nursing, and music.",
    "academicOverview": "UWG comprises six colleges and schools: the College of Arts, Culture and Scientific Inquiry (CACSI), Tanner Health System School of Nursing, Richards College of Business, College of Education, School of Communication, Film, and Media, and University College. Key centers include the Center for Public History and the Carrollton Observatory.",
    "researchAdmissions": "Undergraduate admissions evaluate high school GPA (minimum 2.5) and coursework. Graduate admissions require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two to three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Psychology: Consciousness and Society - Humanistic & Transpersonal Psychology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Graduate Teaching Assistantships $18,000/year plus complete tuition waiver",
        "fee": "$40",
        "tuition": "Covered by assistantship",
        "desc": "Internationally famous as the premier humanistic and transpersonal psychology doctoral program in the world, exploring phenomenological qualitative research, consciousness studies, critical social theory, and ecopsychology.",
        "requirements": {"gpa": "Master's degree in psychology or related humanities/social sciences field with GPA 3.5+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Scholarly writing sample and statement of philosophical intent", "references": "Three academic references"},
        "source": "https://www.westga.edu/academics/cacsi/psychology/phd-psychology.php"
      },
      {
        "title": "Master of Science in Nursing (MSN) - Health Systems Leadership & Clinical Education",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Tanner Health System Endowed Nursing Fellowships up to $10,000",
        "fee": "$40",
        "tuition": "$15,500 total",
        "desc": "CCNE-accredited graduate nursing curriculum preparing clinical nurse leaders and nursing faculty in high-fidelity simulation design, curriculum pedagogy, and hospital quality outcomes.",
        "requirements": {"gpa": "BSN from accredited program with GPA 3.0+; unencumbered Georgia RN license", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Statement of professional goals and resume", "references": "Two professional references"},
        "source": "https://www.westga.edu/academics/nursing/msn.php"
      },
      {
        "title": "Master of Arts in History - Public History & Southern Regional Heritage",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "social-sciences"],
        "deadline": "2027-03-15",
        "deadlineText": "March 15, 2027",
        "funding": "Center for Public History Research Assistantships $13,000/year plus tuition remission",
        "fee": "$40",
        "tuition": "Covered by assistantship",
        "desc": "Hands-on public history master's partnering with the National Park Service and Georgia historic sites to train museum curators, archival preservationists, oral historians, and historic preservation planners.",
        "requirements": {"gpa": "Bachelor's degree in history or related field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Historical research paper (15-20 pages) and statement of intent", "references": "Three letters of recommendation"},
        "source": "https://www.westga.edu/academics/cacsi/history/ma-history.php"
      },
      {
        "title": "Master of Science in Applied Computer Science - Database Systems & Web Technologies",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Departmental Graduate Assistantships up to $12,000/year",
        "fee": "$40",
        "tuition": "$16,000 total",
        "desc": "Applied computing degree covering cloud systems architecture, modern JavaScript web application frameworks, database optimization, mobile computing, and information security.",
        "requirements": {"gpa": "BS in computer science or related STEM field with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://www.westga.edu/academics/cacsi/computing/ms-applied-computer-science.php"
      },
      {
        "title": "Bachelor of Science in Biology - Molecular Genetics & Field Ecology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM Achievement Scholarships and undergraduate lab assistantships up to $6,000/year",
        "fee": "$40",
        "tuition": "$19,800/year (out-of-state) / $7,500/year (in-state)",
        "desc": "Undergraduate biology degree featuring independent undergraduate research in Piedmont forest biodiversity, stream water toxicology, avian behavior, and recombinant DNA molecular genetics.",
        "requirements": {"gpa": "High school GPA 2.5+ with strong biology and chemistry grades", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One science recommendation"},
        "source": "https://www.westga.edu/academics/cacsi/biology/bs-biology.php"
      },
      {
        "title": "Master of Business Administration (MBA) - Business Analytics & Strategic Marketing",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Richards College of Business Endowed Scholarships up to $6,000",
        "fee": "$40",
        "tuition": "$15,500 total",
        "desc": "AACSB-accredited MBA curriculum emphasizing predictive business analytics, supply chain operations in the Atlanta logistics hub, managerial accounting, and organizational leadership.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Statement of purpose and resume", "references": "Two letters of recommendation"},
        "source": "https://www.westga.edu/academics/business/mba.php"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Donadrian Rice",
        "role": "Professor Emeritus of Psychology",
        "department": "Department of Psychology",
        "subject": "social-sciences",
        "bio": "Dr. Rice is an authority on humanistic psychology, phenomenology of consciousness, transpersonal therapy frameworks, and the history of meditative psychological practices."
      },
      {
        "name": "Dr. Heidi Banse",
        "role": "Associate Professor of Biology",
        "department": "Department of Biology",
        "subject": "biology",
        "bio": "Dr. Banse investigates developmental genetics, cellular signal transduction in embryogenesis, endocrine disruption in amphibians, and undergraduate laboratory biology pedagogy."
      },
      {
        "name": "Dr. Ann McCleary",
        "role": "Professor of History & Director of Public History",
        "department": "Center for Public History & Department of History",
        "subject": "arts-design",
        "bio": "Dr. McCleary conducts research in vernacular architectural history, textile heritage preservation in the American South, museum exhibit curation, and community oral histories."
      }
    ]
  },

  # 18. University of Wisconsin-Milwaukee (Row 1180)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Wisconsin-Milwaukee",
    "shortName": "UWM",
    "slug": "university-of-wisconsin-milwaukee",
    "location": "Milwaukee, Wisconsin, United States",
    "website": "https://uwm.edu",
    "sourceRow": 1180,
    "stats": {"established": "1956", "students": "22,600+", "international": "7%", "faculty": "1,450+"},
    "heroSummary": "The University of Wisconsin-Milwaukee (UWM) is an elite Carnegie R1 public research university located blocks from Lake Michigan in Milwaukee, Wisconsin. Renowned for hosting the only dedicated School of Freshwater Sciences in the United States, UWM is also globally celebrated for advanced architecture at SARUP, biomedical physics, advanced manufacturing, and film production.",
    "academicOverview": "UWM spans 15 colleges and schools including the School of Freshwater Sciences, School of Architecture and Urban Planning (SARUP), College of Engineering & Applied Science, Peck School of the Arts, Zilber College of Public Health, and the Lubar College of Business. Key research facilities include the Great Lakes Research Facility and the Connected Systems Institute (CSI).",
    "researchAdmissions": "Undergraduate admissions evaluate high school academic performance and coursework. Graduate admissions require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Freshwater Sciences - Great Lakes Biogeochemistry & Aquatic Toxicology - School of Freshwater Sciences",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate research assistantships $30,000/year plus complete tuition waiver",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "The nation's only standalone graduate school of freshwater sciences, utilizing the R/V Neeskay research vessel on Lake Michigan to study toxic cyanobacteria blooms, microplastic transport, quagga mussel ecosystem disruptions, and urban stormwater hydrology.",
        "requirements": {"gpa": "BS or MS in limnology, biology, chemistry, or environmental engineering with GPA 3.2+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests aligned with freshwater faculty", "references": "Three letters of recommendation"},
        "source": "https://uwm.edu/freshwater/academics/phd-freshwater-sciences/"
      },
      {
        "title": "Master of Architecture (M.Arch) - Urban Architecture & Ecological Urbanism - SARUP",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "SARUP Graduate Design Fellowships up to $15,000/year plus studio assistantships",
        "fee": "$75",
        "tuition": "$26,500/year",
        "desc": "NAAB-accredited professional architecture degree at Wisconsin's only architecture school, teaching digital design fabrication, mass timber construction, waterfront resilience, and urban ecological design.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and creative design portfolio (20-30 pages)", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of design intent and resume", "references": "Three letters of recommendation"},
        "source": "https://uwm.edu/sarup/academics/architecture/march/"
      },
      {
        "title": "Ph.D. in Physics - Gravitational Wave Astronomy & Cryo-EM Biophysics",
        "type": "Degree",
        "subject": "physics",
        "subjects": ["physics", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full departmental teaching/research assistantships $31,500/year plus tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Elite physics doctorate contributing to the LIGO Scientific Collaboration that made the Nobel Prize-winning first detection of gravitational waves, as well as single-particle cryo-electron microscopy of viral proteins.",
        "requirements": {"gpa": "BS in Physics, Applied Physics, or Mathematics with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "Physics GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://uwm.edu/physics/graduate/"
      },
      {
        "title": "Ph.D. in Mechanical Engineering - Advanced Manufacturing & Connected Systems - CSI",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Connected Systems Institute Industry Fellowships $30,000/year plus tuition waiver",
        "fee": "$75",
        "tuition": "Covered by fellowship",
        "desc": "Conducted in partnership with Rockwell Automation at the Connected Systems Institute, focusing on industrial IoT digital twins, tribology and wear-resistant coatings, microfluidics, and battery materials.",
        "requirements": {"gpa": "BS in Mechanical or Industrial Engineering with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and CV", "references": "Three letters of recommendation"},
        "source": "https://uwm.edu/engineering/academics/graduate/mechanical-engineering-phd/"
      },
      {
        "title": "Ph.D. in Biomedical and Health Informatics - Clinical Data Mining & EHR Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "biology"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Research Assistantships $28,000/year plus full tuition remission",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "Interdisciplinary doctorate addressing machine learning algorithms for medical record diagnosis, mobile health monitoring algorithms, health disparity informatics, and bioinformatics genomics.",
        "requirements": {"gpa": "BS or MS in computer science, health informatics, or biology with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://uwm.edu/healthsciences/academics/biomedical-health-informatics-phd/"
      },
      {
        "title": "Master of Fine Arts in Film, Video, Animation, and New Genres - Peck School of the Arts",
        "type": "Degree",
        "subject": "arts-design",
        "subjects": ["arts-design"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Full graduate teaching assistantships including tuition waiver and annual living stipend",
        "fee": "$75",
        "tuition": "Covered by assistantship",
        "desc": "World-renowned avant-garde and experimental film program, providing advanced 16mm celluloid film processing, digital cinematography, sound installation art, and international film festival curation.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+ and creative film/video portfolio", "ielts": "TOEFL 80+", "gre": "GRE not required", "papers": "Artist statement and project proposal", "references": "Three letters of recommendation"},
        "source": "https://uwm.edu/arts/film/mfa/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Patrick Brady",
        "role": "Distinguished Professor of Physics",
        "department": "Department of Physics & Center for Gravitation, Cosmology and Astrophysics",
        "subject": "physics",
        "bio": "Dr. Brady is former spokesperson for the international LIGO Scientific Collaboration, leading research on gravitational wave data analysis from binary black hole and neutron star coalescences."
      },
      {
        "name": "Dr. Sandra McLellan",
        "role": "Professor of Freshwater Sciences",
        "department": "School of Freshwater Sciences",
        "subject": "environment",
        "bio": "Dr. McLellan investigates environmental microbiology of urban waterways, utilizing bacterial metagenomics to track sewage contamination and antibiotic resistance in the Great Lakes."
      },
      {
        "name": "Dr. Abbas Ourmazd",
        "role": "Distinguished Professor of Physics",
        "department": "Department of Physics",
        "subject": "physics",
        "bio": "Dr. Ourmazd develops pioneering manifold-embedding machine learning algorithms to reconstruct 3D dynamic molecular movies of biological macromolecules from X-ray free electron laser data."
      }
    ]
  },

  # 19. University of Wisconsin-Parkside (Row 1181)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Wisconsin-Parkside",
    "shortName": "UW-Parkside",
    "slug": "university-of-wisconsin-parkside",
    "location": "Kenosha, Wisconsin, United States",
    "website": "https://www.uwp.edu",
    "sourceRow": 1181,
    "stats": {"established": "1968", "students": "4,100+", "international": "5%", "faculty": "210+"},
    "heroSummary": "The University of Wisconsin-Parkside (UW-Parkside) is a comprehensive public university founded in 1968 on a 700-acre natural prairie and woodland preserve in Kenosha, Wisconsin, midway between Milwaukee and Chicago. Renowned for its pre-health professional placement rates in medical and dental schools, molecular biology, business, and criminal justice, UW-Parkside anchors the Southeast Wisconsin manufacturing and logistics hub.",
    "academicOverview": "UW-Parkside comprises four colleges: the College of Natural and Health Sciences, College of Business, Economics, and Computing, College of Social Sciences and Professional Studies, and the College of Arts and Humanities. The campus houses extensive prairie restoration sites and the Rita Tallent Picken Regional Center for Arts and Humanities.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate students, evaluating high school core GPA (minimum 2.5). Graduate applicants require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Master of Science in Molecular Biology - Applied Bioinformatics & Biotechnology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "computer-science"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate Teaching Assistantships $15,000/year plus full tuition remission",
        "fee": "$56",
        "tuition": "Covered by assistantship",
        "desc": "Research-focused laboratory master's offering advanced training in CRISPR gene editing, next-generation RNA sequencing, computational protein modeling, and recombinant antibody production.",
        "requirements": {"gpa": "BS in biology, biochemistry, or chemistry with GPA 3.0+", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of research interests and lab experience", "references": "Two letters of recommendation"},
        "source": "https://www.uwp.edu/learn/programs/molecularbiologyms.cfm"
      },
      {
        "title": "Master of Science in Cybersecurity - Enterprise Defense & Cloud Architecture",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Cybersecurity Merit Scholarships up to $6,000",
        "fee": "$56",
        "tuition": "$17,500 total",
        "desc": "NSA-aligned graduate curriculum teaching security compliance, intrusion analysis, cloud perimeter architecture, cryptography fundamentals, and corporate disaster recovery.",
        "requirements": {"gpa": "Bachelor's degree in STEM or business with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://www.uwp.edu/learn/programs/cybersecurityms.cfm"
      },
      {
        "title": "Master of Science in Sport Management - Facility Operations & Athlete Representation",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-04-01",
        "deadlineText": "April 1, 2027",
        "funding": "Departmental Athletics Assistantships covering partial tuition and stipend",
        "fee": "$56",
        "tuition": "$15,000 total",
        "desc": "Applied graduate degree leveraging the Chicago-Milwaukee professional sports corridor to train athletic directors, arena operations managers, and sports marketing specialists.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+; sport industry background preferred", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of professional goals", "references": "Two letters of recommendation"},
        "source": "https://www.uwp.edu/learn/programs/sportmanagementms.cfm"
      },
      {
        "title": "Bachelor of Science in Geosciences - Environmental Hydrogeology & Coastal Lake Michigan",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "chemistry"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "STEM Undergraduate Research Grants and institutional scholarships up to $8,000/year",
        "fee": "$44",
        "tuition": "$16,500/year (out-of-state) / $7,800/year (in-state)",
        "desc": "Hands-on geology program studying Lake Michigan coastal bluff erosion, glacial stratigraphy, groundwater aquifer contamination, and GIS spatial hazard mapping.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.uwp.edu/learn/programs/geosciencesmajor.cfm"
      },
      {
        "title": "Bachelor of Science in Applied Health Sciences - Pre-Chiropractic & Kinesiology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Health Sciences Achievement Awards up to $6,000/year",
        "fee": "$44",
        "tuition": "$16,500/year",
        "desc": "Pre-health curriculum offering articulated direct-admission pipelines with professional chiropractic and physical therapy doctorates, studying human kinematics and exercise physiology.",
        "requirements": {"gpa": "High school GPA 2.5+ with chemistry and biology", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.uwp.edu/learn/programs/appliedhealthsciencesmajor.cfm"
      },
      {
        "title": "Master of Business Administration (MBA) - Supply Chain & Logistics Analytics",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "College of Business Dean's Scholarships up to $5,000",
        "fee": "$56",
        "tuition": "$15,500 total",
        "desc": "AACSB-accredited evening and online MBA curriculum emphasizing logistics supply chain optimization, corporate finance, enterprise data modeling, and strategic marketing.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://www.uwp.edu/learn/programs/mba.cfm"
      }
    ],
    "researchers": [
      {
        "name": "Dr. David Higgs",
        "role": "Professor of Biological Sciences",
        "department": "Department of Biological Sciences",
        "subject": "biology",
        "bio": "Dr. Higgs investigates chloroplast gene expression, RNA-binding proteins regulating photosynthesis in Chlamydomonas reinhardtii, and post-transcriptional RNA processing mechanisms."
      },
      {
        "name": "Dr. John Skalbeck",
        "role": "Professor of Geosciences & Hydrogeology",
        "department": "Department of Geosciences",
        "subject": "environment",
        "bio": "Dr. Skalbeck conducts research in groundwater hydrogeology, coastal bluff erosion along Lake Michigan, hydrothermal heat flow modeling, and wetland restoration hydrology."
      },
      {
        "name": "Dr. Suresh Chalasani",
        "role": "Professor of Management Information Systems",
        "department": "College of Business, Economics, and Computing",
        "subject": "computer-science",
        "bio": "Dr. Chalasani conducts research on healthcare supply chains, RFID tracking in hospital logistics, cloud computing optimization, and tele-medicine system reliability."
      }
    ]
  },

  # 20. University of Wisconsin-Platteville (Row 1182)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Wisconsin-Platteville",
    "shortName": "UW-Platteville",
    "slug": "university-of-wisconsin-platteville",
    "location": "Platteville, Wisconsin, United States",
    "website": "https://www.uwplatt.edu",
    "sourceRow": 1182,
    "stats": {"established": "1866", "students": "6,700+", "international": "4%", "faculty": "420+"},
    "heroSummary": "The University of Wisconsin-Platteville (UW-Platteville) is a premier public polytechnic and comprehensive university founded in 1866 in the scenic Driftless Area of Southwest Wisconsin. Renowned throughout the Midwest for top-ranked engineering programs at the College of EMS—Wisconsin's second-largest engineering producer—as well as industrial technology, agricultural sciences on the 430-acre Pioneer Farm, and forensic investigation, UW-Platteville champions hands-on technical education.",
    "academicOverview": "UW-Platteville spans three colleges: the College of Engineering, Mathematics and Science (EMS), College of Business, Industry, Life Science and Agriculture (BILSA), and the College of Liberal Arts and Education. The campus features the state-of-the-art Sesquicentennial Hall engineering complex and the Pioneer Farm dairy research center.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core curriculum, GPA, and test scores (optional). Graduate admissions require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Bachelor of Science in Mechanical Engineering - Sesquicentennial Hall Innovation Labs",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Pioneer Engineering Endowed Scholarships up to $10,000/year",
        "fee": "$44",
        "tuition": "$17,500/year (out-of-state) / $8,200/year (in-state)",
        "desc": "Premier ABET-accredited engineering program housed in Sesquicentennial Hall, featuring precision CNC machining, wind tunnels, automation robotics, finite element thermal simulation, and senior industry design projects.",
        "requirements": {"gpa": "High school GPA 3.0+ with precalculus or calculus readiness", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "N/A", "papers": "Admissions essay detailing engineering passion", "references": "One math/science teacher reference"},
        "source": "https://www.uwplatt.edu/program/mechanical-engineering"
      },
      {
        "title": "Bachelor of Science in Dairy Science - Robotic Milking & Herd Nutrition - Pioneer Farm",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Wisconsin Dairy Industry Scholarships up to $6,000/year",
        "fee": "$44",
        "tuition": "$17,500/year",
        "desc": "Hands-on dairy management program based at the 430-acre Pioneer Farm, utilizing automated robotic milking systems, computerized dairy herd reproductive management, and agricultural nutrient runoff research.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Agricultural background statement", "references": "One recommendation"},
        "source": "https://www.uwplatt.edu/program/dairy-science"
      },
      {
        "title": "Master of Science in Engineering - Renewable Energy Systems & Structural Analysis",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Online and on-campus graduate assistantships up to $12,000/year",
        "fee": "$56",
        "tuition": "$19,000 total",
        "desc": "Applied graduate engineering degree delivering advanced competencies in finite element analysis, wind energy turbine dynamics, project management, and control systems.",
        "requirements": {"gpa": "BS in engineering from ABET-accredited institution with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GRE not required", "papers": "Statement of purpose and technical resume", "references": "Two professional references"},
        "source": "https://www.uwplatt.edu/program/engineering-ms"
      },
      {
        "title": "Bachelor of Science in Forensic Investigation - Crime Scene Processing & Forensic Anthropology",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Criminal Justice Departmental Grants up to $5,000",
        "fee": "$44",
        "tuition": "$17,500/year",
        "desc": "Operates the Forensic Investigation Crime Scene House (FICSH) and commercial decomposition research facility, providing hands-on training in bloodstain pattern analysis, forensic osteology, and courtroom evidence handling.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.uwplatt.edu/program/forensic-investigation"
      },
      {
        "title": "Bachelor of Science in Software Engineering - Autonomous Vehicles & Mobile Systems",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "EMS STEM Scholarships up to $8,000/year",
        "fee": "$44",
        "tuition": "$17,500/year",
        "desc": "ABET-accredited software engineering degree focusing on agile development cycles, embedded automotive microcontrollers, full-stack database systems, and secure software testing.",
        "requirements": {"gpa": "High school GPA 2.75+ with strong algebra skills", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.uwplatt.edu/program/software-engineering"
      },
      {
        "title": "Bachelor of Science in Environmental Science and Conservation - Driftless Watershed Ecology",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Driftless Conservation Fellowships up to $6,000",
        "fee": "$44",
        "tuition": "$17,500/year",
        "desc": "Field ecology degree utilizing the unglaciated Driftless Area's spring-fed coldwater trout streams, limestone bluffs, and oak savannas to study stream restoration, soil erosion mitigation, and invasive species.",
        "requirements": {"gpa": "High school GPA 2.5+ with science coursework", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Admissions essay", "references": "One recommendation"},
        "source": "https://www.uwplatt.edu/program/environmental-science-conservation"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Tera Montgomery",
        "role": "Professor of Dairy and Animal Science",
        "department": "School of Agriculture & Pioneer Farm",
        "subject": "biology",
        "bio": "Dr. Montgomery investigates dairy cow nutrition, calf metabolic health, robotic milking behavior metrics, and sustainable nutrient management on dairy farms in the Upper Midwest."
      },
      {
        "name": "Dr. Philip Parker",
        "role": "Associate Dean & Professor of Civil and Environmental Engineering",
        "department": "College of Engineering, Mathematics and Science",
        "subject": "engineering",
        "bio": "Dr. Parker specializes in wastewater treatment technologies, non-point source agricultural runoff mitigation, phosphorus recovery, and engineering pedagogy in laboratory environments."
      },
      {
        "name": "Dr. Patrick L. Solar",
        "role": "Associate Professor of Criminal Justice",
        "department": "Department of Criminal Justice & Forensic Investigation",
        "subject": "social-sciences",
        "bio": "Dr. Solar conducts research on police organizational culture, procedural justice implementation in municipal law enforcement, and crime scene search methodologies."
      }
    ]
  },

  # 21. University of Wisconsin–Oshkosh (Row 1183)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Wisconsin–Oshkosh",
    "shortName": "UW Oshkosh",
    "slug": "university-of-wisconsin-oshkosh",
    "location": "Oshkosh, Wisconsin, United States",
    "website": "https://www.uwosh.edu",
    "sourceRow": 1183,
    "stats": {"established": "1871", "students": "13,900+", "international": "4%", "faculty": "780+"},
    "heroSummary": "The University of Wisconsin–Oshkosh (UW Oshkosh / UWO) is a premier public doctoral-granting university established in 1871 along the shores of Lake Winnebago and the Fox River in Oshkosh, Wisconsin. Celebrated as a national leader in campus sustainability—operating the nation's first commercial dry anaerobic biodigester—UW Oshkosh is equally renowned for nursing, aviation management in the home of EAA AirVenture, and business.",
    "academicOverview": "UW Oshkosh spans four colleges: the College of Letters and Science, College of Nursing, College of Business, and College of Education and Human Services. Key research hubs include the Environmental Research and Innovation Center (ERIC), the Environmental Sciences Center, and the University of Wisconsin Oshkosh Aviation Program.",
    "researchAdmissions": "Admissions are holistic and test-optional for undergraduate students, evaluating high school GPA (minimum 2.5). Graduate admissions require an accredited bachelor's degree with a minimum 2.75–3.0 GPA, statement of purpose, two letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Bachelor of Science in Environmental Health - Lake Winnebago Water Quality - ERIC Center",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Environmental Research Innovation Center (ERIC) Assistantships up to $8,000/year",
        "fee": "$44",
        "tuition": "$17,200/year (out-of-state) / $8,100/year (in-state)",
        "desc": "EHAC-accredited environmental health curriculum conducting research at the ERIC Center on microcystin algal toxins in Lake Winnebago, well water contamination tracing, and industrial occupational hygiene.",
        "requirements": {"gpa": "High school GPA 2.5+ with chemistry and biology", "ielts": "TOEFL 79+ or IELTS 6.5+", "gre": "N/A", "papers": "Admissions application essay", "references": "One science recommendation"},
        "source": "https://www.uwosh.edu/biology/undergraduate/environmental-health/"
      },
      {
        "title": "Doctor of Nursing Practice (DNP) - Family Nurse Practitioner & Nurse Anesthesia",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "social-sciences"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "College of Nursing Endowed Scholarships up to $10,000",
        "fee": "$56",
        "tuition": "$24,000/year",
        "desc": "CCNE-accredited practice doctorate featuring advanced clinical rotations across Fox Valley health systems, focusing on diagnostic management, primary care epidemiology, and healthcare policy leadership.",
        "requirements": {"gpa": "BSN from accredited nursing program with GPA 3.2+; active Wisconsin RN license", "ielts": "TOEFL 85+", "gre": "GRE optional", "papers": "DNP personal goal statement", "references": "Three clinical/academic references"},
        "source": "https://www.uwosh.edu/con/graduate/dnp/"
      },
      {
        "title": "Bachelor of Science in Aviation Management - Airport Operations & Air Traffic - EAA Hub",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "engineering"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "EAA Aviation Foundation Scholarships up to $8,000/year",
        "fee": "$44",
        "tuition": "$17,200/year",
        "desc": "Situated in the global aviation capital of Oshkosh (home of EAA AirVenture), this program teaches international airline operations, airport master planning, aviation safety management systems (SMS), and aerospace logistics.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Aviation statement of intent", "references": "One recommendation"},
        "source": "https://www.uwosh.edu/aviation/"
      },
      {
        "title": "Master of Business Administration (MBA) - Sustainability Management & Supply Chain",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "College of Business Merit Awards up to $5,000",
        "fee": "$56",
        "tuition": "$16,500 total",
        "desc": "AACSB-accredited evening and online MBA focusing on circular economy business models, carbon footprint accounting, supply chain logistics, and executive organizational finance.",
        "requirements": {"gpa": "Bachelor's degree with GPA 2.75+", "ielts": "TOEFL 79+", "gre": "GMAT/GRE waiver available", "papers": "Statement of purpose and resume", "references": "Two recommendations"},
        "source": "https://www.uwosh.edu/cob/graduate/mba/"
      },
      {
        "title": "Bachelor of Science in Interactive Web Management - Full-Stack Web Architecture & SEO Analytics",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "social-sciences"],
        "deadline": "2027-05-01",
        "deadlineText": "May 1, 2027",
        "funding": "Digital Marketing Innovation Grants up to $5,000/year",
        "fee": "$44",
        "tuition": "$17,200/year",
        "desc": "Unique multidisciplinary degree uniting computer science coding, web UX design, digital marketing analytics, search engine optimization (SEO), and content management systems.",
        "requirements": {"gpa": "High school GPA 2.5+", "ielts": "TOEFL 79+", "gre": "N/A", "papers": "Personal statement", "references": "One recommendation"},
        "source": "https://www.uwosh.edu/iwm/"
      },
      {
        "title": "Master of Science in Biology - Freshwater Fisheries & Microbial Ecology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Graduate Teaching Assistantships $15,500/year plus tuition remission",
        "fee": "$56",
        "tuition": "Covered by assistantship",
        "desc": "Thesis-based biology master's utilizing the Lake Winnebago system to investigate lake sturgeon population demographics, viral hemorrhagic septicemia (VHS) fish dynamics, and aquatic insect bioindicators.",
        "requirements": {"gpa": "BS in biology or related field with GPA 3.0+", "ielts": "TOEFL 79+", "gre": "GRE optional", "papers": "Statement of research interests aligned with faculty lab", "references": "Three letters of recommendation"},
        "source": "https://www.uwosh.edu/biology/graduate/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Gregory Kleinheinz",
        "role": "Chair & Professor of Environmental Engineering Technology",
        "department": "Environmental Research and Innovation Center (ERIC)",
        "subject": "environment",
        "bio": "Dr. Kleinheinz directs the ERIC Center, specializing in recreational water microbial tracking, beach water quality forecasting models, anaerobic digestion of organic waste, and water filtration."
      },
      {
        "name": "Dr. Bob Stelzer",
        "role": "Professor of Biology",
        "department": "Department of Biology",
        "subject": "environment",
        "bio": "Dr. Stelzer investigates stream ecosystem ecology, groundwater-surface water interactions, nutrient spiraling (nitrogen and phosphorus) in agricultural watersheds, and freshwater benthic ecology."
      },
      {
        "name": "Dr. Nenad Stojilovic",
        "role": "Professor of Physics and Astronomy",
        "department": "Department of Physics and Astronomy",
        "subject": "physics",
        "bio": "Dr. Stojilovic conducts surface science research on nanoscale thin films, X-ray photoelectron spectroscopy (XPS), scanning electron microscopy, and photocatalytic titanium dioxide materials."
      }
    ]
  },

  # 22. University of Wyoming (Row 1184)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "University of Wyoming",
    "shortName": "UWyo",
    "slug": "university-of-wyoming",
    "location": "Laramie, Wyoming, United States",
    "website": "https://www.uwyo.edu",
    "sourceRow": 1184,
    "stats": {"established": "1886", "students": "11,800+", "international": "6%", "faculty": "780+"},
    "heroSummary": "The University of Wyoming (UWyo / UW) is Wyoming's sole public land-grant flagship research university, situated at 7,220 feet between the Laramie and Medicine Bow mountain ranges in Laramie, Wyoming. Renowned for energy engineering at the School of Energy Resources, atmospheric flight research aboard the King Air atmospheric aircraft, wildlife migration ecology, and supercomputing at the NCAR-Wyoming Supercomputing Center, UWyo anchors discovery across the Rocky Mountain West.",
    "academicOverview": "UWyo encompasses seven colleges: Agriculture, Life Sciences and Natural Resources; Engineering and Physical Sciences; Arts and Sciences; Business; Education; Health Sciences; and the College of Law. Flagship research centers include the School of Energy Resources (SER), the Wyoming Migration Initiative, and the High Bay Research Facility.",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA (minimum 3.0) and curriculum. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Petroleum and Energy Systems Engineering - Carbon Capture & Unconventional Reservoirs - SER",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "School of Energy Resources (SER) Fellowships $34,000/year plus complete tuition waiver",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Elite energy doctorate utilizing the High Bay Research Facility for high-pressure micro-CT imaging of fluid flow in porous rock, carbon dioxide geologic mineralization, and hydrogen storage in subterranean formations.",
        "requirements": {"gpa": "BS or MS in petroleum, chemical, or mechanical engineering with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose detailing energy research goals", "references": "Three letters of recommendation"},
        "source": "https://www.uwyo.edu/chemical-petroleum/graduate/index.html"
      },
      {
        "title": "Ph.D. in Atmospheric Science - Cloud Microphysics & Airborne Research Aircraft",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "National Science Foundation Airborne Research Assistantships $32,000/year plus tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Operating the NSF-supported Wyoming King Air atmospheric research aircraft, investigating winter cloud seeding efficacy, mixed-phase cloud microphysics, radar reflectivity of snow storms, and aerosol-cloud interactions.",
        "requirements": {"gpa": "Degree in atmospheric science, physics, meteorology, or engineering with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.uwyo.edu/atsc/graduate/index.html"
      },
      {
        "title": "Ph.D. in Zoology and Physiology - Wildlife Migration Corridor Ecology - Wyoming Migration Initiative",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Full graduate research assistantships $29,000/year plus complete tuition coverage",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Preeminent wildlife tracking doctorate through the Wyoming Migration Initiative, tracking mule deer and pronghorn long-distance migrations, predator-prey dynamics in the Greater Yellowstone Ecosystem, and highway wildlife crossings.",
        "requirements": {"gpa": "BS or MS in wildlife biology, zoology, or ecology with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Research statement and CV", "references": "Three letters of recommendation"},
        "source": "https://www.uwyo.edu/zoology/graduate/index.html"
      },
      {
        "title": "Ph.D. in Computer Science - Exascale Scientific Computing & AI - NWSC",
        "type": "Degree",
        "subject": "computer-science",
        "subjects": ["computer-science", "physics"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "NCAR-Wyoming Supercomputing Center (NWSC) Fellowships $31,000/year plus tuition waiver",
        "fee": "$50",
        "tuition": "Covered by fellowship",
        "desc": "Doctoral research connected to the NCAR-Wyoming Supercomputing Center (NWSC) in Cheyenne, focusing on parallel climate simulation models, automated geophysical inversion algorithms, and deep neural networks.",
        "requirements": {"gpa": "BS in Computer Science, Applied Mathematics, or Engineering with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://www.uwyo.edu/cosc/graduate/index.html"
      },
      {
        "title": "Ph.D. in Botany - Alpine Plant Adaptation & Microbial Ecology",
        "type": "Degree",
        "subject": "biology",
        "subjects": ["biology", "environment"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Rocky Mountain Herbarium Graduate Assistantships $28,000/year plus tuition remission",
        "fee": "$50",
        "tuition": "Covered by assistantship",
        "desc": "Housed alongside the Rocky Mountain Herbarium (over 1 million vascular plant specimens), studying alpine tundra plant freeze tolerance, mycorrhizal fungal symbiosis, and climate impacts on Western flora.",
        "requirements": {"gpa": "Undergraduate degree in botany, plant science, or biology with GPA 3.0+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests", "references": "Three letters of recommendation"},
        "source": "https://www.uwyo.edu/botany/graduate/index.html"
      },
      {
        "title": "Juris Doctor (J.D.) - Energy, Environment and Natural Resources Law - College of Law",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-04-15",
        "deadlineText": "April 15, 2027",
        "funding": "Center for Law and Energy Resources (CLER) Scholarships up to $18,000/year",
        "fee": "$50",
        "tuition": "$17,500/year (resident) / $35,000/year (non-resident)",
        "desc": "Top-tier natural resources law program training attorneys in public lands grazing permits, mineral royalties litigation, federal oil and gas leasing, water rights prior appropriation, and wildlife protection law.",
        "requirements": {"gpa": "Bachelor's degree with competitive undergraduate GPA and LSAT or GRE exam score", "ielts": "TOEFL 90+", "gre": "LSAT/GRE required", "papers": "Personal statement and legal resume", "references": "Two letters of recommendation"},
        "source": "https://www.uwyo.edu/law/"
      }
    ],
    "researchers": [
      {
        "name": "Dr. Matthew Kauffman",
        "role": "Director & Professor of Wildlife Conservation",
        "department": "Wyoming Migration Initiative & Department of Zoology",
        "subject": "environment",
        "bio": "Dr. Kauffman leads the Wyoming Migration Initiative, mapping big game ungulate migration corridors across the Western United States using GPS collar telemetry and advising federal land conservation policies."
      },
      {
        "name": "Dr. Mohammad Piri",
        "role": "Thomas and Shelley Botts Chair & Professor of Petroleum Engineering",
        "department": "Department of Chemical and Petroleum Engineering & High Bay",
        "subject": "engineering",
        "bio": "Dr. Piri is an international authority on multiphase flow in porous media, operating world-leading 3D X-ray tomography imaging systems for carbon dioxide sequestration and enhanced oil recovery."
      },
      {
        "name": "Dr. Bart Geerts",
        "role": "Professor of Atmospheric Science",
        "department": "Department of Atmospheric Science",
        "subject": "environment",
        "bio": "Dr. Geerts directs research on precipitation physics using the Wyoming Cloud Radar, airborne orographic snowstorm tracking, weather modification efficacy, and boundary-layer meteorology."
      }
    ]
  },

  # 23. Utah State University (Row 1191)
  {
    "countryId": "usa",
    "countryLabel": "United States",
    "institution": "Utah State University",
    "shortName": "Utah State",
    "slug": "utah-state-university",
    "location": "Logan, Utah, United States",
    "website": "https://www.usu.edu",
    "sourceRow": 1191,
    "stats": {"established": "1888", "students": "27,900+", "international": "7%", "faculty": "1,150+"},
    "heroSummary": "Utah State University (USU) is Utah's public flagship land-grant and space-grant Carnegie R1 research university, established in 1888 in scenic Cache Valley in Logan, Utah. Home to the world-renowned Space Dynamics Laboratory (SDL)—a DoD University Affiliated Research Center with flight hardware on hundreds of NASA satellite missions—USU is equally celebrated for water research at the Utah Water Research Laboratory, agriculture, and education.",
    "academicOverview": "USU comprises eight colleges including the College of Engineering, S.J. & Jessie E. Quinney College of Natural Resources, College of Agriculture and Applied Sciences, Emma Eccles Jones College of Education and Human Services, and the Jon M. Huntsman School of Business. USU operates the Space Dynamics Laboratory (SDL) and the Utah Water Research Laboratory (UWRL).",
    "researchAdmissions": "Undergraduate admissions evaluate high school core GPA and coursework. Graduate admissions require an accredited bachelor's degree with a minimum 3.0 GPA, statement of purpose, three letters of recommendation, and English language proficiency (TOEFL 79+ or IELTS 6.5+).",
    "opps": [
      {
        "title": "Ph.D. in Electrical and Computer Engineering - Spacecraft Avionics & SmallSats - Space Dynamics Lab",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "physics"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Space Dynamics Laboratory Graduate Fellowships $34,000/year plus complete tuition coverage",
        "fee": "$55",
        "tuition": "Covered by fellowship",
        "desc": "Elite space systems doctorate partnering with the Space Dynamics Laboratory (SDL), investigating small satellite constellations, cryogenic infrared space sensors, autonomous spacecraft navigation, and rad-hard embedded electronics.",
        "requirements": {"gpa": "BS or MS in electrical, computer, or aerospace engineering with GPA 3.3+", "ielts": "TOEFL 80+ or IELTS 6.5+", "gre": "GRE optional", "papers": "Statement of purpose detailing space systems focus", "references": "Three letters of recommendation"},
        "source": "https://engineering.usu.edu/ece/students/graduate/phd"
      },
      {
        "title": "Ph.D. in Civil and Environmental Engineering - Water Resources & Hydroinformatics - UWRL",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "engineering"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Utah Water Research Laboratory Research Assistantships $32,000/year plus full tuition remission",
        "fee": "$55",
        "tuition": "Covered by assistantship",
        "desc": "Housed at the world-renowned Utah Water Research Laboratory (UWRL), researching Colorado River basin hydrology, high-resolution hydraulic flume modeling, sensor cyber-infrastructure, and snowmelt runoff forecasting.",
        "requirements": {"gpa": "BS in civil/environmental engineering or related field with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests and CV", "references": "Three letters of recommendation"},
        "source": "https://engineering.usu.edu/cee/students/graduate/phd"
      },
      {
        "title": "Ph.D. in Ecology - Aspen Forest Dynamics & Wildlife Management - Quinney College",
        "type": "Degree",
        "subject": "environment",
        "subjects": ["environment", "biology"],
        "deadline": "2027-01-05",
        "deadlineText": "January 5, 2027",
        "funding": "Quinney Doctoral Fellowships $30,000/year plus full tuition remission",
        "fee": "$55",
        "tuition": "Covered by fellowship",
        "desc": "Top-tier ecological doctorate based at the Quinney College of Natural Resources, studying quaking aspen clonal forest restoration (including Pando, the world's largest organism), ungulate herbivory, and forest fire dynamics.",
        "requirements": {"gpa": "BS or MS in ecology, forestry, wildlife, or biology with GPA 3.3+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of research interests aligned with faculty advisor", "references": "Three letters of recommendation"},
        "source": "https://qcnr.usu.edu/directory/graduate-programs"
      },
      {
        "title": "Ph.D. in Mechanical and Aerospace Engineering - Autonomous UAV Guidance & Spacecraft Control",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "computer-science"],
        "deadline": "2027-02-01",
        "deadlineText": "February 1, 2027",
        "funding": "Graduate Research Assistantships $31,000/year plus complete tuition waiver",
        "fee": "$55",
        "tuition": "Covered by assistantship",
        "desc": "Doctoral research in aeroacoustics, nonlinear flight control of uncrewed aerial systems, orbital trajectory optimization, hypersonic aerodynamics, and composite spacecraft structures.",
        "requirements": {"gpa": "BS in mechanical or aerospace engineering with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://engineering.usu.edu/mae/students/graduate/phd"
      },
      {
        "title": "Ph.D. in Biological Engineering - Synthetic Biology & Metabolic Engineering",
        "type": "Degree",
        "subject": "engineering",
        "subjects": ["engineering", "biology"],
        "deadline": "2027-01-15",
        "deadlineText": "January 15, 2027",
        "funding": "Departmental Teaching and Research Fellowships $29,000/year plus tuition remission",
        "fee": "$55",
        "tuition": "Covered by fellowship",
        "desc": "Engineering living cells to synthesize recombinant spider silk biomaterials, biofuels from microalgae, therapeutic proteins, and biochemical diagnostic biosensors.",
        "requirements": {"gpa": "BS in biological engineering, chemical engineering, or biochemistry with GPA 3.2+", "ielts": "TOEFL 80+", "gre": "GRE optional", "papers": "Statement of purpose and lab experience record", "references": "Three letters of recommendation"},
        "source": "https://engineering.usu.edu/be/students/graduate/phd"
      },
      {
        "title": "Master of Science in Economics - Environmental Economics & Agricultural Policy - Huntsman School",
        "type": "Degree",
        "subject": "social-sciences",
        "subjects": ["social-sciences", "environment"],
        "deadline": "2027-03-01",
        "deadlineText": "March 1, 2027",
        "funding": "Huntsman School of Business Graduate Assistantships $18,000/year plus tuition support",
        "fee": "$55",
        "tuition": "$20,000/year",
        "desc": "Rigorous quantitative economics master's examining Western water rights markets, public lands policy, agricultural trade optimization, and econometrics.",
        "requirements": {"gpa": "Bachelor's degree with GPA 3.0+; strong preparation in calculus and intermediate economic theory", "ielts": "TOEFL 80+", "gre": "GRE/GMAT required", "papers": "Statement of purpose", "references": "Three letters of recommendation"},
        "source": "https://huntsman.usu.edu/econ/graduate"
      }
    ],
    "researchers": [
      {
        "name": "Dr. David Geller",
        "role": "Professor of Mechanical and Aerospace Engineering",
        "department": "Department of Mechanical and Aerospace Engineering & SDL",
        "subject": "engineering",
        "bio": "Dr. Geller investigates spacecraft navigation and guidance systems, autonomous rendezvous and docking algorithms for NASA missions, and linear covariance analysis."
      },
      {
        "name": "Dr. Paul Rogers",
        "role": "Director & Adjunct Professor of Ecology",
        "department": "Western Aspen Alliance & Quinney College of Natural Resources",
        "subject": "environment",
        "bio": "Dr. Rogers directs the Western Aspen Alliance, leading research on the health, herbivory threats, and conservation management of the Pando clone and Western aspen ecosystems."
      },
      {
        "name": "Dr. Randy Lewis",
        "role": "Professor of Biological Engineering",
        "department": "Department of Biological Engineering",
        "subject": "engineering",
        "bio": "Dr. Lewis is a world-renowned pioneer in synthetic spider silk, developing recombinant protein expression systems for artificial spider silk fibers, biomaterial adhesives, and surgical sutures."
      }
    ]
  }
]
